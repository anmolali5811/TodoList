(this["webpackJsonpreact-lap"]=this["webpackJsonpreact-lap"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),i=(a(13),a(7)),u=a(4),o=a(2),m=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("localitems");return e?JSON.parse(e):[]}()),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),m=Object(o.a)(r,2),s=m[0],d=m[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),E=b[0],p=b[1],g=Object(n.useState)(null),O=Object(o.a)(g,2),v=O[0],j=O[1];Object(n.useEffect)((function(){localStorage.setItem("localitems",JSON.stringify(a))}),[a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"heading"},"Todo List"),c.a.createElement("div",{className:"main"},c.a.createElement("input",{type:"text",value:s,onChange:function(e){return d(e.target.value)},placeholder:"Enter data"}),c.a.createElement("button",{onClick:function(){s?s&&E?(l(a.map((function(e){return e.id===v?Object(u.a)(Object(u.a)({},e),{},{data:s}):e}))),p(!1),d(""),j(null)):(l([].concat(Object(i.a)(a),[{id:(new Date).getTime().toString(),data:s}])),d("")):alert("Enter data to add")}},E?"Update":"Add"),a.length>0?c.a.createElement("button",{onClick:function(e){l([])}},"Delete All "):""),c.a.createElement("div",{className:"items"},c.a.createElement("h1",null,a.length>0?"Number of lists is ".concat(a.length):"No data available"),a.map((function(e){return c.a.createElement("div",{className:"item",key:e.id},c.a.createElement("p",null,e.data),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{onClick:function(){return function(e){var t=a.find((function(t){return t.id===e}));p(!0),d(t.data),j(e)}(e.id)}},"U"),c.a.createElement("button",{onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));l(t)}(e.id)}},"D")))}))))};var s=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null))};r.a.render(c.a.createElement(s,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a9cfdf8f.chunk.js.map