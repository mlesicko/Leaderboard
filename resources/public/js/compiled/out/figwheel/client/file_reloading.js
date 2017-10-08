// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27195__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27195__auto__){
return or__27195__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27195__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36299_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36299_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36300 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36301 = null;
var count__36302 = (0);
var i__36303 = (0);
while(true){
if((i__36303 < count__36302)){
var n = cljs.core._nth.call(null,chunk__36301,i__36303);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36304 = seq__36300;
var G__36305 = chunk__36301;
var G__36306 = count__36302;
var G__36307 = (i__36303 + (1));
seq__36300 = G__36304;
chunk__36301 = G__36305;
count__36302 = G__36306;
i__36303 = G__36307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36300);
if(temp__4657__auto__){
var seq__36300__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36300__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36300__$1);
var G__36308 = cljs.core.chunk_rest.call(null,seq__36300__$1);
var G__36309 = c__28034__auto__;
var G__36310 = cljs.core.count.call(null,c__28034__auto__);
var G__36311 = (0);
seq__36300 = G__36308;
chunk__36301 = G__36309;
count__36302 = G__36310;
i__36303 = G__36311;
continue;
} else {
var n = cljs.core.first.call(null,seq__36300__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36312 = cljs.core.next.call(null,seq__36300__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__36300 = G__36312;
chunk__36301 = G__36313;
count__36302 = G__36314;
i__36303 = G__36315;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36325_36333 = cljs.core.seq.call(null,deps);
var chunk__36326_36334 = null;
var count__36327_36335 = (0);
var i__36328_36336 = (0);
while(true){
if((i__36328_36336 < count__36327_36335)){
var dep_36337 = cljs.core._nth.call(null,chunk__36326_36334,i__36328_36336);
topo_sort_helper_STAR_.call(null,dep_36337,(depth + (1)),state);

var G__36338 = seq__36325_36333;
var G__36339 = chunk__36326_36334;
var G__36340 = count__36327_36335;
var G__36341 = (i__36328_36336 + (1));
seq__36325_36333 = G__36338;
chunk__36326_36334 = G__36339;
count__36327_36335 = G__36340;
i__36328_36336 = G__36341;
continue;
} else {
var temp__4657__auto___36342 = cljs.core.seq.call(null,seq__36325_36333);
if(temp__4657__auto___36342){
var seq__36325_36343__$1 = temp__4657__auto___36342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36325_36343__$1)){
var c__28034__auto___36344 = cljs.core.chunk_first.call(null,seq__36325_36343__$1);
var G__36345 = cljs.core.chunk_rest.call(null,seq__36325_36343__$1);
var G__36346 = c__28034__auto___36344;
var G__36347 = cljs.core.count.call(null,c__28034__auto___36344);
var G__36348 = (0);
seq__36325_36333 = G__36345;
chunk__36326_36334 = G__36346;
count__36327_36335 = G__36347;
i__36328_36336 = G__36348;
continue;
} else {
var dep_36349 = cljs.core.first.call(null,seq__36325_36343__$1);
topo_sort_helper_STAR_.call(null,dep_36349,(depth + (1)),state);

var G__36350 = cljs.core.next.call(null,seq__36325_36343__$1);
var G__36351 = null;
var G__36352 = (0);
var G__36353 = (0);
seq__36325_36333 = G__36350;
chunk__36326_36334 = G__36351;
count__36327_36335 = G__36352;
i__36328_36336 = G__36353;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36329){
var vec__36330 = p__36329;
var seq__36331 = cljs.core.seq.call(null,vec__36330);
var first__36332 = cljs.core.first.call(null,seq__36331);
var seq__36331__$1 = cljs.core.next.call(null,seq__36331);
var x = first__36332;
var xs = seq__36331__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36330,seq__36331,first__36332,seq__36331__$1,x,xs,get_deps__$1){
return (function (p1__36316_SHARP_){
return clojure.set.difference.call(null,p1__36316_SHARP_,x);
});})(vec__36330,seq__36331,first__36332,seq__36331__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36354 = cljs.core.seq.call(null,provides);
var chunk__36355 = null;
var count__36356 = (0);
var i__36357 = (0);
while(true){
if((i__36357 < count__36356)){
var prov = cljs.core._nth.call(null,chunk__36355,i__36357);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36358_36366 = cljs.core.seq.call(null,requires);
var chunk__36359_36367 = null;
var count__36360_36368 = (0);
var i__36361_36369 = (0);
while(true){
if((i__36361_36369 < count__36360_36368)){
var req_36370 = cljs.core._nth.call(null,chunk__36359_36367,i__36361_36369);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36370,prov);

var G__36371 = seq__36358_36366;
var G__36372 = chunk__36359_36367;
var G__36373 = count__36360_36368;
var G__36374 = (i__36361_36369 + (1));
seq__36358_36366 = G__36371;
chunk__36359_36367 = G__36372;
count__36360_36368 = G__36373;
i__36361_36369 = G__36374;
continue;
} else {
var temp__4657__auto___36375 = cljs.core.seq.call(null,seq__36358_36366);
if(temp__4657__auto___36375){
var seq__36358_36376__$1 = temp__4657__auto___36375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36358_36376__$1)){
var c__28034__auto___36377 = cljs.core.chunk_first.call(null,seq__36358_36376__$1);
var G__36378 = cljs.core.chunk_rest.call(null,seq__36358_36376__$1);
var G__36379 = c__28034__auto___36377;
var G__36380 = cljs.core.count.call(null,c__28034__auto___36377);
var G__36381 = (0);
seq__36358_36366 = G__36378;
chunk__36359_36367 = G__36379;
count__36360_36368 = G__36380;
i__36361_36369 = G__36381;
continue;
} else {
var req_36382 = cljs.core.first.call(null,seq__36358_36376__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36382,prov);

var G__36383 = cljs.core.next.call(null,seq__36358_36376__$1);
var G__36384 = null;
var G__36385 = (0);
var G__36386 = (0);
seq__36358_36366 = G__36383;
chunk__36359_36367 = G__36384;
count__36360_36368 = G__36385;
i__36361_36369 = G__36386;
continue;
}
} else {
}
}
break;
}

var G__36387 = seq__36354;
var G__36388 = chunk__36355;
var G__36389 = count__36356;
var G__36390 = (i__36357 + (1));
seq__36354 = G__36387;
chunk__36355 = G__36388;
count__36356 = G__36389;
i__36357 = G__36390;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36354);
if(temp__4657__auto__){
var seq__36354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36354__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__36354__$1);
var G__36391 = cljs.core.chunk_rest.call(null,seq__36354__$1);
var G__36392 = c__28034__auto__;
var G__36393 = cljs.core.count.call(null,c__28034__auto__);
var G__36394 = (0);
seq__36354 = G__36391;
chunk__36355 = G__36392;
count__36356 = G__36393;
i__36357 = G__36394;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36354__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36362_36395 = cljs.core.seq.call(null,requires);
var chunk__36363_36396 = null;
var count__36364_36397 = (0);
var i__36365_36398 = (0);
while(true){
if((i__36365_36398 < count__36364_36397)){
var req_36399 = cljs.core._nth.call(null,chunk__36363_36396,i__36365_36398);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36399,prov);

var G__36400 = seq__36362_36395;
var G__36401 = chunk__36363_36396;
var G__36402 = count__36364_36397;
var G__36403 = (i__36365_36398 + (1));
seq__36362_36395 = G__36400;
chunk__36363_36396 = G__36401;
count__36364_36397 = G__36402;
i__36365_36398 = G__36403;
continue;
} else {
var temp__4657__auto___36404__$1 = cljs.core.seq.call(null,seq__36362_36395);
if(temp__4657__auto___36404__$1){
var seq__36362_36405__$1 = temp__4657__auto___36404__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36362_36405__$1)){
var c__28034__auto___36406 = cljs.core.chunk_first.call(null,seq__36362_36405__$1);
var G__36407 = cljs.core.chunk_rest.call(null,seq__36362_36405__$1);
var G__36408 = c__28034__auto___36406;
var G__36409 = cljs.core.count.call(null,c__28034__auto___36406);
var G__36410 = (0);
seq__36362_36395 = G__36407;
chunk__36363_36396 = G__36408;
count__36364_36397 = G__36409;
i__36365_36398 = G__36410;
continue;
} else {
var req_36411 = cljs.core.first.call(null,seq__36362_36405__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36411,prov);

var G__36412 = cljs.core.next.call(null,seq__36362_36405__$1);
var G__36413 = null;
var G__36414 = (0);
var G__36415 = (0);
seq__36362_36395 = G__36412;
chunk__36363_36396 = G__36413;
count__36364_36397 = G__36414;
i__36365_36398 = G__36415;
continue;
}
} else {
}
}
break;
}

