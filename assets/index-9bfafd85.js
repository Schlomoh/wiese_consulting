import{j as t,s as i,X as A,J as Z,$ as D,L as N}from"./@schlomoh/react-cookieconsent-8ea4001d.js";import{a as F,r as c,L as H,u as W,B as K,b as O,d as G}from"./vendor-57060a02.js";import{u as _,s as U,m as w}from"./framer-motion-302a9959.js";import{S as X}from"./react-p5-cb9add35.js";import{u as P}from"./react-use-7afd6f67.js";import{G as Q,I as J}from"./react-icons-2e57d011.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();var S={},M=F;S.createRoot=M.createRoot,S.hydrateRoot=M.hydrateRoot;const E=e=>{const[n,r]=_(),o=c.useRef(null),[s,a]=c.useState(!1),l=P(o,{rootMargin:"-50px 0px"});return c.useEffect(()=>{l&&a(l.isIntersecting)},[l==null?void 0:l.isIntersecting]),c.useEffect(()=>{e.forEach(d=>{r(d,s?{scale:1,opacity:1}:{scale:.92,opacity:0},{delay:U(.3)})})},[s]),{scope:n,observedElement:o}},x=c.createContext({}),Y=()=>{const[e,n]=c.useState(!0);return{isAtTop:e,setIsAtTop:n}},ee=({children:e})=>{const n=Y();return t.jsx(x.Provider,{value:n,children:e})},te=i.nav`
  // position
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;

  // size
  width: 100%;
  height: ${({theme:e})=>e.misc.navBar.height};

  // color
  background-color: ${({atTop:e,theme:n})=>e?n.colors.accent.blue:n.colors.base.white};
  /* background-color: transparent; */
  box-shadow: ${({atTop:e,theme:n})=>e?"0 0 0 rgba(0,0,0,0)":n.misc.boxShadow};

  transition: background-color 0.3s, box-shadow 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;
`,ne=i.div`
  height: inherit;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`,re=i.span`
  a {
    text-transform: capitalize;
    margin-left: 1rem;
    color: ${({atTop:e,theme:n})=>e?n.colors.base.white:n.colors.accent.blue};
  }
`,ie=()=>{const{isAtTop:e}=c.useContext(x),n=o=>o.charAt(0).toUpperCase()+o.slice(1),r=V.map(o=>t.jsx(H,{to:o.path||"",children:o.path==="/"?"Home":n(o.path)},o.path));return t.jsx(re,{atTop:e,children:r})},se=i.div`
  height: ${({theme:e})=>e.misc.navBar.height};
`,oe=()=>{const{isAtTop:e}=c.useContext(x),{colors:n}=A();return t.jsxs(t.Fragment,{children:[t.jsx(te,{atTop:e,children:t.jsxs(ne,{children:[t.jsx(H,{to:"",children:t.jsx(pe,{height:"3rem",color:e?n.base.white:n.accent.blue,children:t.jsx(ue,{})})}),t.jsx("div",{style:{flexGrow:1}}),t.jsx(ie,{})]})}),t.jsx(se,{})]})},ae=i.main`
  position: relative;
  z-index: 2;
`,T=({children:e})=>{const{isAtTop:n,setIsAtTop:r}=c.useContext(x);return c.useEffect(()=>(window.scroll(0,0),()=>{r(!0)}),[]),t.jsx(ae,{children:e})},ce=()=>{const{colors:e}=A(),n=c.useMemo(()=>({backgroundColor:e.base.white,boxSizing:"border-box"}),[]),r=c.useMemo(()=>({backgroundColor:e.accent.blue,boxSizing:"border-box"}),[]);return t.jsx(Z,{containerStyle:n,primaryButtonStyle:r})},le=i.footer`
  height: 300px;
  width: 100%;
  position: fixed;
  z-index: 0;
  bottom: 0;

  color: white;
`,de=i.div`
  padding: 2rem 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`,he=()=>t.jsx(le,{children:t.jsxs(de,{children:[t.jsx("a",{children:"Impressum"}),t.jsx("a",{children:"Kontakt"}),t.jsx("a",{children:"Historie"}),t.jsx("a",{children:"Datenschutz"}),t.jsx("a",{children:"AGBs"})]})}),v=i.div`
  width: 100%;
  height: ${({height:e})=>e||"initial"};
  min-height: inherit;

  display: flex;
  flex-direction: ${({flexDirection:e})=>e||"row"};
  justify-content: ${({justifyContent:e})=>e||"space-between"};
  gap: ${({gap:e})=>e||"2rem"};
  align-items: ${({alignItems:e})=>e||"initial"};

  @media screen and (max-width: ${({breakWidth:e})=>e||720}px) {
    flex-direction: column;
  }
