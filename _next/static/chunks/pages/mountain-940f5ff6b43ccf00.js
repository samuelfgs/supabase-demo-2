(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{6275:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mountain",function(){return a(9140)}])},5694:function(e,t,a){"use strict";a.d(t,{Mb:function(){return f},VO:function(){return b},Qb:function(){return g},BD:function(){return v}});var n=a(5893),r=a(8030),i=a(7294),s=a(7033),o=a(7122),l=a(6486),u=a.n(l),c=a(2823);a(5062);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){m(e,t,a[t])}))}return e}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var t=e.name,a=e.className,r=(0,s.sl)();return t?(0,n.jsx)("div",{className:a,children:(0,o.v8)(t,r)}):(0,n.jsx)("p",{children:"You need to set the name prop"})}function b(e){var t=e.url,a=e.className,r=(0,s.sl)();return t?(0,n.jsx)("img",{className:a,src:(0,o.v8)(t,r),style:{objectFit:"cover"}}):(0,n.jsx)("p",{children:"You need to set the url prop"})}function g(e){var t=(0,i.useContext)(s.Xd),a=e.children,o=e.columns,l=e.columnGap,u=e.rowGap,c=e.count,d=e.className,m=e.loading,_=e.testLoading,p=t;return!p||_?m:(0,n.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(o,", 1fr)"),columnGap:"".concat(l,"px"),rowGap:"".concat(u,"px")},className:d,children:p.slice(0,c).map((function(e,t){return(0,n.jsx)(s.g6.Provider,{value:e,children:(0,n.jsx)("div",{children:(0,r.xH)(0===t,a)},e.id)},e.id)}))})}function v(e){var t=(0,i.useContext)(s.Xd),a=e.columns,r=e.className,o=e.loading,l=e.testLoading,d=e.canEdit,m=e.canDelete,f=e.editSlot,b=e.deleteSlot,g=e.customizeEditAndDelete,v=e.editPage,h=i.createRef(),y=t;if(!y||l)return o;if(!a)return(0,n.jsx)("p",{children:"You need to set the columns prop"});var x=p(a.split(",").map((function(e){return{title:u().capitalize(e),dataIndex:e,key:e}}))).concat(p(d?[{title:"Edit",dataIndex:"edit",key:"edit",render:function(e){return(0,n.jsx)("div",{onClick:function(){var t;localStorage.setItem("id",e),null===(t=h.current)||void 0===t||t.click()},children:f})}}]:[]),p(m?[{title:"Delete",dataIndex:"delete",key:"delete",render:function(e){return(0,n.jsx)("div",{onClick:function(){return console.log(e)},children:(0,n.jsx)(s.g6.Provider,{value:y.filter((function(t){return t.id===e}))[0],children:b})})}}]:[])),w=y.map((function(e){return _({key:y.id},a.split(",").map((function(t){return JSON.parse('{ "'.concat(t,'" : "').concat(e[t],'" }'))})).flat().reduce((function(e,t){return _({},e,t)})),d?{edit:e.id}:{},m?{delete:e.id}:{})}));return(0,n.jsxs)("div",{children:[g&&(0,n.jsxs)("div",{children:[f,b]}),(0,n.jsx)(c.Z,{dataSource:w,columns:x,className:r,pagination:!1}),v&&(0,n.jsx)("a",{href:v,hidden:!0,ref:h})]})}},6362:function(e,t,a){"use strict";a.d(t,{El:function(){return c},r9:function(){return d},hi:function(){return m}});var n=a(5893),r=a(7294),i=a(7122),s=(a(5062),a(9358)),o=a(7033);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],s=!0,o=!1;try{for(a=a.call(e);!(s=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(l){o=!0,r=l}finally{try{s||null==a.return||a.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=e.children,a=e.id,s=e.className,l=e.editPage,u=r.createRef(),c=(0,o.sl)();if(!a)return(0,n.jsx)("p",{children:"You need to set the id prop"});if(!l)return(0,n.jsx)("p",{children:"You need to set the editPage prop"});var d=(0,i.v8)(a,c);return(0,n.jsxs)("div",{className:s,onClick:function(){var e;localStorage.setItem("id",d),null===(e=u.current)||void 0===e||e.click()},children:[t,(0,n.jsx)("a",{href:l,ref:u,hidden:!0})]})}function d(e){var t=e.children,a=e.id,s=e.className,l=e.modal,c=(0,o.sl)(),d=u(r.useState(0),2),m=d[0],_=d[1];if(!a)return(0,n.jsx)("p",{children:"You need to set the id prop"});var p=(0,i.v8)(a,c);return(0,n.jsxs)("div",{className:s,onClick:function(){localStorage.setItem("id",p),_((function(e){return e+1}))},children:[t,(0,n.jsx)(o.c8.Provider,{value:{id:a,count:m,onCancel:function(e){e.stopPropagation()},onOk:function(e){e.stopPropagation()}},children:l})]})}function m(e){var t=(0,r.useContext)(o.c8),a=(0,r.useContext)(o.yV),i=t.count,l=t.onCancelCtx,c=t.onOkCtx,d=e.children,m=e.className,_=e.showModal,p=u(r.useState(!1),2),f=p[0],b=p[1];r.useEffect((function(){i&&b(!0)}),[i]);return(0,n.jsx)(s.Z,{title:"Delete item",className:m,visible:f||_,onCancel:function(t){b(!1),e.onCancel&&l(t),t.stopPropagation()},onOk:function(t){b(!1),e.onOk&&c(t),a.onSubmit({}),t.stopPropagation()},children:d})}},2501:function(e,t,a){"use strict";var n=a(5893),r=(a(7294),a(1202));function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.Z=function(e){var t=e.className,a=e.style,o=e.title,l=s(e,["className","style","title"]);return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:(0,r.AK)("plasmic-default__svg",t,"plasmic-default__svg plasmic_default__all plasmic_default__svg Test__svg___7Yd0G"),role:"img",stroke:"currentcolor",height:"1em",width:"1em",style:a},l,{children:[o&&(0,n.jsx)("title",{children:o}),(0,n.jsx)("path",{d:"M17.25 19.25H6.75a2 2 0 01-2-2V6.75a2 2 0 012-2h10.5a2 2 0 012 2v10.5a2 2 0 01-2 2zm-7.5-5l4.5-4.5m0 4.5l-4.5-4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},9906:function(e,t,a){"use strict";var n=a(5893),r=(a(7294),a(1202));function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.Z=function(e){var t=e.className,a=e.style,o=e.title,l=s(e,["className","style","title"]);return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:(0,r.AK)("plasmic-default__svg",t,"plasmic-default__svg plasmic_default__all plasmic_default__svg Test__svg__h2YSu"),role:"img",height:"1em",width:"1em",style:a},l,{children:[o&&(0,n.jsx)("title",{children:o}),(0,n.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M4.75 19.25l4.25-1 9.293-9.293a1 1 0 000-1.414l-1.836-1.836a1 1 0 00-1.414 0L5.75 15l-1 4.25zm14.5 0h-5.5"})]}))}},9140:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(5893),r=a(7294),i=a(9008),s=a(1202),o=a(7122),l=a(5694),u=a(6362),c=(a(7575),a(8330)),d=a.n(c),m=a(724),_=a.n(m),p=a(9906),f=a(2501);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function g(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=new Array,h=new Array;var y={root:["root","supabaseQuery","supabaseGridCollection","freeBox","supabaseImgField","supabaseEditButton","supabaseTableCollection"],supabaseQuery:["supabaseQuery","supabaseGridCollection","freeBox","supabaseImgField","supabaseEditButton","supabaseTableCollection"],supabaseGridCollection:["supabaseGridCollection","freeBox","supabaseImgField","supabaseEditButton"],freeBox:["freeBox","supabaseImgField","supabaseEditButton"],supabaseImgField:["supabaseImgField"],supabaseEditButton:["supabaseEditButton"],supabaseTableCollection:["supabaseTableCollection"]};function x(e){var t=function(t){var a=(0,s.xf)(t,{name:e,descendantNames:g(y[e]),internalArgPropNames:h,internalVariantPropNames:v});return function(e){e.variants,e.args;var t=e.overrides,a=e.forNode;return(0,s.eh)(r.Fragment,null,(0,s.eh)(i.default,null,(0,s.eh)("meta",{name:"twitter:card",content:"summary"})),(0,s.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,s.eh)("div",{className:d().plasmic_page_wrapper},(0,s.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":a,className:(0,s.AK)(d().all,d().root_reset,d().plasmic_default_styles,d().plasmic_tokens,_().root)},(0,s.eh)(o.A1,{"data-plasmic-name":"supabaseQuery","data-plasmic-override":t.supabaseQuery,className:(0,s.AK)("__wab_instance",_().supabaseQuery),columns:"mountain, location, imageUrl",tableName:"mountains"},(0,s.eh)(l.Qb,{"data-plasmic-name":"supabaseGridCollection","data-plasmic-override":t.supabaseGridCollection,className:(0,s.AK)("__wab_instance",_().supabaseGridCollection),columnGap:16,columns:2,count:void 0,loading:(0,s.eh)(r.Fragment,null,(0,s.eh)(s.Vv,{alt:"",className:(0,s.AK)(_().img__fBvZ),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"auto",loading:"lazy",src:{src:"/plasmic/copy_of_copy_of_supabase/images/loading2.gif",fullWidth:200,fullHeight:200,aspectRatio:void 0}}),(0,s.eh)(s.Vv,{alt:"",className:(0,s.AK)(_().img__l560Z),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:"100%",displayMinHeight:"0",displayMinWidth:"0",displayWidth:"auto",loading:"lazy",src:{src:"/plasmic/copy_of_copy_of_supabase/images/loading.gif",fullWidth:300,fullHeight:300,aspectRatio:void 0}})),rowGap:16,testLoading:!1},(0,s.eh)("div",{"data-plasmic-name":"freeBox","data-plasmic-override":t.freeBox,className:(0,s.AK)(d().all,_().freeBox)},(0,s.eh)(l.Mb,{className:(0,s.AK)("__wab_instance",_().supabaseTextField__imbx5),name:"{{row.mountain}}"}),(0,s.eh)(l.Mb,{className:(0,s.AK)("__wab_instance",_().supabaseTextField___69Ua2),name:"{{row.location}}"}),(0,s.eh)(l.VO,{"data-plasmic-name":"supabaseImgField","data-plasmic-override":t.supabaseImgField,className:(0,s.AK)("__wab_instance",_().supabaseImgField),url:"{{row.imageUrl}}"}),(0,s.eh)(u.El,{"data-plasmic-name":"supabaseEditButton","data-plasmic-override":t.supabaseEditButton,className:(0,s.AK)("__wab_instance",_().supabaseEditButton),editPage:"/mountain/edit",id:"{{row.id}}"},(0,s.eh)(p.Z,{className:(0,s.AK)(d().all,_().svg__z4Ib),role:"img"})),(0,s.eh)(u.r9,{className:(0,s.AK)("__wab_instance",_().supabaseDeleteButton__vI2ZB),id:"{{row.id}}",modal:(0,s.eh)(o.el,{className:(0,s.AK)("__wab_instance",_().supabaseMutation__gRVvJ),filters:[{name:"eq",args:[{column:"id",value:"{{row.id}}"}]}],method:"delete",redirectOnSuccess:"/mountain",tableName:"mountains"},(0,s.eh)(u.hi,{className:(0,s.AK)("__wab_instance",_().supabaseModal__vW6WP),showModal:!1},(0,s.eh)(l.Mb,{className:(0,s.AK)("__wab_instance",_().supabaseTextField__vOlDs),name:"{{row.mountain}}"})))},(0,s.eh)(f.Z,{className:(0,s.AK)(d().all,_().svg__sToBu),role:"img"})))),(0,s.eh)(l.BD,{"data-plasmic-name":"supabaseTableCollection","data-plasmic-override":t.supabaseTableCollection,canDelete:!0,canEdit:!0,className:(0,s.AK)("__wab_instance",_().supabaseTableCollection),columns:"mountain,location,imageUrl",deleteSlot:(0,s.eh)(u.r9,{className:(0,s.AK)("__wab_instance",_().supabaseDeleteButton__bu3Uj),id:"{{row.id}}",modal:(0,s.eh)(o.el,{className:(0,s.AK)("__wab_instance",_().supabaseMutation__z0AQk),filters:[{name:"eq",args:[{column:"id",value:"{{row.id}}"}]}],method:"delete",redirectOnSuccess:"/mountain",tableName:"mountains"},(0,s.eh)(u.hi,{className:(0,s.AK)("__wab_instance",_().supabaseModal___1Pu0),showModal:!1},(0,s.eh)(l.Mb,{className:(0,s.AK)("__wab_instance",_().supabaseTextField___3Dry),name:"{{row.mountain}}"})))},(0,s.eh)(f.Z,{className:(0,s.AK)(d().all,_().svg___5SMn),role:"img"})),editSlot:(0,s.eh)(p.Z,{className:(0,s.AK)(d().all,_().svg__i25Be),role:"img"}),loading:"Loading..."})))))}({variants:a.variants,args:a.args,overrides:a.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicMountain":"PlasmicMountain.".concat(e),t}var w=Object.assign(x("root"),{supabaseQuery:x("supabaseQuery"),supabaseGridCollection:x("supabaseGridCollection"),freeBox:x("freeBox"),supabaseImgField:x("supabaseImgField"),supabaseEditButton:x("supabaseEditButton"),supabaseTableCollection:x("supabaseTableCollection"),internalVariantProps:v,internalArgProps:h});var j=function(){return(0,n.jsx)(w,{})}},724:function(e){e.exports={root:"PlasmicMountain_root__AYng0",supabaseQuery:"PlasmicMountain_supabaseQuery__aOYNb",supabaseGridCollection:"PlasmicMountain_supabaseGridCollection__tYHwi",freeBox:"PlasmicMountain_freeBox__YYRZl",supabaseTextField__imbx5:"PlasmicMountain_supabaseTextField__imbx5__sZQZP",supabaseTextField___69Ua2:"PlasmicMountain_supabaseTextField___69Ua2__JwBRx",supabaseImgField:"PlasmicMountain_supabaseImgField__F9O4K",supabaseEditButton:"PlasmicMountain_supabaseEditButton__VRlJY",svg__z4Ib:"PlasmicMountain_svg__z4Ib__4IaXn",supabaseDeleteButton__vI2ZB:"PlasmicMountain_supabaseDeleteButton__vI2ZB__t7iK8",svg__sToBu:"PlasmicMountain_svg__sToBu__er8T8",supabaseTextField__vOlDs:"PlasmicMountain_supabaseTextField__vOlDs__TBqaz",img__fBvZ:"PlasmicMountain_img__fBvZ__xkMPm","__wab_img-spacer":"PlasmicMountain___wab_img-spacer__zRcKp",img__l560Z:"PlasmicMountain_img__l560Z__Elbos",supabaseTableCollection:"PlasmicMountain_supabaseTableCollection__1TsfU",svg__i25Be:"PlasmicMountain_svg__i25Be__KLsKm",supabaseDeleteButton__bu3Uj:"PlasmicMountain_supabaseDeleteButton__bu3Uj__KS233",svg___5SMn:"PlasmicMountain_svg___5SMn__3v_TH",supabaseTextField___3Dry:"PlasmicMountain_supabaseTextField___3Dry__jdItj"}}},function(e){e.O(0,[528,662,41,778,727,774,888,179],(function(){return t=6275,e(e.s=t);var t}));var t=e.O();_N_E=t}]);