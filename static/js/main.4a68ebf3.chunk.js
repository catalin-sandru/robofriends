(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n.n(c),s=n(3),i=n.n(s),a=n(4),h=n(11),d=n(12),b=n(2),l=(n(27),function(e){var t=e.name,n=e.id,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(n,"?200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:c})]})]})}),u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(l,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}));return Object(r.jsx)("div",{children:n})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{onChange:t,type:"search",placeholder:"search robots",className:"pa2 ba b--green bg-lightest-blue"})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=(n(28),n(13)),g=n(14),p=n(16),v=n(15),x=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(O.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"An error was encountered."}):this.props.children}}]),n}(c.Component),m="CHANGE_SEARCH_FIELD",C="FETCH_ROBOTS_PENDING",y="FETCH_ROBOTS_SUCCESS",F="FETCH_ROBOTS_FAILED",E=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.fetchRobots.robots,isPending:e.fetchRobots.isPending,error:e.fetchRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onFetchRobots:function(){return e((function(e){e({type:C}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:y,payload:t})})).catch((function(t){return e({tyoe:F,payload:t})}))}))}}}))((function(e){var t=e.searchField,n=e.onSearchChange,o=e.onFetchRobots,s=e.robots,i=e.isPending;Object(c.useEffect)((function(){o()}),[]);var a=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return i?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:n}),Object(r.jsx)(f,{children:Object(r.jsx)(x,{children:Object(r.jsx)(u,{robots:a})})})]})})),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))},S=(n(29),{searchField:""}),w={isPending:!1,robots:[],error:""},P=Object(h.createLogger)(),L=Object(b.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{searchField:t.payload});default:return e}},fetchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{robots:t.payload,isPending:!1});case F:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(b.d)(L,Object(b.a)(d.a,P));i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(a.a,{store:N,children:Object(r.jsx)(E,{})})}),document.getElementById("root")),R()}},[[30,1,2]]]);
//# sourceMappingURL=main.4a68ebf3.chunk.js.map