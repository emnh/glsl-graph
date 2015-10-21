// Compiled by ClojureScript 1.7.145 {}
goog.provide('glsl_graph.core');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('jayq.core');
goog.require('javelin.core');
goog.require('clojure.set');
goog.require('cats.core');
goog.require('com.stuartsierra.component');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof glsl_graph.core.three !== 'undefined'){
} else {
glsl_graph.core.three = THREE;
}
if(typeof glsl_graph.core.THREE !== 'undefined'){
} else {
glsl_graph.core.THREE = THREE;
}
if(typeof glsl_graph.core.sweet_alert !== 'undefined'){
} else {
glsl_graph.core.sweet_alert = sweetAlert;
}

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.JSObj = (function (initializer,data,__meta,__extmap,__hash){
this.initializer = initializer;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.JSObj.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.JSObj.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7624,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7626 = (((k7624 instanceof cljs.core.Keyword))?k7624.fqn:null);
switch (G__7626) {
case "initializer":
return self__.initializer;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7624,else__5576__auto__);

}
});

glsl_graph.core.JSObj.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.JSObj{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initializer","initializer",-2068366756),self__.initializer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

glsl_graph.core.JSObj.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.JSObj.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7623){
var self__ = this;
var G__7623__$1 = this;
return (new cljs.core.RecordIter((0),G__7623__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initializer","initializer",-2068366756),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.JSObj.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.JSObj.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.JSObj(self__.initializer,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.JSObj.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.JSObj.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.JSObj.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.JSObj.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initializer","initializer",-2068366756),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.JSObj(self__.initializer,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.JSObj.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7623){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7627 = cljs.core.keyword_identical_QMARK_;
var expr__7628 = k__5581__auto__;
if(cljs.core.truth_(pred__7627.call(null,new cljs.core.Keyword(null,"initializer","initializer",-2068366756),expr__7628))){
return (new glsl_graph.core.JSObj(G__7623,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7627.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__7628))){
return (new glsl_graph.core.JSObj(self__.initializer,G__7623,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.JSObj(self__.initializer,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7623),null));
}
}
});

glsl_graph.core.JSObj.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initializer","initializer",-2068366756),self__.initializer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

glsl_graph.core.JSObj.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7623){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.JSObj(self__.initializer,self__.data,G__7623,self__.__extmap,self__.__hash));
});

glsl_graph.core.JSObj.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.JSObj.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.JSObj.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
if(cljs.core._EQ_.call(null,self__.data,null)){
return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"data","data",-232669377),self__.initializer.call(null));
} else {
return component__$1;
}
});

glsl_graph.core.JSObj.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return component__$1;
});

glsl_graph.core.JSObj.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initializer","initializer",-427835229,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

glsl_graph.core.JSObj.cljs$lang$type = true;

glsl_graph.core.JSObj.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/JSObj");
});

glsl_graph.core.JSObj.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/JSObj");
});

glsl_graph.core.__GT_JSObj = (function glsl_graph$core$__GT_JSObj(initializer,data){
return (new glsl_graph.core.JSObj(initializer,data,null,null,null));
});

glsl_graph.core.map__GT_JSObj = (function glsl_graph$core$map__GT_JSObj(G__7625){
return (new glsl_graph.core.JSObj(new cljs.core.Keyword(null,"initializer","initializer",-2068366756).cljs$core$IFn$_invoke$arity$1(G__7625),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__7625),null,cljs.core.dissoc.call(null,G__7625,new cljs.core.Keyword(null,"initializer","initializer",-2068366756),new cljs.core.Keyword(null,"data","data",-232669377)),null));
});

glsl_graph.core.new_jsobj = (function glsl_graph$core$new_jsobj(initializer){
return glsl_graph.core.map__GT_JSObj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"initializer","initializer",-2068366756),initializer], null));
});
glsl_graph.core.data = (function glsl_graph$core$data(component){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component);
});
glsl_graph.core.add_component = (function glsl_graph$core$add_component(system,k,v){
if(cljs.core.not.call(null,k.call(null,cljs.core.deref.call(null,system)))){
return cljs.core.swap_BANG_.call(null,system,(function (p1__7631_SHARP_){
return cljs.core.assoc.call(null,p1__7631_SHARP_,k,v);
}));
} else {
return null;
}
});
glsl_graph.core.readd_component = (function glsl_graph$core$readd_component(system,k,v){
return cljs.core.swap_BANG_.call(null,system,(function (p1__7632_SHARP_){
return cljs.core.assoc.call(null,p1__7632_SHARP_,k,v);
}));
});
if(typeof glsl_graph.core.system !== 'undefined'){
} else {
glsl_graph.core.system = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"renderer","renderer",336841071),glsl_graph.core.new_jsobj.call(null,(function (){
return (new glsl_graph.core.three.WebGLRenderer({"antialias": true}));
})));
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"scene","scene",1523800415),glsl_graph.core.new_jsobj.call(null,(function (){
return (new glsl_graph.core.three.Scene());
})));
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),glsl_graph.core.new_jsobj.call(null,(function (){
return (new glsl_graph.core.three.Raycaster());
})));
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"light","light",1918998747),glsl_graph.core.new_jsobj.call(null,(function (){
return (new glsl_graph.core.three.DirectionalLight());
})));
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),glsl_graph.core.new_jsobj.call(null,(function (){
return (new Stats());
})));
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),glsl_graph.core.new_jsobj.call(null,(function (){
return (new Stats());
})));
glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),glsl_graph.core.new_jsobj.call(null,(function (){
return (new dat.GUI());
})));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.init_dat_Record = (function (dat_gui,get_graph,__meta,__extmap,__hash){
this.dat_gui = dat_gui;
this.get_graph = get_graph;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.init_dat_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7635,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7637 = (((k7635 instanceof cljs.core.Keyword))?k7635.fqn:null);
switch (G__7637) {
case "dat-gui":
return self__.dat_gui;

break;
case "get-graph":
return self__.get_graph;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7635,else__5576__auto__);

}
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.init-dat-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),self__.dat_gui],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),self__.get_graph],null))], null),self__.__extmap));
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.init_dat_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7634){
var self__ = this;
var G__7634__$1 = this;
return (new cljs.core.RecordIter((0),G__7634__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.init_dat_Record(self__.dat_gui,self__.get_graph,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),null,new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.init_dat_Record(self__.dat_gui,self__.get_graph,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7634){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7638 = cljs.core.keyword_identical_QMARK_;
var expr__7639 = k__5581__auto__;
if(cljs.core.truth_(pred__7638.call(null,new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),expr__7639))){
return (new glsl_graph.core.init_dat_Record(G__7634,self__.get_graph,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7638.call(null,new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),expr__7639))){
return (new glsl_graph.core.init_dat_Record(self__.dat_gui,G__7634,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.init_dat_Record(self__.dat_gui,self__.get_graph,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7634),null));
}
}
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),self__.dat_gui],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),self__.get_graph],null))], null),self__.__extmap));
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7634){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.init_dat_Record(self__.dat_gui,self__.get_graph,G__7634,self__.__extmap,self__.__hash));
});

glsl_graph.core.init_dat_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.init_dat_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.init_dat_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7633){
var self__ = this;
var G__7633__$1 = this;
return ((function (G__7633__$1){
return (function (c){
cats.core.bind.call(null,new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401).cljs$core$IFn$_invoke$arity$1(self__.get_graph),((function (G__7633__$1){
return (function (a){
var render_options = cljs.core.deref.call(null,new cljs.core.Keyword(null,"render-options","render-options",686799147).cljs$core$IFn$_invoke$arity$1(self__.get_graph));
var uniforms = new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(render_options);
var dat_gui__$1 = glsl_graph.core.data.call(null,self__.dat_gui);
var config = {"u_dist_reduction": ((uniforms["u_dist_reduction"]["value"]) * (1000)), "u_spring_coefficient": ((uniforms["u_spring_coefficient"]["value"]) * (1000)), "u_spring_length": ((uniforms["u_spring_length"]["value"]) * (1000))};
dat_gui__$1.add(config,"u_dist_reduction").min(0.001).step(0.001).onChange(((function (render_options,uniforms,dat_gui__$1,config,G__7633__$1){
return (function (value){
cljs.core.println.call(null,"set value",value);

return (uniforms["u_dist_reduction"]["value"] = (value / (1000)));
});})(render_options,uniforms,dat_gui__$1,config,G__7633__$1))
);

dat_gui__$1.add(config,"u_spring_coefficient").onChange(((function (render_options,uniforms,dat_gui__$1,config,G__7633__$1){
return (function (value){
return (uniforms["u_spring_coefficient"]["value"] = (value / (1000)));
});})(render_options,uniforms,dat_gui__$1,config,G__7633__$1))
);

return dat_gui__$1.add(config,"u_spring_length").onChange(((function (render_options,uniforms,dat_gui__$1,config,G__7633__$1){
return (function (value){
return (uniforms["u_spring_length"]["value"] = (value / (1000)));
});})(render_options,uniforms,dat_gui__$1,config,G__7633__$1))
);
});})(G__7633__$1))
);

return c;
});})(G__7633__$1))
.call(null,G__7633__$1);
});

glsl_graph.core.init_dat_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7633){
var self__ = this;
var G__7633__$1 = this;
return cljs.core.identity.call(null,G__7633__$1);
});

glsl_graph.core.init_dat_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dat-gui","dat-gui",916094042,null),new cljs.core.Symbol(null,"get-graph","get-graph",481905229,null)], null);
});

glsl_graph.core.init_dat_Record.cljs$lang$type = true;

glsl_graph.core.init_dat_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/init-dat-Record");
});

glsl_graph.core.init_dat_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/init-dat-Record");
});

glsl_graph.core.__GT_init_dat_Record = (function glsl_graph$core$__GT_init_dat_Record(dat_gui,get_graph){
return (new glsl_graph.core.init_dat_Record(dat_gui,get_graph,null,null,null));
});

glsl_graph.core.map__GT_init_dat_Record = (function glsl_graph$core$map__GT_init_dat_Record(G__7636){
return (new glsl_graph.core.init_dat_Record(new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485).cljs$core$IFn$_invoke$arity$1(G__7636),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298).cljs$core$IFn$_invoke$arity$1(G__7636),null,cljs.core.dissoc.call(null,G__7636,new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"init-dat","init-dat",20683964),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_init_dat_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dat-gui","dat-gui",-724437485),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298)], null)));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.init_stats_Record = (function (render_stats,physics_stats,__meta,__extmap,__hash){
this.render_stats = render_stats;
this.physics_stats = physics_stats;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.init_stats_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7644,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7646 = (((k7644 instanceof cljs.core.Keyword))?k7644.fqn:null);
switch (G__7646) {
case "render-stats":
return self__.render_stats;

break;
case "physics-stats":
return self__.physics_stats;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7644,else__5576__auto__);

}
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.init-stats-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),self__.physics_stats],null))], null),self__.__extmap));
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.init_stats_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7643){
var self__ = this;
var G__7643__$1 = this;
return (new cljs.core.RecordIter((0),G__7643__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.init_stats_Record(self__.render_stats,self__.physics_stats,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),null,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.init_stats_Record(self__.render_stats,self__.physics_stats,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7643){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7647 = cljs.core.keyword_identical_QMARK_;
var expr__7648 = k__5581__auto__;
if(cljs.core.truth_(pred__7647.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),expr__7648))){
return (new glsl_graph.core.init_stats_Record(G__7643,self__.physics_stats,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7647.call(null,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),expr__7648))){
return (new glsl_graph.core.init_stats_Record(self__.render_stats,G__7643,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.init_stats_Record(self__.render_stats,self__.physics_stats,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7643),null));
}
}
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),self__.physics_stats],null))], null),self__.__extmap));
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7643){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.init_stats_Record(self__.render_stats,self__.physics_stats,G__7643,self__.__extmap,self__.__hash));
});

