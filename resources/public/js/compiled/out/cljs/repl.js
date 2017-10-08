// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37721){
var map__37722 = p__37721;
var map__37722__$1 = ((((!((map__37722 == null)))?((((map__37722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37722):map__37722);
var m = map__37722__$1;
var n = cljs.core.get.call(null,map__37722__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37722__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37724_37746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37725_37747 = null;
var count__37726_37748 = (0);
var i__37727_37749 = (0);
while(true){
if((i__37727_37749 < count__37726_37748)){
var f_37750 = cljs.core._nth.call(null,chunk__37725_37747,i__37727_37749);
cljs.core.println.call(null,"  ",f_37750);

var G__37751 = seq__37724_37746;
var G__37752 = chunk__37725_37747;
var G__37753 = count__37726_37748;
var G__37754 = (i__37727_37749 + (1));
seq__37724_37746 = G__37751;
chunk__37725_37747 = G__37752;
count__37726_37748 = G__37753;
i__37727_37749 = G__37754;
continue;
} else {
var temp__4657__auto___37755 = cljs.core.seq.call(null,seq__37724_37746);
if(temp__4657__auto___37755){
var seq__37724_37756__$1 = temp__4657__auto___37755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37724_37756__$1)){
var c__28034__auto___37757 = cljs.core.chunk_first.call(null,seq__37724_37756__$1);
var G__37758 = cljs.core.chunk_rest.call(null,seq__37724_37756__$1);
var G__37759 = c__28034__auto___37757;
var G__37760 = cljs.core.count.call(null,c__28034__auto___37757);
var G__37761 = (0);
seq__37724_37746 = G__37758;
chunk__37725_37747 = G__37759;
count__37726_37748 = G__37760;
i__37727_37749 = G__37761;
continue;
} else {
var f_37762 = cljs.core.first.call(null,seq__37724_37756__$1);
cljs.core.println.call(null,"  ",f_37762);

var G__37763 = cljs.core.next.call(null,seq__37724_37756__$1);
var G__37764 = null;
var G__37765 = (0);
var G__37766 = (0);
seq__37724_37746 = G__37763;
chunk__37725_37747 = G__37764;
count__37726_37748 = G__37765;
i__37727_37749 = G__37766;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37767 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37767);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37767)))?cljs.core.second.call(null,arglists_37767):arglists_37767));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37728_37768 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37729_37769 = null;
var count__37730_37770 = (0);
var i__37731_37771 = (0);
while(true){
if((i__37731_37771 < count__37730_37770)){
var vec__37732_37772 = cljs.core._nth.call(null,chunk__37729_37769,i__37731_37771);
var name_37773 = cljs.core.nth.call(null,vec__37732_37772,(0),null);
var map__37735_37774 = cljs.core.nth.call(null,vec__37732_37772,(1),null);
var map__37735_37775__$1 = ((((!((map__37735_37774 == null)))?((((map__37735_37774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37735_37774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37735_37774):map__37735_37774);
var doc_37776 = cljs.core.get.call(null,map__37735_37775__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37777 = cljs.core.get.call(null,map__37735_37775__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37773);

cljs.core.println.call(null," ",arglists_37777);

if(cljs.core.truth_(doc_37776)){
cljs.core.println.call(null," ",doc_37776);
} else {
}

var G__37778 = seq__37728_37768;
var G__37779 = chunk__37729_37769;
var G__37780 = count__37730_37770;
var G__37781 = (i__37731_37771 + (1));
seq__37728_37768 = G__37778;
chunk__37729_37769 = G__37779;
count__37730_37770 = G__37780;
i__37731_37771 = G__37781;
continue;
} else {
var temp__4657__auto___37782 = cljs.core.seq.call(null,seq__37728_37768);
if(temp__4657__auto___37782){
var seq__37728_37783__$1 = temp__4657__auto___37782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37728_37783__$1)){
var c__28034__auto___37784 = cljs.core.chunk_first.call(null,seq__37728_37783__$1);
var G__37785 = cljs.core.chunk_rest.call(null,seq__37728_37783__$1);
var G__37786 = c__28034__auto___37784;
var G__37787 = cljs.core.count.call(null,c__28034__auto___37784);
var G__37788 = (0);
seq__37728_37768 = G__37785;
chunk__37729_37769 = G__37786;
count__37730_37770 = G__37787;
i__37731_37771 = G__37788;
continue;
} else {
var vec__37737_37789 = cljs.core.first.call(null,seq__37728_37783__$1);
var name_37790 = cljs.core.nth.call(null,vec__37737_37789,(0),null);
var map__37740_37791 = cljs.core.nth.call(null,vec__37737_37789,(1),null);
var map__37740_37792__$1 = ((((!((map__37740_37791 == null)))?((((map__37740_37791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37740_37791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37740_37791):map__37740_37791);
var doc_37793 = cljs.core.get.call(null,map__37740_37792__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37794 = cljs.core.get.call(null,map__37740_37792__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37790);

cljs.core.println.call(null," ",arglists_37794);

if(cljs.core.truth_(doc_37793)){
cljs.core.println.call(null," ",doc_37793);
} else {
}

var G__37795 = cljs.core.next.call(null,seq__37728_37783__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__37728_37768 = G__37795;
chunk__37729_37769 = G__37796;
count__37730_37770 = G__37797;
i__37731_37771 = G__37798;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37742 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37743 = null;
var count__37744 = (0);
var i__37745 = (0);
while(true){
if((i__37745 < count__37744)){
var role = cljs.core._nth.call(null,chunk__37743,i__37745);
var temp__4657__auto___37799__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37799__$1)){
var spec_37800 = temp__4657__auto___37799__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37800));
} else {
}

var G__37801 = seq__37742;
var G__37802 = chunk__37743;
var G__37803 = count__37744;
var G__37804 = (i__37745 + (1));
seq__37742 = G__37801;
chunk__37743 = G__37802;
count__37744 = G__37803;
i__37745 = G__37804;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37742);
if(temp__4657__auto____$1){
var seq__37742__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37742__$1)){
var c__28034__auto__ = cljs.core.chunk_first.call(null,seq__37742__$1);
var G__37805 = cljs.core.chunk_rest.call(null,seq__37742__$1);
var G__37806 = c__28034__auto__;
var G__37807 = cljs.core.count.call(null,c__28034__auto__);
var G__37808 = (0);
seq__37742 = G__37805;
chunk__37743 = G__37806;
count__37744 = G__37807;
i__37745 = G__37808;
continue;
} else {
var role = cljs.core.first.call(null,seq__37742__$1);
var temp__4657__auto___37809__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37809__$2)){
var spec_37810 = temp__4657__auto___37809__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37810));
} else {
}

var G__37811 = cljs.core.next.call(null,seq__37742__$1);
var G__37812 = null;
var G__37813 = (0);
var G__37814 = (0);
seq__37742 = G__37811;
chunk__37743 = G__37812;
count__37744 = G__37813;
i__37745 = G__37814;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1507441598217
