(this.webpackJsonp=this.webpackJsonp||[]).push([[26],{1210:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return L}));t(404);var a,c,l,r,i,o,u,d,b,m,p,s,f,x,v=t(1150),j=t.n(v),h=(t(1168),t(1169)),E=t.n(h),g=t(13),O=t(0),y=t.n(O),k=t(1151),w=t(1197),z=t(1198),F=t(161),Y=t(1157),M=t(1148),N=t(1171),S=t(4),T=t(6),D=t(68).theme["brand-primary"],H=T.b.div(a||(a=Object(S.a)([""]))),J=T.b.div(c||(c=Object(S.a)(["\n  height: 266px;\n  border-radius: 0px 0px 30px 30px;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"])),D),P=T.b.div(l||(l=Object(S.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  color: #fff;\n  text-align: center;\n"]))),q=T.b.div(r||(r=Object(S.a)(["\n  font-size: 28px;\n"]))),A=T.b.div(i||(i=Object(S.a)(["\n  margin-top: 46px;\n  font-size: 40px;\n"]))),B=T.b.div(o||(o=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 52px 30px 52px 0;\n"]))),C=T.b.div(u||(u=Object(S.a)(["\n  width: 250px;\n  &:nth-child(2) {\n    width: 200px;\n  }\n"]))),I=T.b.div(d||(d=Object(S.a)(["\n  padding: 0 30px 52px;\n"]))),R=T.b.div(b||(b=Object(S.a)(["\n  padding-bottom: 32px;\n  color: #bfbfbf;\n  font-size: 32px;\n"]))),X=T.b.div(m||(m=Object(S.a)(["\n  border: "," solid #e8e8e8;\n  border-radius: 16px;\n  padding: 32px 30px;\n  background: #fafafa;\n  margin-bottom: 24px;\n  display: flex;\n  align-items: center;\n  color: #262626;\n  font-size: 28px;\n  .bottom,\n  .top {\n    height: 48px;\n    display: inline-flex;\n    align-items: center;\n  }\n  .bottom {\n    margin-top: 16px;\n  }\n"])),"1PX"),_=T.b.div(p||(p=Object(S.a)(["\n  width: 390px;\n  display: inline-flex;\n  flex-direction: column;\n  .top {\n    font-size: 32px;\n  }\n  .bottom {\n    font-size: 22px;\n    color: #bfbfbf;\n  }\n"]))),G=T.b.div(s||(s=Object(S.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n"]))),K=T.b.span(f||(f=Object(S.a)(["\n  min-width: 50px;\n  height: 32px;\n  font-size: 18px;\n  background-color: #fff;\n  color: ",";\n  line-height: 32px;\n  margin-right: 50px;\n  flex-shrink: 0;\n"])),D),L=(T.b.button(x||(x=Object(S.a)(["\n  width: 162px;\n  height: 66px;\n  background-color: ",";\n  border-radius: 16px;\n  color: #fff;\n  font-size: 32px;\n  border: none;\n"])),D),function(){var e=Object(O.useState)(new Date),n=Object(g.a)(e,2),t=n[0],a=n[1],c=Object(O.useState)([{value:"",label:""}]),l=Object(g.a)(c,2),r=l[0],i=l[1],o=Object(O.useState)(["maths1"]),u=Object(g.a)(o,2),d=u[0],b=u[1],m=Object(O.useState)(["0"]),p=Object(g.a)(m,2),s=p[0],f=p[1],x=Object(w.a)(F.m,{variables:{sourceType:"center"}}).data,v=Object(w.a)(F.t).data,h=void 0===v?{}:v,S=Object(z.a)(F.h,{fetchPolicy:"cache-and-network"}),T=Object(g.a)(S,2),D=T[0],L=(T[1].data||{}).getHistoryByFilters,Q=h.getTotalHistory||{},U=Q.accuracy,V=void 0===U?0:U,W=Q.questionAmount,Z=void 0===W?0:W,$=Q.trainingTime,ee=void 0===$?0:$,ne=Object(O.useRef)("");return Object(O.useEffect)((function(){var e=(x||{}).typeSubjects;e&&i(Object(Y.a)(e,M.m))}),[x]),Object(O.useEffect)((function(){var e="".concat(t.getFullYear(),"-").concat(t.getMonth()+1);D({variables:{subject:d[0],moduleType:s[0],time:e}})}),[t,d,s,D]),y.a.createElement(H,null,y.a.createElement(J,null,y.a.createElement(P,null,y.a.createElement(q,null,"\u7ec3\u4e60\u65f6\u957f"),y.a.createElement(A,null,(ee/60).toFixed(1),"\u5206\u949f ")),y.a.createElement(P,null,y.a.createElement(q,null,"\u5171\u7b54\u9898\u6570"),y.a.createElement(A,null,Z,"\u9053")),y.a.createElement(P,null,y.a.createElement(q,null,"\u5e73\u5747\u6b63\u786e\u7387"),y.a.createElement(A,null,(100*V).toFixed(2),"%"))),y.a.createElement(B,null,y.a.createElement(C,null,y.a.createElement(E.a,{format:"YYYY-MM",mode:"month",onChange:function(e){return function(e){a(e)}(e)},value:t},y.a.createElement(k.a,{placeholder:"\u65f6\u95f4",value:function(){var e=t.getFullYear(),n=t.getMonth()+1;return"".concat(e,"-").concat(n)}()}))),y.a.createElement(C,null,y.a.createElement(j.a,{data:r,cols:1,value:d,onOk:function(e){return b(e)}},y.a.createElement(k.a,{placeholder:"\u79d1\u76ee"}))),y.a.createElement(C,null,y.a.createElement(j.a,{data:M.k,cols:1,value:s,onOk:function(e){return f(e)}},y.a.createElement(k.a,{placeholder:"\u6a21\u5757"})))),y.a.createElement(I,null,null===L||void 0===L?void 0:L.map((function(e){var n=e._id,t=e.subject,a=e.timeInterval,c=e.points,l=e.accuracy,r=e.title,i=e.timestamp,o=Object(N.a)(i),u=!1;return o!==ne.current&&(u=!0,ne.current=o),y.a.createElement("div",{key:n},u&&y.a.createElement(R,null,o),y.a.createElement(X,null,y.a.createElement(_,null,y.a.createElement("div",{className:"top"},y.a.createElement(K,null,M.m[t]),"2"===s[0]?function(e){var n=e.sourceType,t=e.subject,a=e.timestamp,c=new Date(Number(a));return"".concat(n).concat(c.getFullYear(),"\u5e74").concat(c.getMonth()+1,"\u6708").concat(M.m[t])}(e):r),y.a.createElement("div",{className:"bottom"},"\u7528\u65f6\uff1a",(a/60).toFixed(1),"\u5206\u949f")),y.a.createElement(G,null,y.a.createElement("div",{className:"top"},"\u6b63\u786e\u7387\uff1a",(100*l).toFixed(2),"%"),y.a.createElement("div",{className:"bottom"},"\u5f97\u5206\uff1a",c.reduce((function(e,n){return e+n}))))))}))))})}}]);