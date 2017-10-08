// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._header[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._header["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._has_body[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__27878__auto__ = (((value == null))?null:value);
var m__27879__auto__ = (devtools.format._body[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,value);
} else {
var m__27879__auto____$1 = (devtools.format._body["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39687 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39687["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39688 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39688["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39689 = temp__4655__auto____$2;
return (o39689["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39690 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39690["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39691 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39691["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39692 = temp__4655__auto____$2;
return (o39692["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39693 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39693["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39694 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39694["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39695 = temp__4655__auto____$2;
return (o39695["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39696 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39696["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39697 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39697["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39698 = temp__4655__auto____$2;
return (o39698["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39699 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39699["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39700 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39700["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39701 = temp__4655__auto____$2;
return (o39701["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39702 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39702["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39703 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39703["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39704 = temp__4655__auto____$2;
return (o39704["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39705 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39705["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39706 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39706["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39707 = temp__4655__auto____$2;
return (o39707["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39709 = arguments.length;
var i__28365__auto___39710 = (0);
while(true){
if((i__28365__auto___39710 < len__28364__auto___39709)){
args__28371__auto__.push((arguments[i__28365__auto___39710]));

var G__39711 = (i__28365__auto___39710 + (1));
i__28365__auto___39710 = G__39711;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39708){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39708));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39713 = arguments.length;
var i__28365__auto___39714 = (0);
while(true){
if((i__28365__auto___39714 < len__28364__auto___39713)){
args__28371__auto__.push((arguments[i__28365__auto___39714]));

var G__39715 = (i__28365__auto___39714 + (1));
i__28365__auto___39714 = G__39715;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39712){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39712));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39717 = arguments.length;
var i__28365__auto___39718 = (0);
while(true){
if((i__28365__auto___39718 < len__28364__auto___39717)){
args__28371__auto__.push((arguments[i__28365__auto___39718]));

var G__39719 = (i__28365__auto___39718 + (1));
i__28365__auto___39718 = G__39719;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39716){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39716));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39721 = arguments.length;
var i__28365__auto___39722 = (0);
while(true){
if((i__28365__auto___39722 < len__28364__auto___39721)){
args__28371__auto__.push((arguments[i__28365__auto___39722]));

var G__39723 = (i__28365__auto___39722 + (1));
i__28365__auto___39722 = G__39723;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39720){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39720));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39725 = arguments.length;
var i__28365__auto___39726 = (0);
while(true){
if((i__28365__auto___39726 < len__28364__auto___39725)){
args__28371__auto__.push((arguments[i__28365__auto___39726]));

var G__39727 = (i__28365__auto___39726 + (1));
i__28365__auto___39726 = G__39727;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39724){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39724));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39729 = arguments.length;
var i__28365__auto___39730 = (0);
while(true){
if((i__28365__auto___39730 < len__28364__auto___39729)){
args__28371__auto__.push((arguments[i__28365__auto___39730]));

var G__39731 = (i__28365__auto___39730 + (1));
i__28365__auto___39730 = G__39731;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39728){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39728));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39733 = arguments.length;
var i__28365__auto___39734 = (0);
while(true){
if((i__28365__auto___39734 < len__28364__auto___39733)){
args__28371__auto__.push((arguments[i__28365__auto___39734]));

var G__39735 = (i__28365__auto___39734 + (1));
i__28365__auto___39734 = G__39735;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39732){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39732));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39743 = arguments.length;
var i__28365__auto___39744 = (0);
while(true){
if((i__28365__auto___39744 < len__28364__auto___39743)){
args__28371__auto__.push((arguments[i__28365__auto___39744]));

var G__39745 = (i__28365__auto___39744 + (1));
i__28365__auto___39744 = G__39745;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39739){
var vec__39740 = p__39739;
var state_override = cljs.core.nth.call(null,vec__39740,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39740,state_override){
return (function (p1__39736_SHARP_){
return cljs.core.merge.call(null,p1__39736_SHARP_,state_override);
});})(vec__39740,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39737){
var G__39738 = cljs.core.first.call(null,seq39737);
var seq39737__$1 = cljs.core.next.call(null,seq39737);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39738,seq39737__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39747 = arguments.length;
var i__28365__auto___39748 = (0);
while(true){
if((i__28365__auto___39748 < len__28364__auto___39747)){
args__28371__auto__.push((arguments[i__28365__auto___39748]));

var G__39749 = (i__28365__auto___39748 + (1));
i__28365__auto___39748 = G__39749;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39746){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39746));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28371__auto__ = [];
var len__28364__auto___39752 = arguments.length;
var i__28365__auto___39753 = (0);
while(true){
if((i__28365__auto___39753 < len__28364__auto___39752)){
args__28371__auto__.push((arguments[i__28365__auto___39753]));

var G__39754 = (i__28365__auto___39753 + (1));
i__28365__auto___39753 = G__39754;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39750){
var G__39751 = cljs.core.first.call(null,seq39750);
var seq39750__$1 = cljs.core.next.call(null,seq39750);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39751,seq39750__$1);
});


//# sourceMappingURL=format.js.map?rel=1507441609442
