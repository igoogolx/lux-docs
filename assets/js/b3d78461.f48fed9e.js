"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[630],{1375:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"configuration/networkStack","title":"Network Stack","description":"When it is tun mode, lux run at the network layer. That\'s where network stack works.","source":"@site/docs/configuration/networkStack.md","sourceDirName":"configuration","slug":"/configuration/networkStack","permalink":"/lux-docs/docs/configuration/networkStack","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration/networkStack.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Auto Mode","permalink":"/lux-docs/docs/configuration/autoMode"},"next":{"title":"Troubleshooting","permalink":"/lux-docs/docs/troubleshooting"}}');var o=n(4848),s=n(8453);const c={sidebar_position:5},i="Network Stack",a={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"network-stack",children:"Network Stack"})}),"\n",(0,o.jsx)(e.p,{children:"When it is tun mode, lux run at the network layer. That's where network stack works."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sh",children:"tun --\x3e network stack --\x3e sys socket --\x3e internet\n"})}),"\n",(0,o.jsx)(e.p,{children:"There are two supported network stacks."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Stack"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"system"}),(0,o.jsx)(e.td,{children:"Perform L3 to L4 translation using the system network stack"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"gviosr"}),(0,o.jsxs)(e.td,{children:["Perform L3 to L4 translation using ",(0,o.jsx)(e.a,{href:"https://github.com/google/gvisor",children:"gVisor"}),"'s virtual network stack"]})]})]})]})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function c(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);