// Compiled by ClojureScript 1.9.908 {}
goog.provide('superstring.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
superstring.core.blank_QMARK_ = clojure.string.blank_QMARK_;
superstring.core.capitalize = clojure.string.capitalize;
superstring.core.join = clojure.string.join;
superstring.core.lower_case = clojure.string.lower_case;
superstring.core.escape = clojure.string.escape;
superstring.core.replace = clojure.string.replace;
superstring.core.reverse = clojure.string.reverse;
superstring.core.split = clojure.string.split;
superstring.core.split_lines = clojure.string.split_lines;
superstring.core.trim = clojure.string.trim;
superstring.core.trim_newline = clojure.string.trim_newline;
superstring.core.triml = clojure.string.triml;
superstring.core.trimr = clojure.string.trimr;
superstring.core.upper_case = clojure.string.upper_case;
superstring.core.substring = cljs.core.subs;
/**
 * Return the length of s.
 */
superstring.core.length = (function superstring$core$length(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = s.length;
if(cljs.core.integer_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (integer? %)"));
}

return _PERCENT_;
});
/**
 * Return the starting position of the first occurrence of needle in s or nil.
 * 
 *   If start is provided, start the search at that position in s.
 */
superstring.core.index_of = (function superstring$core$index_of(var_args){
var G__29536 = arguments.length;
switch (G__29536) {
case 2:
return superstring.core.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,needle){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof needle === 'string'){
} else {
throw (new Error("Assert failed: (string? needle)"));
}

var _PERCENT_ = superstring.core.index_of.call(null,s,needle,(0));
if((cljs.core.integer_QMARK_.call(null,_PERCENT_)) || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (integer? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,needle,start){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof needle === 'string'){
} else {
throw (new Error("Assert failed: (string? needle)"));
}

if(cljs.core.integer_QMARK_.call(null,start)){
} else {
throw (new Error("Assert failed: (integer? start)"));
}

var _PERCENT_ = (function (){var i = s.indexOf(needle,start);
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
return i;
}
})();
if((cljs.core.integer_QMARK_.call(null,_PERCENT_)) || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (integer? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.index_of.cljs$lang$maxFixedArity = 3;

/**
 * Searching backwards, return the starting position of the last occurrence of
 *   needle in s or nil.
 * 
 *   If start is provided, start the search at that position in s.
 */
superstring.core.last_index_of = (function superstring$core$last_index_of(var_args){
var G__29539 = arguments.length;
switch (G__29539) {
case 2:
return superstring.core.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,needle){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof needle === 'string'){
} else {
throw (new Error("Assert failed: (string? needle)"));
}

var _PERCENT_ = superstring.core.last_index_of.call(null,s,needle,(superstring.core.length.call(null,s) - (1)));
if((cljs.core.integer_QMARK_.call(null,_PERCENT_)) || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (integer? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,needle,start){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof needle === 'string'){
} else {
throw (new Error("Assert failed: (string? needle)"));
}

if(cljs.core.integer_QMARK_.call(null,start)){
} else {
throw (new Error("Assert failed: (integer? start)"));
}

var _PERCENT_ = (function (){var i = s.lastIndexOf(needle,start);
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
return i;
}
})();
if((cljs.core.integer_QMARK_.call(null,_PERCENT_)) || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (integer? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.last_index_of.cljs$lang$maxFixedArity = 3;

superstring.core.slice_relative_to_end = (function superstring$core$slice_relative_to_end(s,index,length){
if(((superstring.core.length.call(null,s) + index) < (0))){
return null;
} else {
return superstring.core.slice.call(null,s,(superstring.core.length.call(null,s) + index),length);
}
});
/**
 * Return a slice of s beginning at index and of the given length, or 1.
 * 
 *   If index is negative the starting index is relative to the end of the string.
 * 
 *   If the requested slice ends outside the string boundaries, we return
 *   the substring of s starting at index.
 * 
 *   Returns nil if index falls outside the string boundaries or if
 *   length is negative.
 */
superstring.core.slice = (function superstring$core$slice(var_args){
var G__29542 = arguments.length;
switch (G__29542) {
case 2:
return superstring.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,index){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,index)){
} else {
throw (new Error("Assert failed: (integer? index)"));
}

var _PERCENT_ = superstring.core.slice.call(null,s,index,(1));
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,index,length){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,index)){
} else {
throw (new Error("Assert failed: (integer? index)"));
}

if(cljs.core.integer_QMARK_.call(null,length)){
} else {
throw (new Error("Assert failed: (integer? length)"));
}

var _PERCENT_ = (((length < (0)))?null:((((superstring.core.length.call(null,s) + index) < (0)))?null:(((index < (0)))?superstring.core.slice_relative_to_end.call(null,s,index,length):(((index >= superstring.core.length.call(null,s)))?null:((((length - index) > superstring.core.length.call(null,superstring.core.substring.call(null,s,index))))?superstring.core.substring.call(null,s,index):(function (){var end = (index + length);
return superstring.core.substring.call(null,s,index,end);
})()
)))));
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.slice.cljs$lang$maxFixedArity = 3;

superstring.core.equals_ignore_case = (function superstring$core$equals_ignore_case(s1,s2){
if((cljs.core._EQ_.call(null,superstring.core.length.call(null,s1),superstring.core.length.call(null,s2))) && ((cljs.core._EQ_.call(null,s1.toLocaleLowerCase(),s2.toLocaleLowerCase())) || (cljs.core._EQ_.call(null,s1.toLocaleUpperCase(),s2.toLocaleUpperCase())))){
return s1;
} else {
return null;
}
});
/**
 * Return s if s ends with suffix.
 * 
 *   If a third argument is provided the string comparison is insensitive to case.
 */
superstring.core.ends_with_QMARK_ = (function superstring$core$ends_with_QMARK_(var_args){
var G__29545 = arguments.length;
switch (G__29545) {
case 2:
return superstring.core.ends_with_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.ends_with_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.ends_with_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,suffix){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof suffix === 'string'){
} else {
throw (new Error("Assert failed: (string? suffix)"));
}

var _PERCENT_ = (function (){var idx = superstring.core.index_of.call(null,s,suffix,(superstring.core.length.call(null,s) - superstring.core.length.call(null,suffix)));
if(cljs.core.truth_((function (){var and__27183__auto__ = idx;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.not_EQ_.call(null,idx,(-1));
} else {
return and__27183__auto__;
}
})())){
return s;
} else {
return null;
}
})();
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.ends_with_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (s,suffix,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof suffix === 'string'){
} else {
throw (new Error("Assert failed: (string? suffix)"));
}

var _PERCENT_ = ((cljs.core.not.call(null,ignore_case))?superstring.core.ends_with_QMARK_.call(null,s,suffix):(function (){var end = superstring.core.substring.call(null,s,(function (){var x__27545__auto__ = (0);
var y__27546__auto__ = (superstring.core.length.call(null,s) - superstring.core.length.call(null,suffix));
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
})());
if(cljs.core.truth_(superstring.core.equals_ignore_case.call(null,end,suffix))){
return s;
} else {
return null;
}
})());
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.ends_with_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return s if s starts with prefix.
 * 
 *   If a third argument is provided the string comparison is insensitive to case.
 */
superstring.core.starts_with_QMARK_ = (function superstring$core$starts_with_QMARK_(var_args){
var G__29548 = arguments.length;
switch (G__29548) {
case 2:
return superstring.core.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,prefix){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof prefix === 'string'){
} else {
throw (new Error("Assert failed: (string? prefix)"));
}

var _PERCENT_ = (function (){var idx = superstring.core.index_of.call(null,s,prefix);
if(cljs.core._EQ_.call(null,idx,(0))){
return s;
} else {
return null;
}
})();
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.starts_with_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (s,prefix,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof prefix === 'string'){
} else {
throw (new Error("Assert failed: (string? prefix)"));
}

var _PERCENT_ = ((cljs.core.not.call(null,ignore_case))?superstring.core.starts_with_QMARK_.call(null,s,prefix):(function (){var beg = superstring.core.substring.call(null,s,(0),(function (){var x__27552__auto__ = superstring.core.length.call(null,prefix);
var y__27553__auto__ = superstring.core.length.call(null,s);
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})());
if(cljs.core.truth_(superstring.core.equals_ignore_case.call(null,beg,prefix))){
return s;
} else {
return null;
}
})());
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.starts_with_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return a new string with the last character removed.
 * 
 *   If the string ends with \r\n, both characters are removed.
 * 
 *   Applying chop to an empty string is a no-op.
 * 
 *   chomp is often a safer alternative, as it leaves the string
 *   unchanged if it doesn’t end in a record separator.
 */
superstring.core.chop = (function superstring$core$chop(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (cljs.core.truth_(superstring.core.ends_with_QMARK_.call(null,s,"\r\n"))?superstring.core.substring.call(null,s,(0),(superstring.core.length.call(null,s) - (2))):superstring.core.substring.call(null,s,(0),(function (){var x__27545__auto__ = (0);
var y__27546__auto__ = (superstring.core.length.call(null,s) - (1));
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
})()));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Return a new string with the given record separator removed from
 *   the end (if present).
 * 
 *   If separator is not provided, chomp will remove \n, \r or \r\n from
 *   the end of s.
 */
superstring.core.chomp = (function superstring$core$chomp(var_args){
var G__29551 = arguments.length;
switch (G__29551) {
case 1:
return superstring.core.chomp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return superstring.core.chomp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.chomp.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(cljs.core.truth_(superstring.core.ends_with_QMARK_.call(null,s,"\r\n"))){
return superstring.core.substring.call(null,s,(0),(superstring.core.length.call(null,s) - (2)));
} else {
if(cljs.core.truth_(superstring.core.ends_with_QMARK_.call(null,s,"\r"))){
return superstring.core.substring.call(null,s,(0),(superstring.core.length.call(null,s) - (1)));
} else {
if(cljs.core.truth_(superstring.core.ends_with_QMARK_.call(null,s,"\n"))){
return superstring.core.substring.call(null,s,(0),(superstring.core.length.call(null,s) - (1)));
} else {
return s;

}
}
}
});

superstring.core.chomp.cljs$core$IFn$_invoke$arity$2 = (function (s,separator){
if(cljs.core.truth_(superstring.core.ends_with_QMARK_.call(null,s,separator))){
return superstring.core.substring.call(null,s,(0),(superstring.core.length.call(null,s) - superstring.core.length.call(null,separator)));
} else {
return s;
}
});

superstring.core.chomp.cljs$lang$maxFixedArity = 2;

/**
 * Return s if s is all upper case.
 * 
 *   Characters without case, e.g. numbers, are considered to be trivially
 *   upper case.
 */
superstring.core.upper_case_QMARK_ = (function superstring$core$upper_case_QMARK_(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (cljs.core.truth_(cljs.core.reduce.call(null,(function (acc,c){
var and__27183__auto__ = acc;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core._EQ_.call(null,c,c.toLocaleUpperCase());
} else {
return and__27183__auto__;
}
}),true,s))?s:null);
if(((_PERCENT_ == null)) || (typeof _PERCENT_ === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? %) (string? %))"));
}

return _PERCENT_;
});
/**
 * Return s if s is all lower case.
 * 
 *   Characters without case, e.g. numbers, are considered to be trivially
 *   lower case.
 */
superstring.core.lower_case_QMARK_ = (function superstring$core$lower_case_QMARK_(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (cljs.core.truth_(cljs.core.reduce.call(null,(function (acc,c){
var and__27183__auto__ = acc;
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core._EQ_.call(null,c,c.toLocaleLowerCase());
} else {
return and__27183__auto__;
}
}),true,s))?s:null);
if(((_PERCENT_ == null)) || (typeof _PERCENT_ === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? %) (string? %))"));
}

return _PERCENT_;
});
/**
 * Change lower case characters to upper case and vice versa.
 */
superstring.core.swap_case = (function superstring$core$swap_case(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (function (){var invert_case = (function (c){
if(cljs.core.truth_(superstring.core.lower_case_QMARK_.call(null,c))){
return c.toLocaleUpperCase();
} else {
if(cljs.core.truth_(superstring.core.upper_case_QMARK_.call(null,c))){
return c.toLocaleLowerCase();
} else {
return c;

}
}
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,invert_case,s));
})();
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Generate the necessary padding to fill s upto width.
 */
superstring.core.gen_padding = (function superstring$core$gen_padding(s,padding,width){
var missing = (width - superstring.core.length.call(null,s));
var full_lengths = Math.floor((missing / superstring.core.length.call(null,padding)));
var remaining = (((full_lengths === (0)))?(width - superstring.core.length.call(null,s)):cljs.core.rem.call(null,missing,(full_lengths * superstring.core.length.call(null,padding))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,full_lengths,padding))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(superstring.core.substring.call(null,padding,(0),remaining))].join('');
});
/**
 * Pad the end of s with padding, or spaces, until the length of s matches
 *   width.
 */
superstring.core.pad_right = (function superstring$core$pad_right(var_args){
var G__29554 = arguments.length;
switch (G__29554) {
case 2:
return superstring.core.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (s,width){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,width)){
} else {
throw (new Error("Assert failed: (integer? width)"));
}

var _PERCENT_ = superstring.core.pad_right.call(null,s,width," ");
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (s,width,padding){
if(cljs.core.truth_(cljs.core.not_empty.call(null,padding))){
} else {
throw (new Error("Assert failed: (not-empty padding)"));
}

if(!((s == null))){
} else {
throw (new Error("Assert failed: (not (nil? s))"));
}

var _PERCENT_ = (((width <= superstring.core.length.call(null,s)))?s:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(superstring.core.gen_padding.call(null,s,padding,width))].join(''));
if(cljs.core._EQ_.call(null,superstring.core.length.call(null,_PERCENT_),width)){
} else {
throw (new Error("Assert failed: (= (length %) width)"));
}

return _PERCENT_;
});

superstring.core.pad_right.cljs$lang$maxFixedArity = 3;

/**
 * Pad the beginning of s with padding, or spaces, until the length of
 *   s matches width.
 */
superstring.core.pad_left = (function superstring$core$pad_left(var_args){
var G__29557 = arguments.length;
switch (G__29557) {
case 2:
return superstring.core.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (s,width){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,width)){
} else {
throw (new Error("Assert failed: (integer? width)"));
}

var _PERCENT_ = superstring.core.pad_left.call(null,s,width," ");
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (s,width,padding){
if(cljs.core.truth_(cljs.core.not_empty.call(null,padding))){
} else {
throw (new Error("Assert failed: (not-empty padding)"));
}

if(!((s == null))){
} else {
throw (new Error("Assert failed: (not (nil? s))"));
}

var _PERCENT_ = (((width <= superstring.core.length.call(null,s)))?s:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(superstring.core.gen_padding.call(null,s,padding,width)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
if(cljs.core._EQ_.call(null,superstring.core.length.call(null,_PERCENT_),width)){
} else {
throw (new Error("Assert failed: (= (length %) width)"));
}

return _PERCENT_;
});

superstring.core.pad_left.cljs$lang$maxFixedArity = 3;

/**
 * Pad both ends of s with padding, or spaces, until the length of s
 *   matches width.
 */
superstring.core.center = (function superstring$core$center(var_args){
var G__29560 = arguments.length;
switch (G__29560) {
case 2:
return superstring.core.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.center.cljs$core$IFn$_invoke$arity$2 = (function (s,width){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,width)){
} else {
throw (new Error("Assert failed: (integer? width)"));
}

var _PERCENT_ = superstring.core.center.call(null,s,width," ");
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.center.cljs$core$IFn$_invoke$arity$3 = (function (s,width,padding){
if(cljs.core.truth_(cljs.core.not_empty.call(null,padding))){
} else {
throw (new Error("Assert failed: (not-empty padding)"));
}

if(!((s == null))){
} else {
throw (new Error("Assert failed: (not (nil? s))"));
}

var _PERCENT_ = (((width <= superstring.core.length.call(null,s)))?s:(function (){var missing = (width - superstring.core.length.call(null,s));
var full_lengths = Math.ceil((missing / superstring.core.length.call(null,padding)));
var p = superstring.core.gen_padding.call(null,s,padding,width);
var lengths_before = Math.floor((full_lengths / (2)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(superstring.core.substring.call(null,p,(0),(superstring.core.length.call(null,padding) * lengths_before))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(superstring.core.substring.call(null,p,(superstring.core.length.call(null,padding) * lengths_before)))].join('');
})());
if(cljs.core._EQ_.call(null,superstring.core.length.call(null,_PERCENT_),width)){
} else {
throw (new Error("Assert failed: (= (length %) width)"));
}

return _PERCENT_;
});

superstring.core.center.cljs$lang$maxFixedArity = 3;

/**
 * If found, remove suffix from the end of s.
 * 
 *   Otherwise return s.
 */
superstring.core.chop_suffix = (function superstring$core$chop_suffix(var_args){
var G__29563 = arguments.length;
switch (G__29563) {
case 2:
return superstring.core.chop_suffix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.chop_suffix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.chop_suffix.cljs$core$IFn$_invoke$arity$2 = (function (s,suffix){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof suffix === 'string'){
} else {
throw (new Error("Assert failed: (string? suffix)"));
}

var _PERCENT_ = superstring.core.chop_suffix.call(null,s,suffix,false);
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.chop_suffix.cljs$core$IFn$_invoke$arity$3 = (function (s,suffix,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof suffix === 'string'){
} else {
throw (new Error("Assert failed: (string? suffix)"));
}

var _PERCENT_ = (cljs.core.truth_((function (){var and__27183__auto__ = (superstring.core.length.call(null,s) >= superstring.core.length.call(null,suffix));
if(and__27183__auto__){
return superstring.core.ends_with_QMARK_.call(null,s,suffix,ignore_case);
} else {
return and__27183__auto__;
}
})())?superstring.core.substring.call(null,s,(0),(superstring.core.length.call(null,s) - superstring.core.length.call(null,suffix))):s);
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.chop_suffix.cljs$lang$maxFixedArity = 3;

/**
 * If found, remove prefix from the start of s.
 * 
 *   Otherwise return s.
 */
superstring.core.chop_prefix = (function superstring$core$chop_prefix(var_args){
var G__29566 = arguments.length;
switch (G__29566) {
case 2:
return superstring.core.chop_prefix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.chop_prefix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.chop_prefix.cljs$core$IFn$_invoke$arity$2 = (function (s,prefix){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof prefix === 'string'){
} else {
throw (new Error("Assert failed: (string? prefix)"));
}

var _PERCENT_ = superstring.core.chop_prefix.call(null,s,prefix,false);
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.chop_prefix.cljs$core$IFn$_invoke$arity$3 = (function (s,prefix,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof prefix === 'string'){
} else {
throw (new Error("Assert failed: (string? prefix)"));
}

var _PERCENT_ = (cljs.core.truth_((function (){var and__27183__auto__ = (superstring.core.length.call(null,s) >= superstring.core.length.call(null,prefix));
if(and__27183__auto__){
return superstring.core.starts_with_QMARK_.call(null,s,prefix,ignore_case);
} else {
return and__27183__auto__;
}
})())?superstring.core.substring.call(null,s,superstring.core.length.call(null,prefix)):s);
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.chop_prefix.cljs$lang$maxFixedArity = 3;

superstring.core.case_sensitive_contains = (function superstring$core$case_sensitive_contains(s,needle){
if(cljs.core._EQ_.call(null,needle,"")){
return s;
} else {
if(cljs.core.truth_(superstring.core.index_of.call(null,s,needle))){
return s;
} else {
return null;
}
}
});
/**
 * Return a string matching s exactly, and nothing else, for use in
 *   regular expressions.
 */
superstring.core.re_quote = (function superstring$core$re_quote(s){
return goog.string.regExpEscape(s);
});
superstring.core.case_insensitive_contains = (function superstring$core$case_insensitive_contains(s,needle){
if(cljs.core._EQ_.call(null,needle,"")){
return s;
} else {
var p = superstring.core.re_quote.call(null,needle);
if(cljs.core.truth_(cljs.core.re_find.call(null,(new RegExp(p,"i")),s))){
return s;
} else {
return null;
}
}
});
/**
 * Return s if s contains needle.
 * 
 *   (contains? "foobar" "foo") => "foobar"
 *   (contains? "foobar" "qux") => nil
 */
superstring.core.contains_QMARK_ = (function superstring$core$contains_QMARK_(var_args){
var G__29569 = arguments.length;
switch (G__29569) {
case 2:
return superstring.core.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.contains_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,needle){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof needle === 'string'){
} else {
throw (new Error("Assert failed: (string? needle)"));
}

var _PERCENT_ = superstring.core.case_sensitive_contains.call(null,s,needle);
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.contains_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (s,needle,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(typeof needle === 'string'){
} else {
throw (new Error("Assert failed: (string? needle)"));
}

var _PERCENT_ = (cljs.core.truth_(ignore_case)?superstring.core.case_insensitive_contains.call(null,s,needle):superstring.core.case_sensitive_contains.call(null,s,needle));
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.contains_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return s if s contains all needles.
 * 
 *   (contains-all? "foo bar baz" ["foo" "bar"]) => "foo bar baz"
 *   (contains-all? "foo bar" ["qux" "bar"]) => nil
 */
superstring.core.contains_all_QMARK_ = (function superstring$core$contains_all_QMARK_(var_args){
var G__29572 = arguments.length;
switch (G__29572) {
case 2:
return superstring.core.contains_all_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.contains_all_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.contains_all_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,needles){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,needles)){
} else {
throw (new Error("Assert failed: (every? string? needles)"));
}

var _PERCENT_ = ((cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,superstring.core.case_sensitive_contains,s),needles))?s:null);
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.contains_all_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (s,needles,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,needles)){
} else {
throw (new Error("Assert failed: (every? string? needles)"));
}

var _PERCENT_ = (cljs.core.truth_(ignore_case)?((cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,superstring.core.case_insensitive_contains,s),needles))?s:null):superstring.core.contains_all_QMARK_.call(null,s,needles));
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.contains_all_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return s if s contains any of the needles.
 * 
 *   (contains-any? "foo bar baz" ["foo" "qux"]) => "foo bar baz"
 *   (contains-any? "foo bar" ["qux" "quux"]) => nil
 */
superstring.core.contains_any_QMARK_ = (function superstring$core$contains_any_QMARK_(var_args){
var G__29575 = arguments.length;
switch (G__29575) {
case 2:
return superstring.core.contains_any_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.contains_any_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.contains_any_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (s,needles){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,needles)){
} else {
throw (new Error("Assert failed: (every? string? needles)"));
}

var _PERCENT_ = cljs.core.some.call(null,cljs.core.partial.call(null,superstring.core.case_sensitive_contains,s),needles);
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.contains_any_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (s,needles,ignore_case){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,needles)){
} else {
throw (new Error("Assert failed: (every? string? needles)"));
}

var _PERCENT_ = (cljs.core.truth_(ignore_case)?cljs.core.some.call(null,cljs.core.partial.call(null,superstring.core.case_insensitive_contains,s),needles):superstring.core.contains_any_QMARK_.call(null,s,needles));
if((typeof _PERCENT_ === 'string') || ((_PERCENT_ == null))){
} else {
throw (new Error("Assert failed: (or (string? %) (nil? %))"));
}

return _PERCENT_;
});

superstring.core.contains_any_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * If s is longer than len-3, cut it down to len-3 and append '...'.
 */
superstring.core.truncate = (function superstring$core$truncate(s,len){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if((len >= (3))){
} else {
throw (new Error("Assert failed: (>= len 3)"));
}

var _PERCENT_ = (((superstring.core.length.call(null,s) > (function (){var x__27545__auto__ = (3);
var y__27546__auto__ = (len - (3));
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
})()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(superstring.core.substring.call(null,s,(0),(len - (3)))),"..."].join(''):s);
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

return _PERCENT_;
});
superstring.core.char_equal_ignore_case = (function superstring$core$char_equal_ignore_case(c1,c2){
if((cljs.core._EQ_.call(null,c1,c2)) || (cljs.core._EQ_.call(null,superstring.core.upper_case.call(null,c1),c2)) || (cljs.core._EQ_.call(null,superstring.core.lower_case.call(null,c1),c2))){
return c1;
} else {
return null;
}
});
/**
 * Return the longest common prefix of s1 and s2.
 * 
 *   (common-prefix "abadon" "aberdeen") => "ab"
 *   (common-prefix "foo" "bar") => ""
 */
superstring.core.common_prefix = (function superstring$core$common_prefix(var_args){
var G__29580 = arguments.length;
switch (G__29580) {
case 2:
return superstring.core.common_prefix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.common_prefix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.common_prefix.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__29577_SHARP_,p2__29578_SHARP_){
if(cljs.core._EQ_.call(null,p1__29577_SHARP_,p2__29578_SHARP_)){
return p1__29577_SHARP_;
} else {
return null;
}
}),s2,s1)));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.common_prefix.cljs$core$IFn$_invoke$arity$3 = (function (s1,s2,ignore_case){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = ((cljs.core.not.call(null,ignore_case))?superstring.core.common_prefix.call(null,s1,s2):cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,superstring.core.char_equal_ignore_case,s2,s1))));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.common_prefix.cljs$lang$maxFixedArity = 3;

/**
 * Return the longest common suffix of s1 and s2.
 * 
 *   (common-suffix "bba" "aba") => "ba"
 *   (common-suffix "foo" "bar") => ""
 */
superstring.core.common_suffix = (function superstring$core$common_suffix(var_args){
var G__29583 = arguments.length;
switch (G__29583) {
case 2:
return superstring.core.common_suffix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.common_suffix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.common_suffix.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = superstring.core.reverse.call(null,superstring.core.common_prefix.call(null,superstring.core.reverse.call(null,s2),superstring.core.reverse.call(null,s1)));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.common_suffix.cljs$core$IFn$_invoke$arity$3 = (function (s1,s2,ignore_case){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = ((cljs.core.not.call(null,ignore_case))?superstring.core.common_suffix.call(null,s1,s2):superstring.core.reverse.call(null,superstring.core.common_prefix.call(null,superstring.core.reverse.call(null,s1),superstring.core.reverse.call(null,s2),new cljs.core.Keyword(null,"ignore-case","ignore-case",1793919055))));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});

superstring.core.common_suffix.cljs$lang$maxFixedArity = 3;

/**
 * Insert newlines in s so the length of each line doesn't exceed width.
 */
superstring.core.wrap_words = (function superstring$core$wrap_words(s,width){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,width)){
} else {
throw (new Error("Assert failed: (integer? width)"));
}

var _PERCENT_ = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__29585,word){
var map__29586 = p__29585;
var map__29586__$1 = ((((!((map__29586 == null)))?((((map__29586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29586):map__29586);
var len = cljs.core.get.call(null,map__29586__$1,new cljs.core.Keyword(null,"len","len",1423657078));
var res = cljs.core.get.call(null,map__29586__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
if(((len + superstring.core.length.call(null,word)) < width)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"len","len",1423657078),((len + superstring.core.length.call(null,word)) + (1)),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.conj.call(null,res," ",word)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"len","len",1423657078),superstring.core.length.call(null,word),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.conj.call(null,res,"\n",word)], null);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"len","len",1423657078),(0),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.PersistentVector.EMPTY], null),cljs.core.remove.call(null,cljs.core.empty_QMARK_,superstring.core.split.call(null,s,/\n|\t|\n| /))))));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
superstring.core.split_words = (function superstring$core$split_words(s){
return cljs.core.remove.call(null,cljs.core.empty_QMARK_,superstring.core.split.call(null,superstring.core.replace.call(null,superstring.core.replace.call(null,superstring.core.replace.call(null,s,/_|-/," "),/([A-Z])(([A-Z])([a-z0-9]))/,"$1 $2"),/([a-z])([A-Z])/,"$1 $2"),/[^\w0-9]+/));
});
/**
 * Lower case s and separate words with dashes.
 * 
 *   foo bar => foo-bar
 *   camelCase => camel-case
 * 
 *   This is also referred to as kebab-case in some circles.
 */
superstring.core.lisp_case = (function superstring$core$lisp_case(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = superstring.core.join.call(null,"-",cljs.core.map.call(null,superstring.core.lower_case,superstring.core.split_words.call(null,s)));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Lower case the first char in s and use capitalization to separate words.
 * 
 *   foo bar => fooBar
 *   camelCase => camelCase
 *   PascalCase => pascalCase
 */
superstring.core.camel_case = (function superstring$core$camel_case(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (function (){var words = superstring.core.split_words.call(null,s);
return superstring.core.join.call(null,"",cljs.core.conj.call(null,cljs.core.map.call(null,superstring.core.capitalize,cljs.core.rest.call(null,words)),superstring.core.lower_case.call(null,cljs.core.first.call(null,words))));
})();
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Upper case the first char in s and use capitalization to separate words.
 * 
 *   foo bar => FooBar
 *   camelCase => CamelCase
 *   PascalCase => PascalCase
 */
superstring.core.pascal_case = (function superstring$core$pascal_case(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = superstring.core.join.call(null,"",cljs.core.map.call(null,superstring.core.capitalize,superstring.core.split_words.call(null,s)));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Lower case s and use underscores to separate words.
 * 
 *   foo bar => foo_bar
 *   camelCase => camel_case
 *   PascalCase => pascal_case
 */
superstring.core.snake_case = (function superstring$core$snake_case(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = superstring.core.join.call(null,"_",cljs.core.map.call(null,superstring.core.lower_case,superstring.core.split_words.call(null,s)));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Upper case s and use underscores to separate words.
 * 
 *   foo bar => FOO_BAR
 *   camelCase => CAMEL_CASE
 *   PascalCase => PASCAL_CASE
 */
superstring.core.screaming_snake_case = (function superstring$core$screaming_snake_case(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = superstring.core.join.call(null,"_",cljs.core.map.call(null,superstring.core.upper_case,superstring.core.split_words.call(null,s)));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Get the character in s at index i.
 */
superstring.core.char_at = (function superstring$core$char_at(s,i){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

if(cljs.core.integer_QMARK_.call(null,i)){
} else {
throw (new Error("Assert failed: (integer? i)"));
}

if((i < superstring.core.length.call(null,s))){
} else {
throw (new Error("Assert failed: (< i (length s))"));
}

var _PERCENT_ = s.charAt(i);
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Strip all accents (diacritical marks) from s.
 * 
 *   Et ça sera sa moitié => Et ca sera sa moitie
 */
superstring.core.strip_accents = (function superstring$core$strip_accents(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (function (){var from = "\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E";
var to = "aaaaaaaaccceeeeeghiiiijlnnooooooossssttuuuuuunyyczzz";
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (from,to){
return (function (c){
var temp__4655__auto__ = superstring.core.index_of.call(null,from,c);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return superstring.core.char_at.call(null,to,i);
} else {
return c;
}
});})(from,to))
,s));
})();
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Return s if s only contains ASCII characters.
 */
superstring.core.ascii_QMARK_ = (function superstring$core$ascii_QMARK_(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (cljs.core.truth_(cljs.core.reduce.call(null,(function (acc,c){
var and__27183__auto__ = acc;
if(cljs.core.truth_(and__27183__auto__)){
return (c.charCodeAt((0)) < (128));
} else {
return and__27183__auto__;
}
}),true,s))?s:null);
if(((_PERCENT_ == null)) || (typeof _PERCENT_ === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? %) (string? %))"));
}

return _PERCENT_;
});
/**
 * Translate all characters in s according to the mappings found in tmap.
 * 
 *   Any characters found in the set delete-chars will be pruned prior to
 *   consulting tmap.
 * 
 *   Any characters mapping to nil in tmap will also be deleted.
 * 
 *   (translate "abba" {"a" "b"}) => bbbb
 *   (translate "abba" {"a" "b", "b" "a"}) => baab
 *   (translate "foo" {"a" "b"}) =>  foo
 *   (translate "gabba" {"a" "b"} #{"b"}) => gbb
 *   (translate "gabba" {\a nil} #{\b}) => g
 */
superstring.core.translate = (function superstring$core$translate(var_args){
var G__29589 = arguments.length;
switch (G__29589) {
case 2:
return superstring.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.translate.cljs$core$IFn$_invoke$arity$2 = (function (s,tmap){
return superstring.core.translate.call(null,s,tmap,cljs.core.PersistentHashSet.EMPTY);
});

superstring.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (s,tmap,delete_chars){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (c){
var replacement = cljs.core.get.call(null,tmap,c,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
if(cljs.core._EQ_.call(null,replacement,new cljs.core.Keyword(null,"not-found","not-found",-629079980))){
return c;
} else {
if((replacement == null)){
return null;
} else {
return replacement;

}
}
}),cljs.core.remove.call(null,delete_chars,s))));
});

superstring.core.translate.cljs$lang$maxFixedArity = 3;

/**
 * Transform s so it's suitable for use in URLs.
 * 
 *   The following transformations are applied:
 * 
 *   * Diacritical marks are removed from all characters.
 *   * Any character which isn't alphanumeric or in #{_-.~} is removed.
 *   * Lower case
 *   * Whitespace is collapsed and replaced by a single dash.
 */
superstring.core.slug = (function superstring$core$slug(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = superstring.core.lower_case.call(null,superstring.core.replace.call(null,superstring.core.replace.call(null,superstring.core.translate.call(null,superstring.core.strip_accents.call(null,superstring.core.replace.call(null,s,/\s+/,"-")),new cljs.core.PersistentArrayMap(null, 1, ["\u0142","l"], null)),/[^A-Za-z0-9_.~-]/,""),/-+/,"-"));
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
/**
 * Return s if s contains both upper and lower case letters.
 * 
 *   (mixed-case? "foo1") => nil
 *   (mixed-case? "Foo Bar") => "Foo Bar"
 */
superstring.core.mixed_case_QMARK_ = (function superstring$core$mixed_case_QMARK_(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = (function (){var caseless = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.seq.call(null,superstring.core.lower_case.call(null,s))),cljs.core.set.call(null,cljs.core.seq.call(null,superstring.core.upper_case.call(null,s))));
var lower = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,((function (caseless){
return (function (p1__29591_SHARP_){
return superstring.core.lower_case_QMARK_.call(null,p1__29591_SHARP_);
});})(caseless))
,s)),caseless);
var upper = clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.filter.call(null,((function (caseless,lower){
return (function (p1__29592_SHARP_){
return superstring.core.upper_case_QMARK_.call(null,p1__29592_SHARP_);
});})(caseless,lower))
,s)),caseless);
if((cljs.core.seq.call(null,upper)) && (cljs.core.seq.call(null,lower))){
return s;
} else {
return null;
}
})();
if(((_PERCENT_ == null)) || (typeof _PERCENT_ === 'string')){
} else {
throw (new Error("Assert failed: (or (nil? %) (string? %))"));
}

return _PERCENT_;
});
/**
 * Convert all adjacent whitespace in s to a single space.
 */
superstring.core.collapse_whitespace = (function superstring$core$collapse_whitespace(s){
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var _PERCENT_ = superstring.core.replace.call(null,s,/[ \t\n\r]+/," ");
if(typeof _PERCENT_ === 'string'){
} else {
throw (new Error("Assert failed: (string? %)"));
}

return _PERCENT_;
});
superstring.core.levenshtein_distance = (function superstring$core$levenshtein_distance(s1,s2){
var subsolutions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var subsolution = ((function (subsolutions){
return (function (i,j){
if(((i === (0))) || ((j === (0)))){
var x__27545__auto__ = i;
var y__27546__auto__ = j;
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,subsolutions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
}
});})(subsolutions))
;
var seq__29593_29605 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(superstring.core.length.call(null,s1) + (1))));
var chunk__29594_29606 = null;
var count__29595_29607 = (0);
var i__29596_29608 = (0);
while(true){
if((i__29596_29608 < count__29595_29607)){
var i_29609 = cljs.core._nth.call(null,chunk__29594_29606,i__29596_29608);
var seq__29597_29610 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(superstring.core.length.call(null,s2) + (1))));
var chunk__29598_29611 = null;
var count__29599_29612 = (0);
var i__29600_29613 = (0);
while(true){
if((i__29600_29613 < count__29599_29612)){
var j_29614 = cljs.core._nth.call(null,chunk__29598_29611,i__29600_29613);
cljs.core.swap_BANG_.call(null,subsolutions,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_29609,j_29614], null),(function (){var x__27552__auto__ = (function (){var x__27552__auto__ = (subsolution.call(null,(i_29609 - (1)),j_29614) + (1));
var y__27553__auto__ = (subsolution.call(null,i_29609,(j_29614 - (1))) + (1));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})();
var y__27553__auto__ = (subsolution.call(null,(i_29609 - (1)),(j_29614 - (1))) + ((cljs.core._EQ_.call(null,s1.charAt((i_29609 - (1))),s2.charAt((j_29614 - (1)))))?(0):(1)));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})());

var G__29615 = seq__29597_29610;
var G__29616 = chunk__29598_29611;
var G__29617 = count__29599_29612;
var G__29618 = (i__29600_29613 + (1));
seq__29597_29610 = G__29615;
chunk__29598_29611 = G__29616;
count__29599_29612 = G__29617;
i__29600_29613 = G__29618;
continue;
} else {
var temp__4657__auto___29619 = cljs.core.seq.call(null,seq__29597_29610);
if(temp__4657__auto___29619){
var seq__29597_29620__$1 = temp__4657__auto___29619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29597_29620__$1)){
var c__28034__auto___29621 = cljs.core.chunk_first.call(null,seq__29597_29620__$1);
var G__29622 = cljs.core.chunk_rest.call(null,seq__29597_29620__$1);
var G__29623 = c__28034__auto___29621;
var G__29624 = cljs.core.count.call(null,c__28034__auto___29621);
var G__29625 = (0);
seq__29597_29610 = G__29622;
chunk__29598_29611 = G__29623;
count__29599_29612 = G__29624;
i__29600_29613 = G__29625;
continue;
} else {
var j_29626 = cljs.core.first.call(null,seq__29597_29620__$1);
cljs.core.swap_BANG_.call(null,subsolutions,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_29609,j_29626], null),(function (){var x__27552__auto__ = (function (){var x__27552__auto__ = (subsolution.call(null,(i_29609 - (1)),j_29626) + (1));
var y__27553__auto__ = (subsolution.call(null,i_29609,(j_29626 - (1))) + (1));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})();
var y__27553__auto__ = (subsolution.call(null,(i_29609 - (1)),(j_29626 - (1))) + ((cljs.core._EQ_.call(null,s1.charAt((i_29609 - (1))),s2.charAt((j_29626 - (1)))))?(0):(1)));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})());

var G__29627 = cljs.core.next.call(null,seq__29597_29620__$1);
var G__29628 = null;
var G__29629 = (0);
var G__29630 = (0);
seq__29597_29610 = G__29627;
chunk__29598_29611 = G__29628;
count__29599_29612 = G__29629;
i__29600_29613 = G__29630;
continue;
}
} else {
}
}
break;
}

var G__29631 = seq__29593_29605;
var G__29632 = chunk__29594_29606;
var G__29633 = count__29595_29607;
var G__29634 = (i__29596_29608 + (1));
seq__29593_29605 = G__29631;
chunk__29594_29606 = G__29632;
count__29595_29607 = G__29633;
i__29596_29608 = G__29634;
continue;
} else {
var temp__4657__auto___29635 = cljs.core.seq.call(null,seq__29593_29605);
if(temp__4657__auto___29635){
var seq__29593_29636__$1 = temp__4657__auto___29635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29593_29636__$1)){
var c__28034__auto___29637 = cljs.core.chunk_first.call(null,seq__29593_29636__$1);
var G__29638 = cljs.core.chunk_rest.call(null,seq__29593_29636__$1);
var G__29639 = c__28034__auto___29637;
var G__29640 = cljs.core.count.call(null,c__28034__auto___29637);
var G__29641 = (0);
seq__29593_29605 = G__29638;
chunk__29594_29606 = G__29639;
count__29595_29607 = G__29640;
i__29596_29608 = G__29641;
continue;
} else {
var i_29642 = cljs.core.first.call(null,seq__29593_29636__$1);
var seq__29601_29643 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),(superstring.core.length.call(null,s2) + (1))));
var chunk__29602_29644 = null;
var count__29603_29645 = (0);
var i__29604_29646 = (0);
while(true){
if((i__29604_29646 < count__29603_29645)){
var j_29647 = cljs.core._nth.call(null,chunk__29602_29644,i__29604_29646);
cljs.core.swap_BANG_.call(null,subsolutions,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_29642,j_29647], null),(function (){var x__27552__auto__ = (function (){var x__27552__auto__ = (subsolution.call(null,(i_29642 - (1)),j_29647) + (1));
var y__27553__auto__ = (subsolution.call(null,i_29642,(j_29647 - (1))) + (1));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})();
var y__27553__auto__ = (subsolution.call(null,(i_29642 - (1)),(j_29647 - (1))) + ((cljs.core._EQ_.call(null,s1.charAt((i_29642 - (1))),s2.charAt((j_29647 - (1)))))?(0):(1)));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})());

var G__29648 = seq__29601_29643;
var G__29649 = chunk__29602_29644;
var G__29650 = count__29603_29645;
var G__29651 = (i__29604_29646 + (1));
seq__29601_29643 = G__29648;
chunk__29602_29644 = G__29649;
count__29603_29645 = G__29650;
i__29604_29646 = G__29651;
continue;
} else {
var temp__4657__auto___29652__$1 = cljs.core.seq.call(null,seq__29601_29643);
if(temp__4657__auto___29652__$1){
var seq__29601_29653__$1 = temp__4657__auto___29652__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29601_29653__$1)){
var c__28034__auto___29654 = cljs.core.chunk_first.call(null,seq__29601_29653__$1);
var G__29655 = cljs.core.chunk_rest.call(null,seq__29601_29653__$1);
var G__29656 = c__28034__auto___29654;
var G__29657 = cljs.core.count.call(null,c__28034__auto___29654);
var G__29658 = (0);
seq__29601_29643 = G__29655;
chunk__29602_29644 = G__29656;
count__29603_29645 = G__29657;
i__29604_29646 = G__29658;
continue;
} else {
var j_29659 = cljs.core.first.call(null,seq__29601_29653__$1);
cljs.core.swap_BANG_.call(null,subsolutions,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_29642,j_29659], null),(function (){var x__27552__auto__ = (function (){var x__27552__auto__ = (subsolution.call(null,(i_29642 - (1)),j_29659) + (1));
var y__27553__auto__ = (subsolution.call(null,i_29642,(j_29659 - (1))) + (1));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})();
var y__27553__auto__ = (subsolution.call(null,(i_29642 - (1)),(j_29659 - (1))) + ((cljs.core._EQ_.call(null,s1.charAt((i_29642 - (1))),s2.charAt((j_29659 - (1)))))?(0):(1)));
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})());

var G__29660 = cljs.core.next.call(null,seq__29601_29653__$1);
var G__29661 = null;
var G__29662 = (0);
var G__29663 = (0);
seq__29601_29643 = G__29660;
chunk__29602_29644 = G__29661;
count__29603_29645 = G__29662;
i__29604_29646 = G__29663;
continue;
}
} else {
}
}
break;
}

var G__29664 = cljs.core.next.call(null,seq__29593_29636__$1);
var G__29665 = null;
var G__29666 = (0);
var G__29667 = (0);
seq__29593_29605 = G__29664;
chunk__29594_29606 = G__29665;
count__29595_29607 = G__29666;
i__29596_29608 = G__29667;
continue;
}
} else {
}
}
break;
}

return subsolution.call(null,superstring.core.length.call(null,s1),superstring.core.length.call(null,s2));
});
superstring.core.hamming_distance = (function superstring$core$hamming_distance(s1,s2){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__29668_SHARP_,p2__29669_SHARP_){
if(cljs.core._EQ_.call(null,p1__29668_SHARP_,p2__29669_SHARP_)){
return (0);
} else {
return (1);
}
}),s1,s2)) + ((function (){var x__27545__auto__ = superstring.core.length.call(null,s1);
var y__27546__auto__ = superstring.core.length.call(null,s2);
return ((x__27545__auto__ > y__27546__auto__) ? x__27545__auto__ : y__27546__auto__);
})() - (function (){var x__27552__auto__ = superstring.core.length.call(null,s1);
var y__27553__auto__ = superstring.core.length.call(null,s2);
return ((x__27552__auto__ < y__27553__auto__) ? x__27552__auto__ : y__27553__auto__);
})()));
});
/**
 * Get the edit distance between s1 and s2.
 * 
 *   The default distance metric is the Levenshtein distance.
 * 
 *   The optional algorithm argument can be either :levenshtein to get
 *   the default, or :hamming to get the Hamming distance between s1 and
 *   s2.
 */
