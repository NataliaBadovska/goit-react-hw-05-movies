"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{174:function(e,n,i){i.r(n),i.d(n,{default:function(){return m}});var s=i(87),t=i(689),r=i(791),o="ButtonGoBack_buttonGoBack__4tnYx",c=i(184);var l=function(){var e=(0,t.s0)();return(0,c.jsx)("button",{className:o,onClick:function(){e("/")},children:"Go Back"})},a=i(439);var d=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US&api_key=").concat("e90c4b52206cd75de7766fe2bd804e32")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0457 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!!!"))})).catch((function(e){return e}))},u="MovieDetailsComponent_details__ckBW9",h="MovieDetailsComponent_poster__-7s4D",v="MovieDetailsComponent_posterBox__6RKzl",j="MovieDetailsComponent_list__4D1OS",x="MovieDetailsComponent_genre__U+119";var _=function(){var e=(0,r.useState)(null),n=(0,a.Z)(e,2),i=n[0],s=n[1],o=(0,r.useState)("idle"),l=(0,a.Z)(o,2),_=l[0],m=l[1],p=(0,t.UO)().movieId;return(0,r.useEffect)((function(){m("pending"),d(p).then((function(e){return s(e)}),m("resolved"))}),[p]),"pending"===_?(0,c.jsx)("div",{children:"...\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}):"resolved"===_&&null!==i?(0,c.jsxs)("div",{className:u,children:[(0,c.jsx)("div",{className:v,children:(0,c.jsx)("img",{src:i.poster_path,alt:i.original_title,className:h})}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("h2",{children:[i.original_title," (",i.release_date.slice(0,4),")"]}),(0,c.jsxs)("p",{children:["User Score: ",Math.round(i.vote_average),"%"]}),(0,c.jsx)("h3",{children:"Overview"}),(0,c.jsx)("p",{children:i.overview}),(0,c.jsx)("h3",{children:"Genres"}),(0,c.jsx)("ul",{className:j,children:i.genres.map((function(e){return(0,c.jsx)("li",{className:x,children:e.name},e.id)}))})]})]}):void 0};var m=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l,{}),(0,c.jsx)(_,{}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Additional information"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[" ",(0,c.jsx)(s.rU,{to:"cast",children:"Cast"})]}),(0,c.jsxs)("li",{children:[" ",(0,c.jsx)(s.rU,{to:"reviews",children:"Reviews"})]})]})]}),(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading subpage..."}),children:(0,c.jsx)(t.j3,{})})]})}}}]);
//# sourceMappingURL=174.a549e918.chunk.js.map