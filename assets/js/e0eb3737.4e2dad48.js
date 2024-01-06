"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[47945],{32126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(85893),i=t(11151);const s={},r="Programmatic API",o={id:"reference/service/programmatic",title:"Programmatic API",description:"In many cases it's useful to start Platformatic Service using an API instead of",source:"@site/versioned_docs/version-1.16.0/reference/service/programmatic.md",sourceDirName:"reference/service",slug:"/reference/service/programmatic",permalink:"/docs/reference/service/programmatic",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.16.0/reference/service/programmatic.md",tags:[],version:"1.16.0",frontMatter:{},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/reference/service/plugin"},next:{title:"Packages",permalink:"/docs/category/packages"}},c={},l=[{value:"Creating a reusable application on top of Platformatic Service",id:"creating-a-reusable-application-on-top-of-platformatic-service",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"Usage with custom configuration",id:"usage-with-custom-configuration",level:3},{value:"Writing a custom Stackable with TypeScript",id:"writing-a-custom-stackable-with-typescript",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"programmatic-api",children:"Programmatic API"}),"\n",(0,a.jsx)(n.p,{children:"In many cases it's useful to start Platformatic Service using an API instead of\ncommand line, e.g. in tests we want to start and stop our server."}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"buildServer"})," function allows that:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { buildServer } from '@platformatic/service'\n\nconst app = await buildServer('path/to/platformatic.service.json')\n\nawait app.start()\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,a.jsx)(n.p,{children:"It is also possible to customize the configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { buildServer } from '@platformatic/service'\n\nconst app = await buildServer({\n  server: {\n    hostname: '127.0.0.1',\n    port: 0\n  }\n})\n\nawait app.start()\n\nconst res = await fetch(app.url)\nconsole.log(await res.json())\n\n// do something\n\nawait app.close()\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-reusable-application-on-top-of-platformatic-service",children:"Creating a reusable application on top of Platformatic Service"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/reference/db/introduction",children:"Platformatic DB"})," is built on top of Platformatic Serivce.\nIf you want to build a similar kind of tool, follow this example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { buildServer, schema } from '@platformatic/service'\n\nasync function myPlugin (app, opts) {\n  // app.platformatic.configManager contains an instance of the ConfigManager\n  console.log(app.platformatic.configManager.current)\n\n  await app.register(platformaticService, opts)\n}\n\n// break Fastify encapsulation\nmyPlugin[Symbol.for('skip-override')] = true\nmyPlugin.configType = 'myPlugin'\n\n// This is the schema for this reusable application configuration file,\n// customize at will but retain the base properties of the schema from\n// @platformatic/service\nmyPlugin.schema = schema\n\n// The configuration of the ConfigManager\nmyPlugin.configManagerConfig = {\n  schema: foo.schema,\n  envWhitelist: ['PORT', 'HOSTNAME'],\n  allowToWatch: ['.env'],\n  schemaOptions: {\n    useDefaults: true,\n    coerceTypes: true,\n    allErrors: true,\n    strict: false\n  },\n  async transformConfig () {\n    console.log(this.current) // this is the current config\n\n    // In this method you can alter the configuration before the application\n    // is started. It's useful to apply some defaults that cannot be derived\n    // inside the schema, such as resolving paths.\n  }\n}\n\n\nconst server = await buildServer('path/to/config.json', myPlugin)\n\nawait server.start()\n\nconst res = await fetch(server.listeningOrigin)\nconsole.log(await res.json())\n\n// do something\n\nawait service.close()\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to provide functionality ",(0,a.jsx)(n.em,{children:"before"})," the plugins are loaded, but after metrics and telemetry are in place,\nyou can use the ",(0,a.jsx)(n.code,{children:"beforePlugins"})," option:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"async function myPlugin (app, opts) {\n  await app.register(platformaticService, {\n    ...opts,\n    beforePlugins: [async function (app) {\n      app.decorate('myvalue', 42)\n    }]\n  })\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"typescript-support",children:"TypeScript support"}),"\n",(0,a.jsxs)(n.p,{children:["In order for this module to work on a TypeScript setup (outside of an application created with ",(0,a.jsx)(n.code,{children:"create-platformatic"}),"),\nyou have to add the following to your types:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { FastifyInstance } from 'fastify'\nimport { PlatformaticApp, PlatformaticServiceConfig } from '@platformatic/service'\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    platformatic: PlatformaticApp<PlatformaticServiceConfig>\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, you can use it:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"/// <reference path=\"./global.d.ts\" />\nimport { FastifyInstance } from 'fastify'\n\nexport default async function (app: FastifyInstance) {\n  app.get('/', async () => {\n    return app.platformatic.config\n  })\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can always generate a file called ",(0,a.jsx)(n.code,{children:"global.d.ts"})," with the above content via the ",(0,a.jsx)(n.code,{children:"platformatic service types"})," command."]}),"\n",(0,a.jsx)(n.h3,{id:"usage-with-custom-configuration",children:"Usage with custom configuration"}),"\n",(0,a.jsxs)(n.p,{children:["If you are creating a reusable application on top of Platformatic Service, you would need to create the types for your schema,\nusing ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/json-schema-to-typescript",children:"json-schema-to-typescript"})," in a ",(0,a.jsx)(n.code,{children:"./config.d.ts"})," file and\nuse it like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { FastifyInstance } from 'fastify'\nimport { PlatformaticApp } from '@platformatic/service'\nimport { YourApp } from './config'\n\ndeclare module 'fastify' {\n  interface FastifyInstance {\n    platformatic: PlatformaticApp<YourApp>\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that you can construct ",(0,a.jsx)(n.code,{children:"platformatic"})," like any other union types, adding other definitions."]}),"\n",(0,a.jsx)(n.h2,{id:"writing-a-custom-stackable-with-typescript",children:"Writing a custom Stackable with TypeScript"}),"\n",(0,a.jsxs)(n.p,{children:["Creating a reusable application with TypeScript requires a bit of setup.\nFirst, create a ",(0,a.jsx)(n.code,{children:"schema.ts"})," file that generates the JSON Schema for your your application. Like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { schema as serviceSchema } from '@platformatic/service'\nimport esMain from 'es-main'\n\nconst baseSchema = serviceSchema.schema\n\nexport const schema = structuredClone(baseSchema)\n\nschema.$id = 'https://raw.githubusercontent.com/platformatic/acme-base/main/schemas/1.json'\nschema.title = 'Acme Base'\n\n// Needed to specify the extended module \nschema.properties.extends = {\n  type: 'string'\n}\n\nschema.properties.dynamite = {\n  anyOf: [{\n    type: 'boolean'\n  }, {\n    type: 'string'\n  }],\n  description: 'Enable /dynamite route'\n}\n\ndelete schema.properties.plugins\n\nif (esMain(import.meta)) {\n  console.log(JSON.stringify(schema, null, 2))\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then generates the matching types with ",(0,a.jsx)(n.a,{href:"http://npm.im/json-schema-to-typescript",children:"json-schema-to-typescript"}),":"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"tsc && node dist/lib/schema.js > schemas/acme.json"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"json2ts < schemas/acme.json > src/lib/config.d.ts"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Finally, you can write the actual reusable application:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import fp from 'fastify-plugin'\nimport { platformaticService, buildServer as buildServiceServer, Stackable, PlatformaticServiceConfig } from '@platformatic/service'\nimport { schema } from './schema.js'\nimport { FastifyInstance } from 'fastify'\nimport type { ConfigManager } from '@platformatic/config'\nimport type { AcmeBase as AcmeBaseConfig } from './config.js'\n\nexport interface AcmeBaseMixin {\n  platformatic: {\n    configManager: ConfigManager<AcmeBaseConfig>,\n    config: AcmeBaseConfig\n  }\n}\n\nasync function isDirectory (path: string) {\n  try {\n    return (await lstat(path)).isDirectory()\n  } catch {\n    return false\n  }\n}\n\nfunction buildStackable () : Stackable<AcmeBaseConfig> {\n  async function acmeBase (_app: FastifyInstance, opts: object) {\n    // Needed to avoid declaration mergin and be compatibile with the\n    // Fastify types\n    const app = _app as FastifyInstance & AcmeBaseMixin\n\n    await app.register(platformaticService, opts)\n  }\n\n  // break Fastify encapsulation\n  fp(acmeBase)\n\n  acmeBase.configType = 'acmeBase'\n\n  // This is the schema for this reusable application configuration file,\n  // customize at will but retain the base properties of the schema from\n  // @platformatic/service\n  acmeBase.schema = schema\n\n  // The configuration of the ConfigManager\n  acmeBase.configManagerConfig = {\n    schema,\n    envWhitelist: ['PORT', 'HOSTNAME', 'WATCH'],\n    allowToWatch: ['.env'],\n    schemaOptions: {\n      useDefaults: true,\n      coerceTypes: true,\n      allErrors: true,\n      strict: false\n    },\n    async transformConfig (this: ConfigManager<AcmeBaseConfig & PlatformaticServiceConfig>) {\n      // Call the transformConfig method from the base stackable\n      platformaticService.configManagerConfig.transformConfig.call(this)\n\n      // In this method you can alter the configuration before the application\n      // is started. It's useful to apply some defaults that cannot be derived\n      // inside the schema, such as resolving paths.\n    }\n  }\n\n  return acmeBase\n}\n\nexport const acmeBase = buildStackable()\n\nexport default acmeBase\n\nexport async function buildServer (opts: object) {\n  return buildServiceServer(opts, acmeBase)\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);