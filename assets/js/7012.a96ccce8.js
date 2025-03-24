"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[7012],{7356:(e,t,n)=>{n.d(t,{A:()=>i});var r,o=n(6540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9m-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3"})))}},8411:(e,t,n)=>{n.d(t,{A:()=>i});var r,o=n(6540);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"m0 93.7 183.6-25.3v177.4H0zm0 324.6 183.6 25.3V268.4H0zm203.8 28L448 480V268.4H203.8zm0-380.6v180.1H448V32z"})))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},4335:(e,t,n)=>{n.d(t,{A:()=>Ot});var r={};function o(e,t){return function(){return e.apply(t,arguments)}}n.r(r),n.d(r,{hasBrowserEnv:()=>ue,hasStandardBrowserEnv:()=>de,hasStandardBrowserWebWorkerEnv:()=>pe,navigator:()=>fe,origin:()=>he});const{toString:s}=Object.prototype,{getPrototypeOf:i}=Object,a=(c=Object.create(null),e=>{const t=s.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const l=e=>(e=e.toLowerCase(),t=>a(t)===e),u=e=>t=>typeof t===e,{isArray:f}=Array,d=u("undefined");const p=l("ArrayBuffer");const h=u("string"),m=u("function"),b=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==a(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},w=l("Date"),E=l("File"),O=l("Blob"),R=l("FileList"),S=l("URLSearchParams"),[v,T,A,x]=["ReadableStream","Request","Response","Headers"].map(l);function C(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function j(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,P=e=>!d(e)&&e!==N;const U=(F="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>F&&e instanceof F);var F;const _=l("HTMLFormElement"),L=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),B=l("RegExp"),k=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)};const D=l("AsyncFunction"),q=(M="function"==typeof setImmediate,z=m(N.postMessage),M?setImmediate:z?(I=`axios@${Math.random()}`,H=[],N.addEventListener("message",(({source:e,data:t})=>{e===N&&t===I&&H.length&&H.shift()()}),!1),e=>{H.push(e),N.postMessage(I,"*")}):e=>setTimeout(e));var M,z,I,H;const J="undefined"!=typeof queueMicrotask?queueMicrotask.bind(N):"undefined"!=typeof process&&process.nextTick||q,V={isArray:f,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:h,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isReadableStream:v,isRequest:T,isResponse:A,isHeaders:x,isUndefined:d,isDate:w,isFile:E,isBlob:O,isRegExp:B,isFunction:m,isStream:e=>y(e)&&m(e.pipe),isURLSearchParams:S,isTypedArray:U,isFileList:R,forEach:C,merge:function e(){const{caseless:t}=P(this)&&this||{},n={},r=(r,o)=>{const s=t&&j(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):f(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&C(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(C(t,((t,r)=>{n&&m(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:l,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:_,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:k,freezeMethods:e=>{k(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:j,global:N,isContextDefined:P,isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=f(e)?[]:{};return C(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:D,isThenable:e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch),setImmediate:q,asap:J};function W(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}V.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.status}}});const K=W.prototype,$={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{$[e]={value:e}})),Object.defineProperties(W,$),Object.defineProperty(K,"isAxiosError",{value:!0}),W.from=(e,t,n,r,o,s)=>{const i=Object.create(K);return V.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),W.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const X=W;function G(e){return V.isPlainObject(e)||V.isArray(e)}function Q(e){return V.endsWith(e,"[]")?e.slice(0,-2):e}function Z(e,t,n){return e?e.concat(t).map((function(e,t){return e=Q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Y=V.toFlatObject(V,{},null,(function(e){return/^is[A-Z]/.test(e)}));const ee=function(e,t,n){if(!V.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!V.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&V.isSpecCompliantForm(t);if(!V.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(V.isDate(e))return e.toISOString();if(!a&&V.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(e)||V.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(V.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(V.isArray(e)&&function(e){return V.isArray(e)&&!e.some(G)}(e)||(V.isFileList(e)||V.endsWith(n,"[]"))&&(a=V.toArray(e)))return n=Q(n),a.forEach((function(e,r){!V.isUndefined(e)&&null!==e&&t.append(!0===i?Z([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!G(e)||(t.append(Z(o,n,s),c(e)),!1)}const u=[],f=Object.assign(Y,{defaultVisitor:l,convertValue:c,isVisitable:G});if(!V.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!V.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),V.forEach(n,(function(n,s){!0===(!(V.isUndefined(n)||null===n)&&o.call(t,n,V.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ne(e,t){this._pairs=[],e&&ee(e,this,t)}const re=ne.prototype;re.append=function(e,t){this._pairs.push([e,t])},re.toString=function(e){const t=e?function(t){return e.call(this,t,te)}:te;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const oe=ne;function se(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ie(e,t,n){if(!t)return e;const r=n&&n.encode||se;V.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(s=o?o(t,n):V.isURLSearchParams(t)?t.toString():new oe(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}const ae=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:oe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ue="undefined"!=typeof window&&"undefined"!=typeof document,fe="object"==typeof navigator&&navigator||void 0,de=ue&&(!fe||["ReactNative","NativeScript","NS"].indexOf(fe.product)<0),pe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,he=ue&&window.location.href||"http://localhost",me={...r,...le};const be=function(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&V.isArray(r)?r.length:s,a)return V.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&V.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&V.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(V.isFormData(e)&&V.isFunction(e.entries)){const n={};return V.forEachEntry(e,((e,r)=>{t(function(e){return V.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ye={transitional:ce,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=V.isObject(e);o&&V.isHTMLForm(e)&&(e=new FormData(e));if(V.isFormData(e))return r?JSON.stringify(be(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ee(e,new me.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return me.isNode&&V.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=V.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ee(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(V.isString(e))try{return(t||JSON.parse)(e),V.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ye.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw X.from(o,X.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],(e=>{ye.headers[e]={}}));const ge=ye,we=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ee=Symbol("internals");function Oe(e){return e&&String(e).trim().toLowerCase()}function Re(e){return!1===e||null==e?e:V.isArray(e)?e.map(Re):String(e)}function Se(e,t,n,r,o){return V.isFunction(r)?r.call(this,t,n):(o&&(t=n),V.isString(t)?V.isString(r)?-1!==t.indexOf(r):V.isRegExp(r)?r.test(t):void 0:void 0)}class ve{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Oe(t);if(!o)throw new Error("header name must be a non-empty string");const s=V.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Re(e))}const s=(e,t)=>V.forEach(e,((e,n)=>o(e,n,t)));if(V.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(V.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&we[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(V.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=Oe(e)){const n=V.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(V.isFunction(t))return t.call(this,e,n);if(V.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Oe(e)){const n=V.findKey(this,e);return!(!n||void 0===this[n]||t&&!Se(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Oe(e)){const o=V.findKey(n,e);!o||t&&!Se(0,n[o],o,t)||(delete n[o],r=!0)}}return V.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Se(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return V.forEach(this,((r,o)=>{const s=V.findKey(n,o);if(s)return t[s]=Re(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Re(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return V.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&V.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Ee]=this[Ee]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Oe(e);t[r]||(!function(e,t){const n=V.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}}ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(ve.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),V.freezeMethods(ve);const Te=ve;function Ae(e,t){const n=this||ge,r=t||n,o=Te.from(r.headers);let s=r.data;return V.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function xe(e){return!(!e||!e.__CANCEL__)}function Ce(e,t,n){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,n),this.name="CanceledError"}V.inherits(Ce,X,{__CANCEL__:!0});const je=Ce;function Ne(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Pe=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}};const Ue=function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]},Fe=(e,t,n=3)=>{let r=0;const o=Pe(50,250);return Ue((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},_e=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Le=e=>(...t)=>V.asap((()=>e(...t))),Be=me.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,me.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(me.origin),me.navigator&&/(msie|trident)/i.test(me.navigator.userAgent)):()=>!0,ke=me.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];V.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),V.isString(r)&&i.push("path="+r),V.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function De(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const qe=e=>e instanceof Te?{...e}:e;function Me(e,t){t=t||{};const n={};function r(e,t,n,r){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:r},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function o(e,t,n,o){return V.isUndefined(t)?V.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function s(e,t){if(!V.isUndefined(t))return r(void 0,t)}function i(e,t){return V.isUndefined(t)?V.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,n)=>o(qe(e),qe(t),0,!0)};return V.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);V.isUndefined(i)&&s!==a||(n[r]=i)})),n}const ze=e=>{const t=Me({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Te.from(a),t.url=ie(De(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),V.isFormData(r))if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(me.hasStandardBrowserEnv&&(o&&V.isFunction(o)&&(o=o(t)),o||!1!==o&&Be(t.url))){const e=s&&i&&ke.read(i);e&&a.set(s,e)}return t},Ie="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=ze(e);let o=r.data;const s=Te.from(r.headers).normalize();let i,a,c,l,u,{responseType:f,onUploadProgress:d,onDownloadProgress:p}=r;function h(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function b(){if(!m)return;const r=Te.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Ne((function(e){t(e),h()}),(function(e){n(e),h()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=b:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(b)},m.onabort=function(){m&&(n(new X("Request aborted",X.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new X("Network Error",X.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||ce;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new X(t,o.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&V.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),V.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),p&&([c,u]=Fe(p,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,l]=Fe(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new je(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===me.protocols.indexOf(y)?n(new X("Unsupported protocol "+y+":",X.ERR_BAD_REQUEST,e)):m.send(o||null)}))},He=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof X?t:new je(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new X(`timeout ${t} of ms exceeded`,X.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>V.asap(i),a}},Je=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Ve=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},We=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Ve(e))yield*Je(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},Ke="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,$e=Ke&&"function"==typeof ReadableStream,Xe=Ke&&("function"==typeof TextEncoder?(Ge=new TextEncoder,e=>Ge.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var Ge;const Qe=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},Ze=$e&&Qe((()=>{let e=!1;const t=new Request(me.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Ye=$e&&Qe((()=>V.isReadableStream(new Response("").body))),et={stream:Ye&&(e=>e.body)};var tt;Ke&&(tt=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!et[e]&&(et[e]=V.isFunction(tt[e])?t=>t[e]():(t,n)=>{throw new X(`Response type '${e}' is not supported`,X.ERR_NOT_SUPPORT,n)})})));const nt=async(e,t)=>{const n=V.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(V.isBlob(e))return e.size;if(V.isSpecCompliantForm(e)){const t=new Request(me.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return V.isArrayBufferView(e)||V.isArrayBuffer(e)?e.byteLength:(V.isURLSearchParams(e)&&(e+=""),V.isString(e)?(await Xe(e)).byteLength:void 0)})(t):n},rt={http:null,xhr:Ie,fetch:Ke&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=ze(e);l=l?(l+"").toLowerCase():"text";let p,h=He([o,s&&s.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let b;try{if(c&&Ze&&"get"!==n&&"head"!==n&&0!==(b=await nt(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(V.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=_e(b,Fe(Le(c)));r=We(n.body,65536,e,t)}}V.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=Ye&&("stream"===l||"response"===l);if(Ye&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=V.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&_e(t,Fe(Le(a),!0))||[];s=new Response(We(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}l=l||"text";let y=await et[V.findKey(et,l)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{Ne(t,n,{data:y,headers:Te.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(y){if(m&&m(),y&&"TypeError"===y.name&&/fetch/i.test(y.message))throw Object.assign(new X("Network Error",X.ERR_NETWORK,e,p),{cause:y.cause||y});throw X.from(y,y&&y.code,e,p)}})};V.forEach(rt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const ot=e=>`- ${e}`,st=e=>V.isFunction(e)||null===e||!1===e,it=e=>{e=V.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!st(n)&&(r=rt[(t=String(n)).toLowerCase()],void 0===r))throw new X(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(ot).join("\n"):" "+ot(e[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function at(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new je(null,e)}function ct(e){at(e),e.headers=Te.from(e.headers),e.data=Ae.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return it(e.adapter||ge.adapter)(e).then((function(t){return at(e),t.data=Ae.call(e,e.transformResponse,t),t.headers=Te.from(t.headers),t}),(function(t){return xe(t)||(at(e),t&&t.response&&(t.response.data=Ae.call(e,e.transformResponse,t.response),t.response.headers=Te.from(t.response.headers))),Promise.reject(t)}))}const lt="1.8.4",ut={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ut[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ft={};ut.transitional=function(e,t,n){function r(e,t){return"[Axios v1.8.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new X(r(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!ft[o]&&(ft[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}},ut.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const dt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new X("option "+s+" must be "+n,X.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new X("Unknown option "+s,X.ERR_BAD_OPTION)}},validators:ut},pt=dt.validators;class ht{constructor(e){this.defaults=e,this.interceptors={request:new ae,response:new ae}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Me(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&dt.assertOptions(n,{silentJSONParsing:pt.transitional(pt.boolean),forcedJSONParsing:pt.transitional(pt.boolean),clarifyTimeoutError:pt.transitional(pt.boolean)},!1),null!=r&&(V.isFunction(r)?t.paramsSerializer={serialize:r}:dt.assertOptions(r,{encode:pt.function,serialize:pt.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),dt.assertOptions(t,{baseUrl:pt.spelling("baseURL"),withXsrfToken:pt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&V.merge(o.common,o[t.method]);o&&V.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Te.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[ct.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{l=ct.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ie(De((e=Me(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}V.forEach(["delete","get","head","options"],(function(e){ht.prototype[e]=function(t,n){return this.request(Me(n||{},{method:e,url:t,data:(n||{}).data}))}})),V.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Me(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ht.prototype[e]=t(),ht.prototype[e+"Form"]=t(!0)}));const mt=ht;class bt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new je(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new bt((function(t){e=t})),cancel:e}}}const yt=bt;const gt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gt).forEach((([e,t])=>{gt[t]=e}));const wt=gt;const Et=function e(t){const n=new mt(t),r=o(mt.prototype.request,n);return V.extend(r,mt.prototype,n,{allOwnKeys:!0}),V.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Me(t,n))},r}(ge);Et.Axios=mt,Et.CanceledError=je,Et.CancelToken=yt,Et.isCancel=xe,Et.VERSION=lt,Et.toFormData=ee,Et.AxiosError=X,Et.Cancel=Et.CanceledError,Et.all=function(e){return Promise.all(e)},Et.spread=function(e){return function(t){return e.apply(null,t)}},Et.isAxiosError=function(e){return V.isObject(e)&&!0===e.isAxiosError},Et.mergeConfig=Me,Et.AxiosHeaders=Te,Et.formToJSON=e=>be(V.isHTMLForm(e)?new FormData(e):e),Et.getAdapter=it,Et.HttpStatusCode=wt,Et.default=Et;const Ot=Et}}]);