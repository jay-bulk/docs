"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[89414],{61956:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(85893),o=n(11151);const s={},r="Compiling Typescript for Deployment",c={id:"guides/compiling-typescript-for-deployment",title:"Compiling Typescript for Deployment",description:"Platformatic Service provides automatic TypeScript compilation during the startup",source:"@site/versioned_docs/version-1.16.0/guides/compiling-typescript-for-deployment.md",sourceDirName:"guides",slug:"/guides/compiling-typescript-for-deployment",permalink:"/docs/guides/compiling-typescript-for-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.16.0/guides/compiling-typescript-for-deployment.md",tags:[],version:"1.16.0",frontMatter:{}},p={},l=[{value:"Setup",id:"setup",level:2},{value:"Compiling for deployment",id:"compiling-for-deployment",level:2},{value:"Usage with Runtime",id:"usage-with-runtime",level:2},{value:"Avoid shipping TypeScript sources",id:"avoid-shipping-typescript-sources",level:2}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"compiling-typescript-for-deployment",children:"Compiling Typescript for Deployment"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/docs/reference/service/introduction",children:"Platformatic Service"})," provides automatic TypeScript compilation during the startup\nof your Node.js server. While this provides an amazing developer experience, in production it adds additional\nstart time and it requires more resources. In this guide, we show how to compile your TypeScript\nsource files before shipping to a server."]}),"\n",(0,t.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(i.p,{children:["The following is supported by all Platformatic applications, as they are all based on the same ",(0,t.jsx)(i.a,{href:"/docs/reference/service/plugin",children:"plugin system"}),".\nIf you have generated your application using ",(0,t.jsx)(i.code,{children:"npx create-platformatic@latest"}),", you will have a similar section in your config file:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "plugins",\n      "encapsulate": false\n    }, "routes"],\n    "typescript": "{PLT_TYPESCRIPT}"\n  }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["Note that the ",(0,t.jsx)(i.code,{children:"{PLT_TYPESCRIPT}"})," will be automatically replaced with the ",(0,t.jsx)(i.code,{children:"PLT_TYPESCRIPT"})," environment variable, that is configured in your\n",(0,t.jsx)(i.code,{children:".env"})," (and ",(0,t.jsx)(i.code,{children:".env.sample"}),") file:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"PLT_TYPESCRIPT=true\n"})}),"\n",(0,t.jsx)(i.p,{children:"Older Platformatic applications might not have the same layout, if so you can update your settings to match (after updating your dependencies)."}),"\n",(0,t.jsx)(i.h2,{id:"compiling-for-deployment",children:"Compiling for deployment"}),"\n",(0,t.jsxs)(i.p,{children:["Compiling for deployment is then as easy as running ",(0,t.jsx)(i.code,{children:"plt service compile"})," in that same folder.\nRememeber to set ",(0,t.jsx)(i.code,{children:"PLT_TYPESCRIPT=false"})," in your environment variables in the deployed environments."]}),"\n",(0,t.jsx)(i.h2,{id:"usage-with-runtime",children:"Usage with Runtime"}),"\n",(0,t.jsxs)(i.p,{children:["If you are building a ",(0,t.jsx)(i.a,{href:"/docs/reference/runtime/introduction",children:"Runtime"}),"-based application, you will need\nto compile every service independently or use the ",(0,t.jsx)(i.code,{children:"plt runtime compile"})," command."]}),"\n",(0,t.jsx)(i.h2,{id:"avoid-shipping-typescript-sources",children:"Avoid shipping TypeScript sources"}),"\n",(0,t.jsxs)(i.p,{children:["If you want to avoid shipping the TypeScript sources you need to configure Platformatic with the location\nwhere your files have been built by adding an ",(0,t.jsx)(i.code,{children:"outDir"})," option:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "plugins",\n      "encapsulate": false\n    }, "routes"],\n    "typescript": {\n      "enabled": "{PLT_TYPESCRIPT}",\n      "outDir": "dist"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This is not necessary if you include ",(0,t.jsx)(i.code,{children:"tsconfig.json"})," together with the compiled code."]})]})}function d(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var t=n(67294);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);