glsl_graph.core.init_stats_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.init_stats_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.init_stats_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7642){
var self__ = this;
var G__7642__$1 = this;
return ((function (G__7642__$1){
return (function (c){
var render_stats_7651__$1 = glsl_graph.core.data.call(null,self__.render_stats);
var physics_stats_7652__$1 = glsl_graph.core.data.call(null,self__.physics_stats);
var $render_stats_7653 = jayq.core.$.call(null,render_stats_7651__$1.domElement);
var $physics_stats_7654 = jayq.core.$.call(null,physics_stats_7652__$1.domElement);
jayq.core.$.call(null,"body").append($render_stats_7653);

jayq.core.css.call(null,$render_stats_7653,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100)], null));

jayq.core.$.call(null,"body").append($physics_stats_7654);

jayq.core.css.call(null,$physics_stats_7654,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(50),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100)], null));

return c;
});})(G__7642__$1))
.call(null,G__7642__$1);
});

glsl_graph.core.init_stats_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7642){
var self__ = this;
var G__7642__$1 = this;
return cljs.core.identity.call(null,G__7642__$1);
});

glsl_graph.core.init_stats_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render-stats","render-stats",1214813265,null),new cljs.core.Symbol(null,"physics-stats","physics-stats",-1148615368,null)], null);
});

glsl_graph.core.init_stats_Record.cljs$lang$type = true;

glsl_graph.core.init_stats_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/init-stats-Record");
});

glsl_graph.core.init_stats_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/init-stats-Record");
});

glsl_graph.core.__GT_init_stats_Record = (function glsl_graph$core$__GT_init_stats_Record(render_stats,physics_stats){
return (new glsl_graph.core.init_stats_Record(render_stats,physics_stats,null,null,null));
});

glsl_graph.core.map__GT_init_stats_Record = (function glsl_graph$core$map__GT_init_stats_Record(G__7645){
return (new glsl_graph.core.init_stats_Record(new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(G__7645),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401).cljs$core$IFn$_invoke$arity$1(G__7645),null,cljs.core.dissoc.call(null,G__7645,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"init-stats","init-stats",-2078793051),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_init_stats_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401)], null)));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.window_Record = (function (width,height,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.window_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.window_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7657,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7659 = (((k7657 instanceof cljs.core.Keyword))?k7657.fqn:null);
switch (G__7659) {
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7657,else__5576__auto__);

}
});

glsl_graph.core.window_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.window-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

glsl_graph.core.window_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.window_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7656){
var self__ = this;
var G__7656__$1 = this;
return (new cljs.core.RecordIter((0),G__7656__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.window_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.window_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.window_Record(self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.window_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.window_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.window_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.window_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.window_Record(self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.window_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7656){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7660 = cljs.core.keyword_identical_QMARK_;
var expr__7661 = k__5581__auto__;
if(cljs.core.truth_(pred__7660.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__7661))){
return (new glsl_graph.core.window_Record(G__7656,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7660.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__7661))){
return (new glsl_graph.core.window_Record(self__.width,G__7656,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.window_Record(self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7656),null));
}
}
});

glsl_graph.core.window_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
});

glsl_graph.core.window_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7656){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.window_Record(self__.width,self__.height,G__7656,self__.__extmap,self__.__hash));
});

glsl_graph.core.window_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.window_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.window_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7655){
var self__ = this;
var G__7655__$1 = this;
return ((function (G__7655__$1){
return (function (c){
var width__$1 = (function (){var or__4959__auto__ = self__.width;
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
return javelin.core.cell.call(null,window.innerWidth);
}
})();
var height__$1 = (function (){var or__4959__auto__ = self__.height;
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
return javelin.core.cell.call(null,window.innerHeight);
}
})();
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"width","width",-384071477),width__$1),new cljs.core.Keyword(null,"height","height",1025178622),height__$1);
});})(G__7655__$1))
.call(null,G__7655__$1);
});

glsl_graph.core.window_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7655){
var self__ = this;
var G__7655__$1 = this;
return ((function (G__7655__$1){
return (function (c){
return c;
});})(G__7655__$1))
.call(null,G__7655__$1);
});

glsl_graph.core.window_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
});

glsl_graph.core.window_Record.cljs$lang$type = true;

glsl_graph.core.window_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/window-Record");
});

glsl_graph.core.window_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/window-Record");
});

glsl_graph.core.__GT_window_Record = (function glsl_graph$core$__GT_window_Record(width,height){
return (new glsl_graph.core.window_Record(width,height,null,null,null));
});

glsl_graph.core.map__GT_window_Record = (function glsl_graph$core$map__GT_window_Record(G__7658){
return (new glsl_graph.core.window_Record(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__7658),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__7658),null,cljs.core.dissoc.call(null,G__7658,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"window","window",724519534),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_window_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentVector.EMPTY));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.camera_Record = (function (window,camera,aspect,__meta,__extmap,__hash){
this.window = window;
this.camera = camera;
this.aspect = aspect;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.camera_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.camera_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7666,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7668 = (((k7666 instanceof cljs.core.Keyword))?k7666.fqn:null);
switch (G__7668) {
case "window":
return self__.window;

break;
case "camera":
return self__.camera;

break;
case "aspect":
return self__.aspect;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7666,else__5576__auto__);

}
});

glsl_graph.core.camera_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.camera-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aspect","aspect",-839905246),self__.aspect],null))], null),self__.__extmap));
});

glsl_graph.core.camera_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.camera_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7665){
var self__ = this;
var G__7665__$1 = this;
return (new cljs.core.RecordIter((0),G__7665__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"aspect","aspect",-839905246)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.camera_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.camera_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.camera_Record(self__.window,self__.camera,self__.aspect,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.camera_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.camera_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.camera_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.camera_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aspect","aspect",-839905246),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.camera_Record(self__.window,self__.camera,self__.aspect,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.camera_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7665){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7669 = cljs.core.keyword_identical_QMARK_;
var expr__7670 = k__5581__auto__;
if(cljs.core.truth_(pred__7669.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__7670))){
return (new glsl_graph.core.camera_Record(G__7665,self__.camera,self__.aspect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7669.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__7670))){
return (new glsl_graph.core.camera_Record(self__.window,G__7665,self__.aspect,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7669.call(null,new cljs.core.Keyword(null,"aspect","aspect",-839905246),expr__7670))){
return (new glsl_graph.core.camera_Record(self__.window,self__.camera,G__7665,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.camera_Record(self__.window,self__.camera,self__.aspect,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7665),null));
}
}
}
});

glsl_graph.core.camera_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aspect","aspect",-839905246),self__.aspect],null))], null),self__.__extmap));
});

glsl_graph.core.camera_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7665){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.camera_Record(self__.window,self__.camera,self__.aspect,G__7665,self__.__extmap,self__.__hash));
});

glsl_graph.core.camera_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.camera_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.camera_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7664){
var self__ = this;
var G__7664__$1 = this;
return ((function (G__7664__$1){
return (function (c){
var camera__$1 = (function (){var or__4959__auto__ = self__.camera;
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
var width = cljs.core.deref.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.window));
var height = cljs.core.deref.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.window));
var FOV = (35);
var frustumFar = (1000000);
var frustumNear = (0);
return (new THREE.PerspectiveCamera(FOV,(width / height),frustumNear,frustumFar));
}
})();
var new_aspect = (function (){var or__4959__auto__ = self__.aspect;
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
return javelin.core.formula.call(null,((function (or__4959__auto__,camera__$1,G__7664__$1){
return (function (G__7672){
return (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__7672) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__7672));
});})(or__4959__auto__,camera__$1,G__7664__$1))
).call(null,self__.window);
}
})();
var _ = (function (){var or__4959__auto__ = self__.aspect;
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
return javelin.core.formula.call(null,((function (or__4959__auto__,camera__$1,new_aspect,G__7664__$1){
return (function (G__7674,G__7673){
return G__7673.aspect = G__7674;
});})(or__4959__auto__,camera__$1,new_aspect,G__7664__$1))
).call(null,new_aspect,camera__$1);
}
})();
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera__$1),new cljs.core.Keyword(null,"aspect","aspect",-839905246),new_aspect);
});})(G__7664__$1))
.call(null,G__7664__$1);
});

glsl_graph.core.camera_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7664){
var self__ = this;
var G__7664__$1 = this;
return cljs.core.identity.call(null,G__7664__$1);
});

glsl_graph.core.camera_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"aspect","aspect",800626281,null)], null);
});

glsl_graph.core.camera_Record.cljs$lang$type = true;

glsl_graph.core.camera_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/camera-Record");
});

glsl_graph.core.camera_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/camera-Record");
});

glsl_graph.core.__GT_camera_Record = (function glsl_graph$core$__GT_camera_Record(window,camera,aspect){
return (new glsl_graph.core.camera_Record(window,camera,aspect,null,null,null));
});

glsl_graph.core.map__GT_camera_Record = (function glsl_graph$core$map__GT_camera_Record(G__7667){
return (new glsl_graph.core.camera_Record(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__7667),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__7667),new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(G__7667),null,cljs.core.dissoc.call(null,G__7667,new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"aspect","aspect",-839905246)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"camera","camera",-1190348585),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_camera_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534)], null)));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.init_scene_Record = (function (window,renderer,camera,scene,done,set_size,__meta,__extmap,__hash){
this.window = window;
this.renderer = renderer;
this.camera = camera;
this.scene = scene;
this.done = done;
this.set_size = set_size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.init_scene_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7678,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7680 = (((k7678 instanceof cljs.core.Keyword))?k7678.fqn:null);
switch (G__7680) {
case "window":
return self__.window;

break;
case "renderer":
return self__.renderer;

break;
case "camera":
return self__.camera;

break;
case "scene":
return self__.scene;

break;
case "done":
return self__.done;

break;
case "set-size":
return self__.set_size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7678,else__5576__auto__);

}
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.init-scene-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done","done",-889844188),self__.done],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"set-size","set-size",-1037159587),self__.set_size],null))], null),self__.__extmap));
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.init_scene_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7677){
var self__ = this;
var G__7677__$1 = this;
return (new cljs.core.RecordIter((0),G__7677__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"set-size","set-size",-1037159587)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,self__.scene,self__.done,self__.set_size,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"done","done",-889844188),null,new cljs.core.Keyword(null,"window","window",724519534),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"set-size","set-size",-1037159587),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,self__.scene,self__.done,self__.set_size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7677){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7681 = cljs.core.keyword_identical_QMARK_;
var expr__7682 = k__5581__auto__;
if(cljs.core.truth_(pred__7681.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__7682))){
return (new glsl_graph.core.init_scene_Record(G__7677,self__.renderer,self__.camera,self__.scene,self__.done,self__.set_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7681.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__7682))){
return (new glsl_graph.core.init_scene_Record(self__.window,G__7677,self__.camera,self__.scene,self__.done,self__.set_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7681.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__7682))){
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,G__7677,self__.scene,self__.done,self__.set_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7681.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__7682))){
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,G__7677,self__.done,self__.set_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7681.call(null,new cljs.core.Keyword(null,"done","done",-889844188),expr__7682))){
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,self__.scene,G__7677,self__.set_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7681.call(null,new cljs.core.Keyword(null,"set-size","set-size",-1037159587),expr__7682))){
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,self__.scene,self__.done,G__7677,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,self__.scene,self__.done,self__.set_size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7677),null));
}
}
}
}
}
}
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done","done",-889844188),self__.done],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"set-size","set-size",-1037159587),self__.set_size],null))], null),self__.__extmap));
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7677){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.init_scene_Record(self__.window,self__.renderer,self__.camera,self__.scene,self__.done,self__.set_size,G__7677,self__.__extmap,self__.__hash));
});

