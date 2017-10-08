// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38009){if((e38009 instanceof Error)){
var e = e38009;
return "Error: Unable to stringify";
} else {
throw e38009;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38012 = arguments.length;
switch (G__38012) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38010_SHARP_){
if(typeof p1__38010_SHARP_ === 'string'){
return p1__38010_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38010_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38015 = arguments.length;
var i__28365__auto___38016 = (0);
while(true){
if((i__28365__auto___38016 < len__28364__auto___38015)){
args__28371__auto__.push((arguments[i__28365__auto___38016]));

var G__38017 = (i__28365__auto___38016 + (1));
i__28365__auto___38016 = G__38017;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38014){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38014));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38019 = arguments.length;
var i__28365__auto___38020 = (0);
while(true){
if((i__28365__auto___38020 < len__28364__auto___38019)){
args__28371__auto__.push((arguments[i__28365__auto___38020]));

var G__38021 = (i__28365__auto___38020 + (1));
i__28365__auto___38020 = G__38021;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38018){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38018));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38022){
var map__38023 = p__38022;
var map__38023__$1 = ((((!((map__38023 == null)))?((((map__38023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38023):map__38023);
var message = cljs.core.get.call(null,map__38023__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38023__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27195__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27183__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27183__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27183__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31469__auto___38102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___38102,ch){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___38102,ch){
return (function (state_38074){
var state_val_38075 = (state_38074[(1)]);
if((state_val_38075 === (7))){
var inst_38070 = (state_38074[(2)]);
var state_38074__$1 = state_38074;
var statearr_38076_38103 = state_38074__$1;
(statearr_38076_38103[(2)] = inst_38070);

(statearr_38076_38103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (1))){
var state_38074__$1 = state_38074;
var statearr_38077_38104 = state_38074__$1;
(statearr_38077_38104[(2)] = null);

(statearr_38077_38104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (4))){
var inst_38027 = (state_38074[(7)]);
var inst_38027__$1 = (state_38074[(2)]);
var state_38074__$1 = (function (){var statearr_38078 = state_38074;
(statearr_38078[(7)] = inst_38027__$1);

return statearr_38078;
})();
if(cljs.core.truth_(inst_38027__$1)){
var statearr_38079_38105 = state_38074__$1;
(statearr_38079_38105[(1)] = (5));

} else {
var statearr_38080_38106 = state_38074__$1;
(statearr_38080_38106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (15))){
var inst_38034 = (state_38074[(8)]);
var inst_38049 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38034);
var inst_38050 = cljs.core.first.call(null,inst_38049);
var inst_38051 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38050);
var inst_38052 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38051)].join('');
var inst_38053 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38052);
var state_38074__$1 = state_38074;
var statearr_38081_38107 = state_38074__$1;
(statearr_38081_38107[(2)] = inst_38053);

(statearr_38081_38107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (13))){
var inst_38058 = (state_38074[(2)]);
var state_38074__$1 = state_38074;
var statearr_38082_38108 = state_38074__$1;
(statearr_38082_38108[(2)] = inst_38058);

(statearr_38082_38108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (6))){
var state_38074__$1 = state_38074;
var statearr_38083_38109 = state_38074__$1;
(statearr_38083_38109[(2)] = null);

(statearr_38083_38109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (17))){
var inst_38056 = (state_38074[(2)]);
var state_38074__$1 = state_38074;
var statearr_38084_38110 = state_38074__$1;
(statearr_38084_38110[(2)] = inst_38056);

(statearr_38084_38110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (3))){
var inst_38072 = (state_38074[(2)]);
var state_38074__$1 = state_38074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38074__$1,inst_38072);
} else {
if((state_val_38075 === (12))){
var inst_38033 = (state_38074[(9)]);
var inst_38047 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38033,opts);
var state_38074__$1 = state_38074;
if(cljs.core.truth_(inst_38047)){
var statearr_38085_38111 = state_38074__$1;
(statearr_38085_38111[(1)] = (15));

} else {
var statearr_38086_38112 = state_38074__$1;
(statearr_38086_38112[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (2))){
var state_38074__$1 = state_38074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38074__$1,(4),ch);
} else {
if((state_val_38075 === (11))){
var inst_38034 = (state_38074[(8)]);
var inst_38039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38040 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38034);
var inst_38041 = cljs.core.async.timeout.call(null,(1000));
var inst_38042 = [inst_38040,inst_38041];
var inst_38043 = (new cljs.core.PersistentVector(null,2,(5),inst_38039,inst_38042,null));
var state_38074__$1 = state_38074;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38074__$1,(14),inst_38043);
} else {
if((state_val_38075 === (9))){
var inst_38034 = (state_38074[(8)]);
var inst_38060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38061 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38034);
var inst_38062 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38061);
var inst_38063 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38062)].join('');
var inst_38064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38063);
var state_38074__$1 = (function (){var statearr_38087 = state_38074;
(statearr_38087[(10)] = inst_38060);

return statearr_38087;
})();
var statearr_38088_38113 = state_38074__$1;
(statearr_38088_38113[(2)] = inst_38064);

(statearr_38088_38113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (5))){
var inst_38027 = (state_38074[(7)]);
var inst_38029 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38030 = (new cljs.core.PersistentArrayMap(null,2,inst_38029,null));
var inst_38031 = (new cljs.core.PersistentHashSet(null,inst_38030,null));
var inst_38032 = figwheel.client.focus_msgs.call(null,inst_38031,inst_38027);
var inst_38033 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38032);
var inst_38034 = cljs.core.first.call(null,inst_38032);
var inst_38035 = figwheel.client.autoload_QMARK_.call(null);
var state_38074__$1 = (function (){var statearr_38089 = state_38074;
(statearr_38089[(9)] = inst_38033);

(statearr_38089[(8)] = inst_38034);

return statearr_38089;
})();
if(cljs.core.truth_(inst_38035)){
var statearr_38090_38114 = state_38074__$1;
(statearr_38090_38114[(1)] = (8));

} else {
var statearr_38091_38115 = state_38074__$1;
(statearr_38091_38115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (14))){
var inst_38045 = (state_38074[(2)]);
var state_38074__$1 = state_38074;
var statearr_38092_38116 = state_38074__$1;
(statearr_38092_38116[(2)] = inst_38045);

(statearr_38092_38116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (16))){
var state_38074__$1 = state_38074;
var statearr_38093_38117 = state_38074__$1;
(statearr_38093_38117[(2)] = null);

(statearr_38093_38117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (10))){
var inst_38066 = (state_38074[(2)]);
var state_38074__$1 = (function (){var statearr_38094 = state_38074;
(statearr_38094[(11)] = inst_38066);

return statearr_38094;
})();
var statearr_38095_38118 = state_38074__$1;
(statearr_38095_38118[(2)] = null);

(statearr_38095_38118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38075 === (8))){
var inst_38033 = (state_38074[(9)]);
var inst_38037 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38033,opts);
var state_38074__$1 = state_38074;
if(cljs.core.truth_(inst_38037)){
var statearr_38096_38119 = state_38074__$1;
(statearr_38096_38119[(1)] = (11));

} else {
var statearr_38097_38120 = state_38074__$1;
(statearr_38097_38120[(1)] = (12));

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
});})(c__31469__auto___38102,ch))
;
return ((function (switch__31381__auto__,c__31469__auto___38102,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31382__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31382__auto____0 = (function (){
var statearr_38098 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38098[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31382__auto__);

(statearr_38098[(1)] = (1));

return statearr_38098;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31382__auto____1 = (function (state_38074){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_38074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e38099){if((e38099 instanceof Object)){
var ex__31385__auto__ = e38099;
var statearr_38100_38121 = state_38074;
(statearr_38100_38121[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38122 = state_38074;
state_38074 = G__38122;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31382__auto__ = function(state_38074){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31382__auto____1.call(this,state_38074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31382__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31382__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___38102,ch))
})();
var state__31471__auto__ = (function (){var statearr_38101 = f__31470__auto__.call(null);
(statearr_38101[(6)] = c__31469__auto___38102);

return statearr_38101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___38102,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38123_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38123_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38125 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38125){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38124){if((e38124 instanceof Error)){
var e = e38124;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38125], null));
} else {
var e = e38124;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38125))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38126){
var map__38127 = p__38126;
var map__38127__$1 = ((((!((map__38127 == null)))?((((map__38127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38127):map__38127);
var opts = map__38127__$1;
var build_id = cljs.core.get.call(null,map__38127__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38127,map__38127__$1,opts,build_id){
return (function (p__38129){
var vec__38130 = p__38129;
var seq__38131 = cljs.core.seq.call(null,vec__38130);
var first__38132 = cljs.core.first.call(null,seq__38131);
var seq__38131__$1 = cljs.core.next.call(null,seq__38131);
var map__38133 = first__38132;
var map__38133__$1 = ((((!((map__38133 == null)))?((((map__38133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38133):map__38133);
var msg = map__38133__$1;
var msg_name = cljs.core.get.call(null,map__38133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38131__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38130,seq__38131,first__38132,seq__38131__$1,map__38133,map__38133__$1,msg,msg_name,_,map__38127,map__38127__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38130,seq__38131,first__38132,seq__38131__$1,map__38133,map__38133__$1,msg,msg_name,_,map__38127,map__38127__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38127,map__38127__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38135){
var vec__38136 = p__38135;
var seq__38137 = cljs.core.seq.call(null,vec__38136);
var first__38138 = cljs.core.first.call(null,seq__38137);
var seq__38137__$1 = cljs.core.next.call(null,seq__38137);
var map__38139 = first__38138;
var map__38139__$1 = ((((!((map__38139 == null)))?((((map__38139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38139):map__38139);
var msg = map__38139__$1;
var msg_name = cljs.core.get.call(null,map__38139__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38137__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38141){
var map__38142 = p__38141;
var map__38142__$1 = ((((!((map__38142 == null)))?((((map__38142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38142):map__38142);
var on_compile_warning = cljs.core.get.call(null,map__38142__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38142__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38142,map__38142__$1,on_compile_warning,on_compile_fail){
return (function (p__38144){
var vec__38145 = p__38144;
var seq__38146 = cljs.core.seq.call(null,vec__38145);
var first__38147 = cljs.core.first.call(null,seq__38146);
var seq__38146__$1 = cljs.core.next.call(null,seq__38146);
var map__38148 = first__38147;
var map__38148__$1 = ((((!((map__38148 == null)))?((((map__38148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38148):map__38148);
var msg = map__38148__$1;
var msg_name = cljs.core.get.call(null,map__38148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38146__$1;
var pred__38150 = cljs.core._EQ_;
var expr__38151 = msg_name;
if(cljs.core.truth_(pred__38150.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38151))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38150.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38151))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38142,map__38142__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__,msg_hist,msg_names,msg){
return (function (state_38240){
var state_val_38241 = (state_38240[(1)]);
if((state_val_38241 === (7))){
var inst_38160 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38160)){
var statearr_38242_38289 = state_38240__$1;
(statearr_38242_38289[(1)] = (8));

} else {
var statearr_38243_38290 = state_38240__$1;
(statearr_38243_38290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (20))){
var inst_38234 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38244_38291 = state_38240__$1;
(statearr_38244_38291[(2)] = inst_38234);

(statearr_38244_38291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (27))){
var inst_38230 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38245_38292 = state_38240__$1;
(statearr_38245_38292[(2)] = inst_38230);

(statearr_38245_38292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (1))){
var inst_38153 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38153)){
var statearr_38246_38293 = state_38240__$1;
(statearr_38246_38293[(1)] = (2));

} else {
var statearr_38247_38294 = state_38240__$1;
(statearr_38247_38294[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (24))){
var inst_38232 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38248_38295 = state_38240__$1;
(statearr_38248_38295[(2)] = inst_38232);

(statearr_38248_38295[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (4))){
var inst_38238 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38240__$1,inst_38238);
} else {
if((state_val_38241 === (15))){
var inst_38236 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38249_38296 = state_38240__$1;
(statearr_38249_38296[(2)] = inst_38236);

(statearr_38249_38296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (21))){
var inst_38189 = (state_38240[(2)]);
var inst_38190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38191 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38190);
var state_38240__$1 = (function (){var statearr_38250 = state_38240;
(statearr_38250[(7)] = inst_38189);

return statearr_38250;
})();
var statearr_38251_38297 = state_38240__$1;
(statearr_38251_38297[(2)] = inst_38191);

(statearr_38251_38297[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (31))){
var inst_38219 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38219)){
var statearr_38252_38298 = state_38240__$1;
(statearr_38252_38298[(1)] = (34));

} else {
var statearr_38253_38299 = state_38240__$1;
(statearr_38253_38299[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (32))){
var inst_38228 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38254_38300 = state_38240__$1;
(statearr_38254_38300[(2)] = inst_38228);

(statearr_38254_38300[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (33))){
var inst_38215 = (state_38240[(2)]);
var inst_38216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38217 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38216);
var state_38240__$1 = (function (){var statearr_38255 = state_38240;
(statearr_38255[(8)] = inst_38215);

return statearr_38255;
})();
var statearr_38256_38301 = state_38240__$1;
(statearr_38256_38301[(2)] = inst_38217);

(statearr_38256_38301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (13))){
var inst_38174 = figwheel.client.heads_up.clear.call(null);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(16),inst_38174);
} else {
if((state_val_38241 === (22))){
var inst_38195 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38196 = figwheel.client.heads_up.append_warning_message.call(null,inst_38195);
var state_38240__$1 = state_38240;
var statearr_38257_38302 = state_38240__$1;
(statearr_38257_38302[(2)] = inst_38196);

(statearr_38257_38302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (36))){
var inst_38226 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38258_38303 = state_38240__$1;
(statearr_38258_38303[(2)] = inst_38226);

(statearr_38258_38303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (29))){
var inst_38206 = (state_38240[(2)]);
var inst_38207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38208 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38207);
var state_38240__$1 = (function (){var statearr_38259 = state_38240;
(statearr_38259[(9)] = inst_38206);

return statearr_38259;
})();
var statearr_38260_38304 = state_38240__$1;
(statearr_38260_38304[(2)] = inst_38208);

(statearr_38260_38304[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (6))){
var inst_38155 = (state_38240[(10)]);
var state_38240__$1 = state_38240;
var statearr_38261_38305 = state_38240__$1;
(statearr_38261_38305[(2)] = inst_38155);

(statearr_38261_38305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (28))){
var inst_38202 = (state_38240[(2)]);
var inst_38203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38204 = figwheel.client.heads_up.display_warning.call(null,inst_38203);
var state_38240__$1 = (function (){var statearr_38262 = state_38240;
(statearr_38262[(11)] = inst_38202);

return statearr_38262;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(29),inst_38204);
} else {
if((state_val_38241 === (25))){
var inst_38200 = figwheel.client.heads_up.clear.call(null);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(28),inst_38200);
} else {
if((state_val_38241 === (34))){
var inst_38221 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(37),inst_38221);
} else {
if((state_val_38241 === (17))){
var inst_38180 = (state_38240[(2)]);
var inst_38181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38182 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38181);
var state_38240__$1 = (function (){var statearr_38263 = state_38240;
(statearr_38263[(12)] = inst_38180);

return statearr_38263;
})();
var statearr_38264_38306 = state_38240__$1;
(statearr_38264_38306[(2)] = inst_38182);

(statearr_38264_38306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (3))){
var inst_38172 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38172)){
var statearr_38265_38307 = state_38240__$1;
(statearr_38265_38307[(1)] = (13));

} else {
var statearr_38266_38308 = state_38240__$1;
(statearr_38266_38308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (12))){
var inst_38168 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38267_38309 = state_38240__$1;
(statearr_38267_38309[(2)] = inst_38168);

(statearr_38267_38309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (2))){
var inst_38155 = (state_38240[(10)]);
var inst_38155__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38240__$1 = (function (){var statearr_38268 = state_38240;
(statearr_38268[(10)] = inst_38155__$1);

return statearr_38268;
})();
if(cljs.core.truth_(inst_38155__$1)){
var statearr_38269_38310 = state_38240__$1;
(statearr_38269_38310[(1)] = (5));

} else {
var statearr_38270_38311 = state_38240__$1;
(statearr_38270_38311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (23))){
var inst_38198 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38198)){
var statearr_38271_38312 = state_38240__$1;
(statearr_38271_38312[(1)] = (25));

} else {
var statearr_38272_38313 = state_38240__$1;
(statearr_38272_38313[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (35))){
var state_38240__$1 = state_38240;
var statearr_38273_38314 = state_38240__$1;
(statearr_38273_38314[(2)] = null);

(statearr_38273_38314[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (19))){
var inst_38193 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38193)){
var statearr_38274_38315 = state_38240__$1;
(statearr_38274_38315[(1)] = (22));

} else {
var statearr_38275_38316 = state_38240__$1;
(statearr_38275_38316[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (11))){
var inst_38164 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38276_38317 = state_38240__$1;
(statearr_38276_38317[(2)] = inst_38164);

(statearr_38276_38317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (9))){
var inst_38166 = figwheel.client.heads_up.clear.call(null);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(12),inst_38166);
} else {
if((state_val_38241 === (5))){
var inst_38157 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38240__$1 = state_38240;
var statearr_38277_38318 = state_38240__$1;
(statearr_38277_38318[(2)] = inst_38157);

(statearr_38277_38318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (14))){
var inst_38184 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38184)){
var statearr_38278_38319 = state_38240__$1;
(statearr_38278_38319[(1)] = (18));

} else {
var statearr_38279_38320 = state_38240__$1;
(statearr_38279_38320[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (26))){
var inst_38210 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38240__$1 = state_38240;
if(cljs.core.truth_(inst_38210)){
var statearr_38280_38321 = state_38240__$1;
(statearr_38280_38321[(1)] = (30));

} else {
var statearr_38281_38322 = state_38240__$1;
(statearr_38281_38322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (16))){
var inst_38176 = (state_38240[(2)]);
var inst_38177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38178 = figwheel.client.heads_up.display_exception.call(null,inst_38177);
var state_38240__$1 = (function (){var statearr_38282 = state_38240;
(statearr_38282[(13)] = inst_38176);

return statearr_38282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(17),inst_38178);
} else {
if((state_val_38241 === (30))){
var inst_38212 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38213 = figwheel.client.heads_up.display_warning.call(null,inst_38212);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(33),inst_38213);
} else {
if((state_val_38241 === (10))){
var inst_38170 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38283_38323 = state_38240__$1;
(statearr_38283_38323[(2)] = inst_38170);

(statearr_38283_38323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (18))){
var inst_38186 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38187 = figwheel.client.heads_up.display_exception.call(null,inst_38186);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(21),inst_38187);
} else {
if((state_val_38241 === (37))){
var inst_38223 = (state_38240[(2)]);
var state_38240__$1 = state_38240;
var statearr_38284_38324 = state_38240__$1;
(statearr_38284_38324[(2)] = inst_38223);

(statearr_38284_38324[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38241 === (8))){
var inst_38162 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38240__$1 = state_38240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38240__$1,(11),inst_38162);
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
});})(c__31469__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31381__auto__,c__31469__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto____0 = (function (){
var statearr_38285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38285[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto__);

(statearr_38285[(1)] = (1));

return statearr_38285;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto____1 = (function (state_38240){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_38240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e38286){if((e38286 instanceof Object)){
var ex__31385__auto__ = e38286;
var statearr_38287_38325 = state_38240;
(statearr_38287_38325[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38326 = state_38240;
state_38240 = G__38326;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto__ = function(state_38240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto____1.call(this,state_38240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__,msg_hist,msg_names,msg))
})();
var state__31471__auto__ = (function (){var statearr_38288 = f__31470__auto__.call(null);
(statearr_38288[(6)] = c__31469__auto__);

return statearr_38288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__,msg_hist,msg_names,msg))
);

return c__31469__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31469__auto___38355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___38355,ch){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___38355,ch){
return (function (state_38341){
var state_val_38342 = (state_38341[(1)]);
if((state_val_38342 === (1))){
var state_38341__$1 = state_38341;
var statearr_38343_38356 = state_38341__$1;
(statearr_38343_38356[(2)] = null);

(statearr_38343_38356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38342 === (2))){
var state_38341__$1 = state_38341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38341__$1,(4),ch);
} else {
if((state_val_38342 === (3))){
var inst_38339 = (state_38341[(2)]);
var state_38341__$1 = state_38341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38341__$1,inst_38339);
} else {
if((state_val_38342 === (4))){
var inst_38329 = (state_38341[(7)]);
var inst_38329__$1 = (state_38341[(2)]);
var state_38341__$1 = (function (){var statearr_38344 = state_38341;
(statearr_38344[(7)] = inst_38329__$1);

return statearr_38344;
})();
if(cljs.core.truth_(inst_38329__$1)){
var statearr_38345_38357 = state_38341__$1;
(statearr_38345_38357[(1)] = (5));

} else {
var statearr_38346_38358 = state_38341__$1;
(statearr_38346_38358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38342 === (5))){
var inst_38329 = (state_38341[(7)]);
var inst_38331 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38329);
var state_38341__$1 = state_38341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38341__$1,(8),inst_38331);
} else {
if((state_val_38342 === (6))){
var state_38341__$1 = state_38341;
var statearr_38347_38359 = state_38341__$1;
(statearr_38347_38359[(2)] = null);

(statearr_38347_38359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38342 === (7))){
var inst_38337 = (state_38341[(2)]);
var state_38341__$1 = state_38341;
var statearr_38348_38360 = state_38341__$1;
(statearr_38348_38360[(2)] = inst_38337);

(statearr_38348_38360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38342 === (8))){
var inst_38333 = (state_38341[(2)]);
var state_38341__$1 = (function (){var statearr_38349 = state_38341;
(statearr_38349[(8)] = inst_38333);

return statearr_38349;
})();
var statearr_38350_38361 = state_38341__$1;
(statearr_38350_38361[(2)] = null);

(statearr_38350_38361[(1)] = (2));


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
});})(c__31469__auto___38355,ch))
;
return ((function (switch__31381__auto__,c__31469__auto___38355,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31382__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31382__auto____0 = (function (){
var statearr_38351 = [null,null,null,null,null,null,null,null,null];
(statearr_38351[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31382__auto__);

(statearr_38351[(1)] = (1));

return statearr_38351;
});
var figwheel$client$heads_up_plugin_$_state_machine__31382__auto____1 = (function (state_38341){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_38341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e38352){if((e38352 instanceof Object)){
var ex__31385__auto__ = e38352;
var statearr_38353_38362 = state_38341;
(statearr_38353_38362[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38363 = state_38341;
state_38341 = G__38363;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31382__auto__ = function(state_38341){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31382__auto____1.call(this,state_38341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31382__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31382__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___38355,ch))
})();
var state__31471__auto__ = (function (){var statearr_38354 = f__31470__auto__.call(null);
(statearr_38354[(6)] = c__31469__auto___38355);

return statearr_38354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___38355,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__){
return (function (state_38369){
var state_val_38370 = (state_38369[(1)]);
if((state_val_38370 === (1))){
var inst_38364 = cljs.core.async.timeout.call(null,(3000));
var state_38369__$1 = state_38369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38369__$1,(2),inst_38364);
} else {
if((state_val_38370 === (2))){
var inst_38366 = (state_38369[(2)]);
var inst_38367 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38369__$1 = (function (){var statearr_38371 = state_38369;
(statearr_38371[(7)] = inst_38366);

return statearr_38371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38369__$1,inst_38367);
} else {
return null;
}
}
});})(c__31469__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31382__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31382__auto____0 = (function (){
var statearr_38372 = [null,null,null,null,null,null,null,null];
(statearr_38372[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31382__auto__);

(statearr_38372[(1)] = (1));

return statearr_38372;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31382__auto____1 = (function (state_38369){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_38369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e38373){if((e38373 instanceof Object)){
var ex__31385__auto__ = e38373;
var statearr_38374_38376 = state_38369;
(statearr_38374_38376[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38377 = state_38369;
state_38369 = G__38377;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31382__auto__ = function(state_38369){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31382__auto____1.call(this,state_38369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31382__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31382__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__))
})();
var state__31471__auto__ = (function (){var statearr_38375 = f__31470__auto__.call(null);
(statearr_38375[(6)] = c__31469__auto__);

return statearr_38375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__))
);

return c__31469__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38384){
var state_val_38385 = (state_38384[(1)]);
if((state_val_38385 === (1))){
var inst_38378 = cljs.core.async.timeout.call(null,(2000));
var state_38384__$1 = state_38384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38384__$1,(2),inst_38378);
} else {
if((state_val_38385 === (2))){
var inst_38380 = (state_38384[(2)]);
var inst_38381 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38382 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38381);
var state_38384__$1 = (function (){var statearr_38386 = state_38384;
(statearr_38386[(7)] = inst_38380);

return statearr_38386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38384__$1,inst_38382);
} else {
return null;
}
}
});})(c__31469__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto____0 = (function (){
var statearr_38387 = [null,null,null,null,null,null,null,null];
(statearr_38387[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto__);

(statearr_38387[(1)] = (1));

return statearr_38387;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto____1 = (function (state_38384){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_38384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e38388){if((e38388 instanceof Object)){
var ex__31385__auto__ = e38388;
var statearr_38389_38391 = state_38384;
(statearr_38389_38391[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38392 = state_38384;
state_38384 = G__38392;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto__ = function(state_38384){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto____1.call(this,state_38384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31471__auto__ = (function (){var statearr_38390 = f__31470__auto__.call(null);
(statearr_38390[(6)] = c__31469__auto__);

return statearr_38390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__,figwheel_version,temp__4657__auto__))
);

return c__31469__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38393){
var map__38394 = p__38393;
var map__38394__$1 = ((((!((map__38394 == null)))?((((map__38394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38394):map__38394);
var file = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38394__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38396 = "";
var G__38396__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38396),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38396);
var G__38396__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38396__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38396__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = line;
if(cljs.core.truth_(and__27183__auto__)){
return column;
} else {
return and__27183__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38396__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38396__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38397){
var map__38398 = p__38397;
var map__38398__$1 = ((((!((map__38398 == null)))?((((map__38398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38398):map__38398);
var ed = map__38398__$1;
var formatted_exception = cljs.core.get.call(null,map__38398__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38398__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38398__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38400_38404 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38401_38405 = null;
var count__38402_38406 = (0);
var i__38403_38407 = (0);
while(true){
if((i__38403_38407 < count__38402_38406)){
var msg_38408 = cljs.core._nth.call(null,chunk__38401_38405,i__38403_38407);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38408);

var G__38409 = seq__38400_38404;
var G__38410 = chunk__38401_38405;
var G__38411 = count__38402_38406;
var G__38412 = (i__38403_38407 + (1));
seq__38400_38404 = G__38409;
chunk__38401_38405 = G__38410;
count__38402_38406 = G__38411;
i__38403_38407 = G__38412;
continue;
} else {
var temp__4657__auto___38413 = cljs.core.seq.call(null,seq__38400_38404);
if(temp__4657__auto___38413){
var seq__38400_38414__$1 = temp__4657__auto___38413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38400_38414__$1)){
var c__28034__auto___38415 = cljs.core.chunk_first.call(null,seq__38400_38414__$1);
var G__38416 = cljs.core.chunk_rest.call(null,seq__38400_38414__$1);
var G__38417 = c__28034__auto___38415;
var G__38418 = cljs.core.count.call(null,c__28034__auto___38415);
var G__38419 = (0);
seq__38400_38404 = G__38416;
chunk__38401_38405 = G__38417;
count__38402_38406 = G__38418;
i__38403_38407 = G__38419;
continue;
} else {
var msg_38420 = cljs.core.first.call(null,seq__38400_38414__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38420);

var G__38421 = cljs.core.next.call(null,seq__38400_38414__$1);
var G__38422 = null;
var G__38423 = (0);
var G__38424 = (0);
seq__38400_38404 = G__38421;
chunk__38401_38405 = G__38422;
count__38402_38406 = G__38423;
i__38403_38407 = G__38424;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38425){
var map__38426 = p__38425;
var map__38426__$1 = ((((!((map__38426 == null)))?((((map__38426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38426):map__38426);
var w = map__38426__$1;
var message = cljs.core.get.call(null,map__38426__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27183__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27183__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27183__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38428 = cljs.core.seq.call(null,plugins);
var chunk__38429 = null;
var count__38430 = (0);
var i__38431 = (0);
while(true){
if((i__38431 < count__38430)){
var vec__38432 = cljs.core._nth.call(null,chunk__38429,i__38431);
var k = cljs.core.nth.call(null,vec__38432,(0),null);
var plugin = cljs.core.nth.call(null,vec__38432,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38438 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38428,chunk__38429,count__38430,i__38431,pl_38438,vec__38432,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38438.call(null,msg_hist);
});})(seq__38428,chunk__38429,count__38430,i__38431,pl_38438,vec__38432,k,plugin))
);
} else {
}

var G__38439 = seq__38428;
var G__38440 = chunk__38429;
var G__38441 = count__38430;
var G__38442 = (i__38431 + (1));
seq__38428 = G__38439;
chunk__38429 = G__38440;
count__38430 = G__38441;
i__38431 = G__38442;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38428);
if(temp__4657__auto__){
var seq__38428__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38428__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__38428__$1);
var G__38443 = cljs.core.chunk_rest.call(null,seq__38428__$1);
var G__38444 = c__28034__auto__;
var G__38445 = cljs.core.count.call(null,c__28034__auto__);
var G__38446 = (0);
seq__38428 = G__38443;
chunk__38429 = G__38444;
count__38430 = G__38445;
i__38431 = G__38446;
continue;
} else {
var vec__38435 = cljs.core.first.call(null,seq__38428__$1);
var k = cljs.core.nth.call(null,vec__38435,(0),null);
var plugin = cljs.core.nth.call(null,vec__38435,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38447 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38428,chunk__38429,count__38430,i__38431,pl_38447,vec__38435,k,plugin,seq__38428__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38447.call(null,msg_hist);
});})(seq__38428,chunk__38429,count__38430,i__38431,pl_38447,vec__38435,k,plugin,seq__38428__$1,temp__4657__auto__))
);
} else {
}

var G__38448 = cljs.core.next.call(null,seq__38428__$1);
var G__38449 = null;
var G__38450 = (0);
var G__38451 = (0);
seq__38428 = G__38448;
chunk__38429 = G__38449;
count__38430 = G__38450;
i__38431 = G__38451;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38453 = arguments.length;
switch (G__38453) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38454_38459 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38455_38460 = null;
var count__38456_38461 = (0);
var i__38457_38462 = (0);
while(true){
if((i__38457_38462 < count__38456_38461)){
var msg_38463 = cljs.core._nth.call(null,chunk__38455_38460,i__38457_38462);
figwheel.client.socket.handle_incoming_message.call(null,msg_38463);

var G__38464 = seq__38454_38459;
var G__38465 = chunk__38455_38460;
var G__38466 = count__38456_38461;
var G__38467 = (i__38457_38462 + (1));
seq__38454_38459 = G__38464;
chunk__38455_38460 = G__38465;
count__38456_38461 = G__38466;
i__38457_38462 = G__38467;
continue;
} else {
var temp__4657__auto___38468 = cljs.core.seq.call(null,seq__38454_38459);
if(temp__4657__auto___38468){
var seq__38454_38469__$1 = temp__4657__auto___38468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38454_38469__$1)){
var c__28034__auto___38470 = cljs.core.chunk_first.call(null,seq__38454_38469__$1);
var G__38471 = cljs.core.chunk_rest.call(null,seq__38454_38469__$1);
var G__38472 = c__28034__auto___38470;
var G__38473 = cljs.core.count.call(null,c__28034__auto___38470);
var G__38474 = (0);
seq__38454_38459 = G__38471;
chunk__38455_38460 = G__38472;
count__38456_38461 = G__38473;
i__38457_38462 = G__38474;
continue;
} else {
var msg_38475 = cljs.core.first.call(null,seq__38454_38469__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38475);

var G__38476 = cljs.core.next.call(null,seq__38454_38469__$1);
var G__38477 = null;
var G__38478 = (0);
var G__38479 = (0);
seq__38454_38459 = G__38476;
chunk__38455_38460 = G__38477;
count__38456_38461 = G__38478;
i__38457_38462 = G__38479;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28371__auto__ = [];
var len__28364__auto___38484 = arguments.length;
var i__28365__auto___38485 = (0);
while(true){
if((i__28365__auto___38485 < len__28364__auto___38484)){
args__28371__auto__.push((arguments[i__28365__auto___38485]));

var G__38486 = (i__28365__auto___38485 + (1));
i__28365__auto___38485 = G__38486;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38481){
var map__38482 = p__38481;
var map__38482__$1 = ((((!((map__38482 == null)))?((((map__38482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38482):map__38482);
var opts = map__38482__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38480){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38480));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38487){if((e38487 instanceof Error)){
var e = e38487;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38487;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38488){
var map__38489 = p__38488;
var map__38489__$1 = ((((!((map__38489 == null)))?((((map__38489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38489):map__38489);
var msg_name = cljs.core.get.call(null,map__38489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507441600891