superstring.core.distance = (function superstring$core$distance(var_args){
var G__29671 = arguments.length;
switch (G__29671) {
case 2:
return superstring.core.distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superstring.core.distance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

superstring.core.distance.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = superstring.core.levenshtein_distance.call(null,s1,s2);
if(cljs.core.integer_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (integer? %)"));
}

return _PERCENT_;
});

superstring.core.distance.cljs$core$IFn$_invoke$arity$3 = (function (s1,s2,algorithm){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = (function (){var G__29672 = algorithm;
var G__29672__$1 = (((G__29672 instanceof cljs.core.Keyword))?G__29672.fqn:null);
switch (G__29672__$1) {
case "levenshtein":
return superstring.core.distance.call(null,s1,s2);

break;
case "hamming":
return superstring.core.hamming_distance.call(null,s1,s2);

break;
default:
var msg = ["Unknown algorithm: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(algorithm)].join('');
throw Error(msg);

}
})();
if(cljs.core.integer_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (integer? %)"));
}

return _PERCENT_;
});

superstring.core.distance.cljs$lang$maxFixedArity = 3;

/**
 * Returns the set of the longest common substrings in s1 and s2.
 * 
 *   This implementation uses dynamic programming, and not a generalized
 *   suffix tree, so the runtime is O(nm).
 */
superstring.core.longest_common_substring = (function superstring$core$longest_common_substring(s1,s2){
if(typeof s1 === 'string'){
} else {
throw (new Error("Assert failed: (string? s1)"));
}

if(typeof s2 === 'string'){
} else {
throw (new Error("Assert failed: (string? s2)"));
}

var _PERCENT_ = (function (){var rows = (superstring.core.length.call(null,s1) + (1));
var cols = (superstring.core.length.call(null,s2) + (1));
var ls = (function (){var ls = (new Array(rows));
var n__28140__auto___29699 = rows;
var row_29700 = (0);
while(true){
if((row_29700 < n__28140__auto___29699)){
(ls[row_29700] = (new Array(cols)));

var G__29701 = (row_29700 + (1));
row_29700 = G__29701;
continue;
} else {
}
break;
}

return ls;
})();
var z = cljs.core.atom.call(null,(0));
var ret = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var seq__29675_29702 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),rows));
var chunk__29676_29703 = null;
var count__29677_29704 = (0);
var i__29678_29705 = (0);
while(true){
if((i__29678_29705 < count__29677_29704)){
var i_29706 = cljs.core._nth.call(null,chunk__29676_29703,i__29678_29705);
var seq__29679_29707 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),cols));
var chunk__29680_29708 = null;
var count__29681_29709 = (0);
var i__29682_29710 = (0);
while(true){
if((i__29682_29710 < count__29681_29709)){
var j_29711 = cljs.core._nth.call(null,chunk__29680_29708,i__29682_29710);
(ls[i_29706][j_29711] = (0));

var G__29712 = seq__29679_29707;
var G__29713 = chunk__29680_29708;
var G__29714 = count__29681_29709;
var G__29715 = (i__29682_29710 + (1));
seq__29679_29707 = G__29712;
chunk__29680_29708 = G__29713;
count__29681_29709 = G__29714;
i__29682_29710 = G__29715;
continue;
} else {
var temp__4657__auto___29716 = cljs.core.seq.call(null,seq__29679_29707);
if(temp__4657__auto___29716){
var seq__29679_29717__$1 = temp__4657__auto___29716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29679_29717__$1)){
var c__28034__auto___29718 = cljs.core.chunk_first.call(null,seq__29679_29717__$1);
var G__29719 = cljs.core.chunk_rest.call(null,seq__29679_29717__$1);
var G__29720 = c__28034__auto___29718;
var G__29721 = cljs.core.count.call(null,c__28034__auto___29718);
var G__29722 = (0);
seq__29679_29707 = G__29719;
chunk__29680_29708 = G__29720;
count__29681_29709 = G__29721;
i__29682_29710 = G__29722;
continue;
} else {
var j_29723 = cljs.core.first.call(null,seq__29679_29717__$1);
(ls[i_29706][j_29723] = (0));

var G__29724 = cljs.core.next.call(null,seq__29679_29717__$1);
var G__29725 = null;
var G__29726 = (0);
var G__29727 = (0);
seq__29679_29707 = G__29724;
chunk__29680_29708 = G__29725;
count__29681_29709 = G__29726;
i__29682_29710 = G__29727;
continue;
}
} else {
}
}
break;
}

