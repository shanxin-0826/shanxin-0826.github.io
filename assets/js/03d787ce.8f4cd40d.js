"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,c={unversionedId:"Node.js/async\u548cawait",id:"Node.js/async\u548cawait",title:"async\u548cawait",description:"async",source:"@site/docs/Node.js/async\u548cawait.md",sourceDirName:"Node.js",slug:"/Node.js/async\u548cawait",permalink:"/docs/Node.js/async\u548cawait",draft:!1,editUrl:"https://shanxin-0826.github.io/docs/Node.js/async\u548cawait.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Promise",permalink:"/docs/Node.js/Promise"},next:{title:"express",permalink:"/docs/Node.js/express"}},s={},l=[{value:"async",id:"async",level:2},{value:"await",id:"await",level:2},{value:"async\u548cawait",id:"async\u548cawait",level:2}],p={toc:l},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"async"},"async"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.\u901a\u8fc7async\u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u5f02\u6b65\u51fd\u6570;\n\n2.\u901a\u8fc7async\u53ef\u4ee5\u6765\u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570;\n\n\u5f02\u6b65\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u81ea\u52a8\u5c01\u88c5\u5230\u4e00\u4e2aPromise\u4e2d\u8fd4\u56de;\n\n3.\u5728async\u58f0\u660e\u7684\u5f02\u6b65\u51fd\u6570\u4e2d\u53ef\u4ee5\u4f7f\u7528await\u5173\u952e\u5b57\u6765\u8c03\u7528\u5f02\u6b65\u51fd\u6570;\n")),(0,a.kt)("h2",{id:"await"},"await"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.Promise\u89e3\u51b3\u4e86\u5f02\u6b65\u8c03\u7528\u4e2d\u56de\u8c03\u51fd\u6570\u7684\u95ee\u9898;\n\n\u867d\u7136\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528\u89e3\u51b3\u4e86\u56de\u8c03\u5730\u72f1;\n\n\u4f46\u662f\u94fe\u5f0f\u8c03\u7528\u592a\u591a\u4ee5\u540e\u8fd8\u662f\u4e0d\u597d\u770b;\n\n\u6211\u4eec\u60f3\u4ee5\u540c\u6b65\u7684\u65b9\u5f0f\u53bb\u8c03\u7528\u5f02\u6b65\u7684\u4ee3\u7801;\n\n2.\u5f53\u6211\u4eec\u901a\u8fc7await\u53bb\u8c03\u7528\u5f02\u6b65\u51fd\u6570\u65f6\uff0c\u5b83\u4f1a\u6682\u505c\u4ee3\u7801\u7684\u8fd0\u884c;\n\n\u76f4\u5230\u5f02\u6b65\u4ee3\u7801\u6267\u884c\u6709\u7ed3\u679c\u65f6\uff0c\u624d\u4f1a\u5c06\u7ed3\u679c\u8fd4\u56de;\n\n3.\u6ce8\u610f\uff1aawait\u53ea\u80fd\u7528\u4e8easync\u58f0\u660e\u7684\u5f02\u6b65\u51fd\u6570\u4e2d;\n\n\u6216es\u6a21\u5757\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4e2d;\n\n4.await\u963b\u585e\u7684\u53ea\u662f\u5f02\u6b65\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5916\u90e8\u4ee3\u7801;\n\n5.\u901a\u8fc7await\u8c03\u7528\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u9700\u8981\u901a\u8fc7try-catch\u6765\u5904\u7406\u5f02\u5e38;\n")),(0,a.kt)("h2",{id:"async\u548cawait"},"async\u548cawait"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.\u5982\u679casync\u58f0\u660e\u7684\u51fd\u6570\u4e2d\u6ca1\u6709\u5199await\uff0c\u90a3\u4e48\u5b83\u91cc\u8fb9\u5c31\u4f1a\u4f9d\u6b21\u6267\u884c;\n\n2.\u5f53\u6211\u4eec\u4f7f\u7528await\u8c03\u7528\u51fd\u6570\u540e\uff0c\u5f53\u524d\u51fd\u6570\u540e\u8fb9\u7684\u6240\u6709\u4ee3\u7801;\n\n\u4f1a\u5728\u5f53\u524d\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u88ab\u653e\u5165\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e2d;\n")))}y.isMDXComponent=!0}}]);