var e=Object.defineProperty,t=(t,a,i)=>((t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i)(t,"symbol"!=typeof a?a+"":a,i);import{B as a}from"./base-wufpB_28.js";import{i,o as s,l as n,p as r,a as l,G as o,q as c,C as m,b as d,E as p,r as h,Q as u}from"./three-CyCgWiOY.js";import{d as g,A as w,B as x,g as y,j as b,F as f,o as v}from"./@vue-89U3BwR9.js";const A=g({__name:"ModelView1",setup(e){const g=new class extends a{constructor(){super(),t(this,"texture"),t(this,"mixer")}load(){this.init("#webgl"),this.animate(),this.light(),this.gridHelper(),this.create()}create(){const e=new i,t=new s;t.setDecoderPath("./draco/"),e.setDRACOLoader(t),e.load("./models/model04.gltf",(e=>{var t,a;const i=e.scene;i.scale.set(40,40,40),null==(t=this.scene)||t.add(i),this.mixer=new n(i);const s=this.mixer.clipAction(e.animations[0]),g=this.mixer.clipAction(e.animations[2]);this.mixer.clipAction(e.animations[3]);const w=this.mixer.clipAction(e.animations[4]);this.mixer.clipAction(e.animations[5]),g.play(),s.play(),w.play(),g.timeScale=5;const x=new r(new l(0,0,1),0),y=i.clone(),b=new o;b.position.set(60,0,0),null==(a=this.scene)||a.add(b);const f=new c({color:new m(16777215),depthTest:!0,transparent:!0});y.traverse((e=>{if(e instanceof d){e.material.wireframe=!0,e.material.colorWrite=!0,e.material.transparent=!0,e.material.depthWrite=!0,e.material.map=null,e.material.renderOrder=1,e.material.clippingPlanes=[x];const t=new u,a=new l,i=new l;e.getWorldQuaternion(t),e.getWorldPosition(a),e.getWorldScale(i);const s=new p(e.geometry,20),n=new h(s);f.opacity=1,n.material=f,n.quaternion.copy(t),n.position.copy(a),n.scale.copy(i),b.add(n)}})),this.renderer.localClippingEnabled=!0;const v=this.gui.addFolder("Local Clipping"),A={get Plane(){return x.constant},set Plane(e){x.constant=e}};v.add(A,"Plane",-125,125)}))}animate(){var e,t,a;null==(e=this.stats)||e.begin(),requestAnimationFrame((()=>{this.animate()})),this.mixer&&(null==(t=this.mixer)||t.update(this.clock.getDelta())),this.renderer.render(this.scene,this.camera),null==(a=this.stats)||a.end()}};return w((()=>{g.load()})),x((()=>{g.gui.close(),g.gui.destroy()})),(e,t)=>(v(),y(f,null,[t[0]||(t[0]=b("div",{id:"webgl"},null,-1)),t[1]||(t[1]=b("div",{class:"title-name"},"模型1",-1))],64))}});export{A as default};