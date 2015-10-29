// Compiled by ClojureScript 1.7.145 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
javelin.core.Cell;

javelin.core.cell_QMARK_;

javelin.core.cell;

javelin.core.input_QMARK_;

javelin.core.lens_QMARK_;
javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__8129 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8127_SHARP_,p2__8128_SHARP_){
return cljs.core.assoc.call(null,p1__8127_SHARP_,p2__8128_SHARP_,p2__8128_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8129;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e8131){if((e8131 instanceof Error)){
var _ = e8131;
return null;
} else {
throw e8131;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8134 = c;
javelin.core.add_sync_BANG_.call(null,G__8134);

return G__8134;
} else {
var G__8135 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8135));

return G__8135;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8144 = arguments.length;
var i__6018__auto___8145 = (0);
while(true){
if((i__6018__auto___8145 < len__6017__auto___8144)){
args__6024__auto__.push((arguments[i__6018__auto___8145]));

var G__8146 = (i__6018__auto___8145 + (1));
i__6018__auto___8145 = G__8146;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8138){
var vec__8139 = p__8138;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8139,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8140 = cljs.core.seq.call(null,srcs);
var chunk__8141 = null;
var count__8142 = (0);
var i__8143 = (0);
while(true){
if((i__8143 < count__8142)){
var src = cljs.core._nth.call(null,chunk__8141,i__8143);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8147 = seq__8140;
var G__8148 = chunk__8141;
var G__8149 = count__8142;
var G__8150 = (i__8143 + (1));
seq__8140 = G__8147;
chunk__8141 = G__8148;
count__8142 = G__8149;
i__8143 = G__8150;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8140);
if(temp__4425__auto__){
var seq__8140__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8140__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__8140__$1);
var G__8151 = cljs.core.chunk_rest.call(null,seq__8140__$1);
var G__8152 = c__5762__auto__;
var G__8153 = cljs.core.count.call(null,c__5762__auto__);
var G__8154 = (0);
seq__8140 = G__8151;
chunk__8141 = G__8152;
count__8142 = G__8153;
i__8143 = G__8154;
continue;
} else {
var src = cljs.core.first.call(null,seq__8140__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8155 = cljs.core.next.call(null,seq__8140__$1);
var G__8156 = null;
var G__8157 = (0);
var G__8158 = (0);
seq__8140 = G__8155;
chunk__8141 = G__8156;
count__8142 = G__8157;
i__8143 = G__8158;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8136){
var G__8137 = cljs.core.first.call(null,seq8136);
var seq8136__$1 = cljs.core.next.call(null,seq8136);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8137,seq8136__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8177 = arguments.length;
var i__6018__auto___8178 = (0);
while(true){
if((i__6018__auto___8178 < len__6017__auto___8177)){
args__6024__auto__.push((arguments[i__6018__auto___8178]));

var G__8179 = (i__6018__auto___8178 + (1));
i__6018__auto___8178 = G__8179;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8163){
var vec__8164 = p__8163;
var f = cljs.core.nth.call(null,vec__8164,(0),null);
var sources = cljs.core.nth.call(null,vec__8164,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8165_8180 = cljs.core.seq.call(null,this$.sources);
var chunk__8166_8181 = null;
var count__8167_8182 = (0);
var i__8168_8183 = (0);
while(true){
if((i__8168_8183 < count__8167_8182)){
var source_8184 = cljs.core._nth.call(null,chunk__8166_8181,i__8168_8183);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8184))){
source_8184.sinks = cljs.core.conj.call(null,source_8184.sinks,this$);

if((source_8184.rank > this$.rank)){
var seq__8169_8185 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8165_8180,chunk__8166_8181,count__8167_8182,i__8168_8183,source_8184,vec__8164,f,sources){
return (function (p1__8159_SHARP_){
return p1__8159_SHARP_.sinks;
});})(seq__8165_8180,chunk__8166_8181,count__8167_8182,i__8168_8183,source_8184,vec__8164,f,sources))
,source_8184));
var chunk__8170_8186 = null;
var count__8171_8187 = (0);
var i__8172_8188 = (0);
while(true){
if((i__8172_8188 < count__8171_8187)){
var dep_8189 = cljs.core._nth.call(null,chunk__8170_8186,i__8172_8188);
dep_8189.rank = javelin.core.next_rank.call(null);

var G__8190 = seq__8169_8185;
var G__8191 = chunk__8170_8186;
var G__8192 = count__8171_8187;
var G__8193 = (i__8172_8188 + (1));
seq__8169_8185 = G__8190;
chunk__8170_8186 = G__8191;
count__8171_8187 = G__8192;
i__8172_8188 = G__8193;
continue;
} else {
var temp__4425__auto___8194 = cljs.core.seq.call(null,seq__8169_8185);
if(temp__4425__auto___8194){
var seq__8169_8195__$1 = temp__4425__auto___8194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8169_8195__$1)){
var c__5762__auto___8196 = cljs.core.chunk_first.call(null,seq__8169_8195__$1);
var G__8197 = cljs.core.chunk_rest.call(null,seq__8169_8195__$1);
var G__8198 = c__5762__auto___8196;
var G__8199 = cljs.core.count.call(null,c__5762__auto___8196);
var G__8200 = (0);
seq__8169_8185 = G__8197;
chunk__8170_8186 = G__8198;
count__8171_8187 = G__8199;
i__8172_8188 = G__8200;
continue;
} else {
var dep_8201 = cljs.core.first.call(null,seq__8169_8195__$1);
dep_8201.rank = javelin.core.next_rank.call(null);

var G__8202 = cljs.core.next.call(null,seq__8169_8195__$1);
var G__8203 = null;
var G__8204 = (0);
var G__8205 = (0);
seq__8169_8185 = G__8202;
chunk__8170_8186 = G__8203;
count__8171_8187 = G__8204;
i__8172_8188 = G__8205;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8206 = seq__8165_8180;
var G__8207 = chunk__8166_8181;
var G__8208 = count__8167_8182;
var G__8209 = (i__8168_8183 + (1));
seq__8165_8180 = G__8206;
chunk__8166_8181 = G__8207;
count__8167_8182 = G__8208;
i__8168_8183 = G__8209;
continue;
} else {
var temp__4425__auto___8210 = cljs.core.seq.call(null,seq__8165_8180);
if(temp__4425__auto___8210){
var seq__8165_8211__$1 = temp__4425__auto___8210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8165_8211__$1)){
var c__5762__auto___8212 = cljs.core.chunk_first.call(null,seq__8165_8211__$1);
var G__8213 = cljs.core.chunk_rest.call(null,seq__8165_8211__$1);
var G__8214 = c__5762__auto___8212;
var G__8215 = cljs.core.count.call(null,c__5762__auto___8212);
var G__8216 = (0);
seq__8165_8180 = G__8213;
chunk__8166_8181 = G__8214;
count__8167_8182 = G__8215;
i__8168_8183 = G__8216;
continue;
} else {
var source_8217 = cljs.core.first.call(null,seq__8165_8211__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8217))){
source_8217.sinks = cljs.core.conj.call(null,source_8217.sinks,this$);

if((source_8217.rank > this$.rank)){
var seq__8173_8218 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8165_8180,chunk__8166_8181,count__8167_8182,i__8168_8183,source_8217,seq__8165_8211__$1,temp__4425__auto___8210,vec__8164,f,sources){
return (function (p1__8159_SHARP_){
return p1__8159_SHARP_.sinks;
});})(seq__8165_8180,chunk__8166_8181,count__8167_8182,i__8168_8183,source_8217,seq__8165_8211__$1,temp__4425__auto___8210,vec__8164,f,sources))
,source_8217));
var chunk__8174_8219 = null;
var count__8175_8220 = (0);
var i__8176_8221 = (0);
while(true){
if((i__8176_8221 < count__8175_8220)){
var dep_8222 = cljs.core._nth.call(null,chunk__8174_8219,i__8176_8221);
dep_8222.rank = javelin.core.next_rank.call(null);

var G__8223 = seq__8173_8218;
var G__8224 = chunk__8174_8219;
var G__8225 = count__8175_8220;
var G__8226 = (i__8176_8221 + (1));
seq__8173_8218 = G__8223;
chunk__8174_8219 = G__8224;
count__8175_8220 = G__8225;
i__8176_8221 = G__8226;
continue;
} else {
var temp__4425__auto___8227__$1 = cljs.core.seq.call(null,seq__8173_8218);
if(temp__4425__auto___8227__$1){
var seq__8173_8228__$1 = temp__4425__auto___8227__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8173_8228__$1)){
var c__5762__auto___8229 = cljs.core.chunk_first.call(null,seq__8173_8228__$1);
var G__8230 = cljs.core.chunk_rest.call(null,seq__8173_8228__$1);
var G__8231 = c__5762__auto___8229;
var G__8232 = cljs.core.count.call(null,c__5762__auto___8229);
var G__8233 = (0);
seq__8173_8218 = G__8230;
chunk__8174_8219 = G__8231;
count__8175_8220 = G__8232;
i__8176_8221 = G__8233;
continue;
} else {
var dep_8234 = cljs.core.first.call(null,seq__8173_8228__$1);
dep_8234.rank = javelin.core.next_rank.call(null);

var G__8235 = cljs.core.next.call(null,seq__8173_8228__$1);
var G__8236 = null;
var G__8237 = (0);
var G__8238 = (0);
seq__8173_8218 = G__8235;
chunk__8174_8219 = G__8236;
count__8175_8220 = G__8237;
i__8176_8221 = G__8238;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8239 = cljs.core.next.call(null,seq__8165_8211__$1);
var G__8240 = null;
var G__8241 = (0);
var G__8242 = (0);
seq__8165_8180 = G__8239;
chunk__8166_8181 = G__8240;
count__8167_8182 = G__8241;
i__8168_8183 = G__8242;
continue;
}
} else {
}
}
break;
}

