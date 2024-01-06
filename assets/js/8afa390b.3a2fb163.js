"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[14618],{42950:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(85893),i=r(11151);const o={},s="Migrations",a={id:"reference/db/migrations",title:"Migrations",description:"It uses Postgrator under the hood to run migrations. Please refer to the Postgrator documentation for guidance on writing migration files.",source:"@site/versioned_docs/version-1.16.0/reference/db/migrations.md",sourceDirName:"reference/db",slug:"/reference/db/migrations",permalink:"/docs/reference/db/migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.16.0/reference/db/migrations.md",tags:[],version:"1.16.0",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/reference/db/configuration"},next:{title:"Authorization",permalink:"/docs/reference/db/authorization/introduction"}},l={},c=[{value:"How to run migrations",id:"how-to-run-migrations",level:2},{value:"Automatically on server start",id:"automatically-on-server-start",level:3},{value:"Manually with the CLI",id:"manually-with-the-cli",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"migrations",children:"Migrations"}),"\n",(0,t.jsxs)(n.p,{children:["It uses ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/postgrator",children:"Postgrator"})," under the hood to run migrations. Please refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/rickbergfalk/postgrator",children:"Postgrator documentation"})," for guidance on writing migration files."]}),"\n",(0,t.jsx)(n.p,{children:"In brief, you should create a file structure like this"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"migrations/\n  |- 001.do.sql\n  |- 001.undo.sql\n  |- 002.do.sql\n  |- 002.undo.sql\n  |- 003.do.sql\n  |- 003.undo.sql\n  |- 004.do.sql\n  |- 004.undo.sql\n  |- ... and so on\n"})}),"\n",(0,t.jsx)(n.p,{children:"Postgrator uses a table in your schema, to store which migrations have been already processed, so that only new ones will be applied at every server start."}),"\n",(0,t.jsx)(n.p,{children:"You can always rollback some migrations specifing what version you would like to rollback to."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ platformatic db migrations apply --to 002\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Will execute ",(0,t.jsx)(n.code,{children:"004.undo.sql"}),", ",(0,t.jsx)(n.code,{children:"003.undo.sql"})," in this order. If you keep those files in migrations directory, when the server restarts it will execute ",(0,t.jsx)(n.code,{children:"003.do.sql"})," and ",(0,t.jsx)(n.code,{children:"004.do.sql"})," in this order if the ",(0,t.jsx)(n.code,{children:"autoApply"})," value is true, or you can run the ",(0,t.jsx)(n.code,{children:"db migrations apply"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["It's also possible to rollback a single migration with ",(0,t.jsx)(n.code,{children:"-r"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ platformatic db migrations apply -r \n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-run-migrations",children:"How to run migrations"}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways to run migrations in Platformatic DB. They can be processed automatically when the server starts if the ",(0,t.jsx)(n.code,{children:"autoApply"})," value is true, or you can just run the ",(0,t.jsx)(n.code,{children:"db migrations apply"})," command."]}),"\n",(0,t.jsx)(n.p,{children:"In both cases you have to edit your config file to tell Platformatic DB where are your migration files."}),"\n",(0,t.jsx)(n.h3,{id:"automatically-on-server-start",children:"Automatically on server start"}),"\n",(0,t.jsxs)(n.p,{children:["To run migrations when Platformatic DB starts, you need to use the config file root property ",(0,t.jsx)(n.code,{children:"migrations"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["There are two options in the ",(0,t.jsx)(n.code,{children:'"migrations"'})," property"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dir"})," (",(0,t.jsx)(n.em,{children:"required"}),") the directory where the migration files are located. It will be relative to the config file path."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"autoApply"})," a boolean value that tells Platformatic DB to auto-apply migrations or not (default: ",(0,t.jsx)(n.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "migrations": {\n    "dir": "./path/to/migrations/folder",\n    "autoApply": false\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"manually-with-the-cli",children:"Manually with the CLI"}),"\n",(0,t.jsxs)(n.p,{children:["See documentation about ",(0,t.jsx)(n.code,{children:"db migrations apply"})," ",(0,t.jsx)(n.a,{href:"../cli#migrate",children:"command"})]}),"\n",(0,t.jsx)(n.p,{children:"In short:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["be sure to define a correct ",(0,t.jsx)(n.code,{children:"migrations.dir"})," folder under the config on ",(0,t.jsx)(n.code,{children:"platformatic.db.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["get the ",(0,t.jsx)(n.code,{children:"MIGRATION_NUMBER"})," (f.e. if the file is named ",(0,t.jsx)(n.code,{children:"002.do.sql"})," will be ",(0,t.jsx)(n.code,{children:"002"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"npx platformatic db migrations apply --to MIGRATION_NUMBER"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(67294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);