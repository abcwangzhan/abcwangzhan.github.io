(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{465:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(94),i=n(182),c=n(435),r=n(56),o=n(433),l=n(431),u=n(0),d=n.n(u),m=n(429),s=function(){var e=Object(m.e)(),t=Object(u.useState)(),n=Object(a.a)(t,2),s=n[0],f=n[1],k=function(){i.a.getCourse().then((function(e){return f(e)}))},p=[{title:"id",dataIndex:"id",key:"id"},{title:"\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u957f\u4ecb\u7ecd",dataIndex:"longIntro",key:"longIntro"},{title:"\u77ed\u4ecb\u7ecd",dataIndex:"shortIntro",key:"shortIntro"},{title:"\u8bfe\u65f6\u6570",dataIndex:"lectureNum",key:"lectureNum"},{title:"\u603b\u65f6\u957f",dataIndex:"totalTime",key:"totalTime"},{title:"icon\u94fe\u63a5",dataIndex:"iconFile",key:"iconFile"},{title:"\u64cd\u4f5c",key:"action",render:function(t,n){return d.a.createElement(c.b,null,d.a.createElement(r.a,{type:"link",onClick:function(){return e.push("/course-detail?id=".concat(n.id))}},"\u4fee\u6539"),d.a.createElement(o.a,{placement:"top",title:"\u662f\u5426\u5220\u9664\uff1f",onConfirm:function(){i.a.courseDelete(n.id).then((function(){return k()}))},okText:"\u662f",cancelText:"\u5426"},d.a.createElement(r.a,{type:"link"},"\u5220\u9664")))}}];return Object(u.useEffect)((function(){k()}),[]),d.a.createElement("div",null,d.a.createElement("div",{style:{marginBottom:16}},d.a.createElement(r.a,{type:"primary",onClick:function(){e.push("/course-detail")}},"\u65b0\u589e")),d.a.createElement(l.a,{columns:p,dataSource:s}))}}}]);