(function(e){function n(n){for(var r,o,a=n[0],d=n[1],i=n[2],f=0,l=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);s&&s(n);while(l.length)l.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==c[a]&&(r=!1)}r&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-10f39a85":"1e28a9f5","chunk-2d0b722f":"fdd90e93","chunk-2d0d07e5":"118e4499","chunk-2d21a3d2":"bf39c53b","chunk-6cddf2a6":"f37059fa"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-6cddf2a6":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-10f39a85":"31d6cfe0","chunk-2d0b722f":"31d6cfe0","chunk-2d0d07e5":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-6cddf2a6":"d3e0b122"}[e]+".css",c=d.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var i=u[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===c))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],f=i.getAttribute("data-href");if(f===r||f===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),t(u)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var l=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,t[1](l)}c[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/perfume/dist/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o=t("bc3a"),c=t.n(o),u=t("2106"),a=t.n(u),d=t("9062"),i=t.n(d);function f(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}t("df2b");const l={};l.render=f;var s=l,p=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),h=[{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/admin",component:function(){return t.e("chunk-6cddf2a6").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return t.e("chunk-2d0b722f").then(t.bind(null,"1fae"))}},{path:"orders",component:function(){return t.e("chunk-2d0d07e5").then(t.bind(null,"67e3"))}}]},{path:"/Login",component:function(){return t.e("chunk-10f39a85").then(t.bind(null,"a55b"))}}],b=Object(p["a"])({history:Object(p["b"])(),routes:h}),m=b,v=Object(r["createApp"])(s);v.use(a.a,c.a),v.use(m),v.component("Loading",i.a),v.mount("#app")},c313:function(e,n,t){},df2b:function(e,n,t){"use strict";t("c313")}});
//# sourceMappingURL=app.ff76a977.js.map