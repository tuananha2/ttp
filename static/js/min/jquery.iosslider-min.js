!function(e){var i=0,t=0,r=0,l=0,s="ontouchstart"in window||0<navigator.msMaxTouchPoints,n="onorientationchange"in window,o=!1,a=!1,d=!1,c=!1,f=!1,h="pointer",u="pointer",S=[],g=[],v=[],b=[],p=[],m=[],O=[],w=[],k=[],C=[],N=[],y={showScrollbar:function(i,t){i.scrollbarHide&&e("."+t).css({opacity:i.scrollbarOpacity,filter:"alpha(opacity:"+100*i.scrollbarOpacity+")"})},hideScrollbar:function(e,i,t,r,l,s,n,o,a,d){if(e.scrollbar&&e.scrollbarHide)for(var c=t;t+25>c;c++)i[i.length]=y.hideScrollbarIntervalTimer(10*c,r[t],(t+24-c)/24,l,s,n,o,a,d,e)},hideScrollbarInterval:function(i,t,r,s,n,o,a,d,c){l=-1*i/k[d]*(n-o-a-s),y.setSliderOffset("."+r,l),e("."+r).css({opacity:c.scrollbarOpacity*t,filter:"alpha(opacity:"+c.scrollbarOpacity*t*100+")"})},slowScrollHorizontalInterval:function(i,t,r,s,n,o,a,d,c,f,h,u,S,g,v,b,N,T,x){if(x.infiniteSlider){if(r<=-1*k[b]||r<=-1*C[b]){var E=e(i).width();if(r<=-1*C[b]){var W=-1*h[0];e(t).each(function(i){y.setSliderOffset(e(t)[i],W+N),i<u.length&&(u[i]=-1*W),W+=v[i]}),r+=-1*u[0],w[b]=-1*u[0]+N,k[b]=w[b]+E-o,O[b]=0}for(;r<=-1*k[b];){var A=0,M=y.getSliderOffset(e(t[0]),"x");e(t).each(function(e){y.getSliderOffset(this,"x")<M&&(M=y.getSliderOffset(this,"x"),A=e)}),S=w[b]+E,y.setSliderOffset(e(t)[A],S),w[b]=-1*u[1]+N,k[b]=w[b]+E-o,u.splice(0,1),u.splice(u.length,0,-1*S+N),O[b]++}}if(r>=-1*w[b]||r>=0){if(E=e(i).width(),r>0)for(W=-1*h[0],e(t).each(function(i){y.setSliderOffset(e(t)[i],W+N),i<u.length&&(u[i]=-1*W),W+=v[i]}),r-=-1*u[0],w[b]=-1*u[0]+N,k[b]=w[b]+E-o,O[b]=g;0<-1*u[0]-E+N;){var P=0,B=y.getSliderOffset(e(t[0]),"x");e(t).each(function(e){y.getSliderOffset(this,"x")>B&&(B=y.getSliderOffset(this,"x"),P=e)}),S=w[b]-v[P],y.setSliderOffset(e(t)[P],S),u.splice(0,0,-1*S+N),u.splice(u.length-1,1),w[b]=-1*u[0]+N,k[b]=w[b]+E-o,O[b]--,p[b]++}for(;r>-1*w[b];)P=0,B=y.getSliderOffset(e(t[0]),"x"),e(t).each(function(e){y.getSliderOffset(this,"x")>B&&(B=y.getSliderOffset(this,"x"),P=e)}),S=w[b]-v[P],y.setSliderOffset(e(t)[P],S),u.splice(0,0,-1*S+N),u.splice(u.length-1,1),w[b]=-1*u[0]+N,k[b]=w[b]+E-o,O[b]--}}return h=!1,o=y.calcActiveOffset(x,r,u,o,O[b],g,f,b),S=(o+O[b]+g)%g,x.infiniteSlider?S!=m[b]&&(h=!0):o!=p[b]&&(h=!0),h&&(g=new y.args("change",x,i,e(i).children(":eq("+S+")"),S,T),e(i).parent().data("args",g),""!=x.onSlideChange)&&x.onSlideChange(g),p[b]=o,m[b]=S,r=Math.floor(r),b!=e(i).parent().data("args").data.sliderNumber?!0:(y.setSliderOffset(i,r),void(x.scrollbar&&(l=Math.floor((-1*r-w[b]+N)/(k[b]-w[b]+N)*(a-d-n)),i=n-c,r>=-1*w[b]+N?(i=n-c- -1*l,y.setSliderOffset(e("."+s),0)):(r<=-1*k[b]+1&&(i=a-d-c-l),y.setSliderOffset(e("."+s),l)),e("."+s).css({width:i+"px"}))))},slowScrollHorizontal:function(i,t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,C,N,T,x,E){var W=y.getSliderOffset(i,"x");n=[];var A=0,M=25/1024*a;if(frictionCoefficient=E.frictionCoefficient,elasticFrictionCoefficient=E.elasticFrictionCoefficient,snapFrictionCoefficient=E.snapFrictionCoefficient,s>E.snapVelocityThreshold&&E.snapToChildren&&!T?A=1:s<-1*E.snapVelocityThreshold&&E.snapToChildren&&!T&&(A=-1),-1*M>s?s=-1*M:s>M&&(s=M),e(i)[0]!==e(N)[0]&&(A*=-1,s*=-2),N=O[g],E.infiniteSlider)var P=w[g],B=k[g];T=[];for(var M=[],I=0;I<u.length;I++)T[I]=u[I],I<t.length&&(M[I]=y.getSliderOffset(e(t[I]),"x"));for(;s>1||-1>s;){if(s*=frictionCoefficient,W+=s,(W>-1*w[g]||W<-1*k[g])&&!E.infiniteSlider&&(s*=elasticFrictionCoefficient,W+=s),E.infiniteSlider){if(-1*B>=W){for(var B=e(i).width(),q=0,z=M[0],I=0;I<M.length;I++)M[I]<z&&(z=M[I],q=I);I=P+B,M[q]=I,P=-1*T[1]+x,B=P+B-a,T.splice(0,1),T.splice(T.length,0,-1*I+x),N++}if(W>=-1*P){for(B=e(i).width(),q=0,z=M[0],I=0;I<M.length;I++)M[I]>z&&(z=M[I],q=I);I=P-S[q],M[q]=I,T.splice(0,0,-1*I+x),T.splice(T.length-1,1),P=-1*T[0]+x,B=P+B-a,N--}}n[n.length]=W}if(M=!1,s=y.calcActiveOffset(E,W,T,a,N,C,p[g],g),P=(s+N+C)%C,E.snapToChildren&&(E.infiniteSlider?P!=m[g]&&(M=!0):s!=p[g]&&(M=!0),0>A&&!M?(s++,s>=u.length&&!E.infiniteSlider&&(s=u.length-1)):A>0&&!M&&(s--,0>s&&!E.infiniteSlider&&(s=0))),E.snapToChildren||(W>-1*w[g]||W<-1*k[g])&&!E.infiniteSlider){for((W>-1*w[g]||W<-1*k[g])&&!E.infiniteSlider?n.splice(0,n.length):(n.splice(.1*n.length,n.length),W=0<n.length?n[n.length-1]:W);W<T[s]-.5||W>T[s]+.5;)W=(W-T[s])*snapFrictionCoefficient+T[s],n[n.length]=W;n[n.length]=T[s]}for(A=1,0!=n.length%2&&(A=0),W=0;W<r.length;W++)clearTimeout(r[W]);for(N=(s+N+C)%C,P=0,W=A;W<n.length;W+=2)(W==A||1<Math.abs(n[W]-P)||W>=n.length-2)&&(P=n[W],r[r.length]=y.slowScrollHorizontalIntervalTimer(10*W,i,t,n[W],l,o,a,d,c,f,s,h,u,v,C,S,g,x,N,E));P=(s+O[g]+C)%C,""!=E.onSlideComplete&&1<n.length&&(r[r.length]=y.onSlideCompleteTimer(10*(W+1),E,i,e(i).children(":eq("+P+")"),N,g)),r[r.length]=y.updateBackfaceVisibilityTimer(10*(W+1),t,g,C,E),b[g]=r,y.hideScrollbar(E,r,W,n,l,o,a,c,f,g)},onSlideComplete:function(i,t,r,l,s){r=new y.args("complete",i,e(t),r,l,l),e(t).parent().data("args",r),""!=i.onSlideComplete&&i.onSlideComplete(r)},getSliderOffset:function(i,t){var r=0;if(t="x"==t?4:5,!o||a||d)r=parseInt(e(i).css("left"),10);else{for(var r=["-webkit-transform","-moz-transform","transform"],l,s=0;s<r.length;s++)if(void 0!=e(i).css(r[s])&&0<e(i).css(r[s]).length){l=e(i).css(r[s]).split(",");break}r=void 0==l[t]?0:parseInt(l[t],10)}return r},setSliderOffset:function(i,t){t=parseInt(t,10),e(i).css(!o||a||d?{left:t+"px"}:{msTransform:"matrix(1,0,0,1,"+t+",0)",webkitTransform:"matrix(1,0,0,1,"+t+",0)",MozTransform:"matrix(1,0,0,1,"+t+",0)",transform:"matrix(1,0,0,1,"+t+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(h="-webkit-grab",u="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(f=!0,h="move",u="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?c=a=!0:null!=navigator.userAgent.match("MSIE 8")?c=d=!0:null!=navigator.userAgent.match("MSIE 9")&&(c=!0)},has3DTransform:function(){var i=!1,t=e("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});return""==t.attr("style")?i=!1:f&&21<=parseInt(navigator.userAgent.split("/")[3],10)?i=!1:void 0!=t.attr("style")&&(i=!0),i},getSlideNumber:function(e,i,t){return(e-O[i]+t)%t},calcActiveOffset:function(e,i,t,r,l,s,n,o){l=!1,e=[];var a;for(i>t[0]&&(a=0),i<t[t.length-1]&&(a=s-1),s=0;s<t.length;s++)t[s]<=i&&t[s]>i-r&&(l||t[s]==i||(e[e.length]=t[s-1]),e[e.length]=t[s],l=!0);for(0==e.length&&(e[0]=t[t.length-1]),s=l=0;s<e.length;s++)n=Math.abs(i-e[s]),r>n&&(l=e[s],r=n);for(s=0;s<t.length;s++)l==t[s]&&(a=s);return a},changeSlide:function(i,t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,w,k){y.autoSlidePause(S);for(var C=0;C<l.length;C++)clearTimeout(l[C]);var N=Math.ceil(k.autoSlideTransTimer/10)+1,T=y.getSliderOffset(t,"x"),x=h[i],x=x-T,E=i-(p[S]+O[S]+v)%v;if(k.infiniteSlider){i=(i-O[S]+2*v)%v,C=!1,0==i&&2==v&&(i=v,h[i]=h[i-1]-e(r).eq(0).outerWidth(!0),C=!0);var x=h[i],x=x-T,W=[h[i]-e(t).width(),h[i]+e(t).width()];for(C&&h.splice(h.length-1,1),C=0;C<W.length;C++)Math.abs(W[C]-T)<Math.abs(x)&&(x=W[C]-T)}for(0>x&&-1==E?x+=e(t).width():x>0&&1==E&&(x-=e(t).width()),E=[],y.showScrollbar(k,s),C=0;N>=C;C++)W=C,W/=N,W--,W=T+x*(Math.pow(W,5)+1),E[E.length]=W;for(N=(i+O[S]+v)%v,C=T=0;C<E.length;C++)(0==C||1<Math.abs(E[C]-T)||C>=E.length-2)&&(T=E[C],l[C]=y.slowScrollHorizontalIntervalTimer(10*(C+1),t,r,E[C],s,n,o,a,d,c,i,f,h,g,v,u,S,w,N,k)),0==C&&""!=k.onSlideStart&&(x=(p[S]+O[S]+v)%v,k.onSlideStart(new y.args("start",k,t,e(t).children(":eq("+x+")"),x,i)));T=!1,k.infiniteSlider?N!=m[S]&&(T=!0):i!=p[S]&&(T=!0),T&&""!=k.onSlideComplete&&(l[l.length]=y.onSlideCompleteTimer(10*(C+1),k,t,e(t).children(":eq("+N+")"),N,S)),b[S]=l,y.hideScrollbar(k,l,C,E,s,n,o,d,c,S),y.autoSlide(t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,w,k)},changeOffset:function(i,t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,C,N){y.autoSlidePause(S);for(var T=0;T<l.length;T++)clearTimeout(l[T]);N.infiniteSlider||(i=i>-1*w[S]+C?-1*w[S]+C:i,i=i<-1*k[S]?-1*k[S]:i);var x=Math.ceil(N.autoSlideTransTimer/10)+1,E=y.getSliderOffset(t,"x"),T=(y.calcActiveOffset(N,i,h,o,O,v,p[S],S)+O[S]+v)%v,W=h.slice();if(N.snapToChildren&&!N.infiniteSlider)i=h[T];else if(N.infiniteSlider&&N.snapToChildren){for(;i>=W[0];)W.splice(0,0,W[v-1]+e(t).width()),W.splice(v,1);for(;i<=W[v-1];)W.splice(v,0,W[0]-e(t).width()),W.splice(0,1);T=y.calcActiveOffset(N,i,W,o,O,v,p[S],S),i=W[T]}var A=i-E;i=[];var M;for(y.showScrollbar(N,s),W=0;x>=W;W++)M=W,M/=x,M--,M=E+A*(Math.pow(M,5)+1),i[i.length]=M;for(x=(T+O[S]+v)%v,W=E=0;W<i.length;W++)(0==W||1<Math.abs(i[W]-E)||W>=i.length-2)&&(E=i[W],l[W]=y.slowScrollHorizontalIntervalTimer(10*(W+1),t,r,i[W],s,n,o,a,d,c,T,f,h,g,v,u,S,C,x,N)),0==W&&""!=N.onSlideStart&&(x=(p[S]+O[S]+v)%v,N.onSlideStart(new y.args("start",N,t,e(t).children(":eq("+x+")"),x,T)));E=!1,N.infiniteSlider?x!=m[S]&&(E=!0):T!=p[S]&&(E=!0),E&&""!=N.onSlideComplete&&(l[l.length]=y.onSlideCompleteTimer(10*(W+1),N,t,e(t).children(":eq("+x+")"),x,S)),b[S]=l,y.hideScrollbar(N,l,W,i,s,n,o,d,c,S),y.autoSlide(t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,C,N)},autoSlide:function(e,i,t,r,l,s,n,o,a,d,c,f,h,u,v,b,m){return g[h].autoSlide?(y.autoSlidePause(h),void(S[h]=setTimeout(function(){!m.infiniteSlider&&p[h]>c.length-1&&(p[h]-=v),y.changeSlide(p[h]+O[h]+1,e,i,t,r,l,s,n,o,a,d,c,f,h,u,v,b,m),y.autoSlide(e,i,t,r,l,s,n,o,a,d,c,f,h,u,v,b,m)},m.autoSlideTimer+m.autoSlideTransTimer))):!1},autoSlidePause:function(e){clearTimeout(S[e])},isUnselectable:function(i,t){return""!=t.unselectableSelector&&1==e(i).closest(t.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(e,i,t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,b,p,m){return setTimeout(function(){y.slowScrollHorizontalInterval(i,t,r,l,s,n,o,a,d,c,f,h,u,S,g,v,b,p,m)},e)},onSlideCompleteTimer:function(e,i,t,r,l,s){return setTimeout(function(){y.onSlideComplete(i,t,r,l,s)},e)},hideScrollbarIntervalTimer:function(e,i,t,r,l,s,n,o,a,d){return setTimeout(function(){y.hideScrollbarInterval(i,t,r,l,s,n,o,a,d)},e)},updateBackfaceVisibilityTimer:function(e,i,t,r,l){return setTimeout(function(){y.updateBackfaceVisibility(i,t,r,l)},e)},updateBackfaceVisibility:function(i,t,r,l){t=(p[t]+O[t]+r)%r;for(var s=[],n=0;n<2*l.hardwareAccelBuffer;n++){var o=y.mod(t+n-l.hardwareAccelBuffer,r);if("visible"==e(i).eq(o).css("-webkit-backface-visibility")){s[s.length]=o;var a=y.mod(o+2*l.hardwareAccelBuffer,r),d=y.mod(o-2*l.hardwareAccelBuffer,r);e(i).eq(o).css("-webkit-backface-visibility","hidden"),-1==s.indexOf(d)&&e(i).eq(d).css("-webkit-backface-visibility",""),-1==s.indexOf(a)&&e(i).eq(a).css("-webkit-backface-visibility","")}}},mod:function(e,i){var t=e%i;return 0>t?t+i:t},args:function(i,t,r,l,s,n){this.prevSlideNumber=void 0==e(r).parent().data("args")?void 0:e(r).parent().data("args").prevSlideNumber,this.prevSlideObject=void 0==e(r).parent().data("args")?void 0:e(r).parent().data("args").prevSlideObject,this.targetSlideNumber=n+1,this.targetSlideObject=e(r).children(":eq("+n+")"),this.slideChanged=!1,"load"==i?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==i?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==i?(this.slideChanged=!0,this.prevSlideNumber=void 0==e(r).parent().data("args")?t.startAtSlide:e(r).parent().data("args").currentSlideNumber,this.prevSlideObject=e(r).children(":eq("+this.prevSlideNumber+")")):"complete"==i&&(this.slideChanged=e(r).parent().data("args").slideChanged),this.settings=t,this.data=e(r).parent().data("iosslider"),this.sliderObject=r,this.sliderContainerObject=e(r).parent(),this.currentSlideObject=l,this.currentSlideNumber=s+1,this.currentSliderOffset=-1*y.getSliderOffset(r,"x")},preventDrag:function(e){e.preventDefault()},preventClick:function(e){return e.stopImmediatePropagation(),!1},enableClick:function(){return!0}};y.setBrowserInfo();var $={init:function(f,S){o=y.has3DTransform();var T=e.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1,keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5e3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},f);return void 0==S&&(S=this),e(S).each(function(o){function f(){y.autoSlidePause(S),gi=e(J).find("a"),vi=e(J).find("[onclick]"),bi=e(J).find("*"),e(H).css("width",""),e(H).css("height",""),e(J).css("width",""),Z=e(J).children().not("script").get(),ei=[],ii=[],T.responsiveSlides&&e(Z).css("width",""),k[S]=0,U=[],z=e(H).parent().width(),j=e(H).outerWidth(!0),T.responsiveSlideContainer&&(j=e(H).outerWidth(!0)>z?z:e(H).width()),e(H).css({position:T.stageCSS.position,top:T.stageCSS.top,left:T.stageCSS.left,overflow:T.stageCSS.overflow,zIndex:T.stageCSS.zIndex,webkitPerspective:1e3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:j}),e(T.unselectableSelector).css({cursor:"default"});for(var i=0;i<Z.length;i++){ei[i]=e(Z[i]).width(),ii[i]=e(Z[i]).outerWidth(!0);var t=ii[i];T.responsiveSlides&&(ii[i]>j?(t=j+-1*(ii[i]-ei[i]),ei[i]=t,ii[i]=j):t=ei[i],e(Z[i]).css({width:t})),e(Z[i]).css({overflow:"hidden",position:"absolute"}),U[i]=-1*k[S],k[S]=k[S]+t+(ii[i]-ei[i])}for(T.snapSlideCenter&&(X=.5*(j-ii[0]),T.responsiveSlides&&ii[0]>j&&(X=0)),C[S]=2*k[S],i=0;i<Z.length;i++)y.setSliderOffset(e(Z[i]),-1*U[i]+k[S]+X),U[i]-=k[S];if(!T.infiniteSlider&&!T.snapSlideCenter){for(i=0;i<U.length&&!(U[i]<=-1*(2*k[S]-j));i++)li=i;U.splice(li+1,U.length),U[U.length]=-1*(2*k[S]-j)}for(i=0;i<U.length;i++)_[i]=U[i];if(F&&(g[S].startAtSlide=g[S].startAtSlide>U.length?U.length:g[S].startAtSlide,T.infiniteSlider?(g[S].startAtSlide=(g[S].startAtSlide-1+ti)%ti,p[S]=g[S].startAtSlide):(g[S].startAtSlide=0>g[S].startAtSlide-1?U.length-1:g[S].startAtSlide,p[S]=g[S].startAtSlide-1),m[S]=p[S]),w[S]=k[S]+X,e(J).css({position:"relative",cursor:h,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:k[S]+"px"}),Si=k[S],k[S]=2*k[S]-j+2*X,(ai=j>Si+X||0==j?!0:!1)&&e(J).css({cursor:"default"}),D=e(H).parent().outerHeight(!0),R=e(H).height(),T.responsiveSlideContainer&&(R=R>D?D:R),e(H).css({height:R}),y.setSliderOffset(J,U[p[S]]),T.infiniteSlider&&!ai){for(i=y.getSliderOffset(e(J),"x"),t=(O[S]+ti)%ti*-1;0>t;){var r=0,l=y.getSliderOffset(e(Z[0]),"x");e(Z).each(function(e){y.getSliderOffset(this,"x")<l&&(l=y.getSliderOffset(this,"x"),r=e)});var s=w[S]+Si;y.setSliderOffset(e(Z)[r],s),w[S]=-1*U[1]+X,k[S]=w[S]+Si-j,U.splice(0,1),U.splice(U.length,0,-1*s+X),t++}for(;0<-1*U[0]-Si+X&&T.snapSlideCenter&&F;){var n=0,o=y.getSliderOffset(e(Z[0]),"x");e(Z).each(function(e){y.getSliderOffset(this,"x")>o&&(o=y.getSliderOffset(this,"x"),n=e)}),s=w[S]-ii[n],y.setSliderOffset(e(Z)[n],s),U.splice(0,0,-1*s+X),U.splice(U.length-1,1),w[S]=-1*U[0]+X,k[S]=w[S]+Si-j,O[S]--,p[S]++}for(;i<=-1*k[S];)r=0,l=y.getSliderOffset(e(Z[0]),"x"),e(Z).each(function(e){y.getSliderOffset(this,"x")<l&&(l=y.getSliderOffset(this,"x"),r=e)}),s=w[S]+Si,y.setSliderOffset(e(Z)[r],s),w[S]=-1*U[1]+X,k[S]=w[S]+Si-j,U.splice(0,1),U.splice(U.length,0,-1*s+X),O[S]++,p[S]--}return y.setSliderOffset(J,U[p[S]]),y.updateBackfaceVisibility(Z,S,ti,T),T.desktopClickDrag||e(J).css({cursor:"default"}),T.scrollbar&&(e("."+A).css({margin:T.scrollbarMargin,overflow:"hidden",display:"none"}),e("."+A+" ."+M).css({border:T.scrollbarBorder}),V=parseInt(e("."+A).css("marginLeft"))+parseInt(e("."+A).css("marginRight")),L=parseInt(e("."+A+" ."+M).css("borderLeftWidth"),10)+parseInt(e("."+A+" ."+M).css("borderRightWidth"),10),I=""!=T.scrollbarContainer?e(T.scrollbarContainer).width():j,q=j/Si*(I-V),T.scrollbarHide||(G=T.scrollbarOpacity),e("."+A).css({position:"absolute",left:0,width:I-V+"px",margin:T.scrollbarMargin}),"top"==T.scrollbarLocation?e("."+A).css("top","0"):e("."+A).css("bottom","0"),e("."+A+" ."+M).css({borderRadius:T.scrollbarBorderRadius,background:T.scrollbarBackground,height:T.scrollbarHeight,width:q-L+"px",minWidth:T.scrollbarHeight,border:T.scrollbarBorder,webkitPerspective:1e3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:G,filter:"alpha(opacity:"+100*G+")",boxShadow:T.scrollbarShadow}),y.setSliderOffset(e("."+A+" ."+M),Math.floor((-1*U[p[S]]-w[S]+X)/(k[S]-w[S]+X)*(I-V-q))),e("."+A).css({display:"block"}),P=e("."+A+" ."+M),B=e("."+A)),T.scrollbarDrag&&!ai&&e("."+A+" ."+M).css({cursor:h}),T.infiniteSlider&&(oi=(k[S]+j)/3),""!=T.navSlideSelector&&e(T.navSlideSelector).each(function(i){e(this).css({cursor:"pointer"}),e(this).unbind(ui).bind(ui,function(t){e(this).unbind("touchstart"==t.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ui=t.type+".iosSliderEvent",y.changeSlide(i,J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)})}),""!=T.navPrevSelector&&(e(T.navPrevSelector).css({cursor:"pointer"}),e(T.navPrevSelector).unbind(ui).bind(ui,function(i){e(this).unbind("touchstart"==i.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ui=i.type+".iosSliderEvent",i=(p[S]+O[S]+ti)%ti,(i>0||T.infiniteSlider)&&y.changeSlide(i-1,J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)})),""!=T.navNextSelector&&(e(T.navNextSelector).css({cursor:"pointer"}),e(T.navNextSelector).unbind(ui).bind(ui,function(i){e(this).unbind("touchstart"==i.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ui=i.type+".iosSliderEvent",i=(p[S]+O[S]+ti)%ti,(i<U.length-1||T.infiniteSlider)&&y.changeSlide(i+1,J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)})),T.autoSlide&&!ai&&""!=T.autoSlideToggleSelector&&(e(T.autoSlideToggleSelector).css({cursor:"pointer"}),e(T.autoSlideToggleSelector).unbind(ui).bind(ui,function(i){e(this).unbind("touchstart"==i.type?"click.iosSliderEvent":"touchstart.iosSliderEvent"),ui=i.type+".iosSliderEvent",di?(y.autoSlide(J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T),di=!1,e(T.autoSlideToggleSelector).removeClass("on")):(y.autoSlidePause(S),di=!0,e(T.autoSlideToggleSelector).addClass("on"))})),y.autoSlide(J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T),e(H).bind("mouseleave.iosSliderEvent",function(){return di?!0:void y.autoSlide(J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)}),e(H).bind("touchend.iosSliderEvent",function(){return di?!0:void y.autoSlide(J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)}),T.autoSlideHoverPause&&e(H).bind("mouseenter.iosSliderEvent",function(){y.autoSlidePause(S)}),e(H).data("iosslider",{obj:pi,settings:T,scrollerNode:J,slideNodes:Z,numberOfSlides:ti,centeredSlideOffset:X,sliderNumber:S,originalOffsets:_,childrenOffsets:U,sliderMax:k[S],scrollbarClass:M,scrollbarWidth:q,scrollbarStageWidth:I,stageWidth:j,scrollMargin:V,scrollBorder:L,infiniteSliderOffset:O[S],infiniteSliderWidth:oi,slideNodeOuterWidths:ii,shortContent:ai}),F=!1,!0}i++;var S=i,x=[];g[S]=e.extend({},T),w[S]=0,k[S]=0;var E=[0,0],W=[0,0],A="scrollbarBlock"+i,M="scrollbar"+i,P,B,I,q,z,D,X=0,H=e(this),j,R,V,L,Y,F=!0;o=-1;var U,_=[],G=0,K=0,Q=0,J=e(this).children(":first-child"),Z,ei,ii,ti=e(J).children().not("script").length,ri=!1,li=0,si=!1,ni=void 0,oi;O[S]=0;var ai=!1,di=!1;v[S]=!1;var ci,fi=!1,hi=!1,ui="touchstart.iosSliderEvent click.iosSliderEvent",Si,gi,vi,bi;N[S]=!1,b[S]=[],T.scrollbarDrag&&(T.scrollbar=!0,T.scrollbarHide=!1);var pi=e(this);if(void 0!=pi.data("iosslider"))return!0;if(14.2<=parseInt(e().jquery.split(".").join(""),10)?e(this).delegate("img","dragstart.iosSliderEvent",function(e){e.preventDefault()}):e(this).find("img").bind("dragstart.iosSliderEvent",function(e){e.preventDefault()}),T.infiniteSlider&&(T.scrollbar=!1),T.infiniteSlider&&1==ti&&(T.infiniteSlider=!1),T.scrollbar&&(""!=T.scrollbarContainer?e(T.scrollbarContainer).append("<div class = '"+A+"'><div class = '"+M+"'></div></div>"):e(J).parent().append("<div class = '"+A+"'><div class = '"+M+"'></div></div>")),!f())return!0;if(e(this).find("a").bind("mousedown",y.preventDrag),e(this).find("[onclick]").bind("click",y.preventDrag).each(function(){e(this).data("onclick",this.onclick)}),o=y.calcActiveOffset(T,y.getSliderOffset(e(J),"x"),U,j,O[S],ti,void 0,S),o=(o+O[S]+ti)%ti,o=new y.args("load",T,J,e(J).children(":eq("+o+")"),o,o),e(H).data("args",o),""!=T.onSliderLoaded&&T.onSliderLoaded(o),T.scrollbarPaging&&T.scrollbar&&!ai&&(e(B).css("cursor","pointer"),e(B).bind("click.iosSliderEvent",function(i){this==i.target&&(i.pageX>e(P).offset().left?$.nextPage(H):$.prevPage(H))})),(g[S].responsiveSlides||g[S].responsiveSlideContainer)&&(o=n?"orientationchange":"resize",e(window).bind(o+".iosSliderEvent-"+S,function(){if(!f())return!0;var i=e(H).data("args");""!=T.onSliderResize&&T.onSliderResize(i)})),!T.keyboardControls&&!T.tabToAdvance||ai||e(document).bind("keydown.iosSliderEvent",function(e){return a||d||(e=e.originalEvent),"INPUT"==e.target.nodeName||N[S]?!0:void(37==e.keyCode&&T.keyboardControls?(e.preventDefault(),e=(p[S]+O[S]+ti)%ti,(e>0||T.infiniteSlider)&&y.changeSlide(e-1,J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)):(39==e.keyCode&&T.keyboardControls||9==e.keyCode&&T.tabToAdvance)&&(e.preventDefault(),e=(p[S]+O[S]+ti)%ti,(e<U.length-1||T.infiniteSlider)&&y.changeSlide(e+1,J,Z,x,M,q,j,I,V,L,_,U,ii,S,oi,ti,X,T)))}),s||T.desktopClickDrag){var mi=!1,Oi=!1;o=e(J);var wi=e(J),ki=!1;T.scrollbarDrag&&(o=o.add(P),wi=wi.add(B)),e(o).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(i){if(e(window).one("scroll.iosSliderEvent",function(e){mi=!1}),mi)return!0;if(mi=!0,Oi=!1,e(wi).unbind("touchstart"==i.type?"mousedown.iosSliderEvent":"touchstart.iosSliderEvent"),N[S]||ai||(ki=y.isUnselectable(i.target,T)))return ri=mi=!1,!0;if(ci=e(this)[0]===e(P)[0]?P:J,a||d||(i=i.originalEvent),y.autoSlidePause(S),bi.unbind(".disableClick"),"touchstart"==i.type)eventX=i.touches[0].pageX,eventY=i.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(d)try{document.selection.empty()}catch(r){}else document.selection.empty();eventX=i.pageX,eventY=i.pageY,si=!0,ni=J,e(this).css({cursor:u})}for(E=[0,0],W=[0,0],t=0,ri=!1,i=0;i<x.length;i++)clearTimeout(x[i]);i=y.getSliderOffset(J,"x"),i>-1*w[S]+X+Si?(i=-1*w[S]+X+Si,y.setSliderOffset(e("."+M),i),e("."+M).css({width:q-L+"px"})):i<-1*k[S]&&(i=-1*k[S],y.setSliderOffset(e("."+M),I-V-q),e("."+M).css({width:q-L+"px"})),i=e(this)[0]===e(P)[0]?w[S]:0,K=-1*(y.getSliderOffset(this,"x")-eventX-i),y.getSliderOffset(this,"y"),E[1]=eventX,W[1]=eventY,hi=!1}),e(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(i){if(a||d||(i=i.originalEvent),N[S]||ai||ki||!mi)return!0;var s=0;if("touchmove"==i.type)eventX=i.touches[0].pageX,eventY=i.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(d)try{document.selection.empty()}catch(n){}else document.selection.empty();if(eventX=i.pageX,eventY=i.pageY,!si||!c&&("undefined"!=typeof i.webkitMovementX||"undefined"!=typeof i.webkitMovementY)&&0===i.webkitMovementY&&0===i.webkitMovementX)return!0}if(E[0]=E[1],E[1]=eventX,t=(E[1]-E[0])/2,W[0]=W[1],W[1]=eventY,r=(W[1]-W[0])/2,!ri){var o=(p[S]+O[S]+ti)%ti,o=new y.args("start",T,J,e(J).children(":eq("+o+")"),o,void 0);e(H).data("args",o),""!=T.onSlideStart&&T.onSlideStart(o)}if((r>T.verticalSlideLockThreshold||r<-1*T.verticalSlideLockThreshold)&&"touchmove"==i.type&&!ri&&(fi=!0),(t>T.horizontalSlideLockThreshold||t<-1*T.horizontalSlideLockThreshold)&&"touchmove"==i.type&&i.preventDefault(),(t>T.slideStartVelocityThreshold||t<-1*T.slideStartVelocityThreshold)&&(ri=!0),ri&&!fi){var o=y.getSliderOffset(J,"x"),f=e(ci)[0]===e(P)[0]?w[S]:X,h=e(ci)[0]===e(P)[0]?(w[S]-k[S]-X)/(I-V-q):1,u=e(ci)[0]===e(P)[0]?T.scrollbarElasticPullResistance:T.elasticPullResistance,g=T.snapSlideCenter&&e(ci)[0]===e(P)[0]?0:X,v=T.snapSlideCenter&&e(ci)[0]===e(P)[0]?X:0;if("touchmove"==i.type&&(Q!=i.touches.length&&(K=-1*o+eventX),Q=i.touches.length),T.infiniteSlider){if(o<=-1*k[S]){var b=e(J).width();if(o<=-1*C[S]){var x=-1*_[0];e(Z).each(function(i){y.setSliderOffset(e(Z)[i],x+X),i<U.length&&(U[i]=-1*x),x+=ii[i]}),K-=-1*U[0],w[S]=-1*U[0]+X,k[S]=w[S]+b-j,O[S]=0}else{var A=0,B=y.getSliderOffset(e(Z[0]),"x");e(Z).each(function(e){y.getSliderOffset(this,"x")<B&&(B=y.getSliderOffset(this,"x"),A=e)}),u=w[S]+b,y.setSliderOffset(e(Z)[A],u),w[S]=-1*U[1]+X,k[S]=w[S]+b-j,U.splice(0,1),U.splice(U.length,0,-1*u+X),O[S]++}}if(o>=-1*w[S]||o>=0)if(b=e(J).width(),o>=0)for(x=-1*_[0],e(Z).each(function(i){y.setSliderOffset(e(Z)[i],x+X),i<U.length&&(U[i]=-1*x),x+=ii[i]}),K+=-1*U[0],w[S]=-1*U[0]+X,k[S]=w[S]+b-j,O[S]=ti;0<-1*U[0]-b+X;){var z=0,D=y.getSliderOffset(e(Z[0]),"x");e(Z).each(function(e){y.getSliderOffset(this,"x")>D&&(D=y.getSliderOffset(this,"x"),z=e)}),u=w[S]-ii[z],y.setSliderOffset(e(Z)[z],u),U.splice(0,0,-1*u+X),U.splice(U.length-1,1),w[S]=-1*U[0]+X,k[S]=w[S]+b-j,O[S]--,p[S]++}else z=0,D=y.getSliderOffset(e(Z[0]),"x"),e(Z).each(function(e){y.getSliderOffset(this,"x")>D&&(D=y.getSliderOffset(this,"x"),z=e)}),u=w[S]-ii[z],y.setSliderOffset(e(Z)[z],u),U.splice(0,0,-1*u+X),U.splice(U.length-1,1),w[S]=-1*U[0]+X,k[S]=w[S]+b-j,O[S]--}else b=e(J).width(),o>-1*w[S]+X&&(s=(w[S]+-1*(K-f-eventX+g)*h-f)*u*-1/h),o<-1*k[S]&&(s=(k[S]+v+-1*(K-f-eventX)*h-f)*u*-1/h);y.setSliderOffset(J,-1*(K-f-eventX-s)*h-f+v),T.scrollbar&&(y.showScrollbar(T,M),l=Math.floor((K-eventX-s-w[S]+g)/(k[S]-w[S]+X)*(I-V-q)*h),o=q,0>=l?(o=q-L- -1*l,y.setSliderOffset(e("."+M),0),e("."+M).css({width:o+"px"})):l>=I-V-L-q?(o=I-V-L-l,y.setSliderOffset(e("."+M),l),e("."+M).css({width:o+"px"})):y.setSliderOffset(e("."+M),l)),"touchmove"==i.type&&(Y=i.touches[0].pageX),i=!1,s=y.calcActiveOffset(T,-1*(K-eventX-s),U,j,O[S],ti,void 0,S),o=(s+O[S]+ti)%ti,T.infiniteSlider?o!=m[S]&&(i=!0):s!=p[S]&&(i=!0),i&&(p[S]=s,m[S]=o,hi=!0,o=new y.args("change",T,J,e(J).children(":eq("+o+")"),o,o),e(H).data("args",o),""!=T.onSlideChange&&T.onSlideChange(o),y.updateBackfaceVisibility(Z,S,ti,T))}});var Ci=e(window);(d||a)&&(Ci=e(document)),e(o).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",function(e){if(e=e.originalEvent,Oi)return!1;if(Oi=!0,N[S]||ai||ki)return!0;if(0!=e.touches.length)for(var i=0;i<e.touches.length;i++)e.touches[i].pageX==Y&&y.slowScrollHorizontal(J,Z,x,M,t,r,q,j,I,V,L,_,U,ii,S,oi,ti,ci,hi,X,T);else y.slowScrollHorizontal(J,Z,x,M,t,r,q,j,I,V,L,_,U,ii,S,oi,ti,ci,hi,X,T);return mi=fi=!1,!0}),e(Ci).bind("mouseup.iosSliderEvent-"+S,function(i){if(ri?gi.unbind("click.disableClick").bind("click.disableClick",y.preventClick):gi.unbind("click.disableClick").bind("click.disableClick",y.enableClick),vi.each(function(){this.onclick=function(i){return ri?!1:void(e(this).data("onclick")&&e(this).data("onclick").call(this,i||window.event))},this.onclick=e(this).data("onclick")}),1.8<=parseFloat(e().jquery)?bi.each(function(){var i=e._data(this,"events");if(void 0!=i&&void 0!=i.click&&"iosSliderEvent"!=i.click[0].namespace){if(!ri)return!1;e(this).one("click.disableClick",y.preventClick);var i=e._data(this,"events").click,t=i.pop();i.splice(0,0,t)}}):1.6<=parseFloat(e().jquery)&&bi.each(function(){var i=e(this).data("events");if(void 0!=i&&void 0!=i.click&&"iosSliderEvent"!=i.click[0].namespace){if(!ri)return!1;e(this).one("click.disableClick",y.preventClick);var i=e(this).data("events").click,t=i.pop();i.splice(0,0,t)}}),!v[S]){if(ai)return!0;if(T.desktopClickDrag&&e(J).css({cursor:h}),T.scrollbarDrag&&e(P).css({cursor:h}),si=!1,void 0==ni)return!0;y.slowScrollHorizontal(ni,Z,x,M,t,r,q,j,I,V,L,_,U,ii,S,oi,ti,ci,hi,X,T),ni=void 0}mi=fi=!1})}})},destroy:function(i,t){return void 0==t&&(t=this),e(t).each(function(){var t=e(this),r=t.data("iosslider");if(void 0==r)return!1;void 0==i&&(i=!0),y.autoSlidePause(r.sliderNumber),v[r.sliderNumber]=!0,e(window).unbind(".iosSliderEvent-"+r.sliderNumber),e(document).unbind(".iosSliderEvent-"+r.sliderNumber),e(document).unbind("keydown.iosSliderEvent"),e(this).unbind(".iosSliderEvent"),e(this).children(":first-child").unbind(".iosSliderEvent"),e(this).children(":first-child").children().unbind(".iosSliderEvent"),e(r.settings.scrollbarBlockNode).unbind(".iosSliderEvent"),i&&(e(this).attr("style",""),e(this).children(":first-child").attr("style",""),e(this).children(":first-child").children().attr("style",""),e(r.settings.navSlideSelector).attr("style",""),e(r.settings.navPrevSelector).attr("style",""),e(r.settings.navNextSelector).attr("style",""),e(r.settings.autoSlideToggleSelector).attr("style",""),e(r.settings.unselectableSelector).attr("style","")),r.settings.scrollbar&&e(".scrollbarBlock"+r.sliderNumber).remove();for(var r=b[r.sliderNumber],l=0;l<r.length;l++)clearTimeout(r[l]);t.removeData("iosslider"),t.removeData("args")})},update:function(i){return void 0==i&&(i=this),e(i).each(function(){var i=e(this),t=i.data("iosslider");return void 0==t?!1:(t.settings.startAtSlide=i.data("args").currentSlideNumber,$.destroy(!1,this),1!=t.numberOfSlides&&t.settings.infiniteSlider&&(t.settings.startAtSlide=(p[t.sliderNumber]+1+O[t.sliderNumber]+t.numberOfSlides)%t.numberOfSlides),$.init(t.settings,this),i=new y.args("update",t.settings,t.scrollerNode,e(t.scrollerNode).children(":eq("+(t.settings.startAtSlide-1)+")"),t.settings.startAtSlide-1,t.settings.startAtSlide-1),e(t.stageNode).data("args",i),void(""!=t.settings.onSliderUpdate&&t.settings.onSliderUpdate(i)))})},addSlide:function(i,t){return this.each(function(){var r=e(this),l=r.data("iosslider");return void 0==l?!1:(0==e(l.scrollerNode).children().length?(e(l.scrollerNode).append(i),r.data("args").currentSlideNumber=1):l.settings.infiniteSlider?(1==t?e(l.scrollerNode).children(":eq(0)").before(i):e(l.scrollerNode).children(":eq("+(t-2)+")").after(i),-1>O[l.sliderNumber]&&p[l.sliderNumber]--,r.data("args").currentSlideNumber>=t&&p[l.sliderNumber]++):(t<=l.numberOfSlides?e(l.scrollerNode).children(":eq("+(t-1)+")").before(i):e(l.scrollerNode).children(":eq("+(t-2)+")").after(i),r.data("args").currentSlideNumber>=t&&r.data("args").currentSlideNumber++),r.data("iosslider").numberOfSlides++,void $.update(this))})},removeSlide:function(i){return this.each(function(){var t=e(this),r=t.data("iosslider");return void 0==r?!1:(e(r.scrollerNode).children(":eq("+(i-1)+")").remove(),p[r.sliderNumber]>i-1&&p[r.sliderNumber]--,t.data("iosslider").numberOfSlides--,void $.update(this))})},goToSlide:function(i,t,r){return void 0==r&&(r=this),e(r).each(function(){var r=e(this).data("iosslider");return void 0==r||r.shortContent?!1:(i=i>r.childrenOffsets.length?r.childrenOffsets.length-1:i-1,void 0!=t&&(r.settings.autoSlideTransTimer=t),void y.changeSlide(i,e(r.scrollerNode),e(r.slideNodes),b[r.sliderNumber],r.scrollbarClass,r.scrollbarWidth,r.stageWidth,r.scrollbarStageWidth,r.scrollMargin,r.scrollBorder,r.originalOffsets,r.childrenOffsets,r.slideNodeOuterWidths,r.sliderNumber,r.infiniteSliderWidth,r.numberOfSlides,r.centeredSlideOffset,r.settings))})},prevSlide:function(i){return this.each(function(){var t=e(this).data("iosslider");if(void 0==t||t.shortContent)return!1;var r=(p[t.sliderNumber]+O[t.sliderNumber]+t.numberOfSlides)%t.numberOfSlides;void 0!=i&&(t.settings.autoSlideTransTimer=i),(r>0||t.settings.infiniteSlider)&&y.changeSlide(r-1,e(t.scrollerNode),e(t.slideNodes),b[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings),p[t.sliderNumber]=r})},nextSlide:function(i){return this.each(function(){var t=e(this).data("iosslider");
if(void 0==t||t.shortContent)return!1;var r=(p[t.sliderNumber]+O[t.sliderNumber]+t.numberOfSlides)%t.numberOfSlides;void 0!=i&&(t.settings.autoSlideTransTimer=i),(r<t.childrenOffsets.length-1||t.settings.infiniteSlider)&&y.changeSlide(r+1,e(t.scrollerNode),e(t.slideNodes),b[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings),p[t.sliderNumber]=r})},prevPage:function(i,t){return void 0==t&&(t=this),e(t).each(function(){var t=e(this).data("iosslider");if(void 0==t)return!1;var r=y.getSliderOffset(t.scrollerNode,"x")+t.stageWidth;void 0!=i&&(t.settings.autoSlideTransTimer=i),y.changeOffset(r,e(t.scrollerNode),e(t.slideNodes),b[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings)})},nextPage:function(i,t){return void 0==t&&(t=this),e(t).each(function(){var t=e(this).data("iosslider");if(void 0==t)return!1;var r=y.getSliderOffset(t.scrollerNode,"x")-t.stageWidth;void 0!=i&&(t.settings.autoSlideTransTimer=i),y.changeOffset(r,e(t.scrollerNode),e(t.slideNodes),b[t.sliderNumber],t.scrollbarClass,t.scrollbarWidth,t.stageWidth,t.scrollbarStageWidth,t.scrollMargin,t.scrollBorder,t.originalOffsets,t.childrenOffsets,t.slideNodeOuterWidths,t.sliderNumber,t.infiniteSliderWidth,t.numberOfSlides,t.centeredSlideOffset,t.settings)})},lock:function(){return this.each(function(){var i=e(this).data("iosslider");return void 0==i||i.shortContent?!1:(e(i.scrollerNode).css({cursor:"default"}),void(N[i.sliderNumber]=!0))})},unlock:function(){return this.each(function(){var i=e(this).data("iosslider");return void 0==i||i.shortContent?!1:(e(i.scrollerNode).css({cursor:h}),void(N[i.sliderNumber]=!1))})},getData:function(){return this.each(function(){var i=e(this).data("iosslider");return void 0==i||i.shortContent?!1:i})},autoSlidePause:function(){return this.each(function(){var i=e(this).data("iosslider");return void 0==i||i.shortContent?!1:(g[i.sliderNumber].autoSlide=!1,y.autoSlidePause(i.sliderNumber),i)})},autoSlidePlay:function(){return this.each(function(){var i=e(this).data("iosslider");return void 0==i||i.shortContent?!1:(g[i.sliderNumber].autoSlide=!0,y.autoSlide(e(i.scrollerNode),e(i.slideNodes),b[i.sliderNumber],i.scrollbarClass,i.scrollbarWidth,i.stageWidth,i.scrollbarStageWidth,i.scrollMargin,i.scrollBorder,i.originalOffsets,i.childrenOffsets,i.slideNodeOuterWidths,i.sliderNumber,i.infiniteSliderWidth,i.numberOfSlides,i.centeredSlideOffset,i.settings),i)})}};e.fn.iosSlider=function(i){return $[i]?$[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void e.error("invalid method call!"):$.init.apply(this,arguments)}}(jQuery);