(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(5),r=a.n(i),c=a(13),s=a(14),o=a(16),u=a(15),m=a(17),h=(a(103),a(59)),d=a(32),k=a(10),E=a(60),p=a.n(E),v=a(93),b=a.n(v),f=a(33),j=a.n(f),w=0,g=1,O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={drinks:[],clicked:!1,transition:!1,newTitle:"",newUrl:""},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://194.76.224.25:3004/drinks").then(function(t){e.setState({drinks:t.data})}).catch(function(e){console.log(e)})}},{key:"handleClick",value:function(){if(this.setState({clicked:!0}),void 0===this.state.drinks||0===this.state.drinks.length);else{w=Math.floor(Math.random()*this.state.drinks.length);var e=Math.random();e<.7?g="1x":e>.7&&e<.9?g="2x":e>.9&&(g="3x")}}},{key:"render",value:function(){return this.state.clicked?l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},"Drinkkiruletti"),l.a.createElement(p.a,{in:!0,timeout:250},l.a.createElement(k.Card,{shadow:6,className:"perus",style:{minWidth:"300px",margin:"auto",opacity:.92,borderRadius:"20px"},onClick:this.handleClick},l.a.createElement(k.CardText,null,l.a.createElement("div",null,void 0===this.state.drinks||0===this.state.drinks.length?l.a.createElement("div",null,"Loading..."):l.a.createElement("div",{style:{color:"black"}},l.a.createElement("h3",{style:{fontSize:"40px"}},g),l.a.createElement("img",{src:this.state.drinks[w].url,alt:this.state.drinks[w].title,className:"juoma-img"}),l.a.createElement("h3",null,this.state.drinks[w].title))))))):(setTimeout(function(){this.setState({transition:!0})}.bind(this),700),l.a.createElement("div",null,l.a.createElement(p.a,{in:!0,timeout:800},l.a.createElement("h1",{className:"title"},"Drinkkiruletti")),l.a.createElement(b.a,{in:this.state.transition,timeout:500},l.a.createElement("h4",{className:"smaller_title"},"Paina ruutua aloittaaksesi!")),l.a.createElement("div",{style:{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"},onClick:this.handleClick})))}}]),t}(l.a.Component),C=a(94),y=a.n(C),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={drinks:[],newTitle:"",newUrl:""},a.handleTitleChange=function(e){a.setState({newTitle:e.target.value})},a.handleURLChange=function(e){a.setState({newUrl:e.target.value})},a.addDrink=function(e){e.preventDefault(),console.log(a.state.newUrl);var t=a.state.newUrl.includes("http");if(0===a.state.newTitle.length)return alert("Tietoa puuttuu!");if(!t)return a.setState({newUrl:""}),alert("Anna kelvollinen URL!");var n={id:a.state.drinks.length+1,title:a.state.newTitle,url:a.state.newUrl};j.a.post("http://194.76.224.25:3004/drinks",n).then(function(e){a.setState({drinks:a.state.drinks.concat(e.data),newTitle:"",newUrl:""})})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("http://194.76.224.25:3004/drinks").then(function(t){e.setState({drinks:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"perus"},l.a.createElement("h3",{className:"smaller_title"},"Lis\xe4\xe4 juomia t\xe4st\xe4"),l.a.createElement("form",{onSubmit:this.addDrink},l.a.createElement("div",null,l.a.createElement("input",{value:this.state.newTitle,onChange:this.handleTitleChange,placeholder:"Juoman nimi"})),l.a.createElement("div",null,l.a.createElement("input",{value:this.state.newUrl,onChange:this.handleURLChange,placeholder:"Kuva juomasta (URL)"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y.a,{type:"submit",variant:"contained"},"Lis\xe4\xe4"))),l.a.createElement("div",null,l.a.createElement("h4",null,"T\xe4ll\xe4 hetkell\xe4 ",this.state.drinks.length," juomaa tietokannassamme!")))}}]),t}(l.a.Component),x=a(96),U=a.n(x),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"who"},l.a.createElement("h2",{className:"smaller_title"},"Ket\xe4 t\xe4n teki?"),l.a.createElement(U.a,{in:!0},l.a.createElement(k.Card,{shadow:6,style:{minWidth:"300px",margin:"auto"}},l.a.createElement(k.CardText,null,l.a.createElement("h3",null,"Karl Lepmets"),l.a.createElement("h3",null,"Wiljam Peltomaa"),l.a.createElement("h4",null,"Teekkarikeksint\xf6 2019")))))}}]),t}(l.a.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null)}}]),t}(l.a.Component),D=function(){return l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:S}),l.a.createElement(h.a,{exact:!0,path:"/drinkkiruletti",component:O}),l.a.createElement(h.a,{exact:!0,path:"/drinkkiruletti/juomat",component:T}),l.a.createElement(h.a,{exact:!0,path:"/drinkkiruletti/who",component:N}))},L=a(25),M=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(k.Layout,null,l.a.createElement(k.Drawer,{title:""},l.a.createElement(k.Navigation,null,l.a.createElement(L.b,{to:"/drinkkiruletti"},"Drinkkiruletti"),l.a.createElement(L.b,{to:"/drinkkiruletti/juomat"},"Juomat"),l.a.createElement(L.b,{to:"/drinkkiruletti/who"},"Ket\xe4 t\xe4n teki"))),l.a.createElement(k.Content,null,l.a.createElement(D,null)))}}]),t}(l.a.Component);a(259),a(261);r.a.render(l.a.createElement(L.a,null,l.a.createElement(M,null)),document.getElementById("root"))},98:function(e,t,a){e.exports=a(262)}},[[98,2,1]]]);
//# sourceMappingURL=main.106bf4c9.chunk.js.map