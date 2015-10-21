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
var args8698 = [];
var len__6017__auto___8701 = arguments.length;
var i__6018__auto___8702 = (0);
while(true){
if((i__6018__auto___8702 < len__6017__auto___8701)){
args8698.push((arguments[i__6018__auto___8702]));

var G__8703 = (i__6018__auto___8702 + (1));
i__6018__auto___8702 = G__8703;
continue;
} else {
}
break;
}

var G__8700 = args8698.length;
switch (G__8700) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8698.length)].join('')));

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
var G__8706 = null;
var G__8706__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__8706__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__8706 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8706__2.call(this,self__,k);
case 3:
return G__8706__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8706.cljs$core$IFn$_invoke$arity$2 = G__8706__2;
G__8706.cljs$core$IFn$_invoke$arity$3 = G__8706__3;
return G__8706;
})()
;

jQuery.prototype.apply = (function (self__,args8705){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8705)));
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
var len__6017__auto___8712 = arguments.length;
var i__6018__auto___8713 = (0);
while(true){
if((i__6018__auto___8713 < len__6017__auto___8712)){
args__6024__auto__.push((arguments[i__6018__auto___8713]));

var G__8714 = (i__6018__auto___8713 + (1));
i__6018__auto___8713 = G__8714;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__8710){
var vec__8711 = p__8710;
var speed = cljs.core.nth.call(null,vec__8711,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8711,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq8707){
var G__8708 = cljs.core.first.call(null,seq8707);
var seq8707__$1 = cljs.core.next.call(null,seq8707);
var G__8709 = cljs.core.first.call(null,seq8707__$1);
var seq8707__$2 = cljs.core.next.call(null,seq8707__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__8708,G__8709,seq8707__$2);
});
jayq.core.text = (function jayq$core$text(var_args){
var args8715 = [];
var len__6017__auto___8718 = arguments.length;
var i__6018__auto___8719 = (0);
while(true){
if((i__6018__auto___8719 < len__6017__auto___8718)){
args8715.push((arguments[i__6018__auto___8719]));

var G__8720 = (i__6018__auto___8719 + (1));
i__6018__auto___8719 = G__8720;
continue;
} else {
}
break;
}

var G__8717 = args8715.length;
switch (G__8717) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8715.length)].join('')));

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
var args8722 = [];
var len__6017__auto___8725 = arguments.length;
var i__6018__auto___8726 = (0);
while(true){
if((i__6018__auto___8726 < len__6017__auto___8725)){
args8722.push((arguments[i__6018__auto___8726]));

var G__8727 = (i__6018__auto___8726 + (1));
i__6018__auto___8726 = G__8727;
continue;
} else {
}
break;
}

var G__8724 = args8722.length;
switch (G__8724) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8722.length)].join('')));

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
var args8729 = [];
var len__6017__auto___8732 = arguments.length;
var i__6018__auto___8733 = (0);
while(true){
if((i__6018__auto___8733 < len__6017__auto___8732)){
args8729.push((arguments[i__6018__auto___8733]));

var G__8734 = (i__6018__auto___8733 + (1));
i__6018__auto___8733 = G__8734;
continue;
} else {
}
break;
}

var G__8731 = args8729.length;
switch (G__8731) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8729.length)].join('')));

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
var args8736 = [];
var len__6017__auto___8739 = arguments.length;
var i__6018__auto___8740 = (0);
while(true){
if((i__6018__auto___8740 < len__6017__auto___8739)){
args8736.push((arguments[i__6018__auto___8740]));

var G__8741 = (i__6018__auto___8740 + (1));
i__6018__auto___8740 = G__8741;
continue;
} else {
}
break;
}

var G__8738 = args8736.length;
switch (G__8738) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8736.length)].join('')));

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
var args8743 = [];
var len__6017__auto___8746 = arguments.length;
var i__6018__auto___8747 = (0);
while(true){
if((i__6018__auto___8747 < len__6017__auto___8746)){
args8743.push((arguments[i__6018__auto___8747]));

var G__8748 = (i__6018__auto___8747 + (1));
i__6018__auto___8747 = G__8748;
continue;
} else {
}
break;
}

