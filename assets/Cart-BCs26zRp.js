import{r as e,u as g,i as y,j as s,L as j,m as i,N as d,o as N,k as v,p as b}from"./index-D9NJtTfW.js";import{L as w}from"./LazyImage-EOAcH7cI.js";function L(){var c,r;const[t,u]=e.useState([]),[x,n]=e.useState(!1),l=g(),p=y();async function o(){n(!0);try{const{data:a}=await N.from("cart").select("*").eq("orderPlaced",!1);a&&(u(a),n(!1))}catch(a){alert(a)}}e.useEffect(()=>{o()},[]);const f=async a=>{await l(v(a)),p("/checkout")},h=async a=>{await l(b({type:"uuid",value:a.uuid})),o()};return x?s.jsx(j,{}):t.length===0?s.jsxs(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"flex flex-col items-center gap-2",children:[s.jsx("p",{className:"opacity-50",children:"No products were added to your cart"}),s.jsx(d,{to:"/",className:"btn bg-gradient-to-r from-indigo-200 to-violet-500 text-white font-bold",children:"Go shopping"})]}):s.jsx("div",{className:"w-11/12 flex justify-center",children:s.jsx("div",{className:"w-full responsiveGrid",children:(r=(c=t==null?void 0:t.slice())==null?void 0:c.reverse())==null?void 0:r.map(a=>s.jsxs(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"p-5 rounded-lg shadow-lg w-full flex flex-col items-start gap-2",children:[s.jsx("div",{className:"h-60 w-full",children:s.jsx(w,{src:a==null?void 0:a.thumbnail})}),s.jsxs("div",{className:"w-full",children:[s.jsx("p",{className:"font-serif text-xl italic truncate w-full",children:a==null?void 0:a.title}),s.jsx("p",{className:"text-xs uppercase text-indigo-500/50 font-bold",children:a.brand||"no brand"}),s.jsxs("p",{className:"text-xs uppercase opacity-50",children:["Quantity: ",a==null?void 0:a.quantity]}),s.jsxs("p",{className:"text-xs uppercase opacity-50",children:["Total: $",((a==null?void 0:a.price)*(a==null?void 0:a.quantity)).toFixed(2)]})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 overflow-x-auto w-full ",children:[s.jsx("button",{onClick:()=>h(a),className:"text-red-400 plainbtn bg-gray-100",children:"Remove"}),s.jsx(d,{to:`/detail/${a==null?void 0:a.id}`,className:"plainbtn bg-gray-100",children:"Details"}),s.jsx("button",{onClick:()=>f(a),className:"plainbtn bg-gradient-to-r from-indigo-200 to-violet-500 font-bold text-white",children:"Checkout"})]})]},a==null?void 0:a.uuid))})})}export{L as default};
