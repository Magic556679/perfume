(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b081763"],{"0ded":function(e,t,a){"use strict";a("b32e")},"1dde":function(e,t,a){var c=a("d039"),n=a("b622"),o=a("2d00"),r=n("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"2e4e":function(e,t,a){},8418:function(e,t,a){"use strict";var c=a("c04e"),n=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var r=c(t);r in e?n.f(e,r,o(0,a)):e[r]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),n=a("d039"),o=a("e8b5"),r=a("861d"),i=a("7b0b"),s=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),b=a("b622"),f=a("2d00"),v=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",p=f>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=d("concat"),N=function(e){if(!r(e))return!1;var t=e[v];return void 0!==t?!!t:o(e)},h=!p||!g;c({target:"Array",proto:!0,forced:h},{concat:function(e){var t,a,c,n,o,r=i(this),d=u(r,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?r:arguments[t],N(o)){if(n=s(o.length),b+n>j)throw TypeError(O);for(a=0;a<n;a++,b++)a in o&&l(d,b,o[a])}else{if(b>=j)throw TypeError(O);l(d,b++,o)}return d.length=b,d}})},a6d1:function(e,t,a){"use strict";a("2e4e")},b32e:function(e,t,a){},ca15:function(e,t,a){"use strict";a.r(t);var c=a("7a23");function n(e,t,a,n,o,r){var i=Object(c["resolveComponent"])("NavbarViews"),s=Object(c["resolveComponent"])("router-view"),l=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i),Object(c["createVNode"])(s),Object(c["createVNode"])(l)],64)}var o={class:"navbar navbar-expand-lg navbar-dark bg-pink",id:"nav"},r={class:"container-fluid"},i=Object(c["createTextVNode"])("Perfume"),s=Object(c["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse flex justify-content-end",id:"navbarNav"},u={class:"navbar-nav fs-7"},d={class:"nav-item"},b=Object(c["createTextVNode"])("首頁"),f={class:"nav-item"},v=Object(c["createTextVNode"])("商品"),j={class:"nav-item"},O=Object(c["createTextVNode"])("關於我們"),p={class:"nav-item position-relative"},g=Object(c["createVNode"])("i",{class:"bi bi-suit-heart-fill"},null,-1),N={key:0,class:"rounded-pill bg-danger\n          text-white position-absolute"},h={class:"nav-item position-relative"},m=Object(c["createVNode"])("i",{class:"bi bi-cart-fill"},null,-1),V={key:0},w={key:0,class:"rounded-pill bg-danger\n            text-white position-absolute"};function k(e,t,a,n,k,x){var y=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",o,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])(y,{to:"/",class:"nav-link navbar-brand logoFont fs-3"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),s,Object(c["createVNode"])("div",l,[Object(c["createVNode"])("ul",u,[Object(c["createVNode"])("li",d,[Object(c["createVNode"])(y,{to:"/",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]),Object(c["createVNode"])("li",f,[Object(c["createVNode"])(y,{to:"/products",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[v]})),_:1})]),Object(c["createVNode"])("li",j,[Object(c["createVNode"])(y,{to:"/about",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[O]})),_:1})]),Object(c["createVNode"])("li",p,[Object(c["createVNode"])(y,{to:"/favorite",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[g]})),_:1}),this.newNum>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",N,Object(c["toDisplayString"])(k.newNum),1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createVNode"])("li",h,[Object(c["createVNode"])(y,{to:"/cart",class:"nav-link"},{default:Object(c["withCtx"])((function(){return[m]})),_:1}),k.cart.carts?(Object(c["openBlock"])(),Object(c["createBlock"])("div",V,[this.cart.carts.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",w,Object(c["toDisplayString"])(k.cart.carts.length),1)):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)])])])])])}a("99af");var x=a("e4f3"),y={get:function(){return JSON.parse(localStorage.getItem("hexFavorite"))}},C={data:function(){return{cart:{},myFavorite:y.get()||[],newNum:0}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/cart");this.$http.get(t).then((function(t){e.cart=t.data.data})).catch((function(){e.$swal({title:"資料取得失敗",icon:"error"}),e.loadingStatus=!1}))},getmyFavorite:function(){this.newNum=this.myFavorite.length}},mounted:function(){var e=this;this.getCart(),this.getmyFavorite(),x["a"].on("update-cart",(function(){e.getCart()})),x["a"].on("favorite-num",(function(t){e.getmyFavorite(),e.newNum=t}))},unmounted:function(){var e=this;x["a"].off("update-cart",(function(){e.getcart()})),x["a"].off("favorite-num",(function(t){e.getmyFavorite(),e.newNum=t}))}};a("0ded");C.render=k;var B=C,F=Object(c["withScopeId"])("data-v-e3739d2e");Object(c["pushScopeId"])("data-v-e3739d2e");var S={class:"container-fluid footer",style:{"background-color":"#000"}},_=Object(c["createVNode"])("div",{class:"row"},[Object(c["createVNode"])("div",{class:"col-12 d-flex justify-content-center"},[Object(c["createVNode"])("div",{class:"mt-3"},[Object(c["createVNode"])("p",null,"© 2021 All Rights Reserved.")])])],-1);Object(c["popScopeId"])();var T=F((function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",S,[_])}));a("a6d1");const I={};I.render=T,I.__scopeId="data-v-e3739d2e";var J=I,A={data:function(){return{}},components:{NavbarViews:B,Footer:J}};A.render=n;t["default"]=A},e4f3:function(e,t,a){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,a){var c=e.get(t);c?c.push(a):e.set(t,[a])},off:function(t,a){var c=e.get(t);c&&(a?c.splice(c.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var c=e.get(t);c&&c.slice().map((function(e){e(a)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,a)}))}}},n=c();t["a"]=n}}]);
//# sourceMappingURL=chunk-4b081763.12212a60.js.map