var G__8745 = args8743.length;
switch (G__8745) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8743.length)].join('')));

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
var args8750 = [];
var len__6017__auto___8753 = arguments.length;
var i__6018__auto___8754 = (0);
while(true){
if((i__6018__auto___8754 < len__6017__auto___8753)){
args8750.push((arguments[i__6018__auto___8754]));

var G__8755 = (i__6018__auto___8754 + (1));
i__6018__auto___8754 = G__8755;
continue;
} else {
}
break;
}

var G__8752 = args8750.length;
switch (G__8752) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8750.length)].join('')));

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
var args8757 = [];
var len__6017__auto___8760 = arguments.length;
var i__6018__auto___8761 = (0);
while(true){
if((i__6018__auto___8761 < len__6017__auto___8760)){
args8757.push((arguments[i__6018__auto___8761]));

var G__8762 = (i__6018__auto___8761 + (1));
i__6018__auto___8761 = G__8762;
continue;
} else {
}
break;
}

var G__8759 = args8757.length;
switch (G__8759) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8757.length)].join('')));

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
var len__6017__auto___8768 = arguments.length;
var i__6018__auto___8769 = (0);
while(true){
if((i__6018__auto___8769 < len__6017__auto___8768)){
args__6024__auto__.push((arguments[i__6018__auto___8769]));

var G__8770 = (i__6018__auto___8769 + (1));
i__6018__auto___8769 = G__8770;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8766){
var vec__8767 = p__8766;
var speed = cljs.core.nth.call(null,vec__8767,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8767,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq8764){
var G__8765 = cljs.core.first.call(null,seq8764);
var seq8764__$1 = cljs.core.next.call(null,seq8764);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__8765,seq8764__$1);
});
jayq.core.show = (function jayq$core$show(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8775 = arguments.length;
var i__6018__auto___8776 = (0);
while(true){
if((i__6018__auto___8776 < len__6017__auto___8775)){
args__6024__auto__.push((arguments[i__6018__auto___8776]));

var G__8777 = (i__6018__auto___8776 + (1));
i__6018__auto___8776 = G__8777;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8773){
var vec__8774 = p__8773;
var speed = cljs.core.nth.call(null,vec__8774,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8774,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq8771){
var G__8772 = cljs.core.first.call(null,seq8771);
var seq8771__$1 = cljs.core.next.call(null,seq8771);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__8772,seq8771__$1);
});
jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8782 = arguments.length;
var i__6018__auto___8783 = (0);
while(true){
if((i__6018__auto___8783 < len__6017__auto___8782)){
args__6024__auto__.push((arguments[i__6018__auto___8783]));

var G__8784 = (i__6018__auto___8783 + (1));
i__6018__auto___8783 = G__8784;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8780){
var vec__8781 = p__8780;
var speed = cljs.core.nth.call(null,vec__8781,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8781,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq8778){
var G__8779 = cljs.core.first.call(null,seq8778);
var seq8778__$1 = cljs.core.next.call(null,seq8778);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__8779,seq8778__$1);
});
jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8789 = arguments.length;
var i__6018__auto___8790 = (0);
while(true){
if((i__6018__auto___8790 < len__6017__auto___8789)){
args__6024__auto__.push((arguments[i__6018__auto___8790]));

var G__8791 = (i__6018__auto___8790 + (1));
i__6018__auto___8790 = G__8791;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8787){
var vec__8788 = p__8787;
var speed = cljs.core.nth.call(null,vec__8788,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8788,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq8785){
var G__8786 = cljs.core.first.call(null,seq8785);
var seq8785__$1 = cljs.core.next.call(null,seq8785);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__8786,seq8785__$1);
});
jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8796 = arguments.length;
var i__6018__auto___8797 = (0);
while(true){
if((i__6018__auto___8797 < len__6017__auto___8796)){
args__6024__auto__.push((arguments[i__6018__auto___8797]));

var G__8798 = (i__6018__auto___8797 + (1));
i__6018__auto___8797 = G__8798;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8794){
var vec__8795 = p__8794;
var speed = cljs.core.nth.call(null,vec__8795,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8795,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq8792){
var G__8793 = cljs.core.first.call(null,seq8792);
var seq8792__$1 = cljs.core.next.call(null,seq8792);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__8793,seq8792__$1);
});
jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8803 = arguments.length;
var i__6018__auto___8804 = (0);
while(true){
if((i__6018__auto___8804 < len__6017__auto___8803)){
args__6024__auto__.push((arguments[i__6018__auto___8804]));

var G__8805 = (i__6018__auto___8804 + (1));
i__6018__auto___8804 = G__8805;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8801){
var vec__8802 = p__8801;
var speed = cljs.core.nth.call(null,vec__8802,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8802,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq8799){
var G__8800 = cljs.core.first.call(null,seq8799);
var seq8799__$1 = cljs.core.next.call(null,seq8799);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__8800,seq8799__$1);
});
jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8810 = arguments.length;
var i__6018__auto___8811 = (0);
while(true){
if((i__6018__auto___8811 < len__6017__auto___8810)){
args__6024__auto__.push((arguments[i__6018__auto___8811]));

var G__8812 = (i__6018__auto___8811 + (1));
i__6018__auto___8811 = G__8812;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((1) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((1)),(0))):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6025__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__8808){
var vec__8809 = p__8808;
var speed = cljs.core.nth.call(null,vec__8809,(0),null);
var on_finish = cljs.core.nth.call(null,vec__8809,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq8806){
var G__8807 = cljs.core.first.call(null,seq8806);
var seq8806__$1 = cljs.core.next.call(null,seq8806);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__8807,seq8806__$1);
});
jayq.core.siblings = (function jayq$core$siblings(var_args){
var args8813 = [];
var len__6017__auto___8816 = arguments.length;
var i__6018__auto___8817 = (0);
while(true){
if((i__6018__auto___8817 < len__6017__auto___8816)){
args8813.push((arguments[i__6018__auto___8817]));

var G__8818 = (i__6018__auto___8817 + (1));
i__6018__auto___8817 = G__8818;
continue;
} else {
}
break;
}

var G__8815 = args8813.length;
switch (G__8815) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8813.length)].join('')));

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
var args8820 = [];
var len__6017__auto___8823 = arguments.length;
var i__6018__auto___8824 = (0);
while(true){
if((i__6018__auto___8824 < len__6017__auto___8823)){
args8820.push((arguments[i__6018__auto___8824]));

var G__8825 = (i__6018__auto___8824 + (1));
i__6018__auto___8824 = G__8825;
continue;
} else {
}
break;
}

