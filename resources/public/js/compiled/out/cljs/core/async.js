// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42043 = arguments.length;
switch (G__42043) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42044 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42044 = (function (f,blockable,meta42045){
this.f = f;
this.blockable = blockable;
this.meta42045 = meta42045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42046,meta42045__$1){
var self__ = this;
var _42046__$1 = this;
return (new cljs.core.async.t_cljs$core$async42044(self__.f,self__.blockable,meta42045__$1));
});

cljs.core.async.t_cljs$core$async42044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42046){
var self__ = this;
var _42046__$1 = this;
return self__.meta42045;
});

cljs.core.async.t_cljs$core$async42044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42045","meta42045",-1333779316,null)], null);
});

cljs.core.async.t_cljs$core$async42044.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42044";

cljs.core.async.t_cljs$core$async42044.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async42044");
});

cljs.core.async.__GT_t_cljs$core$async42044 = (function cljs$core$async$__GT_t_cljs$core$async42044(f__$1,blockable__$1,meta42045){
return (new cljs.core.async.t_cljs$core$async42044(f__$1,blockable__$1,meta42045));
});

}

return (new cljs.core.async.t_cljs$core$async42044(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42050 = arguments.length;
switch (G__42050) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42053 = arguments.length;
switch (G__42053) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42056 = arguments.length;
switch (G__42056) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42058 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42058);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42058,ret){
return (function (){
return fn1.call(null,val_42058);
});})(val_42058,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42060 = arguments.length;
switch (G__42060) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28140__auto___42062 = n;
var x_42063 = (0);
while(true){
if((x_42063 < n__28140__auto___42062)){
(a[x_42063] = (0));

var G__42064 = (x_42063 + (1));
x_42063 = G__42064;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__42065 = (i + (1));
i = G__42065;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async42066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42066 = (function (flag,meta42067){
this.flag = flag;
this.meta42067 = meta42067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42068,meta42067__$1){
var self__ = this;
var _42068__$1 = this;
return (new cljs.core.async.t_cljs$core$async42066(self__.flag,meta42067__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42068){
var self__ = this;
var _42068__$1 = this;
return self__.meta42067;
});})(flag))
;

cljs.core.async.t_cljs$core$async42066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42066.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42067","meta42067",-749167419,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42066";

cljs.core.async.t_cljs$core$async42066.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async42066");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42066 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42066(flag__$1,meta42067){
return (new cljs.core.async.t_cljs$core$async42066(flag__$1,meta42067));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42066(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42069 = (function (flag,cb,meta42070){
this.flag = flag;
this.cb = cb;
this.meta42070 = meta42070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42071,meta42070__$1){
var self__ = this;
var _42071__$1 = this;
return (new cljs.core.async.t_cljs$core$async42069(self__.flag,self__.cb,meta42070__$1));
});

cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42071){
var self__ = this;
var _42071__$1 = this;
return self__.meta42070;
});

cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42070","meta42070",1897727690,null)], null);
});

cljs.core.async.t_cljs$core$async42069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42069";

cljs.core.async.t_cljs$core$async42069.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async42069");
});

cljs.core.async.__GT_t_cljs$core$async42069 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42069(flag__$1,cb__$1,meta42070){
return (new cljs.core.async.t_cljs$core$async42069(flag__$1,cb__$1,meta42070));
});

}

