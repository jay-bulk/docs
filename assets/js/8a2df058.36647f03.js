"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[17805],{68123:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(85893),t=n(11151);const s={},a="Platformatic DB",o={id:"reference/db/introduction",title:"Platformatic DB",description:"Platformatic DB is an HTTP server that provides a flexible set of tools for",source:"@site/versioned_docs/version-1.15.1/reference/db/introduction.md",sourceDirName:"reference/db",slug:"/reference/db/introduction",permalink:"/docs/1.15.1/reference/db/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.1/reference/db/introduction.md",tags:[],version:"1.15.1",frontMatter:{},sidebar:"docs",previous:{title:"API modification",permalink:"/docs/1.15.1/reference/composer/api-modification"},next:{title:"Configuration",permalink:"/docs/1.15.1/reference/db/configuration"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Supported databases",id:"supported-databases",level:2},{value:"Issues",id:"issues",level:2}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"platformatic-db",children:"Platformatic DB"}),"\n",(0,i.jsx)(r.p,{children:"Platformatic DB is an HTTP server that provides a flexible set of tools for\nbuilding robust APIs with Node.js."}),"\n",(0,i.jsxs)(r.p,{children:["For a high level overview of how Platformatic DB works, please reference the\n",(0,i.jsx)(r.a,{href:"/docs/1.15.1/getting-started/architecture",children:"Architecture"})," guide."]}),"\n",(0,i.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Command-line interface: ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/cli#db",children:(0,i.jsx)(r.code,{children:"platformatic db"})})]}),"\n",(0,i.jsxs)(r.li,{children:["Support for ",(0,i.jsx)(r.a,{href:"#supported-databases",children:"multiple database systems"})]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/db/migrations",children:"Database migrations"})}),"\n",(0,i.jsxs)(r.li,{children:["REST/OpenAPI","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Automatic ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/sql-openapi/introduction",children:"REST API"})," from your database schema"]}),"\n",(0,i.jsxs)(r.li,{children:["Interactive documentation (",(0,i.jsx)(r.a,{href:"https://swagger.io/tools/swagger-ui/",children:"Swagger UI"}),")"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"https://swagger.io/resources/open-api/",children:"OpenAPI 3.0"})," schema"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["GraphQL","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Automatic ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/sql-graphql/introduction",children:"GraphQL API"})," from your\ndatabase schema"]}),"\n",(0,i.jsxs)(r.li,{children:["Support for ",(0,i.jsx)(r.a,{href:"https://www.apollographql.com/apollo-federation/",children:"Apollo Federation"})]}),"\n",(0,i.jsxs)(r.li,{children:["Web based GraphQL IDE (",(0,i.jsx)(r.a,{href:"https://github.com/graphql/graphiql",children:"GraphiQL"}),")"]}),"\n",(0,i.jsx)(r.li,{children:"Generated GraphQL schema"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/db/authorization/introduction",children:"Authentication & authorization"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Supported methods: JWT, Webhook, HTTP Headers (development only)"}),"\n",(0,i.jsx)(r.li,{children:"Authorization via role based access control (RBAC)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Complete flexibility","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Add custom functionality in a ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/db/plugin",children:"Fastify plugin"})]}),"\n",(0,i.jsxs)(r.li,{children:["Execute database operations via ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/sql-mapper/entities/introduction",children:"mapped entities"})]}),"\n",(0,i.jsxs)(r.li,{children:["Write and execute ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/sql-mapper/introduction",children:"raw SQL queries"})]}),"\n",(0,i.jsxs)(r.li,{children:["Write plugins in JavaScript or ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/cli#compile",children:"TypeScript"})]}),"\n",(0,i.jsx)(r.li,{children:"Automatic generation of types based on the SQL tables"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Start Platformatic DB ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/db/programmatic",children:"programmatically"})," in tests or other applications"]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:["Get up and running in 2 minutes using our\n",(0,i.jsx)(r.a,{href:"/docs/1.15.1/getting-started/quick-start-guide",children:"Quick Start Guide"})," \u26a1"]})}),"\n",(0,i.jsx)(r.h2,{id:"supported-databases",children:"Supported databases"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Database"}),(0,i.jsx)(r.th,{children:"Version"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.sqlite.org/",children:"SQLite"})}),(0,i.jsx)(r.td,{children:"3."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})}),(0,i.jsx)(r.td,{children:">= 15"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://www.mysql.com/",children:"MySQL"})}),(0,i.jsx)(r.td,{children:">= 5.7"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://mariadb.org/",children:"MariaDB"})}),(0,i.jsx)(r.td,{children:">= 10.11"})]})]})]}),"\n",(0,i.jsxs)(r.p,{children:["The required database driver is automatically inferred and loaded based on the\nvalue of the ",(0,i.jsx)(r.a,{href:"/docs/1.15.1/reference/db/configuration#core",children:(0,i.jsx)(r.code,{children:"connectionString"})}),"\nconfiguration setting."]}),"\n",(0,i.jsx)(r.h2,{id:"issues",children:"Issues"}),"\n",(0,i.jsxs)(r.p,{children:["If you run into a bug or have a suggestion for improvement, please\n",(0,i.jsx)(r.a,{href:"https://github.com/platformatic/platformatic/issues/new",children:"raise an issue on GitHub"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var i=n(67294);const t={},s=i.createContext(t);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);