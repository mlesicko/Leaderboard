// Compiled by ClojureScript 1.9.908 {}
goog.provide('leaderboard.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('leaderboard.db');
goog.require('leaderboard.test_name');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return cljs.core.assoc.call(null,leaderboard.db.default_db,new cljs.core.Keyword(null,"anim-interval","anim-interval",-1677134951),setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
}),(400)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976),(function (db,_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tetris-height","tetris-height",410040253).cljs$core$IFn$_invoke$arity$1(db),(0))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop-ticking","stop-ticking",-186866317)], null));

return db;
} else {
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tetris-height","tetris-height",410040253),(function (p1__31977_SHARP_){
return (p1__31977_SHARP_ + (10));
}));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stop-ticking","stop-ticking",-186866317),(function (db,_){
clearInterval(new cljs.core.Keyword(null,"anim-interval","anim-interval",-1677134951).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"enter-name","enter-name",1270902271));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),(function (db,p__31978){
var vec__31979 = p__31978;
var _ = cljs.core.nth.call(null,vec__31979,(0),null);
var new_name = cljs.core.nth.call(null,vec__31979,(1),null);
var test_result = leaderboard.test_name.test_name.call(null,new_name);
var db_with_name = cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-name","typed-name",-2126648216),new_name);
if(cljs.core._EQ_.call(null,test_result,true)){
return cljs.core.assoc.call(null,db_with_name,new cljs.core.Keyword(null,"user-name","user-name",1302913545),new_name,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"winner","winner",714604679));
} else {
return cljs.core.assoc.call(null,db_with_name,new cljs.core.Keyword(null,"error-message","error-message",1756021561),test_result);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-error","clear-error",1327354158),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),"");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-mode","update-mode",1566263575),(function (db,p__31982){
var vec__31983 = p__31982;
var _ = cljs.core.nth.call(null,vec__31983,(0),null);
var new_mode = cljs.core.nth.call(null,vec__31983,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"mode","mode",654403691),new_mode);
}));

//# sourceMappingURL=events.js.map?rel=1507482202470
