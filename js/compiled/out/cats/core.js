// Compiled by ClojureScript 1.7.145 {}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var args8469 = [];
var len__6017__auto___8472 = arguments.length;
var i__6018__auto___8473 = (0);
while(true){
if((i__6018__auto___8473 < len__6017__auto___8472)){
args8469.push((arguments[i__6018__auto___8473]));

var G__8474 = (i__6018__auto___8473 + (1));
i__6018__auto___8473 = G__8474;
continue;
} else {
}
break;
}

var G__8471 = args8469.length;
switch (G__8471) {
case 0:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8469.length)].join('')));

}
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mempty.call(null,cats.context.get_current.call(null));
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mempty.call(null,ctx);
});

cats.core.mempty.cljs$lang$maxFixedArity = 1;
cats.core.mappend = (function cats$core$mappend(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8477 = arguments.length;
var i__6018__auto___8478 = (0);
while(true){
if((i__6018__auto___8478 < len__6017__auto___8477)){
args__6024__auto__.push((arguments[i__6018__auto___8478]));

var G__8479 = (i__6018__auto___8478 + (1));
i__6018__auto___8478 = G__8479;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((0) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((0)),(0))):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__6025__auto__);
});

cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic = (function (svs){
if(cljs.core.seq.call(null,svs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"svs","svs",1492882110,null))))].join('')));
}

var ctx = cats.context.get_current.call(null,cljs.core.first.call(null,svs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mappend,ctx),svs);
});

cats.core.mappend.cljs$lang$maxFixedArity = (0);

cats.core.mappend.cljs$lang$applyTo = (function (seq8476){
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8476));
});
/**
 * Given any value `v`, return it wrapped in
 *   the default/effect-free context.
 * 
 *   This is a multi-arity function that with arity `pure/1`
 *   uses the dynamic scope to resolve the current
 *   context. With `pure/2`, you can force a specific context
 *   value.
 * 
 *   Example:
 * 
 *    (with-context either/context
 *      (pure 1))
 *    ;; => #<Right [1]>
 * 
 *    (pure either/context 1)
 *    ;; => #<Right [1]>
 *   
 */
cats.core.pure = (function cats$core$pure(var_args){
var args8480 = [];
var len__6017__auto___8483 = arguments.length;
var i__6018__auto___8484 = (0);
while(true){
if((i__6018__auto___8484 < len__6017__auto___8483)){
args8480.push((arguments[i__6018__auto___8484]));

var G__8485 = (i__6018__auto___8484 + (1));
i__6018__auto___8484 = G__8485;
continue;
} else {
}
break;
}

var G__8482 = args8480.length;
switch (G__8482) {
case 1:
return cats.core.pure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.pure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8480.length)].join('')));

}
});

cats.core.pure.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.pure.call(null,cats.context.get_current.call(null),v);
});

cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._pure.call(null,ctx,v);
});

cats.core.pure.cljs$lang$maxFixedArity = 2;
/**
 * This is a monad version of `pure` and works
 *   identically to it.
 */
cats.core.return$ = (function cats$core$return(var_args){
var args8487 = [];
var len__6017__auto___8490 = arguments.length;
var i__6018__auto___8491 = (0);
while(true){
if((i__6018__auto___8491 < len__6017__auto___8490)){
args8487.push((arguments[i__6018__auto___8491]));

var G__8492 = (i__6018__auto___8491 + (1));
i__6018__auto___8491 = G__8492;
continue;
} else {
}
break;
}

var G__8489 = args8487.length;
switch (G__8489) {
case 1:
return cats.core.return$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.return$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8487.length)].join('')));

}
});

cats.core.return$.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.return$.call(null,cats.context.get_current.call(null),v);
});

cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._mreturn.call(null,ctx,v);
});

cats.core.return$.cljs$lang$maxFixedArity = 2;
/**
 * Given a monadic value `mv` and a function `f`,
 *   apply `f` to the unwrapped value of `mv`.
 * 
 *    (bind (either/right 1) (fn [v]
 *                             (return (inc v))))
 *    ;; => #<Right [2]>
 * 
 *   For convenience, you may prefer to use the `mlet` macro,
 *   which provides a beautiful, `let`-like syntax for
 *   composing operations with the `bind` function.
 */