glsl_graph.core.init_scene_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.init_scene_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.init_scene_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7676){
var self__ = this;
var G__7676__$1 = this;
return ((function (G__7676__$1){
return (function (c){
var $body = jayq.core.$.call(null,"body");
var renderer__$1 = glsl_graph.core.data.call(null,self__.renderer);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(self__.window);
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(self__.window);
var set_size__$1 = (function (){var or__4959__auto__ = self__.set_size;
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
return javelin.core.formula.call(null,((function (or__4959__auto__,$body,renderer__$1,width,height,G__7676__$1){
return (function (G__7686,G__7685,G__7684){
return G__7684.setSize(G__7685,G__7686);
});})(or__4959__auto__,$body,renderer__$1,width,height,G__7676__$1))
).call(null,height,width,renderer__$1);
}
})();
$body.append(renderer__$1.domElement);

return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"set-size","set-size",-1037159587),set_size__$1);
});})(G__7676__$1))
.call(null,G__7676__$1);
});

glsl_graph.core.init_scene_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7676){
var self__ = this;
var G__7676__$1 = this;
return cljs.core.identity.call(null,G__7676__$1);
});

glsl_graph.core.init_scene_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Symbol(null,"set-size","set-size",603371940,null)], null);
});

glsl_graph.core.init_scene_Record.cljs$lang$type = true;

glsl_graph.core.init_scene_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/init-scene-Record");
});

glsl_graph.core.init_scene_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/init-scene-Record");
});

glsl_graph.core.__GT_init_scene_Record = (function glsl_graph$core$__GT_init_scene_Record(window,renderer,camera,scene,done,set_size){
return (new glsl_graph.core.init_scene_Record(window,renderer,camera,scene,done,set_size,null,null,null));
});

glsl_graph.core.map__GT_init_scene_Record = (function glsl_graph$core$map__GT_init_scene_Record(G__7679){
return (new glsl_graph.core.init_scene_Record(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__7679),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__7679),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__7679),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__7679),new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(G__7679),new cljs.core.Keyword(null,"set-size","set-size",-1037159587).cljs$core$IFn$_invoke$arity$1(G__7679),null,cljs.core.dissoc.call(null,G__7679,new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"set-size","set-size",-1037159587)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_init_scene_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415)], null)));
glsl_graph.core.on_resize = (function glsl_graph$core$on_resize(c,evt){
return javelin.core.dosync_STAR_.call(null,(function (){
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"width","width",-384071477)], null)),window.innerWidth);

return cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"height","height",1025178622)], null)),window.innerHeight);
}));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.resize_Record = (function (window,__meta,__extmap,__hash){
this.window = window;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.resize_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.resize_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7690,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7692 = (((k7690 instanceof cljs.core.Keyword))?k7690.fqn:null);
switch (G__7692) {
case "window":
return self__.window;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7690,else__5576__auto__);

}
});

glsl_graph.core.resize_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.resize-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

glsl_graph.core.resize_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.resize_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7689){
var self__ = this;
var G__7689__$1 = this;
return (new cljs.core.RecordIter((0),G__7689__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.resize_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.resize_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.resize_Record(self__.window,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.resize_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.resize_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.resize_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.resize_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"window","window",724519534),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.resize_Record(self__.window,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.resize_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7689){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7693 = cljs.core.keyword_identical_QMARK_;
var expr__7694 = k__5581__auto__;
if(cljs.core.truth_(pred__7693.call(null,new cljs.core.Keyword(null,"window","window",724519534),expr__7694))){
return (new glsl_graph.core.resize_Record(G__7689,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.resize_Record(self__.window,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7689),null));
}
});

glsl_graph.core.resize_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"window","window",724519534),self__.window],null))], null),self__.__extmap));
});

glsl_graph.core.resize_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7689){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.resize_Record(self__.window,G__7689,self__.__extmap,self__.__hash));
});

glsl_graph.core.resize_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.resize_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.resize_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7688){
var self__ = this;
var G__7688__$1 = this;
return ((function (G__7688__$1){
return (function (c){
jayq.core.$.call(null,window).unbind("resize.glsl-graph-resize").bind("resize.glsl-graph-resize",cljs.core.partial.call(null,glsl_graph.core.on_resize,c));

return c;
});})(G__7688__$1))
.call(null,G__7688__$1);
});

glsl_graph.core.resize_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7688){
var self__ = this;
var G__7688__$1 = this;
return ((function (G__7688__$1){
return (function (c){
jayq.core.$.call(null,window).unbind("resize.glsl-graph-resize");

return c;
});})(G__7688__$1))
.call(null,G__7688__$1);
});

glsl_graph.core.resize_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"window","window",-1929916235,null)], null);
});

glsl_graph.core.resize_Record.cljs$lang$type = true;

glsl_graph.core.resize_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/resize-Record");
});

glsl_graph.core.resize_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/resize-Record");
});

glsl_graph.core.__GT_resize_Record = (function glsl_graph$core$__GT_resize_Record(window){
return (new glsl_graph.core.resize_Record(window,null,null,null));
});

glsl_graph.core.map__GT_resize_Record = (function glsl_graph$core$map__GT_resize_Record(G__7691){
return (new glsl_graph.core.resize_Record(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(G__7691),null,cljs.core.dissoc.call(null,G__7691,new cljs.core.Keyword(null,"window","window",724519534)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"resize","resize",297367086),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_resize_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window","window",724519534)], null)));
glsl_graph.core.render_loop_compute = (function glsl_graph$core$render_loop_compute(c,o){
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(c));
var scene = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(c));
var renderer = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(c));
var running = cljs.core.deref.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(c));
var o__$1 = ((cljs.core._EQ_.call(null,o,null))?cljs.core.deref.call(null,cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),new cljs.core.Keyword(null,"render-options","render-options",686799147)], null))):o);
if(cljs.core.not_EQ_.call(null,o__$1,null)){
var seq__7701_7705 = cljs.core.seq.call(null,cljs.core.range.call(null,(1)));
var chunk__7702_7706 = null;
var count__7703_7707 = (0);
var i__7704_7708 = (0);
while(true){
if((i__7704_7708 < count__7703_7707)){
var i_7709 = cljs.core._nth.call(null,chunk__7702_7706,i__7704_7708);
(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time_old"]["value"] = (new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time"]["value"]));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time"]["value"] = ((new Date()).getTime() / 1000.0));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time_delta"]["value"] = ((new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time"]["value"]) - (new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time_old"]["value"])));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_positions"]["value"] = new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359).cljs$core$IFn$_invoke$arity$1(o__$1));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_velocities"]["value"] = new cljs.core.Keyword(null,"rt-velocities2","rt-velocities2",1121479047).cljs$core$IFn$_invoke$arity$1(o__$1));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_edges"]["value"] = new cljs.core.Keyword(null,"t-edges","t-edges",735048210).cljs$core$IFn$_invoke$arity$1(o__$1));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_iteration"]["value"] = ((1) + (new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_iteration"]["value"])));

(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(o__$1)["material"] = new cljs.core.Keyword(null,"velocity-material","velocity-material",87503526).cljs$core$IFn$_invoke$arity$1(o__$1));

new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(o__$1).render(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"rt-velocities1","rt-velocities1",-692521013).cljs$core$IFn$_invoke$arity$1(o__$1),true);

(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(o__$1)["material"] = new cljs.core.Keyword(null,"position-material","position-material",-1253117880).cljs$core$IFn$_invoke$arity$1(o__$1));

new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(o__$1).render(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412).cljs$core$IFn$_invoke$arity$1(o__$1),true);

var physics_stats_7710 = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401).cljs$core$IFn$_invoke$arity$1(c));
physics_stats_7710.update();

var G__7711 = seq__7701_7705;
var G__7712 = chunk__7702_7706;
var G__7713 = count__7703_7707;
var G__7714 = (i__7704_7708 + (1));
seq__7701_7705 = G__7711;
chunk__7702_7706 = G__7712;
count__7703_7707 = G__7713;
i__7704_7708 = G__7714;
continue;
} else {
var temp__4425__auto___7715 = cljs.core.seq.call(null,seq__7701_7705);
if(temp__4425__auto___7715){
var seq__7701_7716__$1 = temp__4425__auto___7715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7701_7716__$1)){
var c__5762__auto___7717 = cljs.core.chunk_first.call(null,seq__7701_7716__$1);
var G__7718 = cljs.core.chunk_rest.call(null,seq__7701_7716__$1);
var G__7719 = c__5762__auto___7717;
var G__7720 = cljs.core.count.call(null,c__5762__auto___7717);
var G__7721 = (0);
seq__7701_7705 = G__7718;
chunk__7702_7706 = G__7719;
count__7703_7707 = G__7720;
i__7704_7708 = G__7721;
continue;
} else {
var i_7722 = cljs.core.first.call(null,seq__7701_7716__$1);
(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time_old"]["value"] = (new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time"]["value"]));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time"]["value"] = ((new Date()).getTime() / 1000.0));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time_delta"]["value"] = ((new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time"]["value"]) - (new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_time_old"]["value"])));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_positions"]["value"] = new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359).cljs$core$IFn$_invoke$arity$1(o__$1));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_velocities"]["value"] = new cljs.core.Keyword(null,"rt-velocities2","rt-velocities2",1121479047).cljs$core$IFn$_invoke$arity$1(o__$1));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_edges"]["value"] = new cljs.core.Keyword(null,"t-edges","t-edges",735048210).cljs$core$IFn$_invoke$arity$1(o__$1));

