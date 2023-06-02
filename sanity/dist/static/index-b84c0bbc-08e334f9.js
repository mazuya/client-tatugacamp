import{r as u,M as o,b1 as re,U,bu as oe,b2 as ie,d4 as ae,aq as H,as as ce,aw as le,bc as ue,O as v,ai as de,d5 as me,aD as pe,d6 as fe,d7 as he,d8 as ye,bg as ge,bM as Te,ax as Y,K as O,aY as $,S as Le,ch as Ie,T as _,J as x,a_ as be,P as Se,bC as Re,d9 as Pe,N as M,aj as ve,ao as Ce,ap as _e,bG as F,da as Ee,db as je,dc as xe,dd as De,bA as k,a8 as we,de as Oe,cS as Fe,cT as Ae,bE as $e,df as Me,dg as ke,cl as N,cn as Ne,dh as qe,cc as Be,bH as We,bU as Ue,di as He,dj as Ye,dk as Ge,cd as Ve}from"./desk-0312ba5d-d33ea97c.js";import{useDeskTool as Ke,useDeskToolSetting as q,Delay as ze}from"./index-74d44846-37a9a159.js";import{P as Xe}from"./PaneItem-1352c9b8-a119df65.js";import"./index-87e2d4ce.js";const B=100,A=2e3,G={by:[{field:"_updatedAt",direction:"desc"}]},Qe={};function Je(e,s){return e._id?Y(e._id):"item-".concat(s)}function Ze(e){return xe(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const et=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(et);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),c=s[a];return typeof c=="string"?c:null}return t}function nt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function st(e){return e.map(s=>[rt(s),(s.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function rt(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ot(e,s){const n=e.by.map(t=>{if(t.mapWith)return t;const a=it(s,t.field);return a?ct(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===e.by[a])?e:{...e,by:n}}function it(e,s){const n=pe(s);let t=e;for(const a of n){if(!t)return;if(typeof a=="string"){t=at(t,a);continue}if(!(fe(a)||he(a))||t.jsonType!=="array")return;const[r,i]=t.of||[];if(i||!r)return;if(!ye(r)){t=r;continue}const[f,h]=r.to||[];if(h||!f)return;t=f}return t}function at(e,s){if(!("fields"in e))return;const n=e.fields.find(t=>t.name===s);return n?n.type:void 0}function ct(e,s){let n=e.type;for(;n;){if(n.name===s||!n.type&&n.jsonType===s)return!0;n=n.type}return!1}function lt(e){const{childItemId:s,error:n,filterIsSimpleTypeContraint:t,fullList:a,isActive:c,isLoading:r,items:i,layout:f,onListChange:h,onRetry:l,showIcons:y}=e,S=H(),{collapsed:b}=ge(),{collapsed:I,index:g}=Te(),[R,P]=u.useState(!1);u.useEffect(()=>{if(I)return;const d=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(d)}},[I]);const T=u.useCallback(d=>{const L=Y(d._id),m=s===L;return o(Xe,{icon:y===!1?!1:void 0,id:L,pressed:!c&&m,selected:c&&m,layout:f,schemaType:S.get(d._type),value:d})},[s,c,f,S,y]),p=u.useMemo(()=>{if(!R)return null;if(n)return o(O,{align:"center",direction:"column",height:"fill",justify:"center",children:o($,{width:1,children:v(Le,{paddingX:4,paddingY:5,space:4,children:[o(Ie,{as:"h3",children:"Could not fetch list items"}),v(_,{as:"p",children:["Error: ",o("code",{children:n.message})]}),l&&o(x,{children:o(U,{icon:be,onClick:l,text:"Retry",tone:"primary"})})]})})});if(i===null)return o(O,{align:"center",direction:"column",height:"fill",justify:"center",children:o(ze,{ms:300,children:v(Se,{children:[o(Re,{muted:!0}),o(x,{marginTop:3,children:o(_,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!r&&i.length===0)return o(O,{align:"center",direction:"column",height:"fill",justify:"center",children:o($,{width:1,children:o(x,{paddingX:4,paddingY:5,children:o(_,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});const d=a&&i.length===A;return v(x,{padding:2,children:[i.length>0&&o(Pe,{gap:1,getItemKey:Je,items:i,renderItem:T,onChange:h},"".concat(g,"-").concat(I)),r&&o(M,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(_,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&o(M,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(_,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",A," documents"]})})]})},[n,t,a,h,r,i,l,T,R,I,g]);return o(ve,{overflow:b?void 0:"auto",children:p})}const V=u.memo(e=>{let{index:s,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:a=[],setLayout:c,setSortOrder:r,title:i}=e;const{features:f}=Ke(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{r(l)}}),[c,r]);return o(re,{backButton:f.backButton&&s>0&&o(U,{as:oe,"data-as":"a",icon:ie,mode:"bleed"}),title:i,actions:o(ae,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:a,menuItems:t})})});V.displayName="DocumentListPaneHeader";const ut={result:null,error:!1},dt=e=>({result:{documents:e},loading:!1,error:!1}),mt=e=>({result:null,loading:!1,error:e}),pt=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new De,t=n.next.bind(n);return e.pipe(k(r=>({client:r.client,query:r.query,params:r.params})),we(Oe),Fe(1),Ae()).pipe($e(r=>{const i=Me(r.client,r.query,r.params,s).pipe(k(dt),ke());return N(F({loading:!0}).pipe(Ne(400),qe(i)),i)})).pipe(Be(ut),We((r,i)=>Ue(F(mt(r)),N(He(window,"online"),n).pipe(Ye(1),Ge(i)))),Ve((r,i)=>({...r,...i,onRetry:t})))};function ft(e){var s;const{apiVersion:n,filter:t,params:a,sortOrder:c}=e,r=Ce(_e),[i,f]=u.useState(!1),h=u.useRef(i),[l,y]=u.useState(null),S=(l==null?void 0:l.error)||null,b=(l==null?void 0:l.loading)||l===null,I=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,R=u.useMemo(()=>g?Ze(g):null,[g]),P=u.useMemo(()=>{const p=c==null?void 0:c.extendedProjection,d=["_id","_type"],L=d.join(","),m=(c==null?void 0:c.by)||[],C=i?A:B,E=m.length>0?m:G.by,j=st(E);if(p){const D=d.concat(p).join(",");return["*[".concat(t,"] {").concat(D,"}"),"order(".concat(j,") [0...").concat(C,"]"),"{".concat(L,"}")].join("|")}return"*[".concat(t,"]|order(").concat(j,")[0...").concat(C,"]{").concat(L,"}")},[t,i,c]),T=u.useCallback(p=>{let{toIndex:d}=p;b||h.current||d>=B/2&&(f(!0),h.current=!0)},[b]);return u.useEffect(()=>{const p=i?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);const L=pt(F({client:r,query:P,params:a}),{apiVersion:n,tag:"desk.document-list"}).pipe(Ee(p)).subscribe(y);return()=>L.unsubscribe()},[n,r,i,P,a]),u.useEffect(()=>{y(null),f(!1),h.current=!1},[t,a,c,n]),{error:S,fullList:i,handleListChange:T,isLoading:b,items:R,onRetry:I}}const W=[];function ht(e){const s=u.useRef(e);return je(s.current,e)||(s.current=e),s.current}const It=u.memo(function(s){const{childItemId:n,index:t,isActive:a,isSelected:c,pane:r,paneKey:i}=s,f=H(),{name:h}=ce(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:S=W,menuItems:b,menuItemGroups:I,options:g,title:R}=r,{apiVersion:P,defaultOrdering:T=W,filter:p}=g,d=ht(g.params||Qe),L=r.source,m=u.useMemo(()=>tt(p,d),[p,d]),C=(y==null?void 0:y.showIcons)!==!1,[E,j]=q(m,"layout",l),D=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:G,[T]),[w,K]=q(m,"sortOrder",D),z=m&&w?ot(w,f.get(m)):w,X=le(z),Q=nt(p),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=ft({filter:p,params:d,sortOrder:X,apiVersion:P});return o(ue,{name:L||h,children:v(de,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:c,children:[me,o(V,{index:t,initialValueTemplates:S,menuItems:b,menuItemGroups:I,setLayout:j,setSortOrder:K,title:R}),o(lt,{childItemId:n,error:J,filterIsSimpleTypeContraint:Q,fullList:Z,isActive:a,isLoading:te,items:ne,layout:E,onListChange:ee,onRetry:se,showIcons:C})]})})});export{It as default};