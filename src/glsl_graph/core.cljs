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
    ; TODO: integrate
    ;(-> renderer (.render scene camera))
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

(defn render2
  [o]
  (aset (:uniforms o) "u_texture_positions" "value" (:rt-positions2 o))
  (aset (:uniforms o) "u_texture_velocities" "value" (:rt-velocities2 o))

  ; update velocities
  (aset (:mesh o) "material" (:velocity-material o))
  (-> (:renderer o) (.render (:scene o) (:camera o) (:rt-velocities1 o) true))

  ; update positions
  (aset (:mesh o) "material" (:position-material o))
  (-> (:renderer o) (.render (:scene o) (:camera o) (:rt-positions1 o) true))

  ; render to screen
  (-> (:renderer o) (.setSize window.innerWidth window.innerHeight))
  (-> (:renderer o) (.render (:screen-scene o) (:screen-camera o)))

  ; swap buffers and iterate
  (let
    [o (-> o
         (assoc :rt-positions1 (:rt-positions2 o))
         (assoc :rt-positions2 (:rt-positions1 o))
         (assoc :rt-velocities1 (:rt-velocities2 o))
         (assoc :rt-velocities2 (:rt-velocities1 o))
         )]
    (js/requestAnimationFrame (partial render2 o))
    )
  )

(defn gen-texture
  [node-count tw th]
  (let
    [rgba-size 4
     raw-positions (new js/Float32Array (* tw th rgba-size))
     raw-velocities (new js/Float32Array (* tw th rgba-size))
     _ (doseq [i (range 0 (* tw th rgba-size) rgba-size)]
         (let
           [x (js/Math.random)
            y (js/Math.random)
            z (js/Math.random)]
           (aset raw-positions (+ i 0) x)
           (aset raw-positions (+ i 1) y)
           (aset raw-positions (+ i 2) z)
           (aset raw-positions (+ i 3) 0)
           )
         (let
           [x (js/Math.random)
            y (js/Math.random)
            z (js/Math.random)]
           (aset raw-velocities (+ i 0) x)
           (aset raw-velocities (+ i 1) y)
           (aset raw-velocities (+ i 2) z)
           (aset raw-velocities (+ i 3) 0)
           ))
     t-positions (new THREE.DataTexture
                      raw-positions
                      tw th
                      THREE.RGBAFormat
                      THREE.FloatType)
     _ (aset t-positions "minFilter" THREE.NearestFilter)
     _ (aset t-positions "wrapS" THREE.ClampToEdgeWrapping)
     _ (aset t-positions "wrapT" THREE.ClampToEdgeWrapping)
     _ (aset t-positions "needsUpdate" true)
     t-velocities (new THREE.DataTexture
                      raw-velocities
                      tw th
                      THREE.RGBAFormat
                      THREE.FloatType)
     _ (aset t-velocities "minFilter" THREE.NearestFilter)
     _ (aset t-velocities "wrapS" THREE.ClampToEdgeWrapping)
     _ (aset t-velocities "wrapT" THREE.ClampToEdgeWrapping)
     _ (aset t-velocities "needsUpdate" true)
     ]
    [t-positions t-velocities]
    ))


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
                        :u_speed_reduction
                        {
                         :type "f"
                         :value 1000.0
                         }
                        :u_min_dist
                        {
                         :type "f"
                         :value 1.0
                         }
                        :u_dist_reduction
                        {
                         :type "f"
                         :value 30.0
                         }
                        :u_node_count 
                        {
                         :type "f"
                         :value node-count
                         }
                        :u_texture_positions
                        {
                         :type "t"
                         :value nil
                         }
                        :u_texture_velocities
                        {
                         :type "t"
                         :value nil
                         }
                        :u_resolution
                        {
                         :type "v2"
                         :value (new THREE.Vector2 tw th)
                         }
                        })
     uniforms-pass-through (clj->js {
                            :u_pass_texture 
                            {
                             :type "t"
                             :value nil
                            }
                            :u_resolution
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
                     :u_texture_positions
                     {
                      :type "t"
                      :value nil
                      }
                     :u_resolution
                     {
                      :type "v2"
                      :value (new THREE.Vector2 window.innerWidth window.innerHeight)
                      }
                     }
     screen-attributes {
                       :a_displacement_index
                       {
                        :type "v"
                        :value []
                        :needsUpdate true
                       }
                       :a_color
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
     screen-geometry (new THREE.BufferGeometry)
     _ (-> screen-geometry
         (.addAttribute
           "position"
           (new THREE.BufferAttribute 
                (new js/Float32Array (* node-count 3))
                3)))
     _ (-> screen-geometry
         (.addAttribute
           "a_color"
           (new THREE.BufferAttribute 
                (new js/Float32Array (* node-count 3))
                3)))
     _ (-> screen-geometry
         (.addAttribute
           "a_displacement_index"
           (new THREE.BufferAttribute
                (new js/Float32Array (* node-count 2))
                2)))
     node-index-to-texture 
      (fn [i]
        (let
          [xf (/ (mod i tw) tw)
           y (js/Math.floor (/ i tw))
           yf (/ y th)
           ]
          [xf yf]))
     vertices (-> screen-geometry (.getAttribute "position"))
     a_displacement_index (-> screen-geometry (.getAttribute "a_displacement_index"))
     a_color (-> screen-geometry (.getAttribute "a_color"))
     _ (doseq [i (range 0 node-count)]
         (let
           [[xf yf] (node-index-to-texture i)
            r (js/Math.random)
            g (js/Math.random)
            b (js/Math.random)
            ]
           (-> vertices (.setXYZ i 0 0 0))
           (-> a_displacement_index (.setXY i xf yf))
           (-> a_color (.setXYZ i r g b)) 
         ))
     particle-cloud (new THREE.Points screen-geometry screen-material)
     _ (-> screen-scene (.add particle-cloud))
     _ (-> screen-scene (.add (new THREE.AmbientLight 0x444444)))
     rt (new THREE.WebGLRenderTarget
                        tw th
                        #js 
                        {
                         :wrapS THREE.ClampToEdgeWrapping
                         :wrapT THREE.ClampToEdgeWrapping
                         :magFilter THREE.NearestFilter
                         :minFilter THREE.NearestFilter
                         :format THREE.RGBAFormat
                         :type THREE.FloatType
                         :stencilBuffer false
                         }
                        )
     rt-positions1 (-> rt .clone)
     rt-positions2 (-> rt .clone)
     rt-velocities1 (-> rt .clone)
     rt-velocities2 (-> rt .clone)
     [t-positions t-velocities] (gen-texture node-count tw th)

     ; copy positions texture
     _ (aset uniforms-pass-through "u_pass_texture" "value" t-positions)
     _ (aset mesh "material" pass-through-material)
     _ (-> renderer (.render scene camera rt-positions1 true))
     _ (-> renderer (.render scene camera rt-positions2 true))

     ; copy velocities texture
     _ (aset uniforms-pass-through "u_pass_texture" "value" t-velocities)
     _ (aset mesh "material" pass-through-material)
     _ (-> renderer (.render scene camera rt-velocities1 true))
     _ (-> renderer (.render scene camera rt-velocities2 true))
     options
      {
       :uniforms uniforms
       :rt-positions1 rt-positions1
       :rt-positions2 rt-positions2
       :rt-velocities1 rt-velocities1
       :rt-velocities2 rt-velocities2
       :mesh mesh
       :scene scene
       :camera camera
       :velocity-material velocity-material
       :position-material position-material
       :renderer renderer
       :screen-scene screen-scene
       :screen-camera screen-camera
       }
     _ (render2 options)
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