cats.core.bind = (function cats$core$bind(mv,f){
var ctx = cats.context.get_current.call(null,mv);
return cats.protocols._mbind.call(null,ctx,mv,((function (ctx){
return (function (v){
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8498 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8498;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8499 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8499;
}} else {
return f.call(null,v);
}
}
});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var args8500 = [];
var len__6017__auto___8503 = arguments.length;
var i__6018__auto___8504 = (0);
while(true){
if((i__6018__auto___8504 < len__6017__auto___8503)){
args8500.push((arguments[i__6018__auto___8504]));

var G__8505 = (i__6018__auto___8504 + (1));
i__6018__auto___8504 = G__8505;
continue;
} else {
}
break;
}

var G__8502 = args8500.length;
switch (G__8502) {
case 0:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8500.length)].join('')));

}
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mzero.call(null,cats.context.get_current.call(null));
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mzero.call(null,ctx);
});

cats.core.mzero.cljs$lang$maxFixedArity = 1;
cats.core.mplus = (function cats$core$mplus(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8508 = arguments.length;
var i__6018__auto___8509 = (0);
while(true){
if((i__6018__auto___8509 < len__6017__auto___8508)){
args__6024__auto__.push((arguments[i__6018__auto___8509]));

var G__8510 = (i__6018__auto___8509 + (1));
i__6018__auto___8509 = G__8510;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((0) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((0)),(0))):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__6025__auto__);
});

cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(cljs.core.seq.call(null,mvs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"mvs","mvs",-446484819,null))))].join('')));
}

var ctx = cats.context.get_current.call(null,cljs.core.first.call(null,mvs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mplus,ctx),mvs);
});

cats.core.mplus.cljs$lang$maxFixedArity = (0);

cats.core.mplus.cljs$lang$applyTo = (function (seq8507){
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8507));
});
cats.core.guard = (function cats$core$guard(b){
if(cljs.core.truth_(b)){
return cats.core.return$.call(null,null);
} else {
return cats.core.mzero.call(null);
}
});
/**
 * Remove one level of monadic structure.
 *   This is the same as `(bind mv identity)`.
 */
cats.core.join = (function cats$core$join(mv){
return cats.core.bind.call(null,mv,cljs.core.identity);
});
/**
 * Apply a function `f` to the value wrapped in functor `fv`,
 *   preserving the context type.
 */
cats.core.fmap = (function cats$core$fmap(var_args){
var args8511 = [];
var len__6017__auto___8514 = arguments.length;
var i__6018__auto___8515 = (0);
while(true){
if((i__6018__auto___8515 < len__6017__auto___8514)){
args8511.push((arguments[i__6018__auto___8515]));

var G__8516 = (i__6018__auto___8515 + (1));
i__6018__auto___8515 = G__8516;
continue;
} else {
}
break;
}

var G__8513 = args8511.length;
switch (G__8513) {
case 1:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8511.length)].join('')));

}
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (fv){
return cats.core.fmap.call(null,f,fv);
});
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
return cats.protocols._fmap.call(null,cats.context.get_current.call(null,fv),f,fv);
});

cats.core.fmap.cljs$lang$maxFixedArity = 2;
/**
 * Given a function wrapped in a monadic context `af`,
 *   and a value wrapped in a monadic context `av`,
 *   apply the unwrapped function to the unwrapped value
 *   and return the result, wrapped in the same context as `av`.
 * 
 *   This function is variadic, so it can be used like
 *   a Haskell-style left-associative fapply.
 */
cats.core.fapply = (function cats$core$fapply(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8520 = arguments.length;
var i__6018__auto___8521 = (0);
while(true){
if((i__6018__auto___8521 < len__6017__auto___8520)){
args__6024__auto__.push((arguments[i__6018__auto___8521]));

var G__8522 = (i__6018__auto___8521 + (1));
i__6018__auto___8521 = G__8522;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic = (function (af,avs){
if(cljs.core.seq.call(null,avs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"avs","avs",1569601648,null))))].join('')));
}

var ctx = cats.context.get_current.call(null,af);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._fapply,ctx),af,avs);
});

cats.core.fapply.cljs$lang$maxFixedArity = (1);

