"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[19626,19239],{68690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(85893),o=n(11151),r=n(74866),i=n(85162);const s={},c=void 0,l={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"Run this command in your terminal to start the Platformatic creator wizard:",source:"@site/versioned_docs/version-1.15.1/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/1.15.1/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.1/getting-started/new-api-project-instructions.md",tags:[],version:"1.15.1",frontMatter:{}},d={},p=[];function u(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Run this command in your terminal to start the Platformatic creator wizard:"}),"\n",(0,a.jsxs)(r.Z,{groupId:"package-manager-create",children:[(0,a.jsx)(i.Z,{value:"npm",label:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic project. For this guide, select these options:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"- Which kind of project do you want to create?  => DB\n- Where would you like to create your project?  => quick-start\n- Do you want to create default migrations?     => Yes\n- Do you want to create a plugin?               => Yes\n- Do you want to use TypeScript?                => No\n- Do you want to install dependencies?          => Yes (this can take a while)\n- Do you want to apply the migrations?          => Yes\n- Do you want to generate types?                => Yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => No\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace?  => No\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once the wizard is complete, you'll have a Platformatic app project in the\nfolder ",(0,a.jsx)(t.code,{children:"quick-start"}),", with example migration files and a plugin script."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Make sure you run the npm/yarn/pnpm command ",(0,a.jsx)(t.code,{children:"install"})," command manually if you\ndon't ask the wizard to do it for you."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},87837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a=n(85893),o=n(11151),r=n(74866),i=n(85162),s=n(68690);const c={},l="Generate Front-end Code to Consume Platformatic REST API",d={id:"guides/generate-frontend-code-to-consume-platformatic-rest-api",title:"Generate Front-end Code to Consume Platformatic REST API",description:"By default, a Platformatic app exposes REST API that provide CRUD (Create, Read,",source:"@site/versioned_docs/version-1.15.1/guides/generate-frontend-code-to-consume-platformatic-rest-api.md",sourceDirName:"guides",slug:"/guides/generate-frontend-code-to-consume-platformatic-rest-api",permalink:"/docs/1.15.1/guides/generate-frontend-code-to-consume-platformatic-rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.1/guides/generate-frontend-code-to-consume-platformatic-rest-api.md",tags:[],version:"1.15.1",frontMatter:{},sidebar:"docs",previous:{title:"Integrate Prisma with Platformatic DB",permalink:"/docs/1.15.1/guides/prisma"},next:{title:"Migrating a Fastify app to Platformatic Service",permalink:"/docs/1.15.1/guides/migrating-fastify-app-to-platformatic-service"}},p={},u=[{value:"Create a new Platformatic app",id:"create-a-new-platformatic-app",level:2},{value:"Configure the new Platformatic app",id:"configure-the-new-platformatic-app",level:2},{value:"Create a new Front-end Application",id:"create-a-new-front-end-application",level:2},{value:"Generate the front-end code to consume the Platformatic app REST API",id:"generate-the-front-end-code-to-consume-the-platformatic-app-rest-api",level:2},{value:"React and Vue.js components that read, create, and update an entity",id:"react-and-vuejs-components-that-read-create-and-update-an-entity",level:2},{value:"Import the new component in your front-end application",id:"import-the-new-component-in-your-front-end-application",level:2},{value:"Have fun",id:"have-fun",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"generate-front-end-code-to-consume-platformatic-rest-api",children:"Generate Front-end Code to Consume Platformatic REST API"}),"\n",(0,a.jsxs)(t.p,{children:["By default, a Platformatic app exposes REST API that provide CRUD (Create, Read,\nUpdate, Delete) functionality for each entity (see the\n",(0,a.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/reference/sql-openapi/introduction",children:"Introduction to the REST API"}),"\ndocumentation for more information on the REST API)."]}),"\n",(0,a.jsx)(t.p,{children:"Platformatic CLI allows to auto-generate the front-end code to import in your\nfront-end application to consume the Platformatic REST API."}),"\n",(0,a.jsx)(t.p,{children:"This guide"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Explains how to create a new Platformatic app."}),"\n",(0,a.jsx)(t.li,{children:"Explains how to configure the new Platformatic app."}),"\n",(0,a.jsx)(t.li,{children:"Explains how to create a new React or Vue.js front-end application."}),"\n",(0,a.jsx)(t.li,{children:"Explains how to generate the front-end TypeScript code to consume the Platformatic app REST API."}),"\n",(0,a.jsx)(t.li,{children:"Provide some React and Vue.js components (either of them written in TypeScript) that read, create, and update an entity."}),"\n",(0,a.jsx)(t.li,{children:"Explains how to import the new component in your front-end application."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-new-platformatic-app",children:"Create a new Platformatic app"}),"\n",(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(t.h2,{id:"configure-the-new-platformatic-app",children:"Configure the new Platformatic app"}),"\n",(0,a.jsx)(t.p,{children:'documentation to create a new Platformatic app. Every Platformatic app uses the "Movie" demo entity and includes\nthe corresponding table, migrations, and REST API to create, read, update, and delete movies.'}),"\n",(0,a.jsx)(t.p,{children:"Once the new Platformatic app is ready:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Set up CORS in ",(0,a.jsx)(t.code,{children:"platformatic.db.json"})]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:'{\n  "$schema": "https://platformatic.dev/schemas/v0.24.0/db",\n  "server": {\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}",\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    },\n+   "cors": {\n+     "origin": {\n+       "regexp": "/*/"\n+     }\n+   }\n  },\n  ...\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You can find more details about the cors configuration ",(0,a.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/guides/generate-frontend-code-to-consume-platformatic-rest-api",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["launch Platformatic through ",(0,a.jsx)(t.code,{children:"npm start"}),".\nThen, the Platformatic app should be available at the ",(0,a.jsx)(t.code,{children:"http://127.0.0.1:3042/"})," URL."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-new-front-end-application",children:"Create a new Front-end Application"}),"\n",(0,a.jsxs)(t.p,{children:["Refer to the ",(0,a.jsx)(t.a,{href:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"Scaffolding Your First Vite Project"}),'\ndocumentation to create a new front-end application, and call it "rest-api-frontend".']}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Please note Vite is suggested only for practical reasons, but the bundler of choice does not make any difference."})}),"\n",(0,a.jsx)(t.p,{children:"If you are using npm 7+ you should run"}),"\n",(0,a.jsxs)(r.Z,{groupId:"import-new-component",children:[(0,a.jsx)(i.Z,{value:"react",label:"React",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm create vite@latest rest-api-frontend -- --template react-ts\n"})})}),(0,a.jsx)(i.Z,{value:"vue",label:"Vue.js",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm create vite@latest rest-api-frontend -- --template vue-ts\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"and then follow the Vite's instructions"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"Scaffolding project in /Users/noriste/Sites/temp/platformatic/rest-api-frontend...\n\nDone. Now run:\n\n  cd rest-api-frontend\n  npm install\n  npm run dev\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Once done, the front-end application is available at ",(0,a.jsx)(t.code,{children:"http://localhost:5174/"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"generate-the-front-end-code-to-consume-the-platformatic-app-rest-api",children:"Generate the front-end code to consume the Platformatic app REST API"}),"\n",(0,a.jsx)(t.p,{children:"Now that either the Platformatic app and the front-end app are running, go to the front-end codebase and run the Platformatic CLI"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd rest-api-frontend/src\nnpx platformatic client http://127.0.0.1:3042 --frontend --language ts\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Refer to the ",(0,a.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/reference/cli#frontend",children:"Platformatic CLI frontend command"}),"\ndocumentation to know about the available options."]}),"\n",(0,a.jsx)(t.p,{children:"The Platformatic CLI generates"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"api.d.ts"}),": A TypeScript module that includes all the OpenAPI-related types.\nHere is part of the generated code"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"interface GetMoviesRequest {\n  'limit'?: number;\n  'offset'?: number;\n  // ... etc.\n}\n\ninterface GetMoviesResponseOK {\n  'id'?: number;\n  'title': string;\n}\n\n\n// ... etc.\n\nexport interface Api {\n  setBaseUrl(baseUrl: string): void;\n  getMovies(req: GetMoviesRequest): Promise<Array<GetMoviesResponseOK>>;\n  createMovie(req: CreateMovieRequest): Promise<CreateMovieResponseOK>;\n  // ... etc.\n}\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"api.ts"}),": A TypeScript module that includes a typed function for every single OpenAPI endpoint.\nHere is part of the generated code"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import type { Api } from './api-types'\n\nlet baseUrl = ''\nexport function setBaseUrl(newUrl: string) { baseUrl = newUrl };\n\nexport const createMovie: Api['createMovie'] = async (request) => {\n  const response = await fetch(`${baseUrl}/movies/`, {\n    method:'post',\n    body: JSON.stringify(request),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n\n  if (!response.ok) {\n    throw new Error(await response.text())\n  }\n\n  return await response.json()\n}\n\n// etc.\n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can add a ",(0,a.jsx)(t.code,{children:"--name"})," option to the command line to provide a custom name for the generated files."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd rest-api-frontend/src\nnpx platformatic client http://127.0.0.1:3042 --frontend --name foobar --language ts\n"})}),"\n",(0,a.jsxs)(t.p,{children:["will generated ",(0,a.jsx)(t.code,{children:"foobar.ts"})," and ",(0,a.jsx)(t.code,{children:"foobar-types.d.ts"})]}),"\n",(0,a.jsx)(t.h2,{id:"react-and-vuejs-components-that-read-create-and-update-an-entity",children:"React and Vue.js components that read, create, and update an entity"}),"\n",(0,a.jsx)(t.p,{children:"You can copy/paste the following React or Vue.js components that import the code\nthe Platformatic CLI generated."}),"\n",(0,a.jsxs)(r.Z,{groupId:"import-new-component",children:[(0,a.jsxs)(i.Z,{value:"react",label:"React",children:[(0,a.jsxs)(t.p,{children:["Create a new file ",(0,a.jsx)(t.code,{children:"src/PlatformaticPlayground.tsx"})," and copy/paste the following code."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useEffect, useState } from 'react'\n\n// getMovies, createMovie, and updateMovie are all functions automatically generated by Platformatic\n// in the `api.ts` module.\nimport { getMovies, createMovie, updateMovie, setBaseUrl } from './api'\n\nsetBaseUrl('http://127.0.0.1:3042') // configure this according to your needs\n\nexport function PlatformaticPlayground() {\n  const [movies, setMovies] = useState<Awaited<ReturnType<typeof getMovies>>>([])\n  const [newMovie, setNewMovie] = useState<Awaited<ReturnType<typeof createMovie>>>()\n\n  async function onCreateMovie() {\n    const newMovie = await createMovie({ title: 'Harry Potter' })\n    setNewMovie(newMovie)\n  }\n\n  async function onUpdateMovie() {\n    if (!newMovie || !newMovie.id) return\n\n    const updatedMovie = await updateMovie({ id: newMovie.id, title: 'The Lord of the Rings' })\n    setNewMovie(updatedMovie)\n  }\n\n  useEffect(() => {\n    async function fetchMovies() {\n      const movies = await getMovies({})\n      setMovies(movies)\n    }\n\n    fetchMovies()\n  }, [])\n\n  return (\n    <>\n      <h2>Movies</h2>\n\n      {movies.length === 0 ? (\n        <div>No movies yet</div>\n      ) : (\n        <ul>\n          {movies.map((movie) => (\n            <li key={movie.id}>{movie.title}</li>\n          ))}\n        </ul>\n      )}\n\n      <button onClick={onCreateMovie}>Create movie</button>\n      <button onClick={onUpdateMovie}>Update movie</button>\n\n      {newMovie && <div>Title: {newMovie.title}</div>}\n    </>\n  )\n}\n"})})]}),(0,a.jsxs)(i.Z,{value:"vue",label:"Vue.js",children:[(0,a.jsxs)(t.p,{children:["Create a new file ",(0,a.jsx)(t.code,{children:"src/PlatformaticPlayground.vue"})," and copy/paste the following code."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-vue",children:'<script lang="ts" setup>\nimport { ref, onMounted } from \'vue\';\n\n// getMovies, createMovie, and updateMovie are all functions automatically generated by Platformatic\n// in the `api.ts` module.\nimport { getMovies, createMovie, updateMovie } from \'./api\'\n\nconst movies = ref<Awaited<ReturnType<typeof getMovies>>>([])\nconst newMovie = ref<Awaited<ReturnType<typeof createMovie>> | undefined>()\n\nasync function onCreateMovie() {\n  const newMovie = await createMovie({ title: \'Harry Potter\' })\n  newMovie.value = newMovie\n}\n\nasync function onUpdateMovie() {\n  if (!newMovie.value || !newMovie.value.id) return\n\n  const updatedMovie = await updateMovie({ id: newMovie.value.id, title: \'The Lord of the Rings\' })\n  newMovie.value = updatedMovie\n}\n\nonMounted(async () => {\n  const movies = await getMovies({})\n  movies.value = movies\n})\n<\/script>\n\n<template>\n  <h2>Movies</h2>\n\n  <div v-if="movies.length === 0">No movies yet</div>\n  <ul v-else>\n    <li v-for="movie in movies" :key="movie.id">\n      {{ movie.title }}\n    </li>\n  </ul>\n\n  <button @click="onCreateMovie">Create movie</button>\n  <button @click="onUpdateMovie">Update movie</button>\n\n  <div v-if="newMovie">{{ newMovie.title }}</div>\n</template>\n'})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"import-the-new-component-in-your-front-end-application",children:"Import the new component in your front-end application"}),"\n",(0,a.jsx)(t.p,{children:"You need to import and render the new component in the front-end application."}),"\n",(0,a.jsxs)(r.Z,{groupId:"import-new-component",children:[(0,a.jsxs)(i.Z,{value:"react",label:"React",children:[(0,a.jsx)(t.p,{children:"Change the App.tsx as follows"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:'import { useState } from \'react\'\nimport reactLogo from \'./assets/react.svg\'\nimport viteLogo from \'/vite.svg\'\nimport \'./App.css\'\n\n+import { PlatformaticPlayground } from \'./PlatformaticPlayground\'\n\nfunction App() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <>\n+     <PlatformaticPlayground />\n      <div>\n        <a href="https://vitejs.dev" target="_blank">\n          <img src={viteLogo} className="logo" alt="Vite logo" />\n        </a>\n        <a href="https://react.dev" target="_blank">\n          <img src={reactLogo} className="logo react" alt="React logo" />\n        </a>\n      </div>\n      <h1>Vite + React</h1>\n      <div className="card">\n        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>\n        <p>\n          Edit <code>src/App.tsx</code> and save to test HMR\n        </p>\n      </div>\n      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>\n    </>\n  )\n}\n\nexport default App\n'})})]}),(0,a.jsxs)(i.Z,{value:"vue",label:"Vue.js",children:[(0,a.jsx)(t.p,{children:"Change the App.vue as follows"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-diff",children:'<script setup lang="ts">\nimport HelloWorld from \'./components/HelloWorld.vue\'\n\n+import PlatformaticPlayground from \'./PlatformaticPlayground.vue\'\n<\/script>\n\n<template>\n+ <PlatformaticPlayground />\n  <div>\n    <a href="https://vitejs.dev" target="_blank">\n      <img src="/vite.svg" class="logo" alt="Vite logo" />\n    </a>\n    <a href="https://vuejs.org/" target="_blank">\n      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />\n    </a>\n  </div>\n  <HelloWorld msg="Vite + Vue" />\n</template>\n\n<style scoped>\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n</style>\n'})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"have-fun",children:"Have fun"}),"\n",(0,a.jsx)(t.p,{children:"Art the top of the front-end application the new component requests the movies to the Platformatic app and list them."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Platformatic frontend guide: listing the movies",src:n(87506).Z+"",width:"780",height:"388"})}),"\n",(0,a.jsx)(t.p,{children:'Click on "Create movie" to create a new movie called "Harry Potter".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Platformatic frontend guide: creating a movie",src:n(97992).Z+"",width:"780",height:"388"})}),"\n",(0,a.jsx)(t.p,{children:'Click on "Update movie" to rename "Harry Potter" into "Lord of the Rings".'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Platformatic frontend guide: editing a movie",src:n(1115).Z+"",width:"780",height:"388"})}),"\n",(0,a.jsx)(t.p,{children:'Reload the front-end application to see the new "Lord of the Rings" movie listed.'}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Platformatic frontend guide: listing the movies",src:n(12514).Z+"",width:"780",height:"388"}),"\n."]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(36905);const o={tabItem:"tabItem_Ymn6"};var r=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(67294),o=n(36905),r=n(12466),i=n(16550),s=n(20469),c=n(91980),l=n(67392),d=n(50012);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,p]=m({queryString:n,groupId:o}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=l??f;return h({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),v(e)}),[p,v,r]),tabValues:r}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=s[n].value;o!==a&&(l(t),i(o))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:p,onClick:d,...r,className:(0,o.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(w,{...e,...t})]})}function b(e){const t=(0,v.Z)();return(0,j.jsx)(y,{...e,children:p(e.children)},String(t))}},87506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-1-f022d8dda7cf260804f2993653ef2672.jpg"},97992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-2-7063f363ce4395cfcbe7bfc7b14f27aa.jpg"},1115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-3-bd3cbacdf584cab7377be119f5986669.jpg"},12514:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-screenshot-4-e22c1f77cabb7e952ff8ea437349da4c.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);