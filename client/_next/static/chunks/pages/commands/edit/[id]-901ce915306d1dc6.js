(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{2199:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/commands/edit/[id]",function(){return t(3676)}])},3676:function(e,n,t){"use strict";t.r(n);var i=t(7458),o=t(2983),r=t(5106),s=t(6774),a=t(8105),d=t(534),l=t(2874),u=t(4378),c=t(4297),f=t(3724),g=t(3640),m=t(3924),h=t(1966),x=t(571),j=t(9143),p=t(2122),b=t(1604);function _(){let e=(0,j.useRouter)(),{socket:n}=(0,b.as)(),[t,x]=(0,o.useState)([]),_=Number(e.query.id),[w,{data:E,isLoading:v}]=(0,r.V$)(),[S,{isLoading:N}]=(0,r.uf)();return((0,o.useEffect)(()=>{_&&w({id:_})},[w,_]),(0,o.useEffect)(()=>(n.on("bot:error",e=>{x(n=>[...n,{message:e,timestamp:new Date().toISOString(),type:"info"}])}),()=>{n.off("bot:error")}),[n]),v)?(0,i.jsx)(s.aN,{text:"loading command data..."}):(0,i.jsxs)(a.M,{columns:10,h:"full",overflow:{base:"scroll",lg:"hidden"},children:[(0,i.jsx)(d.P,{colSpan:{base:10,lg:7},borderRightWidth:"1px",p:4,children:(0,i.jsx)(h.yS,{isLoading:N,initialData:E,onDone:e=>{S({id:_,updateCommandDto:e}).then(()=>{})}})}),(0,i.jsxs)(d.P,{colSpan:{base:10,lg:3},overflow:{base:"visible",lg:"auto"},children:[(0,i.jsxs)(l.U,{p:4,children:[(0,i.jsx)(u.X,{size:"md",children:"Bot Logs"}),(0,i.jsx)(c.L,{}),(0,i.jsx)(f.h,{"aria-label":"add variable",variant:"ghost",fontSize:16,icon:(0,i.jsx)(p.b9W,{})})]}),(0,i.jsx)(g.i,{}),(0,i.jsx)(m.K,{p:4,children:(0,i.jsx)(i.Fragment,{children:t.map((e,n)=>(0,i.jsx)("code",{style:{color:"error"===e.type?"#fe5959":"#d6d6d6"},children:e.message},n))})})]})]})}_.getLayout=e=>(0,i.jsx)(x.cl,{title:"Edit Command",goBack:!0,noPadding:!0,action:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.L,{})}),children:e}),n.default=_},534:function(e,n,t){"use strict";t.d(n,{P:function(){return l}});var i=t(2681),o=t(6384),r=t(3178),s=t(9878),a=t(7458);function d(e){return(0,s.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var l=(0,i.G)(function(e,n){let{area:t,colSpan:i,colStart:s,colEnd:l,rowEnd:u,rowSpan:c,rowStart:f,...g}=e,m=(0,r.oA)({gridArea:t,gridColumn:d(i),gridRow:d(c),gridColumnStart:s,gridColumnEnd:l,gridRowStart:f,gridRowEnd:u});return(0,a.jsx)(o.m.div,{ref:n,__css:m,...g})});l.displayName="GridItem"}},function(e){e.O(0,[421,433,697,884,571,774,888,179],function(){return e(e.s=2199)}),_N_E=e.O()}]);