"use strict";(()=>{var e={};e.id=492,e.ids=[492,888],e.modules={9015:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>m,default:()=>p,getServerSideProps:()=>g,getStaticPaths:()=>u,getStaticProps:()=>x,reportWebVitals:()=>h,routeModule:()=>k,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>f});var a=r(4117),i=r(7428),l=r(3652),n=r(3668),o=r(1685),c=r(3965),d=e([o,c]);[o,c]=d.then?(await d)():d;let p=(0,l.l)(c,"default"),x=(0,l.l)(c,"getStaticProps"),u=(0,l.l)(c,"getStaticPaths"),g=(0,l.l)(c,"getServerSideProps"),m=(0,l.l)(c,"config"),h=(0,l.l)(c,"reportWebVitals"),f=(0,l.l)(c,"unstable_getStaticProps"),j=(0,l.l)(c,"unstable_getStaticPaths"),b=(0,l.l)(c,"unstable_getStaticParams"),v=(0,l.l)(c,"unstable_getServerProps"),y=(0,l.l)(c,"unstable_getServerSideProps"),k=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/blog/[slug]",pathname:"/blog/[slug]",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});s()}catch(e){s(e)}})},3653:(e,t,r)=>{r.d(t,{z5B:()=>a});var s=r(2162);function a(e){return(0,s.GenIcon)({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"}}]})(e)}},7956:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(997),a=r(5018),i=r.n(a),l=r(9258),n=r(333);let o=({url:e})=>{let t=(0,l.useRouter)(),r="flex gap-2 w-max hover:gap-3 items-center mb-6 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer",a=()=>(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.aiR,{size:20,"data-testid":"back-icon"}),s.jsx("span",{children:"Back"})]});return s.jsx("div",{className:"w-fit",children:e?s.jsx(i(),{href:e,passHref:!0,children:s.jsx("div",{className:r,children:s.jsx(a,{})})}):s.jsx("div",{className:r,onClick:()=>{e?window.location.href=e:t.back()},children:s.jsx(a,{})})})}},9750:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(997);let a=({children:e,className:t="",...r})=>s.jsx("div",{className:`mt-20 mb-10 lg:mt-0 p-8 ${t} `,...r,children:e})},8757:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(997),a=r(5018),i=r.n(a),l=r(333);let n=`flex font-sora items-center gap-2 py-2 px-4 rounded-lg group
  text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 
  hover:dark:lg:bg-neutral-800 hover:dark:!text-neutral-300 hover:lg:bg-neutral-200 hover:lg:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300
`,o=({prev:e,next:t})=>(0,s.jsxs)("div",{className:"flex justify-between mt-8 border-t dark:border-neutral-700 border-gray-300 py-5",children:[e&&(0,s.jsxs)(i(),{href:e.href,className:n,children:[s.jsx(l.Ao2,{className:"group-hover:rotate-6 transition-all duration-300"}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Previous",(0,s.jsxs)("span",{className:"hidden lg:flex",children:[" : ",e.title]})]})]}),s.jsx("div",{className:"flex-grow"}),t&&(0,s.jsxs)(i(),{href:t.href,className:n,children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["Next",(0,s.jsxs)("span",{className:"hidden lg:flex",children:[" : ",t.title]})]}),s.jsx(l.Rgz,{className:"group-hover:-rotate-6 transition-all duration-300"})]})]})},8684:(e,t,r)=>{r.d(t,{Eh:()=>c,WW:()=>o,en:()=>l,of:()=>i,p6:()=>a});var s=r(6989);let a=(e,t="MMMM dd, yyyy")=>e?(0,s.WU)(e,t):"",i=e=>e.reduce((e,t)=>{let{frontMatter:r}=t,s=r.chapter_id??0,a=r.chapter_title||"ungrouped";return e[s]||(e[s]={chapter_id:s,chapter_title:a,contents:[]}),e[s].contents.push(t),e},{}),l=e=>{let t=e.split("/");return{parentSlug:t[2],contentSlug:t[3]}},n=e=>"undefined"!=typeof DOMParser?new DOMParser().parseFromString(e,"text/html").body.textContent||"":e,o=(e,t=100)=>{let r=n(e);return r.length<=t?r:r.substring(0,t).replace(/\s+\S*$/,"")+(r.length>t?"...":"")},c=(e,t=40)=>Math.ceil(o(e).split(/\s+/).length/t)},6623:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{_N:()=>f,e9:()=>j});var a=r(7147),i=r.n(a),l=r(8076),n=r.n(l),o=r(1017),c=r.n(o),d=r(1774),p=r(6809),x=r(9047),u=r(6688),g=r(8684),m=e([d,p,x,u]);[d,p,x,u]=m.then?(await m)():m;let h=e=>i().existsSync(e)?i().readdirSync(e,{recursive:!0}).filter(e=>e.endsWith(".mdx")||e.endsWith(".md")).map(t=>{let r=c().join(e,t),s=i().readFileSync(r,"utf-8"),{content:a,data:l}=n()(s),o=(0,d.remark)().use(u.default).use(p.default).use(x.default).processSync(a).toString(),m=t.endsWith(".mdx")?t.replace(".mdx",""):t.replace(".md","");return{slug:l.slug||m,frontMatter:l,content:o,props:{readingTimeMinutes:(0,g.Eh)(o)??0,description:(0,g.WW)(o)||""}}}):[],f=(e,t=!1)=>{let r=c().join(process.cwd(),"src/contents",e),s=h(r);return(s.sort((e,t)=>{let r=e.frontMatter.date,s=t.frontMatter.date;return r>s?1:-1}),t)?s:s.map(({content:e,...t})=>({...t}))},j=(e,t)=>{let r=c().join(process.cwd(),"src/contents",e);return h(r).find(e=>e.slug===t)||null};s()}catch(e){s(e)}})},64:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>c});var a=r(997),i=r(6456),l=r(2433),n=r(525),o=e([l,n]);[l,n]=o.then?(await o)():o;let c=e=>(0,a.jsxs)("article",{children:[a.jsx(n.Z,{title:e.frontMatter.title,comments_count:0,reading_time_minutes:e.props.readingTimeMinutes,published_at:e.frontMatter.date}),a.jsx("div",{className:"article space-y-6 leading-[1.8] dark:text-neutral-300 ",children:e.content&&a.jsx(l.Z,{children:e.content})}),e.frontMatter.tags.length>=1&&(0,a.jsxs)("div",{className:"my-10 space-y-2",children:[a.jsx("h6",{className:"text-lg font-medium",children:"Tags:"}),a.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:e.frontMatter.tags.map(e=>(0,a.jsxs)("div",{className:"bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200 rounded-full px-4 py-1 text-[14px] font-medium",children:[a.jsx("span",{className:"font-semibold mr-1",children:"#"}),e.charAt(0).toUpperCase()+e.slice(1)]},e))})]}),a.jsx(i.Z,{className:"!my-10"})]});s()}catch(e){s(e)}})},525:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>p});var a=r(997),i=r(6197),l=r(6689),n=r(3653),o=r(1732),c=r(8684),d=e([i]);i=(d.then?(await d)():d)[0];let p=({title:e,page_views_count:t,published_at:r,reading_time_minutes:s})=>{let[d,p]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{let e=window.pageYOffset||document.documentElement.scrollTop;p(e>250)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let x={duration:.3,ease:"easeInOut"},u={initial:{opacity:0,y:-20},animate:{opacity:1,y:0}};return(0,a.jsxs)(a.Fragment,{children:[d?a.jsx(i.motion.div,{className:"lg:sticky top-0 bg-light dark:bg-dark py-6 z-10 shadow-bottom backdrop-blur border-b border-neutral-300 dark:border-neutral-600",initial:"initial",animate:"animate",variants:u,transition:x,children:a.jsx("h1",{className:"text-lg lg:text-xl font-semibold",children:e})}):a.jsx(i.motion.h1,{className:"text-2xl font-semibold",initial:"initial",animate:"animate",variants:u,transition:x,children:e}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2 justify-between mb-6 pt-5 pb-6 border-b border-dashed border-neutral-600 text-neutral-600 dark:text-neutral-400 text-[14px]",children:[(0,a.jsxs)("div",{children:["Published on",a.jsx("span",{className:"px-1 font-medium",children:r?(0,c.p6)(r):""})]}),(0,a.jsxs)("div",{className:"flex items-center gap-5",children:[(0,a.jsxs)("div",{className:"flex gap-1 items-center font-medium",children:[a.jsx(n.z5B,{size:16}),(0,a.jsxs)("div",{className:"flex gap-1 ml-0.5",children:[a.jsx("span",{children:t?.toLocaleString()||"-"}),a.jsx("span",{children:"Views"})]})]}),(0,a.jsxs)("div",{className:"flex gap-1 items-center font-medium",children:[a.jsx(o.XoX,{size:16}),(0,a.jsxs)("div",{className:"flex gap-1 ml-0.5",children:[a.jsx("span",{children:s}),a.jsx("span",{children:"Minutes Read"})]})]})]})]})]})};s()}catch(e){s(e)}})},3668:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var s=r(997),a=r(4801);let{umamiScriptSrc:i,umamiSiteId:l}=r(8374).siteMetadata.analytics;function n(){return(0,s.jsxs)(a.Html,{lang:"en",children:[(0,s.jsxs)(a.Head,{children:[i&&l&&s.jsx("script",{async:!0,defer:!0,src:i,"data-website-id":l}),s.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/logo.jpg"}),s.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/images/logo.jpg"}),s.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/logo.jpg"})]}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}},3965:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>j,getStaticPaths:()=>h,getStaticProps:()=>b});var a=r(997),i=r(4307),l=r.n(i),n=r(6641),o=r(7956),c=r(9750),d=r(8757),p=r(8684),x=r(6623),u=r(8374),g=r(64),m=e([x,g]);[x,g]=m.then?(await m)():m;let f=l()(()=>r.e(455).then(r.bind(r,2455)),{loadableGenerated:{modules:["pages/blog/[slug].tsx -> @/modules/blog/components/GiscusComment"]}}),j=({post:e,prev:t,next:r})=>{let s=e.slug,i=`${u.siteMetadata.siteUrl}/${s}`,l=(0,p.WW)(e?.frontMatter.summary)||"";return(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.NextSeo,{title:`${e.frontMatter.title} - Blog ${u.siteMetadata.author}`,description:l,canonical:i,openGraph:{type:"article",article:{publishedTime:e.frontMatter.date,modifiedTime:e.frontMatter.date,authors:[u.siteMetadata.author,"aulianza"]},url:i,images:[{url:e.frontMatter.featured_image_url}],siteName:"aulianza blog"}}),(0,a.jsxs)(c.Z,{"data-aos":"fade-up",children:[a.jsx(o.Z,{url:"/blog"}),a.jsx(g.Z,{...e}),a.jsx("section",{id:"comments",children:a.jsx(f,{})}),a.jsx(d.Z,{prev:t,next:r})]})]})};async function h(){return{paths:(await (0,x._N)("blog")).reduce((e,t)=>(e.push({params:{slug:t.slug}}),e),[]),fallback:!1}}let b=async({params:e})=>{let t=e?.slug,r=await (0,x._N)("blog"),s=await (0,x.e9)("blog",t),a=r.findIndex(e=>e.slug===t),i=r[a+1]||null,l=r[a-1]||null;return s?{props:{post:s,prev:i?{title:i?.frontMatter.title,href:`/blog/${i.slug}`}:null,next:l?{title:l?.frontMatter.title,href:`/blog/${l.slug}`}:null}}:{redirect:{destination:"/404",permanent:!1}}};s()}catch(e){s(e)}})},9783:e=>{e.exports=require("aos")},8103:e=>{e.exports=require("clsx")},8076:e=>{e.exports=require("gray-matter")},6641:e=>{e.exports=require("next-seo")},1162:e=>{e.exports=require("next-themes")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},808:e=>{e.exports=require("nprogress")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},8176:e=>{e.exports=require("react-spinners")},727:e=>{e.exports=require("react-syntax-highlighter")},4831:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/css")},7464:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/diff")},4913:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/javascript")},2417:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/tsx")},9626:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/typescript")},4794:e=>{e.exports=require("react-syntax-highlighter/dist/cjs/styles/prism")},997:e=>{e.exports=require("react/jsx-runtime")},9816:e=>{e.exports=require("styled-jsx/style")},2589:e=>{e.exports=require("typewriter-effect")},4115:e=>{e.exports=import("@emotion/styled")},5877:e=>{e.exports=import("@giscus/react")},9648:e=>{e.exports=import("axios")},6197:e=>{e.exports=import("framer-motion")},3135:e=>{e.exports=import("react-markdown")},1774:e=>{e.exports=import("remark")},6809:e=>{e.exports=import("remark-gfm")},9047:e=>{e.exports=import("remark-mdx")},6688:e=>{e.exports=import("remark-parse")},5941:e=>{e.exports=import("swr")},8097:e=>{e.exports=import("tailwind-merge")},118:e=>{e.exports=import("usehooks-ts")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[739,881,801,776,685],()=>r(9015));module.exports=s})();