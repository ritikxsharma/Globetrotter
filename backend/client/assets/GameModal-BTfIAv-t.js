import{g as W,a as z,r as b,u as U,j as o,s as j,c as G,b as Q,d as C,m as D,e as O,l as st,f as ot,h as Y,k as _,R as S,i as nt,n as R,o as k,T as v,B as M,p as B,q as V,t as ct,v as it,w as lt,x as ut,y as ht,L as ft}from"./index-DDKBHAyM.js";import{P as dt,u as pt,I as T}from"./IconButton-BMjDXWNV.js";import{M as gt}from"./Modal-DjufTmwy.js";function mt(a){return W("MuiCard",a)}z("MuiCard",["root"]);const vt=a=>{const{classes:t}=a;return Q({root:["root"]},mt,t)},xt=j(dt,{name:"MuiCard",slot:"Root",overridesResolver:(a,t)=>t.root})({overflow:"hidden"}),yt=b.forwardRef(function(t,e){const i=U({props:t,name:"MuiCard"}),{className:n,raised:r=!1,...s}=i,c={...i,raised:r},l=vt(c);return o.jsx(xt,{className:G(l.root,n),elevation:r?8:void 0,ref:e,ownerState:c,...s})});function bt(a){return W("MuiCardContent",a)}z("MuiCardContent",["root"]);const Ct=a=>{const{classes:t}=a;return Q({root:["root"]},bt,t)},wt=j("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(a,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),It=b.forwardRef(function(t,e){const i=U({props:t,name:"MuiCardContent"}),{className:n,component:r="div",...s}=i,c={...i,component:r},l=Ct(c);return o.jsx(wt,{as:r,className:G(l.root,n),ownerState:c,ref:e,...s})});function jt(a){return W("MuiLinearProgress",a)}z("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const N=4,$=_`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,Mt=typeof $!="string"?Y`
        animation: ${$} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,E=_`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,Pt=typeof E!="string"?Y`
        animation: ${E} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,q=_`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,Ot=typeof q!="string"?Y`
        animation: ${q} 3s infinite linear;
      `:null,kt=a=>{const{classes:t,variant:e,color:i}=a,n={root:["root",`color${C(i)}`,e],dashed:["dashed",`dashedColor${C(i)}`],bar1:["bar","bar1",`barColor${C(i)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",e!=="buffer"&&`barColor${C(i)}`,e==="buffer"&&`color${C(i)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return Q(n,jt,t)},X=(a,t)=>a.vars?a.vars.palette.LinearProgress[`${t}Bg`]:a.palette.mode==="light"?st(a.palette[t].main,.62):ot(a.palette[t].main,.5),Rt=j("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[`color${C(e.color)}`],t[e.variant]]}})(D(({theme:a})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(a.palette).filter(O()).map(([t])=>({props:{color:t},style:{backgroundColor:X(a,t)}})),{props:({ownerState:t})=>t.color==="inherit"&&t.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),Ft=j("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.dashed,t[`dashedColor${C(e.color)}`]]}})(D(({theme:a})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(a.palette).filter(O()).map(([t])=>{const e=X(a,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`}}})]})),Ot||{animation:`${q} 3s infinite linear`}),St=j("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.bar,t.bar1,t[`barColor${C(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&t.bar1Indeterminate,e.variant==="determinate"&&t.bar1Determinate,e.variant==="buffer"&&t.bar1Buffer]}})(D(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(a.palette).filter(O()).map(([t])=>({props:{color:t},style:{backgroundColor:(a.vars||a).palette[t].main}})),{props:{variant:"determinate"},style:{transition:`transform .${N}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${N}s linear`}},{props:({ownerState:t})=>t.variant==="indeterminate"||t.variant==="query",style:{width:"auto"}},{props:({ownerState:t})=>t.variant==="indeterminate"||t.variant==="query",style:Mt||{animation:`${$} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),Dt=j("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.bar,t.bar2,t[`barColor${C(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&t.bar2Indeterminate,e.variant==="buffer"&&t.bar2Buffer]}})(D(({theme:a})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(a.palette).filter(O()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(a.vars||a).palette[t].main}})),{props:({ownerState:t})=>t.variant!=="buffer"&&t.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:t})=>t.variant!=="buffer"&&t.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(a.palette).filter(O()).map(([t])=>({props:{color:t,variant:"buffer"},style:{backgroundColor:X(a,t),transition:`transform .${N}s linear`}})),{props:({ownerState:t})=>t.variant==="indeterminate"||t.variant==="query",style:{width:"auto"}},{props:({ownerState:t})=>t.variant==="indeterminate"||t.variant==="query",style:Pt||{animation:`${E} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),Bt=b.forwardRef(function(t,e){const i=U({props:t,name:"MuiLinearProgress"}),{className:n,color:r="primary",value:s,valueBuffer:c,variant:l="indeterminate",...x}=i,u={...i,color:r,variant:l},y=kt(u),w=pt(),p={},g={bar1:{},bar2:{}};if((l==="determinate"||l==="buffer")&&s!==void 0){p["aria-valuenow"]=Math.round(s),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let f=s-100;w&&(f=-f),g.bar1.transform=`translateX(${f}%)`}if(l==="buffer"&&c!==void 0){let f=(c||0)-100;w&&(f=-f),g.bar2.transform=`translateX(${f}%)`}return o.jsxs(Rt,{className:G(y.root,n),ownerState:u,role:"progressbar",...p,ref:e,...x,children:[l==="buffer"?o.jsx(Ft,{className:y.dashed,ownerState:u}):null,o.jsx(St,{className:y.bar1,ownerState:u,style:g.bar1}),l==="determinate"?null:o.jsx(Dt,{className:y.bar2,ownerState:u,style:g.bar2})]})});var A,tt;function Tt(){if(tt)return A;tt=1;var a={linear:function(t,e,i,n){var r=i-e;return r*t/n+e},easeInQuad:function(t,e,i,n){var r=i-e;return r*(t/=n)*t+e},easeOutQuad:function(t,e,i,n){var r=i-e;return-r*(t/=n)*(t-2)+e},easeInOutQuad:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t+e:-r/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,n){var r=i-e;return r*(t/=n)*t*t+e},easeOutCubic:function(t,e,i,n){var r=i-e;return r*((t=t/n-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,n){var r=i-e;return r*(t/=n)*t*t*t+e},easeOutQuart:function(t,e,i,n){var r=i-e;return-r*((t=t/n-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t*t*t+e:-r/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,n){var r=i-e;return r*(t/=n)*t*t*t*t+e},easeOutQuint:function(t,e,i,n){var r=i-e;return r*((t=t/n-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?r/2*t*t*t*t*t+e:r/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,n){var r=i-e;return-r*Math.cos(t/n*(Math.PI/2))+r+e},easeOutSine:function(t,e,i,n){var r=i-e;return r*Math.sin(t/n*(Math.PI/2))+e},easeInOutSine:function(t,e,i,n){var r=i-e;return-r/2*(Math.cos(Math.PI*t/n)-1)+e},easeInExpo:function(t,e,i,n){var r=i-e;return t==0?e:r*Math.pow(2,10*(t/n-1))+e},easeOutExpo:function(t,e,i,n){var r=i-e;return t==n?e+r:r*(-Math.pow(2,-10*t/n)+1)+e},easeInOutExpo:function(t,e,i,n){var r=i-e;return t===0?e:t===n?e+r:(t/=n/2)<1?r/2*Math.pow(2,10*(t-1))+e:r/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,i,n){var r=i-e;return-r*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOutCirc:function(t,e,i,n){var r=i-e;return r*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOutCirc:function(t,e,i,n){var r=i-e;return(t/=n/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+e:r/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,i,n){var r=i-e,s,c,l;return l=1.70158,c=0,s=r,t===0?e:(t/=n)===1?e+r:(c||(c=n*.3),s<Math.abs(r)?(s=r,l=c/4):l=c/(2*Math.PI)*Math.asin(r/s),-(s*Math.pow(2,10*(t-=1))*Math.sin((t*n-l)*(2*Math.PI)/c))+e)},easeOutElastic:function(t,e,i,n){var r=i-e,s,c,l;return l=1.70158,c=0,s=r,t===0?e:(t/=n)===1?e+r:(c||(c=n*.3),s<Math.abs(r)?(s=r,l=c/4):l=c/(2*Math.PI)*Math.asin(r/s),s*Math.pow(2,-10*t)*Math.sin((t*n-l)*(2*Math.PI)/c)+r+e)},easeInOutElastic:function(t,e,i,n){var r=i-e,s,c,l;return l=1.70158,c=0,s=r,t===0?e:(t/=n/2)===2?e+r:(c||(c=n*(.3*1.5)),s<Math.abs(r)?(s=r,l=c/4):l=c/(2*Math.PI)*Math.asin(r/s),t<1?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*n-l)*(2*Math.PI)/c))+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*n-l)*(2*Math.PI)/c)*.5+r+e)},easeInBack:function(t,e,i,n,r){var s=i-e;return r===void 0&&(r=1.70158),s*(t/=n)*t*((r+1)*t-r)+e},easeOutBack:function(t,e,i,n,r){var s=i-e;return r===void 0&&(r=1.70158),s*((t=t/n-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(t,e,i,n,r){var s=i-e;return r===void 0&&(r=1.70158),(t/=n/2)<1?s/2*(t*t*(((r*=1.525)+1)*t-r))+e:s/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+e},easeInBounce:function(t,e,i,n){var r=i-e,s;return s=a.easeOutBounce(n-t,0,r,n),r-s+e},easeOutBounce:function(t,e,i,n){var r=i-e;return(t/=n)<1/2.75?r*(7.5625*t*t)+e:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+e:r*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,i,n){var r=i-e,s;return t<n/2?(s=a.easeInBounce(t*2,0,r,n),s*.5+e):(s=a.easeOutBounce(t*2-n,0,r,n),s*.5+r*.5+e)}};return A=a,A}var At=Tt();function Lt(a){return a*Math.PI/180}function d(a,t){return a+Math.random()*(t-a)}function Nt(a,t){return Math.floor(a+Math.random()*(t-a+1))}var P;(function(a){a[a.Circle=0]="Circle",a[a.Square=1]="Square",a[a.Strip=2]="Strip"})(P||(P={}));var I;(function(a){a[a.Positive=1]="Positive",a[a.Negative=-1]="Negative"})(I||(I={}));class $t{constructor(t,e,i,n){this.getOptions=e;const{colors:r,initialVelocityX:s,initialVelocityY:c}=this.getOptions();this.context=t,this.x=i,this.y=n,this.w=d(5,20),this.h=d(5,20),this.radius=d(5,10),this.vx=typeof s=="number"?d(-s,s):d(s.min,s.max),this.vy=typeof c=="number"?d(-c,0):d(c.min,c.max),this.shape=Nt(0,2),this.angle=Lt(d(0,360)),this.angularSpin=d(-.2,.2),this.color=r[Math.floor(Math.random()*r.length)],this.rotateY=d(0,1),this.rotationDirection=d(0,1)?I.Positive:I.Negative}update(){const{gravity:t,wind:e,friction:i,opacity:n,drawShape:r}=this.getOptions();this.x+=this.vx,this.y+=this.vy,this.vy+=t,this.vx+=e,this.vx*=i,this.vy*=i,this.rotateY>=1&&this.rotationDirection===I.Positive?this.rotationDirection=I.Negative:this.rotateY<=-1&&this.rotationDirection===I.Negative&&(this.rotationDirection=I.Positive);const s=.1*this.rotationDirection;if(this.rotateY+=s,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=n,this.context.lineCap="round",this.context.lineWidth=2,r&&typeof r=="function")r.call(this,this.context);else switch(this.shape){case P.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case P.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case P.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class Et{constructor(t,e){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenInitTime=Date.now(),this.particles=[],this.particlesGenerated=0,this.removeParticleAt=n=>{this.particles.splice(n,1)},this.getParticle=()=>{const n=d(this.x,this.w+this.x),r=d(this.y,this.h+this.y);return new $t(this.context,this.getOptions,n,r)},this.animate=()=>{const{canvas:n,context:r,particlesGenerated:s,lastNumberOfPieces:c}=this,{run:l,recycle:x,numberOfPieces:u,debug:y,tweenFunction:w,tweenDuration:p}=this.getOptions();if(!l)return!1;const g=this.particles.length,f=x?g:s,h=Date.now();if(f<u){c!==u&&(this.tweenInitTime=h,this.lastNumberOfPieces=u);const{tweenInitTime:m}=this,F=h-m>p?p:Math.max(0,h-m),at=w(F,f,u,p),J=Math.round(at-f);for(let Z=0;Z<J;Z++)this.particles.push(this.getParticle());this.particlesGenerated+=J}return y&&(r.font="12px sans-serif",r.fillStyle="#333",r.textAlign="right",r.fillText(`Particles: ${g}`,n.width-10,n.height-20)),this.particles.forEach((m,F)=>{m.update(),(m.y>n.height||m.y<-100||m.x>n.width+100||m.x<-100)&&(x&&f<=u?this.particles[F]=this.getParticle():this.removeParticleAt(F))}),g>0||f<u},this.canvas=t;const i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.getOptions=e}}const K={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:At.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class qt{constructor(t,e){this.lastFrameTime=Date.now(),this.setOptionsWithDefaults=n=>{const r={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...r,...K,...n},Object.assign(this,n.confettiSource)},this.update=()=>{const{options:{run:n,onConfettiComplete:r,frameRate:s},canvas:c,context:l}=this;if(s){const x=Date.now(),u=x-this.lastFrameTime;if(u<1e3/s){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=x-u%s}n&&(l.fillStyle="white",l.clearRect(0,0,c.width,c.height)),this.generator.animate()?this.rafId=requestAnimationFrame(this.update):(r&&typeof r=="function"&&this.generator.particlesGenerated>0&&r.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.generator=new Et(this.canvas,()=>this.options),this.options=e,this.update()}get options(){return this._options}set options(t){var n,r;const e=(n=this._options)==null?void 0:n.run,i=(r=this._options)==null?void 0:r.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&i===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&e===!1&&this.update()}}const Wt=S.createRef();class H extends S.Component{constructor(t){super(t),this.canvas=S.createRef(),this.canvas=t.canvasRef||Wt}componentDidMount(){if(this.canvas.current){const t=L(this.props)[0];this.confetti=new qt(this.canvas.current,t)}}componentDidUpdate(){const t=L(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,e]=L(this.props),i={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...e.style};return o.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...e,style:i})}}H.defaultProps={...K};H.displayName="ReactConfetti";function L(a){const t={},e={},i={},n=[...Object.keys(K),"confettiSource","drawShape","onConfettiComplete","frameRate"],r=["canvasRef"];for(const s in a){const c=a[s];n.includes(s)?t[s]=c:r.includes(s)?r[s]=c:i[s]=c}return[t,i,e]}const zt=S.forwardRef((a,t)=>o.jsx(H,{canvasRef:t,...a})),et=nt(o.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),rt=nt(o.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight"),Ut=({isOpen:a})=>{const{correctAnswers:t,incorrectAnswers:e}=R(i=>i.game);return o.jsx(k.div,{animate:{y:a?0:"-100%",width:a?"18vw":0,opacity:a?1:0,minWidth:a?"140px":0},transition:{duration:1,ease:"easeInOut",type:"spring"},style:{height:"100%",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"hidden",textAlign:"center",background:"linear-gradient(329deg, #8EC5FC, #E0C3FC)"},children:a&&o.jsxs(o.Fragment,{children:[o.jsx(v,{variant:"h6",sx:{fontWeight:"bold",mb:2},children:"Game Stats"}),o.jsxs(M,{sx:{position:"relative",width:"80%",height:"100px",borderRadius:"12px",background:"rgba(211, 163, 163, 0.3)",textAlign:"center ",display:"flex",flexDirection:"column",overflow:"hidden"},children:[o.jsx(v,{variant:"h6",sx:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"},children:t}),o.jsx(v,{variant:"h6",sx:{textAlign:"center",background:"rgb(36, 224, 133)",borderRadius:"0 12px 0 0"},children:"Correct"})]}),o.jsxs(M,{sx:{mt:2,position:"relative",width:"80%",height:"100px",borderRadius:"12px",background:"rgba(211, 163, 163, 0.3)",textAlign:"center ",display:"flex",flexDirection:"column",overflow:"hidden"},children:[o.jsx(v,{variant:"h6",sx:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"},children:e}),o.jsx(v,{variant:"h6",sx:{textAlign:"center",background:"red",borderRadius:"0 12px 0 0"},children:"Incorrect"})]}),o.jsxs(v,{variant:"h6",sx:{fontWeight:"bold",mt:3},children:["Score: ",t-e]})]})})},Gt=()=>{const a=B(),{showFeedback:t,currentQuestion:e,timeLeft:i,isCorrect:n}=R(s=>s.game),r=()=>{a(ct()),a(it())};return o.jsx(o.Fragment,{children:t&&o.jsxs(o.Fragment,{children:[o.jsx(k.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.7},children:o.jsx(v,{variant:"h6",textAlign:"center",children:i===0?"⏳ Time ran out!":n?"🎉 Correct!":"😢 Incorrect!"})}),o.jsxs(v,{textAlign:"center",children:["Fun fact: ",e.fun_fact[0]]}),o.jsx(V,{variant:"contained",sx:{width:"200px",mt:2,p:2,bgcolor:"#4CAF50","&:hover":{backgroundColor:"#2E7D32",transform:"scale(1.05)"}},onClick:r,children:"Next"})]})})},Qt=()=>{const a=B(),{selectedAnswer:t,currentQuestion:e,showFeedback:i}=R(r=>r.game),n=r=>{a(lt(r))};return o.jsx(o.Fragment,{children:e.options.map(r=>o.jsx(V,{variant:"contained",sx:{"&:disabled":{bgcolor:r===e.city?"green":r===t?"red":"gray",color:"#fff"},"&:hover":{transform:"scale(1.05)",bgcolor:"#FFA000"},transition:"all 0.2s ease-in-out"},onClick:n.bind(void 0,r),disabled:i,children:r},r))})},Yt=({gameClose:a})=>{const t=B(),{timeLeft:e,totalTime:i,showFeedback:n}=R(r=>r.game);return b.useEffect(()=>{if(!n&&e>0){const r=setTimeout(()=>t(ut()),1e3);return()=>clearTimeout(r)}},[e,n,t]),o.jsxs(o.Fragment,{children:[o.jsx(Bt,{variant:"determinate",value:e/i*100,sx:{height:2,backgroundColor:"#ddd","& .MuiLinearProgress-bar":{backgroundColor:e<=3?"red":"blue"}}}),o.jsxs(k.div,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 10px"},children:[o.jsxs(v,{variant:"body2",sx:{fontWeight:"bold",color:e<=3?"red":"black",Visibility:"hidden"},children:["Time Left: ",e,"s"]}),o.jsx(V,{variant:"contained",onClick:a,sx:{display:"grid",placeSelf:"end",width:"100px",mt:2,bgcolor:"#E91E63","&:hover":{backgroundColor:"#FBBF24",color:"#111"}},children:"END"})]})]})},Kt=({gameOpen:a,gameClose:t})=>{const e=B(),{currentQuestion:i,showConfetti:n,isLoading:r}=R(h=>h.game),[s,c]=b.useState(200),[l,x]=b.useState(!1),[u,y]=b.useState(0),w=(i==null?void 0:i.trivia)||[];b.useEffect(()=>{(async()=>{await e(it()).unwrap()})()},[]),b.useEffect(()=>{let h;return n&&(c(200),setTimeout(()=>{h=setInterval(()=>{c(m=>Math.max(m-20,0))},100)},600),setTimeout(()=>{e(ht(!1)),clearInterval(h)},4e3)),()=>clearInterval(h)},[n]);const p=()=>{x(h=>!h)},g=()=>{y(h=>(h+1)%w.length)},f=()=>{y(h=>(h-1+w.length)%w.length)};return o.jsx(gt,{open:a,onClose:t,sx:{backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},children:r?o.jsx(ft,{}):o.jsxs(M,{sx:{width:"80vw",height:"80vh",boxShadow:24,borderRadius:4,display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:[o.jsxs(yt,{sx:{width:"100%",height:"100%",p:2,boxShadow:"0px 10px 30px rgba(0, 0, 0, 0.2)",background:"linear-gradient(31deg, #8EC5FC, #E0C3FC)"},children:[n&&o.jsx(zt,{width:window.innerWidth,numberOfPieces:s}),o.jsx(Yt,{gameClose:t}),o.jsx(k.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0,transition:{duration:.5}},exit:{opacity:0,x:-100,transition:{duration:.5}},children:o.jsxs(It,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:2},children:[o.jsxs(M,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:2},children:[o.jsx(T,{onClick:f,children:o.jsx(et,{})}),o.jsx(v,{variant:"h6",children:i==null?void 0:i.clues[u]}),o.jsx(T,{onClick:g,children:o.jsx(rt,{})})]}),o.jsx(M,{sx:{width:"70%",display:"grid",placeSelf:"center",gridTemplateColumns:"repeat(2, 1fr)",padding:2,gap:1},children:o.jsx(Qt,{options:i==null?void 0:i.options})}),o.jsx(k.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},style:{marginTop:2,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10},children:o.jsx(Gt,{})})]})},i==null?void 0:i.uniqueId)]}),o.jsx(T,{onClick:p,sx:{color:"#fff"},children:l?o.jsx(rt,{}):o.jsx(et,{})}),o.jsx(Ut,{isOpen:l})]})})};export{Kt as default};
