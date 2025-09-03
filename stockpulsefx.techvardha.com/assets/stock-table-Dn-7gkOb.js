import{c as w,r as c,j as e,a as x,B as p}from"./index-B1KGZ00m.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=w("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),d=c.forwardRef(({className:t,type:o,...a},l)=>e.jsx("input",{type:o,className:x("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:l,...a}));d.displayName="Input";const k=({tables:t,defaultTab:o=Object.keys(t)[0],searchPlaceholder:a="Search stocks..."})=>{const[l,n]=c.useState(""),[b,u]=c.useState(o),i=t[b],h=i.rows.filter(r=>r.some(s=>s.toLowerCase().includes(l.toLowerCase())));return e.jsxs("div",{className:"w-full sticky top-0 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm",children:[e.jsx("div",{className:"p-4 border-b border-white/10",children:e.jsxs("div",{className:"relative",children:[e.jsx(g,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"}),e.jsx(d,{placeholder:a,value:l,onChange:r=>n(r.target.value),className:"pl-9 bg-white/[0.02] border-white/5 focus-visible:ring-blue-500"})]})}),e.jsx("div",{className:"flex gap-1 p-2 border-b border-white/10",children:Object.keys(t).map(r=>e.jsx(p,{variant:"ghost",size:"sm",onClick:()=>u(r),className:`${b===r?"bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300":"text-white/70 hover:text-white hover:bg-white/10"}`,children:r},r))}),e.jsx("div",{className:"grid gap-4 p-4 text-sm font-medium border-b border-white/10 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-transparent sticky top-0",style:{gridTemplateColumns:`repeat(${i.headers.length}, 1fr)`},children:i.headers.map((r,s)=>e.jsx("div",{className:"text-blue-300 font-semibold tracking-wide",children:r},s))}),e.jsx("div",{className:`max-h-[calc(100vh-20rem)] overflow-y-auto 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-white/5 
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gradient-to-b 
        [&::-webkit-scrollbar-thumb]:from-blue-500/50 
        [&::-webkit-scrollbar-thumb]:to-blue-600/50
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:border
        [&::-webkit-scrollbar-thumb]:border-white/10
        hover:[&::-webkit-scrollbar-thumb]:from-blue-400/50
        hover:[&::-webkit-scrollbar-thumb]:to-blue-500/50`,children:e.jsx("div",{className:"divide-y divide-white/10",children:h.map((r,s)=>e.jsx("div",{className:"grid gap-4 p-4 text-sm hover:bg-white/[0.03] transition-colors",style:{gridTemplateColumns:`repeat(${i.headers.length}, 1fr)`},children:r.map((m,f)=>e.jsx("div",{className:"text-white/90 font-medium",children:m},f))},s))})})]})};export{k as S};
