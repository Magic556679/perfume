(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53a67318"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,c={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==c.call(t)?i(t):o(n(t))}},"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("fb6a"),r("d3b7"),r("b0c0"),r("a630"),r("3ca3");var n=r("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"07ac":function(t,e,r){var n=r("23e7"),o=r("6f53").values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),c=r("2d00"),a=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function o(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0)if(c.push(n.value),e&&c.length===e)break}catch(s){i=!0,o=s}finally{try{a||null==r["return"]||r["return"]()}finally{if(i)throw o}}return c}}var c=r("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){return n(t)||o(t,e)||Object(c["a"])(t,e)||a()}},4609:function(t,e,r){"use strict";r("7460")},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),c=r("9bdd"),a=r("e95a"),i=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,d,b,p=o(t),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,g=void 0!==y,O=u(p),j=0;if(g&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==O||h==Array&&a(O))for(e=i(p.length),r=new h(e);e>j;j++)b=g?y(p[j],j):p[j],s(r,j,b);else for(f=O.call(p),d=f.next,r=new h;!(l=d.call(f)).done;j++)b=g?c(f,y,[l.value,j],!0):l.value,s(r,j,b);return r.length=j,r}},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"6f53":function(t,e,r){var n=r("83ab"),o=r("df75"),c=r("fc6a"),a=r("d1e7").f,i=function(t){return function(e){var r,i=c(e),s=o(i),u=s.length,l=0,f=[];while(u>l)r=s[l++],n&&!a.call(i,r)||f.push(t?[r,i[r]]:i[r]);return f}};t.exports={entries:i(!0),values:i(!1)}},7460:function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),c=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:c.f(t)})}},"83d7":function(t,e,r){"use strict";r.r(e);r("b0c0"),r("ac1f"),r("1276");var n=r("7a23"),o={class:"container mt-5",id:"check"},c={class:"row justify-content-center"},a={class:"col-12 col-lg-6"},i=Object(n["createVNode"])("div",{class:"text-center"},[Object(n["createVNode"])("h2",null,"訂購人資訊")],-1),s={class:"mx-auto",style:{border:"1px solid red"}},u=Object(n["createVNode"])("th",{scope:"row",width:"30%",class:"px-4"},"收件人姓名：",-1),l={width:"70%",height:"75px",class:"px-4"},f=Object(n["createVNode"])("th",{scope:"row",class:"px-4"},"收件人電話：",-1),d={height:"75px",class:"px-4"},b=Object(n["createVNode"])("th",{scope:"row",class:"px-4"},"收件人地址 ：",-1),p={height:"75px",class:"px-4"},h=Object(n["createVNode"])("th",{scope:"row",class:"px-4"},"電子郵件 ：",-1),v={height:"75px",class:"px-4"},y=Object(n["createVNode"])("th",{scope:"row",class:"px-4"},"訂購日期 ：",-1),g={height:"75px",class:"px-4"},O=Object(n["createVNode"])("th",{scope:"row",class:"px-4"},"付款狀態 ：",-1),j={height:"75px",class:"px-4"},x={key:0,class:"text-danger"},m={key:1,class:"text-success"},w=Object(n["createVNode"])("div",{class:"text-center mt-5"},[Object(n["createVNode"])("h2",null,"購物清單")],-1),N={class:"mx-auto"},V=Object(n["createVNode"])("thead",null,[Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("th",{scope:"row",height:"75px",width:"25%",class:"px-4"},"品項："),Object(n["createVNode"])("th",{scope:"row",height:"75px",width:"25%",class:"px-4"},"數量："),Object(n["createVNode"])("th",{scope:"row",height:"75px",width:"25%",class:"px-4"},"金額：")])],-1),S={scope:"row",style:{},height:"75px",class:"px-4"},k={style:{},height:"75px",class:"px-4"},A={height:"75px",class:"px-4"},B=Object(n["createVNode"])("th",{height:"75px",class:"px-4"},"總金額",-1),D={colspan:"2",height:"75px",class:"px-4"},P={class:"mt-5 text-center"};function E(t,e,r,E,T,$){var C,F,L,I,J=Object(n["resolveComponent"])("Loading");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])(J,{active:t.isLoading,"z-index":1060},null,8,["active"]),Object(n["createVNode"])("div",o,[Object(n["createVNode"])("div",c,[Object(n["createVNode"])("div",a,[i,Object(n["createVNode"])("table",s,[Object(n["createVNode"])("tbody",null,[Object(n["createVNode"])("tr",null,[u,Object(n["createVNode"])("td",l,Object(n["toDisplayString"])(null===(C=T.user.user)||void 0===C?void 0:C.name),1)]),Object(n["createVNode"])("tr",null,[f,Object(n["createVNode"])("td",d,Object(n["toDisplayString"])(null===(F=T.user.user)||void 0===F?void 0:F.tel),1)]),Object(n["createVNode"])("tr",null,[b,Object(n["createVNode"])("td",p,Object(n["toDisplayString"])(null===(L=T.user.user)||void 0===L?void 0:L.address),1)]),Object(n["createVNode"])("tr",null,[h,Object(n["createVNode"])("td",v,Object(n["toDisplayString"])(null===(I=T.user.user)||void 0===I?void 0:I.email),1)]),Object(n["createVNode"])("tr",null,[y,Object(n["createVNode"])("td",g,Object(n["toDisplayString"])(new Date(1e3*T.user.create_at).toLocaleString().split(" ")[0]),1)]),Object(n["createVNode"])("tr",null,[O,Object(n["createVNode"])("td",j,[T.user.is_paid?(Object(n["openBlock"])(),Object(n["createBlock"])("span",m,"已付款")):(Object(n["openBlock"])(),Object(n["createBlock"])("span",x,"未付款"))])])])]),w,Object(n["createVNode"])("table",N,[V,Object(n["createVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(T.products,(function(t){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",{key:t.id},[Object(n["createVNode"])("th",S,Object(n["toDisplayString"])(t.product.title),1),Object(n["createVNode"])("td",k,"x"+Object(n["toDisplayString"])(t.qty),1),Object(n["createVNode"])("td",A," NT$"+Object(n["toDisplayString"])(Math.floor(t.final_total).toLocaleString()),1)])})),128)),Object(n["createVNode"])("tr",null,[B,Object(n["createVNode"])("td",D," NT$"+Object(n["toDisplayString"])(T.user.total),1)])])]),Object(n["createVNode"])("div",P,[Object(n["createVNode"])("button",{type:"button",class:"\n                 btn-pink rounded py-2 shadow-none",style:{border:"none"},onClick:e[1]||(e[1]=function(t){return $.pay()})},"確認付款")])])])])],64)}var T=r("3835"),$=(r("99af"),r("07ac"),{data:function(){return{products:[],user:{},price:""}},methods:{getOrders:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/orders?page=1");this.axios.get(e).then((function(e){var r=Object(T["a"])(e.data.orders,1);t.user=r[0],t.products=Object.values(t.user.products)}))},pay:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/pay/").concat(this.user.id);this.axios.post(e).then((function(e){console.log(e),t.$router.push("/payment")}))}},mounted:function(){this.getOrders()}});r("4609");$.render=E;e["default"]=$},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,c(0,r)):t[a]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),c=r("e8b5"),a=r("861d"),i=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),b=r("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",y=b>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),O=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:c(t)},j=!y||!g;n({target:"Array",proto:!0,forced:j},{concat:function(t){var e,r,n,o,c,a=i(this),f=l(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?a:arguments[e],O(c)){if(o=s(c.length),d+o>h)throw TypeError(v);for(r=0;r<o;r++,d++)r in c&&u(f,d,c[r])}else{if(d>=h)throw TypeError(v);u(f,d++,c)}return f.length=d,f}})},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,c){try{return c?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),a=r("c430"),i=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),v=r("fc6a"),y=r("c04e"),g=r("5c6c"),O=r("7c73"),j=r("df75"),x=r("241c"),m=r("057f"),w=r("7418"),N=r("06cf"),V=r("9bf2"),S=r("d1e7"),k=r("9112"),A=r("6eeb"),B=r("5692"),D=r("f772"),P=r("d012"),E=r("90e3"),T=r("b622"),$=r("e538"),C=r("746f"),F=r("d44e"),L=r("69f3"),I=r("b727").forEach,J=D("hidden"),M="Symbol",z="prototype",_=T("toPrimitive"),q=L.set,Q=L.getterFor(M),U=Object[z],W=o.Symbol,G=c("JSON","stringify"),H=N.f,K=V.f,R=m.f,X=S.f,Y=B("symbols"),Z=B("op-symbols"),tt=B("string-to-symbol-registry"),et=B("symbol-to-string-registry"),rt=B("wks"),nt=o.QObject,ot=!nt||!nt[z]||!nt[z].findChild,ct=i&&l((function(){return 7!=O(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(U,e);n&&delete U[e],K(t,e,r),n&&t!==U&&K(U,e,n)}:K,at=function(t,e){var r=Y[t]=O(W[z]);return q(r,{type:M,tag:t,description:e}),i||(r.description=e),r},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},st=function(t,e,r){t===U&&st(Z,e,r),p(t);var n=y(e,!0);return p(r),f(Y,n)?(r.enumerable?(f(t,J)&&t[J][n]&&(t[J][n]=!1),r=O(r,{enumerable:g(0,!1)})):(f(t,J)||K(t,J,g(1,{})),t[J][n]=!0),ct(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=v(e),n=j(r).concat(pt(r));return I(n,(function(e){i&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?O(t):ut(O(t),e)},ft=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===U&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,J)&&this[J][e])||r)},dt=function(t,e){var r=v(t),n=y(e,!0);if(r!==U||!f(Y,n)||f(Z,n)){var o=H(r,n);return!o||!f(Y,n)||f(r,J)&&r[J][n]||(o.enumerable=!0),o}},bt=function(t){var e=R(v(t)),r=[];return I(e,(function(t){f(Y,t)||f(P,t)||r.push(t)})),r},pt=function(t){var e=t===U,r=R(e?Z:v(t)),n=[];return I(r,(function(t){!f(Y,t)||e&&!f(U,t)||n.push(Y[t])})),n};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===U&&r.call(Z,t),f(this,J)&&f(this[J],e)&&(this[J][e]=!1),ct(this,e,g(1,t))};return i&&ot&&ct(U,e,{configurable:!0,set:r}),at(e,t)},A(W[z],"toString",(function(){return Q(this).tag})),A(W,"withoutSetter",(function(t){return at(E(t),t)})),S.f=ft,V.f=st,N.f=dt,x.f=m.f=bt,w.f=pt,$.f=function(t){return at(T(t),t)},i&&(K(W[z],"description",{configurable:!0,get:function(){return Q(this).description}}),a||A(U,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),I(j(rt),(function(t){C(t)})),n({target:M,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!i},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(h(t))}}),G){var ht=!s||l((function(){var t=W();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(n=e,(b(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),o[1]=e,G.apply(null,o)}})}W[z][_]||k(W[z],_,W[z].valueOf),F(W,M),P[J]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),c=r("1c7e"),a=!c((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,c=Function.prototype,a=c.toString,i=/^\s*function ([^ (]*)/,s="name";n&&!(s in c)&&o(c,s,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),c=r("da84"),a=r("5135"),i=r("861d"),s=r("9bf2").f,u=r("e893"),l=c.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var b=d.prototype=l.prototype;b.constructor=d;var p=b.toString,h="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=p.call(t);if(a(f,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),c=r("e8b5"),a=r("23cb"),i=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),d=f("slice"),b=l("species"),p=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,l,f=s(this),d=i(f.length),v=a(t,d),y=a(void 0===e?d:e,d);if(c(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,v,y);for(n=new(void 0===r?Array:r)(h(y-v,0)),l=0;v<y;v++,l++)v in f&&u(n,l,f[v]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-53a67318.f8b05a62.js.map