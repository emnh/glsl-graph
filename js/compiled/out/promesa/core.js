// Compiled by ClojureScript 1.7.145 {}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('cats.core');
goog.require('cats.context');
goog.require('cats.protocols');
goog.require('promesa.protocols');
goog.require('org.bluebird');
promesa.core.promise_context;
Promise.prototype.cats$protocols$Contextual$ = true;

Promise.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return promesa.core.promise_context;
});

Promise.prototype.cats$protocols$Extract$ = true;

Promise.prototype.cats$protocols$Extract$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.cause();
} else {
return it__$1.value();
}
});

Promise.prototype.promesa$protocols$IPromise$ = true;

Promise.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(cb);
});

Promise.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(cb);
});

Promise.prototype.promesa$protocols$IPromise$_catch$arity$3 = (function (it,type,cb){
var it__$1 = this;
var type__$1 = (function (){var G__8058 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8058) {
case "timeout":
return Promise.TimeoutError;

break;
case "cancel":
return Promise.CancellationError;

break;
default:
return type;

}
})();
return it__$1.catch(type__$1,cb);
});

Promise.prototype.promesa$protocols$IState$ = true;

Promise.prototype.promesa$protocols$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

Promise.prototype.promesa$protocols$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

Promise.prototype.promesa$protocols$IState$_done_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return cljs.core.not.call(null,it__$1.isPending());
});
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return Promise.resolve(v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return Promise.reject(v);
});
/**
 * The promise constructor.
 */
promesa.core.promise = (function promesa$core$promise(v){
if(cljs.core.fn_QMARK_.call(null,v)){
return (new Promise(v));
} else {
if((v instanceof Error)){
return promesa.core.rejected.call(null,v);
} else {
return promesa.core.resolved.call(null,v);

}
}
});
/**
 * Returns true if `p` is a primise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(p){
if(!((p == null))){
if((false) || (p.promesa$protocols$IPromise$)){
return true;
} else {
if((!p.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IPromise,p);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,promesa.protocols.IPromise,p);
}
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Convenience alias for the `resolved?` predicate.
 */
