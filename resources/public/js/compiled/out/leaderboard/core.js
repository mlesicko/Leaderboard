// Compiled by ClojureScript 1.9.908 {}
goog.provide('leaderboard.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('leaderboard.events');
goog.require('leaderboard.subs');
goog.require('leaderboard.views');
goog.require('leaderboard.config');
leaderboard.core.dev_setup = (function leaderboard$core$dev_setup(){
if(leaderboard.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
leaderboard.core.mount_root = (function leaderboard$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [leaderboard.views.main_panel], null),document.getElementById("app"));
});
leaderboard.core.init = (function leaderboard$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

leaderboard.core.dev_setup.call(null);

return leaderboard.core.mount_root.call(null);
});
goog.exportSymbol('leaderboard.core.init', leaderboard.core.init);

//# sourceMappingURL=core.js.map?rel=1507445076090
