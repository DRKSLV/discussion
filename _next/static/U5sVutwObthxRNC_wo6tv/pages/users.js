(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{NhoZ:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),u=n.n(o),c=n("NIcq"),s=n("q9vl"),i=n("40RG"),l=n("SKjy"),p=n("e6a3"),m=n("PmZg"),b=n("Srb5"),f=n("jxK0"),_=n("FCqg"),d=n("ma3e"),v=n("ecW4"),g=a.a.createElement;function h(e){return g(f.d,null,g(u.a,null,g("title",null,"Civil Discussion")),g(s.a,null,g(b.a,{style:{backgroundColor:"#181a1b",height:"100vh",width:"100vw"}},g(_.a,{title:"Users",rerenderFunc:function(){}},g(_.b,{icon:g(d.l,null),drawer:g(v.a,null)}),g(_.b,{icon:g(d.n,null)},g(l.a,null,g(l.b,{text:"Profile"}),g(l.b,{leftIcon:g(c.d,null),text:"Switch Acount"},g(i.b,null)),g(p.a,null),g(l.b,{leftIcon:g(c.c,null),text:"Account Settings"}))),g(_.b,{icon:g(c.c,null)},g(l.a,null,g(l.b,{text:"Dark Theme"}),g(l.b,{text:"Privacy Policy",link:"/discussion/privacy"})))),g(m.a,null,e.children))))}var O=n("vDqi"),y=n.n(O),w=n("v0uu");var j=n("avI8"),F=n.n(j),x=a.a.createElement;function S(e){var t=e.usr;return x("div",{className:F.a.userEntry},x("div",{className:F.a.pic},x("img",{src:"https://drkslv.herokuapp.com/assets/img/gnomed.png"})),x("div",{className:F.a.body},x("div",null,x("b",null,t.username)),x("div",null,x("i",{style:{color:"#888"}},t.id))))}var P=a.a.createElement;function N(){var e=function(){var e=Object(r.useState)([]),t=e[0],n=e[1];return Object(r.useEffect)((function(){y.a.get(w.a+"/user").then((function(e){n(e.data)})).catch()}),[]),t}().map((function(e){return P(S,{key:e.id,usr:e})}));return P("div",{className:F.a.userList},e)}var E=a.a.createElement;function k(){return E(h,null,E(N,null))}},O1IP:function(e,t,n){e.exports={form:"postForm_form__Oczvn",postForm:"postForm_postForm__eQJ-A",registerForm:"postForm_registerForm__1bmo3",accountFormWrap:"postForm_accountFormWrap__138CC",usernameHighlight:"postForm_usernameHighlight__OITtg",removeButton:"postForm_removeButton__5_hKK",clicked:"postForm_clicked__2ebhs",accountFormsAlign:"postForm_accountFormsAlign__2EQp5",tabWrapper:"postForm_tabWrapper__2wp4y",tabBar:"postForm_tabBar__2RJae",tab:"postForm_tab__1A3gY",submitButton:"postForm_submitButton__WO9kK",postButton:"postForm_postButton__1GP0x",jumping:"postForm_jumping__3WKtO",rotating:"postForm_rotating__1YuS7",title:"postForm_title__3evoo",titleCounter:"postForm_titleCounter__QnXSx",author:"postForm_author__31Fn5"}},Srb5:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("SKjy"),u=n("hKBk"),c=n.n(u),s=n("B68i"),i=a.a.createElement,l=Object(r.createContext)({});function p(e){var t=Object(r.useState)(!1),n=t[0],u=t[1],p=Object(r.useState)([0,0]),m=p[0],b=p[1],f=Object(r.useState)([i(o.b,{text:"Dark Theme"}),i("hr",null),i(o.b,{text:"Privacy Policy"})]),_=f[0],d=f[1],v={left:m[0],top:m[1],display:n?"block":"none"};function g(){u(!1)}var h=_.map((function(e,t){return a.a.cloneElement(e,{key:t})}));return i("div",{style:e.style},i(l.Provider,{value:{openMenu:function(e,t,n){n&&(u(!0),b([e,t]),d(n))},removeMenu:g}},e.children),i(s.a,{className:c.a.menuMover,component:"div",onClickOutside:function(){g()},style:v},n&&i(o.a,{small:!0},h)))}},avI8:function(e,t,n){e.exports={card:"user_card__2Pwp6",animCard:"user_animCard__1oUa4",userEntry:"user_userEntry__31hYl",cardEntrance:"user_cardEntrance__2Fw8p",entering:"user_entering__3d-WM",cardboardEntrance:"user_cardboardEntrance__2iqQN",list:"user_list__XXgoi",userList:"user_userList__331PA",fabulous:"user_fabulous__1OLfa",scroll:"user_scroll__2umiC",pic:"user_pic__1h_F-",body:"user_body__2smAV"}},e6a3:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("o0o1"),a=n.n(r),o=n("rePB"),u=n("ODXe"),c=n("q1tI"),s=n.n(c),i=n("SKjy"),l=n("ma3e"),p=n("q9vl"),m=n("v0uu"),b=s.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(){var e=Object(p.b)(),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)({}),f=o[0],d=o[1],g=n.users[n.active],h=Object(c.useState)(!1);h[0],h[1];Object(c.useEffect)((function(){d(JSON.parse(localStorage.getItem("notifications")||"{}"))}),[]);var O=!!g&&!!f[g.username],y=O?"ON":"OFF";return g||(y="PLS LOG IN"),"undefined"!==typeof Notification&&"denied"===Notification.permission&&(O=!1,y="DENIED"),("undefined"===typeof navigator||!1 in navigator)&&(O=!1,y="UNSUPPORTED"),b(i.b,{onClick:function(){var e,t,o,u,c,s,i;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e=n.users[n.active],!(!1 in navigator)&&e){l.next=3;break}return l.abrupt("return");case 3:return t=f[e.username],l.next=6,a.a.awrap(navigator.serviceWorker.ready);case 6:return o=l.sent,l.next=9,a.a.awrap(o.pushManager.getSubscription());case 9:if(u=l.sent){l.next=26;break}return l.next=13,a.a.awrap(fetch(m.a+"/notifier/pushSubscriptionKey"));case 13:return c=l.sent,l.next=16,a.a.awrap(c.json());case 16:return s=l.sent,i=v(s.public),l.prev=18,l.next=21,a.a.awrap(o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i}));case 21:u=l.sent,l.next=26;break;case 24:l.prev=24,l.t0=l.catch(18);case 26:return l.prev=26,l.next=29,a.a.awrap(r.post("/notifier/".concat(t?"un":"","subscribe"),_({},u.toJSON()),{params:{usersub:!0}}));case 29:d((function(n){var r=_({},n);return r[e.username]=!t,localStorage.setItem("notifications",JSON.stringify(r)),r})),l.next=34;break;case 32:l.prev=32,l.t1=l.catch(26);case 34:case"end":return l.stop()}}),null,null,[[18,24],[26,32]],Promise)},leftIcon:b(l.c,null),text:b(s.a.Fragment,null,"Notifications: ",b("span",{style:{color:O?"lime":"red"}},y))})}function v(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),a=0;a<n.length;++a)r[a]=n.charCodeAt(a);return r}},ecW4:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("o0o1"),a=n.n(r),o=n("ODXe"),u=n("q1tI"),c=n.n(u),s=n("q9vl"),i=n("O1IP"),l=n.n(i),p=c.a.createElement;function m(e){var t=Object(s.b)(),n=Object(o.a)(t,2),r=n[0],i=n[1],m=r.users[r.active],f=Object(u.useState)(e.title||""),_=f[0],d=f[1],v=Object(u.useState)(e.text||""),g=v[0],h=v[1],O=Object(u.useState)(!1),y=O[0],w=O[1],j=Object(u.useState)(!1),F=j[0],x=j[1],S=Object(u.useState)(!1),P=S[0],N=S[1],E=Object(u.useRef)();function k(e){switch(e.target.name){case"title":return d(e.target.value);case"text":return N(E.current.scrollHeight),h(e.target.value)}}return console.log(y),Object(u.useEffect)((function(){E&&E.current&&N(E.current.scrollHeight)}),[E]),p(c.a.Fragment,null,p("form",{onSubmit:function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),w(!0),n.next=4,a.a.awrap(b(1e3));case 4:if(console.log("Title:",_),console.log("Text:",g),!e.edit){n.next=13;break}return n.next=9,a.a.awrap(e.onEdit(g));case 9:return n.sent||x(!0),w(!1),n.abrupt("return");case 13:_.length>=1&&_.length<=150?i.post("/post/",{title:_,text:g}).then((function(t){e.close(),e.rerender(t.data.entityId),w(!1)})).catch((function(t){console.log(t),e.rerender(),w(!1)})):(w(!1),e.rerender(),e.close());case 14:case"end":return n.stop()}}),null,null,null,Promise)},className:l.a.postForm},p("div",{className:l.a.titleCounter,"data-invalid":_.length<1||_.length>150},p("input",{type:"text",className:l.a.title,value:_,onChange:k,name:"title",placeholder:"The post's title",autoComplete:"off",disabled:y||e.edit}),p("p",null,_.length,"/150")),p("textarea",{name:"text",value:g,onChange:k,placeholder:"Go ahead, unleash your creative Genius!",rows:"4",autoComplete:"off",disabled:y,ref:E,style:{height:P+3+"px"}}),p("div",{className:l.a.postButton},p("button",{type:"submit",value:"Post!","data-known":!Boolean(m),disabled:y},"Post!")),e.edit&&p("button",{value:"Cancel",disabled:y,onClick:function(){e.onEdit(null,!0)}},"Cancel"),p("div",{className:l.a.author},"as",p("span",{"data-known":Boolean(m)},m?m.username:"<UNKNOWN>"),F&&p("i",{style:{color:"red",marginLeft:"2em"}},"(an error occured)"))))}function b(e){return new Promise((function(t){setTimeout(t,e)}))}},hFU0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users",function(){return n("NhoZ")}])}},[["hFU0",0,1,2,3,6,4,5,8,9]]]);