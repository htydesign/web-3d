var e=Object.defineProperty,s=(s,t,n)=>((s,t,n)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n)(s,"symbol"!=typeof t?t+"":t,n);import{B as t}from"./base-DbQo_w83.js";import{V as n,o as a,v as i,s as o,w as r,a as l,M as c,b as d,x as h,y as m,z as p,G as u,E as w,C as g,F as f,H as y,J as b,U as v,K as P,N as x,Q as C}from"./three-C8kJxG0b.js";import{d as A,z as F,A as j,g as W,j as H,F as M,o as N}from"./@vue-BDXyav1n.js";const D=A({__name:"ModelView1",setup(e){const A=new class extends t{constructor(){super(),s(this,"texture"),s(this,"mixer"),s(this,"composer"),s(this,"unifors",{u_center:{value:new n(.3,.3)}}),s(this,"raycaster"),s(this,"pointer",new n),s(this,"modelGrop",[])}load(){this.init("#webgl"),this.animate(),this.light(),this.gridHelper(),this.create()}create(){var e;null==(e=this.camera)||e.position.set(0,3,4);const s=new a,t=new i;t.setDecoderPath("./draco/"),s.setDRACOLoader(t),s.load("./models/model04.gltf",(e=>{var s,t,a;const i=e.scene;null==(s=this.scene)||s.add(i),this.mixer=new o(i);const A=this.mixer.clipAction(e.animations[0]),F=this.mixer.clipAction(e.animations[2]),j=this.mixer.clipAction(e.animations[4]);F.play(),A.play(),j.play(),F.timeScale=5;const W=new r(new l(0,0,1),0),H=new r(new l(0,0,-1),0),M=new c({color:16777215,wireframe:!0,transparent:!0,opacity:.75}),N=i.clone();N.traverse((e=>{e instanceof d&&(e.material=M,e.material.clippingPlanes=[W])})),i.traverse((e=>{e instanceof d&&(e.material.clippingPlanes=[H])})),null==(t=this.scene)||t.add(N);const D=i.clone(),E=new h,_=new m(75,innerWidth/innerHeight,.1,2e3);_.position.set(0,10,15),new p(_,null==(a=this.renderer)?void 0:a.domElement);const q=new u;q.position.set(10,0,0),E.add(q);const z=new w({color:new g(16777215),depthTest:!0,transparent:!0});D.traverse((e=>{if(e instanceof d){const s=new C,t=new l,n=new l;e.getWorldQuaternion(s),e.getWorldPosition(t),e.getWorldScale(n);const a=new f(e.geometry,20),i=new y(a);z.opacity=1,i.material=z,i.quaternion.copy(s),i.position.copy(t),i.scale.copy(n),q.add(i)}})),this.renderer.localClippingEnabled=!0;const G=this.gui.addFolder("Local Clipping"),L={get Plane(){return W.constant},set Plane(e){H.constant=-e,W.constant=e},get ModelPlane(){return H.constant},set ModelPlane(e){H.constant=e}};G.add(L,"Plane",-3.5,2);const O={threshold:.98,strength:1,radius:.5,exposure:1},Q=new b(this.scene,this.camera),S=new b(E,_);S.clear=!1;const V=new v(new n(window.innerWidth,window.innerHeight),1.5,.4,.85);V.threshold=O.threshold,V.strength=O.strength,V.radius=O.radius;const k=new P;this.composer=new x(this.renderer),this.composer.addPass(Q),this.composer.addPass(S),this.composer.addPass(V),this.composer.addPass(k);const B=this.gui.addFolder("bloom");B.add(O,"threshold",0,1).onChange((function(e){V.threshold=Number(e)})),B.add(O,"strength",0,3).onChange((function(e){V.strength=Number(e)})),this.gui.add(O,"radius",0,1).step(.01).onChange((function(e){V.radius=Number(e)}))}))}animate(){var e,s,t,n,a;null==(e=this.stats)||e.begin(),requestAnimationFrame((()=>{this.animate()})),this.mixer&&(null==(s=this.mixer)||s.update(this.clock.getDelta())),null==(t=this.raycaster)||t.setFromCamera(this.pointer,this.camera),null==(n=this.composer)||n.render(),null==(a=this.stats)||a.end()}};return F((()=>{A.load()})),j((()=>{A.gui.close(),A.gui.destroy()})),(e,s)=>(N(),W(M,null,[s[0]||(s[0]=H("div",{id:"webgl"},null,-1)),s[1]||(s[1]=H("div",{class:"title-name"},"模型1",-1))],64))}});export{D as default};