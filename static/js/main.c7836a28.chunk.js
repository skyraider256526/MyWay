(this["webpackJsonpyt-player"]=this["webpackJsonpyt-player"]||[]).push([[0],{24:function(e,t,r){e.exports=r(47)},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(5),c=r.n(l),u=r(3),o=r(4),s=r(13),i=r.n(s),p=r(21),f=r(14);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={urlList:[],currentUrl:null},y=Object(o.c)({playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_URL_TO_PLAYLIST":return e.urlList.length?m({},e,{urlList:[].concat(Object(p.a)(e.urlList),[t.payload])}):(console.log(t.payload),{urlList:[t.payload],currentUrl:t.payload});case"CHANGE_CURRENT_URL":return{urlList:e.urlList.slice(1),currentUrl:e.urlList[1]};default:return e}}}),v=[i.a],h=Object(o.d)(y,o.a.apply(void 0,v));console.log("logger applied");var O=r(15),E=r(16),g=r(22),w=r(17),j=r(23),L=Object(u.b)()((function(e){var t=e.dispatch,r=function(e){return/http:\/\/www.youtube.com\/watch\?v=\w/.test(e)||/www.youtube.com\/watch\?v=\w/.test(e)},n=function(e){return/http:\/\/youtu.\D\/\w/.test(e)||/youtu.\D\/\w/.test(e)};return a.a.createElement("input",{className:"border border-success",type:"text",placeholder:"enter url here",onBlur:function(e){var a=e.target.value;if(e.target.value=null,console.log("url Check :",r(a)||n(a)),r(a)||n(a))return t({type:"ADD_URL_TO_PLAYLIST",payload:a});""!=a&&window.alert("enter a valid youtube url")}})})),N=r(9),P=function(e){return e.playlist},U=Object(N.a)([P],(function(e){return e.urlList})),D=Object(N.a)([P],(function(e){return e.currentUrl})),_=r(18),x=Object(u.b)((function(e){return{currentUrl:D(e)}}))((function(e){var t=e.currentUrl,r=e.dispatch;return t?a.a.createElement("div",{className:"flex-fill"},a.a.createElement(_.a,{videoId:t.match(/\?v=(\w*)/).pop(),opts:{playerVars:{autoplay:1}},onReady:function(e){return e.target.playVideo()},onEnd:function(e){console.log(e,"finished",e),r({type:"CHANGE_CURRENT_URL"})}})):a.a.createElement("div",{className:"flex-fill text-center pt-5 border border-success"},"Please enter a url")})),R=function(e){var t=e.url;return a.a.createElement("li",{className:"list-group-item "},t)},A=Object(u.b)((function(e){return{urlList:U(e)}}))((function(e){var t=e.urlList;return t.length?a.a.createElement("div",{className:" align-self-stretch vh-100 border border-success",style:{minWidth:"50vw"}},a.a.createElement("ul",{className:"list-group"},t.map((function(e){return a.a.createElement(R,{url:e})})))):a.a.createElement("div",{className:" align-self-stretch vh-100 text-center pt-5 border border-success",style:{minWidth:"100%"}},"Please enter a url")})),C=function(e){function t(){return Object(O.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"d-flex"},a.a.createElement("div",{className:"d-flex flex-column"},a.a.createElement(L,null),a.a.createElement(x,null)),a.a.createElement(A,null)))}}]),t}(a.a.Component);r(45);var T=function(){return a.a.createElement("div",{className:"container-fluid"},a.a.createElement(C,null))};r(46);c.a.render(a.a.createElement(u.a,{store:h},a.a.createElement(T,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c7836a28.chunk.js.map