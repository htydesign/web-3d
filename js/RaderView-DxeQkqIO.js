var e=Object.defineProperty,n=(n,t,s)=>((n,t,s)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s)(n,"symbol"!=typeof t?t+"":t,s);import{B as t}from"./base-B0yzXU3r.js";import{P as s,S as a,b as o,B as r,M as i,a as l,C as c,z as v}from"./three-CgoiNTnZ.js";import{d as h,z as d,A as m,g as u,j as w,F as g,o as f}from"./@vue-DnmhANO5.js";const p=h({__name:"RaderView",setup(e){const h=new class extends t{constructor(){super(),n(this,"mesh"),n(this,"textBox"),n(this,"centerPerson"),n(this,"boxList",[]),n(this,"angle",0)}load(){this.init("#webgl"),this.animate(),this.gridHelper(),this.create()}create(){var e;const n=new s(100,100),t=new a({transparent:!0,uniforms:{u_angle:{value:Math.PI/6}},vertexShader:"\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n      ",fragmentShader:"\n      #define PI 3.1415926535897932384626433832795\n      precision mediump float;\n      uniform float u_angle;\n      varying vec2 vUv;\n\n      //绘制圆\n      float drawCircle(vec2 vUv,float radius){\n        float res = length(vUv);\n        float width = 0.01;\n        // 一个smoothstep形成中间黑外围白的图案, 两个smoothstept形成的图案相减就形成了白色圆圈\n        return smoothstep(radius - width, radius, res) - smoothstep(radius, radius + width, res);\n      }\n\n      //绘制实心圆\n      float drawSolidCircle(vec2 vUv,float radius){\n        float res = length(vUv);\n        return smoothstep(0.011, 0.01, res);\n      }\n\n      // 绘制扇形扫描效果, 大致的思路: 固定扇形区域、旋转片元的uv坐标、若片元旋转后的uv坐标落在扇形区域内则为相应的片元上色\n      float drawSector(vec2 vUv, float radius) {\n          // 片元的旋转角度\n          float angle = -u_angle;\n          // 使用二维旋转矩阵对片元进行旋转\n          vec2 newvUv = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * vUv;\n          vec2 x = vec2(1.0, 0.0);\n          vec2 y = vec2(0.0, 1.0);\n          // 用于判断片元旋转后与y轴的夹角, 值大于0.0则表明夹角处于0-90度之间\n          float res = dot(newvUv, y);\n          // 用于计算片元旋转后与x轴的夹角\n          float angle2 = acos(dot(x, normalize(newvUv)));\n          // 片元旋转后与x轴、y轴的夹角处于0-90度(即扇形区域的角度范围)之间、同时片元到中心点的距离小于0.45, 则满足条件\n          if(angle2 > 0.0 && angle2 < PI/2.0 && length(newvUv) < 0.45 && res > 0.0) {\n              // 片元落在扇形区间内后, 片元与x轴夹角越大片元颜色越浅\n              return  1.0 - smoothstep(0.0, PI/2.0, angle2);\n          } else {\n              return 0.0;\n          }\n      }\n\n\n      void main(){\n        vec2 newvUv = vUv;\n        // 将uv坐标原点偏移到画布中心\n        newvUv -= vec2(0.5);\n        vec3 color = vec3(0.0, 0.0, 0.0);\n\n        float circle = drawCircle(newvUv, 0.45);\n        float circle2 = drawCircle(newvUv, 0.3);\n        float circle3 = drawCircle(newvUv, 0.1);\n        color += drawSolidCircle(newvUv, 0.45);\n        color += circle + circle2 + circle3;\n\n        color += drawSector(newvUv, 0.45);\n\n        gl_FragColor = vec4(color, color.r);\n      }\n      "});this.mesh=new o(n,t),this.mesh.rotateX(-Math.PI/2),this.scene.add(this.mesh),this.textBox=new o(new r(10,20,10),new i({color:16711680})),this.textBox.position.set(1,0,-30),this.centerPerson=new o(new r(1,2,1),new i({color:16711680})),this.centerPerson.position.set(0,0,0);const l=new i({color:16777215}),c=new r(1,1,1);for(let s=0;s<500;s++){const n=20*Math.random(),t=l.clone(),s=new o(c,t);s.scale.set(5*Math.random(),n,5*Math.random()),this.boxList.push(s),s.position.set(200*Math.random()-100,s.scale.y/2,200*Math.random()-100),null==(e=this.scene)||e.add(s)}}isRader(e,n,t){const s=new l(1,0,0),a=new l(0,1,0);s.applyAxisAngle(a,-t);const o=e.position.clone().sub(n),r=o.length();o.normalize();const i=s.dot(o),h=v.degToRad(45),d=Math.cos(h/2);r<50&&(e.material.color=new c(i>d?65280:16777215))}animate(){var e,n;null==(e=this.stats)||e.begin(),requestAnimationFrame((()=>{this.animate()})),this.mesh&&(this.mesh.material.uniforms.u_angle.value+=.05),this.textBox&&this.centerPerson&&(this.angle+=.05,this.angle,Math.PI,this.boxList.forEach((e=>{this.isRader(e,this.centerPerson.position,this.angle)}))),this.renderer.render(this.scene,this.camera),null==(n=this.stats)||n.end()}};return d((()=>{h.load()})),m((()=>{h.gui.close(),h.gui.destroy()})),(e,n)=>(f(),u(g,null,[n[0]||(n[0]=w("div",{id:"webgl"},null,-1)),n[1]||(n[1]=w("div",{class:"title-name"},"雷达1",-1))],64))}});export{p as default};