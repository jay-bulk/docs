"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[53257],{44929:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=i(85893),s=i(11151);const t={},r="Integrate Prisma with Platformatic DB",o={id:"guides/prisma",title:"Integrate Prisma with Platformatic DB",description:"Prisma is an open-source ORM for Node.js and TypeScript. It is used as an alternative to writing SQL, or using another database access tool such as SQL query builders (like knex.js) or ORMs (like TypeORM and Sequelize). Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB.",source:"@site/versioned_docs/version-1.15.1/guides/prisma.md",sourceDirName:"guides",slug:"/guides/prisma",permalink:"/docs/1.15.1/guides/prisma",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.1/guides/prisma.md",tags:[],version:"1.15.1",frontMatter:{},sidebar:"docs",previous:{title:"Using Environment Variables with Platformatic",permalink:"/docs/1.15.1/guides/environment-variables"},next:{title:"Generate Front-end Code to Consume Platformatic REST API",permalink:"/docs/1.15.1/guides/generate-frontend-code-to-consume-platformatic-rest-api"}},d={},l=[{value:"How Prisma can improve your workflow with Platformatic DB",id:"how-prisma-can-improve-your-workflow-with-platformatic-db",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Prisma",id:"setup-prisma",level:2},{value:"Adding Prisma to an existing project",id:"adding-prisma-to-an-existing-project",level:2},{value:"Adding Prisma to a new project",id:"adding-prisma-to-a-new-project",level:2},{value:"Evolving your database schema",id:"evolving-your-database-schema",level:3},{value:"Using Prisma Client in your plugins",id:"using-prisma-client-in-your-plugins",level:2},{value:"Workarounds",id:"workarounds",level:2},{value:"Using Prisma with SQLite",id:"using-prisma-with-sqlite",level:3},{value:"Foreign keys, field, and table names naming conventions",id:"foreign-keys-field-and-table-names-naming-conventions",level:3},{value:"Learn more",id:"learn-more",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"integrate-prisma-with-platformatic-db",children:"Integrate Prisma with Platformatic DB"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.prisma.io/",children:"Prisma"})," is an open-source ORM for Node.js and TypeScript. It is used as an alternative to writing SQL, or using another database access tool such as SQL query builders (like ",(0,a.jsx)(n.a,{href:"https://knexjs.org/",children:"knex.js"}),") or ORMs (like ",(0,a.jsx)(n.a,{href:"https://typeorm.io/",children:"TypeORM"})," and ",(0,a.jsx)(n.a,{href:"https://sequelize.org/",children:"Sequelize"}),"). Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB."]}),"\n",(0,a.jsxs)(n.p,{children:["Prisma can be used with JavaScript or TypeScript, and provides a level to type-safety that goes beyond the guarantees made by other ORMs in the TypeScript ecosystem. You can find an in-depth comparison of Prisma against other ORMs ",(0,a.jsx)(n.a,{href:"https://www.prisma.io/docs/concepts/more/comparisons",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to get a quick overview of how Prisma works, you can follow the ",(0,a.jsx)(n.a,{href:"https://www.prisma.io/docs/getting-started/quickstart",children:"Quickstart"})," or read the ",(0,a.jsx)(n.a,{href:"https://www.prisma.io/docs/understand-prisma/introduction",children:"Introduction"})," in the Prisma documentation."]}),"\n",(0,a.jsx)(n.h2,{id:"how-prisma-can-improve-your-workflow-with-platformatic-db",children:"How Prisma can improve your workflow with Platformatic DB"}),"\n",(0,a.jsx)(n.p,{children:"While Platformatic speeds up development of your REST and GraphQL APIs, Prisma can complement the workflow in several ways:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Provides an intuitive data modeling language"}),"\n",(0,a.jsx)(n.li,{children:"Provides auto-generated and customizable SQL migrations"}),"\n",(0,a.jsx)(n.li,{children:"Provides type-safety and auto-completion for your database queries"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can learn more about why Prisma and Platformatic are a great match ",(0,a.jsx)(n.a,{href:"https://dev.to/prisma/why-prisma-and-platformatic-are-a-great-match-2dkl",children:"this article"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"To follow along with this guide, you will need to have the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," >= v18.8.0 or >= v20.6.0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://docs.npmjs.com/cli/",children:"npm"})," v7 or later"]}),"\n",(0,a.jsxs)(n.li,{children:["A code editor, for example ",(0,a.jsx)(n.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})]}),"\n",(0,a.jsx)(n.li,{children:"A Platformatic DB project"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"setup-prisma",children:"Setup Prisma"}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.a,{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli",children:"Prisma CLI"})," and the ",(0,a.jsx)(n.a,{href:"https://github.com/ruheni/db-diff",children:(0,a.jsx)(n.code,{children:"db-diff"})})," development dependencies in your project:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev prisma @ruheni/db-diff\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, initialize Prisma in your project"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx prisma init\n"})}),"\n",(0,a.jsx)(n.p,{children:"This command does the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Creates a new directory called ",(0,a.jsx)(n.code,{children:"prisma"})," which contains a file called ",(0,a.jsx)(n.code,{children:"schema.prisma"}),". This file defines your database connection and the Prisma Client generator."]}),"\n",(0,a.jsxs)(n.li,{children:["Creates a ",(0,a.jsx)(n.code,{children:".env"})," file at the root of your project if it doesn't exist. This defines your environment variables (used for your database connection)."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can specify your preferred database provider using the ",(0,a.jsx)(n.code,{children:"--datasource-provider"})," flag, followed by the name of the provider:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx prisma init --datasource-provider postgresql # or sqlite, mysql, sqlserver, cockroachdb\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Prisma uses the ",(0,a.jsx)(n.code,{children:"DATABASE_URL"})," environment variable to connect to your database to sync your database and Prisma schema. It also uses the variable to connect to your database to run your Prisma Client queries."]}),"\n",(0,a.jsxs)(n.p,{children:["If you're using PostgreSQL, MySQL, SQL Server, or CockroachDB, ensure that the ",(0,a.jsx)(n.code,{children:"DATABASE_URL"})," used by Prisma is the same as the one used by Platformatic DB project. If you're using SQLite, refer to the ",(0,a.jsx)(n.a,{href:"#using-prisma-with-sqlite",children:"Using Prisma with SQLite"})," section."]}),"\n",(0,a.jsxs)(n.p,{children:["If you have an existing project, refer to the ",(0,a.jsx)(n.a,{href:"#adding-prisma-to-an-existing-project",children:"Adding Prisma to an existing Platformatic DB project"})," section. If you're adding Prisma to a new project, refer to the ",(0,a.jsx)(n.a,{href:"#adding-prisma-to-a-new-project",children:"Adding Prisma to a new project"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"adding-prisma-to-an-existing-project",children:"Adding Prisma to an existing project"}),"\n",(0,a.jsx)(n.p,{children:"If you have an existing Platformatic DB project, you can introspect your database and generate the data model in your Prisma schema with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx prisma db pull\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The command will introspect your database and generate the ",(0,a.jsx)(n.a,{href:"https://www.prisma.io/docs/concepts/components/prisma-schema/data-model",children:"data model"})]}),"\n",(0,a.jsxs)(n.p,{children:["Next, add the ",(0,a.jsx)(n.code,{children:"@@ignore"})," attribute to the ",(0,a.jsx)(n.code,{children:"versions"})," model to exclude it from the Prisma Client API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"model versions {\n  version BigInt    @id\n  name    String?\n  md5     String?\n  run_at  DateTime? @db.Timestamptz(6)\n\n+  @@ignore\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To learn how you can evolve your database schema, you can jump to the ",(0,a.jsx)(n.a,{href:"#evolving-your-database-schema",children:"Evolving your database schema"})," section."]}),"\n",(0,a.jsx)(n.h2,{id:"adding-prisma-to-a-new-project",children:"Adding Prisma to a new project"}),"\n",(0,a.jsxs)(n.p,{children:["Define a ",(0,a.jsx)(n.code,{children:"Post"})," model with the following fields at the end of your ",(0,a.jsx)(n.code,{children:"schema.prisma"})," file:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",metastring:'title="prisma/schema.prisma"',children:'model Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n  createdAt DateTime @default(now())\n\n  @@map("posts")\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The snippet above defines a ",(0,a.jsx)(n.code,{children:"Post"})," model with the following fields and properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"id"}),": An auto-incrementing integer that will be the primary key for the model."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"title"}),": A non-nullable ",(0,a.jsx)(n.code,{children:"String"})," field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"content"}),": A nullable ",(0,a.jsx)(n.code,{children:"String"})," field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"published"}),": A ",(0,a.jsx)(n.code,{children:"Boolean"})," field with a default value of false."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"viewCount"}),": An ",(0,a.jsx)(n.code,{children:"Int"})," field with a default value of 0."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"createdAt"}),": A ",(0,a.jsx)(n.code,{children:"DateTime"})," field with a timestamp of when the value is created as its default value."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["By default, Prisma maps the model name and its format to the table name \u2014 which is also used im Prisma Client. Platformatic DB uses a snake casing and pluralized table names to map your table names to the generated API. The ",(0,a.jsx)(n.code,{children:"@@map()"})," attribute in the Prisma schema allows you to define the name and format of your table names to be used in your database. You can also use the ",(0,a.jsx)(n.code,{children:"@map()"})," attribute to define the format for field names to be used in your database. Refer to the ",(0,a.jsx)(n.a,{href:"#foreign-keys-and-table-names-naming-conventions",children:"Foreign keys and table names naming conventions"})," section to learn how you can automate formatting foreign keys and table names."]}),"\n",(0,a.jsx)(n.p,{children:"Next, run the following command to generate an up and down migration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx db-diff\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The previous command will generate both an ",(0,a.jsx)(n.code,{children:"up"})," and ",(0,a.jsx)(n.code,{children:"down"})," migration based on your schema. The generated migration is stored in your ",(0,a.jsx)(n.code,{children:"./migrations"})," directory. If you are currently using a different path to store the migration, you can provide the ",(0,a.jsx)(n.code,{children:"--migrations-dir"})," flag followed by the path."]}),"\n",(0,a.jsx)(n.p,{children:"You can then apply the generated migration using the Platformatic DB CLI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic db migrations apply\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Platformatic uses ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/postgrator",children:"Postgrator"})," to run migrations. Postgrator creates a table in the database called ",(0,a.jsx)(n.code,{children:"versions"})," to track the applied migrations. Since the ",(0,a.jsx)(n.code,{children:"versions"})," table is not yet captured in the Prisma schema, run the following command to introspect the database and populate it with the missing model:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"npx prisma db pull\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Introspecting the database to populate the model prevents including the ",(0,a.jsx)(n.code,{children:"versions"})," table in the generated down migrations."]}),"\n",(0,a.jsxs)(n.p,{children:["Your Prisma schema should now contain a ",(0,a.jsx)(n.code,{children:"versions"})," model that is similar to this one (it will vary depending on the database system you're using):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'model Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n  createdAt DateTime @default(now())\n\n  @@map("posts")\n}\n\n+model versions {\n+  version BigInt    @id\n+  name    String?\n+  md5     String?\n+  run_at  DateTime? @db.Timestamptz(6)\n+}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Add the ",(0,a.jsx)(n.code,{children:"@@ignore"})," attribute function to the model to exclude it from the Prisma Client API:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"model versions {\n  version BigInt    @id\n  name    String?\n  md5     String?\n  run_at  DateTime? @db.Timestamptz(6)\n\n+  @@ignore\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"evolving-your-database-schema",children:"Evolving your database schema"}),"\n",(0,a.jsx)(n.p,{children:"Update the data model in your Prisma schema by adding a model or a field:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'// based on the schema in the "Adding Prisma to a new project" section\n+model User {\n+  id    Int     @id @default(autoincrement())\n+  email String  @unique\n+  name  String?\n+  posts Post[]\n+\n+  @@map("users")\n+}\n\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n  title     String\n  content   String?\n  published Boolean  @default(false)\n  viewCount Int      @default(0)\n+  author    User?    @relation(fields: [authorId], references: [id])\n+  authorId  Int?     @map("author_id")\n\n  @@map("posts")\n}\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Next, use the ",(0,a.jsx)(n.code,{children:"@ruheni/db-diff"})," CLI tool to generate ",(0,a.jsx)(n.code,{children:"up"})," and ",(0,a.jsx)(n.code,{children:"down"})," migrations:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx db-diff\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This command will generate up and down migrations based off of your Prisma schema. If you are currently using a different path to store the migration, you can provide the ",(0,a.jsx)(n.code,{children:"--migrations-dir"})," flag followed by the path."]}),"\n",(0,a.jsx)(n.p,{children:"Next, apply the generated migration using the Platformatic CLI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic db migrations apply\n"})}),"\n",(0,a.jsx)(n.p,{children:"And you're done!"}),"\n",(0,a.jsx)(n.h2,{id:"using-prisma-client-in-your-plugins",children:"Using Prisma Client in your plugins"}),"\n",(0,a.jsxs)(n.p,{children:["Plugins allow you to add custom functionality to your REST and GraphQL API. Refer to the ",(0,a.jsx)(n.a,{href:"/docs/next/guides/add-custom-functionality/introduction",children:"Add Custom Functionality"})," to learn more how you can add custom functionality."]}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.p,{children:"Prisma Client usage with Platformatic is currently only supported in Node v18"})}),"\n",(0,a.jsx)(n.p,{children:"You can use Prisma Client to interact with your database in your plugin."}),"\n",(0,a.jsx)(n.p,{children:"To get started, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx prisma generate\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The above command installs the ",(0,a.jsx)(n.code,{children:"@prisma/client"})," in your project and generates a Prisma Client based off of your Prisma schema."]}),"\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.a,{href:"https://github.com/sabinadams/fastify-prisma",children:(0,a.jsx)(n.code,{children:"@sabinthedev/fastify-prisma"})})," fastify plugin. The plugin takes care of shutting down database connections and makes Prisma Client available as a Fastify plugin."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @sabinthedev/fastify-prisma\n"})}),"\n",(0,a.jsx)(n.p,{children:"Register the plugin and extend your REST API:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// 1.\nconst prismaPlugin = require(\"@sabinthedev/fastify-prisma\")\n\nmodule.exports = async (app) => {\n  app.log.info('plugin loaded')\n\n  // 2.\n  app.register(prismaPlugin)\n\n  /**\n   * Plugin logic\n   */\n    // 3.\n    app.put('/post/:id/views', async (req, reply) => {\n\n    const { id } = req.params\n\n    // 4.\n    const post = await app.prisma.post.update({\n      where: {\n        id: Number(id)\n      },\n      data: {\n        viewCount: {\n          increment: 1\n        }\n      }\n    })\n\n    // 5.\n    return reply.send(post)\n  })\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The snippet does the following:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Imports the plugin"}),"\n",(0,a.jsxs)(n.li,{children:["Registers the ",(0,a.jsx)(n.code,{children:"@sabinthedev/fastify-prisma"})]}),"\n",(0,a.jsx)(n.li,{children:"Defines the endpoint for incrementing the views of a post"}),"\n",(0,a.jsx)(n.li,{children:"Makes a query to the database on the Post model to increment a post's view count"}),"\n",(0,a.jsx)(n.li,{children:"Returns the updated post on success"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If you would like to extend your GraphQL API, extend the schema and define the corresponding resolver:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="plugin.js"',children:"// ./plugin.js\nconst prismaPlugin = require(\"@sabinthedev/fastify-prisma\")\n\nmodule.exports = async (app) => {\n  app.log.info('plugin loaded')\n\n  app.graphql.extendSchema(`\n    extend type Mutation {\n      incrementPostViewCount(id: ID): Post\n    }\n  `)\n\n  app.graphql.defineResolvers({\n    Mutation: {\n      incrementPostViewCount: async (_, { id }) => {\n        const post = await prisma.post.update({\n          where: {\n            id: Number(id)\n          },\n          data: {\n            viewCount: {\n              increment: 1\n            }\n          }\n        })\n\n        if (!post) throw new Error(`Post with id:${id} was not found`)\n        return post\n      }\n    }\n  })\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Start the server:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic db start\n"})}),"\n",(0,a.jsx)(n.p,{children:"The query should now be included in your GraphQL schema."}),"\n",(0,a.jsx)(n.p,{children:"You can also use the Prisma Client in your REST API endpoints."}),"\n",(0,a.jsx)(n.h2,{id:"workarounds",children:"Workarounds"}),"\n",(0,a.jsx)(n.h3,{id:"using-prisma-with-sqlite",children:"Using Prisma with SQLite"}),"\n",(0,a.jsx)(n.p,{children:"Currently, Prisma doesn't resolve the file path of a SQLite database the same way as Platformatic does."}),"\n",(0,a.jsxs)(n.p,{children:["If your database is at the root of the project, create a new environment variable that Prisma will use called ",(0,a.jsx)(n.code,{children:"PRISMA_DATABASE_URL"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# .env\nDATABASE_URL="sqlite://db.sqlite"\nPRISMA_DATABASE_URL="file:../db.sqlite"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Next, update the ",(0,a.jsx)(n.code,{children:"url"})," value in the ",(0,a.jsx)(n.code,{children:"datasource"})," block in your Prisma schema with the updated value:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-groovy",metastring:'title="prisma/schema.prisma"',children:'// ./prisma/schema.prisma\ndatasource db {\n  provider = "sqlite"\n  url      = env("PRISMA_DATABASE_URL")\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Running migrations should now work smoothly and the path will be resolved correctly."}),"\n",(0,a.jsx)(n.h3,{id:"foreign-keys-field-and-table-names-naming-conventions",children:"Foreign keys, field, and table names naming conventions"}),"\n",(0,a.jsxs)(n.p,{children:["Foreign key names should use underscores, e.g. ",(0,a.jsx)(n.code,{children:"author_id"}),", for Platformatic DB to correctly map relations. You can use the ",(0,a.jsx)(n.code,{children:'@map("")'})," attribute to define the names of your foreign keys and field names to be defined in the database."]}),"\n",(0,a.jsxs)(n.p,{children:["Table names should be mapped to use the naming convention expected by Platformatic DB e.g. ",(0,a.jsx)(n.code,{children:'@@map("recipes")'})," (the Prisma convention is Recipe, which corresponds with the model name)."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.a,{href:"https://github.com/iiian/prisma-case-format",children:(0,a.jsx)(n.code,{children:"prisma-case-format"})})," to enforce your own database conventions, i.e., pascal, camel, and snake casing."]}),"\n",(0,a.jsx)(n.h2,{id:"learn-more",children:"Learn more"}),"\n",(0,a.jsxs)(n.p,{children:["If you would like to learn more about Prisma, be sure to check out the ",(0,a.jsx)(n.a,{href:"https://www.prisma.io/docs",children:"Prisma docs"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var a=i(67294);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);