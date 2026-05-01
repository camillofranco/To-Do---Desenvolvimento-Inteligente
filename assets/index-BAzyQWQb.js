(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function MS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ES={exports:{}},Kt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg=Symbol.for("react.transitional.element"),Ab=Symbol.for("react.portal"),Cb=Symbol.for("react.fragment"),Rb=Symbol.for("react.strict_mode"),wb=Symbol.for("react.profiler"),Db=Symbol.for("react.consumer"),Ub=Symbol.for("react.context"),Lb=Symbol.for("react.forward_ref"),Nb=Symbol.for("react.suspense"),Ob=Symbol.for("react.memo"),TS=Symbol.for("react.lazy"),Pb=Symbol.for("react.activity"),pv=Symbol.iterator;function zb(e){return e===null||typeof e!="object"?null:(e=pv&&e[pv]||e["@@iterator"],typeof e=="function"?e:null)}var bS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},AS=Object.assign,CS={};function nu(e,t,n){this.props=e,this.context=t,this.refs=CS,this.updater=n||bS}nu.prototype.isReactComponent={};nu.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nu.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function RS(){}RS.prototype=nu.prototype;function Dg(e,t,n){this.props=e,this.context=t,this.refs=CS,this.updater=n||bS}var Ug=Dg.prototype=new RS;Ug.constructor=Dg;AS(Ug,nu.prototype);Ug.isPureReactComponent=!0;var mv=Array.isArray;function Rm(){}var We={H:null,A:null,T:null,S:null},wS=Object.prototype.hasOwnProperty;function Lg(e,t,n){var i=n.ref;return{$$typeof:wg,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Ib(e,t){return Lg(e.type,t,e.props)}function Ng(e){return typeof e=="object"&&e!==null&&e.$$typeof===wg}function Bb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _v=/\/+/g;function ep(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bb(""+e.key):t.toString(36)}function Fb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Rm,Rm):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function jo(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wg:case Ab:s=!0;break;case TS:return s=e._init,jo(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+ep(e,0):i,mv(a)?(n="",s!=null&&(n=s.replace(_v,"$&/")+"/"),jo(a,t,n,"",function(u){return u})):a!=null&&(Ng(a)&&(a=Ib(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(_v,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(mv(e))for(var l=0;l<e.length;l++)i=e[l],r=o+ep(i,l),s+=jo(i,t,n,r,a);else if(l=zb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+ep(i,l++),s+=jo(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return jo(Fb(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function sf(e,t,n){if(e==null)return e;var i=[],a=0;return jo(e,i,"","",function(r){return t.call(n,r,a++)}),i}function Hb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gv=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gb={map:sf,forEach:function(e,t,n){sf(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sf(e,function(){t++}),t},toArray:function(e){return sf(e,function(t){return t})||[]},only:function(e){if(!Ng(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Kt.Activity=Pb;Kt.Children=Gb;Kt.Component=nu;Kt.Fragment=Cb;Kt.Profiler=wb;Kt.PureComponent=Dg;Kt.StrictMode=Rb;Kt.Suspense=Nb;Kt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=We;Kt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return We.H.useMemoCache(e)}};Kt.cache=function(e){return function(){return e.apply(null,arguments)}};Kt.cacheSignal=function(){return null};Kt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=AS({},e.props),a=e.key;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)!wS.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Lg(e.type,a,i)};Kt.createContext=function(e){return e={$$typeof:Ub,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Db,_context:e},e};Kt.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)wS.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Lg(e,r,a)};Kt.createRef=function(){return{current:null}};Kt.forwardRef=function(e){return{$$typeof:Lb,render:e}};Kt.isValidElement=Ng;Kt.lazy=function(e){return{$$typeof:TS,_payload:{_status:-1,_result:e},_init:Hb}};Kt.memo=function(e,t){return{$$typeof:Ob,type:e,compare:t===void 0?null:t}};Kt.startTransition=function(e){var t=We.T,n={};We.T=n;try{var i=e(),a=We.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Rm,gv)}catch(r){gv(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),We.T=t}};Kt.unstable_useCacheRefresh=function(){return We.H.useCacheRefresh()};Kt.use=function(e){return We.H.use(e)};Kt.useActionState=function(e,t,n){return We.H.useActionState(e,t,n)};Kt.useCallback=function(e,t){return We.H.useCallback(e,t)};Kt.useContext=function(e){return We.H.useContext(e)};Kt.useDebugValue=function(){};Kt.useDeferredValue=function(e,t){return We.H.useDeferredValue(e,t)};Kt.useEffect=function(e,t){return We.H.useEffect(e,t)};Kt.useEffectEvent=function(e){return We.H.useEffectEvent(e)};Kt.useId=function(){return We.H.useId()};Kt.useImperativeHandle=function(e,t,n){return We.H.useImperativeHandle(e,t,n)};Kt.useInsertionEffect=function(e,t){return We.H.useInsertionEffect(e,t)};Kt.useLayoutEffect=function(e,t){return We.H.useLayoutEffect(e,t)};Kt.useMemo=function(e,t){return We.H.useMemo(e,t)};Kt.useOptimistic=function(e,t){return We.H.useOptimistic(e,t)};Kt.useReducer=function(e,t,n){return We.H.useReducer(e,t,n)};Kt.useRef=function(e){return We.H.useRef(e)};Kt.useState=function(e){return We.H.useState(e)};Kt.useSyncExternalStore=function(e,t,n){return We.H.useSyncExternalStore(e,t,n)};Kt.useTransition=function(){return We.H.useTransition()};Kt.version="19.2.5";ES.exports=Kt;var Ee=ES.exports;const H=MS(Ee);var DS={exports:{}},Ad={},US={exports:{}},LS={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var O=N.length;N.push(I);t:for(;0<O;){var tt=O-1>>>1,w=N[tt];if(0<a(w,I))N[tt]=I,N[O]=w,O=tt;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var I=N[0],O=N.pop();if(O!==I){N[0]=O;t:for(var tt=0,w=N.length,ut=w>>>1;tt<ut;){var Dt=2*(tt+1)-1,Yt=N[Dt],Z=Dt+1,nt=N[Z];if(0>a(Yt,O))Z<w&&0>a(nt,Yt)?(N[tt]=nt,N[Z]=O,tt=Z):(N[tt]=Yt,N[Dt]=O,tt=Dt);else if(Z<w&&0>a(nt,O))N[tt]=nt,N[Z]=O,tt=Z;else break t}}return I}function a(N,I){var O=N.sortIndex-I.sortIndex;return O!==0?O:N.id-I.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],u=[],c=1,d=null,f=3,h=!1,g=!1,_=!1,m=!1,p=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function x(N){for(var I=n(u);I!==null;){if(I.callback===null)i(u);else if(I.startTime<=N)i(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function C(N){if(_=!1,x(N),!g)if(n(l)!==null)g=!0,A||(A=!0,P());else{var I=n(u);I!==null&&K(C,I.startTime-N)}}var A=!1,E=-1,R=5,M=-1;function S(){return m?!0:!(e.unstable_now()-M<R)}function U(){if(m=!1,A){var N=e.unstable_now();M=N;var I=!0;try{t:{g=!1,_&&(_=!1,v(E),E=-1),h=!0;var O=f;try{e:{for(x(N),d=n(l);d!==null&&!(d.expirationTime>N&&S());){var tt=d.callback;if(typeof tt=="function"){d.callback=null,f=d.priorityLevel;var w=tt(d.expirationTime<=N);if(N=e.unstable_now(),typeof w=="function"){d.callback=w,x(N),I=!0;break e}d===n(l)&&i(l),x(N)}else i(l);d=n(l)}if(d!==null)I=!0;else{var ut=n(u);ut!==null&&K(C,ut.startTime-N),I=!1}}break t}finally{d=null,f=O,h=!1}I=void 0}}finally{I?P():A=!1}}}var P;if(typeof y=="function")P=function(){y(U)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Y=G.port2;G.port1.onmessage=U,P=function(){Y.postMessage(null)}}else P=function(){p(U,0)};function K(N,I){E=p(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var O=f;f=I;try{return N()}finally{f=O}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var O=f;f=N;try{return I()}finally{f=O}},e.unstable_scheduleCallback=function(N,I,O){var tt=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?tt+O:tt):O=tt,N){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=O+w,N={id:c++,callback:I,priorityLevel:N,startTime:O,expirationTime:w,sortIndex:-1},O>tt?(N.sortIndex=O,t(u,N),n(l)===null&&N===n(u)&&(_?(v(E),E=-1):_=!0,K(C,O-tt))):(N.sortIndex=w,t(l,N),g||h||(g=!0,A||(A=!0,P()))),N},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(N){var I=f;return function(){var O=f;f=I;try{return N.apply(this,arguments)}finally{f=O}}}})(LS);US.exports=LS;var Vb=US.exports,NS={exports:{}},ni={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb=Ee;function OS(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cr(){}var ei={d:{f:Cr,r:function(){throw Error(OS(522))},D:Cr,C:Cr,L:Cr,m:Cr,X:Cr,S:Cr,M:Cr},p:0,findDOMNode:null},Xb=Symbol.for("react.portal");function Wb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Vu=kb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cd(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}ni.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ei;ni.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(OS(299));return Wb(e,t,null,n)};ni.flushSync=function(e){var t=Vu.T,n=ei.p;try{if(Vu.T=null,ei.p=2,e)return e()}finally{Vu.T=t,ei.p=n,ei.d.f()}};ni.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,ei.d.C(e,t))};ni.prefetchDNS=function(e){typeof e=="string"&&ei.d.D(e)};ni.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Cd(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?ei.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&ei.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};ni.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Cd(t.as,t.crossOrigin);ei.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&ei.d.M(e)};ni.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Cd(n,t.crossOrigin);ei.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};ni.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Cd(t.as,t.crossOrigin);ei.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else ei.d.m(e)};ni.requestFormReset=function(e){ei.d.r(e)};ni.unstable_batchedUpdates=function(e,t){return e(t)};ni.useFormState=function(e,t,n){return Vu.H.useFormState(e,t,n)};ni.useFormStatus=function(){return Vu.H.useHostTransitionStatus()};ni.version="19.2.5";function PS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PS)}catch(e){console.error(e)}}PS(),NS.exports=ni;var qb=NS.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sn=Vb,zS=Ee,Yb=qb;function et(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function IS(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hc(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function BS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function FS(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vv(e){if(Hc(e)!==e)throw Error(et(188))}function Zb(e){var t=e.alternate;if(!t){if(t=Hc(e),t===null)throw Error(et(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return vv(a),e;if(r===i)return vv(a),t;r=r.sibling}throw Error(et(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(et(189))}}if(n.alternate!==i)throw Error(et(190))}if(n.tag!==3)throw Error(et(188));return n.stateNode.current===n?e:t}function HS(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=HS(e),t!==null)return t;e=e.sibling}return null}var qe=Object.assign,Kb=Symbol.for("react.element"),of=Symbol.for("react.transitional.element"),wu=Symbol.for("react.portal"),el=Symbol.for("react.fragment"),GS=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),VS=Symbol.for("react.consumer"),rr=Symbol.for("react.context"),Og=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Um=Symbol.for("react.suspense_list"),Pg=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Lm=Symbol.for("react.activity"),jb=Symbol.for("react.memo_cache_sentinel"),yv=Symbol.iterator;function hu(e){return e===null||typeof e!="object"?null:(e=yv&&e[yv]||e["@@iterator"],typeof e=="function"?e:null)}var Qb=Symbol.for("react.client.reference");function Nm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case el:return"Fragment";case wm:return"Profiler";case GS:return"StrictMode";case Dm:return"Suspense";case Um:return"SuspenseList";case Lm:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case wu:return"Portal";case rr:return e.displayName||"Context";case VS:return(e._context.displayName||"Context")+".Consumer";case Og:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pg:return t=e.displayName||null,t!==null?t:Nm(e.type)||"Memo";case Pr:t=e._payload,e=e._init;try{return Nm(e(t))}catch{}}return null}var Du=Array.isArray,Vt=zS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye=Yb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ks={pending:!1,data:null,method:null,action:null},Om=[],nl=-1;function Ha(e){return{current:e}}function wn(e){0>nl||(e.current=Om[nl],Om[nl]=null,nl--)}function Fe(e,t){nl++,Om[nl]=e.current,e.current=t}var za=Ha(null),mc=Ha(null),Jr=Ha(null),Oh=Ha(null);function Ph(e,t){switch(Fe(Jr,t),Fe(mc,e),Fe(za,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?by(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=by(t),e=l1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}wn(za),Fe(za,e)}function Ol(){wn(za),wn(mc),wn(Jr)}function Pm(e){e.memoizedState!==null&&Fe(Oh,e);var t=za.current,n=l1(t,e.type);t!==n&&(Fe(mc,e),Fe(za,n))}function zh(e){mc.current===e&&(wn(za),wn(mc)),Oh.current===e&&(wn(Oh),Ac._currentValue=Ks)}var np,xv;function Os(e){if(np===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);np=t&&t[1]||"",xv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+np+e+xv}var ip=!1;function ap(e,t){if(!e||ip)return"";ip=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(h){var f=h}Reflect.construct(e,[],d)}else{try{d.call()}catch(h){f=h}e.call(d.prototype)}}else{try{throw Error()}catch(h){f=h}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),u=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===u.length)for(i=l.length-1,a=u.length-1;1<=i&&0<=a&&l[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==u[a]){var c=`
`+l[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=a);break}}}finally{ip=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Os(n):""}function Jb(e,t){switch(e.tag){case 26:case 27:case 5:return Os(e.type);case 16:return Os("Lazy");case 13:return e.child!==t&&t!==null?Os("Suspense Fallback"):Os("Suspense");case 19:return Os("SuspenseList");case 0:case 15:return ap(e.type,!1);case 11:return ap(e.type.render,!1);case 1:return ap(e.type,!0);case 31:return Os("Activity");default:return""}}function Sv(e){try{var t="",n=null;do t+=Jb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var zm=Object.prototype.hasOwnProperty,zg=Sn.unstable_scheduleCallback,rp=Sn.unstable_cancelCallback,$b=Sn.unstable_shouldYield,tA=Sn.unstable_requestPaint,Hi=Sn.unstable_now,eA=Sn.unstable_getCurrentPriorityLevel,kS=Sn.unstable_ImmediatePriority,XS=Sn.unstable_UserBlockingPriority,Ih=Sn.unstable_NormalPriority,nA=Sn.unstable_LowPriority,WS=Sn.unstable_IdlePriority,iA=Sn.log,aA=Sn.unstable_setDisableYieldValue,Gc=null,Gi=null;function Vr(e){if(typeof iA=="function"&&aA(e),Gi&&typeof Gi.setStrictMode=="function")try{Gi.setStrictMode(Gc,e)}catch{}}var Vi=Math.clz32?Math.clz32:oA,rA=Math.log,sA=Math.LN2;function oA(e){return e>>>=0,e===0?32:31-(rA(e)/sA|0)|0}var lf=256,uf=262144,cf=4194304;function Ps(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rd(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Ps(i):(s&=o,s!==0?a=Ps(s):n||(n=o&~e,n!==0&&(a=Ps(n))))):(o=i&~r,o!==0?a=Ps(o):s!==0?a=Ps(s):n||(n=i&~e,n!==0&&(a=Ps(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Vc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lA(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qS(){var e=cf;return cf<<=1,!(cf&62914560)&&(cf=4194304),e}function sp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uA(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=s&~n;0<n;){var c=31-Vi(n),d=1<<c;o[c]=0,l[c]=-1;var f=u[c];if(f!==null)for(u[c]=null,c=0;c<f.length;c++){var h=f[c];h!==null&&(h.lane&=-536870913)}n&=~d}i!==0&&YS(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function YS(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Vi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function ZS(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Vi(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function KS(e,t){var n=t&-t;return n=n&42?1:Ig(n),n&(e.suspendedLanes|t)?0:n}function Ig(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bg(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function jS(){var e=ye.p;return e!==0?e:(e=window.event,e===void 0?32:y1(e.type))}function Mv(e,t){var n=ye.p;try{return ye.p=e,t()}finally{ye.p=n}}var Ss=Math.random().toString(36).slice(2),On="__reactFiber$"+Ss,yi="__reactProps$"+Ss,iu="__reactContainer$"+Ss,Im="__reactEvents$"+Ss,cA="__reactListeners$"+Ss,fA="__reactHandles$"+Ss,Ev="__reactResources$"+Ss,Xc="__reactMarker$"+Ss;function Fg(e){delete e[On],delete e[yi],delete e[Im],delete e[cA],delete e[fA]}function il(e){var t=e[On];if(t)return t;for(var n=e.parentNode;n;){if(t=n[iu]||n[On]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dy(e);e!==null;){if(n=e[On])return n;e=Dy(e)}return t}e=n,n=e.parentNode}return null}function au(e){if(e=e[On]||e[iu]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Uu(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(et(33))}function gl(e){var t=e[Ev];return t||(t=e[Ev]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Rn(e){e[Xc]=!0}var QS=new Set,JS={};function yo(e,t){Pl(e,t),Pl(e+"Capture",t)}function Pl(e,t){for(JS[e]=t,e=0;e<t.length;e++)QS.add(t[e])}var hA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tv={},bv={};function dA(e){return zm.call(bv,e)?!0:zm.call(Tv,e)?!1:hA.test(e)?bv[e]=!0:(Tv[e]=!0,!1)}function ah(e,t,n){if(dA(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ff(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Va(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $i(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $S(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pA(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bm(e){if(!e._valueTracker){var t=$S(e)?"checked":"value";e._valueTracker=pA(e,t,""+e[t])}}function tM(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=$S(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Bh(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mA=/[\n"\\]/g;function aa(e){return e.replace(mA,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fm(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$i(t)):e.value!==""+$i(t)&&(e.value=""+$i(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Hm(e,s,$i(t)):n!=null?Hm(e,s,$i(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+$i(o):e.removeAttribute("name")}function eM(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){Bm(e);return}n=n!=null?""+$i(n):"",t=t!=null?""+$i(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Bm(e)}function Hm(e,t,n){t==="number"&&Bh(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vl(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$i(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function nM(e,t,n){if(t!=null&&(t=""+$i(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$i(n):""}function iM(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(et(92));if(Du(i)){if(1<i.length)throw Error(et(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$i(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Bm(e)}function zl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _A=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Av(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||_A.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function aM(e,t,n){if(t!=null&&typeof t!="object")throw Error(et(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Av(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Av(e,r,t[r])}function Hg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gA=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vA=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rh(e){return vA.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sr(){}var Gm=null;function Gg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,yl=null;function Cv(e){var t=au(e);if(t&&(e=t.stateNode)){var n=e[yi]||null;t:switch(e=t.stateNode,t.type){case"input":if(Fm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+aa(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[yi]||null;if(!a)throw Error(et(90));Fm(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&tM(i)}break t;case"textarea":nM(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&vl(e,!!n.multiple,t,!1)}}}var op=!1;function rM(e,t,n){if(op)return e(t,n);op=!0;try{var i=e(t);return i}finally{if(op=!1,(al!==null||yl!==null)&&(Hd(),al&&(t=al,e=yl,yl=al=null,Cv(t),e)))for(t=0;t<e.length;t++)Cv(e[t])}}function _c(e,t){var n=e.stateNode;if(n===null)return null;var i=n[yi]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(et(231,t,typeof n));return n}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vm=!1;if(mr)try{var du={};Object.defineProperty(du,"passive",{get:function(){Vm=!0}}),window.addEventListener("test",du,du),window.removeEventListener("test",du,du)}catch{Vm=!1}var kr=null,Vg=null,sh=null;function sM(){if(sh)return sh;var e,t=Vg,n=t.length,i,a="value"in kr?kr.value:kr.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return sh=a.slice(e,1<i?1-i:void 0)}function oh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hf(){return!0}function Rv(){return!1}function Si(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?hf:Rv,this.isPropagationStopped=Rv,this}return qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hf)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hf)},persist:function(){},isPersistent:hf}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=Si(xo),Wc=qe({},xo,{view:0,detail:0}),yA=Si(Wc),lp,up,pu,Dd=qe({},Wc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pu&&(pu&&e.type==="mousemove"?(lp=e.screenX-pu.screenX,up=e.screenY-pu.screenY):up=lp=0,pu=e),lp)},movementY:function(e){return"movementY"in e?e.movementY:up}}),wv=Si(Dd),xA=qe({},Dd,{dataTransfer:0}),SA=Si(xA),MA=qe({},Wc,{relatedTarget:0}),cp=Si(MA),EA=qe({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),TA=Si(EA),bA=qe({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),AA=Si(bA),CA=qe({},xo,{data:0}),Dv=Si(CA),RA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UA(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=DA[e])?!!t[e]:!1}function kg(){return UA}var LA=qe({},Wc,{key:function(e){if(e.key){var t=RA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wA[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kg,charCode:function(e){return e.type==="keypress"?oh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),NA=Si(LA),OA=qe({},Dd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uv=Si(OA),PA=qe({},Wc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kg}),zA=Si(PA),IA=qe({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BA=Si(IA),FA=qe({},Dd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),HA=Si(FA),GA=qe({},xo,{newState:0,oldState:0}),VA=Si(GA),kA=[9,13,27,32],Xg=mr&&"CompositionEvent"in window,ku=null;mr&&"documentMode"in document&&(ku=document.documentMode);var XA=mr&&"TextEvent"in window&&!ku,oM=mr&&(!Xg||ku&&8<ku&&11>=ku),Lv=" ",Nv=!1;function lM(e,t){switch(e){case"keyup":return kA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uM(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rl=!1;function WA(e,t){switch(e){case"compositionend":return uM(t);case"keypress":return t.which!==32?null:(Nv=!0,Lv);case"textInput":return e=t.data,e===Lv&&Nv?null:e;default:return null}}function qA(e,t){if(rl)return e==="compositionend"||!Xg&&lM(e,t)?(e=sM(),sh=Vg=kr=null,rl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oM&&t.locale!=="ko"?null:t.data;default:return null}}var YA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ov(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!YA[e.type]:t==="textarea"}function cM(e,t,n,i){al?yl?yl.push(i):yl=[i]:al=i,t=nd(t,"onChange"),0<t.length&&(n=new wd("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Xu=null,gc=null;function ZA(e){r1(e,0)}function Ud(e){var t=Uu(e);if(tM(t))return e}function Pv(e,t){if(e==="change")return t}var fM=!1;if(mr){var fp;if(mr){var hp="oninput"in document;if(!hp){var zv=document.createElement("div");zv.setAttribute("oninput","return;"),hp=typeof zv.oninput=="function"}fp=hp}else fp=!1;fM=fp&&(!document.documentMode||9<document.documentMode)}function Iv(){Xu&&(Xu.detachEvent("onpropertychange",hM),gc=Xu=null)}function hM(e){if(e.propertyName==="value"&&Ud(gc)){var t=[];cM(t,gc,e,Gg(e)),rM(ZA,t)}}function KA(e,t,n){e==="focusin"?(Iv(),Xu=t,gc=n,Xu.attachEvent("onpropertychange",hM)):e==="focusout"&&Iv()}function jA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ud(gc)}function QA(e,t){if(e==="click")return Ud(t)}function JA(e,t){if(e==="input"||e==="change")return Ud(t)}function $A(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wi=typeof Object.is=="function"?Object.is:$A;function vc(e,t){if(Wi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!zm.call(t,a)||!Wi(e[a],t[a]))return!1}return!0}function Bv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fv(e,t){var n=Bv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Bv(n)}}function dM(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dM(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pM(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bh(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bh(e.document)}return t}function Wg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var t2=mr&&"documentMode"in document&&11>=document.documentMode,sl=null,km=null,Wu=null,Xm=!1;function Hv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xm||sl==null||sl!==Bh(i)||(i=sl,"selectionStart"in i&&Wg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wu&&vc(Wu,i)||(Wu=i,i=nd(km,"onSelect"),0<i.length&&(t=new wd("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=sl)))}function bs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ol={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},dp={},mM={};mr&&(mM=document.createElement("div").style,"AnimationEvent"in window||(delete ol.animationend.animation,delete ol.animationiteration.animation,delete ol.animationstart.animation),"TransitionEvent"in window||delete ol.transitionend.transition);function So(e){if(dp[e])return dp[e];if(!ol[e])return e;var t=ol[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mM)return dp[e]=t[n];return e}var _M=So("animationend"),gM=So("animationiteration"),vM=So("animationstart"),e2=So("transitionrun"),n2=So("transitionstart"),i2=So("transitioncancel"),yM=So("transitionend"),xM=new Map,Wm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wm.push("scrollEnd");function Ea(e,t){xM.set(e,t),yo(t,[e])}var Fh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ji=[],ll=0,qg=0;function Ld(){for(var e=ll,t=qg=ll=0;t<e;){var n=Ji[t];Ji[t++]=null;var i=Ji[t];Ji[t++]=null;var a=Ji[t];Ji[t++]=null;var r=Ji[t];if(Ji[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&SM(n,a,r)}}function Nd(e,t,n,i){Ji[ll++]=e,Ji[ll++]=t,Ji[ll++]=n,Ji[ll++]=i,qg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Yg(e,t,n,i){return Nd(e,t,n,i),Hh(e)}function Mo(e,t){return Nd(e,null,null,t),Hh(e)}function SM(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Vi(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function Hh(e){if(50<tc)throw tc=0,h_=null,Error(et(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ul={};function a2(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(e,t,n,i){return new a2(e,t,n,i)}function Zg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fr(e,t){var n=e.alternate;return n===null?(n=Oi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function MM(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function lh(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")Zg(e)&&(s=1);else if(typeof e=="string")s=uC(e,n,za.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Lm:return e=Oi(31,n,t,a),e.elementType=Lm,e.lanes=r,e;case el:return js(n.children,a,r,t);case GS:s=8,a|=24;break;case wm:return e=Oi(12,n,t,a|2),e.elementType=wm,e.lanes=r,e;case Dm:return e=Oi(13,n,t,a),e.elementType=Dm,e.lanes=r,e;case Um:return e=Oi(19,n,t,a),e.elementType=Um,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rr:s=10;break t;case VS:s=9;break t;case Og:s=11;break t;case Pg:s=14;break t;case Pr:s=16,i=null;break t}s=29,n=Error(et(130,e===null?"null":typeof e,"")),i=null}return t=Oi(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function js(e,t,n,i){return e=Oi(7,e,i,t),e.lanes=n,e}function pp(e,t,n){return e=Oi(6,e,null,t),e.lanes=n,e}function EM(e){var t=Oi(18,null,null,0);return t.stateNode=e,t}function mp(e,t,n){return t=Oi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gv=new WeakMap;function ra(e,t){if(typeof e=="object"&&e!==null){var n=Gv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Sv(t)},Gv.set(e,t),t)}return{value:e,source:t,stack:Sv(t)}}var cl=[],fl=0,Gh=null,yc=0,ta=[],ea=0,hs=null,Da=1,Ua="";function tr(e,t){cl[fl++]=yc,cl[fl++]=Gh,Gh=e,yc=t}function TM(e,t,n){ta[ea++]=Da,ta[ea++]=Ua,ta[ea++]=hs,hs=e;var i=Da;e=Ua;var a=32-Vi(i)-1;i&=~(1<<a),n+=1;var r=32-Vi(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Da=1<<32-Vi(t)+a|n<<a|i,Ua=r+e}else Da=1<<r|n<<a|i,Ua=e}function Kg(e){e.return!==null&&(tr(e,1),TM(e,1,0))}function jg(e){for(;e===Gh;)Gh=cl[--fl],cl[fl]=null,yc=cl[--fl],cl[fl]=null;for(;e===hs;)hs=ta[--ea],ta[ea]=null,Ua=ta[--ea],ta[ea]=null,Da=ta[--ea],ta[ea]=null}function bM(e,t){ta[ea++]=Da,ta[ea++]=Ua,ta[ea++]=hs,Da=t.id,Ua=t.overflow,hs=e}var Pn=null,ke=null,fe=!1,$r=null,sa=!1,qm=Error(et(519));function ds(e){var t=Error(et(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xc(ra(t,e)),qm}function Vv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[On]=e,t[yi]=i,n){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(n=0;n<Tc.length;n++)se(Tc[n],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),eM(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),iM(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||o1(t.textContent,n)?(i.popover!=null&&(se("beforetoggle",t),se("toggle",t)),i.onScroll!=null&&se("scroll",t),i.onScrollEnd!=null&&se("scrollend",t),i.onClick!=null&&(t.onclick=sr),t=!0):t=!1,t||ds(e,!0)}function kv(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:sa=!1;return;case 27:case 3:sa=!0;return;default:Pn=Pn.return}}function Co(e){if(e!==Pn)return!1;if(!fe)return kv(e),fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||g_(e.type,e.memoizedProps)),n=!n),n&&ke&&ds(e),kv(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));ke=wy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(317));ke=wy(e)}else t===27?(t=ke,Ms(e.type)?(e=S_,S_=null,ke=e):ke=t):ke=Pn?fa(e.stateNode.nextSibling):null;return!0}function lo(){ke=Pn=null,fe=!1}function _p(){var e=$r;return e!==null&&(oi===null?oi=e:oi.push.apply(oi,e),$r=null),e}function xc(e){$r===null?$r=[e]:$r.push(e)}var Ym=Ha(null),Eo=null,or=null;function Ir(e,t,n){Fe(Ym,t._currentValue),t._currentValue=n}function hr(e){e._currentValue=Ym.current,wn(Ym)}function Zm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Km(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Zm(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(et(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Zm(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ru(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(et(387));if(s=s.memoizedProps,s!==null){var o=a.type;Wi(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Oh.current){if(s=a.alternate,s===null)throw Error(et(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Ac):e=[Ac])}a=a.return}e!==null&&Km(t,e,n,i),t.flags|=262144}function Vh(e){for(e=e.firstContext;e!==null;){if(!Wi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function uo(e){Eo=e,or=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return AM(Eo,e)}function df(e,t){return Eo===null&&uo(e),AM(e,t)}function AM(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},or===null){if(e===null)throw Error(et(308));or=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else or=or.next=t;return n}var r2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},s2=Sn.unstable_scheduleCallback,o2=Sn.unstable_NormalPriority,pn={$$typeof:rr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qg(){return{controller:new r2,data:new Map,refCount:0}}function qc(e){e.refCount--,e.refCount===0&&s2(o2,function(){e.controller.abort()})}var qu=null,jm=0,Il=0,xl=null;function l2(e,t){if(qu===null){var n=qu=[];jm=0,Il=M0(),xl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return jm++,t.then(Xv,Xv),t}function Xv(){if(--jm===0&&qu!==null){xl!==null&&(xl.status="fulfilled");var e=qu;qu=null,Il=0,xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function u2(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Wv=Vt.S;Vt.S=function(e,t){HE=Hi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&l2(e,t),Wv!==null&&Wv(e,t)};var Qs=Ha(null);function Jg(){var e=Qs.current;return e!==null?e:ze.pooledCache}function uh(e,t){t===null?Fe(Qs,Qs.current):Fe(Qs,t.pool)}function CM(){var e=Jg();return e===null?null:{parent:pn._currentValue,pool:e}}var su=Error(et(460)),$g=Error(et(474)),Od=Error(et(542)),kh={then:function(){}};function qv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function RM(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sr,sr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zv(e),e;default:if(typeof t.status=="string")t.then(sr,sr);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(et(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Zv(e),e}throw Js=t,su}}function zs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Js=n,su):n}}var Js=null;function Yv(){if(Js===null)throw Error(et(459));var e=Js;return Js=null,e}function Zv(e){if(e===su||e===Od)throw Error(et(483))}var Sl=null,Sc=0;function pf(e){var t=Sc;return Sc+=1,Sl===null&&(Sl=[]),RM(Sl,e,t)}function mu(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mf(e,t){throw t.$$typeof===Kb?Error(et(525)):(e=Object.prototype.toString.call(t),Error(et(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wM(e){function t(p,v){if(e){var y=p.deletions;y===null?(p.deletions=[v],p.flags|=16):y.push(v)}}function n(p,v){if(!e)return null;for(;v!==null;)t(p,v),v=v.sibling;return null}function i(p){for(var v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function a(p,v){return p=fr(p,v),p.index=0,p.sibling=null,p}function r(p,v,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<v?(p.flags|=67108866,v):y):(p.flags|=67108866,v)):(p.flags|=1048576,v)}function s(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function o(p,v,y,x){return v===null||v.tag!==6?(v=pp(y,p.mode,x),v.return=p,v):(v=a(v,y),v.return=p,v)}function l(p,v,y,x){var C=y.type;return C===el?c(p,v,y.props.children,x,y.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pr&&zs(C)===v.type)?(v=a(v,y.props),mu(v,y),v.return=p,v):(v=lh(y.type,y.key,y.props,null,p.mode,x),mu(v,y),v.return=p,v)}function u(p,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=mp(y,p.mode,x),v.return=p,v):(v=a(v,y.children||[]),v.return=p,v)}function c(p,v,y,x,C){return v===null||v.tag!==7?(v=js(y,p.mode,x,C),v.return=p,v):(v=a(v,y),v.return=p,v)}function d(p,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=pp(""+v,p.mode,y),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case of:return y=lh(v.type,v.key,v.props,null,p.mode,y),mu(y,v),y.return=p,y;case wu:return v=mp(v,p.mode,y),v.return=p,v;case Pr:return v=zs(v),d(p,v,y)}if(Du(v)||hu(v))return v=js(v,p.mode,y,null),v.return=p,v;if(typeof v.then=="function")return d(p,pf(v),y);if(v.$$typeof===rr)return d(p,df(p,v),y);mf(p,v)}return null}function f(p,v,y,x){var C=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return C!==null?null:o(p,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case of:return y.key===C?l(p,v,y,x):null;case wu:return y.key===C?u(p,v,y,x):null;case Pr:return y=zs(y),f(p,v,y,x)}if(Du(y)||hu(y))return C!==null?null:c(p,v,y,x,null);if(typeof y.then=="function")return f(p,v,pf(y),x);if(y.$$typeof===rr)return f(p,v,df(p,y),x);mf(p,y)}return null}function h(p,v,y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(y)||null,o(v,p,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case of:return p=p.get(x.key===null?y:x.key)||null,l(v,p,x,C);case wu:return p=p.get(x.key===null?y:x.key)||null,u(v,p,x,C);case Pr:return x=zs(x),h(p,v,y,x,C)}if(Du(x)||hu(x))return p=p.get(y)||null,c(v,p,x,C,null);if(typeof x.then=="function")return h(p,v,y,pf(x),C);if(x.$$typeof===rr)return h(p,v,y,df(v,x),C);mf(v,x)}return null}function g(p,v,y,x){for(var C=null,A=null,E=v,R=v=0,M=null;E!==null&&R<y.length;R++){E.index>R?(M=E,E=null):M=E.sibling;var S=f(p,E,y[R],x);if(S===null){E===null&&(E=M);break}e&&E&&S.alternate===null&&t(p,E),v=r(S,v,R),A===null?C=S:A.sibling=S,A=S,E=M}if(R===y.length)return n(p,E),fe&&tr(p,R),C;if(E===null){for(;R<y.length;R++)E=d(p,y[R],x),E!==null&&(v=r(E,v,R),A===null?C=E:A.sibling=E,A=E);return fe&&tr(p,R),C}for(E=i(E);R<y.length;R++)M=h(E,p,R,y[R],x),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?R:M.key),v=r(M,v,R),A===null?C=M:A.sibling=M,A=M);return e&&E.forEach(function(U){return t(p,U)}),fe&&tr(p,R),C}function _(p,v,y,x){if(y==null)throw Error(et(151));for(var C=null,A=null,E=v,R=v=0,M=null,S=y.next();E!==null&&!S.done;R++,S=y.next()){E.index>R?(M=E,E=null):M=E.sibling;var U=f(p,E,S.value,x);if(U===null){E===null&&(E=M);break}e&&E&&U.alternate===null&&t(p,E),v=r(U,v,R),A===null?C=U:A.sibling=U,A=U,E=M}if(S.done)return n(p,E),fe&&tr(p,R),C;if(E===null){for(;!S.done;R++,S=y.next())S=d(p,S.value,x),S!==null&&(v=r(S,v,R),A===null?C=S:A.sibling=S,A=S);return fe&&tr(p,R),C}for(E=i(E);!S.done;R++,S=y.next())S=h(E,p,R,S.value,x),S!==null&&(e&&S.alternate!==null&&E.delete(S.key===null?R:S.key),v=r(S,v,R),A===null?C=S:A.sibling=S,A=S);return e&&E.forEach(function(P){return t(p,P)}),fe&&tr(p,R),C}function m(p,v,y,x){if(typeof y=="object"&&y!==null&&y.type===el&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case of:t:{for(var C=y.key;v!==null;){if(v.key===C){if(C=y.type,C===el){if(v.tag===7){n(p,v.sibling),x=a(v,y.props.children),x.return=p,p=x;break t}}else if(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pr&&zs(C)===v.type){n(p,v.sibling),x=a(v,y.props),mu(x,y),x.return=p,p=x;break t}n(p,v);break}else t(p,v);v=v.sibling}y.type===el?(x=js(y.props.children,p.mode,x,y.key),x.return=p,p=x):(x=lh(y.type,y.key,y.props,null,p.mode,x),mu(x,y),x.return=p,p=x)}return s(p);case wu:t:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(p,v.sibling),x=a(v,y.children||[]),x.return=p,p=x;break t}else{n(p,v);break}else t(p,v);v=v.sibling}x=mp(y,p.mode,x),x.return=p,p=x}return s(p);case Pr:return y=zs(y),m(p,v,y,x)}if(Du(y))return g(p,v,y,x);if(hu(y)){if(C=hu(y),typeof C!="function")throw Error(et(150));return y=C.call(y),_(p,v,y,x)}if(typeof y.then=="function")return m(p,v,pf(y),x);if(y.$$typeof===rr)return m(p,v,df(p,y),x);mf(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(n(p,v.sibling),x=a(v,y),x.return=p,p=x):(n(p,v),x=pp(y,p.mode,x),x.return=p,p=x),s(p)):n(p,v)}return function(p,v,y,x){try{Sc=0;var C=m(p,v,y,x);return Sl=null,C}catch(E){if(E===su||E===Od)throw E;var A=Oi(29,E,null,p.mode);return A.lanes=x,A.return=p,A}finally{}}}var co=wM(!0),DM=wM(!1),zr=!1;function t0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ts(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function es(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ve&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Hh(e),SM(e,null,n),t}return Nd(e,i,t,n),Hh(e)}function Yu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ZS(e,n)}}function gp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Jm=!1;function Zu(){if(Jm){var e=xl;if(e!==null)throw e}}function Ku(e,t,n,i){Jm=!1;var a=e.updateQueue;zr=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(r!==null){var d=a.baseState;s=0,c=u=l=null,o=r;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?(ue&f)===f:(i&f)===f){f!==0&&f===Il&&(Jm=!0),c!==null&&(c=c.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var g=e,_=o;f=t;var m=n;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(m,d,f);break t}d=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(m,d,f):g,f==null)break t;d=qe({},d,f);break t;case 2:zr=!0}}f=o.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=a.callbacks,h===null?a.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);c===null&&(l=d),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,r===null&&(a.shared.lanes=0),ms|=s,e.lanes=s,e.memoizedState=d}}function UM(e,t){if(typeof e!="function")throw Error(et(191,e));e.call(t)}function LM(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)UM(n[e],t)}var Bl=Ha(null),Xh=Ha(0);function Kv(e,t){e=yr,Fe(Xh,e),Fe(Bl,t),yr=e|t.baseLanes}function $m(){Fe(Xh,yr),Fe(Bl,Bl.current)}function e0(){yr=Xh.current,wn(Bl),wn(Xh)}var qi=Ha(null),ca=null;function Br(e){var t=e.alternate;Fe(rn,rn.current&1),Fe(qi,e),ca===null&&(t===null||Bl.current!==null||t.memoizedState!==null)&&(ca=e)}function t_(e){Fe(rn,rn.current),Fe(qi,e),ca===null&&(ca=e)}function NM(e){e.tag===22?(Fe(rn,rn.current),Fe(qi,e),ca===null&&(ca=e)):Fr()}function Fr(){Fe(rn,rn.current),Fe(qi,qi.current)}function Ui(e){wn(qi),ca===e&&(ca=null),wn(rn)}var rn=Ha(0);function Wh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||y_(n)||x_(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _r=0,jt=null,Ue=null,fn=null,qh=!1,Ml=!1,fo=!1,Yh=0,Mc=0,El=null,c2=0;function $e(){throw Error(et(321))}function n0(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wi(e[n],t[n]))return!1;return!0}function i0(e,t,n,i,a,r){return _r=r,jt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vt.H=e===null||e.memoizedState===null?cE:p0,fo=!1,r=n(i,a),fo=!1,Ml&&(r=PM(t,n,i,a)),OM(e),r}function OM(e){Vt.H=Ec;var t=Ue!==null&&Ue.next!==null;if(_r=0,fn=Ue=jt=null,qh=!1,Mc=0,El=null,t)throw Error(et(300));e===null||mn||(e=e.dependencies,e!==null&&Vh(e)&&(mn=!0))}function PM(e,t,n,i){jt=e;var a=0;do{if(Ml&&(El=null),Mc=0,Ml=!1,25<=a)throw Error(et(301));if(a+=1,fn=Ue=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Vt.H=fE,r=t(n,i)}while(Ml);return r}function f2(){var e=Vt.H,t=e.useState()[0];return t=typeof t.then=="function"?Yc(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(jt.flags|=1024),t}function a0(){var e=Yh!==0;return Yh=0,e}function r0(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function s0(e){if(qh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}qh=!1}_r=0,fn=Ue=jt=null,Ml=!1,Mc=Yh=0,El=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?jt.memoizedState=fn=e:fn=fn.next=e,fn}function on(){if(Ue===null){var e=jt.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=fn===null?jt.memoizedState:fn.next;if(t!==null)fn=t,Ue=e;else{if(e===null)throw jt.alternate===null?Error(et(467)):Error(et(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},fn===null?jt.memoizedState=fn=e:fn=fn.next=e}return fn}function Pd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yc(e){var t=Mc;return Mc+=1,El===null&&(El=[]),e=RM(El,e,t),t=jt,(fn===null?t.memoizedState:fn.next)===null&&(t=t.alternate,Vt.H=t===null||t.memoizedState===null?cE:p0),e}function zd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yc(e);if(e.$$typeof===rr)return zn(e)}throw Error(et(438,String(e)))}function o0(e){var t=null,n=jt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=jt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Pd(),jt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=jb;return t.index++,n}function gr(e,t){return typeof t=="function"?t(e):t}function ch(e){var t=on();return l0(t,Ue,e)}function l0(e,t,n){var i=e.queue;if(i===null)throw Error(et(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,u=t,c=!1;do{var d=u.lane&-536870913;if(d!==u.lane?(ue&d)===d:(_r&d)===d){var f=u.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),d===Il&&(c=!0);else if((_r&f)===f){u=u.next,f===Il&&(c=!0);continue}else d={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=d,s=r):l=l.next=d,jt.lanes|=f,ms|=f;d=u.action,fo&&n(r,d),r=u.hasEagerState?u.eagerState:n(r,d)}else f={lane:d,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,jt.lanes|=d,ms|=d;u=u.next}while(u!==null&&u!==t);if(l===null?s=r:l.next=o,!Wi(r,e.memoizedState)&&(mn=!0,c&&(n=xl,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function vp(e){var t=on(),n=t.queue;if(n===null)throw Error(et(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Wi(r,t.memoizedState)||(mn=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function zM(e,t,n){var i=jt,a=on(),r=fe;if(r){if(n===void 0)throw Error(et(407));n=n()}else n=t();var s=!Wi((Ue||a).memoizedState,n);if(s&&(a.memoizedState=n,mn=!0),a=a.queue,u0(FM.bind(null,i,a,e),[e]),a.getSnapshot!==t||s||fn!==null&&fn.memoizedState.tag&1){if(i.flags|=2048,Fl(9,{destroy:void 0},BM.bind(null,i,a,n,t),null),ze===null)throw Error(et(349));r||_r&127||IM(i,t,n)}return n}function IM(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=jt.updateQueue,t===null?(t=Pd(),jt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function BM(e,t,n,i){t.value=n,t.getSnapshot=i,HM(t)&&GM(e)}function FM(e,t,n){return n(function(){HM(t)&&GM(e)})}function HM(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wi(e,n)}catch{return!0}}function GM(e){var t=Mo(e,2);t!==null&&fi(t,e,2)}function e_(e){var t=jn();if(typeof e=="function"){var n=e;if(e=n(),fo){Vr(!0);try{n()}finally{Vr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},t}function VM(e,t,n,i){return e.baseState=n,l0(e,Ue,typeof i=="function"?i:gr)}function h2(e,t,n,i,a){if(Bd(e))throw Error(et(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Vt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,kM(t,r)):(r.next=n.next,t.pending=n.next=r)}}function kM(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Vt.T,s={};Vt.T=s;try{var o=n(a,i),l=Vt.S;l!==null&&l(s,o),jv(e,t,o)}catch(u){n_(e,t,u)}finally{r!==null&&s.types!==null&&(r.types=s.types),Vt.T=r}}else try{r=n(a,i),jv(e,t,r)}catch(u){n_(e,t,u)}}function jv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Qv(e,t,i)},function(i){return n_(e,t,i)}):Qv(e,t,n)}function Qv(e,t,n){t.status="fulfilled",t.value=n,XM(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,kM(e,n)))}function n_(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,XM(t),t=t.next;while(t!==i)}e.action=null}function XM(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function WM(e,t){return t}function Jv(e,t){if(fe){var n=ze.formState;if(n!==null){t:{var i=jt;if(fe){if(ke){e:{for(var a=ke,r=sa;a.nodeType!==8;){if(!r){a=null;break e}if(a=fa(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){ke=fa(a.nextSibling),i=a.data==="F!";break t}}ds(i)}i=!1}i&&(t=n[0])}}return n=jn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:WM,lastRenderedState:t},n.queue=i,n=oE.bind(null,jt,i),i.dispatch=n,i=e_(!1),r=d0.bind(null,jt,!1,i.queue),i=jn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=h2.bind(null,jt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function $v(e){var t=on();return qM(t,Ue,e)}function qM(e,t,n){if(t=l0(e,t,WM)[0],e=ch(gr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Yc(t)}catch(s){throw s===su?Od:s}else i=t;t=on();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(jt.flags|=2048,Fl(9,{destroy:void 0},d2.bind(null,a,n),null)),[i,r,e]}function d2(e,t){e.action=t}function ty(e){var t=on(),n=Ue;if(n!==null)return qM(t,n,e);on(),t=t.memoizedState,n=on();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Fl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=jt.updateQueue,t===null&&(t=Pd(),jt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function YM(){return on().memoizedState}function fh(e,t,n,i){var a=jn();jt.flags|=e,a.memoizedState=Fl(1|t,{destroy:void 0},n,i===void 0?null:i)}function Id(e,t,n,i){var a=on();i=i===void 0?null:i;var r=a.memoizedState.inst;Ue!==null&&i!==null&&n0(i,Ue.memoizedState.deps)?a.memoizedState=Fl(t,r,n,i):(jt.flags|=e,a.memoizedState=Fl(1|t,r,n,i))}function ey(e,t){fh(8390656,8,e,t)}function u0(e,t){Id(2048,8,e,t)}function p2(e){jt.flags|=4;var t=jt.updateQueue;if(t===null)t=Pd(),jt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ZM(e){var t=on().memoizedState;return p2({ref:t,nextImpl:e}),function(){if(ve&2)throw Error(et(440));return t.impl.apply(void 0,arguments)}}function KM(e,t){return Id(4,2,e,t)}function jM(e,t){return Id(4,4,e,t)}function QM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function JM(e,t,n){n=n!=null?n.concat([e]):null,Id(4,4,QM.bind(null,t,e),n)}function c0(){}function $M(e,t){var n=on();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&n0(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function tE(e,t){var n=on();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&n0(t,i[1]))return i[0];if(i=e(),fo){Vr(!0);try{e()}finally{Vr(!1)}}return n.memoizedState=[i,t],i}function f0(e,t,n){return n===void 0||_r&1073741824&&!(ue&261930)?e.memoizedState=t:(e.memoizedState=n,e=VE(),jt.lanes|=e,ms|=e,n)}function eE(e,t,n,i){return Wi(n,t)?n:Bl.current!==null?(e=f0(e,n,i),Wi(e,t)||(mn=!0),e):!(_r&42)||_r&1073741824&&!(ue&261930)?(mn=!0,e.memoizedState=n):(e=VE(),jt.lanes|=e,ms|=e,t)}function nE(e,t,n,i,a){var r=ye.p;ye.p=r!==0&&8>r?r:8;var s=Vt.T,o={};Vt.T=o,d0(e,!1,t,n);try{var l=a(),u=Vt.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=u2(l,i);ju(e,t,c,ki(e))}else ju(e,t,i,ki(e))}catch(d){ju(e,t,{then:function(){},status:"rejected",reason:d},ki())}finally{ye.p=r,s!==null&&o.types!==null&&(s.types=o.types),Vt.T=s}}function m2(){}function i_(e,t,n,i){if(e.tag!==5)throw Error(et(476));var a=iE(e).queue;nE(e,a,t,Ks,n===null?m2:function(){return aE(e),n(i)})}function iE(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ks,baseState:Ks,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:Ks},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function aE(e){var t=iE(e);t.next===null&&(t=e.alternate.memoizedState),ju(e,t.next.queue,{},ki())}function h0(){return zn(Ac)}function rE(){return on().memoizedState}function sE(){return on().memoizedState}function _2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ki();e=ts(n);var i=es(t,e,n);i!==null&&(fi(i,t,n),Yu(i,t,n)),t={cache:Qg()},e.payload=t;return}t=t.return}}function g2(e,t,n){var i=ki();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bd(e)?lE(t,n):(n=Yg(e,t,n,i),n!==null&&(fi(n,e,i),uE(n,t,i)))}function oE(e,t,n){var i=ki();ju(e,t,n,i)}function ju(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bd(e))lE(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Wi(o,s))return Nd(e,t,a,0),ze===null&&Ld(),!1}catch{}finally{}if(n=Yg(e,t,a,i),n!==null)return fi(n,e,i),uE(n,t,i),!0}return!1}function d0(e,t,n,i){if(i={lane:2,revertLane:M0(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Bd(e)){if(t)throw Error(et(479))}else t=Yg(e,n,i,2),t!==null&&fi(t,e,2)}function Bd(e){var t=e.alternate;return e===jt||t!==null&&t===jt}function lE(e,t){Ml=qh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uE(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ZS(e,n)}}var Ec={readContext:zn,use:zd,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Ec.useEffectEvent=$e;var cE={readContext:zn,use:zd,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:zn,useEffect:ey,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,fh(4194308,4,QM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fh(4194308,4,e,t)},useInsertionEffect:function(e,t){fh(4,2,e,t)},useMemo:function(e,t){var n=jn();t=t===void 0?null:t;var i=e();if(fo){Vr(!0);try{e()}finally{Vr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=jn();if(n!==void 0){var a=n(t);if(fo){Vr(!0);try{n(t)}finally{Vr(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=g2.bind(null,jt,e),[i.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:function(e){e=e_(e);var t=e.queue,n=oE.bind(null,jt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:c0,useDeferredValue:function(e,t){var n=jn();return f0(n,e,t)},useTransition:function(){var e=e_(!1);return e=nE.bind(null,jt,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=jt,a=jn();if(fe){if(n===void 0)throw Error(et(407));n=n()}else{if(n=t(),ze===null)throw Error(et(349));ue&127||IM(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,ey(FM.bind(null,i,r,e),[e]),i.flags|=2048,Fl(9,{destroy:void 0},BM.bind(null,i,r,n,t),null),n},useId:function(){var e=jn(),t=ze.identifierPrefix;if(fe){var n=Ua,i=Da;n=(i&~(1<<32-Vi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Yh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=c2++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:h0,useFormState:Jv,useActionState:Jv,useOptimistic:function(e){var t=jn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=d0.bind(null,jt,!0,n),n.dispatch=t,[e,t]},useMemoCache:o0,useCacheRefresh:function(){return jn().memoizedState=_2.bind(null,jt)},useEffectEvent:function(e){var t=jn(),n={impl:e};return t.memoizedState=n,function(){if(ve&2)throw Error(et(440));return n.impl.apply(void 0,arguments)}}},p0={readContext:zn,use:zd,useCallback:$M,useContext:zn,useEffect:u0,useImperativeHandle:JM,useInsertionEffect:KM,useLayoutEffect:jM,useMemo:tE,useReducer:ch,useRef:YM,useState:function(){return ch(gr)},useDebugValue:c0,useDeferredValue:function(e,t){var n=on();return eE(n,Ue.memoizedState,e,t)},useTransition:function(){var e=ch(gr)[0],t=on().memoizedState;return[typeof e=="boolean"?e:Yc(e),t]},useSyncExternalStore:zM,useId:rE,useHostTransitionStatus:h0,useFormState:$v,useActionState:$v,useOptimistic:function(e,t){var n=on();return VM(n,Ue,e,t)},useMemoCache:o0,useCacheRefresh:sE};p0.useEffectEvent=ZM;var fE={readContext:zn,use:zd,useCallback:$M,useContext:zn,useEffect:u0,useImperativeHandle:JM,useInsertionEffect:KM,useLayoutEffect:jM,useMemo:tE,useReducer:vp,useRef:YM,useState:function(){return vp(gr)},useDebugValue:c0,useDeferredValue:function(e,t){var n=on();return Ue===null?f0(n,e,t):eE(n,Ue.memoizedState,e,t)},useTransition:function(){var e=vp(gr)[0],t=on().memoizedState;return[typeof e=="boolean"?e:Yc(e),t]},useSyncExternalStore:zM,useId:rE,useHostTransitionStatus:h0,useFormState:ty,useActionState:ty,useOptimistic:function(e,t){var n=on();return Ue!==null?VM(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:o0,useCacheRefresh:sE};fE.useEffectEvent=ZM;function yp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var a_={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ki(),a=ts(i);a.payload=t,n!=null&&(a.callback=n),t=es(e,a,i),t!==null&&(fi(t,e,i),Yu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ki(),a=ts(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=es(e,a,i),t!==null&&(fi(t,e,i),Yu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ki(),i=ts(n);i.tag=2,t!=null&&(i.callback=t),t=es(e,i,n),t!==null&&(fi(t,e,n),Yu(t,e,n))}};function ny(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!vc(n,i)||!vc(a,r):!0}function iy(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&a_.enqueueReplaceState(t,t.state,null)}function ho(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=qe({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function hE(e){Fh(e)}function dE(e){console.error(e)}function pE(e){Fh(e)}function Zh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ay(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function r_(e,t,n){return n=ts(n),n.tag=3,n.payload={element:null},n.callback=function(){Zh(e,t)},n}function mE(e){return e=ts(e),e.tag=3,e}function _E(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){ay(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){ay(t,n,i),typeof a!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function v2(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ru(t,n,a,!0),n=qi.current,n!==null){switch(n.tag){case 31:case 13:return ca===null?$h():n.alternate===null&&tn===0&&(tn=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===kh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dp(e,i,a)),!1;case 22:return n.flags|=65536,i===kh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dp(e,i,a)),!1}throw Error(et(435,n.tag))}return Dp(e,i,a),$h(),!1}if(fe)return t=qi.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==qm&&(e=Error(et(422),{cause:i}),xc(ra(e,n)))):(i!==qm&&(t=Error(et(423),{cause:i}),xc(ra(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ra(i,n),a=r_(e.stateNode,i,a),gp(e,a),tn!==4&&(tn=2)),!1;var r=Error(et(520),{cause:i});if(r=ra(r,n),$u===null?$u=[r]:$u.push(r),tn!==4&&(tn=2),t===null)return!0;i=ra(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=r_(n.stateNode,i,e),gp(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ns===null||!ns.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=mE(a),_E(a,e,n,i),gp(n,a),!1}n=n.return}while(n!==null);return!1}var m0=Error(et(461)),mn=!1;function Nn(e,t,n,i){t.child=e===null?DM(t,null,n,i):co(t,e.child,n,i)}function ry(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return uo(t),i=i0(e,t,n,s,r,a),o=a0(),e!==null&&!mn?(r0(e,t,a),vr(e,t,a)):(fe&&o&&Kg(t),t.flags|=1,Nn(e,t,i,a),t.child)}function sy(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!Zg(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,gE(e,t,r,i,a)):(e=lh(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!_0(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:vc,n(s,i)&&e.ref===t.ref)return vr(e,t,a)}return t.flags|=1,e=fr(r,i),e.ref=t.ref,e.return=t,t.child=e}function gE(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(vc(r,i)&&e.ref===t.ref)if(mn=!1,t.pendingProps=i=r,_0(e,a))e.flags&131072&&(mn=!0);else return t.lanes=e.lanes,vr(e,t,a)}return s_(e,t,n,i,a)}function vE(e,t,n,i){var a=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,t.child=null;return oy(e,t,r,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&uh(t,r!==null?r.cachePool:null),r!==null?Kv(t,r):$m(),NM(t);else return i=t.lanes=536870912,oy(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(uh(t,r.cachePool),Kv(t,r),Fr(),t.memoizedState=null):(e!==null&&uh(t,null),$m(),Fr());return Nn(e,t,a,n),t.child}function Lu(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function oy(e,t,n,i,a){var r=Jg();return r=r===null?null:{parent:pn._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&uh(t,null),$m(),NM(t),e!==null&&ru(e,t,i,!0),t.childLanes=a,null}function hh(e,t){return t=Kh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ly(e,t,n){return co(t,e.child,null,n),e=hh(t,t.pendingProps),e.flags|=2,Ui(t),t.memoizedState=null,e}function y2(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(i.mode==="hidden")return e=hh(t,i),t.lanes=536870912,Lu(null,e);if(t_(t),(e=ke)?(e=c1(e,sa),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hs!==null?{id:Da,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},n=EM(e),n.return=t,t.child=n,Pn=t,ke=null)):e=null,e===null)throw ds(t);return t.lanes=536870912,null}return hh(t,i)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(t_(t),a)if(t.flags&256)t.flags&=-257,t=ly(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(et(558));else if(mn||ru(e,t,n,!1),a=(n&e.childLanes)!==0,mn||a){if(i=ze,i!==null&&(s=KS(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Mo(e,s),fi(i,e,s),m0;$h(),t=ly(e,t,n)}else e=r.treeContext,ke=fa(s.nextSibling),Pn=t,fe=!0,$r=null,sa=!1,e!==null&&bM(t,e),t=hh(t,i),t.flags|=4096;return t}return e=fr(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dh(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(et(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function s_(e,t,n,i,a){return uo(t),n=i0(e,t,n,i,void 0,a),i=a0(),e!==null&&!mn?(r0(e,t,a),vr(e,t,a)):(fe&&i&&Kg(t),t.flags|=1,Nn(e,t,n,a),t.child)}function uy(e,t,n,i,a,r){return uo(t),t.updateQueue=null,n=PM(t,i,n,a),OM(e),i=a0(),e!==null&&!mn?(r0(e,t,r),vr(e,t,r)):(fe&&i&&Kg(t),t.flags|=1,Nn(e,t,n,r),t.child)}function cy(e,t,n,i,a){if(uo(t),t.stateNode===null){var r=ul,s=n.contextType;typeof s=="object"&&s!==null&&(r=zn(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=a_,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},t0(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?zn(s):ul,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(yp(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&a_.enqueueReplaceState(r,r.state,null),Ku(t,i,r,a),Zu(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=ho(n,o);r.props=l;var u=r.context,c=n.contextType;s=ul,typeof c=="object"&&c!==null&&(s=zn(c));var d=n.getDerivedStateFromProps;c=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||u!==s)&&iy(t,r,i,s),zr=!1;var f=t.memoizedState;r.state=f,Ku(t,i,r,a),Zu(),u=t.memoizedState,o||f!==u||zr?(typeof d=="function"&&(yp(t,n,d,i),u=t.memoizedState),(l=zr||ny(t,n,l,i,f,u,s))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=u),r.props=i,r.state=u,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Qm(e,t),s=t.memoizedProps,c=ho(n,s),r.props=c,d=t.pendingProps,f=r.context,u=n.contextType,l=ul,typeof u=="object"&&u!==null&&(l=zn(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==d||f!==l)&&iy(t,r,i,l),zr=!1,f=t.memoizedState,r.state=f,Ku(t,i,r,a),Zu();var h=t.memoizedState;s!==d||f!==h||zr||e!==null&&e.dependencies!==null&&Vh(e.dependencies)?(typeof o=="function"&&(yp(t,n,o,i),h=t.memoizedState),(c=zr||ny(t,n,c,i,f,h,l)||e!==null&&e.dependencies!==null&&Vh(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,h,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,h,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=l,i=c):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,dh(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=co(t,e.child,null,a),t.child=co(t,null,n,a)):Nn(e,t,n,a),t.memoizedState=r.state,e=t.child):e=vr(e,t,a),e}function fy(e,t,n,i){return lo(),t.flags|=256,Nn(e,t,n,i),t.child}var xp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sp(e){return{baseLanes:e,cachePool:CM()}}function Mp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ii),e}function yE(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(a?Br(t):Fr(),(e=ke)?(e=c1(e,sa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hs!==null?{id:Da,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},n=EM(e),n.return=t,t.child=n,Pn=t,ke=null)):e=null,e===null)throw ds(t);return x_(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Fr(),a=t.mode,o=Kh({mode:"hidden",children:o},a),i=js(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Sp(n),i.childLanes=Mp(e,s,n),t.memoizedState=xp,Lu(null,i)):(Br(t),o_(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Br(t),t.flags&=-257,t=Ep(e,t,n)):t.memoizedState!==null?(Fr(),t.child=e.child,t.flags|=128,t=null):(Fr(),o=i.fallback,a=t.mode,i=Kh({mode:"visible",children:i.children},a),o=js(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,co(t,e.child,null,n),i=t.child,i.memoizedState=Sp(n),i.childLanes=Mp(e,s,n),t.memoizedState=xp,t=Lu(null,i));else if(Br(t),x_(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var u=s.dgst;s=u,i=Error(et(419)),i.stack="",i.digest=s,xc({value:i,source:null,stack:null}),t=Ep(e,t,n)}else if(mn||ru(e,t,n,!1),s=(n&e.childLanes)!==0,mn||s){if(s=ze,s!==null&&(i=KS(s,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Mo(e,i),fi(s,e,i),m0;y_(o)||$h(),t=Ep(e,t,n)}else y_(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ke=fa(o.nextSibling),Pn=t,fe=!0,$r=null,sa=!1,e!==null&&bM(t,e),t=o_(t,i.children),t.flags|=4096);return t}return a?(Fr(),o=i.fallback,a=t.mode,l=e.child,u=l.sibling,i=fr(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=fr(u,o):(o=js(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Lu(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Sp(n):(a=o.cachePool,a!==null?(l=pn._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=CM(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Mp(e,s,n),t.memoizedState=xp,Lu(e.child,i)):(Br(t),n=e.child,e=n.sibling,n=fr(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function o_(e,t){return t=Kh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Kh(e,t){return e=Oi(22,e,null,t),e.lanes=0,e}function Ep(e,t,n){return co(t,e.child,null,n),e=o_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Zm(e.return,t,n)}function Tp(e,t,n,i,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function xE(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=rn.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,Fe(rn,s),Nn(e,t,i,n),i=fe?yc:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hy(e,n,t);else if(e.tag===19)hy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Wh(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Tp(t,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Wh(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Tp(t,!0,n,null,r,i);break;case"together":Tp(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function vr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ms|=t.lanes,!(n&t.childLanes))if(e!==null){if(ru(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(et(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _0(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Vh(e)))}function x2(e,t,n){switch(t.tag){case 3:Ph(t,t.stateNode.containerInfo),Ir(t,pn,e.memoizedState.cache),lo();break;case 27:case 5:Pm(t);break;case 4:Ph(t,t.stateNode.containerInfo);break;case 10:Ir(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,t_(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Br(t),t.flags|=128,null):n&t.child.childLanes?yE(e,t,n):(Br(t),e=vr(e,t,n),e!==null?e.sibling:null);Br(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ru(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return xE(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Fe(rn,rn.current),i)break;return null;case 22:return t.lanes=0,vE(e,t,n,t.pendingProps);case 24:Ir(t,pn,e.memoizedState.cache)}return vr(e,t,n)}function SE(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)mn=!0;else{if(!_0(e,n)&&!(t.flags&128))return mn=!1,x2(e,t,n);mn=!!(e.flags&131072)}else mn=!1,fe&&t.flags&1048576&&TM(t,yc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=zs(t.elementType),t.type=e,typeof e=="function")Zg(e)?(i=ho(e,i),t.tag=1,t=cy(null,t,e,i,n)):(t.tag=0,t=s_(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Og){t.tag=11,t=ry(null,t,e,i,n);break t}else if(a===Pg){t.tag=14,t=sy(null,t,e,i,n);break t}}throw t=Nm(e)||e,Error(et(306,t,""))}}return t;case 0:return s_(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=ho(i,t.pendingProps),cy(e,t,i,a,n);case 3:t:{if(Ph(t,t.stateNode.containerInfo),e===null)throw Error(et(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Qm(e,t),Ku(t,i,null,n);var s=t.memoizedState;if(i=s.cache,Ir(t,pn,i),i!==r.cache&&Km(t,[pn],n,!0),Zu(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fy(e,t,i,n);break t}else if(i!==a){a=ra(Error(et(424)),t),xc(a),t=fy(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=fa(e.firstChild),Pn=t,fe=!0,$r=null,sa=!0,n=DM(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(lo(),i===a){t=vr(e,t,n);break t}Nn(e,t,i,n)}t=t.child}return t;case 26:return dh(e,t),e===null?(n=Ly(t.type,null,t.pendingProps,null))?t.memoizedState=n:fe||(n=t.type,e=t.pendingProps,i=id(Jr.current).createElement(n),i[On]=t,i[yi]=e,Bn(i,n,e),Rn(i),t.stateNode=i):t.memoizedState=Ly(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pm(t),e===null&&fe&&(i=t.stateNode=f1(t.type,t.pendingProps,Jr.current),Pn=t,sa=!0,a=ke,Ms(t.type)?(S_=a,ke=fa(i.firstChild)):ke=a),Nn(e,t,t.pendingProps.children,n),dh(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((a=i=ke)&&(i=j2(i,t.type,t.pendingProps,sa),i!==null?(t.stateNode=i,Pn=t,ke=fa(i.firstChild),sa=!1,a=!0):a=!1),a||ds(t)),Pm(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,g_(a,r)?i=null:s!==null&&g_(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=i0(e,t,f2,null,null,n),Ac._currentValue=a),dh(e,t),Nn(e,t,i,n),t.child;case 6:return e===null&&fe&&((e=n=ke)&&(n=Q2(n,t.pendingProps,sa),n!==null?(t.stateNode=n,Pn=t,ke=null,e=!0):e=!1),e||ds(t)),null;case 13:return yE(e,t,n);case 4:return Ph(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=co(t,null,i,n):Nn(e,t,i,n),t.child;case 11:return ry(e,t,t.type,t.pendingProps,n);case 7:return Nn(e,t,t.pendingProps,n),t.child;case 8:return Nn(e,t,t.pendingProps.children,n),t.child;case 12:return Nn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ir(t,t.type,i.value),Nn(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,uo(t),a=zn(a),i=i(a),t.flags|=1,Nn(e,t,i,n),t.child;case 14:return sy(e,t,t.type,t.pendingProps,n);case 15:return gE(e,t,t.type,t.pendingProps,n);case 19:return xE(e,t,n);case 31:return y2(e,t,n);case 22:return vE(e,t,n,t.pendingProps);case 24:return uo(t),i=zn(pn),e===null?(a=Jg(),a===null&&(a=ze,r=Qg(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},t0(t),Ir(t,pn,a)):(e.lanes&n&&(Qm(e,t),Ku(t,null,null,n),Zu()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Ir(t,pn,i)):(i=r.cache,Ir(t,pn,i),i!==a.cache&&Km(t,[pn],n,!0))),Nn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(et(156,t.tag))}function ka(e){e.flags|=4}function bp(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(WE())e.flags|=8192;else throw Js=kh,$g}else e.flags&=-16777217}function dy(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!p1(t))if(WE())e.flags|=8192;else throw Js=kh,$g}function _f(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qS():536870912,e.lanes|=t,Hl|=t)}function _u(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function S2(e,t,n){var i=t.pendingProps;switch(jg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),hr(pn),Ol(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Co(t)?ka(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_p())),Ge(t),null;case 26:var a=t.type,r=t.memoizedState;return e===null?(ka(t),r!==null?(Ge(t),dy(t,r)):(Ge(t),bp(t,a,null,i,n))):r?r!==e.memoizedState?(ka(t),Ge(t),dy(t,r)):(Ge(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ka(t),Ge(t),bp(t,a,e,i,n)),null;case 27:if(zh(t),n=Jr.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ka(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ge(t),null}e=za.current,Co(t)?Vv(t):(e=f1(a,i,n),t.stateNode=e,ka(t))}return Ge(t),null;case 5:if(zh(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ka(t);else{if(!i){if(t.stateNode===null)throw Error(et(166));return Ge(t),null}if(r=za.current,Co(t))Vv(t);else{var s=id(Jr.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[On]=t,r[yi]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;t:switch(Bn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ka(t)}}return Ge(t),bp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ka(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(et(166));if(e=Jr.current,Co(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=Pn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[On]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||o1(e.nodeValue,n)),e||ds(t,!0)}else e=id(e).createTextNode(i),e[On]=t,t.stateNode=e}return Ge(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Co(t),n!==null){if(e===null){if(!i)throw Error(et(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(et(557));e[On]=t}else lo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),e=!1}else n=_p(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ui(t),t):(Ui(t),null);if(t.flags&128)throw Error(et(558))}return Ge(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Co(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(et(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(et(317));a[On]=t}else lo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),a=!1}else a=_p(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ui(t),t):(Ui(t),null)}return Ui(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_f(t,t.updateQueue),Ge(t),null);case 4:return Ol(),e===null&&E0(t.stateNode.containerInfo),Ge(t),null;case 10:return hr(t.type),Ge(t),null;case 19:if(wn(rn),i=t.memoizedState,i===null)return Ge(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)_u(i,!1);else{if(tn!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Wh(e),r!==null){for(t.flags|=128,_u(i,!1),e=r.updateQueue,t.updateQueue=e,_f(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)MM(n,e),n=n.sibling;return Fe(rn,rn.current&1|2),fe&&tr(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Hi()>Qh&&(t.flags|=128,a=!0,_u(i,!1),t.lanes=4194304)}else{if(!a)if(e=Wh(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_f(t,e),_u(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!fe)return Ge(t),null}else 2*Hi()-i.renderingStartTime>Qh&&n!==536870912&&(t.flags|=128,a=!0,_u(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Hi(),e.sibling=null,n=rn.current,Fe(rn,a?n&1|2:n&1),fe&&tr(t,i.treeForkCount),e):(Ge(t),null);case 22:case 23:return Ui(t),e0(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),n=t.updateQueue,n!==null&&_f(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&wn(Qs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hr(pn),Ge(t),null;case 25:return null;case 30:return null}throw Error(et(156,t.tag))}function M2(e,t){switch(jg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hr(pn),Ol(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zh(t),null;case 31:if(t.memoizedState!==null){if(Ui(t),t.alternate===null)throw Error(et(340));lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ui(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(et(340));lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return wn(rn),null;case 4:return Ol(),null;case 10:return hr(t.type),null;case 22:case 23:return Ui(t),e0(),e!==null&&wn(Qs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hr(pn),null;case 25:return null;default:return null}}function ME(e,t){switch(jg(t),t.tag){case 3:hr(pn),Ol();break;case 26:case 27:case 5:zh(t);break;case 4:Ol();break;case 31:t.memoizedState!==null&&Ui(t);break;case 13:Ui(t);break;case 19:wn(rn);break;case 10:hr(t.type);break;case 22:case 23:Ui(t),e0(),e!==null&&wn(Qs);break;case 24:hr(pn)}}function Zc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){Ce(t,t.return,o)}}function ps(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,u=o;try{u()}catch(c){Ce(a,l,c)}}}i=i.next}while(i!==r)}}catch(c){Ce(t,t.return,c)}}function EE(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{LM(t,n)}catch(i){Ce(e,e.return,i)}}}function TE(e,t,n){n.props=ho(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Ce(e,t,i)}}function Qu(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){Ce(e,t,a)}}function La(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Ce(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Ce(e,t,a)}else n.current=null}function bE(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Ce(e,e.return,a)}}function Ap(e,t,n){try{var i=e.stateNode;X2(i,e.type,n,t),i[yi]=t}catch(a){Ce(e,e.return,a)}}function AE(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ms(e.type)||e.tag===4}function Cp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||AE(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ms(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function l_(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sr));else if(i!==4&&(i===27&&Ms(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(l_(e,t,n),e=e.sibling;e!==null;)l_(e,t,n),e=e.sibling}function jh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ms(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(jh(e,t,n),e=e.sibling;e!==null;)jh(e,t,n),e=e.sibling}function CE(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Bn(t,i,n),t[On]=e,t[yi]=n}catch(r){Ce(e,e.return,r)}}var nr=!1,hn=!1,Rp=!1,py=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function E2(e,t){if(e=e.containerInfo,m_=od,e=pM(e),Wg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,u=0,c=0,d=e,f=null;e:for(;;){for(var h;d!==n||a!==0&&d.nodeType!==3||(o=s+a),d!==r||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break e;if(f===n&&++u===a&&(o=s),f===r&&++c===i&&(l=s),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(__={focusedElem:e,selectionRange:n},od=!1,Cn=t;Cn!==null;)if(t=Cn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Cn=e;else for(;Cn!==null;){switch(t=Cn,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var g=ho(n.type,a);e=i.getSnapshotBeforeUpdate(g,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(_){Ce(n,n.return,_)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)v_(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":v_(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(et(163))}if(e=t.sibling,e!==null){e.return=t.return,Cn=e;break}Cn=t.return}}function RE(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wa(e,n),i&4&&Zc(5,n);break;case 1:if(Wa(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){Ce(n,n.return,s)}else{var a=ho(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ce(n,n.return,s)}}i&64&&EE(n),i&512&&Qu(n,n.return);break;case 3:if(Wa(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{LM(e,t)}catch(s){Ce(n,n.return,s)}}break;case 27:t===null&&i&4&&CE(n);case 26:case 5:Wa(e,n),t===null&&i&4&&bE(n),i&512&&Qu(n,n.return);break;case 12:Wa(e,n);break;case 31:Wa(e,n),i&4&&UE(e,n);break;case 13:Wa(e,n),i&4&&LE(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=L2.bind(null,n),J2(e,n))));break;case 22:if(i=n.memoizedState!==null||nr,!i){t=t!==null&&t.memoizedState!==null||hn,a=nr;var r=hn;nr=i,(hn=t)&&!r?Qa(e,n,(n.subtreeFlags&8772)!==0):Wa(e,n),nr=a,hn=r}break;case 30:break;default:Wa(e,n)}}function wE(e){var t=e.alternate;t!==null&&(e.alternate=null,wE(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Fg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,si=!1;function Xa(e,t,n){for(n=n.child;n!==null;)DE(e,t,n),n=n.sibling}function DE(e,t,n){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(Gc,n)}catch{}switch(n.tag){case 26:hn||La(n,t),Xa(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:hn||La(n,t);var i=Ye,a=si;Ms(n.type)&&(Ye=n.stateNode,si=!1),Xa(e,t,n),ec(n.stateNode),Ye=i,si=a;break;case 5:hn||La(n,t);case 6:if(i=Ye,a=si,Ye=null,Xa(e,t,n),Ye=i,si=a,Ye!==null)if(si)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(r){Ce(n,t,r)}else try{Ye.removeChild(n.stateNode)}catch(r){Ce(n,t,r)}break;case 18:Ye!==null&&(si?(e=Ye,Cy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Xl(e)):Cy(Ye,n.stateNode));break;case 4:i=Ye,a=si,Ye=n.stateNode.containerInfo,si=!0,Xa(e,t,n),Ye=i,si=a;break;case 0:case 11:case 14:case 15:ps(2,n,t),hn||ps(4,n,t),Xa(e,t,n);break;case 1:hn||(La(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&TE(n,t,i)),Xa(e,t,n);break;case 21:Xa(e,t,n);break;case 22:hn=(i=hn)||n.memoizedState!==null,Xa(e,t,n),hn=i;break;default:Xa(e,t,n)}}function UE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xl(e)}catch(n){Ce(t,t.return,n)}}}function LE(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xl(e)}catch(n){Ce(t,t.return,n)}}function T2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new py),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new py),t;default:throw Error(et(435,e.tag))}}function gf(e,t){var n=T2(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=N2.bind(null,e,i);i.then(a,a)}})}function ii(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ms(o.type)){Ye=o.stateNode,si=!1;break t}break;case 5:Ye=o.stateNode,si=!1;break t;case 3:case 4:Ye=o.stateNode.containerInfo,si=!0;break t}o=o.return}if(Ye===null)throw Error(et(160));DE(r,s,a),Ye=null,si=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)NE(t,e),t=t.sibling}var xa=null;function NE(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(t,e),ai(e),i&4&&(ps(3,e,e.return),Zc(3,e),ps(5,e,e.return));break;case 1:ii(t,e),ai(e),i&512&&(hn||n===null||La(n,n.return)),i&64&&nr&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=xa;if(ii(t,e),ai(e),i&512&&(hn||n===null||La(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Xc]||r[On]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Bn(r,i,n),r[On]=e,Rn(r),i=r;break t;case"link":var s=Oy("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Bn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Oy("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Bn(r,i,n),a.head.appendChild(r);break;default:throw Error(et(468,i))}r[On]=e,Rn(r),i=r}e.stateNode=i}else Py(a,e.type,e.stateNode);else e.stateNode=Ny(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Py(a,e.type,e.stateNode):Ny(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ap(e,e.memoizedProps,n.memoizedProps)}break;case 27:ii(t,e),ai(e),i&512&&(hn||n===null||La(n,n.return)),n!==null&&i&4&&Ap(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ii(t,e),ai(e),i&512&&(hn||n===null||La(n,n.return)),e.flags&32){a=e.stateNode;try{zl(a,"")}catch(g){Ce(e,e.return,g)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Ap(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Rp=!0);break;case 6:if(ii(t,e),ai(e),i&4){if(e.stateNode===null)throw Error(et(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(g){Ce(e,e.return,g)}}break;case 3:if(_h=null,a=xa,xa=ad(t.containerInfo),ii(t,e),xa=a,ai(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xl(t.containerInfo)}catch(g){Ce(e,e.return,g)}Rp&&(Rp=!1,OE(e));break;case 4:i=xa,xa=ad(e.stateNode.containerInfo),ii(t,e),ai(e),xa=i;break;case 12:ii(t,e),ai(e);break;case 31:ii(t,e),ai(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,gf(e,i)));break;case 13:ii(t,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fd=Hi()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,gf(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nr,c=hn;if(nr=u||a,hn=c||l,ii(t,e),hn=c,nr=u,ai(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nr||hn||Is(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(g){Ce(l,l.return,g)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(g){Ce(l,l.return,g)}}}else if(t.tag===18){if(n===null){l=t;try{var h=l.stateNode;a?Ry(h,!0):Ry(l.stateNode,!1)}catch(g){Ce(l,l.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,gf(e,n))));break;case 19:ii(t,e),ai(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,gf(e,i)));break;case 30:break;case 21:break;default:ii(t,e),ai(e)}}function ai(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(AE(i)){n=i;break}i=i.return}if(n==null)throw Error(et(160));switch(n.tag){case 27:var a=n.stateNode,r=Cp(e);jh(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(zl(s,""),n.flags&=-33);var o=Cp(e);jh(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=Cp(e);l_(e,u,l);break;default:throw Error(et(161))}}catch(c){Ce(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function OE(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;OE(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)RE(e,t.alternate,t),t=t.sibling}function Is(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ps(4,t,t.return),Is(t);break;case 1:La(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&TE(t,t.return,n),Is(t);break;case 27:ec(t.stateNode);case 26:case 5:La(t,t.return),Is(t);break;case 22:t.memoizedState===null&&Is(t);break;case 30:Is(t);break;default:Is(t)}e=e.sibling}}function Qa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Qa(a,r,n),Zc(4,r);break;case 1:if(Qa(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){Ce(i,i.return,u)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)UM(l[a],o)}catch(u){Ce(i,i.return,u)}}n&&s&64&&EE(r),Qu(r,r.return);break;case 27:CE(r);case 26:case 5:Qa(a,r,n),n&&i===null&&s&4&&bE(r),Qu(r,r.return);break;case 12:Qa(a,r,n);break;case 31:Qa(a,r,n),n&&s&4&&UE(a,r);break;case 13:Qa(a,r,n),n&&s&4&&LE(a,r);break;case 22:r.memoizedState===null&&Qa(a,r,n),Qu(r,r.return);break;case 30:break;default:Qa(a,r,n)}t=t.sibling}}function g0(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qc(n))}function v0(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qc(e))}function ma(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)PE(e,t,n,i),t=t.sibling}function PE(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ma(e,t,n,i),a&2048&&Zc(9,t);break;case 1:ma(e,t,n,i);break;case 3:ma(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qc(e)));break;case 12:if(a&2048){ma(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){Ce(t,t.return,l)}}else ma(e,t,n,i);break;case 31:ma(e,t,n,i);break;case 13:ma(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ma(e,t,n,i):Ju(e,t):r._visibility&2?ma(e,t,n,i):(r._visibility|=2,Qo(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&g0(s,t);break;case 24:ma(e,t,n,i),a&2048&&v0(t.alternate,t);break;default:ma(e,t,n,i)}}function Qo(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,o=n,l=i,u=s.flags;switch(s.tag){case 0:case 11:case 15:Qo(r,s,o,l,a),Zc(8,s);break;case 23:break;case 22:var c=s.stateNode;s.memoizedState!==null?c._visibility&2?Qo(r,s,o,l,a):Ju(r,s):(c._visibility|=2,Qo(r,s,o,l,a)),a&&u&2048&&g0(s.alternate,s);break;case 24:Qo(r,s,o,l,a),a&&u&2048&&v0(s.alternate,s);break;default:Qo(r,s,o,l,a)}t=t.sibling}}function Ju(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ju(n,i),a&2048&&g0(i.alternate,i);break;case 24:Ju(n,i),a&2048&&v0(i.alternate,i);break;default:Ju(n,i)}t=t.sibling}}var Nu=8192;function Ro(e,t,n){if(e.subtreeFlags&Nu)for(e=e.child;e!==null;)zE(e,t,n),e=e.sibling}function zE(e,t,n){switch(e.tag){case 26:Ro(e,t,n),e.flags&Nu&&e.memoizedState!==null&&cC(n,xa,e.memoizedState,e.memoizedProps);break;case 5:Ro(e,t,n);break;case 3:case 4:var i=xa;xa=ad(e.stateNode.containerInfo),Ro(e,t,n),xa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Nu,Nu=16777216,Ro(e,t,n),Nu=i):Ro(e,t,n));break;default:Ro(e,t,n)}}function IE(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Cn=i,FE(i,e)}IE(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)BE(e),e=e.sibling}function BE(e){switch(e.tag){case 0:case 11:case 15:gu(e),e.flags&2048&&ps(9,e,e.return);break;case 3:gu(e);break;case 12:gu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ph(e)):gu(e);break;default:gu(e)}}function ph(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Cn=i,FE(i,e)}IE(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ps(8,t,t.return),ph(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ph(t));break;default:ph(t)}e=e.sibling}}function FE(e,t){for(;Cn!==null;){var n=Cn;switch(n.tag){case 0:case 11:case 15:ps(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:qc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Cn=i;else t:for(n=e;Cn!==null;){i=Cn;var a=i.sibling,r=i.return;if(wE(i),i===n){Cn=null;break t}if(a!==null){a.return=r,Cn=a;break t}Cn=r}}}var b2={getCacheForType:function(e){var t=zn(pn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return zn(pn).controller.signal}},A2=typeof WeakMap=="function"?WeakMap:Map,ve=0,ze=null,oe=null,ue=0,Ae=0,Ri=null,Xr=!1,ou=!1,y0=!1,yr=0,tn=0,ms=0,$s=0,x0=0,Ii=0,Hl=0,$u=null,oi=null,u_=!1,Fd=0,HE=0,Qh=1/0,Jh=null,ns=null,xn=0,is=null,Gl=null,dr=0,c_=0,f_=null,GE=null,tc=0,h_=null;function ki(){return ve&2&&ue!==0?ue&-ue:Vt.T!==null?M0():jS()}function VE(){if(Ii===0)if(!(ue&536870912)||fe){var e=uf;uf<<=1,!(uf&3932160)&&(uf=262144),Ii=e}else Ii=536870912;return e=qi.current,e!==null&&(e.flags|=32),Ii}function fi(e,t,n){(e===ze&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),Wr(e,ue,Ii,!1)),kc(e,n),(!(ve&2)||e!==ze)&&(e===ze&&(!(ve&2)&&($s|=n),tn===4&&Wr(e,ue,Ii,!1)),Ga(e))}function kE(e,t,n){if(ve&6)throw Error(et(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vc(e,t),a=i?w2(e,t):wp(e,t,!0),r=i;do{if(a===0){ou&&!i&&Wr(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!C2(n)){a=wp(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=$u;var l=o.current.memoizedState.isDehydrated;if(l&&(Vl(o,s).flags|=256),s=wp(o,s,!1),s!==2){if(y0&&!l){o.errorRecoveryDisabledLanes|=r,$s|=r,a=4;break t}r=oi,oi=a,r!==null&&(oi===null?oi=r:oi.push.apply(oi,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Vl(e,0),Wr(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(et(345));case 4:if((t&4194048)!==t)break;case 6:Wr(i,t,Ii,!Xr);break t;case 2:oi=null;break;case 3:case 5:break;default:throw Error(et(329))}if((t&62914560)===t&&(a=Fd+300-Hi(),10<a)){if(Wr(i,t,Ii,!Xr),Rd(i,0,!0)!==0)break t;dr=t,i.timeoutHandle=u1(my.bind(null,i,n,oi,Jh,u_,t,Ii,$s,Hl,Xr,r,"Throttled",-0,0),a);break t}my(i,n,oi,Jh,u_,t,Ii,$s,Hl,Xr,r,null,-0,0)}}break}while(!0);Ga(e)}function my(e,t,n,i,a,r,s,o,l,u,c,d,f,h){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sr},zE(t,r,d);var g=(r&62914560)===r?Fd-Hi():(r&4194048)===r?HE-Hi():0;if(g=fC(d,g),g!==null){dr=r,e.cancelPendingCommit=g(gy.bind(null,e,t,r,n,i,a,s,o,l,c,d,null,f,h)),Wr(e,r,s,!u);return}}gy(e,t,r,n,i,a,s,o,l)}function C2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Wi(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wr(e,t,n,i){t&=~x0,t&=~$s,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Vi(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&YS(e,n,t)}function Hd(){return ve&6?!0:(Kc(0),!1)}function S0(){if(oe!==null){if(Ae===0)var e=oe.return;else e=oe,or=Eo=null,s0(e),Sl=null,Sc=0,e=oe;for(;e!==null;)ME(e.alternate,e),e=e.return;oe=null}}function Vl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Y2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),dr=0,S0(),ze=e,oe=n=fr(e.current,null),ue=t,Ae=0,Ri=null,Xr=!1,ou=Vc(e,t),y0=!1,Hl=Ii=x0=$s=ms=tn=0,oi=$u=null,u_=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Vi(i),r=1<<a;t|=e[a],i&=~r}return yr=t,Ld(),n}function XE(e,t){jt=null,Vt.H=Ec,t===su||t===Od?(t=Yv(),Ae=3):t===$g?(t=Yv(),Ae=4):Ae=t===m0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ri=t,oe===null&&(tn=1,Zh(e,ra(t,e.current)))}function WE(){var e=qi.current;return e===null?!0:(ue&4194048)===ue?ca===null:(ue&62914560)===ue||ue&536870912?e===ca:!1}function qE(){var e=Vt.H;return Vt.H=Ec,e===null?Ec:e}function YE(){var e=Vt.A;return Vt.A=b2,e}function $h(){tn=4,Xr||(ue&4194048)!==ue&&qi.current!==null||(ou=!0),!(ms&134217727)&&!($s&134217727)||ze===null||Wr(ze,ue,Ii,!1)}function wp(e,t,n){var i=ve;ve|=2;var a=qE(),r=YE();(ze!==e||ue!==t)&&(Jh=null,Vl(e,t)),t=!1;var s=tn;t:do try{if(Ae!==0&&oe!==null){var o=oe,l=Ri;switch(Ae){case 8:S0(),s=6;break t;case 3:case 2:case 9:case 6:qi.current===null&&(t=!0);var u=Ae;if(Ae=0,Ri=null,hl(e,o,l,u),n&&ou){s=0;break t}break;default:u=Ae,Ae=0,Ri=null,hl(e,o,l,u)}}R2(),s=tn;break}catch(c){XE(e,c)}while(!0);return t&&e.shellSuspendCounter++,or=Eo=null,ve=i,Vt.H=a,Vt.A=r,oe===null&&(ze=null,ue=0,Ld()),s}function R2(){for(;oe!==null;)ZE(oe)}function w2(e,t){var n=ve;ve|=2;var i=qE(),a=YE();ze!==e||ue!==t?(Jh=null,Qh=Hi()+500,Vl(e,t)):ou=Vc(e,t);t:do try{if(Ae!==0&&oe!==null){t=oe;var r=Ri;e:switch(Ae){case 1:Ae=0,Ri=null,hl(e,t,r,1);break;case 2:case 9:if(qv(r)){Ae=0,Ri=null,_y(t);break}t=function(){Ae!==2&&Ae!==9||ze!==e||(Ae=7),Ga(e)},r.then(t,t);break t;case 3:Ae=7;break t;case 4:Ae=5;break t;case 7:qv(r)?(Ae=0,Ri=null,_y(t)):(Ae=0,Ri=null,hl(e,t,r,7));break;case 5:var s=null;switch(oe.tag){case 26:s=oe.memoizedState;case 5:case 27:var o=oe;if(s?p1(s):o.stateNode.complete){Ae=0,Ri=null;var l=o.sibling;if(l!==null)oe=l;else{var u=o.return;u!==null?(oe=u,Gd(u)):oe=null}break e}}Ae=0,Ri=null,hl(e,t,r,5);break;case 6:Ae=0,Ri=null,hl(e,t,r,6);break;case 8:S0(),tn=6;break t;default:throw Error(et(462))}}D2();break}catch(c){XE(e,c)}while(!0);return or=Eo=null,Vt.H=i,Vt.A=a,ve=n,oe!==null?0:(ze=null,ue=0,Ld(),tn)}function D2(){for(;oe!==null&&!$b();)ZE(oe)}function ZE(e){var t=SE(e.alternate,e,yr);e.memoizedProps=e.pendingProps,t===null?Gd(e):oe=t}function _y(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uy(n,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=uy(n,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:s0(t);default:ME(n,t),t=oe=MM(t,yr),t=SE(n,t,yr)}e.memoizedProps=e.pendingProps,t===null?Gd(e):oe=t}function hl(e,t,n,i){or=Eo=null,s0(t),Sl=null,Sc=0;var a=t.return;try{if(v2(e,a,t,n,ue)){tn=1,Zh(e,ra(n,e.current)),oe=null;return}}catch(r){if(a!==null)throw oe=a,r;tn=1,Zh(e,ra(n,e.current)),oe=null;return}t.flags&32768?(fe||i===1?e=!0:ou||ue&536870912?e=!1:(Xr=e=!0,(i===2||i===9||i===3||i===6)&&(i=qi.current,i!==null&&i.tag===13&&(i.flags|=16384))),KE(t,e)):Gd(t)}function Gd(e){var t=e;do{if(t.flags&32768){KE(t,Xr);return}e=t.return;var n=S2(t.alternate,t,yr);if(n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);tn===0&&(tn=5)}function KE(e,t){do{var n=M2(e.alternate,e);if(n!==null){n.flags&=32767,oe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=n}while(e!==null);tn=6,oe=null}function gy(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Vd();while(xn!==0);if(ve&6)throw Error(et(327));if(t!==null){if(t===e.current)throw Error(et(177));if(r=t.lanes|t.childLanes,r|=qg,uA(e,n,r,s,o,l),e===ze&&(oe=ze=null,ue=0),Gl=t,is=e,dr=n,c_=r,f_=a,GE=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,O2(Ih,function(){return t1(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Vt.T,Vt.T=null,a=ye.p,ye.p=2,s=ve,ve|=4;try{E2(e,t,n)}finally{ve=s,ye.p=a,Vt.T=i}}xn=1,jE(),QE(),JE()}}function jE(){if(xn===1){xn=0;var e=is,t=Gl,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Vt.T,Vt.T=null;var i=ye.p;ye.p=2;var a=ve;ve|=4;try{NE(t,e);var r=__,s=pM(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&dM(o.ownerDocument.documentElement,o)){if(l!==null&&Wg(o)){var u=l.start,c=l.end;if(c===void 0&&(c=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(c,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),g=o.textContent.length,_=Math.min(l.start,g),m=l.end===void 0?_:Math.min(l.end,g);!h.extend&&_>m&&(s=m,m=_,_=s);var p=Fv(o,_),v=Fv(o,m);if(p&&v&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var y=d.createRange();y.setStart(p.node,p.offset),h.removeAllRanges(),_>m?(h.addRange(y),h.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),h.addRange(y))}}}}for(d=[],h=o;h=h.parentNode;)h.nodeType===1&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}od=!!m_,__=m_=null}finally{ve=a,ye.p=i,Vt.T=n}}e.current=t,xn=2}}function QE(){if(xn===2){xn=0;var e=is,t=Gl,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Vt.T,Vt.T=null;var i=ye.p;ye.p=2;var a=ve;ve|=4;try{RE(e,t.alternate,t)}finally{ve=a,ye.p=i,Vt.T=n}}xn=3}}function JE(){if(xn===4||xn===3){xn=0,tA();var e=is,t=Gl,n=dr,i=GE;t.subtreeFlags&10256||t.flags&10256?xn=5:(xn=0,Gl=is=null,$E(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(ns=null),Bg(n),t=t.stateNode,Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(Gc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Vt.T,a=ye.p,ye.p=2,Vt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Vt.T=t,ye.p=a}}dr&3&&Vd(),Ga(e),a=e.pendingLanes,n&261930&&a&42?e===h_?tc++:(tc=0,h_=e):tc=0,Kc(0)}}function $E(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qc(t)))}function Vd(){return jE(),QE(),JE(),t1()}function t1(){if(xn!==5)return!1;var e=is,t=c_;c_=0;var n=Bg(dr),i=Vt.T,a=ye.p;try{ye.p=32>n?32:n,Vt.T=null,n=f_,f_=null;var r=is,s=dr;if(xn=0,Gl=is=null,dr=0,ve&6)throw Error(et(331));var o=ve;if(ve|=4,BE(r.current),PE(r,r.current,s,n),ve=o,Kc(0,!1),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(Gc,r)}catch{}return!0}finally{ye.p=a,Vt.T=i,$E(e,t)}}function vy(e,t,n){t=ra(n,t),t=r_(e.stateNode,t,2),e=es(e,t,2),e!==null&&(kc(e,2),Ga(e))}function Ce(e,t,n){if(e.tag===3)vy(e,e,n);else for(;t!==null;){if(t.tag===3){vy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){e=ra(n,e),n=mE(2),i=es(t,n,2),i!==null&&(_E(n,i,t,e),kc(i,2),Ga(i));break}}t=t.return}}function Dp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new A2;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(y0=!0,a.add(n),e=U2.bind(null,e,t,n),t.then(e,e))}function U2(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ze===e&&(ue&n)===n&&(tn===4||tn===3&&(ue&62914560)===ue&&300>Hi()-Fd?!(ve&2)&&Vl(e,0):x0|=n,Hl===ue&&(Hl=0)),Ga(e)}function e1(e,t){t===0&&(t=qS()),e=Mo(e,t),e!==null&&(kc(e,t),Ga(e))}function L2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),e1(e,n)}function N2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(et(314))}i!==null&&i.delete(t),e1(e,n)}function O2(e,t){return zg(e,t)}var td=null,Jo=null,d_=!1,ed=!1,Up=!1,qr=0;function Ga(e){e!==Jo&&e.next===null&&(Jo===null?td=Jo=e:Jo=Jo.next=e),ed=!0,d_||(d_=!0,z2())}function Kc(e,t){if(!Up&&ed){Up=!0;do for(var n=!1,i=td;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Vi(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,yy(i,r))}else r=ue,r=Rd(i,i===ze?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Vc(i,r)||(n=!0,yy(i,r));i=i.next}while(n);Up=!1}}function P2(){n1()}function n1(){ed=d_=!1;var e=0;qr!==0&&q2()&&(e=qr);for(var t=Hi(),n=null,i=td;i!==null;){var a=i.next,r=i1(i,t);r===0?(i.next=null,n===null?td=a:n.next=a,a===null&&(Jo=n)):(n=i,(e!==0||r&3)&&(ed=!0)),i=a}xn!==0&&xn!==5||Kc(e),qr!==0&&(qr=0)}function i1(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Vi(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=lA(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=ze,n=ue,n=Rd(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&rp(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Vc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&rp(i),Bg(n)){case 2:case 8:n=XS;break;case 32:n=Ih;break;case 268435456:n=WS;break;default:n=Ih}return i=a1.bind(null,e),n=zg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&rp(i),e.callbackPriority=2,e.callbackNode=null,2}function a1(e,t){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vd()&&e.callbackNode!==n)return null;var i=ue;return i=Rd(e,e===ze?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(kE(e,i,t),i1(e,Hi()),e.callbackNode!=null&&e.callbackNode===n?a1.bind(null,e):null)}function yy(e,t){if(Vd())return null;kE(e,t,!0)}function z2(){Z2(function(){ve&6?zg(kS,P2):n1()})}function M0(){if(qr===0){var e=Il;e===0&&(e=lf,lf<<=1,!(lf&261888)&&(lf=256)),qr=e}return qr}function xy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rh(""+e)}function Sy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function I2(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=xy((a[yi]||null).action),s=i.submitter;s&&(t=(t=s[yi]||null)?xy(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new wd("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qr!==0){var l=s?Sy(a,s):new FormData(a);i_(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Sy(a,s):new FormData(a),i_(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Lp=0;Lp<Wm.length;Lp++){var Np=Wm[Lp],B2=Np.toLowerCase(),F2=Np[0].toUpperCase()+Np.slice(1);Ea(B2,"on"+F2)}Ea(_M,"onAnimationEnd");Ea(gM,"onAnimationIteration");Ea(vM,"onAnimationStart");Ea("dblclick","onDoubleClick");Ea("focusin","onFocus");Ea("focusout","onBlur");Ea(e2,"onTransitionRun");Ea(n2,"onTransitionStart");Ea(i2,"onTransitionCancel");Ea(yM,"onTransitionEnd");Pl("onMouseEnter",["mouseout","mouseover"]);Pl("onMouseLeave",["mouseout","mouseover"]);Pl("onPointerEnter",["pointerout","pointerover"]);Pl("onPointerLeave",["pointerout","pointerover"]);yo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yo("onBeforeInput",["compositionend","keypress","textInput","paste"]);yo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tc));function r1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=u;try{r(a)}catch(c){Fh(c)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=u;try{r(a)}catch(c){Fh(c)}a.currentTarget=null,r=l}}}}function se(e,t){var n=t[Im];n===void 0&&(n=t[Im]=new Set);var i=e+"__bubble";n.has(i)||(s1(t,e,2,!1),n.add(i))}function Op(e,t,n){var i=0;t&&(i|=4),s1(n,e,i,t)}var vf="_reactListening"+Math.random().toString(36).slice(2);function E0(e){if(!e[vf]){e[vf]=!0,QS.forEach(function(n){n!=="selectionchange"&&(H2.has(n)||Op(n,!1,e),Op(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vf]||(t[vf]=!0,Op("selectionchange",!1,t))}}function s1(e,t,n,i){switch(y1(t)){case 2:var a=pC;break;case 8:a=mC;break;default:a=C0}n=a.bind(null,t,n,e),a=void 0,!Vm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Pp(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=il(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}rM(function(){var u=r,c=Gg(n),d=[];t:{var f=xM.get(e);if(f!==void 0){var h=wd,g=e;switch(e){case"keypress":if(oh(n)===0)break t;case"keydown":case"keyup":h=NA;break;case"focusin":g="focus",h=cp;break;case"focusout":g="blur",h=cp;break;case"beforeblur":case"afterblur":h=cp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=SA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=zA;break;case _M:case gM:case vM:h=TA;break;case yM:h=BA;break;case"scroll":case"scrollend":h=yA;break;case"wheel":h=HA;break;case"copy":case"cut":case"paste":h=AA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Uv;break;case"toggle":case"beforetoggle":h=VA}var _=(t&4)!==0,m=!_&&(e==="scroll"||e==="scrollend"),p=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,y;v!==null;){var x=v;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||p===null||(x=_c(v,p),x!=null&&_.push(bc(v,x,y))),m)break;v=v.return}0<_.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Gm&&(g=n.relatedTarget||n.fromElement)&&(il(g)||g[iu]))break t;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?il(g):null,g!==null&&(m=Hc(g),_=g.tag,g!==m||_!==5&&_!==27&&_!==6)&&(g=null)):(h=null,g=u),h!==g)){if(_=wv,x="onMouseLeave",p="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=Uv,x="onPointerLeave",p="onPointerEnter",v="pointer"),m=h==null?f:Uu(h),y=g==null?f:Uu(g),f=new _(x,v+"leave",h,n,c),f.target=m,f.relatedTarget=y,x=null,il(c)===u&&(_=new _(p,v+"enter",g,n,c),_.target=y,_.relatedTarget=m,x=_),m=x,h&&g)e:{for(_=G2,p=h,v=g,y=0,x=p;x;x=_(x))y++;x=0;for(var C=v;C;C=_(C))x++;for(;0<y-x;)p=_(p),y--;for(;0<x-y;)v=_(v),x--;for(;y--;){if(p===v||v!==null&&p===v.alternate){_=p;break e}p=_(p),v=_(v)}_=null}else _=null;h!==null&&My(d,f,h,_,!1),g!==null&&m!==null&&My(d,m,g,_,!0)}}t:{if(f=u?Uu(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=Pv;else if(Ov(f))if(fM)A=JA;else{A=jA;var E=KA}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Hg(u.elementType)&&(A=Pv):A=QA;if(A&&(A=A(e,u))){cM(d,A,n,c);break t}E&&E(e,f,u),e==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Hm(f,"number",f.value)}switch(E=u?Uu(u):window,e){case"focusin":(Ov(E)||E.contentEditable==="true")&&(sl=E,km=u,Wu=null);break;case"focusout":Wu=km=sl=null;break;case"mousedown":Xm=!0;break;case"contextmenu":case"mouseup":case"dragend":Xm=!1,Hv(d,n,c);break;case"selectionchange":if(t2)break;case"keydown":case"keyup":Hv(d,n,c)}var R;if(Xg)t:{switch(e){case"compositionstart":var M="onCompositionStart";break t;case"compositionend":M="onCompositionEnd";break t;case"compositionupdate":M="onCompositionUpdate";break t}M=void 0}else rl?lM(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(oM&&n.locale!=="ko"&&(rl||M!=="onCompositionStart"?M==="onCompositionEnd"&&rl&&(R=sM()):(kr=c,Vg="value"in kr?kr.value:kr.textContent,rl=!0)),E=nd(u,M),0<E.length&&(M=new Dv(M,e,null,n,c),d.push({event:M,listeners:E}),R?M.data=R:(R=uM(n),R!==null&&(M.data=R)))),(R=XA?WA(e,n):qA(e,n))&&(M=nd(u,"onBeforeInput"),0<M.length&&(E=new Dv("onBeforeInput","beforeinput",null,n,c),d.push({event:E,listeners:M}),E.data=R)),I2(d,e,u,n,c)}r1(d,t)})}function bc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nd(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=_c(e,n),a!=null&&i.unshift(bc(e,a,r)),a=_c(e,t),a!=null&&i.push(bc(e,a,r))),e.tag===3)return i;e=e.return}return[]}function G2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function My(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||u===null||(l=u,a?(u=_c(n,r),u!=null&&s.unshift(bc(n,u,l))):a||(u=_c(n,r),u!=null&&s.push(bc(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var V2=/\r\n?/g,k2=/\u0000|\uFFFD/g;function Ey(e){return(typeof e=="string"?e:""+e).replace(V2,`
`).replace(k2,"")}function o1(e,t){return t=Ey(t),Ey(e)===t}function De(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||zl(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&zl(e,""+i);break;case"className":ff(e,"class",i);break;case"tabIndex":ff(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ff(e,n,i);break;case"style":aM(e,i,r);break;case"data":if(t!=="object"){ff(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rh(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",a.name,a,null),De(e,t,"formEncType",a.formEncType,a,null),De(e,t,"formMethod",a.formMethod,a,null),De(e,t,"formTarget",a.formTarget,a,null)):(De(e,t,"encType",a.encType,a,null),De(e,t,"method",a.method,a,null),De(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=rh(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=sr);break;case"onScroll":i!=null&&se("scroll",e);break;case"onScrollEnd":i!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=rh(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":se("beforetoggle",e),se("toggle",e),ah(e,"popover",i);break;case"xlinkActuate":Va(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Va(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Va(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Va(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Va(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Va(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Va(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ah(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gA.get(n)||n,ah(e,n,i))}}function p_(e,t,n,i,a,r){switch(n){case"style":aM(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(et(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(et(60));e.innerHTML=n}}break;case"children":typeof i=="string"?zl(e,i):(typeof i=="number"||typeof i=="bigint")&&zl(e,""+i);break;case"onScroll":i!=null&&se("scroll",e);break;case"onScrollEnd":i!=null&&se("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!JS.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[yi]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ah(e,n,i)}}}function Bn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:De(e,t,r,s,n,null)}}a&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":se("invalid",e);var o=r=s=a=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var c=n[i];if(c!=null)switch(i){case"name":a=c;break;case"type":s=c;break;case"checked":l=c;break;case"defaultChecked":u=c;break;case"value":r=c;break;case"defaultValue":o=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(et(137,t));break;default:De(e,t,i,c,n,null)}}eM(e,r,o,l,u,s,a,!1);return;case"select":se("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:De(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?vl(e,!!i,t,!1):n!=null&&vl(e,!!i,n,!0);return;case"textarea":se("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(et(91));break;default:De(e,t,s,o,n,null)}iM(e,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:De(e,t,l,i,n,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(i=0;i<Tc.length;i++)se(Tc[i],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(et(137,t));default:De(e,t,u,i,n,null)}return;default:if(Hg(t)){for(c in n)n.hasOwnProperty(c)&&(i=n[c],i!==void 0&&p_(e,t,c,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&De(e,t,o,i,n,null))}function X2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,u=null,c=null;for(h in n){var d=n[h];if(n.hasOwnProperty(h)&&d!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(h)||De(e,t,h,null,i,d)}}for(var f in i){var h=i[f];if(d=n[f],i.hasOwnProperty(f)&&(h!=null||d!=null))switch(f){case"type":r=h;break;case"name":a=h;break;case"checked":u=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(et(137,t));break;default:h!==d&&De(e,t,f,h,i,d)}}Fm(e,s,o,l,u,c,r,a);return;case"select":h=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(r)||De(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&De(e,t,a,r,i,l)}t=o,n=s,i=h,f!=null?vl(e,!!n,f,!1):!!i!=!!n&&(t!=null?vl(e,!!n,t,!0):vl(e,!!n,n?[]:"",!1));return;case"textarea":h=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:De(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(et(91));break;default:a!==r&&De(e,t,s,a,i,r)}nM(e,f,h);return;case"option":for(var g in n)if(f=n[g],n.hasOwnProperty(g)&&f!=null&&!i.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:De(e,t,g,null,i,f)}for(l in i)if(f=i[l],h=n[l],i.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:De(e,t,l,f,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_)&&De(e,t,_,null,i,f);for(u in i)if(f=i[u],h=n[u],i.hasOwnProperty(u)&&f!==h&&(f!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(et(137,t));break;default:De(e,t,u,f,i,h)}return;default:if(Hg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&p_(e,t,m,void 0,i,f);for(c in i)f=i[c],h=n[c],!i.hasOwnProperty(c)||f===h||f===void 0&&h===void 0||p_(e,t,c,f,i,h);return}}for(var p in n)f=n[p],n.hasOwnProperty(p)&&f!=null&&!i.hasOwnProperty(p)&&De(e,t,p,null,i,f);for(d in i)f=i[d],h=n[d],!i.hasOwnProperty(d)||f===h||f==null&&h==null||De(e,t,d,f,i,h)}function Ty(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function W2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&Ty(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>o)break;var c=l.transferSize,d=l.initiatorType;c&&Ty(d)&&(l=l.responseEnd,s+=c*(l<o?1:(o-u)/(l-u)))}if(--i,t+=8*(r+s)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var m_=null,__=null;function id(e){return e.nodeType===9?e:e.ownerDocument}function by(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function g_(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zp=null;function q2(){var e=window.event;return e&&e.type==="popstate"?e===zp?!1:(zp=e,!0):(zp=null,!1)}var u1=typeof setTimeout=="function"?setTimeout:void 0,Y2=typeof clearTimeout=="function"?clearTimeout:void 0,Ay=typeof Promise=="function"?Promise:void 0,Z2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ay<"u"?function(e){return Ay.resolve(null).then(e).catch(K2)}:u1;function K2(e){setTimeout(function(){throw e})}function Ms(e){return e==="head"}function Cy(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Xl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ec(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ec(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[Xc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&ec(e.ownerDocument.body);n=a}while(n);Xl(t)}function Ry(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function v_(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":v_(n),Fg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function j2(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Xc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=fa(e.nextSibling),e===null)break}return null}function Q2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fa(e.nextSibling),e===null))return null;return e}function c1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=fa(e.nextSibling),e===null))return null;return e}function y_(e){return e.data==="$?"||e.data==="$~"}function x_(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function J2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function fa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var S_=null;function wy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return fa(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Dy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function f1(e,t,n){switch(t=id(n),e){case"html":if(e=t.documentElement,!e)throw Error(et(452));return e;case"head":if(e=t.head,!e)throw Error(et(453));return e;case"body":if(e=t.body,!e)throw Error(et(454));return e;default:throw Error(et(451))}}function ec(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Fg(e)}var da=new Map,Uy=new Set;function ad(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var br=ye.d;ye.d={f:$2,r:tC,D:eC,C:nC,L:iC,m:aC,X:sC,S:rC,M:oC};function $2(){var e=br.f(),t=Hd();return e||t}function tC(e){var t=au(e);t!==null&&t.tag===5&&t.type==="form"?aE(t):br.r(e)}var lu=typeof document>"u"?null:document;function h1(e,t,n){var i=lu;if(i&&typeof t=="string"&&t){var a=aa(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Uy.has(a)||(Uy.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Bn(t,"link",e),Rn(t),i.head.appendChild(t)))}}function eC(e){br.D(e),h1("dns-prefetch",e,null)}function nC(e,t){br.C(e,t),h1("preconnect",e,t)}function iC(e,t,n){br.L(e,t,n);var i=lu;if(i&&e&&t){var a='link[rel="preload"][as="'+aa(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+aa(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+aa(n.imageSizes)+'"]')):a+='[href="'+aa(e)+'"]';var r=a;switch(t){case"style":r=kl(e);break;case"script":r=uu(e)}da.has(r)||(e=qe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),da.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(jc(r))||t==="script"&&i.querySelector(Qc(r))||(t=i.createElement("link"),Bn(t,"link",e),Rn(t),i.head.appendChild(t)))}}function aC(e,t){br.m(e,t);var n=lu;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+aa(i)+'"][href="'+aa(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=uu(e)}if(!da.has(r)&&(e=qe({rel:"modulepreload",href:e},t),da.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qc(r)))return}i=n.createElement("link"),Bn(i,"link",e),Rn(i),n.head.appendChild(i)}}}function rC(e,t,n){br.S(e,t,n);var i=lu;if(i&&e){var a=gl(i).hoistableStyles,r=kl(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(jc(r)))o.loading=5;else{e=qe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=da.get(r))&&T0(e,n);var l=s=i.createElement("link");Rn(l),Bn(l,"link",e),l._p=new Promise(function(u,c){l.onload=u,l.onerror=c}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,mh(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function sC(e,t){br.X(e,t);var n=lu;if(n&&e){var i=gl(n).hoistableScripts,a=uu(e),r=i.get(a);r||(r=n.querySelector(Qc(a)),r||(e=qe({src:e,async:!0},t),(t=da.get(a))&&b0(e,t),r=n.createElement("script"),Rn(r),Bn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function oC(e,t){br.M(e,t);var n=lu;if(n&&e){var i=gl(n).hoistableScripts,a=uu(e),r=i.get(a);r||(r=n.querySelector(Qc(a)),r||(e=qe({src:e,async:!0,type:"module"},t),(t=da.get(a))&&b0(e,t),r=n.createElement("script"),Rn(r),Bn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Ly(e,t,n,i){var a=(a=Jr.current)?ad(a):null;if(!a)throw Error(et(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=kl(n.href),n=gl(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=kl(n.href);var r=gl(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(jc(e)))&&!r._p&&(s.instance=r,s.state.loading=5),da.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},da.set(e,n),r||lC(a,e,n,s.state))),t&&i===null)throw Error(et(528,""));return s}if(t&&i!==null)throw Error(et(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=uu(n),n=gl(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(et(444,e))}}function kl(e){return'href="'+aa(e)+'"'}function jc(e){return'link[rel="stylesheet"]['+e+"]"}function d1(e){return qe({},e,{"data-precedence":e.precedence,precedence:null})}function lC(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Bn(t,"link",n),Rn(t),e.head.appendChild(t))}function uu(e){return'[src="'+aa(e)+'"]'}function Qc(e){return"script[async]"+e}function Ny(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+aa(n.href)+'"]');if(i)return t.instance=i,Rn(i),i;var a=qe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Rn(i),Bn(i,"style",a),mh(i,n.precedence,e),t.instance=i;case"stylesheet":a=kl(n.href);var r=e.querySelector(jc(a));if(r)return t.state.loading|=4,t.instance=r,Rn(r),r;i=d1(n),(a=da.get(a))&&T0(i,a),r=(e.ownerDocument||e).createElement("link"),Rn(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Bn(r,"link",i),t.state.loading|=4,mh(r,n.precedence,e),t.instance=r;case"script":return r=uu(n.src),(a=e.querySelector(Qc(r)))?(t.instance=a,Rn(a),a):(i=n,(a=da.get(r))&&(i=qe({},n),b0(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Rn(a),Bn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(et(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,mh(i,n.precedence,e));return t.instance}function mh(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function T0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function b0(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var _h=null;function Oy(e,t,n){if(_h===null){var i=new Map,a=_h=new Map;a.set(n,i)}else a=_h,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Xc]||r[On]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Py(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function uC(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function p1(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function cC(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=kl(i.href),r=t.querySelector(jc(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=rd.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Rn(r);return}r=t.ownerDocument||t,i=d1(i),(a=da.get(a))&&T0(i,a),r=r.createElement("link"),Rn(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Bn(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=rd.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ip=0;function fC(e,t){return e.stylesheets&&e.count===0&&gh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Ip===0&&(Ip=62500*W2());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gh(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Ip?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function rd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sd=null;function gh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sd=new Map,t.forEach(hC,e),sd=null,rd.call(e))}function hC(e,t){if(!(t.state.loading&4)){var n=sd.get(e);if(n)var i=n.get(null);else{n=new Map,sd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=rd.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Ac={$$typeof:rr,Provider:null,Consumer:null,_currentValue:Ks,_currentValue2:Ks,_threadCount:0};function dC(e,t,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sp(0),this.hiddenUpdates=sp(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function m1(e,t,n,i,a,r,s,o,l,u,c,d){return e=new dC(e,t,n,s,l,u,c,d,o),t=1,r===!0&&(t|=24),r=Oi(3,null,null,t),e.current=r,r.stateNode=e,t=Qg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},t0(r),e}function _1(e){return e?(e=ul,e):ul}function g1(e,t,n,i,a,r){a=_1(a),i.context===null?i.context=a:i.pendingContext=a,i=ts(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=es(e,i,t),n!==null&&(fi(n,e,t),Yu(n,e,t))}function zy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function A0(e,t){zy(e,t),(e=e.alternate)&&zy(e,t)}function v1(e){if(e.tag===13||e.tag===31){var t=Mo(e,67108864);t!==null&&fi(t,e,67108864),A0(e,67108864)}}function Iy(e){if(e.tag===13||e.tag===31){var t=ki();t=Ig(t);var n=Mo(e,t);n!==null&&fi(n,e,t),A0(e,t)}}var od=!0;function pC(e,t,n,i){var a=Vt.T;Vt.T=null;var r=ye.p;try{ye.p=2,C0(e,t,n,i)}finally{ye.p=r,Vt.T=a}}function mC(e,t,n,i){var a=Vt.T;Vt.T=null;var r=ye.p;try{ye.p=8,C0(e,t,n,i)}finally{ye.p=r,Vt.T=a}}function C0(e,t,n,i){if(od){var a=M_(i);if(a===null)Pp(e,t,i,ld,n),By(e,i);else if(gC(a,e,t,n,i))i.stopPropagation();else if(By(e,i),t&4&&-1<_C.indexOf(e)){for(;a!==null;){var r=au(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ps(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Vi(s);o.entanglements[1]|=l,s&=~l}Ga(r),!(ve&6)&&(Qh=Hi()+500,Kc(0))}}break;case 31:case 13:o=Mo(r,2),o!==null&&fi(o,r,2),Hd(),A0(r,2)}if(r=M_(i),r===null&&Pp(e,t,i,ld,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Pp(e,t,i,null,n)}}function M_(e){return e=Gg(e),R0(e)}var ld=null;function R0(e){if(ld=null,e=il(e),e!==null){var t=Hc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=BS(t),e!==null)return e;e=null}else if(n===31){if(e=FS(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ld=e,null}function y1(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eA()){case kS:return 2;case XS:return 8;case Ih:case nA:return 32;case WS:return 268435456;default:return 32}default:return 32}}var E_=!1,as=null,rs=null,ss=null,Cc=new Map,Rc=new Map,Hr=[],_C="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function By(e,t){switch(e){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":rs=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Cc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rc.delete(t.pointerId)}}function vu(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=au(t),t!==null&&v1(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function gC(e,t,n,i,a){switch(t){case"focusin":return as=vu(as,e,t,n,i,a),!0;case"dragenter":return rs=vu(rs,e,t,n,i,a),!0;case"mouseover":return ss=vu(ss,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return Cc.set(r,vu(Cc.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Rc.set(r,vu(Rc.get(r)||null,e,t,n,i,a)),!0}return!1}function x1(e){var t=il(e.target);if(t!==null){var n=Hc(t);if(n!==null){if(t=n.tag,t===13){if(t=BS(n),t!==null){e.blockedOn=t,Mv(e.priority,function(){Iy(n)});return}}else if(t===31){if(t=FS(n),t!==null){e.blockedOn=t,Mv(e.priority,function(){Iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=M_(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Gm=i,n.target.dispatchEvent(i),Gm=null}else return t=au(n),t!==null&&v1(t),e.blockedOn=n,!1;t.shift()}return!0}function Fy(e,t,n){vh(e)&&n.delete(t)}function vC(){E_=!1,as!==null&&vh(as)&&(as=null),rs!==null&&vh(rs)&&(rs=null),ss!==null&&vh(ss)&&(ss=null),Cc.forEach(Fy),Rc.forEach(Fy)}function yf(e,t){e.blockedOn===t&&(e.blockedOn=null,E_||(E_=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,vC)))}var xf=null;function Hy(e){xf!==e&&(xf=e,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,function(){xf===e&&(xf=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(R0(i||n)===null)continue;break}var r=au(n);r!==null&&(e.splice(t,3),t-=3,i_(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Xl(e){function t(l){return yf(l,e)}as!==null&&yf(as,e),rs!==null&&yf(rs,e),ss!==null&&yf(ss,e),Cc.forEach(t),Rc.forEach(t);for(var n=0;n<Hr.length;n++){var i=Hr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)x1(n),n.blockedOn===null&&Hr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[yi]||null;if(typeof r=="function")s||Hy(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[yi]||null)o=s.formAction;else if(R0(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Hy(n)}}}function S1(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function w0(e){this._internalRoot=e}kd.prototype.render=w0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(et(409));var n=t.current,i=ki();g1(n,i,e,t,null,null)};kd.prototype.unmount=w0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;g1(e.current,2,null,e,null,null),Hd(),t[iu]=null}};function kd(e){this._internalRoot=e}kd.prototype.unstable_scheduleHydration=function(e){if(e){var t=jS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hr.length&&t!==0&&t<Hr[n].priority;n++);Hr.splice(n,0,e),n===0&&x1(e)}};var Gy=zS.version;if(Gy!=="19.2.5")throw Error(et(527,Gy,"19.2.5"));ye.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(et(188)):(e=Object.keys(e).join(","),Error(et(268,e)));return e=Zb(t),e=e!==null?HS(e):null,e=e===null?null:e.stateNode,e};var yC={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Vt,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sf.isDisabled&&Sf.supportsFiber)try{Gc=Sf.inject(yC),Gi=Sf}catch{}}Ad.createRoot=function(e,t){if(!IS(e))throw Error(et(299));var n=!1,i="",a=hE,r=dE,s=pE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=m1(e,1,!1,null,null,n,i,null,a,r,s,S1),e[iu]=t.current,E0(e),new w0(t)};Ad.hydrateRoot=function(e,t,n){if(!IS(e))throw Error(et(299));var i=!1,a="",r=hE,s=dE,o=pE,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=m1(e,1,!0,t,n??null,i,a,l,r,s,o,S1),t.context=_1(null),n=t.current,i=ki(),i=Ig(i),a=ts(i),a.callback=null,es(n,a,i),n=i,t.current.lanes=n,kc(t,n),Ga(t),e[iu]=t.current,E0(e),new kd(t)};Ad.version="19.2.5";function M1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M1)}catch(e){console.error(e)}}M1(),DS.exports=Ad;var xC=DS.exports;const SC=MS(xC);function $a(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wc={duration:.5,overwrite:!1,delay:0},D0,Fn,Ze,oa=1e8,Pe=1/oa,T_=Math.PI*2,MC=T_/4,EC=0,T1=Math.sqrt,TC=Math.cos,bC=Math.sin,Un=function(t){return typeof t=="string"},en=function(t){return typeof t=="function"},xr=function(t){return typeof t=="number"},U0=function(t){return typeof t>"u"},Fa=function(t){return typeof t=="object"},hi=function(t){return t!==!1},L0=function(){return typeof window<"u"},Mf=function(t){return en(t)||Un(t)},b1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},qn=Array.isArray,AC=/random\([^)]+\)/g,CC=/,\s*/g,Vy=/(?:-?\.?\d|\.)+/gi,A1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,dl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Bp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,C1=/[+-]=-?[.\d]+/,RC=/[^,'"\[\]\s]+/gi,wC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,Ta,b_,N0,Yi={},ud={},R1,w1=function(t){return(ud=Wl(t,Yi))&&xi},O0=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Dc=function(t,n){return!n&&console.warn(t)},D1=function(t,n){return t&&(Yi[t]=n)&&ud&&(ud[t]=n)||Yi},Uc=function(){return 0},DC={suppressEvents:!0,isStart:!0,kill:!1},yh={suppressEvents:!0,kill:!1},UC={suppressEvents:!0},P0={},os=[],A_={},U1,Di={},Fp={},ky=30,xh=[],z0="",I0=function(t){var n=t[0],i,a;if(Fa(n)||en(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(a=xh.length;a--&&!xh[a].targetTest(n););i=xh[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new $1(t[a],i)))||t.splice(a,1);return t},to=function(t){return t._gsap||I0(la(t))[0]._gsap},L1=function(t,n,i){return(i=t[n])&&en(i)?t[n]():U0(i)&&t.getAttribute&&t.getAttribute(n)||i},di=function(t,n){return(t=t.split(",")).forEach(n)||t},an=function(t){return Math.round(t*1e5)/1e5||0},je=function(t){return Math.round(t*1e7)/1e7||0},Tl=function(t,n){var i=n.charAt(0),a=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},LC=function(t,n){for(var i=n.length,a=0;t.indexOf(n[a])<0&&++a<i;);return a<i},cd=function(){var t=os.length,n=os.slice(0),i,a;for(A_={},os.length=0,i=0;i<t;i++)a=n[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},B0=function(t){return!!(t._initted||t._startAt||t.add)},N1=function(t,n,i,a){os.length&&!Fn&&cd(),t.render(n,i,!!(Fn&&n<0&&B0(t))),os.length&&!Fn&&cd()},O1=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(RC).length<2?n:Un(t)?t.trim():t},P1=function(t){return t},Zi=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},NC=function(t){return function(n,i){for(var a in i)a in n||a==="duration"&&t||a==="ease"||(n[a]=i[a])}},Wl=function(t,n){for(var i in n)t[i]=n[i];return t},Xy=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Fa(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},fd=function(t,n){var i={},a;for(a in t)a in n||(i[a]=t[a]);return i},nc=function(t){var n=t.parent||Qe,i=t.keyframes?NC(qn(t.keyframes)):Zi;if(hi(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},OC=function(t,n){for(var i=t.length,a=i===n.length;a&&i--&&t[i]===n[i];);return i<0},z1=function(t,n,i,a,r){var s=t[a],o;if(r)for(o=n[r];s&&s[r]>o;)s=s._prev;return s?(n._next=s._next,s._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[a]=n,n._prev=s,n.parent=n._dp=t,n},Xd=function(t,n,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var r=n._prev,s=n._next;r?r._next=s:t[i]===n&&(t[i]=s),s?s._prev=r:t[a]===n&&(t[a]=r),n._next=n._prev=n.parent=null},_s=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},eo=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},PC=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},C_=function(t,n,i,a){return t._startAt&&(Fn?t._startAt.revert(yh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,a))},zC=function e(t){return!t||t._ts&&e(t.parent)},Wy=function(t){return t._repeat?ql(t._tTime,t=t.duration()+t._rDelay)*t:0},ql=function(t,n){var i=Math.floor(t=je(t/n));return t&&i===t?i-1:i},hd=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Wd=function(t){return t._end=je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Pe)||0))},qd=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=je(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Wd(t),i._dirty||eo(i,t)),t},I1=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=hd(t.rawTime(),n),(!n._dur||Jc(0,n.totalDuration(),i)-n._tTime>Pe)&&n.render(i,!0)),eo(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Pe}},Ra=function(t,n,i,a){return n.parent&&_s(n),n._start=je((xr(i)?i:i||t!==Qe?Qi(t,i,n):t._time)+n._delay),n._end=je(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),z1(t,n,"_first","_last",t._sort?"_start":0),R_(n)||(t._recent=n),a||I1(t,n),t._ts<0&&qd(t,t._tTime),t},B1=function(t,n){return(Yi.ScrollTrigger||O0("scrollTrigger",n))&&Yi.ScrollTrigger.create(n,t)},F1=function(t,n,i,a,r){if(H0(t,n,r),!t._initted)return 1;if(!i&&t._pt&&!Fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&U1!==Pi.frame)return os.push(t),t._lazy=[r,a],1},IC=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},R_=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},BC=function(t,n,i,a){var r=t.ratio,s=n<0||!n&&(!t._start&&IC(t)&&!(!t._initted&&R_(t))||(t._ts<0||t._dp._ts<0)&&!R_(t))?0:1,o=t._rDelay,l=0,u,c,d;if(o&&t._repeat&&(l=Jc(0,t._tDur,n),c=ql(l,o),t._yoyo&&c&1&&(s=1-s),c!==ql(t._tTime,o)&&(r=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==r||Fn||a||t._zTime===Pe||!n&&t._zTime){if(!t._initted&&F1(t,n,a,i,l))return;for(d=t._zTime,t._zTime=n||(i?Pe:0),i||(i=n&&!d),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=l,u=t._pt;u;)u.r(s,u.d),u=u._next;n<0&&C_(t,n,i,!0),t._onUpdate&&!i&&Bi(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Bi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===s&&(s&&_s(t,1),!i&&!Fn&&(Bi(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},FC=function(t,n,i){var a;if(i>n)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>n)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<n)return a;a=a._prev}},Yl=function(t,n,i,a){var r=t._repeat,s=je(n)||0,o=t._tTime/t._tDur;return o&&!a&&(t._time*=s/t._dur),t._dur=s,t._tDur=r?r<0?1e10:je(s*(r+1)+t._rDelay*r):s,o>0&&!a&&qd(t,t._tTime=t._tDur*o),t.parent&&Wd(t),i||eo(t.parent,t),t},qy=function(t){return t instanceof ci?eo(t):Yl(t,t._dur)},HC={_start:0,endTime:Uc,totalDuration:Uc},Qi=function e(t,n,i){var a=t.labels,r=t._recent||HC,s=t.duration()>=oa?r.endTime(!1):t._dur,o,l,u;return Un(n)&&(isNaN(n)||n in a)?(l=n.charAt(0),u=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(o<0?r:i).totalDuration()/100:1)):o<0?(n in a||(a[n]=s),a[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),u&&i&&(l=l/100*(qn(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:s+l)):n==null?s:+n},ic=function(t,n,i){var a=xr(n[1]),r=(a?2:1)+(t<2?0:1),s=n[r],o,l;if(a&&(s.duration=n[1]),s.parent=i,t){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=hi(l.vars.inherit)&&l.parent;s.immediateRender=hi(o.immediateRender),t<2?s.runBackwards=1:s.startAt=n[r-1]}return new dn(n[0],s,n[r+1])},Es=function(t,n){return t||t===0?n(t):n},Jc=function(t,n,i){return i<t?t:i>n?n:i},Xn=function(t,n){return!Un(t)||!(n=wC.exec(t))?"":n[1]},GC=function(t,n,i){return Es(i,function(a){return Jc(t,n,a)})},w_=[].slice,H1=function(t,n){return t&&Fa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Fa(t[0]))&&!t.nodeType&&t!==Ta},VC=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(a){var r;return Un(a)&&!n||H1(a,1)?(r=i).push.apply(r,la(a)):i.push(a)})||i},la=function(t,n,i){return Ze&&!n&&Ze.selector?Ze.selector(t):Un(t)&&!i&&(b_||!Zl())?w_.call((n||N0).querySelectorAll(t),0):qn(t)?VC(t,i):H1(t)?w_.call(t,0):t?[t]:[]},D_=function(t){return t=la(t)[0]||Dc("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return la(n,i.querySelectorAll?i:i===t?Dc("Invalid scope")||N0.createElement("div"):t)}},G1=function(t){return t.sort(function(){return .5-Math.random()})},V1=function(t){if(en(t))return t;var n=Fa(t)?t:{each:t},i=no(n.ease),a=n.from||0,r=parseFloat(n.base)||0,s={},o=a>0&&a<1,l=isNaN(a)||o,u=n.axis,c=a,d=a;return Un(a)?c=d={center:.5,edges:.5,end:1}[a]||0:!o&&l&&(c=a[0],d=a[1]),function(f,h,g){var _=(g||n).length,m=s[_],p,v,y,x,C,A,E,R,M;if(!m){if(M=n.grid==="auto"?0:(n.grid||[1,oa])[1],!M){for(E=-oa;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=s[_]=[],p=l?Math.min(M,_)*c-.5:a%M,v=M===oa?0:l?_*d/M-.5:a/M|0,E=0,R=oa,A=0;A<_;A++)y=A%M-p,x=v-(A/M|0),m[A]=C=u?Math.abs(u==="y"?x:y):T1(y*y+x*x),C>E&&(E=C),C<R&&(R=C);a==="random"&&G1(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(a==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Xn(n.amount||n.each)||0,i=i&&_<0?eR(i):i}return _=(m[f]-m.min)/m.max||0,je(m.b+(i?i(_):_)*m.v)+m.u}},U_=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=je(Math.round(parseFloat(i)/t)*t*n);return(a-a%1)/n+(xr(i)?0:Xn(i))}},k1=function(t,n){var i=qn(t),a,r;return!i&&Fa(t)&&(a=i=t.radius||oa,t.values?(t=la(t.values),(r=!xr(t[0]))&&(a*=a)):t=U_(t.increment)),Es(n,i?en(t)?function(s){return r=t(s),Math.abs(r-s)<=a?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),u=oa,c=0,d=t.length,f,h;d--;)r?(f=t[d].x-o,h=t[d].y-l,f=f*f+h*h):f=Math.abs(t[d]-o),f<u&&(u=f,c=d);return c=!a||u<=a?t[c]:s,r||c===s||xr(s)?c:c+Xn(s)}:U_(t))},X1=function(t,n,i,a){return Es(qn(t)?!n:i===!0?!!(i=0):!a,function(){return qn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*a)/a})},kC=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(a){return n.reduce(function(r,s){return s(r)},a)}},XC=function(t,n){return function(i){return t(parseFloat(i))+(n||Xn(i))}},WC=function(t,n,i){return q1(t,n,0,1,i)},W1=function(t,n,i){return Es(i,function(a){return t[~~n(a)]})},qC=function e(t,n,i){var a=n-t;return qn(t)?W1(t,e(0,t.length),n):Es(i,function(r){return(a+(r-t)%a)%a+t})},YC=function e(t,n,i){var a=n-t,r=a*2;return qn(t)?W1(t,e(0,t.length-1),n):Es(i,function(s){return s=(r+(s-t)%r)%r||0,t+(s>a?r-s:s)})},Lc=function(t){return t.replace(AC,function(n){var i=n.indexOf("[")+1,a=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(CC);return X1(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},q1=function(t,n,i,a,r){var s=n-t,o=a-i;return Es(r,function(l){return i+((l-t)/s*o||0)})},ZC=function e(t,n,i,a){var r=isNaN(t+n)?0:function(h){return(1-h)*t+h*n};if(!r){var s=Un(t),o={},l,u,c,d,f;if(i===!0&&(a=1)&&(i=null),s)t={p:t},n={p:n};else if(qn(t)&&!qn(n)){for(c=[],d=t.length,f=d-2,u=1;u<d;u++)c.push(e(t[u-1],t[u]));d--,r=function(g){g*=d;var _=Math.min(f,~~g);return c[_](g-_)},i=n}else a||(t=Wl(qn(t)?[]:{},t));if(!c){for(l in n)F0.call(o,t,l,"get",n[l]);r=function(g){return k0(g,o)||(s?t.p:t)}}}return Es(i,r)},Yy=function(t,n,i){var a=t.labels,r=oa,s,o,l;for(s in a)o=a[s]-n,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Bi=function(t,n,i){var a=t.vars,r=a[n],s=Ze,o=t._ctx,l,u,c;if(r)return l=a[n+"Params"],u=a.callbackScope||t,i&&os.length&&cd(),o&&(Ze=o),c=l?r.apply(u,l):r.call(u),Ze=s,c},Ou=function(t){return _s(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fn),t.progress()<1&&Bi(t,"onInterrupt"),t},pl,Y1=[],Z1=function(t){if(t)if(t=!t.name&&t.default||t,L0()||t.headless){var n=t.name,i=en(t),a=n&&!i&&t.init?function(){this._props=[]}:t,r={init:Uc,render:k0,add:F0,kill:fR,modifier:cR,rawVars:0},s={targetTest:0,get:0,getSetter:V0,aliases:{},register:0};if(Zl(),t!==a){if(Di[n])return;Zi(a,Zi(fd(t,r),s)),Wl(a.prototype,Wl(r,fd(t,s))),Di[a.prop=n]=a,t.targetTest&&(xh.push(a),P0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}D1(n,a),t.register&&t.register(xi,a,pi)}else Y1.push(t)},Oe=255,Pu={aqua:[0,Oe,Oe],lime:[0,Oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Oe],navy:[0,0,128],white:[Oe,Oe,Oe],olive:[128,128,0],yellow:[Oe,Oe,0],orange:[Oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Oe,0,0],pink:[Oe,192,203],cyan:[0,Oe,Oe],transparent:[Oe,Oe,Oe,0]},Hp=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*Oe+.5|0},K1=function(t,n,i){var a=t?xr(t)?[t>>16,t>>8&Oe,t&Oe]:0:Pu.black,r,s,o,l,u,c,d,f,h,g;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Pu[t])a=Pu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),s=t.charAt(2),o=t.charAt(3),t="#"+r+r+s+s+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&Oe,a&Oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&Oe,t&Oe]}else if(t.substr(0,3)==="hsl"){if(a=g=t.match(Vy),!n)l=+a[0]%360/360,u=+a[1]/100,c=+a[2]/100,s=c<=.5?c*(u+1):c+u-c*u,r=c*2-s,a.length>3&&(a[3]*=1),a[0]=Hp(l+1/3,r,s),a[1]=Hp(l,r,s),a[2]=Hp(l-1/3,r,s);else if(~t.indexOf("="))return a=t.match(A1),i&&a.length<4&&(a[3]=1),a}else a=t.match(Vy)||Pu.transparent;a=a.map(Number)}return n&&!g&&(r=a[0]/Oe,s=a[1]/Oe,o=a[2]/Oe,d=Math.max(r,s,o),f=Math.min(r,s,o),c=(d+f)/2,d===f?l=u=0:(h=d-f,u=c>.5?h/(2-d-f):h/(d+f),l=d===r?(s-o)/h+(s<o?6:0):d===s?(o-r)/h+2:(r-s)/h+4,l*=60),a[0]=~~(l+.5),a[1]=~~(u*100+.5),a[2]=~~(c*100+.5)),i&&a.length<4&&(a[3]=1),a},j1=function(t){var n=[],i=[],a=-1;return t.split(ls).forEach(function(r){var s=r.match(dl)||[];n.push.apply(n,s),i.push(a+=s.length+1)}),n.c=i,n},Zy=function(t,n,i){var a="",r=(t+a).match(ls),s=n?"hsla(":"rgba(",o=0,l,u,c,d;if(!r)return t;if(r=r.map(function(f){return(f=K1(f,n,1))&&s+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=j1(t),l=i.c,l.join(a)!==c.c.join(a)))for(u=t.replace(ls,"1").split(dl),d=u.length-1;o<d;o++)a+=u[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(c.length?c:r.length?r:i).shift());if(!u)for(u=t.split(ls),d=u.length-1;o<d;o++)a+=u[o]+r[o];return a+u[d]},ls=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Pu)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),KC=/hsl[a]?\(/,Q1=function(t){var n=t.join(" "),i;if(ls.lastIndex=0,ls.test(n))return i=KC.test(n),t[1]=Zy(t[1],i),t[0]=Zy(t[0],i,j1(t[1])),!0},Nc,Pi=function(){var e=Date.now,t=500,n=33,i=e(),a=i,r=1e3/240,s=r,o=[],l,u,c,d,f,h,g=function _(m){var p=e()-a,v=m===!0,y,x,C,A;if((p>t||p<0)&&(i+=p-n),a+=p,C=a-i,y=C-s,(y>0||v)&&(A=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,s+=y+(y>=r?4:r-y),x=1),v||(l=u(_)),x)for(h=0;h<o.length;h++)o[h](C,f,A,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){R1&&(!b_&&L0()&&(Ta=b_=window,N0=Ta.document||{},Yi.gsap=xi,(Ta.gsapVersions||(Ta.gsapVersions=[])).push(xi.version),w1(ud||Ta.GreenSockGlobals||!Ta.gsap&&Ta||{}),Y1.forEach(Z1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,s-d.time*1e3+1|0)},Nc=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nc=0,u=Uc},lagSmoothing:function(m,p){t=m||1/0,n=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),s=d.time*1e3+r},add:function(m,p,v){var y=p?function(x,C,A,E){m(x,C,A,E),d.remove(y)}:m;return d.remove(m),o[v?"unshift":"push"](y),Zl(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d}(),Zl=function(){return!Nc&&Pi.wake()},he={},jC=/^[\d.\-M][\d.\-,\s]/,QC=/["']/g,JC=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),a=i[0],r=1,s=i.length,o,l,u;r<s;r++)l=i[r],o=r!==s-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),n[a]=isNaN(u)?u.replace(QC,"").trim():+u,a=l.substr(o+1).trim();return n},$C=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",n);return t.substring(n,~a&&a<i?t.indexOf(")",i+1):i)},tR=function(t){var n=(t+"").split("("),i=he[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[JC(n[1])]:$C(t).split(",").map(O1)):he._CE&&jC.test(t)?he._CE("",t):i},eR=function(t){return function(n){return 1-t(1-n)}},no=function(t,n){return t&&(en(t)?t:he[t]||tR(t))||n},To=function(t,n,i,a){i===void 0&&(i=function(l){return 1-n(1-l)}),a===void 0&&(a=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var r={easeIn:n,easeOut:i,easeInOut:a},s;return di(t,function(o){he[o]=Yi[o]=r,he[s=o.toLowerCase()]=i;for(var l in r)he[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=he[o+"."+l]=r[l]}),r},J1=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Gp=function e(t,n,i){var a=n>=1?n:1,r=(i||(t?.3:.45))/(n<1?n:1),s=r/T_*(Math.asin(1/a)||0),o=function(c){return c===1?1:a*Math.pow(2,-10*c)*bC((c-s)*r)+1},l=t==="out"?o:t==="in"?function(u){return 1-o(1-u)}:J1(o);return r=T_/r,l.config=function(u,c){return e(t,u,c)},l},Vp=function e(t,n){n===void 0&&(n=1.70158);var i=function(s){return s?--s*s*((n+1)*s+n)+1:0},a=t==="out"?i:t==="in"?function(r){return 1-i(1-r)}:J1(i);return a.config=function(r){return e(t,r)},a};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;To(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});he.Linear.easeNone=he.none=he.Linear.easeIn;To("Elastic",Gp("in"),Gp("out"),Gp());(function(e,t){var n=1/t,i=2*n,a=2.5*n,r=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<a?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};To("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);To("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});To("Circ",function(e){return-(T1(1-e*e)-1)});To("Sine",function(e){return e===1?1:-TC(e*MC)+1});To("Back",Vp("in"),Vp("out"),Vp());he.SteppedEase=he.steps=Yi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,a=t+(n?0:1),r=n?1:0,s=1-Pe;return function(o){return((a*Jc(0,s,o)|0)+r)*i}}};wc.ease=he["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return z0+=e+","+e+"Params,"});var $1=function(t,n){this.id=EC++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:L1,this.set=n?n.getSetter:V0},Oc=function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Yl(this,+n.duration,1,1),this.data=n.data,Ze&&(this._ctx=Ze,Ze.data.push(this)),Nc||Pi.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Yl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if(Zl(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(qd(this,i),!r._dp||r.parent||I1(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ra(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===Pe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),N1(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Wy(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Wy(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,a):this._repeat?ql(this._tTime,r)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-Pe?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?hd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pe?0:this._rts,this.totalTime(Jc(-Math.abs(this._delay),this.totalDuration(),r),a!==!1),Wd(this),PC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pe&&(this._tTime-=Pe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=je(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&Ra(a,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(hi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hd(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=UC);var a=Fn;return Fn=i,B0(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Fn=a,this},t.globalTime=function(i){for(var a=this,r=arguments.length?i:a.rawTime();a;)r=a._start+r/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,qy(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,qy(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(Qi(this,i),hi(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,hi(a)),this._dur||(this._zTime=-Pe),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pe,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=a&&r<this.endTime(!0)-Pe)},t.eventCallback=function(i,a,r){var s=this.vars;return arguments.length>1?(a?(s[i]=a,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=a)):delete s[i],this):s[i]},t.then=function(i){var a=this,r=a._prom;return new Promise(function(s){var o=en(i)?i:P1,l=function(){var c=a.then;a.then=null,r&&r(),en(o)&&(o=o(a))&&(o.then||o===a)&&(a.then=c),s(o),a.then=c};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?l():a._prom=l})},t.kill=function(){Ou(this)},e}();Zi(Oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pe,_prom:0,_ps:!1,_rts:1});var ci=function(e){E1(t,e);function t(i,a){var r;return i===void 0&&(i={}),r=e.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=hi(i.sortChildren),Qe&&Ra(i.parent||Qe,$a(r),a),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&B1($a(r),i.scrollTrigger),r}var n=t.prototype;return n.to=function(a,r,s){return ic(0,arguments,this),this},n.from=function(a,r,s){return ic(1,arguments,this),this},n.fromTo=function(a,r,s,o){return ic(2,arguments,this),this},n.set=function(a,r,s){return r.duration=0,r.parent=this,nc(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new dn(a,r,Qi(this,s),1),this},n.call=function(a,r,s){return Ra(this,dn.delayedCall(0,a,r),s)},n.staggerTo=function(a,r,s,o,l,u,c){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=u,s.onCompleteParams=c,s.parent=this,new dn(a,s,Qi(this,l)),this},n.staggerFrom=function(a,r,s,o,l,u,c){return s.runBackwards=1,nc(s).immediateRender=hi(s.immediateRender),this.staggerTo(a,r,s,o,l,u,c)},n.staggerFromTo=function(a,r,s,o,l,u,c,d){return o.startAt=s,nc(o).immediateRender=hi(o.immediateRender),this.staggerTo(a,r,o,l,u,c,d)},n.render=function(a,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=a<=0?0:je(a),d=this._zTime<0!=a<0&&(this._initted||!u),f,h,g,_,m,p,v,y,x,C,A,E;if(this!==Qe&&c>l&&a>=0&&(c=l),c!==this._tTime||s||d){if(o!==this._time&&u&&(c+=this._time-o,a+=this._time-o),f=c,x=this._start,y=this._ts,p=!y,d&&(u||(o=this._zTime),(a||!r)&&(this._zTime=a)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(m*100+a,r,s);if(f=je(c%m),c===l?(_=this._repeat,f=u):(C=je(c/m),_=~~C,_&&_===C&&(f=u,_--),f>u&&(f=u)),C=ql(this._tTime,m),!o&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),A&&_&1&&(f=u-f,E=1),_!==C&&!this._lock){var R=A&&C&1,M=R===(A&&_&1);if(_<C&&(R=!R),o=R?0:c%u?u:c,this._lock=1,this.render(o||(E?0:je(_*m)),r,!u)._lock=0,this._tTime=c,!r&&this.parent&&Bi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,o=R?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=FC(this,je(o),je(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,o=0),!o&&c&&u&&!r&&!C&&(Bi(this,"onStart"),this._tTime!==c))return this;if(f>=o&&a>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,s),f!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=-Pe);break}}h=g}else{h=this._last;for(var S=a<0?a:f;h;){if(g=h._prev,(h._act||S<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(a,r,s);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,r,s||Fn&&B0(h)),f!==this._time||!this._ts&&!p){v=0,g&&(c+=this._zTime=S?-Pe:Pe);break}}h=g}}if(v&&!r&&(this.pause(),v.render(f>=o?0:-Pe)._zTime=f>=o?1:-1,this._ts))return this._start=x,Wd(this),this.render(a,r,s);this._onUpdate&&!r&&Bi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((a||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&_s(this,1),!r&&!(a<0&&!o)&&(c||o||!l)&&(Bi(this,c===l&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(a,r){var s=this;if(xr(r)||(r=Qi(this,r,a)),!(a instanceof Oc)){if(qn(a))return a.forEach(function(o){return s.add(o,r)}),this;if(Un(a))return this.addLabel(a,r);if(en(a))a=dn.delayedCall(0,a);else return this}return this!==a?Ra(this,a,r):this},n.getChildren=function(a,r,s,o){a===void 0&&(a=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-oa);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof dn?r&&l.push(u):(s&&l.push(u),a&&l.push.apply(l,u.getChildren(!0,r,s)))),u=u._next;return l},n.getById=function(a){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===a)return r[s]},n.remove=function(a){return Un(a)?this.removeLabel(a):en(a)?this.killTweensOf(a):(a.parent===this&&Xd(this,a),a===this._recent&&(this._recent=this._last),eo(this))},n.totalTime=function(a,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(Pi.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),e.prototype.totalTime.call(this,a,r),this._forcing=0,this):this._tTime},n.addLabel=function(a,r){return this.labels[a]=Qi(this,r),this},n.removeLabel=function(a){return delete this.labels[a],this},n.addPause=function(a,r,s){var o=dn.delayedCall(0,r||Uc,s);return o.data="isPause",this._hasPause=1,Ra(this,o,Qi(this,a))},n.removePause=function(a){var r=this._first;for(a=Qi(this,a);r;)r._start===a&&r.data==="isPause"&&_s(r),r=r._next},n.killTweensOf=function(a,r,s){for(var o=this.getTweensOf(a,s),l=o.length;l--;)Yr!==o[l]&&o[l].kill(a,r);return this},n.getTweensOf=function(a,r){for(var s=[],o=la(a),l=this._first,u=xr(r),c;l;)l instanceof dn?LC(l._targets,o)&&(u?(!Yr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(c=l.getTweensOf(o,r)).length&&s.push.apply(s,c),l=l._next;return s},n.tweenTo=function(a,r){r=r||{};var s=this,o=Qi(s,a),l=r,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=dn.to(s,Zi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(u&&"time"in u?u.time:s._time))/s.timeScale())||Pe,onStart:function(){if(s.pause(),!h){var m=r.duration||Math.abs((o-(u&&"time"in u?u.time:s._time))/s.timeScale());g._dur!==m&&Yl(g,m,0,1).render(g._time,!0,!0),h=1}c&&c.apply(g,d||[])}},r));return f?g.render(0):g},n.tweenFromTo=function(a,r,s){return this.tweenTo(r,Zi({startAt:{time:Qi(this,a)}},s))},n.recent=function(){return this._recent},n.nextLabel=function(a){return a===void 0&&(a=this._time),Yy(this,Qi(this,a))},n.previousLabel=function(a){return a===void 0&&(a=this._time),Yy(this,Qi(this,a),1)},n.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+Pe)},n.shiftChildren=function(a,r,s){s===void 0&&(s=0);var o=this._first,l=this.labels,u;for(a=je(a);o;)o._start>=s&&(o._start+=a,o._end+=a),o=o._next;if(r)for(u in l)l[u]>=s&&(l[u]+=a);return eo(this)},n.invalidate=function(a){var r=this._first;for(this._lock=0;r;)r.invalidate(a),r=r._next;return e.prototype.invalidate.call(this,a)},n.clear=function(a){a===void 0&&(a=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),eo(this)},n.totalDuration=function(a){var r=0,s=this,o=s._last,l=oa,u,c,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-a:a));if(s._dirty){for(d=s.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,Ra(s,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(r-=c,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=je(c/s._ts),s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=u;Yl(s,s===Qe&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(a){if(Qe._ts&&(N1(Qe,hd(a,Qe)),U1=Pi.frame),Pi.frame>=ky){ky+=Xi.autoSleep||120;var r=Qe._first;if((!r||!r._ts)&&Xi.autoSleep&&Pi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pi.sleep()}}},t}(Oc);Zi(ci.prototype,{_lock:0,_hasPause:0,_forcing:0});var nR=function(t,n,i,a,r,s,o){var l=new pi(this._pt,t,n,0,1,rT,null,r),u=0,c=0,d,f,h,g,_,m,p,v;for(l.b=i,l.e=a,i+="",a+="",(p=~a.indexOf("random("))&&(a=Lc(a)),s&&(v=[i,a],s(v,t,n),i=v[0],a=v[1]),f=i.match(Bp)||[];d=Bp.exec(a);)g=d[0],_=a.substring(u,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Tl(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},u=Bp.lastIndex);return l.c=u<a.length?a.substring(u,a.length):"",l.fp=o,(C1.test(a)||p)&&(l.e=0),this._pt=l,l},F0=function(t,n,i,a,r,s,o,l,u,c){en(a)&&(a=a(r||0,t,s));var d=t[n],f=i!=="get"?i:en(d)?u?t[n.indexOf("set")||!en(t["get"+n.substr(3)])?n:"get"+n.substr(3)](u):t[n]():d,h=en(d)?u?oR:iT:G0,g;if(Un(a)&&(~a.indexOf("random(")&&(a=Lc(a)),a.charAt(1)==="="&&(g=Tl(f,a)+(Xn(f)||0),(g||g===0)&&(a=g))),!c||f!==a||L_)return!isNaN(f*a)&&a!==""?(g=new pi(this._pt,t,n,+f||0,a-(f||0),typeof d=="boolean"?uR:aT,0,h),u&&(g.fp=u),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(n in t)&&O0(n,a),nR.call(this,t,n,f,a,h,l||Xi.stringFilter,u))},iR=function(t,n,i,a,r){if(en(t)&&(t=ac(t,r,n,i,a)),!Fa(t)||t.style&&t.nodeType||qn(t)||b1(t))return Un(t)?ac(t,r,n,i,a):t;var s={},o;for(o in t)s[o]=ac(t[o],r,n,i,a);return s},tT=function(t,n,i,a,r,s){var o,l,u,c;if(Di[t]&&(o=new Di[t]).init(r,o.rawVars?n[t]:iR(n[t],a,r,s,i),i,a,s)!==!1&&(i._pt=l=new pi(i._pt,r,t,0,1,o.render,o,0,o.priority),i!==pl))for(u=i._ptLookup[i._targets.indexOf(r)],c=o._props.length;c--;)u[o._props[c]]=l;return o},Yr,L_,H0=function e(t,n,i){var a=t.vars,r=a.ease,s=a.startAt,o=a.immediateRender,l=a.lazy,u=a.onUpdate,c=a.runBackwards,d=a.yoyoEase,f=a.keyframes,h=a.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!D0,x=t.timeline,C=a.easeReverse||d,A,E,R,M,S,U,P,G,Y,K,N,I,O;if(x&&(!f||!r)&&(r="none"),t._ease=no(r,wc.ease),t._rEase=C&&(no(C)||t._ease),t._from=!x&&!!a.runBackwards,t._from&&(t.ratio=1),!x||f&&!a.stagger){if(G=m[0]?to(m[0]).harness:0,I=G&&a[G.prop],A=fd(a,P0),_&&(_._zTime<0&&_.progress(1),n<0&&c&&o&&!h?_.render(-1,!0):_.revert(c&&g?yh:DC),_._lazy=0),s){if(_s(t._startAt=dn.set(m,Zi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&hi(l),startAt:null,delay:0,onUpdate:u&&function(){return Bi(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Fn||!o&&!h)&&t._startAt.revert(yh),o&&g&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(c&&g&&!_){if(n&&(o=!1),R=Zi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&hi(l),immediateRender:o,stagger:0,parent:p},A),I&&(R[G.prop]=I),_s(t._startAt=dn.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Fn?t._startAt.revert(yh):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,Pe,Pe);else if(!n)return}for(t._pt=t._ptCache=0,l=g&&hi(l)||l&&!g,E=0;E<m.length;E++){if(S=m[E],P=S._gsap||I0(m)[E]._gsap,t._ptLookup[E]=K={},A_[P.id]&&os.length&&cd(),N=v===m?E:v.indexOf(S),G&&(Y=new G).init(S,I||A,t,N,v)!==!1&&(t._pt=M=new pi(t._pt,S,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(tt){K[tt]=M}),Y.priority&&(U=1)),!G||I)for(R in A)Di[R]&&(Y=tT(R,A,t,N,S,v))?Y.priority&&(U=1):K[R]=M=F0.call(t,S,R,"get",A[R],N,v,0,a.stringFilter);t._op&&t._op[E]&&t.kill(S,t._op[E]),y&&t._pt&&(Yr=t,Qe.killTweensOf(S,K,t.globalTime(n)),O=!t.parent,Yr=0),t._pt&&l&&(A_[P.id]=1)}U&&sT(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!O,f&&n<=0&&x.render(oa,!0,!0)},aR=function(t,n,i,a,r,s,o,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[n],c,d,f,h;if(!u)for(u=t._ptCache[n]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][n],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==n&&c.fp!==n;)c=c._next;if(!c)return L_=1,t.vars[n]="+=0",H0(t,o),L_=0,l?Dc(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(h=u.length;h--;)d=u[h],c=d._pt||d,c.s=(a||a===0)&&!r?a:c.s+(a||0)+s*c.c,c.c=i-c.s,d.e&&(d.e=an(i)+Xn(d.e)),d.b&&(d.b=c.s+Xn(d.b))},rR=function(t,n){var i=t[0]?to(t[0]).harness:0,a=i&&i.aliases,r,s,o,l;if(!a)return n;r=Wl({},n);for(s in a)if(s in r)for(l=a[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},sR=function(t,n,i,a){var r=n.ease||a||"power1.inOut",s,o;if(qn(n))o=i[t]||(i[t]=[]),n.forEach(function(l,u){return o.push({t:u/(n.length-1)*100,v:l,e:r})});else for(s in n)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(t),v:n[s],e:r})},ac=function(t,n,i,a,r){return en(t)?t.call(n,i,a,r):Un(t)&&~t.indexOf("random(")?Lc(t):t},eT=z0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",nT={};di(eT+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return nT[e]=1});var dn=function(e){E1(t,e);function t(i,a,r,s){var o;typeof a=="number"&&(r.duration=a,a=r,r=null),o=e.call(this,s?a:nc(a))||this;var l=o.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=a.parent||Qe,v=(qn(i)||b1(i)?xr(i[0]):"length"in a)?[i]:la(i),y,x,C,A,E,R,M,S;if(o._targets=v.length?I0(v):Dc("GSAP target "+i+" not found. https://gsap.com",!Xi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||f||Mf(u)||Mf(c)){a=o.vars;var U=a.easeReverse||a.yoyoEase;if(y=o.timeline=new ci({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),y.kill(),y.parent=y._dp=$a(o),y._start=0,f||Mf(u)||Mf(c)){if(A=v.length,M=f&&V1(f),Fa(f))for(E in f)~eT.indexOf(E)&&(S||(S={}),S[E]=f[E]);for(x=0;x<A;x++)C=fd(a,nT),C.stagger=0,U&&(C.easeReverse=U),S&&Wl(C,S),R=v[x],C.duration=+ac(u,$a(o),x,R,v),C.delay=(+ac(c,$a(o),x,R,v)||0)-o._delay,!f&&A===1&&C.delay&&(o._delay=c=C.delay,o._start+=c,C.delay=0),y.to(R,C,M?M(x,R,v):0),y._ease=he.none;y.duration()?u=c=0:o.timeline=0}else if(g){nc(Zi(y.vars.defaults,{ease:"none"})),y._ease=no(g.ease||a.ease||"none");var P=0,G,Y,K;if(qn(g))g.forEach(function(N){return y.to(v,N,">")}),y.duration();else{C={};for(E in g)E==="ease"||E==="easeEach"||sR(E,g[E],C,g.easeEach);for(E in C)for(G=C[E].sort(function(N,I){return N.t-I.t}),P=0,x=0;x<G.length;x++)Y=G[x],K={ease:Y.e,duration:(Y.t-(x?G[x-1].t:0))/100*u},K[E]=Y.v,y.to(v,K,P),P+=K.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||o.duration(u=y.duration())}else o.timeline=0;return h===!0&&!D0&&(Yr=$a(o),Qe.killTweensOf(v),Yr=0),Ra(p,$a(o),r),a.reversed&&o.reverse(),a.paused&&o.paused(!0),(d||!u&&!g&&o._start===je(p._time)&&hi(d)&&zC($a(o))&&p.data!=="nested")&&(o._tTime=-Pe,o.render(Math.max(0,-c)||0)),m&&B1($a(o),m),o}var n=t.prototype;return n.render=function(a,r,s){var o=this._time,l=this._tDur,u=this._dur,c=a<0,d=a>l-Pe&&!c?l:a<Pe?0:a,f,h,g,_,m,p,v,y;if(!u)BC(this,a,r,s);else if(d!==this._tTime||!a||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,y=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+a,r,s);if(f=je(d%_),d===l?(g=this._repeat,f=u):(m=je(d/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),p=this._yoyo&&g&1,p&&(f=u-f),m=ql(this._tTime,_),f===o&&!s&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=s=1,this.render(je(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(F1(this,c?a:f,s,r,d))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(a,r,s)}if(this._rEase){var x=f<o;if(x!==this._inv){var C=x?o:u-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=C?(x?-1:1)/C:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(Bi(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;y&&y.render(a<0?a:y._dur*y._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=a),this._onUpdate&&!r&&(c&&C_(this,a,r,s),Bi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Bi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&C_(this,a,!0,!0),(a||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_s(this,1),!r&&!(c&&!o)&&(d||o||p)&&(Bi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),e.prototype.invalidate.call(this,a)},n.resetTo=function(a,r,s,o,l){Nc||Pi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||H0(this,u),c=this._ease(u/this._dur),aR(this,a,r,s,o,c,u,l)?this.resetTo(a,r,s,o,1):(qd(this,0),this.parent||z1(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(a,r){if(r===void 0&&(r="all"),!a&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ou(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fn),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(a,r,Yr&&Yr.vars.overwrite!==!0)._first||Ou(this),this.parent&&s!==this.timeline.totalDuration()&&Yl(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=a?la(a):o,u=this._ptLookup,c=this._pt,d,f,h,g,_,m,p;if((!r||r==="all")&&OC(o,l))return r==="all"&&(this._pt=0),Ou(this);for(d=this._op=this._op||[],r!=="all"&&(Un(r)&&(_={},di(r,function(v){return _[v]=1}),r=_),r=rR(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=u[p],r==="all"?(d[p]=r,g=f,h={}):(h=d[p]=d[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Xd(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&c&&Ou(this),this},t.to=function(a,r){return new t(a,r,arguments[2])},t.from=function(a,r){return ic(1,arguments)},t.delayedCall=function(a,r,s,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},t.fromTo=function(a,r,s){return ic(2,arguments)},t.set=function(a,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(a,r)},t.killTweensOf=function(a,r,s){return Qe.killTweensOf(a,r,s)},t}(Oc);Zi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(e){dn[e]=function(){var t=new ci,n=w_.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var G0=function(t,n,i){return t[n]=i},iT=function(t,n,i){return t[n](i)},oR=function(t,n,i,a){return t[n](a.fp,i)},lR=function(t,n,i){return t.setAttribute(n,i)},V0=function(t,n){return en(t[n])?iT:U0(t[n])&&t.setAttribute?lR:G0},aT=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},uR=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},rT=function(t,n){var i=n._pt,a="";if(!t&&n.b)a=n.b;else if(t===1&&n.e)a=n.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=n.c}n.set(n.t,n.p,a,n)},k0=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},cR=function(t,n,i,a){for(var r=this._pt,s;r;)s=r._next,r.p===a&&r.modifier(t,n,i),r=s},fR=function(t){for(var n=this._pt,i,a;n;)a=n._next,n.p===t&&!n.op||n.op===t?Xd(this,n,"_pt"):n.dep||(i=1),n=a;return!i},hR=function(t,n,i,a){a.mSet(t,n,a.m.call(a.tween,i,a.mt),a)},sT=function(t){for(var n=t._pt,i,a,r,s;n;){for(i=n._next,a=r;a&&a.pr>n.pr;)a=a._next;(n._prev=a?a._prev:s)?n._prev._next=n:r=n,(n._next=a)?a._prev=n:s=n,n=i}t._pt=r},pi=function(){function e(n,i,a,r,s,o,l,u,c){this.t=i,this.s=r,this.c=s,this.p=a,this.r=o||aT,this.d=l||this,this.set=u||G0,this.pr=c||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,a,r){this.mSet=this.mSet||this.set,this.set=hR,this.m=i,this.mt=r,this.tween=a},e}();di(z0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return P0[e]=1});Yi.TweenMax=Yi.TweenLite=dn;Yi.TimelineLite=Yi.TimelineMax=ci;Qe=new ci({sortChildren:!1,defaults:wc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xi.stringFilter=Q1;var io=[],Sh={},dR=[],Ky=0,pR=0,kp=function(t){return(Sh[t]||dR).map(function(n){return n()})},N_=function(){var t=Date.now(),n=[];t-Ky>2&&(kp("matchMediaInit"),io.forEach(function(i){var a=i.queries,r=i.conditions,s,o,l,u;for(o in a)s=Ta.matchMedia(a[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,u=1);u&&(i.revert(),l&&n.push(i))}),kp("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),Ky=t,kp("matchMedia"))},oT=function(){function e(n,i){this.selector=i&&D_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=pR++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,a,r){en(i)&&(r=a,a=i,i=en);var s=this,o=function(){var u=Ze,c=s.selector,d;return u&&u!==s&&u.data.push(s),r&&(s.selector=D_(r)),Ze=s,d=a.apply(s,arguments),en(d)&&s._r.push(d),Ze=u,s.selector=c,s.isReverted=!1,d};return s.last=o,i===en?o(s,function(l){return s.add(null,l)}):i?s[i]=o:o},t.ignore=function(i){var a=Ze;Ze=null,i(this),Ze=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof e?i.push.apply(i,a.getTweens()):a instanceof dn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,u;l--;)u=r.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=r.data.length;l--;)u=r.data[l],u instanceof ci?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof dn)&&u.revert&&u.revert(i);r._r.forEach(function(c){return c(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),a)for(var s=io.length;s--;)io[s].id===this.id&&io.splice(s,1)},t.revert=function(i){this.kill(i||{})},e}(),mR=function(){function e(n){this.contexts=[],this.scope=n,Ze&&Ze.data.push(this)}var t=e.prototype;return t.add=function(i,a,r){Fa(i)||(i={matches:i});var s=new oT(0,r||this.scope),o=s.conditions={},l,u,c;Ze&&!s.selector&&(s.selector=Ze.selector),this.contexts.push(s),a=s.add("onMatch",a),s.queries=i;for(u in i)u==="all"?c=1:(l=Ta.matchMedia(i[u]),l&&(io.indexOf(s)<0&&io.push(s),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(N_):l.addEventListener("change",N_)));return c&&a(s,function(d){return s.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},e}(),dd={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(a){return Z1(a)})},timeline:function(t){return new ci(t)},getTweensOf:function(t,n){return Qe.getTweensOf(t,n)},getProperty:function(t,n,i,a){Un(t)&&(t=la(t)[0]);var r=to(t||{}).get,s=i?P1:O1;return i==="native"&&(i=""),t&&(n?s((Di[n]&&Di[n].get||r)(t,n,i,a)):function(o,l,u){return s((Di[o]&&Di[o].get||r)(t,o,l,u))})},quickSetter:function(t,n,i){if(t=la(t),t.length>1){var a=t.map(function(c){return xi.quickSetter(c,n,i)}),r=a.length;return function(c){for(var d=r;d--;)a[d](c)}}t=t[0]||{};var s=Di[n],o=to(t),l=o.harness&&(o.harness.aliases||{})[n]||n,u=s?function(c){var d=new s;pl._pt=0,d.init(t,i?c+i:c,pl,0,[t]),d.render(1,d),pl._pt&&k0(1,pl)}:o.set(t,l);return s?u:function(c){return u(t,l,i?c+i:c,o,1)}},quickTo:function(t,n,i){var a,r=xi.to(t,Zi((a={},a[n]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),s=function(l,u,c){return r.resetTo(n,l,u,c)};return s.tween=r,s},isTweening:function(t){return Qe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=no(t.ease,wc.ease)),Xy(wc,t||{})},config:function(t){return Xy(Xi,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,a=t.plugins,r=t.defaults,s=t.extendTimeline;(a||"").split(",").forEach(function(o){return o&&!Di[o]&&!Yi[o]&&Dc(n+" effect requires "+o+" plugin.")}),Fp[n]=function(o,l,u){return i(la(o),Zi(l||{},r),u)},s&&(ci.prototype[n]=function(o,l,u){return this.add(Fp[n](o,Fa(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,n){he[t]=no(n)},parseEase:function(t,n){return arguments.length?no(t,n):he},getById:function(t){return Qe.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new ci(t),a,r;for(i.smoothChildTiming=hi(t.smoothChildTiming),Qe.remove(i),i._dp=0,i._time=i._tTime=Qe._time,a=Qe._first;a;)r=a._next,(n||!(!a._dur&&a instanceof dn&&a.vars.onComplete===a._targets[0]))&&Ra(i,a,a._start-a._delay),a=r;return Ra(Qe,i,0),i},context:function(t,n){return t?new oT(t,n):Ze},matchMedia:function(t){return new mR(t)},matchMediaRefresh:function(){return io.forEach(function(t){var n=t.conditions,i,a;for(a in n)n[a]&&(n[a]=!1,i=1);i&&t.revert()})||N_()},addEventListener:function(t,n){var i=Sh[t]||(Sh[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=Sh[t],a=i&&i.indexOf(n);a>=0&&i.splice(a,1)},utils:{wrap:qC,wrapYoyo:YC,distribute:V1,random:X1,snap:k1,normalize:WC,getUnit:Xn,clamp:GC,splitColor:K1,toArray:la,selector:D_,mapRange:q1,pipe:kC,unitize:XC,interpolate:ZC,shuffle:G1},install:w1,effects:Fp,ticker:Pi,updateRoot:ci.updateRoot,plugins:Di,globalTimeline:Qe,core:{PropTween:pi,globals:D1,Tween:dn,Timeline:ci,Animation:Oc,getCache:to,_removeLinkedListItem:Xd,reverting:function(){return Fn},context:function(t){return t&&Ze&&(Ze.data.push(t),t._ctx=Ze),Ze},suppressOverwrites:function(t){return D0=t}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return dd[e]=dn[e]});Pi.add(ci.updateRoot);pl=dd.to({},{duration:0});var _R=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},gR=function(t,n){var i=t._targets,a,r,s;for(a in n)for(r=i.length;r--;)s=t._ptLookup[r][a],s&&(s=s.d)&&(s._pt&&(s=_R(s,a)),s&&s.modifier&&s.modifier(n[a],t,i[r],a))},Xp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(a,r,s){s._onInit=function(o){var l,u;if(Un(r)&&(l={},di(r,function(c){return l[c]=1}),r=l),n){l={};for(u in r)l[u]=n(r[u]);r=l}gR(o,r)}}}},xi=dd.registerPlugin({name:"attr",init:function(t,n,i,a,r){var s,o,l;this.tween=i;for(s in n)l=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(l||0)+"",n[s],a,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(t,n){for(var i=n._pt;i;)Fn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Xp("roundProps",U_),Xp("modifiers"),Xp("snap",k1))||dd;dn.version=ci.version=xi.version="3.15.0";R1=1;L0()&&Zl();he.Power0;he.Power1;he.Power2;he.Power3;he.Power4;he.Linear;he.Quad;he.Cubic;he.Quart;he.Quint;he.Strong;he.Elastic;he.Back;he.SteppedEase;he.Bounce;he.Sine;he.Expo;he.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var jy,Zr,bl,X0,Ws,Qy,W0,vR=function(){return typeof window<"u"},Sr={},Bs=180/Math.PI,Al=Math.PI/180,wo=Math.atan2,Jy=1e8,q0=/([A-Z])/g,yR=/(left|right|width|margin|padding|x)/i,xR=/[\s,\(]\S/,Na={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},O_=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},SR=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},MR=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},ER=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},TR=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},lT=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},uT=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},bR=function(t,n,i){return t.style[n]=i},AR=function(t,n,i){return t.style.setProperty(n,i)},CR=function(t,n,i){return t._gsap[n]=i},RR=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},wR=function(t,n,i,a,r){var s=t._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},DR=function(t,n,i,a,r){var s=t._gsap;s[n]=i,s.renderTransform(r,s)},Je="transform",mi=Je+"Origin",UR=function e(t,n){var i=this,a=this.target,r=a.style,s=a._gsap;if(t in Sr&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Na[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=er(a,o)}):this.tfm[t]=s.x?s[t]:er(a,t),t===mi&&(this.tfm.zOrigin=s.zOrigin);else return Na.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(Je)>=0)return;s.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(mi,n,"")),t=Je}(r||n)&&this.props.push(t,n,r[t])},cT=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},LR=function(){var t=this.props,n=this.target,i=n.style,a=n._gsap,r,s;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?n[t[r]](t[r+2]):n[t[r]]=t[r+2]:t[r+2]?i[t[r]]=t[r+2]:i.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(q0,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)a[s]=this.tfm[s];a.svg&&(a.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),r=W0(),(!r||!r.isStart)&&!i[Je]&&(cT(i),a.zOrigin&&i[mi]&&(i[mi]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},fT=function(t,n){var i={target:t,props:[],revert:LR,save:UR};return t._gsap||xi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(a){return i.save(a)}),i},hT,P_=function(t,n){var i=Zr.createElementNS?Zr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zr.createElement(t);return i&&i.style?i:Zr.createElement(t)},Fi=function e(t,n,i){var a=getComputedStyle(t);return a[n]||a.getPropertyValue(n.replace(q0,"-$1").toLowerCase())||a.getPropertyValue(n)||!i&&e(t,Kl(n)||n,1)||""},$y="O,Moz,ms,Ms,Webkit".split(","),Kl=function(t,n,i){var a=n||Ws,r=a.style,s=5;if(t in r&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!($y[s]+t in r););return s<0?null:(s===3?"ms":s>=0?$y[s]:"")+t},z_=function(){vR()&&window.document&&(jy=window,Zr=jy.document,bl=Zr.documentElement,Ws=P_("div")||{style:{}},P_("div"),Je=Kl(Je),mi=Je+"Origin",Ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hT=!!Kl("perspective"),W0=xi.core.reverting,X0=1)},tx=function(t){var n=t.ownerSVGElement,i=P_("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),r;a.style.display="block",i.appendChild(a),bl.appendChild(i);try{r=a.getBBox()}catch{}return i.removeChild(a),bl.removeChild(i),r},ex=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},dT=function(t){var n,i;try{n=t.getBBox()}catch{n=tx(t),i=1}return n&&(n.width||n.height)||i||(n=tx(t)),n&&!n.width&&!n.x&&!n.y?{x:+ex(t,["x","cx","x1"])||0,y:+ex(t,["y","cy","y1"])||0,width:0,height:0}:n},pT=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dT(t))},gs=function(t,n){if(n){var i=t.style,a;n in Sr&&n!==mi&&(n=Je),i.removeProperty?(a=n.substr(0,2),(a==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(a==="--"?n:n.replace(q0,"-$1").toLowerCase())):i.removeAttribute(n)}},Kr=function(t,n,i,a,r,s){var o=new pi(t._pt,n,i,0,1,s?uT:lT);return t._pt=o,o.b=a,o.e=r,t._props.push(i),o},nx={deg:1,rad:1,turn:1},NR={grid:1,flex:1},vs=function e(t,n,i,a){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=Ws.style,l=yR.test(n),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=a==="px",h=a==="%",g,_,m,p;if(a===s||!r||nx[a]||nx[s])return r;if(s!=="px"&&!f&&(r=e(t,n,i,"px")),p=t.getCTM&&pT(t),(h||s==="%")&&(Sr[n]||~n.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[c],an(h?r/g*d:r/100*g);if(o[l?"width":"height"]=d+(f?s:a),_=a!=="rem"&&~n.indexOf("adius")||a==="em"&&t.appendChild&&!u?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zr||!_.appendChild)&&(_=Zr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Pi.time&&!m.uncache)return an(r/m.width*d);if(h&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=d+a,g=t[c],v?t.style[n]=v:gs(t,n)}else(h||s==="%")&&!NR[Fi(_,"display")]&&(o.position=Fi(t,"position")),_===t&&(o.position="static"),_.appendChild(Ws),g=Ws[c],_.removeChild(Ws),o.position="absolute";return l&&h&&(m=to(_),m.time=Pi.time,m.width=_[c]),an(f?g*r/d:g&&r?d/g*r:0)},er=function(t,n,i,a){var r;return X0||z_(),n in Na&&n!=="transform"&&(n=Na[n],~n.indexOf(",")&&(n=n.split(",")[0])),Sr[n]&&n!=="transform"?(r=zc(t,a),r=n!=="transformOrigin"?r[n]:r.svg?r.origin:md(Fi(t,mi))+" "+r.zOrigin+"px"):(r=t.style[n],(!r||r==="auto"||a||~(r+"").indexOf("calc("))&&(r=pd[n]&&pd[n](t,n,i)||Fi(t,n)||L1(t,n)||(n==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?vs(t,n,r,i)+i:r},OR=function(t,n,i,a){if(!i||i==="none"){var r=Kl(n,t,1),s=r&&Fi(t,r,1);s&&s!==i?(n=r,i=s):n==="borderColor"&&(i=Fi(t,"borderTopColor"))}var o=new pi(this._pt,t.style,n,0,1,rT),l=0,u=0,c,d,f,h,g,_,m,p,v,y,x,C;if(o.b=i,o.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=Fi(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(_=t.style[n],t.style[n]=a,a=Fi(t,n)||a,_?t.style[n]=_:gs(t,n)),c=[i,a],Q1(c),i=c[0],a=c[1],f=i.match(dl)||[],C=a.match(dl)||[],C.length){for(;d=dl.exec(a);)m=d[0],v=a.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),m.charAt(1)==="="&&(m=Tl(h,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=dl.lastIndex-y.length,y||(y=y||Xi.units[n]||x,l===a.length&&(a+=y,o.e+=y)),x!==y&&(h=vs(t,n,_,y)||0),o._pt={_next:o._pt,p:v||u===1?v:",",s:h,c:p-h,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=l<a.length?a.substring(l,a.length):""}else o.r=n==="display"&&a==="none"?uT:lT;return C1.test(a)&&(o.e=0),this._pt=o,o},ix={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PR=function(t){var n=t.split(" "),i=n[0],a=n[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),n[0]=ix[i]||i,n[1]=ix[a]||a,n.join(" ")},zR=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,a=i.style,r=n.u,s=i._gsap,o,l,u;if(r==="all"||r===!0)a.cssText="",l=1;else for(r=r.split(","),u=r.length;--u>-1;)o=r[u],Sr[o]&&(l=1,o=o==="transformOrigin"?mi:Je),gs(i,o);l&&(gs(i,Je),s&&(s.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",zc(i,1),s.uncache=1,cT(a)))}},pd={clearProps:function(t,n,i,a,r){if(r.data!=="isFromStart"){var s=t._pt=new pi(t._pt,n,i,0,0,zR);return s.u=a,s.pr=-10,s.tween=r,t._props.push(i),1}}},Pc=[1,0,0,1,0,0],mT={},_T=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ax=function(t){var n=Fi(t,Je);return _T(n)?Pc:n.substr(7).match(A1).map(an)},Y0=function(t,n){var i=t._gsap||to(t),a=t.style,r=ax(t),s,o,l,u;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Pc:r):(r===Pc&&!t.offsetParent&&t!==bl&&!i.svg&&(l=a.display,a.display="block",s=t.parentNode,(!s||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,o=t.nextElementSibling,bl.appendChild(t)),r=ax(t),l?a.display=l:gs(t,"display"),u&&(o?s.insertBefore(t,o):s?s.appendChild(t):bl.removeChild(t))),n&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},I_=function(t,n,i,a,r,s){var o=t._gsap,l=r||Y0(t,!0),u=o.xOrigin||0,c=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],y=n.split(" "),x=parseFloat(y[0])||0,C=parseFloat(y[1])||0,A,E,R,M;i?l!==Pc&&(E=h*m-g*_)&&(R=x*(m/E)+C*(-_/E)+(_*v-m*p)/E,M=x*(-g/E)+C*(h/E)-(h*v-g*p)/E,x=R,C=M):(A=dT(t),x=A.x+(~y[0].indexOf("%")?x/100*A.width:x),C=A.y+(~(y[1]||y[0]).indexOf("%")?C/100*A.height:C)),a||a!==!1&&o.smooth?(p=x-u,v=C-c,o.xOffset=d+(p*h+v*_)-p,o.yOffset=f+(p*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=C,o.smooth=!!a,o.origin=n,o.originIsAbsolute=!!i,t.style[mi]="0px 0px",s&&(Kr(s,o,"xOrigin",u,x),Kr(s,o,"yOrigin",c,C),Kr(s,o,"xOffset",d,o.xOffset),Kr(s,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},zc=function(t,n){var i=t._gsap||new $1(t);if("x"in i&&!n&&!i.uncache)return i;var a=t.style,r=i.scaleX<0,s="px",o="deg",l=getComputedStyle(t),u=Fi(t,mi)||"0",c,d,f,h,g,_,m,p,v,y,x,C,A,E,R,M,S,U,P,G,Y,K,N,I,O,tt,w,ut,Dt,Yt,Z,nt;return c=d=f=_=m=p=v=y=x=0,h=g=1,i.svg=!!(t.getCTM&&pT(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(a[Je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Je]!=="none"?l[Je]:"")),a.scale=a.rotate=a.translate="none"),E=Y0(t,i.svg),i.svg&&(i.uncache?(O=t.getBBox(),u=i.xOrigin-O.x+"px "+(i.yOrigin-O.y)+"px",I=""):I=!n&&t.getAttribute("data-svg-origin"),I_(t,I||u,!!I||i.originIsAbsolute,i.smooth!==!1,E)),C=i.xOrigin||0,A=i.yOrigin||0,E!==Pc&&(U=E[0],P=E[1],G=E[2],Y=E[3],c=K=E[4],d=N=E[5],E.length===6?(h=Math.sqrt(U*U+P*P),g=Math.sqrt(Y*Y+G*G),_=U||P?wo(P,U)*Bs:0,v=G||Y?wo(G,Y)*Bs+_:0,v&&(g*=Math.abs(Math.cos(v*Al))),i.svg&&(c-=C-(C*U+A*G),d-=A-(C*P+A*Y))):(nt=E[6],Yt=E[7],w=E[8],ut=E[9],Dt=E[10],Z=E[11],c=E[12],d=E[13],f=E[14],R=wo(nt,Dt),m=R*Bs,R&&(M=Math.cos(-R),S=Math.sin(-R),I=K*M+w*S,O=N*M+ut*S,tt=nt*M+Dt*S,w=K*-S+w*M,ut=N*-S+ut*M,Dt=nt*-S+Dt*M,Z=Yt*-S+Z*M,K=I,N=O,nt=tt),R=wo(-G,Dt),p=R*Bs,R&&(M=Math.cos(-R),S=Math.sin(-R),I=U*M-w*S,O=P*M-ut*S,tt=G*M-Dt*S,Z=Y*S+Z*M,U=I,P=O,G=tt),R=wo(P,U),_=R*Bs,R&&(M=Math.cos(R),S=Math.sin(R),I=U*M+P*S,O=K*M+N*S,P=P*M-U*S,N=N*M-K*S,U=I,K=O),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=an(Math.sqrt(U*U+P*P+G*G)),g=an(Math.sqrt(N*N+nt*nt)),R=wo(K,N),v=Math.abs(R)>2e-4?R*Bs:0,x=Z?1/(Z<0?-Z:Z):0),i.svg&&(I=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!_T(Fi(t,Je)),I&&t.setAttribute("transform",I))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=an(h),i.scaleY=an(g),i.rotation=an(_)+o,i.rotationX=an(m)+o,i.rotationY=an(p)+o,i.skewX=v+o,i.skewY=y+o,i.transformPerspective=x+s,(i.zOrigin=parseFloat(u.split(" ")[2])||!n&&i.zOrigin||0)&&(a[mi]=md(u)),i.xOffset=i.yOffset=0,i.force3D=Xi.force3D,i.renderTransform=i.svg?BR:hT?gT:IR,i.uncache=0,i},md=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wp=function(t,n,i){var a=Xn(n);return an(parseFloat(n)+parseFloat(vs(t,"x",i+"px",a)))+a},IR=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,gT(t,n)},As="0deg",yu="0px",Cs=") ",gT=function(t,n){var i=n||this,a=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,v=i.target,y=i.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(y&&(d!==As||c!==As)){var A=parseFloat(c)*Al,E=Math.sin(A),R=Math.cos(A),M;A=parseFloat(d)*Al,M=Math.cos(A),s=Wp(v,s,E*M*-y),o=Wp(v,o,-Math.sin(A)*-y),l=Wp(v,l,R*M*-y+y)}m!==yu&&(x+="perspective("+m+Cs),(a||r)&&(x+="translate("+a+"%, "+r+"%) "),(C||s!==yu||o!==yu||l!==yu)&&(x+=l!==yu||C?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Cs),u!==As&&(x+="rotate("+u+Cs),c!==As&&(x+="rotateY("+c+Cs),d!==As&&(x+="rotateX("+d+Cs),(f!==As||h!==As)&&(x+="skew("+f+", "+h+Cs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Cs),v.style[Je]=x||"translate(0, 0)"},BR=function(t,n){var i=n||this,a=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,v=i.forceCSS,y=parseFloat(s),x=parseFloat(o),C,A,E,R,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Al,u*=Al,C=Math.cos(l)*d,A=Math.sin(l)*d,E=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Al,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,R*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,A*=M)),C=an(C),A=an(A),E=an(E),R=an(R)):(C=d,R=f,A=E=0),(y&&!~(s+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=vs(h,"x",s,"px"),x=vs(h,"y",o,"px")),(g||_||m||p)&&(y=an(y+g-(g*C+_*E)+m),x=an(x+_-(g*A+_*R)+p)),(a||r)&&(M=h.getBBox(),y=an(y+a/100*M.width),x=an(x+r/100*M.height)),M="matrix("+C+","+A+","+E+","+R+","+y+","+x+")",h.setAttribute("transform",M),v&&(h.style[Je]=M)},FR=function(t,n,i,a,r){var s=360,o=Un(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Bs:1),u=l-a,c=a+u+"deg",d,f;return o&&(d=r.split("_")[1],d==="short"&&(u%=s,u!==u%(s/2)&&(u+=u<0?s:-s)),d==="cw"&&u<0?u=(u+s*Jy)%s-~~(u/s)*s:d==="ccw"&&u>0&&(u=(u-s*Jy)%s-~~(u/s)*s)),t._pt=f=new pi(t._pt,n,i,a,u,SR),f.e=c,f.u="deg",t._props.push(i),f},rx=function(t,n){for(var i in n)t[i]=n[i];return t},HR=function(t,n,i){var a=rx({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,u,c,d,f,h,g;a.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),s[Je]=n,o=zc(i,1),gs(i,Je),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Je],s[Je]=n,o=zc(i,1),s[Je]=u);for(l in Sr)u=a[l],c=o[l],u!==c&&r.indexOf(l)<0&&(h=Xn(u),g=Xn(c),d=h!==g?vs(i,l,u,g):parseFloat(u),f=parseFloat(c),t._pt=new pi(t._pt,o,l,d,f-d,O_),t._pt.u=g||0,t._props.push(l));rx(o,a)};di("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",a="Bottom",r="Left",s=(t<3?[n,i,a,r]:[n+r,n+i,a+i,a+r]).map(function(o){return t<2?e+o:"border"+o+e});pd[t>1?"border"+e:e]=function(o,l,u,c,d){var f,h;if(arguments.length<4)return f=s.map(function(g){return er(o,g,u)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(c+"").split(" "),h={},s.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,h,d)}});var vT={name:"css",register:z_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,a,r){var s=this._props,o=t.style,l=i.vars.startAt,u,c,d,f,h,g,_,m,p,v,y,x,C,A,E,R,M;X0||z_(),this.styles=this.styles||fT(t),R=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(c=n[_],!(Di[_]&&tT(_,n,i,a,t,r)))){if(h=typeof c,g=pd[_],h==="function"&&(c=c.call(i,a,t,r),h=typeof c),h==="string"&&~c.indexOf("random(")&&(c=Lc(c)),g)g(this,t,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(_)+"").trim(),c+="",ls.lastIndex=0,ls.test(u)||(m=Xn(u),p=Xn(c),p?m!==p&&(u=vs(t,_,u,p)+p):m&&(c+=m)),this.add(o,"setProperty",u,c,a,r,0,0,_),s.push(_),R.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,a,t,r):l[_],Un(u)&&~u.indexOf("random(")&&(u=Lc(u)),Xn(u+"")||u==="auto"||(u+=Xi.units[_]||Xn(er(t,_))||""),(u+"").charAt(1)==="="&&(u=er(t,_))):u=er(t,_),f=parseFloat(u),v=h==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),_ in Na&&(_==="autoAlpha"&&(f===1&&er(t,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,o.visibility),Kr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Na[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Sr,y){if(this.styles.save(_),M=c,h==="string"&&c.substring(0,6)==="var(--"){if(c=Fi(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=c,c=Fi(t,"perspective"),S?t.style.perspective=S:gs(t,"perspective")}d=parseFloat(c)}if(x||(C=t._gsap,C.renderTransform&&!n.parseTransform||zc(t,n.parseTransform),A=n.smoothOrigin!==!1&&C.smooth,x=this._pt=new pi(this._pt,o,Je,0,1,C.renderTransform,C,0,-1),x.dep=1),_==="scale")this._pt=new pi(this._pt,C,"scaleY",C.scaleY,(v?Tl(C.scaleY,v+d):d)-C.scaleY||0,O_),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(mi,0,o[mi]),c=PR(c),C.svg?I_(t,c,0,A,0,this):(p=parseFloat(c.split(" ")[2])||0,p!==C.zOrigin&&Kr(this,C,"zOrigin",C.zOrigin,p),Kr(this,o,_,md(u),md(c)));continue}else if(_==="svgOrigin"){I_(t,c,1,A,0,this);continue}else if(_ in mT){FR(this,C,_,f,v?Tl(f,v+c):c);continue}else if(_==="smoothOrigin"){Kr(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){HR(this,c,t);continue}}else _ in o||(_=Kl(_)||_);if(y||(d||d===0)&&(f||f===0)&&!xR.test(c)&&_ in o)m=(u+"").substr((f+"").length),d||(d=0),p=Xn(c)||(_ in Xi.units?Xi.units[_]:m),m!==p&&(f=vs(t,_,u,p)),this._pt=new pi(this._pt,y?C:o,_,f,(v?Tl(f,v+d):d)-f,!y&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?TR:O_),this._pt.u=p||0,y&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=ER):m!==p&&p!=="%"&&(this._pt.b=u,this._pt.r=MR);else if(_ in o)OR.call(this,t,_,u,v?v+c:c);else if(_ in t)this.add(t,_,u||t[_],v?v+c:c,a,r);else if(_!=="parseTransform"){O0(_,c);continue}y||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,u||t[_])),s.push(_)}}E&&sT(this)},render:function(t,n){if(n.tween._time||!W0())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:er,aliases:Na,getSetter:function(t,n,i){var a=Na[n];return a&&a.indexOf(",")<0&&(n=a),n in Sr&&n!==mi&&(t._gsap.x||er(t,"x"))?i&&Qy===i?n==="scale"?RR:CR:(Qy=i||{})&&(n==="scale"?wR:DR):t.style&&!U0(t.style[n])?bR:~n.indexOf("-")?AR:V0(t,n)},core:{_removeProperty:gs,_getMatrix:Y0}};xi.utils.checkPrefix=Kl;xi.core.getStyleSaver=fT;(function(e,t,n,i){var a=di(e+","+t+","+n,function(r){Sr[r]=1});di(t,function(r){Xi.units[r]="deg",mT[r]=1}),Na[a[13]]=e+","+t,di(i,function(r){var s=r.split(":");Na[s[1]]=a[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Xi.units[e]="px"});xi.registerPlugin(vT);var Dn=xi.registerPlugin(vT)||xi;Dn.core.Tween;function GR(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function VR(e,t,n){return t&&GR(e.prototype,t),e}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var In,Mh,zi,jr,Qr,Cl,yT,Fs,Rl,xT,lr,ya,ST,MT=function(){return In||typeof window<"u"&&(In=window.gsap)&&In.registerPlugin&&In},ET=1,ml=[],re=[],Ia=[],rc=Date.now,B_=function(t,n){return n},kR=function(){var t=Rl.core,n=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,re),a.push.apply(a,Ia),re=i,Ia=a,B_=function(s,o){return n[s](o)}},us=function(t,n){return~Ia.indexOf(t)&&Ia[Ia.indexOf(t)+1][n]},sc=function(t){return!!~xT.indexOf(t)},Zn=function(t,n,i,a,r){return t.addEventListener(n,i,{passive:a!==!1,capture:!!r})},Yn=function(t,n,i,a){return t.removeEventListener(n,i,!!a)},Ef="scrollLeft",Tf="scrollTop",F_=function(){return lr&&lr.isPressed||re.cache++},_d=function(t,n){var i=function a(r){if(r||r===0){ET&&(zi.history.scrollRestoration="manual");var s=lr&&lr.isPressed;r=a.v=Math.round(r)||(lr&&lr.iOS?1:0),t(r),a.cacheID=re.cache,s&&B_("ss",r)}else(n||re.cache!==a.cacheID||B_("ref"))&&(a.cacheID=re.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},ti={s:Ef,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:_d(function(e){return arguments.length?zi.scrollTo(e,yn.sc()):zi.pageXOffset||jr[Ef]||Qr[Ef]||Cl[Ef]||0})},yn={s:Tf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ti,sc:_d(function(e){return arguments.length?zi.scrollTo(ti.sc(),e):zi.pageYOffset||jr[Tf]||Qr[Tf]||Cl[Tf]||0})},li=function(t,n){return(n&&n._ctx&&n._ctx.selector||In.utils.toArray)(t)[0]||(typeof t=="string"&&In.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},XR=function(t,n){for(var i=n.length;i--;)if(n[i]===t||n[i].contains(t))return!0;return!1},ys=function(t,n){var i=n.s,a=n.sc;sc(t)&&(t=jr.scrollingElement||Qr);var r=re.indexOf(t),s=a===yn.sc?1:2;!~r&&(r=re.push(t)-1),re[r+s]||Zn(t,"scroll",F_);var o=re[r+s],l=o||(re[r+s]=_d(us(t,i),!0)||(sc(t)?a:_d(function(u){return arguments.length?t[i]=u:t[i]})));return l.target=t,o||(l.smooth=In.getProperty(t,"scrollBehavior")==="smooth"),l},H_=function(t,n,i){var a=t,r=t,s=rc(),o=s,l=n||50,u=Math.max(500,l*3),c=function(g,_){var m=rc();_||m-s>l?(r=a,a=g,o=s,s=m):i?a+=g:a=r+(g-r)/(m-o)*(s-o)},d=function(){r=a=i?0:a,o=s=0},f=function(g){var _=o,m=r,p=rc();return(g||g===0)&&g!==a&&c(g),s===o||p-o>u?0:(a+(i?m:-m))/((i?p:s)-_)*1e3};return{update:c,reset:d,getVelocity:f}},xu=function(t,n){return n&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},sx=function(t){var n=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(i)?n:i},TT=function(){Rl=In.core.globals().ScrollTrigger,Rl&&Rl.core&&kR()},bT=function(t){return In=t||MT(),!Mh&&In&&typeof document<"u"&&document.body&&(zi=window,jr=document,Qr=jr.documentElement,Cl=jr.body,xT=[zi,jr,Qr,Cl],In.utils.clamp,ST=In.core.context||function(){},Fs="onpointerenter"in Cl?"pointer":"mouse",yT=sn.isTouch=zi.matchMedia&&zi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ya=sn.eventTypes=("ontouchstart"in Qr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ET=0},500),Mh=1),Rl||TT(),Mh};ti.op=yn;re.cache=0;var sn=function(){function e(n){this.init(n)}var t=e.prototype;return t.init=function(i){Mh||bT(In)||console.warn("Please gsap.registerPlugin(Observer)"),Rl||TT();var a=i.tolerance,r=i.dragMinimum,s=i.type,o=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,v=i.onDrag,y=i.onPress,x=i.onRelease,C=i.onRight,A=i.onLeft,E=i.onUp,R=i.onDown,M=i.onChangeX,S=i.onChangeY,U=i.onChange,P=i.onToggleX,G=i.onToggleY,Y=i.onHover,K=i.onHoverEnd,N=i.onMove,I=i.ignoreCheck,O=i.isNormalizer,tt=i.onGestureStart,w=i.onGestureEnd,ut=i.onWheel,Dt=i.onEnable,Yt=i.onDisable,Z=i.onClick,nt=i.scrollSpeed,ht=i.capture,ct=i.allowClicks,Ct=i.lockAxis,Ut=i.onLockAxis;this.target=o=li(o)||Qr,this.vars=i,h&&(h=In.utils.toArray(h)),a=a||1e-9,r=r||0,g=g||1,nt=nt||1,s=s||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(zi.getComputedStyle(Cl).lineHeight)||22);var Wt,ne,L,Ot,Bt,Zt,yt,W=this,Rt=0,Ft=0,D=i.passive||!c&&i.passive!==!1,T=ys(o,ti),q=ys(o,yn),it=T(),rt=q(),Q=~s.indexOf("touch")&&!~s.indexOf("pointer")&&ya[0]==="pointerdown",bt=sc(o),st=o.ownerDocument||jr,mt=[0,0,0],zt=[0,0,0],ot=0,vt=function(){return ot=rc()},Lt=function(Tt,de){return(W.event=Tt)&&h&&XR(Tt.target,h)||de&&Q&&Tt.pointerType!=="touch"||I&&I(Tt,de)},Ht=function(){W._vx.reset(),W._vy.reset(),ne.pause(),d&&d(W)},gt=function(){var Tt=W.deltaX=sx(mt),de=W.deltaY=sx(zt),ft=Math.abs(Tt)>=a,kt=Math.abs(de)>=a;U&&(ft||kt)&&U(W,Tt,de,mt,zt),ft&&(C&&W.deltaX>0&&C(W),A&&W.deltaX<0&&A(W),M&&M(W),P&&W.deltaX<0!=Rt<0&&P(W),Rt=W.deltaX,mt[0]=mt[1]=mt[2]=0),kt&&(R&&W.deltaY>0&&R(W),E&&W.deltaY<0&&E(W),S&&S(W),G&&W.deltaY<0!=Ft<0&&G(W),Ft=W.deltaY,zt[0]=zt[1]=zt[2]=0),(Ot||L)&&(N&&N(W),L&&(m&&L===1&&m(W),v&&v(W),L=0),Ot=!1),Zt&&!(Zt=!1)&&Ut&&Ut(W),Bt&&(ut(W),Bt=!1),Wt=0},Gt=function(Tt,de,ft){mt[ft]+=Tt,zt[ft]+=de,W._vx.update(Tt),W._vy.update(de),u?Wt||(Wt=requestAnimationFrame(gt)):gt()},qt=function(Tt,de){Ct&&!yt&&(W.axis=yt=Math.abs(Tt)>Math.abs(de)?"x":"y",Zt=!0),yt!=="y"&&(mt[2]+=Tt,W._vx.update(Tt,!0)),yt!=="x"&&(zt[2]+=de,W._vy.update(de,!0)),u?Wt||(Wt=requestAnimationFrame(gt)):gt()},ge=function(Tt){if(!Lt(Tt,1)){Tt=xu(Tt,c);var de=Tt.clientX,ft=Tt.clientY,kt=de-W.x,Nt=ft-W.y,Xt=W.isDragging;W.x=de,W.y=ft,(Xt||(kt||Nt)&&(Math.abs(W.startX-de)>=r||Math.abs(W.startY-ft)>=r))&&(L||(L=Xt?2:1),Xt||(W.isDragging=!0),qt(kt,Nt))}},B=W.onPress=function(It){Lt(It,1)||It&&It.button||(W.axis=yt=null,ne.pause(),W.isPressed=!0,It=xu(It),Rt=Ft=0,W.startX=W.x=It.clientX,W.startY=W.y=It.clientY,W._vx.reset(),W._vy.reset(),Zn(O?o:st,ya[1],ge,D,!0),W.deltaX=W.deltaY=0,y&&y(W))},j=W.onRelease=function(It){if(!Lt(It,1)){Yn(O?o:st,ya[1],ge,!0);var Tt=!isNaN(W.y-W.startY),de=W.isDragging,ft=de&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),kt=xu(It);!ft&&Tt&&(W._vx.reset(),W._vy.reset(),c&&ct&&In.delayedCall(.08,function(){if(rc()-ot>300&&!It.defaultPrevented){if(It.target.click)It.target.click();else if(st.createEvent){var Nt=st.createEvent("MouseEvents");Nt.initMouseEvent("click",!0,!0,zi,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),It.target.dispatchEvent(Nt)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&de&&!O&&ne.restart(!0),L&&gt(),p&&de&&p(W),x&&x(W,ft)}},J=function(Tt){return Tt.touches&&Tt.touches.length>1&&(W.isGesturing=!0)&&tt(Tt,W.isDragging)},$=function(){return(W.isGesturing=!1)||w(W)},lt=function(Tt){if(!Lt(Tt)){var de=T(),ft=q();Gt((de-it)*nt,(ft-rt)*nt,1),it=de,rt=ft,d&&ne.restart(!0)}},At=function(Tt){if(!Lt(Tt)){Tt=xu(Tt,c),ut&&(Bt=!0);var de=(Tt.deltaMode===1?l:Tt.deltaMode===2?zi.innerHeight:1)*g;Gt(Tt.deltaX*de,Tt.deltaY*de,0),d&&!O&&ne.restart(!0)}},Jt=function(Tt){if(!Lt(Tt)){var de=Tt.clientX,ft=Tt.clientY,kt=de-W.x,Nt=ft-W.y;W.x=de,W.y=ft,Ot=!0,d&&ne.restart(!0),(kt||Nt)&&qt(kt,Nt)}},Le=function(Tt){W.event=Tt,Y(W)},Ne=function(Tt){W.event=Tt,K(W)},le=function(Tt){return Lt(Tt)||xu(Tt,c)&&Z(W)};ne=W._dc=In.delayedCall(f||.25,Ht).pause(),W.deltaX=W.deltaY=0,W._vx=H_(0,50,!0),W._vy=H_(0,50,!0),W.scrollX=T,W.scrollY=q,W.isDragging=W.isGesturing=W.isPressed=!1,ST(this),W.enable=function(It){return W.isEnabled||(Zn(bt?st:o,"scroll",F_),s.indexOf("scroll")>=0&&Zn(bt?st:o,"scroll",lt,D,ht),s.indexOf("wheel")>=0&&Zn(o,"wheel",At,D,ht),(s.indexOf("touch")>=0&&yT||s.indexOf("pointer")>=0)&&(Zn(o,ya[0],B,D,ht),Zn(st,ya[2],j),Zn(st,ya[3],j),ct&&Zn(o,"click",vt,!0,!0),Z&&Zn(o,"click",le),tt&&Zn(st,"gesturestart",J),w&&Zn(st,"gestureend",$),Y&&Zn(o,Fs+"enter",Le),K&&Zn(o,Fs+"leave",Ne),N&&Zn(o,Fs+"move",Jt)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Ot=L=!1,W._vx.reset(),W._vy.reset(),it=T(),rt=q(),It&&It.type&&B(It),Dt&&Dt(W)),W},W.disable=function(){W.isEnabled&&(ml.filter(function(It){return It!==W&&sc(It.target)}).length||Yn(bt?st:o,"scroll",F_),W.isPressed&&(W._vx.reset(),W._vy.reset(),Yn(O?o:st,ya[1],ge,!0)),Yn(bt?st:o,"scroll",lt,ht),Yn(o,"wheel",At,ht),Yn(o,ya[0],B,ht),Yn(st,ya[2],j),Yn(st,ya[3],j),Yn(o,"click",vt,!0),Yn(o,"click",le),Yn(st,"gesturestart",J),Yn(st,"gestureend",$),Yn(o,Fs+"enter",Le),Yn(o,Fs+"leave",Ne),Yn(o,Fs+"move",Jt),W.isEnabled=W.isPressed=W.isDragging=!1,Yt&&Yt(W))},W.kill=W.revert=function(){W.disable();var It=ml.indexOf(W);It>=0&&ml.splice(It,1),lr===W&&(lr=0)},ml.push(W),O&&sc(o)&&(lr=W),W.enable(_)},VR(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e}();sn.version="3.15.0";sn.create=function(e){return new sn(e)};sn.register=bT;sn.getAll=function(){return ml.slice()};sn.getById=function(e){return ml.filter(function(t){return t.vars.id===e})[0]};MT()&&In.registerPlugin(sn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,$o,ae,be,Li,Se,Z0,gd,Ic,oc,zu,bf,Vn,Yd,G_,Jn,ox,lx,tl,AT,qp,CT,Qn,V_,RT,wT,Or,k_,K0,wl,j0,lc,X_,Yp,Af=1,kn=Date.now,Zp=kn(),ha=0,Iu=0,ux=function(t,n,i){var a=wi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+n+"Clamp"]=a,a?t.substr(6,t.length-7):t},cx=function(t,n){return n&&(!wi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},WR=function e(){return Iu&&requestAnimationFrame(e)},fx=function(){return Yd=1},hx=function(){return Yd=0},ba=function(t){return t},Bu=function(t){return Math.round(t*1e5)/1e5||0},DT=function(){return typeof window<"u"},UT=function(){return Mt||DT()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},po=function(t){return!!~Z0.indexOf(t)},LT=function(t){return(t==="Height"?j0:ae["inner"+t])||Li["client"+t]||Se["client"+t]},NT=function(t){return us(t,"getBoundingClientRect")||(po(t)?function(){return Ch.width=ae.innerWidth,Ch.height=j0,Ch}:function(){return ir(t)})},qR=function(t,n,i){var a=i.d,r=i.d2,s=i.a;return(s=us(t,"getBoundingClientRect"))?function(){return s()[a]}:function(){return(n?LT(r):t["client"+r])||0}},YR=function(t,n){return!n||~Ia.indexOf(t)?NT(t):function(){return Ch}},Oa=function(t,n){var i=n.s,a=n.d2,r=n.d,s=n.a;return Math.max(0,(i="scroll"+a)&&(s=us(t,i))?s()-NT(t)()[r]:po(t)?(Li[i]||Se[i])-LT(a):t[i]-t["offset"+a])},Cf=function(t,n){for(var i=0;i<tl.length;i+=3)(!n||~n.indexOf(tl[i+1]))&&t(tl[i],tl[i+1],tl[i+2])},wi=function(t){return typeof t=="string"},Wn=function(t){return typeof t=="function"},Fu=function(t){return typeof t=="number"},Hs=function(t){return typeof t=="object"},Su=function(t,n,i){return t&&t.progress(n?0:1)&&i&&t.pause()},Do=function(t,n,i){if(t.enabled){var a=t._ctx?t._ctx.add(function(){return n(t,i)}):n(t,i);a&&a.totalTime&&(t.callbackAnimation=a)}},Uo=Math.abs,OT="left",PT="top",Q0="right",J0="bottom",ao="width",ro="height",uc="Right",cc="Left",fc="Top",hc="Bottom",cn="padding",na="margin",jl="Width",$0="Height",vn="px",ia=function(t){return ae.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},ZR=function(t){var n=ia(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},dx=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},ir=function(t,n){var i=n&&ia(t)[G_]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),a},vd=function(t,n){var i=n.d2;return t["offset"+i]||t["client"+i]||0},zT=function(t){var n=[],i=t.labels,a=t.duration(),r;for(r in i)n.push(i[r]/a);return n},KR=function(t){return function(n){return Mt.utils.snap(zT(t),n)}},tv=function(t){var n=Mt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,r){return a-r});return i?function(a,r,s){s===void 0&&(s=.001);var o;if(!r)return n(a);if(r>0){for(a-=s,o=0;o<i.length;o++)if(i[o]>=a)return i[o];return i[o-1]}else for(o=i.length,a+=s;o--;)if(i[o]<=a)return i[o];return i[0]}:function(a,r,s){s===void 0&&(s=.001);var o=n(a);return!r||Math.abs(o-a)<s||o-a<0==r<0?o:n(r<0?a-t:a+t)}},jR=function(t){return function(n,i){return tv(zT(t))(n,i.direction)}},Rf=function(t,n,i,a){return i.split(",").forEach(function(r){return t(n,r,a)})},An=function(t,n,i,a,r){return t.addEventListener(n,i,{passive:!a,capture:!!r})},bn=function(t,n,i,a){return t.removeEventListener(n,i,!!a)},wf=function(t,n,i){i=i&&i.wheelHandler,i&&(t(n,"wheel",i),t(n,"touchmove",i))},px={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Df={toggleActions:"play",anticipatePin:0},yd={top:0,left:0,center:.5,bottom:1,right:1},Eh=function(t,n){if(wi(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=n/100),t=t.substr(0,i-1)),t=a+(t in yd?yd[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Uf=function(t,n,i,a,r,s,o,l){var u=r.startColor,c=r.endColor,d=r.fontSize,f=r.indent,h=r.fontWeight,g=be.createElement("div"),_=po(i)||us(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?Se:i.tagName==="IFRAME"?i.contentDocument.body:i,v=t.indexOf("start")!==-1,y=v?u:c,x="border-color:"+y+";font-size:"+d+";color:"+y+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(a===yn?Q0:J0)+":"+(s+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),g.style.cssText=x,g.innerText=n||n===0?t+"-"+n:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+a.op.d2],Th(g,0,a,v),g},Th=function(t,n,i,a){var r={display:"block"},s=i[a?"os2":"p2"],o=i[a?"p2":"os2"];t._isFlipped=a,r[i.a+"Percent"]=a?-100:0,r[i.a]=a?"1px":0,r["border"+s+jl]=1,r["border"+o+jl]=0,r[i.p]=n+"px",Mt.set(t,r)},ee=[],W_={},Bc,mx=function(){return kn()-ha>34&&(Bc||(Bc=requestAnimationFrame(pr)))},Lo=function(){(!Qn||!Qn.isPressed||Qn.startX>Se.clientWidth)&&(re.cache++,Qn?Bc||(Bc=requestAnimationFrame(pr)):pr(),ha||_o("scrollStart"),ha=kn())},Kp=function(){wT=ae.innerWidth,RT=ae.innerHeight},Hu=function(t){re.cache++,(t===!0||!Vn&&!CT&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!V_||wT!==ae.innerWidth||Math.abs(ae.innerHeight-RT)>ae.innerHeight*.25))&&gd.restart(!0)},mo={},QR=[],IT=function e(){return bn(Qt,"scrollEnd",e)||qs(!0)},_o=function(t){return mo[t]&&mo[t].map(function(n){return n()})||QR},Ci=[],BT=function(t){for(var n=0;n<Ci.length;n+=5)(!t||Ci[n+4]&&Ci[n+4].query===t)&&(Ci[n].style.cssText=Ci[n+1],Ci[n].getBBox&&Ci[n].setAttribute("transform",Ci[n+2]||""),Ci[n+3].uncache=1)},FT=function(){return re.forEach(function(t){return Wn(t)&&++t.cacheID&&(t.rec=t())})},ev=function(t,n){var i;for(Jn=0;Jn<ee.length;Jn++)i=ee[Jn],i&&(!n||i._ctx===n)&&(t?i.kill(1):i.revert(!0,!0));lc=!0,n&&BT(n),n||_o("revert")},HT=function(t,n){re.cache++,(n||!$n)&&re.forEach(function(i){return Wn(i)&&i.cacheID++&&(i.rec=0)}),wi(t)&&(ae.history.scrollRestoration=K0=t)},$n,so=0,_x,JR=function(){if(_x!==so){var t=_x=so;requestAnimationFrame(function(){return t===so&&qs(!0)})}},GT=function(){Se.appendChild(wl),j0=!Qn&&wl.offsetHeight||ae.innerHeight,Se.removeChild(wl)},gx=function(t){return Ic(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},qs=function(t,n){if(Li=be.documentElement,Se=be.body,Z0=[ae,be,Li,Se],ha&&!t&&!lc){An(Qt,"scrollEnd",IT);return}GT(),$n=Qt.isRefreshing=!0,lc||FT();var i=_o("refreshInit");AT&&Qt.sort(),n||ev(),re.forEach(function(a){Wn(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),ee.slice(0).forEach(function(a){return a.refresh()}),lc=!1,ee.forEach(function(a){if(a._subPinOffset&&a.pin){var r=a.vars.horizontal?"offsetWidth":"offsetHeight",s=a.pin[r];a.revert(!0,1),a.adjustPinSpacing(a.pin[r]-s),a.refresh()}}),X_=1,gx(!0),ee.forEach(function(a){var r=Oa(a.scroller,a._dir),s=a.vars.end==="max"||a._endClamp&&a.end>r,o=a._startClamp&&a.start>=r;(s||o)&&a.setPositions(o?r-1:a.start,s?Math.max(o?r:a.start+1,r):a.end,!0)}),gx(!1),X_=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),re.forEach(function(a){Wn(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),HT(K0,1),gd.pause(),so++,$n=2,pr(2),ee.forEach(function(a){return Wn(a.vars.onRefresh)&&a.vars.onRefresh(a)}),$n=Qt.isRefreshing=!1,_o("refresh")},q_=0,bh=1,dc,pr=function(t){if(t===2||!$n&&!lc){Qt.isUpdating=!0,dc&&dc.update(0);var n=ee.length,i=kn(),a=i-Zp>=50,r=n&&ee[0].scroll();if(bh=q_>r?-1:1,$n||(q_=r),a&&(ha&&!Yd&&i-ha>200&&(ha=0,_o("scrollEnd")),zu=Zp,Zp=i),bh<0){for(Jn=n;Jn-- >0;)ee[Jn]&&ee[Jn].update(0,a);bh=1}else for(Jn=0;Jn<n;Jn++)ee[Jn]&&ee[Jn].update(0,a);Qt.isUpdating=!1}Bc=0},Y_=[OT,PT,J0,Q0,na+hc,na+uc,na+fc,na+cc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ah=Y_.concat([ao,ro,"boxSizing","max"+jl,"max"+$0,"position",na,cn,cn+fc,cn+uc,cn+hc,cn+cc]),$R=function(t,n,i){Dl(i);var a=t._gsap;if(a.spacerIsNative)Dl(a.spacerState);else if(t._gsap.swappedIn){var r=n.parentNode;r&&(r.insertBefore(t,n),r.removeChild(n))}t._gsap.swappedIn=!1},jp=function(t,n,i,a){if(!t._gsap.swappedIn){for(var r=Y_.length,s=n.style,o=t.style,l;r--;)l=Y_[r],s[l]=i[l];s.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(s.display="inline-block"),o[J0]=o[Q0]="auto",s.flexBasis=i.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[ao]=vd(t,ti)+vn,s[ro]=vd(t,yn)+vn,s[cn]=o[na]=o[PT]=o[OT]="0",Dl(a),o[ao]=o["max"+jl]=i[ao],o[ro]=o["max"+$0]=i[ro],o[cn]=i[cn],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},tw=/([A-Z])/g,Dl=function(t){if(t){var n=t.t.style,i=t.length,a=0,r,s;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;a<i;a+=2)s=t[a+1],r=t[a],s?n[r]=s:n[r]&&n.removeProperty(r.replace(tw,"-$1").toLowerCase())}},Lf=function(t){for(var n=Ah.length,i=t.style,a=[],r=0;r<n;r++)a.push(Ah[r],i[Ah[r]]);return a.t=t,a},ew=function(t,n,i){for(var a=[],r=t.length,s=i?8:0,o;s<r;s+=2)o=t[s],a.push(o,o in n?n[o]:t[s+1]);return a.t=t.t,a},Ch={left:0,top:0},vx=function(t,n,i,a,r,s,o,l,u,c,d,f,h,g){Wn(t)&&(t=t(l)),wi(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Eh("0"+t.substr(3),i):0));var _=h?h.time():0,m,p,v;if(h&&h.seek(0),isNaN(t)||(t=+t),Fu(t))h&&(t=Mt.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,t)),o&&Th(o,i,a,!0);else{Wn(n)&&(n=n(l));var y=(t||"0").split(" "),x,C,A,E;v=li(n,l)||Se,x=ir(v)||{},(!x||!x.left&&!x.top)&&ia(v).display==="none"&&(E=v.style.display,v.style.display="block",x=ir(v),E?v.style.display=E:v.style.removeProperty("display")),C=Eh(y[0],x[a.d]),A=Eh(y[1]||"0",i),t=x[a.p]-u[a.p]-c+C+r-A,o&&Th(o,A,a,i-A<20||o._isStart&&A>20),i-=i-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),s){var R=t+i,M=s._isStart;m="scroll"+a.d2,Th(s,R,a,M&&R>20||!M&&(d?Math.max(Se[m],Li[m]):s.parentNode[m])<=R+1),d&&(u=ir(o),d&&(s.style[a.op.p]=u[a.op.p]-a.op.m-s._offset+vn))}return h&&v&&(m=ir(v),h.seek(f),p=ir(v),h._caScrollDist=m[a.p]-p[a.p],t=t/h._caScrollDist*f),h&&h.seek(_),h?t:Math.round(t)},nw=/(webkit|moz|length|cssText|inset)/i,yx=function(t,n,i,a){if(t.parentNode!==n){var r=t.style,s,o;if(n===Se){t._stOrig=r.cssText,o=ia(t);for(s in o)!+s&&!nw.test(s)&&o[s]&&typeof r[s]=="string"&&s!=="0"&&(r[s]=o[s]);r.top=i,r.left=a}else r.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,n.appendChild(t)}},VT=function(t,n,i){var a=n,r=a;return function(s){var o=Math.round(t());return o!==a&&o!==r&&Math.abs(o-a)>3&&Math.abs(o-r)>3&&(s=o,i&&i()),r=a,a=Math.round(s),a}},Nf=function(t,n,i){var a={};a[n.p]="+="+i,Mt.set(t,a)},xx=function(t,n){var i=ys(t,n),a="_scroll"+n.p2,r=function s(o,l,u,c,d){var f=s.tween,h=l.onComplete,g={};u=u||i();var _=VT(i,u,function(){f.kill(),s.tween=0});return d=c&&d||0,c=c||o-u,f&&f.kill(),l[a]=o,l.inherit=!1,l.modifiers=g,g[a]=function(){return _(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,s.tween&&pr()},l.onComplete=function(){s.tween=0,h&&h.call(f)},f=s.tween=Mt.to(t,l),f};return t[a]=i,i.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},An(t,"wheel",i.wheelHandler),Qt.isTouch&&An(t,"touchmove",i.wheelHandler),r},Qt=function(){function e(n,i){$o||e.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),k_(this),this.init(n,i)}var t=e.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Iu){this.update=this.refresh=this.kill=ba;return}i=dx(wi(i)||Fu(i)||i.nodeType?{trigger:i}:i,Df);var r=i,s=r.onUpdate,o=r.toggleClass,l=r.id,u=r.onToggle,c=r.onRefresh,d=r.scrub,f=r.trigger,h=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,v=r.onSnapComplete,y=r.once,x=r.snap,C=r.pinReparent,A=r.pinSpacer,E=r.containerAnimation,R=r.fastScrollEnd,M=r.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ti:yn,U=!d&&d!==0,P=li(i.scroller||ae),G=Mt.core.getCache(P),Y=po(P),K=("pinType"in i?i.pinType:us(P,"pinType")||Y&&"fixed")==="fixed",N=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],I=U&&i.toggleActions.split(" "),O="markers"in i?i.markers:Df.markers,tt=Y?0:parseFloat(ia(P)["border"+S.p2+jl])||0,w=this,ut=i.onRefreshInit&&function(){return i.onRefreshInit(w)},Dt=qR(P,Y,S),Yt=YR(P,Y),Z=0,nt=0,ht=0,ct=ys(P,S),Ct,Ut,Wt,ne,L,Ot,Bt,Zt,yt,W,Rt,Ft,D,T,q,it,rt,Q,bt,st,mt,zt,ot,vt,Lt,Ht,gt,Gt,qt,ge,B,j,J,$,lt,At,Jt,Le,Ne;if(w._startClamp=w._endClamp=!1,w._dir=S,m*=45,w.scroller=P,w.scroll=E?E.time.bind(E):ct,ne=ct(),w.vars=i,a=a||i.animation,"refreshPriority"in i&&(AT=1,i.refreshPriority===-9999&&(dc=w)),G.tweenScroll=G.tweenScroll||{top:xx(P,yn),left:xx(P,ti)},w.tweenTo=Ct=G.tweenScroll[S.p],w.scrubDuration=function(ft){J=Fu(ft)&&ft,J?j?j.duration(ft):j=Mt.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:J,paused:!0,onComplete:function(){return p&&p(w)}}):(j&&j.progress(1).kill(),j=0)},a&&(a.vars.lazy=!1,a._initted&&!w.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),w.animation=a.pause(),a.scrollTrigger=w,w.scrubDuration(d),ge=0,l||(l=a.vars.id)),x&&((!Hs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Se.style&&Mt.set(Y?[Se,Li]:P,{scrollBehavior:"auto"}),re.forEach(function(ft){return Wn(ft)&&ft.target===(Y?be.scrollingElement||Li:P)&&(ft.smooth=!1)}),Wt=Wn(x.snapTo)?x.snapTo:x.snapTo==="labels"?KR(a):x.snapTo==="labelsDirectional"?jR(a):x.directional!==!1?function(ft,kt){return tv(x.snapTo)(ft,kn()-nt<500?0:kt.direction)}:Mt.utils.snap(x.snapTo),$=x.duration||{min:.1,max:2},$=Hs($)?oc($.min,$.max):oc($,$),lt=Mt.delayedCall(x.delay||J/2||.1,function(){var ft=ct(),kt=kn()-nt<500,Nt=Ct.tween;if((kt||Math.abs(w.getVelocity())<10)&&!Nt&&!Yd&&Z!==ft){var Xt=(ft-Ot)/T,Ke=a&&!U?a.totalProgress():Xt,ie=kt?0:(Ke-B)/(kn()-zu)*1e3||0,Ie=Mt.utils.clamp(-Xt,1-Xt,Uo(ie/2)*ie/.185),_n=Xt+(x.inertia===!1?0:Ie),He,Be,Te=x,Ei=Te.onStart,b=Te.onInterrupt,z=Te.onComplete;if(He=Wt(_n,w),Fu(He)||(He=_n),Be=Math.max(0,Math.round(Ot+He*T)),ft<=Bt&&ft>=Ot&&Be!==ft){if(Nt&&!Nt._initted&&Nt.data<=Uo(Be-ft))return;x.inertia===!1&&(Ie=He-Xt),Ct(Be,{duration:$(Uo(Math.max(Uo(_n-Ke),Uo(He-Ke))*.185/ie/.05||0)),ease:x.ease||"power3",data:Uo(Be-ft),onInterrupt:function(){return lt.restart(!0)&&b&&Do(w,b)},onComplete:function(){w.update(),Z=ct(),a&&!U&&(j?j.resetTo("totalProgress",He,a._tTime/a._tDur):a.progress(He)),ge=B=a&&!U?a.totalProgress():w.progress,v&&v(w),z&&Do(w,z)}},ft,Ie*T,Be-ft-Ie*T),Ei&&Do(w,Ei,Ct.tween)}}else w.isActive&&Z!==ft&&lt.restart(!0)}).pause()),l&&(W_[l]=w),f=w.trigger=li(f||h!==!0&&h),Ne=f&&f._gsap&&f._gsap.stRevert,Ne&&(Ne=Ne(w)),h=h===!0?f:li(h),wi(o)&&(o={targets:f,className:o}),h&&(g===!1||g===na||(g=!g&&h.parentNode&&h.parentNode.style&&ia(h.parentNode).display==="flex"?!1:cn),w.pin=h,Ut=Mt.core.getCache(h),Ut.spacer?q=Ut.pinState:(A&&(A=li(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ut.spacerIsNative=!!A,A&&(Ut.spacerState=Lf(A))),Ut.spacer=Q=A||be.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ut.pinState=q=Lf(h)),i.force3D!==!1&&Mt.set(h,{force3D:!0}),w.spacer=Q=Ut.spacer,qt=ia(h),vt=qt[g+S.os2],st=Mt.getProperty(h),mt=Mt.quickSetter(h,S.a,vn),jp(h,Q,qt),rt=Lf(h)),O){Ft=Hs(O)?dx(O,px):px,W=Uf("scroller-start",l,P,S,Ft,0),Rt=Uf("scroller-end",l,P,S,Ft,0,W),bt=W["offset"+S.op.d2];var le=li(us(P,"content")||P);Zt=this.markerStart=Uf("start",l,le,S,Ft,bt,0,E),yt=this.markerEnd=Uf("end",l,le,S,Ft,bt,0,E),E&&(Le=Mt.quickSetter([Zt,yt],S.a,vn)),!K&&!(Ia.length&&us(P,"fixedMarkers")===!0)&&(ZR(Y?Se:P),Mt.set([W,Rt],{force3D:!0}),Ht=Mt.quickSetter(W,S.a,vn),Gt=Mt.quickSetter(Rt,S.a,vn))}if(E){var It=E.vars.onUpdate,Tt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){w.update(0,0,1),It&&It.apply(E,Tt||[])})}if(w.previous=function(){return ee[ee.indexOf(w)-1]},w.next=function(){return ee[ee.indexOf(w)+1]},w.revert=function(ft,kt){if(!kt)return w.kill(!0);var Nt=ft!==!1||!w.enabled,Xt=Vn;Nt!==w.isReverted&&(Nt&&(At=Math.max(ct(),w.scroll.rec||0),ht=w.progress,Jt=a&&a.progress()),Zt&&[Zt,yt,W,Rt].forEach(function(Ke){return Ke.style.display=Nt?"none":"block"}),Nt&&(Vn=w,w.update(Nt)),h&&(!C||!w.isActive)&&(Nt?$R(h,Q,q):jp(h,Q,ia(h),Lt)),Nt||w.update(Nt),Vn=Xt,w.isReverted=Nt)},w.refresh=function(ft,kt,Nt,Xt){if(!((Vn||!w.enabled)&&!kt)){if(h&&ft&&ha){An(e,"scrollEnd",IT);return}!$n&&ut&&ut(w),Vn=w,Ct.tween&&!Nt&&(Ct.tween.kill(),Ct.tween=0),j&&j.pause(),_&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(Et){return Et.vars.immediateRender&&Et.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),w.isReverted||w.revert(!0,!0),w._subPinOffset=!1;var Ke=Dt(),ie=Yt(),Ie=E?E.duration():Oa(P,S),_n=T<=.01||!T,He=0,Be=Xt||0,Te=Hs(Nt)?Nt.end:i.end,Ei=i.endTrigger||f,b=Hs(Nt)?Nt.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),z=w.pinnedContainer=i.pinnedContainer&&li(i.pinnedContainer,w),k=f&&Math.max(0,ee.indexOf(w))||0,V=k,F,at,dt,St,pt,xt,wt,Pt,me,we,_e,gn,ce;for(O&&Hs(Nt)&&(gn=Mt.getProperty(W,S.p),ce=Mt.getProperty(Rt,S.p));V-- >0;)xt=ee[V],xt.end||xt.refresh(0,1)||(Vn=w),wt=xt.pin,wt&&(wt===f||wt===h||wt===z)&&!xt.isReverted&&(we||(we=[]),we.unshift(xt),xt.revert(!0,!0)),xt!==ee[V]&&(k--,V--);for(Wn(b)&&(b=b(w)),b=ux(b,"start",w),Ot=vx(b,f,Ke,S,ct(),Zt,W,w,ie,tt,K,Ie,E,w._startClamp&&"_startClamp")||(h?-.001:0),Wn(Te)&&(Te=Te(w)),wi(Te)&&!Te.indexOf("+=")&&(~Te.indexOf(" ")?Te=(wi(b)?b.split(" ")[0]:"")+Te:(He=Eh(Te.substr(2),Ke),Te=wi(b)?b:(E?Mt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ot):Ot)+He,Ei=f)),Te=ux(Te,"end",w),Bt=Math.max(Ot,vx(Te||(Ei?"100% 0":Ie),Ei,Ke,S,ct()+He,yt,Rt,w,ie,tt,K,Ie,E,w._endClamp&&"_endClamp"))||-.001,He=0,V=k;V--;)xt=ee[V]||{},wt=xt.pin,wt&&xt.start-xt._pinPush<=Ot&&!E&&xt.end>0&&(F=xt.end-(w._startClamp?Math.max(0,xt.start):xt.start),(wt===f&&xt.start-xt._pinPush<Ot||wt===z)&&isNaN(b)&&(He+=F*(1-xt.progress)),wt===h&&(Be+=F));if(Ot+=He,Bt+=He,w._startClamp&&(w._startClamp+=He),w._endClamp&&!$n&&(w._endClamp=Bt||-.001,Bt=Math.min(Bt,Oa(P,S))),T=Bt-Ot||(Ot-=.01)&&.001,_n&&(ht=Mt.utils.clamp(0,1,Mt.utils.normalize(Ot,Bt,At))),w._pinPush=Be,Zt&&He&&(F={},F[S.a]="+="+He,z&&(F[S.p]="-="+ct()),Mt.set([Zt,yt],F)),h&&!(X_&&w.end>=Oa(P,S)))F=ia(h),St=S===yn,dt=ct(),zt=parseFloat(st(S.a))+Be,!Ie&&Bt>1&&(_e=(Y?be.scrollingElement||Li:P).style,_e={style:_e,value:_e["overflow"+S.a.toUpperCase()]},Y&&ia(Se)["overflow"+S.a.toUpperCase()]!=="scroll"&&(_e.style["overflow"+S.a.toUpperCase()]="scroll")),jp(h,Q,F),rt=Lf(h),at=ir(h,!0),Pt=K&&ys(P,St?ti:yn)(),g?(Lt=[g+S.os2,T+Be+vn],Lt.t=Q,V=g===cn?vd(h,S)+T+Be:0,V&&(Lt.push(S.d,V+vn),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=V+vn)),Dl(Lt),z&&ee.forEach(function(Et){Et.pin===z&&Et.vars.pinSpacing!==!1&&(Et._subPinOffset=!0)}),K&&ct(At)):(V=vd(h,S),V&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=V+vn)),K&&(pt={top:at.top+(St?dt-Ot:Pt)+vn,left:at.left+(St?Pt:dt-Ot)+vn,boxSizing:"border-box",position:"fixed"},pt[ao]=pt["max"+jl]=Math.ceil(at.width)+vn,pt[ro]=pt["max"+$0]=Math.ceil(at.height)+vn,pt[na]=pt[na+fc]=pt[na+uc]=pt[na+hc]=pt[na+cc]="0",pt[cn]=F[cn],pt[cn+fc]=F[cn+fc],pt[cn+uc]=F[cn+uc],pt[cn+hc]=F[cn+hc],pt[cn+cc]=F[cn+cc],it=ew(q,pt,C),$n&&ct(0)),a?(me=a._initted,qp(1),a.render(a.duration(),!0,!0),ot=st(S.a)-zt+T+Be,gt=Math.abs(T-ot)>1,K&&gt&&it.splice(it.length-2,2),a.render(0,!0,!0),me||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),qp(0)):ot=T,_e&&(_e.value?_e.style["overflow"+S.a.toUpperCase()]=_e.value:_e.style.removeProperty("overflow-"+S.a));else if(f&&ct()&&!E)for(at=f.parentNode;at&&at!==Se;)at._pinOffset&&(Ot-=at._pinOffset,Bt-=at._pinOffset),at=at.parentNode;we&&we.forEach(function(Et){return Et.revert(!1,!0)}),w.start=Ot,w.end=Bt,ne=L=$n?At:ct(),!E&&!$n&&(ne<At&&ct(At),w.scroll.rec=0),w.revert(!1,!0),nt=kn(),lt&&(Z=-1,lt.restart(!0)),Vn=0,a&&U&&(a._initted||Jt)&&a.progress()!==Jt&&a.progress(Jt||0,!0).render(a.time(),!0,!0),(_n||ht!==w.progress||E||_||a&&!a._initted)&&(a&&!U&&(a._initted||ht||a.vars.immediateRender!==!1)&&a.totalProgress(E&&Ot<-.001&&!ht?Mt.utils.normalize(Ot,Bt,0):ht,!0),w.progress=_n||(ne-Ot)/T===ht?0:ht),h&&g&&(Q._pinOffset=Math.round(w.progress*ot)),j&&j.invalidate(),isNaN(gn)||(gn-=Mt.getProperty(W,S.p),ce-=Mt.getProperty(Rt,S.p),Nf(W,S,gn),Nf(Zt,S,gn-(Xt||0)),Nf(Rt,S,ce),Nf(yt,S,ce-(Xt||0))),_n&&!$n&&w.update(),c&&!$n&&!D&&(D=!0,c(w),D=!1)}},w.getVelocity=function(){return(ct()-L)/(kn()-zu)*1e3||0},w.endAnimation=function(){Su(w.callbackAnimation),a&&(j?j.progress(1):a.paused()?U||Su(a,w.direction<0,1):Su(a,a.reversed()))},w.labelToScroll=function(ft){return a&&a.labels&&(Ot||w.refresh()||Ot)+a.labels[ft]/a.duration()*T||0},w.getTrailing=function(ft){var kt=ee.indexOf(w),Nt=w.direction>0?ee.slice(0,kt).reverse():ee.slice(kt+1);return(wi(ft)?Nt.filter(function(Xt){return Xt.vars.preventOverlaps===ft}):Nt).filter(function(Xt){return w.direction>0?Xt.end<=Ot:Xt.start>=Bt})},w.update=function(ft,kt,Nt){if(!(E&&!Nt&&!ft)){var Xt=$n===!0?At:w.scroll(),Ke=ft?0:(Xt-Ot)/T,ie=Ke<0?0:Ke>1?1:Ke||0,Ie=w.progress,_n,He,Be,Te,Ei,b,z,k;if(kt&&(L=ne,ne=E?ct():Xt,x&&(B=ge,ge=a&&!U?a.totalProgress():ie)),m&&h&&!Vn&&!Af&&ha&&(!ie&&Ot<Xt+(Xt-L)/(kn()-zu)*m?ie=1e-4:ie===1&&Bt>Xt+(Xt-L)/(kn()-zu)*m&&(ie=.9999)),ie!==Ie&&w.enabled){if(_n=w.isActive=!!ie&&ie<1,He=!!Ie&&Ie<1,b=_n!==He,Ei=b||!!ie!=!!Ie,w.direction=ie>Ie?1:-1,w.progress=ie,Ei&&!Vn&&(Be=ie&&!Ie?0:ie===1?1:Ie===1?2:3,U&&(Te=!b&&I[Be+1]!=="none"&&I[Be+1]||I[Be],k=a&&(Te==="complete"||Te==="reset"||Te in a))),M&&(b||k)&&(k||d||!a)&&(Wn(M)?M(w):w.getTrailing(M).forEach(function(dt){return dt.endAnimation()})),U||(j&&!Vn&&!Af?(j._dp._time-j._start!==j._time&&j.render(j._dp._time-j._start),j.resetTo?j.resetTo("totalProgress",ie,a._tTime/a._tDur):(j.vars.totalProgress=ie,j.invalidate().restart())):a&&a.totalProgress(ie,!!(Vn&&(nt||ft)))),h){if(ft&&g&&(Q.style[g+S.os2]=vt),!K)mt(Bu(zt+ot*ie));else if(Ei){if(z=!ft&&ie>Ie&&Bt+1>Xt&&Xt+1>=Oa(P,S),C)if(!ft&&(_n||z)){var V=ir(h,!0),F=Xt-Ot;yx(h,Se,V.top+(S===yn?F:0)+vn,V.left+(S===yn?0:F)+vn)}else yx(h,Q);Dl(_n||z?it:rt),gt&&ie<1&&_n||mt(zt+(ie===1&&!z?ot:0))}}x&&!Ct.tween&&!Vn&&!Af&&lt.restart(!0),o&&(b||y&&ie&&(ie<1||!Yp))&&Ic(o.targets).forEach(function(dt){return dt.classList[_n||y?"add":"remove"](o.className)}),s&&!U&&!ft&&s(w),Ei&&!Vn?(U&&(k&&(Te==="complete"?a.pause().totalProgress(1):Te==="reset"?a.restart(!0).pause():Te==="restart"?a.restart(!0):a[Te]()),s&&s(w)),(b||!Yp)&&(u&&b&&Do(w,u),N[Be]&&Do(w,N[Be]),y&&(ie===1?w.kill(!1,1):N[Be]=0),b||(Be=ie===1?1:3,N[Be]&&Do(w,N[Be]))),R&&!_n&&Math.abs(w.getVelocity())>(Fu(R)?R:2500)&&(Su(w.callbackAnimation),j?j.progress(1):Su(a,Te==="reverse"?1:!ie,1))):U&&s&&!Vn&&s(w)}if(Gt){var at=E?Xt/E.duration()*(E._caScrollDist||0):Xt;Ht(at+(W._isFlipped?1:0)),Gt(at)}Le&&Le(-Xt/E.duration()*(E._caScrollDist||0))}},w.enable=function(ft,kt){w.enabled||(w.enabled=!0,An(P,"resize",Hu),Y||An(P,"scroll",Lo),ut&&An(e,"refreshInit",ut),ft!==!1&&(w.progress=ht=0,ne=L=Z=ct()),kt!==!1&&w.refresh())},w.getTween=function(ft){return ft&&Ct?Ct.tween:j},w.setPositions=function(ft,kt,Nt,Xt){if(E){var Ke=E.scrollTrigger,ie=E.duration(),Ie=Ke.end-Ke.start;ft=Ke.start+Ie*ft/ie,kt=Ke.start+Ie*kt/ie}w.refresh(!1,!1,{start:cx(ft,Nt&&!!w._startClamp),end:cx(kt,Nt&&!!w._endClamp)},Xt),w.update()},w.adjustPinSpacing=function(ft){if(Lt&&ft){var kt=Lt.indexOf(S.d)+1;Lt[kt]=parseFloat(Lt[kt])+ft+vn,Lt[1]=parseFloat(Lt[1])+ft+vn,Dl(Lt)}},w.disable=function(ft,kt){if(ft!==!1&&w.revert(!0,!0),w.enabled&&(w.enabled=w.isActive=!1,kt||j&&j.pause(),At=0,Ut&&(Ut.uncache=1),ut&&bn(e,"refreshInit",ut),lt&&(lt.pause(),Ct.tween&&Ct.tween.kill()&&(Ct.tween=0)),!Y)){for(var Nt=ee.length;Nt--;)if(ee[Nt].scroller===P&&ee[Nt]!==w)return;bn(P,"resize",Hu),Y||bn(P,"scroll",Lo)}},w.kill=function(ft,kt){w.disable(ft,kt),j&&!kt&&j.kill(),l&&delete W_[l];var Nt=ee.indexOf(w);Nt>=0&&ee.splice(Nt,1),Nt===Jn&&bh>0&&Jn--,Nt=0,ee.forEach(function(Xt){return Xt.scroller===w.scroller&&(Nt=1)}),Nt||$n||(w.scroll.rec=0),a&&(a.scrollTrigger=null,ft&&a.revert({kill:!1}),kt||a.kill()),Zt&&[Zt,yt,W,Rt].forEach(function(Xt){return Xt.parentNode&&Xt.parentNode.removeChild(Xt)}),dc===w&&(dc=0),h&&(Ut&&(Ut.uncache=1),Nt=0,ee.forEach(function(Xt){return Xt.pin===h&&Nt++}),Nt||(Ut.spacer=0)),i.onKill&&i.onKill(w)},ee.push(w),w.enable(!1,!1),Ne&&Ne(w),a&&a.add&&!T){var de=w.update;w.update=function(){w.update=de,re.cache++,Ot||Bt||w.refresh()},Mt.delayedCall(.01,w.update),T=.01,Ot=Bt=0}else w.refresh();h&&JR()},e.register=function(i){return $o||(Mt=i||UT(),DT()&&window.document&&e.enable(),$o=Iu),$o},e.defaults=function(i){if(i)for(var a in i)Df[a]=i[a];return Df},e.disable=function(i,a){Iu=0,ee.forEach(function(s){return s[a?"kill":"disable"](i)}),bn(ae,"wheel",Lo),bn(be,"scroll",Lo),clearInterval(bf),bn(be,"touchcancel",ba),bn(Se,"touchstart",ba),Rf(bn,be,"pointerdown,touchstart,mousedown",fx),Rf(bn,be,"pointerup,touchend,mouseup",hx),gd.kill(),Cf(bn);for(var r=0;r<re.length;r+=3)wf(bn,re[r],re[r+1]),wf(bn,re[r],re[r+2])},e.enable=function(){if(ae=window,be=document,Li=be.documentElement,Se=be.body,Mt){if(Ic=Mt.utils.toArray,oc=Mt.utils.clamp,k_=Mt.core.context||ba,qp=Mt.core.suppressOverwrites||ba,K0=ae.history.scrollRestoration||"auto",q_=ae.pageYOffset||0,Mt.core.globals("ScrollTrigger",e),Se){Iu=1,wl=document.createElement("div"),wl.style.height="100vh",wl.style.position="absolute",GT(),WR(),sn.register(Mt),e.isTouch=sn.isTouch,Or=sn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),V_=sn.isTouch===1,An(ae,"wheel",Lo),Z0=[ae,be,Li,Se],Mt.matchMedia?(e.matchMedia=function(c){var d=Mt.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},Mt.addEventListener("matchMediaInit",function(){FT(),ev()}),Mt.addEventListener("matchMediaRevert",function(){return BT()}),Mt.addEventListener("matchMedia",function(){qs(0,1),_o("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return Kp(),Kp})):console.warn("Requires GSAP 3.11.0 or later"),Kp(),An(be,"scroll",Lo);var i=Se.hasAttribute("style"),a=Se.style,r=a.borderTopStyle,s=Mt.core.Animation.prototype,o,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",o=ir(Se),yn.m=Math.round(o.top+yn.sc())||0,ti.m=Math.round(o.left+ti.sc())||0,r?a.borderTopStyle=r:a.removeProperty("border-top-style"),i||(Se.setAttribute("style",""),Se.removeAttribute("style")),bf=setInterval(mx,250),Mt.delayedCall(.5,function(){return Af=0}),An(be,"touchcancel",ba),An(Se,"touchstart",ba),Rf(An,be,"pointerdown,touchstart,mousedown",fx),Rf(An,be,"pointerup,touchend,mouseup",hx),G_=Mt.utils.checkPrefix("transform"),Ah.push(G_),$o=kn(),gd=Mt.delayedCall(.2,qs).pause(),tl=[be,"visibilitychange",function(){var c=ae.innerWidth,d=ae.innerHeight;be.hidden?(ox=c,lx=d):(ox!==c||lx!==d)&&Hu()},be,"DOMContentLoaded",qs,ae,"load",qs,ae,"resize",Hu],Cf(An),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<re.length;l+=3)wf(bn,re[l],re[l+1]),wf(bn,re[l],re[l+2])}else if(be){var u=function c(){e.enable(),be.removeEventListener("DOMContentLoaded",c)};be.addEventListener("DOMContentLoaded",u)}}},e.config=function(i){"limitCallbacks"in i&&(Yp=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(bf)||(bf=a)&&setInterval(mx,a),"ignoreMobileResize"in i&&(V_=e.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Cf(bn)||Cf(An,i.autoRefreshEvents||"none"),CT=(i.autoRefreshEvents+"").indexOf("resize")===-1)},e.scrollerProxy=function(i,a){var r=li(i),s=re.indexOf(r),o=po(r);~s&&re.splice(s,o?6:2),a&&(o?Ia.unshift(ae,a,Se,a,Li,a):Ia.unshift(r,a))},e.clearMatchMedia=function(i){ee.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},e.isInViewport=function(i,a,r){var s=(wi(i)?li(i):i).getBoundingClientRect(),o=s[r?ao:ro]*a||0;return r?s.right-o>0&&s.left+o<ae.innerWidth:s.bottom-o>0&&s.top+o<ae.innerHeight},e.positionInViewport=function(i,a,r){wi(i)&&(i=li(i));var s=i.getBoundingClientRect(),o=s[r?ao:ro],l=a==null?o/2:a in yd?yd[a]*o:~a.indexOf("%")?parseFloat(a)*o/100:parseFloat(a)||0;return r?(s.left+l)/ae.innerWidth:(s.top+l)/ae.innerHeight},e.killAll=function(i){if(ee.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),i!==!0){var a=mo.killAll||[];mo={},a.forEach(function(r){return r()})}},e}();Qt.version="3.15.0";Qt.saveStyles=function(e){return e?Ic(e).forEach(function(t){if(t&&t.style){var n=Ci.indexOf(t);n>=0&&Ci.splice(n,5),Ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),k_())}}):Ci};Qt.revert=function(e,t){return ev(!e,t)};Qt.create=function(e,t){return new Qt(e,t)};Qt.refresh=function(e){return e?Hu(!0):($o||Qt.register())&&qs(!0)};Qt.update=function(e){return++re.cache&&pr(e===!0?2:0)};Qt.clearScrollMemory=HT;Qt.maxScroll=function(e,t){return Oa(e,t?ti:yn)};Qt.getScrollFunc=function(e,t){return ys(li(e),t?ti:yn)};Qt.getById=function(e){return W_[e]};Qt.getAll=function(){return ee.filter(function(e){return e.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!ha};Qt.snapDirectional=tv;Qt.addEventListener=function(e,t){var n=mo[e]||(mo[e]=[]);~n.indexOf(t)||n.push(t)};Qt.removeEventListener=function(e,t){var n=mo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)};Qt.batch=function(e,t){var n=[],i={},a=t.interval||.016,r=t.batchMax||1e9,s=function(u,c){var d=[],f=[],h=Mt.delayedCall(a,function(){c(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),r<=d.length&&h.progress(1)}},o;for(o in t)i[o]=o.substr(0,2)==="on"&&Wn(t[o])&&o!=="onRefreshInit"?s(o,t[o]):t[o];return Wn(r)&&(r=r(),An(Qt,"refresh",function(){return r=t.batchMax()})),Ic(e).forEach(function(l){var u={};for(o in i)u[o]=i[o];u.trigger=l,n.push(Qt.create(u))}),n};var Sx=function(t,n,i,a){return n>a?t(a):n<0&&t(0),i>a?(a-n)/(i-n):i<0?n/(n-i):1},Qp=function e(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(sn.isTouch?" pinch-zoom":""):"none",t===Li&&e(Se,n)},Of={auto:1,scroll:1},iw=function(t){var n=t.event,i=t.target,a=t.axis,r=(n.changedTouches?n.changedTouches[0]:n).target,s=r._gsap||Mt.core.getCache(r),o=kn(),l;if(!s._isScrollT||o-s._isScrollT>2e3){for(;r&&r!==Se&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Of[(l=ia(r)).overflowY]||Of[l.overflowX]));)r=r.parentNode;s._isScroll=r&&r!==i&&!po(r)&&(Of[(l=ia(r)).overflowY]||Of[l.overflowX]),s._isScrollT=o}(s._isScroll||a==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},kT=function(t,n,i,a){return sn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:a=a&&iw,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&An(be,sn.eventTypes[0],Ex,!1,!0)},onDisable:function(){return bn(be,sn.eventTypes[0],Ex,!0)}})},aw=/(input|label|select|textarea)/i,Mx,Ex=function(t){var n=aw.test(t.target.tagName);(n||Mx)&&(t._gsapAllow=!0,Mx=n)},rw=function(t){Hs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,i=n.normalizeScrollX,a=n.momentum,r=n.allowNestedScroll,s=n.onRelease,o,l,u=li(t.target)||Li,c=Mt.core.globals().ScrollSmoother,d=c&&c.get(),f=Or&&(t.content&&li(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),h=ys(u,yn),g=ys(u,ti),_=1,m=(sn.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,p=0,v=Wn(a)?function(){return a(o)}:function(){return a||2.8},y,x,C=kT(u,t.type,!0,r),A=function(){return x=!1},E=ba,R=ba,M=function(){l=Oa(u,yn),R=oc(Or?1:0,l),i&&(E=oc(0,Oa(u,ti))),y=so},S=function(){f._gsap.y=Bu(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(x){requestAnimationFrame(A);var O=Bu(o.deltaY/2),tt=R(h.v-O);if(f&&tt!==h.v+h.offset){h.offset=tt-h.v;var w=Bu((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+w+", 0, 1)",f._gsap.y=w+"px",h.cacheID=re.cache,pr()}return!0}h.offset&&S(),x=!0},P,G,Y,K,N=function(){M(),P.isActive()&&P.vars.scrollY>l&&(h()>l?P.progress(1)&&h(l):P.resetTo("scrollY",l))};return f&&Mt.set(f,{y:"+=0"}),t.ignoreCheck=function(I){return Or&&I.type==="touchmove"&&U()||_>1.05&&I.type!=="touchstart"||o.isGesturing||I.touches&&I.touches.length>1},t.onPress=function(){x=!1;var I=_;_=Bu((ae.visualViewport&&ae.visualViewport.scale||1)/m),P.pause(),I!==_&&Qp(u,_>1.01?!0:i?!1:"x"),G=g(),Y=h(),M(),y=so},t.onRelease=t.onGestureStart=function(I,O){if(h.offset&&S(),!O)K.restart(!0);else{re.cache++;var tt=v(),w,ut;i&&(w=g(),ut=w+tt*.05*-I.velocityX/.227,tt*=Sx(g,w,ut,Oa(u,ti)),P.vars.scrollX=E(ut)),w=h(),ut=w+tt*.05*-I.velocityY/.227,tt*=Sx(h,w,ut,Oa(u,yn)),P.vars.scrollY=R(ut),P.invalidate().duration(tt).play(.01),(Or&&P.vars.scrollY>=l||w>=l-1)&&Mt.to({},{onUpdate:N,duration:tt})}s&&s(I)},t.onWheel=function(){P._ts&&P.pause(),kn()-p>1e3&&(y=0,p=kn())},t.onChange=function(I,O,tt,w,ut){if(so!==y&&M(),O&&i&&g(E(w[2]===O?G+(I.startX-I.x):g()+O-w[1])),tt){h.offset&&S();var Dt=ut[2]===tt,Yt=Dt?Y+I.startY-I.y:h()+tt-ut[1],Z=R(Yt);Dt&&Yt!==Z&&(Y+=Z-Yt),h(Z)}(tt||O)&&pr()},t.onEnable=function(){Qp(u,i?!1:"x"),Qt.addEventListener("refresh",N),An(ae,"resize",N),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},t.onDisable=function(){Qp(u,!0),bn(ae,"resize",N),Qt.removeEventListener("refresh",N),C.kill()},t.lockAxis=t.lockAxis!==!1,o=new sn(t),o.iOS=Or,Or&&!h()&&h(1),Or&&Mt.ticker.add(ba),K=o._dc,P=Mt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:VT(h,h(),function(){return P.pause()})},onUpdate:pr,onComplete:K.vars.onComplete}),o};Qt.sort=function(e){if(Wn(e))return ee.sort(e);var t=ae.pageYOffset||0;return Qt.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+ae.innerHeight}),ee.sort(e||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(e){return new sn(e)};Qt.normalizeScroll=function(e){if(typeof e>"u")return Qn;if(e===!0&&Qn)return Qn.enable();if(e===!1){Qn&&Qn.kill(),Qn=e;return}var t=e instanceof sn?e:rw(e);return Qn&&Qn.target===t.target&&Qn.kill(),po(t.target)&&(Qn=t),t};Qt.core={_getVelocityProp:H_,_inputObserver:kT,_scrollers:re,_proxies:Ia,bridge:{ss:function(){ha||_o("scrollStart"),ha=kn()},ref:function(){return Vn}}};UT()&&Mt.registerPlugin(Qt);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nv="167",sw=0,Tx=1,ow=2,XT=1,lw=2,Ja=3,xs=0,_i=1,ar=2,cs=0,Ul=1,Z_=2,bx=3,Ax=4,uw=5,ks=100,cw=101,fw=102,hw=103,dw=104,pw=200,mw=201,_w=202,gw=203,K_=204,j_=205,vw=206,yw=207,xw=208,Sw=209,Mw=210,Ew=211,Tw=212,bw=213,Aw=214,Cw=0,Rw=1,ww=2,xd=3,Dw=4,Uw=5,Lw=6,Nw=7,WT=0,Ow=1,Pw=2,fs=0,zw=1,Iw=2,Bw=3,Fw=4,Hw=5,Gw=6,Vw=7,qT=300,Ql=301,Jl=302,Q_=303,J_=304,Zd=306,$_=1e3,Ys=1001,tg=1002,ua=1003,kw=1004,Pf=1005,Sa=1006,Jp=1007,Zs=1008,Mr=1009,YT=1010,ZT=1011,Fc=1012,iv=1013,go=1014,ur=1015,$c=1016,av=1017,rv=1018,$l=1020,KT=35902,jT=1021,QT=1022,Ma=1023,JT=1024,$T=1025,Ll=1026,tu=1027,tb=1028,sv=1029,eb=1030,ov=1031,lv=1033,Rh=33776,wh=33777,Dh=33778,Uh=33779,eg=35840,ng=35841,ig=35842,ag=35843,rg=36196,sg=37492,og=37496,lg=37808,ug=37809,cg=37810,fg=37811,hg=37812,dg=37813,pg=37814,mg=37815,_g=37816,gg=37817,vg=37818,yg=37819,xg=37820,Sg=37821,Lh=36492,Mg=36494,Eg=36495,nb=36283,Tg=36284,bg=36285,Ag=36286,Xw=3200,Ww=3201,qw=0,Yw=1,Gr="",Aa="srgb",Ts="srgb-linear",uv="display-p3",Kd="display-p3-linear",Sd="linear",Ve="srgb",Md="rec709",Ed="p3",No=7680,Cx=519,Zw=512,Kw=513,jw=514,ib=515,Qw=516,Jw=517,$w=518,t3=519,Rx=35044,wx="300 es",cr=2e3,Td=2001;class cu{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$p=Math.PI/180,Cg=180/Math.PI;function tf(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[e&255]+Hn[e>>8&255]+Hn[e>>16&255]+Hn[e>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function ui(e,t,n){return Math.max(t,Math.min(n,e))}function e3(e,t){return(e%t+t)%t}function tm(e,t,n){return(1-n)*e+n*t}function Mu(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ri(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class pe{constructor(t=0,n=0){pe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ui(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,n,i,a,r,s,o,l,u){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,u)}set(t,n,i,a,r,s,o,l,u){const c=this.elements;return c[0]=t,c[1]=a,c[2]=o,c[3]=n,c[4]=r,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=a[0],m=a[3],p=a[6],v=a[1],y=a[4],x=a[7],C=a[2],A=a[5],E=a[8];return r[0]=s*_+o*v+l*C,r[3]=s*m+o*y+l*A,r[6]=s*p+o*x+l*E,r[1]=u*_+c*v+d*C,r[4]=u*m+c*y+d*A,r[7]=u*p+c*x+d*E,r[2]=f*_+h*v+g*C,r[5]=f*m+h*y+g*A,r[8]=f*p+h*x+g*E,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return n*s*c-n*o*u-i*r*c+i*o*l+a*r*u-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=c*s-o*u,f=o*l-c*r,h=u*r-s*l,g=n*d+i*f+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(a*u-c*i)*_,t[2]=(o*i-a*s)*_,t[3]=f*_,t[4]=(c*n-a*l)*_,t[5]=(a*r-o*n)*_,t[6]=h*_,t[7]=(i*l-u*n)*_,t[8]=(s*n-i*r)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+t,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(em.makeScale(t,n)),this}rotate(t){return this.premultiply(em.makeRotation(-t)),this}translate(t,n){return this.premultiply(em.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const em=new te;function ab(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function bd(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function n3(){const e=bd("canvas");return e.style.display="block",e}const Dx={};function pc(e){e in Dx||(Dx[e]=!0,console.warn(e))}function i3(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Ux=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lx=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Eu={[Ts]:{transfer:Sd,primaries:Md,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Aa]:{transfer:Ve,primaries:Md,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Kd]:{transfer:Sd,primaries:Ed,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Lx),fromReference:e=>e.applyMatrix3(Ux)},[uv]:{transfer:Ve,primaries:Ed,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Lx),fromReference:e=>e.applyMatrix3(Ux).convertLinearToSRGB()}},a3=new Set([Ts,Kd]),Me={enabled:!0,_workingColorSpace:Ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!a3.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Eu[t].toReference,a=Eu[n].fromReference;return a(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Eu[e].primaries},getTransfer:function(e){return e===Gr?Sd:Eu[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Eu[t].luminanceCoefficients)}};function Nl(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function nm(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Oo;class r3{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oo===void 0&&(Oo=bd("canvas")),Oo.width=t.width,Oo.height=t.height;const i=Oo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Oo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=bd("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Nl(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Nl(n[i]/255)*255):n[i]=Nl(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let s3=0;class rb{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s3++}),this.uuid=tf(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(im(a[s].image)):r.push(im(a[s]))}else r=im(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function im(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?r3.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o3=0;class gi extends cu{constructor(t=gi.DEFAULT_IMAGE,n=gi.DEFAULT_MAPPING,i=Ys,a=Ys,r=Sa,s=Zs,o=Ma,l=Mr,u=gi.DEFAULT_ANISOTROPY,c=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o3++}),this.uuid=tf(),this.name="",this.source=new rb(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qT)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $_:t.x=t.x-Math.floor(t.x);break;case Ys:t.x=t.x<0?0:1;break;case tg:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $_:t.y=t.y-Math.floor(t.y);break;case Ys:t.y=t.y<0?0:1;break;case tg:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=qT;gi.DEFAULT_ANISOTROPY=1;class Xe{constructor(t=0,n=0,i=0,a=1){Xe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,x=(h+1)/2,C=(p+1)/2,A=(c+f)/4,E=(d+_)/4,R=(g+m)/4;return y>x&&y>C?y<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(y),a=A/i,r=E/i):x>C?x<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(x),i=A/a,r=R/a):C<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),i=E/r,a=R/r),this.set(i,a,r,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l3 extends cu{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Xe(0,0,t,n),this.scissorTest=!1,this.viewport=new Xe(0,0,t,n);const a={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new gi(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new rb(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vo extends l3{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class sb extends gi{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ua,this.minFilter=ua,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class u3 extends gi{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=ua,this.minFilter=ua,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ef{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],c=i[a+2],d=i[a+3];const f=r[s+0],h=r[s+1],g=r[s+2],_=r[s+3];if(o===0){t[n+0]=l,t[n+1]=u,t[n+2]=c,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=h,t[n+2]=g,t[n+3]=_;return}if(d!==_||l!==f||u!==h||c!==g){let m=1-o;const p=l*f+u*h+c*g+d*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,p*v);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const x=o*v;if(l=l*m+f*x,u=u*m+h*x,c=c*m+g*x,d=d*m+_*x,m===1-o){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}t[n]=l,t[n+1]=u,t[n+2]=c,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],u=i[a+2],c=i[a+3],d=r[s],f=r[s+1],h=r[s+2],g=r[s+3];return t[n]=o*g+c*d+l*h-u*f,t[n+1]=l*g+c*f+u*d-o*h,t[n+2]=u*g+c*h+o*f-l*d,t[n+3]=c*g-o*d-l*f-u*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(a/2),d=o(r/2),f=l(i/2),h=l(a/2),g=l(r/2);switch(s){case"XYZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"YXZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"ZXY":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"ZYX":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"YZX":this._x=f*c*d+u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d-f*h*g;break;case"XZY":this._x=f*c*d-u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(r-u)*h,this._z=(s-a)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(c-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(r+u)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(r-u)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(s-a)/h,this._x=(r+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ui(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*o+a*u-r*l,this._y=a*c+s*l+r*o-i*u,this._z=r*c+s*u+i*l-a*o,this._w=s*c-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-n;return this._w=h*s+n*this._w,this._x=h*i+n*this._x,this._y=h*a+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Nx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Nx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*a-o*i),c=2*(o*n-r*a),d=2*(r*i-s*n);return this.x=n+l*u+s*d-o*c,this.y=i+l*c+o*u-r*d,this.z=a+l*d+r*c-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return am.copy(this).projectOnVector(t),this.sub(am)}reflect(t){return this.sub(am.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ui(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const am=new X,Nx=new ef;class nf{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(_a.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(_a.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=_a.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,_a):_a.fromBufferAttribute(r,s),_a.applyMatrix4(t.matrixWorld),this.expandByPoint(_a);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zf.copy(i.boundingBox)),zf.applyMatrix4(t.matrixWorld),this.union(zf)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_a),_a.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tu),If.subVectors(this.max,Tu),Po.subVectors(t.a,Tu),zo.subVectors(t.b,Tu),Io.subVectors(t.c,Tu),Rr.subVectors(zo,Po),wr.subVectors(Io,zo),Rs.subVectors(Po,Io);let n=[0,-Rr.z,Rr.y,0,-wr.z,wr.y,0,-Rs.z,Rs.y,Rr.z,0,-Rr.x,wr.z,0,-wr.x,Rs.z,0,-Rs.x,-Rr.y,Rr.x,0,-wr.y,wr.x,0,-Rs.y,Rs.x,0];return!rm(n,Po,zo,Io,If)||(n=[1,0,0,0,1,0,0,0,1],!rm(n,Po,zo,Io,If))?!1:(Bf.crossVectors(Rr,wr),n=[Bf.x,Bf.y,Bf.z],rm(n,Po,zo,Io,If))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_a).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_a).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qa=[new X,new X,new X,new X,new X,new X,new X,new X],_a=new X,zf=new nf,Po=new X,zo=new X,Io=new X,Rr=new X,wr=new X,Rs=new X,Tu=new X,If=new X,Bf=new X,ws=new X;function rm(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){ws.fromArray(e,r);const o=a.x*Math.abs(ws.x)+a.y*Math.abs(ws.y)+a.z*Math.abs(ws.z),l=t.dot(ws),u=n.dot(ws),c=i.dot(ws);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const c3=new nf,bu=new X,sm=new X;class cv{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):c3.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bu.subVectors(t,this.center);const n=bu.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(bu,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bu.copy(t.center).add(sm)),this.expandByPoint(bu.copy(t.center).sub(sm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ya=new X,om=new X,Ff=new X,Dr=new X,lm=new X,Hf=new X,um=new X;class f3{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ya)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ya.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ya.copy(this.origin).addScaledVector(this.direction,n),Ya.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){om.copy(t).add(n).multiplyScalar(.5),Ff.copy(n).sub(t).normalize(),Dr.copy(this.origin).sub(om);const r=t.distanceTo(n)*.5,s=-this.direction.dot(Ff),o=Dr.dot(this.direction),l=-Dr.dot(Ff),u=Dr.lengthSq(),c=Math.abs(1-s*s);let d,f,h,g;if(c>0)if(d=s*l-o,f=s*o-l,g=r*c,d>=0)if(f>=-g)if(f<=g){const _=1/c;d*=_,f*=_,h=d*(d+s*f+2*o)+f*(s*d+f+2*l)+u}else f=r,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+u;else f=-r,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-s*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+u):(d=Math.max(0,-(s*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+u);else f=s>0?-r:r,d=Math.max(0,-(s*f+o)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(om).addScaledVector(Ff,f),h}intersectSphere(t,n){Ya.subVectors(t.center,this.origin);const i=Ya.dot(this.direction),a=Ya.dot(Ya)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,a=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,a=(t.min.x-f.x)*u),c>=0?(r=(t.min.y-f.y)*c,s=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,s=(t.min.y-f.y)*c),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Ya)!==null}intersectTriangle(t,n,i,a,r){lm.subVectors(n,t),Hf.subVectors(i,t),um.crossVectors(lm,Hf);let s=this.direction.dot(um),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Dr.subVectors(this.origin,t);const l=o*this.direction.dot(Hf.crossVectors(Dr,Hf));if(l<0)return null;const u=o*this.direction.dot(lm.cross(Dr));if(u<0||l+u>s)return null;const c=-o*Dr.dot(um);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,n,i,a,r,s,o,l,u,c,d,f,h,g,_,m){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,u,c,d,f,h,g,_,m)}set(t,n,i,a,r,s,o,l,u,c,d,f,h,g,_,m){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=a,p[1]=r,p[5]=s,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/Bo.setFromMatrixColumn(t,0).length(),r=1/Bo.setFromMatrixColumn(t,1).length(),s=1/Bo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=s*c,h=s*d,g=o*c,_=o*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+g*u,n[5]=f-_*u,n[9]=-o*l,n[2]=_-f*u,n[6]=g+h*u,n[10]=s*l}else if(t.order==="YXZ"){const f=l*c,h=l*d,g=u*c,_=u*d;n[0]=f+_*o,n[4]=g*o-h,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-o,n[2]=h*o-g,n[6]=_+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*c,h=l*d,g=u*c,_=u*d;n[0]=f-_*o,n[4]=-s*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=s*c,n[9]=_-f*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*c,h=s*d,g=o*c,_=o*d;n[0]=l*c,n[4]=g*u-h,n[8]=f*u+_,n[1]=l*d,n[5]=_*u+f,n[9]=h*u-g,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,h=s*u,g=o*l,_=o*u;n[0]=l*c,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=s*c,n[9]=-o*c,n[2]=-u*c,n[6]=h*d+g,n[10]=f-_*d}else if(t.order==="XZY"){const f=s*l,h=s*u,g=o*l,_=o*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+_,n[5]=s*c,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*c,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h3,t,d3)}lookAt(t,n,i){const a=this.elements;return bi.subVectors(t,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Ur.crossVectors(i,bi),Ur.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Ur.crossVectors(i,bi)),Ur.normalize(),Gf.crossVectors(bi,Ur),a[0]=Ur.x,a[4]=Gf.x,a[8]=bi.x,a[1]=Ur.y,a[5]=Gf.y,a[9]=bi.y,a[2]=Ur.z,a[6]=Gf.z,a[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],y=i[7],x=i[11],C=i[15],A=a[0],E=a[4],R=a[8],M=a[12],S=a[1],U=a[5],P=a[9],G=a[13],Y=a[2],K=a[6],N=a[10],I=a[14],O=a[3],tt=a[7],w=a[11],ut=a[15];return r[0]=s*A+o*S+l*Y+u*O,r[4]=s*E+o*U+l*K+u*tt,r[8]=s*R+o*P+l*N+u*w,r[12]=s*M+o*G+l*I+u*ut,r[1]=c*A+d*S+f*Y+h*O,r[5]=c*E+d*U+f*K+h*tt,r[9]=c*R+d*P+f*N+h*w,r[13]=c*M+d*G+f*I+h*ut,r[2]=g*A+_*S+m*Y+p*O,r[6]=g*E+_*U+m*K+p*tt,r[10]=g*R+_*P+m*N+p*w,r[14]=g*M+_*G+m*I+p*ut,r[3]=v*A+y*S+x*Y+C*O,r[7]=v*E+y*U+x*K+C*tt,r[11]=v*R+y*P+x*N+C*w,r[15]=v*M+y*G+x*I+C*ut,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],u=t[13],c=t[2],d=t[6],f=t[10],h=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-a*u*d-r*o*f+i*u*f+a*o*h-i*l*h)+_*(+n*l*h-n*u*f+r*s*f-a*s*h+a*u*c-r*l*c)+m*(+n*u*d-n*o*h-r*s*d+i*s*h+r*o*c-i*u*c)+p*(-a*o*c-n*l*d+n*o*f+a*s*d-i*s*f+i*l*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],d=t[9],f=t[10],h=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=d*m*u-_*f*u+_*l*h-o*m*h-d*l*p+o*f*p,y=g*f*u-c*m*u-g*l*h+s*m*h+c*l*p-s*f*p,x=c*_*u-g*d*u+g*o*h-s*_*h-c*o*p+s*d*p,C=g*d*l-c*_*l-g*o*f+s*_*f+c*o*m-s*d*m,A=n*v+i*y+a*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=v*E,t[1]=(_*f*r-d*m*r-_*a*h+i*m*h+d*a*p-i*f*p)*E,t[2]=(o*m*r-_*l*r+_*a*u-i*m*u-o*a*p+i*l*p)*E,t[3]=(d*l*r-o*f*r-d*a*u+i*f*u+o*a*h-i*l*h)*E,t[4]=y*E,t[5]=(c*m*r-g*f*r+g*a*h-n*m*h-c*a*p+n*f*p)*E,t[6]=(g*l*r-s*m*r-g*a*u+n*m*u+s*a*p-n*l*p)*E,t[7]=(s*f*r-c*l*r+c*a*u-n*f*u-s*a*h+n*l*h)*E,t[8]=x*E,t[9]=(g*d*r-c*_*r-g*i*h+n*_*h+c*i*p-n*d*p)*E,t[10]=(s*_*r-g*o*r+g*i*u-n*_*u-s*i*p+n*o*p)*E,t[11]=(c*o*r-s*d*r-c*i*u+n*d*u+s*i*h-n*o*h)*E,t[12]=C*E,t[13]=(c*_*a-g*d*a+g*i*f-n*_*f-c*i*m+n*d*m)*E,t[14]=(g*o*a-s*_*a-g*i*l+n*_*l+s*i*m-n*o*m)*E,t[15]=(s*d*a-c*o*a+c*i*l-n*d*l-s*i*f+n*o*f)*E,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,u=r*s,c=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,c*o+i,c*l-a*s,0,u*l-a*o,c*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,c=s+s,d=o+o,f=r*u,h=r*c,g=r*d,_=s*c,m=s*d,p=o*d,v=l*u,y=l*c,x=l*d,C=i.x,A=i.y,E=i.z;return a[0]=(1-(_+p))*C,a[1]=(h+x)*C,a[2]=(g-y)*C,a[3]=0,a[4]=(h-x)*A,a[5]=(1-(f+p))*A,a[6]=(m+v)*A,a[7]=0,a[8]=(g+y)*E,a[9]=(m-v)*E,a[10]=(1-(f+_))*E,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=Bo.set(a[0],a[1],a[2]).length();const s=Bo.set(a[4],a[5],a[6]).length(),o=Bo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],ga.copy(this);const u=1/r,c=1/s,d=1/o;return ga.elements[0]*=u,ga.elements[1]*=u,ga.elements[2]*=u,ga.elements[4]*=c,ga.elements[5]*=c,ga.elements[6]*=c,ga.elements[8]*=d,ga.elements[9]*=d,ga.elements[10]*=d,n.setFromRotationMatrix(ga),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=cr){const l=this.elements,u=2*r/(n-t),c=2*r/(i-a),d=(n+t)/(n-t),f=(i+a)/(i-a);let h,g;if(o===cr)h=-(s+r)/(s-r),g=-2*s*r/(s-r);else if(o===Td)h=-s/(s-r),g=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=cr){const l=this.elements,u=1/(n-t),c=1/(i-a),d=1/(s-r),f=(n+t)*u,h=(i+a)*c;let g,_;if(o===cr)g=(s+r)*d,_=-2*d;else if(o===Td)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Bo=new X,ga=new nn,h3=new X(0,0,0),d3=new X(1,1,1),Ur=new X,Gf=new X,bi=new X,Ox=new nn,Px=new ef;class Er{constructor(t=0,n=0,i=0,a=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],c=a[9],d=a[2],f=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(ui(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ui(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ui(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ui(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ui(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ui(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ox.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ox,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Px.setFromEuler(this),this.setFromQuaternion(Px,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class ob{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let p3=0;const zx=new X,Fo=new ef,Za=new nn,Vf=new X,Au=new X,m3=new X,_3=new ef,Ix=new X(1,0,0),Bx=new X(0,1,0),Fx=new X(0,0,1),Hx={type:"added"},g3={type:"removed"},Ho={type:"childadded",child:null},cm={type:"childremoved",child:null};class vi extends cu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p3++}),this.uuid=tf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const t=new X,n=new Er,i=new ef,a=new X(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nn},normalMatrix:{value:new te}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ob,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fo.setFromAxisAngle(t,n),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(t,n){return Fo.setFromAxisAngle(t,n),this.quaternion.premultiply(Fo),this}rotateX(t){return this.rotateOnAxis(Ix,t)}rotateY(t){return this.rotateOnAxis(Bx,t)}rotateZ(t){return this.rotateOnAxis(Fx,t)}translateOnAxis(t,n){return zx.copy(t).applyQuaternion(this.quaternion),this.position.add(zx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ix,t)}translateY(t){return this.translateOnAxis(Bx,t)}translateZ(t){return this.translateOnAxis(Fx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Za.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Vf.copy(t):Vf.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Au.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Za.lookAt(Au,Vf,this.up):Za.lookAt(Vf,Au,this.up),this.quaternion.setFromRotationMatrix(Za),a&&(Za.extractRotation(a.matrixWorld),Fo.setFromRotationMatrix(Za),this.quaternion.premultiply(Fo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hx),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(g3),cm.child=t,this.dispatchEvent(cm),cm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Za.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Za.multiply(t.parent.matrixWorld)),t.applyMatrix4(Za),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hx),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Au,t,m3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Au,_3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),u=s(t.textures),c=s(t.images),d=s(t.shapes),f=s(t.skeletons),h=s(t.animations),g=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=a,i;function s(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}vi.DEFAULT_UP=new X(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const va=new X,Ka=new X,fm=new X,ja=new X,Go=new X,Vo=new X,Gx=new X,hm=new X,dm=new X,pm=new X;class wa{constructor(t=new X,n=new X,i=new X){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),va.subVectors(t,n),a.cross(va);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){va.subVectors(a,n),Ka.subVectors(i,n),fm.subVectors(t,n);const s=va.dot(va),o=va.dot(Ka),l=va.dot(fm),u=Ka.dot(Ka),c=Ka.dot(fm),d=s*u-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(u*l-o*c)*f,g=(s*c-o*l)*f;return r.set(1-h-g,g,h)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,ja)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ja.x),l.addScaledVector(s,ja.y),l.addScaledVector(o,ja.z),l)}static isFrontFacing(t,n,i,a){return va.subVectors(i,n),Ka.subVectors(t,n),va.cross(Ka).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return va.subVectors(this.c,this.b),Ka.subVectors(this.a,this.b),va.cross(Ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return wa.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return wa.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return wa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;Go.subVectors(a,i),Vo.subVectors(r,i),hm.subVectors(t,i);const l=Go.dot(hm),u=Vo.dot(hm);if(l<=0&&u<=0)return n.copy(i);dm.subVectors(t,a);const c=Go.dot(dm),d=Vo.dot(dm);if(c>=0&&d<=c)return n.copy(a);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Go,s);pm.subVectors(t,r);const h=Go.dot(pm),g=Vo.dot(pm);if(g>=0&&h<=g)return n.copy(r);const _=h*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(Vo,o);const m=c*g-h*d;if(m<=0&&d-c>=0&&h-g>=0)return Gx.subVectors(r,a),o=(d-c)/(d-c+(h-g)),n.copy(a).addScaledVector(Gx,o);const p=1/(m+_+f);return s=_*p,o=f*p,n.copy(i).addScaledVector(Go,s).addScaledVector(Vo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},kf={h:0,s:0,l:0};function mm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Re{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Aa){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,n),this}setRGB(t,n,i,a=Me.workingColorSpace){return this.r=t,this.g=n,this.b=i,Me.toWorkingColorSpace(this,a),this}setHSL(t,n,i,a=Me.workingColorSpace){if(t=e3(t,1),n=ui(n,0,1),i=ui(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=mm(s,r,t+1/3),this.g=mm(s,r,t),this.b=mm(s,r,t-1/3)}return Me.toWorkingColorSpace(this,a),this}setStyle(t,n=Aa){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Aa){const i=lb[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nl(t.r),this.g=Nl(t.g),this.b=Nl(t.b),this}copyLinearToSRGB(t){return this.r=nm(t.r),this.g=nm(t.g),this.b=nm(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Aa){return Me.fromWorkingColorSpace(Gn.copy(this),t),Math.round(ui(Gn.r*255,0,255))*65536+Math.round(ui(Gn.g*255,0,255))*256+Math.round(ui(Gn.b*255,0,255))}getHexString(t=Aa){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Me.workingColorSpace){Me.fromWorkingColorSpace(Gn.copy(this),n);const i=Gn.r,a=Gn.g,r=Gn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,u;const c=(o+s)/2;if(o===s)l=0,u=0;else{const d=s-o;switch(u=c<=.5?d/(s+o):d/(2-s-o),s){case i:l=(a-r)/d+(a<r?6:0);break;case a:l=(r-i)/d+2;break;case r:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,n=Me.workingColorSpace){return Me.fromWorkingColorSpace(Gn.copy(this),n),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Aa){Me.fromWorkingColorSpace(Gn.copy(this),t);const n=Gn.r,i=Gn.g,a=Gn.b;return t!==Aa?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+n,Lr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Lr),t.getHSL(kf);const i=tm(Lr.h,kf.h,n),a=tm(Lr.s,kf.s,n),r=tm(Lr.l,kf.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Re;Re.NAMES=lb;let v3=0;class jd extends cu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v3++}),this.uuid=tf(),this.name="",this.type="Material",this.blending=Ul,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=K_,this.blendDst=j_,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=xd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ul&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==K_&&(i.blendSrc=this.blendSrc),this.blendDst!==j_&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==No&&(i.stencilFail=this.stencilFail),this.stencilZFail!==No&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==No&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ub extends jd{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=WT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new X,Xf=new pe;class Ba{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ur,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return pc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xf.fromBufferAttribute(this,n),Xf.applyMatrix3(t),this.setXY(n,Xf.x,Xf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Mu(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Mu(n,this.array)),n}setX(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Mu(n,this.array)),n}setY(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Mu(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Mu(n,this.array)),n}setW(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array),a=ri(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array),a=ri(a,this.array),r=ri(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rx&&(t.usage=this.usage),t}}class cb extends Ba{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class fb extends Ba{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class oo extends Ba{constructor(t,n,i){super(new Float32Array(t),n,i)}}let y3=0;const ji=new nn,_m=new vi,ko=new X,Ai=new nf,Cu=new nf,Tn=new X;class bo extends cu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y3++}),this.uuid=tf(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ab(t)?fb:cb)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ji.makeRotationFromQuaternion(t),this.applyMatrix4(ji),this}rotateX(t){return ji.makeRotationX(t),this.applyMatrix4(ji),this}rotateY(t){return ji.makeRotationY(t),this.applyMatrix4(ji),this}rotateZ(t){return ji.makeRotationZ(t),this.applyMatrix4(ji),this}translate(t,n,i){return ji.makeTranslation(t,n,i),this.applyMatrix4(ji),this}scale(t,n,i){return ji.makeScale(t,n,i),this.applyMatrix4(ji),this}lookAt(t){return _m.lookAt(t),_m.updateMatrix(),this.applyMatrix4(_m.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(t){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oo(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Ai.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cv);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Cu.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(Ai.min,Cu.min),Ai.expandByPoint(Tn),Tn.addVectors(Ai.max,Cu.max),Ai.expandByPoint(Tn)):(Ai.expandByPoint(Cu.min),Ai.expandByPoint(Cu.max))}Ai.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Tn.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Tn));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Tn.fromBufferAttribute(o,u),l&&(ko.fromBufferAttribute(t,u),Tn.add(ko)),a=Math.max(a,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ba(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new X,l[R]=new X;const u=new X,c=new X,d=new X,f=new pe,h=new pe,g=new pe,_=new X,m=new X;function p(R,M,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,R),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),c.sub(u),d.sub(u),h.sub(f),g.sub(f);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(U),m.copy(d).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(U),o[R].add(_),o[M].add(_),o[S].add(_),l[R].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],U=S.start,P=S.count;for(let G=U,Y=U+P;G<Y;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const y=new X,x=new X,C=new X,A=new X;function E(R){C.fromBufferAttribute(a,R),A.copy(C);const M=o[R];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(A,M);const U=x.dot(l[R])<0?-1:1;s.setXYZW(R,y.x,y.y,y.z,U)}for(let R=0,M=v.length;R<M;++R){const S=v[R],U=S.start,P=S.count;for(let G=U,Y=U+P;G<Y;G+=3)E(t.getX(G+0)),E(t.getX(G+1)),E(t.getX(G+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ba(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const a=new X,r=new X,s=new X,o=new X,l=new X,u=new X,c=new X,d=new X;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),c.subVectors(s,r),d.subVectors(a,r),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,r),d.subVectors(a,r),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Tn.fromBufferAttribute(t,n),Tn.normalize(),t.setXYZ(n,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(o,l){const u=o.array,c=o.itemSize,d=o.normalized,f=new u.constructor(l.length*c);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*c;for(let p=0;p<c;p++)f[g++]=u[h++]}return new Ba(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bo,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],u=t(l,i);n.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=t(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(t.data))}c.length>0&&(a[l]=c,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const a=t.attributes;for(const u in a){const c=a[u];this.setAttribute(u,c.clone(n))}const r=t.morphAttributes;for(const u in r){const c=[],d=r[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vx=new nn,Ds=new f3,Wf=new cv,kx=new X,Xo=new X,Wo=new X,qo=new X,gm=new X,qf=new X,Yf=new pe,Zf=new pe,Kf=new pe,Xx=new X,Wx=new X,qx=new X,jf=new X,Qf=new X;class Pa extends vi{constructor(t=new bo,n=new ub){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){qf.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=o[l],d=r[l];c!==0&&(gm.fromBufferAttribute(d,t),s?qf.addScaledVector(gm,c):qf.addScaledVector(gm.sub(n),c))}n.add(qf)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wf.copy(i.boundingSphere),Wf.applyMatrix4(r),Ds.copy(t.ray).recast(t.near),!(Wf.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Wf,kx)===null||Ds.origin.distanceToSquared(kx)>(t.far-t.near)**2))&&(Vx.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(Vx),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ds)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=s[m.materialIndex],v=Math.max(m.start,h.start),y=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=v,C=y;x<C;x+=3){const A=o.getX(x),E=o.getX(x+1),R=o.getX(x+2);a=Jf(this,p,t,i,u,c,d,A,E,R),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);a=Jf(this,s,t,i,u,c,d,v,y,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=s[m.materialIndex],v=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=v,C=y;x<C;x+=3){const A=x,E=x+1,R=x+2;a=Jf(this,p,t,i,u,c,d,A,E,R),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;a=Jf(this,s,t,i,u,c,d,v,y,x),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function x3(e,t,n,i,a,r,s,o){let l;if(t.side===_i?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===xs,o),l===null)return null;Qf.copy(o),Qf.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(Qf);return u<n.near||u>n.far?null:{distance:u,point:Qf.clone(),object:e}}function Jf(e,t,n,i,a,r,s,o,l,u){e.getVertexPosition(o,Xo),e.getVertexPosition(l,Wo),e.getVertexPosition(u,qo);const c=x3(e,t,n,i,Xo,Wo,qo,jf);if(c){a&&(Yf.fromBufferAttribute(a,o),Zf.fromBufferAttribute(a,l),Kf.fromBufferAttribute(a,u),c.uv=wa.getInterpolation(jf,Xo,Wo,qo,Yf,Zf,Kf,new pe)),r&&(Yf.fromBufferAttribute(r,o),Zf.fromBufferAttribute(r,l),Kf.fromBufferAttribute(r,u),c.uv1=wa.getInterpolation(jf,Xo,Wo,qo,Yf,Zf,Kf,new pe)),s&&(Xx.fromBufferAttribute(s,o),Wx.fromBufferAttribute(s,l),qx.fromBufferAttribute(s,u),c.normal=wa.getInterpolation(jf,Xo,Wo,qo,Xx,Wx,qx,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new X,materialIndex:0};wa.getNormal(Xo,Wo,qo,d.normal),c.face=d}return c}class af extends bo{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,t,s,r,0),g("z","y","x",1,-1,i,n,-t,s,r,1),g("x","z","y",1,1,t,i,n,a,s,2),g("x","z","y",1,-1,t,i,-n,a,s,3),g("x","y","z",1,-1,t,n,i,a,r,4),g("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new oo(u,3)),this.setAttribute("normal",new oo(c,3)),this.setAttribute("uv",new oo(d,2));function g(_,m,p,v,y,x,C,A,E,R,M){const S=x/E,U=C/R,P=x/2,G=C/2,Y=A/2,K=E+1,N=R+1;let I=0,O=0;const tt=new X;for(let w=0;w<N;w++){const ut=w*U-G;for(let Dt=0;Dt<K;Dt++){const Yt=Dt*S-P;tt[_]=Yt*v,tt[m]=ut*y,tt[p]=Y,u.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=A>0?1:-1,c.push(tt.x,tt.y,tt.z),d.push(Dt/E),d.push(1-w/R),I+=1}}for(let w=0;w<R;w++)for(let ut=0;ut<E;ut++){const Dt=f+ut+K*w,Yt=f+ut+K*(w+1),Z=f+(ut+1)+K*(w+1),nt=f+(ut+1)+K*w;l.push(Dt,Yt,nt),l.push(Yt,Z,nt),O+=6}o.addGroup(h,O,M),h+=O,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new af(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function eu(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function Kn(e){const t={};for(let n=0;n<e.length;n++){const i=eu(e[n]);for(const a in i)t[a]=i[a]}return t}function S3(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function hb(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const M3={clone:eu,merge:Kn};var E3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends jd{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E3,this.fragmentShader=T3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eu(t.uniforms),this.uniformsGroups=S3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class db extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=cr}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new X,Yx=new pe,Zx=new pe;class Ni extends db{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Cg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($p*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cg*2*Math.atan(Math.tan($p*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-t/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-t/Nr.z)}getViewSize(t,n){return this.getViewBounds(t,Yx,Zx),n.subVectors(Zx,Yx)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan($p*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yo=-90,Zo=1;class b3 extends vi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ni(Yo,Zo,t,n);a.layers=this.layers,this.add(a);const r=new Ni(Yo,Zo,t,n);r.layers=this.layers,this.add(r);const s=new Ni(Yo,Zo,t,n);s.layers=this.layers,this.add(s);const o=new Ni(Yo,Zo,t,n);o.layers=this.layers,this.add(o);const l=new Ni(Yo,Zo,t,n);l.layers=this.layers,this.add(l);const u=new Ni(Yo,Zo,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const u of n)this.remove(u);if(t===cr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Td)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,u,c]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,u),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,a),t.render(n,c),t.setRenderTarget(d,f,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pb extends gi{constructor(t,n,i,a,r,s,o,l,u,c){t=t!==void 0?t:[],n=n!==void 0?n:Ql,super(t,n,i,a,r,s,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class A3 extends vo{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new pb(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sa}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new af(5,5,5),r=new Tr({name:"CubemapFromEquirect",uniforms:eu(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_i,blending:cs});r.uniforms.tEquirect.value=n;const s=new Pa(a,r),o=n.minFilter;return n.minFilter===Zs&&(n.minFilter=Sa),new b3(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n,i,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}const vm=new X,C3=new X,R3=new te;class Gs{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=vm.subVectors(i,n).cross(C3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(vm),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||R3.getNormalMatrix(t),a=this.coplanarPoint(vm).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new cv,$f=new X;class fv{constructor(t=new Gs,n=new Gs,i=new Gs,a=new Gs,r=new Gs,s=new Gs){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=cr){const i=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],l=a[3],u=a[4],c=a[5],d=a[6],f=a[7],h=a[8],g=a[9],_=a[10],m=a[11],p=a[12],v=a[13],y=a[14],x=a[15];if(i[0].setComponents(l-r,f-u,m-h,x-p).normalize(),i[1].setComponents(l+r,f+u,m+h,x+p).normalize(),i[2].setComponents(l+s,f+c,m+g,x+v).normalize(),i[3].setComponents(l-s,f-c,m-g,x-v).normalize(),i[4].setComponents(l-o,f-d,m-_,x-y).normalize(),n===cr)i[5].setComponents(l+o,f+d,m+_,x+y).normalize();else if(n===Td)i[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if($f.x=a.normal.x>0?t.max.x:t.min.x,$f.y=a.normal.y>0?t.max.y:t.min.y,$f.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint($f)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mb(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function w3(e){const t=new WeakMap;function n(o,l){const u=o.array,c=o.usage,d=u.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=e.SHORT;else if(u instanceof Uint32Array)h=e.UNSIGNED_INT;else if(u instanceof Int32Array)h=e.INT;else if(u instanceof Int8Array)h=e.BYTE;else if(u instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(e.bindBuffer(u,o),d.count===-1&&f.length===0&&e.bufferSubData(u,0,c),f.length!==0){for(let h=0,g=f.length;h<g;h++){const _=f[h];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(e.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}class rf extends bo{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,c=l+1,d=t/o,f=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const v=p*f-s;for(let y=0;y<u;y++){const x=y*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+u*p,x=v+u*(p+1),C=v+1+u*(p+1),A=v+1+u*p;h.push(y,x,A),h.push(x,C,A)}this.setIndex(h),this.setAttribute("position",new oo(g,3)),this.setAttribute("normal",new oo(_,3)),this.setAttribute("uv",new oo(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rf(t.width,t.height,t.widthSegments,t.heightSegments)}}var D3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U3=`#ifdef USE_ALPHAHASH
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
#endif`,L3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z3=`#ifdef USE_AOMAP
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
#endif`,I3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B3=`#ifdef USE_BATCHING
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
#endif`,F3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k3=`#ifdef USE_IRIDESCENCE
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
#endif`,X3=`#ifdef USE_BUMPMAP
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
#endif`,W3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$3=`#define PI 3.141592653589793
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
} // validated`,tD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eD=`vec3 transformedNormal = objectNormal;
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
#endif`,nD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sD="gl_FragColor = linearToOutputTexel( gl_FragColor );",oD=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lD=`#ifdef USE_ENVMAP
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
#endif`,uD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cD=`#ifdef USE_ENVMAP
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
#endif`,fD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hD=`#ifdef USE_ENVMAP
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
#endif`,dD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_D=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gD=`#ifdef USE_GRADIENTMAP
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
}`,vD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SD=`uniform bool receiveShadow;
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
#endif`,MD=`#ifdef USE_ENVMAP
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
#endif`,ED=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CD=`PhysicalMaterial material;
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
#endif`,RD=`struct PhysicalMaterial {
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
}`,wD=`
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
#endif`,DD=`#if defined( RE_IndirectDiffuse )
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
#endif`,UD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LD=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ND=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OD=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PD=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ID=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FD=`#if defined( USE_POINTS_UV )
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
#endif`,HD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WD=`#ifdef USE_MORPHTARGETS
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
#endif`,qD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JD=`#ifdef USE_NORMALMAP
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
#endif`,$D=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pU=`float getShadowMask() {
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
}`,mU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_U=`#ifdef USE_SKINNING
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
#endif`,gU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vU=`#ifdef USE_SKINNING
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
#endif`,yU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MU=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EU=`#ifdef USE_TRANSMISSION
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
#endif`,TU=`#ifdef USE_TRANSMISSION
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
#endif`,bU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DU=`uniform sampler2D t2D;
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
}`,UU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PU=`#include <common>
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
}`,zU=`#if DEPTH_PACKING == 3200
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
}`,IU=`#define DISTANCE
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
}`,BU=`#define DISTANCE
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
}`,FU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GU=`uniform float scale;
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
}`,VU=`uniform vec3 diffuse;
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
}`,kU=`#include <common>
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
}`,XU=`uniform vec3 diffuse;
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
}`,WU=`#define LAMBERT
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
}`,qU=`#define LAMBERT
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
}`,YU=`#define MATCAP
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
}`,ZU=`#define MATCAP
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
}`,KU=`#define NORMAL
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
}`,jU=`#define NORMAL
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
}`,QU=`#define PHONG
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
}`,JU=`#define PHONG
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
}`,$U=`#define STANDARD
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
}`,tL=`#define STANDARD
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
}`,eL=`#define TOON
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
}`,nL=`#define TOON
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
}`,iL=`uniform float size;
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
}`,aL=`uniform vec3 diffuse;
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
}`,rL=`#include <common>
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
}`,sL=`uniform vec3 color;
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
}`,oL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,lL=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:D3,alphahash_pars_fragment:U3,alphamap_fragment:L3,alphamap_pars_fragment:N3,alphatest_fragment:O3,alphatest_pars_fragment:P3,aomap_fragment:z3,aomap_pars_fragment:I3,batching_pars_vertex:B3,batching_vertex:F3,begin_vertex:H3,beginnormal_vertex:G3,bsdfs:V3,iridescence_fragment:k3,bumpmap_pars_fragment:X3,clipping_planes_fragment:W3,clipping_planes_pars_fragment:q3,clipping_planes_pars_vertex:Y3,clipping_planes_vertex:Z3,color_fragment:K3,color_pars_fragment:j3,color_pars_vertex:Q3,color_vertex:J3,common:$3,cube_uv_reflection_fragment:tD,defaultnormal_vertex:eD,displacementmap_pars_vertex:nD,displacementmap_vertex:iD,emissivemap_fragment:aD,emissivemap_pars_fragment:rD,colorspace_fragment:sD,colorspace_pars_fragment:oD,envmap_fragment:lD,envmap_common_pars_fragment:uD,envmap_pars_fragment:cD,envmap_pars_vertex:fD,envmap_physical_pars_fragment:MD,envmap_vertex:hD,fog_vertex:dD,fog_pars_vertex:pD,fog_fragment:mD,fog_pars_fragment:_D,gradientmap_pars_fragment:gD,lightmap_pars_fragment:vD,lights_lambert_fragment:yD,lights_lambert_pars_fragment:xD,lights_pars_begin:SD,lights_toon_fragment:ED,lights_toon_pars_fragment:TD,lights_phong_fragment:bD,lights_phong_pars_fragment:AD,lights_physical_fragment:CD,lights_physical_pars_fragment:RD,lights_fragment_begin:wD,lights_fragment_maps:DD,lights_fragment_end:UD,logdepthbuf_fragment:LD,logdepthbuf_pars_fragment:ND,logdepthbuf_pars_vertex:OD,logdepthbuf_vertex:PD,map_fragment:zD,map_pars_fragment:ID,map_particle_fragment:BD,map_particle_pars_fragment:FD,metalnessmap_fragment:HD,metalnessmap_pars_fragment:GD,morphinstance_vertex:VD,morphcolor_vertex:kD,morphnormal_vertex:XD,morphtarget_pars_vertex:WD,morphtarget_vertex:qD,normal_fragment_begin:YD,normal_fragment_maps:ZD,normal_pars_fragment:KD,normal_pars_vertex:jD,normal_vertex:QD,normalmap_pars_fragment:JD,clearcoat_normal_fragment_begin:$D,clearcoat_normal_fragment_maps:tU,clearcoat_pars_fragment:eU,iridescence_pars_fragment:nU,opaque_fragment:iU,packing:aU,premultiplied_alpha_fragment:rU,project_vertex:sU,dithering_fragment:oU,dithering_pars_fragment:lU,roughnessmap_fragment:uU,roughnessmap_pars_fragment:cU,shadowmap_pars_fragment:fU,shadowmap_pars_vertex:hU,shadowmap_vertex:dU,shadowmask_pars_fragment:pU,skinbase_vertex:mU,skinning_pars_vertex:_U,skinning_vertex:gU,skinnormal_vertex:vU,specularmap_fragment:yU,specularmap_pars_fragment:xU,tonemapping_fragment:SU,tonemapping_pars_fragment:MU,transmission_fragment:EU,transmission_pars_fragment:TU,uv_pars_fragment:bU,uv_pars_vertex:AU,uv_vertex:CU,worldpos_vertex:RU,background_vert:wU,background_frag:DU,backgroundCube_vert:UU,backgroundCube_frag:LU,cube_vert:NU,cube_frag:OU,depth_vert:PU,depth_frag:zU,distanceRGBA_vert:IU,distanceRGBA_frag:BU,equirect_vert:FU,equirect_frag:HU,linedashed_vert:GU,linedashed_frag:VU,meshbasic_vert:kU,meshbasic_frag:XU,meshlambert_vert:WU,meshlambert_frag:qU,meshmatcap_vert:YU,meshmatcap_frag:ZU,meshnormal_vert:KU,meshnormal_frag:jU,meshphong_vert:QU,meshphong_frag:JU,meshphysical_vert:$U,meshphysical_frag:tL,meshtoon_vert:eL,meshtoon_frag:nL,points_vert:iL,points_frag:aL,shadow_vert:rL,shadow_frag:sL,sprite_vert:oL,sprite_frag:lL},_t={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ca={basic:{uniforms:Kn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Kn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Re(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Kn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Kn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Kn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Re(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Kn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Kn([_t.points,_t.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Kn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Kn([_t.common,_t.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Kn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Kn([_t.sprite,_t.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Kn([_t.common,_t.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Kn([_t.lights,_t.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Ca.physical={uniforms:Kn([Ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const th={r:0,b:0,g:0},Ls=new Er,uL=new nn;function cL(e,t,n,i,a,r,s){const o=new Re(0);let l=r===!0?0:1,u,c,d=null,f=0,h=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(o,l):x&&x.isColor&&(p(x,1),y=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Zd)?(c===void 0&&(c=new Pa(new af(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:eu(Ca.backgroundCube.uniforms),vertexShader:Ca.backgroundCube.vertexShader,fragmentShader:Ca.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Ls.copy(y.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uL.makeRotationFromEuler(Ls)),c.material.toneMapped=Me.getTransfer(x.colorSpace)!==Ve,(d!==x||f!==x.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,h=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Pa(new rf(2,2),new Tr({name:"BackgroundMaterial",uniforms:eu(Ca.background.uniforms),vertexShader:Ca.background.vertexShader,fragmentShader:Ca.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Me.getTransfer(x.colorSpace)!==Ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||h!==e.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,h=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function p(v,y){v.getRGB(th,hb(e)),i.buffers.color.setClear(th.r,th.g,th.b,y,s)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m}}function fL(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(S,U,P,G,Y){let K=!1;const N=d(G,P,U);r!==N&&(r=N,u(r.object)),K=h(S,G,P,Y),K&&g(S,G,P,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,x(S,U,P,G),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return e.createVertexArray()}function u(S){return e.bindVertexArray(S)}function c(S){return e.deleteVertexArray(S)}function d(S,U,P){const G=P.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let K=Y[U.id];K===void 0&&(K={},Y[U.id]=K);let N=K[G];return N===void 0&&(N=f(l()),K[G]=N),N}function f(S){const U=[],P=[],G=[];for(let Y=0;Y<n;Y++)U[Y]=0,P[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:P,attributeDivisors:G,object:S,attributes:{},index:null}}function h(S,U,P,G){const Y=r.attributes,K=U.attributes;let N=0;const I=P.getAttributes();for(const O in I)if(I[O].location>=0){const w=Y[O];let ut=K[O];if(ut===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),w===void 0||w.attribute!==ut||ut&&w.data!==ut.data)return!0;N++}return r.attributesNum!==N||r.index!==G}function g(S,U,P,G){const Y={},K=U.attributes;let N=0;const I=P.getAttributes();for(const O in I)if(I[O].location>=0){let w=K[O];w===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(w=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(w=S.instanceColor));const ut={};ut.attribute=w,w&&w.data&&(ut.data=w.data),Y[O]=ut,N++}r.attributes=Y,r.attributesNum=N,r.index=G}function _(){const S=r.newAttributes;for(let U=0,P=S.length;U<P;U++)S[U]=0}function m(S){p(S,0)}function p(S,U){const P=r.newAttributes,G=r.enabledAttributes,Y=r.attributeDivisors;P[S]=1,G[S]===0&&(e.enableVertexAttribArray(S),G[S]=1),Y[S]!==U&&(e.vertexAttribDivisor(S,U),Y[S]=U)}function v(){const S=r.newAttributes,U=r.enabledAttributes;for(let P=0,G=U.length;P<G;P++)U[P]!==S[P]&&(e.disableVertexAttribArray(P),U[P]=0)}function y(S,U,P,G,Y,K,N){N===!0?e.vertexAttribIPointer(S,U,P,Y,K):e.vertexAttribPointer(S,U,P,G,Y,K)}function x(S,U,P,G){_();const Y=G.attributes,K=P.getAttributes(),N=U.defaultAttributeValues;for(const I in K){const O=K[I];if(O.location>=0){let tt=Y[I];if(tt===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const w=tt.normalized,ut=tt.itemSize,Dt=t.get(tt);if(Dt===void 0)continue;const Yt=Dt.buffer,Z=Dt.type,nt=Dt.bytesPerElement,ht=Z===e.INT||Z===e.UNSIGNED_INT||tt.gpuType===iv;if(tt.isInterleavedBufferAttribute){const ct=tt.data,Ct=ct.stride,Ut=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let Wt=0;Wt<O.locationSize;Wt++)p(O.location+Wt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Wt=0;Wt<O.locationSize;Wt++)m(O.location+Wt);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let Wt=0;Wt<O.locationSize;Wt++)y(O.location+Wt,ut/O.locationSize,Z,w,Ct*nt,(Ut+ut/O.locationSize*Wt)*nt,ht)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<O.locationSize;ct++)p(O.location+ct,tt.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<O.locationSize;ct++)m(O.location+ct);e.bindBuffer(e.ARRAY_BUFFER,Yt);for(let ct=0;ct<O.locationSize;ct++)y(O.location+ct,ut/O.locationSize,Z,w,ut*nt,ut/O.locationSize*ct*nt,ht)}}else if(N!==void 0){const w=N[I];if(w!==void 0)switch(w.length){case 2:e.vertexAttrib2fv(O.location,w);break;case 3:e.vertexAttrib3fv(O.location,w);break;case 4:e.vertexAttrib4fv(O.location,w);break;default:e.vertexAttrib1fv(O.location,w)}}}}v()}function C(){R();for(const S in i){const U=i[S];for(const P in U){const G=U[P];for(const Y in G)c(G[Y].object),delete G[Y];delete U[P]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const U=i[S.id];for(const P in U){const G=U[P];for(const Y in G)c(G[Y].object),delete G[Y];delete U[P]}delete i[S.id]}function E(S){for(const U in i){const P=i[U];if(P[S.id]===void 0)continue;const G=P[S.id];for(const Y in G)c(G[Y].object),delete G[Y];delete P[S.id]}}function R(){M(),s=!0,r!==a&&(r=a,u(r.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function hL(e,t,n){let i;function a(u){i=u}function r(u,c){e.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,d){d!==0&&(e.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function o(u,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let h=0;for(let g=0;g<d;g++)h+=c[g];n.update(h,i,1)}function l(u,c,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)s(u[g],c[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_];for(let _=0;_<f.length;_++)n.update(g,i,f[_])}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dL(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Ma&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===$c&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Mr&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ur&&!E)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),p=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:C}}function pL(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Gs,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||a;return a=f,i=d.length,h},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!a||g===null||g.length===0||r&&!m)r?c(null):u();else{const v=r?0:i,y=v*4;let x=p.clippingState||null;l.value=x,x=c(g,f,y,h);for(let C=0;C!==y;++C)x[C]=n[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=h;y!==_;++y,x+=4)s.copy(d[y]).applyMatrix4(v,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function mL(e){let t=new WeakMap;function n(s,o){return o===Q_?s.mapping=Ql:o===J_&&(s.mapping=Jl),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Q_||o===J_)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new A3(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",a),n(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class _L extends db{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const _l=4,Kx=[.125,.215,.35,.446,.526,.582],Xs=20,ym=new _L,jx=new Re;let xm=null,Sm=0,Mm=0,Em=!1;const Vs=(1+Math.sqrt(5))/2,Ko=1/Vs,Qx=[new X(-Vs,Ko,0),new X(Vs,Ko,0),new X(-Ko,0,Vs),new X(Ko,0,Vs),new X(0,Vs,-Ko),new X(0,Vs,Ko),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Jx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100){xm=this._renderer.getRenderTarget(),Sm=this._renderer.getActiveCubeFace(),Mm=this._renderer.getActiveMipmapLevel(),Em=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,a,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xm,Sm,Mm),this._renderer.xr.enabled=Em,t.scissorTest=!1,eh(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ql||t.mapping===Jl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xm=this._renderer.getRenderTarget(),Sm=this._renderer.getActiveCubeFace(),Mm=this._renderer.getActiveMipmapLevel(),Em=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sa,minFilter:Sa,generateMipmaps:!1,type:$c,format:Ma,colorSpace:Ts,depthBuffer:!1},a=$x(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gL(r)),this._blurMaterial=vL(r,t,n)}return a}_compileMaterial(t){const n=new Pa(this._lodPlanes[0],t);this._renderer.compile(n,ym)}_sceneToCubeUV(t,n,i,a){const o=new Ni(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(jx),c.toneMapping=fs,c.autoClear=!1;const h=new ub({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),g=new Pa(new af,h);let _=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,_=!0):(h.color.copy(jx),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const y=this._cubeSize;eh(a,v*y,p>2?y:0,y,y),c.setRenderTarget(a),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=d,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Ql||t.mapping===Jl;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=eS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tS());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Pa(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;eh(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ym)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qx[(a-r-1)%Qx.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Pa(this._lodPlanes[a],u),f=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Xs-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Xs;m>Xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);const p=[];let v=0;for(let E=0;E<Xs;++E){const R=E/_,M=Math.exp(-R*R/2);p.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[a],C=3*x*(a>y-_l?a-y+_l:0),A=4*(this._cubeSize-x);eh(n,C,A,3*x,2*x),l.setRenderTarget(n),l.render(d,ym)}}function gL(e){const t=[],n=[],i=[];let a=e;const r=e-_l+1+Kx.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-_l?l=Kx[s-e+_l-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*h),y=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let A=0;A<h;A++){const E=A%3*2/3-1,R=A>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(M,_*g*A),y.set(f,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const C=new bo;C.setAttribute("position",new Ba(v,_)),C.setAttribute("uv",new Ba(y,m)),C.setAttribute("faceIndex",new Ba(x,p)),t.push(C),a>_l&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function $x(e,t,n){const i=new vo(e,t,n);return i.texture.mapping=Zd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function eh(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function vL(e,t,n){const i=new Float32Array(Xs),a=new X(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hv(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function tS(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hv(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function eS(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function hv(){return`

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
	`}function yL(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Q_||l===J_,c=l===Ql||l===Jl;if(u||c){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Jx(e)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return u&&h&&h.height>0||c&&h&&a(h)?(n===null&&(n=new Jx(e)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function a(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function xL(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&pc("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function SL(e,t,n,i){const a={},r=new WeakMap;function s(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",s),delete a[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],e.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const _=h[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],e.ARRAY_BUFFER)}}function u(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let y=0,x=v.length;y<x;y+=3){const C=v[y+0],A=v[y+1],E=v[y+2];f.push(C,A,A,E,E,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const C=y+0,A=y+1,E=y+2;f.push(C,A,A,E,E,C)}}else return;const m=new(ab(f)?fb:cb)(f,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function c(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function ML(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,h){e.drawElements(i,h,r,f*s),n.update(h,i,1)}function u(f,h,g){g!==0&&(e.drawElementsInstanced(i,h,r,f*s,g),n.update(h,i,g))}function c(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function d(f,h,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/s,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=h[v];for(let v=0;v<_.length;v++)n.update(p,i,_[v])}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function EL(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function TL(e,t,n){const i=new WeakMap,a=new Xe;function r(s,o,l){const u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var h=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*A*4*d),R=new sb(E,C,A,d);R.type=ur,R.needsUpdate=!0;const M=x*4;for(let U=0;U<d;U++){const P=p[U],G=v[U],Y=y[U],K=C*A*4*U;for(let N=0;N<P.count;N++){const I=N*M;g===!0&&(a.fromBufferAttribute(P,N),E[K+I+0]=a.x,E[K+I+1]=a.y,E[K+I+2]=a.z,E[K+I+3]=0),_===!0&&(a.fromBufferAttribute(G,N),E[K+I+4]=a.x,E[K+I+5]=a.y,E[K+I+6]=a.z,E[K+I+7]=0),m===!0&&(a.fromBufferAttribute(Y,N),E[K+I+8]=a.x,E[K+I+9]=a.y,E[K+I+10]=a.z,E[K+I+11]=Y.itemSize===4?a.w:1)}}f={count:d,texture:R,size:new pe(C,A)},i.set(o,f),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function bL(e,t,n,i){let a=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,d=t.get(l,c);if(a.get(d)!==u&&(t.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function s(){a=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:s}}class _b extends gi{constructor(t,n,i,a,r,s,o,l,u,c=Ll){if(c!==Ll&&c!==tu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ll&&(i=go),i===void 0&&c===tu&&(i=$l),super(null,a,r,s,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ua,this.minFilter=l!==void 0?l:ua,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const gb=new gi,nS=new _b(1,1),vb=new sb,yb=new u3,xb=new pb,iS=[],aS=[],rS=new Float32Array(16),sS=new Float32Array(9),oS=new Float32Array(4);function fu(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=iS[a];if(r===void 0&&(r=new Float32Array(a),iS[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Mn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function En(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Qd(e,t){let n=aS[t];n===void 0&&(n=new Int32Array(t),aS[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function AL(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function CL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;e.uniform2fv(this.addr,t),En(n,t)}}function RL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;e.uniform3fv(this.addr,t),En(n,t)}}function wL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;e.uniform4fv(this.addr,t),En(n,t)}}function DL(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Mn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,i))return;oS.set(i),e.uniformMatrix2fv(this.addr,!1,oS),En(n,i)}}function UL(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Mn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,i))return;sS.set(i),e.uniformMatrix3fv(this.addr,!1,sS),En(n,i)}}function LL(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Mn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,i))return;rS.set(i),e.uniformMatrix4fv(this.addr,!1,rS),En(n,i)}}function NL(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function OL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;e.uniform2iv(this.addr,t),En(n,t)}}function PL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;e.uniform3iv(this.addr,t),En(n,t)}}function zL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;e.uniform4iv(this.addr,t),En(n,t)}}function IL(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function BL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;e.uniform2uiv(this.addr,t),En(n,t)}}function FL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;e.uniform3uiv(this.addr,t),En(n,t)}}function HL(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;e.uniform4uiv(this.addr,t),En(n,t)}}function GL(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(nS.compareFunction=ib,r=nS):r=gb,n.setTexture2D(t||r,a)}function VL(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||yb,a)}function kL(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||xb,a)}function XL(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||vb,a)}function WL(e){switch(e){case 5126:return AL;case 35664:return CL;case 35665:return RL;case 35666:return wL;case 35674:return DL;case 35675:return UL;case 35676:return LL;case 5124:case 35670:return NL;case 35667:case 35671:return OL;case 35668:case 35672:return PL;case 35669:case 35673:return zL;case 5125:return IL;case 36294:return BL;case 36295:return FL;case 36296:return HL;case 35678:case 36198:case 36298:case 36306:case 35682:return GL;case 35679:case 36299:case 36307:return VL;case 35680:case 36300:case 36308:case 36293:return kL;case 36289:case 36303:case 36311:case 36292:return XL}}function qL(e,t){e.uniform1fv(this.addr,t)}function YL(e,t){const n=fu(t,this.size,2);e.uniform2fv(this.addr,n)}function ZL(e,t){const n=fu(t,this.size,3);e.uniform3fv(this.addr,n)}function KL(e,t){const n=fu(t,this.size,4);e.uniform4fv(this.addr,n)}function jL(e,t){const n=fu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function QL(e,t){const n=fu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function JL(e,t){const n=fu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $L(e,t){e.uniform1iv(this.addr,t)}function tN(e,t){e.uniform2iv(this.addr,t)}function eN(e,t){e.uniform3iv(this.addr,t)}function nN(e,t){e.uniform4iv(this.addr,t)}function iN(e,t){e.uniform1uiv(this.addr,t)}function aN(e,t){e.uniform2uiv(this.addr,t)}function rN(e,t){e.uniform3uiv(this.addr,t)}function sN(e,t){e.uniform4uiv(this.addr,t)}function oN(e,t,n){const i=this.cache,a=t.length,r=Qd(n,a);Mn(i,r)||(e.uniform1iv(this.addr,r),En(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||gb,r[s])}function lN(e,t,n){const i=this.cache,a=t.length,r=Qd(n,a);Mn(i,r)||(e.uniform1iv(this.addr,r),En(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||yb,r[s])}function uN(e,t,n){const i=this.cache,a=t.length,r=Qd(n,a);Mn(i,r)||(e.uniform1iv(this.addr,r),En(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||xb,r[s])}function cN(e,t,n){const i=this.cache,a=t.length,r=Qd(n,a);Mn(i,r)||(e.uniform1iv(this.addr,r),En(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||vb,r[s])}function fN(e){switch(e){case 5126:return qL;case 35664:return YL;case 35665:return ZL;case 35666:return KL;case 35674:return jL;case 35675:return QL;case 35676:return JL;case 5124:case 35670:return $L;case 35667:case 35671:return tN;case 35668:case 35672:return eN;case 35669:case 35673:return nN;case 5125:return iN;case 36294:return aN;case 36295:return rN;case 36296:return sN;case 35678:case 36198:case 36298:case 36306:case 35682:return oN;case 35679:case 36299:case 36307:return lN;case 35680:case 36300:case 36308:case 36293:return uN;case 36289:case 36303:case 36311:case 36292:return cN}}class hN{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=WL(n.type)}}class dN{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fN(n.type)}}class pN{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const Tm=/(\w+)(\])?(\[|\.)?/g;function lS(e,t){e.seq.push(t),e.map[t.id]=t}function mN(e,t,n){const i=e.name,a=i.length;for(Tm.lastIndex=0;;){const r=Tm.exec(i),s=Tm.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){lS(n,u===void 0?new hN(o,e,t):new dN(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new pN(o),lS(n,d)),n=d}}}class Nh{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);mN(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function uS(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const _N=37297;let gN=0;function vN(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function yN(e){const t=Me.getPrimaries(Me.workingColorSpace),n=Me.getPrimaries(e);let i;switch(t===n?i="":t===Ed&&n===Md?i="LinearDisplayP3ToLinearSRGB":t===Md&&n===Ed&&(i="LinearSRGBToLinearDisplayP3"),e){case Ts:case Kd:return[i,"LinearTransferOETF"];case Aa:case uv:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function cS(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+vN(e.getShaderSource(t),s)}else return a}function xN(e,t){const n=yN(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function SN(e,t){let n;switch(t){case zw:n="Linear";break;case Iw:n="Reinhard";break;case Bw:n="OptimizedCineon";break;case Fw:n="ACESFilmic";break;case Gw:n="AgX";break;case Vw:n="Neutral";break;case Hw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nh=new X;function MN(){Me.getLuminanceCoefficients(nh);const e=nh.x.toFixed(4),t=nh.y.toFixed(4),n=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gu).join(`
`)}function TN(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function bN(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Gu(e){return e!==""}function fS(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hS(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rg(e){return e.replace(AN,RN)}const CN=new Map;function RN(e,t){let n=$t[t];if(n===void 0){const i=CN.get(t);if(i!==void 0)n=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rg(n)}const wN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dS(e){return e.replace(wN,DN)}function DN(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function pS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function UN(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===XT?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===lw?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ja&&(t="SHADOWMAP_TYPE_VSM"),t}function LN(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ql:case Jl:t="ENVMAP_TYPE_CUBE";break;case Zd:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NN(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Jl:t="ENVMAP_MODE_REFRACTION";break}return t}function ON(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case WT:t="ENVMAP_BLENDING_MULTIPLY";break;case Ow:t="ENVMAP_BLENDING_MIX";break;case Pw:t="ENVMAP_BLENDING_ADD";break}return t}function PN(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zN(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=UN(n),u=LN(n),c=NN(n),d=ON(n),f=PN(n),h=EN(n),g=TN(r),_=a.createProgram();let m,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Gu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Gu).join(`
`),p.length>0&&(p+=`
`)):(m=[pS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gu).join(`
`),p=[pS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fs?"#define TONE_MAPPING":"",n.toneMapping!==fs?$t.tonemapping_pars_fragment:"",n.toneMapping!==fs?SN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,xN("linearToOutputTexel",n.outputColorSpace),MN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gu).join(`
`)),s=Rg(s),s=fS(s,n),s=hS(s,n),o=Rg(o),o=fS(o,n),o=hS(o,n),s=dS(s),o=dS(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===wx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+s,x=v+p+o,C=uS(a,a.VERTEX_SHADER,y),A=uS(a,a.FRAGMENT_SHADER,x);a.attachShader(_,C),a.attachShader(_,A),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function E(U){if(e.debug.checkShaderErrors){const P=a.getProgramInfoLog(_).trim(),G=a.getShaderInfoLog(C).trim(),Y=a.getShaderInfoLog(A).trim();let K=!0,N=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,_,C,A);else{const I=cS(a,C,"vertex"),O=cS(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+I+`
`+O)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(G===""||Y==="")&&(N=!1);N&&(U.diagnostics={runnable:K,programLog:P,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:p}})}a.deleteShader(C),a.deleteShader(A),R=new Nh(a,_),M=bN(a,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(_,_N)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gN++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let IN=0;class BN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new FN(t),n.set(t,i)),i}}class FN{constructor(t){this.id=IN++,this.code=t,this.usedTimes=0}}function HN(e,t,n,i,a,r,s){const o=new ob,l=new BN,u=new Set,c=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let h=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,U,P,G){const Y=P.fog,K=G.geometry,N=M.isMeshStandardMaterial?P.environment:null,I=(M.isMeshStandardMaterial?n:t).get(M.envMap||N),O=I&&I.mapping===Zd?I.image.height:null,tt=g[M.type];M.precision!==null&&(h=a.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const w=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ut=w!==void 0?w.length:0;let Dt=0;K.morphAttributes.position!==void 0&&(Dt=1),K.morphAttributes.normal!==void 0&&(Dt=2),K.morphAttributes.color!==void 0&&(Dt=3);let Yt,Z,nt,ht;if(tt){const le=Ca[tt];Yt=le.vertexShader,Z=le.fragmentShader}else Yt=M.vertexShader,Z=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),ht=l.getFragmentShaderID(M);const ct=e.getRenderTarget(),Ct=G.isInstancedMesh===!0,Ut=G.isBatchedMesh===!0,Wt=!!M.map,ne=!!M.matcap,L=!!I,Ot=!!M.aoMap,Bt=!!M.lightMap,Zt=!!M.bumpMap,yt=!!M.normalMap,W=!!M.displacementMap,Rt=!!M.emissiveMap,Ft=!!M.metalnessMap,D=!!M.roughnessMap,T=M.anisotropy>0,q=M.clearcoat>0,it=M.dispersion>0,rt=M.iridescence>0,Q=M.sheen>0,bt=M.transmission>0,st=T&&!!M.anisotropyMap,mt=q&&!!M.clearcoatMap,zt=q&&!!M.clearcoatNormalMap,ot=q&&!!M.clearcoatRoughnessMap,vt=rt&&!!M.iridescenceMap,Lt=rt&&!!M.iridescenceThicknessMap,Ht=Q&&!!M.sheenColorMap,gt=Q&&!!M.sheenRoughnessMap,Gt=!!M.specularMap,qt=!!M.specularColorMap,ge=!!M.specularIntensityMap,B=bt&&!!M.transmissionMap,j=bt&&!!M.thicknessMap,J=!!M.gradientMap,$=!!M.alphaMap,lt=M.alphaTest>0,At=!!M.alphaHash,Jt=!!M.extensions;let Le=fs;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Le=e.toneMapping);const Ne={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Yt,fragmentShader:Z,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ut,batchingColor:Ut&&G._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&G.instanceColor!==null,instancingMorph:Ct&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?e.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ts,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:ne,envMap:L,envMapMode:L&&I.mapping,envMapCubeUVHeight:O,aoMap:Ot,lightMap:Bt,bumpMap:Zt,normalMap:yt,displacementMap:f&&W,emissiveMap:Rt,normalMapObjectSpace:yt&&M.normalMapType===Yw,normalMapTangentSpace:yt&&M.normalMapType===qw,metalnessMap:Ft,roughnessMap:D,anisotropy:T,anisotropyMap:st,clearcoat:q,clearcoatMap:mt,clearcoatNormalMap:zt,clearcoatRoughnessMap:ot,dispersion:it,iridescence:rt,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:Q,sheenColorMap:Ht,sheenRoughnessMap:gt,specularMap:Gt,specularColorMap:qt,specularIntensityMap:ge,transmission:bt,transmissionMap:B,thicknessMap:j,gradientMap:J,opaque:M.transparent===!1&&M.blending===Ul&&M.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:At,combine:M.combine,mapUv:Wt&&_(M.map.channel),aoMapUv:Ot&&_(M.aoMap.channel),lightMapUv:Bt&&_(M.lightMap.channel),bumpMapUv:Zt&&_(M.bumpMap.channel),normalMapUv:yt&&_(M.normalMap.channel),displacementMapUv:W&&_(M.displacementMap.channel),emissiveMapUv:Rt&&_(M.emissiveMap.channel),metalnessMapUv:Ft&&_(M.metalnessMap.channel),roughnessMapUv:D&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(M.sheenRoughnessMap.channel),specularMapUv:Gt&&_(M.specularMap.channel),specularColorMapUv:qt&&_(M.specularColorMap.channel),specularIntensityMapUv:ge&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:j&&_(M.thicknessMap.channel),alphaMapUv:$&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(yt||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(Wt||$),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Dt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&Me.getTransfer(M.map.colorSpace)===Ve,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ar,flipSided:M.side===_i,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Jt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&M.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=u.has(1),Ne.vertexUv2s=u.has(2),Ne.vertexUv3s=u.has(3),u.clear(),Ne}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(S,M),y(S,M),S.push(e.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),M.push(o.mask)}function x(M){const S=g[M.type];let U;if(S){const P=Ca[S];U=M3.clone(P.uniforms)}else U=M.uniforms;return U}function C(M,S){let U;for(let P=0,G=c.length;P<G;P++){const Y=c[P];if(Y.cacheKey===S){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new zN(e,S,M,r),c.push(U)),U}function A(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:R}}function GN(){let e=new WeakMap;function t(r){let s=e.get(r);return s===void 0&&(s={},e.set(r,s)),s}function n(r){e.delete(r)}function i(r,s,o){e.get(r)[s]=o}function a(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:a}}function VN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function mS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function _S(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(d,f,h,g,_,m){let p=e[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,f,h,g,_,m){const p=s(d,f,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?a.push(p):n.push(p)}function l(d,f,h,g,_,m){const p=s(d,f,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?a.unshift(p):n.unshift(p)}function u(d,f){n.length>1&&n.sort(d||VN),i.length>1&&i.sort(f||mS),a.length>1&&a.sort(f||mS)}function c(){for(let d=t,f=e.length;d<f;d++){const h=e[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:c,sort:u}}function kN(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new _S,e.set(i,[s])):a>=r.length?(s=new _S,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function XN(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new Re};break;case"SpotLight":n={position:new X,direction:new X,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function WN(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let qN=0;function YN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ZN(e){const t=new XN,n=WN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const a=new X,r=new nn,s=new nn;function o(u){let c=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,C=0,A=0,E=0;u.sort(YN);for(let M=0,S=u.length;M<S;M++){const U=u[M],P=U.color,G=U.intensity,Y=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)c+=P.r*G,d+=P.g*G,f+=P.b*G;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],G);E++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const I=U.shadow,O=n.get(U);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=U.shadow.matrix,v++}i.directional[h]=N,h++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(P).multiplyScalar(G),N.distance=Y,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[_]=N;const I=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,I.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=I.matrix,U.castShadow){const O=n.get(U);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=K,x++}_++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(P).multiplyScalar(G),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=N,m++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const I=U.shadow,O=n.get(U);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=U.shadow.matrix,y++}i.point[g]=N,g++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(G),N.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[p]=N,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=E,i.version=qN++)}function l(u,c){let d=0,f=0,h=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const y=u[p];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),s.identity(),r.copy(y.matrixWorld),r.premultiply(m),s.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function gS(e){const t=new ZN(e),n=[],i=[];function a(c){u.camera=c,n.length=0,i.length=0}function r(c){n.push(c)}function s(c){i.push(c)}function o(){t.setup(n)}function l(c){t.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function KN(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new gS(e),t.set(a,[o])):r>=s.length?(o=new gS(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class jN extends jd{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QN extends jd{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const JN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$N=`uniform sampler2D shadow_pass;
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
}`;function tO(e,t,n){let i=new fv;const a=new pe,r=new pe,s=new Xe,o=new jN({depthPacking:Ww}),l=new QN,u={},c=n.maxTextureSize,d={[xs]:_i,[_i]:xs,[ar]:ar},f=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:JN,fragmentShader:$N}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new bo;g.setAttribute("position",new Ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pa(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XT;let p=this.type;this.render=function(A,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=e.getRenderTarget(),S=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),P=e.state;P.setBlending(cs),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const G=p!==Ja&&this.type===Ja,Y=p===Ja&&this.type!==Ja;for(let K=0,N=A.length;K<N;K++){const I=A[K],O=I.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const tt=O.getFrameExtents();if(a.multiply(tt),r.copy(O.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(r.x=Math.floor(c/tt.x),a.x=r.x*tt.x,O.mapSize.x=r.x),a.y>c&&(r.y=Math.floor(c/tt.y),a.y=r.y*tt.y,O.mapSize.y=r.y)),O.map===null||G===!0||Y===!0){const ut=this.type!==Ja?{minFilter:ua,magFilter:ua}:{};O.map!==null&&O.map.dispose(),O.map=new vo(a.x,a.y,ut),O.map.texture.name=I.name+".shadowMap",O.camera.updateProjectionMatrix()}e.setRenderTarget(O.map),e.clear();const w=O.getViewportCount();for(let ut=0;ut<w;ut++){const Dt=O.getViewport(ut);s.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),P.viewport(s),O.updateMatrices(I,ut),i=O.getFrustum(),x(E,R,O.camera,I,this.type)}O.isPointLightShadow!==!0&&this.type===Ja&&v(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(M,S,U)};function v(A,E){const R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vo(a.x,a.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(E,null,R,f,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(E,null,R,h,_,null)}function y(A,E,R,M){let S=null;const U=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)S=U;else if(S=R.isPointLight===!0?l:o,e.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const P=S.uuid,G=E.uuid;let Y=u[P];Y===void 0&&(Y={},u[P]=Y);let K=Y[G];K===void 0&&(K=S.clone(),Y[G]=K,E.addEventListener("dispose",C)),S=K}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Ja?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const P=e.properties.get(S);P.light=R}return S}function x(A,E,R,M,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ja)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const G=t.update(A),Y=A.material;if(Array.isArray(Y)){const K=G.groups;for(let N=0,I=K.length;N<I;N++){const O=K[N],tt=Y[O.materialIndex];if(tt&&tt.visible){const w=y(A,tt,M,S);A.onBeforeShadow(e,A,E,R,G,w,O),e.renderBufferDirect(R,null,G,w,A,O),A.onAfterShadow(e,A,E,R,G,w,O)}}}else if(Y.visible){const K=y(A,Y,M,S);A.onBeforeShadow(e,A,E,R,G,K,null),e.renderBufferDirect(R,null,G,K,A,null),A.onAfterShadow(e,A,E,R,G,K,null)}}const P=A.children;for(let G=0,Y=P.length;G<Y;G++)x(P[G],E,R,M,S)}function C(A){A.target.removeEventListener("dispose",C);for(const R in u){const M=u[R],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function eO(e){function t(){let B=!1;const j=new Xe;let J=null;const $=new Xe(0,0,0,0);return{setMask:function(lt){J!==lt&&!B&&(e.colorMask(lt,lt,lt,lt),J=lt)},setLocked:function(lt){B=lt},setClear:function(lt,At,Jt,Le,Ne){Ne===!0&&(lt*=Le,At*=Le,Jt*=Le),j.set(lt,At,Jt,Le),$.equals(j)===!1&&(e.clearColor(lt,At,Jt,Le),$.copy(j))},reset:function(){B=!1,J=null,$.set(-1,0,0,0)}}}function n(){let B=!1,j=null,J=null,$=null;return{setTest:function(lt){lt?ht(e.DEPTH_TEST):ct(e.DEPTH_TEST)},setMask:function(lt){j!==lt&&!B&&(e.depthMask(lt),j=lt)},setFunc:function(lt){if(J!==lt){switch(lt){case Cw:e.depthFunc(e.NEVER);break;case Rw:e.depthFunc(e.ALWAYS);break;case ww:e.depthFunc(e.LESS);break;case xd:e.depthFunc(e.LEQUAL);break;case Dw:e.depthFunc(e.EQUAL);break;case Uw:e.depthFunc(e.GEQUAL);break;case Lw:e.depthFunc(e.GREATER);break;case Nw:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}J=lt}},setLocked:function(lt){B=lt},setClear:function(lt){$!==lt&&(e.clearDepth(lt),$=lt)},reset:function(){B=!1,j=null,J=null,$=null}}}function i(){let B=!1,j=null,J=null,$=null,lt=null,At=null,Jt=null,Le=null,Ne=null;return{setTest:function(le){B||(le?ht(e.STENCIL_TEST):ct(e.STENCIL_TEST))},setMask:function(le){j!==le&&!B&&(e.stencilMask(le),j=le)},setFunc:function(le,It,Tt){(J!==le||$!==It||lt!==Tt)&&(e.stencilFunc(le,It,Tt),J=le,$=It,lt=Tt)},setOp:function(le,It,Tt){(At!==le||Jt!==It||Le!==Tt)&&(e.stencilOp(le,It,Tt),At=le,Jt=It,Le=Tt)},setLocked:function(le){B=le},setClear:function(le){Ne!==le&&(e.clearStencil(le),Ne=le)},reset:function(){B=!1,j=null,J=null,$=null,lt=null,At=null,Jt=null,Le=null,Ne=null}}}const a=new t,r=new n,s=new i,o=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],h=null,g=!1,_=null,m=null,p=null,v=null,y=null,x=null,C=null,A=new Re(0,0,0),E=0,R=!1,M=null,S=null,U=null,P=null,G=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,N=0;const I=e.getParameter(e.VERSION);I.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(I)[1]),K=N>=1):I.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),K=N>=2);let O=null,tt={};const w=e.getParameter(e.SCISSOR_BOX),ut=e.getParameter(e.VIEWPORT),Dt=new Xe().fromArray(w),Yt=new Xe().fromArray(ut);function Z(B,j,J,$){const lt=new Uint8Array(4),At=e.createTexture();e.bindTexture(B,At),e.texParameteri(B,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(B,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Jt=0;Jt<J;Jt++)B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,$,0,e.RGBA,e.UNSIGNED_BYTE,lt):e.texImage2D(j+Jt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,lt);return At}const nt={};nt[e.TEXTURE_2D]=Z(e.TEXTURE_2D,e.TEXTURE_2D,1),nt[e.TEXTURE_CUBE_MAP]=Z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[e.TEXTURE_2D_ARRAY]=Z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),nt[e.TEXTURE_3D]=Z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),s.setClear(0),ht(e.DEPTH_TEST),r.setFunc(xd),Zt(!1),yt(Tx),ht(e.CULL_FACE),Ot(cs);function ht(B){u[B]!==!0&&(e.enable(B),u[B]=!0)}function ct(B){u[B]!==!1&&(e.disable(B),u[B]=!1)}function Ct(B,j){return c[B]!==j?(e.bindFramebuffer(B,j),c[B]=j,B===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=j),B===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Ut(B,j){let J=f,$=!1;if(B){J=d.get(j),J===void 0&&(J=[],d.set(j,J));const lt=B.textures;if(J.length!==lt.length||J[0]!==e.COLOR_ATTACHMENT0){for(let At=0,Jt=lt.length;At<Jt;At++)J[At]=e.COLOR_ATTACHMENT0+At;J.length=lt.length,$=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,$=!0);$&&e.drawBuffers(J)}function Wt(B){return h!==B?(e.useProgram(B),h=B,!0):!1}const ne={[ks]:e.FUNC_ADD,[cw]:e.FUNC_SUBTRACT,[fw]:e.FUNC_REVERSE_SUBTRACT};ne[hw]=e.MIN,ne[dw]=e.MAX;const L={[pw]:e.ZERO,[mw]:e.ONE,[_w]:e.SRC_COLOR,[K_]:e.SRC_ALPHA,[Mw]:e.SRC_ALPHA_SATURATE,[xw]:e.DST_COLOR,[vw]:e.DST_ALPHA,[gw]:e.ONE_MINUS_SRC_COLOR,[j_]:e.ONE_MINUS_SRC_ALPHA,[Sw]:e.ONE_MINUS_DST_COLOR,[yw]:e.ONE_MINUS_DST_ALPHA,[Ew]:e.CONSTANT_COLOR,[Tw]:e.ONE_MINUS_CONSTANT_COLOR,[bw]:e.CONSTANT_ALPHA,[Aw]:e.ONE_MINUS_CONSTANT_ALPHA};function Ot(B,j,J,$,lt,At,Jt,Le,Ne,le){if(B===cs){g===!0&&(ct(e.BLEND),g=!1);return}if(g===!1&&(ht(e.BLEND),g=!0),B!==uw){if(B!==_||le!==R){if((m!==ks||y!==ks)&&(e.blendEquation(e.FUNC_ADD),m=ks,y=ks),le)switch(B){case Ul:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Z_:e.blendFunc(e.ONE,e.ONE);break;case bx:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ax:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ul:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Z_:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case bx:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ax:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,v=null,x=null,C=null,A.set(0,0,0),E=0,_=B,R=le}return}lt=lt||j,At=At||J,Jt=Jt||$,(j!==m||lt!==y)&&(e.blendEquationSeparate(ne[j],ne[lt]),m=j,y=lt),(J!==p||$!==v||At!==x||Jt!==C)&&(e.blendFuncSeparate(L[J],L[$],L[At],L[Jt]),p=J,v=$,x=At,C=Jt),(Le.equals(A)===!1||Ne!==E)&&(e.blendColor(Le.r,Le.g,Le.b,Ne),A.copy(Le),E=Ne),_=B,R=!1}function Bt(B,j){B.side===ar?ct(e.CULL_FACE):ht(e.CULL_FACE);let J=B.side===_i;j&&(J=!J),Zt(J),B.blending===Ul&&B.transparent===!1?Ot(cs):Ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),a.setMask(B.colorWrite);const $=B.stencilWrite;s.setTest($),$&&(s.setMask(B.stencilWriteMask),s.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),s.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Rt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ht(e.SAMPLE_ALPHA_TO_COVERAGE):ct(e.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(B){M!==B&&(B?e.frontFace(e.CW):e.frontFace(e.CCW),M=B)}function yt(B){B!==sw?(ht(e.CULL_FACE),B!==S&&(B===Tx?e.cullFace(e.BACK):B===ow?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ct(e.CULL_FACE),S=B}function W(B){B!==U&&(K&&e.lineWidth(B),U=B)}function Rt(B,j,J){B?(ht(e.POLYGON_OFFSET_FILL),(P!==j||G!==J)&&(e.polygonOffset(j,J),P=j,G=J)):ct(e.POLYGON_OFFSET_FILL)}function Ft(B){B?ht(e.SCISSOR_TEST):ct(e.SCISSOR_TEST)}function D(B){B===void 0&&(B=e.TEXTURE0+Y-1),O!==B&&(e.activeTexture(B),O=B)}function T(B,j,J){J===void 0&&(O===null?J=e.TEXTURE0+Y-1:J=O);let $=tt[J];$===void 0&&($={type:void 0,texture:void 0},tt[J]=$),($.type!==B||$.texture!==j)&&(O!==J&&(e.activeTexture(J),O=J),e.bindTexture(B,j||nt[B]),$.type=B,$.texture=j)}function q(){const B=tt[O];B!==void 0&&B.type!==void 0&&(e.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function it(){try{e.compressedTexImage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{e.compressedTexImage3D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{e.texSubImage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{e.texSubImage3D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function zt(){try{e.texStorage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{e.texStorage3D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{e.texImage2D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{e.texImage3D.apply(e,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(B){Dt.equals(B)===!1&&(e.scissor(B.x,B.y,B.z,B.w),Dt.copy(B))}function gt(B){Yt.equals(B)===!1&&(e.viewport(B.x,B.y,B.z,B.w),Yt.copy(B))}function Gt(B,j){let J=l.get(j);J===void 0&&(J=new WeakMap,l.set(j,J));let $=J.get(B);$===void 0&&($=e.getUniformBlockIndex(j,B.name),J.set(B,$))}function qt(B,j){const $=l.get(j).get(B);o.get(j)!==$&&(e.uniformBlockBinding(j,$,B.__bindingPointIndex),o.set(j,$))}function ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},O=null,tt={},c={},d=new WeakMap,f=[],h=null,g=!1,_=null,m=null,p=null,v=null,y=null,x=null,C=null,A=new Re(0,0,0),E=0,R=!1,M=null,S=null,U=null,P=null,G=null,Dt.set(0,0,e.canvas.width,e.canvas.height),Yt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),s.reset()}return{buffers:{color:a,depth:r,stencil:s},enable:ht,disable:ct,bindFramebuffer:Ct,drawBuffers:Ut,useProgram:Wt,setBlending:Ot,setMaterial:Bt,setFlipSided:Zt,setCullFace:yt,setLineWidth:W,setPolygonOffset:Rt,setScissorTest:Ft,activeTexture:D,bindTexture:T,unbindTexture:q,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Gt,uniformBlockBinding:qt,texStorage2D:zt,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:bt,compressedTexSubImage2D:st,compressedTexSubImage3D:mt,scissor:Ht,viewport:gt,reset:ge}}function vS(e,t,n,i){const a=nO(i);switch(n){case jT:return e*t;case JT:return e*t;case $T:return e*t*2;case tb:return e*t/a.components*a.byteLength;case sv:return e*t/a.components*a.byteLength;case eb:return e*t*2/a.components*a.byteLength;case ov:return e*t*2/a.components*a.byteLength;case QT:return e*t*3/a.components*a.byteLength;case Ma:return e*t*4/a.components*a.byteLength;case lv:return e*t*4/a.components*a.byteLength;case Rh:case wh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Dh:case Uh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ng:case ag:return Math.max(e,16)*Math.max(t,8)/4;case eg:case ig:return Math.max(e,8)*Math.max(t,8)/2;case rg:case sg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case og:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ug:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case cg:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fg:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case hg:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case dg:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pg:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mg:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _g:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case gg:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vg:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yg:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xg:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sg:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Lh:case Mg:case Eg:return Math.ceil(e/4)*Math.ceil(t/4)*16;case nb:case Tg:return Math.ceil(e/4)*Math.ceil(t/4)*8;case bg:case Ag:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nO(e){switch(e){case Mr:case YT:return{byteLength:1,components:1};case Fc:case ZT:case $c:return{byteLength:2,components:1};case av:case rv:return{byteLength:2,components:4};case go:case iv:case ur:return{byteLength:4,components:1};case KT:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function iO(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pe,c=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return h?new OffscreenCanvas(D,T):bd("canvas")}function _(D,T,q){let it=1;const rt=Ft(D);if((rt.width>q||rt.height>q)&&(it=q/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(it*rt.width),bt=Math.floor(it*rt.height);d===void 0&&(d=g(Q,bt));const st=T?g(Q,bt):d;return st.width=Q,st.height=bt,st.getContext("2d").drawImage(D,0,0,Q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Q+"x"+bt+")."),st}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==ua&&D.minFilter!==Sa}function p(D){e.generateMipmap(D)}function v(D,T,q,it,rt=!1){if(D!==null){if(e[D]!==void 0)return e[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=T;if(T===e.RED&&(q===e.FLOAT&&(Q=e.R32F),q===e.HALF_FLOAT&&(Q=e.R16F),q===e.UNSIGNED_BYTE&&(Q=e.R8)),T===e.RED_INTEGER&&(q===e.UNSIGNED_BYTE&&(Q=e.R8UI),q===e.UNSIGNED_SHORT&&(Q=e.R16UI),q===e.UNSIGNED_INT&&(Q=e.R32UI),q===e.BYTE&&(Q=e.R8I),q===e.SHORT&&(Q=e.R16I),q===e.INT&&(Q=e.R32I)),T===e.RG&&(q===e.FLOAT&&(Q=e.RG32F),q===e.HALF_FLOAT&&(Q=e.RG16F),q===e.UNSIGNED_BYTE&&(Q=e.RG8)),T===e.RG_INTEGER&&(q===e.UNSIGNED_BYTE&&(Q=e.RG8UI),q===e.UNSIGNED_SHORT&&(Q=e.RG16UI),q===e.UNSIGNED_INT&&(Q=e.RG32UI),q===e.BYTE&&(Q=e.RG8I),q===e.SHORT&&(Q=e.RG16I),q===e.INT&&(Q=e.RG32I)),T===e.RGB&&q===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),T===e.RGBA){const bt=rt?Sd:Me.getTransfer(it);q===e.FLOAT&&(Q=e.RGBA32F),q===e.HALF_FLOAT&&(Q=e.RGBA16F),q===e.UNSIGNED_BYTE&&(Q=bt===Ve?e.SRGB8_ALPHA8:e.RGBA8),q===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),q===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function y(D,T){let q;return D?T===null||T===go||T===$l?q=e.DEPTH24_STENCIL8:T===ur?q=e.DEPTH32F_STENCIL8:T===Fc&&(q=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===go||T===$l?q=e.DEPTH_COMPONENT24:T===ur?q=e.DEPTH_COMPONENT32F:T===Fc&&(q=e.DEPTH_COMPONENT16),q}function x(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==ua&&D.minFilter!==Sa?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function C(D){const T=D.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&c.delete(T)}function A(D){const T=D.target;T.removeEventListener("dispose",A),M(T)}function E(D){const T=i.get(D);if(T.__webglInit===void 0)return;const q=D.source,it=f.get(q);if(it){const rt=it[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&R(D),Object.keys(it).length===0&&f.delete(q)}i.remove(D)}function R(D){const T=i.get(D);e.deleteTexture(T.__webglTexture);const q=D.source,it=f.get(q);delete it[T.__cacheKey],s.memory.textures--}function M(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let rt=0;rt<T.__webglFramebuffer[it].length;rt++)e.deleteFramebuffer(T.__webglFramebuffer[it][rt]);else e.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)e.deleteFramebuffer(T.__webglFramebuffer[it]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=D.textures;for(let it=0,rt=q.length;it<rt;it++){const Q=i.get(q[it]);Q.__webglTexture&&(e.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(q[it])}i.remove(D)}let S=0;function U(){S=0}function P(){const D=S;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),S+=1,D}function G(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function Y(D,T){const q=i.get(D);if(D.isVideoTexture&&W(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const it=D.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(q,D,T);return}}n.bindTexture(e.TEXTURE_2D,q.__webglTexture,e.TEXTURE0+T)}function K(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Yt(q,D,T);return}n.bindTexture(e.TEXTURE_2D_ARRAY,q.__webglTexture,e.TEXTURE0+T)}function N(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Yt(q,D,T);return}n.bindTexture(e.TEXTURE_3D,q.__webglTexture,e.TEXTURE0+T)}function I(D,T){const q=i.get(D);if(D.version>0&&q.__version!==D.version){Z(q,D,T);return}n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture,e.TEXTURE0+T)}const O={[$_]:e.REPEAT,[Ys]:e.CLAMP_TO_EDGE,[tg]:e.MIRRORED_REPEAT},tt={[ua]:e.NEAREST,[kw]:e.NEAREST_MIPMAP_NEAREST,[Pf]:e.NEAREST_MIPMAP_LINEAR,[Sa]:e.LINEAR,[Jp]:e.LINEAR_MIPMAP_NEAREST,[Zs]:e.LINEAR_MIPMAP_LINEAR},w={[Zw]:e.NEVER,[t3]:e.ALWAYS,[Kw]:e.LESS,[ib]:e.LEQUAL,[jw]:e.EQUAL,[$w]:e.GEQUAL,[Qw]:e.GREATER,[Jw]:e.NOTEQUAL};function ut(D,T){if(T.type===ur&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Sa||T.magFilter===Jp||T.magFilter===Pf||T.magFilter===Zs||T.minFilter===Sa||T.minFilter===Jp||T.minFilter===Pf||T.minFilter===Zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(D,e.TEXTURE_WRAP_S,O[T.wrapS]),e.texParameteri(D,e.TEXTURE_WRAP_T,O[T.wrapT]),(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)&&e.texParameteri(D,e.TEXTURE_WRAP_R,O[T.wrapR]),e.texParameteri(D,e.TEXTURE_MAG_FILTER,tt[T.magFilter]),e.texParameteri(D,e.TEXTURE_MIN_FILTER,tt[T.minFilter]),T.compareFunction&&(e.texParameteri(D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(D,e.TEXTURE_COMPARE_FUNC,w[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ua||T.minFilter!==Pf&&T.minFilter!==Zs||T.type===ur&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");e.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Dt(D,T){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",C));const it=T.source;let rt=f.get(it);rt===void 0&&(rt={},f.set(it,rt));const Q=G(T);if(Q!==D.__cacheKey){rt[Q]===void 0&&(rt[Q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,q=!0),rt[Q].usedTimes++;const bt=rt[D.__cacheKey];bt!==void 0&&(rt[D.__cacheKey].usedTimes--,bt.usedTimes===0&&R(T)),D.__cacheKey=Q,D.__webglTexture=rt[Q].texture}return q}function Yt(D,T,q){let it=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=e.TEXTURE_3D);const rt=Dt(D,T),Q=T.source;n.bindTexture(it,D.__webglTexture,e.TEXTURE0+q);const bt=i.get(Q);if(Q.version!==bt.__version||rt===!0){n.activeTexture(e.TEXTURE0+q);const st=Me.getPrimaries(Me.workingColorSpace),mt=T.colorSpace===Gr?null:Me.getPrimaries(T.colorSpace),zt=T.colorSpace===Gr||st===mt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let ot=_(T.image,!1,a.maxTextureSize);ot=Rt(T,ot);const vt=r.convert(T.format,T.colorSpace),Lt=r.convert(T.type);let Ht=v(T.internalFormat,vt,Lt,T.colorSpace,T.isVideoTexture);ut(it,T);let gt;const Gt=T.mipmaps,qt=T.isVideoTexture!==!0,ge=bt.__version===void 0||rt===!0,B=Q.dataReady,j=x(T,ot);if(T.isDepthTexture)Ht=y(T.format===tu,T.type),ge&&(qt?n.texStorage2D(e.TEXTURE_2D,1,Ht,ot.width,ot.height):n.texImage2D(e.TEXTURE_2D,0,Ht,ot.width,ot.height,0,vt,Lt,null));else if(T.isDataTexture)if(Gt.length>0){qt&&ge&&n.texStorage2D(e.TEXTURE_2D,j,Ht,Gt[0].width,Gt[0].height);for(let J=0,$=Gt.length;J<$;J++)gt=Gt[J],qt?B&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,gt.width,gt.height,vt,Lt,gt.data):n.texImage2D(e.TEXTURE_2D,J,Ht,gt.width,gt.height,0,vt,Lt,gt.data);T.generateMipmaps=!1}else qt?(ge&&n.texStorage2D(e.TEXTURE_2D,j,Ht,ot.width,ot.height),B&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot.width,ot.height,vt,Lt,ot.data)):n.texImage2D(e.TEXTURE_2D,0,Ht,ot.width,ot.height,0,vt,Lt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qt&&ge&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,Ht,Gt[0].width,Gt[0].height,ot.depth);for(let J=0,$=Gt.length;J<$;J++)if(gt=Gt[J],T.format!==Ma)if(vt!==null)if(qt){if(B)if(T.layerUpdates.size>0){const lt=vS(gt.width,gt.height,T.format,T.type);for(const At of T.layerUpdates){const Jt=gt.data.subarray(At*lt/gt.data.BYTES_PER_ELEMENT,(At+1)*lt/gt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,At,gt.width,gt.height,1,vt,Jt,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,ot.depth,vt,gt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,Ht,gt.width,gt.height,ot.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?B&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,gt.width,gt.height,ot.depth,vt,Lt,gt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,Ht,gt.width,gt.height,ot.depth,0,vt,Lt,gt.data)}else{qt&&ge&&n.texStorage2D(e.TEXTURE_2D,j,Ht,Gt[0].width,Gt[0].height);for(let J=0,$=Gt.length;J<$;J++)gt=Gt[J],T.format!==Ma?vt!==null?qt?B&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,gt.width,gt.height,vt,gt.data):n.compressedTexImage2D(e.TEXTURE_2D,J,Ht,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?B&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,gt.width,gt.height,vt,Lt,gt.data):n.texImage2D(e.TEXTURE_2D,J,Ht,gt.width,gt.height,0,vt,Lt,gt.data)}else if(T.isDataArrayTexture)if(qt){if(ge&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,Ht,ot.width,ot.height,ot.depth),B)if(T.layerUpdates.size>0){const J=vS(ot.width,ot.height,T.format,T.type);for(const $ of T.layerUpdates){const lt=ot.data.subarray($*J/ot.data.BYTES_PER_ELEMENT,($+1)*J/ot.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,ot.width,ot.height,1,vt,Lt,lt)}T.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Lt,ot.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ht,ot.width,ot.height,ot.depth,0,vt,Lt,ot.data);else if(T.isData3DTexture)qt?(ge&&n.texStorage3D(e.TEXTURE_3D,j,Ht,ot.width,ot.height,ot.depth),B&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Lt,ot.data)):n.texImage3D(e.TEXTURE_3D,0,Ht,ot.width,ot.height,ot.depth,0,vt,Lt,ot.data);else if(T.isFramebufferTexture){if(ge)if(qt)n.texStorage2D(e.TEXTURE_2D,j,Ht,ot.width,ot.height);else{let J=ot.width,$=ot.height;for(let lt=0;lt<j;lt++)n.texImage2D(e.TEXTURE_2D,lt,Ht,J,$,0,vt,Lt,null),J>>=1,$>>=1}}else if(Gt.length>0){if(qt&&ge){const J=Ft(Gt[0]);n.texStorage2D(e.TEXTURE_2D,j,Ht,J.width,J.height)}for(let J=0,$=Gt.length;J<$;J++)gt=Gt[J],qt?B&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,vt,Lt,gt):n.texImage2D(e.TEXTURE_2D,J,Ht,vt,Lt,gt);T.generateMipmaps=!1}else if(qt){if(ge){const J=Ft(ot);n.texStorage2D(e.TEXTURE_2D,j,Ht,J.width,J.height)}B&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,vt,Lt,ot)}else n.texImage2D(e.TEXTURE_2D,0,Ht,vt,Lt,ot);m(T)&&p(it),bt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Z(D,T,q){if(T.image.length!==6)return;const it=Dt(D,T),rt=T.source;n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+q);const Q=i.get(rt);if(rt.version!==Q.__version||it===!0){n.activeTexture(e.TEXTURE0+q);const bt=Me.getPrimaries(Me.workingColorSpace),st=T.colorSpace===Gr?null:Me.getPrimaries(T.colorSpace),mt=T.colorSpace===Gr||bt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,ot=T.image[0]&&T.image[0].isDataTexture,vt=[];for(let $=0;$<6;$++)!zt&&!ot?vt[$]=_(T.image[$],!0,a.maxCubemapSize):vt[$]=ot?T.image[$].image:T.image[$],vt[$]=Rt(T,vt[$]);const Lt=vt[0],Ht=r.convert(T.format,T.colorSpace),gt=r.convert(T.type),Gt=v(T.internalFormat,Ht,gt,T.colorSpace),qt=T.isVideoTexture!==!0,ge=Q.__version===void 0||it===!0,B=rt.dataReady;let j=x(T,Lt);ut(e.TEXTURE_CUBE_MAP,T);let J;if(zt){qt&&ge&&n.texStorage2D(e.TEXTURE_CUBE_MAP,j,Gt,Lt.width,Lt.height);for(let $=0;$<6;$++){J=vt[$].mipmaps;for(let lt=0;lt<J.length;lt++){const At=J[lt];T.format!==Ma?Ht!==null?qt?B&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,At.width,At.height,Ht,At.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,At.width,At.height,Ht,gt,At.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Gt,At.width,At.height,0,Ht,gt,At.data)}}}else{if(J=T.mipmaps,qt&&ge){J.length>0&&j++;const $=Ft(vt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,j,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(ot){qt?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,vt[$].width,vt[$].height,Ht,gt,vt[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,vt[$].width,vt[$].height,0,Ht,gt,vt[$].data);for(let lt=0;lt<J.length;lt++){const Jt=J[lt].image[$].image;qt?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Jt.width,Jt.height,Ht,gt,Jt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Gt,Jt.width,Jt.height,0,Ht,gt,Jt.data)}}else{qt?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ht,gt,vt[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,Ht,gt,vt[$]);for(let lt=0;lt<J.length;lt++){const At=J[lt];qt?B&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Ht,gt,At.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Gt,Ht,gt,At.image[$])}}}m(T)&&p(e.TEXTURE_CUBE_MAP),Q.__version=rt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function nt(D,T,q,it,rt,Q){const bt=r.convert(q.format,q.colorSpace),st=r.convert(q.type),mt=v(q.internalFormat,bt,st,q.colorSpace);if(!i.get(T).__hasExternalTextures){const ot=Math.max(1,T.width>>Q),vt=Math.max(1,T.height>>Q);rt===e.TEXTURE_3D||rt===e.TEXTURE_2D_ARRAY?n.texImage3D(rt,Q,mt,ot,vt,T.depth,0,bt,st,null):n.texImage2D(rt,Q,mt,ot,vt,0,bt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,D),yt(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,it,rt,i.get(q).__webglTexture,0,Zt(T)):(rt===e.TEXTURE_2D||rt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,it,rt,i.get(q).__webglTexture,Q),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ht(D,T,q){if(e.bindRenderbuffer(e.RENDERBUFFER,D),T.depthBuffer){const it=T.depthTexture,rt=it&&it.isDepthTexture?it.type:null,Q=y(T.stencilBuffer,rt),bt=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=Zt(T);yt(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,Q,T.width,T.height):q?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,Q,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,Q,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,bt,e.RENDERBUFFER,D)}else{const it=T.textures;for(let rt=0;rt<it.length;rt++){const Q=it[rt],bt=r.convert(Q.format,Q.colorSpace),st=r.convert(Q.type),mt=v(Q.internalFormat,bt,st,Q.colorSpace),zt=Zt(T);q&&yt(T)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,zt,mt,T.width,T.height):yt(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,zt,mt,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,mt,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ct(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const it=i.get(T.depthTexture).__webglTexture,rt=Zt(T);if(T.depthTexture.format===Ll)yt(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,it,0);else if(T.depthTexture.format===tu)yt(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ct(D){const T=i.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,D)}else if(q){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]=e.createRenderbuffer(),ht(T.__webglDepthbuffer[it],D,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=e.createRenderbuffer(),ht(T.__webglDepthbuffer,D,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(D,T,q){const it=i.get(D);T!==void 0&&nt(it.__webglFramebuffer,D,D.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),q!==void 0&&Ct(D)}function Wt(D){const T=D.texture,q=i.get(D),it=i.get(T);D.addEventListener("dispose",A);const rt=D.textures,Q=D.isWebGLCubeRenderTarget===!0,bt=rt.length>1;if(bt||(it.__webglTexture===void 0&&(it.__webglTexture=e.createTexture()),it.__version=T.version,s.memory.textures++),Q){q.__webglFramebuffer=[];for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[st]=[];for(let mt=0;mt<T.mipmaps.length;mt++)q.__webglFramebuffer[st][mt]=e.createFramebuffer()}else q.__webglFramebuffer[st]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let st=0;st<T.mipmaps.length;st++)q.__webglFramebuffer[st]=e.createFramebuffer()}else q.__webglFramebuffer=e.createFramebuffer();if(bt)for(let st=0,mt=rt.length;st<mt;st++){const zt=i.get(rt[st]);zt.__webglTexture===void 0&&(zt.__webglTexture=e.createTexture(),s.memory.textures++)}if(D.samples>0&&yt(D)===!1){q.__webglMultisampledFramebuffer=e.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let st=0;st<rt.length;st++){const mt=rt[st];q.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,q.__webglColorRenderbuffer[st]);const zt=r.convert(mt.format,mt.colorSpace),ot=r.convert(mt.type),vt=v(mt.internalFormat,zt,ot,mt.colorSpace,D.isXRRenderTarget===!0),Lt=Zt(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,vt,D.width,D.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,q.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=e.createRenderbuffer(),ht(q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Q){n.bindTexture(e.TEXTURE_CUBE_MAP,it.__webglTexture),ut(e.TEXTURE_CUBE_MAP,T);for(let st=0;st<6;st++)if(T.mipmaps&&T.mipmaps.length>0)for(let mt=0;mt<T.mipmaps.length;mt++)nt(q.__webglFramebuffer[st][mt],D,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt);else nt(q.__webglFramebuffer[st],D,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(T)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(bt){for(let st=0,mt=rt.length;st<mt;st++){const zt=rt[st],ot=i.get(zt);n.bindTexture(e.TEXTURE_2D,ot.__webglTexture),ut(e.TEXTURE_2D,zt),nt(q.__webglFramebuffer,D,zt,e.COLOR_ATTACHMENT0+st,e.TEXTURE_2D,0),m(zt)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(st=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,it.__webglTexture),ut(st,T),T.mipmaps&&T.mipmaps.length>0)for(let mt=0;mt<T.mipmaps.length;mt++)nt(q.__webglFramebuffer[mt],D,T,e.COLOR_ATTACHMENT0,st,mt);else nt(q.__webglFramebuffer,D,T,e.COLOR_ATTACHMENT0,st,0);m(T)&&p(st),n.unbindTexture()}D.depthBuffer&&Ct(D)}function ne(D){const T=D.textures;for(let q=0,it=T.length;q<it;q++){const rt=T[q];if(m(rt)){const Q=D.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,bt=i.get(rt).__webglTexture;n.bindTexture(Q,bt),p(Q),n.unbindTexture()}}}const L=[],Ot=[];function Bt(D){if(D.samples>0){if(yt(D)===!1){const T=D.textures,q=D.width,it=D.height;let rt=e.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,bt=i.get(D),st=T.length>1;if(st)for(let mt=0;mt<T.length;mt++)n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<T.length;mt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=e.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const zt=i.get(T[mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,zt,0)}e.blitFramebuffer(0,0,q,it,0,0,q,it,rt,e.NEAREST),l===!0&&(L.length=0,Ot.length=0,L.push(e.COLOR_ATTACHMENT0+mt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(L.push(Q),Ot.push(Q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ot)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let mt=0;mt<T.length;mt++){n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const zt=i.get(T[mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,bt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,zt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function Zt(D){return Math.min(a.maxSamples,D.samples)}function yt(D){const T=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function W(D){const T=s.render.frame;c.get(D)!==T&&(c.set(D,T),D.update())}function Rt(D,T){const q=D.colorSpace,it=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Ts&&q!==Gr&&(Me.getTransfer(q)===Ve?(it!==Ma||rt!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=I,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=yt}function aO(e,t){function n(i,a=Gr){let r;const s=Me.getTransfer(a);if(i===Mr)return e.UNSIGNED_BYTE;if(i===av)return e.UNSIGNED_SHORT_4_4_4_4;if(i===rv)return e.UNSIGNED_SHORT_5_5_5_1;if(i===KT)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===YT)return e.BYTE;if(i===ZT)return e.SHORT;if(i===Fc)return e.UNSIGNED_SHORT;if(i===iv)return e.INT;if(i===go)return e.UNSIGNED_INT;if(i===ur)return e.FLOAT;if(i===$c)return e.HALF_FLOAT;if(i===jT)return e.ALPHA;if(i===QT)return e.RGB;if(i===Ma)return e.RGBA;if(i===JT)return e.LUMINANCE;if(i===$T)return e.LUMINANCE_ALPHA;if(i===Ll)return e.DEPTH_COMPONENT;if(i===tu)return e.DEPTH_STENCIL;if(i===tb)return e.RED;if(i===sv)return e.RED_INTEGER;if(i===eb)return e.RG;if(i===ov)return e.RG_INTEGER;if(i===lv)return e.RGBA_INTEGER;if(i===Rh||i===wh||i===Dh||i===Uh)if(s===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eg||i===ng||i===ig||i===ag)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===eg)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ng)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ig)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ag)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rg||i===sg||i===og)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===rg||i===sg)return s===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===og)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lg||i===ug||i===cg||i===fg||i===hg||i===dg||i===pg||i===mg||i===_g||i===gg||i===vg||i===yg||i===xg||i===Sg)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ug)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_g)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sg)return s===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lh||i===Mg||i===Eg)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Lh)return s===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mg)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eg)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nb||i===Tg||i===bg||i===Ag)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Lh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tg)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bg)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ag)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$l?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class rO extends Ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ih extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sO={type:"move"};class bm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ih,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ih,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ih,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){s=!0;for(const _ of t.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,g=.005;u.inputState.pinching&&f>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sO)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new ih;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const oO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lO=`
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

}`;class uO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const a=new gi,r=t.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Tr({vertexShader:oO,fragmentShader:lO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pa(new rf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cO extends cu{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,g=null;const _=new uO,m=n.getContextAttributes();let p=null,v=null;const y=[],x=[],C=new pe;let A=null;const E=new Ni;E.layers.enable(1),E.viewport=new Xe;const R=new Ni;R.layers.enable(2),R.viewport=new Xe;const M=[E,R],S=new rO;S.layers.enable(1),S.layers.enable(2);let U=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=y[Z];return nt===void 0&&(nt=new bm,y[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=y[Z];return nt===void 0&&(nt=new bm,y[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=y[Z];return nt===void 0&&(nt=new bm,y[Z]=nt),nt.getHandSpace()};function G(Z){const nt=x.indexOf(Z.inputSource);if(nt===-1)return;const ht=y[nt];ht!==void 0&&(ht.update(Z.inputSource,Z.frame,u||s),ht.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",K);for(let Z=0;Z<y.length;Z++){const nt=x[Z];nt!==null&&(x[Z]=null,y[Z].disconnect(nt))}U=null,P=null,_.reset(),t.setRenderTarget(p),h=null,f=null,d=null,a=null,v=null,Yt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(p=t.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),a.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(a,n,nt),a.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new vo(h.framebufferWidth,h.framebufferHeight,{format:Ma,type:Mr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,ht=null,ct=null;m.depth&&(ct=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=m.stencil?tu:Ll,ht=m.stencil?$l:go);const Ct={colorFormat:n.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(a,n),f=d.createProjectionLayer(Ct),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new vo(f.textureWidth,f.textureHeight,{format:Ma,type:Mr,depthTexture:new _b(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),Yt.setContext(a),Yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Z){for(let nt=0;nt<Z.removed.length;nt++){const ht=Z.removed[nt],ct=x.indexOf(ht);ct>=0&&(x[ct]=null,y[ct].disconnect(ht))}for(let nt=0;nt<Z.added.length;nt++){const ht=Z.added[nt];let ct=x.indexOf(ht);if(ct===-1){for(let Ut=0;Ut<y.length;Ut++)if(Ut>=x.length){x.push(ht),ct=Ut;break}else if(x[Ut]===null){x[Ut]=ht,ct=Ut;break}if(ct===-1)break}const Ct=y[ct];Ct&&Ct.connect(ht)}}const N=new X,I=new X;function O(Z,nt,ht){N.setFromMatrixPosition(nt.matrixWorld),I.setFromMatrixPosition(ht.matrixWorld);const ct=N.distanceTo(I),Ct=nt.projectionMatrix.elements,Ut=ht.projectionMatrix.elements,Wt=Ct[14]/(Ct[10]-1),ne=Ct[14]/(Ct[10]+1),L=(Ct[9]+1)/Ct[5],Ot=(Ct[9]-1)/Ct[5],Bt=(Ct[8]-1)/Ct[0],Zt=(Ut[8]+1)/Ut[0],yt=Wt*Bt,W=Wt*Zt,Rt=ct/(-Bt+Zt),Ft=Rt*-Bt;nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ft),Z.translateZ(Rt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const D=Wt+Rt,T=ne+Rt,q=yt-Ft,it=W+(ct-Ft),rt=L*ne/T*D,Q=Ot*ne/T*D;Z.projectionMatrix.makePerspective(q,it,rt,Q,D,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function tt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),S.near=R.near=E.near=Z.near,S.far=R.far=E.far=Z.far,(U!==S.near||P!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),U=S.near,P=S.far,E.near=U,E.far=P,R.near=U,R.far=P,E.updateProjectionMatrix(),R.updateProjectionMatrix(),Z.updateProjectionMatrix());const nt=Z.parent,ht=S.cameras;tt(S,nt);for(let ct=0;ct<ht.length;ct++)tt(ht[ct],nt);ht.length===2?O(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),w(Z,S,nt)};function w(Z,nt,ht){ht===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(ht.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cg*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ut=null;function Dt(Z,nt){if(c=nt.getViewerPose(u||s),g=nt,c!==null){const ht=c.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let ct=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let Ut=0;Ut<ht.length;Ut++){const Wt=ht[Ut];let ne=null;if(h!==null)ne=h.getViewport(Wt);else{const Ot=d.getViewSubImage(f,Wt);ne=Ot.viewport,Ut===0&&(t.setRenderTargetTextures(v,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(v))}let L=M[Ut];L===void 0&&(L=new Ni,L.layers.enable(Ut),L.viewport=new Xe,M[Ut]=L),L.matrix.fromArray(Wt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Wt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ne.x,ne.y,ne.width,ne.height),Ut===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(L)}const Ct=a.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Ut=d.getDepthInformation(ht[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,a.renderState)}}for(let ht=0;ht<y.length;ht++){const ct=x[ht],Ct=y[ht];ct!==null&&Ct!==void 0&&Ct.update(ct,nt,u||s)}ut&&ut(Z,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Yt=new mb;Yt.setAnimationLoop(Dt),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}}const Ns=new Er,fO=new nn;function hO(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hb(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_i&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_i&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ns.copy(x),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(fO.makeRotationFromEuler(Ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_i&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function dO(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function u(v,y){let x=a[v.id];x===void 0&&(g(v),x=c(v),a[v.id]=x,v.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(v,C);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function c(v){const y=d();v.__bindingPointIndex=y;const x=e.createBuffer(),C=v.__size,A=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=a[v.id],x=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let A=0,E=x.length;A<E;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,S=R.length;M<S;M++){const U=R[M];if(h(U,A,M,C)===!0){const P=U.__offset,G=Array.isArray(U.value)?U.value:[U.value];let Y=0;for(let K=0;K<G.length;K++){const N=G[K],I=_(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,P+Y,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,Y),Y+=I.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,P,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(v,y,x,C){const A=v.value,E=y+"_"+x;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{const R=C[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const y=v.uniforms;let x=0;const C=16;for(let E=0,R=y.length;E<R;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,U=M.length;S<U;S++){const P=M[S],G=Array.isArray(P.value)?P.value:[P.value];for(let Y=0,K=G.length;Y<K;Y++){const N=G[Y],I=_(N),O=x%C,tt=O%I.boundary,w=O+tt;x+=tt,w!==0&&C-w<I.storage&&(x+=C-w),P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=I.storage}}}const A=x%C;return A>0&&(x+=C-A),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(a[y.id]),delete a[y.id],delete r[y.id]}function p(){for(const v in a)e.deleteBuffer(a[v]);s=[],a={},r={}}return{bind:l,update:u,dispose:p}}class pO{constructor(t={}){const{canvas:n=n3(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Aa,this.toneMapping=fs,this.toneMappingExposure=1;const y=this;let x=!1,C=0,A=0,E=null,R=-1,M=null;const S=new Xe,U=new Xe;let P=null;const G=new Re(0);let Y=0,K=n.width,N=n.height,I=1,O=null,tt=null;const w=new Xe(0,0,K,N),ut=new Xe(0,0,K,N);let Dt=!1;const Yt=new fv;let Z=!1,nt=!1;const ht=new nn,ct=new X,Ct=new Xe,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ne(){return E===null?I:1}let L=i;function Ot(b,z){return n.getContext(b,z)}try{const b={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nv}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",$,!1),n.addEventListener("webglcontextcreationerror",lt,!1),L===null){const z="webgl2";if(L=Ot(z,b),L===null)throw Ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Bt,Zt,yt,W,Rt,Ft,D,T,q,it,rt,Q,bt,st,mt,zt,ot,vt,Lt,Ht,gt,Gt,qt,ge;function B(){Bt=new xL(L),Bt.init(),Gt=new aO(L,Bt),Zt=new dL(L,Bt,t,Gt),yt=new eO(L),W=new EL(L),Rt=new GN,Ft=new iO(L,Bt,yt,Rt,Zt,Gt,W),D=new mL(y),T=new yL(y),q=new w3(L),qt=new fL(L,q),it=new SL(L,q,W,qt),rt=new bL(L,it,q,W),Lt=new TL(L,Zt,Ft),zt=new pL(Rt),Q=new HN(y,D,T,Bt,Zt,qt,zt),bt=new hO(y,Rt),st=new kN,mt=new KN(Bt),vt=new cL(y,D,T,yt,rt,f,l),ot=new tO(y,rt,Zt),ge=new dO(L,W,Zt,yt),Ht=new hL(L,Bt,W),gt=new ML(L,Bt,W),W.programs=Q.programs,y.capabilities=Zt,y.extensions=Bt,y.properties=Rt,y.renderLists=st,y.shadowMap=ot,y.state=yt,y.info=W}B();const j=new cO(y,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(b){b!==void 0&&(I=b,this.setSize(K,N,!1))},this.getSize=function(b){return b.set(K,N)},this.setSize=function(b,z,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,N=z,n.width=Math.floor(b*I),n.height=Math.floor(z*I),k===!0&&(n.style.width=b+"px",n.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(K*I,N*I).floor()},this.setDrawingBufferSize=function(b,z,k){K=b,N=z,I=k,n.width=Math.floor(b*k),n.height=Math.floor(z*k),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(w)},this.setViewport=function(b,z,k,V){b.isVector4?w.set(b.x,b.y,b.z,b.w):w.set(b,z,k,V),yt.viewport(S.copy(w).multiplyScalar(I).round())},this.getScissor=function(b){return b.copy(ut)},this.setScissor=function(b,z,k,V){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,z,k,V),yt.scissor(U.copy(ut).multiplyScalar(I).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){yt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(b=!0,z=!0,k=!0){let V=0;if(b){let F=!1;if(E!==null){const at=E.texture.format;F=at===lv||at===ov||at===sv}if(F){const at=E.texture.type,dt=at===Mr||at===go||at===Fc||at===$l||at===av||at===rv,St=vt.getClearColor(),pt=vt.getClearAlpha(),xt=St.r,wt=St.g,Pt=St.b;dt?(h[0]=xt,h[1]=wt,h[2]=Pt,h[3]=pt,L.clearBufferuiv(L.COLOR,0,h)):(g[0]=xt,g[1]=wt,g[2]=Pt,g[3]=pt,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}z&&(V|=L.DEPTH_BUFFER_BIT),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",$,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),st.dispose(),mt.dispose(),Rt.dispose(),D.dispose(),T.dispose(),rt.dispose(),qt.dispose(),ge.dispose(),Q.dispose(),j.dispose(),j.removeEventListener("sessionstart",Tt),j.removeEventListener("sessionend",de),ft.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const b=W.autoReset,z=ot.enabled,k=ot.autoUpdate,V=ot.needsUpdate,F=ot.type;B(),W.autoReset=b,ot.enabled=z,ot.autoUpdate=k,ot.needsUpdate=V,ot.type=F}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function At(b){const z=b.target;z.removeEventListener("dispose",At),Jt(z)}function Jt(b){Le(b),Rt.remove(b)}function Le(b){const z=Rt.get(b).programs;z!==void 0&&(z.forEach(function(k){Q.releaseProgram(k)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,k,V,F,at){z===null&&(z=Ut);const dt=F.isMesh&&F.matrixWorld.determinant()<0,St=Be(b,z,k,V,F);yt.setMaterial(V,dt);let pt=k.index,xt=1;if(V.wireframe===!0){if(pt=it.getWireframeAttribute(k),pt===void 0)return;xt=2}const wt=k.drawRange,Pt=k.attributes.position;let me=wt.start*xt,we=(wt.start+wt.count)*xt;at!==null&&(me=Math.max(me,at.start*xt),we=Math.min(we,(at.start+at.count)*xt)),pt!==null?(me=Math.max(me,0),we=Math.min(we,pt.count)):Pt!=null&&(me=Math.max(me,0),we=Math.min(we,Pt.count));const _e=we-me;if(_e<0||_e===1/0)return;qt.setup(F,V,St,k,pt);let gn,ce=Ht;if(pt!==null&&(gn=q.get(pt),ce=gt,ce.setIndex(gn)),F.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*ne()),ce.setMode(L.LINES)):ce.setMode(L.TRIANGLES);else if(F.isLine){let Et=V.linewidth;Et===void 0&&(Et=1),yt.setLineWidth(Et*ne()),F.isLineSegments?ce.setMode(L.LINES):F.isLineLoop?ce.setMode(L.LINE_LOOP):ce.setMode(L.LINE_STRIP)}else F.isPoints?ce.setMode(L.POINTS):F.isSprite&&ce.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Et=F._multiDrawStarts,Ln=F._multiDrawCounts,xe=F._multiDrawCount,pa=pt?q.get(pt).bytesPerElement:1,Ao=Rt.get(V).currentProgram.getUniforms();for(let Ti=0;Ti<xe;Ti++)Ao.setValue(L,"_gl_DrawID",Ti),ce.render(Et[Ti]/pa,Ln[Ti])}else if(F.isInstancedMesh)ce.renderInstances(me,_e,F.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ln=Math.min(k.instanceCount,Et);ce.renderInstances(me,_e,Ln)}else ce.render(me,_e)};function Ne(b,z,k){b.transparent===!0&&b.side===ar&&b.forceSinglePass===!1?(b.side=_i,b.needsUpdate=!0,Ie(b,z,k),b.side=xs,b.needsUpdate=!0,Ie(b,z,k),b.side=ar):Ie(b,z,k)}this.compile=function(b,z,k=null){k===null&&(k=b),m=mt.get(k),m.init(z),v.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const V=new Set;return b.traverse(function(F){const at=F.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const St=at[dt];Ne(St,k,F),V.add(St)}else Ne(at,k,F),V.add(at)}),v.pop(),m=null,V},this.compileAsync=function(b,z,k=null){const V=this.compile(b,z,k);return new Promise(F=>{function at(){if(V.forEach(function(dt){Rt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(b);return}setTimeout(at,10)}Bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let le=null;function It(b){le&&le(b)}function Tt(){ft.stop()}function de(){ft.start()}const ft=new mb;ft.setAnimationLoop(It),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(b){le=b,j.setAnimationLoop(b),b===null?ft.stop():ft.start()},j.addEventListener("sessionstart",Tt),j.addEventListener("sessionend",de),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,z,E),m=mt.get(b,v.length),m.init(z),v.push(m),ht.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Yt.setFromProjectionMatrix(ht),nt=this.localClippingEnabled,Z=zt.init(this.clippingPlanes,nt),_=st.get(b,p.length),_.init(),p.push(_),j.enabled===!0&&j.isPresenting===!0){const at=y.xr.getDepthSensingMesh();at!==null&&kt(at,z,-1/0,y.sortObjects)}kt(b,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(O,tt),Wt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Wt&&vt.addToRenderList(_,b),this.info.render.frame++,Z===!0&&zt.beginShadows();const k=m.state.shadowsArray;ot.render(k,b,z),Z===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=_.opaque,F=_.transmissive;if(m.setupLights(),z.isArrayCamera){const at=z.cameras;if(F.length>0)for(let dt=0,St=at.length;dt<St;dt++){const pt=at[dt];Xt(V,F,b,pt)}Wt&&vt.render(b);for(let dt=0,St=at.length;dt<St;dt++){const pt=at[dt];Nt(_,b,pt,pt.viewport)}}else F.length>0&&Xt(V,F,b,z),Wt&&vt.render(b),Nt(_,b,z);E!==null&&(Ft.updateMultisampleRenderTarget(E),Ft.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(y,b,z),qt.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],Z===!0&&zt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function kt(b,z,k,V){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Yt.intersectsSprite(b)){V&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const dt=rt.update(b),St=b.material;St.visible&&_.push(b,dt,St,k,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Yt.intersectsObject(b))){const dt=rt.update(b),St=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ct.copy(dt.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(St)){const pt=dt.groups;for(let xt=0,wt=pt.length;xt<wt;xt++){const Pt=pt[xt],me=St[Pt.materialIndex];me&&me.visible&&_.push(b,dt,me,k,Ct.z,Pt)}}else St.visible&&_.push(b,dt,St,k,Ct.z,null)}}const at=b.children;for(let dt=0,St=at.length;dt<St;dt++)kt(at[dt],z,k,V)}function Nt(b,z,k,V){const F=b.opaque,at=b.transmissive,dt=b.transparent;m.setupLightsView(k),Z===!0&&zt.setGlobalState(y.clippingPlanes,k),V&&yt.viewport(S.copy(V)),F.length>0&&Ke(F,z,k),at.length>0&&Ke(at,z,k),dt.length>0&&Ke(dt,z,k),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Xt(b,z,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new vo(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?$c:Mr,minFilter:Zs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const at=m.state.transmissionRenderTarget[V.id],dt=V.viewport||S;at.setSize(dt.z,dt.w);const St=y.getRenderTarget();y.setRenderTarget(at),y.getClearColor(G),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&vt.render(k);const pt=y.toneMapping;y.toneMapping=fs;const xt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),Z===!0&&zt.setGlobalState(y.clippingPlanes,V),Ke(b,k,V),Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Pt=0,me=z.length;Pt<me;Pt++){const we=z[Pt],_e=we.object,gn=we.geometry,ce=we.material,Et=we.group;if(ce.side===ar&&_e.layers.test(V.layers)){const Ln=ce.side;ce.side=_i,ce.needsUpdate=!0,ie(_e,k,V,gn,ce,Et),ce.side=Ln,ce.needsUpdate=!0,wt=!0}}wt===!0&&(Ft.updateMultisampleRenderTarget(at),Ft.updateRenderTargetMipmap(at))}y.setRenderTarget(St),y.setClearColor(G,Y),xt!==void 0&&(V.viewport=xt),y.toneMapping=pt}function Ke(b,z,k){const V=z.isScene===!0?z.overrideMaterial:null;for(let F=0,at=b.length;F<at;F++){const dt=b[F],St=dt.object,pt=dt.geometry,xt=V===null?dt.material:V,wt=dt.group;St.layers.test(k.layers)&&ie(St,z,k,pt,xt,wt)}}function ie(b,z,k,V,F,at){b.onBeforeRender(y,z,k,V,F,at),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.transparent===!0&&F.side===ar&&F.forceSinglePass===!1?(F.side=_i,F.needsUpdate=!0,y.renderBufferDirect(k,z,V,F,b,at),F.side=xs,F.needsUpdate=!0,y.renderBufferDirect(k,z,V,F,b,at),F.side=ar):y.renderBufferDirect(k,z,V,F,b,at),b.onAfterRender(y,z,k,V,F,at)}function Ie(b,z,k){z.isScene!==!0&&(z=Ut);const V=Rt.get(b),F=m.state.lights,at=m.state.shadowsArray,dt=F.state.version,St=Q.getParameters(b,F.state,at,z,k),pt=Q.getProgramCacheKey(St);let xt=V.programs;V.environment=b.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(b.isMeshStandardMaterial?T:D).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,xt===void 0&&(b.addEventListener("dispose",At),xt=new Map,V.programs=xt);let wt=xt.get(pt);if(wt!==void 0){if(V.currentProgram===wt&&V.lightsStateVersion===dt)return He(b,St),wt}else St.uniforms=Q.getUniforms(b),b.onBeforeCompile(St,y),wt=Q.acquireProgram(St,pt),xt.set(pt,wt),V.uniforms=St.uniforms;const Pt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=zt.uniform),He(b,St),V.needsLights=Ei(b),V.lightsStateVersion=dt,V.needsLights&&(Pt.ambientLightColor.value=F.state.ambient,Pt.lightProbe.value=F.state.probe,Pt.directionalLights.value=F.state.directional,Pt.directionalLightShadows.value=F.state.directionalShadow,Pt.spotLights.value=F.state.spot,Pt.spotLightShadows.value=F.state.spotShadow,Pt.rectAreaLights.value=F.state.rectArea,Pt.ltc_1.value=F.state.rectAreaLTC1,Pt.ltc_2.value=F.state.rectAreaLTC2,Pt.pointLights.value=F.state.point,Pt.pointLightShadows.value=F.state.pointShadow,Pt.hemisphereLights.value=F.state.hemi,Pt.directionalShadowMap.value=F.state.directionalShadowMap,Pt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pt.spotShadowMap.value=F.state.spotShadowMap,Pt.spotLightMatrix.value=F.state.spotLightMatrix,Pt.spotLightMap.value=F.state.spotLightMap,Pt.pointShadowMap.value=F.state.pointShadowMap,Pt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=wt,V.uniformsList=null,wt}function _n(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Nh.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function He(b,z){const k=Rt.get(b);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.batchingColor=z.batchingColor,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.instancingMorph=z.instancingMorph,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function Be(b,z,k,V,F){z.isScene!==!0&&(z=Ut),Ft.resetTextureUnits();const at=z.fog,dt=V.isMeshStandardMaterial?z.environment:null,St=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ts,pt=(V.isMeshStandardMaterial?T:D).get(V.envMap||dt),xt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,wt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!k.morphAttributes.position,me=!!k.morphAttributes.normal,we=!!k.morphAttributes.color;let _e=fs;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_e=y.toneMapping);const gn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=gn!==void 0?gn.length:0,Et=Rt.get(V),Ln=m.state.lights;if(Z===!0&&(nt===!0||b!==M)){const Ki=b===M&&V.id===R;zt.setState(V,b,Ki)}let xe=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ln.state.version||Et.outputColorSpace!==St||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==pt||V.fog===!0&&Et.fog!==at||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==zt.numPlanes||Et.numIntersection!==zt.numIntersection)||Et.vertexAlphas!==xt||Et.vertexTangents!==wt||Et.morphTargets!==Pt||Et.morphNormals!==me||Et.morphColors!==we||Et.toneMapping!==_e||Et.morphTargetsCount!==ce)&&(xe=!0):(xe=!0,Et.__version=V.version);let pa=Et.currentProgram;xe===!0&&(pa=Ie(V,z,F));let Ao=!1,Ti=!1,Jd=!1;const ln=pa.getUniforms(),Ar=Et.uniforms;if(yt.useProgram(pa.program)&&(Ao=!0,Ti=!0,Jd=!0),V.id!==R&&(R=V.id,Ti=!0),Ao||M!==b){ln.setValue(L,"projectionMatrix",b.projectionMatrix),ln.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ki=ln.map.cameraPosition;Ki!==void 0&&Ki.setValue(L,ct.setFromMatrixPosition(b.matrixWorld)),Zt.logarithmicDepthBuffer&&ln.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ln.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ti=!0,Jd=!0)}if(F.isSkinnedMesh){ln.setOptional(L,F,"bindMatrix"),ln.setOptional(L,F,"bindMatrixInverse");const Ki=F.skeleton;Ki&&(Ki.boneTexture===null&&Ki.computeBoneTexture(),ln.setValue(L,"boneTexture",Ki.boneTexture,Ft))}F.isBatchedMesh&&(ln.setOptional(L,F,"batchingTexture"),ln.setValue(L,"batchingTexture",F._matricesTexture,Ft),ln.setOptional(L,F,"batchingIdTexture"),ln.setValue(L,"batchingIdTexture",F._indirectTexture,Ft),ln.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ln.setValue(L,"batchingColorTexture",F._colorsTexture,Ft));const $d=k.morphAttributes;if(($d.position!==void 0||$d.normal!==void 0||$d.color!==void 0)&&Lt.update(F,k,pa),(Ti||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,ln.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ar.envMap.value=pt,Ar.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(Ar.envMapIntensity.value=z.environmentIntensity),Ti&&(ln.setValue(L,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&Te(Ar,Jd),at&&V.fog===!0&&bt.refreshFogUniforms(Ar,at),bt.refreshMaterialUniforms(Ar,V,I,N,m.state.transmissionRenderTarget[b.id]),Nh.upload(L,_n(Et),Ar,Ft)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Nh.upload(L,_n(Et),Ar,Ft),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ln.setValue(L,"center",F.center),ln.setValue(L,"modelViewMatrix",F.modelViewMatrix),ln.setValue(L,"normalMatrix",F.normalMatrix),ln.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ki=V.uniformsGroups;for(let tp=0,bb=Ki.length;tp<bb;tp++){const dv=Ki[tp];ge.update(dv,pa),ge.bind(dv,pa)}}return pa}function Te(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Ei(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,z,k){Rt.get(b.texture).__webglTexture=z,Rt.get(b.depthTexture).__webglTexture=k;const V=Rt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const k=Rt.get(b);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,k=0){E=b,C=z,A=k;let V=!0,F=null,at=!1,dt=!1;if(b){const pt=Rt.get(b);pt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):pt.__webglFramebuffer===void 0?Ft.setupRenderTarget(b):pt.__hasExternalTextures&&Ft.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);const xt=b.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);const wt=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(wt[z])?F=wt[z][k]:F=wt[z],at=!0):b.samples>0&&Ft.useMultisampledRTT(b)===!1?F=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(wt)?F=wt[k]:F=wt,S.copy(b.viewport),U.copy(b.scissor),P=b.scissorTest}else S.copy(w).multiplyScalar(I).floor(),U.copy(ut).multiplyScalar(I).floor(),P=Dt;if(yt.bindFramebuffer(L.FRAMEBUFFER,F)&&V&&yt.drawBuffers(b,F),yt.viewport(S),yt.scissor(U),yt.setScissorTest(P),at){const pt=Rt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,pt.__webglTexture,k)}else if(dt){const pt=Rt.get(b.texture),xt=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,k||0,xt)}R=-1},this.readRenderTargetPixels=function(b,z,k,V,F,at,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){yt.bindFramebuffer(L.FRAMEBUFFER,St);try{const pt=b.texture,xt=pt.format,wt=pt.type;if(!Zt.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-V&&k>=0&&k<=b.height-F&&L.readPixels(z,k,V,F,Gt.convert(xt),Gt.convert(wt),at)}finally{const pt=E!==null?Rt.get(E).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(b,z,k,V,F,at,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){yt.bindFramebuffer(L.FRAMEBUFFER,St);try{const pt=b.texture,xt=pt.format,wt=pt.type;if(!Zt.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-V&&k>=0&&k<=b.height-F){const Pt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.bufferData(L.PIXEL_PACK_BUFFER,at.byteLength,L.STREAM_READ),L.readPixels(z,k,V,F,Gt.convert(xt),Gt.convert(wt),0),L.flush();const me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await i3(L,me,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,at)}finally{L.deleteBuffer(Pt),L.deleteSync(me)}return at}}finally{const pt=E!==null?Rt.get(E).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(b,z=null,k=0){b.isTexture!==!0&&(pc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-k),F=Math.floor(b.image.width*V),at=Math.floor(b.image.height*V),dt=z!==null?z.x:0,St=z!==null?z.y:0;Ft.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,dt,St,F,at),yt.unbindTexture()},this.copyTextureToTexture=function(b,z,k=null,V=null,F=0){b.isTexture!==!0&&(pc("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],z=arguments[2],F=arguments[3]||0,k=null);let at,dt,St,pt,xt,wt;k!==null?(at=k.max.x-k.min.x,dt=k.max.y-k.min.y,St=k.min.x,pt=k.min.y):(at=b.image.width,dt=b.image.height,St=0,pt=0),V!==null?(xt=V.x,wt=V.y):(xt=0,wt=0);const Pt=Gt.convert(z.format),me=Gt.convert(z.type);Ft.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const we=L.getParameter(L.UNPACK_ROW_LENGTH),_e=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=L.getParameter(L.UNPACK_SKIP_PIXELS),ce=L.getParameter(L.UNPACK_SKIP_ROWS),Et=L.getParameter(L.UNPACK_SKIP_IMAGES),Ln=b.isCompressedTexture?b.mipmaps[F]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ln.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ln.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,pt),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,xt,wt,at,dt,Pt,me,Ln.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,xt,wt,Ln.width,Ln.height,Pt,Ln.data):L.texSubImage2D(L.TEXTURE_2D,F,xt,wt,at,dt,Pt,me,Ln),L.pixelStorei(L.UNPACK_ROW_LENGTH,we),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Et),F===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(b,z,k=null,V=null,F=0){b.isTexture!==!0&&(pc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,b=arguments[2],z=arguments[3],F=arguments[4]||0);let at,dt,St,pt,xt,wt,Pt,me,we;const _e=b.isCompressedTexture?b.mipmaps[F]:b.image;k!==null?(at=k.max.x-k.min.x,dt=k.max.y-k.min.y,St=k.max.z-k.min.z,pt=k.min.x,xt=k.min.y,wt=k.min.z):(at=_e.width,dt=_e.height,St=_e.depth,pt=0,xt=0,wt=0),V!==null?(Pt=V.x,me=V.y,we=V.z):(Pt=0,me=0,we=0);const gn=Gt.convert(z.format),ce=Gt.convert(z.type);let Et;if(z.isData3DTexture)Ft.setTexture3D(z,0),Et=L.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ft.setTexture2DArray(z,0),Et=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Ln=L.getParameter(L.UNPACK_ROW_LENGTH),xe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pa=L.getParameter(L.UNPACK_SKIP_PIXELS),Ao=L.getParameter(L.UNPACK_SKIP_ROWS),Ti=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_e.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Et,F,Pt,me,we,at,dt,St,gn,ce,_e.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,F,Pt,me,we,at,dt,St,gn,_e.data):L.texSubImage3D(Et,F,Pt,me,we,at,dt,St,gn,ce,_e),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ln),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pa),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ao),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ti),F===0&&z.generateMipmaps&&L.generateMipmap(Et),yt.unbindTexture()},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&Ft.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ft.setTextureCube(b,0):b.isData3DTexture?Ft.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ft.setTexture2DArray(b,0):Ft.setTexture2D(b,0),yt.unbindTexture()},this.resetState=function(){C=0,A=0,E=null,yt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===uv?"display-p3":"srgb",n.unpackColorSpace=Me.workingColorSpace===Kd?"display-p3":"srgb"}}class mO extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _O extends vi{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Am=new nn,yS=new X,xS=new X;class gO{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fv,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;yS.setFromMatrixPosition(t.matrixWorld),n.position.copy(yS),xS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(xS),n.updateMatrixWorld(),Am.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Am),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Am)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const SS=new nn,Ru=new X,Cm=new X;class vO extends gO{constructor(){super(new Ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,a=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ru.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ru),Cm.copy(i.position),Cm.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Cm),i.updateMatrixWorld(),a.makeTranslation(-Ru.x,-Ru.y,-Ru.z),SS.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(SS)}}class yO extends _O{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new vO}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nv);function xO(){const e=Ee.useRef(null),t=Ee.useRef({x:0,y:0});return Ee.useEffect(()=>{if(!e.current)return;const n=e.current.clientWidth,i=e.current.clientHeight,a=new mO,r=new Ni(75,n/i,.1,1e3),s=new pO({antialias:!0,alpha:!0});s.setSize(n,i),s.setClearColor(657930,0),s.setPixelRatio(window.devicePixelRatio),e.current.appendChild(s.domElement),r.position.z=3;const o=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,l=`
      varying vec2 vUv;
      uniform float uTime;
      uniform vec2 uMouse;
      
      float noise(vec2 st) {
        return sin(st.x * 10.0 + uTime) * cos(st.y * 8.0 + uTime * 0.7) * 0.5 + 0.5;
      }
      
      void main() {
        vec2 uv = vUv - 0.5;
        
        // Blob shape
        float dist = length(uv);
        float blob = smoothstep(0.5, 0.2, dist);
        
        // Distortion baseado em mouse e tempo
        vec2 distort = (uMouse - 0.5) * 0.3;
        dist += noise(uv + distort) * 0.15;
        dist += sin(uTime * 0.3) * 0.1;
        
        blob = smoothstep(0.5, 0.15, dist);
        
        // Luxury gradient colors
        vec3 col1 = vec3(0.55, 0.35, 0.93); // Purple luxury
        vec3 col2 = vec3(0.42, 0.31, 0.94); // Deep purple
        vec3 col3 = vec3(0.0, 0.85, 1.0);   // Cyan tech
        
        // Color mixing
        vec3 col = mix(col1, col2, sin(uTime * 0.4 + dist * 8.0) * 0.5 + 0.5);
        col = mix(col, col3, blob * 0.3 + sin(uTime * 0.5) * 0.2);
        
        // Glow and opacity
        float alpha = blob * (0.7 + sin(uTime) * 0.2);
        vec3 glowCol = col * (1.0 + blob * 0.5);
        
        gl_FragColor = vec4(glowCol, alpha);
      }
    `,u=new rf(2,2,64,64),c=new Tr({vertexShader:o,fragmentShader:l,uniforms:{uTime:{value:0},uMouse:{value:new pe(.5,.5)}},transparent:!0,blending:Z_}),d=new Pa(u,c);a.add(d);const f=new yO(16777215,1,100);f.position.set(5,5,5),a.add(f);const h=p=>{const v=e.current.getBoundingClientRect(),y=p.clientX-v.left,x=p.clientY-v.top;t.current={x:y/n,y:1-x/i},c.uniforms.uMouse.value.set(t.current.x,t.current.y)};window.addEventListener("mousemove",h);let g;const _=()=>{g=requestAnimationFrame(_),c.uniforms.uTime.value+=.01,d.rotation.z+=2e-4,s.render(a,r)};_();const m=()=>{const p=e.current.clientWidth,v=e.current.clientHeight;r.aspect=p/v,r.updateProjectionMatrix(),s.setSize(p,v)};return window.addEventListener("resize",m),()=>{var p;window.removeEventListener("mousemove",h),window.removeEventListener("resize",m),cancelAnimationFrame(g),s.dispose(),u.dispose(),c.dispose(),(p=e.current)!=null&&p.contains(s.domElement)&&e.current.removeChild(s.domElement)}},[]),H.createElement("div",{ref:e,style:{width:"100%",height:"100%",position:"absolute"}})}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sb=(...e)=>e.filter((t,n,i)=>!!t&&i.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=Ee.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:r,iconNode:s,...o},l)=>Ee.createElement("svg",{ref:l,...MO,width:t,height:t,stroke:e,strokeWidth:i?Number(n)*24/Number(t):n,className:Sb("lucide",a),...o},[...s.map(([u,c])=>Ee.createElement(u,c)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=(e,t)=>{const n=Ee.forwardRef(({className:i,...a},r)=>Ee.createElement(EO,{ref:r,iconNode:t,className:Sb(`lucide-${SO(e)}`,i),...a}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=Mi("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=Mi("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=Mi("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=Mi("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=Mi("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=Mi("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=Mi("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=Mi("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=Mi("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=Mi("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=Mi("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=Mi("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=Mi("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=Mi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);Dn.registerPlugin(Qt);function PO(){const e=Ee.useRef(null),t=Ee.useRef(null),n=Ee.useRef(null);return Ee.useEffect(()=>{const i=e.current;if(!i)return;const a=i.querySelectorAll(".letter");Dn.fromTo(a,{opacity:0,y:20,rotationZ:-10},{opacity:1,y:0,rotationZ:0,duration:.8,stagger:.08,ease:"back.out"}),Dn.fromTo(t.current,{opacity:0,y:20},{opacity:1,y:0,duration:1,delay:.4}),Dn.fromTo(n.current,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.8,delay:.6,ease:"elastic.out"})},[]),H.createElement("section",{className:"hero-advanced"},H.createElement("div",{className:"hero-background"},H.createElement(xO,null)),H.createElement("div",{className:"hero-overlay"}),H.createElement("div",{className:"hero-content"},H.createElement("h1",{ref:e,className:"hero-title"},"IA que entende seu negócio".split("").map((i,a)=>H.createElement("span",{key:a,className:`letter ${i===" "?"space":""}`},i))),H.createElement("p",{ref:t,className:"hero-subtitle"},"Automação inteligente de atendimento. 24/7, sem limites, com luxo."),H.createElement("div",{ref:n,className:"hero-cta"},H.createElement("button",{className:"btn btn-primary"},"Comece Agora",H.createElement(Mb,{size:20}))),H.createElement("div",{className:"hero-stats"},H.createElement("div",{className:"stat"},H.createElement("span",{className:"stat-number"},"500+"),H.createElement("span",{className:"stat-label"},"Empresas Premium")),H.createElement("div",{className:"stat"},H.createElement("span",{className:"stat-number"},"2M+"),H.createElement("span",{className:"stat-label"},"Atendimentos/mês")),H.createElement("div",{className:"stat"},H.createElement("span",{className:"stat-number"},"99.9%"),H.createElement("span",{className:"stat-label"},"Uptime Garantido")))))}Dn.registerPlugin(Qt);const zO=[{icon:TO,title:"IA Inteligente",description:"Machine learning que evolui com cada interação",gradient:"from-purple-500 to-blue-500"},{icon:RO,title:"Real-time Analytics",description:"Dashboard com dados instantâneos e precisos",gradient:"from-blue-500 to-cyan-500"},{icon:OO,title:"Ultra Rápido",description:"Latência sub-milissegundos garantida",gradient:"from-cyan-500 to-green-500"},{icon:DO,title:"Segurança Premium",description:"Criptografia militar + LGPD compliant",gradient:"from-green-500 to-yellow-500"}];function IO(){const e=Ee.useRef(null);return Ee.useEffect(()=>{var n;const t=(n=e.current)==null?void 0:n.querySelectorAll(".feature-card");t&&t.forEach((i,a)=>{Dn.fromTo(i,{opacity:0,y:50,rotationX:20},{opacity:1,y:0,rotationX:0,duration:1,delay:a*.15,ease:"back.out",scrollTrigger:{trigger:i,start:"top 80%",toggleActions:"play none none reverse"}}),i.addEventListener("mouseenter",()=>{Dn.to(i,{rotationX:-10,rotationY:10,y:-20,boxShadow:"0 40px 80px rgba(212, 175, 55, 0.4)",duration:.4})}),i.addEventListener("mouseleave",()=>{Dn.to(i,{rotationX:0,rotationY:0,y:0,boxShadow:"0 20px 40px rgba(127, 90, 240, 0.2)",duration:.4})})})},[]),H.createElement("section",{ref:e,className:"features-advanced"},H.createElement("div",{className:"container"},H.createElement("h2",{className:"section-title"},H.createElement("span",{className:"gradient-text"},"Tecnologia Premium")," de Próxima Geração"),H.createElement("div",{className:"features-grid"},zO.map((t,n)=>{const i=t.icon;return H.createElement("div",{key:n,className:"feature-card",style:{perspective:"1000px"}},H.createElement("div",{className:"feature-icon"},H.createElement(i,{size:32})),H.createElement("h3",null,t.title),H.createElement("p",null,t.description))}))))}Dn.registerPlugin(Qt);function BO(){const e=Ee.useRef(null);return Ee.useEffect(()=>{var n;const t=(n=e.current)==null?void 0:n.querySelectorAll(".about-item");t&&t.forEach((i,a)=>{Dn.fromTo(i,{opacity:0,x:a%2===0?-50:50},{opacity:1,x:0,duration:1,delay:a*.2,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 80%"}})})},[]),H.createElement("section",{ref:e,className:"about-advanced"},H.createElement("div",{className:"container"},H.createElement("div",{className:"about-header"},H.createElement("h2",null,H.createElement("span",{className:"gradient-text-gold"},"Automação inteligente")," que entende seu negócio"),H.createElement("p",{className:"about-subtitle"},"Combinamos tecnologia de ponta com compreensão profunda do atendimento ao cliente.")),H.createElement("div",{className:"about-grid"},H.createElement("div",{className:"about-item"},H.createElement("div",{className:"about-icon"},"🤖"),H.createElement("h3",null,"Tecnologia IA Avançada"),H.createElement("p",null,"Machine learning que aprende com cada interação e melhora continuamente")),H.createElement("div",{className:"about-item"},H.createElement("div",{className:"about-icon"},"⚡"),H.createElement("h3",null,"Implementação Rápida"),H.createElement("p",null,"Deploy em dias, não meses. Pronto para produção em 48 horas")),H.createElement("div",{className:"about-item"},H.createElement("div",{className:"about-icon"},"🔒"),H.createElement("h3",null,"Segurança Premium"),H.createElement("p",null,"Criptografia military-grade, LGPD compliant, backups redundantes")),H.createElement("div",{className:"about-item"},H.createElement("div",{className:"about-icon"},"📊"),H.createElement("h3",null,"Analytics em Tempo Real"),H.createElement("p",null,"Dashboard intuitivo com métricas detalhadas e insights acionáveis")),H.createElement("div",{className:"about-item"},H.createElement("div",{className:"about-icon"},"💬"),H.createElement("h3",null,"Suporte 24/7 Premium"),H.createElement("p",null,"Equipe dedicada respondendo em minutos, não horas")),H.createElement("div",{className:"about-item"},H.createElement("div",{className:"about-icon"},"🚀"),H.createElement("h3",null,"Escalabilidade Ilimitada"),H.createElement("p",null,"Cresce com seu negócio, de 100 a 1 milhão de atendimentos/mês")))))}Dn.registerPlugin(Qt);const FO=[{name:"Starter",price:"299",description:"Perfeito para começar",features:["Até 1.000 atendimentos/mês","Chat + Email","Analytics básico","Suporte por email","Integração 1 canal"],highlight:!1},{name:"Pro",price:"999",description:"Para crescimento rápido",features:["Até 50.000 atendimentos/mês","Chat + Email + WhatsApp","Analytics avançado","Suporte prioritário 24/7","Integrações ilimitadas","API customizada","Team collaboration"],highlight:!0},{name:"Enterprise",price:"Custom",description:"Para operações em escala",features:["Atendimentos ilimitados","Todos os canais + custom","Analytics + BI integration","Suporte dedicado 24/7","SLA 99.99% uptime","Deployment on-premise","Team ilimitado","Consultoria incluída"],highlight:!1}];function HO(){const e=Ee.useRef(null);return Ee.useEffect(()=>{var n;const t=(n=e.current)==null?void 0:n.querySelectorAll(".pricing-card");t&&t.forEach((i,a)=>{Dn.fromTo(i,{opacity:0,y:50},{opacity:1,y:0,duration:1,delay:a*.2,ease:"back.out",scrollTrigger:{trigger:i,start:"top 80%"}})})},[]),H.createElement("section",{ref:e,className:"pricing-advanced"},H.createElement("div",{className:"container"},H.createElement("h2",{className:"section-title"},"Preços ",H.createElement("span",{className:"gradient-text"},"Transparentes")," e Justos"),H.createElement("div",{className:"pricing-grid"},FO.map((t,n)=>H.createElement("div",{key:n,className:`pricing-card ${t.highlight?"highlight":""}`},t.highlight&&H.createElement("div",{className:"badge-highlight"},"MAIS POPULAR"),H.createElement("h3",null,t.name),H.createElement("p",{className:"plan-description"},t.description),H.createElement("div",{className:"price"},H.createElement("span",{className:"currency"},"$"),H.createElement("span",{className:"amount"},t.price),t.price!=="Custom"&&H.createElement("span",{className:"period"},"/mês")),H.createElement("button",{className:`btn ${t.highlight?"btn-primary":"btn-secondary"}`},"Começar Agora"),H.createElement("ul",{className:"features-list"},t.features.map((i,a)=>H.createElement("li",{key:a},H.createElement(AO,{size:20}),H.createElement("span",null,i)))))))))}Dn.registerPlugin(Qt);const GO=[{id:1,title:"IA: O Futuro do Atendimento ao Cliente",excerpt:"Como machine learning está transformando a forma como as empresas interagem com clientes...",date:"15 Abr 2024",author:"Camillo Franco",category:"IA"},{id:2,title:"Casos de Sucesso: Redução de 70% em Custos",excerpt:"Veja como empresas líderes estão economizando milhões com automação inteligente...",date:"10 Abr 2024",author:"Camillo Franco",category:"Cases"},{id:3,title:"Segurança e Compliance em Chatbots IA",excerpt:"Garantindo LGPD, PCI-DSS e segurança de dados em automações de atendimento...",date:"05 Abr 2024",author:"Camillo Franco",category:"Segurança"}];function VO(){const e=Ee.useRef(null);return Ee.useEffect(()=>{var n;const t=(n=e.current)==null?void 0:n.querySelectorAll(".blog-post");t&&t.forEach((i,a)=>{Dn.fromTo(i,{opacity:0,y:30},{opacity:1,y:0,duration:.8,delay:a*.15,ease:"power3.out",scrollTrigger:{trigger:i,start:"top 85%"}})})},[]),H.createElement("section",{ref:e,className:"blog-advanced"},H.createElement("div",{className:"container"},H.createElement("h2",{className:"section-title"},"Blog & ",H.createElement("span",{className:"gradient-text"},"Resources")),H.createElement("div",{className:"blog-grid"},GO.map(t=>H.createElement("article",{key:t.id,className:"blog-post"},H.createElement("div",{className:"post-category"},t.category),H.createElement("h3",null,t.title),H.createElement("p",null,t.excerpt),H.createElement("div",{className:"post-meta"},H.createElement("span",{className:"meta-item"},H.createElement(bO,{size:16}),t.date),H.createElement("span",{className:"meta-item"},H.createElement(NO,{size:16}),t.author)),H.createElement("a",{href:"#",className:"read-more"},"Ler Mais",H.createElement(Mb,{size:16})))))))}const kO=[{question:"Como funciona a implementação?",answer:"A implementação leva 24-48 horas. Criamos uma customização leve da IA para sua empresa, integramos seus sistemas, treinamos a equipe e colocamos em produção."},{question:"Qual é o tempo de retorno (ROI)?",answer:"Clientes típicos veem ROI positivo em 3-6 meses. A redução de custos com atendimento compensa o investimento rapidamente, especialmente em operações de alto volume."},{question:"Como é garantida a qualidade?",answer:"Temos 3 camadas: IA treinada em melhores práticas, validação humana em respostas críticas, e feedback loop contínuo que melhora a IA automaticamente."},{question:"Seus dados ficam seguros?",answer:"Criptografia AES-256 end-to-end, servidores em múltiplas regiões, backups automáticos, LGPD compliant, e audits de segurança mensais."},{question:"Posso usar em múltiplos canais?",answer:"Sim! Suportamos Chat, Email, WhatsApp, Instagram, e qualquer canal customizado. Uma única IA gerencia todos simultaneamente."},{question:"E se a IA não entender algo?",answer:"Escala automática para humanos. Quando a IA detecta que não consegue resolver, passa para seu time imediatamente, sem perder contexto."}];function XO(){const[e,t]=Ee.useState(0),n=Ee.useRef(null);return Ee.useEffect(()=>{var a;const i=(a=n.current)==null?void 0:a.querySelectorAll(".faq-item");i&&i.forEach((r,s)=>{Dn.fromTo(r,{opacity:0,y:20},{opacity:1,y:0,duration:.6,delay:s*.1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 85%"}})})},[]),H.createElement("section",{ref:n,className:"faq-advanced"},H.createElement("div",{className:"container"},H.createElement("h2",{className:"section-title"},"Dúvidas ",H.createElement("span",{className:"gradient-text"},"Frequentes")),H.createElement("div",{className:"faq-list"},kO.map((i,a)=>H.createElement("div",{key:a,className:`faq-item ${e===a?"open":""}`,onClick:()=>t(e===a?-1:a)},H.createElement("div",{className:"faq-question"},H.createElement("h3",null,i.question),H.createElement(CO,{size:24,style:{transform:e===a?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s"}})),e===a&&H.createElement("div",{className:"faq-answer"},i.answer))))))}Dn.registerPlugin(Qt);function WO(){const e=Ee.useRef(null);return Ee.useEffect(()=>{Dn.fromTo(e.current,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:e.current,start:"top 70%"}})},[]),H.createElement("section",{ref:e,className:"cta-advanced"},H.createElement("div",{className:"container"},H.createElement("h2",null,"Pronto para Transformar seu Atendimento?"),H.createElement("p",null,"Agende uma demo gratuita de 30 minutos com nossa equipe. Sem compromisso."),H.createElement("form",{className:"cta-form",onSubmit:t=>t.preventDefault()},H.createElement("input",{type:"email",placeholder:"seu@email.com",required:!0}),H.createElement("button",{type:"submit",className:"btn btn-primary"},"Agendar Demo")),H.createElement("div",{className:"cta-contact"},H.createElement("a",{href:"mailto:todofacilitiesoficial@gmail.com",className:"contact-link"},H.createElement(Tb,{size:20}),"todofacilitiesoficial@gmail.com"),H.createElement("a",{href:"tel:+5585999999999",className:"contact-link"},H.createElement(UO,{size:20}),"+55 85 9 9999-9999"),H.createElement("a",{href:"#",className:"contact-link"},H.createElement(Eb,{size:20}),"LinkedIn"))))}function qO(){const e=new Date().getFullYear();return H.createElement("footer",{className:"footer-advanced"},H.createElement("div",{className:"container"},H.createElement("div",{className:"footer-content"},H.createElement("div",{className:"footer-section"},H.createElement("h4",null,"To,Do"),H.createElement("p",null,"IA premium de próxima geração para atendimento ao cliente.")),H.createElement("div",{className:"footer-section"},H.createElement("h4",null,"Produto"),H.createElement("ul",null,H.createElement("li",null,H.createElement("a",{href:"#features"},"Features")),H.createElement("li",null,H.createElement("a",{href:"#pricing"},"Pricing")),H.createElement("li",null,H.createElement("a",{href:"#security"},"Segurança")),H.createElement("li",null,H.createElement("a",{href:"#api"},"API Docs")))),H.createElement("div",{className:"footer-section"},H.createElement("h4",null,"Empresa"),H.createElement("ul",null,H.createElement("li",null,H.createElement("a",{href:"#about"},"Sobre")),H.createElement("li",null,H.createElement("a",{href:"#blog"},"Blog")),H.createElement("li",null,H.createElement("a",{href:"#careers"},"Carreiras")),H.createElement("li",null,H.createElement("a",{href:"#contact"},"Contato")))),H.createElement("div",{className:"footer-section"},H.createElement("h4",null,"Seguir"),H.createElement("div",{className:"social-links"},H.createElement("a",{href:"#","aria-label":"Twitter"},H.createElement(LO,{size:20})),H.createElement("a",{href:"#","aria-label":"LinkedIn"},H.createElement(Eb,{size:20})),H.createElement("a",{href:"#","aria-label":"GitHub"},H.createElement(wO,{size:20})),H.createElement("a",{href:"mailto:todofacilitiesoficial@gmail.com","aria-label":"Email"},H.createElement(Tb,{size:20}))))),H.createElement("div",{className:"footer-bottom"},H.createElement("p",null,"© ",e," To,Do. Todos os direitos reservados."),H.createElement("div",{className:"footer-links"},H.createElement("a",{href:"#privacy"},"Privacidade"),H.createElement("a",{href:"#terms"},"Termos"),H.createElement("a",{href:"#cookies"},"Cookies")))))}function YO(){return Ee.useRef(null),Ee.useEffect(()=>{const e=document.createElement("div");e.className="cursor",e.style.position="fixed",e.style.width="24px",e.style.height="24px",e.style.border="2px solid #D4AF37",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.zIndex="9999",e.style.mixBlendMode="screen",e.style.transition="width 0.3s, height 0.3s",e.style.boxShadow="0 0 20px rgba(212, 175, 55, 0.5)",document.body.appendChild(e);let t=0,n=0;const i=s=>{t=s.clientX,n=s.clientY,e.style.left=t-12+"px",e.style.top=n-12+"px"},a=()=>{e.style.width="32px",e.style.height="32px",e.style.boxShadow="0 0 40px rgba(212, 175, 55, 0.8)"},r=()=>{e.style.width="24px",e.style.height="24px",e.style.boxShadow="0 0 20px rgba(212, 175, 55, 0.5)"};return window.addEventListener("mousemove",i),document.addEventListener("mouseenter",a),document.addEventListener("mouseleave",r),()=>{window.removeEventListener("mousemove",i),document.removeEventListener("mouseenter",a),document.removeEventListener("mouseleave",r),document.body.removeChild(e)}},[]),H.createElement("main",{className:"app-advanced"},H.createElement(PO,null),H.createElement(IO,null),H.createElement(BO,null),H.createElement(HO,null),H.createElement(VO,null),H.createElement(XO,null),H.createElement(WO,null),H.createElement(qO,null))}SC.createRoot(document.getElementById("root")).render(H.createElement(H.StrictMode,null,H.createElement(YO,null)));
