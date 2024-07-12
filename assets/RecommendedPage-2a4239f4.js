import{j as e,r as O,B as k}from"./index-0a4a6ea6.js";import{c as p,g as B,B as D,h as C,i as P,A as U,j as w,d as h,k as V,l as N,m as q,n as H,p as Q,u as W,I as g,V as d,o as $}from"./constants-8877dbcf.js";const K="_container_j12l7_1",L="_contentContainer_j12l7_11",G={container:K,contentContainer:L},X=({children:s})=>e.jsx("div",{className:G.container,children:e.jsx("div",{className:G.contentContainer,children:s})}),y=()=>{const s={title:p().trim().required(B).matches(D,C),author:p().trim().required(P).matches(U,w)},i=h().shape({...s}),l=h().shape({...s,pages:p().trim().required(V).matches(N,q)}),c=h().shape({page:p().trim().required(H).matches(N,Q)});return{recommendedFormSchema:i,libraryFormSchema:l,pageFormSchema:c}},z=s=>{const{recommendedFormSchema:i,libraryFormSchema:l,pageFormSchema:c}=y();let o,n,t;switch(s){case"recommended":o=i,n="Filters:",t="To apply:";break;case"library":o=l,n="Create your library:",t="Add book";break;case"reading":o=c,n="Start page:",t="To start";break;case"diary":o=c,n="Stop page:",t="To stop";break}return{schema:o,title:n,btn:t}},F="_formWrapper_ikabb_1",J="_formTitle_ikabb_5",Y="_form_ikabb_1",m={formWrapper:F,formTitle:J,form:Y},Z=({type:s})=>{var E,_,u,b,x,S,j,R,f,A,M,T;const[i,l]=O.useState(!1),{schema:c,title:o,btn:n}=z(s),{register:t,handleSubmit:I,formState:{errors:r,dirtyFields:a}}=W({mode:"onChange",resolver:$(c),defaultValues:{title:"",author:"",pages:"",page:""}}),v=async()=>{};return e.jsxs("div",{className:m.formWrapper,children:[e.jsx("h2",{className:m.formTitle,children:o}),e.jsxs("form",{className:m.form,onSubmit:I(v),children:[(s==="recommended"||s==="library")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:m.inputIconsMessageBox,children:[e.jsx(g,{id:"title",label:"Book title:",type:"text",...t("title"),placeholder:"Enter text",error:(E=r.title)==null?void 0:E.message,valid:(a==null?void 0:a.title)&&!((_=r.title)!=null&&_.message)}),e.jsx(d,{errorMsg:(u=r.title)==null?void 0:u.message,dirtyField:a==null?void 0:a.title,fieldName:"title"})]}),e.jsxs("div",{className:m.inputIconsMessageBox,children:[e.jsx(g,{id:"author",label:"The author:",type:"text",...t("author"),placeholder:"Enter text",error:(b=r.author)==null?void 0:b.message,valid:(a==null?void 0:a.author)&&!((x=r.author)!=null&&x.message)}),e.jsx(d,{errorMsg:(S=r.author)==null?void 0:S.message,dirtyField:a==null?void 0:a.author,fieldName:"author"})]})]}),s==="library"&&e.jsxs("div",{className:m.inputIconsMessageBox,children:[e.jsx(g,{id:"pages",label:"Number of pages:",type:"pages",...t("pages"),error:(j=r.pages)==null?void 0:j.message,valid:(a==null?void 0:a.pages)&&!((R=r.pages)!=null&&R.message)}),e.jsx(d,{errorMsg:(f=r.pages)==null?void 0:f.message,dirtyField:a==null?void 0:a.pages,fieldName:"pages"})]}),(s==="reading"||s==="diary")&&e.jsxs("div",{className:m.inputIconsMessageBox,children:[e.jsx(g,{id:"page",label:"Page number:",type:"page",...t("page"),error:(A=r.page)==null?void 0:A.message,valid:(a==null?void 0:a.page)&&!((M=r.page)!=null&&M.message)}),e.jsx(d,{errorMsg:(T=r.page)==null?void 0:T.message,dirtyField:a==null?void 0:a.page,fieldName:"page"})]}),e.jsx(k,{type:"submit",title:n,className:"dashboard-btn",disabled:i})]})]})},ee="_hero_kods4_1",ae="_wrapper_kods4_12",se={hero:ee,wrapper:ae},oe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:se.wrapper,children:e.jsx(X,{children:e.jsx(Z,{type:"recommended"})})})});export{oe as default};