"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[30051],{1869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151);const s={},i="Many To Many Relationship",o={id:"reference/sql-graphql/many-to-many",title:"Many To Many Relationship",description:"Many-to-Many relationship lets you relate each row in one table to many rows in",source:"@site/versioned_docs/version-1.16.0/reference/sql-graphql/many-to-many.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/many-to-many",permalink:"/docs/reference/sql-graphql/many-to-many",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.16.0/reference/sql-graphql/many-to-many.md",tags:[],version:"1.16.0",frontMatter:{},sidebar:"docs",previous:{title:"Mutations",permalink:"/docs/reference/sql-graphql/mutations"},next:{title:"Ignoring types and fields",permalink:"/docs/reference/sql-graphql/ignore"}},l={},d=[{value:"Example",id:"example",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"many-to-many-relationship",children:"Many To Many Relationship"}),"\n",(0,a.jsx)(n.p,{children:"Many-to-Many relationship lets you relate each row in one table to many rows in\nanother table and vice versa."}),"\n",(0,a.jsxs)(n.p,{children:['Many-to-many relationship are implemented in SQL via a "join table", a table whose ',(0,a.jsx)(n.strong,{children:"primary key"}),"\nis composed by the identifier of the two parts of the many-to-many relationship."]}),"\n",(0,a.jsx)(n.p,{children:"Platformatic DB fully support many-to-many relationships on all supported databases."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Consider the following schema (SQLite):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE pages (\n  id INTEGER PRIMARY KEY,\n  the_title VARCHAR(42)\n);\n\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE editors (\n  page_id INTEGER NOT NULL,\n  user_id INTEGER NOT NULL,\n  role VARCHAR(255) NOT NULL,\n  CONSTRAINT fk_editor_pages FOREIGN KEY (page_id) REFERENCES pages(id),\n  CONSTRAINT fk_editor_users FOREIGN KEY (user_id) REFERENCES users(id),\n  PRIMARY KEY (page_id, user_id)\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The table ",(0,a.jsx)(n.code,{children:"editors"}),' is a "join table" between users and pages.\nGiven this schema, you could issue queries like:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query {\n  editors(orderBy: { field: role, direction: DESC }) {\n    user {\n      id\n      username\n    }\n    page {\n      id\n      theTitle\n    }\n    role\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Mutation works exactly the same as before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  saveEditor(input: { userId: "1", pageId: "1", role: "captain" }) {\n    user {\n      id\n      username\n    }\n    page {\n      id\n      theTitle\n    }\n    role\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);