cats.core.fapply.cljs$lang$applyTo = (function (seq8518){
var G__8519 = cljs.core.first.call(null,seq8518);
var seq8518__$1 = cljs.core.next.call(null,seq8518);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic(G__8519,seq8518__$1);
});
/**
 * Given an expression and a monadic value,
 *   if the expression is logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.when = (function cats$core$when(var_args){
var args8523 = [];
var len__6017__auto___8526 = arguments.length;
var i__6018__auto___8527 = (0);
while(true){
if((i__6018__auto___8527 < len__6017__auto___8526)){
args8523.push((arguments[i__6018__auto___8527]));

var G__8528 = (i__6018__auto___8527 + (1));
i__6018__auto___8527 = G__8528;
continue;
} else {
}
break;
}

var G__8525 = args8523.length;
switch (G__8525) {
case 2:
return cats.core.when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8523.length)].join('')));

}
});

cats.core.when.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.call(null,cats.context.get_current.call(null,mv),b,mv);
});

cats.core.when.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
if(cljs.core.truth_(b)){
return mv;
} else {
return cats.core.pure.call(null,ctx,null);
}
});

cats.core.when.cljs$lang$maxFixedArity = 3;
/**
 * Given an expression and a monadic value,
 *   if the expression is not logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.unless = (function cats$core$unless(var_args){
var args8530 = [];
var len__6017__auto___8533 = arguments.length;
var i__6018__auto___8534 = (0);
while(true){
if((i__6018__auto___8534 < len__6017__auto___8533)){
args8530.push((arguments[i__6018__auto___8534]));

var G__8535 = (i__6018__auto___8534 + (1));
i__6018__auto___8534 = G__8535;
continue;
} else {
}
break;
}

var G__8532 = args8530.length;
switch (G__8532) {
case 2:
return cats.core.unless.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.unless.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8530.length)].join('')));

}
});

cats.core.unless.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.call(null,cljs.core.not.call(null,b),mv);
});

cats.core.unless.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
return cats.core.when.call(null,ctx,cljs.core.not.call(null,b),mv);
});

cats.core.unless.cljs$lang$maxFixedArity = 3;
/**
 * Lift a value from the inner monad of a monad transformer
 *   into a value of the monad transformer.
 */
cats.core.lift = (function cats$core$lift(var_args){
var args8537 = [];
var len__6017__auto___8540 = arguments.length;
var i__6018__auto___8541 = (0);
while(true){
if((i__6018__auto___8541 < len__6017__auto___8540)){
args8537.push((arguments[i__6018__auto___8541]));

var G__8542 = (i__6018__auto___8541 + (1));
i__6018__auto___8541 = G__8542;
continue;
} else {
}
break;
}

var G__8539 = args8537.length;
switch (G__8539) {
case 1:
return cats.core.lift.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.lift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8537.length)].join('')));

}
});

cats.core.lift.cljs$core$IFn$_invoke$arity$1 = (function (mv){
return cats.protocols._lift.call(null,cats.context._STAR_context_STAR_,mv);
});

cats.core.lift.cljs$core$IFn$_invoke$arity$2 = (function (m,mv){
return cats.protocols._lift.call(null,m,mv);
});

