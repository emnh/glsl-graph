// Compiled by ClojureScript 1.7.145 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4423__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4423__auto__)){
var cm = temp__4423__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args8718 = [];
var len__6017__auto___8721 = arguments.length;
var i__6018__auto___8722 = (0);
while(true){
if((i__6018__auto___8722 < len__6017__auto___8721)){
args8718.push((arguments[i__6018__auto___8722]));

var G__8723 = (i__6018__auto___8722 + (1));
i__6018__auto___8722 = G__8723;
continue;
} else {
}
break;
}

var G__8720 = args8718.length;
switch (G__8720) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8718.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;
jQuery.prototype.cljs$core$ISeqable$ = true;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = true;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = true;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = true;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = true;

jQuery.prototype.cljs$core$ILookup$ = true;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__4959__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__4959__auto__)){
return or__4959__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = true;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = true;

jQuery.prototype.call = (function() {
var G__8726 = null;
var G__8726__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__8726__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__8726 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8726__2.call(this,self__,k);
case 3:
return G__8726__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8726.cljs$core$IFn$_invoke$arity$2 = G__8726__2;
G__8726.cljs$core$IFn$_invoke$arity$3 = G__8726__3;
return G__8726;
})()
;

jQuery.prototype.apply = (function (self__,args8725){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8725)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8732 = arguments.length;
var i__6018__auto___8733 = (0);
while(true){
if((i__6018__auto___8733 < len__6017__auto___8732)){
args__6024__auto__.push((arguments[i__6018__auto___8733]));

var G__8734 = (i__6018__auto___8733 + (1));
i__6018__auto___8733 = G__8734;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__8730){
var vec__8731 = p__8730;
var speed = cljs.core.nth.call(null,vec__8731,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8731,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq8727){
var G__8728 = cljs.core.first.call(null,seq8727);
var seq8727__$1 = cljs.core.next.call(null,seq8727);
var G__8729 = cljs.core.first.call(null,seq8727__$1);
var seq8727__$2 = cljs.core.next.call(null,seq8727__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__8728,G__8729,seq8727__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args8735 = [];
var len__6017__auto___8738 = arguments.length;
var i__6018__auto___8739 = (0);
while(true){
if((i__6018__auto___8739 < len__6017__auto___8738)){
args8735.push((arguments[i__6018__auto___8739]));

var G__8740 = (i__6018__auto___8739 + (1));
i__6018__auto___8739 = G__8740;
continue;
} else {
}
break;
}

var G__8737 = args8735.length;
switch (G__8737) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8735.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;
jayq.core.css = (function jayq$core$css(var_args){
var args8742 = [];
var len__6017__auto___8745 = arguments.length;
var i__6018__auto___8746 = (0);
while(true){
if((i__6018__auto___8746 < len__6017__auto___8745)){
args8742.push((arguments[i__6018__auto___8746]));

var G__8747 = (i__6018__auto___8746 + (1));
i__6018__auto___8746 = G__8747;
continue;
} else {
}
break;
}

var G__8744 = args8742.length;
switch (G__8744) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8742.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;
jayq.core.attr = (function jayq$core$attr(var_args){
var args8749 = [];
var len__6017__auto___8752 = arguments.length;
var i__6018__auto___8753 = (0);
while(true){
if((i__6018__auto___8753 < len__6017__auto___8752)){
args8749.push((arguments[i__6018__auto___8753]));

var G__8754 = (i__6018__auto___8753 + (1));
i__6018__auto___8753 = G__8754;
continue;
} else {
}
break;
}

var G__8751 = args8749.length;
switch (G__8751) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8749.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;
jayq.core.prop = (function jayq$core$prop(var_args){
var args8756 = [];
var len__6017__auto___8759 = arguments.length;
var i__6018__auto___8760 = (0);
while(true){
if((i__6018__auto___8760 < len__6017__auto___8759)){
args8756.push((arguments[i__6018__auto___8760]));

var G__8761 = (i__6018__auto___8760 + (1));
i__6018__auto___8760 = G__8761;
continue;
} else {
}
break;
}

var G__8758 = args8756.length;
switch (G__8758) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8756.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;
jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args8763 = [];
var len__6017__auto___8766 = arguments.length;
var i__6018__auto___8767 = (0);
while(true){
if((i__6018__auto___8767 < len__6017__auto___8766)){
args8763.push((arguments[i__6018__auto___8767]));

var G__8768 = (i__6018__auto___8767 + (1));
i__6018__auto___8767 = G__8768;
continue;
} else {
}
break;
}

var G__8765 = args8763.length;
switch (G__8765) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8763.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;
jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args8770 = [];
var len__6017__auto___8773 = arguments.length;
var i__6018__auto___8774 = (0);
while(true){
if((i__6018__auto___8774 < len__6017__auto___8773)){
args8770.push((arguments[i__6018__auto___8774]));

var G__8775 = (i__6018__auto___8774 + (1));
i__6018__auto___8774 = G__8775;
continue;
} else {
}
break;
}

var G__8772 = args8770.length;
switch (G__8772) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8770.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;
jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args8777 = [];
var len__6017__auto___8780 = arguments.length;
var i__6018__auto___8781 = (0);
while(true){
if((i__6018__auto___8781 < len__6017__auto___8780)){
args8777.push((arguments[i__6018__auto___8781]));

var G__8782 = (i__6018__auto___8781 + (1));
i__6018__auto___8781 = G__8782;
continue;
} else {
}
break;
}

var G__8779 = args8777.length;
switch (G__8779) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8777.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;
jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8788 = arguments.length;
var i__6018__auto___8789 = (0);
while(true){
if((i__6018__auto___8789 < len__6017__auto___8788)){
args__6024__auto__.push((arguments[i__6018__auto___8789]));

var G__8790 = (i__6018__auto___8789 + (1));
i__6018__auto___8789 = G__8790;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8786){
var vec__8787 = p__8786;
var speed = cljs.core.nth.call(null,vec__8787,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8787,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq8784){
var G__8785 = cljs.core.first.call(null,seq8784);
var seq8784__$1 = cljs.core.next.call(null,seq8784);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__8785,seq8784__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8795 = arguments.length;
var i__6018__auto___8796 = (0);
while(true){
if((i__6018__auto___8796 < len__6017__auto___8795)){
args__6024__auto__.push((arguments[i__6018__auto___8796]));

var G__8797 = (i__6018__auto___8796 + (1));
i__6018__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8793){
var vec__8794 = p__8793;
var speed = cljs.core.nth.call(null,vec__8794,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8794,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq8791){
var G__8792 = cljs.core.first.call(null,seq8791);
var seq8791__$1 = cljs.core.next.call(null,seq8791);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__8792,seq8791__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8802 = arguments.length;
var i__6018__auto___8803 = (0);
while(true){
if((i__6018__auto___8803 < len__6017__auto___8802)){
args__6024__auto__.push((arguments[i__6018__auto___8803]));

var G__8804 = (i__6018__auto___8803 + (1));
i__6018__auto___8803 = G__8804;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8800){
var vec__8801 = p__8800;
var speed = cljs.core.nth.call(null,vec__8801,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8801,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq8798){
var G__8799 = cljs.core.first.call(null,seq8798);
var seq8798__$1 = cljs.core.next.call(null,seq8798);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__8799,seq8798__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8809 = arguments.length;
var i__6018__auto___8810 = (0);
while(true){
if((i__6018__auto___8810 < len__6017__auto___8809)){
args__6024__auto__.push((arguments[i__6018__auto___8810]));

var G__8811 = (i__6018__auto___8810 + (1));
i__6018__auto___8810 = G__8811;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8807){
var vec__8808 = p__8807;
var speed = cljs.core.nth.call(null,vec__8808,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8808,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq8805){
var G__8806 = cljs.core.first.call(null,seq8805);
var seq8805__$1 = cljs.core.next.call(null,seq8805);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__8806,seq8805__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8816 = arguments.length;
var i__6018__auto___8817 = (0);
while(true){
if((i__6018__auto___8817 < len__6017__auto___8816)){
args__6024__auto__.push((arguments[i__6018__auto___8817]));

var G__8818 = (i__6018__auto___8817 + (1));
i__6018__auto___8817 = G__8818;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8814){
var vec__8815 = p__8814;
var speed = cljs.core.nth.call(null,vec__8815,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8815,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq8812){
var G__8813 = cljs.core.first.call(null,seq8812);
var seq8812__$1 = cljs.core.next.call(null,seq8812);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__8813,seq8812__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8823 = arguments.length;
var i__6018__auto___8824 = (0);
while(true){
if((i__6018__auto___8824 < len__6017__auto___8823)){
args__6024__auto__.push((arguments[i__6018__auto___8824]));

var G__8825 = (i__6018__auto___8824 + (1));
i__6018__auto___8824 = G__8825;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8821){
var vec__8822 = p__8821;
var speed = cljs.core.nth.call(null,vec__8822,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8822,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq8819){
var G__8820 = cljs.core.first.call(null,seq8819);
var seq8819__$1 = cljs.core.next.call(null,seq8819);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__8820,seq8819__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8830 = arguments.length;
var i__6018__auto___8831 = (0);
while(true){
if((i__6018__auto___8831 < len__6017__auto___8830)){
args__6024__auto__.push((arguments[i__6018__auto___8831]));

var G__8832 = (i__6018__auto___8831 + (1));
i__6018__auto___8831 = G__8832;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8828){
var vec__8829 = p__8828;
var speed = cljs.core.nth.call(null,vec__8829,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8829,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq8826){
var G__8827 = cljs.core.first.call(null,seq8826);
var seq8826__$1 = cljs.core.next.call(null,seq8826);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__8827,seq8826__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args8833 = [];
var len__6017__auto___8836 = arguments.length;
var i__6018__auto___8837 = (0);
while(true){
if((i__6018__auto___8837 < len__6017__auto___8836)){
args8833.push((arguments[i__6018__auto___8837]));

var G__8838 = (i__6018__auto___8837 + (1));
i__6018__auto___8837 = G__8838;
continue;
} else {
}
break;
}

var G__8835 = args8833.length;
switch (G__8835) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8833.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;
jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args8840 = [];
var len__6017__auto___8843 = arguments.length;
var i__6018__auto___8844 = (0);
while(true){
if((i__6018__auto___8844 < len__6017__auto___8843)){
args8840.push((arguments[i__6018__auto___8844]));

var G__8845 = (i__6018__auto___8844 + (1));
i__6018__auto___8844 = G__8845;
continue;
} else {
}
break;
}

var G__8842 = args8840.length;
switch (G__8842) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8840.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;
jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args8847 = [];
var len__6017__auto___8850 = arguments.length;
var i__6018__auto___8851 = (0);
while(true){
if((i__6018__auto___8851 < len__6017__auto___8850)){
args8847.push((arguments[i__6018__auto___8851]));

var G__8852 = (i__6018__auto___8851 + (1));
i__6018__auto___8851 = G__8852;
continue;
} else {
}
break;
}

var G__8849 = args8847.length;
switch (G__8849) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8847.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;
jayq.core.children = (function jayq$core$children(var_args){
var args8854 = [];
var len__6017__auto___8857 = arguments.length;
var i__6018__auto___8858 = (0);
while(true){
if((i__6018__auto___8858 < len__6017__auto___8857)){
args8854.push((arguments[i__6018__auto___8858]));

var G__8859 = (i__6018__auto___8858 + (1));
i__6018__auto___8858 = G__8859;
continue;
} else {
}
break;
}

var G__8856 = args8854.length;
switch (G__8856) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8854.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;
jayq.core.next = (function jayq$core$next(var_args){
var args8861 = [];
var len__6017__auto___8864 = arguments.length;
var i__6018__auto___8865 = (0);
while(true){
if((i__6018__auto___8865 < len__6017__auto___8864)){
args8861.push((arguments[i__6018__auto___8865]));

var G__8866 = (i__6018__auto___8865 + (1));
i__6018__auto___8865 = G__8866;
continue;
} else {
}
break;
}

var G__8863 = args8861.length;
switch (G__8863) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8861.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;
jayq.core.prev = (function jayq$core$prev(var_args){
var args8868 = [];
var len__6017__auto___8871 = arguments.length;
var i__6018__auto___8872 = (0);
while(true){
if((i__6018__auto___8872 < len__6017__auto___8871)){
args8868.push((arguments[i__6018__auto___8872]));

var G__8873 = (i__6018__auto___8872 + (1));
i__6018__auto___8872 = G__8873;
continue;
} else {
}
break;
}

var G__8870 = args8868.length;
switch (G__8870) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8868.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;
jayq.core.next_all = (function jayq$core$next_all(var_args){
var args8875 = [];
var len__6017__auto___8878 = arguments.length;
var i__6018__auto___8879 = (0);
while(true){
if((i__6018__auto___8879 < len__6017__auto___8878)){
args8875.push((arguments[i__6018__auto___8879]));

var G__8880 = (i__6018__auto___8879 + (1));
i__6018__auto___8879 = G__8880;
continue;
} else {
}
break;
}

var G__8877 = args8875.length;
switch (G__8877) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8875.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;
jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args8882 = [];
var len__6017__auto___8885 = arguments.length;
var i__6018__auto___8886 = (0);
while(true){
if((i__6018__auto___8886 < len__6017__auto___8885)){
args8882.push((arguments[i__6018__auto___8886]));

var G__8887 = (i__6018__auto___8886 + (1));
i__6018__auto___8886 = G__8887;
continue;
} else {
}
break;
}

var G__8884 = args8882.length;
switch (G__8884) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8882.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;
jayq.core.next_until = (function jayq$core$next_until(var_args){
var args8889 = [];
var len__6017__auto___8892 = arguments.length;
var i__6018__auto___8893 = (0);
while(true){
if((i__6018__auto___8893 < len__6017__auto___8892)){
args8889.push((arguments[i__6018__auto___8893]));

var G__8894 = (i__6018__auto___8893 + (1));
i__6018__auto___8893 = G__8894;
continue;
} else {
}
break;
}

var G__8891 = args8889.length;
switch (G__8891) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8889.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;
jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args8896 = [];
var len__6017__auto___8899 = arguments.length;
var i__6018__auto___8900 = (0);
while(true){
if((i__6018__auto___8900 < len__6017__auto___8899)){
args8896.push((arguments[i__6018__auto___8900]));

var G__8901 = (i__6018__auto___8900 + (1));
i__6018__auto___8900 = G__8901;
continue;
} else {
}
break;
}

var G__8898 = args8896.length;
switch (G__8898) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8896.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;
jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8908 = arguments.length;
var i__6018__auto___8909 = (0);
while(true){
if((i__6018__auto___8909 < len__6017__auto___8908)){
args__6024__auto__.push((arguments[i__6018__auto___8909]));

var G__8910 = (i__6018__auto___8909 + (1));
i__6018__auto___8909 = G__8910;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__8906){
var vec__8907 = p__8906;
var context = cljs.core.nth.call(null,vec__8907,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq8903){
var G__8904 = cljs.core.first.call(null,seq8903);
var seq8903__$1 = cljs.core.next.call(null,seq8903);
var G__8905 = cljs.core.first.call(null,seq8903__$1);
var seq8903__$2 = cljs.core.next.call(null,seq8903__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__8904,G__8905,seq8903__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args8911 = [];
var len__6017__auto___8914 = arguments.length;
var i__6018__auto___8915 = (0);
while(true){
if((i__6018__auto___8915 < len__6017__auto___8914)){
args8911.push((arguments[i__6018__auto___8915]));

var G__8916 = (i__6018__auto___8915 + (1));
i__6018__auto___8915 = G__8916;
continue;
} else {
}
break;
}

var G__8913 = args8911.length;
switch (G__8913) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8911.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;
jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args8918 = [];
var len__6017__auto___8921 = arguments.length;
var i__6018__auto___8922 = (0);
while(true){
if((i__6018__auto___8922 < len__6017__auto___8921)){
args8918.push((arguments[i__6018__auto___8922]));

var G__8923 = (i__6018__auto___8922 + (1));
i__6018__auto___8922 = G__8923;
continue;
} else {
}
break;
}

var G__8920 = args8918.length;
switch (G__8920) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8918.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;
jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args8925 = [];
var len__6017__auto___8928 = arguments.length;
var i__6018__auto___8929 = (0);
while(true){
if((i__6018__auto___8929 < len__6017__auto___8928)){
args8925.push((arguments[i__6018__auto___8929]));

var G__8930 = (i__6018__auto___8929 + (1));
i__6018__auto___8929 = G__8930;
continue;
} else {
}
break;
}

var G__8927 = args8925.length;
switch (G__8927) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8925.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;
jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args8932 = [];
var len__6017__auto___8935 = arguments.length;
var i__6018__auto___8936 = (0);
while(true){
if((i__6018__auto___8936 < len__6017__auto___8935)){
args8932.push((arguments[i__6018__auto___8936]));

var G__8937 = (i__6018__auto___8936 + (1));
i__6018__auto___8936 = G__8937;
continue;
} else {
}
break;
}

var G__8934 = args8932.length;
switch (G__8934) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8932.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;
jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__8941){
var map__8944 = p__8941;
var map__8944__$1 = ((((!((map__8944 == null)))?((((map__8944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8944):map__8944);
var request = map__8944__$1;
var data = cljs.core.get.call(null,map__8944__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__8944__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__8944,map__8944__$1,request,data,contentType){
return (function (p1__8940_SHARP_){
if(cljs.core.truth_((function (){var and__4947__auto__ = ct;
if(cljs.core.truth_(and__4947__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4947__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__8940_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__8940_SHARP_;
}
});})(ct,map__8944,map__8944__$1,request,data,contentType))
.call(null,((function (ct,map__8944,map__8944__$1,request,data,contentType){
return (function (p1__8939_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__8939_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__8939_SHARP_;
}
});})(ct,map__8944,map__8944__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args8946 = [];
var len__6017__auto___8949 = arguments.length;
var i__6018__auto___8950 = (0);
while(true){
if((i__6018__auto___8950 < len__6017__auto___8949)){
args8946.push((arguments[i__6018__auto___8950]));

var G__8951 = (i__6018__auto___8950 + (1));
i__6018__auto___8950 = G__8951;
continue;
} else {
}
break;
}

var G__8948 = args8946.length;
switch (G__8948) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8946.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__8953,content,callback){
var vec__8955 = p__8953;
var method = cljs.core.nth.call(null,vec__8955,(0),null);
var uri = cljs.core.nth.call(null,vec__8955,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8961 = arguments.length;
var i__6018__auto___8962 = (0);
while(true){
if((i__6018__auto___8962 < len__6017__auto___8961)){
args__6024__auto__.push((arguments[i__6018__auto___8962]));

var G__8963 = (i__6018__auto___8962 + (1));
i__6018__auto___8962 = G__8963;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__8959){
var vec__8960 = p__8959;
var func = cljs.core.nth.call(null,vec__8960,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq8956){
var G__8957 = cljs.core.first.call(null,seq8956);
var seq8956__$1 = cljs.core.next.call(null,seq8956);
var G__8958 = cljs.core.first.call(null,seq8956__$1);
var seq8956__$2 = cljs.core.next.call(null,seq8956__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__8957,G__8958,seq8956__$2);
});
jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8969 = arguments.length;
var i__6018__auto___8970 = (0);
while(true){
if((i__6018__auto___8970 < len__6017__auto___8969)){
args__6024__auto__.push((arguments[i__6018__auto___8970]));

var G__8971 = (i__6018__auto___8970 + (1));
i__6018__auto___8970 = G__8971;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8967){
var vec__8968 = p__8967;
var sel = cljs.core.nth.call(null,vec__8968,(0),null);
var data = cljs.core.nth.call(null,vec__8968,(1),null);
var handler = cljs.core.nth.call(null,vec__8968,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq8964){
var G__8965 = cljs.core.first.call(null,seq8964);
var seq8964__$1 = cljs.core.next.call(null,seq8964);
var G__8966 = cljs.core.first.call(null,seq8964__$1);
var seq8964__$2 = cljs.core.next.call(null,seq8964__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__8965,G__8966,seq8964__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8977 = arguments.length;
var i__6018__auto___8978 = (0);
while(true){
if((i__6018__auto___8978 < len__6017__auto___8977)){
args__6024__auto__.push((arguments[i__6018__auto___8978]));

var G__8979 = (i__6018__auto___8978 + (1));
i__6018__auto___8978 = G__8979;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8975){
var vec__8976 = p__8975;
var sel = cljs.core.nth.call(null,vec__8976,(0),null);
var data = cljs.core.nth.call(null,vec__8976,(1),null);
var handler = cljs.core.nth.call(null,vec__8976,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq8972){
var G__8973 = cljs.core.first.call(null,seq8972);
var seq8972__$1 = cljs.core.next.call(null,seq8972);
var G__8974 = cljs.core.first.call(null,seq8972__$1);
var seq8972__$2 = cljs.core.next.call(null,seq8972__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__8973,G__8974,seq8972__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8985 = arguments.length;
var i__6018__auto___8986 = (0);
while(true){
if((i__6018__auto___8986 < len__6017__auto___8985)){
args__6024__auto__.push((arguments[i__6018__auto___8986]));

var G__8987 = (i__6018__auto___8986 + (1));
i__6018__auto___8986 = G__8987;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8983){
var vec__8984 = p__8983;
var sel = cljs.core.nth.call(null,vec__8984,(0),null);
var handler = cljs.core.nth.call(null,vec__8984,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq8980){
var G__8981 = cljs.core.first.call(null,seq8980);
var seq8980__$1 = cljs.core.next.call(null,seq8980);
var G__8982 = cljs.core.first.call(null,seq8980__$1);
var seq8980__$2 = cljs.core.next.call(null,seq8980__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__8981,G__8982,seq8980__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args8988 = [];
var len__6017__auto___8991 = arguments.length;
var i__6018__auto___8992 = (0);
while(true){
if((i__6018__auto___8992 < len__6017__auto___8991)){
args8988.push((arguments[i__6018__auto___8992]));

var G__8993 = (i__6018__auto___8992 + (1));
i__6018__auto___8992 = G__8993;
continue;
} else {
}
break;
}

var G__8990 = args8988.length;
switch (G__8990) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8988.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;
jayq.core.width = (function jayq$core$width(var_args){
var args8995 = [];
var len__6017__auto___8998 = arguments.length;
var i__6018__auto___8999 = (0);
while(true){
if((i__6018__auto___8999 < len__6017__auto___8998)){
args8995.push((arguments[i__6018__auto___8999]));

var G__9000 = (i__6018__auto___8999 + (1));
i__6018__auto___8999 = G__9000;
continue;
} else {
}
break;
}

var G__8997 = args8995.length;
switch (G__8997) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8995.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;
jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args9002 = [];
var len__6017__auto___9005 = arguments.length;
var i__6018__auto___9006 = (0);
while(true){
if((i__6018__auto___9006 < len__6017__auto___9005)){
args9002.push((arguments[i__6018__auto___9006]));

var G__9007 = (i__6018__auto___9006 + (1));
i__6018__auto___9006 = G__9007;
continue;
} else {
}
break;
}

var G__9004 = args9002.length;
switch (G__9004) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9002.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;
jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args9009 = [];
var len__6017__auto___9012 = arguments.length;
var i__6018__auto___9013 = (0);
while(true){
if((i__6018__auto___9013 < len__6017__auto___9012)){
args9009.push((arguments[i__6018__auto___9013]));

var G__9014 = (i__6018__auto___9013 + (1));
i__6018__auto___9013 = G__9014;
continue;
} else {
}
break;
}

var G__9011 = args9009.length;
switch (G__9011) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9009.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;
jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args9016 = [];
var len__6017__auto___9019 = arguments.length;
var i__6018__auto___9020 = (0);
while(true){
if((i__6018__auto___9020 < len__6017__auto___9019)){
args9016.push((arguments[i__6018__auto___9020]));

var G__9021 = (i__6018__auto___9020 + (1));
i__6018__auto___9020 = G__9021;
continue;
} else {
}
break;
}

var G__9018 = args9016.length;
switch (G__9018) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9016.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;
jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args9023 = [];
var len__6017__auto___9026 = arguments.length;
var i__6018__auto___9027 = (0);
while(true){
if((i__6018__auto___9027 < len__6017__auto___9026)){
args9023.push((arguments[i__6018__auto___9027]));

var G__9028 = (i__6018__auto___9027 + (1));
i__6018__auto___9027 = G__9028;
continue;
} else {
}
break;
}

var G__9025 = args9023.length;
switch (G__9025) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9023.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;
jayq.core.done = (function jayq$core$done(var_args){
var args__6024__auto__ = [];
var len__6017__auto___9032 = arguments.length;
var i__6018__auto___9033 = (0);
while(true){
if((i__6018__auto___9033 < len__6017__auto___9032)){
args__6024__auto__.push((arguments[i__6018__auto___9033]));

var G__9034 = (i__6018__auto___9033 + (1));
i__6018__auto___9033 = G__9034;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq9030){
var G__9031 = cljs.core.first.call(null,seq9030);
var seq9030__$1 = cljs.core.next.call(null,seq9030);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__9031,seq9030__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__6024__auto__ = [];
var len__6017__auto___9037 = arguments.length;
var i__6018__auto___9038 = (0);
while(true){
if((i__6018__auto___9038 < len__6017__auto___9037)){
args__6024__auto__.push((arguments[i__6018__auto___9038]));

var G__9039 = (i__6018__auto___9038 + (1));
i__6018__auto___9038 = G__9039;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq9035){
var G__9036 = cljs.core.first.call(null,seq9035);
var seq9035__$1 = cljs.core.next.call(null,seq9035);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__9036,seq9035__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args9040 = [];
var len__6017__auto___9043 = arguments.length;
var i__6018__auto___9044 = (0);
while(true){
if((i__6018__auto___9044 < len__6017__auto___9043)){
args9040.push((arguments[i__6018__auto___9044]));

var G__9045 = (i__6018__auto___9044 + (1));
i__6018__auto___9044 = G__9045;
continue;
} else {
}
break;
}

var G__9042 = args9040.length;
switch (G__9042) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9040.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;
jayq.core.always = (function jayq$core$always(var_args){
var args__6024__auto__ = [];
var len__6017__auto___9049 = arguments.length;
var i__6018__auto___9050 = (0);
while(true){
if((i__6018__auto___9050 < len__6017__auto___9049)){
args__6024__auto__.push((arguments[i__6018__auto___9050]));

var G__9051 = (i__6018__auto___9050 + (1));
i__6018__auto___9050 = G__9051;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq9047){
var G__9048 = cljs.core.first.call(null,seq9047);
var seq9047__$1 = cljs.core.next.call(null,seq9047);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__9048,seq9047__$1);
});
jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args9052 = [];
var len__6017__auto___9055 = arguments.length;
var i__6018__auto___9056 = (0);
while(true){
if((i__6018__auto___9056 < len__6017__auto___9055)){
args9052.push((arguments[i__6018__auto___9056]));

var G__9057 = (i__6018__auto___9056 + (1));
i__6018__auto___9056 = G__9057;
continue;
} else {
}
break;
}

var G__9054 = args9052.length;
switch (G__9054) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9052.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;
jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map?rel=1446114642920