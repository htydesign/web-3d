const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LightView-yCUgj6Q4.js","./base-DD5aOT-d.js","./three-DHmVq3iW.js","./@vue-BDXyav1n.js","./LightTwoView-CquUFv9F.js","./LightThreeView-CDz1uyfN.js","./LightFourView-CEwRGKdq.js","./LightFiveView-BkjD5YlR.js","./ParticlesView-CU_GXP__.js","./ModelParticlesView-BZJllHiN.js","./RainShaderView-4mVL-YYV.js","./EnergyShieldView-DmHF8QLN.js","./AudioView-VRdwElvc.js","./pinia-BgosKWnB.js","./vue-router-DekMB8ps.js","../css/AudioView-DrKSPIhu.css","./PipeFlowView-CGH3d60b.js","./PipeFlowViewTwo-wXQv16X_.js","./PipeFlowViewThree-DABiA8KG.js","./PipeFlowViewFour-BREvQ_Nk.js","./ModelView1-DoUZw7TD.js","./ModelView2-BK_rnufG.js","./ModelView3-DA_dUbBe.js","../css/ModelView3-DmYrolRG.css","./ModelView4-D2x3PDXz.js","../css/ModelView4-BL9dCmSF.css","./ModelView5-DUw0ntKc.js","../css/ModelView5-CtALClth.css","./FlameView-DwjnZ9Gh.js","./RaderView-5ByyDdu2.js","./MoveView-V35YIlg1.js","./EnvView-7s-ehhdT.js","./DissolveView-DVi_gviM.js","./BaguaView-Cuy3LtKB.js","./MapView-m-aQDPRS.js","./@amap-DgZfE03j.js","../css/MapView-DMg3XSuL.css","./ShaderView-Dv6G_eef.js","./XingKongView-bDGEyuXw.js","./FireWorksView-8kVEGm2K.js","./FireWorksView2-BbDJIqtF.js"])))=>i.map(i=>d[i]);
import{d as e,f as t,u as o,o as i,g as m,j as a,F as r,k as p,l as n,q as _,t as l,v as s,x as c,y as u}from"./@vue-BDXyav1n.js";import{c as h}from"./pinia-BgosKWnB.js";import{R as d,u as E,c as V,a as w}from"./vue-router-DekMB8ps.js";import{_ as f}from"./three-DHmVq3iW.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g=e({__name:"App",setup:e=>(e,m)=>(i(),t(o(d)))}),L={class:"container"},P={key:0},j={class:"link"},A=["src"],O=(e,t)=>{const o=e.__vccOpts||e;for(const[i,m]of t)o[i]=m;return o},T=O(e({__name:"IndexView",setup(e){const t=E().options.routes;return(e,u)=>{const h=n("router-link");return i(),m("div",L,[a("ul",null,[(i(!0),m(r,null,p(o(t),(e=>(i(),m(r,{key:e.path},["/"!==e.path?(i(),m("li",P,[_(h,{to:e.path},{default:l((()=>[a("div",j,[a("img",{src:`./texture/images/${e.name}.png`,alt:""},null,8,A),a("p",null,c(e.meta&&e.meta.title),1)])])),_:2},1032,["to"])])):s("",!0)],64)))),128))])])}}}),[["__scopeId","data-v-c6068bf6"]]),I=V({history:w("./"),routes:[{path:"/",name:"home",component:T},{path:"/light",name:"light",meta:{title:"建筑光线"},component:()=>f((()=>import("./LightView-yCUgj6Q4.js")),__vite__mapDeps([0,1,2,3]),import.meta.url)},{path:"/light2",name:"light2",meta:{title:"建筑扫光2"},component:()=>f((()=>import("./LightTwoView-CquUFv9F.js")),__vite__mapDeps([4,1,2,3]),import.meta.url)},{path:"/light3",name:"light3",meta:{title:"建筑扫光3"},component:()=>f((()=>import("./LightThreeView-CDz1uyfN.js")),__vite__mapDeps([5,1,2,3]),import.meta.url)},{path:"/light4",name:"light4",meta:{title:"灯光"},component:()=>f((()=>import("./LightFourView-CEwRGKdq.js")),__vite__mapDeps([6,1,2,3]),import.meta.url)},{path:"/light5",name:"light5",meta:{title:"灯光2"},component:()=>f((()=>import("./LightFiveView-BkjD5YlR.js")),__vite__mapDeps([7,1,2,3]),import.meta.url)},{path:"/particles",name:"particles",meta:{title:"几何体粒子变换"},component:()=>f((()=>import("./ParticlesView-CU_GXP__.js")),__vite__mapDeps([8,1,2,3]),import.meta.url)},{path:"/model-particles",name:"model-particles",meta:{title:"模型粒子变换"},component:()=>f((()=>import("./ModelParticlesView-BZJllHiN.js")),__vite__mapDeps([9,1,2,3]),import.meta.url)},{path:"/rain",name:"rain",meta:{title:"下雨"},component:()=>f((()=>import("./RainShaderView-4mVL-YYV.js")),__vite__mapDeps([10,1,2,3]),import.meta.url)},{path:"/energy-shield",name:"energy-shield",meta:{title:"能量罩"},component:()=>f((()=>import("./EnergyShieldView-DmHF8QLN.js")),__vite__mapDeps([11,1,2,3]),import.meta.url)},{path:"/audio-data",name:"audio-data",meta:{title:"获取音频数据"},component:()=>f((()=>import("./AudioView-VRdwElvc.js")),__vite__mapDeps([12,3,13,14,2,15]),import.meta.url)},{path:"/pipe-flow",name:"pipe-flow",meta:{title:"管道流动"},component:()=>f((()=>import("./PipeFlowView-CGH3d60b.js")),__vite__mapDeps([16,1,2,3]),import.meta.url)},{path:"/pipe-flow2",name:"pipe-flow2",meta:{title:"粒子管道流动"},component:()=>f((()=>import("./PipeFlowViewTwo-wXQv16X_.js")),__vite__mapDeps([17,1,2,3]),import.meta.url)},{path:"/pipe-flow3",name:"pipe-flow3",meta:{title:"粒子管道流动3"},component:()=>f((()=>import("./PipeFlowViewThree-DABiA8KG.js")),__vite__mapDeps([18,1,2,3]),import.meta.url)},{path:"/pipe-flow4",name:"pipe-flow4",meta:{title:"粒子管道流动4"},component:()=>f((()=>import("./PipeFlowViewFour-BREvQ_Nk.js")),__vite__mapDeps([19,1,2,3]),import.meta.url)},{path:"/model1",name:"model1",meta:{title:"模型1"},component:()=>f((()=>import("./ModelView1-DoUZw7TD.js")),__vite__mapDeps([20,1,2,3]),import.meta.url)},{path:"/model2",name:"model2",meta:{title:"模型2"},component:()=>f((()=>import("./ModelView2-BK_rnufG.js")),__vite__mapDeps([21,1,2,3]),import.meta.url)},{path:"/model3",name:"model3",meta:{title:"模型3"},component:()=>f((()=>import("./ModelView3-DA_dUbBe.js")),__vite__mapDeps([22,1,2,3,13,14,23]),import.meta.url)},{path:"/model4",name:"model4",meta:{title:"模型4改进版"},component:()=>f((()=>import("./ModelView4-D2x3PDXz.js")),__vite__mapDeps([24,1,2,3,13,14,25]),import.meta.url)},{path:"/model5",name:"model5",meta:{title:"模型5"},component:()=>f((()=>import("./ModelView5-DUw0ntKc.js")),__vite__mapDeps([26,1,2,3,13,14,27]),import.meta.url)},{path:"/flame",name:"flame",meta:{title:"火焰"},component:()=>f((()=>import("./FlameView-DwjnZ9Gh.js")),__vite__mapDeps([28,1,2,3]),import.meta.url)},{path:"/rader",name:"rader",meta:{title:"雷达1"},component:()=>f((()=>import("./RaderView-5ByyDdu2.js")),__vite__mapDeps([29,1,2,3]),import.meta.url)},{path:"/MoveView",name:"MoveView",meta:{title:"键盘控制"},component:()=>f((()=>import("./MoveView-V35YIlg1.js")),__vite__mapDeps([30,1,2,3]),import.meta.url)},{path:"/env",name:"env",meta:{title:"环境光"},component:()=>f((()=>import("./EnvView-7s-ehhdT.js")),__vite__mapDeps([31,1,2,3]),import.meta.url)},{path:"/dissolve",name:"dissolve",meta:{title:"溶解"},component:()=>f((()=>import("./DissolveView-DVi_gviM.js")),__vite__mapDeps([32,1,2,3]),import.meta.url)},{path:"/bagua",name:"bagua",meta:{title:"九宫八卦阵"},component:()=>f((()=>import("./BaguaView-Cuy3LtKB.js")),__vite__mapDeps([33,1,2,3]),import.meta.url)},{path:"/map",name:"map",meta:{title:"地图1"},component:()=>f((()=>import("./MapView-m-aQDPRS.js")),__vite__mapDeps([34,2,35,3,13,14,36]),import.meta.url)},{path:"/shader",name:"shader",meta:{title:"shader"},component:()=>f((()=>import("./ShaderView-Dv6G_eef.js")),__vite__mapDeps([37,1,2,3]),import.meta.url)},{path:"/xingkong",name:"xingkong",meta:{title:"星空"},component:()=>f((()=>import("./XingKongView-bDGEyuXw.js")),__vite__mapDeps([38,1,2,3]),import.meta.url)},{path:"/fireWorks",name:"fireWorks",meta:{title:"烟花"},component:()=>f((()=>import("./FireWorksView-8kVEGm2K.js")),__vite__mapDeps([39,1,2,3]),import.meta.url)},{path:"/fireWorks2",name:"fireWorks2",meta:{title:"烟花2"},component:()=>f((()=>import("./FireWorksView2-BbDJIqtF.js")),__vite__mapDeps([40,1,2,3]),import.meta.url)}]}),R=u(g);R.use(h()),R.use(I),R.mount("#app");export{O as _};