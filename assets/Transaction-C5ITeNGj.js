import{i as r,e as a,j as e,L as n,N as o,t as d}from"./index-C_aMJDm0.js";function u(){var c;r();const{success:i}=a(s=>s.cart),{loading:l}=a(s=>s.cart),t=a(s=>s.cart.checkoutDetail);return i?l?e.jsx(n,{}):e.jsx("div",{children:((c=Object.keys(t))==null?void 0:c.length)>0&&e.jsxs("div",{className:"relative inset-0 flex justify-center items-center flex-col ",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-lg w-full flex flex-col justify-center items-center gap-2 p-5",children:[e.jsx("p",{className:"text-xs opacity-60",children:"Transaction successful"}),e.jsx("p",{className:"text-xl",children:"Thank you for purchasing!"}),e.jsxs("p",{className:"text-center text-xs opacity-60",children:["Your order of ",e.jsx("span",{className:"font-bold text-blue-600",children:t==null?void 0:t.title})," was successfully placed, and soon to be shipped.",e.jsx("span",{className:"block",children:"Shipping delivery usually takes upto 2-3 days."})]}),e.jsx(o,{to:"/",className:"btn bg-gradient-to-r from-blue-300 to-violet-500 text-white font-bold",children:"Shop again"})]}),e.jsxs("div",{className:"my-10 flex items-center gap-2 opacity-50",children:["Made with ",e.jsx(d,{className:"text-violet-400 size-5"}),"by Paris"]})]})}):e.jsxs("div",{className:"opacity-50 w-full text-center",children:["No current records of placed order in this session.",e.jsx("p",{className:"text-xs font-bold",children:"Check your Transaction History"})]})}export{u as default};