var G__29728 = seq__29675_29702;
var G__29729 = chunk__29676_29703;
var G__29730 = count__29677_29704;
var G__29731 = (i__29678_29705 + (1));
seq__29675_29702 = G__29728;
chunk__29676_29703 = G__29729;
count__29677_29704 = G__29730;
i__29678_29705 = G__29731;
continue;
} else {
var temp__4657__auto___29732 = cljs.core.seq.call(null,seq__29675_29702);
if(temp__4657__auto___29732){
var seq__29675_29733__$1 = temp__4657__auto___29732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29675_29733__$1)){
var c__28034__auto___29734 = cljs.core.chunk_first.call(null,seq__29675_29733__$1);
var G__29735 = cljs.core.chunk_rest.call(null,seq__29675_29733__$1);
var G__29736 = c__28034__auto___29734;
var G__29737 = cljs.core.count.call(null,c__28034__auto___29734);
var G__29738 = (0);
seq__29675_29702 = G__29735;
chunk__29676_29703 = G__29736;
count__29677_29704 = G__29737;
i__29678_29705 = G__29738;
continue;
} else {
var i_29739 = cljs.core.first.call(null,seq__29675_29733__$1);
var seq__29683_29740 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),cols));
var chunk__29684_29741 = null;
var count__29685_29742 = (0);
var i__29686_29743 = (0);
while(true){
if((i__29686_29743 < count__29685_29742)){
var j_29744 = cljs.core._nth.call(null,chunk__29684_29741,i__29686_29743);
(ls[i_29739][j_29744] = (0));

var G__29745 = seq__29683_29740;
var G__29746 = chunk__29684_29741;
var G__29747 = count__29685_29742;
var G__29748 = (i__29686_29743 + (1));
seq__29683_29740 = G__29745;
chunk__29684_29741 = G__29746;
count__29685_29742 = G__29747;
i__29686_29743 = G__29748;
continue;
} else {
var temp__4657__auto___29749__$1 = cljs.core.seq.call(null,seq__29683_29740);
if(temp__4657__auto___29749__$1){
var seq__29683_29750__$1 = temp__4657__auto___29749__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29683_29750__$1)){
var c__28034__auto___29751 = cljs.core.chunk_first.call(null,seq__29683_29750__$1);
var G__29752 = cljs.core.chunk_rest.call(null,seq__29683_29750__$1);
var G__29753 = c__28034__auto___29751;
var G__29754 = cljs.core.count.call(null,c__28034__auto___29751);
var G__29755 = (0);
seq__29683_29740 = G__29752;
chunk__29684_29741 = G__29753;
count__29685_29742 = G__29754;
i__29686_29743 = G__29755;
continue;
} else {
var j_29756 = cljs.core.first.call(null,seq__29683_29750__$1);
(ls[i_29739][j_29756] = (0));

var G__29757 = cljs.core.next.call(null,seq__29683_29750__$1);
var G__29758 = null;
var G__29759 = (0);
var G__29760 = (0);
seq__29683_29740 = G__29757;
chunk__29684_29741 = G__29758;
count__29685_29742 = G__29759;
i__29686_29743 = G__29760;
continue;
}
} else {
}
}
break;
}

