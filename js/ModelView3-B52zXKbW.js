var e=Object.defineProperty,a=(a,t,s)=>((a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s)(a,"symbol"!=typeof t?t+"":t,s);import{B as t}from"./base-Cr3iKErw.js";import{a as s,V as i,R as n,q as o,r,s as d,W as l,i as h,o as c,f as u,y as m,b as v,z as g,P as p,k as f,F as w,H as b,I as T,J as y,m as M,L as j,n as B,C as P,S,v as _,U as O,w as E,x as N}from"./three-Ca8PPaip.js";import{d as R,z as x,A as C,B as F}from"./@vue-BDXyav1n.js";import{_ as L}from"./index-CZGqU_ua.js";import"./pinia-BgosKWnB.js";import"./vue-router-DekMB8ps.js";const z=L(R({__name:"ModelView3",setup(e){const R=new class extends t{constructor(){super(),a(this,"meshMap",new Map),a(this,"carModel"),a(this,"isResolve",!1),a(this,"isResolveing",!0),a(this,"modelGroup",[]),a(this,"centerPoint",new s(0,0,0)),a(this,"pointer",new i),a(this,"raycaster",new n),a(this,"INTERSECTED"),a(this,"wheelGroup",[]),a(this,"materials",[]),a(this,"composer"),a(this,"sceneTube"),a(this,"cameraTube"),a(this,"rendererTube"),a(this,"angle",0)}load(){var e,a;this.init("#webgl"),this.sceneTube=new o,this.cameraTube=new r(75,innerWidth/innerHeight,.1,2e3),this.cameraTube.position.copy(this.camera.position),new d(this.cameraTube,null==(e=this.renderer)?void 0:e.domElement),this.rendererTube=new l,this.rendererTube.setSize(this.innerWidth,this.innerHeight),this.animate(),this.create(),this.createLight(),this.createTubeLight(),null==(a=this.camera)||a.position.set(0,150,250),document.addEventListener("mousemove",this.onPointerMove.bind(this))}onPointerMove(e){this.pointer.x=e.clientX/window.innerWidth*2-1,this.pointer.y=-e.clientY/window.innerHeight*2+1}create(){var e;const a=new h,t=new c;t.setDecoderPath("./draco/"),a.setDRACOLoader(t),a.load("./models/gltf/ferrari.glb",(e=>{var a;const t=e.scene;t.position.set(0,0,0),t.scale.set(50,50,50),t.rotateY(Math.PI/2),null==(a=this.sceneTube)||a.add(t),this.carModel=e.scene.children[0];const i=new u({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:.03}),n=new m({color:16777215,metalness:1,roughness:.5}),o=new u({color:16777215,metalness:.25,roughness:0,transmission:1});this.carModel.getObjectByName("body").material=i;const r={uTime:{value:0}};i.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.fragmentShader=`\n              uniform float uTime;\n              ${e.fragmentShader}\n              `,e.fragmentShader=e.fragmentShader.replace("#include <dithering_fragment>","              \n              #include <dithering_fragment>\n              \n              gl_FragColor = vec4(outgoingLight*uTime, 1.0);\n               \n              ")},i.onBeforeRender=()=>{r.uTime.value<1&&(r.uTime.value+=.005)};document.getElementById("body-color").addEventListener("input",(function(){i.color.set(this.value)})),this.carModel.getObjectByName("rim_fl").material=n,this.carModel.getObjectByName("rim_fr").material=n,this.carModel.getObjectByName("rim_rr").material=n,this.carModel.getObjectByName("rim_rl").material=n,this.carModel.getObjectByName("trim").material=n,this.carModel.getObjectByName("glass").material=o;document.getElementById("details-color").addEventListener("input",(function(){n.color.set(this.value)}));document.getElementById("glass-color").addEventListener("input",(function(){o.color.set(this.value)}));const d=this.carModel.getObjectByName("wheel_fl"),l=this.carModel.getObjectByName("wheel_fr"),h=this.carModel.getObjectByName("wheel_rl"),c=this.carModel.getObjectByName("wheel_rr");this.wheelGroup=[d,l,h,c],this.carModel.traverse((e=>{e instanceof v&&(e.castShadow=!0,this.modelGroup.push(e),this.meshMap.set(e.name,{originalPosition:e.position.clone(),targetPosition:new s(5-10*Math.random(),5-10*Math.random(),5-10*Math.random())}))})),new g.Tween(this.camera.position).to({x:0,y:100,z:150},2e3).easing(g.Easing.Quadratic.Out).start().onComplete((()=>{this.isResolveing=!1}));const p={resolve:()=>{this.isResolve=!this.isResolve,this.isResolveing=!0,this.meshMap.forEach(((e,a)=>{var t;const s=null==(t=this.carModel)?void 0:t.getObjectByName(a);new g.Tween(s.position).to(this.isResolve?e.targetPosition:e.originalPosition,2e3).easing(g.Easing.Quadratic.Out).start().onComplete((()=>{this.isResolveing=!1}))}))}};this.gui.addFolder("模型").add(p,"resolve").name("分解")}),void 0,(function(e){}));const i=new p(500,500),n=new f({color:1118481}),o=new v(i,n);o.receiveShadow=!0,o.rotateX(-Math.PI/2),null==(e=this.scene)||e.add(o)}createLight(){var e,a,t,s;const i=new w(4210752,10);null==(e=this.sceneTube)||e.add(i);const n=new b(16777215,1e3);n.position.set(100,100,0),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=.5,n.shadow.camera.far=1e3,null==(a=this.sceneTube)||a.add(n);const o=new T(n,10);null==(t=this.sceneTube)||t.add(o);const r=new y(16777215,5);r.position.set(0,50,0),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.near=.5,r.shadow.camera.far=1e3,null==(s=this.sceneTube)||s.add(r)}createTubeLight(){var e;const a=new M;a.add(new j(new s(-250,0,0),new s(250,0,0)));const t=new B(a,128,2,8,!1);for(let s=0;s<500;s++){const a={uColor:{value:new P(Math.random(),Math.random(),Math.random())},uSpeed:{value:1},uTime:{value:Math.random()},uFade:{value:new i(0,.36)},uDirection:{value:1}},n=new S({transparent:!0,uniforms:a,vertexShader:"\n          varying vec2 vUv;\n           uniform float uTime;\n          void main() {\n            vUv = uv;\n            vec3 newPosition = position;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n          }\n        ",fragmentShader:"\n          varying vec2 vUv;\n          uniform float uSpeed;\n          uniform float uTime;\n          uniform vec2 uFade;\n          uniform vec3 uColor;\n          uniform float uDirection;\n          void main() {\n            vec3 color = uColor;\n            //流动方向\n            float s = -uTime * uSpeed;\n            float v = 0.0;\n            if(uDirection == 1.0) {\n              v = vUv.x;\n            } else {\n              v = -vUv.x;\n            }\n            \n            float d = mod((v+s) * 1.0 , 1.0);\n            \n            if(d > uFade.y){\n              discard;\n            }else {\n              //平滑透明度渐变\n              float alpha = smoothstep(uFade.x, uFade.y, d);\n              //透明度太小时不显示\n              if(alpha < 0.001){\n                  discard;\n              }\n              gl_FragColor = vec4(color, alpha);\n            }\n          }\n        "}),o=.005*Math.random()+.005;n.onBeforeRender=()=>{n.uniforms.uTime.value+=o,n.uniforms.uTime.value>1&&(n.uniforms.uTime.value=0)},this.materials.push(n);const r=new v(t,n);r.position.z=1*s-30-250+30,r.position.x=0,null==(e=this.scene)||e.add(r)}const n=new _(this.scene,this.camera),o=new _(this.sceneTube,this.cameraTube);o.clear=!1;const r={threshold:.68,strength:1.8,radius:.05,exposure:1},d=new O(new i(window.innerWidth,window.innerHeight),1.5,.4,.85);d.threshold=r.threshold,d.strength=r.strength,d.radius=r.radius;const l=new E;this.composer=new N(this.renderer),this.composer.addPass(n),this.composer.addPass(d),this.composer.addPass(o),this.composer.addPass(l);const h=this.gui.addFolder("bloom");h.add(r,"threshold",0,1).onChange((function(e){d.threshold=Number(e)})),h.add(r,"strength",0,3).onChange((function(e){d.strength=Number(e)})),this.gui.add(r,"radius",0,1).step(.01).onChange((function(e){d.radius=Number(e)}))}updateMaterials(){this.materials.forEach((e=>{e.uniforms.uTime.value+=.01,e.uniforms.uTime.value>=1&&(e.uniforms.uTime.value=0)}))}animate(){var e,a,t;null==(e=this.stats)||e.begin(),requestAnimationFrame((()=>{this.animate()})),this.isResolve||this.isResolveing||this.wheelGroup.forEach((e=>{e.rotation.x-=.1})),g.update(),null==(a=this.composer)||a.render(),null==(t=this.stats)||t.end()}};return x((()=>{R.load()})),C((()=>{R.gui.close(),R.gui.destroy()})),(e,a)=>a[0]||(a[0]=F('<div id="webgl" data-v-1d92a204></div><div class="title-name" data-v-1d92a204>模型3</div><div class="color-picker" data-v-1d92a204><span class="colorPicker" data-v-1d92a204><input id="body-color" type="color" value="#ff0000" data-v-1d92a204><br data-v-1d92a204>Body</span><span class="colorPicker" data-v-1d92a204><input id="details-color" type="color" value="#ffffff" data-v-1d92a204><br data-v-1d92a204>Details</span><span class="colorPicker" data-v-1d92a204><input id="glass-color" type="color" value="#ffffff" data-v-1d92a204><br data-v-1d92a204>Glass</span></div>',3))}}),[["__scopeId","data-v-1d92a204"]]);export{z as default};