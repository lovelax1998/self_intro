"use strict";exports.id=810,exports.ids=[810],exports.modules={9750:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(997);let l=({children:e,className:t="",...s})=>a.jsx("div",{className:`mt-20 mb-10 lg:mt-0 p-8 ${t} `,...s,children:e})},1369:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(997),l=s(7536),r=s(4634),n=s(6689);let i=({isOpen:e,onClose:t,children:s})=>a.jsx(l.u,{appear:!0,show:e,as:n.Fragment,children:(0,a.jsxs)(r.V,{as:"div",className:"relative z-10",onClose:t,children:[a.jsx(l.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-80"})}),a.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:a.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:a.jsx(l.u.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:a.jsx(r.V.Panel,{className:"p-5 bg-transparent w-full max-w-full transform overflow-hidden shadow-xl transition-all",children:s})})})})]})})},3412:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(997),l=s(2587),r=s.n(l);let n={fontSize:14,minimap:{enabled:!1},wordWrap:"on",scrollbar:{verticalScrollbarSize:9},scrollBeyondLastLine:!1,formatOnPaste:!0,formatOnType:!0},i=({code:e,onChange:t,height:s="300px",isFullScreen:l=!1})=>a.jsx(r(),{height:l?"70vh":s,language:"javascript",theme:"vs-dark",value:e,onChange:t,options:n,onMount:e=>{setTimeout(function(){e.getAction("editor.action.formatDocument").run()},500)}})},5171:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>g});var l=s(997),r=s(8103),n=s.n(r),i=s(6689),o=s(3091),c=s(4163),d=s(8540),x=s(3412),u=s(8483),p=s(8432),m=s(3581),h=e([c,d,p]);[c,d,p]=h.then?(await h)():h;let g=({id:e,code:t,output:s,isFullScreen:a,onFullScreen:r,onCloseFullScreen:h,onRunCode:g,onSetCode:j,onSetOutput:v,isError:f=!1})=>{let y=(0,i.useRef)(null),b=(0,d.Z)(),S=()=>{let e=y.current;null!==e&&b&&e.resize(50)};return(0,i.useEffect)(()=>{b&&S()},[b]),(0,l.jsxs)(l.Fragment,{children:[l.jsx("div",{className:"flex flex-auto bg-neutral-900 border border-neutral-700 rounded-t-md",children:(0,l.jsxs)(c.PanelGroup,{autoSaveId:e,direction:b?"vertical":"horizontal",onLayout:e=>{document.cookie=`react-resizable-panels:layout=${JSON.stringify(e)}`},style:{height:b?"100vh":"100%"},children:[(0,l.jsxs)(c.Panel,{ref:y,defaultSize:50,minSize:20,collapsible:!0,children:[l.jsx(m.Z,{title:"JavaScript",children:(0,l.jsxs)("div",{className:"flex items-center gap-5",children:[l.jsx("div",{className:"cursor-pointer",onClick:()=>j(""),"data-umami-event":"Clear Editor Playground",children:l.jsx(o.Frg,{size:18,className:n()("text-neutral-400",t&&"text-red-400")})}),l.jsx("div",{className:"cursor-pointer",onClick:g,"data-umami-event":"Run Code Playground",children:l.jsx(o.cgd,{size:18,className:n()("text-sky-500",!t&&"!text-neutral-400")})})]})}),l.jsx(x.Z,{code:t,height:"500px",isFullScreen:a,onChange:e=>void 0!==e&&j(e)})]}),l.jsx(c.PanelResizeHandle,{className:"w-2 bg-neutral-700"}),(0,l.jsxs)(c.Panel,{defaultSize:50,minSize:20,collapsible:!0,children:[l.jsx(m.Z,{title:"Console",children:l.jsx("div",{className:"flex items-center",children:l.jsx("div",{className:"cursor-pointer",onClick:()=>v(""),"data-umami-event":"Clear Output Playground",children:l.jsx(o.Frg,{size:18,className:n()("text-neutral-400",s&&"text-red-400")})})})}),l.jsx(u.Z,{output:s,isError:f,isFullScreen:a})]})]})}),l.jsx(p.Z,{isFullScreen:a,onCloseFullScreen:h,onFullScreen:r})]})};a()}catch(e){a(e)}})},8483:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(997),l=s(8103),r=s.n(l);let n=({output:e,isError:t,isFullScreen:s=!1})=>a.jsx("div",{className:r()("bg-neutral-900 text-neutral-50 py-3 px-4 overflow-y-auto",s?"h-[70vh]":"h-[500px]",t&&"!text-red-400"),children:a.jsx("code",{className:r()("text-sm"),style:{whiteSpace:"pre-wrap",overflowWrap:"break-word"},children:e})})},8432:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>c});var l=s(997),r=s(4),n=s(4684),i=s(8374),o=e([n]);n=(o.then?(await o)():o)[0];let c=({isFullScreen:e,onCloseFullScreen:t,onFullScreen:s})=>(0,l.jsxs)("div",{className:"flex items-center justify-between bg-neutral-900 border border-neutral-700 border-t-0 py-1 px-2 rounded-b-md",children:[(0,l.jsxs)("div",{className:"text-sm font-sora items-center text-neutral-500",children:["\xa9 ",l.jsx("a",{href:i.siteMetadata.siteUrl,children:i.siteMetadata.siteShortTitle})]}),e?l.jsx(n.Z,{title:"Close",children:l.jsx(r.bAO,{size:22,onClick:t,className:" text-neutral-500 cursor-pointer","data-umami-event":"Open Fullscreen Playground"})}):l.jsx(n.Z,{title:"Fullscreen",children:l.jsx(r.yvD,{size:22,onClick:s,className:" text-neutral-500 cursor-pointer","data-umami-event":"Exit Fullscreen Playground"})})]});a()}catch(e){a(e)}})},3581:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(997);let l=({title:e,children:t})=>(0,a.jsxs)("div",{className:"flex justify-between py-2 px-3 border border-b-neutral-700 border-t-0 border-x-0",children:[a.jsx("div",{className:"py-1 px-2 bg-neutral-600 text-xs rounded-md text-neutral-50 font-sora",children:e}),t&&t]})},2480:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>d});var l=s(997),r=s(6689),n=s(1369),i=s(5171),o=s(4338),c=e([i]);i=(c.then?(await c)():c)[0];let d=({id:e,isHeading:t=!1,initialCode:s})=>{let[a,c]=(0,r.useState)(s??""),[d,x]=(0,r.useState)(""),[u,p]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),g=()=>{h(!m)},j=()=>{try{p(!1);let e="",t=console.log;console.log=t=>e+=`${t}
`;let s=Function(a)();console.log=t,x(e+(s?.toString()??""))}catch(e){p(!0),e instanceof Error?x(e.toString()):x("An unknown error occurred.")}};return(0,l.jsxs)(l.Fragment,{children:[t&&l.jsx(o.Z,{}),l.jsx(i.Z,{id:e,onFullScreen:g,code:a,output:d,isError:u,onRunCode:j,onSetCode:c,onSetOutput:x}),l.jsx(n.Z,{isOpen:m,onClose:g,children:l.jsx(i.Z,{id:e,isFullScreen:m,onCloseFullScreen:g,code:a,output:d,isError:u,onRunCode:j,onSetCode:c,onSetOutput:x})})]})};a()}catch(e){a(e)}})},4338:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(997),l=s(8311);let r=()=>(0,a.jsxs)("div",{className:"flex flex-col md:items-center md:justify-center py-10 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[a.jsx(l.vl3,{size:24,className:"text-yellow-400"}),a.jsx("h1",{className:"text-2xl font-medium font-sora",children:"JavaScript Playground"})]}),a.jsx("p",{className:"text-neutral-600 dark:text-neutral-400",children:"A no-fuss pure JavaScript playground with a live feedback loop"})]})},7316:(e,t,s)=>{s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>n});var l=s(2480),r=e([l]);let n=(l=(r.then?(await r)():r)[0]).Z;a()}catch(e){a(e)}})},3668:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s(997),l=s(4801);let{umamiScriptSrc:r,umamiSiteId:n}=s(8374).siteMetadata.analytics;function i(){return(0,a.jsxs)(l.Html,{lang:"en",children:[(0,a.jsxs)(l.Head,{children:[r&&n&&a.jsx("script",{async:!0,defer:!0,src:r,"data-website-id":n}),a.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/logo.jpg"}),a.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/logo.jpg"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/images/logo.jpg"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/logo.jpg"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/images/logo.jpg"}),a.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/logo.jpg"})]}),(0,a.jsxs)("body",{children:[a.jsx(l.Main,{}),a.jsx(l.NextScript,{})]})]})}}};