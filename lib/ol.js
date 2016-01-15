// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
(function (root, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define([], factory);
  } else {
    root.ol = factory();
  }
}(this, function () {
  var OPENLAYERS = {};
  var l,aa=aa||{},ba=this;function ca(b){return void 0!==b}function u(b,c,d){b=b.split(".");d=d||ba;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)!b.length&&ca(c)?d[e]=c:d[e]?d=d[e]:d=d[e]={}}function da(){}function ea(b){b.Yb=function(){return b.Tg?b.Tg:b.Tg=new b}}
function fa(b){var c=typeof b;if("object"==c)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return c;var d=Object.prototype.toString.call(b);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof b.call)return"object";return c}function ga(b){return"array"==fa(b)}function ha(b){var c=fa(b);return"array"==c||"object"==c&&"number"==typeof b.length}function ia(b){return"string"==typeof b}function ja(b){return"number"==typeof b}function ka(b){return"function"==fa(b)}function ma(b){var c=typeof b;return"object"==c&&null!=b||"function"==c}function w(b){return b[na]||(b[na]=++oa)}var na="closure_uid_"+(1E9*Math.random()>>>0),oa=0;
function pa(b,c,d){return b.call.apply(b.bind,arguments)}function qa(b,c,d){if(!b)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return b.apply(c,d)}}return function(){return b.apply(c,arguments)}}function ra(b,c,d){ra=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?pa:qa;return ra.apply(null,arguments)}
function sa(b,c){var d=Array.prototype.slice.call(arguments,1);return function(){var c=d.slice();c.push.apply(c,arguments);return b.apply(this,c)}}var ta=Date.now||function(){return+new Date};function y(b,c){function d(){}d.prototype=c.prototype;b.ca=c.prototype;b.prototype=new d;b.prototype.constructor=b;b.Gp=function(b,d,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return c.prototype[d].apply(b,h)}};var ua,va;function wa(){};function xa(b){if(Error.captureStackTrace)Error.captureStackTrace(this,xa);else{var c=Error().stack;c&&(this.stack=c)}b&&(this.message=String(b))}y(xa,Error);xa.prototype.name="CustomError";var ya;function za(b,c){var d=b.length-c.length;return 0<=d&&b.indexOf(c,d)==d}function Aa(b,c){for(var d=b.split("%s"),e="",f=Array.prototype.slice.call(arguments,1);f.length&&1<d.length;)e+=d.shift()+f.shift();return e+d.join("%s")}var Ca=String.prototype.trim?function(b){return b.trim()}:function(b){return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Da(b){if(!Ea.test(b))return b;-1!=b.indexOf("&")&&(b=b.replace(Ga,"&amp;"));-1!=b.indexOf("<")&&(b=b.replace(Ha,"&lt;"));-1!=b.indexOf(">")&&(b=b.replace(Ia,"&gt;"));-1!=b.indexOf('"')&&(b=b.replace(Ja,"&quot;"));-1!=b.indexOf("'")&&(b=b.replace(Ka,"&#39;"));-1!=b.indexOf("\x00")&&(b=b.replace(La,"&#0;"));return b}var Ga=/&/g,Ha=/</g,Ia=/>/g,Ja=/"/g,Ka=/'/g,La=/\x00/g,Ea=/[\x00&<>"']/,Na=String.prototype.repeat?function(b,c){return b.repeat(c)}:function(b,c){return Array(c+1).join(b)};
function Oa(b){b=ca(void 0)?b.toFixed(void 0):String(b);var c=b.indexOf(".");-1==c&&(c=b.length);return Na("0",Math.max(0,2-c))+b}
function Pa(b,c){for(var d=0,e=Ca(String(b)).split("."),f=Ca(String(c)).split("."),g=Math.max(e.length,f.length),h=0;0==d&&h<g;h++){var k=e[h]||"",m=f[h]||"",n=RegExp("(\\d*)(\\D*)","g"),p=RegExp("(\\d*)(\\D*)","g");do{var q=n.exec(k)||["","",""],r=p.exec(m)||["","",""];if(0==q[0].length&&0==r[0].length)break;d=Qa(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||Qa(0==q[2].length,0==r[2].length)||Qa(q[2],r[2])}while(0==d)}return d}function Qa(b,c){return b<c?-1:b>c?1:0}
function Ra(b){return String(b).replace(/\-([a-z])/g,function(b,d){return d.toUpperCase()})}function Ta(b){var c=ia(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return b.replace(new RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(b,c,f){return c+f.toUpperCase()})};function Ua(b,c,d){return Math.min(Math.max(b,c),d)}var Va=function(){var b;"cosh"in Math?b=Math.cosh:b=function(b){b=Math.exp(b);return(b+1/b)/2};return b}();function Wa(b,c,d,e,f,g){var h=f-d,k=g-e;if(0!==h||0!==k){var m=((b-d)*h+(c-e)*k)/(h*h+k*k);1<m?(d=f,e=g):0<m&&(d+=h*m,e+=k*m)}return Xa(b,c,d,e)}function Xa(b,c,d,e){b=d-b;c=e-c;return b*b+c*c}function Ya(b){return b*Math.PI/180};function Za(b){return function(c){if(c)return[Ua(c[0],b[0],b[2]),Ua(c[1],b[1],b[3])]}}function $a(b){return b};var ab=Array.prototype;function bb(b,c){return ab.indexOf.call(b,c,void 0)}function cb(b,c,d){ab.forEach.call(b,c,d)}function db(b,c){return ab.filter.call(b,c,void 0)}function fb(b,c){return ab.map.call(b,c,void 0)}function gb(b,c){return ab.some.call(b,c,void 0)}function hb(b,c){var d=ib(b,c,void 0);return 0>d?null:ia(b)?b.charAt(d):b[d]}function ib(b,c,d){for(var e=b.length,f=ia(b)?b.split(""):b,g=0;g<e;g++)if(g in f&&c.call(d,f[g],g,b))return g;return-1}
function jb(b,c){var d=bb(b,c),e;(e=0<=d)&&ab.splice.call(b,d,1);return e}function kb(b){return ab.concat.apply(ab,arguments)}function lb(b){var c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];return d}return[]}function nb(b,c){for(var d=1;d<arguments.length;d++){var e=arguments[d];if(ha(e)){var f=b.length||0,g=e.length||0;b.length=f+g;for(var h=0;h<g;h++)b[f+h]=e[h]}else b.push(e)}}function ob(b,c,d,e){ab.splice.apply(b,pb(arguments,1))}
function pb(b,c,d){return 2>=arguments.length?ab.slice.call(b,c):ab.slice.call(b,c,d)}function qb(b,c){b.sort(c||rb)}function sb(b){for(var c=tb,d=0;d<b.length;d++)b[d]={index:d,value:b[d]};var e=c||rb;qb(b,function(b,c){return e(b.value,c.value)||b.index-c.index});for(d=0;d<b.length;d++)b[d]=b[d].value}function ub(b,c){if(!ha(b)||!ha(c)||b.length!=c.length)return!1;for(var d=b.length,e=vb,f=0;f<d;f++)if(!e(b[f],c[f]))return!1;return!0}function rb(b,c){return b>c?1:b<c?-1:0}
function vb(b,c){return b===c}function wb(b){for(var c=[],d=0;d<arguments.length;d++){var e=arguments[d];if(ga(e))for(var f=0;f<e.length;f+=8192)for(var g=pb(e,f,f+8192),g=wb.apply(null,g),h=0;h<g.length;h++)c.push(g[h]);else c.push(e)}return c};function xb(b,c){return 0<=b.indexOf(c)}function yb(b,c,d){var e=b.length;if(b[0]<=c)return 0;if(!(c<=b[e-1]))if(0<d)for(d=1;d<e;++d){if(b[d]<c)return d-1}else if(0>d)for(d=1;d<e;++d){if(b[d]<=c)return d}else for(d=1;d<e;++d){if(b[d]==c)return d;if(b[d]<c)return b[d-1]-c<c-b[d]?d-1:d}return e-1};function zb(b){return function(c,d,e){if(void 0!==c)return c=yb(b,c,e),c=Ua(c+d,0,b.length-1),b[c]}}function Ab(b,c,d){return function(e,f,g){if(void 0!==e)return e=Math.max(Math.floor(Math.log(c/e)/Math.log(b)+(0<g?0:0>g?1:.5))+f,0),void 0!==d&&(e=Math.min(e,d)),c/Math.pow(b,e)}};function Bb(b){if(void 0!==b)return 0}function Cb(b,c){if(void 0!==b)return b+c}function Db(b){var c=2*Math.PI/b;return function(b,e){if(void 0!==b)return b=Math.floor((b+e)/c+.5)*c}}function Eb(){var b=Ya(5);return function(c,d){if(void 0!==c)return Math.abs(c+d)<=b?0:c+d}};function Fb(b,c,d){this.center=b;this.resolution=c;this.rotation=d};var Gb;a:{var Hb=ba.navigator;if(Hb){var Ib=Hb.userAgent;if(Ib){Gb=Ib;break a}}Gb=""}function Jb(b){return-1!=Gb.indexOf(b)};function Kb(b,c,d){for(var e in b)c.call(d,b[e],e,b)}function Lb(b,c){for(var d in b)if(c.call(void 0,b[d],d,b))return!0;return!1}function Mb(b){var c=0,d;for(d in b)c++;return c}function Nb(b){var c=[],d=0,e;for(e in b)c[d++]=b[e];return c}function Ob(b){var c=[],d=0,e;for(e in b)c[d++]=e;return c}function Pb(b,c){return c in b}function Qb(b,c){for(var d in b)if(b[d]==c)return!0;return!1}function Rb(b,c){for(var d in b)if(c.call(void 0,b[d],d,b))return d}
function Sb(b){for(var c in b)return!1;return!0}function Tb(b){for(var c in b)delete b[c]}function Ub(b,c,d){return c in b?b[c]:d}function Vb(b,c){var d=[];return c in b?b[c]:b[c]=d}function Wb(b){var c={},d;for(d in b)c[d]=b[d];return c}function Xb(b){var c=fa(b);if("object"==c||"array"==c){if(ka(b.clone))return b.clone();var c="array"==c?[]:{},d;for(d in b)c[d]=Xb(b[d]);return c}return b}var Yb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Zb(b,c){for(var d,e,f=1;f<arguments.length;f++){e=arguments[f];for(d in e)b[d]=e[d];for(var g=0;g<Yb.length;g++)d=Yb[g],Object.prototype.hasOwnProperty.call(e,d)&&(b[d]=e[d])}};var $b=Jb("Opera")||Jb("OPR"),ac=Jb("Trident")||Jb("MSIE"),bc=Jb("Edge"),cc=Jb("Gecko")&&!(-1!=Gb.toLowerCase().indexOf("webkit")&&!Jb("Edge"))&&!(Jb("Trident")||Jb("MSIE"))&&!Jb("Edge"),dc=-1!=Gb.toLowerCase().indexOf("webkit")&&!Jb("Edge"),ec=Jb("Macintosh"),fc=Jb("Windows"),gc=Jb("Linux")||Jb("CrOS");function hc(){var b=Gb;if(cc)return/rv\:([^\);]+)(\)|;)/.exec(b);if(bc)return/Edge\/([\d\.]+)/.exec(b);if(ac)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);if(dc)return/WebKit\/(\S+)/.exec(b)}
function ic(){var b=ba.document;return b?b.documentMode:void 0}var jc=function(){if($b&&ba.opera){var b;var c=ba.opera.version;try{b=c()}catch(d){b=c}return b}b="";(c=hc())&&(b=c?c[1]:"");return ac&&(c=ic(),c>parseFloat(b))?String(c):b}(),kc={};function lc(b){return kc[b]||(kc[b]=0<=Pa(jc,b))}var mc=ba.document,nc=mc&&ac?ic()||("CSS1Compat"==mc.compatMode?parseInt(jc,10):5):void 0;var oc=!ac||9<=nc,pc=!ac||9<=nc,qc=ac&&!lc("9");!dc||lc("528");cc&&lc("1.9b")||ac&&lc("8")||$b&&lc("9.5")||dc&&lc("528");cc&&!lc("8")||ac&&lc("9");function rc(){0!=sc&&(tc[w(this)]=this);this.ia=this.ia;this.oa=this.oa}var sc=0,tc={};rc.prototype.ia=!1;rc.prototype.Ec=function(){if(!this.ia&&(this.ia=!0,this.X(),0!=sc)){var b=w(this);delete tc[b]}};function uc(b,c){var d=sa(wc,c);b.ia?d.call(void 0):(b.oa||(b.oa=[]),b.oa.push(ca(void 0)?ra(d,void 0):d))}rc.prototype.X=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function wc(b){b&&"function"==typeof b.Ec&&b.Ec()};function xc(b,c){this.type=b;this.g=this.target=c;this.i=!1;this.Wh=!0}xc.prototype.b=function(){this.i=!0};xc.prototype.preventDefault=function(){this.Wh=!1};function yc(b){b.b()}function zc(b){b.preventDefault()};var Ac=ac?"focusout":"DOMFocusOut";function Bc(b){Bc[" "](b);return b}Bc[" "]=da;function Cc(b,c){xc.call(this,b?b.type:"");this.relatedTarget=this.g=this.target=null;this.u=this.j=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.v=this.f=this.c=this.B=!1;this.state=null;this.l=!1;this.a=null;if(b){var d=this.type=b.type,e=b.changedTouches?b.changedTouches[0]:null;this.target=b.target||b.srcElement;this.g=c;var f=b.relatedTarget;if(f){if(cc){var g;a:{try{Bc(f.nodeName);g=!0;break a}catch(h){}g=!1}g||(f=null)}}else"mouseover"==d?
f=b.fromElement:"mouseout"==d&&(f=b.toElement);this.relatedTarget=f;null===e?(this.offsetX=dc||void 0!==b.offsetX?b.offsetX:b.layerX,this.offsetY=dc||void 0!==b.offsetY?b.offsetY:b.layerY,this.clientX=void 0!==b.clientX?b.clientX:b.pageX,this.clientY=void 0!==b.clientY?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0);this.button=
b.button;this.j=b.keyCode||0;this.u=b.charCode||("keypress"==d?b.keyCode:0);this.B=b.ctrlKey;this.c=b.altKey;this.f=b.shiftKey;this.v=b.metaKey;this.l=ec?b.metaKey:b.ctrlKey;this.state=b.state;this.a=b;b.defaultPrevented&&this.preventDefault()}}y(Cc,xc);var Dc=[1,4,2];function Ec(b){return(oc?0==b.a.button:"click"==b.type?!0:!!(b.a.button&Dc[0]))&&!(dc&&ec&&b.B)}Cc.prototype.b=function(){Cc.ca.b.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0};
Cc.prototype.preventDefault=function(){Cc.ca.preventDefault.call(this);var b=this.a;if(b.preventDefault)b.preventDefault();else if(b.returnValue=!1,qc)try{if(b.ctrlKey||112<=b.keyCode&&123>=b.keyCode)b.keyCode=-1}catch(c){}};var Fc="closure_listenable_"+(1E6*Math.random()|0);function Gc(b){return!(!b||!b[Fc])}var Hc=0;function Ic(b,c,d,e,f){this.listener=b;this.a=null;this.src=c;this.type=d;this.ad=!!e;this.me=f;this.key=++Hc;this.Tc=this.Xd=!1}function Jc(b){b.Tc=!0;b.listener=null;b.a=null;b.src=null;b.me=null};function Kc(b){this.src=b;this.a={};this.c=0}Kc.prototype.add=function(b,c,d,e,f){var g=b.toString();b=this.a[g];b||(b=this.a[g]=[],this.c++);var h=Lc(b,c,e,f);-1<h?(c=b[h],d||(c.Xd=!1)):(c=new Ic(c,this.src,g,!!e,f),c.Xd=d,b.push(c));return c};Kc.prototype.remove=function(b,c,d,e){b=b.toString();if(!(b in this.a))return!1;var f=this.a[b];c=Lc(f,c,d,e);return-1<c?(Jc(f[c]),ab.splice.call(f,c,1),0==f.length&&(delete this.a[b],this.c--),!0):!1};
function Mc(b,c){var d=c.type;if(!(d in b.a))return!1;var e=jb(b.a[d],c);e&&(Jc(c),0==b.a[d].length&&(delete b.a[d],b.c--));return e}function Nc(b,c,d,e,f){b=b.a[c.toString()];c=-1;b&&(c=Lc(b,d,e,f));return-1<c?b[c]:null}function Oc(b,c,d){var e=ca(c),f=e?c.toString():"",g=ca(d);return Lb(b.a,function(b){for(var c=0;c<b.length;++c)if(!(e&&b[c].type!=f||g&&b[c].ad!=d))return!0;return!1})}
function Lc(b,c,d,e){for(var f=0;f<b.length;++f){var g=b[f];if(!g.Tc&&g.listener==c&&g.ad==!!d&&g.me==e)return f}return-1};var Pc="closure_lm_"+(1E6*Math.random()|0),Qc={},Rc=0;function C(b,c,d,e,f){if(ga(c)){for(var g=0;g<c.length;g++)C(b,c[g],d,e,f);return null}d=Sc(d);return Gc(b)?b.Sa(c,d,e,f):Tc(b,c,d,!1,e,f)}
function Tc(b,c,d,e,f,g){if(!c)throw Error("Invalid event type");var h=!!f,k=Vc(b);k||(b[Pc]=k=new Kc(b));d=k.add(c,d,e,f,g);if(d.a)return d;e=Wc();d.a=e;e.src=b;e.listener=d;if(b.addEventListener)b.addEventListener(c.toString(),e,h);else if(b.attachEvent)b.attachEvent(Xc(c.toString()),e);else throw Error("addEventListener and attachEvent are unavailable.");Rc++;return d}
function Wc(){var b=Yc,c=pc?function(d){return b.call(c.src,c.listener,d)}:function(d){d=b.call(c.src,c.listener,d);if(!d)return d};return c}function Zc(b,c,d,e,f){if(ga(c)){for(var g=0;g<c.length;g++)Zc(b,c[g],d,e,f);return null}d=Sc(d);return Gc(b)?b.zb.add(String(c),d,!0,e,f):Tc(b,c,d,!0,e,f)}function $c(b,c,d,e,f){if(ga(c))for(var g=0;g<c.length;g++)$c(b,c[g],d,e,f);else d=Sc(d),Gc(b)?b.cg(c,d,e,f):b&&(b=Vc(b))&&(c=Nc(b,c,d,!!e,f))&&ad(c)}
function ad(b){if(ja(b)||!b||b.Tc)return!1;var c=b.src;if(Gc(c))return Mc(c.zb,b);var d=b.type,e=b.a;c.removeEventListener?c.removeEventListener(d,e,b.ad):c.detachEvent&&c.detachEvent(Xc(d),e);Rc--;(d=Vc(c))?(Mc(d,b),0==d.c&&(d.src=null,c[Pc]=null)):Jc(b);return!0}function Xc(b){return b in Qc?Qc[b]:Qc[b]="on"+b}function bd(b,c,d,e){var f=!0;if(b=Vc(b))if(c=b.a[c.toString()])for(c=c.concat(),b=0;b<c.length;b++){var g=c[b];g&&g.ad==d&&!g.Tc&&(g=cd(g,e),f=f&&!1!==g)}return f}
function cd(b,c){var d=b.listener,e=b.me||b.src;b.Xd&&ad(b);return d.call(e,c)}
function Yc(b,c){if(b.Tc)return!0;if(!pc){var d;if(!(d=c))a:{d=["window","event"];for(var e=ba,f;f=d.shift();)if(null!=e[f])e=e[f];else{d=null;break a}d=e}f=d;d=new Cc(f,this);e=!0;if(!(0>f.keyCode||void 0!=f.returnValue)){a:{var g=!1;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(m){g=!0}if(g||void 0==f.returnValue)f.returnValue=!0}f=[];for(g=d.g;g;g=g.parentNode)f.push(g);for(var g=b.type,h=f.length-1;!d.i&&0<=h;h--){d.g=f[h];var k=bd(f[h],g,!0,d),e=e&&k}for(h=0;!d.i&&h<f.length;h++)d.g=f[h],k=
bd(f[h],g,!1,d),e=e&&k}return e}return cd(b,new Cc(c,this))}function Vc(b){b=b[Pc];return b instanceof Kc?b:null}var dd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Sc(b){if(ka(b))return b;b[dd]||(b[dd]=function(c){return b.handleEvent(c)});return b[dd]};function ed(){rc.call(this);this.zb=new Kc(this);this.Qd=this;this.fb=null}y(ed,rc);ed.prototype[Fc]=!0;l=ed.prototype;l.addEventListener=function(b,c,d,e){C(this,b,c,d,e)};l.removeEventListener=function(b,c,d,e){$c(this,b,c,d,e)};
l.o=function(b){var c,d=this.fb;if(d)for(c=[];d;d=d.fb)c.push(d);var d=this.Qd,e=b.type||b;if(ia(b))b=new xc(b,d);else if(b instanceof xc)b.target=b.target||d;else{var f=b;b=new xc(e,d);Zb(b,f)}var f=!0,g;if(c)for(var h=c.length-1;!b.i&&0<=h;h--)g=b.g=c[h],f=fd(g,e,!0,b)&&f;b.i||(g=b.g=d,f=fd(g,e,!0,b)&&f,b.i||(f=fd(g,e,!1,b)&&f));if(c)for(h=0;!b.i&&h<c.length;h++)g=b.g=c[h],f=fd(g,e,!1,b)&&f;return f};
l.X=function(){ed.ca.X.call(this);if(this.zb){var b=this.zb,c=0,d;for(d in b.a){for(var e=b.a[d],f=0;f<e.length;f++)++c,Jc(e[f]);delete b.a[d];b.c--}}this.fb=null};l.Sa=function(b,c,d,e){return this.zb.add(String(b),c,!1,d,e)};l.cg=function(b,c,d,e){return this.zb.remove(String(b),c,d,e)};
function fd(b,c,d,e){c=b.zb.a[String(c)];if(!c)return!0;c=c.concat();for(var f=!0,g=0;g<c.length;++g){var h=c[g];if(h&&!h.Tc&&h.ad==d){var k=h.listener,m=h.me||h.src;h.Xd&&Mc(b.zb,h);f=!1!==k.call(m,e)&&f}}return f&&0!=e.Wh}function gd(b,c,d){return Oc(b.zb,ca(c)?String(c):void 0,d)};function hd(){ed.call(this);this.c=0}y(hd,ed);function id(b){ad(b)}l=hd.prototype;l.s=function(){++this.c;this.o("change")};l.L=function(){return this.c};l.H=function(b,c,d){return C(this,b,c,!1,d)};l.M=function(b,c,d){return Zc(this,b,c,!1,d)};l.K=function(b,c,d){$c(this,b,c,!1,d)};l.N=id;function jd(b,c,d){xc.call(this,b);this.key=c;this.oldValue=d}y(jd,xc);function kd(b){hd.call(this);w(this);this.B={};void 0!==b&&this.I(b)}y(kd,hd);var ld={};function md(b){return ld.hasOwnProperty(b)?ld[b]:ld[b]="change:"+b}l=kd.prototype;l.get=function(b){var c;this.B.hasOwnProperty(b)&&(c=this.B[b]);return c};l.O=function(){return Object.keys(this.B)};l.P=function(){var b={},c;for(c in this.B)b[c]=this.B[c];return b};
function nd(b,c,d){var e;e=md(c);b.o(new jd(e,c,d));b.o(new jd("propertychange",c,d))}l.set=function(b,c,d){d?this.B[b]=c:(d=this.B[b],this.B[b]=c,nd(this,b,d))};l.I=function(b,c){for(var d in b)this.set(d,b[d],c)};l.R=function(b,c){if(b in this.B){var d=this.B[b];delete this.B[b];c||nd(this,b,d)}};function od(b,c,d){void 0===d&&(d=[0,0]);d[0]=b[0]+2*c;d[1]=b[1]+2*c;return d}function pd(b,c,d){void 0===d&&(d=[0,0]);d[0]=b[0]*c+.5|0;d[1]=b[1]*c+.5|0;return d}function qd(b,c){if(ga(b))return b;void 0===c?c=[b,b]:(c[0]=b,c[1]=b);return c};function rd(b,c){var d=b%c;return 0>d*c?d+c:d}function sd(b,c,d){return b+d*(c-b)};function td(b,c){b[0]+=c[0];b[1]+=c[1];return b}function ud(b,c){var d=b[0],e=b[1],f=c[0],g=c[1],h=f[0],f=f[1],k=g[0],g=g[1],m=k-h,n=g-f,d=0===m&&0===n?0:(m*(d-h)+n*(e-f))/(m*m+n*n||0);0>=d||(1<=d?(h=k,f=g):(h+=d*m,f+=d*n));return[h,f]}function vd(b,c){var d=rd(b+180,360)-180,e=Math.abs(Math.round(3600*d));return Math.floor(e/3600)+"\u00b0 "+Oa(Math.floor(e/60%60))+"\u2032 "+Oa(Math.floor(e%60))+"\u2033 "+c.charAt(0>d?1:0)}
function wd(b,c,d){return b?c.replace("{x}",b[0].toFixed(d)).replace("{y}",b[1].toFixed(d)):""}function xd(b,c){for(var d=!0,e=b.length-1;0<=e;--e)if(b[e]!=c[e]){d=!1;break}return d}function yd(b,c){var d=Math.cos(c),e=Math.sin(c),f=b[1]*d+b[0]*e;b[0]=b[0]*d-b[1]*e;b[1]=f;return b}function zd(b,c){var d=b[0]-c[0],e=b[1]-c[1];return d*d+e*e}function Ad(b,c){return zd(b,ud(b,c))}function Bd(b,c){return wd(b,"{x}, {y}",c)};function Cd(b){this.length=b.length||b;for(var c=0;c<this.length;c++)this[c]=b[c]||0}Cd.prototype.a=4;Cd.prototype.set=function(b,c){c=c||0;for(var d=0;d<b.length&&c+d<this.length;d++)this[c+d]=b[d]};Cd.prototype.toString=Array.prototype.join;"undefined"==typeof Float32Array&&(Cd.BYTES_PER_ELEMENT=4,Cd.prototype.BYTES_PER_ELEMENT=Cd.prototype.a,Cd.prototype.set=Cd.prototype.set,Cd.prototype.toString=Cd.prototype.toString,u("Float32Array",Cd,void 0));function Dd(b){this.length=b.length||b;for(var c=0;c<this.length;c++)this[c]=b[c]||0}Dd.prototype.a=8;Dd.prototype.set=function(b,c){c=c||0;for(var d=0;d<b.length&&c+d<this.length;d++)this[c+d]=b[d]};Dd.prototype.toString=Array.prototype.join;if("undefined"==typeof Float64Array){try{Dd.BYTES_PER_ELEMENT=8}catch(b){}Dd.prototype.BYTES_PER_ELEMENT=Dd.prototype.a;Dd.prototype.set=Dd.prototype.set;Dd.prototype.toString=Dd.prototype.toString;u("Float64Array",Dd,void 0)};function Ed(b,c,d,e,f){b[0]=c;b[1]=d;b[2]=e;b[3]=f};function Fd(){var b=Array(16);Gd(b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return b}function Hd(){var b=Array(16);Gd(b,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return b}function Gd(b,c,d,e,f,g,h,k,m,n,p,q,r,t,x,z,B){b[0]=c;b[1]=d;b[2]=e;b[3]=f;b[4]=g;b[5]=h;b[6]=k;b[7]=m;b[8]=n;b[9]=p;b[10]=q;b[11]=r;b[12]=t;b[13]=x;b[14]=z;b[15]=B}
function Id(b,c){b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15]}function Jd(b){b[0]=1;b[1]=0;b[2]=0;b[3]=0;b[4]=0;b[5]=1;b[6]=0;b[7]=0;b[8]=0;b[9]=0;b[10]=1;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1}
function Kd(b,c,d){var e=b[0],f=b[1],g=b[2],h=b[3],k=b[4],m=b[5],n=b[6],p=b[7],q=b[8],r=b[9],t=b[10],x=b[11],z=b[12],B=b[13],A=b[14];b=b[15];var v=c[0],O=c[1],K=c[2],I=c[3],G=c[4],la=c[5],Fa=c[6],L=c[7],Ba=c[8],Sa=c[9],Ma=c[10],mb=c[11],eb=c[12],Uc=c[13],vc=c[14];c=c[15];d[0]=e*v+k*O+q*K+z*I;d[1]=f*v+m*O+r*K+B*I;d[2]=g*v+n*O+t*K+A*I;d[3]=h*v+p*O+x*K+b*I;d[4]=e*G+k*la+q*Fa+z*L;d[5]=f*G+m*la+r*Fa+B*L;d[6]=g*G+n*la+t*Fa+A*L;d[7]=h*G+p*la+x*Fa+b*L;d[8]=e*Ba+k*Sa+q*Ma+z*mb;d[9]=f*Ba+m*Sa+r*Ma+B*mb;d[10]=
g*Ba+n*Sa+t*Ma+A*mb;d[11]=h*Ba+p*Sa+x*Ma+b*mb;d[12]=e*eb+k*Uc+q*vc+z*c;d[13]=f*eb+m*Uc+r*vc+B*c;d[14]=g*eb+n*Uc+t*vc+A*c;d[15]=h*eb+p*Uc+x*vc+b*c}
function Ld(b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],k=b[5],m=b[6],n=b[7],p=b[8],q=b[9],r=b[10],t=b[11],x=b[12],z=b[13],B=b[14],A=b[15],v=d*k-e*h,O=d*m-f*h,K=d*n-g*h,I=e*m-f*k,G=e*n-g*k,la=f*n-g*m,Fa=p*z-q*x,L=p*B-r*x,Ba=p*A-t*x,Sa=q*B-r*z,Ma=q*A-t*z,mb=r*A-t*B,eb=v*mb-O*Ma+K*Sa+I*Ba-G*L+la*Fa;0!=eb&&(eb=1/eb,c[0]=(k*mb-m*Ma+n*Sa)*eb,c[1]=(-e*mb+f*Ma-g*Sa)*eb,c[2]=(z*la-B*G+A*I)*eb,c[3]=(-q*la+r*G-t*I)*eb,c[4]=(-h*mb+m*Ba-n*L)*eb,c[5]=(d*mb-f*Ba+g*L)*eb,c[6]=(-x*la+B*K-A*O)*eb,c[7]=(p*la-r*K+t*
O)*eb,c[8]=(h*Ma-k*Ba+n*Fa)*eb,c[9]=(-d*Ma+e*Ba-g*Fa)*eb,c[10]=(x*G-z*K+A*v)*eb,c[11]=(-p*G+q*K-t*v)*eb,c[12]=(-h*Sa+k*L-m*Fa)*eb,c[13]=(d*Sa-e*L+f*Fa)*eb,c[14]=(-x*I+z*O-B*v)*eb,c[15]=(p*I-q*O+r*v)*eb)}function Md(b,c,d){var e=b[1]*c+b[5]*d+0*b[9]+b[13],f=b[2]*c+b[6]*d+0*b[10]+b[14],g=b[3]*c+b[7]*d+0*b[11]+b[15];b[12]=b[0]*c+b[4]*d+0*b[8]+b[12];b[13]=e;b[14]=f;b[15]=g}
function Nd(b,c,d){Gd(b,b[0]*c,b[1]*c,b[2]*c,b[3]*c,b[4]*d,b[5]*d,b[6]*d,b[7]*d,1*b[8],1*b[9],1*b[10],1*b[11],b[12],b[13],b[14],b[15])}function Od(b,c){var d=b[0],e=b[1],f=b[2],g=b[3],h=b[4],k=b[5],m=b[6],n=b[7],p=Math.cos(c),q=Math.sin(c);b[0]=d*p+h*q;b[1]=e*p+k*q;b[2]=f*p+m*q;b[3]=g*p+n*q;b[4]=d*-q+h*p;b[5]=e*-q+k*p;b[6]=f*-q+m*p;b[7]=g*-q+n*p}new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function Pd(b){for(var c=Qd(),d=0,e=b.length;d<e;++d)Rd(c,b[d]);return c}function Sd(b,c,d){var e=Math.min.apply(null,b),f=Math.min.apply(null,c);b=Math.max.apply(null,b);c=Math.max.apply(null,c);return Td(e,f,b,c,d)}function Ud(b,c,d){return d?(d[0]=b[0]-c,d[1]=b[1]-c,d[2]=b[2]+c,d[3]=b[3]+c,d):[b[0]-c,b[1]-c,b[2]+c,b[3]+c]}function Vd(b,c){return c?(c[0]=b[0],c[1]=b[1],c[2]=b[2],c[3]=b[3],c):b.slice()}
function Wd(b,c,d){c=c<b[0]?b[0]-c:b[2]<c?c-b[2]:0;b=d<b[1]?b[1]-d:b[3]<d?d-b[3]:0;return c*c+b*b}function Xd(b,c){return Yd(b,c[0],c[1])}function Zd(b,c){return b[0]<=c[0]&&c[2]<=b[2]&&b[1]<=c[1]&&c[3]<=b[3]}function Yd(b,c,d){return b[0]<=c&&c<=b[2]&&b[1]<=d&&d<=b[3]}function $d(b,c){var d=b[1],e=b[2],f=b[3],g=c[0],h=c[1],k=0;g<b[0]?k=k|16:g>e&&(k=k|4);h<d?k|=8:h>f&&(k|=2);0===k&&(k=1);return k}function Qd(){return[Infinity,Infinity,-Infinity,-Infinity]}
function Td(b,c,d,e,f){return f?(f[0]=b,f[1]=c,f[2]=d,f[3]=e,f):[b,c,d,e]}function ae(b,c){var d=b[0],e=b[1];return Td(d,e,d,e,c)}function be(b,c,d,e,f){f=Td(Infinity,Infinity,-Infinity,-Infinity,f);return ce(f,b,c,d,e)}function de(b,c){return b[0]==c[0]&&b[2]==c[2]&&b[1]==c[1]&&b[3]==c[3]}function ee(b,c){c[0]<b[0]&&(b[0]=c[0]);c[2]>b[2]&&(b[2]=c[2]);c[1]<b[1]&&(b[1]=c[1]);c[3]>b[3]&&(b[3]=c[3]);return b}
function Rd(b,c){c[0]<b[0]&&(b[0]=c[0]);c[0]>b[2]&&(b[2]=c[0]);c[1]<b[1]&&(b[1]=c[1]);c[1]>b[3]&&(b[3]=c[1])}function ce(b,c,d,e,f){for(;d<e;d+=f){var g=b,h=c[d],k=c[d+1];g[0]=Math.min(g[0],h);g[1]=Math.min(g[1],k);g[2]=Math.max(g[2],h);g[3]=Math.max(g[3],k)}return b}function fe(b,c,d){var e;return(e=c.call(d,ge(b)))||(e=c.call(d,he(b)))||(e=c.call(d,ie(b)))?e:(e=c.call(d,je(b)))?e:!1}function ke(b){var c=0;le(b)||(c=me(b)*ne(b));return c}function ge(b){return[b[0],b[1]]}
function he(b){return[b[2],b[1]]}function oe(b){return[(b[0]+b[2])/2,(b[1]+b[3])/2]}function pe(b,c,d,e){var f=c*e[0]/2;e=c*e[1]/2;c=Math.cos(d);d=Math.sin(d);f=[-f,-f,f,f];e=[-e,e,-e,e];var g,h,k;for(g=0;4>g;++g)h=f[g],k=e[g],f[g]=b[0]+h*c-k*d,e[g]=b[1]+h*d+k*c;return Sd(f,e,void 0)}function ne(b){return b[3]-b[1]}function qe(b,c,d){d=d?d:Qd();re(b,c)&&(d[0]=b[0]>c[0]?b[0]:c[0],d[1]=b[1]>c[1]?b[1]:c[1],d[2]=b[2]<c[2]?b[2]:c[2],d[3]=b[3]<c[3]?b[3]:c[3]);return d}function je(b){return[b[0],b[3]]}
function ie(b){return[b[2],b[3]]}function me(b){return b[2]-b[0]}function re(b,c){return b[0]<=c[2]&&b[2]>=c[0]&&b[1]<=c[3]&&b[3]>=c[1]}function le(b){return b[2]<b[0]||b[3]<b[1]}function se(b,c){var d=(b[2]-b[0])/2*(c-1),e=(b[3]-b[1])/2*(c-1);b[0]-=d;b[2]+=d;b[1]-=e;b[3]+=e}function te(b,c,d){b=[b[0],b[1],b[0],b[3],b[2],b[1],b[2],b[3]];c(b,b,2);return Sd([b[0],b[2],b[4],b[6]],[b[1],b[3],b[5],b[7]],d)};function ue(b){return function(){return b}}var ve=ue(!1),we=ue(!0),xe=ue(null);function ye(b){return b}function ze(b){var c;c=c||0;return function(){return b.apply(this,Array.prototype.slice.call(arguments,0,c))}}function Ae(b){var c=arguments,d=c.length;return function(){for(var b,f=0;f<d;f++)b=c[f].apply(this,arguments);return b}}function Be(b){var c=arguments,d=c.length;return function(){for(var b=0;b<d;b++)if(!c[b].apply(this,arguments))return!1;return!0}};/*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licensed under CC-BY-3.0.
*/
function Ce(b){this.radius=b}Ce.prototype.c=function(b){for(var c=0,d=b.length,e=b[d-1][0],f=b[d-1][1],g=0;g<d;g++)var h=b[g][0],k=b[g][1],c=c+Ya(h-e)*(2+Math.sin(Ya(f))+Math.sin(Ya(k))),e=h,f=k;return c*this.radius*this.radius/2};Ce.prototype.a=function(b,c){var d=Ya(b[1]),e=Ya(c[1]),f=(e-d)/2,g=Ya(c[0]-b[0])/2,d=Math.sin(f)*Math.sin(f)+Math.sin(g)*Math.sin(g)*Math.cos(d)*Math.cos(e);return 2*this.radius*Math.atan2(Math.sqrt(d),Math.sqrt(1-d))};
Ce.prototype.offset=function(b,c,d){var e=Ya(b[1]);c/=this.radius;var f=Math.asin(Math.sin(e)*Math.cos(c)+Math.cos(e)*Math.sin(c)*Math.cos(d));return[180*(Ya(b[0])+Math.atan2(Math.sin(d)*Math.sin(c)*Math.cos(e),Math.cos(c)-Math.sin(e)*Math.sin(f)))/Math.PI,180*f/Math.PI]};var De=new Ce(6370997);var Ee={};Ee.degrees=2*Math.PI*De.radius/360;Ee.ft=.3048;Ee.m=1;Ee["us-ft"]=1200/3937;
function Fe(b){this.a=b.code;this.c=b.units;this.j=void 0!==b.extent?b.extent:null;this.i=void 0!==b.worldExtent?b.worldExtent:null;this.g=void 0!==b.axisOrientation?b.axisOrientation:"enu";this.f=void 0!==b.global?b.global:!1;this.b=!(!this.f||!this.j);this.B=void 0!==b.getPointResolution?b.getPointResolution:this.gk;this.l=null;var c=Ge,d=b.code;if("function"==typeof proj4&&void 0===c[d]){var e=proj4.defs(d);if(void 0!==e){void 0!==e.axis&&void 0===b.axisOrientation&&(this.g=e.axis);void 0===b.units&&
(b=e.units,void 0===e.to_meter||void 0!==b&&void 0!==Ee[b]||(b=e.to_meter.toString(),Ee[b]=e.to_meter),this.c=b);for(var f in c)b=proj4.defs(f),void 0!==b&&(c=He(f),b===e?Ie([c,this]):(b=proj4(f,d),Je(c,this,b.forward,b.inverse)))}}}l=Fe.prototype;l.Ij=function(){return this.a};l.J=function(){return this.j};l.Cm=function(){return this.c};l.Jc=function(){return Ee[this.c]};l.sk=function(){return this.i};function Ke(b){return b.g}l.fl=function(){return this.f};
l.To=function(b){this.f=b;this.b=!(!b||!this.j)};l.Dm=function(b){this.j=b;this.b=!(!this.f||!b)};l.ap=function(b){this.i=b};l.So=function(b){this.B=b};l.gk=function(b,c){if("degrees"==this.c)return b;var d=Le(this,He("EPSG:4326")),e=[c[0]-b/2,c[1],c[0]+b/2,c[1],c[0],c[1]-b/2,c[0],c[1]+b/2],e=d(e,e,2),d=De.a(e.slice(0,2),e.slice(2,4)),e=De.a(e.slice(4,6),e.slice(6,8)),e=(d+e)/2,d=this.Jc();void 0!==d&&(e/=d);return e};l.getPointResolution=function(b,c){return this.B(b,c)};var Ge={},Me={};
function Ie(b){Ne(b);b.forEach(function(c){b.forEach(function(b){c!==b&&Oe(c,b,Pe)})})}function Qe(){var b=Re,c=Se,d=Ue;Ve.forEach(function(e){b.forEach(function(b){Oe(e,b,c);Oe(b,e,d)})})}function We(b){Ge[b.a]=b;Oe(b,b,Pe)}function Ne(b){var c=[];b.forEach(function(b){c.push(We(b))})}function Xe(b){return b?ia(b)?He(b):b:He("EPSG:3857")}function Oe(b,c,d){b=b.a;c=c.a;b in Me||(Me[b]={});Me[b][c]=d}function Je(b,c,d,e){b=He(b);c=He(c);Oe(b,c,Ye(d));Oe(c,b,Ye(e))}
function Ye(b){return function(c,d,e){var f=c.length;e=void 0!==e?e:2;d=void 0!==d?d:Array(f);var g,h;for(h=0;h<f;h+=e)for(g=b([c[h],c[h+1]]),d[h]=g[0],d[h+1]=g[1],g=e-1;2<=g;--g)d[h+g]=c[h+g];return d}}function He(b){var c;b instanceof Fe?c=b:ia(b)?(c=Ge[b],void 0===c&&"function"==typeof proj4&&void 0!==proj4.defs(b)&&(c=new Fe({code:b}),We(c))):c=null;return c}function Ze(b,c){return b===c?!0:b.a===c.a?b.c===c.c:Le(b,c)===Pe}function $e(b,c){var d=He(b),e=He(c);return Le(d,e)}
function Le(b,c){var d=b.a,e=c.a,f;d in Me&&e in Me[d]&&(f=Me[d][e]);void 0===f&&(f=af);return f}function af(b,c){if(void 0!==c&&b!==c){for(var d=0,e=b.length;d<e;++d)c[d]=b[d];b=c}return b}function Pe(b,c){var d;if(void 0!==c){d=0;for(var e=b.length;d<e;++d)c[d]=b[d];d=c}else d=b.slice();return d}function bf(b,c,d){return $e(c,d)(b,void 0,b.length)}function cf(b,c,d){c=$e(c,d);return te(b,c)};function df(){kd.call(this);this.v=Qd();this.D=-1;this.j={};this.u=this.i=0}y(df,kd);l=df.prototype;l.pb=function(b,c){var d=c?c:[NaN,NaN];this.mb(b[0],b[1],d,Infinity);return d};l.vg=function(b){return this.rc(b[0],b[1])};l.rc=ve;l.J=function(b){this.D!=this.c&&(this.v=this.Yd(this.v),this.D=this.c);var c=this.v;b?(b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3]):b=c;return b};l.yb=function(b){return this.sd(b*b)};l.kb=function(b,c){this.mc($e(b,c));return this};function ef(b,c,d,e,f,g){var h=f[0],k=f[1],m=f[4],n=f[5],p=f[12];f=f[13];for(var q=g?g:[],r=0;c<d;c+=e){var t=b[c],x=b[c+1];q[r++]=h*t+m*x+p;q[r++]=k*t+n*x+f}g&&q.length!=r&&(q.length=r);return q};function ff(){df.call(this);this.b="XY";this.a=2;this.A=null}y(ff,df);function gf(b){if("XY"==b)return 2;if("XYZ"==b||"XYM"==b)return 3;if("XYZM"==b)return 4}l=ff.prototype;l.rc=ve;l.Yd=function(b){return be(this.A,0,this.A.length,this.a,b)};l.Jb=function(){return this.A.slice(0,this.a)};l.ja=function(){return this.A};l.Kb=function(){return this.A.slice(this.A.length-this.a)};l.Lb=function(){return this.b};
l.sd=function(b){this.u!=this.c&&(Tb(this.j),this.i=0,this.u=this.c);if(0>b||0!==this.i&&b<=this.i)return this;var c=b.toString();if(this.j.hasOwnProperty(c))return this.j[c];var d=this.Kc(b);if(d.ja().length<this.A.length)return this.j[c]=d;this.i=b;return this};l.Kc=function(){return this};l.sa=function(){return this.a};function hf(b,c,d){b.a=gf(c);b.b=c;b.A=d}
function jf(b,c,d,e){if(c)d=gf(c);else{for(c=0;c<e;++c){if(0===d.length){b.b="XY";b.a=2;return}d=d[0]}d=d.length;c=2==d?"XY":3==d?"XYZ":4==d?"XYZM":void 0}b.b=c;b.a=d}l.mc=function(b){this.A&&(b(this.A,this.A,this.a),this.s())};l.Oc=function(b,c){var d=this.ja();if(d){var e=this.sa(),f=d.length,g=d?d:[],h=0,k,m;for(k=0;k<f;k+=e)for(g[h++]=d[k]+b,g[h++]=d[k+1]+c,m=k+2;m<k+e;++m)g[h++]=d[m];d&&g.length!=h&&(g.length=h);this.s()}};function kf(b,c,d,e){for(var f=0,g=b[d-e],h=b[d-e+1];c<d;c+=e)var k=b[c],m=b[c+1],f=f+(h*k-g*m),g=k,h=m;return f/2}function lf(b,c,d,e){var f=0,g,h;g=0;for(h=d.length;g<h;++g){var k=d[g],f=f+kf(b,c,k,e);c=k}return f};function mf(b,c,d,e,f,g,h){var k=b[c],m=b[c+1],n=b[d]-k,p=b[d+1]-m;if(0!==n||0!==p)if(g=((f-k)*n+(g-m)*p)/(n*n+p*p),1<g)c=d;else if(0<g){for(f=0;f<e;++f)h[f]=sd(b[c+f],b[d+f],g);h.length=e;return}for(f=0;f<e;++f)h[f]=b[c+f];h.length=e}function nf(b,c,d,e,f){var g=b[c],h=b[c+1];for(c+=e;c<d;c+=e){var k=b[c],m=b[c+1],g=Xa(g,h,k,m);g>f&&(f=g);g=k;h=m}return f}function of(b,c,d,e,f){var g,h;g=0;for(h=d.length;g<h;++g){var k=d[g];f=nf(b,c,k,e,f);c=k}return f}
function pf(b,c,d,e,f,g,h,k,m,n,p){if(c==d)return n;var q;if(0===f){q=Xa(h,k,b[c],b[c+1]);if(q<n){for(p=0;p<e;++p)m[p]=b[c+p];m.length=e;return q}return n}for(var r=p?p:[NaN,NaN],t=c+e;t<d;)if(mf(b,t-e,t,e,h,k,r),q=Xa(h,k,r[0],r[1]),q<n){n=q;for(p=0;p<e;++p)m[p]=r[p];m.length=e;t+=e}else t+=e*Math.max((Math.sqrt(q)-Math.sqrt(n))/f|0,1);if(g&&(mf(b,d-e,c,e,h,k,r),q=Xa(h,k,r[0],r[1]),q<n)){n=q;for(p=0;p<e;++p)m[p]=r[p];m.length=e}return n}
function qf(b,c,d,e,f,g,h,k,m,n,p){p=p?p:[NaN,NaN];var q,r;q=0;for(r=d.length;q<r;++q){var t=d[q];n=pf(b,c,t,e,f,g,h,k,m,n,p);c=t}return n};function rf(b,c){var d=0,e,f;e=0;for(f=c.length;e<f;++e)b[d++]=c[e];return d}function sf(b,c,d,e){var f,g;f=0;for(g=d.length;f<g;++f){var h=d[f],k;for(k=0;k<e;++k)b[c++]=h[k]}return c}function tf(b,c,d,e,f){f=f?f:[];var g=0,h,k;h=0;for(k=d.length;h<k;++h)c=sf(b,c,d[h],e),f[g++]=c;f.length=g;return f};function uf(b,c,d,e,f){f=void 0!==f?f:[];for(var g=0;c<d;c+=e)f[g++]=b.slice(c,c+e);f.length=g;return f}function vf(b,c,d,e,f){f=void 0!==f?f:[];var g=0,h,k;h=0;for(k=d.length;h<k;++h){var m=d[h];f[g++]=uf(b,c,m,e,f[g]);c=m}f.length=g;return f};function wf(b,c,d,e,f,g,h){var k=(d-c)/e;if(3>k){for(;c<d;c+=e)g[h++]=b[c],g[h++]=b[c+1];return h}var m=Array(k);m[0]=1;m[k-1]=1;d=[c,d-e];for(var n=0,p;0<d.length;){var q=d.pop(),r=d.pop(),t=0,x=b[r],z=b[r+1],B=b[q],A=b[q+1];for(p=r+e;p<q;p+=e){var v=Wa(b[p],b[p+1],x,z,B,A);v>t&&(n=p,t=v)}t>f&&(m[(n-c)/e]=1,r+e<n&&d.push(r,n),n+e<q&&d.push(n,q))}for(p=0;p<k;++p)m[p]&&(g[h++]=b[c+p*e],g[h++]=b[c+p*e+1]);return h}
function xf(b,c,d,e,f,g,h,k){var m,n;m=0;for(n=d.length;m<n;++m){var p=d[m];a:{var q=b,r=p,t=e,x=f,z=g;if(c!=r){var B=x*Math.round(q[c]/x),A=x*Math.round(q[c+1]/x);c+=t;z[h++]=B;z[h++]=A;var v=void 0,O=void 0;do if(v=x*Math.round(q[c]/x),O=x*Math.round(q[c+1]/x),c+=t,c==r){z[h++]=v;z[h++]=O;break a}while(v==B&&O==A);for(;c<r;){var K,I;K=x*Math.round(q[c]/x);I=x*Math.round(q[c+1]/x);c+=t;if(K!=v||I!=O){var G=v-B,la=O-A,Fa=K-B,L=I-A;G*L==la*Fa&&(0>G&&Fa<G||G==Fa||0<G&&Fa>G)&&(0>la&&L<la||la==L||0<la&&
L>la)||(z[h++]=v,z[h++]=O,B=v,A=O);v=K;O=I}}z[h++]=v;z[h++]=O}}k.push(h);c=p}return h};function yf(b,c){ff.call(this);this.g=this.l=-1;this.ma(b,c)}y(yf,ff);l=yf.prototype;l.clone=function(){var b=new yf(null);zf(b,this.b,this.A.slice());return b};l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;this.g!=this.c&&(this.l=Math.sqrt(nf(this.A,0,this.A.length,this.a,0)),this.g=this.c);return pf(this.A,0,this.A.length,this.a,this.l,!0,b,c,d,e)};l.dm=function(){return kf(this.A,0,this.A.length,this.a)};l.Z=function(){return uf(this.A,0,this.A.length,this.a)};
l.Kc=function(b){var c=[];c.length=wf(this.A,0,this.A.length,this.a,b,c,0);b=new yf(null);zf(b,"XY",c);return b};l.V=function(){return"LinearRing"};l.ma=function(b,c){b?(jf(this,c,b,1),this.A||(this.A=[]),this.A.length=sf(this.A,0,b,this.a),this.s()):zf(this,"XY",null)};function zf(b,c,d){hf(b,c,d);b.s()};function D(b,c){ff.call(this);this.ma(b,c)}y(D,ff);l=D.prototype;l.clone=function(){var b=new D(null);b.ba(this.b,this.A.slice());return b};l.mb=function(b,c,d,e){var f=this.A;b=Xa(b,c,f[0],f[1]);if(b<e){e=this.a;for(c=0;c<e;++c)d[c]=f[c];d.length=e;return b}return e};l.Z=function(){return this.A?this.A.slice():[]};l.Yd=function(b){return ae(this.A,b)};l.V=function(){return"Point"};l.Da=function(b){return Yd(b,this.A[0],this.A[1])};
l.ma=function(b,c){b?(jf(this,c,b,0),this.A||(this.A=[]),this.A.length=rf(this.A,b),this.s()):this.ba("XY",null)};l.ba=function(b,c){hf(this,b,c);this.s()};function Af(b,c,d,e,f){return!fe(f,function(f){return!Bf(b,c,d,e,f[0],f[1])})}function Bf(b,c,d,e,f,g){for(var h=!1,k=b[d-e],m=b[d-e+1];c<d;c+=e){var n=b[c],p=b[c+1];m>g!=p>g&&f<(n-k)*(g-m)/(p-m)+k&&(h=!h);k=n;m=p}return h}function Cf(b,c,d,e,f,g){if(0===d.length||!Bf(b,c,d[0],e,f,g))return!1;var h;c=1;for(h=d.length;c<h;++c)if(Bf(b,d[c-1],d[c],e,f,g))return!1;return!0};function Df(b,c,d,e,f,g,h){var k,m,n,p,q,r=f[g+1],t=[],x=d[0];n=b[x-e];q=b[x-e+1];for(k=c;k<x;k+=e){p=b[k];m=b[k+1];if(r<=q&&m<=r||q<=r&&r<=m)n=(r-q)/(m-q)*(p-n)+n,t.push(n);n=p;q=m}x=NaN;q=-Infinity;t.sort();n=t[0];k=1;for(m=t.length;k<m;++k){p=t[k];var z=Math.abs(p-n);z>q&&(n=(n+p)/2,Cf(b,c,d,e,n,r)&&(x=n,q=z));n=p}isNaN(x)&&(x=f[g]);return h?(h.push(x,r),h):[x,r]};function Ef(b,c,d,e,f,g){for(var h=[b[c],b[c+1]],k=[],m;c+e<d;c+=e){k[0]=b[c+e];k[1]=b[c+e+1];if(m=f.call(g,h,k))return m;h[0]=k[0];h[1]=k[1]}return!1};function Ff(b,c,d,e,f){var g=ce(Qd(),b,c,d,e);return re(f,g)?Zd(f,g)||g[0]>=f[0]&&g[2]<=f[2]||g[1]>=f[1]&&g[3]<=f[3]?!0:Ef(b,c,d,e,function(b,c){var d=!1,e=$d(f,b),g=$d(f,c);if(1===e||1===g)d=!0;else{var q=f[0],r=f[1],t=f[2],x=f[3],z=c[0],B=c[1],A=(B-b[1])/(z-b[0]);g&2&&!(e&2)&&(d=z-(B-x)/A,d=d>=q&&d<=t);d||!(g&4)||e&4||(d=B-(z-t)*A,d=d>=r&&d<=x);d||!(g&8)||e&8||(d=z-(B-r)/A,d=d>=q&&d<=t);d||!(g&16)||e&16||(d=B-(z-q)*A,d=d>=r&&d<=x)}return d}):!1}
function Gf(b,c,d,e,f){var g=d[0];if(!(Ff(b,c,g,e,f)||Bf(b,c,g,e,f[0],f[1])||Bf(b,c,g,e,f[0],f[3])||Bf(b,c,g,e,f[2],f[1])||Bf(b,c,g,e,f[2],f[3])))return!1;if(1===d.length)return!0;c=1;for(g=d.length;c<g;++c)if(Af(b,d[c-1],d[c],e,f))return!1;return!0};function Hf(b,c,d,e){for(var f=0,g=b[d-e],h=b[d-e+1];c<d;c+=e)var k=b[c],m=b[c+1],f=f+(k-g)*(m+h),g=k,h=m;return 0<f}function If(b,c,d,e){var f=0;e=void 0!==e?e:!1;var g,h;g=0;for(h=c.length;g<h;++g){var k=c[g],f=Hf(b,f,k,d);if(0===g){if(e&&f||!e&&!f)return!1}else if(e&&!f||!e&&f)return!1;f=k}return!0}
function Jf(b,c,d,e,f){f=void 0!==f?f:!1;var g,h;g=0;for(h=d.length;g<h;++g){var k=d[g],m=Hf(b,c,k,e);if(0===g?f&&m||!f&&!m:f&&!m||!f&&m)for(var m=b,n=k,p=e;c<n-p;){var q;for(q=0;q<p;++q){var r=m[c+q];m[c+q]=m[n-p+q];m[n-p+q]=r}c+=p;n-=p}c=k}return c}function Kf(b,c,d,e){var f=0,g,h;g=0;for(h=c.length;g<h;++g)f=Jf(b,f,c[g],d,e);return f};function E(b,c){ff.call(this);this.g=[];this.C=-1;this.G=null;this.T=this.S=this.U=-1;this.l=null;this.ma(b,c)}y(E,ff);l=E.prototype;l.oj=function(b){this.A?nb(this.A,b.ja()):this.A=b.ja().slice();this.g.push(this.A.length);this.s()};l.clone=function(){var b=new E(null);b.ba(this.b,this.A.slice(),this.g.slice());return b};
l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;this.S!=this.c&&(this.U=Math.sqrt(of(this.A,0,this.g,this.a,0)),this.S=this.c);return qf(this.A,0,this.g,this.a,this.U,!0,b,c,d,e)};l.rc=function(b,c){return Cf(this.ac(),0,this.g,this.a,b,c)};l.gm=function(){return lf(this.ac(),0,this.g,this.a)};l.Z=function(b){var c;void 0!==b?(c=this.ac().slice(),Jf(c,0,this.g,this.a,b)):c=this.A;return vf(c,0,this.g,this.a)};l.Ab=function(){return this.g};
function Lf(b){if(b.C!=b.c){var c=oe(b.J());b.G=Df(b.ac(),0,b.g,b.a,c,0);b.C=b.c}return b.G}l.Rj=function(){return new D(Lf(this))};l.Wj=function(){return this.g.length};l.Jg=function(b){if(0>b||this.g.length<=b)return null;var c=new yf(null);zf(c,this.b,this.A.slice(0===b?0:this.g[b-1],this.g[b]));return c};l.de=function(){var b=this.b,c=this.A,d=this.g,e=[],f=0,g,h;g=0;for(h=d.length;g<h;++g){var k=d[g],m=new yf(null);zf(m,b,c.slice(f,k));e.push(m);f=k}return e};
l.ac=function(){if(this.T!=this.c){var b=this.A;If(b,this.g,this.a)?this.l=b:(this.l=b.slice(),this.l.length=Jf(this.l,0,this.g,this.a));this.T=this.c}return this.l};l.Kc=function(b){var c=[],d=[];c.length=xf(this.A,0,this.g,this.a,Math.sqrt(b),c,0,d);b=new E(null);b.ba("XY",c,d);return b};l.V=function(){return"Polygon"};l.Da=function(b){return Gf(this.ac(),0,this.g,this.a,b)};
l.ma=function(b,c){if(b){jf(this,c,b,2);this.A||(this.A=[]);var d=tf(this.A,0,b,this.a,this.g);this.A.length=0===d.length?0:d[d.length-1];this.s()}else this.ba("XY",null,this.g)};l.ba=function(b,c,d){hf(this,b,c);this.g=d;this.s()};function Mf(b,c,d,e){var f=e?e:32;e=[];var g;for(g=0;g<f;++g)nb(e,b.offset(c,d,2*Math.PI*g/f));e.push(e[0],e[1]);b=new E(null);b.ba("XY",e,[e.length]);return b}
function Nf(b){var c=b[0],d=b[1],e=b[2];b=b[3];c=[c,d,c,b,e,b,e,d,c,d];d=new E(null);d.ba("XY",c,[c.length]);return d}function Of(b,c,d){var e=c?c:32,f=b.sa();c=b.b;for(var g=new E(null,c),e=f*(e+1),f=[],h=0;h<e;h++)f[h]=0;g.ba(c,f,[f.length]);Pf(g,b.yd(),b.Cf(),d);return g}function Pf(b,c,d,e){var f=b.ja(),g=b.b,h=b.sa(),k=b.Ab(),m=f.length/h-1;e=e?e:0;for(var n,p,q=0;q<=m;++q)p=q*h,n=e+2*rd(q,m)*Math.PI/m,f[p]=c[0]+d*Math.cos(n),f[p+1]=c[1]+d*Math.sin(n);b.ba(g,f,k)};function Qf(b){kd.call(this);b=b||{};this.b=[0,0];var c={};c.center=void 0!==b.center?b.center:null;this.j=Xe(b.projection);var d,e,f,g=void 0!==b.minZoom?b.minZoom:0;d=void 0!==b.maxZoom?b.maxZoom:28;var h=void 0!==b.zoomFactor?b.zoomFactor:2;if(void 0!==b.resolutions)d=b.resolutions,e=d[0],f=d[d.length-1],d=zb(d);else{e=Xe(b.projection);f=e.J();var k=(f?Math.max(me(f),ne(f)):360*Ee.degrees/Ee[e.c])/256/Math.pow(2,0),m=k/Math.pow(2,28);e=b.maxResolution;void 0!==e?g=0:e=k/Math.pow(h,g);f=b.minResolution;
void 0===f&&(f=void 0!==b.maxZoom?void 0!==b.maxResolution?e/Math.pow(h,d):k/Math.pow(h,d):m);d=g+Math.floor(Math.log(e/f)/Math.log(h));f=e/Math.pow(h,d-g);d=Ab(h,e,d-g)}this.a=e;this.f=f;this.g=g;g=void 0!==b.extent?Za(b.extent):$a;(void 0!==b.enableRotation?b.enableRotation:1)?(e=b.constrainRotation,e=void 0===e||!0===e?Eb():!1===e?Cb:ja(e)?Db(e):Cb):e=Bb;this.i=new Fb(g,d,e);void 0!==b.resolution?c.resolution=b.resolution:void 0!==b.zoom&&(c.resolution=this.constrainResolution(this.a,b.zoom-this.g));
c.rotation=void 0!==b.rotation?b.rotation:0;this.I(c)}y(Qf,kd);l=Qf.prototype;l.Zd=function(b){return this.i.center(b)};l.constrainResolution=function(b,c,d){return this.i.resolution(b,c||0,d||0)};l.constrainRotation=function(b,c){return this.i.rotation(b,c||0)};l.Oa=function(){return this.get("center")};l.Zc=function(b){var c=this.Oa(),d=this.aa(),e=this.Ea();return pe(c,d,e,b)};l.Ol=function(){return this.j};l.aa=function(){return this.get("resolution")};
function Rf(b){var c=b.a,d=Math.log(c/b.f)/Math.log(2);return function(b){return c/Math.pow(2,b*d)}}l.Ea=function(){return this.get("rotation")};function Sf(b){var c=b.a,d=Math.log(c/b.f)/Math.log(2);return function(b){return Math.log(c/b)/Math.log(2)/d}}function Tf(b){var c=b.Oa(),d=b.j,e=b.aa();b=b.Ea();return{center:[Math.round(c[0]/e)*e,Math.round(c[1]/e)*e],projection:void 0!==d?d:null,resolution:e,rotation:b}}
l.tf=function(){var b,c=this.aa();if(void 0!==c){var d,e=0;do{d=this.constrainResolution(this.a,e);if(d==c){b=e;break}++e}while(d>this.f)}return void 0!==b?this.g+b:b};
l.lf=function(b,c,d){b instanceof ff||(b=Nf(b));var e=d||{};d=void 0!==e.padding?e.padding:[0,0,0,0];var f=void 0!==e.constrainResolution?e.constrainResolution:!0,g=void 0!==e.nearest?e.nearest:!1,h;void 0!==e.minResolution?h=e.minResolution:void 0!==e.maxZoom?h=this.constrainResolution(this.a,e.maxZoom-this.g,0):h=0;var k=b.ja(),m=this.Ea(),e=Math.cos(-m),m=Math.sin(-m),n=Infinity,p=Infinity,q=-Infinity,r=-Infinity;b=b.sa();for(var t=0,x=k.length;t<x;t+=b)var z=k[t]*e-k[t+1]*m,B=k[t]*m+k[t+1]*e,
n=Math.min(n,z),p=Math.min(p,B),q=Math.max(q,z),r=Math.max(r,B);k=[n,p,q,r];c=[c[0]-d[1]-d[3],c[1]-d[0]-d[2]];c=Math.max(me(k)/c[0],ne(k)/c[1]);c=isNaN(c)?h:Math.max(c,h);f&&(h=this.constrainResolution(c,0,0),!g&&h<c&&(h=this.constrainResolution(h,-1,0)),c=h);this.Ub(c);m=-m;g=(n+q)/2+(d[1]-d[3])/2*c;d=(p+r)/2+(d[0]-d[2])/2*c;this.Ia([g*e-d*m,d*e+g*m])};
l.tj=function(b,c,d){var e=this.Ea(),f=Math.cos(-e),e=Math.sin(-e),g=b[0]*f-b[1]*e;b=b[1]*f+b[0]*e;var h=this.aa(),g=g+(c[0]/2-d[0])*h;b+=(d[1]-c[1]/2)*h;e=-e;this.Ia([g*f-b*e,b*f+g*e])};function Uf(b){return!!b.Oa()&&void 0!==b.aa()}l.rotate=function(b,c){if(void 0!==c){var d,e=this.Oa();void 0!==e&&(d=[e[0]-c[0],e[1]-c[1]],yd(d,b-this.Ea()),td(d,c));this.Ia(d)}this.ve(b)};l.Ia=function(b){this.set("center",b)};function Vf(b,c){b.b[1]+=c}l.Ub=function(b){this.set("resolution",b)};
l.ve=function(b){this.set("rotation",b)};l.bg=function(b){b=this.constrainResolution(this.a,b-this.g,0);this.Ub(b)};function Wf(b){return Math.pow(b,3)}function Xf(b){return 1-Wf(1-b)}function Yf(b){return 3*b*b-2*b*b*b}function Zf(b){return b}function $f(b){return.5>b?Yf(2*b):1-Yf(2*(b-.5))};function ag(b){var c=b.source,d=b.start?b.start:Date.now(),e=c[0],f=c[1],g=void 0!==b.duration?b.duration:1E3,h=b.easing?b.easing:Yf;return function(b,c){if(c.time<d)return c.animate=!0,c.viewHints[0]+=1,!0;if(c.time<d+g){var n=1-h((c.time-d)/g),p=e-c.viewState.center[0],q=f-c.viewState.center[1];c.animate=!0;c.viewState.center[0]+=n*p;c.viewState.center[1]+=n*q;c.viewHints[0]+=1;return!0}return!1}}
function bg(b){var c=b.rotation?b.rotation:0,d=b.start?b.start:Date.now(),e=void 0!==b.duration?b.duration:1E3,f=b.easing?b.easing:Yf,g=b.anchor?b.anchor:null;return function(b,k){if(k.time<d)return k.animate=!0,k.viewHints[0]+=1,!0;if(k.time<d+e){var m=1-f((k.time-d)/e),m=(c-k.viewState.rotation)*m;k.animate=!0;k.viewState.rotation+=m;if(g){var n=k.viewState.center;n[0]-=g[0];n[1]-=g[1];yd(n,m);td(n,g)}k.viewHints[0]+=1;return!0}return!1}}
function cg(b){var c=b.resolution,d=b.start?b.start:Date.now(),e=void 0!==b.duration?b.duration:1E3,f=b.easing?b.easing:Yf;return function(b,h){if(h.time<d)return h.animate=!0,h.viewHints[0]+=1,!0;if(h.time<d+e){var k=1-f((h.time-d)/e),m=c-h.viewState.resolution;h.animate=!0;h.viewState.resolution+=k*m;h.viewHints[0]+=1;return!0}return!1}};function dg(b,c,d,e){return void 0!==e?(e[0]=b,e[1]=c,e[2]=d,e):[b,c,d]}function fg(b,c,d){return b+"/"+c+"/"+d}function gg(b){var c=b[0],d=Array(c),e=1<<c-1,f,g;for(f=0;f<c;++f)g=48,b[1]&e&&(g+=1),b[2]&e&&(g+=2),d[f]=String.fromCharCode(g),e>>=1;return d.join("")}function hg(b){return fg(b[0],b[1],b[2])};function ig(b,c,d,e){this.a=b;this.f=c;this.c=d;this.b=e}ig.prototype.contains=function(b){return jg(this,b[1],b[2])};function jg(b,c,d){return b.a<=c&&c<=b.f&&b.c<=d&&d<=b.b}function kg(b,c){return b.a==c.a&&b.c==c.c&&b.f==c.f&&b.b==c.b}function lg(b){return b.b-b.c+1}function mg(b){return b.f-b.a+1}function ng(b,c){return b.a<=c.f&&b.f>=c.a&&b.c<=c.b&&b.b>=c.c};function og(b){this.c=b.html;this.a=b.tileRanges?b.tileRanges:null}og.prototype.b=function(){return this.c};function pg(b,c,d){xc.call(this,b,d);this.element=c}y(pg,xc);function qg(b){kd.call(this);this.a=b?b:[];rg(this)}y(qg,kd);l=qg.prototype;l.clear=function(){for(;0<this.$b();)this.pop()};l.yf=function(b){var c,d;c=0;for(d=b.length;c<d;++c)this.push(b[c]);return this};l.forEach=function(b,c){this.a.forEach(b,c)};l.vl=function(){return this.a};l.item=function(b){return this.a[b]};l.$b=function(){return this.get("length")};l.ne=function(b,c){ob(this.a,b,0,c);rg(this);this.o(new pg("add",c,this))};
l.pop=function(){return this.Vf(this.$b()-1)};l.push=function(b){var c=this.a.length;this.ne(c,b);return c};l.remove=function(b){var c=this.a,d,e;d=0;for(e=c.length;d<e;++d)if(c[d]===b)return this.Vf(d)};l.Vf=function(b){var c=this.a[b];ab.splice.call(this.a,b,1);rg(this);this.o(new pg("remove",c,this));return c};l.Po=function(b,c){var d=this.$b();if(b<d)d=this.a[b],this.a[b]=c,this.o(new pg("remove",d,this)),this.o(new pg("add",c,this));else{for(;d<b;++d)this.ne(d,void 0);this.ne(b,c)}};
function rg(b){b.set("length",b.a.length)};var sg=/^#(?:[0-9a-f]{3}){1,2}$/i,tg=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,ug=/^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;function vg(b){return ga(b)?b:wg(b)}function xg(b){if(!ia(b)){var c=b[0];c!=(c|0)&&(c=c+.5|0);var d=b[1];d!=(d|0)&&(d=d+.5|0);var e=b[2];e!=(e|0)&&(e=e+.5|0);b="rgba("+c+","+d+","+e+","+b[3]+")"}return b}
var wg=function(){var b={},c=0;return function(d){var e;if(b.hasOwnProperty(d))e=b[d];else{if(1024<=c){e=0;for(var f in b)0===(e++&3)&&(delete b[f],--c)}var g,h;sg.exec(d)?(h=3==d.length-1?1:2,e=parseInt(d.substr(1+0*h,h),16),f=parseInt(d.substr(1+1*h,h),16),g=parseInt(d.substr(1+2*h,h),16),1==h&&(e=(e<<4)+e,f=(f<<4)+f,g=(g<<4)+g),e=[e,f,g,1]):(h=ug.exec(d))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),h=Number(h[4]),e=[e,f,g,h],e=yg(e,e)):(h=tg.exec(d))?(e=Number(h[1]),f=Number(h[2]),g=Number(h[3]),
e=[e,f,g,1],e=yg(e,e)):e=void 0;b[d]=e;++c}return e}}();function yg(b,c){var d=c||[];d[0]=Ua(b[0]+.5|0,0,255);d[1]=Ua(b[1]+.5|0,0,255);d[2]=Ua(b[2]+.5|0,0,255);d[3]=Ua(b[3],0,1);return d};var zg=!ac||9<=nc;!cc&&!ac||ac&&9<=nc||cc&&lc("1.9.1");ac&&lc("9");function Ag(b,c){this.x=ca(b)?b:0;this.y=ca(c)?c:0}l=Ag.prototype;l.clone=function(){return new Ag(this.x,this.y)};l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};l.scale=function(b,c){var d=ja(c)?c:b;this.x*=b;this.y*=d;return this};function Bg(b,c){this.width=b;this.height=c}l=Bg.prototype;l.clone=function(){return new Bg(this.width,this.height)};l.rj=function(){return this.width*this.height};l.Ma=function(){return!this.rj()};l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(b,c){var d=ja(c)?c:b;this.width*=b;this.height*=d;return this};function Cg(b){return b?new Dg(Eg(b)):ya||(ya=new Dg)}function Fg(b){var c=document;return ia(b)?c.getElementById(b):b}function Gg(b,c){Kb(c,function(c,e){"style"==e?b.style.cssText=c:"class"==e?b.className=c:"for"==e?b.htmlFor=c:Hg.hasOwnProperty(e)?b.setAttribute(Hg[e],c):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?b.setAttribute(e,c):b[e]=c})}
var Hg={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ig(b){b=b.document.documentElement;return new Bg(b.clientWidth,b.clientHeight)}
function Jg(b,c,d){var e=arguments,f=document,g=e[0],h=e[1];if(!zg&&h&&(h.name||h.type)){g=["<",g];h.name&&g.push(' name="',Da(h.name),'"');if(h.type){g.push(' type="',Da(h.type),'"');var k={};Zb(k,h);delete k.type;h=k}g.push(">");g=g.join("")}g=f.createElement(g);h&&(ia(h)?g.className=h:ga(h)?g.className=h.join(" "):Gg(g,h));2<e.length&&Kg(f,g,e,2);return g}
function Kg(b,c,d,e){function f(d){d&&c.appendChild(ia(d)?b.createTextNode(d):d)}for(;e<d.length;e++){var g=d[e];!ha(g)||ma(g)&&0<g.nodeType?f(g):cb(Lg(g)?lb(g):g,f)}}function Mg(b){return document.createElement(b)}function Ng(b,c){Kg(Eg(b),b,arguments,1)}function Og(b){for(var c;c=b.firstChild;)b.removeChild(c)}function Pg(b,c,d){b.insertBefore(c,b.childNodes[d]||null)}function Qg(b){b&&b.parentNode&&b.parentNode.removeChild(b)}function Rg(b,c){var d=c.parentNode;d&&d.replaceChild(b,c)}
function Sg(b){if(ca(b.firstElementChild))b=b.firstElementChild;else for(b=b.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;return b}function Tg(b,c){if(b.contains&&1==c.nodeType)return b==c||b.contains(c);if("undefined"!=typeof b.compareDocumentPosition)return b==c||Boolean(b.compareDocumentPosition(c)&16);for(;c&&b!=c;)c=c.parentNode;return c==b}function Eg(b){return 9==b.nodeType?b:b.ownerDocument||b.document}
function Lg(b){if(b&&"number"==typeof b.length){if(ma(b))return"function"==typeof b.item||"string"==typeof b.item;if(ka(b))return"function"==typeof b.item}return!1}function Dg(b){this.a=b||ba.document||document}Dg.prototype.I=Gg;function Ug(){return!0}
function Vg(b){var c=b.a;b=c.scrollingElement?c.scrollingElement:dc?c.body||c.documentElement:c.documentElement;c=c.parentWindow||c.defaultView;return ac&&lc("10")&&c.pageYOffset!=b.scrollTop?new Ag(b.scrollLeft,b.scrollTop):new Ag(c.pageXOffset||b.scrollLeft,c.pageYOffset||b.scrollTop)}Dg.prototype.appendChild=function(b,c){b.appendChild(c)};Dg.prototype.contains=Tg;function Wg(b){if(b.classList)return b.classList;b=b.className;return ia(b)&&b.match(/\S+/g)||[]}function Xg(b,c){var d;b.classList?d=b.classList.contains(c):(d=Wg(b),d=0<=bb(d,c));return d}function Yg(b,c){b.classList?b.classList.add(c):Xg(b,c)||(b.className+=0<b.className.length?" "+c:c)}function Zg(b,c){b.classList?b.classList.remove(c):Xg(b,c)&&(b.className=db(Wg(b),function(b){return b!=c}).join(" "))}function $g(b,c){Xg(b,c)?Zg(b,c):Yg(b,c)};function ah(b,c,d,e){this.top=b;this.right=c;this.bottom=d;this.left=e}l=ah.prototype;l.clone=function(){return new ah(this.top,this.right,this.bottom,this.left)};l.contains=function(b){return this&&b?b instanceof ah?b.left>=this.left&&b.right<=this.right&&b.top>=this.top&&b.bottom<=this.bottom:b.x>=this.left&&b.x<=this.right&&b.y>=this.top&&b.y<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
l.scale=function(b,c){var d=ja(c)?c:b;this.left*=b;this.right*=b;this.top*=d;this.bottom*=d;return this};function bh(b,c,d,e){this.left=b;this.top=c;this.width=d;this.height=e}l=bh.prototype;l.clone=function(){return new bh(this.left,this.top,this.width,this.height)};l.contains=function(b){return b instanceof bh?this.left<=b.left&&this.left+this.width>=b.left+b.width&&this.top<=b.top&&this.top+this.height>=b.top+b.height:b.x>=this.left&&b.x<=this.left+this.width&&b.y>=this.top&&b.y<=this.top+this.height};
l.distance=function(b){var c=b.x<this.left?this.left-b.x:Math.max(b.x-(this.left+this.width),0);b=b.y<this.top?this.top-b.y:Math.max(b.y-(this.top+this.height),0);return Math.sqrt(c*c+b*b)};l.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};l.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};l.scale=function(b,c){var d=ja(c)?c:b;this.left*=b;this.width*=b;this.top*=d;this.height*=d;return this};function ch(b,c,d){if(ia(c))(c=dh(b,c))&&(b.style[c]=d);else for(var e in c){d=b;var f=c[e],g=dh(d,e);g&&(d.style[g]=f)}}var eh={};function dh(b,c){var d=eh[c];if(!d){var e=Ra(c),d=e;void 0===b.style[e]&&(e=(dc?"Webkit":cc?"Moz":ac?"ms":$b?"O":null)+Ta(e),void 0!==b.style[e]&&(d=e));eh[c]=d}return d}function fh(b,c){var d=Eg(b);return d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))?d[c]||d.getPropertyValue(c)||"":""}
function gh(b,c){return fh(b,c)||(b.currentStyle?b.currentStyle[c]:null)||b.style&&b.style[c]}function hh(b,c,d){var e;c instanceof Ag?(e=c.x,c=c.y):(e=c,c=d);b.style.left=ih(e);b.style.top=ih(c)}function jh(b){var c;try{c=b.getBoundingClientRect()}catch(d){return{left:0,top:0,right:0,bottom:0}}ac&&b.ownerDocument.body&&(b=b.ownerDocument,c.left-=b.documentElement.clientLeft+b.body.clientLeft,c.top-=b.documentElement.clientTop+b.body.clientTop);return c}
function kh(b){var c=Eg(b),d=new Ag(0,0),e;e=c?Eg(c):document;var f;(f=!ac)||(f=9<=nc);e=f||Ug(Cg(e))?e.documentElement:e.body;if(b==e)return d;b=jh(b);c=Vg(Cg(c));d.x=b.left+c.x;d.y=b.top+c.y;return d}function lh(b){if(1==b.nodeType)return b=jh(b),new Ag(b.left,b.top);b=b.changedTouches?b.changedTouches[0]:b;return new Ag(b.clientX,b.clientY)}function ih(b){"number"==typeof b&&(b=b+"px");return b}
function mh(b){var c=nh;if("none"!=gh(b,"display"))return c(b);var d=b.style,e=d.display,f=d.visibility,g=d.position;d.visibility="hidden";d.position="absolute";d.display="inline";b=c(b);d.display=e;d.position=g;d.visibility=f;return b}function nh(b){var c=b.offsetWidth,d=b.offsetHeight,e=dc&&!c&&!d;return ca(c)&&!e||!b.getBoundingClientRect?new Bg(c,d):(b=jh(b),new Bg(b.right-b.left,b.bottom-b.top))}function oh(b){var c=kh(b);b=mh(b);return new bh(c.x,c.y,b.width,b.height)}
function ph(b,c){b.style.display=c?"":"none"}function qh(b){return new Bg(b.offsetWidth,b.offsetHeight)}function rh(b,c,d,e){if(/^\d+px?$/.test(c))return parseInt(c,10);var f=b.style[d],g=b.runtimeStyle[d];b.runtimeStyle[d]=b.currentStyle[d];b.style[d]=c;c=b.style[e];b.style[d]=f;b.runtimeStyle[d]=g;return c}function sh(b,c){var d=b.currentStyle?b.currentStyle[c]:null;return d?rh(b,d,"left","pixelLeft"):0}
function th(b,c){if(ac){var d=sh(b,c+"Left"),e=sh(b,c+"Right"),f=sh(b,c+"Top"),g=sh(b,c+"Bottom");return new ah(f,e,g,d)}d=fh(b,c+"Left");e=fh(b,c+"Right");f=fh(b,c+"Top");g=fh(b,c+"Bottom");return new ah(parseFloat(f),parseFloat(e),parseFloat(g),parseFloat(d))}var uh={thin:2,medium:4,thick:6};function vh(b,c){if("none"==(b.currentStyle?b.currentStyle[c+"Style"]:null))return 0;var d=b.currentStyle?b.currentStyle[c+"Width"]:null;return d in uh?uh[d]:rh(b,d,"left","pixelLeft")}
function wh(b){if(ac&&!(9<=nc)){var c=vh(b,"borderLeft"),d=vh(b,"borderRight"),e=vh(b,"borderTop");b=vh(b,"borderBottom");return new ah(e,d,b,c)}c=fh(b,"borderLeftWidth");d=fh(b,"borderRightWidth");e=fh(b,"borderTopWidth");b=fh(b,"borderBottomWidth");return new ah(parseFloat(e),parseFloat(d),parseFloat(b),parseFloat(c))};function xh(b,c,d){xc.call(this,b);this.map=c;this.frameState=void 0!==d?d:null}y(xh,xc);function yh(b){kd.call(this);this.element=b.element?b.element:null;this.a=this.U=null;this.u=[];this.render=b.render?b.render:wa;b.target&&this.f(b.target)}y(yh,kd);yh.prototype.X=function(){Qg(this.element);yh.ca.X.call(this)};yh.prototype.g=function(){return this.a};
yh.prototype.setMap=function(b){this.a&&Qg(this.element);0<this.u.length&&(this.u.forEach(ad),this.u.length=0);if(this.a=b)(this.U?this.U:b.C).appendChild(this.element),this.render!==wa&&this.u.push(C(b,"postrender",this.render,!1,this)),b.render()};yh.prototype.f=function(b){this.U=Fg(b)};function zh(){this.b=0;this.f={};this.c=this.a=null}l=zh.prototype;l.clear=function(){this.b=0;this.f={};this.c=this.a=null};function Ah(b,c){return b.f.hasOwnProperty(c)}l.forEach=function(b,c){for(var d=this.a;d;)b.call(c,d.zc,d.qe,this),d=d.sb};l.get=function(b){b=this.f[b];if(b===this.c)return b.zc;b===this.a?(this.a=this.a.sb,this.a.gc=null):(b.sb.gc=b.gc,b.gc.sb=b.sb);b.sb=null;b.gc=this.c;this.c=this.c.sb=b;return b.zc};l.nc=function(){return this.b};
l.O=function(){var b=Array(this.b),c=0,d;for(d=this.c;d;d=d.gc)b[c++]=d.qe;return b};l.pc=function(){var b=Array(this.b),c=0,d;for(d=this.c;d;d=d.gc)b[c++]=d.zc;return b};l.pop=function(){var b=this.a;delete this.f[b.qe];b.sb&&(b.sb.gc=null);this.a=b.sb;this.a||(this.c=null);--this.b;return b.zc};l.set=function(b,c){var d={qe:b,sb:null,gc:this.c,zc:c};this.c?this.c.sb=d:this.a=d;this.c=d;this.f[b]=d;++this.b};function Bh(b){zh.call(this);this.g=void 0!==b?b:2048}y(Bh,zh);function Ch(b){return b.nc()>b.g}function Dh(b,c){for(var d,e;Ch(b)&&!(d=b.a.zc,e=d.a[0].toString(),e in c&&c[e].contains(d.a));)b.pop().Ec()};function Eh(b,c){ed.call(this);this.a=b;this.state=c}y(Eh,ed);function Fh(b){b.o("change")}Eh.prototype.tb=function(){return w(this).toString()};Eh.prototype.f=function(){return this.a};function Gh(b){kd.call(this);this.f=He(b.projection);this.j=void 0!==b.attributions?b.attributions:null;this.U=b.logo;this.v=void 0!==b.state?b.state:"ready";this.S=void 0!==b.wrapX?b.wrapX:!1}y(Gh,kd);l=Gh.prototype;l.ze=wa;l.ta=function(){return this.j};l.ra=function(){return this.U};l.ua=function(){return this.f};l.va=function(){return this.v};function Hh(b){return b.S}l.na=function(b){this.j=b;this.s()};function Ih(b,c){b.v=c;b.s()};function Jh(b){this.minZoom=void 0!==b.minZoom?b.minZoom:0;this.a=b.resolutions;this.maxZoom=this.a.length-1;this.b=void 0!==b.origin?b.origin:null;this.g=null;void 0!==b.origins&&(this.g=b.origins);var c=b.extent;void 0===c||this.b||this.g||(this.b=je(c));this.j=null;void 0!==b.tileSizes&&(this.j=b.tileSizes);this.l=void 0!==b.tileSize?b.tileSize:this.j?null:256;this.u=void 0!==c?c:null;this.c=null;void 0!==b.sizes?this.c=b.sizes.map(function(b){return new ig(Math.min(0,b[0]),Math.max(b[0]-1,-1),
Math.min(0,b[1]),Math.max(b[1]-1,-1))},this):c&&Kh(this,c);this.f=[0,0]}var Lh=[0,0,0];function Mh(b,c,d,e,f){f=b.Aa(c,f);for(c=c[0]-1;c>=b.minZoom;){if(d.call(null,c,Nh(b,f,c,e)))return!0;--c}return!1}l=Jh.prototype;l.J=function(){return this.u};l.Kg=function(){return this.maxZoom};l.Lg=function(){return this.minZoom};l.Ca=function(b){return this.b?this.b:this.g[b]};l.aa=function(b){return this.a[b]};l.Bh=function(){return this.a};
function Oh(b,c,d,e){return c[0]<b.maxZoom?(e=b.Aa(c,e),Nh(b,e,c[0]+1,d)):null}function Ph(b,c,d,e){Qh(b,c[0],c[1],d,!1,Lh);var f=Lh[1],g=Lh[2];Qh(b,c[2],c[3],d,!0,Lh);b=Lh[1];c=Lh[2];void 0!==e?(e.a=f,e.f=b,e.c=g,e.b=c):e=new ig(f,b,g,c);return e}function Nh(b,c,d,e){d=b.aa(d);return Ph(b,c,d,e)}function Rh(b,c){var d=b.Ca(c[0]),e=b.aa(c[0]),f=qd(b.Ha(c[0]),b.f);return[d[0]+(c[1]+.5)*f[0]*e,d[1]+(c[2]+.5)*f[1]*e]}
l.Aa=function(b,c){var d=this.Ca(b[0]),e=this.aa(b[0]),f=qd(this.Ha(b[0]),this.f),g=d[0]+b[1]*f[0]*e,d=d[1]+b[2]*f[1]*e;return Td(g,d,g+f[0]*e,d+f[1]*e,c)};l.he=function(b,c,d){return Qh(this,b[0],b[1],c,!1,d)};function Qh(b,c,d,e,f,g){var h=Sh(b,e),k=e/b.aa(h),m=b.Ca(h);b=qd(b.Ha(h),b.f);c=k*Math.floor((c-m[0])/e+(f?.5:0))/b[0];d=k*Math.floor((d-m[1])/e+(f?0:.5))/b[1];f?(c=Math.ceil(c)-1,d=Math.ceil(d)-1):(c=Math.floor(c),d=Math.floor(d));return dg(h,c,d,g)}
l.ie=function(b,c,d){c=this.aa(c);return Qh(this,b[0],b[1],c,!1,d)};l.Ha=function(b){return this.l?this.l:this.j[b]};function Sh(b,c){var d=yb(b.a,c,0);return Ua(d,b.minZoom,b.maxZoom)}function Kh(b,c){for(var d=b.a.length,e=Array(d),f=b.minZoom;f<d;++f)e[f]=Nh(b,c,f);b.c=e}function Th(b){var c=b.l;if(!c){var c=Uh(b),d=Vh(c,void 0,void 0),c=new Jh({extent:c,origin:je(c),resolutions:d,tileSize:void 0});b.l=c}return c}
function Wh(b){var c={};Zb(c,void 0!==b?b:{});void 0===c.extent&&(c.extent=He("EPSG:3857").J());c.resolutions=Vh(c.extent,c.maxZoom,c.tileSize);delete c.maxZoom;return new Jh(c)}function Vh(b,c,d){c=void 0!==c?c:42;var e=ne(b);b=me(b);d=qd(void 0!==d?d:256);d=Math.max(b/d[0],e/d[1]);c+=1;e=Array(c);for(b=0;b<c;++b)e[b]=d/Math.pow(2,b);return e}function Uh(b){b=He(b);var c=b.J();c||(b=180*Ee.degrees/b.Jc(),c=Td(-b,-b,b,b));return c};function Xh(b){Gh.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,state:b.state,wrapX:b.wrapX});this.pa=void 0!==b.opaque?b.opaque:!1;this.D=void 0!==b.tilePixelRatio?b.tilePixelRatio:1;this.tileGrid=void 0!==b.tileGrid?b.tileGrid:null;this.a=new Bh(b.ef);this.b=[0,0]}y(Xh,Gh);l=Xh.prototype;l.sh=function(){return Ch(this.a)};l.th=function(b,c){var d=this.td(b);d&&Dh(d,c)};
function Yh(b,c,d,e,f){c=b.td(c);if(!c)return!1;for(var g=!0,h,k,m=e.a;m<=e.f;++m)for(var n=e.c;n<=e.b;++n)h=b.hb(d,m,n),k=!1,Ah(c,h)&&(h=c.get(h),(k=2===h.state)&&(k=!1!==f(h))),k||(g=!1);return g}l.ce=function(){return 0};l.hb=fg;l.Ga=function(){return this.tileGrid};l.ib=function(b){return this.tileGrid?this.tileGrid:Th(b)};l.td=function(b){var c=this.f;return c&&!Ze(c,b)?null:this.a};l.Nb=function(b,c,d){c=this.ib(d);return pd(qd(c.Ha(b),this.b),this.D,this.b)};
function Zh(b,c,d){var e=void 0!==d?d:b.f;d=b.ib(e);if(b.S&&e.f){var f=c;c=f[0];b=Rh(d,f);e=Uh(e);Xd(e,b)?c=f:(f=me(e),b[0]+=f*Math.ceil((e[0]-b[0])/f),c=d.ie(b,c))}f=c[0];e=c[1];b=c[2];if(d.minZoom>f||f>d.maxZoom)d=!1;else{var g=d.J();d=(d=g?Nh(d,g,f):d.c?d.c[f]:null)?jg(d,e,b):!0}return d?c:null}l.eg=wa;function $h(b,c){xc.call(this,b);this.tile=c}y($h,xc);function ai(b){b=b?b:{};this.C=Mg("UL");this.v=Mg("LI");this.C.appendChild(this.v);ph(this.v,!1);this.b=void 0!==b.collapsed?b.collapsed:!0;this.i=void 0!==b.collapsible?b.collapsible:!0;this.i||(this.b=!1);var c=b.className?b.className:"ol-attribution",d=b.tipLabel?b.tipLabel:"Attributions",e=b.collapseLabel?b.collapseLabel:"\u00bb";this.G=ia(e)?Jg("SPAN",{},e):e;e=b.label?b.label:"i";this.S=ia(e)?Jg("SPAN",{},e):e;d=Jg("BUTTON",{type:"button",title:d},this.i&&!this.b?this.G:this.S);C(d,"click",
this.Rl,!1,this);C(d,["mouseout",Ac],function(){this.blur()},!1);c=Jg("DIV",c+" ol-unselectable ol-control"+(this.b&&this.i?" ol-collapsed":"")+(this.i?"":" ol-uncollapsible"),this.C,d);yh.call(this,{element:c,render:b.render?b.render:bi,target:b.target});this.D=!0;this.l={};this.j={};this.T={}}y(ai,yh);
function bi(b){if(b=b.frameState){var c,d,e,f,g,h,k,m,n,p,q,r=b.layerStatesArray,t=Wb(b.attributions),x={},z=b.viewState.projection;d=0;for(c=r.length;d<c;d++)if(h=r[d].layer.ga())if(p=w(h).toString(),n=h.j)for(e=0,f=n.length;e<f;e++)if(k=n[e],m=w(k).toString(),!(m in t)){if(g=b.usedTiles[p]){var B=h.ib(z);a:{q=k;var A=z;if(q.a){var v=void 0,O=void 0,K=void 0,I=void 0;for(I in g)if(I in q.a)for(var K=g[I],G,v=0,O=q.a[I].length;v<O;++v){G=q.a[I][v];if(ng(G,K)){q=!0;break a}var la=Nh(B,A.J(),parseInt(I,
10)),Fa=mg(la);if(K.a<la.a||K.f>la.f)if(ng(G,new ig(rd(K.a,Fa),rd(K.f,Fa),K.c,K.b))||mg(K)>Fa&&ng(G,la)){q=!0;break a}}q=!1}else q=!0}}else q=!1;q?(m in x&&delete x[m],t[m]=k):x[m]=k}c=[t,x];d=c[0];c=c[1];for(var L in this.l)L in d?(this.j[L]||(ph(this.l[L],!0),this.j[L]=!0),delete d[L]):L in c?(this.j[L]&&(ph(this.l[L],!1),delete this.j[L]),delete c[L]):(Qg(this.l[L]),delete this.l[L],delete this.j[L]);for(L in d)e=Mg("LI"),e.innerHTML=d[L].c,this.C.appendChild(e),this.l[L]=e,this.j[L]=!0;for(L in c)e=
Mg("LI"),e.innerHTML=c[L].c,ph(e,!1),this.C.appendChild(e),this.l[L]=e;L=!Sb(this.j)||!Sb(b.logos);this.D!=L&&(ph(this.element,L),this.D=L);L&&Sb(this.j)?Yg(this.element,"ol-logo-only"):Zg(this.element,"ol-logo-only");var Ba;b=b.logos;L=this.T;for(Ba in L)Ba in b||(Qg(L[Ba]),delete L[Ba]);for(var Sa in b)Sa in L||(Ba=new Image,Ba.src=Sa,d=b[Sa],""===d?d=Ba:(d=Jg("A",{href:d}),d.appendChild(Ba)),this.v.appendChild(d),L[Sa]=d);ph(this.v,!Sb(b))}else this.D&&(ph(this.element,!1),this.D=!1)}l=ai.prototype;
l.Rl=function(b){b.preventDefault();ci(this)};function ci(b){$g(b.element,"ol-collapsed");b.b?Rg(b.G,b.S):Rg(b.S,b.G);b.b=!b.b}l.Ql=function(){return this.i};l.Tl=function(b){this.i!==b&&(this.i=b,$g(this.element,"ol-uncollapsible"),!b&&this.b&&ci(this))};l.Sl=function(b){this.i&&this.b!==b&&ci(this)};l.Pl=function(){return this.b};function di(b){b=b?b:{};var c=b.className?b.className:"ol-rotate",d=b.label?b.label:"\u21e7";this.b=null;ia(d)?this.b=Jg("SPAN","ol-compass",d):(this.b=d,Yg(this.b,"ol-compass"));d=Jg("BUTTON",{"class":c+"-reset",type:"button",title:b.tipLabel?b.tipLabel:"Reset rotation"},this.b);C(d,"click",di.prototype.v,!1,this);c=Jg("DIV",c+" ol-unselectable ol-control",d);yh.call(this,{element:c,render:b.render?b.render:ei,target:b.target});this.i=b.duration?b.duration:250;this.j=void 0!==b.autoHide?b.autoHide:
!0;this.l=void 0;this.j&&Yg(this.element,"ol-hidden")}y(di,yh);di.prototype.v=function(b){b.preventDefault();b=this.a;var c=b.$();if(c){var d=c.Ea();void 0!==d&&(0<this.i&&(d%=2*Math.PI,d<-Math.PI&&(d+=2*Math.PI),d>Math.PI&&(d-=2*Math.PI),b.Pa(bg({rotation:d,duration:this.i,easing:Xf}))),c.ve(0))}};
function ei(b){if(b=b.frameState){b=b.viewState.rotation;if(b!=this.l){var c="rotate("+b+"rad)";if(this.j){var d=this.element;0===b?Yg(d,"ol-hidden"):Zg(d,"ol-hidden")}this.b.style.msTransform=c;this.b.style.webkitTransform=c;this.b.style.transform=c}this.l=b}};function fi(b){b=b?b:{};var c=b.className?b.className:"ol-zoom",d=b.delta?b.delta:1,e=b.zoomOutLabel?b.zoomOutLabel:"\u2212",f=b.zoomOutTipLabel?b.zoomOutTipLabel:"Zoom out",g=Jg("BUTTON",{"class":c+"-in",type:"button",title:b.zoomInTipLabel?b.zoomInTipLabel:"Zoom in"},b.zoomInLabel?b.zoomInLabel:"+");C(g,"click",sa(fi.prototype.j,d),!1,this);e=Jg("BUTTON",{"class":c+"-out",type:"button",title:f},e);C(e,"click",sa(fi.prototype.j,-d),!1,this);c=Jg("DIV",c+" ol-unselectable ol-control",g,e);yh.call(this,
{element:c,target:b.target});this.b=void 0!==b.duration?b.duration:250}y(fi,yh);fi.prototype.j=function(b,c){c.preventDefault();var d=this.a,e=d.$();if(e){var f=e.aa();f&&(0<this.b&&d.Pa(cg({resolution:f,duration:this.b,easing:Xf})),d=e.constrainResolution(f,b),e.Ub(d))}};function gi(b){b=b?b:{};var c=new qg;(void 0!==b.zoom?b.zoom:1)&&c.push(new fi(b.zoomOptions));(void 0!==b.rotate?b.rotate:1)&&c.push(new di(b.rotateOptions));(void 0!==b.attribution?b.attribution:1)&&c.push(new ai(b.attributionOptions));return c};var ii=dc?"webkitfullscreenchange":cc?"mozfullscreenchange":ac?"MSFullscreenChange":"fullscreenchange";function ji(){var b=Cg().a,c=b.body;return!!(c.webkitRequestFullscreen||c.mozRequestFullScreen&&b.mozFullScreenEnabled||c.msRequestFullscreen&&b.msFullscreenEnabled||c.requestFullscreen&&b.fullscreenEnabled)}
function ki(b){b.webkitRequestFullscreen?b.webkitRequestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.msRequestFullscreen?b.msRequestFullscreen():b.requestFullscreen&&b.requestFullscreen()}function li(){var b=Cg().a;return!!(b.webkitIsFullScreen||b.mozFullScreen||b.msFullscreenElement||b.fullscreenElement)};function mi(b){b=b?b:{};this.b=b.className?b.className:"ol-full-screen";var c=b.label?b.label:"\u2194";this.j=ia(c)?document.createTextNode(String(c)):c;c=b.labelActive?b.labelActive:"\u00d7";this.i=ia(c)?document.createTextNode(String(c)):c;c=b.tipLabel?b.tipLabel:"Toggle full-screen";c=Jg("BUTTON",{"class":this.b+"-"+li(),type:"button",title:c},this.j);C(c,"click",this.D,!1,this);C(ba.document,ii,this.l,!1,this);var d=this.b+" ol-unselectable ol-control "+(ji()?"":"ol-unsupported"),c=Jg("DIV",d,
c);yh.call(this,{element:c,target:b.target});this.v=void 0!==b.keys?b.keys:!1}y(mi,yh);mi.prototype.D=function(b){b.preventDefault();ji()&&(b=this.a)&&(li()?(b=Cg().a,b.webkitCancelFullScreen?b.webkitCancelFullScreen():b.mozCancelFullScreen?b.mozCancelFullScreen():b.msExitFullscreen?b.msExitFullscreen():b.exitFullscreen&&b.exitFullscreen()):(b=b.ue(),b=Fg(b),this.v?b.mozRequestFullScreenWithKeys?b.mozRequestFullScreenWithKeys():b.webkitRequestFullscreen?b.webkitRequestFullscreen():ki(b):ki(b)))};
mi.prototype.l=function(){var b=this.b+"-true",c=this.b+"-false",d=Sg(this.element),e=this.a;li()?(Xg(d,c)&&(Zg(d,c),Yg(d,b)),Rg(this.i,this.j)):(Xg(d,b)&&(Zg(d,b),Yg(d,c)),Rg(this.j,this.i));e&&e.Uc()};function ni(){this.b=Jg("DIV","ol-fading-loading");Yg(this.b,"ol-unselectable");for(var b=1;12>=b;b++){var c=Jg("DIV",["ol-loading"+[b],"ol-loading"]);this.b.appendChild(c)}b=this.b;Zg(b,"ol-fading-loading-visible");Yg(b,"ol-fading-loading-hide");yh.call(this,{element:this.b})}y(ni,yh);
ni.prototype.setMap=function(b){ni.ca.setMap.call(this,b);b&&($c(b,"startLoading",function(){},!1,this),C(b,"startLoading",function(){var b=this.b;Zg(b,"ol-fading-loading-hide");Yg(b,"ol-fading-loading-visible");var b=oh(this.b),d=oh(Sg(this.b));hh(this.b,(b.width-d.width)/2,(b.height-d.height)/2)},!1,this),$c(b,"finishLoading",function(){},!1,this),C(b,"finishLoading",function(){var b=this.b;Zg(b,"ol-fading-loading-visible");Yg(b,"ol-fading-loading-hide")},!1,this))};function oi(b){b=b?b:{};var c=Jg("DIV",b.className?b.className:"ol-mouse-position");yh.call(this,{element:c,render:b.render?b.render:pi,target:b.target});C(this,md("projection"),this.Ul,!1,this);b.coordinateFormat&&this.Zh(b.coordinateFormat);b.projection&&this.fh(He(b.projection));this.v=b.undefinedHTML?b.undefinedHTML:"";this.l=c.innerHTML;this.i=this.j=this.b=null}y(oi,yh);
function pi(b){b=b.frameState;b?this.b!=b.viewState.projection&&(this.b=b.viewState.projection,this.j=null):this.b=null;qi(this,this.i)}l=oi.prototype;l.Ul=function(){this.j=null};l.Dg=function(){return this.get("coordinateFormat")};l.eh=function(){return this.get("projection")};l.Lk=function(b){this.i=this.a.be(b.a);qi(this,this.i)};l.Mk=function(){qi(this,null);this.i=null};
l.setMap=function(b){oi.ca.setMap.call(this,b);b&&(b=b.a,this.u.push(C(b,"mousemove",this.Lk,!1,this),C(b,"mouseout",this.Mk,!1,this)))};l.Zh=function(b){this.set("coordinateFormat",b)};l.fh=function(b){this.set("projection",b)};function qi(b,c){var d=b.v;if(c&&b.b){if(!b.j){var e=b.eh();b.j=e?Le(b.b,e):af}if(e=b.a.Fa(c))b.j(e,e),d=(d=b.Dg())?d(e):e.toString()}b.l&&d==b.l||(b.element.innerHTML=d,b.l=d)};function ri(b,c,d){rc.call(this);this.wa=null;this.b=!1;this.j=b;this.g=d;this.a=c||window;this.c=ra(this.f,this)}y(ri,rc);ri.prototype.start=function(){si(this);this.b=!1;var b=ti(this),c=ui(this);b&&!c&&this.a.mozRequestAnimationFrame?(this.wa=C(this.a,"MozBeforePaint",this.c),this.a.mozRequestAnimationFrame(null),this.b=!0):this.wa=b&&c?b.call(this.a,this.c):this.a.setTimeout(ze(this.c),20)};
function si(b){if(null!=b.wa){var c=ti(b),d=ui(b);c&&!d&&b.a.mozRequestAnimationFrame?ad(b.wa):c&&d?d.call(b.a,b.wa):b.a.clearTimeout(b.wa)}b.wa=null}ri.prototype.f=function(){this.b&&this.wa&&ad(this.wa);this.wa=null;this.j.call(this.g,ta())};ri.prototype.X=function(){si(this);ri.ca.X.call(this)};function ti(b){b=b.a;return b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||null}
function ui(b){b=b.a;return b.cancelAnimationFrame||b.cancelRequestAnimationFrame||b.webkitCancelRequestAnimationFrame||b.mozCancelRequestAnimationFrame||b.oCancelRequestAnimationFrame||b.msCancelRequestAnimationFrame||null};function vi(b){ba.setTimeout(function(){throw b;},0)}function wi(b,c){var d=b;c&&(d=ra(b,c));d=xi(d);!ka(ba.setImmediate)||ba.Window&&ba.Window.prototype&&ba.Window.prototype.setImmediate==ba.setImmediate?(yi||(yi=zi()),yi(d)):ba.setImmediate(d)}var yi;
function zi(){var b=ba.MessageChannel;"undefined"===typeof b&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Jb("Presto")&&(b=function(){var b=document.createElement("IFRAME");b.style.display="none";b.src="";document.documentElement.appendChild(b);var c=b.contentWindow,b=c.document;b.open();b.write("");b.close();var d="callImmediate"+Math.random(),e="file:"==c.location.protocol?"*":c.location.protocol+"//"+c.location.host,b=ra(function(b){if(("*"==e||b.origin==e)&&b.data==
d)this.port1.onmessage()},this);c.addEventListener("message",b,!1);this.port1={};this.port2={postMessage:function(){c.postMessage(d,e)}}});if("undefined"!==typeof b&&!Jb("Trident")&&!Jb("MSIE")){var c=new b,d={},e=d;c.port1.onmessage=function(){if(ca(d.next)){d=d.next;var b=d.ug;d.ug=null;b()}};return function(b){e.next={ug:b};e=e.next;c.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(b){var c=document.createElement("SCRIPT");
c.onreadystatechange=function(){c.onreadystatechange=null;c.parentNode.removeChild(c);c=null;b();b=null};document.documentElement.appendChild(c)}:function(b){ba.setTimeout(b,0)}}var xi=ye;function Ai(b,c){this.c={};this.a=[];this.b=0;var d=arguments.length;if(1<d){if(d%2)throw Error("Uneven number of arguments");for(var e=0;e<d;e+=2)this.set(arguments[e],arguments[e+1])}else if(b){b instanceof Ai?(d=b.O(),e=b.pc()):(d=Ob(b),e=Nb(b));for(var f=0;f<d.length;f++)this.set(d[f],e[f])}}l=Ai.prototype;l.nc=function(){return this.b};l.pc=function(){Bi(this);for(var b=[],c=0;c<this.a.length;c++)b.push(this.c[this.a[c]]);return b};l.O=function(){Bi(this);return this.a.concat()};
l.Ma=function(){return 0==this.b};l.clear=function(){this.c={};this.b=this.a.length=0};l.remove=function(b){return Ci(this.c,b)?(delete this.c[b],this.b--,this.a.length>2*this.b&&Bi(this),!0):!1};function Bi(b){if(b.b!=b.a.length){for(var c=0,d=0;c<b.a.length;){var e=b.a[c];Ci(b.c,e)&&(b.a[d++]=e);c++}b.a.length=d}if(b.b!=b.a.length){for(var f={},d=c=0;c<b.a.length;)e=b.a[c],Ci(f,e)||(b.a[d++]=e,f[e]=1),c++;b.a.length=d}}l.get=function(b,c){return Ci(this.c,b)?this.c[b]:c};
l.set=function(b,c){Ci(this.c,b)||(this.b++,this.a.push(b));this.c[b]=c};l.forEach=function(b,c){for(var d=this.O(),e=0;e<d.length;e++){var f=d[e],g=this.get(f);b.call(c,g,f,this)}};l.clone=function(){return new Ai(this)};function Ci(b,c){return Object.prototype.hasOwnProperty.call(b,c)};function Di(){this.a=ta()}new Di;Di.prototype.set=function(b){this.a=b};Di.prototype.reset=function(){this.set(ta())};Di.prototype.get=function(){return this.a};function Ei(b){ed.call(this);this.a=b||window;this.c=C(this.a,"resize",this.f,!1,this);this.b=Ig(this.a||window)}y(Ei,ed);Ei.prototype.X=function(){Ei.ca.X.call(this);this.c&&(ad(this.c),this.c=null);this.b=this.a=null};Ei.prototype.f=function(){var b=Ig(this.a||window),c=this.b;b==c||b&&c&&b.width==c.width&&b.height==c.height||(this.b=b,this.o("resize"))};function Fi(b,c,d,e,f){if(!(ac||bc||dc&&lc("525")))return!0;if(ec&&f)return Gi(b);if(f&&!e)return!1;ja(c)&&(c=Hi(c));if(!d&&(17==c||18==c||ec&&91==c))return!1;if((dc||bc)&&e&&d)switch(b){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(ac&&e&&c==b)return!1;switch(b){case 13:return!0;case 27:return!(dc||bc)}return Gi(b)}
function Gi(b){if(48<=b&&57>=b||96<=b&&106>=b||65<=b&&90>=b||(dc||bc)&&0==b)return!0;switch(b){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Hi(b){if(cc)b=Ii(b);else if(ec&&dc)a:switch(b){case 93:b=91;break a}return b}
function Ii(b){switch(b){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return b}};function Ji(b,c){ed.call(this);b&&Ki(this,b,c)}y(Ji,ed);l=Ji.prototype;l.ud=null;l.oe=null;l.vf=null;l.pe=null;l.jb=-1;l.Zb=-1;l.df=!1;
var Li={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Mi={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Ni=ac||bc||dc&&lc("525"),Oi=ec&&cc;
Ji.prototype.a=function(b){if(dc||bc)if(17==this.jb&&!b.B||18==this.jb&&!b.c||ec&&91==this.jb&&!b.v)this.Zb=this.jb=-1;-1==this.jb&&(b.B&&17!=b.j?this.jb=17:b.c&&18!=b.j?this.jb=18:b.v&&91!=b.j&&(this.jb=91));Ni&&!Fi(b.j,this.jb,b.f,b.B,b.c)?this.handleEvent(b):(this.Zb=Hi(b.j),Oi&&(this.df=b.c))};Ji.prototype.c=function(b){this.Zb=this.jb=-1;this.df=b.c};
Ji.prototype.handleEvent=function(b){var c=b.a,d,e,f=c.altKey;ac&&"keypress"==b.type?(d=this.Zb,e=13!=d&&27!=d?c.keyCode:0):(dc||bc)&&"keypress"==b.type?(d=this.Zb,e=0<=c.charCode&&63232>c.charCode&&Gi(d)?c.charCode:0):$b&&!dc?(d=this.Zb,e=Gi(d)?c.keyCode:0):(d=c.keyCode||this.Zb,e=c.charCode||0,Oi&&(f=this.df),ec&&63==e&&224==d&&(d=191));var g=d=Hi(d),h=c.keyIdentifier;d?63232<=d&&d in Li?g=Li[d]:25==d&&b.f&&(g=9):h&&h in Mi&&(g=Mi[h]);this.jb=g;b=new Pi(g,e,0,c);b.c=f;this.o(b)};
function Ki(b,c,d){b.pe&&Qi(b);b.ud=c;b.oe=C(b.ud,"keypress",b,d);b.vf=C(b.ud,"keydown",b.a,d,b);b.pe=C(b.ud,"keyup",b.c,d,b)}function Qi(b){b.oe&&(ad(b.oe),ad(b.vf),ad(b.pe),b.oe=null,b.vf=null,b.pe=null);b.ud=null;b.jb=-1;b.Zb=-1}Ji.prototype.X=function(){Ji.ca.X.call(this);Qi(this)};function Pi(b,c,d,e){Cc.call(this,e);this.type="key";this.j=b;this.u=c}y(Pi,Cc);function Ri(b,c){ed.call(this);var d=this.a=b;(d=ma(d)&&1==d.nodeType?this.a:this.a?this.a.body:null)&&gh(d,"direction");this.c=C(this.a,cc?"DOMMouseScroll":"mousewheel",this,c)}y(Ri,ed);
Ri.prototype.handleEvent=function(b){var c=0,d=0;b=b.a;if("mousewheel"==b.type){c=1;if(ac||dc&&(fc||lc("532.0")))c=40;d=Si(-b.wheelDelta,c);c=ca(b.wheelDeltaX)?Si(-b.wheelDeltaY,c):d}else d=b.detail,100<d?d=3:-100>d&&(d=-3),ca(b.axis)&&b.axis===b.HORIZONTAL_AXIS||(c=d);ja(this.b)&&(c=Math.min(Math.max(c,-this.b),this.b));d=new Ti(d,b,0,c);this.o(d)};function Si(b,c){return dc&&(ec||gc)&&0!=b%c?b:b/c}Ri.prototype.X=function(){Ri.ca.X.call(this);ad(this.c);this.c=null};
function Ti(b,c,d,e){Cc.call(this,c);this.type="mousewheel";this.detail=b;this.D=e}y(Ti,Cc);function Ui(b,c,d){xc.call(this,b);this.a=c;b=d?d:{};this.buttons=Vi(b);this.pressure=Wi(b,this.buttons);this.bubbles="bubbles"in b?b.bubbles:!1;this.cancelable="cancelable"in b?b.cancelable:!1;this.view="view"in b?b.view:null;this.detail="detail"in b?b.detail:null;this.screenX="screenX"in b?b.screenX:0;this.screenY="screenY"in b?b.screenY:0;this.clientX="clientX"in b?b.clientX:0;this.clientY="clientY"in b?b.clientY:0;this.button="button"in b?b.button:0;this.relatedTarget="relatedTarget"in b?b.relatedTarget:
null;this.pointerId="pointerId"in b?b.pointerId:0;this.width="width"in b?b.width:0;this.height="height"in b?b.height:0;this.pointerType="pointerType"in b?b.pointerType:"";this.isPrimary="isPrimary"in b?b.isPrimary:!1;c.preventDefault&&(this.preventDefault=function(){c.preventDefault()})}y(Ui,xc);function Vi(b){if(b.buttons||Xi)b=b.buttons;else switch(b.which){case 1:b=1;break;case 2:b=4;break;case 3:b=2;break;default:b=0}return b}
function Wi(b,c){var d=0;b.pressure?d=b.pressure:d=c?.5:0;return d}var Xi=!1;try{Xi=1===(new MouseEvent("click",{buttons:1})).buttons}catch(b){};function Yi(b,c){var d=Mg("CANVAS");b&&(d.width=b);c&&(d.height=c);return d.getContext("2d")}
var Zi=function(){var b;return function(){if(void 0===b)if(ba.getComputedStyle){var c=Mg("P"),d,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(c);for(var f in e)f in c.style&&(c.style[f]="translate(1px,1px)",d=ba.getComputedStyle(c).getPropertyValue(e[f]));Qg(c);b=d&&"none"!==d}else b=!1;return b}}(),$i=function(){var b;return function(){if(void 0===b)if(ba.getComputedStyle){var c=
Mg("P"),d,e={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.appendChild(c);for(var f in e)f in c.style&&(c.style[f]="translate3d(1px,1px,1px)",d=ba.getComputedStyle(c).getPropertyValue(e[f]));Qg(c);b=d&&"none"!==d}else b=!1;return b}}();function aj(b,c){var d=b.style;d.WebkitTransform=c;d.MozTransform=c;d.a=c;d.msTransform=c;d.transform=c;ac&&lc("9.0")&&(b.style.transformOrigin="0 0")}
function bj(b,c){var d;if($i()){var e=Array(16);for(d=0;16>d;++d)e[d]=c[d].toFixed(6);aj(b,"matrix3d("+e.join(",")+")")}else if(Zi()){var e=[c[0],c[1],c[4],c[5],c[12],c[13]],f=Array(6);for(d=0;6>d;++d)f[d]=e[d].toFixed(6);aj(b,"matrix("+f.join(",")+")")}else b.style.left=Math.round(c[12])+"px",b.style.top=Math.round(c[13])+"px"};var cj=["experimental-webgl","webgl","webkit-3d","moz-webgl"];function dj(b,c){var d,e,f=cj.length;for(e=0;e<f;++e)try{if(d=b.getContext(cj[e],c))return d}catch(g){}return null};var ej,fj=ba.devicePixelRatio||1,gj=!1,hj=function(){if(!("HTMLCanvasElement"in ba))return!1;try{var b=Yi();return b?(void 0!==b.setLineDash&&(gj=!0),!0):!1}catch(c){return!1}}(),ij="DeviceOrientationEvent"in ba,jj="geolocation"in ba.navigator,kj="ontouchstart"in ba,lj="PointerEvent"in ba,mj=!!ba.navigator.msPointerEnabled,nj=!1,oj,pj=[];if("WebGLRenderingContext"in ba)try{var qj=dj(Mg("CANVAS"),{failIfMajorPerformanceCaveat:!0});qj&&(nj=!0,oj=qj.getParameter(qj.MAX_TEXTURE_SIZE),pj=qj.getSupportedExtensions())}catch(b){}
ej=nj;va=pj;ua=oj;function rj(b,c){this.a=b;this.g=c};function sj(b){rj.call(this,b,{mousedown:this.hl,mousemove:this.il,mouseup:this.ll,mouseover:this.kl,mouseout:this.jl});this.c=b.c;this.b=[]}y(sj,rj);function tj(b,c){for(var d=b.b,e=c.clientX,f=c.clientY,g=0,h=d.length,k;g<h&&(k=d[g]);g++){var m=Math.abs(f-k[1]);if(25>=Math.abs(e-k[0])&&25>=m)return!0}return!1}function uj(b){var c=vj(b,b.a),d=c.preventDefault;c.preventDefault=function(){b.preventDefault();d()};c.pointerId=1;c.isPrimary=!0;c.pointerType="mouse";return c}l=sj.prototype;
l.hl=function(b){if(!tj(this,b)){(1).toString()in this.c&&this.cancel(b);var c=uj(b);this.c[(1).toString()]=b;wj(this.a,xj,c,b)}};l.il=function(b){if(!tj(this,b)){var c=uj(b);wj(this.a,yj,c,b)}};l.ll=function(b){if(!tj(this,b)){var c=this.c[(1).toString()];c&&c.button===b.button&&(c=uj(b),wj(this.a,zj,c,b),delete this.c[(1).toString()])}};l.kl=function(b){if(!tj(this,b)){var c=uj(b);Aj(this.a,c,b)}};l.jl=function(b){if(!tj(this,b)){var c=uj(b);Bj(this.a,c,b)}};
l.cancel=function(b){var c=uj(b);this.a.cancel(c,b);delete this.c[(1).toString()]};function Cj(b){rj.call(this,b,{MSPointerDown:this.ql,MSPointerMove:this.rl,MSPointerUp:this.ul,MSPointerOut:this.sl,MSPointerOver:this.tl,MSPointerCancel:this.pl,MSGotPointerCapture:this.nl,MSLostPointerCapture:this.ol});this.c=b.c;this.b=["","unavailable","touch","pen","mouse"]}y(Cj,rj);function Dj(b,c){var d=c;ja(c.a.pointerType)&&(d=vj(c,c.a),d.pointerType=b.b[c.a.pointerType]);return d}l=Cj.prototype;l.ql=function(b){this.c[b.a.pointerId.toString()]=b;var c=Dj(this,b);wj(this.a,xj,c,b)};
l.rl=function(b){var c=Dj(this,b);wj(this.a,yj,c,b)};l.ul=function(b){var c=Dj(this,b);wj(this.a,zj,c,b);delete this.c[b.a.pointerId.toString()]};l.sl=function(b){var c=Dj(this,b);Bj(this.a,c,b)};l.tl=function(b){var c=Dj(this,b);Aj(this.a,c,b)};l.pl=function(b){var c=Dj(this,b);this.a.cancel(c,b);delete this.c[b.a.pointerId.toString()]};l.ol=function(b){this.a.o(new Ui("lostpointercapture",b,b.a))};l.nl=function(b){this.a.o(new Ui("gotpointercapture",b,b.a))};function Ej(b){rj.call(this,b,{pointerdown:this.bo,pointermove:this.co,pointerup:this.ho,pointerout:this.eo,pointerover:this.fo,pointercancel:this.ao,gotpointercapture:this.tk,lostpointercapture:this.gl})}y(Ej,rj);l=Ej.prototype;l.bo=function(b){Fj(this.a,b)};l.co=function(b){Fj(this.a,b)};l.ho=function(b){Fj(this.a,b)};l.eo=function(b){Fj(this.a,b)};l.fo=function(b){Fj(this.a,b)};l.ao=function(b){Fj(this.a,b)};l.gl=function(b){Fj(this.a,b)};l.tk=function(b){Fj(this.a,b)};function Gj(b,c){rj.call(this,b,{touchstart:this.ip,touchmove:this.hp,touchend:this.gp,touchcancel:this.fp});this.c=b.c;this.i=c;this.b=void 0;this.j=0;this.f=void 0}y(Gj,rj);l=Gj.prototype;l.Vh=function(){this.j=0;this.f=void 0};
function Ij(b,c,d){c=vj(c,d);c.pointerId=d.identifier+2;c.bubbles=!0;c.cancelable=!0;c.detail=b.j;c.button=0;c.buttons=1;c.width=d.webkitRadiusX||d.radiusX||0;c.height=d.webkitRadiusY||d.radiusY||0;c.pressure=d.webkitForce||d.force||.5;c.isPrimary=b.b===d.identifier;c.pointerType="touch";c.clientX=d.clientX;c.clientY=d.clientY;c.screenX=d.screenX;c.screenY=d.screenY;return c}
function Jj(b,c,d){function e(){c.preventDefault()}var f=Array.prototype.slice.call(c.a.changedTouches),g=f.length,h,k;for(h=0;h<g;++h)k=Ij(b,c,f[h]),k.preventDefault=e,d.call(b,c,k)}
l.ip=function(b){var c=b.a.touches,d=Ob(this.c),e=d.length;if(e>=c.length){var f=[],g,h,k;for(g=0;g<e;++g){h=d[g];k=this.c[h];var m;if(!(m=1==h))a:{m=c.length;for(var n=void 0,p=0;p<m;p++)if(n=c[p],n.identifier===h-2){m=!0;break a}m=!1}m||f.push(k.tc)}for(g=0;g<f.length;++g)this.ff(b,f[g])}c=Mb(this.c);if(0===c||1===c&&(1).toString()in this.c)this.b=b.a.changedTouches[0].identifier,void 0!==this.f&&ba.clearTimeout(this.f);Kj(this,b);this.j++;Jj(this,b,this.Xn)};
l.Xn=function(b,c){this.c[c.pointerId]={target:c.target,tc:c,Ch:c.target};var d=this.a;c.bubbles=!0;wj(d,Lj,c,b);d=this.a;c.bubbles=!1;wj(d,Mj,c,b);wj(this.a,xj,c,b)};l.hp=function(b){b.preventDefault();Jj(this,b,this.ml)};l.ml=function(b,c){var d=this.c[c.pointerId];if(d){var e=d.tc,f=d.Ch;wj(this.a,yj,c,b);e&&f!==c.target&&(e.relatedTarget=c.target,c.relatedTarget=f,e.target=f,c.target?(Bj(this.a,e,b),Aj(this.a,c,b)):(c.target=f,c.relatedTarget=null,this.ff(b,c)));d.tc=c;d.Ch=c.target}};
l.gp=function(b){Kj(this,b);Jj(this,b,this.jp)};l.jp=function(b,c){wj(this.a,zj,c,b);this.a.tc(c,b);var d=this.a;c.bubbles=!1;wj(d,Nj,c,b);delete this.c[c.pointerId];c.isPrimary&&(this.b=void 0,this.f=ba.setTimeout(ra(this.Vh,this),200))};l.fp=function(b){Jj(this,b,this.ff)};l.ff=function(b,c){this.a.cancel(c,b);this.a.tc(c,b);var d=this.a;c.bubbles=!1;wj(d,Nj,c,b);delete this.c[c.pointerId];c.isPrimary&&(this.b=void 0,this.f=ba.setTimeout(ra(this.Vh,this),200))};
function Kj(b,c){var d=b.i.b,e=c.a.changedTouches[0];if(b.b===e.identifier){var f=[e.clientX,e.clientY];d.push(f);ba.setTimeout(function(){jb(d,f)},2500)}};function Oj(b){ed.call(this);this.f=b;this.c={};this.b={};this.a=[];lj?Pj(this,new Ej(this)):mj?Pj(this,new Cj(this)):(b=new sj(this),Pj(this,b),kj&&Pj(this,new Gj(this,b)));b=this.a.length;for(var c,d=0;d<b;d++)c=this.a[d],Qj(this,Object.keys(c.g))}y(Oj,ed);function Pj(b,c){var d=Object.keys(c.g);d&&(d.forEach(function(b){var d=c.g[b];d&&(this.b[b]=ra(d,c))},b),b.a.push(c))}Oj.prototype.g=function(b){var c=this.b[b.type];c&&c(b)};
function Qj(b,c){c.forEach(function(b){C(this.f,b,this.g,!1,this)},b)}function Rj(b,c){c.forEach(function(b){$c(this.f,b,this.g,!1,this)},b)}function vj(b,c){for(var d={},e,f=0,g=Sj.length;f<g;f++)e=Sj[f][0],d[e]=b[e]||c[e]||Sj[f][1];return d}Oj.prototype.tc=function(b,c){b.bubbles=!0;wj(this,Tj,b,c)};Oj.prototype.cancel=function(b,c){wj(this,Uj,b,c)};function Bj(b,c,d){b.tc(c,d);var e=c.relatedTarget;e&&Tg(c.target,e)||(c.bubbles=!1,wj(b,Nj,c,d))}
function Aj(b,c,d){c.bubbles=!0;wj(b,Lj,c,d);var e=c.relatedTarget;e&&Tg(c.target,e)||(c.bubbles=!1,wj(b,Mj,c,d))}function wj(b,c,d,e){b.o(new Ui(c,e,d))}function Fj(b,c){b.o(new Ui(c.type,c,c.a))}Oj.prototype.X=function(){for(var b=this.a.length,c,d=0;d<b;d++)c=this.a[d],Rj(this,Object.keys(c.g));Oj.ca.X.call(this)};
var yj="pointermove",xj="pointerdown",zj="pointerup",Lj="pointerover",Tj="pointerout",Mj="pointerenter",Nj="pointerleave",Uj="pointercancel",Sj=[["bubbles",!1],["cancelable",!1],["view",null],["detail",null],["screenX",0],["screenY",0],["clientX",0],["clientY",0],["ctrlKey",!1],["altKey",!1],["shiftKey",!1],["metaKey",!1],["button",0],["relatedTarget",null],["buttons",0],["pointerId",0],["width",0],["height",0],["pressure",0],["tiltX",0],["tiltY",0],["pointerType",""],["hwTimestamp",0],["isPrimary",
!1],["type",""],["target",null],["currentTarget",null],["which",0]];function Vj(b,c,d,e,f){xh.call(this,b,c,f);this.a=d;this.originalEvent=d.a;this.pixel=c.be(this.originalEvent);this.coordinate=c.Fa(this.pixel);this.dragging=void 0!==e?e:!1}y(Vj,xh);Vj.prototype.preventDefault=function(){Vj.ca.preventDefault.call(this);this.a.preventDefault()};Vj.prototype.b=function(){Vj.ca.b.call(this);this.a.b()};function Wj(b,c,d,e,f){Vj.call(this,b,c,d.a,e,f);this.c=d}y(Wj,Vj);
function Xj(b){ed.call(this);this.b=b;this.j=0;this.i=!1;this.c=this.l=this.f=null;b=this.b.a;this.v=0;this.u={};this.g=new Oj(b);this.a=null;this.l=C(this.g,xj,this.Pk,!1,this);this.B=C(this.g,yj,this.Eo,!1,this)}y(Xj,ed);function Yj(b,c){var d;d=new Wj(Zj,b.b,c);b.o(d);0!==b.j?(ba.clearTimeout(b.j),b.j=0,d=new Wj(ak,b.b,c),b.o(d)):b.j=ba.setTimeout(ra(function(){this.j=0;var b=new Wj(bk,this.b,c);this.o(b)},b),250)}
function ck(b,c){c.type==dk||c.type==ek?delete b.u[c.pointerId]:c.type==fk&&(b.u[c.pointerId]=!0);b.v=Mb(b.u)}l=Xj.prototype;l.Pg=function(b){ck(this,b);var c=new Wj(dk,this.b,b);this.o(c);!this.i&&0===b.button&&Yj(this,this.c);0===this.v&&(this.f.forEach(ad),this.f=null,this.i=!1,this.c=null,wc(this.a),this.a=null)};
l.Pk=function(b){ck(this,b);var c=new Wj(fk,this.b,b);this.o(c);this.c=b;this.f||(this.a=new Oj(document),this.f=[C(this.a,gk,this.Hl,!1,this),C(this.a,dk,this.Pg,!1,this),C(this.g,ek,this.Pg,!1,this)])};l.Hl=function(b){if(b.clientX!=this.c.clientX||b.clientY!=this.c.clientY){this.i=!0;var c=new Wj(hk,this.b,b,this.i);this.o(c)}b.preventDefault()};l.Eo=function(b){this.o(new Wj(b.type,this.b,b,!(!this.c||b.clientX==this.c.clientX&&b.clientY==this.c.clientY)))};
l.X=function(){this.B&&(ad(this.B),this.B=null);this.l&&(ad(this.l),this.l=null);this.f&&(this.f.forEach(ad),this.f=null);this.a&&(wc(this.a),this.a=null);this.g&&(wc(this.g),this.g=null);Xj.ca.X.call(this)};var bk="singleclick",Zj="click",ak="dblclick",hk="pointerdrag",gk="pointermove",fk="pointerdown",dk="pointerup",ek="pointercancel",ik={Bp:bk,qp:Zj,rp:ak,up:hk,xp:gk,tp:fk,Ap:dk,zp:"pointerover",yp:"pointerout",vp:"pointerenter",wp:"pointerleave",sp:ek};function jk(b){kd.call(this);var c=Wb(b);c.opacity=void 0!==b.opacity?b.opacity:1;c.visible=void 0!==b.visible?b.visible:!0;c.zIndex=void 0!==b.zIndex?b.zIndex:0;c.maxResolution=void 0!==b.maxResolution?b.maxResolution:Infinity;c.minResolution=void 0!==b.minResolution?b.minResolution:0;this.I(c)}y(jk,kd);
function kk(b){var c=b.Rb(),d=b.sf(),e=b.qb(),f=b.J(),g=b.Sb(),h=b.Pb(),k=b.Qb();return{layer:b,opacity:Ua(c,0,1),S:d,visible:e,rb:!0,extent:f,zIndex:g,maxResolution:h,minResolution:Math.max(k,0)}}l=jk.prototype;l.J=function(){return this.get("extent")};l.Pb=function(){return this.get("maxResolution")};l.Qb=function(){return this.get("minResolution")};l.Rb=function(){return this.get("opacity")};l.qb=function(){return this.get("visible")};l.Sb=function(){return this.get("zIndex")};
l.bc=function(b){this.set("extent",b)};l.jc=function(b){this.set("maxResolution",b)};l.kc=function(b){this.set("minResolution",b)};l.cc=function(b){this.set("opacity",b)};l.dc=function(b){this.set("visible",b)};l.ec=function(b){this.set("zIndex",b)};function lk(){};function mk(b,c,d,e,f,g){xc.call(this,b,c);this.vectorContext=d;this.frameState=e;this.context=f;this.glContext=g}y(mk,xc);function nk(b){var c=Wb(b);delete c.source;jk.call(this,c);this.j=this.v=this.u=null;b.map&&this.setMap(b.map);C(this,md("source"),this.Vk,!1,this);this.wc(b.source?b.source:null)}y(nk,jk);function ok(b,c){return b.visible&&c>=b.minResolution&&c<b.maxResolution}l=nk.prototype;l.pf=function(b){b=b?b:[];b.push(kk(this));return b};l.ga=function(){return this.get("source")||null};l.sf=function(){var b=this.ga();return b?b.v:"undefined"};l.Bm=function(){this.s()};
l.Vk=function(){this.j&&(ad(this.j),this.j=null);var b=this.ga();b&&(this.j=C(b,"change",this.Bm,!1,this));this.s()};l.setMap=function(b){ad(this.u);this.u=null;b||this.s();ad(this.v);this.v=null;b&&(this.u=C(b,"precompose",function(b){var d=kk(this);d.rb=!1;d.zIndex=Infinity;b.frameState.layerStatesArray.push(d);b.frameState.layerStates[w(this)]=d},!1,this),this.v=C(this,"change",b.render,!1,b),this.s())};l.wc=function(b){this.set("source",b)};function pk(b,c,d,e,f){ed.call(this);this.j=f;this.extent=b;this.b=d;this.resolution=c;this.state=e}y(pk,ed);function qk(b){b.o("change")}pk.prototype.J=function(){return this.extent};pk.prototype.aa=function(){return this.resolution};function rk(b,c,d,e,f,g,h,k){Jd(b);0===c&&0===d||Md(b,c,d);1==e&&1==f||Nd(b,e,f);0!==g&&Od(b,g);0===h&&0===k||Md(b,h,k);return b}function sk(b,c){return b[0]==c[0]&&b[1]==c[1]&&b[4]==c[4]&&b[5]==c[5]&&b[12]==c[12]&&b[13]==c[13]}function tk(b,c,d){var e=b[1],f=b[5],g=b[13],h=c[0];c=c[1];d[0]=b[0]*h+b[4]*c+b[12];d[1]=e*h+f*c+g;return d};function uk(b){hd.call(this);this.a=b}y(uk,hd);l=uk.prototype;l.$a=wa;l.sc=function(b,c,d,e){b=b.slice();tk(c.pixelToCoordinateMatrix,b,b);if(this.$a(b,c,we,this))return d.call(e,this.a)};l.ye=ve;l.bd=function(b,c,d){return function(e,f){return Yh(b,c,e,f,function(b){d[e]||(d[e]={});d[e][b.a.toString()]=b})}};l.Fm=function(b){2===b.target.state&&vk(this)};function wk(b,c){var d=c.state;2!=d&&3!=d&&C(c,"change",b.Fm,!1,b);0==d&&(c.load(),d=c.state);return 2==d}
function vk(b){var c=b.a;c.qb()&&"ready"==c.sf()&&b.s()}function xk(b,c){c.sh()&&b.postRenderFunctions.push(sa(function(b,c,f){c=w(b).toString();b.th(f.viewState.projection,f.usedTiles[c])},c))}function yk(b,c){if(c){var d,e,f;e=0;for(f=c.length;e<f;++e)d=c[e],b[w(d).toString()]=d}}function zk(b,c){var d=c.U;void 0!==d&&(ia(d)?b.logos[d]="":ma(d)&&(b.logos[d.src]=d.href))}
function Ak(b,c,d,e){c=w(c).toString();d=d.toString();c in b?d in b[c]?(b=b[c][d],e.a<b.a&&(b.a=e.a),e.f>b.f&&(b.f=e.f),e.c<b.c&&(b.c=e.c),e.b>b.b&&(b.b=e.b)):b[c][d]=e:(b[c]={},b[c][d]=e)}function Bk(b,c,d){return[c*(Math.round(b[0]/c)+d[0]%2/2),c*(Math.round(b[1]/c)+d[1]%2/2)]}
function Ck(b,c,d,e,f,g,h,k,m,n){var p=w(c).toString();p in b.wantedTiles||(b.wantedTiles[p]={});var q=b.wantedTiles[p];b=b.tileQueue;var r=d.minZoom,t,x,z,B,A,v;for(v=h;v>=r;--v)for(x=Nh(d,g,v,x),z=d.aa(v),B=x.a;B<=x.f;++B)for(A=x.c;A<=x.b;++A)h-v<=k?(t=c.Mb(v,B,A,e,f),0==t.state&&(q[hg(t.a)]=!0,t.tb()in b.b||Dk(b,[t,p,Rh(d,t.a),z])),void 0!==m&&m.call(n,t)):c.eg(v,B,A,f)};function Ek(b){this.v=b.opacity;this.C=b.rotateWithView;this.u=b.rotation;this.i=b.scale;this.G=b.snapToPixel}l=Ek.prototype;l.Ce=function(){return this.v};l.fe=function(){return this.C};l.De=function(){return this.u};l.Ee=function(){return this.i};l.ge=function(){return this.G};l.Fe=function(b){this.v=b};l.Ge=function(b){this.u=b};l.He=function(b){this.i=b};function Fk(b){b=b||{};this.g=void 0!==b.anchor?b.anchor:[.5,.5];this.f=null;this.c=void 0!==b.anchorOrigin?b.anchorOrigin:"top-left";this.l=void 0!==b.anchorXUnits?b.anchorXUnits:"fraction";this.B=void 0!==b.anchorYUnits?b.anchorYUnits:"fraction";var c=void 0!==b.crossOrigin?b.crossOrigin:null,d=void 0!==b.img?b.img:null,e=void 0!==b.imgSize?b.imgSize:null,f=b.src;void 0!==f&&0!==f.length||!d||(f=d.src);var g=void 0!==b.src?0:2,h=Gk.Yb(),k=h.get(f,c);k||(k=new Hk(d,f,e,c,g),h.set(f,c,k));this.a=
k;this.ia=void 0!==b.offset?b.offset:[0,0];this.b=void 0!==b.offsetOrigin?b.offsetOrigin:"top-left";this.j=null;this.D=void 0!==b.size?b.size:null;Ek.call(this,{opacity:void 0!==b.opacity?b.opacity:1,rotation:void 0!==b.rotation?b.rotation:0,scale:void 0!==b.scale?b.scale:1,snapToPixel:void 0!==b.snapToPixel?b.snapToPixel:!0,rotateWithView:void 0!==b.rotateWithView?b.rotateWithView:!1})}y(Fk,Ek);l=Fk.prototype;
l.Xb=function(){if(this.f)return this.f;var b=this.g,c=this.Bb();if("fraction"==this.l||"fraction"==this.B){if(!c)return null;b=this.g.slice();"fraction"==this.l&&(b[0]*=c[0]);"fraction"==this.B&&(b[1]*=c[1])}if("top-left"!=this.c){if(!c)return null;b===this.g&&(b=this.g.slice());if("top-right"==this.c||"bottom-right"==this.c)b[0]=-b[0]+c[0];if("bottom-left"==this.c||"bottom-right"==this.c)b[1]=-b[1]+c[1]}return this.f=b};l.fc=function(){return this.a.a};l.qd=function(){return this.a.b};l.Ed=function(){return this.a.c};
l.Be=function(){var b=this.a;if(!b.g)if(b.l){var c=b.b[0],d=b.b[1],e=Yi(c,d);e.fillRect(0,0,c,d);b.g=e.canvas}else b.g=b.a;return b.g};l.Ca=function(){if(this.j)return this.j;var b=this.ia;if("top-left"!=this.b){var c=this.Bb(),d=this.a.b;if(!c||!d)return null;b=b.slice();if("top-right"==this.b||"bottom-right"==this.b)b[0]=d[0]-c[0]-b[0];if("bottom-left"==this.b||"bottom-right"==this.b)b[1]=d[1]-c[1]-b[1]}return this.j=b};l.mn=function(){return this.a.j};l.Bb=function(){return this.D?this.D:this.a.b};
l.xf=function(b,c){return C(this.a,"change",b,!1,c)};l.load=function(){this.a.load()};l.dg=function(b,c){$c(this.a,"change",b,!1,c)};function Hk(b,c,d,e,f){ed.call(this);this.g=null;this.a=b?b:new Image;null!==e&&(this.a.crossOrigin=e);this.f=null;this.c=f;this.b=d;this.j=c;this.l=!1;2==this.c&&Ik(this)}y(Hk,ed);function Ik(b){var c=Yi(1,1);try{c.drawImage(b.a,0,0),c.getImageData(0,0,1,1)}catch(d){b.l=!0}}Hk.prototype.i=function(){this.c=3;this.f.forEach(ad);this.f=null;this.o("change")};
Hk.prototype.B=function(){this.c=2;this.b=[this.a.width,this.a.height];this.f.forEach(ad);this.f=null;Ik(this);this.o("change")};Hk.prototype.load=function(){if(0==this.c){this.c=1;this.f=[Zc(this.a,"error",this.i,!1,this),Zc(this.a,"load",this.B,!1,this)];try{this.a.src=this.j}catch(b){this.i()}}};function Gk(){this.a={};this.c=0}ea(Gk);Gk.prototype.clear=function(){this.a={};this.c=0};Gk.prototype.get=function(b,c){var d=c+":"+b;return d in this.a?this.a[d]:null};
Gk.prototype.set=function(b,c,d){this.a[c+":"+b]=d;++this.c};function Jk(b,c){rc.call(this);this.g=c;this.f={};this.B={}}y(Jk,rc);function Kk(b){var c=b.viewState,d=b.coordinateToPixelMatrix;rk(d,b.size[0]/2,b.size[1]/2,1/c.resolution,-1/c.resolution,-c.rotation,-c.center[0],-c.center[1]);Ld(d,b.pixelToCoordinateMatrix)}l=Jk.prototype;l.X=function(){Kb(this.f,wc);Jk.ca.X.call(this)};
function Lk(){var b=Gk.Yb();if(32<b.c){var c=0,d,e;for(d in b.a){e=b.a[d];var f;if(f=0===(c++&3))Gc(e)?e=gd(e,void 0,void 0):(e=Vc(e),e=!!e&&Oc(e,void 0,void 0)),f=!e;f&&(delete b.a[d],--b.c)}}}
l.Ef=function(b,c,d,e,f,g){function h(b){var c=w(b).toString();if(!(c in p))return p[c]=!0,d.call(e,b,null)}var k,m=c.viewState,n=m.resolution,p={},q=m.projection,m=b;if(q.b){var q=q.J(),r=me(q),t=b[0];if(t<q[0]||t>q[2])m=[t+r*Math.ceil((q[0]-t)/r),b[1]]}q=c.layerStatesArray;for(r=q.length-1;0<=r;--r){var t=q[r],x=t.layer;if(!t.rb||ok(t,n)&&f.call(g,x)){var z=Mk(this,x);x.ga()&&(k=z.$a(Hh(x.ga())?m:b,c,t.rb?d:h,e));if(k)return k}}};
l.oh=function(b,c,d,e,f,g){var h,k=c.viewState.resolution,m=c.layerStatesArray,n;for(n=m.length-1;0<=n;--n){h=m[n];var p=h.layer;if(ok(h,k)&&f.call(g,p)&&(h=Mk(this,p).sc(b,c,d,e)))return h}};l.ph=function(b,c,d,e){return void 0!==this.Ef(b,c,we,this,d,e)};function Mk(b,c){var d=w(c).toString();if(d in b.f)return b.f[d];var e=b.jf(c);b.f[d]=e;b.B[d]=C(e,"change",b.Fk,!1,b);return e}l.Fk=function(){this.g.render()};l.Oe=wa;
l.Jo=function(b,c){for(var d in this.f)if(!(c&&d in c.layerStates)){var e=d,f=this.f[e];delete this.f[e];ad(this.B[e]);delete this.B[e];wc(f)}};function Nk(b,c){for(var d in b.f)if(!(d in c.layerStates)){c.postRenderFunctions.push(ra(b.Jo,b));break}}function tb(b,c){return b.zIndex-c.zIndex};function Ok(b,c){this.i=b;this.g=c;this.a=[];this.c=[];this.b={}}Ok.prototype.clear=function(){this.a.length=0;this.c.length=0;Tb(this.b)};function Pk(b){var c=b.a,d=b.c,e=c[0];1==c.length?(c.length=0,d.length=0):(c[0]=c.pop(),d[0]=d.pop(),Qk(b,0));c=b.g(e);delete b.b[c];return e}function Dk(b,c){var d=b.i(c);Infinity!=d&&(b.a.push(c),b.c.push(d),b.b[b.g(c)]=!0,Rk(b,0,b.a.length-1))}Ok.prototype.nc=function(){return this.a.length};Ok.prototype.Ma=function(){return 0===this.a.length};
function Qk(b,c){for(var d=b.a,e=b.c,f=d.length,g=d[c],h=e[c],k=c;c<f>>1;){var m=2*c+1,n=2*c+2,m=n<f&&e[n]<e[m]?n:m;d[c]=d[m];e[c]=e[m];c=m}d[c]=g;e[c]=h;Rk(b,k,c)}function Rk(b,c,d){var e=b.a;b=b.c;for(var f=e[d],g=b[d];d>c;){var h=d-1>>1;if(b[h]>g)e[d]=e[h],b[d]=b[h],d=h;else break}e[d]=f;b[d]=g}function Sk(b){var c=b.i,d=b.a,e=b.c,f=0,g=d.length,h,k,m;for(k=0;k<g;++k)h=d[k],m=c(h),Infinity==m?delete b.b[b.g(h)]:(e[f]=m,d[f++]=h);d.length=f;e.length=f;for(c=(b.a.length>>1)-1;0<=c;c--)Qk(b,c)};function Tk(b,c){Ok.call(this,function(c){return b.apply(null,c)},function(b){return b[0].tb()});this.l=c;this.f=0}y(Tk,Ok);Tk.prototype.j=function(b){b=b.target;var c=b.state;if(2===c||3===c||4===c)$c(b,"change",this.j,!1,this),--this.f,this.l()};function Uk(b,c,d){for(var e=0,f;b.f<c&&e<d&&0<b.nc();)f=Pk(b)[0],0===f.state&&(C(f,"change",b.j,!1,b),f.load(),++b.f,++e)};function Vk(b,c,d){this.f=b;this.b=c;this.j=d;this.a=[];this.c=this.g=0}function Wk(b,c){var d=b.f,e=b.c,f=b.b-e,g=Math.log(b.b/b.c)/b.f;return ag({source:c,duration:g,easing:function(b){return e*(Math.exp(d*b*g)-1)/f}})};function Xk(b){kd.call(this);this.u=null;this.g(!0);this.handleEvent=b.handleEvent}y(Xk,kd);Xk.prototype.b=function(){return this.get("active")};Xk.prototype.g=function(b){this.set("active",b)};Xk.prototype.setMap=function(b){this.u=b};function Yk(b,c,d,e,f){if(void 0!==d){var g=c.Ea(),h=c.Oa();void 0!==g&&h&&f&&0<f&&(b.Pa(bg({rotation:g,duration:f,easing:Xf})),e&&b.Pa(ag({source:h,duration:f,easing:Xf})));c.rotate(d,e)}}
function Zk(b,c,d,e,f){var g=c.aa();d=c.constrainResolution(g,d,0);$k(b,c,d,e,f)}function $k(b,c,d,e,f){if(d){var g=c.aa(),h=c.Oa();void 0!==g&&h&&d!==g&&f&&0<f&&(b.Pa(cg({resolution:g,duration:f,easing:Xf})),e&&b.Pa(ag({source:h,duration:f,easing:Xf})));if(e){var k;b=c.Oa();f=c.aa();void 0!==b&&void 0!==f&&(k=[e[0]-d*(e[0]-b[0])/f,e[1]-d*(e[1]-b[1])/f]);c.Ia(k)}c.Ub(d)}};function al(b){b=b?b:{};this.a=b.delta?b.delta:1;Xk.call(this,{handleEvent:bl});this.f=b.duration?b.duration:250}y(al,Xk);function bl(b){var c=!1,d=b.a;if(b.type==ak){var c=b.map,e=b.coordinate,d=d.f?-this.a:this.a,f=c.$();Zk(c,f,d,e,this.f);b.preventDefault();c=!0}return!c};function cl(b){b=b.a;return b.c&&!b.l&&b.f}function dl(b){return"pointermove"==b.type}function el(b){return b.type==bk}function fl(b){b=b.a;return!b.c&&!b.l&&!b.f}function gl(b){b=b.a;return!b.c&&!b.l&&b.f}function hl(b){b=b.a.target.tagName;return"INPUT"!==b&&"SELECT"!==b&&"TEXTAREA"!==b}function il(b){return"mouse"==b.c.pointerType};function jl(b){b=b?b:{};Xk.call(this,{handleEvent:b.handleEvent?b.handleEvent:kl});this.Ac=b.handleDownEvent?b.handleDownEvent:ve;this.Bc=b.handleDragEvent?b.handleDragEvent:wa;this.Xc=b.handleMoveEvent?b.handleMoveEvent:wa;this.Ye=b.handleUpEvent?b.handleUpEvent:ve;this.D=!1;this.Y={};this.j=[]}y(jl,Xk);function ll(b){for(var c=b.length,d=0,e=0,f=0;f<c;f++)d+=b[f].clientX,e+=b[f].clientY;return[d/c,e/c]}
function kl(b){if(!(b instanceof Wj))return!0;var c=!1,d=b.type;if(d===fk||d===hk||d===dk)d=b.c,b.type==dk?delete this.Y[d.pointerId]:b.type==fk?this.Y[d.pointerId]=d:d.pointerId in this.Y&&(this.Y[d.pointerId]=d),this.j=Nb(this.Y);this.D&&(b.type==hk?this.Bc(b):b.type==dk&&(this.D=this.Ye(b)));b.type==fk?(this.D=b=this.Ac(b),c=this.xc(b)):b.type==gk&&this.Xc(b);return!c}jl.prototype.xc=ye;function ml(b){jl.call(this,{handleDownEvent:nl,handleDragEvent:pl,handleUpEvent:ql});b=b?b:{};this.a=b.kinetic;this.f=this.i=null;this.v=b.condition?b.condition:fl;this.l=!1}y(ml,jl);function pl(b){var c=ll(this.j);this.a&&this.a.a.push(c[0],c[1],Date.now());if(this.f){var d=this.f[0]-c[0],e=c[1]-this.f[1];b=b.map;var f=b.$(),g=Tf(f),e=d=[d,e],h=g.resolution;e[0]*=h;e[1]*=h;yd(d,g.rotation);td(d,g.center);d=f.Zd(d);b.render();f.Ia(d)}this.f=c}
function ql(b){b=b.map;var c=b.$();if(0===this.j.length){var d;if(d=!this.l&&this.a)if(d=this.a,6>d.a.length)d=!1;else{var e=Date.now()-d.j,f=d.a.length-3;if(d.a[f+2]<e)d=!1;else{for(var g=f-3;0<g&&d.a[g+2]>e;)g-=3;var e=d.a[f+2]-d.a[g+2],h=d.a[f]-d.a[g],f=d.a[f+1]-d.a[g+1];d.g=Math.atan2(f,h);d.c=Math.sqrt(h*h+f*f)/e;d=d.c>d.b}}d&&(d=this.a,d=(d.b-d.c)/d.f,f=this.a.g,g=c.Oa(),this.i=Wk(this.a,g),b.Pa(this.i),g=b.Qa(g),d=b.Fa([g[0]-d*Math.cos(f),g[1]-d*Math.sin(f)]),d=c.Zd(d),c.Ia(d));Vf(c,-1);b.render();
return!1}this.f=null;return!0}function nl(b){if(0<this.j.length&&this.v(b)){var c=b.map,d=c.$();this.f=null;this.D||Vf(d,1);c.render();this.i&&jb(c.S,this.i)&&(d.Ia(b.frameState.viewState.center),this.i=null);this.a&&(b=this.a,b.a.length=0,b.g=0,b.c=0);this.l=1<this.j.length;return!0}return!1}ml.prototype.xc=ve;function rl(b){b=b?b:{};jl.call(this,{handleDownEvent:sl,handleDragEvent:tl,handleUpEvent:ul});this.f=b.condition?b.condition:cl;this.a=void 0;this.i=b.duration?b.duration:250}y(rl,jl);function tl(b){if(il(b)){var c=b.map,d=c.Ta();b=b.pixel;d=Math.atan2(d[1]/2-b[1],b[0]-d[0]/2);if(void 0!==this.a){b=d-this.a;var e=c.$(),f=e.Ea();c.render();Yk(c,e,f-b)}this.a=d}}
function ul(b){if(!il(b))return!0;b=b.map;var c=b.$();Vf(c,-1);var d=c.Ea(),e=this.i,d=c.constrainRotation(d,0);Yk(b,c,d,void 0,e);return!1}function sl(b){return il(b)&&Ec(b.a)&&this.f(b)?(b=b.map,Vf(b.$(),1),b.render(),this.a=void 0,!0):!1}rl.prototype.xc=ve;function vl(b){this.f=null;this.c=document.createElement("div");this.c.style.position="absolute";this.c.className="ol-box "+b;this.b=this.g=this.a=null}y(vl,rc);vl.prototype.X=function(){this.setMap(null);vl.ca.X.call(this)};function wl(b){var c=b.g,d=b.b;b=b.c.style;b.left=Math.min(c[0],d[0])+"px";b.top=Math.min(c[1],d[1])+"px";b.width=Math.abs(d[0]-c[0])+"px";b.height=Math.abs(d[1]-c[1])+"px"}
vl.prototype.setMap=function(b){if(this.a){this.a.G.removeChild(this.c);var c=this.c.style;c.left=c.top=c.width=c.height="inherit"}(this.a=b)&&this.a.G.appendChild(this.c)};function xl(b){var c=b.g,d=b.b,c=[c,[c[0],d[1]],d,[d[0],c[1]]].map(b.a.Fa,b.a);c[4]=c[0].slice();b.f?b.f.ma([c]):b.f=new E([c])}vl.prototype.W=function(){return this.f};function yl(b,c){xc.call(this,b);this.coordinate=c}y(yl,xc);function zl(b){jl.call(this,{handleDownEvent:Al,handleDragEvent:Bl,handleUpEvent:Cl});b=b?b:{};this.f=new vl(b.className||"ol-dragbox");this.a=null;this.v=b.condition?b.condition:we}y(zl,jl);function Bl(b){if(il(b)){var c=this.f;b=b.pixel;c.g=this.a;c.b=b;xl(c);wl(c)}}zl.prototype.W=function(){return this.f.W()};zl.prototype.l=wa;
function Cl(b){if(!il(b))return!0;this.f.setMap(null);var c=b.pixel[0]-this.a[0],d=b.pixel[1]-this.a[1];64<=c*c+d*d&&(this.l(b),this.o(new yl("boxend",b.coordinate)));return!1}function Al(b){if(il(b)&&Ec(b.a)&&this.v(b)){this.a=b.pixel;this.f.setMap(b.map);var c=this.f,d=this.a;c.g=this.a;c.b=d;xl(c);wl(c);this.o(new yl("boxstart",b.coordinate));return!0}return!1};function Dl(b){b=b?b:{};var c=b.condition?b.condition:gl;this.i=void 0!==b.duration?b.duration:200;zl.call(this,{condition:c,className:b.className||"ol-dragzoom"})}y(Dl,zl);Dl.prototype.l=function(){var b=this.u,c=b.$(),d=b.Ta(),e=this.W().J(),d=c.constrainResolution(Math.max(me(e)/d[0],ne(e)/d[1])),f=c.aa(),g=c.Oa();b.Pa(cg({resolution:f,duration:this.i,easing:Xf}));b.Pa(ag({source:g,duration:this.i,easing:Xf}));c.Ia(oe(e));c.Ub(d)};function El(b){Xk.call(this,{handleEvent:Fl});b=b||{};this.a=void 0!==b.condition?b.condition:Be(fl,hl);this.f=void 0!==b.duration?b.duration:100;this.j=void 0!==b.pixelDelta?b.pixelDelta:128}y(El,Xk);
function Fl(b){var c=!1;if("key"==b.type){var d=b.a.j;if(this.a(b)&&(40==d||37==d||39==d||38==d)){var e=b.map,c=e.$(),f=c.aa()*this.j,g=0,h=0;40==d?h=-f:37==d?g=-f:39==d?g=f:h=f;d=[g,h];yd(d,c.Ea());f=this.f;if(g=c.Oa())f&&0<f&&e.Pa(ag({source:g,duration:f,easing:Zf})),e=c.Zd([g[0]+d[0],g[1]+d[1]]),c.Ia(e);b.preventDefault();c=!0}}return!c};function Gl(b){Xk.call(this,{handleEvent:Hl});b=b?b:{};this.f=b.condition?b.condition:hl;this.a=b.delta?b.delta:1;this.j=void 0!==b.duration?b.duration:100}y(Gl,Xk);function Hl(b){var c=!1;if("key"==b.type){var d=b.a.u;if(this.f(b)&&(43==d||45==d)){c=b.map;d=43==d?this.a:-this.a;c.render();var e=c.$();Zk(c,e,d,void 0,this.j);b.preventDefault();c=!0}}return!c};function Il(b){Xk.call(this,{handleEvent:Jl});b=b||{};this.f=0;this.D=void 0!==b.duration?b.duration:250;this.l=void 0!==b.useAnchor?b.useAnchor:!0;this.a=null;this.i=this.j=void 0}y(Il,Xk);function Jl(b){var c=!1;if("mousewheel"==b.type){var c=b.map,d=b.a;this.l&&(this.a=b.coordinate);this.f+=d.D;void 0===this.j&&(this.j=Date.now());d=Math.max(80-(Date.now()-this.j),0);ba.clearTimeout(this.i);this.i=ba.setTimeout(ra(this.v,this,c),d);b.preventDefault();c=!0}return!c}
Il.prototype.v=function(b){var c=Ua(this.f,-1,1),d=b.$();b.render();Zk(b,d,-c,this.a,this.D);this.f=0;this.a=null;this.i=this.j=void 0};Il.prototype.C=function(b){this.l=b;b||(this.a=null)};function Kl(b){jl.call(this,{handleDownEvent:Ll,handleDragEvent:Ml,handleUpEvent:Nl});b=b||{};this.f=null;this.i=void 0;this.a=!1;this.l=0;this.C=void 0!==b.threshold?b.threshold:.3;this.v=void 0!==b.duration?b.duration:250}y(Kl,jl);
function Ml(b){var c=0,d=this.j[0],e=this.j[1],d=Math.atan2(e.clientY-d.clientY,e.clientX-d.clientX);void 0!==this.i&&(c=d-this.i,this.l+=c,!this.a&&Math.abs(this.l)>this.C&&(this.a=!0));this.i=d;b=b.map;d=lh(b.a);e=ll(this.j);e[0]-=d.x;e[1]-=d.y;this.f=b.Fa(e);this.a&&(d=b.$(),e=d.Ea(),b.render(),Yk(b,d,e+c,this.f))}function Nl(b){if(2>this.j.length){b=b.map;var c=b.$();Vf(c,-1);if(this.a){var d=c.Ea(),e=this.f,f=this.v,d=c.constrainRotation(d,0);Yk(b,c,d,e,f)}return!1}return!0}
function Ll(b){return 2<=this.j.length?(b=b.map,this.f=null,this.i=void 0,this.a=!1,this.l=0,this.D||Vf(b.$(),1),b.render(),!0):!1}Kl.prototype.xc=ve;function Ol(b){jl.call(this,{handleDownEvent:Pl,handleDragEvent:Ql,handleUpEvent:Rl});b=b?b:{};this.f=null;this.l=void 0!==b.duration?b.duration:400;this.a=void 0;this.i=1}y(Ol,jl);function Ql(b){var c=1,d=this.j[0],e=this.j[1],f=d.clientX-e.clientX,d=d.clientY-e.clientY,f=Math.sqrt(f*f+d*d);void 0!==this.a&&(c=this.a/f);this.a=f;1!=c&&(this.i=c);b=b.map;var f=b.$(),d=f.aa(),e=lh(b.a),g=ll(this.j);g[0]-=e.x;g[1]-=e.y;this.f=b.Fa(g);b.render();$k(b,f,d*c,this.f)}
function Rl(b){if(2>this.j.length){b=b.map;var c=b.$();Vf(c,-1);var d=c.aa(),e=this.f,f=this.l,d=c.constrainResolution(d,0,this.i-1);$k(b,c,d,e,f);return!1}return!0}function Pl(b){return 2<=this.j.length?(b=b.map,this.f=null,this.a=void 0,this.i=1,this.D||Vf(b.$(),1),b.render(),!0):!1}Ol.prototype.xc=ve;function Sl(b){b=b?b:{};var c=new qg,d=new Vk(-.005,.05,100);(void 0!==b.altShiftDragRotate?b.altShiftDragRotate:1)&&c.push(new rl);(void 0!==b.doubleClickZoom?b.doubleClickZoom:1)&&c.push(new al({delta:b.zoomDelta,duration:b.zoomDuration}));(void 0!==b.dragPan?b.dragPan:1)&&c.push(new ml({kinetic:d}));(void 0!==b.pinchRotate?b.pinchRotate:1)&&c.push(new Kl);(void 0!==b.pinchZoom?b.pinchZoom:1)&&c.push(new Ol({duration:b.zoomDuration}));if(void 0!==b.keyboard?b.keyboard:1)c.push(new El),c.push(new Gl({delta:b.zoomDelta,
duration:b.zoomDuration}));(void 0!==b.mouseWheelZoom?b.mouseWheelZoom:1)&&c.push(new Il({duration:b.zoomDuration}));(void 0!==b.shiftDragZoom?b.shiftDragZoom:1)&&c.push(new Dl({duration:b.zoomDuration}));return c};function Tl(b){var c=b||{};b=Wb(c);delete b.layers;c=c.layers;jk.call(this,b);this.b=[];this.a={};C(this,md("layers"),this.Hk,!1,this);c?ga(c)&&(c=new qg(c.slice())):c=new qg;this.lh(c)}y(Tl,jk);l=Tl.prototype;l.ke=function(){this.qb()&&this.s()};
l.Hk=function(){this.b.forEach(ad);this.b.length=0;var b=this.Pc();this.b.push(C(b,"add",this.Gk,!1,this),C(b,"remove",this.Ik,!1,this));Kb(this.a,function(b){b.forEach(ad)});Tb(this.a);var b=b.a,c,d,e;c=0;for(d=b.length;c<d;c++)e=b[c],this.a[w(e).toString()]=[C(e,"propertychange",this.ke,!1,this),C(e,"change",this.ke,!1,this)];this.s()};l.Gk=function(b){b=b.element;var c=w(b).toString();this.a[c]=[C(b,"propertychange",this.ke,!1,this),C(b,"change",this.ke,!1,this)];this.s()};
l.Ik=function(b){b=w(b.element).toString();this.a[b].forEach(ad);delete this.a[b];this.s()};l.Pc=function(){return this.get("layers")};l.lh=function(b){this.set("layers",b)};
l.pf=function(b){var c=void 0!==b?b:[],d=c.length;this.Pc().forEach(function(b){b.pf(c)});b=kk(this);var e,f;for(e=c.length;d<e;d++)f=c[d],f.opacity*=b.opacity,f.visible=f.visible&&b.visible,f.maxResolution=Math.min(f.maxResolution,b.maxResolution),f.minResolution=Math.max(f.minResolution,b.minResolution),void 0!==b.extent&&(f.extent=void 0!==f.extent?qe(f.extent,b.extent):b.extent);return c};l.sf=function(){return"ready"};function Ul(b){Fe.call(this,{code:b,units:"m",extent:Vl,global:!0,worldExtent:Wl})}y(Ul,Fe);Ul.prototype.getPointResolution=function(b,c){return b/Va(c[1]/6378137)};var Xl=6378137*Math.PI,Vl=[-Xl,-Xl,Xl,Xl],Wl=[-180,-85,180,85],Re="EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function(b){return new Ul(b)});
function Se(b,c,d){var e=b.length;d=1<d?d:2;void 0===c&&(2<d?c=b.slice():c=Array(e));for(var f=0;f<e;f+=d)c[f]=6378137*Math.PI*b[f]/180,c[f+1]=6378137*Math.log(Math.tan(Math.PI*(b[f+1]+90)/360));return c}function Ue(b,c,d){var e=b.length;d=1<d?d:2;void 0===c&&(2<d?c=b.slice():c=Array(e));for(var f=0;f<e;f+=d)c[f]=180*b[f]/(6378137*Math.PI),c[f+1]=360*Math.atan(Math.exp(b[f+1]/6378137))/Math.PI-90;return c};function Yl(b,c){Fe.call(this,{code:b,units:"degrees",extent:Zl,axisOrientation:c,global:!0,worldExtent:Zl})}y(Yl,Fe);Yl.prototype.getPointResolution=function(b){return b};
var Zl=[-180,-90,180,90],Ve=[new Yl("CRS:84"),new Yl("EPSG:4326","neu"),new Yl("urn:ogc:def:crs:EPSG::4326","neu"),new Yl("urn:ogc:def:crs:EPSG:6.6:4326","neu"),new Yl("urn:ogc:def:crs:OGC:1.3:CRS84"),new Yl("urn:ogc:def:crs:OGC:2:84"),new Yl("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new Yl("urn:x-ogc:def:crs:EPSG:4326","neu")];function $l(){Ie(Re);Ie(Ve);Qe()};function am(b){nk.call(this,b?b:{})}y(am,nk);function F(b){b=b?b:{};var c=Wb(b);delete c.preload;delete c.useInterimTilesOnError;nk.call(this,c);this.f(void 0!==b.preload?b.preload:0);this.g(void 0!==b.useInterimTilesOnError?b.useInterimTilesOnError:!0)}y(F,nk);F.prototype.a=function(){return this.get("preload")};F.prototype.f=function(b){this.set("preload",b)};F.prototype.b=function(){return this.get("useInterimTilesOnError")};F.prototype.g=function(b){this.set("useInterimTilesOnError",b)};var bm=[0,0,0,1],cm=[],dm=[0,0,0,1];function em(b){b=b||{};this.a=void 0!==b.color?b.color:null;this.c=void 0}em.prototype.b=function(){return this.a};em.prototype.f=function(b){this.a=b;this.c=void 0};em.prototype.Ib=function(){void 0===this.c&&(this.c="f"+(this.a?xg(this.a):"-"));return this.c};function fm(){this.c=-1};function gm(){this.c=-1;this.c=64;this.a=Array(4);this.g=Array(this.c);this.f=this.b=0;this.reset()}y(gm,fm);gm.prototype.reset=function(){this.a[0]=1732584193;this.a[1]=4023233417;this.a[2]=2562383102;this.a[3]=271733878;this.f=this.b=0};
function hm(b,c,d){d||(d=0);var e=Array(16);if(ia(c))for(var f=0;16>f;++f)e[f]=c.charCodeAt(d++)|c.charCodeAt(d++)<<8|c.charCodeAt(d++)<<16|c.charCodeAt(d++)<<24;else for(f=0;16>f;++f)e[f]=c[d++]|c[d++]<<8|c[d++]<<16|c[d++]<<24;c=b.a[0];d=b.a[1];var f=b.a[2],g=b.a[3],h=0,h=c+(g^d&(f^g))+e[0]+3614090360&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[1]+3905402710&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[2]+606105819&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^
c))+e[3]+3250441966&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[4]+4118548399&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[5]+1200080426&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[6]+2821735955&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[7]+4249261313&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[8]+1770035416&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[9]+2336552879&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+
(d^g&(c^d))+e[10]+4294925233&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[11]+2304563134&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(g^d&(f^g))+e[12]+1804603682&4294967295;c=d+(h<<7&4294967295|h>>>25);h=g+(f^c&(d^f))+e[13]+4254626195&4294967295;g=c+(h<<12&4294967295|h>>>20);h=f+(d^g&(c^d))+e[14]+2792965006&4294967295;f=g+(h<<17&4294967295|h>>>15);h=d+(c^f&(g^c))+e[15]+1236535329&4294967295;d=f+(h<<22&4294967295|h>>>10);h=c+(f^g&(d^f))+e[1]+4129170786&4294967295;c=d+(h<<5&4294967295|
h>>>27);h=g+(d^f&(c^d))+e[6]+3225465664&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[11]+643717713&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[0]+3921069994&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(f^g&(d^f))+e[5]+3593408605&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[10]+38016083&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[15]+3634488961&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[4]+3889429448&4294967295;d=f+(h<<20&4294967295|
h>>>12);h=c+(f^g&(d^f))+e[9]+568446438&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[14]+3275163606&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[3]+4107603335&4294967295;f=g+(h<<14&4294967295|h>>>18);h=d+(g^c&(f^g))+e[8]+1163531501&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(f^g&(d^f))+e[13]+2850285829&4294967295;c=d+(h<<5&4294967295|h>>>27);h=g+(d^f&(c^d))+e[2]+4243563512&4294967295;g=c+(h<<9&4294967295|h>>>23);h=f+(c^d&(g^c))+e[7]+1735328473&4294967295;f=g+(h<<14&4294967295|
h>>>18);h=d+(g^c&(f^g))+e[12]+2368359562&4294967295;d=f+(h<<20&4294967295|h>>>12);h=c+(d^f^g)+e[5]+4294588738&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[8]+2272392833&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[11]+1839030562&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[14]+4259657740&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[1]+2763975236&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[4]+1272893353&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^
c^d)+e[7]+4139469664&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[10]+3200236656&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[13]+681279174&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[0]+3936430074&4294967295;g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[3]+3572445317&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[6]+76029189&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(d^f^g)+e[9]+3654602809&4294967295;c=d+(h<<4&4294967295|h>>>28);h=g+(c^d^f)+e[12]+3873151461&4294967295;
g=c+(h<<11&4294967295|h>>>21);h=f+(g^c^d)+e[15]+530742520&4294967295;f=g+(h<<16&4294967295|h>>>16);h=d+(f^g^c)+e[2]+3299628645&4294967295;d=f+(h<<23&4294967295|h>>>9);h=c+(f^(d|~g))+e[0]+4096336452&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[7]+1126891415&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[14]+2878612391&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[5]+4237533241&4294967295;d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[12]+1700485571&4294967295;c=d+
(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[3]+2399980690&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[10]+4293915773&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[1]+2240044497&4294967295;d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[8]+1873313359&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[15]+4264355552&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[6]+2734768916&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[13]+1309151649&4294967295;
d=f+(h<<21&4294967295|h>>>11);h=c+(f^(d|~g))+e[4]+4149444226&4294967295;c=d+(h<<6&4294967295|h>>>26);h=g+(d^(c|~f))+e[11]+3174756917&4294967295;g=c+(h<<10&4294967295|h>>>22);h=f+(c^(g|~d))+e[2]+718787259&4294967295;f=g+(h<<15&4294967295|h>>>17);h=d+(g^(f|~c))+e[9]+3951481745&4294967295;b.a[0]=b.a[0]+c&4294967295;b.a[1]=b.a[1]+(f+(h<<21&4294967295|h>>>11))&4294967295;b.a[2]=b.a[2]+f&4294967295;b.a[3]=b.a[3]+g&4294967295}
function im(b,c){var d;ca(d)||(d=c.length);for(var e=d-b.c,f=b.g,g=b.b,h=0;h<d;){if(0==g)for(;h<=e;)hm(b,c,h),h+=b.c;if(ia(c))for(;h<d;){if(f[g++]=c.charCodeAt(h++),g==b.c){hm(b,f);g=0;break}}else for(;h<d;)if(f[g++]=c[h++],g==b.c){hm(b,f);g=0;break}}b.b=g;b.f+=d};function jm(b){b=b||{};this.a=void 0!==b.color?b.color:null;this.f=b.lineCap;this.b=void 0!==b.lineDash?b.lineDash:null;this.g=b.lineJoin;this.j=b.miterLimit;this.c=b.width;this.i=void 0}l=jm.prototype;l.tn=function(){return this.a};l.Tj=function(){return this.f};l.vn=function(){return this.b};l.Uj=function(){return this.g};l.Zj=function(){return this.j};l.wn=function(){return this.c};l.xn=function(b){this.a=b;this.i=void 0};l.Vo=function(b){this.f=b;this.i=void 0};
l.yn=function(b){this.b=b;this.i=void 0};l.Wo=function(b){this.g=b;this.i=void 0};l.Xo=function(b){this.j=b;this.i=void 0};l.zn=function(b){this.c=b;this.i=void 0};
l.Ib=function(){if(void 0===this.i){var b="s"+(this.a?xg(this.a):"-")+","+(void 0!==this.f?this.f.toString():"-")+","+(this.b?this.b.toString():"-")+","+(void 0!==this.g?this.g:"-")+","+(void 0!==this.j?this.j.toString():"-")+","+(void 0!==this.c?this.c.toString():"-"),c=new gm;im(c,b);b=Array((56>c.b?c.c:2*c.c)-c.b);b[0]=128;for(var d=1;d<b.length-8;++d)b[d]=0;for(var e=8*c.f,d=b.length-8;d<b.length;++d)b[d]=e&255,e/=256;im(c,b);b=Array(16);for(d=e=0;4>d;++d)for(var f=0;32>f;f+=8)b[e++]=c.a[d]>>>
f&255;if(8192>=b.length)c=String.fromCharCode.apply(null,b);else for(c="",d=0;d<b.length;d+=8192)e=pb(b,d,d+8192),c+=String.fromCharCode.apply(null,e);this.i=c}return this.i};function km(b){b=b||{};this.j=this.a=this.g=null;this.f=void 0!==b.fill?b.fill:null;this.c=void 0!==b.stroke?b.stroke:null;this.b=b.radius;this.D=[0,0];this.B=this.ia=this.l=null;var c=b.atlasManager,d,e=null,f,g=0;this.c&&(f=xg(this.c.a),g=this.c.c,void 0===g&&(g=1),e=this.c.b,gj||(e=null));var h=2*(this.b+g)+1;f={strokeStyle:f,Kd:g,size:h,lineDash:e};void 0===c?(this.a=Mg("CANVAS"),this.a.height=h,this.a.width=h,d=h=this.a.width,c=this.a.getContext("2d"),this.xh(f,c,0,0),this.f?this.j=this.a:(c=
this.j=Mg("CANVAS"),c.height=f.size,c.width=f.size,c=c.getContext("2d"),this.wh(f,c,0,0))):(h=Math.round(h),(e=!this.f)&&(d=ra(this.wh,this,f)),g=this.Ib(),f=c.add(g,h,h,ra(this.xh,this,f),d),this.a=f.image,this.D=[f.offsetX,f.offsetY],d=f.image.width,this.j=e?f.Sg:this.a);this.l=[h/2,h/2];this.ia=[h,h];this.B=[d,d];Ek.call(this,{opacity:1,rotateWithView:!1,rotation:0,scale:1,snapToPixel:void 0!==b.snapToPixel?b.snapToPixel:!0})}y(km,Ek);l=km.prototype;l.Xb=function(){return this.l};l.jn=function(){return this.f};
l.Be=function(){return this.j};l.fc=function(){return this.a};l.Ed=function(){return 2};l.qd=function(){return this.B};l.Ca=function(){return this.D};l.kn=function(){return this.b};l.Bb=function(){return this.ia};l.ln=function(){return this.c};l.xf=wa;l.load=wa;l.dg=wa;
l.xh=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();c.arc(b.size/2,b.size/2,this.b,0,2*Math.PI,!0);this.f&&(c.fillStyle=xg(this.f.a),c.fill());this.c&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Kd,b.lineDash&&c.setLineDash(b.lineDash),c.stroke());c.closePath()};
l.wh=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();c.arc(b.size/2,b.size/2,this.b,0,2*Math.PI,!0);c.fillStyle=xg(bm);c.fill();this.c&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Kd,b.lineDash&&c.setLineDash(b.lineDash),c.stroke());c.closePath()};l.Ib=function(){var b=this.c?this.c.Ib():"-",c=this.f?this.f.Ib():"-";this.g&&b==this.g[1]&&c==this.g[2]&&this.b==this.g[3]||(this.g=["c"+b+c+(void 0!==this.b?this.b.toString():"-"),b,c,this.b]);return this.g[0]};function lm(b){b=b||{};this.i=null;this.g=mm;void 0!==b.geometry&&this.Ah(b.geometry);this.j=void 0!==b.fill?b.fill:null;this.b=void 0!==b.image?b.image:null;this.f=void 0!==b.stroke?b.stroke:null;this.c=void 0!==b.text?b.text:null;this.a=b.zIndex}l=lm.prototype;l.W=function(){return this.i};l.Oj=function(){return this.g};l.An=function(){return this.j};l.Bn=function(){return this.b};l.Cn=function(){return this.f};l.Dn=function(){return this.c};l.En=function(){return this.a};
l.Ah=function(b){ka(b)?this.g=b:ia(b)?this.g=function(c){return c.get(b)}:b?void 0!==b&&(this.g=function(){return b}):this.g=mm;this.i=b};l.Fn=function(b){this.a=b};function nm(b){if(!ka(b)){var c;c=ga(b)?b:[b];b=function(){return c}}return b}var om=null;function pm(){if(!om){var b=new em({color:"rgba(255,255,255,0.4)"}),c=new jm({color:"#3399CC",width:1.25});om=[new lm({image:new km({fill:b,stroke:c,radius:5}),fill:b,stroke:c})]}return om}
function qm(){var b={},c=[255,255,255,1],d=[0,153,255,1];b.Polygon=[new lm({fill:new em({color:[255,255,255,.5]})})];b.MultiPolygon=b.Polygon;b.LineString=[new lm({stroke:new jm({color:c,width:5})}),new lm({stroke:new jm({color:d,width:3})})];b.MultiLineString=b.LineString;b.Circle=b.Polygon.concat(b.LineString);b.Point=[new lm({image:new km({radius:6,fill:new em({color:d}),stroke:new jm({color:c,width:1.5})}),zIndex:Infinity})];b.MultiPoint=b.Point;b.GeometryCollection=b.Polygon.concat(b.LineString,
b.Point);return b}function mm(b){return b.W()};function H(b){b=b?b:{};var c=Wb(b);delete c.style;delete c.renderBuffer;delete c.updateWhileAnimating;delete c.updateWhileInteracting;nk.call(this,c);this.a=void 0!==b.renderBuffer?b.renderBuffer:100;this.D=null;this.b=void 0;this.f(b.style);this.i=void 0!==b.updateWhileAnimating?b.updateWhileAnimating:!1;this.l=void 0!==b.updateWhileInteracting?b.updateWhileInteracting:!1}y(H,nk);function rm(b){return b.get("renderOrder")}H.prototype.C=function(){return this.D};H.prototype.G=function(){return this.b};
H.prototype.f=function(b){this.D=void 0!==b?b:pm;this.b=null===b?void 0:nm(this.D);this.s()};function J(b){b=b?b:{};var c=Wb(b);delete c.preload;delete c.useInterimTilesOnError;H.call(this,c);this.T(b.preload?b.preload:0);this.Y(b.useInterimTilesOnError?b.useInterimTilesOnError:!0)}y(J,H);J.prototype.g=function(){return this.get("preload")};J.prototype.U=function(){return this.get("useInterimTilesOnError")};J.prototype.T=function(b){this.set("preload",b)};J.prototype.Y=function(b){this.set("useInterimTilesOnError",b)};function tm(b,c,d,e,f){this.D={};this.b=b;this.G=c;this.g=d;this.oa=e;this.Xc=f;this.j=this.a=this.c=this.qa=this.fb=this.fa=null;this.xa=this.pa=this.v=this.T=this.U=this.S=0;this.gb=!1;this.i=this.Cb=0;this.Db=!1;this.Y=0;this.f="";this.B=this.ia=this.Ac=this.Qd=0;this.ea=this.u=this.l=null;this.C=[];this.Bc=Fd()}
function um(b,c,d){if(b.j){c=ef(c,0,d,2,b.oa,b.C);d=b.b;var e=b.Bc,f=d.globalAlpha;1!=b.v&&(d.globalAlpha=f*b.v);var g=b.Cb;b.gb&&(g+=b.Xc);var h,k;h=0;for(k=c.length;h<k;h+=2){var m=c[h]-b.S,n=c[h+1]-b.U;b.Db&&(m=m+.5|0,n=n+.5|0);if(0!==g||1!=b.i){var p=m+b.S,q=n+b.U;rk(e,p,q,b.i,b.i,g,-p,-q);d.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}d.drawImage(b.j,b.pa,b.xa,b.Y,b.T,m,n,b.Y,b.T)}0===g&&1==b.i||d.setTransform(1,0,0,1,0,0);1!=b.v&&(d.globalAlpha=f)}}
function vm(b,c,d,e){var f=0;if(b.ea&&""!==b.f){b.l&&wm(b,b.l);b.u&&xm(b,b.u);var g=b.ea,h=b.b,k=b.qa;k?(k.font!=g.font&&(k.font=h.font=g.font),k.textAlign!=g.textAlign&&(k.textAlign=h.textAlign=g.textAlign),k.textBaseline!=g.textBaseline&&(k.textBaseline=h.textBaseline=g.textBaseline)):(h.font=g.font,h.textAlign=g.textAlign,h.textBaseline=g.textBaseline,b.qa={font:g.font,textAlign:g.textAlign,textBaseline:g.textBaseline});c=ef(c,f,d,e,b.oa,b.C);for(g=b.b;f<d;f+=e){h=c[f]+b.Qd;k=c[f+1]+b.Ac;if(0!==
b.ia||1!=b.B){var m=rk(b.Bc,h,k,b.B,b.B,b.ia,-h,-k);g.setTransform(m[0],m[1],m[4],m[5],m[12],m[13])}b.u&&g.strokeText(b.f,h,k);b.l&&g.fillText(b.f,h,k)}0===b.ia&&1==b.B||g.setTransform(1,0,0,1,0,0)}}function ym(b,c,d,e,f,g){var h=b.b;b=ef(c,d,e,f,b.oa,b.C);h.moveTo(b[0],b[1]);for(c=2;c<b.length;c+=2)h.lineTo(b[c],b[c+1]);g&&h.lineTo(b[0],b[1]);return e}function zm(b,c,d,e,f){var g=b.b,h,k;h=0;for(k=e.length;h<k;++h)d=ym(b,c,d,e[h],f,!0),g.closePath();return d}l=tm.prototype;
l.ld=function(b,c){var d=b.toString(),e=this.D[d];void 0!==e?e.push(c):this.D[d]=[c]};l.Fc=function(b){if(re(this.g,b.J())){if(this.c||this.a){this.c&&wm(this,this.c);this.a&&xm(this,this.a);var c;c=this.oa;var d=this.C,e=b.ja();if(e){var f=b.sa();c=ef(e,0,e.length,f,c,d)}else c=null;d=c[2]-c[0];e=c[3]-c[1];d=Math.sqrt(d*d+e*e);e=this.b;e.beginPath();e.arc(c[0],c[1],d,0,2*Math.PI);this.c&&e.fill();this.a&&e.stroke()}""!==this.f&&vm(this,b.yd(),2,2)}};
l.kf=function(b,c){var d=(0,c.g)(b);if(d&&re(this.g,d.J())){var e=c.a;void 0===e&&(e=0);this.ld(e,function(b){b.ab(c.j,c.f);b.vb(c.b);b.bb(c.c);Am[d.V()].call(b,d,null)})}};l.$d=function(b,c){var d=b.f,e,f;e=0;for(f=d.length;e<f;++e){var g=d[e];Am[g.V()].call(this,g,c)}};l.Gb=function(b){var c=b.ja();b=b.sa();this.j&&um(this,c,c.length);""!==this.f&&vm(this,c,c.length,b)};l.Fb=function(b){var c=b.ja();b=b.sa();this.j&&um(this,c,c.length);""!==this.f&&vm(this,c,c.length,b)};
l.Wb=function(b){if(re(this.g,b.J())){if(this.a){xm(this,this.a);var c=this.b,d=b.ja();c.beginPath();ym(this,d,0,d.length,b.sa(),!1);c.stroke()}""!==this.f&&(b=Bm(b),vm(this,b,2,2))}};l.Gc=function(b){var c=b.J();if(re(this.g,c)){if(this.a){xm(this,this.a);var c=this.b,d=b.ja(),e=0,f=b.Ab(),g=b.sa();c.beginPath();var h,k;h=0;for(k=f.length;h<k;++h)e=ym(this,d,e,f[h],g,!1);c.stroke()}""!==this.f&&(b=Cm(b),vm(this,b,b.length,2))}};
l.Ic=function(b){if(re(this.g,b.J())){if(this.a||this.c){this.c&&wm(this,this.c);this.a&&xm(this,this.a);var c=this.b;c.beginPath();zm(this,b.ac(),0,b.Ab(),b.sa());this.c&&c.fill();this.a&&c.stroke()}""!==this.f&&(b=Lf(b),vm(this,b,2,2))}};
l.Hc=function(b){if(re(this.g,b.J())){if(this.a||this.c){this.c&&wm(this,this.c);this.a&&xm(this,this.a);var c=this.b,d=Dm(b),e=0,f=b.g,g=b.sa(),h,k;h=0;for(k=f.length;h<k;++h){var m=f[h];c.beginPath();e=zm(this,d,e,m,g);this.c&&c.fill();this.a&&c.stroke()}}""!==this.f&&(b=Em(b),vm(this,b,b.length,2))}};function Fm(b){var c=Object.keys(b.D).map(Number);qb(c);var d,e,f,g,h;d=0;for(e=c.length;d<e;++d)for(f=b.D[c[d].toString()],g=0,h=f.length;g<h;++g)f[g](b)}
function wm(b,c){var d=b.b,e=b.fa;e?e.fillStyle!=c.fillStyle&&(e.fillStyle=d.fillStyle=c.fillStyle):(d.fillStyle=c.fillStyle,b.fa={fillStyle:c.fillStyle})}
function xm(b,c){var d=b.b,e=b.fb;e?(e.lineCap!=c.lineCap&&(e.lineCap=d.lineCap=c.lineCap),gj&&!ub(e.lineDash,c.lineDash)&&d.setLineDash(e.lineDash=c.lineDash),e.lineJoin!=c.lineJoin&&(e.lineJoin=d.lineJoin=c.lineJoin),e.lineWidth!=c.lineWidth&&(e.lineWidth=d.lineWidth=c.lineWidth),e.miterLimit!=c.miterLimit&&(e.miterLimit=d.miterLimit=c.miterLimit),e.strokeStyle!=c.strokeStyle&&(e.strokeStyle=d.strokeStyle=c.strokeStyle)):(d.lineCap=c.lineCap,gj&&d.setLineDash(c.lineDash),d.lineJoin=c.lineJoin,d.lineWidth=
c.lineWidth,d.miterLimit=c.miterLimit,d.strokeStyle=c.strokeStyle,b.fb={lineCap:c.lineCap,lineDash:c.lineDash,lineJoin:c.lineJoin,lineWidth:c.lineWidth,miterLimit:c.miterLimit,strokeStyle:c.strokeStyle})}
l.ab=function(b,c){if(b){var d=b.a;this.c={fillStyle:xg(d?d:bm)}}else this.c=null;if(c){var d=c.a,e=c.f,f=c.b,g=c.g,h=c.c,k=c.j;this.a={lineCap:void 0!==e?e:"round",lineDash:f?f:cm,lineJoin:void 0!==g?g:"round",lineWidth:this.G*(void 0!==h?h:1),miterLimit:void 0!==k?k:10,strokeStyle:xg(d?d:dm)}}else this.a=null};
l.vb=function(b){if(b){var c=b.Xb(),d=b.fc(1),e=b.Ca(),f=b.Bb();this.S=c[0];this.U=c[1];this.T=f[1];this.j=d;this.v=b.v;this.pa=e[0];this.xa=e[1];this.gb=b.C;this.Cb=b.u;this.i=b.i;this.Db=b.G;this.Y=f[0]}else this.j=null};
l.bb=function(b){if(b){var c=b.a;c?(c=c.a,this.l={fillStyle:xg(c?c:bm)}):this.l=null;var d=b.l;if(d){var c=d.a,e=d.f,f=d.b,g=d.g,h=d.c,d=d.j;this.u={lineCap:void 0!==e?e:"round",lineDash:f?f:cm,lineJoin:void 0!==g?g:"round",lineWidth:void 0!==h?h:1,miterLimit:void 0!==d?d:10,strokeStyle:xg(c?c:dm)}}else this.u=null;var c=b.f,e=b.g,f=b.j,g=b.i,h=b.c,d=b.b,k=b.B;b=b.u;this.ea={font:void 0!==c?c:"10px sans-serif",textAlign:void 0!==k?k:"center",textBaseline:void 0!==b?b:"middle"};this.f=void 0!==d?d:
"";this.Qd=void 0!==e?this.G*e:0;this.Ac=void 0!==f?this.G*f:0;this.ia=void 0!==g?g:0;this.B=this.G*(void 0!==h?h:1)}else this.f=""};var Am={Point:tm.prototype.Gb,LineString:tm.prototype.Wb,Polygon:tm.prototype.Ic,MultiPoint:tm.prototype.Fb,MultiLineString:tm.prototype.Gc,MultiPolygon:tm.prototype.Hc,GeometryCollection:tm.prototype.$d,Circle:tm.prototype.Fc};function Gm(b){uk.call(this,b);this.S=Fd()}y(Gm,uk);
Gm.prototype.u=function(b,c,d){Hm(this,"precompose",d,b,void 0);var e=this.Bd();if(e){var f=c.extent,g=void 0!==f;if(g){var h=b.pixelRatio,k=je(f),m=ie(f),n=he(f),f=ge(f);tk(b.coordinateToPixelMatrix,k,k);tk(b.coordinateToPixelMatrix,m,m);tk(b.coordinateToPixelMatrix,n,n);tk(b.coordinateToPixelMatrix,f,f);d.save();d.beginPath();d.moveTo(k[0]*h,k[1]*h);d.lineTo(m[0]*h,m[1]*h);d.lineTo(n[0]*h,n[1]*h);d.lineTo(f[0]*h,f[1]*h);d.clip()}h=this.of();k=d.globalAlpha;d.globalAlpha=c.opacity;0===b.viewState.rotation?
d.drawImage(e,0,0,+e.width,+e.height,Math.round(h[12]),Math.round(h[13]),Math.round(e.width*h[0]),Math.round(e.height*h[5])):(d.setTransform(h[0],h[1],h[4],h[5],h[12],h[13]),d.drawImage(e,0,0),d.setTransform(1,0,0,1,0,0));d.globalAlpha=k;g&&d.restore()}Hm(this,"postcompose",d,b,void 0)};function Hm(b,c,d,e,f){var g=b.a;gd(g,c)&&(b=void 0!==f?f:Im(b,e,0),b=new tm(d,e.pixelRatio,e.extent,b,e.viewState.rotation),g.o(new mk(c,g,b,e,d,null)),Fm(b))}
function Im(b,c,d){var e=c.viewState,f=c.pixelRatio;return rk(b.S,f*c.size[0]/2,f*c.size[1]/2,f/e.resolution,-f/e.resolution,-e.rotation,-e.center[0]+d,-e.center[1])}function Jm(b,c){var d=[0,0];tk(c,b,d);return d}
var Km=function(){var b=null,c=null;return function(d){if(!b){b=Yi(1,1);c=b.createImageData(1,1);var e=c.data;e[0]=42;e[1]=84;e[2]=126;e[3]=255}var e=b.canvas,f=d[0]<=e.width&&d[1]<=e.height;f||(e.width=d[0],e.height=d[1],e=d[0]-1,d=d[1]-1,b.putImageData(c,e,d),d=b.getImageData(e,d,1,1),f=ub(c.data,d.data));return f}}();var Lm=["Polygon","LineString","Image","Text"];function Mm(b,c,d){this.qa=b;this.Y=c;this.f=null;this.g=0;this.resolution=d;this.U=this.S=null;this.c=[];this.coordinates=[];this.fa=Fd();this.a=[];this.ea=[];this.fb=Fd()}y(Mm,lk);
function Nm(b,c,d,e,f,g){var h=b.coordinates.length,k=b.mf(),m=[c[d],c[d+1]],n=[NaN,NaN],p=!0,q,r,t;for(q=d+f;q<e;q+=f)n[0]=c[q],n[1]=c[q+1],t=$d(k,n),t!==r?(p&&(b.coordinates[h++]=m[0],b.coordinates[h++]=m[1]),b.coordinates[h++]=n[0],b.coordinates[h++]=n[1],p=!1):1===t?(b.coordinates[h++]=n[0],b.coordinates[h++]=n[1],p=!1):p=!0,m[0]=n[0],m[1]=n[1],r=t;q===d+f&&(b.coordinates[h++]=m[0],b.coordinates[h++]=m[1]);g&&(b.coordinates[h++]=c[d],b.coordinates[h++]=c[d+1]);return h}
function Om(b,c){b.S=[0,c,0];b.c.push(b.S);b.U=[0,c,0];b.a.push(b.U)}
function Pm(b,c,d,e,f,g,h,k,m){var n;sk(e,b.fa)?n=b.ea:(n=ef(b.coordinates,0,b.coordinates.length,2,e,b.ea),Id(b.fa,e));e=!Sb(g);var p=0,q=h.length,r=0,t;b=b.fb;for(var x,z,B,A;p<q;){var v=h[p],O,K,I,G;switch(v[0]){case 0:r=v[1];e&&g[w(r).toString()]||!r.W()?p=v[2]:void 0===m||re(m,r.W().J())?++p:p=v[2];break;case 1:c.beginPath();++p;break;case 2:r=v[1];t=n[r];v=n[r+1];G=n[r+2]-t;r=n[r+3]-v;c.arc(t,v,Math.sqrt(G*G+r*r),0,2*Math.PI,!0);++p;break;case 3:c.closePath();++p;break;case 4:r=v[1];t=v[2];
O=v[3];I=v[4]*d;var la=v[5]*d,Fa=v[6];K=v[7];var L=v[8],Ba=v[9];B=v[11];A=v[12];var Sa=v[13],Ma=v[14];for(v[10]&&(B+=f);r<t;r+=2){v=n[r]-I;G=n[r+1]-la;Sa&&(v=v+.5|0,G=G+.5|0);if(1!=A||0!==B){var mb=v+I,eb=G+la;rk(b,mb,eb,A,A,B,-mb,-eb);c.setTransform(b[0],b[1],b[4],b[5],b[12],b[13])}mb=c.globalAlpha;1!=K&&(c.globalAlpha=mb*K);c.drawImage(O,L,Ba,Ma,Fa,v,G,Ma*d,Fa*d);1!=K&&(c.globalAlpha=mb);1==A&&0===B||c.setTransform(1,0,0,1,0,0)}++p;break;case 5:r=v[1];t=v[2];I=v[3];la=v[4]*d;Fa=v[5]*d;B=v[6];A=
v[7]*d;O=v[8];for(K=v[9];r<t;r+=2){v=n[r]+la;G=n[r+1]+Fa;if(1!=A||0!==B)rk(b,v,G,A,A,B,-v,-G),c.setTransform(b[0],b[1],b[4],b[5],b[12],b[13]);K&&c.strokeText(I,v,G);O&&c.fillText(I,v,G);1==A&&0===B||c.setTransform(1,0,0,1,0,0)}++p;break;case 6:if(void 0!==k&&(r=v[1],r=k(r)))return r;++p;break;case 7:c.fill();++p;break;case 8:r=v[1];t=v[2];v=n[r];G=n[r+1];B=v+.5|0;A=G+.5|0;if(B!==x||A!==z)c.moveTo(v,G),x=B,z=A;for(r+=2;r<t;r+=2)if(v=n[r],G=n[r+1],B=v+.5|0,A=G+.5|0,B!==x||A!==z)c.lineTo(v,G),x=B,z=
A;++p;break;case 9:c.fillStyle=v[1];++p;break;case 10:x=void 0!==v[7]?v[7]:!0;z=v[2];c.strokeStyle=v[1];c.lineWidth=x?z*d:z;c.lineCap=v[3];c.lineJoin=v[4];c.miterLimit=v[5];gj&&c.setLineDash(v[6]);z=x=NaN;++p;break;case 11:c.font=v[1];c.textAlign=v[2];c.textBaseline=v[3];++p;break;case 12:c.stroke();++p;break;default:++p}}}
function Qm(b){var c=b.a;c.reverse();var d,e=c.length,f,g,h=-1;for(d=0;d<e;++d)if(f=c[d],g=f[0],6==g)h=d;else if(0==g){f[2]=d;f=b.a;for(g=d;h<g;){var k=f[h];f[h]=f[g];f[g]=k;++h;--g}h=-1}}function Rm(b,c){b.S[2]=b.c.length;b.S=null;b.U[2]=b.a.length;b.U=null;var d=[6,c];b.c.push(d);b.a.push(d)}Mm.prototype.xe=wa;Mm.prototype.mf=function(){return this.Y};function Sm(b,c,d){Mm.call(this,b,c,d);this.l=this.T=null;this.oa=this.ia=this.G=this.C=this.D=this.v=this.u=this.B=this.i=this.j=this.b=void 0}
y(Sm,Mm);Sm.prototype.Gb=function(b,c){if(this.l){Om(this,c);var d=b.ja(),e=b.sa(),f=this.coordinates.length,d=Nm(this,d,0,d.length,e,!1);this.c.push([4,f,d,this.l,this.b,this.j,this.i,this.B,this.u,this.v,this.D,this.C,this.G,this.ia,this.oa]);this.a.push([4,f,d,this.T,this.b,this.j,this.i,this.B,this.u,this.v,this.D,this.C,this.G,this.ia,this.oa]);Rm(this,c)}};
Sm.prototype.Fb=function(b,c){if(this.l){Om(this,c);var d=b.ja(),e=b.sa(),f=this.coordinates.length,d=Nm(this,d,0,d.length,e,!1);this.c.push([4,f,d,this.l,this.b,this.j,this.i,this.B,this.u,this.v,this.D,this.C,this.G,this.ia,this.oa]);this.a.push([4,f,d,this.T,this.b,this.j,this.i,this.B,this.u,this.v,this.D,this.C,this.G,this.ia,this.oa]);Rm(this,c)}};Sm.prototype.xe=function(){Qm(this);this.j=this.b=void 0;this.l=this.T=null;this.oa=this.ia=this.C=this.D=this.v=this.u=this.B=this.G=this.i=void 0};
Sm.prototype.vb=function(b){var c=b.Xb(),d=b.Bb(),e=b.Be(1),f=b.fc(1),g=b.Ca();this.b=c[0];this.j=c[1];this.T=e;this.l=f;this.i=d[1];this.B=b.v;this.u=g[0];this.v=g[1];this.D=b.C;this.C=b.u;this.G=b.i;this.ia=b.G;this.oa=d[0]};function Tm(b,c,d){Mm.call(this,b,c,d);this.b={hd:void 0,cd:void 0,dd:null,ed:void 0,fd:void 0,gd:void 0,wf:0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}y(Tm,Mm);
function Um(b,c,d,e,f){var g=b.coordinates.length;c=Nm(b,c,d,e,f,!1);g=[8,g,c];b.c.push(g);b.a.push(g);return e}l=Tm.prototype;l.mf=function(){this.f||(this.f=Vd(this.Y),0<this.g&&Ud(this.f,this.resolution*(this.g+1)/2,this.f));return this.f};
function Vm(b){var c=b.b,d=c.strokeStyle,e=c.lineCap,f=c.lineDash,g=c.lineJoin,h=c.lineWidth,k=c.miterLimit;c.hd==d&&c.cd==e&&ub(c.dd,f)&&c.ed==g&&c.fd==h&&c.gd==k||(c.wf!=b.coordinates.length&&(b.c.push([12]),c.wf=b.coordinates.length),b.c.push([10,d,h,e,g,k,f],[1]),c.hd=d,c.cd=e,c.dd=f,c.ed=g,c.fd=h,c.gd=k)}
l.Wb=function(b,c){var d=this.b,e=d.lineWidth;void 0!==d.strokeStyle&&void 0!==e&&(Vm(this),Om(this,c),this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash],[1]),d=b.ja(),e=b.sa(),Um(this,d,0,d.length,e),this.a.push([12]),Rm(this,c))};
l.Gc=function(b,c){var d=this.b,e=d.lineWidth;if(void 0!==d.strokeStyle&&void 0!==e){Vm(this);Om(this,c);this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash],[1]);var d=b.Ab(),e=b.ja(),f=b.sa(),g=0,h,k;h=0;for(k=d.length;h<k;++h)g=Um(this,e,g,d[h],f);this.a.push([12]);Rm(this,c)}};l.xe=function(){this.b.wf!=this.coordinates.length&&this.c.push([12]);Qm(this);this.b=null};
l.ab=function(b,c){var d=c.a;this.b.strokeStyle=xg(d?d:dm);d=c.f;this.b.lineCap=void 0!==d?d:"round";d=c.b;this.b.lineDash=d?d:cm;d=c.g;this.b.lineJoin=void 0!==d?d:"round";d=c.c;this.b.lineWidth=void 0!==d?d:1;d=c.j;this.b.miterLimit=void 0!==d?d:10;this.b.lineWidth>this.g&&(this.g=this.b.lineWidth,this.f=null)};
function Wm(b,c,d){Mm.call(this,b,c,d);this.b={xg:void 0,hd:void 0,cd:void 0,dd:null,ed:void 0,fd:void 0,gd:void 0,fillStyle:void 0,strokeStyle:void 0,lineCap:void 0,lineDash:null,lineJoin:void 0,lineWidth:void 0,miterLimit:void 0}}y(Wm,Mm);
function Xm(b,c,d,e,f){var g=b.b,h=[1];b.c.push(h);b.a.push(h);var k,h=0;for(k=e.length;h<k;++h){var m=e[h],n=b.coordinates.length;d=Nm(b,c,d,m,f,!0);d=[8,n,d];n=[3];b.c.push(d,n);b.a.push(d,n);d=m}c=[7];b.a.push(c);void 0!==g.fillStyle&&b.c.push(c);void 0!==g.strokeStyle&&(g=[12],b.c.push(g),b.a.push(g));return d}l=Wm.prototype;
l.Fc=function(b,c){var d=this.b,e=d.strokeStyle;if(void 0!==d.fillStyle||void 0!==e){Ym(this);Om(this,c);this.a.push([9,xg(bm)]);void 0!==d.strokeStyle&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var f=b.ja(),g=b.sa(),e=this.coordinates.length;Nm(this,f,0,f.length,g,!1);f=[1];e=[2,e];this.c.push(f,e);this.a.push(f,e);e=[7];this.a.push(e);void 0!==d.fillStyle&&this.c.push(e);void 0!==d.strokeStyle&&(d=[12],this.c.push(d),this.a.push(d));Rm(this,c)}};
l.Ic=function(b,c){var d=this.b,e=d.strokeStyle;if(void 0!==d.fillStyle||void 0!==e){Ym(this);Om(this,c);this.a.push([9,xg(bm)]);void 0!==d.strokeStyle&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var d=b.Ab(),e=b.ac(),f=b.sa();Xm(this,e,0,d,f);Rm(this,c)}};
l.Hc=function(b,c){var d=this.b,e=d.strokeStyle;if(void 0!==d.fillStyle||void 0!==e){Ym(this);Om(this,c);this.a.push([9,xg(bm)]);void 0!==d.strokeStyle&&this.a.push([10,d.strokeStyle,d.lineWidth,d.lineCap,d.lineJoin,d.miterLimit,d.lineDash]);var d=b.g,e=Dm(b),f=b.sa(),g=0,h,k;h=0;for(k=d.length;h<k;++h)g=Xm(this,e,g,d[h],f);Rm(this,c)}};l.xe=function(){Qm(this);this.b=null;var b=this.qa;if(0!==b){var c=this.coordinates,d,e;d=0;for(e=c.length;d<e;++d)c[d]=b*Math.round(c[d]/b)}};
l.mf=function(){this.f||(this.f=Vd(this.Y),0<this.g&&Ud(this.f,this.resolution*(this.g+1)/2,this.f));return this.f};
l.ab=function(b,c){var d=this.b;if(b){var e=b.a;d.fillStyle=xg(e?e:bm)}else d.fillStyle=void 0;c?(e=c.a,d.strokeStyle=xg(e?e:dm),e=c.f,d.lineCap=void 0!==e?e:"round",e=c.b,d.lineDash=e?e.slice():cm,e=c.g,d.lineJoin=void 0!==e?e:"round",e=c.c,d.lineWidth=void 0!==e?e:1,e=c.j,d.miterLimit=void 0!==e?e:10,d.lineWidth>this.g&&(this.g=d.lineWidth,this.f=null)):(d.strokeStyle=void 0,d.lineCap=void 0,d.lineDash=null,d.lineJoin=void 0,d.lineWidth=void 0,d.miterLimit=void 0)};
function Ym(b){var c=b.b,d=c.fillStyle,e=c.strokeStyle,f=c.lineCap,g=c.lineDash,h=c.lineJoin,k=c.lineWidth,m=c.miterLimit;void 0!==d&&c.xg!=d&&(b.c.push([9,d]),c.xg=c.fillStyle);void 0===e||c.hd==e&&c.cd==f&&c.dd==g&&c.ed==h&&c.fd==k&&c.gd==m||(b.c.push([10,e,k,f,h,m,g]),c.hd=e,c.cd=f,c.dd=g,c.ed=h,c.fd=k,c.gd=m)}function Zm(b,c,d){Mm.call(this,b,c,d);this.ia=this.G=this.C=null;this.l="";this.D=this.v=this.u=this.B=0;this.i=this.j=this.b=null}y(Zm,Mm);
Zm.prototype.Hb=function(b,c,d,e,f,g){if(""!==this.l&&this.i&&(this.b||this.j)){if(this.b){f=this.b;var h=this.C;if(!h||h.fillStyle!=f.fillStyle){var k=[9,f.fillStyle];this.c.push(k);this.a.push(k);h?h.fillStyle=f.fillStyle:this.C={fillStyle:f.fillStyle}}}this.j&&(f=this.j,h=this.G,h&&h.lineCap==f.lineCap&&h.lineDash==f.lineDash&&h.lineJoin==f.lineJoin&&h.lineWidth==f.lineWidth&&h.miterLimit==f.miterLimit&&h.strokeStyle==f.strokeStyle||(k=[10,f.strokeStyle,f.lineWidth,f.lineCap,f.lineJoin,f.miterLimit,
f.lineDash,!1],this.c.push(k),this.a.push(k),h?(h.lineCap=f.lineCap,h.lineDash=f.lineDash,h.lineJoin=f.lineJoin,h.lineWidth=f.lineWidth,h.miterLimit=f.miterLimit,h.strokeStyle=f.strokeStyle):this.G={lineCap:f.lineCap,lineDash:f.lineDash,lineJoin:f.lineJoin,lineWidth:f.lineWidth,miterLimit:f.miterLimit,strokeStyle:f.strokeStyle}));f=this.i;h=this.ia;h&&h.font==f.font&&h.textAlign==f.textAlign&&h.textBaseline==f.textBaseline||(k=[11,f.font,f.textAlign,f.textBaseline],this.c.push(k),this.a.push(k),h?
(h.font=f.font,h.textAlign=f.textAlign,h.textBaseline=f.textBaseline):this.ia={font:f.font,textAlign:f.textAlign,textBaseline:f.textBaseline});Om(this,g);f=this.coordinates.length;b=Nm(this,b,c,d,e,!1);b=[5,f,b,this.l,this.B,this.u,this.v,this.D,!!this.b,!!this.j];this.c.push(b);this.a.push(b);Rm(this,g)}};
Zm.prototype.bb=function(b){if(b){var c=b.a;c?(c=c.a,c=xg(c?c:bm),this.b?this.b.fillStyle=c:this.b={fillStyle:c}):this.b=null;var d=b.l;if(d){var c=d.a,e=d.f,f=d.b,g=d.g,h=d.c,d=d.j,e=void 0!==e?e:"round",f=f?f.slice():cm,g=void 0!==g?g:"round",h=void 0!==h?h:1,d=void 0!==d?d:10,c=xg(c?c:dm);if(this.j){var k=this.j;k.lineCap=e;k.lineDash=f;k.lineJoin=g;k.lineWidth=h;k.miterLimit=d;k.strokeStyle=c}else this.j={lineCap:e,lineDash:f,lineJoin:g,lineWidth:h,miterLimit:d,strokeStyle:c}}else this.j=null;
var m=b.f,c=b.g,e=b.j,f=b.i,h=b.c,d=b.b,g=b.B,k=b.u;b=void 0!==m?m:"10px sans-serif";g=void 0!==g?g:"center";k=void 0!==k?k:"middle";this.i?(m=this.i,m.font=b,m.textAlign=g,m.textBaseline=k):this.i={font:b,textAlign:g,textBaseline:k};this.l=void 0!==d?d:"";this.B=void 0!==c?c:0;this.u=void 0!==e?e:0;this.v=void 0!==f?f:0;this.D=void 0!==h?h:1}else this.l=""};function $m(b,c,d,e){this.u=b;this.g=c;this.B=d;this.j=e;this.c={};this.i=Yi(1,1);this.l=Fd()}
function an(b){for(var c in b.c){var d=b.c[c],e;for(e in d)d[e].xe()}}$m.prototype.f=function(b,c,d,e,f){var g=this.l;rk(g,.5,.5,1/c,-1/c,-d,-b[0],-b[1]);var h=this.i;h.clearRect(0,0,1,1);var k;void 0!==this.j&&(k=Qd(),Rd(k,b),Ud(k,c*this.j,k));return bn(this,h,g,d,e,function(b){if(0<h.getImageData(0,0,1,1).data[3]){if(b=f(b))return b;h.clearRect(0,0,1,1)}},k)};
$m.prototype.a=function(b,c){var d=void 0!==b?b.toString():"0",e=this.c[d];void 0===e&&(e={},this.c[d]=e);d=e[c];void 0===d&&(d=new cn[c](this.u,this.g,this.B),e[c]=d);return d};$m.prototype.Ma=function(){return Sb(this.c)};
$m.prototype.b=function(b,c,d,e,f){var g=Object.keys(this.c).map(Number);qb(g);var h=this.g,k=h[0],m=h[1],n=h[2],h=h[3],k=[k,m,k,h,n,h,n,m];ef(k,0,8,2,d,k);b.save();b.beginPath();b.moveTo(k[0],k[1]);b.lineTo(k[2],k[3]);b.lineTo(k[4],k[5]);b.lineTo(k[6],k[7]);b.closePath();b.clip();for(var p,q,k=0,m=g.length;k<m;++k)for(p=this.c[g[k].toString()],n=0,h=Lm.length;n<h;++n)q=p[Lm[n]],void 0!==q&&Pm(q,b,c,d,e,f,q.c,void 0);b.restore()};
function bn(b,c,d,e,f,g,h){var k=Object.keys(b.c).map(Number);qb(k,function(b,c){return c-b});var m,n,p,q,r;m=0;for(n=k.length;m<n;++m)for(q=b.c[k[m].toString()],p=Lm.length-1;0<=p;--p)if(r=q[Lm[p]],void 0!==r&&(r=Pm(r,c,1,d,e,f,r.a,g,h)))return r}var cn={Image:Sm,LineString:Tm,Polygon:Wm,Text:Zm};function dn(b,c,d,e){this.b=b;this.a=c;this.g=d;this.f=e}l=dn.prototype;l.get=function(b){return this.f[b]};l.Ab=function(){return this.g};l.J=function(){this.c||(this.c="Point"===this.b?ae(this.a):be(this.a,0,this.a.length,2));return this.c};l.ja=dn.prototype.ac=function(){return this.a};l.W=function(){return this};l.Em=function(){return this.f};l.sd=dn.prototype.W;l.sa=ue(2);l.Ob=wa;l.V=function(){return this.b};function en(b,c){return w(b)-w(c)}function fn(b,c){var d=.5*b/c;return d*d}function gn(b,c,d,e,f,g){var h=!1,k,m;if(k=d.b)m=k.Ed(),2==m||3==m?k.dg(f,g):(0==m&&k.load(),k.xf(f,g),h=!0);if(f=(0,d.g)(c))e=f.sd(e),(0,hn[e.V()])(b,e,d,c);return h}
var hn={Point:function(b,c,d,e){var f=d.b;if(f){if(2!=f.Ed())return;var g=b.a(d.a,"Image");g.vb(f);g.Gb(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),b.Hb(c.ja(),0,2,2,c,e)},LineString:function(b,c,d,e){var f=d.f;if(f){var g=b.a(d.a,"LineString");g.ab(null,f);g.Wb(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),b.Hb(Bm(c),0,2,2,c,e)},Polygon:function(b,c,d,e){var f=d.j,g=d.f;if(f||g){var h=b.a(d.a,"Polygon");h.ab(f,g);h.Ic(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),b.Hb(Lf(c),0,2,2,c,e)},MultiPoint:function(b,c,d,
e){var f=d.b;if(f){if(2!=f.Ed())return;var g=b.a(d.a,"Image");g.vb(f);g.Fb(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),d=c.ja(),b.Hb(d,0,d.length,c.sa(),c,e)},MultiLineString:function(b,c,d,e){var f=d.f;if(f){var g=b.a(d.a,"LineString");g.ab(null,f);g.Gc(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),d=Cm(c),b.Hb(d,0,d.length,2,c,e)},MultiPolygon:function(b,c,d,e){var f=d.j,g=d.f;if(g||f){var h=b.a(d.a,"Polygon");h.ab(f,g);h.Hc(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),d=Em(c),b.Hb(d,0,d.length,2,c,e)},GeometryCollection:function(b,
c,d,e){c=c.f;var f,g;f=0;for(g=c.length;f<g;++f)(0,hn[c[f].V()])(b,c[f],d,e)},Circle:function(b,c,d,e){var f=d.j,g=d.f;if(f||g){var h=b.a(d.a,"Polygon");h.ab(f,g);h.Fc(c,e)}if(f=d.c)b=b.a(d.a,"Text"),b.bb(f),b.Hb(c.yd(),0,2,2,c,e)}};function jn(b,c,d,e,f,g){this.g=void 0!==g?g:null;pk.call(this,b,c,d,void 0!==g?0:2,e);this.f=f;this.c=null}y(jn,pk);jn.prototype.getError=function(){return this.c};jn.prototype.i=function(b){b?(this.c=b,this.state=3):this.state=2;qk(this)};jn.prototype.load=function(){0==this.state&&(this.state=1,qk(this),this.g(ra(this.i,this)))};jn.prototype.a=function(){return this.f};var kn=!((Jb("Chrome")||Jb("CriOS"))&&!Jb("Opera")&&!Jb("OPR")&&!Jb("Edge"))||Jb("iPhone")&&!Jb("iPod")&&!Jb("iPad")||Jb("iPad")||Jb("iPod");function ln(b,c,d,e){var f=bf(d,c,b);d=c.getPointResolution(e,d);c=c.Jc();void 0!==c&&(d*=c);c=b.Jc();void 0!==c&&(d/=c);b=b.getPointResolution(d,f)/d;isFinite(b)&&!isNaN(b)&&0<b&&(d/=b);return d}function mn(b,c,d,e){b=d-b;c=e-c;var f=Math.sqrt(b*b+c*c);return[Math.round(d+b/f),Math.round(e+c/f)]}
function nn(b,c,d,e,f,g,h,k,m,n){var p=Yi(Math.round(d*b),Math.round(d*c));if(0===m.length)return p.canvas;p.scale(d,d);var q=Qd();m.forEach(function(b){ee(q,b.extent)});var r=Yi(Math.round(d*me(q)/e),Math.round(d*ne(q)/e));r.scale(d/e,d/e);r.translate(-q[0],q[3]);m.forEach(function(b){r.drawImage(b.image,b.extent[0],-b.extent[3],me(b.extent),ne(b.extent))});var t=je(h);k.f.forEach(function(b){var c=b.source,f=b.target,h=c[1][0],k=c[1][1],m=c[2][0],n=c[2][1];b=(f[0][0]-t[0])/g;var I=-(f[0][1]-t[1])/
g,G=(f[1][0]-t[0])/g,la=-(f[1][1]-t[1])/g,Fa=(f[2][0]-t[0])/g,L=-(f[2][1]-t[1])/g,f=c[0][0],c=c[0][1],h=h-f,k=k-c,m=m-f,n=n-c;a:{h=[[h,k,0,0,G-b],[m,n,0,0,Fa-b],[0,0,h,k,la-I],[0,0,m,n,L-I]];k=h.length;for(m=0;m<k;m++){for(var n=m,Ba=Math.abs(h[m][m]),Sa=m+1;Sa<k;Sa++){var Ma=Math.abs(h[Sa][m]);Ma>Ba&&(Ba=Ma,n=Sa)}if(0===Ba){h=null;break a}Ba=h[n];h[n]=h[m];h[m]=Ba;for(n=m+1;n<k;n++)for(Ba=-h[n][m]/h[m][m],Sa=m;Sa<k+1;Sa++)h[n][Sa]=m==Sa?0:h[n][Sa]+Ba*h[m][Sa]}m=Array(k);for(n=k-1;0<=n;n--)for(m[n]=
h[n][k]/h[n][n],Ba=n-1;0<=Ba;Ba--)h[Ba][k]-=h[Ba][n]*m[n];h=m}h&&(p.save(),p.beginPath(),kn?(m=(b+G+Fa)/3,n=(I+la+L)/3,k=mn(m,n,b,I),G=mn(m,n,G,la),Fa=mn(m,n,Fa,L),p.moveTo(k[0],k[1]),p.lineTo(G[0],G[1]),p.lineTo(Fa[0],Fa[1])):(p.moveTo(b,I),p.lineTo(G,la),p.lineTo(Fa,L)),p.closePath(),p.clip(),p.transform(h[0],h[2],h[1],h[3],b,I),p.translate(q[0]-f,q[3]-c),p.scale(e/d,-e/d),p.drawImage(r.canvas,0,0),p.restore())});n&&(p.save(),p.strokeStyle="black",p.lineWidth=1,k.f.forEach(function(b){var c=b.target;
b=(c[0][0]-t[0])/g;var d=-(c[0][1]-t[1])/g,e=(c[1][0]-t[0])/g,f=-(c[1][1]-t[1])/g,h=(c[2][0]-t[0])/g,c=-(c[2][1]-t[1])/g;p.beginPath();p.moveTo(b,d);p.lineTo(e,f);p.lineTo(h,c);p.closePath();p.stroke()}),p.restore());return p.canvas};function on(b,c,d,e,f){this.b=b;this.g=c;var g={},h=$e(this.g,this.b);this.c=function(b){var c=b[0]+"/"+b[1];g[c]||(g[c]=h(b));return g[c]};this.j=e;this.u=f*f;this.f=[];this.l=!1;this.B=this.b.b&&!!e&&!!this.b.J()&&me(e)==me(this.b.J());this.a=this.b.J()?me(this.b.J()):null;this.i=this.g.J()?me(this.g.J()):null;b=je(d);c=ie(d);e=he(d);d=ge(d);f=this.c(b);var k=this.c(c),m=this.c(e),n=this.c(d);pn(this,b,c,e,d,f,k,m,n,10);if(this.l){var p=Infinity;this.f.forEach(function(b){p=Math.min(p,b.source[0][0],
b.source[1][0],b.source[2][0])});this.f.forEach(function(b){if(Math.max(b.source[0][0],b.source[1][0],b.source[2][0])-p>this.a/2){var c=[[b.source[0][0],b.source[0][1]],[b.source[1][0],b.source[1][1]],[b.source[2][0],b.source[2][1]]];c[0][0]-p>this.a/2&&(c[0][0]-=this.a);c[1][0]-p>this.a/2&&(c[1][0]-=this.a);c[2][0]-p>this.a/2&&(c[2][0]-=this.a);Math.max(c[0][0],c[1][0],c[2][0])-Math.min(c[0][0],c[1][0],c[2][0])<this.a/2&&(b.source=c)}},this)}g={}}
function pn(b,c,d,e,f,g,h,k,m,n){var p=Pd([g,h,k,m]),q=b.a?me(p)/b.a:null,r=b.b.b&&.5<q&&1>q,t=!1;if(0<n){if(b.g.f&&b.i)var x=Pd([c,d,e,f]),t=t|.25<me(x)/b.i;!r&&b.b.f&&q&&(t|=.25<q)}if(t||!b.j||re(p,b.j)){if(!(t||isFinite(g[0])&&isFinite(g[1])&&isFinite(h[0])&&isFinite(h[1])&&isFinite(k[0])&&isFinite(k[1])&&isFinite(m[0])&&isFinite(m[1])))if(0<n)t=!0;else return;if(0<n&&(t||(q=b.c([(c[0]+e[0])/2,(c[1]+e[1])/2]),p=r?(rd(g[0],b.a)+rd(k[0],b.a))/2-rd(q[0],b.a):(g[0]+k[0])/2-q[0],q=(g[1]+k[1])/2-q[1],
t=p*p+q*q>b.u),t)){Math.abs(c[0]-e[0])<=Math.abs(c[1]-e[1])?(r=[(d[0]+e[0])/2,(d[1]+e[1])/2],p=b.c(r),q=[(f[0]+c[0])/2,(f[1]+c[1])/2],t=b.c(q),pn(b,c,d,r,q,g,h,p,t,n-1),pn(b,q,r,e,f,t,p,k,m,n-1)):(r=[(c[0]+d[0])/2,(c[1]+d[1])/2],p=b.c(r),q=[(e[0]+f[0])/2,(e[1]+f[1])/2],t=b.c(q),pn(b,c,r,q,f,g,p,t,m,n-1),pn(b,r,d,e,q,p,h,k,t,n-1));return}if(r){if(!b.B)return;b.l=!0}b.f.push({source:[g,k,m],target:[c,e,f]});b.f.push({source:[g,h,k],target:[c,d,e]})}}
function qn(b){var c=Qd();b.f.forEach(function(b){b=b.source;Rd(c,b[0]);Rd(c,b[1]);Rd(c,b[2])});return c};function rn(b,c,d,e,f,g){this.D=c;this.v=b.J();var h=c.J(),k=h?qe(d,h):d,h=ln(b,c,oe(k),e);this.B=new on(b,c,k,this.v,.5*h);this.i=e;this.g=d;b=qn(this.B);this.u=(this.c=g(b,h,f))?this.c.b:1;this.f=this.l=null;f=2;g=[];this.c&&(f=0,g=this.c.j);pk.call(this,d,e,this.u,f,g)}y(rn,pk);rn.prototype.X=function(){1==this.state&&(ad(this.f),this.f=null);rn.ca.X.call(this)};rn.prototype.a=function(){return this.l};
function sn(b){var c=b.c.state;2==c&&(b.l=nn(me(b.g)/b.i,ne(b.g)/b.i,b.u,b.c.aa(),0,b.i,b.g,b.B,[{extent:b.c.J(),image:b.c.a()}]));b.state=c;qk(b)}rn.prototype.load=function(){if(0==this.state){this.state=1;qk(this);var b=this.c.state;2==b||3==b?sn(this):(this.f=this.c.Sa("change",function(){var b=this.c.state;if(2==b||3==b)ad(this.f),this.f=null,sn(this)},!1,this),this.c.load())}};function tn(b){Gh.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,state:b.state});this.G=void 0!==b.resolutions?b.resolutions:null;this.a=null;this.qa=0}y(tn,Gh);function un(b,c){if(b.G){var d=yb(b.G,c,0);c=b.G[d]}return c}
tn.prototype.D=function(b,c,d,e){var f=this.f;if(f&&e&&!Ze(f,e)){if(this.a){if(this.qa==this.c&&Ze(this.a.D,e)&&this.a.aa()==c&&this.a.b==d&&de(this.a.J(),b))return this.a;this.a.Ec();this.a=null}this.a=new rn(f,e,b,c,d,ra(function(b,c,d){return this.pd(b,c,d,f)},this));this.qa=this.c;return this.a}f&&(e=f);return this.pd(b,c,d,e)};tn.prototype.C=function(b){b=b.target;switch(b.state){case 1:this.o(new vn(wn,b));break;case 2:this.o(new vn(xn,b));break;case 3:this.o(new vn(yn,b))}};
function zn(b,c){b.a().src=c}function vn(b,c){xc.call(this,b);this.image=c}y(vn,xc);var wn="imageloadstart",xn="imageloadend",yn="imageloaderror";function An(b){tn.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,resolutions:b.resolutions,state:void 0!==b.state?b.state:void 0});this.fa=b.canvasFunction;this.Y=null;this.ea=0;this.pa=void 0!==b.ratio?b.ratio:1.5}y(An,tn);An.prototype.pd=function(b,c,d,e){c=un(this,c);var f=this.Y;if(f&&this.ea==this.c&&f.aa()==c&&f.b==d&&Zd(f.J(),b))return f;b=b.slice();se(b,this.pa);(e=this.fa(b,c,d,[me(b)/c*d,ne(b)/c*d],e))&&(f=new jn(b,c,d,this.j,e));this.Y=f;this.ea=this.c;return f};function Bn(b){kd.call(this);this.wa=void 0;this.a="geometry";this.f=null;this.g=void 0;this.b=null;C(this,md(this.a),this.je,!1,this);void 0!==b&&(b instanceof df||!b?this.Na(b):this.I(b))}y(Bn,kd);l=Bn.prototype;l.clone=function(){var b=new Bn(this.P());b.vc(this.a);var c=this.W();c&&b.Na(c.clone());(c=this.f)&&b.Af(c);return b};l.W=function(){return this.get(this.a)};l.La=function(){return this.wa};l.Pj=function(){return this.a};l.yl=function(){return this.f};l.Ob=function(){return this.g};
l.zl=function(){this.s()};l.je=function(){this.b&&(ad(this.b),this.b=null);var b=this.W();b&&(this.b=C(b,"change",this.zl,!1,this));this.s()};l.Na=function(b){this.set(this.a,b)};l.Af=function(b){this.g=(this.f=b)?Cn(b):void 0;this.s()};l.ic=function(b){this.wa=b;this.s()};l.vc=function(b){$c(this,md(this.a),this.je,!1,this);this.a=b;C(this,md(this.a),this.je,!1,this);this.je()};function Cn(b){if(!ka(b)){var c;c=ga(b)?b:[b];b=function(){return c}}return b};function Dn(b){b.prototype.then=b.prototype.then;b.prototype.$goog_Thenable=!0}function En(b){if(!b)return!1;try{return!!b.$goog_Thenable}catch(c){return!1}};function Fn(b,c,d){this.f=d;this.b=b;this.g=c;this.c=0;this.a=null}Fn.prototype.get=function(){var b;0<this.c?(this.c--,b=this.a,this.a=b.next,b.next=null):b=this.b();return b};function Gn(b,c){b.g(c);b.c<b.f&&(b.c++,c.next=b.a,b.a=c)};function Hn(){this.c=this.a=null}var Jn=new Fn(function(){return new In},function(b){b.reset()},100);Hn.prototype.add=function(b,c){var d=Jn.get();d.set(b,c);this.c?this.c.next=d:this.a=d;this.c=d};Hn.prototype.remove=function(){var b=null;this.a&&(b=this.a,this.a=this.a.next,this.a||(this.c=null),b.next=null);return b};function In(){this.next=this.c=this.a=null}In.prototype.set=function(b,c){this.a=b;this.c=c;this.next=null};In.prototype.reset=function(){this.next=this.c=this.a=null};function Kn(b,c){Ln||Mn();Nn||(Ln(),Nn=!0);On.add(b,c)}var Ln;function Mn(){if(ba.Promise&&ba.Promise.resolve){var b=ba.Promise.resolve(void 0);Ln=function(){b.then(Pn)}}else Ln=function(){wi(Pn)}}var Nn=!1,On=new Hn;function Pn(){for(var b=null;b=On.remove();){try{b.a.call(b.c)}catch(c){vi(c)}Gn(Jn,b)}Nn=!1};function Qn(b,c){this.a=Rn;this.i=void 0;this.f=this.c=this.b=null;this.g=this.j=!1;if(b!=da)try{var d=this;b.call(c,function(b){Sn(d,Tn,b)},function(b){Sn(d,Un,b)})}catch(e){Sn(this,Un,e)}}var Rn=0,Tn=2,Un=3;function Vn(){this.next=this.b=this.c=this.f=this.a=null;this.g=!1}Vn.prototype.reset=function(){this.b=this.c=this.f=this.a=null;this.g=!1};var Wn=new Fn(function(){return new Vn},function(b){b.reset()},100);function Xn(b,c,d){var e=Wn.get();e.f=b;e.c=c;e.b=d;return e}
Qn.prototype.then=function(b,c,d){return Yn(this,ka(b)?b:null,ka(c)?c:null,d)};Dn(Qn);Qn.prototype.cancel=function(b){this.a==Rn&&Kn(function(){var c=new Zn(b);$n(this,c)},this)};function $n(b,c){if(b.a==Rn)if(b.b){var d=b.b;if(d.c){for(var e=0,f=null,g=null,h=d.c;h&&(h.g||(e++,h.a==b&&(f=h),!(f&&1<e)));h=h.next)f||(g=h);f&&(d.a==Rn&&1==e?$n(d,c):(g?(e=g,e.next==d.f&&(d.f=e),e.next=e.next.next):ao(d),bo(d,f,Un,c)))}b.b=null}else Sn(b,Un,c)}
function co(b,c){b.c||b.a!=Tn&&b.a!=Un||eo(b);b.f?b.f.next=c:b.c=c;b.f=c}function Yn(b,c,d,e){var f=Xn(null,null,null);f.a=new Qn(function(b,h){f.f=c?function(d){try{var f=c.call(e,d);b(f)}catch(n){h(n)}}:b;f.c=d?function(c){try{var f=d.call(e,c);!ca(f)&&c instanceof Zn?h(c):b(f)}catch(n){h(n)}}:h});f.a.b=b;co(b,f);return f.a}Qn.prototype.B=function(b){this.a=Rn;Sn(this,Tn,b)};Qn.prototype.u=function(b){this.a=Rn;Sn(this,Un,b)};
function Sn(b,c,d){if(b.a==Rn){b==d&&(c=Un,d=new TypeError("Promise cannot resolve to itself"));b.a=1;var e;a:{var f=d,g=b.B,h=b.u;if(f instanceof Qn)co(f,Xn(g||da,h||null,b)),e=!0;else if(En(f))f.then(g,h,b),e=!0;else{if(ma(f))try{var k=f.then;if(ka(k)){fo(f,k,g,h,b);e=!0;break a}}catch(m){h.call(b,m);e=!0;break a}e=!1}}e||(b.i=d,b.a=c,b.b=null,eo(b),c!=Un||d instanceof Zn||go(b,d))}}
function fo(b,c,d,e,f){function g(b){k||(k=!0,e.call(f,b))}function h(b){k||(k=!0,d.call(f,b))}var k=!1;try{c.call(b,h,g)}catch(m){g(m)}}function eo(b){b.j||(b.j=!0,Kn(b.l,b))}function ao(b){var c=null;b.c&&(c=b.c,b.c=c.next,c.next=null);b.c||(b.f=null);return c}Qn.prototype.l=function(){for(var b=null;b=ao(this);)bo(this,b,this.a,this.i);this.j=!1};
function bo(b,c,d,e){if(d==Un&&c.c&&!c.g)for(;b&&b.g;b=b.b)b.g=!1;if(c.a)c.a.b=null,ho(c,d,e);else try{c.g?c.f.call(c.b):ho(c,d,e)}catch(f){io.call(null,f)}Gn(Wn,c)}function ho(b,c,d){c==Tn?b.f.call(b.b,d):b.c&&b.c.call(b.b,d)}function go(b,c){b.g=!0;Kn(function(){b.g&&io.call(null,c)})}var io=vi;function Zn(b){xa.call(this,b)}y(Zn,xa);Zn.prototype.name="cancel";function jo(b,c,d){if(ka(b))d&&(b=ra(b,d));else if(b&&"function"==typeof b.handleEvent)b=ra(b.handleEvent,b);else throw Error("Invalid listener argument");return 2147483647<c?-1:ba.setTimeout(b,c||0)};var ko=ba.JSON.parse,lo=ba.JSON.stringify;function mo(){}mo.prototype.a=null;function no(b){var c;(c=b.a)||(c={},oo(b)&&(c[0]=!0,c[1]=!0),c=b.a=c);return c};var po;function qo(){}y(qo,mo);function ro(b){return(b=oo(b))?new ActiveXObject(b):new XMLHttpRequest}function oo(b){if(!b.c&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var c=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],d=0;d<c.length;d++){var e=c[d];try{return new ActiveXObject(e),b.c=e}catch(f){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return b.c}po=new qo;var so=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function to(b,c){if(b)for(var d=b.split("&"),e=0;e<d.length;e++){var f=d[e].indexOf("="),g=null,h=null;0<=f?(g=d[e].substring(0,f),h=d[e].substring(f+1)):g=d[e];c(g,h?decodeURIComponent(h.replace(/\+/g," ")):"")}}
function uo(b){if(b[1]){var c=b[0],d=c.indexOf("#");0<=d&&(b.push(c.substr(d)),b[0]=c=c.substr(0,d));d=c.indexOf("?");0>d?b[1]="?":d==c.length-1&&(b[1]=void 0)}return b.join("")}function vo(b,c,d){if(ga(c))for(var e=0;e<c.length;e++)vo(b,String(c[e]),d);else null!=c&&d.push("&",b,""===c?"":"=",encodeURIComponent(String(c)))}function wo(b,c){for(var d in c)vo(d,c[d],b);return b};function xo(b){ed.call(this);this.S=new Ai;this.B=b||null;this.a=!1;this.l=this.ha=null;this.g=this.U=this.D="";this.c=this.v=this.f=this.u=!1;this.i=0;this.b=null;this.j=yo;this.C=this.Y=!1}y(xo,ed);var yo="",zo=/^https?$/i,Ao=["POST","PUT"];
function Bo(b,c){if(b.ha)throw Error("[goog.net.XhrIo] Object is active with another request="+b.D+"; newUri="+c);b.D=c;b.g="";b.U="GET";b.u=!1;b.a=!0;b.ha=b.B?ro(b.B):ro(po);b.l=b.B?no(b.B):no(po);b.ha.onreadystatechange=ra(b.G,b);try{b.v=!0,b.ha.open("GET",String(c),!0),b.v=!1}catch(g){Co(b,g);return}var d=b.S.clone(),e=hb(d.O(),Do),f=ba.FormData&&!1;!(0<=bb(Ao,"GET"))||e||f||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");d.forEach(function(b,c){this.ha.setRequestHeader(c,
b)},b);b.j&&(b.ha.responseType=b.j);"withCredentials"in b.ha&&(b.ha.withCredentials=b.Y);try{Eo(b),0<b.i&&(b.C=Fo(b.ha),b.C?(b.ha.timeout=b.i,b.ha.ontimeout=ra(b.yc,b)):b.b=jo(b.yc,b.i,b)),b.f=!0,b.ha.send(""),b.f=!1}catch(g){Co(b,g)}}function Fo(b){return ac&&lc(9)&&ja(b.timeout)&&ca(b.ontimeout)}function Do(b){return"content-type"==b.toLowerCase()}
xo.prototype.yc=function(){"undefined"!=typeof aa&&this.ha&&(this.g="Timed out after "+this.i+"ms, aborting",this.o("timeout"),this.ha&&this.a&&(this.a=!1,this.c=!0,this.ha.abort(),this.c=!1,this.o("complete"),this.o("abort"),Go(this)))};function Co(b,c){b.a=!1;b.ha&&(b.c=!0,b.ha.abort(),b.c=!1);b.g=c;Ho(b);Go(b)}function Ho(b){b.u||(b.u=!0,b.o("complete"),b.o("error"))}xo.prototype.X=function(){this.ha&&(this.a&&(this.a=!1,this.c=!0,this.ha.abort(),this.c=!1),Go(this,!0));xo.ca.X.call(this)};
xo.prototype.G=function(){this.ia||(this.v||this.f||this.c?Io(this):this.T())};xo.prototype.T=function(){Io(this)};function Io(b){if(b.a&&"undefined"!=typeof aa&&(!b.l[1]||4!=Jo(b)||2!=Ko(b)))if(b.f&&4==Jo(b))jo(b.G,0,b);else if(b.o("readystatechange"),4==Jo(b)){b.a=!1;try{if(Lo(b))b.o("complete"),b.o("success");else{var c;try{c=2<Jo(b)?b.ha.statusText:""}catch(d){c=""}b.g=c+" ["+Ko(b)+"]";Ho(b)}}finally{Go(b)}}}
function Go(b,c){if(b.ha){Eo(b);var d=b.ha,e=b.l[0]?da:null;b.ha=null;b.l=null;c||b.o("ready");try{d.onreadystatechange=e}catch(f){}}}function Eo(b){b.ha&&b.C&&(b.ha.ontimeout=null);ja(b.b)&&(ba.clearTimeout(b.b),b.b=null)}
function Lo(b){var c=Ko(b),d;a:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:d=!0;break a;default:d=!1}if(!d){if(c=0===c)b=String(b.D).match(so)[1]||null,!b&&ba.self&&ba.self.location&&(b=ba.self.location.protocol,b=b.substr(0,b.length-1)),c=!zo.test(b?b.toLowerCase():"");d=c}return d}function Jo(b){return b.ha?b.ha.readyState:0}function Ko(b){try{return 2<Jo(b)?b.ha.status:-1}catch(c){return-1}}function Mo(b){try{return b.ha?b.ha.responseText:""}catch(c){return""}}
function No(b){try{if(!b.ha)return null;if("response"in b.ha)return b.ha.response;switch(b.j){case yo:case "text":return b.ha.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in b.ha)return b.ha.mozResponseArrayBuffer}return null}catch(c){return null}};function Oo(){if(!ac)return!1;try{return new ActiveXObject("MSXML2.DOMDocument"),!0}catch(b){return!1}}var Po=ac&&Oo();function Qo(b){var c=b.xml;if(c)return c;if("undefined"!=typeof XMLSerializer)return(new XMLSerializer).serializeToString(b);throw Error("Your browser does not support serializing XML documents");};var Ro;a:if(document.implementation&&document.implementation.createDocument)Ro=document.implementation.createDocument("","",null);else{if(Po){var So=new ActiveXObject("MSXML2.DOMDocument");if(So){So.resolveExternals=!1;So.validateOnParse=!1;try{So.setProperty("ProhibitDTD",!0),So.setProperty("MaxXMLSize",2048),So.setProperty("MaxElementDepth",256)}catch(b){}}if(So){Ro=So;break a}}throw Error("Your browser does not support creating new documents");}var To=Ro;
function Uo(b,c){return To.createElementNS(b,c)}function Vo(b,c){b||(b="");return To.createNode(1,c,b)}var Wo=document.implementation&&document.implementation.createDocument?Uo:Vo;function Xo(b,c){return Yo(b,c,[]).join("")}function Yo(b,c,d){if(4==b.nodeType||3==b.nodeType)c?d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g,"")):d.push(b.nodeValue);else for(b=b.firstChild;b;b=b.nextSibling)Yo(b,c,d);return d}function Zo(b){return b.localName}
function $o(b){var c=b.localName;return void 0!==c?c:b.baseName}var ap=ac?$o:Zo;function bp(b){return b instanceof Document}function cp(b){return ma(b)&&9==b.nodeType}var dp=ac?cp:bp;function ep(b){return b instanceof Node}function fp(b){return ma(b)&&void 0!==b.nodeType}var gp=ac?fp:ep;function hp(b,c,d){return b.getAttributeNS(c,d)||""}function ip(b,c,d){var e="";b=jp(b,c,d);void 0!==b&&(e=b.nodeValue);return e}var kp=document.implementation&&document.implementation.createDocument?hp:ip;
function lp(b,c,d){return b.getAttributeNodeNS(c,d)}function mp(b,c,d){var e=null;b=b.attributes;for(var f,g,h=0,k=b.length;h<k;++h)if(f=b[h],f.namespaceURI==c&&(g=f.prefix?f.prefix+":"+d:d,g==f.nodeName)){e=f;break}return e}var jp=document.implementation&&document.implementation.createDocument?lp:mp;function np(b,c,d,e){b.setAttributeNS(c,d,e)}function op(b,c,d,e){c?(c=b.ownerDocument.createNode(2,d,c),c.nodeValue=e,b.setAttributeNode(c)):b.setAttribute(d,e)}
var pp=document.implementation&&document.implementation.createDocument?np:op;function qp(b){return(new DOMParser).parseFromString(b,"application/xml")}function rp(b,c){return function(d,e){var f=b.call(c,d,e);void 0!==f&&nb(e[e.length-1],f)}}function sp(b,c){return function(d,e){var f=b.call(void 0!==c?c:this,d,e);void 0!==f&&e[e.length-1].push(f)}}function tp(b,c){return function(d,e){var f=b.call(void 0!==c?c:this,d,e);void 0!==f&&(e[e.length-1]=f)}}
function up(b){return function(c,d){var e=b.call(this,c,d);void 0!==e&&Vb(d[d.length-1],c.localName).push(e)}}function M(b,c){return function(d,e){var f=b.call(this,d,e);void 0!==f&&(e[e.length-1][void 0!==c?c:d.localName]=f)}}function N(b,c){return function(d,e,f){b.call(void 0!==c?c:this,d,e,f);f[f.length-1].node.appendChild(d)}}function vp(b){var c,d;return function(e,f,g){if(void 0===c){c={};var h={};h[e.localName]=b;c[e.namespaceURI]=h;d=wp(e.localName)}xp(c,d,f,g)}}
function wp(b,c){return function(d,e,f){d=e[e.length-1].node;e=b;void 0===e&&(e=f);f=c;void 0===c&&(f=d.namespaceURI);return Wo(f,e)}}var yp=wp();function zp(b,c){for(var d=c.length,e=Array(d),f=0;f<d;++f)e[f]=b[c[f]];return e}function P(b,c,d){d=void 0!==d?d:{};var e,f;e=0;for(f=b.length;e<f;++e)d[b[e]]=c;return d}function Ap(b,c,d,e){for(c=c.firstElementChild;c;c=c.nextElementSibling){var f=b[c.namespaceURI];void 0!==f&&(f=f[c.localName],void 0!==f&&f.call(e,c,d))}}
function Q(b,c,d,e,f){e.push(b);Ap(c,d,e,f);return e.pop()}function xp(b,c,d,e,f,g){for(var h=(void 0!==f?f:d).length,k,m,n=0;n<h;++n)k=d[n],void 0!==k&&(m=c.call(g,k,e,void 0!==f?f[n]:void 0),void 0!==m&&b[m.namespaceURI][m.localName].call(g,m,k,e))}function Bp(b,c,d,e,f,g,h){f.push(b);xp(c,d,e,f,g,h);f.pop()};function Cp(b,c,d,e){return function(f,g,h){var k=new xo;k.j="arraybuffer"==c.V()?"arraybuffer":"text";C(k,"complete",function(b){b=b.target;if(Lo(b)){var f=c.V(),g;if("json"==f)g=Mo(b);else if("text"==f)g=Mo(b);else if("xml"==f){if(!ac)try{g=b.ha?b.ha.responseXML:null}catch(k){g=null}g||(g=qp(Mo(b)))}else"arraybuffer"==f&&(g=No(b));g&&(f=c.Ba(g,{featureProjection:h}),2==d.length?d.call(this,f,c.Ja(g)):d.call(this,f))}else e.call(this);wc(b)},!1,this);ka(b)?Bo(k,b(f,g,h)):Bo(k,b)}}
function Dp(b,c){return Cp(b,c,function(b,c){this.c=c;this.g=b;this.state=2;Fh(this)},function(){this.state=3;Fh(this)})}function Ep(b,c){return Cp(b,c,function(b){this.Dc(b)},wa)};function Fp(){return[[-Infinity,-Infinity,Infinity,Infinity]]};var Gp,Hp,Ip,Jp;
(function(){var b={ka:{}};(function(){function c(b,d){if(!(this instanceof c))return new c(b,d);this.cf=Math.max(4,b||9);this.og=Math.max(2,Math.ceil(.4*this.cf));d&&this.cj(d);this.clear()}function d(b,c){b.bbox=e(b,0,b.children.length,c)}function e(b,c,d,e){for(var g=[Infinity,Infinity,-Infinity,-Infinity],h;c<d;c++)h=b.children[c],f(g,b.Ra?e(h):h.bbox);return g}function f(b,c){b[0]=Math.min(b[0],c[0]);b[1]=Math.min(b[1],c[1]);b[2]=Math.max(b[2],c[2]);b[3]=Math.max(b[3],c[3])}function g(b,c){return b.bbox[0]-
c.bbox[0]}function h(b,c){return b.bbox[1]-c.bbox[1]}function k(b){return(b[2]-b[0])*(b[3]-b[1])}function m(b){return b[2]-b[0]+(b[3]-b[1])}function n(b,c){return b[0]<=c[0]&&b[1]<=c[1]&&c[2]<=b[2]&&c[3]<=b[3]}function p(b,c){return c[0]<=b[2]&&c[1]<=b[3]&&c[2]>=b[0]&&c[3]>=b[1]}function q(b,c,d,e,f){for(var g=[c,d],h;g.length;)d=g.pop(),c=g.pop(),d-c<=e||(h=c+Math.ceil((d-c)/e/2)*e,r(b,c,d,h,f),g.push(c,h,h,d))}function r(b,c,d,e,f){for(var g,h,k,m,n;d>c;){600<d-c&&(g=d-c+1,h=e-c+1,k=Math.log(g),
m=.5*Math.exp(2*k/3),n=.5*Math.sqrt(k*m*(g-m)/g)*(0>h-g/2?-1:1),k=Math.max(c,Math.floor(e-h*m/g+n)),h=Math.min(d,Math.floor(e+(g-h)*m/g+n)),r(b,k,h,e,f));g=b[e];h=c;m=d;t(b,c,e);for(0<f(b[d],g)&&t(b,c,d);h<m;){t(b,h,m);h++;for(m--;0>f(b[h],g);)h++;for(;0<f(b[m],g);)m--}0===f(b[c],g)?t(b,c,m):(m++,t(b,m,d));m<=e&&(c=m+1);e<=m&&(d=m-1)}}function t(b,c,d){var e=b[c];b[c]=b[d];b[d]=e}c.prototype={all:function(){return this.jg(this.data,[])},search:function(b){var c=this.data,d=[],e=this.eb;if(!p(b,c.bbox))return d;
for(var f=[],g,h,k,m;c;){g=0;for(h=c.children.length;g<h;g++)k=c.children[g],m=c.Ra?e(k):k.bbox,p(b,m)&&(c.Ra?d.push(k):n(b,m)?this.jg(k,d):f.push(k));c=f.pop()}return d},load:function(b){if(!b||!b.length)return this;if(b.length<this.og){for(var c=0,d=b.length;c<d;c++)this.ya(b[c]);return this}b=this.lg(b.slice(),0,b.length-1,0);this.data.children.length?this.data.height===b.height?this.qg(this.data,b):(this.data.height<b.height&&(c=this.data,this.data=b,b=c),this.ng(b,this.data.height-b.height-1,
!0)):this.data=b;return this},ya:function(b){b&&this.ng(b,this.data.height-1);return this},clear:function(){this.data={children:[],height:1,bbox:[Infinity,Infinity,-Infinity,-Infinity],Ra:!0};return this},remove:function(b){if(!b)return this;for(var c=this.data,d=this.eb(b),e=[],f=[],g,h,k,m;c||e.length;){c||(c=e.pop(),h=e[e.length-1],g=f.pop(),m=!0);if(c.Ra&&(k=c.children.indexOf(b),-1!==k)){c.children.splice(k,1);e.push(c);this.aj(e);break}m||c.Ra||!n(c.bbox,d)?h?(g++,c=h.children[g],m=!1):c=null:
(e.push(c),f.push(g),g=0,h=c,c=c.children[0])}return this},eb:function(b){return b},gf:function(b,c){return b[0]-c[0]},hf:function(b,c){return b[1]-c[1]},toJSON:function(){return this.data},jg:function(b,c){for(var d=[];b;)b.Ra?c.push.apply(c,b.children):d.push.apply(d,b.children),b=d.pop();return c},lg:function(b,c,e,f){var g=e-c+1,h=this.cf,k;if(g<=h)return k={children:b.slice(c,e+1),height:1,bbox:null,Ra:!0},d(k,this.eb),k;f||(f=Math.ceil(Math.log(g)/Math.log(h)),h=Math.ceil(g/Math.pow(h,f-1)));
k={children:[],height:f,bbox:null};var g=Math.ceil(g/h),h=g*Math.ceil(Math.sqrt(h)),m,n,p;for(q(b,c,e,h,this.gf);c<=e;c+=h)for(n=Math.min(c+h-1,e),q(b,c,n,g,this.hf),m=c;m<=n;m+=g)p=Math.min(m+g-1,n),k.children.push(this.lg(b,m,p,f-1));d(k,this.eb);return k},$i:function(b,c,d,e){for(var f,g,h,m,n,p,q,r;;){e.push(c);if(c.Ra||e.length-1===d)break;q=r=Infinity;f=0;for(g=c.children.length;f<g;f++)h=c.children[f],n=k(h.bbox),p=h.bbox,p=(Math.max(p[2],b[2])-Math.min(p[0],b[0]))*(Math.max(p[3],b[3])-Math.min(p[1],
b[1]))-n,p<r?(r=p,q=n<q?n:q,m=h):p===r&&n<q&&(q=n,m=h);c=m}return c},ng:function(b,c,d){var e=this.eb;d=d?b.bbox:e(b);var e=[],g=this.$i(d,this.data,c,e);g.children.push(b);for(f(g.bbox,d);0<=c;)if(e[c].children.length>this.cf)this.ij(e,c),c--;else break;this.Xi(d,e,c)},ij:function(b,c){var e=b[c],f=e.children.length,g=this.og;this.Yi(e,g,f);f=this.Zi(e,g,f);f={children:e.children.splice(f,e.children.length-f),height:e.height};e.Ra&&(f.Ra=!0);d(e,this.eb);d(f,this.eb);c?b[c-1].children.push(f):this.qg(e,
f)},qg:function(b,c){this.data={children:[b,c],height:b.height+1};d(this.data,this.eb)},Zi:function(b,c,d){var f,g,h,m,n,p,q;n=p=Infinity;for(f=c;f<=d-c;f++)g=e(b,0,f,this.eb),h=e(b,f,d,this.eb),m=Math.max(0,Math.min(g[2],h[2])-Math.max(g[0],h[0]))*Math.max(0,Math.min(g[3],h[3])-Math.max(g[1],h[1])),g=k(g)+k(h),m<n?(n=m,q=f,p=g<p?g:p):m===n&&g<p&&(p=g,q=f);return q},Yi:function(b,c,d){var e=b.Ra?this.gf:g,f=b.Ra?this.hf:h,k=this.kg(b,c,d,e);c=this.kg(b,c,d,f);k<c&&b.children.sort(e)},kg:function(b,
c,d,g){b.children.sort(g);g=this.eb;var h=e(b,0,c,g),k=e(b,d-c,d,g),n=m(h)+m(k),p,q;for(p=c;p<d-c;p++)q=b.children[p],f(h,b.Ra?g(q):q.bbox),n+=m(h);for(p=d-c-1;p>=c;p--)q=b.children[p],f(k,b.Ra?g(q):q.bbox),n+=m(k);return n},Xi:function(b,c,d){for(;0<=d;d--)f(c[d].bbox,b)},aj:function(b){for(var c=b.length-1,e;0<=c;c--)0===b[c].children.length?0<c?(e=b[c-1].children,e.splice(e.indexOf(b[c]),1)):this.clear():d(b[c],this.eb)},cj:function(b){var c=["return a"," - b",";"];this.gf=new Function("a","b",
c.join(b[0]));this.hf=new Function("a","b",c.join(b[1]));this.eb=new Function("a","return [a"+b.join(", a")+"];")}};"undefined"!==typeof b?b.ka=c:"undefined"!==typeof self?self.a=c:window.a=c})();Gp=b.ka})();function Kp(b){this.c=Gp(b);this.a={}}l=Kp.prototype;l.ya=function(b,c){var d=[b[0],b[1],b[2],b[3],c];this.c.ya(d);this.a[w(c)]=d};l.load=function(b,c){for(var d=Array(c.length),e=0,f=c.length;e<f;e++){var g=b[e],h=c[e],g=[g[0],g[1],g[2],g[3],h];d[e]=g;this.a[w(h)]=g}this.c.load(d)};l.remove=function(b){b=w(b);var c=this.a[b];delete this.a[b];return null!==this.c.remove(c)};function Lp(b,c,d){var e=w(d);de(b.a[e].slice(0,4),c)||(b.remove(d),b.ya(c,d))}
function Mp(b){return b.c.all().map(function(b){return b[4]})}function Np(b,c){return b.c.search(c).map(function(b){return b[4]})}l.forEach=function(b,c){return Op(Mp(this),b,c)};function Pp(b,c,d,e){return Op(Np(b,c),d,e)}function Op(b,c,d){for(var e,f=0,g=b.length;f<g&&!(e=c.call(d,b[f]));f++);return e}l.Ma=function(){return Sb(this.a)};l.clear=function(){this.c.clear();this.a={}};l.J=function(){return this.c.data.bbox};function R(b){b=b||{};Gh.call(this,{attributions:b.attributions,logo:b.logo,projection:void 0,state:"ready",wrapX:void 0!==b.wrapX?b.wrapX:!0});this.T=wa;void 0!==b.loader?this.T=b.loader:void 0!==b.url&&(this.T=Ep(b.url,b.format));this.pa=void 0!==b.strategy?b.strategy:Fp;var c=void 0!==b.useSpatialIndex?b.useSpatialIndex:!0;this.a=c?new Kp:null;this.Y=new Kp;this.g={};this.i={};this.l={};this.u={};this.b=null;var d,e;b.features instanceof qg?(d=b.features,e=d.a):ga(b.features)&&(e=b.features);c||
void 0!==d||(d=new qg(e));void 0!==e&&Qp(this,e);void 0!==d&&Rp(this,d)}y(R,Gh);l=R.prototype;l.Dd=function(b){var c=w(b).toString();if(Sp(this,c,b)){Tp(this,c,b);var d=b.W();d?(c=d.J(),this.a&&this.a.ya(c,b)):this.g[c]=b;this.o(new Up("addfeature",b))}this.s()};function Tp(b,c,d){b.u[c]=[C(d,"change",b.vh,!1,b),C(d,"propertychange",b.vh,!1,b)]}function Sp(b,c,d){var e=!0,f=d.La();void 0!==f?f.toString()in b.i?e=!1:b.i[f.toString()]=d:b.l[c]=d;return e}l.Dc=function(b){Qp(this,b);this.s()};
function Qp(b,c){var d,e,f,g,h=[],k=[],m=[];e=0;for(f=c.length;e<f;e++)g=c[e],d=w(g).toString(),Sp(b,d,g)&&k.push(g);e=0;for(f=k.length;e<f;e++){g=k[e];d=w(g).toString();Tp(b,d,g);var n=g.W();n?(d=n.J(),h.push(d),m.push(g)):b.g[d]=g}b.a&&b.a.load(h,m);e=0;for(f=k.length;e<f;e++)b.o(new Up("addfeature",k[e]))}
function Rp(b,c){var d=!1;C(b,"addfeature",function(b){d||(d=!0,c.push(b.feature),d=!1)});C(b,"removefeature",function(b){d||(d=!0,c.remove(b.feature),d=!1)});C(c,"add",function(b){d||(b=b.element,d=!0,this.Dd(b),d=!1)},!1,b);C(c,"remove",function(b){d||(b=b.element,d=!0,this.Qc(b),d=!1)},!1,b);b.b=c}
l.clear=function(b){if(b){for(var c in this.u)this.u[c].forEach(ad);this.b||(this.u={},this.i={},this.l={})}else b=this.Th,this.a&&(this.a.forEach(b,this),Kb(this.g,b,this));this.b&&this.b.clear();this.a&&this.a.clear();this.Y.clear();this.g={};this.o(new Up("clear"));this.s()};l.zg=function(b,c){if(this.a)return this.a.forEach(b,c);if(this.b)return this.b.forEach(b,c)};function Vp(b,c,d){b.ob([c[0],c[1],c[0],c[1]],function(b){if(b.W().vg(c))return d.call(void 0,b)})}
l.ob=function(b,c,d){if(this.a)return Pp(this.a,b,c,d);if(this.b)return this.b.forEach(c,d)};l.Ag=function(b,c,d){return this.ob(b,function(e){if(e.W().Da(b)&&(e=c.call(d,e)))return e})};l.Gg=function(){return this.b};l.Ae=function(){var b;this.b?b=this.b.a:this.a&&(b=Mp(this.a),Sb(this.g)||nb(b,Nb(this.g)));return b};l.Fg=function(b){var c=[];Vp(this,b,function(b){c.push(b)});return c};l.nf=function(b){return Np(this.a,b)};
l.Cg=function(b){var c=b[0],d=b[1],e=null,f=[NaN,NaN],g=Infinity,h=[-Infinity,-Infinity,Infinity,Infinity];Pp(this.a,h,function(b){var m=b.W(),n=g;g=m.mb(c,d,f,g);g<n&&(e=b,b=Math.sqrt(g),h[0]=c-b,h[1]=d-b,h[2]=c+b,h[3]=d+b)});return e};l.J=function(){return this.a.J()};l.Eg=function(b){b=this.i[b.toString()];return void 0!==b?b:null};
l.vh=function(b){b=b.target;var c=w(b).toString(),d=b.W();d?(d=d.J(),c in this.g?(delete this.g[c],this.a&&this.a.ya(d,b)):this.a&&Lp(this.a,d,b)):c in this.g||(this.a&&this.a.remove(b),this.g[c]=b);d=b.La();void 0!==d?(d=d.toString(),c in this.l?(delete this.l[c],this.i[d]=b):this.i[d]!==b&&(Wp(this,b),this.i[d]=b)):c in this.l||(Wp(this,b),this.l[c]=b);this.s();this.o(new Up("changefeature",b))};l.Ma=function(){return this.a.Ma()&&Sb(this.g)};
l.Mc=function(b,c,d){var e=this.Y;b=this.pa(b,c);var f,g;f=0;for(g=b.length;f<g;++f){var h=b[f];Pp(e,h,function(b){return Zd(b.extent,h)})||(this.T.call(this,h,c,d),e.ya(h,{extent:h.slice()}))}};l.Qc=function(b){var c=w(b).toString();c in this.g?delete this.g[c]:this.a&&this.a.remove(b);this.Th(b);this.s()};l.Th=function(b){var c=w(b).toString();this.u[c].forEach(ad);delete this.u[c];var d=b.La();void 0!==d?delete this.i[d.toString()]:delete this.l[c];this.o(new Up("removefeature",b))};
function Wp(b,c){for(var d in b.i)if(b.i[d]===c){delete b.i[d];break}}function Up(b,c){xc.call(this,b);this.feature=c}y(Up,xc);function Xp(b){this.b=b.source;this.xa=Fd();this.g=Yi();this.i=[0,0];this.u=null;An.call(this,{attributions:b.attributions,canvasFunction:ra(this.sj,this),logo:b.logo,projection:b.projection,ratio:b.ratio,resolutions:b.resolutions,state:this.b.v});this.T=null;this.l=void 0;this.rh(b.style);C(this.b,"change",this.Sm,void 0,this)}y(Xp,An);l=Xp.prototype;
l.sj=function(b,c,d,e,f){var g=new $m(.5*c/d,b,c);this.b.Mc(b,c,f);var h=!1;this.b.ob(b,function(b){var e;if(!(e=h)){var f;(e=b.Ob())?f=e.call(b,c):this.l&&(f=this.l(b,c));if(f){var p,q=!1;e=0;for(p=f.length;e<p;++e)q=gn(g,b,f[e],fn(c,d),this.Rm,this)||q;e=q}else e=!1}h=e},this);an(g);if(h)return null;this.i[0]!=e[0]||this.i[1]!=e[1]?(this.g.canvas.width=e[0],this.g.canvas.height=e[1],this.i[0]=e[0],this.i[1]=e[1]):this.g.clearRect(0,0,e[0],e[1]);b=Yp(this,oe(b),c,d,e);g.b(this.g,d,b,0,{});this.u=
g;return this.g.canvas};l.ze=function(b,c,d,e,f){if(this.u){var g={};return this.u.f(b,c,0,e,function(b){var c=w(b).toString();if(!(c in g))return g[c]=!0,f(b)})}};l.Om=function(){return this.b};l.Pm=function(){return this.T};l.Qm=function(){return this.l};function Yp(b,c,d,e,f){return rk(b.xa,f[0]/2,f[1]/2,e/d,-e/d,0,-c[0],-c[1])}l.Rm=function(){this.s()};l.Sm=function(){Ih(this,this.b.v)};l.rh=function(b){this.T=void 0!==b?b:pm;this.l=b?nm(this.T):void 0;this.s()};function Zp(b){Gm.call(this,b);this.g=null;this.j=Fd();this.b=this.f=null}y(Zp,Gm);l=Zp.prototype;l.$a=function(b,c,d,e){var f=this.a;return f.ga().ze(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};
l.sc=function(b,c,d,e){if(this.Bd())if(this.a.ga()instanceof Xp){if(b=b.slice(),tk(c.pixelToCoordinateMatrix,b,b),this.$a(b,c,we,this))return d.call(e,this.a)}else if(this.f||(this.f=Fd(),Ld(this.j,this.f)),c=Jm(b,this.f),this.b||(this.b=Yi(1,1)),this.b.clearRect(0,0,1,1),this.b.drawImage(this.Bd(),c[0],c[1],1,1,0,0,1,1),0<this.b.getImageData(0,0,1,1).data[3])return d.call(e,this.a)};l.Bd=function(){return this.g?this.g.a():null};l.of=function(){return this.j};
l.Cd=function(b,c){var d=b.pixelRatio,e=b.viewState,f=e.center,g=e.resolution,h=e.rotation,k=this.a.ga(),m=b.viewHints,n=b.extent;void 0!==c.extent&&(n=qe(n,c.extent));m[0]||m[1]||le(n)||(e=k.D(n,g,d,e.projection))&&wk(this,e)&&(this.g=e);if(this.g){var e=this.g,m=e.J(),n=e.aa(),p=e.b,g=d*n/(g*p);rk(this.j,d*b.size[0]/2,d*b.size[1]/2,g,g,h,p*(m[0]-f[0])/n,p*(f[1]-m[3])/n);this.f=null;yk(b.attributions,e.j);zk(b,k)}return!0};function $p(b){Gm.call(this,b);this.b=this.j=null;this.B=!1;this.i=null;this.v=Fd();this.g=null;this.C=this.G=this.D=NaN;this.l=this.f=null;this.U=[0,0]}y($p,Gm);$p.prototype.Bd=function(){return this.j};$p.prototype.of=function(){return this.v};
$p.prototype.Cd=function(b,c){var d=b.pixelRatio,e=b.viewState,f=e.projection,g=this.a,h=g.ga(),k=h.ib(f),m=h.ce(),n=Sh(k,e.resolution),p=h.Nb(n,b.pixelRatio,f),q=p[0]/qd(k.Ha(n),this.U)[0],r=k.aa(n),q=r/q,t=e.center,x;r==e.resolution?(t=Bk(t,r,b.size),x=pe(t,r,e.rotation,b.size)):x=b.extent;void 0!==c.extent&&(x=qe(x,c.extent));if(le(x))return!1;var z=Ph(k,x,r),B=p[0]*mg(z),A=p[1]*lg(z),v,O;this.j?(v=this.j,O=this.i,this.b[0]<B||this.b[1]<A||this.G!==p[0]||this.C!==p[1]||this.B&&(this.b[0]>B||this.b[1]>
A)?(v.width=B,v.height=A,this.b=[B,A],this.B=!Km(this.b),this.f=null):(B=this.b[0],A=this.b[1],(v=n!=this.D)||(v=this.f,v=!(v.a<=z.a&&z.f<=v.f&&v.c<=z.c&&z.b<=v.b)),v&&(this.f=null))):(O=Yi(B,A),this.j=O.canvas,this.b=[B,A],this.i=O,this.B=!Km(this.b));var K,I;this.f?(A=this.f,B=mg(A)):(B/=p[0],A/=p[1],K=z.a-Math.floor((B-mg(z))/2),I=z.c-Math.floor((A-lg(z))/2),this.D=n,this.G=p[0],this.C=p[1],this.f=new ig(K,K+B-1,I,I+A-1),this.l=Array(B*A),A=this.f);v={};v[n]={};var G=[],la=this.bd(h,f,v),Fa=g.b(),
L=Qd(),Ba=new ig(0,0,0,0),Sa,Ma,mb;for(I=z.a;I<=z.f;++I)for(mb=z.c;mb<=z.b;++mb)Ma=h.Mb(n,I,mb,d,f),K=Ma.state,2==K||4==K||3==K&&!Fa?v[n][hg(Ma.a)]=Ma:(Sa=Mh(k,Ma.a,la,Ba,L),Sa||(G.push(Ma),(Sa=Oh(k,Ma.a,Ba,L))&&la(n+1,Sa)));la=0;for(Sa=G.length;la<Sa;++la)Ma=G[la],I=p[0]*(Ma.a[1]-A.a),mb=p[1]*(A.b-Ma.a[2]),O.clearRect(I,mb,p[0],p[1]);G=Object.keys(v).map(Number);qb(G);var eb=h.pa,Uc=je(k.Aa([n,A.a,A.b],L)),vc,Te,Hj,hi,eg,sm,la=0;for(Sa=G.length;la<Sa;++la)if(vc=G[la],p=h.Nb(vc,d,f),hi=v[vc],vc==
n)for(Hj in hi)Ma=hi[Hj],Te=(Ma.a[2]-A.c)*B+(Ma.a[1]-A.a),this.l[Te]!=Ma&&(I=p[0]*(Ma.a[1]-A.a),mb=p[1]*(A.b-Ma.a[2]),K=Ma.state,4!=K&&(3!=K||Fa)&&eb||O.clearRect(I,mb,p[0],p[1]),2==K&&O.drawImage(Ma.Ua(),m,m,p[0],p[1],I,mb,p[0],p[1]),this.l[Te]=Ma);else for(Hj in vc=k.aa(vc)/r,hi)for(Ma=hi[Hj],Te=k.Aa(Ma.a,L),I=(Te[0]-Uc[0])/q,mb=(Uc[1]-Te[3])/q,sm=vc*p[0],eg=vc*p[1],K=Ma.state,4!=K&&eb||O.clearRect(I,mb,sm,eg),2==K&&O.drawImage(Ma.Ua(),m,m,p[0],p[1],I,mb,sm,eg),Ma=Nh(k,Te,n,Ba),K=Math.max(Ma.a,
A.a),mb=Math.min(Ma.f,A.f),I=Math.max(Ma.c,A.c),Ma=Math.min(Ma.b,A.b);K<=mb;++K)for(eg=I;eg<=Ma;++eg)Te=(eg-A.c)*B+(K-A.a),this.l[Te]=void 0;Ak(b.usedTiles,h,n,z);Ck(b,h,k,d,f,x,n,g.a());xk(b,h);zk(b,h);rk(this.v,d*b.size[0]/2,d*b.size[1]/2,d*q/e.resolution,d*q/e.resolution,e.rotation,(Uc[0]-t[0])/q,(t[1]-Uc[1])/q);this.g=null;return!0};
$p.prototype.sc=function(b,c,d,e){if(this.i&&(this.g||(this.g=Fd(),Ld(this.v,this.g)),b=Jm(b,this.g),0<this.i.getImageData(b[0],b[1],1,1).data[3]))return d.call(e,this.a)};function aq(b){Gm.call(this,b);this.f=!1;this.B=-1;this.l=NaN;this.j=Qd();this.b=this.i=null;this.g=Yi()}y(aq,Gm);
aq.prototype.u=function(b,c,d){var e=b.extent,f=b.pixelRatio,g=c.rb?b.skippedFeatureUids:{},h=b.viewState,k=h.projection,h=h.rotation,m=k.J(),n=this.a.ga(),p=Im(this,b,0);Hm(this,"precompose",d,b,p);var q=this.b;if(q&&!q.Ma()){var r;gd(this.a,"render")?(this.g.canvas.width=d.canvas.width,this.g.canvas.height=d.canvas.height,r=this.g):r=d;var t=r.globalAlpha;r.globalAlpha=c.opacity;q.b(r,f,p,h,g);if(n.S&&k.b&&!Zd(m,e)){c=e[0];k=me(m);for(n=0;c<m[0];)--n,p=k*n,p=Im(this,b,p),q.b(r,f,p,h,g),c+=k;n=0;
for(c=e[2];c>m[2];)++n,p=k*n,p=Im(this,b,p),q.b(r,f,p,h,g),c-=k;p=Im(this,b,0)}r!=d&&(Hm(this,"render",r,b,p),d.drawImage(r.canvas,0,0));r.globalAlpha=t}Hm(this,"postcompose",d,b,p)};aq.prototype.$a=function(b,c,d,e){if(this.b){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.a,k=c.layerStates[w(h)],m={};return this.b.f(b,f,g,k.rb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)})}};aq.prototype.v=function(){vk(this)};
aq.prototype.Cd=function(b){function c(b){var c,e=b.Ob();e?c=e.call(b,n):(e=d.b)&&(c=e(b,n));if(c){if(c){var f,g=!1,e=0;for(f=c.length;e<f;++e)g=gn(r,b,c[e],fn(n,p),this.v,this)||g;b=g}else b=!1;this.f=this.f||b}}var d=this.a,e=d.ga();yk(b.attributions,e.j);zk(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.i,k=d.l;if(!this.f&&!h&&f||!k&&g)return!0;var m=b.extent,k=b.viewState,f=k.projection,n=k.resolution,p=b.pixelRatio,g=d.c,q=d.a,h=rm(d);void 0===h&&(h=en);m=Ud(m,q*n);q=k.projection.J();e.S&&k.projection.b&&
!Zd(q,b.extent)&&(b=Math.max(me(m)/2,me(q)),m[0]=q[0]-b,m[2]=q[2]+b);if(!this.f&&this.l==n&&this.B==g&&this.i==h&&Zd(this.j,m))return!0;wc(this.b);this.b=null;this.f=!1;var r=new $m(.5*n/p,m,n,d.a);e.Mc(m,n,f);if(h){var t=[];e.ob(m,function(b){t.push(b)},this);qb(t,h);t.forEach(c,this)}else e.ob(m,c,this);an(r);this.l=n;this.B=g;this.i=h;this.j=m;this.b=r;return!0};function bq(b,c,d,e,f){Eh.call(this,b,c);this.j=e;this.c=this.g=null;this.b={jd:!1,Wf:null,Uh:-1,Jd:null};this.B=f;this.i=d}y(bq,Eh);l=bq.prototype;l.X=function(){bq.ca.X.call(this)};l.Nl=function(){return this.j};l.tb=function(){return this.i};l.load=function(){0==this.state&&(this.state=1,Fh(this),this.B(this,this.i),this.l(null,NaN,null))};l.ci=function(b){this.l=b};function cq(b,c){var d=/\{z\}/g,e=/\{x\}/g,f=/\{y\}/g,g=/\{-y\}/g;return function(h){if(h)return b.replace(d,h[0].toString()).replace(e,h[1].toString()).replace(f,function(){return(-h[2]-1).toString()}).replace(g,function(){return(lg(c.c?c.c[h[0]]:null)+h[2]).toString()})}}function dq(b,c){for(var d=b.length,e=Array(d),f=0;f<d;++f)e[f]=cq(b[f],c);return eq(e)}function eq(b){return 1===b.length?b[0]:function(c,d,e){if(c)return b[rd((c[1]<<c[0])+c[2],b.length)](c,d,e)}}function fq(){}
function gq(b){var c=[],d=/\{(\d)-(\d)\}/.exec(b)||/\{([a-z])-([a-z])\}/.exec(b);if(d){var e=d[2].charCodeAt(0),f;for(f=d[1].charCodeAt(0);f<=e;++f)c.push(b.replace(d[0],String.fromCharCode(f)))}else c.push(b);return c};function hq(b){Xh.call(this,{attributions:b.attributions,ef:b.ef,extent:b.extent,logo:b.logo,opaque:b.opaque,projection:b.projection,state:b.state?b.state:void 0,tileGrid:b.tileGrid,tilePixelRatio:b.tilePixelRatio,wrapX:b.wrapX});this.tileLoadFunction=b.tileLoadFunction;this.tileUrlFunction=b.tileUrlFunction?b.tileUrlFunction:fq;this.urls=null;b.urls?b.tileUrlFunction?this.urls=b.urls:this.Wa(b.urls):b.url&&this.Va(b.url);b.tileUrlFunction&&this.Ka(b.tileUrlFunction)}y(hq,Xh);l=hq.prototype;
l.Xa=function(){return this.tileLoadFunction};l.Ya=function(){return this.tileUrlFunction};l.Za=function(){return this.urls};l.uh=function(b){b=b.target;switch(b.state){case 1:this.o(new $h("tileloadstart",b));break;case 2:this.o(new $h("tileloadend",b));break;case 3:this.o(new $h("tileloaderror",b))}};l.cb=function(b){this.a.clear();this.tileLoadFunction=b;this.s()};l.Ka=function(b){this.a.clear();this.tileUrlFunction=b;this.s()};l.Va=function(b){this.Ka(dq(gq(b),this.tileGrid));this.urls=[b]};
l.Wa=function(b){this.Ka(dq(b,this.tileGrid));this.urls=b};l.eg=function(b,c,d){b=this.hb(b,c,d);Ah(this.a,b)&&this.a.get(b)};function iq(b){hq.call(this,{attributions:b.attributions,ef:128,extent:b.extent,logo:b.logo,opaque:b.opaque,projection:b.projection,state:b.state?b.state:void 0,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction?b.tileLoadFunction:jq,tileUrlFunction:b.tileUrlFunction,tilePixelRatio:b.tilePixelRatio,url:b.url,urls:b.urls,wrapX:void 0===b.wrapX?!0:b.wrapX});this.g=b.format?b.format:null;this.tileClass=b.tileClass?b.tileClass:bq}y(iq,hq);
iq.prototype.Mb=function(b,c,d,e,f){var g=this.hb(b,c,d);if(Ah(this.a,g))return this.a.get(g);b=[b,c,d];e=(c=Zh(this,b,f))?this.tileUrlFunction(c,e,f):void 0;e=new this.tileClass(b,void 0!==e?0:4,void 0!==e?e:"",this.g,this.tileLoadFunction);C(e,"change",this.uh,!1,this);this.a.set(g,e);return e};function jq(b,c){b.ci(Dp(c,b.j))};function kq(b){Gm.call(this,b);this.f=Yi();this.b=!1;this.g=[];this.j=Qd();this.i=[NaN,NaN];this.B=Fd()}y(kq,Gm);
kq.prototype.u=function(b,c,d){var e=b.pixelRatio,f=c.rb?b.skippedFeatureUids:{},g=b.viewState,h=g.center,k=g.projection,m=g.resolution,n=g.rotation,p=this.a,q=p.ga(),r=Im(this,b,0);Hm(this,"precompose",d,b,r);gd(p,"render")?(this.f.canvas.width=d.canvas.width,this.f.canvas.height=d.canvas.height,p=this.f):p=d;var t=p.globalAlpha;p.globalAlpha=c.opacity;c=this.g;var x=q.tileGrid,z,B,A,v,O,K;B=0;for(A=c.length;B<A;++B)v=c[B],z=v.a[0],O=x.Ha(z),K=q.Nb(z,e,k),O=K[0]/qd(O,this.i)[0],z=x.aa(z),z/=O,"tile-pixels"==
v.c.c&&(r=je(x.Aa(v.a,this.j)),r=rk(this.B,e*b.size[0]/2,e*b.size[1]/2,e*z/m,e*z/m,g.rotation,(r[0]-h[0])/z,(h[1]-r[1])/z)),v.b.Jd.b(p,e,r,n,f);r=Im(this,b,0);p!=d&&(Hm(this,"render",p,b,r),d.drawImage(p.canvas,0,0));p.globalAlpha=t;Hm(this,"postcompose",d,b,r)};
function lq(b,c,d,e){function f(b){var c;b.Ob()?c=b.Ob().call(b,t):d.b&&(c=(0,d.b)(b,t));if(c){var e=z,f=x;if(c){var g,h,m=!1;g=0;for(h=c.length;g<h;++g)m=gn(f,b,c[g],e,this.l,this)||m;b=m}else b=!1;this.b=this.b||b;k.jd=k.jd||b}}var g=d.c,h=rm(d)||null,k=c.b;if(k.jd||k.Uh!=g||k.Wf!=h){wc(k.Jd);k.Jd=null;k.jd=!1;var m=d.ga(),n=m.tileGrid,p=c.a,q="tile-pixels"==c.c.c,r;q?(r=m.Nb(p[0],e,c.c),r=[0,0,r[0],r[1]]):r=n.Aa(p);var t=n.aa(p[0]),m=q?m.D:t;k.jd=!1;var x=new $m(0,r,m,d.a),z=fn(m,e);c=c.g;h&&h!==
k.Wf&&c.sort(h);c.forEach(f,b);an(x);k.Uh=g;k.Wf=h;k.Jd=x}}
kq.prototype.$a=function(b,c,d,e){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.a,k=c.layerStates[w(h)],m={},n=this.g,p=h.ga(),q=p.tileGrid,r,t,x,z,B,A,v;x=0;for(z=n.length;x<z;++x)A=n[x],t=A.a,B=p.tileGrid.Aa(t,this.j),Xd(B,b)&&("tile-pixels"===A.c.c?(B=je(B),f=p.D,v=q.aa(t[0])/f,qd(q.Ha(t[0])),t=[(b[0]-B[0])/v,(B[1]-b[1])/v]):t=b,A=A.b.Jd,r=r||A.f(t,f,g,k.rb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)}));return r};
kq.prototype.l=function(){vk(this)};
kq.prototype.Cd=function(b,c){var d=this.a,e=d.ga();yk(b.attributions,e.j);zk(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.i,k=d.l;if(!this.b&&!h&&f||!k&&g)return!0;g=b.extent;c.extent&&(g=qe(g,c.extent));if(le(g))return!1;for(var f=b.viewState,h=f.projection,k=f.resolution,f=b.pixelRatio,m=e.tileGrid,n=m.a,p=n.length-1;0<p&&n[p]<k;)--p;n=Nh(m,g,p);Ak(b.usedTiles,e,p,n);Ck(b,e,m,f,h,g,p,d.g());xk(b,e);g={};g[p]={};var q=this.bd(e,h,g),r=d.U(),t=this.j,x=new ig(0,0,0,0),z,B,A;for(B=n.a;B<=n.f;++B)for(A=
n.c;A<=n.b;++A)k=e.Mb(p,B,A,f,h),z=k.state,2==z||4==z||3==z&&!r?g[p][hg(k.a)]=k:(z=Mh(m,k.a,q,x,t),z||(k=Oh(m,k.a,x,t))&&q(p+1,k));this.b=!1;e=Object.keys(g).map(Number);e.sort();for(var h=[],v,m=0,p=e.length;m<p;++m)for(v in k=e[m],n=g[k],n)k=n[v],2==k.state&&(h.push(k),lq(this,k,d,f));this.g=h;return!0};function mq(b,c){Jk.call(this,0,c);this.b=Yi();this.a=this.b.canvas;this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Pg(b,this.a,0);this.c=!0;this.j=Fd()}y(mq,Jk);mq.prototype.jf=function(b){return b instanceof am?new Zp(b):b instanceof F?new $p(b):b instanceof J?new kq(b):b instanceof H?new aq(b):null};
function nq(b,c,d){var e=b.g,f=b.b;if(gd(e,c)){var g=d.extent,h=d.pixelRatio,k=d.viewState.rotation,m=d.pixelRatio,n=d.viewState,p=n.resolution;b=rk(b.j,b.a.width/2,b.a.height/2,m/p,-m/p,-n.rotation,-n.center[0],-n.center[1]);g=new tm(f,h,g,b,k);e.o(new mk(c,e,g,d,f,null));Fm(g)}}mq.prototype.V=function(){return"canvas"};
mq.prototype.Oe=function(b){if(b){var c=this.b,d=b.size[0]*b.pixelRatio,e=b.size[1]*b.pixelRatio;this.a.width!=d||this.a.height!=e?(this.a.width=d,this.a.height=e):c.clearRect(0,0,this.a.width,this.a.height);Kk(b);nq(this,"precompose",b);d=b.layerStatesArray;sb(d);var e=b.viewState.resolution,f,g,h,k;f=0;for(g=d.length;f<g;++f)k=d[f],h=k.layer,h=Mk(this,h),ok(k,e)&&"ready"==k.S&&h.Cd(b,k)&&h.u(b,k,c);nq(this,"postcompose",b);this.c||(ph(this.a,!0),this.c=!0);Nk(this,b);b.postRenderFunctions.push(Lk)}else this.c&&
(ph(this.a,!1),this.c=!1)};function oq(b,c){uk.call(this,b);this.target=c}y(oq,uk);oq.prototype.g=wa;oq.prototype.l=wa;function pq(b){var c=Mg("DIV");c.style.position="absolute";oq.call(this,b,c);this.b=null;this.f=Hd()}y(pq,oq);pq.prototype.$a=function(b,c,d,e){var f=this.a;return f.ga().ze(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};pq.prototype.g=function(){Og(this.target);this.b=null};
pq.prototype.j=function(b,c){var d=b.viewState,e=d.center,f=d.resolution,g=d.rotation,h=this.b,k=this.a.ga(),m=b.viewHints,n=b.extent;void 0!==c.extent&&(n=qe(n,c.extent));m[0]||m[1]||le(n)||(d=k.D(n,f,b.pixelRatio,d.projection))&&wk(this,d)&&(h=d);h&&(m=h.J(),n=h.aa(),d=Fd(),rk(d,b.size[0]/2,b.size[1]/2,n/f,n/f,g,(m[0]-e[0])/n,(e[1]-m[3])/n),h!=this.b&&(e=h.a(this),e.style.maxWidth="none",e.style.position="absolute",Og(this.target),this.target.appendChild(e),this.b=h),sk(d,this.f)||(bj(this.target,
d),Id(this.f,d)),yk(b.attributions,h.j),zk(b,k));return!0};function qq(b){var c=Mg("DIV");c.style.position="absolute";oq.call(this,b,c);this.f=!0;this.B=1;this.i=0;this.b={}}y(qq,oq);qq.prototype.g=function(){Og(this.target);this.i=0};
qq.prototype.j=function(b,c){if(!c.visible)return this.f&&(ph(this.target,!1),this.f=!1),!0;var d=b.pixelRatio,e=b.viewState,f=e.projection,g=this.a,h=g.ga(),k=h.ib(f),m=h.ce(),n=Sh(k,e.resolution),p=k.aa(n),q=e.center,r;p==e.resolution?(q=Bk(q,p,b.size),r=pe(q,p,e.rotation,b.size)):r=b.extent;void 0!==c.extent&&(r=qe(r,c.extent));var p=Ph(k,r,p),t={};t[n]={};var x=this.bd(h,f,t),z=g.b(),B=Qd(),A=new ig(0,0,0,0),v,O,K,I;for(K=p.a;K<=p.f;++K)for(I=p.c;I<=p.b;++I)v=h.Mb(n,K,I,d,f),O=v.state,2==O?t[n][hg(v.a)]=
v:4==O||3==O&&!z||(O=Mh(k,v.a,x,A,B),O||(v=Oh(k,v.a,A,B))&&x(n+1,v));var G;if(this.i!=h.c){for(G in this.b)z=this.b[+G],Qg(z.target);this.b={};this.i=h.c}B=Object.keys(t).map(Number);qb(B);var x={},la;K=0;for(I=B.length;K<I;++K){G=B[K];G in this.b?z=this.b[G]:(z=k.ie(q,G),z=new rq(k,z),x[G]=!0,this.b[G]=z);G=t[G];for(la in G){v=z;O=G[la];var Fa=m,L=O.a,Ba=L[0],Sa=L[1],Ma=L[2],L=hg(L);if(!(L in v.c)){var Ba=qd(v.g.Ha(Ba),v.l),mb=O.Ua(v),eb=mb.style;eb.maxWidth="none";var Uc=void 0,vc=void 0;0<Fa?(Uc=
Mg("DIV"),vc=Uc.style,vc.overflow="hidden",vc.width=Ba[0]+"px",vc.height=Ba[1]+"px",eb.position="absolute",eb.left=-Fa+"px",eb.top=-Fa+"px",eb.width=Ba[0]+2*Fa+"px",eb.height=Ba[1]+2*Fa+"px",Uc.appendChild(mb)):(eb.width=Ba[0]+"px",eb.height=Ba[1]+"px",Uc=mb,vc=eb);vc.position="absolute";vc.left=(Sa-v.b[1])*Ba[0]+"px";vc.top=(v.b[2]-Ma)*Ba[1]+"px";v.a||(v.a=document.createDocumentFragment());v.a.appendChild(Uc);v.c[L]=O}}z.a&&(z.target.appendChild(z.a),z.a=null)}m=Object.keys(this.b).map(Number);
qb(m);K=Fd();la=0;for(B=m.length;la<B;++la)if(G=m[la],z=this.b[G],G in t)if(v=z.aa(),I=z.Ca(),rk(K,b.size[0]/2,b.size[1]/2,v/e.resolution,v/e.resolution,e.rotation,(I[0]-q[0])/v,(q[1]-I[1])/v),z.setTransform(K),G in x){for(--G;0<=G;--G)if(G in this.b){I=this.b[G].target;I.parentNode&&I.parentNode.insertBefore(z.target,I.nextSibling);break}0>G&&Pg(this.target,z.target,0)}else{if(!b.viewHints[0]&&!b.viewHints[1]){O=Nh(z.g,r,z.b[0],A);G=[];v=I=void 0;for(v in z.c)I=z.c[v],O.contains(I.a)||G.push(I);
Fa=O=void 0;O=0;for(Fa=G.length;O<Fa;++O)I=G[O],v=hg(I.a),Qg(I.Ua(z)),delete z.c[v]}}else Qg(z.target),delete this.b[G];c.opacity!=this.B&&(this.B=this.target.style.opacity=c.opacity);c.visible&&!this.f&&(ph(this.target,!0),this.f=!0);Ak(b.usedTiles,h,n,p);Ck(b,h,k,d,f,r,n,g.a());xk(b,h);zk(b,h);return!0};
function rq(b,c){this.target=Mg("DIV");this.target.style.position="absolute";this.target.style.width="100%";this.target.style.height="100%";this.g=b;this.b=c;this.j=je(b.Aa(c));this.i=b.aa(c[0]);this.c={};this.a=null;this.f=Hd();this.l=[0,0]}rq.prototype.Ca=function(){return this.j};rq.prototype.aa=function(){return this.i};rq.prototype.setTransform=function(b){sk(b,this.f)||(bj(this.target,b),Id(this.f,b))};function sq(b){this.i=Yi();var c=this.i.canvas;c.style.maxWidth="none";c.style.position="absolute";oq.call(this,b,c);this.f=!1;this.D=-1;this.v=NaN;this.B=Qd();this.b=this.u=null;this.G=Fd();this.C=Fd()}y(sq,oq);
sq.prototype.l=function(b,c){var d=b.viewState,e=d.center,f=d.rotation,g=d.resolution,d=b.pixelRatio,h=b.size[0],k=b.size[1],m=h*d,n=k*d,e=rk(this.G,d*h/2,d*k/2,d/g,-d/g,-f,-e[0],-e[1]),g=this.i;g.canvas.width=m;g.canvas.height=n;h=rk(this.C,0,0,1/d,1/d,0,-(m-h)/2*d,-(n-k)/2*d);bj(g.canvas,h);tq(this,"precompose",b,e);(h=this.b)&&!h.Ma()&&(g.globalAlpha=c.opacity,h.b(g,d,e,f,c.rb?b.skippedFeatureUids:{}),tq(this,"render",b,e));tq(this,"postcompose",b,e)};
function tq(b,c,d,e){var f=b.i;b=b.a;gd(b,c)&&(e=new tm(f,d.pixelRatio,d.extent,e,d.viewState.rotation),b.o(new mk(c,b,e,d,f,null)),Fm(e))}sq.prototype.$a=function(b,c,d,e){if(this.b){var f=c.viewState.resolution,g=c.viewState.rotation,h=this.a,k=c.layerStates[w(h)],m={};return this.b.f(b,f,g,k.rb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)})}};sq.prototype.S=function(){vk(this)};
sq.prototype.j=function(b){function c(b){var c,e=b.Ob();e?c=e.call(b,m):(e=d.b)&&(c=e(b,m));if(c){if(c){var f,g=!1,e=0;for(f=c.length;e<f;++e)g=gn(p,b,c[e],fn(m,n),this.S,this)||g;b=g}else b=!1;this.f=this.f||b}}var d=this.a,e=d.ga();yk(b.attributions,e.j);zk(b,e);var f=b.viewHints[0],g=b.viewHints[1],h=d.i,k=d.l;if(!this.f&&!h&&f||!k&&g)return!0;var g=b.extent,h=b.viewState,f=h.projection,m=h.resolution,n=b.pixelRatio;b=d.c;k=d.a;h=rm(d);void 0===h&&(h=en);g=Ud(g,k*m);if(!this.f&&this.v==m&&this.D==
b&&this.u==h&&Zd(this.B,g))return!0;wc(this.b);this.b=null;this.f=!1;var p=new $m(.5*m/n,g,m,d.a);e.Mc(g,m,f);if(h){var q=[];e.ob(g,function(b){q.push(b)},this);qb(q,h);q.forEach(c,this)}else e.ob(g,c,this);an(p);this.v=m;this.D=b;this.u=h;this.B=g;this.b=p;return!0};function uq(b,c){Jk.call(this,0,c);this.b=Yi();var d=this.b.canvas;d.style.position="absolute";d.style.width="100%";d.style.height="100%";d.className="ol-unselectable";Pg(b,d,0);this.j=Fd();this.a=Mg("DIV");this.a.className="ol-unselectable";d=this.a.style;d.position="absolute";d.width="100%";d.height="100%";C(this.a,"touchstart",zc);Pg(b,this.a,0);this.c=!0}y(uq,Jk);uq.prototype.X=function(){Qg(this.a);uq.ca.X.call(this)};
uq.prototype.jf=function(b){if(b instanceof am)b=new pq(b);else if(b instanceof F)b=new qq(b);else if(b instanceof H)b=new sq(b);else return null;return b};function vq(b,c,d){var e=b.g;if(gd(e,c)){var f=d.extent,g=d.pixelRatio,h=d.viewState,k=h.rotation,m=b.b,n=m.canvas;rk(b.j,n.width/2,n.height/2,g/h.resolution,-g/h.resolution,-h.rotation,-h.center[0],-h.center[1]);b=new tm(m,g,f,b.j,k);e.o(new mk(c,e,b,d,m,null));Fm(b)}}uq.prototype.V=function(){return"dom"};
uq.prototype.Oe=function(b){if(b){var c=this.g;if(gd(c,"precompose")||gd(c,"postcompose")){var c=this.b.canvas,d=b.pixelRatio;c.width=b.size[0]*d;c.height=b.size[1]*d}vq(this,"precompose",b);c=b.layerStatesArray;sb(c);var d=b.viewState.resolution,e,f,g,h;e=0;for(f=c.length;e<f;++e)h=c[e],g=h.layer,g=Mk(this,g),Pg(this.a,g.target,e),ok(h,d)&&"ready"==h.S?g.j(b,h)&&g.l(b,h):g.g();var c=b.layerStates,k;for(k in this.f)k in c||(g=this.f[k],Qg(g.target));this.c||(ph(this.a,!0),this.c=!0);Kk(b);Nk(this,
b);b.postRenderFunctions.push(Lk);vq(this,"postcompose",b)}else this.c&&(ph(this.a,!1),this.c=!1)};function wq(b){this.a=b}function xq(b){this.a=b}y(xq,wq);xq.prototype.V=function(){return 35632};function yq(b){this.a=b}y(yq,wq);yq.prototype.V=function(){return 35633};function zq(){this.a="precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"}y(zq,xq);ea(zq);
function Aq(){this.a="varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"}y(Aq,yq);ea(Aq);
function Bq(b,c){this.l=b.getUniformLocation(c,"j");this.B=b.getUniformLocation(c,"i");this.j=b.getUniformLocation(c,"k");this.i=b.getUniformLocation(c,"h");this.a=b.getAttribLocation(c,"e");this.c=b.getAttribLocation(c,"f");this.f=b.getAttribLocation(c,"c");this.b=b.getAttribLocation(c,"g");this.g=b.getAttribLocation(c,"d")};function Cq(b){this.a=void 0!==b?b:[]};function Dq(b,c){this.u=b;this.a=c;this.c={};this.j={};this.g={};this.l=this.B=this.f=this.i=null;(this.b=xb(va,"OES_element_index_uint"))&&c.getExtension("OES_element_index_uint");C(this.u,"webglcontextlost",this.On,!1,this);C(this.u,"webglcontextrestored",this.Pn,!1,this)}
function Eq(b,c,d){var e=b.a,f=d.a,g=w(d);if(g in b.c)e.bindBuffer(c,b.c[g].buffer);else{var h=e.createBuffer();e.bindBuffer(c,h);var k;34962==c?k=new Float32Array(f):34963==c&&(k=b.b?new Uint32Array(f):new Uint16Array(f));e.bufferData(c,k,35044);b.c[g]={Eb:d,buffer:h}}}function Fq(b,c){var d=b.a,e=w(c),f=b.c[e];d.isContextLost()||d.deleteBuffer(f.buffer);delete b.c[e]}l=Dq.prototype;
l.X=function(){var b=this.a;b.isContextLost()||(Kb(this.c,function(c){b.deleteBuffer(c.buffer)}),Kb(this.g,function(c){b.deleteProgram(c)}),Kb(this.j,function(c){b.deleteShader(c)}),b.deleteFramebuffer(this.f),b.deleteRenderbuffer(this.l),b.deleteTexture(this.B))};function Gq(b){return b.u}l.Nn=function(){return this.a};
function Hq(b){if(!b.f){var c=b.a,d=c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER,d);var e=Iq(c,1,1),f=c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER,f);c.renderbufferStorage(c.RENDERBUFFER,c.DEPTH_COMPONENT16,1,1);c.framebufferTexture2D(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,e,0);c.framebufferRenderbuffer(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.RENDERBUFFER,f);c.bindTexture(c.TEXTURE_2D,null);c.bindRenderbuffer(c.RENDERBUFFER,null);c.bindFramebuffer(c.FRAMEBUFFER,null);b.f=d;
b.B=e;b.l=f}return b.f}function Jq(b,c){var d=w(c);if(d in b.j)return b.j[d];var e=b.a,f=e.createShader(c.V());e.shaderSource(f,c.a);e.compileShader(f);return b.j[d]=f}function Kq(b,c,d){var e=w(c)+"/"+w(d);if(e in b.g)return b.g[e];var f=b.a,g=f.createProgram();f.attachShader(g,Jq(b,c));f.attachShader(g,Jq(b,d));f.linkProgram(g);return b.g[e]=g}l.On=function(){Tb(this.c);Tb(this.j);Tb(this.g);this.l=this.B=this.f=this.i=null};l.Pn=function(){};
l.Ie=function(b){if(b==this.i)return!1;this.a.useProgram(b);this.i=b;return!0};function Lq(b,c,d){var e=b.createTexture();b.bindTexture(b.TEXTURE_2D,e);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);void 0!==c&&b.texParameteri(3553,10242,c);void 0!==d&&b.texParameteri(3553,10243,d);return e}function Iq(b,c,d){var e=Lq(b,void 0,void 0);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,c,d,0,b.RGBA,b.UNSIGNED_BYTE,null);return e}
function Mq(b,c){var d=Lq(b,33071,33071);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,c);return d};function Nq(b,c){this.G=this.C=void 0;this.B=oe(c);this.D=[];this.j=[];this.oa=void 0;this.g=[];this.f=[];this.U=this.S=void 0;this.c=[];this.ia=this.l=null;this.T=void 0;this.gb=Hd();this.Cb=Hd();this.ea=this.Y=void 0;this.Db=Hd();this.qa=this.fb=this.fa=void 0;this.xa=[];this.i=[];this.a=[];this.v=null;this.b=[];this.u=[];this.pa=void 0}y(Nq,lk);
function Oq(b,c){var d=b.v,e=b.l,f=b.xa,g=b.i,h=c.a;return function(){if(!h.isContextLost()){var b,m;b=0;for(m=f.length;b<m;++b)h.deleteTexture(f[b]);b=0;for(m=g.length;b<m;++b)h.deleteTexture(g[b])}Fq(c,d);Fq(c,e)}}
function Pq(b,c,d,e){var f=b.C,g=b.G,h=b.oa,k=b.S,m=b.U,n=b.T,p=b.Y,q=b.ea,r=b.fa?1:0,t=b.fb,x=b.qa,z=b.pa,B=Math.cos(t),t=Math.sin(t),A=b.c.length,v=b.a.length,O,K,I,G,la,Fa;for(O=0;O<d;O+=e)la=c[O]-b.B[0],Fa=c[O+1]-b.B[1],K=v/8,I=-x*f,G=-x*(h-g),b.a[v++]=la,b.a[v++]=Fa,b.a[v++]=I*B-G*t,b.a[v++]=I*t+G*B,b.a[v++]=p/m,b.a[v++]=(q+h)/k,b.a[v++]=n,b.a[v++]=r,I=x*(z-f),G=-x*(h-g),b.a[v++]=la,b.a[v++]=Fa,b.a[v++]=I*B-G*t,b.a[v++]=I*t+G*B,b.a[v++]=(p+z)/m,b.a[v++]=(q+h)/k,b.a[v++]=n,b.a[v++]=r,I=x*(z-f),
G=x*g,b.a[v++]=la,b.a[v++]=Fa,b.a[v++]=I*B-G*t,b.a[v++]=I*t+G*B,b.a[v++]=(p+z)/m,b.a[v++]=q/k,b.a[v++]=n,b.a[v++]=r,I=-x*f,G=x*g,b.a[v++]=la,b.a[v++]=Fa,b.a[v++]=I*B-G*t,b.a[v++]=I*t+G*B,b.a[v++]=p/m,b.a[v++]=q/k,b.a[v++]=n,b.a[v++]=r,b.c[A++]=K,b.c[A++]=K+1,b.c[A++]=K+2,b.c[A++]=K,b.c[A++]=K+2,b.c[A++]=K+3}Nq.prototype.Fb=function(b,c){this.b.push(this.c.length);this.u.push(c);var d=b.ja(),e=b.sa();Pq(this,d,d.length,e)};
Nq.prototype.Gb=function(b,c){this.b.push(this.c.length);this.u.push(c);var d=b.ja(),e=b.sa();Pq(this,d,d.length,e)};function Qq(b,c){var d=c.a;b.D.push(b.c.length);b.j.push(b.c.length);b.v=new Cq(b.a);Eq(c,34962,b.v);b.l=new Cq(b.c);Eq(c,34963,b.l);var e={};Rq(b.xa,b.g,e,d);Rq(b.i,b.f,e,d);b.C=void 0;b.G=void 0;b.oa=void 0;b.g=null;b.f=null;b.S=void 0;b.U=void 0;b.c=null;b.T=void 0;b.Y=void 0;b.ea=void 0;b.fa=void 0;b.fb=void 0;b.qa=void 0;b.a=null;b.pa=void 0}
function Rq(b,c,d,e){var f,g,h,k=c.length;for(h=0;h<k;++h)f=c[h],g=w(f).toString(),g in d?f=d[g]:(f=Mq(e,f),d[g]=f),b[h]=f}
function Sq(b,c,d,e,f,g,h,k,m,n,p){var q=c.a;Eq(c,34962,b.v);Eq(c,34963,b.l);var r=zq.Yb(),t=Aq.Yb(),t=Kq(c,r,t);b.ia?r=b.ia:(r=new Bq(q,t),b.ia=r);c.Ie(t);q.enableVertexAttribArray(r.f);q.vertexAttribPointer(r.f,2,5126,!1,32,0);q.enableVertexAttribArray(r.a);q.vertexAttribPointer(r.a,2,5126,!1,32,8);q.enableVertexAttribArray(r.g);q.vertexAttribPointer(r.g,2,5126,!1,32,16);q.enableVertexAttribArray(r.c);q.vertexAttribPointer(r.c,1,5126,!1,32,24);q.enableVertexAttribArray(r.b);q.vertexAttribPointer(r.b,
1,5126,!1,32,28);t=b.Db;rk(t,0,0,2/(e*g[0]),2/(e*g[1]),-f,-(d[0]-b.B[0]),-(d[1]-b.B[1]));d=b.Cb;e=2/g[0];g=2/g[1];Jd(d);d[0]=e;d[5]=g;d[10]=1;d[15]=1;g=b.gb;Jd(g);0!==f&&Od(g,-f);q.uniformMatrix4fv(r.i,!1,t);q.uniformMatrix4fv(r.B,!1,d);q.uniformMatrix4fv(r.l,!1,g);q.uniform1f(r.j,h);var x;if(void 0===m)Tq(b,q,c,k,b.xa,b.D);else{if(n)a:{f=c.b?5125:5123;c=c.b?4:2;g=b.b.length-1;for(h=b.i.length-1;0<=h;--h)for(q.bindTexture(3553,b.i[h]),n=0<h?b.j[h-1]:0,t=b.j[h];0<=g&&b.b[g]>=n;){x=b.b[g];d=b.u[g];
e=w(d).toString();if(void 0===k[e]&&d.W()&&(void 0===p||re(p,d.W().J()))&&(q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),q.drawElements(4,t-x,f,x*c),t=m(d))){b=t;break a}t=x;g--}b=void 0}else q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),Tq(b,q,c,k,b.i,b.j),b=(b=m(null))?b:void 0;x=b}q.disableVertexAttribArray(r.f);q.disableVertexAttribArray(r.a);q.disableVertexAttribArray(r.g);q.disableVertexAttribArray(r.c);q.disableVertexAttribArray(r.b);return x}
function Tq(b,c,d,e,f,g){var h=d.b?5125:5123;d=d.b?4:2;if(Sb(e)){var k;b=0;e=f.length;for(k=0;b<e;++b){c.bindTexture(3553,f[b]);var m=g[b];c.drawElements(4,m-k,h,k*d);k=m}}else{k=0;var n,m=0;for(n=f.length;m<n;++m){c.bindTexture(3553,f[m]);for(var p=0<m?g[m-1]:0,q=g[m],r=p;k<b.b.length&&b.b[k]<=q;){var t=w(b.u[k]).toString();void 0!==e[t]?(r!==p&&c.drawElements(4,p-r,h,r*d),p=r=k===b.b.length-1?q:b.b[k+1]):p=k===b.b.length-1?q:b.b[k+1];k++}r!==p&&c.drawElements(4,p-r,h,r*d)}}}
Nq.prototype.vb=function(b){var c=b.Xb(),d=b.fc(1),e=b.qd(),f=b.Be(1),g=b.v,h=b.Ca(),k=b.C,m=b.u,n=b.Bb();b=b.i;var p;0===this.g.length?this.g.push(d):(p=this.g[this.g.length-1],w(p)!=w(d)&&(this.D.push(this.c.length),this.g.push(d)));0===this.f.length?this.f.push(f):(p=this.f[this.f.length-1],w(p)!=w(f)&&(this.j.push(this.c.length),this.f.push(f)));this.C=c[0];this.G=c[1];this.oa=n[1];this.S=e[1];this.U=e[0];this.T=g;this.Y=h[0];this.ea=h[1];this.fb=m;this.fa=k;this.qa=b;this.pa=n[0]};
function Uq(b,c,d){this.j=c;this.i=b;this.g=d;this.c={}}function Vq(b,c){var d=[],e;for(e in b.c)d.push(Oq(b.c[e],c));return Ae.apply(null,d)}function Wq(b,c){for(var d in b.c)Qq(b.c[d],c)}Uq.prototype.a=function(b,c){var d=this.c[c];void 0===d&&(d=new Xq[c](this.i,this.j),this.c[c]=d);return d};Uq.prototype.Ma=function(){return Sb(this.c)};Uq.prototype.b=function(b,c,d,e,f,g,h,k){var m,n;g=0;for(m=Lm.length;g<m;++g)n=this.c[Lm[g]],void 0!==n&&Sq(n,b,c,d,e,f,h,k,void 0,!1)};
function Yq(b,c,d,e,f,g,h,k,m,n){var p=Zq,q,r;for(q=Lm.length-1;0<=q;--q)if(r=b.c[Lm[q]],void 0!==r&&(r=Sq(r,c,d,e,f,p,g,h,k,m,n)))return r}Uq.prototype.f=function(b,c,d,e,f,g,h,k,m,n){var p=c.a;p.bindFramebuffer(p.FRAMEBUFFER,Hq(c));var q;void 0!==this.g&&(q=Ud(ae(b),e*this.g));return Yq(this,c,b,e,f,k,m,function(b){var c=new Uint8Array(4);p.readPixels(0,0,1,1,p.RGBA,p.UNSIGNED_BYTE,c);if(0<c[3]&&(b=n(b)))return b},!0,q)};
function $q(b,c,d,e,f,g,h){var k=d.a;k.bindFramebuffer(k.FRAMEBUFFER,Hq(d));return void 0!==Yq(b,d,c,e,f,g,h,function(){var b=new Uint8Array(4);k.readPixels(0,0,1,1,k.RGBA,k.UNSIGNED_BYTE,b);return 0<b[3]},!1)}var Xq={Image:Nq},Zq=[1,1];function ar(b,c,d,e,f,g){this.c=b;this.g=c;this.f=g;this.l=f;this.i=e;this.j=d;this.b=null;this.a={}}y(ar,lk);l=ar.prototype;l.ld=function(b,c){var d=b.toString(),e=this.a[d];void 0!==e?e.push(c):this.a[d]=[c]};l.Fc=function(){};l.kf=function(b,c){var d=(0,c.g)(b);if(d&&re(this.f,d.J())){var e=c.a;void 0===e&&(e=0);this.ld(e,function(b){b.ab(c.j,c.f);b.vb(c.b);b.bb(c.c);var e=br[d.V()];e&&e.call(b,d,null)})}};
l.$d=function(b,c){var d=b.f,e,f;e=0;for(f=d.length;e<f;++e){var g=d[e],h=br[g.V()];h&&h.call(this,g,c)}};l.Gb=function(b,c){var d=this.c,e=(new Uq(1,this.f)).a(0,"Image");e.vb(this.b);e.Gb(b,c);Qq(e,d);Sq(e,this.c,this.g,this.j,this.i,this.l,1,{},void 0,!1);Oq(e,d)()};l.Wb=function(){};l.Gc=function(){};l.Fb=function(b,c){var d=this.c,e=(new Uq(1,this.f)).a(0,"Image");e.vb(this.b);e.Fb(b,c);Qq(e,d);Sq(e,this.c,this.g,this.j,this.i,this.l,1,{},void 0,!1);Oq(e,d)()};l.Hc=function(){};l.Ic=function(){};
l.Hb=function(){};l.ab=function(){};l.vb=function(b){this.b=b};l.bb=function(){};var br={Point:ar.prototype.Gb,MultiPoint:ar.prototype.Fb,GeometryCollection:ar.prototype.$d};function cr(){this.a="precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"}y(cr,xq);ea(cr);function dr(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"}y(dr,yq);ea(dr);
function er(b,c){this.b=b.getUniformLocation(c,"f");this.f=b.getUniformLocation(c,"e");this.j=b.getUniformLocation(c,"d");this.g=b.getUniformLocation(c,"g");this.a=b.getAttribLocation(c,"b");this.c=b.getAttribLocation(c,"c")};function fr(b,c){uk.call(this,c);this.b=b;this.U=new Cq([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);this.g=this.lb=null;this.j=void 0;this.B=Fd();this.v=Hd();this.u=null}y(fr,uk);
function gr(b,c,d){var e=b.b.b;if(void 0===b.j||b.j!=d){c.postRenderFunctions.push(sa(function(b,c,d){b.isContextLost()||(b.deleteFramebuffer(c),b.deleteTexture(d))},e,b.g,b.lb));c=Iq(e,d,d);var f=e.createFramebuffer();e.bindFramebuffer(36160,f);e.framebufferTexture2D(36160,36064,3553,c,0);b.lb=c;b.g=f;b.j=d}else e.bindFramebuffer(36160,b.g)}
fr.prototype.qh=function(b,c,d){hr(this,"precompose",d,b);Eq(d,34962,this.U);var e=d.a,f=cr.Yb(),g=dr.Yb(),f=Kq(d,f,g);this.u?g=this.u:this.u=g=new er(e,f);d.Ie(f)&&(e.enableVertexAttribArray(g.a),e.vertexAttribPointer(g.a,2,5126,!1,16,0),e.enableVertexAttribArray(g.c),e.vertexAttribPointer(g.c,2,5126,!1,16,8),e.uniform1i(g.g,0));e.uniformMatrix4fv(g.j,!1,this.B);e.uniformMatrix4fv(g.f,!1,this.v);e.uniform1f(g.b,c.opacity);e.bindTexture(3553,this.lb);e.drawArrays(5,0,4);hr(this,"postcompose",d,b)};
function hr(b,c,d,e){b=b.a;if(gd(b,c)){var f=e.viewState;b.o(new mk(c,b,new ar(d,f.center,f.resolution,f.rotation,e.size,e.extent),e,null,d))}}fr.prototype.Ff=function(){this.g=this.lb=null;this.j=void 0};function ir(b,c){fr.call(this,b,c);this.l=this.i=this.f=null}y(ir,fr);function jr(b,c){var d=c.a();return Mq(b.b.b,d)}ir.prototype.$a=function(b,c,d,e){var f=this.a;return f.ga().ze(b,c.viewState.resolution,c.viewState.rotation,c.skippedFeatureUids,function(b){return d.call(e,b,f)})};
ir.prototype.Gf=function(b,c){var d=this.b.b,e=b.pixelRatio,f=b.viewState,g=f.center,h=f.resolution,k=f.rotation,m=this.f,n=this.lb,p=this.a.ga(),q=b.viewHints,r=b.extent;void 0!==c.extent&&(r=qe(r,c.extent));q[0]||q[1]||le(r)||(f=p.D(r,h,e,f.projection))&&wk(this,f)&&(m=f,n=jr(this,f),this.lb&&b.postRenderFunctions.push(sa(function(b,c){b.isContextLost()||b.deleteTexture(c)},d,this.lb)));m&&(d=Gq(this.b.getContext()),kr(this,d.width,d.height,e,g,h,k,m.J()),this.l=null,e=this.B,Jd(e),Nd(e,1,-1),Md(e,
0,-1),this.f=m,this.lb=n,yk(b.attributions,m.j),zk(b,p));return!0};function kr(b,c,d,e,f,g,h,k){c*=g;d*=g;b=b.v;Jd(b);Nd(b,2*e/c,2*e/d);Od(b,-h);Md(b,k[0]-f[0],k[1]-f[1]);Nd(b,(k[2]-k[0])/2,(k[3]-k[1])/2);Md(b,1,1)}ir.prototype.ye=function(b,c){return void 0!==this.$a(b,c,we,this)};
ir.prototype.sc=function(b,c,d,e){if(this.f&&this.f.a())if(this.a.ga()instanceof Xp){if(b=b.slice(),tk(c.pixelToCoordinateMatrix,b,b),this.$a(b,c,we,this))return d.call(e,this.a)}else{var f=[this.f.a().width,this.f.a().height];if(!this.l){var g=c.size;c=Fd();Jd(c);Md(c,-1,-1);Nd(c,2/g[0],2/g[1]);Md(c,0,g[1]);Nd(c,1,-1);g=Fd();Ld(this.v,g);var h=Fd();Jd(h);Md(h,0,f[1]);Nd(h,1,-1);Nd(h,f[0]/2,f[1]/2);Md(h,1,1);var k=Fd();Kd(h,g,k);Kd(k,c,k);this.l=k}c=[0,0];tk(this.l,b,c);if(!(0>c[0]||c[0]>f[0]||0>
c[1]||c[1]>f[1])&&(this.i||(this.i=Yi(1,1)),this.i.clearRect(0,0,1,1),this.i.drawImage(this.f.a(),c[0],c[1],1,1,0,0,1,1),0<this.i.getImageData(0,0,1,1).data[3]))return d.call(e,this.a)}};function lr(){this.a="precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"}y(lr,xq);ea(lr);function mr(){this.a="varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"}y(mr,yq);ea(mr);function nr(b,c){this.b=b.getUniformLocation(c,"e");this.f=b.getUniformLocation(c,"d");this.a=b.getAttribLocation(c,"b");this.c=b.getAttribLocation(c,"c")};function or(b,c){fr.call(this,b,c);this.G=lr.Yb();this.T=mr.Yb();this.f=null;this.C=new Cq([0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0]);this.D=this.i=null;this.l=-1;this.S=[0,0]}y(or,fr);l=or.prototype;l.X=function(){Fq(this.b.getContext(),this.C);or.ca.X.call(this)};l.bd=function(b,c,d){var e=this.b;return function(f,g){return Yh(b,c,f,g,function(b){var c=Ah(e.c,b.tb());c&&(d[f]||(d[f]={}),d[f][b.a.toString()]=b);return c})}};l.Ff=function(){or.ca.Ff.call(this);this.f=null};
l.Gf=function(b,c,d){var e=this.b,f=d.a,g=b.viewState,h=g.projection,k=this.a,m=k.ga(),n=m.ib(h),p=Sh(n,g.resolution),q=n.aa(p),r=m.Nb(p,b.pixelRatio,h),t=r[0]/qd(n.Ha(p),this.S)[0],x=q/t,z=m.ce(),B=g.center,A;q==g.resolution?(B=Bk(B,q,b.size),A=pe(B,q,g.rotation,b.size)):A=b.extent;q=Ph(n,A,q);if(this.i&&kg(this.i,q)&&this.l==m.c)x=this.D;else{var v=[mg(q),lg(q)],O=Math.pow(2,Math.ceil(Math.log(Math.max(v[0]*r[0],v[1]*r[1]))/Math.LN2)),v=x*O,K=n.Ca(p),I=K[0]+q.a*r[0]*x,x=K[1]+q.c*r[1]*x,x=[I,x,I+
v,x+v];gr(this,b,O);f.viewport(0,0,O,O);f.clearColor(0,0,0,0);f.clear(16384);f.disable(3042);O=Kq(d,this.G,this.T);d.Ie(O);this.f||(this.f=new nr(f,O));Eq(d,34962,this.C);f.enableVertexAttribArray(this.f.a);f.vertexAttribPointer(this.f.a,2,5126,!1,16,0);f.enableVertexAttribArray(this.f.c);f.vertexAttribPointer(this.f.c,2,5126,!1,16,8);f.uniform1i(this.f.b,0);d={};d[p]={};var G=this.bd(m,h,d),la=k.b(),O=!0,I=Qd(),Fa=new ig(0,0,0,0),L,Ba,Sa;for(Ba=q.a;Ba<=q.f;++Ba)for(Sa=q.c;Sa<=q.b;++Sa){K=m.Mb(p,
Ba,Sa,t,h);if(void 0!==c.extent&&(L=n.Aa(K.a,I),!re(L,c.extent)))continue;L=K.state;if(2==L){if(Ah(e.c,K.tb())){d[p][hg(K.a)]=K;continue}}else if(4==L||3==L&&!la)continue;O=!1;L=Mh(n,K.a,G,Fa,I);L||(K=Oh(n,K.a,Fa,I))&&G(p+1,K)}c=Object.keys(d).map(Number);qb(c);for(var G=new Float32Array(4),Ma,mb,eb,la=0,Fa=c.length;la<Fa;++la)for(Ma in mb=d[c[la]],mb)K=mb[Ma],L=n.Aa(K.a,I),Ba=2*(L[2]-L[0])/v,Sa=2*(L[3]-L[1])/v,eb=2*(L[0]-x[0])/v-1,L=2*(L[1]-x[1])/v-1,Ed(G,Ba,Sa,eb,L),f.uniform4fv(this.f.f,G),pr(e,
K,r,z*t),f.drawArrays(5,0,4);O?(this.i=q,this.D=x,this.l=m.c):(this.D=this.i=null,this.l=-1,b.animate=!0)}Ak(b.usedTiles,m,p,q);var Uc=e.i;Ck(b,m,n,t,h,A,p,k.a(),function(b){var c;(c=2!=b.state||Ah(e.c,b.tb()))||(c=b.tb()in Uc.b);c||Dk(Uc,[b,Rh(n,b.a),n.aa(b.a[0]),r,z*t])},this);xk(b,m);zk(b,m);f=this.B;Jd(f);Md(f,(B[0]-x[0])/(x[2]-x[0]),(B[1]-x[1])/(x[3]-x[1]));0!==g.rotation&&Od(f,g.rotation);Nd(f,b.size[0]*g.resolution/(x[2]-x[0]),b.size[1]*g.resolution/(x[3]-x[1]));Md(f,-.5,-.5);return!0};
l.sc=function(b,c,d,e){if(this.g){var f=[0,0];tk(this.B,[b[0]/c.size[0],(c.size[1]-b[1])/c.size[1]],f);b=[f[0]*this.j,f[1]*this.j];c=this.b.getContext().a;c.bindFramebuffer(c.FRAMEBUFFER,this.g);f=new Uint8Array(4);c.readPixels(b[0],b[1],1,1,c.RGBA,c.UNSIGNED_BYTE,f);if(0<f[3])return d.call(e,this.a)}};function qr(b,c){fr.call(this,b,c);this.l=!1;this.S=-1;this.G=NaN;this.D=Qd();this.i=this.f=this.C=null}y(qr,fr);l=qr.prototype;l.qh=function(b,c,d){this.i=c;var e=b.viewState,f=this.f;f&&!f.Ma()&&f.b(d,e.center,e.resolution,e.rotation,b.size,b.pixelRatio,c.opacity,c.rb?b.skippedFeatureUids:{})};l.X=function(){var b=this.f;if(b){var c=this.b.getContext();Vq(b,c)();this.f=null}qr.ca.X.call(this)};
l.$a=function(b,c,d,e){if(this.f&&this.i){var f=this.b.getContext(),g=c.viewState,h=this.a,k=this.i,m={};return this.f.f(b,f,g.center,g.resolution,g.rotation,c.size,c.pixelRatio,k.opacity,k.rb?c.skippedFeatureUids:{},function(b){var c=w(b).toString();if(!(c in m))return m[c]=!0,d.call(e,b,h)})}};l.ye=function(b,c){if(this.f&&this.i){var d=this.b.getContext(),e=c.viewState;return $q(this.f,b,d,e.resolution,e.rotation,this.i.opacity,c.skippedFeatureUids)}return!1};
l.sc=function(b,c,d,e){b=b.slice();tk(c.pixelToCoordinateMatrix,b,b);if(this.ye(b,c))return d.call(e,this.a)};l.Im=function(){vk(this)};
l.Gf=function(b,c,d){function e(b){var c,d=b.Ob();d?c=d.call(b,n):(d=f.b)&&(c=d(b,n));if(c){if(c){var e,g=!1,d=0;for(e=c.length;d<e;++d)g=gn(r,b,c[d],fn(n,p),this.Im,this)||g;b=g}else b=!1;this.l=this.l||b}}var f=this.a;c=f.ga();yk(b.attributions,c.j);zk(b,c);var g=b.viewHints[0],h=b.viewHints[1],k=f.i,m=f.l;if(!this.l&&!k&&g||!m&&h)return!0;var h=b.extent,k=b.viewState,g=k.projection,n=k.resolution,p=b.pixelRatio,k=f.c,q=f.a,m=rm(f);void 0===m&&(m=en);h=Ud(h,q*n);if(!this.l&&this.G==n&&this.S==k&&
this.C==m&&Zd(this.D,h))return!0;this.f&&b.postRenderFunctions.push(Vq(this.f,d));this.l=!1;var r=new Uq(.5*n/p,h,f.a);c.Mc(h,n,g);if(m){var t=[];c.ob(h,function(b){t.push(b)},this);qb(t,m);t.forEach(e,this)}else c.ob(h,e,this);Wq(r,d);this.G=n;this.S=k;this.C=m;this.D=h;this.f=r;return!0};function rr(b,c){Jk.call(this,0,c);this.a=Mg("CANVAS");this.a.style.width="100%";this.a.style.height="100%";this.a.className="ol-unselectable";Pg(b,this.a,0);this.D=this.C=0;this.G=Yi();this.l=!0;this.b=dj(this.a,{antialias:!0,depth:!1,failIfMajorPerformanceCaveat:!0,preserveDrawingBuffer:!1,stencil:!0});this.u=new Dq(this.a,this.b);C(this.a,"webglcontextlost",this.Gm,!1,this);C(this.a,"webglcontextrestored",this.Hm,!1,this);this.c=new zh;this.v=null;this.i=new Ok(ra(function(b){var c=b[1];b=b[2];
var f=c[0]-this.v[0],c=c[1]-this.v[1];return 65536*Math.log(b)+Math.sqrt(f*f+c*c)/b},this),function(b){return b[0].tb()});this.S=ra(function(){if(!this.i.Ma()){Sk(this.i);var b=Pk(this.i);pr(this,b[0],b[3],b[4])}},this);this.j=0;sr(this)}y(rr,Jk);
function pr(b,c,d,e){var f=b.b,g=c.tb();if(Ah(b.c,g))b=b.c.get(g),f.bindTexture(3553,b.lb),9729!=b.Wg&&(f.texParameteri(3553,10240,9729),b.Wg=9729),9729!=b.Xg&&(f.texParameteri(3553,10240,9729),b.Xg=9729);else{var h=f.createTexture();f.bindTexture(3553,h);if(0<e){var k=b.G.canvas,m=b.G;b.C!==d[0]||b.D!==d[1]?(k.width=d[0],k.height=d[1],b.C=d[0],b.D=d[1]):m.clearRect(0,0,d[0],d[1]);m.drawImage(c.Ua(),e,e,d[0],d[1],0,0,d[0],d[1]);f.texImage2D(3553,0,6408,6408,5121,k)}else f.texImage2D(3553,0,6408,6408,
5121,c.Ua());f.texParameteri(3553,10240,9729);f.texParameteri(3553,10241,9729);f.texParameteri(3553,10242,33071);f.texParameteri(3553,10243,33071);b.c.set(g,{lb:h,Wg:9729,Xg:9729})}}l=rr.prototype;l.jf=function(b){return b instanceof am?new ir(this,b):b instanceof F?new or(this,b):b instanceof H?new qr(this,b):null};
function tr(b,c,d){var e=b.g;if(gd(e,c)){var f=b.u;b=d.viewState;b=new ar(f,b.center,b.resolution,b.rotation,d.size,d.extent);e.o(new mk(c,e,b,d,null,f));c=Object.keys(b.a).map(Number);qb(c);var g,h;d=0;for(e=c.length;d<e;++d)for(f=b.a[c[d].toString()],g=0,h=f.length;g<h;++g)f[g](b)}}l.X=function(){var b=this.b;b.isContextLost()||this.c.forEach(function(c){c&&b.deleteTexture(c.lb)});wc(this.u);rr.ca.X.call(this)};
l.wj=function(b,c){for(var d=this.b,e;1024<this.c.nc()-this.j;){if(e=this.c.a.zc)d.deleteTexture(e.lb);else if(+this.c.a.qe==c.index)break;else--this.j;this.c.pop()}};l.getContext=function(){return this.u};l.V=function(){return"webgl"};l.Gm=function(b){b.preventDefault();this.c.clear();this.j=0;Kb(this.f,function(b){b.Ff()})};l.Hm=function(){sr(this);this.g.render()};
function sr(b){b=b.b;b.activeTexture(33984);b.blendFuncSeparate(770,771,1,771);b.disable(2884);b.disable(2929);b.disable(3089);b.disable(2960)}
l.Oe=function(b){var c=this.getContext(),d=this.b;if(d.isContextLost())return!1;if(!b)return this.l&&(ph(this.a,!1),this.l=!1),!1;this.v=b.focus;this.c.set((-b.index).toString(),null);++this.j;tr(this,"precompose",b);var e=[],f=b.layerStatesArray;sb(f);var g=b.viewState.resolution,h,k,m,n;h=0;for(k=f.length;h<k;++h)n=f[h],ok(n,g)&&"ready"==n.S&&(m=Mk(this,n.layer),m.Gf(b,n,c)&&e.push(n));f=b.size[0]*b.pixelRatio;g=b.size[1]*b.pixelRatio;if(this.a.width!=f||this.a.height!=g)this.a.width=f,this.a.height=
g;d.bindFramebuffer(36160,null);d.clearColor(0,0,0,0);d.clear(16384);d.enable(3042);d.viewport(0,0,this.a.width,this.a.height);h=0;for(k=e.length;h<k;++h)n=e[h],m=Mk(this,n.layer),m.qh(b,n,c);this.l||(ph(this.a,!0),this.l=!0);Kk(b);1024<this.c.nc()-this.j&&b.postRenderFunctions.push(ra(this.wj,this));this.i.Ma()||(b.postRenderFunctions.push(this.S),b.animate=!0);tr(this,"postcompose",b);Nk(this,b);b.postRenderFunctions.push(Lk)};
l.Ef=function(b,c,d,e,f,g){var h;if(this.b.isContextLost())return!1;var k=c.viewState,m=c.layerStatesArray,n;for(n=m.length-1;0<=n;--n){h=m[n];var p=h.layer;if(ok(h,k.resolution)&&f.call(g,p)&&(h=Mk(this,p).$a(b,c,d,e)))return h}};l.ph=function(b,c,d,e){var f=!1;if(this.b.isContextLost())return!1;var g=c.viewState,h=c.layerStatesArray,k;for(k=h.length-1;0<=k;--k){var m=h[k],n=m.layer;if(ok(m,g.resolution)&&d.call(e,n)&&(f=Mk(this,n).ye(b,c)))return!0}return f};
l.oh=function(b,c,d,e,f){if(this.b.isContextLost())return!1;var g=c.viewState,h,k=c.layerStatesArray,m;for(m=k.length-1;0<=m;--m){h=k[m];var n=h.layer;if(ok(h,g.resolution)&&f.call(e,n)&&(h=Mk(this,n).sc(b,c,d,e)))return h}};var ur=["canvas","webgl","dom"];
function S(b){kd.call(this);var c=vr(b);this.Ac=void 0!==b.loadTilesWhileAnimating?b.loadTilesWhileAnimating:!1;this.Bc=void 0!==b.loadTilesWhileInteracting?b.loadTilesWhileInteracting:!1;this.Ye=void 0!==b.pixelRatio?b.pixelRatio:fj;this.Xc=c.logos;this.u=new ri(this.Ko,void 0,this);uc(this,this.u);this.Cb=Fd();this.Ze=Fd();this.Db=0;this.b=null;this.xa=Qd();this.D=this.U=null;this.a=Jg("DIV","ol-viewport");this.a.style.position="relative";this.a.style.overflow="hidden";this.a.style.width="100%";
this.a.style.height="100%";this.a.style.msTouchAction="none";this.a.style.touchAction="none";kj&&Yg(this.a,"ol-touch");this.G=Jg("DIV","ol-overlaycontainer");this.a.appendChild(this.G);this.C=Jg("DIV","ol-overlaycontainer-stopevent");C(this.C,["click","dblclick","mousedown","touchstart","MSPointerDown",fk,cc?"DOMMouseScroll":"mousewheel"],yc);this.a.appendChild(this.C);b=new Xj(this);C(b,Nb(ik),this.Og,!1,this);uc(this,b);this.fa=c.keyboardEventTarget;this.v=new Ji;C(this.v,"key",this.Ng,!1,this);
uc(this,this.v);b=new Ri(this.a);C(b,"mousewheel",this.Ng,!1,this);uc(this,b);this.f=c.controls;this.g=c.interactions;this.j=c.overlays;this.Y={};this.i=new c.Mo(this.a,this);uc(this,this.i);this.gb=new Ei;uc(this,this.gb);this.T=this.l=null;this.S=[];this.pa=[];this.qa=new Tk(ra(this.pk,this),ra(this.Xk,this));this.ea={};C(this,md("layergroup"),this.Ck,!1,this);C(this,md("view"),this.Yk,!1,this);C(this,md("size"),this.Uk,!1,this);C(this,md("target"),this.Wk,!1,this);this.I(c.values);this.f.forEach(function(b){b.setMap(this)},
this);C(this.f,"add",function(b){b.element.setMap(this)},!1,this);C(this.f,"remove",function(b){b.element.setMap(null)},!1,this);this.g.forEach(function(b){b.setMap(this)},this);C(this.g,"add",function(b){b.element.setMap(this)},!1,this);C(this.g,"remove",function(b){b.element.setMap(null)},!1,this);this.j.forEach(this.tg,this);C(this.j,"add",function(b){this.tg(b.element)},!1,this);C(this.j,"remove",function(b){var c=b.element.La();void 0!==c&&delete this.Y[c.toString()];b.element.setMap(null)},
!1,this)}y(S,kd);l=S.prototype;l.kj=function(b){this.f.push(b)};l.lj=function(b){this.g.push(b)};l.rg=function(b){this.oc().Pc().push(b)};l.sg=function(b){this.j.push(b)};l.tg=function(b){var c=b.La();void 0!==c&&(this.Y[c.toString()]=b);b.setMap(this)};l.Pa=function(b){this.render();Array.prototype.push.apply(this.S,arguments)};l.X=function(){Qg(this.a);S.ca.X.call(this)};l.od=function(b,c,d,e,f){if(this.b)return b=this.Fa(b),this.i.Ef(b,this.b,c,void 0!==d?d:null,void 0!==e?e:we,void 0!==f?f:null)};
l.Il=function(b,c,d,e,f){if(this.b)return this.i.oh(b,this.b,c,void 0!==d?d:null,void 0!==e?e:we,void 0!==f?f:null)};l.$k=function(b,c,d){if(!this.b)return!1;b=this.Fa(b);return this.i.ph(b,this.b,void 0!==c?c:we,void 0!==d?d:null)};l.Lj=function(b){return this.Fa(this.be(b))};l.be=function(b){var c;c=this.a;b=lh(b);c=lh(c);c=new Ag(b.x-c.x,b.y-c.y);return[c.x,c.y]};l.ue=function(){return this.get("target")};l.Lc=function(){var b=this.ue();return void 0!==b?Fg(b):null};
l.Fa=function(b){var c=this.b;return c?(b=b.slice(),tk(c.pixelToCoordinateMatrix,b,b)):null};l.Jj=function(){return this.f};l.ck=function(){return this.j};l.bk=function(b){b=this.Y[b.toString()];return void 0!==b?b:null};l.Qj=function(){return this.g};l.oc=function(){return this.get("layergroup")};l.dh=function(){return this.oc().Pc()};l.Qa=function(b){var c=this.b;return c?(b=b.slice(0,2),tk(c.coordinateToPixelMatrix,b,b)):null};l.Ta=function(){return this.get("size")};l.$=function(){return this.get("view")};
l.rk=function(){return this.a};l.pk=function(b,c,d,e){var f=this.b;if(!(f&&c in f.wantedTiles&&f.wantedTiles[c][hg(b.a)]))return Infinity;b=d[0]-f.focus[0];d=d[1]-f.focus[1];return 65536*Math.log(e)+Math.sqrt(b*b+d*d)/e};l.Ng=function(b,c){var d=new Vj(c||b.type,this,b);this.Og(d)};l.Og=function(b){if(this.b){this.T=b.coordinate;b.frameState=this.b;var c=this.g.a,d;if(!1!==this.o(b))for(d=c.length-1;0<=d;d--){var e=c[d];if(e.b()&&!e.handleEvent(b))break}}};
l.Sk=function(){var b=this.b,c=this.qa;if(!c.Ma()){var d=16,e=d,f=0;b&&(f=b.viewHints,f[0]&&(d=this.Ac?8:0,e=2),f[1]&&(d=this.Bc?8:0,e=2),f=Mb(b.wantedTiles));d*=f;e*=f;c.f<d&&(Sk(c),Uk(c,d,e))}c=this.pa;d=0;for(e=c.length;d<e;++d)c[d](this,b);c.length=0};l.Uk=function(){this.render()};l.Wk=function(){var b=this.Lc();Qi(this.v);b?(b.appendChild(this.a),Ki(this.v,this.fa?this.fa:b),this.l||(this.l=C(this.gb,"resize",this.Uc,!1,this))):(Qg(this.a),this.l&&(ad(this.l),this.l=null));this.Uc()};l.Xk=function(){this.render()};
l.Zk=function(){this.render()};l.Yk=function(){this.U&&(ad(this.U),this.U=null);var b=this.$();b&&(this.U=C(b,"propertychange",this.Zk,!1,this));this.render()};l.Dk=function(){this.render()};l.Ek=function(){this.render()};l.Ck=function(){this.D&&(this.D.forEach(ad),this.D=null);var b=this.oc();b&&(this.D=[C(b,"propertychange",this.Ek,!1,this),C(b,"change",this.Dk,!1,this)]);this.render()};l.Lo=function(){var b=this.u;si(b);b.f()};l.render=function(){null!=this.u.wa||this.u.start()};l.Sh=function(b){return this.f.remove(b)};
l.Fo=function(b){return this.g.remove(b)};l.Ho=function(b){return this.oc().Pc().remove(b)};l.Io=function(b){return this.j.remove(b)};
l.Ko=function(b){var c,d,e,f=this.Ta(),g=this.$(),h=null;if(void 0!==f&&0<f[0]&&0<f[1]&&g&&Uf(g)){var h=g.b.slice(),k=this.oc().pf(),m={};c=0;for(d=k.length;c<d;++c)m[w(k[c].layer)]=k[c];e=Tf(g);h={animate:!1,attributions:{},coordinateToPixelMatrix:this.Cb,extent:null,focus:this.T?this.T:e.center,index:this.Db++,layerStates:m,layerStatesArray:k,logos:Wb(this.Xc),pixelRatio:this.Ye,pixelToCoordinateMatrix:this.Ze,postRenderFunctions:[],size:f,skippedFeatureUids:this.ea,tileQueue:this.qa,time:b,usedTiles:{},
viewState:e,viewHints:h,wantedTiles:{}}}if(h){b=this.S;c=f=0;for(d=b.length;c<d;++c)g=b[c],g(this,h)&&(b[f++]=g);b.length=f;h.extent=pe(e.center,e.resolution,e.rotation,h.size)}this.b=h;this.i.Oe(h);h&&(h.animate&&this.render(),Array.prototype.push.apply(this.pa,h.postRenderFunctions),0!==this.S.length||h.viewHints[0]||h.viewHints[1]||de(h.extent,this.xa)||(this.o(new xh("moveend",this,h)),Vd(h.extent,this.xa)));this.o(new xh("postrender",this,h));wi(this.Sk,this)};
l.bi=function(b){this.set("layergroup",b)};l.ag=function(b){this.set("size",b)};l.Jl=function(b){this.set("target",b)};l.$o=function(b){this.set("view",b)};l.ii=function(b){b=w(b).toString();this.ea[b]=!0;this.render()};
l.Uc=function(){var b=this.Lc();if(b){var c=Eg(b),d=ac&&b.currentStyle;d&&Ug(Cg(c))&&"auto"!=d.width&&"auto"!=d.height&&!d.boxSizing?(c=rh(b,d.width,"width","pixelWidth"),b=rh(b,d.height,"height","pixelHeight"),b=new Bg(c,b)):(d=qh(b),c=th(b,"padding"),b=wh(b),b=new Bg(d.width-b.left-c.left-c.right-b.right,d.height-b.top-c.top-c.bottom-b.bottom));this.ag([b.width,b.height])}else this.ag(void 0)};l.li=function(b){b=w(b).toString();delete this.ea[b];this.render()};
function vr(b){var c=null;void 0!==b.keyboardEventTarget&&(c=ia(b.keyboardEventTarget)?document.getElementById(b.keyboardEventTarget):b.keyboardEventTarget);var d={},e={};if(void 0===b.logo||"boolean"==typeof b.logo&&b.logo)e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"]=
"http://openlayers.org/";else{var f=b.logo;ia(f)?e[f]="":ma(f)&&(e[f.src]=f.href)}f=b.layers instanceof Tl?b.layers:new Tl({layers:b.layers});d.layergroup=f;d.target=b.target;d.view=void 0!==b.view?b.view:new Qf;var f=Jk,g;void 0!==b.renderer?ga(b.renderer)?g=b.renderer:ia(b.renderer)&&(g=[b.renderer]):g=ur;var h,k;h=0;for(k=g.length;h<k;++h){var m=g[h];if("canvas"==m){if(hj){f=mq;break}}else if("dom"==m){f=uq;break}else if("webgl"==m&&ej){f=rr;break}}var n;void 0!==b.controls?n=ga(b.controls)?new qg(b.controls.slice()):
b.controls:n=gi();var p;void 0!==b.interactions?p=ga(b.interactions)?new qg(b.interactions.slice()):b.interactions:p=Sl();b=void 0!==b.overlays?ga(b.overlays)?new qg(b.overlays.slice()):b.overlays:new qg;return{controls:n,interactions:p,keyboardEventTarget:c,logos:e,overlays:b,Mo:f,values:d}}$l();function wr(b){kd.call(this);this.wa=b.id;this.v=void 0!==b.insertFirst?b.insertFirst:!0;this.D=void 0!==b.stopEvent?b.stopEvent:!0;this.f=Jg("DIV",{"class":"ol-overlay-container"});this.f.style.position="absolute";this.autoPan=void 0!==b.autoPan?b.autoPan:!1;this.l=void 0!==b.autoPanAnimation?b.autoPanAnimation:{};this.u=void 0!==b.autoPanMargin?b.autoPanMargin:20;this.a={Wd:"",re:"",Pe:"",Qe:"",visible:!0};this.i=null;C(this,md("element"),this.yk,!1,this);C(this,md("map"),this.Jk,!1,this);C(this,
md("offset"),this.Ok,!1,this);C(this,md("position"),this.Qk,!1,this);C(this,md("positioning"),this.Rk,!1,this);void 0!==b.element&&this.Yf(b.element);this.Zf(void 0!==b.offset?b.offset:[0,0]);this.$f(void 0!==b.positioning?b.positioning:"center-center");void 0!==b.position&&this.xd(b.position)}y(wr,kd);l=wr.prototype;l.vd=function(){return this.get("element")};l.La=function(){return this.wa};l.wd=function(){return this.get("map")};l.qf=function(){return this.get("offset")};l.Bf=function(){return this.get("position")};
l.rf=function(){return this.get("positioning")};l.yk=function(){Og(this.f);var b=this.vd();b&&Ng(this.f,b)};l.Jk=function(){this.i&&(Qg(this.f),ad(this.i),this.i=null);var b=this.wd();b&&(this.i=C(b,"postrender",this.render,!1,this),xr(this),b=this.D?b.C:b.G,this.v?Pg(b,this.f,0):Ng(b,this.f))};l.render=function(){xr(this)};l.Ok=function(){xr(this)};
l.Qk=function(){xr(this);if(void 0!==this.get("position")&&this.autoPan){var b=this.wd();if(void 0!==b&&b.Lc()){var c=yr(b.Lc(),b.Ta()),d=this.vd(),e=d.offsetWidth,f=d.currentStyle||window.getComputedStyle(d),e=e+(parseInt(f.marginLeft,10)+parseInt(f.marginRight,10)),f=d.offsetHeight,g=d.currentStyle||window.getComputedStyle(d),f=f+(parseInt(g.marginTop,10)+parseInt(g.marginBottom,10)),h=yr(d,[e,f]),d=this.u;Zd(c,h)||(e=h[0]-c[0],f=c[2]-h[2],g=h[1]-c[1],h=c[3]-h[3],c=[0,0],0>e?c[0]=e-d:0>f&&(c[0]=
Math.abs(f)+d),0>g?c[1]=g-d:0>h&&(c[1]=Math.abs(h)+d),0===c[0]&&0===c[1])||(d=b.$().Oa(),e=b.Qa(d),c=[e[0]+c[0],e[1]+c[1]],this.l&&(this.l.source=d,b.Pa(ag(this.l))),b.$().Ia(b.Fa(c)))}}};l.Rk=function(){xr(this)};l.Yf=function(b){this.set("element",b)};l.setMap=function(b){this.set("map",b)};l.Zf=function(b){this.set("offset",b)};l.xd=function(b){this.set("position",b)};function yr(b,c){var d=kh(b);return[d.x,d.y,d.x+c[0],d.y+c[1]]}l.$f=function(b){this.set("positioning",b)};
function zr(b,c){b.a.visible!==c&&(ph(b.f,c),b.a.visible=c)}
function xr(b){var c=b.wd(),d=b.Bf();if(void 0!==c&&c.b&&void 0!==d){var d=c.Qa(d),e=c.Ta(),c=b.f.style,f=b.qf(),g=b.rf(),h=f[0],f=f[1];if("bottom-right"==g||"center-right"==g||"top-right"==g)""!==b.a.re&&(b.a.re=c.left=""),h=Math.round(e[0]-d[0]-h)+"px",b.a.Pe!=h&&(b.a.Pe=c.right=h);else{""!==b.a.Pe&&(b.a.Pe=c.right="");if("bottom-center"==g||"center-center"==g||"top-center"==g)h-=mh(b.f).width/2;h=Math.round(d[0]+h)+"px";b.a.re!=h&&(b.a.re=c.left=h)}if("bottom-left"==g||"bottom-center"==g||"bottom-right"==
g)""!==b.a.Qe&&(b.a.Qe=c.top=""),d=Math.round(e[1]-d[1]-f)+"px",b.a.Wd!=d&&(b.a.Wd=c.bottom=d);else{""!==b.a.Wd&&(b.a.Wd=c.bottom="");if("center-left"==g||"center-center"==g||"center-right"==g)f-=mh(b.f).height/2;d=Math.round(d[1]+f)+"px";b.a.Qe!=d&&(b.a.Qe=c.top=d)}zr(b,!0)}else zr(b,!1)};function Ar(b){b=b?b:{};this.j=void 0!==b.collapsed?b.collapsed:!0;this.i=void 0!==b.collapsible?b.collapsible:!0;this.i||(this.j=!1);var c=b.className?b.className:"ol-overviewmap",d=b.tipLabel?b.tipLabel:"Overview map",e=b.collapseLabel?b.collapseLabel:"\u00ab";this.v=ia(e)?Jg("SPAN",{},e):e;e=b.label?b.label:"\u00bb";this.D=ia(e)?Jg("SPAN",{},e):e;d=Jg("BUTTON",{type:"button",title:d},this.i&&!this.j?this.v:this.D);C(d,"click",this.Xl,!1,this);var e=Jg("DIV","ol-overviewmap-map"),f=this.b=new S({controls:new qg,
interactions:new qg,target:e,view:b.view});b.layers&&b.layers.forEach(function(b){f.rg(b)},this);var g=Jg("DIV","ol-overviewmap-box");this.l=new wr({position:[0,0],positioning:"bottom-left",element:g});this.b.sg(this.l);c=Jg("DIV",c+" ol-unselectable ol-control"+(this.j&&this.i?" ol-collapsed":"")+(this.i?"":" ol-uncollapsible"),e,d);yh.call(this,{element:c,render:b.render?b.render:Br,target:b.target})}y(Ar,yh);l=Ar.prototype;
l.setMap=function(b){var c=this.a;b!==c&&(c&&(c=c.$())&&$c(c,md("rotation"),this.le,!1,this),Ar.ca.setMap.call(this,b),b&&(this.u.push(C(b,"propertychange",this.Kk,!1,this)),0===this.b.dh().$b()&&this.b.bi(b.oc()),b=b.$()))&&(C(b,md("rotation"),this.le,!1,this),Uf(b)&&(this.b.Uc(),Cr(this)))};l.Kk=function(b){"view"===b.key&&((b=b.oldValue)&&$c(b,md("rotation"),this.le,!1,this),b=this.a.$(),C(b,md("rotation"),this.le,!1,this))};l.le=function(){this.b.$().ve(this.a.$().Ea())};
function Br(){var b=this.a,c=this.b;if(b.b&&c.b){var d=b.Ta(),b=b.$().Zc(d),e=c.Ta(),d=c.$().Zc(e),f=c.Qa(je(b)),c=c.Qa(he(b)),c=new Bg(Math.abs(f[0]-c[0]),Math.abs(f[1]-c[1])),f=e[0],e=e[1];c.width<.1*f||c.height<.1*e||c.width>.75*f||c.height>.75*e?Cr(this):Zd(d,b)||(b=this.b,d=this.a.$(),b.$().Ia(d.Oa()))}Dr(this)}function Cr(b){var c=b.a;b=b.b;var d=c.Ta(),c=c.$().Zc(d),d=b.Ta();b=b.$();se(c,1/(.1*Math.pow(2,Math.log(7.5)/Math.LN2/2)));b.lf(c,d)}
function Dr(b){var c=b.a,d=b.b;if(c.b&&d.b){var e=c.Ta(),f=c.$(),g=d.$();d.Ta();var c=f.Ea(),h=b.l,d=b.l.vd(),f=f.Zc(e),e=g.aa(),g=ge(f),f=ie(f),k;if(b=b.a.$().Oa())k=[g[0]-b[0],g[1]-b[1]],yd(k,c),td(k,b);h.xd(k);d&&(k=new Bg(Math.abs((g[0]-f[0])/e),Math.abs((f[1]-g[1])/e)),c=Ug(Cg(Eg(d))),!ac||lc("10")||c&&lc("8")?(d=d.style,cc?d.MozBoxSizing="border-box":dc?d.WebkitBoxSizing="border-box":d.boxSizing="border-box",d.width=Math.max(k.width,0)+"px",d.height=Math.max(k.height,0)+"px"):(b=d.style,c?(c=
th(d,"padding"),d=wh(d),b.pixelWidth=k.width-d.left-c.left-c.right-d.right,b.pixelHeight=k.height-d.top-c.top-c.bottom-d.bottom):(b.pixelWidth=k.width,b.pixelHeight=k.height)))}}l.Xl=function(b){b.preventDefault();Er(this)};function Er(b){$g(b.element,"ol-collapsed");b.j?Rg(b.v,b.D):Rg(b.D,b.v);b.j=!b.j;var c=b.b;b.j||c.b||(c.Uc(),Cr(b),Zc(c,"postrender",function(){Dr(this)},!1,b))}l.Wl=function(){return this.i};
l.Zl=function(b){this.i!==b&&(this.i=b,$g(this.element,"ol-uncollapsible"),!b&&this.j&&Er(this))};l.Yl=function(b){this.i&&this.j!==b&&Er(this)};l.Vl=function(){return this.j};l.dk=function(){return this.b};function Fr(b){b=b?b:{};var c=b.className?b.className:"ol-scale-line";this.l=Jg("DIV",c+"-inner");this.i=Jg("DIV",c+" ol-unselectable",this.l);this.D=null;this.v=void 0!==b.minWidth?b.minWidth:64;this.b=!1;this.S=void 0;this.C="";this.j=null;yh.call(this,{element:this.i,render:b.render?b.render:Gr,target:b.target});C(this,md("units"),this.Y,!1,this);this.T(b.units||"metric")}y(Fr,yh);var Hr=[1,2,5];Fr.prototype.G=function(){return this.get("units")};
function Gr(b){(b=b.frameState)?this.D=b.viewState:this.D=null;Ir(this)}Fr.prototype.Y=function(){Ir(this)};Fr.prototype.T=function(b){this.set("units",b)};
function Ir(b){var c=b.D;if(c){var d=c.center,e=c.projection,c=e.getPointResolution(c.resolution,d),f=e.c,g=b.G();"degrees"!=f||"metric"!=g&&"imperial"!=g&&"us"!=g&&"nautical"!=g?"degrees"!=f&&"degrees"==g?(b.j||(b.j=Le(e,He("EPSG:4326"))),d=Math.cos(Ya(b.j(d)[1])),e=De.radius,e/=Ee[f],c*=180/(Math.PI*d*e)):b.j=null:(b.j=null,d=Math.cos(Ya(d[1])),c*=Math.PI*d*De.radius/180);d=b.v*c;f="";"degrees"==g?d<1/60?(f="\u2033",c*=3600):1>d?(f="\u2032",c*=60):f="\u00b0":"imperial"==g?.9144>d?(f="in",c/=.0254):
1609.344>d?(f="ft",c/=.3048):(f="mi",c/=1609.344):"nautical"==g?(c/=1852,f="nm"):"metric"==g?1>d?(f="mm",c*=1E3):1E3>d?f="m":(f="km",c/=1E3):"us"==g&&(.9144>d?(f="in",c*=39.37):1609.344>d?(f="ft",c/=.30480061):(f="mi",c/=1609.3472));for(d=3*Math.floor(Math.log(b.v*c)/Math.log(10));;){e=Hr[d%3]*Math.pow(10,Math.floor(d/3));g=Math.round(e/c);if(isNaN(g)){ph(b.i,!1);b.b=!1;return}if(g>=b.v)break;++d}c=e+" "+f;b.C!=c&&(b.l.innerHTML=c,b.C=c);b.S!=g&&(b.l.style.width=g+"px",b.S=g);b.b||(ph(b.i,!0),b.b=
!0)}else b.b&&(ph(b.i,!1),b.b=!1)};function Jr(b){rc.call(this);this.c=b;this.a={}}y(Jr,rc);var Kr=[];Jr.prototype.Sa=function(b,c,d,e){ga(c)||(c&&(Kr[0]=c.toString()),c=Kr);for(var f=0;f<c.length;f++){var g=C(b,c[f],d||this.handleEvent,e||!1,this.c||this);if(!g)break;this.a[g.key]=g}return this};
Jr.prototype.cg=function(b,c,d,e,f){if(ga(c))for(var g=0;g<c.length;g++)this.cg(b,c[g],d,e,f);else d=d||this.handleEvent,f=f||this.c||this,d=Sc(d),e=!!e,c=Gc(b)?Nc(b.zb,String(c),d,e,f):b?(b=Vc(b))?Nc(b,c,d,e,f):null:null,c&&(ad(c),delete this.a[c.key]);return this};function Lr(b){Kb(b.a,function(b,d){this.a.hasOwnProperty(d)&&ad(b)},b);b.a={}}Jr.prototype.X=function(){Jr.ca.X.call(this);Lr(this)};Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Mr(b,c,d){ed.call(this);this.target=b;this.handle=c||b;this.a=d||new bh(NaN,NaN,NaN,NaN);this.j=Eg(b);this.c=new Jr(this);uc(this,this.c);this.g=this.f=this.B=this.l=this.screenY=this.screenX=this.clientY=this.clientX=0;this.b=!1;C(this.handle,["touchstart","mousedown"],this.ji,!1,this)}y(Mr,ed);var Nr=ac||cc&&lc("1.9.3");l=Mr.prototype;
l.X=function(){Mr.ca.X.call(this);$c(this.handle,["touchstart","mousedown"],this.ji,!1,this);Lr(this.c);Nr&&this.j.releaseCapture();this.handle=this.target=null};
l.ji=function(b){var c="mousedown"==b.type;if(this.b||c&&!Ec(b))this.o("earlycancel");else if(this.o(new Or("start",this,b.clientX,b.clientY))){this.b=!0;b.preventDefault();var c=this.j,d=c.documentElement,e=!Nr;this.c.Sa(c,["touchmove","mousemove"],this.Nk,e);this.c.Sa(c,["touchend","mouseup"],this.ae,e);Nr?(d.setCapture(!1),this.c.Sa(d,"losecapture",this.ae)):this.c.Sa(c?c.parentWindow||c.defaultView:window,"blur",this.ae);this.u&&this.c.Sa(this.u,"scroll",this.Un,e);this.clientX=this.l=b.clientX;
this.clientY=this.B=b.clientY;this.screenX=b.screenX;this.screenY=b.screenY;this.f=this.target.offsetLeft;this.g=this.target.offsetTop;this.i=Vg(Cg(this.j))}};l.ae=function(b){Lr(this.c);Nr&&this.j.releaseCapture();this.b?(this.b=!1,this.o(new Or("end",this,b.clientX,b.clientY,0,Pr(this,this.f),Qr(this,this.g)))):this.o("earlycancel")};
l.Nk=function(b){var c=1*(b.clientX-this.clientX),d=b.clientY-this.clientY;this.clientX=b.clientX;this.clientY=b.clientY;this.screenX=b.screenX;this.screenY=b.screenY;if(!this.b){var e=this.l-this.clientX,f=this.B-this.clientY;if(0<e*e+f*f)if(this.o(new Or("start",this,b.clientX,b.clientY)))this.b=!0;else{this.ia||this.ae(b);return}}d=Rr(this,c,d);c=d.x;d=d.y;this.b&&this.o(new Or("beforedrag",this,b.clientX,b.clientY,0,c,d))&&(Sr(this,b,c,d),b.preventDefault())};
function Rr(b,c,d){var e=Vg(Cg(b.j));c+=e.x-b.i.x;d+=e.y-b.i.y;b.i=e;b.f+=c;b.g+=d;return new Ag(Pr(b,b.f),Qr(b,b.g))}l.Un=function(b){var c=Rr(this,0,0);b.clientX=this.clientX;b.clientY=this.clientY;Sr(this,b,c.x,c.y)};function Sr(b,c,d,e){b.target.style.left=d+"px";b.target.style.top=e+"px";b.o(new Or("drag",b,c.clientX,c.clientY,0,d,e))}function Pr(b,c){var d=b.a,e=isNaN(d.left)?null:d.left,d=isNaN(d.width)?0:d.width;return Math.min(null!=e?e+d:Infinity,Math.max(null!=e?e:-Infinity,c))}
function Qr(b,c){var d=b.a,e=isNaN(d.top)?null:d.top,d=isNaN(d.height)?0:d.height;return Math.min(null!=e?e+d:Infinity,Math.max(null!=e?e:-Infinity,c))}function Or(b,c,d,e,f,g,h){xc.call(this,b);this.clientX=d;this.clientY=e;this.left=ca(g)?g:c.f;this.top=ca(h)?h:c.g}y(Or,xc);function Tr(b){var c=Jg("DIV",["HDMap_button","HDMap_panN","ol-unselectable"]);Gg(c,{title:"\u5411\u4e0a\u5e73\u79fb"});var d=Jg("DIV",["HDMap_button","HDMap_panW","ol-unselectable"]);Gg(d,{title:"\u5411\u5de6\u5e73\u79fb"});var e=Jg("DIV",["HDMap_button","HDMap_panE","ol-unselectable"]);Gg(e,{title:"\u5411\u53f3\u5e73\u79fb"});var f=Jg("DIV",["HDMap_button","HDMap_panS","ol-unselectable"]);Gg(f,{title:"\u5411\u4e0b\u5e73\u79fb"});this.b=Jg("DIV",["HDMap_stdMpPan","ol-unselectable"],[c,d,e,f]);ch(this.b,
{"background-position":"0px 0px"});c=Jg("DIV",["HDMap_stdMpZoom"]);ch(c,{height:"146px",width:"32px"});this.S=Jg("DIV",["HDMap_button","HDMap_stdMpZoomIn"]);ch(this.S,{"background-position":"0px -221px"});Gg(this.S,{title:"\u653e\u5927\u4e00\u7ea7"});this.D=Jg("DIV",["HDMap_button","HDMap_stdMpZoomOut"]);ch(this.D,{top:"102px","background-position":" 0px -265px"});Gg(this.D,{title:"\u7f29\u5c0f\u4e00\u7ea7"});d=Jg("DIV",["HDMap_stdMpSlider"]);ch(d,{height:"108px"});c.appendChild(this.S);c.appendChild(this.D);
c.appendChild(d);this.v=Jg("DIV",["HDMap_stdMpSliderBgTop"]);ch(this.v,{height:"84px"});e=Jg("DIV",["HDMap_stdMpSliderBgBot"]);ch(e,{top:"66px",height:"18px"});e=Jg("DIV",["HDMap_stdMpSliderMask"]);Gg(e,{title:"\u7f29\u653e\u5230\u6b64\u7ea7\u522b"});this.i=Jg("DIV",["HDMap_stdMpSliderBar"]);Gg(this.i,{title:"\u62d6\u52a8\u7f29\u653e"});d.appendChild(this.v);d.appendChild(this.v);d.appendChild(e);d.appendChild(this.i);this.G=Jg("DIV",["HDMap_stdMpCtrl","ol-unselectable"],[this.b,c]);ch(this.G,{display:"none",
width:"42px",height:"190px",right:"auto",left:"8px",position:"absolute","z-index":100});b=b?b:{};this.l=void 0;this.C=Ur;this.T=null;this.fa=!1;this.ea=b.duration?b.duration:200;c=Jg("DIV",[b.className?b.className:"ol-zoomslider","ol-unselectable"],this.G);yh.call(this,{element:c,render:b.render?b.render:Vr})}y(Tr,yh);
Tr.prototype.qa=function(b){switch(b.target.getAttribute("title")){case "\u5411\u4e0a\u5e73\u79fb":this.b.style.setProperty("background-position","0px -44px");break;case "\u5411\u4e0b\u5e73\u79fb":this.b.style.setProperty("background-position","0px -132px");break;case "\u5411\u5de6\u5e73\u79fb":this.b.style.setProperty("background-position","0px -176px");break;case "\u5411\u53f3\u5e73\u79fb":this.b.style.setProperty("background-position","0px -88px")}};
Tr.prototype.Y=function(b){switch(b.target.getAttribute("title")){case "\u5411\u4e0a\u5e73\u79fb":this.b.style.setProperty("background-position","0px -44px");break;case "\u5411\u4e0b\u5e73\u79fb":this.b.style.setProperty("background-position","0px -132px");break;case "\u5411\u5de6\u5e73\u79fb":this.b.style.setProperty("background-position","0px -176px");break;case "\u5411\u53f3\u5e73\u79fb":this.b.style.setProperty("background-position","0px -88px");break;default:this.b.style.setProperty("background-position",
"0px 0px")}};Tr.prototype.pa=function(b){b=b.target.getAttribute("title");var c=this.a.$(),d=c.Oa(),e=c.tf();switch(b){case "\u5411\u4e0a\u5e73\u79fb":c.Ia([d[0],1.5*d[1]]);break;case "\u5411\u4e0b\u5e73\u79fb":c.Ia([d[0],.5*d[1]]);break;case "\u5411\u5de6\u5e73\u79fb":c.Ia([1.5*d[0],d[1]]);break;case "\u5411\u53f3\u5e73\u79fb":c.Ia([.5*d[0],d[1]]);break;case "\u653e\u5927\u4e00\u7ea7":c.bg(e+1);break;case "\u7f29\u5c0f\u4e00\u7ea7":c.bg(e-1)}};var Ur=0;l=Tr.prototype;
l.setMap=function(b){Tr.ca.setMap.call(this,b);b&&(b.render(),b.f.forEach(function(c){c instanceof fi&&b.Sh(c)}))};
function Wr(b){var c=mh(b.element);C(b.b,"mouseleave",b.Y,!1,b);var d=document.getElementsByClassName("HDMap_button");d&&cb(d,function(b){C(b,"mouseenter",this.qa,!1,this);C(b,"mouseleave",this.Y,!1,this);C(b,"click",this.pa,!1,this)},b);d=document.getElementsByClassName("HDMap_stdMpSliderMask")[0];b.j=new Mr(b.i);uc(b,b.j);C(b.j,"start",b.xk,!1,b);C(b.j,"drag",b.vk,!1,b);C(b.j,"end",b.wk,!1,b);C(d,"click",b.uk,!1,b);C(d,"click",yc);var d=b.a.$(),e=d.tf(),d=6*(Math.log(d.a/d.f)/Math.log(2)+2),f=102-
(84-d);ch(b.i,{top:d-6*(e+2)+"px"});ch(b.G,{display:"block"});ch(b.v,{height:d+"px"});ch(b.D,{top:f+"px"});var e=th(b.b,"margin"),f=qh(b.b),g=f.width+e.right+e.left;b.T=[g,f.height+e.top+e.bottom];e=c.width-g;c.width>c.height?(b.C=1,c=new bh(0,0,e,0)):(b.C=Ur,c=new bh(13,0,0,d-9));b.j.a=c||new bh(NaN,NaN,NaN,NaN);b.fa=!0}
function Vr(b){if(b.frameState&&(this.fa||Wr(this),b=b.frameState.viewState.resolution,b!==this.l)){this.l=b;b=1-Sf(this.a.$())(b);var c=this.j;1==this.C?hh(this.i,c.a.left+c.a.width*b):hh(this.i,c.a.left,c.a.top+c.a.height*b)}}l.uk=function(b){var c=this.a,d=c.$(),e=d.aa();c.Pa(cg({resolution:e,duration:this.ea,easing:Xf}));b=Xr(this,Yr(this,b.offsetX-this.T[0]/2,b.offsetY-this.T[1]/2));d.Ub(d.constrainResolution(b))};l.xk=function(){Vf(this.a.$(),1)};
l.vk=function(b){this.l=Xr(this,Yr(this,b.left,b.top));this.a.$().Ub(this.l)};l.wk=function(){var b=this.a,c=b.$();Vf(c,-1);b.Pa(cg({resolution:this.l,duration:this.ea,easing:Xf}));b=c.constrainResolution(this.l);c.Ub(b)};function Yr(b,c,d){var e=b.j.a;return Ua(1===b.C?(c-e.left)/e.width:(d-e.top)/e.height,0,1)}function Xr(b,c){return Rf(b.a.$())(1-c)};function Zr(b){b=b?b:{};this.b=b.extent?b.extent:null;var c=b.className?b.className:"ol-zoom-extent",d=Jg("BUTTON",{type:"button",title:b.tipLabel?b.tipLabel:"Fit to extent"},b.label?b.label:"E");C(d,"click",this.j,!1,this);c=Jg("DIV",c+" ol-unselectable ol-control",d);yh.call(this,{element:c,target:b.target})}y(Zr,yh);Zr.prototype.j=function(b){b.preventDefault();var c=this.a;b=c.$();var d=this.b?this.b:b.j.J(),c=c.Ta();b.lf(d,c)};function $r(b){kd.call(this);b=b?b:{};this.a=null;C(this,md("tracking"),this.xl,!1,this);this.zf(void 0!==b.tracking?b.tracking:!1)}y($r,kd);l=$r.prototype;l.X=function(){this.zf(!1);$r.ca.X.call(this)};
l.Vn=function(b){b=b.a;if(null!==b.alpha){var c=Ya(b.alpha);this.set("alpha",c);"boolean"==typeof b.absolute&&b.absolute?this.set("heading",c):ja(b.webkitCompassHeading)&&-1!=b.webkitCompassAccuracy&&this.set("heading",Ya(b.webkitCompassHeading))}null!==b.beta&&this.set("beta",Ya(b.beta));null!==b.gamma&&this.set("gamma",Ya(b.gamma));this.s()};l.Ej=function(){return this.get("alpha")};l.Hj=function(){return this.get("beta")};l.Nj=function(){return this.get("gamma")};l.wl=function(){return this.get("heading")};
l.Zg=function(){return this.get("tracking")};l.xl=function(){if(ij){var b=this.Zg();b&&!this.a?this.a=C(ba,"deviceorientation",this.Vn,!1,this):!b&&this.a&&(ad(this.a),this.a=null)}};l.zf=function(b){this.set("tracking",b)};function as(){this.defaultDataProjection=null}function bs(b,c,d){var e;d&&(e={dataProjection:d.dataProjection?d.dataProjection:b.Ja(c),featureProjection:d.featureProjection});return cs(b,e)}function cs(b,c){var d;c&&(d={featureProjection:c.featureProjection,dataProjection:c.dataProjection?c.dataProjection:b.defaultDataProjection,rightHanded:c.rightHanded});return d}
function ds(b,c,d){var e=d?He(d.featureProjection):null;d=d?He(d.dataProjection):null;return e&&d&&!Ze(e,d)?b instanceof df?(c?b.clone():b).kb(c?e:d,c?d:e):cf(c?b.slice():b,c?e:d,c?d:e):b};function es(){this.defaultDataProjection=null}y(es,as);function fs(b){return ma(b)?b:ia(b)?(b=ko(b))?b:null:null}l=es.prototype;l.V=function(){return"json"};l.Tb=function(b,c){return this.Rc(fs(b),bs(this,b,c))};l.Ba=function(b,c){return this.Nf(fs(b),bs(this,b,c))};l.Sc=function(b,c){return this.Ih(fs(b),bs(this,b,c))};l.Ja=function(b){return this.Ph(fs(b))};l.Md=function(b,c){return lo(this.Vc(b,c))};l.Vb=function(b,c){return lo(this.Te(b,c))};l.Wc=function(b,c){return lo(this.Ve(b,c))};function gs(b,c,d,e,f){var g=NaN,h=NaN,k=(d-c)/e;if(0!==k)if(1==k)g=b[c],h=b[c+1];else if(2==k)g=.5*b[c]+.5*b[c+e],h=.5*b[c+1]+.5*b[c+e+1];else{var h=b[c],k=b[c+1],m=0,g=[0],n;for(n=c+e;n<d;n+=e){var p=b[n],q=b[n+1],m=m+Math.sqrt((p-h)*(p-h)+(q-k)*(q-k));g.push(m);h=p;k=q}d=.5*m;for(var r,h=rb,k=0,m=g.length;k<m;)n=k+m>>1,p=h(d,g[n]),0<p?k=n+1:(m=n,r=!p);r=r?k:~k;0>r?(d=(d-g[-r-2])/(g[-r-1]-g[-r-2]),c+=(-r-2)*e,g=sd(b[c],b[c+e],d),h=sd(b[c+1],b[c+e+1],d)):(g=b[c+r*e],h=b[c+r*e+1])}return f?(f[0]=
g,f[1]=h,f):[g,h]}function hs(b,c,d,e,f,g){if(d==c)return null;if(f<b[c+e-1])return g?(d=b.slice(c,c+e),d[e-1]=f,d):null;if(b[d-1]<f)return g?(d=b.slice(d-e,d),d[e-1]=f,d):null;if(f==b[c+e-1])return b.slice(c,c+e);c/=e;for(d/=e;c<d;)g=c+d>>1,f<b[(g+1)*e-1]?d=g:c=g+1;d=b[c*e-1];if(f==d)return b.slice((c-1)*e,(c-1)*e+e);g=(f-d)/(b[(c+1)*e-1]-d);d=[];var h;for(h=0;h<e-1;++h)d.push(sd(b[(c-1)*e+h],b[c*e+h],g));d.push(f);return d}
function is(b,c,d,e,f,g){var h=0;if(g)return hs(b,h,c[c.length-1],d,e,f);if(e<b[d-1])return f?(b=b.slice(0,d),b[d-1]=e,b):null;if(b[b.length-1]<e)return f?(b=b.slice(b.length-d),b[d-1]=e,b):null;f=0;for(g=c.length;f<g;++f){var k=c[f];if(h!=k){if(e<b[h+d-1])break;if(e<=b[k-1])return hs(b,h,k,d,e,!1);h=k}}return null};function T(b,c){ff.call(this);this.g=null;this.C=this.G=this.l=-1;this.ma(b,c)}y(T,ff);l=T.prototype;l.mj=function(b){this.A?nb(this.A,b):this.A=b.slice();this.s()};l.clone=function(){var b=new T(null);b.ba(this.b,this.A.slice());return b};l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;this.C!=this.c&&(this.G=Math.sqrt(nf(this.A,0,this.A.length,this.a,0)),this.C=this.c);return pf(this.A,0,this.A.length,this.a,this.G,!1,b,c,d,e)};
l.Bj=function(b,c){return Ef(this.A,0,this.A.length,this.a,b,c)};l.bm=function(b,c){return"XYM"!=this.b&&"XYZM"!=this.b?null:hs(this.A,0,this.A.length,this.a,b,void 0!==c?c:!1)};l.Z=function(){return uf(this.A,0,this.A.length,this.a)};l.cm=function(){var b=this.A,c=this.a,d=b[0],e=b[1],f=0,g;for(g=0+c;g<this.A.length;g+=c)var h=b[g],k=b[g+1],f=f+Math.sqrt((h-d)*(h-d)+(k-e)*(k-e)),d=h,e=k;return f};function Bm(b){b.l!=b.c&&(b.g=gs(b.A,0,b.A.length,b.a,b.g),b.l=b.c);return b.g}
l.Kc=function(b){var c=[];c.length=wf(this.A,0,this.A.length,this.a,b,c,0);b=new T(null);b.ba("XY",c);return b};l.V=function(){return"LineString"};l.Da=function(b){return Ff(this.A,0,this.A.length,this.a,b)};l.ma=function(b,c){b?(jf(this,c,b,1),this.A||(this.A=[]),this.A.length=sf(this.A,0,b,this.a),this.s()):this.ba("XY",null)};l.ba=function(b,c){hf(this,b,c);this.s()};function U(b,c){ff.call(this);this.g=[];this.l=this.C=-1;this.ma(b,c)}y(U,ff);l=U.prototype;l.nj=function(b){this.A?nb(this.A,b.ja().slice()):this.A=b.ja().slice();this.g.push(this.A.length);this.s()};l.clone=function(){var b=new U(null);b.ba(this.b,this.A.slice(),this.g.slice());return b};l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;this.l!=this.c&&(this.C=Math.sqrt(of(this.A,0,this.g,this.a,0)),this.l=this.c);return qf(this.A,0,this.g,this.a,this.C,!1,b,c,d,e)};
l.em=function(b,c,d){return"XYM"!=this.b&&"XYZM"!=this.b||0===this.A.length?null:is(this.A,this.g,this.a,b,void 0!==c?c:!1,void 0!==d?d:!1)};l.Z=function(){return vf(this.A,0,this.g,this.a)};l.Ab=function(){return this.g};l.Vj=function(b){if(0>b||this.g.length<=b)return null;var c=new T(null);c.ba(this.b,this.A.slice(0===b?0:this.g[b-1],this.g[b]));return c};
l.rd=function(){var b=this.A,c=this.g,d=this.b,e=[],f=0,g,h;g=0;for(h=c.length;g<h;++g){var k=c[g],m=new T(null);m.ba(d,b.slice(f,k));e.push(m);f=k}return e};function Cm(b){var c=[],d=b.A,e=0,f=b.g;b=b.a;var g,h;g=0;for(h=f.length;g<h;++g){var k=f[g],e=gs(d,e,k,b);nb(c,e);e=k}return c}l.Kc=function(b){var c=[],d=[],e=this.A,f=this.g,g=this.a,h=0,k=0,m,n;m=0;for(n=f.length;m<n;++m){var p=f[m],k=wf(e,h,p,g,b,c,k);d.push(k);h=p}c.length=k;b=new U(null);b.ba("XY",c,d);return b};l.V=function(){return"MultiLineString"};
l.Da=function(b){a:{var c=this.A,d=this.g,e=this.a,f=0,g,h;g=0;for(h=d.length;g<h;++g){if(Ff(c,f,d[g],e,b)){b=!0;break a}f=d[g]}b=!1}return b};l.ma=function(b,c){if(b){jf(this,c,b,2);this.A||(this.A=[]);var d=tf(this.A,0,b,this.a,this.g);this.A.length=0===d.length?0:d[d.length-1];this.s()}else this.ba("XY",null,this.g)};l.ba=function(b,c,d){hf(this,b,c);this.g=d;this.s()};
function js(b,c){var d=b.b,e=[],f=[],g,h;g=0;for(h=c.length;g<h;++g){var k=c[g];0===g&&(d=k.b);nb(e,k.ja());f.push(e.length)}b.ba(d,e,f)};function ks(b,c){ff.call(this);this.ma(b,c)}y(ks,ff);l=ks.prototype;l.pj=function(b){this.A?nb(this.A,b.ja()):this.A=b.ja().slice();this.s()};l.clone=function(){var b=new ks(null);b.ba(this.b,this.A.slice());return b};l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;var f=this.A,g=this.a,h,k,m;h=0;for(k=f.length;h<k;h+=g)if(m=Xa(b,c,f[h],f[h+1]),m<e){e=m;for(m=0;m<g;++m)d[m]=f[h+m];d.length=g}return e};l.Z=function(){return uf(this.A,0,this.A.length,this.a)};
l.fk=function(b){var c=this.A?this.A.length/this.a:0;if(0>b||c<=b)return null;c=new D(null);c.ba(this.b,this.A.slice(b*this.a,(b+1)*this.a));return c};l.we=function(){var b=this.A,c=this.b,d=this.a,e=[],f,g;f=0;for(g=b.length;f<g;f+=d){var h=new D(null);h.ba(c,b.slice(f,f+d));e.push(h)}return e};l.V=function(){return"MultiPoint"};l.Da=function(b){var c=this.A,d=this.a,e,f,g,h;e=0;for(f=c.length;e<f;e+=d)if(g=c[e],h=c[e+1],Yd(b,g,h))return!0;return!1};
l.ma=function(b,c){b?(jf(this,c,b,1),this.A||(this.A=[]),this.A.length=sf(this.A,0,b,this.a),this.s()):this.ba("XY",null)};l.ba=function(b,c){hf(this,b,c);this.s()};function V(b,c){ff.call(this);this.g=[];this.C=-1;this.G=null;this.T=this.S=this.U=-1;this.l=null;this.ma(b,c)}y(V,ff);l=V.prototype;l.qj=function(b){if(this.A){var c=this.A.length;nb(this.A,b.ja());b=b.Ab().slice();var d,e;d=0;for(e=b.length;d<e;++d)b[d]+=c}else this.A=b.ja().slice(),b=b.Ab().slice(),this.g.push();this.g.push(b);this.s()};l.clone=function(){var b=new V(null),c=Xb(this.g);ls(b,this.b,this.A.slice(),c);return b};
l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;if(this.S!=this.c){var f=this.g,g=0,h=0,k,m;k=0;for(m=f.length;k<m;++k)var n=f[k],h=of(this.A,g,n,this.a,h),g=n[n.length-1];this.U=Math.sqrt(h);this.S=this.c}f=Dm(this);g=this.g;h=this.a;k=this.U;m=0;var n=[NaN,NaN],p,q;p=0;for(q=g.length;p<q;++p){var r=g[p];e=qf(f,m,r,h,k,!0,b,c,d,e,n);m=r[r.length-1]}return e};
l.rc=function(b,c){var d;a:{d=Dm(this);var e=this.g,f=0;if(0!==e.length){var g,h;g=0;for(h=e.length;g<h;++g){var k=e[g];if(Cf(d,f,k,this.a,b,c)){d=!0;break a}f=k[k.length-1]}}d=!1}return d};l.fm=function(){var b=Dm(this),c=this.g,d=0,e=0,f,g;f=0;for(g=c.length;f<g;++f)var h=c[f],e=e+lf(b,d,h,this.a),d=h[h.length-1];return e};
l.Z=function(b){var c;void 0!==b?(c=Dm(this).slice(),Kf(c,this.g,this.a,b)):c=this.A;b=c;c=this.g;var d=this.a,e=0,f=[],g=0,h,k;h=0;for(k=c.length;h<k;++h){var m=c[h];f[g++]=vf(b,e,m,d,f[g]);e=m[m.length-1]}f.length=g;return f};
function Em(b){if(b.C!=b.c){var c=b.A,d=b.g,e=b.a,f=0,g=[],h,k,m=Qd();h=0;for(k=d.length;h<k;++h){var n=d[h],m=be(c,f,n[0],e);g.push((m[0]+m[2])/2,(m[1]+m[3])/2);f=n[n.length-1]}c=Dm(b);d=b.g;e=b.a;f=0;h=[];k=0;for(m=d.length;k<m;++k)n=d[k],h=Df(c,f,n,e,g,2*k,h),f=n[n.length-1];b.G=h;b.C=b.c}return b.G}l.Sj=function(){var b=new ks(null);b.ba("XY",Em(this).slice());return b};
function Dm(b){if(b.T!=b.c){var c=b.A,d;a:{d=b.g;var e,f;e=0;for(f=d.length;e<f;++e)if(!If(c,d[e],b.a,void 0)){d=!1;break a}d=!0}d?b.l=c:(b.l=c.slice(),b.l.length=Kf(b.l,b.g,b.a));b.T=b.c}return b.l}l.Kc=function(b){var c=[],d=[],e=this.A,f=this.g,g=this.a;b=Math.sqrt(b);var h=0,k=0,m,n;m=0;for(n=f.length;m<n;++m){var p=f[m],q=[],k=xf(e,h,p,g,b,c,k,q);d.push(q);h=p[p.length-1]}c.length=k;e=new V(null);ls(e,"XY",c,d);return e};
l.hk=function(b){if(0>b||this.g.length<=b)return null;var c;0===b?c=0:(c=this.g[b-1],c=c[c.length-1]);b=this.g[b].slice();var d=b[b.length-1];if(0!==c){var e,f;e=0;for(f=b.length;e<f;++e)b[e]-=c}e=new E(null);e.ba(this.b,this.A.slice(c,d),b);return e};l.ee=function(){var b=this.b,c=this.A,d=this.g,e=[],f=0,g,h,k,m;g=0;for(h=d.length;g<h;++g){var n=d[g].slice(),p=n[n.length-1];if(0!==f)for(k=0,m=n.length;k<m;++k)n[k]-=f;k=new E(null);k.ba(b,c.slice(f,p),n);e.push(k);f=p}return e};l.V=function(){return"MultiPolygon"};
l.Da=function(b){a:{var c=Dm(this),d=this.g,e=this.a,f=0,g,h;g=0;for(h=d.length;g<h;++g){var k=d[g];if(Gf(c,f,k,e,b)){b=!0;break a}f=k[k.length-1]}b=!1}return b};l.ma=function(b,c){if(b){jf(this,c,b,3);this.A||(this.A=[]);var d=this.A,e=this.a,f=this.g,g=0,f=f?f:[],h=0,k,m;k=0;for(m=b.length;k<m;++k)g=tf(d,g,b[k],e,f[h]),f[h++]=g,g=g[g.length-1];f.length=h;0===f.length?this.A.length=0:(d=f[f.length-1],this.A.length=0===d.length?0:d[d.length-1]);this.s()}else ls(this,"XY",null,this.g)};
function ls(b,c,d,e){hf(b,c,d);b.g=e;b.s()}function ms(b,c){var d=b.b,e=[],f=[],g,h,k;g=0;for(h=c.length;g<h;++g){var m=c[g];0===g&&(d=m.b);var n=e.length;k=m.Ab();var p,q;p=0;for(q=k.length;p<q;++p)k[p]+=n;nb(e,m.ja());f.push(k)}ls(b,d,e,f)};function ns(b){b=b?b:{};this.defaultDataProjection=null;this.a=b.geometryName}y(ns,es);
function os(b,c){if(!b)return null;var d;if(ja(b.x)&&ja(b.y))d="Point";else if(b.points)d="MultiPoint";else if(b.paths)d=1===b.paths.length?"LineString":"MultiLineString";else if(b.rings){var e=b.rings,f=ps(b),g=[];d=[];var h,k;h=0;for(k=e.length;h<k;++h){var m=wb(e[h]);Hf(m,0,m.length,f.length)?g.push([e[h]]):d.push(e[h])}for(;d.length;){e=d.shift();f=!1;for(h=g.length-1;0<=h;h--)if(Zd((new yf(g[h][0])).J(),(new yf(e)).J())){g[h].push(e);f=!0;break}f||g.push([e.reverse()])}b=Wb(b);1===g.length?(d=
"Polygon",b.rings=g[0]):(d="MultiPolygon",b.rings=g)}return ds((0,qs[d])(b),!1,c)}function ps(b){var c="XY";!0===b.hasZ&&!0===b.hasM?c="XYZM":!0===b.hasZ?c="XYZ":!0===b.hasM&&(c="XYM");return c}function rs(b){b=b.b;return{hasZ:"XYZ"===b||"XYZM"===b,hasM:"XYM"===b||"XYZM"===b}}
var qs={Point:function(b){return void 0!==b.m&&void 0!==b.z?new D([b.x,b.y,b.z,b.m],"XYZM"):void 0!==b.z?new D([b.x,b.y,b.z],"XYZ"):void 0!==b.m?new D([b.x,b.y,b.m],"XYM"):new D([b.x,b.y])},LineString:function(b){return new T(b.paths[0],ps(b))},Polygon:function(b){return new E(b.rings,ps(b))},MultiPoint:function(b){return new ks(b.points,ps(b))},MultiLineString:function(b){return new U(b.paths,ps(b))},MultiPolygon:function(b){return new V(b.rings,ps(b))}},ss={Point:function(b){var c=b.Z();b=b.b;if("XYZ"===
b)return{x:c[0],y:c[1],z:c[2]};if("XYM"===b)return{x:c[0],y:c[1],m:c[2]};if("XYZM"===b)return{x:c[0],y:c[1],z:c[2],m:c[3]};if("XY"===b)return{x:c[0],y:c[1]}},LineString:function(b){var c=rs(b);return{hasZ:c.hasZ,hasM:c.hasM,paths:[b.Z()]}},Polygon:function(b){var c=rs(b);return{hasZ:c.hasZ,hasM:c.hasM,rings:b.Z(!1)}},MultiPoint:function(b){var c=rs(b);return{hasZ:c.hasZ,hasM:c.hasM,points:b.Z()}},MultiLineString:function(b){var c=rs(b);return{hasZ:c.hasZ,hasM:c.hasM,paths:b.Z()}},MultiPolygon:function(b){var c=
rs(b);b=b.Z(!1);for(var d=[],e=0;e<b.length;e++)for(var f=b[e].length-1;0<=f;f--)d.push(b[e][f]);return{hasZ:c.hasZ,hasM:c.hasM,rings:d}}};l=ns.prototype;l.Rc=function(b,c){var d=os(b.geometry,c),e=new Bn;this.a&&e.vc(this.a);e.Na(d);c&&c.uf&&b.attributes[c.uf]&&e.ic(b.attributes[c.uf]);b.attributes&&e.I(b.attributes);return e};
l.Nf=function(b,c){var d=c?c:{};if(b.features){var e=[],f=b.features,g,h;d.uf=b.objectIdFieldName;g=0;for(h=f.length;g<h;++g)e.push(this.Rc(f[g],d));return e}return[this.Rc(b,d)]};l.Ih=function(b,c){return os(b,c)};l.Ph=function(b){return b.spatialReference&&b.spatialReference.wkid?He("EPSG:"+b.spatialReference.wkid):null};function ts(b,c){return(0,ss[b.V()])(ds(b,!0,c),c)}l.Ve=function(b,c){return ts(b,cs(this,c))};
l.Vc=function(b,c){c=cs(this,c);var d={},e=b.W();e&&(d.geometry=ts(e,c));e=b.P();delete e[b.a];d.attributes=Sb(e)?{}:e;c&&c.featureProjection&&(d.spatialReference={wkid:He(c.featureProjection).a.split(":").pop()});return d};l.Te=function(b,c){c=cs(this,c);var d=[],e,f;e=0;for(f=b.length;e<f;++e)d.push(this.Vc(b[e],c));return{features:d}};function us(b){df.call(this);this.f=b?b:null;vs(this)}y(us,df);function ws(b){var c=[],d,e;d=0;for(e=b.length;d<e;++d)c.push(b[d].clone());return c}function xs(b){var c,d;if(b.f)for(c=0,d=b.f.length;c<d;++c)$c(b.f[c],"change",b.s,!1,b)}function vs(b){var c,d;if(b.f)for(c=0,d=b.f.length;c<d;++c)C(b.f[c],"change",b.s,!1,b)}l=us.prototype;l.clone=function(){var b=new us(null);b.$h(this.f);return b};
l.mb=function(b,c,d,e){if(e<Wd(this.J(),b,c))return e;var f=this.f,g,h;g=0;for(h=f.length;g<h;++g)e=f[g].mb(b,c,d,e);return e};l.rc=function(b,c){var d=this.f,e,f;e=0;for(f=d.length;e<f;++e)if(d[e].rc(b,c))return!0;return!1};l.Yd=function(b){Td(Infinity,Infinity,-Infinity,-Infinity,b);for(var c=this.f,d=0,e=c.length;d<e;++d)ee(b,c[d].J());return b};l.Hg=function(){return ws(this.f)};
l.sd=function(b){this.u!=this.c&&(Tb(this.j),this.i=0,this.u=this.c);if(0>b||0!==this.i&&b<this.i)return this;var c=b.toString();if(this.j.hasOwnProperty(c))return this.j[c];var d=[],e=this.f,f=!1,g,h;g=0;for(h=e.length;g<h;++g){var k=e[g],m=k.sd(b);d.push(m);m!==k&&(f=!0)}if(f)return b=new us(null),xs(b),b.f=d,vs(b),b.s(),this.j[c]=b;this.i=b;return this};l.V=function(){return"GeometryCollection"};l.Da=function(b){var c=this.f,d,e;d=0;for(e=c.length;d<e;++d)if(c[d].Da(b))return!0;return!1};
l.Ma=function(){return 0===this.f.length};l.$h=function(b){b=ws(b);xs(this);this.f=b;vs(this);this.s()};l.mc=function(b){var c=this.f,d,e;d=0;for(e=c.length;d<e;++d)c[d].mc(b);this.s()};l.Oc=function(b,c){var d=this.f,e,f;e=0;for(f=d.length;e<f;++e)d[e].Oc(b,c);this.s()};l.X=function(){xs(this);us.ca.X.call(this)};function ys(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=He(b.defaultDataProjection?b.defaultDataProjection:"EPSG:4326");this.a=b.geometryName}y(ys,es);function zs(b,c){return b?ds((0,As[b.type])(b),!1,c):null}function Bs(b,c){return(0,Cs[b.V()])(ds(b,!0,c),c)}
var As={Point:function(b){return new D(b.coordinates)},LineString:function(b){return new T(b.coordinates)},Polygon:function(b){return new E(b.coordinates)},MultiPoint:function(b){return new ks(b.coordinates)},MultiLineString:function(b){return new U(b.coordinates)},MultiPolygon:function(b){return new V(b.coordinates)},GeometryCollection:function(b,c){var d=b.geometries.map(function(b){return zs(b,c)});return new us(d)}},Cs={Point:function(b){return{type:"Point",coordinates:b.Z()}},LineString:function(b){return{type:"LineString",
coordinates:b.Z()}},Polygon:function(b,c){var d;c&&(d=c.rightHanded);return{type:"Polygon",coordinates:b.Z(d)}},MultiPoint:function(b){return{type:"MultiPoint",coordinates:b.Z()}},MultiLineString:function(b){return{type:"MultiLineString",coordinates:b.Z()}},MultiPolygon:function(b,c){var d;c&&(d=c.rightHanded);return{type:"MultiPolygon",coordinates:b.Z(d)}},GeometryCollection:function(b,c){return{type:"GeometryCollection",geometries:b.f.map(function(b){return Bs(b,c)})}},Circle:function(){return{type:"GeometryCollection",
geometries:[]}}};l=ys.prototype;l.Rc=function(b,c){var d=zs(b.geometry,c),e=new Bn;this.a&&e.vc(this.a);e.Na(d);void 0!==b.id&&e.ic(b.id);b.properties&&e.I(b.properties);return e};l.Nf=function(b,c){if("Feature"==b.type)return[this.Rc(b,c)];if("FeatureCollection"==b.type){var d=[],e=b.features,f,g;f=0;for(g=e.length;f<g;++f)d.push(this.Rc(e[f],c));return d}return[]};l.Ih=function(b,c){return zs(b,c)};
l.Ph=function(b){return(b=b.crs)?"name"==b.type?He(b.properties.name):"EPSG"==b.type?He("EPSG:"+b.properties.code):null:this.defaultDataProjection};l.Vc=function(b,c){c=cs(this,c);var d={type:"Feature"},e=b.La();void 0!==e&&(d.id=e);e=b.W();d.geometry=e?Bs(e,c):null;e=b.P();delete e[b.a];d.properties=Sb(e)?null:e;return d};l.Te=function(b,c){c=cs(this,c);var d=[],e,f;e=0;for(f=b.length;e<f;++e)d.push(this.Vc(b[e],c));return{type:"FeatureCollection",features:d}};
l.Ve=function(b,c){return Bs(b,cs(this,c))};function Ds(){this.defaultDataProjection=null}y(Ds,as);l=Ds.prototype;l.V=function(){return"xml"};l.Tb=function(b,c){if(dp(b))return Es(this,b,c);if(gp(b))return this.Gh(b,c);if(ia(b)){var d=qp(b);return Es(this,d,c)}return null};function Es(b,c,d){b=Fs(b,c,d);return 0<b.length?b[0]:null}l.Ba=function(b,c){if(dp(b))return Fs(this,b,c);if(gp(b))return this.hc(b,c);if(ia(b)){var d=qp(b);return Fs(this,d,c)}return[]};
function Fs(b,c,d){var e=[];for(c=c.firstChild;c;c=c.nextSibling)1==c.nodeType&&nb(e,b.hc(c,d));return e}l.Sc=function(b,c){if(dp(b))return this.u(b,c);if(gp(b)){var d=this.Ke(b,[bs(this,b,c?c:{})]);return d?d:null}return ia(b)?(d=qp(b),this.u(d,c)):null};l.Ja=function(b){return dp(b)?this.Tf(b):gp(b)?this.Ne(b):ia(b)?(b=qp(b),this.Tf(b)):null};l.Tf=function(){return this.defaultDataProjection};l.Ne=function(){return this.defaultDataProjection};l.Md=function(b,c){var d=this.D(b,c);return Qo(d)};
l.Vb=function(b,c){var d=this.c(b,c);return Qo(d)};l.Wc=function(b,c){var d=this.B(b,c);return Qo(d)};function Gs(b){b=b?b:{};this.featureType=b.featureType;this.featureNS=b.featureNS;this.srsName=b.srsName;this.schemaLocation="";this.a={};this.a["http://www.opengis.net/gml"]={featureMember:tp(Gs.prototype.Gd),featureMembers:tp(Gs.prototype.Gd)};this.defaultDataProjection=null}y(Gs,Ds);l=Gs.prototype;
l.Gd=function(b,c){var d=ap(b),e;if("FeatureCollection"==d)"http://www.opengis.net/wfs"===b.namespaceURI?e=Q([],this.a,b,c,this):e=Q(null,this.a,b,c,this);else if("featureMembers"==d||"featureMember"==d){var f=c[0],g=f.featureType;e=f.featureNS;var h,k;if(!g&&b.childNodes){g=[];e={};h=0;for(k=b.childNodes.length;h<k;++h){var m=b.childNodes[h];if(1===m.nodeType){var n=m.nodeName.split(":").pop();if(-1===g.indexOf(n)){var p;Qb(e,m.namespaceURI)?p=Rb(e,function(b){return b===m.namespaceURI}):(p="p"+
Mb(e),e[p]=m.namespaceURI);g.push(p+":"+n)}}}f.featureType=g;f.featureNS=e}ia(e)&&(h=e,e={},e.p0=h);var f={},g=ga(g)?g:[g],q;for(q in e){n={};h=0;for(k=g.length;h<k;++h)(-1===g[h].indexOf(":")?"p0":g[h].split(":")[0])===q&&(n[g[h].split(":").pop()]="featureMembers"==d?sp(this.Mf,this):tp(this.Mf,this));f[e[q]]=n}e=Q([],f,b,c)}e||(e=[]);return e};l.Ke=function(b,c){var d=c[0];d.srsName=b.firstElementChild.getAttribute("srsName");var e=Q(null,this.ig,b,c,this);if(e)return ds(e,!1,d)};
l.Mf=function(b,c){var d,e=b.getAttribute("fid")||kp(b,"http://www.opengis.net/gml","id"),f={},g;for(d=b.firstElementChild;d;d=d.nextElementSibling){var h=ap(d);if(0===d.childNodes.length||1===d.childNodes.length&&(3===d.firstChild.nodeType||4===d.firstChild.nodeType)){var k=Xo(d,!1);/^[\s\xa0]*$/.test(k)&&(k=void 0);f[h]=k}else"boundedBy"!==h&&(g=h),f[h]=this.Ke(d,c)}d=new Bn(f);g&&d.vc(g);e&&d.ic(e);return d};l.Oh=function(b,c){var d=this.Je(b,c);if(d){var e=new D(null);e.ba("XYZ",d);return e}};
l.Mh=function(b,c){var d=Q([],this.Ki,b,c,this);if(d)return new ks(d)};l.Lh=function(b,c){var d=Q([],this.Ji,b,c,this);if(d){var e=new U(null);js(e,d);return e}};l.Nh=function(b,c){var d=Q([],this.Li,b,c,this);if(d){var e=new V(null);ms(e,d);return e}};l.Dh=function(b,c){Ap(this.Oi,b,c,this)};l.Ug=function(b,c){Ap(this.Hi,b,c,this)};l.Eh=function(b,c){Ap(this.Pi,b,c,this)};l.Le=function(b,c){var d=this.Je(b,c);if(d){var e=new T(null);e.ba("XYZ",d);return e}};
l.qo=function(b,c){var d=Q(null,this.Od,b,c,this);if(d)return d};l.Kh=function(b,c){var d=this.Je(b,c);if(d){var e=new yf(null);zf(e,"XYZ",d);return e}};l.Me=function(b,c){var d=Q([null],this.Xe,b,c,this);if(d&&d[0]){var e=new E(null),f=d[0],g=[f.length],h,k;h=1;for(k=d.length;h<k;++h)nb(f,d[h]),g.push(f.length);e.ba("XYZ",f,g);return e}};l.Je=function(b,c){return Q(null,this.Od,b,c,this)};l.Ki=Object({"http://www.opengis.net/gml":{pointMember:sp(Gs.prototype.Dh),pointMembers:sp(Gs.prototype.Dh)}});
l.Ji=Object({"http://www.opengis.net/gml":{lineStringMember:sp(Gs.prototype.Ug),lineStringMembers:sp(Gs.prototype.Ug)}});l.Li=Object({"http://www.opengis.net/gml":{polygonMember:sp(Gs.prototype.Eh),polygonMembers:sp(Gs.prototype.Eh)}});l.Oi=Object({"http://www.opengis.net/gml":{Point:sp(Gs.prototype.Je)}});l.Hi=Object({"http://www.opengis.net/gml":{LineString:sp(Gs.prototype.Le)}});l.Pi=Object({"http://www.opengis.net/gml":{Polygon:sp(Gs.prototype.Me)}});l.Pd=Object({"http://www.opengis.net/gml":{LinearRing:tp(Gs.prototype.qo)}});
l.hc=function(b,c){var d={featureType:this.featureType,featureNS:this.featureNS};c&&Zb(d,bs(this,b,c));return this.Gd(b,[d])};l.Ne=function(b){return He(this.v?this.v:b.firstElementChild.getAttribute("srsName"))};function Hs(b){b=Xo(b,!1);return Is(b)}function Is(b){if(b=/^\s*(true|1)|(false|0)\s*$/.exec(b))return void 0!==b[1]||!1}
function Js(b){b=Xo(b,!1);if(b=/^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)){var c=Date.UTC(parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],10),parseInt(b[4],10),parseInt(b[5],10),parseInt(b[6],10))/1E3;if("Z"!=b[7]){var d="-"==b[8]?-1:1,c=c+60*d*parseInt(b[9],10);void 0!==b[10]&&(c+=3600*d*parseInt(b[10],10))}return c}}function Ks(b){b=Xo(b,!1);return Ls(b)}
function Ls(b){if(b=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b))return parseFloat(b[1])}function Ms(b){b=Xo(b,!1);return Ns(b)}function Ns(b){if(b=/^\s*(\d+)\s*$/.exec(b))return parseInt(b[1],10)}function W(b){return Xo(b,!1).trim()}function Os(b,c){Ps(b,c?"1":"0")}function Qs(b,c){b.appendChild(To.createTextNode(c.toPrecision()))}function Rs(b,c){b.appendChild(To.createTextNode(c.toString()))}function Ps(b,c){b.appendChild(To.createTextNode(c))};function Ss(b){b=b?b:{};Gs.call(this,b);this.a["http://www.opengis.net/gml"].featureMember=sp(Gs.prototype.Gd);this.schemaLocation=b.schemaLocation?b.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"}y(Ss,Gs);l=Ss.prototype;
l.Hh=function(b,c){var d=Xo(b,!1).replace(/^\s*|\s*$/g,""),e=c[0].srsName,f=b.parentNode.getAttribute("srsDimension"),g="enu";e&&(g=Ke(He(e)));d=d.split(/[\s,]+/);e=2;b.getAttribute("srsDimension")?e=Ns(b.getAttribute("srsDimension")):b.getAttribute("dimension")?e=Ns(b.getAttribute("dimension")):f&&(e=Ns(f));for(var h,k,m=[],n=0,p=d.length;n<p;n+=e)f=parseFloat(d[n]),h=parseFloat(d[n+1]),k=3===e?parseFloat(d[n+2]):0,"en"===g.substr(0,2)?m.push(f,h,k):m.push(h,f,k);return m};
l.no=function(b,c){var d=Q([null],this.Di,b,c,this);return Td(d[1][0],d[1][1],d[1][3],d[1][4])};l.cl=function(b,c){var d=Q(void 0,this.Pd,b,c,this);d&&c[c.length-1].push(d)};l.Wn=function(b,c){var d=Q(void 0,this.Pd,b,c,this);d&&(c[c.length-1][0]=d)};l.Od=Object({"http://www.opengis.net/gml":{coordinates:tp(Ss.prototype.Hh)}});l.Xe=Object({"http://www.opengis.net/gml":{innerBoundaryIs:Ss.prototype.cl,outerBoundaryIs:Ss.prototype.Wn}});l.Di=Object({"http://www.opengis.net/gml":{coordinates:sp(Ss.prototype.Hh)}});
l.ig=Object({"http://www.opengis.net/gml":{Point:tp(Gs.prototype.Oh),MultiPoint:tp(Gs.prototype.Mh),LineString:tp(Gs.prototype.Le),MultiLineString:tp(Gs.prototype.Lh),LinearRing:tp(Gs.prototype.Kh),Polygon:tp(Gs.prototype.Me),MultiPolygon:tp(Gs.prototype.Nh),Box:tp(Ss.prototype.no)}});function Ts(b){b=b?b:{};Gs.call(this,b);this.l=void 0!==b.surface?b.surface:!1;this.g=void 0!==b.curve?b.curve:!1;this.j=void 0!==b.multiCurve?b.multiCurve:!0;this.i=void 0!==b.multiSurface?b.multiSurface:!0;this.schemaLocation=b.schemaLocation?b.schemaLocation:"http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"}y(Ts,Gs);l=Ts.prototype;l.uo=function(b,c){var d=Q([],this.Ii,b,c,this);if(d){var e=new U(null);js(e,d);return e}};
l.vo=function(b,c){var d=Q([],this.Mi,b,c,this);if(d){var e=new V(null);ms(e,d);return e}};l.yg=function(b,c){Ap(this.Ei,b,c,this)};l.ki=function(b,c){Ap(this.Ti,b,c,this)};l.yo=function(b,c){return Q([null],this.Ni,b,c,this)};l.Ao=function(b,c){return Q([null],this.Si,b,c,this)};l.zo=function(b,c){return Q([null],this.Xe,b,c,this)};l.to=function(b,c){return Q([null],this.Od,b,c,this)};l.el=function(b,c){var d=Q(void 0,this.Pd,b,c,this);d&&c[c.length-1].push(d)};
l.xj=function(b,c){var d=Q(void 0,this.Pd,b,c,this);d&&(c[c.length-1][0]=d)};l.Qh=function(b,c){var d=Q([null],this.Ui,b,c,this);if(d&&d[0]){var e=new E(null),f=d[0],g=[f.length],h,k;h=1;for(k=d.length;h<k;++h)nb(f,d[h]),g.push(f.length);e.ba("XYZ",f,g);return e}};l.Fh=function(b,c){var d=Q([null],this.Fi,b,c,this);if(d){var e=new T(null);e.ba("XYZ",d);return e}};l.po=function(b,c){var d=Q([null],this.Gi,b,c,this);return Td(d[1][0],d[1][1],d[2][0],d[2][1])};
l.ro=function(b,c){for(var d=Xo(b,!1),e=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,f=[],g;g=e.exec(d);)f.push(parseFloat(g[1])),d=d.substr(g[0].length);if(""===d){d=c[0].srsName;e="enu";d&&(e=Ke(He(d)));if("neu"===e)for(d=0,e=f.length;d<e;d+=3)g=f[d],f[d]=f[d+1],f[d+1]=g;d=f.length;2==d&&f.push(0);return 0===d?void 0:f}};
l.Qf=function(b,c){var d=Xo(b,!1).replace(/^\s*|\s*$/g,""),e=c[0].srsName,f=b.parentNode.getAttribute("srsDimension"),g="enu";e&&(g=Ke(He(e)));d=d.split(/\s+/);e=2;b.getAttribute("srsDimension")?e=Ns(b.getAttribute("srsDimension")):b.getAttribute("dimension")?e=Ns(b.getAttribute("dimension")):f&&(e=Ns(f));for(var h,k,m=[],n=0,p=d.length;n<p;n+=e)f=parseFloat(d[n]),h=parseFloat(d[n+1]),k=3===e?parseFloat(d[n+2]):0,"en"===g.substr(0,2)?m.push(f,h,k):m.push(h,f,k);return m};
l.Od=Object({"http://www.opengis.net/gml":{pos:tp(Ts.prototype.ro),posList:tp(Ts.prototype.Qf)}});l.Xe=Object({"http://www.opengis.net/gml":{interior:Ts.prototype.el,exterior:Ts.prototype.xj}});
l.ig=Object({"http://www.opengis.net/gml":{Point:tp(Gs.prototype.Oh),MultiPoint:tp(Gs.prototype.Mh),LineString:tp(Gs.prototype.Le),MultiLineString:tp(Gs.prototype.Lh),LinearRing:tp(Gs.prototype.Kh),Polygon:tp(Gs.prototype.Me),MultiPolygon:tp(Gs.prototype.Nh),Surface:tp(Ts.prototype.Qh),MultiSurface:tp(Ts.prototype.vo),Curve:tp(Ts.prototype.Fh),MultiCurve:tp(Ts.prototype.uo),Envelope:tp(Ts.prototype.po)}});l.Ii=Object({"http://www.opengis.net/gml":{curveMember:sp(Ts.prototype.yg),curveMembers:sp(Ts.prototype.yg)}});
l.Mi=Object({"http://www.opengis.net/gml":{surfaceMember:sp(Ts.prototype.ki),surfaceMembers:sp(Ts.prototype.ki)}});l.Ei=Object({"http://www.opengis.net/gml":{LineString:sp(Gs.prototype.Le),Curve:sp(Ts.prototype.Fh)}});l.Ti=Object({"http://www.opengis.net/gml":{Polygon:sp(Gs.prototype.Me),Surface:sp(Ts.prototype.Qh)}});l.Ui=Object({"http://www.opengis.net/gml":{patches:tp(Ts.prototype.yo)}});l.Fi=Object({"http://www.opengis.net/gml":{segments:tp(Ts.prototype.Ao)}});
l.Gi=Object({"http://www.opengis.net/gml":{lowerCorner:sp(Ts.prototype.Qf),upperCorner:sp(Ts.prototype.Qf)}});l.Ni=Object({"http://www.opengis.net/gml":{PolygonPatch:tp(Ts.prototype.zo)}});l.Si=Object({"http://www.opengis.net/gml":{LineStringSegment:tp(Ts.prototype.to)}});function Us(b,c,d){d=d[d.length-1].srsName;c=c.Z();for(var e=c.length,f=Array(e),g,h=0;h<e;++h){g=c[h];var k=h,m="enu";d&&(m=Ke(He(d)));f[k]="en"===m.substr(0,2)?g[0]+" "+g[1]:g[1]+" "+g[0]}Ps(b,f.join(" "))}
l.zi=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);e=Wo(b.namespaceURI,"pos");b.appendChild(e);d=d[d.length-1].srsName;b="enu";d&&(b=Ke(He(d)));c=c.Z();Ps(e,"en"===b.substr(0,2)?c[0]+" "+c[1]:c[1]+" "+c[0])};var Vs={"http://www.opengis.net/gml":{lowerCorner:N(Ps),upperCorner:N(Ps)}};l=Ts.prototype;l.mp=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);Bp({node:b},Vs,yp,[c[0]+" "+c[1],c[2]+" "+c[3]],d,["lowerCorner","upperCorner"],this)};
l.wi=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);e=Wo(b.namespaceURI,"posList");b.appendChild(e);Us(e,c,d)};l.Ri=function(b,c){var d=c[c.length-1],e=d.node,f=d.exteriorWritten;void 0===f&&(d.exteriorWritten=!0);return Wo(e.namespaceURI,void 0!==f?"interior":"exterior")};
l.We=function(b,c,d){var e=d[d.length-1].srsName;"PolygonPatch"!==b.nodeName&&e&&b.setAttribute("srsName",e);"Polygon"===b.nodeName||"PolygonPatch"===b.nodeName?(c=c.de(),Bp({node:b,srsName:e},Ws,this.Ri,c,d,void 0,this)):"Surface"===b.nodeName&&(e=Wo(b.namespaceURI,"patches"),b.appendChild(e),b=Wo(e.namespaceURI,"PolygonPatch"),e.appendChild(b),this.We(b,c,d))};
l.Re=function(b,c,d){var e=d[d.length-1].srsName;"LineStringSegment"!==b.nodeName&&e&&b.setAttribute("srsName",e);"LineString"===b.nodeName||"LineStringSegment"===b.nodeName?(e=Wo(b.namespaceURI,"posList"),b.appendChild(e),Us(e,c,d)):"Curve"===b.nodeName&&(e=Wo(b.namespaceURI,"segments"),b.appendChild(e),b=Wo(e.namespaceURI,"LineStringSegment"),e.appendChild(b),this.Re(b,c,d))};
l.yi=function(b,c,d){var e=d[d.length-1],f=e.srsName,e=e.surface;f&&b.setAttribute("srsName",f);c=c.ee();Bp({node:b,srsName:f,surface:e},Xs,this.f,c,d,void 0,this)};l.np=function(b,c,d){var e=d[d.length-1].srsName;e&&b.setAttribute("srsName",e);c=c.we();Bp({node:b,srsName:e},Ys,wp("pointMember"),c,d,void 0,this)};l.xi=function(b,c,d){var e=d[d.length-1],f=e.srsName,e=e.curve;f&&b.setAttribute("srsName",f);c=c.rd();Bp({node:b,srsName:f,curve:e},Zs,this.f,c,d,void 0,this)};
l.Ai=function(b,c,d){var e=Wo(b.namespaceURI,"LinearRing");b.appendChild(e);this.wi(e,c,d)};l.Bi=function(b,c,d){var e=this.b(c,d);e&&(b.appendChild(e),this.We(e,c,d))};l.op=function(b,c,d){var e=Wo(b.namespaceURI,"Point");b.appendChild(e);this.zi(e,c,d)};l.vi=function(b,c,d){var e=this.b(c,d);e&&(b.appendChild(e),this.Re(e,c,d))};
l.Ue=function(b,c,d){var e=d[d.length-1],f=Wb(e);f.node=b;var g;ga(c)?e.dataProjection?g=cf(c,e.featureProjection,e.dataProjection):g=c:g=ds(c,!0,e);Bp(f,$s,this.b,[g],d,void 0,this)};
l.ri=function(b,c,d){var e=c.La();e&&b.setAttribute("fid",e);var e=d[d.length-1],f=e.featureNS,g=c.a;e.uc||(e.uc={},e.uc[f]={});var h=c.P();c=[];var k=[],m;for(m in h){var n=h[m];null!==n&&(c.push(m),k.push(n),m==g||n instanceof df?m in e.uc[f]||(e.uc[f][m]=N(this.Ue,this)):m in e.uc[f]||(e.uc[f][m]=N(Ps)))}m=Wb(e);m.node=b;Bp(m,e.uc,wp(void 0,f),k,d,c)};
var Xs={"http://www.opengis.net/gml":{surfaceMember:N(Ts.prototype.Bi),polygonMember:N(Ts.prototype.Bi)}},Ys={"http://www.opengis.net/gml":{pointMember:N(Ts.prototype.op)}},Zs={"http://www.opengis.net/gml":{lineStringMember:N(Ts.prototype.vi),curveMember:N(Ts.prototype.vi)}},Ws={"http://www.opengis.net/gml":{exterior:N(Ts.prototype.Ai),interior:N(Ts.prototype.Ai)}},$s={"http://www.opengis.net/gml":{Curve:N(Ts.prototype.Re),MultiCurve:N(Ts.prototype.xi),Point:N(Ts.prototype.zi),MultiPoint:N(Ts.prototype.np),
LineString:N(Ts.prototype.Re),MultiLineString:N(Ts.prototype.xi),LinearRing:N(Ts.prototype.wi),Polygon:N(Ts.prototype.We),MultiPolygon:N(Ts.prototype.yi),Surface:N(Ts.prototype.We),MultiSurface:N(Ts.prototype.yi),Envelope:N(Ts.prototype.mp)}},at={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"};Ts.prototype.f=function(b,c){return Wo("http://www.opengis.net/gml",at[c[c.length-1].node.nodeName])};
Ts.prototype.b=function(b,c){var d=c[c.length-1],e=d.multiSurface,f=d.surface,g=d.curve,d=d.multiCurve,h;ga(b)?h="Envelope":(h=b.V(),"MultiPolygon"===h&&!0===e?h="MultiSurface":"Polygon"===h&&!0===f?h="Surface":"LineString"===h&&!0===g?h="Curve":"MultiLineString"===h&&!0===d&&(h="MultiCurve"));return Wo("http://www.opengis.net/gml",h)};
Ts.prototype.B=function(b,c){c=cs(this,c);var d=Wo("http://www.opengis.net/gml","geom"),e={node:d,srsName:this.srsName,curve:this.g,surface:this.l,multiSurface:this.i,multiCurve:this.j};c&&Zb(e,c);this.Ue(d,b,[e]);return d};
Ts.prototype.c=function(b,c){c=cs(this,c);var d=Wo("http://www.opengis.net/gml","featureMembers");pp(d,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.schemaLocation);var e={srsName:this.srsName,curve:this.g,surface:this.l,multiSurface:this.i,multiCurve:this.j,featureNS:this.featureNS,featureType:this.featureType};c&&Zb(e,c);var e=[e],f=e[e.length-1],g=f.featureType,h=f.featureNS,k={};k[h]={};k[h][g]=N(this.ri,this);f=Wb(f);f.node=d;Bp(f,k,wp(g,h),b,e);return d};function bt(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=He("EPSG:4326");this.a=b.readExtensions}y(bt,Ds);var ct=[null,"http://www.topografix.com/GPX/1/0","http://www.topografix.com/GPX/1/1"];function dt(b,c,d){b.push(parseFloat(c.getAttribute("lon")),parseFloat(c.getAttribute("lat")));"ele"in d?(b.push(d.ele),delete d.ele):b.push(0);"time"in d?(b.push(d.time),delete d.time):b.push(0);return b}
function et(b,c){var d=c[c.length-1],e=b.getAttribute("href");null!==e&&(d.link=e);Ap(ft,b,c)}function gt(b,c){c[c.length-1].extensionsNode_=b}function ht(b,c){var d=c[0],e=Q({flatCoordinates:[]},it,b,c);if(e){var f=e.flatCoordinates;delete e.flatCoordinates;var g=new T(null);g.ba("XYZM",f);ds(g,!1,d);d=new Bn(g);d.I(e);return d}}
function jt(b,c){var d=c[0],e=Q({flatCoordinates:[],ends:[]},kt,b,c);if(e){var f=e.flatCoordinates;delete e.flatCoordinates;var g=e.ends;delete e.ends;var h=new U(null);h.ba("XYZM",f,g);ds(h,!1,d);d=new Bn(h);d.I(e);return d}}function lt(b,c){var d=c[0],e=Q({},mt,b,c);if(e){var f=dt([],b,e),f=new D(f,"XYZM");ds(f,!1,d);d=new Bn(f);d.I(e);return d}}
var nt={rte:ht,trk:jt,wpt:lt},ot=P(ct,{rte:sp(ht),trk:sp(jt),wpt:sp(lt)}),ft=P(ct,{text:M(W,"linkText"),type:M(W,"linkType")}),it=P(ct,{name:M(W),cmt:M(W),desc:M(W),src:M(W),link:et,number:M(Ms),extensions:gt,type:M(W),rtept:function(b,c){var d=Q({},pt,b,c);d&&dt(c[c.length-1].flatCoordinates,b,d)}}),pt=P(ct,{ele:M(Ks),time:M(Js)}),kt=P(ct,{name:M(W),cmt:M(W),desc:M(W),src:M(W),link:et,number:M(Ms),type:M(W),extensions:gt,trkseg:function(b,c){var d=c[c.length-1];Ap(qt,b,c);d.ends.push(d.flatCoordinates.length)}}),
qt=P(ct,{trkpt:function(b,c){var d=Q({},rt,b,c);d&&dt(c[c.length-1].flatCoordinates,b,d)}}),rt=P(ct,{ele:M(Ks),time:M(Js)}),mt=P(ct,{ele:M(Ks),time:M(Js),magvar:M(Ks),geoidheight:M(Ks),name:M(W),cmt:M(W),desc:M(W),src:M(W),link:et,sym:M(W),type:M(W),fix:M(W),sat:M(Ms),hdop:M(Ks),vdop:M(Ks),pdop:M(Ks),ageofdgpsdata:M(Ks),dgpsid:M(Ms),extensions:gt});
function st(b,c){c||(c=[]);for(var d=0,e=c.length;d<e;++d){var f=c[d];if(b.a){var g=f.get("extensionsNode_")||null;b.a(f,g)}f.set("extensionsNode_",void 0)}}bt.prototype.Gh=function(b,c){if(!xb(ct,b.namespaceURI))return null;var d=nt[b.localName];if(!d)return null;d=d(b,[bs(this,b,c)]);if(!d)return null;st(this,[d]);return d};bt.prototype.hc=function(b,c){if(!xb(ct,b.namespaceURI))return[];if("gpx"==b.localName){var d=Q([],ot,b,[bs(this,b,c)]);if(d)return st(this,d),d}return[]};
function tt(b,c,d){b.setAttribute("href",c);c=d[d.length-1].properties;Bp({node:b},ut,yp,[c.linkText,c.linkType],d,vt)}function wt(b,c,d){var e=d[d.length-1],f=e.node.namespaceURI,g=e.properties;pp(b,null,"lat",c[1]);pp(b,null,"lon",c[0]);switch(e.geometryLayout){case "XYZM":0!==c[3]&&(g.time=c[3]);case "XYZ":0!==c[2]&&(g.ele=c[2]);break;case "XYM":0!==c[2]&&(g.time=c[2])}c=xt[f];e=zp(g,c);Bp({node:b,properties:g},yt,yp,e,d,c)}
var vt=["text","type"],ut=P(ct,{text:N(Ps),type:N(Ps)}),zt=P(ct,"name cmt desc src link number type rtept".split(" ")),At=P(ct,{name:N(Ps),cmt:N(Ps),desc:N(Ps),src:N(Ps),link:N(tt),number:N(Rs),type:N(Ps),rtept:vp(N(wt))}),Bt=P(ct,"name cmt desc src link number type trkseg".split(" ")),Et=P(ct,{name:N(Ps),cmt:N(Ps),desc:N(Ps),src:N(Ps),link:N(tt),number:N(Rs),type:N(Ps),trkseg:vp(N(function(b,c,d){Bp({node:b,geometryLayout:c.b,properties:{}},Ct,Dt,c.Z(),d)}))}),Dt=wp("trkpt"),Ct=P(ct,{trkpt:N(wt)}),
xt=P(ct,"ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),yt=P(ct,{ele:N(Qs),time:N(function(b,c){var d=new Date(1E3*c),d=d.getUTCFullYear()+"-"+Oa(d.getUTCMonth()+1)+"-"+Oa(d.getUTCDate())+"T"+Oa(d.getUTCHours())+":"+Oa(d.getUTCMinutes())+":"+Oa(d.getUTCSeconds())+"Z";b.appendChild(To.createTextNode(d))}),magvar:N(Qs),geoidheight:N(Qs),name:N(Ps),cmt:N(Ps),desc:N(Ps),src:N(Ps),link:N(tt),sym:N(Ps),type:N(Ps),fix:N(Ps),sat:N(Rs),
hdop:N(Qs),vdop:N(Qs),pdop:N(Qs),ageofdgpsdata:N(Qs),dgpsid:N(Rs)}),Ft={Point:"wpt",LineString:"rte",MultiLineString:"trk"};function Gt(b,c){var d=b.W();if(d&&(d=Ft[d.V()]))return Wo(c[c.length-1].node.namespaceURI,d)}
var Ht=P(ct,{rte:N(function(b,c,d){var e=d[0],f=c.P();b={node:b,properties:f};if(c=c.W())c=ds(c,!0,e),b.geometryLayout=c.b,f.rtept=c.Z();e=zt[d[d.length-1].node.namespaceURI];f=zp(f,e);Bp(b,At,yp,f,d,e)}),trk:N(function(b,c,d){var e=d[0],f=c.P();b={node:b,properties:f};if(c=c.W())c=ds(c,!0,e),f.trkseg=c.rd();e=Bt[d[d.length-1].node.namespaceURI];f=zp(f,e);Bp(b,Et,yp,f,d,e)}),wpt:N(function(b,c,d){var e=d[0],f=d[d.length-1];f.properties=c.P();if(c=c.W())c=ds(c,!0,e),f.geometryLayout=c.b,wt(b,c.Z(),
d)})});bt.prototype.c=function(b,c){c=cs(this,c);var d=Wo("http://www.topografix.com/GPX/1/1","gpx");Bp({node:d},Ht,Gt,b,[c]);return d};function It(b){b=Jt(b);return fb(b,function(b){return b.b.substring(b.c,b.a)})}function Kt(b,c,d){this.b=b;this.c=c;this.a=d}function Jt(b){for(var c=RegExp("\r\n|\r|\n","g"),d=0,e,f=[];e=c.exec(b);)d=new Kt(b,d,e.index),f.push(d),d=c.lastIndex;d<b.length&&(d=new Kt(b,d,b.length),f.push(d));return f};function Lt(){this.defaultDataProjection=null}y(Lt,as);l=Lt.prototype;l.V=function(){return"text"};l.Tb=function(b,c){return this.Fd(ia(b)?b:"",cs(this,c))};l.Ba=function(b,c){return this.Of(ia(b)?b:"",cs(this,c))};l.Sc=function(b,c){return this.Hd(ia(b)?b:"",cs(this,c))};l.Ja=function(){return this.defaultDataProjection};l.Md=function(b,c){return this.Se(b,cs(this,c))};l.Vb=function(b,c){return this.si(b,cs(this,c))};l.Wc=function(b,c){return this.Nd(b,cs(this,c))};function Mt(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=He("EPSG:4326");this.a=b.altitudeMode?b.altitudeMode:"none"}y(Mt,Lt);var Nt=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,Ot=/^H.([A-Z]{3}).*?:(.*)/,Pt=/^HFDTE(\d{2})(\d{2})(\d{2})/;
Mt.prototype.Fd=function(b,c){var d=this.a,e=It(b),f={},g=[],h=2E3,k=0,m=1,n,p;n=0;for(p=e.length;n<p;++n){var q=e[n],r;if("B"==q.charAt(0)){if(r=Nt.exec(q)){var q=parseInt(r[1],10),t=parseInt(r[2],10),x=parseInt(r[3],10),z=parseInt(r[4],10)+parseInt(r[5],10)/6E4;"S"==r[6]&&(z=-z);var B=parseInt(r[7],10)+parseInt(r[8],10)/6E4;"W"==r[9]&&(B=-B);g.push(B,z);"none"!=d&&g.push("gps"==d?parseInt(r[11],10):"barometric"==d?parseInt(r[12],10):0);g.push(Date.UTC(h,k,m,q,t,x)/1E3)}}else if("H"==q.charAt(0))if(r=
Pt.exec(q))m=parseInt(r[1],10),k=parseInt(r[2],10)-1,h=2E3+parseInt(r[3],10);else if(r=Ot.exec(q))f[r[1]]=r[2].trim(),Pt.exec(q)}if(0===g.length)return null;e=new T(null);e.ba("none"==d?"XYM":"XYZM",g);d=new Bn(ds(e,!1,c));d.I(f);return d};Mt.prototype.Of=function(b,c){var d=this.Fd(b,c);return d?[d]:[]};function Qt(b,c){this.c=this.i=this.f="";this.l=null;this.g=this.a="";this.j=!1;var d;b instanceof Qt?(this.j=ca(c)?c:b.j,Rt(this,b.f),this.i=b.i,this.c=b.c,St(this,b.l),this.a=b.a,Tt(this,b.b.clone()),this.g=b.g):b&&(d=String(b).match(so))?(this.j=!!c,Rt(this,d[1]||"",!0),this.i=Ut(d[2]||""),this.c=Ut(d[3]||"",!0),St(this,d[4]),this.a=Ut(d[5]||"",!0),Tt(this,d[6]||"",!0),this.g=Ut(d[7]||"")):(this.j=!!c,this.b=new Vt(null,0,this.j))}
Qt.prototype.toString=function(){var b=[],c=this.f;c&&b.push(Wt(c,Xt,!0),":");var d=this.c;if(d||"file"==c)b.push("//"),(c=this.i)&&b.push(Wt(c,Xt,!0),"@"),b.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.l,null!=d&&b.push(":",String(d));if(d=this.a)this.c&&"/"!=d.charAt(0)&&b.push("/"),b.push(Wt(d,"/"==d.charAt(0)?Yt:Zt,!0));(d=this.b.toString())&&b.push("?",d);(d=this.g)&&b.push("#",Wt(d,$t));return b.join("")};Qt.prototype.clone=function(){return new Qt(this)};
function Rt(b,c,d){b.f=d?Ut(c,!0):c;b.f&&(b.f=b.f.replace(/:$/,""))}function St(b,c){if(c){c=Number(c);if(isNaN(c)||0>c)throw Error("Bad port number "+c);b.l=c}else b.l=null}function Tt(b,c,d){c instanceof Vt?(b.b=c,au(b.b,b.j)):(d||(c=Wt(c,bu)),b.b=new Vt(c,0,b.j))}function cu(b){return b instanceof Qt?b.clone():new Qt(b,void 0)}
function du(b,c){b instanceof Qt||(b=cu(b));c instanceof Qt||(c=cu(c));var d=b,e=c,f=d.clone(),g=!!e.f;g?Rt(f,e.f):g=!!e.i;g?f.i=e.i:g=!!e.c;g?f.c=e.c:g=null!=e.l;var h=e.a;if(g)St(f,e.l);else if(g=!!e.a)if("/"!=h.charAt(0)&&(d.c&&!d.a?h="/"+h:(d=f.a.lastIndexOf("/"),-1!=d&&(h=f.a.substr(0,d+1)+h))),d=h,".."==d||"."==d)h="";else if(-1!=d.indexOf("./")||-1!=d.indexOf("/.")){for(var h=0==d.lastIndexOf("/",0),d=d.split("/"),k=[],m=0;m<d.length;){var n=d[m++];"."==n?h&&m==d.length&&k.push(""):".."==n?
((1<k.length||1==k.length&&""!=k[0])&&k.pop(),h&&m==d.length&&k.push("")):(k.push(n),h=!0)}h=k.join("/")}else h=d;g?f.a=h:g=""!==e.b.toString();g?Tt(f,Ut(e.b.toString())):g=!!e.g;g&&(f.g=e.g);return f}function Ut(b,c){return b?c?decodeURI(b.replace(/%25/g,"%2525")):decodeURIComponent(b):""}function Wt(b,c,d){return ia(b)?(b=encodeURI(b).replace(c,eu),d&&(b=b.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),b):null}function eu(b){b=b.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)}
var Xt=/[#\/\?@]/g,Zt=/[\#\?:]/g,Yt=/[\#\?]/g,bu=/[\#\?@]/g,$t=/#/g;function Vt(b,c,d){this.c=this.a=null;this.b=b||null;this.f=!!d}function fu(b){b.a||(b.a=new Ai,b.c=0,b.b&&to(b.b,function(c,d){b.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}l=Vt.prototype;l.nc=function(){fu(this);return this.c};l.add=function(b,c){fu(this);this.b=null;b=gu(this,b);var d=this.a.get(b);d||this.a.set(b,d=[]);d.push(c);this.c++;return this};
l.remove=function(b){fu(this);b=gu(this,b);return Ci(this.a.c,b)?(this.b=null,this.c-=this.a.get(b).length,this.a.remove(b)):!1};l.clear=function(){this.a=this.b=null;this.c=0};l.Ma=function(){fu(this);return 0==this.c};function hu(b,c){fu(b);c=gu(b,c);return Ci(b.a.c,c)}l.O=function(){fu(this);for(var b=this.a.pc(),c=this.a.O(),d=[],e=0;e<c.length;e++)for(var f=b[e],g=0;g<f.length;g++)d.push(c[e]);return d};
l.pc=function(b){fu(this);var c=[];if(ia(b))hu(this,b)&&(c=kb(c,this.a.get(gu(this,b))));else{b=this.a.pc();for(var d=0;d<b.length;d++)c=kb(c,b[d])}return c};l.set=function(b,c){fu(this);this.b=null;b=gu(this,b);hu(this,b)&&(this.c-=this.a.get(b).length);this.a.set(b,[c]);this.c++;return this};l.get=function(b,c){var d=b?this.pc(b):[];return 0<d.length?String(d[0]):c};function iu(b,c,d){b.remove(c);0<d.length&&(b.b=null,b.a.set(gu(b,c),lb(d)),b.c+=d.length)}
l.toString=function(){if(this.b)return this.b;if(!this.a)return"";for(var b=[],c=this.a.O(),d=0;d<c.length;d++)for(var e=c[d],f=encodeURIComponent(String(e)),e=this.pc(e),g=0;g<e.length;g++){var h=f;""!==e[g]&&(h+="="+encodeURIComponent(String(e[g])));b.push(h)}return this.b=b.join("&")};l.clone=function(){var b=new Vt;b.b=this.b;this.a&&(b.a=this.a.clone(),b.c=this.c);return b};function gu(b,c){var d=String(c);b.f&&(d=d.toLowerCase());return d}
function au(b,c){c&&!b.f&&(fu(b),b.b=null,b.a.forEach(function(b,c){var f=c.toLowerCase();c!=f&&(this.remove(c),iu(this,f,b))},b));b.f=c};function ju(b){b=b||{};this.f=b.font;this.i=b.rotation;this.c=b.scale;this.b=b.text;this.B=b.textAlign;this.u=b.textBaseline;this.a=void 0!==b.fill?b.fill:new em({color:"#333"});this.l=void 0!==b.stroke?b.stroke:null;this.g=void 0!==b.offsetX?b.offsetX:0;this.j=void 0!==b.offsetY?b.offsetY:0}l=ju.prototype;l.Mj=function(){return this.f};l.$j=function(){return this.g};l.ak=function(){return this.j};l.Gn=function(){return this.a};l.Hn=function(){return this.i};l.In=function(){return this.c};l.Jn=function(){return this.l};
l.Kn=function(){return this.b};l.mk=function(){return this.B};l.nk=function(){return this.u};l.Ro=function(b){this.f=b};l.di=function(b){this.g=b};l.ei=function(b){this.j=b};l.Qo=function(b){this.a=b};l.Ln=function(b){this.i=b};l.Mn=function(b){this.c=b};l.Yo=function(b){this.l=b};l.fi=function(b){this.b=b};l.gi=function(b){this.B=b};l.Zo=function(b){this.u=b};function ku(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=He("EPSG:4326");this.b=b.defaultStyle?b.defaultStyle:lu;this.f=void 0!==b.extractStyles?b.extractStyles:!0;this.j=void 0!==b.writeStyles?b.writeStyles:!0;this.a={};this.g=void 0!==b.showPointNames?b.showPointNames:!0}y(ku,Ds);
var mu=["http://www.google.com/kml/ext/2.2"],nu=[null,"http://earth.google.com/kml/2.0","http://earth.google.com/kml/2.1","http://earth.google.com/kml/2.2","http://www.opengis.net/kml/2.2"],ou=[255,255,255,1],pu=new em({color:ou}),qu=[20,2],ru=[64,64],su=new Fk({anchor:qu,anchorOrigin:"bottom-left",anchorXUnits:"pixels",anchorYUnits:"pixels",crossOrigin:"anonymous",rotation:0,scale:.5,size:ru,src:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"}),tu=new jm({color:ou,width:1}),uu=new ju({font:"bold 16px Helvetica",
fill:pu,stroke:new jm({color:[51,51,51,1],width:2}),scale:.8}),lu=[new lm({fill:pu,image:su,text:uu,stroke:tu,zIndex:0})],vu={fraction:"fraction",pixels:"pixels"};function wu(b,c){var d=null,e=[0,0],f="start";b.b&&(d=b.b.qd())&&2==d.length&&(e[0]=b.b.i*d[0]/2,e[1]=-b.b.i*d[1]/2,f="left");Sb(b.c)?d=new ju({text:c,offsetX:e[0],offsetY:e[1],textAlign:f}):(d=Wb(b.c),d.fi(c),d.gi(f),d.di(e[0]),d.ei(e[1]));return new lm({text:d})}
function xu(b,c,d,e,f){return function(){var g=f,h="";g&&this.W()&&(g="Point"===this.W().V());g&&(h=this.P().name,g=g&&h);if(b)return g?(g=wu(b[0],h),b.concat(g)):b;if(c){var k=yu(c,d,e);return g?(g=wu(k[0],h),k.concat(g)):k}return g?(g=wu(d[0],h),d.concat(g)):d}}function yu(b,c,d){return ga(b)?b:ia(b)?(!(b in d)&&"#"+b in d&&(b="#"+b),yu(d[b],c,d)):c}
function zu(b){b=Xo(b,!1);if(b=/^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b))return b=b[1],[parseInt(b.substr(6,2),16),parseInt(b.substr(4,2),16),parseInt(b.substr(2,2),16),parseInt(b.substr(0,2),16)/255]}function Au(b){b=Xo(b,!1);for(var c=[],d=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i,e;e=d.exec(b);)c.push(parseFloat(e[1]),parseFloat(e[2]),e[3]?parseFloat(e[3]):0),b=b.substr(e[0].length);return""!==b?void 0:c}
function Bu(b){var c=Xo(b,!1);return b.baseURI?du(b.baseURI,c.trim()).toString():c.trim()}function Cu(b){b=Ks(b);if(void 0!==b)return Math.sqrt(b)}function Du(b,c){return Q(null,Eu,b,c)}function Fu(b,c){var d=Q({A:[],oi:[]},Gu,b,c);if(d){var e=d.A,d=d.oi,f,g;f=0;for(g=Math.min(e.length,d.length);f<g;++f)e[4*f+3]=d[f];d=new T(null);d.ba("XYZM",e);return d}}function Hu(b,c){var d=Q({},Iu,b,c),e=Q(null,Ju,b,c);if(e){var f=new T(null);f.ba("XYZ",e);f.I(d);return f}}
function Ku(b,c){var d=Q({},Iu,b,c),e=Q(null,Ju,b,c);if(e){var f=new E(null);f.ba("XYZ",e,[e.length]);f.I(d);return f}}
function Lu(b,c){var d=Q([],Mu,b,c);if(!d)return null;if(0===d.length)return new us(d);var e=!0,f=d[0].V(),g,h,k;h=1;for(k=d.length;h<k;++h)if(g=d[h],g.V()!=f){e=!1;break}if(e){if("Point"==f){g=d[0];e=g.b;f=g.ja();h=1;for(k=d.length;h<k;++h)g=d[h],nb(f,g.ja());g=new ks(null);g.ba(e,f);Nu(g,d);return g}return"LineString"==f?(g=new U(null),js(g,d),Nu(g,d),g):"Polygon"==f?(g=new V(null),ms(g,d),Nu(g,d),g):"GeometryCollection"==f?new us(d):null}return new us(d)}
function Ou(b,c){var d=Q({},Iu,b,c),e=Q(null,Ju,b,c);if(e){var f=new D(null);f.ba("XYZ",e);f.I(d);return f}}function Pu(b,c){var d=Q({},Iu,b,c),e=Q([null],Qu,b,c);if(e&&e[0]){var f=new E(null),g=e[0],h=[g.length],k,m;k=1;for(m=e.length;k<m;++k)nb(g,e[k]),h.push(g.length);f.ba("XYZ",g,h);f.I(d);return f}}
function Ru(b,c){var d=Q({},Su,b,c);if(!d)return null;var e="fillStyle"in d?d.fillStyle:pu,f=d.fill;void 0===f||f||(e=null);var f="imageStyle"in d?d.imageStyle:su,g="textStyle"in d?d.textStyle:uu,h="strokeStyle"in d?d.strokeStyle:tu,d=d.outline;void 0===d||d||(h=null);return[new lm({fill:e,image:f,stroke:h,text:g,zIndex:void 0})]}
function Nu(b,c){var d=c.length,e=Array(c.length),f=Array(c.length),g,h,k,m;k=m=!1;for(h=0;h<d;++h)g=c[h],e[h]=g.get("extrude"),f[h]=g.get("altitudeMode"),k=k||void 0!==e[h],m=m||f[h];k&&b.set("extrude",e);m&&b.set("altitudeMode",f)}function Tu(b,c){Ap(Uu,b,c)}
var Vu=P(nu,{value:tp(W)}),Uu=P(nu,{Data:function(b,c){var d=b.getAttribute("name");if(null!==d){var e=Q(void 0,Vu,b,c);e&&(c[c.length-1][d]=e)}},SchemaData:function(b,c){Ap(Wu,b,c)}}),Iu=P(nu,{extrude:M(Hs),altitudeMode:M(W)}),Eu=P(nu,{coordinates:tp(Au)}),Qu=P(nu,{innerBoundaryIs:function(b,c){var d=Q(void 0,Xu,b,c);d&&c[c.length-1].push(d)},outerBoundaryIs:function(b,c){var d=Q(void 0,Yu,b,c);d&&(c[c.length-1][0]=d)}}),Gu=P(nu,{when:function(b,c){var d=c[c.length-1].oi,e=Xo(b,!1);if(e=/^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)){var f=
Date.UTC(parseInt(e[1],10),e[3]?parseInt(e[3],10)-1:0,e[5]?parseInt(e[5],10):1,e[7]?parseInt(e[7],10):0,e[8]?parseInt(e[8],10):0,e[9]?parseInt(e[9],10):0);if(e[10]&&"Z"!=e[10]){var g="-"==e[11]?-1:1,f=f+60*g*parseInt(e[12],10);e[13]&&(f+=3600*g*parseInt(e[13],10))}d.push(f)}else d.push(0)}},P(mu,{coord:function(b,c){var d=c[c.length-1].A,e=Xo(b,!1);(e=/^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e))?d.push(parseFloat(e[1]),
parseFloat(e[2]),parseFloat(e[3]),0):d.push(0,0,0,0)}})),Ju=P(nu,{coordinates:tp(Au)}),Zu=P(nu,{href:M(Bu)},P(mu,{x:M(Ks),y:M(Ks),w:M(Ks),h:M(Ks)})),$u=P(nu,{Icon:M(function(b,c){var d=Q({},Zu,b,c);return d?d:null}),heading:M(Ks),hotSpot:M(function(b){var c=b.getAttribute("xunits"),d=b.getAttribute("yunits");return{x:parseFloat(b.getAttribute("x")),gg:vu[c],y:parseFloat(b.getAttribute("y")),hg:vu[d]}}),scale:M(Cu)}),Xu=P(nu,{LinearRing:tp(Du)}),av=P(nu,{color:M(zu),scale:M(Cu)}),bv=P(nu,{color:M(zu),
width:M(Ks)}),Mu=P(nu,{LineString:sp(Hu),LinearRing:sp(Ku),MultiGeometry:sp(Lu),Point:sp(Ou),Polygon:sp(Pu)}),cv=P(mu,{Track:sp(Fu)}),ev=P(nu,{ExtendedData:Tu,Link:function(b,c){Ap(dv,b,c)},address:M(W),description:M(W),name:M(W),open:M(Hs),phoneNumber:M(W),visibility:M(Hs)}),dv=P(nu,{href:M(Bu)}),Yu=P(nu,{LinearRing:tp(Du)}),fv=P(nu,{Style:M(Ru),key:M(W),styleUrl:M(function(b){var c=Xo(b,!1).trim();return b.baseURI?du(b.baseURI,c).toString():c})}),hv=P(nu,{ExtendedData:Tu,MultiGeometry:M(Lu,"geometry"),
LineString:M(Hu,"geometry"),LinearRing:M(Ku,"geometry"),Point:M(Ou,"geometry"),Polygon:M(Pu,"geometry"),Style:M(Ru),StyleMap:function(b,c){var d=Q(void 0,gv,b,c);if(d){var e=c[c.length-1];ga(d)?e.Style=d:ia(d)&&(e.styleUrl=d)}},address:M(W),description:M(W),name:M(W),open:M(Hs),phoneNumber:M(W),styleUrl:M(Bu),visibility:M(Hs)},P(mu,{MultiTrack:M(function(b,c){var d=Q([],cv,b,c);if(d){var e=new U(null);js(e,d);return e}},"geometry"),Track:M(Fu,"geometry")})),iv=P(nu,{color:M(zu),fill:M(Hs),outline:M(Hs)}),
Wu=P(nu,{SimpleData:function(b,c){var d=b.getAttribute("name");if(null!==d){var e=W(b);c[c.length-1][d]=e}}}),Su=P(nu,{IconStyle:function(b,c){var d=Q({},$u,b,c);if(d){var e=c[c.length-1],f="Icon"in d?d.Icon:{},g;g=(g=f.href)?g:"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";var h,k,m,n=d.hotSpot;n?(h=[n.x,n.y],k=n.gg,m=n.hg):"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"===g?(h=qu,m=k="pixels"):/^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g)&&(h=[.5,0],m=k="fraction");
var p,n=f.x,q=f.y;void 0!==n&&void 0!==q&&(p=[n,q]);var r,n=f.w,f=f.h;void 0!==n&&void 0!==f&&(r=[n,f]);var t,f=d.heading;void 0!==f&&(t=Ya(f));d=d.scale;"https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"==g&&(r=ru,void 0===d&&(d=.5));h=new Fk({anchor:h,anchorOrigin:"bottom-left",anchorXUnits:k,anchorYUnits:m,crossOrigin:"anonymous",offset:p,offsetOrigin:"bottom-left",rotation:t,scale:d,size:r,src:g});e.imageStyle=h}},LabelStyle:function(b,c){var d=Q({},av,b,c);d&&(c[c.length-1].textStyle=
new ju({fill:new em({color:"color"in d?d.color:ou}),scale:d.scale}))},LineStyle:function(b,c){var d=Q({},bv,b,c);d&&(c[c.length-1].strokeStyle=new jm({color:"color"in d?d.color:ou,width:"width"in d?d.width:1}))},PolyStyle:function(b,c){var d=Q({},iv,b,c);if(d){var e=c[c.length-1];e.fillStyle=new em({color:"color"in d?d.color:ou});var f=d.fill;void 0!==f&&(e.fill=f);d=d.outline;void 0!==d&&(e.outline=d)}}}),gv=P(nu,{Pair:function(b,c){var d=Q({},fv,b,c);if(d){var e=d.key;e&&"normal"==e&&((e=d.styleUrl)&&
(c[c.length-1]=e),(d=d.Style)&&(c[c.length-1]=d))}}});l=ku.prototype;l.Kf=function(b,c){ap(b);var d=P(nu,{Document:rp(this.Kf,this),Folder:rp(this.Kf,this),Placemark:sp(this.Sf,this),Style:ra(this.Co,this),StyleMap:ra(this.Bo,this)});if(d=Q([],d,b,c,this))return d};
l.Sf=function(b,c){var d=Q({geometry:null},hv,b,c);if(d){var e=new Bn,f=b.getAttribute("id");null!==f&&e.ic(f);var f=c[0],g=d.geometry;g&&ds(g,!1,f);e.Na(g);delete d.geometry;this.f&&e.Af(xu(d.Style,d.styleUrl,this.b,this.a,this.g));delete d.Style;e.I(d);return e}};l.Co=function(b,c){var d=b.getAttribute("id");if(null!==d){var e=Ru(b,c);e&&(d=b.baseURI?du(b.baseURI,"#"+d).toString():"#"+d,this.a[d]=e)}};
l.Bo=function(b,c){var d=b.getAttribute("id");if(null!==d){var e=Q(void 0,gv,b,c);e&&(d=b.baseURI?du(b.baseURI,"#"+d).toString():"#"+d,this.a[d]=e)}};l.Gh=function(b,c){if(!xb(nu,b.namespaceURI))return null;var d=this.Sf(b,[bs(this,b,c)]);return d?d:null};
l.hc=function(b,c){if(!xb(nu,b.namespaceURI))return[];var d;d=ap(b);if("Document"==d||"Folder"==d)return(d=this.Kf(b,[bs(this,b,c)]))?d:[];if("Placemark"==d)return(d=this.Sf(b,[bs(this,b,c)]))?[d]:[];if("kml"==d){d=[];var e;for(e=b.firstElementChild;e;e=e.nextElementSibling){var f=this.hc(e,c);f&&nb(d,f)}return d}return[]};l.wo=function(b){if(dp(b))return jv(this,b);if(gp(b))return kv(this,b);if(ia(b))return b=qp(b),jv(this,b)};
function jv(b,c){var d;for(d=c.firstChild;d;d=d.nextSibling)if(1==d.nodeType){var e=kv(b,d);if(e)return e}}function kv(b,c){var d;for(d=c.firstElementChild;d;d=d.nextElementSibling)if(xb(nu,d.namespaceURI)&&"name"==d.localName)return W(d);for(d=c.firstElementChild;d;d=d.nextElementSibling){var e=ap(d);if(xb(nu,d.namespaceURI)&&("Document"==e||"Folder"==e||"Placemark"==e||"kml"==e)&&(e=kv(b,d)))return e}}
l.xo=function(b){var c=[];dp(b)?nb(c,lv(this,b)):gp(b)?nb(c,mv(this,b)):ia(b)&&(b=qp(b),nb(c,lv(this,b)));return c};function lv(b,c){var d,e=[];for(d=c.firstChild;d;d=d.nextSibling)1==d.nodeType&&nb(e,mv(b,d));return e}
function mv(b,c){var d,e=[];for(d=c.firstElementChild;d;d=d.nextElementSibling)if(xb(nu,d.namespaceURI)&&"NetworkLink"==d.localName){var f=Q({},ev,d,[]);e.push(f)}for(d=c.firstElementChild;d;d=d.nextElementSibling)f=ap(d),!xb(nu,d.namespaceURI)||"Document"!=f&&"Folder"!=f&&"kml"!=f||nb(e,mv(b,d));return e}function nv(b,c){var d=vg(c),d=[255*(4==d.length?d[3]:1),d[2],d[1],d[0]],e;for(e=0;4>e;++e){var f=parseInt(d[e],10).toString(16);d[e]=1==f.length?"0"+f:f}Ps(b,d.join(""))}
function ov(b,c,d){Bp({node:b},pv,qv,[c],d)}function rv(b,c,d){var e={node:b};c.La()&&b.setAttribute("id",c.La());b=c.P();var f=c.Ob();if(f&&(f=f.call(c,0))&&0<f.length){var g=f[0];this.j&&(b.Style=f[0]);(f=g.c)&&(b.name=f.b)}f=sv[d[d.length-1].node.namespaceURI];b=zp(b,f);Bp(e,tv,yp,b,d,f);b=d[0];(c=c.W())&&(c=ds(c,!0,b));Bp(e,tv,uv,[c],d)}function vv(b,c,d){var e=c.ja();b={node:b};b.layout=c.b;b.stride=c.sa();Bp(b,wv,xv,[e],d)}
function yv(b,c,d){c=c.de();var e=c.shift();b={node:b};Bp(b,zv,Av,c,d);Bp(b,zv,Bv,[e],d)}function Cv(b,c){Qs(b,c*c)}
var Dv=P(nu,["Document","Placemark"]),Gv=P(nu,{Document:N(function(b,c,d){Bp({node:b},Ev,Fv,c,d)}),Placemark:N(rv)}),Ev=P(nu,{Placemark:N(rv)}),Hv={Point:"Point",LineString:"LineString",LinearRing:"LinearRing",Polygon:"Polygon",MultiPoint:"MultiGeometry",MultiLineString:"MultiGeometry",MultiPolygon:"MultiGeometry"},Iv=P(nu,["href"],P(mu,["x","y","w","h"])),Jv=P(nu,{href:N(Ps)},P(mu,{x:N(Qs),y:N(Qs),w:N(Qs),h:N(Qs)})),Kv=P(nu,["scale","heading","Icon","hotSpot"]),Mv=P(nu,{Icon:N(function(b,c,d){b=
{node:b};var e=Iv[d[d.length-1].node.namespaceURI],f=zp(c,e);Bp(b,Jv,yp,f,d,e);e=Iv[mu[0]];f=zp(c,e);Bp(b,Jv,Lv,f,d,e)}),heading:N(Qs),hotSpot:N(function(b,c){b.setAttribute("x",c.x);b.setAttribute("y",c.y);b.setAttribute("xunits",c.gg);b.setAttribute("yunits",c.hg)}),scale:N(Cv)}),Nv=P(nu,["color","scale"]),Ov=P(nu,{color:N(nv),scale:N(Cv)}),Pv=P(nu,["color","width"]),Qv=P(nu,{color:N(nv),width:N(Qs)}),pv=P(nu,{LinearRing:N(vv)}),Rv=P(nu,{LineString:N(vv),Point:N(vv),Polygon:N(yv)}),sv=P(nu,"name open visibility address phoneNumber description styleUrl Style".split(" ")),
tv=P(nu,{MultiGeometry:N(function(b,c,d){b={node:b};var e=c.V(),f,g;"MultiPoint"==e?(f=c.we(),g=Sv):"MultiLineString"==e?(f=c.rd(),g=Tv):"MultiPolygon"==e&&(f=c.ee(),g=Uv);Bp(b,Rv,g,f,d)}),LineString:N(vv),LinearRing:N(vv),Point:N(vv),Polygon:N(yv),Style:N(function(b,c,d){b={node:b};var e={},f=c.j,g=c.f,h=c.b;c=c.c;h instanceof Fk&&(e.IconStyle=h);c&&(e.LabelStyle=c);g&&(e.LineStyle=g);f&&(e.PolyStyle=f);c=Vv[d[d.length-1].node.namespaceURI];e=zp(e,c);Bp(b,Wv,yp,e,d,c)}),address:N(Ps),description:N(Ps),
name:N(Ps),open:N(Os),phoneNumber:N(Ps),styleUrl:N(Ps),visibility:N(Os)}),wv=P(nu,{coordinates:N(function(b,c,d){d=d[d.length-1];var e=d.layout;d=d.stride;var f;"XY"==e||"XYM"==e?f=2:("XYZ"==e||"XYZM"==e)&&(f=3);var g,h=c.length,k="";if(0<h){k+=c[0];for(e=1;e<f;++e)k+=","+c[e];for(g=d;g<h;g+=d)for(k+=" "+c[g],e=1;e<f;++e)k+=","+c[g+e]}Ps(b,k)})}),zv=P(nu,{outerBoundaryIs:N(ov),innerBoundaryIs:N(ov)}),Xv=P(nu,{color:N(nv)}),Vv=P(nu,["IconStyle","LabelStyle","LineStyle","PolyStyle"]),Wv=P(nu,{IconStyle:N(function(b,
c,d){b={node:b};var e={},f=c.Bb(),g=c.qd(),h={href:c.a.j};if(f){h.w=f[0];h.h=f[1];var k=c.Xb(),m=c.Ca();m&&g&&0!==m[0]&&m[1]!==f[1]&&(h.x=m[0],h.y=g[1]-(m[1]+f[1]));k&&0!==k[0]&&k[1]!==f[1]&&(e.hotSpot={x:k[0],gg:"pixels",y:f[1]-k[1],hg:"pixels"})}e.Icon=h;f=c.i;1!==f&&(e.scale=f);c=c.u;0!==c&&(e.heading=c);c=Kv[d[d.length-1].node.namespaceURI];e=zp(e,c);Bp(b,Mv,yp,e,d,c)}),LabelStyle:N(function(b,c,d){b={node:b};var e={},f=c.a;f&&(e.color=f.a);(c=c.c)&&1!==c&&(e.scale=c);c=Nv[d[d.length-1].node.namespaceURI];
e=zp(e,c);Bp(b,Ov,yp,e,d,c)}),LineStyle:N(function(b,c,d){b={node:b};var e=Pv[d[d.length-1].node.namespaceURI];c=zp({color:c.a,width:c.c},e);Bp(b,Qv,yp,c,d,e)}),PolyStyle:N(function(b,c,d){Bp({node:b},Xv,Yv,[c.a],d)})});function Lv(b,c,d){return Wo(mu[0],"gx:"+d)}function Fv(b,c){return Wo(c[c.length-1].node.namespaceURI,"Placemark")}function uv(b,c){if(b)return Wo(c[c.length-1].node.namespaceURI,Hv[b.V()])}
var Yv=wp("color"),xv=wp("coordinates"),Av=wp("innerBoundaryIs"),Sv=wp("Point"),Tv=wp("LineString"),qv=wp("LinearRing"),Uv=wp("Polygon"),Bv=wp("outerBoundaryIs");
ku.prototype.c=function(b,c){c=cs(this,c);var d=Wo(nu[4],"kml");pp(d,"http://www.w3.org/2000/xmlns/","xmlns:gx",mu[0]);pp(d,"http://www.w3.org/2000/xmlns/","xmlns:xsi","http://www.w3.org/2001/XMLSchema-instance");pp(d,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation","http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");var e={node:d},f={};1<b.length?f.Document=b:1==b.length&&(f.Placemark=b[0]);var g=Dv[d.namespaceURI],f=zp(f,g);Bp(e,Gv,yp,f,[c],g,this);
return d};(function(){var b={},c={ka:b};(function(d){if("object"===typeof b&&"undefined"!==typeof c)c.ka=d();else{var e;"undefined"!==typeof window?e=window:"undefined"!==typeof global?e=global:"undefined"!==typeof self?e=self:e=this;e.Hp=d()}})(function(){return function e(b,c,h){function k(n,q){if(!c[n]){if(!b[n]){var r="function"==typeof require&&require;if(!q&&r)return r(n,!0);if(m)return m(n,!0);r=Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r;}r=c[n]={ka:{}};b[n][0].call(r.ka,function(c){var e=
b[n][1][c];return k(e?e:c)},r,r.ka,e,b,c,h)}return c[n].ka}for(var m="function"==typeof require&&require,n=0;n<h.length;n++)k(h[n]);return k}({1:[function(b,c){function g(b){var c;b&&b.length&&(c=b,b=c.length);b=new Uint8Array(b||0);c&&b.set(c);b.Rh=m.Rh;b.fg=m.fg;b.Jh=m.Jh;b.ui=m.ui;b.Rf=m.Rf;b.ti=m.ti;b.Lf=m.Lf;b.pi=m.pi;b.toString=m.toString;b.write=m.write;b.slice=m.slice;b.wg=m.wg;b.dj=!0;return b}function h(b){for(var c=b.length,e=[],f=0,g,h;f<c;f++){g=b.charCodeAt(f);if(55295<g&&57344>g)if(h)if(56320>
g){e.push(239,191,189);h=g;continue}else g=h-55296<<10|g-56320|65536,h=null;else{56319<g||f+1===c?e.push(239,191,189):h=g;continue}else h&&(e.push(239,191,189),h=null);128>g?e.push(g):2048>g?e.push(g>>6|192,g&63|128):65536>g?e.push(g>>12|224,g>>6&63|128,g&63|128):e.push(g>>18|240,g>>12&63|128,g>>6&63|128,g&63|128)}return e}c.ka=g;var k=b("ieee754"),m,n,p;m={Rh:function(b){return(this[b]|this[b+1]<<8|this[b+2]<<16)+16777216*this[b+3]},fg:function(b,c){this[c]=b;this[c+1]=b>>>8;this[c+2]=b>>>16;this[c+
3]=b>>>24},Jh:function(b){return(this[b]|this[b+1]<<8|this[b+2]<<16)+(this[b+3]<<24)},Rf:function(b){return k.read(this,b,!0,23,4)},Lf:function(b){return k.read(this,b,!0,52,8)},ti:function(b,c){return k.write(this,b,c,!0,23,4)},pi:function(b,c){return k.write(this,b,c,!0,52,8)},toString:function(b,c,e){var f=b="";e=Math.min(this.length,e||this.length);for(c=c||0;c<e;c++){var g=this[c];127>=g?(b+=decodeURIComponent(f)+String.fromCharCode(g),f=""):f+="%"+g.toString(16)}return b+=decodeURIComponent(f)},
write:function(b,c){for(var e=b===n?p:h(b),f=0;f<e.length;f++)this[c+f]=e[f]},slice:function(b,c){return this.subarray(b,c)},wg:function(b,c){c=c||0;for(var e=0;e<this.length;e++)b[c+e]=this[e]}};m.ui=m.fg;g.byteLength=function(b){n=b;p=h(b);return p.length};g.isBuffer=function(b){return!(!b||!b.dj)}},{ieee754:3}],2:[function(b,c){(function(g){function h(b){this.Eb=k.isBuffer(b)?b:new k(b||0);this.da=0;this.length=this.Eb.length}c.ka=h;var k=g.pp||b("./buffer");h.f=0;h.b=1;h.a=2;h.c=5;var m=Math.pow(2,
63);h.prototype={Pf:function(b,c,e){for(e=e||this.length;this.da<e;){var f=this.za(),g=this.da;b(f>>3,c,this);this.da===g&&this.bp(f)}return c},so:function(){var b=this.Eb.Rf(this.da);this.da+=4;return b},oo:function(){var b=this.Eb.Lf(this.da);this.da+=8;return b},za:function(){var b=this.Eb,c,e,f,g,h;c=b[this.da++];if(128>c)return c;c=c&127;f=b[this.da++];if(128>f)return c|f<<7;f=(f&127)<<7;g=b[this.da++];if(128>g)return c|f|g<<14;g=(g&127)<<14;h=b[this.da++];if(128>h)return c|f|g|h<<21;e=b[this.da++];
c=(c|f|g|(h&127)<<21)+268435456*(e&127);if(128>e)return c;e=b[this.da++];c+=34359738368*(e&127);if(128>e)return c;e=b[this.da++];c+=4398046511104*(e&127);if(128>e)return c;e=b[this.da++];c+=562949953421312*(e&127);if(128>e)return c;e=b[this.da++];c+=72057594037927936*(e&127);if(128>e)return c;e=b[this.da++];c+=0x7fffffffffffffff*(e&127);if(128>e)return c;throw Error("Expected varint not more than 10 bytes");},Do:function(){var b=this.da,c=this.za();if(c<m)return c;for(var e=this.da-2;255===this.Eb[e];)e--;
e<b&&(e=b);for(var f=c=0;f<e-b+1;f++)var g=~this.Eb[b+f]&127,c=c+(4>f?g<<7*f:g*Math.pow(2,7*f));return-c-1},Id:function(){var b=this.za();return 1===b%2?(b+1)/-2:b/2},mo:function(){return Boolean(this.za())},Uf:function(){var b=this.za()+this.da,c=this.Eb.toString("utf8",this.da,b);this.da=b;return c},bp:function(b){b=b&7;if(b===h.f)for(;127<this.Eb[this.da++];);else if(b===h.a)this.da=this.za()+this.da;else if(b===h.c)this.da+=4;else if(b===h.b)this.da+=8;else throw Error("Unimplemented type: "+
b);}}}).call(this,"undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"./buffer":1}],3:[function(b,c,g){g.read=function(b,c,e,f,g){var q;q=8*g-f-1;var r=(1<<q)-1,t=r>>1,x=-7;g=e?g-1:0;var z=e?-1:1,B=b[c+g];g+=z;e=B&(1<<-x)-1;B>>=-x;for(x+=q;0<x;e=256*e+b[c+g],g+=z,x-=8);q=e&(1<<-x)-1;e>>=-x;for(x+=f;0<x;q=256*q+b[c+g],g+=z,x-=8);if(0===e)e=1-t;else{if(e===r)return q?NaN:Infinity*(B?-1:1);q+=Math.pow(2,f);e=e-t}return(B?-1:1)*q*Math.pow(2,e-f)};
g.write=function(b,c,e,f,g,q){var r,t=8*q-g-1,x=(1<<t)-1,z=x>>1,B=23===g?Math.pow(2,-24)-Math.pow(2,-77):0;q=f?0:q-1;var A=f?1:-1,v=0>c||0===c&&0>1/c?1:0;c=Math.abs(c);isNaN(c)||Infinity===c?(c=isNaN(c)?1:0,f=x):(f=Math.floor(Math.log(c)/Math.LN2),1>c*(r=Math.pow(2,-f))&&(f--,r*=2),c=1<=f+z?c+B/r:c+B*Math.pow(2,1-z),2<=c*r&&(f++,r/=2),f+z>=x?(c=0,f=x):1<=f+z?(c=(c*r-1)*Math.pow(2,g),f+=z):(c=c*Math.pow(2,z-1)*Math.pow(2,g),f=0));for(;8<=g;b[e+q]=c&255,q+=A,c/=256,g-=8);f=f<<g|c;for(t+=g;0<t;b[e+q]=
    f & 255, q += A, f /= 256, t -= 8);
  b[e + q - A] |= 128 * v
}
  }, {}]
  }, {}, [2])(2)
  });
    Hp = c.ka
  })();
  (function () {
    var b = {}, c = {ka: b};
    (function (d) {
      if ("object" === typeof b && "undefined" !== typeof c)c.ka = d(); else {
        var e;
        "undefined" !== typeof window ? e = window : "undefined" !== typeof global ? e = global : "undefined" !== typeof self ? e = self : e = this;
        e.Kp = d()
      }
    })(function () {
      return function e(b, c, h) {
        function k(n, q) {
          if (!c[n]) {
            if (!b[n]) {
              var r = "function" == typeof require && require;
              if (!q && r)return r(n, !0);
              if (m)return m(n, !0);
              r = Error("Cannot find module '" + n + "'");
              throw r.code = "MODULE_NOT_FOUND", r;
            }
            r = c[n] = {ka: {}};
            b[n][0].call(r.ka, function (c) {
              var e =
b[n][1][c];return k(e?e:c)},r,r.ka,e,b,c,h)}return c[n].ka}for(var m="function"==typeof require&&require,n=0;n<h.length;n++)k(h[n]);return k}({1:[function(b,c){c.ka.Vi=b("./lib/vectortile.js");c.ka.Cp=b("./lib/vectortilefeature.js");c.ka.Dp=b("./lib/vectortilelayer.js")},{"./lib/vectortile.js":2,"./lib/vectortilefeature.js":3,"./lib/vectortilelayer.js":4}],2:[function(b,c){function g(b,c,e){3===b&&(b=new h(e,e.za()+e.da),b.length&&(c[b.name]=b))}var h=b("./vectortilelayer");c.ka=function(b,c){this.layers=
b.Pf(g,{},c)}},{"./vectortilelayer":4}],3:[function(b,c){function g(b,c,e,f,g){this.properties={};this.extent=e;this.type=0;this.lc=b;this.$e=-1;this.Sd=f;this.Ud=g;b.Pf(h,this,c)}function h(b,c,e){if(1==b)c.Fp=e.za();else if(2==b)for(b=e.za()+e.da;e.da<b;){var f=c.Sd[e.za()],g=c.Ud[e.za()];c.properties[f]=g}else 3==b?c.type=e.za():4==b&&(c.$e=e.da)}var k=b("point-geometry");c.ka=g;g.types=["Unknown","Point","LineString","Polygon"];g.prototype.Vg=function(){var b=this.lc;b.da=this.$e;for(var c=b.za()+
b.da,e=1,f=0,g=0,h=0,x=[],z;b.da<c;)if(f||(f=b.za(),e=f&7,f=f>>3),f--,1===e||2===e)g+=b.Id(),h+=b.Id(),1===e&&(z&&x.push(z),z=[]),z.push(new k(g,h));else if(7===e)z&&z.push(z[0].clone());else throw Error("unknown command "+e);z&&x.push(z);return x};g.prototype.bbox=function(){var b=this.lc;b.da=this.$e;for(var c=b.za()+b.da,e=1,f=0,g=0,h=0,k=Infinity,z=-Infinity,B=Infinity,A=-Infinity;b.da<c;)if(f||(f=b.za(),e=f&7,f=f>>3),f--,1===e||2===e)g+=b.Id(),h+=b.Id(),g<k&&(k=g),g>z&&(z=g),h<B&&(B=h),h>A&&
(A=h);else if(7!==e)throw Error("unknown command "+e);return[k,B,z,A]}},{"point-geometry":5}],4:[function(b,c){function g(b,c){this.version=1;this.name=null;this.extent=4096;this.length=0;this.lc=b;this.Sd=[];this.Ud=[];this.Rd=[];b.Pf(h,this,c);this.length=this.Rd.length}function h(b,c,e){15===b?c.version=e.za():1===b?c.name=e.Uf():5===b?c.extent=e.za():2===b?c.Rd.push(e.da):3===b?c.Sd.push(e.Uf()):4===b&&c.Ud.push(k(e))}function k(b){for(var c=null,e=b.za()+b.da;b.da<e;)c=b.za()>>3,c=1===c?b.Uf():
2===c?b.so():3===c?b.oo():4===c?b.Do():5===c?b.za():6===c?b.Id():7===c?b.mo():null;return c}var m=b("./vectortilefeature.js");c.ka=g;g.prototype.feature=function(b){if(0>b||b>=this.Rd.length)throw Error("feature index out of bounds");this.lc.da=this.Rd[b];b=this.lc.za()+this.lc.da;return new m(this.lc,b,this.extent,this.Sd,this.Ud)}},{"./vectortilefeature.js":3}],5:[function(b,c){function g(b,c){this.x=b;this.y=c}c.ka=g;g.prototype={clone:function(){return new g(this.x,this.y)},add:function(b){return this.clone().Wi(b)},
rotate:function(b){return this.clone().gj(b)},round:function(){return this.clone().hj()},angle:function(){return Math.atan2(this.y,this.x)},Wi:function(b){this.x+=b.x;this.y+=b.y;return this},gj:function(b){var c=Math.cos(b);b=Math.sin(b);var e=b*this.x+c*this.y;this.x=c*this.x-b*this.y;this.y=e;return this},hj:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this}};g.a=function(b){return b instanceof g?b:Array.isArray(b)?new g(b[0],b[1]):b}},{}]},{},[1])(1)});Ip=c.ka})();function Zv(b){this.defaultDataProjection=null;b=b?b:{};this.defaultDataProjection=new Fe({code:"EPSG:3857",units:"tile-pixels"});this.a=b.featureClass?b.featureClass:dn;this.f=b.geometryName?b.geometryName:"geometry";this.c=b.layerName?b.layerName:"layer";this.b=b.layers?b.layers:null}y(Zv,as);Zv.prototype.V=function(){return"arraybuffer"};
Zv.prototype.Ba=function(b,c){var d=this.b,e=new Hp(b),e=new Ip.Vi(e),f=[],g=this.a,h,k,m;for(m in e.layers)if(!d||-1!=d.indexOf(m)){h=e.layers[m];for(var n=0,p=h.length;n<p;++n){if(g===dn){var q=h.feature(n);k=m;var r=q.Vg(),t=[],x=[];$v(r,x,t);var z=q.type,B=void 0;1===z?B=1===r.length?"Point":"MultiPoint":2===z?B=1===r.length?"LineString":"MultiLineString":3===z&&(B="Polygon");q=q.properties;q[this.c]=k;k=new this.a(B,x,t,q)}else{q=h.feature(n);B=m;x=c;k=new this.a;t=q.properties;t[this.c]=B;B=
q.type;if(0===B)B=null;else{q=q.Vg();r=[];z=[];$v(q,z,r);var A=void 0;1===B?A=1===q.length?new D(null):new ks(null):2===B?1===q.length?A=new T(null):A=new U(null):3===B&&(A=new E(null));A.ba("XY",z,r);B=A}(x=ds(B,!1,cs(this,x)))&&(t[this.f]=x);k.I(t);k.vc(this.f)}f.push(k)}}return f};Zv.prototype.Ja=function(){return this.defaultDataProjection};Zv.prototype.g=function(b){this.b=b};
function $v(b,c,d){for(var e=0,f,g,h=0,k=b.length;h<k;++h){f=b[h];for(var m=0,n=f.length;m<n;++m)g=f[m],c.push(g.x,g.y);e+=2*m;d.push(e)}};function aw(){this.defaultDataProjection=null;this.defaultDataProjection=He("EPSG:4326")}y(aw,Ds);function bw(b,c){c[c.length-1].Ld[b.getAttribute("k")]=b.getAttribute("v")}
var cw=[null],dw=P(cw,{nd:function(b,c){c[c.length-1].Nc.push(b.getAttribute("ref"))},tag:bw}),fw=P(cw,{node:function(b,c){var d=c[0],e=c[c.length-1],f=b.getAttribute("id"),g=[parseFloat(b.getAttribute("lon")),parseFloat(b.getAttribute("lat"))];e.Yg[f]=g;var h=Q({Ld:{}},ew,b,c);Sb(h.Ld)||(g=new D(g),ds(g,!1,d),d=new Bn(g),d.ic(f),d.I(h.Ld),e.features.push(d))},way:function(b,c){for(var d=c[0],e=b.getAttribute("id"),f=Q({Nc:[],Ld:{}},dw,b,c),g=c[c.length-1],h=[],k=0,m=f.Nc.length;k<m;k++)nb(h,g.Yg[f.Nc[k]]);
f.Nc[0]==f.Nc[f.Nc.length-1]?(k=new E(null),k.ba("XY",h,[h.length])):(k=new T(null),k.ba("XY",h));ds(k,!1,d);d=new Bn(k);d.ic(e);d.I(f.Ld);g.features.push(d)}}),ew=P(cw,{tag:bw});aw.prototype.hc=function(b,c){var d=bs(this,b,c);return"osm"==b.localName&&(d=Q({Yg:{},features:[]},fw,b,[d]),d.features)?d.features:[]};function gw(b){return b.getAttributeNS("http://www.w3.org/1999/xlink","href")};function hw(){}hw.prototype.read=function(b){return dp(b)?this.c(b):gp(b)?this.a(b):ia(b)?(b=qp(b),this.c(b)):null};function iw(){}y(iw,hw);iw.prototype.c=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};iw.prototype.a=function(b){return(b=Q({},jw,b,[]))?b:null};
var kw=[null,"http://www.opengis.net/ows/1.1"],jw=P(kw,{ServiceIdentification:M(function(b,c){return Q({},lw,b,c)}),ServiceProvider:M(function(b,c){return Q({},mw,b,c)}),OperationsMetadata:M(function(b,c){return Q({},nw,b,c)})}),ow=P(kw,{DeliveryPoint:M(W),City:M(W),AdministrativeArea:M(W),PostalCode:M(W),Country:M(W),ElectronicMailAddress:M(W)}),pw=P(kw,{Value:up(function(b){return W(b)})}),qw=P(kw,{AllowedValues:M(function(b,c){return Q({},pw,b,c)})}),sw=P(kw,{Phone:M(function(b,c){return Q({},
rw,b,c)}),Address:M(function(b,c){return Q({},ow,b,c)})}),uw=P(kw,{HTTP:M(function(b,c){return Q({},tw,b,c)})}),tw=P(kw,{Get:up(function(b,c){var d=gw(b);return d?Q({href:d},vw,b,c):void 0}),Post:void 0}),ww=P(kw,{DCP:M(function(b,c){return Q({},uw,b,c)})}),nw=P(kw,{Operation:function(b,c){var d=b.getAttribute("name"),e=Q({},ww,b,c);e&&(c[c.length-1][d]=e)}}),rw=P(kw,{Voice:M(W),Facsimile:M(W)}),vw=P(kw,{Constraint:up(function(b,c){var d=b.getAttribute("name");return d?Q({name:d},qw,b,c):void 0})}),
xw=P(kw,{IndividualName:M(W),PositionName:M(W),ContactInfo:M(function(b,c){return Q({},sw,b,c)})}),lw=P(kw,{Title:M(W),ServiceTypeVersion:M(W),ServiceType:M(W)}),mw=P(kw,{ProviderName:M(W),ProviderSite:M(gw),ServiceContact:M(function(b,c){return Q({},xw,b,c)})});function yw(b,c,d,e){var f;void 0!==e?f=e:f=[];e=0;var g,h;for(g=0;g<c;)for(h=b[g++],f[e++]=b[g++],f[e++]=h,h=2;h<d;++h)f[e++]=b[g++];f.length=e};function zw(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=He("EPSG:4326");this.a=b.factor?b.factor:1E5;this.c=b.geometryLayout?b.geometryLayout:"XY"}y(zw,Lt);function Aw(b,c,d){var e,f=Array(c);for(e=0;e<c;++e)f[e]=0;var g,h;g=0;for(h=b.length;g<h;)for(e=0;e<c;++e,++g){var k=b[g],m=k-f[e];f[e]=k;b[g]=m}return Bw(b,d?d:1E5)}
function Cw(b,c,d){var e,f=Array(c);for(e=0;e<c;++e)f[e]=0;b=Dw(b,d?d:1E5);var g;d=0;for(g=b.length;d<g;)for(e=0;e<c;++e,++d)f[e]+=b[d],b[d]=f[e];return b}function Bw(b,c){var d=c?c:1E5,e,f;e=0;for(f=b.length;e<f;++e)b[e]=Math.round(b[e]*d);d=0;for(e=b.length;d<e;++d)f=b[d],b[d]=0>f?~(f<<1):f<<1;d="";e=0;for(f=b.length;e<f;++e){for(var g=b[e],h=void 0,k="";32<=g;)h=(32|g&31)+63,k+=String.fromCharCode(h),g>>=5;h=g+63;k+=String.fromCharCode(h);d+=k}return d}
function Dw(b,c){var d=c?c:1E5,e=[],f=0,g=0,h,k;h=0;for(k=b.length;h<k;++h){var m=b.charCodeAt(h)-63,f=f|(m&31)<<g;32>m?(e.push(f),g=f=0):g+=5}f=0;for(g=e.length;f<g;++f)h=e[f],e[f]=h&1?~(h>>1):h>>1;f=0;for(g=e.length;f<g;++f)e[f]/=d;return e}l=zw.prototype;l.Fd=function(b,c){var d=this.Hd(b,c);return new Bn(d)};l.Of=function(b,c){return[this.Fd(b,c)]};l.Hd=function(b,c){var d=gf(this.c),e=Cw(b,d,this.a);yw(e,e.length,d,e);d=uf(e,0,e.length,d);return ds(new T(d,this.c),!1,cs(this,c))};
l.Se=function(b,c){var d=b.W();return d?this.Nd(d,c):""};l.si=function(b,c){return this.Se(b[0],c)};l.Nd=function(b,c){b=ds(b,!0,cs(this,c));var d=b.ja(),e=b.sa();yw(d,d.length,e,d);return Aw(d,e,this.a)};function Ew(b){b=b?b:{};this.defaultDataProjection=null;this.defaultDataProjection=He(b.defaultDataProjection?b.defaultDataProjection:"EPSG:4326")}y(Ew,es);function Fw(b,c){var d=[],e,f,g,h;g=0;for(h=b.length;g<h;++g)e=b[g],0<g&&d.pop(),0<=e?f=c[e]:f=c[~e].slice().reverse(),d.push.apply(d,f);e=0;for(f=d.length;e<f;++e)d[e]=d[e].slice();return d}function Gw(b,c,d,e,f){b=b.geometries;var g=[],h,k;h=0;for(k=b.length;h<k;++h)g[h]=Hw(b[h],c,d,e,f);return g}
function Hw(b,c,d,e,f){var g=b.type,h=Iw[g];c="Point"===g||"MultiPoint"===g?h(b,d,e):h(b,c);d=new Bn;d.Na(ds(c,!1,f));void 0!==b.id&&d.ic(b.id);b.properties&&d.I(b.properties);return d}
Ew.prototype.Nf=function(b,c){if("Topology"==b.type){var d,e=null,f=null;b.transform&&(d=b.transform,e=d.scale,f=d.translate);var g=b.arcs;if(d){d=e;var h=f,k,m;k=0;for(m=g.length;k<m;++k)for(var n=g[k],p=d,q=h,r=0,t=0,x=void 0,z=void 0,B=void 0,z=0,B=n.length;z<B;++z)x=n[z],r+=x[0],t+=x[1],x[0]=r,x[1]=t,Jw(x,p,q)}d=[];h=Nb(b.objects);k=0;for(m=h.length;k<m;++k)"GeometryCollection"===h[k].type?(n=h[k],d.push.apply(d,Gw(n,g,e,f,c))):(n=h[k],d.push(Hw(n,g,e,f,c)));return d}return[]};
function Jw(b,c,d){b[0]=b[0]*c[0]+d[0];b[1]=b[1]*c[1]+d[1]}Ew.prototype.Ja=function(){return this.defaultDataProjection};
var Iw={Point:function(b,c,d){b=b.coordinates;c&&d&&Jw(b,c,d);return new D(b)},LineString:function(b,c){var d=Fw(b.arcs,c);return new T(d)},Polygon:function(b,c){var d=[],e,f;e=0;for(f=b.arcs.length;e<f;++e)d[e]=Fw(b.arcs[e],c);return new E(d)},MultiPoint:function(b,c,d){b=b.coordinates;var e,f;if(c&&d)for(e=0,f=b.length;e<f;++e)Jw(b[e],c,d);return new ks(b)},MultiLineString:function(b,c){var d=[],e,f;e=0;for(f=b.arcs.length;e<f;++e)d[e]=Fw(b.arcs[e],c);return new U(d)},MultiPolygon:function(b,c){var d=
[],e,f,g,h,k,m;k=0;for(m=b.arcs.length;k<m;++k){e=b.arcs[k];f=[];g=0;for(h=e.length;g<h;++g)f[g]=Fw(e[g],c);d[k]=f}return new V(d)}};function Kw(b){b=b?b:{};this.g=b.featureType;this.b=b.featureNS;this.a=b.gmlFormat?b.gmlFormat:new Ts;this.f=b.schemaLocation?b.schemaLocation:"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";this.defaultDataProjection=null}y(Kw,Ds);Kw.prototype.hc=function(b,c){var d={featureType:this.g,featureNS:this.b};Zb(d,bs(this,b,c?c:{}));d=[d];this.a.a["http://www.opengis.net/gml"].featureMember=sp(Gs.prototype.Gd);(d=Q([],this.a.a,b,d,this.a))||(d=[]);return d};
Kw.prototype.i=function(b){if(dp(b))return Lw(b);if(gp(b))return Q({},Mw,b,[]);if(ia(b))return b=qp(b),Lw(b)};Kw.prototype.j=function(b){if(dp(b))return Nw(this,b);if(gp(b))return Ow(this,b);if(ia(b))return b=qp(b),Nw(this,b)};function Nw(b,c){for(var d=c.firstChild;d;d=d.nextSibling)if(1==d.nodeType)return Ow(b,d)}var Pw={"http://www.opengis.net/gml":{boundedBy:M(Gs.prototype.Ke,"bounds")}};
function Ow(b,c){var d={},e=Ns(c.getAttribute("numberOfFeatures"));d.numberOfFeatures=e;return Q(d,Pw,c,[],b.a)}
var Qw={"http://www.opengis.net/wfs":{totalInserted:M(Ms),totalUpdated:M(Ms),totalDeleted:M(Ms)}},Rw={"http://www.opengis.net/ogc":{FeatureId:sp(function(b){return b.getAttribute("fid")})}},Sw={"http://www.opengis.net/wfs":{Feature:function(b,c){Ap(Rw,b,c)}}},Mw={"http://www.opengis.net/wfs":{TransactionSummary:M(function(b,c){return Q({},Qw,b,c)},"transactionSummary"),InsertResults:M(function(b,c){return Q([],Sw,b,c)},"insertIds")}};
function Lw(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return Q({},Mw,b,[])}var Tw={"http://www.opengis.net/wfs":{PropertyName:N(Ps)}};function Uw(b,c){var d=Wo("http://www.opengis.net/ogc","Filter"),e=Wo("http://www.opengis.net/ogc","FeatureId");d.appendChild(e);e.setAttribute("fid",c);b.appendChild(d)}
var Vw={"http://www.opengis.net/wfs":{Insert:N(function(b,c,d){var e=d[d.length-1],e=Wo(e.featureNS,e.featureType);b.appendChild(e);Ts.prototype.ri(e,c,d)}),Update:N(function(b,c,d){var e=d[d.length-1],f=e.featureType,g=e.featurePrefix,g=g?g:"feature",h=e.featureNS;b.setAttribute("typeName",g+":"+f);pp(b,"http://www.w3.org/2000/xmlns/","xmlns:"+g,h);if(f=c.La()){for(var g=c.O(),h=[],k=0,m=g.length;k<m;k++){var n=c.get(g[k]);void 0!==n&&h.push({name:g[k],value:n})}Bp({node:b,srsName:e.srsName},Vw,
wp("Property"),h,d);Uw(b,f)}}),Delete:N(function(b,c,d){var e=d[d.length-1];d=e.featureType;var f=e.featurePrefix,f=f?f:"feature",e=e.featureNS;b.setAttribute("typeName",f+":"+d);pp(b,"http://www.w3.org/2000/xmlns/","xmlns:"+f,e);(c=c.La())&&Uw(b,c)}),Property:N(function(b,c,d){var e=Wo("http://www.opengis.net/wfs","Name");b.appendChild(e);Ps(e,c.name);void 0!==c.value&&null!==c.value&&(e=Wo("http://www.opengis.net/wfs","Value"),b.appendChild(e),c.value instanceof df?Ts.prototype.Ue(e,c.value,d):
Ps(e,c.value))}),Native:N(function(b,c){c.lp&&b.setAttribute("vendorId",c.lp);void 0!==c.Oo&&b.setAttribute("safeToIgnore",c.Oo);void 0!==c.value&&Ps(b,c.value)})}},Ww={"http://www.opengis.net/wfs":{Query:N(function(b,c,d){var e=d[d.length-1],f=e.featurePrefix,g=e.featureNS,h=e.propertyNames,k=e.srsName;b.setAttribute("typeName",(f?f+":":"")+c);k&&b.setAttribute("srsName",k);g&&pp(b,"http://www.w3.org/2000/xmlns/","xmlns:"+f,g);c=Wb(e);c.node=b;Bp(c,Tw,wp("PropertyName"),h,d);if(e=e.bbox)h=Wo("http://www.opengis.net/ogc",
"Filter"),c=d[d.length-1].geometryName,f=Wo("http://www.opengis.net/ogc","BBOX"),h.appendChild(f),g=Wo("http://www.opengis.net/ogc","PropertyName"),Ps(g,c),f.appendChild(g),Ts.prototype.Ue(f,e,d),b.appendChild(h)})}};
Kw.prototype.l=function(b){var c=Wo("http://www.opengis.net/wfs","GetFeature");c.setAttribute("service","WFS");c.setAttribute("version","1.1.0");b&&(b.handle&&c.setAttribute("handle",b.handle),b.outputFormat&&c.setAttribute("outputFormat",b.outputFormat),void 0!==b.maxFeatures&&c.setAttribute("maxFeatures",b.maxFeatures),b.resultType&&c.setAttribute("resultType",b.resultType),void 0!==b.startIndex&&c.setAttribute("startIndex",b.startIndex),void 0!==b.count&&c.setAttribute("count",b.count));pp(c,"http://www.w3.org/2001/XMLSchema-instance",
"xsi:schemaLocation",this.f);var d=b.featureTypes;b=[{node:c,srsName:b.srsName,featureNS:b.featureNS?b.featureNS:this.b,featurePrefix:b.featurePrefix,geometryName:b.geometryName,bbox:b.bbox,propertyNames:b.propertyNames?b.propertyNames:[]}];var e=Wb(b[b.length-1]);e.node=c;Bp(e,Ww,wp("Query"),d,b);return c};
Kw.prototype.v=function(b,c,d,e){var f=[],g=Wo("http://www.opengis.net/wfs","Transaction");g.setAttribute("service","WFS");g.setAttribute("version","1.1.0");var h,k;e&&(h=e.gmlOptions?e.gmlOptions:{},e.handle&&g.setAttribute("handle",e.handle));pp(g,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation",this.f);b&&(k={node:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Zb(k,h),Bp(k,Vw,wp("Insert"),b,f));c&&(k={node:g,featureNS:e.featureNS,featureType:e.featureType,
featurePrefix:e.featurePrefix},Zb(k,h),Bp(k,Vw,wp("Update"),c,f));d&&Bp({node:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Vw,wp("Delete"),d,f);e.nativeElements&&Bp({node:g,featureNS:e.featureNS,featureType:e.featureType,featurePrefix:e.featurePrefix},Vw,wp("Native"),e.nativeElements,f);return g};Kw.prototype.Tf=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.Ne(b);return null};
Kw.prototype.Ne=function(b){if(b.firstElementChild&&b.firstElementChild.firstElementChild)for(b=b.firstElementChild.firstElementChild,b=b.firstElementChild;b;b=b.nextElementSibling)if(0!==b.childNodes.length&&(1!==b.childNodes.length||3!==b.firstChild.nodeType)){var c=[{}];this.a.Ke(b,c);return He(c.pop().srsName)}return null};function Xw(b){b=b?b:{};this.defaultDataProjection=null;this.a=void 0!==b.splitCollection?b.splitCollection:!1}y(Xw,Lt);function Yw(b){b=b.Z();return 0===b.length?"":b[0]+" "+b[1]}function Zw(b){b=b.Z();for(var c=[],d=0,e=b.length;d<e;++d)c.push(b[d][0]+" "+b[d][1]);return c.join(",")}function $w(b){var c=[];b=b.de();for(var d=0,e=b.length;d<e;++d)c.push("("+Zw(b[d])+")");return c.join(",")}function ax(b){var c=b.V();b=(0,bx[c])(b);c=c.toUpperCase();return 0===b.length?c+" EMPTY":c+"("+b+")"}
var bx={Point:Yw,LineString:Zw,Polygon:$w,MultiPoint:function(b){var c=[];b=b.we();for(var d=0,e=b.length;d<e;++d)c.push("("+Yw(b[d])+")");return c.join(",")},MultiLineString:function(b){var c=[];b=b.rd();for(var d=0,e=b.length;d<e;++d)c.push("("+Zw(b[d])+")");return c.join(",")},MultiPolygon:function(b){var c=[];b=b.ee();for(var d=0,e=b.length;d<e;++d)c.push("("+$w(b[d])+")");return c.join(",")},GeometryCollection:function(b){var c=[];b=b.Hg();for(var d=0,e=b.length;d<e;++d)c.push(ax(b[d]));return c.join(",")}};
l=Xw.prototype;l.Fd=function(b,c){var d=this.Hd(b,c);if(d){var e=new Bn;e.Na(d);return e}return null};l.Of=function(b,c){var d=[],e=this.Hd(b,c);this.a&&"GeometryCollection"==e.V()?d=e.f:d=[e];for(var f=[],g=0,h=d.length;g<h;++g)e=new Bn,e.Na(d[g]),f.push(e);return f};l.Hd=function(b,c){var d;d=new cx(new dx(b));d.a=ex(d.c);return(d=fx(d))?ds(d,!1,c):null};l.Se=function(b,c){var d=b.W();return d?this.Nd(d,c):""};
l.si=function(b,c){if(1==b.length)return this.Se(b[0],c);for(var d=[],e=0,f=b.length;e<f;++e)d.push(b[e].W());d=new us(d);return this.Nd(d,c)};l.Nd=function(b,c){return ax(ds(b,!0,c))};function dx(b){this.c=b;this.a=-1}function gx(b,c){return"0"<=b&&"9">=b||"."==b&&!(void 0!==c&&c)}
function ex(b){var c=b.c.charAt(++b.a),d={position:b.a,value:c};if("("==c)d.type=2;else if(","==c)d.type=5;else if(")"==c)d.type=3;else if(gx(c)||"-"==c){d.type=4;var e,c=b.a,f=!1,g=!1;do{if("."==e)f=!0;else if("e"==e||"E"==e)g=!0;e=b.c.charAt(++b.a)}while(gx(e,f)||!g&&("e"==e||"E"==e)||g&&("-"==e||"+"==e));b=parseFloat(b.c.substring(c,b.a--));d.value=b}else if("a"<=c&&"z">=c||"A"<=c&&"Z">=c){d.type=1;c=b.a;do e=b.c.charAt(++b.a);while("a"<=e&&"z">=e||"A"<=e&&"Z">=e);b=b.c.substring(c,b.a--).toUpperCase();
d.value=b}else{if(" "==c||"\t"==c||"\r"==c||"\n"==c)return ex(b);if(""===c)d.type=6;else throw Error("Unexpected character: "+c);}return d}function cx(b){this.c=b}l=cx.prototype;l.match=function(b){if(b=this.a.type==b)this.a=ex(this.c);return b};
function fx(b){var c=b.a;if(b.match(1)){var d=c.value;if("GEOMETRYCOLLECTION"==d){a:{if(b.match(2)){c=[];do c.push(fx(b));while(b.match(5));if(b.match(3)){b=c;break a}}else if(hx(b)){b=[];break a}throw Error(ix(b));}return new us(b)}var e=jx[d],c=kx[d];if(!e||!c)throw Error("Invalid geometry type: "+d);b=e.call(b);return new c(b)}throw Error(ix(b));}l.If=function(){if(this.match(2)){var b=lx(this);if(this.match(3))return b}else if(hx(this))return null;throw Error(ix(this));};
l.Hf=function(){if(this.match(2)){var b=mx(this);if(this.match(3))return b}else if(hx(this))return[];throw Error(ix(this));};l.Jf=function(){if(this.match(2)){var b=nx(this);if(this.match(3))return b}else if(hx(this))return[];throw Error(ix(this));};l.Zn=function(){if(this.match(2)){var b;if(2==this.a.type)for(b=[this.If()];this.match(5);)b.push(this.If());else b=mx(this);if(this.match(3))return b}else if(hx(this))return[];throw Error(ix(this));};
l.Yn=function(){if(this.match(2)){var b=nx(this);if(this.match(3))return b}else if(hx(this))return[];throw Error(ix(this));};l.$n=function(){if(this.match(2)){for(var b=[this.Jf()];this.match(5);)b.push(this.Jf());if(this.match(3))return b}else if(hx(this))return[];throw Error(ix(this));};function lx(b){for(var c=[],d=0;2>d;++d){var e=b.a;if(b.match(4))c.push(e.value);else break}if(2==c.length)return c;throw Error(ix(b));}function mx(b){for(var c=[lx(b)];b.match(5);)c.push(lx(b));return c}
function nx(b){for(var c=[b.Hf()];b.match(5);)c.push(b.Hf());return c}function hx(b){var c=1==b.a.type&&"EMPTY"==b.a.value;c&&(b.a=ex(b.c));return c}function ix(b){return"Unexpected `"+b.a.value+"` at position "+b.a.position+" in `"+b.c.c+"`"}var kx={POINT:D,LINESTRING:T,POLYGON:E,MULTIPOINT:ks,MULTILINESTRING:U,MULTIPOLYGON:V},jx={POINT:cx.prototype.If,LINESTRING:cx.prototype.Hf,POLYGON:cx.prototype.Jf,MULTIPOINT:cx.prototype.Zn,MULTILINESTRING:cx.prototype.Yn,MULTIPOLYGON:cx.prototype.$n};function ox(){this.version=void 0}y(ox,hw);ox.prototype.c=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};ox.prototype.a=function(b){this.version=b.getAttribute("version").trim();return(b=Q({version:this.version},px,b,[]))?b:null};function qx(b,c){return Q({},rx,b,c)}function sx(b,c){return Q({},tx,b,c)}function ux(b,c){var d=qx(b,c);if(d){var e=[Ns(b.getAttribute("width")),Ns(b.getAttribute("height"))];d.size=e;return d}}
function vx(b,c){return Q([],wx,b,c)}
var xx=[null,"http://www.opengis.net/wms"],px=P(xx,{Service:M(function(b,c){return Q({},yx,b,c)}),Capability:M(function(b,c){return Q({},zx,b,c)})}),zx=P(xx,{Request:M(function(b,c){return Q({},Ax,b,c)}),Exception:M(function(b,c){return Q([],Bx,b,c)}),Layer:M(function(b,c){return Q({},Cx,b,c)})}),yx=P(xx,{Name:M(W),Title:M(W),Abstract:M(W),KeywordList:M(vx),OnlineResource:M(gw),ContactInformation:M(function(b,c){return Q({},Dx,b,c)}),Fees:M(W),AccessConstraints:M(W),LayerLimit:M(Ms),MaxWidth:M(Ms),
MaxHeight:M(Ms)}),Dx=P(xx,{ContactPersonPrimary:M(function(b,c){return Q({},Ex,b,c)}),ContactPosition:M(W),ContactAddress:M(function(b,c){return Q({},Fx,b,c)}),ContactVoiceTelephone:M(W),ContactFacsimileTelephone:M(W),ContactElectronicMailAddress:M(W)}),Ex=P(xx,{ContactPerson:M(W),ContactOrganization:M(W)}),Fx=P(xx,{AddressType:M(W),Address:M(W),City:M(W),StateOrProvince:M(W),PostCode:M(W),Country:M(W)}),Bx=P(xx,{Format:sp(W)}),Cx=P(xx,{Name:M(W),Title:M(W),Abstract:M(W),KeywordList:M(vx),CRS:up(W),
EX_GeographicBoundingBox:M(function(b,c){var d=Q({},Gx,b,c);if(d){var e=d.westBoundLongitude,f=d.southBoundLatitude,g=d.eastBoundLongitude,d=d.northBoundLatitude;return void 0===e||void 0===f||void 0===g||void 0===d?void 0:[e,f,g,d]}}),BoundingBox:up(function(b){var c=[Ls(b.getAttribute("minx")),Ls(b.getAttribute("miny")),Ls(b.getAttribute("maxx")),Ls(b.getAttribute("maxy"))],d=[Ls(b.getAttribute("resx")),Ls(b.getAttribute("resy"))];return{crs:b.getAttribute("CRS"),extent:c,res:d}}),Dimension:up(function(b){return{name:b.getAttribute("name"),
units:b.getAttribute("units"),unitSymbol:b.getAttribute("unitSymbol"),"default":b.getAttribute("default"),multipleValues:Is(b.getAttribute("multipleValues")),nearestValue:Is(b.getAttribute("nearestValue")),current:Is(b.getAttribute("current")),values:W(b)}}),Attribution:M(function(b,c){return Q({},Hx,b,c)}),AuthorityURL:up(function(b,c){var d=qx(b,c);if(d)return d.name=b.getAttribute("name"),d}),Identifier:up(W),MetadataURL:up(function(b,c){var d=qx(b,c);if(d)return d.type=b.getAttribute("type"),
d}),DataURL:up(qx),FeatureListURL:up(qx),Style:up(function(b,c){return Q({},Ix,b,c)}),MinScaleDenominator:M(Ks),MaxScaleDenominator:M(Ks),Layer:up(function(b,c){var d=c[c.length-1],e=Q({},Cx,b,c);if(e){var f=Is(b.getAttribute("queryable"));void 0===f&&(f=d.queryable);e.queryable=void 0!==f?f:!1;f=Ns(b.getAttribute("cascaded"));void 0===f&&(f=d.cascaded);e.cascaded=f;f=Is(b.getAttribute("opaque"));void 0===f&&(f=d.opaque);e.opaque=void 0!==f?f:!1;f=Is(b.getAttribute("noSubsets"));void 0===f&&(f=d.noSubsets);
e.noSubsets=void 0!==f?f:!1;(f=Ls(b.getAttribute("fixedWidth")))||(f=d.fixedWidth);e.fixedWidth=f;(f=Ls(b.getAttribute("fixedHeight")))||(f=d.fixedHeight);e.fixedHeight=f;["Style","CRS","AuthorityURL"].forEach(function(b){if(b in d){var c=Vb(e,b),c=c.concat(d[b]);e[b]=c}});"EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(b){b in e||(e[b]=d[b])});return e}})}),Hx=P(xx,{Title:M(W),OnlineResource:M(gw),LogoURL:M(ux)}),Gx=
P(xx,{westBoundLongitude:M(Ks),eastBoundLongitude:M(Ks),southBoundLatitude:M(Ks),northBoundLatitude:M(Ks)}),Ax=P(xx,{GetCapabilities:M(sx),GetMap:M(sx),GetFeatureInfo:M(sx)}),tx=P(xx,{Format:up(W),DCPType:up(function(b,c){return Q({},Jx,b,c)})}),Jx=P(xx,{HTTP:M(function(b,c){return Q({},Kx,b,c)})}),Kx=P(xx,{Get:M(qx),Post:M(qx)}),Ix=P(xx,{Name:M(W),Title:M(W),Abstract:M(W),LegendURL:up(ux),StyleSheetURL:M(qx),StyleURL:M(qx)}),rx=P(xx,{Format:M(W),OnlineResource:M(gw)}),wx=P(xx,{Keyword:sp(W)});function Lx(){this.b="http://mapserver.gis.umn.edu/mapserver";this.a=new Ss;this.defaultDataProjection=null}y(Lx,Ds);
Lx.prototype.hc=function(b,c){var d={featureType:this.featureType,featureNS:this.featureNS};c&&Zb(d,bs(this,b,c));var e=[d];b.namespaceURI=this.b;var f=ap(b),d=[];if(0!==b.childNodes.length){if("msGMLOutput"==f)for(var g=0,h=b.childNodes.length;g<h;g++){var k=b.childNodes[g];if(1===k.nodeType){var m=e[0],n=k.localName.replace("_layer","")+"_feature";m.featureType=n;m.featureNS=this.b;var p={};p[n]=sp(this.a.Mf,this.a);m=P([m.featureNS,null],p);k.namespaceURI=this.b;(k=Q([],m,k,e,this.a))&&nb(d,k)}}"FeatureCollection"==
f&&(e=Q([],this.a.a,b,[{}],this.a))&&(d=e)}return d};function Mx(){this.b=new iw}y(Mx,hw);Mx.prototype.c=function(b){for(b=b.firstChild;b;b=b.nextSibling)if(1==b.nodeType)return this.a(b);return null};Mx.prototype.a=function(b){this.version=b.getAttribute("version").trim();var c=this.b.a(b);if(!c)return null;c.version=this.version;return(c=Q(c,Nx,b,[]))?c:null};function Ox(b){var c=W(b).split(" ");if(c&&2==c.length)return b=+c[0],c=+c[1],isNaN(b)||isNaN(c)?void 0:[b,c]}
var Px=[null,"http://www.opengis.net/wmts/1.0"],Qx=[null,"http://www.opengis.net/ows/1.1"],Nx=P(Px,{Contents:M(function(b,c){return Q({},Rx,b,c)})}),Rx=P(Px,{Layer:up(function(b,c){return Q({},Sx,b,c)}),TileMatrixSet:up(function(b,c){return Q({},Tx,b,c)})}),Sx=P(Px,{Style:up(function(b,c){var d=Q({},Ux,b,c);if(d){var e="true"===b.getAttribute("isDefault");d.isDefault=e;return d}}),Format:up(W),TileMatrixSetLink:up(function(b,c){return Q({},Vx,b,c)}),Dimension:up(function(b,c){return Q({},Wx,b,c)}),
ResourceURL:up(function(b){var c=b.getAttribute("format"),d=b.getAttribute("template");b=b.getAttribute("resourceType");var e={};c&&(e.format=c);d&&(e.template=d);b&&(e.resourceType=b);return e})},P(Qx,{Title:M(W),Abstract:M(W),WGS84BoundingBox:M(function(b,c){var d=Q([],Xx,b,c);return 2!=d.length?void 0:Pd(d)}),Identifier:M(W)})),Ux=P(Px,{LegendURL:up(function(b){var c={};c.format=b.getAttribute("format");c.href=gw(b);return c})},P(Qx,{Title:M(W),Identifier:M(W)})),Vx=P(Px,{TileMatrixSet:M(W)}),
Wx=P(Px,{Default:M(W),Value:up(W)},P(Qx,{Identifier:M(W)})),Xx=P(Qx,{LowerCorner:sp(Ox),UpperCorner:sp(Ox)}),Tx=P(Px,{WellKnownScaleSet:M(W),TileMatrix:up(function(b,c){return Q({},Yx,b,c)})},P(Qx,{SupportedCRS:M(W),Identifier:M(W)})),Yx=P(Px,{TopLeftCorner:M(Ox),ScaleDenominator:M(Ks),TileWidth:M(Ms),TileHeight:M(Ms),MatrixWidth:M(Ms),MatrixHeight:M(Ms)},P(Qx,{Identifier:M(W)}));var Zx=new Ce(6378137);function $x(b){kd.call(this);b=b||{};this.a=null;this.f=af;this.b=void 0;C(this,md("projection"),this.Cl,!1,this);C(this,md("tracking"),this.Dl,!1,this);void 0!==b.projection&&this.bh(He(b.projection));void 0!==b.trackingOptions&&this.hi(b.trackingOptions);this.te(void 0!==b.tracking?b.tracking:!1)}y($x,kd);l=$x.prototype;l.X=function(){this.te(!1);$x.ca.X.call(this)};l.Cl=function(){var b=this.$g();b&&(this.f=Le(He("EPSG:4326"),b),this.a&&this.set("position",this.f(this.a)))};
l.Dl=function(){if(jj){var b=this.ah();b&&void 0===this.b?this.b=ba.navigator.geolocation.watchPosition(ra(this.io,this),ra(this.jo,this),this.Mg()):b||void 0===this.b||(ba.navigator.geolocation.clearWatch(this.b),this.b=void 0)}};
l.io=function(b){b=b.coords;this.set("accuracy",b.accuracy);this.set("altitude",null===b.altitude?void 0:b.altitude);this.set("altitudeAccuracy",null===b.altitudeAccuracy?void 0:b.altitudeAccuracy);this.set("heading",null===b.heading?void 0:Ya(b.heading));this.a?(this.a[0]=b.longitude,this.a[1]=b.latitude):this.a=[b.longitude,b.latitude];var c=this.f(this.a);this.set("position",c);this.set("speed",null===b.speed?void 0:b.speed);b=Mf(Zx,this.a,b.accuracy);b.mc(this.f);this.set("accuracyGeometry",b);
this.s()};l.jo=function(b){b.type="error";this.te(!1);this.o(b)};l.Cj=function(){return this.get("accuracy")};l.Dj=function(){return this.get("accuracyGeometry")||null};l.Fj=function(){return this.get("altitude")};l.Gj=function(){return this.get("altitudeAccuracy")};l.Al=function(){return this.get("heading")};l.Bl=function(){return this.get("position")};l.$g=function(){return this.get("projection")};l.kk=function(){return this.get("speed")};l.ah=function(){return this.get("tracking")};l.Mg=function(){return this.get("trackingOptions")};
l.bh=function(b){this.set("projection",b)};l.te=function(b){this.set("tracking",b)};l.hi=function(b){this.set("trackingOptions",b)};function ay(b,c,d){ff.call(this);this.Xf(b,c?c:0,d)}y(ay,ff);l=ay.prototype;l.clone=function(){var b=new ay(null),c=this.A.slice();hf(b,this.b,c);b.s();return b};l.mb=function(b,c,d,e){var f=this.A;b-=f[0];var g=c-f[1];c=b*b+g*g;if(c<e){if(0===c)for(e=0;e<this.a;++e)d[e]=f[e];else for(e=this.Cf()/Math.sqrt(c),d[0]=f[0]+e*b,d[1]=f[1]+e*g,e=2;e<this.a;++e)d[e]=f[e];d.length=this.a;return c}return e};l.rc=function(b,c){var d=this.A,e=b-d[0],d=c-d[1];return e*e+d*d<=by(this)};
l.yd=function(){return this.A.slice(0,this.a)};l.Yd=function(b){var c=this.A,d=c[this.a]-c[0];return Td(c[0]-d,c[1]-d,c[0]+d,c[1]+d,b)};l.Cf=function(){return Math.sqrt(by(this))};function by(b){var c=b.A[b.a]-b.A[0];b=b.A[b.a+1]-b.A[1];return c*c+b*b}l.V=function(){return"Circle"};l.Da=function(b){var c=this.J();return re(b,c)?(c=this.yd(),b[0]<=c[0]&&b[2]>=c[0]||b[1]<=c[1]&&b[3]>=c[1]?!0:fe(b,this.vg,this)):!1};
l.$l=function(b){var c=this.a,d=this.A[c]-this.A[0],e=b.slice();e[c]=e[0]+d;for(d=1;d<c;++d)e[c+d]=b[d];hf(this,this.b,e);this.s()};l.Xf=function(b,c,d){if(b){jf(this,d,b,0);this.A||(this.A=[]);d=this.A;b=rf(d,b);d[b++]=d[0]+c;var e;c=1;for(e=this.a;c<e;++c)d[b++]=d[c];d.length=b}else hf(this,"XY",null);this.s()};l.am=function(b){this.A[this.a]=this.A[0]+b;this.s()};function cy(b,c,d){for(var e=[],f=b(0),g=b(1),h=c(f),k=c(g),m=[g,f],n=[k,h],p=[1,0],q={},r=1E5,t,x,z,B,A;0<--r&&0<p.length;)z=p.pop(),f=m.pop(),h=n.pop(),g=z.toString(),g in q||(e.push(h[0],h[1]),q[g]=!0),B=p.pop(),g=m.pop(),k=n.pop(),A=(z+B)/2,t=b(A),x=c(t),Wa(x[0],x[1],h[0],h[1],k[0],k[1])<d?(e.push(k[0],k[1]),g=B.toString(),q[g]=!0):(p.push(B,A,A,z),n.push(k,x,x,h),m.push(g,t,t,f));return e}function dy(b,c,d,e,f){var g=He("EPSG:4326");return cy(function(e){return[b,c+(d-c)*e]},$e(g,e),f)}
function ey(b,c,d,e,f){var g=He("EPSG:4326");return cy(function(e){return[c+(d-c)*e,b]},$e(g,e),f)};function fy(b){b=b||{};this.g=this.l=null;this.b=this.j=Infinity;this.f=this.i=-Infinity;this.C=this.D=Infinity;this.ia=this.G=-Infinity;this.U=void 0!==b.targetSize?b.targetSize:100;this.oa=void 0!==b.maxLines?b.maxLines:100;this.a=[];this.c=[];this.S=void 0!==b.strokeStyle?b.strokeStyle:gy;this.v=this.B=void 0;this.u=null;this.setMap(void 0!==b.map?b.map:null)}var gy=new jm({color:"rgba(0,0,0,0.2)"}),hy=[90,45,30,20,10,5,2,1,.5,.2,.1,.05,.01,.005,.002,.001];
function iy(b,c,d,e,f,g,h){var k=h;c=dy(c,d,e,b.g,f);k=void 0!==b.a[k]?b.a[k]:new T(null);k.ba("XY",c);re(k.J(),g)&&(b.a[h++]=k);return h}function jy(b,c,d,e,f){var g=f;c=ey(c,b.f,b.b,b.g,d);g=void 0!==b.c[g]?b.c[g]:new T(null);g.ba("XY",c);re(g.J(),e)&&(b.c[f++]=g);return f}l=fy.prototype;l.El=function(){return this.l};l.Yj=function(){return this.a};l.ek=function(){return this.c};
l.Qg=function(b){var c=b.vectorContext,d=b.frameState,e=d.extent;b=d.viewState;var f=b.center,g=b.projection,h=b.resolution;b=d.pixelRatio;b=h*h/(4*b*b);if(!this.g||!Ze(this.g,g)){var k=He("EPSG:4326"),m=g.J(),n=g.i,p=cf(n,k,g),q=n[2],r=n[1],t=n[0],x=p[3],z=p[2],B=p[1],p=p[0];this.j=n[3];this.b=q;this.i=r;this.f=t;this.D=x;this.C=z;this.G=B;this.ia=p;this.B=$e(k,g);this.v=$e(g,k);this.u=this.v(oe(m));this.g=g}k=0;g.b&&(g=g.J(),k=me(g),d=d.focus[0],d<g[0]||d>g[2])&&(k*=Math.ceil((g[0]-d)/k),e=[e[0]+
k,e[1],e[2]+k,e[3]]);d=this.u[0];g=this.u[1];k=-1;n=Math.pow(this.U*h,2);q=[];r=[];h=0;for(m=hy.length;h<m;++h){t=hy[h]/2;q[0]=d-t;q[1]=g-t;r[0]=d+t;r[1]=g+t;this.B(q,q);this.B(r,r);t=Math.pow(r[0]-q[0],2)+Math.pow(r[1]-q[1],2);if(t<=n)break;k=hy[h]}h=k;if(-1==h)this.a.length=this.c.length=0;else{d=this.v(f);f=d[0];d=d[1];g=this.oa;k=[Math.max(e[0],this.ia),Math.max(e[1],this.G),Math.min(e[2],this.C),Math.min(e[3],this.D)];k=cf(k,this.g,"EPSG:4326");n=k[3];r=k[1];f=Math.floor(f/h)*h;q=Ua(f,this.f,
this.b);m=iy(this,q,r,n,b,e,0);for(k=0;q!=this.f&&k++<g;)q=Math.max(q-h,this.f),m=iy(this,q,r,n,b,e,m);q=Ua(f,this.f,this.b);for(k=0;q!=this.b&&k++<g;)q=Math.min(q+h,this.b),m=iy(this,q,r,n,b,e,m);this.a.length=m;d=Math.floor(d/h)*h;f=Ua(d,this.i,this.j);m=jy(this,f,b,e,0);for(k=0;f!=this.i&&k++<g;)f=Math.max(f-h,this.i),m=jy(this,f,b,e,m);f=Ua(d,this.i,this.j);for(k=0;f!=this.j&&k++<g;)f=Math.min(f+h,this.j),m=jy(this,f,b,e,m);this.c.length=m}c.ab(null,this.S);b=0;for(f=this.a.length;b<f;++b)h=this.a[b],
c.Wb(h,null);b=0;for(f=this.c.length;b<f;++b)h=this.c[b],c.Wb(h,null)};l.setMap=function(b){this.l&&(this.l.K("postcompose",this.Qg,this),this.l.render());b&&(b.H("postcompose",this.Qg,this),b.render());this.l=b};function ky(b,c,d,e,f,g,h){pk.call(this,b,c,d,0,e);this.l=f;this.c=new Image;null!==g&&(this.c.crossOrigin=g);this.g={};this.f=null;this.state=0;this.i=h}y(ky,pk);ky.prototype.a=function(b){if(void 0!==b){var c=w(b);if(c in this.g)return this.g[c];b=Sb(this.g)?this.c:this.c.cloneNode(!1);return this.g[c]=b}return this.c};ky.prototype.B=function(){this.state=3;this.f.forEach(ad);this.f=null;qk(this)};
ky.prototype.u=function(){void 0===this.resolution&&(this.resolution=ne(this.extent)/this.c.height);this.state=2;this.f.forEach(ad);this.f=null;qk(this)};ky.prototype.load=function(){0==this.state&&(this.state=1,qk(this),this.f=[Zc(this.c,"error",this.B,!1,this),Zc(this.c,"load",this.u,!1,this)],this.i(this,this.l))};function ly(b,c,d,e,f){Eh.call(this,b,c);this.i=d;this.c=new Image;null!==e&&(this.c.crossOrigin=e);this.b={};this.j=null;this.l=f}y(ly,Eh);l=ly.prototype;l.X=function(){1==this.state&&my(this);ly.ca.X.call(this)};l.Ua=function(b){if(void 0!==b){var c=w(b);if(c in this.b)return this.b[c];b=Sb(this.b)?this.c:this.c.cloneNode(!1);return this.b[c]=b}return this.c};l.tb=function(){return this.i};l.Fl=function(){this.state=3;my(this);Fh(this)};
l.Gl=function(){this.state=this.c.naturalWidth&&this.c.naturalHeight?2:4;my(this);Fh(this)};l.load=function(){0==this.state&&(this.state=1,Fh(this),this.j=[Zc(this.c,"error",this.Fl,!1,this),Zc(this.c,"load",this.Gl,!1,this)],this.l(this,this.i))};function my(b){b.j.forEach(ad);b.j=null};function ny(b,c,d){return function(e,f,g){return d(b,c,e,f,g)}}function oy(){};function py(b,c){ed.call(this);this.a=new Jr(this);var d=b;c&&(d=Eg(b));this.a.Sa(d,"dragenter",this.Qn);d!=b&&this.a.Sa(d,"dragover",this.Rn);this.a.Sa(b,"dragover",this.Sn);this.a.Sa(b,"drop",this.Tn)}y(py,ed);l=py.prototype;l.kd=!1;l.X=function(){py.ca.X.call(this);this.a.Ec()};l.Qn=function(b){var c=b.a.dataTransfer;(this.kd=!(!c||!(c.types&&(0<=bb(c.types,"Files")||0<=bb(c.types,"public.file-url"))||c.files&&0<c.files.length)))&&b.preventDefault()};
l.Rn=function(b){this.kd&&(b.preventDefault(),b.a.dataTransfer.dropEffect="none")};l.Sn=function(b){if(this.kd){b.preventDefault();b.b();b=b.a.dataTransfer;try{b.effectAllowed="all"}catch(c){}b.dropEffect="copy"}};l.Tn=function(b){this.kd&&(b.preventDefault(),b.b(),b=new Cc(b.a),b.type="drop",this.o(b))};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function qy(b,c){this.g=[];this.D=b;this.v=c||null;this.f=this.a=!1;this.b=void 0;this.B=this.C=this.i=!1;this.j=0;this.c=null;this.l=0}qy.prototype.cancel=function(b){if(this.a)this.b instanceof qy&&this.b.cancel();else{if(this.c){var c=this.c;delete this.c;b?c.cancel(b):(c.l--,0>=c.l&&c.cancel())}this.D?this.D.call(this.v,this):this.B=!0;this.a||(b=new ry,sy(this),ty(this,!1,b))}};qy.prototype.u=function(b,c){this.i=!1;ty(this,b,c)};function ty(b,c,d){b.a=!0;b.b=d;b.f=!c;uy(b)}
function sy(b){if(b.a){if(!b.B)throw new vy;b.B=!1}}qy.prototype.$c=function(b){sy(this);ty(this,!0,b)};function wy(b,c,d,e){b.g.push([c,d,e]);b.a&&uy(b)}qy.prototype.then=function(b,c,d){var e,f,g=new Qn(function(b,c){e=b;f=c});wy(this,e,function(b){b instanceof ry?g.cancel():f(b)});return g.then(b,c,d)};Dn(qy);function xy(b){return gb(b.g,function(b){return ka(b[1])})}
function uy(b){if(b.j&&b.a&&xy(b)){var c=b.j,d=yy[c];d&&(ba.clearTimeout(d.wa),delete yy[c]);b.j=0}b.c&&(b.c.l--,delete b.c);for(var c=b.b,e=d=!1;b.g.length&&!b.i;){var f=b.g.shift(),g=f[0],h=f[1],f=f[2];if(g=b.f?h:g)try{var k=g.call(f||b.v,c);ca(k)&&(b.f=b.f&&(k==c||k instanceof Error),b.b=c=k);if(En(c)||"function"===typeof ba.Promise&&c instanceof ba.Promise)e=!0,b.i=!0}catch(m){c=m,b.f=!0,xy(b)||(d=!0)}}b.b=c;e&&(k=ra(b.u,b,!0),e=ra(b.u,b,!1),c instanceof qy?(wy(c,k,e),c.C=!0):c.then(k,e));d&&
(c=new zy(c),yy[c.wa]=c,b.j=c.wa)}function vy(){xa.call(this)}y(vy,xa);vy.prototype.message="Deferred has already fired";vy.prototype.name="AlreadyCalledError";function ry(){xa.call(this)}y(ry,xa);ry.prototype.message="Deferred was canceled";ry.prototype.name="CanceledError";function zy(b){this.wa=ba.setTimeout(ra(this.c,this),0);this.a=b}zy.prototype.c=function(){delete yy[this.wa];throw this.a;};var yy={};function Ay(b,c){ca(b.name)?(this.name=b.name,this.code=By[b.name]):(this.code=b.code,this.name=Cy(b.code));xa.call(this,Aa("%s %s",this.name,c))}y(Ay,xa);function Cy(b){var c=Rb(By,function(c){return b==c});if(!ca(c))throw Error("Invalid code: "+b);return c}var By={AbortError:3,EncodingError:5,InvalidModificationError:9,InvalidStateError:7,NotFoundError:1,NotReadableError:4,NoModificationAllowedError:6,PathExistsError:12,QuotaExceededError:10,SecurityError:2,SyntaxError:8,TypeMismatchError:11};function Dy(b,c){xc.call(this,b.type,c)}y(Dy,xc);function Ey(){ed.call(this);this.ub=new FileReader;this.ub.onloadstart=ra(this.a,this);this.ub.onprogress=ra(this.a,this);this.ub.onload=ra(this.a,this);this.ub.onabort=ra(this.a,this);this.ub.onerror=ra(this.a,this);this.ub.onloadend=ra(this.a,this)}y(Ey,ed);Ey.prototype.getError=function(){return this.ub.error&&new Ay(this.ub.error,"reading file")};Ey.prototype.a=function(b){this.o(new Dy(b,this))};Ey.prototype.X=function(){Ey.ca.X.call(this);delete this.ub};
function Fy(b){var c=new qy;b.Sa("loadend",sa(function(b,c){var f=c.ub.result,g=c.getError();null==f||g?(sy(b),ty(b,!1,g)):b.$c(f);c.Ec()},c,b));return c};function Gy(b){b=b?b:{};Xk.call(this,{handleEvent:we});this.j=b.formatConstructors?b.formatConstructors:[];this.v=b.projection?He(b.projection):null;this.f=null;this.a=void 0}y(Gy,Xk);Gy.prototype.X=function(){this.a&&ad(this.a);Gy.ca.X.call(this)};Gy.prototype.i=function(b){b=b.a.dataTransfer.files;var c,d,e;c=0;for(d=b.length;c<d;++c){e=b[c];var f;f=e;var g=new Ey,h=Fy(g);g.ub.readAsText(f,"");f=h;e=sa(this.l,e);wy(f,e,null,this)}};
Gy.prototype.l=function(b,c){var d=this.u,e=this.v;e||(e=d.$().j);var d=this.j,f=[],g,h;g=0;for(h=d.length;g<h;++g){var k=new d[g],m;try{m=k.Ba(c)}catch(t){m=null}if(m){var k=k.Ja(c),k=$e(k,e),n,p;n=0;for(p=m.length;n<p;++n){var q=m[n],r=q.W();r&&r.mc(k);f.push(q)}}}this.o(new Hy(Iy,this,b,f,e))};Gy.prototype.setMap=function(b){this.a&&(ad(this.a),this.a=void 0);this.f&&(wc(this.f),this.f=null);Gy.ca.setMap.call(this,b);b&&(this.f=new py(b.a),this.a=C(this.f,"drop",this.i,!1,this))};var Iy="addfeatures";
function Hy(b,c,d,e,f){xc.call(this,b,c);this.features=e;this.file=d;this.projection=f}y(Hy,xc);function Jy(b,c){this.x=b;this.y=c}y(Jy,Ag);Jy.prototype.clone=function(){return new Jy(this.x,this.y)};Jy.prototype.scale=Ag.prototype.scale;Jy.prototype.add=function(b){this.x+=b.x;this.y+=b.y;return this};Jy.prototype.rotate=function(b){var c=Math.cos(b);b=Math.sin(b);var d=this.y*c+this.x*b;this.x=this.x*c-this.y*b;this.y=d;return this};function Ky(b){b=b?b:{};jl.call(this,{handleDownEvent:Ly,handleDragEvent:My,handleUpEvent:Ny});this.l=b.condition?b.condition:gl;this.a=this.f=void 0;this.i=0;this.v=b.duration?b.duration:400}y(Ky,jl);
function My(b){if(il(b)){var c=b.map,d=c.Ta();b=b.pixel;b=new Jy(b[0]-d[0]/2,d[1]/2-b[1]);d=Math.atan2(b.y,b.x);b=Math.sqrt(b.x*b.x+b.y*b.y);var e=c.$();c.render();if(void 0!==this.f){var f=d-this.f;Yk(c,e,e.Ea()-f)}this.f=d;void 0!==this.a&&(d=this.a*(e.aa()/b),$k(c,e,d));void 0!==this.a&&(this.i=this.a/b);this.a=b}}
function Ny(b){if(!il(b))return!0;b=b.map;var c=b.$();Vf(c,-1);var d=this.i-1,e=c.Ea(),e=c.constrainRotation(e,0);Yk(b,c,e,void 0,void 0);var e=c.aa(),f=this.v,e=c.constrainResolution(e,0,d);$k(b,c,e,void 0,f);this.i=0;return!1}function Ly(b){return il(b)&&this.l(b)?(Vf(b.map.$(),1),this.a=this.f=void 0,!0):!1};function Oy(b,c){xc.call(this,b);this.feature=c}y(Oy,xc);
function Py(b){jl.call(this,{handleDownEvent:Qy,handleEvent:Ry,handleUpEvent:Sy});this.ea=null;this.U=!1;this.Db=b.source?b.source:null;this.gb=b.features?b.features:null;this.Ci=b.snapTolerance?b.snapTolerance:12;this.T=b.type;this.f=Ty(this.T);this.xa=b.minPoints?b.minPoints:this.f===Uy?3:2;this.pa=b.maxPoints?b.maxPoints:Infinity;var c=b.geometryFunction;if(!c)if("Circle"===this.T)c=function(b,c){var d=c?c:new ay([NaN,NaN]);d.Xf(b[0],Math.sqrt(zd(b[0],b[1])));return d};else{var d,c=this.f;c===
Vy?d=D:c===Wy?d=T:c===Uy&&(d=E);c=function(b,c){var g=c;g?g.ma(b):g=new d(b);return g}}this.C=c;this.S=this.v=this.a=this.G=this.i=this.l=null;this.jj=b.clickTolerance?b.clickTolerance*b.clickTolerance:36;this.fa=new H({source:new R({useSpatialIndex:!1,wrapX:b.wrapX?b.wrapX:!1}),style:b.style?b.style:Xy()});this.Cb=b.geometryName;this.Ze=b.condition?b.condition:fl;this.qa=b.freehandCondition?b.freehandCondition:gl;C(this,md("active"),this.ni,!1,this)}y(Py,jl);
function Xy(){var b=qm();return function(c){return b[c.W().V()]}}l=Py.prototype;l.setMap=function(b){Py.ca.setMap.call(this,b);this.ni()};function Ry(b){var c=!this.U;this.U&&b.type===hk?(Yy(this,b),c=!1):b.type===gk?c=Zy(this,b):b.type===ak&&(c=!1);return kl.call(this,b)&&c}function Qy(b){if(this.Ze(b))return this.ea=b.pixel,!0;if(this.f!==Wy&&this.f!==Uy||!this.qa(b))return!1;this.ea=b.pixel;this.U=!0;this.l||$y(this,b);return!0}
function Sy(b){this.U=!1;var c=this.ea,d=b.pixel,e=c[0]-d[0],c=c[1]-d[1],d=!0;e*e+c*c<=this.jj&&(Zy(this,b),this.l?this.f===az?this.md():bz(this,b)?this.md():Yy(this,b):($y(this,b),this.f===Vy&&this.md()),d=!1);return d}
function Zy(b,c){if(b.l){var d=c.coordinate,e=b.i.W(),f;b.f===Vy?f=b.a:b.f===Uy?(f=b.a[0],f=f[f.length-1],bz(b,c)&&(d=b.l.slice())):(f=b.a,f=f[f.length-1]);f[0]=d[0];f[1]=d[1];b.C(b.a,e);b.G&&b.G.W().ma(d);e instanceof E&&b.f!==Uy?(b.v||(b.v=new Bn(new T(null))),e=e.Jg(0),d=b.v.W(),d.ba(e.b,e.ja())):b.S&&(d=b.v.W(),d.ma(b.S));cz(b)}else d=c.coordinate.slice(),b.G?b.G.W().ma(d):(b.G=new Bn(new D(d)),cz(b));return!0}
function bz(b,c){var d=!1;if(b.i){var e=!1,f=[b.l];b.f===Wy?e=b.a.length>b.xa:b.f===Uy&&(e=b.a[0].length>b.xa,f=[b.a[0][0],b.a[0][b.a[0].length-2]]);if(e)for(var e=c.map,g=0,h=f.length;g<h;g++){var k=f[g],m=e.Qa(k),n=c.pixel,d=n[0]-m[0],m=n[1]-m[1],n=b.U&&b.qa(c)?1:b.Ci;if(d=Math.sqrt(d*d+m*m)<=n){b.l=k;break}}}return d}
function $y(b,c){var d=c.coordinate;b.l=d;b.f===Vy?b.a=d.slice():b.f===Uy?(b.a=[[d.slice(),d.slice()]],b.S=b.a[0]):(b.a=[d.slice(),d.slice()],b.f===az&&(b.S=b.a));b.S&&(b.v=new Bn(new T(b.S)));d=b.C(b.a);b.i=new Bn;b.Cb&&b.i.vc(b.Cb);b.i.Na(d);cz(b);b.o(new Oy("drawstart",b.i))}
function Yy(b,c){var d=c.coordinate,e=b.i.W(),f,g;if(b.f===Wy)b.l=d.slice(),g=b.a,g.push(d.slice()),f=g.length>b.pa,b.C(g,e);else if(b.f===Uy){g=b.a[0];g.push(d.slice());if(f=g.length>b.pa)b.l=g[0];b.C(b.a,e)}cz(b);f&&b.md()}l.Go=function(){var b=this.i.W(),c,d;this.f===Wy?(c=this.a,c.splice(-2,1),this.C(c,b)):this.f===Uy&&(c=this.a[0],c.splice(-2,1),d=this.v.W(),d.ma(c),this.C(this.a,b));0===c.length&&(this.l=null);cz(this)};
l.md=function(){var b=dz(this),c=this.a,d=b.W();this.f===Wy?(c.pop(),this.C(c,d)):this.f===Uy&&(c[0].pop(),c[0].push(c[0][0]),this.C(c,d));"MultiPoint"===this.T?b.Na(new ks([c])):"MultiLineString"===this.T?b.Na(new U([c])):"MultiPolygon"===this.T&&b.Na(new V([c]));this.o(new Oy("drawend",b));this.gb&&this.gb.push(b);this.Db&&this.Db.Dd(b)};function dz(b){b.l=null;var c=b.i;c&&(b.i=null,b.G=null,b.v=null,b.fa.ga().clear(!0));return c}
l.hm=function(b){var c=b.W();this.i=b;this.a=c.Z();b=this.a[this.a.length-1];this.l=b.slice();this.a.push(b.slice());cz(this);this.o(new Oy("drawstart",this.i))};l.xc=ve;function cz(b){var c=[];b.i&&c.push(b.i);b.v&&c.push(b.v);b.G&&c.push(b.G);b=b.fa.ga();b.clear(!0);b.Dc(c)}l.ni=function(){var b=this.u,c=this.b();b&&c||dz(this);this.fa.setMap(c?b:null)};
function Ty(b){var c;"Point"===b||"MultiPoint"===b?c=Vy:"LineString"===b||"MultiLineString"===b?c=Wy:"Polygon"===b||"MultiPolygon"===b?c=Uy:"Circle"===b&&(c=az);return c}var Vy="Point",Wy="LineString",Uy="Polygon",az="Circle";function ez(b,c,d){xc.call(this,b);this.features=c;this.mapBrowserPointerEvent=d}y(ez,xc);
function fz(b){jl.call(this,{handleDownEvent:gz,handleDragEvent:hz,handleEvent:iz,handleUpEvent:jz});this.pa=b.deleteCondition?b.deleteCondition:Be(fl,el);this.qa=this.f=null;this.ea=[0,0];this.C=this.U=!1;this.a=new Kp;this.G=void 0!==b.pixelTolerance?b.pixelTolerance:10;this.l=this.fa=!1;this.i=null;this.S=new H({source:new R({useSpatialIndex:!1,wrapX:!!b.wrapX}),style:b.style?b.style:kz(),updateWhileAnimating:!0,updateWhileInteracting:!0});this.T={Point:this.om,LineString:this.hh,LinearRing:this.hh,
Polygon:this.pm,MultiPoint:this.mm,MultiLineString:this.lm,MultiPolygon:this.nm,GeometryCollection:this.km};this.v=b.features;this.v.forEach(this.Df,this);C(this.v,"add",this.im,!1,this);C(this.v,"remove",this.jm,!1,this)}y(fz,jl);l=fz.prototype;l.Df=function(b){var c=b.W();c.V()in this.T&&this.T[c.V()].call(this,b,c);(c=this.u)&&lz(this,this.ea,c);C(b,"change",this.gh,!1,this)};function mz(b,c){b.C||(b.C=!0,b.o(new ez("modifystart",b.v,c)))}
function nz(b,c){oz(b,c);b.f&&0===b.v.$b()&&(b.S.ga().Qc(b.f),b.f=null);$c(c,"change",b.gh,!1,b)}function oz(b,c){var d=b.a,e=[];d.forEach(function(b){c===b.feature&&e.push(b)});for(var f=e.length-1;0<=f;--f)d.remove(e[f])}l.setMap=function(b){this.S.setMap(b);fz.ca.setMap.call(this,b)};l.im=function(b){this.Df(b.element)};l.gh=function(b){this.l||(b=b.target,nz(this,b),this.Df(b))};l.jm=function(b){nz(this,b.element)};
l.om=function(b,c){var d=c.Z(),d={feature:b,geometry:c,la:[d,d]};this.a.ya(c.J(),d)};l.mm=function(b,c){var d=c.Z(),e,f,g;f=0;for(g=d.length;f<g;++f)e=d[f],e={feature:b,geometry:c,depth:[f],index:f,la:[e,e]},this.a.ya(c.J(),e)};l.hh=function(b,c){var d=c.Z(),e,f,g,h;e=0;for(f=d.length-1;e<f;++e)g=d.slice(e,e+2),h={feature:b,geometry:c,index:e,la:g},this.a.ya(Pd(g),h)};
l.lm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,geometry:c,depth:[h],index:f,la:m},this.a.ya(Pd(m),n)};l.pm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,geometry:c,depth:[h],index:f,la:m},this.a.ya(Pd(m),n)};
l.nm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n,p,q,r;m=0;for(n=d.length;m<n;++m)for(p=d[m],h=0,k=p.length;h<k;++h)for(e=p[h],f=0,g=e.length-1;f<g;++f)q=e.slice(f,f+2),r={feature:b,geometry:c,depth:[h,m],index:f,la:q},this.a.ya(Pd(q),r)};l.km=function(b,c){var d,e=c.f;for(d=0;d<e.length;++d)this.T[e[d].V()].call(this,b,e[d])};function pz(b,c){var d=b.f;d?d.W().ma(c):(d=new Bn(new D(c)),b.f=d,b.S.ga().Dd(d));qz(b,!0)}
function qz(b,c){var d=b.u.ue();if(!ma(d)||1!=d.nodeType)if(void 0!==d)d=Fg(d);else return;d.style.cursor=c?"pointer":""}function rz(b,c){return b.index-c.index}
function gz(b){lz(this,b.pixel,b.map);this.i=[];this.C=!1;var c=this.f;if(c){var d=[],c=c.W().Z(),e=Pd([c]),e=Np(this.a,e),f={};e.sort(rz);for(var g=0,h=e.length;g<h;++g){var k=e[g],m=k.la,n=w(k.feature),p=k.depth;p&&(n+="-"+p.join("-"));f[n]||(f[n]=Array(2));if(xd(m[0],c)&&!f[n][0])this.i.push([k,0]),f[n][0]=k;else if(xd(m[1],c)&&!f[n][1]){if("LineString"!==k.geometry.V()&&"MultiLineString"!==k.geometry.V()||!f[n][0]||0!==f[n][0].index)this.i.push([k,1]),f[n][1]=k}else w(m)in this.qa&&!f[n][0]&&
!f[n][1]&&d.push([k,c])}d.length&&mz(this,b);for(g=d.length-1;0<=g;--g)this.dl.apply(this,d[g])}return!!this.f}
function hz(b){this.U=!1;mz(this,b);b=b.coordinate;for(var c=0,d=this.i.length;c<d;++c){for(var e=this.i[c],f=e[0],g=f.depth,h=f.geometry,k=h.Z(),m=f.la,e=e[1];b.length<h.sa();)b.push(0);switch(h.V()){case "Point":k=b;m[0]=m[1]=b;break;case "MultiPoint":k[f.index]=b;m[0]=m[1]=b;break;case "LineString":k[f.index+e]=b;m[e]=b;break;case "MultiLineString":k[g[0]][f.index+e]=b;m[e]=b;break;case "Polygon":k[g[0]][f.index+e]=b;m[e]=b;break;case "MultiPolygon":k[g[1]][g[0]][f.index+e]=b,m[e]=b}f=h;this.l=
!0;f.ma(k);this.l=!1}pz(this,b)}function jz(b){for(var c,d=this.i.length-1;0<=d;--d)c=this.i[d][0],Lp(this.a,Pd(c.la),c);this.C&&(this.o(new ez("modifyend",this.v,b)),this.C=!1);return!1}
function iz(b){if(!(b instanceof Wj))return!0;var c;b.map.$().b.slice()[1]||b.type!=gk||this.D||(this.ea=b.pixel,lz(this,b.pixel,b.map));if(this.f&&this.pa(b))if(b.type==bk&&this.U)c=!0;else{this.f.W();mz(this,b);c=this.i;var d={},e,f,g,h,k,m,n,p,q;for(k=c.length-1;0<=k;--k)if(g=c[k],p=g[0],h=p.geometry,f=h.Z(),q=w(p.feature),p.depth&&(q+="-"+p.depth.join("-")),n=e=m=void 0,0===g[1]?(e=p,m=p.index):1==g[1]&&(n=p,m=p.index+1),q in d||(d[q]=[n,e,m]),g=d[q],void 0!==n&&(g[0]=n),void 0!==e&&(g[1]=e),
void 0!==g[0]&&void 0!==g[1]){e=f;q=!1;n=m-1;switch(h.V()){case "MultiLineString":f[p.depth[0]].splice(m,1);q=!0;break;case "LineString":f.splice(m,1);q=!0;break;case "MultiPolygon":e=e[p.depth[1]];case "Polygon":e=e[p.depth[0]],4<e.length&&(m==e.length-1&&(m=0),e.splice(m,1),q=!0,0===m&&(e.pop(),e.push(e[0]),n=e.length-1))}q&&(this.a.remove(g[0]),this.a.remove(g[1]),e=h,this.l=!0,e.ma(f),this.l=!1,f={depth:p.depth,feature:p.feature,geometry:p.geometry,index:n,la:[g[0].la[0],g[1].la[1]]},this.a.ya(Pd(f.la),
f),sz(this,h,m,p.depth,-1),this.f&&(this.S.ga().Qc(this.f),this.f=null))}c=!0;this.o(new ez("modifyend",this.v,b));this.C=!1}b.type==bk&&(this.U=!1);return kl.call(this,b)&&!c}
function lz(b,c,d){function e(b,c){return Ad(f,b.la)-Ad(f,c.la)}var f=d.Fa(c),g=d.Fa([c[0]-b.G,c[1]+b.G]),h=d.Fa([c[0]+b.G,c[1]-b.G]),g=Pd([g,h]),g=Np(b.a,g);if(0<g.length){g.sort(e);var h=g[0].la,k=ud(f,h),m=d.Qa(k);if(Math.sqrt(zd(c,m))<=b.G){c=d.Qa(h[0]);d=d.Qa(h[1]);c=zd(m,c);d=zd(m,d);b.fa=Math.sqrt(Math.min(c,d))<=b.G;b.fa&&(k=c>d?h[1]:h[0]);pz(b,k);d={};d[w(h)]=!0;c=1;for(m=g.length;c<m;++c)if(k=g[c].la,xd(h[0],k[0])&&xd(h[1],k[1])||xd(h[0],k[1])&&xd(h[1],k[0]))d[w(k)]=!0;else break;b.qa=d;
return}}b.f&&(b.S.ga().Qc(b.f),b.f=null,qz(b,!1))}
l.dl=function(b,c){for(var d=b.la,e=b.feature,f=b.geometry,g=b.depth,h=b.index,k;c.length<f.sa();)c.push(0);switch(f.V()){case "MultiLineString":k=f.Z();k[g[0]].splice(h+1,0,c);break;case "Polygon":k=f.Z();k[g[0]].splice(h+1,0,c);break;case "MultiPolygon":k=f.Z();k[g[1]][g[0]].splice(h+1,0,c);break;case "LineString":k=f.Z();k.splice(h+1,0,c);break;default:return}this.l=!0;f.ma(k);this.l=!1;k=this.a;k.remove(b);sz(this,f,h,g,1);var m={la:[d[0],c],feature:e,geometry:f,depth:g,index:h};k.ya(Pd(m.la),
m);this.i.push([m,1]);d={la:[c,d[1]],feature:e,geometry:f,depth:g,index:h+1};k.ya(Pd(d.la),d);this.i.push([d,0]);this.U=!0};function sz(b,c,d,e,f){Pp(b.a,c.J(),function(b){b.geometry===c&&(void 0===e||void 0===b.depth||ub(b.depth,e))&&b.index>d&&(b.index+=f)})}function kz(){var b=qm();return function(){return b.Point}};function tz(b,c,d,e){xc.call(this,b);this.selected=c;this.deselected=d;this.mapBrowserEvent=e}y(tz,xc);
function uz(b){Xk.call(this,{handleEvent:vz});b=b?b:{};this.D=b.condition?b.condition:el;this.l=b.addCondition?b.addCondition:ve;this.C=b.removeCondition?b.removeCondition:ve;this.G=b.toggleCondition?b.toggleCondition:gl;this.v=b.multi?b.multi:!1;this.j=b.filter?b.filter:we;var c;if(b.layers)if(ka(b.layers))c=b.layers;else{var d=b.layers;c=function(b){return xb(d,b)}}else c=we;this.i=c;this.a={};this.f=new H({source:new R({useSpatialIndex:!1,features:b.features,wrapX:b.wrapX}),style:b.style?b.style:
wz(),updateWhileAnimating:!0,updateWhileInteracting:!0});b=this.f.ga().b;C(b,"add",this.qm,!1,this);C(b,"remove",this.tm,!1,this)}y(uz,Xk);l=uz.prototype;l.rm=function(){return this.f.ga().b};l.sm=function(b){b=w(b);return this.a[b]};
function vz(b){if(!this.D(b))return!0;var c=this.l(b),d=this.C(b),e=this.G(b),f=!c&&!d&&!e,g=b.map,h=this.f.ga().b,k=[],m=[],n=!1;if(f)g.od(b.pixel,function(b,c){if(!c||this.j(b,c)){m.push(b);var d=w(b);this.a[d]=c;return!this.v}},this,this.i),0<m.length&&1==h.$b()&&h.item(0)==m[0]||(n=!0,0!==h.$b()&&(k=Array.prototype.concat(h.a),h.clear()),h.yf(m),0===m.length?Tb(this.a):0<k.length&&k.forEach(function(b){b=w(b);delete this.a[b]},this));else{g.od(b.pixel,function(b,f){if(!xb(h.a,b)){if((c||e)&&this.j(b,
f)){m.push(b);var g=w(b);this.a[g]=f}}else if(d||e)k.push(b),g=w(b),delete this.a[g]},this,this.i);for(f=k.length-1;0<=f;--f)h.remove(k[f]);h.yf(m);if(0<m.length||0<k.length)n=!0}n&&this.o(new tz("select",m,k,b));return dl(b)}l.setMap=function(b){var c=this.u,d=this.f.ga().b;null===c||d.forEach(c.li,c);uz.ca.setMap.call(this,b);this.f.setMap(b);null===b||d.forEach(b.ii,b)};
function wz(){var b=qm();nb(b.Polygon,b.LineString);nb(b.GeometryCollection,b.LineString);return function(c){return b[c.W().V()]}}l.qm=function(b){b=b.element;var c=this.u;null===c||c.ii(b)};l.tm=function(b){b=b.element;var c=this.u;null===c||c.li(b)};function xz(b){jl.call(this,{handleEvent:yz,handleDownEvent:we,handleUpEvent:zz});b=b?b:{};this.l=b.source?b.source:null;this.i=b.features?b.features:null;this.ea=[];this.C={};this.G={};this.U={};this.v={};this.S=null;this.f=void 0!==b.pixelTolerance?b.pixelTolerance:10;this.fa=ra(Az,this);this.a=new Kp;this.T={Point:this.zm,LineString:this.kh,LinearRing:this.kh,Polygon:this.Am,MultiPoint:this.xm,MultiLineString:this.wm,MultiPolygon:this.ym,GeometryCollection:this.vm}}y(xz,jl);l=xz.prototype;
l.zd=function(b,c){var d=void 0!==c?c:!0,e=b.W(),f=this.T[e.V()];if(f){var g=w(b);this.U[g]=e.J(Qd());f.call(this,b,e);d&&(this.G[g]=e.H("change",ra(this.Ak,this,b),this),this.C[g]=b.H(md(b.a),this.um,this))}};l.zj=function(b){this.zd(b)};l.Aj=function(b){this.Ad(b)};l.ih=function(b){var c;b instanceof Up?c=b.feature:b instanceof pg&&(c=b.element);this.zd(c)};l.jh=function(b){var c;b instanceof Up?c=b.feature:b instanceof pg&&(c=b.element);this.Ad(c)};
l.um=function(b){b=b.g;this.Ad(b,!0);this.zd(b,!0)};l.Ak=function(b){if(this.D){var c=w(b);c in this.v||(this.v[c]=b)}else this.mi(b)};l.Ad=function(b,c){var d=void 0!==c?c:!0,e=w(b),f=this.U[e];if(f){var g=this.a,h=[];Pp(g,f,function(c){b===c.feature&&h.push(c)});for(f=h.length-1;0<=f;--f)g.remove(h[f]);d&&(ad(this.G[e]),delete this.G[e],ad(this.C[e]),delete this.C[e])}};
l.setMap=function(b){var c=this.u,d=this.ea,e;this.i?e=this.i:this.l&&(e=this.l.Ae());c&&(d.forEach(id),d.length=0,e.forEach(this.Aj,this));xz.ca.setMap.call(this,b);b&&(this.i?(d.push(this.i.H("add",this.ih,this)),d.push(this.i.H("remove",this.jh,this))):this.l&&(d.push(this.l.H("addfeature",this.ih,this)),d.push(this.l.H("removefeature",this.jh,this))),e.forEach(this.zj,this))};l.xc=ve;l.mi=function(b){this.Ad(b,!1);this.zd(b,!1)};
l.vm=function(b,c){var d,e=c.f;for(d=0;d<e.length;++d)this.T[e[d].V()].call(this,b,e[d])};l.kh=function(b,c){var d=c.Z(),e,f,g,h;e=0;for(f=d.length-1;e<f;++e)g=d.slice(e,e+2),h={feature:b,la:g},this.a.ya(Pd(g),h)};l.wm=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,la:m},this.a.ya(Pd(m),n)};l.xm=function(b,c){var d=c.Z(),e,f,g;f=0;for(g=d.length;f<g;++f)e=d[f],e={feature:b,la:[e,e]},this.a.ya(c.J(),e)};
l.ym=function(b,c){var d=c.Z(),e,f,g,h,k,m,n,p,q,r;m=0;for(n=d.length;m<n;++m)for(p=d[m],h=0,k=p.length;h<k;++h)for(e=p[h],f=0,g=e.length-1;f<g;++f)q=e.slice(f,f+2),r={feature:b,la:q},this.a.ya(Pd(q),r)};l.zm=function(b,c){var d=c.Z(),d={feature:b,la:[d,d]};this.a.ya(c.J(),d)};l.Am=function(b,c){var d=c.Z(),e,f,g,h,k,m,n;h=0;for(k=d.length;h<k;++h)for(e=d[h],f=0,g=e.length-1;f<g;++f)m=e.slice(f,f+2),n={feature:b,la:m},this.a.ya(Pd(m),n)};
function yz(b){var c,d,e=b.pixel,f=b.coordinate;c=b.map;var g=c.Fa([e[0]-this.f,e[1]+this.f]);d=c.Fa([e[0]+this.f,e[1]-this.f]);var g=Pd([g,d]),h=Np(this.a,g),k=!1,g=!1,m=null;d=null;0<h.length&&(this.S=f,h.sort(this.fa),h=h[0].la,m=ud(f,h),d=c.Qa(m),Math.sqrt(zd(e,d))<=this.f&&(g=!0,e=c.Qa(h[0]),f=c.Qa(h[1]),e=zd(d,e),f=zd(d,f),k=Math.sqrt(Math.min(e,f))<=this.f))&&(m=e>f?h[1]:h[0],d=c.Qa(m),d=[Math.round(d[0]),Math.round(d[1])]);c=m;g&&(b.coordinate=c.slice(0,2),b.pixel=d);return kl.call(this,b)}
function zz(){var b=Nb(this.v);b.length&&(b.forEach(this.mi,this),this.v={});return!1}function Az(b,c){return Ad(this.S,b.la)-Ad(this.S,c.la)};function Bz(b,c,d){xc.call(this,b);this.features=c;this.coordinate=d}y(Bz,xc);function Cz(b){jl.call(this,{handleDownEvent:Dz,handleDragEvent:Ez,handleMoveEvent:Fz,handleUpEvent:Gz});this.l=void 0;this.a=null;this.f=void 0!==b.features?b.features:null;this.i=null}y(Cz,jl);function Dz(b){this.i=Hz(this,b.pixel,b.map);return!this.a&&this.i?(this.a=b.coordinate,Fz.call(this,b),this.o(new Bz("translatestart",this.f,b.coordinate)),!0):!1}
function Gz(b){return this.a?(this.a=null,Fz.call(this,b),this.o(new Bz("translateend",this.f,b.coordinate)),!0):!1}function Ez(b){if(this.a){b=b.coordinate;var c=b[0]-this.a[0],d=b[1]-this.a[1];if(this.f)this.f.forEach(function(b){var e=b.W();e.Oc(c,d);b.Na(e)});else if(this.i){var e=this.i.W();e.Oc(c,d);this.i.Na(e)}this.a=b;this.o(new Bz("translating",this.f,b))}}
function Fz(b){var c=b.map.Lc();if(b=b.map.od(b.pixel,function(b){return b})){var d=!1;this.f&&xb(this.f.a,b)&&(d=!0);this.l=c.style.cursor;c.style.cursor=this.a?"-webkit-grabbing":d?"-webkit-grab":"pointer";c.style.cursor=this.a?d?"grab":"pointer":"grabbing"}else c.style.cursor=void 0!==this.l?this.l:"",this.l=void 0}function Hz(b,c,d){var e=null;c=d.od(c,function(b){return b});b.f&&xb(b.f.a,c)&&(e=c);return e};function X(b){b=b?b:{};var c=Wb(b);delete c.gradient;delete c.radius;delete c.blur;delete c.shadow;delete c.weight;H.call(this,c);this.g=null;this.Y=void 0!==b.shadow?b.shadow:250;this.T=void 0;this.U=null;C(this,md("gradient"),this.Bk,!1,this);this.ai(b.gradient?b.gradient:Iz);this.Yh(void 0!==b.blur?b.blur:15);this.nh(void 0!==b.radius?b.radius:8);C(this,[md("blur"),md("radius")],this.Rg,!1,this);this.Rg();var d=b.weight?b.weight:"weight",e;ia(d)?e=function(b){return b.get(d)}:e=d;this.f(ra(function(b){b=
e(b);b=void 0!==b?Ua(b,0,1):1;var c=255*b|0,d=this.U[c];d||(d=[new lm({image:new Fk({opacity:b,src:this.T})})],this.U[c]=d);return d},this));this.set("renderOrder",null);C(this,"render",this.Tk,!1,this)}y(X,H);var Iz=["#00f","#0ff","#0f0","#ff0","#f00"];l=X.prototype;l.Bg=function(){return this.get("blur")};l.Ig=function(){return this.get("gradient")};l.mh=function(){return this.get("radius")};
l.Bk=function(){for(var b=this.Ig(),c=Yi(1,256),d=c.createLinearGradient(0,0,1,256),e=1/(b.length-1),f=0,g=b.length;f<g;++f)d.addColorStop(f*e,b[f]);c.fillStyle=d;c.fillRect(0,0,1,256);this.g=c.getImageData(0,0,1,256).data};l.Rg=function(){var b=this.mh(),c=this.Bg(),d=b+c+1,e=2*d,e=Yi(e,e);e.shadowOffsetX=e.shadowOffsetY=this.Y;e.shadowBlur=c;e.shadowColor="#000";e.beginPath();c=d-this.Y;e.arc(c,c,b,0,2*Math.PI,!0);e.fill();this.T=e.canvas.toDataURL();this.U=Array(256);this.s()};
  l.Tk = function (b) {
    b = b.context;
    var c = b.canvas, c = b.getImageData(0, 0, c.width, c.height), d = c.data, e, f, g;
    e = 0;
    for (f = d.length; e < f; e += 4)if (g = 4 * d[e + 3])d[e] = this.g[g], d[e + 1] = this.g[g + 1], d[e + 2] = this.g[g + 2];
    b.putImageData(c, 0, 0)
  };
  l.Yh = function (b) {
    this.set("blur", b)
  };
  l.ai = function (b) {
    this.set("gradient", b)
  };
  l.nh = function (b) {
    this.set("radius", b)
  };
  function Jz(b) {
    b = b || {};
    b.offset || (b.offset = [0, 0]);
    b.title || (b.title = "\u8be6\u7ec6\u4fe1\u606f");
    this.b = document.createElement("div");
    this.b.className = "ol-popup";
    b.Jp && (this.title = document.createElement("div"), this.title.className = "ol-popup-title", this.title.innerHTML = b.title, this.g = document.createElement("a"), this.g.className = "ol-popup-closer", this.g.href = "#", this.g.title = "\u5173\u95ed", this.b.appendChild(this.title), this.b.appendChild(this.g));
    var c = this;
    this.g && this.g.addEventListener("click", function (b) {
      c.b.style.display =
          "none";
      c.g.blur();
      b.preventDefault()
    }, !1);
    this.j = document.createElement("div");
    this.j.className = "ol-popup-content";
    this.b.appendChild(this.j);
    b.maxHeight && ch(this.b, "max-height", b.maxHeight);
    b.cp && this.title && ch(this.title, "width", b.cp);
    b.ep && this.title && ch(this.title, "background-color", b.ep);
    b.width && ch(this.b, "width", b.width);
    b.height && ch(this.b, "height", b.height);
    Kz(this.j);
    b.element = this.b;
    wr.call(this, b)
  }

  y(Jz, wr);
  l = Jz.prototype;
  l.Ml = function (b, c) {
    this.xd(b);
    c instanceof Element ? this.j.appendChild(c) : this.j.innerHTML = c;
    this.b.style.display = "block";
    this.j.scrollTop = 0;
    return this
  };
  l.Uo = function (b) {
    ch(this.b, "height", b)
  };
  l.Ll = function (b) {
    ch(this.b, "width", b)
  };
  l.Kl = function () {
    return mh(this.b).width
  };
function Kz(b){var c;try{document.createEvent("TouchEvent"),c=!0}catch(e){c=!1}if(c){var d=0;b.addEventListener("touchstart",function(b){d=this.scrollTop+b.touches[0].pageY},!1);b.addEventListener("touchmove",function(b){this.scrollTop=d-b.touches[0].pageY},!1)}}l.al=function(){this.b.style.display="none";return this};function Lz(b,c,d,e,f,g,h,k,m,n,p){Eh.call(this,[f,g,h],0);this.D=void 0!==p?p:!1;this.v=k;this.j=null;this.g={};this.i=c;this.B=e;this.c=[];this.b=null;this.l=0;h=e.Aa(this.a);p=this.B.J();g=this.i.J();h=p?qe(h,p):h;if(0===ke(h))this.state=4;else if((p=b.J())&&(g?g=qe(g,p):g=p),e=e.aa(f),e=ln(b,d,oe(h),e),!isFinite(e)||isNaN(e)||0>=e)this.state=4;else if(this.u=new on(b,d,h,g,e*(void 0!==n?n:.5)),0===this.u.f.length)this.state=4;else if(this.l=Sh(c,e),d=qn(this.u),g&&(b.b?(d[1]=Ua(d[1],g[1],g[3]),
d[3]=Ua(d[3],g[1],g[3])):d=qe(d,g)),ke(d))if(b=Nh(c,d,this.l),100>mg(b)*lg(b)){for(c=b.a;c<=b.f;c++)for(d=b.c;d<=b.b;d++)(n=m(this.l,c,d,k))&&this.c.push(n);0===this.c.length&&(this.state=4)}else this.state=3;else this.state=4}y(Lz,Eh);Lz.prototype.X=function(){1==this.state&&(this.b.forEach(ad),this.b=null);Lz.ca.X.call(this)};Lz.prototype.Ua=function(b){if(void 0!==b){var c=w(b);if(c in this.g)return this.g[c];b=Sb(this.g)?this.j:this.j.cloneNode(!1);return this.g[c]=b}return this.j};
function Mz(b){var c=[];b.c.forEach(function(b){b&&2==b.state&&c.push({extent:this.i.Aa(b.a),image:b.Ua()})},b);b.c.length=0;var d=b.a,e=d[0],f=b.B.Ha(e),g=ja(f)?f:f[0],f=ja(f)?f:f[1],e=b.B.aa(e),h=b.i.aa(b.l),d=b.B.Aa(d);b.j=nn(g,f,b.v,h,b.i.J(),e,d,b.u,c,b.D);b.state=2;Fh(b)}
Lz.prototype.load=function(){if(0==this.state){this.state=1;Fh(this);var b=0;this.b=[];this.c.forEach(function(c){var d=c.state;if(0==d||1==d){b++;var e;e=c.Sa("change",function(){var d=c.state;if(2==d||3==d||4==d)ad(e),b--,0===b&&(this.b.forEach(ad),this.b=null,Mz(this))},!1,this);this.b.push(e)}},this);this.c.forEach(function(b){0==b.state&&b.load()});0===b&&Mz(this)}};function Nz(b,c){var d=c||{},e=d.document||document,f=Mg("SCRIPT"),g={Xh:f,yc:void 0},h=new qy(Oz,g),k=null,m=null!=d.timeout?d.timeout:5E3;0<m&&(k=window.setTimeout(function(){Pz(f,!0);var c=new Qz(Rz,"Timeout reached for loading script "+b);sy(h);ty(h,!1,c)},m),g.yc=k);f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||(Pz(f,d.uj||!1,k),h.$c(null))};f.onerror=function(){Pz(f,!0,k);var c=new Qz(Sz,"Error while loading script "+b);sy(h);ty(h,!1,
c)};g=d.attributes||{};Zb(g,{type:"text/javascript",charset:"UTF-8",src:b});Gg(f,g);Tz(e).appendChild(f);return h}function Tz(b){var c=b.getElementsByTagName("HEAD");return c&&0!=c.length?c[0]:b.documentElement}function Oz(){if(this&&this.Xh){var b=this.Xh;b&&"SCRIPT"==b.tagName&&Pz(b,!0,this.yc)}}function Pz(b,c,d){null!=d&&ba.clearTimeout(d);b.onload=da;b.onerror=da;b.onreadystatechange=da;c&&window.setTimeout(function(){Qg(b)},0)}var Sz=0,Rz=1;
function Qz(b,c){var d="Jsloader error (code #"+b+")";c&&(d+=": "+c);xa.call(this,d);this.code=b}y(Qz,xa);function Uz(b,c){this.c=new Qt(b);this.a=c?c:"callback";this.yc=5E3}var Vz=0;function Wz(b,c,d,e){c=c||null;var f="_"+(Vz++).toString(36)+ta().toString(36);ba._callbacks_||(ba._callbacks_={});var g=b.c.clone();if(c)for(var h in c)if(!c.hasOwnProperty||c.hasOwnProperty(h)){var k=g,m=h,n=c[h];ga(n)||(n=[String(n)]);iu(k.b,m,n)}d&&(ba._callbacks_[f]=Xz(f,d),d=b.a,h="_callbacks_."+f,ga(h)||(h=[String(h)]),iu(g.b,d,h));b=Nz(g.toString(),{timeout:b.yc,uj:!0});wy(b,null,Yz(f,c,e),void 0)}
Uz.prototype.cancel=function(b){b&&(b.vj&&b.vj.cancel(),b.wa&&Zz(b.wa,!1))};function Yz(b,c,d){return function(){Zz(b,!1);d&&d(c)}}function Xz(b,c){return function(d){Zz(b,!0);c.apply(void 0,arguments)}}function Zz(b,c){ba._callbacks_[b]&&(c?delete ba._callbacks_[b]:ba._callbacks_[b]=da)};function Y(b){hq.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,opaque:b.opaque,projection:b.projection,state:void 0!==b.state?b.state:void 0,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction?b.tileLoadFunction:$z,tilePixelRatio:b.tilePixelRatio,tileUrlFunction:b.tileUrlFunction,url:b.url,urls:b.urls,wrapX:b.wrapX});this.crossOrigin=void 0!==b.crossOrigin?b.crossOrigin:null;this.tileClass=void 0!==b.tileClass?b.tileClass:ly;this.i={};this.u={};this.xa=b.reprojectionErrorThreshold;
this.T=!1}y(Y,hq);l=Y.prototype;l.sh=function(){return Ch(this.a)?!0:Lb(this.i,function(b){return Ch(b)})};l.th=function(b,c){var d=this.td(b);Dh(this.a,this.a==d?c:{});Kb(this.i,function(b){Dh(b,b==d?c:{})})};l.ib=function(b){var c=this.f;return!this.tileGrid||c&&!Ze(c,b)?(c=w(b).toString(),c in this.u||(this.u[c]=Th(b)),this.u[c]):this.tileGrid};l.td=function(b){var c=this.f;if(!c||Ze(c,b))return this.a;b=w(b).toString();b in this.i||(this.i[b]=new Bh);return this.i[b]};
l.Mb=function(b,c,d,e,f){if(this.f&&f&&!Ze(this.f,f)){e=this.td(f);var g=this.hb(b,c,d);if(Ah(e,g))return e.get(g);var h=this.f,k=this.ib(h),m=this.ib(f);b=new Lz(h,k,f,m,b,c,d,this.D,ra(function(b,c,d,e){return aA(this,b,c,d,e,h)},this),this.xa,this.T);e.set(g,b);return b}return aA(this,b,c,d,e,f)};
function aA(b,c,d,e,f,g){var h=b.hb(c,d,e);if(Ah(b.a,h))return b.a.get(h);c=[c,d,e];f=(d=Zh(b,c,g))?b.tileUrlFunction(d,f,g):void 0;f=new b.tileClass(c,void 0!==f?0:4,void 0!==f?f:"",b.crossOrigin,b.tileLoadFunction);C(f,"change",b.uh,!1,b);b.a.set(h,f);return f}l.wb=function(b){this.T!=b&&(this.T=b,Kb(this.i,function(b){b.clear()}),this.s())};l.xb=function(b,c){var d=He(b);d&&(d=w(d).toString(),d in this.u||(this.u[d]=c))};function $z(b,c){b.Ua().src=c};function bA(b){Y.call(this,{crossOrigin:"anonymous",opaque:!0,projection:He("EPSG:3857"),reprojectionErrorThreshold:b.reprojectionErrorThreshold,state:"loading",tileLoadFunction:b.tileLoadFunction,wrapX:void 0!==b.wrapX?b.wrapX:!0});this.l=void 0!==b.culture?b.culture:"en-us";this.g=void 0!==b.maxZoom?b.maxZoom:-1;var c=new Qt("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+b.imagerySet);Wz(new Uz(c,"jsonp"),{include:"ImageryProviders",uriScheme:"https",key:b.key},ra(this.C,this))}y(bA,Y);
var cA=new og({html:'<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
bA.prototype.C=function(b){if(200!=b.statusCode||"OK"!=b.statusDescription||"ValidCredentials"!=b.authenticationResultCode||1!=b.resourceSets.length||1!=b.resourceSets[0].resources.length)Ih(this,"error");else{var c=b.brandLogoUri;-1==c.indexOf("https")&&(c=c.replace("http","https"));var d=b.resourceSets[0].resources[0],e=-1==this.g?d.zoomMax:this.g;b=Uh(this.f);var f=Wh({extent:b,minZoom:d.zoomMin,maxZoom:e,tileSize:d.imageWidth==d.imageHeight?d.imageWidth:[d.imageWidth,d.imageHeight]});this.tileGrid=
f;var g=this.l;this.tileUrlFunction=eq(d.imageUrlSubdomains.map(function(b){var c=[0,0,0],e=d.imageUrl.replace("{subdomain}",b).replace("{culture}",g);return function(b){if(b)return dg(b[0],b[1],-b[2]-1,c),e.replace("{quadkey}",gg(c))}}));if(d.imageryProviders){var h=Le(He("EPSG:4326"),this.f);b=d.imageryProviders.map(function(b){var c=b.attribution,d={};b.coverageAreas.forEach(function(b){var c=b.zoomMin,g=Math.min(b.zoomMax,e);b=b.bbox;b=te([b[1],b[0],b[3],b[2]],h);var k,m;for(k=c;k<=g;++k)m=k.toString(),
c=Nh(f,b,k),m in d?d[m].push(c):d[m]=[c]});return new og({html:c,tileRanges:d})});b.push(cA);this.na(b)}this.U=c;Ih(this,"ready")}};function dA(b){R.call(this,{attributions:b.attributions,extent:b.extent,logo:b.logo,projection:b.projection,wrapX:b.wrapX});this.G=void 0;this.ea=void 0!==b.distance?b.distance:20;this.C=[];this.D=b.source;this.D.H("change",dA.prototype.qa,this)}y(dA,R);dA.prototype.fa=function(){return this.D};dA.prototype.Mc=function(b,c,d){this.D.Mc(b,c,d);c!==this.G&&(this.clear(),this.G=c,eA(this),this.Dc(this.C))};dA.prototype.qa=function(){this.clear();eA(this);this.Dc(this.C);this.s()};
function eA(b){if(void 0!==b.G){b.C.length=0;for(var c=Qd(),d=b.ea*b.G,e=b.D.Ae(),f={},g=0,h=e.length;g<h;g++){var k=e[g];Pb(f,w(k).toString())||(k=k.W().Z(),ae(k,c),Ud(c,d,c),k=b.D.nf(c),k=k.filter(function(b){b=w(b).toString();return b in f?!1:f[b]=!0}),b.C.push(fA(k)))}}}function fA(b){for(var c=b.length,d=[0,0],e=0;e<c;e++){var f=b[e].W().Z();td(d,f)}c=1/c;d[0]*=c;d[1]*=c;d=new Bn(new D(d));d.set("features",b);return d};function gA(b){tn.call(this,{projection:b.projection,resolutions:b.resolutions});this.fa=void 0!==b.crossOrigin?b.crossOrigin:null;this.l=void 0!==b.displayDpi?b.displayDpi:96;this.i=void 0!==b.params?b.params:{};var c;void 0!==b.url?c=ny(b.url,this.i,ra(this.Lm,this)):c=oy;this.Y=c;this.b=void 0!==b.imageLoadFunction?b.imageLoadFunction:zn;this.pa=void 0!==b.hidpi?b.hidpi:!0;this.ea=void 0!==b.metersPerUnit?b.metersPerUnit:1;this.u=void 0!==b.ratio?b.ratio:1;this.xa=void 0!==b.useOverlay?b.useOverlay:
!1;this.g=null;this.T=0}y(gA,tn);l=gA.prototype;l.Km=function(){return this.i};l.pd=function(b,c,d,e){c=un(this,c);d=this.pa?d:1;var f=this.g;if(f&&this.T==this.c&&f.aa()==c&&f.b==d&&Zd(f.J(),b))return f;1!=this.u&&(b=b.slice(),se(b,this.u));e=this.Y(b,[me(b)/c*d,ne(b)/c*d],e);void 0!==e?(f=new ky(b,c,d,this.j,e,this.fa,this.b),C(f,"change",this.C,!1,this)):f=null;this.g=f;this.T=this.c;return f};l.Jm=function(){return this.b};l.Nm=function(b){Zb(this.i,b);this.s()};
l.Lm=function(b,c,d,e){var f=oe(d),g=this.ea,h=me(d);d=ne(d);var k=e[0],m=e[1],n=.0254/this.l;e={OPERATION:this.xa?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol.source.ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.l,SETDISPLAYWIDTH:Math.round(e[0]),SETDISPLAYHEIGHT:Math.round(e[1]),SETVIEWSCALE:m*h>k*d?h*g/(k*n):d*g/(m*n),SETVIEWCENTERX:f[0],SETVIEWCENTERY:f[1]};Zb(e,c);return uo(wo([b],e))};l.Mm=function(b){this.g=null;this.b=b;this.s()};function hA(b){var c=void 0!==b.attributions?b.attributions:null,d=b.imageExtent,e,f;void 0!==b.imageSize&&(e=ne(d)/b.imageSize[1],f=[e]);var g=void 0!==b.crossOrigin?b.crossOrigin:null,h=void 0!==b.imageLoadFunction?b.imageLoadFunction:zn;tn.call(this,{attributions:c,logo:b.logo,projection:He(b.projection),resolutions:f});this.b=new ky(d,e,1,c,b.url,g,h);C(this.b,"change",this.C,!1,this)}y(hA,tn);hA.prototype.pd=function(b){return re(b,this.b.J())?this.b:null};function iA(b){b=b||{};tn.call(this,{attributions:b.attributions,logo:b.logo,projection:b.projection,resolutions:b.resolutions});this.pa=void 0!==b.crossOrigin?b.crossOrigin:null;this.i=b.url;this.T=void 0!==b.imageLoadFunction?b.imageLoadFunction:zn;this.g=b.params;this.u=!0;jA(this);this.fa=b.serverType;this.xa=void 0!==b.hidpi?b.hidpi:!0;this.b=null;this.Y=[0,0];this.ea=0;this.l=void 0!==b.ratio?b.ratio:1.5}y(iA,tn);var kA=[101,101];l=iA.prototype;
l.Tm=function(b,c,d,e){if(void 0!==this.i){var f=pe(b,c,0,kA),g={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.g.LAYERS};Zb(g,this.g,e);e=Math.floor((f[3]-b[1])/c);g[this.u?"I":"X"]=Math.floor((b[0]-f[0])/c);g[this.u?"J":"Y"]=e;return lA(this,f,kA,1,He(d),g)}};l.Vm=function(){return this.g};
l.pd=function(b,c,d,e){if(void 0===this.i)return null;c=un(this,c);1==d||this.xa&&void 0!==this.fa||(d=1);b=b.slice();var f=(b[0]+b[2])/2,g=(b[1]+b[3])/2,h=c/d,k=me(b)/h,h=ne(b)/h,m=this.b;if(m&&this.ea==this.c&&m.aa()==c&&m.b==d&&Zd(m.J(),b))return m;if(1!=this.l){var m=this.l*me(b)/2,n=this.l*ne(b)/2;b[0]=f-m;b[1]=g-n;b[2]=f+m;b[3]=g+n}f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Zb(f,this.g);this.Y[0]=Math.ceil(k*this.l);this.Y[1]=Math.ceil(h*this.l);e=lA(this,
b,this.Y,d,e,f);this.b=new ky(b,c,d,this.j,e,this.pa,this.T);this.ea=this.c;C(this.b,"change",this.C,!1,this);return this.b};l.Um=function(){return this.T};
function lA(b,c,d,e,f,g){g[b.u?"CRS":"SRS"]=f.a;"STYLES"in b.g||(g.STYLES=new String(""));if(1!=e)switch(b.fa){case "geoserver":e=90*e+.5|0;g.FORMAT_OPTIONS="FORMAT_OPTIONS"in g?g.FORMAT_OPTIONS+(";dpi:"+e):"dpi:"+e;break;case "mapserver":g.MAP_RESOLUTION=90*e;break;case "carmentaserver":case "qgis":g.DPI=90*e}g.WIDTH=d[0];g.HEIGHT=d[1];d=f.g;var h;b.u&&"ne"==d.substr(0,2)?h=[c[1],c[0],c[3],c[2]]:h=c;g.BBOX=h.join(",");return uo(wo([b.i],g))}l.Wm=function(){return this.i};
l.Xm=function(b){this.b=null;this.T=b;this.s()};l.Ym=function(b){b!=this.i&&(this.i=b,this.b=null,this.s())};l.Zm=function(b){Zb(this.g,b);jA(this);this.b=null;this.s()};function jA(b){b.u=0<=Pa(Ub(b.g,"VERSION","1.3.0"),"1.3")};function mA(b){var c=void 0!==b.projection?b.projection:"EPSG:3857",d=void 0!==b.tileGrid?b.tileGrid:Wh({extent:Uh(c),maxZoom:b.maxZoom,tileSize:b.tileSize});Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:c,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileGrid:d,tileLoadFunction:b.tileLoadFunction,tilePixelRatio:b.tilePixelRatio,tileUrlFunction:b.tileUrlFunction,url:b.url,urls:b.urls,wrapX:void 0!==b.wrapX?b.wrapX:!0})}y(mA,Y);function nA(b){b=b||{};var c;void 0!==b.attributions?c=b.attributions:c=[oA];mA.call(this,{attributions:c,crossOrigin:void 0!==b.crossOrigin?b.crossOrigin:"anonymous",opaque:!0,maxZoom:void 0!==b.maxZoom?b.maxZoom:19,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileLoadFunction:b.tileLoadFunction,url:void 0!==b.url?b.url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",wrapX:b.wrapX})}y(nA,mA);var oA=new og({html:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});function pA(b){b=b||{};var c=qA[b.layer];this.g=b.layer;mA.call(this,{attributions:c.attributions,crossOrigin:"anonymous",logo:"https://developer.mapquest.com/content/osm/mq_logo.png",maxZoom:c.maxZoom,reprojectionErrorThreshold:b.reprojectionErrorThreshold,opaque:!0,tileLoadFunction:b.tileLoadFunction,url:void 0!==b.url?b.url:"https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/"+this.g+"/{z}/{x}/{y}.jpg"})}y(pA,mA);
var rA=new og({html:'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}),qA={osm:{maxZoom:19,attributions:[rA,oA]},sat:{maxZoom:18,attributions:[rA,new og({html:"Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]},hyb:{maxZoom:18,attributions:[rA,oA]}};pA.prototype.l=function(){return this.g};(function(){var b={},c={ka:b};(function(d){if("object"===typeof b&&"undefined"!==typeof c)c.ka=d();else{var e;"undefined"!==typeof window?e=window:"undefined"!==typeof global?e=global:"undefined"!==typeof self?e=self:e=this;e.Ip=d()}})(function(){return function e(b,c,h){function k(n,q){if(!c[n]){if(!b[n]){var r="function"==typeof require&&require;if(!q&&r)return r(n,!0);if(m)return m(n,!0);r=Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r;}r=c[n]={ka:{}};b[n][0].call(r.ka,function(c){var e=
b[n][1][c];return k(e?e:c)},r,r.ka,e,b,c,h)}return c[n].ka}for(var m="function"==typeof require&&require,n=0;n<h.length;n++)k(h[n]);return k}({1:[function(b,c,g){b=b("./processor");g.Qi=b},{"./processor":2}],2:[function(b,c){function g(b){return function(c){var e=c.buffers,f=c.meta,g=c.width,h=c.height,k=e.length,m=e[0].byteLength,A;if(c.imageOps){m=Array(k);for(A=0;A<k;++A)m[A]=new ImageData(new Uint8ClampedArray(e[A]),g,h);g=b(m,f).data}else{g=new Uint8ClampedArray(m);h=Array(k);c=Array(k);for(A=
0;A<k;++A)h[A]=new Uint8ClampedArray(e[A]),c[A]=[0,0,0,0];for(e=0;e<m;e+=4){for(A=0;A<k;++A){var v=h[A];c[A][0]=v[e];c[A][1]=v[e+1];c[A][2]=v[e+2];c[A][3]=v[e+3]}A=b(c,f);g[e]=A[0];g[e+1]=A[1];g[e+2]=A[2];g[e+3]=A[3]}}return g.buffer}}function h(b,c){var e=Object.keys(b.lib||{}).map(function(c){return"var "+c+" = "+b.lib[c].toString()+";"}).concat(["var __minion__ = ("+g.toString()+")(",b.operation.toString(),");",'self.addEventListener("message", function(__event__) {',"var buffer = __minion__(__event__.data);",
"self.postMessage({buffer: buffer, meta: __event__.data.meta}, [buffer]);","});"]),e=URL.createObjectURL(new Blob(e,{type:"text/javascript"})),e=new Worker(e);e.addEventListener("message",c);return e}function k(b,c){var e=g(b.operation);return{postMessage:function(b){setTimeout(function(){c({data:{buffer:e(b),se:b.se}})},0)}}}function m(b){this.af=!!b.bl;var c;0===b.threads?c=0:this.af?c=1:c=b.threads||1;var e=[];if(c)for(var f=0;f<c;++f)e[f]=h(b,this.pg.bind(this,f));else e[0]=k(b,this.pg.bind(this,
0));this.Vd=e;this.Yc=[];this.ej=b.lo||Infinity;this.Td=0;this.Cc={};this.bf=null}m.prototype.ko=function(b,c,e){this.bj({qc:b,se:c,$c:e});this.mg()};m.prototype.bj=function(b){for(this.Yc.push(b);this.Yc.length>this.ej;)this.Yc.shift().$c(null,null)};m.prototype.mg=function(){if(0===this.Td&&0<this.Yc.length){var b=this.bf=this.Yc.shift(),c=b.qc[0].width,e=b.qc[0].height,f=b.qc.map(function(b){return b.data.buffer}),g=this.Vd.length;this.Td=g;if(1===g)this.Vd[0].postMessage({buffers:f,meta:b.se,
imageOps:this.af,width:c,height:e},f);else for(var h=4*Math.ceil(b.qc[0].data.length/4/g),k=0;k<g;++k){for(var m=k*h,A=[],v=0,O=f.length;v<O;++v)A.push(f[k].slice(m,m+h));this.Vd[k].postMessage({buffers:A,meta:b.se,imageOps:this.af,width:c,height:e},A)}}};m.prototype.pg=function(b,c){this.Ep||(this.Cc[b]=c.data,--this.Td,0===this.Td&&this.fj())};m.prototype.fj=function(){var b=this.bf,c=this.Vd.length,e,f;if(1===c)e=new Uint8ClampedArray(this.Cc[0].buffer),f=this.Cc[0].meta;else{var g=b.qc[0].data.length;
e=new Uint8ClampedArray(g);f=Array(g);for(var g=4*Math.ceil(g/4/c),h=0;h<c;++h){var k=h*g;e.set(new Uint8ClampedArray(this.Cc[h].buffer),k);f[h]=this.Cc[h].meta}}this.bf=null;this.Cc={};b.$c(null,new ImageData(e,b.qc[0].width,b.qc[0].height),f);this.mg()};c.ka=m},{}]},{},[1])(1)});Jp=c.ka})();function sA(b){this.T=null;this.xa=void 0!==b.operationType?b.operationType:"pixel";this.gb=void 0!==b.threads?b.threads:1;this.b=tA(b.sources);for(var c=0,d=this.b.length;c<d;++c)C(this.b[c],"change",this.s,!1,this);this.g=Yi();this.fa=new Tk(function(){return 1},ra(this.s,this));for(var c=uA(this.b),d={},e=0,f=c.length;e<f;++e)d[w(c[e].layer)]=c[e];this.i=this.l=null;this.ea={animate:!1,attributions:{},coordinateToPixelMatrix:Fd(),extent:null,focus:null,index:0,layerStates:d,layerStatesArray:c,
logos:{},pixelRatio:1,pixelToCoordinateMatrix:Fd(),postRenderFunctions:[],size:[0,0],skippedFeatureUids:{},tileQueue:this.fa,time:Date.now(),usedTiles:{},viewState:{rotation:0},viewHints:[],wantedTiles:{}};tn.call(this,{});void 0!==b.operation&&this.u(b.operation,b.lib)}y(sA,tn);sA.prototype.u=function(b,c){this.T=new Jp.Qi({operation:b,bl:"image"===this.xa,lo:1,lib:c,threads:this.gb});this.s()};function vA(b,c,d){var e=b.l;return!e||b.c!==e.No||d!==e.resolution||!de(c,e.extent)}
sA.prototype.D=function(b,c,d,e){d=!0;for(var f,g=0,h=this.b.length;g<h;++g)if(f=this.b[g].a.ga(),"ready"!==f.v){d=!1;break}if(!d)return null;if(!vA(this,b,c))return this.i;d=this.g.canvas;f=Math.round(me(b)/c);g=Math.round(ne(b)/c);if(f!==d.width||g!==d.height)d.width=f,d.height=g;f=Wb(this.ea);f.viewState=Wb(f.viewState);var g=oe(b),h=Math.round(me(b)/c),k=Math.round(ne(b)/c);f.extent=b;f.focus=oe(b);f.size[0]=h;f.size[1]=k;h=f.viewState;h.center=g;h.projection=e;h.resolution=c;this.i=e=new jn(b,
c,1,this.j,d,this.Y.bind(this,f));this.l={extent:b,resolution:c,No:this.c};return e};
sA.prototype.Y=function(b,c){for(var d=this.b.length,e=Array(d),f=0;f<d;++f){var g;var h=this.b[f],k=b;h.Cd(k,b.layerStatesArray[f]);if(g=h.Bd()){var h=h.of(),m=Math.round(h[12]),n=Math.round(h[13]),p=k.size[0],k=k.size[1];if(g instanceof Image){if(wA){var q=wA.canvas;q.width!==p||q.height!==k?wA=Yi(p,k):wA.clearRect(0,0,p,k)}else wA=Yi(p,k);wA.drawImage(g,m,n,Math.round(g.width*h[0]),Math.round(g.height*h[5]));g=wA.getImageData(0,0,p,k)}else g=g.getContext("2d").getImageData(-m,-n,p,k)}else g=null;
if(g)e[f]=g;else return}d={};this.o(new xA(yA,b,d));this.T.ko(e,d,this.pa.bind(this,b,c));Uk(b.tileQueue,16,16)};sA.prototype.pa=function(b,c,d,e,f){d?c(d):e&&(this.o(new xA(zA,b,f)),vA(this,b.extent,b.viewState.resolution/b.pixelRatio)||this.g.putImageData(e,0,0),c(null))};var wA=null;function uA(b){return b.map(function(b){return kk(b.a)})}
function tA(b){for(var c=b.length,d=Array(c),e=0;e<c;++e){var f=e,g=b[e],h=null;g instanceof Xh?(g=new F({source:g}),h=new $p(g)):g instanceof tn&&(g=new am({source:g}),h=new Zp(g));d[f]=h}return d}function xA(b,c,d){xc.call(this,b);this.extent=c.extent;this.resolution=c.viewState.resolution/c.pixelRatio;this.data=d}y(xA,xc);var yA="beforeoperations",zA="afteroperations";var AA={terrain:{nb:"jpg",opaque:!0},"terrain-background":{nb:"jpg",opaque:!0},"terrain-labels":{nb:"png",opaque:!1},"terrain-lines":{nb:"png",opaque:!1},"toner-background":{nb:"png",opaque:!0},toner:{nb:"png",opaque:!0},"toner-hybrid":{nb:"png",opaque:!1},"toner-labels":{nb:"png",opaque:!1},"toner-lines":{nb:"png",opaque:!1},"toner-lite":{nb:"png",opaque:!0},watercolor:{nb:"jpg",opaque:!0}},BA={terrain:{minZoom:4,maxZoom:18},toner:{minZoom:0,maxZoom:20},watercolor:{minZoom:3,maxZoom:16}};
function CA(b){var c=b.layer.indexOf("-"),c=-1==c?b.layer:b.layer.slice(0,c),d=AA[b.layer];mA.call(this,{attributions:DA,crossOrigin:"anonymous",maxZoom:BA[c].maxZoom,opaque:d.opaque,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileLoadFunction:b.tileLoadFunction,url:void 0!==b.url?b.url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/"+b.layer+"/{z}/{x}/{y}."+d.nb})}y(CA,mA);
var DA=[new og({html:'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}),oA];function EA(b){b=b||{};var c=void 0!==b.params?b.params:{};Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:b.projection,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction,tileUrlFunction:ra(this.G,this),url:b.url,urls:b.urls,wrapX:void 0!==b.wrapX?b.wrapX:!0});this.g=c;this.l=Qd()}y(EA,Y);EA.prototype.C=function(){return this.g};
EA.prototype.Nb=function(b,c,d){b=EA.ca.Nb.call(this,b,c,d);return 1==c?b:pd(b,c,this.b)};
EA.prototype.G=function(b,c,d){var e=this.tileGrid;e||(e=this.ib(d));if(!(e.a.length<=b[0])){var f=e.Aa(b,this.l),g=qd(e.Ha(b[0]),this.b);1!=c&&(g=pd(g,c,this.b));e={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};Zb(e,this.g);var h=this.urls;h?(d=d.a.split(":").pop(),e.SIZE=g[0]+","+g[1],e.BBOX=f.join(","),e.BBOXSR=d,e.IMAGESR=d,e.DPI=Math.round(90*c),b=1==h.length?h[0]:h[rd((b[1]<<b[0])+b[2],h.length)],za(b,"/")||(b+="/"),za(b,"MapServer/")?b+="export":za(b,"ImageServer/")&&(b+="exportImage"),b=uo(wo([b],
e))):b=void 0;return b}};EA.prototype.Y=function(b){Zb(this.g,b);this.s()};function FA(b,c,d){Eh.call(this,b,2);this.g=c;this.b=d;this.c={}}y(FA,Eh);FA.prototype.Ua=function(b){b=void 0!==b?w(b):-1;if(b in this.c)return this.c[b];var c=this.g,d=Yi(c[0],c[1]);d.strokeStyle="black";d.strokeRect(.5,.5,c[0]+.5,c[1]+.5);d.fillStyle="black";d.textAlign="center";d.textBaseline="middle";d.font="24px sans-serif";d.fillText(this.b,c[0]/2,c[1]/2);return this.c[b]=d.canvas};
function GA(b){Xh.call(this,{opaque:!1,projection:b.projection,tileGrid:b.tileGrid,wrapX:void 0!==b.wrapX?b.wrapX:!0})}y(GA,Xh);GA.prototype.Mb=function(b,c,d){var e=this.hb(b,c,d);if(Ah(this.a,e))return this.a.get(e);var f=qd(this.tileGrid.Ha(b));b=[b,c,d];c=(c=Zh(this,b))?hg(Zh(this,c)):"";f=new FA(b,f,c);this.a.set(e,f);return f};function HA(b){Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,projection:He("EPSG:3857"),reprojectionErrorThreshold:b.reprojectionErrorThreshold,state:"loading",tileLoadFunction:b.tileLoadFunction,wrapX:void 0!==b.wrapX?b.wrapX:!0});Wz(new Uz(b.url),void 0,ra(this.l,this),ra(this.g,this))}y(HA,Y);
HA.prototype.l=function(b){var c=He("EPSG:4326"),d=this.f,e;void 0!==b.bounds&&(e=te(b.bounds,Le(c,d)));var f=b.minzoom||0,g=b.maxzoom||22;this.tileGrid=d=Wh({extent:Uh(d),maxZoom:g,minZoom:f});this.tileUrlFunction=dq(b.tiles,d);if(void 0!==b.attribution&&!this.j){c=void 0!==e?e:c.J();e={};for(var h;f<=g;++f)h=f.toString(),e[h]=[Nh(d,c,f)];this.na([new og({html:b.attribution,tileRanges:e})])}Ih(this,"ready")};HA.prototype.g=function(){Ih(this,"error")};function IA(b){Xh.call(this,{projection:He("EPSG:3857"),state:"loading"});this.l=void 0!==b.preemptive?b.preemptive:!0;this.g=fq;this.i=void 0;Wz(new Uz(b.url),void 0,ra(this.an,this))}y(IA,Xh);l=IA.prototype;l.lk=function(){return this.i};l.yj=function(b,c,d,e,f){this.tileGrid?(c=this.tileGrid.he(b,c),JA(this.Mb(c[0],c[1],c[2],1,this.f),b,d,e,f)):!0===f?wi(function(){d.call(e,null)}):d.call(e,null)};
l.an=function(b){var c=He("EPSG:4326"),d=this.f,e;void 0!==b.bounds&&(e=te(b.bounds,Le(c,d)));var f=b.minzoom||0,g=b.maxzoom||22;this.tileGrid=d=Wh({extent:Uh(d),maxZoom:g,minZoom:f});this.i=b.template;var h=b.grids;if(h){this.g=dq(h,d);if(void 0!==b.attribution){c=void 0!==e?e:c.J();for(e={};f<=g;++f)h=f.toString(),e[h]=[Nh(d,c,f)];this.na([new og({html:b.attribution,tileRanges:e})])}Ih(this,"ready")}else Ih(this,"error")};
l.Mb=function(b,c,d,e,f){var g=this.hb(b,c,d);if(Ah(this.a,g))return this.a.get(g);b=[b,c,d];c=Zh(this,b,f);e=this.g(c,e,f);e=new KA(b,void 0!==e?0:4,void 0!==e?e:"",this.tileGrid.Aa(b),this.l);this.a.set(g,e);return e};l.eg=function(b,c,d){b=this.hb(b,c,d);Ah(this.a,b)&&this.a.get(b)};function KA(b,c,d,e,f){Eh.call(this,b,c);this.i=d;this.c=e;this.l=f;this.j=this.g=this.b=null}y(KA,Eh);l=KA.prototype;l.Ua=function(){return null};
function LA(b,c){if(!b.b||!b.g||!b.j)return null;var d=b.b[Math.floor((1-(c[1]-b.c[1])/(b.c[3]-b.c[1]))*b.b.length)];if(!ia(d))return null;d=d.charCodeAt(Math.floor((c[0]-b.c[0])/(b.c[2]-b.c[0])*d.length));93<=d&&d--;35<=d&&d--;d-=32;return d in b.g?b.j[b.g[d]]:null}function JA(b,c,d,e,f){0==b.state&&!0===f?(Zc(b,"change",function(){d.call(e,LA(this,c))},!1,b),MA(b)):!0===f?wi(function(){d.call(e,LA(this,c))},b):d.call(e,LA(b,c))}l.tb=function(){return this.i};l.zk=function(){this.state=3;Fh(this)};
l.$m=function(b){this.b=b.grid;this.g=b.keys;this.j=b.data;this.state=4;Fh(this)};function MA(b){0==b.state&&(b.state=1,Wz(new Uz(b.i),void 0,ra(b.$m,b),ra(b.zk,b)))}l.load=function(){this.l&&MA(this)};function NA(b){b=b||{};var c=void 0!==b.params?b.params:{};Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,opaque:!Ub(c,"TRANSPARENT",!0),projection:b.projection,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileGrid:b.tileGrid,tileLoadFunction:b.tileLoadFunction,tileUrlFunction:ra(this.dn,this),url:b.url,urls:b.urls,wrapX:void 0!==b.wrapX?b.wrapX:!0});this.C=void 0!==b.gutter?b.gutter:0;this.g=c;this.l=!0;this.G=b.serverType;this.ea=void 0!==b.hidpi?b.hidpi:
!0;this.Y="";OA(this);this.fa=Qd();PA(this)}y(NA,Y);l=NA.prototype;
l.bn=function(b,c,d,e){d=He(d);var f=this.tileGrid;f||(f=this.ib(d));c=f.he(b,c);if(!(f.a.length<=c[0])){var g=f.aa(c[0]),h=f.Aa(c,this.fa),f=qd(f.Ha(c[0]),this.b),k=this.C;0!==k&&(f=od(f,k,this.b),h=Ud(h,g*k,h));k={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetFeatureInfo",FORMAT:"image/png",TRANSPARENT:!0,QUERY_LAYERS:this.g.LAYERS};Zb(k,this.g,e);e=Math.floor((h[3]-b[1])/g);k[this.l?"I":"X"]=Math.floor((b[0]-h[0])/g);k[this.l?"J":"Y"]=e;return QA(this,c,f,h,1,d,k)}};l.ce=function(){return this.C};
l.hb=function(b,c,d){return this.Y+NA.ca.hb.call(this,b,c,d)};l.cn=function(){return this.g};
function QA(b,c,d,e,f,g,h){var k=b.urls;if(k){h.WIDTH=d[0];h.HEIGHT=d[1];h[b.l?"CRS":"SRS"]=g.a;"STYLES"in b.g||(h.STYLES=new String(""));if(1!=f)switch(b.G){case "geoserver":d=90*f+.5|0;h.FORMAT_OPTIONS="FORMAT_OPTIONS"in h?h.FORMAT_OPTIONS+(";dpi:"+d):"dpi:"+d;break;case "mapserver":h.MAP_RESOLUTION=90*f;break;case "carmentaserver":case "qgis":h.DPI=90*f}g=g.g;b.l&&"ne"==g.substr(0,2)&&(b=e[0],e[0]=e[1],e[1]=b,b=e[2],e[2]=e[3],e[3]=b);h.BBOX=e.join(",");return uo(wo([1==k.length?k[0]:k[rd((c[1]<<
c[0])+c[2],k.length)]],h))}}l.Nb=function(b,c,d){b=NA.ca.Nb.call(this,b,c,d);return 1!=c&&this.ea&&void 0!==this.G?pd(b,c,this.b):b};function OA(b){var c=0,d=[];if(b.urls){var e,f;e=0;for(f=b.urls.length;e<f;++e)d[c++]=b.urls[e]}for(var g in b.g)d[c++]=g+"-"+b.g[g];b.Y=d.join("#")}
l.dn=function(b,c,d){var e=this.tileGrid;e||(e=this.ib(d));if(!(e.a.length<=b[0])){1==c||this.ea&&void 0!==this.G||(c=1);var f=e.aa(b[0]),g=e.Aa(b,this.fa),e=qd(e.Ha(b[0]),this.b),h=this.C;0!==h&&(e=od(e,h,this.b),g=Ud(g,f*h,g));1!=c&&(e=pd(e,c,this.b));f={SERVICE:"WMS",VERSION:"1.3.0",REQUEST:"GetMap",FORMAT:"image/png",TRANSPARENT:!0};Zb(f,this.g);return QA(this,b,e,g,c,d,f)}};l.en=function(b){Zb(this.g,b);OA(this);PA(this);this.s()};function PA(b){b.l=0<=Pa(Ub(b.g,"VERSION","1.3.0"),"1.3")};function RA(b){this.i=b.matrixIds;Jh.call(this,{extent:b.extent,origin:b.origin,origins:b.origins,resolutions:b.resolutions,tileSize:b.tileSize,tileSizes:b.tileSizes,sizes:b.sizes})}y(RA,Jh);RA.prototype.B=function(){return this.i};
function SA(b,c){var d=[],e=[],f=[],g=[],h=[],k;k=He(b.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var m=k.Jc(),n="ne"==k.g.substr(0,2);qb(b.TileMatrix,function(b,c){return c.ScaleDenominator-b.ScaleDenominator});b.TileMatrix.forEach(function(b){e.push(b.Identifier);var c=2.8E-4*b.ScaleDenominator/m,k=b.TileWidth,t=b.TileHeight;n?f.push([b.TopLeftCorner[1],b.TopLeftCorner[0]]):f.push(b.TopLeftCorner);d.push(c);g.push(k==t?k:[k,t]);h.push([b.MatrixWidth,-b.MatrixHeight])});
return new RA({extent:c,origins:f,resolutions:d,matrixIds:e,tileSizes:g,sizes:h})};function Z(b){function c(b){b="KVP"==e?uo(wo([b],g)):b.replace(/\{(\w+?)\}/g,function(b,c){return c.toLowerCase()in g?g[c.toLowerCase()]:b});return function(c){if(c){var d={TileMatrix:f.i[c[0]],TileCol:c[1],TileRow:-c[2]-1};Zb(d,h);c=b;return c="KVP"==e?uo(wo([c],d)):c.replace(/\{(\w+?)\}/g,function(b,c){return d[c]})}}}this.fa=void 0!==b.version?b.version:"1.0.0";this.G=void 0!==b.format?b.format:"image/jpeg";this.g=void 0!==b.dimensions?b.dimensions:{};this.C="";TA(this);this.Y=b.layer;this.l=b.matrixSet;
this.ea=b.style;var d=b.urls;void 0===d&&void 0!==b.url&&(d=gq(b.url));var e=this.qa=void 0!==b.requestEncoding?b.requestEncoding:"KVP",f=b.tileGrid,g={layer:this.Y,style:this.ea,tilematrixset:this.l};"KVP"==e&&Zb(g,{Service:"WMTS",Request:"GetTile",Version:this.fa,Format:this.G});var h=this.g,k=d&&0<d.length?eq(d.map(c)):fq;Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,projection:b.projection,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileClass:b.tileClass,
tileGrid:f,tileLoadFunction:b.tileLoadFunction,tilePixelRatio:b.tilePixelRatio,tileUrlFunction:k,urls:d,wrapX:void 0!==b.wrapX?b.wrapX:!1})}y(Z,Y);l=Z.prototype;l.Kj=function(){return this.g};l.fn=function(){return this.G};l.hb=function(b,c,d){return this.C+Z.ca.hb.call(this,b,c,d)};l.gn=function(){return this.Y};l.Xj=function(){return this.l};l.jk=function(){return this.qa};l.hn=function(){return this.ea};l.qk=function(){return this.fa};
function TA(b){var c=0,d=[],e;for(e in b.g)d[c++]=e+"-"+b.g[e];b.C=d.join("/")}l.kp=function(b){Zb(this.g,b);TA(this);this.s()};function UA(b){b=b||{};var c=b.size,d=c[0],e=c[1],f=[],g=256;switch(void 0!==b.tierSizeCalculation?b.tierSizeCalculation:"default"){case "default":for(;d>g||e>g;)f.push([Math.ceil(d/g),Math.ceil(e/g)]),g+=g;break;case "truncated":for(;d>g||e>g;)f.push([Math.ceil(d/g),Math.ceil(e/g)]),d>>=1,e>>=1}f.push([1,1]);f.reverse();for(var g=[1],h=[0],e=1,d=f.length;e<d;e++)g.push(1<<e),h.push(f[e-1][0]*f[e-1][1]+h[e-1]);g.reverse();var c=[0,-c[1],c[0],0],c=new Jh({extent:c,origin:je(c),resolutions:g}),k=b.url;
Y.call(this,{attributions:b.attributions,crossOrigin:b.crossOrigin,logo:b.logo,reprojectionErrorThreshold:b.reprojectionErrorThreshold,tileClass:VA,tileGrid:c,tileUrlFunction:function(b){if(b){var c=b[0],d=b[1];b=-b[2]-1;return k+"TileGroup"+((d+b*f[c][0]+h[c])/256|0)+"/"+c+"-"+d+"-"+b+".jpg"}}})}y(UA,Y);function VA(b,c,d,e,f){ly.call(this,b,c,d,e,f);this.g={}}y(VA,ly);
VA.prototype.Ua=function(b){var c=void 0!==b?w(b).toString():"";if(c in this.g)return this.g[c];b=VA.ca.Ua.call(this,b);if(2==this.state){if(256==b.width&&256==b.height)return this.g[c]=b;var d=Yi(256,256);d.drawImage(b,0,0);return this.g[c]=d.canvas}return b};function WA(b){b=b||{};this.c=void 0!==b.initialSize?b.initialSize:256;this.b=void 0!==b.maxSize?b.maxSize:void 0!==ua?ua:2048;this.a=void 0!==b.space?b.space:1;this.g=[new XA(this.c,this.a)];this.f=this.c;this.j=[new XA(this.f,this.a)]}WA.prototype.add=function(b,c,d,e,f,g){if(c+this.a>this.b||d+this.a>this.b)return null;e=YA(this,!1,b,c,d,e,g);if(!e)return null;b=YA(this,!0,b,c,d,void 0!==f?f:xe,g);return{offsetX:e.offsetX,offsetY:e.offsetY,image:e.image,Sg:b.image}};
function YA(b,c,d,e,f,g,h){var k=c?b.j:b.g,m,n,p;n=0;for(p=k.length;n<p;++n){m=k[n];if(m=m.add(d,e,f,g,h))return m;m||n!==p-1||(c?(m=Math.min(2*b.f,b.b),b.f=m):(m=Math.min(2*b.c,b.b),b.c=m),m=new XA(m,b.a),k.push(m),++p)}}function XA(b,c){this.a=c;this.c=[{x:0,y:0,width:b,height:b}];this.f={};this.b=Mg("CANVAS");this.b.width=b;this.b.height=b;this.g=this.b.getContext("2d")}XA.prototype.get=function(b){return Ub(this.f,b,null)};
XA.prototype.add=function(b,c,d,e,f){var g,h,k;h=0;for(k=this.c.length;h<k;++h)if(g=this.c[h],g.width>=c+this.a&&g.height>=d+this.a)return k={offsetX:g.x+this.a,offsetY:g.y+this.a,image:this.b},this.f[b]=k,e.call(f,this.g,g.x+this.a,g.y+this.a),b=h,c=c+this.a,d=d+this.a,f=e=void 0,g.width-c>g.height-d?(e={x:g.x+c,y:g.y,width:g.width-c,height:g.height},f={x:g.x,y:g.y+d,width:c,height:g.height-d},ZA(this,b,e,f)):(e={x:g.x+c,y:g.y,width:g.width-c,height:d},f={x:g.x,y:g.y+d,width:g.width,height:g.height-
d},ZA(this,b,e,f)),k;return null};function ZA(b,c,d,e){c=[c,1];0<d.width&&0<d.height&&c.push(d);0<e.width&&0<e.height&&c.push(e);b.c.splice.apply(b.c,c)};function $A(b){this.D=this.f=this.g=null;this.B=void 0!==b.fill?b.fill:null;this.S=[0,0];this.a=b.points;this.b=void 0!==b.radius?b.radius:b.radius1;this.j=void 0!==b.radius2?b.radius2:this.b;this.l=void 0!==b.angle?b.angle:0;this.c=void 0!==b.stroke?b.stroke:null;this.oa=this.U=this.ia=null;var c=b.atlasManager,d="",e="",f=0,g=null,h,k=0;this.c&&(h=xg(this.c.a),k=this.c.c,void 0===k&&(k=1),g=this.c.b,gj||(g=null),e=this.c.g,void 0===e&&(e="round"),d=this.c.f,void 0===d&&(d="round"),f=this.c.j,void 0===
f&&(f=10));var m=2*(this.b+k)+1,d={strokeStyle:h,Kd:k,size:m,lineCap:d,lineDash:g,lineJoin:e,miterLimit:f};if(void 0===c){this.f=Mg("CANVAS");this.f.height=m;this.f.width=m;var c=m=this.f.width,n=this.f.getContext("2d");this.zh(d,n,0,0);this.B?this.D=this.f:(n=this.D=Mg("CANVAS"),n.height=d.size,n.width=d.size,n=n.getContext("2d"),this.yh(d,n,0,0))}else m=Math.round(m),(e=!this.B)&&(n=ra(this.yh,this,d)),f=this.Ib(),n=c.add(f,m,m,ra(this.zh,this,d),n),this.f=n.image,this.S=[n.offsetX,n.offsetY],c=
n.image.width,this.D=e?n.Sg:this.f;this.ia=[m/2,m/2];this.U=[m,m];this.oa=[c,c];Ek.call(this,{opacity:1,rotateWithView:!1,rotation:void 0!==b.rotation?b.rotation:0,scale:1,snapToPixel:void 0!==b.snapToPixel?b.snapToPixel:!0})}y($A,Ek);l=$A.prototype;l.Xb=function(){return this.ia};l.nn=function(){return this.l};l.pn=function(){return this.B};l.Be=function(){return this.D};l.fc=function(){return this.f};l.qd=function(){return this.oa};l.Ed=function(){return 2};l.Ca=function(){return this.S};l.qn=function(){return this.a};
l.rn=function(){return this.b};l.ik=function(){return this.j};l.Bb=function(){return this.U};l.sn=function(){return this.c};l.xf=wa;l.load=wa;l.dg=wa;
l.zh=function(b,c,d,e){var f;c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();this.j!==this.b&&(this.a*=2);for(d=0;d<=this.a;d++)e=2*d*Math.PI/this.a-Math.PI/2+this.l,f=0===d%2?this.b:this.j,c.lineTo(b.size/2+f*Math.cos(e),b.size/2+f*Math.sin(e));this.B&&(c.fillStyle=xg(this.B.a),c.fill());this.c&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Kd,b.lineDash&&c.setLineDash(b.lineDash),c.lineCap=b.lineCap,c.lineJoin=b.lineJoin,c.miterLimit=b.miterLimit,c.stroke());c.closePath()};
l.yh=function(b,c,d,e){c.setTransform(1,0,0,1,0,0);c.translate(d,e);c.beginPath();this.j!==this.b&&(this.a*=2);var f;for(d=0;d<=this.a;d++)f=2*d*Math.PI/this.a-Math.PI/2+this.l,e=0===d%2?this.b:this.j,c.lineTo(b.size/2+e*Math.cos(f),b.size/2+e*Math.sin(f));c.fillStyle=bm;c.fill();this.c&&(c.strokeStyle=b.strokeStyle,c.lineWidth=b.Kd,b.lineDash&&c.setLineDash(b.lineDash),c.stroke());c.closePath()};
l.Ib=function(){var b=this.c?this.c.Ib():"-",c=this.B?this.B.Ib():"-";this.g&&b==this.g[1]&&c==this.g[2]&&this.b==this.g[3]&&this.j==this.g[4]&&this.l==this.g[5]&&this.a==this.g[6]||(this.g=["r"+b+c+(void 0!==this.b?this.b.toString():"-")+(void 0!==this.j?this.j.toString():"-")+(void 0!==this.l?this.l.toString():"-")+(void 0!==this.a?this.a.toString():"-"),b,c,this.b,this.j,this.l,this.a]);return this.g[0]};u("ol.animation.bounce",function(b){var c=b.resolution,d=b.start?b.start:Date.now(),e=void 0!==b.duration?b.duration:1E3,f=b.easing?b.easing:$f;return function(b,h){if(h.time<d)return h.animate=!0,h.viewHints[0]+=1,!0;if(h.time<d+e){var k=f((h.time-d)/e),m=c-h.viewState.resolution;h.animate=!0;h.viewState.resolution+=k*m;h.viewHints[0]+=1;return!0}return!1}},OPENLAYERS);u("ol.animation.pan",ag,OPENLAYERS);u("ol.animation.rotate",bg,OPENLAYERS);u("ol.animation.zoom",cg,OPENLAYERS);
u("ol.Attribution",og,OPENLAYERS);og.prototype.getHTML=og.prototype.b;pg.prototype.element=pg.prototype.element;u("ol.Collection",qg,OPENLAYERS);qg.prototype.clear=qg.prototype.clear;qg.prototype.extend=qg.prototype.yf;qg.prototype.forEach=qg.prototype.forEach;qg.prototype.getArray=qg.prototype.vl;qg.prototype.item=qg.prototype.item;qg.prototype.getLength=qg.prototype.$b;qg.prototype.insertAt=qg.prototype.ne;qg.prototype.pop=qg.prototype.pop;qg.prototype.push=qg.prototype.push;
qg.prototype.remove=qg.prototype.remove;qg.prototype.removeAt=qg.prototype.Vf;qg.prototype.setAt=qg.prototype.Po;u("ol.color.asArray",vg,OPENLAYERS);u("ol.color.asString",xg,OPENLAYERS);u("ol.control.Attribution",ai,OPENLAYERS);u("ol.control.Attribution.render",bi,OPENLAYERS);ai.prototype.getCollapsible=ai.prototype.Ql;ai.prototype.setCollapsible=ai.prototype.Tl;ai.prototype.setCollapsed=ai.prototype.Sl;ai.prototype.getCollapsed=ai.prototype.Pl;u("ol.control.Control",yh,OPENLAYERS);
yh.prototype.getMap=yh.prototype.g;yh.prototype.setMap=yh.prototype.setMap;yh.prototype.setTarget=yh.prototype.f;u("ol.control.defaults",gi,OPENLAYERS);u("ol.control.FullScreen",mi,OPENLAYERS);u("ol.control.Loading",ni,OPENLAYERS);u("ol.control.MousePosition",oi,OPENLAYERS);u("ol.control.MousePosition.render",pi,OPENLAYERS);oi.prototype.getCoordinateFormat=oi.prototype.Dg;oi.prototype.getProjection=oi.prototype.eh;oi.prototype.setCoordinateFormat=oi.prototype.Zh;oi.prototype.setProjection=oi.prototype.fh;
u("ol.control.OverviewMap",Ar,OPENLAYERS);u("ol.control.OverviewMap.render",Br,OPENLAYERS);Ar.prototype.getCollapsible=Ar.prototype.Wl;Ar.prototype.setCollapsible=Ar.prototype.Zl;Ar.prototype.setCollapsed=Ar.prototype.Yl;Ar.prototype.getCollapsed=Ar.prototype.Vl;Ar.prototype.getOverviewMap=Ar.prototype.dk;u("ol.control.Rotate",di,OPENLAYERS);u("ol.control.Rotate.render",ei,OPENLAYERS);u("ol.control.ScaleLine",Fr,OPENLAYERS);Fr.prototype.getUnits=Fr.prototype.G;u("ol.control.ScaleLine.render",Gr,OPENLAYERS);
Fr.prototype.setUnits=Fr.prototype.T;u("ol.control.Zoom",fi,OPENLAYERS);u("ol.control.ZoomSlider",Tr,OPENLAYERS);u("ol.control.ZoomSlider.render",Vr,OPENLAYERS);u("ol.control.ZoomToExtent",Zr,OPENLAYERS);u("ol.coordinate.add",td,OPENLAYERS);u("ol.coordinate.createStringXY",function(b){return function(c){return Bd(c,b)}},OPENLAYERS);u("ol.coordinate.format",wd,OPENLAYERS);u("ol.coordinate.rotate",yd,OPENLAYERS);
u("ol.coordinate.toStringHDMS",function(b){return b?vd(b[1],"NS")+" "+vd(b[0],"EW"):""},OPENLAYERS);u("ol.coordinate.toStringXY",Bd,OPENLAYERS);u("ol.DeviceOrientation",$r,OPENLAYERS);$r.prototype.getAlpha=$r.prototype.Ej;$r.prototype.getBeta=$r.prototype.Hj;$r.prototype.getGamma=$r.prototype.Nj;$r.prototype.getHeading=$r.prototype.wl;$r.prototype.getTracking=$r.prototype.Zg;$r.prototype.setTracking=$r.prototype.zf;u("ol.easing.easeIn",Wf,OPENLAYERS);u("ol.easing.easeOut",Xf,OPENLAYERS);
u("ol.easing.inAndOut",Yf,OPENLAYERS);u("ol.easing.linear",Zf,OPENLAYERS);u("ol.easing.upAndDown",$f,OPENLAYERS);u("ol.events.condition.altKeyOnly",function(b){b=b.a;return b.c&&!b.l&&!b.f},OPENLAYERS);u("ol.events.condition.altShiftKeysOnly",cl,OPENLAYERS);u("ol.events.condition.always",we,OPENLAYERS);u("ol.events.condition.click",function(b){return b.type==Zj},OPENLAYERS);u("ol.events.condition.never",ve,OPENLAYERS);u("ol.events.condition.pointerMove",dl,OPENLAYERS);
u("ol.events.condition.singleClick",el,OPENLAYERS);u("ol.events.condition.doubleClick",function(b){return b.type==ak},OPENLAYERS);u("ol.events.condition.noModifierKeys",fl,OPENLAYERS);u("ol.events.condition.platformModifierKeyOnly",function(b){b=b.a;return!b.c&&b.l&&!b.f},OPENLAYERS);u("ol.events.condition.shiftKeyOnly",gl,OPENLAYERS);u("ol.events.condition.targetNotEditable",hl,OPENLAYERS);u("ol.events.condition.mouseOnly",il,OPENLAYERS);u("ol.extent.boundingExtent",Pd,OPENLAYERS);
u("ol.extent.buffer",Ud,OPENLAYERS);u("ol.extent.containsCoordinate",Xd,OPENLAYERS);u("ol.extent.containsExtent",Zd,OPENLAYERS);u("ol.extent.containsXY",Yd,OPENLAYERS);u("ol.extent.createEmpty",Qd,OPENLAYERS);u("ol.extent.equals",de,OPENLAYERS);u("ol.extent.extend",ee,OPENLAYERS);u("ol.extent.getBottomLeft",ge,OPENLAYERS);u("ol.extent.getBottomRight",he,OPENLAYERS);u("ol.extent.getCenter",oe,OPENLAYERS);u("ol.extent.getHeight",ne,OPENLAYERS);u("ol.extent.getIntersection",qe,OPENLAYERS);
u("ol.extent.getSize",function(b){return[b[2]-b[0],b[3]-b[1]]},OPENLAYERS);u("ol.extent.getTopLeft",je,OPENLAYERS);u("ol.extent.getTopRight",ie,OPENLAYERS);u("ol.extent.getWidth",me,OPENLAYERS);u("ol.extent.intersects",re,OPENLAYERS);u("ol.extent.isEmpty",le,OPENLAYERS);u("ol.extent.applyTransform",te,OPENLAYERS);u("ol.Feature",Bn,OPENLAYERS);Bn.prototype.clone=Bn.prototype.clone;Bn.prototype.getGeometry=Bn.prototype.W;Bn.prototype.getId=Bn.prototype.La;Bn.prototype.getGeometryName=Bn.prototype.Pj;
Bn.prototype.getStyle=Bn.prototype.yl;Bn.prototype.getStyleFunction=Bn.prototype.Ob;Bn.prototype.setGeometry=Bn.prototype.Na;Bn.prototype.setStyle=Bn.prototype.Af;Bn.prototype.setId=Bn.prototype.ic;Bn.prototype.setGeometryName=Bn.prototype.vc;u("ol.featureloader.tile",Dp,OPENLAYERS);u("ol.featureloader.xhr",Ep,OPENLAYERS);u("ol.format.EsriJSON",ns,OPENLAYERS);ns.prototype.readFeature=ns.prototype.Tb;ns.prototype.readFeatures=ns.prototype.Ba;ns.prototype.readGeometry=ns.prototype.Sc;
ns.prototype.readProjection=ns.prototype.Ja;ns.prototype.writeGeometry=ns.prototype.Wc;ns.prototype.writeGeometryObject=ns.prototype.Ve;ns.prototype.writeFeature=ns.prototype.Md;ns.prototype.writeFeatureObject=ns.prototype.Vc;ns.prototype.writeFeatures=ns.prototype.Vb;ns.prototype.writeFeaturesObject=ns.prototype.Te;u("ol.format.Feature",as,OPENLAYERS);u("ol.format.GeoJSON",ys,OPENLAYERS);ys.prototype.readFeature=ys.prototype.Tb;ys.prototype.readFeatures=ys.prototype.Ba;
ys.prototype.readGeometry=ys.prototype.Sc;ys.prototype.readProjection=ys.prototype.Ja;ys.prototype.writeFeature=ys.prototype.Md;ys.prototype.writeFeatureObject=ys.prototype.Vc;ys.prototype.writeFeatures=ys.prototype.Vb;ys.prototype.writeFeaturesObject=ys.prototype.Te;ys.prototype.writeGeometry=ys.prototype.Wc;ys.prototype.writeGeometryObject=ys.prototype.Ve;u("ol.format.GML2",Ss,OPENLAYERS);u("ol.format.GML3",Ts,OPENLAYERS);Ts.prototype.writeGeometryNode=Ts.prototype.B;
Ts.prototype.writeFeatures=Ts.prototype.Vb;Ts.prototype.writeFeaturesNode=Ts.prototype.c;u("ol.format.GML",Ts,OPENLAYERS);Ts.prototype.writeFeatures=Ts.prototype.Vb;Ts.prototype.writeFeaturesNode=Ts.prototype.c;Gs.prototype.readFeatures=Gs.prototype.Ba;u("ol.format.GPX",bt,OPENLAYERS);bt.prototype.readFeature=bt.prototype.Tb;bt.prototype.readFeatures=bt.prototype.Ba;bt.prototype.readProjection=bt.prototype.Ja;bt.prototype.writeFeatures=bt.prototype.Vb;bt.prototype.writeFeaturesNode=bt.prototype.c;
u("ol.format.IGC",Mt,OPENLAYERS);Mt.prototype.readFeature=Mt.prototype.Tb;Mt.prototype.readFeatures=Mt.prototype.Ba;Mt.prototype.readProjection=Mt.prototype.Ja;u("ol.format.KML",ku,OPENLAYERS);ku.prototype.readFeature=ku.prototype.Tb;ku.prototype.readFeatures=ku.prototype.Ba;ku.prototype.readName=ku.prototype.wo;ku.prototype.readNetworkLinks=ku.prototype.xo;ku.prototype.readProjection=ku.prototype.Ja;ku.prototype.writeFeatures=ku.prototype.Vb;ku.prototype.writeFeaturesNode=ku.prototype.c;
u("ol.format.MVT",Zv,OPENLAYERS);Zv.prototype.setLayers=Zv.prototype.g;u("ol.format.OSMXML",aw,OPENLAYERS);aw.prototype.readFeatures=aw.prototype.Ba;aw.prototype.readProjection=aw.prototype.Ja;u("ol.format.Polyline",zw,OPENLAYERS);u("ol.format.Polyline.encodeDeltas",Aw,OPENLAYERS);u("ol.format.Polyline.decodeDeltas",Cw,OPENLAYERS);u("ol.format.Polyline.encodeFloats",Bw,OPENLAYERS);u("ol.format.Polyline.decodeFloats",Dw,OPENLAYERS);zw.prototype.readFeature=zw.prototype.Tb;
zw.prototype.readFeatures=zw.prototype.Ba;zw.prototype.readGeometry=zw.prototype.Sc;zw.prototype.readProjection=zw.prototype.Ja;zw.prototype.writeGeometry=zw.prototype.Wc;u("ol.format.TopoJSON",Ew,OPENLAYERS);Ew.prototype.readFeatures=Ew.prototype.Ba;Ew.prototype.readProjection=Ew.prototype.Ja;u("ol.format.WFS",Kw,OPENLAYERS);Kw.prototype.readFeatures=Kw.prototype.Ba;Kw.prototype.readTransactionResponse=Kw.prototype.i;Kw.prototype.readFeatureCollectionMetadata=Kw.prototype.j;
Kw.prototype.writeGetFeature=Kw.prototype.l;Kw.prototype.writeTransaction=Kw.prototype.v;Kw.prototype.readProjection=Kw.prototype.Ja;u("ol.format.WKT",Xw,OPENLAYERS);Xw.prototype.readFeature=Xw.prototype.Tb;Xw.prototype.readFeatures=Xw.prototype.Ba;Xw.prototype.readGeometry=Xw.prototype.Sc;Xw.prototype.writeFeature=Xw.prototype.Md;Xw.prototype.writeFeatures=Xw.prototype.Vb;Xw.prototype.writeGeometry=Xw.prototype.Wc;u("ol.format.WMSCapabilities",ox,OPENLAYERS);ox.prototype.read=ox.prototype.read;
u("ol.format.WMSGetFeatureInfo",Lx,OPENLAYERS);Lx.prototype.readFeatures=Lx.prototype.Ba;u("ol.format.WMTSCapabilities",Mx,OPENLAYERS);Mx.prototype.read=Mx.prototype.read;u("ol.Geolocation",$x,OPENLAYERS);$x.prototype.getAccuracy=$x.prototype.Cj;$x.prototype.getAccuracyGeometry=$x.prototype.Dj;$x.prototype.getAltitude=$x.prototype.Fj;$x.prototype.getAltitudeAccuracy=$x.prototype.Gj;$x.prototype.getHeading=$x.prototype.Al;$x.prototype.getPosition=$x.prototype.Bl;$x.prototype.getProjection=$x.prototype.$g;
$x.prototype.getSpeed=$x.prototype.kk;$x.prototype.getTracking=$x.prototype.ah;$x.prototype.getTrackingOptions=$x.prototype.Mg;$x.prototype.setProjection=$x.prototype.bh;$x.prototype.setTracking=$x.prototype.te;$x.prototype.setTrackingOptions=$x.prototype.hi;u("ol.geom.Circle",ay,OPENLAYERS);ay.prototype.clone=ay.prototype.clone;ay.prototype.getCenter=ay.prototype.yd;ay.prototype.getRadius=ay.prototype.Cf;ay.prototype.getType=ay.prototype.V;ay.prototype.intersectsExtent=ay.prototype.Da;
ay.prototype.setCenter=ay.prototype.$l;ay.prototype.setCenterAndRadius=ay.prototype.Xf;ay.prototype.setRadius=ay.prototype.am;ay.prototype.transform=ay.prototype.kb;u("ol.geom.Geometry",df,OPENLAYERS);df.prototype.getClosestPoint=df.prototype.pb;df.prototype.getExtent=df.prototype.J;df.prototype.simplify=df.prototype.yb;df.prototype.transform=df.prototype.kb;u("ol.geom.GeometryCollection",us,OPENLAYERS);us.prototype.clone=us.prototype.clone;us.prototype.getGeometries=us.prototype.Hg;
us.prototype.getType=us.prototype.V;us.prototype.intersectsExtent=us.prototype.Da;us.prototype.setGeometries=us.prototype.$h;us.prototype.applyTransform=us.prototype.mc;us.prototype.translate=us.prototype.Oc;u("ol.geom.LinearRing",yf,OPENLAYERS);yf.prototype.clone=yf.prototype.clone;yf.prototype.getArea=yf.prototype.dm;yf.prototype.getCoordinates=yf.prototype.Z;yf.prototype.getType=yf.prototype.V;yf.prototype.setCoordinates=yf.prototype.ma;u("ol.geom.LineString",T,OPENLAYERS);
T.prototype.appendCoordinate=T.prototype.mj;T.prototype.clone=T.prototype.clone;T.prototype.forEachSegment=T.prototype.Bj;T.prototype.getCoordinateAtM=T.prototype.bm;T.prototype.getCoordinates=T.prototype.Z;T.prototype.getLength=T.prototype.cm;T.prototype.getType=T.prototype.V;T.prototype.intersectsExtent=T.prototype.Da;T.prototype.setCoordinates=T.prototype.ma;u("ol.geom.MultiLineString",U,OPENLAYERS);U.prototype.appendLineString=U.prototype.nj;U.prototype.clone=U.prototype.clone;
U.prototype.getCoordinateAtM=U.prototype.em;U.prototype.getCoordinates=U.prototype.Z;U.prototype.getLineString=U.prototype.Vj;U.prototype.getLineStrings=U.prototype.rd;U.prototype.getType=U.prototype.V;U.prototype.intersectsExtent=U.prototype.Da;U.prototype.setCoordinates=U.prototype.ma;u("ol.geom.MultiPoint",ks,OPENLAYERS);ks.prototype.appendPoint=ks.prototype.pj;ks.prototype.clone=ks.prototype.clone;ks.prototype.getCoordinates=ks.prototype.Z;ks.prototype.getPoint=ks.prototype.fk;
ks.prototype.getPoints=ks.prototype.we;ks.prototype.getType=ks.prototype.V;ks.prototype.intersectsExtent=ks.prototype.Da;ks.prototype.setCoordinates=ks.prototype.ma;u("ol.geom.MultiPolygon",V,OPENLAYERS);V.prototype.appendPolygon=V.prototype.qj;V.prototype.clone=V.prototype.clone;V.prototype.getArea=V.prototype.fm;V.prototype.getCoordinates=V.prototype.Z;V.prototype.getInteriorPoints=V.prototype.Sj;V.prototype.getPolygon=V.prototype.hk;V.prototype.getPolygons=V.prototype.ee;V.prototype.getType=V.prototype.V;
V.prototype.intersectsExtent=V.prototype.Da;V.prototype.setCoordinates=V.prototype.ma;u("ol.geom.Point",D,OPENLAYERS);D.prototype.clone=D.prototype.clone;D.prototype.getCoordinates=D.prototype.Z;D.prototype.getType=D.prototype.V;D.prototype.intersectsExtent=D.prototype.Da;D.prototype.setCoordinates=D.prototype.ma;u("ol.geom.Polygon",E,OPENLAYERS);E.prototype.appendLinearRing=E.prototype.oj;E.prototype.clone=E.prototype.clone;E.prototype.getArea=E.prototype.gm;E.prototype.getCoordinates=E.prototype.Z;
E.prototype.getInteriorPoint=E.prototype.Rj;E.prototype.getLinearRingCount=E.prototype.Wj;E.prototype.getLinearRing=E.prototype.Jg;E.prototype.getLinearRings=E.prototype.de;E.prototype.getType=E.prototype.V;E.prototype.intersectsExtent=E.prototype.Da;E.prototype.setCoordinates=E.prototype.ma;u("ol.geom.Polygon.circular",Mf,OPENLAYERS);u("ol.geom.Polygon.fromExtent",Nf,OPENLAYERS);u("ol.geom.Polygon.fromCircle",Of,OPENLAYERS);u("ol.geom.SimpleGeometry",ff,OPENLAYERS);
ff.prototype.getFirstCoordinate=ff.prototype.Jb;ff.prototype.getLastCoordinate=ff.prototype.Kb;ff.prototype.getLayout=ff.prototype.Lb;ff.prototype.applyTransform=ff.prototype.mc;ff.prototype.translate=ff.prototype.Oc;u("ol.Graticule",fy,OPENLAYERS);fy.prototype.getMap=fy.prototype.El;fy.prototype.getMeridians=fy.prototype.Yj;fy.prototype.getParallels=fy.prototype.ek;fy.prototype.setMap=fy.prototype.setMap;u("ol.has.DEVICE_PIXEL_RATIO",fj,OPENLAYERS);u("ol.has.CANVAS",hj,OPENLAYERS);
u("ol.has.DEVICE_ORIENTATION",ij,OPENLAYERS);u("ol.has.GEOLOCATION",jj,OPENLAYERS);u("ol.has.TOUCH",kj,OPENLAYERS);u("ol.has.WEBGL",ej,OPENLAYERS);ky.prototype.getImage=ky.prototype.a;ly.prototype.getImage=ly.prototype.Ua;u("ol.interaction.DoubleClickZoom",al,OPENLAYERS);u("ol.interaction.DoubleClickZoom.handleEvent",bl,OPENLAYERS);u("ol.interaction.DragAndDrop",Gy,OPENLAYERS);u("ol.interaction.DragAndDrop.handleEvent",we,OPENLAYERS);Hy.prototype.features=Hy.prototype.features;Hy.prototype.file=Hy.prototype.file;
Hy.prototype.projection=Hy.prototype.projection;yl.prototype.coordinate=yl.prototype.coordinate;u("ol.interaction.DragBox",zl,OPENLAYERS);zl.prototype.getGeometry=zl.prototype.W;u("ol.interaction.DragPan",ml,OPENLAYERS);u("ol.interaction.DragRotateAndZoom",Ky,OPENLAYERS);u("ol.interaction.DragRotate",rl,OPENLAYERS);u("ol.interaction.DragZoom",Dl,OPENLAYERS);Oy.prototype.feature=Oy.prototype.feature;u("ol.interaction.Draw",Py,OPENLAYERS);u("ol.interaction.Draw.handleEvent",Ry,OPENLAYERS);
Py.prototype.removeLastPoint=Py.prototype.Go;Py.prototype.finishDrawing=Py.prototype.md;Py.prototype.extend=Py.prototype.hm;u("ol.interaction.Draw.createRegularPolygon",function(b,c){return function(d,e){var f=d[0],g=d[1],h=Math.sqrt(zd(f,g)),k=e?e:Of(new ay(f),b);Pf(k,f,h,c?c:Math.atan((g[1]-f[1])/(g[0]-f[0])));return k}},OPENLAYERS);u("ol.interaction.Interaction",Xk,OPENLAYERS);Xk.prototype.getActive=Xk.prototype.b;Xk.prototype.setActive=Xk.prototype.g;u("ol.interaction.defaults",Sl,OPENLAYERS);
u("ol.interaction.KeyboardPan",El,OPENLAYERS);u("ol.interaction.KeyboardPan.handleEvent",Fl,OPENLAYERS);u("ol.interaction.KeyboardZoom",Gl,OPENLAYERS);u("ol.interaction.KeyboardZoom.handleEvent",Hl,OPENLAYERS);ez.prototype.features=ez.prototype.features;ez.prototype.mapBrowserPointerEvent=ez.prototype.mapBrowserPointerEvent;u("ol.interaction.Modify",fz,OPENLAYERS);u("ol.interaction.Modify.handleEvent",iz,OPENLAYERS);u("ol.interaction.MouseWheelZoom",Il,OPENLAYERS);
u("ol.interaction.MouseWheelZoom.handleEvent",Jl,OPENLAYERS);Il.prototype.setMouseAnchor=Il.prototype.C;u("ol.interaction.PinchRotate",Kl,OPENLAYERS);u("ol.interaction.PinchZoom",Ol,OPENLAYERS);u("ol.interaction.Pointer",jl,OPENLAYERS);u("ol.interaction.Pointer.handleEvent",kl,OPENLAYERS);tz.prototype.selected=tz.prototype.selected;tz.prototype.deselected=tz.prototype.deselected;tz.prototype.mapBrowserEvent=tz.prototype.mapBrowserEvent;u("ol.interaction.Select",uz,OPENLAYERS);
uz.prototype.getFeatures=uz.prototype.rm;uz.prototype.getLayer=uz.prototype.sm;u("ol.interaction.Select.handleEvent",vz,OPENLAYERS);uz.prototype.setMap=uz.prototype.setMap;u("ol.interaction.Snap",xz,OPENLAYERS);xz.prototype.addFeature=xz.prototype.zd;xz.prototype.removeFeature=xz.prototype.Ad;Bz.prototype.features=Bz.prototype.features;Bz.prototype.coordinate=Bz.prototype.coordinate;u("ol.interaction.Translate",Cz,OPENLAYERS);u("ol.Kinetic",Vk,OPENLAYERS);u("ol.layer.Heatmap",X,OPENLAYERS);
X.prototype.getBlur=X.prototype.Bg;X.prototype.getGradient=X.prototype.Ig;X.prototype.getRadius=X.prototype.mh;X.prototype.setBlur=X.prototype.Yh;X.prototype.setGradient=X.prototype.ai;X.prototype.setRadius=X.prototype.nh;u("ol.layer.Image",am,OPENLAYERS);am.prototype.getSource=am.prototype.ga;u("ol.layer.Layer",nk,OPENLAYERS);nk.prototype.getSource=nk.prototype.ga;nk.prototype.setMap=nk.prototype.setMap;nk.prototype.setSource=nk.prototype.wc;u("ol.layer.Base",jk,OPENLAYERS);
jk.prototype.getExtent=jk.prototype.J;jk.prototype.getMaxResolution=jk.prototype.Pb;jk.prototype.getMinResolution=jk.prototype.Qb;jk.prototype.getOpacity=jk.prototype.Rb;jk.prototype.getVisible=jk.prototype.qb;jk.prototype.getZIndex=jk.prototype.Sb;jk.prototype.setExtent=jk.prototype.bc;jk.prototype.setMaxResolution=jk.prototype.jc;jk.prototype.setMinResolution=jk.prototype.kc;jk.prototype.setOpacity=jk.prototype.cc;jk.prototype.setVisible=jk.prototype.dc;jk.prototype.setZIndex=jk.prototype.ec;
u("ol.layer.Group",Tl,OPENLAYERS);Tl.prototype.getLayers=Tl.prototype.Pc;Tl.prototype.setLayers=Tl.prototype.lh;u("ol.layer.Tile",F,OPENLAYERS);F.prototype.getPreload=F.prototype.a;F.prototype.getSource=F.prototype.ga;F.prototype.setPreload=F.prototype.f;F.prototype.getUseInterimTilesOnError=F.prototype.b;F.prototype.setUseInterimTilesOnError=F.prototype.g;u("ol.layer.Vector",H,OPENLAYERS);H.prototype.getSource=H.prototype.ga;H.prototype.getStyle=H.prototype.C;H.prototype.getStyleFunction=H.prototype.G;
H.prototype.setStyle=H.prototype.f;u("ol.layer.VectorTile",J,OPENLAYERS);J.prototype.getPreload=J.prototype.g;J.prototype.getSource=J.prototype.ga;J.prototype.getUseInterimTilesOnError=J.prototype.U;J.prototype.setPreload=J.prototype.T;J.prototype.setUseInterimTilesOnError=J.prototype.Y;u("ol.loadingstrategy.all",Fp,OPENLAYERS);u("ol.loadingstrategy.bbox",function(b){return[b]},OPENLAYERS);
u("ol.loadingstrategy.tile",function(b){return function(c,d){var e=Sh(b,d),f=Nh(b,c,e),g=[],e=[e,0,0];for(e[1]=f.a;e[1]<=f.f;++e[1])for(e[2]=f.c;e[2]<=f.b;++e[2])g.push(b.Aa(e));return g}},OPENLAYERS);u("ol.Map",S,OPENLAYERS);S.prototype.addControl=S.prototype.kj;S.prototype.addInteraction=S.prototype.lj;S.prototype.addLayer=S.prototype.rg;S.prototype.addOverlay=S.prototype.sg;S.prototype.beforeRender=S.prototype.Pa;S.prototype.forEachFeatureAtPixel=S.prototype.od;
S.prototype.forEachLayerAtPixel=S.prototype.Il;S.prototype.hasFeatureAtPixel=S.prototype.$k;S.prototype.getEventCoordinate=S.prototype.Lj;S.prototype.getEventPixel=S.prototype.be;S.prototype.getTarget=S.prototype.ue;S.prototype.getTargetElement=S.prototype.Lc;S.prototype.getCoordinateFromPixel=S.prototype.Fa;S.prototype.getControls=S.prototype.Jj;S.prototype.getOverlays=S.prototype.ck;S.prototype.getOverlayById=S.prototype.bk;S.prototype.getInteractions=S.prototype.Qj;S.prototype.getLayerGroup=S.prototype.oc;
S.prototype.getLayers=S.prototype.dh;S.prototype.getPixelFromCoordinate=S.prototype.Qa;S.prototype.getSize=S.prototype.Ta;S.prototype.getView=S.prototype.$;S.prototype.getViewport=S.prototype.rk;S.prototype.renderSync=S.prototype.Lo;S.prototype.render=S.prototype.render;S.prototype.removeControl=S.prototype.Sh;S.prototype.removeInteraction=S.prototype.Fo;S.prototype.removeLayer=S.prototype.Ho;S.prototype.removeOverlay=S.prototype.Io;S.prototype.setLayerGroup=S.prototype.bi;S.prototype.setSize=S.prototype.ag;
S.prototype.setTarget=S.prototype.Jl;S.prototype.setView=S.prototype.$o;S.prototype.updateSize=S.prototype.Uc;Vj.prototype.originalEvent=Vj.prototype.originalEvent;Vj.prototype.pixel=Vj.prototype.pixel;Vj.prototype.coordinate=Vj.prototype.coordinate;Vj.prototype.dragging=Vj.prototype.dragging;Vj.prototype.preventDefault=Vj.prototype.preventDefault;Vj.prototype.stopPropagation=Vj.prototype.b;xh.prototype.map=xh.prototype.map;xh.prototype.frameState=xh.prototype.frameState;jd.prototype.key=jd.prototype.key;
jd.prototype.oldValue=jd.prototype.oldValue;u("ol.Object",kd,OPENLAYERS);kd.prototype.get=kd.prototype.get;kd.prototype.getKeys=kd.prototype.O;kd.prototype.getProperties=kd.prototype.P;kd.prototype.set=kd.prototype.set;kd.prototype.setProperties=kd.prototype.I;kd.prototype.unset=kd.prototype.R;u("ol.Observable",hd,OPENLAYERS);u("ol.Observable.unByKey",id,OPENLAYERS);hd.prototype.changed=hd.prototype.s;hd.prototype.dispatchEvent=hd.prototype.o;hd.prototype.getRevision=hd.prototype.L;
hd.prototype.on=hd.prototype.H;hd.prototype.once=hd.prototype.M;hd.prototype.un=hd.prototype.K;hd.prototype.unByKey=hd.prototype.N;u("ol.inherits",y,OPENLAYERS);u("ol.Overlay",wr,OPENLAYERS);wr.prototype.getElement=wr.prototype.vd;wr.prototype.getId=wr.prototype.La;wr.prototype.getMap=wr.prototype.wd;wr.prototype.getOffset=wr.prototype.qf;wr.prototype.getPosition=wr.prototype.Bf;wr.prototype.getPositioning=wr.prototype.rf;wr.prototype.setElement=wr.prototype.Yf;wr.prototype.setMap=wr.prototype.setMap;
wr.prototype.setOffset=wr.prototype.Zf;wr.prototype.setPosition=wr.prototype.xd;wr.prototype.setPositioning=wr.prototype.$f;u("ol.Overlay.Popup",Jz,OPENLAYERS);Jz.prototype.show=Jz.prototype.Ml;Jz.prototype.setHeight=Jz.prototype.Uo;Jz.prototype.setWidth=Jz.prototype.Ll;Jz.prototype.getWidth=Jz.prototype.Kl;Jz.prototype.hide=Jz.prototype.al;u("ol.proj.common.add",$l,OPENLAYERS);u("ol.proj.METERS_PER_UNIT",Ee,OPENLAYERS);u("ol.proj.Projection",Fe,OPENLAYERS);Fe.prototype.getCode=Fe.prototype.Ij;
Fe.prototype.getExtent=Fe.prototype.J;Fe.prototype.getUnits=Fe.prototype.Cm;Fe.prototype.getMetersPerUnit=Fe.prototype.Jc;Fe.prototype.getWorldExtent=Fe.prototype.sk;Fe.prototype.isGlobal=Fe.prototype.fl;Fe.prototype.setGlobal=Fe.prototype.To;Fe.prototype.setExtent=Fe.prototype.Dm;Fe.prototype.setWorldExtent=Fe.prototype.ap;Fe.prototype.setGetPointResolution=Fe.prototype.So;Fe.prototype.getPointResolution=Fe.prototype.getPointResolution;u("ol.proj.addEquivalentProjections",Ie,OPENLAYERS);
u("ol.proj.addProjection",We,OPENLAYERS);u("ol.proj.addCoordinateTransforms",Je,OPENLAYERS);u("ol.proj.fromLonLat",function(b,c){return bf(b,"EPSG:4326",void 0!==c?c:"EPSG:3857")},OPENLAYERS);u("ol.proj.toLonLat",function(b,c){return bf(b,void 0!==c?c:"EPSG:3857","EPSG:4326")},OPENLAYERS);u("ol.proj.get",He,OPENLAYERS);u("ol.proj.getTransform",$e,OPENLAYERS);u("ol.proj.transform",bf,OPENLAYERS);u("ol.proj.transformExtent",cf,OPENLAYERS);tm.prototype.drawAsync=tm.prototype.ld;
tm.prototype.drawCircleGeometry=tm.prototype.Fc;tm.prototype.drawFeature=tm.prototype.kf;tm.prototype.drawPointGeometry=tm.prototype.Gb;tm.prototype.drawMultiPointGeometry=tm.prototype.Fb;tm.prototype.drawLineStringGeometry=tm.prototype.Wb;tm.prototype.drawMultiLineStringGeometry=tm.prototype.Gc;tm.prototype.drawPolygonGeometry=tm.prototype.Ic;tm.prototype.drawMultiPolygonGeometry=tm.prototype.Hc;tm.prototype.setFillStrokeStyle=tm.prototype.ab;tm.prototype.setImageStyle=tm.prototype.vb;
tm.prototype.setTextStyle=tm.prototype.bb;mk.prototype.vectorContext=mk.prototype.vectorContext;mk.prototype.frameState=mk.prototype.frameState;mk.prototype.context=mk.prototype.context;mk.prototype.glContext=mk.prototype.glContext;dn.prototype.get=dn.prototype.get;dn.prototype.getExtent=dn.prototype.J;dn.prototype.getGeometry=dn.prototype.W;dn.prototype.getProperties=dn.prototype.Em;dn.prototype.getType=dn.prototype.V;u("ol.render.VectorContext",lk,OPENLAYERS);ar.prototype.drawAsync=ar.prototype.ld;
ar.prototype.drawCircleGeometry=ar.prototype.Fc;ar.prototype.drawFeature=ar.prototype.kf;ar.prototype.drawGeometryCollectionGeometry=ar.prototype.$d;ar.prototype.drawPointGeometry=ar.prototype.Gb;ar.prototype.drawLineStringGeometry=ar.prototype.Wb;ar.prototype.drawMultiLineStringGeometry=ar.prototype.Gc;ar.prototype.drawMultiPointGeometry=ar.prototype.Fb;ar.prototype.drawMultiPolygonGeometry=ar.prototype.Hc;ar.prototype.drawPolygonGeometry=ar.prototype.Ic;ar.prototype.drawText=ar.prototype.Hb;
ar.prototype.setFillStrokeStyle=ar.prototype.ab;ar.prototype.setImageStyle=ar.prototype.vb;ar.prototype.setTextStyle=ar.prototype.bb;u("ol.size.toSize",qd,OPENLAYERS);u("ol.source.BingMaps",bA,OPENLAYERS);u("ol.source.BingMaps.TOS_ATTRIBUTION",cA,OPENLAYERS);u("ol.source.Cluster",dA,OPENLAYERS);dA.prototype.getSource=dA.prototype.fa;u("ol.source.ImageCanvas",An,OPENLAYERS);u("ol.source.ImageMapGuide",gA,OPENLAYERS);gA.prototype.getParams=gA.prototype.Km;gA.prototype.getImageLoadFunction=gA.prototype.Jm;
gA.prototype.updateParams=gA.prototype.Nm;gA.prototype.setImageLoadFunction=gA.prototype.Mm;u("ol.source.Image",tn,OPENLAYERS);vn.prototype.image=vn.prototype.image;u("ol.source.ImageStatic",hA,OPENLAYERS);u("ol.source.ImageVector",Xp,OPENLAYERS);Xp.prototype.getSource=Xp.prototype.Om;Xp.prototype.getStyle=Xp.prototype.Pm;Xp.prototype.getStyleFunction=Xp.prototype.Qm;Xp.prototype.setStyle=Xp.prototype.rh;u("ol.source.ImageWMS",iA,OPENLAYERS);iA.prototype.getGetFeatureInfoUrl=iA.prototype.Tm;
iA.prototype.getParams=iA.prototype.Vm;iA.prototype.getImageLoadFunction=iA.prototype.Um;iA.prototype.getUrl=iA.prototype.Wm;iA.prototype.setImageLoadFunction=iA.prototype.Xm;iA.prototype.setUrl=iA.prototype.Ym;iA.prototype.updateParams=iA.prototype.Zm;u("ol.source.MapQuest",pA,OPENLAYERS);pA.prototype.getLayer=pA.prototype.l;u("ol.source.OSM",nA,OPENLAYERS);u("ol.source.OSM.ATTRIBUTION",oA,OPENLAYERS);u("ol.source.Raster",sA,OPENLAYERS);sA.prototype.setOperation=sA.prototype.u;
xA.prototype.extent=xA.prototype.extent;xA.prototype.resolution=xA.prototype.resolution;xA.prototype.data=xA.prototype.data;u("ol.source.Source",Gh,OPENLAYERS);Gh.prototype.getAttributions=Gh.prototype.ta;Gh.prototype.getLogo=Gh.prototype.ra;Gh.prototype.getProjection=Gh.prototype.ua;Gh.prototype.getState=Gh.prototype.va;Gh.prototype.setAttributions=Gh.prototype.na;u("ol.source.Stamen",CA,OPENLAYERS);u("ol.source.TileArcGISRest",EA,OPENLAYERS);EA.prototype.getParams=EA.prototype.C;
EA.prototype.updateParams=EA.prototype.Y;u("ol.source.TileDebug",GA,OPENLAYERS);u("ol.source.TileImage",Y,OPENLAYERS);Y.prototype.setRenderReprojectionEdges=Y.prototype.wb;Y.prototype.setTileGridForProjection=Y.prototype.xb;u("ol.source.TileJSON",HA,OPENLAYERS);u("ol.source.Tile",Xh,OPENLAYERS);Xh.prototype.getTileGrid=Xh.prototype.Ga;$h.prototype.tile=$h.prototype.tile;u("ol.source.TileUTFGrid",IA,OPENLAYERS);IA.prototype.getTemplate=IA.prototype.lk;
IA.prototype.forDataAtCoordinateAndResolution=IA.prototype.yj;u("ol.source.TileWMS",NA,OPENLAYERS);NA.prototype.getGetFeatureInfoUrl=NA.prototype.bn;NA.prototype.getParams=NA.prototype.cn;NA.prototype.updateParams=NA.prototype.en;hq.prototype.getTileLoadFunction=hq.prototype.Xa;hq.prototype.getTileUrlFunction=hq.prototype.Ya;hq.prototype.getUrls=hq.prototype.Za;hq.prototype.setTileLoadFunction=hq.prototype.cb;hq.prototype.setTileUrlFunction=hq.prototype.Ka;hq.prototype.setUrl=hq.prototype.Va;
hq.prototype.setUrls=hq.prototype.Wa;u("ol.source.Vector",R,OPENLAYERS);R.prototype.addFeature=R.prototype.Dd;R.prototype.addFeatures=R.prototype.Dc;R.prototype.clear=R.prototype.clear;R.prototype.forEachFeature=R.prototype.zg;R.prototype.forEachFeatureInExtent=R.prototype.ob;R.prototype.forEachFeatureIntersectingExtent=R.prototype.Ag;R.prototype.getFeaturesCollection=R.prototype.Gg;R.prototype.getFeatures=R.prototype.Ae;R.prototype.getFeaturesAtCoordinate=R.prototype.Fg;
R.prototype.getFeaturesInExtent=R.prototype.nf;R.prototype.getClosestFeatureToCoordinate=R.prototype.Cg;R.prototype.getExtent=R.prototype.J;R.prototype.getFeatureById=R.prototype.Eg;R.prototype.removeFeature=R.prototype.Qc;Up.prototype.feature=Up.prototype.feature;u("ol.source.VectorTile",iq,OPENLAYERS);u("ol.source.WMTS",Z,OPENLAYERS);Z.prototype.getDimensions=Z.prototype.Kj;Z.prototype.getFormat=Z.prototype.fn;Z.prototype.getLayer=Z.prototype.gn;Z.prototype.getMatrixSet=Z.prototype.Xj;
Z.prototype.getRequestEncoding=Z.prototype.jk;Z.prototype.getStyle=Z.prototype.hn;Z.prototype.getVersion=Z.prototype.qk;Z.prototype.updateDimensions=Z.prototype.kp;
u("ol.source.WMTS.optionsFromCapabilities",function(b,c){var d=hb(b.Contents.Layer,function(b){return b.Identifier==c.layer}),e=b.Contents.TileMatrixSet,f,g;f=1<d.TileMatrixSetLink.length?"projection"in c?ib(d.TileMatrixSetLink,function(b){return hb(e,function(c){return c.Identifier==b.TileMatrixSet}).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3")==c.projection}):ib(d.TileMatrixSetLink,function(b){return b.TileMatrixSet==c.matrixSet}):0;0>f&&(f=0);g=d.TileMatrixSetLink[f].TileMatrixSet;
var h=d.Format[0];"format"in c&&(h=c.format);f=ib(d.Style,function(b){return"style"in c?b.Title==c.style:b.isDefault});0>f&&(f=0);f=d.Style[f].Identifier;var k={};"Dimension"in d&&d.Dimension.forEach(function(b){var c=b.Identifier,d=b.Default;void 0===d&&(d=b.Value[0]);k[c]=d});var m=hb(b.Contents.TileMatrixSet,function(b){return b.Identifier==g}),n;n="projection"in c?He(c.projection):He(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/,"$1:$3"));var p=d.WGS84BoundingBox,q,r;void 0!==p&&
(r=He("EPSG:4326").J(),r=p[0]==r[0]&&p[2]==r[2],q=cf(p,"EPSG:4326",n),(p=n.J())&&(Zd(p,q)||(q=void 0)));var m=SA(m,q),t=[];q=c.requestEncoding;q=void 0!==q?q:"";if(b.hasOwnProperty("OperationsMetadata")&&b.OperationsMetadata.hasOwnProperty("GetTile")&&0!==q.indexOf("REST"))for(var d=b.OperationsMetadata.GetTile.DCP.HTTP.Get,p=0,x=d.length;p<x;++p){var z=hb(d[p].Constraint,function(b){return"GetEncoding"==b.name}).AllowedValues.Value;0<z.length&&xb(z,"KVP")&&(q="KVP",t.push(d[p].href))}else q="REST",
d.ResourceURL.forEach(function(b){"tile"==b.resourceType&&(h=b.format,t.push(b.template))});return{urls:t,layer:c.layer,matrixSet:g,format:h,projection:n,requestEncoding:q,tileGrid:m,style:f,dimensions:k,wrapX:r}},OPENLAYERS);u("ol.source.XYZ",mA,OPENLAYERS);u("ol.source.Zoomify",UA,OPENLAYERS);u("ol.Sphere",Ce,OPENLAYERS);Ce.prototype.geodesicArea=Ce.prototype.c;Ce.prototype.haversineDistance=Ce.prototype.a;u("ol.style.AtlasManager",WA,OPENLAYERS);u("ol.style.Circle",km,OPENLAYERS);
km.prototype.getFill=km.prototype.jn;km.prototype.getImage=km.prototype.fc;km.prototype.getRadius=km.prototype.kn;km.prototype.getStroke=km.prototype.ln;u("ol.style.Fill",em,OPENLAYERS);em.prototype.getColor=em.prototype.b;em.prototype.setColor=em.prototype.f;u("ol.style.Icon",Fk,OPENLAYERS);Fk.prototype.getAnchor=Fk.prototype.Xb;Fk.prototype.getImage=Fk.prototype.fc;Fk.prototype.getOrigin=Fk.prototype.Ca;Fk.prototype.getSrc=Fk.prototype.mn;Fk.prototype.getSize=Fk.prototype.Bb;Fk.prototype.load=Fk.prototype.load;
u("ol.style.Image",Ek,OPENLAYERS);Ek.prototype.getOpacity=Ek.prototype.Ce;Ek.prototype.getRotateWithView=Ek.prototype.fe;Ek.prototype.getRotation=Ek.prototype.De;Ek.prototype.getScale=Ek.prototype.Ee;Ek.prototype.getSnapToPixel=Ek.prototype.ge;Ek.prototype.setOpacity=Ek.prototype.Fe;Ek.prototype.setRotation=Ek.prototype.Ge;Ek.prototype.setScale=Ek.prototype.He;u("ol.style.RegularShape",$A,OPENLAYERS);$A.prototype.getAnchor=$A.prototype.Xb;$A.prototype.getAngle=$A.prototype.nn;
$A.prototype.getFill=$A.prototype.pn;$A.prototype.getImage=$A.prototype.fc;$A.prototype.getOrigin=$A.prototype.Ca;$A.prototype.getPoints=$A.prototype.qn;$A.prototype.getRadius=$A.prototype.rn;$A.prototype.getRadius2=$A.prototype.ik;$A.prototype.getSize=$A.prototype.Bb;$A.prototype.getStroke=$A.prototype.sn;u("ol.style.Stroke",jm,OPENLAYERS);jm.prototype.getColor=jm.prototype.tn;jm.prototype.getLineCap=jm.prototype.Tj;jm.prototype.getLineDash=jm.prototype.vn;jm.prototype.getLineJoin=jm.prototype.Uj;
jm.prototype.getMiterLimit=jm.prototype.Zj;jm.prototype.getWidth=jm.prototype.wn;jm.prototype.setColor=jm.prototype.xn;jm.prototype.setLineCap=jm.prototype.Vo;jm.prototype.setLineDash=jm.prototype.yn;jm.prototype.setLineJoin=jm.prototype.Wo;jm.prototype.setMiterLimit=jm.prototype.Xo;jm.prototype.setWidth=jm.prototype.zn;u("ol.style.Style",lm,OPENLAYERS);lm.prototype.getGeometry=lm.prototype.W;lm.prototype.getGeometryFunction=lm.prototype.Oj;lm.prototype.getFill=lm.prototype.An;
lm.prototype.getImage=lm.prototype.Bn;lm.prototype.getStroke=lm.prototype.Cn;lm.prototype.getText=lm.prototype.Dn;lm.prototype.getZIndex=lm.prototype.En;lm.prototype.setGeometry=lm.prototype.Ah;lm.prototype.setZIndex=lm.prototype.Fn;u("ol.style.Text",ju,OPENLAYERS);ju.prototype.getFont=ju.prototype.Mj;ju.prototype.getOffsetX=ju.prototype.$j;ju.prototype.getOffsetY=ju.prototype.ak;ju.prototype.getFill=ju.prototype.Gn;ju.prototype.getRotation=ju.prototype.Hn;ju.prototype.getScale=ju.prototype.In;
ju.prototype.getStroke=ju.prototype.Jn;ju.prototype.getText=ju.prototype.Kn;ju.prototype.getTextAlign=ju.prototype.mk;ju.prototype.getTextBaseline=ju.prototype.nk;ju.prototype.setFont=ju.prototype.Ro;ju.prototype.setOffsetX=ju.prototype.di;ju.prototype.setOffsetY=ju.prototype.ei;ju.prototype.setFill=ju.prototype.Qo;ju.prototype.setRotation=ju.prototype.Ln;ju.prototype.setScale=ju.prototype.Mn;ju.prototype.setStroke=ju.prototype.Yo;ju.prototype.setText=ju.prototype.fi;ju.prototype.setTextAlign=ju.prototype.gi;
ju.prototype.setTextBaseline=ju.prototype.Zo;Eh.prototype.getTileCoord=Eh.prototype.f;u("ol.tilegrid.TileGrid",Jh,OPENLAYERS);Jh.prototype.getMaxZoom=Jh.prototype.Kg;Jh.prototype.getMinZoom=Jh.prototype.Lg;Jh.prototype.getOrigin=Jh.prototype.Ca;Jh.prototype.getResolution=Jh.prototype.aa;Jh.prototype.getResolutions=Jh.prototype.Bh;Jh.prototype.getTileCoordExtent=Jh.prototype.Aa;Jh.prototype.getTileCoordForCoordAndResolution=Jh.prototype.he;Jh.prototype.getTileCoordForCoordAndZ=Jh.prototype.ie;
Jh.prototype.getTileSize=Jh.prototype.Ha;u("ol.tilegrid.createXYZ",Wh,OPENLAYERS);u("ol.tilegrid.WMTS",RA,OPENLAYERS);RA.prototype.getMatrixIds=RA.prototype.B;u("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet",SA,OPENLAYERS);
u("ol.util.print",function(){function b(){var b=e.document.getElementsByClassName("ol-zoomslider ol-unselectable")[0];b&&b.parentNode.removeChild(b);(b=e.document.getElementsByClassName("ol-overviewmap ol-custom-overviewmap ol-unselectable ol-control ol-collapsed")[0])&&b.parentNode.removeChild(b);for(var b=e.document.getElementsByTagName("canvas"),c=document.getElementsByTagName("canvas"),d=0,k=b.length;d<k;d++){var m=c[d];b[d].getContext("2d").drawImage(m,0,0)}}var c=navigator.userAgent,d="";0<=
c.indexOf("MSIE") ? d = "MSIE" : 0 <= c.indexOf("Firefox") ? d = "Firefox" : 0 <= c.indexOf("Chrome") ? d = "Chrome" : 0 <= c.indexOf("Opera") ? d = "Opera" : 0 <= c.indexOf("Safari") ? d = "Safari" : 0 <= c.indexOf("Netscape") && (d = "Netscape");
  var e = window.open(""), c = document.getElementsByClassName("ol-viewport")[0].cloneNode(!0);
  e.document.write("<!DOCTYPE html><html><head><META HTTP-EQUIV='pragma' CONTENT='no-cache'><META HTTP-EQUIV='Cache-Control' CONTENT='no-cache, must-revalidate'><META HTTP-EQUIV='expires' CONTENT='Wed, 26 Feb 1997 08:21:57 GMT'><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' /><meta name='apple-mobile-web-app-capable' content='yes' /><title>\u5730\u56fe\u6253\u5370</title><style type='text/css'>.ol-scale-line-inner {border: 1px solid #eeeeee;border-top: none;color: #eeeeee;font-size: 10px;text-align: center;margin: 1px;will-change: contents, width;} .ol-scale-line {background: #000;opacity: .6;border-radius: 4px;bottom: 8px;left: 8px;padding: 2px;position: absolute;} .ol-zoomslider .ol-unselectable div {display: none;} .ol-control {display: none;} .print-header {margin: auto;height: 42px;top: 50px;}.superD {height: 24px;line-height: 24px;font-size: 14px;margin-bottom: 6px;}  .superD h3 {float: left;font-size: 14px;  }.superD span {float: right;margin-right: 4px;}#superft {content: '.';display: block;overflow: hidden;clear: both;padding-top: 25px;}.printClose {margin-bottom: 20px;float: right;}  .printClose span {background-position: 0px 0px;cursor: pointer;margin-right: 0px;margin-top: 5px;display: inline-block;width:69px;height: 29px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAdCAYAAAD8UKGzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAGmSURBVHja7Ji/coJAEMY/Mz4UDY1VGhBeBkYpmC2Q8WlEbGwSChvHl7o02Qz/Dhe8OJjc192xt3P749s7dFFV1QeAFaxYn0sAK9d1LYpvXS6X1ZvF0JWFYqHItAQApZQlYZ0icIpUWZZpnyVJ8j+hAECapp05IkKWZZPAeJ4HADidTg8Xw7kezWfsTEnTFESE7XY7aT3vwff9wbiyLBvjvviyLBuAhtYbcYpORAQA2O12k8G0N80FSwrRxfD8PdjGodRbiuHcU3uT9bEEwstdyZJ8x+MRALBerxvjvvWSfLqYKblETsnzfJQTOH6z2Tzt7TLcp9w+eZ733jjSc0YKpl5U3TVStdc8AkncPuyQsYB0uYMg6MwVRfE67TMFxlgxkJf8eDMNoc8xU2Qqz+jbR3rd1l0lzT0Up3sWhmFn7nA4NJ4ppRpxRttHeqYQEYjo19uNAXDBDEMXZ7R94jgWO6QNJ47jwZi+Nz00b6JgiRZVVSnHcUTB+/1eFHcPxpx1vV7HnSlRFBn7op2z7J9MFoqFMq9fydYpf9Qp59vt9m5R/Oj8NQCb09wiGVf7OgAAAABJRU5ErkJggg==);}#mapContainer {margin: auto;width: 936px;height: 522px;position: relative;}.ol-zoomslider .ol-unselectable div {display: none;}.ol-control {display: none;}</style><script type = 'text/javascript'>\nfunction printDiv(){window.print();}\x3c/script></head><body><div class='print-header'><div class='superD'></div><div></div><div id='superft'><div class='printClose'><span class='newuiPrint' onclick = 'printDiv()'></span></div></div></div></body></html>");
  e.document.close();
  e.document.body.insertBefore(c, document.getElementsByClassName("print-header")[0]);
  "firefox" == d.toLowerCase() ? e.onload = b : "safari" != d.toLowerCase() && "chrome" != d.toLowerCase() && "msie" != d.toLowerCase() || window.setTimeout(b, 100)
}, OPENLAYERS);
  bq.prototype.getFormat = bq.prototype.Nl;
  bq.prototype.setLoader = bq.prototype.ci;
  u("ol.View", Qf, OPENLAYERS);
  Qf.prototype.constrainCenter = Qf.prototype.Zd;
  Qf.prototype.constrainResolution = Qf.prototype.constrainResolution;
  Qf.prototype.constrainRotation = Qf.prototype.constrainRotation;
  Qf.prototype.getCenter = Qf.prototype.Oa;
  Qf.prototype.calculateExtent = Qf.prototype.Zc;
  Qf.prototype.getProjection = Qf.prototype.Ol;
  Qf.prototype.getResolution = Qf.prototype.aa;
  Qf.prototype.getRotation = Qf.prototype.Ea;
  Qf.prototype.getZoom = Qf.prototype.tf;
  Qf.prototype.fit = Qf.prototype.lf;
  Qf.prototype.centerOn = Qf.prototype.tj;
  Qf.prototype.rotate = Qf.prototype.rotate;
  Qf.prototype.setCenter = Qf.prototype.Ia;
  Qf.prototype.setResolution = Qf.prototype.Ub;
  Qf.prototype.setRotation = Qf.prototype.ve;
  Qf.prototype.setZoom = Qf.prototype.bg;
  Dq.prototype.getGL = Dq.prototype.Nn;
  Dq.prototype.useProgram = Dq.prototype.Ie;
  u("ol.xml.getAllTextContent", Xo, OPENLAYERS);
  u("ol.xml.parse", qp, OPENLAYERS);
  kd.prototype.changed = kd.prototype.s;
  kd.prototype.dispatchEvent = kd.prototype.o;
  kd.prototype.getRevision = kd.prototype.L;
  kd.prototype.on = kd.prototype.H;
  kd.prototype.once = kd.prototype.M;
  kd.prototype.un = kd.prototype.K;
  kd.prototype.unByKey = kd.prototype.N;
  qg.prototype.get = qg.prototype.get;
  qg.prototype.getKeys = qg.prototype.O;
  qg.prototype.getProperties = qg.prototype.P;
  qg.prototype.set = qg.prototype.set;
  qg.prototype.setProperties = qg.prototype.I;
  qg.prototype.unset = qg.prototype.R;
  qg.prototype.changed = qg.prototype.s;
  qg.prototype.dispatchEvent = qg.prototype.o;
  qg.prototype.getRevision = qg.prototype.L;
  qg.prototype.on = qg.prototype.H;
  qg.prototype.once = qg.prototype.M;
  qg.prototype.un = qg.prototype.K;
  qg.prototype.unByKey = qg.prototype.N;
  yh.prototype.get = yh.prototype.get;
  yh.prototype.getKeys = yh.prototype.O;
  yh.prototype.getProperties = yh.prototype.P;
  yh.prototype.set = yh.prototype.set;
  yh.prototype.setProperties = yh.prototype.I;
  yh.prototype.unset = yh.prototype.R;
  yh.prototype.changed = yh.prototype.s;
  yh.prototype.dispatchEvent = yh.prototype.o;
  yh.prototype.getRevision = yh.prototype.L;
  yh.prototype.on = yh.prototype.H;
  yh.prototype.once = yh.prototype.M;
  yh.prototype.un = yh.prototype.K;
  yh.prototype.unByKey = yh.prototype.N;
  ai.prototype.getMap = ai.prototype.g;
  ai.prototype.setMap = ai.prototype.setMap;
  ai.prototype.setTarget = ai.prototype.f;
  ai.prototype.get = ai.prototype.get;
  ai.prototype.getKeys = ai.prototype.O;
  ai.prototype.getProperties = ai.prototype.P;
  ai.prototype.set = ai.prototype.set;
  ai.prototype.setProperties = ai.prototype.I;
  ai.prototype.unset = ai.prototype.R;
  ai.prototype.changed = ai.prototype.s;
  ai.prototype.dispatchEvent = ai.prototype.o;
  ai.prototype.getRevision = ai.prototype.L;
  ai.prototype.on = ai.prototype.H;
  ai.prototype.once = ai.prototype.M;
  ai.prototype.un = ai.prototype.K;
  ai.prototype.unByKey = ai.prototype.N;
  mi.prototype.getMap = mi.prototype.g;
  mi.prototype.setMap = mi.prototype.setMap;
  mi.prototype.setTarget = mi.prototype.f;
  mi.prototype.get = mi.prototype.get;
  mi.prototype.getKeys = mi.prototype.O;
  mi.prototype.getProperties = mi.prototype.P;
  mi.prototype.set = mi.prototype.set;
  mi.prototype.setProperties = mi.prototype.I;
  mi.prototype.unset = mi.prototype.R;
  mi.prototype.changed = mi.prototype.s;
  mi.prototype.dispatchEvent = mi.prototype.o;
  mi.prototype.getRevision = mi.prototype.L;
  mi.prototype.on = mi.prototype.H;
  mi.prototype.once = mi.prototype.M;
  mi.prototype.un = mi.prototype.K;
  mi.prototype.unByKey = mi.prototype.N;
  ni.prototype.getMap = ni.prototype.g;
  ni.prototype.setMap = ni.prototype.setMap;
  ni.prototype.setTarget = ni.prototype.f;
  ni.prototype.get = ni.prototype.get;
  ni.prototype.getKeys = ni.prototype.O;
  ni.prototype.getProperties = ni.prototype.P;
  ni.prototype.set = ni.prototype.set;
  ni.prototype.setProperties = ni.prototype.I;
  ni.prototype.unset = ni.prototype.R;
  ni.prototype.changed = ni.prototype.s;
  ni.prototype.dispatchEvent = ni.prototype.o;
  ni.prototype.getRevision = ni.prototype.L;
  ni.prototype.on = ni.prototype.H;
  ni.prototype.once = ni.prototype.M;
  ni.prototype.un = ni.prototype.K;
  ni.prototype.unByKey = ni.prototype.N;
  oi.prototype.getMap = oi.prototype.g;
  oi.prototype.setMap = oi.prototype.setMap;
  oi.prototype.setTarget = oi.prototype.f;
  oi.prototype.get = oi.prototype.get;
  oi.prototype.getKeys = oi.prototype.O;
  oi.prototype.getProperties = oi.prototype.P;
  oi.prototype.set = oi.prototype.set;
  oi.prototype.setProperties = oi.prototype.I;
  oi.prototype.unset = oi.prototype.R;
  oi.prototype.changed = oi.prototype.s;
  oi.prototype.dispatchEvent = oi.prototype.o;
  oi.prototype.getRevision = oi.prototype.L;
  oi.prototype.on = oi.prototype.H;
  oi.prototype.once = oi.prototype.M;
  oi.prototype.un = oi.prototype.K;
  oi.prototype.unByKey = oi.prototype.N;
  Ar.prototype.getMap = Ar.prototype.g;
  Ar.prototype.setMap = Ar.prototype.setMap;
  Ar.prototype.setTarget = Ar.prototype.f;
  Ar.prototype.get = Ar.prototype.get;
  Ar.prototype.getKeys = Ar.prototype.O;
  Ar.prototype.getProperties = Ar.prototype.P;
  Ar.prototype.set = Ar.prototype.set;
  Ar.prototype.setProperties = Ar.prototype.I;
  Ar.prototype.unset = Ar.prototype.R;
  Ar.prototype.changed = Ar.prototype.s;
  Ar.prototype.dispatchEvent = Ar.prototype.o;
  Ar.prototype.getRevision = Ar.prototype.L;
  Ar.prototype.on = Ar.prototype.H;
  Ar.prototype.once = Ar.prototype.M;
  Ar.prototype.un = Ar.prototype.K;
  Ar.prototype.unByKey = Ar.prototype.N;
  di.prototype.getMap = di.prototype.g;
  di.prototype.setMap = di.prototype.setMap;
  di.prototype.setTarget = di.prototype.f;
  di.prototype.get = di.prototype.get;
  di.prototype.getKeys = di.prototype.O;
  di.prototype.getProperties = di.prototype.P;
  di.prototype.set = di.prototype.set;
  di.prototype.setProperties = di.prototype.I;
  di.prototype.unset = di.prototype.R;
  di.prototype.changed = di.prototype.s;
  di.prototype.dispatchEvent = di.prototype.o;
  di.prototype.getRevision = di.prototype.L;
  di.prototype.on = di.prototype.H;
  di.prototype.once = di.prototype.M;
  di.prototype.un = di.prototype.K;
  di.prototype.unByKey = di.prototype.N;
  Fr.prototype.getMap = Fr.prototype.g;
  Fr.prototype.setMap = Fr.prototype.setMap;
  Fr.prototype.setTarget = Fr.prototype.f;
  Fr.prototype.get = Fr.prototype.get;
  Fr.prototype.getKeys = Fr.prototype.O;
  Fr.prototype.getProperties = Fr.prototype.P;
  Fr.prototype.set = Fr.prototype.set;
  Fr.prototype.setProperties = Fr.prototype.I;
  Fr.prototype.unset = Fr.prototype.R;
  Fr.prototype.changed = Fr.prototype.s;
  Fr.prototype.dispatchEvent = Fr.prototype.o;
  Fr.prototype.getRevision = Fr.prototype.L;
  Fr.prototype.on = Fr.prototype.H;
  Fr.prototype.once = Fr.prototype.M;
  Fr.prototype.un = Fr.prototype.K;
  Fr.prototype.unByKey = Fr.prototype.N;
  fi.prototype.getMap = fi.prototype.g;
  fi.prototype.setMap = fi.prototype.setMap;
  fi.prototype.setTarget = fi.prototype.f;
  fi.prototype.get = fi.prototype.get;
  fi.prototype.getKeys = fi.prototype.O;
  fi.prototype.getProperties = fi.prototype.P;
  fi.prototype.set = fi.prototype.set;
  fi.prototype.setProperties = fi.prototype.I;
  fi.prototype.unset = fi.prototype.R;
  fi.prototype.changed = fi.prototype.s;
  fi.prototype.dispatchEvent = fi.prototype.o;
  fi.prototype.getRevision = fi.prototype.L;
  fi.prototype.on = fi.prototype.H;
  fi.prototype.once = fi.prototype.M;
  fi.prototype.un = fi.prototype.K;
  fi.prototype.unByKey = fi.prototype.N;
  Tr.prototype.getMap = Tr.prototype.g;
  Tr.prototype.setMap = Tr.prototype.setMap;
  Tr.prototype.setTarget = Tr.prototype.f;
  Tr.prototype.get = Tr.prototype.get;
  Tr.prototype.getKeys = Tr.prototype.O;
  Tr.prototype.getProperties = Tr.prototype.P;
  Tr.prototype.set = Tr.prototype.set;
  Tr.prototype.setProperties = Tr.prototype.I;
  Tr.prototype.unset = Tr.prototype.R;
  Tr.prototype.changed = Tr.prototype.s;
  Tr.prototype.dispatchEvent = Tr.prototype.o;
  Tr.prototype.getRevision = Tr.prototype.L;
  Tr.prototype.on = Tr.prototype.H;
  Tr.prototype.once = Tr.prototype.M;
  Tr.prototype.un = Tr.prototype.K;
  Tr.prototype.unByKey = Tr.prototype.N;
  Zr.prototype.getMap = Zr.prototype.g;
  Zr.prototype.setMap = Zr.prototype.setMap;
  Zr.prototype.setTarget = Zr.prototype.f;
  Zr.prototype.get = Zr.prototype.get;
  Zr.prototype.getKeys = Zr.prototype.O;
  Zr.prototype.getProperties = Zr.prototype.P;
  Zr.prototype.set = Zr.prototype.set;
  Zr.prototype.setProperties = Zr.prototype.I;
  Zr.prototype.unset = Zr.prototype.R;
  Zr.prototype.changed = Zr.prototype.s;
  Zr.prototype.dispatchEvent = Zr.prototype.o;
  Zr.prototype.getRevision = Zr.prototype.L;
  Zr.prototype.on = Zr.prototype.H;
  Zr.prototype.once = Zr.prototype.M;
  Zr.prototype.un = Zr.prototype.K;
  Zr.prototype.unByKey = Zr.prototype.N;
  $r.prototype.get = $r.prototype.get;
  $r.prototype.getKeys = $r.prototype.O;
  $r.prototype.getProperties = $r.prototype.P;
  $r.prototype.set = $r.prototype.set;
  $r.prototype.setProperties = $r.prototype.I;
  $r.prototype.unset = $r.prototype.R;
  $r.prototype.changed = $r.prototype.s;
  $r.prototype.dispatchEvent = $r.prototype.o;
  $r.prototype.getRevision = $r.prototype.L;
  $r.prototype.on = $r.prototype.H;
  $r.prototype.once = $r.prototype.M;
  $r.prototype.un = $r.prototype.K;
  $r.prototype.unByKey = $r.prototype.N;
  Bn.prototype.get = Bn.prototype.get;
  Bn.prototype.getKeys = Bn.prototype.O;
  Bn.prototype.getProperties = Bn.prototype.P;
  Bn.prototype.set = Bn.prototype.set;
  Bn.prototype.setProperties = Bn.prototype.I;
  Bn.prototype.unset = Bn.prototype.R;
  Bn.prototype.changed = Bn.prototype.s;
  Bn.prototype.dispatchEvent = Bn.prototype.o;
  Bn.prototype.getRevision = Bn.prototype.L;
  Bn.prototype.on = Bn.prototype.H;
  Bn.prototype.once = Bn.prototype.M;
  Bn.prototype.un = Bn.prototype.K;
  Bn.prototype.unByKey = Bn.prototype.N;
  Ss.prototype.readFeatures = Ss.prototype.Ba;
  Ts.prototype.readFeatures = Ts.prototype.Ba;
  Ts.prototype.readFeatures = Ts.prototype.Ba;
  $x.prototype.get = $x.prototype.get;
  $x.prototype.getKeys = $x.prototype.O;
  $x.prototype.getProperties = $x.prototype.P;
  $x.prototype.set = $x.prototype.set;
  $x.prototype.setProperties = $x.prototype.I;
  $x.prototype.unset = $x.prototype.R;
  $x.prototype.changed = $x.prototype.s;
  $x.prototype.dispatchEvent = $x.prototype.o;
  $x.prototype.getRevision = $x.prototype.L;
  $x.prototype.on = $x.prototype.H;
  $x.prototype.once = $x.prototype.M;
  $x.prototype.un = $x.prototype.K;
  $x.prototype.unByKey = $x.prototype.N;
  df.prototype.get = df.prototype.get;
  df.prototype.getKeys = df.prototype.O;
  df.prototype.getProperties = df.prototype.P;
  df.prototype.set = df.prototype.set;
  df.prototype.setProperties = df.prototype.I;
  df.prototype.unset = df.prototype.R;
  df.prototype.changed = df.prototype.s;
  df.prototype.dispatchEvent = df.prototype.o;
  df.prototype.getRevision = df.prototype.L;
  df.prototype.on = df.prototype.H;
  df.prototype.once = df.prototype.M;
  df.prototype.un = df.prototype.K;
  df.prototype.unByKey = df.prototype.N;
  ff.prototype.getClosestPoint = ff.prototype.pb;
  ff.prototype.getExtent = ff.prototype.J;
  ff.prototype.simplify = ff.prototype.yb;
  ff.prototype.transform = ff.prototype.kb;
  ff.prototype.get = ff.prototype.get;
  ff.prototype.getKeys = ff.prototype.O;
  ff.prototype.getProperties = ff.prototype.P;
  ff.prototype.set = ff.prototype.set;
  ff.prototype.setProperties = ff.prototype.I;
  ff.prototype.unset = ff.prototype.R;
  ff.prototype.changed = ff.prototype.s;
  ff.prototype.dispatchEvent = ff.prototype.o;
  ff.prototype.getRevision = ff.prototype.L;
  ff.prototype.on = ff.prototype.H;
  ff.prototype.once = ff.prototype.M;
  ff.prototype.un = ff.prototype.K;
  ff.prototype.unByKey = ff.prototype.N;
  ay.prototype.getFirstCoordinate = ay.prototype.Jb;
  ay.prototype.getLastCoordinate = ay.prototype.Kb;
  ay.prototype.getLayout = ay.prototype.Lb;
  ay.prototype.getClosestPoint = ay.prototype.pb;
  ay.prototype.getExtent = ay.prototype.J;
  ay.prototype.simplify = ay.prototype.yb;
  ay.prototype.get = ay.prototype.get;
  ay.prototype.getKeys = ay.prototype.O;
  ay.prototype.getProperties = ay.prototype.P;
  ay.prototype.set = ay.prototype.set;
  ay.prototype.setProperties = ay.prototype.I;
  ay.prototype.unset = ay.prototype.R;
  ay.prototype.changed = ay.prototype.s;
  ay.prototype.dispatchEvent = ay.prototype.o;
  ay.prototype.getRevision = ay.prototype.L;
  ay.prototype.on = ay.prototype.H;
  ay.prototype.once = ay.prototype.M;
  ay.prototype.un = ay.prototype.K;
  ay.prototype.unByKey = ay.prototype.N;
  us.prototype.getClosestPoint = us.prototype.pb;
  us.prototype.getExtent = us.prototype.J;
  us.prototype.simplify = us.prototype.yb;
  us.prototype.transform = us.prototype.kb;
  us.prototype.get = us.prototype.get;
  us.prototype.getKeys = us.prototype.O;
  us.prototype.getProperties = us.prototype.P;
  us.prototype.set = us.prototype.set;
  us.prototype.setProperties = us.prototype.I;
  us.prototype.unset = us.prototype.R;
  us.prototype.changed = us.prototype.s;
  us.prototype.dispatchEvent = us.prototype.o;
  us.prototype.getRevision = us.prototype.L;
  us.prototype.on = us.prototype.H;
  us.prototype.once = us.prototype.M;
  us.prototype.un = us.prototype.K;
  us.prototype.unByKey = us.prototype.N;
  yf.prototype.getFirstCoordinate = yf.prototype.Jb;
  yf.prototype.getLastCoordinate = yf.prototype.Kb;
  yf.prototype.getLayout = yf.prototype.Lb;
  yf.prototype.getClosestPoint = yf.prototype.pb;
  yf.prototype.getExtent = yf.prototype.J;
  yf.prototype.simplify = yf.prototype.yb;
  yf.prototype.transform = yf.prototype.kb;
  yf.prototype.get = yf.prototype.get;
  yf.prototype.getKeys = yf.prototype.O;
  yf.prototype.getProperties = yf.prototype.P;
  yf.prototype.set = yf.prototype.set;
  yf.prototype.setProperties = yf.prototype.I;
  yf.prototype.unset = yf.prototype.R;
  yf.prototype.changed = yf.prototype.s;
  yf.prototype.dispatchEvent = yf.prototype.o;
  yf.prototype.getRevision = yf.prototype.L;
  yf.prototype.on = yf.prototype.H;
  yf.prototype.once = yf.prototype.M;
  yf.prototype.un = yf.prototype.K;
  yf.prototype.unByKey = yf.prototype.N;
  T.prototype.getFirstCoordinate = T.prototype.Jb;
  T.prototype.getLastCoordinate = T.prototype.Kb;
  T.prototype.getLayout = T.prototype.Lb;
  T.prototype.getClosestPoint = T.prototype.pb;
  T.prototype.getExtent = T.prototype.J;
  T.prototype.simplify = T.prototype.yb;
  T.prototype.transform = T.prototype.kb;
  T.prototype.get = T.prototype.get;
  T.prototype.getKeys = T.prototype.O;
  T.prototype.getProperties = T.prototype.P;
  T.prototype.set = T.prototype.set;
  T.prototype.setProperties = T.prototype.I;
  T.prototype.unset = T.prototype.R;
  T.prototype.changed = T.prototype.s;
  T.prototype.dispatchEvent = T.prototype.o;
  T.prototype.getRevision = T.prototype.L;
  T.prototype.on = T.prototype.H;
  T.prototype.once = T.prototype.M;
  T.prototype.un = T.prototype.K;
  T.prototype.unByKey = T.prototype.N;
  U.prototype.getFirstCoordinate = U.prototype.Jb;
  U.prototype.getLastCoordinate = U.prototype.Kb;
  U.prototype.getLayout = U.prototype.Lb;
  U.prototype.getClosestPoint = U.prototype.pb;
  U.prototype.getExtent = U.prototype.J;
  U.prototype.simplify = U.prototype.yb;
  U.prototype.transform = U.prototype.kb;
  U.prototype.get = U.prototype.get;
  U.prototype.getKeys = U.prototype.O;
  U.prototype.getProperties = U.prototype.P;
  U.prototype.set = U.prototype.set;
  U.prototype.setProperties = U.prototype.I;
  U.prototype.unset = U.prototype.R;
  U.prototype.changed = U.prototype.s;
  U.prototype.dispatchEvent = U.prototype.o;
  U.prototype.getRevision = U.prototype.L;
  U.prototype.on = U.prototype.H;
  U.prototype.once = U.prototype.M;
  U.prototype.un = U.prototype.K;
  U.prototype.unByKey = U.prototype.N;
  ks.prototype.getFirstCoordinate = ks.prototype.Jb;
  ks.prototype.getLastCoordinate = ks.prototype.Kb;
  ks.prototype.getLayout = ks.prototype.Lb;
  ks.prototype.getClosestPoint = ks.prototype.pb;
  ks.prototype.getExtent = ks.prototype.J;
  ks.prototype.simplify = ks.prototype.yb;
  ks.prototype.transform = ks.prototype.kb;
  ks.prototype.get = ks.prototype.get;
  ks.prototype.getKeys = ks.prototype.O;
  ks.prototype.getProperties = ks.prototype.P;
  ks.prototype.set = ks.prototype.set;
  ks.prototype.setProperties = ks.prototype.I;
  ks.prototype.unset = ks.prototype.R;
  ks.prototype.changed = ks.prototype.s;
  ks.prototype.dispatchEvent = ks.prototype.o;
  ks.prototype.getRevision = ks.prototype.L;
  ks.prototype.on = ks.prototype.H;
  ks.prototype.once = ks.prototype.M;
  ks.prototype.un = ks.prototype.K;
  ks.prototype.unByKey = ks.prototype.N;
  V.prototype.getFirstCoordinate = V.prototype.Jb;
  V.prototype.getLastCoordinate = V.prototype.Kb;
  V.prototype.getLayout = V.prototype.Lb;
  V.prototype.getClosestPoint = V.prototype.pb;
  V.prototype.getExtent = V.prototype.J;
  V.prototype.simplify = V.prototype.yb;
  V.prototype.transform = V.prototype.kb;
  V.prototype.get = V.prototype.get;
  V.prototype.getKeys = V.prototype.O;
  V.prototype.getProperties = V.prototype.P;
  V.prototype.set = V.prototype.set;
  V.prototype.setProperties = V.prototype.I;
  V.prototype.unset = V.prototype.R;
  V.prototype.changed = V.prototype.s;
  V.prototype.dispatchEvent = V.prototype.o;
  V.prototype.getRevision = V.prototype.L;
  V.prototype.on = V.prototype.H;
  V.prototype.once = V.prototype.M;
  V.prototype.un = V.prototype.K;
  V.prototype.unByKey = V.prototype.N;
  D.prototype.getFirstCoordinate = D.prototype.Jb;
  D.prototype.getLastCoordinate = D.prototype.Kb;
  D.prototype.getLayout = D.prototype.Lb;
  D.prototype.getClosestPoint = D.prototype.pb;
  D.prototype.getExtent = D.prototype.J;
  D.prototype.simplify = D.prototype.yb;
  D.prototype.transform = D.prototype.kb;
  D.prototype.get = D.prototype.get;
  D.prototype.getKeys = D.prototype.O;
  D.prototype.getProperties = D.prototype.P;
  D.prototype.set = D.prototype.set;
  D.prototype.setProperties = D.prototype.I;
  D.prototype.unset = D.prototype.R;
  D.prototype.changed = D.prototype.s;
  D.prototype.dispatchEvent = D.prototype.o;
  D.prototype.getRevision = D.prototype.L;
  D.prototype.on = D.prototype.H;
  D.prototype.once = D.prototype.M;
  D.prototype.un = D.prototype.K;
  D.prototype.unByKey = D.prototype.N;
  E.prototype.getFirstCoordinate = E.prototype.Jb;
  E.prototype.getLastCoordinate = E.prototype.Kb;
  E.prototype.getLayout = E.prototype.Lb;
  E.prototype.getClosestPoint = E.prototype.pb;
  E.prototype.getExtent = E.prototype.J;
  E.prototype.simplify = E.prototype.yb;
  E.prototype.transform = E.prototype.kb;
  E.prototype.get = E.prototype.get;
  E.prototype.getKeys = E.prototype.O;
  E.prototype.getProperties = E.prototype.P;
  E.prototype.set = E.prototype.set;
  E.prototype.setProperties = E.prototype.I;
  E.prototype.unset = E.prototype.R;
  E.prototype.changed = E.prototype.s;
  E.prototype.dispatchEvent = E.prototype.o;
  E.prototype.getRevision = E.prototype.L;
  E.prototype.on = E.prototype.H;
  E.prototype.once = E.prototype.M;
  E.prototype.un = E.prototype.K;
  E.prototype.unByKey = E.prototype.N;
  ly.prototype.getTileCoord = ly.prototype.f;
  Xk.prototype.get = Xk.prototype.get;
  Xk.prototype.getKeys = Xk.prototype.O;
  Xk.prototype.getProperties = Xk.prototype.P;
  Xk.prototype.set = Xk.prototype.set;
  Xk.prototype.setProperties = Xk.prototype.I;
  Xk.prototype.unset = Xk.prototype.R;
  Xk.prototype.changed = Xk.prototype.s;
  Xk.prototype.dispatchEvent = Xk.prototype.o;
  Xk.prototype.getRevision = Xk.prototype.L;
  Xk.prototype.on = Xk.prototype.H;
  Xk.prototype.once = Xk.prototype.M;
  Xk.prototype.un = Xk.prototype.K;
  Xk.prototype.unByKey = Xk.prototype.N;
  al.prototype.getActive = al.prototype.b;
  al.prototype.setActive = al.prototype.g;
  al.prototype.get = al.prototype.get;
  al.prototype.getKeys = al.prototype.O;
  al.prototype.getProperties = al.prototype.P;
  al.prototype.set = al.prototype.set;
  al.prototype.setProperties = al.prototype.I;
  al.prototype.unset = al.prototype.R;
  al.prototype.changed = al.prototype.s;
  al.prototype.dispatchEvent = al.prototype.o;
  al.prototype.getRevision = al.prototype.L;
  al.prototype.on = al.prototype.H;
  al.prototype.once = al.prototype.M;
  al.prototype.un = al.prototype.K;
  al.prototype.unByKey = al.prototype.N;
  Gy.prototype.getActive = Gy.prototype.b;
  Gy.prototype.setActive = Gy.prototype.g;
  Gy.prototype.get = Gy.prototype.get;
  Gy.prototype.getKeys = Gy.prototype.O;
  Gy.prototype.getProperties = Gy.prototype.P;
  Gy.prototype.set = Gy.prototype.set;
  Gy.prototype.setProperties = Gy.prototype.I;
  Gy.prototype.unset = Gy.prototype.R;
  Gy.prototype.changed = Gy.prototype.s;
  Gy.prototype.dispatchEvent = Gy.prototype.o;
  Gy.prototype.getRevision = Gy.prototype.L;
  Gy.prototype.on = Gy.prototype.H;
  Gy.prototype.once = Gy.prototype.M;
  Gy.prototype.un = Gy.prototype.K;
  Gy.prototype.unByKey = Gy.prototype.N;
  jl.prototype.getActive = jl.prototype.b;
  jl.prototype.setActive = jl.prototype.g;
  jl.prototype.get = jl.prototype.get;
  jl.prototype.getKeys = jl.prototype.O;
  jl.prototype.getProperties = jl.prototype.P;
  jl.prototype.set = jl.prototype.set;
  jl.prototype.setProperties = jl.prototype.I;
  jl.prototype.unset = jl.prototype.R;
  jl.prototype.changed = jl.prototype.s;
  jl.prototype.dispatchEvent = jl.prototype.o;
  jl.prototype.getRevision = jl.prototype.L;
  jl.prototype.on = jl.prototype.H;
  jl.prototype.once = jl.prototype.M;
  jl.prototype.un = jl.prototype.K;
  jl.prototype.unByKey = jl.prototype.N;
  zl.prototype.getActive = zl.prototype.b;
  zl.prototype.setActive = zl.prototype.g;
  zl.prototype.get = zl.prototype.get;
  zl.prototype.getKeys = zl.prototype.O;
  zl.prototype.getProperties = zl.prototype.P;
  zl.prototype.set = zl.prototype.set;
  zl.prototype.setProperties = zl.prototype.I;
  zl.prototype.unset = zl.prototype.R;
  zl.prototype.changed = zl.prototype.s;
  zl.prototype.dispatchEvent = zl.prototype.o;
  zl.prototype.getRevision = zl.prototype.L;
  zl.prototype.on = zl.prototype.H;
  zl.prototype.once = zl.prototype.M;
  zl.prototype.un = zl.prototype.K;
  zl.prototype.unByKey = zl.prototype.N;
  ml.prototype.getActive = ml.prototype.b;
  ml.prototype.setActive = ml.prototype.g;
  ml.prototype.get = ml.prototype.get;
  ml.prototype.getKeys = ml.prototype.O;
  ml.prototype.getProperties = ml.prototype.P;
  ml.prototype.set = ml.prototype.set;
  ml.prototype.setProperties = ml.prototype.I;
  ml.prototype.unset = ml.prototype.R;
  ml.prototype.changed = ml.prototype.s;
  ml.prototype.dispatchEvent = ml.prototype.o;
  ml.prototype.getRevision = ml.prototype.L;
  ml.prototype.on = ml.prototype.H;
  ml.prototype.once = ml.prototype.M;
  ml.prototype.un = ml.prototype.K;
  ml.prototype.unByKey = ml.prototype.N;
  Ky.prototype.getActive = Ky.prototype.b;
  Ky.prototype.setActive = Ky.prototype.g;
  Ky.prototype.get = Ky.prototype.get;
  Ky.prototype.getKeys = Ky.prototype.O;
  Ky.prototype.getProperties = Ky.prototype.P;
  Ky.prototype.set = Ky.prototype.set;
  Ky.prototype.setProperties = Ky.prototype.I;
  Ky.prototype.unset = Ky.prototype.R;
  Ky.prototype.changed = Ky.prototype.s;
  Ky.prototype.dispatchEvent = Ky.prototype.o;
  Ky.prototype.getRevision = Ky.prototype.L;
  Ky.prototype.on = Ky.prototype.H;
  Ky.prototype.once = Ky.prototype.M;
  Ky.prototype.un = Ky.prototype.K;
  Ky.prototype.unByKey = Ky.prototype.N;
  rl.prototype.getActive = rl.prototype.b;
  rl.prototype.setActive = rl.prototype.g;
  rl.prototype.get = rl.prototype.get;
  rl.prototype.getKeys = rl.prototype.O;
  rl.prototype.getProperties = rl.prototype.P;
  rl.prototype.set = rl.prototype.set;
  rl.prototype.setProperties = rl.prototype.I;
  rl.prototype.unset = rl.prototype.R;
  rl.prototype.changed = rl.prototype.s;
  rl.prototype.dispatchEvent = rl.prototype.o;
  rl.prototype.getRevision = rl.prototype.L;
  rl.prototype.on = rl.prototype.H;
  rl.prototype.once = rl.prototype.M;
  rl.prototype.un = rl.prototype.K;
  rl.prototype.unByKey = rl.prototype.N;
  Dl.prototype.getGeometry = Dl.prototype.W;
  Dl.prototype.getActive = Dl.prototype.b;
  Dl.prototype.setActive = Dl.prototype.g;
  Dl.prototype.get = Dl.prototype.get;
  Dl.prototype.getKeys = Dl.prototype.O;
  Dl.prototype.getProperties = Dl.prototype.P;
  Dl.prototype.set = Dl.prototype.set;
  Dl.prototype.setProperties = Dl.prototype.I;
  Dl.prototype.unset = Dl.prototype.R;
  Dl.prototype.changed = Dl.prototype.s;
  Dl.prototype.dispatchEvent = Dl.prototype.o;
  Dl.prototype.getRevision = Dl.prototype.L;
  Dl.prototype.on = Dl.prototype.H;
  Dl.prototype.once = Dl.prototype.M;
  Dl.prototype.un = Dl.prototype.K;
  Dl.prototype.unByKey = Dl.prototype.N;
  Py.prototype.getActive = Py.prototype.b;
  Py.prototype.setActive = Py.prototype.g;
  Py.prototype.get = Py.prototype.get;
  Py.prototype.getKeys = Py.prototype.O;
  Py.prototype.getProperties = Py.prototype.P;
  Py.prototype.set = Py.prototype.set;
  Py.prototype.setProperties = Py.prototype.I;
  Py.prototype.unset = Py.prototype.R;
  Py.prototype.changed = Py.prototype.s;
  Py.prototype.dispatchEvent = Py.prototype.o;
  Py.prototype.getRevision = Py.prototype.L;
  Py.prototype.on = Py.prototype.H;
  Py.prototype.once = Py.prototype.M;
  Py.prototype.un = Py.prototype.K;
  Py.prototype.unByKey = Py.prototype.N;
  El.prototype.getActive = El.prototype.b;
  El.prototype.setActive = El.prototype.g;
  El.prototype.get = El.prototype.get;
  El.prototype.getKeys = El.prototype.O;
  El.prototype.getProperties = El.prototype.P;
  El.prototype.set = El.prototype.set;
  El.prototype.setProperties = El.prototype.I;
  El.prototype.unset = El.prototype.R;
  El.prototype.changed = El.prototype.s;
  El.prototype.dispatchEvent = El.prototype.o;
  El.prototype.getRevision = El.prototype.L;
  El.prototype.on = El.prototype.H;
  El.prototype.once = El.prototype.M;
  El.prototype.un = El.prototype.K;
  El.prototype.unByKey = El.prototype.N;
  Gl.prototype.getActive = Gl.prototype.b;
  Gl.prototype.setActive = Gl.prototype.g;
  Gl.prototype.get = Gl.prototype.get;
  Gl.prototype.getKeys = Gl.prototype.O;
  Gl.prototype.getProperties = Gl.prototype.P;
  Gl.prototype.set = Gl.prototype.set;
  Gl.prototype.setProperties = Gl.prototype.I;
  Gl.prototype.unset = Gl.prototype.R;
  Gl.prototype.changed = Gl.prototype.s;
  Gl.prototype.dispatchEvent = Gl.prototype.o;
  Gl.prototype.getRevision = Gl.prototype.L;
  Gl.prototype.on = Gl.prototype.H;
  Gl.prototype.once = Gl.prototype.M;
  Gl.prototype.un = Gl.prototype.K;
  Gl.prototype.unByKey = Gl.prototype.N;
  fz.prototype.getActive = fz.prototype.b;
  fz.prototype.setActive = fz.prototype.g;
  fz.prototype.get = fz.prototype.get;
  fz.prototype.getKeys = fz.prototype.O;
  fz.prototype.getProperties = fz.prototype.P;
  fz.prototype.set = fz.prototype.set;
  fz.prototype.setProperties = fz.prototype.I;
  fz.prototype.unset = fz.prototype.R;
  fz.prototype.changed = fz.prototype.s;
  fz.prototype.dispatchEvent = fz.prototype.o;
  fz.prototype.getRevision = fz.prototype.L;
  fz.prototype.on = fz.prototype.H;
  fz.prototype.once = fz.prototype.M;
  fz.prototype.un = fz.prototype.K;
  fz.prototype.unByKey = fz.prototype.N;
  Il.prototype.getActive = Il.prototype.b;
  Il.prototype.setActive = Il.prototype.g;
  Il.prototype.get = Il.prototype.get;
  Il.prototype.getKeys = Il.prototype.O;
  Il.prototype.getProperties = Il.prototype.P;
  Il.prototype.set = Il.prototype.set;
  Il.prototype.setProperties = Il.prototype.I;
  Il.prototype.unset = Il.prototype.R;
  Il.prototype.changed = Il.prototype.s;
  Il.prototype.dispatchEvent = Il.prototype.o;
  Il.prototype.getRevision = Il.prototype.L;
  Il.prototype.on = Il.prototype.H;
  Il.prototype.once = Il.prototype.M;
  Il.prototype.un = Il.prototype.K;
  Il.prototype.unByKey = Il.prototype.N;
  Kl.prototype.getActive = Kl.prototype.b;
  Kl.prototype.setActive = Kl.prototype.g;
  Kl.prototype.get = Kl.prototype.get;
  Kl.prototype.getKeys = Kl.prototype.O;
  Kl.prototype.getProperties = Kl.prototype.P;
  Kl.prototype.set = Kl.prototype.set;
  Kl.prototype.setProperties = Kl.prototype.I;
  Kl.prototype.unset = Kl.prototype.R;
  Kl.prototype.changed = Kl.prototype.s;
  Kl.prototype.dispatchEvent = Kl.prototype.o;
  Kl.prototype.getRevision = Kl.prototype.L;
  Kl.prototype.on = Kl.prototype.H;
  Kl.prototype.once = Kl.prototype.M;
  Kl.prototype.un = Kl.prototype.K;
  Kl.prototype.unByKey = Kl.prototype.N;
  Ol.prototype.getActive = Ol.prototype.b;
  Ol.prototype.setActive = Ol.prototype.g;
  Ol.prototype.get = Ol.prototype.get;
  Ol.prototype.getKeys = Ol.prototype.O;
  Ol.prototype.getProperties = Ol.prototype.P;
  Ol.prototype.set = Ol.prototype.set;
  Ol.prototype.setProperties = Ol.prototype.I;
  Ol.prototype.unset = Ol.prototype.R;
  Ol.prototype.changed = Ol.prototype.s;
  Ol.prototype.dispatchEvent = Ol.prototype.o;
  Ol.prototype.getRevision = Ol.prototype.L;
  Ol.prototype.on = Ol.prototype.H;
  Ol.prototype.once = Ol.prototype.M;
  Ol.prototype.un = Ol.prototype.K;
  Ol.prototype.unByKey = Ol.prototype.N;
  uz.prototype.getActive = uz.prototype.b;
  uz.prototype.setActive = uz.prototype.g;
  uz.prototype.get = uz.prototype.get;
  uz.prototype.getKeys = uz.prototype.O;
  uz.prototype.getProperties = uz.prototype.P;
  uz.prototype.set = uz.prototype.set;
  uz.prototype.setProperties = uz.prototype.I;
  uz.prototype.unset = uz.prototype.R;
  uz.prototype.changed = uz.prototype.s;
  uz.prototype.dispatchEvent = uz.prototype.o;
  uz.prototype.getRevision = uz.prototype.L;
  uz.prototype.on = uz.prototype.H;
  uz.prototype.once = uz.prototype.M;
  uz.prototype.un = uz.prototype.K;
  uz.prototype.unByKey = uz.prototype.N;
  xz.prototype.getActive = xz.prototype.b;
  xz.prototype.setActive = xz.prototype.g;
  xz.prototype.get = xz.prototype.get;
  xz.prototype.getKeys = xz.prototype.O;
  xz.prototype.getProperties = xz.prototype.P;
  xz.prototype.set = xz.prototype.set;
  xz.prototype.setProperties = xz.prototype.I;
  xz.prototype.unset = xz.prototype.R;
  xz.prototype.changed = xz.prototype.s;
  xz.prototype.dispatchEvent = xz.prototype.o;
  xz.prototype.getRevision = xz.prototype.L;
  xz.prototype.on = xz.prototype.H;
  xz.prototype.once = xz.prototype.M;
  xz.prototype.un = xz.prototype.K;
  xz.prototype.unByKey = xz.prototype.N;
  Cz.prototype.getActive = Cz.prototype.b;
  Cz.prototype.setActive = Cz.prototype.g;
  Cz.prototype.get = Cz.prototype.get;
  Cz.prototype.getKeys = Cz.prototype.O;
  Cz.prototype.getProperties = Cz.prototype.P;
  Cz.prototype.set = Cz.prototype.set;
  Cz.prototype.setProperties = Cz.prototype.I;
  Cz.prototype.unset = Cz.prototype.R;
  Cz.prototype.changed = Cz.prototype.s;
  Cz.prototype.dispatchEvent = Cz.prototype.o;
  Cz.prototype.getRevision = Cz.prototype.L;
  Cz.prototype.on = Cz.prototype.H;
  Cz.prototype.once = Cz.prototype.M;
  Cz.prototype.un = Cz.prototype.K;
  Cz.prototype.unByKey = Cz.prototype.N;
  jk.prototype.get = jk.prototype.get;
  jk.prototype.getKeys = jk.prototype.O;
  jk.prototype.getProperties = jk.prototype.P;
  jk.prototype.set = jk.prototype.set;
  jk.prototype.setProperties = jk.prototype.I;
  jk.prototype.unset = jk.prototype.R;
  jk.prototype.changed = jk.prototype.s;
  jk.prototype.dispatchEvent = jk.prototype.o;
  jk.prototype.getRevision = jk.prototype.L;
  jk.prototype.on = jk.prototype.H;
  jk.prototype.once = jk.prototype.M;
  jk.prototype.un = jk.prototype.K;
  jk.prototype.unByKey = jk.prototype.N;
  nk.prototype.getExtent = nk.prototype.J;
  nk.prototype.getMaxResolution = nk.prototype.Pb;
  nk.prototype.getMinResolution = nk.prototype.Qb;
  nk.prototype.getOpacity = nk.prototype.Rb;
  nk.prototype.getVisible = nk.prototype.qb;
  nk.prototype.getZIndex = nk.prototype.Sb;
  nk.prototype.setExtent = nk.prototype.bc;
  nk.prototype.setMaxResolution = nk.prototype.jc;
  nk.prototype.setMinResolution = nk.prototype.kc;
  nk.prototype.setOpacity = nk.prototype.cc;
  nk.prototype.setVisible = nk.prototype.dc;
  nk.prototype.setZIndex = nk.prototype.ec;
  nk.prototype.get = nk.prototype.get;
  nk.prototype.getKeys = nk.prototype.O;
  nk.prototype.getProperties = nk.prototype.P;
  nk.prototype.set = nk.prototype.set;
  nk.prototype.setProperties = nk.prototype.I;
  nk.prototype.unset = nk.prototype.R;
  nk.prototype.changed = nk.prototype.s;
  nk.prototype.dispatchEvent = nk.prototype.o;
  nk.prototype.getRevision = nk.prototype.L;
  nk.prototype.on = nk.prototype.H;
  nk.prototype.once = nk.prototype.M;
  nk.prototype.un = nk.prototype.K;
  nk.prototype.unByKey = nk.prototype.N;
  H.prototype.setMap = H.prototype.setMap;
  H.prototype.setSource = H.prototype.wc;
  H.prototype.getExtent = H.prototype.J;
  H.prototype.getMaxResolution = H.prototype.Pb;
  H.prototype.getMinResolution = H.prototype.Qb;
  H.prototype.getOpacity = H.prototype.Rb;
  H.prototype.getVisible = H.prototype.qb;
  H.prototype.getZIndex = H.prototype.Sb;
  H.prototype.setExtent = H.prototype.bc;
  H.prototype.setMaxResolution = H.prototype.jc;
  H.prototype.setMinResolution = H.prototype.kc;
  H.prototype.setOpacity = H.prototype.cc;
  H.prototype.setVisible = H.prototype.dc;
  H.prototype.setZIndex = H.prototype.ec;
  H.prototype.get = H.prototype.get;
  H.prototype.getKeys = H.prototype.O;
  H.prototype.getProperties = H.prototype.P;
  H.prototype.set = H.prototype.set;
  H.prototype.setProperties = H.prototype.I;
  H.prototype.unset = H.prototype.R;
  H.prototype.changed = H.prototype.s;
  H.prototype.dispatchEvent = H.prototype.o;
  H.prototype.getRevision = H.prototype.L;
  H.prototype.on = H.prototype.H;
  H.prototype.once = H.prototype.M;
  H.prototype.un = H.prototype.K;
  H.prototype.unByKey = H.prototype.N;
  X.prototype.getSource = X.prototype.ga;
  X.prototype.getStyle = X.prototype.C;
  X.prototype.getStyleFunction = X.prototype.G;
  X.prototype.setStyle = X.prototype.f;
  X.prototype.setMap = X.prototype.setMap;
  X.prototype.setSource = X.prototype.wc;
  X.prototype.getExtent = X.prototype.J;
  X.prototype.getMaxResolution = X.prototype.Pb;
  X.prototype.getMinResolution = X.prototype.Qb;
  X.prototype.getOpacity = X.prototype.Rb;
  X.prototype.getVisible = X.prototype.qb;
  X.prototype.getZIndex = X.prototype.Sb;
  X.prototype.setExtent = X.prototype.bc;
  X.prototype.setMaxResolution = X.prototype.jc;
  X.prototype.setMinResolution = X.prototype.kc;
  X.prototype.setOpacity = X.prototype.cc;
  X.prototype.setVisible = X.prototype.dc;
  X.prototype.setZIndex = X.prototype.ec;
  X.prototype.get = X.prototype.get;
  X.prototype.getKeys = X.prototype.O;
  X.prototype.getProperties = X.prototype.P;
  X.prototype.set = X.prototype.set;
  X.prototype.setProperties = X.prototype.I;
  X.prototype.unset = X.prototype.R;
  X.prototype.changed = X.prototype.s;
  X.prototype.dispatchEvent = X.prototype.o;
  X.prototype.getRevision = X.prototype.L;
  X.prototype.on = X.prototype.H;
  X.prototype.once = X.prototype.M;
  X.prototype.un = X.prototype.K;
  X.prototype.unByKey = X.prototype.N;
  am.prototype.setMap = am.prototype.setMap;
  am.prototype.setSource = am.prototype.wc;
  am.prototype.getExtent = am.prototype.J;
  am.prototype.getMaxResolution = am.prototype.Pb;
  am.prototype.getMinResolution = am.prototype.Qb;
  am.prototype.getOpacity = am.prototype.Rb;
  am.prototype.getVisible = am.prototype.qb;
  am.prototype.getZIndex = am.prototype.Sb;
  am.prototype.setExtent = am.prototype.bc;
  am.prototype.setMaxResolution = am.prototype.jc;
  am.prototype.setMinResolution = am.prototype.kc;
  am.prototype.setOpacity = am.prototype.cc;
  am.prototype.setVisible = am.prototype.dc;
  am.prototype.setZIndex = am.prototype.ec;
  am.prototype.get = am.prototype.get;
  am.prototype.getKeys = am.prototype.O;
  am.prototype.getProperties = am.prototype.P;
  am.prototype.set = am.prototype.set;
  am.prototype.setProperties = am.prototype.I;
  am.prototype.unset = am.prototype.R;
  am.prototype.changed = am.prototype.s;
  am.prototype.dispatchEvent = am.prototype.o;
  am.prototype.getRevision = am.prototype.L;
  am.prototype.on = am.prototype.H;
  am.prototype.once = am.prototype.M;
  am.prototype.un = am.prototype.K;
  am.prototype.unByKey = am.prototype.N;
  Tl.prototype.getExtent = Tl.prototype.J;
  Tl.prototype.getMaxResolution = Tl.prototype.Pb;
  Tl.prototype.getMinResolution = Tl.prototype.Qb;
  Tl.prototype.getOpacity = Tl.prototype.Rb;
  Tl.prototype.getVisible = Tl.prototype.qb;
  Tl.prototype.getZIndex = Tl.prototype.Sb;
  Tl.prototype.setExtent = Tl.prototype.bc;
  Tl.prototype.setMaxResolution = Tl.prototype.jc;
  Tl.prototype.setMinResolution = Tl.prototype.kc;
  Tl.prototype.setOpacity = Tl.prototype.cc;
  Tl.prototype.setVisible = Tl.prototype.dc;
  Tl.prototype.setZIndex = Tl.prototype.ec;
  Tl.prototype.get = Tl.prototype.get;
  Tl.prototype.getKeys = Tl.prototype.O;
  Tl.prototype.getProperties = Tl.prototype.P;
  Tl.prototype.set = Tl.prototype.set;
  Tl.prototype.setProperties = Tl.prototype.I;
  Tl.prototype.unset = Tl.prototype.R;
  Tl.prototype.changed = Tl.prototype.s;
  Tl.prototype.dispatchEvent = Tl.prototype.o;
  Tl.prototype.getRevision = Tl.prototype.L;
  Tl.prototype.on = Tl.prototype.H;
  Tl.prototype.once = Tl.prototype.M;
  Tl.prototype.un = Tl.prototype.K;
  Tl.prototype.unByKey = Tl.prototype.N;
  F.prototype.setMap = F.prototype.setMap;
  F.prototype.setSource = F.prototype.wc;
  F.prototype.getExtent = F.prototype.J;
  F.prototype.getMaxResolution = F.prototype.Pb;
  F.prototype.getMinResolution = F.prototype.Qb;
  F.prototype.getOpacity = F.prototype.Rb;
  F.prototype.getVisible = F.prototype.qb;
  F.prototype.getZIndex = F.prototype.Sb;
  F.prototype.setExtent = F.prototype.bc;
  F.prototype.setMaxResolution = F.prototype.jc;
  F.prototype.setMinResolution = F.prototype.kc;
  F.prototype.setOpacity = F.prototype.cc;
  F.prototype.setVisible = F.prototype.dc;
  F.prototype.setZIndex = F.prototype.ec;
  F.prototype.get = F.prototype.get;
  F.prototype.getKeys = F.prototype.O;
  F.prototype.getProperties = F.prototype.P;
  F.prototype.set = F.prototype.set;
  F.prototype.setProperties = F.prototype.I;
  F.prototype.unset = F.prototype.R;
  F.prototype.changed = F.prototype.s;
  F.prototype.dispatchEvent = F.prototype.o;
  F.prototype.getRevision = F.prototype.L;
  F.prototype.on = F.prototype.H;
  F.prototype.once = F.prototype.M;
  F.prototype.un = F.prototype.K;
  F.prototype.unByKey = F.prototype.N;
  J.prototype.getStyle = J.prototype.C;
  J.prototype.getStyleFunction = J.prototype.G;
  J.prototype.setStyle = J.prototype.f;
  J.prototype.setMap = J.prototype.setMap;
  J.prototype.setSource = J.prototype.wc;
  J.prototype.getExtent = J.prototype.J;
  J.prototype.getMaxResolution = J.prototype.Pb;
  J.prototype.getMinResolution = J.prototype.Qb;
  J.prototype.getOpacity = J.prototype.Rb;
  J.prototype.getVisible = J.prototype.qb;
  J.prototype.getZIndex = J.prototype.Sb;
  J.prototype.setExtent = J.prototype.bc;
  J.prototype.setMaxResolution = J.prototype.jc;
  J.prototype.setMinResolution = J.prototype.kc;
  J.prototype.setOpacity = J.prototype.cc;
  J.prototype.setVisible = J.prototype.dc;
  J.prototype.setZIndex = J.prototype.ec;
  J.prototype.get = J.prototype.get;
  J.prototype.getKeys = J.prototype.O;
  J.prototype.getProperties = J.prototype.P;
  J.prototype.set = J.prototype.set;
  J.prototype.setProperties = J.prototype.I;
  J.prototype.unset = J.prototype.R;
  J.prototype.changed = J.prototype.s;
  J.prototype.dispatchEvent = J.prototype.o;
  J.prototype.getRevision = J.prototype.L;
  J.prototype.on = J.prototype.H;
  J.prototype.once = J.prototype.M;
  J.prototype.un = J.prototype.K;
  J.prototype.unByKey = J.prototype.N;
  S.prototype.get = S.prototype.get;
  S.prototype.getKeys = S.prototype.O;
  S.prototype.getProperties = S.prototype.P;
  S.prototype.set = S.prototype.set;
  S.prototype.setProperties = S.prototype.I;
  S.prototype.unset = S.prototype.R;
  S.prototype.changed = S.prototype.s;
  S.prototype.dispatchEvent = S.prototype.o;
  S.prototype.getRevision = S.prototype.L;
  S.prototype.on = S.prototype.H;
  S.prototype.once = S.prototype.M;
  S.prototype.un = S.prototype.K;
  S.prototype.unByKey = S.prototype.N;
  Vj.prototype.map = Vj.prototype.map;
  Vj.prototype.frameState = Vj.prototype.frameState;
  Wj.prototype.originalEvent = Wj.prototype.originalEvent;
  Wj.prototype.pixel = Wj.prototype.pixel;
  Wj.prototype.coordinate = Wj.prototype.coordinate;
  Wj.prototype.dragging = Wj.prototype.dragging;
  Wj.prototype.preventDefault = Wj.prototype.preventDefault;
  Wj.prototype.stopPropagation = Wj.prototype.b;
  Wj.prototype.map = Wj.prototype.map;
  Wj.prototype.frameState = Wj.prototype.frameState;
  wr.prototype.get = wr.prototype.get;
  wr.prototype.getKeys = wr.prototype.O;
  wr.prototype.getProperties = wr.prototype.P;
  wr.prototype.set = wr.prototype.set;
  wr.prototype.setProperties = wr.prototype.I;
  wr.prototype.unset = wr.prototype.R;
  wr.prototype.changed = wr.prototype.s;
  wr.prototype.dispatchEvent = wr.prototype.o;
  wr.prototype.getRevision = wr.prototype.L;
  wr.prototype.on = wr.prototype.H;
  wr.prototype.once = wr.prototype.M;
  wr.prototype.un = wr.prototype.K;
  wr.prototype.unByKey = wr.prototype.N;
  Jz.prototype.getElement = Jz.prototype.vd;
  Jz.prototype.getId = Jz.prototype.La;
  Jz.prototype.getMap = Jz.prototype.wd;
  Jz.prototype.getOffset = Jz.prototype.qf;
  Jz.prototype.getPosition = Jz.prototype.Bf;
  Jz.prototype.getPositioning = Jz.prototype.rf;
  Jz.prototype.setElement = Jz.prototype.Yf;
  Jz.prototype.setMap = Jz.prototype.setMap;
  Jz.prototype.setOffset = Jz.prototype.Zf;
  Jz.prototype.setPosition = Jz.prototype.xd;
  Jz.prototype.setPositioning = Jz.prototype.$f;
  Jz.prototype.get = Jz.prototype.get;
  Jz.prototype.getKeys = Jz.prototype.O;
  Jz.prototype.getProperties = Jz.prototype.P;
  Jz.prototype.set = Jz.prototype.set;
  Jz.prototype.setProperties = Jz.prototype.I;
  Jz.prototype.unset = Jz.prototype.R;
  Jz.prototype.changed = Jz.prototype.s;
  Jz.prototype.dispatchEvent = Jz.prototype.o;
  Jz.prototype.getRevision = Jz.prototype.L;
  Jz.prototype.on = Jz.prototype.H;
  Jz.prototype.once = Jz.prototype.M;
  Jz.prototype.un = Jz.prototype.K;
  Jz.prototype.unByKey = Jz.prototype.N;
  uk.prototype.changed = uk.prototype.s;
  uk.prototype.dispatchEvent = uk.prototype.o;
  uk.prototype.getRevision = uk.prototype.L;
  uk.prototype.on = uk.prototype.H;
  uk.prototype.once = uk.prototype.M;
  uk.prototype.un = uk.prototype.K;
  uk.prototype.unByKey = uk.prototype.N;
  Gm.prototype.changed = Gm.prototype.s;
  Gm.prototype.dispatchEvent = Gm.prototype.o;
  Gm.prototype.getRevision = Gm.prototype.L;
  Gm.prototype.on = Gm.prototype.H;
  Gm.prototype.once = Gm.prototype.M;
  Gm.prototype.un = Gm.prototype.K;
  Gm.prototype.unByKey = Gm.prototype.N;
  Zp.prototype.changed = Zp.prototype.s;
  Zp.prototype.dispatchEvent = Zp.prototype.o;
  Zp.prototype.getRevision = Zp.prototype.L;
  Zp.prototype.on = Zp.prototype.H;
  Zp.prototype.once = Zp.prototype.M;
  Zp.prototype.un = Zp.prototype.K;
  Zp.prototype.unByKey = Zp.prototype.N;
  $p.prototype.changed = $p.prototype.s;
  $p.prototype.dispatchEvent = $p.prototype.o;
  $p.prototype.getRevision = $p.prototype.L;
  $p.prototype.on = $p.prototype.H;
  $p.prototype.once = $p.prototype.M;
  $p.prototype.un = $p.prototype.K;
  $p.prototype.unByKey = $p.prototype.N;
  aq.prototype.changed = aq.prototype.s;
  aq.prototype.dispatchEvent = aq.prototype.o;
  aq.prototype.getRevision = aq.prototype.L;
  aq.prototype.on = aq.prototype.H;
  aq.prototype.once = aq.prototype.M;
  aq.prototype.un = aq.prototype.K;
  aq.prototype.unByKey = aq.prototype.N;
  kq.prototype.changed = kq.prototype.s;
  kq.prototype.dispatchEvent = kq.prototype.o;
  kq.prototype.getRevision = kq.prototype.L;
  kq.prototype.on = kq.prototype.H;
  kq.prototype.once = kq.prototype.M;
  kq.prototype.un = kq.prototype.K;
  kq.prototype.unByKey = kq.prototype.N;
  oq.prototype.changed = oq.prototype.s;
  oq.prototype.dispatchEvent = oq.prototype.o;
  oq.prototype.getRevision = oq.prototype.L;
  oq.prototype.on = oq.prototype.H;
  oq.prototype.once = oq.prototype.M;
  oq.prototype.un = oq.prototype.K;
  oq.prototype.unByKey = oq.prototype.N;
  pq.prototype.changed = pq.prototype.s;
  pq.prototype.dispatchEvent = pq.prototype.o;
  pq.prototype.getRevision = pq.prototype.L;
  pq.prototype.on = pq.prototype.H;
  pq.prototype.once = pq.prototype.M;
  pq.prototype.un = pq.prototype.K;
  pq.prototype.unByKey = pq.prototype.N;
  qq.prototype.changed = qq.prototype.s;
  qq.prototype.dispatchEvent = qq.prototype.o;
  qq.prototype.getRevision = qq.prototype.L;
  qq.prototype.on = qq.prototype.H;
  qq.prototype.once = qq.prototype.M;
  qq.prototype.un = qq.prototype.K;
  qq.prototype.unByKey = qq.prototype.N;
  sq.prototype.changed = sq.prototype.s;
  sq.prototype.dispatchEvent = sq.prototype.o;
  sq.prototype.getRevision = sq.prototype.L;
  sq.prototype.on = sq.prototype.H;
  sq.prototype.once = sq.prototype.M;
  sq.prototype.un = sq.prototype.K;
  sq.prototype.unByKey = sq.prototype.N;
  fr.prototype.changed = fr.prototype.s;
  fr.prototype.dispatchEvent = fr.prototype.o;
  fr.prototype.getRevision = fr.prototype.L;
  fr.prototype.on = fr.prototype.H;
  fr.prototype.once = fr.prototype.M;
  fr.prototype.un = fr.prototype.K;
  fr.prototype.unByKey = fr.prototype.N;
  ir.prototype.changed = ir.prototype.s;
  ir.prototype.dispatchEvent = ir.prototype.o;
  ir.prototype.getRevision = ir.prototype.L;
  ir.prototype.on = ir.prototype.H;
  ir.prototype.once = ir.prototype.M;
  ir.prototype.un = ir.prototype.K;
  ir.prototype.unByKey = ir.prototype.N;
  or.prototype.changed = or.prototype.s;
  or.prototype.dispatchEvent = or.prototype.o;
  or.prototype.getRevision = or.prototype.L;
  or.prototype.on = or.prototype.H;
  or.prototype.once = or.prototype.M;
  or.prototype.un = or.prototype.K;
  or.prototype.unByKey = or.prototype.N;
  qr.prototype.changed = qr.prototype.s;
  qr.prototype.dispatchEvent = qr.prototype.o;
  qr.prototype.getRevision = qr.prototype.L;
  qr.prototype.on = qr.prototype.H;
  qr.prototype.once = qr.prototype.M;
  qr.prototype.un = qr.prototype.K;
  qr.prototype.unByKey = qr.prototype.N;
  Lz.prototype.getTileCoord = Lz.prototype.f;
  Gh.prototype.get = Gh.prototype.get;
  Gh.prototype.getKeys = Gh.prototype.O;
  Gh.prototype.getProperties = Gh.prototype.P;
  Gh.prototype.set = Gh.prototype.set;
  Gh.prototype.setProperties = Gh.prototype.I;
  Gh.prototype.unset = Gh.prototype.R;
  Gh.prototype.changed = Gh.prototype.s;
  Gh.prototype.dispatchEvent = Gh.prototype.o;
  Gh.prototype.getRevision = Gh.prototype.L;
  Gh.prototype.on = Gh.prototype.H;
  Gh.prototype.once = Gh.prototype.M;
  Gh.prototype.un = Gh.prototype.K;
  Gh.prototype.unByKey = Gh.prototype.N;
  Xh.prototype.getAttributions = Xh.prototype.ta;
  Xh.prototype.getLogo = Xh.prototype.ra;
  Xh.prototype.getProjection = Xh.prototype.ua;
  Xh.prototype.getState = Xh.prototype.va;
  Xh.prototype.setAttributions = Xh.prototype.na;
  Xh.prototype.get = Xh.prototype.get;
  Xh.prototype.getKeys = Xh.prototype.O;
  Xh.prototype.getProperties = Xh.prototype.P;
  Xh.prototype.set = Xh.prototype.set;
  Xh.prototype.setProperties = Xh.prototype.I;
  Xh.prototype.unset = Xh.prototype.R;
  Xh.prototype.changed = Xh.prototype.s;
  Xh.prototype.dispatchEvent = Xh.prototype.o;
  Xh.prototype.getRevision = Xh.prototype.L;
  Xh.prototype.on = Xh.prototype.H;
  Xh.prototype.once = Xh.prototype.M;
  Xh.prototype.un = Xh.prototype.K;
  Xh.prototype.unByKey = Xh.prototype.N;
  hq.prototype.getTileGrid = hq.prototype.Ga;
  hq.prototype.getAttributions = hq.prototype.ta;
  hq.prototype.getLogo = hq.prototype.ra;
  hq.prototype.getProjection = hq.prototype.ua;
  hq.prototype.getState = hq.prototype.va;
  hq.prototype.setAttributions = hq.prototype.na;
  hq.prototype.get = hq.prototype.get;
  hq.prototype.getKeys = hq.prototype.O;
  hq.prototype.getProperties = hq.prototype.P;
  hq.prototype.set = hq.prototype.set;
  hq.prototype.setProperties = hq.prototype.I;
  hq.prototype.unset = hq.prototype.R;
  hq.prototype.changed = hq.prototype.s;
  hq.prototype.dispatchEvent = hq.prototype.o;
  hq.prototype.getRevision = hq.prototype.L;
  hq.prototype.on = hq.prototype.H;
  hq.prototype.once = hq.prototype.M;
  hq.prototype.un = hq.prototype.K;
  hq.prototype.unByKey = hq.prototype.N;
  Y.prototype.getTileLoadFunction = Y.prototype.Xa;
  Y.prototype.getTileUrlFunction = Y.prototype.Ya;
  Y.prototype.getUrls = Y.prototype.Za;
  Y.prototype.setTileLoadFunction = Y.prototype.cb;
  Y.prototype.setTileUrlFunction = Y.prototype.Ka;
  Y.prototype.setUrl = Y.prototype.Va;
  Y.prototype.setUrls = Y.prototype.Wa;
  Y.prototype.getTileGrid = Y.prototype.Ga;
  Y.prototype.getAttributions = Y.prototype.ta;
  Y.prototype.getLogo = Y.prototype.ra;
  Y.prototype.getProjection = Y.prototype.ua;
  Y.prototype.getState = Y.prototype.va;
  Y.prototype.setAttributions = Y.prototype.na;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.getKeys = Y.prototype.O;
  Y.prototype.getProperties = Y.prototype.P;
  Y.prototype.set = Y.prototype.set;
  Y.prototype.setProperties = Y.prototype.I;
  Y.prototype.unset = Y.prototype.R;
  Y.prototype.changed = Y.prototype.s;
  Y.prototype.dispatchEvent = Y.prototype.o;
  Y.prototype.getRevision = Y.prototype.L;
  Y.prototype.on = Y.prototype.H;
  Y.prototype.once = Y.prototype.M;
  Y.prototype.un = Y.prototype.K;
  Y.prototype.unByKey = Y.prototype.N;
  bA.prototype.setRenderReprojectionEdges = bA.prototype.wb;
  bA.prototype.setTileGridForProjection = bA.prototype.xb;
  bA.prototype.getTileLoadFunction = bA.prototype.Xa;
  bA.prototype.getTileUrlFunction = bA.prototype.Ya;
  bA.prototype.getUrls = bA.prototype.Za;
  bA.prototype.setTileLoadFunction = bA.prototype.cb;
  bA.prototype.setTileUrlFunction = bA.prototype.Ka;
  bA.prototype.setUrl = bA.prototype.Va;
  bA.prototype.setUrls = bA.prototype.Wa;
  bA.prototype.getTileGrid = bA.prototype.Ga;
  bA.prototype.getAttributions = bA.prototype.ta;
  bA.prototype.getLogo = bA.prototype.ra;
  bA.prototype.getProjection = bA.prototype.ua;
  bA.prototype.getState = bA.prototype.va;
  bA.prototype.setAttributions = bA.prototype.na;
  bA.prototype.get = bA.prototype.get;
  bA.prototype.getKeys = bA.prototype.O;
  bA.prototype.getProperties = bA.prototype.P;
  bA.prototype.set = bA.prototype.set;
  bA.prototype.setProperties = bA.prototype.I;
  bA.prototype.unset = bA.prototype.R;
  bA.prototype.changed = bA.prototype.s;
  bA.prototype.dispatchEvent = bA.prototype.o;
  bA.prototype.getRevision = bA.prototype.L;
  bA.prototype.on = bA.prototype.H;
  bA.prototype.once = bA.prototype.M;
  bA.prototype.un = bA.prototype.K;
  bA.prototype.unByKey = bA.prototype.N;
  R.prototype.getAttributions = R.prototype.ta;
  R.prototype.getLogo = R.prototype.ra;
  R.prototype.getProjection = R.prototype.ua;
  R.prototype.getState = R.prototype.va;
  R.prototype.setAttributions = R.prototype.na;
  R.prototype.get = R.prototype.get;
  R.prototype.getKeys = R.prototype.O;
  R.prototype.getProperties = R.prototype.P;
  R.prototype.set = R.prototype.set;
  R.prototype.setProperties = R.prototype.I;
  R.prototype.unset = R.prototype.R;
  R.prototype.changed = R.prototype.s;
  R.prototype.dispatchEvent = R.prototype.o;
  R.prototype.getRevision = R.prototype.L;
  R.prototype.on = R.prototype.H;
  R.prototype.once = R.prototype.M;
  R.prototype.un = R.prototype.K;
  R.prototype.unByKey = R.prototype.N;
  dA.prototype.addFeature = dA.prototype.Dd;
  dA.prototype.addFeatures = dA.prototype.Dc;
  dA.prototype.clear = dA.prototype.clear;
  dA.prototype.forEachFeature = dA.prototype.zg;
  dA.prototype.forEachFeatureInExtent = dA.prototype.ob;
  dA.prototype.forEachFeatureIntersectingExtent = dA.prototype.Ag;
  dA.prototype.getFeaturesCollection = dA.prototype.Gg;
  dA.prototype.getFeatures = dA.prototype.Ae;
  dA.prototype.getFeaturesAtCoordinate = dA.prototype.Fg;
  dA.prototype.getFeaturesInExtent = dA.prototype.nf;
  dA.prototype.getClosestFeatureToCoordinate = dA.prototype.Cg;
  dA.prototype.getExtent = dA.prototype.J;
  dA.prototype.getFeatureById = dA.prototype.Eg;
  dA.prototype.removeFeature = dA.prototype.Qc;
  dA.prototype.getAttributions = dA.prototype.ta;
  dA.prototype.getLogo = dA.prototype.ra;
  dA.prototype.getProjection = dA.prototype.ua;
  dA.prototype.getState = dA.prototype.va;
  dA.prototype.setAttributions = dA.prototype.na;
  dA.prototype.get = dA.prototype.get;
  dA.prototype.getKeys = dA.prototype.O;
  dA.prototype.getProperties = dA.prototype.P;
  dA.prototype.set = dA.prototype.set;
  dA.prototype.setProperties = dA.prototype.I;
  dA.prototype.unset = dA.prototype.R;
  dA.prototype.changed = dA.prototype.s;
  dA.prototype.dispatchEvent = dA.prototype.o;
  dA.prototype.getRevision = dA.prototype.L;
  dA.prototype.on = dA.prototype.H;
  dA.prototype.once = dA.prototype.M;
  dA.prototype.un = dA.prototype.K;
  dA.prototype.unByKey = dA.prototype.N;
  tn.prototype.getAttributions = tn.prototype.ta;
  tn.prototype.getLogo = tn.prototype.ra;
  tn.prototype.getProjection = tn.prototype.ua;
  tn.prototype.getState = tn.prototype.va;
  tn.prototype.setAttributions = tn.prototype.na;
  tn.prototype.get = tn.prototype.get;
  tn.prototype.getKeys = tn.prototype.O;
  tn.prototype.getProperties = tn.prototype.P;
  tn.prototype.set = tn.prototype.set;
  tn.prototype.setProperties = tn.prototype.I;
  tn.prototype.unset = tn.prototype.R;
  tn.prototype.changed = tn.prototype.s;
  tn.prototype.dispatchEvent = tn.prototype.o;
  tn.prototype.getRevision = tn.prototype.L;
  tn.prototype.on = tn.prototype.H;
  tn.prototype.once = tn.prototype.M;
  tn.prototype.un = tn.prototype.K;
  tn.prototype.unByKey = tn.prototype.N;
  An.prototype.getAttributions = An.prototype.ta;
  An.prototype.getLogo = An.prototype.ra;
  An.prototype.getProjection = An.prototype.ua;
  An.prototype.getState = An.prototype.va;
  An.prototype.setAttributions = An.prototype.na;
  An.prototype.get = An.prototype.get;
  An.prototype.getKeys = An.prototype.O;
  An.prototype.getProperties = An.prototype.P;
  An.prototype.set = An.prototype.set;
  An.prototype.setProperties = An.prototype.I;
  An.prototype.unset = An.prototype.R;
  An.prototype.changed = An.prototype.s;
  An.prototype.dispatchEvent = An.prototype.o;
  An.prototype.getRevision = An.prototype.L;
  An.prototype.on = An.prototype.H;
  An.prototype.once = An.prototype.M;
  An.prototype.un = An.prototype.K;
  An.prototype.unByKey = An.prototype.N;
  gA.prototype.getAttributions = gA.prototype.ta;
  gA.prototype.getLogo = gA.prototype.ra;
  gA.prototype.getProjection = gA.prototype.ua;
  gA.prototype.getState = gA.prototype.va;
  gA.prototype.setAttributions = gA.prototype.na;
  gA.prototype.get = gA.prototype.get;
  gA.prototype.getKeys = gA.prototype.O;
  gA.prototype.getProperties = gA.prototype.P;
  gA.prototype.set = gA.prototype.set;
  gA.prototype.setProperties = gA.prototype.I;
  gA.prototype.unset = gA.prototype.R;
  gA.prototype.changed = gA.prototype.s;
  gA.prototype.dispatchEvent = gA.prototype.o;
  gA.prototype.getRevision = gA.prototype.L;
  gA.prototype.on = gA.prototype.H;
  gA.prototype.once = gA.prototype.M;
  gA.prototype.un = gA.prototype.K;
  gA.prototype.unByKey = gA.prototype.N;
  hA.prototype.getAttributions = hA.prototype.ta;
  hA.prototype.getLogo = hA.prototype.ra;
  hA.prototype.getProjection = hA.prototype.ua;
  hA.prototype.getState = hA.prototype.va;
  hA.prototype.setAttributions = hA.prototype.na;
  hA.prototype.get = hA.prototype.get;
  hA.prototype.getKeys = hA.prototype.O;
  hA.prototype.getProperties = hA.prototype.P;
  hA.prototype.set = hA.prototype.set;
  hA.prototype.setProperties = hA.prototype.I;
  hA.prototype.unset = hA.prototype.R;
  hA.prototype.changed = hA.prototype.s;
  hA.prototype.dispatchEvent = hA.prototype.o;
  hA.prototype.getRevision = hA.prototype.L;
  hA.prototype.on = hA.prototype.H;
  hA.prototype.once = hA.prototype.M;
  hA.prototype.un = hA.prototype.K;
  hA.prototype.unByKey = hA.prototype.N;
  Xp.prototype.getAttributions = Xp.prototype.ta;
  Xp.prototype.getLogo = Xp.prototype.ra;
  Xp.prototype.getProjection = Xp.prototype.ua;
  Xp.prototype.getState = Xp.prototype.va;
  Xp.prototype.setAttributions = Xp.prototype.na;
  Xp.prototype.get = Xp.prototype.get;
  Xp.prototype.getKeys = Xp.prototype.O;
  Xp.prototype.getProperties = Xp.prototype.P;
  Xp.prototype.set = Xp.prototype.set;
  Xp.prototype.setProperties = Xp.prototype.I;
  Xp.prototype.unset = Xp.prototype.R;
  Xp.prototype.changed = Xp.prototype.s;
  Xp.prototype.dispatchEvent = Xp.prototype.o;
  Xp.prototype.getRevision = Xp.prototype.L;
  Xp.prototype.on = Xp.prototype.H;
  Xp.prototype.once = Xp.prototype.M;
  Xp.prototype.un = Xp.prototype.K;
  Xp.prototype.unByKey = Xp.prototype.N;
  iA.prototype.getAttributions = iA.prototype.ta;
  iA.prototype.getLogo = iA.prototype.ra;
  iA.prototype.getProjection = iA.prototype.ua;
  iA.prototype.getState = iA.prototype.va;
  iA.prototype.setAttributions = iA.prototype.na;
  iA.prototype.get = iA.prototype.get;
  iA.prototype.getKeys = iA.prototype.O;
  iA.prototype.getProperties = iA.prototype.P;
  iA.prototype.set = iA.prototype.set;
  iA.prototype.setProperties = iA.prototype.I;
  iA.prototype.unset = iA.prototype.R;
  iA.prototype.changed = iA.prototype.s;
  iA.prototype.dispatchEvent = iA.prototype.o;
  iA.prototype.getRevision = iA.prototype.L;
  iA.prototype.on = iA.prototype.H;
  iA.prototype.once = iA.prototype.M;
  iA.prototype.un = iA.prototype.K;
  iA.prototype.unByKey = iA.prototype.N;
  mA.prototype.setRenderReprojectionEdges = mA.prototype.wb;
  mA.prototype.setTileGridForProjection = mA.prototype.xb;
  mA.prototype.getTileLoadFunction = mA.prototype.Xa;
  mA.prototype.getTileUrlFunction = mA.prototype.Ya;
  mA.prototype.getUrls = mA.prototype.Za;
  mA.prototype.setTileLoadFunction = mA.prototype.cb;
  mA.prototype.setTileUrlFunction = mA.prototype.Ka;
  mA.prototype.setUrl = mA.prototype.Va;
  mA.prototype.setUrls = mA.prototype.Wa;
  mA.prototype.getTileGrid = mA.prototype.Ga;
  mA.prototype.getAttributions = mA.prototype.ta;
  mA.prototype.getLogo = mA.prototype.ra;
  mA.prototype.getProjection = mA.prototype.ua;
  mA.prototype.getState = mA.prototype.va;
  mA.prototype.setAttributions = mA.prototype.na;
  mA.prototype.get = mA.prototype.get;
  mA.prototype.getKeys = mA.prototype.O;
  mA.prototype.getProperties = mA.prototype.P;
  mA.prototype.set = mA.prototype.set;
  mA.prototype.setProperties = mA.prototype.I;
  mA.prototype.unset = mA.prototype.R;
  mA.prototype.changed = mA.prototype.s;
  mA.prototype.dispatchEvent = mA.prototype.o;
  mA.prototype.getRevision = mA.prototype.L;
  mA.prototype.on = mA.prototype.H;
  mA.prototype.once = mA.prototype.M;
  mA.prototype.un = mA.prototype.K;
  mA.prototype.unByKey = mA.prototype.N;
  pA.prototype.setRenderReprojectionEdges = pA.prototype.wb;
  pA.prototype.setTileGridForProjection = pA.prototype.xb;
  pA.prototype.getTileLoadFunction = pA.prototype.Xa;
  pA.prototype.getTileUrlFunction = pA.prototype.Ya;
  pA.prototype.getUrls = pA.prototype.Za;
  pA.prototype.setTileLoadFunction = pA.prototype.cb;
  pA.prototype.setTileUrlFunction = pA.prototype.Ka;
  pA.prototype.setUrl = pA.prototype.Va;
  pA.prototype.setUrls = pA.prototype.Wa;
  pA.prototype.getTileGrid = pA.prototype.Ga;
  pA.prototype.getAttributions = pA.prototype.ta;
  pA.prototype.getLogo = pA.prototype.ra;
  pA.prototype.getProjection = pA.prototype.ua;
  pA.prototype.getState = pA.prototype.va;
  pA.prototype.setAttributions = pA.prototype.na;
  pA.prototype.get = pA.prototype.get;
  pA.prototype.getKeys = pA.prototype.O;
  pA.prototype.getProperties = pA.prototype.P;
  pA.prototype.set = pA.prototype.set;
  pA.prototype.setProperties = pA.prototype.I;
  pA.prototype.unset = pA.prototype.R;
  pA.prototype.changed = pA.prototype.s;
  pA.prototype.dispatchEvent = pA.prototype.o;
  pA.prototype.getRevision = pA.prototype.L;
  pA.prototype.on = pA.prototype.H;
  pA.prototype.once = pA.prototype.M;
  pA.prototype.un = pA.prototype.K;
  pA.prototype.unByKey = pA.prototype.N;
  nA.prototype.setRenderReprojectionEdges = nA.prototype.wb;
  nA.prototype.setTileGridForProjection = nA.prototype.xb;
  nA.prototype.getTileLoadFunction = nA.prototype.Xa;
  nA.prototype.getTileUrlFunction = nA.prototype.Ya;
  nA.prototype.getUrls = nA.prototype.Za;
  nA.prototype.setTileLoadFunction = nA.prototype.cb;
  nA.prototype.setTileUrlFunction = nA.prototype.Ka;
  nA.prototype.setUrl = nA.prototype.Va;
  nA.prototype.setUrls = nA.prototype.Wa;
  nA.prototype.getTileGrid = nA.prototype.Ga;
  nA.prototype.getAttributions = nA.prototype.ta;
  nA.prototype.getLogo = nA.prototype.ra;
  nA.prototype.getProjection = nA.prototype.ua;
  nA.prototype.getState = nA.prototype.va;
  nA.prototype.setAttributions = nA.prototype.na;
  nA.prototype.get = nA.prototype.get;
  nA.prototype.getKeys = nA.prototype.O;
  nA.prototype.getProperties = nA.prototype.P;
  nA.prototype.set = nA.prototype.set;
  nA.prototype.setProperties = nA.prototype.I;
  nA.prototype.unset = nA.prototype.R;
  nA.prototype.changed = nA.prototype.s;
  nA.prototype.dispatchEvent = nA.prototype.o;
  nA.prototype.getRevision = nA.prototype.L;
  nA.prototype.on = nA.prototype.H;
  nA.prototype.once = nA.prototype.M;
  nA.prototype.un = nA.prototype.K;
  nA.prototype.unByKey = nA.prototype.N;
  sA.prototype.getAttributions = sA.prototype.ta;
  sA.prototype.getLogo = sA.prototype.ra;
  sA.prototype.getProjection = sA.prototype.ua;
  sA.prototype.getState = sA.prototype.va;
  sA.prototype.setAttributions = sA.prototype.na;
  sA.prototype.get = sA.prototype.get;
  sA.prototype.getKeys = sA.prototype.O;
  sA.prototype.getProperties = sA.prototype.P;
  sA.prototype.set = sA.prototype.set;
  sA.prototype.setProperties = sA.prototype.I;
  sA.prototype.unset = sA.prototype.R;
  sA.prototype.changed = sA.prototype.s;
  sA.prototype.dispatchEvent = sA.prototype.o;
  sA.prototype.getRevision = sA.prototype.L;
  sA.prototype.on = sA.prototype.H;
  sA.prototype.once = sA.prototype.M;
  sA.prototype.un = sA.prototype.K;
  sA.prototype.unByKey = sA.prototype.N;
  CA.prototype.setRenderReprojectionEdges = CA.prototype.wb;
  CA.prototype.setTileGridForProjection = CA.prototype.xb;
  CA.prototype.getTileLoadFunction = CA.prototype.Xa;
  CA.prototype.getTileUrlFunction = CA.prototype.Ya;
  CA.prototype.getUrls = CA.prototype.Za;
  CA.prototype.setTileLoadFunction = CA.prototype.cb;
  CA.prototype.setTileUrlFunction = CA.prototype.Ka;
  CA.prototype.setUrl = CA.prototype.Va;
  CA.prototype.setUrls = CA.prototype.Wa;
  CA.prototype.getTileGrid = CA.prototype.Ga;
  CA.prototype.getAttributions = CA.prototype.ta;
  CA.prototype.getLogo = CA.prototype.ra;
  CA.prototype.getProjection = CA.prototype.ua;
  CA.prototype.getState = CA.prototype.va;
  CA.prototype.setAttributions = CA.prototype.na;
  CA.prototype.get = CA.prototype.get;
  CA.prototype.getKeys = CA.prototype.O;
  CA.prototype.getProperties = CA.prototype.P;
  CA.prototype.set = CA.prototype.set;
  CA.prototype.setProperties = CA.prototype.I;
  CA.prototype.unset = CA.prototype.R;
  CA.prototype.changed = CA.prototype.s;
  CA.prototype.dispatchEvent = CA.prototype.o;
  CA.prototype.getRevision = CA.prototype.L;
  CA.prototype.on = CA.prototype.H;
  CA.prototype.once = CA.prototype.M;
  CA.prototype.un = CA.prototype.K;
  CA.prototype.unByKey = CA.prototype.N;
  EA.prototype.setRenderReprojectionEdges = EA.prototype.wb;
  EA.prototype.setTileGridForProjection = EA.prototype.xb;
  EA.prototype.getTileLoadFunction = EA.prototype.Xa;
  EA.prototype.getTileUrlFunction = EA.prototype.Ya;
  EA.prototype.getUrls = EA.prototype.Za;
  EA.prototype.setTileLoadFunction = EA.prototype.cb;
  EA.prototype.setTileUrlFunction = EA.prototype.Ka;
  EA.prototype.setUrl = EA.prototype.Va;
  EA.prototype.setUrls = EA.prototype.Wa;
  EA.prototype.getTileGrid = EA.prototype.Ga;
  EA.prototype.getAttributions = EA.prototype.ta;
  EA.prototype.getLogo = EA.prototype.ra;
  EA.prototype.getProjection = EA.prototype.ua;
  EA.prototype.getState = EA.prototype.va;
  EA.prototype.setAttributions = EA.prototype.na;
  EA.prototype.get = EA.prototype.get;
  EA.prototype.getKeys = EA.prototype.O;
  EA.prototype.getProperties = EA.prototype.P;
  EA.prototype.set = EA.prototype.set;
  EA.prototype.setProperties = EA.prototype.I;
  EA.prototype.unset = EA.prototype.R;
  EA.prototype.changed = EA.prototype.s;
  EA.prototype.dispatchEvent = EA.prototype.o;
  EA.prototype.getRevision = EA.prototype.L;
  EA.prototype.on = EA.prototype.H;
  EA.prototype.once = EA.prototype.M;
  EA.prototype.un = EA.prototype.K;
  EA.prototype.unByKey = EA.prototype.N;
  GA.prototype.getTileGrid = GA.prototype.Ga;
  GA.prototype.getAttributions = GA.prototype.ta;
  GA.prototype.getLogo = GA.prototype.ra;
  GA.prototype.getProjection = GA.prototype.ua;
  GA.prototype.getState = GA.prototype.va;
  GA.prototype.setAttributions = GA.prototype.na;
  GA.prototype.get = GA.prototype.get;
  GA.prototype.getKeys = GA.prototype.O;
  GA.prototype.getProperties = GA.prototype.P;
  GA.prototype.set = GA.prototype.set;
  GA.prototype.setProperties = GA.prototype.I;
  GA.prototype.unset = GA.prototype.R;
  GA.prototype.changed = GA.prototype.s;
  GA.prototype.dispatchEvent = GA.prototype.o;
  GA.prototype.getRevision = GA.prototype.L;
  GA.prototype.on = GA.prototype.H;
  GA.prototype.once = GA.prototype.M;
  GA.prototype.un = GA.prototype.K;
  GA.prototype.unByKey = GA.prototype.N;
  HA.prototype.setRenderReprojectionEdges = HA.prototype.wb;
  HA.prototype.setTileGridForProjection = HA.prototype.xb;
  HA.prototype.getTileLoadFunction = HA.prototype.Xa;
  HA.prototype.getTileUrlFunction = HA.prototype.Ya;
  HA.prototype.getUrls = HA.prototype.Za;
  HA.prototype.setTileLoadFunction = HA.prototype.cb;
  HA.prototype.setTileUrlFunction = HA.prototype.Ka;
  HA.prototype.setUrl = HA.prototype.Va;
  HA.prototype.setUrls = HA.prototype.Wa;
  HA.prototype.getTileGrid = HA.prototype.Ga;
  HA.prototype.getAttributions = HA.prototype.ta;
  HA.prototype.getLogo = HA.prototype.ra;
  HA.prototype.getProjection = HA.prototype.ua;
  HA.prototype.getState = HA.prototype.va;
  HA.prototype.setAttributions = HA.prototype.na;
  HA.prototype.get = HA.prototype.get;
  HA.prototype.getKeys = HA.prototype.O;
  HA.prototype.getProperties = HA.prototype.P;
  HA.prototype.set = HA.prototype.set;
  HA.prototype.setProperties = HA.prototype.I;
  HA.prototype.unset = HA.prototype.R;
  HA.prototype.changed = HA.prototype.s;
  HA.prototype.dispatchEvent = HA.prototype.o;
  HA.prototype.getRevision = HA.prototype.L;
  HA.prototype.on = HA.prototype.H;
  HA.prototype.once = HA.prototype.M;
  HA.prototype.un = HA.prototype.K;
  HA.prototype.unByKey = HA.prototype.N;
  IA.prototype.getTileGrid = IA.prototype.Ga;
  IA.prototype.getAttributions = IA.prototype.ta;
  IA.prototype.getLogo = IA.prototype.ra;
  IA.prototype.getProjection = IA.prototype.ua;
  IA.prototype.getState = IA.prototype.va;
  IA.prototype.setAttributions = IA.prototype.na;
  IA.prototype.get = IA.prototype.get;
  IA.prototype.getKeys = IA.prototype.O;
  IA.prototype.getProperties = IA.prototype.P;
  IA.prototype.set = IA.prototype.set;
  IA.prototype.setProperties = IA.prototype.I;
  IA.prototype.unset = IA.prototype.R;
  IA.prototype.changed = IA.prototype.s;
  IA.prototype.dispatchEvent = IA.prototype.o;
  IA.prototype.getRevision = IA.prototype.L;
  IA.prototype.on = IA.prototype.H;
  IA.prototype.once = IA.prototype.M;
  IA.prototype.un = IA.prototype.K;
  IA.prototype.unByKey = IA.prototype.N;
  NA.prototype.setRenderReprojectionEdges = NA.prototype.wb;
  NA.prototype.setTileGridForProjection = NA.prototype.xb;
  NA.prototype.getTileLoadFunction = NA.prototype.Xa;
  NA.prototype.getTileUrlFunction = NA.prototype.Ya;
  NA.prototype.getUrls = NA.prototype.Za;
  NA.prototype.setTileLoadFunction = NA.prototype.cb;
  NA.prototype.setTileUrlFunction = NA.prototype.Ka;
  NA.prototype.setUrl = NA.prototype.Va;
  NA.prototype.setUrls = NA.prototype.Wa;
  NA.prototype.getTileGrid = NA.prototype.Ga;
  NA.prototype.getAttributions = NA.prototype.ta;
  NA.prototype.getLogo = NA.prototype.ra;
  NA.prototype.getProjection = NA.prototype.ua;
  NA.prototype.getState = NA.prototype.va;
  NA.prototype.setAttributions = NA.prototype.na;
  NA.prototype.get = NA.prototype.get;
  NA.prototype.getKeys = NA.prototype.O;
  NA.prototype.getProperties = NA.prototype.P;
  NA.prototype.set = NA.prototype.set;
  NA.prototype.setProperties = NA.prototype.I;
  NA.prototype.unset = NA.prototype.R;
  NA.prototype.changed = NA.prototype.s;
  NA.prototype.dispatchEvent = NA.prototype.o;
  NA.prototype.getRevision = NA.prototype.L;
  NA.prototype.on = NA.prototype.H;
  NA.prototype.once = NA.prototype.M;
  NA.prototype.un = NA.prototype.K;
  NA.prototype.unByKey = NA.prototype.N;
  iq.prototype.getTileLoadFunction = iq.prototype.Xa;
  iq.prototype.getTileUrlFunction = iq.prototype.Ya;
  iq.prototype.getUrls = iq.prototype.Za;
  iq.prototype.setTileLoadFunction = iq.prototype.cb;
  iq.prototype.setTileUrlFunction = iq.prototype.Ka;
  iq.prototype.setUrl = iq.prototype.Va;
  iq.prototype.setUrls = iq.prototype.Wa;
  iq.prototype.getTileGrid = iq.prototype.Ga;
  iq.prototype.getAttributions = iq.prototype.ta;
  iq.prototype.getLogo = iq.prototype.ra;
  iq.prototype.getProjection = iq.prototype.ua;
  iq.prototype.getState = iq.prototype.va;
  iq.prototype.setAttributions = iq.prototype.na;
  iq.prototype.get = iq.prototype.get;
  iq.prototype.getKeys = iq.prototype.O;
  iq.prototype.getProperties = iq.prototype.P;
  iq.prototype.set = iq.prototype.set;
  iq.prototype.setProperties = iq.prototype.I;
  iq.prototype.unset = iq.prototype.R;
  iq.prototype.changed = iq.prototype.s;
  iq.prototype.dispatchEvent = iq.prototype.o;
  iq.prototype.getRevision = iq.prototype.L;
  iq.prototype.on = iq.prototype.H;
  iq.prototype.once = iq.prototype.M;
  iq.prototype.un = iq.prototype.K;
  iq.prototype.unByKey = iq.prototype.N;
  Z.prototype.setRenderReprojectionEdges = Z.prototype.wb;
  Z.prototype.setTileGridForProjection = Z.prototype.xb;
  Z.prototype.getTileLoadFunction = Z.prototype.Xa;
  Z.prototype.getTileUrlFunction = Z.prototype.Ya;
  Z.prototype.getUrls = Z.prototype.Za;
  Z.prototype.setTileLoadFunction = Z.prototype.cb;
  Z.prototype.setTileUrlFunction = Z.prototype.Ka;
  Z.prototype.setUrl = Z.prototype.Va;
  Z.prototype.setUrls = Z.prototype.Wa;
  Z.prototype.getTileGrid = Z.prototype.Ga;
  Z.prototype.getAttributions = Z.prototype.ta;
  Z.prototype.getLogo = Z.prototype.ra;
  Z.prototype.getProjection = Z.prototype.ua;
  Z.prototype.getState = Z.prototype.va;
  Z.prototype.setAttributions = Z.prototype.na;
  Z.prototype.get = Z.prototype.get;
  Z.prototype.getKeys = Z.prototype.O;
  Z.prototype.getProperties = Z.prototype.P;
  Z.prototype.set = Z.prototype.set;
  Z.prototype.setProperties = Z.prototype.I;
  Z.prototype.unset = Z.prototype.R;
  Z.prototype.changed = Z.prototype.s;
  Z.prototype.dispatchEvent = Z.prototype.o;
  Z.prototype.getRevision = Z.prototype.L;
  Z.prototype.on = Z.prototype.H;
  Z.prototype.once = Z.prototype.M;
  Z.prototype.un = Z.prototype.K;
  Z.prototype.unByKey = Z.prototype.N;
  UA.prototype.setRenderReprojectionEdges = UA.prototype.wb;
  UA.prototype.setTileGridForProjection = UA.prototype.xb;
  UA.prototype.getTileLoadFunction = UA.prototype.Xa;
  UA.prototype.getTileUrlFunction = UA.prototype.Ya;
  UA.prototype.getUrls = UA.prototype.Za;
  UA.prototype.setTileLoadFunction = UA.prototype.cb;
  UA.prototype.setTileUrlFunction = UA.prototype.Ka;
  UA.prototype.setUrl = UA.prototype.Va;
  UA.prototype.setUrls = UA.prototype.Wa;
  UA.prototype.getTileGrid = UA.prototype.Ga;
  UA.prototype.getAttributions = UA.prototype.ta;
  UA.prototype.getLogo = UA.prototype.ra;
  UA.prototype.getProjection = UA.prototype.ua;
  UA.prototype.getState = UA.prototype.va;
  UA.prototype.setAttributions = UA.prototype.na;
  UA.prototype.get = UA.prototype.get;
  UA.prototype.getKeys = UA.prototype.O;
  UA.prototype.getProperties = UA.prototype.P;
  UA.prototype.set = UA.prototype.set;
  UA.prototype.setProperties = UA.prototype.I;
  UA.prototype.unset = UA.prototype.R;
  UA.prototype.changed = UA.prototype.s;
  UA.prototype.dispatchEvent = UA.prototype.o;
  UA.prototype.getRevision = UA.prototype.L;
  UA.prototype.on = UA.prototype.H;
  UA.prototype.once = UA.prototype.M;
  UA.prototype.un = UA.prototype.K;
  UA.prototype.unByKey = UA.prototype.N;
  km.prototype.getOpacity = km.prototype.Ce;
  km.prototype.getRotateWithView = km.prototype.fe;
  km.prototype.getRotation = km.prototype.De;
  km.prototype.getScale = km.prototype.Ee;
  km.prototype.getSnapToPixel = km.prototype.ge;
  km.prototype.setOpacity = km.prototype.Fe;
  km.prototype.setRotation = km.prototype.Ge;
  km.prototype.setScale = km.prototype.He;
  Fk.prototype.getOpacity = Fk.prototype.Ce;
  Fk.prototype.getRotateWithView = Fk.prototype.fe;
  Fk.prototype.getRotation = Fk.prototype.De;
  Fk.prototype.getScale = Fk.prototype.Ee;
  Fk.prototype.getSnapToPixel = Fk.prototype.ge;
  Fk.prototype.setOpacity = Fk.prototype.Fe;
  Fk.prototype.setRotation = Fk.prototype.Ge;
  Fk.prototype.setScale = Fk.prototype.He;
  $A.prototype.getOpacity = $A.prototype.Ce;
  $A.prototype.getRotateWithView = $A.prototype.fe;
  $A.prototype.getRotation = $A.prototype.De;
  $A.prototype.getScale = $A.prototype.Ee;
  $A.prototype.getSnapToPixel = $A.prototype.ge;
  $A.prototype.setOpacity = $A.prototype.Fe;
  $A.prototype.setRotation = $A.prototype.Ge;
  $A.prototype.setScale = $A.prototype.He;
  RA.prototype.getMaxZoom = RA.prototype.Kg;
  RA.prototype.getMinZoom = RA.prototype.Lg;
  RA.prototype.getOrigin = RA.prototype.Ca;
  RA.prototype.getResolution = RA.prototype.aa;
  RA.prototype.getResolutions = RA.prototype.Bh;
  RA.prototype.getTileCoordExtent = RA.prototype.Aa;
  RA.prototype.getTileCoordForCoordAndResolution = RA.prototype.he;
  RA.prototype.getTileCoordForCoordAndZ = RA.prototype.ie;
  RA.prototype.getTileSize = RA.prototype.Ha;
  bq.prototype.getTileCoord = bq.prototype.f;
  Qf.prototype.get = Qf.prototype.get;
  Qf.prototype.getKeys = Qf.prototype.O;
  Qf.prototype.getProperties = Qf.prototype.P;
  Qf.prototype.set = Qf.prototype.set;
  Qf.prototype.setProperties = Qf.prototype.I;
  Qf.prototype.unset = Qf.prototype.R;
  Qf.prototype.changed = Qf.prototype.s;
  Qf.prototype.dispatchEvent = Qf.prototype.o;
  Qf.prototype.getRevision = Qf.prototype.L;
  Qf.prototype.on = Qf.prototype.H;
  Qf.prototype.once = Qf.prototype.M;
  Qf.prototype.un = Qf.prototype.K;
  Qf.prototype.unByKey = Qf.prototype.N;
  return OPENLAYERS.ol;
}));

