(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7583f615"],{"1dde":function(e,t,c){var o=c("d039"),r=c("b622"),n=c("2d00"),i=r("species");e.exports=function(e){return n>=51||!o((function(){var t=[],c=t.constructor={};return c[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,c){"use strict";var o=c("23e7"),r=c("5a34"),n=c("1d80"),i=c("ab13");o({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(n(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,c){var o=c("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},8418:function(e,t,c){"use strict";var o=c("c04e"),r=c("9bf2"),n=c("5c6c");e.exports=function(e,t,c){var i=o(t);i in e?r.f(e,i,n(0,c)):e[i]=c}},"99af":function(e,t,c){"use strict";var o=c("23e7"),r=c("d039"),n=c("e8b5"),i=c("861d"),a=c("7b0b"),d=c("50c4"),s=c("8418"),u=c("65f0"),l=c("1dde"),f=c("b622"),v=c("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",O=v>=51||!r((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),j=l("concat"),m=function(e){if(!i(e))return!1;var t=e[b];return void 0!==t?!!t:n(e)},g=!O||!j;o({target:"Array",proto:!0,forced:g},{concat:function(e){var t,c,o,r,n,i=a(this),l=u(i,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(n=-1===t?i:arguments[t],m(n)){if(r=d(n.length),f+r>h)throw TypeError(p);for(c=0;c<r;c++,f++)c in n&&s(l,f,n[c])}else{if(f>=h)throw TypeError(p);s(l,f++,n)}return l.length=f,l}})},a434:function(e,t,c){"use strict";var o=c("23e7"),r=c("23cb"),n=c("a691"),i=c("50c4"),a=c("7b0b"),d=c("65f0"),s=c("8418"),u=c("1dde"),l=u("splice"),f=Math.max,v=Math.min,b=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!l},{splice:function(e,t){var c,o,u,l,p,O,j=a(this),m=i(j.length),g=r(e,m),y=arguments.length;if(0===y?c=o=0:1===y?(c=0,o=m-g):(c=y-2,o=v(f(n(t),0),m-g)),m+c-o>b)throw TypeError(h);for(u=d(j,o),l=0;l<o;l++)p=g+l,p in j&&s(u,l,j[p]);if(u.length=o,c<o){for(l=g;l<m-o;l++)p=l+o,O=l+c,p in j?j[O]=j[p]:delete j[O];for(l=m;l>m-o+c;l--)delete j[l-1]}else if(c>o)for(l=m-o;l>g;l--)p=l+o-1,O=l+c-1,p in j?j[O]=j[p]:delete j[O];for(l=0;l<c;l++)j[l+g]=arguments[l+2];return j.length=m-o+c,u}})},a4ca:function(e,t,c){"use strict";c("e92c")},ab13:function(e,t,c){var o=c("b622"),r=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[r]=!1,"/./"[e](t)}catch(o){}}return!1}},ca1c:function(e,t,c){"use strict";c.r(t);c("caad"),c("2532");var o=c("7a23"),r=Object(o["createVNode"])("div",{class:"loadingio-spinner-spin-rvvfjvnp9z"},[Object(o["createVNode"])("div",{class:"ldio-hqeuxluc1v"},[Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("div")])])],-1),n={id:"favorite"},i=Object(o["createStaticVNode"])('<header><div class="container h-100"><div class="row align-items-center justify-content-center h-100"><div class="col-md-6 col-12"><div class="headerTitle"><h1 class="text-center">收藏清單</h1></div></div></div></div></header>',1),a={class:"container min mt-5",id:"favorite"},d={key:0,class:"row"},s={class:"card border-0 mb-4 position-relative"},u={class:"card-body p-0"},l={class:"mb-0 mt-3 text-dark"},f={class:"text-muted mt-3"},v={class:"d-flex justify-content-between"},b=Object(o["createVNode"])("button",{type:"button",class:"btn btn-secondary round-0 py-2"},"查看更多",-1),h={key:1,class:"row d-flex align-items-center justify-content-center"},p={class:"col-md-8 text-center"},O=Object(o["createVNode"])("h2",null,"收藏清單無商品",-1);function j(e,t,c,j,m,g){var y=Object(o["resolveComponent"])("Loading"),N=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(y,{active:m.isLoading,"z-index":1060},{default:Object(o["withCtx"])((function(){return[r]})),_:1},8,["active"]),Object(o["createVNode"])("div",n,[i,Object(o["createVNode"])("div",a,[this.myFavorite.length>0?(Object(o["openBlock"])(),Object(o["createBlock"])("div",d,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(g.filterProducts,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"col-md-3",key:t.id},[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("img",{src:t.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,["src"]),Object(o["createVNode"])("a",{href:"#",class:"text-dark position-absolute",style:{right:"20px",top:"8px","font-size":"2rem"},onClick:Object(o["withModifiers"])((function(e){return g.addMyFavorite(t)}),["prevent"])},[Object(o["createVNode"])("i",{class:["bi bi-suit-heart-fill",{active:m.myFavorite.includes(t.id)}]},null,2)],8,["onClick"]),Object(o["createVNode"])("div",u,[Object(o["createVNode"])("h4",l,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("p",f,"NT$ "+Object(o["toDisplayString"])(e.$toCurrency(t.price)),1),Object(o["createVNode"])("div",v,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-dark btn-pink\n                                round-0 py-2",onClick:function(e){return g.addToCart(t.id)}},"加入購物車",8,["onClick"]),Object(o["createVNode"])(N,{to:"/product/".concat(t.id),style:{"text-decoration":"none"}},{default:Object(o["withCtx"])((function(){return[b]})),_:2},1032,["to"])])])])])})),128))])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",h,[Object(o["createVNode"])("div",p,[O,Object(o["createVNode"])("button",{type:"button",class:"\n                    btn-pink rounded py-2 px-3 shadow-none mt-5",style:{border:"none"},onClick:t[1]||(t[1]=function(t){return e.$router.push("/products")})},"前往購物")])]))])])],64)}c("99af"),c("a434"),c("159b");var m=c("e4f3"),g={save:function(e){var t=JSON.stringify(e);localStorage.setItem("hexFavorite",t)},get:function(){return JSON.parse(localStorage.getItem("hexFavorite"))}},y={data:function(){return{products:[],myFavorite:g.get()||[],isLoading:!1}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/products/all");this.isLoading=!0,this.$http.get(t).then((function(t){e.products=t.data.products,e.isLoading=!1})).catch((function(){e.$swal({title:"資料取得失敗",icon:"error"}),e.loadingStatus=!1}))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/cart"),r={product_id:e,qty:c};this.$http.post(o,{data:r}).then((function(e){m["a"].emit("update-cart"),t.$swal(e.data.message)})).catch((function(){t.$swal({title:"資料取得失敗",icon:"error"}),t.loadingStatus=!1}))},addMyFavorite:function(e){this.myFavorite.includes(e.id)?(this.myFavorite.splice(this.myFavorite.indexOf(e.id),1),this.$swal({title:"已從收藏移除",icon:"error"})):(this.myFavorite.push(e.id),this.$swal({title:"已加入收藏",icon:"success"})),g.save(this.myFavorite),this.FavoriteNum=this.myFavorite.length,m["a"].emit("favorite-num",this.FavoriteNum)}},computed:{filterProducts:function(){var e=this,t=[];return this.products.forEach((function(c){e.myFavorite.includes(c.id)&&t.push(c)})),t}},mounted:function(){this.getProducts()}};c("a4ca");y.render=j;t["default"]=y},caad:function(e,t,c){"use strict";var o=c("23e7"),r=c("4d64").includes,n=c("44d2");o({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},e4f3:function(e,t,c){"use strict";var o=function(e){return{all:e=e||new Map,on:function(t,c){var o=e.get(t);o?o.push(c):e.set(t,[c])},off:function(t,c){var o=e.get(t);o&&(c?o.splice(o.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var o=e.get(t);o&&o.slice().map((function(e){e(c)})),(o=e.get("*"))&&o.slice().map((function(e){e(t,c)}))}}},r=o();t["a"]=r},e92c:function(e,t,c){}}]);
//# sourceMappingURL=chunk-7583f615.8ca88682.js.map