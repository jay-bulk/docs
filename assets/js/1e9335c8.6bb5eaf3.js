"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[34809,10266],{67028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(85893),a=n(11151),i=n(74866),s=n(85162);const o={},l=void 0,c={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"Run this command in your terminal to start the Platformatic creator wizard:",source:"@site/versioned_docs/version-1.15.0/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/1.15.0/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.0/getting-started/new-api-project-instructions.md",tags:[],version:"1.15.0",frontMatter:{}},d={},u=[];function h(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Run this command in your terminal to start the Platformatic creator wizard:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"package-manager-create",children:[(0,r.jsx)(s.Z,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic project. For this guide, select these options:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"- Which kind of project do you want to create?  => DB\n- Where would you like to create your project?  => quick-start\n- Do you want to create default migrations?     => Yes\n- Do you want to create a plugin?               => Yes\n- Do you want to use TypeScript?                => No\n- Do you want to install dependencies?          => Yes (this can take a while)\n- Do you want to apply the migrations?          => Yes\n- Do you want to generate types?                => Yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => No\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace?  => No\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once the wizard is complete, you'll have a Platformatic app project in the\nfolder ",(0,r.jsx)(t.code,{children:"quick-start"}),", with example migration files and a plugin script."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Make sure you run the npm/yarn/pnpm command ",(0,r.jsx)(t.code,{children:"install"})," command manually if you\ndon't ask the wizard to do it for you."]})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},40694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(85893),a=n(11151),i=n(74866),s=n(85162),o=n(67028);const l={},c="Quick Start Guide",d={id:"getting-started/quick-start-guide",title:"Quick Start Guide",description:"In this guide you'll learn how to create and run your first API with",source:"@site/versioned_docs/version-1.15.0/getting-started/quick-start-guide.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start-guide",permalink:"/docs/1.15.0/getting-started/quick-start-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.0/getting-started/quick-start-guide.md",tags:[],version:"1.15.0",frontMatter:{},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/1.15.0/category/getting-started"},next:{title:"Movie Quotes App Tutorial",permalink:"/docs/1.15.0/getting-started/movie-quotes-app-tutorial"}},u={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a new API project",id:"create-a-new-api-project",level:2},{value:"Automatic CLI",id:"automatic-cli",level:3},{value:"Start your API server",id:"start-your-api-server",level:4},{value:"Check the database schema",id:"check-the-database-schema",level:4},{value:"Check your API configuration",id:"check-your-api-configuration",level:4},{value:"Manual setup",id:"manual-setup",level:3},{value:"Add a database schema",id:"add-a-database-schema",level:4},{value:"Configure your API",id:"configure-your-api",level:4},{value:"Start your API server",id:"start-your-api-server-1",level:4},{value:"Next steps",id:"next-steps",level:2},{value:"Use the REST API interface",id:"use-the-rest-api-interface",level:3},{value:"Create a new movie",id:"create-a-new-movie",level:4},{value:"Get all movies",id:"get-all-movies",level:4},{value:"Swagger OpenAPI documentation",id:"swagger-openapi-documentation",level:4},{value:"Use the GraphQL API interface",id:"use-the-graphql-api-interface",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quick-start-guide",children:"Quick Start Guide"}),"\n",(0,r.jsxs)(t.p,{children:["In this guide you'll learn how to create and run your first API with\n",(0,r.jsx)(t.a,{href:"/docs/next/reference/db/introduction",children:"Platformatic DB"}),". Let's get started!"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This guide uses ",(0,r.jsx)(t.a,{href:"https://www.sqlite.org/",children:"SQLite"})," for the database, but\nPlatformatic DB also supports ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),",\n",(0,r.jsx)(t.a,{href:"https://www.mysql.com/",children:"MySQL"})," and ",(0,r.jsx)(t.a,{href:"https://mariadb.org/",children:"MariaDB"})," databases."]})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Platformatic supports macOS, Linux and Windows (",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/windows/wsl/",children:"WSL"})," recommended)."]}),"\n",(0,r.jsx)(t.p,{children:"To follow along with this guide you'll need to have these things installed:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," >= v18.8.0 or >= v20.6.0"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://docs.npmjs.com/cli/",children:"npm"})," v7 or later"]}),"\n",(0,r.jsxs)(t.li,{children:["A code editor, for example ",(0,r.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-a-new-api-project",children:"Create a new API project"}),"\n",(0,r.jsx)(t.h3,{id:"automatic-cli",children:"Automatic CLI"}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(t.h4,{id:"start-your-api-server",children:"Start your API server"}),"\n",(0,r.jsx)(t.p,{children:"In your project directory, run this command to start your API server:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,r.jsx)(t.p,{children:"Your Platformatic API is now up and running! \ud83c\udf1f"}),"\n",(0,r.jsx)(t.p,{children:"This command will:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Automatically map your SQL database to REST and GraphQL API interfaces."}),"\n",(0,r.jsx)(t.li,{children:"Start the Platformatic API server."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can jump down to ",(0,r.jsx)(t.a,{href:"#next-steps",children:"Next steps"})," or read on to learn more about\nthe project files that the wizard has created for you."]}),"\n",(0,r.jsx)(t.h4,{id:"check-the-database-schema",children:"Check the database schema"}),"\n",(0,r.jsxs)(t.p,{children:["In your project directory (",(0,r.jsx)(t.code,{children:"quick-start"}),"), open the ",(0,r.jsx)(t.code,{children:"migrations"})," directory that can store your database migration files that will contain both the ",(0,r.jsx)(t.code,{children:"001.do.sql"})," and ",(0,r.jsx)(t.code,{children:"001.undo.sql"})," files. The ",(0,r.jsx)(t.code,{children:"001.do.sql"})," file contains the SQL statements to create the database objects, while the ",(0,r.jsx)(t.code,{children:"001.undo.sql"})," file contains the SQL statements to drop them."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",metastring:'title="migrations/001.do.sql"',children:"CREATE TABLE IF NOT EXISTS movies (\n  id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note that this migration has been already applied by Platformatic creator."}),"\n",(0,r.jsx)(t.h4,{id:"check-your-api-configuration",children:"Check your API configuration"}),"\n",(0,r.jsxs)(t.p,{children:["In your project directory, check the Platformatic configuration file named\n",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"platformatic.db.json"})})," and the environment file named ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:".env"})}),":"]}),"\n",(0,r.jsx)(t.p,{children:"The created configuration tells Platformatic to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Run an API server on ",(0,r.jsx)(t.code,{children:"http://127.0.0.1:3042/"})]}),"\n",(0,r.jsxs)(t.li,{children:["Connect to an SQLite database stored in a file named ",(0,r.jsx)(t.code,{children:"db.sqlite"})]}),"\n",(0,r.jsxs)(t.li,{children:["Look for database migration files in the ",(0,r.jsx)(t.code,{children:"migrations"})," directory"]}),"\n",(0,r.jsxs)(t.li,{children:["Load the plugin file named ",(0,r.jsx)(t.code,{children:"plugin.js"})," and automatically generate types"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/docs/next/reference/db/configuration",children:"Configuration reference"})," explains all of the\nsupported configuration options."]})}),"\n",(0,r.jsx)(t.h3,{id:"manual-setup",children:"Manual setup"}),"\n",(0,r.jsx)(t.p,{children:"Create a directory for your new API project:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"mkdir quick-start\n\ncd quick-start\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then create a ",(0,r.jsx)(t.code,{children:"package.json"})," file and install the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/platformatic",children:"platformatic"}),"\nCLI as a project dependency:"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"package-manager",children:[(0,r.jsx)(s.Z,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm init --yes\n\nnpm install platformatic\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn init --yes\n\nyarn add platformatic\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm init\n\npnpm add platformatic\n"})})})]}),"\n",(0,r.jsx)(t.h4,{id:"add-a-database-schema",children:"Add a database schema"}),"\n",(0,r.jsxs)(t.p,{children:["In your project directory (",(0,r.jsx)(t.code,{children:"quick-start"}),"), create a file for your sqlite3 database and also, a ",(0,r.jsx)(t.code,{children:"migrations"})," directory to\nstore your database migration files:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"touch db.sqlite\n\nmkdir migrations\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then create a new migration file named ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"001.do.sql"})})," in the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"migrations"})}),"\ndirectory."]}),"\n",(0,r.jsx)(t.p,{children:"Copy and paste this SQL query into the migration file:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",metastring:'title="migrations/001.do.sql"',children:"CREATE TABLE movies (\n  id INTEGER PRIMARY KEY,\n  title VARCHAR(255) NOT NULL\n);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When it's run by Platformatic, this query will create a new database table\nnamed ",(0,r.jsx)(t.code,{children:"movies"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can check syntax for SQL queries on the ",(0,r.jsx)(t.a,{href:"https://database.guide/sql-reference-for-beginners/",children:"Database.Guide SQL Reference"}),"."]})}),"\n",(0,r.jsx)(t.h4,{id:"configure-your-api",children:"Configure your API"}),"\n",(0,r.jsxs)(t.p,{children:["In your project directory, create a new Platformatic configuration file named\n",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"platformatic.db.json"})}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Copy and paste in this configuration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": "3042"\n  },\n  "db": {\n    "connectionString": "sqlite://./db.sqlite"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "autoApply": "true"\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"This configuration tells Platformatic to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Run an API server on ",(0,r.jsx)(t.code,{children:"http://127.0.0.1:3042/"})]}),"\n",(0,r.jsxs)(t.li,{children:["Connect to an SQLite database stored in a file named ",(0,r.jsx)(t.code,{children:"db.sqlite"})]}),"\n",(0,r.jsxs)(t.li,{children:["Look for, and apply the database migrations specified in the ",(0,r.jsx)(t.code,{children:"migrations"})," directory"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/docs/next/reference/db/configuration",children:"Configuration reference"})," explains all of the\nsupported configuration options."]})}),"\n",(0,r.jsx)(t.h4,{id:"start-your-api-server-1",children:"Start your API server"}),"\n",(0,r.jsx)(t.p,{children:"In your project directory, use the Platformatic CLI to start your API server:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx platformatic db start\n"})}),"\n",(0,r.jsx)(t.p,{children:"This will:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Automatically map your SQL database to REST and GraphQL API interfaces."}),"\n",(0,r.jsx)(t.li,{children:"Start the Platformatic API server."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Your Platformatic API is now up and running! \ud83c\udf1f"}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(t.h3,{id:"use-the-rest-api-interface",children:"Use the REST API interface"}),"\n",(0,r.jsx)(t.p,{children:"You can use cURL to make requests to the REST interface of your API, for example:"}),"\n",(0,r.jsx)(t.h4,{id:"create-a-new-movie",children:"Create a new movie"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n  -d "{ \\"title\\": \\"Hello Platformatic DB\\" }" \\\n\thttp://localhost:3042/movies\n'})}),"\n",(0,r.jsx)(t.p,{children:"You should receive a response from your API like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{"id":1,"title":"Hello Platformatic DB"}\n'})}),"\n",(0,r.jsx)(t.h4,{id:"get-all-movies",children:"Get all movies"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl http://localhost:3042/movies\n"})}),"\n",(0,r.jsx)(t.p,{children:"You should receive a response from your API like this, with an array\ncontaining all the movies in your database:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'[{"id":1,"title":"Hello Platformatic DB"}]\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["If you would like to know more about what routes are automatically available,\ntake a look at the ",(0,r.jsx)(t.a,{href:"/docs/next/reference/sql-openapi/introduction",children:"REST API reference"}),"\nfor an overview of the REST interface that the generated API provides."]})}),"\n",(0,r.jsx)(t.h4,{id:"swagger-openapi-documentation",children:"Swagger OpenAPI documentation"}),"\n",(0,r.jsxs)(t.p,{children:["You can explore the OpenAPI documentation for your REST API in the Swagger UI at\n",(0,r.jsx)(t.a,{href:"http://localhost:3042/documentation",children:"http://localhost:3042/documentation"})]}),"\n",(0,r.jsx)(t.h3,{id:"use-the-graphql-api-interface",children:"Use the GraphQL API interface"}),"\n",(0,r.jsxs)(t.p,{children:["Open ",(0,r.jsx)(t.a,{href:"http://localhost:3042/graphiql",children:"http://localhost:3042/graphiql"})," in your\nweb browser to explore the GraphQL interface of your API."]}),"\n",(0,r.jsx)(t.p,{children:"Try out this GraphQL query to retrieve all movies from your API:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"query {\n  movies {\n    id\n    title\n  }\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Learn more about your API's GraphQL interface in the\n",(0,r.jsx)(t.a,{href:"/docs/next/reference/sql-graphql/introduction",children:"GraphQL API reference"}),"."]})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:a}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,j.Z)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);