import{M as e,F as i,a as t,c as a,j as r,b as s,S as n}from"./index-DMGESyvC.js";import{d as o}from"./styled-components-BbSwOMHb.js";import{S as c}from"./SectionWrapper-Cyqa5T9q.js";import"./react-vendor-_g6xLlVr.js";import"./react-icons-Dvehu7pp.js";const d=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,l=o.article`
  display: flex;
  gap: 1rem;
  padding: 1px;

  border-radius: 10px;
`,p=o.div`
  display: flex;
  flex-direction: row;
  background-image: linear-gradient(
    to right bottom,
    #0b1220,
    #0f182b,
    #141e36,
    #1a2342,
    #21284d,
    #1f284c,
    #1e284a,
    #1c2849,
    #14223a,
    #101b2c,
    #0c141d,
    #05090e
  );
  border-radius: 10px;
  box-shadow: -1px 1px 2px 1px black;

  ${e.mobile} {
    flex-direction: column;
  }
`,m=o(i)`
  width: 500px;
  padding: 5px;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;

  ${e.mobile} {
    width: 100%;
  }
`,g=o(t)`
  width: auto;
  height: auto;
  justify-content: flex-start;

  font-size: 1.4rem;

  ${e.desktop} {
    font-size: 1.6rem;
  }
`,x=o.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 10px;
  margin: 5px;
`,h=o.div`
  width: 95%;
  padding: 5px;
  border-radius: 10px;
  color: var(--muted);
  font-size: 1.1rem;

  ${e.desktop} {
    font-size: 1.4rem;
  }
`,u=[{imgSrc:"assets/images/sands.jpg",name:"Sands Digital Services",title:"Client Engineer",time:"Dec 2022 - Dec 2025",description:["Leveraged technologies such as React, TypeScript, MobX state management, and gRPC to build internal tools","Created clean, reusable React components for various applications, improving code efficiency","Collaborated with cross-functional teams to ensure tools met user needs and expectations"]},{imgSrc:"assets/images/alphaSights.jpg",name:"AlphaSights",title:"Software Developer / Quality Assurance",time:"Oct 2020 - Dec 2022",description:["Developed a VBA-based macro to standardize and expedite processes across the organization","Created a program to streamline the onboarding process for new employees, enhancing efficiency"]},{imgSrc:"assets/images/litService.jpg",name:"Litigation Services",title:"Quality Assurance Specialist",time:"Jun 2016 - Sep 2020",description:["Implemented a documentation system into our Standard Operating Procedures (SOP), enhancing visibility on employee performance","Catalogued the repository and linked it to an online spreadsheet to effectively illustrate workload challenges"]}];function f(){const e=a.c(1);let i;return e[0]===Symbol.for("react.memo_cache_sentinel")?(i=r.jsx(c,{id:"experience",title:"Experience",children:r.jsx(d,{children:u.map(b)})}),e[0]=i):i=e[0],i}function b(e){return r.jsx(l,{children:r.jsxs(p,{children:[r.jsxs(m,{children:[r.jsxs(g,{children:[r.jsx(x,{src:e.imgSrc,alt:e.name}),r.jsx("strong",{children:e.name})]}),r.jsx(s,{children:e.title}),r.jsx(n,{children:e.time})]}),r.jsx(h,{children:e.description.map(j)})]})},e.name)}function j(e,i){return r.jsxs("p",{children:["* ",e]},i)}export{f as default};
