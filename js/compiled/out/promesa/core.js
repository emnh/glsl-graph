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
var type__$1 = (function (){var G__8038 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8038) {
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
var len__6017__auto___8046 = arguments.length;
var i__6018__auto___8047 = (0);
while(true){
if((i__6018__auto___8047 < len__6017__auto___8046)){
args__6024__auto__.push((arguments[i__6018__auto___8047]));

var G__8048 = (i__6018__auto___8047 + (1));
i__6018__auto___8047 = G__8048;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.call(null,(function (p1__8042_SHARP_,p2__8043_SHARP_){
return promesa.core.then.call(null,p1__8042_SHARP_,p2__8043_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

promesa.core.chain.cljs$lang$applyTo = (function (seq8044){
var G__8045 = cljs.core.first.call(null,seq8044);
var seq8044__$1 = cljs.core.next.call(null,seq8044);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(G__8045,seq8044__$1);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var args8049 = [];
var len__6017__auto___8052 = arguments.length;
var i__6018__auto___8053 = (0);
while(true){
if((i__6018__auto___8053 < len__6017__auto___8052)){
args8049.push((arguments[i__6018__auto___8053]));

var G__8054 = (i__6018__auto___8053 + (1));
i__6018__auto___8053 = G__8054;
continue;
} else {
}
break;
}

var G__8051 = args8049.length;
switch (G__8051) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8049.length)].join('')));

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
return promesa.core.then.call(null,Promise.some(cljs.core.clj__GT_js.call(null,promises),n),(function (p1__8056_SHARP_){
return cljs.core.js__GT_clj.call(null,p1__8056_SHARP_);
}));
});
/**
 * Given a nodejs like function that accepts a callback
 *   as the last argument and return an other function
 *   that returns a promise.
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__8057__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
return cljs.core.apply.call(null,callable,args__$1);
}));
};
var G__8057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8058__i = 0, G__8058__a = new Array(arguments.length -  0);
while (G__8058__i < G__8058__a.length) {G__8058__a[G__8058__i] = arguments[G__8058__i + 0]; ++G__8058__i;}
  args = new cljs.core.IndexedSeq(G__8058__a,0);
} 
return G__8057__delegate.call(this,args);};
G__8057.cljs$lang$maxFixedArity = 0;
G__8057.cljs$lang$applyTo = (function (arglist__8059){
var args = cljs.core.seq(arglist__8059);
return G__8057__delegate(args);
});
G__8057.cljs$core$IFn$_invoke$arity$variadic = G__8057__delegate;
return G__8057;
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
var args8060 = [];
var len__6017__auto___8063 = arguments.length;
var i__6018__auto___8064 = (0);
while(true){
if((i__6018__auto___8064 < len__6017__auto___8063)){
args8060.push((arguments[i__6018__auto___8064]));

var G__8065 = (i__6018__auto___8064 + (1));
i__6018__auto___8064 = G__8065;
continue;
} else {
}
break;
}

var G__8062 = args8060.length;
switch (G__8062) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8060.length)].join('')));

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
var args8067 = [];
var len__6017__auto___8070 = arguments.length;
var i__6018__auto___8071 = (0);
while(true){
if((i__6018__auto___8071 < len__6017__auto___8070)){
args8067.push((arguments[i__6018__auto___8071]));

var G__8072 = (i__6018__auto___8071 + (1));
i__6018__auto___8071 = G__8072;
continue;
} else {
}
break;
}

var G__8069 = args8067.length;
switch (G__8069) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8067.length)].join('')));

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
if(typeof promesa.core.t_promesa$core8074 !== 'undefined'){
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
promesa.core.t_promesa$core8074 = (function (meta8075){
this.meta8075 = meta8075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
promesa.core.t_promesa$core8074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8076,meta8075__$1){
var self__ = this;
var _8076__$1 = this;
return (new promesa.core.t_promesa$core8074(meta8075__$1));
});

promesa.core.t_promesa$core8074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8076){
var self__ = this;
var _8076__$1 = this;
return self__.meta8075;
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Context$ = true;

promesa.core.t_promesa$core8074.prototype.cats$protocols$Context$_get_level$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cats.context._PLUS_level_default_PLUS_;
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Functor$ = true;

promesa.core.t_promesa$core8074.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Applicative$ = true;

promesa.core.t_promesa$core8074.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,pf,pv){
var self__ = this;
var ___$1 = this;
return promesa.core.then.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pf,pv], null)),((function (___$1){
return (function (p__8077){
var vec__8078 = p__8077;
var f = cljs.core.nth.call(null,vec__8078,(0),null);
var v = cljs.core.nth.call(null,vec__8078,(1),null);
return f.call(null,v);
});})(___$1))
);
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Semigroup$ = true;

promesa.core.t_promesa$core8074.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return promesa.protocols._then.call(null,cats.core.sequence.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mv,mv_SINGLEQUOTE_], null)),((function (___$1){
return (function (p__8079){
var vec__8080 = p__8079;
var mvv = cljs.core.nth.call(null,vec__8080,(0),null);
var mvv_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__8080,(1),null);
var ctx = cats.protocols._get_context.call(null,mvv);
return cats.protocols._mappend.call(null,ctx,mvv,mvv_SINGLEQUOTE_);
});})(___$1))
);
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Monad$ = true;

promesa.core.t_promesa$core8074.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.core.promise.call(null,v);
});

promesa.core.t_promesa$core8074.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
return promesa.core.then.call(null,mv,f);
});

promesa.core.t_promesa$core8074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta8075","meta8075",454277893,null)], null);
});

promesa.core.t_promesa$core8074.cljs$lang$type = true;

promesa.core.t_promesa$core8074.cljs$lang$ctorStr = "promesa.core/t_promesa$core8074";

promesa.core.t_promesa$core8074.cljs$lang$ctorPrWriter = (function (this__5557__auto__,writer__5558__auto__,opt__5559__auto__){
return cljs.core._write.call(null,writer__5558__auto__,"promesa.core/t_promesa$core8074");
});

promesa.core.__GT_t_promesa$core8074 = (function promesa$core$__GT_t_promesa$core8074(meta8075){
return (new promesa.core.t_promesa$core8074(meta8075));
});

}

return (new promesa.core.t_promesa$core8074(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=core.js.map?rel=1445449314343