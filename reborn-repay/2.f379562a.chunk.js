(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{377:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var a,i,r=t(76),l=t(92),c=t(112),o=t(0),s=t.n(o),d=t(366),m=t(77),p=t(373),u=t(154),g=t(89),A=t(372),f=t(109),h=t.n(f),b=t(365),x=t.n(b),v=t(209),y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ2SURBVHgB7Z2/dhNHFMbvjJVzUoo3ULpUsUSVLi5JhfIGE0TOSYdTpgru0pmSAqwtoTMdpemo2H0D9AaIAw2H1Q53kAw+YM8frVd3pf1+jWzN7OzMfHt3597R7BABAADoKoo2gDF/D5Qqp0rZIZ+yz1+dVlXvnyx7OKMWIFm/xgVwjdP6Y75q2EXm3MiRtAjS9dPUMFqXx5c0ztF3Vx0JI12/xgVgxlclKEVDkke0fpsQwEef2k3j9ZMWoPNAAGEggDC1hqHGHPa1fn/PWjogsjyWVgPqBHZurSq0VqeLxd6zOkPVtQT46ri4jgcsSFZVPxytI8QeJTKZ/HVPqcUTvtp/JrBCDZWqzGh080Oev3qZcmSSAHfu3P2PP/7nE/5I4Ftcn9xiEYhFeBF7ULQA7sqnz50PAhywCG9jLSHqGeCJl4DLiY4jRQ1Dlfp4H52fRHQcKWgBy6u/fE0gmaoqb2RZNvfl6VEA7vxxKI+1dsbj4j+JyuLbE/KD2/qOPTl5tJE5iatYp37GTMY8BD8O+T1a9w75474vT1AAdrJuK+VLd52/GIWU3iWy7PGpMeaMxzC5TwTuu98CRYWfAeGQrDrsUuef49q8tPqriYkMxDyEvQ/f6fTRM+osZeFPtwMKsIlgXNutY+36XYflNy4A3wcLT5q49UjXbwMClO4+Of/+exdRLA9JGOn6NS4Am+mMx8Mj/vPU/b9sGJ2tRk4zEka6fsFh6HWwasgf1FIk64cZMWEggDAQQBgIIAwEEAYCCAMBhKntB4Ti6cAPLEAYCCAMBBAGAggDAYSBAMJAAGFq+wHSv+uRpq4fBAsQBgIIAwGEgQDCQABhIIAwEECYjfwu6Lrfx9P28lJo3ALO15ct1xR/WeY01rrMXRol0vbyUtm69wW1vbzk81PzXPf7eNpeXhLS6wPWWXnZ9vKS2Lr1AW0vL5WtWx/Q9vJS2br1AW0vL5VgLL/t63ylqds/8ISFgQDCQABhIIAwEEAYCCAMBBAG8wGE+YCdKi8VzAdgPmDnyksC8wGYD9it8lLBfADmA3arvFQwH1ATzAdsORBAGAggTG0BjDGNj5V3mQgB7Myf3mvcW2wrk8lkHMgyD6SHBbBWzbwFaDvtohW4HaR4uHrsy+Nz8s6JeXl3YD8UxdHEvdy90p06gOt4Y+4eaP3O7Sgy8OXlvgt60hEbOJi+1r03BJJhB++nkDMXtIDla9rpjEAiNovxpKNGQVfFS8DluHBGVS2OYvJGbWNVFMV8f3/4QSl1i0AQ7qd/p9OT5zF5o/cRK4r85Wh00z0zDgj4OOL4T/R+a0k76eX5qzO2hLes8K+03DkOrHC3HXflp3S+I3kvSWcJ+/u/PGVDu8En7KwTdpFV+Pr32NvORWpuZ2sGrOFtFoJ9ADvkz044ZG7nKO66mfOReKj5oIubGAEAAKjPJ5mE46rGUXE8AAAAAElFTkSuQmCC",E=function(){var e=Object(o.useState)(""),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)(""),r=Object(c.a)(i,2),m=r[0],f=r[1],b=Object(o.useState)(""),E=Object(c.a)(b,2),O=E[0],S=E[1],D=Object(o.useState)(""),j=Object(c.a)(D,2),M=j[0],k=j[1],B=Object(o.useState)([]),Y=Object(c.a)(B,2),C=Y[0],G=Y[1],P=function(e,n){return"start"===n?e&&e>h()(m).endOf("day"):"end"===n&&(e&&e<h()(t).endOf("day"))},I=function(e,n){"start"===n&&a(e),"end"===n&&f(e)},W=function(e,n,t){var a=document.getElementById(n);a&&(a.innerHTML=""),new d.a(n,Object(l.a)({data:e,xField:"month",yField:"value",label:{},yAxis:{title:{text:"\u91d1\u989d",position:"center"},tickCount:6},point:{size:5,shape:"diamond",style:{fill:"white",stroke:"#5B8FF9",lineWidth:2}},tooltip:{showMarkers:!1},state:{active:{style:{shadowBlur:4,stroke:"#000",fill:"red"}}},interactions:[{type:"marker-active"}]},t)).render()},F=Object(o.useCallback)((function(e){var n=e.split("-");v.a.bestsellerGraph({year:n[0],month:n[1]}).then((function(e){var n=e.map((function(e){return{month:e[0],value:e[1]}}));W(n,"container")}))}),[]),Q=Object(o.useCallback)((function(e){var n=e.split("-");v.a.zgraph({year:n[0]}).then((function(e){var n=e.y1,t=e.y3,a=e.y2,i=e.zgraph,r=[];n.forEach((function(e,n){r.push({month:e.month,value:e.monthly_total,category:"y1"}),r.push({month:e.month,value:t[n],category:"y3"}),i&&r.push({month:e.month,value:a[n],category:"y2"})})),W(r,"container1",{seriesField:"category"})}))}),[]);Object(o.useEffect)((function(){t&&m&&(!function(e,n){var t=e.split("-").map((function(e){return Number(e).toString()})),a=n.split("-").map((function(e){return Number(e).toString()}));v.a.bestseller({beginYear:t[0],beginMonth:t[1],beginDay:t[2],endYear:a[0],endMonth:a[1],endDay:a[2]}).then((function(e){var n=e.map((function(e,n){return{key:e[0],index:n+1,product:e[1],money:"\uffe5".concat(e[3])}}));G(n)}))}(t,m),F(t),Q(t),V(t,m),z(t,m))}),[t,m,F,Q]);var V=function(e,n){var t=e.split("-").map((function(e){return Number(e).toString()})),a=n.split("-").map((function(e){return Number(e).toString()}));v.a.getCustomer({beginYear:t[0],beginMonth:t[1],beginDay:t[2],endYear:a[0],endMonth:a[1],endDay:a[2]}).then((function(e){return S(e)}))},z=function(e,n){var t=e.split("-").map((function(e){return Number(e).toString()})),a=n.split("-").map((function(e){return Number(e).toString()}));v.a.getCharge({beginYear:t[0],beginMonth:t[1],beginDay:t[2],endYear:a[0],endMonth:a[1],endDay:a[2]}).then((function(e){return k(e)}))};return s.a.createElement(w,null,s.a.createElement("div",{className:"inner"},s.a.createElement("div",{className:"title"},"\u58f2\u4e0a\u5206\u6790"),s.a.createElement("div",{className:"search-line"},s.a.createElement(p.a,{mode:"date",className:"date-picker",placeholder:"\u958b\u59cb\u65e5",suffixIcon:s.a.createElement(N,{src:y}),disabledDate:function(e){return P(e,"start")},onChange:function(e,n){return I(n,"start")}}),s.a.createElement("span",{className:"joint"},"~"),s.a.createElement(p.a,{mode:"date",className:"date-picker",placeholder:"\u7d42\u4e86\u65e5",suffixIcon:s.a.createElement(N,{src:y}),onChange:function(e,n){return I(n,"end")},disabledDate:function(e){return P(e,"end")}}),s.a.createElement(u.a,{defaultValue:"JPY",className:"select-item",disabled:!0,options:[{value:"JPY",label:"JPY\uff08\uffe5\uff09"}]}),s.a.createElement(g.a,{type:"primary",ghost:!0,className:"download",onClick:function(){return function(){var e=t.split("-").map((function(e){return Number(e).toString()})),n=m.split("-").map((function(e){return Number(e).toString()}));v.a.download({beginYear:e[0],beginMonth:e[1],beginDay:e[2],endYear:n[0],endMonth:n[1],endDay:n[2]}).then((function(e){x()(e,"file.csv")}))}()}},"CSV\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),s.a.createElement("div",{className:"show-line"},O&&s.a.createElement("div",{className:"line-item"},"\u6307\u5b9a\u671f\u9593\u306e\u5229\u7528\u9867\u5ba2\u6570: ",O,"\u4eba"),M&&s.a.createElement("div",{className:"line-item"},"\u6307\u5b9a\u671f\u9593\u306e\u5229\u7528\u5e73\u5747\u5358\u4fa1: ",M,"\u5186")),s.a.createElement("div",{className:"analysis-list"},s.a.createElement("div",{className:"analysis-item"},s.a.createElement("div",{className:"title"},"\u58f2\u4e0a\u30b0\u30e9\u30d5"),s.a.createElement("div",{className:"content",id:"container"})),s.a.createElement("div",{className:"analysis-item"},s.a.createElement("div",{className:"title"},"\u58f2\u4e0a\u30e9\u30f3\u30ad\u30f3\u30b0"),s.a.createElement("div",{className:"content"},s.a.createElement(A.a,{columns:[{title:"NO.",dataIndex:"index"},{title:"\u5546\u54c1\u540d",dataIndex:"product"},{title:"\u58f2\u4e0a\u91d1\u989d",dataIndex:"money"}],dataSource:C,bordered:!0,pagination:!1}))),s.a.createElement("div",{className:"analysis-item"},s.a.createElement("div",{className:"title"},"\u5e74\u9593\u63a8\u79fb"),s.a.createElement("div",{className:"content",id:"container1"})))))},w=m.b.div(a||(a=Object(r.a)(["\n  min-width: 1190px;\n  background: rgba(247, 247, 247, 1);\n  padding: 0 25px 91px;\n  .inner {\n    width: 1142px;\n  }\n  .title {\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 48px;\n    letter-spacing: 0.04em;\n    text-align: center;\n    padding-top: 64px;\n  }\n  .search-line {\n    display: flex;\n    align-items: center;\n    margin-top: 24px;\n  }\n  .joint {\n    color: rgba(164, 164, 164, 1);\n    margin: 0 2px;\n  }\n  .date-picker {\n    width: 274px;\n    height: 57px;\n    border-radius: 8px;\n  }\n  .ant-picker-input {\n    flex-direction: row-reverse;\n  }\n  .ant-picker-suffix {\n    margin-left: 0;\n  }\n  .select-item {\n    width: 274px;\n    margin-left: 16px;\n    .ant-select-selector {\n      border-radius: 8px;\n      height: 56px;\n      .ant-select-selection-item {\n        line-height: 56px;\n      }\n    }\n  }\n  .download {\n    width: 176px;\n    height: 56px;\n    border-radius: 8px;\n    margin-left: 118px;\n  }\n  .show-line {\n    display: flex;\n    font-size: 16px;\n    line-height: 28px;\n    letter-spacing: 0.04em;\n    color: rgba(98, 98, 100, 1);\n    margin-top: 22px;\n    .line-item:first-child {\n      margin-right: 120px;\n    }\n  }\n  .analysis-list {\n    margin-top: 48px;\n    .analysis-item {\n      margin-bottom: 32px;\n      .title {\n        font-size: 20px;\n        font-weight: 500;\n        line-height: 30px;\n        letter-spacing: 0.04em;\n        color: rgba(26, 26, 28, 1);\n        text-align: left;\n        margin-bottom: 8px;\n        padding-top: 0;\n      }\n      .content {\n        min-height: 280px;\n        width: 100%;\n        background-color: #ffffff;\n        padding: 20px;\n      }\n    }\n  }\n"]))),N=m.b.img(i||(i=Object(r.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n"])))}}]);