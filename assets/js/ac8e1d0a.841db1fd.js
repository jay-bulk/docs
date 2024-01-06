"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[67089],{52299:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(85893),r=i(11151);const o={},a="Platformatic Runtime",c={id:"reference/runtime/introduction",title:"Platformatic Runtime",description:"Platformatic Runtime is an environment for running multiple Platformatic",source:"@site/docs/reference/runtime/introduction.md",sourceDirName:"reference/runtime",slug:"/reference/runtime/introduction",permalink:"/docs/next/reference/runtime/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/reference/runtime/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Schema support",permalink:"/docs/next/reference/db/schema-support"},next:{title:"Platformatic Runtime",permalink:"/docs/next/reference/runtime/introduction"}},s={},l=[{value:"Features",id:"features",level:2},{value:"Issues",id:"issues",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Example configuration file",id:"example-configuration-file",level:2},{value:"TypeScript Compilation",id:"typescript-compilation",level:2},{value:"Platformatic Runtime context",id:"platformatic-runtime-context",level:2},{value:"Interservice communication",id:"interservice-communication",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"platformatic-runtime",children:"Platformatic Runtime"}),"\n",(0,t.jsx)(n.p,{children:"Platformatic Runtime is an environment for running multiple Platformatic\nmicroservices as a single monolithic deployment unit."}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Command-line interface: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/cli#runtime",children:(0,t.jsx)(n.code,{children:"platformatic runtime"})})]}),"\n",(0,t.jsxs)(n.li,{children:["Start Platformatic Runtime ",(0,t.jsx)(n.a,{href:"/docs/next/reference/runtime/programmatic",children:"programmatically"})," in tests or other applications"]}),"\n",(0,t.jsx)(n.li,{children:"Support for monorepo-based applications."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#interservice-communication",children:"Interservice communication"})," using private message passing."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,t.jsxs)(n.p,{children:["If you run into a bug or have a suggestion for improvement, please\n",(0,t.jsx)(n.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"raise an issue on GitHub"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"standalone-usage",children:"Standalone usage"}),"\n",(0,t.jsxs)(n.p,{children:["If you're only interested in the features available in Platformatic Runtime, you can replace ",(0,t.jsx)(n.code,{children:"platformatic"})," with ",(0,t.jsx)(n.code,{children:"@platformatic/runtime"})," in the ",(0,t.jsx)(n.code,{children:"dependencies"})," of your ",(0,t.jsx)(n.code,{children:"package.json"}),", so that you'll import fewer deps."]}),"\n",(0,t.jsx)(n.h2,{id:"example-configuration-file",children:"Example configuration file"}),"\n",(0,t.jsxs)(n.p,{children:["The following configuration file can be used to start a new Platformatic\nRuntime project. For more details on the configuration file, see the\n",(0,t.jsx)(n.a,{href:"/docs/next/reference/runtime/configuration",children:"configuration documentation"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://platformatic.dev/schemas/v0.26.0/runtime",\n  "autoload": {\n    "path": "./packages",\n    "exclude": ["docs"]\n  },\n  "entrypoint": "entrypointApp"\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"typescript-compilation",children:"TypeScript Compilation"}),"\n",(0,t.jsxs)(n.p,{children:["Platformatic Runtime streamlines the compilation of all services built on TypeScript with the command\n",(0,t.jsx)(n.code,{children:"plt runtime compile"}),". The TypeScript compiler (",(0,t.jsx)(n.code,{children:"tsc"}),") is required to be installed separately."]}),"\n",(0,t.jsx)(n.h2,{id:"platformatic-runtime-context",children:"Platformatic Runtime context"}),"\n",(0,t.jsxs)(n.p,{children:["Every Platformatic Runtime application can be run as a standalone application\nor as a Platformatic Runtime service. In a second case, you can use Platformatic\nRuntime features to archive some compile and runtime optimizations. For example,\nsee ",(0,t.jsx)(n.a,{href:"#interservice-communication",children:"Interservice communication"}),". Looking through the\nPlatformatic documentation, you can find some features that are available only\nif you run your application as a Platformatic Runtime service."]}),"\n",(0,t.jsx)(n.h2,{id:"interservice-communication",children:"Interservice communication"}),"\n",(0,t.jsx)(n.p,{children:"The Platformatic Runtime allows multiple microservice applications to run\nwithin a single process. Only the entrypoint binds to an operating system\nport and can be reached from outside of the runtime."}),"\n",(0,t.jsxs)(n.p,{children:["Within the runtime, all interservice communication happens by injecting HTTP\nrequests into the running servers, without binding them to ports. This injection\nis handled by\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/fastify-undici-dispatcher",children:(0,t.jsx)(n.code,{children:"fastify-undici-dispatcher"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Each microservice is assigned an internal domain name based on its unique ID.\nFor example, a microservice with the ID ",(0,t.jsx)(n.code,{children:"awesome"})," is given the internal domain\nof ",(0,t.jsx)(n.code,{children:"http://awesome.plt.local"}),". The ",(0,t.jsx)(n.code,{children:"fastify-undici-dispatcher"})," module maps that\ndomain to the Fastify server running the ",(0,t.jsx)(n.code,{children:"awesome"})," microservice. Any Node.js\nAPIs based on Undici, such as ",(0,t.jsx)(n.code,{children:"fetch()"}),", will then automatically route requests\naddressed to ",(0,t.jsx)(n.code,{children:"awesome.plt.local"})," to the corresponding Fastify server."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var t=i(67294);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);