cats.core.lift.cljs$lang$maxFixedArity = 2;
cats.core.deps = (function cats$core$deps(expr,syms){
if(((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_.call(null,syms,expr))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.mapcat.call(null,(function (p1__8544_SHARP_){
return cats$core$deps.call(null,p1__8544_SHARP_,syms);
}),expr);
} else {
return cljs.core.List.EMPTY;

}
}
});
cats.core.rename_sym = (function cats$core$rename_sym(expr,renames){
return cljs.core.get.call(null,renames,expr,expr);
});
cats.core.rename = (function cats$core$rename(expr,renames){
if((expr instanceof cljs.core.Symbol)){
return cats.core.rename_sym.call(null,expr,renames);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.map.call(null,(function (p1__8545_SHARP_){
return cats$core$rename.call(null,p1__8545_SHARP_,renames);
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__8570,p__8571){
var map__8575 = p__8570;
var map__8575__$1 = ((((!((map__8575 == null)))?((((map__8575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8575):map__8575);
var summ = map__8575__$1;
var body__$1 = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.call(null,map__8575__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__8576 = p__8571;
var s = cljs.core.nth.call(null,vec__8576,(0),null);
var ap = cljs.core.nth.call(null,vec__8576,(1),null);
var ap_SINGLEQUOTE_ = cats.core.rename.call(null,ap,renames);
var new_aps = cljs.core.conj.call(null,aps,ap_SINGLEQUOTE_);
if(cljs.core.truth_(seen.call(null,s))){
var s_SINGLEQUOTE_ = cljs.core.gensym.call(null);
var new_syms = cljs.core.conj.call(null,syms,s_SINGLEQUOTE_);
var new_seen = cljs.core.conj.call(null,seen,s_SINGLEQUOTE_);
var new_renames = cljs.core.assoc.call(null,renames,s,s_SINGLEQUOTE_);
var new_body = cats.core.rename.call(null,body__$1,new_renames);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),new_renames,new cljs.core.Keyword(null,"body","body",-2049205669),new_body], null);
} else {
var new_syms = cljs.core.conj.call(null,syms,s);
var new_seen = cljs.core.conj.call(null,seen,s);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),renames,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}
});
var summ = cljs.core.reduce.call(null,renamer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aps","aps",265109554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null),sym__GT_ap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,cljs.core.vector,new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(summ),new cljs.core.Keyword(null,"aps","aps",265109554).cljs$core$IFn$_invoke$arity$1(summ)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(summ)], null);
});
cats.core.dedupe_symbols = (function cats$core$dedupe_symbols(bindings,body){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
return cats.core.dedupe_symbols_STAR_.call(null,sym__GT_ap,body);
});
cats.core.dependency_map = (function cats$core$dependency_map(sym__GT_ap){
var syms = cljs.core.map.call(null,cljs.core.first,sym__GT_ap);
var symset = cljs.core.set.call(null,syms);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__5731__auto__ = ((function (syms,symset){
return (function cats$core$dependency_map_$_iter__8586(s__8587){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__8587__$1 = s__8587;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8587__$1);
if(temp__4425__auto__){
var s__8587__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8587__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__8587__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__8589 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__8588 = (0);
while(true){
if((i__8588 < size__5730__auto__)){
var vec__8592 = cljs.core._nth.call(null,c__5729__auto__,i__8588);
var s = cljs.core.nth.call(null,vec__8592,(0),null);
var ap = cljs.core.nth.call(null,vec__8592,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
cljs.core.chunk_append.call(null,b__8589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__8594 = (i__8588 + (1));
i__8588 = G__8594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8589),cats$core$dependency_map_$_iter__8586.call(null,cljs.core.chunk_rest.call(null,s__8587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8589),null);
}
} else {
var vec__8593 = cljs.core.first.call(null,s__8587__$2);
var s = cljs.core.nth.call(null,vec__8593,(0),null);
var ap = cljs.core.nth.call(null,vec__8593,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__8586.call(null,cljs.core.rest.call(null,s__8587__$2)));
}
} else {
return null;
}
break;
}
});})(syms,symset))
,null,null));
});})(syms,symset))
;
return iter__5731__auto__.call(null,sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__5731__auto__ = (function cats$core$remove_deps_$_iter__8603(s__8604){
return (new cljs.core.LazySeq(null,(function (){
var s__8604__$1 = s__8604;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8604__$1);
if(temp__4425__auto__){
var s__8604__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8604__$2)){
var c__5729__auto__ = cljs.core.chunk_first.call(null,s__8604__$2);
var size__5730__auto__ = cljs.core.count.call(null,c__5729__auto__);
var b__8606 = cljs.core.chunk_buffer.call(null,size__5730__auto__);
if((function (){var i__8605 = (0);
while(true){
if((i__8605 < size__5730__auto__)){
var vec__8609 = cljs.core._nth.call(null,c__5729__auto__,i__8605);
var s = cljs.core.nth.call(null,vec__8609,(0),null);
var depset = cljs.core.nth.call(null,vec__8609,(1),null);
cljs.core.chunk_append.call(null,b__8606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null));

var G__8611 = (i__8605 + (1));
i__8605 = G__8611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8606),cats$core$remove_deps_$_iter__8603.call(null,cljs.core.chunk_rest.call(null,s__8604__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8606),null);
}
} else {
var vec__8610 = cljs.core.first.call(null,s__8604__$2);
var s = cljs.core.nth.call(null,vec__8610,(0),null);
var depset = cljs.core.nth.call(null,vec__8610,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null),cats$core$remove_deps_$_iter__8603.call(null,cljs.core.rest.call(null,s__8604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5731__auto__.call(null,deps);
})();
return cljs.core.into.call(null,cljs.core.empty.call(null,deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_.call(null,deps)){
return cljs.core.conj.call(null,batches,current);
} else {
var dep = cljs.core.first.call(null,deps);
var vec__8613 = dep;
var s = cljs.core.nth.call(null,vec__8613,(0),null);
var dependencies = cljs.core.nth.call(null,vec__8613,(1),null);
var dependant_QMARK_ = cljs.core.some.call(null,dependencies,seen);
if((dependant_QMARK_ == null)){
var G__8614 = cljs.core.subvec.call(null,deps,(1));
var G__8615 = cljs.core.conj.call(null,seen,s);
var G__8616 = batches;
var G__8617 = cljs.core.conj.call(null,current,s);
deps = G__8614;
seen = G__8615;
batches = G__8616;
current = G__8617;
continue;
} else {
var G__8618 = cats.core.remove_deps.call(null,cljs.core.subvec.call(null,deps,(1)),cljs.core.set.call(null,current));
var G__8619 = cljs.core.conj.call(null,seen,s);
var G__8620 = cljs.core.conj.call(null,batches,current);
var G__8621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__8618;
seen = G__8619;
batches = G__8620;
current = G__8621;
continue;
}
}
break;
}
});
cats.core.topo_sort = (function cats$core$topo_sort(deps){
var syms = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,deps));
return cats.core.topo_sort_STAR_.call(null,deps,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
cats.core.bindings__GT_batches = (function cats$core$bindings__GT_batches(bindings){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
var sorted_deps = cats.core.topo_sort.call(null,cats.core.dependency_map.call(null,sym__GT_ap));
return sorted_deps;
});
cats.core.alet_STAR_ = (function cats$core$alet_STAR_(batches,env,body){
var fb = cljs.core.first.call(null,batches);
var rb = cljs.core.rest.call(null,batches);
var fs = cljs.core.first.call(null,fb);
var fa = cljs.core.get.call(null,env,fs);
var code = cljs.core.reduce.call(null,((function (fb,rb,fs,fa){
return (function (acc,syms){
var fs__$1 = cljs.core.first.call(null,syms);
var fa__$1 = cljs.core.get.call(null,env,fs__$1);
var rs = cljs.core.rest.call(null,syms);
var faps = cljs.core.map.call(null,((function (fs__$1,fa__$1,rs,fb,rb,fs,fa){
return (function (p1__8622_SHARP_){
return cljs.core.get.call(null,env,p1__8622_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,syms),(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,fs__$1)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,acc))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,fa__$1))));
} else {
var cf = cljs.core.reduce.call(null,((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,sym)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,f))));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse.call(null,syms));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cf),cljs.core._conj.call(null,cljs.core.List.EMPTY,fa__$1))))),faps)));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body))),cljs.core.reverse.call(null,batches));
var join_count = (cljs.core.count.call(null,batches) - (1));
return cljs.core.reduce.call(null,((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,acc))));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.call(null,join_count));
});
cats.core.arglists = (function cats$core$arglists(var$){
return cljs.core.get.call(null,cljs.core.meta.call(null,var$),new cljs.core.Keyword(null,"arglists","arglists",1661989754));
});
cats.core.single_arity_QMARK_ = (function cats$core$single_arity_QMARK_(var$){
var args = cats.core.arglists.call(null,var$);
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.first.call(null,args))));
});
cats.core.arity = (function cats$core$arity(var$){
if(cljs.core.truth_(cats.core.single_arity_QMARK_.call(null,var$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"single-arity?","single-arity?",-953520373,null),new cljs.core.Symbol(null,"var","var",870848730,null))))].join('')));
}

