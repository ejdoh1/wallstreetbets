(this.webpackJsonpwallstreetbets=this.webpackJsonpwallstreetbets||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(1),s=n.n(c),r=n(43),i=n.n(r),o=(n(136),n(81)),l=n(26),u=(n(137),n(17)),j=n(31),b=n(127),d=n.n(b),h=(n(186),n(128)),O=n(129),g=n.n(O);var p=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),i=Object(l.a)(r,2),b=i[0],O=i[1],p=Object(c.useState)(null),f=Object(l.a)(p,2),m=f[0],x=f[1],v=Object(c.useState)(null),y=Object(l.a)(v,2),C=y[0],S=y[1],w=Object(c.useState)(null),k=Object(l.a)(w,2),I=k[0],F=k[1],B=Object(c.useState)(),R=Object(l.a)(B,2),T=R[0],A=R[1],L=Object(c.useState)(),P=Object(l.a)(L,2),z=P[0],D=P[1],H=Object(c.useState)(),J=Object(l.a)(H,2),E=J[0],M=J[1],W=Object(c.useState)(),Y=Object(l.a)(W,2),Z=Y[0],_=Y[1];return Object(h.a)((function(){fetch("https://wallstreetbets.s3-ap-southeast-2.amazonaws.com/wsb.json").then((function(e){return e.json()})).then((function(e){_(e.updatedAt);var t=e.data,n=0,a=[];a.push("time");var c,r=Object(o.a)(t);try{for(r.s();!(c=r.n()).done;){var i=c.value;for(var l in i)"ts_end"!==l&&"timestamp"!==l&&(parseInt(i[l])<=20||(parseInt(i[l])>n&&(n=parseInt(i[l])),a.includes(l)||a.push(l)))}}catch(w){r.e(w)}finally{r.f()}F(n);var b,d=[],h=Object(o.a)(t);try{for(h.s();!(b=h.n()).done;){var g=b.value,p=[];p.push(1e3*parseInt(g.timestamp));var f,m=Object(o.a)(a);try{for(m.s();!(f=m.n()).done;){var v=f.value;if("time"!==v){var y=g[v];void 0===y&&(y=0),p.push(parseInt(y))}}}catch(w){m.e(w)}finally{m.f()}d.push(p)}}catch(w){h.e(w)}finally{h.f()}d=d.sort((function(e,t){return e[0]-t[0]}));var C=new u.TimeSeries({name:"tickers",columns:a,points:d});M(C.range()),s(C),O(a),x(Object(j.styler)(a,"Paired")),S(a.slice(1).map((function(e){return{key:e,label:e}})))}))}),3e5,!0),Object(a.jsxs)("div",{style:{padding:50,textAlign:"center"},children:[Object(a.jsx)("h1",{children:"r/wallstreetbets comments stock ticker mention counts"}),null===n?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(j.Resizable,{children:Object(a.jsx)(j.ChartContainer,{timeRange:E,style:{background:"#201d1e",borderRadius:8,borderStyle:"solid",borderWidth:1,borderColor:"#232122"},padding:20,paddingTop:5,paddingBottom:0,onBackgroundClick:function(){return A(null)},enableDragZoom:!0,onTimeRangeChanged:function(e){M(e)},children:Object(a.jsxs)(j.ChartRow,{height:"500",children:[Object(a.jsx)(j.YAxis,{id:"axis1",type:"linear",min:0,max:I,width:"60"}),Object(a.jsx)(j.Charts,{children:Object(a.jsx)(j.LineChart,{axis:"axis1",interpolation:"curveBasis",series:n,columns:b,style:m,highlight:z,onHighlightChange:function(e){return D(e)},selection:T,onSelectionChange:function(e){return A(e)}})})]})})}),null===C?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(j.Legend,{categories:C,style:m,type:"dot",highlight:z,onHighlightChange:function(e){return D(e)},selection:T,onSelectionChange:function(e){return A(e)}}),Object(a.jsxs)("div",{children:["Auto update interval 10 min, last updated ",Object(a.jsx)(a.Fragment,{children:" "}),Object(a.jsx)(g.a,{date:1e3*Z})]}),Object(a.jsx)(d.a,{email:!0,projectId:"60162ca5d28c6c00043d7747"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),f()}},[[189,1,2]]]);
//# sourceMappingURL=main.27688f5c.chunk.js.map