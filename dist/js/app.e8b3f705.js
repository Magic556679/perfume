(function(e){function n(n){for(var r,c,a=n[0],i=n[1],f=n[2],l=0,d=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(d.length)d.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0d0c6e6c":"acf21eff","chunk-815a5bba":"54d70827","chunk-a3cecf70":"8d3aa67a","chunk-e4687554":"f6b01dca","chunk-10f39a85":"e9ae90f9","chunk-5704b379":"9ab65b58","chunk-64a3681e":"4a51f087","chunk-b1187f84":"542a77fa","chunk-bb694a3c":"90dea1d7","chunk-e8b25e0a":"f2697579"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5704b379":1,"chunk-64a3681e":1,"chunk-b1187f84":1,"chunk-bb694a3c":1,"chunk-e8b25e0a":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0d0c6e6c":"31d6cfe0","chunk-815a5bba":"31d6cfe0","chunk-a3cecf70":"31d6cfe0","chunk-e4687554":"31d6cfe0","chunk-10f39a85":"31d6cfe0","chunk-5704b379":"31a4696e","chunk-64a3681e":"7b5fe2e8","chunk-b1187f84":"26f5f105","chunk-bb694a3c":"79b001ff","chunk-e8b25e0a":"512d4daa"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){f=d[a],l=f.getAttribute("data-href");if(l===r||l===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],h.parentNode.removeChild(h),t(u)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}o[e]=void 0}};var h=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/perfume/dist/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var h=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=(t("7b17"),t("bc3a")),o=t.n(c),u=t("2106"),a=t.n(u),i=t("9062"),f=t.n(i);t("e40d");function l(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}t("df2b");const d={};d.render=l;var h=d,p=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),s=[{path:"/",component:function(){return t.e("chunk-5704b379").then(t.bind(null,"f0c4"))},children:[{path:"",component:function(){return t.e("chunk-bb694a3c").then(t.bind(null,"bb51"))}},{path:"Products",component:function(){return t.e("chunk-b1187f84").then(t.bind(null,"e6dc"))}},{path:"Product/:id",component:function(){return t.e("chunk-64a3681e").then(t.bind(null,"d2f1"))}}]},{path:"/admin",component:function(){return t.e("chunk-e8b25e0a").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-0d0c6e6c"),t.e("chunk-815a5bba")]).then(t.bind(null,"1fae"))}},{path:"orders",component:function(){return Promise.all([t.e("chunk-0d0c6e6c"),t.e("chunk-a3cecf70")]).then(t.bind(null,"67e3"))}},{path:"coupons",component:function(){return Promise.all([t.e("chunk-0d0c6e6c"),t.e("chunk-e4687554")]).then(t.bind(null,"9097"))}}]},{path:"/Login",component:function(){return t.e("chunk-10f39a85").then(t.bind(null,"a55b"))}}],b=Object(p["a"])({history:Object(p["b"])(),routes:s}),m=b;function k(e){var n=new Date(1e3*e);return n.toLocaleDateString()}var v=Object(r["createApp"])(h);v.config.globalProperties.date=k,v.use(a.a,o.a),v.use(m),v.component("Loading",f.a),v.mount("#app")},c313:function(e,n,t){},df2b:function(e,n,t){"use strict";t("c313")}});
//# sourceMappingURL=app.e8b3f705.js.map