(new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_iteration"]["value"] = ((1) + (new cljs.core.Keyword(null,"uniforms","uniforms",-782808153).cljs$core$IFn$_invoke$arity$1(o__$1)["u_iteration"]["value"])));

(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(o__$1)["material"] = new cljs.core.Keyword(null,"velocity-material","velocity-material",87503526).cljs$core$IFn$_invoke$arity$1(o__$1));

new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(o__$1).render(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"rt-velocities1","rt-velocities1",-692521013).cljs$core$IFn$_invoke$arity$1(o__$1),true);

(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(o__$1)["material"] = new cljs.core.Keyword(null,"position-material","position-material",-1253117880).cljs$core$IFn$_invoke$arity$1(o__$1));

new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(o__$1).render(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412).cljs$core$IFn$_invoke$arity$1(o__$1),true);

var physics_stats_7723 = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401).cljs$core$IFn$_invoke$arity$1(c));
physics_stats_7723.update();

var G__7724 = cljs.core.next.call(null,seq__7701_7716__$1);
var G__7725 = null;
var G__7726 = (0);
var G__7727 = (0);
seq__7701_7705 = G__7724;
chunk__7702_7706 = G__7725;
count__7703_7707 = G__7726;
i__7704_7708 = G__7727;
continue;
}
} else {
}
}
break;
}

var o__$2 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,o__$1,new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412),new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359).cljs$core$IFn$_invoke$arity$1(o__$1)),new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359),new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412).cljs$core$IFn$_invoke$arity$1(o__$1)),new cljs.core.Keyword(null,"rt-velocities1","rt-velocities1",-692521013),new cljs.core.Keyword(null,"rt-velocities2","rt-velocities2",1121479047).cljs$core$IFn$_invoke$arity$1(o__$1)),new cljs.core.Keyword(null,"rt-velocities2","rt-velocities2",1121479047),new cljs.core.Keyword(null,"rt-velocities1","rt-velocities1",-692521013).cljs$core$IFn$_invoke$arity$1(o__$1));
if(cljs.core.truth_(running)){
return setTimeout(cljs.core.partial.call(null,glsl_graph$core$render_loop_compute,c,o__$2),(0));
} else {
return null;
}
} else {
if(cljs.core.truth_(running)){
return setTimeout(cljs.core.partial.call(null,glsl_graph$core$render_loop_compute,c,null),(0));
} else {
return null;
}
}
});
glsl_graph.core.render_loop_screen = (function glsl_graph$core$render_loop_screen(c,o){
var camera = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(c));
var scene = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(c));
var renderer = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(c));
var running = cljs.core.deref.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(c));
var o__$1 = ((cljs.core._EQ_.call(null,o,null))?cljs.core.deref.call(null,cljs.core.get_in.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),new cljs.core.Keyword(null,"render-options","render-options",686799147)], null))):o);
if(cljs.core.not_EQ_.call(null,o__$1,null)){
(new cljs.core.Keyword(null,"screen-uniforms","screen-uniforms",1280473487).cljs$core$IFn$_invoke$arity$1(o__$1)["u_texture_positions"]["value"] = new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412).cljs$core$IFn$_invoke$arity$1(o__$1));

new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(o__$1).setSize(window.innerWidth,window.innerHeight);

new cljs.core.Keyword(null,"screen-camera","screen-camera",-85262268).cljs$core$IFn$_invoke$arity$1(o__$1).aspect = (window.innerWidth / window.innerHeight);

new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(o__$1).render(new cljs.core.Keyword(null,"screen-scene","screen-scene",1224775359).cljs$core$IFn$_invoke$arity$1(o__$1),new cljs.core.Keyword(null,"screen-camera","screen-camera",-85262268).cljs$core$IFn$_invoke$arity$1(o__$1));

var render_stats_7728 = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(c));
render_stats_7728.update();

var o__$2 = cljs.core.assoc.call(null,cljs.core.assoc.call(null,o__$1,new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412),new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359).cljs$core$IFn$_invoke$arity$1(o__$1)),new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359),new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412).cljs$core$IFn$_invoke$arity$1(o__$1));
if(cljs.core.truth_(running)){
return requestAnimationFrame(cljs.core.partial.call(null,glsl_graph$core$render_loop_screen,c,o__$2));
} else {
return null;
}
} else {
if(cljs.core.truth_(running)){
return requestAnimationFrame(cljs.core.partial.call(null,glsl_graph$core$render_loop_screen,c,null));
} else {
return null;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.render_loop_Record = (function (renderer,camera,scene,init_scene,get_graph,render_stats,physics_stats,running,__meta,__extmap,__hash){
this.renderer = renderer;
this.camera = camera;
this.scene = scene;
this.init_scene = init_scene;
this.get_graph = get_graph;
this.render_stats = render_stats;
this.physics_stats = physics_stats;
this.running = running;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.render_loop_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7731,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7733 = (((k7731 instanceof cljs.core.Keyword))?k7731.fqn:null);
switch (G__7733) {
case "renderer":
return self__.renderer;

break;
case "camera":
return self__.camera;

break;
case "scene":
return self__.scene;

break;
case "init-scene":
return self__.init_scene;

break;
case "get-graph":
return self__.get_graph;

break;
case "render-stats":
return self__.render_stats;

break;
case "physics-stats":
return self__.physics_stats;

break;
case "running":
return self__.running;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7731,else__5576__auto__);

}
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.render-loop-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),self__.get_graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),self__.physics_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",1554969103),self__.running],null))], null),self__.__extmap));
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.render_loop_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7730){
var self__ = this;
var G__7730__$1 = this;
return (new cljs.core.RecordIter((0),G__7730__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),new cljs.core.Keyword(null,"running","running",1554969103)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"running","running",1554969103),null,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7730){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7734 = cljs.core.keyword_identical_QMARK_;
var expr__7735 = k__5581__auto__;
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__7735))){
return (new glsl_graph.core.render_loop_Record(G__7730,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,G__7730,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,G__7730,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,G__7730,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,G__7730,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,G__7730,self__.physics_stats,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,G__7730,self__.running,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7734.call(null,new cljs.core.Keyword(null,"running","running",1554969103),expr__7735))){
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,G__7730,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7730),null));
}
}
}
}
}
}
}
}
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),self__.get_graph],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),self__.render_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),self__.physics_stats],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"running","running",1554969103),self__.running],null))], null),self__.__extmap));
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7730){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.render_loop_Record(self__.renderer,self__.camera,self__.scene,self__.init_scene,self__.get_graph,self__.render_stats,self__.physics_stats,self__.running,G__7730,self__.__extmap,self__.__hash));
});

glsl_graph.core.render_loop_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.render_loop_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.render_loop_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7729){
var self__ = this;
var G__7729__$1 = this;
return ((function (G__7729__$1){
return (function (c){
var c__$1 = cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.atom.call(null,true));
glsl_graph.core.render_loop_compute.call(null,c__$1,null);

glsl_graph.core.render_loop_screen.call(null,c__$1,null);

return c__$1;
});})(G__7729__$1))
.call(null,G__7729__$1);
});

glsl_graph.core.render_loop_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7729){
var self__ = this;
var G__7729__$1 = this;
return ((function (G__7729__$1){
return (function (c){
if(cljs.core.not_EQ_.call(null,self__.running,null)){
cljs.core.reset_BANG_.call(null,self__.running,false);
} else {
}

return c;
});})(G__7729__$1))
.call(null,G__7729__$1);
});

glsl_graph.core.render_loop_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"get-graph","get-graph",481905229,null),new cljs.core.Symbol(null,"render-stats","render-stats",1214813265,null),new cljs.core.Symbol(null,"physics-stats","physics-stats",-1148615368,null),new cljs.core.Symbol(null,"running","running",-1099466666,null)], null);
});

glsl_graph.core.render_loop_Record.cljs$lang$type = true;

glsl_graph.core.render_loop_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/render-loop-Record");
});

glsl_graph.core.render_loop_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/render-loop-Record");
});

glsl_graph.core.__GT_render_loop_Record = (function glsl_graph$core$__GT_render_loop_Record(renderer,camera,scene,init_scene,get_graph,render_stats,physics_stats,running){
return (new glsl_graph.core.render_loop_Record(renderer,camera,scene,init_scene,get_graph,render_stats,physics_stats,running,null,null,null));
});

