// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__45121 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45122 = null;
var count__45123 = (0);
var i__45124 = (0);
while(true){
if((i__45124 < count__45123)){
var vec__45125 = cljs.core._nth.call(null,chunk__45122,i__45124);
var effect_key = cljs.core.nth.call(null,vec__45125,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45125,(1),null);
var temp__4655__auto___45131 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45131)){
var effect_fn_45132 = temp__4655__auto___45131;
effect_fn_45132.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45133 = seq__45121;
var G__45134 = chunk__45122;
var G__45135 = count__45123;
var G__45136 = (i__45124 + (1));
seq__45121 = G__45133;
chunk__45122 = G__45134;
count__45123 = G__45135;
i__45124 = G__45136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45121);
if(temp__4657__auto__){
var seq__45121__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45121__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45121__$1);
var G__45137 = cljs.core.chunk_rest.call(null,seq__45121__$1);
var G__45138 = c__28034__auto__;
var G__45139 = cljs.core.count.call(null,c__28034__auto__);
var G__45140 = (0);
seq__45121 = G__45137;
chunk__45122 = G__45138;
count__45123 = G__45139;
i__45124 = G__45140;
continue;
} else {
var vec__45128 = cljs.core.first.call(null,seq__45121__$1);
var effect_key = cljs.core.nth.call(null,vec__45128,(0),null);
var effect_value = cljs.core.nth.call(null,vec__45128,(1),null);
var temp__4655__auto___45141 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___45141)){
var effect_fn_45142 = temp__4655__auto___45141;
effect_fn_45142.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__45143 = cljs.core.next.call(null,seq__45121__$1);
var G__45144 = null;
var G__45145 = (0);
var G__45146 = (0);
seq__45121 = G__45143;
chunk__45122 = G__45144;
count__45123 = G__45145;
i__45124 = G__45146;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45147 = cljs.core.seq.call(null,value);
var chunk__45148 = null;
var count__45149 = (0);
var i__45150 = (0);
while(true){
if((i__45150 < count__45149)){
var map__45151 = cljs.core._nth.call(null,chunk__45148,i__45150);
var map__45151__$1 = ((((!((map__45151 == null)))?((((map__45151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45151):map__45151);
var effect = map__45151__$1;
var ms = cljs.core.get.call(null,map__45151__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45151__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45147,chunk__45148,count__45149,i__45150,map__45151,map__45151__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45147,chunk__45148,count__45149,i__45150,map__45151,map__45151__$1,effect,ms,dispatch))
,ms);
}

var G__45155 = seq__45147;
var G__45156 = chunk__45148;
var G__45157 = count__45149;
var G__45158 = (i__45150 + (1));
seq__45147 = G__45155;
chunk__45148 = G__45156;
count__45149 = G__45157;
i__45150 = G__45158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45147);
if(temp__4657__auto__){
var seq__45147__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45147__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45147__$1);
var G__45159 = cljs.core.chunk_rest.call(null,seq__45147__$1);
var G__45160 = c__28034__auto__;
var G__45161 = cljs.core.count.call(null,c__28034__auto__);
var G__45162 = (0);
seq__45147 = G__45159;
chunk__45148 = G__45160;
count__45149 = G__45161;
i__45150 = G__45162;
continue;
} else {
var map__45153 = cljs.core.first.call(null,seq__45147__$1);
var map__45153__$1 = ((((!((map__45153 == null)))?((((map__45153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45153):map__45153);
var effect = map__45153__$1;
var ms = cljs.core.get.call(null,map__45153__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__45153__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__45147,chunk__45148,count__45149,i__45150,map__45153,map__45153__$1,effect,ms,dispatch,seq__45147__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__45147,chunk__45148,count__45149,i__45150,map__45153,map__45153__$1,effect,ms,dispatch,seq__45147__$1,temp__4657__auto__))
,ms);
}

var G__45163 = cljs.core.next.call(null,seq__45147__$1);
var G__45164 = null;
var G__45165 = (0);
var G__45166 = (0);
seq__45147 = G__45163;
chunk__45148 = G__45164;
count__45149 = G__45165;
i__45150 = G__45166;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__45167 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__45168 = null;
var count__45169 = (0);
var i__45170 = (0);
while(true){
if((i__45170 < count__45169)){
var event = cljs.core._nth.call(null,chunk__45168,i__45170);
re_frame.router.dispatch.call(null,event);

var G__45171 = seq__45167;
var G__45172 = chunk__45168;
var G__45173 = count__45169;
var G__45174 = (i__45170 + (1));
seq__45167 = G__45171;
chunk__45168 = G__45172;
count__45169 = G__45173;
i__45170 = G__45174;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45167);
if(temp__4657__auto__){
var seq__45167__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45167__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45167__$1);
var G__45175 = cljs.core.chunk_rest.call(null,seq__45167__$1);
var G__45176 = c__28034__auto__;
var G__45177 = cljs.core.count.call(null,c__28034__auto__);
var G__45178 = (0);
seq__45167 = G__45175;
chunk__45168 = G__45176;
count__45169 = G__45177;
i__45170 = G__45178;
continue;
} else {
var event = cljs.core.first.call(null,seq__45167__$1);
re_frame.router.dispatch.call(null,event);

var G__45179 = cljs.core.next.call(null,seq__45167__$1);
var G__45180 = null;
var G__45181 = (0);
var G__45182 = (0);
seq__45167 = G__45179;
chunk__45168 = G__45180;
count__45169 = G__45181;
i__45170 = G__45182;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__45183 = cljs.core.seq.call(null,value);
var chunk__45184 = null;
var count__45185 = (0);
var i__45186 = (0);
while(true){
if((i__45186 < count__45185)){
var event = cljs.core._nth.call(null,chunk__45184,i__45186);
clear_event.call(null,event);

var G__45187 = seq__45183;
var G__45188 = chunk__45184;
var G__45189 = count__45185;
var G__45190 = (i__45186 + (1));
seq__45183 = G__45187;
chunk__45184 = G__45188;
count__45185 = G__45189;
i__45186 = G__45190;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45183);
if(temp__4657__auto__){
var seq__45183__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45183__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__45183__$1);
var G__45191 = cljs.core.chunk_rest.call(null,seq__45183__$1);
var G__45192 = c__28034__auto__;
var G__45193 = cljs.core.count.call(null,c__28034__auto__);
var G__45194 = (0);
seq__45183 = G__45191;
chunk__45184 = G__45192;
count__45185 = G__45193;
i__45186 = G__45194;
continue;
} else {
var event = cljs.core.first.call(null,seq__45183__$1);
clear_event.call(null,event);

var G__45195 = cljs.core.next.call(null,seq__45183__$1);
var G__45196 = null;
var G__45197 = (0);
var G__45198 = (0);
seq__45183 = G__45195;
chunk__45184 = G__45196;
count__45185 = G__45197;
i__45186 = G__45198;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1507441650921
