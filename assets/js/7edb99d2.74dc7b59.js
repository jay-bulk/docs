"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[89525],{23040:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(85893),r=i(11151);const l={},t="Configuration",c={id:"reference/db/configuration",title:"Configuration",description:"Platformatic DB is configured with a configuration file. It supports the use",source:"@site/docs/reference/db/configuration.md",sourceDirName:"reference/db",slug:"/reference/db/configuration",permalink:"/docs/next/reference/db/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/platformatic/edit/main/docs/reference/db/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic DB",permalink:"/docs/next/reference/db/introduction"},next:{title:"Migrations",permalink:"/docs/next/reference/db/migrations"}},o={},d=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"<code>db</code>",id:"db",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>migrations</code>",id:"migrations",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>authorization</code>",id:"authorization",level:3},{value:"Example",id:"example",level:4},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"<code>watch</code>",id:"watch-1",level:3},{value:"<code>clients</code>",id:"clients",level:3},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3},{value:"PLT_ROOT",id:"plt_root",level:3},{value:"Sample Configuration",id:"sample-configuration",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Platformatic DB is configured with a configuration file. It supports the use\nof environment variables as setting values with ",(0,s.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,s.jsx)(n.p,{children:"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"platformatic.db.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"platformatic.db.json5"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"platformatic.db.yml"})," or ",(0,s.jsx)(n.code,{children:"platformatic.db.yaml"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"platformatic.db.tml"})," or ",(0,s.jsx)(n.code,{children:"platformatic.db.toml"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, a ",(0,s.jsxs)(n.a,{href:"/docs/next/reference/cli#db",children:[(0,s.jsx)(n.code,{children:"--config"})," option"]})," with a configuration\nfilepath can be passed to most ",(0,s.jsx)(n.code,{children:"platformatic db"})," CLI commands."]}),"\n",(0,s.jsx)(n.p,{children:"The configuration examples in this reference use JSON."}),"\n",(0,s.jsx)(n.h3,{id:"supported-formats",children:"Supported formats"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Extensions"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"JSON"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:".json"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"JSON5"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:".json5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"YAML"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:".yml"}),", ",(0,s.jsx)(n.code,{children:".yaml"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"TOML"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:".tml"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Comments are supported by the JSON5, YAML and TOML file formats."}),"\n",(0,s.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.p,{children:"Configuration settings are organised into the following groups:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#server",children:(0,s.jsx)(n.code,{children:"server"})})," ",(0,s.jsx)(n.strong,{children:"(required)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#db",children:(0,s.jsx)(n.code,{children:"db"})})," ",(0,s.jsx)(n.strong,{children:"(required)"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#metrics",children:(0,s.jsx)(n.code,{children:"metrics"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#migrations",children:(0,s.jsx)(n.code,{children:"migrations"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#plugins",children:(0,s.jsx)(n.code,{children:"plugins"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#authorization",children:(0,s.jsx)(n.code,{children:"authorization"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#telemetry",children:(0,s.jsx)(n.code,{children:"telemetry"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#watch",children:(0,s.jsx)(n.code,{children:"watch"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#clients",children:(0,s.jsx)(n.code,{children:"clients"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sensitive configuration settings, such as a database connection URL that contains\na password, should be set using ",(0,s.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"server",children:(0,s.jsx)(n.code,{children:"server"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#server",children:"Platformatic Service server"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"db",children:(0,s.jsx)(n.code,{children:"db"})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"required"})," object with the following settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"connectionString"})})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),") \u2014 Database connection URL."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Example: ",(0,s.jsx)(n.code,{children:"postgres://user:password@my-database:5432/db-name"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["** ",(0,s.jsx)(n.code,{children:"schema"}),"** (array of ",(0,s.jsx)(n.code,{children:"string"}),") - Currently supported only for postgres, schemas used to look for entities. If not provided, the default ",(0,s.jsx)(n.code,{children:"public"})," schema is used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "db": {\n    "connectionString": "(...)",\n    "schema": [\n      "schema1", "schema2"\n    ],\n    ...\n\n  },\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Platformatic DB supports MySQL, MariaDB, PostgreSQL and SQLite."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"graphql"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),", default: ",(0,s.jsx)(n.code,{children:"true"}),") \u2014 Controls the GraphQL API interface, with optional GraphiQL UI."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.p,{children:"Enables GraphQL support"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "graphql": true\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Enables GraphQL support with the ",(0,s.jsx)(n.code,{children:"enabled"})," option"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "graphql": {\n      ...\n      "enabled": true\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enables GraphQL support with GraphiQL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "graphql": {\n      "graphiql": true\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's possible to selectively ignore entities:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "graphql": {\n      "ignore": {\n        "categories": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's possible to selectively ignore fields:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "graphql": {\n      "ignore": {\n        "categories": {\n          "name": true\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's possible to add a custom GraphQL schema during the startup:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "graphql": {\n      "schemaPath": "path/to/schema.graphql"\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"openapi"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),", default: ",(0,s.jsx)(n.code,{children:"true"}),") \u2014 Enables OpenAPI REST support."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If value is an object, all ",(0,s.jsx)(n.a,{href:"https://swagger.io/specification/",children:"OpenAPI v3"})," allowed properties can be passed. Also a ",(0,s.jsx)(n.code,{children:"prefix"})," property can be passed to set the OpenAPI prefix."]}),"\n",(0,s.jsxs)(n.li,{children:["Platformatic DB uses ",(0,s.jsx)(n.a,{href:"https://github.com/fastify/fastify-swagger",children:(0,s.jsx)(n.code,{children:"@fastify/swagger"})})," under the hood to manage this configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.p,{children:"Enables OpenAPI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": true\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Enables OpenAPI using the ",(0,s.jsx)(n.code,{children:"enabled"})," option"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      ...\n      "enabled": true\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enables OpenAPI with prefix"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      "prefix": "/api"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enables OpenAPI with options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      "info": {\n        "title": "Platformatic DB",\n        "description": "Exposing a SQL database as REST"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can for example add the ",(0,s.jsx)(n.code,{children:"security"})," section, so that Swagger will allow you to add the authentication header to your requests.\nIn the following code snippet, we're adding a Bearer token in the form of a ",(0,s.jsx)(n.a,{href:"/docs/next/reference/db/authorization/strategies#json-web-token-jwt",children:"JWT"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      ...\n      "security": [{ "bearerAuth": [] }],\n      "components": {\n        "securitySchemes": {\n          "bearerAuth": {\n            "type": "http",\n            "scheme": "bearer",\n            "bearerFormat": "JWT"\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's possible to selectively ignore entities:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      "ignore": {\n        "categories": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's possible to selectively ignore fields:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      "ignore": {\n        "categories": {\n          "name": true\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["It's possible to explicitly identify tables for which you like to build an entity:\n",(0,s.jsx)(n.strong,{children:"Note"}),": all other tables will be ignored."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "openapi": {\n      "include": {\n        "categories": true\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"autoTimestamp"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),") - Generate timestamp automatically when inserting/updating records."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"poolSize"})})," (",(0,s.jsx)(n.code,{children:"number"}),", default: ",(0,s.jsx)(n.code,{children:"10"}),") \u2014 Maximum number of connections in the connection pool."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"idleTimeoutMilliseconds"})})," (",(0,s.jsx)(n.code,{children:"number"}),", default: ",(0,s.jsx)(n.code,{children:"30000"}),") - Max milliseconds a client can go unused before it is removed from the pool and destroyed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"queueTimeoutMilliseconds"})})," (",(0,s.jsx)(n.code,{children:"number"}),", default: ",(0,s.jsx)(n.code,{children:"60000"}),") - Number of milliseconds to wait for a connection from the connection pool before throwing a timeout error."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"acquireLockTimeoutMilliseconds"})})," (",(0,s.jsx)(n.code,{children:"number"}),", default: ",(0,s.jsx)(n.code,{children:"60000"}),") - Number of milliseconds to wait for a lock on a connection/transaction."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"limit"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - Set the default and max limit for pagination. Default is 10, max is 1000."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "limit": {\n      "default": 10,\n      "max": 1000\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ignore"})})," (",(0,s.jsx)(n.code,{children:"object"}),") \u2014 Key/value object that defines which database tables should not be mapped as API entities."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "ignore": {\n      "versions": true // "versions" table will be not mapped with GraphQL/REST APIs\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"include"})})," (",(0,s.jsx)(n.code,{children:"object"}),") \u2014 Key/value object that defines which entities should be exposed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "include": {\n      "version": true\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"events"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),", default: ",(0,s.jsx)(n.code,{children:"true"}),") \u2014 Controls the support for events published by the SQL mapping layer.\nIf enabled, this option add support for GraphQL Subscription over WebSocket. By default it uses an in-process message broker.\nIt's possible to configure it to use Redis instead."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsxs)(n.p,{children:["Enable events using the ",(0,s.jsx)(n.code,{children:"enabled"})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "events": {\n      ...\n      "enabled": true\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "events": {\n      "connectionString": "redis://:password@redishost.com:6380/"\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"schemalock"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),", default: ",(0,s.jsx)(n.code,{children:"false"}),") \u2014 Controls the caching of the database schema on disk.\nIf set to ",(0,s.jsx)(n.code,{children:"true"})," the database schema metadata is stored inside a ",(0,s.jsx)(n.code,{children:"schema.lock"})," file.\nIt's also possible to configure the location of that file by specifying a path, like so:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    ...\n    "schemalock": {\n      "path": "./dbmetadata"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Starting Platformatic DB or running a migration will automatically create the schemalock file."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"metrics",children:(0,s.jsx)(n.code,{children:"metrics"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#metrics",children:"Platformatic Service metrics"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"migrations",children:(0,s.jsx)(n.code,{children:"migrations"})}),"\n",(0,s.jsxs)(n.p,{children:["Configures ",(0,s.jsx)(n.a,{href:"https://github.com/rickbergfalk/postgrator",children:"Postgrator"})," to run migrations against the database."]}),"\n",(0,s.jsx)(n.p,{children:"An optional object with the following settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dir"})})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),"): Relative path to the migrations directory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"autoApply"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),", default: ",(0,s.jsx)(n.code,{children:"false"}),"): Automatically apply migrations when Platformatic DB server starts."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"plugins",children:(0,s.jsx)(n.code,{children:"plugins"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#plugins",children:"Platformatic Service plugins"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"watch",children:(0,s.jsx)(n.code,{children:"watch"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#watch",children:"Platformatic Service watch"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"authorization",children:(0,s.jsx)(n.code,{children:"authorization"})}),"\n",(0,s.jsx)(n.p,{children:"An optional object with the following settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"adminSecret"})," (",(0,s.jsx)(n.code,{children:"string"}),"): A secret that should be sent in an\n",(0,s.jsx)(n.code,{children:"x-platformatic-admin-secret"})," HTTP header when performing GraphQL/REST API\ncalls. Use an ",(0,s.jsx)(n.a,{href:"#environment-variable-placeholders",children:"environment variable placeholder"}),"\nto securely provide the value for this setting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"roleKey"})," (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"X-PLATFORMATIC-ROLE"}),"): The name of the key in user\nmetadata that is used to store the user's roles. See ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/user-roles-metadata#role-configuration",children:"Role configuration"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"anonymousRole"})," (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"anonymous"}),"): The name of the anonymous role. See ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/user-roles-metadata#role-configuration",children:"Role configuration"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwt"})," (",(0,s.jsx)(n.code,{children:"object"}),"): Configuration for the ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/strategies#json-web-token-jwt",children:"JWT authorization strategy"}),".\nAny option accepted by ",(0,s.jsx)(n.a,{href:"https://github.com/fastify/fastify-jwt",children:(0,s.jsx)(n.code,{children:"@fastify/jwt"})}),"\ncan be passed in this object.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"secret"})," (required, ",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"object"}),"): The secret key that the JWT was signed with.\nSee the ",(0,s.jsxs)(n.a,{href:"https://github.com/fastify/fastify-jwt#secret-required",children:[(0,s.jsx)(n.code,{children:"@fastify/jwt"})," documentation"]}),"\nfor accepted string and object values. Use an ",(0,s.jsx)(n.a,{href:"#environment-variable-placeholders",children:"environment variable placeholder"}),"\nto securely provide the value for this setting."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwks"})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),"): Configure authorization with JSON Web Key Sets (JWKS). See the ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/strategies#json-web-key-sets-jwks",children:"JWKS documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"namespace"})," (",(0,s.jsx)(n.code,{children:"string"}),"): Configure a ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/strategies#jwt-custom-claim-namespace",children:"JWT Custom Claim Namespace"}),"\nto avoid name collisions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"webhook"})," (",(0,s.jsx)(n.code,{children:"object"}),"): Configuration for the ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/strategies#webhook",children:"Webhook authorization strategy"}),".","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"})," (required, ",(0,s.jsx)(n.code,{children:"string"}),"): Webhook URL that Platformatic DB will make a\nPOST request to."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rules"})," (",(0,s.jsx)(n.code,{children:"array"}),"): Authorization rules that describe the CRUD actions that\nusers are allowed to perform against entities. See ",(0,s.jsx)(n.a,{href:"/docs/reference/db/authorization/rules",children:"Rules"}),"\ndocumentation."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If an ",(0,s.jsx)(n.code,{children:"authorization"})," object is present, but no rules are specified, no CRUD\noperations are allowed unless ",(0,s.jsx)(n.code,{children:"adminSecret"})," is passed."]})}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "authorization": {\n    "jwt": {\n      "secret": "{PLT_AUTHORIZATION_JWT_SECRET}"\n    },\n    "rules": [\n       ...\n    ]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"telemetry",children:(0,s.jsx)(n.code,{children:"telemetry"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#telemetry",children:"Platformatic Service telemetry"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"watch-1",children:(0,s.jsx)(n.code,{children:"watch"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#watch",children:"Platformatic Service watch"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"clients",children:(0,s.jsx)(n.code,{children:"clients"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#clients",children:"Platformatic Service clients"})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"environment-variable-placeholders",children:"Environment variable placeholders"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#environment-variable-placeholders",children:"Environment variable placeholders"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"setting-environment-variables",children:"Setting environment variables"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#setting-environment-variables",children:"Setting environment variables"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"allowed-placeholder-names",children:"Allowed placeholder names"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/next/reference/service/configuration#allowed-placeholder-names",children:"Allowed placeholder names"})," for more details."]}),"\n",(0,s.jsx)(n.h3,{id:"plt_root",children:"PLT_ROOT"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"{PLT_ROOT}"})," placeholder is automatically set to the directory containing the configuration file, so it can be used to configure relative paths."]}),"\n",(0,s.jsx)(n.h2,{id:"sample-configuration",children:"Sample Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["This is a bare minimum configuration for Platformatic DB. Uses a local ",(0,s.jsx)(n.code,{children:"./db.sqlite"})," SQLite database, with OpenAPI and GraphQL support."]}),"\n",(0,s.jsxs)(n.p,{children:["Server will listen to ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:3042"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": "3042"\n  },\n  "db": {\n    "connectionString": "sqlite://./db.sqlite",\n    "graphiql": true,\n    "openapi": true,\n    "graphql": true\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(67294);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);