glsl_graph.core.map__GT_render_loop_Record = (function glsl_graph$core$map__GT_render_loop_Record(G__7732){
return (new glsl_graph.core.render_loop_Record(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401).cljs$core$IFn$_invoke$arity$1(G__7732),new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(G__7732),null,cljs.core.dissoc.call(null,G__7732,new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401),new cljs.core.Keyword(null,"running","running",1554969103)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"render-loop","render-loop",-1322090239),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_render_loop_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),new cljs.core.Keyword(null,"render-stats","render-stats",-425718262),new cljs.core.Keyword(null,"physics-stats","physics-stats",1505820401)], null)));
glsl_graph.core.graph_url = "graphtest/index.js";
glsl_graph.core.ajax = (function glsl_graph$core$ajax(url,data_type){
return promesa.core.promise.call(null,(function (resolve,reject){
return jQuery.ajax({"url": url, "dataType": data_type}).then(resolve,reject);
}));
});
glsl_graph.core.gen_texture = (function glsl_graph$core$gen_texture(node_count,edge_count,tw,th,ew,eh,node_neighbours_startpos,node_neighbours_flat){
var rgba_size = (4);
var raw_positions = (new Float32Array(((tw * th) * rgba_size)));
var raw_velocities = (new Float32Array(((tw * th) * rgba_size)));
var raw_edges = (new Float32Array(((ew * eh) * rgba_size)));
var _ = (function (){var seq__7750 = cljs.core.seq.call(null,cljs.core.range.call(null,node_count));
var chunk__7751 = null;
var count__7752 = (0);
var i__7753 = (0);
while(true){
if((i__7753 < count__7752)){
var i = cljs.core._nth.call(null,chunk__7751,i__7753);
var j_7759 = (i * rgba_size);
var sz_7760 = (1);
var fixed_7761 = 0.5;
var x_7762 = (sz_7760 * Math.random());
var y_7763 = (sz_7760 * Math.random());
var z_7764 = (sz_7760 * Math.random());
var w2_7765 = cljs.core.nth.call(null,node_neighbours_startpos,(i + (1)));
var w1_7766 = cljs.core.nth.call(null,node_neighbours_startpos,(i + (0)));
var w_7767 = (w2_7765 - w1_7766);
var w_7768__$1 = (w_7767 / edge_count);
(raw_positions[(j_7759 + (0))] = x_7762);

(raw_positions[(j_7759 + (1))] = y_7763);

(raw_positions[(j_7759 + (2))] = z_7764);

(raw_positions[(j_7759 + (3))] = w_7768__$1);

var fixed_7769 = 0.5;
var x_7770 = Math.random();
var y_7771 = Math.random();
var z_7772 = Math.random();
var x_7773__$1 = fixed_7769;
var y_7774__$1 = fixed_7769;
var z_7775__$1 = fixed_7769;
var w_7776 = cljs.core.nth.call(null,node_neighbours_startpos,(i + (0)));
var w_7777__$1 = (w_7776 / edge_count);
(raw_velocities[(j_7759 + (0))] = x_7773__$1);

(raw_velocities[(j_7759 + (1))] = y_7774__$1);

(raw_velocities[(j_7759 + (2))] = z_7775__$1);

(raw_velocities[(j_7759 + (3))] = w_7777__$1);

var G__7778 = seq__7750;
var G__7779 = chunk__7751;
var G__7780 = count__7752;
var G__7781 = (i__7753 + (1));
seq__7750 = G__7778;
chunk__7751 = G__7779;
count__7752 = G__7780;
i__7753 = G__7781;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7750);
if(temp__4425__auto__){
var seq__7750__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7750__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__7750__$1);
var G__7782 = cljs.core.chunk_rest.call(null,seq__7750__$1);
var G__7783 = c__5762__auto__;
var G__7784 = cljs.core.count.call(null,c__5762__auto__);
var G__7785 = (0);
seq__7750 = G__7782;
chunk__7751 = G__7783;
count__7752 = G__7784;
i__7753 = G__7785;
continue;
} else {
var i = cljs.core.first.call(null,seq__7750__$1);
var j_7786 = (i * rgba_size);
var sz_7787 = (1);
var fixed_7788 = 0.5;
var x_7789 = (sz_7787 * Math.random());
var y_7790 = (sz_7787 * Math.random());
var z_7791 = (sz_7787 * Math.random());
var w2_7792 = cljs.core.nth.call(null,node_neighbours_startpos,(i + (1)));
var w1_7793 = cljs.core.nth.call(null,node_neighbours_startpos,(i + (0)));
var w_7794 = (w2_7792 - w1_7793);
var w_7795__$1 = (w_7794 / edge_count);
(raw_positions[(j_7786 + (0))] = x_7789);

(raw_positions[(j_7786 + (1))] = y_7790);

(raw_positions[(j_7786 + (2))] = z_7791);

(raw_positions[(j_7786 + (3))] = w_7795__$1);

var fixed_7796 = 0.5;
var x_7797 = Math.random();
var y_7798 = Math.random();
var z_7799 = Math.random();
var x_7800__$1 = fixed_7796;
var y_7801__$1 = fixed_7796;
var z_7802__$1 = fixed_7796;
var w_7803 = cljs.core.nth.call(null,node_neighbours_startpos,(i + (0)));
var w_7804__$1 = (w_7803 / edge_count);
(raw_velocities[(j_7786 + (0))] = x_7800__$1);

(raw_velocities[(j_7786 + (1))] = y_7801__$1);

(raw_velocities[(j_7786 + (2))] = z_7802__$1);

(raw_velocities[(j_7786 + (3))] = w_7804__$1);

var G__7805 = cljs.core.next.call(null,seq__7750__$1);
var G__7806 = null;
var G__7807 = (0);
var G__7808 = (0);
seq__7750 = G__7805;
chunk__7751 = G__7806;
count__7752 = G__7807;
i__7753 = G__7808;
continue;
}
} else {
return null;
}
}
break;
}
})();
var ___$1 = (function (){var seq__7754 = cljs.core.seq.call(null,cljs.core.range.call(null,edge_count));
var chunk__7755 = null;
var count__7756 = (0);
var i__7757 = (0);
while(true){
if((i__7757 < count__7756)){
var i = cljs.core._nth.call(null,chunk__7755,i__7757);
var x_7809 = cljs.core.nth.call(null,node_neighbours_flat,i);
var x_7810__$1 = (x_7809 / node_count);
(raw_edges[i] = x_7810__$1);

var G__7811 = seq__7754;
var G__7812 = chunk__7755;
var G__7813 = count__7756;
var G__7814 = (i__7757 + (1));
seq__7754 = G__7811;
chunk__7755 = G__7812;
count__7756 = G__7813;
i__7757 = G__7814;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7754);
if(temp__4425__auto__){
var seq__7754__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7754__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__7754__$1);
var G__7815 = cljs.core.chunk_rest.call(null,seq__7754__$1);
var G__7816 = c__5762__auto__;
var G__7817 = cljs.core.count.call(null,c__5762__auto__);
var G__7818 = (0);
seq__7754 = G__7815;
chunk__7755 = G__7816;
count__7756 = G__7817;
i__7757 = G__7818;
continue;
} else {
var i = cljs.core.first.call(null,seq__7754__$1);
var x_7819 = cljs.core.nth.call(null,node_neighbours_flat,i);
var x_7820__$1 = (x_7819 / node_count);
(raw_edges[i] = x_7820__$1);

var G__7821 = cljs.core.next.call(null,seq__7754__$1);
var G__7822 = null;
var G__7823 = (0);
var G__7824 = (0);
seq__7754 = G__7821;
chunk__7755 = G__7822;
count__7756 = G__7823;
i__7757 = G__7824;
continue;
}
} else {
return null;
}
}
break;
}
})();
var new_texture = ((function (rgba_size,raw_positions,raw_velocities,raw_edges,_,___$1){
return (function (p1__7738_SHARP_,p2__7739_SHARP_,p3__7740_SHARP_){
var t = (new glsl_graph.core.THREE.DataTexture(p1__7738_SHARP_,p2__7739_SHARP_,p3__7740_SHARP_,glsl_graph.core.THREE.RGBAFormat,glsl_graph.core.THREE.FloatType));
var G__7758_7825 = t;
(G__7758_7825["minFilter"] = glsl_graph.core.THREE.NearestFilter);

(G__7758_7825["wrapS"] = glsl_graph.core.THREE.ClampToEdgeWrapping);

(G__7758_7825["wrapT"] = glsl_graph.core.THREE.ClampToEdgeWrapping);

(G__7758_7825["needsUpdate"] = true);


return t;
});})(rgba_size,raw_positions,raw_velocities,raw_edges,_,___$1))
;
var t_positions = new_texture.call(null,raw_positions,tw,th);
var t_velocities = new_texture.call(null,raw_velocities,tw,th);
var t_edges = new_texture.call(null,raw_edges,ew,eh);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_positions,t_velocities,t_edges], null);
});
glsl_graph.core.handle_graph = (function glsl_graph$core$handle_graph(c,graph_data,status,jqxhr){
var graph_data__$1 = cljs.core.js__GT_clj.call(null,graph_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var records_per_edge = new cljs.core.Keyword(null,"recordsPerEdge","recordsPerEdge",924648902).cljs$core$IFn$_invoke$arity$1(graph_data__$1);
var links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(graph_data__$1);
var edges = (function (){var iter__5731__auto__ = ((function (graph_data__$1,records_per_edge,links){
return (function glsl_graph$core$handle_graph_$_iter__7869(s__7870){
return (new cljs.core.LazySeq(null,((function (graph_data__$1,records_per_edge,links){
return (function (){
var s__7870__$1 = s__7870;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7870__$1);
if(temp__4425__auto__){
var s__7870__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7870__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__7870__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__7872 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__7871 = (0);
while(true){
if((i__7871 < size__5730__auto__)){
var i = cljs.core._nth.call(null,c__5729__auto__,i__7871);
cljs.core.chunk_append.call(null,b__7872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,links,i),cljs.core.get.call(null,links,(i + (1)))], null));

var G__7905 = (i__7871 + (1));
i__7871 = G__7905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7872),glsl_graph$core$handle_graph_$_iter__7869.call(null,cljs.core.chunk_rest.call(null,s__7870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7872),null);
}
} else {
var i = cljs.core.first.call(null,s__7870__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,links,i),cljs.core.get.call(null,links,(i + (1)))], null),glsl_graph$core$handle_graph_$_iter__7869.call(null,cljs.core.rest.call(null,s__7870__$2)));
}
} else {
return null;
}
break;
}
});})(graph_data__$1,records_per_edge,links))
,null,null));
});})(graph_data__$1,records_per_edge,links))
;
return iter__5731__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,links),records_per_edge));
})();
var nodes = cljs.core.sort.call(null,clojure.set.union.call(null,cljs.core.set.call(null,(function (){var iter__5731__auto__ = ((function (graph_data__$1,records_per_edge,links,edges){
return (function glsl_graph$core$handle_graph_$_iter__7873(s__7874){
return (new cljs.core.LazySeq(null,((function (graph_data__$1,records_per_edge,links,edges){
return (function (){
var s__7874__$1 = s__7874;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7874__$1);
if(temp__4425__auto__){
var s__7874__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7874__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__7874__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__7876 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__7875 = (0);
while(true){
if((i__7875 < size__5730__auto__)){
var edge = cljs.core._nth.call(null,c__5729__auto__,i__7875);
cljs.core.chunk_append.call(null,b__7876,cljs.core.get.call(null,edge,(0)));

var G__7906 = (i__7875 + (1));
i__7875 = G__7906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7876),glsl_graph$core$handle_graph_$_iter__7873.call(null,cljs.core.chunk_rest.call(null,s__7874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7876),null);
}
} else {
var edge = cljs.core.first.call(null,s__7874__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,edge,(0)),glsl_graph$core$handle_graph_$_iter__7873.call(null,cljs.core.rest.call(null,s__7874__$2)));
}
} else {
return null;
}
break;
}
});})(graph_data__$1,records_per_edge,links,edges))
,null,null));
});})(graph_data__$1,records_per_edge,links,edges))
;
return iter__5731__auto__.call(null,edges);
})()),cljs.core.set.call(null,(function (){var iter__5731__auto__ = ((function (graph_data__$1,records_per_edge,links,edges){
return (function glsl_graph$core$handle_graph_$_iter__7877(s__7878){
return (new cljs.core.LazySeq(null,((function (graph_data__$1,records_per_edge,links,edges){
return (function (){
var s__7878__$1 = s__7878;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7878__$1);
if(temp__4425__auto__){
var s__7878__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7878__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__7878__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__7880 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__7879 = (0);
while(true){
if((i__7879 < size__5730__auto__)){
var edge = cljs.core._nth.call(null,c__5729__auto__,i__7879);
cljs.core.chunk_append.call(null,b__7880,cljs.core.get.call(null,edge,(1)));

var G__7907 = (i__7879 + (1));
i__7879 = G__7907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7880),glsl_graph$core$handle_graph_$_iter__7877.call(null,cljs.core.chunk_rest.call(null,s__7878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7880),null);
}
} else {
var edge = cljs.core.first.call(null,s__7878__$2);
return cljs.core.cons.call(null,cljs.core.get.call(null,edge,(1)),glsl_graph$core$handle_graph_$_iter__7877.call(null,cljs.core.rest.call(null,s__7878__$2)));
}
} else {
return null;
}
break;
}
});})(graph_data__$1,records_per_edge,links,edges))
,null,null));
});})(graph_data__$1,records_per_edge,links,edges))
;
return iter__5731__auto__.call(null,edges);
})())));
var nodes_indexed = cljs.core.reduce.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes){
return (function (m,p__7881){
var vec__7882 = p__7881;
var i2 = cljs.core.nth.call(null,vec__7882,(0),null);
var n2 = cljs.core.nth.call(null,vec__7882,(1),null);
return cljs.core.assoc.call(null,m,i2,n2);
});})(graph_data__$1,records_per_edge,links,edges,nodes))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,nodes));
var nodes_reverse = cljs.core.reduce.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed){
return (function (m,p__7883){
var vec__7884 = p__7883;
var i2 = cljs.core.nth.call(null,vec__7884,(0),null);
var n2 = cljs.core.nth.call(null,vec__7884,(1),null);
return cljs.core.assoc.call(null,m,n2,i2);
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,nodes));
var edges_indexed = cljs.core.map.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse){
return (function (edge){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,nodes_reverse,cljs.core.get.call(null,edge,(0))),cljs.core.get.call(null,nodes_reverse,cljs.core.get.call(null,edge,(1)))], null);
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse))
,edges);
var node_count = cljs.core.count.call(null,nodes);
var node_neighbours = cljs.core.vec.call(null,cljs.core.map.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count))
,cljs.core.range.call(null,node_count)));
var node_neighbours__$1 = cljs.core.reduce.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours){
return (function (m,edge){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,edge,(0))], null),((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours){
return (function (p1__7826_SHARP_){
return cljs.core.conj.call(null,p1__7826_SHARP_,cljs.core.get.call(null,edge,(1)));
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,edge,(1))], null),((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours){
return (function (p1__7827_SHARP_){
return cljs.core.conj.call(null,p1__7827_SHARP_,cljs.core.get.call(null,edge,(0)));
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours))
);
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours))
,node_neighbours,edges_indexed);
var degrees = cljs.core.map.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours,node_neighbours__$1){
return (function (p1__7828_SHARP_){
return cljs.core.count.call(null,p1__7828_SHARP_);
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours,node_neighbours__$1))
,node_neighbours__$1);
var max_degree = cljs.core.apply.call(null,cljs.core.max,degrees);
var vec__7867 = cljs.core.reduce.call(null,((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours,node_neighbours__$1,degrees,max_degree){
return (function (p__7885,neighbour_list){
var vec__7886 = p__7885;
var v = cljs.core.nth.call(null,vec__7886,(0),null);
var total = cljs.core.nth.call(null,vec__7886,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,v,total),(total + cljs.core.count.call(null,neighbour_list))], null);
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours,node_neighbours__$1,degrees,max_degree))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null),node_neighbours__$1);
var node_neighbours_startpos = cljs.core.nth.call(null,vec__7867,(0),null);
var total = cljs.core.nth.call(null,vec__7867,(1),null);
var node_neighbours_startpos__$1 = cljs.core.conj.call(null,node_neighbours_startpos,total);
var node_neighbours_flat = cljs.core.vec.call(null,cljs.core.flatten.call(null,node_neighbours__$1));
var directed_edge_count = cljs.core.count.call(null,edges_indexed);
var edge_count = cljs.core.count.call(null,node_neighbours_flat);
var node_sq = Math.ceil(Math.sqrt(node_count));
var edge_sq = Math.ceil(Math.sqrt(edge_count));
var tw = node_sq;
var th = node_sq;
var ew = edge_sq;
var eh = edge_sq;
var floats_per_planet = 4.0;
var out_width = node_sq;
var out_height = node_sq;
var renderer = glsl_graph.core.data.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(c));
var camera = (new glsl_graph.core.three.Camera());
var _ = camera.position.z = (1);
var gl = renderer.getContext.call(null);
var ___$1 = ((cljs.core._EQ_.call(null,gl.getExtension("OES_texture_float"),null))?glsl_graph.core.sweet_alert.call(null,"No OES_texture_float support for float textures!","error"):null);
var ___$2 = ((cljs.core._EQ_.call(null,gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),(0)))?glsl_graph.core.sweet_alert.call(null,"No support for vertex shader textures!","error"):null);
var scene = (new glsl_graph.core.THREE.Scene());
var defines = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"NODECOUNT","NODECOUNT",-1898680938),node_count,new cljs.core.Keyword(null,"EDGECOUNT","EDGECOUNT",-1162164398),edge_count,new cljs.core.Keyword(null,"SQNODE","SQNODE",538243516),node_sq,new cljs.core.Keyword(null,"SQEDGE","SQEDGE",334841862),edge_sq,new cljs.core.Keyword(null,"USE3D","USE3D",175342307),"false"], null));
var uniforms = cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"u_node_count","u_node_count",-1496825084),new cljs.core.Keyword(null,"u_iteration","u_iteration",-583933530),new cljs.core.Keyword(null,"u_time","u_time",-213869942),new cljs.core.Keyword(null,"u_spring_length","u_spring_length",-313357426),new cljs.core.Keyword(null,"u_speed_reduction","u_speed_reduction",1822466450),new cljs.core.Keyword(null,"u_texture_velocities","u_texture_velocities",-1835025966),new cljs.core.Keyword(null,"u_min_dist","u_min_dist",1457804468),new cljs.core.Keyword(null,"u_texture_edges","u_texture_edges",1662045304),new cljs.core.Keyword(null,"u_dist_reduction","u_dist_reduction",-733443368),new cljs.core.Keyword(null,"u_time_old","u_time_old",-918776104),new cljs.core.Keyword(null,"u_time_delta","u_time_delta",646896155),new cljs.core.Keyword(null,"u_resolution","u_resolution",-2041817604),new cljs.core.Keyword(null,"u_texture_positions","u_texture_positions",-1800934564),new cljs.core.Keyword(null,"u_spring_coefficient","u_spring_coefficient",-1685897348)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),node_count], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),((new Date()).getTime() / 1000.0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),30.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),1000.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"t",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),1.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"t",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),(30.0 / 1000.0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),0.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),0.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"v2",new cljs.core.Keyword(null,"value","value",305978217),(new glsl_graph.core.THREE.Vector2(tw,th))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"t",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"f",new cljs.core.Keyword(null,"value","value",305978217),0.1], null)]));
var uniforms_pass_through = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u_pass_texture","u_pass_texture",-521325692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"t",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.Keyword(null,"u_resolution","u_resolution",-2041817604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"v2",new cljs.core.Keyword(null,"value","value",305978217),(new glsl_graph.core.three.Vector2(out_width,out_height))], null)], null));
var pass_through_vs = jayq.core.$.call(null,"#pass-through-vs").text();
var pass_through_fs = jayq.core.$.call(null,"#pass-through-fs").text();
var pass_through_material = (new glsl_graph.core.THREE.ShaderMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"defines","defines",-214016281),defines,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),uniforms_pass_through,new cljs.core.Keyword(null,"vertexShader","vertexShader",-668531773),pass_through_vs,new cljs.core.Keyword(null,"fragmentShader","fragmentShader",1579642943),pass_through_fs,new cljs.core.Keyword(null,"depthWrite","depthWrite",1125643927),false], null))));
var velocity_fs = jayq.core.$.call(null,"#velocity-fs").text();
var velocity_material = (new glsl_graph.core.THREE.ShaderMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"defines","defines",-214016281),defines,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),uniforms,new cljs.core.Keyword(null,"vertexShader","vertexShader",-668531773),pass_through_vs,new cljs.core.Keyword(null,"fragmentShader","fragmentShader",1579642943),velocity_fs,new cljs.core.Keyword(null,"depthWrite","depthWrite",1125643927),false], null))));
var position_fs = jayq.core.$.call(null,"#position-fs").text();
var position_material = (new glsl_graph.core.THREE.ShaderMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"defines","defines",-214016281),defines,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),uniforms,new cljs.core.Keyword(null,"vertexShader","vertexShader",-668531773),pass_through_vs,new cljs.core.Keyword(null,"fragmentShader","fragmentShader",1579642943),position_fs,new cljs.core.Keyword(null,"depthWrite","depthWrite",1125643927),false], null))));
var plane = (new glsl_graph.core.THREE.PlaneBufferGeometry((2),(2)));
var mesh = (new glsl_graph.core.THREE.Mesh(plane,pass_through_material));
var ___$3 = scene.add(mesh);
var screen_scene = (new glsl_graph.core.THREE.Scene());
var screen_camera = (new glsl_graph.core.THREE.PerspectiveCamera((75),(window.innerWidth / window.innerHeight),0.1,(1000)));
var ___$4 = screen_camera.position.y = (1);
var controls = (new OrbitControls(screen_camera));
var screen_geometry = (new glsl_graph.core.THREE.Geometry());
var screen_uniforms = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u_texture_positions","u_texture_positions",-1800934564),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"t",new cljs.core.Keyword(null,"value","value",305978217),null], null),new cljs.core.Keyword(null,"u_resolution","u_resolution",-2041817604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"v2",new cljs.core.Keyword(null,"value","value",305978217),(new glsl_graph.core.THREE.Vector2(window.innerWidth,window.innerHeight))], null)], null));
var screen_attributes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a_displacement_index","a_displacement_index",1486936199),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"v",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"needsUpdate","needsUpdate",-1987292639),true], null),new cljs.core.Keyword(null,"a_color","a_color",625113709),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"c",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"needsUpdate","needsUpdate",-1987292639),true], null)], null);
var screen_vs = jayq.core.$.call(null,"#screen-vs").text();
var screen_fs = jayq.core.$.call(null,"#screen-fs").text();
var screen_material = (new glsl_graph.core.THREE.ShaderMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),screen_uniforms,new cljs.core.Keyword(null,"vertexShader","vertexShader",-668531773),screen_vs,new cljs.core.Keyword(null,"fragmentShader","fragmentShader",1579642943),screen_fs,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"blending","blending",31165821),glsl_graph.core.THREE.AdditiveBlending,new cljs.core.Keyword(null,"depthWrite","depthWrite",1125643927),false], null))));
var screen_geometry__$1 = (new glsl_graph.core.THREE.BufferGeometry());
var ___$5 = screen_geometry__$1.addAttribute("position",(new glsl_graph.core.THREE.BufferAttribute((new Float32Array((node_count * (3)))),(3))));
var ___$6 = screen_geometry__$1.addAttribute("a_color",(new glsl_graph.core.THREE.BufferAttribute((new Float32Array((node_count * (3)))),(3))));
var ___$7 = screen_geometry__$1.addAttribute("a_displacement_index",(new glsl_graph.core.THREE.BufferAttribute((new Float32Array((node_count * (2)))),(2))));
var node_index_to_texture = ((function (graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours,node_neighbours__$1,degrees,max_degree,vec__7867,node_neighbours_startpos,total,node_neighbours_startpos__$1,node_neighbours_flat,directed_edge_count,edge_count,node_sq,edge_sq,tw,th,ew,eh,floats_per_planet,out_width,out_height,renderer,camera,_,gl,___$1,___$2,scene,defines,uniforms,uniforms_pass_through,pass_through_vs,pass_through_fs,pass_through_material,velocity_fs,velocity_material,position_fs,position_material,plane,mesh,___$3,screen_scene,screen_camera,___$4,controls,screen_geometry,screen_uniforms,screen_attributes,screen_vs,screen_fs,screen_material,screen_geometry__$1,___$5,___$6,___$7){
return (function (i){
var xf = (cljs.core.mod.call(null,i,tw) / tw);
var y = Math.floor((i / tw));
var yf = (y / th);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xf,yf], null);
});})(graph_data__$1,records_per_edge,links,edges,nodes,nodes_indexed,nodes_reverse,edges_indexed,node_count,node_neighbours,node_neighbours__$1,degrees,max_degree,vec__7867,node_neighbours_startpos,total,node_neighbours_startpos__$1,node_neighbours_flat,directed_edge_count,edge_count,node_sq,edge_sq,tw,th,ew,eh,floats_per_planet,out_width,out_height,renderer,camera,_,gl,___$1,___$2,scene,defines,uniforms,uniforms_pass_through,pass_through_vs,pass_through_fs,pass_through_material,velocity_fs,velocity_material,position_fs,position_material,plane,mesh,___$3,screen_scene,screen_camera,___$4,controls,screen_geometry,screen_uniforms,screen_attributes,screen_vs,screen_fs,screen_material,screen_geometry__$1,___$5,___$6,___$7))
;
var vertices = screen_geometry__$1.getAttribute("position");
var a_displacement_index = screen_geometry__$1.getAttribute("a_displacement_index");
var a_color = screen_geometry__$1.getAttribute("a_color");
var ___$8 = (function (){var seq__7887 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),node_count));
var chunk__7888 = null;
var count__7889 = (0);
var i__7890 = (0);
while(true){
if((i__7890 < count__7889)){
var i = cljs.core._nth.call(null,chunk__7888,i__7890);
var vec__7891_7908 = node_index_to_texture.call(null,i);
var xf_7909 = cljs.core.nth.call(null,vec__7891_7908,(0),null);
var yf_7910 = cljs.core.nth.call(null,vec__7891_7908,(1),null);
var r_7911 = Math.random();
var g_7912 = Math.random();
var b_7913 = Math.random();
vertices.setXYZ(i,(0),(0),(0));

a_displacement_index.setXY(i,xf_7909,yf_7910);

a_color.setXYZ(i,r_7911,g_7912,b_7913);

var G__7914 = seq__7887;
var G__7915 = chunk__7888;
var G__7916 = count__7889;
var G__7917 = (i__7890 + (1));
seq__7887 = G__7914;
chunk__7888 = G__7915;
count__7889 = G__7916;
i__7890 = G__7917;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7887);
if(temp__4425__auto__){
var seq__7887__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7887__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__7887__$1);
var G__7918 = cljs.core.chunk_rest.call(null,seq__7887__$1);
var G__7919 = c__5762__auto__;
var G__7920 = cljs.core.count.call(null,c__5762__auto__);
var G__7921 = (0);
seq__7887 = G__7918;
chunk__7888 = G__7919;
count__7889 = G__7920;
i__7890 = G__7921;
continue;
} else {
var i = cljs.core.first.call(null,seq__7887__$1);
var vec__7892_7922 = node_index_to_texture.call(null,i);
var xf_7923 = cljs.core.nth.call(null,vec__7892_7922,(0),null);
var yf_7924 = cljs.core.nth.call(null,vec__7892_7922,(1),null);
var r_7925 = Math.random();
var g_7926 = Math.random();
var b_7927 = Math.random();
vertices.setXYZ(i,(0),(0),(0));

a_displacement_index.setXY(i,xf_7923,yf_7924);

a_color.setXYZ(i,r_7925,g_7926,b_7927);

var G__7928 = cljs.core.next.call(null,seq__7887__$1);
var G__7929 = null;
var G__7930 = (0);
var G__7931 = (0);
seq__7887 = G__7928;
chunk__7888 = G__7929;
count__7889 = G__7930;
i__7890 = G__7931;
continue;
}
} else {
return null;
}
}
break;
}
})();
var points = (new glsl_graph.core.THREE.Points(screen_geometry__$1,screen_material));
var ___$9 = screen_scene.add(points);
var ___$10 = screen_scene.add((new glsl_graph.core.THREE.AmbientLight((4473924))));
var lines_geometry = (new glsl_graph.core.THREE.BufferGeometry());
var ___$11 = lines_geometry.addAttribute("position",(new glsl_graph.core.THREE.BufferAttribute((new Float32Array((directed_edge_count * (9)))),(3))));
var ___$12 = lines_geometry.addAttribute("a_displacement_index",(new glsl_graph.core.THREE.BufferAttribute((new Float32Array((directed_edge_count * (6)))),(2))));
var lines_vs = jayq.core.$.call(null,"#lines-vs").text();
var lines_fs = jayq.core.$.call(null,"#lines-fs").text();
var lines_material = (new glsl_graph.core.THREE.ShaderMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),screen_uniforms,new cljs.core.Keyword(null,"vertexShader","vertexShader",-668531773),lines_vs,new cljs.core.Keyword(null,"fragmentShader","fragmentShader",1579642943),lines_fs,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"blending","blending",31165821),glsl_graph.core.THREE.AdditiveBlending,new cljs.core.Keyword(null,"depthWrite","depthWrite",1125643927),false], null))));
var position = lines_geometry.getAttribute("position");
var ___$13 = lines_geometry.computeBoundingSphere();
var a_displacement_index__$1 = lines_geometry.getAttribute("a_displacement_index");
var ___$14 = (function (){var seq__7893 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,edges_indexed));
var chunk__7894 = null;
var count__7895 = (0);
var i__7896 = (0);
while(true){
if((i__7896 < count__7895)){
var vec__7897 = cljs.core._nth.call(null,chunk__7894,i__7896);
var i = cljs.core.nth.call(null,vec__7897,(0),null);
var vec__7898 = cljs.core.nth.call(null,vec__7897,(1),null);
var n1 = cljs.core.nth.call(null,vec__7898,(0),null);
var n2 = cljs.core.nth.call(null,vec__7898,(1),null);
var j_7932 = (i * (3));
var vec__7899_7933 = node_index_to_texture.call(null,n1);
var xf1_7934 = cljs.core.nth.call(null,vec__7899_7933,(0),null);
var yf1_7935 = cljs.core.nth.call(null,vec__7899_7933,(1),null);
var vec__7900_7936 = node_index_to_texture.call(null,n2);
var xf2_7937 = cljs.core.nth.call(null,vec__7900_7936,(0),null);
var yf2_7938 = cljs.core.nth.call(null,vec__7900_7936,(1),null);
var inf_7939 = Number.POSITIVE_INFINITY;
position.setXYZ((j_7932 + (0)),(0),(0),(0));

position.setXYZ((j_7932 + (1)),(0),(0),(0));

position.setXYZ((j_7932 + (2)),inf_7939,inf_7939,inf_7939);

a_displacement_index__$1.setXY((j_7932 + (0)),xf1_7934,yf1_7935);

a_displacement_index__$1.setXY((j_7932 + (1)),xf2_7937,yf2_7938);

a_displacement_index__$1.setXY((j_7932 + (2)),xf2_7937,yf2_7938);

var G__7940 = seq__7893;
var G__7941 = chunk__7894;
var G__7942 = count__7895;
var G__7943 = (i__7896 + (1));
seq__7893 = G__7940;
chunk__7894 = G__7941;
count__7895 = G__7942;
i__7896 = G__7943;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7893);
if(temp__4425__auto__){
var seq__7893__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__7893__$1);
var G__7944 = cljs.core.chunk_rest.call(null,seq__7893__$1);
var G__7945 = c__5762__auto__;
var G__7946 = cljs.core.count.call(null,c__5762__auto__);
var G__7947 = (0);
seq__7893 = G__7944;
chunk__7894 = G__7945;
count__7895 = G__7946;
i__7896 = G__7947;
continue;
} else {
var vec__7901 = cljs.core.first.call(null,seq__7893__$1);
var i = cljs.core.nth.call(null,vec__7901,(0),null);
var vec__7902 = cljs.core.nth.call(null,vec__7901,(1),null);
var n1 = cljs.core.nth.call(null,vec__7902,(0),null);
var n2 = cljs.core.nth.call(null,vec__7902,(1),null);
var j_7948 = (i * (3));
var vec__7903_7949 = node_index_to_texture.call(null,n1);
var xf1_7950 = cljs.core.nth.call(null,vec__7903_7949,(0),null);
var yf1_7951 = cljs.core.nth.call(null,vec__7903_7949,(1),null);
var vec__7904_7952 = node_index_to_texture.call(null,n2);
var xf2_7953 = cljs.core.nth.call(null,vec__7904_7952,(0),null);
var yf2_7954 = cljs.core.nth.call(null,vec__7904_7952,(1),null);
var inf_7955 = Number.POSITIVE_INFINITY;
position.setXYZ((j_7948 + (0)),(0),(0),(0));

position.setXYZ((j_7948 + (1)),(0),(0),(0));

position.setXYZ((j_7948 + (2)),inf_7955,inf_7955,inf_7955);

a_displacement_index__$1.setXY((j_7948 + (0)),xf1_7950,yf1_7951);

a_displacement_index__$1.setXY((j_7948 + (1)),xf2_7953,yf2_7954);

a_displacement_index__$1.setXY((j_7948 + (2)),xf2_7953,yf2_7954);

var G__7956 = cljs.core.next.call(null,seq__7893__$1);
var G__7957 = null;
var G__7958 = (0);
var G__7959 = (0);
seq__7893 = G__7956;
chunk__7894 = G__7957;
count__7895 = G__7958;
i__7896 = G__7959;
continue;
}
} else {
return null;
}
}
break;
}
})();
var lines = (new glsl_graph.core.THREE.Line(lines_geometry,lines_material));
var ___$15 = screen_scene.add(lines);
var rt = (new glsl_graph.core.THREE.WebGLRenderTarget(tw,th,{"wrapS": glsl_graph.core.THREE.ClampToEdgeWrapping, "wrapT": glsl_graph.core.THREE.ClampToEdgeWrapping, "magFilter": glsl_graph.core.THREE.NearestFilter, "minFilter": glsl_graph.core.THREE.NearestFilter, "format": glsl_graph.core.THREE.RGBAFormat, "type": glsl_graph.core.THREE.FloatType, "stencilBuffer": false}));
var rt_positions1 = rt.clone();
var rt_positions2 = rt.clone();
var rt_velocities1 = rt.clone();
var rt_velocities2 = rt.clone();
var vec__7868 = glsl_graph.core.gen_texture.call(null,node_count,edge_count,tw,th,ew,eh,node_neighbours_startpos__$1,node_neighbours_flat);
var t_positions = cljs.core.nth.call(null,vec__7868,(0),null);
var t_velocities = cljs.core.nth.call(null,vec__7868,(1),null);
var t_edges = cljs.core.nth.call(null,vec__7868,(2),null);
var ___$16 = (uniforms_pass_through["u_pass_texture"]["value"] = t_positions);
var ___$17 = (mesh["material"] = pass_through_material);
var ___$18 = renderer.render(scene,camera,rt_positions1,true);
var ___$19 = renderer.render(scene,camera,rt_positions2,true);
var ___$20 = (uniforms_pass_through["u_pass_texture"]["value"] = t_velocities);
var ___$21 = (mesh["material"] = pass_through_material);
var ___$22 = renderer.render(scene,camera,rt_velocities1,true);
var ___$23 = renderer.render(scene,camera,rt_velocities2,true);
var options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"screen-camera","screen-camera",-85262268),new cljs.core.Keyword(null,"velocity-material","velocity-material",87503526),new cljs.core.Keyword(null,"rt-velocities2","rt-velocities2",1121479047),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.Keyword(null,"position-material","position-material",-1253117880),new cljs.core.Keyword(null,"rt-velocities1","rt-velocities1",-692521013),new cljs.core.Keyword(null,"rt-positions1","rt-positions1",-1581075412),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"screen-uniforms","screen-uniforms",1280473487),new cljs.core.Keyword(null,"rt-positions2","rt-positions2",193045359),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"t-edges","t-edges",735048210),new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"screen-scene","screen-scene",1224775359)],[screen_camera,velocity_material,rt_velocities2,uniforms,position_material,rt_velocities1,rt_positions1,renderer,screen_uniforms,rt_positions2,c,t_edges,mesh,camera,scene,screen_scene]);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"render-options","render-options",686799147).cljs$core$IFn$_invoke$arity$1(c),options);
});
glsl_graph.core.handle_graph_error = (function glsl_graph$core$handle_graph_error(jqxhr,status,error){
return console.log("AJAX error",jqxhr,status,error);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
glsl_graph.core.get_graph_Record = (function (renderer,scene,camera,init_scene,render_options_ready,render_options,__meta,__extmap,__hash){
this.renderer = renderer;
this.scene = scene;
this.camera = camera;
this.init_scene = init_scene;
this.render_options_ready = render_options_ready;
this.render_options = render_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
glsl_graph.core.get_graph_Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5573__auto__,k__5574__auto__){
var self__ = this;
var this__5573__auto____$1 = this;
return cljs.core._lookup.call(null,this__5573__auto____$1,k__5574__auto__,null);
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5575__auto__,k7962,else__5576__auto__){
var self__ = this;
var this__5575__auto____$1 = this;
var G__7964 = (((k7962 instanceof cljs.core.Keyword))?k7962.fqn:null);
switch (G__7964) {
case "renderer":
return self__.renderer;

break;
case "scene":
return self__.scene;

break;
case "camera":
return self__.camera;

break;
case "init-scene":
return self__.init_scene;

break;
case "render-options-ready":
return self__.render_options_ready;

break;
case "render-options":
return self__.render_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k7962,else__5576__auto__);

}
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5587__auto__,writer__5588__auto__,opts__5589__auto__){
var self__ = this;
var this__5587__auto____$1 = this;
var pr_pair__5590__auto__ = ((function (this__5587__auto____$1){
return (function (keyval__5591__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,cljs.core.pr_writer,""," ","",opts__5589__auto__,keyval__5591__auto__);
});})(this__5587__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5588__auto__,pr_pair__5590__auto__,"#glsl-graph.core.get-graph-Record{",", ","}",opts__5589__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),self__.render_options_ready],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-options","render-options",686799147),self__.render_options],null))], null),self__.__extmap));
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IIterable$ = true;

glsl_graph.core.get_graph_Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7961){
var self__ = this;
var G__7961__$1 = this;
return (new cljs.core.RecordIter((0),G__7961__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),new cljs.core.Keyword(null,"render-options","render-options",686799147)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5571__auto__){
var self__ = this;
var this__5571__auto____$1 = this;
return self__.__meta;
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5567__auto__){
var self__ = this;
var this__5567__auto____$1 = this;
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,self__.init_scene,self__.render_options_ready,self__.render_options,self__.__meta,self__.__extmap,self__.__hash));
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5577__auto__){
var self__ = this;
var this__5577__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5568__auto__){
var self__ = this;
var this__5568__auto____$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this__5568__auto____$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5569__auto__,other__5570__auto__){
var self__ = this;
var this__5569__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4947__auto__ = other__5570__auto__;
if(cljs.core.truth_(and__4947__auto__)){
var and__4947__auto____$1 = (this__5569__auto____$1.constructor === other__5570__auto__.constructor);
if(and__4947__auto____$1){
return cljs.core.equiv_map.call(null,this__5569__auto____$1,other__5570__auto__);
} else {
return and__4947__auto____$1;
}
} else {
return and__4947__auto__;
}
})())){
return true;
} else {
return false;
}
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5582__auto__,k__5583__auto__){
var self__ = this;
var this__5582__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),null,new cljs.core.Keyword(null,"render-options","render-options",686799147),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__5583__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5582__auto____$1),self__.__meta),k__5583__auto__);
} else {
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,self__.init_scene,self__.render_options_ready,self__.render_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5583__auto__)),null));
}
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5580__auto__,k__5581__auto__,G__7961){
var self__ = this;
var this__5580__auto____$1 = this;
var pred__7965 = cljs.core.keyword_identical_QMARK_;
var expr__7966 = k__5581__auto__;
if(cljs.core.truth_(pred__7965.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__7966))){
return (new glsl_graph.core.get_graph_Record(G__7961,self__.scene,self__.camera,self__.init_scene,self__.render_options_ready,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7965.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__7966))){
return (new glsl_graph.core.get_graph_Record(self__.renderer,G__7961,self__.camera,self__.init_scene,self__.render_options_ready,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7965.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__7966))){
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,G__7961,self__.init_scene,self__.render_options_ready,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7965.call(null,new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),expr__7966))){
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,G__7961,self__.render_options_ready,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7965.call(null,new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),expr__7966))){
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,self__.init_scene,G__7961,self__.render_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__7965.call(null,new cljs.core.Keyword(null,"render-options","render-options",686799147),expr__7966))){
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,self__.init_scene,self__.render_options_ready,G__7961,self__.__meta,self__.__extmap,null));
} else {
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,self__.init_scene,self__.render_options_ready,self__.render_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5581__auto__,G__7961),null));
}
}
}
}
}
}
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5585__auto__){
var self__ = this;
var this__5585__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),self__.init_scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),self__.render_options_ready],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"render-options","render-options",686799147),self__.render_options],null))], null),self__.__extmap));
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5572__auto__,G__7961){
var self__ = this;
var this__5572__auto____$1 = this;
return (new glsl_graph.core.get_graph_Record(self__.renderer,self__.scene,self__.camera,self__.init_scene,self__.render_options_ready,self__.render_options,G__7961,self__.__extmap,self__.__hash));
});

