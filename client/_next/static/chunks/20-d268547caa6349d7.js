"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20],{2020:function(e,n,t){t.d(n,{Lb:function(){return r},gd:function(){return eM},RA:function(){return eL},VL:function(){return ei},DJ:function(){return el},y7:function(){return ea},FM:function(){return er}});var s=t(7458),i=t(9512),l=t(5902);function r(e){let{activeChat:n}=(0,l.P)();return n?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.q,{src:"http://localhost:8080/api/download/photo/".concat(null==n?void 0:n.chat_id,".jpg")})}):null}var a=t(6774),c=t(2874),o=t(4015),d=t(4297),u=t(929),h=t(2185),x=t(9224),p=t(3242),m=t(9577),j=t(9938),f={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},g=!1,v=null,b=!1,k=!1,y=new Set;function w(e,n){y.forEach(t=>t(e,n))}var _="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function C(e){b=!0,e.metaKey||!_&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(v="keyboard",w("keyboard",e))}function E(e){if(v="pointer","mousedown"===e.type||"pointerdown"===e.type){b=!0;let n=e.composedPath?e.composedPath()[0]:e.target,t=!1;try{t=n.matches(":focus-visible")}catch{}t||w("pointer",e)}}function L(e){(0===e.mozInputSource&&e.isTrusted||0===e.detail&&!e.pointerType)&&(b=!0,v="virtual")}function S(e){e.target!==window&&e.target!==document&&(b||k||(v="virtual",w("virtual",e)),b=!1,k=!1)}function M(){b=!1,k=!0}function z(){return"pointer"!==v}var B=t(2983);function P(e){e.preventDefault(),e.stopPropagation()}var F=t(2681),I=t(8875),N=t(5906),K=t(6384),D=(0,F.G)(function(e,n){let t=(0,I.jC)("Switch",e),{spacing:i="0.5rem",children:l,...r}=(0,N.Lr)(e),{state:a,getInputProps:c,getCheckboxProps:o,getRootProps:d,getLabelProps:v}=function(e={}){let n=(0,u.K)(e),{isDisabled:t,isReadOnly:s,isRequired:i,isInvalid:l,id:r,onBlur:a,onFocus:c,"aria-describedby":o}=n,{defaultChecked:d,isChecked:v,isFocusable:k,onChange:w,isIndeterminate:_,name:F,value:I,tabIndex:N,"aria-label":K,"aria-labelledby":D,"aria-invalid":A,...T}=e,U=function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(T,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),O=(0,p.W)(w),V=(0,p.W)(a),W=(0,p.W)(c),[q,H]=(0,B.useState)(!1),[G,R]=(0,B.useState)(!1),[Z,Y]=(0,B.useState)(!1),[X,J]=(0,B.useState)(!1);(0,B.useEffect)(()=>(function(e){!function(){if("undefined"==typeof window||g)return;let{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){b=!0,e.apply(this,n)},document.addEventListener("keydown",C,!0),document.addEventListener("keyup",C,!0),document.addEventListener("click",L,!0),window.addEventListener("focus",S,!0),window.addEventListener("blur",M,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",E,!0),document.addEventListener("pointermove",E,!0),document.addEventListener("pointerup",E,!0)):(document.addEventListener("mousedown",E,!0),document.addEventListener("mousemove",E,!0),document.addEventListener("mouseup",E,!0)),g=!0}(),e(z());let n=()=>e(z());return y.add(n),()=>{y.delete(n)}})(H),[]);let Q=(0,B.useRef)(null),[$,ee]=(0,B.useState)(!0),[en,et]=(0,B.useState)(!!d),es=void 0!==v,ei=es?v:en,el=(0,B.useCallback)(e=>{if(s||t){e.preventDefault();return}es||(ei?et(e.target.checked):et(!!_||e.target.checked)),null==O||O(e)},[s,t,ei,es,_,O]);(0,h.G)(()=>{Q.current&&(Q.current.indeterminate=Boolean(_))},[_]),(0,x.r)(()=>{t&&R(!1)},[t,R]),(0,h.G)(()=>{let e=Q.current;(null==e?void 0:e.form)&&(e.form.onreset=()=>{et(!!d)})},[]);let er=t&&!k,ea=(0,B.useCallback)(e=>{" "===e.key&&J(!0)},[J]),ec=(0,B.useCallback)(e=>{" "===e.key&&J(!1)},[J]);(0,h.G)(()=>{if(!Q.current)return;let e=Q.current.checked!==ei;e&&et(Q.current.checked)},[Q.current]);let eo=(0,B.useCallback)((e={},n=null)=>{let i=e=>{G&&e.preventDefault(),J(!0)};return{...e,ref:n,"data-active":(0,j.PB)(X),"data-hover":(0,j.PB)(Z),"data-checked":(0,j.PB)(ei),"data-focus":(0,j.PB)(G),"data-focus-visible":(0,j.PB)(G&&q),"data-indeterminate":(0,j.PB)(_),"data-disabled":(0,j.PB)(t),"data-invalid":(0,j.PB)(l),"data-readonly":(0,j.PB)(s),"aria-hidden":!0,onMouseDown:(0,j.v0)(e.onMouseDown,i),onMouseUp:(0,j.v0)(e.onMouseUp,()=>J(!1)),onMouseEnter:(0,j.v0)(e.onMouseEnter,()=>Y(!0)),onMouseLeave:(0,j.v0)(e.onMouseLeave,()=>Y(!1))}},[X,ei,t,G,q,Z,_,l,s]),ed=(0,B.useCallback)((e={},n=null)=>({...U,...e,ref:(0,m.lq)(n,e=>{e&&ee("LABEL"===e.tagName)}),onClick:(0,j.v0)(e.onClick,()=>{var e;$||(null==(e=Q.current)||e.click(),requestAnimationFrame(()=>{var e;null==(e=Q.current)||e.focus()}))}),"data-disabled":(0,j.PB)(t),"data-checked":(0,j.PB)(ei),"data-invalid":(0,j.PB)(l)}),[U,t,ei,l,$]),eu=(0,B.useCallback)((e={},n=null)=>({...e,ref:(0,m.lq)(Q,n),type:"checkbox",name:F,value:I,id:r,tabIndex:N,onChange:(0,j.v0)(e.onChange,el),onBlur:(0,j.v0)(e.onBlur,V,()=>R(!1)),onFocus:(0,j.v0)(e.onFocus,W,()=>R(!0)),onKeyDown:(0,j.v0)(e.onKeyDown,ea),onKeyUp:(0,j.v0)(e.onKeyUp,ec),required:i,checked:ei,disabled:er,readOnly:s,"aria-label":K,"aria-labelledby":D,"aria-invalid":A?Boolean(A):l,"aria-describedby":o,"aria-disabled":t,style:f}),[F,I,r,el,V,W,ea,ec,i,ei,er,s,K,D,A,l,o,t,N]),eh=(0,B.useCallback)((e={},n=null)=>({...e,ref:n,onMouseDown:(0,j.v0)(e.onMouseDown,P),onTouchStart:(0,j.v0)(e.onTouchStart,P),"data-disabled":(0,j.PB)(t),"data-checked":(0,j.PB)(ei),"data-invalid":(0,j.PB)(l)}),[ei,t,l]);return{state:{isInvalid:l,isFocused:G,isChecked:ei,isActive:X,isHovered:Z,isIndeterminate:_,isDisabled:t,isReadOnly:s,isRequired:i},getRootProps:ed,getCheckboxProps:eo,getInputProps:eu,getLabelProps:eh,htmlProps:U}}(r),k=(0,B.useMemo)(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...t.container}),[t.container]),w=(0,B.useMemo)(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...t.track}),[t.track]),_=(0,B.useMemo)(()=>({userSelect:"none",marginStart:i,...t.label}),[i,t.label]);return(0,s.jsxs)(K.m.label,{...d(),className:(0,j.cx)("chakra-switch",e.className),__css:k,children:[(0,s.jsx)("input",{className:"chakra-switch__input",...c({},n)}),(0,s.jsx)(K.m.span,{...o(),className:"chakra-switch__track",__css:w,children:(0,s.jsx)(K.m.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":(0,j.PB)(a.isChecked),"data-hover":(0,j.PB)(a.isHovered)})}),l&&(0,s.jsx)(K.m.span,{className:"chakra-switch__label",...v(),__css:_,children:l})]})});D.displayName="Switch";var A=t(8778),T=t(392),U=t(3924),O=t(9912),V=t(4601),W=t(7010),q=t(9452),H=t(4285),G=t(7929),R=t(9473),Z=t(7008),Y=t(9913),X=t(5106),J=t(8893),Q=t(863),$=t(2122),ee=t(2671);let en=e=>{let{type:n}=e,t=(0,Q.cI)(),i=(0,J.wf)(),l=(0,J.KF)(),[r,{isLoading:a}]=(0,X.di)(),{data:c}=(0,X.SQ)({botId:null==i?void 0:i.id,chatId:null==l?void 0:l.chat_id,type:n});(0,B.useEffect)(()=>{c&&t.reset(c.value)},[c]);let o=()=>{let e=t.getValues();r({botId:null==i?void 0:i.id,chatId:null==l?void 0:l.chat_id,saveFilterDto:{type:n,value:e}}).then(()=>{ee.Am.success("Filter saved",{icon:(0,s.jsx)($.dZ6,{}),progressStyle:{backgroundColor:"#49b793"}})})};return{form:t,isSaving:a,saveData:o}},et=[{id:"links",label:"Links",example:"www.domain.com"},{id:"mentions",label:"Mentions"},{id:"emojis",label:"Emojis"},{id:"files",label:"Files",example:"png",options:[{id:"limit_file_size",label:"Limit file size",type:"checkbox",yes:{id:"file_size",label:"File size",type:"input"}}]},{id:"stickers",label:"Stickers",example:"t.me/addstickers/..."}],es=e=>{let{form:n,option:t,message_type:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{children:t.label}),(0,s.jsx)(d.L,{}),"checkbox"===t.type?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(D,{...n.register("".concat(i,".").concat(t.id,".enabled"))})}):(0,s.jsx)(A.I,{w:"44",placeholder:"Enter value",...n.register("".concat(i,".").concat(t.id))})]},t.id),n.getValues("".concat(i,".").concat(t.id,".enabled"))?t.yes?(0,s.jsx)(es,{form:n,option:t.yes,message_type:i}):null:""]})};function ei(e){var n;let{}=e,t=(0,T.q)(),[i,l]=(0,B.useState)(null),{form:r,isSaving:u,saveData:h}=en({type:"messages"}),x=(0,B.useCallback)(e=>r.getValues("".concat(null==i?void 0:i.id,".").concat(e)),[r,i]);return(0,s.jsxs)(a.Zb,{title:"Message Type",description:"Configure what must be filtered",children:[(0,s.jsx)(U.K,{children:et.map(e=>{let n=r.getValues("".concat(e.id,".method")),i=r.getValues("".concat(e.id,".filter")),a=i?null==i?void 0:i.split(",").length:0;return(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{size:"sm",children:e.label}),(0,s.jsx)(d.L,{}),(0,s.jsxs)(o.x,{userSelect:"none",cursor:"pointer",fontWeight:"semibold",_hover:{opacity:.8},transition:"opacity 0.2s",onClick:()=>{l(e),t.onOpen()},children:["block"===n?"Block":"Allow"," ",a>0?"(".concat(a,")"):"all"]})]},e.label)})}),(0,s.jsxs)(O.u_,{isOpen:t.isOpen,onClose:t.onClose,trapFocus:!1,closeOnOverlayClick:!1,children:[(0,s.jsx)(V.Z,{}),(0,s.jsxs)(W.h,{children:[(0,s.jsx)(q.o,{}),(0,s.jsx)(H.x,{children:null==i?void 0:i.label}),(0,s.jsx)(G.f,{children:i?(0,s.jsxs)(U.K,{spacing:4,children:[(0,s.jsx)(a.EU,{activeIndex:"block"===x("method")?1:0,onChange:e=>{r.setValue("".concat(null==i?void 0:i.id,".method"),e)},options:[{label:"Allow",value:"allow"},{label:"Block",value:"block"}]}),(0,s.jsxs)(R.NI,{children:[(0,s.jsx)(A.I,{placeholder:"Enter your filter",...r.register("".concat(null==i?void 0:i.id,".filter"))}),(null==i?void 0:i.example)&&(0,s.jsxs)(R.Q6,{children:["Example: ",(0,s.jsx)("b",{children:i.example})]})]}),null===(n=i.options)||void 0===n?void 0:n.map(e=>(0,s.jsx)(es,{form:r,message_type:null==i?void 0:i.id,option:e},e.id))]}):null}),(0,s.jsx)(Z.m,{children:(0,s.jsx)(Y.z,{variant:"solid",onClick:h,isLoading:u,children:"Save"})})]})]})]})}function el(e){let{}=e,{form:n,isSaving:t,saveData:i}=en({type:"service_messages"}),{new_chat_members:l,left_chat_member:r,pinned_message:u}=n.watch();return(0,s.jsx)(a.Zb,{title:"Service Messages",description:"Filter out Telegram messages",action:(0,s.jsx)(Y.z,{isLoading:t,variant:"solid",onClick:i,children:"Save"}),children:(0,s.jsxs)(U.K,{children:[(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{size:"sm",children:"New members"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(D,{isChecked:l,...n.register("new_chat_members")})]}),(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{size:"sm",children:"Left members"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(D,{isChecked:r,...n.register("left_chat_member")})]}),(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{size:"sm",children:"Pinned message"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(D,{isChecked:u,...n.register("pinned_message")})]})]})})}function er(e){let{}=e,{form:n,isSaving:t,saveData:i}=en({type:"words"});return(0,s.jsx)(a.Zb,{title:"Blacklist Words",description:"Filter out messages containing specific words",action:(0,s.jsx)(Y.z,{isLoading:t,variant:"solid",onClick:i,children:"Save"}),children:(0,s.jsxs)(U.K,{spacing:4,children:[(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{size:"sm",children:"Warn user on violation"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(D,{...n.register("warn_user")})]}),(0,s.jsx)(A.I,{placeholder:"Add words, comma seperated.",...n.register("words")})]})})}function ea(e){let{}=e,{form:n,isSaving:t,saveData:i}=en({type:"advanced"});return(0,s.jsx)(a.Zb,{title:"Advanced Filtering",description:"Remove duplicates, delete forwards etc.",action:(0,s.jsx)(Y.z,{isLoading:t,variant:"solid",onClick:i,children:"Save"}),children:(0,s.jsxs)(U.K,{children:[(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{children:"Delete every forwaded message"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(D,{...n.register("delete_forwarded_message")})]}),(0,s.jsxs)(c.U,{children:[(0,s.jsx)(o.x,{children:"Delete duplicate message"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(D,{...n.register("delete_duplicate_message")})]})]})})}var ec=t(4378),eo=t(8105),ed=t(4158),eu=t(9004),eh=t(4611),ex=t(412),ep=t(3724),em=["h","minH","height","minHeight"],ej=(0,F.G)((e,n)=>{let t=(0,I.mq)("Textarea",e),{className:i,rows:l,...r}=(0,N.Lr)(e),a=(0,u.Y)(r),c=l?function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(t,em):t;return(0,s.jsx)(K.m.textarea,{ref:n,rows:l,...a,className:(0,j.cx)("chakra-textarea",i),__css:c})});ej.displayName="Textarea";var ef=t(3640);let eg=["send-message","ban","kick","mute","unrestrict","delete","warn"],ev=e=>{let{index:n,onDelete:t,onChange:i,defaultValues:l}=e,r=(0,Q.cI)({defaultValues:l}),a=(0,T.q)(),u=r.watch("type");return(0,B.useEffect)(()=>{null==i||i(r.getValues())},[r.watch()]),(0,s.jsxs)(ex.xu,{borderWidth:"1px",rounded:"lg",children:[(0,s.jsxs)(c.U,{p:4,bg:"#32323c5e",roundedTop:"lg",userSelect:"none",children:[(0,s.jsxs)(ec.X,{size:"sm",children:["Action #",n+1]}),(0,s.jsxs)(o.x,{opacity:.5,cursor:"pointer",onClick:a.onToggle,children:[a.isOpen?"Hide":"Show"," action details"]}),(0,s.jsx)(d.L,{}),(0,s.jsx)(ep.h,{"aria-label":"close",icon:(0,s.jsx)($._YF,{}),onClick:null!=t?t:()=>{}})]}),(0,s.jsxs)(U.K,{p:4,spacing:4,display:a.isOpen?"block":"none",children:[(0,s.jsxs)(eo.M,{columns:2,children:[(0,s.jsx)(o.x,{children:"Action type"}),(0,s.jsx)(eu.P,{...r.register("type"),children:eg.map(e=>(0,s.jsx)("option",{children:e},e))})]}),"send-message"===u?(0,s.jsx)(ej,{...r.register("value"),placeholder:"Message",rows:6,resize:"none",variant:"brand"}):"mute"===u?(0,s.jsxs)(eo.M,{columns:2,children:[(0,s.jsx)(o.x,{children:"Mute for"}),(0,s.jsx)(A.I,{autoFocus:!0,placeholder:"Enter time (eg: 1 day)",...r.register("mute_duration")})]}):"warn"===u?(0,s.jsxs)(eo.M,{columns:2,children:[(0,s.jsx)(o.x,{children:"Warn count"}),(0,s.jsx)(A.I,{autoFocus:!0,placeholder:"Enter warnings count",...r.register("warn_count")})]}):"ban"===u?(0,s.jsxs)(eo.M,{columns:2,children:[(0,s.jsx)(o.x,{children:"Ban for"}),(0,s.jsx)(A.I,{autoFocus:!0,placeholder:"Enter time (eg: 1 day)",...r.register("ban_duration")})]}):null]})]})};function eb(e){let{onChange:n}=e,[t,i]=(0,B.useState)([]);return(0,B.useEffect)(()=>{null==n||n(t)},[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U.K,{spacing:4,children:t.map((e,n)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ev,{index:n,defaultValues:e,onDelete:()=>{i(t.filter((e,t)=>t!==n))},onChange:e=>{i(t.map((t,s)=>s===n?e:t))}},n),t.length-1!==n&&(0,s.jsx)(ef.i,{},n)]}))}),(0,s.jsx)(Y.z,{mt:6,onClick:()=>{i([...t,{type:"send-message",value:""}])},children:"Add Action"})]})}var ek=t(1157);let ey=["text","photo","sticker","regex"],ew=["full-match","partial","starts-with","regex"],e_=e=>{let{index:n,defaultValues:t,onDelete:i,onChange:l}=e,r=(0,Q.cI)({defaultValues:t}),a=(0,T.q)();return(0,B.useEffect)(()=>{null==l||l(r.getValues())},[r.watch()]),(0,s.jsxs)(ex.xu,{borderWidth:"1px",rounded:"lg",children:[(0,s.jsxs)(c.U,{p:4,bg:"#32323c5e",roundedTop:"lg",userSelect:"none",children:[(0,s.jsxs)(ec.X,{size:"sm",children:["Condition #",n]}),(0,s.jsxs)(o.x,{opacity:.5,cursor:"pointer",onClick:a.onToggle,children:[a.isOpen?"Hide":"Show"," condition details"]}),(0,s.jsx)(d.L,{}),(0,s.jsx)(ep.h,{"aria-label":"close",icon:(0,s.jsx)($._YF,{}),onClick:null!=i?i:()=>{}})]}),(0,s.jsxs)(U.K,{p:4,spacing:4,display:a.isOpen?"block":"none",children:[(0,s.jsxs)(ex.xu,{children:[(0,s.jsx)(o.x,{children:"Condition value"}),(0,s.jsx)(ej,{mt:2,placeholder:"Enter condition value",rows:5,resize:"none",flex:1,variant:"brand",...r.register("value")})]}),(0,s.jsxs)(eo.M,{columns:2,children:[(0,s.jsx)(o.x,{children:"Message type"}),(0,s.jsx)(eu.P,{...r.register("type"),children:ey.map(e=>(0,s.jsx)("option",{children:e},e))})]}),(0,s.jsxs)(eo.M,{columns:2,children:[(0,s.jsx)(o.x,{children:"Match type"}),(0,s.jsx)(eu.P,{...r.register("matchType"),children:ew.map(e=>(0,s.jsx)("option",{children:e},e))})]})]})]})};var eC=function(e){let{onChange:n}=e,[t,i]=(0,B.useState)([]);return(0,B.useEffect)(()=>{null==n||n(t)},[t]),(0,s.jsxs)(ex.xu,{children:[(0,s.jsx)(U.K,{spacing:4,children:t.map((e,n)=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e_,{index:n+1,defaultValues:e,onDelete:()=>{i(t.filter((e,t)=>t!==n))},onChange:e=>{i(t.map((t,s)=>s===n?e:t))}},n),t.length-1!==n&&(0,s.jsx)(ef.i,{},n)]}))}),(0,s.jsx)(ek.h,{mt:6,children:(0,s.jsx)(Y.z,{onClick:()=>{i([...t,{type:"text",matchType:"full-match",value:""}])},children:"Add Condition"})})]})};let eE=["all","replies","replies-to-bot"];function eL(e){let{}=e,n=(0,Q.cI)({defaultValues:{conditions:[],actions:[]}}),t=n.watch("name");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.U,{p:4,borderBottomWidth:"1px",children:[(0,s.jsx)(ec.X,{size:"md",children:t||"Unnamed Trigger"}),(0,s.jsx)(d.L,{}),(0,s.jsx)(Y.z,{variant:"solid",leftIcon:(0,s.jsx)(eh.mW3,{}),children:"Save"})]}),(0,s.jsxs)(eo.M,{columns:{base:1,lg:2},spacing:4,p:4,children:[(0,s.jsxs)(R.NI,{children:[(0,s.jsx)(ed.l,{children:"Name"}),(0,s.jsx)(A.I,{placeholder:"Enter trigger name",...n.register("name")})]}),(0,s.jsxs)(R.NI,{children:[(0,s.jsx)(ed.l,{children:"Mode"}),(0,s.jsx)(eu.P,{...n.register("mode"),children:eE.map(e=>(0,s.jsx)("option",{value:e,children:e},e))})]})]}),(0,s.jsxs)(eo.M,{columns:{base:1,lg:2},p:4,spacing:6,children:[(0,s.jsxs)(R.NI,{children:[(0,s.jsx)(ed.l,{children:"Conditions"}),(0,s.jsx)(eC,{})]}),(0,s.jsxs)(R.NI,{children:[(0,s.jsx)(ed.l,{children:"Actions"}),(0,s.jsx)(eb,{onChange:e=>{n.setValue("actions",e)}})]})]})]})}let eS=()=>{let e=(0,J.wf)(),[n,{isLoading:t}]=(0,X.DJ)(),s=(t,s)=>{e&&n({botId:e.id,chatId:t,createAnnouncementDto:{text:s}})};return{createAnnouncement:s,isLoading:t}};function eM(e){let{}=e,n=(0,B.useRef)(null),{createAnnouncement:t}=eS(),i=(0,J.KF)();return(0,s.jsxs)(U.K,{spacing:4,children:[(0,s.jsx)(ec.X,{size:"sm",children:"New Announcement"}),(0,s.jsx)(ej,{ref:n,variant:"brand",placeholder:"Enter text",resize:"none",rows:6}),(0,s.jsxs)(ek.h,{children:[(0,s.jsx)(Y.z,{variant:"solid",onClick:()=>{var e;t(i.chat_id,(null===(e=n.current)||void 0===e?void 0:e.value)||"")},children:"Send"}),(0,s.jsx)(Y.z,{children:"Multiple groups"})]})]})}},9004:function(e,n,t){t.d(n,{P:function(){return h}});var s=t(9938),i=t(2681),l=t(6384),r=t(7458),a=(0,i.G)(function(e,n){let{children:t,placeholder:i,className:a,...c}=e;return(0,r.jsxs)(l.m.select,{...c,ref:n,className:(0,s.cx)("chakra-select",a),children:[i&&(0,r.jsx)("option",{value:"",children:i}),t]})});a.displayName="SelectField";var c=t(929),o=t(8875),d=t(5906),u=t(2983),h=(0,i.G)((e,n)=>{var t;let i=(0,o.jC)("Select",e),{rootProps:u,placeholder:h,icon:x,color:p,height:j,h:f,minH:g,minHeight:v,iconColor:b,iconSize:k,...y}=(0,d.Lr)(e),[w,_]=function(e,n){let t={},s={};for(let[i,l]of Object.entries(e))n.includes(i)?t[i]=l:s[i]=l;return[t,s]}(y,d.oE),C=(0,c.Y)(_),E={paddingEnd:"2rem",...i.field,_focus:{zIndex:"unset",...null==(t=i.field)?void 0:t._focus}};return(0,r.jsxs)(l.m.div,{className:"chakra-select__wrapper",__css:{width:"100%",height:"fit-content",position:"relative",color:p},...w,...u,children:[(0,r.jsx)(a,{ref:n,height:null!=f?f:j,minH:null!=g?g:v,placeholder:h,...C,__css:E,children:e.children}),(0,r.jsx)(m,{"data-disabled":(0,s.PB)(C.disabled),...(b||p)&&{color:b||p},__css:i.icon,...k&&{fontSize:k},children:x})]})});h.displayName="Select";var x=e=>(0,r.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),p=(0,l.m)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),m=e=>{let{children:n=(0,r.jsx)(x,{}),...t}=e,s=(0,u.cloneElement)(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return(0,r.jsx)(p,{...t,className:"chakra-select__icon-wrapper",children:(0,u.isValidElement)(n)?s:null})};m.displayName="SelectIcon"}}]);