promesa.core.fulfilled_QMARK_ = (function promesa$core$fulfilled_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return cljs.core.not.call(null,promesa.protocols._done_QMARK_.call(null,p));
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = (function promesa$core$done_QMARK_(p){
return promesa.protocols._done_QMARK_.call(null,p);
});
/**
 * A chain helper for promises.
 */
promesa.core.then = (function promesa$core$then(p,callback){
return promesa.protocols._then.call(null,p,callback);
});
/**
 * A variadic chain operation.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8066 = arguments.length;
var i__6018__auto___8067 = (0);
while(true){
if((i__6018__auto___8067 < len__6017__auto___8066)){
args__6024__auto__.push((arguments[i__6018__auto___8067]));

var G__8068 = (i__6018__auto___8067 + (1));
i__6018__auto___8067 = G__8068;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.call(null,(function (p1__8062_SHARP_,p2__8063_SHARP_){
return promesa.core.then.call(null,p1__8062_SHARP_,p2__8063_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

promesa.core.chain.cljs$lang$applyTo = (function (seq8064){
var G__8065 = cljs.core.first.call(null,seq8064);
var seq8064__$1 = cljs.core.next.call(null,seq8064);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(G__8065,seq8064__$1);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var args8069 = [];
var len__6017__auto___8072 = arguments.length;
var i__6018__auto___8073 = (0);
while(true){
if((i__6018__auto___8073 < len__6017__auto___8072)){
args8069.push((arguments[i__6018__auto___8073]));

var G__8074 = (i__6018__auto___8073 + (1));
i__6018__auto___8073 = G__8074;
continue;
} else {
}
break;
}

var G__8071 = args8069.length;
switch (G__8071) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8069.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,callback){
return promesa.protocols._catch.call(null,p,callback);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,type,callback){
return promesa.protocols._catch.call(null,p,type,callback);
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;
/**
 * A branching helper for promises.
 */
promesa.core.branch = (function promesa$core$branch(p,callback,errback){
return p.then(callback,errback);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 */
promesa.core.all = (function promesa$core$all(promises){
return cats.core.sequence.call(null,promises);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when first one item in the
 *   array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(promises){
return Promise.any(cljs.core.clj__GT_js.call(null,promises));
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when `n` number of promises
 *   is fulfilled.
 */
promesa.core.some = (function promesa$core$some(n,promises){
return promesa.core.then.call(null,Promise.some(cljs.core.clj__GT_js.call(null,promises),n),(function (p1__8076_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__8076_SHARP_);
}));
});
/**
 * Given a nodejs like function that accepts a callback
 *   as the last argument and return an other function
 *   that returns a promise.
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__8077__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
return cljs.core.apply.call(null,callable,args__$1);
}));
};
var G__8077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8078__i = 0, G__8078__a = new Array(arguments.length -  0);
while (G__8078__i < G__8078__a.length) {G__8078__a[G__8078__i] = arguments[G__8078__i + 0]; ++G__8078__i;}
  args = new cljs.core.IndexedSeq(G__8078__a,0);
} 
return G__8077__delegate.call(this,args);};
G__8077.cljs$lang$maxFixedArity = 0;
G__8077.cljs$lang$applyTo = (function (arglist__8079){
var args = cljs.core.seq(arglist__8079);
return G__8077__delegate(args);
});
G__8077.cljs$core$IFn$_invoke$arity$variadic = G__8077__delegate;
return G__8077;
})()
;
});
/**
 * Returns a cancellable promise that will be fulfilled
 *   with this promise's fulfillment value or rejection reason.
 *   However, if this promise is not fulfilled or rejected
 *   within `ms` milliseconds, the returned promise is cancelled
 *   with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var args8080 = [];
var len__6017__auto___8083 = arguments.length;
var i__6018__auto___8084 = (0);
while(true){
if((i__6018__auto___8084 < len__6017__auto___8083)){
args8080.push((arguments[i__6018__auto___8084]));

var G__8085 = (i__6018__auto___8084 + (1));
i__6018__auto___8084 = G__8085;
continue;
} else {
}
break;
}

var G__8082 = args8080.length;
switch (G__8082) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8080.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return p.timeout(t);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return p.timeout(t,v);
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;
/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var args8087 = [];
var len__6017__auto___8090 = arguments.length;
var i__6018__auto___8091 = (0);
while(true){
if((i__6018__auto___8091 < len__6017__auto___8090)){
args8087.push((arguments[i__6018__auto___8091]));

var G__8092 = (i__6018__auto___8091 + (1));
i__6018__auto___8091 = G__8092;
continue;
} else {
}
break;
}

var G__8089 = args8087.length;
switch (G__8089) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8087.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return Promise.delay(v,t);
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;
promesa.core.promise_context = (function (){
if(typeof promesa.core.t_promesa$core8094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
promesa.core.t_promesa$core8094 = (function (meta8095){
this.meta8095 = meta8095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.core.t_promesa$core8094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8096,meta8095__$1){
var self__ = this;
var _8096__$1 = this;
return (new promesa.core.t_promesa$core8094(meta8095__$1));
});

promesa.core.t_promesa$core8094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8096){
var self__ = this;
var _8096__$1 = this;
return self__.meta8095;
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Context$ = true;

promesa.core.t_promesa$core8094.prototype.cats$protocols$Context$_get_level$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.context._PLUS_level_default_PLUS_;
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Functor$ = true;

promesa.core.t_promesa$core8094.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Applicative$ = true;

promesa.core.t_promesa$core8094.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,pf,pv){
var self__ = this;
var ___$1 = this;
return promesa.core.then.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pf,pv], null)),((function (___$1){
return (function (p__8097){
var vec__8098 = p__8097;
var f = cljs.core.nth.call(null,vec__8098,(0),null);
var v = cljs.core.nth.call(null,vec__8098,(1),null);
return f.call(null,v);
});})(___$1))
);
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Semigroup$ = true;

promesa.core.t_promesa$core8094.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then.call(null,cats.core.sequence.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mv,mv_SINGLEQUOTE_], null)),((function (___$1){
return (function (p__8099){
var vec__8100 = p__8099;
var mvv = cljs.core.nth.call(null,vec__8100,(0),null);
var mvv_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8100,(1),null);
var ctx = cats.protocols._get_context.call(null,mvv);
return cats.protocols._mappend.call(null,ctx,mvv,mvv_SINGLEQUOTE_);
});})(___$1))
);
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Monad$ = true;

promesa.core.t_promesa$core8094.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t_promesa$core8094.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t_promesa$core8094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8095","meta8095",-1261836408,null)], null);
});

promesa.core.t_promesa$core8094.cljs$lang$type = true;

promesa.core.t_promesa$core8094.cljs$lang$ctorStr = "promesa.core/t_promesa$core8094";

promesa.core.t_promesa$core8094.cljs$lang$ctorPrWriter = (function (this__5557__auto__,writer__5558__auto__,opt__5559__auto__){
return cljs.core._write.call(null,writer__5558__auto__,"promesa.core/t_promesa$core8094");
});

promesa.core.__GT_t_promesa$core8094 = (function promesa$core$__GT_t_promesa$core8094(meta8095){
return (new promesa.core.t_promesa$core8094(meta8095));
});

}

return (new promesa.core.t_promesa$core8094(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=core.js.map?rel=1446114639062