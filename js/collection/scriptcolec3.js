/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* jquery.nicescroll 3.1.2 InuYaksa*2012 MIT http://areaaperta.com/nicescroll */(function(e){var r=false,w=false,B=5E3,C=2E3,D=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return e.split("/").length>0?e.split("/").slice(0,-1).join("/")+"/":""}(),p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||false,q=window.cancelRequestAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||
window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||false,x=false,E=function(){if(x)return x;var e=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isie="all"in document&&"attachEvent"in e&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in e.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in
document)||document.documentMode==7);c.isie8=c.isie&&"documentMode"in document&&document.documentMode==8;c.isie9=c.isie&&"performance"in window&&document.documentMode>=9;c.isie10=c.isie&&"performance"in window&&document.documentMode>=10;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);if(c.isie9mobile)c.isie9=false;c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in e.style;c.iswebkit="WebkitAppearance"in e.style;c.ischrome="chrome"in window;
c.ischrome22=c.ischrome&&c.haspointerlock;c.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;c.hasmstouch=window.navigator.msPointerEnabled||false;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=false;c.hastransform=false;c.hastranslate3d=false;c.transitionstyle=false;c.hastransition=false;c.transitionend=false;for(var h=
["transform","msTransform","webkitTransform","MozTransform","OTransform"],i=0;i<h.length;i++)if(typeof e.style[h[i]]!="undefined"){c.trstyle=h[i];break}c.hastransform=c.trstyle!=false;if(c.hastransform)e.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(e.style[c.trstyle]);c.transitionstyle=false;c.prefixstyle="";c.transitionend=false;for(var h="transition,webkitTransition,MozTransition,OTransition,OTransition,msTransition,KhtmlTransition".split(","),b=",-webkit-,-moz-,-o-,-o,-ms-,-khtml-".split(","),
n="transitionend,webkitTransitionEnd,transitionend,otransitionend,oTransitionEnd,msTransitionEnd,KhtmlTransitionEnd".split(","),i=0;i<h.length;i++)if(h[i]in e.style){c.transitionstyle=h[i];c.prefixstyle=b[i];c.transitionend=n[i];break}c.hastransition=c.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)h=[];for(i=0;i<h.length;i++)if(b=h[i],e.style.cursor=b,e.style.cursor==b){h=b;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=
h;c.hasmousecapture="setCapture"in e;return x=c},F=function(j,c){function h(d,c,g){c=d.css(c);d=parseFloat(c);return isNaN(d)?(d=o[c]||0,g=d==3?g?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&d&&(d+=1),g?d:0):d}function i(d,c){var g=0,f=0,e=1;"wheelDeltaY"in d?(e=b.opt.mousescrollstep/48,g=Math.floor(d.wheelDeltaX*e),f=Math.floor(d.wheelDeltaY*e),c&&g==0&&f&&(g=f,f=0)):(e=d.detail?d.detail*-1:d.wheelDelta/40)&&(c?g=Math.floor(e*b.opt.mousescrollstep):f=Math.floor(e*
b.opt.mousescrollstep));g&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=g,b.synched("mousewheelx",function(){var d=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(d)}));f&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltay+=f,b.synched("mousewheely",function(){var d=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(d)}))}var b=this;this.version="3.1.4";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:false,zindex:100000,cursoropacitymin:0.2,cursoropacitymax:1,cursorcolor:"#bdbdbd",
cursorwidth:"15px",cursorborder:"",cursorborderradius:"1px",scrollspeed:60,mousescrollstep:40,touchbehavior:false,hwacceleration:true,usetransition:true,boxzoom:false,dblclickzoom:true,gesturezoom:true,grabcursorenabled:true,autohidemode:false,background:"#827b7d",iframeautoresize:true,cursorminheight:32,preservenativescrolling:true,railoffset:false,bouncescroll:true,spacebarenabled:true,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:true,horizrailenabled:true,railalign:"right",railvalign:"bottom",
enabletranslate3d:true,enablemousewheel:true,enablekeyboard:true,smoothscroll:true,sensitiverail:true,enablemouselockapi:true,cursorfixedheight:false};this.opt.snapbackspeed=80;if(j)for(var n in b.opt)typeof j[n]!="undefined"&&(b.opt[n]=j[n]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=b.opt.win!==false;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&
!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=false;this.isiframe=this.doc[0].nodeName=="IFRAME"&&this.win[0].nodeName=="IFRAME";this.istextarea=this.win[0].nodeName=="TEXTAREA";this.forcescreen=false;this.canshowonmouseevent=b.opt.autohidemode!="scroll";this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=
this.onmousedown=false;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observer=this.scrollmom=this.scrollrunning=false;do this.id="ascrail"+C++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.cursorfreezed=this.cursor=this.rail=false;this.visibility=true;this.hidden=this.locked=false;this.cursoractive=true;this.nativescrollingarea=false;this.events=[];this.saved={};this.delaylist={};this.synclist=
{};this.lastdeltay=this.lastdeltax=0;this.detected=E();var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=false;if(f.cantouch&&f.ischrome&&!f.isios&&!f.isandroid)this.istouchcapable=true,f.cantouch=false;if(f.cantouch&&f.ismozilla&&!f.isios)this.istouchcapable=true,f.cantouch=false;if(!b.opt.enablemouselockapi)f.hasmousecapture=false,f.haspointerlock=false;this.delayed=function(d,c,g,f){var e=b.delaylist[d],h=
(new Date).getTime();if(!f&&e&&e.tt)return false;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+g>h&&!e.tt)b.delaylist[d]={last:h+g,tt:setTimeout(function(){b.delaylist[d].tt=0;c.call()},g)};else if(!e||!e.tt)b.delaylist[d]={last:h,tt:0},setTimeout(function(){c.call()},0)};this.synched=function(d,c){b.synclist[d]=c;(function(){if(!b.onsync)p(function(){b.onsync=false;for(d in b.synclist){var c=b.synclist[d];c&&c.call(b);b.synclist[d]=false}}),b.onsync=true})();return d};this.unsynched=function(d){b.synclist[d]&&
(b.synclist[d]=false)};this.css=function(d,c){for(var g in c)b.saved.css.push([d,g,d.css(g)]),d.css(g,c[g])};this.scrollTop=function(d){return typeof d=="undefined"?b.getScrollTop():b.setScrollTop(d)};this.scrollLeft=function(d){return typeof d=="undefined"?b.getScrollLeft():b.setScrollLeft(d)};BezierClass=function(b,c,g,f,e,h,i){this.st=b;this.ed=c;this.spd=g;this.p1=f||0;this.p2=e||1;this.p3=h||0;this.p4=i||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*
b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return b<0?this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility",
"hidden");var m=function(){var d=b.doc.css(f.trstyle);return d&&d.substr(0,6)=="matrix"?d.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):false};this.getScrollTop=function(d){if(!d){if(d=m())return d.length==16?-d[13]:-d[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(d){if(!d){if(d=m())return d.length==16?-d[12]:-d[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};
this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");c.initUIEvent("scroll",false,true,window,1);b.dispatchEvent(c)}:document.fireEvent?function(b){var c=document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=true}:function(){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=d*-1+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},
this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=d*-1+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=d*-1+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=d*-1+"px";b.doc.css(f.trstyle,
"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=function(){return b.docscroll.scrollTop()},this.setScrollTop=function(d){return b.docscroll.scrollTop(d)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(d){return b.docscroll.scrollLeft(d)};this.getTarget=function(b){return!b?false:b.target?b.target:b.srcElement?b.srcElement:false};this.hasParent=function(b,c){if(!b)return false;for(var g=
b.target||b.srcElement||b||false;g&&g.id!=c;)g=g.parentNode||false;return g!==false};var o={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var d=b.win.offset(),c=b.viewport.offset();return{top:d.top-c.top+b.viewport.scrollTop(),left:d.left-c.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(d){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&
b.railh.css({width:b.win.innerWidth()});else{var c=b.getOffset(),g=c.top,f=c.left;g+=h(b.win,"border-top-width",true);b.win.outerWidth();b.win.innerWidth();f+=b.rail.align?b.win.outerWidth()-h(b.win,"border-right-width")-b.rail.width:h(b.win,"border-left-width");var e=b.opt.railoffset;e&&(e.top&&(g+=e.top),b.rail.align&&e.left&&(f+=e.left));b.locked||b.rail.css({top:g,left:f,height:d?d.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:g+1,left:b.rail.align==1?f-20:f+b.rail.width+4});if(b.railh&&!b.locked)g=
c.top,f=c.left,d=b.railh.align?g+h(b.win,"border-top-width",true)+b.win.innerHeight()-b.railh.height:g+h(b.win,"border-top-width",true),f+=h(b.win,"border-left-width"),b.railh.css({top:d,left:f,width:b.railh.width})}};this.doRailClick=function(d,c,g){var f;!(b.rail.drag&&b.rail.drag.pt!=1)&&!b.locked&&!b.rail.drag&&(b.cancelScroll(),b.cancelEvent(d),c?(c=g?b.doScrollLeft:b.doScrollTop,f=g?(d.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(d.pageY-b.rail.offset().top-b.cursorheight/2)*
b.scrollratio.y,c(f)):(c=g?b.doScrollLeftBy:b.doScrollBy,f=g?b.scroll.x:b.scroll.y,d=g?d.pageX-b.railh.offset().left:d.pageY-b.rail.offset().top,g=g?b.view.w:b.view.h,f>=d?c(g):c(-g)))};b.hasanimationframe=p;b.hascancelanimationframe=q;b.hasanimationframe?b.hascancelanimationframe||(q=function(){b.cancelAnimationFrame=true}):(p=function(b){return setTimeout(b,16)},q=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile)return true;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});
if(!b.ispage||!f.cantouch&&!f.isieold&&!f.isie9mobile){var d=b.docscroll;b.ispage&&(d=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(d,{"overflow-y":"hidden"});b.ispage&&f.isie7&&(b.doc[0].nodeName=="BODY"?b.css(e("html"),{"overflow-y":"hidden"}):b.doc[0].nodeName=="HTML"&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&!b.ispage&&!b.haswrapper&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,
height:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var g=e(document.createElement("div"));g.attr("id",b.id);var h,i,j=["left","right"],y;for(y in j)i=j[y],(h=b.opt.railpadding[i])?g.css("padding-"+i,h+"px"):b.opt.railpadding[i]=0;g.append(c);
g.width=Math.max(parseFloat(b.opt.cursorwidth),c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;g.css({width:g.width+"px",zIndex:b.ispage?b.opt.zindex:b.opt.zindex+2,background:b.opt.background});g.visibility=true;g.scrollable=true;g.align=b.opt.railalign=="left"?0:1;b.rail=g;c=b.rail.drag=false;if(b.opt.boxzoom&&!b.ispage&&!f.isieold&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=e(c),b.zoom.css({cursor:"pointer","z-index":b.opt.zindex,backgroundImage:"url("+D+
"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom))b.ongesturezoom=function(d){d.scale>1.5&&b.doZoomIn(d);d.scale<0.8&&b.doZoomOut(d);return b.cancelEvent(d)},b.bind(b.win,"gestureend",b.ongesturezoom);b.railh=false;if(b.opt.horizrailenabled){b.css(d,{"overflow-x":"hidden"});c=e(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var k=e(document.createElement("div"));k.attr("id",b.id+"-hr");k.height=1+Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());k.css({height:k.height+"px",zIndex:b.ispage?b.opt.zindex:b.opt.zindex+2,background:b.opt.background});k.append(c);
k.visibility=true;k.scrollable=true;k.align=b.opt.railvalign=="top"?0:1;b.railh=k;b.railh.drag=false}if(b.ispage)g.css({position:"fixed",top:"0px",height:"100%"}),g.align?g.css({right:"0px"}):g.css({left:"0px"}),b.body.append(g),b.railh&&(k.css({position:"fixed",left:"0px",width:"100%"}),k.align?k.css({bottom:"0px"}):k.css({top:"0px"}),b.body.append(k));else{if(b.ishwscroll)b.win.css("position")=="static"&&b.css(b.win,{position:"relative"}),d=b.win[0].nodeName=="HTML"?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",
top:1,right:0,"margin-right":g.width+4}),d.append(b.zoom)),g.css({position:"absolute",top:0}),g.align?g.css({right:0}):g.css({left:0}),d.append(g),k&&(k.css({position:"absolute",left:0,bottom:0}),k.align?k.css({bottom:0}):k.css({top:0}),d.append(k));else{b.isfixed=b.win.css("position")=="fixed";d=b.isfixed?"fixed":"absolute";if(!b.isfixed)b.viewport=b.getViewport(b.win[0]);if(b.viewport)b.body=b.viewport;g.css({position:d});b.zoom&&b.zoom.css({position:d});b.updateScrollBar();b.body.append(g);b.zoom&&
b.body.append(b.zoom);b.railh&&(k.css({position:d}),b.body.append(k))}f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"});f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true");f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"})}if(b.opt.autohidemode===false)b.autohidedom=false,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax});else if(b.opt.autohidemode===true){if(b.autohidedom=e().add(b.rail),
b.railh)b.autohidedom=b.autohidedom.add(b.railh)}else if(b.opt.autohidemode=="scroll"){if(b.autohidedom=e().add(b.rail),b.railh)b.autohidedom=b.autohidedom.add(b.railh)}else if(b.opt.autohidemode=="cursor"){if(b.autohidedom=e().add(b.cursor),b.railh)b.autohidedom=b.autohidedom.add(b.railh.cursor)}else if(b.opt.autohidemode=="hidden")b.autohidedom=false,b.hide(),b.locked=false;if(f.isie9mobile)b.scrollmom=new z(b),b.onmangotouch=function(){var d=b.getScrollTop(),c=b.getScrollLeft();if(d==b.scrollmom.lastscrolly&&
c==b.scrollmom.lastscrollx)return true;var g=d-b.mangotouch.sy,l=c-b.mangotouch.sx;if(Math.round(Math.sqrt(Math.pow(l,2)+Math.pow(g,2)))!=0){var f=g<0?-1:1,e=l<0?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);if(h-b.mangotouch.tm>80||b.mangotouch.dry!=f||b.mangotouch.drx!=e)b.scrollmom.stop(),b.scrollmom.reset(c,d),b.mangotouch.sy=d,b.mangotouch.ly=d,b.mangotouch.sx=c,b.mangotouch.lx=c,b.mangotouch.dry=f,b.mangotouch.drx=e,b.mangotouch.tm=h;else if(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-
l,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-d),Math.abs(b.mangotouch.lx-c)),b.mangotouch.ly=d,b.mangotouch.lx=c,g>2)b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=false;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)}},g=b.getScrollTop(),k=b.getScrollLeft(),b.mangotouch={sy:g,ly:g,dry:0,sx:k,lx:k,drx:0,lazy:false,tm:0},b.bind(b.docscroll,"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||
f.hasmstouch){b.scrollmom=new z(b);b.ontouchstart=function(d){if(d.pointerType&&d.pointerType!=2)return false;if(!b.locked){if(f.hasmstouch)for(var c=d.target?d.target:false;c;){var g=e(c).getNiceScroll();if(g.length>0&&g[0].me==b.me)break;if(g.length>0)return false;if(c.nodeName=="DIV"&&c.id==b.id)break;c=c.parentNode?c.parentNode:false}b.cancelScroll();if((c=b.getTarget(d))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return b.stopPropagation(d);if(!("clientX"in d)&&"changedTouches"in d)d.clientX=
d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY;if(b.forcescreen)g=d,d={original:d.original?d.original:d},d.clientX=g.screenX,d.clientY=g.screenY;b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2};b.opt.touchbehavior&&b.isiframe&&f.isie&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=false;b.lastmouseup=false;b.scrollmom.reset(d.clientX,d.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!c||
!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!b.ispage&&f.hasmousecapture&&c.setCapture(),b.cancelEvent(d);if(/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")))pc={tg:c,click:false},b.preventclick=pc}}};b.ontouchend=function(d){if(d.pointerType&&d.pointerType!=2)return false;if(b.rail.drag&&b.rail.drag.pt==2&&(b.scrollmom.doMomentum(),b.rail.drag=false,b.hasmoving&&(b.hasmoving=false,b.lastmouseup=true,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(d)};
var n=b.opt.touchbehavior&&b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(d,c){if(d.pointerType&&d.pointerType!=2)return false;if(b.rail.drag&&b.rail.drag.pt==2){if(f.cantouch&&typeof d.original=="undefined")return true;b.hasmoving=true;if(b.preventclick&&!b.preventclick.click)b.preventclick.click=b.preventclick.tg.onclick||false,b.preventclick.tg.onclick=b.onpreventclick;d=e.extend({original:d},d);if("changedTouches"in d)d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY;
if(b.forcescreen){var g=d,d={original:d.original?d.original:d};d.clientX=g.screenX;d.clientY=g.screenY}g=ofy=0;if(n&&!c){var l=b.win.position(),g=-l.left;ofy=-l.top}var h=d.clientY+ofy,i=b.rail.drag.st-(h-b.rail.drag.y);if(b.ishwscroll&&b.opt.bouncescroll)i<0?i=Math.round(i/2):i>b.page.maxh&&(i=b.page.maxh+Math.round((i-b.page.maxh)/2));else if(i<0&&(h=i=0),i>b.page.maxh)i=b.page.maxh,h=0;var s=d.clientX+g;if(b.railh&&b.railh.scrollable){var j=b.rail.drag.sl-(s-b.rail.drag.x);if(b.ishwscroll&&b.opt.bouncescroll)j<
0?j=Math.round(j/2):j>b.page.maxw&&(j=b.page.maxw+Math.round((j-b.page.maxw)/2));else if(j<0&&(s=j=0),j>b.page.maxw)j=b.page.maxw,s=0}b.synched("touchmove",function(){b.rail.drag&&b.rail.drag.pt==2&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(i),b.scrollmom.update(s,h),b.railh&&b.railh.scrollable?(b.setScrollLeft(j),b.showCursor(i,j)):b.showCursor(i),f.isie10&&document.selection.clear())});if(!f.ischrome&&!b.istouchcapable)return b.cancelEvent(d)}}}f.cantouch||b.opt.touchbehavior?
(b.onpreventclick=function(d){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=false,b.cancelEvent(d)},b.onmousedown=b.ontouchstart,b.onmouseup=b.ontouchend,b.onclick=f.isios?false:function(d){return b.lastmouseup?(b.lastmouseup=false,b.cancelEvent(d)):true},b.onmousemove=b.ontouchmove,f.cursorgrabvalue&&(b.css(b.ispage?b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}))):(b.onmousedown=function(d,c){if(!(b.rail.drag&&b.rail.drag.pt!=
1)){if(b.locked)return b.cancelEvent(d);b.cancelScroll();b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,pt:1,hr:!!c};var g=b.getTarget(d);!b.ispage&&f.hasmousecapture&&g.setCapture();if(b.isiframe&&!f.hasmousecapture)b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"});return b.cancelEvent(d)}},b.onmouseup=function(d){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),
b.rail.drag.pt==1))return b.rail.drag=false,b.cancelEvent(d)},b.onmousemove=function(d){if(b.rail.drag){if(b.rail.drag.pt==1){if(f.ischrome&&d.which==0)return b.onmouseup(d);b.cursorfreezed=true;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(d.clientX-b.rail.drag.x);if(b.scroll.x<0)b.scroll.x=0;var c=b.scrollvaluemaxw;if(b.scroll.x>c)b.scroll.x=c}else{b.scroll.y=b.rail.drag.sy+(d.clientY-b.rail.drag.y);if(b.scroll.y<0)b.scroll.y=0;c=b.scrollvaluemax;if(b.scroll.y>c)b.scroll.y=c}b.synched("mousemove",
function(){b.rail.drag&&b.rail.drag.pt==1&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*b.scrollratio.x)):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y)))});return b.cancelEvent(d)}}else b.checkarea=true});(f.cantouch||b.opt.touchbehavior)&&b.bind(b.win,"mousedown",b.onmousedown);f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,
"MSPointerMove",b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,
true)}),b.bind(b.cursorh,"mouseup",function(d){if(!(b.rail.drag&&b.rail.drag.pt==2))return b.rail.drag=false,b.hasmoving=false,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),b.cancelEvent(d)}));b.bind(document,"mouseup",b.onmouseup);f.hasmousecapture&&b.bind(b.win,"mouseup",b.onmouseup);b.bind(document,"mousemove",b.onmousemove);b.onclick&&b.bind(document,"click",b.onclick);!f.cantouch&&!b.opt.touchbehavior&&(b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();
b.rail.active=true}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=false;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.rail,"click",function(d){b.doRailClick(d,false,false)}),b.bind(b.rail,"dblclick",function(d){b.doRailClick(d,true,false)}),b.bind(b.cursor,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursor,"dblclick",function(d){b.cancelEvent(d)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=true}),b.jqbind(b.railh,
"mouseleave",function(){b.rail.active=false;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(d){b.doRailClick(d,false,true)}),b.bind(b.railh,"dblclick",function(d){b.doRailClick(d,true,true)}),b.bind(b.cursorh,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursorh,"dblclick",function(d){b.cancelEvent(d)}))),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=true}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=
false;b.rail.drag||b.hideCursor()})));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName)&&(b.win.attr("tabindex")||b.win.attr({tabindex:B++}),b.jqbind(b.win,"focus",function(d){r=b.getTarget(d).id||true;b.hasfocus=true;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",
function(){r=false;b.hasfocus=false}),b.jqbind(b.win,"mouseenter",function(d){w=b.getTarget(d).id||true;b.hasmousefocus=true;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){w=false;b.hasmousefocus=false}))}b.onkeypress=function(d){if(b.locked&&b.page.maxh==0)return true;var d=d?d:window.e,c=b.getTarget(d);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp))return true;if(b.hasfocus||b.hasmousefocus&&
!r||b.ispage&&!r&&!w){c=d.keyCode;if(b.locked&&c!=27)return b.cancelEvent(d);var g=d.ctrlKey||false,l=d.shiftKey||false,f=false;switch(c){case 38:case 63233:b.doScrollBy(72);f=true;break;case 40:case 63235:b.doScrollBy(-72);f=true;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=true);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=true);break;case 33:case 63276:b.doScrollBy(b.view.h);f=true;break;case 34:case 63277:b.doScrollBy(-b.view.h);
f=true;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=true;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=true;break;case 32:b.opt.spacebarenabled&&(l?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=true);break;case 27:b.zoomactive&&(b.doZoom(),f=true)}if(f)return b.cancelEvent(d)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.resize);b.bind(window,
"orientationchange",b.resize);b.bind(window,"load",b.resize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var m=b.win.attr("style"),g=parseFloat(b.win.css("width"))+1;b.win.css("width",g);b.synched("chromefix",function(){b.win.attr("style",m)})}b.onAttributeChange=function(){b.lazyResize()};if(!b.ispage&&!b.haswrapper)"WebKitMutationObserver"in window?(b.observer=new WebKitMutationObserver(function(d){d.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],{attributes:true,subtree:false})):(b.bind(b.win,
f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.resize);b.resize()}if(this.doc[0].nodeName=="IFRAME"){var A=function(){b.iframexd=false;try{var d="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(c){b.iframexd=true,d=false}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),
true;b.forcescreen=true;if(b.isiframe)b.iframe={doc:e(d),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body);if(!f.isios&&b.opt.iframeautoresize&&!b.isiframe){b.win.scrollTop(0);b.doc.height("");var g=Math.max(d.getElementsByTagName("html")[0].scrollHeight,d.body.scrollHeight);b.doc.height(g)}b.resize();
f.isie7&&b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(d,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(d,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(d,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(d,"mousedown",b.onmousedown),b.bind(d,"mousemove",function(d){b.onmousemove(d,true)}),f.cursorgrabvalue&&b.css(e(d.body),
{cursor:f.cursorgrabvalue});b.bind(d,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(d,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(d,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&this.doc[0].readyState=="complete"&&setTimeout(function(){A.call(b.doc[0],false)},500);b.bind(this.doc,"load",A)}};this.showCursor=function(d,c){if(b.cursortimeout)clearTimeout(b.cursortimeout),b.cursortimeout=0;if(b.rail){if(b.autohidedom)b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),b.cursoractive=
true;if(typeof d!="undefined"&&d!==false)b.scroll.y=Math.round(d*1/b.scrollratio.y);if(typeof c!="undefined")b.scroll.x=Math.round(c*1/b.scrollratio.x);b.cursor.css({height:b.cursorheight,top:b.scroll.y});if(b.cursorh)!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=true;b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=function(d){if(!b.cursortimeout&&
b.rail&&b.autohidedom)b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=false;b.cursortimeout=0},d||400)};this.noticeCursor=function(d,c,g){b.showCursor(c,g);b.rail.active||b.hideCursor(d)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,
document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(d,c){if(!b.win)return false;if(!b.haswrapper&&!b.ispage)if(b.win.css("display")=="none")return b.visibility&&b.hideRail().hideRailHr(),false;
else!b.hidden&&!b.visibility&&b.showRail().showRailHr();var g=b.page.maxh,f=b.page.maxw,e=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=c?c:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==g&&b.page.maxw==f&&b.view.w==e)if(b.ispage)return b;else{g=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==g.top&&f.left==g.left))return b;
b.lastposition=g}b.page.maxh==0?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=false):b.rail.scrollable=true;b.page.maxw==0?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=false):b.railh.scrollable=true;b.locked=b.page.maxh==0&&b.page.maxw==0;if(b.locked)return b.ispage||b.updateScrollBar(b.view),false;!b.hidden&&!b.visibility?b.showRail().showRailHr():!b.hidden&&
!b.railh.visibility&&b.showRailHr();b.istextarea&&b.win.css("resize")&&b.win.css("resize")!="none"&&(b.view.h-=20);b.ispage||b.updateScrollBar(b.view);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,
b.cursorwidth);b.scrollvaluemax=b.view.h-b.cursorheight-b.cursor.hborder;if(b.railh)b.railh.width=b.page.maxh>0?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder;b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&
b.getScrollTop()==0&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=function(){b.delayed("resize",b.onResize,30);return b};this.lazyResize=function(){b.delayed("resize",b.resize,250)};this._bind=function(d,c,g,f){b.events.push({e:d,n:c,f:g,b:f,q:false});d.addEventListener?d.addEventListener(c,g,f||false):d.attachEvent?d.attachEvent("on"+c,g):d["on"+c]=g};this.jqbind=function(d,c,g){b.events.push({e:d,n:c,f:g,q:true});e(d).bind(c,g)};this.bind=function(d,c,g,e){var h="jquery"in
d?d[0]:d;h.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&b._bind(h,c=="mousedown"?"touchstart":c=="mouseup"?"touchend":"touchmove",function(b){if(b.touches){if(b.touches.length<2){var d=b.touches.length?b.touches[0]:b;d.original=b;g.call(this,d)}}else if(b.changedTouches)d=b.changedTouches[0],d.original=b,g.call(this,d)},e||false),b._bind(h,c,g,e||false),c=="mousewheel"&&b._bind(h,"DOMMouseScroll",g,e||false),f.cantouch&&c=="mouseup"&&b._bind(h,"touchcancel",g,e||false)):b._bind(h,
c,function(d){if((d=d||window.event||false)&&d.srcElement)d.target=d.srcElement;return g.call(h,d)===false||e===false?b.cancelEvent(d):true})};this._unbind=function(b,c,g,f){b.removeEventListener?b.removeEventListener(c,g,f):b.detachEvent?b.detachEvent("on"+c,g):b["on"+c]=false};this.unbindAll=function(){for(var d=0;d<b.events.length;d++){var c=b.events[d];c.q?c.e.unbind(c.n,c.f):b._unbind(c.e,c.n,c.f,c.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||false;if(!b)return false;
b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=true;b.cancel=true;return b.returnValue=false};this.stopPropagation=function(b){b=b.original?b.original:b?b:window.event||false;if(!b)return false;if(b.stopPropagation)return b.stopPropagation();if(b.cancelBubble)b.cancelBubble=true;return false};this.showRail=function(){if(b.page.maxh!=0&&(b.ispage||b.win.css("display")!="none"))b.visibility=true,b.rail.visibility=
true,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(b.page.maxw!=0&&(b.ispage||b.win.css("display")!="none"))b.railh.visibility=true,b.railh.css("display","block");return b};this.hideRail=function(){b.visibility=false;b.rail.visibility=false;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=false;b.railh.css("display","none");return b};this.show=function(){b.hidden=false;b.locked=false;return b.showRail().showRailHr()};
this.hide=function(){b.hidden=true;b.locked=true;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();b.unbindAll();b.observer!==false&&b.observer.disconnect();b.events=[];if(b.cursor)b.cursor.remove(),b.cursor=null;if(b.cursorh)b.cursorh.remove(),b.cursorh=null;if(b.rail)b.rail.remove(),b.rail=null;if(b.railh)b.railh.remove(),b.railh=null;if(b.zoom)b.zoom.remove(),b.zoom=
null;for(var d=0;d<b.saved.css.length;d++){var c=b.saved.css[d];c[0].css(c[1],typeof c[2]=="undefined"?"":c[2])}b.saved=false;b.me.data("__nicescroll","");b.me=null;b.doc=null;b.docscroll=null;b.win=null;return b};this.scrollstart=function(d){this.onscrollstart=d;return b};this.scrollend=function(d){this.onscrollend=d;return b};this.scrollcancel=function(d){this.onscrollcancel=d;return b};this.zoomin=function(d){this.onzoomin=d;return b};this.zoomout=function(d){this.onzoomout=d;return b};this.isScrollable=
function(b){for(b=b.target?b.target:b;b&&b.nodeType==1&&!/BODY|HTML/.test(b.nodeName);){var c=e(b);if(/scroll|auto/.test(c.css("overflowY")||c.css("overflowX")||c.css("overflow")||""))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:false}return false};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:false;b&&b.nodeType==1&&!/BODY|HTML/.test(b.nodeName);){var c=e(b);if(/scroll|auto/.test(c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"")&&b.clientHeight!=
b.scrollHeight)return c;if(c.getNiceScroll().length>0)return c;b=b.parentNode?b.parentNode:false}return false};this.onmousewheel=function(d){if(b.locked)return true;if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(d):true;if(b.opt.preservenativescrolling&&b.checkarea)b.checkarea=false,b.nativescrollingarea=b.isScrollable(d);if(b.nativescrollingarea)return true;if(b.locked)return b.cancelEvent(d);if(b.rail.drag)return b.cancelEvent(d);i(d,false);return b.cancelEvent(d)};this.onmousewheelhr=
function(d){if(b.locked||!b.railh.scrollable)return true;if(b.opt.preservenativescrolling&&b.checkarea)b.checkarea=false,b.nativescrollingarea=b.isScrollable(d);if(b.nativescrollingarea)return true;if(b.locked)return b.cancelEvent(d);if(b.rail.drag)return b.cancelEvent(d);i(d,true);return b.cancelEvent(d)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=false;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=
function(d){var c=Math.round(b.opt.scrollspeed*10),d=Math.min(c,Math.round(d/20*b.opt.scrollspeed));return d>20?d:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(d,c){var g=c?d>20?d:0:b.getTransitionSpeed(d),e=g?f.prefixstyle+"transform "+g+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=e)b.lasttransitionstyle=e,b.doc.css(f.transitionstyle,e);return g},this.doScrollLeft=function(d,c){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();
b.doScrollPos(d,g,c)},this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,e,g){var h=b.getScrollTop(),i=b.getScrollLeft();((b.newscrolly-h)*(e-h)<0||(b.newscrollx-i)*(c-i)<0)&&b.cancelScroll();if(b.opt.bouncescroll==false){if(e<0)e=0;else if(e>b.page.maxh)e=b.page.maxh;if(c<0)c=0;else if(c>b.page.maxw)c=b.page.maxw}if(c==b.newscrollx&&e==b.newscrolly)return false;b.newscrolly=e;b.newscrollx=c;b.newscrollspeed=g||false;
if(b.timer)return false;b.timer=setTimeout(function(){var g=b.getScrollTop(),h=b.getScrollLeft(),i,j;i=c-h;j=e-g;i=Math.round(Math.sqrt(Math.pow(i,2)+Math.pow(j,2)));i=b.prepareTransition(b.newscrollspeed?b.newscrollspeed:i);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);if(i>0){!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:g},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:i});if(f.transitionend){if(!b.scrollendtrapped)b.scrollendtrapped=
true,b.bind(b.doc,f.transitionend,b.onScrollEnd,false)}else b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,i);b.timerscroll={bz:new BezierClass(g,b.newscrolly,i,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,i,0,0,0.58,1)};if(!b.cursorfreezed)b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)}b.synched("doScroll-set",function(){b.timer=0;if(b.scrollendtrapped)b.scrollrunning=true;b.setScrollTop(b.newscrolly);
b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return true;var c=b.getScrollTop(),e=b.getScrollLeft();b.scrollrunning=false;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=false;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=false;b.cursorfreezed=false;
b.showCursor(c,e);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=false;b.prepareTransition(0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=false;var c=b.getScrollTop(),e=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.noticeCursor(false,c,e);b.cursorfreezed=false;if(c<0)c=0;else if(c>b.page.maxh)c=b.page.maxh;if(e<0)e=0;else if(e>b.page.maxw)e=b.page.maxw;if(c!=b.newscrolly||
e!=b.newscrollx)return b.doScrollPos(e,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:e,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=false}):(this.doScrollLeft=function(c){var f=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,f)},this.doScrollTop=function(c){var f=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(f,c)},this.doScrollPos=function(c,f){function g(){if(b.cancelAnimationFrame)return true;b.scrollrunning=
true;if(n=1-n)return b.timer=p(g)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,f=d-sy;if(f<0&&d<b.newscrolly||f>0&&d>b.newscrolly)d=b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var e=sx=b.getScrollLeft();if(b.dst.ax){e=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;f=e-sx;if(f<0&&e<b.newscrollx||f>0&&e>b.newscrollx)e=b.newscrollx;b.setScrollLeft(e);e==b.newscrollx&&(c+=1)}else c+=1;if(c==2){b.timer=
0;b.cursorfreezed=false;b.bzscroll=false;b.scrollrunning=false;if(d<0)d=0;else if(d>b.page.maxh)d=b.page.maxh;if(e<0)e=0;else if(e>b.page.maxw)e=b.page.maxw;e!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(e,d):b.onscrollend&&b.onscrollend.call(b,{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})}else b.timer=p(g)||1}f=typeof f=="undefined"||f===false?b.getScrollTop(true):f;if(b.timer&&b.newscrolly==f&&b.newscrollx==c)return true;b.timer&&q(b.timer);b.timer=0;var e=b.getScrollTop(),
h=b.getScrollLeft();((b.newscrolly-e)*(f-e)<0||(b.newscrollx-h)*(c-h)<0)&&b.cancelScroll();b.newscrolly=f;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)if(b.newscrolly<0)b.newscrolly=0;else if(b.newscrolly>b.page.maxh)b.newscrolly=b.page.maxh;if(!b.bouncescroll||!b.railh.visibility)if(b.newscrollx<0)b.newscrollx=0;else if(b.newscrollx>b.page.maxw)b.newscrollx=b.page.maxw;b.dst={};b.dst.x=c-h;b.dst.y=f-e;b.dst.px=h;b.dst.py=e;var i=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,
2)));b.dst.ax=b.dst.x/i;b.dst.ay=b.dst.y/i;var j=0,k=i;if(b.dst.x==0)j=e,k=f,b.dst.ay=1,b.dst.py=0;else if(b.dst.y==0)j=h,k=c,b.dst.ax=1,b.dst.px=0;i=b.getTransitionSpeed(i);b.bzscroll=i>0?b.bzscroll?b.bzscroll.update(k,i):new BezierClass(j,k,i,0,1,0,1):false;if(!b.timer){(e==b.page.maxh&&f>=b.page.maxh||h==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var n=1;b.cancelAnimationFrame=false;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:e},
request:{x:c,y:f},end:{x:b.newscrollx,y:b.newscrolly},speed:i});g();(e==b.page.maxh&&f>=e||h==b.page.maxw&&c>=h)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&q(b.timer);b.timer=0;b.bzscroll=false;b.scrollrunning=false;return b}):(this.doScrollLeft=function(c,f){var g=b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f){var g=c>b.page.maxw?b.page.maxw:c;g<0&&(g=0);var e=f>
b.page.maxh?b.page.maxh:f;e<0&&(e=0);b.synched("scroll",function(){b.setScrollTop(e);b.setScrollLeft(g)})},this.cancelScroll=function(){});this.doScrollBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(true))-c;if(b.bouncescroll){var e=Math.round(b.view.h/2);g<-e?g=-e:g>b.page.maxh+e&&(g=b.page.maxh+e)}b.cursorfreezed=false;py=b.getScrollTop(true);if(g<0&&py<=0)return b.noticeCursor();else if(g>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),
b.noticeCursor();b.doScrollTop(g)};this.doScrollLeftBy=function(c,f){var e=0,e=f?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(true))-c;if(b.bouncescroll){var h=Math.round(b.view.w/2);e<-h?e=-h:e>b.page.maxw+h&&(e=b.page.maxw+h)}b.cursorfreezed=false;px=b.getScrollLeft(true);if(e<0&&px<=0)return b.noticeCursor();else if(e>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(e)};this.doScrollTo=function(c,e){e&&Math.round(c*b.scrollratio.y);b.cursorfreezed=
false;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(false,c)};b.onscroll=function(){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));if(b.railh)b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x));b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=true;b.zoomrestore={style:{}};var h="position,top,left,zIndex,backgroundColor,marginTop,marginBottom,marginLeft,marginRight".split(","),
g=b.win[0].style,i;for(i in h){var j=h[i];b.zoomrestore.style[j]=typeof g[j]!="undefined"?g[j]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-b.win.height()};if(f.isios4)b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0);b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":b.opt.zindex+100,margin:"0px"});h=b.win.css("backgroundColor");
(h==""||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":b.opt.zindex+110});b.zoom.css({"z-index":b.opt.zindex+112});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=function(c){if(b.zoomactive)return b.zoomactive=false,b.win.css("margin",""),b.win.css(b.zoomrestore.style),f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.ispage?
b.opt.zindex:b.opt.zindex+2}),b.zoom.css({"z-index":b.opt.zindex}),b.zoomrestore=false,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();console.log(c);b.setScrollTop(Math.min(b.page.maxh,
c))}};this.init();e.nicescroll.push(this)},z=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=false;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,i){c.stop();var b=c.time();c.steptime=0;c.lasttime=b;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=i;c.lastscrollx=-1;c.lastscrolly=-1};this.update=function(e,i){var b=c.time();
c.steptime=b-c.lasttime;c.lasttime=b;var b=i-c.lasty,j=e-c.lastx,f=c.nc.getScrollTop(),m=c.nc.getScrollLeft();f+=b;m+=j;c.snapx=m<0||m>c.nc.page.maxw;c.snapy=f<0||f>c.nc.page.maxh;c.speedx=j;c.speedy=b;c.lastx=e;c.lasty=i};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,i){var b=false;if(i<0)i=0,b=true;else if(i>c.nc.page.maxh)i=c.nc.page.maxh,b=true;if(e<0)e=0,b=true;else if(e>c.nc.page.maxw)e=
c.nc.page.maxw,b=true;b&&c.nc.doScrollPos(e,i,c.nc.opt.snapbackspeed)};this.doMomentum=function(e){var i=c.time(),b=e?i+e:c.lasttime,e=c.nc.getScrollLeft(),j=c.nc.getScrollTop(),f=c.nc.page.maxh,m=c.nc.page.maxw;c.speedx=m>0?Math.min(60,c.speedx):0;c.speedy=f>0?Math.min(60,c.speedy):0;b=b&&i-b<=50;if(j<0||j>f||e<0||e>m)b=false;e=c.speedx&&b?c.speedx:false;if(c.speedy&&b&&c.speedy||e){var o=Math.max(16,c.steptime);o>50&&(e=o/50,c.speedx*=e,c.speedy*=e,o=50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();
c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var d=c.lastscrollx,l=c.lastscrolly,g=function(){var b=c.time()-i>600?0.04:0.02;if(c.speedx&&(d=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=d,d<0||d>m))b=0.1;if(c.speedy&&(l=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=l,l<0||l>f))b=0.1;c.demulxy=Math.min(1,c.demulxy+b);c.nc.synched("domomentum2d",function(){if(c.speedx)c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=d,c.nc.setScrollLeft(d);
if(c.speedy)c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=l,c.nc.setScrollTop(l);c.timer||(c.nc.hideCursor(),c.doSnapy(d,l))});c.demulxy<1?c.timer=setTimeout(g,o):(c.stop(),c.nc.hideCursor(),c.doSnapy(d,l))};g()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},t=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(j){var c=e.data(j,"__nicescroll")||false;return c&&c.ishwscroll?c.getScrollTop():t.call(j)},set:function(j,c){var h=e.data(j,"__nicescroll")||false;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):
t.call(j,c);return this}};e.fn.scrollTop=function(j){if(typeof j=="undefined"){var c=this[0]?e.data(this[0],"__nicescroll")||false:false;return c&&c.ishwscroll?c.getScrollTop():t.call(this)}else return this.each(function(){var c=e.data(this,"__nicescroll")||false;c&&c.ishwscroll?c.setScrollTop(parseInt(j)):t.call(e(this),j)})};var u=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(j){var c=e.data(j,"__nicescroll")||false;return c&&c.ishwscroll?c.getScrollLeft():u.call(j)},set:function(j,c){var h=
e.data(j,"__nicescroll")||false;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):u.call(j,c);return this}};e.fn.scrollLeft=function(j){if(typeof j=="undefined"){var c=this[0]?e.data(this[0],"__nicescroll")||false:false;return c&&c.ishwscroll?c.getScrollLeft():u.call(this)}else return this.each(function(){var c=e.data(this,"__nicescroll")||false;c&&c.ishwscroll?c.setScrollLeft(parseInt(j)):u.call(e(this),j)})};var v=function(j){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var b=
0;b<c.length;b++)e.call(c[b]);return c};this.push=function(e){c[c.length]=e;c.length++};this.eq=function(e){return c[e]};if(j)for(a=0;a<j.length;a++){var h=e.data(j[a],"__nicescroll")||false;h&&(this[this.length]=h,this.length++)}return this};(function(e,c,h){for(var i=0;i<c.length;i++)h(e,c[i])})(v.prototype,"show,hide,toggle,onResize,resize,remove,stop,doScrollPos".split(","),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,e)})}});e.fn.getNiceScroll=
function(j){return typeof j=="undefined"?new v(this):e.data(this[j],"__nicescroll")||false};e.extend(e.expr[":"],{nicescroll:function(j){return e.data(j,"__nicescroll")?true:false}});e.fn.niceScroll=function(j,c){typeof c=="undefined"&&typeof j=="object"&&!("jquery"in j)&&(c=j,j=false);var h=new v;typeof c=="undefined"&&(c={});if(j)c.doc=e(j),c.win=e(this);var i=!("doc"in c);if(!i&&!("win"in c))c.win=e(this);this.each(function(){var b=e(this).data("__nicescroll")||false;if(!b)c.doc=i?e(this):c.doc,
b=new F(c,e(this)),e(this).data("__nicescroll",b);h.push(b)});return h.length==1?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};if(!e.nicescroll)e.nicescroll=new v})(jQuery);

