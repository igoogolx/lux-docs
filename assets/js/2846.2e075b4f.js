"use strict";(self.webpackChunklux_docs=self.webpackChunklux_docs||[]).push([[2846],{1889:(t,r,e)=>{e.d(r,{m:()=>o});var n=e(992),o=class{constructor(t){this.init=t,this.records=this.init()}static{(0,n.K2)(this,"ImperativeState")}reset(){this.records=this.init()}}},902:(t,r,e)=>{function n(t,r){t.accDescr&&r.setAccDescription?.(t.accDescr),t.accTitle&&r.setAccTitle?.(t.accTitle),t.title&&r.setDiagramTitle?.(t.title)}e.d(r,{S:()=>n}),(0,e(992).K2)(n,"populateCommonDb")},2846:(t,r,e)=>{e.d(r,{diagram:()=>ft});var n=e(902),o=e(1889),a=e(6853),c=e(992),s=e(8731),i=e(7),h={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},d=c.UI.gitGraph,m=(0,c.K2)((()=>(0,a.$t)({...d,...(0,c.zj)().gitGraph})),"getConfig"),$=new o.m((()=>{const t=m(),r=t.mainBranchName,e=t.mainBranchOrder;return{mainBranchName:r,commits:new Map,head:null,branchConfig:new Map([[r,{name:r,order:e}]]),branches:new Map([[r,null]]),currBranch:r,direction:"LR",seq:0,options:{}}}));function l(){return(0,a.yT)({length:7})}function y(t,r){const e=Object.create(null);return t.reduce(((t,n)=>{const o=r(n);return e[o]||(e[o]=!0,t.push(n)),t}),[])}(0,c.K2)(l,"getID"),(0,c.K2)(y,"uniqBy");var g=(0,c.K2)((function(t){$.records.direction=t}),"setDirection"),p=(0,c.K2)((function(t){c.Rm.debug("options str",t),t=t?.trim(),t=t||"{}";try{$.records.options=JSON.parse(t)}catch(r){c.Rm.error("error while parsing gitGraph options",r.message)}}),"setOptions"),x=(0,c.K2)((function(){return $.records.options}),"getOptions"),f=(0,c.K2)((function(t){let r=t.msg,e=t.id;const n=t.type;let o=t.tags;c.Rm.info("commit",r,e,n,o),c.Rm.debug("Entering commit:",r,e,n,o);const a=m();e=c.Y2.sanitizeText(e,a),r=c.Y2.sanitizeText(r,a),o=o?.map((t=>c.Y2.sanitizeText(t,a)));const s={id:e||$.records.seq+"-"+l(),message:r,seq:$.records.seq++,type:n??h.NORMAL,tags:o??[],parents:null==$.records.head?[]:[$.records.head.id],branch:$.records.currBranch};$.records.head=s,c.Rm.info("main branch",a.mainBranchName),$.records.commits.set(s.id,s),$.records.branches.set($.records.currBranch,s.id),c.Rm.debug("in pushCommit "+s.id)}),"commit"),u=(0,c.K2)((function(t){let r=t.name;const e=t.order;if(r=c.Y2.sanitizeText(r,m()),$.records.branches.has(r))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);$.records.branches.set(r,null!=$.records.head?$.records.head.id:null),$.records.branchConfig.set(r,{name:r,order:e}),B(r),c.Rm.debug("in createBranch")}),"branch"),b=(0,c.K2)((t=>{let r=t.branch,e=t.id;const n=t.type,o=t.tags,a=m();r=c.Y2.sanitizeText(r,a),e&&(e=c.Y2.sanitizeText(e,a));const s=$.records.branches.get($.records.currBranch),i=$.records.branches.get(r),d=s?$.records.commits.get(s):void 0,y=i?$.records.commits.get(i):void 0;if(d&&y&&d.branch===r)throw new Error(`Cannot merge branch '${r}' into itself.`);if($.records.currBranch===r){const t=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw t.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},t}if(void 0===d||!d){const t=new Error(`Incorrect usage of "merge". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["commit"]},t}if(!$.records.branches.has(r)){const t=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw t.hash={text:`merge ${r}`,token:`merge ${r}`,expected:[`branch ${r}`]},t}if(void 0===y||!y){const t=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw t.hash={text:`merge ${r}`,token:`merge ${r}`,expected:['"commit"']},t}if(d===y){const t=new Error('Incorrect usage of "merge". Both branches have same head');throw t.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]},t}if(e&&$.records.commits.has(e)){const t=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw t.hash={text:`merge ${r} ${e} ${n} ${o?.join(" ")}`,token:`merge ${r} ${e} ${n} ${o?.join(" ")}`,expected:[`merge ${r} ${e}_UNIQUE ${n} ${o?.join(" ")}`]},t}const g=i||"",p={id:e||`${$.records.seq}-${l()}`,message:`merged branch ${r} into ${$.records.currBranch}`,seq:$.records.seq++,parents:null==$.records.head?[]:[$.records.head.id,g],branch:$.records.currBranch,type:h.MERGE,customType:n,customId:!!e,tags:o??[]};$.records.head=p,$.records.commits.set(p.id,p),$.records.branches.set($.records.currBranch,p.id),c.Rm.debug($.records.branches),c.Rm.debug("in mergeBranch")}),"merge"),w=(0,c.K2)((function(t){let r=t.id,e=t.targetId,n=t.tags,o=t.parent;c.Rm.debug("Entering cherryPick:",r,e,n);const a=m();if(r=c.Y2.sanitizeText(r,a),e=c.Y2.sanitizeText(e,a),n=n?.map((t=>c.Y2.sanitizeText(t,a))),o=c.Y2.sanitizeText(o,a),!r||!$.records.commits.has(r)){const t=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw t.hash={text:`cherryPick ${r} ${e}`,token:`cherryPick ${r} ${e}`,expected:["cherry-pick abc"]},t}const s=$.records.commits.get(r);if(void 0===s||!s)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(o&&(!Array.isArray(s.parents)||!s.parents.includes(o))){throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.")}const i=s.branch;if(s.type===h.MERGE&&!o){throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.")}if(!e||!$.records.commits.has(e)){if(i===$.records.currBranch){const t=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw t.hash={text:`cherryPick ${r} ${e}`,token:`cherryPick ${r} ${e}`,expected:["cherry-pick abc"]},t}const t=$.records.branches.get($.records.currBranch);if(void 0===t||!t){const t=new Error(`Incorrect usage of "cherry-pick". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`cherryPick ${r} ${e}`,token:`cherryPick ${r} ${e}`,expected:["cherry-pick abc"]},t}const a=$.records.commits.get(t);if(void 0===a||!a){const t=new Error(`Incorrect usage of "cherry-pick". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`cherryPick ${r} ${e}`,token:`cherryPick ${r} ${e}`,expected:["cherry-pick abc"]},t}const d={id:$.records.seq+"-"+l(),message:`cherry-picked ${s?.message} into ${$.records.currBranch}`,seq:$.records.seq++,parents:null==$.records.head?[]:[$.records.head.id,s.id],branch:$.records.currBranch,type:h.CHERRY_PICK,tags:n?n.filter(Boolean):[`cherry-pick:${s.id}${s.type===h.MERGE?`|parent:${o}`:""}`]};$.records.head=d,$.records.commits.set(d.id,d),$.records.branches.set($.records.currBranch,d.id),c.Rm.debug($.records.branches),c.Rm.debug("in cherryPick")}}),"cherryPick"),B=(0,c.K2)((function(t){if(t=c.Y2.sanitizeText(t,m()),!$.records.branches.has(t)){const r=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw r.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},r}{$.records.currBranch=t;const r=$.records.branches.get($.records.currBranch);$.records.head=void 0!==r&&r?$.records.commits.get(r)??null:null}}),"checkout");function E(t,r,e){const n=t.indexOf(r);-1===n?t.push(e):t.splice(n,1,e)}function k(t){const r=t.reduce(((t,r)=>t.seq>r.seq?t:r),t[0]);let e="";t.forEach((function(t){e+=t===r?"\t*":"\t|"}));const n=[e,r.id,r.seq];for(const o in $.records.branches)$.records.branches.get(o)===r.id&&n.push(o);if(c.Rm.debug(n.join(" ")),r.parents&&2==r.parents.length&&r.parents[0]&&r.parents[1]){const e=$.records.commits.get(r.parents[0]);E(t,r,e),r.parents[1]&&t.push($.records.commits.get(r.parents[1]))}else{if(0==r.parents.length)return;if(r.parents[0]){const e=$.records.commits.get(r.parents[0]);E(t,r,e)}}k(t=y(t,(t=>t.id)))}(0,c.K2)(E,"upsert"),(0,c.K2)(k,"prettyPrintCommitHistory");var C=(0,c.K2)((function(){c.Rm.debug($.records.commits);k([R()[0]])}),"prettyPrint"),T=(0,c.K2)((function(){$.reset(),(0,c.IU)()}),"clear"),L=(0,c.K2)((function(){return[...$.records.branchConfig.values()].map(((t,r)=>null!==t.order&&void 0!==t.order?t:{...t,order:parseFloat(`0.${r}`)})).sort(((t,r)=>(t.order??0)-(r.order??0))).map((({name:t})=>({name:t})))}),"getBranchesAsObjArray"),K=(0,c.K2)((function(){return $.records.branches}),"getBranches"),M=(0,c.K2)((function(){return $.records.commits}),"getCommits"),R=(0,c.K2)((function(){const t=[...$.records.commits.values()];return t.forEach((function(t){c.Rm.debug(t.id)})),t.sort(((t,r)=>t.seq-r.seq)),t}),"getCommitsArray"),v={commitType:h,getConfig:m,setDirection:g,setOptions:p,getOptions:x,commit:f,branch:u,merge:b,cherryPick:w,checkout:B,prettyPrint:C,clear:T,getBranchesAsObjArray:L,getBranches:K,getCommits:M,getCommitsArray:R,getCurrentBranch:(0,c.K2)((function(){return $.records.currBranch}),"getCurrentBranch"),getDirection:(0,c.K2)((function(){return $.records.direction}),"getDirection"),getHead:(0,c.K2)((function(){return $.records.head}),"getHead"),setAccTitle:c.SV,getAccTitle:c.iN,getAccDescription:c.m7,setAccDescription:c.EI,setDiagramTitle:c.ke,getDiagramTitle:c.ab},P=(0,c.K2)(((t,r)=>{(0,n.S)(t,r),t.dir&&r.setDirection(t.dir);for(const e of t.statements)I(e,r)}),"populate"),I=(0,c.K2)(((t,r)=>{const e={Commit:(0,c.K2)((t=>r.commit(A(t))),"Commit"),Branch:(0,c.K2)((t=>r.branch(G(t))),"Branch"),Merge:(0,c.K2)((t=>r.merge(O(t))),"Merge"),Checkout:(0,c.K2)((t=>r.checkout(q(t))),"Checkout"),CherryPicking:(0,c.K2)((t=>r.cherryPick(z(t))),"CherryPicking")}[t.$type];e?e(t):c.Rm.error(`Unknown statement type: ${t.$type}`)}),"parseStatement"),A=(0,c.K2)((t=>({id:t.id,msg:t.message??"",type:void 0!==t.type?h[t.type]:h.NORMAL,tags:t.tags??void 0})),"parseCommit"),G=(0,c.K2)((t=>({name:t.name,order:t.order??0})),"parseBranch"),O=(0,c.K2)((t=>({branch:t.branch,id:t.id??"",type:void 0!==t.type?h[t.type]:void 0,tags:t.tags??void 0})),"parseMerge"),q=(0,c.K2)((t=>t.branch),"parseCheckout"),z=(0,c.K2)((t=>({id:t.id,targetId:"",tags:0===t.tags?.length?void 0:t.tags,parent:t.parent})),"parseCherryPicking"),H={parse:(0,c.K2)((async t=>{const r=await(0,s.qg)("gitGraph",t);c.Rm.debug(r),P(r,v)}),"parse")};var S=(0,c.D7)(),D=S?.gitGraph,Y=10,N=40,j=new Map,W=new Map,_=new Map,F=[],U=0,V="LR",J=(0,c.K2)((()=>{j.clear(),W.clear(),_.clear(),U=0,F=[],V="LR"}),"clear"),Q=(0,c.K2)((t=>{const r=document.createElementNS("http://www.w3.org/2000/svg","text");return("string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach((t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),e.setAttribute("dy","1em"),e.setAttribute("x","0"),e.setAttribute("class","row"),e.textContent=t.trim(),r.appendChild(e)})),r}),"drawText"),X=(0,c.K2)((t=>{let r,e,n;return"BT"===V?(e=(0,c.K2)(((t,r)=>t<=r),"comparisonFunc"),n=1/0):(e=(0,c.K2)(((t,r)=>t>=r),"comparisonFunc"),n=0),t.forEach((t=>{const o="TB"===V||"BT"==V?W.get(t)?.y:W.get(t)?.x;void 0!==o&&e(o,n)&&(r=t,n=o)})),r}),"findClosestParent"),Z=(0,c.K2)((t=>{let r="",e=1/0;return t.forEach((t=>{const n=W.get(t).y;n<=e&&(r=t,e=n)})),r||void 0}),"findClosestParentBT"),tt=(0,c.K2)(((t,r,e)=>{let n=e,o=e;const a=[];t.forEach((t=>{const e=r.get(t);if(!e)throw new Error(`Commit not found for key ${t}`);e.parents.length?(n=et(e),o=Math.max(n,o)):a.push(e),nt(e,n)})),n=o,a.forEach((t=>{ot(t,n,e)})),t.forEach((t=>{const e=r.get(t);if(e?.parents.length){const t=Z(e.parents);n=W.get(t).y-N,n<=o&&(o=n);const r=j.get(e.branch).pos,a=n-Y;W.set(e.id,{x:r,y:a})}}))}),"setParallelBTPos"),rt=(0,c.K2)((t=>{const r=X(t.parents.filter((t=>null!==t)));if(!r)throw new Error(`Closest parent not found for commit ${t.id}`);const e=W.get(r)?.y;if(void 0===e)throw new Error(`Closest parent position not found for commit ${t.id}`);return e}),"findClosestParentPos"),et=(0,c.K2)((t=>rt(t)+N),"calculateCommitPosition"),nt=(0,c.K2)(((t,r)=>{const e=j.get(t.branch);if(!e)throw new Error(`Branch not found for commit ${t.id}`);const n=e.pos,o=r+Y;return W.set(t.id,{x:n,y:o}),{x:n,y:o}}),"setCommitPosition"),ot=(0,c.K2)(((t,r,e)=>{const n=j.get(t.branch);if(!n)throw new Error(`Branch not found for commit ${t.id}`);const o=r+e,a=n.pos;W.set(t.id,{x:a,y:o})}),"setRootPosition"),at=(0,c.K2)(((t,r,e,n,o,a)=>{if(a===h.HIGHLIGHT)t.append("rect").attr("x",e.x-10).attr("y",e.y-10).attr("width",20).attr("height",20).attr("class",`commit ${r.id} commit-highlight${o%8} ${n}-outer`),t.append("rect").attr("x",e.x-6).attr("y",e.y-6).attr("width",12).attr("height",12).attr("class",`commit ${r.id} commit${o%8} ${n}-inner`);else if(a===h.CHERRY_PICK)t.append("circle").attr("cx",e.x).attr("cy",e.y).attr("r",10).attr("class",`commit ${r.id} ${n}`),t.append("circle").attr("cx",e.x-3).attr("cy",e.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${n}`),t.append("circle").attr("cx",e.x+3).attr("cy",e.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${n}`),t.append("line").attr("x1",e.x+3).attr("y1",e.y+1).attr("x2",e.x).attr("y2",e.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${n}`),t.append("line").attr("x1",e.x-3).attr("y1",e.y+1).attr("x2",e.x).attr("y2",e.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${n}`);else{const c=t.append("circle");if(c.attr("cx",e.x),c.attr("cy",e.y),c.attr("r",r.type===h.MERGE?9:10),c.attr("class",`commit ${r.id} commit${o%8}`),a===h.MERGE){const a=t.append("circle");a.attr("cx",e.x),a.attr("cy",e.y),a.attr("r",6),a.attr("class",`commit ${n} ${r.id} commit${o%8}`)}if(a===h.REVERSE){t.append("path").attr("d",`M ${e.x-5},${e.y-5}L${e.x+5},${e.y+5}M${e.x-5},${e.y+5}L${e.x+5},${e.y-5}`).attr("class",`commit ${n} ${r.id} commit${o%8}`)}}}),"drawCommitBullet"),ct=(0,c.K2)(((t,r,e,n)=>{if(r.type!==h.CHERRY_PICK&&(r.customId&&r.type===h.MERGE||r.type!==h.MERGE)&&D?.showCommitLabel){const o=t.append("g"),a=o.insert("rect").attr("class","commit-label-bkg"),c=o.append("text").attr("x",n).attr("y",e.y+25).attr("class","commit-label").text(r.id),s=c.node()?.getBBox();if(s&&(a.attr("x",e.posWithOffset-s.width/2-2).attr("y",e.y+13.5).attr("width",s.width+4).attr("height",s.height+4),"TB"===V||"BT"===V?(a.attr("x",e.x-(s.width+16+5)).attr("y",e.y-12),c.attr("x",e.x-(s.width+16)).attr("y",e.y+s.height-12)):c.attr("x",e.posWithOffset-s.width/2),D.rotateCommitLabel))if("TB"===V||"BT"===V)c.attr("transform","rotate(-45, "+e.x+", "+e.y+")"),a.attr("transform","rotate(-45, "+e.x+", "+e.y+")");else{const t=-7.5-(s.width+10)/25*9.5,r=10+s.width/25*8.5;o.attr("transform","translate("+t+", "+r+") rotate(-45, "+n+", "+e.y+")")}}}),"drawCommitLabel"),st=(0,c.K2)(((t,r,e,n)=>{if(r.tags.length>0){let o=0,a=0,c=0;const s=[];for(const n of r.tags.reverse()){const r=t.insert("polygon"),i=t.append("circle"),h=t.append("text").attr("y",e.y-16-o).attr("class","tag-label").text(n),d=h.node()?.getBBox();if(!d)throw new Error("Tag bbox not found");a=Math.max(a,d.width),c=Math.max(c,d.height),h.attr("x",e.posWithOffset-d.width/2),s.push({tag:h,hole:i,rect:r,yOffset:o}),o+=20}for(const{tag:t,hole:r,rect:i,yOffset:h}of s){const o=c/2,s=e.y-19.2-h;if(i.attr("class","tag-label-bkg").attr("points",`\n      ${n-a/2-2},${s+2}  \n      ${n-a/2-2},${s-2}\n      ${e.posWithOffset-a/2-4},${s-o-2}\n      ${e.posWithOffset+a/2+4},${s-o-2}\n      ${e.posWithOffset+a/2+4},${s+o+2}\n      ${e.posWithOffset-a/2-4},${s+o+2}`),r.attr("cy",s).attr("cx",n-a/2+2).attr("r",1.5).attr("class","tag-hole"),"TB"===V||"BT"===V){const c=n+h;i.attr("class","tag-label-bkg").attr("points",`\n        ${e.x},${c+2}\n        ${e.x},${c-2}\n        ${e.x+Y},${c-o-2}\n        ${e.x+Y+a+4},${c-o-2}\n        ${e.x+Y+a+4},${c+o+2}\n        ${e.x+Y},${c+o+2}`).attr("transform","translate(12,12) rotate(45, "+e.x+","+n+")"),r.attr("cx",e.x+2).attr("cy",c).attr("transform","translate(12,12) rotate(45, "+e.x+","+n+")"),t.attr("x",e.x+5).attr("y",c+3).attr("transform","translate(14,14) rotate(45, "+e.x+","+n+")")}}}}),"drawCommitTags"),it=(0,c.K2)((t=>{switch(t.customType??t.type){case h.NORMAL:return"commit-normal";case h.REVERSE:return"commit-reverse";case h.HIGHLIGHT:return"commit-highlight";case h.MERGE:return"commit-merge";case h.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}}),"getCommitClassType"),ht=(0,c.K2)(((t,r,e,n)=>{const o={x:0,y:0};if(!(t.parents.length>0)){if("TB"===r)return 30;if("BT"===r){return(n.get(t.id)??o).y-N}return 0}{const e=X(t.parents);if(e){const a=n.get(e)??o;if("TB"===r)return a.y+N;if("BT"===r){return(n.get(t.id)??o).y-N}return a.x+N}}return 0}),"calculatePosition"),dt=(0,c.K2)(((t,r,e)=>{const n="BT"===V&&e?r:r+Y,o="TB"===V||"BT"===V?n:j.get(t.branch)?.pos,a="TB"===V||"BT"===V?j.get(t.branch)?.pos:n;if(void 0===a||void 0===o)throw new Error(`Position were undefined for commit ${t.id}`);return{x:a,y:o,posWithOffset:n}}),"getCommitPosition"),mt=(0,c.K2)(((t,r,e)=>{if(!D)throw new Error("GitGraph config not found");const n=t.append("g").attr("class","commit-bullets"),o=t.append("g").attr("class","commit-labels");let a="TB"===V||"BT"===V?30:0;const s=[...r.keys()],i=D?.parallelCommits??!1,h=(0,c.K2)(((t,e)=>{const n=r.get(t)?.seq,o=r.get(e)?.seq;return void 0!==n&&void 0!==o?n-o:0}),"sortKeys");let d=s.sort(h);"BT"===V&&(i&&tt(d,r,a),d=d.reverse()),d.forEach((t=>{const c=r.get(t);if(!c)throw new Error(`Commit not found for key ${t}`);i&&(a=ht(c,V,a,W));const s=dt(c,a,i);if(e){const t=it(c),r=c.customType??c.type,e=j.get(c.branch)?.index??0;at(n,c,s,t,e,r),ct(o,c,s,a),st(o,c,s,a)}"TB"===V||"BT"===V?W.set(c.id,{x:s.x,y:s.posWithOffset}):W.set(c.id,{x:s.posWithOffset,y:s.y}),a="BT"===V&&i?a+N:a+N+Y,a>U&&(U=a)}))}),"drawCommits"),$t=(0,c.K2)(((t,r,e,n,o)=>{const a=("TB"===V||"BT"===V?e.x<n.x:e.y<n.y)?r.branch:t.branch,s=(0,c.K2)((t=>t.branch===a),"isOnBranchToGetCurve"),i=(0,c.K2)((e=>e.seq>t.seq&&e.seq<r.seq),"isBetweenCommits");return[...o.values()].some((t=>i(t)&&s(t)))}),"shouldRerouteArrow"),lt=(0,c.K2)(((t,r,e=0)=>{const n=t+Math.abs(t-r)/2;if(e>5)return n;if(F.every((t=>Math.abs(t-n)>=10)))return F.push(n),n;const o=Math.abs(t-r);return lt(t,r-o/5,e+1)}),"findLane"),yt=(0,c.K2)(((t,r,e,n)=>{const o=W.get(r.id),a=W.get(e.id);if(void 0===o||void 0===a)throw new Error(`Commit positions not found for commits ${r.id} and ${e.id}`);const c=$t(r,e,o,a,n);let s,i="",d="",m=0,$=0,l=j.get(e.branch)?.index;if(e.type===h.MERGE&&r.id!==e.parents[0]&&(l=j.get(r.branch)?.index),c){i="A 10 10, 0, 0, 0,",d="A 10 10, 0, 0, 1,",m=10,$=10;const t=o.y<a.y?lt(o.y,a.y):lt(a.y,o.y),e=o.x<a.x?lt(o.x,a.x):lt(a.x,o.x);"TB"===V?o.x<a.x?s=`M ${o.x} ${o.y} L ${e-m} ${o.y} ${d} ${e} ${o.y+$} L ${e} ${a.y-m} ${i} ${e+$} ${a.y} L ${a.x} ${a.y}`:(l=j.get(r.branch)?.index,s=`M ${o.x} ${o.y} L ${e+m} ${o.y} ${i} ${e} ${o.y+$} L ${e} ${a.y-m} ${d} ${e-$} ${a.y} L ${a.x} ${a.y}`):"BT"===V?o.x<a.x?s=`M ${o.x} ${o.y} L ${e-m} ${o.y} ${i} ${e} ${o.y-$} L ${e} ${a.y+m} ${d} ${e+$} ${a.y} L ${a.x} ${a.y}`:(l=j.get(r.branch)?.index,s=`M ${o.x} ${o.y} L ${e+m} ${o.y} ${d} ${e} ${o.y-$} L ${e} ${a.y+m} ${i} ${e-$} ${a.y} L ${a.x} ${a.y}`):o.y<a.y?s=`M ${o.x} ${o.y} L ${o.x} ${t-m} ${i} ${o.x+$} ${t} L ${a.x-m} ${t} ${d} ${a.x} ${t+$} L ${a.x} ${a.y}`:(l=j.get(r.branch)?.index,s=`M ${o.x} ${o.y} L ${o.x} ${t+m} ${d} ${o.x+$} ${t} L ${a.x-m} ${t} ${i} ${a.x} ${t-$} L ${a.x} ${a.y}`)}else i="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",m=20,$=20,"TB"===V?(o.x<a.x&&(s=e.type===h.MERGE&&r.id!==e.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${a.y-m} ${i} ${o.x+$} ${a.y} L ${a.x} ${a.y}`:`M ${o.x} ${o.y} L ${a.x-m} ${o.y} ${d} ${a.x} ${o.y+$} L ${a.x} ${a.y}`),o.x>a.x&&(i="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",m=20,$=20,s=e.type===h.MERGE&&r.id!==e.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${a.y-m} ${d} ${o.x-$} ${a.y} L ${a.x} ${a.y}`:`M ${o.x} ${o.y} L ${a.x+m} ${o.y} ${i} ${a.x} ${o.y+$} L ${a.x} ${a.y}`),o.x===a.x&&(s=`M ${o.x} ${o.y} L ${a.x} ${a.y}`)):"BT"===V?(o.x<a.x&&(s=e.type===h.MERGE&&r.id!==e.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${a.y+m} ${d} ${o.x+$} ${a.y} L ${a.x} ${a.y}`:`M ${o.x} ${o.y} L ${a.x-m} ${o.y} ${i} ${a.x} ${o.y-$} L ${a.x} ${a.y}`),o.x>a.x&&(i="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",m=20,$=20,s=e.type===h.MERGE&&r.id!==e.parents[0]?`M ${o.x} ${o.y} L ${o.x} ${a.y+m} ${i} ${o.x-$} ${a.y} L ${a.x} ${a.y}`:`M ${o.x} ${o.y} L ${a.x-m} ${o.y} ${i} ${a.x} ${o.y-$} L ${a.x} ${a.y}`),o.x===a.x&&(s=`M ${o.x} ${o.y} L ${a.x} ${a.y}`)):(o.y<a.y&&(s=e.type===h.MERGE&&r.id!==e.parents[0]?`M ${o.x} ${o.y} L ${a.x-m} ${o.y} ${d} ${a.x} ${o.y+$} L ${a.x} ${a.y}`:`M ${o.x} ${o.y} L ${o.x} ${a.y-m} ${i} ${o.x+$} ${a.y} L ${a.x} ${a.y}`),o.y>a.y&&(s=e.type===h.MERGE&&r.id!==e.parents[0]?`M ${o.x} ${o.y} L ${a.x-m} ${o.y} ${i} ${a.x} ${o.y-$} L ${a.x} ${a.y}`:`M ${o.x} ${o.y} L ${o.x} ${a.y+m} ${d} ${o.x+$} ${a.y} L ${a.x} ${a.y}`),o.y===a.y&&(s=`M ${o.x} ${o.y} L ${a.x} ${a.y}`));if(void 0===s)throw new Error("Line definition not found");t.append("path").attr("d",s).attr("class","arrow arrow"+l%8)}),"drawArrow"),gt=(0,c.K2)(((t,r)=>{const e=t.append("g").attr("class","commit-arrows");[...r.keys()].forEach((t=>{const n=r.get(t);n.parents&&n.parents.length>0&&n.parents.forEach((t=>{yt(e,r.get(t),n,r)}))}))}),"drawArrows"),pt=(0,c.K2)(((t,r)=>{const e=t.append("g");r.forEach(((t,r)=>{const n=r%8,o=j.get(t.name)?.pos;if(void 0===o)throw new Error(`Position not found for branch ${t.name}`);const a=e.append("line");a.attr("x1",0),a.attr("y1",o),a.attr("x2",U),a.attr("y2",o),a.attr("class","branch branch"+n),"TB"===V?(a.attr("y1",30),a.attr("x1",o),a.attr("y2",U),a.attr("x2",o)):"BT"===V&&(a.attr("y1",U),a.attr("x1",o),a.attr("y2",30),a.attr("x2",o)),F.push(o);const c=t.name,s=Q(c),i=e.insert("rect"),h=e.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);h.node().appendChild(s);const d=s.getBBox();i.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-d.width-4-(!0===D?.rotateCommitLabel?30:0)).attr("y",-d.height/2+8).attr("width",d.width+18).attr("height",d.height+4),h.attr("transform","translate("+(-d.width-14-(!0===D?.rotateCommitLabel?30:0))+", "+(o-d.height/2-1)+")"),"TB"===V?(i.attr("x",o-d.width/2-10).attr("y",0),h.attr("transform","translate("+(o-d.width/2-5)+", 0)")):"BT"===V?(i.attr("x",o-d.width/2-10).attr("y",U),h.attr("transform","translate("+(o-d.width/2-5)+", "+U+")")):i.attr("transform","translate(-19, "+(o-d.height/2)+")")}))}),"drawBranches"),xt=(0,c.K2)((function(t,r,e,n,o){return j.set(t,{pos:r,index:e}),r+=50+(o?40:0)+("TB"===V||"BT"===V?n.width/2:0)}),"setBranchPosition");var ft={parser:H,db:v,renderer:{draw:(0,c.K2)((function(t,r,e,n){if(J(),c.Rm.debug("in gitgraph renderer",t+"\n","id:",r,e),!D)throw new Error("GitGraph config not found");const o=D.rotateCommitLabel??!1,s=n.db;_=s.getCommits();const h=s.getBranchesAsObjArray();V=s.getDirection();const d=(0,i.Ltv)(`[id="${r}"]`);let m=0;h.forEach(((t,r)=>{const e=Q(t.name),n=d.append("g"),a=n.insert("g").attr("class","branchLabel"),c=a.insert("g").attr("class","label branch-label");c.node()?.appendChild(e);const s=e.getBBox();m=xt(t.name,m,r,s,o),c.remove(),a.remove(),n.remove()})),mt(d,_,!1),D.showBranches&&pt(d,h),gt(d,_),mt(d,_,!0),a._K.insertTitle(d,"gitTitleText",D.titleTopMargin??0,s.getDiagramTitle()),(0,c.mj)(void 0,d,D.diagramPadding,D.useMaxWidth)}),"draw")},styles:(0,c.K2)((t=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map((r=>`\n        .branch-label${r} { fill: ${t["gitBranchLabel"+r]}; }\n        .commit${r} { stroke: ${t["git"+r]}; fill: ${t["git"+r]}; }\n        .commit-highlight${r} { stroke: ${t["gitInv"+r]}; fill: ${t["gitInv"+r]}; }\n        .label${r}  { fill: ${t["git"+r]}; }\n        .arrow${r} { stroke: ${t["git"+r]}; }\n        `)).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`),"getStyles")}}}]);