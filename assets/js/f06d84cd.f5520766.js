"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[40501],{56774:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(85893),t=r(11151);const i={},s="Platformatic Composer",c={id:"reference/composer/introduction",title:"Platformatic Composer",description:"Platformatic Composer is an HTTP server that automatically aggregates multiple",source:"@site/docs/reference/composer/introduction.md",sourceDirName:"reference/composer",slug:"/reference/composer/introduction",permalink:"/docs/next/reference/composer/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/reference/composer/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic CLI",permalink:"/docs/next/reference/cli"},next:{title:"Platformatic Composer",permalink:"/docs/next/reference/composer/introduction"}},a={},l=[{value:"Features",id:"features",level:2},{value:"Issues",id:"issues",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Example configuration file",id:"example-configuration-file",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"platformatic-composer",children:"Platformatic Composer"}),"\n",(0,o.jsx)(n.p,{children:"Platformatic Composer is an HTTP server that automatically aggregates multiple\nservices APIs into a single API."}),"\n",(0,o.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Command-line interface: ",(0,o.jsx)(n.a,{href:"/docs/next/reference/cli#composer",children:(0,o.jsx)(n.code,{children:"platformatic composer"})})]}),"\n",(0,o.jsxs)(n.li,{children:["Automatic ",(0,o.jsx)(n.a,{href:"/docs/next/reference/composer/configuration#composer",children:"OpenApi composition"})]}),"\n",(0,o.jsxs)(n.li,{children:["Automatic ",(0,o.jsx)(n.a,{href:"/docs/next/reference/composer/configuration#composer",children:"GraphQL composition"})," (experimental)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/next/reference/composer/configuration#composer",children:"Reverse proxy"})," for composed services"]}),"\n",(0,o.jsxs)(n.li,{children:["Add custom functionality in a ",(0,o.jsx)(n.a,{href:"/docs/next/reference/composer/plugin",children:"Fastify plugin"})]}),"\n",(0,o.jsxs)(n.li,{children:["Write plugins in JavaScript or ",(0,o.jsx)(n.a,{href:"/docs/next/reference/cli#compile",children:"TypeScript"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"issues",children:"Issues"}),"\n",(0,o.jsxs)(n.p,{children:["If you run into a bug or have a suggestion for improvement, please\n",(0,o.jsx)(n.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"raise an issue on GitHub"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"standalone-usage",children:"Standalone usage"}),"\n",(0,o.jsxs)(n.p,{children:["If you're only interested in the features available in Platformatic Composer, you can replace ",(0,o.jsx)(n.code,{children:"platformatic"})," with ",(0,o.jsx)(n.code,{children:"@platformatic/composer"})," in the ",(0,o.jsx)(n.code,{children:"dependencies"})," of your ",(0,o.jsx)(n.code,{children:"package.json"}),", so that you'll import fewer deps."]}),"\n",(0,o.jsx)(n.h2,{id:"example-configuration-file",children:"Example configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["The following configuration file can be used to start a new Platformatic\nComposer project. For more details on the configuration file, see the\n",(0,o.jsx)(n.a,{href:"/docs/next/reference/composer/configuration",children:"configuration documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"With OpenAPI services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://platformatic.dev/schemas/v0.26.0/composer",\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": 0,\n    "logger": {\n      "level": "info"\n    }\n  },\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "origin": "https://auth-service.com",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "origin": "https://payment-service.com",\n        "openapi": {\n          "url": "/documentation/json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  },\n  "watch": true\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"With GraphQL services"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": 0,\n    "logger": {\n      "level": "info"\n    }\n  },\n  "composer": {\n    "graphql": {\n      "graphiql": true\n    },\n    "services": [\n      {\n        "id": "books",\n        "origin": "https://books-service.com",\n        "graphql": true\n      },\n      {\n        "id": "authors",\n        "origin": "https://authors-service.com",\n        "graphql": true\n      },\n    ],\n    "refreshTimeout": 1000\n  },\n  "watch": true\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var o=r(67294);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);