(this["webpackJsonpcats-arena"]=this["webpackJsonpcats-arena"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),s=n.n(r),l=(n(12),n(3)),o=n(4),u=n(5),i=n(6),h=(n(13),function(e){var t=e.placeholder,n=e.handleChange;return c.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),d=(n(14),n(15),n(16),function(e){return c.a.createElement("div",{className:"card-list"},e.cats.map((function(e){})))}),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={searchField:"",cats:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({cats:t})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Container"},c.a.createElement("h1",null,"Cats Arena"),c.a.createElement(h,{placeholder:"Search cats...",handleChange:this.handleChange})),c.a.createElement(d,{cats:this.state.cats}))}}]),n}(a.Component);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.a2f2155f.chunk.js.map