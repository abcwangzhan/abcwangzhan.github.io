(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{451:function(e,a,t){"use strict";var n=t(128),r=t(438),c=t(0),l=t.n(c),s=n.a.Option;a.a=function(){return l.a.createElement(r.a.Item,{name:"lang",label:"\u8bed\u8a00",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8bed\u8a00"}]},l.a.createElement(n.a,{placeholder:"\u8bf7\u9009\u62e9\u8bed\u8a00"},l.a.createElement(s,{value:"cn"},"\u4e2d\u6587"),l.a.createElement(s,{value:"jp"},"\u65e5\u8bed")))}},461:function(e,a,t){"use strict";t.r(a);var n=t(79),r=t(0),c=t.n(r),l=t(184),s=t(185),o=t(239),u=t(438),i=t(238),m=t(441),p=t(56),b=t(433),f=t(451);a.default=function(){var e=Object(b.e)(),a={labelCol:{span:4},wrapperCol:{span:20}};return c.a.createElement(u.a,Object.assign({},a,{name:"nest-messages",onFinish:function(a){console.log(a);var t=Object(s.a)().id,r=null,c={};t?(r=l.a.articleCategoryUpdate,c={id:t}):r=l.a.articleCategoryCreate,r(Object(n.a)(Object(n.a)({},a),c)).then((function(a){o.b.success("\u4fdd\u5b58\u6210\u529f",2,(function(){return e.goBack()}))})).catch((function(e){return o.b.error(e.message)}))}}),c.a.createElement(u.a.Item,{name:"categoryName",label:"\u7c7b\u522b\u540d\u79f0",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7c7b\u522b\u540d\u79f0"}]},c.a.createElement(i.a,{placeholder:"\u8bf7\u8f93\u5165\u7c7b\u522b\u540d\u79f0"})),c.a.createElement(f.a,null),c.a.createElement(u.a.Item,{wrapperCol:Object(n.a)(Object(n.a)({},a.wrapperCol),{},{offset:8})},c.a.createElement(m.b,null,c.a.createElement(p.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"),c.a.createElement(p.a,{onClick:function(){return e.goBack()}},"\u53d6\u6d88"))))}}}]);