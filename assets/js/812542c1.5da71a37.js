"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[96261],{25758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const o={},r="Introduction to @platformatic/sql-mapper",c={id:"reference/sql-mapper/introduction",title:"Introduction to @platformatic/sql-mapper",description:"@platformatic/sql-mapper is the underlining utility that Platformatic DB uses to create useful utilities to",source:"@site/versioned_docs/version-1.15.0/reference/sql-mapper/introduction.md",sourceDirName:"reference/sql-mapper",slug:"/reference/sql-mapper/introduction",permalink:"/docs/1.15.0/reference/sql-mapper/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.0/reference/sql-mapper/introduction.md",tags:[],version:"1.15.0",frontMatter:{},sidebar:"docs",previous:{title:"Ignoring types and fields",permalink:"/docs/1.15.0/reference/sql-graphql/ignore"},next:{title:"sql-mapper Fastify Plugin",permalink:"/docs/1.15.0/reference/sql-mapper/fastify-plugin"}},a={},l=[{value:"Install",id:"install",level:2},{value:"API",id:"api",level:2},{value:"<code>connect(opts) : Promise</code>",id:"connectopts--promise",level:3},{value:"<code>createConnectionPool(opts) : Promise</code>",id:"createconnectionpoolopts--promise",level:3},{value:"Code samples",id:"code-samples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction-to-platformaticsql-mapper",children:"Introduction to @platformatic/sql-mapper"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@platformatic/sql-mapper"})," is the underlining utility that Platformatic DB uses to create useful utilities to\nmanipulate your SQL database using JavaScript."]}),"\n",(0,i.jsxs)(n.p,{children:["This module is bundled with ",(0,i.jsx)(n.a,{href:"/docs/1.15.0/reference/db/introduction",children:"Platformatic DB"})," via ",(0,i.jsx)(n.a,{href:"/docs/1.15.0/reference/sql-mapper/fastify-plugin",children:"a fastify plugin"}),"\nThe rest of this guide shows how to use this module directly."]}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm i @platformatic/sql-mapper\n"})}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(n.h3,{id:"connectopts--promise",children:(0,i.jsx)(n.code,{children:"connect(opts) : Promise"})}),"\n",(0,i.jsx)(n.p,{children:"It will inspect a database schema and return an object containing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db"})," \u2014 A database abstraction layer from ",(0,i.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,i.jsx)(n.code,{children:"@databases"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sql"})," \u2014 The SQL builder from ",(0,i.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,i.jsx)(n.code,{children:"@databases"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entities"})," \u2014 An object containing a key for each table found in the schema, with basic CRUD operations. See ",(0,i.jsx)(n.a,{href:"/docs/1.15.0/reference/sql-mapper/entities/introduction",children:"Entity Reference"})," for details."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The valid options are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"connectionString"})," \u2014 The Database connection string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"poolSize"})," - Maximum number of connections in the connection pool. Defaults to ",(0,i.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"log"})," \u2014 A logger object (like ",(0,i.jsx)(n.a,{href:"https://getpino.io",children:"Pino"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onDatabaseLoad"})," \u2014 An async function that is called after the connection is established. It will receive ",(0,i.jsx)(n.code,{children:"db"})," and ",(0,i.jsx)(n.code,{children:"sql"})," as parameter."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ignore"})," \u2014 Object used to ignore some tables from building entities. (i.e. ",(0,i.jsx)(n.code,{children:"{ 'versions': true }"})," will ignore ",(0,i.jsx)(n.code,{children:"versions"})," table)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autoTimestamp"})," \u2014 Generate timestamp automatically when inserting/updating records."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hooks"})," \u2014 For each entity name (like ",(0,i.jsx)(n.code,{children:"Page"}),") you can customize any of the entity API function. Your custom function will receive the original function as first parameter, and then all the other parameters passed to it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cache"})," \u2014 enable cache and dedupe features - currently supported ",(0,i.jsx)(n.code,{children:"dedupe"})," on entities ",(0,i.jsx)(n.code,{children:"find"})," method only. Boolean, default is disabled."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"createconnectionpoolopts--promise",children:(0,i.jsx)(n.code,{children:"createConnectionPool(opts) : Promise"})}),"\n",(0,i.jsx)(n.p,{children:"It will inspect a database schema and return an object containing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"db"})," \u2014 A database abstraction layer from ",(0,i.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,i.jsx)(n.code,{children:"@databases"})})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sql"})," \u2014 The SQL builder from ",(0,i.jsx)(n.a,{href:"https://www.atdatabases.org/",children:(0,i.jsx)(n.code,{children:"@databases"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The valid options are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"connectionString"})," \u2014 The Database connection string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"poolSize"})," - Maximum number of connections in the connection pool. Defaults to ",(0,i.jsx)(n.code,{children:"10"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"log"})," \u2014 A logger object (like ",(0,i.jsx)(n.a,{href:"https://getpino.io",children:"Pino"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This utility is useful if you just need to connect to the db without generating any entity."}),"\n",(0,i.jsx)(n.h2,{id:"code-samples",children:"Code samples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\n\nconst logger = pino()\n\nasync function onDatabaseLoad (db, sql) {\n  await db.query(sql`CREATE TABLE pages (\n    id SERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL\n  );`)\n}\nconst connectionString =\n  'postgres://postgres:postgres@localhost:5432/postgres'\nconst mapper = await connect({\n  connectionString,\n  log: logger,\n  onDatabaseLoad,\n  ignore: {},\n  hooks: {\n    Page: {\n      find: async function(_find, opts) {\n        console.log('hook called');\n        return await _find(opts)\n      }\n    }\n  },\n  cache: true\n})\nconst pageEntity = mapper.entities.page\n\nawait mapper.db.query(mapper.sql`SELECT * FROM pages`)\nawait mapper.db.find('option1', 'option2')\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);