glsl_graph.core.get_graph_Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5578__auto__,entry__5579__auto__){
var self__ = this;
var this__5578__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5579__auto__)){
return cljs.core._assoc.call(null,this__5578__auto____$1,cljs.core._nth.call(null,entry__5579__auto__,(0)),cljs.core._nth.call(null,entry__5579__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5578__auto____$1,entry__5579__auto__);
}
});

glsl_graph.core.get_graph_Record.prototype.com$stuartsierra$component$Lifecycle$ = true;

glsl_graph.core.get_graph_Record.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (G__7960){
var self__ = this;
var G__7960__$1 = this;
return ((function (G__7960__$1){
return (function (c){
var c__$1 = cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"render-options","render-options",686799147),cljs.core.atom.call(null,null));
var ready = promesa.core.then.call(null,glsl_graph.core.ajax.call(null,glsl_graph.core.graph_url,"json"),cljs.core.partial.call(null,glsl_graph.core.handle_graph,c__$1));
var c__$2 = cljs.core.assoc.call(null,c__$1,new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),ready);
return c__$2;
});})(G__7960__$1))
.call(null,G__7960__$1);
});

glsl_graph.core.get_graph_Record.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (G__7960){
var self__ = this;
var G__7960__$1 = this;
return cljs.core.identity.call(null,G__7960__$1);
});

