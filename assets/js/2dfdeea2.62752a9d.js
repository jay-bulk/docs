"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[94014],{33954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(85893),s=n(11151);const i={},r="Introduction to Entities",o={id:"reference/sql-mapper/entities/introduction",title:"Introduction to Entities",description:"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database.",source:"@site/versioned_docs/version-1.14.3/reference/sql-mapper/entities/introduction.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/introduction",permalink:"/docs/1.14.3/reference/sql-mapper/entities/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.14.3/reference/sql-mapper/entities/introduction.md",tags:[],version:"1.14.3",frontMatter:{},sidebar:"docs",previous:{title:"sql-mapper Fastify Plugin",permalink:"/docs/1.14.3/reference/sql-mapper/fastify-plugin"},next:{title:"Fields",permalink:"/docs/1.14.3/reference/sql-mapper/entities/fields"}},c={},d=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"introduction-to-entities",children:"Introduction to Entities"}),"\n",(0,a.jsx)(t.p,{children:"The primary goal of Platformatic DB is to read a database schema and generate REST and GraphQL endpoints that enable the execution of CRUD (Create/Retrieve/Update/Delete) operations against the database."}),"\n",(0,a.jsxs)(t.p,{children:["Platformatic DB includes a ",(0,a.jsx)(t.em,{children:"mapper"})," that reads the schemas of database tables and then generates an ",(0,a.jsx)(t.em,{children:"entity"})," object for each table."]}),"\n",(0,a.jsxs)(t.p,{children:["Platformatic DB is a ",(0,a.jsx)(t.a,{href:"https://fastify.io",children:"Fastify"})," application. The Fastify instance object is decorated with the ",(0,a.jsx)(t.code,{children:"platformatic"})," property, which exposes several APIs that handle the manipulation of data in the database."]}),"\n",(0,a.jsxs)(t.p,{children:["Platformatic DB populates the ",(0,a.jsx)(t.code,{children:"app.platformatic.entities"})," object with data found in database tables."]}),"\n",(0,a.jsxs)(t.p,{children:["The keys on the ",(0,a.jsx)(t.code,{children:"entities"})," object are ",(0,a.jsx)(t.em,{children:"singularized"})," versions of the table names \u2014 for example ",(0,a.jsx)(t.code,{children:"users"})," becomes ",(0,a.jsx)(t.code,{children:"user"}),", ",(0,a.jsx)(t.code,{children:"categories"})," becomes ",(0,a.jsx)(t.code,{children:"category"})," \u2014 and the values are a set of associated metadata and functions."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);