"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[8070],{5585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"faq","title":"FAQ","description":"What\'s the difference between clash and lux?","source":"@site/docs/faq.md","sourceDirName":".","slug":"/faq","permalink":"/lux-docs/docs/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/faq.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Use With Other VPN","permalink":"/lux-docs/docs/how-to-guides/use-with-other-vpn"}}');var r=t(4848),o=t(8453);const i={sidebar_position:6},a="FAQ",l={},c=[{value:"What&#39;s the difference between clash and lux?",id:"whats-the-difference-between-clash-and-lux",level:3},{value:"Why are elevated privileges necessary (root on macOS and admin on Windows)?",id:"why-are-elevated-privileges-necessary-root-on-macos-and-admin-on-windows",level:3},{value:"Does lux use fake ip?",id:"does-lux-use-fake-ip",level:3},{value:"Can I share my proxy with other devices in LAN?",id:"can-i-share-my-proxy-with-other-devices-in-lan",level:3},{value:"Does lux support secure dns?",id:"does-lux-support-secure-dns",level:3},{value:"Why can\u2019t my macOS connect to the internet after using lux?",id:"why-cant-my-macos-connect-to-the-internet-after-using-lux",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n",(0,r.jsx)(n.h3,{id:"whats-the-difference-between-clash-and-lux",children:"What's the difference between clash and lux?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Lux is built on clash's code. But it's not another GUI client of clash. Clash powers lux and make it support more\nproxy protocols."}),"\n",(0,r.jsx)(n.li,{children:"Lux is easy to start because of built-in proxy rules. Clash is highly customized and needs more configuration manually."}),"\n",(0,r.jsx)(n.li,{children:"Lux is open-sourced fully. However, Clash Premium is close sourced."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"why-are-elevated-privileges-necessary-root-on-macos-and-admin-on-windows",children:"Why are elevated privileges necessary (root on macOS and admin on Windows)?"}),"\n",(0,r.jsx)(n.p,{children:"To intercept network traffic at the kernel level, lux will create the tun device.\nThe tun device is a virtual network interface that allows user-space programs to interact with network stack as if they\nwere traditional network devices.\nLux leverages the tun device functionality to establish a VPN tunnel and route network traffic through it.\nThe tun device requires elevated privileges."}),"\n",(0,r.jsx)(n.h3,{id:"does-lux-use-fake-ip",children:"Does lux use fake ip?"}),"\n",(0,r.jsx)(n.p,{children:"No. Every dns query gets the real ips."}),"\n",(0,r.jsx)(n.h3,{id:"can-i-share-my-proxy-with-other-devices-in-lan",children:"Can I share my proxy with other devices in LAN?"}),"\n",(0,r.jsx)(n.p,{children:"Yes. You can enable a local server which is socks and http remix. Then other devices can connect this server."}),"\n",(0,r.jsx)(n.h3,{id:"does-lux-support-secure-dns",children:"Does lux support secure dns?"}),"\n",(0,r.jsx)(n.p,{children:"Yes. You can set local or remote dns as DoH(Dns-over-Https)."}),"\n",(0,r.jsx)(n.h3,{id:"why-cant-my-macos-connect-to-the-internet-after-using-lux",children:"Why can\u2019t my macOS connect to the internet after using lux?"}),"\n",(0,r.jsxs)(n.p,{children:["When it's tun mode, lux will modify the system DNS to 10.255.0.2. Normally, DNS will be restored after turning off lux.\nHowever, in some cases, the DNS might not be restored successfully. If this happens, you need to restore it manually.\nThere are two ways to restore the DNS: through ",(0,r.jsx)(n.a,{href:"https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac",children:"System Settings"}),"\nor by executing the following command lines."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"networksetup -setdnsservers Wi-Fi empty\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);