return cljs.core.count.call(null,cljs.core.first.call(null,cats.core.arglists.call(null,var$)));
});
/**
 * Given a non-empty collection of monadic values, collect
 *   their values in a vector returned in the monadic context.
 * 
 *    (sequence [(maybe/just 2) (maybe/just 3)])
 *    ;; => <Just [[2, 3]]>
 * 
 *    (sequence [(maybe/nothing) (maybe/just 3)])
 *    ;; => <Nothing>
 *   
 */
cats.core.sequence = (function cats$core$sequence(mvs){
if(cljs.core.truth_(cljs.core.not_empty.call(null,mvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"mvs","mvs",-446484819,null))))].join('')));
}

var ctx = cats.context.get_current.call(null,cljs.core.first.call(null,mvs));
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8630 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_8630,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_8630,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_8630,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_8630,ctx))
);
});})(_STAR_context_STAR_8630,ctx))
);
});})(_STAR_context_STAR_8630,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8630;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8631 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR_8631,clevel__6564__auto__,nlevel__6565__auto__,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR_8631,clevel__6564__auto__,nlevel__6565__auto__,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR_8631,clevel__6564__auto__,nlevel__6565__auto__,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR_8631,clevel__6564__auto__,nlevel__6565__auto__,ctx))
);
});})(_STAR_context_STAR_8631,clevel__6564__auto__,nlevel__6565__auto__,ctx))
);
});})(_STAR_context_STAR_8631,clevel__6564__auto__,nlevel__6565__auto__,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8631;
}} else {
return cljs.core.reduce.call(null,((function (clevel__6564__auto__,nlevel__6565__auto__,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (clevel__6564__auto__,nlevel__6565__auto__,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (clevel__6564__auto__,nlevel__6565__auto__,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(clevel__6564__auto__,nlevel__6565__auto__,ctx))
);
});})(clevel__6564__auto__,nlevel__6565__auto__,ctx))
);
});})(clevel__6564__auto__,nlevel__6565__auto__,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}
}
});
/**
 * Given a function `mf` that takes a value and puts it into a
 *   monadic context, and a collection, map `mf` over the collection,
 *   calling `sequence` on the results.
 * 
 *    (require '[cats.monad.maybe :as maybe])
 *    (require '[cats.core :as m])
 * 
 *    (m/mapseq maybe/just [2 3])
 *    ;=> <Just [[2 3]]>
 * 
 *    (m/mapseq (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing)))
 *              [1 2])
 *    ;=> <Nothing>
 *   
 */
