"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[23389],{34307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(85893),i=t(11151);const a={},r="Relations",o={id:"reference/sql-mapper/entities/relations",title:"Relations",description:"When Platformatic DB is reading your database schema, it identifies relationships",source:"@site/versioned_docs/version-1.15.1/reference/sql-mapper/entities/relations.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/relations",permalink:"/docs/1.15.1/reference/sql-mapper/entities/relations",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.1/reference/sql-mapper/entities/relations.md",tags:[],version:"1.15.1",frontMatter:{},sidebar:"docs",previous:{title:"Hooks",permalink:"/docs/1.15.1/reference/sql-mapper/entities/hooks"},next:{title:"Transactions",permalink:"/docs/1.15.1/reference/sql-mapper/entities/transactions"}},c={},l=[{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"relations",children:"Relations"}),"\n",(0,s.jsxs)(n.p,{children:["When Platformatic DB is reading your database schema, it identifies relationships\nbetween tables and stores metadata on them in the entity object's ",(0,s.jsx)(n.code,{children:"relations"})," field.\nThis is achieved by querying the database's internal metadata."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Given this PostgreSQL schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE SEQUENCE IF NOT EXISTS categories_id_seq;\n\nCREATE TABLE "categories" (\n    "id" int4 NOT NULL DEFAULT nextval(\'categories_id_seq\'::regclass),\n    "name" varchar(255) NOT NULL,\n    PRIMARY KEY ("id")\n);\n\nCREATE SEQUENCE IF NOT EXISTS pages_id_seq;\n\nCREATE TABLE "pages" (\n    "id" int4 NOT NULL DEFAULT nextval(\'pages_id_seq\'::regclass),\n    "title" varchar(255) NOT NULL,\n    "body_content" text,\n    "category_id" int4,\n    PRIMARY KEY ("id")\n);\n\nALTER TABLE "pages" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id");\n'})}),"\n",(0,s.jsx)(n.p,{children:"When this code is run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\nconst { connect } = require('@platformatic/sql-mapper')\nconst { pino } = require('pino')\nconst pretty = require('pino-pretty')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const mapper = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n  const pageEntity = mapper.entities.page\n  console.log(pageEntity.relations)\n  await mapper.db.dispose()\n}\nmain()\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"[\n  {\n    constraint_catalog: 'postgres',\n    constraint_schema: 'public',\n    constraint_name: 'pages_category_id_fkey',\n    table_catalog: 'postgres',\n    table_schema: 'public',\n    table_name: 'pages',\n    constraint_type: 'FOREIGN KEY',\n    is_deferrable: 'NO',\n    initially_deferred: 'NO',\n    enforced: 'YES',\n    column_name: 'category_id',\n    ordinal_position: 1,\n    position_in_unique_constraint: 1,\n    foreign_table_name: 'categories',\n    foreign_column_name: 'id'\n  }\n]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As Platformatic DB supports multiple database engines, the contents of the\n",(0,s.jsx)(n.code,{children:"relations"})," object will vary depending on the database being used."]}),"\n",(0,s.jsxs)(n.p,{children:["The following ",(0,s.jsx)(n.code,{children:"relations"})," fields are common to all database engines:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"column_name"})," \u2014 the column that stores the foreign key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"foreign_table_name"})," \u2014 the table hosting the related row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"foreign_column_name"})," \u2014 the column in foreign table that identifies the row"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);