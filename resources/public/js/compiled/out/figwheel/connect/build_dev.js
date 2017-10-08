// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('leaderboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32196__delegate = function (x){
if(cljs.core.truth_(leaderboard.core.mount_root)){
return cljs.core.apply.call(null,leaderboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'leaderboard.core/mount-root' is missing");
}
};
var G__32196 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__32197__i = 0, G__32197__a = new Array(arguments.length -  0);
while (G__32197__i < G__32197__a.length) {G__32197__a[G__32197__i] = arguments[G__32197__i + 0]; ++G__32197__i;}
  x = new cljs.core.IndexedSeq(G__32197__a,0,null);
} 
return G__32196__delegate.call(this,x);};
G__32196.cljs$lang$maxFixedArity = 0;
G__32196.cljs$lang$applyTo = (function (arglist__32198){
var x = cljs.core.seq(arglist__32198);
return G__32196__delegate(x);
});
G__32196.cljs$core$IFn$_invoke$arity$variadic = G__32196__delegate;
return G__32196;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1507483396417