cats.core.mapseq = (function cats$core$mapseq(mf,coll){
return cats.core.sequence.call(null,cljs.core.map.call(null,mf,coll));
});
/**
 * Same as `mapseq` but with the arguments flipped.
 * 
 *   Let's see a little example:
 * 
 *    (m/forseq [2 3] maybe/just)
 *    ;; => <Just [[2 3]]>
 * 
 *   Yet an other example that fails:
 * 
 *    (m/forseq [1 2]
 *              (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing))))
 *    ;; => <Nothing>
 *   
 */
cats.core.forseq = (function cats$core$forseq(vs,mf){
return cats.core.mapseq.call(null,mf,vs);
});
/**
 * Apply a predicate to a value in a `MonadZero` instance,
 *   returning the identity element when the predicate does not hold.
 * 
 *   Otherwise, return the instance unchanged.
 * 
 *    (require '[cats.monad.maybe :as maybe])
 *    (require '[cats.core :as m])
 * 
 *    (m/filter (partial < 2) (maybe/just 3))
 *    ;=> <Just [3]>
 * 
 *    (m/filter (partial < 4) (maybe/just 3))
 *    ;=> <Nothing>
 *   
 */
cats.core.filter = (function cats$core$filter(p,mv){
return cats.core.bind.call(null,mv,(function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),(function (G__8633){
return cats.core.return$.call(null,v);
}));
}));
});
/**
 * A Haskell-style `fmap` alias.
 */
cats.core._LT_$_GT_ = cats.core.fmap;
/**
 * A Haskell-style `fapply` alias.
 */
cats.core._LT__STAR__GT_ = cats.core.fapply;
/**
 * Perform a Haskell-style left-associative bind.
 * 
 *   Let's see it in action:
 * 
 *    (>>= (just 1) (comp just inc) (comp just inc))
 *    ;; => #<Just [3]>
 *   
 */
cats.core._GT__GT__EQ_ = (function cats$core$_GT__GT__EQ_(var_args){
var args8634 = [];
var len__6017__auto___8640 = arguments.length;
var i__6018__auto___8641 = (0);
while(true){
if((i__6018__auto___8641 < len__6017__auto___8640)){
args8634.push((arguments[i__6018__auto___8641]));

var G__8642 = (i__6018__auto___8641 + (1));
i__6018__auto___8641 = G__8642;
continue;
} else {
}
break;
}

var G__8639 = args8634.length;
switch (G__8639) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args8634.slice((2)),(0)));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6036__auto__);

}
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind.call(null,mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.call(null,cats.core.bind,mv,cljs.core.cons.call(null,f,fs));
});

cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq8635){
var G__8636 = cljs.core.first.call(null,seq8635);
var seq8635__$1 = cljs.core.next.call(null,seq8635);
var G__8637 = cljs.core.first.call(null,seq8635__$1);
var seq8635__$2 = cljs.core.next.call(null,seq8635__$1);
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__8636,G__8637,seq8635__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var args8644 = [];
var len__6017__auto___8650 = arguments.length;
var i__6018__auto___8651 = (0);
while(true){
if((i__6018__auto___8651 < len__6017__auto___8650)){
args8644.push((arguments[i__6018__auto___8651]));

var G__8652 = (i__6018__auto___8651 + (1));
i__6018__auto___8651 = G__8652;
continue;
} else {
}
break;
}

var G__8649 = args8644.length;
switch (G__8649) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__6036__auto__ = (new cljs.core.IndexedSeq(args8644.slice((2)),(0)));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6036__auto__);

}
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (mv,mv_SINGLEQUOTE_){
return cats.core.bind.call(null,mv,(function (_){
return mv_SINGLEQUOTE_;
}));
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.call(null,cats.core._GT__GT_,mv,cljs.core.cons.call(null,mv_SINGLEQUOTE_,mvs));
});

