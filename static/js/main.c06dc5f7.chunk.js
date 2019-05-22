(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{54:function(e,t,n){e.exports=n(86)},59:function(e,t,n){},64:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),s=(n(59),n(19)),u=n(20),l=n(24),i=n(21),p=n(23),d=n(31),h=n(11),m="App/FETCH_DATA",f="App/FETCH_SUCCESS";n(64);var v=n(87),b=n(25),j=n.n(b),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).renderHeader=function(){return j.a.map(j.a.keys(n.props.jsonData[0]),function(e,t){return r.a.createElement("th",{key:t},e)})},n.renderTableData=function(){return j.a.map(n.props.jsonData,function(e,t){var n=j.a.values(e);return r.a.createElement("tr",{key:t},j.a.map(n,function(e,t){return r.a.createElement("td",{key:t},e)}))})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,this.renderHeader())),r.a.createElement("tbody",null,this.renderTableData())))}}]),t}(a.PureComponent),w=n(88),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).menuChange=function(e){n.props.menuChange(e)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{className:"labelClass"},"Current Source:"),r.a.createElement("input",{type:"text",value:this.props.source,className:"inputField",disabled:!0})),r.a.createElement(w.a,null,r.a.createElement(w.a.Toggle,{variant:"success",id:"dropdown-basic",className:"dropdownClass"},"Select Source"),r.a.createElement(w.a.Menu,null,r.a.createElement(w.a.Item,{onSelect:function(t){return e.menuChange("posts")}},"Posts"),r.a.createElement(w.a.Item,{onClick:function(t){return e.menuChange("comments")}},"Comments"),r.a.createElement(w.a.Item,{onClick:function(t){return e.menuChange("todos")}},"Todos"))))}}]),t}(a.PureComponent),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).menuChange=function(e){var t="";switch(e){case"posts":t="https://jsonplaceholder.typicode.com/posts";break;case"todos":t="https://jsonplaceholder.typicode.com/todos";break;case"comments":t="https://jsonplaceholder.typicode.com/comments";break;default:t="https://jsonplaceholder.typicode.com/posts"}n.props.fetchData(t)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchData("https://jsonplaceholder.typicode.com/posts")}},{key:"render",value:function(){var e=this.props.jsonData,t=this.props.source;return r.a.createElement("div",null,r.a.createElement(E,{source:t,menuChange:this.menuChange}),r.a.createElement(y,{jsonData:e}))}}]),t}(r.a.PureComponent);var k=Object(d.b)(function(e){return{jsonData:e.AppReducer.tableData,source:e.AppReducer.source}},function(e){return{dispatch:e,fetchData:function(t){return e(function(e){return{type:m,link:e}}(t))}}}),g=Object(h.d)(k)(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(83);var C=n(51),D=n(52),x={source:"https://jsonplaceholder.typicode.com/posts",tableData:[]};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(D.a)({},e,{tableData:t.data,source:t.url});default:return e}},S=Object(h.c)({AppReducer:A}),T=n(14),R=n.n(T),H=n(18);n(85);function I(e){return 204===e.status||205===e.status?null:e.json()}function P(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);return e.json().then(function(e){throw t.response=e,t})}function F(e,t){return fetch(e,t).then(P).then(I)}var N=R.a.mark(W),U=R.a.mark(q);function W(e){var t,n,a,r;return R.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.requestURL,n=e.method,a=e.body,c.prev=1,c.next=4,Object(H.a)(F,t,{method:n,body:a});case 4:return r=c.sent,c.abrupt("return",r);case 8:throw c.prev=8,c.t0=c.catch(1),c.t0;case 11:case"end":return c.stop()}},N,null,[[1,8]])}function q(e){var t;return R.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(H.a)(W,{requestURL:e,method:"GET"});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}},U)}var B=R.a.mark(L),J=R.a.mark(M);function L(e){var t,n;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.link,a.prev=1,a.next=4,Object(H.a)(q,t);case 4:return n=a.sent,a.next=7,Object(H.b)({type:f,data:n,url:t});case 7:a.next=11;break;case 9:a.prev=9,a.t0=a.catch(1);case 11:return a.prev=11,a.finish(11);case 13:case"end":return a.stop()}},B,null,[[1,9,11,13]])}function M(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.c)(m,L);case 2:case"end":return e.stop()}},J)}var _=Object(C.a)(),G=[_],$=[h.a.apply(void 0,G)],z=h.d,K=Object(h.e)(S,z.apply(void 0,$));_.run(M),K.runSaga=_.run,K.injectedReducers={},K.injectedSagas={};var Q=K,V=function(){return o.a.render(r.a.createElement(d.a,{store:Q},r.a.createElement(g,null)),document.getElementById("root"))};V(),Q.subscribe(V),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[54,1,2]]]);
//# sourceMappingURL=main.c06dc5f7.chunk.js.map