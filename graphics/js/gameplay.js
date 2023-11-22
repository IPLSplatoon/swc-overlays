(()=>{"use strict";var e,r={9583:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(9601),o=a.n(t),s=a(2609),n=a.n(s)()(o());n.push([e.id,"span.badge{padding:1px 6px;border-radius:8px;margin-left:8px;display:inline-block}",""]);const i=n},572:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(9601),o=a.n(t),s=a(2609),n=a.n(s)()(o());n.push([e.id,".casters-wrapper{position:absolute;bottom:30px;right:60px;width:300px;overflow:hidden}.casters-wrapper>.casters-header{font-size:28px;text-align:center;width:100%;background-color:#111;padding:4px 0;margin-bottom:2px;border-radius:4px}.casters-wrapper>.casters-content{min-height:100px;display:flex;flex-direction:column;justify-content:center}.casters-wrapper>.casters-content>.caster-item{padding:6px 10px 10px;margin-bottom:2px;border-radius:4px}.casters-wrapper>.casters-content>.caster-item .caster-name{filter:drop-shadow(2px 2px 2px rgba(34, 34, 34, 0.5));font-size:30px}.casters-wrapper>.casters-content>.caster-item .caster-pronouns{filter:drop-shadow(2px 2px 2px rgba(34, 34, 34, 0.5));font-size:20px;transform:translateY(-3px)}.casters-wrapper>.casters-content>.caster-item .caster-twitter{filter:drop-shadow(2px 2px 2px rgba(34, 34, 34, 0.5));font-size:22px;font-weight:500;margin-top:-8px}.casters-wrapper>.casters-content>.caster-item:nth-child(odd){background:linear-gradient(70deg, #113D8F 0%, #0A2250 100%)}.casters-wrapper>.casters-content>.caster-item:nth-child(even){background:linear-gradient(250deg, #113D8F 0%, #0A2250 100%)}",""]);const i=n},2634:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(9601),o=a.n(t),s=a(2609),n=a.n(s)()(o());n.push([e.id,'.scoreboard-wrapper{position:absolute;top:30px;left:30px;width:390px;height:170px}.scoreboard-wrapper>.scoreboard-teams{position:relative;max-width:100%;height:127px;margin:0;overflow:hidden}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout{display:grid;grid-template-rows:1fr 2px 1fr;height:100%;align-items:center;position:relative;z-index:2}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display{display:flex;align-items:center;height:100%;overflow:hidden;border-radius:4px;background:linear-gradient(185deg, transparent 0%, transparent 60%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.05) 100%),linear-gradient(0deg, #09224F 0%, #0E357A 100%)}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .team-score{background:linear-gradient(175deg, #00074A 0%, #00074A 50%, #000536 50%, #000536 100%)}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .score-color-wrapper{display:flex;height:100%;flex-grow:1;filter:drop-shadow(0 0 10px #000)}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .score-color-wrapper>.team-score{text-align:center;font-size:36px;line-height:56px;flex-grow:1;border-radius:4px 0 0 4px;height:100%}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .score-color-wrapper>.team-color{width:12px;height:100%;border-radius:0 4px 4px 0;transition:background-color 500ms;position:relative}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .score-color-wrapper>.team-color:after{content:"";width:100%;height:50%;position:absolute;left:0;bottom:0;border-radius:0 4px 4px 0;background-color:rgba(0,0,0,.25);mix-blend-mode:overlay}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display>.team-name{filter:drop-shadow(2px 2px 2px rgba(34, 34, 34, 0.5));width:290px;margin:4px 16px 0}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .team-name-container{text-align:center}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .team-name-text{font-size:30px}.scoreboard-wrapper>.scoreboard-teams>.scoreboard-team-layout>.team-display .secondary-name{font-size:15px;margin-bottom:-8px}.scoreboard-wrapper>.scoreboard-extra{margin-top:2px;height:38px;border-radius:4px;background-color:#111}.scoreboard-wrapper>.scoreboard-extra>.flavor-text{font-size:24px;margin-left:10px}',""]);const i=n},7722:(e,r,a)=>{a(212);var t=a(4825),o=a(7875),s=a(349);const n={key:0,class:"scoreboard-wrapper"},i={class:"scoreboard-teams"},c={class:"scoreboard-team-layout"},l={class:"team-display team-alpha"},d={class:"team-name-container"},p={key:0,class:"secondary-name"},m={class:"team-name-text"},u={class:"score-color-wrapper"},b={class:"team-score font-numeric"},v=(0,o._)("div",{class:"separator"},null,-1),w={class:"team-display team-bravo"},g={class:"team-name-container"},f={key:0,class:"secondary-name"},x={class:"team-name-text"},h={class:"score-color-wrapper"},y={class:"team-score font-numeric"},_={class:"scoreboard-extra"};var k=a(7372),Z=a(2846),S=a(5746),z=a(4902),C=a(882),E=a(3498),A=a(3222);const B=nodecg.Replicant("activeRound",E.h),F=nodecg.Replicant("swapColorsInternally",E.h),j=(0,C.Q_)("activeRound",{state:()=>({activeRound:null,swapColorsInternally:null})}),T=(0,A.H)([B,F],j),P=nodecg.Replicant("scoreboardData",E.h),D=(0,C.Q_)("scoreboard",{state:()=>({scoreboardData:null})}),O=(0,A.H)([P],D),N=(0,o.aZ)({name:"Scoreboard",components:{OpacitySwapTransition:Z.Z,FittedContent:k.Z},setup(){const e=j(),r=(0,o.Fl)((()=>e.activeRound.teamA)),a=(0,o.Fl)((()=>e.activeRound.teamB)),t=D();return{teamA:r,teamB:a,teamAName:(0,o.Fl)((()=>(0,S.f)(r.value.name))),teamBName:(0,o.Fl)((()=>(0,S.f)(a.value.name))),scoreboardStore:t,scoreboardEnter:(e,r)=>{z.ZP.to(e,{y:0,opacity:1,ease:"power2.out",onComplete:r})},beforeScoreboardEnter:e=>{z.ZP.set(e,{y:-25,opacity:0})},scoreboardLeave:(e,r)=>{z.ZP.to(e,{y:-25,opacity:0,ease:"power2.in",onComplete:r})}}}});var R=a(6062),W=a.n(R),L=a(4036),H=a.n(L),I=a(6793),$=a.n(I),q=a(7892),U=a.n(q),M=a(1173),Q=a.n(M),V=a(2464),Y=a.n(V),G=a(2634),K={};K.styleTagTransform=Y(),K.setAttributes=U(),K.insert=$().bind(null,"head"),K.domAPI=H(),K.insertStyleElement=Q(),W()(G.Z,K),G.Z&&G.Z.locals&&G.Z.locals;var J=a(4407);const X=(0,J.Z)(N,[["render",function(e,r,a,k,Z,S){const z=(0,o.up)("fitted-content"),C=(0,o.up)("opacity-swap-transition");return(0,o.wg)(),(0,o.j4)(t.uT,{onEnter:e.scoreboardEnter,onLeave:e.scoreboardLeave,onBeforeEnter:e.beforeScoreboardEnter},{default:(0,o.w5)((()=>{var r,a,t,k;return[e.scoreboardStore.scoreboardData.isVisible?((0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",i,[(0,o._)("div",c,[(0,o._)("div",l,[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(z,{key:e.teamAName,"max-width":290,class:"team-name",align:"right"},{default:(0,o.w5)((()=>{var r,a;return[(0,o._)("div",d,[e.$helpers.isBlank(null===(r=e.teamA)||void 0===r?void 0:r.romanizedName)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",p,(0,s.zw)(null===(a=e.teamA)||void 0===a?void 0:a.romanizedName),1)),(0,o._)("div",m,(0,s.zw)(e.teamAName),1)])]})),_:1}))])),_:1}),(0,o._)("div",u,[(0,o._)("div",b,(0,s.zw)(null===(r=e.teamA)||void 0===r?void 0:r.score),1),(0,o._)("div",{class:"team-color",style:(0,s.j5)({backgroundColor:null===(a=e.teamA)||void 0===a?void 0:a.color})},null,4)])]),v,(0,o._)("div",w,[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(z,{key:e.teamBName,"max-width":290,class:"team-name",align:"right"},{default:(0,o.w5)((()=>{var r,a;return[(0,o._)("div",g,[e.$helpers.isBlank(null===(r=e.teamB)||void 0===r?void 0:r.romanizedName)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",f,(0,s.zw)(null===(a=e.teamB)||void 0===a?void 0:a.romanizedName),1)),(0,o._)("div",x,(0,s.zw)(e.teamBName),1)])]})),_:1}))])),_:1}),(0,o._)("div",h,[(0,o._)("div",y,(0,s.zw)(null===(t=e.teamB)||void 0===t?void 0:t.score),1),(0,o._)("div",{class:"team-color",style:(0,s.j5)({backgroundColor:null===(k=e.teamB)||void 0===k?void 0:k.color})},null,4)])])])]),(0,o._)("div",_,[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(z,{key:e.scoreboardStore.scoreboardData.flavorText,"max-width":370,class:"flavor-text",align:"center"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.scoreboardStore.scoreboardData.flavorText),1)])),_:1}))])),_:1})])])):(0,o.kq)("",!0)]})),_:1},8,["onEnter","onLeave","onBeforeEnter"])}]]),ee={key:0,class:"casters-wrapper"},re=(0,o._)("div",{class:"casters-header"}," Commentators ",-1),ae={class:"casters-content"},te={class:"caster-name"};var oe=a(8127);const se=(0,o.aZ)({name:"Badge",props:{color:{type:String,default:"#FFFFFF"}},setup:e=>({textColor:(0,o.Fl)((()=>(0,oe.getContrastingTextColor)(e.color)))})});var ne=a(9583),ie={};ie.styleTagTransform=Y(),ie.setAttributes=U(),ie.insert=$().bind(null,"head"),ie.domAPI=H(),ie.insertStyleElement=Q(),W()(ne.Z,ie),ne.Z&&ne.Z.locals&&ne.Z.locals;const ce=(0,J.Z)(se,[["render",function(e,r,a,t,n,i){return(0,o.wg)(),(0,o.iD)("span",{class:"badge",style:(0,s.j5)({backgroundColor:e.color,color:e.textColor})},[(0,o.WI)(e.$slots,"default")],4)}]]);var le=a(641);const de=nodecg.Replicant("casters",E.h),pe=(0,C.Q_)("casters",{state:()=>({casters:{}})}),me=(0,A.H)([de],pe),ue=(0,o.aZ)({name:"Casters",components:{FittedContent:k.Z,Badge:ce},setup(){const e=pe(),r=(0,le.iH)(!1);return nodecg.listenFor("mainShowCasters",E.h,(()=>{r.value||(r.value=!0,setTimeout((()=>{r.value=!1}),15e3))})),{casterStore:e,castersVisible:r,castersEnter:(e,r)=>{z.ZP.to(e,{y:0,opacity:1,ease:"power2.out",onComplete:r})},beforeCastersEnter:e=>{z.ZP.set(e,{y:25,opacity:0})},castersLeave:(e,r)=>{z.ZP.to(e,{y:25,opacity:0,ease:"power2.in",onComplete:r})}}}});var be=a(572),ve={};ve.styleTagTransform=Y(),ve.setAttributes=U(),ve.insert=$().bind(null,"head"),ve.domAPI=H(),ve.insertStyleElement=Q(),W()(be.Z,ve),be.Z&&be.Z.locals&&be.Z.locals;const we=(0,J.Z)(ue,[["render",function(e,r,a,n,i,c){const l=(0,o.up)("badge"),d=(0,o.up)("fitted-content");return(0,o.wg)(),(0,o.j4)(t.uT,{onEnter:e.castersEnter,onLeave:e.castersLeave,onBeforeEnter:e.beforeCastersEnter},{default:(0,o.w5)((()=>[e.castersVisible?((0,o.wg)(),(0,o.iD)("div",ee,[re,(0,o._)("div",ae,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.casterStore.casters,((e,r)=>((0,o.wg)(),(0,o.iD)("div",{key:r,class:"caster-item"},[(0,o.Wm)(d,{"max-width":280},{default:(0,o.w5)((()=>[(0,o._)("span",te,(0,s.zw)(e.name),1),(0,o.Wm)(l,{class:"caster-pronouns"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.pronouns),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(d,{"max-width":280,class:"caster-twitter"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.twitter),1)])),_:2},1024)])))),128))])])):(0,o.kq)("",!0)])),_:1},8,["onEnter","onLeave","onBeforeEnter"])}]]),ge=(0,o.aZ)({name:"Gameplay",components:{Casters:we,Scoreboard:X}}),fe=(0,J.Z)(ge,[["render",function(e,r,a,t,s,n){const i=(0,o.up)("scoreboard"),c=(0,o.up)("casters");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(c)],64)}]]);var xe,he,ye=a(4332);he=function*(){const e=(0,t.ri)(fe);(0,ye.H)(e),e.use((0,C.WB)()),yield me(),yield T(),yield O(),e.mount("#app")},new((xe=void 0)||(xe=Promise))((function(e,r){function a(e){try{o(he.next(e))}catch(e){r(e)}}function t(e){try{o(he.throw(e))}catch(e){r(e)}}function o(r){var o;r.done?e(r.value):(o=r.value,o instanceof xe?o:new xe((function(e){e(o)}))).then(a,t)}o((he=he.apply(void 0,[])).next())}))},9968:(e,r,a)=>{a.d(r,{L:()=>o}),a(2763);var t=a(579);function o(e){return t.ZP.fromObject({seconds:e}).toFormat("m:ss")}a(927),a(3856),a(8348),a(8748),a(3894),a(3628),a(8720),a(407)}},a={};function t(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={id:e,loaded:!1,exports:{}};return r[e](s,s.exports,t),s.loaded=!0,s.exports}t.m=r,e=[],t.O=(r,a,o,s)=>{if(!a){var n=1/0;for(d=0;d<e.length;d++){for(var[a,o,s]=e[d],i=!0,c=0;c<a.length;c++)(!1&s||n>=s)&&Object.keys(t.O).every((e=>t.O[e](a[c])))?a.splice(c--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var l=o();void 0!==l&&(r=l)}}return r}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,o,s]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),(()=>{t.b=document.baseURI||self.location.href;var e={475:0};t.O.j=r=>0===e[r];var r=(r,a)=>{var o,s,[n,i,c]=a,l=0;if(n.some((r=>0!==e[r]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var d=c(t)}for(r&&r(a);l<n.length;l++)s=n[l],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})(),t.nc=void 0;var o=t.O(void 0,[446,293],(()=>t(7722)));o=t.O(o)})();