var G__36416 = cljs.core.next.call(null,seq__36354__$1);
var G__36417 = null;
var G__36418 = (0);
var G__36419 = (0);
seq__36354 = G__36416;
chunk__36355 = G__36417;
count__36356 = G__36418;
i__36357 = G__36419;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36420_36424 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36421_36425 = null;
var count__36422_36426 = (0);
var i__36423_36427 = (0);
while(true){
if((i__36423_36427 < count__36422_36426)){
var ns_36428 = cljs.core._nth.call(null,chunk__36421_36425,i__36423_36427);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36428);

var G__36429 = seq__36420_36424;
var G__36430 = chunk__36421_36425;
var G__36431 = count__36422_36426;
var G__36432 = (i__36423_36427 + (1));
seq__36420_36424 = G__36429;
chunk__36421_36425 = G__36430;
count__36422_36426 = G__36431;
i__36423_36427 = G__36432;
continue;
} else {
var temp__4657__auto___36433 = cljs.core.seq.call(null,seq__36420_36424);
if(temp__4657__auto___36433){
var seq__36420_36434__$1 = temp__4657__auto___36433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36420_36434__$1)){
var c__28034__auto___36435 = cljs.core.chunk_first.call(null,seq__36420_36434__$1);
var G__36436 = cljs.core.chunk_rest.call(null,seq__36420_36434__$1);
var G__36437 = c__28034__auto___36435;
var G__36438 = cljs.core.count.call(null,c__28034__auto___36435);
var G__36439 = (0);
seq__36420_36424 = G__36436;
chunk__36421_36425 = G__36437;
count__36422_36426 = G__36438;
i__36423_36427 = G__36439;
continue;
} else {
var ns_36440 = cljs.core.first.call(null,seq__36420_36434__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36440);

var G__36441 = cljs.core.next.call(null,seq__36420_36434__$1);
var G__36442 = null;
var G__36443 = (0);
var G__36444 = (0);
seq__36420_36424 = G__36441;
chunk__36421_36425 = G__36442;
count__36422_36426 = G__36443;
i__36423_36427 = G__36444;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27195__auto__ = goog.require__;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36445__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36446__i = 0, G__36446__a = new Array(arguments.length -  0);
while (G__36446__i < G__36446__a.length) {G__36446__a[G__36446__i] = arguments[G__36446__i + 0]; ++G__36446__i;}
  args = new cljs.core.IndexedSeq(G__36446__a,0,null);
} 
return G__36445__delegate.call(this,args);};
G__36445.cljs$lang$maxFixedArity = 0;
G__36445.cljs$lang$applyTo = (function (arglist__36447){
var args = cljs.core.seq(arglist__36447);
return G__36445__delegate(args);
});
G__36445.cljs$core$IFn$_invoke$arity$variadic = G__36445__delegate;
return G__36445;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36448_SHARP_,p2__36449_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36448_SHARP_)].join('')),p2__36449_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36450_SHARP_,p2__36451_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36450_SHARP_)].join(''),p2__36451_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36452 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36452.addCallback(((function (G__36452){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36452))
);

G__36452.addErrback(((function (G__36452){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36452))
);

return G__36452;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36453 = cljs.core._EQ_;
var expr__36454 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36453.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36454))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36453,expr__36454){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36453,expr__36454))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36453,expr__36454){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36456){if((e36456 instanceof Error)){
var e = e36456;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36456;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36453,expr__36454))
} else {
if(cljs.core.truth_(pred__36453.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36454))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36453.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36454))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36453.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36454))){
return ((function (pred__36453,expr__36454){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36457){if((e36457 instanceof Error)){
var e = e36457;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36457;

}
}})());
});
;})(pred__36453,expr__36454))
} else {
return ((function (pred__36453,expr__36454){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36453,expr__36454))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36458,callback){
var map__36459 = p__36458;
var map__36459__$1 = ((((!((map__36459 == null)))?((((map__36459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36459):map__36459);
var file_msg = map__36459__$1;
var request_url = cljs.core.get.call(null,map__36459__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36459,map__36459__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36459,map__36459__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__){
return (function (state_36483){
var state_val_36484 = (state_36483[(1)]);
if((state_val_36484 === (7))){
var inst_36479 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
var statearr_36485_36502 = state_36483__$1;
(statearr_36485_36502[(2)] = inst_36479);

(statearr_36485_36502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (1))){
var state_36483__$1 = state_36483;
var statearr_36486_36503 = state_36483__$1;
(statearr_36486_36503[(2)] = null);

(statearr_36486_36503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (4))){
var inst_36463 = (state_36483[(7)]);
var inst_36463__$1 = (state_36483[(2)]);
var state_36483__$1 = (function (){var statearr_36487 = state_36483;
(statearr_36487[(7)] = inst_36463__$1);

return statearr_36487;
})();
if(cljs.core.truth_(inst_36463__$1)){
var statearr_36488_36504 = state_36483__$1;
(statearr_36488_36504[(1)] = (5));

} else {
var statearr_36489_36505 = state_36483__$1;
(statearr_36489_36505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (6))){
var state_36483__$1 = state_36483;
var statearr_36490_36506 = state_36483__$1;
(statearr_36490_36506[(2)] = null);

(statearr_36490_36506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (3))){
var inst_36481 = (state_36483[(2)]);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36483__$1,inst_36481);
} else {
if((state_val_36484 === (2))){
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36483__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36484 === (11))){
var inst_36475 = (state_36483[(2)]);
var state_36483__$1 = (function (){var statearr_36491 = state_36483;
(statearr_36491[(8)] = inst_36475);

return statearr_36491;
})();
var statearr_36492_36507 = state_36483__$1;
(statearr_36492_36507[(2)] = null);

(statearr_36492_36507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (9))){
var inst_36467 = (state_36483[(9)]);
var inst_36469 = (state_36483[(10)]);
var inst_36471 = inst_36469.call(null,inst_36467);
var state_36483__$1 = state_36483;
var statearr_36493_36508 = state_36483__$1;
(statearr_36493_36508[(2)] = inst_36471);

(statearr_36493_36508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (5))){
var inst_36463 = (state_36483[(7)]);
var inst_36465 = figwheel.client.file_reloading.blocking_load.call(null,inst_36463);
var state_36483__$1 = state_36483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36483__$1,(8),inst_36465);
} else {
if((state_val_36484 === (10))){
var inst_36467 = (state_36483[(9)]);
var inst_36473 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36467);
var state_36483__$1 = state_36483;
var statearr_36494_36509 = state_36483__$1;
(statearr_36494_36509[(2)] = inst_36473);

(statearr_36494_36509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36484 === (8))){
var inst_36463 = (state_36483[(7)]);
var inst_36469 = (state_36483[(10)]);
var inst_36467 = (state_36483[(2)]);
var inst_36468 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36469__$1 = cljs.core.get.call(null,inst_36468,inst_36463);
var state_36483__$1 = (function (){var statearr_36495 = state_36483;
(statearr_36495[(9)] = inst_36467);

(statearr_36495[(10)] = inst_36469__$1);

return statearr_36495;
})();
if(cljs.core.truth_(inst_36469__$1)){
var statearr_36496_36510 = state_36483__$1;
(statearr_36496_36510[(1)] = (9));

} else {
var statearr_36497_36511 = state_36483__$1;
(statearr_36497_36511[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31469__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31382__auto__ = null;
var figwheel$client$file_reloading$state_machine__31382__auto____0 = (function (){
var statearr_36498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36498[(0)] = figwheel$client$file_reloading$state_machine__31382__auto__);

(statearr_36498[(1)] = (1));

return statearr_36498;
});
var figwheel$client$file_reloading$state_machine__31382__auto____1 = (function (state_36483){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_36483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e36499){if((e36499 instanceof Object)){
var ex__31385__auto__ = e36499;
var statearr_36500_36512 = state_36483;
(statearr_36500_36512[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36513 = state_36483;
state_36483 = G__36513;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31382__auto__ = function(state_36483){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31382__auto____1.call(this,state_36483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31382__auto____0;
figwheel$client$file_reloading$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31382__auto____1;
return figwheel$client$file_reloading$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__))
})();
var state__31471__auto__ = (function (){var statearr_36501 = f__31470__auto__.call(null);
(statearr_36501[(6)] = c__31469__auto__);

return statearr_36501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__))
);

return c__31469__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36514,callback){
var map__36515 = p__36514;
var map__36515__$1 = ((((!((map__36515 == null)))?((((map__36515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36515):map__36515);
var file_msg = map__36515__$1;
var namespace = cljs.core.get.call(null,map__36515__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36515,map__36515__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36515,map__36515__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36517){
var map__36518 = p__36517;
var map__36518__$1 = ((((!((map__36518 == null)))?((((map__36518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36518):map__36518);
var file_msg = map__36518__$1;
var namespace = cljs.core.get.call(null,map__36518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36520){
var map__36521 = p__36520;
var map__36521__$1 = ((((!((map__36521 == null)))?((((map__36521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36521):map__36521);
var file_msg = map__36521__$1;
var namespace = cljs.core.get.call(null,map__36521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27183__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27183__auto__){
var or__27195__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
var or__27195__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27195__auto____$1)){
return or__27195__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27183__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36523,callback){
var map__36524 = p__36523;
var map__36524__$1 = ((((!((map__36524 == null)))?((((map__36524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36524):map__36524);
var file_msg = map__36524__$1;
var request_url = cljs.core.get.call(null,map__36524__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31469__auto___36574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___36574,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___36574,out){
return (function (state_36559){
var state_val_36560 = (state_36559[(1)]);
if((state_val_36560 === (1))){
var inst_36533 = cljs.core.seq.call(null,files);
var inst_36534 = cljs.core.first.call(null,inst_36533);
var inst_36535 = cljs.core.next.call(null,inst_36533);
var inst_36536 = files;
var state_36559__$1 = (function (){var statearr_36561 = state_36559;
(statearr_36561[(7)] = inst_36535);

(statearr_36561[(8)] = inst_36534);

(statearr_36561[(9)] = inst_36536);

return statearr_36561;
})();
var statearr_36562_36575 = state_36559__$1;
(statearr_36562_36575[(2)] = null);

(statearr_36562_36575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (2))){
var inst_36536 = (state_36559[(9)]);
var inst_36542 = (state_36559[(10)]);
var inst_36541 = cljs.core.seq.call(null,inst_36536);
var inst_36542__$1 = cljs.core.first.call(null,inst_36541);
var inst_36543 = cljs.core.next.call(null,inst_36541);
var inst_36544 = (inst_36542__$1 == null);
var inst_36545 = cljs.core.not.call(null,inst_36544);
var state_36559__$1 = (function (){var statearr_36563 = state_36559;
(statearr_36563[(11)] = inst_36543);

(statearr_36563[(10)] = inst_36542__$1);

return statearr_36563;
})();
if(inst_36545){
var statearr_36564_36576 = state_36559__$1;
(statearr_36564_36576[(1)] = (4));

} else {
var statearr_36565_36577 = state_36559__$1;
(statearr_36565_36577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (3))){
var inst_36557 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36559__$1,inst_36557);
} else {
if((state_val_36560 === (4))){
var inst_36542 = (state_36559[(10)]);
var inst_36547 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36542);
var state_36559__$1 = state_36559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36559__$1,(7),inst_36547);
} else {
if((state_val_36560 === (5))){
var inst_36553 = cljs.core.async.close_BANG_.call(null,out);
var state_36559__$1 = state_36559;
var statearr_36566_36578 = state_36559__$1;
(statearr_36566_36578[(2)] = inst_36553);

(statearr_36566_36578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (6))){
var inst_36555 = (state_36559[(2)]);
var state_36559__$1 = state_36559;
var statearr_36567_36579 = state_36559__$1;
(statearr_36567_36579[(2)] = inst_36555);

(statearr_36567_36579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36560 === (7))){
var inst_36543 = (state_36559[(11)]);
var inst_36549 = (state_36559[(2)]);
var inst_36550 = cljs.core.async.put_BANG_.call(null,out,inst_36549);
var inst_36536 = inst_36543;
var state_36559__$1 = (function (){var statearr_36568 = state_36559;
(statearr_36568[(12)] = inst_36550);

(statearr_36568[(9)] = inst_36536);

return statearr_36568;
})();
var statearr_36569_36580 = state_36559__$1;
(statearr_36569_36580[(2)] = null);

(statearr_36569_36580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31469__auto___36574,out))
;
return ((function (switch__31381__auto__,c__31469__auto___36574,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto____0 = (function (){
var statearr_36570 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36570[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto__);

(statearr_36570[(1)] = (1));

return statearr_36570;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto____1 = (function (state_36559){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_36559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e36571){if((e36571 instanceof Object)){
var ex__31385__auto__ = e36571;
var statearr_36572_36581 = state_36559;
(statearr_36572_36581[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36582 = state_36559;
state_36559 = G__36582;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto__ = function(state_36559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto____1.call(this,state_36559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___36574,out))
})();
var state__31471__auto__ = (function (){var statearr_36573 = f__31470__auto__.call(null);
(statearr_36573[(6)] = c__31469__auto___36574);

return statearr_36573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___36574,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36583,opts){
var map__36584 = p__36583;
var map__36584__$1 = ((((!((map__36584 == null)))?((((map__36584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36584):map__36584);
var eval_body = cljs.core.get.call(null,map__36584__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27183__auto__ = eval_body;
if(cljs.core.truth_(and__27183__auto__)){
return typeof eval_body === 'string';
} else {
return and__27183__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36586){var e = e36586;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36587_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36587_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36588){
var vec__36589 = p__36588;
var k = cljs.core.nth.call(null,vec__36589,(0),null);
var v = cljs.core.nth.call(null,vec__36589,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36592){
var vec__36593 = p__36592;
var k = cljs.core.nth.call(null,vec__36593,(0),null);
var v = cljs.core.nth.call(null,vec__36593,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36599,p__36600){
var map__36601 = p__36599;
var map__36601__$1 = ((((!((map__36601 == null)))?((((map__36601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36601):map__36601);
var opts = map__36601__$1;
var before_jsload = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36601__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36602 = p__36600;
var map__36602__$1 = ((((!((map__36602 == null)))?((((map__36602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36602):map__36602);
var msg = map__36602__$1;
var files = cljs.core.get.call(null,map__36602__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36602__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36602__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36756){
var state_val_36757 = (state_36756[(1)]);
if((state_val_36757 === (7))){
var inst_36617 = (state_36756[(7)]);
var inst_36616 = (state_36756[(8)]);
var inst_36619 = (state_36756[(9)]);
var inst_36618 = (state_36756[(10)]);
var inst_36624 = cljs.core._nth.call(null,inst_36617,inst_36619);
var inst_36625 = figwheel.client.file_reloading.eval_body.call(null,inst_36624,opts);
var inst_36626 = (inst_36619 + (1));
var tmp36758 = inst_36617;
var tmp36759 = inst_36616;
var tmp36760 = inst_36618;
var inst_36616__$1 = tmp36759;
var inst_36617__$1 = tmp36758;
var inst_36618__$1 = tmp36760;
var inst_36619__$1 = inst_36626;
var state_36756__$1 = (function (){var statearr_36761 = state_36756;
(statearr_36761[(7)] = inst_36617__$1);

(statearr_36761[(8)] = inst_36616__$1);

(statearr_36761[(11)] = inst_36625);

(statearr_36761[(9)] = inst_36619__$1);

(statearr_36761[(10)] = inst_36618__$1);

return statearr_36761;
})();
var statearr_36762_36845 = state_36756__$1;
(statearr_36762_36845[(2)] = null);

(statearr_36762_36845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (20))){
var inst_36659 = (state_36756[(12)]);
var inst_36667 = figwheel.client.file_reloading.sort_files.call(null,inst_36659);
var state_36756__$1 = state_36756;
var statearr_36763_36846 = state_36756__$1;
(statearr_36763_36846[(2)] = inst_36667);

(statearr_36763_36846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (27))){
var state_36756__$1 = state_36756;
var statearr_36764_36847 = state_36756__$1;
(statearr_36764_36847[(2)] = null);

(statearr_36764_36847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (1))){
var inst_36608 = (state_36756[(13)]);
var inst_36605 = before_jsload.call(null,files);
var inst_36606 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36607 = (function (){return ((function (inst_36608,inst_36605,inst_36606,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36596_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36596_SHARP_);
});
;})(inst_36608,inst_36605,inst_36606,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36608__$1 = cljs.core.filter.call(null,inst_36607,files);
var inst_36609 = cljs.core.not_empty.call(null,inst_36608__$1);
var state_36756__$1 = (function (){var statearr_36765 = state_36756;
(statearr_36765[(14)] = inst_36605);

(statearr_36765[(15)] = inst_36606);

(statearr_36765[(13)] = inst_36608__$1);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36609)){
var statearr_36766_36848 = state_36756__$1;
(statearr_36766_36848[(1)] = (2));

} else {
var statearr_36767_36849 = state_36756__$1;
(statearr_36767_36849[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (24))){
var state_36756__$1 = state_36756;
var statearr_36768_36850 = state_36756__$1;
(statearr_36768_36850[(2)] = null);

(statearr_36768_36850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (39))){
var inst_36709 = (state_36756[(16)]);
var state_36756__$1 = state_36756;
var statearr_36769_36851 = state_36756__$1;
(statearr_36769_36851[(2)] = inst_36709);

(statearr_36769_36851[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (46))){
var inst_36751 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36770_36852 = state_36756__$1;
(statearr_36770_36852[(2)] = inst_36751);

(statearr_36770_36852[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (4))){
var inst_36653 = (state_36756[(2)]);
var inst_36654 = cljs.core.List.EMPTY;
var inst_36655 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36654);
var inst_36656 = (function (){return ((function (inst_36653,inst_36654,inst_36655,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36597_SHARP_){
var and__27183__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36597_SHARP_);
if(cljs.core.truth_(and__27183__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36597_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36597_SHARP_)));
} else {
return and__27183__auto__;
}
});
;})(inst_36653,inst_36654,inst_36655,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36657 = cljs.core.filter.call(null,inst_36656,files);
var inst_36658 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36659 = cljs.core.concat.call(null,inst_36657,inst_36658);
var state_36756__$1 = (function (){var statearr_36771 = state_36756;
(statearr_36771[(17)] = inst_36653);

(statearr_36771[(18)] = inst_36655);

(statearr_36771[(12)] = inst_36659);

return statearr_36771;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36772_36853 = state_36756__$1;
(statearr_36772_36853[(1)] = (16));

} else {
var statearr_36773_36854 = state_36756__$1;
(statearr_36773_36854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (15))){
var inst_36643 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36774_36855 = state_36756__$1;
(statearr_36774_36855[(2)] = inst_36643);

(statearr_36774_36855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (21))){
var inst_36669 = (state_36756[(19)]);
var inst_36669__$1 = (state_36756[(2)]);
var inst_36670 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36669__$1);
var state_36756__$1 = (function (){var statearr_36775 = state_36756;
(statearr_36775[(19)] = inst_36669__$1);

return statearr_36775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36756__$1,(22),inst_36670);
} else {
if((state_val_36757 === (31))){
var inst_36754 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36756__$1,inst_36754);
} else {
if((state_val_36757 === (32))){
var inst_36709 = (state_36756[(16)]);
var inst_36714 = inst_36709.cljs$lang$protocol_mask$partition0$;
var inst_36715 = (inst_36714 & (64));
var inst_36716 = inst_36709.cljs$core$ISeq$;
var inst_36717 = (cljs.core.PROTOCOL_SENTINEL === inst_36716);
var inst_36718 = (inst_36715) || (inst_36717);
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36718)){
var statearr_36776_36856 = state_36756__$1;
(statearr_36776_36856[(1)] = (35));

} else {
var statearr_36777_36857 = state_36756__$1;
(statearr_36777_36857[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (40))){
var inst_36731 = (state_36756[(20)]);
var inst_36730 = (state_36756[(2)]);
var inst_36731__$1 = cljs.core.get.call(null,inst_36730,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36732 = cljs.core.get.call(null,inst_36730,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36733 = cljs.core.not_empty.call(null,inst_36731__$1);
var state_36756__$1 = (function (){var statearr_36778 = state_36756;
(statearr_36778[(20)] = inst_36731__$1);

(statearr_36778[(21)] = inst_36732);

return statearr_36778;
})();
if(cljs.core.truth_(inst_36733)){
var statearr_36779_36858 = state_36756__$1;
(statearr_36779_36858[(1)] = (41));

} else {
var statearr_36780_36859 = state_36756__$1;
(statearr_36780_36859[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (33))){
var state_36756__$1 = state_36756;
var statearr_36781_36860 = state_36756__$1;
(statearr_36781_36860[(2)] = false);

(statearr_36781_36860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (13))){
var inst_36629 = (state_36756[(22)]);
var inst_36633 = cljs.core.chunk_first.call(null,inst_36629);
var inst_36634 = cljs.core.chunk_rest.call(null,inst_36629);
var inst_36635 = cljs.core.count.call(null,inst_36633);
var inst_36616 = inst_36634;
var inst_36617 = inst_36633;
var inst_36618 = inst_36635;
var inst_36619 = (0);
var state_36756__$1 = (function (){var statearr_36782 = state_36756;
(statearr_36782[(7)] = inst_36617);

(statearr_36782[(8)] = inst_36616);

(statearr_36782[(9)] = inst_36619);

(statearr_36782[(10)] = inst_36618);

return statearr_36782;
})();
var statearr_36783_36861 = state_36756__$1;
(statearr_36783_36861[(2)] = null);

(statearr_36783_36861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (22))){
var inst_36669 = (state_36756[(19)]);
var inst_36673 = (state_36756[(23)]);
var inst_36677 = (state_36756[(24)]);
var inst_36672 = (state_36756[(25)]);
var inst_36672__$1 = (state_36756[(2)]);
var inst_36673__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36672__$1);
var inst_36674 = (function (){var all_files = inst_36669;
var res_SINGLEQUOTE_ = inst_36672__$1;
var res = inst_36673__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36669,inst_36673,inst_36677,inst_36672,inst_36672__$1,inst_36673__$1,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36598_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36598_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36669,inst_36673,inst_36677,inst_36672,inst_36672__$1,inst_36673__$1,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36675 = cljs.core.filter.call(null,inst_36674,inst_36672__$1);
var inst_36676 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36677__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36676);
var inst_36678 = cljs.core.not_empty.call(null,inst_36677__$1);
var state_36756__$1 = (function (){var statearr_36784 = state_36756;
(statearr_36784[(23)] = inst_36673__$1);

(statearr_36784[(24)] = inst_36677__$1);

(statearr_36784[(26)] = inst_36675);

(statearr_36784[(25)] = inst_36672__$1);

return statearr_36784;
})();
if(cljs.core.truth_(inst_36678)){
var statearr_36785_36862 = state_36756__$1;
(statearr_36785_36862[(1)] = (23));

} else {
var statearr_36786_36863 = state_36756__$1;
(statearr_36786_36863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (36))){
var state_36756__$1 = state_36756;
var statearr_36787_36864 = state_36756__$1;
(statearr_36787_36864[(2)] = false);

(statearr_36787_36864[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (41))){
var inst_36731 = (state_36756[(20)]);
var inst_36735 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36736 = cljs.core.map.call(null,inst_36735,inst_36731);
var inst_36737 = cljs.core.pr_str.call(null,inst_36736);
var inst_36738 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36737)].join('');
var inst_36739 = figwheel.client.utils.log.call(null,inst_36738);
var state_36756__$1 = state_36756;
var statearr_36788_36865 = state_36756__$1;
(statearr_36788_36865[(2)] = inst_36739);

(statearr_36788_36865[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (43))){
var inst_36732 = (state_36756[(21)]);
var inst_36742 = (state_36756[(2)]);
var inst_36743 = cljs.core.not_empty.call(null,inst_36732);
var state_36756__$1 = (function (){var statearr_36789 = state_36756;
(statearr_36789[(27)] = inst_36742);

return statearr_36789;
})();
if(cljs.core.truth_(inst_36743)){
var statearr_36790_36866 = state_36756__$1;
(statearr_36790_36866[(1)] = (44));

} else {
var statearr_36791_36867 = state_36756__$1;
(statearr_36791_36867[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (29))){
var inst_36669 = (state_36756[(19)]);
var inst_36709 = (state_36756[(16)]);
var inst_36673 = (state_36756[(23)]);
var inst_36677 = (state_36756[(24)]);
var inst_36675 = (state_36756[(26)]);
var inst_36672 = (state_36756[(25)]);
var inst_36705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36708 = (function (){var all_files = inst_36669;
var res_SINGLEQUOTE_ = inst_36672;
var res = inst_36673;
var files_not_loaded = inst_36675;
var dependencies_that_loaded = inst_36677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36709,inst_36673,inst_36677,inst_36675,inst_36672,inst_36705,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36707){
var map__36792 = p__36707;
var map__36792__$1 = ((((!((map__36792 == null)))?((((map__36792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36792):map__36792);
var namespace = cljs.core.get.call(null,map__36792__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36709,inst_36673,inst_36677,inst_36675,inst_36672,inst_36705,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36709__$1 = cljs.core.group_by.call(null,inst_36708,inst_36675);
var inst_36711 = (inst_36709__$1 == null);
var inst_36712 = cljs.core.not.call(null,inst_36711);
var state_36756__$1 = (function (){var statearr_36794 = state_36756;
(statearr_36794[(16)] = inst_36709__$1);

(statearr_36794[(28)] = inst_36705);

return statearr_36794;
})();
if(inst_36712){
var statearr_36795_36868 = state_36756__$1;
(statearr_36795_36868[(1)] = (32));

} else {
var statearr_36796_36869 = state_36756__$1;
(statearr_36796_36869[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (44))){
var inst_36732 = (state_36756[(21)]);
var inst_36745 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36732);
var inst_36746 = cljs.core.pr_str.call(null,inst_36745);
var inst_36747 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36746)].join('');
var inst_36748 = figwheel.client.utils.log.call(null,inst_36747);
var state_36756__$1 = state_36756;
var statearr_36797_36870 = state_36756__$1;
(statearr_36797_36870[(2)] = inst_36748);

(statearr_36797_36870[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (6))){
var inst_36650 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36798_36871 = state_36756__$1;
(statearr_36798_36871[(2)] = inst_36650);

(statearr_36798_36871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (28))){
var inst_36675 = (state_36756[(26)]);
var inst_36702 = (state_36756[(2)]);
var inst_36703 = cljs.core.not_empty.call(null,inst_36675);
var state_36756__$1 = (function (){var statearr_36799 = state_36756;
(statearr_36799[(29)] = inst_36702);

return statearr_36799;
})();
if(cljs.core.truth_(inst_36703)){
var statearr_36800_36872 = state_36756__$1;
(statearr_36800_36872[(1)] = (29));

} else {
var statearr_36801_36873 = state_36756__$1;
(statearr_36801_36873[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (25))){
var inst_36673 = (state_36756[(23)]);
var inst_36689 = (state_36756[(2)]);
var inst_36690 = cljs.core.not_empty.call(null,inst_36673);
var state_36756__$1 = (function (){var statearr_36802 = state_36756;
(statearr_36802[(30)] = inst_36689);

return statearr_36802;
})();
if(cljs.core.truth_(inst_36690)){
var statearr_36803_36874 = state_36756__$1;
(statearr_36803_36874[(1)] = (26));

} else {
var statearr_36804_36875 = state_36756__$1;
(statearr_36804_36875[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (34))){
var inst_36725 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36725)){
var statearr_36805_36876 = state_36756__$1;
(statearr_36805_36876[(1)] = (38));

} else {
var statearr_36806_36877 = state_36756__$1;
(statearr_36806_36877[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (17))){
var state_36756__$1 = state_36756;
var statearr_36807_36878 = state_36756__$1;
(statearr_36807_36878[(2)] = recompile_dependents);

(statearr_36807_36878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (3))){
var state_36756__$1 = state_36756;
var statearr_36808_36879 = state_36756__$1;
(statearr_36808_36879[(2)] = null);

(statearr_36808_36879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (12))){
var inst_36646 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36809_36880 = state_36756__$1;
(statearr_36809_36880[(2)] = inst_36646);

(statearr_36809_36880[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (2))){
var inst_36608 = (state_36756[(13)]);
var inst_36615 = cljs.core.seq.call(null,inst_36608);
var inst_36616 = inst_36615;
var inst_36617 = null;
var inst_36618 = (0);
var inst_36619 = (0);
var state_36756__$1 = (function (){var statearr_36810 = state_36756;
(statearr_36810[(7)] = inst_36617);

(statearr_36810[(8)] = inst_36616);

(statearr_36810[(9)] = inst_36619);

(statearr_36810[(10)] = inst_36618);

return statearr_36810;
})();
var statearr_36811_36881 = state_36756__$1;
(statearr_36811_36881[(2)] = null);

(statearr_36811_36881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (23))){
var inst_36669 = (state_36756[(19)]);
var inst_36673 = (state_36756[(23)]);
var inst_36677 = (state_36756[(24)]);
var inst_36675 = (state_36756[(26)]);
var inst_36672 = (state_36756[(25)]);
var inst_36680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36682 = (function (){var all_files = inst_36669;
var res_SINGLEQUOTE_ = inst_36672;
var res = inst_36673;
var files_not_loaded = inst_36675;
var dependencies_that_loaded = inst_36677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36673,inst_36677,inst_36675,inst_36672,inst_36680,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36681){
var map__36812 = p__36681;
var map__36812__$1 = ((((!((map__36812 == null)))?((((map__36812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36812):map__36812);
var request_url = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36673,inst_36677,inst_36675,inst_36672,inst_36680,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36683 = cljs.core.reverse.call(null,inst_36677);
var inst_36684 = cljs.core.map.call(null,inst_36682,inst_36683);
var inst_36685 = cljs.core.pr_str.call(null,inst_36684);
var inst_36686 = figwheel.client.utils.log.call(null,inst_36685);
var state_36756__$1 = (function (){var statearr_36814 = state_36756;
(statearr_36814[(31)] = inst_36680);

return statearr_36814;
})();
var statearr_36815_36882 = state_36756__$1;
(statearr_36815_36882[(2)] = inst_36686);

(statearr_36815_36882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (35))){
var state_36756__$1 = state_36756;
var statearr_36816_36883 = state_36756__$1;
(statearr_36816_36883[(2)] = true);

(statearr_36816_36883[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (19))){
var inst_36659 = (state_36756[(12)]);
var inst_36665 = figwheel.client.file_reloading.expand_files.call(null,inst_36659);
var state_36756__$1 = state_36756;
var statearr_36817_36884 = state_36756__$1;
(statearr_36817_36884[(2)] = inst_36665);

(statearr_36817_36884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (11))){
var state_36756__$1 = state_36756;
var statearr_36818_36885 = state_36756__$1;
(statearr_36818_36885[(2)] = null);

(statearr_36818_36885[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (9))){
var inst_36648 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36819_36886 = state_36756__$1;
(statearr_36819_36886[(2)] = inst_36648);

(statearr_36819_36886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (5))){
var inst_36619 = (state_36756[(9)]);
var inst_36618 = (state_36756[(10)]);
var inst_36621 = (inst_36619 < inst_36618);
var inst_36622 = inst_36621;
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36622)){
var statearr_36820_36887 = state_36756__$1;
(statearr_36820_36887[(1)] = (7));

} else {
var statearr_36821_36888 = state_36756__$1;
(statearr_36821_36888[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (14))){
var inst_36629 = (state_36756[(22)]);
var inst_36638 = cljs.core.first.call(null,inst_36629);
var inst_36639 = figwheel.client.file_reloading.eval_body.call(null,inst_36638,opts);
var inst_36640 = cljs.core.next.call(null,inst_36629);
var inst_36616 = inst_36640;
var inst_36617 = null;
var inst_36618 = (0);
var inst_36619 = (0);
var state_36756__$1 = (function (){var statearr_36822 = state_36756;
(statearr_36822[(32)] = inst_36639);

(statearr_36822[(7)] = inst_36617);

(statearr_36822[(8)] = inst_36616);

(statearr_36822[(9)] = inst_36619);

(statearr_36822[(10)] = inst_36618);

return statearr_36822;
})();
var statearr_36823_36889 = state_36756__$1;
(statearr_36823_36889[(2)] = null);

(statearr_36823_36889[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (45))){
var state_36756__$1 = state_36756;
var statearr_36824_36890 = state_36756__$1;
(statearr_36824_36890[(2)] = null);

(statearr_36824_36890[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (26))){
var inst_36669 = (state_36756[(19)]);
var inst_36673 = (state_36756[(23)]);
var inst_36677 = (state_36756[(24)]);
var inst_36675 = (state_36756[(26)]);
var inst_36672 = (state_36756[(25)]);
var inst_36692 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36694 = (function (){var all_files = inst_36669;
var res_SINGLEQUOTE_ = inst_36672;
var res = inst_36673;
var files_not_loaded = inst_36675;
var dependencies_that_loaded = inst_36677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36673,inst_36677,inst_36675,inst_36672,inst_36692,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36693){
var map__36825 = p__36693;
var map__36825__$1 = ((((!((map__36825 == null)))?((((map__36825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36825):map__36825);
var namespace = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36673,inst_36677,inst_36675,inst_36672,inst_36692,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36695 = cljs.core.map.call(null,inst_36694,inst_36673);
var inst_36696 = cljs.core.pr_str.call(null,inst_36695);
var inst_36697 = figwheel.client.utils.log.call(null,inst_36696);
var inst_36698 = (function (){var all_files = inst_36669;
var res_SINGLEQUOTE_ = inst_36672;
var res = inst_36673;
var files_not_loaded = inst_36675;
var dependencies_that_loaded = inst_36677;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36673,inst_36677,inst_36675,inst_36672,inst_36692,inst_36694,inst_36695,inst_36696,inst_36697,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36669,inst_36673,inst_36677,inst_36675,inst_36672,inst_36692,inst_36694,inst_36695,inst_36696,inst_36697,state_val_36757,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36699 = setTimeout(inst_36698,(10));
var state_36756__$1 = (function (){var statearr_36827 = state_36756;
(statearr_36827[(33)] = inst_36697);

(statearr_36827[(34)] = inst_36692);

return statearr_36827;
})();
var statearr_36828_36891 = state_36756__$1;
(statearr_36828_36891[(2)] = inst_36699);

(statearr_36828_36891[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (16))){
var state_36756__$1 = state_36756;
var statearr_36829_36892 = state_36756__$1;
(statearr_36829_36892[(2)] = reload_dependents);

(statearr_36829_36892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (38))){
var inst_36709 = (state_36756[(16)]);
var inst_36727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36709);
var state_36756__$1 = state_36756;
var statearr_36830_36893 = state_36756__$1;
(statearr_36830_36893[(2)] = inst_36727);

(statearr_36830_36893[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (30))){
var state_36756__$1 = state_36756;
var statearr_36831_36894 = state_36756__$1;
(statearr_36831_36894[(2)] = null);

(statearr_36831_36894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (10))){
var inst_36629 = (state_36756[(22)]);
var inst_36631 = cljs.core.chunked_seq_QMARK_.call(null,inst_36629);
var state_36756__$1 = state_36756;
if(inst_36631){
var statearr_36832_36895 = state_36756__$1;
(statearr_36832_36895[(1)] = (13));

} else {
var statearr_36833_36896 = state_36756__$1;
(statearr_36833_36896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (18))){
var inst_36663 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
if(cljs.core.truth_(inst_36663)){
var statearr_36834_36897 = state_36756__$1;
(statearr_36834_36897[(1)] = (19));

} else {
var statearr_36835_36898 = state_36756__$1;
(statearr_36835_36898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (42))){
var state_36756__$1 = state_36756;
var statearr_36836_36899 = state_36756__$1;
(statearr_36836_36899[(2)] = null);

(statearr_36836_36899[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (37))){
var inst_36722 = (state_36756[(2)]);
var state_36756__$1 = state_36756;
var statearr_36837_36900 = state_36756__$1;
(statearr_36837_36900[(2)] = inst_36722);

(statearr_36837_36900[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36757 === (8))){
var inst_36616 = (state_36756[(8)]);
var inst_36629 = (state_36756[(22)]);
var inst_36629__$1 = cljs.core.seq.call(null,inst_36616);
var state_36756__$1 = (function (){var statearr_36838 = state_36756;
(statearr_36838[(22)] = inst_36629__$1);

return statearr_36838;
})();
if(inst_36629__$1){
var statearr_36839_36901 = state_36756__$1;
(statearr_36839_36901[(1)] = (10));

} else {
var statearr_36840_36902 = state_36756__$1;
(statearr_36840_36902[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31381__auto__,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto____0 = (function (){
var statearr_36841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36841[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto__);

(statearr_36841[(1)] = (1));

return statearr_36841;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto____1 = (function (state_36756){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_36756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e36842){if((e36842 instanceof Object)){
var ex__31385__auto__ = e36842;
var statearr_36843_36903 = state_36756;
(statearr_36843_36903[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_36756;
state_36756 = G__36904;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto__ = function(state_36756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto____1.call(this,state_36756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31471__auto__ = (function (){var statearr_36844 = f__31470__auto__.call(null);
(statearr_36844[(6)] = c__31469__auto__);

return statearr_36844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__,map__36601,map__36601__$1,opts,before_jsload,on_jsload,reload_dependents,map__36602,map__36602__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31469__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36907,link){
var map__36908 = p__36907;
var map__36908__$1 = ((((!((map__36908 == null)))?((((map__36908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36908):map__36908);
var file = cljs.core.get.call(null,map__36908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36908,map__36908__$1,file){
return (function (p1__36905_SHARP_,p2__36906_SHARP_){
if(cljs.core._EQ_.call(null,p1__36905_SHARP_,p2__36906_SHARP_)){
return p1__36905_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36908,map__36908__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36911){
var map__36912 = p__36911;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var match_length = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36910_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36910_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36914_SHARP_,p2__36915_SHARP_){
return cljs.core.assoc.call(null,p1__36914_SHARP_,cljs.core.get.call(null,p2__36915_SHARP_,key),p2__36915_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36916 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36916);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36916);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36917,p__36918){
var map__36919 = p__36917;
var map__36919__$1 = ((((!((map__36919 == null)))?((((map__36919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36919):map__36919);
var on_cssload = cljs.core.get.call(null,map__36919__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36920 = p__36918;
var map__36920__$1 = ((((!((map__36920 == null)))?((((map__36920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36920):map__36920);
var files_msg = map__36920__$1;
var files = cljs.core.get.call(null,map__36920__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1507441591157
