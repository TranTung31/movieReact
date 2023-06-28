(this["webpackJsonperic-app"]=this["webpackJsonperic-app"]||[]).push([[0],{107:function(e,t,c){},112:function(e,t,c){},120:function(e,t,c){},121:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(23),o=c.n(r),i=(c(78),c(7)),s=(c(79),c.p+"static/media/Logo_Netflix_GG.77ba64d8.png"),l=c(43),u=c(5),j=c(3),d=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(u.n)();return Object(j.jsx)("div",{className:"navigation",children:Object(j.jsxs)("div",{className:"navContainer",children:[Object(j.jsx)("div",{onClick:function(){r("/"),a("")},children:Object(j.jsx)("img",{src:s,alt:"",className:"logo"})}),Object(j.jsxs)("div",{className:"navSearch",children:[Object(j.jsx)(l.a,{className:"iconSearch"}),Object(j.jsx)("input",{type:"text",placeholder:"Input title, genres, people",className:"inputSearch",onChange:function(e){var t=e.target.value;a(t),t.length>0?r("/search?keywords=".concat(t.trim())):r("/")},value:c})]})]})})},b=c(13),v=(c(86),c(67)),O=c.n(v),p=c(54),m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("div",{className:"Banner",children:[Object(j.jsx)(O.a,{url:"https://vimeo.com/34122764",playing:!0,volume:1,width:"100%",height:"100%",muted:c,loop:!0,controls:!0,className:"videoBanner"}),Object(j.jsxs)("div",{className:"infoBanner",children:[Object(j.jsx)("h1",{className:"headingBanner",children:"Netflix - Beaver"}),Object(j.jsx)("p",{className:"descBanner",children:"Commercial for Netflix Clients - Netflix Agency - Directors - Smith & Foulkes Production Company - Nexus Productions"})]}),c?Object(j.jsx)(p.a,{className:"iconBanner",onClick:function(){return a((function(e){return!e}))}}):Object(j.jsx)(p.b,{className:"iconBanner",onClick:function(){return a((function(e){return!e}))}}),Object(j.jsx)("div",{className:"faceBottom"})]})},h=(c(107),c(55)),f=function(e,t,c,n){for(var a=c/100,r=0,o=0,i=window.scrollY;r<=t;)window.setTimeout(x,r,e,o,a,n,i),r+=t/100,o++;window.scrollTo(0,i)},x=function(e,t,c,n,a){e.scrollLeft=c*t+n},g=function(e){var t=Math.round(256*Math.random()),c=Math.round(256*Math.random()),n=Math.round(256*Math.random());return"rgba(".concat(t,", ").concat(c,", ").concat(n,", ").concat(e,")")},M=function(){var e=Object(n.useState)(window.innerWidth||document.documentElement.clientWidth),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=function(){var e=window.innerWidth||document.documentElement.clientWidth;a(e)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),[c]},N=c(6),w=c(9),y=c(128),_="GET_NETFLIX_ORIGINALS",k="GET_TRENDING_MOVIES",S="GET_TOPRATED_MOVIES",E="GET_ACTION_MOVIES",T="GET_COMEDY_MOVIES",I="GET_HORROR_MOVIES",C="GET_ROMANCE_MOVIES",R="GET_DOCUMENTARIES",D="SET_MOVIE_DETAIL",A="GET_SEARCH_MOVIES",G="74d1111ff793d2c86a4104bab872bc34",L="https://api.themoviedb.org/3",P=function(e){return function(t){t({type:D,payload:e})}},B=function(e){var t=e.movies,c=e.title,a=e.isNetflix,r=e.idSection,o=Object(n.useRef)(),s=Object(n.useRef)(),l=Object(n.useState)(0),u=Object(i.a)(l,2),d=u[0],v=u[1],O=Object(n.useState)(0),p=Object(i.a)(O,2),m=p[0],x=p[1],g=Object(n.useState)(!1),N=Object(i.a)(g,2),w=N[0],y=N[1],_=Object(b.b)(),k=function(){var e=o.current.scrollWidth-o.current.clientWidth;o.current.scrollLeft<e&&f(o.current,250,2*s.current.clientWidth,o.current.scrollLeft)},S=function(){o.current.scrollLeft>0&&f(o.current,250,2*-s.current.clientWidth,o.current.scrollLeft)};Object(n.useEffect)((function(){w&&(d>m&&k(),d<m&&S())}),[d,m,w]);var E=M(),T=Object(i.a)(E,1)[0];return Object(j.jsxs)("div",{className:"movieRowContainer",draggable:"false",id:r,children:[Object(j.jsx)("h1",{className:"heading",children:c}),Object(j.jsx)("div",{className:"movieSlither",ref:o,draggable:"true",onDragStart:function(e){y(!0),v(e.screenX)},onDragEnd:function(e){y(!1)},onDragEnter:function(e){x(e.screenX)},style:t&&t.length>0?{gridTemplateColumns:"repeat(".concat(t.length,", ").concat(T>1200?"360px":T>992?"300px":T>768?"250px":"200px",")")}:{},children:t&&t.length>0&&t.map((function(e,t){if(e.backdrop_path&&null!=e.poster_path){var c=a?"https://image.tmdb.org/t/p/original/".concat(e.poster_path):"https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path);return Object(j.jsxs)("div",{className:"movieItem",ref:s,draggable:"false",onClick:function(){return function(e){_(P(e))}(e)},children:[Object(j.jsx)("img",{src:c,alt:"",draggable:"false"}),Object(j.jsx)("p",{className:"movieName",children:e.name||e.title})]},t)}}))}),Object(j.jsx)("div",{className:"btn-left ".concat(a&&"isNetflix"),onClick:S,children:Object(j.jsx)(h.a,{})}),Object(j.jsx)("div",{className:"btn-right ".concat(a&&"isNetflix"),onClick:k,children:Object(j.jsx)(h.b,{})})]})},Y=c(20),W=(c(112),c(46));var H,V,F=function(){var e=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],r=function(){var e=window.scrollY||document.documentElement.scrollTop;a(e)};return Object(n.useEffect)((function(){return r(),window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[]),[c]}(),t=Object(i.a)(e,1)[0],c=Object(b.b)(),a=Object(b.c)((function(e){return e.infoMovies})),r=a.NetflixOriginals,o=a.TrendingMovies,s=a.TopRatedMovies,l=a.ActionMovies,u=a.ComedyMovies,d=a.HorrorMovies,v=a.RomanceMovies,O=a.Documentaries;return Object(n.useEffect)((function(){c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/discover/tv?api_key=").concat(G,"&with_networks=213"));case 3:c=e.sent,t({type:_,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Netflix API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/trending/all/week?api_key=").concat(G,"&language=en-us"));case 3:c=e.sent,t({type:k,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Trending API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/movie/top_rated?api_key=").concat(G,"&language=en-us"));case 3:c=e.sent,t({type:S,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Top Rated API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/discover/movie?api_key=").concat(G,"&with_genres=28"));case 3:c=e.sent,t({type:E,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Action API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/discover/movie?api_key=").concat(G,"&with_genres=35"));case 3:c=e.sent,t({type:T,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Comedy API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/discover/movie?api_key=").concat(G,"&with_genres=27"));case 3:c=e.sent,t({type:I,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Horror API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/discover/movie?api_key=").concat(G,"&with_genres=10749"));case 3:c=e.sent,t({type:C,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Romance API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),c(function(){var e=Object(w.a)(Object(N.a)().mark((function e(t){var c;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(L,"/discover/movie?api_key=").concat(G,"&with_genres=99"));case 3:c=e.sent,t({type:R,payload:c.data.results}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Get Documentaries API error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(j.jsxs)("div",{children:[Object(j.jsx)(B,{movies:r,title:"Netflix Originals",isNetflix:!0,idSection:"netflix"}),Object(j.jsx)(B,{movies:o,title:"Trending Movies",idSection:"trending"}),Object(j.jsx)(B,{movies:s,title:"Top Rated Movies",idSection:"topRated"}),Object(j.jsx)(B,{movies:l,title:"Action Movies",idSection:"actionsMovies"}),Object(j.jsx)(B,{movies:u,title:"Comedy Movies",idSection:"comedyMovies"}),Object(j.jsx)(B,{movies:d,title:"Horror Movies",idSection:"horrorMovies"}),Object(j.jsx)(B,{movies:v,title:"Romance Movies",idSection:"romanceMovies"}),Object(j.jsx)(B,{movies:O,title:"Documentaries",idSection:"documentaries"}),Object(j.jsx)("div",{className:"btn-arrowUp",onClick:function(){W.animateScroll.scrollToTop()},style:{visibility:"".concat(t>600?"visible":"hidden")},children:Object(j.jsx)(Y.a,{})})]})},z=(c(120),c(68)),U=c(33),X=function(e){var t=e.name,c=e.Icon,n=e.to;return Object(j.jsxs)(W.Link,{className:"menuItem",activeClass:"active",to:n,spy:!0,smooth:!0,hashSpy:!0,offset:-70,duration:500,children:[Object(j.jsx)(c,{className:"icon",style:{color:g(1)}}),Object(j.jsx)("p",{className:"name",children:t})]})},J=function(){return Object(j.jsxs)("div",{className:"Menu",children:[Object(j.jsx)(X,{name:"Netflix",Icon:z.a,to:"netflix"}),Object(j.jsx)(X,{name:"Trending",Icon:Y.d,to:"trending"}),Object(j.jsx)(X,{name:"Top Rated",Icon:Y.f,to:"topRated"}),Object(j.jsx)(X,{name:"Actions Movies",Icon:U.c,to:"actionsMovies"}),Object(j.jsx)(X,{name:"Comedy Movies",Icon:l.b,to:"comedyMovies"}),Object(j.jsx)(X,{name:"Horror Movies",Icon:U.b,to:"horrorMovies"}),Object(j.jsx)(X,{name:"Romance Movies",Icon:U.d,to:"romanceMovies"}),Object(j.jsx)(X,{name:"Documentaries",Icon:U.a,to:"documentaries"})]})},q=c(56),K=c(58),Q=(c(121),c(57)),Z=c.n(Q),$=Object(K.b)(H||(H=Object(q.a)(["\n    0%: { background: rgba(0, 0, 0, 0) }\n    100%: { background: rgba(0, 0, 0, 0.6)}\n"]))),ee=K.a.div(V||(V=Object(q.a)(["\n  .backdrop {\n    animation: "," 1s cubic-bezier(0.17, 0.85, 0.45, 1) forward;\n  }\n"])),$),te=function(e){var t=e.movie,c=e.showModel,n=Object(b.b)();return Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"backdrop ".concat(c?"showBackdrop":"hideBackdrop"),onClick:function(){n(P(null))}}),Object(j.jsx)("div",{className:"model ".concat(c?"showModel":"hideModel"),style:t?{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(t.backdrop_path||t.poster_path,")"),backgroundSize:"cover"}:{},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"infoMovie",children:[Object(j.jsx)("h1",{className:"movieName",children:t&&(t.title||t.name)}),Object(j.jsxs)("div",{className:"statistical",children:[Object(j.jsxs)("p",{className:"rating",children:["Rating: ",t&&10*t.vote_average,"%"]}),Object(j.jsxs)("p",{className:"popular",children:["Popularing: ",t&&t.popularity]})]}),Object(j.jsxs)("p",{className:"releaseDate",children:["Release date:"," ",t&&(Z()(t.release_date).format("DD/MM/YYYY")||Z()(t.first_air_date).format("DD/MM/YYYY"))]}),Object(j.jsxs)("p",{className:"runtime",children:["Run time: ",t&&(t.runtime||t.episode_run_time)]}),Object(j.jsx)("p",{className:"overview",children:t&&t.overview})]})})})]})},ce=function(){var e=Object(b.c)((function(e){return e.infoMovies})).MovieDetail,t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){r(!!e)}),[e]),Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)(F,{}),Object(j.jsx)(J,{}),Object(j.jsx)(te,{movie:e,showModel:a})]})},ne=c(38),ae=(c(124),function(){var e=M(),t=Object(i.a)(e,1)[0],c=Object(b.b)(),a=Object(b.c)((function(e){return e.infoMovies})).SearchMovies,r=new URLSearchParams(Object(u.l)().search).get("keywords");return Object(n.useEffect)((function(){r&&c(function(e){return function(){var t=Object(w.a)(Object(N.a)().mark((function t(c){var n;return Object(N.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("".concat(L,"/search/multi?api_key=").concat(G,"&language=en-US&include_adult=false&query=").concat(e));case 3:n=t.sent,c({type:A,payload:n.data.results}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Get Search Movies API error: ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(r))}),[r,c]),Object(j.jsx)("div",{className:"SearchModel",children:a&&a.length>0?Object(j.jsx)("div",{className:"searchContent",style:{gridTemplateColumns:"repeat(".concat(t>1200?5:t>992?4:t>768?3:t>600?2:1,", auto)")},children:a.map((function(e,t){if(null!==e.backdrop_path&&"person"!==e.media_type){var n="https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path);return Object(j.jsxs)("div",{className:"searchItem",onClick:function(){return c(P(e))},children:[Object(j.jsx)("img",{src:n,alt:e.title||e.name}),Object(j.jsx)("span",{className:"movieName",children:e.title||e.name})]},t)}}))}):Object(j.jsx)("div",{className:"SearchError",children:Object(j.jsxs)("h1",{children:['Your search "',r,'" did not have any matches']})})})}),re=function(){var e=Object(b.c)((function(e){return e.infoMovies})).MovieDetail;return Object(j.jsxs)("div",{children:[Object(j.jsx)(ae,{}),Object(j.jsx)(te,{movie:e,showModel:!!e})]})},oe=(c(125),function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("h1",{className:"footer__title",children:"Contact With Me"}),Object(j.jsxs)("ul",{className:"footer__icon",children:[Object(j.jsx)("li",{className:"footer__icon-item",children:Object(j.jsx)("a",{href:"https://www.facebook.com/trantung3105",target:"_black",children:Object(j.jsx)(Y.b,{})})}),Object(j.jsx)("li",{className:"footer__icon-item",children:Object(j.jsx)("a",{href:"https://www.instagram.com/trantung.3105/",target:"_black",children:Object(j.jsx)(Y.e,{})})}),Object(j.jsx)("li",{className:"footer__icon-item",children:Object(j.jsx)("a",{href:"https://github.com/TranTung31",target:"_black",children:Object(j.jsx)(Y.c,{})})})]}),Object(j.jsx)("h1",{className:"footer__copyright",children:"Copyright \xa9 2023 by TranTung"})]})});var ie=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(ne.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",element:Object(j.jsx)(ce,{})}),Object(j.jsx)(u.a,{path:"/search",element:Object(j.jsx)(re,{})})]}),Object(j.jsx)(oe,{})]})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))},le=c(25),ue=c(72),je=c(73),de=c(11),be={NetflixOriginals:null,TrendingMovies:null,TopRatedMovies:null,ActionMovies:null,ComedyMovies:null,HorrorMovies:null,RomanceMovies:null,Documentaries:null,MovieDetail:null,SearchMovies:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case _:return Object(de.a)(Object(de.a)({},e),{},{NetflixOriginals:n});case k:return Object(de.a)(Object(de.a)({},e),{},{TrendingMovies:n});case S:return Object(de.a)(Object(de.a)({},e),{},{TopRatedMovies:n});case E:return Object(de.a)(Object(de.a)({},e),{},{ActionMovies:n});case T:return Object(de.a)(Object(de.a)({},e),{},{ComedyMovies:n});case I:return Object(de.a)(Object(de.a)({},e),{},{HorrorMovies:n});case C:return Object(de.a)(Object(de.a)({},e),{},{RomanceMovies:n});case R:return Object(de.a)(Object(de.a)({},e),{},{Documentaries:n});case A:return Object(de.a)(Object(de.a)({},e),{},{SearchMovies:n});case D:return Object(de.a)(Object(de.a)({},e),{},{MovieDetail:n});default:return e}},Oe=Object(le.combineReducers)({infoMovies:ve}),pe=[je.a],me=Object(le.createStore)(Oe,Object(ue.composeWithDevTools)(le.applyMiddleware.apply(void 0,pe)));o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b.a,{store:me,children:Object(j.jsx)(ie,{})})}),document.getElementById("root")),se()},78:function(e,t,c){},79:function(e,t,c){},86:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.d18c1451.chunk.js.map