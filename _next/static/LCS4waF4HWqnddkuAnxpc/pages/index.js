(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{O1IP:function(t,e,o){t.exports={form:"postForm_form__Oczvn",postForm:"postForm_postForm__eQJ-A",registerForm:"postForm_registerForm__1bmo3",accountFormWrap:"postForm_accountFormWrap__138CC",usernameHighlight:"postForm_usernameHighlight__OITtg",removeButton:"postForm_removeButton__5_hKK",clicked:"postForm_clicked__2ebhs",accountFormsAlign:"postForm_accountFormsAlign__2EQp5",tabWrapper:"postForm_tabWrapper__2wp4y",tabBar:"postForm_tabBar__2RJae",tab:"postForm_tab__1A3gY",submitButton:"postForm_submitButton__WO9kK",postButton:"postForm_postButton__1GP0x",jumping:"postForm_jumping__3WKtO",rotating:"postForm_rotating__1YuS7",title:"postForm_title__3evoo",titleCounter:"postForm_titleCounter__QnXSx",author:"postForm_author__31Fn5"}},RNiq:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return P}));var n=o("q1tI"),r=o.n(n),a=o("8Kt/"),l=o.n(a),u=o("FCqg"),s=o("SKjy"),i=o("PmZg"),c=o("gbgE"),m=o("40RG"),_=o("ODXe"),p=(o("SQ9z"),o("UL8Z"),o("AeZb"),o("Cu94"),o("q9vl"));r.a.createElement;var b=o("o0o1"),d=o.n(b),g=o("O1IP"),h=o.n(g),F=r.a.createElement;function f(t){var e=Object(p.b)(),o=Object(_.a)(e,2),a=o[0],l=o[1],u=a.users[a.active],s=Object(n.useState)(""),i=s[0],c=s[1],m=Object(n.useState)(""),b=m[0],g=m[1],f=Object(n.useState)(!1),w=f[0],x=f[1];function O(t){switch(t.target.name){case"title":return c(t.target.value);case"text":return g(t.target.value)}}return console.log(w),F(r.a.Fragment,null,F("form",{onSubmit:function(e){return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.preventDefault(),x(!0),o.next=4,d.a.awrap(v(1e3));case 4:console.log("Title:",i),console.log("Text:",b),i.length>=1&&i.length<=150?l.post("/post/",{title:i,text:b}).then((function(e){t.close(),t.rerender(e.data.entityId),x(!1)})).catch((function(e){console.log(e),t.rerender(),x(!1)})):(x(!1),t.rerender(),t.close());case 7:case"end":return o.stop()}}),null,null,null,Promise)},className:h.a.postForm},F("div",{className:h.a.titleCounter,"data-invalid":i.length<1||i.length>150},F("input",{type:"text",className:h.a.title,value:i,onChange:O,name:"title",placeholder:"The post's title",autoComplete:"off"}),F("p",null,i.length,"/150")),F("textarea",{name:"text",value:b,onChange:O,placeholder:"Go ahead, unleash your creative Genius!",rows:"4",autoComplete:"off"}),F("div",{className:h.a.postButton},F("button",{type:"submit",value:"Post!","data-known":!Boolean(u),disabled:w},"Post!")),F("div",{className:h.a.author},"as",F("span",{"data-known":Boolean(u)},u?u.username:"<UNKNOWN>"))))}function v(t){return new Promise((function(e){setTimeout(e,t)}))}var w=o("NIcq"),x=o("ma3e"),O=o("Srb5"),C=o("jxK0"),N=r.a.createElement;function P(){var t=Object(n.useState)(Math.random()),e=t[0],o=t[1];function r(t){if(console.log("rerender"),t)return o(t);o(Math.random())}return N(C.d,null,N(l.a,null,N("title",null,"Civil Discussion")),N(p.a,null,N(O.a,{style:{backgroundColor:"#181a1b",height:"100vh",width:"100vw"}},N(u.a,{title:"Discussion",rerenderFunc:r},N(u.b,{icon:N(x.f,null),drawer:N(f,null)}),N(u.b,{icon:N(x.h,null)},N(s.a,null,N(s.b,{text:"Profile"}),N(s.b,{leftIcon:N(w.c,null),text:"Switch Acount"},N(m.b,null)),N(s.b,{leftIcon:N(w.b,null),text:"Account Settings"}))),N(u.b,{icon:N(w.b,null)},N(s.a,null,N(s.b,{text:"Dark Theme"}),N(s.b,{text:"Privacy Policy",link:"/discussion/privacy"})))),N(i.a,null,N(c.a,{rerender:e,rerenderFunc:r})))))}},"m0L+":function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("RNiq")}])}},[["m0L+",0,1,2,3,6,10,11,4,5,7,8,12,14,13]]]);