(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{299:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a,l,i,r,c,o,m,d,p,s=t(13),b=t(44),u=t(0),g=t.n(u),x=t(14),f=function(){var e=Object(u.useRef)(null);return g.a.createElement(g.a.Fragment,null,g.a.createElement(h,null,"\u7528\u6237\u6848\u4f8b"),g.a.createElement(E,null,g.a.createElement(J,{className:"left",onClick:function(){var n;return null===(n=e.current)||void 0===n?void 0:n.swipePrev()}}),g.a.createElement(b.e,{slideSize:75,trackOffset:12.5,loop:!0,stuckAtBoundary:!1,indicator:function(){return null},ref:e},g.a.createElement(b.e.Item,{key:1},g.a.createElement(v,null,g.a.createElement(j,null,g.a.createElement(O,null),g.a.createElement(k,null,"Q\u540c\u5b66"),g.a.createElement(k,null,"\u795e\u5948\u5ddd\u5927\u5b66"),g.a.createElement(y,null,g.a.createElement(w,null,g.a.createElement("span",{className:"label"},"2021\u5e74\u53c2\u4e0e\u8bfe\u7a0b\uff1a"),"Java\u5168\u6808\u5f00\u53d1"),g.a.createElement(w,null,g.a.createElement("span",{className:"label"},"\u8003\u53d6\u8d44\u683c\uff1a"),"Oracle Certified Java Programmer, Silver SE 11 \u8a8d\u5b9a\u8cc7\u683c"),g.a.createElement(w,null,g.a.createElement("span",{className:"label"},"\u5185\u5b9a\u4fe1\u606f\uff1a"),"IT\u6280\u672f\u804c\uff0c\u8de8\u56fd\u4e0a\u5e02\u4f01\u4e1a\uff0c\u4f01\u4e1a\u4eba\u65701000+"))))),g.a.createElement(b.e.Item,{key:2},g.a.createElement(v,null,g.a.createElement(j,null,"222"))),g.a.createElement(b.e.Item,{key:3},g.a.createElement(v,null,g.a.createElement(j,null,"33")))),g.a.createElement(J,{className:"right",onClick:function(){var n;return null===(n=e.current)||void 0===n?void 0:n.swipeNext()}})))},E=x.b.div(a||(a=Object(s.a)(["\n  position: relative;\n"]))),h=x.b.div(l||(l=Object(s.a)(["\n  padding: 48px 32px;\n  font-size: 48px;\n  font-weight: bold;\n"]))),v=x.b.div(i||(i=Object(s.a)(["\n  width: 560px;\n  height: 660px;\n  padding: 0 12px;\n"]))),j=x.b.div(r||(r=Object(s.a)(["\n  background: #ffffff;\n  border: "," solid #f0f0f0;\n  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.08);\n  border-radius: 16px;\n  height: 644px;\n  text-align: center;\n  padding-top: 53px;\n"])),"1px"),O=x.b.span(c||(c=Object(s.a)(["\n  width: 120px;\n  height: 120px;\n  background: #ccc;\n  border-radius: 50%;\n  display: inline-block;\n"]))),k=x.b.div(o||(o=Object(s.a)(["\n  height: 56px;\n  line-height: 56px;\n  font-size: 32px;\n  margin-top: 24px;\n  font-weight: bold;\n"]))),y=x.b.div(m||(m=Object(s.a)(["\n  font-size: 28px;\n  line-height: 40px;\n  padding: 32px;\n  text-align: left;\n"]))),w=x.b.div(d||(d=Object(s.a)(["\n  margin-bottom: 10px;\n  .label {\n    font-weight: bold;\n  }\n"]))),J=x.b.div(p||(p=Object(s.a)(["\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  background-color: ",";\n  line-height: 76px;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  position: absolute;\n  top: 256px;\n  z-index: 1;\n  &.left {\n    left: 72px;\n  }\n  &.right {\n    right: 72px;\n  }\n  &.left::after,\n  &.right::after {\n    content: '';\n    display: inline-block;\n    width: 26px;\n    height: 26px;\n    border-top: 6px solid #fff;\n    border-right: 6px solid #fff;\n    position: absolute;\n    top: 20px;\n  }\n  &.left::after {\n    left: 25px;\n    transform: rotate(-135deg);\n  }\n  &.right::after {\n    right: 25px;\n    transform: rotate(45deg);\n  }\n"])),"#163868")},300:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a,l,i,r=t(13),c=t(0),o=t.n(c),m=t(14),d=function(e){return o.a.createElement(s,null,e.data.map((function(e){return o.a.createElement(b,{key:e.title},o.a.createElement(p,null),o.a.createElement("div",{className:"title2"},e.title),o.a.createElement("ul",{className:"ul"},e.list.map((function(e){return o.a.createElement("li",{className:"list",key:e},e)}))))})))},p=m.b.div(a||(a=Object(r.a)(["\n  width: 48px;\n  height: 48px;\n  background-color: #5284bf;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: -24px;\n  &::after {\n    content: '';\n    display: inline-block;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: #19477c;\n  }\n"]))),s=m.b.div(l||(l=Object(r.a)(["\n  padding: 32px 40px 0 64px;\n"]))),b=m.b.div(i||(i=Object(r.a)(["\n  border-left: 2px solid #5284bf;\n  margin-top: 4px;\n  padding-bottom: 54px;\n  padding-left: 48px;\n  position: relative;\n  &:last-child {\n    border: none;\n  }\n  .title2 {\n    font-size: 48px;\n    line-height: 68px;\n    font-weight: bold;\n  }\n  .ul {\n    padding-left: 48px;\n  }\n  .list {\n    font-size: 32px;\n    line-height: 1.4;\n    margin-top: 16px;\n    list-style-type: disc;\n  }\n"])))},304:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return W}));var a,l,i,r,c,o,m,d,p,s,b,u,g,x,f,E,h,v,j,O,k,y,w,J,N,z=t(13),P=t(2),I=t(0),S=t.n(I),A=t(299),T=t(44),C=t(300),F=t(14),B=t.p+"assets/images/bg-choose-1abd4df06.png",R=t.p+"assets/images/bg-choose-2b8b550f0.png",Y=t.p+"assets/images/bg-choose-3f2d07165.png",D=t.p+"assets/images/example1ad0e97bc.png",Q=t.p+"assets/images/example2d095348d.png",W=function(){var e=Object(I.useState)(1),n=Object(P.a)(e,2),t=n[0],a=n[1],l=Object(I.useState)(0),i=Object(P.a)(l,2),r=i[0],c=i[1];return S.a.createElement(S.a.Fragment,null,S.a.createElement(X,null,S.a.createElement(T.e,{slideSize:86,trackOffset:7,loop:!0,stuckAtBoundary:!1,indicator:function(e,n){for(var t=[],a=0;a<e;a+=1)t.push(S.a.createElement(se,{key:a,className:a===n?"active":""}));return S.a.createElement(pe,null,t)},onIndexChange:function(e){return c(e)},defaultIndex:r},["#ace0ff","#bcffbd","#e4fabd","#ffcfac"].map((function(e,n){return S.a.createElement(T.e.Item,{key:e,className:r===n?"active":""},S.a.createElement(q,null,S.a.createElement(G,{style:{background:e}},n+1)))})))),S.a.createElement(H,null,S.a.createElement(K,null,"\u8bfe\u7a0b"),S.a.createElement(T.b,null,S.a.createElement(T.b.Panel,{key:"1",title:S.a.createElement(L,null,S.a.createElement(M,null),S.a.createElement("div",null,"Java\u5168\u6808\u5f00\u53d1"))},S.a.createElement(U,null,"\u8bfe\u7a0b\u7b80\u4ecb\uff1a\u8ba1\u7b97\u673a\u7f16\u7a0b\u6280\u672f\u4e00\u76f4\u5728\u53d1\u5c55\u8fdb\u6b65\uff0c\u5728\u8fc7\u53bb\u7684\u51e0\u5341\u5e74\u91cc\u8bde\u751f\u4e86\u4e0d\u5c11\u65b0\u7684\u6280\u672f\u8bed\u8a00\u3002\u4f46Java\u5728\u7f16\u7a0b\u8bed\u8a00\u6392\u540d\u699c\u5355\u4e2d\uff0c\u4f9d\u7136\u7a33\u5c45\u7b2c\u4e00\u3002\u5f88\u591a\u5927\u578b\u4f01\u4e1a\u90fd\u5728\u7528Java\uff0c\u4fc3\u4f7f\u4e86\u5927\u91cf\u540c\u5b66\u9009\u62e9\u5b66\u4e60Java\u3002\u521a\u5165\u95e8\u7684\u540c\u5b66\u5728\u5b66\u4e60\u4e0e\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7591\u95ee\uff0c\u672c\u6b21\u8bfe\u7a0b\u5c06\u4e3a\u5927\u5bb6\u9010\u4e00\u8bb2\u89e3\uff0c\u544a\u8bc9\u5927\u5bb6Java\u7684\u6b63\u786e\u5b66\u4e60\u65b9\u6cd5\u8def\u5f84\uff0cJava\u7684\u6c42\u804c\u9762\u8bd5\u8be5\u5982\u4f55\u51c6\u5907\u3002"),S.a.createElement(T.a,{color:"primary",size:"middle"},S.a.createElement("div",{className:"btn"},S.a.createElement("i",{className:"iconfont icon-course"}),"\u8bfe\u7a0b\u8be6\u60c5")))),S.a.createElement(T.b,null,S.a.createElement(T.b.Panel,{key:"1",title:S.a.createElement(L,null,S.a.createElement(M,null),S.a.createElement("div",null,"Python\u4eba\u5de5\u667a\u80fd"))},S.a.createElement(U,null,"\u8bfe\u7a0b\u7b80\u4ecb\uff1a\u8ba1\u7b97\u673a\u7f16\u7a0b\u6280\u672f\u4e00\u76f4\u5728\u53d1\u5c55\u8fdb\u6b65\uff0c\u5728\u8fc7\u53bb\u7684\u51e0\u5341\u5e74\u91cc\u8bde\u751f\u4e86\u4e0d\u5c11\u65b0\u7684\u6280\u672f\u8bed\u8a00\u3002\u4f46Java\u5728\u7f16\u7a0b\u8bed\u8a00\u6392\u540d\u699c\u5355\u4e2d\uff0c\u4f9d\u7136\u7a33\u5c45\u7b2c\u4e00\u3002\u5f88\u591a\u5927\u578b\u4f01\u4e1a\u90fd\u5728\u7528Java\uff0c\u4fc3\u4f7f\u4e86\u5927\u91cf\u540c\u5b66\u9009\u62e9\u5b66\u4e60Java\u3002\u521a\u5165\u95e8\u7684\u540c\u5b66\u5728\u5b66\u4e60\u4e0e\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7591\u95ee\uff0c\u672c\u6b21\u8bfe\u7a0b\u5c06\u4e3a\u5927\u5bb6\u9010\u4e00\u8bb2\u89e3\uff0c\u544a\u8bc9\u5927\u5bb6Java\u7684\u6b63\u786e\u5b66\u4e60\u65b9\u6cd5\u8def\u5f84\uff0cJava\u7684\u6c42\u804c\u9762\u8bd5\u8be5\u5982\u4f55\u51c6\u5907\u3002"),S.a.createElement(T.a,{color:"primary",size:"middle"},"\u8bfe\u7a0b\u8be6\u60c5"))),S.a.createElement(T.b,null,S.a.createElement(T.b.Panel,{key:"1",title:S.a.createElement(L,null,S.a.createElement(M,null),S.a.createElement("div",null,"\u57fa\u672c\u60c5\u62a5\u6280\u672f\u8005\u5bf9\u7b56"))},S.a.createElement(U,null,"\u8bfe\u7a0b\u7b80\u4ecb\uff1a\u8ba1\u7b97\u673a\u7f16\u7a0b\u6280\u672f\u4e00\u76f4\u5728\u53d1\u5c55\u8fdb\u6b65\uff0c\u5728\u8fc7\u53bb\u7684\u51e0\u5341\u5e74\u91cc\u8bde\u751f\u4e86\u4e0d\u5c11\u65b0\u7684\u6280\u672f\u8bed\u8a00\u3002\u4f46Java\u5728\u7f16\u7a0b\u8bed\u8a00\u6392\u540d\u699c\u5355\u4e2d\uff0c\u4f9d\u7136\u7a33\u5c45\u7b2c\u4e00\u3002\u5f88\u591a\u5927\u578b\u4f01\u4e1a\u90fd\u5728\u7528Java\uff0c\u4fc3\u4f7f\u4e86\u5927\u91cf\u540c\u5b66\u9009\u62e9\u5b66\u4e60Java\u3002\u521a\u5165\u95e8\u7684\u540c\u5b66\u5728\u5b66\u4e60\u4e0e\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7591\u95ee\uff0c\u672c\u6b21\u8bfe\u7a0b\u5c06\u4e3a\u5927\u5bb6\u9010\u4e00\u8bb2\u89e3\uff0c\u544a\u8bc9\u5927\u5bb6Java\u7684\u6b63\u786e\u5b66\u4e60\u65b9\u6cd5\u8def\u5f84\uff0cJava\u7684\u6c42\u804c\u9762\u8bd5\u8be5\u5982\u4f55\u51c6\u5907\u3002"),S.a.createElement(T.a,{color:"primary",size:"middle"},"\u8bfe\u7a0b\u8be6\u60c5"))),S.a.createElement(T.b,null,S.a.createElement(T.b.Panel,{key:"1",title:S.a.createElement(L,null,S.a.createElement(M,null),S.a.createElement("div",null,"SAP+ABAP\u5f00\u53d1"))},S.a.createElement(U,null,"\u8bfe\u7a0b\u7b80\u4ecb\uff1a\u8ba1\u7b97\u673a\u7f16\u7a0b\u6280\u672f\u4e00\u76f4\u5728\u53d1\u5c55\u8fdb\u6b65\uff0c\u5728\u8fc7\u53bb\u7684\u51e0\u5341\u5e74\u91cc\u8bde\u751f\u4e86\u4e0d\u5c11\u65b0\u7684\u6280\u672f\u8bed\u8a00\u3002\u4f46Java\u5728\u7f16\u7a0b\u8bed\u8a00\u6392\u540d\u699c\u5355\u4e2d\uff0c\u4f9d\u7136\u7a33\u5c45\u7b2c\u4e00\u3002\u5f88\u591a\u5927\u578b\u4f01\u4e1a\u90fd\u5728\u7528Java\uff0c\u4fc3\u4f7f\u4e86\u5927\u91cf\u540c\u5b66\u9009\u62e9\u5b66\u4e60Java\u3002\u521a\u5165\u95e8\u7684\u540c\u5b66\u5728\u5b66\u4e60\u4e0e\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7591\u95ee\uff0c\u672c\u6b21\u8bfe\u7a0b\u5c06\u4e3a\u5927\u5bb6\u9010\u4e00\u8bb2\u89e3\uff0c\u544a\u8bc9\u5927\u5bb6Java\u7684\u6b63\u786e\u5b66\u4e60\u65b9\u6cd5\u8def\u5f84\uff0cJava\u7684\u6c42\u804c\u9762\u8bd5\u8be5\u5982\u4f55\u51c6\u5907\u3002"),S.a.createElement(T.a,{color:"primary",size:"middle"},"\u8bfe\u7a0b\u8be6\u60c5"))),S.a.createElement(T.b,null,S.a.createElement(T.b.Panel,{key:"1",title:S.a.createElement(L,null,S.a.createElement(M,null),S.a.createElement("div",null,"AWS\u4e91\u8ba1\u7b97\u67b6\u6784"))},S.a.createElement(U,null,"\u8bfe\u7a0b\u7b80\u4ecb\uff1a\u8ba1\u7b97\u673a\u7f16\u7a0b\u6280\u672f\u4e00\u76f4\u5728\u53d1\u5c55\u8fdb\u6b65\uff0c\u5728\u8fc7\u53bb\u7684\u51e0\u5341\u5e74\u91cc\u8bde\u751f\u4e86\u4e0d\u5c11\u65b0\u7684\u6280\u672f\u8bed\u8a00\u3002\u4f46Java\u5728\u7f16\u7a0b\u8bed\u8a00\u6392\u540d\u699c\u5355\u4e2d\uff0c\u4f9d\u7136\u7a33\u5c45\u7b2c\u4e00\u3002\u5f88\u591a\u5927\u578b\u4f01\u4e1a\u90fd\u5728\u7528Java\uff0c\u4fc3\u4f7f\u4e86\u5927\u91cf\u540c\u5b66\u9009\u62e9\u5b66\u4e60Java\u3002\u521a\u5165\u95e8\u7684\u540c\u5b66\u5728\u5b66\u4e60\u4e0e\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7591\u95ee\uff0c\u672c\u6b21\u8bfe\u7a0b\u5c06\u4e3a\u5927\u5bb6\u9010\u4e00\u8bb2\u89e3\uff0c\u544a\u8bc9\u5927\u5bb6Java\u7684\u6b63\u786e\u5b66\u4e60\u65b9\u6cd5\u8def\u5f84\uff0cJava\u7684\u6c42\u804c\u9762\u8bd5\u8be5\u5982\u4f55\u51c6\u5907\u3002"),S.a.createElement(T.a,{color:"primary",size:"middle"},"\u8bfe\u7a0b\u8be6\u60c5"))),S.a.createElement(T.b,null,S.a.createElement(T.b.Panel,{key:"1",title:S.a.createElement(L,null,S.a.createElement(M,null),S.a.createElement("div",null,"N1/N2\u6781\u901f\u65e5\u8bed"))},S.a.createElement(U,null,"\u8bfe\u7a0b\u7b80\u4ecb\uff1a\u8ba1\u7b97\u673a\u7f16\u7a0b\u6280\u672f\u4e00\u76f4\u5728\u53d1\u5c55\u8fdb\u6b65\uff0c\u5728\u8fc7\u53bb\u7684\u51e0\u5341\u5e74\u91cc\u8bde\u751f\u4e86\u4e0d\u5c11\u65b0\u7684\u6280\u672f\u8bed\u8a00\u3002\u4f46Java\u5728\u7f16\u7a0b\u8bed\u8a00\u6392\u540d\u699c\u5355\u4e2d\uff0c\u4f9d\u7136\u7a33\u5c45\u7b2c\u4e00\u3002\u5f88\u591a\u5927\u578b\u4f01\u4e1a\u90fd\u5728\u7528Java\uff0c\u4fc3\u4f7f\u4e86\u5927\u91cf\u540c\u5b66\u9009\u62e9\u5b66\u4e60Java\u3002\u521a\u5165\u95e8\u7684\u540c\u5b66\u5728\u5b66\u4e60\u4e0e\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7591\u95ee\uff0c\u672c\u6b21\u8bfe\u7a0b\u5c06\u4e3a\u5927\u5bb6\u9010\u4e00\u8bb2\u89e3\uff0c\u544a\u8bc9\u5927\u5bb6Java\u7684\u6b63\u786e\u5b66\u4e60\u65b9\u6cd5\u8def\u5f84\uff0cJava\u7684\u6c42\u804c\u9762\u8bd5\u8be5\u5982\u4f55\u51c6\u5907\u3002"),S.a.createElement(T.a,{color:"primary",size:"middle"},"\u8bfe\u7a0b\u8be6\u60c5")))),S.a.createElement(V,null,S.a.createElement(Z,null,"\u4e3a\u4ec0\u4e48",S.a.createElement("br",null),"\u9009\u62e9\u706f\u5854IT"),S.a.createElement($,null,S.a.createElement(_,{src:B}),S.a.createElement(ee,null,"1"),S.a.createElement(ne,null,"\u5951\u5408\u65e5\u672cIT\u5e02\u573a\u7684\u591a\u95e8\u8bfe\u7a0b"),S.a.createElement(te,null,"\u9488\u5bf9\u96f6\u57fa\u7840\u4eba\u58eb\u8bbe\u7acbIT\u591a\u9886\u57df\u81ea\u4e3b\u7814\u53d1\u8bfe\u7a0b\u3002\u8bfe\u5185\u5305\u542b\u5f00\u53d1\u9879\u76ee\u5b9e\u6218\u6f14\u4e60\u6ee1\u8db3\u65e5\u672c\u5e02\u573a\u548c\u4f01\u4e1a\u9700\u6c42\u30022\u5e74\u5185\u65e0\u9650\u590d\u542c\u4fdd\u969c\uff0c\u5b66\u6210\u540e\u5373\u53ef\u8fbe\u5230\u4f01\u4e1a\u5165\u804c\u9700\u6c42\u3002")),S.a.createElement($,{style:{background:"#EEEFF3"}},S.a.createElement(_,{src:R}),S.a.createElement(ee,null,"2"),S.a.createElement(ne,null,"\u5782\u76f4IT\u884c\u4e1a\u7684\u5c31\u8f6c\u804c\u670d\u52a1"),S.a.createElement(te,null,"\u9488\u5bf9\u65e5\u672cIT\u884c\u4e1a\u5c31\u804c\u63d0\u4f9b\u5168\u9762\u8f85\u5bfc\u7b56\u7565\uff0c\u8d44\u6df1\u987e\u95ee\u4e00\u5bf9\u4e00\u4fee\u6539\u7b80\u5386\u53ca\u9762\u8bd5\u57f9\u8bad\u3002\u5b66\u5458\u4eba\u5747\u5185\u5b9a\u4f01\u4e1a2\u5bb6\u4ee5\u4e0a\uff0c\u5c31\u804c\u6210\u529f\u7387100%\uff0c\u5e76\u63d0\u4f9b\u7ec8\u8eab\u8f6c\u804c\u8f85\u5bfc\u3002")),S.a.createElement($,null,S.a.createElement(_,{src:Y}),S.a.createElement(ee,null,"3"),S.a.createElement(ne,null,"\u4e30\u5bcc\u7684\u65e5\u672cIT\u884c\u4e1a\u8d44\u6e90"),S.a.createElement(te,null,"\u62e5\u67091000\u4eba\u4ee5\u4e0a\u7684\u7684\u65e5\u672cIT\u4ea4\u6d41\u7fa4\uff0c\u638c\u63e1IT\u6700\u65b0\u884c\u4e1a\u52a8\u6001\u3002"))),S.a.createElement(ae,null,S.a.createElement(A.a,null)),S.a.createElement(le,null,S.a.createElement(ie,null,S.a.createElement("div",{className:"title"},"\u6210\u957f\u6848\u4f8b"),S.a.createElement(re,null,S.a.createElement(ce,{className:1===t?"active":"",onClick:function(){return a(1)}},S.a.createElement("img",{src:D,alt:"",className:"img"}),S.a.createElement("div",{className:"font"},"\u6848\u4f8b\u4e00")),S.a.createElement(ce,{className:2===t?"active":"",onClick:function(){return a(2)}},S.a.createElement("img",{src:Q,alt:"",className:"img"}),S.a.createElement("div",{className:"font"},"\u6848\u4f8b\u4e8c"))),2===t&&S.a.createElement(S.a.Fragment,null,S.a.createElement(oe,null,S.a.createElement("div",{className:"title"},"A\u6851"),S.a.createElement("div",{className:"title"},"\u5b66\u5386"),S.a.createElement("div",null,"\u673a\u68b0\u81ea\u52a8\u5316\u4e13\u4e1a\uff08\u7406\u5de5\u7cfb\uff09\u4fee\u58eb\u6bd5\u4e1a"),S.a.createElement("div",{className:"title"},"\u5e74\u9f84"),S.a.createElement("div",null,"30\u4ee3\u540e\u534a"),S.a.createElement("div",{className:"title"},"\u5de5\u4f5c\u65b9\u5411"),S.a.createElement("div",null,"\u8f6f\u4ef6\u670d\u52a1")),S.a.createElement(me,null,"\u7406\u79d1\u751f/IT\u5de5\u7a0b\u5e08\u6210\u957f\u6848\u4f8b"),S.a.createElement(de,null,"\u7b80\u8ff0\uff1a\u4e3b\u8981\u8d1f\u8d23\u9879\u76ee\u8fdb\u5c55\u7ba1\u7406\uff0c\u54c1\u8d28\u7ba1\u7406\uff0c\u4eba\u624d\u80b2\u6210\u7b49\u3002")),1===t&&S.a.createElement(S.a.Fragment,null,S.a.createElement(oe,null,S.a.createElement("div",{className:"title"},"\u674e\u540c\u5b66"),S.a.createElement("div",{className:"title"},"\u5b66\u5386"),S.a.createElement("div",null,"\u7ecf\u8425\u5b66\uff08\u6587\u7cfb\uff09\u672c\u79d1\u6bd5\u4e1a"),S.a.createElement("div",{className:"title"},"\u5e74\u9f84"),S.a.createElement("div",null,"30\u4ee3\u524d\u534a"),S.a.createElement("div",{className:"title"},"\u5de5\u4f5c\u65b9\u5411"),S.a.createElement("div",null,"SAP\u54a8\u8be2\u884c\u4e1a\u9879\u76ee\u7ecf\u7406")),S.a.createElement(me,null,"\u6587\u79d1\u751f/ IT\u54a8\u8be2\u6210\u957f\u6848\u4f8b"),S.a.createElement(de,null,"\u7b80\u8ff0\uff1a\u4e3b\u8981\u8d1f\u8d23IT\u9879\u76ee\u8fdb\u884c\u6280\u672f\u9009\u578b\uff0c\u67b6\u6784\u8bbe\u8ba1\uff0c\u63d0\u4f9b\u6280\u672f\u4e0a\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u3002"))),S.a.createElement(C.a,{data:1===t?[{title:"\u52a9\u7406\u5206\u6790\u5e08(\u5165\u804c\u7b2c1\u5e74)",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u901a\u8fc7\u793e\u5185\u7814\u4fee\u5b66\u4e60\u63d0\u5347\u6280\u672f\u3002\u5206\u6790\u5ba2\u6237\u9700\u6c42\uff0c\u5236\u4f5c\u63d0\u6848\u4e66\uff0c\u6574\u7406\u6570\u636e\u8d44\u6599\u3002","\u6838\u5fc3\u6280\u80fd\uff1a\u5b66\u4e60\u80fd\u529b\uff0c\u9700\u6c42&\u6280\u672f\u6c9f\u901a\u80fd\u529b\u3002","\u5e74\u53ce\uff1a430\u4e07\u5186"]},{title:"SAP\u54a8\u8be2\u5e08(\u5165\u804c\u7b2c4\u5e74)",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u5206\u6790\u5ba2\u6237\u516c\u53f8\u7684\u7ba1\u7406\u548c\u5404\u4e1a\u52a1\u6a21\u5757\uff0c\u63d0\u4f9bSAP\u4ea7\u54c1\u5bfc\u5165\u548c\u529f\u80fd\u5b9a\u5236\u7684\u89e3\u51b3\u65b9\u6848\u3002\u53c2\u4e0e\u8981\u4ef6\u5b9a\u4e49\uff0c\u7cfb\u7edf\u8bbe\u8ba1\uff0c\u5f00\u53d1\uff0c\u6d4b\u8bd5\uff0c\u4ea4\u4ed8\u7b49\u4e3b\u8981\u6d41\u7a0b\u3002","\u6838\u5fc3\u6280\u80fd\uff1aSAP\u9886\u57df\u7684\u4e13\u4e1a\u77e5\u8bc6\uff0c\u5feb\u901f\u7406\u89e3\u5ba2\u6237\u4e1a\u52a1\u7684\u80fd\u529b\u3002\u63d0\u6848\u80fd\u529b\uff0c\u6c9f\u901a\u80fd\u529b\u3002","\u5e74\u53ce\uff1a700\u4e07\u5186"]},{title:"\u8f6c\u578b\u4e3a\u9879\u76ee\u7ecf\u7406(\u5165\u804c\u7b2c7\u5e74)",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u4f5c\u4e3a\u9879\u76ee\u7ba1\u7406\u8005\u5e26\u9886\u56e2\u961f\uff0c\u5e73\u8861\u5ba2\u6237\u9700\u6c42\u3002\u4fdd\u969c\u9879\u76ee\u987a\u5229\u8fdb\u884c\u7684\u540c\u65f6\u9700\u7ba1\u63a7\u6210\u672c\u3001\u98ce\u9669\u3001\u5ba2\u6237\u6c9f\u901a\u3001\u8d28\u91cf\u3001\u8d44\u6e90\u8c03\u914d\u7b49\u4e1a\u52a1\u5185\u5bb9\u3002","\u6838\u5fc3\u6280\u80fd\uff1a\u4e30\u5bcc\u7684SAP\u7684\u9879\u76ee\u7ecf\u9a8c\uff0c\u56e2\u961f\u7ba1\u7406\u80fd\u529b\uff0c\u8d44\u6e90\u534f\u8c03\u80fd\u529b\u3002","\u5e74\u53ce\uff1a900\u4e07\u5186"]},{title:"\u8f6c\u578b\u4e3aSAP\u9ad8\u7ea7\u54a8\u8be2\u987e\u95ee\uff08\u5165\u804c\u7b2c12\u5e74\uff09",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u5177\u6709\u4ece\u4e0a\u6e38\u4f01\u5212\u5230\u4e0b\u6e38\u5f00\u53d1\u7684\u5168\u9762\u7ecf\u9a8c\uff0c\u719f\u6089SAP\u7c7bERP\u4ea7\u54c1\u3002\u4e3a\u987e\u5ba2\u4e2d\u957f\u671f\u53d1\u5c55\u8ba1\u5212\u63d0\u4f9b\u6280\u672f\u652f\u6301\uff0c\u8bbe\u8ba1\u7b26\u5408\u4e1a\u52a1\u6d41\u7a0b\u7684ERP\u4ea7\u54c1\u6784\u67b6\uff0c\u63a8\u8fdb\u5ba2\u6237\u4f01\u4e1a\u6570\u5b57\u5316\u8f6c\u578b\uff08DX\uff09\u3002","\u6838\u5fc3\u6280\u80fd\uff1a\u4e30\u5bcc\u7684\u9879\u76ee\u7ecf\u9a8c\uff0c\u4ea7\u54c1\u67b6\u6784\u77e5\u8bc6\u53ca\u7b56\u5212\u3001\u8bbe\u8ba1\u80fd\u529b\u3002","\u5e74\u53ce\uff1a1500\u4e07\u5186"]}]:[{title:"\u7a0b\u5e8f\u5458(\u5165\u804c\u7b2c1\u5e74)\uff1a",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u6839\u636e\u7cfb\u7edf\u8bbe\u8ba1\u5236\u4f5c\u8be6\u7ec6\u5f0f\u6837\u4e66\uff0c\u6309\u7167\u8be6\u7ec6\u5f0f\u6837\u4e66\u5b8c\u6210\u4ee3\u7801\u7684\u5f00\u53d1\u53ca\u6d4b\u8bd5\u90e8\u5206\u3002","\u6838\u5fc3\u80fd\u529b\uff1a\u5b66\u4e60\u80fd\u529b\uff0c\u7f16\u7a0b\u80fd\u529b\uff0c\u7cfb\u7edf\u67b6\u6784\u77e5\u8bc6\u4f53\u7cfb\u3002","\u5e74\u53ce\uff1a350\u4e07"]},{title:"\u7cfb\u7edf\u5de5\u7a0b\u5e08(\u5165\u804c\u7b2c3\u5e74)\uff1a",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u62c5\u5f53\u4ece\u7cfb\u7edf\u7684\u57fa\u672c\u8bbe\u8ba1\u3001\u8be6\u7ec6\u8bbe\u8ba1\u5230\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u7ef4\u62a4\u3001\u4e0a\u7ebf\u7b49\u5f00\u53d1\u5168\u6d41\u7a0b\u3002","\u6838\u5fc3\u6280\u80fd\uff1a\u719f\u6089\u9879\u76ee\u5f00\u53d1\u6574\u4f53\u6d41\u7a0b\uff0c\u5f00\u53d1\u7ecf\u9a8c\uff0c\u8bbe\u8ba1\u80fd\u529b\u3002","\u5e74\u53ce\uff1a580\u4e07\u5186"]},{title:"\u8f6c\u578b\u4e3a\u9879\u76ee\u7ecf\u7406(\u5165\u804c\u7b2c7\u5e74)",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u4f5c\u4e3a\u9879\u76ee\u7ba1\u7406\u8005\u5e26\u9886\u56e2\u961f\uff0c\u5e73\u8861\u5ba2\u6237\u9700\u6c42\u3002\u4fdd\u969c\u9879\u76ee\u987a\u5229\u8fdb\u884c\u7684\u540c\u65f6\u9700\u7ba1\u63a7\u6210\u672c\u3001\u98ce\u9669\u3001\u5ba2\u6237\u6c9f\u901a\u3001\u8d28\u91cf\u3001\u8d44\u6e90\u8c03\u914d\u7b49\u4e1a\u52a1\u5185\u5bb9\u3002","\u6838\u5fc3\u6280\u80fd\uff1a\u4e30\u5bcc\u7684SAP\u7684\u9879\u76ee\u7ecf\u9a8c\uff0c\u56e2\u961f\u7ba1\u7406\u80fd\u529b\uff0c\u8d44\u6e90\u534f\u8c03\u80fd\u529b\u3002","\u5e74\u53ce\uff1a900\u4e07\u5186"]},{title:"\u7cfb\u7edf\u67b6\u6784\u5e08(\u5165\u804c\u7b2c10\u5e74)\uff1a",list:["\u4e1a\u52a1\u5185\u5bb9\uff1a\u5206\u6790\u5ba2\u6237\u9700\u6c42\u5e76\u63d0\u51fa\u76f8\u5e94\u7684\u7cfb\u7edf\u89e3\u51b3\u65b9\u6848\uff0c\u89e3\u51b3\u5ba2\u6237\u73b0\u6709\u95ee\u9898\uff0c\u5e76\u5e26\u9886\u5f00\u53d1\u4eba\u5458\u4e00\u540c\u5b9e\u73b0\u7cfb\u7edf\u5f00\u53d1\u6784\u7b51\u3002","\u6838\u5fc3\u80fd\u529b\uff1a\u591a\u79cd\u7cfb\u7edf\u7684\u5f00\u53d1\u7ecf\u9a8c\uff0c\u7cfb\u7edf\u5f00\u53d1\u77e5\u8bc6\u9886\u57df\u76f8\u5173\u6280\u672f\uff0c\u4e1a\u52a1\u7406\u89e3\u80fd\u529b\uff0c\u8bbe\u8ba1\u80fd\u529b\u3002","\u5e74\u53ce\uff1a1000\u4e07\u5186"]}]})))},X=F.b.div(a||(a=Object(z.a)(["\n  padding-top: 32px;\n  height: 472px;\n  .adm-swiper-item {\n    transition: 300ms;\n    transform: scaleY(0.8);\n    &.active {\n      transform: scaleY(1);\n    }\n  }\n"]))),q=F.b.div(l||(l=Object(z.a)(["\n  height: 332px;\n  padding: 0 20px;\n"]))),G=F.b.div(i||(i=Object(z.a)(["\n  height: 100%;\n  border-radius: 8px;\n"]))),H=F.b.div(r||(r=Object(z.a)(["\n  background-color: #f4f4f4;\n  padding: 60px 30px;\n  .adm-collapse {\n    margin-bottom: 32px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .adm-list-body {\n    box-shadow: 0px 4px 6px rgba(210, 210, 210, 0.25);\n    border-radius: 16px;\n    border: none;\n  }\n  .btn {\n    display: flex;\n    align-items: center;\n    font-size: 28px;\n    .iconfont {\n      font-size: 40px;\n      height: 20px;\n      line-height: 20px;\n      margin-right: 12px;\n    }\n  }\n"]))),K=F.b.div(c||(c=Object(z.a)(["\n  font-size: 48px;\n  font-weight: bold;\n  margin-bottom: 20px;\n"]))),L=F.b.div(o||(o=Object(z.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n"]))),M=F.b.span(m||(m=Object(z.a)(["\n  display: inline-block;\n  width: 56px;\n  height: 56px;\n  border-radius: 20px;\n  background-color: ",";\n  margin-right: 24px;\n"])),"#163868"),U=F.b.div(d||(d=Object(z.a)(["\n  color: #363636;\n  font-size: 32px;\n  line-height: 1.6;\n  margin-bottom: 24px;\n"]))),V=F.b.div(p||(p=Object(z.a)(["\n  padding-top: 98px;\n"]))),Z=F.b.div(s||(s=Object(z.a)(["\n  font-size: 104px;\n  line-height: 136px;\n  font-weight: bold;\n  padding: 0 120px;\n  text-align: center;\n  white-space: nowrap;\n"]))),$=F.b.div(b||(b=Object(z.a)(["\n  padding: 74px 54px 60px;\n"]))),_=F.b.img(u||(u=Object(z.a)(["\n  width: 100%;\n  border: none;\n  margin-bottom: 48px;\n"]))),ee=F.b.div(g||(g=Object(z.a)(["\n  width: 76px;\n  height: 76px;\n  border-radius: 50%;\n  margin-top: 18px;\n  margin-bottom: 24px;\n  color: #fff;\n  font-size: 48px;\n  line-height: 76px;\n  text-align: center;\n  background-color: ",";\n"])),"#163868"),ne=F.b.div(x||(x=Object(z.a)(["\n  font-size: 48px;\n  font-weight: bold;\n  margin-bottom: 24px;\n  line-height: 1.26;\n  color: ",";\n"])),"#163868"),te=F.b.div(f||(f=Object(z.a)(["\n  font-size: 32px;\n  line-height: 44px;\n"]))),ae=F.b.div(E||(E=Object(z.a)(["\n  background-color: #f7f7f7;\n  padding-bottom: 110px;\n"]))),le=F.b.div(h||(h=Object(z.a)(["\n  padding: 64px 0 120px;\n  .title {\n    font-size: 48px;\n    line-height: 56px;\n    font-weight: bold;\n  }\n"]))),ie=F.b.div(v||(v=Object(z.a)(["\n  padding: 0 32px;\n"]))),re=F.b.div(j||(j=Object(z.a)(["\n  margin-top: 48px;\n  display: flex;\n  justify-content: space-between;\n"]))),ce=F.b.div(O||(O=Object(z.a)(["\n  width: 324px;\n  height: 436px;\n  border-radius: 16px;\n  border: 1px solid rgba(22, 56, 104, 0.4);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  .img {\n    width: 180px;\n    height: 244px;\n  }\n  .font {\n    font-size: 48px;\n    line-height: 1.3;\n    font-weight: bold;\n    color: #717171;\n    margin-top: 40px;\n  }\n  &.active {\n    background-color: #5284bf;\n    border: none;\n  }\n  &.active .font {\n    color: #fff;\n  }\n"]))),oe=F.b.div(k||(k=Object(z.a)(["\n  background: #eeeff3;\n  border-radius: 8px;\n  padding: 32px;\n  font-size: 32px;\n  line-height: 48px;\n  margin-top: 32px;\n  .title {\n    font-weight: bold;\n    margin-top: 8px;\n    font-size: 32px;\n  }\n"]))),me=F.b.div(y||(y=Object(z.a)(["\n  font-size: 48px;\n  font-weight: bold;\n  margin-top: 60px;\n"]))),de=F.b.div(w||(w=Object(z.a)(["\n  font-size: 32px;\n  margin-top: 24px;\n  line-height: 48px;\n  font-weight: bold;\n"]))),pe=F.b.div(J||(J=Object(z.a)(["\n  margin-top: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),se=F.b.span(N||(N=Object(z.a)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #c4c4c4;\n  border-radius: 50%;\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &.active {\n    background-color: ",";\n  }\n"])),"#163868")}}]);