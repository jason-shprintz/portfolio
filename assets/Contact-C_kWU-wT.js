import{a as e,c as t,L as a,j as r,B as o}from"./index-CDP7B4b1.js";import{d as i,r as n}from"./styled-components-BbSwOMHb.js";import{S as c}from"./SectionWrapper-Cf_aozzs.js";import"./react-vendor-_g6xLlVr.js";import"./react-icons-Dvehu7pp.js";const s=i.div`
  padding: 1rem;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.01)
  );
`,l=i(e)`
  justify-content: space-evenly;
`;function m(){const e=t.c(6),[i,m]=n.useState(!1);let d;e[0]===Symbol.for("react.memo_cache_sentinel")?(d=a.email.replace("mailto:",""),e[0]=d):d=e[0];const p=d;let f;e[1]===Symbol.for("react.memo_cache_sentinel")?(f=async function(){try{await navigator.clipboard.writeText(p),m(!0),setTimeout(()=>m(!1),2e3)}catch{}},e[1]=f):f=e[1];const h=f;let j,y;e[2]===Symbol.for("react.memo_cache_sentinel")?(j=r.jsx(o,{$variant:"primary",href:`mailto:${p}`,children:"Email Me"}),e[2]=j):j=e[2],e[3]===Symbol.for("react.memo_cache_sentinel")?(y=e=>{e.preventDefault(),h()},e[3]=y):y=e[3];const b=i?"Copied!":"Copy Email";let u;return e[4]!==b?(u=r.jsx(c,{id:"contact",title:"Contact",children:r.jsx(s,{children:r.jsxs(l,{children:[j,r.jsx(o,{$variant:"ghost",href:"#",onClick:y,"aria-label":"Copy Email",children:b})]})})}),e[4]=b,e[5]=u):u=e[5],u}export{m as default};
