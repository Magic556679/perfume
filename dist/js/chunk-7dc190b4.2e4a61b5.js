(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc190b4"],{"1dde":function(t,e,c){var o=c("d039"),n=c("b622"),r=c("2d00"),a=n("species");t.exports=function(t){return r>=51||!o((function(){var e=[],c=e.constructor={};return c[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"395d":function(t,e,c){"use strict";c.r(e);var o=c("7a23"),n={key:0,class:"container min mt-5"},r={key:0,class:"row justify-content-center"},a={class:"col-md-8"},l={class:"d-flex justify-content-between"},d={class:"table align-middle text-center mt-5"},i=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{class:"d-none d-lg-table-cell"}),Object(o["createVNode"])("th",null,"品名"),Object(o["createVNode"])("th",{width:"130px"},"數量"),Object(o["createVNode"])("th",null,"金額"),Object(o["createVNode"])("th",null,"刪除")])],-1),u={class:"d-none d-lg-table-cell"},s={class:"input-group my-3 bg-secondary rounded"},b={class:"input-group-prepend"},p=Object(o["createVNode"])("i",{class:"bi bi-plus-lg"},null,-1),f={class:"input-group-append"},j=Object(o["createVNode"])("i",{class:"bi bi-dash-lg"},null,-1),O={class:""},h=Object(o["createVNode"])("i",{class:"bi bi-trash"},null,-1),N=Object(o["createVNode"])("td",{colspan:"3",class:"text-end"},"總計",-1),g=Object(o["createVNode"])("td",{class:"d-none d-lg-table-cell"},null,-1),V={class:"text-end"},y={key:0},v=Object(o["createVNode"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),m=Object(o["createVNode"])("td",{class:"d-none d-lg-table-cell"},null,-1),k={class:"text-end\n                            text-success"},x={class:"input-group"},C={class:"input-group-prepend"},w={key:1,class:"row d-flex align-items-center justify-content-center"},B={class:"col-md-8 text-center"},$=Object(o["createVNode"])("h2",null,"購物車無商品",-1);function D(t,e,c,D,L,T){var q=Object(o["resolveComponent"])("Loading");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(q,{active:L.isLoading,"z-index":1060},null,8,["active"]),L.cart.carts?(Object(o["openBlock"])(),Object(o["createBlock"])("div",n,[L.cart.carts.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("button",{type:"button",class:"\n                  btn-pink rounded py-2 shadow-none",style:{border:"none"},onClick:e[1]||(e[1]=function(e){return t.$router.push("/products")})},"繼續購物"),Object(o["createVNode"])("button",{type:"button",class:"\n                  btn-pink rounded py-2 shadow-none",style:{border:"none"},onClick:e[2]||(e[2]=function(e){return t.$router.push("/order")})},"填寫訂單")]),Object(o["createVNode"])("table",d,[i,Object(o["createVNode"])("tbody",null,[L.cart.carts?(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],{key:0},Object(o["renderList"])(L.cart.carts,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",u,[Object(o["createVNode"])("img",{src:e.product.imageUrl},null,8,["src"])]),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.product.title),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",onClick:function(t){return T.upDateCart(e.id,e.qty+1)}},[p],8,["onClick"])]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control border-0 text-center\n                              my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":function(t){return e.qty=t},disabled:"value"},null,8,["onUpdate:modelValue"]),[[o["vModelText"],e.qty]]),Object(o["createVNode"])("div",f,[Object(o["createVNode"])("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",onClick:function(t){return T.upDateCart(e.id,e.qty-1)},disabled:1===e.qty},[j],8,["onClick","disabled"])])])]),Object(o["createVNode"])("td",O," NT$"+Object(o["toDisplayString"])(t.$toCurrency(e.final_total)),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return T.removeCartItem(e.id)}},[h],8,["onClick"])])])})),128)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("tr",null,[N,g,Object(o["createVNode"])("td",V,"$NT"+Object(o["toDisplayString"])(t.$toCurrency(L.cart.total)),1)]),L.cart.final_total!==L.cart.total?(Object(o["openBlock"])(),Object(o["createBlock"])("tr",y,[v,m,Object(o["createVNode"])("td",k,"$NT"+Object(o["toDisplayString"])(t.$toCurrency(L.cart.final_total)),1)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",C,[Object(o["createVNode"])("button",{class:"input-group-text btn-pink",id:"btnGroupAddon2",onClick:e[3]||(e[3]=function(t){return T.coupon()})},"套用優惠券")]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"輸入優惠卷","aria-label":"Input group example","aria-describedby":"btnGroupAddon2","onUpdate:modelValue":e[4]||(e[4]=function(t){return L.couponNum.code=t})},null,512),[[o["vModelText"],L.couponNum.code]])])])])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",w,[Object(o["createVNode"])("div",B,[$,Object(o["createVNode"])("button",{type:"button",class:"\n            btn-pink rounded py-2 px-3 shadow-none mt-5",style:{border:"none"},onClick:e[5]||(e[5]=function(e){return t.$router.push("/products")})},"前往購物")])]))])):Object(o["createCommentVNode"])("",!0)],64)}c("99af");var L=c("e4f3"),T={data:function(){return{cart:{},isLoading:!1,couponNum:{code:""}}},methods:{getCarts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){t.cart=e.data.data,console.log(e),t.isLoading=!1}))},removeCartItem:function(t){var e=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/cart/").concat(t);this.$http.delete(c).then((function(t){L["a"].emit("update-cart"),console.log(t),e.getCarts(),e.isLoading=!1}))},upDateCart:function(t,e){var c=this,o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/cart/").concat(t),n={product_id:t,qty:e};this.$http.put(o,{data:n}).then((function(t){console.log(t),c.getCarts()}))},coupon:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/coupon");this.$http.post(e,{data:this.couponNum}).then((function(e){console.log(e),t.getCarts()}))}},mounted:function(){this.getCarts()}};c("f42b");T.render=D;e["default"]=T},8418:function(t,e,c){"use strict";var o=c("c04e"),n=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var a=o(e);a in t?n.f(t,a,r(0,c)):t[a]=c}},"99af":function(t,e,c){"use strict";var o=c("23e7"),n=c("d039"),r=c("e8b5"),a=c("861d"),l=c("7b0b"),d=c("50c4"),i=c("8418"),u=c("65f0"),s=c("1dde"),b=c("b622"),p=c("2d00"),f=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",h=p>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),N=s("concat"),g=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},V=!h||!N;o({target:"Array",proto:!0,forced:V},{concat:function(t){var e,c,o,n,r,a=l(this),s=u(a,0),b=0;for(e=-1,o=arguments.length;e<o;e++)if(r=-1===e?a:arguments[e],g(r)){if(n=d(r.length),b+n>j)throw TypeError(O);for(c=0;c<n;c++,b++)c in r&&i(s,b,r[c])}else{if(b>=j)throw TypeError(O);i(s,b++,r)}return s.length=b,s}})},"9f98":function(t,e,c){},e4f3:function(t,e,c){"use strict";var o=function(t){return{all:t=t||new Map,on:function(e,c){var o=t.get(e);o?o.push(c):t.set(e,[c])},off:function(e,c){var o=t.get(e);o&&(c?o.splice(o.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var o=t.get(e);o&&o.slice().map((function(t){t(c)})),(o=t.get("*"))&&o.slice().map((function(t){t(e,c)}))}}},n=o();e["a"]=n},f42b:function(t,e,c){"use strict";c("9f98")}}]);
//# sourceMappingURL=chunk-7dc190b4.2e4a61b5.js.map