// Compiled by ClojureScript 1.9.908 {}
goog.provide('leaderboard.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('leaderboard.db');
goog.require('leaderboard.test_name');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return leaderboard.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),(function (db,p__30579){
var vec__30580 = p__30579;
var _ = cljs.core.nth.call(null,vec__30580,(0),null);
var new_name = cljs.core.nth.call(null,vec__30580,(1),null);
var test_result = leaderboard.test_name.test_name.call(null,new_name);
if(cljs.core._EQ_.call(null,test_result,true)){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user-name","user-name",1302913545),new_name);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),test_result);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-error","clear-error",1327354158),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error-message","error-message",1756021561),"");
}));

//# sourceMappingURL=events.js.map?rel=1507442970225
