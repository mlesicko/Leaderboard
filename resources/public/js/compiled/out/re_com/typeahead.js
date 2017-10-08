// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__43967){
var map__43968 = p__43967;
var map__43968__$1 = ((((!((map__43968 == null)))?((((map__43968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43968):map__43968);
var args = map__43968__$1;
var on_change = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__43968__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__43970 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__27195__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__43970,external_model_value);
} else {
return G__43970;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__43971,event){
var map__43972 = p__43971;
var map__43972__$1 = ((((!((map__43972 == null)))?((((map__43972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43972):map__43972);
var state = map__43972__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43972__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__43972__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__43974 = event;
var G__43974__$1 = (((G__43974 instanceof cljs.core.Keyword))?G__43974.fqn:null);
switch (G__43974__$1) {
case "input-text-blurred":
var and__27183__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__27183__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__27195__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43974__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__43976,event){
var map__43977 = p__43976;
var map__43977__$1 = ((((!((map__43977 == null)))?((((map__43977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43977):map__43977);
var state = map__43977__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__43977__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__43979 = event;
var G__43979__$1 = (((G__43979 instanceof cljs.core.Keyword))?G__43979.fqn:null);
switch (G__43979__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__43981,new_value){
var map__43982 = p__43981;
var map__43982__$1 = ((((!((map__43982 == null)))?((((map__43982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43982):map__43982);
var state = map__43982__$1;
var on_change = cljs.core.get.call(null,map__43982__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__43984,suggestion){
var map__43985 = p__43984;
var map__43985__$1 = ((((!((map__43985 == null)))?((((map__43985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43985):map__43985);
var state = map__43985__$1;
var suggestion_to_string = cljs.core.get.call(null,map__43985__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__43987 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__43987,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__43987;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__43988,index){
var map__43989 = p__43988;
var map__43989__$1 = ((((!((map__43989 == null)))?((((map__43989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43989):map__43989);
var state = map__43989__$1;
var suggestions = cljs.core.get.call(null,map__43989__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__43991 = state;
var G__43991__$1 = cljs.core.assoc.call(null,G__43991,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__43991__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__43991__$1,suggestion):G__43991__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__43991__$2,suggestion);
} else {
return G__43991__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__43992,index){
var map__43993 = p__43992;
var map__43993__$1 = ((((!((map__43993 == null)))?((((map__43993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43993):map__43993);
var state = map__43993__$1;
var suggestions = cljs.core.get.call(null,map__43993__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__43995){
var map__43996 = p__43995;
var map__43996__$1 = ((((!((map__43996 == null)))?((((map__43996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43996):map__43996);
var state = map__43996__$1;
var suggestion_active_index = cljs.core.get.call(null,map__43996__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__43998 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__43998,suggestion_active_index);
} else {
return G__43998;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__43999){
var map__44000 = p__43999;
var map__44000__$1 = ((((!((map__44000 == null)))?((((map__44000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44000):map__44000);
var state = map__44000__$1;
var suggestions = cljs.core.get.call(null,map__44000__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__44000__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__44002 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__44002,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__44002;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__44003){
var map__44004 = p__44003;
var map__44004__$1 = ((((!((map__44004 == null)))?((((map__44004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44004):map__44004);
var state = map__44004__$1;
var suggestions = cljs.core.get.call(null,map__44004__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__44004__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__44006 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__44006,re_com.typeahead.wrap.call(null,((function (){var or__27195__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__44006;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__44007 = state;
var G__44007__$1 = re_com.typeahead.clear_suggestions.call(null,G__44007)
;
var G__44007__$2 = cljs.core.assoc.call(null,G__44007__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__44007__$2,null);
} else {
return G__44007__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__44008){
var map__44009 = p__44008;
var map__44009__$1 = ((((!((map__44009 == null)))?((((map__44009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44009):map__44009);
var state = map__44009__$1;
var input_text = cljs.core.get.call(null,map__44009__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__44009__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__44011 = state;
if(cljs.core.truth_((function (){var and__27183__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__27183__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__27183__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__44011,input_text);
} else {
return G__44011;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__44012_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__44012_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__){
return (function (state_44029){
var state_val_44030 = (state_44029[(1)]);
if((state_val_44030 === (1))){
var state_44029__$1 = state_44029;
var statearr_44031_44043 = state_44029__$1;
(statearr_44031_44043[(2)] = null);

(statearr_44031_44043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (2))){
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44029__$1,(4),c_search);
} else {
if((state_val_44030 === (3))){
var inst_44027 = (state_44029[(2)]);
var state_44029__$1 = state_44029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44029__$1,inst_44027);
} else {
if((state_val_44030 === (4))){
var inst_44015 = (state_44029[(7)]);
var inst_44015__$1 = (state_44029[(2)]);
var inst_44016 = cljs.core.deref.call(null,state_atom);
var inst_44017 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_44016);
var inst_44018 = cljs.core._EQ_.call(null,"",inst_44015__$1);
var state_44029__$1 = (function (){var statearr_44032 = state_44029;
(statearr_44032[(8)] = inst_44017);

(statearr_44032[(7)] = inst_44015__$1);

return statearr_44032;
})();
if(inst_44018){
var statearr_44033_44044 = state_44029__$1;
(statearr_44033_44044[(1)] = (5));

} else {
var statearr_44034_44045 = state_44029__$1;
(statearr_44034_44045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (5))){
var inst_44020 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_44029__$1 = state_44029;
var statearr_44035_44046 = state_44029__$1;
(statearr_44035_44046[(2)] = inst_44020);

(statearr_44035_44046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (6))){
var inst_44017 = (state_44029[(8)]);
var inst_44015 = (state_44029[(7)]);
var inst_44022 = re_com.typeahead.search_data_source_BANG_.call(null,inst_44017,state_atom,inst_44015);
var state_44029__$1 = state_44029;
var statearr_44036_44047 = state_44029__$1;
(statearr_44036_44047[(2)] = inst_44022);

(statearr_44036_44047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44030 === (7))){
var inst_44024 = (state_44029[(2)]);
var state_44029__$1 = (function (){var statearr_44037 = state_44029;
(statearr_44037[(9)] = inst_44024);

return statearr_44037;
})();
var statearr_44038_44048 = state_44029__$1;
(statearr_44038_44048[(2)] = null);

(statearr_44038_44048[(1)] = (2));


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
});})(c__31469__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto____0 = (function (){
var statearr_44039 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44039[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto__);

(statearr_44039[(1)] = (1));

return statearr_44039;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto____1 = (function (state_44029){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_44029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e44040){if((e44040 instanceof Object)){
var ex__31385__auto__ = e44040;
var statearr_44041_44049 = state_44029;
(statearr_44041_44049[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44050 = state_44029;
state_44029 = G__44050;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto__ = function(state_44029){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto____1.call(this,state_44029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__))
})();
var state__31471__auto__ = (function (){var statearr_44042 = f__31470__auto__.call(null);
(statearr_44042[(6)] = c__31469__auto__);

return statearr_44042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__))
);

return c__31469__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__44052 = cljs.core.deref.call(null,state_atom);
var map__44052__$1 = ((((!((map__44052 == null)))?((((map__44052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44052):map__44052);
var state = map__44052__$1;
var input_text = cljs.core.get.call(null,map__44052__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__44052__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__44052,map__44052__$1,state,input_text,c_input){
return (function (p1__44051_SHARP_){
var G__44054 = p1__44051_SHARP_;
var G__44054__$1 = cljs.core.assoc.call(null,G__44054,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__44054__$1,new_text);
} else {
return G__44054__$1;
}
});})(map__44052,map__44052__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__44055 = cljs.core._EQ_;
var expr__44056 = event.which;
if(cljs.core.truth_(pred__44055.call(null,goog.events.KeyCodes.UP,expr__44056))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__44055.call(null,goog.events.KeyCodes.DOWN,expr__44056))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__44055.call(null,goog.events.KeyCodes.ENTER,expr__44056))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__44055.call(null,goog.events.KeyCodes.ESC,expr__44056))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__44055.call(null,goog.events.KeyCodes.TAB,expr__44056))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__28371__auto__ = [];
var len__28364__auto___44080 = arguments.length;
var i__28365__auto___44081 = (0);
while(true){
if((i__28365__auto___44081 < len__28364__auto___44080)){
args__28371__auto__.push((arguments[i__28365__auto___44081]));

var G__44082 = (i__28365__auto___44081 + (1));
i__28365__auto___44081 = G__44082;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((0) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__28372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__44060){
var map__44061 = p__44060;
var map__44061__$1 = ((((!((map__44061 == null)))?((((map__44061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44061):map__44061);
var args = map__44061__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__44063 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__44063__$1 = ((((!((map__44063 == null)))?((((map__44063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44063):map__44063);
var state = map__44063__$1;
var c_search = cljs.core.get.call(null,map__44063__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__44063__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function() { 
var G__44083__delegate = function (p__44065){
var map__44066 = p__44065;
var map__44066__$1 = ((((!((map__44066 == null)))?((((map__44066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44066):map__44066);
var args__$1 = map__44066__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__44066__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__44068 = cljs.core.deref.call(null,state_atom);
var map__44068__$1 = ((((!((map__44068 == null)))?((((map__44068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44068):map__44068);
var state__$1 = map__44068__$1;
var suggestions = cljs.core.get.call(null,map__44068__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__44068__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__44068__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__44068__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__27195__auto__ = width;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__27195__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__28003__auto__ = ((function (map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function re_com$typeahead$iter__44070(s__44071){
return (new cljs.core.LazySeq(null,((function (map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function (){
var s__44071__$1 = s__44071;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44071__$1);
if(temp__4657__auto__){
var s__44071__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44071__$2)){
var c__28001__auto__ = cljs.core.chunk_first.call(null,s__44071__$2);
var size__28002__auto__ = cljs.core.count.call(null,c__28001__auto__);
var b__44073 = cljs.core.chunk_buffer.call(null,size__28002__auto__);
if((function (){var i__44072 = (0);
while(true){
if((i__44072 < size__28002__auto__)){
var vec__44074 = cljs.core._nth.call(null,c__28001__auto__,i__44072);
var i = cljs.core.nth.call(null,vec__44074,(0),null);
var s = cljs.core.nth.call(null,vec__44074,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__44073,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__44072,selected_QMARK_,vec__44074,i,s,c__28001__auto__,size__28002__auto__,b__44073,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__44072,selected_QMARK_,vec__44074,i,s,c__28001__auto__,size__28002__auto__,b__44073,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__44072,selected_QMARK_,vec__44074,i,s,c__28001__auto__,size__28002__auto__,b__44073,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function (p1__44058_SHARP_){
p1__44058_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__44072,selected_QMARK_,vec__44074,i,s,c__28001__auto__,size__28002__auto__,b__44073,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__44084 = (i__44072 + (1));
i__44072 = G__44084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44073),re_com$typeahead$iter__44070.call(null,cljs.core.chunk_rest.call(null,s__44071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44073),null);
}
} else {
var vec__44077 = cljs.core.first.call(null,s__44071__$2);
var i = cljs.core.nth.call(null,vec__44077,(0),null);
var s = cljs.core.nth.call(null,vec__44077,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__44077,i,s,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__44077,i,s,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__44077,i,s,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args){
return (function (p1__44058_SHARP_){
p1__44058_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__44077,i,s,s__44071__$2,temp__4657__auto__,map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__44070.call(null,cljs.core.rest.call(null,s__44071__$2)));
}
} else {
return null;
}
break;
}
});})(map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
,null,null));
});})(map__44068,map__44068__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__44066,map__44066__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
;
return iter__28003__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__44083 = function (var_args){
var p__44065 = null;
if (arguments.length > 0) {
var G__44085__i = 0, G__44085__a = new Array(arguments.length -  0);
while (G__44085__i < G__44085__a.length) {G__44085__a[G__44085__i] = arguments[G__44085__i + 0]; ++G__44085__i;}
  p__44065 = new cljs.core.IndexedSeq(G__44085__a,0,null);
} 
return G__44083__delegate.call(this,p__44065);};
G__44083.cljs$lang$maxFixedArity = 0;
G__44083.cljs$lang$applyTo = (function (arglist__44086){
var p__44065 = cljs.core.seq(arglist__44086);
return G__44083__delegate(p__44065);
});
G__44083.cljs$core$IFn$_invoke$arity$variadic = G__44083__delegate;
return G__44083;
})()
;
;})(map__44063,map__44063__$1,state,c_search,c_input,state_atom,input_text_model,map__44061,map__44061__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq44059){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44059));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__31469__auto___44167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___44167,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___44167,out){
return (function (state_44137){
var state_val_44138 = (state_44137[(1)]);
if((state_val_44138 === (7))){
var inst_44092 = (state_44137[(2)]);
var state_44137__$1 = state_44137;
var statearr_44139_44168 = state_44137__$1;
(statearr_44139_44168[(2)] = inst_44092);

(statearr_44139_44168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (1))){
var inst_44087 = null;
var state_44137__$1 = (function (){var statearr_44140 = state_44137;
(statearr_44140[(7)] = inst_44087);

return statearr_44140;
})();
var statearr_44141_44169 = state_44137__$1;
(statearr_44141_44169[(2)] = null);

(statearr_44141_44169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (4))){
var state_44137__$1 = state_44137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44137__$1,(7),in$);
} else {
if((state_val_44138 === (15))){
var inst_44122 = (state_44137[(2)]);
var state_44137__$1 = (function (){var statearr_44142 = state_44137;
(statearr_44142[(8)] = inst_44122);

return statearr_44142;
})();
var statearr_44143_44170 = state_44137__$1;
(statearr_44143_44170[(2)] = null);

(statearr_44143_44170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (13))){
var inst_44110 = (state_44137[(9)]);
var inst_44124 = cljs.core._EQ_.call(null,inst_44110,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_44137__$1 = state_44137;
if(inst_44124){
var statearr_44144_44171 = state_44137__$1;
(statearr_44144_44171[(1)] = (16));

} else {
var statearr_44145_44172 = state_44137__$1;
(statearr_44145_44172[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (6))){
var inst_44096 = (state_44137[(10)]);
var inst_44095 = (state_44137[(2)]);
var inst_44096__$1 = cljs.core.async.timeout.call(null,ms);
var inst_44104 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44105 = [in$,inst_44096__$1];
var inst_44106 = (new cljs.core.PersistentVector(null,2,(5),inst_44104,inst_44105,null));
var state_44137__$1 = (function (){var statearr_44146 = state_44137;
(statearr_44146[(10)] = inst_44096__$1);

(statearr_44146[(11)] = inst_44095);

return statearr_44146;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44137__$1,(8),inst_44106);
} else {
if((state_val_44138 === (17))){
var state_44137__$1 = state_44137;
var statearr_44147_44173 = state_44137__$1;
(statearr_44147_44173[(2)] = null);

(statearr_44147_44173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (3))){
var inst_44135 = (state_44137[(2)]);
var state_44137__$1 = state_44137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44137__$1,inst_44135);
} else {
if((state_val_44138 === (12))){
var inst_44095 = (state_44137[(11)]);
var state_44137__$1 = state_44137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44137__$1,(15),out,inst_44095);
} else {
if((state_val_44138 === (2))){
var inst_44087 = (state_44137[(7)]);
var inst_44089 = (inst_44087 == null);
var state_44137__$1 = state_44137;
if(cljs.core.truth_(inst_44089)){
var statearr_44148_44174 = state_44137__$1;
(statearr_44148_44174[(1)] = (4));

} else {
var statearr_44149_44175 = state_44137__$1;
(statearr_44149_44175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (11))){
var inst_44132 = (state_44137[(2)]);
var inst_44087 = inst_44132;
var state_44137__$1 = (function (){var statearr_44150 = state_44137;
(statearr_44150[(7)] = inst_44087);

return statearr_44150;
})();
var statearr_44151_44176 = state_44137__$1;
(statearr_44151_44176[(2)] = null);

(statearr_44151_44176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (9))){
var inst_44108 = (state_44137[(12)]);
var inst_44116 = cljs.core.nth.call(null,inst_44108,(0),null);
var inst_44117 = cljs.core.nth.call(null,inst_44108,(1),null);
var state_44137__$1 = (function (){var statearr_44152 = state_44137;
(statearr_44152[(13)] = inst_44117);

return statearr_44152;
})();
var statearr_44153_44177 = state_44137__$1;
(statearr_44153_44177[(2)] = inst_44116);

(statearr_44153_44177[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (5))){
var inst_44087 = (state_44137[(7)]);
var state_44137__$1 = state_44137;
var statearr_44154_44178 = state_44137__$1;
(statearr_44154_44178[(2)] = inst_44087);

(statearr_44154_44178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (14))){
var inst_44130 = (state_44137[(2)]);
var state_44137__$1 = state_44137;
var statearr_44155_44179 = state_44137__$1;
(statearr_44155_44179[(2)] = inst_44130);

(statearr_44155_44179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (16))){
var inst_44109 = (state_44137[(14)]);
var state_44137__$1 = state_44137;
var statearr_44156_44180 = state_44137__$1;
(statearr_44156_44180[(2)] = inst_44109);

(statearr_44156_44180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (10))){
var inst_44096 = (state_44137[(10)]);
var inst_44110 = (state_44137[(9)]);
var inst_44119 = cljs.core._EQ_.call(null,inst_44110,inst_44096);
var state_44137__$1 = state_44137;
if(inst_44119){
var statearr_44157_44181 = state_44137__$1;
(statearr_44157_44181[(1)] = (12));

} else {
var statearr_44158_44182 = state_44137__$1;
(statearr_44158_44182[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (18))){
var inst_44128 = (state_44137[(2)]);
var state_44137__$1 = state_44137;
var statearr_44159_44183 = state_44137__$1;
(statearr_44159_44183[(2)] = inst_44128);

(statearr_44159_44183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44138 === (8))){
var inst_44108 = (state_44137[(12)]);
var inst_44110 = (state_44137[(9)]);
var inst_44108__$1 = (state_44137[(2)]);
var inst_44109 = cljs.core.nth.call(null,inst_44108__$1,(0),null);
var inst_44110__$1 = cljs.core.nth.call(null,inst_44108__$1,(1),null);
var inst_44111 = cljs.core._EQ_.call(null,inst_44110__$1,in$);
var state_44137__$1 = (function (){var statearr_44160 = state_44137;
(statearr_44160[(14)] = inst_44109);

(statearr_44160[(12)] = inst_44108__$1);

(statearr_44160[(9)] = inst_44110__$1);

return statearr_44160;
})();
if(inst_44111){
var statearr_44161_44184 = state_44137__$1;
(statearr_44161_44184[(1)] = (9));

} else {
var statearr_44162_44185 = state_44137__$1;
(statearr_44162_44185[(1)] = (10));

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
});})(c__31469__auto___44167,out))
;
return ((function (switch__31381__auto__,c__31469__auto___44167,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__31382__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__31382__auto____0 = (function (){
var statearr_44163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44163[(0)] = re_com$typeahead$debounce_$_state_machine__31382__auto__);

(statearr_44163[(1)] = (1));

return statearr_44163;
});
var re_com$typeahead$debounce_$_state_machine__31382__auto____1 = (function (state_44137){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_44137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e44164){if((e44164 instanceof Object)){
var ex__31385__auto__ = e44164;
var statearr_44165_44186 = state_44137;
(statearr_44165_44186[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44187 = state_44137;
state_44137 = G__44187;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__31382__auto__ = function(state_44137){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__31382__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__31382__auto____1.call(this,state_44137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__31382__auto____0;
re_com$typeahead$debounce_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__31382__auto____1;
return re_com$typeahead$debounce_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___44167,out))
})();
var state__31471__auto__ = (function (){var statearr_44166 = f__31470__auto__.call(null);
(statearr_44166[(6)] = c__31469__auto___44167);

return statearr_44166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___44167,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1507441638940
