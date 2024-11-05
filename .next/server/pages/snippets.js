"use strict";(()=>{var t={};t.id=368,t.ids=[368,888],t.modules={7551:(t,e,i)=>{i.a(t,async(t,r)=>{try{i.r(e),i.d(e,{config:()=>p,default:()=>n,getServerSideProps:()=>o,getStaticPaths:()=>u,getStaticProps:()=>c,reportWebVitals:()=>x,routeModule:()=>j,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>f,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>b});var s=i(4117),a=i(7428),A=i(3652),h=i(3668),l=i(1685),g=i(6372),d=t([l,g]);[l,g]=d.then?(await d)():d;let n=(0,A.l)(g,"default"),c=(0,A.l)(g,"getStaticProps"),u=(0,A.l)(g,"getStaticPaths"),o=(0,A.l)(g,"getServerSideProps"),p=(0,A.l)(g,"config"),x=(0,A.l)(g,"reportWebVitals"),b=(0,A.l)(g,"unstable_getStaticProps"),m=(0,A.l)(g,"unstable_getStaticPaths"),v=(0,A.l)(g,"unstable_getStaticParams"),w=(0,A.l)(g,"unstable_getServerProps"),f=(0,A.l)(g,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/snippets",pathname:"/snippets",bundlePath:"",filename:""},components:{App:l.default,Document:h.default},userland:g});r()}catch(t){r(t)}})},9750:(t,e,i)=>{i.d(e,{Z:()=>s});var r=i(997);let s=({children:t,className:e="",...i})=>r.jsx("div",{className:`mt-20 mb-10 lg:mt-0 p-8 ${e} `,...i,children:t})},5170:(t,e,i)=>{i.d(e,{Z:()=>s});var r=i(997);let s=({title:t,description:e})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx("h1",{className:"text-2xl font-medium font-sora",children:t}),r.jsx("p",{className:"mb-6 border-b border-dashed border-neutral-600 pt-2 pb-6 text-neutral-600 dark:text-neutral-400",children:e})]})},8684:(t,e,i)=>{i.d(e,{Eh:()=>g,WW:()=>l,en:()=>A,of:()=>a,p6:()=>s});var r=i(6989);let s=(t,e="MMMM dd, yyyy")=>t?(0,r.WU)(t,e):"",a=t=>t.reduce((t,e)=>{let{frontMatter:i}=e,r=i.chapter_id??0,s=i.chapter_title||"ungrouped";return t[r]||(t[r]={chapter_id:r,chapter_title:s,contents:[]}),t[r].contents.push(e),t},{}),A=t=>{let e=t.split("/");return{parentSlug:e[2],contentSlug:e[3]}},h=t=>"undefined"!=typeof DOMParser?new DOMParser().parseFromString(t,"text/html").body.textContent||"":t,l=(t,e=100)=>{let i=h(t);return i.length<=e?i:i.substring(0,e).replace(/\s+\S*$/,"")+(i.length>e?"...":"")},g=(t,e=40)=>Math.ceil(l(t).split(/\s+/).length/e)},6623:(t,e,i)=>{i.a(t,async(t,r)=>{try{i.d(e,{_N:()=>b,e9:()=>m});var s=i(7147),a=i.n(s),A=i(8076),h=i.n(A),l=i(1017),g=i.n(l),d=i(1774),n=i(6809),c=i(9047),u=i(6688),o=i(8684),p=t([d,n,c,u]);[d,n,c,u]=p.then?(await p)():p;let x=t=>a().existsSync(t)?a().readdirSync(t,{recursive:!0}).filter(t=>t.endsWith(".mdx")||t.endsWith(".md")).map(e=>{let i=g().join(t,e),r=a().readFileSync(i,"utf-8"),{content:s,data:A}=h()(r),l=(0,d.remark)().use(u.default).use(n.default).use(c.default).processSync(s).toString(),p=e.endsWith(".mdx")?e.replace(".mdx",""):e.replace(".md","");return{slug:A.slug||p,frontMatter:A,content:l,props:{readingTimeMinutes:(0,o.Eh)(l)??0,description:(0,o.WW)(l)||""}}}):[],b=(t,e=!1)=>{let i=g().join(process.cwd(),"src/contents",t),r=x(i);return(r.sort((t,e)=>{let i=t.frontMatter.date,r=e.frontMatter.date;return i>r?1:-1}),e)?r:r.map(({content:t,...e})=>({...e}))},m=(t,e)=>{let i=g().join(process.cwd(),"src/contents",t);return x(i).find(t=>t.slug===e)||null};r()}catch(t){r(t)}})},2307:(t,e,i)=>{i.d(e,{V:()=>a});var r=i(997);let s={gitlab:{src:"/_next/static/media/gitlab.8440cb43.svg",height:480,width:480,blurWidth:0,blurHeight:0},lerna:{src:"/_next/static/media/lerna.145a0f19.svg",height:32,width:32,blurWidth:0,blurHeight:0},prisma:{src:"/_next/static/media/prisma.c4b2e84d.svg",height:24,width:24,blurWidth:0,blurHeight:0},ts:{src:"/_next/static/media/ts.62e82e64.svg",height:32,width:32,blurWidth:0,blurHeight:0},Pinia:{src:"/_next/static/media/Pinia.271ef183.svg",height:477,width:319,blurWidth:0,blurHeight:0},css3:{src:"/_next/static/media/css3.ec23959f.svg",height:480,width:480,blurWidth:0,blurHeight:0},go:{src:"/_next/static/media/go.907e7c67.svg",height:225,width:255,blurWidth:0,blurHeight:0},less:{src:"/_next/static/media/less.ec56d7ae.svg",height:32,width:32,blurWidth:0,blurHeight:0},ps:{src:"/_next/static/media/ps.56f2f31d.svg",height:480,width:480,blurWidth:0,blurHeight:0},vant:{src:"/_next/static/media/vant.422d18b7.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXE1n+Y0lNg22bcatf0qs8cZtP4ossU01rUA/8k11rc0mNsZtP8Xtpc4370ez6obvJUbwJ8au5ocv54by/8878ssuP8avP8s3LkvO1tDAAAAFHRSTlMA9oVkYC2EDYYBYp+Ngv7ug/qj+QMcycUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicRcbJAYAwCADBJUKAeGs8+q/Up/MaEjucBJ/31abqtPfc6tOVdgXUrgx/lihyKx5hIsUh8dHID1O2AhvlureDAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},actionvue:{src:"/_next/static/media/actionvue.e23c138e.png",height:314,width:344,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAARVBMVEVMaXH/ti7/mUL/pDr/rjL/xin/uDH/nj3/xir/f2D/a2b/sDT/e1T/Zm3/l0r/ilv/uDP/qD7/jU7/0h7/b2X/kkP/zSMOK4eaAAAAF3RSTlMAgrNzNxicpWK2OSesu+iv4fv3EZKEJJqwwc0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAOElEQVR4nB3FRxaAIAxAwU9NAirFcv+j8nA2g3gfIGSimNzP+MBZe6cDqpxXTwB6mO5JufyDRmABMFgBSnlTAxcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},golang:{src:"/_next/static/media/golang.6f04a038.svg",height:32,width:32,blurWidth:0,blurHeight:0},mysql:{src:"/_next/static/media/mysql.acf66fb1.svg",height:480,width:480,blurWidth:0,blurHeight:0},psv:{src:"/_next/static/media/psv.a1e635df.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVdn+i648BYqP9eqv+f2+Ncp/1dpfJMaXFjqe6f3u1uqKCV1u+W1u7k5W2i3dKZ1uSgzoulzWiMsD+Jv6unyUlGci+hwkdzqpdrqMmfxF59xvug4vfL4ZWkzWdYm7psoo2k0IWAvsTWPFZYAAAAG3RSTlMM/RCB/st4AMX9/qKe/vi3/vn9/fv9/vvDsv4EgqmNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBBwKAMAgEsOsE6t4Kzv9/0gSEzJxBAKuqJqC2GMW5Cm0fxc5GMKzvUywKjmsel806YP+mcjNAPqQUPP1wzwNFQwxGnwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},vim:{src:"/_next/static/media/vim.168919c1.svg",height:32,width:32,blurWidth:0,blurHeight:0},angular:{src:"/_next/static/media/angular.cbe41029.svg",height:32,width:32,blurWidth:0,blurHeight:0},docker:{src:"/_next/static/media/docker.8b474696.svg",height:32,width:32,blurWidth:0,blurHeight:0},html:{src:"/_next/static/media/html.6e885685.svg",height:32,width:32,blurWidth:0,blurHeight:0},nestjs:{src:"/_next/static/media/nestjs.fa1245bf.svg",height:480,width:480,blurWidth:0,blurHeight:0},python:{src:"/_next/static/media/python.10f12009.svg",height:480,width:480,blurWidth:0,blurHeight:0},vite:{src:"/_next/static/media/vite.f8a475cd.svg",height:404,width:410,blurWidth:0,blurHeight:0},antdv:{src:"/_next/static/media/antdv.0c2871f7.png",height:768,width:768,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXEQg/+fiqD/PD8duf8cqP8er/8TiP8ht/8Zof4Tvv/6WGEPev8Siv8Pef8bo/8Sif8drP+EphhcAAAAEnRSTlMAygxnNs+VNdTxZWz117CwlOTtzCsgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nC3Gtw2AMAAAMKc32v/XoiAmmxzXihl9pjT7TqWWP8+JUggBedzX0aCN8UnbvicxAQhtVwcUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},eleplus:{src:"/_next/static/media/ele+.28792e27.png",height:192,width:192,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///+Yy//K5P/q9f+p0//1+v+Fwv+93f/f7/9qs/89n6lMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nB2LQQ4AIAzCCsOp//+wmRygIQCjVd/jE8ByehoV+24gq9QDcqX9t9IkcOb8ABTNAJHaPIwUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},nextjs:{src:"/_next/static/media/nextjs.d0f48962.svg",height:480,width:480,blurWidth:0,blurHeight:0},raspberrypi:{src:"/_next/static/media/raspberry-pi.584a0204.svg",height:480,width:480,blurWidth:0,blurHeight:0},vscode:{src:"/_next/static/media/vscode.a7a26017.svg",height:480,width:480,blurWidth:0,blurHeight:0},axios:{src:"/_next/static/media/axios.34a9e864.webp",height:242,width:444,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAAAwAQCdASoIAAQAAkA4JaQAA3AA/vsB/zhs0jrmH7JZzQX0HvhbhrAAAAA=",blurWidth:8,blurHeight:4},ele:{src:"/_next/static/media/ele.d0844796.png",height:241,width:209,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAJ1BMVEWYy/9gr/////9Wqv/U6f/A4P/3+/+k0f/t9/9wt/+y2P9Io/+Hwv8SkUAMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCXHwQHAIAwDsbOTGFq6/7x9oJ9wEDEj9tJw2punUPyuLuT70/ejr9HgUMQ/HFMA5J/B9bcAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},java:{src:"/_next/static/media/java.9f87d57c.svg",height:480,width:480,blurWidth:0,blurHeight:0},nginx:{src:"/_next/static/media/nginx.67b54359.svg",height:480,width:480,blurWidth:0,blurHeight:0},reactnative:{src:"/_next/static/media/react-native.40cc3499.svg",height:480,width:480,blurWidth:0,blurHeight:0},vue:{src:"/_next/static/media/vue.b09b09d0.svg",height:128,width:128,blurWidth:0,blurHeight:0},babel:{src:"/_next/static/media/babel.bc630ddf.svg",height:32,width:32,blurWidth:0,blurHeight:0},es:{src:"/_next/static/media/es.7f19cfaf.svg",height:400,width:400,blurWidth:0,blurHeight:0},nodejs:{src:"/_next/static/media/nodejs.1083dec8.svg",height:361,width:590,blurWidth:0,blurHeight:0},react:{src:"/_next/static/media/react.dfb4c0f0.svg",height:160,width:171,blurWidth:0,blurHeight:0},webpack:{src:"/_next/static/media/webpack.e0ea0cd1.svg",height:480,width:480,blurWidth:0,blurHeight:0},caddy:{src:"/_next/static/media/caddy.38440d08.png",height:1022,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAaVBMVEVMaXF1rb04yvc0zPmCfoKQkZBNweQc2f9/tcRP7/8ks1x/gIB3dHhL0fWEgogywreKiop6rpeJiYhFtlO7r7YrnCNCy/BZolgvva3L3OqSlJKMiolioH6JiY5FqFKn1OGFnqV1i5MjpDQtWUeFAAAAHnRSTlMA+pv+6WqVD/sZ/nD464HzT920/p768/n4Wdmcvz34vVs2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nAXBBQLAIAwEsANaaIG5G5P/P3IJELwYHwDYW4xYQKvHuXdWaFNi/FZF3Q3TUs4N/ZgpEx1oU2Lm/foBTXQC4yELQj8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},firefox:{src:"/_next/static/media/firefox.fe9e01bf.svg",height:51500,width:51500,blurWidth:0,blurHeight:0},jenkins:{src:"/_next/static/media/jenkins.b2b02d5d.svg",height:480,width:480,blurWidth:0,blurHeight:0},npm:{src:"/_next/static/media/npm.5389c8b4.svg",height:32,width:32,blurWidth:0,blurHeight:0},sass:{src:"/_next/static/media/sass.42aa6c5d.svg",height:32,width:32,blurWidth:0,blurHeight:0},wordpress:{src:"/_next/static/media/wordpress.361ef076.svg",height:480,width:480,blurWidth:0,blurHeight:0},chrome:{src:"/_next/static/media/chrome.2c2da67f.svg",height:190,width:190,blurWidth:0,blurHeight:0},flutter:{src:"/_next/static/media/flutter.9fe9148f.svg",height:480,width:480,blurWidth:0,blurHeight:0},js:{src:"/_next/static/media/javascript.a17928c4.svg",height:480,width:480,blurWidth:0,blurHeight:0},php:{src:"/_next/static/media/php.0357268e.svg",height:384,width:711,blurWidth:0,blurHeight:0},shopify:{src:"/_next/static/media/shopify.e5656649.svg",height:480,width:480,blurWidth:0,blurHeight:0},yarn:{src:"/_next/static/media/yarn.d36e2934.svg",height:32,width:32,blurWidth:0,blurHeight:0},git:{src:"/_next/static/media/git.2741892f.svg",height:480,width:480,blurWidth:0,blurHeight:0},k8s:{src:"/_next/static/media/k8s.d6fac35e.svg",height:91,width:93,blurWidth:0,blurHeight:0},postcss:{src:"/_next/static/media/postcss.df772b30.svg",height:32,width:32,blurWidth:0,blurHeight:0},tailwindcss:{src:"/_next/static/media/tailwind-css.33ecf58d.svg",height:480,width:480,blurWidth:0,blurHeight:0},rxjs:{src:"/_next/static/media/rxjs.b82a132c.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEVMaXHaA5K1AJXWAJDoAJGiAI7vAJHgAIrRAI7zAI/DAJCwAI+tAJHjAJGiAJHkAJd0AI//AJJXAJF1AI5nAI9/AI/5AI+QAJDqC5anAJP/AJD8ApniA5yDAJbLAZVGVChsAAAAG3RSTlMA0P62bE/YBjVasHWvH/jnOZd0PcucxLD12jypYmkdAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQElEQVR4nAXBhwGAIBAAsUPK0+0VdP8xTaDomArw1K/3K0B+a1ZtnLiHhHi/oLpHWDdCM4KcO8zNmThYIBxOW35uhwLIsBYj0QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}};function a(t){let{type:e,className:i}=t,a=s[e];return a?r.jsx("div",{className:i||"h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20",style:{backgroundImage:`url(${a.src})`,backgroundPosition:"center",backgroundSize:"contain"}}):(0,r.jsxs)("div",{children:["Missing icon for ",e]})}},3668:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var r=i(997),s=i(4801);let{umamiScriptSrc:a,umamiSiteId:A}=i(8374).siteMetadata.analytics;function h(){return(0,r.jsxs)(s.Html,{lang:"en",children:[(0,r.jsxs)(s.Head,{children:[a&&A&&r.jsx("script",{async:!0,defer:!0,src:a,"data-website-id":A}),r.jsx("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/images/logo.jpg"}),r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/logo.jpg"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/images/logo.jpg"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/logo.jpg"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/images/logo.jpg"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/logo.jpg"})]}),(0,r.jsxs)("body",{children:[r.jsx(s.Main,{}),r.jsx(s.NextScript,{})]})]})}},6372:(t,e,i)=>{i.a(t,async(t,r)=>{try{i.r(e),i.d(e,{default:()=>o,getStaticProps:()=>p});var s=i(997),a=i(5018),A=i.n(a),h=i(6641),l=i(9750),g=i(5170),d=i(6623),n=i(2307),c=i(8374),u=t([d]);d=(u.then?(await u)():u)[0];let o=({contentList:t})=>{if(!t.length)return null;let e="Code Snippets",i="Here is a code snippet, you can directly copy and use it.",r=`${c.siteMetadata.siteUrl}/snippets`,a=`flex justify-between w-full font-sora items-center gap-2 rounded-lg group
    text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300
     hover:dark:!text-neutral-300 hover:lg:rounded-lg lg:transition-all lg:duration-300
  `;return(0,s.jsxs)(s.Fragment,{children:[s.jsx(h.NextSeo,{title:`${e} - ${c.siteMetadata.author}`,description:i,canonical:r,openGraph:{url:r,images:[{url:""}],siteName:c.siteMetadata.author}}),(0,s.jsxs)(l.Z,{"data-aos":"fade-up",children:[s.jsx(g.Z,{title:e,description:i}),s.jsx("div",{className:"grid-cols-2 gap-6 lg:grid",children:t.map(t=>s.jsx(A(),{className:a,href:`/snippets/${t.slug}`,title:t.frontMatter.description||t.frontMatter.title,children:(0,s.jsxs)("div",{className:"h-full w-full mb-4 p-3 lg:p-4 gap-4 flex cursor-pointer rounded-lg border border-transparent shadow-intense hover:shadow-nextjs dark:shadow-intense-dark dark:hover:shadow-nextjs-dark lg:mb-0",children:[s.jsx("div",{className:"flex items-center justify-center",children:s.jsx(n.V,{type:t.frontMatter.type})}),(0,s.jsxs)("div",{className:"overflow-hidden space-y-2",children:[(0,s.jsxs)("h3",{className:"overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-bold leading-8 tracking-tight lg:text-lg",children:[" ",t.frontMatter.title," "]}),s.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-sm lg:text-base",children:t.frontMatter.description})]})]})},t.slug))})]})]})},p=async()=>{let t=(0,d._N)("snippets");return t.length?{props:{contentList:t}}:{redirect:{destination:"/404",permanent:!1}}};r()}catch(t){r(t)}})},9783:t=>{t.exports=require("aos")},8103:t=>{t.exports=require("clsx")},8076:t=>{t.exports=require("gray-matter")},6641:t=>{t.exports=require("next-seo")},1162:t=>{t.exports=require("next-themes")},2785:t=>{t.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},808:t=>{t.exports=require("nprogress")},6689:t=>{t.exports=require("react")},6405:t=>{t.exports=require("react-dom")},8176:t=>{t.exports=require("react-spinners")},727:t=>{t.exports=require("react-syntax-highlighter")},4831:t=>{t.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/css")},7464:t=>{t.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/diff")},4913:t=>{t.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/javascript")},2417:t=>{t.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/tsx")},9626:t=>{t.exports=require("react-syntax-highlighter/dist/cjs/languages/prism/typescript")},4794:t=>{t.exports=require("react-syntax-highlighter/dist/cjs/styles/prism")},997:t=>{t.exports=require("react/jsx-runtime")},9816:t=>{t.exports=require("styled-jsx/style")},2589:t=>{t.exports=require("typewriter-effect")},4115:t=>{t.exports=import("@emotion/styled")},9648:t=>{t.exports=import("axios")},6197:t=>{t.exports=import("framer-motion")},3135:t=>{t.exports=import("react-markdown")},1774:t=>{t.exports=import("remark")},6809:t=>{t.exports=import("remark-gfm")},9047:t=>{t.exports=import("remark-mdx")},6688:t=>{t.exports=import("remark-parse")},5941:t=>{t.exports=import("swr")},8097:t=>{t.exports=import("tailwind-merge")},118:t=>{t.exports=import("usehooks-ts")},7147:t=>{t.exports=require("fs")},1017:t=>{t.exports=require("path")},2781:t=>{t.exports=require("stream")},9796:t=>{t.exports=require("zlib")}};var e=require("../webpack-runtime.js");e.C(t);var i=t=>e(e.s=t),r=e.X(0,[739,881,801,776,685],()=>i(7551));module.exports=r})();