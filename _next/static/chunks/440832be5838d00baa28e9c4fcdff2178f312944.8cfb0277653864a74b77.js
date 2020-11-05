/*! For license information please see 440832be5838d00baa28e9c4fcdff2178f312944.8cfb0277653864a74b77.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2SVd":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"2qu3":function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ");function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(r("q1tI")),c=r("8L3h"),f=r("jwwS"),l=[],d=[],p=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function m(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=h(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return u.default.createElement((r=e)&&r.__esModule?r.default:r,t);var r}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!p&&"function"===typeof r.webpack){var s=r.webpack();d.push((function(e){var t,r=i(s);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){o();var i=u.default.useContext(f.LoadableContext),s=c.useSubscription(n);return u.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return s.loading||s.error?u.default.createElement(r.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:n.retry}):s.loaded?r.render(s.loaded,e):null}),[e,s])};return a.preload=function(){return o()},a.displayName="LoadableComponent",u.default.forwardRef(a)}var g=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading}),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return v(h,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}b.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(m,e)},b.preloadAll=function(){return new Promise((function(e,t){w(l).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return p=!0,t()};w(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=b.preloadReady,t.default=b},"5oMp":function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=a(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,r){"use strict";var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},CgaS:function(e,t,r){"use strict";var n=r("JEQr"),o=r("xTJ+"),i=r("9rSQ"),s=r("UnBK");function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],(function(e){a.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){a.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}})),e.exports=a},DfZB:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},JEQr:function(e,t,r){"use strict";(function(t){var n=r("xTJ+"),o=r("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=r("tQ2B"):"undefined"!==typeof t&&(e=r("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){a.headers[e]=n.merge(i)})),e.exports=a}).call(this,r("8oxB"))},LYNF:function(e,t,r){"use strict";var n=r("OH9c");e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},Lmem:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,r){"use strict";var n=r("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},OH9c:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},OTTw:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,r){"use strict";var n=r("LYNF");e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},UnBK:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("xAGQ"),i=r("Lmem"),s=r("JEQr"),a=r("2SVd"),u=r("5oMp");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},a6RD:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI")),i=n(r("2qu3")),s=!1;function a(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);var r=t.loading;return function(){return o.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}t.noSSR=a,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=Object.assign(Object.assign({},n),e)),n=Object.assign(Object.assign({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var o={},s=e.modules();Object.keys(s).forEach((function(e){var t=s[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}if(n.loadableGenerated&&delete(n=Object.assign(Object.assign({},n),n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,a(r,n);delete n.ssr}return r(n)}},endd:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},"jfS+":function(e,t,r){"use strict";var n=r("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},jwwS:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("q1tI"));t.LoadableContext=o.createContext(null)},q9vl:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return j}));var o=r("1OyB"),i=r("vuIU"),s=r("JX7q"),a=r("Ji7U"),u=r("md7G"),c=r("foSv"),f=r("rePB"),l=r("q1tI"),d=r.n(l),p=r("vDqi"),h=r.n(p),m=r("v0uu"),y=(r("a6RD"),d.a.createElement);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var o=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var w=Object(l.createContext)([{active:null,users:[]},void 0]),O=function(e){Object(a.a)(r,e);var t=b(r);function r(e){var i;return Object(o.a)(this,r),i=t.call(this,e),Object(f.a)(Object(s.a)(i),"request",(function(e){var t=i.state.id;if(Number.isInteger(t.active)&&t.users&&t.users[t.active])return console.log("token supplied"),e.headers.Authorization="Bearer ".concat(t.users[t.active].accessToken),e;throw"Request not authorized"})),Object(f.a)(Object(s.a)(i),"response",(function(e){if(401===e.status)e.headers["Www-Authenticate"].split(",");return e})),Object(f.a)(Object(s.a)(i),"reject",(function(e){return Promise.reject(e)})),Object(f.a)(Object(s.a)(i),"addUser",(function(e,t,r){i.setState((function(o){var i=g({},o.id),s=i.users.findIndex((function(e){return e.username===t}));if(-1===s)i.users=[].concat(n(i.users),[{idString:e,username:t,accessToken:r}]);else{var a=n(i.users);a[s].accessToken=r,delete a[s].error,i.users=a}return{id:i}}))})),Object(f.a)(Object(s.a)(i),"removeUser",(function(e){i.setState((function(t){var r=g({},t.id),n=r.users.findIndex((function(t){return t.username===e}));return n>-1&&r.users.splice(n,1),{id:r}}))})),Object(f.a)(Object(s.a)(i),"setActive",(function(e){i.setState((function(t){var r=g({},t.id);return(e>-1&&e<t.id.users.length||null===e)&&(r.active=e),{id:r}}),i.checkActive)})),i.state={id:{active:null,users:[]},axios:void 0},i.beforeMount(),i}return Object(i.a)(r,[{key:"persist",value:function(){console.log("persist"),localStorage.setItem("active",JSON.stringify(this.state.id.active)),localStorage.setItem("users",JSON.stringify(this.state.id.users))}},{key:"checkActive",value:function(){var e=this;if(null!==this.state.id.active){if(!0===this.state.id.users[this.state.id.active].test)return;this.state.axios.get("/protected").then((function(e){console.log("\u2714 Account ok: ",e)}),(function(t){if(console.log("\u274c Account bad: ",t),t.response&&t.response.headers["www-authenticate"]){var r=t.response.headers["www-authenticate"];console.log(r);var o=r.split(",").map((function(e){return e.trim()})),i={};switch(o[1]&&o[1].startsWith('error="')&&(i.err=o[1].substring(7,o[1].length-1)),o[2]&&o[2].startsWith('error_description="')&&(i.desc=o[2].substring(19,o[2].length-1)),i.err){case"UnsupportedAuthError":throw t;case"TokenClaimError":"insufficient claims."===i.desc?i.icon="bolt":"invalid claims."===i.desc&&(i.icon="death");break;case"TokenExpiredError":case"NotBeforeError":i.icon="time";break;case"JsonWebTokenError":i.icon="bolt"}if(console.log(i),i.icon)return e.setState((function(e){var t=n(e.id.users);return t[e.id.active]=g({},t[e.id.active],{error:i}),{id:g({},e.id,{users:t,active:null})}}))}e.setState((function(e){return{id:g({},e.id,{active:null})}}))}))}}},{key:"beforeMount",value:function(){var e,t;console.log("before");try{e=JSON.parse(localStorage.getItem("active")||"null")}catch(n){e=this.state.id.active}try{t=JSON.parse(localStorage.getItem("users")||"[]")}catch(n){t=this.state.id.users}var r=h.a.create({baseURL:m.a});r.interceptors.request.use(this.request,this.reject),r.interceptors.response.use(this.response,this.reject),this.state.id={active:e,users:t,addUser:this.addUser,removeUser:this.removeUser,setActive:this.setActive},this.state.axios=r}},{key:"componentDidMount",value:function(){console.log("GLOBAL"),window.supersecrettestusers=function(){localStorage.setItem("users",'[\n                {\n                    "username":"test-_-",\n                    "idString":"gamer",\n                    "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MGMzYjRlMC04YjI5LTExZWEtODI5MS0xM2JmNDBkZmVmYWQiLCJpYXQiOjE1OTEzOTI0MTksImV4cCI6MTU5MTk5NzIxOSwiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.dcnyAkv1Z3qzPdBpo_0s4-YP642amNVOGFCwMItvsoo",\n                    "error": {\n                        "err":"TokenClaimError",\n                        "desc":"invalid claims.",\n                        "icon":"death"\n                    },\n                    "test":"true"\n                },\n                {\n                    "username":"gamer",\n                    "idString":"gamer",\n                    "accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI0ZWU3NjkxMC04YjI5LTExZWEtODI5MS0xM2JmNDBkZmVmYWQiLCJpYXQiOjE1OTE0NjA4ODcsImV4cCI6MTU5MjA2NTY4NywiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.S2UrWzhT8jj8ewDP4ZIqrzlOx6yKQN-8fCZVugW2W6k",\n                    "error":{\n                        "err":"JsonWebTokenError",\n                        "desc":"invalid signature",\n                        "icon":"bolt"\n                    },\n                    "test":"true"\n                },\n                {\n                    "username":"felix-d-class",\n                    "idString":"gamer","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMDMwMzA2MC1hODEzLTExZWEtOTNiZS0yNzBhMjBjM2EyOTQiLCJpYXQiOjE1OTE0NjEwNTYsImV4cCI6MTU5MjA2NTg1NiwiYXVkIjoiVXNlciIsImlzcyI6IkRSS1NMViJ9.zb78T8307vb-mBncJ7AwmShV2cxMX2nfchaUYZXD6fE",\n                    "error":{\n                        "err":"JsonWebTokenError",\n                        "desc":"invalid signature",\n                        "icon":"bolt"\n                    },\n                    "test":"true"\n                }\n            ]'),window.location.reload(!1)},window.supersecrettrashusers=function(){localStorage.setItem("users",'[\n            {\n                "username": "sonic",\n                "idString": "bruh",\n                "accessToken": "hurensohn",\n                "error": {\n                    "err":"NotBeforeError",\n                    "desc":"e",\n                    "icon":"time"\n                },\n                "test":"true"\n            },\n            {\n                "username": "turtle",\n                "idString": "bruh",\n                "accessToken": "hurensohn",\n                "error": {\n                    "err":"TokenExpiredError",\n                    "desc":"e",\n                    "icon":"time"\n                },\n                "test":"true"\n            },\n            {\n                "username": "d-class-personell",\n                "idString": "bruh",\n                "accessToken": "hurensohn",\n                "error": {\n                    "err":"TokenClaimError",\n                    "desc":"invalid claims.",\n                    "icon":"death"\n                },\n                "test":"true"\n            },\n            {\n                "username": "Jorji-Costava",\n                "idString": "bruh",\n                "accessToken": "hurensohn",\n                "error": {\n                    "err":"JsonWebTokenError",\n                    "desc":"invalid signiture",\n                    "icon":"bolt"\n                },\n                "test":"true"\n            }\n        ]\n        '),window.location.reload(!1)},this.checkActive()}},{key:"render",value:function(){return this.persist(),y(w.Provider,{value:[this.state.id,this.state.axios]},this.props.children)}}]),r}(d.a.Component),j=function(){return Object(l.useContext)(w)}},tQ2B:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("Rn+g"),i=r("MLWZ"),s=r("w0Vi"),a=r("OTTw"),u=r("LYNF");e.exports=function(e){return new Promise((function(t,c){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(p+":"+h)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,c,n),d=null}},d.onerror=function(){c(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=r("eqyj"),y=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(l,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),c(e),d=null)})),void 0===f&&(f=null),d.send(f)}))}},v0uu:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="https://drkslv.herokuapp.com"},vDqi:function(e,t,r){e.exports=r("zuR4")},w0Vi:function(e,t,r){"use strict";var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},x86X:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},xAGQ:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},"xTJ+":function(e,t,r){"use strict";var n=r("HSsa"),o=r("x86X"),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"===typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:a,isUndefined:function(e){return"undefined"===typeof e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"===typeof t[n]&&"object"===typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,r){"use strict";var n=r("xTJ+");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},zuR4:function(e,t,r){"use strict";var n=r("xTJ+"),o=r("HSsa"),i=r("CgaS"),s=r("JEQr");function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(s);u.Axios=i,u.create=function(e){return a(n.merge(s,e))},u.Cancel=r("endd"),u.CancelToken=r("jfS+"),u.isCancel=r("Lmem"),u.all=function(e){return Promise.all(e)},u.spread=r("DfZB"),e.exports=u,e.exports.default=u}}]);