var G__29761 = cljs.core.next.call(null,seq__29675_29733__$1);
var G__29762 = null;
var G__29763 = (0);
var G__29764 = (0);
seq__29675_29702 = G__29761;
chunk__29676_29703 = G__29762;
count__29677_29704 = G__29763;
i__29678_29705 = G__29764;
continue;
}
} else {
}
}
break;
}

var seq__29687_29765 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),rows));
var chunk__29688_29766 = null;
var count__29689_29767 = (0);
var i__29690_29768 = (0);
while(true){
if((i__29690_29768 < count__29689_29767)){
var i_29769 = cljs.core._nth.call(null,chunk__29688_29766,i__29690_29768);
var seq__29691_29770 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),cols));
var chunk__29692_29771 = null;
var count__29693_29772 = (0);
var i__29694_29773 = (0);
while(true){
if((i__29694_29773 < count__29693_29772)){
var j_29774 = cljs.core._nth.call(null,chunk__29692_29771,i__29694_29773);
if(cljs.core._EQ_.call(null,s1.charAt((i_29769 - (1))),s2.charAt((j_29774 - (1))))){
if((cljs.core._EQ_.call(null,i_29769,(0))) || (cljs.core._EQ_.call(null,j_29774,(0)))){
(ls[i_29769][j_29774] = (1));
} else {
(ls[i_29769][j_29774] = ((ls[(i_29769 - (1))][(j_29774 - (1))]) + (1)));
}

if(((ls[i_29769][j_29774]) > cljs.core.deref.call(null,z))){
cljs.core.reset_BANG_.call(null,z,(ls[i_29769][j_29774]));

cljs.core.reset_BANG_.call(null,ret,cljs.core.PersistentHashSet.createAsIfByAssoc([superstring.core.substring.call(null,s1,(i_29769 - cljs.core.deref.call(null,z)),i_29769)]));
} else {
if(cljs.core._EQ_.call(null,(ls[i_29769][j_29774]),cljs.core.deref.call(null,z))){
cljs.core.swap_BANG_.call(null,ret,cljs.core.conj,superstring.core.substring.call(null,s1,(i_29769 - cljs.core.deref.call(null,z)),i_29769));
} else {
}
}
} else {
}

var G__29775 = seq__29691_29770;
var G__29776 = chunk__29692_29771;
var G__29777 = count__29693_29772;
var G__29778 = (i__29694_29773 + (1));
seq__29691_29770 = G__29775;
chunk__29692_29771 = G__29776;
count__29693_29772 = G__29777;
i__29694_29773 = G__29778;
continue;
} else {
var temp__4657__auto___29779 = cljs.core.seq.call(null,seq__29691_29770);
if(temp__4657__auto___29779){
var seq__29691_29780__$1 = temp__4657__auto___29779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29691_29780__$1)){
var c__28034__auto___29781 = cljs.core.chunk_first.call(null,seq__29691_29780__$1);
var G__29782 = cljs.core.chunk_rest.call(null,seq__29691_29780__$1);
var G__29783 = c__28034__auto___29781;
var G__29784 = cljs.core.count.call(null,c__28034__auto___29781);
var G__29785 = (0);
seq__29691_29770 = G__29782;
chunk__29692_29771 = G__29783;
count__29693_29772 = G__29784;
i__29694_29773 = G__29785;
continue;
} else {
var j_29786 = cljs.core.first.call(null,seq__29691_29780__$1);
if(cljs.core._EQ_.call(null,s1.charAt((i_29769 - (1))),s2.charAt((j_29786 - (1))))){
if((cljs.core._EQ_.call(null,i_29769,(0))) || (cljs.core._EQ_.call(null,j_29786,(0)))){
(ls[i_29769][j_29786] = (1));
} else {
(ls[i_29769][j_29786] = ((ls[(i_29769 - (1))][(j_29786 - (1))]) + (1)));
}

if(((ls[i_29769][j_29786]) > cljs.core.deref.call(null,z))){
cljs.core.reset_BANG_.call(null,z,(ls[i_29769][j_29786]));

cljs.core.reset_BANG_.call(null,ret,cljs.core.PersistentHashSet.createAsIfByAssoc([superstring.core.substring.call(null,s1,(i_29769 - cljs.core.deref.call(null,z)),i_29769)]));
} else {
if(cljs.core._EQ_.call(null,(ls[i_29769][j_29786]),cljs.core.deref.call(null,z))){
cljs.core.swap_BANG_.call(null,ret,cljs.core.conj,superstring.core.substring.call(null,s1,(i_29769 - cljs.core.deref.call(null,z)),i_29769));
} else {
}
}
} else {
}

var G__29787 = cljs.core.next.call(null,seq__29691_29780__$1);
var G__29788 = null;
var G__29789 = (0);
var G__29790 = (0);
seq__29691_29770 = G__29787;
chunk__29692_29771 = G__29788;
count__29693_29772 = G__29789;
i__29694_29773 = G__29790;
continue;
}
} else {
}
}
break;
}

