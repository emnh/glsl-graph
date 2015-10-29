// Compiled by ClojureScript 1.7.145 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__5731__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__8328(s__8329){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__8329__$1 = s__8329;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8329__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__8335 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__8335,(0),null);
var item_set = cljs.core.nth.call(null,vec__8335,(1),null);
var iterys__5727__auto__ = ((function (s__8329__$1,vec__8335,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__8328_$_iter__8330(s__8331){
return (new cljs.core.LazySeq(null,((function (s__8329__$1,vec__8335,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__8331__$1 = s__8331;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8331__$1);
if(temp__4425__auto____$1){
var s__8331__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8331__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__8331__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__8333 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__8332 = (0);
while(true){
if((i__8332 < size__5730__auto__)){
var item = cljs.core._nth.call(null,c__5729__auto__,i__8332);
cljs.core.chunk_append.call(null,b__8333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__8352 = (i__8332 + (1));
i__8332 = G__8352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),tailrecursion$priority_map$iter__8328_$_iter__8330.call(null,cljs.core.chunk_rest.call(null,s__8331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8333),null);
}
} else {
var item = cljs.core.first.call(null,s__8331__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__8328_$_iter__8330.call(null,cljs.core.rest.call(null,s__8331__$2)));
}
} else {
return null;
}
break;
}
});})(s__8329__$1,vec__8335,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__8329__$1,vec__8335,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__5728__auto__ = cljs.core.seq.call(null,iterys__5727__auto__.call(null,item_set));
if(fs__5728__auto__){
return cljs.core.concat.call(null,fs__5728__auto__,tailrecursion$priority_map$iter__8328.call(null,cljs.core.rest.call(null,s__8329__$1)));
} else {
var G__8353 = cljs.core.rest.call(null,s__8329__$1);
s__8329__$1 = G__8353;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__5731__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5394__auto__ = self__.__hash;
if(!((h__5394__auto__ == null))){
return h__5394__auto__;
} else {
var h__5394__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__5394__auto____$1;

return h__5394__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__5731__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__8336(s__8337){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__8337__$1 = s__8337;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8337__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__8343 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__8343,(0),null);
var item_set = cljs.core.nth.call(null,vec__8343,(1),null);
var iterys__5727__auto__ = ((function (s__8337__$1,vec__8343,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__8336_$_iter__8338(s__8339){
return (new cljs.core.LazySeq(null,((function (s__8337__$1,vec__8343,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__8339__$1 = s__8339;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8339__$1);
if(temp__4425__auto____$1){
var s__8339__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8339__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__8339__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__8341 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__8340 = (0);
while(true){
if((i__8340 < size__5730__auto__)){
var item = cljs.core._nth.call(null,c__5729__auto__,i__8340);
cljs.core.chunk_append.call(null,b__8341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__8354 = (i__8340 + (1));
i__8340 = G__8354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),tailrecursion$priority_map$iter__8336_$_iter__8338.call(null,cljs.core.chunk_rest.call(null,s__8339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8341),null);
}
} else {
var item = cljs.core.first.call(null,s__8339__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__8336_$_iter__8338.call(null,cljs.core.rest.call(null,s__8339__$2)));
}
} else {
return null;
}
break;
}
});})(s__8337__$1,vec__8343,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__8337__$1,vec__8343,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__5728__auto__ = cljs.core.seq.call(null,iterys__5727__auto__.call(null,item_set));
if(fs__5728__auto__){
return cljs.core.concat.call(null,fs__5728__auto__,tailrecursion$priority_map$iter__8336.call(null,cljs.core.rest.call(null,s__8337__$1)));
} else {
var G__8355 = cljs.core.rest.call(null,s__8337__$1);
s__8337__$1 = G__8355;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__5731__auto__.call(null,self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__8356 = null;
var G__8356__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__8356__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__8356 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__8356__2.call(this,self__,item);
case 3:
return G__8356__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8356.cljs$core$IFn$_invoke$arity$2 = G__8356__2;
G__8356.cljs$core$IFn$_invoke$arity$3 = G__8356__3;
return G__8356;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args8327){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8327)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__5731__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__8344(s__8345){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__8345__$1 = s__8345;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8345__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__8351 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__8351,(0),null);
var item_set = cljs.core.nth.call(null,vec__8351,(1),null);
var iterys__5727__auto__ = ((function (s__8345__$1,vec__8351,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__8344_$_iter__8346(s__8347){
return (new cljs.core.LazySeq(null,((function (s__8345__$1,vec__8351,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__8347__$1 = s__8347;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__8347__$1);
if(temp__4425__auto____$1){
var s__8347__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8347__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__8347__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__8349 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__8348 = (0);
while(true){
if((i__8348 < size__5730__auto__)){
var item = cljs.core._nth.call(null,c__5729__auto__,i__8348);
cljs.core.chunk_append.call(null,b__8349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__8357 = (i__8348 + (1));
i__8348 = G__8357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8349),tailrecursion$priority_map$iter__8344_$_iter__8346.call(null,cljs.core.chunk_rest.call(null,s__8347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8349),null);
}
} else {
var item = cljs.core.first.call(null,s__8347__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__8344_$_iter__8346.call(null,cljs.core.rest.call(null,s__8347__$2)));
}
} else {
return null;
}
break;
}
});})(s__8345__$1,vec__8351,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__8345__$1,vec__8351,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__5728__auto__ = cljs.core.seq.call(null,iterys__5727__auto__.call(null,item_set));
if(fs__5728__auto__){
return cljs.core.concat.call(null,fs__5728__auto__,tailrecursion$priority_map$iter__8344.call(null,cljs.core.rest.call(null,s__8345__$1)));
} else {
var G__8358 = cljs.core.rest.call(null,s__8345__$1);
s__8345__$1 = G__8358;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__5731__auto__.call(null,sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val.call(null,entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5557__auto__,writer__5558__auto__,opt__5559__auto__){
return cljs.core._write.call(null,writer__5558__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8360 = arguments.length;
var i__6018__auto___8361 = (0);
while(true){
if((i__6018__auto___8361 < len__6017__auto___8360)){
args__6024__auto__.push((arguments[i__6018__auto___8361]));

var G__8362 = (i__6018__auto___8361 + (1));
i__6018__auto___8361 = G__8362;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((0) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__6025__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__8363 = cljs.core.nnext.call(null,in$);
var G__8364 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__8363;
out = G__8364;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq8359){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8359));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8367 = arguments.length;
var i__6018__auto___8368 = (0);
while(true){
if((i__6018__auto___8368 < len__6017__auto___8367)){
args__6024__auto__.push((arguments[i__6018__auto___8368]));

var G__8369 = (i__6018__auto___8368 + (1));
i__6018__auto___8368 = G__8369;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__8370 = cljs.core.nnext.call(null,in$);
var G__8371 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__8370;
out = G__8371;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq8365){
var G__8366 = cljs.core.first.call(null,seq8365);
var seq8365__$1 = cljs.core.next.call(null,seq8365);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__8366,seq8365__$1);
});

//# sourceMappingURL=priority_map.js.map?rel=1446114640303