`,ue=()=>t.jsxs("svg",{id:"Layer_2","data-name":"Layer 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 629 296.2",children:[t.jsx("polygon",{points:"4.37 293.2 83.06 88.2 250.63 88.2 171.94 293.2 4.37 293.2"}),t.jsx("path",{d:"M252.27,181,175.88,380H14.73L91.12,181H252.27m8.73-6H87L6,386H180l81-211Z",transform:"translate(-6 -89.8)"}),t.jsx("polygon",{points:"191.37 293.2 270.06 88.2 437.63 88.2 358.94 293.2 191.37 293.2"}),t.jsx("path",{d:"M439.27,181,362.88,380H201.73l76.39-199H439.27m8.73-6H274L193,386H367l81-211Z",transform:"translate(-6 -89.8)"}),t.jsx("polygon",{points:"378.37 293.2 457.06 88.2 624.63 88.2 545.94 293.2 378.37 293.2"}),t.jsx("path",{d:"M626.27,181,549.88,380H388.73l76.39-199H626.27m8.73-6H461L380,386H554l81-211Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M113.51,133.06,127.83,96h5L110,154.18,99.19,125.55,87.74,153.87,66.09,96H76.78l14.14,37.4L96.64,119l-8.5-23H99.28Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M149,100.54a4.8,4.8,0,0,1-1.53,3.55,5,5,0,0,1-3.62,1.5,4.85,4.85,0,0,1-3.56-1.52,5.08,5.08,0,0,1-1.5-3.71,4.9,4.9,0,0,1,4.93-4.92,5.19,5.19,0,0,1,3.73,1.49A4.85,4.85,0,0,1,149,100.54Zm-9.13,51.63V114.85h7.6v37.32Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M184.6,114.72v3H169.88a2,2,0,0,0-1.58.49,3.74,3.74,0,0,0-.43,2.23V131h13.78v3.62H167.87v11.86a2.87,2.87,0,0,0,.69,2.06,2.76,2.76,0,0,0,2,.71h15.08v3H166.35a7.24,7.24,0,0,1-3.47-.72,4.58,4.58,0,0,1-2-2.17,10.7,10.7,0,0,1-.67-4.32v-23a9.62,9.62,0,0,1,.81-4.45,4.54,4.54,0,0,1,2.3-2.13,16.81,16.81,0,0,1,5.57-.62Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M191,151.23v-2.87a33.66,33.66,0,0,0,6.57.63,20.15,20.15,0,0,0,5.37-.52,5.83,5.83,0,0,0,2.87-1.81,4.52,4.52,0,0,0,1.11-3,5.34,5.34,0,0,0-1.25-3.44q-1.24-1.58-5.64-3.94l-3-1.57a14.64,14.64,0,0,1-5.35-4.36,9.08,9.08,0,0,1-1.54-5.17,10.11,10.11,0,0,1,1.67-5.7,9.63,9.63,0,0,1,4.46-3.67,22.07,22.07,0,0,1,8-1.14,40.34,40.34,0,0,1,7.25.63V118a28.58,28.58,0,0,0-5.82-.58q-4.56,0-6.44,1.47a4.49,4.49,0,0,0-1.88,3.63,4.21,4.21,0,0,0,.94,2.73,22,22,0,0,0,4.92,3.53l6.35,3.71a9.6,9.6,0,0,1,5,8.82,9.91,9.91,0,0,1-3.4,8q-3.39,2.91-10.82,2.91A45.05,45.05,0,0,1,191,151.23Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M247.37,114.72v3H232.65a2,2,0,0,0-1.58.49,3.74,3.74,0,0,0-.43,2.23V131h13.78v3.62H230.64v11.86a2.87,2.87,0,0,0,.69,2.06,2.76,2.76,0,0,0,2,.71h15.08v3H229.12a7.24,7.24,0,0,1-3.47-.72,4.58,4.58,0,0,1-2-2.17A10.7,10.7,0,0,1,223,145v-23a9.62,9.62,0,0,1,.81-4.45,4.54,4.54,0,0,1,2.3-2.13,16.81,16.81,0,0,1,5.57-.62Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M331.49,106l-3.18,2.55a29.11,29.11,0,0,0-5-5.93,17.64,17.64,0,0,0-5.66-3.2,19.79,19.79,0,0,0-6.6-1.16,17.17,17.17,0,0,0-8.45,2.1,19.5,19.5,0,0,0-6.4,5.66,22.51,22.51,0,0,0-3.69,8.08,40.73,40.73,0,0,0-1.1,9.62q0,12.53,5.73,19.14T311,149.53a19.19,19.19,0,0,0,8.07-1.77,21,21,0,0,0,6.74-4.86,22.57,22.57,0,0,0,3.8-5.81l3.62,1.83a24.1,24.1,0,0,1-4.2,6.71,25,25,0,0,1-8.84,6.09,28.32,28.32,0,0,1-11,2.15,27.78,27.78,0,0,1-11.83-2.47,28.83,28.83,0,0,1-9-6.35,31.63,31.63,0,0,1-6-8.92,28.3,28.3,0,0,1-2.26-11.7A31.07,31.07,0,0,1,284,109.15,27.12,27.12,0,0,1,294.78,98.3a29.93,29.93,0,0,1,14.74-3.85,25.16,25.16,0,0,1,16.33,5.64A41.38,41.38,0,0,1,331.49,106Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M358.19,153.46a19.42,19.42,0,0,1-14.38-6,20.33,20.33,0,0,1-3.4-24,17.4,17.4,0,0,1,7.16-7.06,20.29,20.29,0,0,1,19.57,0,18.38,18.38,0,0,1,7.34,7.41,21,21,0,0,1,2.73,10.4,19.31,19.31,0,0,1-6.06,14.38,18.49,18.49,0,0,1-5.91,3.63A19.54,19.54,0,0,1,358.19,153.46ZM368.3,133a26.41,26.41,0,0,0-1.16-7.74,17.86,17.86,0,0,0-1.9-4.23,9.69,9.69,0,0,0-3.2-3.2,8.59,8.59,0,0,0-4.61-1.21,8.25,8.25,0,0,0-7.71,4.86,24.92,24.92,0,0,0-2.58,11.83q0,8.59,3.94,13.56a9.08,9.08,0,0,0,7.43,3.66,7.5,7.5,0,0,0,6.35-3.31Q368.31,142.59,368.3,133Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M385.58,152.17V119.91a5.15,5.15,0,0,1,1.54-3.87,5.81,5.81,0,0,1,4.23-1.5,6.69,6.69,0,0,1,5.9,3l13.69,20.36c.21.33.43.49.67.49a.42.42,0,0,0,.36-.2,2,2,0,0,0,.14-.92V115h3.57v34.59a3.82,3.82,0,0,1-.67,2.52,2.29,2.29,0,0,1-1.83.79,4.19,4.19,0,0,1-3.45-2.24l-19.19-29.17a.58.58,0,0,0-.54-.31.54.54,0,0,0-.44.22,1,1,0,0,0-.18.63v30.11Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M425,151.23v-2.87a33.66,33.66,0,0,0,6.57.63,20.15,20.15,0,0,0,5.37-.52,5.8,5.8,0,0,0,2.86-1.81,4.48,4.48,0,0,0,1.12-3,5.4,5.4,0,0,0-1.25-3.44q-1.24-1.58-5.64-3.94l-3-1.57a14.64,14.64,0,0,1-5.35-4.36,9.08,9.08,0,0,1-1.54-5.17,10,10,0,0,1,1.67-5.7,9.63,9.63,0,0,1,4.46-3.67,22,22,0,0,1,8.05-1.14,40.34,40.34,0,0,1,7.25.63V118a28.58,28.58,0,0,0-5.82-.58q-4.56,0-6.44,1.47a4.46,4.46,0,0,0-1.88,3.63,4.21,4.21,0,0,0,.94,2.73,21.53,21.53,0,0,0,4.92,3.53l6.35,3.71a9.6,9.6,0,0,1,5,8.82,9.91,9.91,0,0,1-3.4,8q-3.39,2.91-10.82,2.91A45,45,0,0,1,425,151.23Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M456.67,114.63h8.05v26.48a7.76,7.76,0,0,0,.94,3.85,6.25,6.25,0,0,0,2.82,2.62,9,9,0,0,0,4,.92,7.24,7.24,0,0,0,5.75-2.49q2.17-2.47,2.17-8.16V114.63h3.63v23c0,3.94-.41,6.83-1.21,8.66a10.17,10.17,0,0,1-4.47,4.63,15.31,15.31,0,0,1-7.79,1.88q-6.66,0-10.29-3.49t-3.62-10.38Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M495.86,89.8h7.83v57.8a1.44,1.44,0,0,0,.33,1.1,2.27,2.27,0,0,0,1.37.29h4.7v3.18h-9.35a4.87,4.87,0,0,1-3.63-1.28,5.26,5.26,0,0,1-1.25-3.82Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M511.34,114.63h23.31v3h-7.83v34.59h-7.65V117.58h-7.83Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M551.07,100.54a4.83,4.83,0,0,1-1.52,3.55,5,5,0,0,1-3.63,1.5,4.83,4.83,0,0,1-3.55-1.52,5.08,5.08,0,0,1-1.5-3.71,4.88,4.88,0,0,1,4.92-4.92,5.17,5.17,0,0,1,3.73,1.49A4.85,4.85,0,0,1,551.07,100.54Zm-9.13,51.63V114.85h7.61v37.32Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M562,152.17V119.91a5.15,5.15,0,0,1,1.54-3.87,5.81,5.81,0,0,1,4.23-1.5,6.71,6.71,0,0,1,5.91,3l13.69,20.36a.83.83,0,0,0,.67.49.42.42,0,0,0,.36-.2,2.14,2.14,0,0,0,.13-.92V115h3.58v34.59a3.82,3.82,0,0,1-.67,2.52,2.31,2.31,0,0,1-1.84.79,4.17,4.17,0,0,1-3.44-2.24L567,121.52a.58.58,0,0,0-.54-.31.55.55,0,0,0-.45.22,1,1,0,0,0-.18.63v30.11Z",transform:"translate(-6 -89.8)"}),t.jsx("path",{d:"M633.61,121.83l-3.26,2.1a17.49,17.49,0,0,0-5.28-6.08,8.36,8.36,0,0,0-4.61-1.3,9,9,0,0,0-5.15,1.57,11.23,11.23,0,0,0-3.84,5.55A28.33,28.33,0,0,0,610,133.73q0,8.42,3.19,12.42t7.36,4a6.7,6.7,0,0,0,3.27-.78,7.76,7.76,0,0,0,2.33-1.9,8.88,8.88,0,0,0,1.16-2.28,8.35,8.35,0,0,0,.54-2.87v-8.59H635v36h-7.2v-19.6a14.65,14.65,0,0,1-9.09,3.18,16.42,16.42,0,0,1-12.46-5.3q-5-5.31-5-14.25t5.12-14.5a17,17,0,0,1,13-5.41,15.92,15.92,0,0,1,7.9,1.88A20.11,20.11,0,0,1,633.61,121.83Z",transform:"translate(-6 -89.8)"})]}),me=e=>{const{children:n}=e,{pathname:r}=W(),o={initial:{opacity:0},in:{opacity:1},out:{opacity:0}},s={type:"tween",duration:1};return t.jsx(w.div,{initial:"initial",animate:"in",variants:o,transition:s,children:n},r)},f=i.section`
  position: relative;
  padding: ${({padding:e})=>e||"6rem 2rem"};
  background-color: ${({theme:e})=>e.colors.base.white};
