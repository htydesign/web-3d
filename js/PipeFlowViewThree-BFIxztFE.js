import{B as e}from"./base-DV9bBaHp.js";import{c as t,w as n,B as s,b as a,d as i,S as o,I as r,O as d,G as l,v as c,a as m}from"./three-g8slYH6C.js";import{d as w,z as u,A as h,g as p,j as g,F as v,o as M}from"./@vue-BDXyav1n.js";const f=w({__name:"PipeFlowViewThree",setup(w){const f=new class extends e{constructor(){super()}load(){this.init("#webgl"),this.animate(),this.createMesh()}createPoints(e){const l=e.getPoints(50),c=(new t).setFromPoints(l),{count:m,array:w}=c.attributes.position,u=new n({size:1,color:16711680}),h=new s(3,3,3);new a(h,u);const p=new t,g=new Float32Array(300);p.setAttribute("position",new i(g,3));for(let t=0;t<100;t++)g[3*t+0]=5*Math.random()-2.5,g[3*t+1]=5*Math.random()-2.5,g[3*t+2]=1*Math.random()-2.5;p.attributes.position.needsUpdate=!0,new o({uniforms:{time:{value:0}},vertexShader:"\n        \n        void main() {          \n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); \n          gl_PointSize = 5.0;\n        }\n      ",fragmentShader:"\n      \n      void main() {\n       \n        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      "});const v=new r(p,u,m),M=new d;let f=0;return v.onBeforeRender=()=>{for(let t=0;t<m;t++){const n=(f+t/m)%1,s=e.getPointAt(n);M.position.copy(s),M.updateMatrix(),v.setMatrixAt(t,M.matrix)}f+=.001,v.instanceMatrix.needsUpdate=!0},v}createMesh(){var e;const t=new l;null==(e=this.scene)||e.add(t);const n=new c([new m(-100,0,100),new m(-50,50,50),new m(0,0,0),new m(50,-50,50),new m(100,0,100)]);t.add(this.createPoints(n))}animate(){var e,t;null==(e=this.stats)||e.begin(),requestAnimationFrame((()=>{this.animate()})),this.renderer.render(this.scene,this.camera),null==(t=this.stats)||t.end()}};return u((()=>{f.load()})),h((()=>{f.gui.close(),f.gui.destroy()})),(e,t)=>(M(),p(v,null,[t[0]||(t[0]=g("div",{id:"webgl"},null,-1)),t[1]||(t[1]=g("div",{class:"title-name"},"粒子管道流动3",-1))],64))}});export{f as default};