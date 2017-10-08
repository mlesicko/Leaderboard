// Compiled by ClojureScript 1.9.908 {}
goog.provide('leaderboard.test_name');
goog.require('cljs.core');
goog.require('superstring.core');
goog.require('cuerdas.core');
goog.require('clojure.string');
leaderboard.test_name.check_for_substrings = (function leaderboard$test_name$check_for_substrings(string,substrings){
var lcstring = superstring.core.lower_case.call(null,string);
return cljs.core.some.call(null,cljs.core.partial.call(null,clojure.string.includes_QMARK_,lcstring),substrings);
});
leaderboard.test_name.length = (8);
leaderboard.test_name.test_name = (function leaderboard$test_name$test_name(user_name){
if(cljs.core.truth_(superstring.core.blank_QMARK_.call(null,user_name))){
return "Your name can not be nothing.";
} else {
if(cljs.core._EQ_.call(null,user_name,"Mark")){
return true;
} else {
if(cljs.core._EQ_.call(null,user_name,"Chungus")){
return true;
} else {
if(cljs.core._EQ_.call(null,user_name,"Marc")){
return "No, that's wrong.";
} else {
if(cljs.core.truth_(leaderboard.test_name.check_for_substrings.call(null,user_name,leaderboard.test_name.presidents))){
return "For National Security reasons, your name cannot contain the name of any current or former US Presidents.";
} else {
if(cljs.core.truth_(leaderboard.test_name.check_for_substrings.call(null,user_name,leaderboard.test_name.colors))){
return "That's racist.";
} else {
if(cljs.core.truth_(leaderboard.test_name.check_for_substrings.call(null,user_name,leaderboard.test_name.disney))){
return "This name is under copyright by the Walt Disney Corporation.";
} else {
if(cljs.core.truth_(leaderboard.test_name.check_for_substrings.call(null,user_name,leaderboard.test_name.emo))){
return "That name is too emo.";
} else {
if(cljs.core.truth_(leaderboard.test_name.check_for_substrings.call(null,user_name,leaderboard.test_name.naughty))){
return "That is not family-friendly.";
} else {
if(cljs.core.truth_(leaderboard.test_name.check_for_swears.call(null,user_name,leaderboard.test_name.swears))){
return "No swearing!";
} else {
if(cljs.core.truth_(superstring.core.upper_case_QMARK_.call(null,cljs.core.first.call(null,user_name)))){
return "Your name must not begin with a capital letter.";
} else {
if(cljs.core.not.call(null,cljs.core.some.call(null,superstring.core.upper_case_QMARK_,user_name))){
return "Your name must contain a capital letter.";
} else {
if(cljs.core.not.call(null,cljs.core.some.call(null,cuerdas.core.digits_QMARK_,user_name))){
return "Your name must contain at least one number.";
} else {
if((cljs.core.count.call(null,cljs.core.filter.call(null,cuerdas.core.digits_QMARK_,user_name)) < (2))){
return "Your name must contain at least two numbers.";
} else {
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__30799_SHARP_){
return clojure.string.includes_QMARK_.call(null,user_name,p1__30799_SHARP_);
}),cljs.core.map.call(null,cljs.core.str,cljs.core.range.call(null,(1900),(2017)))))){
return "Your name cannot contain someone's birth year.";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"1")){
return "Your name cannot contain the number 1.";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"33")){
return "That name is too Masonic.";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"666")){
return "That name is too Satanic.";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"420")){
return "That name is prohibited under Federal Law.";
} else {
if(cljs.core.every_QMARK_.call(null,cuerdas.core.alnum_QMARK_,user_name)){
return "Your name must contain a special character.";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"@")){
return "Your name may not contain @";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"#")){
return "Your name may not contain #";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"!")){
return "Your name may not contain !";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name,"$")){
return "Your name may not contain $";
} else {
if(clojure.string.includes_QMARK_.call(null,user_name," ")){
return "Your name may not contain spaces.";
} else {
if((cljs.core.count.call(null,cljs.core.filter.call(null,leaderboard.test_name.vowels,user_name)) > (3))){
return "Your name contains too many vowels.";
} else {
if((cljs.core.count.call(null,user_name) > leaderboard.test_name.length)){
return "Your name is too long.";
} else {
if((cljs.core.count.call(null,user_name) < leaderboard.test_name.length)){
return "Your name is too short.";
} else {
if(cljs.core.not.call(null,leaderboard.test_name.is_alphabetical_QMARK_.call(null,user_name))){
return "The letters in your name must appear in alphabetical order.";
} else {
return true;

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
});
leaderboard.test_name.is_alphabetical_QMARK_ = (function leaderboard$test_name$is_alphabetical_QMARK_(user_name){
var letters = cljs.core.filter.call(null,cuerdas.core.letters_QMARK_,superstring.core.lower_case.call(null,user_name));
return cljs.core._EQ_.call(null,letters,cljs.core.sort.call(null,letters));
});
leaderboard.test_name.check_for_swear = (function leaderboard$test_name$check_for_swear(user_name,swear){
var swear_set = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,swear);
return cljs.core._EQ_.call(null,cljs.core.reverse.call(null,cljs.core.into.call(null,cljs.core.List.EMPTY,swear)),cljs.core.filter.call(null,swear_set,user_name));
});
leaderboard.test_name.check_for_swears = (function leaderboard$test_name$check_for_swears(user_name,swears){
return cljs.core.some.call(null,cljs.core.partial.call(null,leaderboard.test_name.check_for_swear,user_name),swears);
});
leaderboard.test_name.digits = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["9",null,"3",null,"4",null,"8",null,"7",null,"5",null,"6",null,"1",null,"0",null,"2",null], null), null);
leaderboard.test_name.vowels = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["e",null,"a",null,"i",null,"u",null,"o",null], null), null);
leaderboard.test_name.swears = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["hell",null,"ass",null,"shit",null,"bitch",null,"fuck",null,"damn",null], null), null);
leaderboard.test_name.naughty = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["butt",null,"dong",null,"69",null,"boobs",null,"penis",null,"tit",null,"cunt",null,"ball",null,"sex",null], null), null);
leaderboard.test_name.disney = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["mouse",null,"mickey",null], null), null);
leaderboard.test_name.emo = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["random",null,"xxx",null,"spork",null,"doom",null], null), null);
leaderboard.test_name.colors = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["blue",null,"white",null,"orange",null,"yellow",null,"green",null,"red",null,"brown",null,"black",null], null), null);
leaderboard.test_name.presidents = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 32, ["abraham",null,"james",null,"franklin",null,"bill",null,"warren",null,"harry",null,"benjamin",null,"dick",null,"gerald",null,"ulysses",null,"richard",null,"john",null,"jimmy",null,"william",null,"chester",null,"dwight",null,"abe",null,"grover",null,"herbert",null,"zachary",null,"millard",null,"theodore",null,"lyndon",null,"woodrow",null,"thomas",null,"george",null,"andrew",null,"barack",null,"rutherford",null,"martin",null,"calvin",null,"ronald",null], null), null);

//# sourceMappingURL=test_name.js.map?rel=1507445075448
