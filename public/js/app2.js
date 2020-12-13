function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */;window.Modernizr=function(a,b,c){function D(a){j.cssText=a;}function E(a,b){return D(n.join(a+";")+(b||""));}function F(a,b){return _typeof(a)===b;}function G(a,b){return!!~(""+a).indexOf(b);}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0;}return!1;}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f;}return!1;}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c));}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++){u[c[d]]=c[d]in k;}return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u;}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++){k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;}return t;}("search tel url email datetime date month week time datetime-local number range color".split(" "));}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function y(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--){j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);}return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i;},z=function z(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute";}),d;},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=(d in e);return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f;}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d;}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function C(a,b){return B.call(a,b);}:C=function C(a,b){return b in a&&F(a.constructor.prototype[b],"undefined");},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError();var d=w.call(arguments,1),e=function e(){if(this instanceof e){var a=function a(){};a.prototype=c.prototype;var f=new a(),g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f;}return c.apply(b,d.concat(w.call(arguments)));};return e;}),s.flexbox=function(){return J("flexWrap");},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d");},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function");},s.webgl=function(){return!!a.WebGLRenderingContext;},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9;}),c;},s.geolocation=function(){return"geolocation"in navigator;},s.postmessage=function(){return!!a.postMessage;},s.websqldatabase=function(){return!!a.openDatabase;},s.indexedDB=function(){return!!J("indexedDB",a);},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7);},s.history=function(){return!!a.history&&!!history.pushState;},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a;},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a;},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba");},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla");},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background);},s.backgroundsize=function(){return J("backgroundSize");},s.borderimage=function(){return J("borderImage");},s.borderradius=function(){return J("borderRadius");},s.boxshadow=function(){return J("boxShadow");},s.textshadow=function(){return b.createElement("div").style.textShadow==="";},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity);},s.cssanimations=function(){return J("animationName");},s.csscolumns=function(){return J("columnCount");},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient");},s.cssreflections=function(){return J("boxReflect");},s.csstransforms=function(){return!!J("transform");},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3;}),a;},s.csstransitions=function(){return J("transition");},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0;}),a;},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3;}),a;},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"");}catch(d){}return c;},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"");}catch(d){}return c;},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0;}catch(a){return!1;}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0;}catch(a){return!1;}},s.webworkers=function(){return!!a.Worker;},s.applicationcache=function(){return!!a.applicationCache;},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect;},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg;},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")));},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")));};for(var L in s){C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));}return e.input||K(),e.addTest=function(a,b){if(_typeof(a)=="object")for(var d in a){C(a,d)&&e.addTest(d,a[d]);}else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b;}return e;},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild);}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a;}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b;}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g;}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++){d.createElement(f[e]);}return d;}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c);},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")';})+");return n}")(s,b.frag);}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a;}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined";}();}catch(c){g=!0,k=!0;}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b);}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a]);},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx");},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e;}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a);}function e(a){return"string"==typeof a;}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a;}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?_B.injectCss:_B.injectJs)(a.s,0,a.a,a.x,a.e,1);},0):(a(),h()):q=0;}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l);},50);for(var d in y[c]){y[c].hasOwnProperty(d)&&y[c][d].onload();}}}var j=j||_B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r);},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l));}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this;}function k(){var a=_B;return a.loader={load:j,i:0},a;}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r=("MozAppearance"in l.style),s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a);},x=[],y={},z={timeout:function timeout(a,b){return b.length&&(a.timeout=b[0]),a;}},_A,_B;_B=function B(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++){g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));}for(f=0;f<b;f++){c=x[f](c);}return c;}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2;})));}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function j(){var a=[].slice.call(arguments);k.apply(this,a),l();}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a){a.hasOwnProperty(c)&&b++;}return b;}(),a){a.hasOwnProperty(n)&&(!c&&! --m&&(d(j)?j=function j(){var a=[].slice.call(arguments);k.apply(this,a),l();}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l();};}(k[n])),g(a[n],j,b,n,h));}}else!c&&l();}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i);}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++){j=a[i],e(j)?g(j,0,l,0):w(j)?_B(j):Object(j)===j&&h(j,l);}else Object(a)===a&&h(a,l);},_B.addPrefix=function(a,b){z[a]=b;},_B.addFilter=function(a){x.push(a);},_B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",_A=function A(){b.removeEventListener("DOMContentLoaded",_A,0),b.readyState="complete";},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||_B.errorTimeout;k.src=a;for(o in d){k.setAttribute(o,d[o]);}c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null);},m(function(){l||(l=1,c(1));},e),i?k.onload():n.parentNode.insertBefore(k,n);},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d){e.setAttribute(j,d[j]);}g||(n.parentNode.insertBefore(e,n),m(c,0));};}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this);},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this);},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)});},this)),this.setup(),this.initialize();}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function run(){this._width=this.$element.width();}},{filter:["width","items","settings"],run:function run(a){a.current=this._items&&this._items[this.relative(this._current)];}},{filter:["items","settings"],run:function run(){this.$stage.children(".cloned").remove();}},{filter:["width","items","settings"],run:function run(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e;}},{filter:["width","items","settings"],run:function run(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;){c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();}this._widths=f;}},{filter:["items","settings"],run:function run(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;){b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;}this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage);}},{filter:["width","items","settings"],run:function run(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;){d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);}this._coordinates=f;}},{filter:["width","items","settings"],run:function run(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c);}},{filter:["width","items","settings"],run:function run(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;){a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);}else c&&(a.css.width=a.items.width,d.css(a.css));}},{filter:["items"],run:function run(){this._coordinates.length<1&&this.$stage.removeAttr("style");}},{filter:["width","items","settings"],run:function run(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current);}},{filter:["position"],run:function run(){this.animate(this.coordinates(this._current));}},{filter:["width","position","items","settings"],run:function run(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++){a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);}this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"));}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b);}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized");},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a));}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}});},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1);},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data;},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a];},this._invalidated),e={};b<c;){(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;}this._invalidated={},!this.is("valid")&&this.enter("valid");},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin;}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed");},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate);},e.prototype.onResize=function(){return!!this._items.length&&this._width!==this.$element.width()&&!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")));},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1;})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)));},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=new Date().getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"));},this)));},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x));},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||new Date().getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1;})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"));},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1;},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d;},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"});},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0;},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}});}return this._current;},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b;});},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]));},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a;},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0);},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d));){;}f=b+1;}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0);},e.prototype.minimum=function(a){return a?0:this._clones.length/2;},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a]);},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a]);},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function f(a){return a%2===0?e+a/2:c-(a+1)/2;};return b===d?a.map(this._clones,function(a,b){return f(b);}):a.map(this._clones,function(a,c){return a===b?f(c):null;});},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed;},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b);},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c));},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed);},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update();},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a);},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a);},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated");},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d;},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType;}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1);},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items");},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c});},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}));},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image()).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh();},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"));},this));},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins){this._plugins[d].destroy();}this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel");},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c;}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c);},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c);},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a;}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j);}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j;},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++;},this));},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--;},this));},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments);},a.event.special[b.name].owl=!0;}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d;},this)));},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0;},this));},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b];},this));},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c;},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a));},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y};},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==_typeof(b)&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]));},f));})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c);});},a.fn.owlCarousel.Constructor=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function e(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch();},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers);};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval));},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh());},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers){this._core.$element.off(a,this._handlers[a]);}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null);}},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function e(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b);},this);f++<e;){this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++;}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers);};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy");},this)).attr("src",g):(e=new Image(),e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy");},this),e.src=g);},this)),this._loaded.push(d.get(0)));},e.prototype.destroy=function(){var a,b;for(a in this.handlers){this._core.$element.off(a,this.handlers[a]);}for(b in Object.getOwnPropertyNames(this)){"function"!=typeof this[b]&&(this[b]=null);}},a.fn.owlCarousel.Constructor.Plugins.Lazy=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function e(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update();},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update();},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update();},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers);};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height());}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);},e.prototype.destroy=function(){var a,b;for(a in this._handlers){this._core.$element.off(a,this._handlers[a]);}for(b in Object.getOwnPropertyNames(this)){"function"!=typeof this[b]&&(this[b]=null);}},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function e(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]});},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault();},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove();},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop();},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)));}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a);},this));};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube";}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar";}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g]);},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function l(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e);};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function success(a){f=a[0].thumbnail_large,l(f);}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function success(a){f=a.framegrab_url,l(f);}});},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video");},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"));},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame");},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers){this._core.$element.off(a,this._handlers[a]);}for(b in Object.getOwnPropertyNames(this)){"function"!=typeof this[b]&&(this[b]=null);}},a.fn.owlCarousel.Constructor.Plugins.Video=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function e(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value);},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type);},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap();},this)},this.core.$element.on(this.handlers);};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f));}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd();},e.prototype.destroy=function(){var a,b;for(a in this.handlers){this.core.$element.off(a,this.handlers[a]);}for(b in Object.getOwnPropertyNames(this)){"function"!=typeof this[b]&&(this[b]=null);}},a.fn.owlCarousel.Constructor.Plugins.Animate=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function e(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval();},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play();},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c);},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop();},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause();},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play();},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause();},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play();},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options);};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval());},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed);},this),d||this._core.settings.autoplayTimeout);},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout();},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"));},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0);},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers){this._core.$element.off(a,this._handlers[a]);}for(b in Object.getOwnPropertyNames(this)){"function"!=typeof this[b]&&(this[b]=null);}},a.fn.owlCarousel.Constructor.Plugins.autoplay=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function e(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>");},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop());},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1);},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw();},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"));},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"));},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers);};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed);},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed);},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed);},this));for(b in this._overrides){this._core[b]=a.proxy(this[b],this);}},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers){this.$element.off(a,this._handlers[a]);}for(b in this._controls){this._controls[b].remove();}for(d in this.overides){this._core[d]=this._overrides[d];}for(c in Object.getOwnPropertyNames(this)){"function"!=typeof this[c]&&(this[c]=null);}},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c;}b+=this._core.mergers(this._core.relative(a));}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"));},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)};},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b;},this)).pop();},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c;},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b);},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b);},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c);},a.fn.owlCarousel.Constructor.Plugins.Navigation=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function e(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation");},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content;}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null;}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e;}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0);},this));};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers){this._core.$element.off(c,this._handlers[c]);}for(d in Object.getOwnPropertyNames(this)){"function"!=typeof this[d]&&(this[d]=null);}},a.fn.owlCarousel.Constructor.Plugins.Hash=e;}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1;}),e;}function f(a){return e(a,!0);}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function csstransforms(){return!!e("transform");},csstransforms3d:function csstransforms3d(){return!!e("perspective");},csstransitions:function csstransitions(){return!!e("transition");},cssanimations:function cssanimations(){return!!e("animation");}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d());}(window.Zepto||window.jQuery,window,document);/*!
* metismenu - v2.7.8
* A jQuery menu plugin
* https://github.com/onokumus/metismenu#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/!function(n,e){"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):n.metisMenu=e(n.jQuery);}(this,function(n){"use strict";function a(s){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},e=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable;}))),e.forEach(function(n){var e,i,t;e=s,t=a[i=n],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t;});}return s;}var o,e,r,i,t,l,c,s,g=function(t){var e="transitionend",s={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function triggerTransitionEnd(n){t(n).trigger(e);},supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(e);}};function n(n){var e=this,i=!1;return t(this).one(s.TRANSITION_END,function(){i=!0;}),setTimeout(function(){i||s.triggerTransitionEnd(e);},n),this;}return t.fn.mmEmulateTransitionEnd=n,t.event.special[s.TRANSITION_END]={bindType:e,delegateType:e,handle:function handle(n){if(t(n.target).is(this))return n.handleObj.handler.apply(this,arguments);}},s;}(n=n&&n.hasOwnProperty("default")?n["default"]:n);return i="."+(r=e="metisMenu"),t=(o=n).fn[e],l={toggle:!0,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing",triggerElement:"a",parentTrigger:"li",subMenu:"ul"},c={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},s=function(){function s(n,e){this.element=n,this.config=a({},l,e),this.transitioning=null,this.init();}var n=s.prototype;return n.init=function(){var a=this,r=this.config;o(this.element).find(r.parentTrigger+"."+r.activeClass).has(r.subMenu).children(r.subMenu).addClass(r.collapseClass+" "+r.collapseInClass),o(this.element).find(r.parentTrigger).not("."+r.activeClass).has(r.subMenu).children(r.subMenu).addClass(r.collapseClass),o(this.element).find(r.parentTrigger).has(r.subMenu).children(r.triggerElement).on(c.CLICK_DATA_API,function(n){var e=o(this),i=e.parent(r.parentTrigger),t=i.siblings(r.parentTrigger).children(r.triggerElement),s=i.children(r.subMenu);r.preventDefault&&n.preventDefault(),"true"!==e.attr("aria-disabled")&&(i.hasClass(r.activeClass)?(e.attr("aria-expanded",!1),a.hide(s)):(a.show(s),e.attr("aria-expanded",!0),r.toggle&&t.attr("aria-expanded",!1)),r.onTransitionStart&&r.onTransitionStart(n));});},n.show=function(n){var e=this;if(!this.transitioning&&!o(n).hasClass(this.config.collapsingClass)){var i=o(n),t=o.Event(c.SHOW);if(i.trigger(t),!t.isDefaultPrevented()){i.parent(this.config.parentTrigger).addClass(this.config.activeClass),this.config.toggle&&this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+this.config.collapseInClass)),i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0),this.setTransitioning(!0);i.height(n[0].scrollHeight).one(g.TRANSITION_END,function(){e.config&&e.element&&(i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass+" "+e.config.collapseInClass).height(""),e.setTransitioning(!1),i.trigger(c.SHOWN));}).mmEmulateTransitionEnd(350);}}},n.hide=function(n){var e=this;if(!this.transitioning&&o(n).hasClass(this.config.collapseInClass)){var i=o(n),t=o.Event(c.HIDE);if(i.trigger(t),!t.isDefaultPrevented()){i.parent(this.config.parentTrigger).removeClass(this.config.activeClass),i.height(i.height())[0].offsetHeight,i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass),this.setTransitioning(!0);var s=function s(){e.config&&e.element&&(e.transitioning&&e.config.onTransitionEnd&&e.config.onTransitionEnd(),e.setTransitioning(!1),i.trigger(c.HIDDEN),i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass));};0===i.height()||"none"===i.css("display")?s():i.height(0).one(g.TRANSITION_END,s).mmEmulateTransitionEnd(350);}}},n.setTransitioning=function(n){this.transitioning=n;},n.dispose=function(){o.removeData(this.element,r),o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null;},s.jQueryInterface=function(t){return this.each(function(){var n=o(this),e=n.data(r),i=a({},l,n.data(),"object"==_typeof(t)&&t?t:{});if(!e&&/dispose/.test(t)&&this.dispose(),e||(e=new s(this,i),n.data(r,e)),"string"==typeof t){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t]();}});},s;}(),o.fn[e]=s.jQueryInterface,o.fn[e].Constructor=s,o.fn[e].noConflict=function(){return o.fn[e]=t,s.jQueryInterface;},s;});/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */(function(e){e.fn.extend({slimScroll:function slimScroll(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1);}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p();}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a});}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"));}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"));},1E3));}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",h);b.css("height",h);}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return;}n(q,!1,!0);}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1);});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll");});return!1;}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1;});m.hover(function(){w();},function(){p();});c.hover(function(){y=!0;},function(){y=!1;});b.hover(function(){r=!0;w();p();},function(){r=!1;p();});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY);});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY);});x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v);}});return this;}});e.fn.extend({slimscroll:e.fn.slimScroll});})(jQuery);/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */!function(e,t,n){function a(t,n){this.element=t,this.settings=e.extend({},i,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=i,this._name=s,this.init();}var i={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function init(){},beforeOpen:function beforeOpen(){},beforeClose:function beforeClose(){},afterOpen:function afterOpen(){},afterClose:function afterClose(){}},s="slicknav",o="slicknav",l={DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,RIGHT:39,SPACE:32,TAB:9,UP:38};a.prototype.init=function(){var n,a,i=this,s=e(this.element),r=this.settings;if(r.duplicate?i.mobileNav=s.clone():i.mobileNav=s,r.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id");})),r.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("class");})),r.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("style");})),n=o+"_icon",""===r.label&&(n+=" "+o+"_no-text"),"a"==r.parentTag&&(r.parentTag='a href="#"'),i.mobileNav.attr("class",o+"_nav"),a=e('<div class="'+o+'_menu"></div>'),""!==r.brand){var c=e('<div class="'+o+'_brand">'+r.brand+"</div>");e(a).append(c);}i.btn=e(["<"+r.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+o+"_btn "+o+'_collapsed">','<span class="'+o+'_menutxt">'+r.label+"</span>",'<span class="'+n+'">','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>','<span class="'+o+'_icon-bar"></span>',"</span>","</"+r.parentTag+">"].join("")),e(a).append(i.btn),""!==r.appendTo?e(r.appendTo).append(a):e(r.prependTo).prepend(a),a.append(i.mobileNav);var p=i.mobileNav.find("li");e(p).each(function(){var t=e(this),n={};if(n.children=t.children("ul").attr("role","menu"),t.data("menu",n),n.children.length>0){var a=t.contents(),s=!1,l=[];e(a).each(function(){return e(this).is("ul")?!1:(l.push(this),void(e(this).is("a")&&(s=!0)));});var c=e("<"+r.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+o+'_item"/>');if(r.allowParentLinks&&!r.nestedParentLinks&&s)e(l).wrapAll('<span class="'+o+"_parent-link "+o+'_row"/>').parent();else{var p=e(l).wrapAll(c).parent();p.addClass(o+"_row");}r.showChildren?t.addClass(o+"_open"):t.addClass(o+"_collapsed"),t.addClass(o+"_parent");var d=e('<span class="'+o+'_arrow">'+(r.showChildren?r.openedSymbol:r.closedSymbol)+"</span>");r.allowParentLinks&&!r.nestedParentLinks&&s&&(d=d.wrap(c).parent()),e(l).last().after(d);}else 0===t.children().length&&t.addClass(o+"_txtnode");t.children("a").attr("role","menuitem").click(function(t){r.closeOnClick&&!e(t.target).parent().closest("li").hasClass(o+"_parent")&&e(i.btn).click();}),r.closeOnClick&&r.allowParentLinks&&(t.children("a").children("a").click(function(t){e(i.btn).click();}),t.find("."+o+"_parent-link a:not(."+o+"_item)").click(function(t){e(i.btn).click();}));}),e(p).each(function(){var t=e(this).data("menu");r.showChildren||i._visibilityToggle(t.children,null,!1,null,!0);}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).mousedown(function(){i._outlines(!1);}),e(t).keyup(function(){i._outlines(!0);}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle();}),i.mobileNav.on("click","."+o+"_item",function(t){t.preventDefault(),i._itemClick(e(this));}),e(i.btn).keydown(function(t){var n=t||event;switch(n.keyCode){case l.ENTER:case l.SPACE:case l.DOWN:t.preventDefault(),n.keyCode===l.DOWN&&e(i.btn).hasClass(o+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus();}}),i.mobileNav.on("keydown","."+o+"_item",function(t){var n=t||event;switch(n.keyCode){case l.ENTER:t.preventDefault(),i._itemClick(e(t.target));break;case l.RIGHT:t.preventDefault(),e(t.target).parent().hasClass(o+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus();}}),i.mobileNav.on("keydown",'[role="menuitem"]',function(t){var n=t||event;switch(n.keyCode){case l.DOWN:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=a.index(t.target),r=s+1;a.length<=r&&(r=0);var c=a.eq(r);c.focus();break;case l.UP:t.preventDefault();var a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=a.index(t.target),c=a.eq(s-1);c.focus();break;case l.LEFT:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(o+"_open")){var p=e(t.target).parent().parent().prev();p.focus(),i._itemClick(p);}else e(t.target).parent().parent().hasClass(o+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case l.ESCAPE:t.preventDefault(),i._menuToggle(),e(i.btn).focus();}}),r.allowParentLinks&&r.nestedParentLinks&&e("."+o+"_item a").click(function(e){e.stopImmediatePropagation();});},a.prototype._menuToggle=function(e){var t=this,n=t.btn,a=t.mobileNav;n.hasClass(o+"_collapsed")?(n.removeClass(o+"_collapsed"),n.addClass(o+"_open")):(n.removeClass(o+"_open"),n.addClass(o+"_collapsed")),n.addClass(o+"_animating"),t._visibilityToggle(a,n.parent(),!0,n);},a.prototype._itemClick=function(e){var t=this,n=t.settings,a=e.data("menu");a||(a={},a.arrow=e.children("."+o+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(o+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(o+"_collapsed")?(a.arrow.html(n.openedSymbol),a.parent.removeClass(o+"_collapsed"),a.parent.addClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(n.closedSymbol),a.parent.addClass(o+"_collapsed"),a.parent.removeClass(o+"_open"),a.parent.addClass(o+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e));},a.prototype._visibilityToggle=function(t,n,a,i,s){function l(t,n){e(t).removeClass(o+"_animating"),e(n).removeClass(o+"_animating"),s||p.afterOpen(t);}function r(n,a){t.attr("aria-hidden","true"),d.attr("tabindex","-1"),c._setVisAttr(t,!0),t.hide(),e(n).removeClass(o+"_animating"),e(a).removeClass(o+"_animating"),s?"init"==n&&p.init():p.afterClose(n);}var c=this,p=c.settings,d=c._getActionItems(t),u=0;a&&(u=p.duration),t.hasClass(o+"_hidden")?(t.removeClass(o+"_hidden"),s||p.beforeOpen(i),"jquery"===p.animations?t.stop(!0,!0).slideDown(u,p.easingOpen,function(){l(i,n);}):"velocity"===p.animations&&t.velocity("finish").velocity("slideDown",{duration:u,easing:p.easingOpen,complete:function complete(){l(i,n);}}),t.attr("aria-hidden","false"),d.attr("tabindex","0"),c._setVisAttr(t,!1)):(t.addClass(o+"_hidden"),s||p.beforeClose(i),"jquery"===p.animations?t.stop(!0,!0).slideUp(u,this.settings.easingClose,function(){r(i,n);}):"velocity"===p.animations&&t.velocity("finish").velocity("slideUp",{duration:u,easing:p.easingClose,complete:function complete(){r(i,n);}}));},a.prototype._setVisAttr=function(t,n){var a=this,i=t.children("li").children("ul").not("."+o+"_hidden");n?i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=a._getActionItems(t);i.attr("tabindex","-1"),a._setVisAttr(t,n);}):i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=a._getActionItems(t);i.attr("tabindex","0"),a._setVisAttr(t,n);});},a.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+o+"_item")),e.data("menu",t);}return t.links;},a.prototype._outlines=function(t){t?e("."+o+"_item, ."+o+"_btn").css("outline",""):e("."+o+"_item, ."+o+"_btn").css("outline","none");},a.prototype.toggle=function(){var e=this;e._menuToggle();},a.prototype.open=function(){var e=this;e.btn.hasClass(o+"_collapsed")&&e._menuToggle();},a.prototype.close=function(){var e=this;e.btn.hasClass(o+"_open")&&e._menuToggle();},e.fn[s]=function(t){var n=arguments;if(void 0===t||"object"==_typeof(t))return this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new a(this,t));});if("string"==typeof t&&"_"!==t[0]&&"init"!==t){var i;return this.each(function(){var o=e.data(this,"plugin_"+s);o instanceof a&&"function"==typeof o[t]&&(i=o[t].apply(o,Array.prototype.slice.call(n,1)));}),void 0!==i?i:this;}};}(jQuery,document,window);/*! DataTables 1.10.19
 * ©2008-2018 SpryMedia Ltd - datatables.net/license
 */ /**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.19
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2018 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */ /*jslint evil: true, undef: true, browser: true */ /*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/(function(factory){"use strict";if(typeof define==='function'&&define.amd){// AMD
define(['jquery'],function($){return factory($,window,document);});}else if((typeof exports==="undefined"?"undefined":_typeof(exports))==='object'){// CommonJS
module.exports=function(root,$){if(!root){// CommonJS environments without a window global must pass a
// root. This will give an error otherwise
root=window;}if(!$){$=typeof window!=='undefined'?// jQuery's factory checks for a global window
require('jquery'):require('jquery')(root);}return factory($,root,root.document);};}else{// Browser
factory(jQuery,window,document);}})(function($,window,document,undefined){"use strict";/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */var DataTable=function DataTable(options){/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */this.$=function(sSelector,oOpts){return this.api(true).$(sSelector,oOpts);};/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */this._=function(sSelector,oOpts){return this.api(true).rows(sSelector,oOpts).data();};/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */this.api=function(traditional){return traditional?new _Api2(_fnSettingsFromNode(this[_ext.iApiIndex])):new _Api2(this);};/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */this.fnAddData=function(data,redraw){var api=this.api(true);/* Check if we want to add multiple rows or not */var rows=$.isArray(data)&&($.isArray(data[0])||$.isPlainObject(data[0]))?api.rows.add(data):api.row.add(data);if(redraw===undefined||redraw){api.draw();}return rows.flatten().toArray();};/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */this.fnAdjustColumnSizing=function(bRedraw){var api=this.api(true).columns.adjust();var settings=api.settings()[0];var scroll=settings.oScroll;if(bRedraw===undefined||bRedraw){api.draw(false);}else if(scroll.sX!==""||scroll.sY!==""){/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */_fnScrollDraw(settings);}};/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */this.fnClearTable=function(bRedraw){var api=this.api(true).clear();if(bRedraw===undefined||bRedraw){api.draw();}};/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */this.fnClose=function(nTr){this.api(true).row(nTr).child.hide();};/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */this.fnDeleteRow=function(target,callback,redraw){var api=this.api(true);var rows=api.rows(target);var settings=rows.settings()[0];var data=settings.aoData[rows[0][0]];rows.remove();if(callback){callback.call(this,settings,data);}if(redraw===undefined||redraw){api.draw();}return data;};/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */this.fnDestroy=function(remove){this.api(true).destroy(remove);};/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */this.fnDraw=function(complete){// Note that this isn't an exact match to the old call to _fnDraw - it takes
// into account the new data, but can hold position.
this.api(true).draw(complete);};/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive){var api=this.api(true);if(iColumn===null||iColumn===undefined){api.search(sInput,bRegex,bSmart,bCaseInsensitive);}else{api.column(iColumn).search(sInput,bRegex,bSmart,bCaseInsensitive);}api.draw();};/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */this.fnGetData=function(src,col){var api=this.api(true);if(src!==undefined){var type=src.nodeName?src.nodeName.toLowerCase():'';return col!==undefined||type=='td'||type=='th'?api.cell(src,col).data():api.row(src).data()||null;}return api.data().toArray();};/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */this.fnGetNodes=function(iRow){var api=this.api(true);return iRow!==undefined?api.row(iRow).node():api.rows().nodes().flatten().toArray();};/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */this.fnGetPosition=function(node){var api=this.api(true);var nodeName=node.nodeName.toUpperCase();if(nodeName=='TR'){return api.row(node).index();}else if(nodeName=='TD'||nodeName=='TH'){var cell=api.cell(node).index();return[cell.row,cell.columnVisible,cell.column];}return null;};/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */this.fnIsOpen=function(nTr){return this.api(true).row(nTr).child.isShown();};/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */this.fnOpen=function(nTr,mHtml,sClass){return this.api(true).row(nTr).child(mHtml,sClass).show().child()[0];};/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */this.fnPageChange=function(mAction,bRedraw){var api=this.api(true).page(mAction);if(bRedraw===undefined||bRedraw){api.draw(false);}};/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */this.fnSetColumnVis=function(iCol,bShow,bRedraw){var api=this.api(true).column(iCol).visible(bShow);if(bRedraw===undefined||bRedraw){api.columns.adjust().draw();}};/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */this.fnSettings=function(){return _fnSettingsFromNode(this[_ext.iApiIndex]);};/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */this.fnSort=function(aaSort){this.api(true).order(aaSort).draw();};/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */this.fnSortListener=function(nNode,iColumn,fnCallback){this.api(true).order.listener(nNode,iColumn,fnCallback);};/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction){var api=this.api(true);if(iColumn===undefined||iColumn===null){api.row(mRow).data(mData);}else{api.cell(mRow,iColumn).data(mData);}if(bAction===undefined||bAction){api.columns.adjust();}if(bRedraw===undefined||bRedraw){api.draw();}return 0;};/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */this.fnVersionCheck=_ext.fnVersionCheck;var _that=this;var emptyInit=options===undefined;var len=this.length;if(emptyInit){options={};}this.oApi=this.internal=_ext.internal;// Extend with old style plug-in API methods
for(var fn in DataTable.ext.internal){if(fn){this[fn]=_fnExternApiFunc(fn);}}this.each(function(){// For each initialisation we want to give it a clean initialisation
// object that can be bashed around
var o={};var oInit=len>1?// optimisation for single table case
_fnExtend(o,options,true):options;/*global oInit,_that,emptyInit*/var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var defaults=DataTable.defaults;var $this=$(this);/* Sanity check */if(this.nodeName.toLowerCase()!='table'){_fnLog(null,0,'Non-table node initialisation ('+this.nodeName+')',2);return;}/* Backwards compatibility for the defaults */_fnCompatOpts(defaults);_fnCompatCols(defaults.column);/* Convert the camel-case defaults to Hungarian */_fnCamelToHungarian(defaults,defaults,true);_fnCamelToHungarian(defaults.column,defaults.column,true);/* Setting up the initialisation object */_fnCamelToHungarian(defaults,$.extend(oInit,$this.data()));/* Check to see if we are re-initialising a table */var allSettings=DataTable.settings;for(i=0,iLen=allSettings.length;i<iLen;i++){var s=allSettings[i];/* Base check on table node */if(s.nTable==this||s.nTHead&&s.nTHead.parentNode==this||s.nTFoot&&s.nTFoot.parentNode==this){var bRetrieve=oInit.bRetrieve!==undefined?oInit.bRetrieve:defaults.bRetrieve;var bDestroy=oInit.bDestroy!==undefined?oInit.bDestroy:defaults.bDestroy;if(emptyInit||bRetrieve){return s.oInstance;}else if(bDestroy){s.oInstance.fnDestroy();break;}else{_fnLog(s,0,'Cannot reinitialise DataTable',3);return;}}/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */if(s.sTableId==this.id){allSettings.splice(i,1);break;}}/* Ensure the table has an ID - required for accessibility */if(sId===null||sId===""){sId="DataTables_Table_"+DataTable.ext._unique++;this.id=sId;}/* Create the settings object for this table and set some of the default parameters */var oSettings=$.extend(true,{},DataTable.models.oSettings,{"sDestroyWidth":$this[0].style.width,"sInstance":sId,"sTableId":sId});oSettings.nTable=this;oSettings.oApi=_that.internal;oSettings.oInit=oInit;allSettings.push(oSettings);// Need to add the instance after the instance after the settings object has been added
// to the settings array, so we can self reference the table instance if more than one
oSettings.oInstance=_that.length===1?_that:$this.dataTable();// Backwards compatibility, before we apply all the defaults
_fnCompatOpts(oInit);_fnLanguageCompat(oInit.oLanguage);// If the length menu is given, but the init display length is not, use the length menu
if(oInit.aLengthMenu&&!oInit.iDisplayLength){oInit.iDisplayLength=$.isArray(oInit.aLengthMenu[0])?oInit.aLengthMenu[0][0]:oInit.aLengthMenu[0];}// Apply the defaults and init options to make a single init object will all
// options defined from defaults and instance options.
oInit=_fnExtend($.extend(true,{},defaults),oInit);// Map the initialisation options onto the settings object
_fnMap(oSettings.oFeatures,oInit,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);_fnMap(oSettings,oInit,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],// backwards compat
["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);_fnMap(oSettings.oScroll,oInit,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");/* Callback functions which are array driven */_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user');oSettings.rowIdFn=_fnGetObjectDataFn(oInit.rowId);/* Browser support detection */_fnBrowserDetect(oSettings);var oClasses=oSettings.oClasses;$.extend(oClasses,DataTable.ext.classes,oInit.oClasses);$this.addClass(oClasses.sTable);if(oSettings.iInitDisplayStart===undefined){/* Display start point, taking into account the save saving */oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}if(oInit.iDeferLoading!==null){oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}/* Language definitions */var oLanguage=oSettings.oLanguage;$.extend(true,oLanguage,oInit.oLanguage);if(oLanguage.sUrl){/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */$.ajax({dataType:'json',url:oLanguage.sUrl,success:function success(json){_fnLanguageCompat(json);_fnCamelToHungarian(defaults.oLanguage,json);$.extend(true,oLanguage,json);_fnInitialise(oSettings);},error:function error(){// Error occurred loading language file, continue on as best we can
_fnInitialise(oSettings);}});bInitHandedOff=true;}/*
			 * Stripes
			 */if(oInit.asStripeClasses===null){oSettings.asStripeClasses=[oClasses.sStripeOdd,oClasses.sStripeEven];}/* Remove row stripe classes if they are already on the table row */var stripeClasses=oSettings.asStripeClasses;var rowOne=$this.children('tbody').find('tr').eq(0);if($.inArray(true,$.map(stripeClasses,function(el,i){return rowOne.hasClass(el);}))!==-1){$('tbody tr',this).removeClass(stripeClasses.join(' '));oSettings.asDestroyStripes=stripeClasses.slice();}/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0){_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}/* If not given a column array, generate one with nulls */if(oInit.aoColumns===null){aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++){aoColumnsInit.push(null);}}else{aoColumnsInit=oInit.aoColumns;}/* Add the columns */for(i=0,iLen=aoColumnsInit.length;i<iLen;i++){_fnAddColumn(oSettings,anThs?anThs[i]:null);}/* Apply the column definitions */_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */if(rowOne.length){var a=function a(cell,name){return cell.getAttribute('data-'+name)!==null?name:null;};$(rowOne[0]).children('th, td').each(function(i,cell){var col=oSettings.aoColumns[i];if(col.mData===i){var sort=a(cell,'sort')||a(cell,'order');var filter=a(cell,'filter')||a(cell,'search');if(sort!==null||filter!==null){col.mData={_:i+'.display',sort:sort!==null?i+'.@data-'+sort:undefined,type:sort!==null?i+'.@data-'+sort:undefined,filter:filter!==null?i+'.@data-'+filter:undefined};_fnColumnOptions(oSettings,i);}}});}var features=oSettings.oFeatures;var loadedInit=function loadedInit(){/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */ // If aaSorting is not defined, then we use the first indicator in asSorting
// in case that has been altered, so the default sort reflects that option
if(oInit.aaSorting===undefined){var sorting=oSettings.aaSorting;for(i=0,iLen=sorting.length;i<iLen;i++){sorting[i][1]=oSettings.aoColumns[i].asSorting[0];}}/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */_fnSortingClasses(oSettings);if(features.bSort){_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted){var aSort=_fnSortFlatten(oSettings);var sortedColumns={};$.each(aSort,function(i,val){sortedColumns[val.src]=val.dir;});_fnCallbackFire(oSettings,null,'order',[oSettings,aSort,sortedColumns]);_fnSortAria(oSettings);}});}_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted||_fnDataSource(oSettings)==='ssp'||features.bDeferRender){_fnSortingClasses(oSettings);}},'sc');/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */ // Work around for Webkit bug 83867 - store the caption-side before removing from doc
var captions=$this.children('caption').each(function(){this._captionSide=$(this).css('caption-side');});var thead=$this.children('thead');if(thead.length===0){thead=$('<thead/>').appendTo($this);}oSettings.nTHead=thead[0];var tbody=$this.children('tbody');if(tbody.length===0){tbody=$('<tbody/>').appendTo($this);}oSettings.nTBody=tbody[0];var tfoot=$this.children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")){// If we are a scrolling table, and no footer has been given, then we need to create
// a tfoot element for the caption element to be appended to
tfoot=$('<tfoot/>').appendTo($this);}if(tfoot.length===0||tfoot.children().length===0){$this.addClass(oClasses.sNoFooter);}else if(tfoot.length>0){oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}/* Check if there is data passing into the constructor */if(oInit.aaData){for(i=0;i<oInit.aaData.length;i++){_fnAddData(oSettings,oInit.aaData[i]);}}else if(oSettings.bDeferLoading||_fnDataSource(oSettings)=='dom'){/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */_fnAddTr(oSettings,$(oSettings.nTBody).children('tr'));}/* Copy the data index array */oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();/* Initialisation complete - table can be drawn */oSettings.bInitialised=true;/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */if(bInitHandedOff===false){_fnInitialise(oSettings);}};/* Must be done after everything which can be overridden by the state saving! */if(oInit.bStateSave){features.bStateSave=true;_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');_fnLoadState(oSettings,oInit,loadedInit);}else{loadedInit();}});_that=null;return this;};/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */ // Defined else where
//  _selector_run
//  _selector_opts
//  _selector_first
//  _selector_row_indexes
var _ext;// DataTable.ext
var _Api2;// DataTable.Api
var _api_register;// DataTable.Api.register
var _api_registerPlural;// DataTable.Api.registerPlural
var _re_dic={};var _re_new_lines=/[\r\n]/g;var _re_html=/<.*?>/g;// This is not strict ISO8601 - Date.parse() is quite lax, although
// implementations differ between browsers.
var _re_date=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;// Escape regular expression special characters
var _re_escape_regex=new RegExp('(\\'+['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'].join('|\\')+')','g');// http://en.wikipedia.org/wiki/Foreign_exchange_market
// - \u20BD - Russian ruble.
// - \u20a9 - South Korean Won
// - \u20BA - Turkish Lira
// - \u20B9 - Indian Rupee
// - R - Brazil (R$) and South Africa
// - fr - Swiss Franc
// - kr - Swedish krona, Norwegian krone and Danish krone
// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
// - Ƀ - Bitcoin
// - Ξ - Ethereum
//   standards as thousands separators.
var _re_formatted_numeric=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;var _empty=function _empty(d){return!d||d===true||d==='-'?true:false;};var _intVal=function _intVal(s){var integer=parseInt(s,10);return!isNaN(integer)&&isFinite(s)?integer:null;};// Convert from a formatted number with characters other than `.` as the
// decimal place, to a Javascript number
var _numToDecimal=function _numToDecimal(num,decimalPoint){// Cache created regular expressions for speed as this function is called often
if(!_re_dic[decimalPoint]){_re_dic[decimalPoint]=new RegExp(_fnEscapeRegex(decimalPoint),'g');}return typeof num==='string'&&decimalPoint!=='.'?num.replace(/\./g,'').replace(_re_dic[decimalPoint],'.'):num;};var _isNumber=function _isNumber(d,decimalPoint,formatted){var strType=typeof d==='string';// If empty return immediately so there must be a number if it is a
// formatted string (this stops the string "k", or "kr", etc being detected
// as a formatted number for currency
if(_empty(d)){return true;}if(decimalPoint&&strType){d=_numToDecimal(d,decimalPoint);}if(formatted&&strType){d=d.replace(_re_formatted_numeric,'');}return!isNaN(parseFloat(d))&&isFinite(d);};// A string without HTML in it can be considered to be HTML still
var _isHtml=function _isHtml(d){return _empty(d)||typeof d==='string';};var _htmlNumeric=function _htmlNumeric(d,decimalPoint,formatted){if(_empty(d)){return true;}var html=_isHtml(d);return!html?null:_isNumber(_stripHtml(d),decimalPoint,formatted)?true:null;};var _pluck=function _pluck(a,prop,prop2){var out=[];var i=0,ien=a.length;// Could have the test in the loop for slightly smaller code, but speed
// is essential here
if(prop2!==undefined){for(;i<ien;i++){if(a[i]&&a[i][prop]){out.push(a[i][prop][prop2]);}}}else{for(;i<ien;i++){if(a[i]){out.push(a[i][prop]);}}}return out;};// Basically the same as _pluck, but rather than looping over `a` we use `order`
// as the indexes to pick from `a`
var _pluck_order=function _pluck_order(a,order,prop,prop2){var out=[];var i=0,ien=order.length;// Could have the test in the loop for slightly smaller code, but speed
// is essential here
if(prop2!==undefined){for(;i<ien;i++){if(a[order[i]][prop]){out.push(a[order[i]][prop][prop2]);}}}else{for(;i<ien;i++){out.push(a[order[i]][prop]);}}return out;};var _range=function _range(len,start){var out=[];var end;if(start===undefined){start=0;end=len;}else{end=start;start=len;}for(var i=start;i<end;i++){out.push(i);}return out;};var _removeEmpty=function _removeEmpty(a){var out=[];for(var i=0,ien=a.length;i<ien;i++){if(a[i]){// careful - will remove all falsy values!
out.push(a[i]);}}return out;};var _stripHtml=function _stripHtml(d){return d.replace(_re_html,'');};/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */var _areAllUnique=function _areAllUnique(src){if(src.length<2){return true;}var sorted=src.slice().sort();var last=sorted[0];for(var i=1,ien=sorted.length;i<ien;i++){if(sorted[i]===last){return false;}last=sorted[i];}return true;};/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */var _unique=function _unique(src){if(_areAllUnique(src)){return src.slice();}// A faster unique method is to use object keys to identify used values,
// but this doesn't work with arrays or objects, which we must also
// consider. See jsperf.com/compare-array-unique-versions/4 for more
// information.
var out=[],val,i,ien=src.length,j,k=0;again:for(i=0;i<ien;i++){val=src[i];for(j=0;j<k;j++){if(out[j]===val){continue again;}}out.push(val);k++;}return out;};/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */DataTable.util={/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */throttle:function throttle(fn,freq){var frequency=freq!==undefined?freq:200,last,timer;return function(){var that=this,now=+new Date(),args=arguments;if(last&&now<last+frequency){clearTimeout(timer);timer=setTimeout(function(){last=undefined;fn.apply(that,args);},frequency);}else{last=now;fn.apply(that,args);}};},/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */escapeRegex:function escapeRegex(val){return val.replace(_re_escape_regex,'\\$1');}};/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */function _fnHungarianMap(o){var hungarian='a aa ai ao as b fn i m o s ',match,newKey,map={};$.each(o,function(key,val){match=key.match(/^([^A-Z]+?)([A-Z])/);if(match&&hungarian.indexOf(match[1]+' ')!==-1){newKey=key.replace(match[0],match[2].toLowerCase());map[newKey]=key;if(match[1]==='o'){_fnHungarianMap(o[key]);}}});o._hungarianMap=map;}/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */function _fnCamelToHungarian(src,user,force){if(!src._hungarianMap){_fnHungarianMap(src);}var hungarianKey;$.each(user,function(key,val){hungarianKey=src._hungarianMap[key];if(hungarianKey!==undefined&&(force||user[hungarianKey]===undefined)){// For objects, we need to buzz down into the object to copy parameters
if(hungarianKey.charAt(0)==='o'){// Copy the camelCase options over to the hungarian
if(!user[hungarianKey]){user[hungarianKey]={};}$.extend(true,user[hungarianKey],user[key]);_fnCamelToHungarian(src[hungarianKey],user[hungarianKey],force);}else{user[hungarianKey]=user[key];}}});}/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnLanguageCompat(lang){// Note the use of the Hungarian notation for the parameters in this method as
// this is called after the mapping of camelCase to Hungarian
var defaults=DataTable.defaults.oLanguage;// Default mapping
var defaultDecimal=defaults.sDecimal;if(defaultDecimal){_addNumericSort(defaultDecimal);}if(lang){var zeroRecords=lang.sZeroRecords;// Backwards compatibility - if there is no sEmptyTable given, then use the same as
// sZeroRecords - assuming that is given.
if(!lang.sEmptyTable&&zeroRecords&&defaults.sEmptyTable==="No data available in table"){_fnMap(lang,lang,'sZeroRecords','sEmptyTable');}// Likewise with loading records
if(!lang.sLoadingRecords&&zeroRecords&&defaults.sLoadingRecords==="Loading..."){_fnMap(lang,lang,'sZeroRecords','sLoadingRecords');}// Old parameter name of the thousands separator mapped onto the new
if(lang.sInfoThousands){lang.sThousands=lang.sInfoThousands;}var decimal=lang.sDecimal;if(decimal&&defaultDecimal!==decimal){_addNumericSort(decimal);}}}/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */var _fnCompatMap=function _fnCompatMap(o,knew,old){if(o[knew]!==undefined){o[old]=o[knew];}};/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */function _fnCompatOpts(init){_fnCompatMap(init,'ordering','bSort');_fnCompatMap(init,'orderMulti','bSortMulti');_fnCompatMap(init,'orderClasses','bSortClasses');_fnCompatMap(init,'orderCellsTop','bSortCellsTop');_fnCompatMap(init,'order','aaSorting');_fnCompatMap(init,'orderFixed','aaSortingFixed');_fnCompatMap(init,'paging','bPaginate');_fnCompatMap(init,'pagingType','sPaginationType');_fnCompatMap(init,'pageLength','iDisplayLength');_fnCompatMap(init,'searching','bFilter');// Boolean initialisation of x-scrolling
if(typeof init.sScrollX==='boolean'){init.sScrollX=init.sScrollX?'100%':'';}if(typeof init.scrollX==='boolean'){init.scrollX=init.scrollX?'100%':'';}// Column search objects are in an array, so it needs to be converted
// element by element
var searchCols=init.aoSearchCols;if(searchCols){for(var i=0,ien=searchCols.length;i<ien;i++){if(searchCols[i]){_fnCamelToHungarian(DataTable.models.oSearch,searchCols[i]);}}}}/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */function _fnCompatCols(init){_fnCompatMap(init,'orderable','bSortable');_fnCompatMap(init,'orderData','aDataSort');_fnCompatMap(init,'orderSequence','asSorting');_fnCompatMap(init,'orderDataType','sortDataType');// orderData can be given as an integer
var dataSort=init.aDataSort;if(typeof dataSort==='number'&&!$.isArray(dataSort)){init.aDataSort=[dataSort];}}/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnBrowserDetect(settings){// We don't need to do this every time DataTables is constructed, the values
// calculated are specific to the browser and OS configuration which we
// don't expect to change between initialisations
if(!DataTable.__browser){var browser={};DataTable.__browser=browser;// Scrolling feature / quirks detection
var n=$('<div/>').css({position:'fixed',top:0,left:$(window).scrollLeft()*-1,// allow for scrolling
height:1,width:1,overflow:'hidden'}).append($('<div/>').css({position:'absolute',top:1,left:1,width:100,overflow:'scroll'}).append($('<div/>').css({width:'100%',height:10}))).appendTo('body');var outer=n.children();var inner=outer.children();// Numbers below, in order, are:
// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
//
// IE6 XP:                           100 100 100  83
// IE7 Vista:                        100 100 100  83
// IE 8+ Windows:                     83  83 100  83
// Evergreen Windows:                 83  83 100  83
// Evergreen Mac with scrollbars:     85  85 100  85
// Evergreen Mac without scrollbars: 100 100 100 100
// Get scrollbar width
browser.barWidth=outer[0].offsetWidth-outer[0].clientWidth;// IE6/7 will oversize a width 100% element inside a scrolling element, to
// include the width of the scrollbar, while other browsers ensure the inner
// element is contained without forcing scrolling
browser.bScrollOversize=inner[0].offsetWidth===100&&outer[0].clientWidth!==100;// In rtl text layout, some browsers (most, but not all) will place the
// scrollbar on the left, rather than the right.
browser.bScrollbarLeft=Math.round(inner.offset().left)!==1;// IE8- don't provide height and width for getBoundingClientRect
browser.bBounding=n[0].getBoundingClientRect().width?true:false;n.remove();}$.extend(settings.oBrowser,DataTable.__browser);settings.oScroll.iBarWidth=DataTable.__browser.barWidth;}/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnReduce(that,fn,init,start,end,inc){var i=start,value,isSet=false;if(init!==undefined){value=init;isSet=true;}while(i!==end){if(!that.hasOwnProperty(i)){continue;}value=isSet?fn(value,that[i],i,that):that[i];isSet=true;i+=inc;}return value;}/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */function _fnAddColumn(oSettings,nTh){// Add column to aoColumns array
var oDefaults=DataTable.defaults.column;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.mData:iCol,idx:iCol});oSettings.aoColumns.push(oCol);// Add search object for column specific search. Note that the `searchCols[ iCol ]`
// passed into extend can be undefined. This allows the user to give a default
// with only some of the parameters defined, and also not give a default
var searchCols=oSettings.aoPreSearchCols;searchCols[iCol]=$.extend({},DataTable.models.oSearch,searchCols[iCol]);// Use the default column options function to initialise classes etc
_fnColumnOptions(oSettings,iCol,$(nTh).data());}/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */function _fnColumnOptions(oSettings,iCol,oOptions){var oCol=oSettings.aoColumns[iCol];var oClasses=oSettings.oClasses;var th=$(oCol.nTh);// Try to get width information from the DOM. We can't get it from CSS
// as we'd need to parse the CSS stylesheet. `width` option can override
if(!oCol.sWidthOrig){// Width attribute
oCol.sWidthOrig=th.attr('width')||null;// Style attribute
var t=(th.attr('style')||'').match(/width:\s*(\d+[pxem%]+)/);if(t){oCol.sWidthOrig=t[1];}}/* User specified column options */if(oOptions!==undefined&&oOptions!==null){// Backwards compatibility
_fnCompatCols(oOptions);// Map camel case parameters to their Hungarian counterparts
_fnCamelToHungarian(DataTable.defaults.column,oOptions);/* Backwards compatibility for mDataProp */if(oOptions.mDataProp!==undefined&&!oOptions.mData){oOptions.mData=oOptions.mDataProp;}if(oOptions.sType){oCol._sManualType=oOptions.sType;}// `class` is a reserved word in Javascript, so we need to provide
// the ability to use a valid name for the camel case input
if(oOptions.className&&!oOptions.sClass){oOptions.sClass=oOptions.className;}if(oOptions.sClass){th.addClass(oOptions.sClass);}$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */if(oOptions.iDataSort!==undefined){oCol.aDataSort=[oOptions.iDataSort];}_fnMap(oCol,oOptions,"aDataSort");}/* Cache the data get and set functions for speed */var mDataSrc=oCol.mData;var mData=_fnGetObjectDataFn(mDataSrc);var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var attrTest=function attrTest(src){return typeof src==='string'&&src.indexOf('@')!==-1;};oCol._bAttrSrc=$.isPlainObject(mDataSrc)&&(attrTest(mDataSrc.sort)||attrTest(mDataSrc.type)||attrTest(mDataSrc.filter));oCol._setter=null;oCol.fnGetData=function(rowData,type,meta){var innerData=mData(rowData,type,undefined,meta);return mRender&&type?mRender(innerData,type,rowData,meta):innerData;};oCol.fnSetData=function(rowData,val,meta){return _fnSetObjectDataFn(mDataSrc)(rowData,val,meta);};// Indicate if DataTables should read DOM data as an object or array
// Used in _fnGetRowElements
if(typeof mDataSrc!=='number'){oSettings._rowReadObject=true;}/* Feature sorting overrides column specific when off */if(!oSettings.oFeatures.bSort){oCol.bSortable=false;th.addClass(oClasses.sSortableNone);// Have to add class here as order event isn't called
}/* Check that the class assignment is correct for sorting */var bAsc=$.inArray('asc',oCol.asSorting)!==-1;var bDesc=$.inArray('desc',oCol.asSorting)!==-1;if(!oCol.bSortable||!bAsc&&!bDesc){oCol.sSortingClass=oClasses.sSortableNone;oCol.sSortingClassJUI="";}else if(bAsc&&!bDesc){oCol.sSortingClass=oClasses.sSortableAsc;oCol.sSortingClassJUI=oClasses.sSortJUIAscAllowed;}else if(!bAsc&&bDesc){oCol.sSortingClass=oClasses.sSortableDesc;oCol.sSortingClassJUI=oClasses.sSortJUIDescAllowed;}else{oCol.sSortingClass=oClasses.sSortable;oCol.sSortingClassJUI=oClasses.sSortJUI;}}/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnAdjustColumnSizing(settings){/* Not interested in doing column width calculation if auto-width is disabled */if(settings.oFeatures.bAutoWidth!==false){var columns=settings.aoColumns;_fnCalculateColumnWidths(settings);for(var i=0,iLen=columns.length;i<iLen;i++){columns[i].nTh.style.width=columns[i].sWidth;}}var scroll=settings.oScroll;if(scroll.sY!==''||scroll.sX!==''){_fnScrollDraw(settings);}_fnCallbackFire(settings,null,'column-sizing',[settings]);}/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */function _fnVisibleToColumnIndex(oSettings,iMatch){var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */function _fnColumnIndexToVisible(oSettings,iMatch){var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */function _fnVisbleColumns(oSettings){var vis=0;// No reduce in IE8, use a loop for now
$.each(oSettings.aoColumns,function(i,col){if(col.bVisible&&$(col.nTh).css('display')!=='none'){vis++;}});return vis;}/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */function _fnGetColumns(oSettings,sParam){var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnColumnTypes(settings){var columns=settings.aoColumns;var data=settings.aoData;var types=DataTable.ext.type.detect;var i,ien,j,jen,k,ken;var col,cell,detectedType,cache;// For each column, spin over the 
for(i=0,ien=columns.length;i<ien;i++){col=columns[i];cache=[];if(!col.sType&&col._sManualType){col.sType=col._sManualType;}else if(!col.sType){for(j=0,jen=types.length;j<jen;j++){for(k=0,ken=data.length;k<ken;k++){// Use a cache array so we only need to get the type data
// from the formatter once (when using multiple detectors)
if(cache[k]===undefined){cache[k]=_fnGetCellData(settings,k,i,'type');}detectedType=types[j](cache[k],settings);// If null, then this type can't apply to this column, so
// rather than testing all cells, break out. There is an
// exception for the last type which is `html`. We need to
// scan all rows since it is possible to mix string and HTML
// types
if(!detectedType&&j!==types.length-1){break;}// Only a single match is needed for html type since it is
// bottom of the pile and very similar to string
if(detectedType==='html'){break;}}// Type is valid for all data points in the column - use this
// type
if(detectedType){col.sType=detectedType;break;}}// Fall back - if no type was detected, always use string
if(!col.sType){col.sType='string';}}}}/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn){var i,iLen,j,jLen,k,kLen,def;var columns=oSettings.aoColumns;// Column definitions with aTargets
if(aoColDefs){/* Loop over the definitions array - loop in reverse so first instance has priority */for(i=aoColDefs.length-1;i>=0;i--){def=aoColDefs[i];/* Each definition can target multiple columns, as it is an array */var aTargets=def.targets!==undefined?def.targets:def.aTargets;if(!$.isArray(aTargets)){aTargets=[aTargets];}for(j=0,jLen=aTargets.length;j<jLen;j++){if(typeof aTargets[j]==='number'&&aTargets[j]>=0){/* Add columns that we don't yet know about */while(columns.length<=aTargets[j]){_fnAddColumn(oSettings);}/* Integer, basic index */fn(aTargets[j],def);}else if(typeof aTargets[j]==='number'&&aTargets[j]<0){/* Negative integer, right to left column counting */fn(columns.length+aTargets[j],def);}else if(typeof aTargets[j]==='string'){/* Class name matching on TH element */for(k=0,kLen=columns.length;k<kLen;k++){if(aTargets[j]=="_all"||$(columns[k].nTh).hasClass(aTargets[j])){fn(k,def);}}}}}}// Statically defined columns array
if(aoCols){for(i=0,iLen=aoCols.length;i<iLen;i++){fn(i,aoCols[i]);}}}/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */function _fnAddData(oSettings,aDataIn,nTr,anTds){/* Create the object for storing information about this new row */var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow,{src:nTr?'dom':'data',idx:iRow});oData._aData=aDataIn;oSettings.aoData.push(oData);/* Create the cells */var nTd,sThisType;var columns=oSettings.aoColumns;// Invalidate the column types as the new data needs to be revalidated
for(var i=0,iLen=columns.length;i<iLen;i++){columns[i].sType=null;}/* Add to the display array */oSettings.aiDisplayMaster.push(iRow);var id=oSettings.rowIdFn(aDataIn);if(id!==undefined){oSettings.aIds[id]=oData;}/* Create the DOM information, or register it if already present */if(nTr||!oSettings.oFeatures.bDeferRender){_fnCreateTr(oSettings,iRow,nTr,anTds);}return iRow;}/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */function _fnAddTr(settings,trs){var row;// Allow an individual node to be passed in
if(!(trs instanceof $)){trs=$(trs);}return trs.map(function(i,el){row=_fnGetRowElements(settings,el);return _fnAddData(settings,row.data,el,row.cells);});}/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */function _fnNodeToDataIndex(oSettings,n){return n._DT_RowIndex!==undefined?n._DT_RowIndex:null;}/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */function _fnNodeToColumnIndex(oSettings,iRow,n){return $.inArray(n,oSettings.aoData[iRow].anCells);}/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */function _fnGetCellData(settings,rowIdx,colIdx,type){var draw=settings.iDraw;var col=settings.aoColumns[colIdx];var rowData=settings.aoData[rowIdx]._aData;var defaultContent=col.sDefaultContent;var cellData=col.fnGetData(rowData,type,{settings:settings,row:rowIdx,col:colIdx});if(cellData===undefined){if(settings.iDrawError!=draw&&defaultContent===null){_fnLog(settings,0,"Requested unknown parameter "+(typeof col.mData=='function'?'{function}':"'"+col.mData+"'")+" for row "+rowIdx+", column "+colIdx,4);settings.iDrawError=draw;}return defaultContent;}// When the data source is null and a specific data type is requested (i.e.
// not the original data), we can use default column data
if((cellData===rowData||cellData===null)&&defaultContent!==null&&type!==undefined){cellData=defaultContent;}else if(typeof cellData==='function'){// If the data source is a function, then we run it and use the return,
// executing in the scope of the data object (for instances)
return cellData.call(rowData);}if(cellData===null&&type=='display'){return'';}return cellData;}/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */function _fnSetCellData(settings,rowIdx,colIdx,val){var col=settings.aoColumns[colIdx];var rowData=settings.aoData[rowIdx]._aData;col.fnSetData(rowData,val,{settings:settings,row:rowIdx,col:colIdx});}// Private variable that is used to match action syntax in the data property object
var __reArray=/\[.*?\]$/;var __reFn=/\(\)$/;/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */function _fnSplitObjNotation(str){return $.map(str.match(/(\\.|[^\.])+/g)||[''],function(s){return s.replace(/\\\./g,'.');});}/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */function _fnGetObjectDataFn(mSource){if($.isPlainObject(mSource)){/* Build an object of get functions, and wrap them in a single call */var o={};$.each(mSource,function(key,val){if(val){o[key]=_fnGetObjectDataFn(val);}});return function(data,type,row,meta){var t=o[type]||o._;return t!==undefined?t(data,type,row,meta):data;};}else if(mSource===null){/* Give an empty string for rendering / sorting etc */return function(data){// type, row and meta also passed, but not used
return data;};}else if(typeof mSource==='function'){return function(data,type,row,meta){return mSource(data,type,row,meta);};}else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1)){/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */var fetchData=function fetchData(data,type,src){var arrayNotation,funcNotation,out,innerSrc;if(src!==""){var a=_fnSplitObjNotation(src);for(var i=0,iLen=a.length;i<iLen;i++){// Check if we are dealing with special notation
arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation){// Array notation
a[i]=a[i].replace(__reArray,'');// Condition allows simply [] to be passed in
if(a[i]!==""){data=data[a[i]];}out=[];// Get the remainder of the nested object to get
a.splice(0,i+1);innerSrc=a.join('.');// Traverse each entry in the array getting the properties requested
if($.isArray(data)){for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}}// If a string is given in between the array notation indicators, that
// is used to join the strings together, otherwise an array is returned
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=join===""?out:out.join(join);// The inner call to fetchData has already traversed through the remainder
// of the source requested, so we exit from the loop
break;}else if(funcNotation){// Function call
a[i]=a[i].replace(__reFn,'');data=data[a[i]]();continue;}if(data===null||data[a[i]]===undefined){return undefined;}data=data[a[i]];}}return data;};return function(data,type){// row and meta also passed, but not used
return fetchData(data,type,mSource);};}else{/* Array or flat object mapping */return function(data,type){// row and meta also passed, but not used
return data[mSource];};}}/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */function _fnSetObjectDataFn(mSource){if($.isPlainObject(mSource)){/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */return _fnSetObjectDataFn(mSource._);}else if(mSource===null){/* Nothing to do when the data source is null */return function(){};}else if(typeof mSource==='function'){return function(data,val,meta){mSource(data,'set',val,meta);};}else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1)){/* Like the get, we need to get data from a nested object */var setData=function setData(data,val,src){var a=_fnSplitObjNotation(src),b;var aLast=a[a.length-1];var arrayNotation,funcNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++){// Check if we are dealing with an array notation request
arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation){a[i]=a[i].replace(__reArray,'');data[a[i]]=[];// Get the remainder of the nested object to set so we can recurse
b=a.slice();b.splice(0,i+1);innerSrc=b.join('.');// Traverse each entry in the array setting the properties requested
if($.isArray(val)){for(var j=0,jLen=val.length;j<jLen;j++){o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}}else{// We've been asked to save data to an array, but it
// isn't array data to be saved. Best that can be done
// is to just save the value.
data[a[i]]=val;}// The inner call to setData has already traversed through the remainder
// of the source and has set the data, thus we can exit here
return;}else if(funcNotation){// Function call
a[i]=a[i].replace(__reFn,'');data=data[a[i]](val);}// If the nested object doesn't currently exist - since we are
// trying to set the value - create it
if(data[a[i]]===null||data[a[i]]===undefined){data[a[i]]={};}data=data[a[i]];}// Last item in the input - i.e, the actual set
if(aLast.match(__reFn)){// Function call
data=data[aLast.replace(__reFn,'')](val);}else{// If array notation is used, we just want to strip it and use the property name
// and assign the value. If it isn't used, then we get the result we want anyway
data[aLast.replace(__reArray,'')]=val;}};return function(data,val){// meta is also passed in, but not used
return setData(data,val,mSource);};}else{/* Array or flat object mapping */return function(data,val){// meta is also passed in, but not used
data[mSource]=val;};}}/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */function _fnGetDataMaster(settings){return _pluck(settings.aoData,'_aData');}/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnClearTable(settings){settings.aoData.length=0;settings.aiDisplayMaster.length=0;settings.aiDisplay.length=0;settings.aIds={};}/**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */function _fnDeleteIndex(a,iTarget,splice){var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++){if(a[i]==iTarget){iTargetIndex=i;}else if(a[i]>iTarget){a[i]--;}}if(iTargetIndex!=-1&&splice===undefined){a.splice(iTargetIndex,1);}}/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */function _fnInvalidate(settings,rowIdx,src,colIdx){var row=settings.aoData[rowIdx];var i,ien;var cellWrite=function cellWrite(cell,col){// This is very frustrating, but in IE if you just write directly
// to innerHTML, and elements that are overwritten are GC'ed,
// even if there is a reference to them elsewhere
while(cell.childNodes.length){cell.removeChild(cell.firstChild);}cell.innerHTML=_fnGetCellData(settings,rowIdx,col,'display');};// Are we reading last data from DOM or the data object?
if(src==='dom'||(!src||src==='auto')&&row.src==='dom'){// Read the data from the DOM
row._aData=_fnGetRowElements(settings,row,colIdx,colIdx===undefined?undefined:row._aData).data;}else{// Reading from data object, update the DOM
var cells=row.anCells;if(cells){if(colIdx!==undefined){cellWrite(cells[colIdx],colIdx);}else{for(i=0,ien=cells.length;i<ien;i++){cellWrite(cells[i],i);}}}}// For both row and cell invalidation, the cached data for sorting and
// filtering is nulled out
row._aSortData=null;row._aFilterData=null;// Invalidate the type for a specific column (if given) or all columns since
// the data might have changed
var cols=settings.aoColumns;if(colIdx!==undefined){cols[colIdx].sType=null;}else{for(i=0,ien=cols.length;i<ien;i++){cols[i].sType=null;}// Update DataTables special `DT_*` attributes for the row
_fnRowAttributes(settings,row);}}/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */function _fnGetRowElements(settings,row,colIdx,d){var tds=[],td=row.firstChild,name,col,o,i=0,contents,columns=settings.aoColumns,objectRead=settings._rowReadObject;// Allow the data object to be passed in, or construct
d=d!==undefined?d:objectRead?{}:[];var attr=function attr(str,td){if(typeof str==='string'){var idx=str.indexOf('@');if(idx!==-1){var attr=str.substring(idx+1);var setter=_fnSetObjectDataFn(str);setter(d,td.getAttribute(attr));}}};// Read data from a cell and store into the data object
var cellProcess=function cellProcess(cell){if(colIdx===undefined||colIdx===i){col=columns[i];contents=$.trim(cell.innerHTML);if(col&&col._bAttrSrc){var setter=_fnSetObjectDataFn(col.mData._);setter(d,contents);attr(col.mData.sort,cell);attr(col.mData.type,cell);attr(col.mData.filter,cell);}else{// Depending on the `data` option for the columns the data can
// be read to either an object or an array.
if(objectRead){if(!col._setter){// Cache the setter function
col._setter=_fnSetObjectDataFn(col.mData);}col._setter(d,contents);}else{d[i]=contents;}}}i++;};if(td){// `tr` element was passed in
while(td){name=td.nodeName.toUpperCase();if(name=="TD"||name=="TH"){cellProcess(td);tds.push(td);}td=td.nextSibling;}}else{// Existing row object passed in
tds=row.anCells;for(var j=0,jen=tds.length;j<jen;j++){cellProcess(tds[j]);}}// Read the ID from the DOM if present
var rowNode=row.firstChild?row:row.nTr;if(rowNode){var id=rowNode.getAttribute('id');if(id){_fnSetObjectDataFn(settings.rowId)(d,id);}}return{data:d,cells:tds};}/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */function _fnCreateTr(oSettings,iRow,nTrIn,anTds){var row=oSettings.aoData[iRow],rowData=row._aData,cells=[],nTr,nTd,oCol,i,iLen;if(row.nTr===null){nTr=nTrIn||document.createElement('tr');row.nTr=nTr;row.anCells=cells;/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */nTr._DT_RowIndex=iRow;/* Special parameters can be given by the data source to be used on the row */_fnRowAttributes(oSettings,row);/* Process each column */for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++){oCol=oSettings.aoColumns[i];nTd=nTrIn?anTds[i]:document.createElement(oCol.sCellType);nTd._DT_CellIndex={row:iRow,column:i};cells.push(nTd);// Need to create the HTML if new, or if a rendering function is defined
if((!nTrIn||oCol.mRender||oCol.mData!==i)&&(!$.isPlainObject(oCol.mData)||oCol.mData._!==i+'.display')){nTd.innerHTML=_fnGetCellData(oSettings,iRow,i,'display');}/* Add user defined class */if(oCol.sClass){nTd.className+=' '+oCol.sClass;}// Visibility - add or remove as required
if(oCol.bVisible&&!nTrIn){nTr.appendChild(nTd);}else if(!oCol.bVisible&&nTrIn){nTd.parentNode.removeChild(nTd);}if(oCol.fnCreatedCell){oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i),rowData,iRow,i);}}_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[nTr,rowData,iRow,cells]);}// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
// and deployed
row.nTr.setAttribute('role','row');}/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */function _fnRowAttributes(settings,row){var tr=row.nTr;var data=row._aData;if(tr){var id=settings.rowIdFn(data);if(id){tr.id=id;}if(data.DT_RowClass){// Remove any classes added by DT_RowClass before
var a=data.DT_RowClass.split(' ');row.__rowc=row.__rowc?_unique(row.__rowc.concat(a)):a;$(tr).removeClass(row.__rowc.join(' ')).addClass(data.DT_RowClass);}if(data.DT_RowAttr){$(tr).attr(data.DT_RowAttr);}if(data.DT_RowData){$(tr).data(data.DT_RowData);}}}/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnBuildHead(oSettings){var i,ien,cell,row,column;var thead=oSettings.nTHead;var tfoot=oSettings.nTFoot;var createHeader=$('th, td',thead).length===0;var classes=oSettings.oClasses;var columns=oSettings.aoColumns;if(createHeader){row=$('<tr/>').appendTo(thead);}for(i=0,ien=columns.length;i<ien;i++){column=columns[i];cell=$(column.nTh).addClass(column.sClass);if(createHeader){cell.appendTo(row);}// 1.11 move into sorting
if(oSettings.oFeatures.bSort){cell.addClass(column.sSortingClass);if(column.bSortable!==false){cell.attr('tabindex',oSettings.iTabIndex).attr('aria-controls',oSettings.sTableId);_fnSortAttachListener(oSettings,column.nTh,i);}}if(column.sTitle!=cell[0].innerHTML){cell.html(column.sTitle);}_fnRenderer(oSettings,'header')(oSettings,cell,column,classes);}if(createHeader){_fnDetectHeader(oSettings.aoHeader,thead);}/* ARIA role for the rows */$(thead).find('>tr').attr('role','row');/* Deal with the footer - add classes if required */$(thead).find('>tr>th, >tr>td').addClass(classes.sHeaderTH);$(tfoot).find('>tr>th, >tr>td').addClass(classes.sFooterTH);// Cache the footer cells. Note that we only take the cells from the first
// row in the footer. If there is more than one row the user wants to
// interact with, they need to use the table().foot() method. Note also this
// allows cells to be used for multiple columns using colspan
if(tfoot!==null){var cells=oSettings.aoFooter[0];for(i=0,ien=cells.length;i<ien;i++){column=columns[i];column.nTf=cells[i].cell;if(column.sClass){$(column.nTf).addClass(column.sClass);}}}}/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */function _fnDrawHead(oSettings,aoSource,bIncludeHidden){var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(!aoSource){return;}if(bIncludeHidden===undefined){bIncludeHidden=false;}/* Make a copy of the master layout array, but without the visible columns in it */for(i=0,iLen=aoSource.length;i<iLen;i++){aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;/* Remove any columns which are currently hidden */for(j=iColumns-1;j>=0;j--){if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden){aoLocal[i].splice(j,1);}}/* Prep the applied array - it needs an element for each row */aApplied.push([]);}for(i=0,iLen=aoLocal.length;i<iLen;i++){nLocalTr=aoLocal[i].nTr;/* All cells are going to be replaced, so empty out the row */if(nLocalTr){while(n=nLocalTr.firstChild){nLocalTr.removeChild(n);}}for(j=0,jLen=aoLocal[i].length;j<jLen;j++){iRowspan=1;iColspan=1;/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */if(aApplied[i][j]===undefined){nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;/* Expand the cell to cover as many rows as needed */while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell){aApplied[i+iRowspan][j]=1;iRowspan++;}/* Expand the cell to cover as many columns as needed */while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell){/* Must update the applied array over the rows for the columns */for(k=0;k<iRowspan;k++){aApplied[i+k][j+iColspan]=1;}iColspan++;}/* Do the actual expansion in the DOM */$(aoLocal[i][j].cell).attr('rowspan',iRowspan).attr('colspan',iColspan);}}}}/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnDraw(oSettings){/* Provide a pre-callback function which can be used to cancel the draw is false is returned */var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1){_fnProcessingDisplay(oSettings,false);return;}var i,iLen,n;var anRows=[];var iRowCount=0;var asStripeClasses=oSettings.asStripeClasses;var iStripes=asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;var oLang=oSettings.oLanguage;var iInitDisplayStart=oSettings.iInitDisplayStart;var bServerSide=_fnDataSource(oSettings)=='ssp';var aiDisplay=oSettings.aiDisplay;oSettings.bDrawing=true;/* Check and see if we have an initial draw position from state saving */if(iInitDisplayStart!==undefined&&iInitDisplayStart!==-1){oSettings._iDisplayStart=bServerSide?iInitDisplayStart:iInitDisplayStart>=oSettings.fnRecordsDisplay()?0:iInitDisplayStart;oSettings.iInitDisplayStart=-1;}var iDisplayStart=oSettings._iDisplayStart;var iDisplayEnd=oSettings.fnDisplayEnd();/* Server-side processing draw intercept */if(oSettings.bDeferLoading){oSettings.bDeferLoading=false;oSettings.iDraw++;_fnProcessingDisplay(oSettings,false);}else if(!bServerSide){oSettings.iDraw++;}else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings)){return;}if(aiDisplay.length!==0){var iStart=bServerSide?0:iDisplayStart;var iEnd=bServerSide?oSettings.aoData.length:iDisplayEnd;for(var j=iStart;j<iEnd;j++){var iDataIndex=aiDisplay[j];var aoData=oSettings.aoData[iDataIndex];if(aoData.nTr===null){_fnCreateTr(oSettings,iDataIndex);}var nRow=aoData.nTr;/* Remove the old striping classes and then add the new one */if(iStripes!==0){var sStripe=asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe){$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}// Row callback functions - might want to manipulate the row
// iRowCount and j are not currently documented. Are they at all
// useful?
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,aoData._aData,iRowCount,j,iDataIndex]);anRows.push(nRow);iRowCount++;}}else{/* Table is empty - create a row with an empty message in it */var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&_fnDataSource(oSettings)=='ajax'){sZero=oLang.sLoadingRecords;}else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0){sZero=oLang.sEmptyTable;}anRows[0]=$('<tr/>',{'class':iStripes?asStripeClasses[0]:''}).append($('<td />',{'valign':'top','colSpan':_fnVisbleColumns(oSettings),'class':oSettings.oClasses.sRowEmpty}).html(sZero))[0];}/* Header and footer callbacks */_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);var body=$(oSettings.nTBody);body.children().detach();body.append($(anRows));/* Call all required callback functions for the end of a draw */_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);/* Draw is complete, sorting and filtering must be as well */oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;}/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */function _fnReDraw(settings,holdPosition){var features=settings.oFeatures,sort=features.bSort,filter=features.bFilter;if(sort){_fnSort(settings);}if(filter){_fnFilterComplete(settings,settings.oPreviousSearch);}else{// No filtering, so we want to just use the display master
settings.aiDisplay=settings.aiDisplayMaster.slice();}if(holdPosition!==true){settings._iDisplayStart=0;}// Let any modules know about the draw hold position state (used by
// scrolling internally)
settings._drawHold=holdPosition;_fnDraw(settings);settings._drawHold=false;}/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnAddOptionsHtml(oSettings){var classes=oSettings.oClasses;var table=$(oSettings.nTable);var holding=$('<div/>').insertBefore(table);// Holding element for speed
var features=oSettings.oFeatures;// All DataTables are wrapped in a div
var insert=$('<div/>',{id:oSettings.sTableId+'_wrapper','class':classes.sWrapper+(oSettings.nTFoot?'':' '+classes.sNoFooter)});oSettings.nHolding=holding[0];oSettings.nTableWrapper=insert[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;/* Loop over the user set positioning and place the elements as needed */var aDom=oSettings.sDom.split('');var featureNode,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++){featureNode=null;cOption=aDom[i];if(cOption=='<'){/* New container div */nNewNode=$('<div/>')[0];/* Check to see if we should append an id and/or a class name to the container */cNext=aDom[i+1];if(cNext=="'"||cNext=='"'){sAttr="";j=2;while(aDom[i+j]!=cNext){sAttr+=aDom[i+j];j++;}/* Replace jQuery UI constants @todo depreciated */if(sAttr=="H"){sAttr=classes.sJUIHeader;}else if(sAttr=="F"){sAttr=classes.sJUIFooter;}/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */if(sAttr.indexOf('.')!=-1){var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}else if(sAttr.charAt(0)=="#"){nNewNode.id=sAttr.substr(1,sAttr.length-1);}else{nNewNode.className=sAttr;}i+=j;/* Move along the position array */}insert.append(nNewNode);insert=$(nNewNode);}else if(cOption=='>'){/* End container div */insert=insert.parent();}// @todo Move options into their own plugins?
else if(cOption=='l'&&features.bPaginate&&features.bLengthChange){/* Length */featureNode=_fnFeatureHtmlLength(oSettings);}else if(cOption=='f'&&features.bFilter){/* Filter */featureNode=_fnFeatureHtmlFilter(oSettings);}else if(cOption=='r'&&features.bProcessing){/* pRocessing */featureNode=_fnFeatureHtmlProcessing(oSettings);}else if(cOption=='t'){/* Table */featureNode=_fnFeatureHtmlTable(oSettings);}else if(cOption=='i'&&features.bInfo){/* Info */featureNode=_fnFeatureHtmlInfo(oSettings);}else if(cOption=='p'&&features.bPaginate){/* Pagination */featureNode=_fnFeatureHtmlPaginate(oSettings);}else if(DataTable.ext.feature.length!==0){/* Plug-in features */var aoFeatures=DataTable.ext.feature;for(var k=0,kLen=aoFeatures.length;k<kLen;k++){if(cOption==aoFeatures[k].cFeature){featureNode=aoFeatures[k].fnInit(oSettings);break;}}}/* Add to the 2D features array */if(featureNode){var aanFeatures=oSettings.aanFeatures;if(!aanFeatures[cOption]){aanFeatures[cOption]=[];}aanFeatures[cOption].push(featureNode);insert.append(featureNode);}}/* Built our DOM structure - replace the holding div with what we want */holding.replaceWith(insert);oSettings.nHolding=null;}/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */function _fnDetectHeader(aLayout,nThead){var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function fnShiftCol(a,i,j){var k=a[i];while(k[j]){j++;}return j;};aLayout.splice(0,aLayout.length);/* We know how many rows there are in the layout - so prep it */for(i=0,iLen=nTrs.length;i<iLen;i++){aLayout.push([]);}/* Calculate a layout array */for(i=0,iLen=nTrs.length;i<iLen;i++){nTr=nTrs[i];iColumn=0;/* For every cell in the row... */nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH"){/* Get the col and rowspan attributes from the DOM and sanitise them */iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=!iColspan||iColspan===0||iColspan===1?1:iColspan;iRowspan=!iRowspan||iRowspan===0||iRowspan===1?1:iRowspan;/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */iColShifted=fnShiftCol(aLayout,i,iColumn);/* Cache calculation for unique columns */bUnique=iColspan===1?true:false;/* If there is col / rowspan, copy the information into the layout grid */for(l=0;l<iColspan;l++){for(k=0;k<iRowspan;k++){aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}nCell=nCell.nextSibling;}}}/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */function _fnGetUniqueThs(oSettings,nHeader,aLayout){var aReturn=[];if(!aLayout){aLayout=oSettings.aoHeader;if(nHeader){aLayout=[];_fnDetectHeader(aLayout,nHeader);}}for(var i=0,iLen=aLayout.length;i<iLen;i++){for(var j=0,jLen=aLayout[i].length;j<jLen;j++){if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop)){aReturn[j]=aLayout[i][j].cell;}}}return aReturn;}/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */function _fnBuildAjax(oSettings,data,fn){// Compatibility with 1.9-, allow fnServerData and event to manipulate
_fnCallbackFire(oSettings,'aoServerParams','serverParams',[data]);// Convert to object based for 1.10+ if using the old array scheme which can
// come from server-side processing or serverParams
if(data&&$.isArray(data)){var tmp={};var rbracket=/(.*?)\[\]$/;$.each(data,function(key,val){var match=val.name.match(rbracket);if(match){// Support for arrays
var name=match[0];if(!tmp[name]){tmp[name]=[];}tmp[name].push(val.value);}else{tmp[val.name]=val.value;}});data=tmp;}var ajaxData;var ajax=oSettings.ajax;var instance=oSettings.oInstance;var callback=function callback(json){_fnCallbackFire(oSettings,null,'xhr',[oSettings,json,oSettings.jqXHR]);fn(json);};if($.isPlainObject(ajax)&&ajax.data){ajaxData=ajax.data;var newData=typeof ajaxData==='function'?ajaxData(data,oSettings):// fn can manipulate data or return
ajaxData;// an object object or array to merge
// If the function returned something, use that alone
data=typeof ajaxData==='function'&&newData?newData:$.extend(true,data,newData);// Remove the data property as we've resolved it already and don't want
// jQuery to do it again (it is restored at the end of the function)
delete ajax.data;}var baseAjax={"data":data,"success":function success(json){var error=json.error||json.sError;if(error){_fnLog(oSettings,0,error);}oSettings.json=json;callback(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function error(xhr,_error,thrown){var ret=_fnCallbackFire(oSettings,null,'xhr',[oSettings,null,oSettings.jqXHR]);if($.inArray(true,ret)===-1){if(_error=="parsererror"){_fnLog(oSettings,0,'Invalid JSON response',1);}else if(xhr.readyState===4){_fnLog(oSettings,0,'Ajax error',7);}}_fnProcessingDisplay(oSettings,false);}};// Store the data submitted for the API
oSettings.oAjaxData=data;// Allow plug-ins and external processes to modify the data
_fnCallbackFire(oSettings,null,'preXhr',[oSettings,data]);if(oSettings.fnServerData){// DataTables 1.9- compatibility
oSettings.fnServerData.call(instance,oSettings.sAjaxSource,$.map(data,function(val,key){// Need to convert back to 1.9 trad format
return{name:key,value:val};}),callback,oSettings);}else if(oSettings.sAjaxSource||typeof ajax==='string'){// DataTables 1.9- compatibility
oSettings.jqXHR=$.ajax($.extend(baseAjax,{url:ajax||oSettings.sAjaxSource}));}else if(typeof ajax==='function'){// Is a function - let the caller define what needs to be done
oSettings.jqXHR=ajax.call(instance,data,callback,oSettings);}else{// Object to extend the base settings
oSettings.jqXHR=$.ajax($.extend(baseAjax,ajax));// Restore for next time around
ajax.data=ajaxData;}}/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */function _fnAjaxUpdate(settings){if(settings.bAjaxDataGet){settings.iDraw++;_fnProcessingDisplay(settings,true);_fnBuildAjax(settings,_fnAjaxParameters(settings),function(json){_fnAjaxUpdateDraw(settings,json);});return false;}return true;}/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */function _fnAjaxParameters(settings){var columns=settings.aoColumns,columnCount=columns.length,features=settings.oFeatures,preSearch=settings.oPreviousSearch,preColSearch=settings.aoPreSearchCols,i,data=[],dataProp,column,columnSearch,sort=_fnSortFlatten(settings),displayStart=settings._iDisplayStart,displayLength=features.bPaginate!==false?settings._iDisplayLength:-1;var param=function param(name,value){data.push({'name':name,'value':value});};// DataTables 1.9- compatible method
param('sEcho',settings.iDraw);param('iColumns',columnCount);param('sColumns',_pluck(columns,'sName').join(','));param('iDisplayStart',displayStart);param('iDisplayLength',displayLength);// DataTables 1.10+ method
var d={draw:settings.iDraw,columns:[],order:[],start:displayStart,length:displayLength,search:{value:preSearch.sSearch,regex:preSearch.bRegex}};for(i=0;i<columnCount;i++){column=columns[i];columnSearch=preColSearch[i];dataProp=typeof column.mData=="function"?'function':column.mData;d.columns.push({data:dataProp,name:column.sName,searchable:column.bSearchable,orderable:column.bSortable,search:{value:columnSearch.sSearch,regex:columnSearch.bRegex}});param("mDataProp_"+i,dataProp);if(features.bFilter){param('sSearch_'+i,columnSearch.sSearch);param('bRegex_'+i,columnSearch.bRegex);param('bSearchable_'+i,column.bSearchable);}if(features.bSort){param('bSortable_'+i,column.bSortable);}}if(features.bFilter){param('sSearch',preSearch.sSearch);param('bRegex',preSearch.bRegex);}if(features.bSort){$.each(sort,function(i,val){d.order.push({column:val.col,dir:val.dir});param('iSortCol_'+i,val.col);param('sSortDir_'+i,val.dir);});param('iSortingCols',sort.length);}// If the legacy.ajax parameter is null, then we automatically decide which
// form to use, based on sAjaxSource
var legacy=DataTable.ext.legacy.ajax;if(legacy===null){return settings.sAjaxSource?data:d;}// Otherwise, if legacy has been specified then we use that to decide on the
// form
return legacy?data:d;}/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */function _fnAjaxUpdateDraw(settings,json){// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
// Support both
var compat=function compat(old,modern){return json[old]!==undefined?json[old]:json[modern];};var data=_fnAjaxDataSrc(settings,json);var draw=compat('sEcho','draw');var recordsTotal=compat('iTotalRecords','recordsTotal');var recordsFiltered=compat('iTotalDisplayRecords','recordsFiltered');if(draw){// Protect against out of sequence returns
if(draw*1<settings.iDraw){return;}settings.iDraw=draw*1;}_fnClearTable(settings);settings._iRecordsTotal=parseInt(recordsTotal,10);settings._iRecordsDisplay=parseInt(recordsFiltered,10);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}settings.aiDisplay=settings.aiDisplayMaster.slice();settings.bAjaxDataGet=false;_fnDraw(settings);if(!settings._bInitComplete){_fnInitComplete(settings,json);}settings.bAjaxDataGet=true;_fnProcessingDisplay(settings,false);}/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */function _fnAjaxDataSrc(oSettings,json){var dataSrc=$.isPlainObject(oSettings.ajax)&&oSettings.ajax.dataSrc!==undefined?oSettings.ajax.dataSrc:oSettings.sAjaxDataProp;// Compatibility with 1.9-.
// Compatibility with 1.9-. In order to read from aaData, check if the
// default has been changed, if not, check for aaData
if(dataSrc==='data'){return json.aaData||json[dataSrc];}return dataSrc!==""?_fnGetObjectDataFn(dataSrc)(json):json;}/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnFeatureHtmlFilter(settings){var classes=settings.oClasses;var tableId=settings.sTableId;var language=settings.oLanguage;var previousSearch=settings.oPreviousSearch;var features=settings.aanFeatures;var input='<input type="search" class="'+classes.sFilterInput+'"/>';var str=language.sSearch;str=str.match(/_INPUT_/)?str.replace('_INPUT_',input):str+input;var filter=$('<div/>',{'id':!features.f?tableId+'_filter':null,'class':classes.sFilter}).append($('<label/>').append(str));var searchFn=function searchFn(){/* Update all other filter input elements for the new display */var n=features.f;var val=!this.value?"":this.value;// mental IE8 fix :-(
/* Now do the filter */if(val!=previousSearch.sSearch){_fnFilterComplete(settings,{"sSearch":val,"bRegex":previousSearch.bRegex,"bSmart":previousSearch.bSmart,"bCaseInsensitive":previousSearch.bCaseInsensitive});// Need to redraw, without resorting
settings._iDisplayStart=0;_fnDraw(settings);}};var searchDelay=settings.searchDelay!==null?settings.searchDelay:_fnDataSource(settings)==='ssp'?400:0;var jqFilter=$('input',filter).val(previousSearch.sSearch).attr('placeholder',language.sSearchPlaceholder).on('keyup.DT search.DT input.DT paste.DT cut.DT',searchDelay?_fnThrottle(searchFn,searchDelay):searchFn).on('keypress.DT',function(e){/* Prevent form submission */if(e.keyCode==13){return false;}}).attr('aria-controls',tableId);// Update the input elements whenever the table is filtered
$(settings.nTable).on('search.dt.DT',function(ev,s){if(settings===s){// IE9 throws an 'unknown error' if document.activeElement is used
// inside an iframe or frame...
try{if(jqFilter[0]!==document.activeElement){jqFilter.val(previousSearch.sSearch);}}catch(e){}}});return filter[0];}/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */function _fnFilterComplete(oSettings,oInput,iForce){var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function fnSaveFilter(oFilter){/* Save the filtering values */oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};var fnRegex=function fnRegex(o){// Backwards compatibility with the bEscapeRegex option
return o.bEscapeRegex!==undefined?!o.bEscapeRegex:o.bRegex;};// Resolve any column types that are unknown due to addition or invalidation
// @todo As per sort - can this be moved into an event handler?
_fnColumnTypes(oSettings);/* In server-side processing all filtering is done by the server, so no point hanging around here */if(_fnDataSource(oSettings)!='ssp'){/* Global filter */_fnFilter(oSettings,oInput.sSearch,iForce,fnRegex(oInput),oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);/* Now do the individual column filter */for(var i=0;i<aoPrevSearch.length;i++){_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,fnRegex(aoPrevSearch[i]),aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}/* Custom filtering */_fnFilterCustom(oSettings);}else{fnSaveFilter(oInput);}/* Tell the draw function we have been filtering */oSettings.bFiltered=true;_fnCallbackFire(oSettings,null,'search',[oSettings]);}/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnFilterCustom(settings){var filters=DataTable.ext.search;var displayRows=settings.aiDisplay;var row,rowIdx;for(var i=0,ien=filters.length;i<ien;i++){var rows=[];// Loop over each row and see if it should be included
for(var j=0,jen=displayRows.length;j<jen;j++){rowIdx=displayRows[j];row=settings.aoData[rowIdx];if(filters[i](settings,row._aFilterData,rowIdx,row._aData,j)){rows.push(rowIdx);}}// So the array reference doesn't break set the results into the
// existing array
displayRows.length=0;$.merge(displayRows,rows);}}/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */function _fnFilterColumn(settings,searchStr,colIdx,regex,smart,caseInsensitive){if(searchStr===''){return;}var data;var out=[];var display=settings.aiDisplay;var rpSearch=_fnFilterCreateSearch(searchStr,regex,smart,caseInsensitive);for(var i=0;i<display.length;i++){data=settings.aoData[display[i]]._aFilterData[colIdx];if(rpSearch.test(data)){out.push(display[i]);}}settings.aiDisplay=out;}/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */function _fnFilter(settings,input,force,regex,smart,caseInsensitive){var rpSearch=_fnFilterCreateSearch(input,regex,smart,caseInsensitive);var prevSearch=settings.oPreviousSearch.sSearch;var displayMaster=settings.aiDisplayMaster;var display,invalidated,i;var filtered=[];// Need to take account of custom filtering functions - always filter
if(DataTable.ext.search.length!==0){force=true;}// Check if any of the rows were invalidated
invalidated=_fnFilterData(settings);// If the input is blank - we just want the full data set
if(input.length<=0){settings.aiDisplay=displayMaster.slice();}else{// New search - start from the master array
if(invalidated||force||prevSearch.length>input.length||input.indexOf(prevSearch)!==0||settings.bSorted// On resort, the display master needs to be
// re-filtered since indexes will have changed
){settings.aiDisplay=displayMaster.slice();}// Search the display array
display=settings.aiDisplay;for(i=0;i<display.length;i++){if(rpSearch.test(settings.aoData[display[i]]._sFilterRow)){filtered.push(display[i]);}}settings.aiDisplay=filtered;}}/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */function _fnFilterCreateSearch(search,regex,smart,caseInsensitive){search=regex?search:_fnEscapeRegex(search);if(smart){/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */var a=$.map(search.match(/"[^"]+"|[^ ]+/g)||[''],function(word){if(word.charAt(0)==='"'){var m=word.match(/^"(.*)"$/);word=m?m[1]:word;}return word.replace('"','');});search='^(?=.*?'+a.join(')(?=.*?')+').*$';}return new RegExp(search,caseInsensitive?'i':'');}/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */var _fnEscapeRegex=DataTable.util.escapeRegex;var __filter_div=$('<div>')[0];var __filter_div_textContent=__filter_div.textContent!==undefined;// Update the filtering data for each row if needed (by invalidation or first run)
function _fnFilterData(settings){var columns=settings.aoColumns;var column;var i,j,ien,jen,filterData,cellData,row;var fomatters=DataTable.ext.type.search;var wasInvalidated=false;for(i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aFilterData){filterData=[];for(j=0,jen=columns.length;j<jen;j++){column=columns[j];if(column.bSearchable){cellData=_fnGetCellData(settings,i,j,'filter');if(fomatters[column.sType]){cellData=fomatters[column.sType](cellData);}// Search in DataTables 1.10 is string based. In 1.11 this
// should be altered to also allow strict type checking.
if(cellData===null){cellData='';}if(typeof cellData!=='string'&&cellData.toString){cellData=cellData.toString();}}else{cellData='';}// If it looks like there is an HTML entity in the string,
// attempt to decode it so sorting works as expected. Note that
// we could use a single line of jQuery to do this, but the DOM
// method used here is much faster http://jsperf.com/html-decode
if(cellData.indexOf&&cellData.indexOf('&')!==-1){__filter_div.innerHTML=cellData;cellData=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText;}if(cellData.replace){cellData=cellData.replace(/[\r\n]/g,'');}filterData.push(cellData);}row._aFilterData=filterData;row._sFilterRow=filterData.join('  ');wasInvalidated=true;}}return wasInvalidated;}/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */function _fnSearchToCamel(obj){return{search:obj.sSearch,smart:obj.bSmart,regex:obj.bRegex,caseInsensitive:obj.bCaseInsensitive};}/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */function _fnSearchToHung(obj){return{sSearch:obj.search,bSmart:obj.smart,bRegex:obj.regex,bCaseInsensitive:obj.caseInsensitive};}/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */function _fnFeatureHtmlInfo(settings){var tid=settings.sTableId,nodes=settings.aanFeatures.i,n=$('<div/>',{'class':settings.oClasses.sInfo,'id':!nodes?tid+'_info':null});if(!nodes){// Update display on each draw
settings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});n.attr('role','status').attr('aria-live','polite');// Table is described by our info div
$(settings.nTable).attr('aria-describedby',tid+'_info');}return n[0];}/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnUpdateInfo(settings){/* Show information about the table */var nodes=settings.aanFeatures.i;if(nodes.length===0){return;}var lang=settings.oLanguage,start=settings._iDisplayStart+1,end=settings.fnDisplayEnd(),max=settings.fnRecordsTotal(),total=settings.fnRecordsDisplay(),out=total?lang.sInfo:lang.sInfoEmpty;if(total!==max){/* Record set after filtering */out+=' '+lang.sInfoFiltered;}// Convert the macros
out+=lang.sInfoPostFix;out=_fnInfoMacros(settings,out);var callback=lang.fnInfoCallback;if(callback!==null){out=callback.call(settings.oInstance,settings,start,end,max,total,out);}$(nodes).html(out);}function _fnInfoMacros(settings,str){// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
// internally
var formatter=settings.fnFormatNumber,start=settings._iDisplayStart+1,len=settings._iDisplayLength,vis=settings.fnRecordsDisplay(),all=len===-1;return str.replace(/_START_/g,formatter.call(settings,start)).replace(/_END_/g,formatter.call(settings,settings.fnDisplayEnd())).replace(/_MAX_/g,formatter.call(settings,settings.fnRecordsTotal())).replace(/_TOTAL_/g,formatter.call(settings,vis)).replace(/_PAGE_/g,formatter.call(settings,all?1:Math.ceil(start/len))).replace(/_PAGES_/g,formatter.call(settings,all?1:Math.ceil(vis/len)));}/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnInitialise(settings){var i,iLen,iAjaxStart=settings.iInitDisplayStart;var columns=settings.aoColumns,column;var features=settings.oFeatures;var deferLoading=settings.bDeferLoading;// value modified by the draw
/* Ensure that the table data is fully initialised */if(!settings.bInitialised){setTimeout(function(){_fnInitialise(settings);},200);return;}/* Show the display HTML options */_fnAddOptionsHtml(settings);/* Build and draw the header / footer for the table */_fnBuildHead(settings);_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);/* Okay to show that something is going on now */_fnProcessingDisplay(settings,true);/* Calculate sizes for columns */if(features.bAutoWidth){_fnCalculateColumnWidths(settings);}for(i=0,iLen=columns.length;i<iLen;i++){column=columns[i];if(column.sWidth){column.nTh.style.width=_fnStringToCss(column.sWidth);}}_fnCallbackFire(settings,null,'preInit',[settings]);// If there is default sorting required - let's do it. The sort function
// will do the drawing for us. Otherwise we draw the table regardless of the
// Ajax source - this allows the table to look initialised for Ajax sourcing
// data (show 'loading' message possibly)
_fnReDraw(settings);// Server-side processing init complete is done by _fnAjaxUpdateDraw
var dataSrc=_fnDataSource(settings);if(dataSrc!='ssp'||deferLoading){// if there is an ajax source load the data
if(dataSrc=='ajax'){_fnBuildAjax(settings,[],function(json){var aData=_fnAjaxDataSrc(settings,json);// Got the data - add it to the table
for(i=0;i<aData.length;i++){_fnAddData(settings,aData[i]);}// Reset the init display for cookie saving. We've already done
// a filter, and therefore cleared it before. So we need to make
// it appear 'fresh'
settings.iInitDisplayStart=iAjaxStart;_fnReDraw(settings);_fnProcessingDisplay(settings,false);_fnInitComplete(settings,json);},settings);}else{_fnProcessingDisplay(settings,false);_fnInitComplete(settings);}}}/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */function _fnInitComplete(settings,json){settings._bInitComplete=true;// When data was added after the initialisation (data or Ajax) we need to
// calculate the column sizing
if(json||settings.oInit.aaData){_fnAdjustColumnSizing(settings);}_fnCallbackFire(settings,null,'plugin-init',[settings,json]);_fnCallbackFire(settings,'aoInitComplete','init',[settings,json]);}function _fnLengthChange(settings,val){var len=parseInt(val,10);settings._iDisplayLength=len;_fnLengthOverflow(settings);// Fire length change event
_fnCallbackFire(settings,null,'length',[settings,len]);}/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */function _fnFeatureHtmlLength(settings){var classes=settings.oClasses,tableId=settings.sTableId,menu=settings.aLengthMenu,d2=$.isArray(menu[0]),lengths=d2?menu[0]:menu,language=d2?menu[1]:menu;var select=$('<select/>',{'name':tableId+'_length','aria-controls':tableId,'class':classes.sLengthSelect});for(var i=0,ien=lengths.length;i<ien;i++){select[0][i]=new Option(typeof language[i]==='number'?settings.fnFormatNumber(language[i]):language[i],lengths[i]);}var div=$('<div><label/></div>').addClass(classes.sLength);if(!settings.aanFeatures.l){div[0].id=tableId+'_length';}div.children().append(settings.oLanguage.sLengthMenu.replace('_MENU_',select[0].outerHTML));// Can't use `select` variable as user might provide their own and the
// reference is broken by the use of outerHTML
$('select',div).val(settings._iDisplayLength).on('change.DT',function(e){_fnLengthChange(settings,$(this).val());_fnDraw(settings);});// Update node value whenever anything changes the table's length
$(settings.nTable).on('length.dt.DT',function(e,s,len){if(settings===s){$('select',div).val(len);}});return div[0];}/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */ /**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */function _fnFeatureHtmlPaginate(settings){var type=settings.sPaginationType,plugin=DataTable.ext.pager[type],modern=typeof plugin==='function',redraw=function redraw(settings){_fnDraw(settings);},node=$('<div/>').addClass(settings.oClasses.sPaging+type)[0],features=settings.aanFeatures;if(!modern){plugin.fnInit(settings,node,redraw);}/* Add a draw callback for the pagination on first instance, to update the paging display */if(!features.p){node.id=settings.sTableId+'_paginate';settings.aoDrawCallback.push({"fn":function fn(settings){if(modern){var start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1,page=all?0:Math.ceil(start/len),pages=all?1:Math.ceil(visRecords/len),buttons=plugin(page,pages),i,ien;for(i=0,ien=features.p.length;i<ien;i++){_fnRenderer(settings,'pageButton')(settings,features.p[i],i,buttons,page,pages);}}else{plugin.fnUpdate(settings,redraw);}},"sName":"pagination"});}return node;}/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */function _fnPageChange(settings,action,redraw){var start=settings._iDisplayStart,len=settings._iDisplayLength,records=settings.fnRecordsDisplay();if(records===0||len===-1){start=0;}else if(typeof action==="number"){start=action*len;if(start>records){start=0;}}else if(action=="first"){start=0;}else if(action=="previous"){start=len>=0?start-len:0;if(start<0){start=0;}}else if(action=="next"){if(start+len<records){start+=len;}}else if(action=="last"){start=Math.floor((records-1)/len)*len;}else{_fnLog(settings,0,"Unknown paging action: "+action,5);}var changed=settings._iDisplayStart!==start;settings._iDisplayStart=start;if(changed){_fnCallbackFire(settings,null,'page',[settings]);if(redraw){_fnDraw(settings);}}return changed;}/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */function _fnFeatureHtmlProcessing(settings){return $('<div/>',{'id':!settings.aanFeatures.r?settings.sTableId+'_processing':null,'class':settings.oClasses.sProcessing}).html(settings.oLanguage.sProcessing).insertBefore(settings.nTable)[0];}/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */function _fnProcessingDisplay(settings,show){if(settings.oFeatures.bProcessing){$(settings.aanFeatures.r).css('display',show?'block':'none');}_fnCallbackFire(settings,null,'processing',[settings,show]);}/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */function _fnFeatureHtmlTable(settings){var table=$(settings.nTable);// Add the ARIA grid role to the table
table.attr('role','grid');// Scrolling from here on in
var scroll=settings.oScroll;if(scroll.sX===''&&scroll.sY===''){return settings.nTable;}var scrollX=scroll.sX;var scrollY=scroll.sY;var classes=settings.oClasses;var caption=table.children('caption');var captionSide=caption.length?caption[0]._captionSide:null;var headerClone=$(table[0].cloneNode(false));var footerClone=$(table[0].cloneNode(false));var footer=table.children('tfoot');var _div='<div/>';var size=function size(s){return!s?null:_fnStringToCss(s);};if(!footer.length){footer=null;}/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */var scroller=$(_div,{'class':classes.sScrollWrapper}).append($(_div,{'class':classes.sScrollHead}).css({overflow:'hidden',position:'relative',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollHeadInner}).css({'box-sizing':'content-box',width:scroll.sXInner||'100%'}).append(headerClone.removeAttr('id').css('margin-left',0).append(captionSide==='top'?caption:null).append(table.children('thead'))))).append($(_div,{'class':classes.sScrollBody}).css({position:'relative',overflow:'auto',width:size(scrollX)}).append(table));if(footer){scroller.append($(_div,{'class':classes.sScrollFoot}).css({overflow:'hidden',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollFootInner}).append(footerClone.removeAttr('id').css('margin-left',0).append(captionSide==='bottom'?caption:null).append(table.children('tfoot')))));}var children=scroller.children();var scrollHead=children[0];var scrollBody=children[1];var scrollFoot=footer?children[2]:null;// When the body is scrolled, then we also want to scroll the headers
if(scrollX){$(scrollBody).on('scroll.DT',function(e){var scrollLeft=this.scrollLeft;scrollHead.scrollLeft=scrollLeft;if(footer){scrollFoot.scrollLeft=scrollLeft;}});}$(scrollBody).css(scrollY&&scroll.bCollapse?'max-height':'height',scrollY);settings.nScrollHead=scrollHead;settings.nScrollBody=scrollBody;settings.nScrollFoot=scrollFoot;// On redraw - align columns
settings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});return scroller[0];}/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnScrollDraw(settings){// Given that this is such a monster function, a lot of variables are use
// to try and keep the minimised size as small as possible
var scroll=settings.oScroll,scrollX=scroll.sX,scrollXInner=scroll.sXInner,scrollY=scroll.sY,barWidth=scroll.iBarWidth,divHeader=$(settings.nScrollHead),divHeaderStyle=divHeader[0].style,divHeaderInner=divHeader.children('div'),divHeaderInnerStyle=divHeaderInner[0].style,divHeaderTable=divHeaderInner.children('table'),divBodyEl=settings.nScrollBody,divBody=$(divBodyEl),divBodyStyle=divBodyEl.style,divFooter=$(settings.nScrollFoot),divFooterInner=divFooter.children('div'),divFooterTable=divFooterInner.children('table'),header=$(settings.nTHead),table=$(settings.nTable),tableEl=table[0],tableStyle=tableEl.style,footer=settings.nTFoot?$(settings.nTFoot):null,browser=settings.oBrowser,ie67=browser.bScrollOversize,dtHeaderCells=_pluck(settings.aoColumns,'nTh'),headerTrgEls,footerTrgEls,headerSrcEls,footerSrcEls,headerCopy,footerCopy,headerWidths=[],footerWidths=[],headerContent=[],footerContent=[],idx,correction,sanityWidth,zeroOut=function zeroOut(nSizer){var style=nSizer.style;style.paddingTop="0";style.paddingBottom="0";style.borderTopWidth="0";style.borderBottomWidth="0";style.height=0;};// If the scrollbar visibility has changed from the last draw, we need to
// adjust the column sizes as the table width will have changed to account
// for the scrollbar
var scrollBarVis=divBodyEl.scrollHeight>divBodyEl.clientHeight;if(settings.scrollBarVis!==scrollBarVis&&settings.scrollBarVis!==undefined){settings.scrollBarVis=scrollBarVis;_fnAdjustColumnSizing(settings);return;// adjust column sizing will call this function again
}else{settings.scrollBarVis=scrollBarVis;}/*
		 * 1. Re-create the table inside the scrolling div
		 */ // Remove the old minimised thead and tfoot elements in the inner table
table.children('thead, tfoot').remove();if(footer){footerCopy=footer.clone().prependTo(table);footerTrgEls=footer.find('tr');// the original tfoot is in its own table and must be sized
footerSrcEls=footerCopy.find('tr');}// Clone the current header and footer elements and then place it into the inner table
headerCopy=header.clone().prependTo(table);headerTrgEls=header.find('tr');// original header is in its own table
headerSrcEls=headerCopy.find('tr');headerCopy.find('th, td').removeAttr('tabindex');/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */ // Remove old sizing and apply the calculated column widths
// Get the unique column headers in the newly created (cloned) header. We want to apply the
// calculated sizes to this header
if(!scrollX){divBodyStyle.width='100%';divHeader[0].style.width='100%';}$.each(_fnGetUniqueThs(settings,headerCopy),function(i,el){idx=_fnVisibleToColumnIndex(settings,i);el.style.width=settings.aoColumns[idx].sWidth;});if(footer){_fnApplyToChildren(function(n){n.style.width="";},footerSrcEls);}// Size the table as a whole
sanityWidth=table.outerWidth();if(scrollX===""){// No x scrolling
tableStyle.width="100%";// IE7 will make the width of the table when 100% include the scrollbar
// - which is shouldn't. When there is a scrollbar we need to take this
// into account.
if(ie67&&(table.find('tbody').height()>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(table.outerWidth()-barWidth);}// Recalculate the sanity width
sanityWidth=table.outerWidth();}else if(scrollXInner!==""){// legacy x scroll inner has been given - use it
tableStyle.width=_fnStringToCss(scrollXInner);// Recalculate the sanity width
sanityWidth=table.outerWidth();}// Hidden header should have zero height, so remove padding and borders. Then
// set the width based on the real headers
// Apply all styles in one pass
_fnApplyToChildren(zeroOut,headerSrcEls);// Read all widths in next pass
_fnApplyToChildren(function(nSizer){headerContent.push(nSizer.innerHTML);headerWidths.push(_fnStringToCss($(nSizer).css('width')));},headerSrcEls);// Apply all widths in final pass
_fnApplyToChildren(function(nToSize,i){// Only apply widths to the DataTables detected header cells - this
// prevents complex headers from having contradictory sizes applied
if($.inArray(nToSize,dtHeaderCells)!==-1){nToSize.style.width=headerWidths[i];}},headerTrgEls);$(headerSrcEls).height(0);/* Same again with the footer if we have one */if(footer){_fnApplyToChildren(zeroOut,footerSrcEls);_fnApplyToChildren(function(nSizer){footerContent.push(nSizer.innerHTML);footerWidths.push(_fnStringToCss($(nSizer).css('width')));},footerSrcEls);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=footerWidths[i];},footerTrgEls);$(footerSrcEls).height(0);}/*
		 * 3. Apply the measurements
		 */ // "Hide" the header and footer that we used for the sizing. We need to keep
// the content of the cell so that the width applied to the header and body
// both match, but we want to hide it completely. We want to also fix their
// width to what they currently are
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing">'+headerContent[i]+'</div>';nSizer.childNodes[0].style.height="0";nSizer.childNodes[0].style.overflow="hidden";nSizer.style.width=headerWidths[i];},headerSrcEls);if(footer){_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing">'+footerContent[i]+'</div>';nSizer.childNodes[0].style.height="0";nSizer.childNodes[0].style.overflow="hidden";nSizer.style.width=footerWidths[i];},footerSrcEls);}// Sanity check that the table is of a sensible width. If not then we are going to get
// misalignment - try to prevent this by not allowing the table to shrink below its min width
if(table.outerWidth()<sanityWidth){// The min width depends upon if we have a vertical scrollbar visible or not */
correction=divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll"?sanityWidth+barWidth:sanityWidth;// IE6/7 are a law unto themselves...
if(ie67&&(divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(correction-barWidth);}// And give the user a warning that we've stopped the table getting too small
if(scrollX===""||scrollXInner!==""){_fnLog(settings,1,'Possible column misalignment',6);}}else{correction='100%';}// Apply to the container elements
divBodyStyle.width=_fnStringToCss(correction);divHeaderStyle.width=_fnStringToCss(correction);if(footer){settings.nScrollFoot.style.width=_fnStringToCss(correction);}/*
		 * 4. Clean up
		 */if(!scrollY){/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */if(ie67){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+barWidth);}}/* Finally set the width's of the header and footer tables */var iOuterWidth=table.outerWidth();divHeaderTable[0].style.width=_fnStringToCss(iOuterWidth);divHeaderInnerStyle.width=_fnStringToCss(iOuterWidth);// Figure out if there are scrollbar present - if so then we need a the header and footer to
// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
var bScrolling=table.height()>divBodyEl.clientHeight||divBody.css('overflow-y')=="scroll";var padding='padding'+(browser.bScrollbarLeft?'Left':'Right');divHeaderInnerStyle[padding]=bScrolling?barWidth+"px":"0px";if(footer){divFooterTable[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style[padding]=bScrolling?barWidth+"px":"0px";}// Correct DOM ordering for colgroup - comes before the thead
table.children('colgroup').insertBefore(table.children('thead'));/* Adjust the position of the header in case we loose the y-scrollbar */divBody.scroll();// If sorting or filtering has occurred, jump the scrolling back to the top
// only if we aren't holding the position
if((settings.bSorted||settings.bFiltered)&&!settings._drawHold){divBodyEl.scrollTop=0;}}/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */function _fnApplyToChildren(fn,an1,an2){var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen){nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1){if(nNode1.nodeType===1){if(an2){fn(nNode1,nNode2,index);}else{fn(nNode1,index);}index++;}nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}i++;}}var __re_html_remove=/<.*?>/g;/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnCalculateColumnWidths(oSettings){var table=oSettings.nTable,columns=oSettings.aoColumns,scroll=oSettings.oScroll,scrollY=scroll.sY,scrollX=scroll.sX,scrollXInner=scroll.sXInner,columnCount=columns.length,visibleColumns=_fnGetColumns(oSettings,'bVisible'),headerCells=$('th',oSettings.nTHead),tableWidthAttr=table.getAttribute('width'),// from DOM element
tableContainer=table.parentNode,userInputs=false,i,column,columnIdx,width,outerWidth,browser=oSettings.oBrowser,ie67=browser.bScrollOversize;var styleWidth=table.style.width;if(styleWidth&&styleWidth.indexOf('%')!==-1){tableWidthAttr=styleWidth;}/* Convert any user input sizes into pixel sizes */for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];if(column.sWidth!==null){column.sWidth=_fnConvertToWidth(column.sWidthOrig,tableContainer);userInputs=true;}}/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */if(ie67||!userInputs&&!scrollX&&!scrollY&&columnCount==_fnVisbleColumns(oSettings)&&columnCount==headerCells.length){for(i=0;i<columnCount;i++){var colIdx=_fnVisibleToColumnIndex(oSettings,i);if(colIdx!==null){columns[colIdx].sWidth=_fnStringToCss(headerCells.eq(i).width());}}}else{// Otherwise construct a single row, worst case, table with the widest
// node in the data, assign any user defined widths, then insert it into
// the DOM and allow the browser to do all the hard work of calculating
// table widths
var tmpTable=$(table).clone()// don't use cloneNode - IE8 will remove events on the main table
.css('visibility','hidden').removeAttr('id');// Clean up the table body
tmpTable.find('tbody tr').remove();var tr=$('<tr/>').appendTo(tmpTable.find('tbody'));// Clone the table header and footer - we can't use the header / footer
// from the cloned table, since if scrolling is active, the table's
// real header and footer are contained in different table tags
tmpTable.find('thead, tfoot').remove();tmpTable.append($(oSettings.nTHead).clone()).append($(oSettings.nTFoot).clone());// Remove any assigned widths from the footer (from scrolling)
tmpTable.find('tfoot th, tfoot td').css('width','');// Apply custom sizing to the cloned header
headerCells=_fnGetUniqueThs(oSettings,tmpTable.find('thead')[0]);for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];headerCells[i].style.width=column.sWidthOrig!==null&&column.sWidthOrig!==''?_fnStringToCss(column.sWidthOrig):'';// For scrollX we need to force the column width otherwise the
// browser will collapse it. If this width is smaller than the
// width the column requires, then it will have no effect
if(column.sWidthOrig&&scrollX){$(headerCells[i]).append($('<div/>').css({width:column.sWidthOrig,margin:0,padding:0,border:0,height:1}));}}// Find the widest cell for each column and put it into the table
if(oSettings.aoData.length){for(i=0;i<visibleColumns.length;i++){columnIdx=visibleColumns[i];column=columns[columnIdx];$(_fnGetWidestNode(oSettings,columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);}}// Tidy the temporary table - remove name attributes so there aren't
// duplicated in the dom (radio elements for example)
$('[name]',tmpTable).removeAttr('name');// Table has been built, attach to the document so we can work with it.
// A holding element is used, positioned at the top of the container
// with minimal height, so it has no effect on if the container scrolls
// or not. Otherwise it might trigger scrolling when it actually isn't
// needed
var holder=$('<div/>').css(scrollX||scrollY?{position:'absolute',top:0,left:0,height:1,right:0,overflow:'hidden'}:{}).append(tmpTable).appendTo(tableContainer);// When scrolling (X or Y) we want to set the width of the table as 
// appropriate. However, when not scrolling leave the table width as it
// is. This results in slightly different, but I think correct behaviour
if(scrollX&&scrollXInner){tmpTable.width(scrollXInner);}else if(scrollX){tmpTable.css('width','auto');tmpTable.removeAttr('width');// If there is no width attribute or style, then allow the table to
// collapse
if(tmpTable.width()<tableContainer.clientWidth&&tableWidthAttr){tmpTable.width(tableContainer.clientWidth);}}else if(scrollY){tmpTable.width(tableContainer.clientWidth);}else if(tableWidthAttr){tmpTable.width(tableWidthAttr);}// Get the width of each column in the constructed table - we need to
// know the inner width (so it can be assigned to the other table's
// cells) and the outer width so we can calculate the full width of the
// table. This is safe since DataTables requires a unique cell for each
// column, but if ever a header can span multiple columns, this will
// need to be modified.
var total=0;for(i=0;i<visibleColumns.length;i++){var cell=$(headerCells[i]);var border=cell.outerWidth()-cell.width();// Use getBounding... where possible (not IE8-) because it can give
// sub-pixel accuracy, which we then want to round up!
var bounding=browser.bBounding?Math.ceil(headerCells[i].getBoundingClientRect().width):cell.outerWidth();// Total is tracked to remove any sub-pixel errors as the outerWidth
// of the table might not equal the total given here (IE!).
total+=bounding;// Width for each column to use
columns[visibleColumns[i]].sWidth=_fnStringToCss(bounding-border);}table.style.width=_fnStringToCss(total);// Finished with the table - ditch it
holder.remove();}// If there is a width attr, we want to attach an event listener which
// allows the table sizing to automatically adjust when the window is
// resized. Use the width attr rather than CSS, since we can't know if the
// CSS is a relative value or absolute - DOM read is always px.
if(tableWidthAttr){table.style.width=_fnStringToCss(tableWidthAttr);}if((tableWidthAttr||scrollX)&&!oSettings._reszEvt){var bindResize=function bindResize(){$(window).on('resize.DT-'+oSettings.sInstance,_fnThrottle(function(){_fnAdjustColumnSizing(oSettings);}));};// IE6/7 will crash if we bind a resize event handler on page load.
// To be removed in 1.11 which drops IE6/7 support
if(ie67){setTimeout(bindResize,1000);}else{bindResize();}oSettings._reszEvt=true;}}/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */var _fnThrottle=DataTable.util.throttle;/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */function _fnConvertToWidth(width,parent){if(!width){return 0;}var n=$('<div/>').css('width',_fnStringToCss(width)).appendTo(parent||document.body);var val=n[0].offsetWidth;n.remove();return val;}/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */function _fnGetWidestNode(settings,colIdx){var idx=_fnGetMaxLenString(settings,colIdx);if(idx<0){return null;}var data=settings.aoData[idx];return!data.nTr?// Might not have been created when deferred rendering
$('<td/>').html(_fnGetCellData(settings,idx,colIdx,'display'))[0]:data.anCells[colIdx];}/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */function _fnGetMaxLenString(settings,colIdx){var s,max=-1,maxIdx=-1;for(var i=0,ien=settings.aoData.length;i<ien;i++){s=_fnGetCellData(settings,i,colIdx,'display')+'';s=s.replace(__re_html_remove,'');s=s.replace(/&nbsp;/g,' ');if(s.length>max){max=s.length;maxIdx=i;}}return maxIdx;}/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */function _fnStringToCss(s){if(s===null){return'0px';}if(typeof s=='number'){return s<0?'0px':s+'px';}// Check it has a unit character already
return s.match(/\d$/)?s+'px':s;}function _fnSortFlatten(settings){var i,iLen,k,kLen,aSort=[],aiOrig=[],aoColumns=settings.aoColumns,aDataSort,iCol,sType,srcCol,fixed=settings.aaSortingFixed,fixedObj=$.isPlainObject(fixed),nestedSort=[],add=function add(a){if(a.length&&!$.isArray(a[0])){// 1D array
nestedSort.push(a);}else{// 2D array
$.merge(nestedSort,a);}};// Build the sort array, with pre-fix and post-fix options if they have been
// specified
if($.isArray(fixed)){add(fixed);}if(fixedObj&&fixed.pre){add(fixed.pre);}add(settings.aaSorting);if(fixedObj&&fixed.post){add(fixed.post);}for(i=0;i<nestedSort.length;i++){srcCol=nestedSort[i][0];aDataSort=aoColumns[srcCol].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++){iCol=aDataSort[k];sType=aoColumns[iCol].sType||'string';if(nestedSort[i]._idx===undefined){nestedSort[i]._idx=$.inArray(nestedSort[i][1],aoColumns[iCol].asSorting);}aSort.push({src:srcCol,col:iCol,dir:nestedSort[i][1],index:nestedSort[i]._idx,type:sType,formatter:DataTable.ext.type.order[sType+"-pre"]});}}return aSort;}/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */function _fnSort(oSettings){var i,ien,iLen,j,jLen,k,kLen,sDataType,nTh,aiOrig=[],oExtSort=DataTable.ext.type.order,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,aDataSort,data,iCol,sType,oSort,formatters=0,sortCol,displayMaster=oSettings.aiDisplayMaster,aSort;// Resolve any column types that are unknown due to addition or invalidation
// @todo Can this be moved into a 'data-ready' handler which is called when
//   data is going to be used in the table?
_fnColumnTypes(oSettings);aSort=_fnSortFlatten(oSettings);for(i=0,ien=aSort.length;i<ien;i++){sortCol=aSort[i];// Track if we can use the fast sort algorithm
if(sortCol.formatter){formatters++;}// Load the data needed for the sort, for each cell
_fnSortData(oSettings,sortCol.col);}/* No sorting required if server-side or no sorting array */if(_fnDataSource(oSettings)!='ssp'&&aSort.length!==0){// Create a value - key array of the current row positions such that we can use their
// current position during the sort, if values match, in order to perform stable sorting
for(i=0,iLen=displayMaster.length;i<iLen;i++){aiOrig[displayMaster[i]]=i;}/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */if(formatters===aSort.length){// All sort types have formatting functions
displayMaster.sort(function(a,b){var x,y,k,test,sort,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];test=x<y?-1:x>y?1:0;if(test!==0){return sort.dir==='asc'?test:-test;}}x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}else{// Depreciated - remove in 1.11 (providing a plug-in option)
// Not all sort types have formatting methods, so we have to call their sorting
// methods.
displayMaster.sort(function(a,b){var x,y,k,l,test,sort,fn,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];fn=oExtSort[sort.type+"-"+sort.dir]||oExtSort["string-"+sort.dir];test=fn(x,y);if(test!==0){return test;}}x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}}/* Tell the draw function that we have sorted the data */oSettings.bSorted=true;}function _fnSortAria(settings){var label;var nextSort;var columns=settings.aoColumns;var aSort=_fnSortFlatten(settings);var oAria=settings.oLanguage.oAria;// ARIA attributes - need to loop all columns, to update all (removing old
// attributes as needed)
for(var i=0,iLen=columns.length;i<iLen;i++){var col=columns[i];var asSorting=col.asSorting;var sTitle=col.sTitle.replace(/<.*?>/g,"");var th=col.nTh;// IE7 is throwing an error when setting these properties with jQuery's
// attr() and removeAttr() methods...
th.removeAttribute('aria-sort');/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */if(col.bSortable){if(aSort.length>0&&aSort[0].col==i){th.setAttribute('aria-sort',aSort[0].dir=="asc"?"ascending":"descending");nextSort=asSorting[aSort[0].index+1]||asSorting[0];}else{nextSort=asSorting[0];}label=sTitle+(nextSort==="asc"?oAria.sSortAscending:oAria.sSortDescending);}else{label=sTitle;}th.setAttribute('aria-label',label);}}/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */function _fnSortListener(settings,colIdx,append,callback){var col=settings.aoColumns[colIdx];var sorting=settings.aaSorting;var asSorting=col.asSorting;var nextSortIdx;var next=function next(a,overflow){var idx=a._idx;if(idx===undefined){idx=$.inArray(a[1],asSorting);}return idx+1<asSorting.length?idx+1:overflow?null:0;};// Convert to 2D array if needed
if(typeof sorting[0]==='number'){sorting=settings.aaSorting=[sorting];}// If appending the sort then we are multi-column sorting
if(append&&settings.oFeatures.bSortMulti){// Are we already doing some kind of sort on this column?
var sortIdx=$.inArray(colIdx,_pluck(sorting,'0'));if(sortIdx!==-1){// Yes, modify the sort
nextSortIdx=next(sorting[sortIdx],true);if(nextSortIdx===null&&sorting.length===1){nextSortIdx=0;// can't remove sorting completely
}if(nextSortIdx===null){sorting.splice(sortIdx,1);}else{sorting[sortIdx][1]=asSorting[nextSortIdx];sorting[sortIdx]._idx=nextSortIdx;}}else{// No sort on this column yet
sorting.push([colIdx,asSorting[0],0]);sorting[sorting.length-1]._idx=0;}}else if(sorting.length&&sorting[0][0]==colIdx){// Single column - already sorting on this column, modify the sort
nextSortIdx=next(sorting[0]);sorting.length=1;sorting[0][1]=asSorting[nextSortIdx];sorting[0]._idx=nextSortIdx;}else{// Single column - sort only on this column
sorting.length=0;sorting.push([colIdx,asSorting[0]]);sorting[0]._idx=0;}// Run the sort by calling a full redraw
_fnReDraw(settings);// callback used for async user interaction
if(typeof callback=='function'){callback(settings);}}/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */function _fnSortAttachListener(settings,attachTo,colIdx,callback){var col=settings.aoColumns[colIdx];_fnBindAction(attachTo,{},function(e){/* If the column is not sortable - don't to anything */if(col.bSortable===false){return;}// If processing is enabled use a timeout to allow the processing
// display to be shown - otherwise to it synchronously
if(settings.oFeatures.bProcessing){_fnProcessingDisplay(settings,true);setTimeout(function(){_fnSortListener(settings,colIdx,e.shiftKey,callback);// In server-side processing, the draw callback will remove the
// processing display
if(_fnDataSource(settings)!=='ssp'){_fnProcessingDisplay(settings,false);}},0);}else{_fnSortListener(settings,colIdx,e.shiftKey,callback);}});}/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnSortingClasses(settings){var oldSort=settings.aLastSort;var sortClass=settings.oClasses.sSortColumn;var sort=_fnSortFlatten(settings);var features=settings.oFeatures;var i,ien,colIdx;if(features.bSort&&features.bSortClasses){// Remove old sorting classes
for(i=0,ien=oldSort.length;i<ien;i++){colIdx=oldSort[i].src;// Remove column sorting
$(_pluck(settings.aoData,'anCells',colIdx)).removeClass(sortClass+(i<2?i+1:3));}// Add new column sorting
for(i=0,ien=sort.length;i<ien;i++){colIdx=sort[i].src;$(_pluck(settings.aoData,'anCells',colIdx)).addClass(sortClass+(i<2?i+1:3));}}settings.aLastSort=sort;}// Get the data to sort a column, be it from cache, fresh (populating the
// cache), or from a sort formatter
function _fnSortData(settings,idx){// Custom sorting function - provided by the sort data type
var column=settings.aoColumns[idx];var customSort=DataTable.ext.order[column.sSortDataType];var customData;if(customSort){customData=customSort.call(settings.oInstance,settings,idx,_fnColumnIndexToVisible(settings,idx));}// Use / populate cache
var row,cellData;var formatter=DataTable.ext.type.order[column.sType+"-pre"];for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aSortData){row._aSortData=[];}if(!row._aSortData[idx]||customSort){cellData=customSort?customData[i]:// If there was a custom sort function, use data from there
_fnGetCellData(settings,i,idx,'sort');row._aSortData[idx]=formatter?formatter(cellData):cellData;}}}/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */function _fnSaveState(settings){if(!settings.oFeatures.bStateSave||settings.bDestroying){return;}/* Store the interesting variables */var state={time:+new Date(),start:settings._iDisplayStart,length:settings._iDisplayLength,order:$.extend(true,[],settings.aaSorting),search:_fnSearchToCamel(settings.oPreviousSearch),columns:$.map(settings.aoColumns,function(col,i){return{visible:col.bVisible,search:_fnSearchToCamel(settings.aoPreSearchCols[i])};})};_fnCallbackFire(settings,"aoStateSaveParams",'stateSaveParams',[settings,state]);settings.oSavedState=state;settings.fnStateSaveCallback.call(settings.oInstance,settings,state);}/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */function _fnLoadState(settings,oInit,callback){var i,ien;var columns=settings.aoColumns;var loaded=function loaded(s){if(!s||!s.time){callback();return;}// Allow custom and plug-in manipulation functions to alter the saved data set and
// cancelling of loading by returning false
var abStateLoad=_fnCallbackFire(settings,'aoStateLoadParams','stateLoadParams',[settings,s]);if($.inArray(false,abStateLoad)!==-1){callback();return;}// Reject old data
var duration=settings.iStateDuration;if(duration>0&&s.time<+new Date()-duration*1000){callback();return;}// Number of columns have changed - all bets are off, no restore of settings
if(s.columns&&columns.length!==s.columns.length){callback();return;}// Store the saved state so it might be accessed at any time
settings.oLoadedState=$.extend(true,{},s);// Restore key features - todo - for 1.11 this needs to be done by
// subscribed events
if(s.start!==undefined){settings._iDisplayStart=s.start;settings.iInitDisplayStart=s.start;}if(s.length!==undefined){settings._iDisplayLength=s.length;}// Order
if(s.order!==undefined){settings.aaSorting=[];$.each(s.order,function(i,col){settings.aaSorting.push(col[0]>=columns.length?[0,col[1]]:col);});}// Search
if(s.search!==undefined){$.extend(settings.oPreviousSearch,_fnSearchToHung(s.search));}// Columns
//
if(s.columns){for(i=0,ien=s.columns.length;i<ien;i++){var col=s.columns[i];// Visibility
if(col.visible!==undefined){columns[i].bVisible=col.visible;}// Search
if(col.search!==undefined){$.extend(settings.aoPreSearchCols[i],_fnSearchToHung(col.search));}}}_fnCallbackFire(settings,'aoStateLoaded','stateLoaded',[settings,s]);callback();};if(!settings.oFeatures.bStateSave){callback();return;}var state=settings.fnStateLoadCallback.call(settings.oInstance,settings,loaded);if(state!==undefined){loaded(state);}// otherwise, wait for the loaded callback to be executed
}/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */function _fnSettingsFromNode(table){var settings=DataTable.settings;var idx=$.inArray(table,_pluck(settings,'nTable'));return idx!==-1?settings[idx]:null;}/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */function _fnLog(settings,level,msg,tn){msg='DataTables warning: '+(settings?'table id='+settings.sTableId+' - ':'')+msg;if(tn){msg+='. For more information about this error, please see '+'http://datatables.net/tn/'+tn;}if(!level){// Backwards compatibility pre 1.10
var ext=DataTable.ext;var type=ext.sErrMode||ext.errMode;if(settings){_fnCallbackFire(settings,null,'error',[settings,tn,msg]);}if(type=='alert'){alert(msg);}else if(type=='throw'){throw new Error(msg);}else if(typeof type=='function'){type(settings,tn,msg);}}else if(window.console&&console.log){console.log(msg);}}/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */function _fnMap(ret,src,name,mappedName){if($.isArray(name)){$.each(name,function(i,val){if($.isArray(val)){_fnMap(ret,src,val[0],val[1]);}else{_fnMap(ret,src,val);}});return;}if(mappedName===undefined){mappedName=name;}if(src[name]!==undefined){ret[mappedName]=src[name];}}/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */function _fnExtend(out,extender,breakRefs){var val;for(var prop in extender){if(extender.hasOwnProperty(prop)){val=extender[prop];if($.isPlainObject(val)){if(!$.isPlainObject(out[prop])){out[prop]={};}$.extend(true,out[prop],val);}else if(breakRefs&&prop!=='data'&&prop!=='aaData'&&$.isArray(val)){out[prop]=val.slice();}else{out[prop]=val;}}}return out;}/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */function _fnBindAction(n,oData,fn){$(n).on('click.DT',oData,function(e){$(n).blur();// Remove focus outline for mouse users
fn(e);}).on('keypress.DT',oData,function(e){if(e.which===13){e.preventDefault();fn(e);}}).on('selectstart.DT',function(){/* Take the brutal approach to cancelling text selection */return false;});}/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */function _fnCallbackReg(oSettings,sStore,fn,sName){if(fn){oSettings[sStore].push({"fn":fn,"sName":sName});}}/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */function _fnCallbackFire(settings,callbackArr,eventName,args){var ret=[];if(callbackArr){ret=$.map(settings[callbackArr].slice().reverse(),function(val,i){return val.fn.apply(settings.oInstance,args);});}if(eventName!==null){var e=$.Event(eventName+'.dt');$(settings.nTable).trigger(e,args);ret.push(e.result);}return ret;}function _fnLengthOverflow(settings){var start=settings._iDisplayStart,end=settings.fnDisplayEnd(),len=settings._iDisplayLength;/* If we have space to show extra rows (backing up from the end point - then do so */if(start>=end){start=end-len;}// Keep the start record on the current page
start-=start%len;if(len===-1||start<0){start=0;}settings._iDisplayStart=start;}function _fnRenderer(settings,type){var renderer=settings.renderer;var host=DataTable.ext.renderer[type];if($.isPlainObject(renderer)&&renderer[type]){// Specific renderer for this type. If available use it, otherwise use
// the default.
return host[renderer[type]]||host._;}else if(typeof renderer==='string'){// Common renderer - if there is one available for this type use it,
// otherwise use the default
return host[renderer]||host._;}// Use the default
return host._;}/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */function _fnDataSource(settings){if(settings.oFeatures.bServerSide){return'ssp';}else if(settings.ajax||settings.sAjaxSource){return'ajax';}return'dom';}/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */var __apiStruct=[];/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */var __arrayProto=Array.prototype;/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */var _toSettings=function _toSettings(mixed){var idx,jq;var settings=DataTable.settings;var tables=$.map(settings,function(el,i){return el.nTable;});if(!mixed){return[];}else if(mixed.nTable&&mixed.oApi){// DataTables settings object
return[mixed];}else if(mixed.nodeName&&mixed.nodeName.toLowerCase()==='table'){// Table node
idx=$.inArray(mixed,tables);return idx!==-1?[settings[idx]]:null;}else if(mixed&&typeof mixed.settings==='function'){return mixed.settings().toArray();}else if(typeof mixed==='string'){// jQuery selector
jq=$(mixed);}else if(mixed instanceof $){// jQuery object (also DataTables instance)
jq=mixed;}if(jq){return jq.map(function(i){idx=$.inArray(this,tables);return idx!==-1?settings[idx]:null;}).toArray();}};/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */_Api2=function _Api(context,data){if(!(this instanceof _Api2)){return new _Api2(context,data);}var settings=[];var ctxSettings=function ctxSettings(o){var a=_toSettings(o);if(a){settings=settings.concat(a);}};if($.isArray(context)){for(var i=0,ien=context.length;i<ien;i++){ctxSettings(context[i]);}}else{ctxSettings(context);}// Remove duplicates
this.context=_unique(settings);// Initial data
if(data){$.merge(this,data);}// selector
this.selector={rows:null,cols:null,opts:null};_Api2.extend(this,this,__apiStruct);};DataTable.Api=_Api2;// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
// isPlainObject.
$.extend(_Api2.prototype,{any:function any(){return this.count()!==0;},concat:__arrayProto.concat,context:[],// array of table settings objects
count:function count(){return this.flatten().length;},each:function each(fn){for(var i=0,ien=this.length;i<ien;i++){fn.call(this,this[i],i,this);}return this;},eq:function eq(idx){var ctx=this.context;return ctx.length>idx?new _Api2(ctx[idx],this[idx]):null;},filter:function filter(fn){var a=[];if(__arrayProto.filter){a=__arrayProto.filter.call(this,fn,this);}else{// Compatibility for browsers without EMCA-252-5 (JS 1.6)
for(var i=0,ien=this.length;i<ien;i++){if(fn.call(this,this[i],i,this)){a.push(this[i]);}}}return new _Api2(this.context,a);},flatten:function flatten(){var a=[];return new _Api2(this.context,a.concat.apply(a,this.toArray()));},join:__arrayProto.join,indexOf:__arrayProto.indexOf||function(obj,start){for(var i=start||0,ien=this.length;i<ien;i++){if(this[i]===obj){return i;}}return-1;},iterator:function iterator(flatten,type,fn,alwaysNew){var a=[],ret,i,ien,j,jen,context=this.context,rows,items,item,selector=this.selector;// Argument shifting
if(typeof flatten==='string'){alwaysNew=fn;fn=type;type=flatten;flatten=false;}for(i=0,ien=context.length;i<ien;i++){var apiInst=new _Api2(context[i]);if(type==='table'){ret=fn.call(apiInst,context[i],i);if(ret!==undefined){a.push(ret);}}else if(type==='columns'||type==='rows'){// this has same length as context - one entry for each table
ret=fn.call(apiInst,context[i],this[i],i);if(ret!==undefined){a.push(ret);}}else if(type==='column'||type==='column-rows'||type==='row'||type==='cell'){// columns and rows share the same structure.
// 'this' is an array of column indexes for each context
items=this[i];if(type==='column-rows'){rows=_selector_row_indexes(context[i],selector.opts);}for(j=0,jen=items.length;j<jen;j++){item=items[j];if(type==='cell'){ret=fn.call(apiInst,context[i],item.row,item.column,i,j);}else{ret=fn.call(apiInst,context[i],item,i,j,rows);}if(ret!==undefined){a.push(ret);}}}}if(a.length||alwaysNew){var api=new _Api2(context,flatten?a.concat.apply([],a):a);var apiSelector=api.selector;apiSelector.rows=selector.rows;apiSelector.cols=selector.cols;apiSelector.opts=selector.opts;return api;}return this;},lastIndexOf:__arrayProto.lastIndexOf||function(obj,start){// Bit cheeky...
return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function map(fn){var a=[];if(__arrayProto.map){a=__arrayProto.map.call(this,fn,this);}else{// Compatibility for browsers without EMCA-252-5 (JS 1.6)
for(var i=0,ien=this.length;i<ien;i++){a.push(fn.call(this,this[i],i));}}return new _Api2(this.context,a);},pluck:function pluck(prop){return this.map(function(el){return el[prop];});},pop:__arrayProto.pop,push:__arrayProto.push,// Does not return an API instance
reduce:__arrayProto.reduce||function(fn,init){return _fnReduce(this,fn,init,0,this.length,1);},reduceRight:__arrayProto.reduceRight||function(fn,init){return _fnReduce(this,fn,init,this.length-1,-1,-1);},reverse:__arrayProto.reverse,// Object with rows, columns and opts
selector:null,shift:__arrayProto.shift,slice:function slice(){return new _Api2(this.context,this);},sort:__arrayProto.sort,// ? name - order?
splice:__arrayProto.splice,toArray:function toArray(){return __arrayProto.slice.call(this);},to$:function to$(){return $(this);},toJQuery:function toJQuery(){return $(this);},unique:function unique(){return new _Api2(this.context,_unique(this));},unshift:__arrayProto.unshift});_Api2.extend=function(scope,obj,ext){// Only extend API instances and static properties of the API
if(!ext.length||!obj||!(obj instanceof _Api2)&&!obj.__dt_wrapper){return;}var i,ien,j,jen,struct,inner,methodScoping=function methodScoping(scope,fn,struc){return function(){var ret=fn.apply(scope,arguments);// Method extension
_Api2.extend(ret,ret,struc.methodExt);return ret;};};for(i=0,ien=ext.length;i<ien;i++){struct=ext[i];// Value
obj[struct.name]=typeof struct.val==='function'?methodScoping(scope,struct.val,struct):$.isPlainObject(struct.val)?{}:struct.val;obj[struct.name].__dt_wrapper=true;// Property extension
_Api2.extend(scope,obj[struct.name],struct.propExt);}};// @todo - Is there need for an augment function?
// _Api.augment = function ( inst, name )
// {
// 	// Find src object in the structure from the name
// 	var parts = name.split('.');
// 	_Api.extend( inst, obj );
// };
//     [
//       {
//         name:      'data'                -- string   - Property name
//         val:       function () {},       -- function - Api method (or undefined if just an object
//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
//       },
//       {
//         name:     'row'
//         val:       {},
//         methodExt: [ ... ],
//         propExt:   [
//           {
//             name:      'data'
//             val:       function () {},
//             methodExt: [ ... ],
//             propExt:   [ ... ]
//           },
//           ...
//         ]
//       }
//     ]
_Api2.register=_api_register=function _api_register(name,val){if($.isArray(name)){for(var j=0,jen=name.length;j<jen;j++){_Api2.register(name[j],val);}return;}var i,ien,heir=name.split('.'),struct=__apiStruct,key,method;var find=function find(src,name){for(var i=0,ien=src.length;i<ien;i++){if(src[i].name===name){return src[i];}}return null;};for(i=0,ien=heir.length;i<ien;i++){method=heir[i].indexOf('()')!==-1;key=method?heir[i].replace('()',''):heir[i];var src=find(struct,key);if(!src){src={name:key,val:{},methodExt:[],propExt:[]};struct.push(src);}if(i===ien-1){src.val=val;}else{struct=method?src.methodExt:src.propExt;}}};_Api2.registerPlural=_api_registerPlural=function _api_registerPlural(pluralName,singularName,val){_Api2.register(pluralName,val);_Api2.register(singularName,function(){var ret=val.apply(this,arguments);if(ret===this){// Returned item is the API instance that was passed in, return it
return this;}else if(ret instanceof _Api2){// New API instance returned, want the value from the first item
// in the returned array for the singular result.
return ret.length?$.isArray(ret[0])?new _Api2(ret.context,ret[0]):// Array results are 'enhanced'
ret[0]:undefined;}// Non-API return - just fire it back
return ret;});};/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */var __table_selector=function __table_selector(selector,a){// Integer is used to pick out a table by index
if(typeof selector==='number'){return[a[selector]];}// Perform a jQuery selector on the table nodes
var nodes=$.map(a,function(el,i){return el.nTable;});return $(nodes).filter(selector).map(function(i){// Need to translate back from the table node to the settings
var idx=$.inArray(this,nodes);return a[idx];}).toArray();};/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */_api_register('tables()',function(selector){// A new instance is created if there was a selector specified
return selector?new _Api2(__table_selector(selector,this.context)):this;});_api_register('table()',function(selector){var tables=this.tables(selector);var ctx=tables.context;// Truncate to the first matched table
return ctx.length?new _Api2(ctx[0]):tables;});_api_registerPlural('tables().nodes()','table().node()',function(){return this.iterator('table',function(ctx){return ctx.nTable;},1);});_api_registerPlural('tables().body()','table().body()',function(){return this.iterator('table',function(ctx){return ctx.nTBody;},1);});_api_registerPlural('tables().header()','table().header()',function(){return this.iterator('table',function(ctx){return ctx.nTHead;},1);});_api_registerPlural('tables().footer()','table().footer()',function(){return this.iterator('table',function(ctx){return ctx.nTFoot;},1);});_api_registerPlural('tables().containers()','table().container()',function(){return this.iterator('table',function(ctx){return ctx.nTableWrapper;},1);});/**
	 * Redraw the tables in the current context.
	 */_api_register('draw()',function(paging){return this.iterator('table',function(settings){if(paging==='page'){_fnDraw(settings);}else{if(typeof paging==='string'){paging=paging==='full-hold'?false:true;}_fnReDraw(settings,paging===false);}});});/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 */ /**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */_api_register('page()',function(action){if(action===undefined){return this.page.info().page;// not an expensive call
}// else, have an action to take on all tables
return this.iterator('table',function(settings){_fnPageChange(settings,action);});});/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */_api_register('page.info()',function(action){if(this.context.length===0){return undefined;}var settings=this.context[0],start=settings._iDisplayStart,len=settings.oFeatures.bPaginate?settings._iDisplayLength:-1,visRecords=settings.fnRecordsDisplay(),all=len===-1;return{"page":all?0:Math.floor(start/len),"pages":all?1:Math.ceil(visRecords/len),"start":start,"end":settings.fnDisplayEnd(),"length":len,"recordsTotal":settings.fnRecordsTotal(),"recordsDisplay":visRecords,"serverSide":_fnDataSource(settings)==='ssp'};});/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 */ /**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */_api_register('page.len()',function(len){// Note that we can't call this function 'length()' because `length`
// is a Javascript property of functions which defines how many arguments
// the function expects.
if(len===undefined){return this.context.length!==0?this.context[0]._iDisplayLength:undefined;}// else, set the page length
return this.iterator('table',function(settings){_fnLengthChange(settings,len);});});var __reload=function __reload(settings,holdPosition,callback){// Use the draw event to trigger a callback
if(callback){var api=new _Api2(settings);api.one('draw',function(){callback(api.ajax.json());});}if(_fnDataSource(settings)=='ssp'){_fnReDraw(settings,holdPosition);}else{_fnProcessingDisplay(settings,true);// Cancel an existing request
var xhr=settings.jqXHR;if(xhr&&xhr.readyState!==4){xhr.abort();}// Trigger xhr
_fnBuildAjax(settings,[],function(json){_fnClearTable(settings);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}_fnReDraw(settings,holdPosition);_fnProcessingDisplay(settings,false);});}};/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */_api_register('ajax.json()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].json;}// else return undefined;
});/**
	 * Get the data submitted in the last Ajax request
	 */_api_register('ajax.params()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].oAjaxData;}// else return undefined;
});/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */_api_register('ajax.reload()',function(callback,resetPaging){return this.iterator('table',function(settings){__reload(settings,resetPaging===false,callback);});});/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 */ /**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */_api_register('ajax.url()',function(url){var ctx=this.context;if(url===undefined){// get
if(ctx.length===0){return undefined;}ctx=ctx[0];return ctx.ajax?$.isPlainObject(ctx.ajax)?ctx.ajax.url:ctx.ajax:ctx.sAjaxSource;}// set
return this.iterator('table',function(settings){if($.isPlainObject(settings.ajax)){settings.ajax.url=url;}else{settings.ajax=url;}// No need to consider sAjaxSource here since DataTables gives priority
// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
// value of `sAjaxSource` redundant.
});});/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */_api_register('ajax.url().load()',function(callback,resetPaging){// Same as a reload, but makes sense to present it for easy access after a
// url change
return this.iterator('table',function(ctx){__reload(ctx,resetPaging===false,callback);});});var _selector_run=function _selector_run(type,selector,selectFn,settings,opts){var out=[],res,a,i,ien,j,jen,selectorType=_typeof(selector);// Can't just check for isArray here, as an API or jQuery instance might be
// given with their array like look
if(!selector||selectorType==='string'||selectorType==='function'||selector.length===undefined){selector=[selector];}for(i=0,ien=selector.length;i<ien;i++){// Only split on simple strings - complex expressions will be jQuery selectors
a=selector[i]&&selector[i].split&&!selector[i].match(/[\[\(:]/)?selector[i].split(','):[selector[i]];for(j=0,jen=a.length;j<jen;j++){res=selectFn(typeof a[j]==='string'?$.trim(a[j]):a[j]);if(res&&res.length){out=out.concat(res);}}}// selector extensions
var ext=_ext.selector[type];if(ext.length){for(i=0,ien=ext.length;i<ien;i++){out=ext[i](settings,opts,out);}}return _unique(out);};var _selector_opts=function _selector_opts(opts){if(!opts){opts={};}// Backwards compatibility for 1.9- which used the terminology filter rather
// than search
if(opts.filter&&opts.search===undefined){opts.search=opts.filter;}return $.extend({search:'none',order:'current',page:'all'},opts);};var _selector_first=function _selector_first(inst){// Reduce the API instance to the first item found
for(var i=0,ien=inst.length;i<ien;i++){if(inst[i].length>0){// Assign the first element to the first item in the instance
// and truncate the instance and context
inst[0]=inst[i];inst[0].length=1;inst.length=1;inst.context=[inst.context[i]];return inst;}}// Not found - return an empty instance
inst.length=0;return inst;};var _selector_row_indexes=function _selector_row_indexes(settings,opts){var i,ien,tmp,a=[],displayFiltered=settings.aiDisplay,displayMaster=settings.aiDisplayMaster;var search=opts.search,// none, applied, removed
order=opts.order,// applied, current, index (original - compatibility with 1.9)
page=opts.page;// all, current
if(_fnDataSource(settings)=='ssp'){// In server-side processing mode, most options are irrelevant since
// rows not shown don't exist and the index order is the applied order
// Removed is a special case - for consistency just return an empty
// array
return search==='removed'?[]:_range(0,displayMaster.length);}else if(page=='current'){// Current page implies that order=current and fitler=applied, since it is
// fairly senseless otherwise, regardless of what order and search actually
// are
for(i=settings._iDisplayStart,ien=settings.fnDisplayEnd();i<ien;i++){a.push(displayFiltered[i]);}}else if(order=='current'||order=='applied'){if(search=='none'){a=displayMaster.slice();}else if(search=='applied'){a=displayFiltered.slice();}else if(search=='removed'){// O(n+m) solution by creating a hash map
var displayFilteredMap={};for(var i=0,ien=displayFiltered.length;i<ien;i++){displayFilteredMap[displayFiltered[i]]=null;}a=$.map(displayMaster,function(el){return!displayFilteredMap.hasOwnProperty(el)?el:null;});}}else if(order=='index'||order=='original'){for(i=0,ien=settings.aoData.length;i<ien;i++){if(search=='none'){a.push(i);}else{// applied | removed
tmp=$.inArray(i,displayFiltered);if(tmp===-1&&search=='removed'||tmp>=0&&search=='applied'){a.push(i);}}}}return a;};/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */var __row_selector=function __row_selector(settings,selector,opts){var rows;var run=function run(sel){var selInt=_intVal(sel);var i,ien;var aoData=settings.aoData;// Short cut - selector is a number and no options provided (default is
// all records, so no need to check if the index is in there, since it
// must be - dev error if the index doesn't exist).
if(selInt!==null&&!opts){return[selInt];}if(!rows){rows=_selector_row_indexes(settings,opts);}if(selInt!==null&&$.inArray(selInt,rows)!==-1){// Selector - integer
return[selInt];}else if(sel===null||sel===undefined||sel===''){// Selector - none
return rows;}// Selector - function
if(typeof sel==='function'){return $.map(rows,function(idx){var row=aoData[idx];return sel(idx,row._aData,row.nTr)?idx:null;});}// Selector - node
if(sel.nodeName){var rowIdx=sel._DT_RowIndex;// Property added by DT for fast lookup
var cellIdx=sel._DT_CellIndex;if(rowIdx!==undefined){// Make sure that the row is actually still present in the table
return aoData[rowIdx]&&aoData[rowIdx].nTr===sel?[rowIdx]:[];}else if(cellIdx){return aoData[cellIdx.row]&&aoData[cellIdx.row].nTr===sel?[cellIdx.row]:[];}else{var host=$(sel).closest('*[data-dt-row]');return host.length?[host.data('dt-row')]:[];}}// ID selector. Want to always be able to select rows by id, regardless
// of if the tr element has been created or not, so can't rely upon
// jQuery here - hence a custom implementation. This does not match
// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
// but to select it using a CSS selector engine (like Sizzle or
// querySelect) it would need to need to be escaped for some characters.
// DataTables simplifies this for row selectors since you can select
// only a row. A # indicates an id any anything that follows is the id -
// unescaped.
if(typeof sel==='string'&&sel.charAt(0)==='#'){// get row index from id
var rowObj=settings.aIds[sel.replace(/^#/,'')];if(rowObj!==undefined){return[rowObj.idx];}// need to fall through to jQuery in case there is DOM id that
// matches
}// Get nodes in the order from the `rows` array with null values removed
var nodes=_removeEmpty(_pluck_order(settings.aoData,rows,'nTr'));// Selector - jQuery selector string, array of nodes or jQuery object/
// As jQuery's .filter() allows jQuery objects to be passed in filter,
// it also allows arrays, so this will cope with all three options
return $(nodes).filter(sel).map(function(){return this._DT_RowIndex;}).toArray();};return _selector_run('row',selector,run,settings,opts);};_api_register('rows()',function(selector,opts){// argument shifting
if(selector===undefined){selector='';}else if($.isPlainObject(selector)){opts=selector;selector='';}opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __row_selector(settings,selector,opts);},1);// Want argument shifting here and in __row_selector?
inst.selector.rows=selector;inst.selector.opts=opts;return inst;});_api_register('rows().nodes()',function(){return this.iterator('row',function(settings,row){return settings.aoData[row].nTr||undefined;},1);});_api_register('rows().data()',function(){return this.iterator(true,'rows',function(settings,rows){return _pluck_order(settings.aoData,rows,'_aData');},1);});_api_registerPlural('rows().cache()','row().cache()',function(type){return this.iterator('row',function(settings,row){var r=settings.aoData[row];return type==='search'?r._aFilterData:r._aSortData;},1);});_api_registerPlural('rows().invalidate()','row().invalidate()',function(src){return this.iterator('row',function(settings,row){_fnInvalidate(settings,row,src);});});_api_registerPlural('rows().indexes()','row().index()',function(){return this.iterator('row',function(settings,row){return row;},1);});_api_registerPlural('rows().ids()','row().id()',function(hash){var a=[];var context=this.context;// `iterator` will drop undefined values, but in this case we want them
for(var i=0,ien=context.length;i<ien;i++){for(var j=0,jen=this[i].length;j<jen;j++){var id=context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);a.push((hash===true?'#':'')+id);}}return new _Api2(context,a);});_api_registerPlural('rows().remove()','row().remove()',function(){var that=this;this.iterator('row',function(settings,row,thatIdx){var data=settings.aoData;var rowData=data[row];var i,ien,j,jen;var loopRow,loopCells;data.splice(row,1);// Update the cached indexes
for(i=0,ien=data.length;i<ien;i++){loopRow=data[i];loopCells=loopRow.anCells;// Rows
if(loopRow.nTr!==null){loopRow.nTr._DT_RowIndex=i;}// Cells
if(loopCells!==null){for(j=0,jen=loopCells.length;j<jen;j++){loopCells[j]._DT_CellIndex.row=i;}}}// Delete from the display arrays
_fnDeleteIndex(settings.aiDisplayMaster,row);_fnDeleteIndex(settings.aiDisplay,row);_fnDeleteIndex(that[thatIdx],row,false);// maintain local indexes
// For server-side processing tables - subtract the deleted row from the count
if(settings._iRecordsDisplay>0){settings._iRecordsDisplay--;}// Check for an 'overflow' they case for displaying the table
_fnLengthOverflow(settings);// Remove the row's ID reference if there is one
var id=settings.rowIdFn(rowData._aData);if(id!==undefined){delete settings.aIds[id];}});this.iterator('table',function(settings){for(var i=0,ien=settings.aoData.length;i<ien;i++){settings.aoData[i].idx=i;}});return this;});_api_register('rows.add()',function(rows){var newRows=this.iterator('table',function(settings){var row,i,ien;var out=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){out.push(_fnAddTr(settings,row)[0]);}else{out.push(_fnAddData(settings,row));}}return out;},1);// Return an Api.rows() extended instance, so rows().nodes() etc can be used
var modRows=this.rows(-1);modRows.pop();$.merge(modRows,newRows);return modRows;});/**
	 *
	 */_api_register('row()',function(selector,opts){return _selector_first(this.rows(selector,opts));});_api_register('row().data()',function(data){var ctx=this.context;if(data===undefined){// Get
return ctx.length&&this.length?ctx[0].aoData[this[0]]._aData:undefined;}// Set
var row=ctx[0].aoData[this[0]];row._aData=data;// If the DOM has an id, and the data source is an array
if($.isArray(data)&&row.nTr.id){_fnSetObjectDataFn(ctx[0].rowId)(data,row.nTr.id);}// Automatically invalidate
_fnInvalidate(ctx[0],this[0],'data');return this;});_api_register('row().node()',function(){var ctx=this.context;return ctx.length&&this.length?ctx[0].aoData[this[0]].nTr||null:null;});_api_register('row.add()',function(row){// Allow a jQuery object to be passed in - only a single row is added from
// it though - the first element in the set
if(row instanceof $&&row.length){row=row[0];}var rows=this.iterator('table',function(settings){if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){return _fnAddTr(settings,row)[0];}return _fnAddData(settings,row);});// Return an Api.rows() extended instance, with the newly added row selected
return this.row(rows[0]);});var __details_add=function __details_add(ctx,row,data,klass){// Convert to array of TR elements
var rows=[];var addRow=function addRow(r,k){// Recursion to allow for arrays of jQuery objects
if($.isArray(r)||r instanceof $){for(var i=0,ien=r.length;i<ien;i++){addRow(r[i],k);}return;}// If we get a TR element, then just add it directly - up to the dev
// to add the correct number of columns etc
if(r.nodeName&&r.nodeName.toLowerCase()==='tr'){rows.push(r);}else{// Otherwise create a row with a wrapper
var created=$('<tr><td/></tr>').addClass(k);$('td',created).addClass(k).html(r)[0].colSpan=_fnVisbleColumns(ctx);rows.push(created[0]);}};addRow(data,klass);if(row._details){row._details.detach();}row._details=$(rows);// If the children were already shown, that state should be retained
if(row._detailsShow){row._details.insertAfter(row.nTr);}};var __details_remove=function __details_remove(api,idx){var ctx=api.context;if(ctx.length){var row=ctx[0].aoData[idx!==undefined?idx:api[0]];if(row&&row._details){row._details.remove();row._detailsShow=undefined;row._details=undefined;}}};var __details_display=function __details_display(api,show){var ctx=api.context;if(ctx.length&&api.length){var row=ctx[0].aoData[api[0]];if(row._details){row._detailsShow=show;if(show){row._details.insertAfter(row.nTr);}else{row._details.detach();}__details_events(ctx[0]);}}};var __details_events=function __details_events(settings){var api=new _Api2(settings);var namespace='.dt.DT_details';var drawEvent='draw'+namespace;var colvisEvent='column-visibility'+namespace;var destroyEvent='destroy'+namespace;var data=settings.aoData;api.off(drawEvent+' '+colvisEvent+' '+destroyEvent);if(_pluck(data,'_details').length>0){// On each draw, insert the required elements into the document
api.on(drawEvent,function(e,ctx){if(settings!==ctx){return;}api.rows({page:'current'}).eq(0).each(function(idx){// Internal data grab
var row=data[idx];if(row._detailsShow){row._details.insertAfter(row.nTr);}});});// Column visibility change - update the colspan
api.on(colvisEvent,function(e,ctx,idx,vis){if(settings!==ctx){return;}// Update the colspan for the details rows (note, only if it already has
// a colspan)
var row,visible=_fnVisbleColumns(ctx);for(var i=0,ien=data.length;i<ien;i++){row=data[i];if(row._details){row._details.children('td[colspan]').attr('colspan',visible);}}});// Table destroyed - nuke any child rows
api.on(destroyEvent,function(e,ctx){if(settings!==ctx){return;}for(var i=0,ien=data.length;i<ien;i++){if(data[i]._details){__details_remove(api,i);}}});}};// Strings for the method names to help minification
var _emp='';var _child_obj=_emp+'row().child';var _child_mth=_child_obj+'()';// data can be:
//  tr
//  string
//  jQuery or array of any of the above
_api_register(_child_mth,function(data,klass){var ctx=this.context;if(data===undefined){// get
return ctx.length&&this.length?ctx[0].aoData[this[0]]._details:undefined;}else if(data===true){// show
this.child.show();}else if(data===false){// remove
__details_remove(this);}else if(ctx.length&&this.length){// set
__details_add(ctx[0],ctx[0].aoData[this[0]],data,klass);}return this;});_api_register([_child_obj+'.show()',_child_mth+'.show()'// only when `child()` was called with parameters (without
],function(show){// it returns an object and this method is not executed)
__details_display(this,true);return this;});_api_register([_child_obj+'.hide()',_child_mth+'.hide()'// only when `child()` was called with parameters (without
],function(){// it returns an object and this method is not executed)
__details_display(this,false);return this;});_api_register([_child_obj+'.remove()',_child_mth+'.remove()'// only when `child()` was called with parameters (without
],function(){// it returns an object and this method is not executed)
__details_remove(this);return this;});_api_register(_child_obj+'.isShown()',function(){var ctx=this.context;if(ctx.length&&this.length){// _detailsShown as false or undefined will fall through to return false
return ctx[0].aoData[this[0]]._detailsShow||false;}return false;});/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */ // can be an array of these items, comma separated list, or an array of comma
// separated lists
var __re_column_selector=/^([^:]+):(name|visIdx|visible)$/;// r1 and r2 are redundant - but it means that the parameters match for the
// iterator callback in columns().data()
var __columnData=function __columnData(settings,column,r1,r2,rows){var a=[];for(var row=0,ien=rows.length;row<ien;row++){a.push(_fnGetCellData(settings,rows[row],column));}return a;};var __column_selector=function __column_selector(settings,selector,opts){var columns=settings.aoColumns,names=_pluck(columns,'sName'),nodes=_pluck(columns,'nTh');var run=function run(s){var selInt=_intVal(s);// Selector - all
if(s===''){return _range(columns.length);}// Selector - index
if(selInt!==null){return[selInt>=0?selInt:// Count from left
columns.length+selInt// Count from right (+ because its a negative value)
];}// Selector = function
if(typeof s==='function'){var rows=_selector_row_indexes(settings,opts);return $.map(columns,function(col,idx){return s(idx,__columnData(settings,idx,0,0,rows),nodes[idx])?idx:null;});}// jQuery or string selector
var match=typeof s==='string'?s.match(__re_column_selector):'';if(match){switch(match[2]){case'visIdx':case'visible':var idx=parseInt(match[1],10);// Visible index given, convert to column index
if(idx<0){// Counting from the right
var visColumns=$.map(columns,function(col,i){return col.bVisible?i:null;});return[visColumns[visColumns.length+idx]];}// Counting from the left
return[_fnVisibleToColumnIndex(settings,idx)];case'name':// match by name. `names` is column index complete and in order
return $.map(names,function(name,i){return name===match[1]?i:null;});default:return[];}}// Cell in the table body
if(s.nodeName&&s._DT_CellIndex){return[s._DT_CellIndex.column];}// jQuery selector on the TH elements for the columns
var jqResult=$(nodes).filter(s).map(function(){return $.inArray(this,nodes);// `nodes` is column index complete and in order
}).toArray();if(jqResult.length||!s.nodeName){return jqResult;}// Otherwise a node which might have a `dt-column` data attribute, or be
// a child or such an element
var host=$(s).closest('*[data-dt-column]');return host.length?[host.data('dt-column')]:[];};return _selector_run('column',selector,run,settings,opts);};var __setColumnVis=function __setColumnVis(settings,column,vis){var cols=settings.aoColumns,col=cols[column],data=settings.aoData,row,cells,i,ien,tr;// Get
if(vis===undefined){return col.bVisible;}// Set
// No change
if(col.bVisible===vis){return;}if(vis){// Insert column
// Need to decide if we should use appendChild or insertBefore
var insertBefore=$.inArray(true,_pluck(cols,'bVisible'),column+1);for(i=0,ien=data.length;i<ien;i++){tr=data[i].nTr;cells=data[i].anCells;if(tr){// insertBefore can act like appendChild if 2nd arg is null
tr.insertBefore(cells[column],cells[insertBefore]||null);}}}else{// Remove column
$(_pluck(settings.aoData,'anCells',column)).detach();}// Common actions
col.bVisible=vis;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);// Update colspan for no records display. Child rows and extensions will use their own
// listeners to do this - only need to update the empty table item here
if(!settings.aiDisplay.length){$(settings.nTBody).find('td[colspan]').attr('colspan',_fnVisbleColumns(settings));}_fnSaveState(settings);};_api_register('columns()',function(selector,opts){// argument shifting
if(selector===undefined){selector='';}else if($.isPlainObject(selector)){opts=selector;selector='';}opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __column_selector(settings,selector,opts);},1);// Want argument shifting here and in _row_selector?
inst.selector.cols=selector;inst.selector.opts=opts;return inst;});_api_registerPlural('columns().header()','column().header()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTh;},1);});_api_registerPlural('columns().footer()','column().footer()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTf;},1);});_api_registerPlural('columns().data()','column().data()',function(){return this.iterator('column-rows',__columnData,1);});_api_registerPlural('columns().dataSrc()','column().dataSrc()',function(){return this.iterator('column',function(settings,column){return settings.aoColumns[column].mData;},1);});_api_registerPlural('columns().cache()','column().cache()',function(type){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,type==='search'?'_aFilterData':'_aSortData',column);},1);});_api_registerPlural('columns().nodes()','column().nodes()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,'anCells',column);},1);});_api_registerPlural('columns().visible()','column().visible()',function(vis,calc){var ret=this.iterator('column',function(settings,column){if(vis===undefined){return settings.aoColumns[column].bVisible;}// else
__setColumnVis(settings,column,vis);});// Group the column visibility changes
if(vis!==undefined){// Second loop once the first is done for events
this.iterator('column',function(settings,column){_fnCallbackFire(settings,null,'column-visibility',[settings,column,vis,calc]);});if(calc===undefined||calc){this.columns.adjust();}}return ret;});_api_registerPlural('columns().indexes()','column().index()',function(type){return this.iterator('column',function(settings,column){return type==='visible'?_fnColumnIndexToVisible(settings,column):column;},1);});_api_register('columns.adjust()',function(){return this.iterator('table',function(settings){_fnAdjustColumnSizing(settings);},1);});_api_register('column.index()',function(type,idx){if(this.context.length!==0){var ctx=this.context[0];if(type==='fromVisible'||type==='toData'){return _fnVisibleToColumnIndex(ctx,idx);}else if(type==='fromData'||type==='toVisible'){return _fnColumnIndexToVisible(ctx,idx);}}});_api_register('column()',function(selector,opts){return _selector_first(this.columns(selector,opts));});var __cell_selector=function __cell_selector(settings,selector,opts){var data=settings.aoData;var rows=_selector_row_indexes(settings,opts);var cells=_removeEmpty(_pluck_order(data,rows,'anCells'));var allCells=$([].concat.apply([],cells));var row;var columns=settings.aoColumns.length;var a,i,ien,j,o,host;var run=function run(s){var fnSelector=typeof s==='function';if(s===null||s===undefined||fnSelector){// All cells and function selectors
a=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];for(j=0;j<columns;j++){o={row:row,column:j};if(fnSelector){// Selector - function
host=data[row];if(s(o,_fnGetCellData(settings,row,j),host.anCells?host.anCells[j]:null)){a.push(o);}}else{// Selector - all
a.push(o);}}}return a;}// Selector - index
if($.isPlainObject(s)){// Valid cell index and its in the array of selectable rows
return s.column!==undefined&&s.row!==undefined&&$.inArray(s.row,rows)!==-1?[s]:[];}// Selector - jQuery filtered cells
var jqResult=allCells.filter(s).map(function(i,el){return{// use a new object, in case someone changes the values
row:el._DT_CellIndex.row,column:el._DT_CellIndex.column};}).toArray();if(jqResult.length||!s.nodeName){return jqResult;}// Otherwise the selector is a node, and there is one last option - the
// element might be a child of an element which has dt-row and dt-column
// data attributes
host=$(s).closest('*[data-dt-row]');return host.length?[{row:host.data('dt-row'),column:host.data('dt-column')}]:[];};return _selector_run('cell',selector,run,settings,opts);};_api_register('cells()',function(rowSelector,columnSelector,opts){// Argument shifting
if($.isPlainObject(rowSelector)){// Indexes
if(rowSelector.row===undefined){// Selector options in first parameter
opts=rowSelector;rowSelector=null;}else{// Cell index objects in first parameter
opts=columnSelector;columnSelector=null;}}if($.isPlainObject(columnSelector)){opts=columnSelector;columnSelector=null;}// Cell selector
if(columnSelector===null||columnSelector===undefined){return this.iterator('table',function(settings){return __cell_selector(settings,rowSelector,_selector_opts(opts));});}// Row + column selector
var columns=this.columns(columnSelector);var rows=this.rows(rowSelector);var a,i,ien,j,jen;this.iterator('table',function(settings,idx){a=[];for(i=0,ien=rows[idx].length;i<ien;i++){for(j=0,jen=columns[idx].length;j<jen;j++){a.push({row:rows[idx][i],column:columns[idx][j]});}}},1);// Now pass through the cell selector for options
var cells=this.cells(a,opts);$.extend(cells.selector,{cols:columnSelector,rows:rowSelector,opts:opts});return cells;});_api_registerPlural('cells().nodes()','cell().node()',function(){return this.iterator('cell',function(settings,row,column){var data=settings.aoData[row];return data&&data.anCells?data.anCells[column]:undefined;},1);});_api_register('cells().data()',function(){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column);},1);});_api_registerPlural('cells().cache()','cell().cache()',function(type){type=type==='search'?'_aFilterData':'_aSortData';return this.iterator('cell',function(settings,row,column){return settings.aoData[row][type][column];},1);});_api_registerPlural('cells().render()','cell().render()',function(type){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column,type);},1);});_api_registerPlural('cells().indexes()','cell().index()',function(){return this.iterator('cell',function(settings,row,column){return{row:row,column:column,columnVisible:_fnColumnIndexToVisible(settings,column)};},1);});_api_registerPlural('cells().invalidate()','cell().invalidate()',function(src){return this.iterator('cell',function(settings,row,column){_fnInvalidate(settings,row,src,column);});});_api_register('cell()',function(rowSelector,columnSelector,opts){return _selector_first(this.cells(rowSelector,columnSelector,opts));});_api_register('cell().data()',function(data){var ctx=this.context;var cell=this[0];if(data===undefined){// Get
return ctx.length&&cell.length?_fnGetCellData(ctx[0],cell[0].row,cell[0].column):undefined;}// Set
_fnSetCellData(ctx[0],cell[0].row,cell[0].column,data);_fnInvalidate(ctx[0],cell[0].row,'data',cell[0].column);return this;});/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 */ /**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 */ /**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 */ /**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */_api_register('order()',function(order,dir){var ctx=this.context;if(order===undefined){// get
return ctx.length!==0?ctx[0].aaSorting:undefined;}// set
if(typeof order==='number'){// Simple column / direction passed in
order=[[order,dir]];}else if(order.length&&!$.isArray(order[0])){// Arguments passed in (list of 1D arrays)
order=Array.prototype.slice.call(arguments);}// otherwise a 2D array was passed in
return this.iterator('table',function(settings){settings.aaSorting=order.slice();});});/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */_api_register('order.listener()',function(node,column,callback){return this.iterator('table',function(settings){_fnSortAttachListener(settings,node,column,callback);});});_api_register('order.fixed()',function(set){if(!set){var ctx=this.context;var fixed=ctx.length?ctx[0].aaSortingFixed:undefined;return $.isArray(fixed)?{pre:fixed}:fixed;}return this.iterator('table',function(settings){settings.aaSortingFixed=$.extend(true,{},set);});});// Order by the selected column(s)
_api_register(['columns().order()','column().order()'],function(dir){var that=this;return this.iterator('table',function(settings,i){var sort=[];$.each(that[i],function(j,col){sort.push([col,dir]);});settings.aaSorting=sort;});});_api_register('search()',function(input,regex,smart,caseInsen){var ctx=this.context;if(input===undefined){// get
return ctx.length!==0?ctx[0].oPreviousSearch.sSearch:undefined;}// set
return this.iterator('table',function(settings){if(!settings.oFeatures.bFilter){return;}_fnFilterComplete(settings,$.extend({},settings.oPreviousSearch,{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen}),1);});});_api_registerPlural('columns().search()','column().search()',function(input,regex,smart,caseInsen){return this.iterator('column',function(settings,column){var preSearch=settings.aoPreSearchCols;if(input===undefined){// get
return preSearch[column].sSearch;}// set
if(!settings.oFeatures.bFilter){return;}$.extend(preSearch[column],{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen});_fnFilterComplete(settings,settings.oPreviousSearch,1);});});/*
	 * State API methods
	 */_api_register('state()',function(){return this.context.length?this.context[0].oSavedState:null;});_api_register('state.clear()',function(){return this.iterator('table',function(settings){// Save an empty object
settings.fnStateSaveCallback.call(settings.oInstance,settings,{});});});_api_register('state.loaded()',function(){return this.context.length?this.context[0].oLoadedState:null;});_api_register('state.save()',function(){return this.iterator('table',function(settings){_fnSaveState(settings);});});/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */DataTable.versionCheck=DataTable.fnVersionCheck=function(version){var aThis=DataTable.version.split('.');var aThat=version.split('.');var iThis,iThat;for(var i=0,iLen=aThat.length;i<iLen;i++){iThis=parseInt(aThis[i],10)||0;iThat=parseInt(aThat[i],10)||0;// Parts are the same, keep comparing
if(iThis===iThat){continue;}// Parts are different, return immediately
return iThis>iThat;}return true;};/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */DataTable.isDataTable=DataTable.fnIsDataTable=function(table){var t=$(table).get(0);var is=false;if(table instanceof DataTable.Api){return true;}$.each(DataTable.settings,function(i,o){var head=o.nScrollHead?$('table',o.nScrollHead)[0]:null;var foot=o.nScrollFoot?$('table',o.nScrollFoot)[0]:null;if(o.nTable===t||head===t||foot===t){is=true;}});return is;};/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */DataTable.tables=DataTable.fnTables=function(visible){var api=false;if($.isPlainObject(visible)){api=visible.api;visible=visible.visible;}var a=$.map(DataTable.settings,function(o){if(!visible||visible&&$(o.nTable).is(':visible')){return o.nTable;}});return api?new _Api2(a):a;};/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */DataTable.camelToHungarian=_fnCamelToHungarian;/**
	 *
	 */_api_register('$()',function(selector,opts){var rows=this.rows(opts).nodes(),// Get all rows
jqRows=$(rows);return $([].concat(jqRows.filter(selector).toArray(),jqRows.find(selector).toArray()));});// jQuery functions to operate on the tables
$.each(['on','one','off'],function(i,key){_api_register(key+'()',function()/* event, handler */{var args=Array.prototype.slice.call(arguments);// Add the `dt` namespace automatically if it isn't already present
args[0]=$.map(args[0].split(/\s/),function(e){return!e.match(/\.dt\b/)?e+'.dt':e;}).join(' ');var inst=$(this.tables().nodes());inst[key].apply(inst,args);return this;});});_api_register('clear()',function(){return this.iterator('table',function(settings){_fnClearTable(settings);});});_api_register('settings()',function(){return new _Api2(this.context,this.context);});_api_register('init()',function(){var ctx=this.context;return ctx.length?ctx[0].oInit:null;});_api_register('data()',function(){return this.iterator('table',function(settings){return _pluck(settings.aoData,'_aData');}).flatten();});_api_register('destroy()',function(remove){remove=remove||false;return this.iterator('table',function(settings){var orig=settings.nTableWrapper.parentNode;var classes=settings.oClasses;var table=settings.nTable;var tbody=settings.nTBody;var thead=settings.nTHead;var tfoot=settings.nTFoot;var jqTable=$(table);var jqTbody=$(tbody);var jqWrapper=$(settings.nTableWrapper);var rows=$.map(settings.aoData,function(r){return r.nTr;});var i,ien;// Flag to note that the table is currently being destroyed - no action
// should be taken
settings.bDestroying=true;// Fire off the destroy callbacks for plug-ins etc
_fnCallbackFire(settings,"aoDestroyCallback","destroy",[settings]);// If not being removed from the document, make all columns visible
if(!remove){new _Api2(settings).columns().visible(true);}// Blitz all `DT` namespaced events (these are internal events, the
// lowercase, `dt` events are user subscribed and they are responsible
// for removing them
jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');$(window).off('.DT-'+settings.sInstance);// When scrolling we had to break the table up - restore it
if(table!=thead.parentNode){jqTable.children('thead').detach();jqTable.append(thead);}if(tfoot&&table!=tfoot.parentNode){jqTable.children('tfoot').detach();jqTable.append(tfoot);}settings.aaSorting=[];settings.aaSortingFixed=[];_fnSortingClasses(settings);$(rows).removeClass(settings.asStripeClasses.join(' '));$('th, td',thead).removeClass(classes.sSortable+' '+classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone);// Add the TR elements back into the table in their original order
jqTbody.children().detach();jqTbody.append(rows);// Remove the DataTables generated nodes, events and classes
var removedMethod=remove?'remove':'detach';jqTable[removedMethod]();jqWrapper[removedMethod]();// If we need to reattach the table to the document
if(!remove&&orig){// insertBefore acts like appendChild if !arg[1]
orig.insertBefore(table,settings.nTableReinsertBefore);// Restore the width of the original table - was read from the style property,
// so we can restore directly to that
jqTable.css('width',settings.sDestroyWidth).removeClass(classes.sTable);// If the were originally stripe classes - then we add them back here.
// Note this is not fool proof (for example if not all rows had stripe
// classes - but it's a good effort without getting carried away
ien=settings.asDestroyStripes.length;if(ien){jqTbody.children().each(function(i){$(this).addClass(settings.asDestroyStripes[i%ien]);});}}/* Remove the settings object from the settings array */var idx=$.inArray(settings,DataTable.settings);if(idx!==-1){DataTable.settings.splice(idx,1);}});});// Add the `every()` method for rows, columns and cells in a compact form
$.each(['column','row','cell'],function(i,type){_api_register(type+'s().every()',function(fn){var opts=this.selector.opts;var api=this;return this.iterator(type,function(settings,arg1,arg2,arg3,arg4){// Rows and columns:
//  arg1 - index
//  arg2 - table counter
//  arg3 - loop counter
//  arg4 - undefined
// Cells:
//  arg1 - row index
//  arg2 - column index
//  arg3 - table counter
//  arg4 - loop counter
fn.call(api[type](arg1,type==='cell'?arg2:opts,type==='cell'?opts:undefined),arg1,arg2,arg3,arg4);});});});// i18n method for extensions to be able to use the language object from the
// DataTable
_api_register('i18n()',function(token,def,plural){var ctx=this.context[0];var resolved=_fnGetObjectDataFn(token)(ctx.oLanguage);if(resolved===undefined){resolved=def;}if(plural!==undefined&&$.isPlainObject(resolved)){resolved=resolved[plural]!==undefined?resolved[plural]:resolved._;}return resolved.replace('%d',plural);// nb: plural might be undefined,
});/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */DataTable.version="1.10.19";/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */DataTable.settings=[];/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */DataTable.models={};/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */DataTable.models.oSearch={/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */"bCaseInsensitive":true,/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */"sSearch":"",/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */"bRegex":false,/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */"bSmart":true};/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */DataTable.models.oRow={/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */"nTr":null,/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */"anCells":null,/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */"_aData":[],/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */"_aSortData":null,/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */"_aFilterData":null,/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */"_sFilterRow":null,/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */"_sRowStripe":"",/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */"src":null,/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */"idx":-1};/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */DataTable.models.oColumn={/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */"idx":null,/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */"aDataSort":null,/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */"asSorting":null,/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */"bSearchable":null,/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */"bSortable":null,/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */"bVisible":null,/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */"_sManualType":null,/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */"_bAttrSrc":false,/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */"fnCreatedCell":null,/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */"fnGetData":null,/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */"fnSetData":null,/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */"mData":null,/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */"mRender":null,/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */"nTh":null,/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */"nTf":null,/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */"sClass":null,/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */"sContentPadding":null,/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */"sDefaultContent":null,/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */"sName":null,/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */"sSortDataType":'std',/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */"sSortingClass":null,/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */"sSortingClassJUI":null,/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */"sTitle":null,/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */"sType":null,/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */"sWidth":null,/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */"sWidthOrig":null};/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */ /**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */DataTable.defaults={/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */"aaData":null,/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */"aaSorting":[[0,'asc']],/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */"aaSortingFixed":[],/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */"ajax":null,/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */"aLengthMenu":[10,25,50,100],/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */"aoColumns":null,/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */"aoColumnDefs":null,/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */"aoSearchCols":[],/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */"asStripeClasses":null,/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */"bAutoWidth":true,/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */"bDeferRender":false,/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */"bDestroy":false,/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */"bFilter":true,/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */"bInfo":true,/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */"bLengthChange":true,/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */"bPaginate":true,/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */"bProcessing":false,/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */"bRetrieve":false,/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */"bScrollCollapse":false,/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */"bServerSide":false,/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */"bSort":true,/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */"bSortMulti":true,/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */"bSortCellsTop":false,/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */"bSortClasses":true,/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */"bStateSave":false,/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */"fnCreatedRow":null,/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */"fnDrawCallback":null,/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */"fnFooterCallback":null,/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */"fnFormatNumber":function fnFormatNumber(toFormat){return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands);},/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */"fnHeaderCallback":null,/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */"fnInfoCallback":null,/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */"fnInitComplete":null,/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */"fnPreDrawCallback":null,/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */"fnRowCallback":null,/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */"fnServerData":null,/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */"fnServerParams":null,/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */"fnStateLoadCallback":function fnStateLoadCallback(settings){try{return JSON.parse((settings.iStateDuration===-1?sessionStorage:localStorage).getItem('DataTables_'+settings.sInstance+'_'+location.pathname));}catch(e){}},/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */"fnStateLoadParams":null,/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */"fnStateLoaded":null,/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */"fnStateSaveCallback":function fnStateSaveCallback(settings,data){try{(settings.iStateDuration===-1?sessionStorage:localStorage).setItem('DataTables_'+settings.sInstance+'_'+location.pathname,JSON.stringify(data));}catch(e){}},/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */"fnStateSaveParams":null,/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */"iStateDuration":7200,/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */"iDeferLoading":null,/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */"iDisplayLength":10,/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */"iDisplayStart":0,/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */"iTabIndex":0,/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */"oClasses":{},/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */"oLanguage":{/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */"oAria":{/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */"sSortAscending":": activate to sort column ascending",/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */"sSortDescending":": activate to sort column descending"},/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */"oPaginate":{/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */"sFirst":"First",/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */"sLast":"Last",/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */"sNext":"Next",/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */"sPrevious":"Previous"},/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */"sEmptyTable":"No data available in table",/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */"sInfo":"Showing _START_ to _END_ of _TOTAL_ entries",/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */"sInfoEmpty":"Showing 0 to 0 of 0 entries",/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */"sInfoFiltered":"(filtered from _MAX_ total entries)",/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */"sInfoPostFix":"",/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */"sDecimal":"",/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */"sThousands":",",/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */"sLengthMenu":"Show _MENU_ entries",/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */"sLoadingRecords":"Loading...",/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */"sProcessing":"Processing...",/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */"sSearch":"Search:",/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */"sSearchPlaceholder":"",/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */"sUrl":"",/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */"sZeroRecords":"No matching records found"},/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */"oSearch":$.extend({},DataTable.models.oSearch),/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */"sAjaxDataProp":"data",/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */"sAjaxSource":null,/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */"sDom":"lfrtip",/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */"searchDelay":null,/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */"sPaginationType":"simple_numbers",/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */"sScrollX":"",/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */"sScrollXInner":"",/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */"sScrollY":"",/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */"sServerMethod":"GET",/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */"renderer":null,/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */"rowId":"DT_RowId"};_fnHungarianMap(DataTable.defaults);/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */ /**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */DataTable.defaults.column={/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */"aDataSort":null,"iDataSort":-1,/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */"asSorting":['asc','desc'],/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */"bSearchable":true,/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */"bSortable":true,/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */"bVisible":true,/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */"fnCreatedCell":null,/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */ /**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "details.0" },
		 *          { "data": "details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */"mData":null,/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */"mRender":null,/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */"sCellType":"td",/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */"sClass":"",/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */"sContentPadding":"",/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */"sDefaultContent":null,/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */"sName":"",/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */"sSortDataType":"std",/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */"sTitle":null,/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */"sType":null,/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */"sWidth":null};_fnHungarianMap(DataTable.defaults.column);/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */DataTable.models.oSettings={/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */"oFeatures":{/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bAutoWidth":null,/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bDeferRender":null,/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bFilter":null,/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bInfo":null,/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bLengthChange":null,/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bPaginate":null,/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bProcessing":null,/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bServerSide":null,/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bSort":null,/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bSortMulti":null,/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bSortClasses":null,/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bStateSave":null},/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */"oScroll":{/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */"bCollapse":null,/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */"iBarWidth":0,/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */"sX":null,/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */"sXInner":null,/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */"sY":null},/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */"oLanguage":{/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */"fnInfoCallback":null},/**
		 * Browser support parameters
		 *  @namespace
		 */"oBrowser":{/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */"bScrollOversize":false,/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */"bScrollbarLeft":false,/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */"bBounding":false,/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */"barWidth":0},"ajax":null,/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */"aanFeatures":[],/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */"aoData":[],/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */"aiDisplay":[],/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */"aiDisplayMaster":[],/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */"aIds":{},/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */"aoColumns":[],/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */"aoHeader":[],/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */"aoFooter":[],/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */"oPreviousSearch":{},/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */"aoPreSearchCols":[],/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */"aaSorting":null,/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */"aaSortingFixed":[],/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */"asStripeClasses":null,/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */"asDestroyStripes":[],/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */"sDestroyWidth":0,/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */"aoRowCallback":[],/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */"aoHeaderCallback":[],/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */"aoFooterCallback":[],/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */"aoDrawCallback":[],/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */"aoRowCreatedCallback":[],/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */"aoPreDrawCallback":[],/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */"aoInitComplete":[],/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */"aoStateSaveParams":[],/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */"aoStateLoadParams":[],/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */"aoStateLoaded":[],/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */"sTableId":"",/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */"nTable":null,/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */"nTHead":null,/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */"nTFoot":null,/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */"nTBody":null,/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */"nTableWrapper":null,/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */"bDeferLoading":false,/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */"bInitialised":false,/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */"aoOpenRows":[],/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */"sDom":null,/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */"searchDelay":null,/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */"sPaginationType":"two_button",/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */"iStateDuration":0,/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */"aoStateSave":[],/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */"aoStateLoad":[],/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */"oSavedState":null,/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */"oLoadedState":null,/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */"sAjaxSource":null,/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */"sAjaxDataProp":null,/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */"bAjaxDataGet":true,/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */"jqXHR":null,/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */"json":undefined,/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */"oAjaxData":undefined,/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */"fnServerData":null,/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */"aoServerParams":[],/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */"sServerMethod":null,/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */"fnFormatNumber":null,/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */"aLengthMenu":null,/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */"iDraw":0,/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */"bDrawing":false,/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */"iDrawError":-1,/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */"_iDisplayLength":10,/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */"_iDisplayStart":0,/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */"_iRecordsTotal":0,/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */"_iRecordsDisplay":0,/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */"oClasses":{},/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */"bFiltered":false,/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */"bSorted":false,/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */"bSortCellsTop":null,/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */"oInit":null,/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */"aoDestroyCallback":[],/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */"fnRecordsTotal":function fnRecordsTotal(){return _fnDataSource(this)=='ssp'?this._iRecordsTotal*1:this.aiDisplayMaster.length;},/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */"fnRecordsDisplay":function fnRecordsDisplay(){return _fnDataSource(this)=='ssp'?this._iRecordsDisplay*1:this.aiDisplay.length;},/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */"fnDisplayEnd":function fnDisplayEnd(){var len=this._iDisplayLength,start=this._iDisplayStart,calc=start+len,records=this.aiDisplay.length,features=this.oFeatures,paginate=features.bPaginate;if(features.bServerSide){return paginate===false||len===-1?start+records:Math.min(start+len,this._iRecordsDisplay);}else{return!paginate||calc>records||len===-1?records:calc;}},/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */"oInstance":null,/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */"sInstance":null,/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */"iTabIndex":0,/**
		 * DIV container for the footer scrolling table if scrolling
		 */"nScrollHead":null,/**
		 * DIV container for the footer scrolling table if scrolling
		 */"nScrollFoot":null,/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */"aLastSort":[],/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */"oPlugins":{},/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */"rowIdFn":null,/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */"rowId":null};/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */ /**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */DataTable.ext=_ext={/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */buttons:{},/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */classes:{},/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */builder:"-source-",/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */errMode:"alert",/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */feature:[],/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */search:[],/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */selector:{cell:[],column:[],row:[]},/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */internal:{},/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */legacy:{/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */ajax:null},/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */pager:{},renderer:{pageButton:{},header:{}},/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */order:{},/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */type:{/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! data.substring(1).match(/[0-9]/) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */detect:[],/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */search:{},/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */order:{}},/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */_unique:0,//
// Depreciated
// The following properties are retained for backwards compatiblity only.
// The should not be used in new projects and will be removed in a future
// version
//
/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */fnVersionCheck:DataTable.fnVersionCheck,/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */iApiIndex:0,/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */oJUIClasses:{},/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */sVersion:DataTable.version};//
// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
//
$.extend(_ext,{afnFiltering:_ext.search,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oApi:_ext.internal,oStdClasses:_ext.classes,oPagination:_ext.pager});$.extend(DataTable.ext.classes,{"sTable":"dataTable","sNoFooter":"no-footer",/* Paging buttons */"sPageButton":"paginate_button","sPageButtonActive":"current","sPageButtonDisabled":"disabled",/* Striping classes */"sStripeOdd":"odd","sStripeEven":"even",/* Empty row */"sRowEmpty":"dataTables_empty",/* Features */"sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_",/* Note that the type is postfixed */"sLength":"dataTables_length","sProcessing":"dataTables_processing",/* Sorting */"sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting",/* Sortable in both directions */"sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_",/* Note that an int is postfixed for the sorting order */ /* Filtering */"sFilterInput":"",/* Page length */"sLengthSelect":"",/* Scrolling */"sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner",/* Misc */"sHeaderTH":"","sFooterTH":"",// Deprecated
"sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sJUIHeader":"","sJUIFooter":""});var extPagination=DataTable.ext.pager;function _numbers(page,pages){var numbers=[],buttons=extPagination.numbers_length,half=Math.floor(buttons/2),i=1;if(pages<=buttons){numbers=_range(0,pages);}else if(page<=half){numbers=_range(0,buttons-2);numbers.push('ellipsis');numbers.push(pages-1);}else if(page>=pages-1-half){numbers=_range(pages-(buttons-2),pages);numbers.splice(0,0,'ellipsis');// no unshift in ie6
numbers.splice(0,0,0);}else{numbers=_range(page-half+2,page+half-1);numbers.push('ellipsis');numbers.push(pages-1);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}numbers.DT_el='span';return numbers;}$.extend(extPagination,{simple:function simple(page,pages){return['previous','next'];},full:function full(page,pages){return['first','previous','next','last'];},numbers:function numbers(page,pages){return[_numbers(page,pages)];},simple_numbers:function simple_numbers(page,pages){return['previous',_numbers(page,pages),'next'];},full_numbers:function full_numbers(page,pages){return['first','previous',_numbers(page,pages),'next','last'];},first_last_numbers:function first_last_numbers(page,pages){return['first',_numbers(page,pages),'last'];},// For testing and plug-ins to use
_numbers:_numbers,// Number of number buttons (including ellipsis) to show. _Must be odd!_
numbers_length:7});$.extend(true,DataTable.ext.renderer,{pageButton:{_:function _(settings,host,idx,buttons,page,pages){var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var aria=settings.oLanguage.oAria.paginate||{};var btnDisplay,btnClass,counter=0;var attach=function attach(container,buttons){var i,ien,node,button;var clickHandler=function clickHandler(e){_fnPageChange(settings,e.data.action,true);};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){var inner=$('<'+(button.DT_el||'div')+'/>').appendTo(container);attach(inner,button);}else{btnDisplay=null;btnClass='';switch(button){case'ellipsis':container.append('<span class="ellipsis">&#x2026;</span>');break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;default:btnDisplay=button+1;btnClass=page===button?classes.sPageButtonActive:'';break;}if(btnDisplay!==null){node=$('<a>',{'class':classes.sPageButton+' '+btnClass,'aria-controls':settings.sTableId,'aria-label':aria[button],'data-dt-idx':counter,'tabindex':settings.iTabIndex,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null}).html(btnDisplay).appendTo(container);_fnBindAction(node,{action:button},clickHandler);counter++;}}}};// IE9 throws an 'unknown error' if document.activeElement is used
// inside an iframe or frame. Try / catch the error. Not good for
// accessibility, but neither are frames.
var activeEl;try{// Because this approach is destroying and recreating the paging
// elements, focus is lost on the select button which is bad for
// accessibility. So we want to restore focus once the draw has
// completed
activeEl=$(host).find(document.activeElement).data('dt-idx');}catch(e){}attach($(host).empty(),buttons);if(activeEl!==undefined){$(host).find('[data-dt-idx='+activeEl+']').focus();}}}});// Built in type detection. See model.ext.aTypes for information about
// what is required from this methods.
$.extend(DataTable.ext.type.detect,[// Plain numbers - first since V8 detects some plain numbers as dates
// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
function(d,settings){var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal)?'num'+decimal:null;},// Dates (only those recognised by the browser's Date.parse)
function(d,settings){// V8 tries _very_ hard to make a string passed into `Date.parse()`
// valid, so we need to use a regex to restrict date formats. Use a
// plug-in for anything other than ISO8601 style strings
if(d&&!(d instanceof Date)&&!_re_date.test(d)){return null;}var parsed=Date.parse(d);return parsed!==null&&!isNaN(parsed)||_empty(d)?'date':null;},// Formatted numbers
function(d,settings){var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal,true)?'num-fmt'+decimal:null;},// HTML numeric
function(d,settings){var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal)?'html-num'+decimal:null;},// HTML numeric, formatted
function(d,settings){var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal,true)?'html-num-fmt'+decimal:null;},// HTML (this is strict checking - there must be html)
function(d,settings){return _empty(d)||typeof d==='string'&&d.indexOf('<')!==-1?'html':null;}]);// Filter formatting functions. See model.ext.ofnSearch for information about
// what is required from these methods.
// 
// Note that additional search methods are added for the html numbers and
// html formatted numbers by `_addNumericSort()` when we know what the decimal
// place is
$.extend(DataTable.ext.type.search,{html:function html(data){return _empty(data)?data:typeof data==='string'?data.replace(_re_new_lines," ").replace(_re_html,""):'';},string:function string(data){return _empty(data)?data:typeof data==='string'?data.replace(_re_new_lines," "):data;}});var __numericReplace=function __numericReplace(d,decimalPlace,re1,re2){if(d!==0&&(!d||d==='-')){return-Infinity;}// If a decimal place other than `.` is used, it needs to be given to the
// function so we can detect it and replace with a `.` which is the only
// decimal place Javascript recognises - it is not locale aware.
if(decimalPlace){d=_numToDecimal(d,decimalPlace);}if(d.replace){if(re1){d=d.replace(re1,'');}if(re2){d=d.replace(re2,'');}}return d*1;};// Add the numeric 'deformatting' functions for sorting and search. This is done
// in a function to provide an easy ability for the language options to add
// additional methods if a non-period decimal place is used.
function _addNumericSort(decimalPlace){$.each({// Plain numbers
"num":function num(d){return __numericReplace(d,decimalPlace);},// Formatted numbers
"num-fmt":function numFmt(d){return __numericReplace(d,decimalPlace,_re_formatted_numeric);},// HTML numeric
"html-num":function htmlNum(d){return __numericReplace(d,decimalPlace,_re_html);},// HTML numeric, formatted
"html-num-fmt":function htmlNumFmt(d){return __numericReplace(d,decimalPlace,_re_html,_re_formatted_numeric);}},function(key,fn){// Add the ordering method
_ext.type.order[key+decimalPlace+'-pre']=fn;// For HTML types add a search formatter that will strip the HTML
if(key.match(/^html\-/)){_ext.type.search[key+decimalPlace]=_ext.type.search.html;}});}// Default sort methods
$.extend(_ext.type.order,{// Dates
"date-pre":function datePre(d){var ts=Date.parse(d);return isNaN(ts)?-Infinity:ts;},// html
"html-pre":function htmlPre(a){return _empty(a)?'':a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+'';},// string
"string-pre":function stringPre(a){// This is a little complex, but faster than always calling toString,
// http://jsperf.com/tostring-v-check
return _empty(a)?'':typeof a==='string'?a.toLowerCase():!a.toString?'':a.toString();},// string-asc and -desc are retained only for compatibility with the old
// sort methods
"string-asc":function stringAsc(x,y){return x<y?-1:x>y?1:0;},"string-desc":function stringDesc(x,y){return x<y?1:x>y?-1:0;}});// Numeric sorting types - order doesn't matter here
_addNumericSort('');$.extend(true,DataTable.ext.renderer,{header:{_:function _(settings,cell,column,classes){// No additional mark-up required
// Attach a sort listener to update on sort - note that using the
// `DT` namespace will allow the event to be removed automatically
// on destroy, while the `dt` namespaced event is the one we are
// listening for
$(settings.nTable).on('order.dt.DT',function(e,ctx,sorting,columns){if(settings!==ctx){// need to check this this is the host
return;// table, not a nested one
}var colIdx=column.idx;cell.removeClass(column.sSortingClass+' '+classes.sSortAsc+' '+classes.sSortDesc).addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);});},jqueryui:function jqueryui(settings,cell,column,classes){$('<div/>').addClass(classes.sSortJUIWrapper).append(cell.contents()).append($('<span/>').addClass(classes.sSortIcon+' '+column.sSortingClassJUI)).appendTo(cell);// Attach a sort listener to update on sort
$(settings.nTable).on('order.dt.DT',function(e,ctx,sorting,columns){if(settings!==ctx){return;}var colIdx=column.idx;cell.removeClass(classes.sSortAsc+" "+classes.sSortDesc).addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);cell.find('span.'+classes.sSortIcon).removeClass(classes.sSortJUIAsc+" "+classes.sSortJUIDesc+" "+classes.sSortJUI+" "+classes.sSortJUIAscAllowed+" "+classes.sSortJUIDescAllowed).addClass(columns[colIdx]=='asc'?classes.sSortJUIAsc:columns[colIdx]=='desc'?classes.sSortJUIDesc:column.sSortingClassJUI);});}}});/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */var __htmlEscapeEntities=function __htmlEscapeEntities(d){return typeof d==='string'?d.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'):d;};/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */DataTable.render={number:function number(thousands,decimal,precision,prefix,postfix){return{display:function display(d){if(typeof d!=='number'&&typeof d!=='string'){return d;}var negative=d<0?'-':'';var flo=parseFloat(d);// If NaN then there isn't much formatting that we can do - just
// return immediately, escaping any HTML (this was supposed to
// be a number after all)
if(isNaN(flo)){return __htmlEscapeEntities(d);}flo=flo.toFixed(precision);d=Math.abs(flo);var intPart=parseInt(d,10);var floatPart=precision?decimal+(d-intPart).toFixed(precision).substring(2):'';return negative+(prefix||'')+intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,thousands)+floatPart+(postfix||'');}};},text:function text(){return{display:__htmlEscapeEntities,filter:__htmlEscapeEntities};}};/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */ /**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */function _fnExternApiFunc(fn){return function(){var args=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.internal[fn].apply(this,args);};}/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */$.extend(DataTable.ext.internal,{_fnExternApiFunc:_fnExternApiFunc,_fnBuildAjax:_fnBuildAjax,_fnAjaxUpdate:_fnAjaxUpdate,_fnAjaxParameters:_fnAjaxParameters,_fnAjaxUpdateDraw:_fnAjaxUpdateDraw,_fnAjaxDataSrc:_fnAjaxDataSrc,_fnAddColumn:_fnAddColumn,_fnColumnOptions:_fnColumnOptions,_fnAdjustColumnSizing:_fnAdjustColumnSizing,_fnVisibleToColumnIndex:_fnVisibleToColumnIndex,_fnColumnIndexToVisible:_fnColumnIndexToVisible,_fnVisbleColumns:_fnVisbleColumns,_fnGetColumns:_fnGetColumns,_fnColumnTypes:_fnColumnTypes,_fnApplyColumnDefs:_fnApplyColumnDefs,_fnHungarianMap:_fnHungarianMap,_fnCamelToHungarian:_fnCamelToHungarian,_fnLanguageCompat:_fnLanguageCompat,_fnBrowserDetect:_fnBrowserDetect,_fnAddData:_fnAddData,_fnAddTr:_fnAddTr,_fnNodeToDataIndex:_fnNodeToDataIndex,_fnNodeToColumnIndex:_fnNodeToColumnIndex,_fnGetCellData:_fnGetCellData,_fnSetCellData:_fnSetCellData,_fnSplitObjNotation:_fnSplitObjNotation,_fnGetObjectDataFn:_fnGetObjectDataFn,_fnSetObjectDataFn:_fnSetObjectDataFn,_fnGetDataMaster:_fnGetDataMaster,_fnClearTable:_fnClearTable,_fnDeleteIndex:_fnDeleteIndex,_fnInvalidate:_fnInvalidate,_fnGetRowElements:_fnGetRowElements,_fnCreateTr:_fnCreateTr,_fnBuildHead:_fnBuildHead,_fnDrawHead:_fnDrawHead,_fnDraw:_fnDraw,_fnReDraw:_fnReDraw,_fnAddOptionsHtml:_fnAddOptionsHtml,_fnDetectHeader:_fnDetectHeader,_fnGetUniqueThs:_fnGetUniqueThs,_fnFeatureHtmlFilter:_fnFeatureHtmlFilter,_fnFilterComplete:_fnFilterComplete,_fnFilterCustom:_fnFilterCustom,_fnFilterColumn:_fnFilterColumn,_fnFilter:_fnFilter,_fnFilterCreateSearch:_fnFilterCreateSearch,_fnEscapeRegex:_fnEscapeRegex,_fnFilterData:_fnFilterData,_fnFeatureHtmlInfo:_fnFeatureHtmlInfo,_fnUpdateInfo:_fnUpdateInfo,_fnInfoMacros:_fnInfoMacros,_fnInitialise:_fnInitialise,_fnInitComplete:_fnInitComplete,_fnLengthChange:_fnLengthChange,_fnFeatureHtmlLength:_fnFeatureHtmlLength,_fnFeatureHtmlPaginate:_fnFeatureHtmlPaginate,_fnPageChange:_fnPageChange,_fnFeatureHtmlProcessing:_fnFeatureHtmlProcessing,_fnProcessingDisplay:_fnProcessingDisplay,_fnFeatureHtmlTable:_fnFeatureHtmlTable,_fnScrollDraw:_fnScrollDraw,_fnApplyToChildren:_fnApplyToChildren,_fnCalculateColumnWidths:_fnCalculateColumnWidths,_fnThrottle:_fnThrottle,_fnConvertToWidth:_fnConvertToWidth,_fnGetWidestNode:_fnGetWidestNode,_fnGetMaxLenString:_fnGetMaxLenString,_fnStringToCss:_fnStringToCss,_fnSortFlatten:_fnSortFlatten,_fnSort:_fnSort,_fnSortAria:_fnSortAria,_fnSortListener:_fnSortListener,_fnSortAttachListener:_fnSortAttachListener,_fnSortingClasses:_fnSortingClasses,_fnSortData:_fnSortData,_fnSaveState:_fnSaveState,_fnLoadState:_fnLoadState,_fnSettingsFromNode:_fnSettingsFromNode,_fnLog:_fnLog,_fnMap:_fnMap,_fnBindAction:_fnBindAction,_fnCallbackReg:_fnCallbackReg,_fnCallbackFire:_fnCallbackFire,_fnLengthOverflow:_fnLengthOverflow,_fnRenderer:_fnRenderer,_fnDataSource:_fnDataSource,_fnRowAttributes:_fnRowAttributes,_fnExtend:_fnExtend,_fnCalculateEnd:function _fnCalculateEnd(){}// Used by a lot of plug-ins, but redundant
// in 1.10, so this dead-end function is
// added to prevent errors
});// jQuery access
$.fn.dataTable=DataTable;// Provide access to the host jQuery object (circular reference)
DataTable.$=$;// Legacy aliases
$.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;// With a capital `D` we return a DataTables API instance rather than a
// jQuery object
$.fn.DataTable=function(opts){return $(this).dataTable(opts).api();};// All properties that are available to $.fn.dataTable should also be
// available on $.fn.DataTable
$.each(DataTable,function(prop,val){$.fn.DataTable[prop]=val;});// Information about events fired by DataTables - for documentation.
/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */ /**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */ /**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */ /**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */ /**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */ /**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */ /**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */ /**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */ /**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */ /**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */ /**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */ /**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */ /**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */ /**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */return $.fn.dataTable;});/*!
 DataTables 1.10.18
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document);}):"object"===(typeof exports==="undefined"?"undefined":_typeof(exports))?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document);}:h(jQuery,window,document);})(function(h,E,H,k){function Z(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),d[c]=e,"o"===b[1]&&Z(a[e]);});a._hungarianMap=d;}function J(a,b,c){a._hungarianMap||Z(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e];});}function Ca(a){var b=n.defaults.oLanguage,c=b.sDecimal;c&&Da(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&d&&"No data available in table"===b.sEmptyTable&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&d&&"Loading..."===b.sLoadingRecords&&F(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Da(a);}}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++){a[b]&&J(n.models.oSearch,a[b]);}}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b]);}function gb(a){if(!n.__browser){var b={};n.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove();}h.extend(a.oBrowser,n.__browser);a.oScroll.iBarWidth=n.__browser.barWidth;}function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;){a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);}return g;}function Ea(a,b){var c=n.defaults.column,d=a.aoColumns.length,c=h.extend({},n.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},n.models.oSearch,c[d]);ka(a,d,h(b).data());}function ka(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1]);}c!==k&&null!==c&&(fb(c),J(n.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=S(g),i=b.mRender?S(b.mRender):null,c=function c(a){return"string"===typeof a&&-1!==a.indexOf("@");};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d;};b.fnSetData=function(a,b,c){return N(g)(a,b,c);};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI);}function $(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Fa(a);for(var c=0,d=b.length;c<d;c++){b[c].nTh.style.width=b[c].sWidth;}}b=a.oScroll;(""!==b.sY||""!==b.sX)&&la(a);r(a,null,"column-sizing",[a]);}function aa(a,b){var c=ma(a,"bVisible");return"number"===typeof c[b]?c[b]:null;}function ba(a,b){var c=ma(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null;}function V(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++;});return b;}function ma(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e);});return c;}function Ga(a){var b=a.aoColumns,c=a.aoData,d=n.ext.type.detect,e,f,g,j,i,h,l,q,t;e=0;for(f=b.length;e<f;e++){if(l=b[e],t=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){t[i]===k&&(t[i]=B(a,i,e,"type"));q=d[g](t[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break;}if(q){l.sType=q;break;}}l.sType||(l.sType="string");}}}function ib(a,b,c,d){var e,f,g,j,i,m,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){m=b[e];var q=m.targets!==k?m.targets:m.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++){if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];){Ea(a);}d(q[f],m);}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],m);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++){("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,m);}}}}if(c){e=0;for(a=c.length;e<a;e++){d(e,c[e]);}}}function O(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},n.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++){g[j].sType=null;}a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ha(a,e,c,d);return e;}function na(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ia(a,e);return O(a,c.data,e,c.cells);});}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i;}function jb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c});}function Ja(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".");});}function S(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=S(c));});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a;};}if(null===a)return function(a){return a;};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g);};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function c(a,b,f){var g,j;if(""!==f){j=Ja(f);for(var i=0,m=j.length;i<m;i++){f=j[i].match(ca);g=j[i].match(W);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(m=a.length;i<m;i++){g.push(c(a[i],b,j));}}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break;}else if(g){j[i]=j[i].replace(W,"");a=a[j[i]]();continue;}if(null===a||a[j[i]]===k)return k;a=a[j[i]];}}return a;};return function(b,e){return c(b,e,a);};}return function(b){return b[a];};}function N(a){if(h.isPlainObject(a))return N(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e);};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function b(a,d,e){var e=Ja(e),f;f=e[e.length-1];for(var g,j,i=0,m=e.length-1;i<m;i++){g=e[i].match(ca);j=e[i].match(W);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(m=d.length;j<m;j++){f={},b(f,d[j],g),a[e[i]].push(f);}}else a[e[i]]=d;return;}j&&(e[i]=e[i].replace(W,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]];}if(f.match(W))a[f.replace(W,"")](d);else a[f.replace(ca,"")]=d;};return function(c,d){return b(c,d,a);};}return function(b,d){b[a]=d;};}function Ka(a){return D(a.aoData,"_aData");}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={};}function pa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++){a[e]==b?d=e:a[e]>b&&a[e]--;}-1!=d&&c===k&&a.splice(d,1);}function da(a,b,c,d){var e=a.aoData[b],f,g=function g(c,d){for(;c.childNodes.length;){c.removeChild(c.firstChild);}c.innerHTML=B(a,b,d,"display");};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ia(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++){g(j[c],c);}}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++){g[c].sType=null;}La(a,e);}}function Ia(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,m,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],t=function t(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),N(a)(d,b.getAttribute(c)));}},G=function G(a){if(c===k||c===i)j=l[i],m=h.trim(a.innerHTML),j&&j._bAttrSrc?(N(j.mData._)(d,m),t(j.mData.sort,a),t(j.mData.type,a),t(j.mData.filter,a)):q?(j._setter||(j._setter=N(j.mData)),j._setter(d,m)):d[i]=m;i++;};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)G(f),e.push(f);f=f.nextSibling;}else{e=b.anCells;f=0;for(g=e.length;f<g;f++){G(e[f]);}}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&N(a.rowId)(d,b);return{data:d,cells:e};}function Ha(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,m,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;La(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){m=a.aoColumns[l];i=c?d[l]:H.createElement(m.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||m.mRender||m.mData!==l)&&(!h.isPlainObject(m.mData)||m.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");m.sClass&&(i.className+=" "+m.sClass);m.bVisible&&!c?j.appendChild(i):!m.bVisible&&c&&i.parentNode.removeChild(i);m.fnCreatedCell&&m.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l);}r(a,"aoRowCreatedCallback",null,[j,f,b,g]);}e.nTr.setAttribute("role","row");}function La(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?qa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData);}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,m=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++){f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Ma(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Na(a,"header")(a,d,f,m);}i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(m.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(m.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++){f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass);}}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,m;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--){!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);}j.push([]);}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;){a.removeChild(f);}f=0;for(b=g[d].length;f<b;f++){if(m=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;){j[d+i][f]=1,i++;}for(;g[d][f+m]!==k&&g[d][f].cell==g[d][f+m].cell;){for(c=0;c<i;c++){j[d+c][f+m]=1;}m++;}h(g[d][f].cell).attr("rowspan",i).attr("colspan",m);}}}}}function P(a){var b=r(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,m=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!lb(a))return;}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:m;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ha(a,l);var t=q.nTr;if(0!==e){var G=d[c%e];q._sRowStripe!=G&&(h(t).removeClass(q._sRowStripe).addClass(G),q._sRowStripe=G);}r(a,"aoRowCallback",null,[t,q._aData,c,j,l]);b.push(t);c++;}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:V(a),"class":a.oClasses.sRowEmpty}).html(c))[0];r(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ka(a),g,m,i]);r(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ka(a),g,m,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));r(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1;}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;P(a);a._drawHold=!1;}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,m,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];m=f[k+1];if("'"==m||'"'==m){l="";for(q=2;f[k+q]!=m;){l+=f[k+q],q++;}"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(m=l.split("."),i.id=m[0].substr(1,m[0].length-1),i.className=m[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q;}e.append(i);e=h(i);}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==j&&d.bPaginate)g=tb(a);else if(0!==n.ext.feature.length){i=n.ext.feature;q=0;for(m=i.length;q<m;q++){if(j==i[q].cFeature){g=i[q].fnInit(a);break;}}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g));}c.replaceWith(e);a.nHolding=null;}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,m,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++){a.push([]);}f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];){g++;}m=g;k=1===l?!0:!1;for(j=0;j<l;j++){for(g=0;g<q;g++){a[f+g][m+j]={cell:e,unique:k},a[f+g].nTr=d;}}}e=e.nextSibling;}}}function ra(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++){for(var f=0,g=c[b].length;f<g;f++){if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;}}return d;}function sa(a,b,c){r(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value;});b=d;}var f,g=a.ajax,j=a.oInstance,i=function i(b){r(a,null,"xhr",[a,b,a.jqXHR]);c(b);};if(h.isPlainObject(g)&&g.data){f=g.data;var m="function"===typeof f?f(b,a):f,b="function"===typeof f&&m?m:h.extend(!0,b,m);delete g.data;}m={data:b,success:function success(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b);},dataType:"json",cache:!1,type:a.sServerMethod,error:function error(b,c){var d=r(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1);}};a.oAjaxData=b;r(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a};}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(m,{url:g||a.sAjaxSource})):"function"===typeof g?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(m,g)),g.data=f);}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),sa(a,ub(a),function(b){vb(a,b);}),!1):!0;}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,m,l,k=X(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var t=function t(a,b){j.push({name:a,value:b});};t("sEcho",a.iDraw);t("iColumns",c);t("sColumns",D(b,"sName").join(","));t("iDisplayStart",g);t("iDisplayLength",i);var G={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++){m=b[g],l=f[g],i="function"==typeof m.mData?"function":m.mData,G.columns.push({data:i,name:m.sName,searchable:m.bSearchable,orderable:m.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),t("mDataProp_"+g,i),d.bFilter&&(t("sSearch_"+g,l.sSearch),t("bRegex_"+g,l.bRegex),t("bSearchable_"+g,m.bSearchable)),d.bSort&&t("bSortable_"+g,m.bSortable);}d.bFilter&&(t("sSearch",e.sSearch),t("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){G.order.push({column:b.col,dir:b.dir});t("iSortCol_"+a,b.col);t("sSortDir_"+a,b.dir);}),t("iSortingCols",k.length));b=n.ext.legacy.ajax;return null===b?a.sAjaxSource?j:G:b?j:G;}function vb(a,b){var c=ta(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d;}oa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++){O(a,c[d]);}a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;P(a);a._bInitComplete||ua(a,b);a.bAjaxDataGet=!0;C(a,!1);}function ta(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?S(c)(b):b;}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function f(){var b=!this.value?"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,P(a));},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Oa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1;}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch);}catch(d){}});return b[0];}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function f(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive;};Ga(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++){xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);}yb(a);}else f(b);a.bFiltered=!0;r(a,null,"search",[a]);}function yb(a){for(var b=n.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,m=c.length;i<m;i++){e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);}c.length=0;h.merge(c,j);}}function xb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Pa(b,d,e,f),e=0;e<j.length;e++){b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);}a.aiDisplay=g;}}function wb(a,b,c,d,e,f){var d=Pa(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==n.ext.search.length&&(c=!0);j=zb(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++){d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);}a.aiDisplay=e;}}function Pa(a,b,c,d){a=b?a:Qa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"");}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"");}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=n.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++){if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++){c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(va.innerHTML=i,i=Wb?va.textContent:va.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);}h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0;}}return c;}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive};}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive};}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0];}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j);}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)));}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Fa(a);b=0;for(c=e.length;b<c;b++){f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));}r(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?sa(a,[],function(c){var f=ta(a,c);for(b=0;b<f.length;b++){O(a,f[b]);}a.iInitDisplayStart=d;T(a);C(a,!1);ua(a,c);},a):(C(a,!1),ua(a));}else setTimeout(function(){ha(a);},200);}function ua(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&$(a);r(a,null,"plugin-init",[a,b]);r(a,"aoInitComplete","init",[a,b]);}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);r(a,null,"length",[a,c]);}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++){e[0][g]=new Option("number"===typeof d[g]?a.fnFormatNumber(d[g]):d[g],f[g]);}var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ra(a,h(this).val());P(a);});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d);});return i[0];}function tb(a){var b=a.sPaginationType,c=n.ext.pager[b],d="function"===typeof c,e=function e(a){P(a);},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function fn(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++){Na(a,"pageButton")(a,f.p[l],l,h,b,i);}}else c.fnUpdate(a,e);},sName:"pagination"}));return b;}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(r(a,null,"page",[a]),c&&P(a));return b;}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0];}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");r(a,null,"processing",[a,b]);}function rb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),m=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],t=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(t.scrollLeft=a);});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=t;a.aoDrawCallback.push({fn:la,sName:"scrolling"});return i[0];}function la(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,m=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,t=h(a.nScrollFoot).children("div"),n=t.children("table"),o=h(a.nTHead),p=h(a.nTable),s=p[0],r=s.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,Xb=D(a.aoColumns,"nTh"),Q,L,R,w,Ua=[],y=[],z=[],A=[],B,C=function C(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0;};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,$(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();u&&(R=u.clone().prependTo(p),Q=u.find("tr"),R=R.find("tr"));w=o.clone().prependTo(p);o=o.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ra(a,w),function(b,c){B=aa(a,b);c.style.width=a.aoColumns[B].sWidth;});u&&I(function(a){a.style.width="";},R);f=p.outerWidth();if(""===c){r.width="100%";if(U&&(p.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(p.outerWidth()-b);f=p.outerWidth();}else""!==d&&(r.width=v(d),f=p.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Ua.push(v(h(a).css("width")));},L);I(function(a,b){if(h.inArray(a,Xb)!==-1)a.style.width=Ua[b];},o);h(L).height(0);u&&(I(C,R),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")));},R),I(function(a,b){a.style.width=y[b];},Q),h(R).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+z[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=Ua[b];},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing">'+A[b]+"</div>";a.childNodes[0].style.height="0";a.childNodes[0].style.overflow="hidden";a.style.width=y[b];},R);if(p.outerWidth()<f){Q=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))r.width=v(Q-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6);}else Q="100%";q.width=v(Q);g.width=v(Q);u&&(a.nScrollFoot.style.width=v(Q));!e&&U&&(q.height=v(s.offsetHeight+b));c=p.outerWidth();m[0].style.width=v(c);i.width=v(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(n[0].style.width=v(c),t[0].style.width=v(c),t[0].style[e]=d?b+"px":"0px");p.children("colgroup").insertBefore(p.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0;}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;){1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;}e++;}}function Fa(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=ma(a,"bVisible"),m=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,t=!1,n,o,p=a.oBrowser,d=p.bScrollOversize;(n=b.style.width)&&-1!==n.indexOf("%")&&(l=n);for(n=0;n<i.length;n++){o=c[i[n]],null!==o.sWidth&&(o.sWidth=Eb(o.sWidthOrig,k),t=!0);}if(d||!t&&!f&&!e&&j==V(a)&&j==m.length)for(n=0;n<j;n++){i=aa(a,n),null!==i&&(c[i].sWidth=v(m.eq(n).width()));}else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var s=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");m=ra(a,j.find("thead")[0]);for(n=0;n<i.length;n++){o=c[i[n]],m[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?v(o.sWidthOrig):"",o.sWidthOrig&&f&&h(m[n]).append(h("<div/>").css({width:o.sWidthOrig,margin:0,padding:0,border:0,height:1}));}if(a.aoData.length)for(n=0;n<i.length;n++){t=i[n],o=c[t],h(Fb(a,t)).clone(!1).append(o.sContentPadding).appendTo(s);}h("[name]",j).removeAttr("name");o=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(n=e=0;n<i.length;n++){k=h(m[n]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(m[n].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[n]].sWidth=v(k-g);}b.style.width=v(e);o.remove();}l&&(b.style.width=v(l));if((l||f)&&!a._reszEvt)b=function b(){h(E).on("resize.DT-"+a.sInstance,Oa(function(){$(a);}));},d?setTimeout(b,1E3):b(),a._reszEvt=!0;}function Eb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d;}function Fb(a,b){var c=Gb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b];}function Gb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++){c=B(a,f,b,"display")+"",c=c.replace(Yb,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);}return e;}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a;}function X(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var m=[];f=function f(a){a.length&&!h.isArray(a[0])?m.push(a):h.merge(m,a);};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<m.length;a++){i=m[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++){g=f[b],j=e[g].sType||"string",m[a]._idx===k&&(m[a]._idx=h.inArray(m[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:m[a][1],index:m[a]._idx,type:j,formatter:n.ext.type.order[j+"-pre"]});}}return d;}function mb(a){var b,c,d=[],e=n.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ga(a);h=X(a);b=0;for(c=h.length;b<c;b++){j=h[b],j.formatter&&g++,Hb(a,j.col);}if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++){d[i[b]]=b;}g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,n=f[b]._aSortData;for(g=0;g<i;g++){if(j=h[g],c=k[j.col],e=n[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;}c=d[a];e=d[b];return c<e?-1:c>e?1:0;}):i.sort(function(a,b){var c,g,j,i,k=h.length,n=f[a]._aSortData,o=f[b]._aSortData;for(j=0;j<k;j++){if(i=h[j],c=n[i.col],g=o[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;}c=d[a];g=d[b];return c<g?-1:c>g?1:0;});}a.bSorted=!0;}function Ib(a){for(var b,c,d=a.aoColumns,e=X(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b);}}function Va(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function g(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0;};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a);}function Ma(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1);},0)):Va(a,c,b.shiftKey,d));});}function wa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=X(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++){g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));}e=0;for(f=d.length;e<f;e++){g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3));}}a.aLastSort=d;}function Hb(a,b){var c=a.aoColumns[b],d=n.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=n.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++){if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f;}}function xa(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date(),start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])};})};r(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b);}}function Jb(a,b,c){var d,e,f=a.aoColumns,b=function b(_b){if(_b&&_b.time){var g=r(a,"aoStateLoadParams","stateLoadParams",[a,_b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&_b.time<+new Date()-1E3*g)&&!(_b.columns&&f.length!==_b.columns.length))){a.oLoadedState=h.extend(!0,{},_b);_b.start!==k&&(a._iDisplayStart=_b.start,a.iInitDisplayStart=_b.start);_b.length!==k&&(a._iDisplayLength=_b.length);_b.order!==k&&(a.aaSorting=[],h.each(_b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c);}));_b.search!==k&&h.extend(a.oPreviousSearch,Bb(_b.search));if(_b.columns){d=0;for(e=_b.columns.length;d<e;d++){g=_b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Bb(g.search));}}r(a,"aoStateLoaded","stateLoaded",[a,_b]);}}c();};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g);}else c();}function ya(a){var b=n.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null;}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=n.ext,b=b.sErrMode||b.errMode,a&&r(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c);}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d);}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]));}function Xa(a,b,c){var d,e;for(e in b){b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);}return a;}function Wa(a,b,c){h(a).on("click.DT",b,function(b){h(a).blur();c(b);}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a));}).on("selectstart.DT",function(){return!1;});}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d});}function r(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d);}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e;}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b;}function Na(a,b){var c=a.renderer,d=n.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._;}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom";}function ia(a,b){var c=[],c=Kb.numbers_length,d=Math.floor(c/2);b<=c?c=Y(0,b):a<=d?(c=Y(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=Y(b-(c-2),b):(c=Y(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c;}function Da(a){h.each({num:function num(b){return za(b,a);},"num-fmt":function numFmt(b){return za(b,a,Ya);},"html-num":function htmlNum(b){return za(b,a,Aa);},"html-num-fmt":function htmlNumFmt(b){return za(b,a,Aa,Ya);}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html);});}function Lb(a){return function(){var b=[ya(this[n.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.ext.internal[a].apply(this,b);};}var n=function n(a){this.$=function(a,b){return this.api(!0).$(a,b);};this._=function(a,b){return this.api(!0).rows(a,b).data();};this.api=function(a){return a?new _s(ya(this[x.iApiIndex])):new _s(this);};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray();};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&la(c);};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw();};this.fnClose=function(a){this.api(!0).row(a).child.hide();};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h;};this.fnDestroy=function(a){this.api(!0).destroy(a);};this.fnDraw=function(a){this.api(!0).draw(a);};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw();};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null;}return c.data().toArray();};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray();};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null;};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown();};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0];};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1);};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw();};this.fnSettings=function(){return ya(this[x.iApiIndex]);};this.fnSort=function(a){this.api(!0).order(a).draw();};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c);};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0;};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in n.ext.internal){e&&(this[e]=Lb(e));}this.each(function(){var e={},g=1<d?Xa(e,a,!0):a,j=0,i,e=this.getAttribute("id"),m=!1,l=n.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var t=n.settings,j=0;for(i=t.length;j<i;j++){var o=t[j];if(o.nTable==this||o.nTHead&&o.nTHead.parentNode==this||o.nTFoot&&o.nTFoot.parentNode==this){var s=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||s)return o.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){o.oInstance.fnDestroy();break;}else{K(o,0,"Cannot reinitialise DataTable",3);return;}}if(o.sTableId==this.id){t.splice(j,1);break;}}if(null===e||""===e)this.id=e="DataTables_Table_"+n.ext._unique++;var p=h.extend(!0,{},n.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});p.nTable=this;p.oApi=b.internal;p.oInit=g;t.push(p);p.oInstance=1===b.length?b:q.dataTable();eb(g);Ca(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=Xa(h.extend(!0,{},l),g);F(p.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(p,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);F(p.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(p.oLanguage,g,"fnInfoCallback");z(p,"aoDrawCallback",g.fnDrawCallback,"user");z(p,"aoServerParams",g.fnServerParams,"user");z(p,"aoStateSaveParams",g.fnStateSaveParams,"user");z(p,"aoStateLoadParams",g.fnStateLoadParams,"user");z(p,"aoStateLoaded",g.fnStateLoaded,"user");z(p,"aoRowCallback",g.fnRowCallback,"user");z(p,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(p,"aoHeaderCallback",g.fnHeaderCallback,"user");z(p,"aoFooterCallback",g.fnFooterCallback,"user");z(p,"aoInitComplete",g.fnInitComplete,"user");z(p,"aoPreDrawCallback",g.fnPreDrawCallback,"user");p.rowIdFn=S(g.rowId);gb(p);var u=p.oClasses;h.extend(u,n.ext.classes,g.oClasses);q.addClass(u.sTable);p.iInitDisplayStart===k&&(p.iInitDisplayStart=g.iDisplayStart,p._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(p.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),p._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,p._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=p.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function success(a){Ca(a);J(l.oLanguage,a);h.extend(true,v,a);ha(p);},error:function error(){ha(p);}}),m=!0);null===g.asStripeClasses&&(p.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=p.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a);}))&&(h("tbody tr",this).removeClass(e.join(" ")),p.asDestroyStripes=e.slice());e=[];t=this.getElementsByTagName("thead");0!==t.length&&(ea(p.aoHeader,t[0]),e=ra(p));if(null===g.aoColumns){t=[];j=0;for(i=e.length;j<i;j++){t.push(null);}}else t=g.aoColumns;j=0;for(i=t.length;j<i;j++){Ea(p,e?e[j]:null);}ib(p,g.aoColumnDefs,t,function(a,b){ka(p,a,b);});if(x.length){var w=function w(a,b){return a.getAttribute("data-"+b)!==null?b:null;};h(x[0]).children("th, td").each(function(a,b){var c=p.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};ka(p,a);}}});}var U=p.oFeatures,e=function e(){if(g.aaSorting===k){var a=p.aaSorting;j=0;for(i=a.length;j<i;j++){a[j][1]=p.aoColumns[j].asSorting[0];}}wa(p);U.bSort&&z(p,"aoDrawCallback",function(){if(p.bSorted){var a=X(p),b={};h.each(a,function(a,c){b[c.src]=c.dir;});r(p,null,"order",[p,a,b]);Ib(p);}});z(p,"aoDrawCallback",function(){(p.bSorted||y(p)==="ssp"||U.bDeferRender)&&wa(p);},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side");}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));p.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));p.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(p.oScroll.sX!==""||p.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){p.nTFoot=b[0];ea(p.aoFooter,p.nTFoot);}if(g.aaData)for(j=0;j<g.aaData.length;j++){O(p,g.aaData[j]);}else(p.bDeferLoading||y(p)=="dom")&&na(p,h(p.nTBody).children("tr"));p.aiDisplay=p.aiDisplayMaster.slice();p.bInitialised=true;m===false&&ha(p);};g.bStateSave?(U.bStateSave=!0,z(p,"aoDrawCallback",xa,"state_save"),Jb(p,g,e)):e();}});b=null;return this;},x,_s,o,u,Za={},Mb=/[\r\n]/g,Aa=/<.*?>/g,Zb=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,$b=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Ya=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,M=function M(a){return!a||!0===a||"-"===a?!0:!1;},Nb=function Nb(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null;},Ob=function Ob(a,b){Za[b]||(Za[b]=RegExp(Qa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Za[b],"."):a;},$a=function $a(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Ob(a,b));c&&d&&(a=a.replace(Ya,""));return!isNaN(parseFloat(a))&&isFinite(a);},Pb=function Pb(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:$a(a.replace(Aa,""),b,c)?!0:null;},D=function D(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++){a[e]&&a[e][b]&&d.push(a[e][b][c]);}else for(;e<f;e++){a[e]&&d.push(a[e][b]);}return d;},ja=function ja(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++){a[b[f]][c]&&e.push(a[b[f]][c][d]);}else for(;f<g;f++){e.push(a[b[f]][c]);}return e;},Y=function Y(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++){c.push(e);}return c;},Qb=function Qb(a){for(var b=[],c=0,d=a.length;c<d;c++){a[c]&&b.push(a[c]);}return b;},qa=function qa(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a;}c=b[d];}}b=!0;}if(b)return a.slice();b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++){if(b[f]===c)continue a;}b.push(c);g++;}return b;};n.util={throttle:function throttle(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date(),j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,j);},c)):(d=g,a.apply(b,j));};},escapeRegex:function escapeRegex(a){return a.replace($b,"\\$1");}};var A=function A(a,b,c){a[b]!==k&&(a[c]=a[b]);},ca=/\[.*?\]$/,W=/\(\)$/,Qa=n.util.escapeRegex,va=h("<div>")[0],Wb=va.textContent!==k,Yb=/<.*?>/g,Oa=n.util.throttle,Rb=[],w=Array.prototype,ac=function ac(a){var b,c,d=n.settings,e=h.map(d,function(a){return a.nTable;});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a);}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null;}).toArray();};_s=function s(a,b){if(!(this instanceof _s))return new _s(a,b);var c=[],d=function d(a){(a=ac(a))&&(c=c.concat(a));};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++){d(a[e]);}else d(a);this.context=qa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};_s.extend(this,this,Rb);};n.Api=_s;h.extend(_s.prototype,{any:function any(){return 0!==this.count();},concat:w.concat,context:[],count:function count(){return this.flatten().length;},each:function each(a){for(var b=0,c=this.length;b<c;b++){a.call(this,this[b],b,this);}return this;},eq:function eq(a){var b=this.context;return b.length>a?new _s(b[a],this[a]):null;},filter:function filter(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++){a.call(this,this[c],c,this)&&b.push(this[c]);}return new _s(this.context,b);},flatten:function flatten(){var a=[];return new _s(this.context,a.concat.apply(a,this.toArray()));},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++){if(this[c]===a)return c;}return-1;},iterator:function iterator(a,b,c,d){var e=[],f,g,j,h,m,l=this.context,n,o,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(j=l.length;g<j;g++){var r=new _s(l[g]);if("table"===b)f=c.call(r,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(r,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){o=this[g];"column-rows"===b&&(n=Ba(l[g],u.opts));h=0;for(m=o.length;h<m;h++){f=o[h],f="cell"===b?c.call(r,l[g],f.row,f.column,g,h):c.call(r,l[g],f,g,h,n),f!==k&&e.push(f);}}}return e.length||d?(a=new _s(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this;},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function map(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++){b.push(a.call(this,this[c],c));}return new _s(this.context,b);},pluck:function pluck(a){return this.map(function(b){return b[a];});},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return hb(this,a,b,0,this.length,1);},reduceRight:w.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1);},reverse:w.reverse,selector:null,shift:w.shift,slice:function slice(){return new _s(this.context,this);},sort:w.sort,splice:w.splice,toArray:function toArray(){return w.slice.call(this);},to$:function to$(){return h(this);},toJQuery:function toJQuery(){return h(this);},unique:function unique(){return new _s(this.context,qa(this));},unshift:w.unshift});_s.extend=function(a,b,c){if(c.length&&b&&(b instanceof _s||b.__dt_wrapper)){var d,e,f,g=function g(a,b,c){return function(){var d=b.apply(a,arguments);_s.extend(d,d,c.methodExt);return d;};};d=0;for(e=c.length;d<e;d++){f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,_s.extend(a,b[f.name],f.propExt);}}};_s.register=o=function o(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++){_s.register(a[c],b);}else for(var e=a.split("."),f=Rb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var m=f.length;i<m;i++){if(f[i].name===g){i=f[i];break a;}}i=null;}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt;}};_s.registerPlural=u=function u(a,b,c){_s.register(a,c);_s.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof _s?a.length?h.isArray(a[0])?new _s(a.context,a[0]):a[0]:k:a;});};o("tables()",function(a){var b;if(a){b=_s;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable;}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a];}).toArray();b=new b(a);}else b=this;return b;});o("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new _s(b[0]):a;});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable;},1);});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody;},1);});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead;},1);});u("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot;},1);});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper;},1);});o("draw()",function(a){return this.iterator("table",function(b){"page"===a?P(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a));});});o("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a);});});o("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)};});o("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a);});});var Sb=function Sb(a,b,c){if(c){var d=new _s(a);d.one("draw",function(){c(d.ajax.json());});}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();sa(a,[],function(c){oa(a);for(var c=ta(a,c),d=0,e=c.length;d<e;d++){O(a,c[d]);}T(a,b);C(a,!1);});}};o("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json;});o("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData;});o("ajax.reload()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a);});});o("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource;}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a;});});o("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Sb(c,!1===b,a);});});var ab=function ab(a,b,c,d,e){var f=[],g,j,i,m,l,n;i=_typeof(b);if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(m=b.length;i<m;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):[b[i]];l=0;for(n=j.length;l<n;l++){(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g));}}a=x.selector[a];if(a.length){i=0;for(m=a.length;i<m;i++){f=a[i](d,e,f);}}return qa(f);},bb=function bb(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a);},cb=function cb(a){for(var b=0,c=a.length;b<c;b++){if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;}a.length=0;return a;},Ba=function Ba(a,b){var c,d,e,f=[],g=a.aiDisplay;e=a.aiDisplayMaster;var j=b.search;c=b.order;d=b.page;if("ssp"==y(a))return"removed"===j?[]:Y(0,e.length);if("current"==d){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++){f.push(g[c]);}}else if("current"==c||"applied"==c){if("none"==j)f=e.slice();else if("applied"==j)f=g.slice();else{if("removed"==j){var i={};c=0;for(d=g.length;c<d;c++){i[g[c]]=null;}f=h.map(e,function(a){return!i.hasOwnProperty(a)?a:null;});}}}else if("index"==c||"original"==c){c=0;for(d=a.aoData.length;c<d;c++){"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c));}}return f;};o("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=b,f;return ab("row",a,function(a){var b=Nb(a),i=c.aoData;if(b!==null&&!e)return[b];f||(f=Ba(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var c=i[b];return a(b,c._aData,c.nTr)?b:null;});if(a.nodeName){var b=a._DT_RowIndex,m=a._DT_CellIndex;if(b!==k)return i[b]&&i[b].nTr===a?[b]:[];if(m)return i[m.row]&&i[m.row].nTr===a?[m.row]:[];b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[];}if(typeof a==="string"&&a.charAt(0)==="#"){b=c.aIds[a.replace(/^#/,"")];if(b!==k)return[b.idx];}b=Qb(ja(c.aoData,f,"nTr"));return h(b).filter(a).map(function(){return this._DT_RowIndex;}).toArray();},c,e);},1);c.selector.rows=a;c.selector.opts=b;return c;});o("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k;},1);});o("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData");},1);});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData;},1);});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a);});});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b;},1);});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++){for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h);}}return new _s(c,b);});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,m,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++){if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(m=l.length;i<m;i++){l[i]._DT_CellIndex.row=g;}}}pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c];});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++){a.aoData[c].idx=c;}});return this;});o("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++){c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(na(b,c)[0]):h.push(O(b,c));}return h;},1),c=this.rows(-1);c.pop();h.merge(c,b);return c;});o("row()",function(a,b){return cb(this.rows(a,b));});o("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;var c=b[0].aoData[this[0]];c._aData=a;h.isArray(a)&&c.nTr.id&&N(b[0].rowId)(a,c.nTr.id);da(b[0],this[0],"data");return this;});o("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null;});o("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?na(b,a)[0]:O(b,a);});return this.row(b[0]);});var db=function db(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k;},Tb=function Tb(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new _s(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr);});}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=V(b),f=0,h=g.length;f<h;f++){c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d);}}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++){g[c]._details&&db(f,c);}}));}}};o("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)db(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function f(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++){f(a[c],b);}else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=V(d),e.push(c[0]));};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr);}return this;});o(["row().child.show()","row().child().show()"],function(){Tb(this,!0);return this;});o(["row().child.hide()","row().child().hide()"],function(){Tb(this,!1);return this;});o(["row().child.remove()","row().child().remove()"],function(){db(this);return this;});o("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1;});var bc=/^([^:]+):(name|visIdx|visible)$/,Ub=function Ub(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++){c.push(B(a,e[d],b));}return c;};o("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=bb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return ab("column",e,function(a){var b=Nb(a);if(a==="")return Y(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Ba(c,f);return h.map(g,function(b,f){return a(f,Ub(c,f,0,0,e),i[f])?f:null;});}var k=typeof a==="string"?a.match(bc):"";if(k)switch(k[2]){case"visIdx":case"visible":b=parseInt(k[1],10);if(b<0){var n=h.map(g,function(a,b){return a.bVisible?b:null;});return[n[n.length+b]];}return[aa(c,b)];case"name":return h.map(j,function(a,b){return a===k[1]?b:null;});default:return[];}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i);}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[];},c,f);},1);c.selector.cols=a;c.selector.opts=b;return c;});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh;},1);});u("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf;},1);});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Ub,1);});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData;},1);});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c);},1);});u("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b);},1);});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,m,l;if(a!==k&&g.bVisible!==a){if(a){var n=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(m=j.length;i<m;i++){l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[n]||null);}}else h(D(b.aoData,"anCells",c)).detach();g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);b.aiDisplay.length||h(b.nTBody).find("td[colspan]").attr("colspan",V(b));xa(b);}});a!==k&&(this.iterator("column",function(c,e){r(c,null,"column-visibility",[c,e,a,b]);}),(b===k||b)&&this.columns.adjust());return c;});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c;},1);});o("columns.adjust()",function(){return this.iterator("table",function(a){$(a);},1);});o("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return aa(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b);}});o("column()",function(a,b){return cb(this.columns(a,b));});o("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=bb(c),f=b.aoData,g=Ba(b,e),j=Qb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,n,o,u,s,r,v;return ab("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){n=[];o=0;for(u=g.length;o<u;o++){l=g[o];for(s=0;s<m;s++){r={row:l,column:s};if(c){v=f[l];a(r,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(r);}else n.push(r);}}return n;}if(h.isPlainObject(a))return a.column!==k&&a.row!==k&&h.inArray(a.row,g)!==-1?[a]:[];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column};}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[];},b,e);});var d=this.columns(b),e=this.rows(a),f,g,j,i,m;this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++){f.push({row:e[b][g],column:d[b][i]});}}},1);var l=this.cells(f,c);h.extend(l.selector,{cols:b,rows:a,opts:c});return l;});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k;},1);});o("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c);},1);});u("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d];},1);});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a);},1);});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)};},1);});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d);});});o("cell()",function(a,b,c){return cb(this.cells(a,b,c));});o("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this;});o("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice();});});o("order.listener()",function(a,b,c){return this.iterator("table",function(d){Ma(d,a,b,c);});});o("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b;}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a);});});o(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a]);});c.aaSorting=e;});});o("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1);});});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1));});});o("state()",function(){return this.context.length?this.context[0].oSavedState:null;});o("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{});});});o("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null;});o("state.save()",function(){return this.iterator("table",function(a){xa(a);});});n.versionCheck=n.fnVersionCheck=function(a){for(var b=n.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++){if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;}return!0;};n.isDataTable=n.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof n.Api)return!0;h.each(n.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0;});return c;};n.tables=n.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(n.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable;});return b?new _s(c):c;};n.camelToHungarian=J;o("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()));});h.each(["on","one","off"],function(a,b){o(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a;}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this;});});o("clear()",function(){return this.iterator("table",function(a){oa(a);});});o("settings()",function(){return new _s(this.context,this.context);});o("init()",function(){var a=this.context;return a.length?a[0].oInit:null;});o("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData");}).flatten();});o("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr;}),o;b.bDestroying=!0;r(b,"aoDestroyCallback","destroy",[b]);a||new _s(b).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];wa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(o=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%o]);}));c=h.inArray(b,n.settings);-1!==c&&n.settings.splice(c,1);});});h.each(["column","row","cell"],function(a,b){o(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m);});});});o("i18n()",function(a,b,c){var d=this.context[0],a=S(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c);});n.version="1.10.18";n.settings=[];n.models={};n.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};n.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};n.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};n.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function fnFormatNumber(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands);},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function fnStateLoadCallback(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname));}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function fnStateSaveCallback(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b));}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},n.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Z(n.defaults);n.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Z(n.defaults.column);n.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function fnRecordsTotal(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length;},fnRecordsDisplay:function fnRecordsDisplay(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length;},fnDisplayEnd:function fnDisplayEnd(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c;},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};n.ext=x={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:n.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:n.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(n.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Kb=n.ext.pager;h.extend(Kb,{simple:function simple(){return["previous","next"];},full:function full(){return["first","previous","next","last"];},numbers:function numbers(a,b){return[ia(a,b)];},simple_numbers:function simple_numbers(a,b){return["previous",ia(a,b),"next"];},full_numbers:function full_numbers(a,b){return["first","previous",ia(a,b),"next","last"];},first_last_numbers:function first_last_numbers(a,b){return["first",ia(a,b),"last"];},_numbers:ia,numbers_length:7});h.extend(!0,n.ext.renderer,{pageButton:{_:function _(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,n=0,o=function o(b,d){var k,s,u,r,v=function v(b){Ta(a,b.data.action,true);};k=0;for(s=d.length;k<s;k++){r=d[k];if(h.isArray(r)){u=h("<"+(r.DT_el||"div")+"/>").appendTo(b);o(u,r);}else{m=null;l="";switch(r){case"ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case"first":m=j.sFirst;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case"previous":m=j.sPrevious;l=r+(e>0?"":" "+g.sPageButtonDisabled);break;case"next":m=j.sNext;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;case"last":m=j.sLast;l=r+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=r+1;l=e===r?g.sPageButtonActive:"";}if(m!==null){u=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[r],"data-dt-idx":n,tabindex:a.iTabIndex,id:c===0&&typeof r==="string"?a.sTableId+"_"+r:null}).html(m).appendTo(b);Wa(u,{action:r},v);n++;}}}},s;try{s=h(b).find(H.activeElement).data("dt-idx");}catch(u){}o(h(b).empty(),d);s!==k&&h(b).find("[data-dt-idx="+s+"]").focus();}}});h.extend(n.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c)?"num"+c:null;},function(a){if(a&&!(a instanceof Date)&&!Zb.test(a))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null;},function(a,b){var c=b.oLanguage.sDecimal;return $a(a,c,!0)?"num-fmt"+c:null;},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c)?"html-num"+c:null;},function(a,b){var c=b.oLanguage.sDecimal;return Pb(a,c,!0)?"html-num-fmt"+c:null;},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null;}]);h.extend(n.ext.type.search,{html:function html(a){return M(a)?a:"string"===typeof a?a.replace(Mb," ").replace(Aa,""):"";},string:function string(a){return M(a)?a:"string"===typeof a?a.replace(Mb," "):a;}});var za=function za(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Ob(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a;};h.extend(x.type.order,{"date-pre":function datePre(a){a=Date.parse(a);return isNaN(a)?-Infinity:a;},"html-pre":function htmlPre(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+"";},"string-pre":function stringPre(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString();},"string-asc":function stringAsc(a,b){return a<b?-1:a>b?1:0;},"string-desc":function stringDesc(a,b){return a<b?1:a>b?-1:0;}});Da("");h.extend(!0,n.ext.renderer,{header:{_:function _(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);}});},jqueryui:function jqueryui(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI);}});}}});var Vb=function Vb(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a;};n.render={number:function number(a,b,c,d,e){return{display:function display(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Vb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"");}};},text:function text(){return{display:Vb};}};h.extend(n.ext.internal,{_fnExternApiFunc:Lb,_fnBuildAjax:sa,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:ta,_fnAddColumn:Ea,_fnColumnOptions:ka,_fnAdjustColumnSizing:$,_fnVisibleToColumnIndex:aa,_fnColumnIndexToVisible:ba,_fnVisbleColumns:V,_fnGetColumns:ma,_fnColumnTypes:Ga,_fnApplyColumnDefs:ib,_fnHungarianMap:Z,_fnCamelToHungarian:J,_fnLanguageCompat:Ca,_fnBrowserDetect:gb,_fnAddData:O,_fnAddTr:na,_fnNodeToDataIndex:function _fnNodeToDataIndex(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null;},_fnNodeToColumnIndex:function _fnNodeToColumnIndex(a,b,c){return h.inArray(c,a.aoData[b].anCells);},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:Ja,_fnGetObjectDataFn:S,_fnSetObjectDataFn:N,_fnGetDataMaster:Ka,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:da,_fnGetRowElements:Ia,_fnCreateTr:Ha,_fnBuildHead:kb,_fnDrawHead:fa,_fnDraw:P,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:ea,_fnGetUniqueThs:ra,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ga,_fnFilterCustom:yb,_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Pa,_fnEscapeRegex:Qa,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ha,_fnInitComplete:ua,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:la,_fnApplyToChildren:I,_fnCalculateColumnWidths:Fa,_fnThrottle:Oa,_fnConvertToWidth:Eb,_fnGetWidestNode:Fb,_fnGetMaxLenString:Gb,_fnStringToCss:v,_fnSortFlatten:X,_fnSort:mb,_fnSortAria:Ib,_fnSortListener:Va,_fnSortAttachListener:Ma,_fnSortingClasses:wa,_fnSortData:Hb,_fnSaveState:xa,_fnLoadState:Jb,_fnSettingsFromNode:ya,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:r,_fnLengthOverflow:Sa,_fnRenderer:Na,_fnDataSource:y,_fnRowAttributes:La,_fnExtend:Xa,_fnCalculateEnd:function _fnCalculateEnd(){}});h.fn.dataTable=n;n.$=h;h.fn.dataTableSettings=n.settings;h.fn.dataTableExt=n.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api();};h.each(n,function(a,b){h.fn.DataTable[a]=b;});return h.fn.dataTable;});/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document);}):"object"===(typeof exports==="undefined"?"undefined":_typeof(exports))?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document);}:b(jQuery,window,document);})(function(b,a,d,m){var f=b.fn.dataTable;b.extend(!0,f.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"});b.extend(f.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"custom-select custom-select-sm form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});f.ext.renderer.pageButton.bootstrap=function(a,h,r,s,j,n){var o=new f.Api(a),t=a.oClasses,k=a.oLanguage.oPaginate,u=a.oLanguage.oAria.paginate||{},e,g,p=0,q=function q(d,f){var l,h,i,c,m=function m(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page");};l=0;for(h=f.length;l<h;l++){if(c=f[l],b.isArray(c))q(d,c);else{g=e="";switch(c){case"ellipsis":e="&#x2026;";g="disabled";break;case"first":e=k.sFirst;g=c+(0<j?"":" disabled");break;case"previous":e=k.sPrevious;g=c+(0<j?"":" disabled");break;case"next":e=k.sNext;g=c+(j<n-1?"":" disabled");break;case"last":e=k.sLast;g=c+(j<n-1?"":" disabled");break;default:e=c+1,g=j===c?"active":"";}e&&(i=b("<li>",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#","aria-controls":a.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:a.iTabIndex,"class":"page-link"}).html(e)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++);}}},i;try{i=b(h).find(d.activeElement).data("dt-idx");}catch(v){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),s);i!==m&&b(h).find("[data-dt-idx="+i+"]").focus();};return f;});/*!
 Responsive 2.2.3
 2014-2018 SpryMedia Ltd - datatables.net/license
*/(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(l){return d(l,window,document);}):"object"===(typeof exports==="undefined"?"undefined":_typeof(exports))?module.exports=function(l,j){l||(l=window);if(!j||!j.fn.dataTable)j=require("datatables.net")(l,j).$;return d(j,l,l.document);}:d(jQuery,window,document);})(function(d,l,j,q){function t(a,b,c){var e=b+"-"+c;if(n[e])return n[e];for(var d=[],a=a.cell(b,c).node().childNodes,b=0,c=a.length;b<c;b++){d.push(a[b]);}return n[e]=d;}function r(a,b,d){var e=b+"-"+d;if(n[e]){for(var a=a.cell(b,d).node(),d=n[e][0].parentNode.childNodes,b=[],f=0,g=d.length;f<g;f++){b.push(d[f]);}d=0;for(f=b.length;d<f;d++){a.appendChild(b[d]);}n[e]=q;}}var o=d.fn.dataTable,i=function i(a,b){if(!o.versionCheck||!o.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={dt:new o.Api(a),columns:[],current:[]};this.s.dt.settings()[0].responsive||(b&&"string"===typeof b.details?b.details={type:b.details}:b&&!1===b.details?b.details={type:!1}:b&&!0===b.details&&(b.details={type:"inline"}),this.c=d.extend(!0,{},i.defaults,o.defaults.responsive,b),a.responsive=this,this._constructor());};d.extend(i.prototype,{_constructor:function _constructor(){var a=this,b=this.s.dt,c=b.settings()[0],e=d(l).width();b.settings()[0]._responsive=this;d(l).on("resize.dtr orientationchange.dtr",o.util.throttle(function(){var b=d(l).width();b!==e&&(a._resize(),e=b);}));c.oApi._fnCallbackReg(c,"aoRowCreatedCallback",function(e){-1!==d.inArray(!1,a.s.current)&&d(">td, >th",e).each(function(e){e=b.column.index("toData",e);!1===a.s.current[e]&&d(this).css("display","none");});});b.on("destroy.dtr",function(){b.off(".dtr");d(b.table().body()).off(".dtr");d(l).off("resize.dtr orientationchange.dtr");d.each(a.s.current,function(b,e){!1===e&&a._setColumnVis(b,!0);});});this.c.breakpoints.sort(function(a,b){return a.width<b.width?1:a.width>b.width?-1:0;});this._classLogic();this._resizeAuto();c=this.c.details;!1!==c.type&&(a._detailsInit(),b.on("column-visibility.dtr",function(){a._timer&&clearTimeout(a._timer);a._timer=setTimeout(function(){a._timer=null;a._classLogic();a._resizeAuto();a._resize();a._redrawChildren();},100);}),b.on("draw.dtr",function(){a._redrawChildren();}),d(b.table().node()).addClass("dtr-"+c.type));b.on("column-reorder.dtr",function(){a._classLogic();a._resizeAuto();a._resize();});b.on("column-sizing.dtr",function(){a._resizeAuto();a._resize();});b.on("preXhr.dtr",function(){var e=[];b.rows().every(function(){this.child.isShown()&&e.push(this.id(true));});b.one("draw.dtr",function(){a._resizeAuto();a._resize();b.rows(e).every(function(){a._detailsDisplay(this,false);});});});b.on("init.dtr",function(){a._resizeAuto();a._resize();d.inArray(false,a.s.current)&&b.columns.adjust();});this._resize();},_columnsVisiblity:function _columnsVisiblity(a){var b=this.s.dt,c=this.s.columns,e,f,g=c.map(function(a,b){return{columnIdx:b,priority:a.priority};}).sort(function(a,b){return a.priority!==b.priority?a.priority-b.priority:a.columnIdx-b.columnIdx;}),h=d.map(c,function(e,c){return!1===b.column(c).visible()?"not-visible":e.auto&&null===e.minWidth?!1:!0===e.auto?"-":-1!==d.inArray(a,e.includeIn);}),m=0;e=0;for(f=h.length;e<f;e++){!0===h[e]&&(m+=c[e].minWidth);}e=b.settings()[0].oScroll;e=e.sY||e.sX?e.iBarWidth:0;m=b.table().container().offsetWidth-e-m;e=0;for(f=h.length;e<f;e++){c[e].control&&(m-=c[e].minWidth);}var s=!1;e=0;for(f=g.length;e<f;e++){var k=g[e].columnIdx;"-"===h[k]&&!c[k].control&&c[k].minWidth&&(s||0>m-c[k].minWidth?(s=!0,h[k]=!1):h[k]=!0,m-=c[k].minWidth);}g=!1;e=0;for(f=c.length;e<f;e++){if(!c[e].control&&!c[e].never&&!1===h[e]){g=!0;break;}}e=0;for(f=c.length;e<f;e++){c[e].control&&(h[e]=g),"not-visible"===h[e]&&(h[e]=!1);}-1===d.inArray(!0,h)&&(h[0]=!0);return h;},_classLogic:function _classLogic(){var a=this,b=this.c.breakpoints,c=this.s.dt,e=c.columns().eq(0).map(function(a){var b=this.column(a),e=b.header().className,a=c.settings()[0].aoColumns[a].responsivePriority;a===q&&(b=d(b.header()).data("priority"),a=b!==q?1*b:1E4);return{className:e,includeIn:[],auto:!1,control:!1,never:e.match(/\bnever\b/)?!0:!1,priority:a};}),f=function f(a,b){var c=e[a].includeIn;-1===d.inArray(b,c)&&c.push(b);},g=function g(d,c,_g,k){if(_g){if("max-"===_g){k=a._find(c).width;c=0;for(_g=b.length;c<_g;c++){b[c].width<=k&&f(d,b[c].name);}}else if("min-"===_g){k=a._find(c).width;c=0;for(_g=b.length;c<_g;c++){b[c].width>=k&&f(d,b[c].name);}}else{if("not-"===_g){c=0;for(_g=b.length;c<_g;c++){-1===b[c].name.indexOf(k)&&f(d,b[c].name);}}}}else e[d].includeIn.push(c);};e.each(function(a,e){for(var c=a.className.split(" "),f=!1,i=0,l=c.length;i<l;i++){var j=d.trim(c[i]);if("all"===j){f=!0;a.includeIn=d.map(b,function(a){return a.name;});return;}if("none"===j||a.never){f=!0;return;}if("control"===j){f=!0;a.control=!0;return;}d.each(b,function(a,b){var d=b.name.split("-"),c=j.match(RegExp("(min\\-|max\\-|not\\-)?("+d[0]+")(\\-[_a-zA-Z0-9])?"));c&&(f=!0,c[2]===d[0]&&c[3]==="-"+d[1]?g(e,b.name,c[1],c[2]+c[3]):c[2]===d[0]&&!c[3]&&g(e,b.name,c[1],c[2]));});}f||(a.auto=!0);});this.s.columns=e;},_detailsDisplay:function _detailsDisplay(a,b){var c=this,e=this.s.dt,f=this.c.details;if(f&&!1!==f.type){var g=f.display(a,b,function(){return f.renderer(e,a[0],c._detailsObj(a[0]));});(!0===g||!1===g)&&d(e.table().node()).triggerHandler("responsive-display.dt",[e,a,g,b]);}},_detailsInit:function _detailsInit(){var a=this,b=this.s.dt,c=this.c.details;"inline"===c.type&&(c.target="td:first-child, th:first-child");b.on("draw.dtr",function(){a._tabIndexes();});a._tabIndexes();d(b.table().body()).on("keyup.dtr","td, th",function(a){a.keyCode===13&&d(this).data("dtr-keyboard")&&d(this).click();});var e=c.target;d(b.table().body()).on("click.dtr mousedown.dtr mouseup.dtr","string"===typeof e?e:"td, th",function(c){if(d(b.table().node()).hasClass("collapsed")&&d.inArray(d(this).closest("tr").get(0),b.rows().nodes().toArray())!==-1){if(typeof e==="number"){var g=e<0?b.columns().eq(0).length+e:e;if(b.cell(this).index().column!==g)return;}g=b.row(d(this).closest("tr"));c.type==="click"?a._detailsDisplay(g,false):c.type==="mousedown"?d(this).css("outline","none"):c.type==="mouseup"&&d(this).blur().css("outline","");}});},_detailsObj:function _detailsObj(a){var b=this,c=this.s.dt;return d.map(this.s.columns,function(e,d){if(!e.never&&!e.control)return{title:c.settings()[0].aoColumns[d].sTitle,data:c.cell(a,d).render(b.c.orthogonal),hidden:c.column(d).visible()&&!b.s.current[d],columnIndex:d,rowIndex:a};});},_find:function _find(a){for(var b=this.c.breakpoints,c=0,e=b.length;c<e;c++){if(b[c].name===a)return b[c];}},_redrawChildren:function _redrawChildren(){var a=this,b=this.s.dt;b.rows({page:"current"}).iterator("row",function(c,e){b.row(e);a._detailsDisplay(b.row(e),!0);});},_resize:function _resize(){var a=this,b=this.s.dt,c=d(l).width(),e=this.c.breakpoints,f=e[0].name,g=this.s.columns,h,m=this.s.current.slice();for(h=e.length-1;0<=h;h--){if(c<=e[h].width){f=e[h].name;break;}}var i=this._columnsVisiblity(f);this.s.current=i;e=!1;h=0;for(c=g.length;h<c;h++){if(!1===i[h]&&!g[h].never&&!g[h].control&&!1===!b.column(h).visible()){e=!0;break;}}d(b.table().node()).toggleClass("collapsed",e);var k=!1,j=0;b.columns().eq(0).each(function(b,c){!0===i[c]&&j++;i[c]!==m[c]&&(k=!0,a._setColumnVis(b,i[c]));});k&&(this._redrawChildren(),d(b.table().node()).trigger("responsive-resize.dt",[b,this.s.current]),0===b.page.info().recordsDisplay&&d("td",b.table().body()).eq(0).attr("colspan",j));},_resizeAuto:function _resizeAuto(){var a=this.s.dt,b=this.s.columns;if(this.c.auto&&-1!==d.inArray(!0,d.map(b,function(a){return a.auto;}))){d.isEmptyObject(n)||d.each(n,function(b){b=b.split("-");r(a,1*b[0],1*b[1]);});a.table().node();var c=a.table().node().cloneNode(!1),e=d(a.table().header().cloneNode(!1)).appendTo(c),f=d(a.table().body()).clone(!1,!1).empty().appendTo(c),g=a.columns().header().filter(function(b){return a.column(b).visible();}).to$().clone(!1).css("display","table-cell").css("min-width",0);d(f).append(d(a.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");if(f=a.table().footer()){var f=d(f.cloneNode(!1)).appendTo(c),h=a.columns().footer().filter(function(b){return a.column(b).visible();}).to$().clone(!1).css("display","table-cell");d("<tr/>").append(h).appendTo(f);}d("<tr/>").append(g).appendTo(e);"inline"===this.c.details.type&&d(c).addClass("dtr-inline collapsed");d(c).find("[name]").removeAttr("name");d(c).css("position","relative");c=d("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(c);c.insertBefore(a.table().node());g.each(function(c){c=a.column.index("fromVisible",c);b[c].minWidth=this.offsetWidth||0;});c.remove();}},_setColumnVis:function _setColumnVis(a,b){var c=this.s.dt,e=b?"":"none";d(c.column(a).header()).css("display",e);d(c.column(a).footer()).css("display",e);c.column(a).nodes().to$().css("display",e);d.isEmptyObject(n)||c.cells(null,a).indexes().each(function(a){r(c,a.row,a.column);});},_tabIndexes:function _tabIndexes(){var a=this.s.dt,b=a.cells({page:"current"}).nodes().to$(),c=a.settings()[0],e=this.c.details.target;b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");"number"===typeof e?a.cells(null,e,{page:"current"}).nodes().to$().attr("tabIndex",c.iTabIndex).data("dtr-keyboard",1):("td:first-child, th:first-child"===e&&(e=">td:first-child, >th:first-child"),d(e,a.rows({page:"current"}).nodes()).attr("tabIndex",c.iTabIndex).data("dtr-keyboard",1));}});i.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];i.display={childRow:function childRow(a,b,c){if(b){if(d(a.node()).hasClass("parent"))return a.child(c(),"child").show(),!0;}else{if(a.child.isShown())return a.child(!1),d(a.node()).removeClass("parent"),!1;a.child(c(),"child").show();d(a.node()).addClass("parent");return!0;}},childRowImmediate:function childRowImmediate(a,b,c){if(!b&&a.child.isShown()||!a.responsive.hasHidden())return a.child(!1),d(a.node()).removeClass("parent"),!1;a.child(c(),"child").show();d(a.node()).addClass("parent");return!0;},modal:function modal(a){return function(b,c,e){if(c)d("div.dtr-modal-content").empty().append(e());else{var f=function f(){g.remove();d(j).off("keypress.dtr");},g=d('<div class="dtr-modal"/>').append(d('<div class="dtr-modal-display"/>').append(d('<div class="dtr-modal-content"/>').append(e())).append(d('<div class="dtr-modal-close">&times;</div>').click(function(){f();}))).append(d('<div class="dtr-modal-background"/>').click(function(){f();})).appendTo("body");d(j).on("keyup.dtr",function(a){27===a.keyCode&&(a.stopPropagation(),f());});}a&&a.header&&d("div.dtr-modal-content").prepend("<h2>"+a.header(b)+"</h2>");};}};var n={};i.renderer={listHiddenNodes:function listHiddenNodes(){return function(a,b,c){var e=d('<ul data-dtr-index="'+b+'" class="dtr-details"/>'),f=!1;d.each(c,function(b,c){c.hidden&&(d('<li data-dtr-index="'+c.columnIndex+'" data-dt-row="'+c.rowIndex+'" data-dt-column="'+c.columnIndex+'"><span class="dtr-title">'+c.title+"</span> </li>").append(d('<span class="dtr-data"/>').append(t(a,c.rowIndex,c.columnIndex))).appendTo(e),f=!0);});return f?e:!1;};},listHidden:function listHidden(){return function(a,b,c){return(a=d.map(c,function(a){return a.hidden?'<li data-dtr-index="'+a.columnIndex+'" data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><span class="dtr-title">'+a.title+'</span> <span class="dtr-data">'+a.data+"</span></li>":"";}).join(""))?d('<ul data-dtr-index="'+b+'" class="dtr-details"/>').append(a):!1;};},tableAll:function tableAll(a){a=d.extend({tableClass:""},a);return function(b,c,e){b=d.map(e,function(a){return'<tr data-dt-row="'+a.rowIndex+'" data-dt-column="'+a.columnIndex+'"><td>'+a.title+":</td> <td>"+a.data+"</td></tr>";}).join("");return d('<table class="'+a.tableClass+' dtr-details" width="100%"/>').append(b);};}};i.defaults={breakpoints:i.breakpoints,auto:!0,details:{display:i.display.childRow,renderer:i.renderer.listHidden(),target:0,type:"inline"},orthogonal:"display"};var p=d.fn.dataTable.Api;p.register("responsive()",function(){return this;});p.register("responsive.index()",function(a){a=d(a);return{column:a.data("dtr-index"),row:a.parent().data("dtr-index")};});p.register("responsive.rebuild()",function(){return this.iterator("table",function(a){a._responsive&&a._responsive._classLogic();});});p.register("responsive.recalc()",function(){return this.iterator("table",function(a){a._responsive&&(a._responsive._resizeAuto(),a._responsive._resize());});});p.register("responsive.hasHidden()",function(){var a=this.context[0];return a._responsive?-1!==d.inArray(!1,a._responsive.s.current):!1;});p.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(a,b){return a._responsive?a._responsive.s.current[b]:!1;},1);});i.version="2.2.3";d.fn.dataTable.Responsive=i;d.fn.DataTable.Responsive=i;d(j).on("preInit.dt.dtr",function(a,b){if("dt"===a.namespace&&(d(b.nTable).hasClass("responsive")||d(b.nTable).hasClass("dt-responsive")||b.oInit.responsive||o.defaults.responsive)){var c=b.oInit.responsive;!1!==c&&new i(b,d.isPlainObject(c)?c:{});}});return i;});/*!
 Bootstrap integration for DataTables' Responsive
 ©2015-2016 SpryMedia Ltd - datatables.net/license
*/(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-responsive"],function(a){return c(a,window,document);}):"object"===(typeof exports==="undefined"?"undefined":_typeof(exports))?module.exports=function(a,b){a||(a=window);if(!b||!b.fn.dataTable)b=require("datatables.net-bs")(a,b).$;b.fn.dataTable.Responsive||require("datatables.net-responsive")(a,b);return c(b,a,a.document);}:c(jQuery,window,document);})(function(c){var a=c.fn.dataTable,b=a.Responsive.display,g=b.modal,e=c('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');b.modal=function(a){return function(b,d,f){if(c.fn.modal){if(!d){if(a&&a.header){var d=e.find("div.modal-header"),h=d.find("button").detach();d.empty().append('<h4 class="modal-title">'+a.header(b)+"</h4>").prepend(h);}e.find("div.modal-body").empty().append(f());e.appendTo("body").modal();}}else g(b,d,f);};};return a.Responsive;});/*--------------  coin_sales1 start ------------*/if($('#coin_sales1').length){var ctx=document.getElementById("coin_sales1").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"rgba(117, 19, 246, 0.1)",borderColor:'#0b76b6',data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]}}});}/*--------------  coin_sales1 End ------------*/ /*--------------  coin_sales2 start ------------*/if($('#coin_sales2').length){var ctx=document.getElementById("coin_sales2").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"rgba(240, 180, 26, 0.1)",borderColor:'#F0B41A',data:[18,41,86,49,20,65,64,50,49,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]}}});}/*--------------  coin_sales2 End ------------*/ /*--------------  coin_sales3 start ------------*/if($('#coin_sales3').length){var ctx=document.getElementById("coin_sales3").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Sales",backgroundColor:"rgba(247, 163, 58, 0.1)",borderColor:'#fd9d24',fill:true,data:[18,41,50,49,20,65,50,86,20,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]}}});}/*--------------  coin_sales3 End ------------*/ /*--------------  overview-chart start ------------*/if($('#verview-shart').length){var myConfig={"type":"line","scale-x":{//X-Axis
"labels":["0","10","20","30","40","50","60","70","80","90","100"],"label":{"font-size":14,"offset-x":0},"item":{//Scale Items (scale values or labels)
"font-size":10},"guide":{//Guides
"visible":false,"line-style":"solid",//"solid", "dotted", "dashed", "dashdot"
"alpha":1}},"plot":{"aspect":"spline"},"series":[{"values":[20,25,30,35,45,40,40,35,25,17,40,50],"line-color":"#F0B41A",/* "dotted" | "dashed" */"line-width":5/* in pixels */,"marker":{/* Marker object */"background-color":"#D79D3B",/* hexadecimal or RGB value */"size":5,/* in pixels */"border-color":"#D79D3B"/* hexadecimal or RBG value */}},{"values":[40,45,30,20,30,35,45,55,40,30,55,30],"line-color":"#0884D9",/* "dotted" | "dashed" */"line-width":5/* in pixels */,"marker":{/* Marker object */"background-color":"#067dce",/* hexadecimal or RGB value */"size":5,/* in pixels */"border-color":"#067dce"/* hexadecimal or RBG value */}}]};zingchart.render({id:'verview-shart',data:myConfig,height:"100%",width:"100%"});}/*--------------  overview-chart END ------------*/ /*--------------  market status chart start ------------*/if($('#mvaluechart').length){var ctx=document.getElementById('mvaluechart').getContext('2d');var myLineChart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Market Value",backgroundColor:'transparent',borderColor:'#6e00ff',borderWidth:2,data:[0,15,30,10,25,0,30],pointBorderColor:"transparent",pointBorderWidth:10}]},// Configuration options go here
options:{legend:{display:false},tooltips:{callbacks:{label:function label(tooltipItem){return tooltipItem.yLabel;}}},elements:{line:{tension:0// disables bezier curves
}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});}if($('#mvaluechart2').length){var ctx=document.getElementById('mvaluechart2').getContext('2d');var myLineChart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Market Value",backgroundColor:'transparent',borderColor:'#6e00ff',borderWidth:2,data:[0,15,30,10,25,0,50],pointBorderColor:"transparent",pointBorderWidth:10}]},// Configuration options go here
options:{legend:{display:false},tooltips:{callbacks:{label:function label(tooltipItem){return tooltipItem.yLabel;}}},elements:{line:{tension:0// disables bezier curves
}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});}if($('#mvaluechart3').length){var ctx=document.getElementById('mvaluechart3').getContext('2d');var myLineChart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","Agut"],datasets:[{label:"Market Value",backgroundColor:'transparent',borderColor:'#6e00ff',borderWidth:2,data:[0,15,40,10,25,0,30,20],pointBorderColor:"transparent",pointBorderWidth:10}]},// Configuration options go here
options:{legend:{display:false},tooltips:{callbacks:{label:function label(tooltipItem){return tooltipItem.yLabel;}}},elements:{line:{tension:0// disables bezier curves
}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});}if($('#mvaluechart4').length){var ctx=document.getElementById('mvaluechart4').getContext('2d');var myLineChart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Market Value",backgroundColor:'transparent',borderColor:'#6e00ff',borderWidth:2,data:[0,30,30,10,25,0,30],pointBorderColor:"transparent",pointBorderWidth:10}]},// Configuration options go here
options:{legend:{display:false},tooltips:{callbacks:{label:function label(tooltipItem){return tooltipItem.yLabel;}}},elements:{line:{tension:0// disables bezier curves
}},scales:{yAxes:[{display:!1}],xAxes:[{display:!1}]}}});}/*--------------  market status chart END ------------*/ /*--------------  visitor graph line chart start ------------*/if($('#visitor_graph').length){Highcharts.chart('visitor_graph',{chart:{type:'areaspline'},title:false,yAxis:{title:false,gridLineColor:'#fbf7f7',gridLineWidth:1},xAxis:{gridLineColor:'#fbf7f7',gridLineWidth:1},series:[{name:'USD',data:[400,470,520,500,420,350,320,400,550,600,500,420,400],fillColor:'rgba(76, 57, 249, 0.5)',lineColor:'transparent'},{name:'BTC',data:[450,520,550,400,450,500,400,450,500,450,400,500,450],fillColor:'rgba(103, 13, 251, 0.5)',lineColor:'transparent'}]});}/*--------------  END visitor graph line chart start ------------*/ /*-------------- 1 line chart amchart start ------------*/if($('#amlinechart1').length){var zoomChart=function zoomChart(){chart.zoomToDates(new Date(2012,0,2),new Date(2012,0,13));};var chart=AmCharts.makeChart("amlinechart1",{"type":"serial","theme":"light","marginRight":20,"autoMarginOffset":20,"dataDateFormat":"YYYY-MM-DD HH:NN","dataProvider":[{"date":"2012-01-01","value":8},{"date":"2012-01-02","color":"#6e00ff","value":10},{"date":"2012-01-03","value":12},{"date":"2012-01-04","value":14},{"date":"2012-01-05","value":11},{"date":"2012-01-06","value":6},{"date":"2012-01-07","value":7},{"date":"2012-01-08","value":9},{"date":"2012-01-09","value":13},{"date":"2012-01-10","value":15},{"date":"2012-01-11","color":"#6e00ff","value":19},{"date":"2012-01-12","value":21},{"date":"2012-01-13","value":22},{"date":"2012-01-14","value":20},{"date":"2012-01-15","value":18},{"date":"2012-01-16","value":14},{"date":"2012-01-17","color":"#6e00ff","value":16},{"date":"2012-01-18","value":18},{"date":"2012-01-19","value":17},{"date":"2012-01-20","value":15},{"date":"2012-01-21","value":12},{"date":"2012-01-22","color":"#6e00ff","value":10},{"date":"2012-01-23","value":8}],"valueAxes":[{"axisAlpha":0,"guides":[{"fillAlpha":0.1,"fillColor":"#6e00ff","lineAlpha":0,"toValue":16,"value":10}],"position":"left","tickLength":0}],"graphs":[{"balloonText":"[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>","bullet":"round","dashLength":3,"colorField":"color","valueField":"value"}],"trendLines":[{"finalDate":"2012-01-11 12","finalValue":19,"initialDate":"2012-01-02 12","initialValue":10,"lineColor":"#6e00ff"},{"finalDate":"2012-01-22 12","finalValue":10,"initialDate":"2012-01-17 12","initialValue":16,"lineColor":"#6e00ff"}],"chartScrollbar":{"scrollbarHeight":2,"offset":-1,"backgroundAlpha":0.2,"backgroundColor":"#8816FD","selectedBackgroundColor":"#815FF5","selectedBackgroundAlpha":1},"chartCursor":{"fullWidth":true,"valueLineEabled":true,"valueLineBalloonEnabled":true,"valueLineAlpha":0.5,"cursorAlpha":0},"categoryField":"date","categoryAxis":{"parseDates":true,"axisAlpha":0,"gridAlpha":0.1,"minorGridAlpha":0.1,"minorGridEnabled":true},"export":{"enabled":false}});chart.addListener("dataUpdated",zoomChart);}/*-------------- 1 line chart amchart end ------------*/ /*-------------- 2 line chart amchart start ------------*/if($('#amlinechart2').length){var _zoomChart=function _zoomChart(){chart.zoomToIndexes(Math.round(chart.dataProvider.length*0.4),Math.round(chart.dataProvider.length*0.55));};var chart=AmCharts.makeChart("amlinechart2",{"type":"serial","theme":"light","marginTop":0,"marginRight":20,"dataProvider":[{"year":"1950","value":-0.307},{"year":"1951","value":-0.168},{"year":"1952","value":-0.073},{"year":"1953","value":-0.027},{"year":"1954","value":-0.251},{"year":"1955","value":-0.281},{"year":"1956","value":-0.348},{"year":"1957","value":-0.074},{"year":"1958","value":-0.011},{"year":"1959","value":-0.074},{"year":"1960","value":-0.124},{"year":"1961","value":-0.024},{"year":"1962","value":-0.022},{"year":"1963","value":0},{"year":"1964","value":-0.296},{"year":"1965","value":-0.217},{"year":"1966","value":-0.147},{"year":"1967","value":-0.15},{"year":"1968","value":-0.16},{"year":"1969","value":-0.011},{"year":"1970","value":-0.068},{"year":"1971","value":-0.19},{"year":"1972","value":-0.056},{"year":"1973","value":0.077},{"year":"1974","value":-0.213},{"year":"1975","value":-0.17},{"year":"1976","value":-0.254},{"year":"1977","value":0.019},{"year":"1978","value":-0.063},{"year":"1979","value":0.05},{"year":"1980","value":0.077},{"year":"1981","value":0.12},{"year":"1982","value":0.011},{"year":"1983","value":0.177},{"year":"1984","value":-0.021},{"year":"1985","value":-0.037},{"year":"1986","value":0.03},{"year":"1987","value":0.179},{"year":"1988","value":0.18},{"year":"1989","value":0.104},{"year":"1990","value":0.255},{"year":"1991","value":0.21},{"year":"1992","value":0.065},{"year":"1993","value":0.11},{"year":"1994","value":0.172},{"year":"1995","value":0.269},{"year":"1996","value":0.141},{"year":"1997","value":0.353},{"year":"1998","value":0.548},{"year":"1999","value":0.298},{"year":"2000","value":0.267},{"year":"2001","value":0.411},{"year":"2002","value":0.462},{"year":"2003","value":0.47},{"year":"2004","value":0.445},{"year":"2005","value":0.47}],"valueAxes":[{"axisAlpha":0,"position":"left"}],"graphs":[{"id":"g1","balloonText":"[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>","bullet":"round","bulletSize":8,"lineColor":"#9656e7","lineThickness":2,"negativeLineColor":"#c69cfd","type":"smoothedLine","valueField":"value"}],"chartScrollbar":{"graph":"g1","gridAlpha":0,"color":"#8816FD","scrollbarHeight":55,"backgroundAlpha":0,"selectedBackgroundAlpha":0.1,"selectedBackgroundColor":"#8816FD","graphFillAlpha":0,"autoGridCount":true,"selectedGraphFillAlpha":0,"graphLineAlpha":0.2,"graphLineColor":"#c2c2c2","selectedGraphLineColor":"#9f46fc","selectedGraphLineAlpha":1},"chartCursor":{"categoryBalloonDateFormat":"YYYY","cursorAlpha":0,"valueLineEnabled":true,"valueLineBalloonEnabled":true,"valueLineAlpha":0.5,"fullWidth":true},"dataDateFormat":"YYYY","categoryField":"year","categoryAxis":{"minPeriod":"YYYY","parseDates":true,"minorGridAlpha":0.1,"minorGridEnabled":true},"export":{"enabled":false}});chart.addListener("rendered",_zoomChart);if(chart.zoomChart){chart.zoomChart();}}/*-------------- 2 line chart amchart end ------------*/ /*-------------- 3 line chart amchart start ------------*/if($('#amlinechart3').length){// this method is called when chart is first inited as we listen for "rendered" event
var _zoomChart2=function _zoomChart2(){// different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
chart.zoomToIndexes(chartData.length-40,chartData.length-1);};// generate some random data, quite different range
// generate some random data, quite different range
var _generateChartData=function _generateChartData(){var chartData=[];var firstDate=new Date();firstDate.setDate(firstDate.getDate()-5);var visits=1200;for(var i=0;i<1000;i++){// we create date objects here. In your data, you can have date strings
// and then set format of your dates using chart.dataDateFormat property,
// however when possible, use date objects, as this will speed up chart rendering.
var newDate=new Date(firstDate);newDate.setDate(newDate.getDate()+i);visits+=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);chartData.push({date:newDate,visits:visits});}return chartData;};var chartData=_generateChartData();var chart=AmCharts.makeChart("amlinechart3",{"type":"serial","theme":"light","marginRight":20,"autoMarginOffset":20,"marginTop":7,"dataProvider":chartData,"valueAxes":[{"axisAlpha":0.2,"dashLength":1,"position":"left"}],"mouseWheelZoomEnabled":true,"graphs":[{"id":"g1","balloonText":"[[value]]","bullet":"round","bulletBorderAlpha":1,"bulletColor":"#FFFFFF","hideBulletsCount":50,"title":"red line","valueField":"visits","useLineColorForBulletBorder":true,"balloon":{"drop":true}}],"chartScrollbar":{"autoGridCount":true,"graph":"g1","scrollbarHeight":40,"color":"#fff","selectedBackgroundAlpha":1,"selectedBackgroundColor":"#815BF6","selectedGraphFillAlpha":0,"selectedGraphFillColor":"#8918FE","graphLineAlpha":0.2,"graphLineColor":"#c2c2c2","selectedGraphLineColor":"#fff","selectedGraphLineAlpha":1},"chartCursor":{"limitToGraph":"g1"},"categoryField":"date","categoryAxis":{"parseDates":true,"axisColor":"#DADADA","dashLength":1,"minorGridEnabled":true},"export":{"enabled":false}});chart.addListener("rendered",_zoomChart2);_zoomChart2();}/*-------------- 3 line chart amchart end ------------*/ /*-------------- 4 line chart amchart start ------------*/if($('#amlinechart4').length){var chart=AmCharts.makeChart("amlinechart4",{"type":"serial","theme":"light","legend":{"useGraphSettings":true},"dataProvider":[{"year":1930,"italy":1,"germany":5,"uk":3},{"year":1934,"italy":1,"germany":2,"uk":6},{"year":1938,"italy":2,"germany":3,"uk":1},{"year":1950,"italy":3,"germany":4,"uk":1},{"year":1954,"italy":5,"germany":1,"uk":2},{"year":1958,"italy":3,"germany":2,"uk":1},{"year":1962,"italy":1,"germany":2,"uk":3},{"year":1966,"italy":2,"germany":1,"uk":5},{"year":1970,"italy":3,"germany":5,"uk":2},{"year":1974,"italy":4,"germany":3,"uk":6},{"year":1978,"italy":1,"germany":2,"uk":4}],"startDuration":0.5,"graphs":[{"balloonText":"place taken by Italy in [[category]]: [[value]]","bullet":"round","hidden":true,"title":"Italy","valueField":"italy","fillAlphas":0,"lineColor":"#31ef98","lineThickness":2,"negativeLineColor":"#17e285"},{"balloonText":"place taken by Germany in [[category]]: [[value]]","bullet":"round","title":"Germany","valueField":"germany","fillAlphas":0,"lineColor":"#9656e7","lineThickness":2,"negativeLineColor":"#c69cfd"},{"balloonText":"place taken by UK in [[category]]: [[value]]","bullet":"round","title":"United Kingdom","valueField":"uk","fillAlphas":0,"lineColor":"#31aeef","lineThickness":2,"negativeLineColor":"#31aeef"}],"chartCursor":{"cursorAlpha":0,"zoomable":false},"categoryField":"year","categoryAxis":{"gridPosition":"start","axisAlpha":0,"fillAlpha":0.05,"fillColor":"#000000","gridAlpha":0,"position":"top"},"export":{"enabled":false}});}/*-------------- 4 line chart amchart end ------------*/ /*-------------- 5 line chart amchart start ------------*/if($('#amlinechart5').length){var _zoomChart3=function _zoomChart3(){chart.zoomToDates(new Date(2012,2,2),new Date(2012,2,10));};var chart=AmCharts.makeChart("amlinechart5",{"type":"serial","theme":"light","marginRight":20,"marginTop":17,"autoMarginOffset":20,"dataProvider":[{"date":"2012-03-01","price":20},{"date":"2012-03-02","price":75},{"date":"2012-03-03","price":15},{"date":"2012-03-04","price":75},{"date":"2012-03-05","price":158},{"date":"2012-03-06","price":57},{"date":"2012-03-07","price":107},{"date":"2012-03-08","price":89},{"date":"2012-03-09","price":75},{"date":"2012-03-10","price":132},{"date":"2012-03-11","price":158},{"date":"2012-03-12","price":56},{"date":"2012-03-13","price":169},{"date":"2012-03-14","price":24},{"date":"2012-03-15","price":147}],"valueAxes":[{"logarithmic":true,"dashLength":1,"guides":[{"dashLength":6,"inside":true,"label":"average","lineAlpha":1,"value":90.4}],"position":"left"}],"graphs":[{"bullet":"round","id":"g1","bulletBorderAlpha":1,"bulletColor":"#FFFFFF","bulletSize":7,"lineThickness":2,"title":"Price","type":"smoothedLine","useLineColorForBulletBorder":true,"valueField":"price"}],"chartScrollbar":{},"chartCursor":{"valueLineEnabled":true,"valueLineBalloonEnabled":true,"valueLineAlpha":0.5,"fullWidth":true,"cursorAlpha":0.05},"dataDateFormat":"YYYY-MM-DD","categoryField":"date","categoryAxis":{"parseDates":true},"export":{"enabled":false}});chart.addListener("dataUpdated",_zoomChart3);}/*-------------- 5 line chart amchart end ------------*/ /*-------------- 6 line chart chartjs start ------------*/if($('#seolinechart1').length){var ctx=document.getElementById("seolinechart1").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Likes",backgroundColor:"rgba(104, 124, 247, 0.6)",borderColor:'#8596fe',data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0// disables bezier curves
}}}});}/*-------------- 6 line chart chartjs end ------------*/ /*-------------- 7 line chart chartjs start ------------*/if($('#seolinechart2').length){var ctx=document.getElementById("seolinechart2").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Share",backgroundColor:"rgba(96, 241, 205, 0.2)",borderColor:'#3de5bb',data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0// disables bezier curves
}}}});}/*-------------- 7 line chart chartjs end ------------*/ /*-------------- 8 line chart chartjs start ------------*/if($('#seolinechart3').length){var ctx=document.getElementById("seolinechart3").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"Share",backgroundColor:"rgba(96, 241, 205, 0)",borderColor:'#fff',data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0// disables bezier curves
}}}});}/*-------------- 8 line chart chartjs end ------------*/ /*-------------- 9 line chart chartjs start ------------*/if($('#seolinechart4').length){var ctx=document.getElementById("seolinechart4").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'line',// The data for our dataset
data:{labels:["January","February","March","April","May","June","July","January","February","March","April","May"],datasets:[{label:"New user",backgroundColor:"rgba(96, 241, 205, 0)",borderColor:'#fff',data:[18,41,86,49,20,35,20,50,49,30,45,25]}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold",beginAtZero:!0,maxTicksLimit:5,padding:0},gridLines:{drawTicks:!1,display:!1}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent"},ticks:{padding:0,fontColor:"rgba(0,0,0,0.5)",fontStyle:"bold"}}]},elements:{line:{tension:0// disables bezier curves
}}}});}/*-------------- 9 line chart chartjs end ------------*/ /*-------------- 10 line chart amchart start ------------*/if($('#user-statistics').length){var chart=AmCharts.makeChart("user-statistics",{"type":"serial","theme":"light","marginRight":0,"marginLeft":40,"autoMarginOffset":20,"dataDateFormat":"YYYY-MM-DD","valueAxes":[{"id":"v1","axisAlpha":0,"position":"left","ignoreAxisWidth":true}],"balloon":{"borderThickness":1,"shadowAlpha":0},"graphs":[{"id":"g1","balloon":{"drop":true,"adjustBorderColor":false,"color":"#ffffff","type":"smoothedLine"},"fillAlphas":0.2,"bullet":"round","bulletBorderAlpha":1,"bulletColor":"#FFFFFF","bulletSize":5,"hideBulletsCount":50,"lineThickness":2,"title":"red line","useLineColorForBulletBorder":true,"valueField":"value","balloonText":"<span style='font-size:18px;'>[[value]]</span>"}],"chartCursor":{"valueLineEnabled":true,"valueLineBalloonEnabled":true,"cursorAlpha":0,"zoomable":false,"valueZoomable":true,"valueLineAlpha":0.5},"valueScrollbar":{"autoGridCount":true,"color":"#5E72F3","scrollbarHeight":30},"categoryField":"date","categoryAxis":{"parseDates":true,"dashLength":1,"minorGridEnabled":true},"export":{"enabled":false},"dataProvider":[{"date":"2012-07-27","value":13},{"date":"2012-07-28","value":11},{"date":"2012-07-29","value":15},{"date":"2012-07-30","value":16},{"date":"2012-07-31","value":18},{"date":"2012-08-01","value":13},{"date":"2012-08-02","value":22},{"date":"2012-08-03","value":23},{"date":"2012-08-04","value":20},{"date":"2012-08-05","value":17},{"date":"2012-08-06","value":16},{"date":"2012-08-07","value":18},{"date":"2012-08-08","value":21},{"date":"2012-08-09","value":26},{"date":"2012-08-10","value":24},{"date":"2012-08-11","value":29},{"date":"2012-08-12","value":32},{"date":"2012-08-13","value":18},{"date":"2012-08-14","value":24},{"date":"2012-08-15","value":22},{"date":"2012-08-16","value":18},{"date":"2012-08-17","value":19},{"date":"2012-08-18","value":14},{"date":"2012-08-19","value":15},{"date":"2012-08-20","value":12},{"date":"2012-08-21","value":8},{"date":"2012-08-22","value":9},{"date":"2012-08-23","value":8},{"date":"2012-08-24","value":7},{"date":"2012-08-25","value":5},{"date":"2012-08-26","value":11},{"date":"2012-08-27","value":13},{"date":"2012-08-28","value":18},{"date":"2012-08-29","value":20},{"date":"2012-08-30","value":29},{"date":"2012-08-31","value":33},{"date":"2012-09-01","value":42},{"date":"2012-09-02","value":35},{"date":"2012-09-03","value":31},{"date":"2012-09-04","value":47},{"date":"2012-09-05","value":52},{"date":"2012-09-06","value":46},{"date":"2012-09-07","value":41},{"date":"2012-09-08","value":43},{"date":"2012-09-09","value":40},{"date":"2012-09-10","value":39},{"date":"2012-09-11","value":34},{"date":"2012-09-12","value":29},{"date":"2012-09-13","value":34},{"date":"2012-09-14","value":37},{"date":"2012-09-15","value":42},{"date":"2012-09-16","value":49},{"date":"2012-09-17","value":46},{"date":"2012-09-18","value":47},{"date":"2012-09-19","value":55},{"date":"2012-09-20","value":59},{"date":"2012-09-21","value":58},{"date":"2012-09-22","value":57},{"date":"2012-09-23","value":61},{"date":"2012-09-24","value":59},{"date":"2012-09-25","value":67},{"date":"2012-09-26","value":65},{"date":"2012-09-27","value":61},{"date":"2012-09-28","value":66},{"date":"2012-09-29","value":69},{"date":"2012-09-30","value":71},{"date":"2012-10-01","value":67},{"date":"2012-10-02","value":63},{"date":"2012-10-03","value":46},{"date":"2012-10-04","value":32},{"date":"2012-10-05","value":21},{"date":"2012-10-06","value":18},{"date":"2012-10-07","value":21},{"date":"2012-10-08","value":28},{"date":"2012-10-09","value":27},{"date":"2012-10-10","value":36},{"date":"2012-10-11","value":33},{"date":"2012-10-12","value":31},{"date":"2012-10-13","value":30},{"date":"2012-10-14","value":34},{"date":"2012-10-15","value":38},{"date":"2012-10-16","value":37},{"date":"2012-10-17","value":44},{"date":"2012-10-18","value":49},{"date":"2012-10-19","value":53},{"date":"2012-10-20","value":57},{"date":"2012-10-21","value":60},{"date":"2012-10-22","value":61},{"date":"2012-10-23","value":69},{"date":"2012-10-24","value":67},{"date":"2012-10-25","value":72},{"date":"2012-10-26","value":77},{"date":"2012-10-27","value":75},{"date":"2012-10-28","value":70},{"date":"2012-10-29","value":72},{"date":"2012-10-30","value":70},{"date":"2012-10-31","value":72},{"date":"2012-11-01","value":73},{"date":"2012-11-02","value":67},{"date":"2012-11-03","value":68},{"date":"2012-11-04","value":65},{"date":"2012-11-05","value":71},{"date":"2012-11-06","value":75},{"date":"2012-11-07","value":74},{"date":"2012-11-08","value":71},{"date":"2012-11-09","value":76},{"date":"2012-11-10","value":77},{"date":"2012-11-11","value":81},{"date":"2012-11-12","value":83},{"date":"2012-11-13","value":80},{"date":"2012-11-14","value":81},{"date":"2012-11-15","value":87},{"date":"2012-11-16","value":82},{"date":"2012-11-17","value":86},{"date":"2012-11-18","value":80},{"date":"2012-11-19","value":87},{"date":"2012-11-20","value":83},{"date":"2012-11-21","value":85},{"date":"2012-11-22","value":84},{"date":"2012-11-23","value":82},{"date":"2012-11-24","value":73},{"date":"2012-11-25","value":71},{"date":"2012-11-26","value":75},{"date":"2012-11-27","value":79},{"date":"2012-11-28","value":70},{"date":"2012-11-29","value":73},{"date":"2012-11-30","value":61},{"date":"2012-12-01","value":62},{"date":"2012-12-02","value":66},{"date":"2012-12-03","value":65},{"date":"2012-12-04","value":73},{"date":"2012-12-05","value":79},{"date":"2012-12-06","value":78},{"date":"2012-12-07","value":78},{"date":"2012-12-08","value":78},{"date":"2012-12-09","value":74},{"date":"2012-12-10","value":73},{"date":"2012-12-11","value":75},{"date":"2012-12-12","value":70},{"date":"2012-12-13","value":77},{"date":"2012-12-14","value":67},{"date":"2012-12-15","value":62},{"date":"2012-12-16","value":64},{"date":"2012-12-17","value":61},{"date":"2012-12-18","value":59},{"date":"2012-12-19","value":53},{"date":"2012-12-20","value":54},{"date":"2012-12-21","value":56},{"date":"2012-12-22","value":59},{"date":"2012-12-23","value":58},{"date":"2012-12-24","value":55},{"date":"2012-12-25","value":52},{"date":"2012-12-26","value":54},{"date":"2012-12-27","value":50},{"date":"2012-12-28","value":50},{"date":"2012-12-29","value":51},{"date":"2012-12-30","value":52},{"date":"2012-12-31","value":58},{"date":"2013-01-01","value":60},{"date":"2013-01-02","value":67},{"date":"2013-01-03","value":64},{"date":"2013-01-04","value":66},{"date":"2013-01-05","value":60},{"date":"2013-01-06","value":63},{"date":"2013-01-07","value":61},{"date":"2013-01-08","value":60},{"date":"2013-01-09","value":65},{"date":"2013-01-10","value":75},{"date":"2013-01-11","value":77},{"date":"2013-01-12","value":78},{"date":"2013-01-13","value":70},{"date":"2013-01-14","value":70},{"date":"2013-01-15","value":73},{"date":"2013-01-16","value":71},{"date":"2013-01-17","value":74},{"date":"2013-01-18","value":78},{"date":"2013-01-19","value":85},{"date":"2013-01-20","value":82},{"date":"2013-01-21","value":83},{"date":"2013-01-22","value":88},{"date":"2013-01-23","value":85},{"date":"2013-01-24","value":85},{"date":"2013-01-25","value":80},{"date":"2013-01-26","value":87},{"date":"2013-01-27","value":84},{"date":"2013-01-28","value":83},{"date":"2013-01-29","value":84},{"date":"2013-01-30","value":81}]});}/*-------------- 10 line chart amchart end ------------*/ /*-------------- 11 line chart amchart start ------------*/if($('#salesanalytic').length){var chart=AmCharts.makeChart("salesanalytic",{"type":"serial","theme":"light","dataDateFormat":"YYYY-MM-DD","precision":2,"valueAxes":[{"id":"v1","title":"Sales","position":"left","autoGridCount":false,"labelFunction":function labelFunction(value){return"$"+Math.round(value)+"M";}},{"id":"v2","title":"Duration","gridAlpha":0,"position":"right","autoGridCount":false}],"graphs":[{"id":"g3","valueAxis":"v1","lineColor":"#F3F8FB","fillColors":"#F3F8FB","fillAlphas":1,"type":"column","title":"Actual Sales","valueField":"sales2","clustered":false,"columnWidth":0.5,"legendValueText":"$[[value]]M","balloonText":"[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"},{"id":"g4","valueAxis":"v1","lineColor":"#5C6DF4","fillColors":"#5C6DF4","fillAlphas":1,"type":"column","title":"Target Sales","valueField":"sales1","clustered":false,"columnWidth":0.3,"legendValueText":"$[[value]]M","balloonText":"[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"},{"id":"g1","valueAxis":"v2","bullet":"round","bulletBorderAlpha":1,"bulletColor":"#FFFFFF","bulletSize":5,"hideBulletsCount":50,"lineThickness":2,"lineColor":"#815FF6","type":"smoothedLine","title":"Duration","useLineColorForBulletBorder":true,"valueField":"market1","balloonText":"[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"},{"id":"g2","valueAxis":"v2","bullet":"round","bulletBorderAlpha":1,"bulletColor":"#FFFFFF","bulletSize":5,"hideBulletsCount":50,"lineThickness":2,"lineColor":"#ffe598","type":"smoothedLine","dashLength":5,"title":"Market Days ALL","useLineColorForBulletBorder":true,"valueField":"market2","balloonText":"[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"}],"chartScrollbar":{"graph":"g1","oppositeAxis":false,"offset":50,"scrollbarHeight":45,"backgroundAlpha":0,"selectedBackgroundAlpha":0.5,"selectedBackgroundColor":"#f9f9f9","graphFillAlpha":0.1,"graphLineAlpha":0.4,"selectedGraphFillAlpha":0,"selectedGraphLineAlpha":1,"autoGridCount":true,"color":"#95a1f9"},"chartCursor":{"pan":true,"valueLineEnabled":true,"valueLineBalloonEnabled":true,"cursorAlpha":0,"valueLineAlpha":0.2},"categoryField":"date","categoryAxis":{"parseDates":true,"dashLength":1,"minorGridEnabled":true,"color":"#5C6DF4"},"legend":{"useGraphSettings":true,"position":"top"},"balloon":{"borderThickness":1,"shadowAlpha":0},"export":{"enabled":false},"dataProvider":[{"date":"2013-01-16","market1":51,"market2":55,"sales1":5,"sales2":8},{"date":"2013-01-17","market1":64,"market2":70,"sales1":5,"sales2":6},{"date":"2013-01-18","market1":65,"market2":45,"sales1":8,"sales2":12},{"date":"2013-01-19","market1":73,"market2":75,"sales1":7,"sales2":8},{"date":"2013-01-20","market1":65,"market2":70,"sales1":7,"sales2":10},{"date":"2013-01-21","market1":65,"market2":55,"sales1":9,"sales2":12},{"date":"2013-01-22","market1":68,"market2":62,"sales1":5,"sales2":7},{"date":"2013-01-23","market1":75,"market2":80,"sales1":7,"sales2":10},{"date":"2013-01-24","market1":75,"market2":65,"sales1":7,"sales2":9},{"date":"2013-01-25","market1":75,"market2":69,"sales1":8,"sales2":10},{"date":"2013-01-26","market1":55,"market2":68,"sales1":6,"sales2":7},{"date":"2013-01-27","market1":67,"market2":70,"sales1":3,"sales2":4},{"date":"2013-01-28","market1":62,"market2":59,"sales1":5,"sales2":7},{"date":"2013-01-29","market1":62,"market2":56,"sales1":5,"sales2":8},{"date":"2013-01-30","market1":71,"market2":69,"sales1":4,"sales2":7}]});}//------------echarts2
/*-------------- 11 line chart amchart end ------------*/ /*--------------  coin_sales4 bar chart start ------------*/if($('#coin_sales4').length){var ctx=document.getElementById("coin_sales4").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'bar',// The data for our dataset
data:{labels:["01","02","03","04","05","06","07","08","09","10"],datasets:[{label:"Sales",data:[250,320,380,330,420,250,180,250,100,300],backgroundColor:['#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#3a3afb','#8416fe']}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"#cccccc",beginAtZero:!0,padding:0},gridLines:{zeroLineColor:"transparent"}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent",display:!1},ticks:{beginAtZero:!0,padding:0,fontColor:"#cccccc"}}]}}});}/*--------------  coin_sales4 bar chart End ------------*/ /*--------------  coin_sales5 bar chart start ------------*/if($('#coin_sales5').length){var ctx=document.getElementById("coin_sales5").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'bar',// The data for our dataset
data:{labels:["01","02","03","04","05","06","07","08","09","10"],datasets:[{label:"Sales",data:[250,220,380,130,420,230,180,220,150,300],backgroundColor:['#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#3a3afb','#8416fe']}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"#cccccc",beginAtZero:!0,padding:0},gridLines:{zeroLineColor:"transparent"}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent",display:!1},ticks:{beginAtZero:!0,padding:0,fontColor:"#cccccc"}}]}}});}/*--------------  coin_sales5 bar chart End ------------*/ /*--------------  coin_sales6 bar chart start ------------*/if($('#coin_sales6').length){var ctx=document.getElementById("coin_sales6").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'bar',// The data for our dataset
data:{labels:["01","02","03","04","05","06","07","08","09","10"],datasets:[{label:"Sales",data:[250,320,380,120,420,530,180,250,80,250],backgroundColor:['#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#3a3afb','#8416fe']}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"#cccccc",beginAtZero:!0,padding:0},gridLines:{zeroLineColor:"transparent"}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent",display:!1},ticks:{beginAtZero:!0,padding:0,fontColor:"#cccccc"}}]}}});}/*--------------  coin_sales6 bar chart End ------------*/ /*--------------  coin_sales7 bar chart start ------------*/if($('#coin_sales7').length){var ctx=document.getElementById("coin_sales7").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'bar',// The data for our dataset
data:{labels:["01","02","03","04","05","06","07","08","09","10"],datasets:[{label:"Sales",data:[100,300,350,350,420,150,300,250,250,300],backgroundColor:['#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#8416fe','#3a3afb','#3a3afb','#8416fe']}]},// Configuration options go here
options:{legend:{display:false},animation:{easing:"easeInOutBack"},scales:{yAxes:[{display:!1,ticks:{fontColor:"#cccccc",beginAtZero:!0,padding:0},gridLines:{zeroLineColor:"transparent"}}],xAxes:[{display:!1,gridLines:{zeroLineColor:"transparent",display:!1},ticks:{beginAtZero:!0,padding:0,fontColor:"#cccccc"}}]}}});}/*--------------  coin_sales7 bar chart End ------------*/ /*--------------  bar chart 08 amchart start ------------*/if($('#ambarchart1').length){var chart=AmCharts.makeChart("ambarchart1",{"theme":"light","type":"serial","balloon":{"adjustBorderColor":false,"horizontalPadding":10,"verticalPadding":4,"color":"#fff"},"dataProvider":[{"country":"USA","year2004":3.5,"year2005":4.2,"color":"#bfbffd","color2":"#7474F0"},{"country":"UK","year2004":1.7,"year2005":3.1,"color":"#bfbffd","color2":"#7474F0"},{"country":"Canada","year2004":2.8,"year2005":2.9,"color":"#bfbffd","color2":"#7474F0"},{"country":"Japan","year2004":2.6,"year2005":2.3,"color":"#bfbffd","color2":"#7474F0"},{"country":"France","year2004":1.4,"year2005":2.1,"color":"#bfbffd","color2":"#7474F0"},{"country":"Brazil","year2004":2.6,"year2005":4.9,"color":"#bfbffd","color2":"#7474F0"}],"valueAxes":[{"unit":"%","position":"left"}],"startDuration":1,"graphs":[{"balloonText":"GDP grow in [[category]] (2017): <b>[[value]]</b>","fillAlphas":0.9,"fillColorsField":"color","lineAlpha":0.2,"title":"2017","type":"column","valueField":"year2004"},{"balloonText":"GDP grow in [[category]] (2018): <b>[[value]]</b>","fillAlphas":0.9,"fillColorsField":"color2","lineAlpha":0.2,"title":"2018","type":"column","clustered":false,"columnWidth":0.5,"valueField":"year2005"}],"plotAreaFillAlphas":0.1,"categoryField":"country","categoryAxis":{"gridPosition":"start"},"export":{"enabled":false}});}/*--------------  bar chart 08 amchart END ------------*/ /*--------------  bar chart 09 amchart start ------------*/if($('#ambarchart2').length){var chart=AmCharts.makeChart("ambarchart2",{"type":"serial","addClassNames":true,"theme":"light","autoMargins":false,"marginLeft":30,"marginRight":8,"marginTop":10,"marginBottom":26,"balloon":{"adjustBorderColor":false,"horizontalPadding":10,"verticalPadding":8,"color":"#ffffff"},"dataProvider":[{"year":2013,"income":23.5,"expenses":21.1,"color":"#7474f0"},{"year":2014,"income":26.2,"expenses":30.5,"color":"#7474f0"},{"year":2015,"income":30.1,"expenses":34.9,"color":"#7474f0"},{"year":2016,"income":29.5,"expenses":31.1,"color":"#7474f0"},{"year":2017,"income":30.6,"expenses":28.2,"dashLengthLine":5,"color":"#7474f0"},{"year":2018,"income":34.1,"expenses":32.9,"dashLengthColumn":5,"alpha":0.2,"additional":"(projection)"}],"valueAxes":[{"axisAlpha":0,"position":"left"}],"startDuration":1,"graphs":[{"alphaField":"alpha","balloonText":"<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>","fillAlphas":1,"fillColorsField":"color","title":"Income","type":"column","valueField":"income","dashLengthField":"dashLengthColumn"},{"id":"graph2","balloonText":"<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>","bullet":"round","lineThickness":3,"bulletSize":7,"bulletBorderAlpha":1,"bulletColor":"#FFFFFF","lineColor":"#AA59FE","useLineColorForBulletBorder":true,"bulletBorderThickness":3,"fillAlphas":0,"lineAlpha":1,"title":"Expenses","valueField":"expenses","dashLengthField":"dashLengthLine"}],"categoryField":"year","categoryAxis":{"gridPosition":"start","axisAlpha":0,"tickLength":0},"export":{"enabled":false}});}/*--------------  bar chart 09 amchart END ------------*/ /*--------------  bar chart 10 amchart start ------------*/if($('#ambarchart3').length){var chart=AmCharts.makeChart("ambarchart3",{"type":"serial","theme":"light","categoryField":"year","rotate":true,"startDuration":1,"categoryAxis":{"gridPosition":"start","position":"left"},"trendLines":[],"graphs":[{"balloonText":"Income:[[value]]","fillAlphas":0.8,"id":"AmGraph-1","lineAlpha":0.2,"title":"Income","type":"column","valueField":"income","fillColorsField":"color"},{"balloonText":"Expenses:[[value]]","fillAlphas":0.8,"id":"AmGraph-2","lineAlpha":0.2,"title":"Expenses","type":"column","valueField":"expenses","fillColorsField":"color2"}],"guides":[],"valueAxes":[{"id":"ValueAxis-1","position":"top","axisAlpha":0}],"allLabels":[],"balloon":{},"titles":[],"dataProvider":[{"year":2014,"income":23.5,"expenses":18.1,"color":"#7474f0","color2":"#C5C5FD"},{"year":2015,"income":26.2,"expenses":22.8,"color":"#7474f0","color2":"#C5C5FD"},{"year":2016,"income":30.1,"expenses":23.9,"color":"#7474f0","color2":"#C5C5FD"},{"year":2017,"income":29.5,"expenses":25.1,"color":"#7474f0","color2":"#C5C5FD"},{"year":2018,"income":24.6,"expenses":25,"color":"#7474f0","color2":"#C5C5FD"}],"export":{"enabled":false}});}/*--------------  bar chart 10 amchart END ------------*/ /*--------------  bar chart 11 amchart start ------------*/if($('#ambarchart4').length){var chart=AmCharts.makeChart("ambarchart4",{"type":"serial","theme":"light","marginRight":70,"dataProvider":[{"country":"USA","visits":3025,"color":"#8918FE"},{"country":"China","visits":1882,"color":"#7474F0"},{"country":"Japan","visits":1809,"color":"#C5C5FD"},{"country":"Germany","visits":1322,"color":"#952FFE"},{"country":"UK","visits":1122,"color":"#7474F0"},{"country":"France","visits":1114,"color":"#CBCBFD"},{"country":"India","visits":984,"color":"#FD9C21"},{"country":"Spain","visits":711,"color":"#0D8ECF"},{"country":"Netherlands","visits":665,"color":"#0D52D1"},{"country":"Russia","visits":580,"color":"#2A0CD0"},{"country":"South Korea","visits":443,"color":"#8A0CCF"},{"country":"Canada","visits":441,"color":"#9F43FE"}],"valueAxes":[{"axisAlpha":0,"position":"left","title":false}],"startDuration":1,"graphs":[{"balloonText":"<b>[[category]]: [[value]]</b>","fillColorsField":"color","fillAlphas":0.9,"lineAlpha":0.2,"type":"column","valueField":"visits"}],"chartCursor":{"categoryBalloonEnabled":false,"cursorAlpha":0,"zoomable":false},"categoryField":"country","categoryAxis":{"gridPosition":"start","labelRotation":45},"export":{"enabled":false}});}/*--------------  bar chart 11 amchart END ------------*/ /*--------------  bar chart 12 amchart start ------------*/if($('#ambarchart5').length){var chart=AmCharts.makeChart("ambarchart5",{"type":"serial","theme":"light","dataProvider":[{"name":"John","points":35654,"color":"#7F8DA9"},{"name":"Damon","points":65456,"color":"#FEC514"},{"name":"Patrick","points":45724,"color":"#952FFE"},{"name":"Mark","points":23654,"color":"#8282F1"},{"name":"Natasha","points":35654,"color":"#2599D4"},{"name":"Adell","points":55456,"color":"#2563D6"},{"name":"Alessandro","points":13654,"color":"#9524D4"}],"valueAxes":[{"maximum":80000,"minimum":0,"axisAlpha":0,"dashLength":4,"position":"left"}],"startDuration":1,"graphs":[{"balloonText":"<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>","bulletOffset":10,"bulletSize":52,"colorField":"color","cornerRadiusTop":8,"customBulletField":"bullet","fillAlphas":0.8,"lineAlpha":0,"type":"column","valueField":"points"}],"marginTop":0,"marginRight":0,"marginLeft":0,"marginBottom":0,"autoMargins":false,"categoryField":"name","categoryAxis":{"axisAlpha":0,"gridAlpha":0,"inside":true,"tickLength":10,"color":"#fff"},"export":{"enabled":false}});}/*--------------  bar chart 12 amchart END ------------*/ /*--------------  bar chart 13 amchart start ------------*/if($('#ambarchart6').length){var chart=AmCharts.makeChart("ambarchart6",{"type":"serial","theme":"light","handDrawn":true,"handDrawScatter":3,"legend":{"useGraphSettings":true,"markerSize":12,"valueWidth":0,"verticalGap":0},"dataProvider":[{"year":2014,"income":23.5,"expenses":18.1,"color":"#952FFE"},{"year":2015,"income":26.2,"expenses":22.8,"color":"#5182DE"},{"year":2016,"income":30.1,"expenses":23.9,"color":"#8282F1"},{"year":2017,"income":29.5,"expenses":25.1,"color":"#B369FE"},{"year":2018,"income":24.6,"expenses":25,"color":"#51ADDD"}],"valueAxes":[{"minorGridAlpha":0.08,"minorGridEnabled":true,"position":"top","axisAlpha":0}],"startDuration":1,"graphs":[{"balloonText":"<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>","title":"Income","type":"column","fillAlphas":1,"fillColorsField":"color","valueField":"income"},{"balloonText":"<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>","bullet":"round","bulletBorderAlpha":1,"lineColor":"#AA59FE","bulletColor":"#FFFFFF","useLineColorForBulletBorder":true,"fillAlphas":0,"lineThickness":2,"lineAlpha":1,"bulletSize":7,"title":"Expenses","valueField":"expenses"}],"rotate":true,"categoryField":"year","categoryAxis":{"gridPosition":"start"},"export":{"enabled":false}});}/*--------------  bar chart 13 amchart END ------------*/ /*--------------  bar chart 14 highchart start ------------*/if($('#socialads').length){Highcharts.chart('socialads',{chart:{type:'column'},title:false,xAxis:{categories:['FB','TW','INS','G+','LINKD']},colors:['#F5CA3F','#E5726D','#12C599','#5F73F2'],yAxis:{min:0,title:false},tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',shared:true},plotOptions:{column:{stacking:'column'}},series:[{name:'Closed',data:[51,48,64,48,84]},{name:'Hold',data:[83,84,53,81,88]},{name:'Pending',data:[93,84,53,53,48]},{name:'Active',data:[430,312,348,254,258]}]});}/*--------------  bar chart 14 highchart END ------------*/ /*--------------  coin distrubution chart END ------------*/if($('#coin_distribution').length){zingchart.THEME="classic";var myConfig={"globals":{"font-family":"Roboto"},"graphset":[{"type":"pie","background-color":"#fff","legend":{"background-color":"none","border-width":0,"shadow":false,"layout":"float","margin":"auto auto 16% auto","marker":{"border-radius":3,"border-width":0},"item":{"color":"%backgroundcolor"}},"plotarea":{"background-color":"#FFFFFF","border-color":"#DFE1E3","margin":"25% 8%"},"labels":[{"x":"45%","y":"47%","width":"10%","text":"340 Coin","font-size":17,"font-weight":700}],"plot":{"size":70,"slice":90,"margin-right":0,"border-width":0,"shadow":0,"value-box":{"visible":true},"tooltip":{"text":"%v USD","shadow":false,"border-radius":2}},"series":[{"values":[1355460],"text":"Bitcoin","background-color":"#4cff63"},{"values":[1585218],"text":"LiteCoin","background-color":"#fd9c21"},{"values":[1064598],"text":"Euthorium","background-color":"#2c13f8"}]}]};zingchart.render({id:'coin_distribution',data:myConfig});}/*--------------  coin distrubution chart END ------------*/ /*-------------- 1 Pie chart amchart start ------------*/if($('#ampiechart1').length){var chart=AmCharts.makeChart("ampiechart1",{"type":"pie","labelRadius":-35,"labelText":"[[percents]]%","dataProvider":[{"country":"Lithuania","litres":501.9,"backgroundColor":"#815DF6"},{"country":"Czech Republic","litres":301.9,"backgroundColor":"#67B7DC"},{"country":"Ireland","litres":201.1,"backgroundColor":"#9c82f4"},{"country":"The Netherlands","litres":150,"backgroundColor":"#FDD400"}],"color":"#fff","colorField":"backgroundColor","valueField":"litres","titleField":"country"});}/*-------------- 1 Pie chart amchart end ------------*/ /*-------------- 2 Pie chart amchart start ------------*/if($('#ampiechart2').length){var chart=AmCharts.makeChart("ampiechart2",{"type":"pie","theme":"light","labelRadius":-65,"labelText":"[[title]]%","dataProvider":[{"title":"New","value":4852},{"title":"Returning","value":9899}],"titleField":"title","valueField":"value","export":{"enabled":false},"color":"#fff"});}/*-------------- 2 Pie chart amchart end ------------*/ /*-------------- 3 Pie chart amchart start ------------*/var chart;var legend;var selected;var types=[{type:"Fossil Energy",percent:70,color:"#ff9e01",subs:[{type:"Oil",percent:15},{type:"Coal",percent:35},{type:"Nuclear",percent:20}]},{type:"Green Energy",percent:30,color:"#6E4FD1",subs:[{type:"Hydro",percent:15},{type:"Wind",percent:10},{type:"Other",percent:5}]}];function generateChartData(){var chartData=[];for(var i=0;i<types.length;i++){if(i==selected){for(var x=0;x<types[i].subs.length;x++){chartData.push({type:types[i].subs[x].type,percent:types[i].subs[x].percent,color:types[i].color,pulled:true});}}else{chartData.push({type:types[i].type,percent:types[i].percent,color:types[i].color,id:i});}}return chartData;}if($('#ampiechart3').length){AmCharts.makeChart("ampiechart3",{"type":"pie","theme":"light","labelRadius":-35,"labelText":"[[percents]]%","dataProvider":generateChartData(),"balloonText":"[[title]]: [[value]]","titleField":"type","valueField":"percent","outlineColor":"#FFFFFF","outlineAlpha":0.8,"outlineThickness":2,"colorField":"color","color":"#fff","pulledField":"pulled","titles":[{"text":"Click a slice to see the details"}],"listeners":[{"event":"clickSlice","method":function method(event){var chart=event.chart;if(event.dataItem.dataContext.id!=undefined){selected=event.dataItem.dataContext.id;}else{selected=undefined;}chart.dataProvider=generateChartData();chart.validateData();}}],"export":{"enabled":false}});}/*-------------- 3 Pie chart amchart end ------------*/ /*-------------- 4 Pie chart highcharts start ------------*/if($('#highpiechart4').length){var pieColors=function(){var colors=[],base=Highcharts.getOptions().colors[0],i;for(i=0;i<10;i+=1){// Start out with a darkened base color (negative brighten), and end
// up with a much brighter color
colors.push(Highcharts.Color(base).brighten((i-3)/7).get());}return colors;}();// Build the chart
Highcharts.chart('highpiechart4',{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:false,type:'pie'},title:{text:'Dollar market Values, 2018'},tooltip:{pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',colors:pieColors,dataLabels:{style:{"color":"contrast","fontSize":"11px","fontWeight":"bold","textOutline":""},enabled:true,format:'<b>{point.name}</b><br>{point.percentage:.1f} %',distance:-50,filter:{property:'percentage',operator:'>',value:4}}}},series:[{name:'Share',data:[{name:'USD',y:61.41},{name:'BTC',y:11.84},{name:'TCN',y:10.85}]}]});}/*-------------- 4 Pie chart highcharts end ------------*/ /*-------------- 5 Pie chart highcharts start ------------*/if($('#highpiechart5').length){Highcharts.chart('highpiechart5',{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:false,type:'pie'},title:{text:'Dollar market Values, 2018'},tooltip:{pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'},plotOptions:{pie:{allowPointSelect:true,cursor:'pointer',dataLabels:{enabled:false,format:'<b>{point.name}</b>: {point.percentage:.1f} %',style:{color:Highcharts.theme&&Highcharts.theme.contrastTextColor||'#444',"textOutline":""}}}},series:[{name:'Brands',colorByPoint:true,data:[{name:'USB',y:61.41,sliced:true,selected:true},{name:'BTC',y:11.84},{name:'ETC',y:10.85}]}]});}/*-------------- 5 Pie chart highcharts end ------------*/ /*-------------- 6 Pie chart highcharts start ------------*/if($('#highpiechart6').length){Highcharts.chart('highpiechart6',{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:false},title:{text:'<br>Values<br>',align:'center',verticalAlign:'middle',y:40},tooltip:{pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'},plotOptions:{pie:{dataLabels:{enabled:true,distance:-30,style:{fontWeight:'bold',color:'white',textOutline:0}},startAngle:-90,endAngle:90,center:['50%','65%']}},series:[{type:'pie',name:'Browser share',innerSize:'55%',data:[['USD',58.9],['BTC',13.29],['TCN',13],{name:'Other',y:7.61,dataLabels:{enabled:false}}]}]});}/*-------------- 6 Pie chart highcharts end ------------*/ /*-------------- 7 Pie chart chartjs start ------------*/if($('#seolinechart8').length){var ctx=document.getElementById("seolinechart8").getContext('2d');var chart=new Chart(ctx,{// The type of chart we want to create
type:'doughnut',// The data for our dataset
data:{labels:["FB","TW","G+","INS"],datasets:[{backgroundColor:["#8919FE","#12C498","#F8CB3F","#E36D68"],borderColor:'#fff',data:[810,410,260,150]}]},// Configuration options go here
options:{legend:{display:true},animation:{easing:"easeInOutBack"}}});}/*-------------- 7 Pie chart chartjs end ------------*/(function($){"use strict";/*================================
    Preloader
    ==================================*/var preloader=$('#preloader');$(window).on('load',function(){setTimeout(function(){preloader.fadeOut('slow',function(){$(this).remove();});},300);});/*================================
    sidebar collapsing
    ==================================*/if(window.innerWidth<=1364){$('.page-container').addClass('sbar_collapsed');}$('.nav-btn').on('click',function(){$('.page-container').toggleClass('sbar_collapsed');});/*================================
    Start Footer resizer
    ==================================*/var e=function e(){var e=(window.innerHeight>0?window.innerHeight:this.screen.height)-5;(e-=67)<1&&(e=1),e>67&&$(".main-content").css("min-height",e+"px");};$(window).ready(e),$(window).on("resize",e);/*================================
    sidebar menu
    ==================================*/$("#menu").metisMenu();/*================================
    slimscroll activation
    ==================================*/$('.menu-inner').slimScroll({height:'auto'});$('.nofity-list').slimScroll({height:'435px'});$('.timeline-area').slimScroll({height:'500px'});$('.recent-activity').slimScroll({height:'calc(100vh - 114px)'});$('.settings-list').slimScroll({height:'calc(100vh - 158px)'});/*================================
    stickey Header
    ==================================*/$(window).on('scroll',function(){var scroll=$(window).scrollTop(),mainHeader=$('#sticky-header'),mainHeaderHeight=mainHeader.innerHeight();// console.log(mainHeader.innerHeight());
if(scroll>1){$("#sticky-header").addClass("sticky-menu");}else{$("#sticky-header").removeClass("sticky-menu");}});/*================================
    form bootstrap validation
    ==================================*/$('[data-toggle="popover"]').popover();/*------------- Start form Validation -------------*/window.addEventListener('load',function(){// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms=document.getElementsByClassName('needs-validation');// Loop over them and prevent submission
var validation=Array.prototype.filter.call(forms,function(form){form.addEventListener('submit',function(event){if(form.checkValidity()===false){event.preventDefault();event.stopPropagation();}form.classList.add('was-validated');},false);});},false);/*================================
    datatable active
    ==================================*/if($('#dataTable').length){$('#dataTable').DataTable({responsive:true});}if($('#dataTable2').length){$('#dataTable2').DataTable({responsive:true});}if($('#dataTable3').length){$('#dataTable3').DataTable({responsive:true});}/*================================
    Slicknav mobile menu
    ==================================*/$('ul#nav_menu').slicknav({prependTo:"#mobile_menu"});/*================================
    login form
    ==================================*/$('.form-gp input').on('focus',function(){$(this).parent('.form-gp').addClass('focused');});$('.form-gp input').on('focusout',function(){if($(this).val().length===0){$(this).parent('.form-gp').removeClass('focused');}});/*================================
    slider-area background setting
    ==================================*/$('.settings-btn, .offset-close').on('click',function(){$('.offset-area').toggleClass('show_hide');$('.settings-btn').toggleClass('active');});/*================================
    Owl Carousel
    ==================================*/function slider_area(){var owl=$('.testimonial-carousel').owlCarousel({margin:50,loop:true,autoplay:false,nav:false,dots:true,responsive:{0:{items:1},450:{items:1},768:{items:2},1000:{items:2},1360:{items:1},1600:{items:2}}});}slider_area();/*================================
    Fullscreen Page
    ==================================*/if($('#full-view').length){var requestFullscreen=function requestFullscreen(ele){if(ele.requestFullscreen){ele.requestFullscreen();}else if(ele.webkitRequestFullscreen){ele.webkitRequestFullscreen();}else if(ele.mozRequestFullScreen){ele.mozRequestFullScreen();}else if(ele.msRequestFullscreen){ele.msRequestFullscreen();}else{console.log('Fullscreen API is not supported.');}};var exitFullscreen=function exitFullscreen(){if(document.exitFullscreen){document.exitFullscreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else{console.log('Fullscreen API is not supported.');}};var fsDocButton=document.getElementById('full-view');var fsExitDocButton=document.getElementById('full-view-exit');fsDocButton.addEventListener('click',function(e){e.preventDefault();requestFullscreen(document.documentElement);$('body').addClass('expanded');});fsExitDocButton.addEventListener('click',function(e){e.preventDefault();exitFullscreen();$('body').removeClass('expanded');});}})(jQuery);// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop=function noop(){};var methods=['assert','clear','count','debug','dir','dirxml','error','exception','group','groupCollapsed','groupEnd','info','log','markTimeline','profile','profileEnd','table','time','timeEnd','timeline','timelineEnd','timeStamp','trace','warn'];var length=methods.length;var console=window.console=window.console||{};while(length--){method=methods[length];// Only stub undefined methods.
if(!console[method]){console[method]=noop;}}})();// Place any jQuery/helper plugins in here.
/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($);});}else if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){exports=factory(require("jquery"));}else{factory(jQuery);}})(function($){$.easing["jswing"]=$.easing["swing"];var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x;}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75;}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375;}else{return n1*(x-=2.625/d1)*x+.984375;}}$.extend($.easing,{def:"easeOutQuad",swing:function swing(x){return $.easing[$.easing.def](x);},easeInQuad:function easeInQuad(x){return x*x;},easeOutQuad:function easeOutQuad(x){return 1-(1-x)*(1-x);},easeInOutQuad:function easeInOutQuad(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2;},easeInCubic:function easeInCubic(x){return x*x*x;},easeOutCubic:function easeOutCubic(x){return 1-pow(1-x,3);},easeInOutCubic:function easeInOutCubic(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2;},easeInQuart:function easeInQuart(x){return x*x*x*x;},easeOutQuart:function easeOutQuart(x){return 1-pow(1-x,4);},easeInOutQuart:function easeInOutQuart(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2;},easeInQuint:function easeInQuint(x){return x*x*x*x*x;},easeOutQuint:function easeOutQuint(x){return 1-pow(1-x,5);},easeInOutQuint:function easeInOutQuint(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2;},easeInSine:function easeInSine(x){return 1-cos(x*PI/2);},easeOutSine:function easeOutSine(x){return sin(x*PI/2);},easeInOutSine:function easeInOutSine(x){return-(cos(PI*x)-1)/2;},easeInExpo:function easeInExpo(x){return x===0?0:pow(2,10*x-10);},easeOutExpo:function easeOutExpo(x){return x===1?1:1-pow(2,-10*x);},easeInOutExpo:function easeInOutExpo(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2;},easeInCirc:function easeInCirc(x){return 1-sqrt(1-pow(x,2));},easeOutCirc:function easeOutCirc(x){return sqrt(1-pow(x-1,2));},easeInOutCirc:function easeInOutCirc(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2;},easeInElastic:function easeInElastic(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4);},easeOutElastic:function easeOutElastic(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1;},easeInOutElastic:function easeInOutElastic(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1;},easeInBack:function easeInBack(x){return c3*x*x*x-c1*x*x;},easeOutBack:function easeOutBack(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2);},easeInOutBack:function easeInOutBack(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2;},easeInBounce:function easeInBounce(x){return 1-bounceOut(1-x);},easeOutBounce:bounceOut,easeInOutBounce:function easeInOutBounce(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2;}});});
