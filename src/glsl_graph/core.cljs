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

(add-component system :render-stats (new-jsobj #(new js/Stats)))
(add-component system :physics-stats (new-jsobj #(new js/Stats)))

(add-component system :dat-gui (new-jsobj #(new js/dat.GUI)))

(defcom
  system
  init-dat
  [dat-gui get-graph]
  []
  (fn [c]
    (m/mlet
      [a (:render-options-ready get-graph)]
      (let
        [render-options @(:render-options get-graph)
         uniforms (:uniforms render-options)
         dat-gui (data dat-gui)
         config #js 
         {
          :u_dist_reduction (* (aget uniforms "u_dist_reduction" "value") 1000)
          :u_spring_coefficient (* (aget uniforms "u_spring_coefficient" "value") 1000)
          :u_spring_length (* (aget uniforms "u_spring_length" "value") 1000)
          }]
        (-> dat-gui 
          (.add config "u_dist_reduction")
          (.min 0.001)
          (.step 0.001)
          (.onChange (fn [value]
                       (println "set value" value)
                       (aset uniforms "u_dist_reduction" "value" (/ value 1000)))))
        (-> dat-gui
          (.add config "u_spring_coefficient")
          (.onChange (fn [value]
                       (aset uniforms "u_spring_coefficient" "value" (/ value 1000)))))
        (-> dat-gui
          (.add config "u_spring_length")
          (.onChange (fn [value]
                       (aset uniforms "u_spring_length" "value" (/ value 1000)))))
        ))
    c)
  identity
  )

(defcom
  system
  init-stats
  [render-stats physics-stats]
  []
  (fn [c]
    (let
      [render-stats (data render-stats)
       physics-stats (data physics-stats)
       $render-stats ($ (-> render-stats .-domElement))
       $physics-stats ($ (-> physics-stats .-domElement))
       ]
      (->
        ($ "body")
        (.append $render-stats))
      (jayq/css
          $render-stats
          {
           :position "absolute"
           :top 0
           :z-index 100
           })
      (->
        ($ "body")
        (.append $physics-stats))
      (jayq/css
          $physics-stats
          {
           :position "absolute"
           :top 50
           :z-index 100
           }))
    c)
  identity
  )

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
          frustumNear 0
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

(defn render-loop-compute
  [c o]
  (let
    [camera (:camera (:camera c))
     scene (data (:scene c))
     renderer (data (:renderer c))
     running @(:running c)
     o (if (= o nil) 
         @(get-in c [:get-graph :render-options])
         o)
     ]
    (if 
      (not= o nil)
      (do
        (doseq [i (range 1)]
          (aset (:uniforms o) "u_time_old" "value" (aget (:uniforms o) "u_time" "value"))
          (aset (:uniforms o) "u_time" "value" (/ (-> (new js/Date) .getTime) 1000.0))
          (aset (:uniforms o) "u_time_delta" "value" (- (aget (:uniforms o) "u_time" "value") (aget (:uniforms o) "u_time_old" "value")))
          (aset (:uniforms o) "u_texture_positions" "value" (:rt-positions2 o))
          (aset (:uniforms o) "u_texture_velocities" "value" (:rt-velocities2 o))
          (aset (:uniforms o) "u_texture_edges" "value" (:t-edges o))
          (aset (:uniforms o) "u_iteration" "value"
                (+ 1 (aget (:uniforms o) "u_iteration" "value")))

          ; update velocities
          (aset (:mesh o) "material" (:velocity-material o))
          (-> (:renderer o) (.render (:scene o) (:camera o) (:rt-velocities1 o) true))

          ; update positions
          (aset (:mesh o) "material" (:position-material o))
          (-> (:renderer o) (.render (:scene o) (:camera o) (:rt-positions1 o) true))

          (let
            [physics-stats (data (:physics-stats c))]
            (-> physics-stats .update)
            ))

        ; swap buffers and iterate
        (let
          [o (-> o
               (assoc :rt-positions1 (:rt-positions2 o))
               (assoc :rt-positions2 (:rt-positions1 o))
               (assoc :rt-velocities1 (:rt-velocities2 o))
               (assoc :rt-velocities2 (:rt-velocities1 o))
               )]
          (if running (js/setTimeout (partial render-loop-compute c o) 0))
          ))
      (if running (js/setTimeout (partial render-loop-compute c nil) 0))
      )
    )
  )

(defn render-loop-screen
  [c o]
  (let
    [camera (:camera (:camera c))
     scene (data (:scene c))
     renderer (data (:renderer c))
     running @(:running c)
     o (if (= o nil) 
         @(get-in c [:get-graph :render-options])
         o)
     ]
    (if 
      (not= o nil)
      (do
        ; render to screen
        (aset (:screen-uniforms o) "u_texture_positions" "value" (:rt-positions1 o))
        (-> (:renderer o) (.setSize window.innerWidth window.innerHeight))
        (-> (:screen-camera o) .-aspect (set! (/ window.innerWidth window.innerHeight)))
        (-> (:renderer o) (.render (:screen-scene o) (:screen-camera o)))

        (let
          [render-stats (data (:render-stats c))]
          (-> render-stats .update)
          )

        ; swap buffers and iterate
        (let
          [o (-> o
               (assoc :rt-positions1 (:rt-positions2 o))
               (assoc :rt-positions2 (:rt-positions1 o))
               )]
          (if running (js/requestAnimationFrame (partial render-loop-screen c o)))
          ))
      (if running (js/requestAnimationFrame (partial render-loop-screen c nil)))
      )
    )
  )

(defcom
  system
  render-loop
  [renderer camera scene init-scene get-graph render-stats physics-stats]
  [running]
  (fn [c] 
    (let 
      [c (assoc c :running (atom true))]
      (render-loop-compute c nil)
      (render-loop-screen c nil)
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

(defn gen-texture
  [node-count edge-count tw th ew eh node-neighbours-startpos node-neighbours-flat]
  (let
    [rgba-size 4
     raw-positions (new js/Float32Array (* tw th rgba-size))
     raw-velocities (new js/Float32Array (* tw th rgba-size))
     raw-edges (new js/Float32Array (* ew eh rgba-size))
     _ (doseq [i (range node-count)]
         (let
           [j (* i rgba-size)]
           (let
             [sz 1
              fixed 0.5
              x (* sz (js/Math.random))
              y (* sz (js/Math.random))
              z (* sz (js/Math.random))
;              x fixed
;              y fixed
;              z fixed
              w2 (nth node-neighbours-startpos (+ i 1))
              w1 (nth node-neighbours-startpos (+ i 0))
              w (- w2 w1)
              w (/ w edge-count)
              ]
             (aset raw-positions (+ j 0) x)
             (aset raw-positions (+ j 1) y)
             (aset raw-positions (+ j 2) z)
             (aset raw-positions (+ j 3) w)
             )
           (let
             [fixed 0.5
              x (js/Math.random)
              y (js/Math.random)
              z (js/Math.random)
              x fixed
              y fixed
              z fixed
              w (nth node-neighbours-startpos (+ i 0))
              w (/ w edge-count)
              ]
             (aset raw-velocities (+ j 0) x)
             (aset raw-velocities (+ j 1) y)
             (aset raw-velocities (+ j 2) z)
             (aset raw-velocities (+ j 3) w)
             )
           ))
     _ (doseq [i (range edge-count)]
         (let
          [
           x (nth node-neighbours-flat i)
           x (/ x node-count)
           ]
          (aset raw-edges i x)
          ))
     new-texture 
      #(let
         [t (new THREE.DataTexture %1 %2 %3 THREE.RGBAFormat THREE.FloatType)]
         (doto t
           (aset "minFilter" THREE.NearestFilter)
           (aset "wrapS" THREE.ClampToEdgeWrapping)
           (aset "wrapT" THREE.ClampToEdgeWrapping)
           (aset "needsUpdate" true))
          t)
     t-positions (new-texture raw-positions tw th)
     t-velocities (new-texture raw-velocities tw th)
     t-edges (new-texture raw-edges ew eh)
     ]
    [t-positions t-velocities t-edges]
    ))


(defn handle-graph
  [c graph-data status jqxhr]
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
     node-neighbours (vec (map #(vector) (range node-count)))
     node-neighbours (reduce
                       (fn [m edge]
                         (-> m
                           (update-in [(get edge 0)] #(conj % (get edge 1)))
                           (update-in [(get edge 1)] #(conj % (get edge 0)))))
                       node-neighbours
                       edges-indexed)
     degrees (map #(count %) node-neighbours)
     max-degree (apply max degrees)
     [node-neighbours-startpos total] 
      (reduce
       (fn [[v total] neighbour-list]
         [(conj v total)
          (+ total (count neighbour-list))
          ])
       [[] 0]
       node-neighbours)
     node-neighbours-startpos (conj node-neighbours-startpos total)
     node-neighbours-flat (vec (flatten node-neighbours))
     directed-edge-count (count edges-indexed)
     edge-count (count node-neighbours-flat)
     ;_ (println "nn" (take-last 10 node-neighbours-startpos))
     node-sq (js/Math.ceil (js.Math.sqrt node-count))
     edge-sq (js/Math.ceil (js.Math.sqrt edge-count))
     tw node-sq
     th node-sq
     ew edge-sq
     eh edge-sq
     floats-per-planet 4.0
     out-width node-sq
     out-height node-sq
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
              :NODECOUNT node-count
              :EDGECOUNT edge-count
              :SQNODE node-sq
              :SQEDGE edge-sq
              :USE3D "false"
              })
     uniforms (clj->js {
                        :u_time
                        {
                         :type "f"
                         :value (/ (-> (new js/Date) .getTime) 1000.0)
                         }
                        :u_time_old
                        {
                         :type "f"
                         :value 0.0
                         }
                        :u_time_delta
                        {
                         :type "f"
                         :value 0.0
                         }
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
                        :u_spring_coefficient
                        {
                         :type "f"
                         :value 0.100
                         }
                        :u_spring_length
                        {
                         :type "f"
                         :value 30.0
                         }
                        :u_dist_reduction
                        {
                         :type "f"
                         :value (/ 30.0 1000.0)
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
                        :u_texture_edges
                        {
                         :type "t"
                         :value nil
                         }
                        :u_iteration
                        {
                         :type "f"
                         :value 0
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
     _ (set! screen-camera.position.y 1)
     ;controls (new js/OrbitControls screen-camera (-> renderer .-domElement))
     controls (new js/OrbitControls screen-camera)
     screen-geometry (new THREE.Geometry)
     screen-uniforms (clj->js
                       {
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
                        })
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
     points (new THREE.Points screen-geometry screen-material)
     _ (-> screen-scene (.add points))
     _ (-> screen-scene (.add (new THREE.AmbientLight 0x444444)))

     ; LINES
     lines-geometry (new THREE.BufferGeometry)
     _ (-> lines-geometry
         (.addAttribute
           "position"
           (new THREE.BufferAttribute
                (new js/Float32Array (* directed-edge-count 9))
                3)))
     _ (-> lines-geometry
         (.addAttribute
           "a_displacement_index"
           (new THREE.BufferAttribute
                (new js/Float32Array (* directed-edge-count 6))
                2)))
     lines-vs (-> ($ "#lines-vs") .text)
     lines-fs (-> ($ "#lines-fs") .text)
     lines-material (new THREE.ShaderMaterial
                         (clj->js
                           {
                            :uniforms screen-uniforms
                            :vertexShader lines-vs
                            :fragmentShader lines-fs
                            :transparent true
                            :blending THREE.AdditiveBlending
                            :depthWrite false
                            }))
     position (-> lines-geometry (.getAttribute "position"))
     _ (-> lines-geometry .computeBoundingSphere)
     a_displacement_index (-> lines-geometry (.getAttribute "a_displacement_index"))
     _ (doseq [[i [n1 n2]] (map-indexed vector edges-indexed)]
         (let
           [j (* i 3)
            [xf1 yf1] (node-index-to-texture n1)
            [xf2 yf2] (node-index-to-texture n2)
            inf (-> js/Number .-POSITIVE_INFINITY)
            ]
           (-> position (.setXYZ (+ j 0) 0 0 0))
           (-> position (.setXYZ (+ j 1) 0 0 0))
           (-> position (.setXYZ (+ j 2) inf inf inf))
           (-> a_displacement_index (.setXY (+ j 0) xf1 yf1))
           (-> a_displacement_index (.setXY (+ j 1) xf2 yf2))
           (-> a_displacement_index (.setXY (+ j 2) xf2 yf2))
           ))
     lines (new THREE.Line lines-geometry lines-material)
     _ (-> screen-scene (.add lines))

     ; RENDER TARGETS
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
     [t-positions t-velocities t-edges]
      (gen-texture node-count edge-count tw th ew eh node-neighbours-startpos node-neighbours-flat)

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
       :t-edges t-edges
       :renderer renderer
       :screen-scene screen-scene
       :screen-camera screen-camera
       :screen-uniforms screen-uniforms
       :c c
       }
     ]
    (reset! (:render-options c) options)
    )
  )

(defn handle-graph-error
  [jqxhr status error]
  (-> js/console (.log "AJAX error" jqxhr status error))
  )
        
(defcom
  system
  get-graph
  [renderer scene camera init-scene]
  [render-options-ready render-options]
  (fn [c]
    (let
      [c (assoc c :render-options (atom nil))
       ready
        (->
          (ajax graph-url "json")
          (p/then (partial handle-graph c)))
          ;(p/catch handle-graph-error))
       c (assoc c :render-options-ready ready)
       ]
      c))
  identity
  )


;; MAIN

(defonce ran (atom false))

(defn main
  []
  (reset! ran true)
  (println "main")
  (try
    (swap! system component/stop-system)
    (catch js/Object e
      (let
        [simple-e (component/ex-without-components e)]
        (.log js/console simple-e)
        (.log js/console (aget simple-e "cause"))
        (throw (aget simple-e "cause"))
        )))
  (try
    (swap! system component/start-system)
    (catch js/Object e
      (let
        [simple-e (component/ex-without-components e)]
        (.log js/console simple-e)
        (.log js/console (aget simple-e "cause"))
        (throw (aget simple-e "cause"))
        ))))

(if @ran (main) (js/$ main))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

