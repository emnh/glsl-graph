# glsl-graph

WebGL GPGPU Graph Layout, written in ClojureScript.

## Overview

[Demo](http://emnh.github.io/glsl-graph/)

The layout is currently flawed compared to VivaGraph or D3, but at least the
graph layout shows some of the graph structure. I hope someone can help me
tweak it to make it better.

Layout is currently O(E + N^2) since it does not use a quad tree, but seems
to work fine with ~5000 nodes and ~10000 edges.

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2015 Eivind Magnus Hvidevold

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
