"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[155],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=n,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?o.createElement(m,i(i({ref:r},p),{},{components:t})):o.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},551:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:1},i="Add Proxy",l={unversionedId:"configuration/addProxy",id:"configuration/addProxy",title:"Add Proxy",description:"Add proxy manually or import proxy form clash config.",source:"@site/docs/configuration/addProxy.md",sourceDirName:"configuration",slug:"/configuration/addProxy",permalink:"/lux-docs/docs/configuration/addProxy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/addProxy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/lux-docs/docs/category/configuration"},next:{title:"Dns",permalink:"/lux-docs/docs/configuration/dns"}},c={},u=[{value:"Import from clash config",id:"import-from-clash-config",level:2},{value:"Add proxy manually",id:"add-proxy-manually",level:2}],p={toc:u},d="wrapper";function s(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-proxy"},"Add Proxy"),(0,n.kt)("p",null,"Add proxy manually or import proxy form clash config."),(0,n.kt)("h2",{id:"import-from-clash-config"},"Import from clash config"),(0,n.kt)("p",null,"There are 2 ways to use clash config."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Import it from your clipboard."),(0,n.kt)("li",{parentName:"ul"},"Fetch it from clash yaml url.")),(0,n.kt)("h2",{id:"add-proxy-manually"},"Add proxy manually"),(0,n.kt)("p",null,"Currently, lux support editing 3 types of proxy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Shadowsocks"),(0,n.kt)("li",{parentName:"ul"},"Http"),(0,n.kt)("li",{parentName:"ul"},"Socks5")))}s.isMDXComponent=!0}}]);