glsl_graph.core.get_graph_Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"init-scene","init-scene",624606753,null),new cljs.core.Symbol(null,"render-options-ready","render-options-ready",874938126,null),new cljs.core.Symbol(null,"render-options","render-options",-1967636622,null)], null);
});

glsl_graph.core.get_graph_Record.cljs$lang$type = true;

glsl_graph.core.get_graph_Record.cljs$lang$ctorPrSeq = (function (this__5607__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"glsl-graph.core/get-graph-Record");
});

glsl_graph.core.get_graph_Record.cljs$lang$ctorPrWriter = (function (this__5607__auto__,writer__5608__auto__){
return cljs.core._write.call(null,writer__5608__auto__,"glsl-graph.core/get-graph-Record");
});

glsl_graph.core.__GT_get_graph_Record = (function glsl_graph$core$__GT_get_graph_Record(renderer,scene,camera,init_scene,render_options_ready,render_options){
return (new glsl_graph.core.get_graph_Record(renderer,scene,camera,init_scene,render_options_ready,render_options,null,null,null));
});

glsl_graph.core.map__GT_get_graph_Record = (function glsl_graph$core$map__GT_get_graph_Record(G__7963){
return (new glsl_graph.core.get_graph_Record(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__7963),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__7963),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__7963),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774).cljs$core$IFn$_invoke$arity$1(G__7963),new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401).cljs$core$IFn$_invoke$arity$1(G__7963),new cljs.core.Keyword(null,"render-options","render-options",686799147).cljs$core$IFn$_invoke$arity$1(G__7963),null,cljs.core.dissoc.call(null,G__7963,new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774),new cljs.core.Keyword(null,"render-options-ready","render-options-ready",-765593401),new cljs.core.Keyword(null,"render-options","render-options",686799147)),null));
});


