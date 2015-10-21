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

var G__8109 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__8107_SHARP_,p2__8108_SHARP_){
return cljs.core.assoc.call(null,p1__8107_SHARP_,p2__8108_SHARP_,p2__8108_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__8109;
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
}catch (e8111){if((e8111 instanceof Error)){
var _ = e8111;
return null;
} else {
throw e8111;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__8114 = c;
javelin.core.add_sync_BANG_.call(null,G__8114);

return G__8114;
} else {
var G__8115 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__8115));

return G__8115;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8124 = arguments.length;
var i__6018__auto___8125 = (0);
while(true){
if((i__6018__auto___8125 < len__6017__auto___8124)){
args__6024__auto__.push((arguments[i__6018__auto___8125]));

var G__8126 = (i__6018__auto___8125 + (1));
i__6018__auto___8125 = G__8126;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8118){
var vec__8119 = p__8118;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__8119,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__8120 = cljs.core.seq.call(null,srcs);
var chunk__8121 = null;
var count__8122 = (0);
var i__8123 = (0);
while(true){
if((i__8123 < count__8122)){
var src = cljs.core._nth.call(null,chunk__8121,i__8123);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8127 = seq__8120;
var G__8128 = chunk__8121;
var G__8129 = count__8122;
var G__8130 = (i__8123 + (1));
seq__8120 = G__8127;
chunk__8121 = G__8128;
count__8122 = G__8129;
i__8123 = G__8130;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8120);
if(temp__4425__auto__){
var seq__8120__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8120__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__8120__$1);
var G__8131 = cljs.core.chunk_rest.call(null,seq__8120__$1);
var G__8132 = c__5762__auto__;
var G__8133 = cljs.core.count.call(null,c__5762__auto__);
var G__8134 = (0);
seq__8120 = G__8131;
chunk__8121 = G__8132;
count__8122 = G__8133;
i__8123 = G__8134;
continue;
} else {
var src = cljs.core.first.call(null,seq__8120__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8135 = cljs.core.next.call(null,seq__8120__$1);
var G__8136 = null;
var G__8137 = (0);
var G__8138 = (0);
seq__8120 = G__8135;
chunk__8121 = G__8136;
count__8122 = G__8137;
i__8123 = G__8138;
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

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq8116){
var G__8117 = cljs.core.first.call(null,seq8116);
var seq8116__$1 = cljs.core.next.call(null,seq8116);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8117,seq8116__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8157 = arguments.length;
var i__6018__auto___8158 = (0);
while(true){
if((i__6018__auto___8158 < len__6017__auto___8157)){
args__6024__auto__.push((arguments[i__6018__auto___8158]));

var G__8159 = (i__6018__auto___8158 + (1));
i__6018__auto___8158 = G__8159;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8143){
var vec__8144 = p__8143;
var f = cljs.core.nth.call(null,vec__8144,(0),null);
var sources = cljs.core.nth.call(null,vec__8144,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8145_8160 = cljs.core.seq.call(null,this$.sources);
var chunk__8146_8161 = null;
var count__8147_8162 = (0);
var i__8148_8163 = (0);
while(true){
if((i__8148_8163 < count__8147_8162)){
var source_8164 = cljs.core._nth.call(null,chunk__8146_8161,i__8148_8163);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8164))){
source_8164.sinks = cljs.core.conj.call(null,source_8164.sinks,this$);

if((source_8164.rank > this$.rank)){
var seq__8149_8165 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8145_8160,chunk__8146_8161,count__8147_8162,i__8148_8163,source_8164,vec__8144,f,sources){
return (function (p1__8139_SHARP_){
return p1__8139_SHARP_.sinks;
});})(seq__8145_8160,chunk__8146_8161,count__8147_8162,i__8148_8163,source_8164,vec__8144,f,sources))
,source_8164));
var chunk__8150_8166 = null;
var count__8151_8167 = (0);
var i__8152_8168 = (0);
while(true){
if((i__8152_8168 < count__8151_8167)){
var dep_8169 = cljs.core._nth.call(null,chunk__8150_8166,i__8152_8168);
dep_8169.rank = javelin.core.next_rank.call(null);

var G__8170 = seq__8149_8165;
var G__8171 = chunk__8150_8166;
var G__8172 = count__8151_8167;
var G__8173 = (i__8152_8168 + (1));
seq__8149_8165 = G__8170;
chunk__8150_8166 = G__8171;
count__8151_8167 = G__8172;
i__8152_8168 = G__8173;
continue;
} else {
var temp__4425__auto___8174 = cljs.core.seq.call(null,seq__8149_8165);
if(temp__4425__auto___8174){
var seq__8149_8175__$1 = temp__4425__auto___8174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8149_8175__$1)){
var c__5762__auto___8176 = cljs.core.chunk_first.call(null,seq__8149_8175__$1);
var G__8177 = cljs.core.chunk_rest.call(null,seq__8149_8175__$1);
var G__8178 = c__5762__auto___8176;
var G__8179 = cljs.core.count.call(null,c__5762__auto___8176);
var G__8180 = (0);
seq__8149_8165 = G__8177;
chunk__8150_8166 = G__8178;
count__8151_8167 = G__8179;
i__8152_8168 = G__8180;
continue;
} else {
var dep_8181 = cljs.core.first.call(null,seq__8149_8175__$1);
dep_8181.rank = javelin.core.next_rank.call(null);

var G__8182 = cljs.core.next.call(null,seq__8149_8175__$1);
var G__8183 = null;
var G__8184 = (0);
var G__8185 = (0);
seq__8149_8165 = G__8182;
chunk__8150_8166 = G__8183;
count__8151_8167 = G__8184;
i__8152_8168 = G__8185;
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

var G__8186 = seq__8145_8160;
var G__8187 = chunk__8146_8161;
var G__8188 = count__8147_8162;
var G__8189 = (i__8148_8163 + (1));
seq__8145_8160 = G__8186;
chunk__8146_8161 = G__8187;
count__8147_8162 = G__8188;
i__8148_8163 = G__8189;
continue;
} else {
var temp__4425__auto___8190 = cljs.core.seq.call(null,seq__8145_8160);
if(temp__4425__auto___8190){
var seq__8145_8191__$1 = temp__4425__auto___8190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8145_8191__$1)){
var c__5762__auto___8192 = cljs.core.chunk_first.call(null,seq__8145_8191__$1);
var G__8193 = cljs.core.chunk_rest.call(null,seq__8145_8191__$1);
var G__8194 = c__5762__auto___8192;
var G__8195 = cljs.core.count.call(null,c__5762__auto___8192);
var G__8196 = (0);
seq__8145_8160 = G__8193;
chunk__8146_8161 = G__8194;
count__8147_8162 = G__8195;
i__8148_8163 = G__8196;
continue;
} else {
var source_8197 = cljs.core.first.call(null,seq__8145_8191__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8197))){
source_8197.sinks = cljs.core.conj.call(null,source_8197.sinks,this$);

if((source_8197.rank > this$.rank)){
var seq__8153_8198 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8145_8160,chunk__8146_8161,count__8147_8162,i__8148_8163,source_8197,seq__8145_8191__$1,temp__4425__auto___8190,vec__8144,f,sources){
return (function (p1__8139_SHARP_){
return p1__8139_SHARP_.sinks;
});})(seq__8145_8160,chunk__8146_8161,count__8147_8162,i__8148_8163,source_8197,seq__8145_8191__$1,temp__4425__auto___8190,vec__8144,f,sources))
,source_8197));
var chunk__8154_8199 = null;
var count__8155_8200 = (0);
var i__8156_8201 = (0);
while(true){
if((i__8156_8201 < count__8155_8200)){
var dep_8202 = cljs.core._nth.call(null,chunk__8154_8199,i__8156_8201);
dep_8202.rank = javelin.core.next_rank.call(null);

var G__8203 = seq__8153_8198;
var G__8204 = chunk__8154_8199;
var G__8205 = count__8155_8200;
var G__8206 = (i__8156_8201 + (1));
seq__8153_8198 = G__8203;
chunk__8154_8199 = G__8204;
count__8155_8200 = G__8205;
i__8156_8201 = G__8206;
continue;
} else {
var temp__4425__auto___8207__$1 = cljs.core.seq.call(null,seq__8153_8198);
if(temp__4425__auto___8207__$1){
var seq__8153_8208__$1 = temp__4425__auto___8207__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8153_8208__$1)){
var c__5762__auto___8209 = cljs.core.chunk_first.call(null,seq__8153_8208__$1);
var G__8210 = cljs.core.chunk_rest.call(null,seq__8153_8208__$1);
var G__8211 = c__5762__auto___8209;
var G__8212 = cljs.core.count.call(null,c__5762__auto___8209);
var G__8213 = (0);
seq__8153_8198 = G__8210;
chunk__8154_8199 = G__8211;
count__8155_8200 = G__8212;
i__8156_8201 = G__8213;
continue;
} else {
var dep_8214 = cljs.core.first.call(null,seq__8153_8208__$1);
dep_8214.rank = javelin.core.next_rank.call(null);

var G__8215 = cljs.core.next.call(null,seq__8153_8208__$1);
var G__8216 = null;
var G__8217 = (0);
var G__8218 = (0);
seq__8153_8198 = G__8215;
chunk__8154_8199 = G__8216;
count__8155_8200 = G__8217;
i__8156_8201 = G__8218;
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

var G__8219 = cljs.core.next.call(null,seq__8145_8191__$1);
var G__8220 = null;
var G__8221 = (0);
var G__8222 = (0);
seq__8145_8160 = G__8219;
chunk__8146_8161 = G__8220;
count__8147_8162 = G__8221;
i__8148_8163 = G__8222;
continue;
}
} else {
}
}
break;
}

