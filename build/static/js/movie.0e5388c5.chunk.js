(this["webpackJsonpcreate-app"]=this["webpackJsonpcreate-app"]||[]).push([[4],{69:function(e,t,a){e.exports={list:"addInfo_list__11UDH"}},70:function(e,t,a){e.exports={container:"movie_container__eCPBL",movieBox:"movie_movieBox__3OOi4",movieDiv:"movie_movieDiv__1_bcv",infoBlock:"movie_infoBlock__owVbP",title:"movie_title__3NYiS",image:"movie_image__2b6ZT"}},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a(31),i=a.n(l),o=a(32),s=a(33),m=a(34),u=a(36),v=a(35),p=a(37),h=function(e){return e.match.params.movieId},f=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={casts:[],message:null},e.getCast=Object(o.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=h(e.props),t.next=4,Object(p.a)(a);case 4:n=t.sent,e.setState({casts:n.data.cast}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({message:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getCast()}},{key:"render",value:function(){var e=this.state.casts;return r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("img",{style:{width:80,height:"auto"},src:"https://image.tmdb.org/t/p/w500"+"".concat(e.profile_path),alt:"cast"}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"Character: ",e.character))})))}}]),a}(n.Component),d=function(e){return e.match.params.movieId},E=function(e){Object(u.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={reviews:[],message:null},e.getReviews=Object(o.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=d(e.props),t.next=4,Object(p.c)(a);case 4:n=t.sent,e.setState({reviews:n.data.results}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({message:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getReviews()}},{key:"render",value:function(){var e=this.state.reviews;return r.a.createElement("ul",null,e.length>0?e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,"Author: ",e.author),r.a.createElement("p",null,e.content))})):r.a.createElement("p",null,"We don't have any reviews for this movie."))}}]),a}(n.Component),b=a(7),g=a(69),_=a.n(g),w=function(e){var t=e.id;return r.a.createElement("ul",{className:_.a.list},r.a.createElement("li",null,r.a.createElement(b.c,{exact:!0,activeStyle:{fontWeight:"bold",color:"red"},to:{pathname:"/movies/".concat(t,"/cast"),state:{from:"/"}}},"Cast")),r.a.createElement("li",null,r.a.createElement(b.c,{exact:!0,activeStyle:{fontWeight:"bold",color:"red"},to:{pathname:"/movies/".concat(t,"/reviews"),state:{from:"/"}}},"Reviews")))},k=a(70),O=a.n(k);t.default=Object(c.f)((function(e){var t=e.title,a=e.vote_average,n=e.overview,l=e.genres,i=e.poster_path,o=e.onGoBack,s=e.id,m=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:O.a.container},r.a.createElement("button",{type:"button",onClick:o},"\ud83e\udc14 Go back"),r.a.createElement("div",{className:O.a.movieBox},r.a.createElement("div",null,r.a.createElement("img",{className:O.a.image,alt:"movie",src:"https://image.tmdb.org/t/p/w500"+"".concat(i)})),r.a.createElement("div",{className:O.a.movieDiv},r.a.createElement("h2",null,t),r.a.createElement("p",null,"User score: ",10*a,"%"),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,n),r.a.createElement("h3",null,"Genres"),r.a.createElement("p",{style:{wordSpacing:15}},l.join(" "))))),r.a.createElement("div",{className:O.a.infoBlock},r.a.createElement("p",{className:O.a.title},"Additional information"),r.a.createElement(w,{id:s}),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"".concat(m.path,"/cast"),exact:!0,render:function(e){return r.a.createElement(f,Object.assign({},e,{id:s}))}}),r.a.createElement(c.a,{path:"".concat(m.path,"/reviews"),exact:!0,render:function(e){return r.a.createElement(E,Object.assign({},e,{id:s}))}}))))}))}}]);
//# sourceMappingURL=movie.0e5388c5.chunk.js.map