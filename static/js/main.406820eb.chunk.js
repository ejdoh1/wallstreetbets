(this.webpackJsonpwallstreetbets=this.webpackJsonpwallstreetbets||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(1),r=n.n(c),i=n(43),s=n.n(i),o=(n(135),n(81)),l=n(32),u=(n(136),n(17)),j=n(30),b=n(127),d=n.n(b),h=(n(185),n(128));var O=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),s=Object(l.a)(i,2),b=s[0],O=s[1],g=Object(c.useState)(null),p=Object(l.a)(g,2),f=p[0],m=p[1],v=Object(c.useState)(null),x=Object(l.a)(v,2),y=x[0],C=x[1],S=Object(c.useState)(null),w=Object(l.a)(S,2),k=w[0],I=w[1],F=Object(c.useState)(),B=Object(l.a)(F,2),R=B[0],T=B[1],L=Object(c.useState)(),A=Object(l.a)(L,2),P=A[0],z=A[1],D=Object(c.useState)(),H=Object(l.a)(D,2),J=H[0],E=H[1];return Object(h.a)((function(){fetch("https://wallstreetbets.s3-ap-southeast-2.amazonaws.com/wsb.json").then((function(e){return e.json()})).then((function(e){var t=e.data,n=0,a=[];a.push("time");var c,i=Object(o.a)(t);try{for(i.s();!(c=i.n()).done;){var s=c.value;for(var l in s)"ts_end"!==l&&"timestamp"!==l&&(parseInt(s[l])<=20||(parseInt(s[l])>n&&(n=parseInt(s[l])),a.includes(l)||a.push(l)))}}catch(w){i.e(w)}finally{i.f()}I(n);var b,d=[],h=Object(o.a)(t);try{for(h.s();!(b=h.n()).done;){var g=b.value,p=[];p.push(1e3*parseInt(g.timestamp));var f,v=Object(o.a)(a);try{for(v.s();!(f=v.n()).done;){var x=f.value;if("time"!==x){var y=g[x];void 0===y&&(y=0),p.push(parseInt(y))}}}catch(w){v.e(w)}finally{v.f()}d.push(p)}}catch(w){h.e(w)}finally{h.f()}d=d.sort((function(e,t){return e[0]-t[0]}));var S=new u.TimeSeries({name:"tickers",columns:a,points:d});E(S.range()),r(S),O(a),m(Object(j.styler)(a,"Paired")),C(a.slice(1).map((function(e){return{key:e,label:e}})))}))}),3e5,!0),Object(a.jsxs)("div",{style:{padding:50,textAlign:"center"},children:[Object(a.jsx)("h1",{children:"r/wallstreetbets comments stock ticker mention counts"}),null===n?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(j.Resizable,{children:Object(a.jsx)(j.ChartContainer,{timeRange:J,style:{background:"#201d1e",borderRadius:8,borderStyle:"solid",borderWidth:1,borderColor:"#232122"},padding:20,paddingTop:5,paddingBottom:0,onBackgroundClick:function(){return T(null)},enableDragZoom:!0,onTimeRangeChanged:function(e){E(e)},children:Object(a.jsxs)(j.ChartRow,{height:"500",children:[Object(a.jsx)(j.YAxis,{id:"axis1",type:"linear",min:0,max:k,width:"60"}),Object(a.jsx)(j.Charts,{children:Object(a.jsx)(j.LineChart,{axis:"axis1",interpolation:"curveBasis",series:n,columns:b,style:f,highlight:P,onHighlightChange:function(e){return z(e)},selection:R,onSelectionChange:function(e){return T(e)}})})]})})}),null===y?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(j.Legend,{categories:y,style:f,type:"dot",highlight:P,onHighlightChange:function(e){return z(e)},selection:R,onSelectionChange:function(e){return T(e)}}),Object(a.jsx)("div",{children:"Auto update interval 10min"}),Object(a.jsx)(d.a,{email:!0,projectId:"60162ca5d28c6c00043d7747"})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,188)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),g()}},[[186,1,2]]]);
//# sourceMappingURL=main.406820eb.chunk.js.map