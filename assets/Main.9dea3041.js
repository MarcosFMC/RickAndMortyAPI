import{a5 as h,a6 as S,X as l,Y as e,a7 as k,a8 as C,a9 as x,a1 as o,aa as P,ab as d,ac as F,ad as R,ae as N,af as b,ag as M,ah as j,ai as D,aj as L,ak as w,al as B}from"./index.dabe99d5.js";function f(n=h){const t=n===h?S:()=>l.exports.useContext(n);return function(){const{store:s}=t();return s}}const $=f();function A(n=h){const t=n===h?$:f(n);return function(){return t().dispatch}}const v=A(),g=({onClick:n,type:t})=>e(k,{onClick:n,children:t?"NEXT":"PREV"}),E="https://rickandmortyapi.com/api/character",U=async n=>{let t="";for(const[s,a]of Object.entries(n))t+=a!=""?`${s}=${a}&`:"";const r=`https://rickandmortyapi.com/api/character/?${t}`;return fetch(r).then(s=>s.json())},m=async n=>fetch(n).then(t=>t.json()),G=()=>{const n=v(),[t,r]=l.exports.useState(C),{setPaginationCount:s}=l.exports.useContext(x),a=async i=>{r({...t,[i.target.name]:i.target.value})},u=async i=>{i.preventDefault();const c=await U(t);n(d(c)),s(1)},p=async i=>{r(C)};return o(P,{onSubmit:u,children:[e("h2",{children:"FILTERS"}),e("span",{children:"Name : "}),e("input",{type:"text",placeholder:"Search characters...",onChange:a,name:"name",value:t.name}),e("span",{children:"Status : "}),o("select",{name:"status",onChange:a,value:t.status,children:[e("option",{value:"",children:"-"}),e("option",{value:"alive",children:"Alive"}),e("option",{value:"dead",children:"Dead"}),e("option",{value:"unknown",children:"Unknown"})]}),e("span",{children:"Species: "}),e("input",{type:"text",onChange:a,name:"species",value:t.species}),e("span",{children:"Type: "}),e("input",{type:"text",onChange:a,name:"type",value:t.type}),e("span",{children:"Gender: "}),o("select",{name:"gender",onChange:a,value:t.gender,children:[e("option",{value:"",children:"-"}),e("option",{value:"male",children:"Male"}),e("option",{value:"female",children:"Female"})]}),e("input",{type:"submit",value:"Filtrar"}),e("input",{type:"button",value:"Refresh",onClick:p})]})},I=()=>e(F,{children:e("div",{className:"area",children:o("ul",{className:"circles",children:[e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{}),e("li",{})]})})}),X=()=>{const n=v(),t=async()=>{const r=await m(E);n(d(r))};return l.exports.useEffect(()=>{t()},[]),e(R,{children:e(N,{children:o(b,{children:[e(M,{}),e(I,{}),e(G,{}),e(j,{}),e(T,{})]})})})},T=()=>{const n=v(),{setPaginationCount:t,currentPage:r}=l.exports.useContext(x),{setLoading:s}=l.exports.useContext(D),a=L(c=>c.characters.info),u=c=>{const y=c.match(/(\d+)/);t(y[0])},p=async()=>{s(!0);const c=await m(a.next);u(a.next),n(d(c)),s(!1)},i=async()=>{s(!0);const c=await m(a.prev);u(a.prev),n(d(c)),s(!1)};return o(w,{children:[a!==void 0?o(B,{children:[a.prev?e(g,{type:!1,onClick:i}):null,a.next?e(g,{type:!0,onClick:p}):null,o("span",{className:"pages-text",children:[e("b",{children:r})," de ",a.pages]})]}):void 0,o("span",{className:"characters-found-text",children:["Personajes encontrados :",a!==void 0?a.count:null]})]})};export{X as default};