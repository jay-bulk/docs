"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[67865],{58862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(85893),a=r(11151);const s={},i="Programmatic API",o={id:"reference/db/programmatic",title:"Programmatic API",description:"It's possible to start an instance of Platformatic DB from JavaScript.",source:"@site/versioned_docs/version-1.15.0/reference/db/programmatic.md",sourceDirName:"reference/db",slug:"/reference/db/programmatic",permalink:"/docs/1.15.0/reference/db/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.0/reference/db/programmatic.md",tags:[],version:"1.15.0",frontMatter:{},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/1.15.0/reference/db/logging"},next:{title:"Schema support",permalink:"/docs/1.15.0/reference/db/schema-support"}},c={},l=[{value:"API",id:"api",level:2},{value:"buildServer(config)",id:"buildserverconfig",level:3},{value:"RestartableApp",id:"restartableapp",level:3},{value:".start()",id:"start",level:4},{value:".restart()",id:"restart",level:4},{value:".close()",id:"close",level:4}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,n.jsx)(t.p,{children:"It's possible to start an instance of Platformatic DB from JavaScript."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { buildServer } from '@platformatic/db'\n\nconst app = await buildServer('/path/to/platformatic.db.json')\n\nawait app.start() // this will start our server\n\nconsole.log('URL', app.url)\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,n.jsx)(t.p,{children:"It is also possible to customize the configuration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { buildServer } from '@platformatic/db'\n\nconst app = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  },\n  db: {\n    connectionString: 'sqlite://test.sqlite'\n  },\n})\n\nawait app.start() // this will start our server\n\nconsole.log('URL', app.url)\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more details on how this is implemented, read ",(0,n.jsx)(t.a,{href:"/docs/1.15.0/reference/service/programmatic",children:"Platformatic Service Programmatic API"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsx)(t.h3,{id:"buildserverconfig",children:"buildServer(config)"}),"\n",(0,n.jsxs)(t.p,{children:["Returns an instance of the ",(0,n.jsx)(t.a,{href:"#RestartableApp",children:"restartable application"})]}),"\n",(0,n.jsx)(t.h3,{id:"restartableapp",children:"RestartableApp"}),"\n",(0,n.jsx)(t.h4,{id:"start",children:".start()"}),"\n",(0,n.jsx)(t.p,{children:"Listen to the hostname/port combination specified in the config."}),"\n",(0,n.jsx)(t.h4,{id:"restart",children:".restart()"}),"\n",(0,n.jsx)(t.p,{children:"Restart the Fastify application"}),"\n",(0,n.jsx)(t.h4,{id:"close",children:".close()"}),"\n",(0,n.jsx)(t.p,{children:"Stops the application."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(67294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);