(this["webpackJsonpcameronhadfield.github.io"]=this["webpackJsonpcameronhadfield.github.io"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={TimelineElem:"Timeline_TimelineElem__3znkd",TimelineElemDate:"Timeline_TimelineElemDate__29ZVk",TimelineImage:"Timeline_TimelineImage__lgxDf",TimelineElemWrapper:"Timeline_TimelineElemWrapper__3Qc7z",TimelinePoint:"Timeline_TimelinePoint__1yhwN",TimelineWrapper:"Timeline_TimelineWrapper__1C0BS",TimelineRect:"Timeline_TimelineRect__3Zzkl",TimelineBegin:"Timeline_TimelineBegin__tVh64",TimelineBeginRect:"Timeline_TimelineBeginRect__1HMRY",TimelineBeginSymbol:"Timeline_TimelineBeginSymbol__3wUkW",TimelineBeginText:"Timeline_TimelineBeginText__25B_w"}},,,,,,,,function(e,a,t){e.exports={ParallaxWrapper:"Parallax_ParallaxWrapper__3oeqN",ParallaxImage:"Parallax_ParallaxImage__cunFE",Body:"Parallax_Body__Vo0jk"}},function(e,a,t){e.exports={Card:"Card_Card__1qZuH",Title:"Card_Title__2vPp4",Body:"Card_Body__KaiRv",Footer:"Card_Footer__2EkZH"}},,function(e,a,t){},,,function(e,a,t){e.exports={NavigationTitle:"NavigationTitle_NavigationTitle__1Jaua",Text:"NavigationTitle_Text__Yf4g2",glowaround:"NavigationTitle_glowaround__1KlyF"}},function(e,a,t){e.exports={SpanningImage:"SpanningImage_SpanningImage__3WRtB",Image:"SpanningImage_Image__3hLng"}},,,,function(e,a,t){e.exports={NavigationElem:"NavigationElem_NavigationElem__1ShH7"}},,,function(e,a,t){e.exports={Taskbar:"Navigationbar_Taskbar__2E7UI",shadowPulse:"Navigationbar_shadowPulse__1HGJa",Title:"Navigationbar_Title__1HVKi",Link:"Navigationbar_Link__3Itgg"}},function(e,a,t){e.exports={navItems:"NavigationItems_navItems__O-X3E"}},function(e,a,t){e.exports={Layout:"Layout_Layout__3_6ZR"}},function(e,a,t){e.exports={HomePage:"HomePage_HomePage__3w43h",Main:"HomePage_Main__3wHHr",Info:"HomePage_Info__1EqL8"}},function(e,a,t){e.exports={TextContainer:"TextContainer_TextContainer__aYChE"}},function(e,a,t){e.exports=t.p+"static/media/Waterloo1.832ca428.jpg"},function(e,a,t){e.exports={CardList:"CardList_CardList__3CIyg"}},function(e,a,t){e.exports={Main:"ResumePage_Main__1PdcO",resumeFadeIn:"ResumePage_resumeFadeIn__Op8QZ"}},function(e,a,t){e.exports=t.p+"static/media/BellAndHowell.b56df871.png"},function(e,a,t){e.exports=t.p+"static/media/Zehrs.c2e5a106.png"},function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(26),r=t.n(l),c=(t(45),t(46),t(19)),o=t.n(c),m=t(2),s=t(3),d=t(5),u=t(4),g=t(6),p=t(27),h=t.n(p),_=t(11),E=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).state={redirect:!1,href:t.props.href},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state.redirect;return a&&this.setState({redirect:!1}),i.a.createElement("div",null,a?i.a.createElement(_.a,{to:this.state.href}):null,i.a.createElement("div",{className:h.a.NavigationElem,onClick:function(){return e.setState({redirect:!0})}},i.a.createElement("p",null,this.props.children)))}}]),a}(n.Component),b=t(22),v=t.n(b),f=function(e){return i.a.createElement("div",{className:v.a.NavigationTitle},i.a.createElement("p",{className:v.a.Text},e.children))},T=t(30),k=t.n(T),N=t(31),y=t.n(N),x=function(e){return i.a.createElement("div",{className:y.a.navItems},e.children)},I=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:k.a.Taskbar},i.a.createElement(f,null," CH "),i.a.createElement(x,null,i.a.createElement(E,{href:"/"}," Home "),i.a.createElement(E,{href:"/work"}," Resume "),i.a.createElement(E,{href:"/projects"}," Projects ")))}}]),a}(n.Component),j=t(32),w=t.n(j),C=t(33),O=t.n(C),B=(t(34),t(15)),P=t(16),H=t.n(P),D=function(e){return console.log(e.backgroundImage),i.a.createElement("div",{className:H.a.ParallaxWrapper,style:{height:"".concat(e.height)}},i.a.createElement("div",{className:H.a.ParallaxImage,style:Object(B.a)({backgroundImage:"url(".concat(e.backgroundImage,")"),height:"".concat(e.height)},e.imageStyle)}),i.a.createElement("div",{className:H.a.Body},e.children))},S=t(35),W=t.n(S),R=(t(52),t(36)),L=t.n(R),M=(n.Component,t(17)),A=t.n(M),Z=(n.Component,function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:O.a.Main},i.a.createElement("div",{className:"border-top-and-bottom"},i.a.createElement(D,{height:"300px",backgroundImage:"".concat(W.a)},i.a.createElement("div",{className:"span-width medium-padding align-center"},i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("p",{className:"header title-background"},"My name is Cameron Hadfield, and I like to see life in a different way")))),i.a.createElement(D,{height:"50em"},i.a.createElement("div",{className:"span-width medium-padding align-center border-top-and-bottom"},i.a.createElement("div",{className:"header-dark bold-text"},"I am doing so well, thank you for asking"),i.a.createElement("div",{className:"body-dark large-padding"},"I enjoy hanging around and doing my thing, just really broing out you know?")))))}}]),a}(n.Component)),F=t(37),U=t.n(F),V=(t(23),t(38)),J=t.n(V),K=t(39),q=t.n(K),z=t(8),G=t.n(z),Y=function(e){return i.a.createElement("div",{className:G.a.TimelineWrapper},i.a.createElement("div",{className:G.a.TimelineBegin},i.a.createElement("div",{className:G.a.TimelineBeginSymbol}),i.a.createElement("div",{className:G.a.TimelineBeginText},e.beginText||"In the beginning..."),i.a.createElement("div",{className:G.a.TimelineBeginRect})),i.a.createElement("div",{className:G.a.TimelineRect}),e.children)},Q=function(e){var a={};return e.backgroundImage&&(a.backgroundImage="url(".concat(e.backgroundImage,")")),e.background&&(a.background=e.background),console.log(a),i.a.createElement("div",{className:G.a.TimelineElem,style:{height:"".concat(e.height||"150px")}},i.a.createElement("div",{className:G.a.TimelineImage,style:Object(B.a)({},a,{filter:e.filter})}),i.a.createElement("div",{className:G.a.TimelinePoint}),i.a.createElement("div",{className:G.a.TimelineElemDate},"".concat(e.startDate||"Dec. 1999"," \u2192 ").concat(e.endDate||"Present")),i.a.createElement("div",{className:G.a.TimelineElemWrapper},i.a.createElement("div",{className:"header-background"},i.a.createElement("div",{className:"header"},e.title||"Give me a title!")),i.a.createElement("div",{className:"body"},e.children||"Give me some body here!")))},X=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:U.a.Main},i.a.createElement(Y,{height:"600px",imageStyle:{filter:"blur(6px)",transition:"filter .25s"},beginText:"Born in December of 1999"},i.a.createElement(Q,{backgroundImage:q.a,title:"Zehrs Markets",startDate:"Apr. 2017",endDate:"Aug. 2018",height:"auto"},i.a.createElement("div",{className:"body-background"},i.a.createElement("div",{className:"green-highlight job-responsibility-list"},i.a.createElement("ul",null,i.a.createElement("li",null,"Provided friendly ",i.a.createElement("mark",null,"service")," to patrons"),i.a.createElement("li",null,"Worked closely with coworkers to maintain a ",i.a.createElement("mark",null,"clean")," work environment"),i.a.createElement("li",null,"Developed ",i.a.createElement("mark",null,"customer service")," and ",i.a.createElement("mark",null,"communication skills")," on the job"),i.a.createElement("li",null,"Coordinated with team members to assure timely completion of evening tasks"))))),i.a.createElement(Q,{backgroundImage:"https://uwaterloo.ca/science/sites/ca.science/files/uploads/images/university_sign_-_banner.jpg",title:"University of Waterloo",height:"auto",startDate:"Sep. 2019"},i.a.createElement("div",{className:"body-background"},i.a.createElement("div",{className:"subtitle"},"Honours Computer Science (Co-op)"))),i.a.createElement(Q,{backgroundImage:J.a,title:"Bell and Howell",height:"auto",startDate:"May 2019",endDate:"Aug. 2019"},i.a.createElement("div",{className:"body-background "},i.a.createElement("div",{className:"subtitle"},i.a.createElement("i",null,"Software Developer")),i.a.createElement("div",{className:"blue-highlight job-responsibility-list"},i.a.createElement("ul",null,i.a.createElement("li",null,"Wrote ",i.a.createElement("mark",null,"VB")," scripts to track document production on the US Census, managing roughly ",i.a.createElement("b",null,"400 million")," mailpieces"),i.a.createElement("li",null,"Developed ",i.a.createElement("mark",null,"C#")," COM-Buildable objects to generate company-specific file formats"),i.a.createElement("li",null,"Created an XML-based user interface structure to manage several production datapoints for all clients"),i.a.createElement("li",null,"Translated ",i.a.createElement("mark",null,"Bash")," build scripts into ",i.a.createElement("mark",null,"Batch"),", saving ",i.a.createElement("b",null,"10 hours")," of R&D into Android NDK"),i.a.createElement("li",null,"Updated 30 year-old ",i.a.createElement("mark",null,"C")," code to be built for Android API 29, across ",i.a.createElement("b",null,"60 files")))))),i.a.createElement(Q,{backgroundImage:"https://media.boingboing.net/wp-content/uploads/2018/05/cool-background1.png"},i.a.createElement("div",{className:"body-background"},i.a.createElement("div",{className:"red-highlight job-responsibility-list"},i.a.createElement("mark",null,"Test")))),i.a.createElement(Q,{background:"#ccc",filter:"blur(0px)"},i.a.createElement("div",{className:"body-background test3"},i.a.createElement("div",{className:"green-highlight"},i.a.createElement("mark",null,"Test"))))))}}]),a}(n.Component),$=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:w.a.Layout},i.a.createElement(I,null),i.a.createElement(_.d,null,i.a.createElement(_.b,{path:"/work",component:X}),i.a.createElement(_.b,{path:"/",component:Z})))}}]),a}(n.Component);var ee=function(){return i.a.createElement("div",{className:o.a.App},i.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=t(14);r.a.render(i.a.createElement(ae.a,null,i.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[40,1,2]]]);
//# sourceMappingURL=main.73606e93.chunk.js.map