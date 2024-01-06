"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[6762],{33456:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(85893),s=n(11151);const r={},o="Plugin",l={id:"reference/service/plugin",title:"Plugin",description:"If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-1.14.3/reference/service/plugin.md",sourceDirName:"reference/service",slug:"/reference/service/plugin",permalink:"/docs/1.14.3/reference/service/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.14.3/reference/service/plugin.md",tags:[],version:"1.14.3",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/1.14.3/reference/service/configuration"},next:{title:"Programmatic API",permalink:"/docs/1.14.3/reference/service/programmatic"}},a={},c=[{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2},{value:"TypeScript and Autocompletion",id:"typescript-and-autocompletion",level:2},{value:"Plugin definition with TypeScript",id:"plugin-definition-with-typescript",level:3},{value:"Loading compiled files",id:"loading-compiled-files",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"plugin",children:"Plugin"}),"\n",(0,t.jsxs)(i.p,{children:["If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard ",(0,t.jsx)(i.a,{href:"https://fastify.io",children:"Fastify"})," plugin."]}),"\n",(0,t.jsx)(i.p,{children:"The config file will specify where the plugin file is located as the example below:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"The path is relative to the config file path."}),"\n",(0,t.jsxs)(i.p,{children:["You should export an async ",(0,t.jsx)(i.code,{children:"function"})," which receives a parameters"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"app"})," (",(0,t.jsx)(i.code,{children:"FastifyInstance"}),") that is the main fastify ",(0,t.jsx)(i.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#instance",children:"instance"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"opts"})," all the options specified in the config file after ",(0,t.jsx)(i.code,{children:"path"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"hot-reload",children:"Hot Reload"}),"\n",(0,t.jsxs)(i.p,{children:["Plugin file is being watched by ",(0,t.jsx)(i.a,{href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options",children:(0,t.jsx)(i.code,{children:"fs.watch"})})," function."]}),"\n",(0,t.jsx)(i.p,{children:"You don't need to reload Platformatic Service server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,t.jsx)(i.a,{href:"https://nodejs.org/api/fs.html#caveats",children:"here"}),")."]})}),"\n",(0,t.jsx)(i.h2,{id:"directories",children:"Directories"}),"\n",(0,t.jsxs)(i.p,{children:["The path can also be a directory. In that case, the directory will be loaded with ",(0,t.jsx)(i.a,{href:"https://github.com/fastify/fastify-autoload",children:(0,t.jsx)(i.code,{children:"@fastify/autoload"})}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Consider the following directory structure:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n"})}),"\n",(0,t.jsx)(i.p,{children:"By default the folder will be added as a prefix to all the routes defined within them.\nSee the autoload documentation for all the options to customize this behavior."}),"\n",(0,t.jsx)(i.h2,{id:"multiple-plugins",children:"Multiple plugins"}),"\n",(0,t.jsx)(i.p,{children:"Multiple plugins can be loaded in parallel by specifying an array:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"typescript-and-autocompletion",children:"TypeScript and Autocompletion"}),"\n",(0,t.jsx)(i.p,{children:"In order to provide the correct typings of the features added by Platformatic Service to your Fastify instance,\nadd the following at the top of your files:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:'/// <references types="@platformatic/service" />\n'})}),"\n",(0,t.jsx)(i.h3,{id:"plugin-definition-with-typescript",children:"Plugin definition with TypeScript"}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of writing a plugin in TypeScript:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"/// <reference types=\"@platformatic/service\" />\nimport { FastifyInstance, FastifyPluginOptions } from 'fastify'\n\nexport default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Note that you need to add the ",(0,t.jsx)(i.code,{children:'"typescript": true'})," configuration to your ",(0,t.jsx)(i.code,{children:"platformatic.service.json"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"loading-compiled-files",children:"Loading compiled files"}),"\n",(0,t.jsxs)(i.p,{children:["Setting ",(0,t.jsx)(i.code,{children:'"typescript": false'})," but including a ",(0,t.jsx)(i.code,{children:"tsconfig.json"})," with an ",(0,t.jsx)(i.a,{href:"https://www.typescriptlang.org/tsconfig#outDir",children:(0,t.jsx)(i.code,{children:"outDir"})}),"\noption, will instruct Platformatic Service to try loading your plugins from that folder instead.\nThis setup is needed to support pre-compiled sources to reduce cold start time during deployment."]})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>o});var t=n(67294);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);