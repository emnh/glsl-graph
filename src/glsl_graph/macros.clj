(ns ^:figwheel-always glsl-graph.macros
  (:require 
    [com.stuartsierra.component :as component]
    ))

(defmacro defcom
  [system component dep-values state-values start stop]
  (let
    [record-name (symbol (str component "-Record"))
     new-record (symbol (str "map->" record-name))
     component-var (gensym)]
    `(do
       (defrecord
         ~record-name
         ~(vec (concat dep-values state-values))
         component/Lifecycle
         (~'start [~component-var] (~start ~component-var))
         (~'stop [~component-var] (~stop ~component-var))
         )
       (~'add-component
         ~system
         ~(keyword component)
         (component/using
           (~new-record {})
           ~(vec (map keyword dep-values))))
       )))
        
