"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[4895],{3418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"Lux can\'t keep connected when os goes to sleep.","source":"@site/docs/troubleshooting.mdx","sourceDirName":".","slug":"/troubleshooting","permalink":"/lux-docs/docs/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"FAQ","permalink":"/lux-docs/docs/faq"}}');var o=t(4848),l=t(8453),r=t(6813);const i={},c="Troubleshooting",a={},h=[{value:"Lux can&#39;t keep connected when os goes to sleep.",id:"lux-cant-keep-connected-when-os-goes-to-sleep",level:2},{value:"Lux can&#39;t be installed on macOS.",id:"lux-cant-be-installed-on-macos",level:2},{value:"Can&#39;t connect to the internet after using lux?",id:"cant-connect-to-the-internet-after-using-lux",level:2},{value:"Step1: Kill the lux_core process",id:"step1-kill-the-lux_core-process",level:3},{value:"Step2: Restore system setting",id:"step2-restore-system-setting",level:3},{value:"Step3: Restart your device",id:"step3-restart-your-device",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,o.jsx)(n.h2,{id:"lux-cant-keep-connected-when-os-goes-to-sleep",children:"Lux can't keep connected when os goes to sleep."}),"\n",(0,o.jsx)(n.p,{children:"If lux keep connected, when os wakes up, network will be unavailable on macOS and memory usage will be huge on Windows.\nThe issue is still under investigation.\nSo, it's better to disconnect it and reconnect it when os wakes up."}),"\n",(0,o.jsx)(n.h2,{id:"lux-cant-be-installed-on-macos",children:"Lux can't be installed on macOS."}),"\n",(0,o.jsx)("img",{src:(0,r.Ay)("/img/pages/not_verified_on_macOS.png"),style:{width:"360px"},alt:"not verified on macOS screenshot"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'"Lux" can\u2019t be opened because the developer cannot be verified.'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click the Cancel button, then go to the Settings -> Privacy and Security page, click the Still Open button, and then click the Open button in the pop-up window.\nAfter that, there will be no more pop-up warnings when opening Lux. \ud83c\udf89"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If you cannot find the above options in Privacy & Security, or get error prompts such as broken files with Apple Silicon machines.\nOpen Terminal.app and enter the following command (you may need to enter a password halfway through), then restart Lux:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:" sudo xattr -r -d com.apple.quarantine /Applications/Lux.app\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"cant-connect-to-the-internet-after-using-lux",children:"Can't connect to the internet after using lux?"}),"\n",(0,o.jsx)(n.h3,{id:"step1-kill-the-lux_core-process",children:"Step1: Kill the lux_core process"}),"\n",(0,o.jsx)(n.p,{children:"Actually, lux_core is the real program to set proxy. Normally, lux_core process will be killed after turning off lux.\nHowever, in some cases, the process might be still alive. If this happens, you need to kill it manually."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MacOS: through ",(0,o.jsx)(n.a,{href:"https://support.apple.com/guide/activity-monitor/quit-a-process-actmntr1002/mac",children:"Quit process in Activity Monitor"})," or by executing the following command lines."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sudo killall lux_core\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Windows: through ",(0,o.jsx)(n.a,{href:"https://support.lenovo.com/us/en/solutions/ht515301-how-to-use-task-manager-to-stop-or-end-processes-windows-10-and-11",children:"Quit process in Task Manager"})," or by executing the following command lines as ",(0,o.jsx)(n.strong,{children:"administrator"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"taskkill /IM lux_core.exe /F\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step2-restore-system-setting",children:"Step2: Restore system setting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Tun mode(",(0,o.jsx)(n.strong,{children:"macOS-only"}),")","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["When it's tun mode, lux will modify the system DNS to 10.255.0.2. Normally, DNS will be restored after turning off lux.\nHowever, in some cases, the DNS might not be restored successfully. If this happens, you need to restore it manually.\nThere are two ways to restore the DNS: through ",(0,o.jsx)(n.a,{href:"https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac",children:"System Settings"}),"\nor by executing the following command lines."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"networksetup -setdnsservers Wi-Fi empty\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["System proxy mode","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When it's System Proxy Mode, lux will modify the system proxy setting. Normally, all setting will be restored after turning off lux.\nHowever, in some cases, the setting might not be restored successfully. If this happens, you need to restore it manually.\nThere are two ways to restore system proxy setting:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["MacOS: through ",(0,o.jsx)(n.a,{href:"https://support.apple.com/guide/mac-help/change-proxy-settings-on-mac-mchlp2591/mac",children:"Change proxy settings"})," or by executing the following command lines."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Windows: Settings -> Network & Internet -> Proxy -> Manual proxy setup -> Off"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"#macOS-only\nnetworksetup -setwebproxystate Wi-Fi off\n"})}),"\n",(0,o.jsx)(n.h3,{id:"step3-restart-your-device",children:"Step3: Restart your device"})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(6540);const o={},l=s.createContext(o);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);