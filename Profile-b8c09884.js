import { e, p as pe$1, t, b as a, m, n, a as ee$1, I as Ie$1, H as H$1, D as De$1, R as Re$1, g as ge$1, W as W$1, q as q$1, u, $ as $$1, G as G$1, O as Oe$1, s as se$1, v as ve$1, B as B$1, o as oe$1, A as Ae$1, x as xe$1, r as re$1, i as ie$1, j as je$1, d as We$1 } from './index-565e36b6.js';

let R,k;const N=new WeakMap,D=new WeakMap,L=new WeakMap,O=new WeakMap,M=new WeakMap;let x={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return D.get(t);if("objectStoreNames"===e)return t.objectStoreNames||L.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return V(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function P(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(k||(k=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(F(this),e),V(N.get(this))}:function(...e){return V(t.apply(F(this),e))}:function(e,...n){const i=t.call(F(this),e,...n);return L.set(i,e.sort?e.sort():[e]),V(i)}}function U(t){return "function"==typeof t?P(t):(t instanceof IDBTransaction&&function(t){if(D.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r);},s=()=>{e(),i();},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i();};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r);}));D.set(t,e);}(t),e=t,(R||(R=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,x):t);var e;}function V(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r);},s=()=>{e(V(t.result)),i();},r=()=>{n(t.error),i();};t.addEventListener("success",s),t.addEventListener("error",r);}));return e.then((e=>{e instanceof IDBCursor&&N.set(e,t);})).catch((()=>{})),M.set(e,t),e}(t);if(O.has(t))return O.get(t);const e=U(t);return e!==t&&(O.set(t,e),M.set(e,t)),e}const F=t=>M.get(t);function B(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=V(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(V(o.result),t.oldVersion,t.newVersion,V(o.transaction));})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()));})).catch((()=>{})),a}function j(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",(()=>e())),V(n).then((()=>{}))}const q=["get","getKey","getAll","getAllKeys","count"],$=["put","add","delete","clear"],W=new Map;function K(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(W.get(e))return W.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=$.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!q.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return W.set(e,r),r}var G;x=(t=>({...t,get:(e,n,i)=>K(e,n)||t.get(e,n,i),has:(e,n)=>!!K(e,n)||t.has(e,n)}))(x),function(s){var r,o,a$1,u,c,l;(l=s.VARIANT||(s.VARIANT={}))[l.NOT_PARTICIPATING=-2]="NOT_PARTICIPATING",l[l.NOT_FOUND=-1]="NOT_FOUND",l[l.CONTROL=0]="CONTROL",l[l.A=1]="A",l[l.B=2]="B",l[l.C=3]="C",l[l.D=4]="D",l[l.E=5]="E",l[l.F=6]="F",l[l.G=7]="G",l[l.H=8]="H",l[l.I=9]="I",l[l.J=10]="J",l[l.K=11]="K",l[l.L=12]="L",l[l.M=13]="M",l[l.N=14]="N",l[l.O=15]="O",l[l.P=16]="P",l[l.Q=17]="Q",l[l.R=18]="R",l[l.S=19]="S",l[l.T=20]="T",l[l.U=21]="U",l[l.V=22]="V",l[l.W=23]="W",l[l.X=24]="X",l[l.Y=25]="Y",l[l.Z=26]="Z",s.STORAGE_PATH="experiments";class h{constructor(){r.add(this),o.set(this,void 0);}static build(){return t(this,void 0,void 0,(function*(){const t=new h;return a(t,o,yield m.Service.build(),"f"),t}))}get experiments(){return n(this,o,"f").get(s.STORAGE_PATH)||[]}userIsIn(t,e){for(const n of this.experiments)if((null==n?void 0:n.id)===t)return void 0===e||(null==n?void 0:n.variant)===e;return !1}syncExperiments(t){let e=[];Object.entries(t).forEach((([t,n])=>{(null==n?void 0:n.id)===t&&e.push(n);})),e=n(this,r,"m",c).call(this,e),e.length<=0||n(this,r,"m",a$1).call(this,e);}}o=new WeakMap,r=new WeakSet,a$1=function(e){return t(this,void 0,void 0,(function*(){yield n(this,o,"f").set(s.STORAGE_PATH,e),yield n(this,o,"f").commit();}))},u=function(t,{variant:e,startDate:n}){return {id:t,variant:e,startDate:n}},c=function(t){const e={};return t.forEach((t=>{const n$1=/^extension_(?<id>.*?)(?:_r(?<revision>\d+))?$/.exec(t.id),s=null==n$1?void 0:n$1.groups.id;if(s&&t.startDate)try{const n$1=new Date(t.startDate);e.hasOwnProperty(s)||(e[s]=n(this,r,"m",u).call(this,s,t)),n$1>new Date(e[s].startDate)&&(e[s]=n(this,r,"m",u).call(this,s,t));}catch(t){return}})),Object.values(e)},s.Service=h;}(G||(G={}));var H,z=G;!function(n$1){var h,d,f,p,g,m,y,v,w,E,b,I,S,T;n$1.AlarmName="util.Logging",n$1.OnMessageName="util.Logging";class C extends ee$1{constructor(){super(),h.add(this),d.set(this,.1),f.set(this,50),p.set(this,10),g.set(this,"logs"),m.set(this,void 0),y.set(this,void 0),v.set(this,void 0),w.set(this,new Set(["parse_company_error","parse_company_success","parse_company_attempt","parse_profiles_error","parse_profiles_success","parse_profiles_attempt"]));}static build(){return t(this,void 0,void 0,(function*(){const t=new C;return yield t.registerAlarm(),a(t,m,yield Ie$1.Service.build(),"f"),a(t,y,yield z.Service.build(),"f"),yield n(t,h,"m",T).call(t),t}))}info(...e){return t(this,void 0,void 0,(function*(){const t=[...e];n(this,m,"f").IS_DEVELOPMENT&&console.log.apply(null,t);const n$1=t.join(" ");this.addPendingLogToStorage({type:A.INFO,log:{message:n$1}},Date.now());}))}warn(...e){return t(this,void 0,void 0,(function*(){const t=[...e];n(this,m,"f").IS_DEVELOPMENT&&console.warn.apply(null,t);const n$1=t.join(" ");this.addPendingLogToStorage({type:A.WARN,log:{message:n$1}},Date.now());}))}debug(e,n$1={},s=Date.now()){return t(this,void 0,void 0,(function*(){n(this,m,"f").IS_DEVELOPMENT&&console.debug(e,n$1),this.addPendingLogToStorage({type:A.DEBUG,log:{message:e,debug:n$1}},s);}))}event(e,n$1={}){return t(this,void 0,void 0,(function*(){n(this,m,"f").IS_DEVELOPMENT&&console.log.apply({eventId:e,metadata:n$1}),this.addPendingLogToStorage({type:A.EVENT,log:{message:e,eventId:e,metadata:n$1}},Date.now());}))}log(...e){return t(this,void 0,void 0,(function*(){const t=[...e];this.debug(t.join(" "));}))}error(e,n,i=Date.now()){return t(this,void 0,void 0,(function*(){this.addPendingLogToStorage({type:A.ERROR,log:{message:e,stack:n}},i);}))}parserError(e,n,i){return t(this,void 0,void 0,(function*(){const t={message:n,stack:i,parser:e};this.addPendingLogToStorage({type:A.PARSER_ERROR,log:t},Date.now());}))}respondToAlarm(){return t(this,void 0,void 0,(function*(){if(n(this,v,"f")||(yield n(this,h,"m",T).call(this)),n(this,h,"m",b).call(this))return;const t=yield this.getNextPendingLogsBatch();if(t.length<1)return;const e=n(this,h,"m",S).call(this,t);this.pushPendingLogsBatchToServer(e);}))}withStack(){return (new Error).stack.slice(5)}initLogsStore(){return t(this,void 0,void 0,(function*(){const t="logs";return yield B(n(this,g,"f"),H$1(),{upgrade(e){e.objectStoreNames.contains(t)||e.createObjectStore(t,{keyPath:"id",autoIncrement:!0});}})}))}addPendingLogToStorage(e,n=Date.now()){return t(this,void 0,void 0,(function*(){const t=(yield this.initLogsStore()).transaction("logs","readwrite");t.store.add(Object.assign(Object.assign({},e),{ts:n})),yield t.done;}))}pushPendingLogsBatchToServer(e){var n$1,s;return t(this,void 0,void 0,(function*(){if(e.length<1)return;const t=new URL("/",n(this,m,"f").BASE_EXTENSION_LOGGING_URL),r=null===(n$1=Ie$1.Browser[n(this,m,"f").CURRENT_BROWSER])||void 0===n$1?void 0:n$1.toLowerCase(),a=null===(s=n(this,v,"f"))||void 0===s?void 0:s.id,l=n(this,m,"f").VERSION,d={browser:`${r}-${n(this,m,"f").CURRENT_BROWSER_VERSION}`,env:n(this,m,"f").ENVIRONMENT,user:a,version:l,logs:e};if(n(this,h,"m",b).call(this))return console.error("Could not ship log; unable to determine user and extension version.");yield De$1(t,{fetchOptions:Object.assign({body:JSON.stringify(d)},Re$1({"Content-Type":"application/json; charset=utf-8"}))});}))}getNextPendingLogsBatch(){return t(this,void 0,void 0,(function*(){const t=(yield this.initLogsStore()).transaction("logs","readwrite"),e=yield t.store.getAll(null,n(this,f,"f"));for(const n of e)t.store.delete(n.id);return yield t.done,e}))}registerAlarm(){return t(this,void 0,void 0,(function*(){if(!chrome.alarms)return;(yield chrome.alarms.get(n$1.AlarmName))||chrome.alarms.create(n$1.AlarmName,{periodInMinutes:n(this,d,"f")});}))}}let A;d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap,m=new WeakMap,y=new WeakMap,v=new WeakMap,w=new WeakMap,h=new WeakSet,E=function(t){var e;return !!(null===(e=t.log)||void 0===e?void 0:e.message)&&(!!t.log.message&&n(this,w,"f").has(t.log.message))},b=function(){var t;return !((null===(t=n(this,v,"f"))||void 0===t?void 0:t.id)&&n(this,m,"f").VERSION)},I=function(t){return (t.type!==A.EVENT||!n(this,h,"m",E).call(this,t)||!n(this,y,"f").userIsIn("dd_logging_events",z.VARIANT.A))&&(!n(this,v,"f").debug&&(![A.ERROR,A.PARSER_ERROR].includes(t.type)||Math.random()>n(this,p,"f")/100))},S=function(t){const e=[];for(const n$1 of t){if(n(this,h,"m",I).call(this,n$1))continue;const{type:t,ts:s}=n$1,r=n$1.log,{message:o,stack:a,parser:u,debug:c,metadata:l}=r;e.push({type:t,message:o,stack:a,parser:u,debug:c,metadata:l,ts:s});}return e},T=function(){return t(this,void 0,void 0,(function*(){const t=yield ge$1.Service.build();a(this,v,yield t.get(),"f");}))},e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"info",null),e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"warn",null),e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"debug",null),e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"event",null),e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"log",null),e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"error",null),e([C.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],C.prototype,"parserError",null),n$1.Service=C,function(t){t.INFO="info",t.WARN="warn",t.DEBUG="debug",t.ERROR="error",t.EVENT="event",t.PARSER_ERROR="parser-error";}(A||(A={}));}(H||(H={}));var X=H;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128);}return e},Y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,u=a?t[e+2]:0,c=s>>2,l=(3&s)<<4|o>>4;let h=(15&o)<<2|u>>6,d=63&u;a||(d=64,r||(h=64)),i.push(n[c],n[l],n[h],n[d]);}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Q(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r);}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r));}else {const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o);}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const u=s<<2|r>>4;if(i.push(u),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t);}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t);}}},J=function(t){return function(t){const e=Q(t);return Y.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e;}));}wrapCallback(t){return (e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n));}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return "undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class et extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nt.prototype.create);}}class nt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n;}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(it,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new et(i,o,n)}}const it=/\{\$([^}]+)}/g;function st(t,e){if(t===e)return !0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return !1;const n=t[s],r=e[s];if(rt(n)&&rt(r)){if(!st(n,r))return !1}else if(n!==r)return !1}for(const t of i)if(!n.includes(t))return !1;return !0}function rt(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){return new Promise(((n,i)=>{t.onsuccess=t=>{n(t.target.result);},t.onerror=t=>{var n;i(`${e}: ${null===(n=t.target.error)||void 0===n?void 0:n.message}`);};}))}class ut{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames;}transaction(t,e){return new ct(this._db.transaction.call(this._db,t,e))}createObjectStore(t,e){return new lt(this._db.createObjectStore(t,e))}close(){this._db.close();}}class ct{constructor(t){this._transaction=t,this.complete=new Promise(((t,e)=>{this._transaction.oncomplete=function(){t();},this._transaction.onerror=()=>{e(this._transaction.error);},this._transaction.onabort=()=>{e(this._transaction.error);};}));}objectStore(t){return new lt(this._transaction.objectStore(t))}}class lt{constructor(t){this._store=t;}index(t){return new ht(this._store.index(t))}createIndex(t,e,n){return new ht(this._store.createIndex(t,e,n))}get(t){return at(this._store.get(t),"Error reading from IndexedDB")}put(t,e){return at(this._store.put(t,e),"Error writing to IndexedDB")}delete(t){return at(this._store.delete(t),"Error deleting from IndexedDB")}clear(){return at(this._store.clear(),"Error clearing IndexedDB object store")}}class ht{constructor(t){this._index=t;}get(t){return at(this._index.get(t),"Error reading from IndexedDB")}}class dt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null;}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map;}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Z;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n);}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return "EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"});}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t);}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t);}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))]);}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i);}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t);}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e);}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n);}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return !!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class pt{constructor(t){this.name=t,this.providers=new Map;}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t);}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t);}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ft(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT";}(gt||(gt={}));const mt={debug:gt.DEBUG,verbose:gt.VERBOSE,info:gt.INFO,warn:gt.WARN,error:gt.ERROR,silent:gt.SILENT},yt=gt.INFO,vt={[gt.DEBUG]:"log",[gt.VERBOSE]:"log",[gt.INFO]:"info",[gt.WARN]:"warn",[gt.ERROR]:"error"},wt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=vt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n);};class Et{constructor(t){this.name=t,this._logLevel=yt,this._logHandler=wt,this._userLogHandler=null;}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in gt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t;}setLogLevel(t){this._logLevel="string"==typeof t?mt[t]:t;}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t;}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t;}debug(...t){this._userLogHandler&&this._userLogHandler(this,gt.DEBUG,...t),this._logHandler(this,gt.DEBUG,...t);}log(...t){this._userLogHandler&&this._userLogHandler(this,gt.VERBOSE,...t),this._logHandler(this,gt.VERBOSE,...t);}info(...t){this._userLogHandler&&this._userLogHandler(this,gt.INFO,...t),this._logHandler(this,gt.INFO,...t);}warn(...t){this._userLogHandler&&this._userLogHandler(this,gt.WARN,...t),this._logHandler(this,gt.WARN,...t);}error(...t){this._userLogHandler&&this._userLogHandler(this,gt.ERROR,...t),this._logHandler(this,gt.ERROR,...t);}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.container=t;}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return "VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return `${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const It="@firebase/app",St=new Et("@firebase/app"),Tt={[It]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ct=new Map,At=new Map;function _t(t,e){try{t.container.addComponent(e);}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n);}}function Rt(t){const e=t.name;if(At.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;At.set(e,t);for(const e of Ct.values())_t(e,t);return !0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kt=new nt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new dt("app",(()=>this),"PUBLIC"));}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t;}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t;}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e={}){if("object"!=typeof e){e={name:e};}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw kt.create("bad-app-name",{appName:String(i)});const s=Ct.get(i);if(s){if(st(t,s.options)&&st(n,s.config))return s;throw kt.create("duplicate-app",{appName:i})}const r=new pt(i);for(const t of At.values())r.addComponent(t);const o=new Nt(t,n,r);return Ct.set(i,o),o}function Lt(t,e,n){var i;let s=null!==(i=Tt[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void St.warn(t.join(" "))}Rt(new dt(`${s}-version`,(()=>({library:s,version:e})),"VERSION"));}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="firebase-heartbeat-store";let Mt=null;function xt(){var t,e,n;return Mt||(Mt=(t="firebase-heartbeat-database",e=1,n=(t,e)=>{0===e&&t.createObjectStore(Ot);},new Promise(((i,s)=>{try{const r=indexedDB.open(t,e);r.onsuccess=t=>{i(new ut(t.target.result));},r.onerror=t=>{var e;s(`Error opening indexedDB: ${null===(e=t.target.error)||void 0===e?void 0:e.message}`);},r.onupgradeneeded=t=>{n(new ut(r.result),t.oldVersion,t.newVersion,new ct(r.transaction));};}catch(t){s(`Error opening indexedDB: ${t.message}`);}}))).catch((t=>{throw kt.create("storage-open",{originalErrorMessage:t.message})}))),Mt}async function Pt(t,e){try{const n=(await xt()).transaction(Ot,"readwrite"),i=n.objectStore(Ot);return await i.put(e,Ut(t)),n.complete}catch(t){throw kt.create("storage-set",{originalErrorMessage:t.message})}}function Ut(t){return `${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)));}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return "";const t=Ft(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),jt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jt(n)>e){n.pop();break}i=i.slice(1);}return {heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=J(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ft(){return (new Date).toISOString().substring(0,10)}class Bt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck();}async runIndexedDBEnvironmentCheck(){return "object"==typeof indexedDB&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0);},s.onupgradeneeded=()=>{n=!1;},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"");};}catch(t){e(t);}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return (await xt()).transaction(Ot).objectStore(Ot).get(Ut(t))}catch(t){throw kt.create("storage-get",{originalErrorMessage:t.message})}}(this.app)||{heartbeats:[]}}return {heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Pt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function jt(t){return J(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt;qt="",Rt(new dt("platform-logger",(t=>new bt(t)),"PRIVATE")),Rt(new dt("heartbeat",(t=>new Vt(t)),"PRIVATE")),Lt(It,"0.7.20",qt),Lt(It,"0.7.20","esm2017"),Lt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Lt("firebase","9.6.10","app");var $t,Wt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Kt=Kt||{},Gt=Wt||self;function Ht(){}function zt(t){var e=typeof t;return "array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Xt(t){var e=typeof t;return "object"==e&&null!=t||"function"==e}var Qt="closure_uid_"+(1e9*Math.random()>>>0),Yt=0;function Jt(t,e,n){return t.call.apply(t.bind,arguments)}function Zt(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function te(t,e,n){return (te=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Jt:Zt).apply(null,arguments)}function ee(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ne(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)};}function ie(){this.s=this.s,this.o=this.o;}ie.prototype.s=!1,ie.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Qt)&&t[Qt]||(t[Qt]=++Yt));},ie.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()();};const se=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return "string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1},re=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n);}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t);};function oe(t){return Array.prototype.concat.apply([],arguments)}function ae(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return []}function ue(t){return /^[\s\xa0]*$/.test(t)}var ce,le=String.prototype.trim?function(t){return t.trim()}:function(t){return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function he(t,e){return -1!=t.indexOf(e)}function de(t,e){return t<e?-1:t>e?1:0}t:{var fe=Gt.navigator;if(fe){var pe=fe.userAgent;if(pe){ce=pe;break t}}ce="";}function ge(t,e,n){for(const i in t)e.call(n,t[i],i,t);}function me(t){const e={};for(const n in t)e[n]=t[n];return e}var ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ve(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<ye.length;e++)n=ye[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);}}function we(t){return we[" "](t),t}we[" "]=Ht;var Ee,be,Ie=he(ce,"Opera"),Se=he(ce,"Trident")||he(ce,"MSIE"),Te=he(ce,"Edge"),Ce=Te||Se,Ae=he(ce,"Gecko")&&!(he(ce.toLowerCase(),"webkit")&&!he(ce,"Edge"))&&!(he(ce,"Trident")||he(ce,"MSIE"))&&!he(ce,"Edge"),_e=he(ce.toLowerCase(),"webkit")&&!he(ce,"Edge");function Re(){var t=Gt.document;return t?t.documentMode:void 0}t:{var ke="",Ne=(be=ce,Ae?/rv:([^\);]+)(\)|;)/.exec(be):Te?/Edge\/([\d\.]+)/.exec(be):Se?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(be):_e?/WebKit\/(\S+)/.exec(be):Ie?/(?:Version)[ \/]?(\S+)/.exec(be):void 0);if(Ne&&(ke=Ne?Ne[1]:""),Se){var De=Re();if(null!=De&&De>parseFloat(ke)){Ee=String(De);break t}}Ee=ke;}var Le,Oe={};function Me(){return function(t){var e=Oe;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=le(String(Ee)).split("."),n=le("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=de(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||de(0==s[2].length,0==r[2].length)||de(s[2],r[2]),s=s[3],r=r[3];}while(0==t)}return 0<=t}))}if(Gt.document&&Se){var xe=Re();Le=xe||(parseInt(Ee,10)||void 0);}else Le=void 0;var Pe=Le,Ue=function(){if(!Gt.addEventListener||!Object.defineProperty)return !1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0;}});try{Gt.addEventListener("test",Ht,e),Gt.removeEventListener("test",Ht,e);}catch(t){}return t}();function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1;}function Fe(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ae){t:{try{we(e.nodeName);var s=!0;break t}catch(t){}s=!1;}s||(e=null);}}else "mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Be[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fe.Z.h.call(this);}}Ve.prototype.h=function(){this.defaultPrevented=!0;},ne(Fe,Ve);var Be={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1;};var je="closure_listenable_"+(1e6*Math.random()|0),qe=0;function $e(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++qe,this.ca=this.fa=!1;}function We(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null;}function Ke(t){this.src=t,this.g={},this.h=0;}function Ge(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=se(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(We(e),0==t.g[n].length&&(delete t.g[n],t.h--));}}function He(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return -1}Ke.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=He(t,e,i,s);return -1<o?(e=t[o],n||(e.fa=!1)):((e=new $e(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var ze="closure_lm_"+(1e6*Math.random()|0),Xe={};function Qe(t,e,n,i,s){if(i&&i.once)return Je(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Qe(t,e[r],n,i,s);return null}return n=on(n),t&&t[je]?t.N(e,n,Xt(i)?!!i.capture:!!i,s):Ye(t,e,n,!1,i,s)}function Ye(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Xt(s)?!!s.capture:!!s,a=sn(t);if(a||(t[ze]=a=new Ke(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=nn;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ue||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(en(e.toString()),i);else {if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i);}return n}function Je(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Je(t,e[r],n,i,s);return null}return n=on(n),t&&t[je]?t.O(e,n,Xt(i)?!!i.capture:!!i,s):Ye(t,e,n,!0,i,s)}function Ze(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ze(t,e[r],n,i,s);else i=Xt(i)?!!i.capture:!!i,n=on(n),t&&t[je]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=He(r=t.g[e],n,i,s))&&(We(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=sn(t))&&(e=t.g[e.toString()],t=-1,e&&(t=He(e,n,i,s)),(n=-1<t?e[t]:null)&&tn(n));}function tn(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[je])Ge(e.i,t);else {var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(en(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=sn(e))?(Ge(n,t),0==n.h&&(n.src=null,e[ze]=null)):We(t);}}}function en(t){return t in Xe?Xe[t]:Xe[t]="on"+t}function nn(t,e){if(t.ca)t=!0;else {e=new Fe(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&tn(t),t=n.call(i,e);}return t}function sn(t){return (t=t[ze])instanceof Ke?t:null}var rn="__closure_events_fn_"+(1e9*Math.random()>>>0);function on(t){return "function"==typeof t?t:(t[rn]||(t[rn]=function(e){return t.handleEvent(e)}),t[rn])}function an(){ie.call(this),this.i=new Ke(this),this.P=this,this.I=null;}function un(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else {var s=e;ve(e=new Ve(i,t),s);}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=cn(o,i,!0,e)&&s;}if(s=cn(o=e.g=t,i,!0,e)&&s,s=cn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=cn(o=e.g=n[r],i,!1,e)&&s;}function cn(t,e,n,i){if(!(e=t.i.g[String(e)]))return !0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Ge(t.i,o),s=!1!==a.call(u,i)&&s;}}return s&&!i.defaultPrevented}ne(an,ie),an.prototype[je]=!0,an.prototype.removeEventListener=function(t,e,n,i){Ze(this,t,e,n,i);},an.prototype.M=function(){if(an.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)We(n[i]);delete e.g[t],e.h--;}}this.I=null;},an.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},an.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var ln=Gt.JSON.stringify;function hn(){var t=vn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var dn,fn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null;}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new pn),(t=>t.reset()));class pn{constructor(){this.next=this.g=this.h=null;}set(t,e){this.h=t,this.g=e,this.next=null;}reset(){this.next=this.g=this.h=null;}}function gn(t){Gt.setTimeout((()=>{throw t}),0);}function mn(t,e){dn||function(){var t=Gt.Promise.resolve(void 0);dn=function(){t.then(wn);};}(),yn||(dn(),yn=!0),vn.add(t,e);}var yn=!1,vn=new class{constructor(){this.h=this.g=null;}add(t,e){const n=fn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n;}};function wn(){for(var t;t=hn();){try{t.h.call(t.g);}catch(t){gn(t);}var e=fn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t);}yn=!1;}function En(t,e){an.call(this),this.h=t||1,this.g=e||Gt,this.j=te(this.kb,this),this.l=Date.now();}function bn(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null);}function In(t,e,n){if("function"==typeof t)n&&(t=te(t,n));else {if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=te(t.handleEvent,t);}return 2147483647<Number(e)?-1:Gt.setTimeout(t,e||0)}function Sn(t){t.g=In((()=>{t.g=null,t.i&&(t.i=!1,Sn(t));}),t.j);const e=t.h;t.h=null,t.m.apply(null,e);}ne(En,an),($t=En.prototype).da=!1,$t.S=null,$t.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),un(this,"tick"),this.da&&(bn(this),this.start()));}},$t.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now());},$t.M=function(){En.Z.M.call(this),bn(this),delete this.g;};class Tn extends ie{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null;}l(t){this.h=arguments,this.g?this.i=!0:Sn(this);}M(){super.M(),this.g&&(Gt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null);}}function Cn(t){ie.call(this),this.h=t,this.g={};}ne(Cn,ie);var An=[];function _n(t,e,n,i){Array.isArray(n)||(n&&(An[0]=n.toString()),n=An);for(var s=0;s<n.length;s++){var r=Qe(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r;}}function Rn(t){ge(t.g,(function(t,e){this.g.hasOwnProperty(e)&&tn(t);}),t),t.g={};}function kn(){this.g=!0;}function Nn(t,e,n,i){t.info((function(){return "XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]="";}}}return ln(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}));}Cn.prototype.M=function(){Cn.Z.M.call(this),Rn(this);},Cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},kn.prototype.Aa=function(){this.g=!1;},kn.prototype.info=function(){};var Dn={},Ln=null;function On(){return Ln=Ln||new an}function Mn(t){Ve.call(this,Dn.Ma,t);}function xn(t){const e=On();un(e,new Mn(e));}function Pn(t,e){Ve.call(this,Dn.STAT_EVENT,t),this.stat=e;}function Un(t){const e=On();un(e,new Pn(e,t));}function Vn(t,e){Ve.call(this,Dn.Na,t),this.size=e;}function Fn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Gt.setTimeout((function(){t();}),e)}Dn.Ma="serverreachability",ne(Mn,Ve),Dn.STAT_EVENT="statevent",ne(Pn,Ve),Dn.Na="timingevent",ne(Vn,Ve);var Bn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},jn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function qn(){}function $n(t){return t.h||(t.h=t.i())}function Wn(){}qn.prototype.h=null;var Kn,Gn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Hn(){Ve.call(this,"d");}function zn(){Ve.call(this,"c");}function Xn(){}function Qn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Cn(this),this.P=Jn,t=Ce?125:void 0,this.W=new En(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Yn;}function Yn(){this.i=null,this.g="",this.h=!1;}ne(Hn,Ve),ne(zn,Ve),ne(Xn,qn),Xn.prototype.g=function(){return new XMLHttpRequest},Xn.prototype.i=function(){return {}},Kn=new Xn;var Jn=45e3,Zn={},ti={};function ei(t,e,n){t.K=1,t.v=Ti(vi(e)),t.s=n,t.U=!0,ni(t,null);}function ni(t,e){t.F=Date.now(),oi(t),t.A=vi(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Ui(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Yn,t.g=Us(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Tn(te(t.Ia,t,t.g),t.O)),_n(t.V,t.g,"readystatechange",t.gb),e=t.H?me(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),xn(),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&");}}else o=null;else o=r;return "XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}));}(t.j,t.u,t.A,t.m,t.X,t.s);}function ii(t){return !!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function si(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=ri(t,n),i==ti){4==e&&(t.o=4,Un(14),s=!1),Nn(t.j,t.m,null,"[Incomplete Response]");break}if(i==Zn){t.o=4,Un(15),Nn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Nn(t.j,t.m,i,null),hi(t,i);}ii(t)&&i!=ti&&i!=Zn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Un(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ks(e),e.L=!0,Un(11))):(Nn(t.j,t.m,n,"[Invalid Chunked Response]"),li(t),ci(t));}function ri(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?ti:(n=Number(e.substring(n,i)),isNaN(n)?Zn:(i+=1)+n>e.length?ti:(e=e.substr(i,n),t.C=i+n,e))}function oi(t){t.Y=Date.now()+t.P,ai(t,t.P);}function ai(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Fn(te(t.eb,t),e);}function ui(t){t.B&&(Gt.clearTimeout(t.B),t.B=null);}function ci(t){0==t.l.G||t.I||Ls(t.l,t);}function li(t){ui(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,bn(t.W),Rn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na());}function hi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||$i(n.i,t)))if(n.I=t.N,!t.J&&$i(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e);}catch(t){i=null;}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ds(n),Es(n);}Rs(n),Un(18);}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Fn(te(n.ab,n),6e3));if(1>=qi(n.i)&&n.ka){try{n.ka();}catch(t){}n.ka=void 0;}}else Ms(n,11);}else if((t.J||n.g==t)&&Ds(n),!ue(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const e=c[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=c[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(he(t,"spdy")||he(t,"quic")||he(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Wi(r,r.h),r.h=null));}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Si(i.F,i.D,t));}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Ps(i,i.H?i.la:null,i.W),o.J){Ki(i.i,o);var a=o,u=i.K;u&&a.setTimeout(u),a.B&&(ui(a),oi(a)),i.g=o;}else _s(i);0<n.l.length&&Ss(n);}else "stop"!=c[0]&&"close"!=c[0]||Ms(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ms(n,7):ws(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0);}xn();}catch(t){}}function di(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(zt(t)||"string"==typeof t)re(t,e,void 0);else {if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(zt(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s);}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(zt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t);}}function fi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1]);}else if(t)if(t instanceof fi)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i]);}function pi(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];gi(t.h,i)&&(t.g[n++]=i),e++;}t.g.length=n;}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)gi(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n;}}function gi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}($t=Qn.prototype).setTimeout=function(t){this.P=t;},$t.gb=function(t){t=t.target;const e=this.L;e&&3==ps(t)?e.l():this.Ia(t);},$t.Ia=function(t){try{if(t==this.g)t:{const l=ps(this.g);var e=this.g.Da();this.g.ba();if(!(3>l)&&(3!=l||Ce||this.g&&(this.h.h||this.g.ga()||gs(this.g)))){this.I||4!=l||7==e||xn(),ui(this);var n=this.g.ba();this.N=n;e:if(ii(this)){var i=gs(this.g);t="";var s=i.length,r=4==ps(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){li(this),ci(this);var o="";break e}this.h.i=new Gt.TextDecoder;}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g;}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return "XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}));}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ue(a)){var c=a;break e}}c=null;}if(!(n=c)){this.i=!1,this.o=3,Un(12),li(this),ci(this);break t}Nn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hi(this,n);}this.U?(si(this,l,o),Ce&&this.i&&3==l&&(_n(this.V,this.W,"tick",this.fb),this.W.start())):(Nn(this.j,this.m,o,null),hi(this,o)),4==l&&li(this),this.i&&!this.I&&(4==l?Ls(this.l,this):(this.i=!1,oi(this)));}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Un(12)):(this.o=0,Un(13)),li(this),ci(this);}}}catch(t){}},$t.fb=function(){if(this.g){var t=ps(this.g),e=this.g.ga();this.C<e.length&&(ui(this),si(this,t,e),this.i&&4!=t&&oi(this));}},$t.cancel=function(){this.I=!0,li(this);},$t.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return "TIMEOUT: "+e}));}(this.j,this.A),2!=this.K&&(xn(),Un(17)),li(this),this.o=2,ci(this)):ai(this,this.Y-t);},($t=fi.prototype).R=function(){pi(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},$t.T=function(){return pi(this),this.g.concat()},$t.get=function(t,e){return gi(this.h,t)?this.h[t]:e},$t.set=function(t,e){gi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e;},$t.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this);}};var mi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof yi){this.g=void 0!==e?e:t.g,wi(this,t.j),this.s=t.s,Ei(this,t.i),bi(this,t.m),this.l=t.l,e=t.h;var n=new Oi;n.i=e.i,e.g&&(n.g=new fi(e.g),n.h=e.h),Ii(this,n),this.o=t.o;}else t&&(n=String(t).match(mi))?(this.g=!!e,wi(this,n[1]||"",!0),this.s=Ci(n[2]||""),Ei(this,n[3]||"",!0),bi(this,n[4]),this.l=Ci(n[5]||"",!0),Ii(this,n[6]||"",!0),this.o=Ci(n[7]||"")):(this.g=!!e,this.h=new Oi(null,this.g));}function vi(t){return new yi(t)}function wi(t,e,n){t.j=n?Ci(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""));}function Ei(t,e,n){t.i=n?Ci(e,!0):e;}function bi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e;}else t.m=null;}function Ii(t,e,n){e instanceof Oi?(t.h=e,function(t,e){e&&!t.j&&(Mi(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(xi(this,e),Ui(this,n,t));}),t)),t.j=e;}(t.h,t.g)):(n||(e=Ai(e,Di)),t.h=new Oi(e,t.g));}function Si(t,e,n){t.h.set(e,n);}function Ti(t){return Si(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ci(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ai(t,e,n){return "string"==typeof t?(t=encodeURI(t).replace(e,_i),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _i(t){return "%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}yi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ai(e,Ri,!0),":");var n=this.i;return (n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ai(e,Ri,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ai(n,"/"==n.charAt(0)?Ni:ki,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ai(n,Li)),t.join("")};var Ri=/[#\/\?@]/g,ki=/[#\?:]/g,Ni=/[#\?]/g,Di=/[#\?@]/g,Li=/#/g;function Oi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e;}function Mi(t){t.g||(t.g=new fi,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1);}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"");}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n);})));}function xi(t,e){Mi(t),e=Vi(t,e),gi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,gi((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&pi(t)));}function Pi(t,e){return Mi(t),e=Vi(t,e),gi(t.g.h,e)}function Ui(t,e,n){xi(t,e),0<n.length&&(t.i=null,t.g.set(Vi(t,e),ae(n)),t.h+=n.length);}function Vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}($t=Oi.prototype).add=function(t,e){Mi(this),this.i=null,t=Vi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},$t.forEach=function(t,e){Mi(this),this.g.forEach((function(n,i){re(n,(function(n){t.call(e,n,i,this);}),this);}),this);},$t.T=function(){Mi(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},$t.R=function(t){Mi(this);var e=[];if("string"==typeof t)Pi(this,t)&&(e=oe(e,this.g.get(Vi(this,t))));else {t=this.g.R();for(var n=0;n<t.length;n++)e=oe(e,t[n]);}return e},$t.set=function(t,e){return Mi(this),this.i=null,Pi(this,t=Vi(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},$t.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},$t.toString=function(){if(this.i)return this.i;if(!this.g)return "";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o);}}return this.i=t.join("&")};function Fi(t){this.l=t||Bi,Gt.PerformanceNavigationTiming?t=0<(t=Gt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Gt.g&&Gt.g.Ea&&Gt.g.Ea()&&Gt.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[];}var Bi=10;function ji(t){return !!t.h||!!t.g&&t.g.size>=t.j}function qi(t){return t.h?1:t.g?t.g.size:0}function $i(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Wi(t,e){t.g?t.g.add(e):t.h=e;}function Ki(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e);}function Gi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ae(t.i)}function Hi(){}function zi(){this.g=new Hi;}function Xi(t,e,n){const i=n||"";try{di(t,(function(t,n){let s=t;Xt(t)&&(s=ln(t)),e.push(i+n+"="+encodeURIComponent(s));}));}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Qi(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i);}catch(t){}}function Yi(t){this.l=t.$b||null,this.j=t.ib||!1;}function Ji(t,e){an.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null;}Fi.prototype.cancel=function(){if(this.i=Gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear();}},Hi.prototype.stringify=function(t){return Gt.JSON.stringify(t,void 0)},Hi.prototype.parse=function(t){return Gt.JSON.parse(t,void 0)},ne(Yi,qn),Yi.prototype.g=function(){return new Ji(this.l,this.j)},Yi.prototype.i=function(t){return function(){return t}}({}),ne(Ji,an);var Zi=0;function ts(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t));}function es(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ns(t);}function ns(t){t.onreadystatechange&&t.onreadystatechange.call(t);}($t=Ji.prototype).open=function(t,e){if(this.readyState!=Zi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ns(this);},$t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Gt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this));},$t.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,es(this)),this.readyState=Zi;},$t.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Gt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[];}else this.response=this.responseText="",this.A=new TextDecoder;ts(this);}else t.text().then(this.Ua.bind(this),this.ha.bind(this));},$t.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e);}t.done?es(this):ns(this),3==this.readyState&&ts(this);}},$t.Ua=function(t){this.g&&(this.response=this.responseText=t,es(this));},$t.Ta=function(t){this.g&&(this.response=t,es(this));},$t.ha=function(){this.g&&es(this);},$t.setRequestHeader=function(t,e){this.v.append(t,e);},$t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},$t.getAllResponseHeaders=function(){if(!this.h)return "";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return "include"===this.m},set:function(t){this.m=t?"include":"same-origin";}});var is=Gt.JSON.parse;function ss(t){an.call(this),this.headers=new fi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rs,this.K=this.L=!1;}ne(ss,an);var rs="",os=/^https?$/i,as=["POST","PUT"];function us(t){return "content-type"==t.toLowerCase()}function cs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ls(t),ds(t);}function ls(t){t.D||(t.D=!0,un(t,"complete"),un(t,"error"));}function hs(t){if(t.h&&void 0!==Kt&&(!t.C[1]||4!=ps(t)||2!=t.ba()))if(t.v&&4==ps(t))In(t.Fa,0,t);else if(un(t,"readystatechange"),4==ps(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1;}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(mi)[1]||null;if(!s&&Gt.self&&Gt.self.location){var r=Gt.self.location.protocol;s=r.substr(0,r.length-1);}i=!os.test(s?s.toLowerCase():"");}n=i;}if(n)un(t,"complete"),un(t,"success");else {t.m=6;try{var o=2<ps(t)?t.g.statusText:"";}catch(t){o="";}t.j=o+" ["+t.ba()+"]",ls(t);}}finally{ds(t);}}}function ds(t,e){if(t.g){fs(t);const n=t.g,i=t.C[0]?Ht:null;t.g=null,t.C=null,e||un(t,"ready");try{n.onreadystatechange=i;}catch(t){}}}function fs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Gt.clearTimeout(t.A),t.A=null);}function ps(t){return t.g?t.g.readyState:0}function gs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ms(t,e,n){t:{for(i in n){var i=!1;break t}i=!0;}i||(n=function(t){let e="";return ge(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n";})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Si(t,e,n));}function ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vs(t){this.za=0,this.l=[],this.h=new kn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ys("baseRetryDelayMs",5e3,t),this.$a=ys("retryDelaySeedMs",1e4,t),this.Ya=ys("forwardChannelMaxRetries",2,t),this.ra=ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Fi(t&&t.concurrentRequestLimit),this.Ca=new zi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb;}function ws(t){if(bs(t),3==t.G){var e=t.V++,n=vi(t.F);Si(n,"SID",t.J),Si(n,"RID",e),Si(n,"TYPE","terminate"),Cs(t,n),(e=new Qn(t,t.h,e,void 0)).K=2,e.v=Ti(vi(n)),n=!1,Gt.navigator&&Gt.navigator.sendBeacon&&(n=Gt.navigator.sendBeacon(e.v.toString(),"")),!n&&Gt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Us(e.l,null),e.g.ea(e.v)),e.F=Date.now(),oi(e);}xs(t);}function Es(t){t.g&&(ks(t),t.g.cancel(),t.g=null);}function bs(t){Es(t),t.u&&(Gt.clearTimeout(t.u),t.u=null),Ds(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Gt.clearTimeout(t.m),t.m=null);}function Is(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e;}}(t.Za++,e)),3==t.G&&Ss(t);}function Ss(t){ji(t.i)||t.m||(t.m=!0,mn(t.Ha,t),t.C=0);}function Ts(t,e){var n;n=e?e.m:t.V++;const i=vi(t.F);Si(i,"SID",t.J),Si(i,"RID",n),Si(i,"AID",t.U),Cs(t,i),t.o&&t.s&&ms(i,t.o,t.s),n=new Qn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=As(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Wi(t.i,n),ei(n,i,e);}function Cs(t,e){t.j&&di({},(function(t,n){Si(e,n,t);}));}function As(t,e,n){n=Math.min(t.l.length,n);var i=t.j?te(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Xi(a,t,"req"+n+"_");}catch(t){i&&i(a);}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function _s(t){t.g||t.u||(t.Y=1,mn(t.Ga,t),t.A=0);}function Rs(t){return !(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Fn(te(t.Ga,t),Os(t,t.A)),t.A++,!0)}function ks(t){null!=t.B&&(Gt.clearTimeout(t.B),t.B=null);}function Ns(t){t.g=new Qn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=vi(t.oa);Si(e,"RID","rpc"),Si(e,"SID",t.J),Si(e,"CI",t.N?"0":"1"),Si(e,"AID",t.U),Cs(t,e),Si(e,"TYPE","xmlhttp"),t.o&&t.s&&ms(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ti(vi(e)),n.s=null,n.U=!0,ni(n,t);}function Ds(t){null!=t.v&&(Gt.clearTimeout(t.v),t.v=null);}function Ls(t,e){var n=null;if(t.g==e){Ds(t),ks(t),t.g=null;var i=2;}else {if(!$i(t.i,e))return;n=e.D,Ki(t.i,e),i=1;}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;un(i=On(),new Vn(i,n)),Ss(t);}else _s(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return !(qi(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Fn(te(t.Ha,t,e),Os(t,t.C)),t.C++,0)))}(t,e)||2==i&&Rs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ms(t,5);break;case 4:Ms(t,10);break;case 3:Ms(t,6);break;default:Ms(t,2);}}function Os(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ms(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=te(t.jb,t);n||(n=new yi("//www.google.com/images/cleardot.gif"),Gt.location&&"http"==Gt.location.protocol||wi(n,"https"),Ti(n)),function(t,e){const n=new kn;if(Gt.Image){const i=new Image;i.onload=ee(Qi,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ee(Qi,n,i,"TestLoadImage: error",!1,e),i.onabort=ee(Qi,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ee(Qi,n,i,"TestLoadImage: timeout",!1,e),Gt.setTimeout((function(){i.ontimeout&&i.ontimeout();}),1e4),i.src=t;}else e(!1);}(n.toString(),i);}else Un(2);t.G=0,t.j&&t.j.va(e),xs(t),bs(t);}function xs(t){t.G=0,t.I=-1,t.j&&(0==Gi(t.i).length&&0==t.l.length||(t.i.i.length=0,ae(t.l),t.l.length=0),t.j.ua());}function Ps(t,e,n){let i=function(t){return t instanceof yi?vi(t):new yi(t,void 0)}(n);if(""!=i.i)e&&Ei(i,e+"."+i.i),bi(i,i.m);else {const t=Gt.location;i=function(t,e,n,i){var s=new yi(null,void 0);return t&&wi(s,t),e&&Ei(s,e),n&&bi(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n);}return t.aa&&ge(t.aa,(function(t,e){Si(i,e,t);})),e=t.D,n=t.sa,e&&n&&Si(i,e,n),Si(i,"VER",t.ma),Cs(t,i),i}function Us(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return (e=n&&t.Ba&&!t.qa?new ss(new Yi({ib:!0})):new ss(t.qa)).L=t.H,e}function Vs(){}function Fs(){if(Se&&!(10<=Number(Pe)))throw Error("Environmental error: no available transport.")}function Bs(t,e){an.call(this),this.g=new vs(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ue(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ue(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new $s(this);}function js(t){Hn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0;}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e;}else this.data=t;}function qs(){zn.call(this),this.status=1;}function $s(t){this.g=t;}($t=ss.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kn.g(),this.C=this.u?$n(this.u):$n(Kn),this.g.onreadystatechange=te(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1;}catch(t){return void cs(this,t)}t=n||"";const s=new fi(this.headers);i&&di(i,(function(t,e){s.set(e,t);})),i=function(t){t:{var e=us;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1;}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=Gt.FormData&&t instanceof Gt.FormData,!(0<=se(as,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t);}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fs(this),0<this.B&&((this.K=function(t){return Se&&Me()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=te(this.pa,this)):this.A=In(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1;}catch(t){cs(this,t);}},$t.pa=function(){void 0!==Kt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,un(this,"timeout"),this.abort(8));},$t.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,un(this,"complete"),un(this,"abort"),ds(this));},$t.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ds(this,!0)),ss.Z.M.call(this);},$t.Fa=function(){this.s||(this.F||this.v||this.l?hs(this):this.cb());},$t.cb=function(){hs(this);},$t.ba=function(){try{return 2<ps(this)?this.g.status:-1}catch(t){return -1}},$t.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return ""}},$t.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),is(e)}},$t.Da=function(){return this.m},$t.La=function(){return "string"==typeof this.j?this.j:String(this.j)},($t=vs.prototype).ma=8,$t.G=1,$t.hb=function(t){try{this.h.info("Origin Trials invoked: "+t);}catch(t){}},$t.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Qn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=me(r),ve(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3;}else e=1e3;e=As(this,s,e),Si(n=vi(this.F),"RID",t),Si(n,"CVER",22),this.D&&Si(n,"X-HTTP-Session-Id",this.D),Cs(this,n),this.o&&r&&ms(n,this.o,r),Wi(this.i,s),this.Ra&&Si(n,"TYPE","init"),this.ja?(Si(n,"$req",e),Si(n,"SID","null"),s.$=!0,ei(s,n,null)):ei(s,n,e),this.G=2;}}else 3==this.G&&(t?Ts(this,t):0==this.l.length||ji(this.i)||Ts(this));},$t.Ga=function(){if(this.u=null,Ns(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fn(te(this.bb,this),t);}},$t.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Un(10),Es(this),Ns(this));},$t.ab=function(){null!=this.v&&(this.v=null,Es(this),Rs(this),Un(19));},$t.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Un(2)):(this.h.info("Failed to ping google.com"),Un(1));},($t=Vs.prototype).xa=function(){},$t.wa=function(){},$t.va=function(){},$t.ua=function(){},$t.Oa=function(){},Fs.prototype.g=function(t,e){return new Bs(t,e)},ne(Bs,an),Bs.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),mn(te(t.hb,t,e))),Un(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ps(t,null,t.W),Ss(t);},Bs.prototype.close=function(){ws(this.g);},Bs.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Is(this.g,e);}else this.v?((e={}).__data__=ln(t),Is(this.g,e)):Is(this.g,t);},Bs.prototype.M=function(){this.g.j=null,delete this.j,ws(this.g),delete this.g,Bs.Z.M.call(this);},ne(js,Hn),ne(qs,zn),ne($s,Vs),$s.prototype.xa=function(){un(this.g,"a");},$s.prototype.wa=function(t){un(this.g,new js(t));},$s.prototype.va=function(t){un(this.g,new qs);},$s.prototype.ua=function(){un(this.g,"b");},Fs.prototype.createWebChannel=Fs.prototype.g,Bs.prototype.send=Bs.prototype.u,Bs.prototype.open=Bs.prototype.m,Bs.prototype.close=Bs.prototype.close,Bn.NO_ERROR=0,Bn.TIMEOUT=8,Bn.HTTP_ERROR=6,jn.COMPLETE="complete",Wn.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",an.prototype.listen=an.prototype.N,ss.prototype.listenOnce=ss.prototype.O,ss.prototype.getLastError=ss.prototype.La,ss.prototype.getLastErrorCode=ss.prototype.Da,ss.prototype.getStatus=ss.prototype.ba,ss.prototype.getResponseJson=ss.prototype.Qa,ss.prototype.getResponseText=ss.prototype.ga,ss.prototype.send=ss.prototype.ea;var Ws=Bn,Ks=jn,Gs=Dn,Hs=10,zs=11,Xs=Yi,Qs=Wn,Ys=ss;const Js="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.uid=t;}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Zs.UNAUTHENTICATED=new Zs(null),Zs.GOOGLE_CREDENTIALS=new Zs("google-credentials-uid"),Zs.FIRST_PARTY=new Zs("first-party-uid"),Zs.MOCK_USER=new Zs("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let tr="9.6.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Et("@firebase/firestore");function nr(){return er.logLevel}function ir(t,...e){if(er.logLevel<=gt.DEBUG){const n=e.map(or);er.debug(`Firestore (${tr}): ${t}`,...n);}}function sr(t,...e){if(er.logLevel<=gt.ERROR){const n=e.map(or);er.error(`Firestore (${tr}): ${t}`,...n);}}function rr(t,...e){if(er.logLevel<=gt.WARN){const n=e.map(or);er.warn(`Firestore (${tr}): ${t}`,...n);}}function or(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e;}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t="Unexpected state"){const e=`FIRESTORE (${tr}) INTERNAL ASSERTION FAILED: `+t;throw sr(e),new Error(e)}function ur(t,e){t||ar();}function cr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hr extends et{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`;}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e;}));}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`);}}class pr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Zs.UNAUTHENTICATED)));}shutdown(){}}class gr{constructor(t){this.t=t,this.currentUser=Zs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null;}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,t.enqueueRetryable((()=>i(this.currentUser)));};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser);}));},o=t=>{ir("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r();};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ir("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr);}}),0),r();}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ir("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ur("string"==typeof e.accessToken),new fr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0;}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o);}u(){const t=this.auth&&this.auth.getUid();return ur(null===t||"string"==typeof t),new Zs(t)}}class mr{constructor(t,e,n){this.type="FirstParty",this.user=Zs.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n);}}class yr{constructor(t,e,n){this.h=t,this.l=e,this.m=n;}getToken(){return Promise.resolve(new mr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Zs.FIRST_PARTY)));}shutdown(){}invalidateToken(){}}class vr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value);}}class wr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null;}start(t,e){const n=t=>{null!=t.error&&ir("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,ir("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)));};const i=t=>{ir("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o);};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):ir("FirebaseAppCheckTokenProvider","AppCheck not yet detected");}}),0);}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ur("string"==typeof t.token),this.p=t.token,new vr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0;}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o);}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t));}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er.A=-1;class Ir{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=br(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length));}return n}}function Sr(t,e){return t<e?-1:t>e?1:0}function Tr(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new hr(lr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new hr(lr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new hr(lr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new hr(lr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Cr.fromMillis(Date.now())}static fromDate(t){return Cr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Cr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Sr(this.nanoseconds,t.nanoseconds):Sr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return "Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return {seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.timestamp=t;}static fromTimestamp(t){return new Ar(t)}static min(){return new Ar(new Cr(0,0))}static max(){return new Ar(new Cr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return "SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n]);}function kr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return !1;return !0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&ar(),void 0===n?n=t.length-e:n>t.length-e&&ar(),this.segments=t,this.offset=e,this.len=n;}get length(){return this.len}isEqual(t){return 0===Nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nr?t.forEach((t=>{e.push(t);})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return !1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return !1;return !0}isImmediateParentOf(t){if(this.length+1!==t.length)return !1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return !1;return !0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e]);}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return -1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Dr extends Nr{construct(t,e,n){return new Dr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new hr(lr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)));}return new Dr(e)}static emptyPath(){return new Dr([])}}const Lr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Or extends Nr{construct(t,e,n){return new Or(t,e,n)}static isValidIdentifier(t){return Lr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Or.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Or(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new hr(lr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n="";};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new hr(lr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new hr(lr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2;}else "`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++);}if(s(),r)throw new hr(lr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Or(e)}static emptyPath(){return new Or([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t){this.binaryString=t;}static fromBase64String(t){const e=atob(t);return new Mr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Mr(e)}[Symbol.iterator](){let t=0;return {next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t;}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Sr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Mr.EMPTY_BYTE_STRING=new Mr("");const xr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(ur(!!t),"string"==typeof t){let e=0;const n=xr.exec(t);if(ur(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t);}const i=new Date(t);return {seconds:Math.floor(i.getTime()/1e3),nanos:e}}return {seconds:Ur(t.seconds),nanos:Ur(t.nanos)}}function Ur(t){return "number"==typeof t?t:"string"==typeof t?Number(t):0}function Vr(t){return "string"==typeof t?Mr.fromBase64String(t):Mr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){var e,n;return "server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Br(t){const e=t.mapValue.fields.__previous_value__;return Fr(e)?Br(e):e}function jr(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Cr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a;}}class $r{constructor(t,e){this.projectId=t,this.database=e||"(default)";}static empty(){return new $r("","")}get isDefaultDatabase(){return "(default)"===this.database}isEqual(t){return t instanceof $r&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){return null==t}function Kr(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(t){this.path=t;}static fromPath(t){return new Gr(Dr.fromString(t))}static fromName(t){return new Gr(Dr.fromString(t).popFirst(5))}static empty(){return new Gr(Dr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Dr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Dr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Gr(new Dr(t.slice()))}}function Hr(t){return "nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fr(t)?4:function(t){return "__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9:10:ar()}function zr(t,e){if(t===e)return !0;const n=Hr(t);if(n!==Hr(e))return !1;switch(n){case 0:case 9007199254740991:return !0;case 1:return t.booleanValue===e.booleanValue;case 4:return jr(t).isEqual(jr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Pr(t.timestampValue),i=Pr(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Vr(t.bytesValue).isEqual(Vr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ur(t.geoPointValue.latitude)===Ur(e.geoPointValue.latitude)&&Ur(t.geoPointValue.longitude)===Ur(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ur(t.integerValue)===Ur(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ur(t.doubleValue),i=Ur(e.doubleValue);return n===i?Kr(n)===Kr(i):isNaN(n)&&isNaN(i)}return !1}(t,e);case 9:return Tr(t.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(_r(n)!==_r(i))return !1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!zr(n[t],i[t])))return !1;return !0}(t,e);default:return ar()}}function Xr(t,e){return void 0!==(t.values||[]).find((t=>zr(t,e)))}function Qr(t,e){if(t===e)return 0;const n=Hr(t),i=Hr(e);if(n!==i)return Sr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Sr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ur(t.integerValue||t.doubleValue),i=Ur(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Yr(t.timestampValue,e.timestampValue);case 4:return Yr(jr(t),jr(e));case 5:return Sr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Vr(t),i=Vr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Sr(n[t],i[t]);if(0!==e)return e}return Sr(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Sr(Ur(t.latitude),Ur(e.latitude));return 0!==n?n:Sr(Ur(t.longitude),Ur(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Qr(n[t],i[t]);if(e)return e}return Sr(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Sr(i[t],r[t]);if(0!==e)return e;const o=Qr(n[i[t]],s[r[t]]);if(0!==o)return o}return Sr(i.length,r.length)}(t.mapValue,e.mapValue);default:throw ar()}}function Yr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Sr(t,e);const n=Pr(t),i=Pr(e),s=Sr(n.seconds,i.seconds);return 0!==s?s:Sr(n.nanos,i.nanos)}function Jr(t){return Zr(t)}function Zr(t){return "nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Pr(t);return `time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Gr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Zr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Zr(t.fields[s])}`;return n+"}"}(t.mapValue):ar();var e,n;}function to(t,e){return {referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function eo(t){return !!t&&"integerValue"in t}function no(t){return !!t&&"arrayValue"in t}function io(t){return !!t&&"nullValue"in t}function so(t){return !!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ro(t){return !!t&&"mapValue"in t}function oo(t){if(t.geoPointValue)return {geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return {timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=oo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ao{constructor(t){this.value=t;}static empty(){return new ao({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ro(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=oo(e);}setAll(t){let e=Or.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast();}t?n[s.lastSegment()]=oo(t):i.push(s.lastSegment());}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i);}delete(t){const e=this.field(t.popLast());ro(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()];}isEqual(t){return zr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ro(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i;}return e.mapValue.fields}applyChanges(t,e,n){Rr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e];}clone(){return new ao(oo(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r;}static newInvalidDocument(t){return new uo(t,0,Ar.min(),Ar.min(),ao.empty(),0)}static newFoundDocument(t,e,n){return new uo(t,1,e,Ar.min(),n,0)}static newNoDocument(t,e){return new uo(t,2,e,Ar.min(),ao.empty(),0)}static newUnknownDocument(t,e){return new uo(t,3,e,Ar.min(),ao.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ao.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ao.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof uo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new uo(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function co(t){return new lo(t.readTime,t.key,-1)}class lo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n;}static min(){return new lo(Ar.min(),Gr.empty(),-1)}static max(){return new lo(Ar.max(),Gr.empty(),-1)}}function ho(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Gr.comparator(t.documentKey,e.documentKey),0!==n?n:Sr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.P=null;}}function po(t,e=null,n=[],i=[],s=null,r=null,o=null){return new fo(t,e,n,i,s,r,o)}function go(t){const e=cr(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return (e=t).field.canonicalString()+e.op.toString()+Jr(e.value);var e;})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Wr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Jr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Jr(t))).join(",")),e.P=t;}return e.P}function mo(t,e){if(t.limit!==e.limit)return !1;if(t.orderBy.length!==e.orderBy.length)return !1;for(let n=0;n<t.orderBy.length;n++)if(!ko(t.orderBy[n],e.orderBy[n]))return !1;if(t.filters.length!==e.filters.length)return !1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!zr(n.value,i.value))return !1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Do(t.startAt,e.startAt)&&Do(t.endAt,e.endAt)}function yo(t){return Gr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class vo extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n;}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new wo(t,e,n):"array-contains"===e?new So(t,n):"in"===e?new To(t,n):"not-in"===e?new Co(t,n):"array-contains-any"===e?new Ao(t,n):new vo(t,e,n)}static V(t,e,n){return "in"===e?new Eo(t,n):new bo(t,n)}matches(t){const e=t.data.field(this.field);return "!="===this.op?null!==e&&this.v(Qr(e,this.value)):null!==e&&Hr(this.value)===Hr(e)&&this.v(Qr(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ar()}}S(){return ["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class wo extends vo{constructor(t,e,n){super(t,e,n),this.key=Gr.fromName(n.referenceValue);}matches(t){const e=Gr.comparator(t.key,this.key);return this.v(e)}}class Eo extends vo{constructor(t,e){super(t,"in",e),this.keys=Io("in",e);}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class bo extends vo{constructor(t,e){super(t,"not-in",e),this.keys=Io("not-in",e);}matches(t){return !this.keys.some((e=>e.isEqual(t.key)))}}function Io(t,e){var n;return ((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Gr.fromName(t.referenceValue)))}class So extends vo{constructor(t,e){super(t,"array-contains",e);}matches(t){const e=t.data.field(this.field);return no(e)&&Xr(e.arrayValue,this.value)}}class To extends vo{constructor(t,e){super(t,"in",e);}matches(t){const e=t.data.field(this.field);return null!==e&&Xr(this.value.arrayValue,e)}}class Co extends vo{constructor(t,e){super(t,"not-in",e);}matches(t){if(Xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return !1;const e=t.data.field(this.field);return null!==e&&!Xr(this.value.arrayValue,e)}}class Ao extends vo{constructor(t,e){super(t,"array-contains-any",e);}matches(t){const e=t.data.field(this.field);return !(!no(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Xr(this.value.arrayValue,t)))}}class _o{constructor(t,e){this.position=t,this.inclusive=e;}}class Ro{constructor(t,e="asc"){this.field=t,this.dir=e;}}function ko(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function No(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Gr.comparator(Gr.fromName(o.referenceValue),n.key):Qr(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Do(t,e){if(null===t)return null===e;if(null===e)return !1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return !1;for(let n=0;n<t.position.length;n++)if(!zr(t.position[n],e.position[n]))return !1;return !0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt;}}function Oo(t){return new Lo(t)}function Mo(t){return !Wr(t.limit)&&"F"===t.limitType}function xo(t){return !Wr(t.limit)&&"L"===t.limitType}function Po(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Uo(t){for(const e of t.filters)if(e.S())return e.field;return null}function Vo(t){return null!==t.collectionGroup}function Fo(t){const e=cr(t);if(null===e.D){e.D=[];const t=Uo(e),n=Po(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Ro(t)),e.D.push(new Ro(Or.keyField(),"asc"));else {let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Ro(Or.keyField(),t));}}}return e.D}function Bo(t){const e=cr(t);if(!e.C)if("F"===e.limitType)e.C=po(e.path,e.collectionGroup,Fo(e),e.filters,e.limit,e.startAt,e.endAt);else {const t=[];for(const n of Fo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Ro(n.field,e));}const n=e.endAt?new _o(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new _o(e.startAt.position,!e.startAt.inclusive):null;e.C=po(e.path,e.collectionGroup,t,e.filters,e.limit,n,i);}return e.C}function jo(t,e){return mo(Bo(t),Bo(e))&&t.limitType===e.limitType}function qo(t){return `${go(Bo(t))}|lt:${t.limitType}`}function $o(t){return `Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return `${(e=t).field.canonicalString()} ${e.op} ${Jr(e.value)}`;var e;})).join(", ")}]`),Wr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return `${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Jr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Jr(t))).join(",")),`Target(${e})`}(Bo(t))}; limitType=${t.limitType})`}function Wo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Gr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return !1;return !0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return !1;return !0}(t,e)&&function(t,e){return !(t.startAt&&!function(t,e,n){const i=No(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Fo(t),e))&&!(t.endAt&&!function(t,e,n){const i=No(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Fo(t),e))}(t,e)}function Ko(t){return (e,n)=>{let i=!1;for(const s of Fo(t)){const t=Go(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField();}return 0}}function Go(t,e,n){const i=t.field.isKeyField()?Gr.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Qr(i,s):ar()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return -1*i;default:return ar()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){if(t.N){if(isNaN(e))return {doubleValue:"NaN"};if(e===1/0)return {doubleValue:"Infinity"};if(e===-1/0)return {doubleValue:"-Infinity"}}return {doubleValue:Kr(e)?"-0":e}}function zo(t){return {integerValue:""+t}}function Xo(t,e){return function(t){return "number"==typeof t&&Number.isInteger(t)&&!Kr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?zo(e):Ho(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this._=void 0;}}function Yo(t,e,n){return t instanceof Zo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ta?ea(t,e):t instanceof na?ia(t,e):function(t,e){const n=function(t,e){return t instanceof sa?eo(n=e)||function(t){return !!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n;}(t,e),i=ra(n)+ra(t.k);return eo(n)&&eo(t.k)?zo(i):Ho(t.M,i)}(t,e)}function Jo(t,e,n){return t instanceof ta?ea(t,e):t instanceof na?ia(t,e):n}class Zo extends Qo{}class ta extends Qo{constructor(t){super(),this.elements=t;}}function ea(t,e){const n=oa(e);for(const e of t.elements)n.some((t=>zr(t,e)))||n.push(e);return {arrayValue:{values:n}}}class na extends Qo{constructor(t){super(),this.elements=t;}}function ia(t,e){let n=oa(e);for(const e of t.elements)n=n.filter((t=>!zr(t,e)));return {arrayValue:{values:n}}}class sa extends Qo{constructor(t,e){super(),this.M=t,this.k=e;}}function ra(t){return Ur(t.integerValue||t.doubleValue)}function oa(t){return no(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function aa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ua{}function ca(t,e,n){t instanceof fa?function(t,e,n){const i=t.value.clone(),s=ma(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations();}(t,e,n):t instanceof pa?function(t,e,n){if(!aa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ma(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ga(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations();}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations();}(0,e,n);}function la(t,e,n){t instanceof fa?function(t,e,n){if(!aa(t.precondition,e))return;const i=t.value.clone(),s=ya(t.fieldTransforms,n,e);i.setAll(s),e.convertToFoundDocument(da(e),i).setHasLocalMutations();}(t,e,n):t instanceof pa?function(t,e,n){if(!aa(t.precondition,e))return;const i=ya(t.fieldTransforms,n,e),s=e.data;s.setAll(ga(t)),s.setAll(i),e.convertToFoundDocument(da(e),s).setHasLocalMutations();}(t,e,n):function(t,e){aa(t.precondition,e)&&e.convertToNoDocument(Ar.min());}(t,e);}function ha(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Tr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ta&&e instanceof ta||t instanceof na&&e instanceof na?Tr(t.elements,e.elements,zr):t instanceof sa&&e instanceof sa?zr(t.k,e.k):t instanceof Zo&&e instanceof Zo}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function da(t){return t.isFoundDocument()?t.version:Ar.min()}class fa extends ua{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0;}}class pa extends ua{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1;}}function ga(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i);}})),e}function ma(t,e,n){const i=new Map;ur(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Jo(o,a,n[s]));}return i}function ya(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Yo(t,r,e));}return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t){this.count=t;}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wa,Ea;function ba(t){if(void 0===t)return sr("GRPC error has no .code"),lr.UNKNOWN;switch(t){case wa.OK:return lr.OK;case wa.CANCELLED:return lr.CANCELLED;case wa.UNKNOWN:return lr.UNKNOWN;case wa.DEADLINE_EXCEEDED:return lr.DEADLINE_EXCEEDED;case wa.RESOURCE_EXHAUSTED:return lr.RESOURCE_EXHAUSTED;case wa.INTERNAL:return lr.INTERNAL;case wa.UNAVAILABLE:return lr.UNAVAILABLE;case wa.UNAUTHENTICATED:return lr.UNAUTHENTICATED;case wa.INVALID_ARGUMENT:return lr.INVALID_ARGUMENT;case wa.NOT_FOUND:return lr.NOT_FOUND;case wa.ALREADY_EXISTS:return lr.ALREADY_EXISTS;case wa.PERMISSION_DENIED:return lr.PERMISSION_DENIED;case wa.FAILED_PRECONDITION:return lr.FAILED_PRECONDITION;case wa.ABORTED:return lr.ABORTED;case wa.OUT_OF_RANGE:return lr.OUT_OF_RANGE;case wa.UNIMPLEMENTED:return lr.UNIMPLEMENTED;case wa.DATA_LOSS:return lr.DATA_LOSS;default:return ar()}}(Ea=wa||(wa={}))[Ea.OK=0]="OK",Ea[Ea.CANCELLED=1]="CANCELLED",Ea[Ea.UNKNOWN=2]="UNKNOWN",Ea[Ea.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ea[Ea.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ea[Ea.NOT_FOUND=5]="NOT_FOUND",Ea[Ea.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ea[Ea.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ea[Ea.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ea[Ea.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ea[Ea.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ea[Ea.ABORTED=10]="ABORTED",Ea[Ea.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ea[Ea.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ea[Ea.INTERNAL=13]="INTERNAL",Ea[Ea.UNAVAILABLE=14]="UNAVAILABLE",Ea[Ea.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0;}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++;}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return !1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return !1}forEach(t){Rr(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i);}));}isEmpty(){return kr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e){this.comparator=t,this.root=e||Ca.EMPTY;}insert(t,e){return new Sa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ca.BLACK,null,null))}remove(t){return new Sa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ca.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right);}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right);}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)));}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ta(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ta(this.root,t,this.comparator,!0)}}class Ta{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else {if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left;}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return {key:t.key,value:t.value}}}class Ca{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Ca.RED,this.left=null!=i?i:Ca.EMPTY,this.right=null!=s?s:Ca.EMPTY,this.size=this.left.size+1+this.right.size;}copy(t,e,n,i,s){return new Ca(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return !1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ca.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else {if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ca.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin());}i=i.copy(null,null,null,null,i.right.remove(t,e));}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ca.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ca.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ar();if(this.right.isRed())throw ar();const t=this.left.check();if(t!==this.right.check())throw ar();return t+(this.isRed()?0:1)}}Ca.EMPTY=null,Ca.RED=!0,Ca.BLACK=!1,Ca.EMPTY=new class{constructor(){this.size=0;}get key(){throw ar()}get value(){throw ar()}get color(){throw ar()}get left(){throw ar()}get right(){throw ar()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Ca(t,e)}remove(t,e){return this}isEmpty(){return !0}inorderTraversal(t){return !1}reverseTraversal(t){return !1}minKey(){return null}maxKey(){return null}isRed(){return !1}checkMaxDepth(){return !0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(t){this.comparator=t,this.data=new Sa(this.comparator);}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)));}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key);}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(t){return new _a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t);})),e}isEqual(t){if(!(t instanceof Aa))return !1;if(this.size!==t.size)return !1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return !1}return !0}toArray(){const t=[];return this.forEach((e=>{t.push(e);})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Aa(this.comparator);return e.data=t,e}}class _a{constructor(t){this.iter=t;}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Sa(Gr.comparator);function ka(){return Ra}const Na=new Sa(Gr.comparator);function Da(){return Na}function La(){return new Ia((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Sa(Gr.comparator);const Oa=new Aa(Gr.comparator);function Ma(...t){let e=Oa;for(const n of t)e=e.add(n);return e}const xa=new Aa(Sr);function Pa(){return xa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s;}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Va.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ua(Ar.min(),n,Pa(),ka(),Ma())}}class Va{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s;}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Va(Mr.EMPTY_BYTE_STRING,e,Ma(),Ma(),Ma())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e,n,i){this.O=t,this.removedTargetIds=e,this.key=n,this.F=i;}}class Ba{constructor(t,e){this.targetId=t,this.$=e;}}class ja{constructor(t,e,n=Mr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i;}}class qa{constructor(){this.B=0,this.L=Ka(),this.U=Mr.EMPTY_BYTE_STRING,this.q=!1,this.G=!0;}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(t){t.approximateByteSize()>0&&(this.G=!0,this.U=t);}H(){let t=Ma(),e=Ma(),n=Ma();return this.L.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:ar();}})),new Va(this.U,this.q,t,e,n)}J(){this.G=!1,this.L=Ka();}Y(t,e){this.G=!0,this.L=this.L.insert(t,e);}X(t){this.G=!0,this.L=this.L.remove(t);}Z(){this.B+=1;}tt(){this.B-=1;}et(){this.G=!0,this.q=!0;}}class $a{constructor(t){this.nt=t,this.st=new Map,this.it=ka(),this.rt=Wa(),this.ot=new Aa(Sr);}ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F);}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:ar();}}));}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n);}));}_t(t){const e=t.targetId,n=t.$.count,i=this.wt(e);if(i){const t=i.target;if(yo(t))if(0===n){const n=new Gr(t.path);this.ct(e,n,uo.newNoDocument(n,Ar.min()));}else ur(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e));}}yt(t){const e=new Map;this.st.forEach(((n,i)=>{const s=this.wt(i);if(s){if(n.current&&yo(s.target)){const e=new Gr(s.target.path);null!==this.it.get(e)||this.It(i,e)||this.ct(i,e,uo.newNoDocument(e,t));}n.j&&(e.set(i,n.H()),n.J());}}));let n=Ma();this.rt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.wt(t);return !e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t));})),this.it.forEach(((e,n)=>n.setReadTime(t)));const i=new Ua(t,e,this.ot,this.it,n);return this.it=ka(),this.rt=Wa(),this.ot=new Aa(Sr),i}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t));}ct(t,e,n){if(!this.ft(t))return;const i=this.lt(t);this.It(t,e)?i.Y(e,1):i.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n));}removeTarget(t){this.st.delete(t);}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z();}lt(t){let e=this.st.get(t);return e||(e=new qa,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Aa(Sr),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||ir("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.K?null:this.nt.Et(t)}dt(t){this.st.set(t,new qa),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null);}));}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}}function Wa(){return new Sa(Gr.comparator)}function Ka(){return new Sa(Gr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={asc:"ASCENDING",desc:"DESCENDING"},Ha={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class za{constructor(t,e){this.databaseId=t,this.N=e;}}function Xa(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qa(t,e){return t.N?e.toBase64():e.toUint8Array()}function Ya(t){return ur(!!t),Ar.fromTimestamp(function(t){const e=Pr(t);return new Cr(e.seconds,e.nanos)}(t))}function Ja(t,e){return function(t){return new Dr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Za(t){const e=Dr.fromString(t);return ur(pu(e)),e}function tu(t,e){const n=Za(e);if(n.get(1)!==t.databaseId.projectId)throw new hr(lr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new hr(lr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Gr(iu(n))}function eu(t,e){return Ja(t.databaseId,e)}function nu(t){return new Dr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iu(t){return ur(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function su(t,e){return {documents:[eu(t,e.path)]}}function ru(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=eu(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=eu(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(so(t.value))return {unaryFilter:{field:lu(t.field),op:"IS_NAN"}};if(io(t.value))return {unaryFilter:{field:lu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(so(t.value))return {unaryFilter:{field:lu(t.field),op:"IS_NOT_NAN"}};if(io(t.value))return {unaryFilter:{field:lu(t.field),op:"IS_NOT_NULL"}}}return {fieldFilter:{field:lu(t.field),op:cu(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return {field:lu(t.field),direction:uu(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.N||Wr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return {before:!t.inclusive,values:t.position}}(e.endAt)),n}function ou(t){let e=function(t){const e=Za(t);return 4===e.length?Dr.emptyPath():iu(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ur(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId);}let r=[];n.where&&(r=au(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ro(hu(t.field),function(t){switch(t){case"ASCENDING":return "asc";case"DESCENDING":return "desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Wr(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new _o(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new _o(n,e)}(n.endAt)),function(t,e,n,i,s,r,o,a){return new Lo(t,e,n,i,s,r,o,a)}(e,s,o,r,a,"F",u,c)}function au(t){return t?void 0!==t.unaryFilter?[fu(t)]:void 0!==t.fieldFilter?[du(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>au(t))).reduce(((t,e)=>t.concat(e))):ar():[]}function uu(t){return Ga[t]}function cu(t){return Ha[t]}function lu(t){return {fieldPath:t.canonicalString()}}function hu(t){return Or.fromServerFormat(t.fieldPath)}function du(t){return vo.create(hu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return "==";case"NOT_EQUAL":return "!=";case"GREATER_THAN":return ">";case"GREATER_THAN_OR_EQUAL":return ">=";case"LESS_THAN":return "<";case"LESS_THAN_OR_EQUAL":return "<=";case"ARRAY_CONTAINS":return "array-contains";case"IN":return "in";case"NOT_IN":return "not-in";case"ARRAY_CONTAINS_ANY":return "array-contains-any";default:return ar()}}(t.fieldFilter.op),t.fieldFilter.value)}function fu(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hu(t.unaryFilter.field);return vo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hu(t.unaryFilter.field);return vo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hu(t.unaryFilter.field);return vo.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hu(t.unaryFilter.field);return vo.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ar()}}function pu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.onCommittedListeners=[];}addOnCommittedListener(t){this.onCommittedListeners.push(t);}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()));}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t);}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t);}));}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ar(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mu(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i);},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i);};}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e);}))}wrapUserFunction(t){try{const e=t();return e instanceof mu?e:mu.resolve(e)}catch(t){return mu.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mu.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mu.reject(e)}static resolve(t){return new mu(((e,n)=>{e(t);}))}static reject(t){return new mu(((e,n)=>{n(t);}))}static waitFor(t){return new mu(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e();}),(t=>n(t)));})),r=!0,s===i&&e();}))}static or(t){let e=mu.resolve(!1);for(const n of t)e=e.next((t=>t?mu.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i));})),this.waitFor(n)}}function yu(t){return "IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i;}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&ca(i,t,n[e]);}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&la(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&la(e,t,this.localWriteTime);}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(Ar.min());}));}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ma())}isEqual(t){return this.batchId===t.batchId&&Tr(this.mutations,t.mutations,((t,e)=>ha(t,e)))&&Tr(this.baseMutations,t.baseMutations,((t,e)=>ha(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e){this.largestBatchId=t,this.mutation=e;}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return `Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,e,n,i,s=Ar.min(),r=Ar.min(),o=Mr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o;}withSequenceNumber(t){return new Eu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Eu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Eu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t){this.Jt=t;}}function Iu(t){const e=ou({parent:t.parent,structuredQuery:t.structuredQuery});return "LAST"===t.limitType?function(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.qe=new Tu;}addToCollectionParentIndex(t,e){return this.qe.add(e),mu.resolve()}getCollectionParents(t,e){return mu.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return mu.resolve()}deleteFieldIndex(t,e){return mu.resolve()}getDocumentsMatchingTarget(t,e){return mu.resolve(null)}getFieldIndex(t,e){return mu.resolve(null)}getFieldIndexes(t,e){return mu.resolve([])}getNextCollectionGroupToUpdate(t){return mu.resolve(null)}updateCollectionGroup(t,e,n){return mu.resolve()}updateIndexEntries(t,e){return mu.resolve()}}class Tu{constructor(){this.index={};}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Aa(Dr.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return (this.index[t]||new Aa(Dr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.wn=t;}next(){return this.wn+=2,this.wn}static mn(){return new Cu(0)}static gn(){return new Cu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t){if(t.code!==lr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ir("LocalStore","Unexpectedly lost primary lease");}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.changes=new Ia((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1;}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t);}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,uo.newInvalidDocument(t).setReadTime(e));}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mu.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,n){this.fs=t,this.$s=e,this.indexManager=n;}Bs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Ls(t,e,n)))}Ls(t,e,n){return this.fs.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Us(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n);}));}qs(t,e){return this.fs.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.$s.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Us(e,t)))}Ks(t,e,n){return function(t){return Gr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Qs(t,e.path):Vo(e)?this.js(t,e,n):this.Ws(t,e,n)}Qs(t,e){return this.Bs(t,new Gr(e)).next((t=>{let e=Da();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}js(t,e,n){const i=e.collectionGroup;let s=Da();return this.indexManager.getCollectionParents(t,i).next((r=>mu.forEach(r,(r=>{const o=function(t,e){return new Lo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.Ws(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e);}));}))})).next((()=>s))))}Ws(t,e,n){let i;return this.fs.getAllFromCollection(t,e.path,n).next((n=>(i=n,this.$s.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let s=i.get(n);null==s&&(s=uo.newInvalidDocument(n),i=i.insert(n,s)),la(t,s,e.localWriteTime),s.isFoundDocument()||(i=i.remove(n));}})).next((()=>(i.forEach(((t,n)=>{Wo(e,n)||(i=i.remove(t));})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.zs=n,this.Hs=i;}static Js(t,e){let n=Ma(),i=Ma();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key);}return new ku(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{Ys(t){this.Xs=t;}Ks(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(Ar.min())?this.Zs(t,e):this.Xs.qs(t,i).next((s=>{const r=this.ti(e,s);return (Mo(e)||xo(e))&&this.ei(e.limitType,r,i,n)?this.Zs(t,e):(nr()<=gt.DEBUG&&ir("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),$o(e)),this.Xs.Ks(t,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Ar.fromTimestamp(1e9===i?new Cr(n+1,0):new Cr(n,i));return new lo(s,Gr.empty(),e)}(n,-1)).next((t=>(r.forEach((e=>{t=t.insert(e.key,e);})),t))))}))}ti(t,e){let n=new Aa(Ko(t));return e.forEach(((e,i)=>{Wo(t,i)&&(n=n.add(i));})),n}ei(t,e,n,i){if(n.size!==e.size)return !0;const s="F"===t?e.last():e.first();return !!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zs(t,e){return nr()<=gt.DEBUG&&ir("QueryEngine","Using full collection scan to execute query:",$o(e)),this.Xs.Ks(t,e,lo.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e,n,i){this.persistence=t,this.ni=e,this.M=i,this.si=new Sa(Sr),this.ii=new Ia((t=>go(t)),mo),this.ri=new Map,this.oi=t.getRemoteDocumentCache(),this.ls=t.getTargetCache(),this.ds=t.getBundleCache(),this.ui(n);}ui(t){this.indexManager=this.persistence.getIndexManager(t),this.$s=this.persistence.getMutationQueue(t,this.indexManager),this.ai=new Ru(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai);}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.si)))}}async function Lu(t,e){const n=cr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.$s.getAllMutationBatches(t).next((s=>(i=s,n.ui(e),n.$s.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Ma();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key);}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key);}return n.ai.qs(t,o).next((t=>({ci:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Ou(t){const e=cr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ls.getLastRemoteSnapshotVersion(t)))}function Mu(t,e){const n=cr(t),i=e.snapshotVersion;let s=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.oi.newChangeBuffer({trackRemovals:!0});s=n.si;const o=[];e.targetChanges.forEach(((r,a)=>{const u=s.get(a);if(!u)return;o.push(n.ls.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.ls.addMatchingKeys(t,r.addedDocuments,a))));let c=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(Mr.EMPTY_BYTE_STRING,Ar.min()).withLastLimboFreeSnapshotVersion(Ar.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,r)&&o.push(n.ls.updateTargetData(t,c));}));let a=ka();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i));})),o.push(function(t,e,n){let i=Ma();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=ka();return n.forEach(((n,s)=>{const r=t.get(n);s.isNoDocument()&&s.version.isEqual(Ar.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!r.isValidDocument()||s.version.compareTo(r.version)>0||0===s.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):ir("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",s.version);})),i}))}(t,r,e.documentUpdates).next((t=>{a=t;}))),!i.isEqual(Ar.min())){const e=n.ls.getLastRemoteSnapshotVersion(t).next((e=>n.ls.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e);}return mu.waitFor(o).next((()=>r.apply(t))).next((()=>n.ai.Gs(t,a))).next((()=>a))})).then((t=>(n.si=s,t)))}async function xu(t,e,n){const i=cr(t),s=i.si.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)));}catch(t){if(!yu(t))throw t;ir("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`);}i.si=i.si.remove(e),i.ii.delete(s.target);}function Pu(t,e,n){const i=cr(t);let s=Ar.min(),r=Ma();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=cr(t),s=i.ii.get(n);return void 0!==s?mu.resolve(i.si.get(s)):i.ls.getTargetData(e,n)}(i,t,Bo(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.ls.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t;}))})).next((()=>i.ni.Ks(t,e,n?s:Ar.min(),n?r:Ma()))).next((t=>(function(t,e,n){let i=Ar.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime);})),t.ri.set(e,i);}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,hi:r})))))}class Uu{constructor(t){this.M=t,this._i=new Map,this.wi=new Map;}getBundleMetadata(t,e){return mu.resolve(this._i.get(e))}saveBundleMetadata(t,e){var n;return this._i.set(e.id,{id:(n=e).id,version:n.version,createTime:Ya(n.createTime)}),mu.resolve()}getNamedQuery(t,e){return mu.resolve(this.wi.get(e))}saveNamedQuery(t,e){return this.wi.set(e.name,function(t){return {name:t.name,query:Iu(t.bundledQuery),readTime:Ya(t.readTime)}}(e)),mu.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.overlays=new Sa(Gr.comparator),this.mi=new Map;}getOverlay(t,e){return mu.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.Xt(t,e,i);})),mu.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.mi.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.mi.delete(n)),mu.resolve()}getOverlaysForCollection(t,e,n){const i=La(),s=e.length+1,r=new Gr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t);}return mu.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new Sa(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=La(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t);}}const o=La(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return mu.resolve(o)}Xt(t,e,n){if(null===n)return;const i=this.overlays.get(n.key);if(null!==i){const t=this.mi.get(i.largestBatchId).delete(n.key);this.mi.set(i.largestBatchId,t);}this.overlays=this.overlays.insert(n.key,new wu(e,n));let s=this.mi.get(e);void 0===s&&(s=Ma(),this.mi.set(e,s)),this.mi.set(e,s.add(n.key));}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.gi=new Aa(Bu.yi),this.pi=new Aa(Bu.Ii);}isEmpty(){return this.gi.isEmpty()}addReference(t,e){const n=new Bu(t,e);this.gi=this.gi.add(n),this.pi=this.pi.add(n);}Ti(t,e){t.forEach((t=>this.addReference(t,e)));}removeReference(t,e){this.Ei(new Bu(t,e));}Ai(t,e){t.forEach((t=>this.removeReference(t,e)));}Ri(t){const e=new Gr(new Dr([])),n=new Bu(e,t),i=new Bu(e,t+1),s=[];return this.pi.forEachInRange([n,i],(t=>{this.Ei(t),s.push(t.key);})),s}bi(){this.gi.forEach((t=>this.Ei(t)));}Ei(t){this.gi=this.gi.delete(t),this.pi=this.pi.delete(t);}Pi(t){const e=new Gr(new Dr([])),n=new Bu(e,t),i=new Bu(e,t+1);let s=Ma();return this.pi.forEachInRange([n,i],(t=>{s=s.add(t.key);})),s}containsKey(t){const e=new Bu(t,0),n=this.gi.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Bu{constructor(t,e){this.key=t,this.Vi=e;}static yi(t,e){return Gr.comparator(t.key,e.key)||Sr(t.Vi,e.Vi)}static Ii(t,e){return Sr(t.Vi,e.Vi)||Gr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.$s=[],this.vi=1,this.Si=new Aa(Bu.yi);}checkEmpty(t){return mu.resolve(0===this.$s.length)}addMutationBatch(t,e,n,i){const s=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const r=new vu(s,e,n,i);this.$s.push(r);for(const e of i)this.Si=this.Si.add(new Bu(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return mu.resolve(r)}lookupMutationBatch(t,e){return mu.resolve(this.Di(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Ci(n),s=i<0?0:i;return mu.resolve(this.$s.length>s?this.$s[s]:null)}getHighestUnacknowledgedBatchId(){return mu.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(t){return mu.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Bu(e,0),i=new Bu(e,Number.POSITIVE_INFINITY),s=[];return this.Si.forEachInRange([n,i],(t=>{const e=this.Di(t.Vi);s.push(e);})),mu.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Aa(Sr);return e.forEach((t=>{const e=new Bu(t,0),i=new Bu(t,Number.POSITIVE_INFINITY);this.Si.forEachInRange([e,i],(t=>{n=n.add(t.Vi);}));})),mu.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Gr.isDocumentKey(s)||(s=s.child(""));const r=new Bu(new Gr(s),0);let o=new Aa(Sr);return this.Si.forEachWhile((t=>{const e=t.key.path;return !!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.Vi)),!0)}),r),mu.resolve(this.xi(o))}xi(t){const e=[];return t.forEach((t=>{const n=this.Di(t);null!==n&&e.push(n);})),e}removeMutationBatch(t,e){ur(0===this.Ni(e.batchId,"removed")),this.$s.shift();let n=this.Si;return mu.forEach(e.mutations,(i=>{const s=new Bu(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Si=n;}))}dn(t){}containsKey(t,e){const n=new Bu(e,0),i=this.Si.firstAfterOrEqual(n);return mu.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.$s.length,mu.resolve()}Ni(t,e){return this.Ci(t)}Ci(t){return 0===this.$s.length?0:t-this.$s[0].batchId}Di(t){const e=this.Ci(t);return e<0||e>=this.$s.length?null:this.$s[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t){this.ki=t,this.docs=new Sa(Gr.comparator),this.size=0;}setIndexManager(t){this.indexManager=t;}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ki(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size);}getEntry(t,e){const n=this.docs.get(e);return mu.resolve(n?n.document.mutableCopy():uo.newInvalidDocument(e))}getEntries(t,e){let n=ka();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():uo.newInvalidDocument(t));})),mu.resolve(n)}getAllFromCollection(t,e,n){let i=ka();const s=new Gr(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ho(co(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()));}return mu.resolve(i)}getAllFromCollectionGroup(t,e,n,i){ar();}Mi(t,e){return mu.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new $u(this)}getSize(t){return mu.resolve(this.size)}}class $u extends _u{constructor(t){super(),this.qn=t;}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.qn.addEntry(t,i)):this.qn.removeEntry(n);})),mu.waitFor(e)}getFromCache(t,e){return this.qn.getEntry(t,e)}getAllFromCache(t,e){return this.qn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.persistence=t,this.Oi=new Ia((t=>go(t)),mo),this.lastRemoteSnapshotVersion=Ar.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Fu,this.targetCount=0,this.Bi=Cu.mn();}forEachTarget(t,e){return this.Oi.forEach(((t,n)=>e(n))),mu.resolve()}getLastRemoteSnapshotVersion(t){return mu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mu.resolve(this.Fi)}allocateTargetId(t){return this.highestTargetId=this.Bi.next(),mu.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fi&&(this.Fi=e),mu.resolve()}In(t){this.Oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Bi=new Cu(e),this.highestTargetId=e),t.sequenceNumber>this.Fi&&(this.Fi=t.sequenceNumber);}addTargetData(t,e){return this.In(e),this.targetCount+=1,mu.resolve()}updateTargetData(t,e){return this.In(e),mu.resolve()}removeTargetData(t,e){return this.Oi.delete(e.target),this.$i.Ri(e.targetId),this.targetCount-=1,mu.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Oi.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Oi.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++);})),mu.waitFor(s).next((()=>i))}getTargetCount(t){return mu.resolve(this.targetCount)}getTargetData(t,e){const n=this.Oi.get(e)||null;return mu.resolve(n)}addMatchingKeys(t,e,n){return this.$i.Ti(e,n),mu.resolve()}removeMatchingKeys(t,e,n){this.$i.Ai(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e));})),mu.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.$i.Ri(e),mu.resolve()}getMatchingKeysForTargetId(t,e){const n=this.$i.Pi(e);return mu.resolve(n)}containsKey(t,e){return mu.resolve(this.$i.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.Li={},this.overlays={},this.ts=new Er(0),this.es=!1,this.es=!0,this.referenceDelegate=t(this),this.ls=new Wu(this),this.indexManager=new Su,this.fs=function(t){return new qu(t)}((t=>this.referenceDelegate.Ui(t))),this.M=new bu(e),this.ds=new Uu(this.M);}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Li[t.toKey()];return n||(n=new ju(e,this.referenceDelegate),this.Li[t.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(t,e,n){ir("MemoryPersistence","Starting transaction:",t);const i=new Gu(this.ts.next());return this.referenceDelegate.qi(),n(i).next((t=>this.referenceDelegate.Gi(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ki(t,e){return mu.or(Object.values(this.Li).map((n=>()=>n.containsKey(t,e))))}}class Gu extends gu{constructor(t){super(),this.currentSequenceNumber=t;}}class Hu{constructor(t){this.persistence=t,this.Qi=new Fu,this.ji=null;}static Wi(t){return new Hu(t)}get zi(){if(this.ji)return this.ji;throw ar()}addReference(t,e,n){return this.Qi.addReference(n,e),this.zi.delete(n.toString()),mu.resolve()}removeReference(t,e,n){return this.Qi.removeReference(n,e),this.zi.add(n.toString()),mu.resolve()}markPotentiallyOrphaned(t,e){return this.zi.add(e.toString()),mu.resolve()}removeTarget(t,e){this.Qi.Ri(e.targetId).forEach((t=>this.zi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.zi.add(t.toString())));})).next((()=>n.removeTargetData(t,e)))}qi(){this.ji=new Set;}Gi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mu.forEach(this.zi,(n=>{const i=Gr.fromPath(n);return this.Hi(t,i).next((t=>{t||e.removeEntry(i,Ar.min());}))})).next((()=>(this.ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hi(t,e).next((t=>{t?this.zi.delete(e.toString()):this.zi.add(e.toString());}))}Ui(t){return 0}Hi(t,e){return mu.or([()=>mu.resolve(this.Qi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ki(t,e)])}}class zu{constructor(){this.activeTargetIds=Pa();}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t);}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t);}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xu{constructor(){this.Fr=new zu,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null;}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e;}removeLocalQueryTarget(t){this.Fr.Zi(t);}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t];}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new zu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr();}Br(t){this.Kr.push(t);}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr);}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr);}Ur(){ir("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Kr)t(0);}Gr(){ir("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Kr)t(1);}static vt(){return "undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.jr=t.jr,this.Wr=t.Wr;}zr(t){this.Hr=t;}Jr(t){this.Yr=t;}onMessage(t){this.Xr=t;}close(){this.Wr();}send(t){this.jr(t);}Zr(){this.Hr();}eo(t){this.Yr(t);}no(t){this.Xr(t);}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents";}ro(t,e,n,i,s){const r=this.oo(t,e);ir("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.ao(t,r,o,n).then((t=>(ir("RestConnection","Received: ",t),t)),(e=>{throw rr("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}co(t,e,n,i,s){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+tr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e));}oo(t,e){const n=Ju[t];return `${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams;}ao(t,e,n,i){return new Promise(((s,r)=>{const o=new Ys;o.listenOnce(Ks.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ws.NO_ERROR:const e=o.getResponseJson();ir("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Ws.TIMEOUT:ir("Connection",'RPC "'+t+'" timed out'),r(new hr(lr.DEADLINE_EXCEEDED,"Request time out"));break;case Ws.HTTP_ERROR:const n=o.getStatus();if(ir("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(lr).indexOf(e)>=0?e:lr.UNKNOWN}(t.status);r(new hr(e,t.message));}else r(new hr(lr.UNKNOWN,"Server responded with status "+o.getStatus()));}else r(new hr(lr.UNAVAILABLE,"Connection failed."));break;default:ar();}}finally{ir("Connection",'RPC "'+t+'" completed.');}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15);}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Fs,r=On(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Xs({})),this.uo(o.initMessageHeaders,e,n),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())||"object"==typeof navigator&&"ReactNative"===navigator.product||tt().indexOf("Electron/")>=0||function(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||tt().indexOf("MSAppHost/")>=0||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return "object"==typeof t&&void 0!==t.id}()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");ir("Connection","Creating WebChannel: "+a,o);const u=s.createWebChannel(a,o);let c=!1,l=!1;const h=new Zu({jr:t=>{l?ir("Connection","Not sending because WebChannel is closed:",t):(c||(ir("Connection","Opening WebChannel transport."),u.open(),c=!0),ir("Connection","WebChannel sending:",t),u.send(t));},Wr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t);}catch(t){setTimeout((()=>{throw t}),0);}}));};return d(u,Qs.EventType.OPEN,(()=>{l||ir("Connection","WebChannel transport opened.");})),d(u,Qs.EventType.CLOSE,(()=>{l||(l=!0,ir("Connection","WebChannel transport closed"),h.eo());})),d(u,Qs.EventType.ERROR,(t=>{l||(l=!0,rr("Connection","WebChannel transport errored:",t),h.eo(new hr(lr.UNAVAILABLE,"The operation could not be completed")));})),d(u,Qs.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];ur(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){ir("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=wa[t];if(void 0!==e)return ba(e)}(t),n=s.message;void 0===e&&(e=lr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.eo(new hr(e,n)),u.close();}else ir("Connection","WebChannel received:",n),h.no(n);}})),d(r,Gs.STAT_EVENT,(t=>{t.stat===Hs?ir("Connection","Detected buffering proxy"):t.stat===zs&&ir("Connection","Detected no buffering proxy");})),setTimeout((()=>{h.Zr();}),0),h}}function ec(){return "undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return new za(t,!0)}class ic{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Jn=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset();}reset(){this.wo=0;}po(){this.wo=this._o;}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&ir("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o);}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null);}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null);}To(){return (Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t,e,n,i,s,r,o,a){this.Jn=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new ic(t,e);}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo();}async stop(){this.Do()&&await this.close(0);}No(){this.state=0,this.So.reset();}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())));}Oo(t){this.Fo(),this.stream.send(t);}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null);}$o(){this.vo&&(this.vo.cancel(),this.vo=null);}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===lr.RESOURCE_EXHAUSTED?(sr(e.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===lr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e);}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n);}),(e=>{t((()=>{const t=new hr(lr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}));}));}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Go(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())));})),this.stream.Jr((t=>{n((()=>this.qo(t)));})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)));}));}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start();}));}qo(t){return ir("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.Jn.enqueueAndForget((()=>this.Po===t?e():(ir("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())));}}}class rc extends sc{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.M=s;}Go(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return "NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ar()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.N?(ur(void 0===e||"string"==typeof e),Mr.fromBase64String(e||"")):(ur(void 0===e||e instanceof Uint8Array),Mr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?lr.UNKNOWN:ba(t.code);return new hr(e,t.message||"")}(o);n=new ja(i,s,r,a||null);}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=tu(t,i.document.name),r=Ya(i.document.updateTime),o=new ao({mapValue:{fields:i.document.fields}}),a=uo.newFoundDocument(s,r,o),u=i.targetIds||[],c=i.removedTargetIds||[];n=new Fa(u,c,a.key,a);}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=tu(t,i.document),r=i.readTime?Ya(i.readTime):Ar.min(),o=uo.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Fa([],a,o.key,o);}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=tu(t,i.document),r=i.removedTargetIds||[];n=new Fa([],r,s,null);}else {if(!("filter"in e))return ar();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new va(i),r=t.targetId;n=new Ba(r,s);}}return n}(this.M,t),n=function(t){if(!("targetChange"in t))return Ar.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ar.min():e.readTime?Ya(e.readTime):Ar.min()}(t);return this.listener.Ko(e,n)}Qo(t){const e={};e.database=nu(this.M),e.addTarget=function(t,e){let n;const i=e.target;return n=yo(i)?{documents:su(t,i)}:{query:ru(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Qa(t,e.resumeToken):e.snapshotVersion.compareTo(Ar.min())>0&&(n.readTime=Xa(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return "existence-filter-mismatch";case 2:return "limbo-document";default:return ar()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,t);n&&(e.labels=n),this.Oo(e);}jo(t){const e={};e.database=nu(this.M),e.removeTarget=t,this.Oo(e);}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.M=i,this.Zo=!1;}tu(){if(this.Zo)throw new hr(lr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw "FirebaseError"===t.name?(t.code===lr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new hr(lr.UNKNOWN,t.toString())}))}co(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.co(t,e,n,i,s))).catch((t=>{throw "FirebaseError"===t.name?(t.code===lr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new hr(lr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0;}}class ac{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0;}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))));}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")));}set(t){this.au(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t);}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t));}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(sr(e),this.su=!1):ir("OnlineStateTracker",e);}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null);}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{yc(this)&&(ir("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=cr(t);e.lu.add(4),await lc(e),e._u.set("Unknown"),e.lu.delete(4),await cc(e);}(this));}));})),this._u=new ac(n,i);}}async function cc(t){if(yc(t))for(const e of t.fu)await e(!0);}async function lc(t){for(const e of t.fu)await e(!1);}function hc(t,e){const n=cr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),mc(n)?gc(n):Tc(n).Co()&&fc(n,e));}function dc(t,e){const n=cr(t),i=Tc(n);n.hu.delete(e),i.Co()&&pc(n,e),0===n.hu.size&&(i.Co()?i.ko():yc(n)&&n._u.set("Unknown"));}function fc(t,e){t.wu.Z(e.targetId),Tc(t).Qo(e);}function pc(t,e){t.wu.Z(e),Tc(t).jo(e);}function gc(t){t.wu=new $a({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.hu.get(e)||null}),Tc(t).start(),t._u.iu();}function mc(t){return yc(t)&&!Tc(t).Do()&&t.hu.size>0}function yc(t){return 0===cr(t).lu.size}function vc(t){t.wu=void 0;}async function wc(t){t.hu.forEach(((e,n)=>{fc(t,e);}));}async function Ec(t,e){vc(t),mc(t)?(t._u.uu(e),gc(t)):t._u.set("Unknown");}async function bc(t,e,n){if(t._u.set("Online"),e instanceof ja&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.hu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.hu.delete(i),t.wu.removeTarget(i));}(t,e);}catch(n){ir("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ic(t,n);}else if(e instanceof Fa?t.wu.ut(e):e instanceof Ba?t.wu._t(e):t.wu.ht(e),!n.isEqual(Ar.min()))try{const e=await Ou(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.yt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(i);s&&t.hu.set(i,s.withResumeToken(n.resumeToken,e));}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Mr.EMPTY_BYTE_STRING,n.snapshotVersion)),pc(t,e);const i=new Eu(n.target,e,1,n.sequenceNumber);fc(t,i);})),t.remoteSyncer.applyRemoteEvent(n)}(t,n);}catch(e){ir("RemoteStore","Failed to raise snapshot:",e),await Ic(t,e);}}async function Ic(t,e,n){if(!yu(e))throw e;t.lu.add(1),await lc(t),t._u.set("Offline"),n||(n=()=>Ou(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ir("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await cc(t);}));}async function Sc(t,e){const n=cr(t);n.asyncQueue.verifyOperationInProgress(),ir("RemoteStore","RemoteStore received new credentials");const i=yc(n);n.lu.add(3),await lc(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await cc(n);}function Tc(t){return t.mu||(t.mu=function(t,e,n){const i=cr(t);return i.tu(),new rc(e,i.bo,i.authCredentials,i.appCheckCredentials,i.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:wc.bind(null,t),Jr:Ec.bind(null,t),Ko:bc.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),mc(t)?gc(t):t._u.set("Unknown")):(await t.mu.stop(),vc(t));}))),t.mu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cc{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}));}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Cc(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t);}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hr(lr.CANCELLED,"Operation cancelled"+(t?": "+t:""))));}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()));}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null);}}function Ac(t,e){if(sr("AsyncQueue",`${e}: ${t}`),yu(t))return new hr(lr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Gr.comparator(e.key,n.key):(t,e)=>Gr.comparator(t.key,e.key),this.keyedMap=Da(),this.sortedSet=new Sa(this.comparator);}static emptySet(t){return new _c(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)));}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _c))return !1;if(this.size!==t.size)return !1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return !1}return !0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString());})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _c;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.yu=new Sa(Gr.comparator);}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):ar():this.yu=this.yu.insert(e,t);}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n);})),t}}class kc{constructor(t,e,n,i,s,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a;}static fromInitialDocuments(t,e,n,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t});})),new kc(t,e,_c.emptySet(e),s,n,i,!0,!1)}get hasPendingWrites(){return !this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return !1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return !1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return !1;return !0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.Iu=void 0,this.listeners=[];}}class Dc{constructor(){this.queries=new Ia((t=>qo(t)),jo),this.onlineState="Unknown",this.Tu=new Set;}}async function Lc(t,e){const n=cr(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Nc),s)try{r.Iu=await n.onListen(i);}catch(t){const n=Ac(t,`Initialization of query '${$o(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Pc(n);}async function Oc(t,e){const n=cr(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length);}if(s)return n.queries.delete(i),n.onUnlisten(i)}function Mc(t,e){const n=cr(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Au(t)&&(i=!0);s.Iu=t;}}i&&Pc(n);}function xc(t,e,n){const i=cr(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e);}function Pc(t){t.Tu.forEach((t=>{t.next();}));}class Uc{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{};}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new kc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0);}let e=!1;return this.bu?this.Vu(t)&&(this.Ru.next(t),e=!0):this.vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t);}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}vu(t,e){if(!t.fromCache)return !0;const n="Offline"!==e;return !(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}Vu(t){if(t.docChanges.length>0)return !0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return !(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=kc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t);}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.key=t;}}class Fc{constructor(t){this.key=t;}}class Bc{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Ma(),this.mutatedKeys=Ma(),this.Lu=Ko(t),this.Uu=new _c(this.Lu);}get qu(){return this.Fu}Gu(t,e){const n=e?e.Ku:new Rc,i=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a=Mo(this.query)&&i.size===this.query.limit?i.last():null,u=xo(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),l=Wo(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||u&&this.Lu(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(r=r.add(l),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)));})),Mo(this.query)||xo(this.query))for(;r.size>this.query.limit;){const t=Mo(this.query)?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t});}return {Uu:r,Ku:n,ei:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Ku.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ar()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new kc(this.query,t.Uu,i,s,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Rc,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(t){return !this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current);}Wu(){if(!this.current)return [];const t=this.Bu;this.Bu=Ma(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key));}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Fc(t));})),this.Bu.forEach((n=>{t.has(n)||e.push(new Vc(n));})),e}Ju(t){this.Fu=t.hi,this.Bu=Ma();const e=this.Gu(t.documents);return this.applyChanges(e,!0)}Yu(){return kc.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class jc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n;}}class qc{constructor(t){this.key=t,this.Xu=!1;}}class $c{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.ta=new Ia((t=>qo(t)),jo),this.ea=new Map,this.na=new Set,this.sa=new Sa(Gr.comparator),this.ia=new Map,this.ra=new Fu,this.oa={},this.ua=new Map,this.aa=Cu.gn(),this.onlineState="Unknown",this.ca=void 0;}get isPrimaryClient(){return !0===this.ca}}async function Wc(t,e){const n=function(t){const e=cr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zc.bind(null,e),e.Zu.Ko=Mc.bind(null,e.eventManager),e.Zu.la=xc.bind(null,e.eventManager),e}(t);let i,s;const r=n.ta.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.Yu();else {const t=await function(t,e){const n=cr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.ls.getTargetData(t,e).next((s=>s?(i=s,mu.resolve(i)):n.ls.allocateTargetId(t).next((s=>(i=new Eu(e,s,0,t.currentSequenceNumber),n.ls.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.si.get(t.targetId);return (null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.si=n.si.insert(t.targetId,t),n.ii.set(e,t.targetId)),t}))}(n.localStore,Bo(e));n.isPrimaryClient&&hc(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await async function(t,e,n,i){t.ha=(e,n,i)=>async function(t,e,n,i){let s=e.view.Gu(n);s.ei&&(s=await Pu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Gu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Yc(t,e.targetId,o.zu),o.snapshot}(t,e,n,i);const s=await Pu(t.localStore,e,!0),r=new Bc(e,s.hi),o=r.Gu(s.documents),a=Va.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);Yc(t,n,u.zu);const c=new jc(e,n,r);return t.ta.set(e,c),t.ea.has(n)?t.ea.get(n).push(e):t.ea.set(n,[e]),u.snapshot}(n,e,i,"current"===r);}return s}async function Kc(t,e){const n=cr(t),i=n.ta.get(e),s=n.ea.get(i.targetId);if(s.length>1)return n.ea.set(i.targetId,s.filter((t=>!jo(t,e)))),void n.ta.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await xu(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),dc(n.remoteStore,i.targetId),Xc(n,i.targetId);})).catch(Au)):(Xc(n,i.targetId),await xu(n.localStore,i.targetId,!0));}async function Gc(t,e){const n=cr(t);try{const t=await Mu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ia.get(e);i&&(ur(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Xu=!0:t.modifiedDocuments.size>0?ur(i.Xu):t.removedDocuments.size>0&&(ur(i.Xu),i.Xu=!1));})),await tl(n,t,e);}catch(t){await Au(t);}}function Hc(t,e,n){const i=cr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ta.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot);})),function(t,e){const n=cr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0);})),i&&Pc(n);}(i.eventManager,e),t.length&&i.Zu.Ko(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e);}}async function zc(t,e,n){const i=cr(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.ia.get(e),r=s&&s.key;if(r){let t=new Sa(Gr.comparator);t=t.insert(r,uo.newNoDocument(r,Ar.min()));const n=Ma().add(r),s=new Ua(Ar.min(),new Map,new Aa(Sr),t,n);await Gc(i,s),i.sa=i.sa.remove(r),i.ia.delete(e),Zc(i);}else await xu(i.localStore,e,!1).then((()=>Xc(i,e,n))).catch(Au);}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ea.get(e))t.ta.delete(i),n&&t.Zu.la(i,n);t.ea.delete(e),t.isPrimaryClient&&t.ra.Ri(e).forEach((e=>{t.ra.containsKey(e)||Qc(t,e);}));}function Qc(t,e){t.na.delete(e.path.canonicalString());const n=t.sa.get(e);null!==n&&(dc(t.remoteStore,n),t.sa=t.sa.remove(e),t.ia.delete(n),Zc(t));}function Yc(t,e,n){for(const i of n)i instanceof Vc?(t.ra.addReference(i.key,e),Jc(t,i)):i instanceof Fc?(ir("SyncEngine","Document no longer in limbo: "+i.key),t.ra.removeReference(i.key,e),t.ra.containsKey(i.key)||Qc(t,i.key)):ar();}function Jc(t,e){const n=e.key,i=n.path.canonicalString();t.sa.get(n)||t.na.has(i)||(ir("SyncEngine","New document in limbo: "+n),t.na.add(i),Zc(t));}function Zc(t){for(;t.na.size>0&&t.sa.size<t.maxConcurrentLimboResolutions;){const e=t.na.values().next().value;t.na.delete(e);const n=new Gr(Dr.fromString(e)),i=t.aa.next();t.ia.set(i,new qc(n)),t.sa=t.sa.insert(n,i),hc(t.remoteStore,new Eu(Bo(Oo(n.path)),i,2,Er.A));}}async function tl(t,e,n){const i=cr(t),s=[],r=[],o=[];i.ta.isEmpty()||(i.ta.forEach(((t,a)=>{o.push(i.ha(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=ku.Js(a.targetId,t);r.push(e);}})));})),await Promise.all(o),i.Zu.Ko(s),await async function(t,e){const n=cr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mu.forEach(e,(e=>mu.forEach(e.zs,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>mu.forEach(e.Hs,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))));}catch(t){if(!yu(t))throw t;ir("LocalStore","Failed to update sequence numbers: "+t);}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.si.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.si=n.si.insert(e,s);}}}(i.localStore,r));}async function el(t,e){const n=cr(t);if(!n.currentUser.isEqual(e)){ir("SyncEngine","User change. New user:",e.toKey());const t=await Lu(n.localStore,e);n.currentUser=e,function(t,e){t.ua.forEach((t=>{t.forEach((t=>{t.reject(new hr(lr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."));}));})),t.ua.clear();}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await tl(n,t.ci);}}function nl(t,e){const n=cr(t),i=n.ia.get(e);if(i&&i.Xu)return Ma().add(i.key);{let t=Ma();const i=n.ea.get(e);if(!i)return t;for(const e of i){const i=n.ta.get(e);t=t.unionWith(i.view.qu);}return t}}class il{constructor(){this.synchronizeTabs=!1;}async initialize(t){this.M=nc(t.databaseInfo.databaseId),this.sharedClientState=this.da(t),this.persistence=this._a(t),await this.persistence.start(),this.gcScheduler=this.wa(t),this.localStore=this.ma(t);}wa(t){return null}ma(t){return function(t,e,n,i){return new Du(t,e,n,i)}(this.persistence,new Nu,t.initialUser,this.M)}_a(t){return new Ku(Hu.Wi,this.M)}da(t){return new Xu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown();}}class sl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Hc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=el.bind(null,this.syncEngine),await async function(t,e){const n=cr(t);e?(n.lu.delete(2),await cc(n)):e||(n.lu.add(2),await lc(n),n._u.set("Unknown"));}(this.remoteStore,this.syncEngine.isPrimaryClient));}createEventManager(t){return new Dc}createDatastore(t){const e=nc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new tc(i));var i;return function(t,e,n,i){return new oc(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Hc(this.syncEngine,t,0),r=Yu.vt()?new Yu:new Qu,new uc(e,n,i,s,r);var e,n,i,s,r;}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new $c(t,e,n,i,s,r);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=cr(t);ir("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await lc(e),e.du.shutdown(),e._u.set("Unknown");}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t){this.observer=t,this.muted=!1;}next(t){this.observer.next&&this.ya(this.observer.next,t);}error(t){this.observer.error?this.ya(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t);}pa(){this.muted=!0;}ya(t,e){this.muted||setTimeout((()=>{this.muted||t(e);}),0);}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Zs.UNAUTHENTICATED,this.clientId=Ir.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{ir("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t;})),this.appCheckCredentials.start(n,(t=>(ir("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))));}async getConfiguration(){return {asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t;}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t;}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hr(lr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve();}catch(e){const n=Ac(e,"Failed to shutdown persistence");t.reject(n);}})),t.promise}}async function al(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(ir("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),ir("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Lu(e.localStore,t),i=t);})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e;}(t,new il)),t.offlineComponents}(t);ir("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Sc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Sc(e.remoteStore,n))),t.onlineComponents=e;}async function ul(t){const e=await async function(t){return t.onlineComponents||(ir("FirestoreClient","Using default OnlineComponentProvider"),await al(t,new sl)),t.onlineComponents}(t),n=e.eventManager;return n.onListen=Wc.bind(null,e.syncEngine),n.onUnlisten=Kc.bind(null,e.syncEngine),n}const cl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){if(!n)throw new hr(lr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hl(t){if(!Gr.isDocumentKey(t))throw new hr(lr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dl(t){if(Gr.isDocumentKey(t))throw new hr(lr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fl(t){if(void 0===t)return "undefined";if(null===t)return "null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return ""+t;if("object"==typeof t){if(t instanceof Array)return "an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return "function"==typeof t?"a function":ar()}function pl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new hr(lr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fl(t);throw new hr(lr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new hr(lr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0;}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else {if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new hr(lr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes;}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new hr(lr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling);}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gl({}),this._settingsFrozen=!1,t instanceof $r?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new hr(lr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(t.options.projectId)}(t));}get app(){if(!this._app)throw new hr(lr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new hr(lr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new pr;switch(t.type){case"gapi":const e=t.client;return ur(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new yr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new hr(lr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials));}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return {app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=cl.get(t);e&&(ir("ComponentProvider","Removing Datastore"),cl.delete(t),e.terminate());}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t;}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yl(this.firestore,t,this._key)}}class vl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t;}withConverter(t){return new vl(this.firestore,t,this._query)}}class wl extends vl{constructor(t,e,n){super(t,e,Oo(n)),this._path=n,this.type="collection";}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yl(this.firestore,null,new Gr(t))}withConverter(t){return new wl(this.firestore,t,this._path)}}function El(t,e,...n){if(t=ot(t),1===arguments.length&&(e=Ir.R()),ll("doc","path",e),t instanceof ml){const i=Dr.fromString(e,...n);return hl(i),new yl(t,null,new Gr(i))}{if(!(t instanceof yl||t instanceof wl))throw new hr(lr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Dr.fromString(e,...n));return hl(i),new yl(t.firestore,t instanceof wl?t.converter:null,new Gr(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new ic(this,"async_queue_retry"),this.Ua=()=>{const t=ec();t&&ir("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo();};const t=ec();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ua);}get isShuttingDown(){return this.Ma}enqueueAndForget(t){this.enqueue(t);}enqueueAndForgetEvenWhileRestricted(t){this.qa(),this.Ga(t);}enterRestrictedMode(t){if(!this.Ma){this.Ma=!0,this.Ba=t||!1;const e=ec();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ua);}}enqueue(t){if(this.qa(),this.Ma)return new Promise((()=>{}));const e=new dr;return this.Ga((()=>this.Ma&&this.Ba?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ka.push(t),this.Ka())));}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset();}catch(t){if(!yu(t))throw t;ir("AsyncQueue","Operation failed with retryable error: "+t);}this.ka.length>0&&this.So.Io((()=>this.Ka()));}}Ga(t){const e=this.Na.then((()=>(this.$a=!0,t().catch((t=>{this.Fa=t,this.$a=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw sr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.$a=!1,t))))));return this.Na=e,e}enqueueAfterDelay(t,e,n){this.qa(),this.La.indexOf(t)>-1&&(e=0);const i=Cc.createAndSchedule(this,t,e,n,(t=>this.Qa(t)));return this.Oa.push(i),i}qa(){this.Fa&&ar();}verifyOperationInProgress(){}async ja(){let t;do{t=this.Na,await t;}while(t!==this.Na)}Wa(t){for(const e of this.Oa)if(e.timerId===t)return !0;return !1}za(t){return this.ja().then((()=>{this.Oa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Oa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ja()}))}Ha(t){this.La.push(t);}Qa(t){const e=this.Oa.indexOf(t);this.Oa.splice(e,1);}}function Il(t){return function(t,e){if("object"!=typeof t||null===t)return !1;const n=t;for(const t of ["next","error","complete"])if(t in n&&"function"==typeof n[t])return !0;return !1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class Sl extends ml{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new bl,this._persistenceKey="name"in t?t.name:"[DEFAULT]";}_terminate(){return this._firestoreClient||Al(this),this._firestoreClient.terminate()}}function Tl(t=function(t="[DEFAULT]"){const e=Ct.get(t);if(!e)throw kt.create("no-app",{appName:t});return e}()){return function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(t,"firestore").getImmediate()}function Cl(t){return t._firestoreClient||Al(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Al(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new qr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ol(t._authCredentials,t._appCheckCredentials,t._queue,i);}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new hr(lr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Or(t);}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this._byteString=t;}static fromBase64String(t){try{return new Rl(Mr.fromBase64String(t))}catch(t){throw new hr(lr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Rl(Mr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return "Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this._methodName=t;}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new hr(lr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new hr(lr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e;}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return {latitude:this._lat,longitude:this._long}}_compareTo(t){return Sr(this._lat,t._lat)||Sr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=/^__.*__$/;function Ll(t){switch(t){case 0:case 2:case 1:return !0;case 3:case 4:return !1;default:throw ar()}}class Ol{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Ja(),this.fieldTransforms=s||[],this.fieldMask=r||[];}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(t){return new Ol(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Xa({path:n,tc:!1});return i.ec(t),i}nc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Xa({path:n,tc:!1});return i.Ja(),i}sc(t){return this.Xa({path:void 0,tc:!0})}ic(t){return Vl(t,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Ja(){if(this.path)for(let t=0;t<this.path.length;t++)this.ec(this.path.get(t));}ec(t){if(0===t.length)throw this.ic("Document fields must not be empty");if(Ll(this.Ya)&&Dl.test(t))throw this.ic('Document fields cannot begin and end with "__"')}}class Ml{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||nc(t);}uc(t,e,n,i=!1){return new Ol({Ya:t,methodName:e,oc:n,path:Or.emptyPath(),tc:!1,rc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function xl(t,e){if(Pl(t=ot(t)))return function(t,e,n){if(!Pl(n)||!function(t){return "object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=fl(n);throw "an object"===i?e.ic(t+" a custom object"):e.ic(t+" "+i)}}("Unsupported field value:",e,t),function(t,e){const n={};return kr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,((t,i)=>{const s=xl(i,e.Za(t));null!=s&&(n[t]=s);})),{mapValue:{fields:n}}}(t,e);if(t instanceof kl)return function(t,e){if(!Ll(e.Ya))throw e.ic(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ic(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n);}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.tc&&4!==e.Ya)throw e.ic("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=xl(s,e.sc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++;}return {arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ot(t)))return {nullValue:"NULL_VALUE"};if("number"==typeof t)return Xo(e.M,t);if("boolean"==typeof t)return {booleanValue:t};if("string"==typeof t)return {stringValue:t};if(t instanceof Date){const n=Cr.fromDate(t);return {timestampValue:Xa(e.M,n)}}if(t instanceof Cr){const n=new Cr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return {timestampValue:Xa(e.M,n)}}if(t instanceof Nl)return {geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rl)return {bytesValue:Qa(e.M,t._byteString)};if(t instanceof yl){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return {referenceValue:Ja(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ic(`Unsupported field value: ${fl(t)}`)}(t,e)}function Pl(t){return !("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Cr||t instanceof Nl||t instanceof Rl||t instanceof yl||t instanceof kl)}const Ul=new RegExp("[~\\*/\\[\\]]");function Vl(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return (r||o)&&(u+=" (found",r&&(u+=` in field ${i}`),o&&(u+=` in document ${s}`),u+=")"),new hr(lr.INVALID_ARGUMENT,a+t+u)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fl{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s;}get id(){return this._key.path.lastSegment()}get ref(){return new yl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(jl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bl extends Fl{data(){return super.data()}}function jl(t,e){return "string"==typeof e?function(t,e,n){if(e.search(Ul)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _l(...e.split("."))._internalPath}catch(i){throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e):e instanceof _l?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e;}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $l extends Fl{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s;}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Wl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(jl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Wl extends $l{data(t={}){return super.data(t)}}class Kl{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ql(i.hasPendingWrites,i.fromCache),this.query=n;}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Wl(this._firestore,this._userDataWriter,n.key,n,new ql(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter));}));}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new hr(lr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Wl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ql(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Wl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ql(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Gl(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Gl(t){switch(t){case 0:return "added";case 2:case 3:return "modified";case 1:return "removed";default:return ar()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t){if(xo(t)&&0===t.explicitOrderBy.length)throw new hr(lr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zl{}class Xl extends zl{constructor(t,e,n){super(),this.hc=t,this.lc=e,this.fc=n,this.type="where";}_apply(t){const e=function(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new Ml(t._databaseId,!!e.ignoreUndefinedProperties,n)}(t.firestore),n=function(t,e,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new hr(lr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Yl(o,r);const e=[];for(const n of o)e.push(Ql(i,t,n));a={arrayValue:{values:e}};}else a=Ql(i,t,o);}else "in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Yl(o,r),a=function(t,e,n,i=!1){return xl(n,t.uc(i?4:3,e))}(n,"where",o,"in"===r||"not-in"===r);const u=vo.create(s,r,a);return function(t,e){if(e.S()){const n=Uo(t);if(null!==n&&!n.isEqual(e.field))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=Po(t);null!==i&&function(t,e,n){if(!n.isEqual(e))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,e.field,i);}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return ["!=","not-in"];case"array-contains":return ["array-contains","array-contains-any","not-in"];case"in":return ["array-contains-any","in","not-in"];case"array-contains-any":return ["array-contains","array-contains-any","in","not-in"];case"not-in":return ["array-contains","array-contains-any","in","not-in","!="];default:return []}}(e.op));if(null!==n)throw n===e.op?new hr(lr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new hr(lr.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,u),u}(t._query,0,e,t.firestore._databaseId,this.hc,this.lc,this.fc);return new vl(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Ql(t,e,n){if("string"==typeof(n=ot(n))){if(""===n)throw new hr(lr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vo(e)&&-1!==n.indexOf("/"))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Dr.fromString(n));if(!Gr.isDocumentKey(i))throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return to(t,new Gr(i))}if(n instanceof yl)return to(t,n._key);throw new hr(lr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fl(n)}.`)}function Yl(t,e){if(!Array.isArray(t)||0===t.length)throw new hr(lr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new hr(lr.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}class Jl{convertValue(t,e="none"){switch(Hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ur(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Vr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ar()}}convertObject(t,e){const n={};return Rr(t.fields,((t,i)=>{n[t]=this.convertValue(i,e);})),n}convertGeoPoint(t){return new Nl(Ur(t.latitude),Ur(t.longitude))}convertArray(t,e){return (t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Br(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(jr(t));default:return null}}convertTimestamp(t){const e=Pr(t);return new Cr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Dr.fromString(t);ur(pu(n));const i=new $r(n.get(1),n.get(3)),s=new Gr(n.popFirst(5));return i.isEqual(e)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){t=pl(t,yl);const e=pl(t.firestore,Sl);return function(t,e,n={}){const i=new dr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new rl({next:r=>{e.enqueueAndForget((()=>Oc(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new hr(lr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new hr(lr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r);},error:t=>s.reject(t)}),o=new Uc(Oo(n.path),r,{includeMetadataChanges:!0,Du:!0});return Lc(t,o)}(await ul(t),t.asyncQueue,e,n,i))),i.promise}(Cl(e),t._key).then((n=>ih(e,t,n)))}class th extends Jl{constructor(t){super(),this.firestore=t;}convertBytes(t){return new Rl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yl(this.firestore,null,e)}}function eh(t){t=pl(t,vl);const e=pl(t.firestore,Sl),n=Cl(e),i=new th(e);return Hl(t._query),function(t,e,n={}){const i=new dr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new rl({next:n=>{e.enqueueAndForget((()=>Oc(t,o))),n.fromCache&&"server"===i.source?s.reject(new hr(lr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n);},error:t=>s.reject(t)}),o=new Uc(n,r,{includeMetadataChanges:!0,Du:!0});return Lc(t,o)}(await ul(t),t.asyncQueue,e,n,i))),i.promise}(n,t._query).then((n=>new Kl(e,i,t,n)))}function nh(t,...e){var n,i,s;t=ot(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Il(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Il(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t);}let u,c,l;if(t instanceof yl)c=pl(t.firestore,Sl),l=Oo(t._key.path),u={next:n=>{e[o]&&e[o](ih(c,t,n));},error:e[o+1],complete:e[o+2]};else {const n=pl(t,vl);c=pl(n.firestore,Sl),l=n._query;const i=new th(c);u={next:t=>{e[o]&&e[o](new Kl(c,i,n,t));},error:e[o+1],complete:e[o+2]},Hl(t._query);}return function(t,e,n,i){const s=new rl(i),r=new Uc(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Lc(await ul(t),r))),()=>{s.pa(),t.asyncQueue.enqueueAndForget((async()=>Oc(await ul(t),r)));}}(Cl(c),l,a,u)}function ih(t,e,n){const i=n.docs.get(e._key),s=new th(t);return new $l(t,s,e._key,i,new ql(n.hasPendingWrites,n.fromCache),e.converter)}var sh,rh,oh,ah,uh,ch,lh,hh,dh,fh,ph,gh,mh,yh;!function(t,e=!0){tr="9.6.10",Rt(new dt("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Sl(i,new gr(t.getProvider("auth-internal")),new wr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Lt(Js,"3.4.7",t),Lt(Js,"3.4.7","esm2017");}();class vh{constructor(){this.resolveWithIframe=(t,e=5e3)=>new Promise((n$1=>{const s=new URL(t.url);if(n(this,sh,"f").has(s))return;n(this,sh,"f").add(s);const r=t.iframeRunOrigin||s.origin;chrome.tabs.query({url:`${r}/*`,active:!0},(t=>{const i=null==t?void 0:t[0];if(!i)return n$1({error:"no tab to execute within"});const r=chrome.tabs.connect(i.id,{name:"resolve-url-with-iframe"}),o=t=>{n$1(t),r.onMessage.removeListener(o);},a=()=>r.onDisconnect.removeListener(a);r.onMessage.addListener(o),r.onDisconnect.addListener(a),r.postMessage({url:s.toString(),timeout:e});}));})),sh.set(this,new Set);}}sh=new WeakMap;const wh={cleanLinkedinInternalUrl:t=>{var e,n;if(!t)return t;t.protocol="https:";const i=wh.getLinkedinInternalId(t),s=null===(n=null===(e=/^(?<path>[^,?#\n]+)/i.exec(t.pathname))||void 0===e?void 0:e.groups)||void 0===n?void 0:n.path;return new URL(`${t.origin}${s}${i?`?id=${i}`:""}`)},isAlreadyLinkedinPublicVanityUrl:t=>{const e=wh.cleanLinkedinInternalUrl(t);return /linkedin.com$/.test(e.hostname)&&/^\/in\/.*$/.test(e.pathname)},cleanLinkedinPublicVanityUrl:t=>{const e=wh.cleanLinkedinInternalUrl(t);return e.search="",e.hash="",e},getLinkedinInternalId:t=>{if(t)return t.searchParams.get("id")},getLinkedinEncodedExternalId:t=>{if(!t)return;const e=t.toString().match("https?://(?:[\\w]+\\.)?linkedin\\.com/in/(ACo[^\\/]{36})(?:/.*)?$");return e?e[1]:void 0}},Eh=[{name:"LINKEDIN_INTERNAL_URL_REGEX",regex:"https?://(?:[\\w]+\\.)?linkedin\\.com/profile/view.+",requestUrl:(t,{cleanLinkedinInternalUrl:e})=>e(t),parseBodyForLinkedinUrl:(t,{requestUrl:e,getLinkedinInternalId:n})=>{var i;const s=`<code[^>]*>[^<]*&quot;publicIdentifier&quot;:&quot;([^,]+)&quot;,[^<]*</code>[^<]*<code[^>]*>[^<]*${n(e)}/profileView[^<]*</code>`,r=null===(i=t.match(s))||void 0===i?void 0:i[1];if(r)return new URL(r)}},{name:"LINKEDIN_SALES_URL_REGEX",regex:"https?://(?:[\\w]+\\.)?linkedin.com/sales/(people|profile|lead)/.+",requestUrl:t=>(t=>{var e,n;const i=null===(n=null===(e=null==t?void 0:t.toString().split(","))||void 0===e?void 0:e[0])||void 0===n?void 0:n.replace(/sales\/(people|profile|lead)/,"in");if(i)return new URL(i)})(t),parseBodyForLinkedinUrl:(t,{requestUrl:e})=>{const n=bh(t,e);return n?new URL(`in/${n}`,"https://www.linkedin.com"):null}},{name:"LINKEDIN_PUBLIC_URL_WITH_PUB_REGEX",regex:"https?://(?:[\\w]+\\.)?linkedin.com/pub/",requestUrl:t=>{const e=t.toString().replace(/(https?:\/\/)(?:[\w]+\.)?(linkedin.com)/,"$1www.$2");return new URL(e)},parseBodyForLinkedinUrl:t=>{var e;const n=null===(e=t.match('\\"(https?:\\/\\/[\\w]+\\.linkedin\\.com\\/in\\/.*?)\\"'))||void 0===e?void 0:e[1];if(n)return new URL(n)}},{name:"LINKEDIN_ENCODED_EXTERNAL_URL_REGEX",regex:"https?://(?:[\\w]+\\.)?linkedin\\.com/in/(ACo[^\\/]{36})(?:/.*)?$".toString(),requestUrl:t=>t,parseBodyForLinkedinUrl:(t,{requestUrl:e,getLinkedinEncodedExternalId:n})=>{var i;const s=`&quot;entityUrn&quot;:&quot;urn:li:fs_miniProfile:${n(e)}&quot;(?:(?!},{).)*&quot;publicIdentifier&quot;:&quot;([^,]+)&quot;`,r=null===(i=t.match(s))||void 0===i?void 0:i[1];if(r)return new URL(r)}},{name:"LINKEDIN_RECRUITER_URL_REGEX",regex:"https?://(?:[w]+.)?linkedin.com/talent/(people|profile|lead)/(.*)?",requestUrl:t=>(t=>{var e,n;t.search="";const i=null===(n=null===(e=t.toString().split(","))||void 0===e?void 0:e[0])||void 0===n?void 0:n.replace(/talent\/(people|profile|lead)/,"in");if(i)return new URL(i)})(t),parseBodyForLinkedinUrl:(t,{requestUrl:e})=>{const n=bh(t,e);return n?new URL(`in/${n}`,"https://www.linkedin.com"):null}}],bh=(t,e)=>{const n=e.pathname.split("/")[2],i=t.matchAll(/\(vanityName:(.*)\)/g);for(const t of i){const e=t[1];if(e!==n)return e}return null},Ih=(t,e,n)=>{const i=t?re$1.success:re$1.error,s=(t=>t.startsWith("LinkedinRecruiter")?ie$1.recruiter:t.startsWith("LinkedinSalesNav")?ie$1.salesnav:ie$1.linkedin)(e);je$1.urlResolution(i,s,n);};class Sh extends vh{constructor(){super(...arguments),rh.add(this),this.name="LinkedinUrlResolver",this.storeName="linkedinUrl",oh.set(this,void 0),ah.set(this,void 0);}resolveDomUrl(e,n$1){return t(this,void 0,void 0,(function*(){const{parserName:t}=e;let s=yield n(this,rh,"m",hh).call(this,e,n$1);return s.result||(yield n(this,rh,"m",uh).call(this),s=yield n(this,rh,"m",lh).call(this,e,n$1),Ih(s.result,t,oe$1.firebase)),s.result||(s=yield n(this,rh,"m",dh).call(this,e,n$1),Ih(s.result,t,oe$1.ajax)),s.result||(s=yield n(this,rh,"m",yh).call(this,e,n$1),Ih(s.result,t,oe$1.iframe)),s}))}}oh=new WeakMap,ah=new WeakMap,rh=new WeakSet,uh=function(){return t(this,void 0,void 0,(function*(){if(n(this,oh,"f")||a(this,oh,yield Ie$1.Service.build(),"f"),!n(this,ah,"f")){const t=Dt(n(this,oh,"f").FIRESTORE_CONNECTION);a(this,ah,Tl(t),"f");}}))},ch=function(e,n$1){return t(this,void 0,void 0,(function*(){const t=new URL("lr",n(this,oh,"f").BASE_EXTENSION_DATA_URL),s=n(this,rh,"m",fh).call(this,e),r=n(this,rh,"m",ph).call(this,e);let o=n(this,rh,"m",mh).call(this,e);n$1&&(o+=`:${n$1}`),yield De$1(t,{fetchOptions:Object.assign({body:JSON.stringify([{id:s,vanity:r,source:o}])},Re$1())});}))},lh=function(e,n$1){var s;return t(this,void 0,void 0,(function*(){const t={url:new URL(e.url),result:null},r=["prod-linkedinUrlResolves",n(this,rh,"m",fh).call(this,e)],o=yield Zl(El(n(this,ah,"f"),r.join("/")));if(!o.exists())return t;const a=null===(s=o.data())||void 0===s?void 0:s.id;return a?(t.result=`https://www.linkedin.com/in/${a}`,e.result=t.result,yield n$1.markDomResolverRecordResolved(e,200),t):t}))},hh=function(e,n){return t(this,void 0,void 0,(function*(){const t={url:new URL(e.url),result:null};return wh.isAlreadyLinkedinPublicVanityUrl(t.url)&&(t.result=wh.cleanLinkedinPublicVanityUrl(t.url),e.result=t.result.toString(),yield n.markDomResolverRecordResolved(e)),t.method="url pattern",t}))},dh=function(e,n$1){var s;return t(this,void 0,void 0,(function*(){const t={url:new URL(e.url),result:null,method:"ajax"};for(let r=0;r<Eh.length;r++){const o=Eh[r];if(new RegExp(o.regex).test(e.url)){try{const r=Object.assign({name:o.name,regex:o.regex},wh);t.url=o.requestUrl(t.url,r);const a=yield De$1(t.url,{timeoutInSeconds:5});if(a.url!==t.url.toString()&&/linkedin.com\/in\//.exec(a.url))t.result=new URL(a.url);else if(a.ok&&a.status===pe$1.OK){const e=yield a.text();t.result=o.parseBodyForLinkedinUrl(e,Object.assign({requestUrl:t.url},r));}if(t.result=null===(s=t.result)||void 0===s?void 0:s.toString(),!t.result)return t;e.result=t.result,yield n$1.markDomResolverRecordResolved(e,a.status),yield n(this,rh,"m",ch).call(this,e,"ajax");}catch(t){n$1.updateClientRateLimit(),console.log("err",t);}break}}return t}))},fh=function(t){return n(this,rh,"m",gh).call(this,t.url)},ph=function(t){return n(this,rh,"m",gh).call(this,t.result)},gh=function(t){var e,n;return null===(n=null===(e=/https?:\/\/(?:[\w]+\.)?linkedin\.com\/(?:.*)\/(?<id>[^/|?#,]+)/i.exec(t))||void 0===e?void 0:e.groups)||void 0===n?void 0:n.id},mh=function(t){var e,n;return null===(n=null===(e=/https?:\/\/(?:[\w]+\.)?linkedin\.com\/(?<source>.*)\/[^/|?#,]+/i.exec(t.url))||void 0===e?void 0:e.groups)||void 0===n?void 0:n.source},yh=function(e,n$1){let s=5;return new Promise((r=>t(this,void 0,void 0,(function*(){const o={url:new URL(e.url),result:null,method:"iframe"},a=e.url,u=n(this,rh,"m",fh).call(this,e);if(!u)return yield n$1.markDomResolverRecordResolutionFailed(e,"invalid internal id from url"),r(o);const c=new URL(a);c.search="",c.pathname=`/in/${u}`,e.url=c.toString();const l=()=>t(this,void 0,void 0,(function*(){const u=yield this.resolveWithIframe(e);if(u.error)return s--,s<1?(n$1.updateClientRateLimit(),void r(o)):void setTimeout((()=>t(this,void 0,void 0,(function*(){return yield l()}))),1500);o.result=u.url,e.url=a,e.result=o.result,yield n$1.markDomResolverRecordResolved(e,200),yield n(this,rh,"m",ch).call(this,e,"iframe"),r(o);}));yield l();}))))};const Th={LinkedinUrlResolver:Sh},Ch=Object.values(Th).map((t=>(new t).storeName));var Ah;!function(n$1){var o,u$1,c,l,h,f,p,g,E,b,I,S,T,C,A,_,R,k,N,D,L,O,M,x,P;n$1.AlarmName="util.UrlResolver",n$1.OnMessageName="util.UrlResolver";class U extends ee$1{constructor(t){super(),o.add(this),u$1.set(this,void 0),c.set(this,void 0),l.set(this,"resolvers"),h.set(this,"20220202"),f.set(this,!1),p.set(this,.1),g.set(this,5),E.set(this,1e3),b.set(this,{markDomResolverRecordResolved:n(this,o,"m",_).bind(this),markDomResolverRecordResolutionFailed:n(this,o,"m",R).bind(this),updateClientRateLimit:n(this,o,"m",k).bind(this)}),N.set(this,void 0),D.set(this,300),L.set(this,void 0),O.set(this,50),M.set(this,0),t&&(this.passParamToServiceWorker("resolver",t.name),this.passParamToServiceWorker("storeName",t.storeName.toString()));}queueUrlForResolution(e,n$1){return t(this,void 0,void 0,(function*(){if(n(this,o,"m",I).call(this),!n(this,c,"f")||!n(this,u$1,"f"))throw new Error("No resolver defined.");let t=yield n(this,o,"m",C).call(this,e);if(t)return;t=yield n(this,o,"m",T).call(this,e,n$1);const s=(yield this.initDomResolversStore()).transaction(n(this,c,"f"),"readwrite");s.store.add(t),yield s.done,this.registerAlarm();}))}immediatelyResolveUrl(e,n$1){return t(this,void 0,void 0,(function*(){if(n(this,o,"m",I).call(this),!n(this,c,"f")||!n(this,u$1,"f"))throw new Error("No resolver defined.");let t=yield n(this,o,"m",C).call(this,e);return [pe$1.OK,pe$1.CREATED].includes(null==t?void 0:t.status)?{url:new URL(t.url),result:t.result,method:"local cache"}:n(this,o,"m",x).call(this)?void 0:(t=yield n(this,o,"m",T).call(this,e,n$1),n(this,u$1,"f").resolveDomUrl(t,n(this,b,"f")))}))}getResolverName(){var e;return t(this,void 0,void 0,(function*(){if(n(this,o,"m",I).call(this),!n(this,c,"f")||!n(this,u$1,"f"))throw new Error("No resolver defined.");return null===(e=n(this,u$1,"f"))||void 0===e?void 0:e.name}))}getResolvedUrl(e){return t(this,void 0,void 0,(function*(){if(n(this,o,"m",I).call(this),!n(this,c,"f")||!n(this,u$1,"f"))throw new Error("No resolver defined.");let t=yield n(this,o,"m",C).call(this,e);if((null==t?void 0:t.status)===pe$1.OK&&(null==t?void 0:t.result))return new URL(t.result)}))}respondToAlarm(){return t(this,void 0,void 0,(function*(){if(n(this,f,"f"))return;a(this,f,!0,"f");const n$1=yield n(this,o,"m",A).call(this);if(n$1.length<1)return a(this,f,!1,"f"),this.unregisterAlarm();const s=()=>t(this,void 0,void 0,(function*(){const t=n$1.shift();if(!t)return void a(this,f,!1,"f");if([pe$1.OK,pe$1.CREATED].includes(null==t?void 0:t.status))return void s();const r=this.getResolverPluginFromResolverRecord(t);yield r.resolveDomUrl(t,n(this,b,"f")),setTimeout((()=>s()),n(this,E,"f"));}));s();}))}getResolverPluginFromResolverRecord(t){return n(this,o,"m",P).call(this,t.resolver)}initDomResolversStore(){return t(this,void 0,void 0,(function*(){try{return yield B(n(this,l,"f"),H$1(),{upgrade(t){Ch.forEach((e=>{if(t.objectStoreNames.contains(e))return;t.createObjectStore(e,{keyPath:"urlHash"}).createIndex("status","status",{unique:!1});}));}})}catch(t){(yield X.Service.build()).error(t);}}))}registerAlarm(){return t(this,void 0,void 0,(function*(){if(!chrome.alarms)return;(yield chrome.alarms.get(n$1.AlarmName))||chrome.alarms.create(n$1.AlarmName,{periodInMinutes:n(this,p,"f")});}))}unregisterAlarm(){return t(this,void 0,void 0,(function*(){if(!chrome.alarms)return;(yield chrome.alarms.get(n$1.AlarmName))&&chrome.alarms.clear(n$1.AlarmName);}))}}u$1=new WeakMap,c=new WeakMap,l=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap,E=new WeakMap,b=new WeakMap,N=new WeakMap,D=new WeakMap,L=new WeakMap,O=new WeakMap,M=new WeakMap,o=new WeakSet,I=function(){const t=this.extraContentScriptToServiceWorkerParams;a(this,u$1,n(this,o,"m",P).call(this,null==t?void 0:t.resolver),"f"),a(this,c,null==t?void 0:t.storeName,"f");},S=function(e){return t(this,void 0,void 0,(function*(){return `${n(this,h,"f")}:${yield B$1(e.toString())}`}))},T=function(e,n$1,s=null){return t(this,void 0,void 0,(function*(){return {result:s,urlHash:yield n(this,o,"m",S).call(this,e),url:e.toString(),resolver:n(this,u$1,"f").name,parserName:n$1.parserName,status:pe$1.I_AM_A_TEAPOT,createTime:W$1()}}))},C=function(e){return t(this,void 0,void 0,(function*(){const t=yield n(this,o,"m",S).call(this,e),n$1=(yield this.initDomResolversStore()).transaction(n(this,c,"f"),"readonly"),s=yield n$1.store.get(t);return yield n$1.done,s}))},A=function(){return t(this,void 0,void 0,(function*(){if(n(this,o,"m",x).call(this))return [];const e=[],n$1=Object.keys(Th).map((t=>t));let s=1;for(const r of n$1){if(s>n(this,g,"f"))break;const n$1=new Th[r],o=(yield this.initDomResolversStore()).transaction(n$1.storeName,"readwrite"),a=o.store.index("status");[IDBKeyRange.only(pe$1.ACCEPTED),IDBKeyRange.only(pe$1.I_AM_A_TEAPOT)].forEach((n$1=>t(this,void 0,void 0,(function*(){let t=yield a.openCursor(n$1);for(;t&&!(s>n(this,g,"f"));){const n=t.value;q$1(n.createTime,30,"seconds")?t.delete():(n.status=pe$1.ACCEPTED,t.update(n),e.push(n),s++),t=yield t.continue();}})))),yield o.done;}return e}))},_=function(e,n){return t(this,void 0,void 0,(function*(){const t=this.getResolverPluginFromResolverRecord(e),i=(yield this.initDomResolversStore()).transaction(t.storeName,"readwrite");e.status=n||pe$1.OK,e.resolveTime=W$1(),i.store.put(e),yield i.done;}))},R=function(e,n$1){return t(this,void 0,void 0,(function*(){try{e.error=u.exports.isString(n$1)?n$1:n$1.toString();}catch(t){e.error="Unknown error.";}yield n(this,o,"m",_).call(this,e,pe$1.BAD_REQUEST);}))},k=function(){n(this,M,"f")>1&&n(this,M,"f")<n(this,O,"f")&&(a(this,L,W$1(),"f"),a(this,O,Math.max(0,n(this,M,"f")-1),"f"));},x=function(){var t;return n(this,N,"f")&&!q$1(n(this,N,"f"),1,"week")||a(this,N,W$1(),"f"),n(this,L,"f")&&!q$1(n(this,L,"f"),n(this,D,"f"))||(a(this,M,0,"f"),a(this,L,W$1(),"f")),n(this,M,"f")>=n(this,O,"f")||(a(this,M,(t=n(this,M,"f"),++t),"f"),!1)},P=function(t){return new Th[t]},e([U.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],U.prototype,"queueUrlForResolution",null),e([U.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],U.prototype,"immediatelyResolveUrl",null),e([U.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],U.prototype,"getResolverName",null),e([U.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],U.prototype,"getResolvedUrl",null),n$1.Service=U;}(Ah||(Ah={}));var _h,Rh=Ah;!function(n$1){var l,h,d,f,p,g,v,w,S,T,C,A,_,R,k,N,D,L,O,M,x;n$1.OnMessageName="models.CompanyModel";class P extends ee$1{constructor(){super(),l.add(this),h.set(this,"companies"),d.set(this,"companies"),f.set(this,void 0),p.set(this,void 0),g.set(this,void 0),v.set(this,void 0);}static build(){return t(this,void 0,void 0,(function*(){const t=new P;a(t,f,yield X.Service.build(),"f"),a(t,p,yield Ie$1.Service.build(),"f");const n$1=Dt(n(t,p,"f").FIRESTORE_CONNECTION);return a(t,g,Tl(n$1),"f"),a(t,v,yield z.Service.build(),"f"),t}))}getCompanyByPageUrl(e){return t(this,void 0,void 0,(function*(){e=new URL(e);const t=$$1(e.toString());let n$1=yield n(this,l,"m",k).call(this,t.domain);if(n$1)return n$1;const s=yield n(this,l,"m",A).call(this,e);return n$1=n(this,l,"m",S).call(this,t.domain,s),n(this,f,"f").debug("Cache company by page url",{pageUrl:e.toString(),company:n$1}),yield n(this,l,"m",x).call(this,n$1),n$1}))}getCompanyById(e){return t(this,void 0,void 0,(function*(){let t=yield n(this,l,"m",N).call(this,e);if(t)return t;if(n(this,l,"m",w).call(this)){const n$1=yield n(this,l,"m",_).call(this,e);n$1.id=e;const s=(null==n$1?void 0:n$1.email_domain)||"";return t=n(this,l,"m",S).call(this,s,n$1),n(this,f,"f").debug("Cache company by company id",{companyId:e,company:t}),yield n(this,l,"m",x).call(this,t),t}return yield n(this,l,"m",M).call(this,e)}))}}h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap,v=new WeakMap,l=new WeakSet,w=function(){return !0},S=function(t,e){const{id:n,name:i,description:s,best_address:r,industry_str:o,industry_tags:a,revenue:u,calculated_employee_size:c,total_profiles:l,top_employees:h,logo_url:d,info_url:f,links:p}=e;return {id:n,domain:t,name:i,description:s,revenue:u,links:p,address:r,industry:o,industryTags:a,calculatedEmployeeSize:c,totalProfiles:l,topEmployees:h,logoUrl:d,companyLandingUrl:f,cacheTime:W$1()}},T=function(t){return q$1((null==t?void 0:t.cacheTime)||0,24,"hours")},C=function(e){return t(this,void 0,void 0,(function*(){const t=Oe$1(se$1.pluginCompany),n$1=new URL("/v1/pluginCompany",n(this,p,"f").BASE_URL);e.forEach((t=>n$1.searchParams.append(t.key,t.value)));const s=yield De$1(n$1,{track:t,fetchOptions:Object.assign(Object.assign({},Re$1()),{method:"GET"})});return yield null==s?void 0:s.json()}))},A=function(e){return t(this,void 0,void 0,(function*(){return n(this,l,"m",C).call(this,[{key:"url",value:new URL(e).origin}])}))},_=function(e){return t(this,void 0,void 0,(function*(){return n(this,l,"m",C).call(this,[{key:"id",value:e.toString()}])}))},R=function(){return t(this,void 0,void 0,(function*(){const t=n(this,d,"f");try{return yield B(n(this,h,"f"),H$1(),{upgrade(e){if(e.objectStoreNames.contains(t))return;e.createObjectStore(t,{keyPath:"domain"}).createIndex("id","id",{unique:!0});}})}catch(t){(yield X.Service.build()).error(t);}}))},k=function(e){return t(this,void 0,void 0,(function*(){let t=yield n(this,l,"m",D).call(this,e);return t||(n(this,l,"m",w).call(this)?void 0:(t=yield n(this,l,"m",O).call(this,e),t?(console.log("firebase-by-domain",{company:t}),t):void 0))}))},N=function(e){return t(this,void 0,void 0,(function*(){let t=yield n(this,l,"m",L).call(this,e);return t||(n(this,l,"m",w).call(this)?void 0:(t=yield n(this,l,"m",M).call(this,e),t?(console.log("firebase-by-id",{company:t}),t):void 0))}))},D=function(e){return t(this,void 0,void 0,(function*(){const t=(yield n(this,l,"m",R).call(this)).transaction(n(this,d,"f"),"readonly"),n$1=yield t.store.get(e);if(yield t.done,n$1&&!n(this,l,"m",T).call(this,n$1))return n$1}))},L=function(e){return t(this,void 0,void 0,(function*(){const t=(yield n(this,l,"m",R).call(this)).transaction(n(this,d,"f"),"readonly"),n$1=t.store.index("id"),s=IDBKeyRange.only(e);let r,o=yield n$1.openCursor(s);for(;o;)r=o.value,o=yield o.continue();if(yield t.done,!n(this,l,"m",T).call(this,r))return r}))},O=function(e){return t(this,void 0,void 0,(function*(){const t=["prod-companies",e],n$1=yield Zl(El(n(this,g,"f"),t.join("/")));if(!n$1.exists())return;const s=n(this,l,"m",S).call(this,e,n$1.data());return yield n(this,l,"m",x).call(this,s),s}))},M=function(e){return t(this,void 0,void 0,(function*(){const n$1=function(t,e,...n){if(t=ot(t),ll("collection","path",e),t instanceof ml){const i=Dr.fromString(e,...n);return dl(i),new wl(t,null,i)}{if(!(t instanceof yl||t instanceof wl))throw new hr(lr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Dr.fromString(e,...n));return dl(i),new wl(t.firestore,null,i)}}(n(this,g,"f"),"prod-companies"),s=yield eh(function(t,...e){for(const n of e)t=n._apply(t);return t}(n$1,function(t,e,n){const i=e,s=jl("where",t);return new Xl(s,i,n)}("id","==",e)));if(!s.empty)return new Promise((e=>s.forEach((n$1=>t(this,void 0,void 0,(function*(){const{id:t}=null==n$1?void 0:n$1.ref;if(!t)return;const s=n$1.data(),r=n(this,l,"m",S).call(this,t,s);yield n(this,l,"m",x).call(this,r),e(s);}))))))}))},x=function(e){return t(this,void 0,void 0,(function*(){const t=(yield n(this,l,"m",R).call(this)).transaction(n(this,d,"f"),"readwrite");e.logoUrl&&(e.logoUrl=e.logoUrl.toString()),e.companyLandingUrl&&(e.companyLandingUrl=e.companyLandingUrl.toString()),t.store.put(e),yield t.done;}))},e([P.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],P.prototype,"getCompanyByPageUrl",null),e([P.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],P.prototype,"getCompanyById",null),n$1.Service=P;}(_h||(_h={}));var kh=_h;const Nh=[];function Dh(t,e=Ae$1){let n;const i=new Set;function s(e){if(We$1(t,e)&&(t=e,n)){const e=!Nh.length;for(const e of i)e[1](),Nh.push(e,t);if(e){for(let t=0;t<Nh.length;t+=2)Nh[t][0](Nh[t+1]);Nh.length=0;}}}return {set:s,update:function(e){s(e(t));},subscribe:function(r,o=Ae$1){const a=[r,o];return i.add(a),1===i.size&&(n=e(s)||Ae$1),r(t),()=>{i.delete(a),0===i.size&&(n(),n=null);}}}}let Lh;var Oh;!function(e$1){var n$1;e$1.OnMessageName="util.Toast";class o extends ee$1{constructor(){super(),this.contentScriptStore=Dh([]),n$1.set(this,5e3);}static build(){return t(this,void 0,void 0,(function*(){if(Lh)return Lh;const t=new o;return Lh=t,t}))}enableAndProxyResult(t){const{id:e,result:n,type:i,message:s,timeoutMs:r,canManuallyDismiss:o}=t;return this.contentScriptStore.update((t=>{var n;return (null===(n=u.exports.first(t))||void 0===n?void 0:n.message)===s?t:[{id:e,timeoutMs:r,type:i,message:s,canManuallyDismiss:o},...t]})),r>0&&setTimeout((()=>this.dismissToastById(e)),r),n}dismissToastById(t){this.contentScriptStore.update((e=>e.filter((e=>e.id!==t))));}returnResult(e={}){return t(this,void 0,void 0,(function*(){const t=G$1(),s=this.returnValueToProxy,r=(null==e?void 0:e.timeoutMs)||n(this,n$1,"f"),o=(null==e?void 0:e.dismissable)||!1;return {id:t,result:s,type:this.messageType,message:this.message,timeoutMs:r,canManuallyDismiss:o}}))}return(e){return t(this,void 0,void 0,(function*(){this.returnValueToProxy=e;}))}success(e,n={}){return t(this,void 0,void 0,(function*(){return this.message=e,this.messageType="success",this.returnResult(n)}))}info(e,n={}){return t(this,void 0,void 0,(function*(){return this.message=e,this.messageType="info",this.returnResult(n)}))}error(e,n={}){return t(this,void 0,void 0,(function*(){return this.message=e,this.messageType="error",this.returnResult(n)}))}}n$1=new WeakMap,e([o.alwaysRunInServiceWorkerContext(e$1.OnMessageName)],o.prototype,"returnResult",null),e([o.alwaysRunInServiceWorkerContext(e$1.OnMessageName)],o.prototype,"return",null),e([o.alwaysRunInServiceWorkerContext(e$1.OnMessageName)],o.prototype,"success",null),e([o.alwaysRunInServiceWorkerContext(e$1.OnMessageName)],o.prototype,"info",null),e([o.alwaysRunInServiceWorkerContext(e$1.OnMessageName)],o.prototype,"error",null),e$1.Service=o;}(Oh||(Oh={}));var Mh=Oh;const xh="Rate limit exceeded. Please try again later.",Ph="An unknown error has occurred. Please try again later.";class Uh{constructor(t,e,n,i=!1){this.shouldImmediatelyRun=!0,this.debug=!1,this.attempts=0,this.isRunning=!1,this.timedOut=!1,this.waitIntervalInMs=1e3,this.maxTimeoutInMs=0,this.maxAttempts=0,this.scheduleFunction=t,this.shortCircuitCondition=e,this.finalFunction=n,this.debug=i;}immediatelyRun(){return this.shouldImmediatelyRun=!0,this}start(){var e;return t(this,void 0,void 0,(function*(){if(!this.isRunning){for(this.isRunning=!0,this.attempts=0,this.shouldImmediatelyRun&&(this.result=yield this.run()),this.waitIntervalInMs=Math.abs(this.waitIntervalInMs),this.maxTimeoutInMs=Math.abs(this.maxTimeoutInMs),this.maxAttempts=Math.abs(this.maxAttempts),this.maxTimeoutInMs>0&&(this.waitIntervalInMs>this.maxTimeoutInMs&&(this.waitIntervalInMs=this.maxTimeoutInMs),setTimeout((()=>{this.timedOut=!0;}),this.maxTimeoutInMs));!this.shouldShortCircuit(this.result);)yield this.wait(),this.result=yield this.run();return this.isRunning=!1,null===(e=this.finalFunction)||void 0===e||e.call(this,this.result),this.result}}))}get executionAttempts(){return this.attempts}get isAlreadyRunning(){return this.isRunning}run(){return t(this,void 0,void 0,(function*(){return this.attempts++,yield this.scheduleFunction(this)}))}wait(){return t(this,void 0,void 0,(function*(){return new Promise((t=>{this.debug&&console.info(`Scheduler waiting ${this.waitIntervalInMs}ms...`),setTimeout(t,this.waitIntervalInMs);}))}))}shouldShortCircuit(t){if(this.timedOut)throw new Error(`Max timeout for scheduler exceeded ${this.maxTimeoutInMs}ms.`);return this.maxAttempts>0&&this.attempts>=this.maxAttempts?(this.debug&&console.info("Max attempts exceeded for scheduler."),!0):!!this.shortCircuitCondition(t)&&(this.debug&&console.info("Scheduler short circuit condition met."),!0)}}const Vh=(e,n,i=2500,s=12e4)=>t(void 0,void 0,void 0,(function*(){let t;const r=new Uh((()=>(t=e(),t)),(t=>n(t)));return r.waitIntervalInMs=i,r.maxTimeoutInMs=s,yield r.immediatelyRun().start(),t})),Fh=t=>null==t?void 0:t.map((t=>{var e;const n=(t=>{let e=!1,n=!1;return t.map((t=>!e&&"professional"===t.type&&t.is_recommended?(e=!0,Object.assign(Object.assign({},t),{isBestProfessional:!0})):!n&&"personal"===t.type&&t.is_recommended?(n=!0,Object.assign(Object.assign({},t),{isBestPersonal:!0})):t))})(null===(e=t.emails)||void 0===e?void 0:e.filter((t=>"F"!==(null==t?void 0:t.confidence_grade)))).map(((t,e)=>Object.assign(Object.assign({},t),{key:t.email,canDisplay:t.is_recommended||e<=1}))),{collapsedCardEntries:i,expandedCardEntries:s}=n.reduce(((t,e)=>{const n=(t=>"personal"===t.type&&t.is_recommended)(e)||(t=>"professional"===t.type&&t.is_recommended)(e)?"collapsedCardEntries":"expandedCardEntries";return t[n].push(e),t}),{collapsedCardEntries:[],expandedCardEntries:[]});return Object.assign(Object.assign({},t),{emails:n,collapsedCardEntries:i,expandedCardEntries:s})})),Bh=t=>{let e=Fh(t);return e=(t=>t.map((t=>{var e;const n=(null===(e=t.phones)||void 0===e?void 0:e.filter((t=>"invalid"!==t.validity)))||[],{collapsedCardEntries:i,expandedCardEntries:s}=n.reduce(((t,e)=>(!t.collapsedCardEntries.some((t=>t.number))&&(t=>t.is_recommended)(e)?t.collapsedCardEntries.push(e):t.expandedCardEntries.push(e),t)),{collapsedCardEntries:[...t.collapsedCardEntries||[]],expandedCardEntries:[...t.expandedCardEntries||[]]});return Object.assign(Object.assign({},t),{phones:n,collapsedCardEntries:i,expandedCardEntries:s})})))(e),e=(t=>t.map((t=>{if(!t.office_phones)return t;const e=t.office_phones.map((e=>{var n;return {key:e,number:e,type:"office",canDisplay:((null===(n=t.expandedCardEntries)||void 0===n?void 0:n.length)||0)<3}}));return Object.assign(Object.assign({},t),{expandedCardEntries:[...t.expandedCardEntries||[],...e]})})))(e),e=(t=>t.map((t=>{const e=[...t.expandedCardEntries].sort(((t,e)=>e.confidence-t.confidence)),n=[...t.collapsedCardEntries||[]];["professional","personal"].forEach((t=>{if(!n.find((e=>e.type===t))){const i=e.find((e=>e.type===t));i&&n.push(i);}}));const i=!n.find((t=>t.number))&&e.find((t=>t.number));i&&n.push(i);const s=e.filter((t=>!n.includes(t)));return Object.assign(Object.assign({},t),{collapsedCardEntries:n.filter((t=>t)),expandedCardEntries:s})})))(e),e},jh="user.activeProfileListId";var qh;!function(a$1){var l,h,f;a$1.OnMessageName="util.ProfileLists";class p extends ee$1{constructor(){super(),l.set(this,void 0),h.set(this,void 0),f.set(this,void 0);}static build(){return t(this,void 0,void 0,(function*(){const t=new p;return a(t,l,yield Ie$1.Service.build(),"f"),a(t,h,yield m.Service.build(),"f"),a(t,f,yield Mh.Service.build(),"f"),t}))}getProfileLists(){return t(this,void 0,void 0,(function*(){try{const t=Oe$1(se$1.profileLists),e=new URL("/v1/profileList/?page=1&limit=75",n(this,l,"f").BASE_URL),n$1=yield De$1(e,{track:t});return yield n$1.json()}catch(t){console.error(t);}}))}determineActiveProfileListId(){var e;return t(this,void 0,void 0,(function*(){const t=yield this.getProfileLists();return (null===(e=u.exports.first(t.records))||void 0===e?void 0:e.id)||null}))}setActiveProfileList(e){return t(this,void 0,void 0,(function*(){yield n(this,h,"f").set("user.activeProfileListId",e),yield n(this,h,"f").commit();}))}getProfileList(e){return t(this,void 0,void 0,(function*(){try{let t=!1,n$1=null;const s=Oe$1(se$1.profileList),r=new URL(`/v1/profileList/${e}/profiles?page=1&order_by=-create_time&limit=10`,n(this,l,"f").BASE_URL),o=yield De$1(r,{track:s});if(o.status===pe$1.NOT_FOUND)n(this,f,"f").error("Existing profile list not found - switching to first list."),t=!0;else {const t=yield o.json();n$1=Bh(null==t?void 0:t.records),n(this,f,"f").success("");}return n(this,f,"f").return([n$1,t]),n(this,f,"f").returnResult()}catch(t){throw t}}))}createList(e){return t(this,void 0,void 0,(function*(){try{const t=yield De$1(new URL("/browser_extension/v1/profileList",n(this,l,"f").BASE_URL),{fetchOptions:Object.assign({body:JSON.stringify({name:e})},Re$1())});return yield t.json()}catch(t){console.error(t);}}))}}l=new WeakMap,h=new WeakMap,f=new WeakMap,e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"getProfileLists",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"determineActiveProfileListId",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"setActiveProfileList",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"getProfileList",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"createList",null),a$1.Service=p;}(qh||(qh={}));var $h=qh;const Wh=new Set([pe$1.ACCEPTED,pe$1.OK]);var Kh;let Gh,Hh;!function(t){t.search="browser-extension/v1/search/person",t.lookup="/browser-extension/v1/lookup",t.polling="/browser-extension/v1/poll/person";}(Kh||(Kh={}));const zh=()=>{rd={};},Xh=()=>t(void 0,void 0,void 0,(function*(){return Gh||(Gh=yield Ie$1.Service.build()),Gh})),Qh=()=>{if("undefined"!=typeof window)throw "Not running in service worker!"},Yh=e=>t(void 0,void 0,void 0,(function*(){const{profiles:t,isRateLimited:n}=yield Jh([e]);if(n)return cd(null,!0);if(t.length){const n=t[0];return n.parsedProfile=e,cd(n)}return cd(null)})),Jh=e=>t(void 0,void 0,void 0,(function*(){try{const t=yield nd(Kh.search,{profiles:e}),{profiles:n,isRateLimited:i}=yield t.json();if(i)return ld([],!0);const s=ud(n,e);return s.forEach((t=>ad(t))),ld(s)}catch(t){return console.warn(t),console.warn(`Unable to fetch profile [ ${e} ]`),ld([])}})),Zh=e=>t(void 0,void 0,void 0,(function*(){const{linkedinUrl:t}=e,n=od(t);return n?cd(n):Yh(e)})),td=e=>t(void 0,void 0,void 0,(function*(){const t=[],n=[];if(e.forEach((e=>{const{linkedinUrl:i}=e,s=od(i);s?t.push(s):n.push(e);})),!n.length)return ld(t);const{profiles:i,isRateLimited:s}=yield Jh(n);return s?ld(t,!0):ld([...t,...i])})),ed=(e,n)=>t(void 0,void 0,void 0,(function*(){Qh();const i=yield t(void 0,void 0,void 0,(function*(){var t;return Hh||(Hh=yield null===(t=null==xe$1?void 0:xe$1.Service)||void 0===t?void 0:t.build()),Hh})),s=null==i?void 0:i.isFeatureEnabled("lists_redesign"),r=e.parsedProfile||{};let o=Object.assign({profile_id:e.id,linkedin_url:e.linkedin_url},r);o=s?Object.assign(Object.assign({},o),{tag_ids:n?[n]:[]}):Object.assign(Object.assign({},o),{profile_list_id:n});const a=yield nd(Kh.lookup,o),u=(yield a.json()).error_code||null;if(Wh.has(a.status))return hd({isRequestSuccessful:!0});switch(`${a.status}:${u}`){case"403:null":return hd({isProfileListIdInvalid:!0});case"403:202":return hd({isCreditLimited:!0});case"429:null":return hd({isRateLimited:!0});default:return hd({isUnknownError:!0})}})),nd=(e,n)=>t(void 0,void 0,void 0,(function*(){Qh();const{BASE_URL:t}=yield Xh(),i=new URL(e,t);return De$1(i,{track:id(e),fetchOptions:Object.assign(Object.assign({},Re$1()),{body:JSON.stringify(n)})})})),id=t=>{switch(t){case Kh.search:return Oe$1(se$1.personSearch);case Kh.lookup:return Oe$1(se$1.personLookup);default:return t=>{}}},sd=e=>t(void 0,void 0,void 0,(function*(){Qh();const{BASE_URL:t}=yield Xh(),n=new URL(e,t);return De$1(n,{fetchOptions:Object.assign(Object.assign({},Re$1()),{method:"GET"})})}));let rd={};const od=t=>{const e=rd[t.toString()];return e?Object.assign({},e):null},ad=t=>{const{linkedin_url:e}=t;rd[e]=Object.assign({},t);},ud=(t,e)=>{const n={};return e.forEach((t=>{const{linkedinUrl:e}=t;n[e.toString()]=t;})),t.map((t=>{const{linkedin_url:e}=t,i=n[e];return t.parsedProfile=i,t}))},cd=(t,e=!1)=>({profile:t,isRateLimited:e}),ld=(t,e=!1)=>({profiles:t,isRateLimited:e}),hd=({isRequestSuccessful:t,isRateLimited:e,isCreditLimited:n,isUnknownError:i,isProfileListIdInvalid:s}={})=>({isRequestSuccessful:t||!1,isRateLimited:e||!1,isCreditLimited:n||!1,isProfileListIdInvalid:s||!1,isUnknownError:i||!1}),dd="user.activeTagId";var fd;!function(a$1){var l,h,f;a$1.OnMessageName="util.ProfileTags";class p extends ee$1{constructor(){super(),l.set(this,void 0),h.set(this,void 0),f.set(this,void 0);}static build(){return t(this,void 0,void 0,(function*(){const t=new p;return a(t,l,yield Ie$1.Service.build(),"f"),a(t,h,yield m.Service.build(),"f"),a(t,f,yield Mh.Service.build(),"f"),t}))}determineActiveTagId(){var e;return t(this,void 0,void 0,(function*(){const t=yield this.getProfileTags();return (null===(e=u.exports.first(t.results))||void 0===e?void 0:e.id)||null}))}setActiveTagId(e){return t(this,void 0,void 0,(function*(){yield n(this,h,"f").set("user.activeTagId",e),yield n(this,h,"f").commit();}))}getProfileTags(){return t(this,void 0,void 0,(function*(){try{const t=Oe$1(se$1.profileTags),e=new URL("/browser-extension/v1/profile_tags?num_results=500&source=custom",n(this,l,"f").BASE_URL),n$1=yield De$1(e,{track:t});return yield n$1.json()}catch(t){console.error(t);}}))}createTag(e){return t(this,void 0,void 0,(function*(){try{const t=yield De$1(new URL("/browser-extension/v1/profile_tags",n(this,l,"f").BASE_URL),{fetchOptions:Object.assign({body:JSON.stringify({name:e})},Re$1())});return yield t.json()}catch(t){console.error(t);}}))}getProfileTagList(e){return t(this,void 0,void 0,(function*(){try{let t=!1,n$1=null;const s=Oe$1(se$1.profileList),r=new URL(`/browser-extension/v1/user_contacts?tag_id=${e}`,n(this,l,"f").BASE_URL),o=yield De$1(r,{track:s});if(o.status===pe$1.NOT_FOUND)n(this,f,"f").error("Existing tag list not found - switching to first list."),t=!0;else {const t=yield o.json();n$1=Bh(null==t?void 0:t.results),n(this,f,"f").success("");}return n(this,f,"f").return([n$1,t]),n(this,f,"f").returnResult()}catch(t){throw t}}))}}l=new WeakMap,h=new WeakMap,f=new WeakMap,e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"determineActiveTagId",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"setActiveTagId",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"getProfileTags",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"createTag",null),e([p.alwaysRunInServiceWorkerContext(a$1.OnMessageName)],p.prototype,"getProfileTagList",null),a$1.Service=p;}(fd||(fd={}));var pd=fd;var gd;!function(n$1){var h,f,p,g,y,E,S,T,C,A;n$1.AlarmName="models.ProfileModel",n$1.OnMessageName="models.ProfileModel";class R extends ee$1{constructor(){super(),h.set(this,5),f.set(this,10),p.set(this,"profiles"),g.set(this,"profiles"),y.set(this,void 0),E.set(this,void 0),S.set(this,void 0),T.set(this,void 0),C.set(this,void 0),A.set(this,void 0);}static build(){return t(this,void 0,void 0,(function*(){const t=new R;yield t.registerAlarm(),a(t,E,yield Ie$1.Service.build(),"f"),a(t,S,yield ve$1(),"f"),a(t,A,yield Mh.Service.build(),"f"),a(t,T,yield $h.Service.build(),"f"),a(t,C,yield pd.Service.build(),"f");const n=yield ge$1.Service.build();return a(t,y,yield n.get(),"f"),t}))}queueForDelivery(e,n$1,s,r){return t(this,void 0,void 0,(function*(){const t=n(this,S,"f").isFeatureEnabled("extension_send_collapsed_background_data");if(!r&&!t)return;if(!wh.isAlreadyLinkedinPublicVanityUrl(new URL(e.linkedinUrl)))return;e.hashId||(e.hashId=yield B$1(e));if(yield this.getCachedProfileByHashId(e.hashId))return;const o=Object.assign(Object.assign({},e),{ieo:r});this.cacheProfileRecord(o,n$1,s);}))}respondToAlarm(){return t(this,void 0,void 0,(function*(){if(this.cannotPushToBackend())return;const t=yield this.getNextPendingBatch();if(t.length<1)return;const e=this.prepareBatchForServer(t);this.pushPendingBatchToServer(e);}))}getProfile(e){return t(this,void 0,void 0,(function*(){return Zh(e)}))}getProfileWithToast(e){return t(this,void 0,void 0,(function*(){const{profile:t,isRateLimited:n$1}=yield Zh(e);return n$1&&n(this,A,"f").error(xh),t&&n(this,A,"f").success(""),n(this,A,"f").return(t),n(this,A,"f").returnResult()}))}getProfiles(e){return t(this,void 0,void 0,(function*(){return td(e)}))}getProfilesWithToast(e){return t(this,void 0,void 0,(function*(){const{profiles:t,isRateLimited:n$1}=yield td(e);return n$1&&n(this,A,"f").error(xh),t.length&&n(this,A,"f").success(""),n(this,A,"f").return(t),n(this,A,"f").returnResult()}))}pollProfile(e){return t(this,void 0,void 0,(function*(){const n$1=({profile:t,isRateLimited:e})=>!(t&&!e)||"complete"===t.status,s=()=>t(this,void 0,void 0,(function*(){const t=e.parsedProfile||(t=>({fullName:t.name,linkedinUrl:new URL(t.linkedin_url)}))(e);return Yh(t)}));try{const t=yield Vh(s,n$1,2e3);if(t.isRateLimited)n(this,A,"f").error(xh),n(this,A,"f").return(t);else {const e=Bh([t.profile]);n(this,A,"f").success(""),n(this,A,"f").return(Object.assign(Object.assign({},t),{profile:e[0]}));}}catch(t){console.error(t),n(this,A,"f").error(Ph);}finally{return n(this,A,"f").returnResult()}}))}pollProfilesById(e){return t(this,void 0,void 0,(function*(){const n$1=({profiles:t,isRateLimited:e})=>!(t.length&&!e)||t.every((({status:t})=>"complete"===t)),s=()=>t(this,void 0,void 0,(function*(){return yield (e=>t(void 0,void 0,void 0,(function*(){const t=e.join(","),n=yield sd(`${Kh.polling}?ids=${t}`);if(n.status===pe$1.TOO_MANY_REQUESTS)return ld([],!0);const i=yield n.json();return i.forEach((t=>ad(t))),ld(i)})))(e)}));try{const t=yield Vh(s,n$1,2e3);if(t.isRateLimited)n(this,A,"f").error(xh),n(this,A,"f").return(t);else {const e=Bh(t.profiles);n(this,A,"f").success(""),n(this,A,"f").return(Object.assign(Object.assign({},t),{profiles:e}));}}catch(t){console.error(t);}finally{return n(this,A,"f").returnResult()}}))}lookupProfile(e,n$1){return t(this,void 0,void 0,(function*(){const t=n(this,S,"f").isFeatureEnabled("lists_redesign");try{const s=yield ed(e,n$1);if(n(this,A,"f").return(s),!s.isRequestSuccessful){if(s.isProfileListIdInvalid)return t?this.handleActiveTagIdError(e):this.handleActiveProfileListIdError(e);if(s.isCreditLimited)return n(this,A,"f").error("Insufficient Credits.");if(s.isRateLimited)return n(this,A,"f").error(xh);if(s.isUnknownError)return n(this,A,"f").error(Ph);throw "Unknown lookup error"}return n(this,A,"f").success(""),n(this,A,"f").returnResult()}catch(t){return console.error(t),n(this,A,"f").error(Ph),n(this,A,"f").returnResult()}}))}exportProfileToIntegration(e,n$1){return t(this,void 0,void 0,(function*(){const t=`${`/${e.toLowerCase()}_sync_contacts`}/${n$1}`;try{const n$1=yield De$1(new URL(`${t}`,n(this,E,"f").BASE_URL),{fetchOptions:Object.assign(Object.assign({},Re$1()),{method:"GET"})});n$1&&201===n$1.status?(n(this,A,"f").success(`Sync to ${e} succeeded`),n(this,A,"f").return({isIntegrationSuccess:!0})):(n(this,A,"f").error(`Sync to ${e} failed`),n(this,A,"f").return({isIntegrationSuccess:!1}));}catch(t){console.error(t);}finally{return n(this,A,"f").returnResult()}}))}handleActiveProfileListIdError(e){return t(this,void 0,void 0,(function*(){const t=yield n(this,T,"f").determineActiveProfileListId();return yield n(this,T,"f").setActiveProfileList(t),this.lookupProfile(e,t)}))}handleActiveTagIdError(e){return t(this,void 0,void 0,(function*(){const t=yield n(this,C,"f").determineActiveTagId();return yield n(this,C,"f").setActiveTagId(t),this.lookupProfile(e,t)}))}cannotPushToBackend(){const{id:t,is_trusted:e}=n(this,y,"f");return !t||(!e||!n(this,S,"f").isFeatureEnabled("extension_background_data"))}shouldDropProfile(t){return !t.fullName}initCachedProfileStore(){return t(this,void 0,void 0,(function*(){const t=n(this,g,"f");try{return yield B(n(this,p,"f"),H$1(),{upgrade(e){if(e.objectStoreNames.contains(t))return;e.createObjectStore(t,{keyPath:"hashId"}).createIndex("cacheTime","cacheTime",{unique:!1});}})}catch(t){(yield X.Service.build()).error(t);}}))}getCachedProfileByHashId(e){return t(this,void 0,void 0,(function*(){const t=(yield this.initCachedProfileStore()).transaction(n(this,g,"f"),"readonly"),n$1=yield t.store.get(e);return yield t.done,n$1}))}cacheProfileRecord(e,n$1,s){var r;return t(this,void 0,void 0,(function*(){const t=(yield this.initCachedProfileStore()).transaction(n(this,g,"f"),"readwrite"),o=Object.assign(Object.assign({},e),{parser:n$1,url:s,linkedinUrl:null===(r=e.linkedinUrl)||void 0===r?void 0:r.toString(),cacheTime:W$1()});t.store.put(o),yield t.done;}))}prepareBatchForServer(t){const e=[];for(const n of t)this.shouldDropProfile(n)||e.push(u.exports.omit(n,["hashId","cacheTime"]));return e}getNextPendingBatch(){return t(this,void 0,void 0,(function*(){const t=(yield this.initCachedProfileStore()).transaction(n(this,g,"f"),"readwrite"),e=yield t.store.getAll(null,n(this,f,"f"));for(const n of e)t.store.delete(n.hashId);return yield t.done,e}))}pushPendingBatchToServer(e){return t(this,void 0,void 0,(function*(){if(e.length<1)return;const t=new URL("browser-extension/v1/bp",n(this,E,"f").BASE_URL),n$1=Oe$1(se$1.backgroundProcess);yield De$1(t,{track:n$1,fetchOptions:Object.assign({body:JSON.stringify({profiles:e})},Re$1({"Content-Type":"application/json; charset=utf-8"})),timeoutInSeconds:30});}))}registerAlarm(){return t(this,void 0,void 0,(function*(){if(!chrome.alarms)return;(yield chrome.alarms.get(n$1.AlarmName))||chrome.alarms.create(n$1.AlarmName,{periodInMinutes:n(this,h,"f")});}))}}h=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap,y=new WeakMap,E=new WeakMap,S=new WeakMap,T=new WeakMap,C=new WeakMap,A=new WeakMap,e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"queueForDelivery",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"getProfile",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"getProfileWithToast",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"getProfiles",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"getProfilesWithToast",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"pollProfile",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"pollProfilesById",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"lookupProfile",null),e([R.alwaysRunInServiceWorkerContext(n$1.OnMessageName)],R.prototype,"exportProfileToIntegration",null),n$1.Service=R;}(gd||(gd={}));var md=gd;

export { $h as $, B, Dt as D, El as E, Mh as M, Rh as R, Sh as S, Tl as T, X, zh as a, Bh as b, Dh as c, jh as d, dd as e, j, kh as k, md as m, nh as n, pd as p, z };
