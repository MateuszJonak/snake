(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{66:function(e,n,t){e.exports=t(73)},73:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),u=t(59),i=t.n(u),o=t(11),s=function(e){for(var n=[],t=e-1;t>=0;t--)n.push({x:t,y:0});return n},p={snake:s(10),dots:[{x:1,y:1}],setSnake:Object(o.b)((function(e,n){e.snake=n})),apples:[],setApples:Object(o.b)((function(e,n){e.apples=n}))};!function(e){e.RIGHT="RIGHT",e.LEFT="LEFT",e.UP="UP",e.DOWN="DOWN"}(r||(r={}));var f={game:p},b=Object(o.c)(f),l=t(55),O=t(61),j=t(13),m=t(54),d=t(77),v=t(79),h=t(92),x=t(85),y=t(64),k=t(93),g=t(78),w=t(80),E=t(91),T=t(15),A=t(81),W=t(90),H=t(82),G=t(83),I=t(84),L=t(86),R=Object(o.d)(),S=R.useStoreActions,D=R.useStoreState,F=(R.useStoreDispatch,t(38)),U=t(45),N=t(76);function P(){var e=Object(F.a)(["\n  width: 10px;\n  height: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin: 1px;\n  background-color: ",";\n"]);return P=function(){return e},e}var M=U.a.div(P(),(function(e){return e.isHead?"green":e.isActive?"red":e.isApple?"blue":"transparent"})),B=Object(j.a)(Array(30)),C=function(e){var n=e.indexColumn,t=D((function(e){return e.game.snake})),r=D((function(e){return e.game.apples}));return t?c.a.createElement("div",null,B.map((function(e,a){return c.a.createElement(M,{key:a,isActive:N.a({x:n,y:a},t),isApple:N.a({x:n,y:a},r),isHead:t[0].x===n&&t[0].y===a})}))):null};function J(){var e=Object(F.a)(["\n  display: flex;\n  max-width: ","px;\n  max-height: ","px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return J=function(){return e},e}var $,q,z=Object(j.a)(Array(30)),K=function(){return c.a.createElement(Q,{tileWidth:10},z.map((function(e,n){return c.a.createElement(C,{key:n,indexColumn:n})})))},Q=U.a.div(J(),(function(e){return 30*(e.tileWidth+2+2)}),(function(e){return 30*(e.tileWidth+2+2)})),V=t(26),X=t(88),Y=t(65),Z=t(94),_=t(89),ee=t(87);!function(e){e.RIGHT="RIGHT",e.LEFT="LEFT",e.UP="UP",e.DOWN="DOWN"}($||($={}));var ne=(q={},Object(V.a)(q,$.RIGHT,(function(e){return{x:e.x+1,y:e.y}})),Object(V.a)(q,$.LEFT,(function(e){return{x:e.x-1,y:e.y}})),Object(V.a)(q,$.UP,(function(e){return{x:e.x,y:e.y-1}})),Object(V.a)(q,$.DOWN,(function(e){return{x:e.x,y:e.y+1}})),q),te=function(e){var n=e.direction,t=e.pos;return ne[n](t)},re=[$.UP,$.DOWN],ae=[$.LEFT,$.RIGHT],ce=X.a(Y.a(0),Z.a,_.a(ae)),ue=X.a(Y.a(0),Z.a,_.a(re)),ie=function(e,n){var t=Math.ceil(e),r=Math.floor(n);return Math.floor(Math.random()*(r-t+1))+t},oe=function(e,n){return e.x===n.x&&e.y===n.y},se=function(e){for(var n=[],t=0;t<e;t++)n.push({x:ie(0,30),y:ie(0,30)});return n},pe=Object(d.a)(document,"keydown").pipe(Object(g.a)("code")),fe={ArrowUp:r.UP,ArrowDown:r.DOWN,ArrowLeft:r.LEFT,ArrowRight:r.RIGHT},be=new v.a(10),le=function(e,n){return t=e,r=n,ee.a(ce,ue)([t,r])?e:n;var t,r},Oe=be.pipe(Object(w.a)((function(e,n){return n+e})),Object(E.a)()),je=pe.pipe(Object(T.a)((function(e){return fe[e]})),Object(A.a)((function(e){return!!e})),Object(W.a)(r.RIGHT),Object(H.a)()),me=new v.a(200).pipe(Object(G.a)((function(e){return Object(h.a)(e).pipe(Object(I.a)(je,(function(e,n){return{direction:n}})),Object(w.a)((function(e,n){var t=n.direction;return le(e,t)}),r.RIGHT))}))).pipe(Object(I.a)(Oe,(function(e,n){return{move:e,snakeLength:n}})),Object(w.a)((function(e,n){var t=n.move,r=n.snakeLength,a=Object(m.a)(e),c=a[0],u=a.slice(1),i=c;return[te({direction:t,pos:c})].concat(Object(j.a)(u.map((function(e){var n=Object(O.a)({},i);return i=e,n}))),Object(j.a)(r>e.length?[e[e.length-1]]:[]))}),s(10)),Object(E.a)()),de=me.pipe(Object(w.a)((function(e,n){var t=Object(l.a)(n,1)[0],r=e.find((function(e){return oe(e,t)}));return r?[].concat(Object(j.a)(_.a([r],e)),Object(j.a)(se(1))):e}),se(2)),Object(H.a)(),Object(E.a)()),ve=Oe.pipe(Object(W.a)(0),Object(w.a)((function(e,n){return e+1}))),he=Object(x.a)([me,de,ve]).pipe(Object(T.a)((function(e){var n=Object(l.a)(e,3);return{snake:n[0],apples:n[1],score:n[2]}}))),xe=Object(y.a)("Start Game").pipe(Object(T.a)((function(){return Object(h.a)(1e3/60,k.a)})),Object(G.a)((function(e){return e.pipe(Object(I.a)(he,(function(e,n){return n})))})),Object(L.a)((function(e){return!ye(e)}))),ye=function(e){var n=e.snake,t=Object(m.a)(n),r=t[0],a=t.slice(1);return function(e){var n=e.x,t=e.y;return n>=30||n<0||t>=30||t<0}(r)||a.some((function(e){return oe(e,r)}))},ke=function(){var e=S((function(e){return{setSnake:e.game.setSnake,setApples:e.game.setApples}})),n=e.setSnake,t=e.setApples;return Object(a.useEffect)((function(){var e=xe.subscribe((function(e){n(e.snake),t(e.apples)}));return function(){return e.unsubscribe()}})),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Snake"),c.a.createElement(K,null))},ge=function(){return c.a.createElement(o.a,{store:b},c.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.e281e768.chunk.js.map