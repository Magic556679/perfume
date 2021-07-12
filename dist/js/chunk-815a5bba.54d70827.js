(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-815a5bba"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},l=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n={key:0,class:"page-link"},i=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,s,u){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:[{disabled:!c.pages.has_pre},"page-item"]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return u.updatePage(c.pages.current_page-1)}),["prevent"]))},[l])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:c.pages.current_page===e}],key:e},[e===c.pages.current_page?(Object(o["openBlock"])(),Object(o["createBlock"])("span",n,Object(o["toDisplayString"])(e),1)):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return u.updatePage(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,["onClick"]))],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(e){return u.updatePage(c.pages.current_page+1)}),["prevent"]))},[i])],2)])])}var s={props:{pages:{type:Object,default:function(){return{}}}},methods:{updatePage:function(e){this.$emit("emitPages",e)}}};s.render=d;t["a"]=s},"1fae":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"text-end mt-4"},r={class:"table mt-4"},l=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"分類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"},"原價"),Object(o["createVNode"])("th",{width:"120"},"售價"),Object(o["createVNode"])("th",{width:"100"},"是否啟用"),Object(o["createVNode"])("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},i={class:"text-right"},d={key:0,class:"text-success"},s={key:1},u={class:"btn-group"};function p(e,t,c,p,b,m){var j=Object(o["resolveComponent"])("Loading"),O=Object(o["resolveComponent"])("Pagination"),f=Object(o["resolveComponent"])("ProductModal"),h=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(j,{active:b.isLoading,"z-index":1060},null,8,["active"]),Object(o["createVNode"])("div",a,[Object(o["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(e){return m.openModal(!0)})}," 建立新的產品 ")]),Object(o["createVNode"])("table",r,[l,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(b.products,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])("td",n,Object(o["toDisplayString"])(e.origin_price),1),Object(o["createVNode"])("td",i,Object(o["toDisplayString"])(e.price),1),Object(o["createVNode"])("td",null,[e.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",d,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",s,"未啟用"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return m.openModal(!1,e)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return m.openDelProductModal(e)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["createVNode"])(O,{pages:b.pagination,onEmitPages:m.getProducts},null,8,["pages","onEmitPages"]),Object(o["createVNode"])(f,{onUpdateProduct:m.updateProduct,product:b.tempProduct,isNew:b.isNew,ref:"productModal"},null,8,["onUpdateProduct","product","isNew"]),Object(o["createVNode"])(h,{product:b.tempProduct,ref:"delModal",onDelItem:m.delProduct},null,8,["product","onDelItem"])])}var b=c("5530"),m=(c("99af"),c("1799")),j=(c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),O={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},h={class:"modal-header bg-dark text-white"},g={class:"modal-title",id:"exampleModalLabel"},v={key:0},V={key:1},N=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),P={class:"modal-body"},k={class:"row"},y={class:"col-sm-4"},w={class:"mb-3"},x=Object(o["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),M={class:"mb-3"},B={for:"customFile",class:"form-label"},U=Object(o["createTextVNode"])("或 上傳圖片 "),C={key:0,class:"fas fa-spinner fa-spin"},D={key:0,class:"mt-5"},_={key:0},$={class:"col-sm-8"},S={class:"mb-3"},T=Object(o["createVNode"])("label",{for:"title",class:"form-label"},"標題",-1),L={class:"row gx-2"},F={class:"mb-3 col-md-6"},z=Object(o["createVNode"])("label",{for:"category",class:"form-label"},"分類",-1),I={class:"mb-3 col-md-6"},E=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"單位",-1),J={class:"row gx-2"},A={class:"mb-3 col-md-6"},q=Object(o["createVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),G={class:"mb-3 col-md-6"},H=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),K=Object(o["createVNode"])("hr",null,null,-1),Q={class:"mb-3"},R=Object(o["createVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),W={class:"mb-3"},X=Object(o["createVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),Y={class:"mb-3"},Z={class:"form-check"},ee=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),te={class:"modal-footer"},ce=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function oe(e,t,c,a,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",j,[Object(o["createVNode"])("div",O,[Object(o["createVNode"])("div",f,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("h5",g,[c.isNew?(Object(o["openBlock"])(),Object(o["createBlock"])("span",v,"新增產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",V,"新增產品"))]),N]),Object(o["createVNode"])("div",P,[Object(o["createVNode"])("div",k,[Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",w,[x,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],r.tempProduct.imageUrl]])]),Object(o["createVNode"])("div",M,[Object(o["createVNode"])("label",B,[U,r.status.fileUploading?(Object(o["openBlock"])(),Object(o["createBlock"])("i",C)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(o["createVNode"])("img",{class:"img-fluid",src:r.tempProduct.imageUrl},null,8,["src"]),r.tempProduct.imagesUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("div",D,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"mb-3",key:t},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return r.tempProduct.imagesUrl[t]=e},placeholder:"請輸入連結"},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.tempProduct.imagesUrl[t]]]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("img",{class:"img-fluid",src:e},null,8,["src"])]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return r.tempProduct.imagesUrl.splice(t,1)}}," 移除 ",8,["onClick"])])})),128)),r.tempProduct.imagesUrl[r.tempProduct.imagesUrl.length-1]||!r.tempProduct.imagesUrl.length?(Object(o["openBlock"])(),Object(o["createBlock"])("div",_,[Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=function(e){return r.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",$,[Object(o["createVNode"])("div",S,[T,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",F,[z,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],r.tempProduct.category]])]),Object(o["createVNode"])("div",I,[E,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],r.tempProduct.unit]])])]),Object(o["createVNode"])("div",J,[Object(o["createVNode"])("div",A,[q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],r.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",G,[H,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.price=e}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],r.tempProduct.price,void 0,{number:!0}]])])]),K,Object(o["createVNode"])("div",Q,[R,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",W,[X,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createVNode"])("div",Y,[Object(o["createVNode"])("div",Z,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),ee])])])])]),Object(o["createVNode"])("div",te,[ce,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=function(t){return e.$emit("update-product",r.tempProduct)})}," 確認 ")])])])],512)}var ae=c("7c2b"),re=c.n(ae),le={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},data:function(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.status.fileUploading=!1,t.data.success&&(e.tempProduct.imageUrl=t.data.imageUrl,e.$refs.fileInput.value="")}))},openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new re.a(this.$refs.modal)}};le.render=oe;var ne=le,ie=c("6ff1"),de={data:function(){return{products:[],pagination:{},tempProduct:{imagesUrl:[]},isNew:!1,isLoading:!1,status:{fileUploading:!1},modal:{editModal:"",delModal:""},currentPage:1}},components:{Pagination:m["a"],ProductModal:ne,DelModal:ie["a"]},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1)}))},openModal:function(e,t){e?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object(b["a"])({},t),this.isNew=!1);var c=this.$refs.productModal;c.openModal()},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/admin/product/").concat(this.tempProduct.id),o="put");var a=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(e){e.data.success&&(a.hideModal(),t.getProducts(t.currentPage))}))},openDelProductModal:function(e){this.tempProduct=Object(b["a"])({},e);var t=this.$refs.delModal;t.openModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("wu9zo4s","/admin/product/").concat(this.tempProduct.id);this.isLoading=!0,this.$http.delete(t).then((function(t){if(t.data.success){var c=e.$refs.delModal;c.hideModal(),e.getProducts(e.currentPage)}}))}},created:function(){this.getProducts()}};de.render=p;t["default"]=de},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),l=c("50c4"),n=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),p=Math.max,b=Math.min,m=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,O,f,h=n(this),g=l(h.length),v=a(e,g),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=g-v):(c=V-2,o=b(p(r(t),0),g-v)),g+c-o>m)throw TypeError(j);for(s=i(h,o),u=0;u<o;u++)O=v+u,O in h&&d(s,u,h[O]);if(s.length=o,c<o){for(u=v;u<g-o;u++)O=u+o,f=u+c,O in h?h[f]=h[O]:delete h[f];for(u=g;u>g-o+c;u--)delete h[u-1]}else if(c>o)for(u=g-o;u>v;u--)O=u+o-1,f=u+c-1,O in h?h[f]=h[O]:delete h[f];for(u=0;u<c;u++)h[u+v]=arguments[u+2];return h.length=g-o+c,s}})},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),l=c("5135"),n=c("861d"),i=c("9bf2").f,d=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};d(p,s);var b=p.prototype=s.prototype;b.constructor=p;var m=b.toString,j="Symbol(test)"==String(s("test")),O=/^Symbol\((.*)\)[^)]+$/;i(b,"description",{configurable:!0,get:function(){var e=n(this)?this.valueOf():this,t=m.call(e);if(l(u,e))return"";var c=j?t.slice(7,-1):t.replace(O,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-815a5bba.54d70827.js.map