const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LightView-CEjxKbLN.js","./base-BPbSei19.js","./three-BsO_Agh6.js","./@vue-DISYwsDo.js","./LightTwoView-CBQE_0UK.js","./LightThreeView-CC7tp3DT.js","./LightFourView-BAGS_78G.js","./LightFiveView-JK8L_YZZ.js","./ParticlesView-C-7Pq0VO.js","./ModelParticlesView-D5Ho4ZMo.js","./RainShaderView-Bkj0rTqa.js","./EnergyShieldView-CsC3L7dk.js","./AudioView-BJp6mxwB.js","./pinia-DkR6u-JQ.js","./vue-router-DW_NBBT6.js","../css/AudioView-BfdMelhm.css","./PipeFlowView-CXu-MjDU.js","./PipeFlowViewTwo-C2HYOZ0d.js","./PipeFlowViewThree-DayADz0v.js","./PipeFlowViewFour-C6BOLTq3.js","./ModelView1-ReI4it_d.js","./ModelView2-evdC4gt-.js","./ModelView3-Y6KRqJN9.js","../css/ModelView3-DmYrolRG.css","./ModelView4-BlcbutdR.js","../css/ModelView4-BL9dCmSF.css","./ModelView5-B2D4CnjZ.js","../css/ModelView5-BV0ojhGl.css","./FlameView-CZnSX_Qs.js","./RaderView-CdbeYS-F.js","./MoveView-D-uaq-IJ.js","./EnvView-5p2qD4P1.js","./DissolveView-DmV58usB.js","./BaguaView-pyXras6v.js","./MapView-DnOSN2cv.js","./@amap-DgZfE03j.js","../css/MapView-DMg3XSuL.css","./ShaderView-C80B7aJc.js","./XingKongView-QMnvtMa5.js","./FireWorksView-CSJDyo1O.js","./FireWorksView2-CJa6mMIs.js","./FogView-B2vbYZeX.js","./MeasureView-D63tkM8K.js","./canvasTexture-CB5P4OHK.js","../css/MeasureView-Dpw5kQgL.css","./HeatMapView-CY85mQyX.js","../css/HeatMapView-Bhrh5Uj9.css","./GalaxyView-DOykWCXl.js","../css/GalaxyView-Dc_b2uJy.css","./ColorView-DEvLphpa.js","../css/ColorView-BTZYWlJX.css","./CarModel-Y4lPcfur.js","./MusicView-BcJkrGhi.js","../css/MusicView-CMtjKdRN.css","./SceneTransition-IMROu-Ni.js"])))=>i.map(i=>d[i]);
import{d as e,f as t,u as o,o as m,g as i,j as a,F as r,k as p,l as n,q as _,t as l,v as s,x as c,y as u}from"./@vue-DISYwsDo.js";import{c as E}from"./pinia-DkR6u-JQ.js";import{R as h,u as V,c as d,a as w}from"./vue-router-DW_NBBT6.js";import{_ as L}from"./three-BsO_Agh6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const P=e({__name:"App",setup:e=>(e,i)=>(m(),t(o(h)))}),g={class:"container"},j={key:0},f={class:"link"},T=["src"],A=(e,t)=>{const o=e.__vccOpts||e;for(const[m,i]of t)o[m]=i;return o},I=A(e({__name:"IndexView",setup(e){const t=[...V().options.routes].reverse();return(e,u)=>{const E=n("router-link");return m(),i("div",g,[a("ul",null,[(m(!0),i(r,null,p(o(t),(e=>(m(),i(r,{key:e.path},["/"!==e.path?(m(),i("li",j,[_(E,{to:e.path},{default:l((()=>[a("div",f,[a("img",{src:`./texture/images/${e.name}.png`,alt:""},null,8,T),a("p",null,c(e.meta&&e.meta.title),1)])])),_:2},1032,["to"])])):s("",!0)],64)))),128))])])}}}),[["__scopeId","data-v-cefe6788"]]),O=d({history:w("./"),routes:[{path:"/",name:"home",component:I},{path:"/light",name:"light",meta:{title:"建筑光线"},component:()=>L((()=>import("./LightView-CEjxKbLN.js")),__vite__mapDeps([0,1,2,3]),import.meta.url)},{path:"/light2",name:"light2",meta:{title:"建筑扫光2"},component:()=>L((()=>import("./LightTwoView-CBQE_0UK.js")),__vite__mapDeps([4,1,2,3]),import.meta.url)},{path:"/light3",name:"light3",meta:{title:"建筑扫光3"},component:()=>L((()=>import("./LightThreeView-CC7tp3DT.js")),__vite__mapDeps([5,1,2,3]),import.meta.url)},{path:"/light4",name:"light4",meta:{title:"灯光"},component:()=>L((()=>import("./LightFourView-BAGS_78G.js")),__vite__mapDeps([6,1,2,3]),import.meta.url)},{path:"/light5",name:"light5",meta:{title:"灯光2"},component:()=>L((()=>import("./LightFiveView-JK8L_YZZ.js")),__vite__mapDeps([7,1,2,3]),import.meta.url)},{path:"/particles",name:"particles",meta:{title:"几何体粒子变换"},component:()=>L((()=>import("./ParticlesView-C-7Pq0VO.js")),__vite__mapDeps([8,1,2,3]),import.meta.url)},{path:"/model-particles",name:"model-particles",meta:{title:"模型粒子变换"},component:()=>L((()=>import("./ModelParticlesView-D5Ho4ZMo.js")),__vite__mapDeps([9,1,2,3]),import.meta.url)},{path:"/rain",name:"rain",meta:{title:"下雨"},component:()=>L((()=>import("./RainShaderView-Bkj0rTqa.js")),__vite__mapDeps([10,1,2,3]),import.meta.url)},{path:"/energy-shield",name:"energy-shield",meta:{title:"能量罩"},component:()=>L((()=>import("./EnergyShieldView-CsC3L7dk.js")),__vite__mapDeps([11,1,2,3]),import.meta.url)},{path:"/audio-data",name:"audio-data",meta:{title:"获取音频数据"},component:()=>L((()=>import("./AudioView-BJp6mxwB.js")),__vite__mapDeps([12,3,13,14,2,15]),import.meta.url)},{path:"/pipe-flow",name:"pipe-flow",meta:{title:"管道流动"},component:()=>L((()=>import("./PipeFlowView-CXu-MjDU.js")),__vite__mapDeps([16,1,2,3]),import.meta.url)},{path:"/pipe-flow2",name:"pipe-flow2",meta:{title:"粒子管道流动"},component:()=>L((()=>import("./PipeFlowViewTwo-C2HYOZ0d.js")),__vite__mapDeps([17,1,2,3]),import.meta.url)},{path:"/pipe-flow3",name:"pipe-flow3",meta:{title:"粒子管道流动3"},component:()=>L((()=>import("./PipeFlowViewThree-DayADz0v.js")),__vite__mapDeps([18,1,2,3]),import.meta.url)},{path:"/pipe-flow4",name:"pipe-flow4",meta:{title:"粒子管道流动4"},component:()=>L((()=>import("./PipeFlowViewFour-C6BOLTq3.js")),__vite__mapDeps([19,1,2,3]),import.meta.url)},{path:"/model1",name:"model1",meta:{title:"模型1"},component:()=>L((()=>import("./ModelView1-ReI4it_d.js")),__vite__mapDeps([20,1,2,3]),import.meta.url)},{path:"/model2",name:"model2",meta:{title:"模型2"},component:()=>L((()=>import("./ModelView2-evdC4gt-.js")),__vite__mapDeps([21,1,2,3]),import.meta.url)},{path:"/model3",name:"model3",meta:{title:"模型3"},component:()=>L((()=>import("./ModelView3-Y6KRqJN9.js")),__vite__mapDeps([22,1,2,3,13,14,23]),import.meta.url)},{path:"/model4",name:"model4",meta:{title:"模型4改进版"},component:()=>L((()=>import("./ModelView4-BlcbutdR.js")),__vite__mapDeps([24,1,2,3,13,14,25]),import.meta.url)},{path:"/model5",name:"model5",meta:{title:"模型5"},component:()=>L((()=>import("./ModelView5-B2D4CnjZ.js")),__vite__mapDeps([26,1,2,3,13,14,27]),import.meta.url)},{path:"/flame",name:"flame",meta:{title:"火焰"},component:()=>L((()=>import("./FlameView-CZnSX_Qs.js")),__vite__mapDeps([28,1,2,3]),import.meta.url)},{path:"/rader",name:"rader",meta:{title:"雷达1"},component:()=>L((()=>import("./RaderView-CdbeYS-F.js")),__vite__mapDeps([29,1,2,3]),import.meta.url)},{path:"/MoveView",name:"MoveView",meta:{title:"键盘控制"},component:()=>L((()=>import("./MoveView-D-uaq-IJ.js")),__vite__mapDeps([30,1,2,3]),import.meta.url)},{path:"/env",name:"env",meta:{title:"环境光"},component:()=>L((()=>import("./EnvView-5p2qD4P1.js")),__vite__mapDeps([31,1,2,3]),import.meta.url)},{path:"/dissolve",name:"dissolve",meta:{title:"溶解"},component:()=>L((()=>import("./DissolveView-DmV58usB.js")),__vite__mapDeps([32,1,2,3]),import.meta.url)},{path:"/bagua",name:"bagua",meta:{title:"九宫八卦阵"},component:()=>L((()=>import("./BaguaView-pyXras6v.js")),__vite__mapDeps([33,1,2,3]),import.meta.url)},{path:"/map",name:"map",meta:{title:"地图1"},component:()=>L((()=>import("./MapView-DnOSN2cv.js")),__vite__mapDeps([34,2,35,3,13,14,36]),import.meta.url)},{path:"/shader",name:"shader",meta:{title:"shader"},component:()=>L((()=>import("./ShaderView-C80B7aJc.js")),__vite__mapDeps([37,1,2,3]),import.meta.url)},{path:"/xingkong",name:"xingkong",meta:{title:"星空"},component:()=>L((()=>import("./XingKongView-QMnvtMa5.js")),__vite__mapDeps([38,1,2,3]),import.meta.url)},{path:"/fireWorks",name:"fireWorks",meta:{title:"烟花"},component:()=>L((()=>import("./FireWorksView-CSJDyo1O.js")),__vite__mapDeps([39,1,2,3]),import.meta.url)},{path:"/fireWorks2",name:"fireWorks2",meta:{title:"烟花2"},component:()=>L((()=>import("./FireWorksView2-CJa6mMIs.js")),__vite__mapDeps([40,1,2,3]),import.meta.url)},{path:"/fog",name:"fog",meta:{title:"雾化"},component:()=>L((()=>import("./FogView-B2vbYZeX.js")),__vite__mapDeps([41,1,2,3]),import.meta.url)},{path:"/measure",name:"measure",meta:{title:"测量"},component:()=>L((()=>import("./MeasureView-D63tkM8K.js")),__vite__mapDeps([42,1,2,43,3,13,14,44]),import.meta.url)},{path:"/heatMap",name:"heatMap",meta:{title:"热力图"},component:()=>L((()=>import("./HeatMapView-CY85mQyX.js")),__vite__mapDeps([45,1,2,3,13,14,46]),import.meta.url)},{path:"/galaxy",name:"galaxy",meta:{title:"银河系"},component:()=>L((()=>import("./GalaxyView-DOykWCXl.js")),__vite__mapDeps([47,1,2,3,13,14,48]),import.meta.url)},{path:"/color",name:"color",meta:{title:"color变换"},component:()=>L((()=>import("./ColorView-DEvLphpa.js")),__vite__mapDeps([49,1,2,3,50]),import.meta.url)},{path:"/car-model",name:"car-model",meta:{title:"汽车模型"},component:()=>L((()=>import("./CarModel-Y4lPcfur.js")),__vite__mapDeps([51,1,2,43,3,50]),import.meta.url)},{path:"/music",name:"music",meta:{title:"music"},component:()=>L((()=>import("./MusicView-BcJkrGhi.js")),__vite__mapDeps([52,1,2,3,13,14,53]),import.meta.url)},{path:"/scene-transition",name:"scene-transition",meta:{title:"场景切换"},component:()=>L((()=>import("./SceneTransition-IMROu-Ni.js")),__vite__mapDeps([54,2,3,50]),import.meta.url)}]}),R=u(P);R.use(E()),R.use(O),R.mount("#app");export{A as _};