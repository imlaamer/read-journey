import{a as l,r as n,j as e}from"./index-9c8fac83.js";const d="_container_yk93v_1",m="_image_yk93v_13",_="_text_yk93v_18",u="_title_yk93v_24",p="_description_yk93v_28",x="_accent_yk93v_32",t={container:d,image:m,text:_,title:u,description:p,accent:x},v=()=>{const s=l(),[a,c]=n.useState(5);return n.useEffect(()=>{const o=setInterval(()=>{c(r=>r-1)},1e3),i=setTimeout(()=>{s("/")},5e3);return()=>{clearInterval(o),clearTimeout(i)}},[s]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:t.container,children:[e.jsxs("h1",{className:t.title,children:[e.jsx("span",{className:t.text,children:"Oopsie!"})," We could not find this page"]}),e.jsxs("div",{className:t.description,children:["Mistakes happen... and that is okay. You will be redirected to",e.jsx("span",{className:t.accent,children:" The Home Page"})," and start your journey from there after",e.jsxs("span",{className:t.accent,children:[" ",a," seconds."]})]})]})})};export{v as default};
