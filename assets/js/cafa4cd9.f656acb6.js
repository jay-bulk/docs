"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[26133,71843],{96157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(85893),r=t(11151),i=t(74866),l=t(85162);const o={},s=void 0,c={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"Run this command in your terminal to start the Platformatic creator wizard:",source:"@site/versioned_docs/version-1.14.3/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/1.14.3/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.14.3/getting-started/new-api-project-instructions.md",tags:[],version:"1.14.3",frontMatter:{}},d={},u=[];function p(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Run this command in your terminal to start the Platformatic creator wizard:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"package-manager-create",children:[(0,a.jsx)(l.Z,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic project. For this guide, select these options:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"- Which kind of project do you want to create?  => DB\n- Where would you like to create your project?  => quick-start\n- Do you want to create default migrations?     => Yes\n- Do you want to create a plugin?               => Yes\n- Do you want to use TypeScript?                => No\n- Do you want to install dependencies?          => Yes (this can take a while)\n- Do you want to apply the migrations?          => Yes\n- Do you want to generate types?                => Yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => No\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace?  => No\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once the wizard is complete, you'll have a Platformatic app project in the\nfolder ",(0,a.jsx)(n.code,{children:"quick-start"}),", with example migration files and a plugin script."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Make sure you run the npm/yarn/pnpm command ",(0,a.jsx)(n.code,{children:"install"})," command manually if you\ndon't ask the wizard to do it for you."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},17826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(85893),r=t(11151),i=t(96157);const l={},o="Using Environment Variables with Platformatic",s={id:"guides/environment-variables",title:"Using Environment Variables with Platformatic",description:"Applications built with Platformatic loosely follows the twelve factor app methodology.",source:"@site/versioned_docs/version-1.14.3/guides/environment-variables.md",sourceDirName:"guides",slug:"/guides/environment-variables",permalink:"/docs/1.14.3/guides/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.14.3/guides/environment-variables.md",tags:[],version:"1.14.3",frontMatter:{},sidebar:"docs",previous:{title:"Debug Platformatic DB",permalink:"/docs/1.14.3/guides/debug-platformatic-db"},next:{title:"Integrate Prisma with Platformatic DB",permalink:"/docs/1.14.3/guides/prisma"}},c={},d=[{value:"Environment Variables replacement",id:"environment-variables-replacement",level:2},{value:"dotenv support",id:"dotenv-support",level:3},{value:"Allowed Environment Variables",id:"allowed-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3},{value:"Placeholder wildcard",id:"placeholder-wildcard",level:3},{value:"Adding a custom environment variable to a project",id:"adding-a-custom-environment-variable-to-a-project",level:2},{value:"Create a Platformatic DB App",id:"create-a-platformatic-db-app",level:3},{value:"Modify <code>platformatic.db.json</code>",id:"modify-platformaticdbjson",level:3},{value:"Decorate the Fastify instance",id:"decorate-the-fastify-instance",level:3},{value:"Use it inside a route",id:"use-it-inside-a-route",level:3},{value:"Add an environemnt variable",id:"add-an-environemnt-variable",level:3},{value:"Run your application and test the new route",id:"run-your-application-and-test-the-new-route",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"using-environment-variables-with-platformatic",children:"Using Environment Variables with Platformatic"}),"\n",(0,a.jsxs)(n.p,{children:["Applications built with Platformatic loosely follows ",(0,a.jsx)(n.a,{href:"https://12factor.net/",children:"the twelve factor app methodology"}),".\nThis guide will show how to make your application ",(0,a.jsx)(n.a,{href:"https://12factor.net/config",children:"configurable"}),", while\nkeeping your deployment environments as close as possible."]}),"\n",(0,a.jsx)(n.h2,{id:"environment-variables-replacement",children:"Environment Variables replacement"}),"\n",(0,a.jsx)(n.p,{children:"In any Platformatic configuration file, you can always interpolate an environment variable inside a value:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "db": {\n    "connectionString": "{DATABASE_URL}"\n  }\n  ...\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The replacement is done via ",(0,a.jsx)(n.a,{href:"http://npm.im/pupa",children:(0,a.jsx)(n.code,{children:"pupa"})}),", before the JSON file is parsed."]}),"\n",(0,a.jsx)(n.p,{children:"All Platformatic configuration files support Environment Variables replacement, i.e.\nenv variables are supported in Platformatic Service, Platformatic DB, Platformatic Composer, Platformatic Runtime."}),"\n",(0,a.jsx)(n.h3,{id:"dotenv-support",children:"dotenv support"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"http://npm.im/dotenv",children:(0,a.jsx)(n.code,{children:"dotenv"})})," is built in inside Platformatic, allowing you to create an envfile with\nall your environment variables, that is loaded automatically by Platformatic at startup.\nIf a ",(0,a.jsx)(n.code,{children:".env"})," file exists it will automatically be loaded by Platformatic using\n",(0,a.jsx)(n.a,{href:"https://github.com/motdotla/dotenv",children:(0,a.jsx)(n.code,{children:"dotenv"})}),". For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",metastring:'title=".env"',children:"DATABASE_URL=sqlite://./db.sqlite\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:".env"})," file must be located in the same folder as the Platformatic configuration\nfile or in the current working directory."]}),"\n",(0,a.jsx)(n.p,{children:"Environment variables can also be set directly on the command line, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"PLT_SERVER_LOGGER_LEVEL=debug npx platformatic start\n"})}),"\n",(0,a.jsx)(n.h3,{id:"allowed-environment-variables",children:"Allowed Environment Variables"}),"\n",(0,a.jsx)(n.p,{children:"All placeholders in a configuration must be available as an environment variable\nand must meet the allowed placeholder name rules."}),"\n",(0,a.jsx)(n.h3,{id:"allowed-placeholder-names",children:"Allowed placeholder names"}),"\n",(0,a.jsxs)(n.p,{children:["Only placeholder names prefixed with ",(0,a.jsx)(n.code,{children:"PLT_"}),", or that are in this allow list, will be\ndynamically replaced in the configuration file:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"PORT"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"DATABASE_URL"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This restriction is to avoid accidentally exposing system environment variables.\nAn error will be raised by Platformatic if it finds a configuration placeholder\nthat isn't allowed."}),"\n",(0,a.jsxs)(n.p,{children:["The default allow list can be extended by passing a ",(0,a.jsx)(n.code,{children:"--allow-env"})," CLI option with a\ncomma separated list of strings, for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic start --allow-env=HOST,SERVER_LOGGER_LEVEL\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"--allow-env"})," is passed as an option to the CLI, it will be merged with the\ndefault allow list."]}),"\n",(0,a.jsx)(n.h3,{id:"placeholder-wildcard",children:"Placeholder wildcard"}),"\n",(0,a.jsx)(n.p,{children:"You're also able to define a placeholder wildcard, with your own prefix, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx platformatic service start --allow-env=MY_NS_*\n# OR\nnpx platformatic start --allow-env=MY_NS_*\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will allow you to use placeholders like ",(0,a.jsx)(n.code,{children:"{MY_NS_MY_VAR}"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"adding-a-custom-environment-variable-to-a-project",children:"Adding a custom environment variable to a project"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-platformatic-db-app",children:"Create a Platformatic DB App"}),"\n",(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(n.p,{children:"This same tutorial applies to all other Platformatic tools."}),"\n",(0,a.jsxs)(n.h3,{id:"modify-platformaticdbjson",children:["Modify ",(0,a.jsx)(n.code,{children:"platformatic.db.json"})]}),"\n",(0,a.jsxs)(n.p,{children:["Add a ",(0,a.jsx)(n.code,{children:"greeting"})," option inside your ",(0,a.jsx)(n.code,{children:"plugins"})," configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [\n      {\n        "path": "./plugins",\n        "encapsulate": false,\n        "options": {\n          "greeting": "{PLT_GREETING}"\n        }\n      },\n      {\n        "path": "./routes"\n      }\n    ]\n  },\n  ...\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This new options will be available inside all the options passed to\nall plugins in the ",(0,a.jsx)(n.code,{children:"plugins/"})," folder."]}),"\n",(0,a.jsx)(n.h3,{id:"decorate-the-fastify-instance",children:"Decorate the Fastify instance"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new ",(0,a.jsx)(n.code,{children:"plugins/greeting.js"})," file, calling ",(0,a.jsx)(n.a,{href:"https://fastify.dev/docs/latest/Reference/Decorators/#decorators",children:"fastify.decorate()"}),"\nto expose some functionality to other plugins:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/// <reference path=\"../global.d.ts\" />\n'use strict'\n/** @param {import('fastify').FastifyInstance} fastify */\nmodule.exports = async function (fastify, opts) {\n  fastify.decorate('sayHello', sayHello)\n\n  function sayHello (name) {\n    return `${opts.greeting} ${name}`\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-it-inside-a-route",children:"Use it inside a route"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new ",(0,a.jsx)(n.code,{children:"routes/hello.js"})," file that uses the newly added functionality, like so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/// <reference path=\"../global.d.ts\" />\n'use strict'\n/** @param {import('fastify').FastifyInstance} fastify */\nmodule.exports = async function (fastify, opts) {\n  fastify.get('/hello', {\n    schema: {\n      querystring: {\n        type: 'object',\n        properties: {\n          name: { type: 'string' }\n        }\n      },\n      required: ['name']\n    }\n  }, async (request, reply) => {\n    return fastify.sayHello(request.query.name)\n  })\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"add-an-environemnt-variable",children:"Add an environemnt variable"}),"\n",(0,a.jsxs)(n.p,{children:["Edit your ",(0,a.jsx)(n.code,{children:".env"})," file and add:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"PLT_GREETING=Hello\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Don't forget to add a default value to your ",(0,a.jsx)(n.code,{children:".env.sample"}),", as\nthe ",(0,a.jsx)(n.code,{children:".env"})," file is not committed to the repository."]}),"\n",(0,a.jsx)(n.h3,{id:"run-your-application-and-test-the-new-route",children:"Run your application and test the new route"}),"\n",(0,a.jsxs)(n.p,{children:["Run your application with ",(0,a.jsx)(n.code,{children:"npm start"}),", and then test the new route with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl 'http://localhost:3042/hello?name=matteo'\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),i=t(12466),l=t(16550),o=t(20469),s=t(91980),c=t(67392),d=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:r}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??f;return h({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),r=o[t].value;r!==a&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function w(e){const n=(0,v.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(67294);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);