var compute_8243 = ((function (vec__8164,f,sources){
return (function (p1__8160_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8160_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8160_SHARP_)));
});})(vec__8164,f,sources))
;
this$.thunk = ((function (compute_8243,vec__8164,f,sources){
return (function (){
return this$.state = compute_8243.call(null,this$.sources);
});})(compute_8243,vec__8164,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8161){
var G__8162 = cljs.core.first.call(null,seq8161);
var seq8161__$1 = cljs.core.next.call(null,seq8161);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8162,seq8161__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8244 = cljs.core.seq.call(null,self__.watches);
var chunk__8245 = null;
var count__8246 = (0);
var i__8247 = (0);
while(true){
if((i__8247 < count__8246)){
var vec__8248 = cljs.core._nth.call(null,chunk__8245,i__8247);
var key = cljs.core.nth.call(null,vec__8248,(0),null);
var f = cljs.core.nth.call(null,vec__8248,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8250 = seq__8244;
var G__8251 = chunk__8245;
var G__8252 = count__8246;
var G__8253 = (i__8247 + (1));
seq__8244 = G__8250;
chunk__8245 = G__8251;
count__8246 = G__8252;
i__8247 = G__8253;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8244);
if(temp__4425__auto__){
var seq__8244__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8244__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__8244__$1);
var G__8254 = cljs.core.chunk_rest.call(null,seq__8244__$1);
var G__8255 = c__5762__auto__;
var G__8256 = cljs.core.count.call(null,c__5762__auto__);
var G__8257 = (0);
seq__8244 = G__8254;
chunk__8245 = G__8255;
count__8246 = G__8256;
i__8247 = G__8257;
continue;
} else {
var vec__8249 = cljs.core.first.call(null,seq__8244__$1);
var key = cljs.core.nth.call(null,vec__8249,(0),null);
var f = cljs.core.nth.call(null,vec__8249,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8258 = cljs.core.next.call(null,seq__8244__$1);
var G__8259 = null;
var G__8260 = (0);
var G__8261 = (0);
seq__8244 = G__8258;
chunk__8245 = G__8259;
count__8246 = G__8260;
i__8247 = G__8261;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__5557__auto__,writer__5558__auto__,opt__5559__auto__){
return cljs.core._write.call(null,writer__5558__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__4947__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4947__auto__)){
return c.thunk;
} else {
return and__4947__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__4947__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4947__auto__)){
return c.update;
} else {
return and__4947__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__4947__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__4947__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__4947__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__8262__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8262 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8263__i = 0, G__8263__a = new Array(arguments.length -  0);
while (G__8263__i < G__8263__a.length) {G__8263__a[G__8263__i] = arguments[G__8263__i + 0]; ++G__8263__i;}
  sources = new cljs.core.IndexedSeq(G__8263__a,0);
} 
return G__8262__delegate.call(this,sources);};
G__8262.cljs$lang$maxFixedArity = 0;
G__8262.cljs$lang$applyTo = (function (arglist__8264){
var sources = cljs.core.seq(arglist__8264);
return G__8262__delegate(sources);
});
G__8262.cljs$core$IFn$_invoke$arity$variadic = G__8262__delegate;
return G__8262;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args8265 = [];
var len__6017__auto___8273 = arguments.length;
var i__6018__auto___8274 = (0);
while(true){
if((i__6018__auto___8274 < len__6017__auto___8273)){
args8265.push((arguments[i__6018__auto___8274]));

var G__8275 = (i__6018__auto___8274 + (1));
i__6018__auto___8274 = G__8275;
continue;
} else {
}
break;
}

var G__8269 = args8265.length;
switch (G__8269) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args8265.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6036__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8270){
var map__8271 = p__8270;
var map__8271__$1 = ((((!((map__8271 == null)))?((((map__8271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8271):map__8271);
var meta = cljs.core.get.call(null,map__8271__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8266){
var G__8267 = cljs.core.first.call(null,seq8266);
var seq8266__$1 = cljs.core.next.call(null,seq8266);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8267,seq8266__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8277_SHARP_){
var _STAR_tx_STAR_8280 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8277_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8280;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8281 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8281;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8288 = arguments.length;
var i__6018__auto___8289 = (0);
while(true){
if((i__6018__auto___8289 < len__6017__auto___8288)){
args__6024__auto__.push((arguments[i__6018__auto___8289]));

var G__8290 = (i__6018__auto___8289 + (1));
i__6018__auto___8289 = G__8290;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((0) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6025__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__8282_SHARP_,p2__8283_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8282_SHARP_,p2__8283_SHARP_),p2__8283_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8285_SHARP_,p2__8284_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8285_SHARP_,p2__8284_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8291__delegate = function (rest__8286_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8286_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8286_SHARP_);

return news;
};
var G__8291 = function (var_args){
var rest__8286_SHARP_ = null;
if (arguments.length > 0) {
var G__8292__i = 0, G__8292__a = new Array(arguments.length -  0);
while (G__8292__i < G__8292__a.length) {G__8292__a[G__8292__i] = arguments[G__8292__i + 0]; ++G__8292__i;}
  rest__8286_SHARP_ = new cljs.core.IndexedSeq(G__8292__a,0);
} 
return G__8291__delegate.call(this,rest__8286_SHARP_);};
G__8291.cljs$lang$maxFixedArity = 0;
G__8291.cljs$lang$applyTo = (function (arglist__8293){
var rest__8286_SHARP_ = cljs.core.seq(arglist__8293);
return G__8291__delegate(rest__8286_SHARP_);
});
G__8291.cljs$core$IFn$_invoke$arity$variadic = G__8291__delegate;
return G__8291;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8287){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8287));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8294_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8294_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8295_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8295_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8300_8304 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8301_8305 = null;
var count__8302_8306 = (0);
var i__8303_8307 = (0);
while(true){
if((i__8303_8307 < count__8302_8306)){
var i_8308 = cljs.core._nth.call(null,chunk__8301_8305,i__8303_8307);
f__$1.call(null,ith_item__$1.call(null,i_8308));

var G__8309 = seq__8300_8304;
var G__8310 = chunk__8301_8305;
var G__8311 = count__8302_8306;
var G__8312 = (i__8303_8307 + (1));
seq__8300_8304 = G__8309;
chunk__8301_8305 = G__8310;
count__8302_8306 = G__8311;
i__8303_8307 = G__8312;
continue;
} else {
var temp__4425__auto___8313 = cljs.core.seq.call(null,seq__8300_8304);
if(temp__4425__auto___8313){
var seq__8300_8314__$1 = temp__4425__auto___8313;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8300_8314__$1)){
var c__5762__auto___8315 = cljs.core.chunk_first.call(null,seq__8300_8314__$1);
var G__8316 = cljs.core.chunk_rest.call(null,seq__8300_8314__$1);
var G__8317 = c__5762__auto___8315;
var G__8318 = cljs.core.count.call(null,c__5762__auto___8315);
var G__8319 = (0);
seq__8300_8304 = G__8316;
chunk__8301_8305 = G__8317;
count__8302_8306 = G__8318;
i__8303_8307 = G__8319;
continue;
} else {
var i_8320 = cljs.core.first.call(null,seq__8300_8314__$1);
f__$1.call(null,ith_item__$1.call(null,i_8320));

var G__8321 = cljs.core.next.call(null,seq__8300_8314__$1);
var G__8322 = null;
var G__8323 = (0);
var G__8324 = (0);
seq__8300_8304 = G__8321;
chunk__8301_8305 = G__8322;
count__8302_8306 = G__8323;
i__8303_8307 = G__8324;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map?rel=1446114639916