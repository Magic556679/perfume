(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4096dc9c"],{"0ded":function(e,t,c){"use strict";c("b32e")},"1dde":function(e,t,c){var a=c("d039"),n=c("b622"),o=c("2d00"),r=n("species");e.exports=function(e){return o>=51||!a((function(){var t=[],c=t.constructor={};return c[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,c){"use strict";var a=c("c04e"),n=c("9bf2"),o=c("5c6c");e.exports=function(e,t,c){var r=a(t);r in e?n.f(e,r,o(0,c)):e[r]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),n=c("d039"),o=c("e8b5"),r=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),f=c("2d00"),v=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",p=f>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=d("concat"),N=function(e){if(!r(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},h=!p||!g;a({target:"Array",proto:!0,forced:h},{concat:function(e){var t,c,a,n,o,r=i(this),d=u(r,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?r:arguments[t],N(o)){if(n=s(o.length),b+n>j)throw TypeError(O);for(c=0;c<n;c++,b++)c in o&&l(d,b,o[c])}else{if(b>=j)throw TypeError(O);l(d,b++,o)}return d.length=b,d}})},b32e:function(e,t,c){},c789:function(e,t,c){"use strict";c("c8ad")},c8ad:function(e,t,c){},ca15:function(e,t,c){"use strict";c.r(t);var a=c("7a23");function n(e,t,c,n,o,r){var i=Object(a["resolveComponent"])("NavbarViews"),s=Object(a["resolveComponent"])("router-view"),l=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])(i),Object(a["createVNode"])(s),Object(a["createVNode"])(l)],64)}var o={class:"navbar navbar-expand-lg navbar-dark bg-pink",id:"nav"},r={class:"container-fluid"},i=Object(a["createTextVNode"])("Perfume"),s=Object(a["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse flex justify-content-end",id:"navbarNav"},u={class:"navbar-nav fs-7"},d={class:"nav-item"},b=Object(a["createTextVNode"])("首頁"),f={class:"nav-item"},v=Object(a["createTextVNode"])("商品"),j={class:"nav-item"},O=Object(a["createTextVNode"])("關於我們"),p={class:"nav-item position-relative"},g=Object(a["createVNode"])("i",{class:"bi bi-suit-heart-fill"},null,-1),N={key:0,class:"rounded-pill bg-danger\n          text-white position-absolute"},h={class:"nav-item position-relative"},m=Object(a["createVNode"])("i",{class:"bi bi-cart-fill"},null,-1),V={key:0},w={key:0,class:"rounded-pill bg-danger\n            text-white position-absolute"};function k(e,t,c,n,k,x){var y=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])(y,{to:"/",class:"nav-link navbar-brand logoFont fs-3"},{default:Object(a["withCtx"])((function(){return[i]})),_:1}),s,Object(a["createVNode"])("div",l,[Object(a["createVNode"])("ul",u,[Object(a["createVNode"])("li",d,[Object(a["createVNode"])(y,{to:"/",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[b]})),_:1})]),Object(a["createVNode"])("li",f,[Object(a["createVNode"])(y,{to:"/products",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})]),Object(a["createVNode"])("li",j,[Object(a["createVNode"])(y,{to:"/about",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[O]})),_:1})]),Object(a["createVNode"])("li",p,[Object(a["createVNode"])(y,{to:"/favorite",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[g]})),_:1}),this.newNum>0?(Object(a["openBlock"])(),Object(a["createBlock"])("div",N,Object(a["toDisplayString"])(k.newNum),1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("li",h,[Object(a["createVNode"])(y,{to:"/cart",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[m]})),_:1}),k.cart.carts?(Object(a["openBlock"])(),Object(a["createBlock"])("div",V,[this.cart.carts.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])("div",w,Object(a["toDisplayString"])(k.cart.carts.length),1)):Object(a["createCommentVNode"])("",!0)])):Object(a["createCommentVNode"])("",!0)])])])])])}c("99af");var x=c("e4f3"),y={get:function(){return JSON.parse(localStorage.getItem("hexFavorite"))}},C={data:function(){return{cart:{},myFavorite:y.get()||[],newNum:0}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/cart");this.$http.get(t).then((function(t){e.cart=t.data.data})).catch((function(){e.$swal({title:"資料取得失敗",icon:"error"}),e.loadingStatus=!1}))},getmyFavorite:function(){this.newNum=this.myFavorite.length}},mounted:function(){var e=this;this.getCart(),this.getmyFavorite(),x["a"].on("update-cart",(function(){e.getCart()})),x["a"].on("favorite-num",(function(t){e.getmyFavorite(),e.newNum=t}))},unmounted:function(){var e=this;x["a"].off("update-cart",(function(){e.getcart()})),x["a"].off("favorite-num",(function(t){e.getmyFavorite(),e.newNum=t}))}};c("0ded");C.render=k;var B=C,F=Object(a["withScopeId"])("data-v-97850296");Object(a["pushScopeId"])("data-v-97850296");var S={class:"container-fluid footer",style:{"background-color":"#000"}},_=Object(a["createVNode"])("div",{class:"row"},[Object(a["createVNode"])("div",{class:"col-12 d-flex justify-content-center"},[Object(a["createVNode"])("div",{class:"mt-3"},[Object(a["createVNode"])("p",null,"© 2021 All Rights Reserved.")])])],-1);Object(a["popScopeId"])();var T=F((function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",S,[_])}));c("c789");const I={};I.render=T,I.__scopeId="data-v-97850296";var J=I,A={data:function(){return{}},components:{NavbarViews:B,Footer:J}};A.render=n;t["default"]=A},e4f3:function(e,t,c){"use strict";var a=function(e){return{all:e=e||new Map,on:function(t,c){var a=e.get(t);a?a.push(c):e.set(t,[c])},off:function(t,c){var a=e.get(t);a&&(c?a.splice(a.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var a=e.get(t);a&&a.slice().map((function(e){e(c)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,c)}))}}},n=a();t["a"]=n}}]);
//# sourceMappingURL=chunk-4096dc9c.f81094a4.js.map