var G__8822 = args8820.length;
switch (G__8822) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8820.length)].join('')));

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
var args8827 = [];
var len__6017__auto___8830 = arguments.length;
var i__6018__auto___8831 = (0);
while(true){
if((i__6018__auto___8831 < len__6017__auto___8830)){
args8827.push((arguments[i__6018__auto___8831]));

var G__8832 = (i__6018__auto___8831 + (1));
i__6018__auto___8831 = G__8832;
continue;
} else {
}
break;
}

var G__8829 = args8827.length;
switch (G__8829) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8827.length)].join('')));

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
var args8834 = [];
var len__6017__auto___8837 = arguments.length;
var i__6018__auto___8838 = (0);
while(true){
if((i__6018__auto___8838 < len__6017__auto___8837)){
args8834.push((arguments[i__6018__auto___8838]));

var G__8839 = (i__6018__auto___8838 + (1));
i__6018__auto___8838 = G__8839;
continue;
} else {
}
break;
}

var G__8836 = args8834.length;
switch (G__8836) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8834.length)].join('')));

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
var args8841 = [];
var len__6017__auto___8844 = arguments.length;
var i__6018__auto___8845 = (0);
while(true){
if((i__6018__auto___8845 < len__6017__auto___8844)){
args8841.push((arguments[i__6018__auto___8845]));

var G__8846 = (i__6018__auto___8845 + (1));
i__6018__auto___8845 = G__8846;
continue;
} else {
}
break;
}

