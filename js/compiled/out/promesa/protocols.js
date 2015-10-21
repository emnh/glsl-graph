// Compiled by ClojureScript 1.7.145 {}
goog.provide('promesa.protocols');
goog.require('cljs.core');

/**
 * A basic promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

/**
 * Then chain operation over promise.
 */
promesa.protocols._then = (function promesa$protocols$_then(_,cb){
if((!((_ == null))) && (!((_.promesa$protocols$IPromise$_then$arity$2 == null)))){
return _.promesa$protocols$IPromise$_then$arity$2(_,cb);
} else {
var x__5614__auto__ = (((_ == null))?null:_);
var m__5615__auto__ = (promesa.protocols._then[goog.typeOf(x__5614__auto__)]);
if(!((m__5615__auto__ == null))){
return m__5615__auto__.call(null,_,cb);
} else {
var m__5615__auto____$1 = (promesa.protocols._then["_"]);
if(!((m__5615__auto____$1 == null))){
return m__5615__auto____$1.call(null,_,cb);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-then",_);
}
}
}
});

/**
 * Catch chain operation over promise.
 */
promesa.protocols._catch = (function promesa$protocols$_catch(var_args){
var args8098 = [];
var len__6017__auto___8101 = arguments.length;
var i__6018__auto___8102 = (0);
while(true){
if((i__6018__auto___8102 < len__6017__auto___8101)){
args8098.push((arguments[i__6018__auto___8102]));

var G__8103 = (i__6018__auto___8102 + (1));
i__6018__auto___8102 = G__8103;
continue;
} else {
}
break;
}

var G__8100 = args8098.length;
switch (G__8100) {
case 2:
return promesa.protocols._catch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._catch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8098.length)].join('')));

}
});

promesa.protocols._catch.cljs$core$IFn$_invoke$arity$2 = (function (_,cb){
if((!((_ == null))) && (!((_.promesa$protocols$IPromise$_catch$arity$2 == null)))){
return _.promesa$protocols$IPromise$_catch$arity$2(_,cb);
} else {
var x__5614__auto__ = (((_ == null))?null:_);
var m__5615__auto__ = (promesa.protocols._catch[goog.typeOf(x__5614__auto__)]);
if(!((m__5615__auto__ == null))){
return m__5615__auto__.call(null,_,cb);
} else {
var m__5615__auto____$1 = (promesa.protocols._catch["_"]);
if(!((m__5615__auto____$1 == null))){
return m__5615__auto____$1.call(null,_,cb);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-catch",_);
}
}
}
});

promesa.protocols._catch.cljs$core$IFn$_invoke$arity$3 = (function (_,type,cb){
if((!((_ == null))) && (!((_.promesa$protocols$IPromise$_catch$arity$3 == null)))){
return _.promesa$protocols$IPromise$_catch$arity$3(_,type,cb);
} else {
var x__5614__auto__ = (((_ == null))?null:_);
var m__5615__auto__ = (promesa.protocols._catch[goog.typeOf(x__5614__auto__)]);
if(!((m__5615__auto__ == null))){
return m__5615__auto__.call(null,_,type,cb);
} else {
var m__5615__auto____$1 = (promesa.protocols._catch["_"]);
if(!((m__5615__auto____$1 == null))){
return m__5615__auto____$1.call(null,_,type,cb);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-catch",_);
}
}
}
});

promesa.protocols._catch.cljs$lang$maxFixedArity = 3;


/**
 * Additional state related abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))){
return _.promesa$protocols$IState$_resolved_QMARK_$arity$1(_);
} else {
var x__5614__auto__ = (((_ == null))?null:_);
var m__5615__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__5614__auto__)]);
if(!((m__5615__auto__ == null))){
return m__5615__auto__.call(null,_);
} else {
var m__5615__auto____$1 = (promesa.protocols._resolved_QMARK_["_"]);
if(!((m__5615__auto____$1 == null))){
return m__5615__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-resolved?",_);
}
}
}
});

/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))){
return _.promesa$protocols$IState$_rejected_QMARK_$arity$1(_);
} else {
var x__5614__auto__ = (((_ == null))?null:_);
var m__5615__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__5614__auto__)]);
if(!((m__5615__auto__ == null))){
return m__5615__auto__.call(null,_);
} else {
var m__5615__auto____$1 = (promesa.protocols._rejected_QMARK_["_"]);
if(!((m__5615__auto____$1 == null))){
return m__5615__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-rejected?",_);
}
}
}
});

/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._done_QMARK_ = (function promesa$protocols$_done_QMARK_(_){
if((!((_ == null))) && (!((_.promesa$protocols$IState$_done_QMARK_$arity$1 == null)))){
return _.promesa$protocols$IState$_done_QMARK_$arity$1(_);
} else {
var x__5614__auto__ = (((_ == null))?null:_);
var m__5615__auto__ = (promesa.protocols._done_QMARK_[goog.typeOf(x__5614__auto__)]);
if(!((m__5615__auto__ == null))){
return m__5615__auto__.call(null,_);
} else {
var m__5615__auto____$1 = (promesa.protocols._done_QMARK_["_"]);
if(!((m__5615__auto____$1 == null))){
return m__5615__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-done?",_);
}
}
}
});


//# sourceMappingURL=protocols.js.map?rel=1445449314762