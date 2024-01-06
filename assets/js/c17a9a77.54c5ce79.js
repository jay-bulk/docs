"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[48607],{87741:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(85893),i=t(11151);const r={},o="Subscription",c={id:"reference/sql-graphql/subscriptions",title:"Subscription",description:"When the GraphQL plugin is loaded, some subscriptions are automatically adding to",source:"@site/versioned_docs/version-1.14.3/reference/sql-graphql/subscriptions.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/subscriptions",permalink:"/docs/1.14.3/reference/sql-graphql/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.14.3/reference/sql-graphql/subscriptions.md",tags:[],version:"1.14.3",frontMatter:{}},d={},l=[{value:"<code>[ENTITY]Saved</code>",id:"entitysaved",level:2},{value:"<code>[ENTITY]Deleted</code>",id:"entitydeleted",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"subscription",children:"Subscription"}),"\n",(0,s.jsxs)(n.p,{children:["When the GraphQL plugin is loaded, some subscriptions are automatically adding to\nthe GraphQL schema if the ",(0,s.jsx)(n.code,{children:"@platformatic/sql-events"})," plugin has been previously registered."]}),"\n",(0,s.jsxs)(n.p,{children:["It's possible to avoid creating the subscriptions for a given entity by adding the ",(0,s.jsx)(n.code,{children:"subscriptionIgnore"})," config,\nlike so: ",(0,s.jsx)(n.code,{children:"subscriptionIgnore: ['page']"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"entitysaved",children:(0,s.jsx)(n.code,{children:"[ENTITY]Saved"})}),"\n",(0,s.jsxs)(n.p,{children:["Published whenever an entity is saved, e.g. when the mutation ",(0,s.jsx)(n.code,{children:"insert[ENTITY]"})," or ",(0,s.jsx)(n.code,{children:"save[ENTITY]"})," are called."]}),"\n",(0,s.jsx)(n.h2,{id:"entitydeleted",children:(0,s.jsx)(n.code,{children:"[ENTITY]Deleted"})}),"\n",(0,s.jsxs)(n.p,{children:["Published whenever an entity is deleted, e.g. when the mutation ",(0,s.jsx)(n.code,{children:"delete[ENTITY]"})," is called.."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);