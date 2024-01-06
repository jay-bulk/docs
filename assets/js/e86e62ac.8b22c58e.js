"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[84369],{22440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(85893),a=t(11151);const r={},i="Mutations",l={id:"reference/sql-graphql/mutations",title:"Mutations",description:"When the GraphQL plugin is loaded, some mutations are automatically adding to",source:"@site/versioned_docs/version-1.15.0/reference/sql-graphql/mutations.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/mutations",permalink:"/docs/1.15.0/reference/sql-graphql/mutations",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.0/reference/sql-graphql/mutations.md",tags:[],version:"1.15.0",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/1.15.0/reference/sql-graphql/queries"},next:{title:"Many To Many Relationship",permalink:"/docs/1.15.0/reference/sql-graphql/many-to-many"}},o={},c=[{value:"<code>save[ENTITY]</code>",id:"saveentity",level:2},{value:"Example",id:"example",level:3},{value:"<code>insert[ENTITY]</code>",id:"insertentity",level:2},{value:"Example",id:"example-1",level:3},{value:"<code>delete[ENTITIES]</code>",id:"deleteentities",level:2},{value:"Example",id:"example-2",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"mutations",children:"Mutations"}),"\n",(0,s.jsx)(n.p,{children:"When the GraphQL plugin is loaded, some mutations are automatically adding to\nthe GraphQL schema."}),"\n",(0,s.jsx)(n.h2,{id:"saveentity",children:(0,s.jsx)(n.code,{children:"save[ENTITY]"})}),"\n",(0,s.jsxs)(n.p,{children:["Saves a new entity to the database or updates an existing entity.\nThis actually behaves as an ",(0,s.jsx)(n.code,{children:"upsert"}),", allowing both behaviours depending on the presence of the primary key field."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { id: 3 title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '3', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"insertentity",children:(0,s.jsx)(n.code,{children:"insert[ENTITY]"})}),"\n",(0,s.jsx)(n.p,{children:"Inserts a new entity in the database."}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '4', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"deleteentities",children:(0,s.jsx)(n.code,{children:"delete[ENTITIES]"})}),"\n",(0,s.jsxs)(n.p,{children:["Deletes one or more entities from the database, based on the ",(0,s.jsx)(n.code,{children:"where"})," clause\npassed as an input to the mutation."]}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          deletePages(where: { id: { eq: \"3\" } }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { deletePages: [ { id: '3', title: 'Platformatic is cool!' } ] }\n  await app.close()\n}\n\nmain()\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(67294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);