(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b722f"],{"1fae":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),n={class:"text-end mt-4"},r={class:"table mt-4"},a=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"分類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"},"原價"),Object(o["createVNode"])("th",{width:"120"},"售價"),Object(o["createVNode"])("th",{width:"100"},"是否啟用"),Object(o["createVNode"])("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},l={class:"text-right"},b={key:0,class:"text-success"},i={key:1},u={class:"btn-group"};function s(e,t,c,s,p,j){var O=Object(o["resolveComponent"])("Loading"),N=Object(o["resolveComponent"])("Pagination"),V=Object(o["resolveComponent"])("ProductModal"),k=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(O,{active:e.isLoading,"z-index":1060},null,8,["active"]),Object(o["createVNode"])("div",n,[Object(o["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(t){return e.openModal(!0)})}," 建立新的產品 ")]),Object(o["createVNode"])("table",r,[a,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("td",d,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createVNode"])("td",l,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",b,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",i,"未啟用"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(c){return e.openModal(!1,t)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(c){return e.openDelProductModal(t)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["createVNode"])(N,{pages:e.pagination,onEmitPages:e.getProducts},null,8,["pages","onEmitPages"]),Object(o["createVNode"])(V,{onUpdateProduct:e.updateProduct,product:e.tempProduct,isNew:e.isNew,ref:"productModal"},null,8,["onUpdateProduct","product","isNew"]),Object(o["createVNode"])(k,{product:e.tempProduct,ref:"delModal",onDelItem:e.delProduct},null,8,["product","onDelItem"])])}var p={data:function(){return{}}};p.render=s;t["default"]=p}}]);
//# sourceMappingURL=chunk-2d0b722f.fdd90e93.js.map