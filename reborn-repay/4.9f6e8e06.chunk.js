(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{380:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a,r=n(76),i=n(92),l=n(112),o=n(203),s=n(113),c=n(155),m=n(375),u=n(265),p=n(264),f=n(89),b=n(0),d=n.n(b),h=n(77),x=function(){var e=Object(b.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(b.useContext)(s.a),h=r.dispatch,x=r.state,E=m.a.useForm(),j=Object(l.a)(E,1)[0];Object(b.useEffect)((function(){var e=x.userInfo;j.setFieldsValue(Object(i.a)({},e))}),[j,x.userInfo]);var v=Object(c.a)("info"),y=v.font1,O=v.font2,I=v.font3,w=v.font4,N=v.font5,k=v.font6;return d.a.createElement(g,null,d.a.createElement("div",{className:"title"},y),d.a.createElement(m.a,{name:"normal_form",className:"form",initialValues:{remember:!0},onFinish:function(e){var t=Object(i.a)(Object(i.a)({},e),{},{shopName:e.username});o.a.setUser(t).catch((function(e){return u.b.error(e.message)})).then((function(){return u.b.success("\u4fdd\u5b58\u6210\u529f"),o.a.getUser()})).then((function(e){null===h||void 0===h||h({type:"userInfo",userInfo:e})}))},layout:"vertical",form:j},d.a.createElement(m.a.Item,{name:"username",label:O},d.a.createElement(p.a,{placeholder:O,disabled:n})),d.a.createElement(m.a.Item,{name:"address",label:I},d.a.createElement(p.a,{placeholder:I,disabled:n})),d.a.createElement(m.a.Item,{name:"phone",label:w},d.a.createElement(p.a,{placeholder:w,disabled:n})),d.a.createElement(m.a.Item,null,d.a.createElement("div",{className:"button-line"},d.a.createElement(f.a,{type:"primary",className:"button edit-button",ghost:!0,onClick:function(){return a(!1)}},N),d.a.createElement(f.a,{type:"primary",htmlType:"submit",className:"button save-button"},k)))))},g=h.b.div(a||(a=Object(r.a)(["\n  width: 1190px;\n  height: 904px;\n  .title {\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 48px;\n    letter-spacing: 0.04em;\n    text-align: center;\n    padding-top: 64px;\n  }\n  .form {\n    width: 563px;\n    margin: 47px auto;\n    .ant-input {\n      height: 56px;\n      border-radius: 8px;\n    }\n    .ant-form-item {\n      margin-bottom: 39px;\n    }\n  }\n  .button-line {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: 33px;\n    .button {\n      width: 273px;\n      height: 56px;\n      border-radius: 8px;\n      font-size: 16px;\n      font-family: 500;\n    }\n  }\n"])))}}]);