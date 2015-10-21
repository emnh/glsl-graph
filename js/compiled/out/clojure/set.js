// Compiled by ClojureScript 1.7.145 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__7977_SHARP_){
return (max === p1__7977_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args7978 = [];
var len__6017__auto___7984 = arguments.length;
var i__6018__auto___7985 = (0);
while(true){
if((i__6018__auto___7985 < len__6017__auto___7984)){
args7978.push((arguments[i__6018__auto___7985]));

var G__7986 = (i__6018__auto___7985 + (1));
i__6018__auto___7985 = G__7986;
continue;
} else {
}
break;
}

var G__7983 = args7978.length;
switch (G__7983) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args7978.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6036__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq7979){
var G__7980 = cljs.core.first.call(null,seq7979);
var seq7979__$1 = cljs.core.next.call(null,seq7979);
var G__7981 = cljs.core.first.call(null,seq7979__$1);
var seq7979__$2 = cljs.core.next.call(null,seq7979__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__7980,G__7981,seq7979__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args7989 = [];
var len__6017__auto___7995 = arguments.length;
var i__6018__auto___7996 = (0);
while(true){
if((i__6018__auto___7996 < len__6017__auto___7995)){
args7989.push((arguments[i__6018__auto___7996]));

var G__7997 = (i__6018__auto___7996 + (1));
i__6018__auto___7996 = G__7997;
continue;
} else {
}
break;
}

var G__7994 = args7989.length;
switch (G__7994) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args7989.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6036__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__7999 = s2;
var G__8000 = s1;
s1 = G__7999;
s2 = G__8000;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__7988_SHARP_){
return (- cljs.core.count.call(null,p1__7988_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq7990){
var G__7991 = cljs.core.first.call(null,seq7990);
var seq7990__$1 = cljs.core.next.call(null,seq7990);
var G__7992 = cljs.core.first.call(null,seq7990__$1);
var seq7990__$2 = cljs.core.next.call(null,seq7990__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__7991,G__7992,seq7990__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args8001 = [];
var len__6017__auto___8007 = arguments.length;
var i__6018__auto___8008 = (0);
while(true){
if((i__6018__auto___8008 < len__6017__auto___8007)){
args8001.push((arguments[i__6018__auto___8008]));

var G__8009 = (i__6018__auto___8008 + (1));
i__6018__auto___8008 = G__8009;
continue;
} else {
}
break;
}

var G__8006 = args8001.length;
switch (G__8006) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args8001.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6036__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq8002){
var G__8003 = cljs.core.first.call(null,seq8002);
var seq8002__$1 = cljs.core.next.call(null,seq8002);
var G__8004 = cljs.core.first.call(null,seq8002__$1);
var seq8002__$2 = cljs.core.next.call(null,seq8002__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__8003,G__8004,seq8002__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__8011_SHARP_){
return cljs.core.select_keys.call(null,p1__8011_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__8014){
var vec__8015 = p__8014;
var old = cljs.core.nth.call(null,vec__8015,(0),null);
var new$ = cljs.core.nth.call(null,vec__8015,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__8016_SHARP_){
return clojure.set.rename_keys.call(null,p1__8016_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__8019){
var vec__8020 = p__8019;
var k = cljs.core.nth.call(null,vec__8020,(0),null);
var v = cljs.core.nth.call(null,vec__8020,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args8025 = [];
var len__6017__auto___8030 = arguments.length;
var i__6018__auto___8031 = (0);
while(true){
if((i__6018__auto___8031 < len__6017__auto___8030)){
args8025.push((arguments[i__6018__auto___8031]));

var G__8032 = (i__6018__auto___8031 + (1));
i__6018__auto___8031 = G__8032;
continue;
} else {
}
break;
}

var G__8027 = args8025.length;
switch (G__8027) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8025.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__8028 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__8028,(0),null);
var s = cljs.core.nth.call(null,vec__8028,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__8028,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__8028,r,s,idx){
return (function (p1__8021_SHARP_,p2__8022_SHARP_){
return cljs.core.conj.call(null,p1__8021_SHARP_,cljs.core.merge.call(null,p2__8022_SHARP_,x));
});})(found,ks,vec__8028,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__8028,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__8029 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__8029,(0),null);
var s = cljs.core.nth.call(null,vec__8029,(1),null);
var k = cljs.core.nth.call(null,vec__8029,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__8029,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__8029,r,s,k,idx){
return (function (p1__8023_SHARP_,p2__8024_SHARP_){
return cljs.core.conj.call(null,p1__8023_SHARP_,cljs.core.merge.call(null,p2__8024_SHARP_,x));
});})(found,vec__8029,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__8029,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__8034_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__8034_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__8035_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__8035_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1445449314093