var G__8843 = args8841.length;
switch (G__8843) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8841.length)].join('')));

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
var args8848 = [];
var len__6017__auto___8851 = arguments.length;
var i__6018__auto___8852 = (0);
while(true){
if((i__6018__auto___8852 < len__6017__auto___8851)){
args8848.push((arguments[i__6018__auto___8852]));

var G__8853 = (i__6018__auto___8852 + (1));
i__6018__auto___8852 = G__8853;
continue;
} else {
}
break;
}

var G__8850 = args8848.length;
switch (G__8850) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8848.length)].join('')));

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
var args8855 = [];
var len__6017__auto___8858 = arguments.length;
var i__6018__auto___8859 = (0);
while(true){
if((i__6018__auto___8859 < len__6017__auto___8858)){
args8855.push((arguments[i__6018__auto___8859]));

var G__8860 = (i__6018__auto___8859 + (1));
i__6018__auto___8859 = G__8860;
continue;
} else {
}
break;
}

var G__8857 = args8855.length;
switch (G__8857) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8855.length)].join('')));

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
var args8862 = [];
var len__6017__auto___8865 = arguments.length;
var i__6018__auto___8866 = (0);
while(true){
if((i__6018__auto___8866 < len__6017__auto___8865)){
args8862.push((arguments[i__6018__auto___8866]));

var G__8867 = (i__6018__auto___8866 + (1));
i__6018__auto___8866 = G__8867;
continue;
} else {
}
break;
}

var G__8864 = args8862.length;
switch (G__8864) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8862.length)].join('')));

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
var args8869 = [];
var len__6017__auto___8872 = arguments.length;
var i__6018__auto___8873 = (0);
while(true){
if((i__6018__auto___8873 < len__6017__auto___8872)){
args8869.push((arguments[i__6018__auto___8873]));

var G__8874 = (i__6018__auto___8873 + (1));
i__6018__auto___8873 = G__8874;
continue;
} else {
}
break;
}

var G__8871 = args8869.length;
switch (G__8871) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8869.length)].join('')));

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
var args8876 = [];
var len__6017__auto___8879 = arguments.length;
var i__6018__auto___8880 = (0);
while(true){
if((i__6018__auto___8880 < len__6017__auto___8879)){
args8876.push((arguments[i__6018__auto___8880]));

var G__8881 = (i__6018__auto___8880 + (1));
i__6018__auto___8880 = G__8881;
continue;
} else {
}
break;
}

var G__8878 = args8876.length;
switch (G__8878) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8876.length)].join('')));

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
var len__6017__auto___8888 = arguments.length;
var i__6018__auto___8889 = (0);
while(true){
if((i__6018__auto___8889 < len__6017__auto___8888)){
args__6024__auto__.push((arguments[i__6018__auto___8889]));

var G__8890 = (i__6018__auto___8889 + (1));
i__6018__auto___8889 = G__8890;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__8886){
var vec__8887 = p__8886;
var context = cljs.core.nth.call(null,vec__8887,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq8883){
var G__8884 = cljs.core.first.call(null,seq8883);
var seq8883__$1 = cljs.core.next.call(null,seq8883);
var G__8885 = cljs.core.first.call(null,seq8883__$1);
var seq8883__$2 = cljs.core.next.call(null,seq8883__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__8884,G__8885,seq8883__$2);
});
jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args8891 = [];
var len__6017__auto___8894 = arguments.length;
var i__6018__auto___8895 = (0);
while(true){
if((i__6018__auto___8895 < len__6017__auto___8894)){
args8891.push((arguments[i__6018__auto___8895]));

var G__8896 = (i__6018__auto___8895 + (1));
i__6018__auto___8895 = G__8896;
continue;
} else {
}
break;
}

var G__8893 = args8891.length;
switch (G__8893) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8891.length)].join('')));

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
var args8898 = [];
var len__6017__auto___8901 = arguments.length;
var i__6018__auto___8902 = (0);
while(true){
if((i__6018__auto___8902 < len__6017__auto___8901)){
args8898.push((arguments[i__6018__auto___8902]));

var G__8903 = (i__6018__auto___8902 + (1));
i__6018__auto___8902 = G__8903;
continue;
} else {
}
break;
}

