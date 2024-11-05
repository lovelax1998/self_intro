(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9310:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9974)}])},732:function(e,t,r){"use strict";var n=r(4489),s=r(1527),l=r(5475);function i(){let e=(0,n._)(["\n  background-color: hsla(0, 0%, 100%, 0.05);\n  box-shadow: inset 0 0 0 1px hsla(0, 0%, 100%, 0.05);\n"]);return i=function(){return e},e}t.Z=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsx)(a,{className:"bg-white rounded-xl transition-all duration-300 shadow-sm ".concat(r," "),...n,children:t})};let a=l.Z.div(i())},9750:function(e,t,r){"use strict";var n=r(1527);t.Z=e=>{let{children:t,className:r="",...s}=e;return(0,n.jsx)("div",{className:"mt-20 mb-10 lg:mt-0 p-8 ".concat(r," "),...s,children:t})}},7553:function(e,t,r){"use strict";var n=r(1527);t.Z=e=>{let{title:t,icon:r,className:s=""}=e;return(0,n.jsxs)("div",{className:"flex items-center gap-1.5 text-xl font-medium text-neutral-800 dark:text-neutral-300 ".concat(s),children:[r&&(0,n.jsx)(n.Fragment,{children:r}),(0,n.jsx)("h2",{className:"capitalize",children:t})]})}},3894:function(e,t,r){"use strict";var n=r(1527);t.Z=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col lg:flex-row justify-between lg:items-center gap-2 text-neutral-600 dark:text-neutral-400",children:t})}},8684:function(e,t,r){"use strict";r.d(t,{WW:function(){return c},en:function(){return i},of:function(){return l},p6:function(){return s}});var n=r(6989);let s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMMM dd, yyyy";return e?(0,n.WU)(e,t):""},l=e=>e.reduce((e,t)=>{var r;let{frontMatter:n}=t,s=null!==(r=n.chapter_id)&&void 0!==r?r:0,l=n.chapter_title||"ungrouped";return e[s]||(e[s]={chapter_id:s,chapter_title:l,contents:[]}),e[s].contents.push(t),e},{}),i=e=>{let t=e.split("/");return{parentSlug:t[2],contentSlug:t[3]}},a=e=>"undefined"!=typeof DOMParser?new DOMParser().parseFromString(e,"text/html").body.textContent||"":e,c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=a(e);return r.length<=t?r:r.substring(0,t).replace(/\s+\S*$/,"")+(r.length>t?"...":"")}},1789:function(e,t,r){"use strict";var n=r(1527),s=r(5924),l=r(9383),i=r(5018),a=r.n(i),c=r(959),o=r(8899),u=r(1732),d=r(8180),x=r(6456),f=r(732),h=r(1507),m=r(4684),p=r(8684),g=r(8374);t.Z=e=>{var t;let[r,i]=(0,c.useState)(!1),v={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0}};return(0,n.jsx)(a(),{href:"/blog/".concat(e.slug),children:(0,n.jsxs)(f.Z,{className:"group relative flex flex-col border dark:border-neutral-800 shadow-sm rounded-lg h-[400px] w-full",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(0,n.jsxs)("div",{className:"duration-500 relative rounded-xl",style:{height:"400px",overflow:"hidden"},children:[(0,n.jsx)(h.Z,{src:e.frontMatter.featured_image_url||"/images/placeholder.png",alt:e.frontMatter.title,fill:!0,sizes:"100vw, 100vh",className:"object-cover object-left w-full h-full transform transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm",priority:!0}),(0,n.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80 transition-opacity duration-300"})]}),(0,n.jsxs)("div",{className:"absolute flex flex-col justify-between p-5 space-y-4 h-full",children:[(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:null===(t=e.frontMatter.tags)||void 0===t?void 0:t.map(e=>(0,n.jsxs)("div",{className:"px-2.5 py-1 rounded-full font-mono text-xs text-neutral-400 bg-neutral-900/50",children:[(0,n.jsx)("span",{className:"font-semibold mr-1",children:"#"}),e.charAt(0).toUpperCase()+e.slice(1)]},e))}),(0,n.jsxs)("div",{className:"flex flex-col justify-end",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,n.jsx)("h3",{className:"font-sora text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 ",children:e.frontMatter.title}),(0,n.jsxs)("div",{className:"flex gap-1 items-center text-neutral-400",children:[(0,n.jsx)(d.neb,{size:14}),(0,n.jsx)("span",{className:"text-xs ml-0.5",children:(0,p.p6)(e.frontMatter.date)})]}),e.frontMatter.summary&&(0,n.jsx)("p",{className:"leading-relaxed text-sm text-neutral-400",children:e.frontMatter.summary.slice(0,100)})]}),(0,n.jsx)(x.Z,{className:"!border-neutral-700"}),(0,n.jsxs)("div",{className:"flex justify-between gap-4 text-neutral-400 px-0.5",children:[(0,n.jsx)(m.Z,{title:"by ".concat(g.v.name),children:(0,n.jsx)(h.Z,{src:g.Fu.siteLogo,alt:g.Fu.author,width:25,height:25,rounded:"rounded-full"})}),(0,n.jsx)(l.E.div,{variants:v,initial:"visible",animate:r?"hidden":"visible",className:(0,s.Z)("flex justify-between gap-4 ",r&&"hidden"),children:(0,n.jsxs)("div",{className:"flex gap-1 items-center",children:[(0,n.jsx)(u.XoX,{size:14}),(0,n.jsxs)("span",{className:"text-xs font-medium ml-0.5",children:[e.props.readingTimeMinutes.toLocaleString()," MINS READ"]})]})}),(0,n.jsxs)(l.E.div,{variants:v,initial:"hidden",animate:r?"visible":"hidden",className:(0,s.Z)("flex gap-1 items-center",!r&&"hidden"),children:[(0,n.jsx)("span",{className:"text-xs font-medium mr-0.5",children:"READ MORE"}),(0,n.jsx)(o.lzl,{size:16})]})]})]})]})]})})}},9974:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return E},default:function(){return S}});var n=r(1527),s=r(1573),l=r(9750),i=r(8374),a=r(6456),c=r(5018),o=r.n(c),u=r(8899),d=r(7553),x=r(3894),f=r(9383),h=r(959),m="undefined"!=typeof window?h.useLayoutEffect:h.useEffect,p=r(1789),g=e=>{var t,r,s,l,i,a,c,o,u,d,x,g,v,j,w,N,b,M,y,E,S,X,Y,k,D,L,Z,_,C,T,I,z;let{blogList:W}=e,R=(0,h.useRef)(),{events:F}=(d=void 0===(u=(o={}).decayRate)?.95:u,g=void 0===(x=o.safeDisplacement)?10:x,j=void 0!==(v=o.applyRubberBandEffect)&&v,N=void 0===(w=o.activeMouseButton)?"Left":w,M=void 0===(b=o.isMounted)||b,y=(0,h.useRef)({isMouseDown:!1,isDraggingX:!1,isDraggingY:!1,initialMouseX:0,initialMouseY:0,lastMouseX:0,lastMouseY:0,scrollSpeedX:0,scrollSpeedY:0,lastScrollX:0,lastScrollY:0}),E=!1,S=!1,X=0,Y=0,k=1/60*1e3,m(function(){M&&(E="scroll"===window.getComputedStyle(R.current).overflowX,S="scroll"===window.getComputedStyle(R.current).overflowY,X=R.current.scrollWidth-R.current.clientWidth,Y=R.current.scrollHeight-R.current.clientHeight,t=window.getComputedStyle(R.current).cursor,r=[],s=[],l=[],R.current.childNodes.forEach(function(e){r.push(window.getComputedStyle(e).cursor),s.push("none"===window.getComputedStyle(e).transform?"":window.getComputedStyle(e).transform),l.push("none"===window.getComputedStyle(e).transition?"":window.getComputedStyle(e).transition)}))},[M]),D=function(){var e=y.current.scrollSpeedX*k,t=y.current.scrollSpeedY*k,r=R.current.scrollLeft+e,n=R.current.scrollTop+t;R.current.scrollLeft=r,R.current.scrollTop=n,y.current.lastScrollX=r,y.current.lastScrollY=n},L=function(e){var t=e.clientX-y.current.initialMouseX,r=e.clientY-y.current.initialMouseY,n=R.current,s=n.clientWidth,l=n.clientHeight,i=0,a=0;E&&S?(i=.3*s*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/s),a=.3*l*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/l)):E?i=.3*s*Math.sign(t)*Math.log10(1+.5*Math.abs(t)/s):S&&(a=.3*l*Math.sign(r)*Math.log10(1+.5*Math.abs(r)/l)),R.current.childNodes.forEach(function(e){e.style.transform="translate3d("+i+"px, "+a+"px, 0px)",e.style.transition="transform 0ms"})},Z=function(){R.current.childNodes.forEach(function(e,t){e.style.transform=s[t],e.style.transition=l[t]})},_=function(){a=setInterval(function(){var e=y.current.scrollSpeedX*d;y.current.scrollSpeedX=e;var t=R.current.scrollLeft<=0,r=R.current.scrollLeft>=X;D(),(.05>Math.abs(e)||y.current.isMouseDown||t||r)&&(y.current.scrollSpeedX=0,clearInterval(a))},k),c=setInterval(function(){var e=y.current.scrollSpeedY*d;y.current.scrollSpeedY=e;var t=R.current.scrollTop<=0,r=R.current.scrollTop>=Y;D(),(.05>Math.abs(e)||y.current.isMouseDown||t||r)&&(y.current.scrollSpeedY=0,clearInterval(c))},k),y.current.isDraggingX=!1,y.current.isDraggingY=!1,j&&(R.current.childNodes.forEach(function(e){e.style.transform="translate3d(0px, 0px, 0px)",e.style.transition="transform 250ms"}),i=setTimeout(Z,250))},C=function(e){e.preventDefault(),e.stopImmediatePropagation()},T=function(e){var n=y.current.isDraggingX||y.current.isDraggingY,s=y.current.initialMouseX-e.clientX,l=y.current.initialMouseY-e.clientY,i=n&&(Math.abs(s)>g||Math.abs(l)>g);i?R.current.childNodes.forEach(function(e){e.addEventListener("click",C)}):R.current.childNodes.forEach(function(e){e.removeEventListener("click",C)}),y.current.isMouseDown=!1,y.current.lastMouseX=0,y.current.lastMouseY=0,R.current.style.cursor=t,R.current.childNodes.forEach(function(e,t){e.style.cursor=r[t]}),i&&_()},I=function(e){if(y.current.isMouseDown){e.preventDefault();var t=y.current.lastMouseX-e.clientX;y.current.lastMouseX=e.clientX,y.current.scrollSpeedX=t/k,y.current.isDraggingX=!0;var r=y.current.lastMouseY-e.clientY;y.current.lastMouseY=e.clientY,y.current.scrollSpeedY=r/k,y.current.isDraggingY=!0,R.current.style.cursor="grabbing",R.current.childNodes.forEach(function(e){e.style.cursor="grabbing"});var n=R.current.scrollLeft<=0&&E,s=R.current.scrollLeft>=X&&E,l=R.current.scrollTop<=0&&S,i=R.current.scrollTop>=Y&&S;(n||s||l||i)&&j&&L(e),D()}},z=function(){X=R.current.scrollWidth-R.current.clientWidth,Y=R.current.scrollHeight-R.current.clientHeight},(0,h.useEffect)(function(){return M&&(window.addEventListener("mouseup",T),window.addEventListener("mousemove",I),window.addEventListener("resize",z)),function(){window.removeEventListener("mouseup",T),window.removeEventListener("mousemove",I),window.removeEventListener("resize",z),clearInterval(a),clearInterval(c),clearTimeout(i)}},[M]),{events:{onMouseDown:function(e){var t;t=e.buttons,("Left"===N&&1===t||"Middle"===N&&4===t||"Right"===N&&2===t)&&(y.current.isMouseDown=!0,y.current.lastMouseX=e.clientX,y.current.lastMouseY=e.clientY,y.current.initialMouseX=e.clientX,y.current.initialMouseY=e.clientY)}}});return(0,n.jsx)("div",{className:"flex p-1 gap-4 overflow-x-scroll scrollbar-hide",...F,ref:R,children:W.map((e,t)=>(0,n.jsx)(f.E.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.5},className:"min-w-[326px] gap-x-5",children:(0,n.jsx)(p.Z,{...e})},t))})},v=e=>{let{blogList:t}=e;return(0,n.jsxs)("section",{className:"space-y-6",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(d.Z,{title:"Latest Articles",className:"ml-1"}),(0,n.jsx)(x.Z,{children:(0,n.jsx)(o(),{href:"/blog",children:(0,n.jsxs)("div",{className:"flex gap-1 hover:gap-3 transition-all duration-300 cursor-pointer text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-300 mt-1",children:[(0,n.jsxs)("div",{className:"flex",children:["View All ",(0,n.jsx)("span",{className:"hidden sm:block ml-1",children:"Articles"})]}),(0,n.jsx)(u.UE1,{size:22})]})})})]}),(0,n.jsx)(g,{blogList:t})]})},j=()=>(0,n.jsxs)("section",{className:"bg-cover bg-no-repeat ",children:[(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsxs)("div",{className:"flex gap-2 text-2xl lg:text-3xl font-medium font-sora",children:[(0,n.jsxs)("h1",{children:["Hi, I'm ",i.v.name]})," ",(0,n.jsx)("div",{className:"ml-1 animate-waving-hand",children:"\uD83D\uDC4B"})]}),(0,n.jsx)("div",{className:"space-y-4",children:(0,n.jsxs)("ul",{className:"flex flex-col lg:flex-row gap-1 lg:gap-10 ml-5 list-disc text-neutral-700 dark:text-neutral-400",children:[(0,n.jsxs)("li",{children:["Based in ",i.v.location," ",(0,n.jsx)("span",{className:"ml-1",children:i.v.locationIcon})]}),(0,n.jsx)("li",{children:i.v.status})]})})]}),(0,n.jsx)("p",{className:"leading-[1.8] md:leading-loose mt-6 text-neutral-800 dark:text-neutral-300",children:i.Fu.siteDescription})]}),w=r(4240),N=r(8976),b=r(732),M=()=>(0,n.jsxs)("section",{className:"space-y-5",children:[(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsx)(d.Z,{title:"What I've been working on"}),(0,n.jsx)("p",{className:"leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300",children:i.v.workingOn})]}),(0,n.jsxs)(b.Z,{className:"p-8 bg-neutral-100 border dark:border-none rounded-xl space-y-4",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)(w.X3R,{size:24}),(0,n.jsx)("h3",{className:"text-xl font-medium",children:"Lets work together!"})]}),(0,n.jsx)("p",{className:"leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300 pl-2",children:i.v.workTogether}),(0,n.jsx)(o(),{href:"/contact",className:"inline-block",children:(0,n.jsx)(N.Z,{"data-umami-event":"Click Contact Button",children:"Contact me"})})]})]}),y=e=>{let{blogList:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{}),(0,n.jsx)(a.Z,{className:"mt-8 mb-7"}),(0,n.jsx)(v,{blogList:t}),(0,n.jsx)(a.Z,{className:"my-8"}),(0,n.jsx)(M,{})]})},E=!0,S=e=>{let{blogList:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.PB,{title:"".concat(i.Fu.author," - Personal Website")}),(0,n.jsx)(l.Z,{"data-aos":"fade-up",children:(0,n.jsx)(y,{blogList:t})})]})}}},function(e){e.O(0,[198,989,888,774,179],function(){return e(e.s=9310)}),_N_E=e.O()}]);