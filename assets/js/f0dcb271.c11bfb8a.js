"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[23995],{50386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),i=t(11151);const o={},a="Programmatic API",c={id:"reference/runtime/programmatic",title:"Programmatic API",description:"In many cases it's useful to start Platformatic applications using an API",source:"@site/versioned_docs/version-1.16.0/reference/runtime/programmatic.md",sourceDirName:"reference/runtime",slug:"/reference/runtime/programmatic",permalink:"/docs/reference/runtime/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.16.0/reference/runtime/programmatic.md",tags:[],version:"1.16.0",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/reference/runtime/configuration"},next:{title:"Platformatic Service",permalink:"/docs/reference/service/introduction"}},s={},d=[{value:"<code>buildServer()</code>",id:"buildserver",level:2},{value:"<code>loadConfig()</code>",id:"loadconfig",level:2},{value:"<code>start()</code>",id:"start",level:2},{value:"<code>startCommand()</code>",id:"startcommand",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,r.jsxs)(n.p,{children:["In many cases it's useful to start Platformatic applications using an API\ninstead of the command line. The ",(0,r.jsx)(n.code,{children:"@platformatic/runtime"})," API makes it simple to\nwork with different application types (e.g. ",(0,r.jsx)(n.code,{children:"service"}),", ",(0,r.jsx)(n.code,{children:"db"}),", ",(0,r.jsx)(n.code,{children:"composer"})," and ",(0,r.jsx)(n.code,{children:"runtime"}),") without\nneeding to know the application type a priori."]}),"\n",(0,r.jsx)(n.h2,{id:"buildserver",children:(0,r.jsx)(n.code,{children:"buildServer()"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"buildServer"})," function creates a server from a provided configuration\nobject or configuration filename.\nThe config can be of either Platformatic Service, Platformatic DB,\nPlatformatic Composer or any other application built on top of\n",(0,r.jsx)(n.a,{href:"/docs/reference/service/programmatic",children:"Platformatic Service"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { buildServer } from '@platformatic/runtime'\n\nconst app = await buildServer('path/to/platformatic.runtime.json')\nconst entrypointUrl = await app.start()\n\n// Make a request to the entrypoint.\nconst res = await fetch(entrypointUrl)\nconsole.log(await res.json())\n\n// Do other interesting things.\n\nawait app.close()\n"})}),"\n",(0,r.jsx)(n.p,{children:"It is also possible to customize the configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { buildServer } from '@platformatic/runtime'\n\nconst config = {\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/runtime',\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/service',\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/db',\n  // $schema: 'https://platformatic.dev/schemas/v0.39.0/composer'\n  ...\n}\nconst app = await buildServer(config)\n\nawait app.start()\n"})}),"\n",(0,r.jsx)(n.h2,{id:"loadconfig",children:(0,r.jsx)(n.code,{children:"loadConfig()"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"loadConfig"})," function is used to read and parse a configuration file for\nan arbitrary Platformatic application."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { loadConfig } from '@platformatic/runtime'\n\n// Read the config based on command line arguments. loadConfig() will detect\n// the application type.\nconst config = await loadConfig({}, ['-c', '/path/to/platformatic.config.json'])\n\n// Read the config based on command line arguments. The application type can\n// be provided explicitly.\nconst config = await loadConfig(\n  {},\n  ['-c', '/path/to/platformatic.config.json']\n)\n\n// Default config can be specified.\nconst config = await loadConfig(\n  {},\n  ['-c', '/path/to/platformatic.config.json'],\n  { key: 'value' }\n)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"start",children:(0,r.jsx)(n.code,{children:"start()"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"start"})," function loads a configuration, builds a server, and starts the\nserver. However, the server is not returned."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { start } from '@platformatic/runtime'\n\nawait start(['-c', '/path/to/platformatic.config.json])\n"})}),"\n",(0,r.jsx)(n.h2,{id:"startcommand",children:(0,r.jsx)(n.code,{children:"startCommand()"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"startCommand"})," function is similar to ",(0,r.jsx)(n.code,{children:"start"}),". However, if an exception\noccurs, ",(0,r.jsx)(n.code,{children:"startCommand"})," logs the error and exits the process. This is different\nfrom ",(0,r.jsx)(n.code,{children:"start"}),", which throws the exception."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { startCommand } from '@platformatic/runtime'\n\nawait startCommand(['-c', '/path/to/platformatic.config.json])\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);