var G__29791 = seq__29687_29765;
var G__29792 = chunk__29688_29766;
var G__29793 = count__29689_29767;
var G__29794 = (i__29690_29768 + (1));
seq__29687_29765 = G__29791;
chunk__29688_29766 = G__29792;
count__29689_29767 = G__29793;
i__29690_29768 = G__29794;
continue;
} else {
var temp__4657__auto___29795 = cljs.core.seq.call(null,seq__29687_29765);
if(temp__4657__auto___29795){
var seq__29687_29796__$1 = temp__4657__auto___29795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29687_29796__$1)){
var c__28034__auto___29797 = cljs.core.chunk_first.call(null,seq__29687_29796__$1);
var G__29798 = cljs.core.chunk_rest.call(null,seq__29687_29796__$1);
var G__29799 = c__28034__auto___29797;
var G__29800 = cljs.core.count.call(null,c__28034__auto___29797);
var G__29801 = (0);
seq__29687_29765 = G__29798;
chunk__29688_29766 = G__29799;
count__29689_29767 = G__29800;
i__29690_29768 = G__29801;
continue;
} else {
var i_29802 = cljs.core.first.call(null,seq__29687_29796__$1);
var seq__29695_29803 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),cols));
var chunk__29696_29804 = null;
var count__29697_29805 = (0);
var i__29698_29806 = (0);
while(true){
if((i__29698_29806 < count__29697_29805)){
var j_29807 = cljs.core._nth.call(null,chunk__29696_29804,i__29698_29806);
if(cljs.core._EQ_.call(null,s1.charAt((i_29802 - (1))),s2.charAt((j_29807 - (1))))){
if((cljs.core._EQ_.call(null,i_29802,(0))) || (cljs.core._EQ_.call(null,j_29807,(0)))){
(ls[i_29802][j_29807] = (1));
} else {
(ls[i_29802][j_29807] = ((ls[(i_29802 - (1))][(j_29807 - (1))]) + (1)));
}

if(((ls[i_29802][j_29807]) > cljs.core.deref.call(null,z))){
cljs.core.reset_BANG_.call(null,z,(ls[i_29802][j_29807]));

cljs.core.reset_BANG_.call(null,ret,cljs.core.PersistentHashSet.createAsIfByAssoc([superstring.core.substring.call(null,s1,(i_29802 - cljs.core.deref.call(null,z)),i_29802)]));
} else {
if(cljs.core._EQ_.call(null,(ls[i_29802][j_29807]),cljs.core.deref.call(null,z))){
cljs.core.swap_BANG_.call(null,ret,cljs.core.conj,superstring.core.substring.call(null,s1,(i_29802 - cljs.core.deref.call(null,z)),i_29802));
} else {
}
}
} else {
}

var G__29808 = seq__29695_29803;
var G__29809 = chunk__29696_29804;
var G__29810 = count__29697_29805;
var G__29811 = (i__29698_29806 + (1));
seq__29695_29803 = G__29808;
chunk__29696_29804 = G__29809;
count__29697_29805 = G__29810;
i__29698_29806 = G__29811;
continue;
} else {
var temp__4657__auto___29812__$1 = cljs.core.seq.call(null,seq__29695_29803);
if(temp__4657__auto___29812__$1){
var seq__29695_29813__$1 = temp__4657__auto___29812__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29695_29813__$1)){
var c__28034__auto___29814 = cljs.core.chunk_first.call(null,seq__29695_29813__$1);
var G__29815 = cljs.core.chunk_rest.call(null,seq__29695_29813__$1);
var G__29816 = c__28034__auto___29814;
var G__29817 = cljs.core.count.call(null,c__28034__auto___29814);
var G__29818 = (0);
seq__29695_29803 = G__29815;
chunk__29696_29804 = G__29816;
count__29697_29805 = G__29817;
i__29698_29806 = G__29818;
continue;
} else {
var j_29819 = cljs.core.first.call(null,seq__29695_29813__$1);
if(cljs.core._EQ_.call(null,s1.charAt((i_29802 - (1))),s2.charAt((j_29819 - (1))))){
if((cljs.core._EQ_.call(null,i_29802,(0))) || (cljs.core._EQ_.call(null,j_29819,(0)))){
(ls[i_29802][j_29819] = (1));
} else {
(ls[i_29802][j_29819] = ((ls[(i_29802 - (1))][(j_29819 - (1))]) + (1)));
}

if(((ls[i_29802][j_29819]) > cljs.core.deref.call(null,z))){
cljs.core.reset_BANG_.call(null,z,(ls[i_29802][j_29819]));

cljs.core.reset_BANG_.call(null,ret,cljs.core.PersistentHashSet.createAsIfByAssoc([superstring.core.substring.call(null,s1,(i_29802 - cljs.core.deref.call(null,z)),i_29802)]));
} else {
if(cljs.core._EQ_.call(null,(ls[i_29802][j_29819]),cljs.core.deref.call(null,z))){
cljs.core.swap_BANG_.call(null,ret,cljs.core.conj,superstring.core.substring.call(null,s1,(i_29802 - cljs.core.deref.call(null,z)),i_29802));
} else {
}
}
} else {
}

var G__29820 = cljs.core.next.call(null,seq__29695_29813__$1);
var G__29821 = null;
var G__29822 = (0);
var G__29823 = (0);
seq__29695_29803 = G__29820;
chunk__29696_29804 = G__29821;
count__29697_29805 = G__29822;
i__29698_29806 = G__29823;
continue;
}
} else {
}
}
break;
}

var G__29824 = cljs.core.next.call(null,seq__29687_29796__$1);
var G__29825 = null;
var G__29826 = (0);
var G__29827 = (0);
seq__29687_29765 = G__29824;
chunk__29688_29766 = G__29825;
count__29689_29767 = G__29826;
i__29690_29768 = G__29827;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,ret);
})();
if(cljs.core.set_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error("Assert failed: (set? %)"));
}

return _PERCENT_;
});

//# sourceMappingURL=core.js.map?rel=1507441548083
