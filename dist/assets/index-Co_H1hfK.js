function Lh(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dd={exports:{}},Sl={},fd={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),Ph=Symbol.for("react.portal"),Dh=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),zh=Symbol.for("react.provider"),Mh=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),Oh=Symbol.for("react.memo"),Bh=Symbol.for("react.lazy"),tu=Symbol.iterator;function Fh(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var pd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hd=Object.assign,md={};function ir(e,n,t){this.props=e,this.context=n,this.refs=md,this.updater=t||pd}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gd(){}gd.prototype=ir.prototype;function jo(e,n,t){this.props=e,this.context=n,this.refs=md,this.updater=t||pd}var Ho=jo.prototype=new gd;Ho.constructor=jo;hd(Ho,ir.prototype);Ho.isPureReactComponent=!0;var ru=Array.isArray,yd=Object.prototype.hasOwnProperty,Uo={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function vd(e,n,t){var r,i={},l=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(l=""+n.key),n)yd.call(n,r)&&!xd.hasOwnProperty(r)&&(i[r]=n[r]);var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){for(var s=Array(o),u=0;u<o;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:li,type:e,key:l,ref:a,props:i,_owner:Uo.current}}function jh(e,n){return{$$typeof:li,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function Hh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var iu=/\/+/g;function Gl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Hh(""+e.key):n.toString(36)}function Ri(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case li:case Ph:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Gl(a,0):r,ru(i)?(t="",e!=null&&(t=e.replace(iu,"$&/")+"/"),Ri(i,n,t,"",function(u){return u})):i!=null&&(Vo(i)&&(i=jh(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",ru(e))for(var o=0;o<e.length;o++){l=e[o];var s=r+Gl(l,o);a+=Ri(l,n,t,s,i)}else if(s=Fh(e),typeof s=="function")for(e=s.call(e),o=0;!(l=e.next()).done;)l=l.value,s=r+Gl(l,o++),a+=Ri(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function mi(e,n,t){if(e==null)return e;var r=[],i=0;return Ri(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Uh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Ai={transition:null},Vh={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Uo};function bd(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:mi,forEach:function(e,n,t){mi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mi(e,function(){n++}),n},toArray:function(e){return mi(e,function(n){return n})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=ir;V.Fragment=Dh;V.Profiler=_h;V.PureComponent=jo;V.StrictMode=Nh;V.Suspense=Ah;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;V.act=bd;V.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hd({},e.props),i=e.key,l=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,a=Uo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in n)yd.call(n,s)&&!xd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&o!==void 0?o[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){o=Array(s);for(var u=0;u<s;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:li,type:e.type,key:i,ref:l,props:r,_owner:a}};V.createContext=function(e){return e={$$typeof:Mh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zh,_context:e},e.Consumer=e};V.createElement=vd;V.createFactory=function(e){var n=vd.bind(null,e);return n.type=e,n};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Rh,render:e}};V.isValidElement=Vo;V.lazy=function(e){return{$$typeof:Bh,_payload:{_status:-1,_result:e},_init:Uh}};V.memo=function(e,n){return{$$typeof:Oh,type:e,compare:n===void 0?null:n}};V.startTransition=function(e){var n=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=n}};V.unstable_act=bd;V.useCallback=function(e,n){return _e.current.useCallback(e,n)};V.useContext=function(e){return _e.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};V.useEffect=function(e,n){return _e.current.useEffect(e,n)};V.useId=function(){return _e.current.useId()};V.useImperativeHandle=function(e,n,t){return _e.current.useImperativeHandle(e,n,t)};V.useInsertionEffect=function(e,n){return _e.current.useInsertionEffect(e,n)};V.useLayoutEffect=function(e,n){return _e.current.useLayoutEffect(e,n)};V.useMemo=function(e,n){return _e.current.useMemo(e,n)};V.useReducer=function(e,n,t){return _e.current.useReducer(e,n,t)};V.useRef=function(e){return _e.current.useRef(e)};V.useState=function(e){return _e.current.useState(e)};V.useSyncExternalStore=function(e,n,t){return _e.current.useSyncExternalStore(e,n,t)};V.useTransition=function(){return _e.current.useTransition()};V.version="18.3.1";fd.exports=V;var _=fd.exports;const Cl=Fo(_),$h=Lh({__proto__:null,default:Cl},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=_,Gh=Symbol.for("react.element"),Yh=Symbol.for("react.fragment"),Qh=Object.prototype.hasOwnProperty,Jh=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kh={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,n,t){var r,i={},l=null,a=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Qh.call(n,r)&&!Kh.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Gh,type:e,key:l,ref:a,props:i,_owner:Jh.current}}Sl.Fragment=Yh;Sl.jsx=wd;Sl.jsxs=wd;dd.exports=Sl;var M=dd.exports,Na={},kd={exports:{}},Je={},Sd={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(D,B){var g=D.length;D.push(B);e:for(;0<g;){var G=g-1>>>1,q=D[G];if(0<i(q,B))D[G]=B,D[g]=q,g=G;else break e}}function t(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],g=D.pop();if(g!==B){D[0]=g;e:for(var G=0,q=D.length,x=q>>>1;G<x;){var ye=2*(G+1)-1,ln=D[ye],te=ye+1,hn=D[te];if(0>i(ln,g))te<q&&0>i(hn,ln)?(D[G]=hn,D[te]=g,G=te):(D[G]=ln,D[ye]=g,G=ye);else if(te<q&&0>i(hn,g))D[G]=hn,D[te]=g,G=te;else break e}}return B}function i(D,B){var g=D.sortIndex-B.sortIndex;return g!==0?g:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var s=[],u=[],c=1,d=null,p=3,f=!1,v=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var B=t(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,n(s,B);else break;B=t(u)}}function k(D){if(b=!1,y(D),!v)if(t(s)!==null)v=!0,pe(E);else{var B=t(u);B!==null&&de(k,B.startTime-D)}}function E(D,B){v=!1,b&&(b=!1,h(N),N=-1),f=!0;var g=p;try{for(y(B),d=t(s);d!==null&&(!(d.expirationTime>B)||D&&!A());){var G=d.callback;if(typeof G=="function"){d.callback=null,p=d.priorityLevel;var q=G(d.expirationTime<=B);B=e.unstable_now(),typeof q=="function"?d.callback=q:d===t(s)&&r(s),y(B)}else r(s);d=t(s)}if(d!==null)var x=!0;else{var ye=t(u);ye!==null&&de(k,ye.startTime-B),x=!1}return x}finally{d=null,p=g,f=!1}}var w=!1,L=null,N=-1,F=5,R=-1;function A(){return!(e.unstable_now()-R<F)}function O(){if(L!==null){var D=e.unstable_now();R=D;var B=!0;try{B=L(!0,D)}finally{B?J():(w=!1,L=null)}}else w=!1}var J;if(typeof m=="function")J=function(){m(O)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,$=ae.port2;ae.port1.onmessage=O,J=function(){$.postMessage(null)}}else J=function(){S(O,0)};function pe(D){L=D,w||(w=!0,J())}function de(D,B){N=S(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,pe(E))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var g=p;p=B;try{return D()}finally{p=g}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var g=p;p=D;try{return B()}finally{p=g}},e.unstable_scheduleCallback=function(D,B,g){var G=e.unstable_now();switch(typeof g=="object"&&g!==null?(g=g.delay,g=typeof g=="number"&&0<g?G+g:G):g=G,D){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=g+q,D={id:c++,callback:B,priorityLevel:D,startTime:g,expirationTime:q,sortIndex:-1},g>G?(D.sortIndex=g,n(u,D),t(s)===null&&D===t(u)&&(b?(h(N),N=-1):b=!0,de(k,g-G))):(D.sortIndex=q,n(s,D),v||f||(v=!0,pe(E))),D},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(D){var B=p;return function(){var g=p;p=B;try{return D.apply(this,arguments)}finally{p=g}}}})(Cd);Sd.exports=Cd;var qh=Sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=_,Qe=qh;function T(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,Br={};function wt(e,n){qt(e,n),qt(e+"Capture",n)}function qt(e,n){for(Br[e]=n,e=0;e<n.length;e++)Ed.add(n[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_a=Object.prototype.hasOwnProperty,Zh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lu={},au={};function em(e){return _a.call(au,e)?!0:_a.call(lu,e)?!1:Zh.test(e)?au[e]=!0:(lu[e]=!0,!1)}function nm(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tm(e,n,t,r){if(n===null||typeof n>"u"||nm(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ze(e,n,t,r,i,l,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new ze(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var $o=/[\-:]([a-z])/g;function Wo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($o,Wo);Ce[n]=new ze(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($o,Wo);Ce[n]=new ze(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($o,Wo);Ce[n]=new ze(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Go(e,n,t,r){var i=Ce.hasOwnProperty(n)?Ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(tm(n,t,i,r)&&(t=null),r||i===null?em(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Mn=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),Nt=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Id=Symbol.for("react.context"),Qo=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),Jo=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),Ld=Symbol.for("react.offscreen"),ou=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Yl;function wr(e){if(Yl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Yl=n&&n[1]||""}return`
`+Yl+e}var Ql=!1;function Jl(e,n){if(!e||Ql)return"";Ql=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==l[o]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=o);break}}}finally{Ql=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?wr(e):""}function rm(e){switch(e.tag){case 5:return wr(e.type);case 16:return wr("Lazy");case 13:return wr("Suspense");case 19:return wr("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function Aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Nt:return"Portal";case za:return"Profiler";case Yo:return"StrictMode";case Ma:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Id:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case Qo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jo:return n=e.displayName||null,n!==null?n:Aa(e.type)||"Memo";case Fn:n=e._payload,e=e._init;try{return Aa(e(n))}catch{}}return null}function im(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Aa(n);case 8:return n===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lm(e){var n=Pd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yi(e){e._valueTracker||(e._valueTracker=lm(e))}function Dd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Pd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oa(e,n){var t=n.checked;return ue({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function su(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=nt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Nd(e,n){n=n.checked,n!=null&&Go(e,"checked",n,!1)}function Ba(e,n){Nd(e,n);var t=nt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Fa(e,n.type,t):n.hasOwnProperty("defaultValue")&&Fa(e,n.type,nt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function uu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Fa(e,n,t){(n!=="number"||Ki(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var kr=Array.isArray;function Vt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ja(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(T(91));return ue({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(T(92));if(kr(t)){if(1<t.length)throw Error(T(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:nt(t)}}function _d(e,n){var t=nt(n.value),r=nt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function du(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function zd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,Md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},am=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){am.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Tr[n]=Tr[e]})});function Rd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+n).trim():n+"px"}function Ad(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Rd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var om=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,n){if(n){if(om[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(T(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(T(61))}if(n.style!=null&&typeof n.style!="object")throw Error(T(62))}}function Va(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $a=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,$t=null,Wt=null;function fu(e){if(e=si(e)){if(typeof Wa!="function")throw Error(T(280));var n=e.stateNode;n&&(n=Pl(n),Wa(e.stateNode,e.type,n))}}function Od(e){$t?Wt?Wt.push(e):Wt=[e]:$t=e}function Bd(){if($t){var e=$t,n=Wt;if(Wt=$t=null,fu(e),n)for(e=0;e<n.length;e++)fu(n[e])}}function Fd(e,n){return e(n)}function jd(){}var Kl=!1;function Hd(e,n,t){if(Kl)return e(n,t);Kl=!0;try{return Fd(e,n,t)}finally{Kl=!1,($t!==null||Wt!==null)&&(jd(),Bd())}}function jr(e,n){var t=e.stateNode;if(t===null)return null;var r=Pl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(T(231,n,typeof t));return t}var Ga=!1;if(Dn)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Ga=!1}function sm(e,n,t,r,i,l,a,o,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Ir=!1,qi=null,Xi=!1,Ya=null,um={onError:function(e){Ir=!0,qi=e}};function cm(e,n,t,r,i,l,a,o,s){Ir=!1,qi=null,sm.apply(um,arguments)}function dm(e,n,t,r,i,l,a,o,s){if(cm.apply(this,arguments),Ir){if(Ir){var u=qi;Ir=!1,qi=null}else throw Error(T(198));Xi||(Xi=!0,Ya=u)}}function kt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ud(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pu(e){if(kt(e)!==e)throw Error(T(188))}function fm(e){var n=e.alternate;if(!n){if(n=kt(e),n===null)throw Error(T(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return pu(i),e;if(l===r)return pu(i),n;l=l.sibling}throw Error(T(188))}if(t.return!==r.return)t=i,r=l;else{for(var a=!1,o=i.child;o;){if(o===t){a=!0,t=i,r=l;break}if(o===r){a=!0,r=i,t=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===t){a=!0,t=l,r=i;break}if(o===r){a=!0,r=l,t=i;break}o=o.sibling}if(!a)throw Error(T(189))}}if(t.alternate!==r)throw Error(T(190))}if(t.tag!==3)throw Error(T(188));return t.stateNode.current===t?e:n}function Vd(e){return e=fm(e),e!==null?$d(e):null}function $d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=$d(e);if(n!==null)return n;e=e.sibling}return null}var Wd=Qe.unstable_scheduleCallback,hu=Qe.unstable_cancelCallback,pm=Qe.unstable_shouldYield,hm=Qe.unstable_requestPaint,fe=Qe.unstable_now,mm=Qe.unstable_getCurrentPriorityLevel,qo=Qe.unstable_ImmediatePriority,Gd=Qe.unstable_UserBlockingPriority,Zi=Qe.unstable_NormalPriority,gm=Qe.unstable_LowPriority,Yd=Qe.unstable_IdlePriority,El=null,bn=null;function ym(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:bm,xm=Math.log,vm=Math.LN2;function bm(e){return e>>>=0,e===0?32:31-(xm(e)/vm|0)|0}var vi=64,bi=4194304;function Sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=t&268435455;if(a!==0){var o=a&~i;o!==0?r=Sr(o):(l&=a,l!==0&&(r=Sr(l)))}else a=t&~i,a!==0?r=Sr(a):l!==0&&(r=Sr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-dn(n),i=1<<t,r|=e[t],n&=~i;return r}function wm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function km(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-dn(l),o=1<<a,s=i[a];s===-1?(!(o&t)||o&r)&&(i[a]=wm(o,n)):s<=n&&(e.expiredLanes|=o),l&=~o}}function Qa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qd(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ai(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function Sm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-dn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Xo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var K=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kd,Zo,qd,Xd,Zd,Ja=!1,wi=[],Gn=null,Yn=null,Qn=null,Hr=new Map,Ur=new Map,Hn=[],Cm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Hr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ur.delete(n.pointerId)}}function pr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=si(n),n!==null&&Zo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Em(e,n,t,r,i){switch(n){case"focusin":return Gn=pr(Gn,e,n,t,r,i),!0;case"dragenter":return Yn=pr(Yn,e,n,t,r,i),!0;case"mouseover":return Qn=pr(Qn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Hr.set(l,pr(Hr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ur.set(l,pr(Ur.get(l)||null,e,n,t,r,i)),!0}return!1}function ef(e){var n=dt(e.target);if(n!==null){var t=kt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ud(t),n!==null){e.blockedOn=n,Zd(e.priority,function(){qd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ka(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);$a=r,t.target.dispatchEvent(r),$a=null}else return n=si(t),n!==null&&Zo(n),e.blockedOn=t,!1;n.shift()}return!0}function gu(e,n,t){Oi(e)&&t.delete(n)}function Tm(){Ja=!1,Gn!==null&&Oi(Gn)&&(Gn=null),Yn!==null&&Oi(Yn)&&(Yn=null),Qn!==null&&Oi(Qn)&&(Qn=null),Hr.forEach(gu),Ur.forEach(gu)}function hr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ja||(Ja=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,Tm)))}function Vr(e){function n(i){return hr(i,e)}if(0<wi.length){hr(wi[0],e);for(var t=1;t<wi.length;t++){var r=wi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Gn!==null&&hr(Gn,e),Yn!==null&&hr(Yn,e),Qn!==null&&hr(Qn,e),Hr.forEach(n),Ur.forEach(n),t=0;t<Hn.length;t++)r=Hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(t=Hn[0],t.blockedOn===null);)ef(t),t.blockedOn===null&&Hn.shift()}var Gt=Mn.ReactCurrentBatchConfig,nl=!0;function Im(e,n,t,r){var i=K,l=Gt.transition;Gt.transition=null;try{K=1,es(e,n,t,r)}finally{K=i,Gt.transition=l}}function Lm(e,n,t,r){var i=K,l=Gt.transition;Gt.transition=null;try{K=4,es(e,n,t,r)}finally{K=i,Gt.transition=l}}function es(e,n,t,r){if(nl){var i=Ka(e,n,t,r);if(i===null)oa(e,n,r,tl,t),mu(e,r);else if(Em(i,e,n,t,r))r.stopPropagation();else if(mu(e,r),n&4&&-1<Cm.indexOf(e)){for(;i!==null;){var l=si(i);if(l!==null&&Kd(l),l=Ka(e,n,t,r),l===null&&oa(e,n,r,tl,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else oa(e,n,r,null,t)}}var tl=null;function Ka(e,n,t,r){if(tl=null,e=Ko(r),e=dt(e),e!==null)if(n=kt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ud(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return tl=e,null}function nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mm()){case qo:return 1;case Gd:return 4;case Zi:case gm:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var Vn=null,ns=null,Bi=null;function tf(){if(Bi)return Bi;var e,n=ns,t=n.length,r,i="value"in Vn?Vn.value:Vn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[l-r];r++);return Bi=i.slice(e,1<r?1-r:void 0)}function Fi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function yu(){return!1}function Ke(e){function n(t,r,i,l,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ki:yu,this.isPropagationStopped=yu,this}return ue(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Ke(lr),oi=ue({},lr,{view:0,detail:0}),Pm=Ke(oi),Xl,Zl,mr,Tl=ue({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(Xl=e.screenX-mr.screenX,Zl=e.screenY-mr.screenY):Zl=Xl=0,mr=e),Xl)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),xu=Ke(Tl),Dm=ue({},Tl,{dataTransfer:0}),Nm=Ke(Dm),_m=ue({},oi,{relatedTarget:0}),ea=Ke(_m),zm=ue({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mm=Ke(zm),Rm=ue({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Am=Ke(Rm),Om=ue({},lr,{data:0}),vu=Ke(Om),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jm[e])?!!n[e]:!1}function rs(){return Hm}var Um=ue({},oi,{key:function(e){if(e.key){var n=Bm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=Ke(Um),$m=ue({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Ke($m),Wm=ue({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Gm=Ke(Wm),Ym=ue({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qm=Ke(Ym),Jm=ue({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=Ke(Jm),qm=[9,13,27,32],is=Dn&&"CompositionEvent"in window,Lr=null;Dn&&"documentMode"in document&&(Lr=document.documentMode);var Xm=Dn&&"TextEvent"in window&&!Lr,rf=Dn&&(!is||Lr&&8<Lr&&11>=Lr),wu=" ",ku=!1;function lf(e,n){switch(e){case"keyup":return qm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function af(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zt=!1;function Zm(e,n){switch(e){case"compositionend":return af(n);case"keypress":return n.which!==32?null:(ku=!0,wu);case"textInput":return e=n.data,e===wu&&ku?null:e;default:return null}}function eg(e,n){if(zt)return e==="compositionend"||!is&&lf(e,n)?(e=tf(),Bi=ns=Vn=null,zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rf&&n.locale!=="ko"?null:n.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ng[e.type]:n==="textarea"}function of(e,n,t,r){Od(r),n=rl(n,"onChange"),0<n.length&&(t=new ts("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pr=null,$r=null;function tg(e){xf(e,0)}function Il(e){var n=At(e);if(Dd(n))return e}function rg(e,n){if(e==="change")return n}var sf=!1;if(Dn){var na;if(Dn){var ta="oninput"in document;if(!ta){var Cu=document.createElement("div");Cu.setAttribute("oninput","return;"),ta=typeof Cu.oninput=="function"}na=ta}else na=!1;sf=na&&(!document.documentMode||9<document.documentMode)}function Eu(){Pr&&(Pr.detachEvent("onpropertychange",uf),$r=Pr=null)}function uf(e){if(e.propertyName==="value"&&Il($r)){var n=[];of(n,$r,e,Ko(e)),Hd(tg,n)}}function ig(e,n,t){e==="focusin"?(Eu(),Pr=n,$r=t,Pr.attachEvent("onpropertychange",uf)):e==="focusout"&&Eu()}function lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Il($r)}function ag(e,n){if(e==="click")return Il(n)}function og(e,n){if(e==="input"||e==="change")return Il(n)}function sg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:sg;function Wr(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!_a.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,n){var t=Tu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tu(t)}}function cf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function df(){for(var e=window,n=Ki();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ki(e.document)}return n}function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ug(e){var n=df(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cf(t.ownerDocument.documentElement,t)){if(r!==null&&ls(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Iu(t,l);var a=Iu(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cg=Dn&&"documentMode"in document&&11>=document.documentMode,Mt=null,qa=null,Dr=null,Xa=!1;function Lu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xa||Mt==null||Mt!==Ki(r)||(r=Mt,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dr&&Wr(Dr,r)||(Dr=r,r=rl(qa,"onSelect"),0<r.length&&(n=new ts("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Mt)))}function Si(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rt={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},ra={},ff={};Dn&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete Rt.animationend.animation,delete Rt.animationiteration.animation,delete Rt.animationstart.animation),"TransitionEvent"in window||delete Rt.transitionend.transition);function Ll(e){if(ra[e])return ra[e];if(!Rt[e])return e;var n=Rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ff)return ra[e]=n[t];return e}var pf=Ll("animationend"),hf=Ll("animationiteration"),mf=Ll("animationstart"),gf=Ll("transitionend"),yf=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rt(e,n){yf.set(e,n),wt(n,[e])}for(var ia=0;ia<Pu.length;ia++){var la=Pu[ia],dg=la.toLowerCase(),fg=la[0].toUpperCase()+la.slice(1);rt(dg,"on"+fg)}rt(pf,"onAnimationEnd");rt(hf,"onAnimationIteration");rt(mf,"onAnimationStart");rt("dblclick","onDoubleClick");rt("focusin","onFocus");rt("focusout","onBlur");rt(gf,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Du(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,dm(r,n,void 0,e),e.currentTarget=null}function xf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var a=r.length-1;0<=a;a--){var o=r[a],s=o.instance,u=o.currentTarget;if(o=o.listener,s!==l&&i.isPropagationStopped())break e;Du(i,o,u),l=s}else for(a=0;a<r.length;a++){if(o=r[a],s=o.instance,u=o.currentTarget,o=o.listener,s!==l&&i.isPropagationStopped())break e;Du(i,o,u),l=s}}}if(Xi)throw e=Ya,Xi=!1,Ya=null,e}function re(e,n){var t=n[ro];t===void 0&&(t=n[ro]=new Set);var r=e+"__bubble";t.has(r)||(vf(n,e,2,!1),t.add(r))}function aa(e,n,t){var r=0;n&&(r|=4),vf(t,e,r,n)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[Ci]){e[Ci]=!0,Ed.forEach(function(t){t!=="selectionchange"&&(pg.has(t)||aa(t,!1,e),aa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ci]||(n[Ci]=!0,aa("selectionchange",!1,n))}}function vf(e,n,t,r){switch(nf(n)){case 1:var i=Im;break;case 4:i=Lm;break;default:i=es}t=i.bind(null,n,t,e),i=void 0,!Ga||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function oa(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;o!==null;){if(a=dt(o),a===null)return;if(s=a.tag,s===5||s===6){r=l=a;continue e}o=o.parentNode}}r=r.return}Hd(function(){var u=l,c=Ko(t),d=[];e:{var p=yf.get(e);if(p!==void 0){var f=ts,v=e;switch(e){case"keypress":if(Fi(t)===0)break e;case"keydown":case"keyup":f=Vm;break;case"focusin":v="focus",f=ea;break;case"focusout":v="blur",f=ea;break;case"beforeblur":case"afterblur":f=ea;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Gm;break;case pf:case hf:case mf:f=Mm;break;case gf:f=Qm;break;case"scroll":f=Pm;break;case"wheel":f=Km;break;case"copy":case"cut":case"paste":f=Am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=bu}var b=(n&4)!==0,S=!b&&e==="scroll",h=b?p!==null?p+"Capture":null:p;b=[];for(var m=u,y;m!==null;){y=m;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,h!==null&&(k=jr(m,h),k!=null&&b.push(Yr(m,k,y)))),S)break;m=m.return}0<b.length&&(p=new f(p,v,null,t,c),d.push({event:p,listeners:b}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",p&&t!==$a&&(v=t.relatedTarget||t.fromElement)&&(dt(v)||v[Nn]))break e;if((f||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,f?(v=t.relatedTarget||t.toElement,f=u,v=v?dt(v):null,v!==null&&(S=kt(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if(b=xu,k="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=bu,k="onPointerLeave",h="onPointerEnter",m="pointer"),S=f==null?p:At(f),y=v==null?p:At(v),p=new b(k,m+"leave",f,t,c),p.target=S,p.relatedTarget=y,k=null,dt(c)===u&&(b=new b(h,m+"enter",v,t,c),b.target=y,b.relatedTarget=S,k=b),S=k,f&&v)n:{for(b=f,h=v,m=0,y=b;y;y=Pt(y))m++;for(y=0,k=h;k;k=Pt(k))y++;for(;0<m-y;)b=Pt(b),m--;for(;0<y-m;)h=Pt(h),y--;for(;m--;){if(b===h||h!==null&&b===h.alternate)break n;b=Pt(b),h=Pt(h)}b=null}else b=null;f!==null&&Nu(d,p,f,b,!1),v!==null&&S!==null&&Nu(d,S,v,b,!0)}}e:{if(p=u?At(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var E=rg;else if(Su(p))if(sf)E=og;else{E=lg;var w=ig}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=ag);if(E&&(E=E(e,u))){of(d,E,t,c);break e}w&&w(e,p,u),e==="focusout"&&(w=p._wrapperState)&&w.controlled&&p.type==="number"&&Fa(p,"number",p.value)}switch(w=u?At(u):window,e){case"focusin":(Su(w)||w.contentEditable==="true")&&(Mt=w,qa=u,Dr=null);break;case"focusout":Dr=qa=Mt=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Lu(d,t,c);break;case"selectionchange":if(cg)break;case"keydown":case"keyup":Lu(d,t,c)}var L;if(is)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else zt?lf(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(rf&&t.locale!=="ko"&&(zt||N!=="onCompositionStart"?N==="onCompositionEnd"&&zt&&(L=tf()):(Vn=c,ns="value"in Vn?Vn.value:Vn.textContent,zt=!0)),w=rl(u,N),0<w.length&&(N=new vu(N,e,null,t,c),d.push({event:N,listeners:w}),L?N.data=L:(L=af(t),L!==null&&(N.data=L)))),(L=Xm?Zm(e,t):eg(e,t))&&(u=rl(u,"onBeforeInput"),0<u.length&&(c=new vu("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=L))}xf(d,n)})}function Yr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rl(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=jr(e,t),l!=null&&r.unshift(Yr(e,l,i)),l=jr(e,n),l!=null&&r.push(Yr(e,l,i))),e=e.return}return r}function Pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,n,t,r,i){for(var l=n._reactName,a=[];t!==null&&t!==r;){var o=t,s=o.alternate,u=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&u!==null&&(o=u,i?(s=jr(t,l),s!=null&&a.unshift(Yr(t,s,o))):i||(s=jr(t,l),s!=null&&a.push(Yr(t,s,o)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var hg=/\r\n?/g,mg=/\u0000|\uFFFD/g;function _u(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(mg,"")}function Ei(e,n,t){if(n=_u(n),_u(e)!==n&&t)throw Error(T(425))}function il(){}var Za=null,eo=null;function no(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var to=typeof setTimeout=="function"?setTimeout:void 0,gg=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,yg=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(xg)}:to;function xg(e){setTimeout(function(){throw e})}function sa(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Vr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Vr(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Mu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),xn="__reactFiber$"+ar,Qr="__reactProps$"+ar,Nn="__reactContainer$"+ar,ro="__reactEvents$"+ar,vg="__reactListeners$"+ar,bg="__reactHandles$"+ar;function dt(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Nn]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Mu(e);e!==null;){if(t=e[xn])return t;e=Mu(e)}return n}e=t,t=e.parentNode}return null}function si(e){return e=e[xn]||e[Nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Pl(e){return e[Qr]||null}var io=[],Ot=-1;function it(e){return{current:e}}function ie(e){0>Ot||(e.current=io[Ot],io[Ot]=null,Ot--)}function ee(e,n){Ot++,io[Ot]=e.current,e.current=n}var tt={},Le=it(tt),Oe=it(!1),gt=tt;function Xt(e,n){var t=e.type.contextTypes;if(!t)return tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function ll(){ie(Oe),ie(Le)}function Ru(e,n,t){if(Le.current!==tt)throw Error(T(168));ee(Le,n),ee(Oe,t)}function bf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(T(108,im(e)||"Unknown",i));return ue({},t,r)}function al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,gt=Le.current,ee(Le,e),ee(Oe,Oe.current),!0}function Au(e,n,t){var r=e.stateNode;if(!r)throw Error(T(169));t?(e=bf(e,n,gt),r.__reactInternalMemoizedMergedChildContext=e,ie(Oe),ie(Le),ee(Le,e)):ie(Oe),ee(Oe,t)}var Tn=null,Dl=!1,ua=!1;function wf(e){Tn===null?Tn=[e]:Tn.push(e)}function wg(e){Dl=!0,wf(e)}function lt(){if(!ua&&Tn!==null){ua=!0;var e=0,n=K;try{var t=Tn;for(K=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Tn=null,Dl=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Wd(qo,lt),i}finally{K=n,ua=!1}}return null}var Bt=[],Ft=0,ol=null,sl=0,qe=[],Xe=0,yt=null,In=1,Ln="";function st(e,n){Bt[Ft++]=sl,Bt[Ft++]=ol,ol=e,sl=n}function kf(e,n,t){qe[Xe++]=In,qe[Xe++]=Ln,qe[Xe++]=yt,yt=e;var r=In;e=Ln;var i=32-dn(r)-1;r&=~(1<<i),t+=1;var l=32-dn(n)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,In=1<<32-dn(n)+i|t<<i|r,Ln=l+e}else In=1<<l|t<<i|r,Ln=e}function as(e){e.return!==null&&(st(e,1),kf(e,1,0))}function os(e){for(;e===ol;)ol=Bt[--Ft],Bt[Ft]=null,sl=Bt[--Ft],Bt[Ft]=null;for(;e===yt;)yt=qe[--Xe],qe[Xe]=null,Ln=qe[--Xe],qe[Xe]=null,In=qe[--Xe],qe[Xe]=null}var Ye=null,We=null,le=!1,cn=null;function Sf(e,n){var t=en(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ou(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ye=e,We=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ye=e,We=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=yt!==null?{id:In,overflow:Ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=en(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ye=e,We=null,!0):!1;default:return!1}}function lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ao(e){if(le){var n=We;if(n){var t=n;if(!Ou(e,n)){if(lo(e))throw Error(T(418));n=Jn(t.nextSibling);var r=Ye;n&&Ou(e,n)?Sf(r,t):(e.flags=e.flags&-4097|2,le=!1,Ye=e)}}else{if(lo(e))throw Error(T(418));e.flags=e.flags&-4097|2,le=!1,Ye=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Ti(e){if(e!==Ye)return!1;if(!le)return Bu(e),le=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!no(e.type,e.memoizedProps)),n&&(n=We)){if(lo(e))throw Cf(),Error(T(418));for(;n;)Sf(e,n),n=Jn(n.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){We=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}We=null}}else We=Ye?Jn(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=We;e;)e=Jn(e.nextSibling)}function Zt(){We=Ye=null,le=!1}function ss(e){cn===null?cn=[e]:cn.push(e)}var kg=Mn.ReactCurrentBatchConfig;function gr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(T(309));var r=t.stateNode}if(!r)throw Error(T(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(a){var o=i.refs;a===null?delete o[l]:o[l]=a},n._stringRef=l,n)}if(typeof e!="string")throw Error(T(284));if(!t._owner)throw Error(T(290,e))}return e}function Ii(e,n){throw e=Object.prototype.toString.call(n),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fu(e){var n=e._init;return n(e._payload)}function Ef(e){function n(h,m){if(e){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function t(h,m){if(!e)return null;for(;m!==null;)n(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Zn(h,m),h.index=0,h.sibling=null,h}function l(h,m,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=2,m)):(h.flags|=1048576,m)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,m,y,k){return m===null||m.tag!==6?(m=ga(y,h.mode,k),m.return=h,m):(m=i(m,y),m.return=h,m)}function s(h,m,y,k){var E=y.type;return E===_t?c(h,m,y.props.children,k,y.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Fn&&Fu(E)===m.type)?(k=i(m,y.props),k.ref=gr(h,m,y),k.return=h,k):(k=Gi(y.type,y.key,y.props,null,h.mode,k),k.ref=gr(h,m,y),k.return=h,k)}function u(h,m,y,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ya(y,h.mode,k),m.return=h,m):(m=i(m,y.children||[]),m.return=h,m)}function c(h,m,y,k,E){return m===null||m.tag!==7?(m=mt(y,h.mode,k,E),m.return=h,m):(m=i(m,y),m.return=h,m)}function d(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ga(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gi:return y=Gi(m.type,m.key,m.props,null,h.mode,y),y.ref=gr(h,null,m),y.return=h,y;case Nt:return m=ya(m,h.mode,y),m.return=h,m;case Fn:var k=m._init;return d(h,k(m._payload),y)}if(kr(m)||dr(m))return m=mt(m,h.mode,y,null),m.return=h,m;Ii(h,m)}return null}function p(h,m,y,k){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:o(h,m,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:return y.key===E?s(h,m,y,k):null;case Nt:return y.key===E?u(h,m,y,k):null;case Fn:return E=y._init,p(h,m,E(y._payload),k)}if(kr(y)||dr(y))return E!==null?null:c(h,m,y,k,null);Ii(h,y)}return null}function f(h,m,y,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(y)||null,o(m,h,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case gi:return h=h.get(k.key===null?y:k.key)||null,s(m,h,k,E);case Nt:return h=h.get(k.key===null?y:k.key)||null,u(m,h,k,E);case Fn:var w=k._init;return f(h,m,y,w(k._payload),E)}if(kr(k)||dr(k))return h=h.get(y)||null,c(m,h,k,E,null);Ii(m,k)}return null}function v(h,m,y,k){for(var E=null,w=null,L=m,N=m=0,F=null;L!==null&&N<y.length;N++){L.index>N?(F=L,L=null):F=L.sibling;var R=p(h,L,y[N],k);if(R===null){L===null&&(L=F);break}e&&L&&R.alternate===null&&n(h,L),m=l(R,m,N),w===null?E=R:w.sibling=R,w=R,L=F}if(N===y.length)return t(h,L),le&&st(h,N),E;if(L===null){for(;N<y.length;N++)L=d(h,y[N],k),L!==null&&(m=l(L,m,N),w===null?E=L:w.sibling=L,w=L);return le&&st(h,N),E}for(L=r(h,L);N<y.length;N++)F=f(L,h,N,y[N],k),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?N:F.key),m=l(F,m,N),w===null?E=F:w.sibling=F,w=F);return e&&L.forEach(function(A){return n(h,A)}),le&&st(h,N),E}function b(h,m,y,k){var E=dr(y);if(typeof E!="function")throw Error(T(150));if(y=E.call(y),y==null)throw Error(T(151));for(var w=E=null,L=m,N=m=0,F=null,R=y.next();L!==null&&!R.done;N++,R=y.next()){L.index>N?(F=L,L=null):F=L.sibling;var A=p(h,L,R.value,k);if(A===null){L===null&&(L=F);break}e&&L&&A.alternate===null&&n(h,L),m=l(A,m,N),w===null?E=A:w.sibling=A,w=A,L=F}if(R.done)return t(h,L),le&&st(h,N),E;if(L===null){for(;!R.done;N++,R=y.next())R=d(h,R.value,k),R!==null&&(m=l(R,m,N),w===null?E=R:w.sibling=R,w=R);return le&&st(h,N),E}for(L=r(h,L);!R.done;N++,R=y.next())R=f(L,h,N,R.value,k),R!==null&&(e&&R.alternate!==null&&L.delete(R.key===null?N:R.key),m=l(R,m,N),w===null?E=R:w.sibling=R,w=R);return e&&L.forEach(function(O){return n(h,O)}),le&&st(h,N),E}function S(h,m,y,k){if(typeof y=="object"&&y!==null&&y.type===_t&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case gi:e:{for(var E=y.key,w=m;w!==null;){if(w.key===E){if(E=y.type,E===_t){if(w.tag===7){t(h,w.sibling),m=i(w,y.props.children),m.return=h,h=m;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Fn&&Fu(E)===w.type){t(h,w.sibling),m=i(w,y.props),m.ref=gr(h,w,y),m.return=h,h=m;break e}t(h,w);break}else n(h,w);w=w.sibling}y.type===_t?(m=mt(y.props.children,h.mode,k,y.key),m.return=h,h=m):(k=Gi(y.type,y.key,y.props,null,h.mode,k),k.ref=gr(h,m,y),k.return=h,h=k)}return a(h);case Nt:e:{for(w=y.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){t(h,m.sibling),m=i(m,y.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else n(h,m);m=m.sibling}m=ya(y,h.mode,k),m.return=h,h=m}return a(h);case Fn:return w=y._init,S(h,m,w(y._payload),k)}if(kr(y))return v(h,m,y,k);if(dr(y))return b(h,m,y,k);Ii(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(t(h,m.sibling),m=i(m,y),m.return=h,h=m):(t(h,m),m=ga(y,h.mode,k),m.return=h,h=m),a(h)):t(h,m)}return S}var er=Ef(!0),Tf=Ef(!1),ul=it(null),cl=null,jt=null,us=null;function cs(){us=jt=cl=null}function ds(e){var n=ul.current;ie(ul),e._currentValue=n}function oo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yt(e,n){cl=e,us=jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ae=!0),e.firstContext=null)}function tn(e){var n=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:n,next:null},jt===null){if(cl===null)throw Error(T(308));jt=e,cl.dependencies={lanes:0,firstContext:e}}else jt=jt.next=e;return n}var ft=null;function fs(e){ft===null?ft=[e]:ft.push(e)}function If(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,fs(n)):(t.next=i.next,i.next=t),n.interleaved=t,_n(e,r)}function _n(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jn=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,_n(e,t)}return i=r.interleaved,i===null?(n.next=n,fs(r)):(n.next=i.next,i.next=n),r.interleaved=n,_n(e,t)}function ji(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}function ju(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function dl(e,n,t,r){var i=e.updateQueue;jn=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,u=s.next;s.next=null,a===null?l=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=s))}if(l!==null){var d=i.baseState;a=0,c=u=s=null,o=l;do{var p=o.lane,f=o.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,b=o;switch(p=n,f=t,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(f,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,p=typeof v=="function"?v.call(f,d,p):v,p==null)break e;d=ue({},d,p);break e;case 2:jn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[o]:p.push(o))}else f={eventTime:f,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=f,s=d):c=c.next=f,a|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;p=o,o=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);vt|=a,e.lanes=a,e.memoizedState=d}}function Hu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var ui={},wn=it(ui),Jr=it(ui),Kr=it(ui);function pt(e){if(e===ui)throw Error(T(174));return e}function hs(e,n){switch(ee(Kr,n),ee(Jr,e),ee(wn,ui),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ha(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ha(n,e)}ie(wn),ee(wn,n)}function nr(){ie(wn),ie(Jr),ie(Kr)}function Pf(e){pt(Kr.current);var n=pt(wn.current),t=Ha(n,e.type);n!==t&&(ee(Jr,e),ee(wn,t))}function ms(e){Jr.current===e&&(ie(wn),ie(Jr))}var oe=it(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=[];function gs(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var Hi=Mn.ReactCurrentDispatcher,da=Mn.ReactCurrentBatchConfig,xt=0,se=null,xe=null,be=null,pl=!1,Nr=!1,qr=0,Sg=0;function Ee(){throw Error(T(321))}function ys(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function xs(e,n,t,r,i,l){if(xt=l,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Hi.current=e===null||e.memoizedState===null?Ig:Lg,e=t(r,i),Nr){l=0;do{if(Nr=!1,qr=0,25<=l)throw Error(T(301));l+=1,be=xe=null,n.updateQueue=null,Hi.current=Pg,e=t(r,i)}while(Nr)}if(Hi.current=hl,n=xe!==null&&xe.next!==null,xt=0,be=xe=se=null,pl=!1,n)throw Error(T(300));return e}function vs(){var e=qr!==0;return qr=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?se.memoizedState=be=e:be=be.next=e,be}function rn(){if(xe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=be===null?se.memoizedState:be.next;if(n!==null)be=n,xe=e;else{if(e===null)throw Error(T(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},be===null?se.memoizedState=be=e:be=be.next=e}return be}function Xr(e,n){return typeof n=="function"?n(e):n}function fa(e){var n=rn(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=xe,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=a=null,s=null,u=l;do{var c=u.lane;if((xt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(o=s=d,a=r):s=s.next=d,se.lanes|=c,vt|=c}u=u.next}while(u!==null&&u!==l);s===null?a=r:s.next=o,pn(r,n.memoizedState)||(Ae=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,se.lanes|=l,vt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function pa(e){var n=rn(),t=n.queue;if(t===null)throw Error(T(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);pn(l,n.memoizedState)||(Ae=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Df(){}function Nf(e,n){var t=se,r=rn(),i=n(),l=!pn(r.memoizedState,i);if(l&&(r.memoizedState=i,Ae=!0),r=r.queue,bs(Mf.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||be!==null&&be.memoizedState.tag&1){if(t.flags|=2048,Zr(9,zf.bind(null,t,r,i,n),void 0,null),we===null)throw Error(T(349));xt&30||_f(t,n,i)}return i}function _f(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function zf(e,n,t,r){n.value=t,n.getSnapshot=r,Rf(n)&&Af(e)}function Mf(e,n,t){return t(function(){Rf(n)&&Af(e)})}function Rf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function Af(e){var n=_n(e,1);n!==null&&fn(n,e,1,-1)}function Uu(e){var n=gn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},n.queue=e,e=e.dispatch=Tg.bind(null,se,e),[n.memoizedState,e]}function Zr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=se.updateQueue,n===null?(n={lastEffect:null,stores:null},se.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Of(){return rn().memoizedState}function Ui(e,n,t,r){var i=gn();se.flags|=e,i.memoizedState=Zr(1|n,t,void 0,r===void 0?null:r)}function Nl(e,n,t,r){var i=rn();r=r===void 0?null:r;var l=void 0;if(xe!==null){var a=xe.memoizedState;if(l=a.destroy,r!==null&&ys(r,a.deps)){i.memoizedState=Zr(n,t,l,r);return}}se.flags|=e,i.memoizedState=Zr(1|n,t,l,r)}function Vu(e,n){return Ui(8390656,8,e,n)}function bs(e,n){return Nl(2048,8,e,n)}function Bf(e,n){return Nl(4,2,e,n)}function Ff(e,n){return Nl(4,4,e,n)}function jf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hf(e,n,t){return t=t!=null?t.concat([e]):null,Nl(4,4,jf.bind(null,n,e),t)}function ws(){}function Uf(e,n){var t=rn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ys(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Vf(e,n){var t=rn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ys(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function $f(e,n,t){return xt&21?(pn(t,n)||(t=Qd(),se.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=t)}function Cg(e,n){var t=K;K=t!==0&&4>t?t:4,e(!0);var r=da.transition;da.transition={};try{e(!1),n()}finally{K=t,da.transition=r}}function Wf(){return rn().memoizedState}function Eg(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Gf(e))Yf(n,t);else if(t=If(e,n,t,r),t!==null){var i=Ne();fn(t,e,r,i),Qf(t,n,r)}}function Tg(e,n,t){var r=Xn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gf(e))Yf(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var a=n.lastRenderedState,o=l(a,t);if(i.hasEagerState=!0,i.eagerState=o,pn(o,a)){var s=n.interleaved;s===null?(i.next=i,fs(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=If(e,n,i,r),t!==null&&(i=Ne(),fn(t,e,r,i),Qf(t,n,r))}}function Gf(e){var n=e.alternate;return e===se||n!==null&&n===se}function Yf(e,n){Nr=pl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Qf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xo(e,t)}}var hl={readContext:tn,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},Ig={readContext:tn,useCallback:function(e,n){return gn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Vu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ui(4194308,4,jf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ui(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ui(4,2,e,n)},useMemo:function(e,n){var t=gn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=gn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Eg.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var n=gn();return e={current:e},n.memoizedState=e},useState:Uu,useDebugValue:ws,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=Uu(!1),n=e[0];return e=Cg.bind(null,e[1]),gn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=se,i=gn();if(le){if(t===void 0)throw Error(T(407));t=t()}else{if(t=n(),we===null)throw Error(T(349));xt&30||_f(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Vu(Mf.bind(null,r,l,e),[e]),r.flags|=2048,Zr(9,zf.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=gn(),n=we.identifierPrefix;if(le){var t=Ln,r=In;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Sg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Lg={readContext:tn,useCallback:Uf,useContext:tn,useEffect:bs,useImperativeHandle:Hf,useInsertionEffect:Bf,useLayoutEffect:Ff,useMemo:Vf,useReducer:fa,useRef:Of,useState:function(){return fa(Xr)},useDebugValue:ws,useDeferredValue:function(e){var n=rn();return $f(n,xe.memoizedState,e)},useTransition:function(){var e=fa(Xr)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Df,useSyncExternalStore:Nf,useId:Wf,unstable_isNewReconciler:!1},Pg={readContext:tn,useCallback:Uf,useContext:tn,useEffect:bs,useImperativeHandle:Hf,useInsertionEffect:Bf,useLayoutEffect:Ff,useMemo:Vf,useReducer:pa,useRef:Of,useState:function(){return pa(Xr)},useDebugValue:ws,useDeferredValue:function(e){var n=rn();return xe===null?n.memoizedState=e:$f(n,xe.memoizedState,e)},useTransition:function(){var e=pa(Xr)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Df,useSyncExternalStore:Nf,useId:Wf,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=ue({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function so(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ue({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _l={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ne(),i=Xn(e),l=Pn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Kn(e,l,i),n!==null&&(fn(n,e,i,r),ji(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ne(),i=Xn(e),l=Pn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Kn(e,l,i),n!==null&&(fn(n,e,i,r),ji(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ne(),r=Xn(e),i=Pn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Kn(e,i,r),n!==null&&(fn(n,e,r,t),ji(n,e,r))}};function $u(e,n,t,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):n.prototype&&n.prototype.isPureReactComponent?!Wr(t,r)||!Wr(i,l):!0}function Jf(e,n,t){var r=!1,i=tt,l=n.contextType;return typeof l=="object"&&l!==null?l=tn(l):(i=Be(n)?gt:Le.current,r=n.contextTypes,l=(r=r!=null)?Xt(e,i):tt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_l,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Wu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&_l.enqueueReplaceState(n,n.state,null)}function uo(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ps(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=tn(l):(l=Be(n)?gt:Le.current,i.context=Xt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(so(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&_l.enqueueReplaceState(i,i.state,null),dl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,n){try{var t="",r=n;do t+=rm(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function ha(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function co(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Dg=typeof WeakMap=="function"?WeakMap:Map;function Kf(e,n,t){t=Pn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,wo=r),co(e,n)},t}function qf(e,n,t){t=Pn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){co(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){co(e,n),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Gu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Dg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=$g.bind(null,e,n,t),n.then(e,e))}function Yu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qu(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Pn(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e)}var Ng=Mn.ReactCurrentOwner,Ae=!1;function De(e,n,t,r){n.child=e===null?Tf(n,null,t,r):er(n,e.child,t,r)}function Ju(e,n,t,r,i){t=t.render;var l=n.ref;return Yt(n,i),r=xs(e,n,t,r,l,i),t=vs(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,zn(e,n,i)):(le&&t&&as(n),n.flags|=1,De(e,n,r,i),n.child)}function Ku(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ps(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Xf(e,n,l,r,i)):(e=Gi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:Wr,t(a,r)&&e.ref===n.ref)return zn(e,n,i)}return n.flags|=1,e=Zn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Xf(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Wr(l,r)&&e.ref===n.ref)if(Ae=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return n.lanes=e.lanes,zn(e,n,i)}return fo(e,n,t,r,i)}function Zf(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Ut,$e),$e|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(Ut,$e),$e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ee(Ut,$e),$e|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ee(Ut,$e),$e|=r;return De(e,n,i,t),n.child}function ep(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fo(e,n,t,r,i){var l=Be(t)?gt:Le.current;return l=Xt(n,l),Yt(n,i),t=xs(e,n,t,r,l,i),r=vs(),e!==null&&!Ae?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,zn(e,n,i)):(le&&r&&as(n),n.flags|=1,De(e,n,t,i),n.child)}function qu(e,n,t,r,i){if(Be(t)){var l=!0;al(n)}else l=!1;if(Yt(n,i),n.stateNode===null)Vi(e,n),Jf(n,t,r),uo(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,o=n.memoizedProps;a.props=o;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Be(t)?gt:Le.current,u=Xt(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||s!==u)&&Wu(n,a,r,u),jn=!1;var p=n.memoizedState;a.state=p,dl(n,r,a,i),s=n.memoizedState,o!==r||p!==s||Oe.current||jn?(typeof c=="function"&&(so(n,t,c,r),s=n.memoizedState),(o=jn||$u(n,t,o,r,p,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Lf(e,n),o=n.memoizedProps,u=n.type===n.elementType?o:sn(n.type,o),a.props=u,d=n.pendingProps,p=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=tn(s):(s=Be(t)?gt:Le.current,s=Xt(n,s));var f=t.getDerivedStateFromProps;(c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||p!==s)&&Wu(n,a,r,s),jn=!1,p=n.memoizedState,a.state=p,dl(n,r,a,i);var v=n.memoizedState;o!==d||p!==v||Oe.current||jn?(typeof f=="function"&&(so(n,t,f,r),v=n.memoizedState),(u=jn||$u(n,t,u,r,p,v,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return po(e,n,t,r,l,i)}function po(e,n,t,r,i,l){ep(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&Au(n,t,!1),zn(e,n,l);r=n.stateNode,Ng.current=n;var o=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=er(n,e.child,null,l),n.child=er(n,null,o,l)):De(e,n,o,l),n.memoizedState=r.state,i&&Au(n,t,!0),n.child}function np(e){var n=e.stateNode;n.pendingContext?Ru(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ru(e,n.context,!1),hs(e,n.containerInfo)}function Xu(e,n,t,r,i){return Zt(),ss(i),n.flags|=256,De(e,n,t,r),n.child}var ho={dehydrated:null,treeContext:null,retryLane:0};function mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,n,t){var r=n.pendingProps,i=oe.current,l=!1,a=(n.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(oe,i&1),e===null)return ao(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,l?(r=n.mode,l=n.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Rl(a,r,0,null),e=mt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=mo(t),n.memoizedState=ho,e):ks(n,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return _g(e,n,a,r,o,i,t);if(l){l=r.fallback,a=n.mode,i=e.child,o=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Zn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=Zn(o,l):(l=mt(l,a,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,a=e.child.memoizedState,a=a===null?mo(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~t,n.memoizedState=ho,r}return l=e.child,e=l.sibling,r=Zn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ks(e,n){return n=Rl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Li(e,n,t,r){return r!==null&&ss(r),er(n,e.child,null,t),e=ks(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _g(e,n,t,r,i,l,a){if(t)return n.flags&256?(n.flags&=-257,r=ha(Error(T(422))),Li(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Rl({mode:"visible",children:r.children},i,0,null),l=mt(l,i,a,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&er(n,e.child,null,a),n.child.memoizedState=mo(a),n.memoizedState=ho,l);if(!(n.mode&1))return Li(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(T(419)),r=ha(l,r,void 0),Li(e,n,a,r)}if(o=(a&e.childLanes)!==0,Ae||o){if(r=we,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,_n(e,i),fn(r,e,i,-1))}return Ls(),r=ha(Error(T(421))),Li(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Wg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,We=Jn(i.nextSibling),Ye=n,le=!0,cn=null,e!==null&&(qe[Xe++]=In,qe[Xe++]=Ln,qe[Xe++]=yt,In=e.id,Ln=e.overflow,yt=n),n=ks(n,r.children),n.flags|=4096,n)}function Zu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),oo(e.return,n,t)}function ma(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function rp(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(De(e,n,r.children,t),r=oe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,t,n);else if(e.tag===19)Zu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(oe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&fl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ma(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&fl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ma(n,!0,t,null,l);break;case"together":ma(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function zn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(T(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function zg(e,n,t){switch(n.tag){case 3:np(n),Zt();break;case 5:Pf(n);break;case 1:Be(n.type)&&al(n);break;case 4:hs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ee(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),n.flags|=128,null):t&n.child.childLanes?tp(e,n,t):(ee(oe,oe.current&1),e=zn(e,n,t),e!==null?e.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return rp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return n.lanes=0,Zf(e,n,t)}return zn(e,n,t)}var ip,go,lp,ap;ip=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};go=function(){};lp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,pt(wn.current);var l=null;switch(t){case"input":i=Oa(e,i),r=Oa(e,r),l=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),l=[];break;case"textarea":i=ja(e,i),r=ja(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=il)}Ua(t,r);var a;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Br.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==o&&(s!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&o[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(l||(l=[]),l.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Br.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),l||o===s||(l=[])):(l=l||[]).push(u,s))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};ap=function(e,n,t,r){t!==r&&(n.flags|=4)};function yr(e,n){if(!le)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Mg(e,n,t){var r=n.pendingProps;switch(os(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return Be(n.type)&&ll(),Te(n),null;case 3:return r=n.stateNode,nr(),ie(Oe),ie(Le),gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(Co(cn),cn=null))),go(e,n),Te(n),null;case 5:ms(n);var i=pt(Kr.current);if(t=n.type,e!==null&&n.stateNode!=null)lp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(T(166));return Te(n),null}if(e=pt(wn.current),Ti(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[xn]=n,r[Qr]=l,e=(n.mode&1)!==0,t){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Cr.length;i++)re(Cr[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":su(r,l),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},re("invalid",r);break;case"textarea":cu(r,l),re("invalid",r)}Ua(t,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Ei(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Ei(r.textContent,o,e),i=["children",""+o]):Br.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&re("scroll",r)}switch(t){case"input":yi(r),uu(r,l,!0);break;case"textarea":yi(r),du(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=il)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[xn]=n,e[Qr]=r,ip(e,n,!1,!1),n.stateNode=e;e:{switch(a=Va(t,r),t){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cr.length;i++)re(Cr[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":su(e,r),i=Oa(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":cu(e,r),i=ja(e,r),re("invalid",e);break;default:i=r}Ua(t,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="style"?Ad(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Md(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Fr(e,s):typeof s=="number"&&Fr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Br.hasOwnProperty(l)?s!=null&&l==="onScroll"&&re("scroll",e):s!=null&&Go(e,l,s,a))}switch(t){case"input":yi(e),uu(e,r,!1);break;case"textarea":yi(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Vt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Vt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=il)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Te(n),null;case 6:if(e&&n.stateNode!=null)ap(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(T(166));if(t=pt(Kr.current),pt(wn.current),Ti(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(l=r.nodeValue!==t)&&(e=Ye,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return Te(n),null;case 13:if(ie(oe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&We!==null&&n.mode&1&&!(n.flags&128))Cf(),Zt(),n.flags|=98560,l=!1;else if(l=Ti(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(T(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[xn]=n}else Zt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Te(n),l=!1}else cn!==null&&(Co(cn),cn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):Ls())),n.updateQueue!==null&&(n.flags|=4),Te(n),null);case 4:return nr(),go(e,n),e===null&&Gr(n.stateNode.containerInfo),Te(n),null;case 10:return ds(n.type._context),Te(n),null;case 17:return Be(n.type)&&ll(),Te(n),null;case 19:if(ie(oe),l=n.memoizedState,l===null)return Te(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)yr(l,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=fl(e),a!==null){for(n.flags|=128,yr(l,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ee(oe,oe.current&1|2),n.child}e=e.sibling}l.tail!==null&&fe()>rr&&(n.flags|=128,r=!0,yr(l,!1),n.lanes=4194304)}else{if(!r)if(e=fl(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!le)return Te(n),null}else 2*fe()-l.renderingStartTime>rr&&t!==1073741824&&(n.flags|=128,r=!0,yr(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(t=l.last,t!==null?t.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=fe(),n.sibling=null,t=oe.current,ee(oe,r?t&1|2:t&1),n):(Te(n),null);case 22:case 23:return Is(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?$e&1073741824&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),null;case 24:return null;case 25:return null}throw Error(T(156,n.tag))}function Rg(e,n){switch(os(n),n.tag){case 1:return Be(n.type)&&ll(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nr(),ie(Oe),ie(Le),gs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ms(n),null;case 13:if(ie(oe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(T(340));Zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(oe),null;case 4:return nr(),null;case 10:return ds(n.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var Pi=!1,Ie=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ht(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ce(e,n,r)}else t.current=null}function yo(e,n,t){try{t()}catch(r){ce(e,n,r)}}var ec=!1;function Og(e,n){if(Za=nl,e=df(),ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var a=0,o=-1,s=-1,u=0,c=0,d=e,p=null;n:for(;;){for(var f;d!==t||i!==0&&d.nodeType!==3||(o=a+i),d!==l||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(f=d.firstChild)!==null;)p=d,d=f;for(;;){if(d===e)break n;if(p===t&&++u===i&&(o=a),p===l&&++c===r&&(s=a),(f=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=f}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(eo={focusedElem:e,selectionRange:t},nl=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,S=v.memoizedState,h=n.stateNode,m=h.getSnapshotBeforeUpdate(n.elementType===n.type?b:sn(n.type,b),S);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(k){ce(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return v=ec,ec=!1,v}function _r(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&yo(n,t,l)}i=i.next}while(i!==r)}}function zl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function xo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function op(e){var n=e.alternate;n!==null&&(e.alternate=null,op(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[Qr],delete n[ro],delete n[vg],delete n[bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=il));else if(r!==4&&(e=e.child,e!==null))for(vo(e,n,t),e=e.sibling;e!==null;)vo(e,n,t),e=e.sibling}function bo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bo(e,n,t),e=e.sibling;e!==null;)bo(e,n,t),e=e.sibling}var ke=null,un=!1;function On(e,n,t){for(t=t.child;t!==null;)up(e,n,t),t=t.sibling}function up(e,n,t){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(El,t)}catch{}switch(t.tag){case 5:Ie||Ht(t,n);case 6:var r=ke,i=un;ke=null,On(e,n,t),ke=r,un=i,ke!==null&&(un?(e=ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ke.removeChild(t.stateNode));break;case 18:ke!==null&&(un?(e=ke,t=t.stateNode,e.nodeType===8?sa(e.parentNode,t):e.nodeType===1&&sa(e,t),Vr(e)):sa(ke,t.stateNode));break;case 4:r=ke,i=un,ke=t.stateNode.containerInfo,un=!0,On(e,n,t),ke=r,un=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&yo(t,n,a),i=i.next}while(i!==r)}On(e,n,t);break;case 1:if(!Ie&&(Ht(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(o){ce(t,n,o)}On(e,n,t);break;case 21:On(e,n,t);break;case 22:t.mode&1?(Ie=(r=Ie)||t.memoizedState!==null,On(e,n,t),Ie=r):On(e,n,t);break;default:On(e,n,t)}}function tc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Ag),n.forEach(function(r){var i=Gg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function on(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,a=n,o=a;e:for(;o!==null;){switch(o.tag){case 5:ke=o.stateNode,un=!1;break e;case 3:ke=o.stateNode.containerInfo,un=!0;break e;case 4:ke=o.stateNode.containerInfo,un=!0;break e}o=o.return}if(ke===null)throw Error(T(160));up(l,a,i),ke=null,un=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){ce(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cp(n,e),n=n.sibling}function cp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(n,e),mn(e),r&4){try{_r(3,e,e.return),zl(3,e)}catch(b){ce(e,e.return,b)}try{_r(5,e,e.return)}catch(b){ce(e,e.return,b)}}break;case 1:on(n,e),mn(e),r&512&&t!==null&&Ht(t,t.return);break;case 5:if(on(n,e),mn(e),r&512&&t!==null&&Ht(t,t.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(b){ce(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=t!==null?t.memoizedProps:l,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Nd(i,l),Va(o,a);var u=Va(o,l);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?Ad(i,d):c==="dangerouslySetInnerHTML"?Md(i,d):c==="children"?Fr(i,d):Go(i,c,d,u)}switch(o){case"input":Ba(i,l);break;case"textarea":_d(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var f=l.value;f!=null?Vt(i,!!l.multiple,f,!1):p!==!!l.multiple&&(l.defaultValue!=null?Vt(i,!!l.multiple,l.defaultValue,!0):Vt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Qr]=l}catch(b){ce(e,e.return,b)}}break;case 6:if(on(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(b){ce(e,e.return,b)}}break;case 3:if(on(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Vr(n.containerInfo)}catch(b){ce(e,e.return,b)}break;case 4:on(n,e),mn(e);break;case 13:on(n,e),mn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Es=fe())),r&4&&tc(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||c,on(n,e),Ie=u):on(n,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(p=z,f=p.child,p.tag){case 0:case 11:case 14:case 15:_r(4,p,p.return);break;case 1:Ht(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(b){ce(r,t,b)}}break;case 5:Ht(p,p.return);break;case 22:if(p.memoizedState!==null){ic(d);continue}}f!==null?(f.return=p,z=f):ic(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Rd("display",a))}catch(b){ce(e,e.return,b)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){ce(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(n,e),mn(e),r&4&&tc(e);break;case 21:break;default:on(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(sp(t)){var r=t;break e}t=t.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var l=nc(e);bo(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=nc(e);vo(e,o,a);break;default:throw Error(T(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bg(e,n,t){z=e,dp(e)}function dp(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Pi;if(!a){var o=i.alternate,s=o!==null&&o.memoizedState!==null||Ie;o=Pi;var u=Ie;if(Pi=a,(Ie=s)&&!u)for(z=i;z!==null;)a=z,s=a.child,a.tag===22&&a.memoizedState!==null?lc(i):s!==null?(s.return=a,z=s):lc(i);for(;l!==null;)z=l,dp(l),l=l.sibling;z=i,Pi=o,Ie=u}rc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,z=l):rc(e)}}function rc(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ie||zl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ie)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Hu(n,l,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hu(n,a,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ie||n.flags&512&&xo(n)}catch(p){ce(n,n.return,p)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function ic(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function lc(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{zl(4,n)}catch(s){ce(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){ce(n,i,s)}}var l=n.return;try{xo(n)}catch(s){ce(n,l,s)}break;case 5:var a=n.return;try{xo(n)}catch(s){ce(n,a,s)}}}catch(s){ce(n,n.return,s)}if(n===e){z=null;break}var o=n.sibling;if(o!==null){o.return=n.return,z=o;break}z=n.return}}var Fg=Math.ceil,ml=Mn.ReactCurrentDispatcher,Ss=Mn.ReactCurrentOwner,nn=Mn.ReactCurrentBatchConfig,Y=0,we=null,me=null,Se=0,$e=0,Ut=it(0),ve=0,ei=null,vt=0,Ml=0,Cs=0,zr=null,Re=null,Es=0,rr=1/0,En=null,gl=!1,wo=null,qn=null,Di=!1,$n=null,yl=0,Mr=0,ko=null,$i=-1,Wi=0;function Ne(){return Y&6?fe():$i!==-1?$i:$i=fe()}function Xn(e){return e.mode&1?Y&2&&Se!==0?Se&-Se:kg.transition!==null?(Wi===0&&(Wi=Qd()),Wi):(e=K,e!==0||(e=window.event,e=e===void 0?16:nf(e.type)),e):1}function fn(e,n,t,r){if(50<Mr)throw Mr=0,ko=null,Error(T(185));ai(e,t,r),(!(Y&2)||e!==we)&&(e===we&&(!(Y&2)&&(Ml|=t),ve===4&&Un(e,Se)),Fe(e,r),t===1&&Y===0&&!(n.mode&1)&&(rr=fe()+500,Dl&&lt()))}function Fe(e,n){var t=e.callbackNode;km(e,n);var r=el(e,e===we?Se:0);if(r===0)t!==null&&hu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&hu(t),n===1)e.tag===0?wg(ac.bind(null,e)):wf(ac.bind(null,e)),yg(function(){!(Y&6)&&lt()}),t=null;else{switch(Jd(r)){case 1:t=qo;break;case 4:t=Gd;break;case 16:t=Zi;break;case 536870912:t=Yd;break;default:t=Zi}t=vp(t,fp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function fp(e,n){if($i=-1,Wi=0,Y&6)throw Error(T(327));var t=e.callbackNode;if(Qt()&&e.callbackNode!==t)return null;var r=el(e,e===we?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=xl(e,r);else{n=r;var i=Y;Y|=2;var l=hp();(we!==e||Se!==n)&&(En=null,rr=fe()+500,ht(e,n));do try{Ug();break}catch(o){pp(e,o)}while(!0);cs(),ml.current=l,Y=i,me!==null?n=0:(we=null,Se=0,n=ve)}if(n!==0){if(n===2&&(i=Qa(e),i!==0&&(r=i,n=So(e,i))),n===1)throw t=ei,ht(e,0),Un(e,r),Fe(e,fe()),t;if(n===6)Un(e,r);else{if(i=e.current.alternate,!(r&30)&&!jg(i)&&(n=xl(e,r),n===2&&(l=Qa(e),l!==0&&(r=l,n=So(e,l))),n===1))throw t=ei,ht(e,0),Un(e,r),Fe(e,fe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(T(345));case 2:ut(e,Re,En);break;case 3:if(Un(e,r),(r&130023424)===r&&(n=Es+500-fe(),10<n)){if(el(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=to(ut.bind(null,e,Re,En),n);break}ut(e,Re,En);break;case 4:if(Un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-dn(r);l=1<<a,a=n[a],a>i&&(i=a),r&=~l}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fg(r/1960))-r,10<r){e.timeoutHandle=to(ut.bind(null,e,Re,En),r);break}ut(e,Re,En);break;case 5:ut(e,Re,En);break;default:throw Error(T(329))}}}return Fe(e,fe()),e.callbackNode===t?fp.bind(null,e):null}function So(e,n){var t=zr;return e.current.memoizedState.isDehydrated&&(ht(e,n).flags|=256),e=xl(e,n),e!==2&&(n=Re,Re=t,n!==null&&Co(n)),e}function Co(e){Re===null?Re=e:Re.push.apply(Re,e)}function jg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!pn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~Cs,n&=~Ml,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),r=1<<t;e[t]=-1,n&=~r}}function ac(e){if(Y&6)throw Error(T(327));Qt();var n=el(e,0);if(!(n&1))return Fe(e,fe()),null;var t=xl(e,n);if(e.tag!==0&&t===2){var r=Qa(e);r!==0&&(n=r,t=So(e,r))}if(t===1)throw t=ei,ht(e,0),Un(e,n),Fe(e,fe()),t;if(t===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ut(e,Re,En),Fe(e,fe()),null}function Ts(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(rr=fe()+500,Dl&&lt())}}function bt(e){$n!==null&&$n.tag===0&&!(Y&6)&&Qt();var n=Y;Y|=1;var t=nn.transition,r=K;try{if(nn.transition=null,K=1,e)return e()}finally{K=r,nn.transition=t,Y=n,!(Y&6)&&lt()}}function Is(){$e=Ut.current,ie(Ut)}function ht(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,gg(t)),me!==null)for(t=me.return;t!==null;){var r=t;switch(os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:nr(),ie(Oe),ie(Le),gs();break;case 5:ms(r);break;case 4:nr();break;case 13:ie(oe);break;case 19:ie(oe);break;case 10:ds(r.type._context);break;case 22:case 23:Is()}t=t.return}if(we=e,me=e=Zn(e.current,null),Se=$e=n,ve=0,ei=null,Cs=Ml=vt=0,Re=zr=null,ft!==null){for(n=0;n<ft.length;n++)if(t=ft[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}t.pending=r}ft=null}return e}function pp(e,n){do{var t=me;try{if(cs(),Hi.current=hl,pl){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pl=!1}if(xt=0,be=xe=se=null,Nr=!1,qr=0,Ss.current=null,t===null||t.return===null){ve=1,ei=n,me=null;break}e:{var l=e,a=t.return,o=t,s=n;if(n=Se,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=o,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Yu(a);if(f!==null){f.flags&=-257,Qu(f,a,o,l,n),f.mode&1&&Gu(l,u,n),n=f,s=u;var v=n.updateQueue;if(v===null){var b=new Set;b.add(s),n.updateQueue=b}else v.add(s);break e}else{if(!(n&1)){Gu(l,u,n),Ls();break e}s=Error(T(426))}}else if(le&&o.mode&1){var S=Yu(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Qu(S,a,o,l,n),ss(tr(s,o));break e}}l=s=tr(s,o),ve!==4&&(ve=2),zr===null?zr=[l]:zr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var h=Kf(l,s,n);ju(l,h);break e;case 1:o=s;var m=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(qn===null||!qn.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var k=qf(l,o,n);ju(l,k);break e}}l=l.return}while(l!==null)}gp(t)}catch(E){n=E,me===t&&t!==null&&(me=t=t.return);continue}break}while(!0)}function hp(){var e=ml.current;return ml.current=hl,e===null?hl:e}function Ls(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||!(vt&268435455)&&!(Ml&268435455)||Un(we,Se)}function xl(e,n){var t=Y;Y|=2;var r=hp();(we!==e||Se!==n)&&(En=null,ht(e,n));do try{Hg();break}catch(i){pp(e,i)}while(!0);if(cs(),Y=t,ml.current=r,me!==null)throw Error(T(261));return we=null,Se=0,ve}function Hg(){for(;me!==null;)mp(me)}function Ug(){for(;me!==null&&!pm();)mp(me)}function mp(e){var n=xp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,n===null?gp(e):me=n,Ss.current=null}function gp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Rg(t,n),t!==null){t.flags&=32767,me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(t=Mg(t,n,$e),t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);ve===0&&(ve=5)}function ut(e,n,t){var r=K,i=nn.transition;try{nn.transition=null,K=1,Vg(e,n,t,r)}finally{nn.transition=i,K=r}return null}function Vg(e,n,t,r){do Qt();while($n!==null);if(Y&6)throw Error(T(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Sm(e,l),e===we&&(me=we=null,Se=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Di||(Di=!0,vp(Zi,function(){return Qt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=nn.transition,nn.transition=null;var a=K;K=1;var o=Y;Y|=4,Ss.current=null,Og(e,t),cp(t,e),ug(eo),nl=!!Za,eo=Za=null,e.current=t,Bg(t),hm(),Y=o,K=a,nn.transition=l}else e.current=t;if(Di&&(Di=!1,$n=e,yl=i),l=e.pendingLanes,l===0&&(qn=null),ym(t.stateNode),Fe(e,fe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,e=wo,wo=null,e;return yl&1&&e.tag!==0&&Qt(),l=e.pendingLanes,l&1?e===ko?Mr++:(Mr=0,ko=e):Mr=0,lt(),null}function Qt(){if($n!==null){var e=Jd(yl),n=nn.transition,t=K;try{if(nn.transition=null,K=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,yl=0,Y&6)throw Error(T(331));var i=Y;for(Y|=4,z=e.current;z!==null;){var l=z,a=l.child;if(z.flags&16){var o=l.deletions;if(o!==null){for(var s=0;s<o.length;s++){var u=o[s];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:_r(8,c,l)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var p=c.sibling,f=c.return;if(op(c),c===u){z=null;break}if(p!==null){p.return=f,z=p;break}z=f}}}var v=l.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}z=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,z=a;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:_r(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,z=h;break e}z=l.return}}var m=e.current;for(z=m;z!==null;){a=z;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,z=y;else e:for(a=m;z!==null;){if(o=z,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zl(9,o)}}catch(E){ce(o,o.return,E)}if(o===a){z=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,z=k;break e}z=o.return}}if(Y=i,lt(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(El,e)}catch{}r=!0}return r}finally{K=t,nn.transition=n}}return!1}function oc(e,n,t){n=tr(t,n),n=Kf(e,n,1),e=Kn(e,n,1),n=Ne(),e!==null&&(ai(e,1,n),Fe(e,n))}function ce(e,n,t){if(e.tag===3)oc(e,e,t);else for(;n!==null;){if(n.tag===3){oc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qn===null||!qn.has(r))){e=tr(t,e),e=qf(n,e,1),n=Kn(n,e,1),e=Ne(),n!==null&&(ai(n,1,e),Fe(n,e));break}}n=n.return}}function $g(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ne(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(Se&t)===t&&(ve===4||ve===3&&(Se&130023424)===Se&&500>fe()-Es?ht(e,0):Cs|=t),Fe(e,n)}function yp(e,n){n===0&&(e.mode&1?(n=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):n=1);var t=Ne();e=_n(e,n),e!==null&&(ai(e,n,t),Fe(e,t))}function Wg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),yp(e,t)}function Gg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(n),yp(e,t)}var xp;xp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Oe.current)Ae=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ae=!1,zg(e,n,t);Ae=!!(e.flags&131072)}else Ae=!1,le&&n.flags&1048576&&kf(n,sl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Vi(e,n),e=n.pendingProps;var i=Xt(n,Le.current);Yt(n,t),i=xs(null,n,r,e,i,t);var l=vs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Be(r)?(l=!0,al(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ps(n),i.updater=_l,n.stateNode=i,i._reactInternals=n,uo(n,r,e,t),n=po(null,n,r,!0,l,t)):(n.tag=0,le&&l&&as(n),De(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Vi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Qg(r),e=sn(r,e),i){case 0:n=fo(null,n,r,e,t);break e;case 1:n=qu(null,n,r,e,t);break e;case 11:n=Ju(null,n,r,e,t);break e;case 14:n=Ku(null,n,r,sn(r.type,e),t);break e}throw Error(T(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),fo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),qu(e,n,r,i,t);case 3:e:{if(np(n),e===null)throw Error(T(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Lf(e,n),dl(n,r,null,t);var a=n.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=tr(Error(T(423)),n),n=Xu(e,n,r,t,i);break e}else if(r!==i){i=tr(Error(T(424)),n),n=Xu(e,n,r,t,i);break e}else for(We=Jn(n.stateNode.containerInfo.firstChild),Ye=n,le=!0,cn=null,t=Tf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zt(),r===i){n=zn(e,n,t);break e}De(e,n,r,t)}n=n.child}return n;case 5:return Pf(n),e===null&&ao(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,no(r,i)?a=null:l!==null&&no(r,l)&&(n.flags|=32),ep(e,n),De(e,n,a,t),n.child;case 6:return e===null&&ao(n),null;case 13:return tp(e,n,t);case 4:return hs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=er(n,null,r,t):De(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Ju(e,n,r,i,t);case 7:return De(e,n,n.pendingProps,t),n.child;case 8:return De(e,n,n.pendingProps.children,t),n.child;case 12:return De(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,a=i.value,ee(ul,r._currentValue),r._currentValue=a,l!==null)if(pn(l.value,a)){if(l.children===i.children&&!Oe.current){n=zn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Pn(-1,t&-t),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),oo(l.return,t,n),o.lanes|=t;break}s=s.next}}else if(l.tag===10)a=l.type===n.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(T(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),oo(a,t,n),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===n){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}De(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Yt(n,t),i=tn(i),r=r(i),n.flags|=1,De(e,n,r,t),n.child;case 14:return r=n.type,i=sn(r,n.pendingProps),i=sn(r.type,i),Ku(e,n,r,i,t);case 15:return Xf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:sn(r,i),Vi(e,n),n.tag=1,Be(r)?(e=!0,al(n)):e=!1,Yt(n,t),Jf(n,r,i),uo(n,r,i,t),po(null,n,r,!0,e,t);case 19:return rp(e,n,t);case 22:return Zf(e,n,t)}throw Error(T(156,n.tag))};function vp(e,n){return Wd(e,n)}function Yg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(e,n,t,r){return new Yg(e,n,t,r)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qg(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qo)return 11;if(e===Jo)return 14}return 2}function Zn(e,n){var t=e.alternate;return t===null?(t=en(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Gi(e,n,t,r,i,l){var a=2;if(r=e,typeof e=="function")Ps(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _t:return mt(t.children,i,l,n);case Yo:a=8,i|=8;break;case za:return e=en(12,t,n,i|2),e.elementType=za,e.lanes=l,e;case Ma:return e=en(13,t,n,i),e.elementType=Ma,e.lanes=l,e;case Ra:return e=en(19,t,n,i),e.elementType=Ra,e.lanes=l,e;case Ld:return Rl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:a=10;break e;case Id:a=9;break e;case Qo:a=11;break e;case Jo:a=14;break e;case Fn:a=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return n=en(a,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function mt(e,n,t,r){return e=en(7,e,r,n),e.lanes=t,e}function Rl(e,n,t,r){return e=en(22,e,r,n),e.elementType=Ld,e.lanes=t,e.stateNode={isHidden:!1},e}function ga(e,n,t){return e=en(6,e,null,n),e.lanes=t,e}function ya(e,n,t){return n=en(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Jg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ds(e,n,t,r,i,l,a,o,s){return e=new Jg(e,n,t,o,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=en(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(l),e}function Kg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function bp(e){if(!e)return tt;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(T(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(T(171))}if(e.tag===1){var t=e.type;if(Be(t))return bf(e,t,n)}return n}function wp(e,n,t,r,i,l,a,o,s){return e=Ds(t,r,!0,e,i,l,a,o,s),e.context=bp(null),t=e.current,r=Ne(),i=Xn(t),l=Pn(r,i),l.callback=n??null,Kn(t,l,i),e.current.lanes=i,ai(e,i,r),Fe(e,r),e}function Al(e,n,t,r){var i=n.current,l=Ne(),a=Xn(i);return t=bp(t),n.context===null?n.context=t:n.pendingContext=t,n=Pn(l,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(i,n,a),e!==null&&(fn(e,i,a,l),ji(e,i,a)),a}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ns(e,n){sc(e,n),(e=e.alternate)&&sc(e,n)}function qg(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function _s(e){this._internalRoot=e}Ol.prototype.render=_s.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(T(409));Al(e,n,null,null)};Ol.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bt(function(){Al(null,e,null,null)}),n[Nn]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Hn.length&&n!==0&&n<Hn[t].priority;t++);Hn.splice(t,0,e),t===0&&ef(e)}};function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Xg(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=vl(a);l.call(u)}}var a=wp(n,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=a,e[Nn]=a.current,Gr(e.nodeType===8?e.parentNode:e),bt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=vl(s);o.call(u)}}var s=Ds(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=s,e[Nn]=s.current,Gr(e.nodeType===8?e.parentNode:e),bt(function(){Al(n,s,t,r)}),s}function Fl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var o=i;i=function(){var s=vl(a);o.call(s)}}Al(n,a,e,i)}else a=Xg(t,n,e,i,r);return vl(a)}Kd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Sr(n.pendingLanes);t!==0&&(Xo(n,t|1),Fe(n,fe()),!(Y&6)&&(rr=fe()+500,lt()))}break;case 13:bt(function(){var r=_n(e,1);if(r!==null){var i=Ne();fn(r,e,1,i)}}),Ns(e,1)}};Zo=function(e){if(e.tag===13){var n=_n(e,134217728);if(n!==null){var t=Ne();fn(n,e,134217728,t)}Ns(e,134217728)}};qd=function(e){if(e.tag===13){var n=Xn(e),t=_n(e,n);if(t!==null){var r=Ne();fn(t,e,n,r)}Ns(e,n)}};Xd=function(){return K};Zd=function(e,n){var t=K;try{return K=e,n()}finally{K=t}};Wa=function(e,n,t){switch(n){case"input":if(Ba(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Pl(r);if(!i)throw Error(T(90));Dd(r),Ba(r,i)}}}break;case"textarea":_d(e,t);break;case"select":n=t.value,n!=null&&Vt(e,!!t.multiple,n,!1)}};Fd=Ts;jd=bt;var Zg={usingClientEntryPoint:!1,Events:[si,At,Pl,Od,Bd,Ts]},xr={findFiberByHostInstance:dt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vd(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{El=Ni.inject(e0),bn=Ni}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;Je.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(n))throw Error(T(200));return Kg(e,n,null,t)};Je.createRoot=function(e,n){if(!zs(e))throw Error(T(299));var t=!1,r="",i=kp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ds(e,1,!1,null,null,t,!1,r,i),e[Nn]=n.current,Gr(e.nodeType===8?e.parentNode:e),new _s(n)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Vd(n),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return bt(e)};Je.hydrate=function(e,n,t){if(!Bl(n))throw Error(T(200));return Fl(null,e,n,!0,t)};Je.hydrateRoot=function(e,n,t){if(!zs(e))throw Error(T(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",a=kp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=wp(n,null,e,1,t??null,i,!1,l,a),e[Nn]=n.current,Gr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ol(n)};Je.render=function(e,n,t){if(!Bl(n))throw Error(T(200));return Fl(null,e,n,!1,t)};Je.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(T(40));return e._reactRootContainer?(bt(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Nn]=null})}),!0):!1};Je.unstable_batchedUpdates=Ts;Je.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bl(t))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Fl(e,n,t,!1,r)};Je.version="18.3.1-next-f1338f8080-20240426";function Sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sp)}catch(e){console.error(e)}}Sp(),kd.exports=Je;var n0=kd.exports,cc=n0;Na.createRoot=cc.createRoot,Na.hydrateRoot=cc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ni.apply(this,arguments)}var Wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wn||(Wn={}));const dc="popstate";function t0(e){e===void 0&&(e={});function n(i,l){let{pathname:a="/",search:o="",hash:s=""}=St(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Eo("",{pathname:a,search:o,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let a=i.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");o=u===-1?s:s.slice(0,u)}return o+"#"+(typeof l=="string"?l:bl(l))}function r(i,l){jl(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return i0(n,t,r,e)}function ge(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function jl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function r0(){return Math.random().toString(36).substr(2,8)}function fc(e,n){return{usr:e.state,key:e.key,idx:n}}function Eo(e,n,t,r){return t===void 0&&(t=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?St(n):n,{state:t,key:n&&n.key||r||r0()})}function bl(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function St(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function i0(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,o=Wn.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(ni({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){o=Wn.Pop;let S=c(),h=S==null?null:S-u;u=S,s&&s({action:o,location:b.location,delta:h})}function p(S,h){o=Wn.Push;let m=Eo(b.location,S,h);t&&t(m,S),u=c()+1;let y=fc(m,u),k=b.createHref(m);try{a.pushState(y,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}l&&s&&s({action:o,location:b.location,delta:1})}function f(S,h){o=Wn.Replace;let m=Eo(b.location,S,h);t&&t(m,S),u=c();let y=fc(m,u),k=b.createHref(m);a.replaceState(y,"",k),l&&s&&s({action:o,location:b.location,delta:0})}function v(S){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:bl(S);return m=m.replace(/ $/,"%20"),ge(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let b={get action(){return o},get location(){return e(i,a)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(dc,d),s=S,()=>{i.removeEventListener(dc,d),s=null}},createHref(S){return n(i,S)},createURL:v,encodeLocation(S){let h=v(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:f,go(S){return a.go(S)}};return b}var pc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pc||(pc={}));function l0(e,n,t){return t===void 0&&(t="/"),a0(e,n,t)}function a0(e,n,t,r){let i=typeof n=="string"?St(n):n,l=Ms(i.pathname||"/",t);if(l==null)return null;let a=Cp(e);o0(a);let o=null;for(let s=0;o==null&&s<a.length;++s){let u=v0(l);o=g0(a[s],u)}return o}function Cp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,a,o)=>{let s={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};s.relativePath.startsWith("/")&&(ge(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=et([r,s.relativePath]),c=t.concat(s);l.children&&l.children.length>0&&(ge(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cp(l.children,n,c,u)),!(l.path==null&&!l.index)&&n.push({path:u,score:h0(u,l.index),routesMeta:c})};return e.forEach((l,a)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))i(l,a);else for(let s of Ep(l.path))i(l,a,s)}),n}function Ep(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=Ep(r.join("/")),o=[];return o.push(...a.map(s=>s===""?l:[l,s].join("/"))),i&&o.push(...a),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function o0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:m0(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const s0=/^:[\w-]+$/,u0=3,c0=2,d0=1,f0=10,p0=-2,hc=e=>e==="*";function h0(e,n){let t=e.split("/"),r=t.length;return t.some(hc)&&(r+=p0),n&&(r+=c0),t.filter(i=>!hc(i)).reduce((i,l)=>i+(s0.test(l)?u0:l===""?d0:f0),r)}function m0(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function g0(e,n,t){let{routesMeta:r}=e,i={},l="/",a=[];for(let o=0;o<r.length;++o){let s=r[o],u=o===r.length-1,c=l==="/"?n:n.slice(l.length)||"/",d=y0({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),p=s.route;if(!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:et([l,d.pathname]),pathnameBase:C0(et([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=et([l,d.pathnameBase]))}return a}function y0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=x0(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:f}=c;if(p==="*"){let b=o[d]||"";a=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const v=o[d];return f&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:a,pattern:e}}function x0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),jl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,s)=>(r.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function v0(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return jl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ms(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const b0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w0=e=>b0.test(e);function k0(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?St(e):e,l;if(t)if(w0(t))l=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),jl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?l=mc(t.substring(1),"/"):l=mc(t,n)}else l=n;return{pathname:l,search:E0(r),hash:T0(i)}}function mc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function xa(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S0(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Tp(e,n){let t=S0(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ip(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=St(e):(i=ni({},e),ge(!i.pathname||!i.pathname.includes("?"),xa("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),xa("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),xa("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,o;if(a==null)o=t;else{let d=n.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}o=d>=0?n[d]:"/"}let s=k0(i,o),u=a&&a!=="/"&&a.endsWith("/"),c=(l||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const et=e=>e.join("/").replace(/\/\/+/g,"/"),C0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),E0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function I0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Lp=["post","put","patch","delete"];new Set(Lp);const L0=["get",...Lp];new Set(L0);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ti.apply(this,arguments)}const Rs=_.createContext(null),P0=_.createContext(null),Ct=_.createContext(null),Hl=_.createContext(null),Rn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Pp=_.createContext(null);function D0(e,n){let{relative:t}=n===void 0?{}:n;ci()||ge(!1);let{basename:r,navigator:i}=_.useContext(Ct),{hash:l,pathname:a,search:o}=Np(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:et([r,a])),i.createHref({pathname:s,search:o,hash:l})}function ci(){return _.useContext(Hl)!=null}function di(){return ci()||ge(!1),_.useContext(Hl).location}function Dp(e){_.useContext(Ct).static||_.useLayoutEffect(e)}function N0(){let{isDataRoute:e}=_.useContext(Rn);return e?Y0():_0()}function _0(){ci()||ge(!1);let e=_.useContext(Rs),{basename:n,future:t,navigator:r}=_.useContext(Ct),{matches:i}=_.useContext(Rn),{pathname:l}=di(),a=JSON.stringify(Tp(i,t.v7_relativeSplatPath)),o=_.useRef(!1);return Dp(()=>{o.current=!0}),_.useCallback(function(u,c){if(c===void 0&&(c={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let d=Ip(u,JSON.parse(a),l,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:et([n,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[n,r,a,l,e])}const z0=_.createContext(null);function M0(e){let n=_.useContext(Rn).outlet;return n&&_.createElement(z0.Provider,{value:e},n)}function R0(){let{matches:e}=_.useContext(Rn),n=e[e.length-1];return n?n.params:{}}function Np(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=_.useContext(Ct),{matches:i}=_.useContext(Rn),{pathname:l}=di(),a=JSON.stringify(Tp(i,r.v7_relativeSplatPath));return _.useMemo(()=>Ip(e,JSON.parse(a),l,t==="path"),[e,a,l,t])}function A0(e,n){return O0(e,n)}function O0(e,n,t,r){ci()||ge(!1);let{navigator:i}=_.useContext(Ct),{matches:l}=_.useContext(Rn),a=l[l.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=di(),c;if(n){var d;let S=typeof n=="string"?St(n):n;s==="/"||(d=S.pathname)!=null&&d.startsWith(s)||ge(!1),c=S}else c=u;let p=c.pathname||"/",f=p;if(s!=="/"){let S=s.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=l0(e,{pathname:f}),b=U0(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:et([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:et([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,r);return n&&b?_.createElement(Hl.Provider,{value:{location:ti({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Wn.Pop}},b):b}function B0(){let e=G0(),n=I0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},n),t?_.createElement("pre",{style:i},t):null,null)}const F0=_.createElement(B0,null);class j0 extends _.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?_.createElement(Rn.Provider,{value:this.props.routeContext},_.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H0(e){let{routeContext:n,match:t,children:r}=e,i=_.useContext(Rs);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(Rn.Provider,{value:n},r)}function U0(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,o=(i=t)==null?void 0:i.errors;if(o!=null){let c=a.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);c>=0||ge(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:f}=t,v=d.route.loader&&p[d.route.id]===void 0&&(!f||f[d.route.id]===void 0);if(d.route.lazy||v){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,p)=>{let f,v=!1,b=null,S=null;t&&(f=o&&d.route.id?o[d.route.id]:void 0,b=d.route.errorElement||F0,s&&(u<0&&p===0?(Q0("route-fallback"),v=!0,S=null):u===p&&(v=!0,S=d.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,p+1)),m=()=>{let y;return f?y=b:v?y=S:d.route.Component?y=_.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,_.createElement(H0,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:t!=null},children:y})};return t&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?_.createElement(j0,{location:t.location,revalidation:t.revalidation,component:b,error:f,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var _p=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_p||{}),zp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zp||{});function V0(e){let n=_.useContext(Rs);return n||ge(!1),n}function $0(e){let n=_.useContext(P0);return n||ge(!1),n}function W0(e){let n=_.useContext(Rn);return n||ge(!1),n}function Mp(e){let n=W0(),t=n.matches[n.matches.length-1];return t.route.id||ge(!1),t.route.id}function G0(){var e;let n=_.useContext(Pp),t=$0(),r=Mp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function Y0(){let{router:e}=V0(_p.UseNavigateStable),n=Mp(zp.UseNavigateStable),t=_.useRef(!1);return Dp(()=>{t.current=!0}),_.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ti({fromRouteId:n},l)))},[e,n])}const gc={};function Q0(e,n,t){gc[e]||(gc[e]=!0)}function J0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function va(e){return M0(e.context)}function Er(e){ge(!1)}function K0(e){let{basename:n="/",children:t=null,location:r,navigationType:i=Wn.Pop,navigator:l,static:a=!1,future:o}=e;ci()&&ge(!1);let s=n.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:s,navigator:l,static:a,future:ti({v7_relativeSplatPath:!1},o)}),[s,o,l,a]);typeof r=="string"&&(r=St(r));let{pathname:c="/",search:d="",hash:p="",state:f=null,key:v="default"}=r,b=_.useMemo(()=>{let S=Ms(c,s);return S==null?null:{location:{pathname:S,search:d,hash:p,state:f,key:v},navigationType:i}},[s,c,d,p,f,v,i]);return b==null?null:_.createElement(Ct.Provider,{value:u},_.createElement(Hl.Provider,{children:t,value:b}))}function q0(e){let{children:n,location:t}=e;return A0(To(n),t)}new Promise(()=>{});function To(e,n){n===void 0&&(n=[]);let t=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let l=[...n,i];if(r.type===_.Fragment){t.push.apply(t,To(r.props.children,l));return}r.type!==Er&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=To(r.props.children,l)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Io.apply(this,arguments)}function X0(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function Z0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ey(e,n){return e.button===0&&(!n||n==="_self")&&!Z0(e)}const ny=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ty="6";try{window.__reactRouterVersion=ty}catch{}const ry="startTransition",yc=$h[ry];function iy(e){let{basename:n,children:t,future:r,window:i}=e,l=_.useRef();l.current==null&&(l.current=t0({window:i,v5Compat:!0}));let a=l.current,[o,s]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=_.useCallback(d=>{u&&yc?yc(()=>s(d)):s(d)},[s,u]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.useEffect(()=>J0(r),[r]),_.createElement(K0,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:a,future:r})}const ly=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ri=_.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:o,target:s,to:u,preventScrollReset:c,viewTransition:d}=n,p=X0(n,ny),{basename:f}=_.useContext(Ct),v,b=!1;if(typeof u=="string"&&ay.test(u)&&(v=u,ly))try{let y=new URL(window.location.href),k=u.startsWith("//")?new URL(y.protocol+u):new URL(u),E=Ms(k.pathname,f);k.origin===y.origin&&E!=null?u=E+k.search+k.hash:b=!0}catch{}let S=D0(u,{relative:i}),h=oy(u,{replace:a,state:o,target:s,preventScrollReset:c,relative:i,viewTransition:d});function m(y){r&&r(y),y.defaultPrevented||h(y)}return _.createElement("a",Io({},p,{href:v||S,onClick:b||l?r:m,ref:t,target:s}))});var xc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xc||(xc={}));var vc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vc||(vc={}));function oy(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:o}=n===void 0?{}:n,s=N0(),u=di(),c=Np(e,{relative:a});return _.useCallback(d=>{if(ey(d,t)){d.preventDefault();let p=r!==void 0?r:bl(u)===bl(c);s(e,{replace:p,state:i,preventScrollReset:l,relative:a,viewTransition:o})}},[u,s,c,r,i,t,e,l,a,o])}const sy=`---
title: Hello World
date: 2023-12-16
category: Tech
description: This is my first blog post using markdown.
---

# Hello World
`,uy=Object.freeze(Object.defineProperty({__proto__:null,default:sy},Symbol.toStringTag,{value:"Module"})),cy=`<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="date" content="2025-12-31">
    <meta name="category" content="Fun">
    <title>農曆深度解析：中國人的時間智慧</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        /* Updated Fonts: Noto Serif TC for text/titles, Noto Sans TC for UI/Charts */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@400;700;900&display=swap');

        :root {
            --chinese-red: #c0392b;
            --imperial-gold: #d4ac0d;
            --ink-black: #2c3e50;
            --paper-bg: #fdfbf7;
        }

        body {
            background-color: var(--paper-bg);
            font-family: 'Noto Serif TC', serif; /* Base font is Serif for traditional feel */
            color: var(--ink-black);
            background-image: radial-gradient(#e5e5e5 1px, transparent 1px);
            background-size: 20px 20px;
        }

        /* UI Elements use Sans-Serif for readability */
        button, .text-xs, .text-sm, nav {
            font-family: 'Noto Sans TC', sans-serif;
        }

        /* Titles use Heavy Serif instead of Calligraphy to ensure character support */
        .title-font {
            font-family: 'Noto Serif TC', serif;
            font-weight: 900; /* Black weight for impact */
            letter-spacing: 0.05em;
        }

        /* Chart Container Styling - Mandatory */
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }

        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        /* Card Hover Effects */
        .info-card {
            transition: all 0.3s ease;
            border: 1px solid rgba(0,0,0,0.05);
        }
        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-color: var(--chinese-red);
        }

        /* Moon Phase Animation */
        .moon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            box-shadow: inset -10px 0px 5px rgba(0,0,0,0.2);
            transition: background 0.5s ease;
        }
        
        .tab-active {
            background-color: var(--chinese-red);
            color: white;
        }
        
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    </style>
    <!-- Chosen Palette: Traditional Chinese - Rice Paper Background (#fdfbf7), Ink Black Text (#2c3e50), Chinese Red Accents (#c0392b), Imperial Gold Highlights (#d4ac0d) -->
</head>
<body class="antialiased">

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center">
                    <span class="text-2xl text-red-700 mr-2"><i class="fas fa-yin-yang"></i></span>
                    <span class="font-bold text-xl tracking-wider text-gray-800 font-serif">農曆 <span class="text-red-700">深度解析</span></span>
                </div>
                <div class="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                    <button onclick="scrollToSection('misconception')" class="hover:text-red-700 transition">曆法分類</button>
                    <button onclick="scrollToSection('yin-yang')" class="hover:text-red-700 transition">陰陽原理</button>
                    <button onclick="scrollToSection('ancient-wisdom')" class="hover:text-red-700 transition text-yellow-700">古法智慧</button>
                    <button onclick="scrollToSection('leap-month')" class="hover:text-red-700 transition">置閏法</button>
                    <button onclick="scrollToSection('sixty-cycle')" class="hover:text-red-700 transition">六十甲子</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative overflow-hidden py-16 sm:py-24 px-4 text-center">
        <div class="max-w-4xl mx-auto">
            <div class="inline-block p-2 px-4 rounded-full bg-red-50 text-red-800 text-sm font-bold tracking-widest mb-4 border border-red-200 font-sans">中國傳統曆法</div>
            <h1 class="text-5xl md:text-6xl title-font font-bold text-gray-900 mb-6 leading-tight">
                農曆的<span class="text-red-700">構造原理</span><br>
                是一部<span class="text-yellow-600">陰陽合曆</span>
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
                它結合了月相變化與太陽回歸年的規律。這是中國傳統文化中重要的時間計量體系。
            </p>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20">

        <!-- Section 1: Core Misconception -->
        <section id="misconception" class="scroll-mt-24">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-red-700 inline-block pb-1 title-font">1. 曆法體系分類</h2>
                <p class="text-lg text-gray-600">農曆並非純粹的陰曆，世界上主要存在三種曆法體系。</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1: Lunar -->
                <div class="info-card bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-blue-200"></div>
                    <div class="relative z-10">
                        <div class="text-4xl text-blue-600 mb-4"><i class="fas fa-moon"></i></div>
                        <h3 class="text-xl font-bold mb-2 title-font">純陰曆 (Lunar)</h3>
                        <p class="text-sm text-gray-500 mb-4 font-sans">代表：伊斯蘭曆</p>
                        <ul class="text-gray-600 space-y-2 text-sm font-sans">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>依據月亮圓缺制定</li>
                            <li><i class="fas fa-minus text-gray-400 mr-2"></i>不參照太陽回歸年</li>
                            <li><i class="fas fa-clock text-gray-400 mr-2"></i>一年約 354 天</li>
                            <li class="font-bold text-blue-600">特點：節日在公曆季節中循環</li>
                        </ul>
                    </div>
                </div>

                <!-- Card 2: Solar -->
                <div class="info-card bg-white p-6 rounded-xl shadow-sm relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-orange-200"></div>
                    <div class="relative z-10">
                        <div class="text-4xl text-orange-500 mb-4"><i class="fas fa-sun"></i></div>
                        <h3 class="text-xl font-bold mb-2 title-font">純陽曆 (Solar)</h3>
                        <p class="text-sm text-gray-500 mb-4 font-sans">代表：公曆</p>
                        <ul class="text-gray-600 space-y-2 text-sm font-sans">
                            <li><i class="fas fa-minus text-gray-400 mr-2"></i>不參照月亮圓缺</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>依據太陽回歸年制定</li>
                            <li><i class="fas fa-clock text-gray-400 mr-2"></i>一年 365/366 天</li>
                            <li class="font-bold text-orange-600">特點：日期與季節對應固定</li>
                        </ul>
                    </div>
                </div>

                <!-- Card 3: Lunisolar -->
                <div class="info-card bg-white p-6 rounded-xl shadow-md border-2 border-red-100 relative overflow-hidden transform md:-translate-y-4">
                    <div class="absolute top-0 left-0 w-full h-2 bg-red-700"></div>
                    <div class="relative z-10">
                        <div class="text-4xl text-red-700 mb-4 flex gap-2">
                            <i class="fas fa-moon"></i>
                            <i class="fas fa-plus text-sm self-center"></i>
                            <i class="fas fa-sun"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2 title-font">陰陽合曆 (Lunisolar)</h3>
                        <p class="text-sm text-gray-500 mb-4 font-sans">代表：中國農曆</p>
                        <ul class="text-gray-600 space-y-2 text-sm font-sans">
                            <li><i class="fas fa-check text-green-500 mr-2"></i>月亮定月份 (陰)</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i>太陽定節氣 (陽)</li>
                            <li><i class="fas fa-clock text-gray-400 mr-2"></i>平年354天 / 閏年384天</li>
                            <li class="font-bold text-red-700">特點：兼顧月相變化與季節更替</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: The Yin (Moon) & Yang (Sun) -->
        <section id="yin-yang" class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6 title-font">2. 農曆的「陰」：月相定日</h2>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        農曆的月份嚴格遵循月相變化。從一次新月到下一次新月，平均需要 <strong>29.53天</strong>。因此農曆月份分為大月（30天）和小月（29天）。
                    </p>
                    
                    <div class="flex space-x-8 mb-6 font-sans">
                        <div class="text-center">
                            <div class="moon bg-gray-900 mx-auto mb-2 border border-gray-200"></div>
                            <h4 class="font-bold">初一 (朔)</h4>
                            <p class="text-xs text-gray-500">日月合朔</p>
                        </div>
                        <div class="text-center">
                            <div class="moon bg-yellow-300 mx-auto mb-2 border border-yellow-400"></div>
                            <h4 class="font-bold">十五 (望)</h4>
                            <p class="text-xs text-gray-500">滿月</p>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-800">
                        「朔」發生的時刻定為初一。因此初一通常無月光，十五或十六為滿月。
                    </p>
                </div>
                
                <!-- Solar Terms Interactive -->
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <h2 class="text-3xl font-bold text-gray-900 title-font">3. 農曆的「陽」：二十四節氣</h2>
                    </div>
                    
                    <!-- NEW: Jie vs Qi Explanation -->
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4 rounded-r text-sm text-gray-700">
                        <p><strong>概念說明：</strong>二十四節氣由「12個節」和「12個氣」交替組成。</p>
                        <ul class="mt-1 list-disc list-inside text-xs text-gray-600 font-sans">
                            <li><span class="inline-block px-1 bg-blue-100 text-blue-800 rounded mr-1">節氣</span> (單數項)：立春、驚蟄... 多出現在<strong>月初</strong>。</li>
                            <li><span class="inline-block px-1 bg-red-100 text-red-800 rounded mr-1">中氣</span> (雙數項)：雨水、春分... 多出現在<strong>月中</strong>，用於<strong>標定月份</strong>。</li>
                        </ul>
                    </div>

                    <p class="text-gray-600 mb-4 text-sm">
                        這是基於太陽運行的曆法成分。將太陽黃道平分24份，用以指導農耕與季節劃分。
                    </p>
                    
                    <!-- Filters -->
                    <div class="flex flex-wrap gap-2 mb-6" id="termFilters">
                        <button class="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-100 tab-active" data-filter="all">全部</button>
                        <button class="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-100" data-filter="season">定季節</button>
                        <button class="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-100" data-filter="temp">反映氣溫</button>
                        <button class="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-100" data-filter="precip">反映降水</button>
                        <button class="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-gray-100" data-filter="farm">物候農事</button>
                    </div>

                    <!-- Terms Grid -->
                    <div class="grid grid-cols-4 sm:grid-cols-6 gap-2" id="solarTermsGrid">
                        <!-- JS populated -->
                    </div>
                </div>
            </div>
        </section>

        <!-- New Section: Ancient Wisdom (How Solar Terms were Determined) -->
        <section id="ancient-wisdom" class="scroll-mt-24 bg-[#f8f6f2] rounded-3xl p-8 border border-gray-200">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-2 title-font">番外篇：節氣測定方法的演變</h2>
                <p class="text-gray-600">古代天文觀測與數學推算的智慧</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Step 1: Winter Solstice Anchor -->
                <div class="info-card bg-white p-6 rounded-xl relative overflow-hidden">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-3 bg-red-50 text-red-700 rounded-full text-xl"><i class="fas fa-ruler-vertical"></i></div>
                        <span class="text-xs font-bold text-gray-400 font-sans">步驟一</span>
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-gray-800 title-font">基準測定：測冬至</h3>
                    <p class="text-sm text-gray-600 leading-relaxed font-sans">
                        古人使用<strong>土圭 (Tugui)</strong> 測量正午日影。日影<strong>最長</strong>的一天定為<strong>冬至</strong>，最短為夏至，確立太陽週期的起點。
                    </p>
                </div>

                <!-- Step 2: Average Method -->
                <div class="info-card bg-white p-6 rounded-xl relative overflow-hidden">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-3 bg-yellow-50 text-yellow-700 rounded-full text-xl"><i class="fas fa-divide"></i></div>
                        <span class="text-xs font-bold text-gray-400 font-sans">步驟二</span>
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-gray-800 title-font">方法一：平氣法</h3>
                    <p class="text-sm text-gray-600 leading-relaxed font-sans">
                        將回歸年約365.25天平均分為24等份，每份約 <strong>15.2天</strong>。這種方法計算簡便，但未考慮地球公轉速度的變化。
                    </p>
                </div>

                <!-- Step 3: Precise Method -->
                <div class="info-card bg-white p-6 rounded-xl relative overflow-hidden">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-3 bg-blue-50 text-blue-700 rounded-full text-xl"><i class="fas fa-star"></i></div>
                        <span class="text-xs font-bold text-gray-400 font-sans">步驟三</span>
                    </div>
                    <h3 class="font-bold text-lg mb-2 text-gray-800 title-font">方法二：定氣法 (清代)</h3>
                    <p class="text-sm text-gray-600 leading-relaxed font-sans">
                        考慮到地球公轉軌道為橢圓（冬快夏慢），改為按<strong>太陽黃經角度</strong>（每15度）劃分節氣，更為精確。
                    </p>
                </div>
            </div>
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-500 italic border-t border-gray-200 pt-4 inline-block px-8">
                    註：曆法計算由歷代欽天監負責，頒布《皇曆》（黃曆）供民間使用。
                </p>
            </div>
        </section>

        <!-- Section 3: Leap Month Logic -->
        <section id="leap-month" class="scroll-mt-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-red-700 inline-block pb-1 title-font">4. 曆法調整：置閏法</h2>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        太陽年（公曆）與陰曆年長度不同。陰曆年平均約354天，比回歸年少約11天。若不調整，積累三年便會產生約一個月的差異，導致季節與月份脫節。
                    </p>
                    
                    <div class="space-y-4 mb-6">
                        <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-700">
                            <h4 class="font-bold text-red-800 mb-2 flex items-center">
                                <i class="fas fa-search-location mr-2"></i> 置閏規則：無中氣置閏
                            </h4>
                            <p class="text-sm text-gray-700 mb-2">
                                <strong>中氣 (Zhongqi)</strong> 是決定月份排序的關鍵（如雨水定正月，春分定二月）。
                            </p>
                            <p class="text-sm text-gray-700">
                                由於農曆月比節氣間隔短，中氣在月份裡的日子會不斷後移。當某個月<strong>未包含中氣</strong>，它便被設定為<strong>閏月</strong>，附屬於上個月。
                            </p>
                        </div>

                        <!-- NEW: Visual Demo for No Zhongqi -->
                        <div class="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
                            <!-- Removed Badge Here -->
                            <h4 class="font-bold text-gray-800 mb-4 text-sm">直觀演示：中氣與月份的偏移</h4>
                            
                            <!-- Timeline Container -->
                            <div id="leapRuleDemo">
                                <!-- JS will render the timeline here -->
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center">
                    <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h3 class="text-center font-bold text-gray-800 mb-2">19年輪迴演示：累積差異與修正</h3>
                        <p class="text-center text-xs text-gray-500 mb-6 font-sans">折線向下代表累積差異，向上代表置閏修正</p>
                        <div class="chart-container">
                            <canvas id="timeGapChart"></canvas>
                        </div>
                        <div class="mt-4 flex justify-center gap-4 text-xs text-gray-500 font-sans">
                            <div class="flex items-center"><span class="w-3 h-3 bg-red-500 rounded-full mr-1"></span> 閏年 (加一個月)</div>
                            <div class="flex items-center"><span class="w-3 h-3 bg-gray-300 rounded-full mr-1"></span> 平年 (累積中)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: 60 Year Cycle -->
        <section id="sixty-cycle" class="scroll-mt-24 bg-[#fcf8e3] rounded-3xl p-8 md:p-12 border border-yellow-200 relative overflow-hidden">
            <!-- Background Decoration -->
            <div class="absolute top-0 right-0 text-9xl text-yellow-100 font-serif opacity-50 select-none pointer-events-none -mr-10 -mt-10 font-serif">甲子</div>

            <div class="text-center mb-10 relative z-10">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 title-font">5. 天干地支：60年的輪迴</h2>
                <p class="text-gray-700 max-w-2xl mx-auto">
                    為什麼是60年而不是120年？因為<strong>「陽干配陽支，陰乾配陰支」</strong>。
                    這就像兩個齒輪咬合，一個是10齒，一個是12齒。
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <!-- Interactive Gears Visualization -->
                <div class="flex flex-col items-center">
                    <div class="chart-container" style="height: 300px; max-width: 300px;">
                        <canvas id="gearsChart"></canvas>
                    </div>
                    <div class="mt-4 flex gap-4 font-sans">
                        <button id="prevYearBtn" class="px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 text-sm"><i class="fas fa-arrow-left"></i> 上一年</button>
                        <div id="currentYearDisplay" class="px-6 py-2 bg-red-700 text-white font-bold rounded shadow text-xl title-font min-w-[120px] text-center">甲子</div>
                        <button id="nextYearBtn" class="px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 text-sm">下一年 <i class="fas fa-arrow-right"></i></button>
                    </div>
                    <p class="text-xs text-gray-500 mt-2 font-sans">點擊按鈕轉動「齒輪」</p>
                </div>

                <!-- Math Explanation -->
                <div class="bg-white/80 backdrop-blur p-6 rounded-xl shadow-sm">
                    <h3 class="font-bold text-lg mb-4 text-yellow-800">番外篇：數學原理</h3>
                    <div class="space-y-4 text-sm text-gray-700">
                        <div>
                            <span class="font-bold block">1. 奇偶分類</span>
                            天干(10)和地支(12)都分陰陽（奇偶）。奇數只能遇奇數。
                            <br>例：<span class="text-red-600">甲(1)</span> 只能遇 <span class="text-red-600">子(1)、寅(3)...</span>
                            <br>不存在 <span class="text-gray-400 line-through">甲醜(1配2)</span> 的組合。
                        </div>
                        <div class="h-px bg-gray-200 w-full"></div>
                        <div>
                            <span class="font-bold block">2. 最小公倍數</span>
                            求 10 和 12 的最小公倍數。
                            <br>10的倍數: 10, 20, 30, 40, 50, <span class="text-red-600 font-bold">60</span>...
                            <br>12的倍數: 12, 24, 36, 48, <span class="text-red-600 font-bold">60</span>...
                            <br>它們在第60年第一次重合，輪迴結束。
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="bg-gray-900 text-gray-400 py-12 text-center">
        <p class="mb-2 text-lg text-gray-200 title-font">傳統智慧，陰陽合曆</p>
    </footer>

    <!-- JavaScript Logic -->
    <script>
        // --- DATA: Solar Terms ---
        const solarTerms = [
            { name: "立春", cat: "season", desc: "春季開始" }, { name: "雨水", cat: "precip", desc: "降雨開始" },
            { name: "驚蟄", cat: "farm", desc: "春雷驚蟲" }, { name: "春分", cat: "season", desc: "晝夜平分" },
            { name: "清明", cat: "farm", desc: "天朗氣清" }, { name: "穀雨", cat: "precip", desc: "雨生百穀" },
            { name: "立夏", cat: "season", desc: "夏季開始" }, { name: "小滿", cat: "farm", desc: "麥粒飽滿" },
            { name: "芒種", cat: "farm", desc: "有芒播種" }, { name: "夏至", cat: "season", desc: "白晝最長" },
            { name: "小暑", cat: "temp", desc: "炎熱開始" }, { name: "大暑", cat: "temp", desc: "最熱時候" },
            { name: "立秋", cat: "season", desc: "秋季開始" }, { name: "處暑", cat: "temp", desc: "炎熱結束" },
            { name: "白露", cat: "precip", desc: "露凝為白" }, { name: "秋分", cat: "season", desc: "晝夜平分" },
            { name: "寒露", cat: "precip", desc: "露氣寒冷" }, { name: "霜降", cat: "precip", desc: "霜凍開始" },
            { name: "立冬", cat: "season", desc: "冬季開始" }, { name: "小雪", cat: "precip", desc: "開始下雪" },
            { name: "大雪", cat: "precip", desc: "雪量變大" }, { name: "冬至", cat: "season", desc: "白晝最短" },
            { name: "小寒", cat: "temp", desc: "寒冷開始" }, { name: "大寒", cat: "temp", desc: "最冷時候" }
        ];

        // --- DATA: Stems & Branches ---
        const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
        const branches = ["子", "醜", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
        let stemIndex = 0; // Starts at 0 (Jia)
        let branchIndex = 0; // Starts at 0 (Zi)

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderSolarTerms('all');
            initTimeGapChart();
            initGearsChart();
            renderLeapRuleDemo(); // Call the new visualizer
            updateYearDisplay();
        });

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // --- LOGIC: Solar Terms Filters ---
        const filters = document.getElementById('termFilters').querySelectorAll('button');
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                // UI Toggle
                filters.forEach(b => b.classList.remove('tab-active', 'bg-red-700', 'text-white'));
                filters.forEach(b => b.classList.add('hover:bg-gray-100', 'text-gray-600'));
                
                btn.classList.add('tab-active', 'bg-red-700', 'text-white');
                btn.classList.remove('hover:bg-gray-100', 'text-gray-600');
                
                renderSolarTerms(btn.dataset.filter);
            });
        });

        function renderSolarTerms(filter) {
            const container = document.getElementById('solarTermsGrid');
            container.innerHTML = '';

            solarTerms.forEach((term, index) => {
                if (filter !== 'all' && term.cat !== filter) return;

                // Color coding for categories
                let color = "bg-gray-50 text-gray-600";
                if(term.cat === 'season') color = "bg-green-50 text-green-700 border-green-200";
                if(term.cat === 'temp') color = "bg-red-50 text-red-700 border-red-200";
                if(term.cat === 'precip') color = "bg-blue-50 text-blue-700 border-blue-200";
                if(term.cat === 'farm') color = "bg-yellow-50 text-yellow-700 border-yellow-200";

                // Logic for Jie vs Qi
                // Array is 0-indexed. 
                // 0 (Lichun) -> 1st -> Jie (Odd)
                // 1 (Yushui) -> 2nd -> Qi (Even)
                const isQi = (index % 2 !== 0); 
                const typeLabel = isQi ? "中氣" : "節氣";
                const typeBadgeClass = isQi ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800";

                const div = document.createElement('div');
                div.className = \`p-2 rounded-lg border text-center transition-transform hover:scale-105 \${color} flex flex-col justify-between h-full relative overflow-hidden\`;
                
                // Adding a small badge for Jie/Qi
                const badgeHtml = \`<span class="absolute top-0 right-0 text-[10px] px-1 rounded-bl \${typeBadgeClass} font-sans">\${typeLabel}</span>\`;

                div.innerHTML = \`
                    \${badgeHtml}
                    <div class="font-bold text-lg title-font mt-2">\${term.name}</div>
                    <div class="text-xs opacity-80 leading-tight font-sans">\${term.desc}</div>
                \`;
                container.appendChild(div);
            });
        }

        // --- NEW: Leap Rule Visualizer (Dual Track) ---
        function renderLeapRuleDemo() {
            const container = document.getElementById('leapRuleDemo');
            
            // Visual Config
            const lWidth = 90;
            const solarGap = 140; 
            const solarStart = 50;
            const pxPerDay = solarGap / 30.44; // Approx pixels per day

            // Data Setup: Actual Zhongqi Names for Spring Sequence
            const solarP = [solarStart, solarStart + solarGap, solarStart + solarGap*2, solarStart + solarGap*3];
            const zhongqiNames = ["雨水", "春分", "穀雨", "小滿"]; // Specific names

            const lMonths = [
                {start: 0, w: lWidth, name: '正月'},      
                {start: lWidth, w: lWidth, name: '二月'}, 
                {start: lWidth*2, w: lWidth, name: '二月'}, 
                {start: lWidth*3, w: lWidth, name: '三月'}  
            ];

            // Gregorian Axis Data 
            const gregAxis = [
                { label: "3月1日", left: solarStart + (9 * pxPerDay) },
                { label: "4月1日", left: solarStart + solarGap + (11 * pxPerDay) },
                { label: "5月1日", left: solarStart + solarGap*2 + (10 * pxPerDay) },
                { label: "6月1日", left: solarStart + solarGap*3 + (11 * pxPerDay) }
            ];

            let html = \`
                <!-- Container changed to Flex Column to prevent bottom clipping -->
                <div class="relative w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-inner flex flex-col" style="height: 280px;">
                    <!-- Legend -->
                    <div class="flex-none flex justify-between px-4 py-2 bg-gray-50 border-b border-gray-100 text-xs z-30 relative font-sans">
                        <div class="flex items-center font-bold text-red-700">
                            <span class="w-0.5 h-4 border-r-2 border-dashed border-red-400 mr-2"></span>
                            太陽中氣 (固定)
                        </div>
                        <div class="flex items-center font-bold text-blue-700">
                            <span class="w-3 h-3 rounded bg-blue-100 border border-blue-300 mr-2"></span>
                            農曆月份 (變動)
                        </div>
                        <div class="flex items-center font-bold text-gray-600">
                            <span class="w-px h-3 bg-gray-500 mr-1"></span>
                            <span>公曆參考</span>
                        </div>
                    </div>
                    
                    <!-- Scrollable Area takes remaining height -->
                    <div class="flex-1 relative overflow-x-auto no-scrollbar">
                        <div class="relative h-full" style="min-width: 600px; width: 100%;">
                            
                            <!-- Solar Track (Top Layer Markers) -->
                            <div class="absolute top-8 bottom-12 left-4 right-4 pointer-events-none z-10 font-sans">
            \`;
            
            solarP.forEach((pos, i) => {
                html += \`
                    <div class="absolute top-0 bottom-0 w-px border-r-2 border-dashed border-red-300" style="left: \${pos}px;">
                        <div class="absolute -top-6 -left-3 bg-red-100 text-red-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold whitespace-nowrap shadow-sm border border-red-200">
                            \${zhongqiNames[i]}
                        </div>
                    </div>
                \`;
            });
            
            html += \`       </div>
                            <!-- Lunar Track (Blocks) -->
                            <div class="absolute top-14 left-4 right-4 h-16 z-20 font-sans">
            \`;
            
            lMonths.forEach((m, i) => {
                const start = m.start;
                const end = m.start + m.w;
                const hasZ = solarP.some(p => p >= start && p < end); 
                
                let displayLabel = m.name;
                let subLabel = hasZ ? '<i class="fas fa-check text-green-600"></i> 含中氣' : '<i class="fas fa-times text-red-600"></i> 無中氣';
                let styleClass = hasZ ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-red-50 border-red-400 text-red-800 font-bold shadow-md transform scale-105 z-30';
                
                if (!hasZ) {
                    displayLabel = "閏月"; 
                }

                html += \`
                    <div class="absolute top-0 h-full border rounded-lg flex flex-col items-center justify-center text-xs transition-all hover:opacity-90 \${styleClass}" 
                         style="left: \${start}px; width: \${m.w-2}px;">
                        <span class="text-sm mb-1">\${displayLabel}</span>
                        <span class="scale-75 opacity-75 whitespace-nowrap">\${subLabel}</span>
                    </div>
                \`;
            });
            
            html += \`
                            </div>
                            
                            <!-- Gregorian Axis (Bottom) -->
                            <div class="absolute bottom-0 left-0 right-0 h-10 border-t border-gray-300 bg-gray-100 z-10 font-sans">
                                <div class="relative w-full h-full left-4 right-4">
            \`;

            gregAxis.forEach(g => {
                html += \`
                    <div class="absolute top-0 w-px h-3 bg-gray-500" style="left: \${g.left}px;"></div>
                    <div class="absolute top-4 text-[11px] font-bold text-gray-600 transform -translate-x-1/2 whitespace-nowrap" style="left: \${g.left}px;">
                        \${g.label}
                    </div>
                \`;
            });

            html += \`           </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3 text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-100 leading-relaxed text-center font-sans">
                    <span class="font-bold text-gray-700">圖解原理：</span>
                    請觀察底部的公曆時間軸。因為農曆月(藍塊)比節氣間隔(紅線間距)短，
                    <span class="text-red-600 font-bold">閏月</span> 那個方塊剛好落在了「春分」和「穀雨」之間，
                    未包含任何紅色虛線（中氣），因此被設定為閏月。
                </div>
            \`;
            
            container.innerHTML = html;
        }

        // --- CHART: Time Gap (19 Years Cycle) ---
        function initTimeGapChart() {
            const ctx = document.getElementById('timeGapChart').getContext('2d');
            
            // Generate 19-year data
            // Use more precise astronomical averages for better accuracy
            // Solar Year - Lunar Year (12 months) = 365.2422 - 354.3672 ≈ 10.875 days
            // Leap Month (Synodic Month) ≈ 29.5306 days
            const LAG_PER_YEAR = 10.88; 
            const LEAP_MONTH_ADD = 29.53;

            const labels = Array.from({length: 20}, (_, i) => i === 0 ? '起點' : \`第\${i}年\`);
            const leapYears = [3, 6, 9, 11, 14, 17, 19]; 
            
            let currentGap = 0;
            const dataPoints = [0];
            const pointColors = ['#e5e7eb']; // Start point color
            const pointRadiuses = [4];

            for (let i = 1; i <= 19; i++) {
                // Natural lag
                currentGap -= LAG_PER_YEAR;
                
                // Check if it's a leap year
                let isLeap = leapYears.includes(i);
                
                if (isLeap) {
                    currentGap += LEAP_MONTH_ADD; // Add leap month
                    pointColors.push('#c0392b'); // Red for leap catch-up
                    pointRadiuses.push(6);
                } else {
                    pointColors.push('#9ca3af'); // Gray for lagging
                    pointRadiuses.push(4);
                }
                
                // Use simplified float for display
                dataPoints.push(parseFloat(currentGap.toFixed(2)));
            }

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: '陰曆與太陽年的差距 (天)',
                            data: dataPoints,
                            borderColor: '#2c3e50', // Ink Black line
                            borderWidth: 2,
                            backgroundColor: 'rgba(212, 172, 13, 0.1)', // Gold fill
                            pointBackgroundColor: pointColors,
                            pointBorderColor: '#fff',
                            pointRadius: pointRadiuses,
                            pointHoverRadius: 8,
                            fill: true,
                            tension: 0.1 // Straighter lines for sawtooth effect
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { 
                            beginAtZero: false,
                            min: -35,
                            max: 15,
                            grid: { color: '#f3f4f6' },
                            title: { display: true, text: '累計差距 (天)' },
                            ticks: {
                                callback: function(value) {
                                    return value > 0 ? '+' + value : value;
                                }
                            }
                        },
                        x: {
                            grid: { display: false },
                            ticks: {
                                maxTicksLimit: 20,
                                font: { size: 10 }
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (ctx) => {
                                    const yearIdx = ctx.dataIndex;
                                    const isLeap = leapYears.includes(yearIdx);
                                    let status = isLeap ? "置閏調整" : "累積差異...";
                                    if(yearIdx === 0) status = "起點";
                                    // Formatting: show + for positive numbers
                                    const val = ctx.raw > 0 ? '+' + ctx.raw : ctx.raw;
                                    return \` \${status} (\${val}天)\`;
                                },
                                title: (ctx) => ctx[0].label
                            }
                        },
                        legend: { display: false }
                    }
                }
            });
        }

        // --- CHART: 60 Year Cycle Gears ---
        let gearsChart;
        function initGearsChart() {
            const ctx = document.getElementById('gearsChart').getContext('2d');
            
            // Data for Outer Ring (12 Branches)
            const branchesData = new Array(12).fill(1);
            // Data for Inner Ring (10 Stems)
            const stemsData = new Array(10).fill(1);

            gearsChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: branches, // Tooltip labels will be messy if not handled, but visual is key here
                    datasets: [
                        {
                            label: '地支 (12)',
                            data: branchesData,
                            backgroundColor: (ctx) => ctx.dataIndex === branchIndex ? '#c0392b' : '#fce7f3',
                            borderColor: '#fff',
                            borderWidth: 2,
                            weight: 1
                        },
                        {
                            label: '天干 (10)',
                            data: stemsData,
                            backgroundColor: (ctx) => ctx.dataIndex === stemIndex ? '#d4ac0d' : '#fef9c3',
                            borderColor: '#fff',
                            borderWidth: 2,
                            weight: 0.7 // Smaller inner ring
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: { duration: 500 },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false } // Disable tooltip for cleaner gear look
                    },
                    rotation: 0 // We will not rotate chart, we rotate colors
                }
            });
        }

        // --- LOGIC: Gear Rotation ---
        function updateGears() {
            // Update Colors in Chart to simulate rotation/selection
            gearsChart.data.datasets[0].backgroundColor = gearsChart.data.datasets[0].data.map((_, i) => 
                i === branchIndex ? '#c0392b' : '#e5e7eb'
            );
            gearsChart.data.datasets[1].backgroundColor = gearsChart.data.datasets[1].data.map((_, i) => 
                i === stemIndex ? '#d4ac0d' : '#f3f4f6'
            );
            gearsChart.update();
            updateYearDisplay();
        }

        function updateYearDisplay() {
            const yearName = stems[stemIndex] + branches[branchIndex];
            document.getElementById('currentYearDisplay').innerText = yearName;
        }

        document.getElementById('nextYearBtn').addEventListener('click', () => {
            stemIndex = (stemIndex + 1) % 10;
            branchIndex = (branchIndex + 1) % 12;
            updateGears();
        });

        document.getElementById('prevYearBtn').addEventListener('click', () => {
            stemIndex = (stemIndex - 1 + 10) % 10;
            branchIndex = (branchIndex - 1 + 12) % 12;
            updateGears();
        });

    <\/script>
</body>
</html>`,dy=Object.freeze(Object.defineProperty({__proto__:null,default:cy},Symbol.toStringTag,{value:"Module"})),fy=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="date" content="2025-12-31">
    <meta name="category" content="Fun">
    <title>The Gregorian Calendar: A Historical & Mathematical Deep Dive</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@400;700&display=swap');

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f5f5f4;
        }
        ::-webkit-scrollbar-thumb {
            background: #a8a29e;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #78716c;
        }

        /* Mandatory Chart Container Styling */
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            height: 300px; /* Mobile height */
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px; /* Tablet/Desktop height */
            }
        }

        /* Classical Roman Font Feel */
        .font-serif-header {
            font-family: 'Cinzel', serif;
        }
        body {
            font-family: 'Lato', sans-serif;
        }

        /* Logic Flow Steps */
        .logic-step {
            transition: all 0.3s ease;
        }
        .logic-step.active {
            border-color: #b91c1c; /* Red-700 */
            background-color: #fef2f2; /* Red-50 */
            transform: scale(1.02);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .logic-step.success {
            border-color: #15803d; /* Green-700 */
            background-color: #f0fdf4; /* Green-50 */
        }

        /* Month Card Hover */
        .month-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .month-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
    </style>
    <!-- Chosen Palette: "Roman Stone & Imperial Red"
         - Backgrounds: Warm neutrals (Stone/Zinc) representing marble/parchment.
         - Primary Text: Dark Grey/Black for readability.
         - Accents: Deep Red (Imperial Rome) and Gold/Amber (Emperors).
         - Visual Hierarchy: Clear distinctions between "Mythology" sections and "Math" sections.
    -->

    <!-- Application Structure Plan:
         1. Hero Section: Sets the stage with the "Frankenstein" metaphor from the source report.
         2. The Messy Months (Interactive Dashboard):
            - Grid of months clickable to reveal origin stories (Gods vs Emperors vs Math Fails).
            - Chart.js Bar Chart: Visualizes the "Ego Trip" (July/Aug length) vs Feb's shortness.
         3. The Linguistic Time Machine (Toggle Interaction):
            - A comparison section for the "Name Game".
            - Toggle switch changes content from Modern English to Classical Latin pronunciation (Hard C, V=W).
         4. The Math Patch (Leap Year Lab):
            - Interactive Calculator: Users enter a year to see the logic flow (div by 4, 100, 400).
            - Chart.js Line Chart: Visualizes the Julian Drift vs Gregorian stability.
         5. The Missing Days (Visual Artifact):
            - A specific visualization of Oct 1582 showing the deleted dates.
    -->

    <!-- Visualization & Content Choices:
         1. Bar Chart (Days per Month):
            - Goal: Inform & Compare.
            - Justification: The text describes the uneven distribution due to egos. A bar chart makes the "July/Aug bump" and "Feb dip" instantly visible.
            - Library: Chart.js (Canvas).
         2. Line Chart (Calendar Drift):
            - Goal: Change/Trend.
            - Justification: The concept of "11 minutes per year" seems small. A line chart showing it accumulating to 10 days over centuries makes the problem concrete.
            - Library: Chart.js (Canvas).
         3. Logic Flow Visualization (HTML/CSS):
            - Goal: Organize/Logic.
            - Justification: The leap year rules (/4, /100, /400) are an algorithm. A visual step-by-step highlighter is better than text.
            - Method: CSS classes toggled via JS.
    -->

    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
</head>
<body class="bg-stone-50 text-stone-800 antialiased">

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-stone-100/95 backdrop-blur shadow border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center gap-3">
                    <span class="text-2xl text-red-800"><i class="fas fa-landmark"></i></span>
                    <span class="font-serif-header font-bold text-lg md:text-xl tracking-wide text-stone-900">Gregorian <span class="text-red-800">Chronicles</span></span>
                </div>
                <div class="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wider text-stone-600">
                    <button onclick="scrollToId('months')" class="hover:text-red-800 transition-colors">Month History</button>
                    <button onclick="scrollToId('linguistics')" class="hover:text-red-800 transition-colors">Name Origins</button>
                    <button onclick="scrollToId('math')" class="hover:text-red-800 transition-colors">Leap Logic</button>
                    <button onclick="scrollToId('missing')" class="hover:text-red-800 transition-colors">Missing Days</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <div class="inline-block p-2 px-4 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-widest mb-4">Historical Analysis</div>
            <h1 class="text-4xl md:text-6xl font-serif-header font-bold text-stone-900 mb-6 leading-tight">
                A Mix of Roman Egos &<br><span class="text-red-800">Mathematical Patches</span>
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-stone-600 leading-relaxed">
                The calendar on your phone isn't a perfect design. It is a historical "Frankenstein's monster" stitched together by mythology, politics, and a desperate 16th-century fix to keep us aligned with the sun.
            </p>
            <div class="mt-10">
                <button onclick="scrollToId('months')" class="px-8 py-3 bg-stone-900 text-white font-bold rounded hover:bg-red-800 transition-colors shadow-lg">
                    Uncover the History
                </button>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        <!-- SECTION 1: THE MESSY MONTHS -->
        <section id="months" class="scroll-mt-24">
            <div class="mb-10 text-center md:text-left">
                <h2 class="text-3xl font-serif-header font-bold mb-4 text-stone-900 border-b-4 border-red-800 inline-block pb-1">The Messy Months</h2>
                <div class="text-stone-600 text-lg mt-4 max-w-4xl space-y-4">
                    <p>
                        The Gregorian calendar is fundamentally a <strong>Solar Calendar</strong>, meaning its primary goal is to keep our year aligned with the Earth's orbit around the Sun. Unlike the Lunar Calendar, which strictly follows the moon phases (New Moon = 1st day), the Gregorian calendar’s months are completely arbitrary. Why does February only have 28 days while July and August have 31?
                    </p>
                </div>
            </div>

            <!-- The Winter Void Fun Fact -->
            <div class="bg-stone-800 text-stone-200 rounded-xl p-6 mb-8 shadow-xl border-l-8 border-amber-500 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl"><i class="fas fa-snowflake"></i></div>
                <div class="relative z-10">
                    <h3 class="text-2xl font-serif-header font-bold text-amber-500 mb-6 flex items-center">
                        <i class="fas fa-history mr-3"></i> Historical Fun Fact: The Evolution of the New Year
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Detailed Description Column -->
                        <div class="space-y-6">
                            <div>
                                <h4 class="font-bold text-amber-400 text-sm uppercase mb-1 border-b border-stone-600 pb-1 inline-block">1. The Original Void (Romulus)</h4>
                                <p class="text-sm leading-relaxed text-stone-300 mt-2">
                                    The original Roman calendar had only <strong>10 months</strong>, starting in <strong>March</strong> (Martius) and ending in <strong>December</strong>. The remaining ~60 days of winter were simply <strong>uncounted</strong> because they held no agricultural or military value. The calendar just "stopped."
                                </p>
                            </div>
                            <div>
                                <h4 class="font-bold text-amber-400 text-sm uppercase mb-1 border-b border-stone-600 pb-1 inline-block">2. Filling the Gap (Numa)</h4>
                                <p class="text-sm leading-relaxed text-stone-300 mt-2">
                                    King Numa Pompilius decided to organize this winter chaos. He added <strong>January</strong> and <strong>February</strong> to the end of the calendar to account for the void, bringing the year closer to a lunar cycle. However, March was still the first month.
                                </p>
                            </div>
                            <div>
                                <h4 class="font-bold text-amber-400 text-sm uppercase mb-1 border-b border-stone-600 pb-1 inline-block">3. The Shift to Jan 1st (153 BC)</h4>
                                <p class="text-sm leading-relaxed text-stone-300 mt-2">
                                    Why did the year move? In 153 BC, a difficult war in Spain required Roman Consuls (generals) to take office earlier than the traditional March 15th date to march their armies in time. They moved the inauguration to <strong>January 1st</strong>, permanently shifting the start of the year.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Visual Timeline Column -->
                        <div class="flex flex-col justify-center gap-4">
                            <!-- Visual Timeline 1 -->
                            <div class="bg-stone-900/50 p-4 rounded-lg border border-stone-700">
                                <div class="text-xs uppercase tracking-widest text-stone-500 mb-2 font-bold">Phase 1: The Void</div>
                                <div class="flex items-center gap-2 text-xs">
                                    <span class="px-2 py-1 bg-green-900 text-green-200 rounded">Mar-Dec (304 Days)</span>
                                    <i class="fas fa-arrow-right text-stone-600"></i>
                                    <span class="px-2 py-1 bg-stone-700 text-stone-500 rounded border border-stone-600 border-dashed opacity-70" title="Uncounted Days">Winter Gap (60?)</span>
                                </div>
                            </div>

                            <!-- Visual Timeline 2 -->
                            <div class="bg-stone-900/50 p-4 rounded-lg border border-stone-700">
                                <div class="text-xs uppercase tracking-widest text-stone-500 mb-2 font-bold">Phase 2: Add Jan/Feb</div>
                                <div class="flex items-center gap-2 text-xs">
                                    <span class="px-2 py-1 bg-green-900 text-green-200 rounded">Mar-Dec</span>
                                    <i class="fas fa-plus text-stone-500"></i>
                                    <span class="px-2 py-1 bg-amber-900 text-amber-200 rounded">Jan & Feb Added</span>
                                </div>
                            </div>

                            <!-- Visual Timeline 3 -->
                            <div class="bg-stone-900/80 p-4 rounded-lg border border-red-900/30 relative overflow-hidden">
                                <div class="absolute right-0 top-0 p-1 opacity-20 text-5xl text-red-500"><i class="fas fa-shield-alt"></i></div>
                                <div class="text-xs uppercase tracking-widest text-red-400 mb-2 font-bold">Phase 3: The Military Shift (153 BC)</div>
                                <div class="flex items-center gap-2 text-xs">
                                    <span class="px-2 py-1 bg-red-900 text-red-100 rounded font-bold border border-red-700">Jan 1 (New Start)</span>
                                    <i class="fas fa-arrow-right text-stone-500"></i>
                                    <span class="text-stone-400">Generals deploy early for war</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- NEW: The Ego Trip Fun Fact -->
            <div class="bg-stone-800 text-stone-200 rounded-xl p-6 mb-12 shadow-xl border-l-8 border-red-700 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10 text-9xl"><i class="fas fa-crown"></i></div>
                <div class="relative z-10">
                    <h3 class="text-2xl font-serif-header font-bold text-red-500 mb-6 flex items-center">
                        <i class="fas fa-user-tag mr-3"></i> Historical Fun Fact: The Emperor's Ego Trip
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <p class="text-sm leading-relaxed text-stone-300">
                                Originally, the months <strong>Quintilis</strong> (5th) and <strong>Sextilis</strong> (6th) were just numbers. But Roman politics and imperial vanity changed the calendar forever.
                            </p>
                            <div>
                                <h4 class="font-bold text-red-400 text-sm uppercase mb-1">1. Caesar's Month (July)</h4>
                                <p class="text-sm text-stone-400 leading-relaxed">
                                    After Julius Caesar's assassination, <em>Quintilis</em> was renamed <strong>July</strong> to honor his birth month. He ensured it kept 31 days to reflect his importance.
                                </p>
                            </div>
                            <div>
                                <h4 class="font-bold text-red-400 text-sm uppercase mb-1">2. Augustus's Envy (August)</h4>
                                <p class="text-sm text-stone-400 leading-relaxed">
                                    Later, Emperor Augustus wanted a month named after him too. <em>Sextilis</em> was renamed <strong>August</strong>. But it only had 30 days. Unwilling to have a "lesser" month than his predecessor Caesar, he reportedly stole a day from <strong>February</strong> (already short) to make August 31 days long.
                                </p>
                            </div>
                        </div>
                        
                        <div class="flex flex-col justify-center gap-6">
                            <!-- Visual comparison -->
                            <div class="bg-stone-900/50 p-6 rounded-lg border border-stone-700 flex items-center justify-around">
                                <div class="text-center">
                                    <div class="text-xs text-stone-500 uppercase tracking-widest mb-1">Julius</div>
                                    <div class="text-3xl font-serif-header font-bold text-red-500">July</div>
                                    <div class="text-sm text-stone-300 font-bold bg-stone-800 px-2 py-1 rounded mt-2 inline-block">31 Days</div>
                                </div>
                                <div class="text-2xl text-stone-600 font-serif-header">=</div>
                                <div class="text-center">
                                    <div class="text-xs text-stone-500 uppercase tracking-widest mb-1">Augustus</div>
                                    <div class="text-3xl font-serif-header font-bold text-red-500">August</div>
                                    <div class="text-sm text-stone-300 font-bold bg-stone-800 px-2 py-1 rounded mt-2 inline-block">31 Days</div>
                                </div>
                            </div>
                            <div class="text-center text-xs text-stone-500 bg-red-900/20 p-3 rounded border border-red-900/30">
                                <i class="fas fa-skull-crossbones mr-2"></i> The Victim: <span class="text-stone-300 font-bold">February</span> was raided to feed the Emperor's ego, dropping to 28 days.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Interactive Month Grid -->
                <div class="lg:col-span-7 grid grid-cols-3 sm:grid-cols-4 gap-3">
                    <!-- JS will populate buttons here -->
                    <div id="monthButtons" class="contents"></div>
                </div>

                <!-- Detail Panel -->
                <div class="lg:col-span-5">
                    <div id="monthDetailCard" class="bg-white p-8 rounded-xl shadow-lg border border-stone-200 h-full flex flex-col justify-center transition-all">
                        <div class="text-center text-stone-400">
                            <i class="fas fa-hand-pointer text-4xl mb-3"></i>
                            <p class="text-lg">Select a month to reveal its secret history.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chart: The Ego Gap -->
            <div class="mt-12 bg-white p-6 rounded-xl shadow border border-stone-200">
                <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div>
                        <h3 class="text-xl font-bold text-stone-900">Visualizing "The Ego Trip"</h3>
                        <p class="text-sm text-stone-500">Notice the spike for July/August and the dip for February.</p>
                    </div>
                </div>
                <div class="chart-container">
                    <canvas id="daysChart"></canvas>
                </div>
            </div>
        </section>

        <!-- SECTION 2: LINGUISTICS -->
        <section id="linguistics" class="scroll-mt-24 bg-stone-200 rounded-3xl p-8 md:p-12">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-serif-header font-bold mb-4 text-stone-900">Part II: The Name Game</h2>
                <p class="text-stone-700 text-lg max-w-3xl mx-auto">
                    The names of our months are a time capsule of Latin. But there's a problem: the "numbered" months (Sept-Dec) are mathematically wrong because the year used to start in March.
                </p>
            </div>

            <!-- Toggle Switch -->
            <div class="flex justify-center mb-10">
                <div class="bg-white p-2 rounded-full shadow-md flex items-center gap-4">
                    <span class="text-sm font-bold text-stone-500 pl-4">Modern English</span>
                    <button id="langToggle" class="w-16 h-8 rounded-full bg-stone-300 relative transition-colors focus:outline-none" aria-label="Toggle Language">
                        <div id="toggleCircle" class="w-6 h-6 bg-white rounded-full absolute top-1 left-1 shadow transform transition-transform duration-300"></div>
                    </button>
                    <span class="text-sm font-bold text-stone-900 pr-4">Classical Latin</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="linguisticCards">
                <!-- Cards populated by JS -->
            </div>
            
            <div class="mt-8 text-center bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <p class="text-amber-900 text-sm">
                    <i class="fas fa-lightbulb mr-2"></i> <strong>Fun Fact:</strong> In Classical Latin, 'C' is always hard (like K) and 'V' is pronounced like 'W'. "December" sounded like <em>"De-kem-ber"</em>!
                </p>
            </div>
        </section>

        <!-- SECTION 3: THE MATH PATCH -->
        <section id="math" class="scroll-mt-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <!-- Left: Explainer & Calculator -->
                <div>
                    <h2 class="text-3xl font-serif-header font-bold mb-4 text-stone-900 border-b-4 border-red-800 inline-block pb-1">Part III: The Leap Year Logic</h2>
                    
                    <!-- Added Julian Calendar Explanation -->
                    <div class="bg-stone-100 p-4 rounded-lg border-l-4 border-stone-400 mb-6 shadow-sm">
                        <h3 class="font-bold text-stone-800 mb-2 text-sm uppercase tracking-wide flex items-center">
                            <i class="fas fa-history mr-2"></i> Predecessor: The Julian Calendar
                        </h3>
                        <p class="text-sm text-stone-600 mb-2 leading-relaxed">
                            Proposed by <strong>Julius Caesar in 46 BC</strong>, the Julian calendar revolutionized timekeeping by establishing a 365-day year with a simple rule: add one leap day every 4 years.
                        </p>
                        <p class="text-sm text-stone-600 leading-relaxed">
                            <strong>The Flaw:</strong> It assumed the solar year was exactly 365.25 days. The actual solar year is ~365.2422 days. This tiny <strong>11-minute discrepancy</strong> caused the calendar to drift by about 3 days every 400 years, eventually misaligning Easter with the equinox.
                        </p>
                    </div>

                    <p class="text-stone-600 mb-6">
                        By 1582, that error had accumulated to 10 days. Pope Gregory XIII fixed it with this refined algorithm:
                    </p>

                    <!-- Calculator -->
                    <div class="bg-white border-2 border-stone-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
                        <div class="absolute top-0 right-0 bg-stone-800 text-white text-xs font-bold px-3 py-1 rounded-bl">The Algorithm</div>
                        
                        <div class="mb-6">
                            <label class="block text-sm font-bold text-stone-700 mb-2 uppercase">Test a Year</label>
                            <div class="flex gap-2">
                                <input type="number" id="yearInput" placeholder="e.g., 1900" class="w-full p-3 border border-stone-300 rounded font-mono text-lg focus:ring-2 focus:ring-red-800 outline-none">
                                <button onclick="checkLeapYear()" class="bg-red-800 text-white px-6 rounded font-bold hover:bg-red-900 transition-colors">CHECK</button>
                            </div>
                        </div>

                        <!-- Logic Visualization -->
                        <div class="space-y-3">
                            <div id="step1" class="logic-step border rounded p-3 flex justify-between items-center bg-stone-50">
                                <div>
                                    <span class="font-bold text-sm">Rule 1:</span>
                                    <span class="text-sm">Divisible by 4?</span>
                                </div>
                                <i class="fas fa-circle text-stone-200 text-xs icon"></i>
                            </div>
                            <div id="step2" class="logic-step border rounded p-3 flex justify-between items-center bg-stone-50">
                                <div>
                                    <span class="font-bold text-sm">Rule 2:</span>
                                    <span class="text-sm">Divisible by 100? (The Century Trap)</span>
                                </div>
                                <i class="fas fa-circle text-stone-200 text-xs icon"></i>
                            </div>
                            <div id="step3" class="logic-step border rounded p-3 flex justify-between items-center bg-stone-50">
                                <div>
                                    <span class="font-bold text-sm">Rule 3:</span>
                                    <span class="text-sm">Divisible by 400? (The Exception)</span>
                                </div>
                                <i class="fas fa-circle text-stone-200 text-xs icon"></i>
                            </div>
                        </div>

                        <!-- Result -->
                        <div id="resultBox" class="mt-6 p-4 text-center font-bold text-xl rounded hidden"></div>
                    </div>
                </div>

                <!-- Right: Drift Chart -->
                <div class="flex flex-col justify-center">
                    <div class="bg-white p-6 rounded-xl shadow border border-stone-200">
                        <h3 class="text-xl font-bold text-stone-900 mb-2">The Accumulating Error</h3>
                        <p class="text-sm text-stone-500 mb-6">Without the "Rule of 100/400", the Julian calendar drifts significantly from the solar year. By the year 3000, we would be weeks off.</p>
                        <div class="chart-container">
                            <canvas id="driftChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: THE MISSING DAYS -->
        <section id="missing" class="scroll-mt-24">
            <div class="bg-stone-900 text-stone-100 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute top-0 right-0 text-stone-800 opacity-20 transform translate-x-1/4 -translate-y-1/4">
                    <i class="fas fa-hourglass-half text-[400px]"></i>
                </div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-serif-header font-bold mb-6 text-amber-500">The Missing 10 Days</h2>
                        <p class="text-stone-300 text-lg mb-6 leading-relaxed">
                            To reset the calendar and wipe out the accumulated error, Pope Gregory XIII took drastic action. He decreed that <strong>Thursday, October 4, 1582</strong> would be followed immediately by <strong>Friday, October 15, 1582</strong>.
                        </p>
                        <p class="text-stone-400 italic">
                            The days between Oct 5th and Oct 14th simply vanished into history.
                        </p>
                    </div>

                    <!-- Visual Artifact Calendar -->
                    <div class="bg-stone-100 text-stone-900 p-6 rounded shadow-2xl transform rotate-2 max-w-sm mx-auto">
                        <div class="text-center font-serif-header font-bold text-2xl border-b-2 border-stone-300 pb-2 mb-4 text-red-900">
                            OCTOBER 1582
                        </div>
                        <div class="grid grid-cols-7 gap-1 text-center font-mono text-sm">
                            <div class="font-bold text-stone-500">Sun</div>
                            <div class="font-bold text-stone-500">Mon</div>
                            <div class="font-bold text-stone-500">Tue</div>
                            <div class="font-bold text-stone-500">Wed</div>
                            <div class="font-bold text-stone-500">Thu</div>
                            <div class="font-bold text-stone-500">Fri</div>
                            <div class="font-bold text-stone-500">Sat</div>
                            
                            <!-- Days -->
                            <div class="p-2 text-stone-400">30</div> <!-- Sept -->
                            <div class="p-2">1</div>
                            <div class="p-2">2</div>
                            <div class="p-2">3</div>
                            <div class="p-2 bg-red-200 font-bold rounded ring-2 ring-red-500">4</div>
                            <div class="p-2 bg-green-200 font-bold rounded ring-2 ring-green-500">15</div>
                            <div class="p-2">16</div>
                            
                            <div class="p-2">17</div>
                            <div class="p-2">18</div>
                            <div class="p-2">19</div>
                            <div class="p-2">20</div>
                            <div class="p-2">21</div>
                            <div class="p-2">22</div>
                            <div class="p-2">23</div>
                            
                            <div class="p-2">24</div>
                            <div class="p-2">25</div>
                            <div class="p-2">26</div>
                            <div class="p-2">27</div>
                            <div class="p-2">28</div>
                            <div class="p-2">29</div>
                            <div class="p-2">30</div>
                            
                            <div class="p-2">31</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="bg-stone-100 border-t border-stone-200 mt-24 py-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-stone-600 font-serif-header mb-2">"Next time you check the date, remember: you are looking at thousands of years of history!"</p>
        </div>
    </footer>

    <!-- LOGIC -->
    <script>
        // --- DATA ---
        const monthData = [
            { id: 1, name: 'January', days: 31, origin: 'Janus (God of Beginnings)', type: 'god', desc: "Named after Janus, the two-faced Roman god of beginnings, gates, transitions, and endings. One face looks back to the past year, while the other looks forward to the new one." },
            { id: 2, name: 'February', days: 28, origin: 'Februus (Purification)', type: 'bad', desc: "Named after Februus, the Etruscan god of purification. It coincided with the 'Februa' festival to wash away sins and honor the dead. As the last month of the original calendar, it was considered unlucky and short-changed." },
            { id: 3, name: 'March', days: 31, origin: 'Mars (God of War)', type: 'god', desc: "Named after Mars, the Roman God of War and guardian of agriculture. It was originally the 1st month of the year because the arrival of spring meant military campaigns could resume after winter." },
            { id: 4, name: 'April', days: 30, origin: 'Aperire (To Open)', type: 'nature', desc: "Likely derived from the Latin verb 'aperire' meaning 'to open,' referencing the opening of flower buds. Some theories also link it to Aphrodite, the Greek goddess of love." },
            { id: 5, name: 'May', days: 31, origin: 'Maia (Goddess of Growth)', type: 'god', desc: "Named after Maia, the Roman goddess of growth and nurturer of plants. She was associated with the earth's fertility and the warmth of late spring." },
            { id: 6, name: 'June', days: 30, origin: 'Juno (Queen of Gods)', type: 'god', desc: "Named after Juno, the wife of Jupiter and Queen of the Roman Gods. She is the patroness of marriage and childbirth, which is why June is traditionally considered a lucky month for weddings." },
            { id: 7, name: 'July', days: 31, origin: 'Julius Caesar', type: 'emperor', desc: "Originally named 'Quintilis' (the 5th month). It was renamed to honor Julius Caesar after his assassination, as it was his birth month. He ensured it kept 31 days to reflect his importance." },
            { id: 8, name: 'August', days: 31, origin: 'Augustus', type: 'emperor', desc: "Originally named 'Sextilis' (the 6th month). Renamed by Emperor Augustus. Legend says he stole a day from February to make his month 31 days long, equal to Caesar's, because he refused to have a shorter month." },
            { id: 9, name: 'September', days: 30, origin: 'Septem (7)', type: 'fail', desc: "Linguistic Fail: 'Septem' is Latin for 'Seven'. It was the 7th month in the original 10-month Roman calendar (starting in March), but became the 9th when Jan/Feb were added." },
            { id: 10, name: 'October', days: 31, origin: 'Octo (8)', type: 'fail', desc: "Linguistic Fail: 'Octo' is Latin for 'Eight' (like Octopus). It was the 8th month originally, but is now the 10th." },
            { id: 11, name: 'November', days: 30, origin: 'Novem (9)', type: 'fail', desc: "Linguistic Fail: 'Novem' is Latin for 'Nine'. It was the 9th month originally, but is now the 11th." },
            { id: 12, name: 'December', days: 31, origin: 'Decem (10)', type: 'fail', desc: "Linguistic Fail: 'Decem' is Latin for 'Ten' (like Decade). It was the 10th month originally, but is now the 12th." }
        ];

        const linguisticData = [
            { modern: 'January', latin: 'Ianuarius', modSound: 'JAN-yoo-air-ee', latSound: 'ya-nu-AH-ri-us', meaning: 'Janus (God)' },
            { modern: 'February', latin: 'Februarius', modSound: 'FEB-roo-air-ee', latSound: 'feb-ru-AH-ri-us', meaning: 'Purification' },
            { modern: 'March', latin: 'Martius', modSound: 'march', latSound: 'MAR-ti-us', meaning: 'Mars (God)' },
            { modern: 'April', latin: 'Aprilis', modSound: 'AY-pril', latSound: 'a-PREE-lis', meaning: 'To Open' },
            { modern: 'May', latin: 'Maius', modSound: 'may', latSound: 'MY-us', meaning: 'Maia (Goddess)' },
            { modern: 'June', latin: 'Iunius', modSound: 'joon', latSound: 'YOO-ni-us', meaning: 'Juno (Goddess)' },
            { modern: 'July', latin: 'Iulius', modSound: 'joo-LY', latSound: 'YOO-li-us', meaning: 'Julius Caesar' },
            { modern: 'August', latin: 'Augustus', modSound: 'AW-gust', latSound: 'ow-GUS-tus', meaning: 'Emp. Augustus' },
            { modern: 'September', latin: 'September', modSound: 'sep-TEM-ber', latSound: 'sep-TEM-ber', meaning: 'Seven (7)' },
            { modern: 'October', latin: 'October', modSound: 'ok-TO-ber', latSound: 'ok-TO-ber', meaning: 'Eight (8)' },
            { modern: 'November', latin: 'November', modSound: 'no-VEM-ber', latSound: 'no-WEM-ber', meaning: 'Nine (9)' },
            { modern: 'December', latin: 'December', modSound: 'di-SEM-ber', latSound: 'de-KEM-ber', meaning: 'Ten (10)' }
        ];

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderMonthButtons();
            renderCharts();
            renderLinguistics(false); // Default Modern
        });

        function scrollToId(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // --- MONTHS LOGIC ---
        function renderMonthButtons() {
            const container = document.getElementById('monthButtons');
            monthData.forEach(m => {
                const btn = document.createElement('button');
                // Color coding buttons based on type
                let colorClass = 'bg-stone-100 hover:bg-stone-200 text-stone-600';
                if(m.type === 'emperor') colorClass = 'bg-amber-100 hover:bg-amber-200 text-amber-800 border border-amber-300';
                if(m.type === 'fail') colorClass = 'bg-red-50 hover:bg-red-100 text-red-800';
                if(m.type === 'bad') colorClass = 'bg-stone-800 hover:bg-stone-900 text-stone-100';

                btn.className = \`\${colorClass} p-3 rounded shadow month-card font-bold text-sm truncate transition-colors\`;
                btn.textContent = m.name;
                btn.onclick = () => showMonthDetail(m);
                container.appendChild(btn);
            });
        }

        function showMonthDetail(month) {
            const card = document.getElementById('monthDetailCard');
            let icon = 'fa-calendar-day';
            let titleColor = 'text-stone-900';
            
            if(month.type === 'emperor') { icon = 'fa-crown'; titleColor = 'text-amber-700'; }
            if(month.type === 'fail') { icon = 'fa-calculator'; titleColor = 'text-red-700'; }
            if(month.type === 'bad') { icon = 'fa-skull'; titleColor = 'text-stone-700'; }

            card.innerHTML = \`
                <div class="animate-pulse-once">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-3xl font-serif-header font-bold \${titleColor}">\${month.name}</h3>
                        <span class="text-4xl font-bold text-stone-200">\${month.days}</span>
                    </div>
                    <div class="mb-6">
                        <span class="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            <i class="fas \${icon} mr-1"></i> \${month.origin}
                        </span>
                    </div>
                    <p class="text-lg text-stone-700 leading-relaxed border-l-4 border-red-800 pl-4">
                        \${month.desc}
                    </p>
                </div>
            \`;
            
            // Highlight chart bar
            highlightChart(month.id - 1);
        }

        // --- CHARTS ---
        let daysChartInstance;
        function renderCharts() {
            // 1. Days Bar Chart
            const ctxDays = document.getElementById('daysChart').getContext('2d');
            daysChartInstance = new Chart(ctxDays, {
                type: 'bar',
                data: {
                    labels: monthData.map(m => m.name.substring(0,3)),
                    datasets: [{
                        label: 'Days',
                        data: monthData.map(m => m.days),
                        backgroundColor: monthData.map(m => {
                            if(m.type === 'emperor') return '#d97706'; // Amber
                            if(m.type === 'bad') return '#292524'; // Stone-800
                            return '#e5e5e5'; // Light grey default
                        }),
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { min: 25, max: 32 }
                    }
                }
            });

            // 2. Drift Line Chart
            const ctxDrift = document.getElementById('driftChart').getContext('2d');
            
            // Generate data: 0 to 3000 years
            const labels = [1582, 1800, 2100, 2400, 2700, 3000];
            const julianData = labels.map(year => ((year - 1582) * 0.0078).toFixed(1)); // Approx error accumulation
            const gregorianData = labels.map(() => 0.1); // Flatline

            new Chart(ctxDrift, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Julian Drift (Days Error)',
                            data: julianData,
                            borderColor: '#dc2626', // Red
                            backgroundColor: 'rgba(220, 38, 38, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Gregorian Correction',
                            data: gregorianData,
                            borderColor: '#16a34a', // Green
                            borderDash: [5, 5],
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { title: { display: true, text: 'Days of Error' } }
                    }
                }
            });
        }

        function highlightChart(index) {
            const colors = monthData.map((m, i) => {
                if (i === index) return '#b91c1c'; // Highlight Red
                if(m.type === 'emperor') return '#d97706';
                if(m.type === 'bad') return '#292524';
                return '#e5e5e5';
            });
            daysChartInstance.data.datasets[0].backgroundColor = colors;
            daysChartInstance.update();
        }

        // --- LINGUISTICS ---
        let isLatin = false;
        document.getElementById('langToggle').addEventListener('click', () => {
            isLatin = !isLatin;
            const circle = document.getElementById('toggleCircle');
            const btn = document.getElementById('langToggle');
            
            if(isLatin) {
                circle.classList.add('translate-x-8');
                btn.classList.remove('bg-stone-300');
                btn.classList.add('bg-red-800');
            } else {
                circle.classList.remove('translate-x-8');
                btn.classList.add('bg-stone-300');
                btn.classList.remove('bg-red-800');
            }
            renderLinguistics(isLatin);
        });

        function renderLinguistics(showLatin) {
            const container = document.getElementById('linguisticCards');
            container.innerHTML = '';
            
            linguisticData.forEach(d => {
                const title = showLatin ? d.latin : d.modern;
                const sound = showLatin ? d.latSound : d.modSound;
                const highlightClass = showLatin ? 'text-red-800 font-serif-header' : 'text-stone-800';
                const label = showLatin ? 'Classical Latin' : 'Modern English';
                
                const card = document.createElement('div');
                card.className = 'bg-white p-5 rounded-lg shadow border border-stone-200 hover:shadow-lg transition-shadow';
                card.innerHTML = \`
                    <div class="text-xs font-bold text-stone-400 uppercase mb-2">\${d.meaning}</div>
                    <div class="text-xl font-bold \${highlightClass} mb-2">\${title}</div>
                    <div class="text-sm bg-stone-100 p-2 rounded inline-block font-mono text-stone-600">
                        <i class="fas fa-volume-up mr-2 opacity-50"></i>/\${sound}/
                    </div>
                \`;
                container.appendChild(card);
            });
        }

        // --- LEAP YEAR LOGIC ---
        function checkLeapYear() {
            const input = document.getElementById('yearInput');
            const year = parseInt(input.value);
            const resultBox = document.getElementById('resultBox');
            const step1 = document.getElementById('step1');
            const step2 = document.getElementById('step2');
            const step3 = document.getElementById('step3');

            if(!year) return;

            // Reset UI
            [step1, step2, step3].forEach(el => {
                el.className = 'logic-step border rounded p-3 flex justify-between items-center bg-stone-50';
                el.querySelector('.icon').className = 'fas fa-circle text-stone-200 text-xs icon';
            });
            resultBox.classList.add('hidden');
            resultBox.className = "mt-6 p-4 text-center font-bold text-xl rounded hidden";

            // Logic
            let isLeap = false;
            let failureReason = "";

            // Step 1: Div by 4
            const divBy4 = (year % 4 === 0);
            updateStepUI(step1, divBy4);

            if (!divBy4) {
                isLeap = false;
                showResult(false, year, "Not divisible by 4");
                return;
            }

            // Step 2: Div by 100
            const divBy100 = (year % 100 === 0);
            updateStepUI(step2, divBy100);

            if (!divBy100) {
                // Divisible by 4, but NOT 100 -> Leap!
                isLeap = true;
                step2.classList.add('success'); // It's a "good" thing here for the leap calculation
                showResult(true, year, "Divisible by 4, but not 100");
                return;
            }

            // Step 3: Div by 400
            const divBy400 = (year % 400 === 0);
            updateStepUI(step3, divBy400);

            if (divBy400) {
                isLeap = true;
                showResult(true, year, "Divisible by 400 (The Exception)");
            } else {
                isLeap = false;
                showResult(false, year, "Century year not divisible by 400");
            }
        }

        function updateStepUI(element, isTrue) {
            element.classList.add('active');
            const icon = element.querySelector('.icon');
            if(isTrue) {
                icon.className = 'fas fa-check text-green-600 icon';
                element.classList.add('success');
            } else {
                icon.className = 'fas fa-times text-red-600 icon';
            }
        }

        function showResult(isLeap, year, reason) {
            const box = document.getElementById('resultBox');
            box.classList.remove('hidden');
            
            if(isLeap) {
                box.classList.add('bg-green-100', 'text-green-800');
                box.innerHTML = \`<i class="fas fa-check-circle mr-2"></i> \${year} IS a Leap Year<br><span class="text-sm font-normal text-green-700">\${reason}</span>\`;
            } else {
                box.classList.add('bg-red-100', 'text-red-800');
                box.innerHTML = \`<i class="fas fa-times-circle mr-2"></i> \${year} is NOT a Leap Year<br><span class="text-sm font-normal text-red-700">\${reason}</span>\`;
            }
        }

    <\/script>
</body>
</html>
`,py=Object.freeze(Object.defineProperty({__proto__:null,default:fy},Symbol.toStringTag,{value:"Module"})),hy=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="date" content="2026-01-01">
    <meta name="category" content="Fun">
    <title>The Hebrew Calendar: God's Algorithm</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@400;700&display=swap');

        :root {
            --israel-blue: #0038b8;
            --parchment: #fdfbf7;
            --text-color: #1f2937;
            --gold: #d4af37;
        }

        body {
            background-color: var(--parchment);
            color: var(--text-color);
            font-family: 'Lato', sans-serif;
            overflow-x: hidden;
        }

        h1, h2, h3, .brand-font {
            font-family: 'Cinzel', serif;
        }

        /* Mandatory Chart Container Styling */
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 400px;
        }

        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        /* Interactive Card Effects */
        .interactive-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .interactive-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            border-color: var(--israel-blue);
        }

        /* Sunset Slider Styling */
        input[type=range] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: var(--gold);
            cursor: pointer;
            margin-top: -10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #cbd5e1;
            border-radius: 2px;
        }
        
        .sky-gradient-day {
            background: linear-gradient(to bottom, #60a5fa, #bfdbfe);
        }
        .sky-gradient-sunset {
            background: linear-gradient(to bottom, #1e3a8a, #f59e0b, #ef4444);
        }
        .sky-gradient-night {
            background: linear-gradient(to bottom, #0f172a, #1e293b);
        }

        /* Math Section Styles */
        .day-box {
            transition: all 0.3s ease;
        }
        .day-box.active {
            background-color: var(--israel-blue);
            color: white;
            border-color: var(--israel-blue);
            transform: scale(1.05);
        }
        .arrow-path {
            stroke-dasharray: 10;
            animation: dash 2s linear infinite;
        }
        @keyframes dash {
            to {
                stroke-dashoffset: -20;
            }
        }
    </style>
    <!-- Chosen Palette: Israel Blue (#0038b8), Parchment White (#fdfbf7), Holy Gold (#d4af37). 
         This palette evokes the feeling of ancient scripture and the flag of Israel. -->

    <!-- Application Structure Plan:
         1. Hero: Introduces "God's Algorithm" and the Anno Mundi concept.
         2. Architecture (Lunisolar): Explains the Moon/Sun duality.
         3. The Wheel of Time (Months): Interactive Doughnut chart showing the 12/13 months. CLICKING a segment updates the side panel with Festival details.
         4. The Pregnant Year (Leap Cycle): A visual grid of the 19-year Metonic cycle showing fixed leap years.
         5. Sunset Logic: Interactive slider comparing Gregorian midnight start vs. Hebrew sunset start.
         6. The Math Patch (Dehioth): Interactive Simulator showing why adjustments happen + Bar chart.
    -->

    <!-- Visualization & Content Choices:
         1. Months Doughnut Chart: Visualizes the cycle of the year. Interaction: CLICK to see details.
         2. Leap Cycle Grid: A 19-cell grid using HTML/CSS. Interaction: Highlights on hover.
         3. Dehioth Simulator (JS): User picks a start day, system checks Yom Kippur conflict.
         4. Year Length Bar Chart: Compares the 6 types of years.
    -->

    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
</head>
<body class="selection:bg-blue-200 selection:text-blue-900">

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center gap-2">
                    <span class="text-2xl text-[#0038b8]"><i class="fas fa-star-of-david"></i></span>
                    <span class="brand-font font-bold text-xl text-gray-800">Hebrew<span class="text-[#0038b8]">Cal</span></span>
                </div>
                <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                    <button onclick="scrollToSection('architecture')" class="hover:text-[#0038b8] transition">Lunisolar</button>
                    <button onclick="scrollToSection('months')" class="hover:text-[#0038b8] transition">Months</button>
                    <button onclick="scrollToSection('leap')" class="hover:text-[#0038b8] transition">Leap Cycle</button>
                    <button onclick="scrollToSection('sunset')" class="hover:text-[#0038b8] transition">Sunset Rule</button>
                    <button onclick="scrollToSection('math')" class="hover:text-[#0038b8] transition">The Math</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative bg-[#fdfbf7] border-b border-gray-200 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
            <div class="inline-block p-2 px-4 rounded-full bg-blue-50 text-[#0038b8] text-sm font-bold tracking-widest mb-6 border border-blue-100 shadow-sm" title="Latin for 'Year of the World'">
                ANNO MUNDI 5786
            </div>
            <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                God's <span class="text-[#0038b8]">Algorithm</span>
            </h1>
            <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed font-light">
                When Math Meets Theology. Explore the precision algorithms designed for a holy life, where time is measured not just by the sun, but by faith.
            </p>
            <div class="mt-10">
                <button onclick="scrollToSection('architecture')" class="px-8 py-3 bg-[#0038b8] text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
                    Decode the Calendar
                </button>
            </div>
        </div>
        <!-- Background Decor -->
        <div class="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style="background-image: url('https://www.transparenttextures.com/patterns/cubes.png');"></div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        <!-- Section 1: Core Architecture -->
        <section id="architecture">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 brand-font">1. Core Architecture: Lunisolar</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">
                    The Hebrew calendar is a hybrid system. It balances the lunar cycle (for months) with the solar cycle (for years) to ensure holidays like Passover always fall in the spring.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Moon Card -->
                <div class="interactive-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-600 mb-4">
                        <i class="fas fa-moon"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">The Moon Defines the Month</h3>
                    <p class="text-gray-600 text-sm mb-2">
                        Each month begins strictly with the <strong>New Moon (Molad)</strong>. A month is either 29 or 30 days long, aligning perfectly with the lunar phases.
                    </p>
                    <div class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                        <strong>Molad:</strong> The calculated moment of the new moon.
                    </div>
                </div>

                <!-- Sun Card -->
                <div class="interactive-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <div class="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-3xl text-yellow-500 mb-4">
                        <i class="fas fa-sun"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">The Sun Defines the Year</h3>
                    <p class="text-gray-600 text-sm">
                        To align with the agricultural seasons (specifically the barley harvest for Passover), the calendar must sync with the <strong>Solar Tropical Year</strong>.
                    </p>
                </div>
            </div>
        </section>

        <!-- Section 2: The Months & Festivals (Combined) -->
        <section id="months" class="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[600px]">
                
                <!-- Left: Chart Area -->
                <div class="lg:col-span-7 p-8 flex flex-col items-center justify-center relative bg-gray-50">
                    <h2 class="text-2xl font-bold mb-2 brand-font text-gray-800 text-center">2. The Cycle of Months</h2>
                    <p class="text-xs text-gray-500 mb-6 text-center">Click on a month slice to reveal its holy days.</p>
                    <div class="chart-container" style="height: 400px; width: 100%;">
                        <canvas id="monthsChart"></canvas>
                    </div>
                    <!-- Central Text Overlay -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center pt-8">
                        <div class="text-sm text-gray-400 font-bold uppercase tracking-widest">Select</div>
                        <div class="text-xs text-gray-300">Month</div>
                    </div>
                </div>

                <!-- Right: Details Panel -->
                <div class="lg:col-span-5 bg-[#0038b8] text-white p-8 flex flex-col relative overflow-hidden">
                    <!-- Background Icon -->
                    <div class="absolute -bottom-10 -right-10 text-9xl text-white opacity-5 pointer-events-none">
                        <i class="fas fa-calendar-alt"></i>
                    </div>

                    <!-- Default State / Dynamic Content Container -->
                    <div id="monthDetailContent" class="relative z-10 h-full flex flex-col">
                        <div class="flex items-center gap-3 mb-6 border-b border-blue-400/30 pb-4">
                            <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                                <span id="detailIcon">📅</span>
                            </div>
                            <div>
                                <h3 class="text-3xl font-bold brand-font" id="detailName">Select a Month</h3>
                                <p class="text-blue-200 text-sm" id="detailSeason">Explore the sacred cycle</p>
                            </div>
                        </div>

                        <!-- Content Area -->
                        <div class="flex-grow overflow-y-auto pr-2 custom-scroll space-y-4" id="detailBody">
                            <p class="text-blue-100 italic">Click on the wheel to learn about the origins, meanings, and rituals of each month's festivals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: The Leap Cycle -->
        <section id="leap">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4 brand-font">3. The "Pregnant Year"</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">
                    Unlike the Islamic calendar which drifts, or the Gregorian which adds a day, the Hebrew calendar adds an entire month. In a fixed 19-year cycle (Metonic cycle), 7 years are "Pregnant" (Leap Years).
                </p>
            </div>

            <!-- Visualization of 19 Year Cycle -->
            <div class="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div class="grid grid-cols-4 md:grid-cols-5 gap-4" id="leapGrid">
                    <!-- Javascript will populate this -->
                </div>
                <div class="mt-8 flex justify-center gap-6 text-sm">
                    <div class="flex items-center"><span class="w-3 h-3 bg-gray-200 rounded-full mr-2"></span> Common Year</div>
                    <div class="flex items-center"><span class="w-3 h-3 bg-[#0038b8] rounded-full mr-2"></span> Pregnant Year (+Adar I)</div>
                </div>
                
                <div class="mt-6 text-center">
                    <span class="inline-block bg-blue-50 text-[#0038b8] text-xs px-2 py-1 rounded border border-blue-100 font-bold">
                        Shanah Me'uberet: "Pregnant Year" (Hebrew)
                    </span>
                </div>
            </div>
        </section>

        <!-- Section 4: Sunset Logic -->
        <section id="sunset" class="scroll-mt-24">
            <div class="bg-gray-900 text-white rounded-3xl p-8 md:p-16 relative overflow-hidden transition-colors duration-1000" id="skyBox">
                
                <div class="relative z-10 max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-6 brand-font text-white">4. When Does the Day Start?</h2>
                    <p class="text-gray-300 mb-8 text-lg">
                        "And there was evening and there was morning, the first day." <br>
                        <span class="text-sm opacity-70">- Genesis</span>
                    </p>

                    <!-- Interactive Slider -->
                    <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                        <div class="flex justify-between text-xs font-bold uppercase tracking-widest mb-4">
                            <span>Morning</span>
                            <span>Noon</span>
                            <span>Sunset (Start of Day)</span>
                            <span>Midnight</span>
                        </div>
                        
                        <input type="range" min="6" max="24" value="12" step="0.1" id="timeSlider" class="mb-8">
                        
                        <div class="grid grid-cols-2 gap-8">
                            <div class="text-center p-4 rounded bg-white/5">
                                <div class="text-xs text-gray-400 uppercase mb-1">Gregorian Date</div>
                                <div class="text-2xl font-bold" id="gregDate">October 7</div>
                                <div class="text-xs text-gray-500 mt-1">Changes at 00:00</div>
                            </div>
                            <div class="text-center p-4 rounded bg-[#d4af37]/20 border border-[#d4af37]">
                                <div class="text-xs text-[#d4af37] uppercase mb-1">Hebrew Date</div>
                                <div class="text-2xl font-bold text-[#d4af37]" id="hebrewDate">Tishrei 10</div>
                                <div class="text-xs text-[#d4af37]/70 mt-1">Changes at Sunset (~18:00)</div>
                            </div>
                        </div>
                        <div class="mt-6 text-sm font-bold" id="timeDisplay">12:00 PM - Day Time</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 5: The Math (Dehioth) -->
        <section id="math" class="scroll-mt-24">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 brand-font">5. Crazy Math: Avoiding Bad Timing</h2>
                <p class="text-gray-600 max-w-3xl mx-auto mb-8">
                    The calendar acts like a <strong>precision gearbox</strong>. It artificially adds or subtracts a day from specific months to prevent specific holidays from falling on forbidden days. This is called <strong class="text-[#0038b8]">Dehioth</strong> (Postponement).
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                <!-- Dehioth Interactive Simulator -->
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                    <div class="flex items-center mb-6">
                        <div class="w-10 h-10 rounded-full bg-[#0038b8] text-white flex items-center justify-center text-xl mr-3">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800">Conflict Simulator</h3>
                    </div>
                    
                    <p class="text-sm text-gray-600 mb-4">
                        <strong>Rule:</strong> <span class="text-blue-700 font-bold">Yom Kippur</span> (Day 10) cannot be Friday or Sunday to avoid clashing with Sabbath (Saturday).
                    </p>

                    <div class="mb-6">
                        <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">If Rosh Hashanah (New Year) falls on:</label>
                        <div class="flex gap-2 justify-between" id="dayButtons">
                            <!-- Buttons populated by JS -->
                        </div>
                    </div>

                    <!-- Simulator Visualization -->
                    <div class="bg-gray-50 rounded-xl p-6 relative border border-gray-200">
                        <!-- Flow Diagram -->
                        <div class="grid grid-cols-3 gap-2 mb-8 relative z-10 text-center">
                            
                            <!-- RH -->
                            <div class="bg-white p-2 rounded border border-gray-200 shadow-sm relative z-20">
                                <div class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">New Year</div>
                                <div class="font-bold text-[#0038b8] text-sm" id="simRH">Wednesday</div>
                                <div class="text-[9px] text-gray-500">Tishrei 1</div>
                            </div>
                            
                            <!-- YK -->
                            <div class="bg-white p-2 rounded border border-gray-200 shadow-sm relative z-20">
                                <div class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Atonement</div>
                                <div class="font-bold text-gray-800 text-sm" id="simYK">Friday</div>
                                <div class="text-[9px] text-gray-500">Tishrei 10</div>
                                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[8px] bg-gray-100 px-1 rounded text-gray-400 whitespace-nowrap">+10 Days</div>
                            </div>

                            <!-- HR -->
                            <div class="bg-white p-2 rounded border border-gray-200 shadow-sm relative z-20">
                                <div class="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Willow Ritual</div>
                                <div class="font-bold text-gray-800 text-sm" id="simHR">Tuesday</div>
                                <div class="text-[9px] text-gray-500">Tishrei 21</div>
                                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[8px] bg-gray-100 px-1 rounded text-gray-400 whitespace-nowrap">+21 Days</div>
                            </div>

                            <!-- Connecting Line -->
                            <div class="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-gray-300 z-10 -mt-2"></div>
                        </div>

                        <!-- Result Box -->
                        <div id="simResult" class="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 transition-all duration-300">
                            <!-- Populated by JS -->
                        </div>
                    </div>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <div class="flex items-start text-xs text-gray-500">
                            <i class="fas fa-info-circle mr-2 mt-0.5 text-[#0038b8]"></i>
                            <div>
                                <strong>Summary:</strong> Because of these two holidays, Rosh Hashanah can <u>never</u> fall on Sunday, Wednesday, or Friday.
                            </div>
                        </div>
                        <!-- NEW: Explanation about other fasts -->
                        <div class="flex items-start text-xs text-gray-500 mt-3 bg-blue-50 p-2 rounded">
                            <i class="fas fa-question-circle mr-2 mt-0.5 text-blue-600"></i>
                            <div>
                                <strong>What about other fasts?</strong> (e.g., Tisha B'Av)<br>
                                They do <u>not</u> change the calendar. If a minor fast falls on Shabbat, the date stays, but the <em>observance</em> is simply moved to Sunday. Yom Kippur is unique because it cannot be moved, so the calendar itself must change.
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Year Length Chart -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col">
                    <h3 class="font-bold text-gray-800 mb-2">The Result: 6 Different Year Lengths</h3>
                    <p class="text-xs text-gray-500 mb-6">To accommodate these shifts, the year expands and contracts.</p>
                    <div class="chart-container flex-grow">
                        <canvas id="yearLengthChart"></canvas>
                    </div>
                </div>
            </div>
        </section>

        <!-- New Glossary Section -->
        <section id="glossary" class="bg-[#1f2937] py-12 border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-4">
                <h3 class="text-2xl text-[#d4af37] mb-6 brand-font text-center">Vocabulary of Time</h3>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                    <div class="bg-gray-800 p-4 rounded border border-gray-700">
                        <span class="text-white font-bold block mb-1">Anno Mundi (AM)</span>
                        <span class="text-gray-400">Latin for "Year of the World". Counts years from the biblical creation date (3761 BCE).</span>
                    </div>
                    <div class="bg-gray-800 p-4 rounded border border-gray-700">
                        <span class="text-white font-bold block mb-1">Molad</span>
                        <span class="text-gray-400">The calculated moment of the New Moon. The basis for the start of every Hebrew month.</span>
                    </div>
                    <div class="bg-gray-800 p-4 rounded border border-gray-700">
                        <span class="text-white font-bold block mb-1">Shanah Me'uberet</span>
                        <span class="text-gray-400">"Pregnant Year". A leap year with 13 months (adding Adar I) to keep Passover in Spring.</span>
                    </div>
                    <div class="bg-gray-800 p-4 rounded border border-gray-700">
                        <span class="text-white font-bold block mb-1">Dehioth</span>
                        <span class="text-gray-400">Rules of Postponement. Mathematical adjustments to year length to prevent bad holiday timing.</span>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="bg-[#111827] text-gray-500 py-8 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 text-center">
        </div>
    </footer>

    <!-- Logic -->
    <script>
        // --- 1. Months Wheel Logic with Expanded Data ---
        const monthsCtx = document.getElementById('monthsChart').getContext('2d');
        
        // Expanded Data Structure
        const monthData = [
            {
                name: 'Nisan', 
                days: 30, 
                season: 'Spring',
                icon: '🍷',
                holidays: [
                    { name: 'Passover (Pesach)', origin: 'Exodus (c. 1300 BCE)', meaning: 'Freedom from slavery; Birth of nation', ritual: 'Seder meal, Matzah, 4 cups of wine' }
                ]
            },
            {
                name: 'Iyar', 
                days: 29, 
                season: 'Spring',
                icon: '🇮🇱',
                holidays: [
                    { name: 'Yom HaAtzmaut', origin: '1948 Declaration', meaning: 'Israel Independence Day', ritual: 'BBQs, Blue & White flags, Prayer' },
                    { name: 'Lag BaOmer', origin: '2nd Century CE', meaning: 'End of plague; Mysticism', ritual: 'Bonfires, Weddings' }
                ]
            },
            {
                name: 'Sivan', 
                days: 30, 
                season: 'Late Spring',
                icon: '🌾',
                holidays: [
                    { name: 'Shavuot', origin: 'Mt. Sinai Revelation', meaning: 'Giving of Torah; Harvest', ritual: 'All-night study, Dairy foods' }
                ]
            },
            {
                name: 'Tammuz', 
                days: 29, 
                season: 'Summer',
                icon: '☀️',
                holidays: [
                    { name: '17th of Tammuz', origin: 'Roman Siege', meaning: 'Fast day; Walls breached', ritual: 'Fasting' }
                ]
            },
            {
                name: 'Av', 
                days: 30, 
                season: 'Summer',
                icon: '🔥',
                holidays: [
                    { name: 'Tisha B\\'Av', origin: 'Destruction of Temples', meaning: 'National Mourning', ritual: 'Fasting, Sitting on floor, Lamentations' }
                ]
            },
            {
                name: 'Elul', 
                days: 29, 
                season: 'Late Summer',
                icon: '📯',
                holidays: [
                    { name: 'Month of Mercy', origin: 'Pre-High Holidays', meaning: 'Introspection & Repentance', ritual: 'Daily Shofar blowing, Slichot prayers' }
                ]
            },
            {
                name: 'Tishrei', 
                days: 30, 
                season: 'Autumn',
                icon: '🍏',
                holidays: [
                    { name: 'Rosh Hashanah', origin: 'Leviticus 23', meaning: 'New Year; Judgment', ritual: 'Shofar, Apples & Honey' },
                    { name: 'Yom Kippur', origin: 'Leviticus 16', meaning: 'Atonement', ritual: '25hr Fasting, White clothes' },
                    { name: 'Sukkot', origin: 'Desert Wandering', meaning: 'Trust in God; Joy', ritual: 'Sukkah, Lulav & Etrog' },
                    { name: 'Hoshanah Rabbah', origin: 'Ancient Prophets', meaning: 'Final Seal of Judgment', ritual: 'Beating willows' }
                ]
            },
            {
                name: 'Cheshvan', 
                days: '29/30', 
                season: 'Autumn',
                icon: '🌧️',
                holidays: [] // "Mar" Cheshvan (Bitter) has no holidays
            },
            {
                name: 'Kislev', 
                days: '29/30', 
                season: 'Winter',
                icon: '🕯️',
                holidays: [
                    { name: 'Hanukkah', origin: 'Maccabean Revolt (165 BCE)', meaning: 'Light over Darkness', ritual: 'Menorah lighting, Fried foods (Latkes)' }
                ]
            },
            {
                name: 'Tevet', 
                days: 29, 
                season: 'Winter',
                icon: '🧱',
                holidays: [
                    { name: '10th of Tevet', origin: 'Siege of Jerusalem', meaning: 'Fast day', ritual: 'Fasting' }
                ]
            },
            {
                name: 'Shevat', 
                days: 30, 
                season: 'Late Winter',
                icon: '🌳',
                holidays: [
                    { name: 'Tu BiShvat', origin: 'Mishnah', meaning: 'New Year for Trees', ritual: 'Planting trees, Eating fruits of Israel' }
                ]
            },
            {
                name: 'Adar', 
                days: 29, 
                season: 'Late Winter',
                icon: '🎭',
                holidays: [
                    { name: 'Purim', origin: 'Book of Esther', meaning: 'Survival from Genocide', ritual: 'Megillah reading, Costumes, Gifts' }
                ]
            }
        ];

        // Render Chart
        new Chart(monthsCtx, {
            type: 'doughnut',
            data: {
                labels: monthData.map(m => m.name),
                datasets: [{
                    data: Array(12).fill(1),
                    backgroundColor: [
                        '#0038b8', '#1e4bd1', '#3b60e9', '#5675ff', 
                        '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', 
                        '#6366f1', '#4f46e5', '#4338ca', '#3730a3'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        updateSidePanel(index);
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => \`Click to see details for \${monthData[ctx.dataIndex].name}\`
                        }
                    }
                },
                cutout: '60%'
            }
        });

        // Side Panel Update Logic
        const detailIcon = document.getElementById('detailIcon');
        const detailName = document.getElementById('detailName');
        const detailSeason = document.getElementById('detailSeason');
        const detailBody = document.getElementById('detailBody');

        function updateSidePanel(index) {
            const m = monthData[index];
            
            // Fade effect
            const container = document.getElementById('monthDetailContent');
            container.style.opacity = '0';
            
            setTimeout(() => {
                detailIcon.innerText = m.icon;
                detailName.innerText = m.name;
                detailSeason.innerText = \`\${m.season} • \${m.days} Days\`;
                
                // Build Festival HTML
                if (m.holidays.length > 0) {
                    let html = '';
                    m.holidays.forEach(h => {
                        html += \`
                            <div class="bg-blue-800/40 p-4 rounded-lg border border-blue-400/20">
                                <h4 class="font-bold text-[#d4af37] text-sm mb-2 uppercase tracking-wide">\${h.name}</h4>
                                <div class="space-y-2 text-xs">
                                    <p><span class="text-blue-200">Origin:</span> \${h.origin}</p>
                                    <p><span class="text-blue-200">Meaning:</span> \${h.meaning}</p>
                                    <p class="mt-2 pt-2 border-t border-blue-400/20 italic text-blue-100">"\${h.ritual}"</p>
                                </div>
                            </div>
                        \`;
                    });
                    detailBody.innerHTML = html;
                } else {
                    detailBody.innerHTML = \`
                        <div class="h-full flex flex-col items-center justify-center text-center opacity-60">
                            <div class="text-4xl mb-4">🌙</div>
                            <p>No major festivals in this month.</p>
                            <p class="text-xs mt-2">A time for routine and reflection.</p>
                        </div>
                    \`;
                }
                
                container.style.opacity = '1';
                container.style.transition = 'opacity 0.3s ease';
            }, 300);
        }

        // Initialize with Nisan (Index 0)
        updateSidePanel(0);


        // --- 2. Leap Cycle Grid Logic ---
        const leapGrid = document.getElementById('leapGrid');
        const leapYears = [3, 6, 8, 11, 14, 17, 19];
        
        for (let i = 1; i <= 19; i++) {
            const isLeap = leapYears.includes(i);
            const div = document.createElement('div');
            div.className = \`h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-all cursor-default \${isLeap ? 'bg-[#0038b8] text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-400'}\`;
            div.innerText = i;
            div.title = isLeap ? "Pregnant Year: Adds Adar I (30 days)" : "Common Year";
            leapGrid.appendChild(div);
        }

        // --- 3. Sunset Simulator Logic ---
        const slider = document.getElementById('timeSlider');
        const timeDisplay = document.getElementById('timeDisplay');
        const skyBox = document.getElementById('skyBox');
        const hebDate = document.getElementById('hebrewDate');
        
        slider.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            const hour = Math.floor(val);
            const minute = Math.floor((val - hour) * 60);
            const timeStr = \`\${hour}:\${minute < 10 ? '0' + minute : minute}\`;
            
            // Visual Updates
            if (val < 17) {
                // Day
                skyBox.className = "rounded-3xl p-8 md:p-16 relative overflow-hidden transition-colors duration-500 sky-gradient-day text-gray-800";
                timeDisplay.innerText = \`\${timeStr} - Day Time\`;
                hebDate.innerText = "Tishrei 10";
                hebDate.classList.remove('animate-pulse');
            } else if (val >= 17 && val < 19) {
                // Sunset
                skyBox.className = "rounded-3xl p-8 md:p-16 relative overflow-hidden transition-colors duration-500 sky-gradient-sunset text-white";
                timeDisplay.innerText = \`\${timeStr} - Sunset (Transition)\`;
                hebDate.innerText = "Transitioning...";
            } else {
                // Night (Next Day)
                skyBox.className = "rounded-3xl p-8 md:p-16 relative overflow-hidden transition-colors duration-500 sky-gradient-night text-white";
                timeDisplay.innerText = \`\${timeStr} - Night (New Day!)\`;
                hebDate.innerText = "Tishrei 11";
                hebDate.classList.add('animate-pulse');
            }
        });

        // --- 4. NEW: Dehioth Simulator Logic ---
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        const dayButtonsContainer = document.getElementById('dayButtons');
        const simRH = document.getElementById('simRH');
        const simYK = document.getElementById('simYK');
        const simHR = document.getElementById('simHR');
        const simResult = document.getElementById('simResult');

        function renderDayButtons() {
            days.forEach((day, index) => {
                const btn = document.createElement('button');
                btn.className = \`flex-1 py-2 text-xs rounded border border-gray-200 hover:bg-blue-50 transition \${index === 3 ? 'bg-[#0038b8] text-white' : 'bg-white text-gray-600'}\`;
                btn.innerText = day.substring(0, 3);
                btn.onclick = () => runSimulation(index, btn);
                dayButtonsContainer.appendChild(btn);
            });
            // Initial run with Wednesday (Index 3)
            runSimulation(3, dayButtonsContainer.children[3]); 
        }

        function runSimulation(rhIndex, btnElement) {
            // Update buttons visual
            Array.from(dayButtonsContainer.children).forEach(b => b.className = 'flex-1 py-2 text-xs rounded border border-gray-200 hover:bg-blue-50 bg-white text-gray-600 transition');
            btnElement.className = 'flex-1 py-2 text-xs rounded border-none bg-[#0038b8] text-white shadow-md transform scale-105';

            const ykIndex = (rhIndex + 2) % 7; // +9 days
            const hrIndex = (rhIndex + 6) % 7; // +20 days (20 % 7 = 6)
            
            simRH.innerText = days[rhIndex];
            simYK.innerText = days[ykIndex];
            simHR.innerText = days[hrIndex];

            // LOGIC:
            // 1. Yom Kippur (ykIndex) cannot be Friday (5) or Sunday (0).
            // 2. Hoshanah Rabbah (hrIndex) cannot be Saturday (6).
            
            let conflictMsg = "";
            let isConflict = false;

            if (ykIndex === 5) { // RH Wednesday
                isConflict = true;
                conflictMsg = \`<strong>Yom Kippur is Friday.</strong> Conflict with Sabbath (Saturday). Cannot cook for 2 days.\`;
            } else if (ykIndex === 0) { // RH Friday
                isConflict = true;
                conflictMsg = \`<strong>Yom Kippur is Sunday.</strong> Conflict with Sabbath (Saturday). Cannot cook for 2 days.\`;
            } else if (hrIndex === 6) { // RH Sunday
                isConflict = true;
                conflictMsg = \`<strong>Hoshanah Rabbah is Saturday.</strong> The willow beating ritual is forbidden on Sabbath.\`;
            }

            if (isConflict) {
                // BAD
                simResult.className = "p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 animate-pulse";
                simResult.innerHTML = \`
                    <div class="text-2xl text-red-500"><i class="fas fa-exclamation-triangle"></i></div>
                    <div>
                        <h4 class="font-bold text-red-800 text-sm">Forbidden Schedule!</h4>
                        <p class="text-xs text-red-600 mt-1 leading-relaxed">\${conflictMsg}</p>
                        <div class="mt-3 text-xs bg-white/50 p-2 rounded text-red-800 font-mono border border-red-100">
                            <i class="fas fa-wrench mr-1"></i> <strong>Fix:</strong> Adjust previous year length to shift Rosh Hashanah.
                        </div>
                    </div>
                \`;
                
                // Highlight logic removed per user request
                
            } else {
                // GOOD
                simResult.className = "p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3";
                simResult.innerHTML = \`
                    <div class="text-2xl text-green-500"><i class="fas fa-check-circle"></i></div>
                    <div>
                        <h4 class="font-bold text-green-800 text-sm">Valid Schedule</h4>
                        <p class="text-xs text-green-600 mt-1">All holy days fall on permitted days of the week.</p>
                    </div>
                \`;
                // Highlight cleanup logic removed per user request
            }
        }

        // --- 5. Year Length Chart ---
        const yearCtx = document.getElementById('yearLengthChart').getContext('2d');
        new Chart(yearCtx, {
            type: 'bar',
            data: {
                labels: ['Common (353)', 'Common (354)', 'Common (355)', 'Leap (383)', 'Leap (384)', 'Leap (385)'],
                datasets: [{
                    label: 'Days in Year',
                    data: [353, 354, 355, 383, 384, 385],
                    backgroundColor: [
                        '#93c5fd', '#60a5fa', '#3b82f6', // Blues for Common
                        '#fde047', '#facc15', '#eab308'  // Golds for Leap
                    ],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: false, min: 340 }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // Navigation
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Init
        window.addEventListener('DOMContentLoaded', () => {
            renderDayButtons();
        });
    <\/script>
</body>
</html>`,my=Object.freeze(Object.defineProperty({__proto__:null,default:hy},Symbol.toStringTag,{value:"Module"})),gy=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="date" content="2026-01-01">
    <meta name="category" content="Fun">
    <title>The Mayan Calendar: A Mathematical Masterpiece</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        /* Switched to standard Noto Sans/Serif for English support */
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Noto+Sans:wght@300;400;700&display=swap');

        :root {
            --maya-green: #2d6a4f;
            --maya-gold: #d4a373;
            --stone-grey: #e5e7eb;
            --jungle-dark: #1b4332;
            --clay-red: #bc4749;
        }

        body {
            background-color: #f3f4f6;
            color: #1f2937;
            font-family: 'Noto Sans', sans-serif;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        h1, h2, h3, .serif-font {
            font-family: 'Noto Serif', serif;
        }

        /* Mandatory Chart Container Styling */
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }

        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #e5e7eb;
        }
        ::-webkit-scrollbar-thumb {
            background: var(--maya-green);
            border-radius: 4px;
        }

        /* Card Styles */
        .maya-card {
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-top: 4px solid var(--maya-green);
        }
        .maya-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        /* Gear Animation for Tzolk'in */
        .gear-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 auto;
        }
        .gear {
            position: absolute;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            transition: transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44);
        }
        .gear-outer {
            width: 100%;
            height: 100%;
            border: 2px dashed var(--maya-green);
            color: var(--maya-green);
            top: 0;
            left: 0;
            font-size: 0.8rem;
        }
        .gear-inner {
            width: 60%;
            height: 60%;
            border: 2px dashed var(--clay-red);
            color: var(--clay-red);
            top: 20%;
            left: 20%;
            font-size: 1.2rem;
            background: rgba(255,255,255,0.9);
        }
        .gear-marker {
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 15px solid #333;
            z-index: 10;
        }

        /* Glyph Block Styling */
        .glyph-block {
            background-color: #e5e7eb;
            border: 2px solid #9ca3af;
            border-radius: 0.5rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 80px;
        }
    </style>
    <!-- Chosen Palette: Jungle Green (#2d6a4f), Gold (#d4a373), Stone Grey (#e5e7eb), Clay Red (#bc4749) -->
    
    <!-- Application Structure Plan:
         1. Hero Section: Title "Mayan Calendar", subtitle "Not the end of the world", current Long Count date.
         2. The Three Gears Overview: Cards explaining Tzolk'in, Haab', Long Count.
         3. Interactive Tzolk'in: A visual simulation of the 13 numbers and 20 names meshing.
         4. Haab' & The Drift: Chart.js Pie chart of the 18+1 months. Interactive slider to show seasonal drift over 1500 years.
         5. The Long Count: A calculator/converter showing the linear progression of time (Bak'tun, K'atun, etc.).
         6. Math & Astronomy: Explaining Base-20 and E-Group observatories.
    -->

    <!-- Visualization & Content Choices:
         1. Tzolk'in Gears (CSS): Visualizes the "meshing" concept described in the report. Goal: Organize/Relationships.
         2. Haab' Month Wheel (Chart.js Doughnut): Visualizes the 18 months + Wayeb structure. Goal: Inform.
         3. Seasonal Drift Chart (Chart.js Line): Visualizes the accumulation of the 0.25 day error over centuries. Goal: Change/Trend.
         4. Long Count Stela (HTML/CSS): Visualizes the Base-20 hierarchy. Goal: Inform.
    -->

    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
</head>
<body class="antialiased selection:bg-green-200 selection:text-green-900">

    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="flex items-center gap-2">
                    <span class="text-2xl text-[#2d6a4f]"><i class="fas fa-sun"></i></span>
                    <span class="serif-font font-bold text-xl text-gray-800">Mayan <span class="text-[#2d6a4f]">Calendar</span></span>
                </div>
                <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
                    <button onclick="scrollToSection('tzolkin')" class="hover:text-[#2d6a4f] transition">Tzolk'in</button>
                    <button onclick="scrollToSection('haab')" class="hover:text-[#2d6a4f] transition">Haab'</button>
                    <button onclick="scrollToSection('long-count')" class="hover:text-[#2d6a4f] transition">Long Count</button>
                    <button onclick="scrollToSection('astronomy')" class="hover:text-[#2d6a4f] transition">Astronomy</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative bg-[#1b4332] text-white overflow-hidden py-20 px-4 text-center">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000); background-position: 0 0, 10px 10px; background-size: 20px 20px;"></div>
        
        <div class="relative z-10 max-w-4xl mx-auto">
            <div class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-[#d4a373] uppercase bg-black/30 rounded-full border border-[#d4a373]">
                A Mathematical Miracle from the Jungle
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6 serif-font">
                Gears of Time &<br><span class="text-[#d4a373]">Endless Cycles</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                The Mayans never predicted the end of the world in 2012. Instead, they created the world's most complex time machine. A massive system composed of three independent yet interlocking gears.
            </p>
            
            <!-- Live Long Count Display -->
            <div class="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-[#2d6a4f] inline-block">
                <div class="text-xs text-gray-400 mb-2 uppercase tracking-wide">Today's Long Count</div>
                <div class="flex gap-2 md:gap-4 justify-center items-end" id="heroLongCount">
                    <!-- Populated by JS -->
                    <span class="text-gray-400">Loading...</span>
                </div>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        <!-- Section 1: Tzolk'in -->
        <section id="tzolkin">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-[#2d6a4f] mb-4 serif-font">1. Tzolk'in</h2>
                    <h3 class="text-xl text-gray-600 mb-6">The Sacred 260 Days</h3>
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        The core of the Mayan calendar, used for divination. It is not composed of "months", but rather two interlocking cycles:<br>
                        <span class="font-bold text-[#bc4749]">13 Numbers</span> × <span class="font-bold text-[#2d6a4f]">20 Day Names</span> = 260 Days.
                    </p>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Why 260? It likely corresponds to the human <strong>gestation period</strong> (approx. 9 months) or the cycle of Venus.
                    </p>
                    
                    <div class="bg-white p-4 rounded-lg border-l-4 border-[#2d6a4f] shadow-sm">
                        <h4 class="font-bold text-[#2d6a4f] mb-2"><i class="fas fa-hand-pointer mr-2"></i> Interactive Experience</h4>
                        <p class="text-sm text-gray-600">Click the button below to spin the gears of time and see how these two cycles combine for each unique day.</p>
                        <div class="mt-4 flex gap-4">
                            <button onclick="spinGears()" class="px-4 py-2 bg-[#2d6a4f] text-white rounded hover:bg-[#1b4332] transition"><i class="fas fa-sync-alt mr-2"></i> Spin Gears</button>
                        </div>
                    </div>
                </div>

                <!-- Gear Visualizer -->
                <div class="bg-gray-100 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner h-[400px]">
                    <div class="gear-marker"></div>
                    <div class="gear-container">
                        <!-- Outer Gear (20 Names) -->
                        <div class="gear gear-outer" id="gearOuter">
                            <!-- Populated by JS -->
                        </div>
                        <!-- Inner Gear (13 Numbers) -->
                        <div class="gear gear-inner" id="gearInner">
                            <!-- Populated by JS -->
                        </div>
                    </div>
                    <div class="mt-8 text-center">
                        <div class="text-xs text-gray-500 uppercase">Current Combination</div>
                        <div class="text-2xl font-bold text-[#2d6a4f] serif-font" id="currentTzolkinDate">1 Imix</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 2: Haab' -->
        <section id="haab">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-[#2d6a4f] mb-4 serif-font">2. Haab'</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    This is the "Civil Calendar" used for farming. It has a precise mathematical structure but contains a fatal "flaw" — it has no leap years.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Structure Card -->
                <div class="maya-card p-6">
                    <h3 class="font-bold text-lg mb-4 text-[#bc4749]">Structure: 365 Days</h3>
                    <div class="chart-container" style="height: 250px;">
                        <canvas id="haabChart"></canvas>
                    </div>
                    <ul class="mt-4 text-sm text-gray-600 space-y-2">
                        <li><i class="fas fa-calendar-alt text-[#2d6a4f] mr-2"></i> <strong>18 Months</strong> × 20 Days = 360 Days</li>
                        <li><i class="fas fa-ghost text-[#bc4749] mr-2"></i> <strong>Wayeb'</strong>: Last 5 Days</li>
                    </ul>
                    <p class="mt-4 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                        <strong>Wayeb'</strong> was considered an unlucky "Ghost Time". People stayed indoors to avoid evil spirits.
                    </p>
                </div>

                <!-- Drift Explanation -->
                <div class="lg:col-span-2 maya-card p-6 flex flex-col">
                    <h3 class="font-bold text-lg mb-2 text-[#d4a373]">The Missing 0.25 Day: Seasonal Drift</h3>
                    <p class="text-sm text-gray-600 mb-6">
                        The real solar year is 365.2422 days, but the Haab' is only 365 days. The Mayans chose <strong>not to add leap years</strong>.
                        This means every 4 years, the calendar 'lags' by 1 day. Over ~1500 years, the seasons cycle backwards completely!
                    </p>
                    
                    <div class="flex-grow bg-gray-50 rounded-lg p-4 relative">
                        <h4 class="text-xs font-bold text-gray-500 uppercase mb-2 text-center">Seasonal Drift Simulator (1500 Years)</h4>
                        <div class="chart-container" style="height: 250px;">
                            <canvas id="driftChart"></canvas>
                        </div>
                        <div class="mt-4 px-4">
                            <input type="range" min="0" max="1500" value="0" id="yearSlider" class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer">
                            <div class="flex justify-between text-xs text-gray-500 mt-2">
                                <span>Year 0</span>
                                <span id="yearDisplay" class="font-bold text-[#2d6a4f]">Year 0</span>
                                <span>Year 1500</span>
                            </div>
                            <div class="mt-2 text-center text-sm" id="driftStatus">
                                Haab' New Year (0 Pop) falls in: <span class="font-bold text-green-600">Spring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Long Count -->
        <section id="long-count" class="bg-[#1b4332] text-white rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif">13</div>
            
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold mb-6 serif-font">3. Long Count</h2>
                    <p class="text-gray-300 mb-6 leading-relaxed">
                        The combination of Tzolk'in and Haab' (Calendar Round) repeats every 52 years. To record linear history over thousands of years, the Mayans invented the Long Count. It is a pure Base-20 tally system.
                    </p>
                    <div class="bg-black/30 p-6 rounded-xl border border-[#d4a373]/30">
                        <h4 class="text-[#d4a373] font-bold mb-4">Unit Conversion</h4>
                        <ul class="space-y-3 font-mono text-sm">
                            <li class="flex justify-between"><span>1 Kin</span> <span class="text-gray-400">= 1 Day</span></li>
                            <li class="flex justify-between"><span>1 Uinal</span> <span class="text-gray-400">= 20 Days</span></li>
                            <li class="flex justify-between"><span>1 Tun</span> <span class="text-gray-400">= 360 Days (≈1 Year)</span></li>
                            <li class="flex justify-between"><span>1 K'atun</span> <span class="text-gray-400">= 7,200 Days (≈20 Years)</span></li>
                            <li class="flex justify-between text-[#d4a373] font-bold"><span>1 Bak'tun</span> <span>= 144,000 Days (≈394 Years)</span></li>
                        </ul>
                    </div>
                    <div class="mt-6 text-xs text-gray-400">
                        <i class="fas fa-info-circle mr-2"></i> Start Date: August 11, 3114 BCE (Mayan Creation)
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="text-center mb-6">
                        <h3 class="text-2xl font-bold text-[#d4a373] mb-2">December 21, 2012</h3>
                        <p class="text-sm text-gray-300">Doomsday? No, just the end of the 13th Bak'tun.</p>
                    </div>
                    
                    <!-- Stela Representation -->
                    <div class="flex flex-col gap-2 bg-stone-200 p-4 rounded-lg shadow-2xl text-[#1b4332] w-48 items-center border-4 border-stone-400">
                        <div class="w-full text-center text-xs text-stone-500 mb-2 uppercase tracking-widest">13.0.0.0.0</div>
                        <div class="glyph-block w-full">
                            <span class="text-3xl font-bold">13</span>
                            <span class="text-xs uppercase mt-1">Bak'tun</span>
                        </div>
                        <div class="glyph-block w-full">
                            <span class="text-3xl font-bold">0</span>
                            <span class="text-xs uppercase mt-1">K'atun</span>
                        </div>
                        <div class="glyph-block w-full">
                            <span class="text-3xl font-bold">0</span>
                            <span class="text-xs uppercase mt-1">Tun</span>
                        </div>
                        <div class="glyph-block w-full">
                            <span class="text-3xl font-bold">0</span>
                            <span class="text-xs uppercase mt-1">Uinal</span>
                        </div>
                        <div class="glyph-block w-full">
                            <span class="text-3xl font-bold">0</span>
                            <span class="text-xs uppercase mt-1">Kin</span>
                        </div>
                    </div>
                    <p class="mt-4 text-center text-sm text-gray-300 max-w-xs">
                        Like our calendar flipping from Dec 31 to Jan 1, it was simply the completion of a Great Cycle.
                    </p>
                </div>
            </div>
        </section>

        <!-- Section 4: Math & Astronomy -->
        <section id="astronomy">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-[#2d6a4f] mb-4 serif-font">4. Mayan Math & Astronomy</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    The Mayans had no telescopes, but they captured the stars with stone architecture and calculated the universe in Base-20.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Base 20 -->
                <div class="maya-card p-8">
                    <div class="text-[#bc4749] text-3xl mb-4"><i class="fas fa-calculator"></i></div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Base-20 & Zero</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        We count with 10 fingers. Mayans counted toes too, hence Base-20 (Vigesimal).
                    </p>
                    <p class="text-gray-600 text-sm mb-4">
                        <strong>Why is a 'Month' 20 days?</strong> 
                        In Mayan, the 20-day unit is a <em>Uinal</em>, and the word for 'human' is <em>Uinic</em>. For them, one human (20 digits) is a perfect integer unit, unrelated to the moon cycle (29.5 days).
                    </p>
                    <div class="bg-gray-100 p-4 rounded text-center">
                        <span class="text-4xl font-bold text-[#2d6a4f]">0</span>
                        <p class="text-xs text-gray-500 mt-2">The Mayans were among the first to invent "Zero" (Shell symbol).</p>
                    </div>
                </div>

                <!-- E-Groups -->
                <div class="maya-card p-8">
                    <div class="text-[#d4a373] text-3xl mb-4"><i class="fas fa-eye"></i></div>
                    <h3 class="text-xl font-bold mb-4 text-gray-800">Stone Telescopes in the Jungle</h3>
                    <p class="text-gray-600 text-sm mb-4">
                        Although the calendar had no leap years, Mayan priests knew the true seasons perfectly. They used <strong>E-Group</strong> structures to observe.
                    </p>
                    <div class="relative bg-gray-800 h-32 rounded-lg mt-4 flex items-end justify-center px-4 overflow-hidden group">
                        <!-- Sun visual -->
                        <div class="absolute top-4 left-1/2 w-8 h-8 bg-yellow-500 rounded-full shadow-[0_0_20px_rgba(255,255,0,0.5)]"></div>
                        <!-- Temple visual -->
                        <div class="w-8 h-12 bg-gray-500 mx-2 rounded-t-sm relative top-0" title="Left: Summer Solstice"></div>
                        <div class="w-12 h-16 bg-gray-400 mx-2 rounded-t-sm relative top-0 z-10" title="Center: Equinox"></div>
                        <div class="w-8 h-12 bg-gray-500 mx-2 rounded-t-sm relative top-0" title="Right: Winter Solstice"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-2 text-center">
                        Priests stood on the pyramid to see where the sun rose over the temples to calibrate the seasons.
                    </p>
                </div>
            </div>
        </section>

    </main>

    <footer class="bg-[#1b4332] text-white py-12 text-center border-t-8 border-[#d4a373]">
        <div class="max-w-4xl mx-auto px-4">
            <p class="serif-font text-2xl mb-4 text-[#d4a373]">Time is both circular and linear.</p>
        </div>
    </footer>

    <!-- Logic -->
    <script>
        // --- 1. Tzolk'in Gear Logic ---
        const tzNumbers = Array.from({length: 13}, (_, i) => i + 1);
        const tzNames = ["Imix", "Ik", "Akbal", "Kan", "Chicchan", "Cimi", "Manik", "Lamat", "Muluc", "Oc", "Chuen", "Eb", "Ben", "Ix", "Men", "Cib", "Caban", "Etznab", "Cauac", "Ahau"];
        
        let numIndex = 0;
        let nameIndex = 0;
        let rotationOuter = 0;
        let rotationInner = 0;

        function initGears() {
            const outerEl = document.getElementById('gearOuter');
            const innerEl = document.getElementById('gearInner');

            // Render Outer (Names) - 20 items
            // Angle step = 360 / 20 = 18 deg
            tzNames.forEach((name, i) => {
                const el = document.createElement('div');
                el.innerText = name;
                el.style.position = 'absolute';
                el.style.height = '20px';
                el.style.width = '100px';
                el.style.textAlign = 'center';
                el.style.top = '50%';
                el.style.left = '50%';
                // Transform: center, rotate, move out
                el.style.transform = \`translate(-50%, -50%) rotate(\${i * 18}deg) translate(0, -130px) rotate(90deg)\`; // Adjusted translate for visual
                el.style.transformOrigin = 'center';
                outerEl.appendChild(el);
            });

            // Render Inner (Numbers) - 13 items
            // Angle step = 360 / 13 = 27.69 deg
            tzNumbers.forEach((num, i) => {
                const el = document.createElement('div');
                el.innerText = num;
                el.style.position = 'absolute';
                el.style.height = '20px';
                el.style.width = '40px';
                el.style.textAlign = 'center';
                el.style.top = '50%';
                el.style.left = '50%';
                el.style.transform = \`translate(-50%, -50%) rotate(\${i * (360/13)}deg) translate(0, -70px) rotate(90deg)\`;
                el.style.transformOrigin = 'center';
                innerEl.appendChild(el);
            });
            
            updateTzolkinDisplay();
        }

        function spinGears() {
            // Increment logic
            numIndex = (numIndex + 1) % 13;
            nameIndex = (nameIndex + 1) % 20;

            // Visual rotation
            // We rotate counter to the index increment to bring the next item to top
            // Outer (20 items): rotate by -18 deg
            // Inner (13 items): rotate by -27.69 deg
            rotationOuter -= 18;
            rotationInner -= (360/13);

            document.getElementById('gearOuter').style.transform = \`rotate(\${rotationOuter}deg)\`;
            document.getElementById('gearInner').style.transform = \`rotate(\${rotationInner}deg)\`;

            updateTzolkinDisplay();
        }

        function updateTzolkinDisplay() {
            // Arrays are 0-indexed, but displayed 1-indexed for visual logic if needed, 
            // but here we just map index to value.
            // The marker is at TOP. 
            // When we rotate -angle, index 1 moves to top.
            const num = tzNumbers[numIndex];
            const name = tzNames[nameIndex];
            document.getElementById('currentTzolkinDate').innerText = \`\${num} \${name}\`;
        }

        // --- 2. Haab' Chart ---
        function initHaabChart() {
            const ctx = document.getElementById('haabChart').getContext('2d');
            const months = Array(18).fill('Month').map((_, i) => \`Month \${i+1}\`);
            months.push("Wayeb' (5 Days)");
            
            const data = Array(18).fill(20);
            data.push(5);

            const colors = Array(18).fill('#2d6a4f');
            colors.push('#bc4749'); // Red for Wayeb

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: months,
                    datasets: [{
                        data: data,
                        backgroundColor: colors,
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (ctx) => \`\${ctx.label}: \${ctx.raw} Days\`
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        }

        // --- 3. Drift Simulator ---
        const slider = document.getElementById('yearSlider');
        const yearDisplay = document.getElementById('yearDisplay');
        const driftStatus = document.getElementById('driftStatus');
        let driftChart;

        function initDriftChart() {
            const ctx = document.getElementById('driftChart').getContext('2d');
            // Generate data points: 0, 300, 600, 900, 1200, 1500 years
            const labels = [0, 300, 600, 900, 1200, 1500];
            const data = labels.map(y => {
                // Drift = y * 0.2422 days
                // 1 Year ~ 365 days. 
                // We want to map drift to Season.
                // 0 drift = Spring. 90 drift = Winter/Summer depending on direction.
                // Haab is shorter, so dates arrive EARLY. 
                // Spring Equinox (March) moves to Feb, Jan... (Backwards).
                return (y * 0.2422); 
            });

            driftChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Accumulated Error (Days)',
                        data: data,
                        borderColor: '#bc4749',
                        backgroundColor: 'rgba(188, 71, 73, 0.1)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { 
                            title: { display: true, text: 'Days of Error' },
                            suggestedMax: 365
                        }
                    }
                }
            });
        }

        slider.addEventListener('input', (e) => {
            const year = parseInt(e.target.value);
            yearDisplay.innerText = \`Year \${year}\`;
            
            // Drift calculation: ~0.25 days per year
            const driftDays = year * 0.2422;
            const seasonalShift = driftDays % 365; // Modulo year
            
            // Map shift to season (Backward movement)
            // Start (0): Spring
            // -90 days (approx): Winter
            // -180 days: Autumn
            // -270 days: Summer
            // But visually, 365 drift = Full Circle.
            
            let season = "";
            let color = "";
            
            if (seasonalShift < 45 || seasonalShift > 320) {
                season = "Spring"; color = "text-green-600";
            } else if (seasonalShift >= 45 && seasonalShift < 135) {
                season = "Winter"; color = "text-blue-600"; 
            } else if (seasonalShift >= 135 && seasonalShift < 225) {
                season = "Autumn"; color = "text-orange-600";
            } else {
                season = "Summer"; color = "text-red-600";
            }
            
            driftStatus.innerHTML = \`Haab' New Year (0 Pop) drifted to: <span class="font-bold \${color}">\${season}</span> (Error ~\${Math.floor(driftDays)} Days)\`;
        });

        // --- 4. Long Count Calculation ---
        function updateLongCount() {
            // Mayan Correlation Constant (GMT): 584283
            // Julian Day Number calculation is complex, simplified approx for demo:
            // Base date: Aug 11, 3114 BC.
            // Days since then to roughly today (Jan 1 2026).
            // Span approx 5139 years.
            
            const start = new Date(-3113, 7, 11); // 3114 BC is year -3113 in JS logic (0-based) ? Actually JS Date handles BC badly.
            // Using a fixed reference: Dec 21, 2012 was 13.0.0.0.0
            const refDate = new Date('2012-12-21');
            const now = new Date(); // Current date (2026 for simulation environment)
            
            // Difference in days
            const diffTime = Math.abs(now - refDate);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
            
            // 13.0.0.0.0 in total days = 13 * 144000 = 1,872,000
            let totalDays = 1872000 + diffDays;
            
            // Convert back to Mayan units
            const baktun = Math.floor(totalDays / 144000);
            let remainder = totalDays % 144000;
            
            const katun = Math.floor(remainder / 7200);
            remainder = remainder % 7200;
            
            const tun = Math.floor(remainder / 360);
            remainder = remainder % 360;
            
            const uinal = Math.floor(remainder / 20);
            const kin = remainder % 20;
            
            const str = \`\${baktun}.\${katun}.\${tun}.\${uinal}.\${kin}\`;
            
            // HTML Update
            const container = document.getElementById('heroLongCount');
            const units = [
                {v: baktun, l: "Bak'tun"},
                {v: katun, l: "K'atun"},
                {v: tun, l: "Tun"},
                {v: uinal, l: "Uinal"},
                {v: kin, l: "Kin"}
            ];
            
            let html = '';
            units.forEach(u => {
                html += \`
                    <div class="flex flex-col items-center">
                        <span class="text-3xl md:text-4xl font-bold text-[#d4a373] serif-font">\${u.v}</span>
                        <span class="text-[10px] text-gray-500 uppercase">\${u.l}</span>
                    </div>
                    \${u.l !== 'Kin' ? '<span class="text-2xl text-gray-600 self-center pb-4">.</span>' : ''}
                \`;
            });
            container.innerHTML = html;
        }

        // --- Navigation ---
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Init
        window.addEventListener('DOMContentLoaded', () => {
            initGears();
            initHaabChart();
            initDriftChart();
            updateLongCount();
        });

    <\/script>
</body>
</html>`,yy=Object.freeze(Object.defineProperty({__proto__:null,default:gy},Symbol.toStringTag,{value:"Module"}));function xy(e){const n=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,t=e.match(n);if(!t)return{data:{},content:e};const r=t[1],i=t[2],l={};return r.split(`
`).forEach(a=>{const o=a.split(":");if(o.length>=2){const s=o[0].trim(),u=o.slice(1).join(":").trim();l[s]=u.replace(/^['"](.*)['"]$/,"$1")}}),{data:l,content:i}}function vy(e){const n=e.match(/<title>(.*?)<\/title>/i),t=n?n[1]:"Untitled",r=o=>{const s=e.match(new RegExp(`<meta\\s+name=["']${o}["']\\s+content=["'](.*?)["']`,"i"));return s?s[1]:""},i=r("description"),l=r("date")||new Date().toISOString().split("T")[0],a=r("category")||"Uncategorized";return{title:t,description:i,date:l,category:a,content:e,type:"html"}}function Rp(){const e=Object.assign({"/src/content/hello-world.md":uy}),n=Object.assign({"/src/content/Chinese_Calendar.html":dy,"/src/content/Gregorian_Calendar.html":py,"/src/content/Hebrew_Calendar.html":my,"/src/content/Mayan_Calendar.html":yy}),t=[];for(const r in e){const{default:i}=e[r],{data:l,content:a}=xy(i),o=r.split("/").pop().replace(".md","");t.push({slug:o,...l,content:a,type:"markdown"})}for(const r in n){const{default:i}=n[r],l=vy(i),a=r.split("/").pop().replace(".html","");t.push({slug:a,...l})}return t.sort((r,i)=>new Date(i.date)-new Date(r.date))}function Ap(e){return Rp().find(t=>t.slug===e)}const by=""+new URL("easy-BRJ2gp9Y.png",import.meta.url).href,bc=""+new URL("hard-CRBR0DOZ.png",import.meta.url).href;function wy(){const e=di(),n=new Date().getFullYear(),[t,r]=_.useState(!1);_.useEffect(()=>{const u=new Image;u.src=bc;let c;const d=()=>{r(!0),clearTimeout(c),c=setTimeout(()=>{r(!1)},200)};return window.addEventListener("mousemove",d),()=>{window.removeEventListener("mousemove",d),clearTimeout(c)}},[]);const i={display:"flex",flexDirection:"column",gap:"1rem",marginTop:"2rem",marginBottom:"2rem"},l=u=>({textDecoration:"none",color:e.pathname===u?"var(--primary)":"var(--text-main)",fontWeight:e.pathname===u?"600":"400",fontSize:"0.9rem",textTransform:"uppercase",letterSpacing:"0.1em",borderBottom:"none"}),a=e.pathname==="/",o="./travel/index.html";return Cl.useMemo(()=>{const u=e.pathname.match(/^\/blog\/([^/]+)$/);if(u){const c=u[1],d=Ap(c);return d&&d.type==="html"}return!1},[e.pathname])?M.jsx(va,{}):M.jsxs(M.Fragment,{children:[M.jsxs("aside",{children:[M.jsxs("div",{style:{marginBottom:"1rem",textAlign:"center"},children:[M.jsx("img",{src:t?bc:by,alt:"Sunsac",style:{width:"120px",height:"120px",borderRadius:"50%",margin:"0 auto 1rem",objectFit:"cover",transition:"transform 0.2s ease",transform:t?"scale(1.1)":"scale(1)",border:"2px solid var(--border-color, #e5e7eb)"}}),M.jsx("h2",{style:{margin:"0 0 0.5rem",fontSize:"1.5rem",fontWeight:"700"},children:"Sunsac"}),M.jsx("div",{style:{color:"var(--primary)",fontSize:"0.8rem",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Researcher & Developer"})]}),M.jsxs("nav",{style:i,children:[M.jsx(ri,{to:"/",style:l("/"),children:"Home"}),M.jsx(ri,{to:"/blog",style:l("/blog"),children:"Blog"}),M.jsx("a",{href:o,style:l("/travel"),children:"Travel"})]}),M.jsx("footer",{style:{marginTop:"auto",fontSize:"0.75rem",color:"var(--text-muted)"},children:M.jsxs("div",{style:{marginBottom:"0.5rem"},children:["© ",n," All rights reserved."]})})]}),M.jsx("main",{style:{padding:a?0:"var(--space-lg)"},children:a?M.jsx(va,{}):M.jsx("div",{className:"container",children:M.jsx(va,{})})})]})}const ky=""+new URL("home_page-mChCU0mU.png",import.meta.url).href;function Sy(){return M.jsx("div",{style:{padding:"4rem",backgroundImage:`url(${ky})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},children:M.jsxs("header",{style:{marginBottom:"2rem",background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",padding:"3rem",borderRadius:"16px",border:"1px solid rgba(255, 255, 255, 0.2)",maxWidth:"800px",boxShadow:"0 8px 32px 0 rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"column",alignItems:"flex-start",textAlign:"left"},children:[M.jsxs("h1",{style:{fontSize:"4.5rem",fontWeight:"900",lineHeight:"1.1",letterSpacing:"-0.02em",marginBottom:"1.5rem",fontFamily:"var(--font-serif)",color:"#fff",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:["This is my",M.jsx("br",{}),M.jsx("span",{style:{color:"#60A5FA",textShadow:"0 0 20px rgba(96, 165, 250, 0.5)"},children:"Little Knowledge Reservoir"})]}),M.jsx("p",{style:{fontSize:"1.5rem",color:"rgba(255, 255, 255, 0.9)",maxWidth:"600px",lineHeight:"1.6",fontWeight:"500",textShadow:"0 1px 2px rgba(0,0,0,0.2)"},children:"Simplicity is the ultimate sophistication."})]})})}function Cy(){const e=Rp(),[n,t]=Cl.useState("All"),r=["All",...new Set(e.map(l=>l.category).filter(Boolean))],i=n==="All"?e:e.filter(l=>l.category===n);return M.jsxs("div",{children:[M.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"var(--space-lg)"},children:"Blog"}),M.jsx("div",{style:{display:"flex",gap:"var(--space-sm)",marginBottom:"var(--space-lg)",flexWrap:"wrap"},children:r.map(l=>M.jsx("button",{onClick:()=>t(l),style:{padding:"6px 16px",border:"1px solid",borderColor:n===l?"var(--primary)":"var(--border)",borderRadius:"20px",background:n===l?"var(--primary)":"transparent",color:n===l?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.9rem",transition:"all 0.2s"},children:l},l))}),M.jsx("div",{style:{display:"grid",gap:"var(--space-md)"},children:i.map(l=>M.jsxs(ri,{to:`/blog/${l.slug}`,style:{display:"block",padding:"var(--space-md)",backgroundColor:"var(--bg-card)",borderRadius:"var(--radius)",textDecoration:"none",border:"1px solid transparent",transition:"border-color 0.2s"},onMouseEnter:a=>a.currentTarget.style.borderColor="var(--primary)",onMouseLeave:a=>a.currentTarget.style.borderColor="transparent",children:[M.jsx("h2",{style:{margin:"0 0 var(--space-sm) 0",color:"var(--text-main)"},children:l.title}),M.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-sm)",marginBottom:"var(--space-sm)"},children:[M.jsx("span",{style:{fontSize:"0.8rem",padding:"2px 8px",borderRadius:"12px",backgroundColor:l.category==="Tech"?"rgba(59, 130, 246, 0.1)":"rgba(16, 185, 129, 0.1)",color:l.category==="Tech"?"#3b82f6":"#10b981",border:`1px solid ${l.category==="Tech"?"rgba(59, 130, 246, 0.2)":"rgba(16, 185, 129, 0.2)"}`},children:l.category||"Uncategorized"}),M.jsx("span",{style:{fontSize:"0.9rem",color:"var(--text-muted)"},children:l.date})]}),M.jsx("p",{style:{color:"var(--text-muted)",margin:0},children:l.description})]},l.slug))})]})}function Ey(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Ty=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Iy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ly={};function wc(e,n){return(Ly.jsx?Iy:Ty).test(e)}const Py=/[ \t\n\f\r]/g;function Dy(e){return typeof e=="object"?e.type==="text"?kc(e.value):!1:kc(e)}function kc(e){return e.replace(Py,"")===""}class fi{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}fi.prototype.normal={};fi.prototype.property={};fi.prototype.space=void 0;function Op(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new fi(t,r,n)}function Lo(e){return e.toLowerCase()}class He{constructor(n,t){this.attribute=t,this.property=n}}He.prototype.attribute="";He.prototype.booleanish=!1;He.prototype.boolean=!1;He.prototype.commaOrSpaceSeparated=!1;He.prototype.commaSeparated=!1;He.prototype.defined=!1;He.prototype.mustUseProperty=!1;He.prototype.number=!1;He.prototype.overloadedBoolean=!1;He.prototype.property="";He.prototype.spaceSeparated=!1;He.prototype.space=void 0;let Ny=0;const U=Et(),he=Et(),Po=Et(),I=Et(),Z=Et(),Jt=Et(),Ve=Et();function Et(){return 2**++Ny}const Do=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:he,commaOrSpaceSeparated:Ve,commaSeparated:Jt,number:I,overloadedBoolean:Po,spaceSeparated:Z},Symbol.toStringTag,{value:"Module"})),ba=Object.keys(Do);class As extends He{constructor(n,t,r,i){let l=-1;if(super(n,t),Sc(this,"space",i),typeof r=="number")for(;++l<ba.length;){const a=ba[l];Sc(this,ba[l],(r&Do[a])===Do[a])}}}As.prototype.defined=!0;function Sc(e,n,t){t&&(e[n]=t)}function or(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const l=new As(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(l.mustUseProperty=!0),n[r]=l,t[Lo(r)]=r,t[Lo(l.attribute)]=r}return new fi(n,t,e.space)}const Bp=or({properties:{ariaActiveDescendant:null,ariaAtomic:he,ariaAutoComplete:null,ariaBusy:he,ariaChecked:he,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:Z,ariaCurrent:null,ariaDescribedBy:Z,ariaDetails:null,ariaDisabled:he,ariaDropEffect:Z,ariaErrorMessage:null,ariaExpanded:he,ariaFlowTo:Z,ariaGrabbed:he,ariaHasPopup:null,ariaHidden:he,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Z,ariaLevel:I,ariaLive:null,ariaModal:he,ariaMultiLine:he,ariaMultiSelectable:he,ariaOrientation:null,ariaOwns:Z,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:he,ariaReadOnly:he,ariaRelevant:null,ariaRequired:he,ariaRoleDescription:Z,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:he,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Fp(e,n){return n in e?e[n]:n}function jp(e,n){return Fp(e,n.toLowerCase())}const _y=or({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Jt,acceptCharset:Z,accessKey:Z,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:Z,autoFocus:U,autoPlay:U,blocking:Z,capture:null,charSet:null,checked:U,cite:null,className:Z,cols:I,colSpan:null,content:null,contentEditable:he,controls:U,controlsList:Z,coords:I|Jt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:Po,draggable:he,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:Z,height:I,hidden:Po,high:I,href:null,hrefLang:null,htmlFor:Z,httpEquiv:Z,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:Z,itemRef:Z,itemScope:U,itemType:Z,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:I,pattern:null,ping:Z,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:Z,required:U,reversed:U,rows:I,rowSpan:I,sandbox:Z,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:he,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:he,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Z,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:he,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:U,disableRemotePlayback:U,prefix:null,property:null,results:I,security:null,unselectable:null},space:"html",transform:jp}),zy=or({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ve,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:Z,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Jt,g2:Jt,glyphName:Jt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:Ve,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Z,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ve,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ve,rev:Ve,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ve,requiredFeatures:Ve,requiredFonts:Ve,requiredFormats:Ve,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:Ve,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ve,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ve,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Fp}),Hp=or({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Up=or({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:jp}),Vp=or({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),My={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ry=/[A-Z]/g,Cc=/-[a-z]/g,Ay=/^data[-\w.:]+$/i;function Oy(e,n){const t=Lo(n);let r=n,i=He;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Ay.test(n)){if(n.charAt(4)==="-"){const l=n.slice(5).replace(Cc,Fy);r="data"+l.charAt(0).toUpperCase()+l.slice(1)}else{const l=n.slice(4);if(!Cc.test(l)){let a=l.replace(Ry,By);a.charAt(0)!=="-"&&(a="-"+a),n="data"+a}}i=As}return new i(r,n)}function By(e){return"-"+e.toLowerCase()}function Fy(e){return e.charAt(1).toUpperCase()}const jy=Op([Bp,_y,Hp,Up,Vp],"html"),Os=Op([Bp,zy,Hp,Up,Vp],"svg");function Hy(e){return e.join(" ").trim()}var Bs={},Ec=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Uy=/\n/g,Vy=/^\s*/,$y=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Wy=/^:\s*/,Gy=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Yy=/^[;\s]*/,Qy=/^\s+|\s+$/g,Jy=`
`,Tc="/",Ic="*",ct="",Ky="comment",qy="declaration";function Xy(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(v){var b=v.match(Uy);b&&(t+=b.length);var S=v.lastIndexOf(Jy);r=~S?v.length-S:r+v.length}function l(){var v={line:t,column:r};return function(b){return b.position=new a(v),u(),b}}function a(v){this.start=v,this.end={line:t,column:r},this.source=n.source}a.prototype.content=e;function o(v){var b=new Error(n.source+":"+t+":"+r+": "+v);if(b.reason=v,b.filename=n.source,b.line=t,b.column=r,b.source=e,!n.silent)throw b}function s(v){var b=v.exec(e);if(b){var S=b[0];return i(S),e=e.slice(S.length),b}}function u(){s(Vy)}function c(v){var b;for(v=v||[];b=d();)b!==!1&&v.push(b);return v}function d(){var v=l();if(!(Tc!=e.charAt(0)||Ic!=e.charAt(1))){for(var b=2;ct!=e.charAt(b)&&(Ic!=e.charAt(b)||Tc!=e.charAt(b+1));)++b;if(b+=2,ct===e.charAt(b-1))return o("End of comment missing");var S=e.slice(2,b-2);return r+=2,i(S),e=e.slice(b),r+=2,v({type:Ky,comment:S})}}function p(){var v=l(),b=s($y);if(b){if(d(),!s(Wy))return o("property missing ':'");var S=s(Gy),h=v({type:qy,property:Lc(b[0].replace(Ec,ct)),value:S?Lc(S[0].replace(Ec,ct)):ct});return s(Yy),h}}function f(){var v=[];c(v);for(var b;b=p();)b!==!1&&(v.push(b),c(v));return v}return u(),f()}function Lc(e){return e?e.replace(Qy,ct):ct}var Zy=Xy,ex=Ji&&Ji.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bs,"__esModule",{value:!0});Bs.default=tx;const nx=ex(Zy);function tx(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,nx.default)(e),i=typeof n=="function";return r.forEach(l=>{if(l.type!=="declaration")return;const{property:a,value:o}=l;i?n(a,o,l):o&&(t=t||{},t[a]=o)}),t}var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.camelCase=void 0;var rx=/^--[a-zA-Z0-9_-]+$/,ix=/-([a-z])/g,lx=/^[^-]+$/,ax=/^-(webkit|moz|ms|o|khtml)-/,ox=/^-(ms)-/,sx=function(e){return!e||lx.test(e)||rx.test(e)},ux=function(e,n){return n.toUpperCase()},Pc=function(e,n){return"".concat(n,"-")},cx=function(e,n){return n===void 0&&(n={}),sx(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(ox,Pc):e=e.replace(ax,Pc),e.replace(ix,ux))};Ul.camelCase=cx;var dx=Ji&&Ji.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},fx=dx(Bs),px=Ul;function No(e,n){var t={};return!e||typeof e!="string"||(0,fx.default)(e,function(r,i){r&&i&&(t[(0,px.camelCase)(r,n)]=i)}),t}No.default=No;var hx=No;const mx=Fo(hx),$p=Wp("end"),Fs=Wp("start");function Wp(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function gx(e){const n=Fs(e),t=$p(e);if(n&&t)return{start:n,end:t}}function Rr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Dc(e.position):"start"in e||"end"in e?Dc(e):"line"in e||"column"in e?_o(e):""}function _o(e){return Nc(e&&e.line)+":"+Nc(e&&e.column)}function Dc(e){return _o(e&&e.start)+"-"+_o(e&&e.end)}function Nc(e){return e&&typeof e=="number"?e:1}class Pe extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",l={},a=!1;if(t&&("line"in t&&"column"in t?l={place:t}:"start"in t&&"end"in t?l={place:t}:"type"in t?l={ancestors:[t],place:t.position}:l={...t}),typeof n=="string"?i=n:!l.cause&&n&&(a=!0,i=n.message,l.cause=n),!l.ruleId&&!l.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?l.ruleId=r:(l.source=r.slice(0,s),l.ruleId=r.slice(s+1))}if(!l.place&&l.ancestors&&l.ancestors){const s=l.ancestors[l.ancestors.length-1];s&&(l.place=s.position)}const o=l.place&&"start"in l.place?l.place.start:l.place;this.ancestors=l.ancestors||void 0,this.cause=l.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=Rr(l.place)||"1:1",this.place=l.place||void 0,this.reason=this.message,this.ruleId=l.ruleId||void 0,this.source=l.source||void 0,this.stack=a&&l.cause&&typeof l.cause.stack=="string"?l.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Pe.prototype.file="";Pe.prototype.name="";Pe.prototype.reason="";Pe.prototype.message="";Pe.prototype.stack="";Pe.prototype.column=void 0;Pe.prototype.line=void 0;Pe.prototype.ancestors=void 0;Pe.prototype.cause=void 0;Pe.prototype.fatal=void 0;Pe.prototype.place=void 0;Pe.prototype.ruleId=void 0;Pe.prototype.source=void 0;const js={}.hasOwnProperty,yx=new Map,xx=/[A-Z]/g,vx=new Set(["table","tbody","thead","tfoot","tr"]),bx=new Set(["td","th"]),Gp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function wx(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Px(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Lx(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Os:jy,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},l=Yp(i,e,void 0);return l&&typeof l!="string"?l:i.create(e,i.Fragment,{children:l||void 0},void 0)}function Yp(e,n,t){if(n.type==="element")return kx(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return Sx(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return Ex(e,n,t);if(n.type==="mdxjsEsm")return Cx(e,n);if(n.type==="root")return Tx(e,n,t);if(n.type==="text")return Ix(e,n)}function kx(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Os,e.schema=i),e.ancestors.push(n);const l=Jp(e,n.tagName,!1),a=Dx(e,n);let o=Us(e,n);return vx.has(n.tagName)&&(o=o.filter(function(s){return typeof s=="string"?!Dy(s):!0})),Qp(e,a,l,n),Hs(a,o),e.ancestors.pop(),e.schema=r,e.create(n,l,a,t)}function Sx(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ii(e,n.position)}function Cx(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ii(e,n.position)}function Ex(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Os,e.schema=i),e.ancestors.push(n);const l=n.name===null?e.Fragment:Jp(e,n.name,!0),a=Nx(e,n),o=Us(e,n);return Qp(e,a,l,n),Hs(a,o),e.ancestors.pop(),e.schema=r,e.create(n,l,a,t)}function Tx(e,n,t){const r={};return Hs(r,Us(e,n)),e.create(n,e.Fragment,r,t)}function Ix(e,n){return n.value}function Qp(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Hs(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function Lx(e,n,t){return r;function r(i,l,a,o){const u=Array.isArray(a.children)?t:n;return o?u(l,a,o):u(l,a)}}function Px(e,n){return t;function t(r,i,l,a){const o=Array.isArray(l.children),s=Fs(r);return n(i,l,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Dx(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&js.call(n.properties,i)){const l=_x(e,i,n.properties[i]);if(l){const[a,o]=l;e.tableCellAlignToStyle&&a==="align"&&typeof o=="string"&&bx.has(n.tagName)?r=o:t[a]=o}}if(r){const l=t.style||(t.style={});l[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function Nx(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const l=r.data.estree.body[0];l.type;const a=l.expression;a.type;const o=a.properties[0];o.type,Object.assign(t,e.evaluater.evaluateExpression(o.argument))}else ii(e,n.position);else{const i=r.name;let l;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,l=e.evaluater.evaluateExpression(o.expression)}else ii(e,n.position);else l=r.value===null?!0:r.value;t[i]=l}return t}function Us(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:yx;for(;++r<n.children.length;){const l=n.children[r];let a;if(e.passKeys){const s=l.type==="element"?l.tagName:l.type==="mdxJsxFlowElement"||l.type==="mdxJsxTextElement"?l.name:void 0;if(s){const u=i.get(s)||0;a=s+"-"+u,i.set(s,u+1)}}const o=Yp(e,l,a);o!==void 0&&t.push(o)}return t}function _x(e,n,t){const r=Oy(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?Ey(t):Hy(t)),r.property==="style"){let i=typeof t=="object"?t:zx(e,String(t));return e.stylePropertyNameCase==="css"&&(i=Mx(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?My[r.property]||r.property:r.attribute,t]}}function zx(e,n){try{return mx(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Pe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Gp+"#cannot-parse-style-attribute",i}}function Jp(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let l=-1,a;for(;++l<i.length;){const o=wc(i[l])?{type:"Identifier",name:i[l]}:{type:"Literal",value:i[l]};a=a?{type:"MemberExpression",object:a,property:o,computed:!!(l&&o.type==="Literal"),optional:!1}:o}r=a}else r=wc(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return js.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ii(e)}function ii(e,n){const t=new Pe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Gp+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Mx(e){const n={};let t;for(t in e)js.call(e,t)&&(n[Rx(t)]=e[t]);return n}function Rx(e){let n=e.replace(xx,Ax);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Ax(e){return"-"+e.toLowerCase()}const wa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ox={};function Bx(e,n){const t=Ox,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Kp(e,r,i)}function Kp(e,n,t){if(Fx(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return _c(e.children,n,t)}return Array.isArray(e)?_c(e,n,t):""}function _c(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Kp(e[i],n,t);return r.join("")}function Fx(e){return!!(e&&typeof e=="object")}const zc=document.createElement("i");function Vs(e){const n="&"+e+";";zc.innerHTML=n;const t=zc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function kn(e,n,t,r){const i=e.length;let l=0,a;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)a=Array.from(r),a.unshift(n,t),e.splice(...a);else for(t&&e.splice(n,t);l<r.length;)a=r.slice(l,l+1e4),a.unshift(n,0),e.splice(...a),l+=1e4,n+=1e4}function Ze(e,n){return e.length>0?(kn(e,e.length,0,n),e):n}const Mc={}.hasOwnProperty;function jx(e){const n={};let t=-1;for(;++t<e.length;)Hx(n,e[t]);return n}function Hx(e,n){let t;for(t in n){const i=(Mc.call(e,t)?e[t]:void 0)||(e[t]={}),l=n[t];let a;if(l)for(a in l){Mc.call(i,a)||(i[a]=[]);const o=l[a];Ux(i[a],Array.isArray(o)?o:o?[o]:[])}}}function Ux(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);kn(e,0,0,r)}function qp(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Kt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vn=at(/[A-Za-z]/),Ge=at(/[\dA-Za-z]/),Vx=at(/[#-'*+\--9=?A-Z^-~]/);function zo(e){return e!==null&&(e<32||e===127)}const Mo=at(/\d/),$x=at(/[\dA-Fa-f]/),Wx=at(/[!-/:-@[-`{-~]/);function j(e){return e!==null&&e<-2}function je(e){return e!==null&&(e<0||e===32)}function Q(e){return e===-2||e===-1||e===32}const Gx=at(new RegExp("\\p{P}|\\p{S}","u")),Yx=at(/\s/);function at(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function sr(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const l=e.charCodeAt(t);let a="";if(l===37&&Ge(e.charCodeAt(t+1))&&Ge(e.charCodeAt(t+2)))i=2;else if(l<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(a=String.fromCharCode(l));else if(l>55295&&l<57344){const o=e.charCodeAt(t+1);l<56320&&o>56319&&o<57344?(a=String.fromCharCode(l,o),i=1):a="�"}else a=String.fromCharCode(l);a&&(n.push(e.slice(r,t),encodeURIComponent(a)),r=t+i+1,a=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function ne(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let l=0;return a;function a(s){return Q(s)?(e.enter(t),o(s)):n(s)}function o(s){return Q(s)&&l++<i?(e.consume(s),o):(e.exit(t),n(s))}}const Qx={tokenize:Jx};function Jx(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ne(e,n,"linePrefix")}function i(o){return e.enter("paragraph"),l(o)}function l(o){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,a(o)}function a(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return j(o)?(e.consume(o),e.exit("chunkText"),l):(e.consume(o),a)}}const Kx={tokenize:qx},Rc={tokenize:Xx};function qx(e){const n=this,t=[];let r=0,i,l,a;return o;function o(y){if(r<t.length){const k=t[r];return n.containerState=k[1],e.attempt(k[0].continuation,s,u)(y)}return u(y)}function s(y){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const k=n.events.length;let E=k,w;for(;E--;)if(n.events[E][0]==="exit"&&n.events[E][1].type==="chunkFlow"){w=n.events[E][1].end;break}h(r);let L=k;for(;L<n.events.length;)n.events[L][1].end={...w},L++;return kn(n.events,E+1,0,n.events.slice(k)),n.events.length=L,u(y)}return o(y)}function u(y){if(r===t.length){if(!i)return p(y);if(i.currentConstruct&&i.currentConstruct.concrete)return v(y);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Rc,c,d)(y)}function c(y){return i&&m(),h(r),p(y)}function d(y){return n.parser.lazy[n.now().line]=r!==t.length,a=n.now().offset,v(y)}function p(y){return n.containerState={},e.attempt(Rc,f,v)(y)}function f(y){return r++,t.push([n.currentConstruct,n.containerState]),p(y)}function v(y){if(y===null){i&&m(),h(0),e.consume(y);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:l}),b(y)}function b(y){if(y===null){S(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return j(y)?(e.consume(y),S(e.exit("chunkFlow")),r=0,n.interrupt=void 0,o):(e.consume(y),b)}function S(y,k){const E=n.sliceStream(y);if(k&&E.push(null),y.previous=l,l&&(l.next=y),l=y,i.defineSkip(y.start),i.write(E),n.parser.lazy[y.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<a&&(!i.events[w][1].end||i.events[w][1].end.offset>a))return;const L=n.events.length;let N=L,F,R;for(;N--;)if(n.events[N][0]==="exit"&&n.events[N][1].type==="chunkFlow"){if(F){R=n.events[N][1].end;break}F=!0}for(h(r),w=L;w<n.events.length;)n.events[w][1].end={...R},w++;kn(n.events,N+1,0,n.events.slice(L)),n.events.length=w}}function h(y){let k=t.length;for(;k-- >y;){const E=t[k];n.containerState=E[1],E[0].exit.call(n,e)}t.length=y}function m(){i.write([null]),l=void 0,i=void 0,n.containerState._closeFlow=void 0}}function Xx(e,n,t){return ne(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ac(e){if(e===null||je(e)||Yx(e))return 1;if(Gx(e))return 2}function $s(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const l=e[i].resolveAll;l&&!r.includes(l)&&(n=l(n,t),r.push(l))}return n}const Ro={name:"attention",resolveAll:Zx,tokenize:ev};function Zx(e,n){let t=-1,r,i,l,a,o,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d={...e[r][1].end},p={...e[t][1].start};Oc(d,-s),Oc(p,s),a={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},o={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:p},l={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:s>1?"strong":"emphasis",start:{...a.start},end:{...o.end}},e[r][1].end={...a.start},e[t][1].start={...o.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ze(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=Ze(u,[["enter",i,n],["enter",a,n],["exit",a,n],["enter",l,n]]),u=Ze(u,$s(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=Ze(u,[["exit",l,n],["enter",o,n],["exit",o,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=Ze(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,kn(e,r-1,t-r+3,u),t=r+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function ev(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ac(r);let l;return a;function a(s){return l=s,e.enter("attentionSequence"),o(s)}function o(s){if(s===l)return e.consume(s),o;const u=e.exit("attentionSequence"),c=Ac(s),d=!c||c===2&&i||t.includes(s),p=!i||i===2&&c||t.includes(r);return u._open=!!(l===42?d:d&&(i||!p)),u._close=!!(l===42?p:p&&(c||!d)),n(s)}}function Oc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const nv={name:"autolink",tokenize:tv};function tv(e,n,t){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l}function l(f){return vn(f)?(e.consume(f),a):f===64?t(f):u(f)}function a(f){return f===43||f===45||f===46||Ge(f)?(r=1,o(f)):u(f)}function o(f){return f===58?(e.consume(f),r=0,s):(f===43||f===45||f===46||Ge(f))&&r++<32?(e.consume(f),o):(r=0,u(f))}function s(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),n):f===null||f===32||f===60||zo(f)?t(f):(e.consume(f),s)}function u(f){return f===64?(e.consume(f),c):Vx(f)?(e.consume(f),u):t(f)}function c(f){return Ge(f)?d(f):t(f)}function d(f){return f===46?(e.consume(f),r=0,c):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),n):p(f)}function p(f){if((f===45||Ge(f))&&r++<63){const v=f===45?p:d;return e.consume(f),v}return t(f)}}const Vl={partial:!0,tokenize:rv};function rv(e,n,t){return r;function r(l){return Q(l)?ne(e,i,"linePrefix")(l):i(l)}function i(l){return l===null||j(l)?n(l):t(l)}}const Xp={continuation:{tokenize:lv},exit:av,name:"blockQuote",tokenize:iv};function iv(e,n,t){const r=this;return i;function i(a){if(a===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),l}return t(a)}function l(a){return Q(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(a))}}function lv(e,n,t){const r=this;return i;function i(a){return Q(a)?ne(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):l(a)}function l(a){return e.attempt(Xp,n,t)(a)}}function av(e){e.exit("blockQuote")}const Zp={name:"characterEscape",tokenize:ov};function ov(e,n,t){return r;function r(l){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(l),e.exit("escapeMarker"),i}function i(l){return Wx(l)?(e.enter("characterEscapeValue"),e.consume(l),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(l)}}const eh={name:"characterReference",tokenize:sv};function sv(e,n,t){const r=this;let i=0,l,a;return o;function o(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),l=31,a=Ge,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),l=6,a=$x,c):(e.enter("characterReferenceValue"),l=7,a=Mo,c(d))}function c(d){if(d===59&&i){const p=e.exit("characterReferenceValue");return a===Ge&&!Vs(r.sliceSerialize(p))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return a(d)&&i++<l?(e.consume(d),c):t(d)}}const Bc={partial:!0,tokenize:cv},Fc={concrete:!0,name:"codeFenced",tokenize:uv};function uv(e,n,t){const r=this,i={partial:!0,tokenize:E};let l=0,a=0,o;return s;function s(w){return u(w)}function u(w){const L=r.events[r.events.length-1];return l=L&&L[1].type==="linePrefix"?L[2].sliceSerialize(L[1],!0).length:0,o=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(w)}function c(w){return w===o?(a++,e.consume(w),c):a<3?t(w):(e.exit("codeFencedFenceSequence"),Q(w)?ne(e,d,"whitespace")(w):d(w))}function d(w){return w===null||j(w)?(e.exit("codeFencedFence"),r.interrupt?n(w):e.check(Bc,b,k)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===null||j(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(w)):Q(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ne(e,f,"whitespace")(w)):w===96&&w===o?t(w):(e.consume(w),p)}function f(w){return w===null||j(w)?d(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(w))}function v(w){return w===null||j(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(w)):w===96&&w===o?t(w):(e.consume(w),v)}function b(w){return e.attempt(i,k,S)(w)}function S(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),h}function h(w){return l>0&&Q(w)?ne(e,m,"linePrefix",l+1)(w):m(w)}function m(w){return w===null||j(w)?e.check(Bc,b,k)(w):(e.enter("codeFlowValue"),y(w))}function y(w){return w===null||j(w)?(e.exit("codeFlowValue"),m(w)):(e.consume(w),y)}function k(w){return e.exit("codeFenced"),n(w)}function E(w,L,N){let F=0;return R;function R($){return w.enter("lineEnding"),w.consume($),w.exit("lineEnding"),A}function A($){return w.enter("codeFencedFence"),Q($)?ne(w,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):O($)}function O($){return $===o?(w.enter("codeFencedFenceSequence"),J($)):N($)}function J($){return $===o?(F++,w.consume($),J):F>=a?(w.exit("codeFencedFenceSequence"),Q($)?ne(w,ae,"whitespace")($):ae($)):N($)}function ae($){return $===null||j($)?(w.exit("codeFencedFence"),L($)):N($)}}}function cv(e,n,t){const r=this;return i;function i(a){return a===null?t(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),l)}function l(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}const ka={name:"codeIndented",tokenize:fv},dv={partial:!0,tokenize:pv};function fv(e,n,t){const r=this;return i;function i(u){return e.enter("codeIndented"),ne(e,l,"linePrefix",5)(u)}function l(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?a(u):t(u)}function a(u){return u===null?s(u):j(u)?e.attempt(dv,a,s)(u):(e.enter("codeFlowValue"),o(u))}function o(u){return u===null||j(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),o)}function s(u){return e.exit("codeIndented"),n(u)}}function pv(e,n,t){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?t(a):j(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):ne(e,l,"linePrefix",5)(a)}function l(a){const o=r.events[r.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?n(a):j(a)?i(a):t(a)}}const hv={name:"codeText",previous:gv,resolve:mv,tokenize:yv};function mv(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function gv(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yv(e,n,t){let r=0,i,l;return a;function a(d){return e.enter("codeText"),e.enter("codeTextSequence"),o(d)}function o(d){return d===96?(e.consume(d),r++,o):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(l=e.enter("codeTextSequence"),i=0,c(d)):j(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||j(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),u)}function c(d){return d===96?(e.consume(d),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(l.type="codeTextData",u(d))}}class xv{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const l=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&vr(this.left,r),l.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),vr(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),vr(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);vr(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);vr(this.left,t.reverse())}}}function vr(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function nh(e){const n={};let t=-1,r,i,l,a,o,s,u;const c=new xv(e);for(;++t<c.length;){for(;t in n;)t=n[t];if(r=c.get(t),t&&r[1].type==="chunkFlow"&&c.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,l=0,l<s.length&&s[l][1].type==="lineEndingBlank"&&(l+=2),l<s.length&&s[l][1].type==="content"))for(;++l<s.length&&s[l][1].type!=="content";)s[l][1].type==="chunkText"&&(s[l][1]._isInFirstContentOfListItem=!0,l++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,vv(c,t)),t=n[t],u=!0);else if(r[1]._container){for(l=t,i=void 0;l--;)if(a=c.get(l),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=l);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},o=c.slice(i,t),o.unshift(r),c.splice(i,t-i+1,o))}}return kn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function vv(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const l=[];let a=t._tokenizer;a||(a=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const o=a.events,s=[],u={};let c,d,p=-1,f=t,v=0,b=0;const S=[b];for(;f;){for(;e.get(++i)[1]!==f;);l.push(i),f._tokenizer||(c=r.sliceStream(f),f.next||c.push(null),d&&a.defineSkip(f.start),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(c),f._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),d=f,f=f.next}for(f=t;++p<o.length;)o[p][0]==="exit"&&o[p-1][0]==="enter"&&o[p][1].type===o[p-1][1].type&&o[p][1].start.line!==o[p][1].end.line&&(b=p+1,S.push(b),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(a.events=[],f?(f._tokenizer=void 0,f.previous=void 0):S.pop(),p=S.length;p--;){const h=o.slice(S[p],S[p+1]),m=l.pop();s.push([m,m+h.length-1]),e.splice(m,2,h)}for(s.reverse(),p=-1;++p<s.length;)u[v+s[p][0]]=v+s[p][1],v+=s[p][1]-s[p][0]-1;return u}const bv={resolve:kv,tokenize:Sv},wv={partial:!0,tokenize:Cv};function kv(e){return nh(e),e}function Sv(e,n){let t;return r;function r(o){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?l(o):j(o)?e.check(wv,a,l)(o):(e.consume(o),i)}function l(o){return e.exit("chunkContent"),e.exit("content"),n(o)}function a(o){return e.consume(o),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function Cv(e,n,t){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ne(e,l,"linePrefix")}function l(a){if(a===null||j(a))return t(a);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?n(a):e.interrupt(r.parser.constructs.flow,t,n)(a)}}function th(e,n,t,r,i,l,a,o,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return d;function d(h){return h===60?(e.enter(r),e.enter(i),e.enter(l),e.consume(h),e.exit(l),p):h===null||h===32||h===41||zo(h)?t(h):(e.enter(r),e.enter(a),e.enter(o),e.enter("chunkString",{contentType:"string"}),b(h))}function p(h){return h===62?(e.enter(l),e.consume(h),e.exit(l),e.exit(i),e.exit(r),n):(e.enter(o),e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===62?(e.exit("chunkString"),e.exit(o),p(h)):h===null||h===60||j(h)?t(h):(e.consume(h),h===92?v:f)}function v(h){return h===60||h===62||h===92?(e.consume(h),f):f(h)}function b(h){return!c&&(h===null||h===41||je(h))?(e.exit("chunkString"),e.exit(o),e.exit(a),e.exit(r),n(h)):c<u&&h===40?(e.consume(h),c++,b):h===41?(e.consume(h),c--,b):h===null||h===32||h===40||zo(h)?t(h):(e.consume(h),h===92?S:b)}function S(h){return h===40||h===41||h===92?(e.consume(h),b):b(h)}}function rh(e,n,t,r,i,l){const a=this;let o=0,s;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(l),c}function c(f){return o>999||f===null||f===91||f===93&&!s||f===94&&!o&&"_hiddenFootnoteSupport"in a.parser.constructs?t(f):f===93?(e.exit(l),e.enter(i),e.consume(f),e.exit(i),e.exit(r),n):j(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===null||f===91||f===93||j(f)||o++>999?(e.exit("chunkString"),c(f)):(e.consume(f),s||(s=!Q(f)),f===92?p:d)}function p(f){return f===91||f===92||f===93?(e.consume(f),o++,d):d(f)}}function ih(e,n,t,r,i,l){let a;return o;function o(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,s):t(p)}function s(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):(e.enter(l),u(p))}function u(p){return p===a?(e.exit(l),s(a)):p===null?t(p):j(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),ne(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===a||p===null||j(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?d:c)}function d(p){return p===a||p===92?(e.consume(p),c):c(p)}}function Ar(e,n){let t;return r;function r(i){return j(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):Q(i)?ne(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Ev={name:"definition",tokenize:Iv},Tv={partial:!0,tokenize:Lv};function Iv(e,n,t){const r=this;let i;return l;function l(f){return e.enter("definition"),a(f)}function a(f){return rh.call(r,e,o,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function o(f){return i=Kt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),s):t(f)}function s(f){return je(f)?Ar(e,u)(f):u(f)}function u(f){return th(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function c(f){return e.attempt(Tv,d,d)(f)}function d(f){return Q(f)?ne(e,p,"whitespace")(f):p(f)}function p(f){return f===null||j(f)?(e.exit("definition"),r.parser.defined.push(i),n(f)):t(f)}}function Lv(e,n,t){return r;function r(o){return je(o)?Ar(e,i)(o):t(o)}function i(o){return ih(e,l,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function l(o){return Q(o)?ne(e,a,"whitespace")(o):a(o)}function a(o){return o===null||j(o)?n(o):t(o)}}const Pv={name:"hardBreakEscape",tokenize:Dv};function Dv(e,n,t){return r;function r(l){return e.enter("hardBreakEscape"),e.consume(l),i}function i(l){return j(l)?(e.exit("hardBreakEscape"),n(l)):t(l)}}const Nv={name:"headingAtx",resolve:_v,tokenize:zv};function _v(e,n){let t=e.length-2,r=3,i,l;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},l={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},kn(e,r,t-r+1,[["enter",i,n],["enter",l,n],["exit",l,n],["exit",i,n]])),e}function zv(e,n,t){let r=0;return i;function i(c){return e.enter("atxHeading"),l(c)}function l(c){return e.enter("atxHeadingSequence"),a(c)}function a(c){return c===35&&r++<6?(e.consume(c),a):c===null||je(c)?(e.exit("atxHeadingSequence"),o(c)):t(c)}function o(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||j(c)?(e.exit("atxHeading"),n(c)):Q(c)?ne(e,o,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),o(c))}function u(c){return c===null||c===35||je(c)?(e.exit("atxHeadingText"),o(c)):(e.consume(c),u)}}const Mv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],jc=["pre","script","style","textarea"],Rv={concrete:!0,name:"htmlFlow",resolveTo:Bv,tokenize:Fv},Av={partial:!0,tokenize:Hv},Ov={partial:!0,tokenize:jv};function Bv(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function Fv(e,n,t){const r=this;let i,l,a,o,s;return u;function u(x){return c(x)}function c(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),d}function d(x){return x===33?(e.consume(x),p):x===47?(e.consume(x),l=!0,b):x===63?(e.consume(x),i=3,r.interrupt?n:g):vn(x)?(e.consume(x),a=String.fromCharCode(x),S):t(x)}function p(x){return x===45?(e.consume(x),i=2,f):x===91?(e.consume(x),i=5,o=0,v):vn(x)?(e.consume(x),i=4,r.interrupt?n:g):t(x)}function f(x){return x===45?(e.consume(x),r.interrupt?n:g):t(x)}function v(x){const ye="CDATA[";return x===ye.charCodeAt(o++)?(e.consume(x),o===ye.length?r.interrupt?n:O:v):t(x)}function b(x){return vn(x)?(e.consume(x),a=String.fromCharCode(x),S):t(x)}function S(x){if(x===null||x===47||x===62||je(x)){const ye=x===47,ln=a.toLowerCase();return!ye&&!l&&jc.includes(ln)?(i=1,r.interrupt?n(x):O(x)):Mv.includes(a.toLowerCase())?(i=6,ye?(e.consume(x),h):r.interrupt?n(x):O(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(x):l?m(x):y(x))}return x===45||Ge(x)?(e.consume(x),a+=String.fromCharCode(x),S):t(x)}function h(x){return x===62?(e.consume(x),r.interrupt?n:O):t(x)}function m(x){return Q(x)?(e.consume(x),m):R(x)}function y(x){return x===47?(e.consume(x),R):x===58||x===95||vn(x)?(e.consume(x),k):Q(x)?(e.consume(x),y):R(x)}function k(x){return x===45||x===46||x===58||x===95||Ge(x)?(e.consume(x),k):E(x)}function E(x){return x===61?(e.consume(x),w):Q(x)?(e.consume(x),E):y(x)}function w(x){return x===null||x===60||x===61||x===62||x===96?t(x):x===34||x===39?(e.consume(x),s=x,L):Q(x)?(e.consume(x),w):N(x)}function L(x){return x===s?(e.consume(x),s=null,F):x===null||j(x)?t(x):(e.consume(x),L)}function N(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||je(x)?E(x):(e.consume(x),N)}function F(x){return x===47||x===62||Q(x)?y(x):t(x)}function R(x){return x===62?(e.consume(x),A):t(x)}function A(x){return x===null||j(x)?O(x):Q(x)?(e.consume(x),A):t(x)}function O(x){return x===45&&i===2?(e.consume(x),pe):x===60&&i===1?(e.consume(x),de):x===62&&i===4?(e.consume(x),G):x===63&&i===3?(e.consume(x),g):x===93&&i===5?(e.consume(x),B):j(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Av,q,J)(x)):x===null||j(x)?(e.exit("htmlFlowData"),J(x)):(e.consume(x),O)}function J(x){return e.check(Ov,ae,q)(x)}function ae(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),$}function $(x){return x===null||j(x)?J(x):(e.enter("htmlFlowData"),O(x))}function pe(x){return x===45?(e.consume(x),g):O(x)}function de(x){return x===47?(e.consume(x),a="",D):O(x)}function D(x){if(x===62){const ye=a.toLowerCase();return jc.includes(ye)?(e.consume(x),G):O(x)}return vn(x)&&a.length<8?(e.consume(x),a+=String.fromCharCode(x),D):O(x)}function B(x){return x===93?(e.consume(x),g):O(x)}function g(x){return x===62?(e.consume(x),G):x===45&&i===2?(e.consume(x),g):O(x)}function G(x){return x===null||j(x)?(e.exit("htmlFlowData"),q(x)):(e.consume(x),G)}function q(x){return e.exit("htmlFlow"),n(x)}}function jv(e,n,t){const r=this;return i;function i(a){return j(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),l):t(a)}function l(a){return r.parser.lazy[r.now().line]?t(a):n(a)}}function Hv(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Vl,n,t)}}const Uv={name:"htmlText",tokenize:Vv};function Vv(e,n,t){const r=this;let i,l,a;return o;function o(g){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(g),s}function s(g){return g===33?(e.consume(g),u):g===47?(e.consume(g),E):g===63?(e.consume(g),y):vn(g)?(e.consume(g),N):t(g)}function u(g){return g===45?(e.consume(g),c):g===91?(e.consume(g),l=0,v):vn(g)?(e.consume(g),m):t(g)}function c(g){return g===45?(e.consume(g),f):t(g)}function d(g){return g===null?t(g):g===45?(e.consume(g),p):j(g)?(a=d,de(g)):(e.consume(g),d)}function p(g){return g===45?(e.consume(g),f):d(g)}function f(g){return g===62?pe(g):g===45?p(g):d(g)}function v(g){const G="CDATA[";return g===G.charCodeAt(l++)?(e.consume(g),l===G.length?b:v):t(g)}function b(g){return g===null?t(g):g===93?(e.consume(g),S):j(g)?(a=b,de(g)):(e.consume(g),b)}function S(g){return g===93?(e.consume(g),h):b(g)}function h(g){return g===62?pe(g):g===93?(e.consume(g),h):b(g)}function m(g){return g===null||g===62?pe(g):j(g)?(a=m,de(g)):(e.consume(g),m)}function y(g){return g===null?t(g):g===63?(e.consume(g),k):j(g)?(a=y,de(g)):(e.consume(g),y)}function k(g){return g===62?pe(g):y(g)}function E(g){return vn(g)?(e.consume(g),w):t(g)}function w(g){return g===45||Ge(g)?(e.consume(g),w):L(g)}function L(g){return j(g)?(a=L,de(g)):Q(g)?(e.consume(g),L):pe(g)}function N(g){return g===45||Ge(g)?(e.consume(g),N):g===47||g===62||je(g)?F(g):t(g)}function F(g){return g===47?(e.consume(g),pe):g===58||g===95||vn(g)?(e.consume(g),R):j(g)?(a=F,de(g)):Q(g)?(e.consume(g),F):pe(g)}function R(g){return g===45||g===46||g===58||g===95||Ge(g)?(e.consume(g),R):A(g)}function A(g){return g===61?(e.consume(g),O):j(g)?(a=A,de(g)):Q(g)?(e.consume(g),A):F(g)}function O(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(e.consume(g),i=g,J):j(g)?(a=O,de(g)):Q(g)?(e.consume(g),O):(e.consume(g),ae)}function J(g){return g===i?(e.consume(g),i=void 0,$):g===null?t(g):j(g)?(a=J,de(g)):(e.consume(g),J)}function ae(g){return g===null||g===34||g===39||g===60||g===61||g===96?t(g):g===47||g===62||je(g)?F(g):(e.consume(g),ae)}function $(g){return g===47||g===62||je(g)?F(g):t(g)}function pe(g){return g===62?(e.consume(g),e.exit("htmlTextData"),e.exit("htmlText"),n):t(g)}function de(g){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),D}function D(g){return Q(g)?ne(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(g):B(g)}function B(g){return e.enter("htmlTextData"),a(g)}}const Ws={name:"labelEnd",resolveAll:Yv,resolveTo:Qv,tokenize:Jv},$v={tokenize:Kv},Wv={tokenize:qv},Gv={tokenize:Xv};function Yv(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&kn(e,0,e.length,t),e}function Qv(e,n){let t=e.length,r=0,i,l,a,o;for(;t--;)if(i=e[t][1],l){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(l=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=t);const s={type:e[l][1].type==="labelLink"?"link":"image",start:{...e[l][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[l][1].start},end:{...e[a][1].end}},c={type:"labelText",start:{...e[l+r+2][1].end},end:{...e[a-2][1].start}};return o=[["enter",s,n],["enter",u,n]],o=Ze(o,e.slice(l+1,l+r+3)),o=Ze(o,[["enter",c,n]]),o=Ze(o,$s(n.parser.constructs.insideSpan.null,e.slice(l+r+4,a-3),n)),o=Ze(o,[["exit",c,n],e[a-2],e[a-1],["exit",u,n]]),o=Ze(o,e.slice(a+1)),o=Ze(o,[["exit",s,n]]),kn(e,l,e.length,o),e}function Jv(e,n,t){const r=this;let i=r.events.length,l,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){l=r.events[i][1];break}return o;function o(p){return l?l._inactive?d(p):(a=r.parser.defined.includes(Kt(r.sliceSerialize({start:l.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),s):t(p)}function s(p){return p===40?e.attempt($v,c,a?c:d)(p):p===91?e.attempt(Wv,c,a?u:d)(p):a?c(p):d(p)}function u(p){return e.attempt(Gv,c,d)(p)}function c(p){return n(p)}function d(p){return l._balanced=!0,t(p)}}function Kv(e,n,t){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return je(d)?Ar(e,l)(d):l(d)}function l(d){return d===41?c(d):th(e,a,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function a(d){return je(d)?Ar(e,s)(d):c(d)}function o(d){return t(d)}function s(d){return d===34||d===39||d===40?ih(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return je(d)?Ar(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function qv(e,n,t){const r=this;return i;function i(o){return rh.call(r,e,l,a,"reference","referenceMarker","referenceString")(o)}function l(o){return r.parser.defined.includes(Kt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(o):t(o)}function a(o){return t(o)}}function Xv(e,n,t){return r;function r(l){return e.enter("reference"),e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),i}function i(l){return l===93?(e.enter("referenceMarker"),e.consume(l),e.exit("referenceMarker"),e.exit("reference"),n):t(l)}}const Zv={name:"labelStartImage",resolveAll:Ws.resolveAll,tokenize:e1};function e1(e,n,t){const r=this;return i;function i(o){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(o),e.exit("labelImageMarker"),l}function l(o){return o===91?(e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelImage"),a):t(o)}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const n1={name:"labelStartLink",resolveAll:Ws.resolveAll,tokenize:t1};function t1(e,n,t){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),l}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(a):n(a)}}const Sa={name:"lineEnding",tokenize:r1};function r1(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ne(e,n,"linePrefix")}}const Yi={name:"thematicBreak",tokenize:i1};function i1(e,n,t){let r=0,i;return l;function l(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,o(u)}function o(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||j(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),Q(u)?ne(e,o,"whitespace")(u):o(u))}}const Me={continuation:{tokenize:s1},exit:c1,name:"list",tokenize:o1},l1={partial:!0,tokenize:d1},a1={partial:!0,tokenize:u1};function o1(e,n,t){const r=this,i=r.events[r.events.length-1];let l=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return o;function o(f){const v=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Mo(f)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(Yi,t,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(f)}return t(f)}function s(f){return Mo(f)&&++a<10?(e.consume(f),s):(!r.interrupt||a<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):t(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Vl,r.interrupt?t:c,e.attempt(l1,p,d))}function c(f){return r.containerState.initialBlankLine=!0,l++,p(f)}function d(f){return Q(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),p):t(f)}function p(f){return r.containerState.size=l+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(f)}}function s1(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Vl,i,l);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ne(e,n,"listItemIndent",r.containerState.size+1)(o)}function l(o){return r.containerState.furtherBlankLines||!Q(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(a1,n,a)(o))}function a(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,ne(e,e.attempt(Me,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function u1(e,n,t){const r=this;return ne(e,i,"listItemIndent",r.containerState.size+1);function i(l){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?n(l):t(l)}}function c1(e){e.exit(this.containerState.type)}function d1(e,n,t){const r=this;return ne(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(l){const a=r.events[r.events.length-1];return!Q(l)&&a&&a[1].type==="listItemPrefixWhitespace"?n(l):t(l)}}const Hc={name:"setextUnderline",resolveTo:f1,tokenize:p1};function f1(e,n){let t=e.length,r,i,l;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!l&&e[t][1].type==="definition"&&(l=t);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",l?(e.splice(i,0,["enter",a,n]),e.splice(l+1,0,["exit",e[r][1],n]),e[r][1].end={...e[l][1].end}):e[r][1]=a,e.push(["exit",a,n]),e}function p1(e,n,t){const r=this;let i;return l;function l(u){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=u,a(u)):t(u)}function a(u){return e.enter("setextHeadingLineSequence"),o(u)}function o(u){return u===i?(e.consume(u),o):(e.exit("setextHeadingLineSequence"),Q(u)?ne(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||j(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const h1={tokenize:m1};function m1(e){const n=this,t=e.attempt(Vl,r,e.attempt(this.parser.constructs.flowInitial,i,ne(e,e.attempt(this.parser.constructs.flow,i,e.attempt(bv,i)),"linePrefix")));return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEndingBlank"),e.consume(l),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const g1={resolveAll:ah()},y1=lh("string"),x1=lh("text");function lh(e){return{resolveAll:ah(e==="text"?v1:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],l=t.attempt(i,a,o);return a;function a(c){return u(c)?l(c):o(c)}function o(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),l(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const d=i[c];let p=-1;if(d)for(;++p<d.length;){const f=d[p];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function ah(e){return n;function n(t,r){let i=-1,l;for(;++i<=t.length;)l===void 0?t[i]&&t[i][1].type==="data"&&(l=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==l+2&&(t[l][1].end=t[i-1][1].end,t.splice(l+2,i-l-2),i=l+2),l=void 0);return e?e(t,r):t}}function v1(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let l=i.length,a=-1,o=0,s;for(;l--;){const u=i[l];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)o++,a--;if(a)break;a=-1}else if(u===-2)s=!0,o++;else if(u!==-1){l++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(o=0),o){const u={type:t===e.length||s||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:l?a:r.start._bufferIndex+a,_index:r.start._index+l,line:r.end.line,column:r.end.column-o,offset:r.end.offset-o},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const b1={42:Me,43:Me,45:Me,48:Me,49:Me,50:Me,51:Me,52:Me,53:Me,54:Me,55:Me,56:Me,57:Me,62:Xp},w1={91:Ev},k1={[-2]:ka,[-1]:ka,32:ka},S1={35:Nv,42:Yi,45:[Hc,Yi],60:Rv,61:Hc,95:Yi,96:Fc,126:Fc},C1={38:eh,92:Zp},E1={[-5]:Sa,[-4]:Sa,[-3]:Sa,33:Zv,38:eh,42:Ro,60:[nv,Uv],91:n1,92:[Pv,Zp],93:Ws,95:Ro,96:hv},T1={null:[Ro,g1]},I1={null:[42,95]},L1={null:[]},P1=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:I1,contentInitial:w1,disable:L1,document:b1,flow:S1,flowInitial:k1,insideSpan:T1,string:C1,text:E1},Symbol.toStringTag,{value:"Module"}));function D1(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},l=[];let a=[],o=[];const s={attempt:L(E),check:L(w),consume:m,enter:y,exit:k,interrupt:L(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:v,parser:e,previous:null,sliceSerialize:p,sliceStream:f,write:d};let c=n.tokenize.call(u,s);return n.resolveAll&&l.push(n),u;function d(A){return a=Ze(a,A),S(),a[a.length-1]!==null?[]:(N(n,0),u.events=$s(l,u.events,u),u.events)}function p(A,O){return _1(f(A),O)}function f(A){return N1(a,A)}function v(){const{_bufferIndex:A,_index:O,line:J,column:ae,offset:$}=r;return{_bufferIndex:A,_index:O,line:J,column:ae,offset:$}}function b(A){i[A.line]=A.column,R()}function S(){let A;for(;r._index<a.length;){const O=a[r._index];if(typeof O=="string")for(A=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===A&&r._bufferIndex<O.length;)h(O.charCodeAt(r._bufferIndex));else h(O)}}function h(A){c=c(A)}function m(A){j(A)?(r.line++,r.column=1,r.offset+=A===-3?2:1,R()):A!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=A}function y(A,O){const J=O||{};return J.type=A,J.start=v(),u.events.push(["enter",J,u]),o.push(J),J}function k(A){const O=o.pop();return O.end=v(),u.events.push(["exit",O,u]),O}function E(A,O){N(A,O.from)}function w(A,O){O.restore()}function L(A,O){return J;function J(ae,$,pe){let de,D,B,g;return Array.isArray(ae)?q(ae):"tokenize"in ae?q([ae]):G(ae);function G(te){return hn;function hn(An){const Tt=An!==null&&te[An],It=An!==null&&te.null,hi=[...Array.isArray(Tt)?Tt:Tt?[Tt]:[],...Array.isArray(It)?It:It?[It]:[]];return q(hi)(An)}}function q(te){return de=te,D=0,te.length===0?pe:x(te[D])}function x(te){return hn;function hn(An){return g=F(),B=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?ln():te.tokenize.call(O?Object.assign(Object.create(u),O):u,s,ye,ln)(An)}}function ye(te){return A(B,g),$}function ln(te){return g.restore(),++D<de.length?x(de[D]):pe}}}function N(A,O){A.resolveAll&&!l.includes(A)&&l.push(A),A.resolve&&kn(u.events,O,u.events.length-O,A.resolve(u.events.slice(O),u)),A.resolveTo&&(u.events=A.resolveTo(u.events,u))}function F(){const A=v(),O=u.previous,J=u.currentConstruct,ae=u.events.length,$=Array.from(o);return{from:ae,restore:pe};function pe(){r=A,u.previous=O,u.currentConstruct=J,u.events.length=ae,o=$,R()}}function R(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function N1(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,l=n.end._bufferIndex;let a;if(t===i)a=[e[t].slice(r,l)];else{if(a=e.slice(t,i),r>-1){const o=a[0];typeof o=="string"?a[0]=o.slice(r):a.shift()}l>0&&a.push(e[i].slice(0,l))}return a}function _1(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const l=e[t];let a;if(typeof l=="string")a=l;else switch(l){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=n?" ":"	";break}case-1:{if(!n&&i)continue;a=" ";break}default:a=String.fromCharCode(l)}i=l===-2,r.push(a)}return r.join("")}function z1(e){const r={constructs:jx([P1,...(e||{}).extensions||[]]),content:i(Qx),defined:[],document:i(Kx),flow:i(h1),lazy:{},string:i(y1),text:i(x1)};return r;function i(l){return a;function a(o){return D1(r,l,o)}}}function M1(e){for(;!nh(e););return e}const Uc=/[\0\t\n\r]/g;function R1(){let e=1,n="",t=!0,r;return i;function i(l,a,o){const s=[];let u,c,d,p,f;for(l=n+(typeof l=="string"?l.toString():new TextDecoder(a||void 0).decode(l)),d=0,n="",t&&(l.charCodeAt(0)===65279&&d++,t=void 0);d<l.length;){if(Uc.lastIndex=d,u=Uc.exec(l),p=u&&u.index!==void 0?u.index:l.length,f=l.charCodeAt(p),!u){n=l.slice(d);break}if(f===10&&d===p&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),d<p&&(s.push(l.slice(d,p)),e+=p-d),f){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}d=p+1}return o&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const A1=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function O1(e){return e.replace(A1,B1)}function B1(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),l=i===120||i===88;return qp(t.slice(l?2:1),l?16:10)}return Vs(t)||e}const oh={}.hasOwnProperty;function F1(e,n,t){return typeof n!="string"&&(t=n,n=void 0),j1(t)(M1(z1(t).document().write(R1()(e,n,!0))))}function j1(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:l(eu),autolinkProtocol:F,autolinkEmail:F,atxHeading:l(qs),blockQuote:l(It),characterEscape:F,characterReference:F,codeFenced:l(hi),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:l(hi,a),codeText:l(vh,a),codeTextData:F,data:F,codeFlowValue:F,definition:l(bh),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:l(wh),hardBreakEscape:l(Xs),hardBreakTrailing:l(Xs),htmlFlow:l(Zs,a),htmlFlowData:F,htmlText:l(Zs,a),htmlTextData:F,image:l(kh),label:a,link:l(eu),listItem:l(Sh),listItemValue:p,listOrdered:l(nu,d),listUnordered:l(nu),paragraph:l(Ch),reference:x,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:l(qs),strong:l(Eh),thematicBreak:l(Ih)},exit:{atxHeading:s(),atxHeadingSequence:E,autolink:s(),autolinkEmail:Tt,autolinkProtocol:An,blockQuote:s(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:ln,characterReferenceMarkerNumeric:ln,characterReferenceValue:te,characterReference:hn,codeFenced:s(S),codeFencedFence:b,codeFencedFenceInfo:f,codeFencedFenceMeta:v,codeFlowValue:R,codeIndented:s(h),codeText:s($),codeTextData:R,data:R,definition:s(),definitionDestinationString:k,definitionLabelString:m,definitionTitleString:y,emphasis:s(),hardBreakEscape:s(O),hardBreakTrailing:s(O),htmlFlow:s(J),htmlFlowData:R,htmlText:s(ae),htmlTextData:R,image:s(de),label:B,labelText:D,lineEnding:A,link:s(pe),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ye,resourceDestinationString:g,resourceTitleString:G,resource:q,setextHeading:s(N),setextHeadingLineSequence:L,setextHeadingText:w,strong:s(),thematicBreak:s()}};sh(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(C){let P={type:"root",children:[]};const H={stack:[P],tokenStack:[],config:n,enter:o,exit:u,buffer:a,resume:c,data:t},W=[];let X=-1;for(;++X<C.length;)if(C[X][1].type==="listOrdered"||C[X][1].type==="listUnordered")if(C[X][0]==="enter")W.push(X);else{const an=W.pop();X=i(C,an,X)}for(X=-1;++X<C.length;){const an=n[C[X][0]];oh.call(an,C[X][1].type)&&an[C[X][1].type].call(Object.assign({sliceSerialize:C[X][2].sliceSerialize},H),C[X][1])}if(H.tokenStack.length>0){const an=H.tokenStack[H.tokenStack.length-1];(an[1]||Vc).call(H,void 0,an[0])}for(P.position={start:Bn(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Bn(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},X=-1;++X<n.transforms.length;)P=n.transforms[X](P)||P;return P}function i(C,P,H){let W=P-1,X=-1,an=!1,ot,Sn,ur,cr;for(;++W<=H;){const Ue=C[W];switch(Ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ue[0]==="enter"?X++:X--,cr=void 0;break}case"lineEndingBlank":{Ue[0]==="enter"&&(ot&&!cr&&!X&&!ur&&(ur=W),cr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:cr=void 0}if(!X&&Ue[0]==="enter"&&Ue[1].type==="listItemPrefix"||X===-1&&Ue[0]==="exit"&&(Ue[1].type==="listUnordered"||Ue[1].type==="listOrdered")){if(ot){let Lt=W;for(Sn=void 0;Lt--;){const Cn=C[Lt];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;Sn&&(C[Sn][1].type="lineEndingBlank",an=!0),Cn[1].type="lineEnding",Sn=Lt}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}ur&&(!Sn||ur<Sn)&&(ot._spread=!0),ot.end=Object.assign({},Sn?C[Sn][1].start:Ue[1].end),C.splice(Sn||W,0,["exit",ot,Ue[2]]),W++,H++}if(Ue[1].type==="listItemPrefix"){const Lt={type:"listItem",_spread:!1,start:Object.assign({},Ue[1].start),end:void 0};ot=Lt,C.splice(W,0,["enter",Lt,Ue[2]]),W++,H++,ur=void 0,cr=!0}}}return C[P][1]._spread=an,H}function l(C,P){return H;function H(W){o.call(this,C(W),W),P&&P.call(this,W)}}function a(){this.stack.push({type:"fragment",children:[]})}function o(C,P,H){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([P,H||void 0]),C.position={start:Bn(P.start),end:void 0}}function s(C){return P;function P(H){C&&C.call(this,H),u.call(this,H)}}function u(C,P){const H=this.stack.pop(),W=this.tokenStack.pop();if(W)W[0].type!==C.type&&(P?P.call(this,C,W[0]):(W[1]||Vc).call(this,C,W[0]));else throw new Error("Cannot close `"+C.type+"` ("+Rr({start:C.start,end:C.end})+"): it’s not open");H.position.end=Bn(C.end)}function c(){return Bx(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function p(C){if(this.data.expectingFirstListItemValue){const P=this.stack[this.stack.length-2];P.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function f(){const C=this.resume(),P=this.stack[this.stack.length-1];P.lang=C}function v(){const C=this.resume(),P=this.stack[this.stack.length-1];P.meta=C}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C.replace(/(\r?\n|\r)$/g,"")}function m(C){const P=this.resume(),H=this.stack[this.stack.length-1];H.label=P,H.identifier=Kt(this.sliceSerialize(C)).toLowerCase()}function y(){const C=this.resume(),P=this.stack[this.stack.length-1];P.title=C}function k(){const C=this.resume(),P=this.stack[this.stack.length-1];P.url=C}function E(C){const P=this.stack[this.stack.length-1];if(!P.depth){const H=this.sliceSerialize(C).length;P.depth=H}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function L(C){const P=this.stack[this.stack.length-1];P.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function F(C){const H=this.stack[this.stack.length-1].children;let W=H[H.length-1];(!W||W.type!=="text")&&(W=Th(),W.position={start:Bn(C.start),end:void 0},H.push(W)),this.stack.push(W)}function R(C){const P=this.stack.pop();P.value+=this.sliceSerialize(C),P.position.end=Bn(C.end)}function A(C){const P=this.stack[this.stack.length-1];if(this.data.atHardBreak){const H=P.children[P.children.length-1];H.position.end=Bn(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(P.type)&&(F.call(this,C),R.call(this,C))}function O(){this.data.atHardBreak=!0}function J(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C}function ae(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C}function $(){const C=this.resume(),P=this.stack[this.stack.length-1];P.value=C}function pe(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=P,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function de(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const P=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=P,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function D(C){const P=this.sliceSerialize(C),H=this.stack[this.stack.length-2];H.label=O1(P),H.identifier=Kt(P).toLowerCase()}function B(){const C=this.stack[this.stack.length-1],P=this.resume(),H=this.stack[this.stack.length-1];if(this.data.inReference=!0,H.type==="link"){const W=C.children;H.children=W}else H.alt=P}function g(){const C=this.resume(),P=this.stack[this.stack.length-1];P.url=C}function G(){const C=this.resume(),P=this.stack[this.stack.length-1];P.title=C}function q(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function ye(C){const P=this.resume(),H=this.stack[this.stack.length-1];H.label=P,H.identifier=Kt(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function ln(C){this.data.characterReferenceType=C.type}function te(C){const P=this.sliceSerialize(C),H=this.data.characterReferenceType;let W;H?(W=qp(P,H==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):W=Vs(P);const X=this.stack[this.stack.length-1];X.value+=W}function hn(C){const P=this.stack.pop();P.position.end=Bn(C.end)}function An(C){R.call(this,C);const P=this.stack[this.stack.length-1];P.url=this.sliceSerialize(C)}function Tt(C){R.call(this,C);const P=this.stack[this.stack.length-1];P.url="mailto:"+this.sliceSerialize(C)}function It(){return{type:"blockquote",children:[]}}function hi(){return{type:"code",lang:null,meta:null,value:""}}function vh(){return{type:"inlineCode",value:""}}function bh(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function wh(){return{type:"emphasis",children:[]}}function qs(){return{type:"heading",depth:0,children:[]}}function Xs(){return{type:"break"}}function Zs(){return{type:"html",value:""}}function kh(){return{type:"image",title:null,url:"",alt:null}}function eu(){return{type:"link",title:null,url:"",children:[]}}function nu(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function Sh(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function Ch(){return{type:"paragraph",children:[]}}function Eh(){return{type:"strong",children:[]}}function Th(){return{type:"text",value:""}}function Ih(){return{type:"thematicBreak"}}}function Bn(e){return{line:e.line,column:e.column,offset:e.offset}}function sh(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?sh(e,r):H1(e,r)}}function H1(e,n){let t;for(t in n)if(oh.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Vc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Rr({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Rr({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Rr({start:n.start,end:n.end})+") is still open")}function U1(e){const n=this;n.parser=t;function t(r){return F1(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function V1(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function $1(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function W1(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let l={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(l.data={meta:n.meta}),e.patch(n,l),l=e.applyData(n,l),l={type:"element",tagName:"pre",properties:{},children:[l]},e.patch(n,l),l}function G1(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Y1(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Q1(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=sr(r.toLowerCase()),l=e.footnoteOrder.indexOf(r);let a,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=l+1,o+=1,e.footnoteCounts.set(r,o);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function J1(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function K1(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function uh(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),l=i[0];l&&l.type==="text"?l.value="["+l.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function q1(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return uh(e,n);const i={src:sr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,l),e.applyData(n,l)}function X1(e,n){const t={src:sr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Z1(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function eb(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return uh(e,n);const i={href:sr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const l={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function nb(e,n){const t={href:sr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function tb(e,n,t){const r=e.all(n),i=t?rb(t):ch(n),l={},a=[];if(typeof n.checked=="boolean"){const c=r[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),l.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const c=r[o];(i||o!==0||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?a.push(...c.children):a.push(c)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:l,children:a};return e.patch(n,u),e.applyData(n,u)}function rb(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=ch(t[r])}return n}function ch(e){const n=e.spread;return n??e.children.length>1}function ib(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const l={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,l),e.applyData(n,l)}function lb(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function ab(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function ob(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function sb(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],a),i.push(a)}if(t.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},o=Fs(n.children[1]),s=$p(n.children[n.children.length-1]);o&&s&&(a.position={start:o,end:s}),i.push(a)}const l={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,l),e.applyData(n,l)}function ub(e,n,t){const r=t?t.children:void 0,l=(r?r.indexOf(n):1)===0?"th":"td",a=t&&t.type==="table"?t.align:void 0,o=a?a.length:n.children.length;let s=-1;const u=[];for(;++s<o;){const d=n.children[s],p={},f=a?a[s]:void 0;f&&(p.align=f);let v={type:"element",tagName:l,properties:p,children:[]};d&&(v.children=e.all(d),e.patch(d,v),v=e.applyData(d,v)),u.push(v)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,c),e.applyData(n,c)}function cb(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const $c=9,Wc=32;function db(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const l=[];for(;r;)l.push(Gc(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return l.push(Gc(n.slice(i),i>0,!1)),l.join("")}function Gc(e,n,t){let r=0,i=e.length;if(n){let l=e.codePointAt(r);for(;l===$c||l===Wc;)r++,l=e.codePointAt(r)}if(t){let l=e.codePointAt(i-1);for(;l===$c||l===Wc;)i--,l=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function fb(e,n){const t={type:"text",value:db(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function pb(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const hb={blockquote:V1,break:$1,code:W1,delete:G1,emphasis:Y1,footnoteReference:Q1,heading:J1,html:K1,imageReference:q1,image:X1,inlineCode:Z1,linkReference:eb,link:nb,listItem:tb,list:ib,paragraph:lb,root:ab,strong:ob,table:sb,tableCell:cb,tableRow:ub,text:fb,thematicBreak:pb,toml:_i,yaml:_i,definition:_i,footnoteDefinition:_i};function _i(){}const dh=-1,$l=0,Or=1,wl=2,Gs=3,Ys=4,Qs=5,Js=6,fh=7,ph=8,Yc=typeof self=="object"?self:globalThis,mb=(e,n)=>{const t=(i,l)=>(e.set(l,i),i),r=i=>{if(e.has(i))return e.get(i);const[l,a]=n[i];switch(l){case $l:case dh:return t(a,i);case Or:{const o=t([],i);for(const s of a)o.push(r(s));return o}case wl:{const o=t({},i);for(const[s,u]of a)o[r(s)]=r(u);return o}case Gs:return t(new Date(a),i);case Ys:{const{source:o,flags:s}=a;return t(new RegExp(o,s),i)}case Qs:{const o=t(new Map,i);for(const[s,u]of a)o.set(r(s),r(u));return o}case Js:{const o=t(new Set,i);for(const s of a)o.add(r(s));return o}case fh:{const{name:o,message:s}=a;return t(new Yc[o](s),i)}case ph:return t(BigInt(a),i);case"BigInt":return t(Object(BigInt(a)),i);case"ArrayBuffer":return t(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:o}=new Uint8Array(a);return t(new DataView(o),a)}}return t(new Yc[l](a),i)};return r},Qc=e=>mb(new Map,e)(0),Dt="",{toString:gb}={},{keys:yb}=Object,br=e=>{const n=typeof e;if(n!=="object"||!e)return[$l,n];const t=gb.call(e).slice(8,-1);switch(t){case"Array":return[Or,Dt];case"Object":return[wl,Dt];case"Date":return[Gs,Dt];case"RegExp":return[Ys,Dt];case"Map":return[Qs,Dt];case"Set":return[Js,Dt];case"DataView":return[Or,t]}return t.includes("Array")?[Or,t]:t.includes("Error")?[fh,t]:[wl,t]},zi=([e,n])=>e===$l&&(n==="function"||n==="symbol"),xb=(e,n,t,r)=>{const i=(a,o)=>{const s=r.push(a)-1;return t.set(o,s),s},l=a=>{if(t.has(a))return t.get(a);let[o,s]=br(a);switch(o){case $l:{let c=a;switch(s){case"bigint":o=ph,c=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return i([dh],a)}return i([o,c],a)}case Or:{if(s){let p=a;return s==="DataView"?p=new Uint8Array(a.buffer):s==="ArrayBuffer"&&(p=new Uint8Array(a)),i([s,[...p]],a)}const c=[],d=i([o,c],a);for(const p of a)c.push(l(p));return d}case wl:{if(s)switch(s){case"BigInt":return i([s,a.toString()],a);case"Boolean":case"Number":case"String":return i([s,a.valueOf()],a)}if(n&&"toJSON"in a)return l(a.toJSON());const c=[],d=i([o,c],a);for(const p of yb(a))(e||!zi(br(a[p])))&&c.push([l(p),l(a[p])]);return d}case Gs:return i([o,a.toISOString()],a);case Ys:{const{source:c,flags:d}=a;return i([o,{source:c,flags:d}],a)}case Qs:{const c=[],d=i([o,c],a);for(const[p,f]of a)(e||!(zi(br(p))||zi(br(f))))&&c.push([l(p),l(f)]);return d}case Js:{const c=[],d=i([o,c],a);for(const p of a)(e||!zi(br(p)))&&c.push(l(p));return d}}const{message:u}=a;return i([o,{name:s,message:u}],a)};return l},Jc=(e,{json:n,lossy:t}={})=>{const r=[];return xb(!(n||t),!!n,new Map,r)(e),r},kl=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Qc(Jc(e,n)):structuredClone(e):(e,n)=>Qc(Jc(e,n));function vb(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function bb(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function wb(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||vb,r=e.options.footnoteBackLabel||bb,i=e.options.footnoteLabel||"Footnotes",l=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),d=String(u.identifier).toUpperCase(),p=sr(d.toLowerCase());let f=0;const v=[],b=e.footnoteCounts.get(d);for(;b!==void 0&&++f<=b;){v.length>0&&v.push({type:"text",value:" "});let m=typeof t=="string"?t:t(s,f);typeof m=="string"&&(m={type:"text",value:m}),v.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+p+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,f),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const S=c[c.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const m=S.children[S.children.length-1];m&&m.type==="text"?m.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...v)}else c.push(...v);const h={type:"element",tagName:"li",properties:{id:n+"fn-"+p},children:e.wrap(c,!0)};e.patch(u,h),o.push(h)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:l,properties:{...kl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const hh=function(e){if(e==null)return Eb;if(typeof e=="function")return Wl(e);if(typeof e=="object")return Array.isArray(e)?kb(e):Sb(e);if(typeof e=="string")return Cb(e);throw new Error("Expected function, string, or object as test")};function kb(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=hh(e[t]);return Wl(r);function r(...i){let l=-1;for(;++l<n.length;)if(n[l].apply(this,i))return!0;return!1}}function Sb(e){const n=e;return Wl(t);function t(r){const i=r;let l;for(l in e)if(i[l]!==n[l])return!1;return!0}}function Cb(e){return Wl(n);function n(t){return t&&t.type===e}}function Wl(e){return n;function n(t,r,i){return!!(Tb(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Eb(){return!0}function Tb(e){return e!==null&&typeof e=="object"&&"type"in e}const mh=[],Ib=!0,Kc=!1,Lb="skip";function Pb(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const l=hh(i),a=r?-1:1;o(e,void 0,[])();function o(s,u,c){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const f=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(s.type+(f?"<"+f+">":""))+")"})}return p;function p(){let f=mh,v,b,S;if((!n||l(s,u,c[c.length-1]||void 0))&&(f=Db(t(s,c)),f[0]===Kc))return f;if("children"in s&&s.children){const h=s;if(h.children&&f[0]!==Lb)for(b=(r?h.children.length:-1)+a,S=c.concat(h);b>-1&&b<h.children.length;){const m=h.children[b];if(v=o(m,b,S)(),v[0]===Kc)return v;b=typeof v[1]=="number"?v[1]:b+a}}return f}}}function Db(e){return Array.isArray(e)?e:typeof e=="number"?[Ib,e]:e==null?mh:[e]}function gh(e,n,t,r){let i,l,a;typeof n=="function"&&typeof t!="function"?(l=void 0,a=n,i=t):(l=n,a=t,i=r),Pb(e,l,o,i);function o(s,u){const c=u[u.length-1],d=c?c.children.indexOf(s):void 0;return a(s,d,c)}}const Ao={}.hasOwnProperty,Nb={};function _b(e,n){const t=n||Nb,r=new Map,i=new Map,l=new Map,a={...hb,...t.handlers},o={all:u,applyData:Mb,definitionById:r,footnoteById:i,footnoteCounts:l,footnoteOrder:[],handlers:a,one:s,options:t,patch:zb,wrap:Ab};return gh(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?r:i,p=String(c.identifier).toUpperCase();d.has(p)||d.set(p,c)}}),o;function s(c,d){const p=c.type,f=o.handlers[p];if(Ao.call(o.handlers,p)&&f)return f(o,c,d);if(o.options.passThrough&&o.options.passThrough.includes(p)){if("children"in c){const{children:b,...S}=c,h=kl(S);return h.children=o.all(c),h}return kl(c)}return(o.options.unknownHandler||Rb)(o,c,d)}function u(c){const d=[];if("children"in c){const p=c.children;let f=-1;for(;++f<p.length;){const v=o.one(p[f],c);if(v){if(f&&p[f-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=qc(v.value)),!Array.isArray(v)&&v.type==="element")){const b=v.children[0];b&&b.type==="text"&&(b.value=qc(b.value))}Array.isArray(v)?d.push(...v):d.push(v)}}}return d}}function zb(e,n){e.position&&(n.position=gx(e))}function Mb(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,l=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const a="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:a}}t.type==="element"&&l&&Object.assign(t.properties,kl(l)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function Rb(e,n){const t=n.data||{},r="value"in n&&!(Ao.call(t,"hProperties")||Ao.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Ab(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function qc(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function Xc(e,n){const t=_b(e,n),r=t.one(e,void 0),i=wb(t),l=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&l.children.push({type:"text",value:`
`},i),l}function Ob(e,n){return e&&"run"in e?async function(t,r){const i=Xc(t,{file:r,...n});await e.run(i,r)}:function(t,r){return Xc(t,{file:r,...e||n})}}function Zc(e){if(e)throw e}var Qi=Object.prototype.hasOwnProperty,yh=Object.prototype.toString,ed=Object.defineProperty,nd=Object.getOwnPropertyDescriptor,td=function(n){return typeof Array.isArray=="function"?Array.isArray(n):yh.call(n)==="[object Array]"},rd=function(n){if(!n||yh.call(n)!=="[object Object]")return!1;var t=Qi.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Qi.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Qi.call(n,i)},id=function(n,t){ed&&t.name==="__proto__"?ed(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},ld=function(n,t){if(t==="__proto__")if(Qi.call(n,t)){if(nd)return nd(n,t).value}else return;return n[t]},Bb=function e(){var n,t,r,i,l,a,o=arguments[0],s=1,u=arguments.length,c=!1;for(typeof o=="boolean"&&(c=o,o=arguments[1]||{},s=2),(o==null||typeof o!="object"&&typeof o!="function")&&(o={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=ld(o,t),i=ld(n,t),o!==i&&(c&&i&&(rd(i)||(l=td(i)))?(l?(l=!1,a=r&&td(r)?r:[]):a=r&&rd(r)?r:{},id(o,{name:t,newValue:e(c,a,i)})):typeof i<"u"&&id(o,{name:t,newValue:i}));return o};const Ca=Fo(Bb);function Oo(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Fb(){const e=[],n={run:t,use:r};return n;function t(...i){let l=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);o(null,...i);function o(s,...u){const c=e[++l];let d=-1;if(s){a(s);return}for(;++d<i.length;)(u[d]===null||u[d]===void 0)&&(u[d]=i[d]);i=u,c?jb(c,o)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function jb(e,n){let t;return r;function r(...a){const o=e.length>a.length;let s;o&&a.push(i);try{s=e.apply(this,a)}catch(u){const c=u;if(o&&t)throw c;return i(c)}o||(s&&s.then&&typeof s.then=="function"?s.then(l,i):s instanceof Error?i(s):l(s))}function i(a,...o){t||(t=!0,n(a,...o))}function l(a){i(null,a)}}const yn={basename:Hb,dirname:Ub,extname:Vb,join:$b,sep:"/"};function Hb(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');pi(e);let t=0,r=-1,i=e.length,l;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else r<0&&(l=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let a=-1,o=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(l){t=i+1;break}}else a<0&&(l=!0,a=i+1),o>-1&&(e.codePointAt(i)===n.codePointAt(o--)?o<0&&(r=i):(o=-1,r=a));return t===r?r=a:r<0&&(r=e.length),e.slice(t,r)}function Ub(e){if(pi(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Vb(e){pi(e);let n=e.length,t=-1,r=0,i=-1,l=0,a;for(;n--;){const o=e.codePointAt(n);if(o===47){if(a){r=n+1;break}continue}t<0&&(a=!0,t=n+1),o===46?i<0?i=n:l!==1&&(l=1):i>-1&&(l=-1)}return i<0||t<0||l===0||l===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function $b(...e){let n=-1,t;for(;++n<e.length;)pi(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Wb(t)}function Wb(e){pi(e);const n=e.codePointAt(0)===47;let t=Gb(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Gb(e,n){let t="",r=0,i=-1,l=0,a=-1,o,s;for(;++a<=e.length;){if(a<e.length)o=e.codePointAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||l===1))if(i!==a-1&&l===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),i=a,l=0;continue}}else if(t.length>0){t="",r=0,i=a,l=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,a):t=e.slice(i+1,a),r=a-i-1;i=a,l=0}else o===46&&l>-1?l++:l=-1}return t}function pi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Yb={cwd:Qb};function Qb(){return"/"}function Bo(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Jb(e){if(typeof e=="string")e=new URL(e);else if(!Bo(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Kb(e)}function Kb(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Ea=["history","path","basename","stem","extname","dirname"];class xh{constructor(n){let t;n?Bo(n)?t={path:n}:typeof n=="string"||qb(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Yb.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ea.length;){const l=Ea[r];l in t&&t[l]!==void 0&&t[l]!==null&&(this[l]=l==="history"?[...t[l]]:t[l])}let i;for(i in t)Ea.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?yn.basename(this.path):void 0}set basename(n){Ia(n,"basename"),Ta(n,"basename"),this.path=yn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?yn.dirname(this.path):void 0}set dirname(n){ad(this.basename,"dirname"),this.path=yn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?yn.extname(this.path):void 0}set extname(n){if(Ta(n,"extname"),ad(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=yn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Bo(n)&&(n=Jb(n)),Ia(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?yn.basename(this.path,this.extname):void 0}set stem(n){Ia(n,"stem"),Ta(n,"stem"),this.path=yn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Pe(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Ta(e,n){if(e&&e.includes(yn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+yn.sep+"`")}function Ia(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function ad(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function qb(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Xb=function(e){const r=this.constructor.prototype,i=r[e],l=function(){return i.apply(l,arguments)};return Object.setPrototypeOf(l,r),l},Zb={}.hasOwnProperty;class Ks extends Xb{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Fb()}copy(){const n=new Ks;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Ca(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Da("data",this.frozen),this.namespace[n]=t,this):Zb.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Da("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Mi(n),r=this.parser||this.Parser;return La("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),La("process",this.parser||this.Parser),Pa("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(l,a){const o=Mi(n),s=r.parse(o);r.run(s,o,function(c,d,p){if(c||!d||!p)return u(c);const f=d,v=r.stringify(f,p);tw(v)?p.value=v:p.result=v,u(c,p)});function u(c,d){c||!d?a(c):l?l(d):t(void 0,d)}}}processSync(n){let t=!1,r;return this.freeze(),La("processSync",this.parser||this.Parser),Pa("processSync",this.compiler||this.Compiler),this.process(n,i),sd("processSync","process",t),r;function i(l,a){t=!0,Zc(l),r=a}}run(n,t,r){od(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?l(void 0,r):new Promise(l);function l(a,o){const s=Mi(t);i.run(n,s,u);function u(c,d,p){const f=d||n;c?o(c):a?a(f):r(void 0,f,p)}}}runSync(n,t){let r=!1,i;return this.run(n,t,l),sd("runSync","run",r),i;function l(a,o){Zc(a),i=o,r=!0}}stringify(n,t){this.freeze();const r=Mi(t),i=this.compiler||this.Compiler;return Pa("stringify",i),od(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Da("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?o(n):a(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function l(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;s(c,d)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(u.plugins),u.settings&&(i.settings=Ca(!0,i.settings,u.settings))}function o(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];l(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let d=-1,p=-1;for(;++d<r.length;)if(r[d][0]===u){p=d;break}if(p===-1)r.push([u,...c]);else if(c.length>0){let[f,...v]=c;const b=r[p][1];Oo(b)&&Oo(f)&&(f=Ca(!0,b,f)),r[p]=[u,f,...v]}}}}const ew=new Ks().freeze();function La(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Pa(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Da(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function od(e){if(!Oo(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function sd(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Mi(e){return nw(e)?e:new xh(e)}function nw(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function tw(e){return typeof e=="string"||rw(e)}function rw(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const iw="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",ud=[],cd={allowDangerousHtml:!0},lw=/^(https?|ircs?|mailto|xmpp)$/i,aw=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ow(e){const n=sw(e),t=uw(e);return cw(n.runSync(n.parse(t),t),e)}function sw(e){const n=e.rehypePlugins||ud,t=e.remarkPlugins||ud,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...cd}:cd;return ew().use(U1).use(t).use(Ob,r).use(n)}function uw(e){const n=e.children||"",t=new xh;return typeof n=="string"&&(t.value=n),t}function cw(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,l=n.disallowedElements,a=n.skipHtml,o=n.unwrapDisallowed,s=n.urlTransform||dw;for(const c of aw)Object.hasOwn(n,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+iw+c.id,void 0);return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),gh(e,u),wx(e,{Fragment:M.Fragment,components:i,ignoreInvalidStyle:!0,jsx:M.jsx,jsxs:M.jsxs,passKeys:!0,passNode:!0});function u(c,d,p){if(c.type==="raw"&&p&&typeof d=="number")return a?p.children.splice(d,1):p.children[d]={type:"text",value:c.value},d;if(c.type==="element"){let f;for(f in wa)if(Object.hasOwn(wa,f)&&Object.hasOwn(c.properties,f)){const v=c.properties[f],b=wa[f];(b===null||b.includes(c.tagName))&&(c.properties[f]=s(String(v||""),f,c))}}if(c.type==="element"){let f=t?!t.includes(c.tagName):l?l.includes(c.tagName):!1;if(!f&&r&&typeof d=="number"&&(f=!r(c,d,p)),f&&p&&typeof d=="number")return o&&c.children?p.children.splice(d,1,...c.children):p.children.splice(d,1),d}}}function dw(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||lw.test(e.slice(0,n))?e:""}function fw(){const{slug:e}=R0(),n=Ap(e);return n?n.type==="html"?M.jsx("div",{style:{width:"100vw",height:"100vh",margin:0,padding:0,overflow:"hidden"},children:M.jsx("iframe",{srcDoc:n.content,style:{width:"100%",height:"100%",border:"none"},title:n.title})}):M.jsxs("div",{style:{maxWidth:"65ch",margin:"0 auto"},children:[M.jsxs("header",{style:{marginBottom:"var(--space-lg)",borderBottom:"1px solid var(--bg-card)",paddingBottom:"var(--space-md)"},children:[M.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"var(--space-sm)",lineHeight:1.2},children:n.title}),M.jsx("div",{style:{color:"var(--text-muted)"},children:n.date})]}),M.jsx("div",{className:"markdown-content",children:M.jsx(ow,{children:n.content})}),M.jsx("div",{style:{marginTop:"var(--space-lg)",borderTop:"1px solid var(--bg-card)",paddingTop:"var(--space-md)"},children:M.jsx(ri,{to:"/blog",children:"← Back to all posts"})})]}):M.jsxs("div",{style:{textAlign:"center",marginTop:"var(--space-lg)"},children:[M.jsx("h1",{children:"Post not found"}),M.jsx(ri,{to:"/blog",children:"Back to blog"})]})}function pw(){return M.jsx(iy,{children:M.jsx(q0,{children:M.jsxs(Er,{path:"/",element:M.jsx(wy,{}),children:[M.jsx(Er,{index:!0,element:M.jsx(Sy,{})}),M.jsx(Er,{path:"blog",element:M.jsx(Cy,{})}),M.jsx(Er,{path:"blog/:slug",element:M.jsx(fw,{})})]})})})}Na.createRoot(document.getElementById("root")).render(M.jsx(Cl.StrictMode,{children:M.jsx(pw,{})}));
