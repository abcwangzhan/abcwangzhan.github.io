(this.webpackJsonp=this.webpackJsonp||[]).push([[19],{1211:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return y}));t(403);var a=t(243),r=t.n(a),c=(t(405),t(244)),o=t.n(c),i=t(127),u=t(19),l=(t(241),t(87)),s=t.n(l),f=t(13),m=t(0),p=t.n(m),b=t(1190),d=t(402),h=t(1198),j=t(161),E=t(98),O=t(97),k=t(1160),v=t.n(k),w=t(1161),g=t(1149),y=function(){var e=Object(b.e)(),n=Object(m.useState)({}),t=Object(f.a)(n,2),a=t[0],c=t[1],l=Object(d.a)(j.v,{onCompleted:function(e){return I(e)},onError:function(){setTimeout((function(){return s.a.show("\u767b\u5f55\u5931\u8d25")}),100)}}),k=Object(f.a)(l,2),y=k[0],C=k[1].loading,S=Object(h.a)(j.x,{fetchPolicy:"cache-and-network",onCompleted:function(e){return J(e)}}),x=Object(f.a)(S,1)[0],I=function(e){var n;E.a.setLocal(O.a.TOKEN,(null===e||void 0===e||null===(n=e.signIn)||void 0===n?void 0:n.token)||""),x()},J=function(n){var t=n.getUserInfo,a=t.nickName,r=t.artScience,c=t.ejuSubject;!a||!r&&"number"!==typeof r||!c&&"number"!==typeof c?e.replace("/complete"):e.replace("/")},N=function(e,n){c((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(i.a)({},n,e))}))};return Object(m.useEffect)((function(){C&&s.a.loading("\u767b\u5f55\u4e2d",0),!C&&s.a.hide()}),[C]),p.a.createElement(g.e,null,p.a.createElement(g.f,null,"\u6b22\u8fce\u6765\u5230\u83d3\u5b50\u9898\u5e93"),p.a.createElement(o.a,{placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1/\u7528\u6237\u540d",onChange:function(e){return N(e,"email")},name:"email"}),p.a.createElement(r.a,{size:"lg"}),p.a.createElement(o.a,{placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password",name:"password",onChange:function(e){return N(e,"password")}}),p.a.createElement(g.g,{type:"primary",mt:"286px",onClick:function(){if(function(){var e=a.email,n=a.password;switch(!1){case!!e:s.a.info("\u8bf7\u8f93\u5165\u7535\u5b50\u90ae\u7bb1");break;case w.a.test(e||""):s.a.info("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u5b50\u90ae\u7bb1\u683c\u5f0f");break;case!!n:s.a.info("\u8bf7\u8f93\u5165\u8d26\u53f7\u5bc6\u7801");break;case w.b.test(n||""):s.a.info("\u8bf7\u8f93\u51658-24\u4f4d\u5305\u542b\u5927\u5c0f\u5199\u5b57\u6bcd\u6570\u5b57\u53ca\u7279\u6b8a\u5b57\u7b26\u7684\u5bc6\u7801");break;default:return!0}return!1}()){var e=a.email,n=a.password;y({variables:{email:e,password:v()(n||"").toString()}})}}},"\u767b\u5f55"),p.a.createElement(g.c,null,p.a.createElement(g.d,{onClick:function(){return e.push("/register")}},"\u65b0\u7528\u6237\u6ce8\u518c"),p.a.createElement(g.d,null,"\u5fd8\u8bb0\u5bc6\u7801")))}}}]);