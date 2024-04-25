"use strict";(self.webpackChunkaap_felles_frontend=self.webpackChunkaap_felles_frontend||[]).push([[991],{"./node_modules/@navikt/ds-react/esm/typography/BodyShort.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@navikt/ds-react/esm/typography/util.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_a,ref)=>{var{className,size="medium",as:Component="p",spacing,truncate,weight="regular",align,visuallyHidden,textColor}=_a,rest=__rest(_a,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,Object.assign({},rest,{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(className,"navds-body-short",`navds-body-short--${size}`,(0,_util__WEBPACK_IMPORTED_MODULE_2__.x)({spacing,truncate,weight,align,visuallyHidden,textColor}))}))}))},"./node_modules/@navikt/ds-react/esm/typography/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>typoClassNames});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const typoClassNames=props=>(0,clsx__WEBPACK_IMPORTED_MODULE_0__.A)({"navds-typo--spacing":props.spacing,"navds-typo--truncate":props.truncate,"navds-typo--semibold":"semibold"===props.weight,[`navds-typo--align-${props.align}`]:props.align,[`navds-typo--color-${props.textColor}`]:props.textColor,"navds-typo--visually-hidden":props.visuallyHidden,"navds-typo--uppercase":props.uppercase})},"./node_modules/@navikt/ds-react/esm/util/hooks/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");let globalId=0;const maybeReactUseId=react__WEBPACK_IMPORTED_MODULE_0__.useId;function useId(idOverride){var _a;if(void 0!==maybeReactUseId){const reactId=maybeReactUseId();return null!=idOverride?idOverride:reactId.replace(/(:)/g,"")}return null!==(_a=function useGlobalId(idOverride){const[defaultId,setDefaultId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(idOverride),id=idOverride||defaultId;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{null==defaultId&&(globalId+=1,setDefaultId(`aksel-id-${globalId}`))}),[defaultId]),id}(idOverride))&&void 0!==_a?_a:""}},"./packages/aap-felles-react/src/LucaGuidePanel/LucaGuidePanel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LucaGuidePanel_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),BodyShort=__webpack_require__("./node_modules/@navikt/ds-react/esm/typography/BodyShort.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),useId=__webpack_require__("./node_modules/@navikt/ds-react/esm/util/hooks/useId.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const DefaultIllustration=_a=>{var{title,titleId:_titleId}=_a,props=__rest(_a,["title","titleId"]);let titleId=(0,useId.B)();return titleId=title?_titleId||"title-"+titleId:void 0,react.createElement("svg",Object.assign({width:"56",height:"85",viewBox:"0 0 56 85",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":"NAV veileder illustrasjon",focusable:!1,role:"img","aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M43.1888 40.4308C41.795 44.9808 39.0663 48.7576 35.5693 51.069L35.7484 53.0952L35.7474 53.1777L33.857 69.8797H21.8679L21.8181 69.5289L19.5004 53.1489L19.5862 51.1002C16.0715 48.795 13.3274 45.0119 11.9257 40.4499C11.8781 40.4544 11.83 40.4566 11.7812 40.4566C10.8745 40.4566 10.1562 39.6595 10.1562 38.6939V33.2298C10.1562 32.5825 10.479 32.0106 10.9648 31.7039C11.7229 21.5028 18.8443 13.4855 27.554 13.4855C36.2401 13.4855 43.3472 21.4596 44.1376 31.6211C44.7049 31.8986 45.0937 32.5184 45.0937 33.2298V38.6939C45.0937 39.66 44.3765 40.4566 43.4687 40.4566C43.3731 40.4566 43.2796 40.4478 43.1888 40.4308Z",fill:"#F7F7F7"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M35.1471 51.6345C35.0789 55.2819 31.7373 59.0239 27.625 59.0239C23.4949 59.0239 20.142 55.2493 20.1022 51.5869C17.9622 52.1325 14.6956 53.7781 11.9995 56.5281C9.38852 59.1912 7.3125 63.1941 7.3125 66.2993V85.0001H47.9375V66.2993C47.9375 63.1878 45.8167 59.178 43.1575 56.5119C40.4983 53.8458 37.3007 52.2225 35.1471 51.6345Z",fill:"#005B82"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.9671 51.7134C17.9959 52.4333 14.6891 54.0068 12.1875 56.3964C4.875 54.7595 1.625 50.87 1.625 50.87C1.625 50.87 8.36213 44.2596 8.3662 32.698V32.6857C8.3662 19.1478 15.6319 9.80762 27.6022 9.80762C39.5742 9.80762 46.8399 19.1478 46.8399 32.6857H46.883C46.883 44.2555 53.625 50.87 53.625 50.87C53.625 50.87 50.375 54.7595 43.0625 56.3942L43.0515 56.3964C40.6353 54.1853 37.1309 52.4799 35.2243 51.7589L35.2265 51.7582L35.1508 50.9012L35.1917 50.8302C38.7891 48.5155 41.5804 44.6159 42.9262 39.904C43.0909 39.9961 43.277 40.048 43.4739 40.048C44.1476 40.048 44.6928 39.4431 44.6928 38.6939V33.2298C44.6928 32.5887 44.2936 32.0528 43.7564 31.9114C43.7559 31.904 43.7554 31.8966 43.7549 31.8892C26.7466 33.7984 20.6199 22.068 20.117 22.0672C20.117 22.0672 14.4686 26.1538 11.769 31.0124C11.769 31.0124 11.3576 31.9296 11.3556 31.9605C10.8934 32.1527 10.5637 32.648 10.5637 33.2298V38.6939C10.5637 39.4431 11.1103 40.048 11.7826 40.048C11.9316 40.048 12.0743 40.0184 12.2062 39.9642C13.5668 44.6785 16.3759 48.5738 19.9901 50.8732L20.0035 50.9012L19.9695 51.7134H19.9671Z",fill:"#F25C5C"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.8159 35.8563C20.766 35.9417 20.4722 34.2696 20.7885 33.1776C20.848 32.9706 21.1956 32.0283 21.8109 32.0283C22.4254 32.0283 22.6968 32.5434 22.7345 32.632C23.1865 33.6965 22.9645 35.7622 21.8159 35.8563",fill:"#262626"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.9927 35.8563C35.0425 35.9417 35.3364 34.2696 35.0201 33.1776C34.9606 32.9706 34.613 32.0283 33.9977 32.0283C33.3832 32.0283 33.1118 32.5434 33.0741 32.632C32.6221 33.6965 32.8441 35.7622 33.9927 35.8563",fill:"#262626"}),react.createElement("path",{d:"M28.2935 37.5041C28.9213 37.396 29.3501 37.4638 29.5036 37.6748C30.0833 38.4721 29.8979 39.3156 28.9035 40.0081C28.3806 40.372 27.661 40.5001 27.28 40.3114C27.0937 40.2191 26.8758 40.3133 26.7934 40.5218C26.7109 40.7304 26.7951 40.9742 26.9814 41.0665C27.6111 41.3784 28.5794 41.206 29.2931 40.7092C30.6445 39.7682 30.9537 38.3611 30.0758 37.1534C29.7042 36.643 29.0465 36.5389 28.1812 36.688C27.9799 36.7227 27.8418 36.9335 27.8728 37.1589C27.9038 37.3842 28.0921 37.5388 28.2935 37.5041Z",fill:"#262626"}),react.createElement("path",{d:"M32.8337 42.9837C32.7968 43.0623 32.7122 43.2128 32.5763 43.411C32.3463 43.7465 32.0574 44.0829 31.7066 44.3966C30.6611 45.3314 29.3002 45.872 27.5683 45.8225C25.8795 45.7743 24.5247 45.2421 23.4626 44.3839C23.0726 44.0688 22.7506 43.7314 22.4933 43.395C22.3415 43.1967 22.2468 43.0463 22.2053 42.9679C22.1056 42.7794 21.8606 42.7018 21.6581 42.7946C21.4555 42.8873 21.3721 43.1153 21.4718 43.3039C21.5318 43.4174 21.6487 43.6029 21.8273 43.8363C22.1206 44.2196 22.4852 44.6018 22.9266 44.9584C24.1256 45.9272 25.6579 46.5292 27.5432 46.583C29.5064 46.6391 31.0759 46.0156 32.273 44.9453C32.6733 44.5874 33.0023 44.2042 33.2656 43.8202C33.4257 43.5867 33.5298 43.4014 33.5829 43.2881C33.6733 43.0955 33.5788 42.8713 33.3719 42.7872C33.165 42.7032 32.924 42.7911 32.8337 42.9837Z",fill:"#262626"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M41.8629 70.5H30.8865C30.3966 70.5 30 70.0974 30 69.6001V63.609C30 63.1117 30.3966 62.7084 30.8865 62.7084H41.8629C42.3527 62.7084 42.75 63.1117 42.75 63.609V69.6001C42.75 70.0974 42.3527 70.5 41.8629 70.5",fill:"white"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.0345 63.9451H35.8971C35.8128 63.9451 35.7449 63.8775 35.7449 63.7937V63.6029C35.7449 63.5197 35.8128 63.4515 35.8971 63.4515H37.0345C37.1188 63.4515 37.1867 63.5197 37.1867 63.6029V63.7937C37.1867 63.8775 37.1188 63.9451 37.0345 63.9451",fill:"#262626"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M36.1365 63.7708H36.7955V62H36.1365V63.7708Z",fill:"#8F8F8F"}),react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M40.5417 65.5H39.6457C39.6457 65.5 39.5839 65.5 39.5621 65.5545L39.0662 67.0725L38.5708 65.5545C38.5489 65.5 38.4868 65.5 38.4868 65.5H36.764C36.7267 65.5 36.6954 65.5311 36.6954 65.5682V66.0837C36.6954 65.6748 36.2603 65.5 36.0055 65.5C35.4349 65.5 35.053 65.8758 34.934 66.4472C34.9276 66.0681 34.8961 65.9323 34.794 65.7932C34.7471 65.7251 34.6793 65.6678 34.6055 65.6204C34.4535 65.5314 34.317 65.5 34.0237 65.5H33.6794C33.6794 65.5 33.6171 65.5 33.5952 65.5545L33.2818 66.331V65.5682C33.2818 65.5311 33.2508 65.5 33.2136 65.5H32.4167C32.4167 65.5 32.3552 65.5 32.3328 65.5545L32.0071 66.362C32.0071 66.362 31.9746 66.4427 32.0489 66.4427H32.3552V67.9813C32.3552 68.0195 32.3853 68.0497 32.4236 68.0497H33.2136C33.2508 68.0497 33.2818 68.0195 33.2818 67.9813V66.4427H33.5898C33.7664 66.4427 33.8039 66.4475 33.8726 66.4796C33.914 66.4952 33.9513 66.5268 33.9716 66.5633C34.0133 66.6417 34.0237 66.7359 34.0237 67.0135V67.9813C34.0237 68.0195 34.0544 68.0497 34.0923 68.0497H34.8494C34.8494 68.0497 34.935 68.0497 34.9688 67.9652L35.1366 67.5505C35.3597 67.863 35.7269 68.0497 36.1833 68.0497H36.283C36.283 68.0497 36.3691 68.0497 36.4032 67.9652L36.6954 67.2415V67.9813C36.6954 68.0195 36.7267 68.0497 36.764 68.0497H37.5368C37.5368 68.0497 37.6221 68.0497 37.6564 67.9652C37.6564 67.9652 37.9655 67.1978 37.9667 67.192H37.9671C37.979 67.1281 37.8983 67.1281 37.8983 67.1281H37.6225V65.8113L38.4904 67.9652C38.5243 68.0497 38.6097 68.0497 38.6097 68.0497H39.5228C39.5228 68.0497 39.6087 68.0497 39.6426 67.9652L40.6048 65.5826C40.6381 65.5 40.5417 65.5 40.5417 65.5V65.5ZM36.6954 67.128H36.1763C35.9696 67.128 35.8015 66.9607 35.8015 66.7538C35.8015 66.5473 35.9696 66.3789 36.1763 66.3789H36.3215C36.5276 66.3789 36.6954 66.5473 36.6954 66.7538V67.128Z",fill:"#C30000"}))};var GuidePanel_rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const guide_panel_GuidePanel=(0,react.forwardRef)(((_a,ref)=>{var{children,className,illustration,poster}=_a,rest=GuidePanel_rest(_a,["children","className","illustration","poster"]);return react.createElement("div",Object.assign({},rest,{ref,className:(0,clsx_m.A)("navds-guide-panel",className,{"navds-guide-panel--poster":!0===poster,"navds-guide-panel--not-poster":!1===poster,"navds-guide-panel--responsive-poster":void 0===poster})}),react.createElement("div",{className:"navds-guide"},null!=illustration?illustration:react.createElement(DefaultIllustration,null)),react.createElement("div",{className:"navds-guide-panel__content"},children))})),Luca=()=>(0,jsx_runtime.jsxs)("svg",{"aria-hidden":!0,xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[(0,jsx_runtime.jsx)("path",{fill:"#F1F1F1",fillRule:"evenodd",d:"M43.831 30.442c-1.06 3.426-3.133 6.27-5.792 8.01l.136 1.526v.062l-1.437 12.576h-9.114l-.038-.264-1.762-12.333.065-1.543c-2.672-1.736-4.758-4.584-5.823-8.02a1.174 1.174 0 01-.11.006c-.69 0-1.235-.6-1.235-1.327V25.02c0-.488.245-.918.614-1.15.577-7.68 5.99-13.717 12.611-13.717 6.603 0 12.006 6.004 12.607 13.655.43.21.727.676.727 1.212v4.114c0 .727-.546 1.327-1.236 1.327-.072 0-.144-.007-.213-.02z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#0056B4",fillRule:"evenodd",d:"M37.718 38.878c-.052 2.746-2.592 5.563-5.718 5.563-3.14 0-5.689-2.842-5.719-5.6-1.627.412-4.11 1.65-6.16 3.721-1.984 2.005-3.562 5.02-3.562 7.357V64H47.44V49.92c0-2.342-1.612-5.361-3.634-7.369-2.021-2.007-4.452-3.23-6.09-3.672z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#BA3A26",fillRule:"evenodd",d:"M41.588 20.349c-.541-.657-1.471-1.909-3.689-3.118 1.513 1.247 2.507 3.61 2.748 4.307-2.47-1.19-3.511-1.869-4.941-2.461-1.405-.582-2.47-1.223-4.57-1.846.409.39.819.806 1.229 1.247.41.44.82 1.064 1.23 1.87-2.226-.848-4.071-1.484-5.534-1.908-2.108-.61-3.075-.586-3.075-.586S22.117 24 19.594 24.081c-.332.155-.565.517-.565.94v4.113c0 .564.416 1.02.927 1.02a.852.852 0 00.322-.063c.843 2.895 2.273 4.986 3.075 6.217 0 0-1.853-1.406-2.792-2.772-1.884-2.74-3.062-5.559-3.385-9.536 0-12.692 7.597-13.115 7.597-13.115S26.333 8 32 8c10.13 0 14.663 7.346 14.823 16 0 5.134-2.7 8.788-4.94 11.184-.595.636-1.236 1.124-1.236 1.124 0-.15.02-.185.159-.39 1.015-1.495 2.055-3.215 2.822-5.873.125.07.266.109.416.109.512 0 .926-.456.926-1.02V25.02c0-.482-.303-.886-.711-.992-.001-.015-.596-.041-1.142-.643-.556-.614-.684-2.014-1.529-3.036z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#262626",fillRule:"evenodd",d:"M27.584 26.997c-.798.065-1.021-1.194-.78-2.016.044-.156.309-.866.776-.866s.674.388.702.455c.344.801.175 2.357-.698 2.427zM36.84 26.997c.799.065 1.022-1.194.781-2.016-.045-.156-.309-.866-.777-.866-.467 0-.673.388-.702.455-.343.801-.175 2.357.698 2.427z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#262626",d:"M32.508 28.239c.477-.082.803-.03.92.128.44.6.3 1.236-.456 1.757-.398.274-.945.37-1.234.228-.142-.07-.308.002-.37.159-.063.157.001.34.143.41.478.235 1.214.105 1.757-.27 1.027-.708 1.262-1.767.595-2.677-.282-.384-.782-.462-1.44-.35-.153.026-.258.185-.235.355.024.17.167.286.32.26zM35.96 32.364c-.028.06-.093.173-.196.322a4.151 4.151 0 01-.661.742c-.795.704-1.83 1.111-3.146 1.074-1.284-.037-2.314-.437-3.121-1.083a4.416 4.416 0 01-.737-.745 2.574 2.574 0 01-.219-.322.323.323 0 00-.416-.13c-.154.07-.217.241-.141.383a3.1 3.1 0 00.27.401c.223.289.5.577.835.845.912.73 2.077 1.183 3.51 1.223 1.492.043 2.685-.427 3.595-1.233.305-.27.555-.558.755-.847.122-.176.2-.315.241-.4.069-.145-.003-.314-.16-.378a.321.321 0 00-.41.148z"}),(0,jsx_runtime.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M43.165 58h-10.33a.84.84 0 01-.835-.847v-5.638c0-.468.373-.848.834-.848h10.331c.461 0 .835.38.835.848v5.638a.84.84 0 01-.835.847z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#262626",fillRule:"evenodd",d:"M38.62 51.83h-1.07a.143.143 0 01-.143-.142v-.18c0-.078.064-.142.143-.142h1.07c.08 0 .144.064.144.143v.18a.143.143 0 01-.144.142z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#6A6A6A",fillRule:"evenodd",d:"M37.775 51.667h.62V50h-.62v1.667z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#C30000",fillRule:"evenodd",d:"M38.127 56.665a2.332 2.332 0 110-4.665 2.332 2.332 0 010 4.665zM34.666 55.35l.477-1.18h.458l-.476 1.18h-.459zM40.55 55.35l.47-1.18h.25l-.47 1.18h-.25zM41.475 55.35l.47-1.18h.133l-.47 1.18h-.133z",clipRule:"evenodd"}),(0,jsx_runtime.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M40.116 54.17h-.414s-.029 0-.039.026l-.23.703-.229-.703c-.01-.025-.039-.025-.039-.025h-.797a.032.032 0 00-.032.032v.238c0-.19-.2-.27-.319-.27-.264 0-.44.174-.496.438-.003-.175-.017-.238-.065-.302a.305.305 0 00-.087-.08c-.07-.042-.133-.056-.269-.056h-.16s-.028 0-.038.025l-.145.36v-.353a.032.032 0 00-.032-.032h-.369s-.028 0-.038.025l-.151.374s-.015.037.02.037h.14v.712c0 .018.015.032.033.032h.365a.032.032 0 00.032-.032v-.712h.142c.082 0 .1.002.131.017a.09.09 0 01.046.039c.02.036.024.08.024.208v.448c0 .018.014.032.032.032h.35s.04 0 .055-.04l.078-.191a.574.574 0 00.484.23h.047s.04 0 .055-.038l.135-.335v.342c0 .018.015.032.032.032h.358s.04 0 .055-.04l.144-.357c.005-.03-.032-.03-.032-.03h-.128v-.609l.402.997c.016.039.055.039.055.039h.423s.04 0 .055-.04l.445-1.102c.016-.038-.029-.038-.029-.038zm-1.78.754h-.24a.173.173 0 110-.346h.067c.096 0 .173.078.173.173v.173z",clipRule:"evenodd"})]});Luca.__docgenInfo={description:"",methods:[],displayName:"Luca"};const LucaGuidePanel=param=>{let{children}=param;return(0,jsx_runtime.jsx)(guide_panel_GuidePanel,{illustration:(0,jsx_runtime.jsx)(Luca,{}),poster:!0,children})};var _Primary_parameters,_Primary_parameters_docs,_Primary_parameters1;LucaGuidePanel.__docgenInfo={description:"",methods:[],displayName:"LucaGuidePanel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const LucaGuidePanel_stories={title:"LucaGuidePanel",component:LucaGuidePanel},Primary=(args=>(0,jsx_runtime.jsx)(LucaGuidePanel,{...args})).bind({});Primary.args={children:(0,jsx_runtime.jsx)(BodyShort.A,{spacing:!0,children:"Dette er tekst som havner inne i Luca"})},Primary.parameters={...Primary.parameters,docs:{...null===(_Primary_parameters=Primary.parameters)||void 0===_Primary_parameters?void 0:_Primary_parameters.docs,source:{originalSource:"args => <LucaGuidePanel {...args} />",...null===(_Primary_parameters1=Primary.parameters)||void 0===_Primary_parameters1||null===(_Primary_parameters_docs=_Primary_parameters1.docs)||void 0===_Primary_parameters_docs?void 0:_Primary_parameters_docs.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);