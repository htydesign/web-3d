import{B as e}from"./base-DNYyDtPG.js";import{T as n,P as a,S as i,C as o,b as s}from"./three-Bp3_aRD4.js";import{d as t,z as r,A as l,g as u,j as m,F as g,o as d}from"./@vue-BDXyav1n.js";const v=t({__name:"DissolveView",setup(t){const v=new class extends e{constructor(){super()}load(){this.init("#webgl"),this.animate(),this.create()}create(){var e;const t=new n,r=t.load("./texture/xingkong.jpg"),l=t.load("./texture/noise.jpg"),u=new a(100,100),m=new i({vertexShader:"\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    ",fragmentShader:"\n      varying vec2 vUv;\n      uniform sampler2D orginalMap;\n      uniform sampler2D noiseMap;\n      uniform float uTime;\n      uniform vec3 edgeColor;\n      void main() {\n        vec3 orginalColor = texture2D(orginalMap, vUv).rgb;\n        float noiseVal = texture2D(noiseMap, vUv).g;   \n        float edgeWidth = mix(0.0, 0.2, uTime);\n        float edge =  smoothstep(noiseVal - edgeWidth, noiseVal, uTime);      \n        orginalColor += edgeColor.rgb * (1.0 - edge);        \n        gl_FragColor = vec4(orginalColor,edge);\n        \n      }\n    ",uniforms:{uTime:{value:0},orginalMap:{value:r},noiseMap:{value:l},edgeColor:{value:new o(16711680)}},transparent:!0});this.gui.add({uTime:0},"uTime",0,1).name("溶解").step(.01).onChange((e=>{m.uniforms.uTime.value=e})),null==(e=this.scene)||e.add(new s(u,m))}animate(){var e,n;null==(e=this.stats)||e.begin(),requestAnimationFrame((()=>{this.animate()})),this.renderer.render(this.scene,this.camera),null==(n=this.stats)||n.end()}};return r((()=>{v.load()})),l((()=>{v.gui.close(),v.gui.destroy()})),(e,n)=>(d(),u(g,null,[n[0]||(n[0]=m("div",{id:"webgl"},null,-1)),n[1]||(n[1]=m("div",{class:"title-name"},"溶解",-1))],64))}});export{v as default};