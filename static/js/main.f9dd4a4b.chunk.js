(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],{81:function(n,e,t){"use strict";t.r(e);var r,a=t(1),c=t(69),i=t.n(c),o=t(19),u=t(20),s=t(42),b=t(15),j=t(31),p=t(97),O=t(72),f=t(103),l=t(98),d=t(96);!function(n){n.RIGHT="RIGHT",n.LEFT="LEFT",n.UP="UP",n.DOWN="DOWN"}(r||(r={}));var h,x=(h={},Object(j.a)(h,r.RIGHT,(function(n){return{x:n.x+1,y:n.y}})),Object(j.a)(h,r.LEFT,(function(n){return{x:n.x-1,y:n.y}})),Object(j.a)(h,r.UP,(function(n){return{x:n.x,y:n.y-1}})),Object(j.a)(h,r.DOWN,(function(n){return{x:n.x,y:n.y+1}})),h),m=function(n){var e=n.direction,t=n.pos;return x[e](t)},v=[r.UP,r.DOWN],g=[r.LEFT,r.RIGHT],y=p.a(O.a(0),f.a,l.a(g)),k=p.a(O.a(0),f.a,l.a(v)),w=function(n,e){var t=Math.ceil(n),r=Math.floor(e);return Math.floor(Math.random()*(r-t+1))+t},A=function(){return{x:w(0,14),y:w(0,14)}},T=function(n,e){return n.x===e.x&&n.y===e.y},D=t(84);function H(n){for(var e=A();D.a(e,n);)e=A();return e}var S,E=function(n){for(var e=[],t=n-1;t>=0;t--)e.push({x:t,y:0});return e}(3),G=function(n,e){for(var t=[],r=Object(b.a)(e),a=0;a<n;a++){var c=H(r);t.push(c),r.push(c)}return t}(2,E),I={snake:E,setSnake:Object(u.b)((function(n,e){n.snake=e})),apples:G,setApples:Object(u.b)((function(n,e){n.apples=e}))};!function(n){n.RIGHT="RIGHT",n.LEFT="LEFT",n.UP="UP",n.DOWN="DOWN"}(S||(S={}));var L,R,W={game:I},N=Object(u.c)(W),F=t(45),U=Object(u.d)(),P=U.useStoreActions,M=U.useStoreState,B=(U.useStoreDispatch,t(25)),z=B.a.div(L||(L=Object(o.a)(["\n  width: ","px;\n  height: ","px;\n  margin: 1px;\n  border-radius: 2px;\n  background-color: ",";\n"])),20,20,(function(n){return n.isHead?"#69D2E7":n.isActive?"#A7DBD8":n.isApple?"#F38630":"transparent"})),C=t(9),J=Object(b.a)(Array(15)),$=function(n){var e=n.indexColumn,t=M((function(n){return n.game.snake})),r=M((function(n){return n.game.apples}));return t?Object(C.jsx)("div",{children:J.map((function(n,a){return Object(C.jsx)(z,{isActive:D.a({x:e,y:a},t),isApple:D.a({x:e,y:a},r),isHead:t[0].x===e&&t[0].y===a},a)}))}):null},q=Object(b.a)(Array(15)),K=function(){return Object(C.jsx)(Q,{tileWidth:20,children:q.map((function(n,e){return Object(C.jsx)($,{indexColumn:e},e)}))})},Q=B.a.div(R||(R=Object(o.a)(["\n  display: flex;\n  max-width: ","px;\n  max-height: ","px;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 2px;\n  background-color: #fdfdfd;\n  border: 2px solid #f1f1f1;\n  border-radius: 5px;\n"])),360,360),V=t(70),X=t(67),Y=t(85),Z=t(87),_=t(100),nn=t(102),en=t(94),tn=t(101),rn=t(86),an=t(104),cn=t(88),on=t(35),un=t(71),sn=t(99),bn=t(89),jn=t(90),pn=t(91),On=t(92),fn=t(93),ln=t(95),dn=Object(Y.a)(document,"keydown").pipe(Object(rn.a)("code")),hn={ArrowUp:S.UP,ArrowDown:S.DOWN,ArrowLeft:S.LEFT,ArrowRight:S.RIGHT},xn=new Z.a(3),mn=function(n,e){return t=n,r=e,d.a(y,k)([t,r])?n:e;var t,r},vn=xn.pipe(Object(an.a)((function(n,e){return e+n})),Object(cn.a)()),gn=dn.pipe(Object(on.a)((function(n){return hn[n]})),Object(un.a)((function(n){return!!n})),Object(sn.a)(S.RIGHT),Object(bn.a)()),yn=new Z.a(200).pipe(Object(jn.a)((function(n){return Object(_.a)(n).pipe(Object(pn.a)(gn,(function(n,e){return{direction:e}})),Object(an.a)((function(n,e){var t=e.direction;return mn(n,t)}),S.RIGHT))}))).pipe(Object(pn.a)(vn,(function(n,e){return{move:n,snakeLength:e}})),Object(an.a)((function(n,e){var t=e.move,r=e.snakeLength,a=Object(X.a)(n),c=a[0],i=a.slice(1),o=c;return[m({direction:t,pos:c})].concat(Object(b.a)(i.map((function(n){var e=Object(V.a)({},o);return o=n,e}))),Object(b.a)(r>n.length?[n[n.length-1]]:[]))}),E),Object(cn.a)()),kn=yn.pipe(Object(an.a)((function(n,e){var t=Object(F.a)(e,1)[0],r=n.find((function(n){return T(n,t)}));if(r){var a=l.a([r],n);return[].concat(Object(b.a)(a),[H([].concat(Object(b.a)(a),Object(b.a)(e)))])}return n}),G),Object(bn.a)(),Object(cn.a)());kn.pipe(Object(On.a)(1),Object(fn.a)((function(){return xn.next(Hn)}))).subscribe();var wn,An,Tn,Dn,Hn=1,Sn=vn.pipe(Object(sn.a)(0),Object(an.a)((function(n,e){return n+Hn}))),En=Object(nn.a)([yn,kn,Sn]).pipe(Object(on.a)((function(n){var e=Object(F.a)(n,3);return{snake:e[0],apples:e[1],score:e[2]}}))),Gn=Object(en.a)("Start Game").pipe(Object(on.a)((function(){return Object(_.a)(1e3/60,tn.a)})),Object(jn.a)((function(n){return n.pipe(Object(pn.a)(En,(function(n,e){return e})))})),Object(ln.a)((function(n){return!In(n)}))),In=function(n){var e=n.snake,t=Object(X.a)(e),r=t[0],a=t.slice(1);return function(n){var e=n.x,t=n.y;return e>=15||e<0||t>=15||t<0}(r)||a.some((function(n){return T(n,r)}))},Ln=function(){var n=P((function(n){return{setSnake:n.game.setSnake,setApples:n.game.setApples}})),e=n.setSnake,t=n.setApples,r=Object(a.useState)(0),c=Object(F.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var n=Gn.subscribe((function(n){e(n.snake),t(n.apples),o(n.score)}));return function(){return n.unsubscribe()}}),[e,t,o]),Object(C.jsxs)(Rn,{children:[Object(C.jsx)(Wn,{children:"Snake"}),Object(C.jsxs)(Nn,{children:["Score: ",Object(C.jsx)("strong",{children:i})]}),Object(C.jsx)(K,{})]})},Rn=B.a.div(wn||(wn=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n"]))),Wn=B.a.h1(An||(An=Object(o.a)(["\n  font-size: 3rem;\n"]))),Nn=B.a.p(Tn||(Tn=Object(o.a)(["\n  font-size: 1.25rem;\n"]))),Fn=Object(s.b)(Dn||(Dn=Object(o.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,500,600,700&display=swap');\n  body {\n    margin: 0;\n    height: 100%;\n  }\n\n  html {\n    height: 100%;\n    font-family: 'Nunito', 'Helvetica', 'Arial', sans-serif;\n  }\n\n  #root {\n    height: 100%;\n  }\n"]))),Un=function(){return Object(C.jsxs)(u.a,{store:N,children:[Object(C.jsx)(s.a,{styles:Fn}),Object(C.jsx)(Ln,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(C.jsx)(Un,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.f9dd4a4b.chunk.js.map