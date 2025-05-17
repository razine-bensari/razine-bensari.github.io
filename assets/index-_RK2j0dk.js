var _m=t=>{throw TypeError(t)};var zu=(t,e,n)=>e.has(t)||_m("Cannot "+n);var ee=(t,e,n)=>(zu(t,e,"read from private field"),n?n.call(t):e.get(t)),nt=(t,e,n)=>e.has(t)?_m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ze=(t,e,n,i)=>(zu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Wt=(t,e,n)=>(zu(t,e,"access private method"),n);var ul=(t,e,n,i)=>({set _(r){ze(t,e,r,n)},get _(){return ee(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function s_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o_={exports:{}},lu={},a_={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),US=Symbol.for("react.portal"),FS=Symbol.for("react.fragment"),OS=Symbol.for("react.strict_mode"),kS=Symbol.for("react.profiler"),BS=Symbol.for("react.provider"),zS=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),VS=Symbol.for("react.suspense"),GS=Symbol.for("react.memo"),WS=Symbol.for("react.lazy"),xm=Symbol.iterator;function jS(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var l_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c_=Object.assign,u_={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=u_,this.updater=n||l_}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d_(){}d_.prototype=Uo.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=u_,this.updater=n||l_}var Gh=Vh.prototype=new d_;Gh.constructor=Vh;c_(Gh,Uo.prototype);Gh.isPureReactComponent=!0;var ym=Array.isArray,f_=Object.prototype.hasOwnProperty,Wh={current:null},h_={key:!0,ref:!0,__self:!0,__source:!0};function p_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)f_.call(e,i)&&!h_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ya,type:t,key:s,ref:o,props:r,_owner:Wh.current}}function XS(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function $S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sm=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$S(""+t.key):e.toString(36)}function nc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case US:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Hu(o,0):i,ym(r)?(n="",t!=null&&(n=t.replace(Sm,"$&/")+"/"),nc(r,e,n,"",function(c){return c})):r!=null&&(jh(r)&&(r=XS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ym(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Hu(s,a);o+=nc(s,e,n,l,r)}else if(l=jS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Hu(s,a++),o+=nc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var i=[],r=0;return nc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},ic={transition:null},YS={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ic,ReactCurrentOwner:Wh};function m_(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=Uo;Ge.Fragment=FS;Ge.Profiler=kS;Ge.PureComponent=Vh;Ge.StrictMode=OS;Ge.Suspense=VS;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;Ge.act=m_;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=c_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)f_.call(e,l)&&!h_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ya,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:zS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BS,_context:t},t.Consumer=t};Ge.createElement=p_;Ge.createFactory=function(t){var e=p_.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:HS,render:t}};Ge.isValidElement=jh;Ge.lazy=function(t){return{$$typeof:WS,_payload:{_status:-1,_result:t},_init:qS}};Ge.memo=function(t,e){return{$$typeof:GS,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=ic.transition;ic.transition={};try{t()}finally{ic.transition=e}};Ge.unstable_act=m_;Ge.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ge.useContext=function(t){return sn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ge.useId=function(){return sn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ge.useRef=function(t){return sn.current.useRef(t)};Ge.useState=function(t){return sn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return sn.current.useTransition()};Ge.version="18.3.1";a_.exports=Ge;var I=a_.exports;const Wr=s_(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS=I,QS=Symbol.for("react.element"),ZS=Symbol.for("react.fragment"),JS=Object.prototype.hasOwnProperty,eE=KS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tE={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)JS.call(e,i)&&!tE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:QS,type:t,key:s,ref:o,props:r,_owner:eE.current}}lu.Fragment=ZS;lu.jsx=g_;lu.jsxs=g_;o_.exports=lu;var C=o_.exports,v_={exports:{}},Rn={},__={exports:{}},x_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var Q=D.length;D.push(j);e:for(;0<Q;){var re=Q-1>>>1,Se=D[re];if(0<r(Se,j))D[re]=j,D[Q]=Se,Q=re;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],Q=D.pop();if(Q!==j){D[0]=Q;e:for(var re=0,Se=D.length,Ve=Se>>>1;re<Ve;){var K=2*(re+1)-1,ae=D[K],pe=K+1,le=D[pe];if(0>r(ae,Q))pe<Se&&0>r(le,ae)?(D[re]=le,D[pe]=Q,re=pe):(D[re]=ae,D[K]=Q,re=K);else if(pe<Se&&0>r(le,Q))D[re]=le,D[pe]=Q,re=pe;else break e}}return j}function r(D,j){var Q=D.sortIndex-j.sortIndex;return Q!==0?Q:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,g=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=D)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function y(D){if(g=!1,x(D),!_)if(n(l)!==null)_=!0,V(b);else{var j=n(c);j!==null&&q(y,j.startTime-D)}}function b(D,j){_=!1,g&&(g=!1,u(P),P=-1),m=!0;var Q=h;try{for(x(j),f=n(l);f!==null&&(!(f.expirationTime>j)||D&&!L());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var Se=re(f.expirationTime<=j);j=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),x(j)}else i(l);f=n(l)}if(f!==null)var Ve=!0;else{var K=n(c);K!==null&&q(y,K.startTime-j),Ve=!1}return Ve}finally{f=null,h=Q,m=!1}}var A=!1,T=null,P=-1,M=5,S=-1;function L(){return!(t.unstable_now()-S<M)}function B(){if(T!==null){var D=t.unstable_now();S=D;var j=!0;try{j=T(!0,D)}finally{j?z():(A=!1,T=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(B)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,$=k.port2;k.port1.onmessage=B,z=function(){$.postMessage(null)}}else z=function(){p(B,0)};function V(D){T=D,A||(A=!0,z())}function q(D,j){P=p(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,V(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var Q=h;h=j;try{return D()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=h;h=D;try{return j()}finally{h=Q}},t.unstable_scheduleCallback=function(D,j,Q){var re=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?re+Q:re):Q=re,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,D={id:d++,callback:j,priorityLevel:D,startTime:Q,expirationTime:Se,sortIndex:-1},Q>re?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(g?(u(P),P=-1):g=!0,q(y,Q-re))):(D.sortIndex=Se,e(l,D),_||m||(_=!0,V(b))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var j=h;return function(){var Q=h;h=j;try{return D.apply(this,arguments)}finally{h=Q}}}})(x_);__.exports=x_;var nE=__.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE=I,An=nE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y_=new Set,Ea={};function Ms(t,e){So(t,e),So(t+"Capture",e)}function So(t,e){for(Ea[t]=e,t=0;t<e.length;t++)y_.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=Object.prototype.hasOwnProperty,rE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Em={},Mm={};function sE(t){return Qd.call(Mm,t)?!0:Qd.call(Em,t)?!1:rE.test(t)?Mm[t]=!0:(Em[t]=!0,!1)}function oE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aE(t,e,n,i){if(e===null||typeof e>"u"||oE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function $h(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,$h);Ht[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,$h);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,$h);Ht[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aE(e,n,r,i)&&(n=null),i||r===null?sE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=iE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Zd=Symbol.for("react.profiler"),S_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),Jd=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),M_=Symbol.for("react.offscreen"),wm=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Vu;function aa(t){if(Vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vu=e&&e[1]||""}return`
`+Vu+t}var Gu=!1;function Wu(t,e){if(!t||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function lE(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=Wu(t.type,!1),t;case 11:return t=Wu(t.type.render,!1),t;case 1:return t=Wu(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Hs:return"Portal";case Zd:return"Profiler";case Yh:return"StrictMode";case Jd:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E_:return(t.displayName||"Context")+".Consumer";case S_:return(t._context.displayName||"Context")+".Provider";case Kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function cE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uE(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=uE(t))}function T_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=w_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function b_(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function rf(t,e){b_(t,e);var n=Lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var la=Array.isArray;function to(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(la(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function A_(t,e){var n=Lr(e.value),i=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,R_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dE=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){dE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function P_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function D_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=P_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fE=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(fE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function Zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,no=null,io=null;function Rm(t){if(t=Za(t)){if(typeof df!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=hu(e),df(t.stateNode,t.type,e))}}function L_(t){no?io?io.push(t):io=[t]:no=t}function N_(){if(no){var t=no,e=io;if(io=no=null,Rm(t),e)for(t=0;t<e.length;t++)Rm(e[t])}}function I_(t,e){return t(e)}function U_(){}var ju=!1;function F_(t,e,n){if(ju)return t(e,n);ju=!0;try{return I_(t,e,n)}finally{ju=!1,(no!==null||io!==null)&&(U_(),N_())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=hu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var ff=!1;if(ji)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){ff=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{ff=!1}function hE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ha=!1,bc=null,Ac=!1,hf=null,pE={onError:function(t){ha=!0,bc=t}};function mE(t,e,n,i,r,s,o,a,l){ha=!1,bc=null,hE.apply(pE,arguments)}function gE(t,e,n,i,r,s,o,a,l){if(mE.apply(this,arguments),ha){if(ha){var c=bc;ha=!1,bc=null}else throw Error(ie(198));Ac||(Ac=!0,hf=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function O_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pm(t){if(ws(t)!==t)throw Error(ie(188))}function vE(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pm(r),t;if(s===i)return Pm(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function k_(t){return t=vE(t),t!==null?B_(t):null}function B_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B_(t);if(e!==null)return e;t=t.sibling}return null}var z_=An.unstable_scheduleCallback,Dm=An.unstable_cancelCallback,_E=An.unstable_shouldYield,xE=An.unstable_requestPaint,wt=An.unstable_now,yE=An.unstable_getCurrentPriorityLevel,Jh=An.unstable_ImmediatePriority,H_=An.unstable_UserBlockingPriority,Cc=An.unstable_NormalPriority,SE=An.unstable_LowPriority,V_=An.unstable_IdlePriority,cu=null,xi=null;function EE(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:TE,ME=Math.log,wE=Math.LN2;function TE(t){return t>>>=0,t===0?32:31-(ME(t)/wE|0)|0}var ml=64,gl=4194304;function ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ca(a):(s&=o,s!==0&&(i=ca(s)))}else o=n&~r,o!==0?i=ca(o):s!==0&&(i=ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function bE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=bE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G_(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function CE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function W_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j_,tp,X_,$_,q_,mf=!1,vl=[],Er=null,Mr=null,wr=null,Ta=new Map,ba=new Map,fr=[],RE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function $o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function PE(t,e,n,i,r){switch(e){case"focusin":return Er=$o(Er,t,e,n,i,r),!0;case"dragenter":return Mr=$o(Mr,t,e,n,i,r),!0;case"mouseover":return wr=$o(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,$o(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,$o(ba.get(s)||null,t,e,n,i,r)),!0}return!1}function Y_(t){var e=is(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=O_(n),e!==null){t.blockedOn=e,q_(t.priority,function(){X_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uf=i,n.target.dispatchEvent(i),uf=null}else return e=Za(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Nm(t,e,n){rc(t)&&n.delete(e)}function DE(){mf=!1,Er!==null&&rc(Er)&&(Er=null),Mr!==null&&rc(Mr)&&(Mr=null),wr!==null&&rc(wr)&&(wr=null),Ta.forEach(Nm),ba.forEach(Nm)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,DE)))}function Aa(t){function e(r){return qo(r,t)}if(0<vl.length){qo(vl[0],t);for(var n=1;n<vl.length;n++){var i=vl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&qo(Er,t),Mr!==null&&qo(Mr,t),wr!==null&&qo(wr,t),Ta.forEach(e),ba.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Y_(n),n.blockedOn===null&&fr.shift()}var ro=Ji.ReactCurrentBatchConfig,Pc=!0;function LE(t,e,n,i){var r=st,s=ro.transition;ro.transition=null;try{st=1,np(t,e,n,i)}finally{st=r,ro.transition=s}}function NE(t,e,n,i){var r=st,s=ro.transition;ro.transition=null;try{st=4,np(t,e,n,i)}finally{st=r,ro.transition=s}}function np(t,e,n,i){if(Pc){var r=gf(t,e,n,i);if(r===null)nd(t,e,i,Dc,n),Lm(t,i);else if(PE(r,t,e,n,i))i.stopPropagation();else if(Lm(t,i),e&4&&-1<RE.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&j_(s),s=gf(t,e,n,i),s===null&&nd(t,e,i,Dc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nd(t,e,i,null,n)}}var Dc=null;function gf(t,e,n,i){if(Dc=null,t=Zh(i),t=is(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=O_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function K_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case Jh:return 1;case H_:return 4;case Cc:case SE:return 16;case V_:return 536870912;default:return 16}default:return 16}}var yr=null,ip=null,sc=null;function Q_(){if(sc)return sc;var t,e=ip,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return sc=r.slice(t,1<i?1-i:void 0)}function oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Im(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:Im,this.isPropagationStopped=Im,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=Pn(Fo),Qa=xt({},Fo,{view:0,detail:0}),IE=Pn(Qa),$u,qu,Yo,uu=xt({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?($u=t.screenX-Yo.screenX,qu=t.screenY-Yo.screenY):qu=$u=0,Yo=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:qu}}),Um=Pn(uu),UE=xt({},uu,{dataTransfer:0}),FE=Pn(UE),OE=xt({},Qa,{relatedTarget:0}),Yu=Pn(OE),kE=xt({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),BE=Pn(kE),zE=xt({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HE=Pn(zE),VE=xt({},Fo,{data:0}),Fm=Pn(VE),GE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jE[t])?!!e[t]:!1}function sp(){return XE}var $E=xt({},Qa,{key:function(t){if(t.key){var e=GE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qE=Pn($E),YE=xt({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=Pn(YE),KE=xt({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),QE=Pn(KE),ZE=xt({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=Pn(ZE),eM=xt({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tM=Pn(eM),nM=[9,13,27,32],op=ji&&"CompositionEvent"in window,pa=null;ji&&"documentMode"in document&&(pa=document.documentMode);var iM=ji&&"TextEvent"in window&&!pa,Z_=ji&&(!op||pa&&8<pa&&11>=pa),km=" ",Bm=!1;function J_(t,e){switch(t){case"keyup":return nM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function rM(t,e){switch(t){case"compositionend":return e0(e);case"keypress":return e.which!==32?null:(Bm=!0,km);case"textInput":return t=e.data,t===km&&Bm?null:t;default:return null}}function sM(t,e){if(Gs)return t==="compositionend"||!op&&J_(t,e)?(t=Q_(),sc=ip=yr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Z_&&e.locale!=="ko"?null:e.data;default:return null}}var oM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oM[t.type]:e==="textarea"}function t0(t,e,n,i){L_(i),e=Lc(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,Ca=null;function aM(t){f0(t,0)}function du(t){var e=Xs(t);if(T_(e))return t}function lM(t,e){if(t==="change")return e}var n0=!1;if(ji){var Ku;if(ji){var Qu="oninput"in document;if(!Qu){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),Qu=typeof Hm.oninput=="function"}Ku=Qu}else Ku=!1;n0=Ku&&(!document.documentMode||9<document.documentMode)}function Vm(){ma&&(ma.detachEvent("onpropertychange",i0),Ca=ma=null)}function i0(t){if(t.propertyName==="value"&&du(Ca)){var e=[];t0(e,Ca,t,Zh(t)),F_(aM,e)}}function cM(t,e,n){t==="focusin"?(Vm(),ma=e,Ca=n,ma.attachEvent("onpropertychange",i0)):t==="focusout"&&Vm()}function uM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return du(Ca)}function dM(t,e){if(t==="click")return du(e)}function fM(t,e){if(t==="input"||t==="change")return du(e)}function hM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:hM;function Ra(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qd.call(e,r)||!li(t[r],e[r]))return!1}return!0}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,e){var n=Gm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gm(n)}}function r0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s0(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pM(t){var e=s0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r0(n.ownerDocument.documentElement,n)){if(i!==null&&ap(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wm(n,s);var o=Wm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mM=ji&&"documentMode"in document&&11>=document.documentMode,Ws=null,vf=null,ga=null,_f=!1;function jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||Ws==null||Ws!==Tc(i)||(i=Ws,"selectionStart"in i&&ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Ra(ga,i)||(ga=i,i=Lc(vf,"onSelect"),0<i.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var js={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Zu={},o0={};ji&&(o0=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function fu(t){if(Zu[t])return Zu[t];if(!js[t])return t;var e=js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in o0)return Zu[t]=e[n];return t}var a0=fu("animationend"),l0=fu("animationiteration"),c0=fu("animationstart"),u0=fu("transitionend"),d0=new Map,Xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){d0.set(t,e),Ms(e,[t])}for(var Ju=0;Ju<Xm.length;Ju++){var ed=Xm[Ju],gM=ed.toLowerCase(),vM=ed[0].toUpperCase()+ed.slice(1);Br(gM,"on"+vM)}Br(a0,"onAnimationEnd");Br(l0,"onAnimationIteration");Br(c0,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(u0,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function $m(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gE(i,e,void 0,t),t.currentTarget=null}function f0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$m(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$m(r,a,c),s=l}}}if(Ac)throw t=hf,Ac=!1,hf=null,t}function ft(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var i=t+"__bubble";n.has(i)||(h0(e,t,2,!1),n.add(i))}function td(t,e,n){var i=0;e&&(i|=4),h0(n,t,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[yl]){t[yl]=!0,y_.forEach(function(n){n!=="selectionchange"&&(_M.has(n)||td(n,!1,t),td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,td("selectionchange",!1,e))}}function h0(t,e,n,i){switch(K_(e)){case 1:var r=LE;break;case 4:r=NE;break;default:r=np}n=r.bind(null,e,n,t),r=void 0,!ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}F_(function(){var c=s,d=Zh(n),f=[];e:{var h=d0.get(t);if(h!==void 0){var m=rp,_=t;switch(t){case"keypress":if(oc(n)===0)break e;case"keydown":case"keyup":m=qE;break;case"focusin":_="focus",m=Yu;break;case"focusout":_="blur",m=Yu;break;case"beforeblur":case"afterblur":m=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=FE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=QE;break;case a0:case l0:case c0:m=BE;break;case u0:m=JE;break;case"scroll":m=IE;break;case"wheel":m=tM;break;case"copy":case"cut":case"paste":m=HE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Om}var g=(e&4)!==0,p=!g&&t==="scroll",u=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=wa(v,u),y!=null&&g.push(Da(v,y,x)))),p)break;v=v.return}0<g.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==uf&&(_=n.relatedTarget||n.fromElement)&&(is(_)||_[Xi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?is(_):null,_!==null&&(p=ws(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(g=Um,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=Om,y="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:Xs(m),x=_==null?h:Xs(_),h=new g(y,v+"leave",m,n,d),h.target=p,h.relatedTarget=x,y=null,is(d)===c&&(g=new g(u,v+"enter",_,n,d),g.target=x,g.relatedTarget=p,y=g),p=y,m&&_)t:{for(g=m,u=_,v=0,x=g;x;x=bs(x))v++;for(x=0,y=u;y;y=bs(y))x++;for(;0<v-x;)g=bs(g),v--;for(;0<x-v;)u=bs(u),x--;for(;v--;){if(g===u||u!==null&&g===u.alternate)break t;g=bs(g),u=bs(u)}g=null}else g=null;m!==null&&qm(f,h,m,g,!1),_!==null&&p!==null&&qm(f,p,_,g,!0)}}e:{if(h=c?Xs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var b=lM;else if(zm(h))if(n0)b=fM;else{b=uM;var A=cM}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=dM);if(b&&(b=b(t,c))){t0(f,b,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&sf(h,"number",h.value)}switch(A=c?Xs(c):window,t){case"focusin":(zm(A)||A.contentEditable==="true")&&(Ws=A,vf=c,ga=null);break;case"focusout":ga=vf=Ws=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,jm(f,n,d);break;case"selectionchange":if(mM)break;case"keydown":case"keyup":jm(f,n,d)}var T;if(op)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Gs?J_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Z_&&n.locale!=="ko"&&(Gs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Gs&&(T=Q_()):(yr=d,ip="value"in yr?yr.value:yr.textContent,Gs=!0)),A=Lc(c,P),0<A.length&&(P=new Fm(P,t,null,n,d),f.push({event:P,listeners:A}),T?P.data=T:(T=e0(n),T!==null&&(P.data=T)))),(T=iM?rM(t,n):sM(t,n))&&(c=Lc(c,"onBeforeInput"),0<c.length&&(d=new Fm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}f0(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(Da(t,s,r)),s=wa(t,e),s!=null&&i.push(Da(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=wa(n,s),l!=null&&o.unshift(Da(n,l,a))):r||(l=wa(n,s),l!=null&&o.push(Da(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xM=/\r\n?/g,yM=/\u0000|\uFFFD/g;function Ym(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(yM,"")}function Sl(t,e,n){if(e=Ym(e),Ym(t)!==e&&n)throw Error(ie(425))}function Nc(){}var xf=null,yf=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,SM=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,EM=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(MM)}:Ef;function MM(t){setTimeout(function(){throw t})}function id(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),vi="__reactFiber$"+Oo,La="__reactProps$"+Oo,Xi="__reactContainer$"+Oo,Mf="__reactEvents$"+Oo,wM="__reactListeners$"+Oo,TM="__reactHandles$"+Oo;function is(t){var e=t[vi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[vi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qm(t);t!==null;){if(n=t[vi])return n;t=Qm(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[vi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function hu(t){return t[La]||null}var wf=[],$s=-1;function zr(t){return{current:t}}function ht(t){0>$s||(t.current=wf[$s],wf[$s]=null,$s--)}function ut(t,e){$s++,wf[$s]=t.current,t.current=e}var Nr={},Qt=zr(Nr),fn=zr(!1),ps=Nr;function Eo(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Ic(){ht(fn),ht(Qt)}function Zm(t,e,n){if(Qt.current!==Nr)throw Error(ie(168));ut(Qt,e),ut(fn,n)}function p0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,cE(t)||"Unknown",r));return xt({},n,i)}function Uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ps=Qt.current,ut(Qt,t),ut(fn,fn.current),!0}function Jm(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=p0(t,e,ps),i.__reactInternalMemoizedMergedChildContext=t,ht(fn),ht(Qt),ut(Qt,t)):ht(fn),ut(fn,n)}var Oi=null,pu=!1,rd=!1;function m0(t){Oi===null?Oi=[t]:Oi.push(t)}function bM(t){pu=!0,m0(t)}function Hr(){if(!rd&&Oi!==null){rd=!0;var t=0,e=st;try{var n=Oi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,pu=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),z_(Jh,Hr),r}finally{st=e,rd=!1}}return null}var qs=[],Ys=0,Fc=null,Oc=0,Fn=[],On=0,ms=null,Bi=1,zi="";function Qr(t,e){qs[Ys++]=Oc,qs[Ys++]=Fc,Fc=t,Oc=e}function g0(t,e,n){Fn[On++]=Bi,Fn[On++]=zi,Fn[On++]=ms,ms=t;var i=Bi;t=zi;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-ri(e)+r|n<<r|i,zi=s+t}else Bi=1<<s|n<<r|i,zi=t}function lp(t){t.return!==null&&(Qr(t,1),g0(t,1,0))}function cp(t){for(;t===Fc;)Fc=qs[--Ys],qs[Ys]=null,Oc=qs[--Ys],qs[Ys]=null;for(;t===ms;)ms=Fn[--On],Fn[On]=null,zi=Fn[--On],Fn[On]=null,Bi=Fn[--On],Fn[On]=null}var Tn=null,wn=null,gt=!1,ti=null;function v0(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,wn=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Bi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,wn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(gt){var e=wn;if(e){var n=e;if(!eg(t,e)){if(Tf(t))throw Error(ie(418));e=Tr(n.nextSibling);var i=Tn;e&&eg(t,e)?v0(i,n):(t.flags=t.flags&-4097|2,gt=!1,Tn=t)}}else{if(Tf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,gt=!1,Tn=t}}}function tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function El(t){if(t!==Tn)return!1;if(!gt)return tg(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=wn)){if(Tf(t))throw _0(),Error(ie(418));for(;e;)v0(t,e),e=Tr(e.nextSibling)}if(tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=Tn?Tr(t.stateNode.nextSibling):null;return!0}function _0(){for(var t=wn;t;)t=Tr(t.nextSibling)}function Mo(){wn=Tn=null,gt=!1}function up(t){ti===null?ti=[t]:ti.push(t)}var AM=Ji.ReactCurrentBatchConfig;function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ng(t){var e=t._init;return e(t._payload)}function x0(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Rr(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,y){return v===null||v.tag!==6?(v=dd(x,u.mode,y),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,y){var b=x.type;return b===Vs?d(u,v,x.props.children,y,x.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ur&&ng(b)===v.type)?(y=r(v,x.props),y.ref=Ko(u,v,x),y.return=u,y):(y=hc(x.type,x.key,x.props,null,u.mode,y),y.ref=Ko(u,v,x),y.return=u,y)}function c(u,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=fd(x,u.mode,y),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,y,b){return v===null||v.tag!==7?(v=hs(x,u.mode,y,b),v.return=u,v):(v=r(v,x),v.return=u,v)}function f(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=dd(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case fl:return x=hc(v.type,v.key,v.props,null,u.mode,x),x.ref=Ko(u,null,v),x.return=u,x;case Hs:return v=fd(v,u.mode,x),v.return=u,v;case ur:var y=v._init;return f(u,y(v._payload),x)}if(la(v)||jo(v))return v=hs(v,u.mode,x,null),v.return=u,v;Ml(u,v)}return null}function h(u,v,x,y){var b=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:a(u,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:return x.key===b?l(u,v,x,y):null;case Hs:return x.key===b?c(u,v,x,y):null;case ur:return b=x._init,h(u,v,b(x._payload),y)}if(la(x)||jo(x))return b!==null?null:d(u,v,x,y,null);Ml(u,x)}return null}function m(u,v,x,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(v,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return u=u.get(y.key===null?x:y.key)||null,l(v,u,y,b);case Hs:return u=u.get(y.key===null?x:y.key)||null,c(v,u,y,b);case ur:var A=y._init;return m(u,v,x,A(y._payload),b)}if(la(y)||jo(y))return u=u.get(x)||null,d(v,u,y,b,null);Ml(v,y)}return null}function _(u,v,x,y){for(var b=null,A=null,T=v,P=v=0,M=null;T!==null&&P<x.length;P++){T.index>P?(M=T,T=null):M=T.sibling;var S=h(u,T,x[P],y);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(u,T),v=s(S,v,P),A===null?b=S:A.sibling=S,A=S,T=M}if(P===x.length)return n(u,T),gt&&Qr(u,P),b;if(T===null){for(;P<x.length;P++)T=f(u,x[P],y),T!==null&&(v=s(T,v,P),A===null?b=T:A.sibling=T,A=T);return gt&&Qr(u,P),b}for(T=i(u,T);P<x.length;P++)M=m(T,u,P,x[P],y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?P:M.key),v=s(M,v,P),A===null?b=M:A.sibling=M,A=M);return t&&T.forEach(function(L){return e(u,L)}),gt&&Qr(u,P),b}function g(u,v,x,y){var b=jo(x);if(typeof b!="function")throw Error(ie(150));if(x=b.call(x),x==null)throw Error(ie(151));for(var A=b=null,T=v,P=v=0,M=null,S=x.next();T!==null&&!S.done;P++,S=x.next()){T.index>P?(M=T,T=null):M=T.sibling;var L=h(u,T,S.value,y);if(L===null){T===null&&(T=M);break}t&&T&&L.alternate===null&&e(u,T),v=s(L,v,P),A===null?b=L:A.sibling=L,A=L,T=M}if(S.done)return n(u,T),gt&&Qr(u,P),b;if(T===null){for(;!S.done;P++,S=x.next())S=f(u,S.value,y),S!==null&&(v=s(S,v,P),A===null?b=S:A.sibling=S,A=S);return gt&&Qr(u,P),b}for(T=i(u,T);!S.done;P++,S=x.next())S=m(T,u,P,S.value,y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?P:S.key),v=s(S,v,P),A===null?b=S:A.sibling=S,A=S);return t&&T.forEach(function(B){return e(u,B)}),gt&&Qr(u,P),b}function p(u,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:e:{for(var b=x.key,A=v;A!==null;){if(A.key===b){if(b=x.type,b===Vs){if(A.tag===7){n(u,A.sibling),v=r(A,x.props.children),v.return=u,u=v;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ur&&ng(b)===A.type){n(u,A.sibling),v=r(A,x.props),v.ref=Ko(u,A,x),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===Vs?(v=hs(x.props.children,u.mode,y,x.key),v.return=u,u=v):(y=hc(x.type,x.key,x.props,null,u.mode,y),y.ref=Ko(u,v,x),y.return=u,u=y)}return o(u);case Hs:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=fd(x,u.mode,y),v.return=u,u=v}return o(u);case ur:return A=x._init,p(u,v,A(x._payload),y)}if(la(x))return _(u,v,x,y);if(jo(x))return g(u,v,x,y);Ml(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=dd(x,u.mode,y),v.return=u,u=v),o(u)):n(u,v)}return p}var wo=x0(!0),y0=x0(!1),kc=zr(null),Bc=null,Ks=null,dp=null;function fp(){dp=Ks=Bc=null}function hp(t){var e=kc.current;ht(kc),t._currentValue=e}function Af(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){Bc=t,dp=Ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Ks===null){if(Bc===null)throw Error(ie(308));Ks=t,Bc.dependencies={lanes:0,firstContext:t}}else Ks=Ks.next=t;return e}var rs=null;function pp(t){rs===null?rs=[t]:rs.push(t)}function S0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pp(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,pp(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ep(t,n)}}function ig(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,g=a;switch(h=e,m=n,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=xt({},f,h);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=f}}function rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ja={},yi=zr(Ja),Na=zr(Ja),Ia=zr(Ja);function ss(t){if(t===Ja)throw Error(ie(174));return t}function gp(t,e){switch(ut(Ia,e),ut(Na,t),ut(yi,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}ht(yi),ut(yi,e)}function To(){ht(yi),ht(Na),ht(Ia)}function M0(t){ss(Ia.current);var e=ss(yi.current),n=af(e,t.type);e!==n&&(ut(Na,t),ut(yi,n))}function vp(t){Na.current===t&&(ht(yi),ht(Na))}var vt=zr(0);function Hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sd=[];function _p(){for(var t=0;t<sd.length;t++)sd[t]._workInProgressVersionPrimary=null;sd.length=0}var lc=Ji.ReactCurrentDispatcher,od=Ji.ReactCurrentBatchConfig,gs=0,_t=null,Dt=null,Ft=null,Vc=!1,va=!1,Ua=0,CM=0;function jt(){throw Error(ie(321))}function xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function yp(t,e,n,i,r,s){if(gs=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lc.current=t===null||t.memoizedState===null?LM:NM,t=n(i,r),va){s=0;do{if(va=!1,Ua=0,25<=s)throw Error(ie(301));s+=1,Ft=Dt=null,e.updateQueue=null,lc.current=IM,t=n(i,r)}while(va)}if(lc.current=Gc,e=Dt!==null&&Dt.next!==null,gs=0,Ft=Dt=_t=null,Vc=!1,e)throw Error(ie(300));return t}function Sp(){var t=Ua!==0;return Ua=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?_t.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Gn(){if(Dt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Ft===null?_t.memoizedState:Ft.next;if(e!==null)Ft=e,Dt=t;else{if(t===null)throw Error(ie(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Ft===null?_t.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Fa(t,e){return typeof e=="function"?e(t):e}function ad(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((gs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=d,vs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,vs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ld(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function w0(){}function T0(t,e){var n=_t,i=Gn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Ep(C0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Oa(9,A0.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ie(349));gs&30||b0(n,e,r)}return r}function b0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A0(t,e,n,i){e.value=n,e.getSnapshot=i,R0(e)&&P0(t)}function C0(t,e,n){return n(function(){R0(e)&&P0(t)})}function R0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function P0(t){var e=$i(t,1);e!==null&&si(e,t,1,-1)}function sg(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=DM.bind(null,_t,t),[e.memoizedState,t]}function Oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function D0(){return Gn().memoizedState}function cc(t,e,n,i){var r=fi();_t.flags|=t,r.memoizedState=Oa(1|e,n,void 0,i===void 0?null:i)}function mu(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&xp(i,o.deps)){r.memoizedState=Oa(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Oa(1|e,n,s,i)}function og(t,e){return cc(8390656,8,t,e)}function Ep(t,e){return mu(2048,8,t,e)}function L0(t,e){return mu(4,2,t,e)}function N0(t,e){return mu(4,4,t,e)}function I0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function U0(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,I0.bind(null,e,t),n)}function Mp(){}function F0(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function O0(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k0(t,e,n){return gs&21?(li(n,e)||(n=G_(),_t.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function RM(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=od.transition;od.transition={};try{t(!1),e()}finally{st=n,od.transition=i}}function B0(){return Gn().memoizedState}function PM(t,e,n){var i=Cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},z0(t))H0(e,n);else if(n=S0(t,e,n,i),n!==null){var r=rn();si(n,t,i,r),V0(n,e,i)}}function DM(t,e,n){var i=Cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(z0(t))H0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,pp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=S0(t,e,r,i),n!==null&&(r=rn(),si(n,t,i,r),V0(n,e,i))}}function z0(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function H0(t,e){va=Vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ep(t,n)}}var Gc={readContext:Vn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},LM={readContext:Vn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cc(4194308,4,I0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return cc(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=PM.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:sg,useDebugValue:Mp,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=sg(!1),e=t[0];return t=RM.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=fi();if(gt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ot===null)throw Error(ie(349));gs&30||b0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,og(C0.bind(null,i,s,t),[t]),i.flags|=2048,Oa(9,A0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Ot.identifierPrefix;if(gt){var n=zi,i=Bi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NM={readContext:Vn,useCallback:F0,useContext:Vn,useEffect:Ep,useImperativeHandle:U0,useInsertionEffect:L0,useLayoutEffect:N0,useMemo:O0,useReducer:ad,useRef:D0,useState:function(){return ad(Fa)},useDebugValue:Mp,useDeferredValue:function(t){var e=Gn();return k0(e,Dt.memoizedState,t)},useTransition:function(){var t=ad(Fa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:T0,useId:B0,unstable_isNewReconciler:!1},IM={readContext:Vn,useCallback:F0,useContext:Vn,useEffect:Ep,useImperativeHandle:U0,useInsertionEffect:L0,useLayoutEffect:N0,useMemo:O0,useReducer:ld,useRef:D0,useState:function(){return ld(Fa)},useDebugValue:Mp,useDeferredValue:function(t){var e=Gn();return Dt===null?e.memoizedState=t:k0(e,Dt.memoizedState,t)},useTransition:function(){var t=ld(Fa)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:w0,useSyncExternalStore:T0,useId:B0,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Cr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(si(e,t,r,i),ac(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Cr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(si(e,t,r,i),ac(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=Cr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(si(e,t,i,n),ac(e,t,i))}};function ag(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function G0(t,e,n){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=hn(e)?ps:Qt.current,i=e.contextTypes,s=(i=i!=null)?Eo(t,r):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=hn(e)?ps:Qt.current,r.context=Eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&gu.enqueueReplaceState(r,r.state,null),zc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e){try{var n="",i=e;do n+=lE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UM=typeof WeakMap=="function"?WeakMap:Map;function W0(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jc||(jc=!0,zf=i),Pf(t,e)},n}function j0(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pf(t,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new UM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=YM.bind(null,t,e,n),e.then(t,t))}function ug(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var FM=Ji.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?y0(e,null,n,i):wo(e,t.child,n,i)}function fg(t,e,n,i,r){n=n.render;var s=e.ref;return so(e,r),i=yp(t,e,n,i,s,r),n=Sp(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&n&&lp(e),e.flags|=1,tn(t,e,i,r),e.child)}function hg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,X0(t,e,s,i,r)):(t=hc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function X0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return Df(t,e,n,i,r)}function $0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Zs,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Zs,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Zs,En),En|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Zs,En),En|=i;return tn(t,e,r,n),e.child}function q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Df(t,e,n,i,r){var s=hn(n)?ps:Qt.current;return s=Eo(e,s),so(e,r),n=yp(t,e,n,i,s,r),i=Sp(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&i&&lp(e),e.flags|=1,tn(t,e,n,r),e.child)}function pg(t,e,n,i,r){if(hn(n)){var s=!0;Uc(e)}else s=!1;if(so(e,r),e.stateNode===null)uc(t,e),G0(e,n,i),Rf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=hn(n)?ps:Qt.current,c=Eo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&lg(e,o,i,c),dr=!1;var h=e.memoizedState;o.state=h,zc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||fn.current||dr?(typeof d=="function"&&(Cf(e,n,d,i),l=e.memoizedState),(a=dr||ag(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,E0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Qn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=hn(n)?ps:Qt.current,l=Eo(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&lg(e,o,i,l),dr=!1,h=e.memoizedState,o.state=h,zc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||fn.current||dr?(typeof m=="function"&&(Cf(e,n,m,i),_=e.memoizedState),(c=dr||ag(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Lf(t,e,n,i,s,r)}function Lf(t,e,n,i,r,s){q0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Jm(e,n,!1),qi(t,e,s);i=e.stateNode,FM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,s),e.child=wo(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&Jm(e,n,!0),e.child}function Y0(t){var e=t.stateNode;e.pendingContext?Zm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zm(t,e.context,!1),gp(t,e.containerInfo)}function mg(t,e,n,i,r){return Mo(),up(r),e.flags|=256,tn(t,e,n,i),e.child}var Nf={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function K0(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,i,0,null),t=hs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=If(n),e.memoizedState=Nf,t):wp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return OM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=hs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nf,i}return s=t.child,t=s.sibling,i=Rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wp(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,i){return i!==null&&up(i),wo(e,t.child,null,n),t=wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cd(Error(ie(422))),wl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xu({mode:"visible",children:i.children},r,0,null),s=hs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=If(o),e.memoizedState=Nf,s);if(!(e.mode&1))return wl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=cd(s,i,void 0),wl(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),si(i,t,r,-1))}return Pp(),i=cd(Error(ie(421))),wl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=KM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=Tr(r.nextSibling),Tn=e,gt=!0,ti=null,t!==null&&(Fn[On++]=Bi,Fn[On++]=zi,Fn[On++]=ms,Bi=t.id,zi=t.overflow,ms=e),e=wp(e,i.children),e.flags|=4096,e)}function gg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Af(t.return,e,n)}function ud(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,n,e);else if(t.tag===19)gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ud(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ud(e,!0,n,null,s);break;case"together":ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kM(t,e,n){switch(e.tag){case 3:Y0(e),Mo();break;case 5:M0(e);break;case 1:hn(e.type)&&Uc(e);break;case 4:gp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?K0(t,e,n):(ut(vt,vt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,$0(t,e,n)}return qi(t,e,n)}var Z0,Uf,J0,ex;Z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};J0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ss(yi.current);var s=null;switch(n){case"input":r=nf(t,r),i=nf(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=of(t,r),i=of(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nc)}lf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ex=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qo(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function BM(t,e,n){var i=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&Ic(),Xt(e),null;case 3:return i=e.stateNode,To(),ht(fn),ht(Qt),_p(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(El(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Gf(ti),ti=null))),Uf(t,e),Xt(e),null;case 5:vp(e);var r=ss(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)J0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Xt(e),null}if(t=ss(yi.current),El(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[La]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<ua.length;r++)ft(ua[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Tm(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Am(i,s),ft("invalid",i)}lf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",""+a]):Ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":hl(i),bm(i,s,!0);break;case"textarea":hl(i),Cm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[vi]=e,t[La]=i,Z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<ua.length;r++)ft(ua[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Tm(t,i),r=nf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Am(t,i),r=of(t,i),ft("invalid",t);break;default:r=i}lf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?D_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&R_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&qh(t,s,l,o))}switch(n){case"input":hl(t),bm(t,i,!1);break;case"textarea":hl(t),Cm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?to(t,!!i.multiple,s,!1):i.defaultValue!=null&&to(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)ex(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ss(Ia.current),ss(yi.current),El(e)){if(i=e.stateNode,n=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return Xt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&wn!==null&&e.mode&1&&!(e.flags&128))_0(),Mo(),e.flags|=98560,s=!1;else if(s=El(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[vi]=e}else Mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else ti!==null&&(Gf(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):Pp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return To(),Uf(t,e),t===null&&Pa(e.stateNode.containerInfo),Xt(e),null;case 10:return hp(e.type._context),Xt(e),null;case 17:return hn(e.type)&&Ic(),Xt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qo(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hc(t),o!==null){for(e.flags|=128,Qo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Ao&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Xt(e),null}else 2*wt()-s.renderingStartTime>Ao&&n!==1073741824&&(e.flags|=128,i=!0,Qo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Rp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function zM(t,e){switch(cp(e),e.tag){case 1:return hn(e.type)&&Ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return To(),ht(fn),ht(Qt),_p(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vp(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return To(),null;case 10:return hp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var Tl=!1,Kt=!1,HM=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var vg=!1;function VM(t,e){if(xf=Pc,t=s0(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},Pc=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?g:Qn(e.type,g),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){Mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=vg,vg=!1,_}function _a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ff(e,n,s)}r=r.next}while(r!==i)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tx(t){var e=t.alternate;e!==null&&(t.alternate=null,tx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vi],delete e[La],delete e[Mf],delete e[wM],delete e[TM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nx(t){return t.tag===5||t.tag===3||t.tag===4}function _g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var Bt=null,ei=!1;function er(t,e,n){for(n=n.child;n!==null;)ix(t,e,n),n=n.sibling}function ix(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:Kt||Qs(n,e);case 6:var i=Bt,r=ei;Bt=null,er(t,e,n),Bt=i,ei=r,Bt!==null&&(ei?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(ei?(t=Bt,n=n.stateNode,t.nodeType===8?id(t.parentNode,n):t.nodeType===1&&id(t,n),Aa(t)):id(Bt,n.stateNode));break;case 4:i=Bt,r=ei,Bt=n.stateNode.containerInfo,ei=!0,er(t,e,n),Bt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!Kt&&(Qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,er(t,e,n),Kt=i):er(t,e,n);break;default:er(t,e,n)}}function xg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HM),e.forEach(function(i){var r=QM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,ei=!1;break e;case 3:Bt=a.stateNode.containerInfo,ei=!0;break e;case 4:Bt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(Bt===null)throw Error(ie(160));ix(s,o,r),Bt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rx(e,t),e=e.sibling}function rx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),di(t),i&4){try{_a(3,t,t.return),vu(3,t)}catch(g){Mt(t,t.return,g)}try{_a(5,t,t.return)}catch(g){Mt(t,t.return,g)}}break;case 1:$n(e,t),di(t),i&512&&n!==null&&Qs(n,n.return);break;case 5:if($n(e,t),di(t),i&512&&n!==null&&Qs(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(g){Mt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&b_(r,s),cf(a,o);var c=cf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?D_(r,f):d==="dangerouslySetInnerHTML"?R_(r,f):d==="children"?Ma(r,f):qh(r,d,f,c)}switch(a){case"input":rf(r,s);break;case"textarea":A_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?to(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[La]=s}catch(g){Mt(t,t.return,g)}}break;case 6:if($n(e,t),di(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Mt(t,t.return,g)}}break;case 3:if($n(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(g){Mt(t,t.return,g)}break;case 4:$n(e,t),di(t);break;case 13:$n(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ap=wt())),i&4&&xg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||d,$n(e,t),Kt=c):$n(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:_a(4,h,h.return);break;case 1:Qs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Mt(i,n,g)}}break;case 5:Qs(h,h.return);break;case 22:if(h.memoizedState!==null){Sg(f);continue}}m!==null?(m.return=h,ge=m):Sg(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=P_("display",o))}catch(g){Mt(t,t.return,g)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Mt(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),di(t),i&4&&xg(t);break;case 21:break;default:$n(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nx(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=_g(t);Bf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_g(t);kf(t,a,o);break;default:throw Error(ie(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GM(t,e,n){ge=t,sx(t)}function sx(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Tl;var c=Kt;if(Tl=o,(Kt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Eg(r):l!==null?(l.return=o,ge=l):Eg(r);for(;s!==null;)ge=s,sx(s),s=s.sibling;ge=r,Tl=a,Kt=c}yg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):yg(t)}}function yg(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||vu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Kt||e.flags&512&&Of(e)}catch(h){Mt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Sg(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Eg(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Of(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var WM=Math.ceil,Wc=Ji.ReactCurrentDispatcher,Tp=Ji.ReactCurrentOwner,Hn=Ji.ReactCurrentBatchConfig,Ke=0,Ot=null,Pt=null,zt=0,En=0,Zs=zr(0),Lt=0,ka=null,vs=0,_u=0,bp=0,xa=null,un=null,Ap=0,Ao=1/0,Fi=null,jc=!1,zf=null,Ar=null,bl=!1,Sr=null,Xc=0,ya=0,Hf=null,dc=-1,fc=0;function rn(){return Ke&6?wt():dc!==-1?dc:dc=wt()}function Cr(t){return t.mode&1?Ke&2&&zt!==0?zt&-zt:AM.transition!==null?(fc===0&&(fc=G_()),fc):(t=st,t!==0||(t=window.event,t=t===void 0?16:K_(t.type)),t):1}function si(t,e,n,i){if(50<ya)throw ya=0,Hf=null,Error(ie(185));Ka(t,n,i),(!(Ke&2)||t!==Ot)&&(t===Ot&&(!(Ke&2)&&(_u|=n),Lt===4&&hr(t,zt)),pn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ao=wt()+500,pu&&Hr()))}function pn(t,e){var n=t.callbackNode;AE(t,e);var i=Rc(t,t===Ot?zt:0);if(i===0)n!==null&&Dm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dm(n),e===1)t.tag===0?bM(Mg.bind(null,t)):m0(Mg.bind(null,t)),EM(function(){!(Ke&6)&&Hr()}),n=null;else{switch(W_(i)){case 1:n=Jh;break;case 4:n=H_;break;case 16:n=Cc;break;case 536870912:n=V_;break;default:n=Cc}n=hx(n,ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ox(t,e){if(dc=-1,fc=0,Ke&6)throw Error(ie(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var i=Rc(t,t===Ot?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=Ke;Ke|=2;var s=lx();(Ot!==t||zt!==e)&&(Fi=null,Ao=wt()+500,fs(t,e));do try{$M();break}catch(a){ax(t,a)}while(!0);fp(),Wc.current=s,Ke=r,Pt!==null?e=0:(Ot=null,zt=0,e=Lt)}if(e!==0){if(e===2&&(r=pf(t),r!==0&&(i=r,e=Vf(t,r))),e===1)throw n=ka,fs(t,0),hr(t,i),pn(t,wt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!jM(r)&&(e=$c(t,i),e===2&&(s=pf(t),s!==0&&(i=s,e=Vf(t,s))),e===1))throw n=ka,fs(t,0),hr(t,i),pn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Zr(t,un,Fi);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Ap+500-wt(),10<e)){if(Rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ef(Zr.bind(null,t,un,Fi),e);break}Zr(t,un,Fi);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*WM(i/1960))-i,10<i){t.timeoutHandle=Ef(Zr.bind(null,t,un,Fi),i);break}Zr(t,un,Fi);break;case 5:Zr(t,un,Fi);break;default:throw Error(ie(329))}}}return pn(t,wt()),t.callbackNode===n?ox.bind(null,t):null}function Vf(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(fs(t,e).flags|=256),t=$c(t,e),t!==2&&(e=un,un=n,e!==null&&Gf(e)),t}function Gf(t){un===null?un=t:un.push.apply(un,t)}function jM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~bp,e&=~_u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function Mg(t){if(Ke&6)throw Error(ie(327));oo();var e=Rc(t,0);if(!(e&1))return pn(t,wt()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=pf(t);i!==0&&(e=i,n=Vf(t,i))}if(n===1)throw n=ka,fs(t,0),hr(t,e),pn(t,wt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,un,Fi),pn(t,wt()),null}function Cp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ao=wt()+500,pu&&Hr())}}function _s(t){Sr!==null&&Sr.tag===0&&!(Ke&6)&&oo();var e=Ke;Ke|=1;var n=Hn.transition,i=st;try{if(Hn.transition=null,st=1,t)return t()}finally{st=i,Hn.transition=n,Ke=e,!(Ke&6)&&Hr()}}function Rp(){En=Zs.current,ht(Zs)}function fs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SM(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(cp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ic();break;case 3:To(),ht(fn),ht(Qt),_p();break;case 5:vp(i);break;case 4:To();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:hp(i.type._context);break;case 22:case 23:Rp()}n=n.return}if(Ot=t,Pt=t=Rr(t.current,null),zt=En=e,Lt=0,ka=null,bp=_u=vs=0,un=xa=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rs=null}return t}function ax(t,e){do{var n=Pt;try{if(fp(),lc.current=Gc,Vc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vc=!1}if(gs=0,Ft=Dt=_t=null,va=!1,Ua=0,Tp.current=null,n===null||n.return===null){Lt=1,ka=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ug(o);if(m!==null){m.flags&=-257,dg(m,o,a,s,e),m.mode&1&&cg(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){cg(s,c,e),Pp();break e}l=Error(ie(426))}}else if(gt&&a.mode&1){var p=ug(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),dg(p,o,a,s,e),up(bo(l,a));break e}}s=l=bo(l,a),Lt!==4&&(Lt=2),xa===null?xa=[s]:xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=W0(s,l,e);ig(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ar===null||!Ar.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=j0(s,a,e);ig(s,y);break e}}s=s.return}while(s!==null)}ux(n)}catch(b){e=b,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function lx(){var t=Wc.current;return Wc.current=Gc,t===null?Gc:t}function Pp(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ot===null||!(vs&268435455)&&!(_u&268435455)||hr(Ot,zt)}function $c(t,e){var n=Ke;Ke|=2;var i=lx();(Ot!==t||zt!==e)&&(Fi=null,fs(t,e));do try{XM();break}catch(r){ax(t,r)}while(!0);if(fp(),Ke=n,Wc.current=i,Pt!==null)throw Error(ie(261));return Ot=null,zt=0,Lt}function XM(){for(;Pt!==null;)cx(Pt)}function $M(){for(;Pt!==null&&!_E();)cx(Pt)}function cx(t){var e=fx(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?ux(t):Pt=e,Tp.current=null}function ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zM(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Pt=null;return}}else if(n=BM(n,e,En),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Zr(t,e,n){var i=st,r=Hn.transition;try{Hn.transition=null,st=1,qM(t,e,n,i)}finally{Hn.transition=r,st=i}return null}function qM(t,e,n,i){do oo();while(Sr!==null);if(Ke&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CE(t,s),t===Ot&&(Pt=Ot=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,hx(Cc,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=st;st=1;var a=Ke;Ke|=4,Tp.current=null,VM(t,n),rx(n,t),pM(yf),Pc=!!xf,yf=xf=null,t.current=n,GM(n),xE(),Ke=a,st=o,Hn.transition=s}else t.current=n;if(bl&&(bl=!1,Sr=t,Xc=r),s=t.pendingLanes,s===0&&(Ar=null),EE(n.stateNode),pn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jc)throw jc=!1,t=zf,zf=null,t;return Xc&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===Hf?ya++:(ya=0,Hf=t):ya=0,Hr(),null}function oo(){if(Sr!==null){var t=W_(Xc),e=Hn.transition,n=st;try{if(Hn.transition=null,st=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,Xc=0,Ke&6)throw Error(ie(331));var r=Ke;for(Ke|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:_a(8,d,s)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,m=d.return;if(tx(d),d===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var p=g.sibling;g.sibling=null,g=p}while(g!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var v=t.current;for(ge=v;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vu(9,a)}}catch(b){Mt(a,a.return,b)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(Ke=r,Hr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(cu,t)}catch{}i=!0}return i}finally{st=n,Hn.transition=e}}return!1}function wg(t,e,n){e=bo(n,e),e=W0(t,e,1),t=br(t,e,1),e=rn(),t!==null&&(Ka(t,1,e),pn(t,e))}function Mt(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ar===null||!Ar.has(i))){t=bo(n,t),t=j0(e,t,1),e=br(e,t,1),t=rn(),e!==null&&(Ka(e,1,t),pn(e,t));break}}e=e.return}}function YM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(zt&n)===n&&(Lt===4||Lt===3&&(zt&130023424)===zt&&500>wt()-Ap?fs(t,0):bp|=n),pn(t,e)}function dx(t,e){e===0&&(t.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var n=rn();t=$i(t,e),t!==null&&(Ka(t,e,n),pn(t,n))}function KM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),dx(t,n)}function QM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),dx(t,n)}var fx;fx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,kM(t,e,n);dn=!!(t.flags&131072)}else dn=!1,gt&&e.flags&1048576&&g0(e,Oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uc(t,e),t=e.pendingProps;var r=Eo(e,Qt.current);so(e,n),r=yp(null,e,i,t,r,n);var s=Sp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mp(e),r.updater=gu,e.stateNode=r,r._reactInternals=e,Rf(e,i,t,n),e=Lf(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&lp(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(uc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JM(i),t=Qn(i,t),r){case 0:e=Df(null,e,i,t,n);break e;case 1:e=pg(null,e,i,t,n);break e;case 11:e=fg(null,e,i,t,n);break e;case 14:e=hg(null,e,i,Qn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Df(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),pg(t,e,i,r,n);case 3:e:{if(Y0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,E0(t,e),zc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bo(Error(ie(423)),e),e=mg(t,e,i,n,r);break e}else if(i!==r){r=bo(Error(ie(424)),e),e=mg(t,e,i,n,r);break e}else for(wn=Tr(e.stateNode.containerInfo.firstChild),Tn=e,gt=!0,ti=null,n=y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),i===r){e=qi(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return M0(e),t===null&&bf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sf(i,r)?o=null:s!==null&&Sf(i,s)&&(e.flags|=32),q0(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return K0(t,e,n);case 4:return gp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=wo(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),fg(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(kc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!fn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Af(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Af(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=Vn(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),hg(t,e,i,r,n);case 15:return X0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),uc(t,e),e.tag=1,hn(i)?(t=!0,Uc(e)):t=!1,so(e,n),G0(e,i,r),Rf(e,i,r,n),Lf(null,e,i,!0,t,n);case 19:return Q0(t,e,n);case 22:return $0(t,e,n)}throw Error(ie(156,e.tag))};function hx(t,e){return z_(t,e)}function ZM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new ZM(t,e,n,i)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JM(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kh)return 11;if(t===Qh)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return hs(n.children,r,s,e);case Yh:o=8,r|=8;break;case Zd:return t=Bn(12,n,e,r|2),t.elementType=Zd,t.lanes=s,t;case Jd:return t=Bn(13,n,e,r),t.elementType=Jd,t.lanes=s,t;case ef:return t=Bn(19,n,e,r),t.elementType=ef,t.lanes=s,t;case M_:return xu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case S_:o=10;break e;case E_:o=9;break e;case Kh:o=11;break e;case Qh:o=14;break e;case ur:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hs(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function xu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=M_,t.lanes=n,t.stateNode={isHidden:!1},t}function dd(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function fd(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ew(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,i,r,s,o,a,l){return t=new ew(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function tw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function px(t){if(!t)return Nr;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(hn(n))return p0(t,n,e)}return e}function mx(t,e,n,i,r,s,o,a,l){return t=Lp(n,i,!0,t,r,s,o,a,l),t.context=px(null),n=t.current,i=rn(),r=Cr(n),s=Gi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ka(t,r,i),pn(t,i),t}function yu(t,e,n,i){var r=e.current,s=rn(),o=Cr(r);return n=px(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(si(t,r,o,s),ac(t,r,o)),o}function qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function nw(){return null}var gx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ip(t){this._internalRoot=t}Su.prototype.render=Ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));yu(t,e,null,null)};Su.prototype.unmount=Ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){yu(null,t,null,null)}),e[Xi]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=$_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Y_(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bg(){}function iw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=qc(o);s.call(c)}}var o=mx(e,i,t,0,null,!1,!1,"",bg);return t._reactRootContainer=o,t[Xi]=o.current,Pa(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=qc(l);a.call(c)}}var l=Lp(t,0,!1,null,null,!1,!1,"",bg);return t._reactRootContainer=l,t[Xi]=l.current,Pa(t.nodeType===8?t.parentNode:t),_s(function(){yu(e,l,n,i)}),l}function Mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qc(o);a.call(l)}}yu(e,o,t,r)}else o=iw(n,e,t,r,i);return qc(o)}j_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ca(e.pendingLanes);n!==0&&(ep(e,n|1),pn(e,wt()),!(Ke&6)&&(Ao=wt()+500,Hr()))}break;case 13:_s(function(){var i=$i(t,1);if(i!==null){var r=rn();si(i,t,1,r)}}),Np(t,1)}};tp=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=rn();si(e,t,134217728,n)}Np(t,134217728)}};X_=function(t){if(t.tag===13){var e=Cr(t),n=$i(t,e);if(n!==null){var i=rn();si(n,t,e,i)}Np(t,e)}};$_=function(){return st};q_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};df=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hu(i);if(!r)throw Error(ie(90));T_(i),rf(i,r)}}}break;case"textarea":A_(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};I_=Cp;U_=_s;var rw={usingClientEntryPoint:!1,Events:[Za,Xs,hu,L_,N_,Cp]},Zo={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sw={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=k_(t),t===null?null:t.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{cu=Al.inject(sw),xi=Al}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(ie(200));return tw(t,e,null,n)};Rn.createRoot=function(t,e){if(!Up(t))throw Error(ie(299));var n=!1,i="",r=gx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Ip(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=k_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return _s(t)};Rn.hydrate=function(t,e,n){if(!Eu(e))throw Error(ie(200));return Mu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=gx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mx(e,null,t,1,n??null,r,!1,s,o),t[Xi]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Su(e)};Rn.render=function(t,e,n){if(!Eu(e))throw Error(ie(200));return Mu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(ie(40));return t._reactRootContainer?(_s(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Cp;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Eu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Mu(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function vx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vx)}catch(t){console.error(t)}}vx(),v_.exports=Rn;var el=v_.exports;const ow=s_(el);var _x,Ag=el;_x=Ag.createRoot,Ag.hydrateRoot;var wu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Tu=typeof window>"u"||"Deno"in globalThis;function Zn(){}function aw(t,e){return typeof t=="function"?t(e):t}function lw(t){return typeof t=="number"&&t>=0&&t!==1/0}function cw(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Cg(t,e){return typeof t=="function"?t(e):t}function uw(t,e){return typeof t=="function"?t(e):t}function Rg(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Fp(o,e.options))return!1}else if(!za(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function Pg(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(Ba(e.options.mutationKey)!==Ba(s))return!1}else if(!za(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Fp(t,e){return((e==null?void 0:e.queryKeyHashFn)||Ba)(t)}function Ba(t){return JSON.stringify(t,(e,n)=>Wf(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function za(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!za(t[n],e[n])):!1}function xx(t,e){if(t===e)return t;const n=Dg(t)&&Dg(e);if(n||Wf(t)&&Wf(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const d=n?c:s[c];(!n&&i.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=xx(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return r===o&&l===r?t:a}return e}function Dg(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Wf(t){if(!Lg(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Lg(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Lg(t){return Object.prototype.toString.call(t)==="[object Object]"}function dw(t){return new Promise(e=>{setTimeout(e,t)})}function fw(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?xx(t,e):e}function hw(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function pw(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Op=Symbol();function yx(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Op?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ls,mr,fo,Qv,mw=(Qv=class extends wu{constructor(){super();nt(this,ls);nt(this,mr);nt(this,fo);ze(this,fo,e=>{if(!Tu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){ee(this,mr)||this.setEventListener(ee(this,fo))}onUnsubscribe(){var e;this.hasListeners()||((e=ee(this,mr))==null||e.call(this),ze(this,mr,void 0))}setEventListener(e){var n;ze(this,fo,e),(n=ee(this,mr))==null||n.call(this),ze(this,mr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){ee(this,ls)!==e&&(ze(this,ls,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof ee(this,ls)=="boolean"?ee(this,ls):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ls=new WeakMap,mr=new WeakMap,fo=new WeakMap,Qv),Sx=new mw,ho,gr,po,Zv,gw=(Zv=class extends wu{constructor(){super();nt(this,ho,!0);nt(this,gr);nt(this,po);ze(this,po,e=>{if(!Tu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){ee(this,gr)||this.setEventListener(ee(this,po))}onUnsubscribe(){var e;this.hasListeners()||((e=ee(this,gr))==null||e.call(this),ze(this,gr,void 0))}setEventListener(e){var n;ze(this,po,e),(n=ee(this,gr))==null||n.call(this),ze(this,gr,e(this.setOnline.bind(this)))}setOnline(e){ee(this,ho)!==e&&(ze(this,ho,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return ee(this,ho)}},ho=new WeakMap,gr=new WeakMap,po=new WeakMap,Zv),Yc=new gw;function vw(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function _w(t){return Math.min(1e3*2**t,3e4)}function Ex(t){return(t??"online")==="online"?Yc.isOnline():!0}var Mx=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function hd(t){return t instanceof Mx}function wx(t){let e=!1,n=0,i=!1,r;const s=vw(),o=g=>{var p;i||(h(new Mx(g)),(p=t.abort)==null||p.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Sx.isFocused()&&(t.networkMode==="always"||Yc.isOnline())&&t.canRun(),d=()=>Ex(t.networkMode)&&t.canRun(),f=g=>{var p;i||(i=!0,(p=t.onSuccess)==null||p.call(t,g),r==null||r(),s.resolve(g))},h=g=>{var p;i||(i=!0,(p=t.onError)==null||p.call(t,g),r==null||r(),s.reject(g))},m=()=>new Promise(g=>{var p;r=u=>{(i||c())&&g(u)},(p=t.onPause)==null||p.call(t)}).then(()=>{var g;r=void 0,i||(g=t.onContinue)==null||g.call(t)}),_=()=>{if(i)return;let g;const p=n===0?t.initialPromise:void 0;try{g=p??t.fn()}catch(u){g=Promise.reject(u)}Promise.resolve(g).then(f).catch(u=>{var A;if(i)return;const v=t.retry??(Tu?0:3),x=t.retryDelay??_w,y=typeof x=="function"?x(n,u):x,b=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,u);if(e||!b){h(u);return}n++,(A=t.onFail)==null||A.call(t,n,u),dw(y).then(()=>c()?void 0:m()).then(()=>{e?h(u):_()})})};return{promise:s,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?_():m().then(_),s)}}function xw(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var nn=xw(),cs,Jv,Tx=(Jv=class{constructor(){nt(this,cs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),lw(this.gcTime)&&ze(this,cs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Tu?1/0:5*60*1e3))}clearGcTimeout(){ee(this,cs)&&(clearTimeout(ee(this,cs)),ze(this,cs,void 0))}},cs=new WeakMap,Jv),mo,go,In,Yt,$a,us,Jn,Ii,e_,yw=(e_=class extends Tx{constructor(e){super();nt(this,Jn);nt(this,mo);nt(this,go);nt(this,In);nt(this,Yt);nt(this,$a);nt(this,us);ze(this,us,!1),ze(this,$a,e.defaultOptions),this.setOptions(e.options),this.observers=[],ze(this,In,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ze(this,mo,Ew(this.options)),this.state=e.state??ee(this,mo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=ee(this,Yt))==null?void 0:e.promise}setOptions(e){this.options={...ee(this,$a),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&ee(this,In).remove(this)}setData(e,n){const i=fw(this.state.data,e,this.options);return Wt(this,Jn,Ii).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Wt(this,Jn,Ii).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=ee(this,Yt))==null?void 0:i.promise;return(r=ee(this,Yt))==null||r.cancel(e),n?n.then(Zn).catch(Zn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(ee(this,mo))}isActive(){return this.observers.some(e=>uw(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Op||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!cw(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=ee(this,Yt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=ee(this,Yt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),ee(this,In).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(ee(this,Yt)&&(ee(this,us)?ee(this,Yt).cancel({revert:!0}):ee(this,Yt).cancelRetry()),this.scheduleGc()),ee(this,In).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Wt(this,Jn,Ii).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(ee(this,Yt))return ee(this,Yt).continueRetry(),ee(this,Yt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(h=>h.options.queryFn);f&&this.setOptions(f.options)}const i=new AbortController,r=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(ze(this,us,!0),i.signal)})},s=()=>{const f=yx(this.options,n),h={queryKey:this.queryKey,meta:this.meta};return r(h),ze(this,us,!1),this.options.persister?this.options.persister(f,h,this):f(h)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};r(o),(l=this.options.behavior)==null||l.onFetch(o,this),ze(this,go,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&Wt(this,Jn,Ii).call(this,{type:"fetch",meta:(d=o.fetchOptions)==null?void 0:d.meta});const a=f=>{var h,m,_,g;hd(f)&&f.silent||Wt(this,Jn,Ii).call(this,{type:"error",error:f}),hd(f)||((m=(h=ee(this,In).config).onError)==null||m.call(h,f,this),(g=(_=ee(this,In).config).onSettled)==null||g.call(_,this.state.data,f,this)),this.scheduleGc()};return ze(this,Yt,wx({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:f=>{var h,m,_,g;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(p){a(p);return}(m=(h=ee(this,In).config).onSuccess)==null||m.call(h,f,this),(g=(_=ee(this,In).config).onSettled)==null||g.call(_,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,h)=>{Wt(this,Jn,Ii).call(this,{type:"failed",failureCount:f,error:h})},onPause:()=>{Wt(this,Jn,Ii).call(this,{type:"pause"})},onContinue:()=>{Wt(this,Jn,Ii).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),ee(this,Yt).start()}},mo=new WeakMap,go=new WeakMap,In=new WeakMap,Yt=new WeakMap,$a=new WeakMap,us=new WeakMap,Jn=new WeakSet,Ii=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Sw(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return hd(r)&&r.revert&&ee(this,go)?{...ee(this,go),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),nn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),ee(this,In).notify({query:this,type:"updated",action:e})})},e_);function Sw(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ex(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Ew(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var hi,t_,Mw=(t_=class extends wu{constructor(e={}){super();nt(this,hi);this.config=e,ze(this,hi,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??Fp(r,n);let o=this.get(s);return o||(o=new yw({cache:this,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){ee(this,hi).has(e.queryHash)||(ee(this,hi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=ee(this,hi).get(e.queryHash);n&&(e.destroy(),n===e&&ee(this,hi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){nn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return ee(this,hi).get(e)}getAll(){return[...ee(this,hi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>Rg(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>Rg(e,i)):n}notify(e){nn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){nn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){nn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},hi=new WeakMap,t_),pi,en,ds,mi,cr,n_,ww=(n_=class extends Tx{constructor(e){super();nt(this,mi);nt(this,pi);nt(this,en);nt(this,ds);this.mutationId=e.mutationId,ze(this,en,e.mutationCache),ze(this,pi,[]),this.state=e.state||Tw(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){ee(this,pi).includes(e)||(ee(this,pi).push(e),this.clearGcTimeout(),ee(this,en).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ze(this,pi,ee(this,pi).filter(n=>n!==e)),this.scheduleGc(),ee(this,en).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){ee(this,pi).length||(this.state.status==="pending"?this.scheduleGc():ee(this,en).remove(this))}continue(){var e;return((e=ee(this,ds))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,s,o,a,l,c,d,f,h,m,_,g,p,u,v,x,y,b,A,T;ze(this,ds,wx({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(P,M)=>{Wt(this,mi,cr).call(this,{type:"failed",failureCount:P,error:M})},onPause:()=>{Wt(this,mi,cr).call(this,{type:"pause"})},onContinue:()=>{Wt(this,mi,cr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>ee(this,en).canRun(this)}));const n=this.state.status==="pending",i=!ee(this,ds).canStart();try{if(!n){Wt(this,mi,cr).call(this,{type:"pending",variables:e,isPaused:i}),await((s=(r=ee(this,en).config).onMutate)==null?void 0:s.call(r,e,this));const M=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));M!==this.state.context&&Wt(this,mi,cr).call(this,{type:"pending",context:M,variables:e,isPaused:i})}const P=await ee(this,ds).start();return await((c=(l=ee(this,en).config).onSuccess)==null?void 0:c.call(l,P,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,P,e,this.state.context)),await((m=(h=ee(this,en).config).onSettled)==null?void 0:m.call(h,P,null,this.state.variables,this.state.context,this)),await((g=(_=this.options).onSettled)==null?void 0:g.call(_,P,null,e,this.state.context)),Wt(this,mi,cr).call(this,{type:"success",data:P}),P}catch(P){try{throw await((u=(p=ee(this,en).config).onError)==null?void 0:u.call(p,P,e,this.state.context,this)),await((x=(v=this.options).onError)==null?void 0:x.call(v,P,e,this.state.context)),await((b=(y=ee(this,en).config).onSettled)==null?void 0:b.call(y,void 0,P,this.state.variables,this.state.context,this)),await((T=(A=this.options).onSettled)==null?void 0:T.call(A,void 0,P,e,this.state.context)),P}finally{Wt(this,mi,cr).call(this,{type:"error",error:P})}}finally{ee(this,en).runNext(this)}}},pi=new WeakMap,en=new WeakMap,ds=new WeakMap,mi=new WeakSet,cr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),nn.batch(()=>{ee(this,pi).forEach(i=>{i.onMutationUpdate(e)}),ee(this,en).notify({mutation:this,type:"updated",action:e})})},n_);function Tw(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Sn,qa,i_,bw=(i_=class extends wu{constructor(e={}){super();nt(this,Sn);nt(this,qa);this.config=e,ze(this,Sn,new Map),ze(this,qa,Date.now())}build(e,n,i){const r=new ww({mutationCache:this,mutationId:++ul(this,qa)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=Cl(e),i=ee(this,Sn).get(n)??[];i.push(e),ee(this,Sn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=Cl(e);if(ee(this,Sn).has(n)){const r=(i=ee(this,Sn).get(n))==null?void 0:i.filter(s=>s!==e);r&&(r.length===0?ee(this,Sn).delete(n):ee(this,Sn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=ee(this,Sn).get(Cl(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=ee(this,Sn).get(Cl(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){nn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...ee(this,Sn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>Pg(n,i))}findAll(e={}){return this.getAll().filter(n=>Pg(e,n))}notify(e){nn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return nn.batch(()=>Promise.all(e.map(n=>n.continue().catch(Zn))))}},Sn=new WeakMap,qa=new WeakMap,i_);function Cl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Ng(t){return{onFetch:(e,n)=>{var d,f,h,m,_;const i=e.options,r=(h=(f=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction,s=((m=e.state.data)==null?void 0:m.pages)||[],o=((_=e.state.data)==null?void 0:_.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const p=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},u=yx(e.options,e.fetchOptions),v=async(x,y,b)=>{if(g)return Promise.reject();if(y==null&&x.pages.length)return Promise.resolve(x);const A={queryKey:e.queryKey,pageParam:y,direction:b?"backward":"forward",meta:e.options.meta};p(A);const T=await u(A),{maxPages:P}=e.options,M=b?pw:hw;return{pages:M(x.pages,T,P),pageParams:M(x.pageParams,y,P)}};if(r&&s.length){const x=r==="backward",y=x?Aw:Ig,b={pages:s,pageParams:o},A=y(i,b);a=await v(b,A,x)}else{const x=t??s.length;do{const y=l===0?o[0]??i.initialPageParam:Ig(i,a);if(l>0&&y==null)break;a=await v(a,y),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var g,p;return(p=(g=e.options).persister)==null?void 0:p.call(g,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Ig(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function Aw(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Et,vr,_r,vo,_o,xr,xo,yo,r_,Cw=(r_=class{constructor(t={}){nt(this,Et);nt(this,vr);nt(this,_r);nt(this,vo);nt(this,_o);nt(this,xr);nt(this,xo);nt(this,yo);ze(this,Et,t.queryCache||new Mw),ze(this,vr,t.mutationCache||new bw),ze(this,_r,t.defaultOptions||{}),ze(this,vo,new Map),ze(this,_o,new Map),ze(this,xr,0)}mount(){ul(this,xr)._++,ee(this,xr)===1&&(ze(this,xo,Sx.subscribe(async t=>{t&&(await this.resumePausedMutations(),ee(this,Et).onFocus())})),ze(this,yo,Yc.subscribe(async t=>{t&&(await this.resumePausedMutations(),ee(this,Et).onOnline())})))}unmount(){var t,e;ul(this,xr)._--,ee(this,xr)===0&&((t=ee(this,xo))==null||t.call(this),ze(this,xo,void 0),(e=ee(this,yo))==null||e.call(this),ze(this,yo,void 0))}isFetching(t){return ee(this,Et).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return ee(this,vr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=ee(this,Et).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=ee(this,Et).build(this,n);return t.revalidateIfStale&&i.isStaleByTime(Cg(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return ee(this,Et).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=ee(this,Et).get(i.queryHash),s=r==null?void 0:r.state.data,o=aw(e,s);if(o!==void 0)return ee(this,Et).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return nn.batch(()=>ee(this,Et).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=ee(this,Et).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=ee(this,Et);nn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=ee(this,Et),i={type:"active",...t};return nn.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=nn.batch(()=>ee(this,Et).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(Zn).catch(Zn)}invalidateQueries(t={},e={}){return nn.batch(()=>{if(ee(this,Et).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=nn.batch(()=>ee(this,Et).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(Zn)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(Zn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=ee(this,Et).build(this,e);return n.isStaleByTime(Cg(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Zn).catch(Zn)}fetchInfiniteQuery(t){return t.behavior=Ng(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Zn).catch(Zn)}ensureInfiniteQueryData(t){return t.behavior=Ng(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Yc.isOnline()?ee(this,vr).resumePausedMutations():Promise.resolve()}getQueryCache(){return ee(this,Et)}getMutationCache(){return ee(this,vr)}getDefaultOptions(){return ee(this,_r)}setDefaultOptions(t){ze(this,_r,t)}setQueryDefaults(t,e){ee(this,vo).set(Ba(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...ee(this,vo).values()];let n={};return e.forEach(i=>{za(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){ee(this,_o).set(Ba(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...ee(this,_o).values()];let n={};return e.forEach(i=>{za(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...ee(this,_r).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Fp(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Op&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...ee(this,_r).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){ee(this,Et).clear(),ee(this,vr).clear()}},Et=new WeakMap,vr=new WeakMap,_r=new WeakMap,vo=new WeakMap,_o=new WeakMap,xr=new WeakMap,xo=new WeakMap,yo=new WeakMap,r_),Rw=I.createContext(void 0),Pw=({client:t,children:e})=>(I.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),C.jsx(Rw.Provider,{value:t,children:e}));async function Dw(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}const Lw=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await Dw(n),await n.json())},Nw=new Cw({defaultOptions:{queries:{queryFn:Lw({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),Iw=1,Uw=1e6;let pd=0;function Fw(){return pd=(pd+1)%Number.MAX_SAFE_INTEGER,pd.toString()}const md=new Map,Ug=t=>{if(md.has(t))return;const e=setTimeout(()=>{md.delete(t),Sa({type:"REMOVE_TOAST",toastId:t})},Uw);md.set(t,e)},Ow=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Iw)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Ug(n):t.toasts.forEach(i=>{Ug(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},pc=[];let mc={toasts:[]};function Sa(t){mc=Ow(mc,t),pc.forEach(e=>{e(mc)})}function kw({...t}){const e=Fw(),n=r=>Sa({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Sa({type:"DISMISS_TOAST",toastId:e});return Sa({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function bx(){const[t,e]=I.useState(mc);return I.useEffect(()=>(pc.push(e),()=>{const n=pc.indexOf(e);n>-1&&pc.splice(n,1)}),[t]),{...t,toast:kw,dismiss:n=>Sa({type:"DISMISS_TOAST",toastId:n})}}function Rt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function Fg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Ax(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Fg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Fg(t[r],null)}}}}function Wn(...t){return I.useCallback(Ax(...t),t)}function tl(t,e=[]){let n=[];function i(s,o){const a=I.createContext(o),l=n.length;n=[...n,o];const c=f=>{var u;const{scope:h,children:m,..._}=f,g=((u=h==null?void 0:h[t])==null?void 0:u[l])||a,p=I.useMemo(()=>_,Object.values(_));return C.jsx(g.Provider,{value:p,children:m})};c.displayName=s+"Provider";function d(f,h){var g;const m=((g=h==null?void 0:h[t])==null?void 0:g[l])||a,_=I.useContext(m);if(_)return _;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,d]}const r=()=>{const s=n.map(o=>I.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return I.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,Bw(r,...e)]}function Bw(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return I.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function Kc(t){const e=Hw(t),n=I.forwardRef((i,r)=>{const{children:s,...o}=i,a=I.Children.toArray(s),l=a.find(Gw);if(l){const c=l.props.children,d=a.map(f=>f===l?I.Children.count(c)>1?I.Children.only(null):I.isValidElement(c)?c.props.children:null:f);return C.jsx(e,{...o,ref:r,children:I.isValidElement(c)?I.cloneElement(c,void 0,d):null})}return C.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var zw=Kc("Slot");function Hw(t){const e=I.forwardRef((n,i)=>{const{children:r,...s}=n;if(I.isValidElement(r)){const o=jw(r),a=Ww(s,r.props);return r.type!==I.Fragment&&(a.ref=i?Ax(i,o):o),I.cloneElement(r,a)}return I.Children.count(r)>1?I.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var Cx=Symbol("radix.slottable");function Vw(t){const e=({children:n})=>C.jsx(C.Fragment,{children:n});return e.displayName=`${t}.Slottable`,e.__radixId=Cx,e}function Gw(t){return I.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===Cx}function Ww(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{s(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function jw(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function Xw(t){const e=t+"CollectionProvider",[n,i]=tl(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=g=>{const{scope:p,children:u}=g,v=Wr.useRef(null),x=Wr.useRef(new Map).current;return C.jsx(r,{scope:p,itemMap:x,collectionRef:v,children:u})};o.displayName=e;const a=t+"CollectionSlot",l=Kc(a),c=Wr.forwardRef((g,p)=>{const{scope:u,children:v}=g,x=s(a,u),y=Wn(p,x.collectionRef);return C.jsx(l,{ref:y,children:v})});c.displayName=a;const d=t+"CollectionItemSlot",f="data-radix-collection-item",h=Kc(d),m=Wr.forwardRef((g,p)=>{const{scope:u,children:v,...x}=g,y=Wr.useRef(null),b=Wn(p,y),A=s(d,u);return Wr.useEffect(()=>(A.itemMap.set(y,{ref:y,...x}),()=>void A.itemMap.delete(y))),C.jsx(h,{[f]:"",ref:b,children:v})});m.displayName=d;function _(g){const p=s(t+"CollectionConsumer",g);return Wr.useCallback(()=>{const v=p.collectionRef.current;if(!v)return[];const x=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(p.itemMap.values()).sort((A,T)=>x.indexOf(A.ref.current)-x.indexOf(T.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:o,Slot:c,ItemSlot:m},_,i]}var $w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Vt=$w.reduce((t,e)=>{const n=Kc(`Primitive.${e}`),i=I.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),C.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function Rx(t,e){t&&el.flushSync(()=>t.dispatchEvent(e))}function Mi(t){const e=I.useRef(t);return I.useEffect(()=>{e.current=t}),I.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function qw(t,e=globalThis==null?void 0:globalThis.document){const n=Mi(t);I.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var Yw="DismissableLayer",jf="dismissableLayer.update",Kw="dismissableLayer.pointerDownOutside",Qw="dismissableLayer.focusOutside",Og,Px=I.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),kp=I.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=I.useContext(Px),[d,f]=I.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=I.useState({}),_=Wn(e,T=>f(T)),g=Array.from(c.layers),[p]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=g.indexOf(p),v=d?g.indexOf(d):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,y=v>=u,b=Jw(T=>{const P=T.target,M=[...c.branches].some(S=>S.contains(P));!y||M||(r==null||r(T),o==null||o(T),T.defaultPrevented||a==null||a())},h),A=eT(T=>{const P=T.target;[...c.branches].some(S=>S.contains(P))||(s==null||s(T),o==null||o(T),T.defaultPrevented||a==null||a())},h);return qw(T=>{v===c.layers.size-1&&(i==null||i(T),!T.defaultPrevented&&a&&(T.preventDefault(),a()))},h),I.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Og=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),kg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Og)}},[d,h,n,c]),I.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),kg())},[d,c]),I.useEffect(()=>{const T=()=>m({});return document.addEventListener(jf,T),()=>document.removeEventListener(jf,T)},[]),C.jsx(Vt.div,{...l,ref:_,style:{pointerEvents:x?y?"auto":"none":void 0,...t.style},onFocusCapture:Rt(t.onFocusCapture,A.onFocusCapture),onBlurCapture:Rt(t.onBlurCapture,A.onBlurCapture),onPointerDownCapture:Rt(t.onPointerDownCapture,b.onPointerDownCapture)})});kp.displayName=Yw;var Zw="DismissableLayerBranch",Dx=I.forwardRef((t,e)=>{const n=I.useContext(Px),i=I.useRef(null),r=Wn(e,i);return I.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),C.jsx(Vt.div,{...t,ref:r})});Dx.displayName=Zw;function Jw(t,e=globalThis==null?void 0:globalThis.document){const n=Mi(t),i=I.useRef(!1),r=I.useRef(()=>{});return I.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){Lx(Kw,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function eT(t,e=globalThis==null?void 0:globalThis.document){const n=Mi(t),i=I.useRef(!1);return I.useEffect(()=>{const r=s=>{s.target&&!i.current&&Lx(Qw,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function kg(){const t=new CustomEvent(jf);document.dispatchEvent(t)}function Lx(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Rx(r,s):r.dispatchEvent(s)}var tT=kp,nT=Dx,xs=globalThis!=null&&globalThis.document?I.useLayoutEffect:()=>{},iT="Portal",Nx=I.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=I.useState(!1);xs(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?ow.createPortal(C.jsx(Vt.div,{...i,ref:e}),o):null});Nx.displayName=iT;function rT(t,e){return I.useReducer((n,i)=>e[n][i]??n,t)}var Bp=t=>{const{present:e,children:n}=t,i=sT(e),r=typeof n=="function"?n({present:i.isPresent}):I.Children.only(n),s=Wn(i.ref,oT(r));return typeof n=="function"||i.isPresent?I.cloneElement(r,{ref:s}):null};Bp.displayName="Presence";function sT(t){const[e,n]=I.useState(),i=I.useRef({}),r=I.useRef(t),s=I.useRef("none"),o=t?"mounted":"unmounted",[a,l]=rT(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return I.useEffect(()=>{const c=Rl(i.current);s.current=a==="mounted"?c:"none"},[a]),xs(()=>{const c=i.current,d=r.current;if(d!==t){const h=s.current,m=Rl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&h!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),xs(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,f=m=>{const g=Rl(i.current).includes(m.animationName);if(m.target===e&&g&&(l("ANIMATION_END"),!r.current)){const p=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=p)})}},h=m=>{m.target===e&&(s.current=Rl(i.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:I.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Rl(t){return(t==null?void 0:t.animationName)||"none"}function oT(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function Ix({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=aT({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:i,a=Mi(n),l=I.useCallback(c=>{if(s){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else r(c)},[s,t,r,a]);return[o,l]}function aT({defaultProp:t,onChange:e}){const n=I.useState(t),[i]=n,r=I.useRef(i),s=Mi(e);return I.useEffect(()=>{r.current!==i&&(s(i),r.current=i)},[i,r,s]),n}var lT="VisuallyHidden",bu=I.forwardRef((t,e)=>C.jsx(Vt.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));bu.displayName=lT;var cT=bu,zp="ToastProvider",[Hp,uT,dT]=Xw("Toast"),[Ux,xL]=tl("Toast",[dT]),[fT,Au]=Ux(zp),Fx=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=I.useState(null),[c,d]=I.useState(0),f=I.useRef(!1),h=I.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${zp}\`. Expected non-empty \`string\`.`),C.jsx(Hp.Provider,{scope:e,children:C.jsx(fT,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:I.useCallback(()=>d(m=>m+1),[]),onToastRemove:I.useCallback(()=>d(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:h,children:o})})};Fx.displayName=zp;var Ox="ToastViewport",hT=["F8"],Xf="toast.viewportPause",$f="toast.viewportResume",kx=I.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=hT,label:r="Notifications ({hotkey})",...s}=t,o=Au(Ox,n),a=uT(n),l=I.useRef(null),c=I.useRef(null),d=I.useRef(null),f=I.useRef(null),h=Wn(e,f,o.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),_=o.toastCount>0;I.useEffect(()=>{const p=u=>{var x;i.length!==0&&i.every(y=>u[y]||u.code===y)&&((x=f.current)==null||x.focus())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[i]),I.useEffect(()=>{const p=l.current,u=f.current;if(_&&p&&u){const v=()=>{if(!o.isClosePausedRef.current){const A=new CustomEvent(Xf);u.dispatchEvent(A),o.isClosePausedRef.current=!0}},x=()=>{if(o.isClosePausedRef.current){const A=new CustomEvent($f);u.dispatchEvent(A),o.isClosePausedRef.current=!1}},y=A=>{!p.contains(A.relatedTarget)&&x()},b=()=>{p.contains(document.activeElement)||x()};return p.addEventListener("focusin",v),p.addEventListener("focusout",y),p.addEventListener("pointermove",v),p.addEventListener("pointerleave",b),window.addEventListener("blur",v),window.addEventListener("focus",x),()=>{p.removeEventListener("focusin",v),p.removeEventListener("focusout",y),p.removeEventListener("pointermove",v),p.removeEventListener("pointerleave",b),window.removeEventListener("blur",v),window.removeEventListener("focus",x)}}},[_,o.isClosePausedRef]);const g=I.useCallback(({tabbingDirection:p})=>{const v=a().map(x=>{const y=x.ref.current,b=[y,...bT(y)];return p==="forwards"?b:b.reverse()});return(p==="forwards"?v.reverse():v).flat()},[a]);return I.useEffect(()=>{const p=f.current;if(p){const u=v=>{var b,A,T;const x=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!x){const P=document.activeElement,M=v.shiftKey;if(v.target===p&&M){(b=c.current)==null||b.focus();return}const B=g({tabbingDirection:M?"backwards":"forwards"}),z=B.findIndex(k=>k===P);gd(B.slice(z+1))?v.preventDefault():M?(A=c.current)==null||A.focus():(T=d.current)==null||T.focus()}};return p.addEventListener("keydown",u),()=>p.removeEventListener("keydown",u)}},[a,g]),C.jsxs(nT,{ref:l,role:"region","aria-label":r.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:_?void 0:"none"},children:[_&&C.jsx(qf,{ref:c,onFocusFromOutsideViewport:()=>{const p=g({tabbingDirection:"forwards"});gd(p)}}),C.jsx(Hp.Slot,{scope:n,children:C.jsx(Vt.ol,{tabIndex:-1,...s,ref:h})}),_&&C.jsx(qf,{ref:d,onFocusFromOutsideViewport:()=>{const p=g({tabbingDirection:"backwards"});gd(p)}})]})});kx.displayName=Ox;var Bx="ToastFocusProxy",qf=I.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Au(Bx,n);return C.jsx(bu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});qf.displayName=Bx;var Cu="Toast",pT="toast.swipeStart",mT="toast.swipeMove",gT="toast.swipeCancel",vT="toast.swipeEnd",zx=I.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a=!0,l]=Ix({prop:i,defaultProp:r,onChange:s});return C.jsx(Bp,{present:n||a,children:C.jsx(yT,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Mi(t.onPause),onResume:Mi(t.onResume),onSwipeStart:Rt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Rt(t.onSwipeMove,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Rt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Rt(t.onSwipeEnd,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});zx.displayName=Cu;var[_T,xT]=Ux(Cu,{onClose(){}}),yT=I.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:f,onSwipeCancel:h,onSwipeEnd:m,..._}=t,g=Au(Cu,n),[p,u]=I.useState(null),v=Wn(e,k=>u(k)),x=I.useRef(null),y=I.useRef(null),b=r||g.duration,A=I.useRef(0),T=I.useRef(b),P=I.useRef(0),{onToastAdd:M,onToastRemove:S}=g,L=Mi(()=>{var $;(p==null?void 0:p.contains(document.activeElement))&&(($=g.viewport)==null||$.focus()),o()}),B=I.useCallback(k=>{!k||k===1/0||(window.clearTimeout(P.current),A.current=new Date().getTime(),P.current=window.setTimeout(L,k))},[L]);I.useEffect(()=>{const k=g.viewport;if(k){const $=()=>{B(T.current),c==null||c()},V=()=>{const q=new Date().getTime()-A.current;T.current=T.current-q,window.clearTimeout(P.current),l==null||l()};return k.addEventListener(Xf,V),k.addEventListener($f,$),()=>{k.removeEventListener(Xf,V),k.removeEventListener($f,$)}}},[g.viewport,b,l,c,B]),I.useEffect(()=>{s&&!g.isClosePausedRef.current&&B(b)},[s,b,g.isClosePausedRef,B]),I.useEffect(()=>(M(),()=>S()),[M,S]);const z=I.useMemo(()=>p?$x(p):null,[p]);return g.viewport?C.jsxs(C.Fragment,{children:[z&&C.jsx(ST,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:z}),C.jsx(_T,{scope:n,onClose:L,children:el.createPortal(C.jsx(Hp.ItemSlot,{scope:n,children:C.jsx(tT,{asChild:!0,onEscapeKeyDown:Rt(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||L(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:C.jsx(Vt.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,..._,ref:v,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Rt(t.onKeyDown,k=>{k.key==="Escape"&&(a==null||a(k.nativeEvent),k.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,L()))}),onPointerDown:Rt(t.onPointerDown,k=>{k.button===0&&(x.current={x:k.clientX,y:k.clientY})}),onPointerMove:Rt(t.onPointerMove,k=>{if(!x.current)return;const $=k.clientX-x.current.x,V=k.clientY-x.current.y,q=!!y.current,D=["left","right"].includes(g.swipeDirection),j=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,Q=D?j(0,$):0,re=D?0:j(0,V),Se=k.pointerType==="touch"?10:2,Ve={x:Q,y:re},K={originalEvent:k,delta:Ve};q?(y.current=Ve,Pl(mT,f,K,{discrete:!1})):Bg(Ve,g.swipeDirection,Se)?(y.current=Ve,Pl(pT,d,K,{discrete:!1}),k.target.setPointerCapture(k.pointerId)):(Math.abs($)>Se||Math.abs(V)>Se)&&(x.current=null)}),onPointerUp:Rt(t.onPointerUp,k=>{const $=y.current,V=k.target;if(V.hasPointerCapture(k.pointerId)&&V.releasePointerCapture(k.pointerId),y.current=null,x.current=null,$){const q=k.currentTarget,D={originalEvent:k,delta:$};Bg($,g.swipeDirection,g.swipeThreshold)?Pl(vT,m,D,{discrete:!0}):Pl(gT,h,D,{discrete:!0}),q.addEventListener("click",j=>j.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),ST=t=>{const{__scopeToast:e,children:n,...i}=t,r=Au(Cu,e),[s,o]=I.useState(!1),[a,l]=I.useState(!1);return wT(()=>o(!0)),I.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:C.jsx(Nx,{asChild:!0,children:C.jsx(bu,{...i,children:s&&C.jsxs(C.Fragment,{children:[r.label," ",n]})})})},ET="ToastTitle",Hx=I.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return C.jsx(Vt.div,{...i,ref:e})});Hx.displayName=ET;var MT="ToastDescription",Vx=I.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return C.jsx(Vt.div,{...i,ref:e})});Vx.displayName=MT;var Gx="ToastAction",Wx=I.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?C.jsx(Xx,{altText:n,asChild:!0,children:C.jsx(Vp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Gx}\`. Expected non-empty \`string\`.`),null)});Wx.displayName=Gx;var jx="ToastClose",Vp=I.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=xT(jx,n);return C.jsx(Xx,{asChild:!0,children:C.jsx(Vt.button,{type:"button",...i,ref:e,onClick:Rt(t.onClick,r.onClose)})})});Vp.displayName=jx;var Xx=I.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return C.jsx(Vt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function $x(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),TT(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...$x(i))}}),e}function Pl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Rx(r,s):r.dispatchEvent(s)}var Bg=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function wT(t=()=>{}){const e=Mi(t);xs(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function TT(t){return t.nodeType===t.ELEMENT_NODE}function bT(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function gd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var AT=Fx,qx=kx,Yx=zx,Kx=Hx,Qx=Vx,Zx=Wx,Jx=Vp;function ey(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=ey(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function ty(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=ey(t))&&(i&&(i+=" "),i+=e);return i}const zg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Hg=ty,Gp=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return Hg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],f=s==null?void 0:s[c];if(d===null)return null;const h=zg(d)||zg(f);return r[c][h]}),a=n&&Object.entries(n).reduce((c,d)=>{let[f,h]=d;return h===void 0||(c[f]=h),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:f,className:h,...m}=d;return Object.entries(m).every(_=>{let[g,p]=_;return Array.isArray(p)?p.includes({...s,...a}[g]):{...s,...a}[g]===p})?[...c,f,h]:c},[]);return Hg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ny=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=I.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>I.createElement("svg",{ref:l,...RT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ny("lucide",r),...a},[...o.map(([c,d])=>I.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=(t,e)=>{const n=I.forwardRef(({className:i,...r},s)=>I.createElement(PT,{ref:s,iconNode:e,className:ny(`lucide-${CT(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=DT("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Wp="-",NT=t=>{const e=UT(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Wp);return a[0]===""&&a.length!==1&&a.shift(),iy(a,e)||IT(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},iy=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?iy(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Wp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},Vg=/^\[(.+)\]$/,IT=t=>{if(Vg.test(t)){const e=Vg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},UT=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return OT(Object.entries(t.classGroups),n).forEach(([s,o])=>{Yf(o,i,s,e)}),i},Yf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Gg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(FT(r)){Yf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Yf(o,Gg(e,s),n,i)})})},Gg=(t,e)=>{let n=t;return e.split(Wp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},FT=t=>t.isThemeGetter,OT=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,kT=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},ry="!",BT=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,d=0,f;for(let p=0;p<a.length;p++){let u=a[p];if(c===0){if(u===r&&(i||a.slice(p,p+s)===e)){l.push(a.slice(d,p)),d=p+s;continue}if(u==="/"){f=p;continue}}u==="["?c++:u==="]"&&c--}const h=l.length===0?a:a.substring(d),m=h.startsWith(ry),_=m?h.substring(1):h,g=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:_,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},zT=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},HT=t=>({cache:kT(t.cacheSize),parseClassName:BT(t),...NT(t)}),VT=/\s+/,GT=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(VT);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:d,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:m}=n(c);let _=!!m,g=i(_?h.substring(0,m):h);if(!g){if(!_){a=c+(a.length>0?" "+a:a);continue}if(g=i(h),!g){a=c+(a.length>0?" "+a:a);continue}_=!1}const p=zT(d).join(":"),u=f?p+ry:p,v=u+g;if(s.includes(v))continue;s.push(v);const x=r(g,_);for(let y=0;y<x.length;++y){const b=x[y];s.push(u+b)}a=c+(a.length>0?" "+a:a)}return a};function WT(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=sy(e))&&(i&&(i+=" "),i+=n);return i}const sy=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=sy(t[i]))&&(n&&(n+=" "),n+=e);return n};function jT(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((d,f)=>f(d),t());return n=HT(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=GT(l,n);return r(l,d),d}return function(){return s(WT.apply(null,arguments))}}const dt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},oy=/^\[(?:([a-z-]+):)?(.+)\]$/i,XT=/^\d+\/\d+$/,$T=new Set(["px","full","screen"]),qT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,YT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,KT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,QT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ZT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ci=t=>ao(t)||$T.has(t)||XT.test(t),tr=t=>ko(t,"length",o1),ao=t=>!!t&&!Number.isNaN(Number(t)),vd=t=>ko(t,"number",ao),Jo=t=>!!t&&Number.isInteger(Number(t)),JT=t=>t.endsWith("%")&&ao(t.slice(0,-1)),Fe=t=>oy.test(t),nr=t=>qT.test(t),e1=new Set(["length","size","percentage"]),t1=t=>ko(t,e1,ay),n1=t=>ko(t,"position",ay),i1=new Set(["image","url"]),r1=t=>ko(t,i1,l1),s1=t=>ko(t,"",a1),ea=()=>!0,ko=(t,e,n)=>{const i=oy.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},o1=t=>YT.test(t)&&!KT.test(t),ay=()=>!1,a1=t=>QT.test(t),l1=t=>ZT.test(t),c1=()=>{const t=dt("colors"),e=dt("spacing"),n=dt("blur"),i=dt("brightness"),r=dt("borderColor"),s=dt("borderRadius"),o=dt("borderSpacing"),a=dt("borderWidth"),l=dt("contrast"),c=dt("grayscale"),d=dt("hueRotate"),f=dt("invert"),h=dt("gap"),m=dt("gradientColorStops"),_=dt("gradientColorStopPositions"),g=dt("inset"),p=dt("margin"),u=dt("opacity"),v=dt("padding"),x=dt("saturate"),y=dt("scale"),b=dt("sepia"),A=dt("skew"),T=dt("space"),P=dt("translate"),M=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto",Fe,e],B=()=>[Fe,e],z=()=>["",Ci,tr],k=()=>["auto",ao,Fe],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",Fe],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[ao,Fe];return{cacheSize:500,separator:":",theme:{colors:[ea],spacing:[Ci,tr],blur:["none","",nr,Fe],brightness:re(),borderColor:[t],borderRadius:["none","","full",nr,Fe],borderSpacing:B(),borderWidth:z(),contrast:re(),grayscale:j(),hueRotate:re(),invert:j(),gap:B(),gradientColorStops:[t],gradientColorStopPositions:[JT,tr],inset:L(),margin:L(),opacity:re(),padding:B(),saturate:re(),scale:re(),sepia:j(),skew:re(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",Fe]}],container:["container"],columns:[{columns:[nr]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),Fe]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Jo,Fe]}],basis:[{basis:L()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Fe]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",Jo,Fe]}],"grid-cols":[{"grid-cols":[ea]}],"col-start-end":[{col:["auto",{span:["full",Jo,Fe]},Fe]}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":[ea]}],"row-start-end":[{row:["auto",{span:[Jo,Fe]},Fe]}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Fe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Fe]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...D()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...D(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...D(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Fe,e]}],"min-w":[{"min-w":[Fe,e,"min","max","fit"]}],"max-w":[{"max-w":[Fe,e,"none","full","min","max","fit","prose",{screen:[nr]},nr]}],h:[{h:[Fe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Fe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Fe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",nr,tr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",vd]}],"font-family":[{font:[ea]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Fe]}],"line-clamp":[{"line-clamp":["none",ao,vd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ci,Fe]}],"list-image":[{"list-image":["none",Fe]}],"list-style-type":[{list:["none","disc","decimal",Fe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ci,tr]}],"underline-offset":[{"underline-offset":["auto",Ci,Fe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),n1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",t1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},r1]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:V()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[Ci,Fe]}],"outline-w":[{outline:[Ci,tr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[Ci,tr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",nr,s1]}],"shadow-color":[{shadow:[ea]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",nr,Fe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[x]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Fe]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",Fe]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",Fe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[Jo,Fe]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[A]}],"skew-y":[{"skew-y":[A]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Fe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Fe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Fe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ci,tr,vd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},u1=jT(c1);function Cn(...t){return u1(ty(t))}const d1=AT,ly=I.forwardRef(({className:t,...e},n)=>C.jsx(qx,{ref:n,className:Cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));ly.displayName=qx.displayName;const f1=Gp("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),cy=I.forwardRef(({className:t,variant:e,...n},i)=>C.jsx(Yx,{ref:i,className:Cn(f1({variant:e}),t),...n}));cy.displayName=Yx.displayName;const h1=I.forwardRef(({className:t,...e},n)=>C.jsx(Zx,{ref:n,className:Cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));h1.displayName=Zx.displayName;const uy=I.forwardRef(({className:t,...e},n)=>C.jsx(Jx,{ref:n,className:Cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:C.jsx(LT,{className:"h-4 w-4"})}));uy.displayName=Jx.displayName;const dy=I.forwardRef(({className:t,...e},n)=>C.jsx(Kx,{ref:n,className:Cn("text-sm font-semibold",t),...e}));dy.displayName=Kx.displayName;const fy=I.forwardRef(({className:t,...e},n)=>C.jsx(Qx,{ref:n,className:Cn("text-sm opacity-90",t),...e}));fy.displayName=Qx.displayName;function p1(){const{toasts:t}=bx();return C.jsxs(d1,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return C.jsxs(cy,{...s,children:[C.jsxs("div",{className:"grid gap-1",children:[n&&C.jsx(dy,{children:n}),i&&C.jsx(fy,{children:i})]}),r,C.jsx(uy,{})]},e)}),C.jsx(ly,{})]})}const m1=["top","right","bottom","left"],Ir=Math.min,Mn=Math.max,Qc=Math.round,Dl=Math.floor,Si=t=>({x:t,y:t}),g1={left:"right",right:"left",bottom:"top",top:"bottom"},v1={start:"end",end:"start"};function Kf(t,e,n){return Mn(t,Ir(e,n))}function Yi(t,e){return typeof t=="function"?t(e):t}function Ki(t){return t.split("-")[0]}function Bo(t){return t.split("-")[1]}function jp(t){return t==="x"?"y":"x"}function Xp(t){return t==="y"?"height":"width"}function Ur(t){return["top","bottom"].includes(Ki(t))?"y":"x"}function $p(t){return jp(Ur(t))}function _1(t,e,n){n===void 0&&(n=!1);const i=Bo(t),r=$p(t),s=Xp(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=Zc(o)),[o,Zc(o)]}function x1(t){const e=Zc(t);return[Qf(t),e,Qf(e)]}function Qf(t){return t.replace(/start|end/g,e=>v1[e])}function y1(t,e,n){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function S1(t,e,n,i){const r=Bo(t);let s=y1(Ki(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(Qf)))),s}function Zc(t){return t.replace(/left|right|bottom|top/g,e=>g1[e])}function E1(t){return{top:0,right:0,bottom:0,left:0,...t}}function hy(t){return typeof t!="number"?E1(t):{top:t,right:t,bottom:t,left:t}}function Jc(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Wg(t,e,n){let{reference:i,floating:r}=t;const s=Ur(e),o=$p(e),a=Xp(o),l=Ki(e),c=s==="y",d=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,h=i[a]/2-r[a]/2;let m;switch(l){case"top":m={x:d,y:i.y-r.height};break;case"bottom":m={x:d,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:f};break;case"left":m={x:i.x-r.width,y:f};break;default:m={x:i.x,y:i.y}}switch(Bo(e)){case"start":m[o]-=h*(n&&c?-1:1);break;case"end":m[o]+=h*(n&&c?-1:1);break}return m}const M1=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:f}=Wg(c,i,l),h=i,m={},_=0;for(let g=0;g<a.length;g++){const{name:p,fn:u}=a[g],{x:v,y:x,data:y,reset:b}=await u({x:d,y:f,initialPlacement:i,placement:h,strategy:r,middlewareData:m,rects:c,platform:o,elements:{reference:t,floating:e}});d=v??d,f=x??f,m={...m,[p]:{...m[p],...y}},b&&_<=50&&(_++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(c=b.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:d,y:f}=Wg(c,h,l)),g=-1)}return{x:d,y:f,placement:h,strategy:r,middlewareData:m}};async function Ha(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:h=!1,padding:m=0}=Yi(e,t),_=hy(m),p=a[h?f==="floating"?"reference":"floating":f],u=Jc(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(p)))==null||n?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),v=f==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),y=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},b=Jc(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:x,strategy:l}):v);return{top:(u.top-b.top+_.top)/y.y,bottom:(b.bottom-u.bottom+_.bottom)/y.y,left:(u.left-b.left+_.left)/y.x,right:(b.right-u.right+_.right)/y.x}}const w1=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=Yi(t,e)||{};if(c==null)return{};const f=hy(d),h={x:n,y:i},m=$p(r),_=Xp(m),g=await o.getDimensions(c),p=m==="y",u=p?"top":"left",v=p?"bottom":"right",x=p?"clientHeight":"clientWidth",y=s.reference[_]+s.reference[m]-h[m]-s.floating[_],b=h[m]-s.reference[m],A=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let T=A?A[x]:0;(!T||!await(o.isElement==null?void 0:o.isElement(A)))&&(T=a.floating[x]||s.floating[_]);const P=y/2-b/2,M=T/2-g[_]/2-1,S=Ir(f[u],M),L=Ir(f[v],M),B=S,z=T-g[_]-L,k=T/2-g[_]/2+P,$=Kf(B,k,z),V=!l.arrow&&Bo(r)!=null&&k!==$&&s.reference[_]/2-(k<B?S:L)-g[_]/2<0,q=V?k<B?k-B:k-z:0;return{[m]:h[m]+q,data:{[m]:$,centerOffset:k-$-q,...V&&{alignmentOffset:q}},reset:V}}}),T1=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:g=!0,...p}=Yi(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const u=Ki(r),v=Ur(a),x=Ki(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),b=h||(x||!g?[Zc(a)]:x1(a)),A=_!=="none";!h&&A&&b.push(...S1(a,g,_,y));const T=[a,...b],P=await Ha(e,p),M=[];let S=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&M.push(P[u]),f){const k=_1(r,o,y);M.push(P[k[0]],P[k[1]])}if(S=[...S,{placement:r,overflows:M}],!M.every(k=>k<=0)){var L,B;const k=(((L=s.flip)==null?void 0:L.index)||0)+1,$=T[k];if($)return{data:{index:k,overflows:S},reset:{placement:$}};let V=(B=S.filter(q=>q.overflows[0]<=0).sort((q,D)=>q.overflows[1]-D.overflows[1])[0])==null?void 0:B.placement;if(!V)switch(m){case"bestFit":{var z;const q=(z=S.filter(D=>{if(A){const j=Ur(D.placement);return j===v||j==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(j=>j>0).reduce((j,Q)=>j+Q,0)]).sort((D,j)=>D[1]-j[1])[0])==null?void 0:z[0];q&&(V=q);break}case"initialPlacement":V=a;break}if(r!==V)return{reset:{placement:V}}}return{}}}};function jg(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Xg(t){return m1.some(e=>t[e]>=0)}const b1=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=Yi(t,e);switch(i){case"referenceHidden":{const s=await Ha(e,{...r,elementContext:"reference"}),o=jg(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:Xg(o)}}}case"escaped":{const s=await Ha(e,{...r,altBoundary:!0}),o=jg(s,n.floating);return{data:{escapedOffsets:o,escaped:Xg(o)}}}default:return{}}}}};async function A1(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Ki(n),a=Bo(n),l=Ur(n)==="y",c=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,f=Yi(e,t);let{mainAxis:h,crossAxis:m,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof _=="number"&&(m=a==="end"?_*-1:_),l?{x:m*d,y:h*c}:{x:h*c,y:m*d}}const C1=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:a}=e,l=await A1(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:o}}}}},R1=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:u,y:v}=p;return{x:u,y:v}}},...l}=Yi(t,e),c={x:n,y:i},d=await Ha(e,l),f=Ur(Ki(r)),h=jp(f);let m=c[h],_=c[f];if(s){const p=h==="y"?"top":"left",u=h==="y"?"bottom":"right",v=m+d[p],x=m-d[u];m=Kf(v,m,x)}if(o){const p=f==="y"?"top":"left",u=f==="y"?"bottom":"right",v=_+d[p],x=_-d[u];_=Kf(v,_,x)}const g=a.fn({...e,[h]:m,[f]:_});return{...g,data:{x:g.x-n,y:g.y-i,enabled:{[h]:s,[f]:o}}}}}},P1=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=Yi(t,e),d={x:n,y:i},f=Ur(r),h=jp(f);let m=d[h],_=d[f];const g=Yi(a,e),p=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const x=h==="y"?"height":"width",y=s.reference[h]-s.floating[x]+p.mainAxis,b=s.reference[h]+s.reference[x]-p.mainAxis;m<y?m=y:m>b&&(m=b)}if(c){var u,v;const x=h==="y"?"width":"height",y=["top","left"].includes(Ki(r)),b=s.reference[f]-s.floating[x]+(y&&((u=o.offset)==null?void 0:u[f])||0)+(y?0:p.crossAxis),A=s.reference[f]+s.reference[x]+(y?0:((v=o.offset)==null?void 0:v[f])||0)-(y?p.crossAxis:0);_<b?_=b:_>A&&(_=A)}return{[h]:m,[f]:_}}}},D1=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=Yi(t,e),d=await Ha(e,c),f=Ki(r),h=Bo(r),m=Ur(r)==="y",{width:_,height:g}=s.floating;let p,u;f==="top"||f==="bottom"?(p=f,u=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(u=f,p=h==="end"?"top":"bottom");const v=g-d.top-d.bottom,x=_-d.left-d.right,y=Ir(g-d[p],v),b=Ir(_-d[u],x),A=!e.middlewareData.shift;let T=y,P=b;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(P=x),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(T=v),A&&!h){const S=Mn(d.left,0),L=Mn(d.right,0),B=Mn(d.top,0),z=Mn(d.bottom,0);m?P=_-2*(S!==0||L!==0?S+L:Mn(d.left,d.right)):T=g-2*(B!==0||z!==0?B+z:Mn(d.top,d.bottom))}await l({...e,availableWidth:P,availableHeight:T});const M=await o.getDimensions(a.floating);return _!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function Ru(){return typeof window<"u"}function zo(t){return py(t)?(t.nodeName||"").toLowerCase():"#document"}function bn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ti(t){var e;return(e=(py(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function py(t){return Ru()?t instanceof Node||t instanceof bn(t).Node:!1}function ci(t){return Ru()?t instanceof Element||t instanceof bn(t).Element:!1}function wi(t){return Ru()?t instanceof HTMLElement||t instanceof bn(t).HTMLElement:!1}function $g(t){return!Ru()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof bn(t).ShadowRoot}function nl(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=ui(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function L1(t){return["table","td","th"].includes(zo(t))}function Pu(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function qp(t){const e=Yp(),n=ci(t)?ui(t):t;return["transform","translate","scale","rotate","perspective"].some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function N1(t){let e=Fr(t);for(;wi(e)&&!Co(e);){if(qp(e))return e;if(Pu(e))return null;e=Fr(e)}return null}function Yp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Co(t){return["html","body","#document"].includes(zo(t))}function ui(t){return bn(t).getComputedStyle(t)}function Du(t){return ci(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Fr(t){if(zo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||$g(t)&&t.host||Ti(t);return $g(e)?e.host:e}function my(t){const e=Fr(t);return Co(e)?t.ownerDocument?t.ownerDocument.body:t.body:wi(e)&&nl(e)?e:my(e)}function Va(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=my(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=bn(r);if(s){const a=Zf(o);return e.concat(o,o.visualViewport||[],nl(r)?r:[],a&&n?Va(a):[])}return e.concat(r,Va(r,[],n))}function Zf(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function gy(t){const e=ui(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=wi(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=Qc(n)!==s||Qc(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function Kp(t){return ci(t)?t:t.contextElement}function lo(t){const e=Kp(t);if(!wi(e))return Si(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=gy(e);let o=(s?Qc(n.width):n.width)/i,a=(s?Qc(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const I1=Si(0);function vy(t){const e=bn(t);return!Yp()||!e.visualViewport?I1:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function U1(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==bn(t)?!1:e}function ys(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Kp(t);let o=Si(1);e&&(i?ci(i)&&(o=lo(i)):o=lo(t));const a=U1(s,n,i)?vy(s):Si(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,d=r.width/o.x,f=r.height/o.y;if(s){const h=bn(s),m=i&&ci(i)?bn(i):i;let _=h,g=Zf(_);for(;g&&i&&m!==_;){const p=lo(g),u=g.getBoundingClientRect(),v=ui(g),x=u.left+(g.clientLeft+parseFloat(v.paddingLeft))*p.x,y=u.top+(g.clientTop+parseFloat(v.paddingTop))*p.y;l*=p.x,c*=p.y,d*=p.x,f*=p.y,l+=x,c+=y,_=bn(g),g=Zf(_)}}return Jc({width:d,height:f,x:l,y:c})}function Qp(t,e){const n=Du(t).scrollLeft;return e?e.left+n:ys(Ti(t)).left+n}function _y(t,e,n){n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(n?0:Qp(t,i)),s=i.top+e.scrollTop;return{x:r,y:s}}function F1(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Ti(i),a=e?Pu(e.floating):!1;if(i===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=Si(1);const d=Si(0),f=wi(i);if((f||!f&&!s)&&((zo(i)!=="body"||nl(o))&&(l=Du(i)),wi(i))){const m=ys(i);c=lo(i),d.x=m.x+i.clientLeft,d.y=m.y+i.clientTop}const h=o&&!f&&!s?_y(o,l,!0):Si(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x+h.x,y:n.y*c.y-l.scrollTop*c.y+d.y+h.y}}function O1(t){return Array.from(t.getClientRects())}function k1(t){const e=Ti(t),n=Du(t),i=t.ownerDocument.body,r=Mn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Mn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Qp(t);const a=-n.scrollTop;return ui(i).direction==="rtl"&&(o+=Mn(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function B1(t,e){const n=bn(t),i=Ti(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=Yp();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function z1(t,e){const n=ys(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=wi(t)?lo(t):Si(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function qg(t,e,n){let i;if(e==="viewport")i=B1(t,n);else if(e==="document")i=k1(Ti(t));else if(ci(e))i=z1(e,n);else{const r=vy(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Jc(i)}function xy(t,e){const n=Fr(t);return n===e||!ci(n)||Co(n)?!1:ui(n).position==="fixed"||xy(n,e)}function H1(t,e){const n=e.get(t);if(n)return n;let i=Va(t,[],!1).filter(a=>ci(a)&&zo(a)!=="body"),r=null;const s=ui(t).position==="fixed";let o=s?Fr(t):t;for(;ci(o)&&!Co(o);){const a=ui(o),l=qp(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||nl(o)&&!l&&xy(t,o))?i=i.filter(d=>d!==o):r=a,o=Fr(o)}return e.set(t,i),i}function V1(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Pu(e)?[]:H1(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,d)=>{const f=qg(e,d,r);return c.top=Mn(f.top,c.top),c.right=Ir(f.right,c.right),c.bottom=Ir(f.bottom,c.bottom),c.left=Mn(f.left,c.left),c},qg(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function G1(t){const{width:e,height:n}=gy(t);return{width:e,height:n}}function W1(t,e,n){const i=wi(e),r=Ti(e),s=n==="fixed",o=ys(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Si(0);if(i||!i&&!s)if((zo(e)!=="body"||nl(r))&&(a=Du(e)),i){const h=ys(e,!0,s,e);l.x=h.x+e.clientLeft,l.y=h.y+e.clientTop}else r&&(l.x=Qp(r));const c=r&&!i&&!s?_y(r,a):Si(0),d=o.left+a.scrollLeft-l.x-c.x,f=o.top+a.scrollTop-l.y-c.y;return{x:d,y:f,width:o.width,height:o.height}}function _d(t){return ui(t).position==="static"}function Yg(t,e){if(!wi(t)||ui(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Ti(t)===n&&(n=n.ownerDocument.body),n}function yy(t,e){const n=bn(t);if(Pu(t))return n;if(!wi(t)){let r=Fr(t);for(;r&&!Co(r);){if(ci(r)&&!_d(r))return r;r=Fr(r)}return n}let i=Yg(t,e);for(;i&&L1(i)&&_d(i);)i=Yg(i,e);return i&&Co(i)&&_d(i)&&!qp(i)?n:i||N1(t)||n}const j1=async function(t){const e=this.getOffsetParent||yy,n=this.getDimensions,i=await n(t.floating);return{reference:W1(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function X1(t){return ui(t).direction==="rtl"}const $1={convertOffsetParentRelativeRectToViewportRelativeRect:F1,getDocumentElement:Ti,getClippingRect:V1,getOffsetParent:yy,getElementRects:j1,getClientRects:O1,getDimensions:G1,getScale:lo,isElement:ci,isRTL:X1};function Sy(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function q1(t,e){let n=null,i;const r=Ti(t);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=t.getBoundingClientRect(),{left:d,top:f,width:h,height:m}=c;if(a||e(),!h||!m)return;const _=Dl(f),g=Dl(r.clientWidth-(d+h)),p=Dl(r.clientHeight-(f+m)),u=Dl(d),x={rootMargin:-_+"px "+-g+"px "+-p+"px "+-u+"px",threshold:Mn(0,Ir(1,l))||1};let y=!0;function b(A){const T=A[0].intersectionRatio;if(T!==l){if(!y)return o();T?o(!1,T):i=setTimeout(()=>{o(!1,1e-7)},1e3)}T===1&&!Sy(c,t.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return o(!0),s}function Y1(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Kp(t),d=r||s?[...c?Va(c):[],...Va(e)]:[];d.forEach(u=>{r&&u.addEventListener("scroll",n,{passive:!0}),s&&u.addEventListener("resize",n)});const f=c&&a?q1(c,n):null;let h=-1,m=null;o&&(m=new ResizeObserver(u=>{let[v]=u;v&&v.target===c&&m&&(m.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=m)==null||x.observe(e)})),n()}),c&&!l&&m.observe(c),m.observe(e));let _,g=l?ys(t):null;l&&p();function p(){const u=ys(t);g&&!Sy(g,u)&&n(),g=u,_=requestAnimationFrame(p)}return n(),()=>{var u;d.forEach(v=>{r&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),f==null||f(),(u=m)==null||u.disconnect(),m=null,l&&cancelAnimationFrame(_)}}const K1=C1,Q1=R1,Z1=T1,J1=D1,eb=b1,Kg=w1,tb=P1,nb=(t,e,n)=>{const i=new Map,r={platform:$1,...n},s={...r.platform,_c:i};return M1(t,e,{...r,platform:s})};var gc=typeof document<"u"?I.useLayoutEffect:I.useEffect;function eu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!eu(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const s=r[i];if(!(s==="_owner"&&t.$$typeof)&&!eu(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Ey(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Qg(t,e){const n=Ey(t);return Math.round(e*n)/n}function xd(t){const e=I.useRef(t);return gc(()=>{e.current=t}),e}function ib(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[d,f]=I.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,m]=I.useState(i);eu(h,i)||m(i);const[_,g]=I.useState(null),[p,u]=I.useState(null),v=I.useCallback(D=>{D!==A.current&&(A.current=D,g(D))},[]),x=I.useCallback(D=>{D!==T.current&&(T.current=D,u(D))},[]),y=s||_,b=o||p,A=I.useRef(null),T=I.useRef(null),P=I.useRef(d),M=l!=null,S=xd(l),L=xd(r),B=xd(c),z=I.useCallback(()=>{if(!A.current||!T.current)return;const D={placement:e,strategy:n,middleware:h};L.current&&(D.platform=L.current),nb(A.current,T.current,D).then(j=>{const Q={...j,isPositioned:B.current!==!1};k.current&&!eu(P.current,Q)&&(P.current=Q,el.flushSync(()=>{f(Q)}))})},[h,e,n,L,B]);gc(()=>{c===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,f(D=>({...D,isPositioned:!1})))},[c]);const k=I.useRef(!1);gc(()=>(k.current=!0,()=>{k.current=!1}),[]),gc(()=>{if(y&&(A.current=y),b&&(T.current=b),y&&b){if(S.current)return S.current(y,b,z);z()}},[y,b,z,S,M]);const $=I.useMemo(()=>({reference:A,floating:T,setReference:v,setFloating:x}),[v,x]),V=I.useMemo(()=>({reference:y,floating:b}),[y,b]),q=I.useMemo(()=>{const D={position:n,left:0,top:0};if(!V.floating)return D;const j=Qg(V.floating,d.x),Q=Qg(V.floating,d.y);return a?{...D,transform:"translate("+j+"px, "+Q+"px)",...Ey(V.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:j,top:Q}},[n,a,V.floating,d.x,d.y]);return I.useMemo(()=>({...d,update:z,refs:$,elements:V,floatingStyles:q}),[d,z,$,V,q])}const rb=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?Kg({element:i.current,padding:r}).fn(n):{}:i?Kg({element:i,padding:r}).fn(n):{}}}},sb=(t,e)=>({...K1(t),options:[t,e]}),ob=(t,e)=>({...Q1(t),options:[t,e]}),ab=(t,e)=>({...tb(t),options:[t,e]}),lb=(t,e)=>({...Z1(t),options:[t,e]}),cb=(t,e)=>({...J1(t),options:[t,e]}),ub=(t,e)=>({...eb(t),options:[t,e]}),db=(t,e)=>({...rb(t),options:[t,e]});var fb="Arrow",My=I.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...s}=t;return C.jsx(Vt.svg,{...s,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:C.jsx("polygon",{points:"0,0 30,0 15,10"})})});My.displayName=fb;var hb=My;function wy(t){const[e,n]=I.useState(void 0);return xs(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var Ty="Popper",[by,Ay]=tl(Ty),[yL,Cy]=by(Ty),Ry="PopperAnchor",Py=I.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,s=Cy(Ry,n),o=I.useRef(null),a=Wn(e,o);return I.useEffect(()=>{s.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:C.jsx(Vt.div,{...r,ref:a})});Py.displayName=Ry;var Zp="PopperContent",[pb,mb]=by(Zp),Dy=I.forwardRef((t,e)=>{var le,Te,$e,Ce,pt,lt;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:m="optimized",onPlaced:_,...g}=t,p=Cy(Zp,n),[u,v]=I.useState(null),x=Wn(e,ke=>v(ke)),[y,b]=I.useState(null),A=wy(y),T=(A==null?void 0:A.width)??0,P=(A==null?void 0:A.height)??0,M=i+(s!=="center"?"-"+s:""),S=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},L=Array.isArray(c)?c:[c],B=L.length>0,z={padding:S,boundary:L.filter(vb),altBoundary:B},{refs:k,floatingStyles:$,placement:V,isPositioned:q,middlewareData:D}=ib({strategy:"fixed",placement:M,whileElementsMounted:(...ke)=>Y1(...ke,{animationFrame:m==="always"}),elements:{reference:p.anchor},middleware:[sb({mainAxis:r+P,alignmentAxis:o}),l&&ob({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?ab():void 0,...z}),l&&lb({...z}),cb({...z,apply:({elements:ke,rects:N,availableWidth:an,availableHeight:je})=>{const{width:We,height:Me}=N.reference,Je=ke.floating.style;Je.setProperty("--radix-popper-available-width",`${an}px`),Je.setProperty("--radix-popper-available-height",`${je}px`),Je.setProperty("--radix-popper-anchor-width",`${We}px`),Je.setProperty("--radix-popper-anchor-height",`${Me}px`)}}),y&&db({element:y,padding:a}),_b({arrowWidth:T,arrowHeight:P}),h&&ub({strategy:"referenceHidden",...z})]}),[j,Q]=Iy(V),re=Mi(_);xs(()=>{q&&(re==null||re())},[q,re]);const Se=(le=D.arrow)==null?void 0:le.x,Ve=(Te=D.arrow)==null?void 0:Te.y,K=(($e=D.arrow)==null?void 0:$e.centerOffset)!==0,[ae,pe]=I.useState();return xs(()=>{u&&pe(window.getComputedStyle(u).zIndex)},[u]),C.jsx("div",{ref:k.setFloating,"data-radix-popper-content-wrapper":"",style:{...$,transform:q?$.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ae,"--radix-popper-transform-origin":[(Ce=D.transformOrigin)==null?void 0:Ce.x,(pt=D.transformOrigin)==null?void 0:pt.y].join(" "),...((lt=D.hide)==null?void 0:lt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:C.jsx(pb,{scope:n,placedSide:j,onArrowChange:b,arrowX:Se,arrowY:Ve,shouldHideArrow:K,children:C.jsx(Vt.div,{"data-side":j,"data-align":Q,...g,ref:x,style:{...g.style,animation:q?void 0:"none"}})})})});Dy.displayName=Zp;var Ly="PopperArrow",gb={top:"bottom",right:"left",bottom:"top",left:"right"},Ny=I.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,s=mb(Ly,i),o=gb[s.placedSide];return C.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:C.jsx(hb,{...r,ref:n,style:{...r.style,display:"block"}})})});Ny.displayName=Ly;function vb(t){return t!==null}var _b=t=>({name:"transformOrigin",options:t,fn(e){var p,u,v;const{placement:n,rects:i,middlewareData:r}=e,o=((p=r.arrow)==null?void 0:p.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,d]=Iy(n),f={start:"0%",center:"50%",end:"100%"}[d],h=(((u=r.arrow)==null?void 0:u.x)??0)+a/2,m=(((v=r.arrow)==null?void 0:v.y)??0)+l/2;let _="",g="";return c==="bottom"?(_=o?f:`${h}px`,g=`${-l}px`):c==="top"?(_=o?f:`${h}px`,g=`${i.floating.height+l}px`):c==="right"?(_=`${-l}px`,g=o?f:`${m}px`):c==="left"&&(_=`${i.floating.width+l}px`,g=o?f:`${m}px`),{data:{x:_,y:g}}}});function Iy(t){const[e,n="center"]=t.split("-");return[e,n]}var xb=Py,yb=Dy,Sb=Ny,[Lu,SL]=tl("Tooltip",[Ay]),Jp=Ay(),Uy="TooltipProvider",Eb=700,Zg="tooltip.open",[Mb,Fy]=Lu(Uy),Oy=t=>{const{__scopeTooltip:e,delayDuration:n=Eb,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:s}=t,o=I.useRef(!0),a=I.useRef(!1),l=I.useRef(0);return I.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),C.jsx(Mb,{scope:e,isOpenDelayedRef:o,delayDuration:n,onOpen:I.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:I.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,i)},[i]),isPointerInTransitRef:a,onPointerInTransitChange:I.useCallback(c=>{a.current=c},[]),disableHoverableContent:r,children:s})};Oy.displayName=Uy;var ky="Tooltip",[EL,Nu]=Lu(ky),Jf="TooltipTrigger",wb=I.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=Nu(Jf,n),s=Fy(Jf,n),o=Jp(n),a=I.useRef(null),l=Wn(e,a,r.onTriggerChange),c=I.useRef(!1),d=I.useRef(!1),f=I.useCallback(()=>c.current=!1,[]);return I.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),C.jsx(xb,{asChild:!0,...o,children:C.jsx(Vt.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Rt(t.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:Rt(t.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:Rt(t.onPointerDown,()=>{r.open&&r.onClose(),c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Rt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Rt(t.onBlur,r.onClose),onClick:Rt(t.onClick,r.onClose)})})});wb.displayName=Jf;var Tb="TooltipPortal",[ML,bb]=Lu(Tb,{forceMount:void 0}),Ro="TooltipContent",By=I.forwardRef((t,e)=>{const n=bb(Ro,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...s}=t,o=Nu(Ro,t.__scopeTooltip);return C.jsx(Bp,{present:i||o.open,children:o.disableHoverableContent?C.jsx(zy,{side:r,...s,ref:e}):C.jsx(Ab,{side:r,...s,ref:e})})}),Ab=I.forwardRef((t,e)=>{const n=Nu(Ro,t.__scopeTooltip),i=Fy(Ro,t.__scopeTooltip),r=I.useRef(null),s=Wn(e,r),[o,a]=I.useState(null),{trigger:l,onClose:c}=n,d=r.current,{onPointerInTransitChange:f}=i,h=I.useCallback(()=>{a(null),f(!1)},[f]),m=I.useCallback((_,g)=>{const p=_.currentTarget,u={x:_.clientX,y:_.clientY},v=Lb(u,p.getBoundingClientRect()),x=Nb(u,v),y=Ib(g.getBoundingClientRect()),b=Fb([...x,...y]);a(b),f(!0)},[f]);return I.useEffect(()=>()=>h(),[h]),I.useEffect(()=>{if(l&&d){const _=p=>m(p,d),g=p=>m(p,l);return l.addEventListener("pointerleave",_),d.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",_),d.removeEventListener("pointerleave",g)}}},[l,d,m,h]),I.useEffect(()=>{if(o){const _=g=>{const p=g.target,u={x:g.clientX,y:g.clientY},v=(l==null?void 0:l.contains(p))||(d==null?void 0:d.contains(p)),x=!Ub(u,o);v?h():x&&(h(),c())};return document.addEventListener("pointermove",_),()=>document.removeEventListener("pointermove",_)}},[l,d,o,c,h]),C.jsx(zy,{...t,ref:s})}),[Cb,Rb]=Lu(ky,{isInside:!1}),Pb=Vw("TooltipContent"),zy=I.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=Nu(Ro,n),c=Jp(n),{onClose:d}=l;return I.useEffect(()=>(document.addEventListener(Zg,d),()=>document.removeEventListener(Zg,d)),[d]),I.useEffect(()=>{if(l.trigger){const f=h=>{const m=h.target;m!=null&&m.contains(l.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,d]),C.jsx(kp,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:C.jsxs(yb,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[C.jsx(Pb,{children:i}),C.jsx(Cb,{scope:n,isInside:!0,children:C.jsx(cT,{id:l.contentId,role:"tooltip",children:r||i})})]})})});By.displayName=Ro;var Hy="TooltipArrow",Db=I.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=Jp(n);return Rb(Hy,n).isInside?null:C.jsx(Sb,{...r,...i,ref:e})});Db.displayName=Hy;function Lb(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,i,r,s)){case s:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function Nb(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function Ib(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function Ub(t,e){const{x:n,y:i}=t;let r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s].x,l=e[s].y,c=e[o].x,d=e[o].y;l>i!=d>i&&n<(c-a)*(i-l)/(d-l)+a&&(r=!r)}return r}function Fb(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),Ob(e)}function Ob(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var kb=Oy,Vy=By;const Bb=kb,zb=I.forwardRef(({className:t,sideOffset:e=4,...n},i)=>C.jsx(Vy,{ref:i,sideOffset:e,className:Cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",t),...n}));zb.displayName=Vy.displayName;const Hb={theme:"system",setTheme:()=>null},Gy=I.createContext(Hb);function Vb({children:t,defaultTheme:e="system",storageKey:n="theme",...i}){const[r,s]=I.useState(()=>localStorage.getItem(n)||e);I.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),r==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(r)},[r]);const o={theme:r,setTheme:a=>{localStorage.setItem(n,a),s(a)}};return C.jsx(Gy.Provider,{...i,value:o,children:t})}const Wy=()=>{const t=I.useContext(Gy);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t};function Gb(t){const e=I.useRef({value:t,previous:t});return I.useMemo(()=>(e.current.value!==t&&(e.current.previous=e.current.value,e.current.value=t),e.current.previous),[t])}var em="Switch",[Wb,wL]=tl(em),[jb,Xb]=Wb(em),jy=I.forwardRef((t,e)=>{const{__scopeSwitch:n,name:i,checked:r,defaultChecked:s,required:o,disabled:a,value:l="on",onCheckedChange:c,form:d,...f}=t,[h,m]=I.useState(null),_=Wn(e,x=>m(x)),g=I.useRef(!1),p=h?d||!!h.closest("form"):!0,[u=!1,v]=Ix({prop:r,defaultProp:s,onChange:c});return C.jsxs(jb,{scope:n,checked:u,disabled:a,children:[C.jsx(Vt.button,{type:"button",role:"switch","aria-checked":u,"aria-required":o,"data-state":qy(u),"data-disabled":a?"":void 0,disabled:a,value:l,...f,ref:_,onClick:Rt(t.onClick,x=>{v(y=>!y),p&&(g.current=x.isPropagationStopped(),g.current||x.stopPropagation())})}),p&&C.jsx($b,{control:h,bubbles:!g.current,name:i,value:l,checked:u,required:o,disabled:a,form:d,style:{transform:"translateX(-100%)"}})]})});jy.displayName=em;var Xy="SwitchThumb",$y=I.forwardRef((t,e)=>{const{__scopeSwitch:n,...i}=t,r=Xb(Xy,n);return C.jsx(Vt.span,{"data-state":qy(r.checked),"data-disabled":r.disabled?"":void 0,...i,ref:e})});$y.displayName=Xy;var $b=t=>{const{control:e,checked:n,bubbles:i=!0,...r}=t,s=I.useRef(null),o=Gb(n),a=wy(e);return I.useEffect(()=>{const l=s.current,c=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(c,"checked").set;if(o!==n&&f){const h=new Event("click",{bubbles:i});f.call(l,n),l.dispatchEvent(h)}},[o,n,i]),C.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...r,tabIndex:-1,ref:s,style:{...t.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function qy(t){return t?"checked":"unchecked"}var Yy=jy,qb=$y;const eh=I.forwardRef(({className:t,...e},n)=>C.jsx(Yy,{className:Cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...e,ref:n,children:C.jsx(qb,{className:Cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));eh.displayName=Yy.displayName;var Yb="Label",Ky=I.forwardRef((t,e)=>C.jsx(Vt.label,{...t,ref:e,onMouseDown:n=>{var r;n.target.closest("button, input, select, textarea")||((r=t.onMouseDown)==null||r.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Ky.displayName=Yb;var Qy=Ky;const Kb=Gp("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Js=I.forwardRef(({className:t,...e},n)=>C.jsx(Qy,{ref:n,className:Cn(Kb(),t),...e}));Js.displayName=Qy.displayName;const Qb=()=>{const[t,e]=I.useState(!1);return C.jsxs("a",{href:"https://techforpalestine.org/",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center justify-center py-1 px-3 text-sm font-medium transition-all rounded-full ${t?"bg-gradient-to-r from-green-600 via-white to-red-600 text-black":"bg-transparent border border-primary/30 text-foreground/80 hover:border-primary"}`,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[C.jsx("span",{className:"mr-1 text-xs",children:"Free Palestine"}),C.jsx("span",{className:`text-xs ${t?"":"text-opacity-80"}`,children:"🇵🇸"})]})};function Zb({activeSection:t}){const[e,n]=I.useState(!1),[i,r]=I.useState(!1),{theme:s,setTheme:o}=Wy();I.useEffect(()=>{const d=()=>{r(window.scrollY>10)};return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]);const a=(d,f)=>{d.preventDefault();const h=document.getElementById(f);h&&window.scrollTo({top:h.offsetTop-80,behavior:"smooth"}),n(!1)},l=[{id:"about",text:"About"},{id:"skills",text:"Skills"},{id:"experience",text:"Experience"},{id:"contact",text:"Contact"}],c=()=>{o(s==="dark"?"light":"dark")};return C.jsx("header",{className:`fixed top-0 w-full z-50 transition-all duration-300 ${i?"bg-background/90 shadow-sm backdrop-blur-sm":"bg-background/100"}`,children:C.jsxs("div",{className:"container mx-auto px-6 py-4",children:[C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsxs("div",{className:"flex items-center space-x-4",children:[C.jsxs("a",{href:"#",className:"text-xl font-heading font-bold text-primary",children:["Razine",C.jsx("span",{className:"text-foreground",children:".Bensari"})]}),C.jsx(Qb,{})]}),C.jsxs("div",{className:"hidden md:flex items-center space-x-10",children:[C.jsx("nav",{className:"flex space-x-10",children:l.map(d=>C.jsx("a",{href:`#${d.id}`,className:`transition-colors font-medium ${t===d.id?"text-primary":"text-foreground hover:text-primary"}`,onClick:f=>a(f,d.id),children:d.text},d.id))}),C.jsxs("div",{className:"flex items-center space-x-2",children:[C.jsx(eh,{id:"theme-toggle",checked:s==="dark",onCheckedChange:c,className:"data-[state=checked]:bg-secondary"}),C.jsx(Js,{htmlFor:"theme-toggle",className:"cursor-pointer",children:s==="dark"?C.jsx("i",{className:"fas fa-moon text-secondary"}):C.jsx("i",{className:"fas fa-sun text-primary"})})]})]}),C.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[C.jsx(eh,{id:"theme-toggle-mobile",checked:s==="dark",onCheckedChange:c,className:"data-[state=checked]:bg-secondary"}),C.jsx("button",{onClick:()=>n(!e),className:"text-foreground focus:outline-none","aria-label":"Toggle menu",children:C.jsx("i",{className:`fas ${e?"fa-times":"fa-bars"} text-xl`})})]})]}),C.jsx("div",{className:`md:hidden ${e?"block":"hidden"} pt-4 pb-2`,children:C.jsx("div",{className:"flex flex-col space-y-3",children:l.map(d=>C.jsx("a",{href:`#${d.id}`,className:`py-2 transition-colors font-medium ${t===d.id?"text-primary":"text-foreground hover:text-primary"}`,onClick:f=>a(f,d.id),children:d.text},d.id))})})]})})}const Jb=Gp("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),tm=I.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?zw:"button";return C.jsx(o,{className:Cn(Jb({variant:e,size:n,className:t})),ref:s,...r})});tm.displayName="Button";function eA(){const t=e=>{const n=document.getElementById(e);n&&window.scrollTo({top:n.offsetTop-80,behavior:"smooth"})};return C.jsx("section",{id:"about",className:"pt-32 pb-20 px-6 md:pt-40 md:pb-28",children:C.jsx("div",{className:"container mx-auto max-w-6xl",children:C.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[C.jsx("div",{className:"md:w-2/5 mb-10 md:mb-0",children:C.jsx("div",{className:"rounded-full w-64 h-64 mx-auto md:mx-0 overflow-hidden border-4 border-primary shadow-xl bg-secondary/10",children:C.jsx("img",{src:"/assets/images/profile-pic.png",alt:"Razine Bensari",className:"w-full h-full object-cover"})})}),C.jsxs("div",{className:"md:w-3/5 md:pl-10",children:[C.jsxs("h1",{className:"text-4xl md:text-5xl font-bold font-heading mb-2",children:[C.jsx("span",{className:"text-foreground",children:"Hi, I'm "}),C.jsx("span",{className:"text-primary",children:"Razine Bensari"})]}),C.jsx("h2",{className:"text-2xl md:text-3xl text-secondary/80 mb-6 font-heading",children:"Software Engineer"}),C.jsx("p",{className:"text-lg text-foreground/80 mb-8 leading-relaxed",children:"Passionate about building scalable, high-performance systems that power modern applications. With experience spanning backend development, full-stack engineering, and DevOps, I specialize in designing robust, data-driven architectures and solving complex system design challenges."}),C.jsx("div",{className:"flex flex-wrap gap-4",children:C.jsx(tm,{size:"lg",className:"bg-primary hover:bg-primary/80 text-white",onClick:()=>t("contact"),children:"Get in Touch"})}),C.jsxs("div",{className:"flex gap-4 mt-8",children:[C.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-foreground/70 hover:text-primary transition-colors","aria-label":"GitHub",children:C.jsx("i",{className:"fab fa-github text-2xl"})}),C.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-foreground/70 hover:text-primary transition-colors","aria-label":"LinkedIn",children:C.jsx("i",{className:"fab fa-linkedin text-2xl"})}),C.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-foreground/70 hover:text-primary transition-colors","aria-label":"Twitter",children:C.jsx("i",{className:"fab fa-twitter text-2xl"})})]})]})]})})})}const tA=[{name:"Kotlin / Java / Spring Boot",level:9,description:"Proficient in developing robust springboot powered backend services using modern Java and Kotlin, with a strong grasp of OOP, concurrency, and performance optimization."},{name:"API Design (RESTful & gRPC)",level:9,description:"Hands-on experience designing and implementing robust RESTful and gRPC APIs to power modern web applications. Focused on clean interfaces, consistent data contracts, authentication, and scalable CRUD operations across services."},{name:"Apache Kafka",level:8,description:"Solid understanding of distributed streaming platforms, with experience designing event-driven architectures and implementing producers, consumers, and stream processors."},{name:"SQL / NoSQL",level:7,description:"Skilled in relational and non-relational database systems, including schema design, query optimization, and working with technologies like PostgreSQL, MySQL, and MongoDB, Redis and Elastic search"},{name:"Docker / Kubernetes",level:7,description:"Capable of containerizing applications and deploying them at scale using Docker and Kubernetes. Familiar with Helm, service discovery, and orchestration best practices."}],nA=[{title:"System Design & Distributed Systems",description:"Designing scalable, fault-tolerant systems using industry best practices in distributed computing, service decomposition, and asynchronous communication.",icon:"fa-code"},{title:"Backend Development",description:"Expertise in building high-performance backend services, APIs, and middleware with focus on modular design, testability, and observability.",icon:"fa-server"},{title:"Big Data Processing & Streaming",description:"Proficient in working with large-scale data pipelines using Kafka and batch/stream processing frameworks to enable real-time data flow and analytics as well as designing efficient schema, optimizing queries, and implementing data persistence strategies.",icon:"fa-database"},{title:"Cloud Architecture & Services",description:"Hands-on experience deploying, monitoring, and maintaining cloud-native applications across AWS and Azure with emphasis on scalability, security, and cost optimization.",icon:"fa-cloud"}],Jg=[{title:"Software Engineer III",company:"ExpediaGroup",period:"March 2025 - Present",description:"Work on semantics engineering and taxonomy. Working with low latency and high volumes services, both in terms of data and traffic.",skills:["Kotlin","AWS","Springboot","GraphQL/Grpc","Apache Kafka"],icon:"fa-plane"},{title:"Software Engineer II",company:"Zepz",period:"July 2024 - March 2025",description:"Developed international money transfer solutions. Responsible of high throughput, fault-tolerant ledger system and treasury related applications.",skills:["Java","Grpc","Springboot","Financial Systems","Ledger","PostgreSQL","AWS"],icon:"fa-dollar-sign"},{title:"Full-stack Software Engineer II",company:"Aptum/CloudOps",period:"Otcober 2020 - March 2024",description:"Created cloud infrastructure management tools and monitoring systems. Improved reliability and performance of services.",skills:["Vue.js","Java","Mysql","GCP","Azure","AWS","Elastic Search","Apache Kafka"],icon:"fa-cloud"},{title:"Full-stack Software Engineer (internship)",company:"SAP",period:"May 2019 - August 2019 / May 2020 - August 2020",description:"Integrated SAP systems with custom applications and third-party services. Played a lot of pingpong and learned Odata services and an in-house UI framework based on ZK.",skills:["Java","ZKFramework","SAP Commerce","Odata","Groovy","Spock"],icon:"fa-database"},{title:"Software Developer (internship)",company:"YellowPages",period:"2018 - 2019",description:"Worked on data syndication of merchants and automated testing using TestRail and MochaJS. I learned all the basics of web development and software engineering life cycle",skills:["HTML/CSS","MochaJS","TestRail","Java","Springboot","MongoDB","AngularJS"],icon:"fa-store"}];function iA(){const t=e=>{const i=[];for(let r=1;r<=10;r++)i.push(C.jsx("div",{className:`h-3 w-3 rounded-full ${r<=e?"bg-primary":"bg-muted border border-primary/20"}`},r));return C.jsx("div",{className:"flex space-x-1 mt-1",children:i})};return C.jsx("section",{id:"skills",className:"py-20 bg-muted/30",children:C.jsxs("div",{className:"container mx-auto max-w-6xl px-6",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-4",children:"My Skills"}),C.jsx("p",{className:"text-lg text-foreground/70 max-w-2xl mx-auto",children:"I've worked with a variety of technologies across the software development stack. Here are some of the key skills I've developed over the years."}),C.jsxs("div",{className:"flex items-center justify-center mt-4 text-sm text-foreground/60",children:[C.jsx("span",{className:"mr-2",children:"Skill level scale:"}),C.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-primary mr-1"}),C.jsx("span",{children:"1 (Beginner) to 10 (Expert)"})]})]}),C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch",children:[C.jsxs("div",{className:"h-full flex flex-col",children:[C.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Technical Skills"}),tA.map(e=>C.jsxs("div",{className:"mb-8 bg-card rounded-lg p-5 border border-border shadow-sm min-h-[140px]",children:[C.jsxs("div",{className:"flex justify-between mb-2",children:[C.jsx("span",{className:"font-medium text-foreground",children:e.name}),C.jsxs("span",{className:"text-sm font-semibold text-primary",children:[e.level,"/10"]})]}),t(e.level),C.jsx("p",{className:"mt-3 text-sm text-foreground/70",children:e.description})]},e.name))]}),C.jsxs("div",{className:"h-full flex flex-col",children:[C.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Areas of Expertise"}),C.jsx("div",{className:"flex flex-col gap-20 pt-4 pb-4 h-full justify-center",children:nA.map(e=>C.jsxs("div",{className:"bg-card py-4 px-4 rounded-lg shadow-sm border border-border transition-all hover:shadow-md flex min-h-[140px]",children:[C.jsx("div",{className:"text-primary mr-3 mt-1 flex-shrink-0",children:C.jsx("i",{className:`fas ${e.icon} text-2xl text-primary`})}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-base md:text-lg font-semibold mb-1",children:e.title}),C.jsx("p",{className:"text-sm md:text-base text-foreground/70 line-clamp-2",children:e.description})]})]},e.title))})]})]})]})})}function rA(){return C.jsx("section",{id:"experience",className:"py-20",children:C.jsxs("div",{className:"container mx-auto max-w-6xl px-6",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-4",children:"Work Experience"}),C.jsx("p",{className:"text-lg text-foreground/70 max-w-2xl mx-auto",children:"My professional journey across different companies and roles."})]}),C.jsx("div",{className:"relative max-w-4xl mx-auto",children:Jg.map((t,e)=>C.jsxs("div",{className:`timeline-item relative pl-10 ${e<Jg.length-1?"pb-12":""}`,children:[C.jsx("div",{className:"absolute left-0 top-1 bg-primary rounded-full h-7 w-7 flex items-center justify-center",children:t.icon?C.jsx("i",{className:`fas ${t.icon} text-background text-xs`}):C.jsx("div",{className:"bg-background rounded-full h-2 w-2"})}),C.jsxs("div",{className:"bg-card rounded-xl shadow-md border border-border p-6 transition-all hover:shadow-lg",children:[C.jsxs("div",{className:"flex flex-col md:flex-row justify-between mb-4",children:[C.jsxs("div",{className:"flex items-center",children:[C.jsx("div",{className:"w-10 h-10 bg-muted rounded-md flex items-center justify-center mr-3 flex-shrink-0",children:C.jsx("i",{className:`fas ${t.icon||"fa-building"} text-primary`})}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-xl font-bold",children:t.title}),C.jsx("p",{className:"text-primary font-medium",children:t.company})]})]}),C.jsx("div",{className:"mt-2 md:mt-0",children:C.jsx("p",{className:"text-foreground/70 bg-muted px-3 py-1 rounded-full text-sm inline-block",children:t.period})})]}),C.jsx("p",{className:"text-foreground/80",children:t.description}),C.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:t.skills.map((n,i)=>C.jsx("span",{className:"bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium",children:n},i))})]})]},e))})]})})}const vc=I.forwardRef(({className:t,type:e,...n},i)=>C.jsx("input",{type:e,className:Cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:i,...n}));vc.displayName="Input";const Zy=I.forwardRef(({className:t,...e},n)=>C.jsx("textarea",{className:Cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:n,...e}));Zy.displayName="Textarea";function sA(){const{toast:t}=bx(),[e,n]=I.useState({name:"",email:"",subject:"",message:""}),[i,r]=I.useState(!1),s=a=>{const{name:l,value:c}=a.target;n(d=>({...d,[l]:c}))},o=a=>{a.preventDefault(),r(!0),setTimeout(()=>{t({title:"Message Sent!",description:"Thank you for reaching out. I'll get back to you soon."}),n({name:"",email:"",subject:"",message:""}),r(!1)},1e3)};return C.jsx("section",{id:"contact",className:"py-20 bg-muted/30",children:C.jsxs("div",{className:"container mx-auto max-w-6xl px-6",children:[C.jsxs("div",{className:"text-center mb-16",children:[C.jsx("h2",{className:"text-3xl md:text-4xl font-bold font-heading mb-4",children:"Get In Touch"}),C.jsx("p",{className:"text-lg text-foreground/70 max-w-2xl mx-auto",children:"Have a project in mind or just want to say hello? Feel free to reach out!"})]}),C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[C.jsxs("div",{className:"bg-card rounded-xl shadow-md p-8 border border-border",children:[C.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Contact Information"}),C.jsxs("div",{className:"space-y-4",children:[C.jsxs("div",{className:"flex items-start",children:[C.jsx("div",{className:"bg-primary/10 rounded-full p-3 mr-4",children:C.jsx("i",{className:"fas fa-envelope text-primary"})}),C.jsxs("div",{children:[C.jsx("p",{className:"font-medium text-foreground",children:"Email"}),C.jsx("a",{href:"mailto:razine.bensari@gmail.com",className:"text-primary hover:underline",children:"razine.bensari@gmail.com"})]})]}),C.jsxs("div",{className:"flex items-start",children:[C.jsx("div",{className:"bg-primary/10 rounded-full p-3 mr-4",children:C.jsx("i",{className:"fas fa-map-marker-alt text-primary"})}),C.jsxs("div",{children:[C.jsx("p",{className:"font-medium text-foreground",children:"Location"}),C.jsx("p",{className:"text-foreground/70",children:"Montreal, QC"})]})]}),C.jsxs("div",{className:"flex items-start",children:[C.jsx("div",{className:"bg-primary/10 rounded-full p-3 mr-4",children:C.jsx("i",{className:"fas fa-clock text-primary"})}),C.jsxs("div",{children:[C.jsx("p",{className:"font-medium text-foreground",children:"Availability"}),C.jsx("p",{className:"text-foreground/70",children:"Available for freelance projects, consultation in a part-time capacity"})]})]})]}),C.jsxs("div",{className:"mt-8",children:[C.jsx("h4",{className:"font-medium text-foreground mb-4",children:"Connect with me"}),C.jsxs("div",{className:"flex gap-4",children:[C.jsx("a",{href:"https://github.com/razine-bensari",target:"_blank",rel:"noopener noreferrer",className:"bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors","aria-label":"GitHub",children:C.jsx("i",{className:"fab fa-github text-foreground/70"})}),C.jsx("a",{href:"https://linkedin.com/in/razine-bensari",target:"_blank",rel:"noopener noreferrer",className:"bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors","aria-label":"LinkedIn",children:C.jsx("i",{className:"fab fa-linkedin-in text-foreground/70"})})]})]})]}),C.jsxs("div",{className:"bg-card rounded-xl shadow-md p-8 border border-border",children:[C.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Send a Message"}),C.jsxs("form",{onSubmit:o,className:"space-y-4",children:[C.jsxs("div",{children:[C.jsx(Js,{htmlFor:"name",className:"text-foreground font-medium",children:"Name"}),C.jsx(vc,{id:"name",name:"name",value:e.name,onChange:s,required:!0,className:"w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"})]}),C.jsxs("div",{children:[C.jsx(Js,{htmlFor:"email",className:"text-foreground font-medium",children:"Email"}),C.jsx(vc,{type:"email",id:"email",name:"email",value:e.email,onChange:s,required:!0,className:"w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"})]}),C.jsxs("div",{children:[C.jsx(Js,{htmlFor:"subject",className:"text-foreground font-medium",children:"Subject"}),C.jsx(vc,{id:"subject",name:"subject",value:e.subject,onChange:s,required:!0,className:"w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"})]}),C.jsxs("div",{children:[C.jsx(Js,{htmlFor:"message",className:"text-foreground font-medium",children:"Message"}),C.jsx(Zy,{id:"message",name:"message",rows:5,value:e.message,onChange:s,required:!0,className:"w-full mt-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"})]}),C.jsx(tm,{type:"submit",disabled:i,className:"w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-lg",children:i?"Sending...":"Send Message"})]})]})]})]})})}function oA(){const[t,e]=I.useState(new Date().getFullYear()),n=(i,r)=>{i.preventDefault();const s=document.getElementById(r);s&&window.scrollTo({top:s.offsetTop-80,behavior:"smooth"})};return I.useEffect(()=>{e(new Date().getFullYear())},[]),C.jsx("footer",{className:"bg-background border-t border-border py-12",children:C.jsxs("div",{className:"container mx-auto max-w-6xl px-6",children:[C.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[C.jsxs("div",{className:"mb-6 md:mb-0",children:[C.jsxs("h3",{className:"text-2xl font-bold font-heading mb-2",children:[C.jsx("span",{className:"text-primary",children:"Razine"}),C.jsx("span",{className:"text-foreground",children:" Bensari"})]}),C.jsx("p",{className:"text-foreground/60",children:"Software Engineer"})]}),C.jsx("div",{className:"mb-6 md:mb-0",children:C.jsxs("nav",{className:"flex flex-wrap justify-center gap-x-6 gap-y-2",children:[C.jsx("a",{href:"#about",className:"text-foreground/70 hover:text-primary transition-colors",onClick:i=>n(i,"about"),children:"About"}),C.jsx("a",{href:"#skills",className:"text-foreground/70 hover:text-primary transition-colors",onClick:i=>n(i,"skills"),children:"Skills"}),C.jsx("a",{href:"#experience",className:"text-foreground/70 hover:text-primary transition-colors",onClick:i=>n(i,"experience"),children:"Experience"}),C.jsx("a",{href:"#contact",className:"text-foreground/70 hover:text-primary transition-colors",onClick:i=>n(i,"contact"),children:"Contact"})]})}),C.jsxs("div",{className:"flex gap-4",children:[C.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",className:"text-foreground/70 hover:text-primary transition-colors","aria-label":"GitHub",children:C.jsx("i",{className:"fab fa-github text-xl"})}),C.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"text-foreground/70 hover:text-primary transition-colors","aria-label":"LinkedIn",children:C.jsx("i",{className:"fab fa-linkedin text-xl"})}),C.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"text-foreground/70 hover:text-primary transition-colors","aria-label":"Twitter",children:C.jsx("i",{className:"fab fa-twitter text-xl"})})]})]}),C.jsx("div",{className:"border-t border-border mt-8 pt-8 text-center",children:C.jsxs("p",{className:"text-foreground/60",children:["© ",t," Razine Bensari. All rights reserved."]})})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nm="176",aA=0,ev=1,lA=2,Jy=1,cA=2,Ui=3,Or=0,mn=1,ki=2,Pr=0,co=1,tv=2,nv=3,iv=4,uA=5,ts=100,dA=101,fA=102,hA=103,pA=104,mA=200,gA=201,vA=202,_A=203,th=204,nh=205,xA=206,yA=207,SA=208,EA=209,MA=210,wA=211,TA=212,bA=213,AA=214,ih=0,rh=1,sh=2,Po=3,oh=4,ah=5,lh=6,ch=7,eS=0,CA=1,RA=2,Dr=0,PA=1,DA=2,LA=3,NA=4,IA=5,UA=6,FA=7,tS=300,Do=301,Lo=302,uh=303,dh=304,Iu=306,fh=1e3,os=1001,hh=1002,oi=1003,OA=1004,Ll=1005,_i=1006,yd=1007,as=1008,Qi=1009,nS=1010,iS=1011,Ga=1012,im=1013,Ss=1014,Hi=1015,il=1016,rm=1017,sm=1018,Wa=1020,rS=35902,sS=1021,oS=1022,ii=1023,ja=1026,Xa=1027,aS=1028,om=1029,lS=1030,am=1031,lm=1033,_c=33776,xc=33777,yc=33778,Sc=33779,ph=35840,mh=35841,gh=35842,vh=35843,_h=36196,xh=37492,yh=37496,Sh=37808,Eh=37809,Mh=37810,wh=37811,Th=37812,bh=37813,Ah=37814,Ch=37815,Rh=37816,Ph=37817,Dh=37818,Lh=37819,Nh=37820,Ih=37821,Ec=36492,Uh=36494,Fh=36495,cS=36283,Oh=36284,kh=36285,Bh=36286,kA=3200,BA=3201,zA=0,HA=1,pr="",Un="srgb",No="srgb-linear",tu="linear",ot="srgb",As=7680,rv=519,VA=512,GA=513,WA=514,uS=515,jA=516,XA=517,$A=518,qA=519,sv=35044,ov="300 es",Vi=2e3,nu=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=Math.PI/180,zh=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function YA(t,e){return(t%e+e)%e}function Ed(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],g=r[0],p=r[3],u=r[6],v=r[1],x=r[4],y=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*g+a*v+l*b,s[3]=o*p+a*x+l*A,s[6]=o*u+a*y+l*T,s[1]=c*g+d*v+f*b,s[4]=c*p+d*x+f*A,s[7]=c*u+d*y+f*T,s[2]=h*g+m*v+_*b,s[5]=h*p+m*x+_*A,s[8]=h*u+m*y+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,m=c*s-o*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-d*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(d*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=m*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Md.makeScale(e,n)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,n){return this.premultiply(Md.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Md=new Oe;function dS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function iu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KA(){const t=iu("canvas");return t.style.display="block",t}const av={};function Mc(t){t in av||(av[t]=!0,console.warn(t))}function QA(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function ZA(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lv=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eC(){const t={enabled:!0,workingColorSpace:No,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?tu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[No]:{primaries:e,whitePoint:i,transfer:tu,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const Ze=eC();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class tC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cs===void 0&&(Cs=iu("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=iu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nC=0;class cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wd(r[o].image)):s.push(wd(r[o]))}else s=wd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iC=0;class gn extends Ho{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=os,r=os,s=_i,o=as,a=ii,l=Qi,c=gn.DEFAULT_ANISOTROPY,d=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iC++}),this.uuid=rl(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=tS;gn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],g=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(m+1)/2,b=(u+1)/2,A=(d+h)/4,T=(f+g)/4,P=(_+p)/4;return x>y&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-g)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rC extends Ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new cm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends rC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fS extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sC extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=oi,this.minFilter=oi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=g;return}if(f!==g||l!==h||c!==m||d!==_){let p=1-a;const u=l*h+c*m+d*_+f*g,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const b=Math.sqrt(x),A=Math.atan2(b,u*v);p=Math.sin(p*A)/b,a=Math.sin(a*A)/b}const y=a*v;if(l=l*p+h*y,c=c*p+m*y,d=d*p+_*y,f=f*p+g*y,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-a*m,e[n+2]=c*_+d*m+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Td=new G,uv=new sl;class ol{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Il.subVectors(this.max,na),Rs.subVectors(e.a,na),Ps.subVectors(e.b,na),Ds.subVectors(e.c,na),ir.subVectors(Ps,Rs),rr.subVectors(Ds,Ps),jr.subVectors(Rs,Ds);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-jr.z,jr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,jr.z,0,-jr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-jr.y,jr.x,0];return!bd(n,Rs,Ps,Ds,Il)||(n=[1,0,0,0,1,0,0,0,1],!bd(n,Rs,Ps,Ds,Il))?!1:(Ul.crossVectors(ir,rr),n=[Ul.x,Ul.y,Ul.z],bd(n,Rs,Ps,Ds,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new G,new G,new G,new G,new G,new G,new G,new G],qn=new G,Nl=new ol,Rs=new G,Ps=new G,Ds=new G,ir=new G,rr=new G,jr=new G,na=new G,Il=new G,Ul=new G,Xr=new G;function bd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),d=i.dot(Xr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const oC=new ol,ia=new G,Ad=new G;class Uu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Ad)),this.expandByPoint(ia.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new G,Cd=new G,Fl=new G,sr=new G,Rd=new G,Ol=new G,Pd=new G;class hS{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cd.copy(e).add(n).multiplyScalar(.5),Fl.copy(n).sub(e).normalize(),sr.copy(this.origin).sub(Cd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fl),a=sr.dot(this.direction),l=-sr.dot(Fl),c=sr.lengthSq(),d=Math.abs(1-o*o);let f,h,m,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const g=1/d;f*=g,h*=g,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cd).addScaledVector(Fl,h),m}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){Rd.subVectors(n,e),Ol.subVectors(i,e),Pd.crossVectors(Rd,Ol);let o=this.direction.dot(Pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(sr,Ol));if(l<0)return null;const c=a*this.direction.dot(Rd.cross(sr));if(c<0||l+c>o)return null;const d=-a*sr.dot(Pd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,m,_,g,p){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,m,_,g,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,m,_,g,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,m=o*f,_=a*d,g=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,g=c*f;n[0]=h+g*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-_,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,g=c*f;n[0]=h-g*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*d,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,_=a*d,g=a*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,g=a*c;n[0]=l*d,n[4]=g-h*f,n[8]=_*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,g=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+g,n[5]=o*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*d,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aC,e,lC)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),or.crossVectors(i,xn),or.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),or.crossVectors(i,xn)),or.normalize(),kl.crossVectors(xn,or),r[0]=or.x,r[4]=kl.x,r[8]=xn.x,r[1]=or.y,r[5]=kl.y,r[9]=xn.y,r[2]=or.z,r[6]=kl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],g=i[6],p=i[10],u=i[14],v=i[3],x=i[7],y=i[11],b=i[15],A=r[0],T=r[4],P=r[8],M=r[12],S=r[1],L=r[5],B=r[9],z=r[13],k=r[2],$=r[6],V=r[10],q=r[14],D=r[3],j=r[7],Q=r[11],re=r[15];return s[0]=o*A+a*S+l*k+c*D,s[4]=o*T+a*L+l*$+c*j,s[8]=o*P+a*B+l*V+c*Q,s[12]=o*M+a*z+l*q+c*re,s[1]=d*A+f*S+h*k+m*D,s[5]=d*T+f*L+h*$+m*j,s[9]=d*P+f*B+h*V+m*Q,s[13]=d*M+f*z+h*q+m*re,s[2]=_*A+g*S+p*k+u*D,s[6]=_*T+g*L+p*$+u*j,s[10]=_*P+g*B+p*V+u*Q,s[14]=_*M+g*z+p*q+u*re,s[3]=v*A+x*S+y*k+b*D,s[7]=v*T+x*L+y*$+b*j,s[11]=v*P+x*B+y*V+b*Q,s[15]=v*M+x*z+y*q+b*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],g=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+g*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*d-s*l*d)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],g=e[13],p=e[14],u=e[15],v=f*p*c-g*h*c+g*l*m-a*p*m-f*l*u+a*h*u,x=_*h*c-d*p*c-_*l*m+o*p*m+d*l*u-o*h*u,y=d*g*c-_*f*c+_*a*m-o*g*m-d*a*u+o*f*u,b=_*f*l-d*g*l-_*a*h+o*g*h+d*a*p-o*f*p,A=n*v+i*x+r*y+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(g*h*s-f*p*s-g*r*m+i*p*m+f*r*u-i*h*u)*T,e[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=x*T,e[5]=(d*p*s-_*h*s+_*r*m-n*p*m-d*r*u+n*h*u)*T,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*m+n*l*m)*T,e[8]=y*T,e[9]=(_*f*s-d*g*s-_*i*m+n*g*m+d*i*u-n*f*u)*T,e[10]=(o*g*s-_*a*s+_*i*c-n*g*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*m-n*a*m)*T,e[12]=b*T,e[13]=(d*g*r-_*f*r+_*i*h-n*g*h-d*i*p+n*f*p)*T,e[14]=(_*a*r-o*g*r-_*i*l+n*g*l+o*i*p-n*a*p)*T,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,m=s*d,_=s*f,g=o*d,p=o*f,u=a*f,v=l*c,x=l*d,y=l*f,b=i.x,A=i.y,T=i.z;return r[0]=(1-(g+u))*b,r[1]=(m+y)*b,r[2]=(_-x)*b,r[3]=0,r[4]=(m-y)*A,r[5]=(1-(h+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+x)*T,r[9]=(p-v)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ls.set(r[0],r[1],r[2]).length();const o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,d=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===Vi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nu)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*d;let _,g;if(a===Vi)_=(o+s)*f,g=-2*f;else if(a===nu)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ls=new G,Yn=new bt,aC=new G(0,0,0),lC=new G(1,1,1),or=new G,kl=new G,xn=new G,dv=new bt,fv=new sl;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class pS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cC=0;const hv=new G,Ns=new sl,Di=new bt,Bl=new G,ra=new G,uC=new G,dC=new sl,pv=new G(1,0,0),mv=new G(0,1,0),gv=new G(0,0,1),vv={type:"added"},fC={type:"removed"},Is={type:"childadded",child:null},Dd={type:"childremoved",child:null};class vn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cC++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new G,n=new Zi,i=new sl,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Oe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,n){return hv.copy(e).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bl.copy(e):Bl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ra,Bl,this.up):Di.lookAt(Bl,ra,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(Di),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fC),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,uC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,dC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new G(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new G,Li=new G,Ld=new G,Ni=new G,Us=new G,Fs=new G,_v=new G,Nd=new G,Id=new G,Ud=new G,Fd=new Tt,Od=new Tt,kd=new Tt;class ni{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Li.subVectors(i,n),Ld.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Li),l=Kn.dot(Ld),c=Li.dot(Li),d=Li.dot(Ld),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Fd.setScalar(0),Od.setScalar(0),kd.setScalar(0),Fd.fromBufferAttribute(e,n),Od.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fd,s.x),o.addScaledVector(Od,s.y),o.addScaledVector(kd,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Li.subVectors(e,n),Kn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Kn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Fs.subVectors(s,i),Nd.subVectors(e,i);const l=Us.dot(Nd),c=Fs.dot(Nd);if(l<=0&&c<=0)return n.copy(i);Id.subVectors(e,r);const d=Us.dot(Id),f=Fs.dot(Id);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Us,o);Ud.subVectors(e,s);const m=Us.dot(Ud),_=Fs.dot(Ud);if(_>=0&&m<=_)return n.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Fs,a);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return _v.subVectors(s,r),a=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(_v,a);const u=1/(p+g+h);return o=g*u,a=h*u,n.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Bd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=YA(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Bd(o,s,e+1/3),this.g=Bd(o,s,e),this.b=Bd(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=mS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Ze.fromWorkingColorSpace(qt.copy(this),e),Math.round(Xe(qt.r*255,0,255))*65536+Math.round(Xe(qt.g*255,0,255))*256+Math.round(Xe(qt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Un){Ze.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(zl);const i=Ed(ar.h,zl.h,n),r=Ed(ar.s,zl.s,n),s=Ed(ar.l,zl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new rt;rt.NAMES=mS;let hC=0;class Vo extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=co,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==th&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ru extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=eS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new G,Hl=new at;let pC=0;class Ei{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hl.fromBufferAttribute(this,n),Hl.applyMatrix3(e),this.setXY(n,Hl.x,Hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class gS extends Ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vS extends Ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends Ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mC=0;const Nn=new bt,zd=new vn,Os=new G,yn=new ol,sa=new ol,Ut=new G;class bi extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dS(e)?vS:gS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(yn.min,sa.min),yn.expandByPoint(Ut),Ut.addVectors(yn.max,sa.max),yn.expandByPoint(Ut)):(yn.expandByPoint(sa.min),yn.expandByPoint(sa.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ut.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Ut.add(Os)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new G,l[P]=new G;const c=new G,d=new G,f=new G,h=new at,m=new at,_=new at,g=new G,p=new G;function u(P,M,S){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),m.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(g),a[M].add(g),a[S].add(g),l[P].add(p),l[M].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const S=v[P],L=S.start,B=S.count;for(let z=L,k=L+B;z<k;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new G,y=new G,b=new G,A=new G;function T(P){b.fromBufferAttribute(r,P),A.copy(b);const M=a[P];x.copy(M),x.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(A,M);const L=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,M=v.length;P<M;++P){const S=v[P],L=S.start,B=S.count;for(let z=L,k=L+B;z<k;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,d=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new Ei(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xv=new bt,$r=new hS,Vl=new Uu,yv=new G,Gl=new G,Wl=new G,jl=new G,Hd=new G,Xl=new G,Sv=new G,$l=new G;class zn extends vn{constructor(e=new bi,n=new ru){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Hd.fromBufferAttribute(f,e),o?Xl.addScaledVector(Hd,d):Xl.addScaledVector(Hd.sub(n),d))}n.add(Xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Vl.containsPoint($r.origin)===!1&&($r.intersectSphere(Vl,yv)===null||$r.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(xv.copy(s).invert(),$r.copy(e.ray).applyMatrix4(xv),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,b=x;y<b;y+=3){const A=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);r=ql(this,u,e,i,c,d,f,A,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);r=ql(this,o,e,i,c,d,f,v,x,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,b=x;y<b;y+=3){const A=y,T=y+1,P=y+2;r=ql(this,u,e,i,c,d,f,A,T,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const v=p,x=p+1,y=p+2;r=ql(this,o,e,i,c,d,f,v,x,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function gC(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;$l.copy(a),$l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($l);return c<n.near||c>n.far?null:{distance:c,point:$l.clone(),object:t}}function ql(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Gl),t.getVertexPosition(l,Wl),t.getVertexPosition(c,jl);const d=gC(t,e,n,i,Gl,Wl,jl,Sv);if(d){const f=new G;ni.getBarycoord(Sv,Gl,Wl,jl,f),r&&(d.uv=ni.getInterpolatedAttribute(r,a,l,c,f,new at)),s&&(d.uv1=ni.getInterpolatedAttribute(s,a,l,c,f,new at)),o&&(d.normal=ni.getInterpolatedAttribute(o,a,l,c,f,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};ni.getNormal(Gl,Wl,jl,h.normal),d.face=h,d.barycoord=f}return d}class al extends bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(d,3)),this.setAttribute("uv",new ai(f,2));function _(g,p,u,v,x,y,b,A,T,P,M){const S=y/T,L=b/P,B=y/2,z=b/2,k=A/2,$=T+1,V=P+1;let q=0,D=0;const j=new G;for(let Q=0;Q<V;Q++){const re=Q*L-z;for(let Se=0;Se<$;Se++){const Ve=Se*S-B;j[g]=Ve*v,j[p]=re*x,j[u]=k,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[u]=A>0?1:-1,d.push(j.x,j.y,j.z),f.push(Se/T),f.push(1-Q/P),q+=1}}for(let Q=0;Q<P;Q++)for(let re=0;re<T;re++){const Se=h+re+$*Q,Ve=h+re+$*(Q+1),K=h+(re+1)+$*(Q+1),ae=h+(re+1)+$*Q;l.push(Se,Ve,ae),l.push(Ve,K,ae),D+=6}a.addGroup(m,D,M),m+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Io(t[n]);for(const r in i)e[r]=i[r]}return e}function vC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _S(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const _C={clone:Io,merge:Jt};var xC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xC,this.fragmentShader=yC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=vC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xS extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new G,Ev=new at,Mv=new at;class kn extends xS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,Ev,Mv),n.subVectors(Mv,Ev)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Bs=1;class SC extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(ks,Bs,e,n);r.layers=this.layers,this.add(r);const s=new kn(ks,Bs,e,n);s.layers=this.layers,this.add(s);const o=new kn(ks,Bs,e,n);o.layers=this.layers,this.add(o);const a=new kn(ks,Bs,e,n);a.layers=this.layers,this.add(a);const l=new kn(ks,Bs,e,n);l.layers=this.layers,this.add(l);const c=new kn(ks,Bs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class yS extends gn{constructor(e=[],n=Do,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EC extends Es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new al(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Pr});s.uniforms.tEquirect.value=n;const o=new zn(r,s),a=n.minFilter;return n.minFilter===as&&(n.minFilter=_i),new SC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Yl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MC={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=n.getJointPose(g,i),u=this._getHandJoint(c,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class wC extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gd=new G,TC=new G,bC=new Oe;class Jr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gd.subVectors(i,n).cross(TC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bC.getNormalMatrix(e),r=this.coplanarPoint(Gd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Uu,Kl=new G;class SS{constructor(e=new Jr,n=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],g=r[10],p=r[11],u=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-u).normalize(),i[1].setComponents(l+s,h+c,p+m,y+u).normalize(),i[2].setComponents(l+o,h+d,p+_,y+v).normalize(),i[3].setComponents(l-o,h-d,p-_,y-v).normalize(),i[4].setComponents(l-a,h-f,p-g,y-x).normalize(),n===Vi)i[5].setComponents(l+a,h+f,p+g,y+x).normalize();else if(n===nu)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Kl.x=r.normal.x>0?e.max.x:e.min.x,Kl.y=r.normal.y>0?e.max.y:e.min.y,Kl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ES extends Vo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new G,ou=new G,wv=new bt,oa=new hS,Ql=new Uu,Wd=new G,Tv=new G;class AC extends vn{constructor(e=new bi,n=new ES){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)su.fromBufferAttribute(n,r-1),ou.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=su.distanceTo(ou);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;wv.copy(r).invert(),oa.copy(e.ray).applyMatrix4(wv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const u=d.getX(g),v=d.getX(g+1),x=Zl(this,e,oa,l,u,v,g);x&&n.push(x)}if(this.isLineLoop){const g=d.getX(_-1),p=d.getX(m),u=Zl(this,e,oa,l,g,p,_-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=m,p=_-1;g<p;g+=c){const u=Zl(this,e,oa,l,g,g+1,g);u&&n.push(u)}if(this.isLineLoop){const g=Zl(this,e,oa,l,_-1,m,_-1);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(su.fromBufferAttribute(a,r),ou.fromBufferAttribute(a,s),n.distanceSqToSegment(su,ou,Wd,Tv)>i)return;Wd.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Wd);if(!(c<e.near||c>e.far))return{distance:c,point:Tv.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class MS extends gn{constructor(e,n,i=Ss,r,s,o,a=oi,l=oi,c,d=ja){if(d!==ja&&d!==Xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Fu extends bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,m=[],_=[],g=[],p=[];for(let u=0;u<d;u++){const v=u*h-o;for(let x=0;x<c;x++){const y=x*f-s;_.push(y,-v,0),g.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,y=v+c*(u+1),b=v+1+c*(u+1),A=v+1+c*u;m.push(x,y,A),m.push(y,b,A)}this.setIndex(m),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class au extends bi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new G,h=new G,m=[],_=[],g=[],p=[];for(let u=0;u<=i;u++){const v=[],x=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const A=b/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(A+y,1-x),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const x=d[u][v+1],y=d[u][v],b=d[u+1][v],A=d[u+1][v+1];(u!==0||o>0)&&m.push(x,y,A),(u!==i-1||l<Math.PI)&&m.push(y,b,A)}this.setIndex(m),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class CC extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RC extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class PC extends xS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DC extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function bv(t,e,n,i){const r=LC(i);switch(n){case sS:return t*e;case aS:return t*e/r.components*r.byteLength;case om:return t*e/r.components*r.byteLength;case lS:return t*e*2/r.components*r.byteLength;case am:return t*e*2/r.components*r.byteLength;case oS:return t*e*3/r.components*r.byteLength;case ii:return t*e*4/r.components*r.byteLength;case lm:return t*e*4/r.components*r.byteLength;case _c:case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yc:case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:case vh:return Math.max(t,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(t,8)*Math.max(e,8)/2;case _h:case xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Uh:case Fh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case cS:case Oh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LC(t){switch(t){case Qi:case nS:return{byteLength:1,components:1};case Ga:case iS:case il:return{byteLength:2,components:1};case rm:case sm:return{byteLength:2,components:4};case Ss:case im:case Hi:return{byteLength:4,components:1};case rS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NC(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,f[h]=g)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];t.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var IC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$C=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uR="gl_FragColor = linearToOutputTexel( gl_FragColor );",dR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_R=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ER=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$R=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_P=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$P=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:IC,alphahash_pars_fragment:UC,alphamap_fragment:FC,alphamap_pars_fragment:OC,alphatest_fragment:kC,alphatest_pars_fragment:BC,aomap_fragment:zC,aomap_pars_fragment:HC,batching_pars_vertex:VC,batching_vertex:GC,begin_vertex:WC,beginnormal_vertex:jC,bsdfs:XC,iridescence_fragment:$C,bumpmap_pars_fragment:qC,clipping_planes_fragment:YC,clipping_planes_pars_fragment:KC,clipping_planes_pars_vertex:QC,clipping_planes_vertex:ZC,color_fragment:JC,color_pars_fragment:eR,color_pars_vertex:tR,color_vertex:nR,common:iR,cube_uv_reflection_fragment:rR,defaultnormal_vertex:sR,displacementmap_pars_vertex:oR,displacementmap_vertex:aR,emissivemap_fragment:lR,emissivemap_pars_fragment:cR,colorspace_fragment:uR,colorspace_pars_fragment:dR,envmap_fragment:fR,envmap_common_pars_fragment:hR,envmap_pars_fragment:pR,envmap_pars_vertex:mR,envmap_physical_pars_fragment:bR,envmap_vertex:gR,fog_vertex:vR,fog_pars_vertex:_R,fog_fragment:xR,fog_pars_fragment:yR,gradientmap_pars_fragment:SR,lightmap_pars_fragment:ER,lights_lambert_fragment:MR,lights_lambert_pars_fragment:wR,lights_pars_begin:TR,lights_toon_fragment:AR,lights_toon_pars_fragment:CR,lights_phong_fragment:RR,lights_phong_pars_fragment:PR,lights_physical_fragment:DR,lights_physical_pars_fragment:LR,lights_fragment_begin:NR,lights_fragment_maps:IR,lights_fragment_end:UR,logdepthbuf_fragment:FR,logdepthbuf_pars_fragment:OR,logdepthbuf_pars_vertex:kR,logdepthbuf_vertex:BR,map_fragment:zR,map_pars_fragment:HR,map_particle_fragment:VR,map_particle_pars_fragment:GR,metalnessmap_fragment:WR,metalnessmap_pars_fragment:jR,morphinstance_vertex:XR,morphcolor_vertex:$R,morphnormal_vertex:qR,morphtarget_pars_vertex:YR,morphtarget_vertex:KR,normal_fragment_begin:QR,normal_fragment_maps:ZR,normal_pars_fragment:JR,normal_pars_vertex:eP,normal_vertex:tP,normalmap_pars_fragment:nP,clearcoat_normal_fragment_begin:iP,clearcoat_normal_fragment_maps:rP,clearcoat_pars_fragment:sP,iridescence_pars_fragment:oP,opaque_fragment:aP,packing:lP,premultiplied_alpha_fragment:cP,project_vertex:uP,dithering_fragment:dP,dithering_pars_fragment:fP,roughnessmap_fragment:hP,roughnessmap_pars_fragment:pP,shadowmap_pars_fragment:mP,shadowmap_pars_vertex:gP,shadowmap_vertex:vP,shadowmask_pars_fragment:_P,skinbase_vertex:xP,skinning_pars_vertex:yP,skinning_vertex:SP,skinnormal_vertex:EP,specularmap_fragment:MP,specularmap_pars_fragment:wP,tonemapping_fragment:TP,tonemapping_pars_fragment:bP,transmission_fragment:AP,transmission_pars_fragment:CP,uv_pars_fragment:RP,uv_pars_vertex:PP,uv_vertex:DP,worldpos_vertex:LP,background_vert:NP,background_frag:IP,backgroundCube_vert:UP,backgroundCube_frag:FP,cube_vert:OP,cube_frag:kP,depth_vert:BP,depth_frag:zP,distanceRGBA_vert:HP,distanceRGBA_frag:VP,equirect_vert:GP,equirect_frag:WP,linedashed_vert:jP,linedashed_frag:XP,meshbasic_vert:$P,meshbasic_frag:qP,meshlambert_vert:YP,meshlambert_frag:KP,meshmatcap_vert:QP,meshmatcap_frag:ZP,meshnormal_vert:JP,meshnormal_frag:e2,meshphong_vert:t2,meshphong_frag:n2,meshphysical_vert:i2,meshphysical_frag:r2,meshtoon_vert:s2,meshtoon_frag:o2,points_vert:a2,points_frag:l2,shadow_vert:c2,shadow_frag:u2,sprite_vert:d2,sprite_frag:f2},ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},gi={basic:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Jt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Jt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Jt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Jt([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Jt([ce.lights,ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};gi.physical={uniforms:Jt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Jl={r:0,b:0,g:0},Yr=new Zi,h2=new bt;function p2(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function g(x){let y=!1;const b=_(x);b===null?u(a,l):b&&b.isColor&&(u(b,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(x,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===Iu)?(d===void 0&&(d=new zn(new al(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Io(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Yr.copy(y.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(h2.makeRotationFromEuler(Yr)),d.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ot,(f!==b||h!==b.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=b,h=b.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new zn(new Fu(2,2),new kr({name:"BackgroundMaterial",uniforms:Io(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(Jl,_S(t)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,y,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:g,addToRenderList:p,dispose:v}}function m2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,B,z,k){let $=!1;const V=f(z,B,L);s!==V&&(s=V,c(s.object)),$=m(S,z,B,k),$&&_(S,z,B,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,L,B,z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,L,B){const z=B.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let $=k[L.id];$===void 0&&($={},k[L.id]=$);let V=$[z];return V===void 0&&(V=h(l()),$[z]=V),V}function h(S){const L=[],B=[],z=[];for(let k=0;k<n;k++)L[k]=0,B[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:z,object:S,attributes:{},index:null}}function m(S,L,B,z){const k=s.attributes,$=L.attributes;let V=0;const q=B.getAttributes();for(const D in q)if(q[D].location>=0){const Q=k[D];let re=$[D];if(re===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function _(S,L,B,z){const k={},$=L.attributes;let V=0;const q=B.getAttributes();for(const D in q)if(q[D].location>=0){let Q=$[D];Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),k[D]=re,V++}s.attributes=k,s.attributesNum=V,s.index=z}function g(){const S=s.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function p(S){u(S,0)}function u(S,L){const B=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;B[S]=1,z[S]===0&&(t.enableVertexAttribArray(S),z[S]=1),k[S]!==L&&(t.vertexAttribDivisor(S,L),k[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let B=0,z=L.length;B<z;B++)L[B]!==S[B]&&(t.disableVertexAttribArray(B),L[B]=0)}function x(S,L,B,z,k,$,V){V===!0?t.vertexAttribIPointer(S,L,B,k,$):t.vertexAttribPointer(S,L,B,z,k,$)}function y(S,L,B,z){g();const k=z.attributes,$=B.getAttributes(),V=L.defaultAttributeValues;for(const q in $){const D=$[q];if(D.location>=0){let j=k[q];if(j===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Q=j.normalized,re=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const Ve=Se.buffer,K=Se.type,ae=Se.bytesPerElement,pe=K===t.INT||K===t.UNSIGNED_INT||j.gpuType===im;if(j.isInterleavedBufferAttribute){const le=j.data,Te=le.stride,$e=j.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<D.locationSize;Ce++)u(D.location+Ce,le.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<D.locationSize;Ce++)p(D.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Ce=0;Ce<D.locationSize;Ce++)x(D.location+Ce,re/D.locationSize,K,Q,Te*ae,($e+re/D.locationSize*Ce)*ae,pe)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)u(D.location+le,j.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<D.locationSize;le++)p(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let le=0;le<D.locationSize;le++)x(D.location+le,re/D.locationSize,K,Q,re*ae,re/D.locationSize*le*ae,pe)}}else if(V!==void 0){const Q=V[q];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}v()}function b(){P();for(const S in i){const L=i[S];for(const B in L){const z=L[B];for(const k in z)d(z[k].object),delete z[k];delete L[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const B in L){const z=L[B];for(const k in z)d(z[k].object),delete z[k];delete L[B]}delete i[S.id]}function T(S){for(const L in i){const B=i[L];if(B[S.id]===void 0)continue;const z=B[S.id];for(const k in z)d(z[k].object),delete z[k];delete B[S.id]}}function P(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function g2(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g]*h[g];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ii&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hi&&!P)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:b,maxSamples:A}}function _2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Jr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,x=v*4;let y=u.clippingState||null;l.value=y,y=d(_,h,x,m);for(let b=0;b!==x;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const u=m+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,y=m;x!==g;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function x2(t){let e=new WeakMap;function n(o,a){return a===uh?o.mapping=Do:a===dh&&(o.mapping=Lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uh||a===dh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new EC(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const eo=4,Av=[.125,.215,.35,.446,.526,.582],ns=20,jd=new PC,Cv=new rt;let Xd=null,$d=0,qd=0,Yd=!1;const es=(1+Math.sqrt(5))/2,zs=1/es,Rv=[new G(-es,zs,0),new G(es,zs,0),new G(-zs,0,es),new G(zs,0,es),new G(0,es,-zs),new G(0,es,zs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],y2=new G;class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=y2}=s;Xd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,$d,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:il,format:ii,colorSpace:No,depthBuffer:!1},r=Dv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S2(s)),this._blurMaterial=E2(s,e,n)}return r}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,jd)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(Cv),f.toneMapping=Dr,f.autoClear=!1;const _=new ru({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new zn(new al,_);let p=!1;const u=e.background;u?u.isColor&&(_.color.copy(u),e.background=null,p=!0):(_.color.copy(Cv),p=!0);for(let v=0;v<6;v++){const x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const y=this._cubeSize;ec(r,x*y,v>2?y:0,y,y),f.setRenderTarget(r),p&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ec(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,jd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rv[(r-s-1)%Rv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new zn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ns-1),g=s/_,p=isFinite(s)?1+Math.floor(d*g):ns;p>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ns}`);const u=[];let v=0;for(let T=0;T<ns;++T){const P=T/g,M=Math.exp(-P*P/2);u.push(M),T===0?v+=M:T<p&&(v+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],b=3*y*(r>x-eo?r-x+eo:0),A=4*(this._cubeSize-y);ec(n,b,A,3*y,2*y),l.setRenderTarget(n),l.render(f,jd)}}function S2(t){const e=[],n=[],i=[];let r=t;const s=t-eo+1+Av.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-eo?l=Av[o-t+eo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,g=3,p=2,u=1,v=new Float32Array(g*_*m),x=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(M,g*_*A),x.set(h,p*_*A);const S=[A,A,A,A,A,A];y.set(S,u*_*A)}const b=new bi;b.setAttribute("position",new Ei(v,g)),b.setAttribute("uv",new Ei(x,p)),b.setAttribute("faceIndex",new Ei(y,u)),e.push(b),r>eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dv(t,e,n){const i=new Es(t,e,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ec(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function E2(t,e,n){const i=new Float32Array(ns),r=new G(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Lv(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Nv(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function um(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uh||l===dh,d=l===Do||l===Lo;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Pv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Pv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function w2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Mc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function T2(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const v=m.array;g=m.version;for(let x=0,y=v.length;x<y;x+=3){const b=v[x+0],A=v[x+1],T=v[x+2];h.push(b,A,A,T,T,b)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const b=x+0,A=x+1,T=x+2;h.push(b,A,A,T,T,b)}}else return;const p=new(dS(h)?vS:gS)(h,1);p.version=g;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function b2(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*o,_),n.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function f(h,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],g[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,g,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v]*g[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function A2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function C2(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let b=a.attributes.position.count*y,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*A*4*f),P=new fS(T,b,A,f);P.type=Hi,P.needsUpdate=!0;const M=y*4;for(let L=0;L<f;L++){const B=u[L],z=v[L],k=x[L],$=b*A*4*L;for(let V=0;V<B.count;V++){const q=V*M;_===!0&&(r.fromBufferAttribute(B,V),T[$+q+0]=r.x,T[$+q+1]=r.y,T[$+q+2]=r.z,T[$+q+3]=0),g===!0&&(r.fromBufferAttribute(z,V),T[$+q+4]=r.x,T[$+q+5]=r.y,T[$+q+6]=r.z,T[$+q+7]=0),p===!0&&(r.fromBufferAttribute(k,V),T[$+q+8]=r.x,T[$+q+9]=r.y,T[$+q+10]=r.z,T[$+q+11]=k.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new at(b,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function R2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const TS=new gn,Iv=new MS(1,1),bS=new fS,AS=new sC,CS=new yS,Uv=[],Fv=[],Ov=new Float32Array(16),kv=new Float32Array(9),Bv=new Float32Array(4);function Go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Uv[r];if(s===void 0&&(s=new Float32Array(r),Uv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ou(t,e){let n=Fv[e];n===void 0&&(n=new Int32Array(e),Fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function P2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function I2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Bv.set(i),t.uniformMatrix2fv(this.addr,!1,Bv),It(n,i)}}function U2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;kv.set(i),t.uniformMatrix3fv(this.addr,!1,kv),It(n,i)}}function F2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Ov.set(i),t.uniformMatrix4fv(this.addr,!1,Ov),It(n,i)}}function O2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function H2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function G2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function j2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Iv.compareFunction=uS,s=Iv):s=TS,n.setTexture2D(e||s,r)}function X2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||AS,r)}function $2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||CS,r)}function q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bS,r)}function Y2(t){switch(t){case 5126:return P2;case 35664:return D2;case 35665:return L2;case 35666:return N2;case 35674:return I2;case 35675:return U2;case 35676:return F2;case 5124:case 35670:return O2;case 35667:case 35671:return k2;case 35668:case 35672:return B2;case 35669:case 35673:return z2;case 5125:return H2;case 36294:return V2;case 36295:return G2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return X2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return q2}}function K2(t,e){t.uniform1fv(this.addr,e)}function Q2(t,e){const n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function Z2(t,e){const n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function J2(t,e){const n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function eD(t,e){const n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tD(t,e){const n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nD(t,e){const n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iD(t,e){t.uniform1iv(this.addr,e)}function rD(t,e){t.uniform2iv(this.addr,e)}function sD(t,e){t.uniform3iv(this.addr,e)}function oD(t,e){t.uniform4iv(this.addr,e)}function aD(t,e){t.uniform1uiv(this.addr,e)}function lD(t,e){t.uniform2uiv(this.addr,e)}function cD(t,e){t.uniform3uiv(this.addr,e)}function uD(t,e){t.uniform4uiv(this.addr,e)}function dD(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||TS,s[o])}function fD(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||AS,s[o])}function hD(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||CS,s[o])}function pD(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||bS,s[o])}function mD(t){switch(t){case 5126:return K2;case 35664:return Q2;case 35665:return Z2;case 35666:return J2;case 35674:return eD;case 35675:return tD;case 35676:return nD;case 5124:case 35670:return iD;case 35667:case 35671:return rD;case 35668:case 35672:return sD;case 35669:case 35673:return oD;case 5125:return aD;case 36294:return lD;case 36295:return cD;case 36296:return uD;case 35678:case 36198:case 36298:case 36306:case 35682:return dD;case 35679:case 36299:case 36307:return fD;case 35680:case 36300:case 36308:case 36293:return hD;case 36289:case 36303:case 36311:case 36292:return pD}}class gD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Y2(n.type)}}class vD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mD(n.type)}}class _D{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function zv(t,e){t.seq.push(e),t.map[e.id]=e}function xD(t,e,n){const i=t.name,r=i.length;for(Kd.lastIndex=0;;){const s=Kd.exec(i),o=Kd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zv(n,c===void 0?new gD(a,t,e):new vD(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new _D(a),zv(n,f)),n=f}}}class wc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);xD(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Hv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yD=37297;let SD=0;function ED(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Vv=new Oe;function MD(t){Ze._getMatrix(Vv,Ze.workingColorSpace,t);const e=`mat3( ${Vv.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case tu:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Gv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ED(t.getShaderSource(e),o)}else return r}function wD(t,e){const n=MD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TD(t,e){let n;switch(e){case PA:n="Linear";break;case DA:n="Reinhard";break;case LA:n="Cineon";break;case NA:n="ACESFilmic";break;case UA:n="AgX";break;case FA:n="Neutral";break;case IA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tc=new G;function bD(){Ze.getLuminanceCoefficients(tc);const t=tc.x.toFixed(4),e=tc.y.toFixed(4),n=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function CD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function da(t){return t!==""}function Wv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(t){return t.replace(PD,LD)}const DD=new Map;function LD(t,e){let n=He[e];if(n===void 0){const i=DD.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hh(n)}const ND=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xv(t){return t.replace(ND,ID)}function ID(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $v(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function FD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case Lo:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function kD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case eS:e="ENVMAP_BLENDING_MULTIPLY";break;case CA:e="ENVMAP_BLENDING_MIX";break;case RA:e="ENVMAP_BLENDING_ADD";break}return e}function BD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zD(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UD(n),c=FD(n),d=OD(n),f=kD(n),h=BD(n),m=AD(n),_=CD(s),g=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(da).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(da).join(`
`),u.length>0&&(u+=`
`)):(p=[$v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),u=[$v(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?He.tonemapping_pars_fragment:"",n.toneMapping!==Dr?TD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,wD("linearToOutputTexel",n.outputColorSpace),bD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),o=Hh(o),o=Wv(o,n),o=jv(o,n),a=Hh(a),a=Wv(a,n),a=jv(a,n),o=Xv(o),a=Xv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+p+o,y=v+u+a,b=Hv(r,r.VERTEX_SHADER,x),A=Hv(r,r.FRAGMENT_SHADER,y);r.attachShader(g,b),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(L){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(b).trim(),k=r.getShaderInfoLog(A).trim();let $=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,A);else{const q=Gv(r,b,"vertex"),D=Gv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+q+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||k==="")&&(V=!1);V&&(L.diagnostics={runnable:$,programLog:B,vertexShader:{log:z,prefix:p},fragmentShader:{log:k,prefix:u}})}r.deleteShader(b),r.deleteShader(A),P=new wc(r,g),M=RD(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,yD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SD++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let HD=0;class VD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GD(e),n.set(e,i)),i}}class GD{constructor(e){this.id=HD++,this.code=e,this.usedTimes=0}}function WD(t,e,n,i,r,s,o){const a=new pS,l=new VD,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,S,L,B,z){const k=B.fog,$=z.geometry,V=M.isMeshStandardMaterial?B.environment:null,q=(M.isMeshStandardMaterial?n:e).get(M.envMap||V),D=q&&q.mapping===Iu?q.image.height:null,j=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=Q!==void 0?Q.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Ve,K,ae,pe;if(j){const it=gi[j];Ve=it.vertexShader,K=it.fragmentShader}else Ve=M.vertexShader,K=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const le=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),$e=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,pt=!!M.map,lt=!!M.matcap,ke=!!q,N=!!M.aoMap,an=!!M.lightMap,je=!!M.bumpMap,We=!!M.normalMap,Me=!!M.displacementMap,Je=!!M.emissiveMap,we=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,H=M.clearcoat>0,J=M.dispersion>0,ne=M.iridescence>0,Z=M.sheen>0,Ee=M.transmission>0,de=E&&!!M.anisotropyMap,Re=H&&!!M.clearcoatMap,Pe=H&&!!M.clearcoatNormalMap,se=H&&!!M.clearcoatRoughnessMap,_e=ne&&!!M.iridescenceMap,De=ne&&!!M.iridescenceThicknessMap,Ne=Z&&!!M.sheenColorMap,xe=Z&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Be=!!M.specularColorMap,ct=!!M.specularIntensityMap,U=Ee&&!!M.transmissionMap,fe=Ee&&!!M.thicknessMap,Y=!!M.gradientMap,te=!!M.alphaMap,me=M.alphaTest>0,he=!!M.alphaHash,Ue=!!M.extensions;let yt=Dr;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Gt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:$e,instancingColor:$e&&z.instanceColor!==null,instancingMorph:$e&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:No,alphaToCoverage:!!M.alphaToCoverage,map:pt,matcap:lt,envMap:ke,envMapMode:ke&&q.mapping,envMapCubeUVHeight:D,aoMap:N,lightMap:an,bumpMap:je,normalMap:We,displacementMap:h&&Me,emissiveMap:Je,normalMapObjectSpace:We&&M.normalMapType===HA,normalMapTangentSpace:We&&M.normalMapType===zA,metalnessMap:we,roughnessMap:R,anisotropy:E,anisotropyMap:de,clearcoat:H,clearcoatMap:Re,clearcoatNormalMap:Pe,clearcoatRoughnessMap:se,dispersion:J,iridescence:ne,iridescenceMap:_e,iridescenceThicknessMap:De,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:qe,specularColorMap:Be,specularIntensityMap:ct,transmission:Ee,transmissionMap:U,thicknessMap:fe,gradientMap:Y,opaque:M.transparent===!1&&M.blending===co&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:he,combine:M.combine,mapUv:pt&&g(M.map.channel),aoMapUv:N&&g(M.aoMap.channel),lightMapUv:an&&g(M.lightMap.channel),bumpMapUv:je&&g(M.bumpMap.channel),normalMapUv:We&&g(M.normalMap.channel),displacementMapUv:Me&&g(M.displacementMap.channel),emissiveMapUv:Je&&g(M.emissiveMap.channel),metalnessMapUv:we&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:de&&g(M.anisotropyMap.channel),clearcoatMapUv:Re&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(M.sheenRoughnessMap.channel),specularMapUv:qe&&g(M.specularMap.channel),specularColorMapUv:Be&&g(M.specularColorMap.channel),specularIntensityMapUv:ct&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:fe&&g(M.thicknessMap.channel),alphaMapUv:te&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(We||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(pt||te),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Te,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:Je&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ki,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=_[M.type];let L;if(S){const B=gi[S];L=_C.clone(B.uniforms)}else L=M.uniforms;return L}function b(M,S){let L;for(let B=0,z=d.length;B<z;B++){const k=d[B];if(k.cacheKey===S){L=k,++L.usedTimes;break}}return L===void 0&&(L=new zD(t,S,M,s),d.push(L)),L}function A(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:P}}function jD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function XD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Yv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,_,g,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=p),e++,u}function a(f,h,m,_,g,p){const u=o(f,h,m,_,g,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,g,p){const u=o(f,h,m,_,g,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||XD),i.length>1&&i.sort(h||qv),r.length>1&&r.sort(h||qv)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function $D(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Yv,t.set(i,[o])):r>=s.length?(o=new Yv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new rt};break;case"SpotLight":n={position:new G,direction:new G,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function YD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KD=0;function QD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZD(t){const e=new qD,n=YD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new bt,o=new bt;function a(c){let d=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,_=0,g=0,p=0,u=0,v=0,x=0,y=0,b=0,A=0,T=0;c.sort(QD);for(let M=0,S=c.length;M<S;M++){const L=c[M],B=L.color,z=L.intensity,k=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=B.r*z,f+=B.g*z,h+=B.b*z;else if(L.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(L.sh.coefficients[V],z);T++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,D=n.get(L);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=L.shadow.matrix,v++}i.directional[m]=V,m++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(B).multiplyScalar(z),V.distance=k,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,i.spot[g]=V;const q=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,q.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[g]=q.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[g]=D,i.spotShadowMap[g]=$,y++}g++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(B).multiplyScalar(z),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=V,p++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const q=L.shadow,D=n.get(L);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=L.shadow.matrix,x++}i.point[_]=V,_++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(z),V.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[u]=V,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=m,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=T,i.version=KD++)}function l(c,d){let f=0,h=0,m=0,_=0,g=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(x.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Kv(t){const e=new ZD(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Kv(t),e.set(r,[a])):s>=o.length?(a=new Kv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const eL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nL(t,e,n){let i=new SS;const r=new at,s=new at,o=new Tt,a=new CC({depthPacking:BA}),l=new RC,c={},d=n.maxTextureSize,f={[Or]:mn,[mn]:Or,[ki]:ki},h=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:eL,fragmentShader:tL}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new bi;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jy;let u=this.type;this.render=function(A,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Pr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=u!==Ui&&this.type===Ui,k=u===Ui&&this.type!==Ui;for(let $=0,V=A.length;$<V;$++){const q=A[$],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const j=D.getFrameExtents();if(r.multiply(j),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,D.mapSize.y=s.y)),D.map===null||z===!0||k===!0){const re=this.type!==Ui?{minFilter:oi,magFilter:oi}:{};D.map!==null&&D.map.dispose(),D.map=new Es(r.x,r.y,re),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let re=0;re<Q;re++){const Se=D.getViewport(re);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),D.updateMatrices(q,re),i=D.getFrustum(),y(T,P,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===Ui&&v(D,P),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,S,L)};function v(A,T){const P=e.update(g);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Es(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,h,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,m,g,null)}function x(A,T,P,M){let S=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const B=S.uuid,z=T.uuid;let k=c[B];k===void 0&&(k={},c[B]=k);let $=k[z];$===void 0&&($=S.clone(),k[z]=$,T.addEventListener("dispose",b)),S=$}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Ui?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=P}return S}function y(A,T,P,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const z=e.update(A),k=A.material;if(Array.isArray(k)){const $=z.groups;for(let V=0,q=$.length;V<q;V++){const D=$[V],j=k[D.materialIndex];if(j&&j.visible){const Q=x(A,j,M,S);A.onBeforeShadow(t,A,T,P,z,Q,D),t.renderBufferDirect(P,null,z,Q,A,D),A.onAfterShadow(t,A,T,P,z,Q,D)}}}else if(k.visible){const $=x(A,k,M,S);A.onBeforeShadow(t,A,T,P,z,$,null),t.renderBufferDirect(P,null,z,$,A,null),A.onAfterShadow(t,A,T,P,z,$,null)}}const B=A.children;for(let z=0,k=B.length;z<k;z++)y(B[z],T,P,M,S)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const M=c[P],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const iL={[ih]:rh,[sh]:lh,[oh]:ch,[Po]:ah,[rh]:ih,[lh]:sh,[ch]:oh,[ah]:Po};function rL(t,e){function n(){let U=!1;const fe=new Tt;let Y=null;const te=new Tt(0,0,0,0);return{setMask:function(me){Y!==me&&!U&&(t.colorMask(me,me,me,me),Y=me)},setLocked:function(me){U=me},setClear:function(me,he,Ue,yt,Gt){Gt===!0&&(me*=yt,he*=yt,Ue*=yt),fe.set(me,he,Ue,yt),te.equals(fe)===!1&&(t.clearColor(me,he,Ue,yt),te.copy(fe))},reset:function(){U=!1,Y=null,te.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,Y=null,te=null,me=null;return{setReversed:function(he){if(fe!==he){const Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=he;const yt=me;me=null,this.setClear(yt)}},getReversed:function(){return fe},setTest:function(he){he?le(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(he){Y!==he&&!U&&(t.depthMask(he),Y=he)},setFunc:function(he){if(fe&&(he=iL[he]),te!==he){switch(he){case ih:t.depthFunc(t.NEVER);break;case rh:t.depthFunc(t.ALWAYS);break;case sh:t.depthFunc(t.LESS);break;case Po:t.depthFunc(t.LEQUAL);break;case oh:t.depthFunc(t.EQUAL);break;case ah:t.depthFunc(t.GEQUAL);break;case lh:t.depthFunc(t.GREATER);break;case ch:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){U=he},setClear:function(he){me!==he&&(fe&&(he=1-he),t.clearDepth(he),me=he)},reset:function(){U=!1,Y=null,te=null,me=null,fe=!1}}}function r(){let U=!1,fe=null,Y=null,te=null,me=null,he=null,Ue=null,yt=null,Gt=null;return{setTest:function(it){U||(it?le(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(it){fe!==it&&!U&&(t.stencilMask(it),fe=it)},setFunc:function(it,jn,Ai){(Y!==it||te!==jn||me!==Ai)&&(t.stencilFunc(it,jn,Ai),Y=it,te=jn,me=Ai)},setOp:function(it,jn,Ai){(he!==it||Ue!==jn||yt!==Ai)&&(t.stencilOp(it,jn,Ai),he=it,Ue=jn,yt=Ai)},setLocked:function(it){U=it},setClear:function(it){Gt!==it&&(t.clearStencil(it),Gt=it)},reset:function(){U=!1,fe=null,Y=null,te=null,me=null,he=null,Ue=null,yt=null,Gt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,u=null,v=null,x=null,y=null,b=null,A=null,T=new rt(0,0,0),P=0,M=!1,S=null,L=null,B=null,z=null,k=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(D)[1]),V=q>=1):D.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),V=q>=2);let j=null,Q={};const re=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ve=new Tt().fromArray(re),K=new Tt().fromArray(Se);function ae(U,fe,Y,te){const me=new Uint8Array(4),he=t.createTexture();t.bindTexture(U,he),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<Y;Ue++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(fe+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return he}const pe={};pe[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Po),je(!1),We(ev),le(t.CULL_FACE),N(Pr);function le(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function Te(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function $e(U,fe){return f[U]!==fe?(t.bindFramebuffer(U,fe),f[U]=fe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(U,fe){let Y=m,te=!1;if(U){Y=h.get(fe),Y===void 0&&(Y=[],h.set(fe,Y));const me=U.textures;if(Y.length!==me.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ue=me.length;he<Ue;he++)Y[he]=t.COLOR_ATTACHMENT0+he;Y.length=me.length,te=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,te=!0);te&&t.drawBuffers(Y)}function pt(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const lt={[ts]:t.FUNC_ADD,[dA]:t.FUNC_SUBTRACT,[fA]:t.FUNC_REVERSE_SUBTRACT};lt[hA]=t.MIN,lt[pA]=t.MAX;const ke={[mA]:t.ZERO,[gA]:t.ONE,[vA]:t.SRC_COLOR,[th]:t.SRC_ALPHA,[MA]:t.SRC_ALPHA_SATURATE,[SA]:t.DST_COLOR,[xA]:t.DST_ALPHA,[_A]:t.ONE_MINUS_SRC_COLOR,[nh]:t.ONE_MINUS_SRC_ALPHA,[EA]:t.ONE_MINUS_DST_COLOR,[yA]:t.ONE_MINUS_DST_ALPHA,[wA]:t.CONSTANT_COLOR,[TA]:t.ONE_MINUS_CONSTANT_COLOR,[bA]:t.CONSTANT_ALPHA,[AA]:t.ONE_MINUS_CONSTANT_ALPHA};function N(U,fe,Y,te,me,he,Ue,yt,Gt,it){if(U===Pr){g===!0&&(Te(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),U!==uA){if(U!==p||it!==M){if((u!==ts||y!==ts)&&(t.blendEquation(t.FUNC_ADD),u=ts,y=ts),it)switch(U){case co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tv:t.blendFunc(t.ONE,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,b=null,A=null,T.set(0,0,0),P=0,p=U,M=it}return}me=me||fe,he=he||Y,Ue=Ue||te,(fe!==u||me!==y)&&(t.blendEquationSeparate(lt[fe],lt[me]),u=fe,y=me),(Y!==v||te!==x||he!==b||Ue!==A)&&(t.blendFuncSeparate(ke[Y],ke[te],ke[he],ke[Ue]),v=Y,x=te,b=he,A=Ue),(yt.equals(T)===!1||Gt!==P)&&(t.blendColor(yt.r,yt.g,yt.b,Gt),T.copy(yt),P=Gt),p=U,M=!1}function an(U,fe){U.side===ki?Te(t.CULL_FACE):le(t.CULL_FACE);let Y=U.side===mn;fe&&(Y=!Y),je(Y),U.blending===co&&U.transparent===!1?N(Pr):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){S!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),S=U)}function We(U){U!==aA?(le(t.CULL_FACE),U!==L&&(U===ev?t.cullFace(t.BACK):U===lA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),L=U}function Me(U){U!==B&&(V&&t.lineWidth(U),B=U)}function Je(U,fe,Y){U?(le(t.POLYGON_OFFSET_FILL),(z!==fe||k!==Y)&&(t.polygonOffset(fe,Y),z=fe,k=Y)):Te(t.POLYGON_OFFSET_FILL)}function we(U){U?le(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+$-1),j!==U&&(t.activeTexture(U),j=U)}function E(U,fe,Y){Y===void 0&&(j===null?Y=t.TEXTURE0+$-1:Y=j);let te=Q[Y];te===void 0&&(te={type:void 0,texture:void 0},Q[Y]=te),(te.type!==U||te.texture!==fe)&&(j!==Y&&(t.activeTexture(Y),j=Y),t.bindTexture(U,fe||pe[U]),te.type=U,te.texture=fe)}function H(){const U=Q[j];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){Ve.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ve.copy(U))}function xe(U){K.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function qe(U,fe){let Y=c.get(fe);Y===void 0&&(Y=new WeakMap,c.set(fe,Y));let te=Y.get(U);te===void 0&&(te=t.getUniformBlockIndex(fe,U.name),Y.set(U,te))}function Be(U,fe){const te=c.get(fe).get(U);l.get(fe)!==te&&(t.uniformBlockBinding(fe,te,U.__bindingPointIndex),l.set(fe,te))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},j=null,Q={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,u=null,v=null,x=null,y=null,b=null,A=null,T=new rt(0,0,0),P=0,M=!1,S=null,L=null,B=null,z=null,k=null,Ve.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Te,bindFramebuffer:$e,drawBuffers:Ce,useProgram:pt,setBlending:N,setMaterial:an,setFlipSided:je,setCullFace:We,setLineWidth:Me,setPolygonOffset:Je,setScissorTest:we,activeTexture:R,bindTexture:E,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:_e,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:Re,scissor:Ne,viewport:xe,reset:ct}}function sL(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return m?new OffscreenCanvas(R,E):iu("canvas")}function g(R,E,H){let J=1;const ne=we(R);if((ne.width>H||ne.height>H)&&(J=H/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(J*ne.width),Ee=Math.floor(J*ne.height);f===void 0&&(f=_(Z,Ee));const de=E?_(Z,Ee):f;return de.width=Z,de.height=Ee,de.getContext("2d").drawImage(R,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Ee+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,E,H,J,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8)),E===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),E===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8)),E===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),E===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),E===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),E===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),E===t.RGBA){const Ee=ne?tu:Ze.getTransfer(J);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=Ee===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(R,E){let H;return R?E===null||E===Ss||E===Wa?H=t.DEPTH24_STENCIL8:E===Hi?H=t.DEPTH32F_STENCIL8:E===Ga&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ss||E===Wa?H=t.DEPTH_COMPONENT24:E===Hi?H=t.DEPTH_COMPONENT32F:E===Ga&&(H=t.DEPTH_COMPONENT16),H}function b(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==oi&&R.minFilter!==_i?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),P(E),E.isVideoTexture&&d.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),S(E)}function P(R){const E=i.get(R);if(E.__webglInit===void 0)return;const H=R.source,J=h.get(H);if(J){const ne=J[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(R),Object.keys(J).length===0&&h.delete(H)}i.remove(R)}function M(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const H=R.source,J=h.get(H);delete J[E.__cacheKey],o.memory.textures--}function S(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ne=0;ne<E.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)t.deleteFramebuffer(E.__webglFramebuffer[J]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=R.textures;for(let J=0,ne=H.length;J<ne;J++){const Z=i.get(H[J]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(H[J])}i.remove(R)}let L=0;function B(){L=0}function z(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function k(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const H=i.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,R,E);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+E)}function V(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+E)}function q(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,E);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+E)}function D(R,E){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ae(H,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+E)}const j={[fh]:t.REPEAT,[os]:t.CLAMP_TO_EDGE,[hh]:t.MIRRORED_REPEAT},Q={[oi]:t.NEAREST,[OA]:t.NEAREST_MIPMAP_NEAREST,[Ll]:t.NEAREST_MIPMAP_LINEAR,[_i]:t.LINEAR,[yd]:t.LINEAR_MIPMAP_NEAREST,[as]:t.LINEAR_MIPMAP_LINEAR},re={[VA]:t.NEVER,[qA]:t.ALWAYS,[GA]:t.LESS,[uS]:t.LEQUAL,[WA]:t.EQUAL,[$A]:t.GEQUAL,[jA]:t.GREATER,[XA]:t.NOTEQUAL};function Se(R,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_i||E.magFilter===yd||E.magFilter===Ll||E.magFilter===as||E.minFilter===_i||E.minFilter===yd||E.minFilter===Ll||E.minFilter===as)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,j[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,j[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,j[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==Ll&&E.minFilter!==as||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const J=E.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const Z=k(E);if(Z!==R.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[Z].usedTimes++;const Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(E)),R.__cacheKey=Z,R.__webglTexture=ne[Z].texture}return H}function K(R,E,H){let J=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Ve(R,E),Z=E.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+H);const Ee=i.get(Z);if(Z.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const de=Ze.getPrimaries(Ze.workingColorSpace),Re=E.colorSpace===pr?null:Ze.getPrimaries(E.colorSpace),Pe=E.colorSpace===pr||de===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let se=g(E.image,!1,r.maxTextureSize);se=Je(E,se);const _e=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Ne=x(E.internalFormat,_e,De,E.colorSpace,E.isVideoTexture);Se(J,E);let xe;const qe=E.mipmaps,Be=E.isVideoTexture!==!0,ct=Ee.__version===void 0||ne===!0,U=Z.dataReady,fe=b(E,se);if(E.isDepthTexture)Ne=y(E.format===Xa,E.type),ct&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ne,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,_e,De,null));else if(E.isDataTexture)if(qe.length>0){Be&&ct&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,qe[0].width,qe[0].height);for(let Y=0,te=qe.length;Y<te;Y++)xe=qe[Y],Be?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe.width,xe.height,_e,De,xe.data):n.texImage2D(t.TEXTURE_2D,Y,Ne,xe.width,xe.height,0,_e,De,xe.data);E.generateMipmaps=!1}else Be?(ct&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,_e,De,se.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,se.width,se.height,0,_e,De,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ne,qe[0].width,qe[0].height,se.depth);for(let Y=0,te=qe.length;Y<te;Y++)if(xe=qe[Y],E.format!==ii)if(_e!==null)if(Be){if(U)if(E.layerUpdates.size>0){const me=bv(xe.width,xe.height,E.format,E.type);for(const he of E.layerUpdates){const Ue=xe.data.subarray(he*me/xe.data.BYTES_PER_ELEMENT,(he+1)*me/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,he,xe.width,xe.height,1,_e,Ue)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,se.depth,_e,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ne,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,xe.width,xe.height,se.depth,_e,De,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ne,xe.width,xe.height,se.depth,0,_e,De,xe.data)}else{Be&&ct&&n.texStorage2D(t.TEXTURE_2D,fe,Ne,qe[0].width,qe[0].height);for(let Y=0,te=qe.length;Y<te;Y++)xe=qe[Y],E.format!==ii?_e!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe.width,xe.height,_e,De,xe.data):n.texImage2D(t.TEXTURE_2D,Y,Ne,xe.width,xe.height,0,_e,De,xe.data)}else if(E.isDataArrayTexture)if(Be){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ne,se.width,se.height,se.depth),U)if(E.layerUpdates.size>0){const Y=bv(se.width,se.height,E.format,E.type);for(const te of E.layerUpdates){const me=se.data.subarray(te*Y/se.data.BYTES_PER_ELEMENT,(te+1)*Y/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,se.width,se.height,1,_e,De,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,De,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,_e,De,se.data);else if(E.isData3DTexture)Be?(ct&&n.texStorage3D(t.TEXTURE_3D,fe,Ne,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,De,se.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,_e,De,se.data);else if(E.isFramebufferTexture){if(ct)if(Be)n.texStorage2D(t.TEXTURE_2D,fe,Ne,se.width,se.height);else{let Y=se.width,te=se.height;for(let me=0;me<fe;me++)n.texImage2D(t.TEXTURE_2D,me,Ne,Y,te,0,_e,De,null),Y>>=1,te>>=1}}else if(qe.length>0){if(Be&&ct){const Y=we(qe[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ne,Y.width,Y.height)}for(let Y=0,te=qe.length;Y<te;Y++)xe=qe[Y],Be?U&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e,De,xe):n.texImage2D(t.TEXTURE_2D,Y,Ne,_e,De,xe);E.generateMipmaps=!1}else if(Be){if(ct){const Y=we(se);n.texStorage2D(t.TEXTURE_2D,fe,Ne,Y.width,Y.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,De,se)}else n.texImage2D(t.TEXTURE_2D,0,Ne,_e,De,se);p(E)&&u(J),Ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,H){if(E.image.length!==6)return;const J=Ve(R,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const Z=i.get(ne);if(ne.version!==Z.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const Ee=Ze.getPrimaries(Ze.workingColorSpace),de=E.colorSpace===pr?null:Ze.getPrimaries(E.colorSpace),Re=E.colorSpace===pr||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let te=0;te<6;te++)!Pe&&!se?_e[te]=g(E.image[te],!0,r.maxCubemapSize):_e[te]=se?E.image[te].image:E.image[te],_e[te]=Je(E,_e[te]);const De=_e[0],Ne=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),qe=x(E.internalFormat,Ne,xe,E.colorSpace),Be=E.isVideoTexture!==!0,ct=Z.__version===void 0||J===!0,U=ne.dataReady;let fe=b(E,De);Se(t.TEXTURE_CUBE_MAP,E);let Y;if(Pe){Be&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,qe,De.width,De.height);for(let te=0;te<6;te++){Y=_e[te].mipmaps;for(let me=0;me<Y.length;me++){const he=Y[me];E.format!==ii?Ne!==null?Be?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,he.width,he.height,Ne,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,he.width,he.height,Ne,xe,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,qe,he.width,he.height,0,Ne,xe,he.data)}}}else{if(Y=E.mipmaps,Be&&ct){Y.length>0&&fe++;const te=we(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,qe,te.width,te.height)}for(let te=0;te<6;te++)if(se){Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e[te].width,_e[te].height,Ne,xe,_e[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,_e[te].width,_e[te].height,0,Ne,xe,_e[te].data);for(let me=0;me<Y.length;me++){const Ue=Y[me].image[te].image;Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ue.width,Ue.height,Ne,xe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,qe,Ue.width,Ue.height,0,Ne,xe,Ue.data)}}else{Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,xe,_e[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Ne,xe,_e[te]);for(let me=0;me<Y.length;me++){const he=Y[me];Be?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ne,xe,he.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,qe,Ne,xe,he.image[te])}}}p(E)&&u(t.TEXTURE_CUBE_MAP),Z.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function pe(R,E,H,J,ne,Z){const Ee=s.convert(H.format,H.colorSpace),de=s.convert(H.type),Re=x(H.internalFormat,Ee,de,H.colorSpace),Pe=i.get(E),se=i.get(H);if(se.__renderTarget=E,!Pe.__hasExternalTextures){const _e=Math.max(1,E.width>>Z),De=Math.max(1,E.height>>Z);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Z,Re,_e,De,E.depth,0,Ee,de,null):n.texImage2D(ne,Z,Re,_e,De,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),We(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,se.__webglTexture,0,je(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,se.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(R,E,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const J=E.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=y(E.stencilBuffer,ne),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=je(E);We(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Z,E.width,E.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const J=E.textures;for(let ne=0;ne<J.length;ne++){const Z=J[ne],Ee=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),Re=x(Z.internalFormat,Ee,de,Z.colorSpace),Pe=je(E);H&&We(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Re,E.width,E.height):We(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Re,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ne=J.__webglTexture,Z=je(E);if(E.depthTexture.format===ja)We(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Xa)We(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function $e(R){const E=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const J=R.texture.mipmaps;J&&J.length>0?Te(E.__webglFramebuffer[0],R):Te(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=t.createRenderbuffer(),le(E.__webglDepthbuffer[J],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Z)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,E,H){const J=i.get(R);E!==void 0&&pe(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&$e(R)}function pt(R){const E=R.texture,H=i.get(R),J=i.get(E);R.addEventListener("dispose",T);const ne=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=E.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let Re=0;Re<E.mipmaps.length;Re++)H.__webglFramebuffer[de][Re]=t.createFramebuffer()}else H.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)H.__webglFramebuffer[de]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let de=0,Re=ne.length;de<Re;de++){const Pe=i.get(ne[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&We(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const Re=ne[de];H.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Pe=s.convert(Re.format,Re.colorSpace),se=s.convert(Re.type),_e=x(Re.internalFormat,Pe,se,Re.colorSpace,R.isXRRenderTarget===!0),De=je(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,H.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),le(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Se(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)pe(H.__webglFramebuffer[de][Re],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Re);else pe(H.__webglFramebuffer[de],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let de=0,Re=ne.length;de<Re;de++){const Pe=ne[de],se=i.get(Pe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Se(t.TEXTURE_2D,Pe),pe(H.__webglFramebuffer,R,Pe,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),p(Pe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),Se(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)pe(H.__webglFramebuffer[Re],R,E,t.COLOR_ATTACHMENT0,de,Re);else pe(H.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,de,0);p(E)&&u(de),n.unbindTexture()}R.depthBuffer&&$e(R)}function lt(R){const E=R.textures;for(let H=0,J=E.length;H<J;H++){const ne=E[H];if(p(ne)){const Z=v(R),Ee=i.get(ne).__webglTexture;n.bindTexture(Z,Ee),u(Z),n.unbindTexture()}}}const ke=[],N=[];function an(R){if(R.samples>0){if(We(R)===!1){const E=R.textures,H=R.width,J=R.height;let ne=t.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),de=E.length>1;if(de)for(let Pe=0;Pe<E.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Re=R.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const se=i.get(E[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,H,J,0,0,H,J,ne,t.NEAREST),l===!0&&(ke.length=0,N.length=0,ke.push(t.COLOR_ATTACHMENT0+Pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(Z),N.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,N)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Pe=0;Pe<E.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Pe]);const se=i.get(E[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function je(R){return Math.min(r.maxSamples,R.samples)}function We(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(R){const E=o.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Je(R,E){const H=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==No&&H!==pr&&(Ze.getTransfer(H)===ot?(J!==ii||ne!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=D,this.rebindTextures=Ce,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function oL(t,e){function n(i,r=pr){let s;const o=Ze.getTransfer(r);if(i===Qi)return t.UNSIGNED_BYTE;if(i===rm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nS)return t.BYTE;if(i===iS)return t.SHORT;if(i===Ga)return t.UNSIGNED_SHORT;if(i===im)return t.INT;if(i===Ss)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===il)return t.HALF_FLOAT;if(i===sS)return t.ALPHA;if(i===oS)return t.RGB;if(i===ii)return t.RGBA;if(i===ja)return t.DEPTH_COMPONENT;if(i===Xa)return t.DEPTH_STENCIL;if(i===aS)return t.RED;if(i===om)return t.RED_INTEGER;if(i===lS)return t.RG;if(i===am)return t.RG_INTEGER;if(i===lm)return t.RGBA_INTEGER;if(i===_c||i===xc||i===yc||i===Sc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ph||i===mh||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===xh||i===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===xh)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sh||i===Eh||i===Mh||i===wh||i===Th||i===bh||i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===Uh||i===Fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ec)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cS||i===Oh||i===kh||i===Bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Oh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new gn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new kr({vertexShader:aL,fragmentShader:lL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new Fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uL extends Ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const g=new cL,p=n.getContextAttributes();let u=null,v=null;const x=[],y=[],b=new at;let A=null;const T=new kn;T.viewport=new Tt;const P=new kn;P.viewport=new Tt;const M=[T,P],S=new DC;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=x[K];return ae===void 0&&(ae=new Vd,x[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=x[K];return ae===void 0&&(ae=new Vd,x[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=x[K];return ae===void 0&&(ae=new Vd,x[K]=ae),ae.getHandSpace()};function z(K){const ae=y.indexOf(K.inputSource);if(ae===-1)return;const pe=x[ae];pe!==void 0&&(pe.update(K.inputSource,K.frame,c||o),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",$);for(let K=0;K<x.length;K++){const ae=y[K];ae!==null&&(y[K]=null,x[K].disconnect(ae))}L=null,B=null,g.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,le=null,Te=null;p.depth&&(Te=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=p.stencil?Xa:ja,le=p.stencil?Wa:Ss);const $e={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Es(h.textureWidth,h.textureHeight,{format:ii,type:Qi,depthTexture:new MS(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Es(m.framebufferWidth,m.framebufferHeight,{format:ii,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(K){for(let ae=0;ae<K.removed.length;ae++){const pe=K.removed[ae],le=y.indexOf(pe);le>=0&&(y[le]=null,x[le].disconnect(pe))}for(let ae=0;ae<K.added.length;ae++){const pe=K.added[ae];let le=y.indexOf(pe);if(le===-1){for(let $e=0;$e<x.length;$e++)if($e>=y.length){y.push(pe),le=$e;break}else if(y[$e]===null){y[$e]=pe,le=$e;break}if(le===-1)break}const Te=x[le];Te&&Te.connect(pe)}}const V=new G,q=new G;function D(K,ae,pe){V.setFromMatrixPosition(ae.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);const le=V.distanceTo(q),Te=ae.projectionMatrix.elements,$e=pe.projectionMatrix.elements,Ce=Te[14]/(Te[10]-1),pt=Te[14]/(Te[10]+1),lt=(Te[9]+1)/Te[5],ke=(Te[9]-1)/Te[5],N=(Te[8]-1)/Te[0],an=($e[8]+1)/$e[0],je=Ce*N,We=Ce*an,Me=le/(-N+an),Je=Me*-N;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Je),K.translateZ(Me),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const we=Ce+Me,R=pt+Me,E=je-Je,H=We+(le-Je),J=lt*pt/R*we,ne=ke*pt/R*we;K.projectionMatrix.makePerspective(E,H,J,ne,we,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function j(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ae=K.near,pe=K.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),S.near=P.near=T.near=ae,S.far=P.far=T.far=pe,(L!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,B=S.far),T.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,S.layers.mask=T.layers.mask|P.layers.mask;const le=K.parent,Te=S.cameras;j(S,le);for(let $e=0;$e<Te.length;$e++)j(Te[$e],le);Te.length===2?D(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),Q(K,S,le)};function Q(K,ae,pe){pe===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let re=null;function Se(K,ae){if(d=ae.getViewerPose(c||o),_=ae,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let le=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ce=0;Ce<pe.length;Ce++){const pt=pe[Ce];let lt=null;if(m!==null)lt=m.getViewport(pt);else{const N=f.getViewSubImage(h,pt);lt=N.viewport,Ce===0&&(e.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(v))}let ke=M[Ce];ke===void 0&&(ke=new kn,ke.layers.enable(Ce),ke.viewport=new Tt,M[Ce]=ke),ke.matrix.fromArray(pt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(pt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(lt.x,lt.y,lt.width,lt.height),Ce===0&&(S.matrix.copy(ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(ke)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ce=f.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(e,Ce,r.renderState)}}for(let pe=0;pe<x.length;pe++){const le=y[pe],Te=x[pe];le!==null&&Te!==void 0&&Te.update(le,ae,c||o)}re&&re(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Ve=new wS;Ve.setAnimationLoop(Se),this.setAnimationLoop=function(K){re=K},this.dispose=function(){}}}const Kr=new Zi,dL=new bt;function fL(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,_S(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),g(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===mn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===mn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,y=v.envMapRotation;x&&(p.envMap.value=x,Kr.copy(y),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.envMapRotation.value.setFromMatrix4(dL.makeRotationFromEuler(Kr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(_(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const b=x.program;i.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function d(v){const x=f();v.__bindingPointIndex=x;const y=t.createBuffer(),b=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,T=y.length;A<T;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=P.length;M<S;M++){const L=P[M];if(m(L,A,M,b)===!0){const B=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let $=0;$<z.length;$++){const V=z[$],q=g(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,B+k,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,y,b){const A=v.value,T=x+"_"+y;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const P=b[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const x=v.uniforms;let y=0;const b=16;for(let T=0,P=x.length;T<P;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,L=M.length;S<L;S++){const B=M[S],z=Array.isArray(B.value)?B.value:[B.value];for(let k=0,$=z.length;k<$;k++){const V=z[k],q=g(V),D=y%b,j=D%q.boundary,Q=D+j;y+=j,Q!==0&&b-Q<q.storage&&(y+=b-Q),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=q.storage}}}const A=y%b;return A>0&&(y+=b-A),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class pL{constructor(e={}){const{canvas:n=KA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,u=null;const v=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Un;let A=0,T=0,P=null,M=-1,S=null;const L=new Tt,B=new Tt;let z=null;const k=new rt(0);let $=0,V=n.width,q=n.height,D=1,j=null,Q=null;const re=new Tt(0,0,V,q),Se=new Tt(0,0,V,q);let Ve=!1;const K=new SS;let ae=!1,pe=!1;const le=new bt,Te=new bt,$e=new G,Ce=new Tt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ke(){return P===null?D:1}let N=i;function an(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nm}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",he,!1),N===null){const F="webgl2";if(N=an(F,w),N===null)throw an(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,We,Me,Je,we,R,E,H,J,ne,Z,Ee,de,Re,Pe,se,_e,De,Ne,xe,qe,Be,ct,U;function fe(){je=new w2(N),je.init(),Be=new oL(N,je),We=new v2(N,je,e,Be),Me=new rL(N,je),We.reverseDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),Je=new A2(N),we=new jD,R=new sL(N,je,Me,we,We,Be,Je),E=new x2(y),H=new M2(y),J=new NC(N),ct=new m2(N,J),ne=new T2(N,J,Je,ct),Z=new R2(N,ne,J,Je),Ne=new C2(N,We,R),se=new _2(we),Ee=new WD(y,E,H,je,We,ct,se),de=new fL(y,we),Re=new $D,Pe=new JD(je),De=new p2(y,E,H,Me,Z,m,l),_e=new nL(y,Z,We),U=new hL(N,Je,We,Me),xe=new g2(N,je,Je),qe=new b2(N,je,Je),Je.programs=Ee.programs,y.capabilities=We,y.extensions=je,y.properties=we,y.renderLists=Re,y.shadowMap=_e,y.state=Me,y.info=Je}fe();const Y=new uL(y,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(V,q,!1))},this.getSize=function(w){return w.set(V,q)},this.setSize=function(w,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,q=F,n.width=Math.floor(w*D),n.height=Math.floor(F*D),W===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(V*D,q*D).floor()},this.setDrawingBufferSize=function(w,F,W){V=w,q=F,D=W,n.width=Math.floor(w*W),n.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,F,W,X){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,F,W,X),Me.viewport(L.copy(re).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,F,W,X){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,F,W,X),Me.scissor(B.copy(Se).multiplyScalar(D).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(w){Me.setScissorTest(Ve=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,W=!0){let X=0;if(w){let O=!1;if(P!==null){const oe=P.texture.format;O=oe===lm||oe===am||oe===om}if(O){const oe=P.texture.type,ue=oe===Qi||oe===Ss||oe===Ga||oe===Wa||oe===rm||oe===sm,ve=De.getClearColor(),ye=De.getClearAlpha(),Ie=ve.r,Le=ve.g,be=ve.b;ue?(_[0]=Ie,_[1]=Le,_[2]=be,_[3]=ye,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Ie,g[1]=Le,g[2]=be,g[3]=ye,N.clearBufferiv(N.COLOR,0,g))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT),W&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",he,!1),De.dispose(),Re.dispose(),Pe.dispose(),we.dispose(),E.dispose(),H.dispose(),Z.dispose(),ct.dispose(),U.dispose(),Ee.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",dm),Y.removeEventListener("sessionend",fm),Vr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=Je.autoReset,F=_e.enabled,W=_e.autoUpdate,X=_e.needsUpdate,O=_e.type;fe(),Je.autoReset=w,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=X,_e.type=O}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const F=w.target;F.removeEventListener("dispose",Ue),yt(F)}function yt(w){Gt(w),we.remove(w)}function Gt(w){const F=we.get(w).programs;F!==void 0&&(F.forEach(function(W){Ee.releaseProgram(W)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,X,O,oe){F===null&&(F=pt);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ve=RS(w,F,W,X,O);Me.setMaterial(X,ue);let ye=W.index,Ie=1;if(X.wireframe===!0){if(ye=ne.getWireframeAttribute(W),ye===void 0)return;Ie=2}const Le=W.drawRange,be=W.attributes.position;let Ye=Le.start*Ie,et=(Le.start+Le.count)*Ie;oe!==null&&(Ye=Math.max(Ye,oe.start*Ie),et=Math.min(et,(oe.start+oe.count)*Ie)),ye!==null?(Ye=Math.max(Ye,0),et=Math.min(et,ye.count)):be!=null&&(Ye=Math.max(Ye,0),et=Math.min(et,be.count));const At=et-Ye;if(At<0||At===1/0)return;ct.setup(O,X,ve,W,ye);let St,Qe=xe;if(ye!==null&&(St=J.get(ye),Qe=qe,Qe.setIndex(St)),O.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*ke()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(O.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*ke()),O.isLineSegments?Qe.setMode(N.LINES):O.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else O.isPoints?Qe.setMode(N.POINTS):O.isSprite&&Qe.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Mc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ae=O._multiDrawStarts,kt=O._multiDrawCounts,tt=O._multiDrawCount,Xn=ye?J.get(ye).bytesPerElement:1,Ts=we.get(X).currentProgram.getUniforms();for(let _n=0;_n<tt;_n++)Ts.setValue(N,"_gl_DrawID",_n),Qe.render(Ae[_n]/Xn,kt[_n])}else if(O.isInstancedMesh)Qe.renderInstances(Ye,At,O.count);else if(W.isInstancedBufferGeometry){const Ae=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kt=Math.min(W.instanceCount,Ae);Qe.renderInstances(Ye,At,kt)}else Qe.render(Ye,At)};function it(w,F,W){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,cl(w,F,W),w.side=Or,w.needsUpdate=!0,cl(w,F,W),w.side=ki):cl(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),u=Pe.get(W),u.init(F),x.push(u),W.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const X=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const oe=O.material;if(oe)if(Array.isArray(oe))for(let ue=0;ue<oe.length;ue++){const ve=oe[ue];it(ve,W,O),X.add(ve)}else it(oe,W,O),X.add(oe)}),u=x.pop(),X},this.compileAsync=function(w,F,W=null){const X=this.compile(w,F,W);return new Promise(O=>{function oe(){if(X.forEach(function(ue){we.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){O(w);return}setTimeout(oe,10)}je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let jn=null;function Ai(w){jn&&jn(w)}function dm(){Vr.stop()}function fm(){Vr.start()}const Vr=new wS;Vr.setAnimationLoop(Ai),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(w){jn=w,Y.setAnimationLoop(w),w===null?Vr.stop():Vr.start()},Y.addEventListener("sessionstart",dm),Y.addEventListener("sessionend",fm),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,P),u=Pe.get(w,x.length),u.init(F),x.push(u),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Te),pe=this.localClippingEnabled,ae=se.init(this.clippingPlanes,pe),p=Re.get(w,v.length),p.init(),v.push(p),Y.enabled===!0&&Y.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&ku(oe,F,-1/0,y.sortObjects)}ku(w,F,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(j,Q),lt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,lt&&De.addToRenderList(p,w),this.info.render.frame++,ae===!0&&se.beginShadows();const W=u.state.shadowsArray;_e.render(W,w,F),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,O=p.transmissive;if(u.setupLights(),F.isArrayCamera){const oe=F.cameras;if(O.length>0)for(let ue=0,ve=oe.length;ue<ve;ue++){const ye=oe[ue];pm(X,O,w,ye)}lt&&De.render(w);for(let ue=0,ve=oe.length;ue<ve;ue++){const ye=oe[ue];hm(p,w,ye,ye.viewport)}}else O.length>0&&pm(X,O,w,F),lt&&De.render(w),hm(p,w,F);P!==null&&T===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,F),ct.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function ku(w,F,W,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){X&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const ue=Z.update(w),ve=w.material;ve.visible&&p.push(w,ue,ve,W,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const ue=Z.update(w),ve=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ce.copy(ue.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(ve)){const ye=ue.groups;for(let Ie=0,Le=ye.length;Ie<Le;Ie++){const be=ye[Ie],Ye=ve[be.materialIndex];Ye&&Ye.visible&&p.push(w,ue,Ye,W,Ce.z,be)}}else ve.visible&&p.push(w,ue,ve,W,Ce.z,null)}}const oe=w.children;for(let ue=0,ve=oe.length;ue<ve;ue++)ku(oe[ue],F,W,X)}function hm(w,F,W,X){const O=w.opaque,oe=w.transmissive,ue=w.transparent;u.setupLightsView(W),ae===!0&&se.setGlobalState(y.clippingPlanes,W),X&&Me.viewport(L.copy(X)),O.length>0&&ll(O,F,W),oe.length>0&&ll(oe,F,W),ue.length>0&&ll(ue,F,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function pm(w,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Es(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?il:Qi,minFilter:as,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const oe=u.state.transmissionRenderTarget[X.id],ue=X.viewport||L;oe.setSize(ue.z*y.transmissionResolutionScale,ue.w*y.transmissionResolutionScale);const ve=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(k),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),lt&&De.render(W);const ye=y.toneMapping;y.toneMapping=Dr;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),ae===!0&&se.setGlobalState(y.clippingPlanes,X),ll(w,W,X),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),je.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let be=0,Ye=F.length;be<Ye;be++){const et=F[be],At=et.object,St=et.geometry,Qe=et.material,Ae=et.group;if(Qe.side===ki&&At.layers.test(X.layers)){const kt=Qe.side;Qe.side=mn,Qe.needsUpdate=!0,mm(At,W,X,St,Qe,Ae),Qe.side=kt,Qe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}y.setRenderTarget(ve),y.setClearColor(k,$),Ie!==void 0&&(X.viewport=Ie),y.toneMapping=ye}function ll(w,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,oe=w.length;O<oe;O++){const ue=w[O],ve=ue.object,ye=ue.geometry,Ie=ue.group;let Le=ue.material;Le.allowOverride===!0&&X!==null&&(Le=X),ve.layers.test(W.layers)&&mm(ve,F,W,ye,Le,Ie)}}function mm(w,F,W,X,O,oe){w.onBeforeRender(y,F,W,X,O,oe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(y,F,W,X,w,oe),O.transparent===!0&&O.side===ki&&O.forceSinglePass===!1?(O.side=mn,O.needsUpdate=!0,y.renderBufferDirect(W,F,X,O,w,oe),O.side=Or,O.needsUpdate=!0,y.renderBufferDirect(W,F,X,O,w,oe),O.side=ki):y.renderBufferDirect(W,F,X,O,w,oe),w.onAfterRender(y,F,W,X,O,oe)}function cl(w,F,W){F.isScene!==!0&&(F=pt);const X=we.get(w),O=u.state.lights,oe=u.state.shadowsArray,ue=O.state.version,ve=Ee.getParameters(w,O.state,oe,F,W),ye=Ee.getProgramCacheKey(ve);let Ie=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?H:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Ue),Ie=new Map,X.programs=Ie);let Le=Ie.get(ye);if(Le!==void 0){if(X.currentProgram===Le&&X.lightsStateVersion===ue)return vm(w,ve),Le}else ve.uniforms=Ee.getUniforms(w),w.onBeforeCompile(ve,y),Le=Ee.acquireProgram(ve,ye),Ie.set(ye,Le),X.uniforms=ve.uniforms;const be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=se.uniform),vm(w,ve),X.needsLights=DS(w),X.lightsStateVersion=ue,X.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.directionalShadowMap.value=O.state.directionalShadowMap,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotShadowMap.value=O.state.spotShadowMap,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMap.value=O.state.pointShadowMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Le,X.uniformsList=null,Le}function gm(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=wc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function vm(w,F){const W=we.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function RS(w,F,W,X,O){F.isScene!==!0&&(F=pt),R.resetTextureUnits();const oe=F.fog,ue=X.isMeshStandardMaterial?F.environment:null,ve=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:No,ye=(X.isMeshStandardMaterial?H:E).get(X.envMap||ue),Ie=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Le=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,et=!!W.morphAttributes.color;let At=Dr;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(At=y.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=St!==void 0?St.length:0,Ae=we.get(X),kt=u.state.lights;if(ae===!0&&(pe===!0||w!==S)){const Zt=w===S&&X.id===M;se.setState(X,w,Zt)}let tt=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==kt.state.version||Ae.outputColorSpace!==ve||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==ye||X.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==Le||Ae.morphTargets!==be||Ae.morphNormals!==Ye||Ae.morphColors!==et||Ae.toneMapping!==At||Ae.morphTargetsCount!==Qe)&&(tt=!0):(tt=!0,Ae.__version=X.version);let Xn=Ae.currentProgram;tt===!0&&(Xn=cl(X,F,O));let Ts=!1,_n=!1,Wo=!1;const mt=Xn.getUniforms(),Dn=Ae.uniforms;if(Me.useProgram(Xn.program)&&(Ts=!0,_n=!0,Wo=!0),X.id!==M&&(M=X.id,_n=!0),Ts||S!==w){Me.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),ZA(le),JA(le),mt.setValue(N,"projectionMatrix",le)):mt.setValue(N,"projectionMatrix",w.projectionMatrix),mt.setValue(N,"viewMatrix",w.matrixWorldInverse);const ln=mt.map.cameraPosition;ln!==void 0&&ln.setValue(N,$e.setFromMatrixPosition(w.matrixWorld)),We.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,_n=!0,Wo=!0)}if(O.isSkinnedMesh){mt.setOptional(N,O,"bindMatrix"),mt.setOptional(N,O,"bindMatrixInverse");const Zt=O.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),mt.setValue(N,"boneTexture",Zt.boneTexture,R))}O.isBatchedMesh&&(mt.setOptional(N,O,"batchingTexture"),mt.setValue(N,"batchingTexture",O._matricesTexture,R),mt.setOptional(N,O,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",O._indirectTexture,R),mt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",O._colorsTexture,R));const Ln=W.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Ne.update(O,W,Xn),(_n||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,mt.setValue(N,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Dn.envMap.value=ye,Dn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Dn.envMapIntensity.value=F.environmentIntensity),_n&&(mt.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&PS(Dn,Wo),oe&&X.fog===!0&&de.refreshFogUniforms(Dn,oe),de.refreshMaterialUniforms(Dn,X,D,q,u.state.transmissionRenderTarget[w.id]),wc.upload(N,gm(Ae),Dn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(wc.upload(N,gm(Ae),Dn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(N,"center",O.center),mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),mt.setValue(N,"normalMatrix",O.normalMatrix),mt.setValue(N,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Zt=X.uniformsGroups;for(let ln=0,Bu=Zt.length;ln<Bu;ln++){const Gr=Zt[ln];U.update(Gr,Xn),U.bind(Gr,Xn)}}return Xn}function PS(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function DS(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,F,W){const X=we.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),we.get(w.texture).__webglTexture=F,we.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const W=we.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const LS=N.createFramebuffer();this.setRenderTarget=function(w,F=0,W=0){P=w,A=F,T=W;let X=!0,O=null,oe=!1,ue=!1;if(w){const ye=we.get(w);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(ye.__hasExternalTextures)R.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(ye.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const Le=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?O=Le[F][W]:O=Le[F],oe=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=we.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[W]:O=Le,L.copy(w.viewport),B.copy(w.scissor),z=w.scissorTest}else L.copy(re).multiplyScalar(D).floor(),B.copy(Se).multiplyScalar(D).floor(),z=Ve;if(W!==0&&(O=LS),Me.bindFramebuffer(N.FRAMEBUFFER,O)&&X&&Me.drawBuffers(w,O),Me.viewport(L),Me.scissor(B),Me.setScissorTest(z),oe){const ye=we.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,W)}else if(ue){const ye=we.get(w.texture),Ie=F;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,W,Ie)}else if(w!==null&&W!==0){const ye=we.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(w,F,W,X,O,oe,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){Me.bindFramebuffer(N.FRAMEBUFFER,ve);try{const ye=w.texture,Ie=ye.format,Le=ye.type;if(!We.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&W>=0&&W<=w.height-O&&N.readPixels(F,W,X,O,Be.convert(Ie),Be.convert(Le),oe)}finally{const ye=P!==null?we.get(P).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,X,O,oe,ue){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve)if(F>=0&&F<=w.width-X&&W>=0&&W<=w.height-O){Me.bindFramebuffer(N.FRAMEBUFFER,ve);const ye=w.texture,Ie=ye.format,Le=ye.type;if(!We.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,oe.byteLength,N.STREAM_READ),N.readPixels(F,W,X,O,Be.convert(Ie),Be.convert(Le),0);const Ye=P!==null?we.get(P).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Ye);const et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await QA(N,et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,oe),N.deleteBuffer(be),N.deleteSync(et),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,W=0){const X=Math.pow(2,-W),O=Math.floor(w.image.width*X),oe=Math.floor(w.image.height*X),ue=F!==null?F.x:0,ve=F!==null?F.y:0;R.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,ue,ve,O,oe),Me.unbindTexture()};const NS=N.createFramebuffer(),IS=N.createFramebuffer();this.copyTextureToTexture=function(w,F,W=null,X=null,O=0,oe=null){oe===null&&(O!==0?(Mc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=O,O=0):oe=0);let ue,ve,ye,Ie,Le,be,Ye,et,At;const St=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(W!==null)ue=W.max.x-W.min.x,ve=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Le=W.min.y,be=W.isBox3?W.min.z:0;else{const Ln=Math.pow(2,-O);ue=Math.floor(St.width*Ln),ve=Math.floor(St.height*Ln),w.isDataArrayTexture?ye=St.depth:w.isData3DTexture?ye=Math.floor(St.depth*Ln):ye=1,Ie=0,Le=0,be=0}X!==null?(Ye=X.x,et=X.y,At=X.z):(Ye=0,et=0,At=0);const Qe=Be.convert(F.format),Ae=Be.convert(F.type);let kt;F.isData3DTexture?(R.setTexture3D(F,0),kt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),kt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),kt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=N.getParameter(N.UNPACK_ROW_LENGTH),Xn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ts=N.getParameter(N.UNPACK_SKIP_PIXELS),_n=N.getParameter(N.UNPACK_SKIP_ROWS),Wo=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,St.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ie),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,be);const mt=w.isDataArrayTexture||w.isData3DTexture,Dn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ln=we.get(w),Zt=we.get(F),ln=we.get(Ln.__renderTarget),Bu=we.get(Zt.__renderTarget);Me.bindFramebuffer(N.READ_FRAMEBUFFER,ln.__webglFramebuffer),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bu.__webglFramebuffer);for(let Gr=0;Gr<ye;Gr++)mt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(w).__webglTexture,O,be+Gr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(F).__webglTexture,oe,At+Gr)),N.blitFramebuffer(Ie,Le,ue,ve,Ye,et,ue,ve,N.DEPTH_BUFFER_BIT,N.NEAREST);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||we.has(w)){const Ln=we.get(w),Zt=we.get(F);Me.bindFramebuffer(N.READ_FRAMEBUFFER,NS),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,IS);for(let ln=0;ln<ye;ln++)mt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ln.__webglTexture,O,be+ln):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ln.__webglTexture,O),Dn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Zt.__webglTexture,oe,At+ln):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Zt.__webglTexture,oe),O!==0?N.blitFramebuffer(Ie,Le,ue,ve,Ye,et,ue,ve,N.COLOR_BUFFER_BIT,N.NEAREST):Dn?N.copyTexSubImage3D(kt,oe,Ye,et,At+ln,Ie,Le,ue,ve):N.copyTexSubImage2D(kt,oe,Ye,et,Ie,Le,ue,ve);Me.bindFramebuffer(N.READ_FRAMEBUFFER,null),Me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Dn?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(kt,oe,Ye,et,At,ue,ve,ye,Qe,Ae,St.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(kt,oe,Ye,et,At,ue,ve,ye,Qe,St.data):N.texSubImage3D(kt,oe,Ye,et,At,ue,ve,ye,Qe,Ae,St):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,oe,Ye,et,ue,ve,Qe,Ae,St.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,oe,Ye,et,St.width,St.height,Qe,St.data):N.texSubImage2D(N.TEXTURE_2D,oe,Ye,et,ue,ve,Qe,Ae,St);N.pixelStorei(N.UNPACK_ROW_LENGTH,tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ts),N.pixelStorei(N.UNPACK_SKIP_ROWS,_n),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wo),oe===0&&F.generateMipmaps&&N.generateMipmap(kt),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W=null,X=null,O=0){return Mc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,W,X,O)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,Me.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}const mL=()=>{const t=I.useRef(null),{theme:e}=Wy();return I.useEffect(()=>{if(!t.current)return;const n=new wC,i=new pL({alpha:!0,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),t.current.appendChild(i.domElement);const r=new kn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=30;const s=[],o=[],a=50,l=3125578,c=13708846,d=new au(.25,16,16);for(let p=0;p<a;p++){const u=new ru({color:p%3===0?c:l,transparent:!0,opacity:e==="dark"?.6:.8}),v=new zn(d,u);v.position.x=(Math.random()-.5)*50,v.position.y=(Math.random()-.5)*50,v.position.z=(Math.random()-.5)*30,v.velocity=new G((Math.random()-.5)*.05,(Math.random()-.5)*.05,(Math.random()-.5)*.05),n.add(v),s.push(v)}const f=new ES({color:3759940,transparent:!0,opacity:e==="dark"?.2:.3});for(let p=0;p<s.length;p++)for(let u=p+1;u<s.length;u++)if(s[p].position.distanceTo(s[u].position)<15){const x=new bi().setFromPoints([s[p].position,s[u].position]),y=new AC(x,f);n.add(y),o.push({from:p,to:u,line:y})}const h=[],m=()=>{const p=s[Math.floor(Math.random()*s.length)],u=new au(.1,16,16),v=new ru({color:Math.random()>.5?l:c,transparent:!0,opacity:e==="dark"?.2:.3}),x=new zn(u,v);x.position.copy(p.position),n.add(x),h.push({position:p.position.clone(),radius:.1,maxRadius:5+Math.random()*5,speed:.1+Math.random()*.2,mesh:x}),setTimeout(m,2e3+Math.random()*3e3)};setTimeout(m,1e3);const _=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",_);const g=()=>{requestAnimationFrame(g),s.forEach(p=>{p.position.add(p.velocity),["x","y","z"].forEach(u=>{const v=u==="z"?20:30;Math.abs(p.position[u])>v&&(p.velocity[u]*=-1)})}),o.forEach(p=>{const u=[s[p.from].position,s[p.to].position];p.line.geometry.setFromPoints(u),p.line.geometry.attributes.position.needsUpdate=!0});for(let p=h.length-1;p>=0;p--){const u=h[p];u.radius+=u.speed,u.mesh.scale.set(u.radius,u.radius,u.radius),u.mesh.material.opacity=(e==="dark"?.3:.5)*(1-u.radius/u.maxRadius),u.radius>=u.maxRadius&&(n.remove(u.mesh),h.splice(p,1))}n.rotation.x+=3e-4,n.rotation.y+=5e-4,i.render(n,r)};return g(),()=>{window.removeEventListener("resize",_),t.current&&t.current.removeChild(i.domElement),n.traverse(p=>{p instanceof zn&&(p.geometry.dispose(),p.material instanceof Vo&&p.material.dispose())}),i.dispose()}},[e]),C.jsx("div",{ref:t,className:"fixed inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-30",style:{zIndex:0}})};function gL(){const[t,e]=I.useState("about");return I.useEffect(()=>{const n=()=>{document.querySelectorAll("section[id]").forEach(r=>{const s=r.getAttribute("id"),o=r.getBoundingClientRect().top;o<100&&o>-300&&e(s)})};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),C.jsx(Vb,{defaultTheme:"light",storageKey:"theme-preference",children:C.jsxs("div",{className:"min-h-screen flex flex-col bg-background text-foreground relative",children:[C.jsx(mL,{}),C.jsxs("div",{className:"relative z-10",children:[C.jsx(Zb,{activeSection:t}),C.jsxs("main",{children:[C.jsx(eA,{}),C.jsx(iA,{}),C.jsx(rA,{}),C.jsx(sA,{})]}),C.jsx(oA,{})]})]})})}function vL(){return C.jsx(Pw,{client:Nw,children:C.jsxs(Bb,{children:[C.jsx(p1,{}),C.jsx(gL,{})]})})}_x(document.getElementById("root")).render(C.jsx(vL,{}));
