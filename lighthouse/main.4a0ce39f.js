!function(e){function n(n){for(var r,i,c=n[0],l=n[1],s=n[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(n);p.length;)p.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var l=t[c];0!==a[l]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={0:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({}[e]||e)+"."+{2:"39e22603",3:"c1c6e782",4:"a8925ca8",5:"24207422",6:"51f19a7b"}[e]+".chunk.js"}(e);var l=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw e};var c=this.webpackJsonp=this.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var u=l;o.push([213,1]),t()}({213:function(e,n,t){"use strict";t.r(n);var r,a,o,i=t(0),c=t.n(i),l=t(40),s=t(214),u=t(24),d=Object(u.a)({basename:"/"}),p=t(20),m=t(17),f=t(78),b=t.n(f),g=Object(m.a)(r||(r=Object(p.a)(["\n    /* http://meyerweb.com/eric/tools/css/reset/\n    v2.0 | 20110126\n    License: none (public domain)\n    */\n\n   * {\n      box-sizing: border-box;\n    }\n\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed,\n    figure, figcaption, footer, header, hgroup,\n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure,\n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    body {\n        line-height: 1;\n        min-height: 100vh;\n        background-color: #fff;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n\n    /* \u6587\u672c\u6846\u8fb9\u6846 */\n    .input-border{\n      border-radius: 8px;\n    }\n    :root:root {\n    --adm-color-primary: ",";\n    }\n    ","\n"])),"#163868",b.a),h=t(30),v=t(2),y=t(4),O=t(6),j=t(9),E=t(10),w=t(50),x=m.b.div(a||(a=Object(p.a)(["\n  .error-icon-spe {\n    width: 120px;\n    height: 120px;\n  }\n"]))),k=function(e){Object(j.a)(t,e);var n=Object(E.a)(t);function t(e){var r;return Object(y.a)(this,t),(r=n.call(this,e)).state={hasError:!1,errMsg:"",errStack:""},r}return Object(O.a)(t,[{key:"render",value:function(){var e=this.state,n=e.hasError,t=e.errMsg,r=e.errStack,a=this.props.children;return n?c.a.createElement(x,null,c.a.createElement(w.c,{status:"warning",title:"\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898",description:c.a.createElement("div",null,c.a.createElement("p",null,"\u53ef\u80fd\u662f\u7f51\u7edc\u539f\u56e0\u5bfc\u81f4\u7684\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u6216\u7a0d\u540e\u518d\u8bd5"),c.a.createElement("p",null,c.a.createElement("small",{style:{fontSize:"0.8em"}},"\u9519\u8bef\u4ee3\u7801\uff1a",t)))}),c.a.createElement("pre",{style:{display:"none"}},r)):a}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,errMsg:e.message,errStack:e.stack}}}]),t}(c.a.Component),S=function(){return c.a.createElement(I,null,c.a.createElement("div",{className:"loading-container"},c.a.createElement("div",{className:"loading-text"},"\xa0\u52a0\u8f7d\u4e2d...")))},I=m.b.div(o||(o=Object(p.a)(["\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .loading-container {\n    text-align: center;\n  }\n  .loading-text {\n    font-size: 28px;\n    color: #3d3d3d;\n    margin-top: 20px;\n  }\n"]))),z=t(88),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href,n={};if(!e||"string"!==typeof e||-1===e.lastIndexOf("?"))return n;var t=e.indexOf("#"),r=e;t>0&&-1===(r=e.slice(0,t)).lastIndexOf("?")&&(r=e.slice(t,e.length));for(var a=r.slice(r.lastIndexOf("?")+1),o=a.split("&");o.length;){var i=o.pop()||"",c=i.split("="),l=Object(v.a)(c,2),s=l[0],u=l[1];s&&(n[s]=u?decodeURIComponent(u):u)}return o=[],n},P={main:"".concat("https://kashi-app-backend.qihangwang.link"),predict:"".concat("https://kashi-ai-backend.qihangwang.link","/predict")};var L,M,C,_,T=["component"],N=function(e){var n=e.component,t=Object(z.a)(e,T),r=q().title||t.title;return r&&function(e){if(e&&(document.title=e,/ip(hone|od|ad)/i.test(navigator.userAgent))){var n=document.createElement("iframe");n.src=P.main,n.style.display="none",n.onload=function(){setTimeout((function(){n.remove()}),9)},document.body.appendChild(n)}}(decodeURIComponent(r)),c.a.createElement(s.b,Object.assign({},t,{render:function(e){return c.a.createElement(n,e)}}))},J={type:""},R=Object(i.createContext)({state:J}),A="project_state",F={setLocal:function(e,n){return F.setItem(window.localStorage,e,n)},getLocal:function(e){return F.getItem(window.localStorage,e)},removeLocal:function(e){return F.removeItem(window.localStorage,e)},clearLocal:function(){return F.clear(window.localStorage)},setSession:function(e,n){return F.setItem(window.sessionStorage,e,n)},getSession:function(e){return F.getItem(window.sessionStorage,e)},removeSession:function(e){return F.removeItem(window.sessionStorage,e)},clearSession:function(){return F.clear(window.sessionStorage)},setItem:function(e,n,t){return!!F.test(e)&&(e.setItem(n,t),!0)},getItem:function(e,n){return F.test(e)&&e.getItem(n)||""},removeItem:function(e,n){return!!F.test(e)&&(e.removeItem(n),!0)},clear:function(e){return!!F.test(e)&&(e.clear(),!0)},test:function(e){return!!e}},U=F,B=function(e,n){n.type;return U.setSession(A,JSON.stringify(Object(h.a)(Object(h.a)({},e),n))),e},D=t(215),H=t.p+"assets/images/logoec8c61aa.png",X=function(){return c.a.createElement(G,null,c.a.createElement(K,null),c.a.createElement(Q,null,c.a.createElement(D.a,{fontSize:Object(m.c)("46"),color:"#163868"}),c.a.createElement(V,{className:"iconfont icon-select"})))},G=m.b.div(L||(L=Object(p.a)(["\n  width: 100%;\n  height: 120px;\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  justify-content: space-between;\n  border-bottom: "," solid #e8e8e8;\n  position: sticky;\n  top: 0;\n  background-color: #fff;\n  z-index: 999;\n"])),"1PX"),K=m.b.div(M||(M=Object(p.a)(["\n  width: 270px;\n  height: 72px;\n  background: url(",") center no-repeat;\n  background-size: contain;\n"])),H),Q=m.b.div(C||(C=Object(p.a)(["\n  display: inline-flex;\n  align-items: center;\n"]))),V=m.b.i(_||(_=Object(p.a)(["\n  font-size: 32px;\n  margin-left: 45px;\n"]))),W=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,218))})),Y=Object(i.lazy)((function(){return t.e(3).then(t.bind(null,219))})),Z=Object(i.lazy)((function(){return t.e(2).then(t.bind(null,216))})),$=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,220))})),ee=Object(i.lazy)((function(){return t.e(4).then(t.bind(null,217))})),ne=function(){var e=JSON.parse(U.getSession(A)||"{}"),n=Object(i.useReducer)(B,Object(h.a)(Object(h.a)({},J),e)),t=Object(v.a)(n,2),r=t[0],a=t[1];return c.a.createElement(k,null,c.a.createElement(R.Provider,{value:{state:r,dispatch:a}},c.a.createElement(i.Suspense,{fallback:c.a.createElement(S,null)},c.a.createElement(X,null),c.a.createElement(s.d,null,c.a.createElement(N,{exact:!0,path:"/",component:W,title:""}),c.a.createElement(N,{exact:!0,path:"/course-list",component:Y,title:"\u8bfe\u7a0b\u4e00\u89c8"}),c.a.createElement(N,{exact:!0,path:"/course-detail",component:Z,title:"\u8bfe\u7a0b\u8be6\u60c5"}),c.a.createElement(N,{exact:!0,path:"/dynamic",component:$,title:"\u706f\u5854\u52a8\u6001"}),c.a.createElement(N,{exact:!0,path:"/detail",component:ee,title:"\u6587\u7ae0\u8be6\u60c5"}),c.a.createElement(s.a,{to:"/"})))))};Object(l.render)(c.a.createElement(c.a.Fragment,null,c.a.createElement(s.c,{history:d},c.a.createElement(ne,null)),c.a.createElement(g,null)),document.getElementById("root"))},78:function(e,n,t){}});