var G__8900 = args8898.length;
switch (G__8900) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8898.length)].join('')));

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
var args8905 = [];
var len__6017__auto___8908 = arguments.length;
var i__6018__auto___8909 = (0);
while(true){
if((i__6018__auto___8909 < len__6017__auto___8908)){
args8905.push((arguments[i__6018__auto___8909]));

var G__8910 = (i__6018__auto___8909 + (1));
i__6018__auto___8909 = G__8910;
continue;
} else {
}
break;
}

var G__8907 = args8905.length;
switch (G__8907) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8905.length)].join('')));

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
var args8912 = [];
var len__6017__auto___8915 = arguments.length;
var i__6018__auto___8916 = (0);
while(true){
if((i__6018__auto___8916 < len__6017__auto___8915)){
args8912.push((arguments[i__6018__auto___8916]));

var G__8917 = (i__6018__auto___8916 + (1));
i__6018__auto___8916 = G__8917;
continue;
} else {
}
break;
}

var G__8914 = args8912.length;
switch (G__8914) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8912.length)].join('')));

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
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__8921){
var map__8924 = p__8921;
var map__8924__$1 = ((((!((map__8924 == null)))?((((map__8924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8924):map__8924);
var request = map__8924__$1;
var data = cljs.core.get.call(null,map__8924__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__8924__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__8924,map__8924__$1,request,data,contentType){
return (function (p1__8920_SHARP_){
if(cljs.core.truth_((function (){var and__4947__auto__ = ct;
if(cljs.core.truth_(and__4947__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4947__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__8920_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__8920_SHARP_;
}
});})(ct,map__8924,map__8924__$1,request,data,contentType))
.call(null,((function (ct,map__8924,map__8924__$1,request,data,contentType){
return (function (p1__8919_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__8919_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__8919_SHARP_;
}
});})(ct,map__8924,map__8924__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args8926 = [];
var len__6017__auto___8929 = arguments.length;
var i__6018__auto___8930 = (0);
while(true){
if((i__6018__auto___8930 < len__6017__auto___8929)){
args8926.push((arguments[i__6018__auto___8930]));

var G__8931 = (i__6018__auto___8930 + (1));
i__6018__auto___8930 = G__8931;
continue;
} else {
}
break;
}

var G__8928 = args8926.length;
switch (G__8928) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8926.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;
jayq.core.xhr = (function jayq$core$xhr(p__8933,content,callback){
var vec__8935 = p__8933;
var method = cljs.core.nth.call(null,vec__8935,(0),null);
var uri = cljs.core.nth.call(null,vec__8935,(1),null);
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
var len__6017__auto___8941 = arguments.length;
var i__6018__auto___8942 = (0);
while(true){
if((i__6018__auto___8942 < len__6017__auto___8941)){
args__6024__auto__.push((arguments[i__6018__auto___8942]));

var G__8943 = (i__6018__auto___8942 + (1));
i__6018__auto___8942 = G__8943;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__8939){
var vec__8940 = p__8939;
var func = cljs.core.nth.call(null,vec__8940,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq8936){
var G__8937 = cljs.core.first.call(null,seq8936);
var seq8936__$1 = cljs.core.next.call(null,seq8936);
var G__8938 = cljs.core.first.call(null,seq8936__$1);
var seq8936__$2 = cljs.core.next.call(null,seq8936__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__8937,G__8938,seq8936__$2);
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
var len__6017__auto___8949 = arguments.length;
var i__6018__auto___8950 = (0);
while(true){
if((i__6018__auto___8950 < len__6017__auto___8949)){
args__6024__auto__.push((arguments[i__6018__auto___8950]));

var G__8951 = (i__6018__auto___8950 + (1));
i__6018__auto___8950 = G__8951;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8947){
var vec__8948 = p__8947;
var sel = cljs.core.nth.call(null,vec__8948,(0),null);
var data = cljs.core.nth.call(null,vec__8948,(1),null);
var handler = cljs.core.nth.call(null,vec__8948,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq8944){
var G__8945 = cljs.core.first.call(null,seq8944);
var seq8944__$1 = cljs.core.next.call(null,seq8944);
var G__8946 = cljs.core.first.call(null,seq8944__$1);
var seq8944__$2 = cljs.core.next.call(null,seq8944__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__8945,G__8946,seq8944__$2);
});
jayq.core.one = (function jayq$core$one(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8957 = arguments.length;
var i__6018__auto___8958 = (0);
while(true){
if((i__6018__auto___8958 < len__6017__auto___8957)){
args__6024__auto__.push((arguments[i__6018__auto___8958]));

var G__8959 = (i__6018__auto___8958 + (1));
i__6018__auto___8958 = G__8959;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8955){
var vec__8956 = p__8955;
var sel = cljs.core.nth.call(null,vec__8956,(0),null);
var data = cljs.core.nth.call(null,vec__8956,(1),null);
var handler = cljs.core.nth.call(null,vec__8956,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq8952){
var G__8953 = cljs.core.first.call(null,seq8952);
var seq8952__$1 = cljs.core.next.call(null,seq8952);
var G__8954 = cljs.core.first.call(null,seq8952__$1);
var seq8952__$2 = cljs.core.next.call(null,seq8952__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__8953,G__8954,seq8952__$2);
});
jayq.core.off = (function jayq$core$off(var_args){
var args__6024__auto__ = [];
var len__6017__auto___8965 = arguments.length;
var i__6018__auto___8966 = (0);
while(true){
if((i__6018__auto___8966 < len__6017__auto___8965)){
args__6024__auto__.push((arguments[i__6018__auto___8966]));

var G__8967 = (i__6018__auto___8966 + (1));
i__6018__auto___8966 = G__8967;
continue;
} else {
}
break;
}

var argseq__6025__auto__ = ((((2) < args__6024__auto__.length))?(new cljs.core.IndexedSeq(args__6024__auto__.slice((2)),(0))):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6025__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__8963){
var vec__8964 = p__8963;
var sel = cljs.core.nth.call(null,vec__8964,(0),null);
var handler = cljs.core.nth.call(null,vec__8964,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq8960){
var G__8961 = cljs.core.first.call(null,seq8960);
var seq8960__$1 = cljs.core.next.call(null,seq8960);
var G__8962 = cljs.core.first.call(null,seq8960__$1);
var seq8960__$2 = cljs.core.next.call(null,seq8960__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__8961,G__8962,seq8960__$2);
});
jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args8968 = [];
var len__6017__auto___8971 = arguments.length;
var i__6018__auto___8972 = (0);
while(true){
if((i__6018__auto___8972 < len__6017__auto___8971)){
args8968.push((arguments[i__6018__auto___8972]));

var G__8973 = (i__6018__auto___8972 + (1));
i__6018__auto___8972 = G__8973;
continue;
} else {
}
break;
}

var G__8970 = args8968.length;
switch (G__8970) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8968.length)].join('')));

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
var args8975 = [];
var len__6017__auto___8978 = arguments.length;
var i__6018__auto___8979 = (0);
while(true){
if((i__6018__auto___8979 < len__6017__auto___8978)){
args8975.push((arguments[i__6018__auto___8979]));

var G__8980 = (i__6018__auto___8979 + (1));
i__6018__auto___8979 = G__8980;
continue;
} else {
}
break;
}

var G__8977 = args8975.length;
switch (G__8977) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8975.length)].join('')));

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
var args8982 = [];
var len__6017__auto___8985 = arguments.length;
var i__6018__auto___8986 = (0);
while(true){
if((i__6018__auto___8986 < len__6017__auto___8985)){
args8982.push((arguments[i__6018__auto___8986]));

var G__8987 = (i__6018__auto___8986 + (1));
i__6018__auto___8986 = G__8987;
continue;
} else {
}
break;
}

var G__8984 = args8982.length;
switch (G__8984) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8982.length)].join('')));

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
var args8989 = [];
var len__6017__auto___8992 = arguments.length;
var i__6018__auto___8993 = (0);
while(true){
if((i__6018__auto___8993 < len__6017__auto___8992)){
args8989.push((arguments[i__6018__auto___8993]));

var G__8994 = (i__6018__auto___8993 + (1));
i__6018__auto___8993 = G__8994;
continue;
} else {
}
break;
}

var G__8991 = args8989.length;
switch (G__8991) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8989.length)].join('')));

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
var args8996 = [];
var len__6017__auto___8999 = arguments.length;
var i__6018__auto___9000 = (0);
while(true){
if((i__6018__auto___9000 < len__6017__auto___8999)){
args8996.push((arguments[i__6018__auto___9000]));

var G__9001 = (i__6018__auto___9000 + (1));
i__6018__auto___9000 = G__9001;
continue;
} else {
}
break;
}

var G__8998 = args8996.length;
switch (G__8998) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8996.length)].join('')));

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
var args9003 = [];
var len__6017__auto___9006 = arguments.length;
var i__6018__auto___9007 = (0);
while(true){
if((i__6018__auto___9007 < len__6017__auto___9006)){
args9003.push((arguments[i__6018__auto___9007]));

var G__9008 = (i__6018__auto___9007 + (1));
i__6018__auto___9007 = G__9008;
continue;
} else {
}
break;
}

var G__9005 = args9003.length;
switch (G__9005) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9003.length)].join('')));

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
var len__6017__auto___9012 = arguments.length;
var i__6018__auto___9013 = (0);
while(true){
if((i__6018__auto___9013 < len__6017__auto___9012)){
args__6024__auto__.push((arguments[i__6018__auto___9013]));

var G__9014 = (i__6018__auto___9013 + (1));
i__6018__auto___9013 = G__9014;
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

jayq.core.done.cljs$lang$applyTo = (function (seq9010){
var G__9011 = cljs.core.first.call(null,seq9010);
var seq9010__$1 = cljs.core.next.call(null,seq9010);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__9011,seq9010__$1);
});
jayq.core.fail = (function jayq$core$fail(var_args){
var args__6024__auto__ = [];
var len__6017__auto___9017 = arguments.length;
var i__6018__auto___9018 = (0);
while(true){
if((i__6018__auto___9018 < len__6017__auto___9017)){
args__6024__auto__.push((arguments[i__6018__auto___9018]));

var G__9019 = (i__6018__auto___9018 + (1));
i__6018__auto___9018 = G__9019;
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

jayq.core.fail.cljs$lang$applyTo = (function (seq9015){
var G__9016 = cljs.core.first.call(null,seq9015);
var seq9015__$1 = cljs.core.next.call(null,seq9015);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__9016,seq9015__$1);
});
jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args9020 = [];
var len__6017__auto___9023 = arguments.length;
var i__6018__auto___9024 = (0);
while(true){
if((i__6018__auto___9024 < len__6017__auto___9023)){
args9020.push((arguments[i__6018__auto___9024]));

var G__9025 = (i__6018__auto___9024 + (1));
i__6018__auto___9024 = G__9025;
continue;
} else {
}
break;
}

var G__9022 = args9020.length;
switch (G__9022) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9020.length)].join('')));

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
var len__6017__auto___9029 = arguments.length;
var i__6018__auto___9030 = (0);
while(true){
if((i__6018__auto___9030 < len__6017__auto___9029)){
args__6024__auto__.push((arguments[i__6018__auto___9030]));

var G__9031 = (i__6018__auto___9030 + (1));
i__6018__auto___9030 = G__9031;
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

jayq.core.always.cljs$lang$applyTo = (function (seq9027){
var G__9028 = cljs.core.first.call(null,seq9027);
var seq9027__$1 = cljs.core.next.call(null,seq9027);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__9028,seq9027__$1);
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
var args9032 = [];
var len__6017__auto___9035 = arguments.length;
var i__6018__auto___9036 = (0);
while(true){
if((i__6018__auto___9036 < len__6017__auto___9035)){
args9032.push((arguments[i__6018__auto___9036]));

var G__9037 = (i__6018__auto___9036 + (1));
i__6018__auto___9036 = G__9037;
continue;
} else {
}
break;
}

var G__9034 = args9032.length;
switch (G__9034) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9032.length)].join('')));

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

//# sourceMappingURL=core.js.map?rel=1445449318745