cats.core._GT__GT_.cljs$lang$applyTo = (function (seq8645){
var G__8646 = cljs.core.first.call(null,seq8645);
var seq8645__$1 = cljs.core.next.call(null,seq8645);
var G__8647 = cljs.core.first.call(null,seq8645__$1);
var seq8645__$2 = cljs.core.next.call(null,seq8645__$1);
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__8646,G__8647,seq8645__$2);
});

cats.core._GT__GT_.cljs$lang$maxFixedArity = (2);
/**
 * Same as the two argument version of `>>=` but with the
 *   arguments flipped.
 */
cats.core._EQ__LT__LT_ = (function cats$core$_EQ__LT__LT_(f,mv){
return cats.core._GT__GT__EQ_.call(null,mv,f);
});
/**
 * Left-to-right composition of monads.
 */
cats.core._GT__EQ__GT_ = (function cats$core$_GT__EQ__GT_(mf,mg,x){
if(!((function (){var G__8657 = cats.context.get_current.call(null,mf);
if(!((G__8657 == null))){
if((false) || (G__8657.cats$protocols$Context$)){
return true;
} else {
if((!G__8657.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__8657);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__8657);
}
})())){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8658 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_8658){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_8658){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_8658))
);
});})(_STAR_context_STAR_8658))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8658;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,cats.context.get_current.call(null,mf));
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8659 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_8659,clevel__6564__auto__,nlevel__6565__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_8659,clevel__6564__auto__,nlevel__6565__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_8659,clevel__6564__auto__,nlevel__6565__auto__))
);
});})(_STAR_context_STAR_8659,clevel__6564__auto__,nlevel__6565__auto__))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8659;
}} else {
return cats.core.bind.call(null,mf.call(null,x),((function (clevel__6564__auto__,nlevel__6565__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (clevel__6564__auto__,nlevel__6565__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(clevel__6564__auto__,nlevel__6565__auto__))
);
});})(clevel__6564__auto__,nlevel__6565__auto__))
);
}
}
});
/**
 * Right-to-left composition of monads.
 *   Same as `>=>` with its first two arguments flipped.
 */
cats.core._LT__EQ__LT_ = (function cats$core$_LT__EQ__LT_(mg,mf,x){
if(!((function (){var G__8663 = cats.context.get_current.call(null,mf);
if(!((G__8663 == null))){
if((false) || (G__8663.cats$protocols$Context$)){
return true;
} else {
if((!G__8663.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__8663);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,G__8663);
}
})())){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8664 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_8664){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_8664){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_8664))
);
});})(_STAR_context_STAR_8664))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8664;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,cats.context.get_current.call(null,mf));
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8665 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = cats.context.get_current.call(null,mf);

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR_8665,clevel__6564__auto__,nlevel__6565__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR_8665,clevel__6564__auto__,nlevel__6565__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR_8665,clevel__6564__auto__,nlevel__6565__auto__))
);
});})(_STAR_context_STAR_8665,clevel__6564__auto__,nlevel__6565__auto__))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8665;
}} else {
return cats.core.bind.call(null,mf.call(null,x),((function (clevel__6564__auto__,nlevel__6565__auto__){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (clevel__6564__auto__,nlevel__6565__auto__){
return (function (b){
return cats.core.return$.call(null,b);
});})(clevel__6564__auto__,nlevel__6565__auto__))
);
});})(clevel__6564__auto__,nlevel__6565__auto__))
);
}
}
});
/**
 * Generic function to unwrap/extract
 *   the inner value of a container.
 */
cats.core.extract = (function cats$core$extract(v){
return cats.protocols._extract.call(null,v);
});
cats.core._LT__GT_ = cats.core.mappend;
/**
 * Perform a right-associative fold on the data structure.
 */
cats.core.foldr = (function cats$core$foldr(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8670 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8670;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8671 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8671;
}} else {
return cats.protocols._foldr.call(null,ctx,f,z,xs);
}
}
});
/**
 * Perform a left-associative fold on the data structure.
 */