glsl_graph.core.add_component.call(null,glsl_graph.core.system,new cljs.core.Keyword(null,"get-graph","get-graph",-1158626298),com.stuartsierra.component.using.call(null,glsl_graph.core.map__GT_get_graph_Record.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"init-scene","init-scene",-1015924774)], null)));
if(typeof glsl_graph.core.ran !== 'undefined'){
} else {
glsl_graph.core.ran = cljs.core.atom.call(null,false);
}
glsl_graph.core.main = (function glsl_graph$core$main(){
cljs.core.reset_BANG_.call(null,glsl_graph.core.ran,true);

cljs.core.println.call(null,"main");

try{cljs.core.swap_BANG_.call(null,glsl_graph.core.system,com.stuartsierra.component.stop_system);
}catch (e7971){if((e7971 instanceof Object)){
var e_7973 = e7971;
var simple_e_7974 = com.stuartsierra.component.ex_without_components.call(null,e_7973);
console.log(simple_e_7974);

console.log((simple_e_7974["cause"]));

throw (simple_e_7974["cause"]);
} else {
throw e7971;

}
}
try{return cljs.core.swap_BANG_.call(null,glsl_graph.core.system,com.stuartsierra.component.start_system);
}catch (e7972){if((e7972 instanceof Object)){
var e = e7972;
var simple_e = com.stuartsierra.component.ex_without_components.call(null,e);
console.log(simple_e);

console.log((simple_e["cause"]));

throw (simple_e["cause"]);
} else {
throw e7972;

}
}});
if(cljs.core.truth_(cljs.core.deref.call(null,glsl_graph.core.ran))){
glsl_graph.core.main.call(null);
} else {
$(glsl_graph.core.main);
}
glsl_graph.core.on_js_reload = (function glsl_graph$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1445449313589