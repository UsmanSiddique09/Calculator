(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{1:function(e,t,r){e.exports={cover:"Main_cover__3lnVy",output:"Main_output__rhYJq",input:"Main_input__Feswx",clear:"Main_clear__3Qa8z",divide:"Main_divide__1qHQd",multiply:"Main_multiply__ttvCQ",add:"Main_add__3aHFU",subtract:"Main_subtract__1G9Qw",equal:"Main_equal__3yZHC",nine:"Main_nine__2mfTd",eight:"Main_eight__20xuX",seven:"Main_seven__DBra4",six:"Main_six__2tCUX",five:"Main_five__1nqHC",four:"Main_four__3Levx",three:"Main_three__U3UrU",two:"Main_two__1axKQ",one:"Main_one__Le8fH",zero:"Main_zero__27TWR"}},19:function(e,t,r){},20:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(2),i=r.n(c),a=r(10),o=r.n(a),u=(r(19),r(3)),l=r(4),d=r(7),s=r(6),p=(r.p,r(20),r(5)),b=r(1),_=r.n(b),j=r(11),x=r(13);function k(e){document.getElementById("input").innerHTML=e}function h(e){document.getElementById("output").innerHTML=e}function v(e,t,r){var n=parseInt(t),c=parseInt(r);switch(console.log("intValueOne",n),console.log("intValueTwo",c),e){case"+":return n+c;case"-":return c-n;case"*":return n*c;case"/":return c/n;default:return null}}var f=function(e,t){var r;switch(t.type){case"ADD":return k(t.operator),h(e.previousValue+t.operator),r=1!==t.index?v(e.operator,e.currentValue,e.result):v(t.operator,e.currentValue,0),console.log(t.index),{previousValue:e.previousValue+t.operator,currentValue:"",operator:t.operator,result:r,index:t.index};case"SUBTRACT":return k(t.operator),h(e.previousValue+t.operator),r=1!==t.index?v(e.operator,e.currentValue,e.result):v(t.operator,0,e.currentValue),{previousValue:e.previousValue+t.operator,currentValue:"",result:r,operator:t.operator,index:t.index};case"MULTIPLY":return k("*"),r=1!==t.index?v(e.operator,e.currentValue,e.result):v(t.operator,1,e.currentValue),{previousValue:e.previousValue+t.operator,currentValue:"",result:r,operator:t.operator,index:t.index};case"DIVIDE":return k("/"),r=1!==t.index?v(e.operator,e.currentValue,e.result):v(t.operator,1,e.currentValue),{previousValue:e.previousValue+t.operator,currentValue:"",result:r,operator:t.operator,index:t.index};case"EQUAL":return k(e.result),{operator:"=",result:r=1!==t.index?v(e.operator,e.currentValue,e.result):v(t.operator,0,e.currentValue)};case"CLEAR":return document.getElementById("input").innerHTML=" ",document.getElementById("output").innerHTML=" ",Object(x.a)({},e);case"DIGITS":return console.log("store.result",e.result),k(e.previousValue+t.prev),h(e.previousValue+t.prev),{currentValue:e.currentValue+t.cur,previousValue:e.previousValue+t.prev,operator:e.operator,operatorClicked:t.operatorClicked,result:""===e.operator?e.currentValue+t.cur:e.result,index:t.index};default:return e}},O=Object(j.a)(f,{previousValue:"",currentValue:"",operator:"",result:0,index:0},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log("storeInitial",O.getState());var V=O,C=function(e){Object(d.a)(r,e);var t=Object(s.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).clickHandler=n.clickHandler.bind(Object(p.a)(n)),n}return Object(l.a)(r,[{key:"clickHandler",value:function(e){switch(e){case"+":return console.log(V.getState()),V.dispatch({type:"ADD",cur:"",operator:e,index:V.getState().index+1});case"-":V.dispatch({type:"SUBTRACT",operator:e,cur:"",index:V.getState().index+1});break;case"*":V.dispatch({type:"MULTIPLY",operator:e,cur:"",index:V.getState().index+1});break;case"/":V.dispatch({type:"DIVIDE",operator:e,cur:"",index:V.getState().index+1});break;case"=":V.dispatch({type:"EQUAL",cur:"",operator:e});break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":V.dispatch({type:"DIGITS",prev:e,cur:e,operatorClicked:!1,index:V.getState().index});break;default:return null}"="===V.getState().operator&&(document.getElementById("input").innerHTML=V.getState().result)}},{key:"clearScreen",value:function(){return V.dispatch({type:"CLEAR"})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:_.a.cover,children:[Object(n.jsx)("div",{style:{backgroundColor:"black",color:"white",gridArea:"output"},children:Object(n.jsx)("p",{id:"output",style:{direction:"rtl"}})}),Object(n.jsx)("div",{style:{backgroundColor:"black",color:"white",gridArea:"input"},children:Object(n.jsx)("p",{id:"input",style:{direction:"rtl"}})}),Object(n.jsx)("button",{id:_.a.clear,onClick:this.clearScreen,children:"AC"}),Object(n.jsx)("button",{id:_.a.zero,onClick:function(){return e.clickHandler("0")},children:"0"}),Object(n.jsx)("button",{id:_.a.one,onClick:function(){return e.clickHandler("1")},children:"1"}),Object(n.jsx)("button",{id:_.a.two,onClick:function(){return e.clickHandler("2")},children:"2"}),Object(n.jsx)("button",{id:_.a.three,onClick:function(){return e.clickHandler("3")},children:"3"}),Object(n.jsx)("button",{id:_.a.four,onClick:function(){return e.clickHandler("4")},children:"4"}),Object(n.jsx)("button",{id:_.a.five,onClick:function(){return e.clickHandler("5")},children:"5"}),Object(n.jsx)("button",{id:_.a.six,onClick:function(){return e.clickHandler("6")},children:"6"}),Object(n.jsx)("button",{id:_.a.seven,onClick:function(){return e.clickHandler("7")},children:"7"}),Object(n.jsx)("button",{id:_.a.eight,onClick:function(){return e.clickHandler("8")},children:"8"}),Object(n.jsx)("button",{id:_.a.nine,onClick:function(){return e.clickHandler("9")},children:"9"}),Object(n.jsx)("button",{id:_.a.decimal,onClick:function(){return e.clickHandler(".")},children:"."}),Object(n.jsx)("button",{id:_.a.equal,onClick:function(){return e.clickHandler("=")},children:"="}),Object(n.jsx)("button",{id:_.a.add,onClick:function(){return e.clickHandler("+")},children:"+"}),Object(n.jsx)("button",{id:_.a.subtract,onClick:function(){return e.clickHandler("-")},children:"-"}),Object(n.jsx)("button",{id:_.a.multiply,onClick:function(){return e.clickHandler("*")},children:"*"}),Object(n.jsx)("button",{id:_.a.divide,onClick:function(){return e.clickHandler("/")},children:"/"})]})}}]),r}(c.Component),g=function(e){Object(d.a)(r,e);var t=Object(s.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(n.jsx)(C,{})}}]),r}(c.Component),H=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),i(e),a(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),H()}},[[23,1,2]]]);
//# sourceMappingURL=main.8ab541b4.chunk.js.map