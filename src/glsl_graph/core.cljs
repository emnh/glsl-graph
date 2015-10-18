(ns ^:figwheel-always glsl-graph.core
  (:require-macros 
    [glsl-graph.macros :as macros :refer [defcom]]
    )
  (:require
    [clojure.set :as cset]
    [cats.core :as m]
    [com.stuartsierra.component :as component]
    [javelin.core :refer [cell] :refer-macros [cell= dosync]]
    [jayq.core :as jayq :refer [$]]
    [promesa.core :as p]
    ))

(enable-console-print!)

;; JS Libraries
(defonce three js/THREE)
(defonce THREE js/THREE)
(defonce sweet-alert js/sweetAlert)

;; COMMON

(defrecord JSObj [initializer data]
  component/Lifecycle
  (start [component] 
    (if 
      (= data nil)
      (do
        ;(println "Allocating JSObj")
        (assoc component :data (initializer)))
      component))
  ;(stop [component] (assoc component :data nil)))
  (stop [component] component))

(defn new-jsobj [initializer]
  (map->JSObj {:initializer initializer}))

(defn data [component]
  (:data component))

(defn add-component
  [system k v]
  (if 
    (not (k @system))
    (swap! system #(assoc % k v))))

(defn readd-component
  [system k v]
  (swap! system #(assoc % k v)))

;; COMPONENTS

(defonce system (atom {}))

(add-component system :renderer (new-jsobj #(new three.WebGLRenderer #js { :antialias true })))
(add-component system :scene (new-jsobj #(new three.Scene)))
(add-component system :raycaster (new-jsobj #(new three.Raycaster)))
(add-component system :light (new-jsobj #(new three.DirectionalLight)))

(defcom
  system
  window
  []
  [width height]
  (fn [c]
    (let
      [width (or width (cell (.-innerWidth js/window)))
       height (or height (cell (.-innerHeight js/window)))
       ]
      (->
        c
        (assoc :width width)
        (assoc :height height))))
  (fn [c] c)
  )

(defcom
  system
  camera
  [window]
  [camera aspect]
  (fn [c]
    (let
      [camera 
       (or
        camera
        (let
         [
          width @(:width window)
          height @(:height window)
          FOV 35
          frustumFar 1000000
          frustumNear 1
          ]
          (new js/THREE.PerspectiveCamera FOV (/ width height) frustumNear frustumFar)))
       new-aspect (or 
               aspect 
                (cell= (/ (:width window) (:height window))))
       _ (or aspect (cell= (-> camera .-aspect (set! new-aspect))))
         ]
      (-> c
        (assoc :camera camera)
        (assoc :aspect new-aspect)
        )))
  identity
  )

(defcom 
  system
  init-scene
  [window renderer camera scene]
  [done set-size]
  (fn [c]
    (let
      [$body ($ "body")
       renderer (data renderer)
       width (:width window)
       height (:height window)
       set-size (or set-size (cell= (-> renderer (.setSize width height))))
       ]
      (-> $body (.append (-> renderer .-domElement)))
      (->
        c
        (assoc :set-size set-size)))
    )
  identity
  )

(defn on-resize
  [c evt]
  (dosync
    (reset! (get-in c [:window :width]) (.-innerWidth js/window))
    (reset! (get-in c [:window :height]) (.-innerHeight js/window))
    )
  )

(defcom
  system
  resize
  [window]
  []
  (fn [c]
    (-> ($ js/window)
      (.unbind "resize.glsl-graph-resize")
      (.bind "resize.glsl-graph-resize" (partial on-resize c)))
    c)
  (fn [c]
    (-> ($ js/window)
      (.unbind "resize.glsl-graph-resize"))
    c)
  )

(defn render-loop
  [c]
  (let
    [camera (:camera (:camera c))
     scene (data (:scene c))
     renderer (data (:renderer c))
     running @(:running c)
     ]
    (-> renderer (.render scene camera))
    (if running (js/requestAnimationFrame (partial render-loop c)))
    )
  )

(defcom
  system
  render-loop
  [renderer camera scene]
  [running]
  (fn [c] 
    (let 
      [c (assoc c :running (atom true))]
      (render-loop c)
      c))
  (fn [c]
    (if
      (not= running nil)
      (reset! running false))
    c)
  )

;(def graph-url "http://s3.amazonaws.com/yasiv_uf/out/HB/blckhole/index.js")
(def graph-url "graphtest/index.js")

(defn ajax
  [url data-type]
  (p/promise
    (fn [resolve reject]
      (->
        js/jQuery
        (.ajax
          #js
          {
           :url url
           :dataType data-type
           }
          )
        (.then resolve reject)))))

(defn handle-graph
  [c graph-data status jqxhr]
;  (-> js/console
;    (.log "data" data))
  (let
    [graph-data (js->clj graph-data :keywordize-keys true)
     records-per-edge (:recordsPerEdge graph-data)
     links (:links graph-data)
     edges (for [i (range 0 (count links) records-per-edge)]
             [(get links i) (get links (+ i 1))])
     nodes (sort
             (cset/union
               (set (for [edge edges] (get edge 0)))
               (set (for [edge edges] (get edge 1)))))
     nodes-indexed (reduce 
                     (fn [m [i2 n2]] 
                       (assoc m i2 n2))
                     {}
                     (map-indexed vector nodes))
     nodes-reverse (reduce 
                     (fn [m [i2 n2]] 
                       (assoc m n2 i2))
                     {}
                     (map-indexed vector nodes))
     edges-indexed (map
                     (fn [edge]
                       [(get nodes-reverse (get edge 0))
                        (get nodes-reverse (get edge 1))])
                     edges)
     node-count (count nodes)
     sq (js/Math.ceil (js.Math.sqrt node-count))
     tw sq
     th sq
     floats-per-planet 4.0
     out-width sq
     out-height sq
     renderer (data (:renderer c))
     ;_ (-> renderer (.setSize out-width out-height))
     ;_ (js/document.body.appendChild renderer.domElement)
     camera (new three.Camera)
     _ (set! camera.position.z 1)
     gl (renderer.getContext)
     _ (if (= (-> gl (.getExtension "OES_texture_float")) nil)
         (sweet-alert "No OES_texture_float support for float textures!" "error"))
     _ (if (= (-> gl (.getParameter gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) 0)
         (sweet-alert "No support for vertex shader textures!" "error"))
     scene (new THREE.Scene)
     defines (clj->js {
              :SQPLANET sq
              :FLOATSPERPLANET floats-per-planet
              })
     uniforms (clj->js {
                        :node_count node-count
                        :texture_positions
                        {
                         :type "t"
                         :value nil
                         }
                        :texture_velocities
                        {
                         :type "t"
                         :value nil
                         }
                        :resolution
                        {
                         :type "v2"
                         :value (new THREE.Vector2 tw th)
                         }
                        })
     uniforms-pass-through (clj->js {
                            :pass_texture 
                            {
                             :type "t"
                             :value nil
                            }
                            :resolution
                            {
                             :type "v2"
                             :value (new three.Vector2 out-width out-height)
                             }
                            })
     pass-through-vs (-> ($ "#pass-through-vs") .text)
     pass-through-fs (-> ($ "#pass-through-fs") .text)
     pass-through-material (new THREE.ShaderMaterial 
                                (clj->js
                                  {
                                   :defines defines
                                   :uniforms uniforms-pass-through
                                   :vertexShader pass-through-vs
                                   :fragmentShader pass-through-fs
                                   :depthWrite false
                                  }))
     velocity-fs (-> ($ "#velocity-fs") .text)
     velocity-material (new THREE.ShaderMaterial
                            (clj->js
                              {
                               :defines defines
                               :uniforms uniforms
                               :vertexShader pass-through-vs
                               :fragmentShader velocity-fs
                               :depthWrite false
                               }))
     position-fs (-> ($ "#position-fs") .text)
     position-material (new THREE.ShaderMaterial
                            (clj->js
                              {
                               :defines defines
                               :uniforms uniforms
                               :vertexShader pass-through-vs
                               :fragmentShader position-fs
                               :depthWrite false
                               }
                              ))
     plane (new THREE.PlaneBufferGeometry 2 2)
     mesh (new THREE.Mesh plane pass-through-material)
     _ (-> scene (.add mesh))
     screen-scene (new THREE.Scene)
     screen-camera (new THREE.PerspectiveCamera 
                        75 (/ window.innerWidth window.innerHeight) 0.1 1000)
     _ (set! screen-camera.position.z 1)
     screen-geometry (new THREE.Geometry)
     screen-uniforms {
                     :texture_positions
                     {
                      :type "t"
                      :value nil
                      }
                     :resolution
                     {
                      :type "v2"
                      :value (new THREE.Vector2 window.innerWidth window.innerHeight)
                      }
                     }
     screen-attributes {
                       :displacement_index
                       {
                        :type "v"
                        :value []
                        :needsUpdate true
                       }
                       :pcolor
                       {
                        :type "c"
                        :value []
                        :needsUpdate true
                        }
                       }
     screen-vs (-> ($ "#screen-vs") .text)
     screen-fs (-> ($ "#screen-fs") .text)
     screen-material (new THREE.ShaderMaterial
                       (clj->js
                         {
                          :uniforms screen-uniforms
                          ;:attributes screen-attributes
                          :vertexShader screen-vs
                          :fragmentShader screen-fs
                          :transparent true
                          :blending THREE.AdditiveBlending
                          :depthWrite false
                          }))
     ]
    )
  )

(defn handle-graph-error
  [jqxhr status error]
  (-> js/console (.log "AJAX error" jqxhr status error))
  )
        
(defcom
  system
  get-graph
  [renderer scene camera]
  [graph]
  (fn [c]
    (->
      (ajax graph-url "json")
      (p/then (partial handle-graph c))
      )
      ;(p/catch handle-graph-error))
    c)
  identity
  )


;; MAIN

(defonce ran (atom false))

(defn main
  []
  (reset! ran true)
  (println "main")
  (swap! system component/stop-system)
  (try
    (swap! system component/start-system)
    (catch js/Object e
      (let
        [simple-e (component/ex-without-components e)]
        (.log js/console simple-e)
        (.log js/console (aget simple-e "cause"))
        (throw (aget simple-e "cause"))
        ))))

(if @ran (main) (js/$ (main)))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

