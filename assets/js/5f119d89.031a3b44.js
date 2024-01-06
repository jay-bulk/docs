"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[44886],{15733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(85893),a=n(11151);const s={},o="Platformatic Risk Engine",r={id:"platformatic-cloud/risk-engine",title:"Platformatic Risk Engine",description:"Platformatic Cloud leverages opentelemetry for collecting and sending telemetry data to the Platformatic Risk Engine automatically.",source:"@site/versioned_docs/version-1.16.0/platformatic-cloud/risk-engine.md",sourceDirName:"platformatic-cloud",slug:"/platformatic-cloud/risk-engine",permalink:"/docs/platformatic-cloud/risk-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.16.0/platformatic-cloud/risk-engine.md",tags:[],version:"1.16.0",frontMatter:{},sidebar:"docs",previous:{title:"Deploy a PostgreSQL database with Neon",permalink:"/docs/platformatic-cloud/deploy-database-neon"}},c={},h=[{value:"A new operation is added",id:"a-new-operation-is-added",level:4},{value:"An existing operation is changed, but this operation is not used by any other service",id:"an-existing-operation-is-changed-but-this-operation-is-not-used-by-any-other-service",level:4},{value:"An existing operation is changed, and this operation is used by other services",id:"an-existing-operation-is-changed-and-this-operation-is-used-by-other-services",level:4},{value:"Risk engine in Platformatic Cloud",id:"risk-engine-in-platformatic-cloud",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"platformatic-risk-engine",children:"Platformatic Risk Engine"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Cloud leverages opentelemetry for collecting and sending telemetry data to the Platformatic Risk Engine automatically.\nThis allows Platformatic Cloud to calculate the risk of a pull request being merged into your production environment based on the potential breaking changes in the application API."}),"\n",(0,i.jsx)(t.p,{children:"For example, if a pull request adds a new endpoint, it will not be considered a breaking change and will not increase the risk score. However, if a pull request changes the open API specification for an existing endpoint, it will be considered a breaking change and will increase the risk score."}),"\n",(0,i.jsxs)(t.p,{children:['Note that Platformatic does not uses "static" structural graphs for the risk calculation. Static data does not reflect the actual (and real) flow of calls, and therefore does not reflect the actual risk in front of changes. That means that if try to calculate a risk on a system where the telemetry data hasn\'t been collected, the risk is ',(0,i.jsx)(t.code,{children:"0"})," (the system is unused, so no actual risk in changing services). To obtain significative risk evaluations, a good amount of real-usage data of the system must have been collected."]}),"\n",(0,i.jsxs)(t.p,{children:["For more information about the theory behind the risk calculation, please read the ",(0,i.jsx)(t.a,{href:"https://arxiv.org/pdf/2309.06238.pdf",children:"Evaluating the Risk of Changes in a Microservices\nArchitecture"})," paper."]}),"\n",(0,i.jsx)(t.p,{children:"To fully understand what the risk engine does, we need to give some definitions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.strong,{children:"Service"})," is a set of Operations that are exposed by a single API. A Service is identified by a unique name."]}),"\n",(0,i.jsxs)(t.li,{children:["An ",(0,i.jsx)(t.strong,{children:"Operation"})," is what it's actually exposed by a service and called."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In the OpenAPI case, an operation is a combination of the ",(0,i.jsx)(t.code,{children:"path"})," and the ",(0,i.jsx)(t.code,{children:"method"})," of the API.\nIn the GraphQL case, an operation is the type of the graphQL request (e.g. ",(0,i.jsx)(t.code,{children:"query"})," or ",(0,i.jsx)(t.code,{children:"mutation"}),") and the name of the query."]}),"\n",(0,i.jsx)(t.p,{children:"Examples of operations exposed by OpenAPI and GraphQL services are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"GET /users"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"POST /users"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"QUERY movies"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"MUTATION deleteMovies"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'From the Risk Engine point-of-view, a call to a microservice architecture is a sequence of operations of different services ("paths").\nThe Risk Engine collects dynamically all the actually travelled "paths" of operations.\nWhen a change is created (usually in the form of a PR), it the Risk Engine can calculate the risk of the change using the data collected so far.'}),"\n",(0,i.jsx)(t.p,{children:"Consider these two peculiar cases:"}),"\n",(0,i.jsx)(t.h4,{id:"a-new-operation-is-added",children:"A new operation is added"}),"\n",(0,i.jsxs)(t.p,{children:["In this case, the risk engine will calculate the risk of the change as ",(0,i.jsx)(t.code,{children:"0"}),", because the new operation is not actually used by any other service, so it's impossible to break the system."]}),"\n",(0,i.jsx)(t.h4,{id:"an-existing-operation-is-changed-but-this-operation-is-not-used-by-any-other-service",children:"An existing operation is changed, but this operation is not used by any other service"}),"\n",(0,i.jsxs)(t.p,{children:["In this case, the risk engine will calculate the risk of the change again as ",(0,i.jsx)(t.code,{children:"0"}),", because the changed operation is not actually used by any other service."]}),"\n",(0,i.jsx)(t.h4,{id:"an-existing-operation-is-changed-and-this-operation-is-used-by-other-services",children:"An existing operation is changed, and this operation is used by other services"}),"\n",(0,i.jsx)(t.p,{children:"In this case the risk is calculated based on the actual usage of the changed operation. The more the operation is used, the higher the risk will be."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Running a risk evaluation on a system where there is no actual usage, the risk will be zero.\nAlso, having ",(0,i.jsx)(t.strong,{children:"few"})," usage data might result in a misleadging risk evaluation.\nThis tool has been designed to calculate the risk of changes of a live system where there is a good amount of usage data to obtain accurate risk forecast."]})}),"\n",(0,i.jsx)(t.h2,{id:"risk-engine-in-platformatic-cloud",children:"Risk engine in Platformatic Cloud"}),"\n",(0,i.jsxs)(t.p,{children:["When an application is deployed on the cloud, it uses ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/",children:"opentelemetry"})," library to collect services' usage data. This is done automatically by Platformatic, you don't have to configure anything on your app."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic App and Risk engine",src:n(98550).Z+"",width:"858",height:"353"})}),"\n",(0,i.jsxs)(t.p,{children:["The risk engine collects automatically data about the service calls (meaning that no actual data exchanged by services are collected, just the service name, i.e. the ",(0,i.jsx)(t.code,{children:"path"})," and the ",(0,i.jsx)(t.code,{children:"method"})," of the calls) in the form of open telemtry ",(0,i.jsx)(t.code,{children:"traces"})," of ",(0,i.jsx)(t.code,{children:"spans"}),". See ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/signals/traces",children:"Opentelemetry documentation"})," about the details on how the informations are sent form the services to the Risk Engine (or any other Open Telemetry backend)."]}),"\n",(0,i.jsx)(t.p,{children:"As said, this happens automatically and transparently in Platformatic Cloud for both OpenAPI and GraphQL services."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["In the GraphQL we have only one HTTP endpoint (which is by default ",(0,i.jsx)(t.code,{children:"POST/graphql"}),"). In this case we assume that an operation is actually the type of the graphQL request (e.g. ",(0,i.jsx)(t.code,{children:"query"})," or ",(0,i.jsx)(t.code,{children:"mutation"}),") and the name of the query."]})}),"\n",(0,i.jsxs)(t.p,{children:["When a PR is created, the risk engine is triggered and it calculates the risk of the change. This is done automatically by the Platformatic Github Action if they has been created as explaine in the ",(0,i.jsx)(t.a,{href:"./quick-start-guide",children:"Cloud Quick Start Guide"}),", that:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Calculates the operations changed by the PR"}),"\n",(0,i.jsx)(t.li,{children:"Ask to the risk engine the risk of that change"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As result, the risk engine returns the risk of the change and the list of the operations that are affected by the change in a PR comment created automatically. This is an example of a PR comment created by the risk engine for a PR that changes an OpenAPI service inside a Platformatic Runtime:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Risk engine comment for OpenAPI changes",src:n(4212).Z+"",width:"1718",height:"1638"})}),"\n",(0,i.jsx)(t.p,{children:"A comment for GraphQL changes is similar, but it shows the schema changes (collapsed by default):"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Risk engine comment with GraphQL schema changes",src:n(24617).Z+"",width:"894",height:"727"})}),"\n",(0,i.jsx)(t.p,{children:"...and the list of the affected queries/mutations:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Risk engine comment with GraphQL queries/mutations changes",src:n(36374).Z+"",width:"921",height:"723"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Note that a PR for an application exposing both OpenAPI and GraphQL and impacting both (for instance a Platformatic DB with a new migration) will have listed the changes in both OpenAPI and GraphQL schemas, but the actual risk will be common (being the risk of the whole change)."})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},36374:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-pr-graphql-queries-diff-b861e57807ee03000eb46a98aa0fe580.png"},24617:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-pr-graphql-schema-diff-514f28b2739c347ebc37e2ab0edd524d.png"},4212:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-pr-risk-calculation-comment-6cf2a78f5682c9dbebb7d828c9adbd44.png"},98550:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/service-risk-engine-e26628c9d8c27b680f59c64f996891c7.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);