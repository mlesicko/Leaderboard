// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__39214__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39215__i = 0, G__39215__a = new Array(arguments.length -  0);
while (G__39215__i < G__39215__a.length) {G__39215__a[G__39215__i] = arguments[G__39215__i + 0]; ++G__39215__i;}
  args = new cljs.core.IndexedSeq(G__39215__a,0,null);
} 
return G__39214__delegate.call(this,args);};
G__39214.cljs$lang$maxFixedArity = 0;
G__39214.cljs$lang$applyTo = (function (arglist__39216){
var args = cljs.core.seq(arglist__39216);
return G__39214__delegate(args);
});
G__39214.cljs$core$IFn$_invoke$arity$variadic = G__39214__delegate;
return G__39214;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__39217__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39218__i = 0, G__39218__a = new Array(arguments.length -  0);
while (G__39218__i < G__39218__a.length) {G__39218__a[G__39218__i] = arguments[G__39218__i + 0]; ++G__39218__i;}
  args = new cljs.core.IndexedSeq(G__39218__a,0,null);
} 
return G__39217__delegate.call(this,args);};
G__39217.cljs$lang$maxFixedArity = 0;
G__39217.cljs$lang$applyTo = (function (arglist__39219){
var args = cljs.core.seq(arglist__39219);
return G__39217__delegate(args);
});
G__39217.cljs$core$IFn$_invoke$arity$variadic = G__39217__delegate;
return G__39217;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1507441604097