var compute_8223 = ((function (vec__8144,f,sources){
return (function (p1__8140_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8140_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8140_SHARP_)));
});})(vec__8144,f,sources))
;
this$.thunk = ((function (compute_8223,vec__8144,f,sources){
return (function (){
return this$.state = compute_8223.call(null,this$.sources);
});})(compute_8223,vec__8144,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8141){
var G__8142 = cljs.core.first.call(null,seq8141);
var seq8141__$1 = cljs.core.next.call(null,seq8141);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8142,seq8141__$1);
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
var seq__8224 = cljs.core.seq.call(null,self__.watches);
var chunk__8225 = null;
var count__8226 = (0);
var i__8227 = (0);
while(true){
if((i__8227 < count__8226)){
var vec__8228 = cljs.core._nth.call(null,chunk__8225,i__8227);
var key = cljs.core.nth.call(null,vec__8228,(0),null);
var f = cljs.core.nth.call(null,vec__8228,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8230 = seq__8224;
var G__8231 = chunk__8225;
var G__8232 = count__8226;
var G__8233 = (i__8227 + (1));
seq__8224 = G__8230;
chunk__8225 = G__8231;
count__8226 = G__8232;
i__8227 = G__8233;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8224);
if(temp__4425__auto__){
var seq__8224__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8224__$1)){
var c__5762__auto__ = cljs.core.chunk_first.call(null,seq__8224__$1);
var G__8234 = cljs.core.chunk_rest.call(null,seq__8224__$1);
var G__8235 = c__5762__auto__;
var G__8236 = cljs.core.count.call(null,c__5762__auto__);
var G__8237 = (0);
seq__8224 = G__8234;
chunk__8225 = G__8235;
count__8226 = G__8236;
i__8227 = G__8237;
continue;
} else {
var vec__8229 = cljs.core.first.call(null,seq__8224__$1);
var key = cljs.core.nth.call(null,vec__8229,(0),null);
var f = cljs.core.nth.call(null,vec__8229,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8238 = cljs.core.next.call(null,seq__8224__$1);
var G__8239 = null;
var G__8240 = (0);
var G__8241 = (0);
seq__8224 = G__8238;
chunk__8225 = G__8239;
count__8226 = G__8240;
i__8227 = G__8241;
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
var G__8242__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8242 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8243__i = 0, G__8243__a = new Array(arguments.length -  0);
while (G__8243__i < G__8243__a.length) {G__8243__a[G__8243__i] = arguments[G__8243__i + 0]; ++G__8243__i;}
  sources = new cljs.core.IndexedSeq(G__8243__a,0);
} 
return G__8242__delegate.call(this,sources);};
G__8242.cljs$lang$maxFixedArity = 0;
G__8242.cljs$lang$applyTo = (function (arglist__8244){
var sources = cljs.core.seq(arglist__8244);
return G__8242__delegate(sources);
});
G__8242.cljs$core$IFn$_invoke$arity$variadic = G__8242__delegate;
return G__8242;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args8245 = [];
var len__6017__auto___8253 = arguments.length;
var i__6018__auto___8254 = (0);
while(true){
if((i__6018__auto___8254 < len__6017__auto___8253)){
args8245.push((arguments[i__6018__auto___8254]));

var G__8255 = (i__6018__auto___8254 + (1));
i__6018__auto___8254 = G__8255;
continue;
} else {
}
break;
}

var G__8249 = args8245.length;
switch (G__8249) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args8245.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6036__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8250){
var map__8251 = p__8250;
var map__8251__$1 = ((((!((map__8251 == null)))?((((map__8251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8251):map__8251);
var meta = cljs.core.get.call(null,map__8251__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8246){
var G__8247 = cljs.core.first.call(null,seq8246);
var seq8246__$1 = cljs.core.next.call(null,seq8246);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8247,seq8246__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8257_SHARP_){
var _STAR_tx_STAR_8260 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8257_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8260;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8261 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8261;
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
var len__6017__auto___8268 = arguments.length;
var i__6018__auto___8269 = (0);
while(true){
if((i__6018__auto___8269 < len__6017__auto___8268)){
args__6024__auto__.push((arguments[i__6018__auto___8269]));

var G__8270 = (i__6018__auto___8269 + (1));
i__6018__auto___8269 = G__8270;
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
return (function (p1__8262_SHARP_,p2__8263_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8262_SHARP_,p2__8263_SHARP_),p2__8263_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8265_SHARP_,p2__8264_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8265_SHARP_,p2__8264_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8271__delegate = function (rest__8266_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8266_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8266_SHARP_);

return news;
};
var G__8271 = function (var_args){
var rest__8266_SHARP_ = null;
if (arguments.length > 0) {
var G__8272__i = 0, G__8272__a = new Array(arguments.length -  0);
while (G__8272__i < G__8272__a.length) {G__8272__a[G__8272__i] = arguments[G__8272__i + 0]; ++G__8272__i;}
  rest__8266_SHARP_ = new cljs.core.IndexedSeq(G__8272__a,0);
} 
return G__8271__delegate.call(this,rest__8266_SHARP_);};
G__8271.cljs$lang$maxFixedArity = 0;
G__8271.cljs$lang$applyTo = (function (arglist__8273){
var rest__8266_SHARP_ = cljs.core.seq(arglist__8273);
return G__8271__delegate(rest__8266_SHARP_);
});
G__8271.cljs$core$IFn$_invoke$arity$variadic = G__8271__delegate;
return G__8271;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8267){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8267));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8274_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8274_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8275_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8275_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8280_8284 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8281_8285 = null;
var count__8282_8286 = (0);
var i__8283_8287 = (0);
while(true){
if((i__8283_8287 < count__8282_8286)){
var i_8288 = cljs.core._nth.call(null,chunk__8281_8285,i__8283_8287);
f__$1.call(null,ith_item__$1.call(null,i_8288));

var G__8289 = seq__8280_8284;
var G__8290 = chunk__8281_8285;
var G__8291 = count__8282_8286;
var G__8292 = (i__8283_8287 + (1));
seq__8280_8284 = G__8289;
chunk__8281_8285 = G__8290;
count__8282_8286 = G__8291;
i__8283_8287 = G__8292;
continue;
} else {
var temp__4425__auto___8293 = cljs.core.seq.call(null,seq__8280_8284);
if(temp__4425__auto___8293){
var seq__8280_8294__$1 = temp__4425__auto___8293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8280_8294__$1)){
var c__5762__auto___8295 = cljs.core.chunk_first.call(null,seq__8280_8294__$1);
var G__8296 = cljs.core.chunk_rest.call(null,seq__8280_8294__$1);
var G__8297 = c__5762__auto___8295;
var G__8298 = cljs.core.count.call(null,c__5762__auto___8295);
var G__8299 = (0);
seq__8280_8284 = G__8296;
chunk__8281_8285 = G__8297;
count__8282_8286 = G__8298;
i__8283_8287 = G__8299;
continue;
} else {
var i_8300 = cljs.core.first.call(null,seq__8280_8294__$1);
f__$1.call(null,ith_item__$1.call(null,i_8300));

var G__8301 = cljs.core.next.call(null,seq__8280_8294__$1);
var G__8302 = null;
var G__8303 = (0);
var G__8304 = (0);
seq__8280_8284 = G__8301;
chunk__8281_8285 = G__8302;
count__8282_8286 = G__8303;
i__8283_8287 = G__8304;
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

//# sourceMappingURL=core.js.map?rel=1445449315176