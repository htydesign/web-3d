var t=Object.defineProperty,e=(e,r,n)=>((e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n)(e,"symbol"!=typeof r?r+"":r,n);import{B as r}from"./base-BylKBDcx.js";import{b as n,V as o,e as i,az as a,a2 as s,aA as l,N as u,a4 as m,J as v,aB as d,aC as c,S as f,D as h,r as p,W as x,l as g,i as w}from"./three-2d3GPISL.js";import{d as C,r as y,z as S,A as M,g as b,j as _,F as P,k as T,o as W,B as j,C as U,u as D}from"./@vue-B4sUqkWa.js";class z extends n{constructor(t,r={}){super(t),e(this,"isWater",!1),this.isWater=!0;const n=void 0!==r.textureWidth?r.textureWidth:512,h=void 0!==r.textureHeight?r.textureHeight:512,p=void 0!==r.clipBias?r.clipBias:0,x=void 0!==r.alpha?r.alpha:1,g=void 0!==r.time?r.time:0,w=void 0!==r.waterNormals?r.waterNormals:null,C=void 0!==r.sunDirection?r.sunDirection:new o(.70707,.70707,0),y=new i(void 0!==r.sunColor?r.sunColor:16777215),S=new i(void 0!==r.waterColor?r.waterColor:8355711),M=void 0!==r.eye?r.eye:new o(0,0,0),b=void 0!==r.distortionScale?r.distortionScale:20,_=void 0!==r.side?r.side:a,P=void 0!==r.fog&&r.fog,T=new s,W=new o,j=new o,U=new o,D=new l,z=new o(0,0,-1),F=new u,V=new o,k=new o,B=new u,R=new l,A=new m,E=new v(n,h),H={name:"MirrorShader",uniforms:d.merge([c.fog,c.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:0},textureMatrix:{value:new l},sunColor:{value:new i(8355711)},sunDirection:{value:new o(.70707,.70707,0)},eye:{value:new o},waterColor:{value:new i(5592405)}}]),vertexShader:"\n\t\t\t\tuniform mat4 textureMatrix;\n\t\t\t\tuniform float time;\n\n\t\t\t\tvarying vec4 mirrorCoord;\n\t\t\t\tvarying vec4 worldPosition;\n        varying vec2 vUv;\n\n\t\t\t\t#include <common>\n\t\t\t\t#include <fog_pars_vertex>\n\t\t\t\t#include <shadowmap_pars_vertex>\n\t\t\t\t#include <logdepthbuf_pars_vertex>\n\n\t\t\t\tvoid main() {\n          vUv = uv;\n\t\t\t\t\tmirrorCoord = modelMatrix * vec4( position, 1.0 );\n\t\t\t\t\tworldPosition = mirrorCoord.xyzw;\n\t\t\t\t\tmirrorCoord = textureMatrix * mirrorCoord;\n\t\t\t\t\tvec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\t#include <beginnormal_vertex>\n\t\t\t\t#include <defaultnormal_vertex>\n\t\t\t\t#include <logdepthbuf_vertex>\n\t\t\t\t#include <fog_vertex>\n\t\t\t\t#include <shadowmap_vertex>\n\t\t\t}",fragmentShader:"\n\t\t\t\tuniform sampler2D mirrorSampler;\n\t\t\t\tuniform float alpha;\n\t\t\t\tuniform float time;\n\t\t\t\tuniform float size;\n\t\t\t\tuniform float distortionScale;\n\t\t\t\tuniform sampler2D normalSampler;\n\t\t\t\tuniform vec3 sunColor;\n\t\t\t\tuniform vec3 sunDirection;\n\t\t\t\tuniform vec3 eye;\n\t\t\t\tuniform vec3 waterColor;\n\n\t\t\t\tvarying vec4 mirrorCoord;\n\t\t\t\tvarying vec4 worldPosition;\n        varying vec2 vUv;\n\n\n\t\t\t\tvoid main() {\n\n\n\t\t\t\t\n          vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w  ) );\n\n          vec3 outgoingLight = reflectionSample;\n          outgoingLight+=waterColor;\n\n          float a = vUv.x/1.0;\n          \n\t\t\t\t\tgl_FragColor = vec4( outgoingLight, 1.0 );\n\n\n\n\t\t\t\t}"},I=new f({name:H.name,uniforms:d.clone(H.uniforms),vertexShader:H.vertexShader,fragmentShader:H.fragmentShader,lights:!0,side:_,fog:P});I.uniforms.mirrorSampler.value=E.texture,I.uniforms.textureMatrix.value=R,I.uniforms.alpha.value=x,I.uniforms.time.value=g,I.uniforms.normalSampler.value=w,I.uniforms.sunColor.value=y,I.uniforms.waterColor.value=S,I.uniforms.sunDirection.value=C,I.uniforms.distortionScale.value=b,I.uniforms.eye.value=M,this.material=I,this.onBeforeRender=function(t,e,r){if(j.setFromMatrixPosition(this.matrixWorld),U.setFromMatrixPosition(r.matrixWorld),D.extractRotation(this.matrixWorld),W.set(0,0,1),W.applyMatrix4(D),V.subVectors(j,U),V.dot(W)>0)return;V.reflect(W).negate(),V.add(j),D.extractRotation(r.matrixWorld),z.set(0,0,-1),z.applyMatrix4(D),z.add(U),k.subVectors(j,z),k.reflect(W).negate(),k.add(j),A.position.copy(V),A.up.set(0,1,0),A.up.applyMatrix4(D),A.up.reflect(W),A.lookAt(k),A.far=r.far,A.updateMatrixWorld(),A.projectionMatrix.copy(r.projectionMatrix),R.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),R.multiply(A.projectionMatrix),R.multiply(A.matrixWorldInverse),T.setFromNormalAndCoplanarPoint(W,j),T.applyMatrix4(A.matrixWorldInverse),F.set(T.normal.x,T.normal.y,T.normal.z,T.constant);const n=A.projectionMatrix;B.x=(Math.sign(F.x)+n.elements[8])/n.elements[0],B.y=(Math.sign(F.y)+n.elements[9])/n.elements[5],B.z=-1,B.w=(1+n.elements[10])/n.elements[14],F.multiplyScalar(2/F.dot(B)),n.elements[2]=F.x,n.elements[6]=F.y,n.elements[10]=F.z+1-p,n.elements[14]=F.w,M.setFromMatrixPosition(r.matrixWorld);const o=t.getRenderTarget(),i=t.xr.enabled,a=t.shadowMap.autoUpdate;this.visible=!1,t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.setRenderTarget(E),t.state.buffers.depth.setMask(!0),!1===t.autoClear&&t.clear(),t.render(e,A),this.visible=!0,t.xr.enabled=i,t.shadowMap.autoUpdate=a,t.setRenderTarget(o);const s=r.viewport;void 0!==s&&t.state.viewport(s)}}}const F={class:"color-list"},V=["onClick"],k=C({__name:"ColorView",setup(t){const o=["#ff0000","#00ff00","#0000ff","#ffff00","#00ffff","#ff00ff","#ffffff"],a=y(0);const s=new class extends r{constructor(){super(),e(this,"uniforms",{uTime:{value:0},uStartColor:{value:new i(16776960)},uEndColor:{value:new i(16711680)}}),e(this,"isChange",!1),e(this,"reflectionCamera"),e(this,"reflectionMaterial"),e(this,"renderTarget"),e(this,"cubeCamera"),e(this,"onSelectColor",(t=>{a.value=t,this.changeColor(t)}))}load(){var t;this.init("#webgl"),this.animate(),this.create(),null==(t=this.scene)||t.remove(this.axesHelper)}create(){var t,e;const r=new f({uniforms:this.uniforms,vertexShader:"\n        uniform float uTime;\n        varying vec2 vUv;\n        void main() {\n            vUv = uv;\n            vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n            gl_Position = projectionMatrix * modelViewPosition;\n        }\n    ",fragmentShader:"\n        uniform float uTime;\n        varying vec2 vUv;\n        uniform vec3 uStartColor;\n        uniform vec3 uEndColor;\n        void main() {\n          \n            //中心点\n            vec2 center = vUv - vec2(0.5);\n\n            float negationTime = -uTime;\n\n            vec3 color = uEndColor;\n\n\n            if(center.x > uTime){\n                color = uStartColor;\n            }\n            if(center.x < negationTime){\n                color = uStartColor;\n            }\n\n            gl_FragColor = vec4(color, 1.0);\n        }\n        ",side:h}),o=new p(100,100,32,32),i=new n(o,r);i.position.y=55,null==(t=this.scene)||t.add(i);const a=new x(512);this.cubeCamera=new g(1,1e3,a);const s=new p(1e4,1e4),l=new z(s,{textureWidth:512,textureHeight:512,waterColor:3355443,distortionScale:0});l.rotation.x=-Math.PI/2,null==(e=this.scene)||e.add(l)}changeColor(t){this.isChange=!1,this.uniforms.uTime.value=0,this.uniforms.uStartColor.value=this.uniforms.uEndColor.value,this.uniforms.uEndColor.value=new i(o[t])}updateColor(){this.isChange||(this.uniforms.uTime.value<=1?this.uniforms.uTime.value+=.01:this.isChange=!0)}animate(){var t,e;null==(t=this.stats)||t.begin(),requestAnimationFrame((()=>{this.animate()})),w.update(),this.updateColor(),this.cubeCamera,this.renderer.render(this.scene,this.camera),null==(e=this.stats)||e.end()}};return S((()=>{s.load()})),M((()=>{s.gui.close(),s.gui.destroy()})),(t,e)=>(W(),b(P,null,[e[0]||(e[0]=_("div",{id:"webgl"},null,-1)),e[1]||(e[1]=_("div",{class:"title-name"},"Color",-1)),_("div",F,[(W(),b(P,null,T(o,((t,e)=>_("div",{class:j(["color-item",a.value==e?"active":""]),key:e,style:U({background:t}),onClick:t=>D(s).onSelectColor(e)},null,14,V))),64))])],64))}});export{k as default};