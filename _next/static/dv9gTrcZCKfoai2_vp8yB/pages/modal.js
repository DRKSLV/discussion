(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2rtp":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("q1tI"),o=r.n(n),a=r("bqHu"),c=r.n(a),s=r("NIcq"),l=o.a.createElement,i=Object(n.forwardRef)((function(e,t){var r=Object(n.useState)(!1),a=r[0],i=r[1];function u(){i((function(e){return!e}))}return Object(n.useImperativeHandle)(t,(function(){return{toggleModal:u}})),a?l("div",{className:c.a.modalPlane,onClick:u,role:"document"},l("div",{className:c.a.modal,onClick:function(e){e.stopPropagation()}},l("div",e,l("div",{className:c.a.close,onClick:u},l(s.a,{size:"2em"})),e.children))):l(o.a.Fragment,null)}))},"4JlD":function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,s){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?a(c(e),(function(c){var s=encodeURIComponent(n(c))+r;return o(e[c])?a(e[c],(function(e){return s+encodeURIComponent(n(e))})).join(t):s+encodeURIComponent(n(e[c]))})).join(t):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var c=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},"5Are":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modal",function(){return r("TBpt")}])},QmWs:function(e,t,r){var n,o=(n=r("s4NR"))&&"object"==typeof n&&"default"in n?n.default:n,a=/https?|ftp|gopher|file/;function c(e){"string"==typeof e&&(e=w(e));var t=function(e,t,r){var n=e.auth,o=e.hostname,a=e.protocol||"",c=e.pathname||"",s=e.hash||"",l=e.query||"",i=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",e.host?i=n+e.host:o&&(i=n+(~o.indexOf(":")?"["+o+"]":o),e.port&&(i+=":"+e.port)),l&&"object"==typeof l&&(l=t.encode(l));var u=e.search||l&&"?"+l||"";return a&&":"!==a.substr(-1)&&(a+=":"),e.slashes||(!a||r.test(a))&&!1!==i?(i="//"+(i||""),c&&"/"!==c[0]&&(c="/"+c)):i||(i=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),{protocol:a,host:i,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:u=u.replace("#","%23"),hash:s}}(e,o,a);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var s="http://",l="w.w",i=s+l,u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function h(e,t){var r="string"==typeof e?w(e):e;e="object"==typeof e?c(e):e;var n=w(t),o="";r.protocol&&!r.slashes&&(o=r.protocol,e=e.replace(r.protocol,""),o+="/"===t[0]||"/"===e[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,t=t.replace(n.protocol,"")));var a=e.match(u);a&&!n.protocol&&(e=e.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^/]/.test(t)&&(o=o.slice(0,-1)));var l=new URL(e,i+"/"),h=new URL(t,l).toString().replace(i,""),f=n.protocol||r.protocol;return f+=r.slashes||n.slashes?"//":"",!o&&f?h=h.replace(s,f):o&&(h=h.replace(s,"")),p.test(h)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==h.slice(-1)||(h=h.slice(0,-1)),o&&(h=o+("/"===h[0]?h.substr(1):h)),h}function f(){}f.parse=w,f.format=c,f.resolve=h,f.resolveObject=h;var d=/^https?|ftp|gopher|file/,m=/^(.*?)([#?].*)/,b=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,v=/^([a-z0-9.+-]*:)?\/\/\/*/i,g=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function y(e){try{return decodeURI(e)}catch(o){return e}}function w(e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!1),e&&"object"==typeof e&&e instanceof f)return e;var n=(e=e.trim()).match(m);e=n?y(n[1]).replace(/\\/g,"/")+n[2]:y(e).replace(/\\/g,"/"),g.test(e)&&"/"!==e.slice(-1)&&(e+="/");var a=!/(^javascript)/.test(e)&&e.match(b),s=v.test(e),u="";a&&(d.test(a[1])||(u=a[1].toLowerCase(),e=""+a[2]+a[3]),a[2]||(s=!1,d.test(a[1])?(u=a[1],e=""+a[3]):e="//"+a[3]),3!==a[2].length&&1!==a[2].length||(u=a[1],e="/"+a[3]));var p,h=(n?n[1]:e).match(/(:[0-9]+)/),w="";h&&h[1]&&3===h[1].length&&(e=e.replace(w=h[1],w+"00"));var j=new f,x="",O="";try{p=new URL(e)}catch(o){x=o,u||r||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(O="/",e=e.substr(1));try{p=new URL(e,i)}catch(e){return j.protocol=u,j.href=u,j}}j.slashes=s&&!O,j.host=p.host===l?"":p.host,j.hostname=p.hostname===l?"":p.hostname.replace(/(\[|\])/g,""),j.protocol=x?u||null:p.protocol,j.search=p.search.replace(/\\/g,"%5C"),j.hash=p.hash.replace(/\\/g,"%5C");var C=e.split("#");!j.search&&~C[0].indexOf("?")&&(j.search="?"),j.hash||""!==C[1]||(j.hash="#"),j.query=t?o.decode(p.search.substr(1)):j.search.substr(1),j.pathname=O+y(p.pathname).replace(/"/g,"%22"),"about:"===j.protocol&&"blank"===j.pathname&&(j.protocol="",j.pathname=""),x&&"/"!==e[0]&&(j.pathname=j.pathname.substr(1)),u&&!d.test(u)&&"/"!==e.slice(-1)&&"/"===j.pathname&&(j.pathname=""),j.path=j.pathname+j.search,j.auth=[p.username,p.password].map(decodeURIComponent).filter(Boolean).join(":"),j.port=p.port,w&&(j.host=j.host.replace(w+"00",w),j.port=j.port.slice(0,-2)),j.href=O?""+j.pathname+j.search+j.hash:c(j);var R=/^(file)/.test(j.href)?["host","hostname"]:[];return Object.keys(j).forEach((function(e){~R.indexOf(e)||(j[e]=j[e]||null)})),j}t.parse=w,t.format=c,t.resolve=h,t.resolveObject=function(e,t){return w(h(e,t))},t.Url=f},TBpt:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var n=r("q1tI"),o=r.n(n),a=r("8Kt/"),c=r.n(a),s=r("FCqg"),l=r("PmZg"),i=r("2rtp"),u=r("w8Lc"),p=r.n(u),h=r("jxK0"),f=(r("g/15"),o.a.createElement);function d(){var e=Object(n.useState)(),t=e[0],r=(e[1],Object(n.useRef)());return f(h.c,null,f(c.a,null,f("title",null,"Modal")),f(s.a,{title:"Fullscreen Modal"}),f(l.a,null,f("div",{style:{backgroundColor:"#353535",borderRadius:"10px",padding:"20px",display:"inline-block"},onClick:function(e){r.current.toggleModal()}},"Open Modal"),f(h.b,{size:40}),f(i.a,{open:t,ref:r},f(h.a,{size:80,baseColor:"#ac0000",innerColor:"#ffcb00"}),f("h1",{style:{color:"#ac0000"}}," ",f("span",{className:p.a.triggered},"Fool")," "))))}},bqHu:function(e,t,r){e.exports={modalPlane:"modal_modalPlane__22f7D",modal:"modal_modal__3SsNi",close:"modal_close__3sYHb"}},"g/15":function(e,t,r){"use strict";var n=r("o0o1");Object.defineProperty(t,"__esModule",{value:!0});var o=r("QmWs");function a(){var e=window.location,t=e.protocol,r=e.hostname,n=e.port;return"".concat(t,"//").concat(r).concat(n?":"+n:"")}function c(e){return"string"===typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}t.execOnce=function(e){var t,r=!1;return function(){return r||(r=!0,t=e.apply(void 0,arguments)),t}},t.getLocationOrigin=a,t.getURL=function(){var e=window.location.href,t=a();return e.substring(t.length)},t.getDisplayName=c,t.isResSent=s,t.loadGetInitialProps=function e(t,r){var o,a,l;return n.async((function(i){for(;;)switch(i.prev=i.next){case 0:i.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,t.getInitialProps){i.next=12;break}if(!r.ctx||!r.Component){i.next=11;break}return i.next=9,n.awrap(e(r.Component,r.ctx));case 9:return i.t0=i.sent,i.abrupt("return",{pageProps:i.t0});case 11:return i.abrupt("return",{});case 12:return i.next=14,n.awrap(t.getInitialProps(r));case 14:if(a=i.sent,!o||!s(o)){i.next=17;break}return i.abrupt("return",a);case 17:if(a){i.next=20;break}throw l='"'.concat(c(t),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(l);case 20:return i.abrupt("return",a);case 22:case"end":return i.stop()}}),null,null,null,Promise)},t.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],t.formatWithValidation=function(e,t){return o.format(e,t)},t.SP="undefined"!==typeof performance,t.ST=t.SP&&"function"===typeof performance.mark&&"function"===typeof performance.measure},kd2E:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,a){t=t||"&",r=r||"=";var c={};if("string"!==typeof e||0===e.length)return c;var s=/\+/g;e=e.split(t);var l=1e3;a&&"number"===typeof a.maxKeys&&(l=a.maxKeys);var i=e.length;l>0&&i>l&&(i=l);for(var u=0;u<i;++u){var p,h,f,d,m=e[u].replace(s,"%20"),b=m.indexOf(r);b>=0?(p=m.substr(0,b),h=m.substr(b+1)):(p=m,h=""),f=decodeURIComponent(p),d=decodeURIComponent(h),n(c,f)?o(c[f])?c[f].push(d):c[f]=[c[f],d]:c[f]=d}return c};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,r){"use strict";t.decode=t.parse=r("kd2E"),t.encode=t.stringify=r("4JlD")}},[["5Are",0,1,2,4,6,3,5]]]);