"use strict";(()=>{var e={};e.id=559,e.ids=[559,888,455],e.modules={1742:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>p,getServerSideProps:()=>x,getStaticPaths:()=>g,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>b,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>k,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>j});var a=r(4117),i=r(7428),l=r(3652),n=r(3668),o=r(1685),c=r(7228),d=e([o,c]);[o,c]=d.then?(await d)():d;let p=(0,l.l)(c,"default"),u=(0,l.l)(c,"getStaticProps"),g=(0,l.l)(c,"getStaticPaths"),x=(0,l.l)(c,"getServerSideProps"),m=(0,l.l)(c,"config"),h=(0,l.l)(c,"reportWebVitals"),j=(0,l.l)(c,"unstable_getStaticProps"),f=(0,l.l)(c,"unstable_getStaticPaths"),y=(0,l.l)(c,"unstable_getStaticParams"),v=(0,l.l)(c,"unstable_getServerProps"),k=(0,l.l)(c,"unstable_getServerSideProps"),b=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/weekly/[slug]",pathname:"/weekly/[slug]",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});s()}catch(e){s(e)}})},7956:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(997),a=r(5018),i=r.n(a),l=r(9258),n=r(333);let o=({url:e})=>{let t=(0,l.useRouter)(),r="flex gap-2 w-max hover:gap-3 items-center mb-6 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer",a=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.aiR,{size:20,"data-testid":"back-icon"}),s.jsx("span",{children:"Back"})]});return s.jsx("div",{className:"w-fit",children:e?s.jsx(i(),{href:e,passHref:!0,children:s.jsx("div",{className:r,children:s.jsx(a,{})})}):s.jsx("div",{className:r,onClick:()=>{e?window.location.href=e:t.back()},children:s.jsx(a,{})})})}},9750:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(997);let a=({children:e,className:t="",...r})=>s.jsx("div",{className:`mt-20 mb-10 lg:mt-0 p-8 ${t} `,...r,children:e})},8757:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(997),a=r(5018),i=r.n(a),l=r(333);let n=`flex font-sora items-center gap-2 py-2 px-4 rounded-lg group
  text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 
  hover:dark:lg:bg-neutral-800 hover:dark:!text-neutral-300 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300
`,o=({prev:e,next:t})=>(0,s.jsxs)("div",{className:"flex justify-between mt-8 border-t dark:border-neutral-700 border-gray-300 py-5",children:[e&&(0,s.jsxs)(i(),{href:e.href,className:n,children:[s.jsx(l.Ao2,{className:"group-hover:rotate-6 transition-all duration-300"}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Previous",(0,s.jsxs)("span",{className:"hidden lg:flex",children:[" : ",e.title]})]})]}),s.jsx("div",{className:"flex-grow"}),t&&(0,s.jsxs)(i(),{href:t.href,className:n,children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Next",(0,s.jsxs)("span",{className:"hidden lg:flex",children:[" : ",t.title]})]}),s.jsx(l.Rgz,{className:"group-hover:-rotate-6 transition-all duration-300"})]})]})},8684:(e,t,r)=>{r.d(t,{Eh:()=>c,WW:()=>o,en:()=>l,of:()=>i,p6:()=>a});var s=r(6989);let a=(e,t="MMMM dd, yyyy")=>e?(0,s.WU)(e,t):"",i=e=>e.reduce((e,t)=>{let{frontMatter:r}=t,s=r.chapter_id??0,a=r.chapter_title||"ungrouped";return e[s]||(e[s]={chapter_id:s,chapter_title:a,contents:[]}),e[s].contents.push(t),e},{}),l=e=>{let t=e.split("/");return{parentSlug:t[2],contentSlug:t[3]}},n=e=>"undefined"!=typeof DOMParser?new DOMParser().parseFromString(e,"text/html").body.textContent||"":e,o=(e,t=100)=>{let r=n(e);return r.length<=t?r:r.substring(0,t).replace(/\s+\S*$/,"")+(r.length>t?"...":"")},c=(e,t=40)=>Math.ceil(o(e).split(/\s+/).length/t)},6623:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{_N:()=>j,e9:()=>f});var a=r(7147),i=r.n(a),l=r(8076),n=r.n(l),o=r(1017),c=r.n(o),d=r(1774),p=r(6809),u=r(9047),g=r(6688),x=r(8684),m=e([d,p,u,g]);[d,p,u,g]=m.then?(await m)():m;let h=e=>i().existsSync(e)?i().readdirSync(e,{recursive:!0}).filter(e=>e.endsWith(".mdx")||e.endsWith(".md")).map(t=>{let r=c().join(e,t),s=i().readFileSync(r,"utf-8"),{content:a,data:l}=n()(s),o=(0,d.remark)().use(g.default).use(p.default).use(u.default).processSync(a).toString(),m=t.endsWith(".mdx")?t.replace(".mdx",""):t.replace(".md","");return{slug:l.slug||m,frontMatter:l,content:o,props:{readingTimeMinutes:(0,x.Eh)(o)??0,description:(0,x.WW)(o)||""}}}):[],j=(e,t=!1)=>{let r=c().join(process.cwd(),"src/contents",e),s=h(r);return(s.sort((e,t)=>{let r=e.frontMatter.date,s=t.frontMatter.date;return r>s?1:-1}),t)?s:s.map(({content:e,...t})=>({...t}))},f=(e,t)=>{let r=c().join(process.cwd(),"src/contents",e);return h(r).find(e=>e.slug===t)||null};s()}catch(e){s(e)}})},2455:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>d});var a=r(997),i=r(5877),l=r(1162),n=r(8374),o=e([i]);i=(o.then?(await o)():o)[0];let c=n.YS.giscusConfig,d=()=>{let{theme:e}=(0,l.useTheme)();return n.YS.enable?a.jsx("div",{className:"mt-5 mb-2",children:a.jsx(i.default,{repo:`${c.gitUsername}/${c.repo}`,repoId:c.repositoryId,category:c.category,categoryId:c.categoryId,mapping:"title",reactionsEnabled:c.reactions?"1":"0",emitMetadata:"0",inputPosition:"top",theme:"dark"===e?c.darkTheme:c.lightTheme,lang:c.lang,loading:"lazy"})}):null};s()}catch(e){s(e)}})},6922:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>n});var a=r(997),i=r(2433),l=e([i]);i=(l.then?(await l)():l)[0];let n=({content:e})=>a.jsx("div",{className:"article space-y-5 leading-[1.8] dark:text-neutral-300 mt-5",children:a.jsx(i.Z,{children:e})});s()}catch(e){s(e)}})},7315:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>o});var a=r(997),i=r(2455),l=r(6922),n=e([i,l]);[i,l]=n.then?(await n)():n;let o=({content:e,frontMatter:t})=>{let r=t?.is_comment??!1;return(0,a.jsxs)(a.Fragment,{children:[e&&a.jsx(l.Z,{content:e}),r&&a.jsx("section",{id:"comments",className:"border-t dark:border-neutral-700 border-gray-300 my-10",children:a.jsx(i.default,{})})]})};s()}catch(e){s(e)}})},6145:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>o});var a=r(997),i=r(6197),l=r(6689),n=e([i]);i=(n.then?(await n)():n)[0];let o=({title:e})=>{let[t,r]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{let e=window.pageYOffset||document.documentElement.scrollTop;r(e>250)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let s={duration:.3,ease:"easeInOut"},n={initial:{opacity:0,y:-20},animate:{opacity:1,y:0}};return a.jsx(a.Fragment,{children:t?a.jsx(i.motion.div,{className:"lg:sticky top-0 bg-light dark:bg-dark py-6 z-10 shadow-bottom backdrop-blur border-b border-neutral-300 dark:border-neutral-600",initial:"initial",animate:"animate",variants:n,transition:s,children:a.jsx("h1",{className:"text-lg lg:text-xl font-semibold",children:e})}):a.jsx(i.motion.h1,{className:"text-2xl font-semibold",initial:"initial",animate:"animate",variants:n,transition:s,children:e})})};s()}catch(e){s(e)}})},3668:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var s=r(997),a=r(4801);let{umamiScriptSrc:i,umamiSiteId:l}=r(8374).siteMetadata.analytics;function n(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[i&&l&&s.jsx("script",{async:!0,defer:!0,src:i,"data-website-id":l}),s.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/logo.jpg"})]}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},7228:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>x,getStaticPaths:()=>m,getStaticProps:()=>h});var a=r(997),i=r(6641),l=r(7956),n=r(9750),o=r(6623),c=r(8374),d=r(7315),p=r(6145),u=r(8757),g=e([o,d,p]);[o,d,p]=g.then?(await g)():g;let x=({data:e,prev:t,next:r})=>{let{content:s,frontMatter:o}=e,g="Weekly",x=o?.title,m=`${g} - ${x} with detailed explanations`;return(0,a.jsxs)(a.Fragment,{children:[a.jsx(i.NextSeo,{title:`${g} : ${x} - ${c.siteMetadata.author}`,description:m,openGraph:{type:"article",article:{publishedTime:o?.updated_at,modifiedTime:o?.updated_at,authors:[c.siteMetadata.author]},images:[{url:o?.cover_url}],siteName:c.siteMetadata.author}}),(0,a.jsxs)(n.Z,{"data-aos":"fade-up",className:"mb-10",children:[a.jsx(l.Z,{url:"/weekly"}),a.jsx(p.Z,{...o}),a.jsx(d.Z,{content:s,frontMatter:o}),a.jsx(u.Z,{prev:t,next:r})]})]})},m=async()=>({paths:(await (0,o._N)("weekly")).reduce((e,t)=>(e.push({params:{slug:t.slug}}),e),[]),fallback:!1}),h=async({params:e})=>{let t=e?.slug,r=await (0,o.e9)("weekly",t),s=await (0,o._N)("weekly"),a=s.findIndex(e=>e.slug===t),i=s[a+1],l=s[a-1];return r?{props:{data:r,prev:i?{title:i?.frontMatter.title,href:`/weekly/${i.slug}`}:null,next:l?{title:l?.frontMatter.title,href:`/weekly/${l.slug}`}:null}}:{redirect:{destination:"/404",permanent:!1}}};s()}catch(e){s(e)}})},9783:e=>{e.exports=require("aos")},8103:e=>{e.exports=require("clsx")},8076:e=>{e.exports=require("gray-matter")},6641:e=>{e.exports=require("next-seo")},1162:e=>{e.exports=require("next-themes")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},808:e=>{e.exports=require("nprogress")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},8176:e=>{e.exports=require("react-spinners")},727:e=>{e.exports=require("react-syntax-highlighter")},4831:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/css")},7464:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/diff")},4913:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/javascript")},2417:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/tsx")},9626:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/typescript")},4794:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/prism")},997:e=>{e.exports=require("react/jsx-runtime")},9816:e=>{e.exports=require("styled-jsx/style")},2589:e=>{e.exports=require("typewriter-effect")},4115:e=>{e.exports=import("@emotion/styled")},5877:e=>{e.exports=import("@giscus/react")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},3135:e=>{e.exports=import("react-markdown")},1774:e=>{e.exports=import("remark")},6809:e=>{e.exports=import("remark-gfm")},9047:e=>{e.exports=import("remark-mdx")},6688:e=>{e.exports=import("remark-parse")},5941:e=>{e.exports=import("swr")},8097:e=>{e.exports=import("tailwind-merge")},118:e=>{e.exports=import("usehooks-ts")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[739,881,801,776,685],()=>r(1742));module.exports=s})();