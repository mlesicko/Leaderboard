// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('leaderboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30810__delegate = function (x){
if(cljs.core.truth_(leaderboard.core.mount_root)){
return cljs.core.apply.call(null,leaderboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'leaderboard.core/mount-root' is missing");
}
};
var G__30810 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__30811__i = 0, G__30811__a = new Array(arguments.length -  0);
while (G__30811__i < G__30811__a.length) {G__30811__a[G__30811__i] = arguments[G__30811__i + 0]; ++G__30811__i;}
  x = new cljs.core.IndexedSeq(G__30811__a,0,null);
} 
return G__30810__delegate.call(this,x);};
G__30810.cljs$lang$maxFixedArity = 0;
G__30810.cljs$lang$applyTo = (function (arglist__30812){
var x = cljs.core.seq(arglist__30812);
return G__30810__delegate(x);
});
G__30810.cljs$core$IFn$_invoke$arity$variadic = G__30810__delegate;
return G__30810;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1507445076257