`,pe=i(w.div)`
  height: ${({height:e})=>e||"100px"};
  width: ${({width:e})=>e||"100px"};
  svg {
    width: inherit;
    height: inherit;
    color: ${({color:e,theme:n})=>e||n.colors.base.white};
    fill: ${({color:e,theme:n})=>e||n.colors.base.white};
    transition: color 0.3s, fill 0.3s;
  }
`,xe={colors:{base:{white:"#fffffc",black:"#121420"},grey:{light:"#c4c4c5",medium:"#898a8e",dark:"#4d4f57"},accent:{blue:"#0034A3",yellow:"#edf060"}},misc:{boxShadow:"0 .5rem 1.5rem rgba(0,0,0,0.15)",navBar:{height:"4rem"},section:{borderRadius:"25px"}}},ge="/wiese_consulting/assets/Oswald-Medium-030f86f1.ttf",fe="/wiese_consulting/assets/Poppins-Regular-707fdc5c.ttf",be=D`
  @font-face {
      font-family: 'Oswald';
      src: local('Oswald'), url(${ge}) format('woff');
  }
 
  @font-face {
      font-family: 'Poppins';
      src: local('Poppins'), url(${fe}) format('woff');
  }

  body, html {
    margin: 0;
    padding: 0;
    background-color: ${({theme:e})=>e.colors.accent.blue};
  }

  * {
    font-family: Poppins, sans-serif;
  }
  
  h1 {
    font-size: calc(1.618rem * 3);
    font-family: Oswald, sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h2 {
    margin:  0 0 3rem 0;

    ::after {
      content: "";
      display: block;
      position: relative;

      height: 0.5rem;
      width: 4rem;
      border-radius: 0.25rem;
      background-color: ${({theme:e})=>e.colors.accent.yellow};
    }

  }
  
  h3 {
    margin-top: 2rem;
  }

  button, a {
    cursor: pointer;
  }
`,je=({children:e})=>t.jsxs(N,{theme:xe,children:[t.jsx(be,{}),e]}),h=i.p`
  width: fit-content;
  margin: ${({margin:e})=>e||0};
  padding: ${({padding:e})=>e||0};
  color: ${({color:e,theme:n})=>e?e==="grey"?n.colors.grey.medium:e:n.colors.base.white};
`,we=i.h1`
  margin: ${({margin:e})=>e||0};
  padding: ${({padding:e})=>e||0};
  color: ${({color:e,theme:n})=>e||n.colors.base.white};

  @media screen and (max-width: 1000px) {
    font-size: ${1.618*2}rem;
  }
  @media screen and (max-width: 550px) {
    font-size: ${1.618*1.5}rem;
  }
`,y=({children:e})=>t.jsx(w.h2,{initial:{translateX:"-100px",opacity:0},whileInView:{translateX:"0px",opacity:1},exit:{translateX:"100px",opacity:0},transition:{delay:.25},children:e}),B=e=>Array.from(new Array(e).keys()),ve=(e,n,r)=>(r-e)/n-e;class g{static createColums(n,r,o){if(r%(j+I)===0&&o%(j+I)===0){const s=ve(0,window.innerWidth,r)*Math.random()*255,a={x:r,y:o,speed:Math.random(),time:100*Math.random(),alpha:s};return[...n,a]}else return n}static createGrid(n,r,o){const s=r.reduce((a,l)=>g.createColums(a,o,l),[]);return[...n,s]}static createRects(n,r){return B(n).map(()=>B(r)).reduce(g.createGrid,[])}}const j=80,I=2;function ye(){const{isAtTop:e}=c.useContext(x),n=c.useRef(null),r=c.useRef({width:0,height:0}),o=c.useRef([]);return c.useEffect(()=>{n.current&&(e?n.current.loop():n.current.noLoop())},[e]),{setup:(l,d)=>{d&&(n.current=l,n.current.createCanvas(d.clientWidth,d.clientHeight).parent(d),n.current.windowResized=function(){var u,b,L;(u=n.current)==null||u.noLoop(),r.current={width:window.innerWidth,height:window.innerHeight};const{width:p,height:m}=r.current;(b=n.current)==null||b.resizeCanvas(p,m),o.current=g.createRects(p,m),(L=n.current)==null||L.loop()},o.current=g.createRects(window.innerWidth,window.innerHeight))},draw:l=>{const{current:d}=n;if(!d||!e)return;d.clear();const p=m=>Math.abs(Math.sin(m));o.current.forEach(m=>m.forEach(u=>{const b=l.deltaTime/1e3/2*u.speed;u.time+=b,d.noStroke(),d.fill(255,255,255,u.alpha*p(u.time)),d.rect(u.x,u.y,j,j,10,10,10,10)}))}}}function $e(){const e=c.useRef(null),n=P(e,{root:null,threshold:.01}),{setIsAtTop:r}=c.useContext(x);return c.useEffect(()=>{n&&r(n.isIntersecting)},[n==null?void 0:n.isIntersecting]),e}const ke=i.header`
  min-height: calc(80vh + ${({theme:e})=>e.misc.navBar.height});
  width: 100%;

  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.accent.blue};
  margin-bottom: -50px;
