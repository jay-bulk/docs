"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[52160],{95319:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(85893),i=s(11151);const r={},a="Rules",o={id:"reference/db/authorization/rules",title:"Rules",description:"Introduction",source:"@site/versioned_docs/version-1.15.1/reference/db/authorization/rules.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/rules",permalink:"/docs/1.15.1/reference/db/authorization/rules",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.1/reference/db/authorization/rules.md",tags:[],version:"1.15.1",frontMatter:{},sidebar:"docs",previous:{title:"User Roles & Metadata",permalink:"/docs/1.15.1/reference/db/authorization/user-roles-metadata"},next:{title:"Plugin",permalink:"/docs/1.15.1/reference/db/plugin"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Operation checks",id:"operation-checks",level:2},{value:"GraphQL events and subscriptions",id:"graphql-events-and-subscriptions",level:3},{value:"Restrict access to entity fields",id:"restrict-access-to-entity-fields",level:2},{value:"Set entity fields from user metadata",id:"set-entity-fields-from-user-metadata",level:2},{value:"Programmatic rules",id:"programmatic-rules",level:2},{value:"Access validation on <code>entity mapper</code> for plugins",id:"access-validation-on-entity-mapper-for-plugins",level:2},{value:"Skip authorization rules",id:"skip-authorization-rules",level:2},{value:"Avoid repetition of the same rule multiple times",id:"avoid-repetition-of-the-same-rule-multiple-times",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rules",children:"Rules"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Authorization rules can be defined to control what operations users are\nable to execute via the REST or GraphQL APIs that are exposed by a Platformatic\nDB app."}),"\n",(0,t.jsx)(n.p,{children:"Every rule must specify:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"role"})," (required) \u2014 A role name. It's a string and must match with the role(s) set by an external authentication service."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entity"})," (optional) \u2014 The Platformatic DB entity to apply this rule to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"entities"})," (optional) \u2014 The Platformatic DB entities to apply this rule to."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaults"})," (optional) \u2014 Configure entity fields that will be\n",(0,t.jsx)(n.a,{href:"#set-entity-fields-from-user-metadata",children:"automatically set from user data"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["One entry for each supported CRUD operation: ",(0,t.jsx)(n.code,{children:"find"}),", ",(0,t.jsx)(n.code,{children:"save"}),", ",(0,t.jsx)(n.code,{children:"delete"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["One of ",(0,t.jsx)(n.code,{children:"entity"})," and ",(0,t.jsx)(n.code,{children:"entities"})," must be specified."]}),"\n",(0,t.jsx)(n.h2,{id:"operation-checks",children:"Operation checks"}),"\n",(0,t.jsxs)(n.p,{children:["Every entity operation \u2014 such as ",(0,t.jsx)(n.code,{children:"find"}),", ",(0,t.jsx)(n.code,{children:"insert"}),", ",(0,t.jsx)(n.code,{children:"save"})," or ",(0,t.jsx)(n.code,{children:"delete"})," \u2014 can have\nauthorization ",(0,t.jsx)(n.code,{children:"checks"})," specified for them. This value can be ",(0,t.jsx)(n.code,{children:"false"})," (operation disabled)\nor ",(0,t.jsx)(n.code,{children:"true"})," (operation enabled with no checks)."]}),"\n",(0,t.jsxs)(n.p,{children:["To specify more fine-grained authorization controls, add a ",(0,t.jsx)(n.code,{children:"checks"})," field, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "role": "user",\n  "entity": "page",\n  "find": {\n    "checks": {\n      "userId": "X-PLATFORMATIC-USER-ID"\n    }\n  },\n  ...\n}\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, when a user with a ",(0,t.jsx)(n.code,{children:"user"})," role executes a ",(0,t.jsx)(n.code,{children:"findPage"}),", they can\naccess all the data that has ",(0,t.jsx)(n.code,{children:"userId"})," equal to the value  in user metadata with\nkey ",(0,t.jsx)(n.code,{children:"X-PLATFORMATIC-USER-ID"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:'"userId": "X-PLATFORMATIC-USER-ID"'})," is syntactic sugar for:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'      "find": {\n        "checks": {\n          "userId": {\n            "eq": "X-PLATFORMATIC-USER-ID"\n          }\n        }\n      }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It's possible to specify more complex rules using all the ",(0,t.jsx)(n.a,{href:"/docs/1.15.1/reference/sql-mapper/entities/api#where-clause",children:"supported where clause operators"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"userId"})," MUST exist as a field in the database table to use this feature."]}),"\n",(0,t.jsx)(n.h3,{id:"graphql-events-and-subscriptions",children:"GraphQL events and subscriptions"}),"\n",(0,t.jsxs)(n.p,{children:["Platformatic DB supports GraphQL subscriptions and therefore db-authorization must protect them.\nThe check is performed based on the ",(0,t.jsx)(n.code,{children:"find"})," permissions, the only permissions that are supported are:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"find: false"}),", the subscription for that role is disabled"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"find: { checks: { [prop]: 'X-PLATFORMATIC-PROP' } }"})," validates that the given prop is equal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"find: { checks: { [prop]: { eq: 'X-PLATFORMATIC-PROP' } } }"})," validates that the given prop is equal"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Conflicting rules across roles for different equality checks will not be supported."}),"\n",(0,t.jsx)(n.h2,{id:"restrict-access-to-entity-fields",children:"Restrict access to entity fields"}),"\n",(0,t.jsxs)(n.p,{children:["If a ",(0,t.jsx)(n.code,{children:"fields"})," array is present on an operation, Platformatic DB restricts the columns on which the user can execute to that list.\nFor ",(0,t.jsx)(n.code,{children:"save"})," operations, the configuration must specify all the not-nullable fields (otherwise, it would fail at runtime).\nPlatformatic does these checks at startup."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'    "rule": {\n        "entity": "page",\n        "role": "user",\n        "find": {\n          "checks": {\n            "userId": "X-PLATFORMATIC-USER-ID"\n          },\n          "fields": ["id", "title"]\n        }\n        ...\n    }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, only ",(0,t.jsx)(n.code,{children:"id"})," and ",(0,t.jsx)(n.code,{children:"title"})," are returned for a user with a ",(0,t.jsx)(n.code,{children:"user"})," role on the ",(0,t.jsx)(n.code,{children:"page"})," entity."]}),"\n",(0,t.jsx)(n.h2,{id:"set-entity-fields-from-user-metadata",children:"Set entity fields from user metadata"}),"\n",(0,t.jsx)(n.p,{children:"Defaults are used in database insert and are default fields added automatically populated from user metadata, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'        "defaults": {\n          "userId": "X-PLATFORMATIC-USER-ID"\n        },\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When an entity is created, the ",(0,t.jsx)(n.code,{children:"userId"})," column is used and populated using the value from user metadata."]}),"\n",(0,t.jsx)(n.h2,{id:"programmatic-rules",children:"Programmatic rules"}),"\n",(0,t.jsx)(n.p,{children:"If it's necessary to have more control over the authorizations, it's possible to specify the rules programmatically, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"\n  app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      async find ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      },\n      defaults: {\n        userId: async function ({ user, ctx, input }) {\n          match(user, {\n            'X-PLATFORMATIC-USER-ID': generated.shift(),\n            'X-PLATFORMATIC-ROLE': 'user'\n          })\n          return user['X-PLATFORMATIC-USER-ID']\n        }\n\n      },\n      async save ({ user, ctx, where }) {\n        return {\n          ...where,\n          userId: {\n            eq: user['X-PLATFORMATIC-USER-ID']\n          }\n        }\n      }\n    }]\n  })\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"user"})," role can delete all the posts edited before yesterday:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:" app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'user',\n      entity: 'page',\n      find: true,\n      save: true,\n      async delete ({ user, ctx, where }) {\n        return {\n          ...where,\n          editedAt: {\n            lt: yesterday\n          }\n        }\n      },\n      defaults: {\n        userId: 'X-PLATFORMATIC-USER-ID'\n      }\n    }]\n  })\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"access-validation-on-entity-mapper-for-plugins",children:["Access validation on ",(0,t.jsx)(n.code,{children:"entity mapper"})," for plugins"]}),"\n",(0,t.jsxs)(n.p,{children:["To assert that a specific user with it's ",(0,t.jsx)(n.code,{children:"role(s)"})," has the correct access rights to use entities on a ",(0,t.jsx)(n.code,{children:"platformatic plugin"})," the context should be passed to the ",(0,t.jsx)(n.code,{children:"entity mapper"})," in order to verify it's permissions like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//plugin.js\n\napp.post('/', async (req, reply) => {\n  const ctx = req.createPlatformaticCtx()\n  \n  await app.platformatic.entities.movie.find({\n    where: { /*...*/ },\n    ctx\n  })\n})\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"skip-authorization-rules",children:"Skip authorization rules"}),"\n",(0,t.jsxs)(n.p,{children:["In custom plugins, it's possible to skip the authorization rules on entities programmatically by setting the ",(0,t.jsx)(n.code,{children:"skipAuth"})," flag to ",(0,t.jsx)(n.code,{children:"true"})," or not passing a ",(0,t.jsx)(n.code,{children:"ctx"}),", e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// this works even if the user's role doesn't have the `find` permission.\nconst result = await app.platformatic.entities.page.find({skipAuth: true, ...})\n"})}),"\n",(0,t.jsx)(n.p,{children:"This has the same effect:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// this works even if the user's role doesn't have the `find` permission\nconst result = await app.platformatic.entities.page.find() // no `ctx`\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is useful for custom plugins for which the authentication is not necessary, so there is no user role set when invoked."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Skip authorization rules is not possible on the automatically generated REST and GraphQL APIs."})}),"\n",(0,t.jsx)(n.h2,{id:"avoid-repetition-of-the-same-rule-multiple-times",children:"Avoid repetition of the same rule multiple times"}),"\n",(0,t.jsx)(n.p,{children:"Very often we end up writing the same rules over and over again.\nInstead, it's possible to condense the rule for multiple entities on a single entry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:" app.register(auth, {\n    jwt: {\n      secret: 'supersecret'\n    },\n    roleKey: 'X-PLATFORMATIC-ROLE',\n    anonymousRole: 'anonymous',\n    rules: [{\n      role: 'anonymous',\n      entities: ['category', 'page'],\n      find: true,\n      delete: false,\n      save: false\n    }]\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);