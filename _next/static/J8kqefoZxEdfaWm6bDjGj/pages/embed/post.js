(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2USo":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),s=n.n(i),u=(n("PmZg"),n("gbgE"),n("q9vl")),a=n("Srb5"),c=n("jxK0"),l=n("s4NR"),p=n("GoMj"),d=n("tQ5z"),f=n("Cu94"),b=n.n(f),v=o.a.createElement,y=[];function m(){var t=v("p",null,"\ud83d\udd04 loading ..."),e=Object(r.useState)(void 0),n=e[0],i=e[1];Object(r.useEffect)((function(){console.log("setting parsed");var t=Object(l.parse)(location.search.substr(1));i(t),t.id&&y.push(t.id)}),[]);var f=Object(p.b)(y);return n&&n.id?f[0]&&(t="ohjemine"===f[0]?v("p",null,"\u26d4 post doesn't exist"):v(d.a,{post:f[0],embed:!0})):n&&!n.id&&(t=v("p",null,"\u26a0 please specify ?id=POST_ID_HERE")),v(o.a.Fragment,null,v(s.a,null,v("title",null,"Civil Discussion")),v(u.a,null,v(a.a,null,v("div",{className:b.a.postEmbed},v("div",null,t)),v("a",{href:"https://drkslv.github.io/discussion",target:"_blank",style:{position:"fixed",bottom:"0px",right:"0px",display:"block",textDecoration:"none"}},v(c.a,{size:40,grow:!1})))))}},"4JlD":function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,u){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?i(s(t),(function(s){var u=encodeURIComponent(r(s))+n;return o(t[s])?i(t[s],(function(t){return u+encodeURIComponent(r(t))})).join(e):u+encodeURIComponent(r(t[s]))})).join(e):u?encodeURIComponent(r(u))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var s=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},NQ1Q:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/post",function(){return n("2USo")}])},kd2E:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,i){e=e||"&",n=n||"=";var s={};if("string"!==typeof t||0===t.length)return s;var u=/\+/g;t=t.split(e);var a=1e3;i&&"number"===typeof i.maxKeys&&(a=i.maxKeys);var c=t.length;a>0&&c>a&&(c=a);for(var l=0;l<c;++l){var p,d,f,b,v=t[l].replace(u,"%20"),y=v.indexOf(n);y>=0?(p=v.substr(0,y),d=v.substr(y+1)):(p=v,d=""),f=decodeURIComponent(p),b=decodeURIComponent(d),r(s,f)?o(s[f])?s[f].push(b):s[f]=[s[f],b]:s[f]=b}return s};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},s4NR:function(t,e,n){"use strict";e.decode=e.parse=n("kd2E"),e.encode=e.stringify=n("4JlD")}},[["NQ1Q",0,1,2,3,11,13,4,5,6,8,9,10]]]);