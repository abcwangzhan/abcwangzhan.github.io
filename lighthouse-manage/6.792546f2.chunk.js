(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{450:function(e,a,t){"use strict";var n=t(128),r=t(437),l=t(0),c=t.n(l),i=n.a.Option;a.a=function(){return c.a.createElement(r.a.Item,{name:"lang",label:"\u8bed\u8a00",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8bed\u8a00"}]},c.a.createElement(n.a,{placeholder:"\u8bf7\u9009\u62e9\u8bed\u8a00"},c.a.createElement(i,{value:"cn"},"\u4e2d\u6587"),c.a.createElement(i,{value:"jp"},"\u65e5\u8bed")))}},451:function(e,a,t){"use strict";a.a=function(e,a){var t=new FormData;return t.append("body",new Blob([JSON.stringify(e)],{type:"application/json"})),t.append("file",a||""),t}},452:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n,r,l,c,i=t(80),o=t(94),u=t(239),s=t(0),m=t.n(s),d=t(81),p=function(e){var a=e.afterFileChange,t=(e.imgUrl,Object(s.useState)("")),n=Object(o.a)(t,2),r=n[0],l=n[1];return m.a.createElement(f,null,r?m.a.createElement(h,{src:r}):m.a.createElement(b,null,"+"),m.a.createElement(E,{type:"file",accept:"image/*",onChange:function(e){var t,n=e.target.files;(null===n||void 0===n?void 0:n[0])&&(t=null===n||void 0===n?void 0:n[0],new Promise((function(e,a){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return a(e)}}))).then((function(e){a(null===n||void 0===n?void 0:n[0]),l(e)})).catch((function(e){return u.b.error(e)}))},name:"upload"}))},f=d.b.div(n||(n=Object(i.a)(["\n  width: 150px;\n  height: 150px;\n  border: 1px dashed #d9d9d9;\n  position: relative;\n"]))),b=d.b.div(r||(r=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: #fafafa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n"]))),h=d.b.img(l||(l=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]))),E=d.b.input(c||(c=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  cursor: pointer;\n"])))},461:function(e,a,t){"use strict";t.r(a);var n=t(79),r=t(94),l=t(0),c=t.n(l),i=t(184),o=t(185),u=t(239),s=t(437),m=t(238),d=t(128),p=t(440),f=t(56),b=t(432),h=t(450),E=t(452),g=t(451);a.default=function(){var e=Object(l.useState)(null),a=Object(r.a)(e,2),t=a[0],v=a[1],j=Object(b.e)(),O={labelCol:{span:4},wrapperCol:{span:20}};return c.a.createElement(s.a,Object.assign({},O,{name:"nest-messages",onFinish:function(e){var a=Object(o.a)().id;(a?i.a.studentCaseUpdate(Object(g.a)(Object(n.a)(Object(n.a)({},e),{},{id:a}),t),a):i.a.studentCaseCreate(Object(g.a)(e,t))).then((function(e){u.b.success("\u4fdd\u5b58\u6210\u529f",2,(function(){return j.goBack()}))})).catch((function(e){return u.b.error(e.message)}))}}),c.a.createElement(s.a.Item,{name:"name",label:"\u59d3\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u59d3\u540d"}]},c.a.createElement(m.a,{placeholder:"\u8bf7\u8f93\u5165\u59d3\u540d"})),c.a.createElement(s.a.Item,{name:"offer",label:"\u5185\u5b9a\u4fe1\u606f",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5185\u5b9a\u4fe1\u606f"}]},c.a.createElement(m.a,{placeholder:"\u8bf7\u8f93\u5165\u5185\u5b9a\u4fe1\u606f"})),c.a.createElement(s.a.Item,{name:"certificate",label:"\u8003\u53d6\u8d44\u683c",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8003\u53d6\u8d44\u683c"}]},c.a.createElement(m.a,{placeholder:"\u8bf7\u8f93\u5165\u8003\u53d6\u8d44\u683c"})),c.a.createElement(s.a.Item,{name:"affiliation",label:"\u6240\u5c5e(\u5b66\u6821/\u516c\u53f8)",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6240\u5c5e"}]},c.a.createElement(m.a,{placeholder:"\u8bf7\u8f93\u5165\u6240\u5c5e"})),c.a.createElement(s.a.Item,{name:"isJobHunter",label:"\u662f\u5426\u4fdd\u5c31\u804c",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u662f\u5426\u4fdd\u5c31\u804c"}]},c.a.createElement(d.a,{placeholder:"\u8bf7\u9009\u62e9\u662f\u5426\u4fdd\u5c31\u804c"},c.a.createElement(d.a.Option,{value:1},"\u662f"),c.a.createElement(d.a.Option,{value:0},"\u5426"))),c.a.createElement(s.a.Item,{name:"course",label:"\u53c2\u4e0e\u8bfe\u7a0b",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53c2\u4e0e\u8bfe\u7a0b"}]},c.a.createElement(m.a,{placeholder:"\u8bf7\u8f93\u5165\u53c2\u4e0e\u8bfe\u7a0b"})),c.a.createElement(h.a,null),c.a.createElement(s.a.Item,{name:"upload",label:"\u4e0a\u4f20\u56fe\u7247",rules:[function(e){e.getFieldValue;return{validator:function(e,a){return t?Promise.resolve():Promise.reject(new Error("\u8bf7\u4e0a\u4f20\u56fe\u7247"))}}}]},c.a.createElement(E.a,{afterFileChange:function(e){v(e)},imgUrl:""})),c.a.createElement(s.a.Item,{wrapperCol:Object(n.a)(Object(n.a)({},O.wrapperCol),{},{offset:8})},c.a.createElement(p.b,null,c.a.createElement(f.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),c.a.createElement(f.a,{onClick:function(){return j.goBack()}},"\u53d6\u6d88"))))}}}]);