/**
 * jquery.slimmenu.js
 * http://adnantopal.github.io/slimmenu/
 * Author: @adnantopal
 * Copyright 2013, Adnan Topal (atopal.com)
 * Licensed under the MIT license.
 */
;(function ( $, window, document, undefined )
{
    var pluginName = "slimmenu",
        defaults =
        {
            resizeWidth: '768',
            collapserTitle: 'Main Menu',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;&nbsp;'
        };

    function Plugin( element, options )
    {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var $options = this.options,
                $menu = this.$elem,
                $collapser = '<div class="menu-collapser">'+$options.collapserTitle+'<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>',
                $menu_collapser;

            $menu.before($collapser);
            $menu_collapser = $menu.prev('.menu-collapser');

            $menu.on('click', '.sub-collapser', function(e)
            {
                e.preventDefault();
                e.stopPropagation();

                var $parent_li = $(this).closest('li');

                if ($(this).hasClass('expanded'))
                {
                    $(this).removeClass('expanded');
                    $(this).find('i').html('&#9660;');
                    $parent_li.find('>ul').slideUp($options.animSpeed, $options.easingEffect);
                }
                else
                {
                    $(this).addClass('expanded');
                    $(this).find('i').html('&#9650;');
                    $parent_li.find('>ul').slideDown($options.animSpeed, $options.easingEffect);
                }
            });

            $menu_collapser.on('click', '.collapse-button', function(e)
            {
                e.preventDefault();
                $menu.slideToggle($options.animSpeed, $options.easingEffect);
            });

            this.resizeMenu({ data: { el: this.element, options: this.options } });
            $(window).on('resize', { el: this.element, options: this.options }, this.resizeMenu);
        },

        resizeMenu: function(event)
        {
            var $window = $(window),
                $options = event.data.options,
                $menu = $(event.data.el),
                $menu_collapser = $('body').find('.menu-collapser');

            $menu.find('li').each(function()
            {
                if ($(this).has('ul').length)
                {
                    if ($(this).has('.sub-collapser').length)
                    {
                        $(this).children('.sub-collapser i').html('&#9660;');
                    }
                    else
                    {
                        $(this).append('<span class="sub-collapser"><i>&#9660;</i></span>');
                    }
                }

                $(this).children('ul').hide();
                $(this).find('.sub-collapser').removeClass('expanded').children('i').html('&#9660;');
            });

            if ($options.resizeWidth >= $window.width())
            {
                if ($options.indentChildren)
                {
                    $menu.find('ul').each(function()
                    {
                        var $depth = $(this).parents('ul').length;
                        if (!$(this).children('li').children('a').has('i').length)
                        {
                            $(this).children('li').children('a').prepend(Plugin.prototype.indent($depth, $options));
                        }
                    });
                }

                $menu.find('li').has('ul').off('mouseenter mouseleave');
                $menu.addClass('collapsed').hide();
                $menu_collapser.show();
            }
            else
            {
                $menu.find('li').has('ul').on('mouseenter', function()
                {
                    $(this).find('>ul').stop().slideDown($options.animSpeed, $options.easingEffect);
                })
                .on('mouseleave', function()
                {
                    $(this).find('>ul').stop().slideUp($options.animSpeed, $options.easingEffect);
                });

                $menu.find('li > a > i').remove();
                $menu.removeClass('collapsed').show();
                $menu_collapser.hide();
            }
        },

        indent: function(num, options)
        {
            var $indent = '';
            for (var i=0; i < num; i++)
            {
                $indent += options.childrenIndenter;
            }
            return '<i>'+$indent+'</i>';
        }
    };

    $.fn[pluginName] = function ( options )
    {
        return this.each(function ()
        {
            if (!$.data(this, "plugin_" + pluginName))
            {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ?�© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ?�© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
 * cbpAnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=(function(){var b=document.documentElement,g=document.querySelector(".cbp-af-header"),e=false,a=100;function f(){window.addEventListener("scroll",function(h){if(!e){e=true;setTimeout(d,250)}},false)}function d(){var h=c();if(h>=a){classie.add(g,"cbp-af-header-shrink")}else{classie.remove(g,"cbp-af-header-shrink")}e=false}function c(){return window.pageYOffset||b.scrollTop}f()})();

/*!
 * Retina.js v1.1.0
 *
 * Copyright 2013 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
(function(){var root=typeof exports=="undefined"?window:exports;var config={check_mime_type:true};root.Retina=Retina;function Retina(){}Retina.configure=function(options){if(options==null)options={};for(var prop in options)config[prop]=options[prop]};Retina.init=function(context){if(context==null)context=root;var existing_onload=context.onload||new Function;context.onload=function(){var images=document.getElementsByTagName("img"),retinaImages=[],i,image;for(i=0;i<images.length;i++){image=images[i];retinaImages.push(new RetinaImage(image))}existing_onload()}};Retina.isRetina=function(){var mediaQuery="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(root.devicePixelRatio>1)return true;if(root.matchMedia&&root.matchMedia(mediaQuery).matches)return true;return false};root.RetinaImagePath=RetinaImagePath;function RetinaImagePath(path,at_2x_path){this.path=path;if(typeof at_2x_path!=="undefined"&&at_2x_path!==null){this.at_2x_path=at_2x_path;this.perform_check=false}else{this.at_2x_path=path.replace(/\.\w+$/,function(match){return"@2x"+match});this.perform_check=true}}RetinaImagePath.confirmed_paths=[];RetinaImagePath.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};RetinaImagePath.prototype.check_2x_variant=function(callback){var http,that=this;if(this.is_external()){return callback(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return callback(true)}else if(this.at_2x_path in RetinaImagePath.confirmed_paths){return callback(true)}else{http=new XMLHttpRequest;http.open("HEAD",this.at_2x_path);http.onreadystatechange=function(){if(http.readyState!=4){return callback(false)}if(http.status>=200&&http.status<=399){if(config.check_mime_type){var type=http.getResponseHeader("Content-Type");if(type==null||!type.match(/^image/i)){return callback(false)}}RetinaImagePath.confirmed_paths.push(that.at_2x_path);return callback(true)}else{return callback(false)}};http.send()}};function RetinaImage(el){this.el=el;this.path=new RetinaImagePath(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var that=this;this.path.check_2x_variant(function(hasVariant){if(hasVariant)that.swap()})}root.RetinaImage=RetinaImage;RetinaImage.prototype.swap=function(path){if(typeof path=="undefined")path=this.path.at_2x_path;var that=this;function load(){if(!that.el.complete){setTimeout(load,5)}else{that.el.setAttribute("width",that.el.offsetWidth);that.el.setAttribute("height",that.el.offsetHeight);that.el.setAttribute("src",path)}}load()};if(Retina.isRetina()){Retina.init(root)}})();

