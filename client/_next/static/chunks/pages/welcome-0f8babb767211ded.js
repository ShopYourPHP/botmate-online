(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{7834:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/welcome",function(){return t(2477)}])},1966:function(e,n,t){"use strict";t.d(n,{XO:function(){return B},S8:function(){return I},lR:function(){return S},yS:function(){return K},pi:function(){return A},R6:function(){return p}});var s=t(7458),i=t(8893),r=t(1573),l=t(412),a=t(2874),o=t(4297),c=t(3724),d=t(3924),h=t(2122),x=t(5251),u=t(4015),j=t(3270),m=t.n(j),f=t(9143);function p(e){let{icon:n,label:t,href:i,match:r}=e,o=(0,f.useRouter)(),c=null==r?void 0:r.test(o.pathname),d=(0,x.ff)("secondary.light","secondary.dark");return(0,s.jsx)(m(),{href:i,children:(0,s.jsxs)(a.U,{px:3,py:1.5,opacity:c?1:.6,bg:c?d:"transparent",borderWidth:"1px",borderColor:c?"auto":"transparent",rounded:"md",userSelect:"none",cursor:"pointer",transition:"all 0.2s",_hover:{opacity:c?1:.8},children:[(0,s.jsx)(l.xu,{fontSize:"lg",children:n}),(0,s.jsx)(u.x,{children:t})]})})}var g=t(6774),b=t(5106),v=t(4378),w=t(9913),k=t(2983);function y(e){let{}=e,[n,t]=(0,k.useState)({version:"",isLoading:!0}),{data:i}=(0,b.Th)();return((0,k.useEffect)(()=>{fetch("https://registry.npmjs.org/botmate/latest").then(e=>e.json()).then(e=>{t({version:e.version,isLoading:!1})})},[]),n.isLoading||(null==i?void 0:i.version)===n.version)?null:(0,s.jsx)(l.xu,{p:4,borderWidth:"1px",rounded:"lg",children:(0,s.jsx)(a.U,{alignItems:"flex-start",children:(0,s.jsxs)(l.xu,{children:[(0,s.jsx)(v.X,{size:"sm",fontWeight:"normal",children:"New update available!"}),(0,s.jsxs)(u.x,{opacity:.6,fontSize:12,mt:1,children:[(0,s.jsxs)("b",{children:["v",n.version]})," is now available."]}),(0,s.jsx)(w.z,{mt:2,size:"xs",variant:"solid",children:"Update"})]})})})}let C=[{label:"Dashboard",icon:(0,s.jsx)(h.g3P,{}),href:"/",match:/^\/$/},{label:"Commands",icon:(0,s.jsx)(h.rz5,{}),href:"/commands",match:/^\/commands/},{label:"Analytics",icon:(0,s.jsx)(h.h4y,{}),href:"/analytics",match:/^\/analytics/},{label:"Moderations",icon:(0,s.jsx)(h.vqr,{}),href:"/moderations/filters",match:/^\/moderations/},{label:"Bot Debug",icon:(0,s.jsx)(h.Wds,{}),href:"/moderations/debug",match:/^\/debug/},{label:"Integrations",icon:(0,s.jsx)(h.WRS,{}),href:"/integrations",match:/^\/integrations/},{label:"Marketplace",icon:(0,s.jsx)(h._MD,{}),href:"/marketplace",match:/^\/marketplace/},{label:"Settings",icon:(0,s.jsx)(h.oq2,{}),href:"/settings/general",match:/^\/settings/}];function I(e){let{}=e;return(0,i.wf)(),(0,s.jsxs)(r.k,{flexDirection:"column",p:4,gap:6,h:"100vh",overflow:"auto",children:[(0,s.jsx)(l.xu,{children:(0,s.jsxs)(a.U,{width:"full",children:[(0,s.jsx)(S,{height:"25px",width:"25px"}),(0,s.jsx)(o.L,{}),(0,s.jsx)(c.h,{size:"md","aria-label":"notifications",variant:"outline",icon:(0,s.jsx)(h.Uet,{size:14})})]})}),(0,s.jsx)(d.K,{children:C.map(e=>(0,s.jsx)(p,{label:e.label,icon:e.icon,href:e.href,match:e.match},e.label))}),(0,s.jsx)(o.L,{}),(0,s.jsx)(y,{}),(0,s.jsx)(g.ZE,{})]})}let S=e=>{let{height:n,width:t,color:i="#FFFFFF"}=e;return(0,s.jsxs)("svg",{width:t,height:n,viewBox:"0 0 512 512",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,s.jsx)("title",{children:"botmate-logo-dark"}),(0,s.jsx)("g",{id:"botmate-logo-dark",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,s.jsx)("path",{d:"M413.92,32 C450.967261,32 481,62.032739 481,99.08 L481,125.057143 C481,128.723604 480.705845,132.321362 480.139846,135.828103 L480.139313,416.92 C480.139313,453.967261 450.106574,484 413.059313,484 L387.131527,484 C350.084266,484 320.051527,453.967261 320.051527,416.92 L320.051,192.137 L97.08,192.137143 C60.032739,192.137143 30,162.104404 30,125.057143 L30,99.08 C30,62.032739 60.032739,32 97.08,32 L413.92,32 Z M147.053435,248.96 C211.700262,248.96 264.10687,301.382765 264.10687,366.049524 C264.10687,430.716282 211.700262,483.139048 147.053435,483.139048 C82.406608,483.139048 30,430.716282 30,366.049524 C30,301.382765 82.406608,248.96 147.053435,248.96 Z",id:"BotMate-Logo",fill:i})})]})};var N=t(8105),L=t(9473),z=t(4158),E=t(8778),_=t(1157),M=t(863),R=t(8188),W=t.n(R),F=t(9789),X=t(6722);let P=W()(()=>t.e(606).then(t.bind(t,7606)).then(e=>e.default),{loadableGenerated:{webpack:()=>[7606]},ssr:!1});function K(e){let{isLoading:n,onDone:t,initialData:i,onCancel:r}=e,l=(0,M.cI)(),a=async e=>{null==t||t(e)};return(0,k.useEffect)(()=>{l.reset(i)},[l,i]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:l.handleSubmit(a),children:[(0,s.jsxs)(d.K,{spacing:6,children:[(0,s.jsxs)(N.M,{columns:{base:1,lg:2},gap:6,children:[(0,s.jsxs)(L.NI,{children:[(0,s.jsx)(z.l,{children:"Alias"}),(0,s.jsx)(E.I,{...l.register("name"),placeholder:"Enter command alias"})]}),(0,s.jsxs)(L.NI,{children:[(0,s.jsx)(z.l,{children:"Command"}),(0,s.jsx)(E.I,{...l.register("command"),placeholder:"Enter command"})]})]}),(0,s.jsxs)(L.NI,{children:[(0,s.jsx)(z.l,{children:"Script"}),(0,s.jsx)(P,{height:"400px",extensions:[(0,F.eJ)({jsx:!0})],theme:X.KR,value:l.getValues("script"),onChange:e=>l.setValue("script",e)})]})]}),(0,s.jsxs)(_.h,{mt:6,children:[(0,s.jsx)(w.z,{variant:"solid",type:"submit",isLoading:n,children:"Save"}),(0,s.jsx)(w.z,{onClick:()=>r?r():null,children:"Cancel"})]})]})})}var U=t(5008);function B(e){let{icon:n,title:t,description:i,action:r}=e;return(0,s.jsx)(U.M,{h:"full",children:(0,s.jsxs)(l.xu,{textAlign:"center",children:[(0,s.jsx)(U.M,{fontSize:54,opacity:.6,children:n}),(0,s.jsx)(v.X,{mt:2,children:t}),(0,s.jsx)(u.x,{mt:1,opacity:.8,children:i}),(0,s.jsx)(l.xu,{mt:4,children:r})]})})}let D=W()(()=>t.e(606).then(t.bind(t,7606)).then(e=>e.default),{loadableGenerated:{webpack:()=>[7606]},ssr:!1});function A(e){let{isLoading:n,onDone:t,initialData:i,onCancel:r}=e,l=(0,M.cI)(),a=async e=>{null==t||t(e)};return(0,k.useEffect)(()=>{l.reset(i)},[l,i]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:l.handleSubmit(a),children:[(0,s.jsxs)(d.K,{spacing:6,children:[(0,s.jsx)(N.M,{columns:{base:1,lg:2},gap:6,children:(0,s.jsxs)(L.NI,{children:[(0,s.jsx)(z.l,{children:"Name"}),(0,s.jsx)(E.I,{...l.register("name"),placeholder:"Enter conversation name"})]})}),(0,s.jsxs)(L.NI,{children:[(0,s.jsx)(z.l,{children:"Script"}),(0,s.jsx)(D,{height:"400px",extensions:[(0,F.eJ)({jsx:!0})],theme:X.KR,value:l.getValues("script"),onChange:e=>l.setValue("script",e)})]})]}),(0,s.jsxs)(_.h,{mt:6,children:[(0,s.jsx)(w.z,{variant:"solid",type:"submit",isLoading:n,children:"Save"}),(0,s.jsx)(w.z,{onClick:()=>r?r():null,children:"Cancel"})]})]})})}},2477:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var s=t(7458),i=t(2983),r=t(5821),l=t(5610),a=t(1523),o=t(1573),c=t(412),d=t(4378),h=t(4015),x=t(3924),u=t(9473),j=t(4158),m=t(8778),f=t(9913),p=t(1966),g=t(7882),b=t(5106),v=t(863),w=t(5477),k=t.n(w),y=t(9540),C=function(){let e=function(e){let{theme:n}=(0,a.uP)(),t=(0,r.OX)();return(0,i.useMemo)(()=>(0,l.Cj)(n.direction,{...t,...e}),[e,n.direction,t])}(),[n,{isLoading:t,error:w}]=(0,b.RR)(),C=(0,v.cI)(),I=(0,y.I0)();async function S(e){try{let t=await n({createUserDto:e}).unwrap();I((0,g.av)({user:t.user})),localStorage.setItem("botmate-token",t.accessToken),window.location.href="/"}catch(e){}}return(0,i.useEffect)(()=>{w&&e({title:"An error occurred.",description:w.message,status:"error",duration:5e3,position:"bottom-right"})},[w]),(0,s.jsxs)(o.k,{h:"100vh",px:{base:4,lg:0},children:[(0,s.jsx)(k(),{children:(0,s.jsx)("title",{children:"Welcome to BotMate"})}),(0,s.jsxs)(c.xu,{p:6,m:"auto",minW:"md",shadow:"dark-lg",rounded:"xl",bg:"secondary.dark",children:[(0,s.jsx)(p.lR,{width:"30px",height:"30px",color:"white"}),(0,s.jsx)(d.X,{mt:6,size:"md",children:"Welcome to BotMate"}),(0,s.jsx)(h.x,{mt:1,opacity:.8,children:"Please create an account to get started."}),(0,s.jsx)("form",{onSubmit:C.handleSubmit(S),children:(0,s.jsxs)(x.K,{mt:6,spacing:6,children:[(0,s.jsxs)(u.NI,{children:[(0,s.jsx)(j.l,{children:"Name"}),(0,s.jsx)(m.I,{...C.register("name"),placeholder:"Name"})]}),(0,s.jsxs)(u.NI,{children:[(0,s.jsx)(j.l,{children:"Email"}),(0,s.jsx)(m.I,{...C.register("email"),placeholder:"Email"})]}),(0,s.jsxs)(u.NI,{children:[(0,s.jsx)(j.l,{children:"Password"}),(0,s.jsx)(m.I,{...C.register("password"),placeholder:"Password"})]}),(0,s.jsx)(f.z,{type:"submit",variant:"solid",isLoading:t,children:"Submit"})]})})]})]})}}},function(e){e.O(0,[421,433,697,774,888,179],function(){return e(e.s=7834)}),_N_E=e.O()}]);