return (new cljs.core.async.t_cljs$core$async42069(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42072_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42073_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27195__auto__ = wport;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42074 = (i + (1));
i = G__42074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27195__auto__ = ret;
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27183__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27183__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27183__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42080 = arguments.length;
var i__28365__auto___42081 = (0);
while(true){
if((i__28365__auto___42081 < len__28364__auto___42080)){
args__28371__auto__.push((arguments[i__28365__auto___42081]));

var G__42082 = (i__28365__auto___42081 + (1));
i__28365__auto___42081 = G__42082;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((1) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42077){
var map__42078 = p__42077;
var map__42078__$1 = ((((!((map__42078 == null)))?((((map__42078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42078):map__42078);
var opts = map__42078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42075){
var G__42076 = cljs.core.first.call(null,seq42075);
var seq42075__$1 = cljs.core.next.call(null,seq42075);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42076,seq42075__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42084 = arguments.length;
switch (G__42084) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31469__auto___42130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___42130){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___42130){
return (function (state_42108){
var state_val_42109 = (state_42108[(1)]);
if((state_val_42109 === (7))){
var inst_42104 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42110_42131 = state_42108__$1;
(statearr_42110_42131[(2)] = inst_42104);

(statearr_42110_42131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (1))){
var state_42108__$1 = state_42108;
var statearr_42111_42132 = state_42108__$1;
(statearr_42111_42132[(2)] = null);

(statearr_42111_42132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (4))){
var inst_42087 = (state_42108[(7)]);
var inst_42087__$1 = (state_42108[(2)]);
var inst_42088 = (inst_42087__$1 == null);
var state_42108__$1 = (function (){var statearr_42112 = state_42108;
(statearr_42112[(7)] = inst_42087__$1);

return statearr_42112;
})();
if(cljs.core.truth_(inst_42088)){
var statearr_42113_42133 = state_42108__$1;
(statearr_42113_42133[(1)] = (5));

} else {
var statearr_42114_42134 = state_42108__$1;
(statearr_42114_42134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (13))){
var state_42108__$1 = state_42108;
var statearr_42115_42135 = state_42108__$1;
(statearr_42115_42135[(2)] = null);

(statearr_42115_42135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (6))){
var inst_42087 = (state_42108[(7)]);
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42108__$1,(11),to,inst_42087);
} else {
if((state_val_42109 === (3))){
var inst_42106 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42108__$1,inst_42106);
} else {
if((state_val_42109 === (12))){
var state_42108__$1 = state_42108;
var statearr_42116_42136 = state_42108__$1;
(statearr_42116_42136[(2)] = null);

(statearr_42116_42136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (2))){
var state_42108__$1 = state_42108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42108__$1,(4),from);
} else {
if((state_val_42109 === (11))){
var inst_42097 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
if(cljs.core.truth_(inst_42097)){
var statearr_42117_42137 = state_42108__$1;
(statearr_42117_42137[(1)] = (12));

} else {
var statearr_42118_42138 = state_42108__$1;
(statearr_42118_42138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (9))){
var state_42108__$1 = state_42108;
var statearr_42119_42139 = state_42108__$1;
(statearr_42119_42139[(2)] = null);

(statearr_42119_42139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (5))){
var state_42108__$1 = state_42108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42120_42140 = state_42108__$1;
(statearr_42120_42140[(1)] = (8));

} else {
var statearr_42121_42141 = state_42108__$1;
(statearr_42121_42141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (14))){
var inst_42102 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42122_42142 = state_42108__$1;
(statearr_42122_42142[(2)] = inst_42102);

(statearr_42122_42142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (10))){
var inst_42094 = (state_42108[(2)]);
var state_42108__$1 = state_42108;
var statearr_42123_42143 = state_42108__$1;
(statearr_42123_42143[(2)] = inst_42094);

(statearr_42123_42143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42109 === (8))){
var inst_42091 = cljs.core.async.close_BANG_.call(null,to);
var state_42108__$1 = state_42108;
var statearr_42124_42144 = state_42108__$1;
(statearr_42124_42144[(2)] = inst_42091);

(statearr_42124_42144[(1)] = (10));


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
});})(c__31469__auto___42130))
;
return ((function (switch__31381__auto__,c__31469__auto___42130){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_42125 = [null,null,null,null,null,null,null,null];
(statearr_42125[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_42125[(1)] = (1));

return statearr_42125;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_42108){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42126){if((e42126 instanceof Object)){
var ex__31385__auto__ = e42126;
var statearr_42127_42145 = state_42108;
(statearr_42127_42145[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42146 = state_42108;
state_42108 = G__42146;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_42108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_42108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___42130))
})();
var state__31471__auto__ = (function (){var statearr_42128 = f__31470__auto__.call(null);
(statearr_42128[(6)] = c__31469__auto___42130);

return statearr_42128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___42130))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42147){
var vec__42148 = p__42147;
var v = cljs.core.nth.call(null,vec__42148,(0),null);
var p = cljs.core.nth.call(null,vec__42148,(1),null);
var job = vec__42148;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31469__auto___42319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___42319,res,vec__42148,v,p,job,jobs,results){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___42319,res,vec__42148,v,p,job,jobs,results){
return (function (state_42155){
var state_val_42156 = (state_42155[(1)]);
if((state_val_42156 === (1))){
var state_42155__$1 = state_42155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42155__$1,(2),res,v);
} else {
if((state_val_42156 === (2))){
var inst_42152 = (state_42155[(2)]);
var inst_42153 = cljs.core.async.close_BANG_.call(null,res);
var state_42155__$1 = (function (){var statearr_42157 = state_42155;
(statearr_42157[(7)] = inst_42152);

return statearr_42157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42155__$1,inst_42153);
} else {
return null;
}
}
});})(c__31469__auto___42319,res,vec__42148,v,p,job,jobs,results))
;
return ((function (switch__31381__auto__,c__31469__auto___42319,res,vec__42148,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0 = (function (){
var statearr_42158 = [null,null,null,null,null,null,null,null];
(statearr_42158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__);

(statearr_42158[(1)] = (1));

return statearr_42158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1 = (function (state_42155){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42159){if((e42159 instanceof Object)){
var ex__31385__auto__ = e42159;
var statearr_42160_42320 = state_42155;
(statearr_42160_42320[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42321 = state_42155;
state_42155 = G__42321;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = function(state_42155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1.call(this,state_42155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___42319,res,vec__42148,v,p,job,jobs,results))
})();
var state__31471__auto__ = (function (){var statearr_42161 = f__31470__auto__.call(null);
(statearr_42161[(6)] = c__31469__auto___42319);

return statearr_42161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___42319,res,vec__42148,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42162){
var vec__42163 = p__42162;
var v = cljs.core.nth.call(null,vec__42163,(0),null);
var p = cljs.core.nth.call(null,vec__42163,(1),null);
var job = vec__42163;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28140__auto___42322 = n;
var __42323 = (0);
while(true){
if((__42323 < n__28140__auto___42322)){
var G__42166_42324 = type;
var G__42166_42325__$1 = (((G__42166_42324 instanceof cljs.core.Keyword))?G__42166_42324.fqn:null);
switch (G__42166_42325__$1) {
case "compute":
var c__31469__auto___42327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42323,c__31469__auto___42327,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (__42323,c__31469__auto___42327,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async){
return (function (state_42179){
var state_val_42180 = (state_42179[(1)]);
if((state_val_42180 === (1))){
var state_42179__$1 = state_42179;
var statearr_42181_42328 = state_42179__$1;
(statearr_42181_42328[(2)] = null);

(statearr_42181_42328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42180 === (2))){
var state_42179__$1 = state_42179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42179__$1,(4),jobs);
} else {
if((state_val_42180 === (3))){
var inst_42177 = (state_42179[(2)]);
var state_42179__$1 = state_42179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42179__$1,inst_42177);
} else {
if((state_val_42180 === (4))){
var inst_42169 = (state_42179[(2)]);
var inst_42170 = process.call(null,inst_42169);
var state_42179__$1 = state_42179;
if(cljs.core.truth_(inst_42170)){
var statearr_42182_42329 = state_42179__$1;
(statearr_42182_42329[(1)] = (5));

} else {
var statearr_42183_42330 = state_42179__$1;
(statearr_42183_42330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42180 === (5))){
var state_42179__$1 = state_42179;
var statearr_42184_42331 = state_42179__$1;
(statearr_42184_42331[(2)] = null);

(statearr_42184_42331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42180 === (6))){
var state_42179__$1 = state_42179;
var statearr_42185_42332 = state_42179__$1;
(statearr_42185_42332[(2)] = null);

(statearr_42185_42332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42180 === (7))){
var inst_42175 = (state_42179[(2)]);
var state_42179__$1 = state_42179;
var statearr_42186_42333 = state_42179__$1;
(statearr_42186_42333[(2)] = inst_42175);

(statearr_42186_42333[(1)] = (3));


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
});})(__42323,c__31469__auto___42327,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async))
;
return ((function (__42323,switch__31381__auto__,c__31469__auto___42327,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0 = (function (){
var statearr_42187 = [null,null,null,null,null,null,null];
(statearr_42187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__);

(statearr_42187[(1)] = (1));

return statearr_42187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1 = (function (state_42179){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42188){if((e42188 instanceof Object)){
var ex__31385__auto__ = e42188;
var statearr_42189_42334 = state_42179;
(statearr_42189_42334[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42335 = state_42179;
state_42179 = G__42335;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = function(state_42179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1.call(this,state_42179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__;
})()
;})(__42323,switch__31381__auto__,c__31469__auto___42327,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async))
})();
var state__31471__auto__ = (function (){var statearr_42190 = f__31470__auto__.call(null);
(statearr_42190[(6)] = c__31469__auto___42327);

return statearr_42190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(__42323,c__31469__auto___42327,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async))
);


break;
case "async":
var c__31469__auto___42336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42323,c__31469__auto___42336,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (__42323,c__31469__auto___42336,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async){
return (function (state_42203){
var state_val_42204 = (state_42203[(1)]);
if((state_val_42204 === (1))){
var state_42203__$1 = state_42203;
var statearr_42205_42337 = state_42203__$1;
(statearr_42205_42337[(2)] = null);

(statearr_42205_42337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (2))){
var state_42203__$1 = state_42203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42203__$1,(4),jobs);
} else {
if((state_val_42204 === (3))){
var inst_42201 = (state_42203[(2)]);
var state_42203__$1 = state_42203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42203__$1,inst_42201);
} else {
if((state_val_42204 === (4))){
var inst_42193 = (state_42203[(2)]);
var inst_42194 = async.call(null,inst_42193);
var state_42203__$1 = state_42203;
if(cljs.core.truth_(inst_42194)){
var statearr_42206_42338 = state_42203__$1;
(statearr_42206_42338[(1)] = (5));

} else {
var statearr_42207_42339 = state_42203__$1;
(statearr_42207_42339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (5))){
var state_42203__$1 = state_42203;
var statearr_42208_42340 = state_42203__$1;
(statearr_42208_42340[(2)] = null);

(statearr_42208_42340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (6))){
var state_42203__$1 = state_42203;
var statearr_42209_42341 = state_42203__$1;
(statearr_42209_42341[(2)] = null);

(statearr_42209_42341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42204 === (7))){
var inst_42199 = (state_42203[(2)]);
var state_42203__$1 = state_42203;
var statearr_42210_42342 = state_42203__$1;
(statearr_42210_42342[(2)] = inst_42199);

(statearr_42210_42342[(1)] = (3));


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
});})(__42323,c__31469__auto___42336,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async))
;
return ((function (__42323,switch__31381__auto__,c__31469__auto___42336,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0 = (function (){
var statearr_42211 = [null,null,null,null,null,null,null];
(statearr_42211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__);

(statearr_42211[(1)] = (1));

return statearr_42211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1 = (function (state_42203){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42212){if((e42212 instanceof Object)){
var ex__31385__auto__ = e42212;
var statearr_42213_42343 = state_42203;
(statearr_42213_42343[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42344 = state_42203;
state_42203 = G__42344;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = function(state_42203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1.call(this,state_42203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__;
})()
;})(__42323,switch__31381__auto__,c__31469__auto___42336,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async))
})();
var state__31471__auto__ = (function (){var statearr_42214 = f__31470__auto__.call(null);
(statearr_42214[(6)] = c__31469__auto___42336);

return statearr_42214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(__42323,c__31469__auto___42336,G__42166_42324,G__42166_42325__$1,n__28140__auto___42322,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42166_42325__$1)].join('')));

}

var G__42345 = (__42323 + (1));
__42323 = G__42345;
continue;
} else {
}
break;
}

var c__31469__auto___42346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___42346,jobs,results,process,async){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___42346,jobs,results,process,async){
return (function (state_42236){
var state_val_42237 = (state_42236[(1)]);
if((state_val_42237 === (1))){
var state_42236__$1 = state_42236;
var statearr_42238_42347 = state_42236__$1;
(statearr_42238_42347[(2)] = null);

(statearr_42238_42347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42237 === (2))){
var state_42236__$1 = state_42236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42236__$1,(4),from);
} else {
if((state_val_42237 === (3))){
var inst_42234 = (state_42236[(2)]);
var state_42236__$1 = state_42236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42236__$1,inst_42234);
} else {
if((state_val_42237 === (4))){
var inst_42217 = (state_42236[(7)]);
var inst_42217__$1 = (state_42236[(2)]);
var inst_42218 = (inst_42217__$1 == null);
var state_42236__$1 = (function (){var statearr_42239 = state_42236;
(statearr_42239[(7)] = inst_42217__$1);

return statearr_42239;
})();
if(cljs.core.truth_(inst_42218)){
var statearr_42240_42348 = state_42236__$1;
(statearr_42240_42348[(1)] = (5));

} else {
var statearr_42241_42349 = state_42236__$1;
(statearr_42241_42349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42237 === (5))){
var inst_42220 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42236__$1 = state_42236;
var statearr_42242_42350 = state_42236__$1;
(statearr_42242_42350[(2)] = inst_42220);

(statearr_42242_42350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42237 === (6))){
var inst_42217 = (state_42236[(7)]);
var inst_42222 = (state_42236[(8)]);
var inst_42222__$1 = cljs.core.async.chan.call(null,(1));
var inst_42223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42224 = [inst_42217,inst_42222__$1];
var inst_42225 = (new cljs.core.PersistentVector(null,2,(5),inst_42223,inst_42224,null));
var state_42236__$1 = (function (){var statearr_42243 = state_42236;
(statearr_42243[(8)] = inst_42222__$1);

return statearr_42243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42236__$1,(8),jobs,inst_42225);
} else {
if((state_val_42237 === (7))){
var inst_42232 = (state_42236[(2)]);
var state_42236__$1 = state_42236;
var statearr_42244_42351 = state_42236__$1;
(statearr_42244_42351[(2)] = inst_42232);

(statearr_42244_42351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42237 === (8))){
var inst_42222 = (state_42236[(8)]);
var inst_42227 = (state_42236[(2)]);
var state_42236__$1 = (function (){var statearr_42245 = state_42236;
(statearr_42245[(9)] = inst_42227);

return statearr_42245;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42236__$1,(9),results,inst_42222);
} else {
if((state_val_42237 === (9))){
var inst_42229 = (state_42236[(2)]);
var state_42236__$1 = (function (){var statearr_42246 = state_42236;
(statearr_42246[(10)] = inst_42229);

return statearr_42246;
})();
var statearr_42247_42352 = state_42236__$1;
(statearr_42247_42352[(2)] = null);

(statearr_42247_42352[(1)] = (2));


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
});})(c__31469__auto___42346,jobs,results,process,async))
;
return ((function (switch__31381__auto__,c__31469__auto___42346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0 = (function (){
var statearr_42248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__);

(statearr_42248[(1)] = (1));

return statearr_42248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1 = (function (state_42236){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42249){if((e42249 instanceof Object)){
var ex__31385__auto__ = e42249;
var statearr_42250_42353 = state_42236;
(statearr_42250_42353[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42354 = state_42236;
state_42236 = G__42354;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = function(state_42236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1.call(this,state_42236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___42346,jobs,results,process,async))
})();
var state__31471__auto__ = (function (){var statearr_42251 = f__31470__auto__.call(null);
(statearr_42251[(6)] = c__31469__auto___42346);

return statearr_42251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___42346,jobs,results,process,async))
);


var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__,jobs,results,process,async){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__,jobs,results,process,async){
return (function (state_42289){
var state_val_42290 = (state_42289[(1)]);
if((state_val_42290 === (7))){
var inst_42285 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42291_42355 = state_42289__$1;
(statearr_42291_42355[(2)] = inst_42285);

(statearr_42291_42355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (20))){
var state_42289__$1 = state_42289;
var statearr_42292_42356 = state_42289__$1;
(statearr_42292_42356[(2)] = null);

(statearr_42292_42356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (1))){
var state_42289__$1 = state_42289;
var statearr_42293_42357 = state_42289__$1;
(statearr_42293_42357[(2)] = null);

(statearr_42293_42357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (4))){
var inst_42254 = (state_42289[(7)]);
var inst_42254__$1 = (state_42289[(2)]);
var inst_42255 = (inst_42254__$1 == null);
var state_42289__$1 = (function (){var statearr_42294 = state_42289;
(statearr_42294[(7)] = inst_42254__$1);

return statearr_42294;
})();
if(cljs.core.truth_(inst_42255)){
var statearr_42295_42358 = state_42289__$1;
(statearr_42295_42358[(1)] = (5));

} else {
var statearr_42296_42359 = state_42289__$1;
(statearr_42296_42359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (15))){
var inst_42267 = (state_42289[(8)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42289__$1,(18),to,inst_42267);
} else {
if((state_val_42290 === (21))){
var inst_42280 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42297_42360 = state_42289__$1;
(statearr_42297_42360[(2)] = inst_42280);

(statearr_42297_42360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (13))){
var inst_42282 = (state_42289[(2)]);
var state_42289__$1 = (function (){var statearr_42298 = state_42289;
(statearr_42298[(9)] = inst_42282);

return statearr_42298;
})();
var statearr_42299_42361 = state_42289__$1;
(statearr_42299_42361[(2)] = null);

(statearr_42299_42361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (6))){
var inst_42254 = (state_42289[(7)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(11),inst_42254);
} else {
if((state_val_42290 === (17))){
var inst_42275 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
if(cljs.core.truth_(inst_42275)){
var statearr_42300_42362 = state_42289__$1;
(statearr_42300_42362[(1)] = (19));

} else {
var statearr_42301_42363 = state_42289__$1;
(statearr_42301_42363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (3))){
var inst_42287 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42289__$1,inst_42287);
} else {
if((state_val_42290 === (12))){
var inst_42264 = (state_42289[(10)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(14),inst_42264);
} else {
if((state_val_42290 === (2))){
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(4),results);
} else {
if((state_val_42290 === (19))){
var state_42289__$1 = state_42289;
var statearr_42302_42364 = state_42289__$1;
(statearr_42302_42364[(2)] = null);

(statearr_42302_42364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (11))){
var inst_42264 = (state_42289[(2)]);
var state_42289__$1 = (function (){var statearr_42303 = state_42289;
(statearr_42303[(10)] = inst_42264);

return statearr_42303;
})();
var statearr_42304_42365 = state_42289__$1;
(statearr_42304_42365[(2)] = null);

(statearr_42304_42365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (9))){
var state_42289__$1 = state_42289;
var statearr_42305_42366 = state_42289__$1;
(statearr_42305_42366[(2)] = null);

(statearr_42305_42366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (5))){
var state_42289__$1 = state_42289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42306_42367 = state_42289__$1;
(statearr_42306_42367[(1)] = (8));

} else {
var statearr_42307_42368 = state_42289__$1;
(statearr_42307_42368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (14))){
var inst_42269 = (state_42289[(11)]);
var inst_42267 = (state_42289[(8)]);
var inst_42267__$1 = (state_42289[(2)]);
var inst_42268 = (inst_42267__$1 == null);
var inst_42269__$1 = cljs.core.not.call(null,inst_42268);
var state_42289__$1 = (function (){var statearr_42308 = state_42289;
(statearr_42308[(11)] = inst_42269__$1);

(statearr_42308[(8)] = inst_42267__$1);

return statearr_42308;
})();
if(inst_42269__$1){
var statearr_42309_42369 = state_42289__$1;
(statearr_42309_42369[(1)] = (15));

} else {
var statearr_42310_42370 = state_42289__$1;
(statearr_42310_42370[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (16))){
var inst_42269 = (state_42289[(11)]);
var state_42289__$1 = state_42289;
var statearr_42311_42371 = state_42289__$1;
(statearr_42311_42371[(2)] = inst_42269);

(statearr_42311_42371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (10))){
var inst_42261 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42312_42372 = state_42289__$1;
(statearr_42312_42372[(2)] = inst_42261);

(statearr_42312_42372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (18))){
var inst_42272 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42313_42373 = state_42289__$1;
(statearr_42313_42373[(2)] = inst_42272);

(statearr_42313_42373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (8))){
var inst_42258 = cljs.core.async.close_BANG_.call(null,to);
var state_42289__$1 = state_42289;
var statearr_42314_42374 = state_42289__$1;
(statearr_42314_42374[(2)] = inst_42258);

(statearr_42314_42374[(1)] = (10));


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
});})(c__31469__auto__,jobs,results,process,async))
;
return ((function (switch__31381__auto__,c__31469__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0 = (function (){
var statearr_42315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__);

(statearr_42315[(1)] = (1));

return statearr_42315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1 = (function (state_42289){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42316){if((e42316 instanceof Object)){
var ex__31385__auto__ = e42316;
var statearr_42317_42375 = state_42289;
(statearr_42317_42375[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42376 = state_42289;
state_42289 = G__42376;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__ = function(state_42289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1.call(this,state_42289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31382__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__,jobs,results,process,async))
})();
var state__31471__auto__ = (function (){var statearr_42318 = f__31470__auto__.call(null);
(statearr_42318[(6)] = c__31469__auto__);

return statearr_42318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__,jobs,results,process,async))
);

return c__31469__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42378 = arguments.length;
switch (G__42378) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42381 = arguments.length;
switch (G__42381) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42384 = arguments.length;
switch (G__42384) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31469__auto___42433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___42433,tc,fc){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___42433,tc,fc){
return (function (state_42410){
var state_val_42411 = (state_42410[(1)]);
if((state_val_42411 === (7))){
var inst_42406 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
var statearr_42412_42434 = state_42410__$1;
(statearr_42412_42434[(2)] = inst_42406);

(statearr_42412_42434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (1))){
var state_42410__$1 = state_42410;
var statearr_42413_42435 = state_42410__$1;
(statearr_42413_42435[(2)] = null);

(statearr_42413_42435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (4))){
var inst_42387 = (state_42410[(7)]);
var inst_42387__$1 = (state_42410[(2)]);
var inst_42388 = (inst_42387__$1 == null);
var state_42410__$1 = (function (){var statearr_42414 = state_42410;
(statearr_42414[(7)] = inst_42387__$1);

return statearr_42414;
})();
if(cljs.core.truth_(inst_42388)){
var statearr_42415_42436 = state_42410__$1;
(statearr_42415_42436[(1)] = (5));

} else {
var statearr_42416_42437 = state_42410__$1;
(statearr_42416_42437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (13))){
var state_42410__$1 = state_42410;
var statearr_42417_42438 = state_42410__$1;
(statearr_42417_42438[(2)] = null);

(statearr_42417_42438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (6))){
var inst_42387 = (state_42410[(7)]);
var inst_42393 = p.call(null,inst_42387);
var state_42410__$1 = state_42410;
if(cljs.core.truth_(inst_42393)){
var statearr_42418_42439 = state_42410__$1;
(statearr_42418_42439[(1)] = (9));

} else {
var statearr_42419_42440 = state_42410__$1;
(statearr_42419_42440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (3))){
var inst_42408 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42410__$1,inst_42408);
} else {
if((state_val_42411 === (12))){
var state_42410__$1 = state_42410;
var statearr_42420_42441 = state_42410__$1;
(statearr_42420_42441[(2)] = null);

(statearr_42420_42441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (2))){
var state_42410__$1 = state_42410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42410__$1,(4),ch);
} else {
if((state_val_42411 === (11))){
var inst_42387 = (state_42410[(7)]);
var inst_42397 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42410__$1,(8),inst_42397,inst_42387);
} else {
if((state_val_42411 === (9))){
var state_42410__$1 = state_42410;
var statearr_42421_42442 = state_42410__$1;
(statearr_42421_42442[(2)] = tc);

(statearr_42421_42442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (5))){
var inst_42390 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42391 = cljs.core.async.close_BANG_.call(null,fc);
var state_42410__$1 = (function (){var statearr_42422 = state_42410;
(statearr_42422[(8)] = inst_42390);

return statearr_42422;
})();
var statearr_42423_42443 = state_42410__$1;
(statearr_42423_42443[(2)] = inst_42391);

(statearr_42423_42443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (14))){
var inst_42404 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
var statearr_42424_42444 = state_42410__$1;
(statearr_42424_42444[(2)] = inst_42404);

(statearr_42424_42444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (10))){
var state_42410__$1 = state_42410;
var statearr_42425_42445 = state_42410__$1;
(statearr_42425_42445[(2)] = fc);

(statearr_42425_42445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42411 === (8))){
var inst_42399 = (state_42410[(2)]);
var state_42410__$1 = state_42410;
if(cljs.core.truth_(inst_42399)){
var statearr_42426_42446 = state_42410__$1;
(statearr_42426_42446[(1)] = (12));

} else {
var statearr_42427_42447 = state_42410__$1;
(statearr_42427_42447[(1)] = (13));

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
});})(c__31469__auto___42433,tc,fc))
;
return ((function (switch__31381__auto__,c__31469__auto___42433,tc,fc){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_42428 = [null,null,null,null,null,null,null,null,null];
(statearr_42428[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_42428[(1)] = (1));

return statearr_42428;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_42410){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42429){if((e42429 instanceof Object)){
var ex__31385__auto__ = e42429;
var statearr_42430_42448 = state_42410;
(statearr_42430_42448[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42449 = state_42410;
state_42410 = G__42449;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_42410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_42410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___42433,tc,fc))
})();
var state__31471__auto__ = (function (){var statearr_42431 = f__31470__auto__.call(null);
(statearr_42431[(6)] = c__31469__auto___42433);

return statearr_42431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___42433,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__){
return (function (state_42470){
var state_val_42471 = (state_42470[(1)]);
if((state_val_42471 === (7))){
var inst_42466 = (state_42470[(2)]);
var state_42470__$1 = state_42470;
var statearr_42472_42490 = state_42470__$1;
(statearr_42472_42490[(2)] = inst_42466);

(statearr_42472_42490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (1))){
var inst_42450 = init;
var state_42470__$1 = (function (){var statearr_42473 = state_42470;
(statearr_42473[(7)] = inst_42450);

return statearr_42473;
})();
var statearr_42474_42491 = state_42470__$1;
(statearr_42474_42491[(2)] = null);

(statearr_42474_42491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (4))){
var inst_42453 = (state_42470[(8)]);
var inst_42453__$1 = (state_42470[(2)]);
var inst_42454 = (inst_42453__$1 == null);
var state_42470__$1 = (function (){var statearr_42475 = state_42470;
(statearr_42475[(8)] = inst_42453__$1);

return statearr_42475;
})();
if(cljs.core.truth_(inst_42454)){
var statearr_42476_42492 = state_42470__$1;
(statearr_42476_42492[(1)] = (5));

} else {
var statearr_42477_42493 = state_42470__$1;
(statearr_42477_42493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (6))){
var inst_42453 = (state_42470[(8)]);
var inst_42450 = (state_42470[(7)]);
var inst_42457 = (state_42470[(9)]);
var inst_42457__$1 = f.call(null,inst_42450,inst_42453);
var inst_42458 = cljs.core.reduced_QMARK_.call(null,inst_42457__$1);
var state_42470__$1 = (function (){var statearr_42478 = state_42470;
(statearr_42478[(9)] = inst_42457__$1);

return statearr_42478;
})();
if(inst_42458){
var statearr_42479_42494 = state_42470__$1;
(statearr_42479_42494[(1)] = (8));

} else {
var statearr_42480_42495 = state_42470__$1;
(statearr_42480_42495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (3))){
var inst_42468 = (state_42470[(2)]);
var state_42470__$1 = state_42470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42470__$1,inst_42468);
} else {
if((state_val_42471 === (2))){
var state_42470__$1 = state_42470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42470__$1,(4),ch);
} else {
if((state_val_42471 === (9))){
var inst_42457 = (state_42470[(9)]);
var inst_42450 = inst_42457;
var state_42470__$1 = (function (){var statearr_42481 = state_42470;
(statearr_42481[(7)] = inst_42450);

return statearr_42481;
})();
var statearr_42482_42496 = state_42470__$1;
(statearr_42482_42496[(2)] = null);

(statearr_42482_42496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (5))){
var inst_42450 = (state_42470[(7)]);
var state_42470__$1 = state_42470;
var statearr_42483_42497 = state_42470__$1;
(statearr_42483_42497[(2)] = inst_42450);

(statearr_42483_42497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (10))){
var inst_42464 = (state_42470[(2)]);
var state_42470__$1 = state_42470;
var statearr_42484_42498 = state_42470__$1;
(statearr_42484_42498[(2)] = inst_42464);

(statearr_42484_42498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42471 === (8))){
var inst_42457 = (state_42470[(9)]);
var inst_42460 = cljs.core.deref.call(null,inst_42457);
var state_42470__$1 = state_42470;
var statearr_42485_42499 = state_42470__$1;
(statearr_42485_42499[(2)] = inst_42460);

(statearr_42485_42499[(1)] = (10));


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
});})(c__31469__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31382__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31382__auto____0 = (function (){
var statearr_42486 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42486[(0)] = cljs$core$async$reduce_$_state_machine__31382__auto__);

(statearr_42486[(1)] = (1));

return statearr_42486;
});
var cljs$core$async$reduce_$_state_machine__31382__auto____1 = (function (state_42470){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42487){if((e42487 instanceof Object)){
var ex__31385__auto__ = e42487;
var statearr_42488_42500 = state_42470;
(statearr_42488_42500[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42501 = state_42470;
state_42470 = G__42501;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31382__auto__ = function(state_42470){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31382__auto____1.call(this,state_42470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31382__auto____0;
cljs$core$async$reduce_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31382__auto____1;
return cljs$core$async$reduce_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__))
})();
var state__31471__auto__ = (function (){var statearr_42489 = f__31470__auto__.call(null);
(statearr_42489[(6)] = c__31469__auto__);

return statearr_42489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__))
);

return c__31469__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42503 = arguments.length;
switch (G__42503) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__){
return (function (state_42528){
var state_val_42529 = (state_42528[(1)]);
if((state_val_42529 === (7))){
var inst_42510 = (state_42528[(2)]);
var state_42528__$1 = state_42528;
var statearr_42530_42551 = state_42528__$1;
(statearr_42530_42551[(2)] = inst_42510);

(statearr_42530_42551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (1))){
var inst_42504 = cljs.core.seq.call(null,coll);
var inst_42505 = inst_42504;
var state_42528__$1 = (function (){var statearr_42531 = state_42528;
(statearr_42531[(7)] = inst_42505);

return statearr_42531;
})();
var statearr_42532_42552 = state_42528__$1;
(statearr_42532_42552[(2)] = null);

(statearr_42532_42552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (4))){
var inst_42505 = (state_42528[(7)]);
var inst_42508 = cljs.core.first.call(null,inst_42505);
var state_42528__$1 = state_42528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42528__$1,(7),ch,inst_42508);
} else {
if((state_val_42529 === (13))){
var inst_42522 = (state_42528[(2)]);
var state_42528__$1 = state_42528;
var statearr_42533_42553 = state_42528__$1;
(statearr_42533_42553[(2)] = inst_42522);

(statearr_42533_42553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (6))){
var inst_42513 = (state_42528[(2)]);
var state_42528__$1 = state_42528;
if(cljs.core.truth_(inst_42513)){
var statearr_42534_42554 = state_42528__$1;
(statearr_42534_42554[(1)] = (8));

} else {
var statearr_42535_42555 = state_42528__$1;
(statearr_42535_42555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (3))){
var inst_42526 = (state_42528[(2)]);
var state_42528__$1 = state_42528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42528__$1,inst_42526);
} else {
if((state_val_42529 === (12))){
var state_42528__$1 = state_42528;
var statearr_42536_42556 = state_42528__$1;
(statearr_42536_42556[(2)] = null);

(statearr_42536_42556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (2))){
var inst_42505 = (state_42528[(7)]);
var state_42528__$1 = state_42528;
if(cljs.core.truth_(inst_42505)){
var statearr_42537_42557 = state_42528__$1;
(statearr_42537_42557[(1)] = (4));

} else {
var statearr_42538_42558 = state_42528__$1;
(statearr_42538_42558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (11))){
var inst_42519 = cljs.core.async.close_BANG_.call(null,ch);
var state_42528__$1 = state_42528;
var statearr_42539_42559 = state_42528__$1;
(statearr_42539_42559[(2)] = inst_42519);

(statearr_42539_42559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (9))){
var state_42528__$1 = state_42528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42540_42560 = state_42528__$1;
(statearr_42540_42560[(1)] = (11));

} else {
var statearr_42541_42561 = state_42528__$1;
(statearr_42541_42561[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (5))){
var inst_42505 = (state_42528[(7)]);
var state_42528__$1 = state_42528;
var statearr_42542_42562 = state_42528__$1;
(statearr_42542_42562[(2)] = inst_42505);

(statearr_42542_42562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (10))){
var inst_42524 = (state_42528[(2)]);
var state_42528__$1 = state_42528;
var statearr_42543_42563 = state_42528__$1;
(statearr_42543_42563[(2)] = inst_42524);

(statearr_42543_42563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42529 === (8))){
var inst_42505 = (state_42528[(7)]);
var inst_42515 = cljs.core.next.call(null,inst_42505);
var inst_42505__$1 = inst_42515;
var state_42528__$1 = (function (){var statearr_42544 = state_42528;
(statearr_42544[(7)] = inst_42505__$1);

return statearr_42544;
})();
var statearr_42545_42564 = state_42528__$1;
(statearr_42545_42564[(2)] = null);

(statearr_42545_42564[(1)] = (2));


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
});})(c__31469__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_42546 = [null,null,null,null,null,null,null,null];
(statearr_42546[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_42546[(1)] = (1));

return statearr_42546;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_42528){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42547){if((e42547 instanceof Object)){
var ex__31385__auto__ = e42547;
var statearr_42548_42565 = state_42528;
(statearr_42548_42565[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42566 = state_42528;
state_42528 = G__42566;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_42528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_42528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__))
})();
var state__31471__auto__ = (function (){var statearr_42549 = f__31470__auto__.call(null);
(statearr_42549[(6)] = c__31469__auto__);

return statearr_42549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__))
);

return c__31469__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27878__auto__ = (((_ == null))?null:_);
var m__27879__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,_);
} else {
var m__27879__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42567 = (function (ch,cs,meta42568){
this.ch = ch;
this.cs = cs;
this.meta42568 = meta42568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42569,meta42568__$1){
var self__ = this;
var _42569__$1 = this;
return (new cljs.core.async.t_cljs$core$async42567(self__.ch,self__.cs,meta42568__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42569){
var self__ = this;
var _42569__$1 = this;
return self__.meta42568;
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42568","meta42568",-445704167,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42567";

cljs.core.async.t_cljs$core$async42567.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async42567");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42567 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42567(ch__$1,cs__$1,meta42568){
return (new cljs.core.async.t_cljs$core$async42567(ch__$1,cs__$1,meta42568));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42567(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31469__auto___42789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___42789,cs,m,dchan,dctr,done){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___42789,cs,m,dchan,dctr,done){
return (function (state_42704){
var state_val_42705 = (state_42704[(1)]);
if((state_val_42705 === (7))){
var inst_42700 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42706_42790 = state_42704__$1;
(statearr_42706_42790[(2)] = inst_42700);

(statearr_42706_42790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (20))){
var inst_42603 = (state_42704[(7)]);
var inst_42615 = cljs.core.first.call(null,inst_42603);
var inst_42616 = cljs.core.nth.call(null,inst_42615,(0),null);
var inst_42617 = cljs.core.nth.call(null,inst_42615,(1),null);
var state_42704__$1 = (function (){var statearr_42707 = state_42704;
(statearr_42707[(8)] = inst_42616);

return statearr_42707;
})();
if(cljs.core.truth_(inst_42617)){
var statearr_42708_42791 = state_42704__$1;
(statearr_42708_42791[(1)] = (22));

} else {
var statearr_42709_42792 = state_42704__$1;
(statearr_42709_42792[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (27))){
var inst_42652 = (state_42704[(9)]);
var inst_42572 = (state_42704[(10)]);
var inst_42645 = (state_42704[(11)]);
var inst_42647 = (state_42704[(12)]);
var inst_42652__$1 = cljs.core._nth.call(null,inst_42645,inst_42647);
var inst_42653 = cljs.core.async.put_BANG_.call(null,inst_42652__$1,inst_42572,done);
var state_42704__$1 = (function (){var statearr_42710 = state_42704;
(statearr_42710[(9)] = inst_42652__$1);

return statearr_42710;
})();
if(cljs.core.truth_(inst_42653)){
var statearr_42711_42793 = state_42704__$1;
(statearr_42711_42793[(1)] = (30));

} else {
var statearr_42712_42794 = state_42704__$1;
(statearr_42712_42794[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (1))){
var state_42704__$1 = state_42704;
var statearr_42713_42795 = state_42704__$1;
(statearr_42713_42795[(2)] = null);

(statearr_42713_42795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (24))){
var inst_42603 = (state_42704[(7)]);
var inst_42622 = (state_42704[(2)]);
var inst_42623 = cljs.core.next.call(null,inst_42603);
var inst_42581 = inst_42623;
var inst_42582 = null;
var inst_42583 = (0);
var inst_42584 = (0);
var state_42704__$1 = (function (){var statearr_42714 = state_42704;
(statearr_42714[(13)] = inst_42622);

(statearr_42714[(14)] = inst_42584);

(statearr_42714[(15)] = inst_42581);

(statearr_42714[(16)] = inst_42583);

(statearr_42714[(17)] = inst_42582);

return statearr_42714;
})();
var statearr_42715_42796 = state_42704__$1;
(statearr_42715_42796[(2)] = null);

(statearr_42715_42796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (39))){
var state_42704__$1 = state_42704;
var statearr_42719_42797 = state_42704__$1;
(statearr_42719_42797[(2)] = null);

(statearr_42719_42797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (4))){
var inst_42572 = (state_42704[(10)]);
var inst_42572__$1 = (state_42704[(2)]);
var inst_42573 = (inst_42572__$1 == null);
var state_42704__$1 = (function (){var statearr_42720 = state_42704;
(statearr_42720[(10)] = inst_42572__$1);

return statearr_42720;
})();
if(cljs.core.truth_(inst_42573)){
var statearr_42721_42798 = state_42704__$1;
(statearr_42721_42798[(1)] = (5));

} else {
var statearr_42722_42799 = state_42704__$1;
(statearr_42722_42799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (15))){
var inst_42584 = (state_42704[(14)]);
var inst_42581 = (state_42704[(15)]);
var inst_42583 = (state_42704[(16)]);
var inst_42582 = (state_42704[(17)]);
var inst_42599 = (state_42704[(2)]);
var inst_42600 = (inst_42584 + (1));
var tmp42716 = inst_42581;
var tmp42717 = inst_42583;
var tmp42718 = inst_42582;
var inst_42581__$1 = tmp42716;
var inst_42582__$1 = tmp42718;
var inst_42583__$1 = tmp42717;
var inst_42584__$1 = inst_42600;
var state_42704__$1 = (function (){var statearr_42723 = state_42704;
(statearr_42723[(14)] = inst_42584__$1);

(statearr_42723[(15)] = inst_42581__$1);

(statearr_42723[(16)] = inst_42583__$1);

(statearr_42723[(18)] = inst_42599);

(statearr_42723[(17)] = inst_42582__$1);

return statearr_42723;
})();
var statearr_42724_42800 = state_42704__$1;
(statearr_42724_42800[(2)] = null);

(statearr_42724_42800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (21))){
var inst_42626 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42728_42801 = state_42704__$1;
(statearr_42728_42801[(2)] = inst_42626);

(statearr_42728_42801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (31))){
var inst_42652 = (state_42704[(9)]);
var inst_42656 = done.call(null,null);
var inst_42657 = cljs.core.async.untap_STAR_.call(null,m,inst_42652);
var state_42704__$1 = (function (){var statearr_42729 = state_42704;
(statearr_42729[(19)] = inst_42656);

return statearr_42729;
})();
var statearr_42730_42802 = state_42704__$1;
(statearr_42730_42802[(2)] = inst_42657);

(statearr_42730_42802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (32))){
var inst_42644 = (state_42704[(20)]);
var inst_42645 = (state_42704[(11)]);
var inst_42646 = (state_42704[(21)]);
var inst_42647 = (state_42704[(12)]);
var inst_42659 = (state_42704[(2)]);
var inst_42660 = (inst_42647 + (1));
var tmp42725 = inst_42644;
var tmp42726 = inst_42645;
var tmp42727 = inst_42646;
var inst_42644__$1 = tmp42725;
var inst_42645__$1 = tmp42726;
var inst_42646__$1 = tmp42727;
var inst_42647__$1 = inst_42660;
var state_42704__$1 = (function (){var statearr_42731 = state_42704;
(statearr_42731[(22)] = inst_42659);

(statearr_42731[(20)] = inst_42644__$1);

(statearr_42731[(11)] = inst_42645__$1);

(statearr_42731[(21)] = inst_42646__$1);

(statearr_42731[(12)] = inst_42647__$1);

return statearr_42731;
})();
var statearr_42732_42803 = state_42704__$1;
(statearr_42732_42803[(2)] = null);

(statearr_42732_42803[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (40))){
var inst_42672 = (state_42704[(23)]);
var inst_42676 = done.call(null,null);
var inst_42677 = cljs.core.async.untap_STAR_.call(null,m,inst_42672);
var state_42704__$1 = (function (){var statearr_42733 = state_42704;
(statearr_42733[(24)] = inst_42676);

return statearr_42733;
})();
var statearr_42734_42804 = state_42704__$1;
(statearr_42734_42804[(2)] = inst_42677);

(statearr_42734_42804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (33))){
var inst_42663 = (state_42704[(25)]);
var inst_42665 = cljs.core.chunked_seq_QMARK_.call(null,inst_42663);
var state_42704__$1 = state_42704;
if(inst_42665){
var statearr_42735_42805 = state_42704__$1;
(statearr_42735_42805[(1)] = (36));

} else {
var statearr_42736_42806 = state_42704__$1;
(statearr_42736_42806[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (13))){
var inst_42593 = (state_42704[(26)]);
var inst_42596 = cljs.core.async.close_BANG_.call(null,inst_42593);
var state_42704__$1 = state_42704;
var statearr_42737_42807 = state_42704__$1;
(statearr_42737_42807[(2)] = inst_42596);

(statearr_42737_42807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (22))){
var inst_42616 = (state_42704[(8)]);
var inst_42619 = cljs.core.async.close_BANG_.call(null,inst_42616);
var state_42704__$1 = state_42704;
var statearr_42738_42808 = state_42704__$1;
(statearr_42738_42808[(2)] = inst_42619);

(statearr_42738_42808[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (36))){
var inst_42663 = (state_42704[(25)]);
var inst_42667 = cljs.core.chunk_first.call(null,inst_42663);
var inst_42668 = cljs.core.chunk_rest.call(null,inst_42663);
var inst_42669 = cljs.core.count.call(null,inst_42667);
var inst_42644 = inst_42668;
var inst_42645 = inst_42667;
var inst_42646 = inst_42669;
var inst_42647 = (0);
var state_42704__$1 = (function (){var statearr_42739 = state_42704;
(statearr_42739[(20)] = inst_42644);

(statearr_42739[(11)] = inst_42645);

(statearr_42739[(21)] = inst_42646);

(statearr_42739[(12)] = inst_42647);

return statearr_42739;
})();
var statearr_42740_42809 = state_42704__$1;
(statearr_42740_42809[(2)] = null);

(statearr_42740_42809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (41))){
var inst_42663 = (state_42704[(25)]);
var inst_42679 = (state_42704[(2)]);
var inst_42680 = cljs.core.next.call(null,inst_42663);
var inst_42644 = inst_42680;
var inst_42645 = null;
var inst_42646 = (0);
var inst_42647 = (0);
var state_42704__$1 = (function (){var statearr_42741 = state_42704;
(statearr_42741[(20)] = inst_42644);

(statearr_42741[(27)] = inst_42679);

(statearr_42741[(11)] = inst_42645);

(statearr_42741[(21)] = inst_42646);

(statearr_42741[(12)] = inst_42647);

return statearr_42741;
})();
var statearr_42742_42810 = state_42704__$1;
(statearr_42742_42810[(2)] = null);

(statearr_42742_42810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (43))){
var state_42704__$1 = state_42704;
var statearr_42743_42811 = state_42704__$1;
(statearr_42743_42811[(2)] = null);

(statearr_42743_42811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (29))){
var inst_42688 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42744_42812 = state_42704__$1;
(statearr_42744_42812[(2)] = inst_42688);

(statearr_42744_42812[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (44))){
var inst_42697 = (state_42704[(2)]);
var state_42704__$1 = (function (){var statearr_42745 = state_42704;
(statearr_42745[(28)] = inst_42697);

return statearr_42745;
})();
var statearr_42746_42813 = state_42704__$1;
(statearr_42746_42813[(2)] = null);

(statearr_42746_42813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (6))){
var inst_42636 = (state_42704[(29)]);
var inst_42635 = cljs.core.deref.call(null,cs);
var inst_42636__$1 = cljs.core.keys.call(null,inst_42635);
var inst_42637 = cljs.core.count.call(null,inst_42636__$1);
var inst_42638 = cljs.core.reset_BANG_.call(null,dctr,inst_42637);
var inst_42643 = cljs.core.seq.call(null,inst_42636__$1);
var inst_42644 = inst_42643;
var inst_42645 = null;
var inst_42646 = (0);
var inst_42647 = (0);
var state_42704__$1 = (function (){var statearr_42747 = state_42704;
(statearr_42747[(30)] = inst_42638);

(statearr_42747[(29)] = inst_42636__$1);

(statearr_42747[(20)] = inst_42644);

(statearr_42747[(11)] = inst_42645);

(statearr_42747[(21)] = inst_42646);

(statearr_42747[(12)] = inst_42647);

return statearr_42747;
})();
var statearr_42748_42814 = state_42704__$1;
(statearr_42748_42814[(2)] = null);

(statearr_42748_42814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (28))){
var inst_42644 = (state_42704[(20)]);
var inst_42663 = (state_42704[(25)]);
var inst_42663__$1 = cljs.core.seq.call(null,inst_42644);
var state_42704__$1 = (function (){var statearr_42749 = state_42704;
(statearr_42749[(25)] = inst_42663__$1);

return statearr_42749;
})();
if(inst_42663__$1){
var statearr_42750_42815 = state_42704__$1;
(statearr_42750_42815[(1)] = (33));

} else {
var statearr_42751_42816 = state_42704__$1;
(statearr_42751_42816[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (25))){
var inst_42646 = (state_42704[(21)]);
var inst_42647 = (state_42704[(12)]);
var inst_42649 = (inst_42647 < inst_42646);
var inst_42650 = inst_42649;
var state_42704__$1 = state_42704;
if(cljs.core.truth_(inst_42650)){
var statearr_42752_42817 = state_42704__$1;
(statearr_42752_42817[(1)] = (27));

} else {
var statearr_42753_42818 = state_42704__$1;
(statearr_42753_42818[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (34))){
var state_42704__$1 = state_42704;
var statearr_42754_42819 = state_42704__$1;
(statearr_42754_42819[(2)] = null);

(statearr_42754_42819[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (17))){
var state_42704__$1 = state_42704;
var statearr_42755_42820 = state_42704__$1;
(statearr_42755_42820[(2)] = null);

(statearr_42755_42820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (3))){
var inst_42702 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42704__$1,inst_42702);
} else {
if((state_val_42705 === (12))){
var inst_42631 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42756_42821 = state_42704__$1;
(statearr_42756_42821[(2)] = inst_42631);

(statearr_42756_42821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (2))){
var state_42704__$1 = state_42704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42704__$1,(4),ch);
} else {
if((state_val_42705 === (23))){
var state_42704__$1 = state_42704;
var statearr_42757_42822 = state_42704__$1;
(statearr_42757_42822[(2)] = null);

(statearr_42757_42822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (35))){
var inst_42686 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42758_42823 = state_42704__$1;
(statearr_42758_42823[(2)] = inst_42686);

(statearr_42758_42823[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (19))){
var inst_42603 = (state_42704[(7)]);
var inst_42607 = cljs.core.chunk_first.call(null,inst_42603);
var inst_42608 = cljs.core.chunk_rest.call(null,inst_42603);
var inst_42609 = cljs.core.count.call(null,inst_42607);
var inst_42581 = inst_42608;
var inst_42582 = inst_42607;
var inst_42583 = inst_42609;
var inst_42584 = (0);
var state_42704__$1 = (function (){var statearr_42759 = state_42704;
(statearr_42759[(14)] = inst_42584);

(statearr_42759[(15)] = inst_42581);

(statearr_42759[(16)] = inst_42583);

(statearr_42759[(17)] = inst_42582);

return statearr_42759;
})();
var statearr_42760_42824 = state_42704__$1;
(statearr_42760_42824[(2)] = null);

(statearr_42760_42824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (11))){
var inst_42603 = (state_42704[(7)]);
var inst_42581 = (state_42704[(15)]);
var inst_42603__$1 = cljs.core.seq.call(null,inst_42581);
var state_42704__$1 = (function (){var statearr_42761 = state_42704;
(statearr_42761[(7)] = inst_42603__$1);

return statearr_42761;
})();
if(inst_42603__$1){
var statearr_42762_42825 = state_42704__$1;
(statearr_42762_42825[(1)] = (16));

} else {
var statearr_42763_42826 = state_42704__$1;
(statearr_42763_42826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (9))){
var inst_42633 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42764_42827 = state_42704__$1;
(statearr_42764_42827[(2)] = inst_42633);

(statearr_42764_42827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (5))){
var inst_42579 = cljs.core.deref.call(null,cs);
var inst_42580 = cljs.core.seq.call(null,inst_42579);
var inst_42581 = inst_42580;
var inst_42582 = null;
var inst_42583 = (0);
var inst_42584 = (0);
var state_42704__$1 = (function (){var statearr_42765 = state_42704;
(statearr_42765[(14)] = inst_42584);

(statearr_42765[(15)] = inst_42581);

(statearr_42765[(16)] = inst_42583);

(statearr_42765[(17)] = inst_42582);

return statearr_42765;
})();
var statearr_42766_42828 = state_42704__$1;
(statearr_42766_42828[(2)] = null);

(statearr_42766_42828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (14))){
var state_42704__$1 = state_42704;
var statearr_42767_42829 = state_42704__$1;
(statearr_42767_42829[(2)] = null);

(statearr_42767_42829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (45))){
var inst_42694 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42768_42830 = state_42704__$1;
(statearr_42768_42830[(2)] = inst_42694);

(statearr_42768_42830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (26))){
var inst_42636 = (state_42704[(29)]);
var inst_42690 = (state_42704[(2)]);
var inst_42691 = cljs.core.seq.call(null,inst_42636);
var state_42704__$1 = (function (){var statearr_42769 = state_42704;
(statearr_42769[(31)] = inst_42690);

return statearr_42769;
})();
if(inst_42691){
var statearr_42770_42831 = state_42704__$1;
(statearr_42770_42831[(1)] = (42));

} else {
var statearr_42771_42832 = state_42704__$1;
(statearr_42771_42832[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (16))){
var inst_42603 = (state_42704[(7)]);
var inst_42605 = cljs.core.chunked_seq_QMARK_.call(null,inst_42603);
var state_42704__$1 = state_42704;
if(inst_42605){
var statearr_42772_42833 = state_42704__$1;
(statearr_42772_42833[(1)] = (19));

} else {
var statearr_42773_42834 = state_42704__$1;
(statearr_42773_42834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (38))){
var inst_42683 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42774_42835 = state_42704__$1;
(statearr_42774_42835[(2)] = inst_42683);

(statearr_42774_42835[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (30))){
var state_42704__$1 = state_42704;
var statearr_42775_42836 = state_42704__$1;
(statearr_42775_42836[(2)] = null);

(statearr_42775_42836[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (10))){
var inst_42584 = (state_42704[(14)]);
var inst_42582 = (state_42704[(17)]);
var inst_42592 = cljs.core._nth.call(null,inst_42582,inst_42584);
var inst_42593 = cljs.core.nth.call(null,inst_42592,(0),null);
var inst_42594 = cljs.core.nth.call(null,inst_42592,(1),null);
var state_42704__$1 = (function (){var statearr_42776 = state_42704;
(statearr_42776[(26)] = inst_42593);

return statearr_42776;
})();
if(cljs.core.truth_(inst_42594)){
var statearr_42777_42837 = state_42704__$1;
(statearr_42777_42837[(1)] = (13));

} else {
var statearr_42778_42838 = state_42704__$1;
(statearr_42778_42838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (18))){
var inst_42629 = (state_42704[(2)]);
var state_42704__$1 = state_42704;
var statearr_42779_42839 = state_42704__$1;
(statearr_42779_42839[(2)] = inst_42629);

(statearr_42779_42839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (42))){
var state_42704__$1 = state_42704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42704__$1,(45),dchan);
} else {
if((state_val_42705 === (37))){
var inst_42572 = (state_42704[(10)]);
var inst_42672 = (state_42704[(23)]);
var inst_42663 = (state_42704[(25)]);
var inst_42672__$1 = cljs.core.first.call(null,inst_42663);
var inst_42673 = cljs.core.async.put_BANG_.call(null,inst_42672__$1,inst_42572,done);
var state_42704__$1 = (function (){var statearr_42780 = state_42704;
(statearr_42780[(23)] = inst_42672__$1);

return statearr_42780;
})();
if(cljs.core.truth_(inst_42673)){
var statearr_42781_42840 = state_42704__$1;
(statearr_42781_42840[(1)] = (39));

} else {
var statearr_42782_42841 = state_42704__$1;
(statearr_42782_42841[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42705 === (8))){
var inst_42584 = (state_42704[(14)]);
var inst_42583 = (state_42704[(16)]);
var inst_42586 = (inst_42584 < inst_42583);
var inst_42587 = inst_42586;
var state_42704__$1 = state_42704;
if(cljs.core.truth_(inst_42587)){
var statearr_42783_42842 = state_42704__$1;
(statearr_42783_42842[(1)] = (10));

} else {
var statearr_42784_42843 = state_42704__$1;
(statearr_42784_42843[(1)] = (11));

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
});})(c__31469__auto___42789,cs,m,dchan,dctr,done))
;
return ((function (switch__31381__auto__,c__31469__auto___42789,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31382__auto__ = null;
var cljs$core$async$mult_$_state_machine__31382__auto____0 = (function (){
var statearr_42785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42785[(0)] = cljs$core$async$mult_$_state_machine__31382__auto__);

(statearr_42785[(1)] = (1));

return statearr_42785;
});
var cljs$core$async$mult_$_state_machine__31382__auto____1 = (function (state_42704){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e42786){if((e42786 instanceof Object)){
var ex__31385__auto__ = e42786;
var statearr_42787_42844 = state_42704;
(statearr_42787_42844[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42845 = state_42704;
state_42704 = G__42845;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31382__auto__ = function(state_42704){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31382__auto____1.call(this,state_42704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31382__auto____0;
cljs$core$async$mult_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31382__auto____1;
return cljs$core$async$mult_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___42789,cs,m,dchan,dctr,done))
})();
var state__31471__auto__ = (function (){var statearr_42788 = f__31470__auto__.call(null);
(statearr_42788[(6)] = c__31469__auto___42789);

return statearr_42788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___42789,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42847 = arguments.length;
switch (G__42847) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m);
} else {
var m__27879__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,state_map);
} else {
var m__27879__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27878__auto__ = (((m == null))?null:m);
var m__27879__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,m,mode);
} else {
var m__27879__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28371__auto__ = [];
var len__28364__auto___42859 = arguments.length;
var i__28365__auto___42860 = (0);
while(true){
if((i__28365__auto___42860 < len__28364__auto___42859)){
args__28371__auto__.push((arguments[i__28365__auto___42860]));

var G__42861 = (i__28365__auto___42860 + (1));
i__28365__auto___42860 = G__42861;
continue;
} else {
}
break;
}

var argseq__28372__auto__ = ((((3) < args__28371__auto__.length))?(new cljs.core.IndexedSeq(args__28371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42853){
var map__42854 = p__42853;
var map__42854__$1 = ((((!((map__42854 == null)))?((((map__42854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42854):map__42854);
var opts = map__42854__$1;
var statearr_42856_42862 = state;
(statearr_42856_42862[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42854,map__42854__$1,opts){
return (function (val){
var statearr_42857_42863 = state;
(statearr_42857_42863[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42854,map__42854__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42858_42864 = state;
(statearr_42858_42864[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42849){
var G__42850 = cljs.core.first.call(null,seq42849);
var seq42849__$1 = cljs.core.next.call(null,seq42849);
var G__42851 = cljs.core.first.call(null,seq42849__$1);
var seq42849__$2 = cljs.core.next.call(null,seq42849__$1);
var G__42852 = cljs.core.first.call(null,seq42849__$2);
var seq42849__$3 = cljs.core.next.call(null,seq42849__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42850,G__42851,G__42852,seq42849__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42865 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42866){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42866 = meta42866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42867,meta42866__$1){
var self__ = this;
var _42867__$1 = this;
return (new cljs.core.async.t_cljs$core$async42865(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42866__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42867){
var self__ = this;
var _42867__$1 = this;
return self__.meta42866;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42866","meta42866",1650386949,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42865";

cljs.core.async.t_cljs$core$async42865.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async42865");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42865 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42865(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42866){
return (new cljs.core.async.t_cljs$core$async42865(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42866));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42865(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31469__auto___43029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42969){
var state_val_42970 = (state_42969[(1)]);
if((state_val_42970 === (7))){
var inst_42884 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
var statearr_42971_43030 = state_42969__$1;
(statearr_42971_43030[(2)] = inst_42884);

(statearr_42971_43030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (20))){
var inst_42896 = (state_42969[(7)]);
var state_42969__$1 = state_42969;
var statearr_42972_43031 = state_42969__$1;
(statearr_42972_43031[(2)] = inst_42896);

(statearr_42972_43031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (27))){
var state_42969__$1 = state_42969;
var statearr_42973_43032 = state_42969__$1;
(statearr_42973_43032[(2)] = null);

(statearr_42973_43032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (1))){
var inst_42871 = (state_42969[(8)]);
var inst_42871__$1 = calc_state.call(null);
var inst_42873 = (inst_42871__$1 == null);
var inst_42874 = cljs.core.not.call(null,inst_42873);
var state_42969__$1 = (function (){var statearr_42974 = state_42969;
(statearr_42974[(8)] = inst_42871__$1);

return statearr_42974;
})();
if(inst_42874){
var statearr_42975_43033 = state_42969__$1;
(statearr_42975_43033[(1)] = (2));

} else {
var statearr_42976_43034 = state_42969__$1;
(statearr_42976_43034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (24))){
var inst_42920 = (state_42969[(9)]);
var inst_42929 = (state_42969[(10)]);
var inst_42943 = (state_42969[(11)]);
var inst_42943__$1 = inst_42920.call(null,inst_42929);
var state_42969__$1 = (function (){var statearr_42977 = state_42969;
(statearr_42977[(11)] = inst_42943__$1);

return statearr_42977;
})();
if(cljs.core.truth_(inst_42943__$1)){
var statearr_42978_43035 = state_42969__$1;
(statearr_42978_43035[(1)] = (29));

} else {
var statearr_42979_43036 = state_42969__$1;
(statearr_42979_43036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (4))){
var inst_42887 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42887)){
var statearr_42980_43037 = state_42969__$1;
(statearr_42980_43037[(1)] = (8));

} else {
var statearr_42981_43038 = state_42969__$1;
(statearr_42981_43038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (15))){
var inst_42914 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42914)){
var statearr_42982_43039 = state_42969__$1;
(statearr_42982_43039[(1)] = (19));

} else {
var statearr_42983_43040 = state_42969__$1;
(statearr_42983_43040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (21))){
var inst_42919 = (state_42969[(12)]);
var inst_42919__$1 = (state_42969[(2)]);
var inst_42920 = cljs.core.get.call(null,inst_42919__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42921 = cljs.core.get.call(null,inst_42919__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42922 = cljs.core.get.call(null,inst_42919__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42969__$1 = (function (){var statearr_42984 = state_42969;
(statearr_42984[(9)] = inst_42920);

(statearr_42984[(13)] = inst_42921);

(statearr_42984[(12)] = inst_42919__$1);

return statearr_42984;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42969__$1,(22),inst_42922);
} else {
if((state_val_42970 === (31))){
var inst_42951 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42951)){
var statearr_42985_43041 = state_42969__$1;
(statearr_42985_43041[(1)] = (32));

} else {
var statearr_42986_43042 = state_42969__$1;
(statearr_42986_43042[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (32))){
var inst_42928 = (state_42969[(14)]);
var state_42969__$1 = state_42969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42969__$1,(35),out,inst_42928);
} else {
if((state_val_42970 === (33))){
var inst_42919 = (state_42969[(12)]);
var inst_42896 = inst_42919;
var state_42969__$1 = (function (){var statearr_42987 = state_42969;
(statearr_42987[(7)] = inst_42896);

return statearr_42987;
})();
var statearr_42988_43043 = state_42969__$1;
(statearr_42988_43043[(2)] = null);

(statearr_42988_43043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (13))){
var inst_42896 = (state_42969[(7)]);
var inst_42903 = inst_42896.cljs$lang$protocol_mask$partition0$;
var inst_42904 = (inst_42903 & (64));
var inst_42905 = inst_42896.cljs$core$ISeq$;
var inst_42906 = (cljs.core.PROTOCOL_SENTINEL === inst_42905);
var inst_42907 = (inst_42904) || (inst_42906);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42907)){
var statearr_42989_43044 = state_42969__$1;
(statearr_42989_43044[(1)] = (16));

} else {
var statearr_42990_43045 = state_42969__$1;
(statearr_42990_43045[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (22))){
var inst_42928 = (state_42969[(14)]);
var inst_42929 = (state_42969[(10)]);
var inst_42927 = (state_42969[(2)]);
var inst_42928__$1 = cljs.core.nth.call(null,inst_42927,(0),null);
var inst_42929__$1 = cljs.core.nth.call(null,inst_42927,(1),null);
var inst_42930 = (inst_42928__$1 == null);
var inst_42931 = cljs.core._EQ_.call(null,inst_42929__$1,change);
var inst_42932 = (inst_42930) || (inst_42931);
var state_42969__$1 = (function (){var statearr_42991 = state_42969;
(statearr_42991[(14)] = inst_42928__$1);

(statearr_42991[(10)] = inst_42929__$1);

return statearr_42991;
})();
if(cljs.core.truth_(inst_42932)){
var statearr_42992_43046 = state_42969__$1;
(statearr_42992_43046[(1)] = (23));

} else {
var statearr_42993_43047 = state_42969__$1;
(statearr_42993_43047[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (36))){
var inst_42919 = (state_42969[(12)]);
var inst_42896 = inst_42919;
var state_42969__$1 = (function (){var statearr_42994 = state_42969;
(statearr_42994[(7)] = inst_42896);

return statearr_42994;
})();
var statearr_42995_43048 = state_42969__$1;
(statearr_42995_43048[(2)] = null);

(statearr_42995_43048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (29))){
var inst_42943 = (state_42969[(11)]);
var state_42969__$1 = state_42969;
var statearr_42996_43049 = state_42969__$1;
(statearr_42996_43049[(2)] = inst_42943);

(statearr_42996_43049[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (6))){
var state_42969__$1 = state_42969;
var statearr_42997_43050 = state_42969__$1;
(statearr_42997_43050[(2)] = false);

(statearr_42997_43050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (28))){
var inst_42939 = (state_42969[(2)]);
var inst_42940 = calc_state.call(null);
var inst_42896 = inst_42940;
var state_42969__$1 = (function (){var statearr_42998 = state_42969;
(statearr_42998[(7)] = inst_42896);

(statearr_42998[(15)] = inst_42939);

return statearr_42998;
})();
var statearr_42999_43051 = state_42969__$1;
(statearr_42999_43051[(2)] = null);

(statearr_42999_43051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (25))){
var inst_42965 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
var statearr_43000_43052 = state_42969__$1;
(statearr_43000_43052[(2)] = inst_42965);

(statearr_43000_43052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (34))){
var inst_42963 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
var statearr_43001_43053 = state_42969__$1;
(statearr_43001_43053[(2)] = inst_42963);

(statearr_43001_43053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (17))){
var state_42969__$1 = state_42969;
var statearr_43002_43054 = state_42969__$1;
(statearr_43002_43054[(2)] = false);

(statearr_43002_43054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (3))){
var state_42969__$1 = state_42969;
var statearr_43003_43055 = state_42969__$1;
(statearr_43003_43055[(2)] = false);

(statearr_43003_43055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (12))){
var inst_42967 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42969__$1,inst_42967);
} else {
if((state_val_42970 === (2))){
var inst_42871 = (state_42969[(8)]);
var inst_42876 = inst_42871.cljs$lang$protocol_mask$partition0$;
var inst_42877 = (inst_42876 & (64));
var inst_42878 = inst_42871.cljs$core$ISeq$;
var inst_42879 = (cljs.core.PROTOCOL_SENTINEL === inst_42878);
var inst_42880 = (inst_42877) || (inst_42879);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42880)){
var statearr_43004_43056 = state_42969__$1;
(statearr_43004_43056[(1)] = (5));

} else {
var statearr_43005_43057 = state_42969__$1;
(statearr_43005_43057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (23))){
var inst_42928 = (state_42969[(14)]);
var inst_42934 = (inst_42928 == null);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42934)){
var statearr_43006_43058 = state_42969__$1;
(statearr_43006_43058[(1)] = (26));

} else {
var statearr_43007_43059 = state_42969__$1;
(statearr_43007_43059[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (35))){
var inst_42954 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
if(cljs.core.truth_(inst_42954)){
var statearr_43008_43060 = state_42969__$1;
(statearr_43008_43060[(1)] = (36));

} else {
var statearr_43009_43061 = state_42969__$1;
(statearr_43009_43061[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (19))){
var inst_42896 = (state_42969[(7)]);
var inst_42916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42896);
var state_42969__$1 = state_42969;
var statearr_43010_43062 = state_42969__$1;
(statearr_43010_43062[(2)] = inst_42916);

(statearr_43010_43062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (11))){
var inst_42896 = (state_42969[(7)]);
var inst_42900 = (inst_42896 == null);
var inst_42901 = cljs.core.not.call(null,inst_42900);
var state_42969__$1 = state_42969;
if(inst_42901){
var statearr_43011_43063 = state_42969__$1;
(statearr_43011_43063[(1)] = (13));

} else {
var statearr_43012_43064 = state_42969__$1;
(statearr_43012_43064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (9))){
var inst_42871 = (state_42969[(8)]);
var state_42969__$1 = state_42969;
var statearr_43013_43065 = state_42969__$1;
(statearr_43013_43065[(2)] = inst_42871);

(statearr_43013_43065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (5))){
var state_42969__$1 = state_42969;
var statearr_43014_43066 = state_42969__$1;
(statearr_43014_43066[(2)] = true);

(statearr_43014_43066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (14))){
var state_42969__$1 = state_42969;
var statearr_43015_43067 = state_42969__$1;
(statearr_43015_43067[(2)] = false);

(statearr_43015_43067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (26))){
var inst_42929 = (state_42969[(10)]);
var inst_42936 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42929);
var state_42969__$1 = state_42969;
var statearr_43016_43068 = state_42969__$1;
(statearr_43016_43068[(2)] = inst_42936);

(statearr_43016_43068[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (16))){
var state_42969__$1 = state_42969;
var statearr_43017_43069 = state_42969__$1;
(statearr_43017_43069[(2)] = true);

(statearr_43017_43069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (38))){
var inst_42959 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
var statearr_43018_43070 = state_42969__$1;
(statearr_43018_43070[(2)] = inst_42959);

(statearr_43018_43070[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (30))){
var inst_42920 = (state_42969[(9)]);
var inst_42921 = (state_42969[(13)]);
var inst_42929 = (state_42969[(10)]);
var inst_42946 = cljs.core.empty_QMARK_.call(null,inst_42920);
var inst_42947 = inst_42921.call(null,inst_42929);
var inst_42948 = cljs.core.not.call(null,inst_42947);
var inst_42949 = (inst_42946) && (inst_42948);
var state_42969__$1 = state_42969;
var statearr_43019_43071 = state_42969__$1;
(statearr_43019_43071[(2)] = inst_42949);

(statearr_43019_43071[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (10))){
var inst_42871 = (state_42969[(8)]);
var inst_42892 = (state_42969[(2)]);
var inst_42893 = cljs.core.get.call(null,inst_42892,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42894 = cljs.core.get.call(null,inst_42892,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42895 = cljs.core.get.call(null,inst_42892,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42896 = inst_42871;
var state_42969__$1 = (function (){var statearr_43020 = state_42969;
(statearr_43020[(7)] = inst_42896);

(statearr_43020[(16)] = inst_42895);

(statearr_43020[(17)] = inst_42893);

(statearr_43020[(18)] = inst_42894);

return statearr_43020;
})();
var statearr_43021_43072 = state_42969__$1;
(statearr_43021_43072[(2)] = null);

(statearr_43021_43072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (18))){
var inst_42911 = (state_42969[(2)]);
var state_42969__$1 = state_42969;
var statearr_43022_43073 = state_42969__$1;
(statearr_43022_43073[(2)] = inst_42911);

(statearr_43022_43073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (37))){
var state_42969__$1 = state_42969;
var statearr_43023_43074 = state_42969__$1;
(statearr_43023_43074[(2)] = null);

(statearr_43023_43074[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42970 === (8))){
var inst_42871 = (state_42969[(8)]);
var inst_42889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42871);
var state_42969__$1 = state_42969;
var statearr_43024_43075 = state_42969__$1;
(statearr_43024_43075[(2)] = inst_42889);

(statearr_43024_43075[(1)] = (10));


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
});})(c__31469__auto___43029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31381__auto__,c__31469__auto___43029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31382__auto__ = null;
var cljs$core$async$mix_$_state_machine__31382__auto____0 = (function (){
var statearr_43025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43025[(0)] = cljs$core$async$mix_$_state_machine__31382__auto__);

(statearr_43025[(1)] = (1));

return statearr_43025;
});
var cljs$core$async$mix_$_state_machine__31382__auto____1 = (function (state_42969){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_42969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43026){if((e43026 instanceof Object)){
var ex__31385__auto__ = e43026;
var statearr_43027_43076 = state_42969;
(statearr_43027_43076[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43077 = state_42969;
state_42969 = G__43077;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31382__auto__ = function(state_42969){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31382__auto____1.call(this,state_42969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31382__auto____0;
cljs$core$async$mix_$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31382__auto____1;
return cljs$core$async$mix_$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31471__auto__ = (function (){var statearr_43028 = f__31470__auto__.call(null);
(statearr_43028[(6)] = c__31469__auto___43029);

return statearr_43028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43029,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27879__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v,ch);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43079 = arguments.length;
switch (G__43079) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27878__auto__ = (((p == null))?null:p);
var m__27879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27878__auto__)]);
if(!((m__27879__auto__ == null))){
return m__27879__auto__.call(null,p,v);
} else {
var m__27879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27879__auto____$1 == null))){
return m__27879__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43083 = arguments.length;
switch (G__43083) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27195__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27195__auto__)){
return or__27195__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27195__auto__,mults){
return (function (p1__43081_SHARP_){
if(cljs.core.truth_(p1__43081_SHARP_.call(null,topic))){
return p1__43081_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43081_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43084 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43085){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43085 = meta43085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43086,meta43085__$1){
var self__ = this;
var _43086__$1 = this;
return (new cljs.core.async.t_cljs$core$async43084(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43085__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43086){
var self__ = this;
var _43086__$1 = this;
return self__.meta43085;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43085","meta43085",235572130,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43084";

cljs.core.async.t_cljs$core$async43084.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43084");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43084 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43084(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43085){
return (new cljs.core.async.t_cljs$core$async43084(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43085));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43084(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31469__auto___43204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43204,mults,ensure_mult,p){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43204,mults,ensure_mult,p){
return (function (state_43158){
var state_val_43159 = (state_43158[(1)]);
if((state_val_43159 === (7))){
var inst_43154 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
var statearr_43160_43205 = state_43158__$1;
(statearr_43160_43205[(2)] = inst_43154);

(statearr_43160_43205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (20))){
var state_43158__$1 = state_43158;
var statearr_43161_43206 = state_43158__$1;
(statearr_43161_43206[(2)] = null);

(statearr_43161_43206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (1))){
var state_43158__$1 = state_43158;
var statearr_43162_43207 = state_43158__$1;
(statearr_43162_43207[(2)] = null);

(statearr_43162_43207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (24))){
var inst_43137 = (state_43158[(7)]);
var inst_43146 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43137);
var state_43158__$1 = state_43158;
var statearr_43163_43208 = state_43158__$1;
(statearr_43163_43208[(2)] = inst_43146);

(statearr_43163_43208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (4))){
var inst_43089 = (state_43158[(8)]);
var inst_43089__$1 = (state_43158[(2)]);
var inst_43090 = (inst_43089__$1 == null);
var state_43158__$1 = (function (){var statearr_43164 = state_43158;
(statearr_43164[(8)] = inst_43089__$1);

return statearr_43164;
})();
if(cljs.core.truth_(inst_43090)){
var statearr_43165_43209 = state_43158__$1;
(statearr_43165_43209[(1)] = (5));

} else {
var statearr_43166_43210 = state_43158__$1;
(statearr_43166_43210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (15))){
var inst_43131 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
var statearr_43167_43211 = state_43158__$1;
(statearr_43167_43211[(2)] = inst_43131);

(statearr_43167_43211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (21))){
var inst_43151 = (state_43158[(2)]);
var state_43158__$1 = (function (){var statearr_43168 = state_43158;
(statearr_43168[(9)] = inst_43151);

return statearr_43168;
})();
var statearr_43169_43212 = state_43158__$1;
(statearr_43169_43212[(2)] = null);

(statearr_43169_43212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (13))){
var inst_43113 = (state_43158[(10)]);
var inst_43115 = cljs.core.chunked_seq_QMARK_.call(null,inst_43113);
var state_43158__$1 = state_43158;
if(inst_43115){
var statearr_43170_43213 = state_43158__$1;
(statearr_43170_43213[(1)] = (16));

} else {
var statearr_43171_43214 = state_43158__$1;
(statearr_43171_43214[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (22))){
var inst_43143 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
if(cljs.core.truth_(inst_43143)){
var statearr_43172_43215 = state_43158__$1;
(statearr_43172_43215[(1)] = (23));

} else {
var statearr_43173_43216 = state_43158__$1;
(statearr_43173_43216[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (6))){
var inst_43137 = (state_43158[(7)]);
var inst_43139 = (state_43158[(11)]);
var inst_43089 = (state_43158[(8)]);
var inst_43137__$1 = topic_fn.call(null,inst_43089);
var inst_43138 = cljs.core.deref.call(null,mults);
var inst_43139__$1 = cljs.core.get.call(null,inst_43138,inst_43137__$1);
var state_43158__$1 = (function (){var statearr_43174 = state_43158;
(statearr_43174[(7)] = inst_43137__$1);

(statearr_43174[(11)] = inst_43139__$1);

return statearr_43174;
})();
if(cljs.core.truth_(inst_43139__$1)){
var statearr_43175_43217 = state_43158__$1;
(statearr_43175_43217[(1)] = (19));

} else {
var statearr_43176_43218 = state_43158__$1;
(statearr_43176_43218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (25))){
var inst_43148 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
var statearr_43177_43219 = state_43158__$1;
(statearr_43177_43219[(2)] = inst_43148);

(statearr_43177_43219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (17))){
var inst_43113 = (state_43158[(10)]);
var inst_43122 = cljs.core.first.call(null,inst_43113);
var inst_43123 = cljs.core.async.muxch_STAR_.call(null,inst_43122);
var inst_43124 = cljs.core.async.close_BANG_.call(null,inst_43123);
var inst_43125 = cljs.core.next.call(null,inst_43113);
var inst_43099 = inst_43125;
var inst_43100 = null;
var inst_43101 = (0);
var inst_43102 = (0);
var state_43158__$1 = (function (){var statearr_43178 = state_43158;
(statearr_43178[(12)] = inst_43099);

(statearr_43178[(13)] = inst_43101);

(statearr_43178[(14)] = inst_43100);

(statearr_43178[(15)] = inst_43124);

(statearr_43178[(16)] = inst_43102);

return statearr_43178;
})();
var statearr_43179_43220 = state_43158__$1;
(statearr_43179_43220[(2)] = null);

(statearr_43179_43220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (3))){
var inst_43156 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43158__$1,inst_43156);
} else {
if((state_val_43159 === (12))){
var inst_43133 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
var statearr_43180_43221 = state_43158__$1;
(statearr_43180_43221[(2)] = inst_43133);

(statearr_43180_43221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (2))){
var state_43158__$1 = state_43158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43158__$1,(4),ch);
} else {
if((state_val_43159 === (23))){
var state_43158__$1 = state_43158;
var statearr_43181_43222 = state_43158__$1;
(statearr_43181_43222[(2)] = null);

(statearr_43181_43222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (19))){
var inst_43139 = (state_43158[(11)]);
var inst_43089 = (state_43158[(8)]);
var inst_43141 = cljs.core.async.muxch_STAR_.call(null,inst_43139);
var state_43158__$1 = state_43158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43158__$1,(22),inst_43141,inst_43089);
} else {
if((state_val_43159 === (11))){
var inst_43099 = (state_43158[(12)]);
var inst_43113 = (state_43158[(10)]);
var inst_43113__$1 = cljs.core.seq.call(null,inst_43099);
var state_43158__$1 = (function (){var statearr_43182 = state_43158;
(statearr_43182[(10)] = inst_43113__$1);

return statearr_43182;
})();
if(inst_43113__$1){
var statearr_43183_43223 = state_43158__$1;
(statearr_43183_43223[(1)] = (13));

} else {
var statearr_43184_43224 = state_43158__$1;
(statearr_43184_43224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (9))){
var inst_43135 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
var statearr_43185_43225 = state_43158__$1;
(statearr_43185_43225[(2)] = inst_43135);

(statearr_43185_43225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (5))){
var inst_43096 = cljs.core.deref.call(null,mults);
var inst_43097 = cljs.core.vals.call(null,inst_43096);
var inst_43098 = cljs.core.seq.call(null,inst_43097);
var inst_43099 = inst_43098;
var inst_43100 = null;
var inst_43101 = (0);
var inst_43102 = (0);
var state_43158__$1 = (function (){var statearr_43186 = state_43158;
(statearr_43186[(12)] = inst_43099);

(statearr_43186[(13)] = inst_43101);

(statearr_43186[(14)] = inst_43100);

(statearr_43186[(16)] = inst_43102);

return statearr_43186;
})();
var statearr_43187_43226 = state_43158__$1;
(statearr_43187_43226[(2)] = null);

(statearr_43187_43226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (14))){
var state_43158__$1 = state_43158;
var statearr_43191_43227 = state_43158__$1;
(statearr_43191_43227[(2)] = null);

(statearr_43191_43227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (16))){
var inst_43113 = (state_43158[(10)]);
var inst_43117 = cljs.core.chunk_first.call(null,inst_43113);
var inst_43118 = cljs.core.chunk_rest.call(null,inst_43113);
var inst_43119 = cljs.core.count.call(null,inst_43117);
var inst_43099 = inst_43118;
var inst_43100 = inst_43117;
var inst_43101 = inst_43119;
var inst_43102 = (0);
var state_43158__$1 = (function (){var statearr_43192 = state_43158;
(statearr_43192[(12)] = inst_43099);

(statearr_43192[(13)] = inst_43101);

(statearr_43192[(14)] = inst_43100);

(statearr_43192[(16)] = inst_43102);

return statearr_43192;
})();
var statearr_43193_43228 = state_43158__$1;
(statearr_43193_43228[(2)] = null);

(statearr_43193_43228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (10))){
var inst_43099 = (state_43158[(12)]);
var inst_43101 = (state_43158[(13)]);
var inst_43100 = (state_43158[(14)]);
var inst_43102 = (state_43158[(16)]);
var inst_43107 = cljs.core._nth.call(null,inst_43100,inst_43102);
var inst_43108 = cljs.core.async.muxch_STAR_.call(null,inst_43107);
var inst_43109 = cljs.core.async.close_BANG_.call(null,inst_43108);
var inst_43110 = (inst_43102 + (1));
var tmp43188 = inst_43099;
var tmp43189 = inst_43101;
var tmp43190 = inst_43100;
var inst_43099__$1 = tmp43188;
var inst_43100__$1 = tmp43190;
var inst_43101__$1 = tmp43189;
var inst_43102__$1 = inst_43110;
var state_43158__$1 = (function (){var statearr_43194 = state_43158;
(statearr_43194[(12)] = inst_43099__$1);

(statearr_43194[(17)] = inst_43109);

(statearr_43194[(13)] = inst_43101__$1);

(statearr_43194[(14)] = inst_43100__$1);

(statearr_43194[(16)] = inst_43102__$1);

return statearr_43194;
})();
var statearr_43195_43229 = state_43158__$1;
(statearr_43195_43229[(2)] = null);

(statearr_43195_43229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (18))){
var inst_43128 = (state_43158[(2)]);
var state_43158__$1 = state_43158;
var statearr_43196_43230 = state_43158__$1;
(statearr_43196_43230[(2)] = inst_43128);

(statearr_43196_43230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (8))){
var inst_43101 = (state_43158[(13)]);
var inst_43102 = (state_43158[(16)]);
var inst_43104 = (inst_43102 < inst_43101);
var inst_43105 = inst_43104;
var state_43158__$1 = state_43158;
if(cljs.core.truth_(inst_43105)){
var statearr_43197_43231 = state_43158__$1;
(statearr_43197_43231[(1)] = (10));

} else {
var statearr_43198_43232 = state_43158__$1;
(statearr_43198_43232[(1)] = (11));

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
});})(c__31469__auto___43204,mults,ensure_mult,p))
;
return ((function (switch__31381__auto__,c__31469__auto___43204,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43199[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43199[(1)] = (1));

return statearr_43199;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43158){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43200){if((e43200 instanceof Object)){
var ex__31385__auto__ = e43200;
var statearr_43201_43233 = state_43158;
(statearr_43201_43233[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43234 = state_43158;
state_43158 = G__43234;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43204,mults,ensure_mult,p))
})();
var state__31471__auto__ = (function (){var statearr_43202 = f__31470__auto__.call(null);
(statearr_43202[(6)] = c__31469__auto___43204);

return statearr_43202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43204,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43236 = arguments.length;
switch (G__43236) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43239 = arguments.length;
switch (G__43239) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43242 = arguments.length;
switch (G__43242) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31469__auto___43309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43309,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43309,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43281){
var state_val_43282 = (state_43281[(1)]);
if((state_val_43282 === (7))){
var state_43281__$1 = state_43281;
var statearr_43283_43310 = state_43281__$1;
(statearr_43283_43310[(2)] = null);

(statearr_43283_43310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (1))){
var state_43281__$1 = state_43281;
var statearr_43284_43311 = state_43281__$1;
(statearr_43284_43311[(2)] = null);

(statearr_43284_43311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (4))){
var inst_43245 = (state_43281[(7)]);
var inst_43247 = (inst_43245 < cnt);
var state_43281__$1 = state_43281;
if(cljs.core.truth_(inst_43247)){
var statearr_43285_43312 = state_43281__$1;
(statearr_43285_43312[(1)] = (6));

} else {
var statearr_43286_43313 = state_43281__$1;
(statearr_43286_43313[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (15))){
var inst_43277 = (state_43281[(2)]);
var state_43281__$1 = state_43281;
var statearr_43287_43314 = state_43281__$1;
(statearr_43287_43314[(2)] = inst_43277);

(statearr_43287_43314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (13))){
var inst_43270 = cljs.core.async.close_BANG_.call(null,out);
var state_43281__$1 = state_43281;
var statearr_43288_43315 = state_43281__$1;
(statearr_43288_43315[(2)] = inst_43270);

(statearr_43288_43315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (6))){
var state_43281__$1 = state_43281;
var statearr_43289_43316 = state_43281__$1;
(statearr_43289_43316[(2)] = null);

(statearr_43289_43316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (3))){
var inst_43279 = (state_43281[(2)]);
var state_43281__$1 = state_43281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43281__$1,inst_43279);
} else {
if((state_val_43282 === (12))){
var inst_43267 = (state_43281[(8)]);
var inst_43267__$1 = (state_43281[(2)]);
var inst_43268 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43267__$1);
var state_43281__$1 = (function (){var statearr_43290 = state_43281;
(statearr_43290[(8)] = inst_43267__$1);

return statearr_43290;
})();
if(cljs.core.truth_(inst_43268)){
var statearr_43291_43317 = state_43281__$1;
(statearr_43291_43317[(1)] = (13));

} else {
var statearr_43292_43318 = state_43281__$1;
(statearr_43292_43318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (2))){
var inst_43244 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43245 = (0);
var state_43281__$1 = (function (){var statearr_43293 = state_43281;
(statearr_43293[(7)] = inst_43245);

(statearr_43293[(9)] = inst_43244);

return statearr_43293;
})();
var statearr_43294_43319 = state_43281__$1;
(statearr_43294_43319[(2)] = null);

(statearr_43294_43319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (11))){
var inst_43245 = (state_43281[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43281,(10),Object,null,(9));
var inst_43254 = chs__$1.call(null,inst_43245);
var inst_43255 = done.call(null,inst_43245);
var inst_43256 = cljs.core.async.take_BANG_.call(null,inst_43254,inst_43255);
var state_43281__$1 = state_43281;
var statearr_43295_43320 = state_43281__$1;
(statearr_43295_43320[(2)] = inst_43256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43281__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (9))){
var inst_43245 = (state_43281[(7)]);
var inst_43258 = (state_43281[(2)]);
var inst_43259 = (inst_43245 + (1));
var inst_43245__$1 = inst_43259;
var state_43281__$1 = (function (){var statearr_43296 = state_43281;
(statearr_43296[(7)] = inst_43245__$1);

(statearr_43296[(10)] = inst_43258);

return statearr_43296;
})();
var statearr_43297_43321 = state_43281__$1;
(statearr_43297_43321[(2)] = null);

(statearr_43297_43321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (5))){
var inst_43265 = (state_43281[(2)]);
var state_43281__$1 = (function (){var statearr_43298 = state_43281;
(statearr_43298[(11)] = inst_43265);

return statearr_43298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43281__$1,(12),dchan);
} else {
if((state_val_43282 === (14))){
var inst_43267 = (state_43281[(8)]);
var inst_43272 = cljs.core.apply.call(null,f,inst_43267);
var state_43281__$1 = state_43281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43281__$1,(16),out,inst_43272);
} else {
if((state_val_43282 === (16))){
var inst_43274 = (state_43281[(2)]);
var state_43281__$1 = (function (){var statearr_43299 = state_43281;
(statearr_43299[(12)] = inst_43274);

return statearr_43299;
})();
var statearr_43300_43322 = state_43281__$1;
(statearr_43300_43322[(2)] = null);

(statearr_43300_43322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (10))){
var inst_43249 = (state_43281[(2)]);
var inst_43250 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43281__$1 = (function (){var statearr_43301 = state_43281;
(statearr_43301[(13)] = inst_43249);

return statearr_43301;
})();
var statearr_43302_43323 = state_43281__$1;
(statearr_43302_43323[(2)] = inst_43250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43281__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43282 === (8))){
var inst_43263 = (state_43281[(2)]);
var state_43281__$1 = state_43281;
var statearr_43303_43324 = state_43281__$1;
(statearr_43303_43324[(2)] = inst_43263);

(statearr_43303_43324[(1)] = (5));


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
});})(c__31469__auto___43309,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31381__auto__,c__31469__auto___43309,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43304[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43304[(1)] = (1));

return statearr_43304;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43281){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43305){if((e43305 instanceof Object)){
var ex__31385__auto__ = e43305;
var statearr_43306_43325 = state_43281;
(statearr_43306_43325[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43326 = state_43281;
state_43281 = G__43326;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43309,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31471__auto__ = (function (){var statearr_43307 = f__31470__auto__.call(null);
(statearr_43307[(6)] = c__31469__auto___43309);

return statearr_43307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43309,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43329 = arguments.length;
switch (G__43329) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31469__auto___43383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43383,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43383,out){
return (function (state_43361){
var state_val_43362 = (state_43361[(1)]);
if((state_val_43362 === (7))){
var inst_43340 = (state_43361[(7)]);
var inst_43341 = (state_43361[(8)]);
var inst_43340__$1 = (state_43361[(2)]);
var inst_43341__$1 = cljs.core.nth.call(null,inst_43340__$1,(0),null);
var inst_43342 = cljs.core.nth.call(null,inst_43340__$1,(1),null);
var inst_43343 = (inst_43341__$1 == null);
var state_43361__$1 = (function (){var statearr_43363 = state_43361;
(statearr_43363[(9)] = inst_43342);

(statearr_43363[(7)] = inst_43340__$1);

(statearr_43363[(8)] = inst_43341__$1);

return statearr_43363;
})();
if(cljs.core.truth_(inst_43343)){
var statearr_43364_43384 = state_43361__$1;
(statearr_43364_43384[(1)] = (8));

} else {
var statearr_43365_43385 = state_43361__$1;
(statearr_43365_43385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (1))){
var inst_43330 = cljs.core.vec.call(null,chs);
var inst_43331 = inst_43330;
var state_43361__$1 = (function (){var statearr_43366 = state_43361;
(statearr_43366[(10)] = inst_43331);

return statearr_43366;
})();
var statearr_43367_43386 = state_43361__$1;
(statearr_43367_43386[(2)] = null);

(statearr_43367_43386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (4))){
var inst_43331 = (state_43361[(10)]);
var state_43361__$1 = state_43361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43361__$1,(7),inst_43331);
} else {
if((state_val_43362 === (6))){
var inst_43357 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
var statearr_43368_43387 = state_43361__$1;
(statearr_43368_43387[(2)] = inst_43357);

(statearr_43368_43387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (3))){
var inst_43359 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43361__$1,inst_43359);
} else {
if((state_val_43362 === (2))){
var inst_43331 = (state_43361[(10)]);
var inst_43333 = cljs.core.count.call(null,inst_43331);
var inst_43334 = (inst_43333 > (0));
var state_43361__$1 = state_43361;
if(cljs.core.truth_(inst_43334)){
var statearr_43370_43388 = state_43361__$1;
(statearr_43370_43388[(1)] = (4));

} else {
var statearr_43371_43389 = state_43361__$1;
(statearr_43371_43389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (11))){
var inst_43331 = (state_43361[(10)]);
var inst_43350 = (state_43361[(2)]);
var tmp43369 = inst_43331;
var inst_43331__$1 = tmp43369;
var state_43361__$1 = (function (){var statearr_43372 = state_43361;
(statearr_43372[(11)] = inst_43350);

(statearr_43372[(10)] = inst_43331__$1);

return statearr_43372;
})();
var statearr_43373_43390 = state_43361__$1;
(statearr_43373_43390[(2)] = null);

(statearr_43373_43390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (9))){
var inst_43341 = (state_43361[(8)]);
var state_43361__$1 = state_43361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43361__$1,(11),out,inst_43341);
} else {
if((state_val_43362 === (5))){
var inst_43355 = cljs.core.async.close_BANG_.call(null,out);
var state_43361__$1 = state_43361;
var statearr_43374_43391 = state_43361__$1;
(statearr_43374_43391[(2)] = inst_43355);

(statearr_43374_43391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (10))){
var inst_43353 = (state_43361[(2)]);
var state_43361__$1 = state_43361;
var statearr_43375_43392 = state_43361__$1;
(statearr_43375_43392[(2)] = inst_43353);

(statearr_43375_43392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43362 === (8))){
var inst_43342 = (state_43361[(9)]);
var inst_43340 = (state_43361[(7)]);
var inst_43341 = (state_43361[(8)]);
var inst_43331 = (state_43361[(10)]);
var inst_43345 = (function (){var cs = inst_43331;
var vec__43336 = inst_43340;
var v = inst_43341;
var c = inst_43342;
return ((function (cs,vec__43336,v,c,inst_43342,inst_43340,inst_43341,inst_43331,state_val_43362,c__31469__auto___43383,out){
return (function (p1__43327_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43327_SHARP_);
});
;})(cs,vec__43336,v,c,inst_43342,inst_43340,inst_43341,inst_43331,state_val_43362,c__31469__auto___43383,out))
})();
var inst_43346 = cljs.core.filterv.call(null,inst_43345,inst_43331);
var inst_43331__$1 = inst_43346;
var state_43361__$1 = (function (){var statearr_43376 = state_43361;
(statearr_43376[(10)] = inst_43331__$1);

return statearr_43376;
})();
var statearr_43377_43393 = state_43361__$1;
(statearr_43377_43393[(2)] = null);

(statearr_43377_43393[(1)] = (2));


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
});})(c__31469__auto___43383,out))
;
return ((function (switch__31381__auto__,c__31469__auto___43383,out){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43378[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43378[(1)] = (1));

return statearr_43378;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43361){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43379){if((e43379 instanceof Object)){
var ex__31385__auto__ = e43379;
var statearr_43380_43394 = state_43361;
(statearr_43380_43394[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43395 = state_43361;
state_43361 = G__43395;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43383,out))
})();
var state__31471__auto__ = (function (){var statearr_43381 = f__31470__auto__.call(null);
(statearr_43381[(6)] = c__31469__auto___43383);

return statearr_43381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43383,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43397 = arguments.length;
switch (G__43397) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31469__auto___43442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43442,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43442,out){
return (function (state_43421){
var state_val_43422 = (state_43421[(1)]);
if((state_val_43422 === (7))){
var inst_43403 = (state_43421[(7)]);
var inst_43403__$1 = (state_43421[(2)]);
var inst_43404 = (inst_43403__$1 == null);
var inst_43405 = cljs.core.not.call(null,inst_43404);
var state_43421__$1 = (function (){var statearr_43423 = state_43421;
(statearr_43423[(7)] = inst_43403__$1);

return statearr_43423;
})();
if(inst_43405){
var statearr_43424_43443 = state_43421__$1;
(statearr_43424_43443[(1)] = (8));

} else {
var statearr_43425_43444 = state_43421__$1;
(statearr_43425_43444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (1))){
var inst_43398 = (0);
var state_43421__$1 = (function (){var statearr_43426 = state_43421;
(statearr_43426[(8)] = inst_43398);

return statearr_43426;
})();
var statearr_43427_43445 = state_43421__$1;
(statearr_43427_43445[(2)] = null);

(statearr_43427_43445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (4))){
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43421__$1,(7),ch);
} else {
if((state_val_43422 === (6))){
var inst_43416 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43428_43446 = state_43421__$1;
(statearr_43428_43446[(2)] = inst_43416);

(statearr_43428_43446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (3))){
var inst_43418 = (state_43421[(2)]);
var inst_43419 = cljs.core.async.close_BANG_.call(null,out);
var state_43421__$1 = (function (){var statearr_43429 = state_43421;
(statearr_43429[(9)] = inst_43418);

return statearr_43429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43421__$1,inst_43419);
} else {
if((state_val_43422 === (2))){
var inst_43398 = (state_43421[(8)]);
var inst_43400 = (inst_43398 < n);
var state_43421__$1 = state_43421;
if(cljs.core.truth_(inst_43400)){
var statearr_43430_43447 = state_43421__$1;
(statearr_43430_43447[(1)] = (4));

} else {
var statearr_43431_43448 = state_43421__$1;
(statearr_43431_43448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (11))){
var inst_43398 = (state_43421[(8)]);
var inst_43408 = (state_43421[(2)]);
var inst_43409 = (inst_43398 + (1));
var inst_43398__$1 = inst_43409;
var state_43421__$1 = (function (){var statearr_43432 = state_43421;
(statearr_43432[(10)] = inst_43408);

(statearr_43432[(8)] = inst_43398__$1);

return statearr_43432;
})();
var statearr_43433_43449 = state_43421__$1;
(statearr_43433_43449[(2)] = null);

(statearr_43433_43449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (9))){
var state_43421__$1 = state_43421;
var statearr_43434_43450 = state_43421__$1;
(statearr_43434_43450[(2)] = null);

(statearr_43434_43450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (5))){
var state_43421__$1 = state_43421;
var statearr_43435_43451 = state_43421__$1;
(statearr_43435_43451[(2)] = null);

(statearr_43435_43451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (10))){
var inst_43413 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43436_43452 = state_43421__$1;
(statearr_43436_43452[(2)] = inst_43413);

(statearr_43436_43452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (8))){
var inst_43403 = (state_43421[(7)]);
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43421__$1,(11),out,inst_43403);
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
});})(c__31469__auto___43442,out))
;
return ((function (switch__31381__auto__,c__31469__auto___43442,out){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43437[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43437[(1)] = (1));

return statearr_43437;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43421){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43438){if((e43438 instanceof Object)){
var ex__31385__auto__ = e43438;
var statearr_43439_43453 = state_43421;
(statearr_43439_43453[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43454 = state_43421;
state_43421 = G__43454;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43421);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43442,out))
})();
var state__31471__auto__ = (function (){var statearr_43440 = f__31470__auto__.call(null);
(statearr_43440[(6)] = c__31469__auto___43442);

return statearr_43440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43442,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43456 = (function (f,ch,meta43457){
this.f = f;
this.ch = ch;
this.meta43457 = meta43457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43458,meta43457__$1){
var self__ = this;
var _43458__$1 = this;
return (new cljs.core.async.t_cljs$core$async43456(self__.f,self__.ch,meta43457__$1));
});

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43458){
var self__ = this;
var _43458__$1 = this;
return self__.meta43457;
});

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43459 = (function (f,ch,meta43457,_,fn1,meta43460){
this.f = f;
this.ch = ch;
this.meta43457 = meta43457;
this._ = _;
this.fn1 = fn1;
this.meta43460 = meta43460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43461,meta43460__$1){
var self__ = this;
var _43461__$1 = this;
return (new cljs.core.async.t_cljs$core$async43459(self__.f,self__.ch,self__.meta43457,self__._,self__.fn1,meta43460__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43461){
var self__ = this;
var _43461__$1 = this;
return self__.meta43460;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43455_SHARP_){
return f1.call(null,(((p1__43455_SHARP_ == null))?null:self__.f.call(null,p1__43455_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43459.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43457","meta43457",-1122922316,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43456","cljs.core.async/t_cljs$core$async43456",449851010,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43460","meta43460",-853705061,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43459";

cljs.core.async.t_cljs$core$async43459.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43459");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43459 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43459(f__$1,ch__$1,meta43457__$1,___$2,fn1__$1,meta43460){
return (new cljs.core.async.t_cljs$core$async43459(f__$1,ch__$1,meta43457__$1,___$2,fn1__$1,meta43460));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43459(self__.f,self__.ch,self__.meta43457,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27183__auto__ = ret;
if(cljs.core.truth_(and__27183__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27183__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43457","meta43457",-1122922316,null)], null);
});

cljs.core.async.t_cljs$core$async43456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43456";

cljs.core.async.t_cljs$core$async43456.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43456");
});

cljs.core.async.__GT_t_cljs$core$async43456 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43456(f__$1,ch__$1,meta43457){
return (new cljs.core.async.t_cljs$core$async43456(f__$1,ch__$1,meta43457));
});

}

return (new cljs.core.async.t_cljs$core$async43456(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43462 = (function (f,ch,meta43463){
this.f = f;
this.ch = ch;
this.meta43463 = meta43463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43464,meta43463__$1){
var self__ = this;
var _43464__$1 = this;
return (new cljs.core.async.t_cljs$core$async43462(self__.f,self__.ch,meta43463__$1));
});

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43464){
var self__ = this;
var _43464__$1 = this;
return self__.meta43463;
});

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43463","meta43463",-1840645171,null)], null);
});

cljs.core.async.t_cljs$core$async43462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43462";

cljs.core.async.t_cljs$core$async43462.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43462");
});

cljs.core.async.__GT_t_cljs$core$async43462 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43462(f__$1,ch__$1,meta43463){
return (new cljs.core.async.t_cljs$core$async43462(f__$1,ch__$1,meta43463));
});

}

return (new cljs.core.async.t_cljs$core$async43462(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43465 = (function (p,ch,meta43466){
this.p = p;
this.ch = ch;
this.meta43466 = meta43466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43467,meta43466__$1){
var self__ = this;
var _43467__$1 = this;
return (new cljs.core.async.t_cljs$core$async43465(self__.p,self__.ch,meta43466__$1));
});

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43467){
var self__ = this;
var _43467__$1 = this;
return self__.meta43466;
});

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43466","meta43466",-181489030,null)], null);
});

cljs.core.async.t_cljs$core$async43465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43465";

cljs.core.async.t_cljs$core$async43465.cljs$lang$ctorPrWriter = (function (this__27820__auto__,writer__27821__auto__,opt__27822__auto__){
return cljs.core._write.call(null,writer__27821__auto__,"cljs.core.async/t_cljs$core$async43465");
});

cljs.core.async.__GT_t_cljs$core$async43465 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43465(p__$1,ch__$1,meta43466){
return (new cljs.core.async.t_cljs$core$async43465(p__$1,ch__$1,meta43466));
});

}

return (new cljs.core.async.t_cljs$core$async43465(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43469 = arguments.length;
switch (G__43469) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31469__auto___43509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43509,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43509,out){
return (function (state_43490){
var state_val_43491 = (state_43490[(1)]);
if((state_val_43491 === (7))){
var inst_43486 = (state_43490[(2)]);
var state_43490__$1 = state_43490;
var statearr_43492_43510 = state_43490__$1;
(statearr_43492_43510[(2)] = inst_43486);

(statearr_43492_43510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (1))){
var state_43490__$1 = state_43490;
var statearr_43493_43511 = state_43490__$1;
(statearr_43493_43511[(2)] = null);

(statearr_43493_43511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (4))){
var inst_43472 = (state_43490[(7)]);
var inst_43472__$1 = (state_43490[(2)]);
var inst_43473 = (inst_43472__$1 == null);
var state_43490__$1 = (function (){var statearr_43494 = state_43490;
(statearr_43494[(7)] = inst_43472__$1);

return statearr_43494;
})();
if(cljs.core.truth_(inst_43473)){
var statearr_43495_43512 = state_43490__$1;
(statearr_43495_43512[(1)] = (5));

} else {
var statearr_43496_43513 = state_43490__$1;
(statearr_43496_43513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (6))){
var inst_43472 = (state_43490[(7)]);
var inst_43477 = p.call(null,inst_43472);
var state_43490__$1 = state_43490;
if(cljs.core.truth_(inst_43477)){
var statearr_43497_43514 = state_43490__$1;
(statearr_43497_43514[(1)] = (8));

} else {
var statearr_43498_43515 = state_43490__$1;
(statearr_43498_43515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (3))){
var inst_43488 = (state_43490[(2)]);
var state_43490__$1 = state_43490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43490__$1,inst_43488);
} else {
if((state_val_43491 === (2))){
var state_43490__$1 = state_43490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43490__$1,(4),ch);
} else {
if((state_val_43491 === (11))){
var inst_43480 = (state_43490[(2)]);
var state_43490__$1 = state_43490;
var statearr_43499_43516 = state_43490__$1;
(statearr_43499_43516[(2)] = inst_43480);

(statearr_43499_43516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (9))){
var state_43490__$1 = state_43490;
var statearr_43500_43517 = state_43490__$1;
(statearr_43500_43517[(2)] = null);

(statearr_43500_43517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (5))){
var inst_43475 = cljs.core.async.close_BANG_.call(null,out);
var state_43490__$1 = state_43490;
var statearr_43501_43518 = state_43490__$1;
(statearr_43501_43518[(2)] = inst_43475);

(statearr_43501_43518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (10))){
var inst_43483 = (state_43490[(2)]);
var state_43490__$1 = (function (){var statearr_43502 = state_43490;
(statearr_43502[(8)] = inst_43483);

return statearr_43502;
})();
var statearr_43503_43519 = state_43490__$1;
(statearr_43503_43519[(2)] = null);

(statearr_43503_43519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43491 === (8))){
var inst_43472 = (state_43490[(7)]);
var state_43490__$1 = state_43490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43490__$1,(11),out,inst_43472);
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
});})(c__31469__auto___43509,out))
;
return ((function (switch__31381__auto__,c__31469__auto___43509,out){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43504 = [null,null,null,null,null,null,null,null,null];
(statearr_43504[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43504[(1)] = (1));

return statearr_43504;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43490){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43505){if((e43505 instanceof Object)){
var ex__31385__auto__ = e43505;
var statearr_43506_43520 = state_43490;
(statearr_43506_43520[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43521 = state_43490;
state_43490 = G__43521;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43509,out))
})();
var state__31471__auto__ = (function (){var statearr_43507 = f__31470__auto__.call(null);
(statearr_43507[(6)] = c__31469__auto___43509);

return statearr_43507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43509,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43523 = arguments.length;
switch (G__43523) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31469__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto__){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto__){
return (function (state_43586){
var state_val_43587 = (state_43586[(1)]);
if((state_val_43587 === (7))){
var inst_43582 = (state_43586[(2)]);
var state_43586__$1 = state_43586;
var statearr_43588_43626 = state_43586__$1;
(statearr_43588_43626[(2)] = inst_43582);

(statearr_43588_43626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (20))){
var inst_43552 = (state_43586[(7)]);
var inst_43563 = (state_43586[(2)]);
var inst_43564 = cljs.core.next.call(null,inst_43552);
var inst_43538 = inst_43564;
var inst_43539 = null;
var inst_43540 = (0);
var inst_43541 = (0);
var state_43586__$1 = (function (){var statearr_43589 = state_43586;
(statearr_43589[(8)] = inst_43540);

(statearr_43589[(9)] = inst_43541);

(statearr_43589[(10)] = inst_43538);

(statearr_43589[(11)] = inst_43539);

(statearr_43589[(12)] = inst_43563);

return statearr_43589;
})();
var statearr_43590_43627 = state_43586__$1;
(statearr_43590_43627[(2)] = null);

(statearr_43590_43627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (1))){
var state_43586__$1 = state_43586;
var statearr_43591_43628 = state_43586__$1;
(statearr_43591_43628[(2)] = null);

(statearr_43591_43628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (4))){
var inst_43527 = (state_43586[(13)]);
var inst_43527__$1 = (state_43586[(2)]);
var inst_43528 = (inst_43527__$1 == null);
var state_43586__$1 = (function (){var statearr_43592 = state_43586;
(statearr_43592[(13)] = inst_43527__$1);

return statearr_43592;
})();
if(cljs.core.truth_(inst_43528)){
var statearr_43593_43629 = state_43586__$1;
(statearr_43593_43629[(1)] = (5));

} else {
var statearr_43594_43630 = state_43586__$1;
(statearr_43594_43630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (15))){
var state_43586__$1 = state_43586;
var statearr_43598_43631 = state_43586__$1;
(statearr_43598_43631[(2)] = null);

(statearr_43598_43631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (21))){
var state_43586__$1 = state_43586;
var statearr_43599_43632 = state_43586__$1;
(statearr_43599_43632[(2)] = null);

(statearr_43599_43632[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (13))){
var inst_43540 = (state_43586[(8)]);
var inst_43541 = (state_43586[(9)]);
var inst_43538 = (state_43586[(10)]);
var inst_43539 = (state_43586[(11)]);
var inst_43548 = (state_43586[(2)]);
var inst_43549 = (inst_43541 + (1));
var tmp43595 = inst_43540;
var tmp43596 = inst_43538;
var tmp43597 = inst_43539;
var inst_43538__$1 = tmp43596;
var inst_43539__$1 = tmp43597;
var inst_43540__$1 = tmp43595;
var inst_43541__$1 = inst_43549;
var state_43586__$1 = (function (){var statearr_43600 = state_43586;
(statearr_43600[(14)] = inst_43548);

(statearr_43600[(8)] = inst_43540__$1);

(statearr_43600[(9)] = inst_43541__$1);

(statearr_43600[(10)] = inst_43538__$1);

(statearr_43600[(11)] = inst_43539__$1);

return statearr_43600;
})();
var statearr_43601_43633 = state_43586__$1;
(statearr_43601_43633[(2)] = null);

(statearr_43601_43633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (22))){
var state_43586__$1 = state_43586;
var statearr_43602_43634 = state_43586__$1;
(statearr_43602_43634[(2)] = null);

(statearr_43602_43634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (6))){
var inst_43527 = (state_43586[(13)]);
var inst_43536 = f.call(null,inst_43527);
var inst_43537 = cljs.core.seq.call(null,inst_43536);
var inst_43538 = inst_43537;
var inst_43539 = null;
var inst_43540 = (0);
var inst_43541 = (0);
var state_43586__$1 = (function (){var statearr_43603 = state_43586;
(statearr_43603[(8)] = inst_43540);

(statearr_43603[(9)] = inst_43541);

(statearr_43603[(10)] = inst_43538);

(statearr_43603[(11)] = inst_43539);

return statearr_43603;
})();
var statearr_43604_43635 = state_43586__$1;
(statearr_43604_43635[(2)] = null);

(statearr_43604_43635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (17))){
var inst_43552 = (state_43586[(7)]);
var inst_43556 = cljs.core.chunk_first.call(null,inst_43552);
var inst_43557 = cljs.core.chunk_rest.call(null,inst_43552);
var inst_43558 = cljs.core.count.call(null,inst_43556);
var inst_43538 = inst_43557;
var inst_43539 = inst_43556;
var inst_43540 = inst_43558;
var inst_43541 = (0);
var state_43586__$1 = (function (){var statearr_43605 = state_43586;
(statearr_43605[(8)] = inst_43540);

(statearr_43605[(9)] = inst_43541);

(statearr_43605[(10)] = inst_43538);

(statearr_43605[(11)] = inst_43539);

return statearr_43605;
})();
var statearr_43606_43636 = state_43586__$1;
(statearr_43606_43636[(2)] = null);

(statearr_43606_43636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (3))){
var inst_43584 = (state_43586[(2)]);
var state_43586__$1 = state_43586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43586__$1,inst_43584);
} else {
if((state_val_43587 === (12))){
var inst_43572 = (state_43586[(2)]);
var state_43586__$1 = state_43586;
var statearr_43607_43637 = state_43586__$1;
(statearr_43607_43637[(2)] = inst_43572);

(statearr_43607_43637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (2))){
var state_43586__$1 = state_43586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43586__$1,(4),in$);
} else {
if((state_val_43587 === (23))){
var inst_43580 = (state_43586[(2)]);
var state_43586__$1 = state_43586;
var statearr_43608_43638 = state_43586__$1;
(statearr_43608_43638[(2)] = inst_43580);

(statearr_43608_43638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (19))){
var inst_43567 = (state_43586[(2)]);
var state_43586__$1 = state_43586;
var statearr_43609_43639 = state_43586__$1;
(statearr_43609_43639[(2)] = inst_43567);

(statearr_43609_43639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (11))){
var inst_43552 = (state_43586[(7)]);
var inst_43538 = (state_43586[(10)]);
var inst_43552__$1 = cljs.core.seq.call(null,inst_43538);
var state_43586__$1 = (function (){var statearr_43610 = state_43586;
(statearr_43610[(7)] = inst_43552__$1);

return statearr_43610;
})();
if(inst_43552__$1){
var statearr_43611_43640 = state_43586__$1;
(statearr_43611_43640[(1)] = (14));

} else {
var statearr_43612_43641 = state_43586__$1;
(statearr_43612_43641[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (9))){
var inst_43574 = (state_43586[(2)]);
var inst_43575 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43586__$1 = (function (){var statearr_43613 = state_43586;
(statearr_43613[(15)] = inst_43574);

return statearr_43613;
})();
if(cljs.core.truth_(inst_43575)){
var statearr_43614_43642 = state_43586__$1;
(statearr_43614_43642[(1)] = (21));

} else {
var statearr_43615_43643 = state_43586__$1;
(statearr_43615_43643[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (5))){
var inst_43530 = cljs.core.async.close_BANG_.call(null,out);
var state_43586__$1 = state_43586;
var statearr_43616_43644 = state_43586__$1;
(statearr_43616_43644[(2)] = inst_43530);

(statearr_43616_43644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (14))){
var inst_43552 = (state_43586[(7)]);
var inst_43554 = cljs.core.chunked_seq_QMARK_.call(null,inst_43552);
var state_43586__$1 = state_43586;
if(inst_43554){
var statearr_43617_43645 = state_43586__$1;
(statearr_43617_43645[(1)] = (17));

} else {
var statearr_43618_43646 = state_43586__$1;
(statearr_43618_43646[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (16))){
var inst_43570 = (state_43586[(2)]);
var state_43586__$1 = state_43586;
var statearr_43619_43647 = state_43586__$1;
(statearr_43619_43647[(2)] = inst_43570);

(statearr_43619_43647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43587 === (10))){
var inst_43541 = (state_43586[(9)]);
var inst_43539 = (state_43586[(11)]);
var inst_43546 = cljs.core._nth.call(null,inst_43539,inst_43541);
var state_43586__$1 = state_43586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43586__$1,(13),out,inst_43546);
} else {
if((state_val_43587 === (18))){
var inst_43552 = (state_43586[(7)]);
var inst_43561 = cljs.core.first.call(null,inst_43552);
var state_43586__$1 = state_43586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43586__$1,(20),out,inst_43561);
} else {
if((state_val_43587 === (8))){
var inst_43540 = (state_43586[(8)]);
var inst_43541 = (state_43586[(9)]);
var inst_43543 = (inst_43541 < inst_43540);
var inst_43544 = inst_43543;
var state_43586__$1 = state_43586;
if(cljs.core.truth_(inst_43544)){
var statearr_43620_43648 = state_43586__$1;
(statearr_43620_43648[(1)] = (10));

} else {
var statearr_43621_43649 = state_43586__$1;
(statearr_43621_43649[(1)] = (11));

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
});})(c__31469__auto__))
;
return ((function (switch__31381__auto__,c__31469__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31382__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31382__auto____0 = (function (){
var statearr_43622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43622[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31382__auto__);

(statearr_43622[(1)] = (1));

return statearr_43622;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31382__auto____1 = (function (state_43586){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43623){if((e43623 instanceof Object)){
var ex__31385__auto__ = e43623;
var statearr_43624_43650 = state_43586;
(statearr_43624_43650[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43651 = state_43586;
state_43586 = G__43651;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31382__auto__ = function(state_43586){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31382__auto____1.call(this,state_43586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31382__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31382__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto__))
})();
var state__31471__auto__ = (function (){var statearr_43625 = f__31470__auto__.call(null);
(statearr_43625[(6)] = c__31469__auto__);

return statearr_43625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto__))
);

return c__31469__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43653 = arguments.length;
switch (G__43653) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43656 = arguments.length;
switch (G__43656) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43659 = arguments.length;
switch (G__43659) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31469__auto___43706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43706,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43706,out){
return (function (state_43683){
var state_val_43684 = (state_43683[(1)]);
if((state_val_43684 === (7))){
var inst_43678 = (state_43683[(2)]);
var state_43683__$1 = state_43683;
var statearr_43685_43707 = state_43683__$1;
(statearr_43685_43707[(2)] = inst_43678);

(statearr_43685_43707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (1))){
var inst_43660 = null;
var state_43683__$1 = (function (){var statearr_43686 = state_43683;
(statearr_43686[(7)] = inst_43660);

return statearr_43686;
})();
var statearr_43687_43708 = state_43683__$1;
(statearr_43687_43708[(2)] = null);

(statearr_43687_43708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (4))){
var inst_43663 = (state_43683[(8)]);
var inst_43663__$1 = (state_43683[(2)]);
var inst_43664 = (inst_43663__$1 == null);
var inst_43665 = cljs.core.not.call(null,inst_43664);
var state_43683__$1 = (function (){var statearr_43688 = state_43683;
(statearr_43688[(8)] = inst_43663__$1);

return statearr_43688;
})();
if(inst_43665){
var statearr_43689_43709 = state_43683__$1;
(statearr_43689_43709[(1)] = (5));

} else {
var statearr_43690_43710 = state_43683__$1;
(statearr_43690_43710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (6))){
var state_43683__$1 = state_43683;
var statearr_43691_43711 = state_43683__$1;
(statearr_43691_43711[(2)] = null);

(statearr_43691_43711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (3))){
var inst_43680 = (state_43683[(2)]);
var inst_43681 = cljs.core.async.close_BANG_.call(null,out);
var state_43683__$1 = (function (){var statearr_43692 = state_43683;
(statearr_43692[(9)] = inst_43680);

return statearr_43692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43683__$1,inst_43681);
} else {
if((state_val_43684 === (2))){
var state_43683__$1 = state_43683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43683__$1,(4),ch);
} else {
if((state_val_43684 === (11))){
var inst_43663 = (state_43683[(8)]);
var inst_43672 = (state_43683[(2)]);
var inst_43660 = inst_43663;
var state_43683__$1 = (function (){var statearr_43693 = state_43683;
(statearr_43693[(7)] = inst_43660);

(statearr_43693[(10)] = inst_43672);

return statearr_43693;
})();
var statearr_43694_43712 = state_43683__$1;
(statearr_43694_43712[(2)] = null);

(statearr_43694_43712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (9))){
var inst_43663 = (state_43683[(8)]);
var state_43683__$1 = state_43683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43683__$1,(11),out,inst_43663);
} else {
if((state_val_43684 === (5))){
var inst_43660 = (state_43683[(7)]);
var inst_43663 = (state_43683[(8)]);
var inst_43667 = cljs.core._EQ_.call(null,inst_43663,inst_43660);
var state_43683__$1 = state_43683;
if(inst_43667){
var statearr_43696_43713 = state_43683__$1;
(statearr_43696_43713[(1)] = (8));

} else {
var statearr_43697_43714 = state_43683__$1;
(statearr_43697_43714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (10))){
var inst_43675 = (state_43683[(2)]);
var state_43683__$1 = state_43683;
var statearr_43698_43715 = state_43683__$1;
(statearr_43698_43715[(2)] = inst_43675);

(statearr_43698_43715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43684 === (8))){
var inst_43660 = (state_43683[(7)]);
var tmp43695 = inst_43660;
var inst_43660__$1 = tmp43695;
var state_43683__$1 = (function (){var statearr_43699 = state_43683;
(statearr_43699[(7)] = inst_43660__$1);

return statearr_43699;
})();
var statearr_43700_43716 = state_43683__$1;
(statearr_43700_43716[(2)] = null);

(statearr_43700_43716[(1)] = (2));


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
});})(c__31469__auto___43706,out))
;
return ((function (switch__31381__auto__,c__31469__auto___43706,out){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43701[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43701[(1)] = (1));

return statearr_43701;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43683){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43702){if((e43702 instanceof Object)){
var ex__31385__auto__ = e43702;
var statearr_43703_43717 = state_43683;
(statearr_43703_43717[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43718 = state_43683;
state_43683 = G__43718;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43706,out))
})();
var state__31471__auto__ = (function (){var statearr_43704 = f__31470__auto__.call(null);
(statearr_43704[(6)] = c__31469__auto___43706);

return statearr_43704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43706,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43720 = arguments.length;
switch (G__43720) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31469__auto___43786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43786,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43786,out){
return (function (state_43758){
var state_val_43759 = (state_43758[(1)]);
if((state_val_43759 === (7))){
var inst_43754 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43760_43787 = state_43758__$1;
(statearr_43760_43787[(2)] = inst_43754);

(statearr_43760_43787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (1))){
var inst_43721 = (new Array(n));
var inst_43722 = inst_43721;
var inst_43723 = (0);
var state_43758__$1 = (function (){var statearr_43761 = state_43758;
(statearr_43761[(7)] = inst_43722);

(statearr_43761[(8)] = inst_43723);

return statearr_43761;
})();
var statearr_43762_43788 = state_43758__$1;
(statearr_43762_43788[(2)] = null);

(statearr_43762_43788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (4))){
var inst_43726 = (state_43758[(9)]);
var inst_43726__$1 = (state_43758[(2)]);
var inst_43727 = (inst_43726__$1 == null);
var inst_43728 = cljs.core.not.call(null,inst_43727);
var state_43758__$1 = (function (){var statearr_43763 = state_43758;
(statearr_43763[(9)] = inst_43726__$1);

return statearr_43763;
})();
if(inst_43728){
var statearr_43764_43789 = state_43758__$1;
(statearr_43764_43789[(1)] = (5));

} else {
var statearr_43765_43790 = state_43758__$1;
(statearr_43765_43790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (15))){
var inst_43748 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43766_43791 = state_43758__$1;
(statearr_43766_43791[(2)] = inst_43748);

(statearr_43766_43791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (13))){
var state_43758__$1 = state_43758;
var statearr_43767_43792 = state_43758__$1;
(statearr_43767_43792[(2)] = null);

(statearr_43767_43792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (6))){
var inst_43723 = (state_43758[(8)]);
var inst_43744 = (inst_43723 > (0));
var state_43758__$1 = state_43758;
if(cljs.core.truth_(inst_43744)){
var statearr_43768_43793 = state_43758__$1;
(statearr_43768_43793[(1)] = (12));

} else {
var statearr_43769_43794 = state_43758__$1;
(statearr_43769_43794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (3))){
var inst_43756 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43758__$1,inst_43756);
} else {
if((state_val_43759 === (12))){
var inst_43722 = (state_43758[(7)]);
var inst_43746 = cljs.core.vec.call(null,inst_43722);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43758__$1,(15),out,inst_43746);
} else {
if((state_val_43759 === (2))){
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43758__$1,(4),ch);
} else {
if((state_val_43759 === (11))){
var inst_43738 = (state_43758[(2)]);
var inst_43739 = (new Array(n));
var inst_43722 = inst_43739;
var inst_43723 = (0);
var state_43758__$1 = (function (){var statearr_43770 = state_43758;
(statearr_43770[(10)] = inst_43738);

(statearr_43770[(7)] = inst_43722);

(statearr_43770[(8)] = inst_43723);

return statearr_43770;
})();
var statearr_43771_43795 = state_43758__$1;
(statearr_43771_43795[(2)] = null);

(statearr_43771_43795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (9))){
var inst_43722 = (state_43758[(7)]);
var inst_43736 = cljs.core.vec.call(null,inst_43722);
var state_43758__$1 = state_43758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43758__$1,(11),out,inst_43736);
} else {
if((state_val_43759 === (5))){
var inst_43722 = (state_43758[(7)]);
var inst_43731 = (state_43758[(11)]);
var inst_43723 = (state_43758[(8)]);
var inst_43726 = (state_43758[(9)]);
var inst_43730 = (inst_43722[inst_43723] = inst_43726);
var inst_43731__$1 = (inst_43723 + (1));
var inst_43732 = (inst_43731__$1 < n);
var state_43758__$1 = (function (){var statearr_43772 = state_43758;
(statearr_43772[(12)] = inst_43730);

(statearr_43772[(11)] = inst_43731__$1);

return statearr_43772;
})();
if(cljs.core.truth_(inst_43732)){
var statearr_43773_43796 = state_43758__$1;
(statearr_43773_43796[(1)] = (8));

} else {
var statearr_43774_43797 = state_43758__$1;
(statearr_43774_43797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (14))){
var inst_43751 = (state_43758[(2)]);
var inst_43752 = cljs.core.async.close_BANG_.call(null,out);
var state_43758__$1 = (function (){var statearr_43776 = state_43758;
(statearr_43776[(13)] = inst_43751);

return statearr_43776;
})();
var statearr_43777_43798 = state_43758__$1;
(statearr_43777_43798[(2)] = inst_43752);

(statearr_43777_43798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (10))){
var inst_43742 = (state_43758[(2)]);
var state_43758__$1 = state_43758;
var statearr_43778_43799 = state_43758__$1;
(statearr_43778_43799[(2)] = inst_43742);

(statearr_43778_43799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43759 === (8))){
var inst_43722 = (state_43758[(7)]);
var inst_43731 = (state_43758[(11)]);
var tmp43775 = inst_43722;
var inst_43722__$1 = tmp43775;
var inst_43723 = inst_43731;
var state_43758__$1 = (function (){var statearr_43779 = state_43758;
(statearr_43779[(7)] = inst_43722__$1);

(statearr_43779[(8)] = inst_43723);

return statearr_43779;
})();
var statearr_43780_43800 = state_43758__$1;
(statearr_43780_43800[(2)] = null);

(statearr_43780_43800[(1)] = (2));


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
});})(c__31469__auto___43786,out))
;
return ((function (switch__31381__auto__,c__31469__auto___43786,out){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43781[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43781[(1)] = (1));

return statearr_43781;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43758){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43782){if((e43782 instanceof Object)){
var ex__31385__auto__ = e43782;
var statearr_43783_43801 = state_43758;
(statearr_43783_43801[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43802 = state_43758;
state_43758 = G__43802;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43786,out))
})();
var state__31471__auto__ = (function (){var statearr_43784 = f__31470__auto__.call(null);
(statearr_43784[(6)] = c__31469__auto___43786);

return statearr_43784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43786,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43804 = arguments.length;
switch (G__43804) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31469__auto___43874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31469__auto___43874,out){
return (function (){
var f__31470__auto__ = (function (){var switch__31381__auto__ = ((function (c__31469__auto___43874,out){
return (function (state_43846){
var state_val_43847 = (state_43846[(1)]);
if((state_val_43847 === (7))){
var inst_43842 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43848_43875 = state_43846__$1;
(statearr_43848_43875[(2)] = inst_43842);

(statearr_43848_43875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (1))){
var inst_43805 = [];
var inst_43806 = inst_43805;
var inst_43807 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43846__$1 = (function (){var statearr_43849 = state_43846;
(statearr_43849[(7)] = inst_43806);

(statearr_43849[(8)] = inst_43807);

return statearr_43849;
})();
var statearr_43850_43876 = state_43846__$1;
(statearr_43850_43876[(2)] = null);

(statearr_43850_43876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (4))){
var inst_43810 = (state_43846[(9)]);
var inst_43810__$1 = (state_43846[(2)]);
var inst_43811 = (inst_43810__$1 == null);
var inst_43812 = cljs.core.not.call(null,inst_43811);
var state_43846__$1 = (function (){var statearr_43851 = state_43846;
(statearr_43851[(9)] = inst_43810__$1);

return statearr_43851;
})();
if(inst_43812){
var statearr_43852_43877 = state_43846__$1;
(statearr_43852_43877[(1)] = (5));

} else {
var statearr_43853_43878 = state_43846__$1;
(statearr_43853_43878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (15))){
var inst_43836 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43854_43879 = state_43846__$1;
(statearr_43854_43879[(2)] = inst_43836);

(statearr_43854_43879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (13))){
var state_43846__$1 = state_43846;
var statearr_43855_43880 = state_43846__$1;
(statearr_43855_43880[(2)] = null);

(statearr_43855_43880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (6))){
var inst_43806 = (state_43846[(7)]);
var inst_43831 = inst_43806.length;
var inst_43832 = (inst_43831 > (0));
var state_43846__$1 = state_43846;
if(cljs.core.truth_(inst_43832)){
var statearr_43856_43881 = state_43846__$1;
(statearr_43856_43881[(1)] = (12));

} else {
var statearr_43857_43882 = state_43846__$1;
(statearr_43857_43882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (3))){
var inst_43844 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43846__$1,inst_43844);
} else {
if((state_val_43847 === (12))){
var inst_43806 = (state_43846[(7)]);
var inst_43834 = cljs.core.vec.call(null,inst_43806);
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43846__$1,(15),out,inst_43834);
} else {
if((state_val_43847 === (2))){
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43846__$1,(4),ch);
} else {
if((state_val_43847 === (11))){
var inst_43810 = (state_43846[(9)]);
var inst_43814 = (state_43846[(10)]);
var inst_43824 = (state_43846[(2)]);
var inst_43825 = [];
var inst_43826 = inst_43825.push(inst_43810);
var inst_43806 = inst_43825;
var inst_43807 = inst_43814;
var state_43846__$1 = (function (){var statearr_43858 = state_43846;
(statearr_43858[(7)] = inst_43806);

(statearr_43858[(8)] = inst_43807);

(statearr_43858[(11)] = inst_43824);

(statearr_43858[(12)] = inst_43826);

return statearr_43858;
})();
var statearr_43859_43883 = state_43846__$1;
(statearr_43859_43883[(2)] = null);

(statearr_43859_43883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (9))){
var inst_43806 = (state_43846[(7)]);
var inst_43822 = cljs.core.vec.call(null,inst_43806);
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43846__$1,(11),out,inst_43822);
} else {
if((state_val_43847 === (5))){
var inst_43807 = (state_43846[(8)]);
var inst_43810 = (state_43846[(9)]);
var inst_43814 = (state_43846[(10)]);
var inst_43814__$1 = f.call(null,inst_43810);
var inst_43815 = cljs.core._EQ_.call(null,inst_43814__$1,inst_43807);
var inst_43816 = cljs.core.keyword_identical_QMARK_.call(null,inst_43807,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43817 = (inst_43815) || (inst_43816);
var state_43846__$1 = (function (){var statearr_43860 = state_43846;
(statearr_43860[(10)] = inst_43814__$1);

return statearr_43860;
})();
if(cljs.core.truth_(inst_43817)){
var statearr_43861_43884 = state_43846__$1;
(statearr_43861_43884[(1)] = (8));

} else {
var statearr_43862_43885 = state_43846__$1;
(statearr_43862_43885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (14))){
var inst_43839 = (state_43846[(2)]);
var inst_43840 = cljs.core.async.close_BANG_.call(null,out);
var state_43846__$1 = (function (){var statearr_43864 = state_43846;
(statearr_43864[(13)] = inst_43839);

return statearr_43864;
})();
var statearr_43865_43886 = state_43846__$1;
(statearr_43865_43886[(2)] = inst_43840);

(statearr_43865_43886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (10))){
var inst_43829 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43866_43887 = state_43846__$1;
(statearr_43866_43887[(2)] = inst_43829);

(statearr_43866_43887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (8))){
var inst_43806 = (state_43846[(7)]);
var inst_43810 = (state_43846[(9)]);
var inst_43814 = (state_43846[(10)]);
var inst_43819 = inst_43806.push(inst_43810);
var tmp43863 = inst_43806;
var inst_43806__$1 = tmp43863;
var inst_43807 = inst_43814;
var state_43846__$1 = (function (){var statearr_43867 = state_43846;
(statearr_43867[(7)] = inst_43806__$1);

(statearr_43867[(8)] = inst_43807);

(statearr_43867[(14)] = inst_43819);

return statearr_43867;
})();
var statearr_43868_43888 = state_43846__$1;
(statearr_43868_43888[(2)] = null);

(statearr_43868_43888[(1)] = (2));


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
});})(c__31469__auto___43874,out))
;
return ((function (switch__31381__auto__,c__31469__auto___43874,out){
return (function() {
var cljs$core$async$state_machine__31382__auto__ = null;
var cljs$core$async$state_machine__31382__auto____0 = (function (){
var statearr_43869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43869[(0)] = cljs$core$async$state_machine__31382__auto__);

(statearr_43869[(1)] = (1));

return statearr_43869;
});
var cljs$core$async$state_machine__31382__auto____1 = (function (state_43846){
while(true){
var ret_value__31383__auto__ = (function (){try{while(true){
var result__31384__auto__ = switch__31381__auto__.call(null,state_43846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31384__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31384__auto__;
}
break;
}
}catch (e43870){if((e43870 instanceof Object)){
var ex__31385__auto__ = e43870;
var statearr_43871_43889 = state_43846;
(statearr_43871_43889[(5)] = ex__31385__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31383__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43890 = state_43846;
state_43846 = G__43890;
continue;
} else {
return ret_value__31383__auto__;
}
break;
}
});
cljs$core$async$state_machine__31382__auto__ = function(state_43846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31382__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31382__auto____1.call(this,state_43846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31382__auto____0;
cljs$core$async$state_machine__31382__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31382__auto____1;
return cljs$core$async$state_machine__31382__auto__;
})()
;})(switch__31381__auto__,c__31469__auto___43874,out))
})();
var state__31471__auto__ = (function (){var statearr_43872 = f__31470__auto__.call(null);
(statearr_43872[(6)] = c__31469__auto___43874);

return statearr_43872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31471__auto__);
});})(c__31469__auto___43874,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507441636214
