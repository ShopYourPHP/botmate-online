(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{597:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/setup",function(){return t(639)}])},1966:function(e,n,t){"use strict";t.d(n,{XO:function(){return U},S8:function(){return S},lR:function(){return E},yS:function(){return W},pi:function(){return K},R6:function(){return p}});var r=t(7458),i=t(8893),s=t(1573),l=t(412),o=t(2874),a=t(4297),c=t(3724),d=t(3924),h=t(2122),u=t(5251),x=t(4015),j=t(3270),m=t.n(j),g=t(9143);function p(e){let{icon:n,label:t,href:i,match:s}=e,a=(0,g.useRouter)(),c=null==s?void 0:s.test(a.pathname),d=(0,u.ff)("secondary.light","secondary.dark");return(0,r.jsx)(m(),{href:i,children:(0,r.jsxs)(o.U,{px:3,py:1.5,opacity:c?1:.6,bg:c?d:"transparent",borderWidth:"1px",borderColor:c?"auto":"transparent",rounded:"md",userSelect:"none",cursor:"pointer",transition:"all 0.2s",_hover:{opacity:c?1:.8},children:[(0,r.jsx)(l.xu,{fontSize:"lg",children:n}),(0,r.jsx)(x.x,{children:t})]})})}var f=t(6774),b=t(5106),v=t(4378),w=t(9913),k=t(2983);function y(e){let{}=e,[n,t]=(0,k.useState)({version:"",isLoading:!0}),{data:i}=(0,b.Th)();return((0,k.useEffect)(()=>{fetch("https://registry.npmjs.org/botmate/latest").then(e=>e.json()).then(e=>{t({version:e.version,isLoading:!1})})},[]),n.isLoading||(null==i?void 0:i.version)===n.version)?null:(0,r.jsx)(l.xu,{p:4,borderWidth:"1px",rounded:"lg",children:(0,r.jsx)(o.U,{alignItems:"flex-start",children:(0,r.jsxs)(l.xu,{children:[(0,r.jsx)(v.X,{size:"sm",fontWeight:"normal",children:"New update available!"}),(0,r.jsxs)(x.x,{opacity:.6,fontSize:12,mt:1,children:[(0,r.jsxs)("b",{children:["v",n.version]})," is now available."]}),(0,r.jsx)(w.z,{mt:2,size:"xs",variant:"solid",children:"Update"})]})})})}let C=[{label:"Dashboard",icon:(0,r.jsx)(h.g3P,{}),href:"/",match:/^\/$/},{label:"Commands",icon:(0,r.jsx)(h.rz5,{}),href:"/commands",match:/^\/commands/},{label:"Analytics",icon:(0,r.jsx)(h.h4y,{}),href:"/analytics",match:/^\/analytics/},{label:"Moderations",icon:(0,r.jsx)(h.vqr,{}),href:"/moderations/filters",match:/^\/moderations/},{label:"Bot Debug",icon:(0,r.jsx)(h.Wds,{}),href:"/debug",match:/^\/debug/},{label:"Integrations",icon:(0,r.jsx)(h.WRS,{}),href:"/integrations",match:/^\/integrations/},{label:"Marketplace",icon:(0,r.jsx)(h._MD,{}),href:"/marketplace",match:/^\/marketplace/},{label:"Settings",icon:(0,r.jsx)(h.oq2,{}),href:"/settings/general",match:/^\/settings/}];function S(e){let{}=e;return(0,i.wf)(),(0,r.jsxs)(s.k,{flexDirection:"column",p:4,gap:6,h:"100vh",overflow:"auto",children:[(0,r.jsx)(l.xu,{children:(0,r.jsxs)(o.U,{width:"full",children:[(0,r.jsx)(E,{height:"25px",width:"25px"}),(0,r.jsx)(a.L,{}),(0,r.jsx)(c.h,{size:"md","aria-label":"notifications",variant:"outline",icon:(0,r.jsx)(h.Uet,{size:14})})]})}),(0,r.jsx)(d.K,{children:C.map(e=>(0,r.jsx)(p,{label:e.label,icon:e.icon,href:e.href,match:e.match},e.label))}),(0,r.jsx)(a.L,{}),(0,r.jsx)(y,{}),(0,r.jsx)(f.ZE,{})]})}let E=e=>{let{height:n,width:t,color:i="#FFFFFF"}=e;return(0,r.jsxs)("svg",{width:t,height:n,viewBox:"0 0 512 512",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,r.jsx)("title",{children:"botmate-logo-dark"}),(0,r.jsx)("g",{id:"botmate-logo-dark",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,r.jsx)("path",{d:"M413.92,32 C450.967261,32 481,62.032739 481,99.08 L481,125.057143 C481,128.723604 480.705845,132.321362 480.139846,135.828103 L480.139313,416.92 C480.139313,453.967261 450.106574,484 413.059313,484 L387.131527,484 C350.084266,484 320.051527,453.967261 320.051527,416.92 L320.051,192.137 L97.08,192.137143 C60.032739,192.137143 30,162.104404 30,125.057143 L30,99.08 C30,62.032739 60.032739,32 97.08,32 L413.92,32 Z M147.053435,248.96 C211.700262,248.96 264.10687,301.382765 264.10687,366.049524 C264.10687,430.716282 211.700262,483.139048 147.053435,483.139048 C82.406608,483.139048 30,430.716282 30,366.049524 C30,301.382765 82.406608,248.96 147.053435,248.96 Z",id:"BotMate-Logo",fill:i})})]})};var _=t(8105),z=t(9473),L=t(4158),I=t(8778),N=t(1157),M=t(863),R=t(8188),X=t.n(R),F=t(9789),D=t(6722);let P=X()(()=>t.e(606).then(t.bind(t,7606)).then(e=>e.default),{loadableGenerated:{webpack:()=>[7606]},ssr:!1});function W(e){let{isLoading:n,onDone:t,initialData:i,onCancel:s}=e,l=(0,M.cI)(),o=async e=>{null==t||t(e)};return(0,k.useEffect)(()=>{l.reset(i)},[l,i]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:l.handleSubmit(o),children:[(0,r.jsxs)(d.K,{spacing:6,children:[(0,r.jsxs)(_.M,{columns:{base:1,lg:2},gap:6,children:[(0,r.jsxs)(z.NI,{children:[(0,r.jsx)(L.l,{children:"Alias"}),(0,r.jsx)(I.I,{...l.register("name"),placeholder:"Enter command alias"})]}),(0,r.jsxs)(z.NI,{children:[(0,r.jsx)(L.l,{children:"Command"}),(0,r.jsx)(I.I,{...l.register("command"),placeholder:"Enter command"})]})]}),(0,r.jsxs)(z.NI,{children:[(0,r.jsx)(L.l,{children:"Script"}),(0,r.jsx)(P,{height:"400px",extensions:[(0,F.eJ)({jsx:!0})],theme:D.KR,value:l.getValues("script"),onChange:e=>l.setValue("script",e)})]})]}),(0,r.jsxs)(N.h,{mt:6,children:[(0,r.jsx)(w.z,{variant:"solid",type:"submit",isLoading:n,children:"Save"}),(0,r.jsx)(w.z,{onClick:()=>s?s():null,children:"Cancel"})]})]})})}var B=t(5008);function U(e){let{icon:n,title:t,description:i,action:s}=e;return(0,r.jsx)(B.M,{h:"full",children:(0,r.jsxs)(l.xu,{textAlign:"center",children:[(0,r.jsx)(B.M,{fontSize:54,opacity:.6,children:n}),(0,r.jsx)(v.X,{mt:2,children:t}),(0,r.jsx)(x.x,{mt:1,opacity:.8,children:i}),(0,r.jsx)(l.xu,{mt:4,children:s})]})})}let A=X()(()=>t.e(606).then(t.bind(t,7606)).then(e=>e.default),{loadableGenerated:{webpack:()=>[7606]},ssr:!1});function K(e){let{isLoading:n,onDone:t,initialData:i,onCancel:s}=e,l=(0,M.cI)(),o=async e=>{null==t||t(e)};return(0,k.useEffect)(()=>{l.reset(i)},[l,i]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:l.handleSubmit(o),children:[(0,r.jsxs)(d.K,{spacing:6,children:[(0,r.jsx)(_.M,{columns:{base:1,lg:2},gap:6,children:(0,r.jsxs)(z.NI,{children:[(0,r.jsx)(L.l,{children:"Name"}),(0,r.jsx)(I.I,{...l.register("name"),placeholder:"Enter conversation name"})]})}),(0,r.jsxs)(z.NI,{children:[(0,r.jsx)(L.l,{children:"Script"}),(0,r.jsx)(A,{height:"400px",extensions:[(0,F.eJ)({jsx:!0})],theme:D.KR,value:l.getValues("script"),onChange:e=>l.setValue("script",e)})]})]}),(0,r.jsxs)(N.h,{mt:6,children:[(0,r.jsx)(w.z,{variant:"solid",type:"submit",isLoading:n,children:"Save"}),(0,r.jsx)(w.z,{onClick:()=>s?s():null,children:"Cancel"})]})]})})}},639:function(e,n,t){"use strict";t.r(n);var r=t(7458),i=t(2983),s=t(1573),l=t(412),o=t(8105),a=t(534),c=t(4378),d=t(4015),h=t(2874),u=t(8778),x=t(9913),j=t(6384),m=t(5477),g=t.n(m),p=t(5106),f=t(1966);n.default=function(){let e=(0,i.useRef)(null),[n,{isLoading:t,error:m}]=(0,p.eP)(),b=async()=>{var t;let r=null===(t=e.current)||void 0===t?void 0:t.value;r&&(await n({createBotDto:{token:r}}).unwrap(),window.location.href="/")},v=null==m?void 0:m.message;return(0,r.jsxs)(s.k,{h:"100vh",children:[(0,r.jsx)(g(),{children:(0,r.jsx)("title",{children:"Setup BotMate"})}),(0,r.jsx)(l.xu,{w:"4xl",m:"auto",px:{base:4,lg:0},children:(0,r.jsxs)(o.M,{columns:10,spacing:8,children:[(0,r.jsx)(a.P,{colSpan:{base:10,lg:6},children:(0,r.jsxs)(l.xu,{p:6,bg:"secondary.dark",rounded:"xl",shadow:"dark-lg",children:[(0,r.jsx)(f.lR,{width:"40px",height:"40px"}),(0,r.jsx)(c.X,{mt:6,size:"md",children:"\uD83D\uDE80 Setup your new bot"}),(0,r.jsx)(d.x,{mt:2,opacity:.8,children:"Let's start by creating your bot. Enter your bot token and click continue."}),(0,r.jsxs)(h.U,{mt:6,children:[(0,r.jsx)(u.I,{ref:e,placeholder:"Enter bot token"}),(0,r.jsx)(x.z,{variant:"solid",isLoading:t,onClick:b,children:"Contine"})]}),v?(0,r.jsxs)(d.x,{mt:4,color:"red.300",children:["Error: ",v]}):null]})}),(0,r.jsx)(a.P,{colSpan:{base:10,lg:4},children:(0,r.jsxs)(l.xu,{p:6,bg:"secondary.dark",rounded:"xl",shadow:"dark-lg",children:[(0,r.jsx)(c.X,{size:"md",children:"How to get bot token?"}),(0,r.jsxs)(d.x,{mt:2,opacity:.8,children:["You can get your bot token from"," ",(0,r.jsx)(j.m.a,{fontWeight:"bold",href:"https://t.me/botfather",target:"_blank",_hover:{opacity:.8},children:"@BotFather"})," ","on Telegram."]}),(0,r.jsx)(c.X,{mt:8,size:"md",children:"Need help?"}),(0,r.jsx)(d.x,{mt:2,opacity:.8,children:"Join our official support group to get any kind of help."})]})})]})})]})}},534:function(e,n,t){"use strict";t.d(n,{P:function(){return c}});var r=t(2681),i=t(6384),s=t(3178),l=t(9878),o=t(7458);function a(e){return(0,l.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var c=(0,r.G)(function(e,n){let{area:t,colSpan:r,colStart:l,colEnd:c,rowEnd:d,rowSpan:h,rowStart:u,...x}=e,j=(0,s.oA)({gridArea:t,gridColumn:a(r),gridRow:a(h),gridColumnStart:l,gridColumnEnd:c,gridRowStart:u,gridRowEnd:d});return(0,o.jsx)(i.m.div,{ref:n,__css:j,...x})});c.displayName="GridItem"}},function(e){e.O(0,[421,433,697,774,888,179],function(){return e(e.s=597)}),_N_E=e.O()}]);