`,Se=i.div`
  width: calc(100% - 4rem);
  padding: 2rem;
  h1,
  p,
  div {
    position: relative;
    z-index: 1;
  }

  ::before {
    z-index: 0;
    left: 0;
    content: "";
    display: block;
    position: absolute;
    height: 600px;
    width: 50%;
    background-color: ${({theme:e})=>e.colors.accent.blue};
    filter: blur(150px);

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
`,ze=i.div`
  width: 100%;
  height: calc(80vh + ${({theme:e})=>e.misc.navBar.height} + 50px);

  canvas,
  .react-p5,
  .p5Canvas {
    height: calc(100% + 50px);
    width: 100%;
  }
`,Ce=i.div`
  height: 0.5rem;
  width: 25vw;
  background-color: ${({theme:e})=>e.colors.accent.yellow};
  border-radius: 1rem;
`,Ae=()=>{const{setup:e,draw:n}=ye(),r=$e();return t.jsxs(ke,{ref:r,children:[t.jsxs(v,{alignItems:"center",style:{position:"absolute"},children:[t.jsxs(Se,{children:[t.jsx(we,{margin:"0 0 .5rem",children:"Expertise und Erfahrung für Ihre Projekte"}),t.jsx(Ce,{}),t.jsx(h,{margin:"1.5rem 0 0 ",children:"Unsere strategischen Consulting-Lösungen sind darauf ausgerichtet, erfolgreiche Transformationen zu ermöglichen."}),t.jsx(h,{margin:".5rem 0 0",children:"Wir bieten unseren Kunden eine umfassende Beratung bei der Umsetzung von Veränderungsprozessen, von der Erstellung einer Strategie bis hin zur Implementierung von Maßnahmen."})]}),t.jsx("div",{style:{width:"100%"}})]}),t.jsx(ze,{children:t.jsx(X,{setup:e,draw:n})})]})};function Le(e){return Q({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]})(e)}const Me=i(f)`
  border-top-left-radius: ${({theme:e})=>e.misc.section.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.misc.section.borderRadius};
`,Be=i(w.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    width: 100%;
  }
`,$=({title:e})=>{const{colors:n}=A();return t.jsxs(Be,{className:"product-container",children:[t.jsx(J.Provider,{value:{color:n.grey.light,size:"150px"},children:t.jsx(Le,{})}),t.jsx("h3",{children:e}),t.jsx(h,{color:"grey",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id, quasi facilis dolore accusamus sapiente ad eaque vitae, ipsum numquam, aut ea? Laudantium a odit laborum nemo culpa deserunt dicta?"})]})},Ie=()=>{const{scope:e,observedElement:n}=E([".product-container"]);return t.jsx(t.Fragment,{children:t.jsxs(Me,{ref:n,children:[t.jsx(y,{children:"Unsere Säulen"}),t.jsxs(v,{ref:e,children:[t.jsx($,{title:"KOPS/ICON Support"}),t.jsx($,{title:"Data Development"}),t.jsx($,{title:"Scrum / Agile Beratung"})]})]})})},He="/wiese_consulting/assets/headshot_tini-16b15867.jpeg",Pe="/wiese_consulting/assets/headshot_petra-117e3d44.jpeg",Ee=i.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    position: relative;
    object-fit: contain;
    height: 300px;
    border-radius: 1rem;
    z-index: 1;
    box-shadow: ${({theme:e})=>e.misc.boxShadow};
  }

  ::before {
    content: "";
    display: block;
    position: absolute;

    z-index: 0;

    height: 200px;
    width: 200px;

    translate: 70px -20px;

    border-radius: 2rem;
    background-color: ${({theme:e})=>e.colors.accent.yellow};
  }
`,q=e=>{const{image:n,name:r,paragraph:o}=e,{scope:s,observedElement:a}=E(["img","h3","p"]),l=(...d)=>p=>{for(const m of d)m.current=p};return t.jsx("div",{ref:l(s,a),children:t.jsxs("div",{className:"container",children:[t.jsx(Ee,{children:t.jsx("img",{...n,loading:"lazy"})}),t.jsx("h3",{children:r}),o]})})},Te=()=>t.jsx(q,{image:{src:Pe,alt:"Petra Becker"},name:"Petra Becker",paragraph:t.jsxs(t.Fragment,{children:[t.jsx(h,{color:"grey",children:"Sie verfügt über ein tiefes Verständnis für Datenoptimierung und -verarbeitung sowie über umfangreiche Erfahrung in der Zusammenarbeit mit interdisziplinären Teams. Mit ihrer Fähigkeit, komplexe Datenanalysen in leicht verständliche Berichte zu übersetzen, hilft sie unseren Kunden, wertvolle Erkenntnisse aus ihren Daten zu gewinnen und ihre Geschäftsprozesse zu optimieren."}),t.jsx("br",{}),t.jsx(h,{color:"grey",children:"Als Beraterin trägt sie dazu bei, dass wir unsere Dienstleistungen kontinuierlich verbessern und auf die Bedürfnisse unserer Kunden abstimmen. Ihre Erfahrung in verschiedenen Branchen und Projekten ermöglicht es ihr, maßgeschneiderte Lösungen für die spezifischen Anforderungen unserer Kunden zu entwickeln. Mit ihrem breiten Wissen in Datenanalyse und -verarbeitung kann sie komplexe Datenprojekte managen und effektive Lösungen für unsere Kunden bereitstellen."})]})}),qe=()=>t.jsx(q,{image:{src:He,alt:"Tini Wiese"},name:"Tini Wiese",paragraph:t.jsxs(t.Fragment,{children:[t.jsx(h,{color:"grey",children:"Sie hat sich auf agile Arbeitsweisen und Prozessoptimierung spezialisiert und verfügt über umfangreiche Erfahrung als Agile Coach, Scrum Master und Technical Product Manager. Mit ihrem tiefen Verständnis für agile Methoden und Prozesse unterstützt sie unsere Kunden dabei, ihre Geschäftsprozesse zu optimieren und ihre Produkte zu entwickeln."}),t.jsx("br",{}),t.jsx(h,{color:"grey",children:"Sie hat maßgeschneiderte Lösungen für die spezifischen Anforderungen unserer Kunden entwickelt und verfügt über exzellente Fähigkeiten im Stakeholder-Management, der Teamleitung und der Prozessoptimierung. Als Beraterin unterstützt sie unsere Kunden bei der Einführung agiler Methoden und der Prozessoptimierung. Mit ihrer Erfahrung in verschiedenen Branchen und Projekten kann sie schnell und effektiv auf die Bedürfnisse unserer Kunden eingehen und maßgeschneiderte Lösungen entwickeln."})]})}),Re=()=>t.jsxs(f,{style:{position:"relative",zIndex:1},children:[t.jsx(y,{children:"Wer wir sind"}),t.jsxs(v,{gap:"8rem",children:[t.jsx(Te,{}),t.jsx(qe,{})]})]}),Ve=i(f)`
  margin-bottom: 300px;
  border-bottom-left-radius: ${({theme:e})=>e.misc.section.borderRadius};
  border-bottom-right-radius: ${({theme:e})=>e.misc.section.borderRadius};
  box-shadow: ${({theme:e})=>e.misc.boxShadow};
`,Ze=i.button`
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.colors.accent.blue};
  color: ${({theme:e})=>e.colors.base.white};
`,z=i.div`
  width: 100%;
  min-height: 100px;
  padding: ${({padding:e})=>e?"2rem":0};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,R=i(z)`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: underline;
  }
`,De=i(R)`
  justify-content: center;
  max-height: fit-content;
  gap: 0;
`,Ne=()=>t.jsxs(Ve,{children:[t.jsx(y,{children:"Wir sind für sie da."}),t.jsxs(v,{flexDirection:"row-reverse",children:[t.jsxs(z,{style:{justifyContent:"space-between",alignItems:"center"},children:[t.jsxs(R,{children:[t.jsx("a",{children:"Schauen sie sich unsere Geschichte an >"}),t.jsx(Ze,{children:"Nehmen sie hier Kontakt auf"})]}),t.jsxs(De,{children:[t.jsx(h,{color:"grey",children:" Telefon: +49 12345678"}),t.jsx(h,{color:"grey",children:" E-mail: wiese@consluting.test"})]})]}),t.jsx(z,{children:t.jsx(h,{color:"grey",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum expedita, beatae architecto aut quaerat tempora libero aliquam incidunt maiores nemo, amet molestias perspiciatis fugiat qui pariatur enim hic alias ut?"})})]})]}),Fe=()=>t.jsxs(T,{children:[t.jsx(Ae,{}),t.jsx(Ie,{}),t.jsx(Re,{}),t.jsx(Ne,{})]}),We="/wiese_consulting/assets/character_ball-b362aed6.png",Ke=i(f)`
  background-color: ${({theme:e})=>e.colors.accent.blue};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
  }
`,Oe=i.div`
  height: 500px;
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }

  img {
    height: inherit;
    width: 100%;
    object-fit: contain;
  }
`,Ge=i.div`
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
  h2 {
    color: ${({theme:e})=>e.colors.base.white};
  }
`,_e=()=>t.jsxs(Ke,{children:[t.jsxs(Ge,{children:[t.jsx(y,{children:"Kontakt"}),t.jsx(h,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae necessitatibus asperiores eligendi eaque. Quos ab qui fuga ex velit facilis, aliquam molestias distinctio nihil quod. Ratione explicabo similique alias!"})]}),t.jsx(Oe,{children:t.jsx("img",{src:We,alt:"character holding ball"})})]}),Ue=i(f)`
  border-radius: ${({theme:e})=>e.misc.section.borderRadius};
  margin-bottom: 300px;

  display: flex;
  flex-direction: row;
  gap: 1rem;

  h3 {
    margin-top: 0;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 3rem;
  }
`,Xe=i.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`,C=i.input`
  border: none;

  background-color: ${({theme:e})=>e.colors.grey.light};
  color: ${({theme:e})=>e.colors.base.black};
  border-radius: 10px;
  padding: 0.5rem 1rem;

  transition: all 0.2s;
`,Qe=i(C)`
  cursor: pointer;
  background-color: ${({theme:e})=>e.colors.accent.yellow};

  @media (hover: hover) {
    :hover {
      background-color: ${({theme:e})=>e.colors.grey.light};
    }

    :active {
      background-color: grey;
    }
  }
`,k=i.label`
  color: ${({theme:e})=>e.colors.grey.medium};
`,Je=i.textarea`
  border: none;

  background-color: ${({theme:e})=>e.colors.grey.light};
  border-radius: 10px;
  padding: 0.5rem 1rem;

  resize: vertical;
  min-height: 5rem;
`,Ye=i.div`
  width: 50%;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`,et=()=>{const[e,n]=c.useState({name:"",email:"",message:""}),r=s=>{const{target:a}=s;n({...e,[a.id]:a.value})},o=s=>{s.preventDefault(),console.log(e)};return t.jsxs(Ue,{children:[t.jsxs(Ye,{children:[t.jsx("h3",{children:"Schicken sie uns eine Nachricht"}),t.jsx(h,{color:"grey",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti error magnam. Labore natus magni minima sint iure, nostrum debitis deleniti ratione. Dolores laboriosam minima voluptatibus aperiam iusto. Itaque, repellat."})]}),t.jsxs(Xe,{onSubmit:o,children:[t.jsx(k,{htmlFor:"email",children:"E-mail Adresse"}),t.jsx(C,{type:"email",id:"email",onChange:r,required:!0}),t.jsx(k,{htmlFor:"name",children:"Name"}),t.jsx(C,{type:"text",id:"name",onChange:r,required:!0}),t.jsx(k,{htmlFor:"message",children:"Nachricht"}),t.jsx(Je,{rows:3,id:"message",onChange:r,required:!0}),t.jsx(Qe,{type:"submit",value:"Senden"})]})]})},tt=()=>t.jsxs(T,{children:[t.jsx(_e,{}),t.jsx(et,{})]}),V=[{path:"/",element:t.jsx(Fe,{})},{path:"kontakt",element:t.jsx(tt,{})}];function nt(){return t.jsx(ee,{children:t.jsx(je,{children:t.jsx(K,{basename:"/wiese_consulting",children:t.jsxs(me,{children:[t.jsx(oe,{}),t.jsx(O,{children:V.map(e=>t.jsx(G,{path:e.path,element:e.element},e.path))}),t.jsx(he,{}),t.jsx(ce,{})]})})})})}S.createRoot(document.getElementById("root")).render(t.jsx(nt,{}));