cats.core.foldl = (function cats$core$foldl(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8676 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8676;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8677 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8677;
}} else {
return cats.protocols._foldl.call(null,ctx,f,z,xs);
}
}
});
/**
 * Given an optional monadic context, a function that takes two non-monadic
 *   arguments and returns a value inside the given monadic context, an initial
 *   value, and a collection of values, perform a left-associative fold.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.core :as m]
 *             '[cats.monad.maybe :as maybe])
 * 
 *    (defn m-div [x y]
 *      (if (zero? y)
 *        (maybe/nothing)
 *        (maybe/just (/ x y))))
 * 
 *    (m/foldm m-div 1 [1 2 3])
 *    (m/foldm maybe/context m-div 1 [1 2 3])
 *    ;; => #<Just 1/6>
 * 
 *    (m/foldm maybe/context m-div 1 [1 0 3])
 *    ;; => #<Nothing>
 * 
 *    (foldm m-div 1 [])
 *    ;; => Exception
 * 
 *    (m/foldm maybe/context m-div 1 [])
 *    (ctx/with-context maybe/context
 *      (foldm m-div 1 []))
 *    ;; => #<Just 1>
 *   
 */
cats.core.foldm = (function cats$core$foldm(var_args){
var args8678 = [];
var len__6017__auto___8682 = arguments.length;
var i__6018__auto___8683 = (0);
while(true){
if((i__6018__auto___8683 < len__6017__auto___8682)){
args8678.push((arguments[i__6018__auto___8683]));

var G__8684 = (i__6018__auto___8683 + (1));
i__6018__auto___8683 = G__8684;
continue;
} else {
}
break;
}

var G__8680 = args8678.length;
switch (G__8680) {
case 3:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8678.length)].join('')));

}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$3 = (function (f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,cats.context.get_current.call(null),z);
} else {
var vec__8681 = xs;
var h = cljs.core.nth.call(null,vec__8681,(0),null);
var t = cljs.core.nthnext.call(null,vec__8681,(1));
return cats.core.bind.call(null,f.call(null,z,h),((function (vec__8681,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_.call(null,t)){
return cats.core.return$.call(null,z_SINGLEQUOTE_);
} else {
return cats.core.foldm.call(null,f,z_SINGLEQUOTE_,t);
}
});})(vec__8681,h,t))
);
}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$4 = (function (ctx,f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,ctx,z);
} else {
return cats.core.foldm.call(null,f,z,xs);
}
});

cats.core.foldm.cljs$lang$maxFixedArity = 4;
/**
 * Map each element of a structure to an action, evaluate these
 *   actions from left to right, and collect the results.
 * 
 *    (defn inc-if-even
 *      [n]
 *      (if (even? n)
 *        (maybe/just (inc n))
 *        (maybe/nothing)))
 * 
 *    (ctx/with-context maybe/context
 *      (m/traverse inc-if-even [2 4]))
 *    ;; => #<Just [3 4]>
 *   
 */
cats.core.traverse = (function cats$core$traverse(var_args){
var args8686 = [];
var len__6017__auto___8692 = arguments.length;
var i__6018__auto___8693 = (0);
while(true){
if((i__6018__auto___8693 < len__6017__auto___8692)){
args8686.push((arguments[i__6018__auto___8693]));

var G__8694 = (i__6018__auto___8693 + (1));
i__6018__auto___8693 = G__8694;
continue;
} else {
}
break;
}

var G__8688 = args8686.length;
switch (G__8688) {
case 2:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8686.length)].join('')));

}
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$2 = (function (f,tv){
return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,f,tv){
if(!(((!((ctx == null)))?(((false) || (ctx.cats$protocols$Context$))?true:(((!ctx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx):false)):cljs.core.native_satisfies_QMARK_.call(null,cats.protocols.Context,ctx)))){
cats.context.throw_ilegal_argument.call(null,"The provided context does not implements Context.");
} else {
}

if((cats.context._STAR_context_STAR_ == null)){
var _STAR_context_STAR_8690 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8690;
}} else {
var clevel__6564__auto__ = cats.protocols._get_level.call(null,cats.context._STAR_context_STAR_);
var nlevel__6565__auto__ = cats.protocols._get_level.call(null,ctx);
if((nlevel__6565__auto__ >= clevel__6564__auto__)){
var _STAR_context_STAR_8691 = cats.context._STAR_context_STAR_;
cats.context._STAR_context_STAR_ = ctx;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR_8691;
}} else {
return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}
}
});

cats.core.traverse.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map?rel=1445449317344