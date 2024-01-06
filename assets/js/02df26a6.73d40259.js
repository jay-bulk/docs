"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[88948],{23884:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(85893),r=i(11151);const l={},c="Configuration",o={id:"reference/service/configuration",title:"Configuration",description:"Platformatic Service configured with a configuration file. It supports the use",source:"@site/versioned_docs/version-1.15.0/reference/service/configuration.md",sourceDirName:"reference/service",slug:"/reference/service/configuration",permalink:"/docs/1.15.0/reference/service/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.15.0/reference/service/configuration.md",tags:[],version:"1.15.0",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Service",permalink:"/docs/1.15.0/reference/service/introduction"},next:{title:"Plugin",permalink:"/docs/1.15.0/reference/service/plugin"}},t={},d=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>typescript</code> compilation options",id:"typescript-compilation-options",level:4},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>service</code>",id:"service",level:3},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"<code>clients</code>",id:"clients",level:3},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Example",id:"example",level:3},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3},{value:"Placeholder wildcard",id:"placeholder-wildcard",level:3},{value:"PLT_ROOT",id:"plt_root",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Platformatic Service configured with a configuration file. It supports the use\nof environment variables as setting values with ",(0,s.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,s.jsx)(n.p,{children:"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"platformatic.service.json"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"platformatic.service.json5"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"platformatic.service.yml"})," or ",(0,s.jsx)(n.code,{children:"platformatic.service.yaml"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"platformatic.service.tml"})," or ",(0,s.jsx)(n.code,{children:"platformatic.service.toml"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, a ",(0,s.jsxs)(n.a,{href:"/docs/1.15.0/reference/cli#service",children:[(0,s.jsx)(n.code,{children:"--config"})," option"]})," with a configuration\nfilepath can be passed to most ",(0,s.jsx)(n.code,{children:"platformatic service"})," CLI commands."]}),"\n",(0,s.jsx)(n.p,{children:"The configuration examples in this reference use JSON."}),"\n",(0,s.jsx)(n.h3,{id:"supported-formats",children:"Supported formats"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Extensions"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"JSON"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:".json"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"JSON5"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:".json5"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"YAML"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:".yml"}),", ",(0,s.jsx)(n.code,{children:".yaml"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"TOML"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:".tml"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Comments are supported by the JSON5, YAML and TOML file formats."}),"\n",(0,s.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.p,{children:"Configuration settings are organised into the following groups:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#server",children:(0,s.jsx)(n.code,{children:"server"})})," ",(0,s.jsx)(n.strong,{children:"(required)"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#service",children:(0,s.jsx)(n.code,{children:"service"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#metrics",children:(0,s.jsx)(n.code,{children:"metrics"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#plugins",children:(0,s.jsx)(n.code,{children:"plugins"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#telemetry",children:(0,s.jsx)(n.code,{children:"telemetry"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#watch",children:(0,s.jsx)(n.code,{children:"watch"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#clients",children:(0,s.jsx)(n.code,{children:"clients"})})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Sensitive configuration settings, such as a database connection URL that contains\na password, should be set using ",(0,s.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"server",children:(0,s.jsx)(n.code,{children:"server"})}),"\n",(0,s.jsx)(n.p,{children:"A object with the following settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"hostname"})})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),") \u2014 Hostname where Platformatic Service server will listen for connections."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"port"})})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"number"})," or ",(0,s.jsx)(n.code,{children:"string"}),") \u2014 Port where Platformatic Service server will listen for connections."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"healthCheck"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),") \u2014 Enables the health check endpoint."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Powered by ",(0,s.jsx)(n.a,{href:"https://github.com/fastify/under-pressure",children:(0,s.jsx)(n.code,{children:"@fastify/under-pressure"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The value can be an object, used to specify the interval between checks in milliseconds (default: ",(0,s.jsx)(n.code,{children:"5000"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "server": {\n    ...\n    "healthCheck": {\n      "interval": 2000\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"cors"})})," (",(0,s.jsx)(n.code,{children:"object"}),") \u2014 Configuration for Cross-Origin Resource Sharing (CORS) headers."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["All options will be passed to the ",(0,s.jsx)(n.a,{href:"https://github.com/fastify/fastify-cors",children:(0,s.jsx)(n.code,{children:"@fastify/cors"})})," plugin. In order to specify a ",(0,s.jsx)(n.code,{children:"RegExp"})," object, you can pass ",(0,s.jsx)(n.code,{children:"{ regexp: 'yourregexp' }"}),",\nit will be automatically converted"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"https"})})," (",(0,s.jsx)(n.code,{children:"object"}),") - Configuration for HTTPS supporting the following options."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"object"}),", or ",(0,s.jsx)(n.code,{children:"array"}),") - If ",(0,s.jsx)(n.code,{children:"key"})," is a string, it specifies the private key to be used. If ",(0,s.jsx)(n.code,{children:"key"})," is an object, it must have a ",(0,s.jsx)(n.code,{children:"path"})," property specifying the private key file. Multiple keys are supported by passing an array of keys."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cert"})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"object"}),", or ",(0,s.jsx)(n.code,{children:"array"}),") - If ",(0,s.jsx)(n.code,{children:"cert"})," is a string, it specifies the certificate to be used. If ",(0,s.jsx)(n.code,{children:"cert"})," is an object, it must have a ",(0,s.jsx)(n.code,{children:"path"})," property specifying the certificate file. Multiple certificates are supported by passing an array of keys."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"logger"})})," (",(0,s.jsx)(n.code,{children:"object"}),") -- the ",(0,s.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#logger",children:"logger configuration"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"pluginTimeout"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the number of milliseconds to wait for a Fastify plugin to load"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"bodyLimit"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the maximum request body size in bytes"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"maxParamLength"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the maximum length of a request parameter"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"caseSensitive"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") -- if ",(0,s.jsx)(n.code,{children:"true"}),", the router will be case sensitive"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ignoreTrailingSlash"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") -- if ",(0,s.jsx)(n.code,{children:"true"}),", the router will ignore the trailing slash"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ignoreTrailingSlash"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") -- if ",(0,s.jsx)(n.code,{children:"true"}),", the router will ignore the trailing slash"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"connectionTimeout"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the milliseconds to wait for a new HTTP request"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"keepAliveTimeout"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the milliseconds to wait for a keep-alive HTTP request"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"maxRequestsPerSocket"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the maximum number of requests per socket"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"forceCloseConnections"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:'"idle"'}),") -- if ",(0,s.jsx)(n.code,{children:"true"}),", the server will close all connections when it is closed"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"requestTimeout"})})," (",(0,s.jsx)(n.code,{children:"integer"}),") -- the milliseconds to wait for a request to be completed"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"disableRequestLogging"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") -- if ",(0,s.jsx)(n.code,{children:"true"}),", the request logger will be disabled"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"exposeHeadRoutes"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") -- if ",(0,s.jsx)(n.code,{children:"true"}),", the router will expose HEAD routes"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"serializerOpts"})})," (",(0,s.jsx)(n.code,{children:"object"}),") -- the ",(0,s.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#serializeropts",children:"serializer options"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"requestIdHeader"})})," (",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"false"}),") -- the name of the header that will contain the request id"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"requestIdLogLabel"})})," (",(0,s.jsx)(n.code,{children:"string"}),") -- Defines the label used for the request identifier when logging the request. default: ",(0,s.jsx)(n.code,{children:"'reqId'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"jsonShorthand"})})," (",(0,s.jsx)(n.code,{children:"boolean"}),") -- default: ",(0,s.jsx)(n.code,{children:"true"})," -- visit ",(0,s.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#jsonshorthand",children:"fastify docs"})," for more details"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"trustProxy"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"integer"})," or ",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"String[]"}),") -- default: ",(0,s.jsx)(n.code,{children:"false"})," -- visit ",(0,s.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#trustproxy",children:"fastify docs"})," for more details"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server",children:"fastify docs"})," for more details."]})}),"\n",(0,s.jsx)(n.h3,{id:"metrics",children:(0,s.jsx)(n.code,{children:"metrics"})}),"\n",(0,s.jsxs)(n.p,{children:["Configuration for a ",(0,s.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," server that will export monitoring metrics\nfor the current server instance. It uses ",(0,s.jsx)(n.a,{href:"https://github.com/SkeLLLa/fastify-metrics",children:(0,s.jsx)(n.code,{children:"fastify-metrics"})}),"\nunder the hood."]}),"\n",(0,s.jsxs)(n.p,{children:["This setting can be a ",(0,s.jsx)(n.code,{children:"boolean"})," or an ",(0,s.jsx)(n.code,{children:"object"}),". If set to ",(0,s.jsx)(n.code,{children:"true"})," the Prometheus server will listen on ",(0,s.jsx)(n.code,{children:"http://0.0.0.0:9090"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Supported object properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"hostname"})})," (",(0,s.jsx)(n.code,{children:"string"}),") \u2014 The hostname where Prometheus server will listen for connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"port"})})," (",(0,s.jsx)(n.code,{children:"number"})," or ",(0,s.jsx)(n.code,{children:"string"}),") \u2014 The port where Prometheus server will listen for connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"auth"})})," (",(0,s.jsx)(n.code,{children:"object"}),") \u2014 Basic Auth configuration. ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"username"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"password"})})," are required here\n(use ",(0,s.jsx)(n.a,{href:"#environment-variables",children:"environment variables"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"plugins",children:(0,s.jsx)(n.code,{children:"plugins"})}),"\n",(0,s.jsx)(n.p,{children:"An optional object that defines the plugins loaded by Platformatic Service."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"packages"})}),": : an array of packages/modules (",(0,s.jsx)(n.code,{children:"string"}),")\nor an array of objects composed as follows:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," (",(0,s.jsx)(n.code,{children:"string"}),"): the name of the package to ",(0,s.jsx)(n.code,{children:"import"}),"; required."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," (",(0,s.jsx)(n.code,{children:"object"}),"): Optional plugin options."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"paths"})})," (",(0,s.jsx)(n.strong,{children:"optional"}),", ",(0,s.jsx)(n.code,{children:"array"}),"): an array of paths (",(0,s.jsx)(n.code,{children:"string"}),")\nor an array of objects composed as follows,","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"})," (",(0,s.jsx)(n.code,{children:"string"}),"): Relative path to plugin's entry point."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"options"})," (",(0,s.jsx)(n.code,{children:"object"}),"): Optional plugin options."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"encapsulate"})," (",(0,s.jsx)(n.code,{children:"boolean"}),"): if the path is a folder, it instruct Platformatic to not encapsulate those plugins."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"maxDepth"})," (",(0,s.jsx)(n.code,{children:"integer"}),"): if the path is a folder, it limits the depth to load the content from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"autoHooks"})," (",(0,s.jsx)(n.code,{children:"boolean"}),"): Apply hooks from autohooks.js file(s) to plugins found in folder."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"autoHooksPattern"})," (",(0,s.jsx)(n.code,{children:"string"}),"): Regex to override the autohooks naming convention."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cascadeHooks"})," (",(0,s.jsx)(n.code,{children:"boolean"}),"): If using autoHooks, cascade hooks to all children. Ignored if autoHooks is false."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"overwriteHooks"})," (",(0,s.jsx)(n.code,{children:"boolean"}),"): If using cascadeHooks, cascade will be reset when a new autohooks.js file is encountered. Ignored if autoHooks is false."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"routeParams"})," (",(0,s.jsx)(n.code,{children:"boolean"}),"): Folders prefixed with _ will be turned into route parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"forceESM"})," (",(0,s.jsx)(n.code,{children:"boolean"}),"): If set to 'true' it always use await import to load plugins or hooks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ignoreFilter"})," (",(0,s.jsx)(n.code,{children:"string"}),"): Filter matching any path that should not be loaded. Can be a RegExp, a string or a function returning a boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"matchFilter"})," (",(0,s.jsx)(n.code,{children:"string"}),"): Filter matching any path that should be loaded. Can be a RegExp, a string or a function returning a boolean."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ignorePattern"})," (",(0,s.jsx)(n.code,{children:"string"}),"): RegExp matching any file or folder that should not be loaded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"indexPattern"})," (",(0,s.jsx)(n.code,{children:"string"}),"): Regex to override the index.js naming convention"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"typescript"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),"): enable TypeScript compilation. A ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file is required in the same folder. See ",(0,s.jsx)(n.a,{href:"#typescript-compilation-options",children:"TypeScript compilation options"})," for more details."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": {\n    "packages": [{\n      "name": "@fastify/compress",\n      "options": {\n        "threshold": 1\n      }\n    }],\n    "paths": [{\n      "path": "./my-plugin.js",\n      "options": {\n        "foo": "bar"\n      }\n    }]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h4,{id:"typescript-compilation-options",children:[(0,s.jsx)(n.code,{children:"typescript"})," compilation options"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"typescript"})," can also be an object to customize the compilation. Here are the supported options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enabled"})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"string"}),"): enables compilation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tsConfig"})," (",(0,s.jsx)(n.code,{children:"string"}),"): path to the ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," file relative to the configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"outDir"})," (",(0,s.jsx)(n.code,{children:"string"}),"): the output directory of ",(0,s.jsx)(n.code,{children:"tsconfig.json"}),", in case ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," is not available\nand and ",(0,s.jsx)(n.code,{children:"enabled"})," is set to ",(0,s.jsx)(n.code,{children:"false"})," (procution build)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flags"})," (array of ",(0,s.jsx)(n.code,{children:"string"}),"): flags to be passed to ",(0,s.jsx)(n.code,{children:"tsc"}),". Overrides ",(0,s.jsx)(n.code,{children:"tsConfig"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": {\n    "paths": [{\n      "path": "./my-plugin.js",\n      "options": {\n        "foo": "bar"\n      }\n    }],\n    "typescript": {\n      "enabled": false,\n      "tsConfig": "./path/to/tsconfig.json",\n      "outDir": "dist"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"watch",children:(0,s.jsx)(n.code,{children:"watch"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables watching for file changes if set to ",(0,s.jsx)(n.code,{children:"true"}),"  or ",(0,s.jsx)(n.code,{children:'"true"'}),". It can also be customized with the following options:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"enabled"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"string"}),"): enables watching."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"ignore"})})," (",(0,s.jsx)(n.code,{children:"string[]"}),", default: ",(0,s.jsx)(n.code,{children:"null"}),"): List of glob patterns to ignore when watching for changes. If ",(0,s.jsx)(n.code,{children:"null"})," or not specified, ignore rule is not applied. Ignore option doesn't work for typescript files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"allow"})})," (",(0,s.jsx)(n.code,{children:"string[]"}),", default: ",(0,s.jsx)(n.code,{children:"['*.js', '**/*.js']"}),"): List of glob patterns to allow when watching for changes. If ",(0,s.jsx)(n.code,{children:"null"})," or not specified, allow rule is not applied. Allow option doesn't work for typescript files."]}),"\n",(0,s.jsx)(n.li,{}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "watch": {\n    "ignore": ["*.mjs", "**/*.mjs"],\n    "allow": ["my-plugin.js", "plugins/*.js"]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"service",children:(0,s.jsx)(n.code,{children:"service"})}),"\n",(0,s.jsxs)(n.p,{children:["Configure ",(0,s.jsx)(n.code,{children:"@platformatic/service"})," specific settings such as ",(0,s.jsx)(n.code,{children:"graphql"})," or ",(0,s.jsx)(n.code,{children:"openapi"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"graphql"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),", default: ",(0,s.jsx)(n.code,{children:"false"}),") \u2014 Controls the GraphQL API interface, with optional GraphiQL UI."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.p,{children:"Enables GraphQL support"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "service": {\n    "graphql": true\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enables GraphQL support with GraphiQL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "service": {\n    "graphql": {\n      "graphiql": true\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"openapi"})})," (",(0,s.jsx)(n.code,{children:"boolean"})," or ",(0,s.jsx)(n.code,{children:"object"}),", default: ",(0,s.jsx)(n.code,{children:"false"}),") \u2014 Enables OpenAPI REST support."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If value is an object, all ",(0,s.jsx)(n.a,{href:"https://swagger.io/specification/",children:"OpenAPI v3"})," allowed properties can be passed. Also a ",(0,s.jsx)(n.code,{children:"prefix"})," property can be passed to set the OpenAPI prefix."]}),"\n",(0,s.jsxs)(n.li,{children:["Platformatic Service uses ",(0,s.jsx)(n.a,{href:"https://github.com/fastify/fastify-swagger",children:(0,s.jsx)(n.code,{children:"@fastify/swagger"})})," under the hood to manage this configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Examples"})}),"\n",(0,s.jsx)(n.p,{children:"Enables OpenAPI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "service": {\n    ...\n    "openapi": true\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enables OpenAPI with prefix"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "service": {\n    "openapi": {\n      "prefix": "/api"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Enables OpenAPI with options"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "service": {\n    "openapi": {\n      "info": {\n        "title": "Platformatic Service",\n        "description": "Exposing a SQL database as REST"\n      }\n    }\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"telemetry",children:(0,s.jsx)(n.code,{children:"telemetry"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://opentelemetry.io/",children:"Open Telemetry"})," is optionally supported with these settings:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"serviceName"})})," (",(0,s.jsx)(n.strong,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"string"}),") \u2014 Name of the service as will be reported in open telemetry."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"version"})})," (",(0,s.jsx)(n.code,{children:"string"}),") \u2014 Optional version (free form)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"skip"})})," (",(0,s.jsx)(n.code,{children:"array"}),"). Optional list of operations to skip when exporting telemetry defined ",(0,s.jsx)(n.code,{children:"object"})," with properties:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"method"}),": GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"path"}),". e.g.: ",(0,s.jsx)(n.code,{children:"/documentation/json"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"exporter"})})," (",(0,s.jsx)(n.code,{children:"object"})," or ",(0,s.jsx)(n.code,{children:"array"}),") \u2014 Exporter configuration. If not defined, the exporter defaults to ",(0,s.jsx)(n.code,{children:"console"}),". If an array of objects is configured, every object must be a valid exporter object. The exporter object has the following properties:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type"})})," (",(0,s.jsx)(n.code,{children:"string"}),") \u2014 Exporter type. Supported values are ",(0,s.jsx)(n.code,{children:"console"}),", ",(0,s.jsx)(n.code,{children:"otlp"}),", ",(0,s.jsx)(n.code,{children:"zipkin"})," and ",(0,s.jsx)(n.code,{children:"memory"})," (default: ",(0,s.jsx)(n.code,{children:"console"}),"). ",(0,s.jsx)(n.code,{children:"memory"})," is only supported for testing purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"options"})})," (",(0,s.jsx)(n.code,{children:"object"}),") \u2014 These options are supported:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"url"})})," (",(0,s.jsx)(n.code,{children:"string"}),") \u2014 The URL to send the telemetry to. Required for ",(0,s.jsx)(n.code,{children:"otlp"})," exporter. This has no effect on ",(0,s.jsx)(n.code,{children:"console"})," and ",(0,s.jsx)(n.code,{children:"memory"})," exporters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"headers"})})," (",(0,s.jsx)(n.code,{children:"object"}),") \u2014 Optional headers to send with the telemetry. This has no effect on ",(0,s.jsx)(n.code,{children:"console"})," and ",(0,s.jsx)(n.code,{children:"memory"})," exporters."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that OTLP traces can be consumed by different solutions, like ",(0,s.jsx)(n.a,{href:"https://www.jaegertracing.io/",children:"Jaeger"}),". ",(0,s.jsx)(n.a,{href:"https://opentelemetry.io/ecosystem/vendors/",children:"Here"})," the full list."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "telemetry": {\n      "serviceName": "test-service",\n      "exporter": {\n          "type": "otlp",\n          "options": {\n              "url": "http://localhost:4318/v1/traces"\n          }\n      }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"clients",children:(0,s.jsx)(n.code,{children:"clients"})}),"\n",(0,s.jsxs)(n.p,{children:["An array of ",(0,s.jsx)(n.a,{href:"/docs/1.15.0/reference/client/introduction",children:"Platformatic Client"})," configurations that will be loaded by Platformatic Service."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"serviceId"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The ID of Platformatic Service inside the Platformatic Runtime. Used only in ",(0,s.jsx)(n.a,{href:"/docs/next/reference/runtime/introduction#platformatic-runtime-context",children:"Platformatic Runtime context"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The name of the client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The type of the client. Supported values are ",(0,s.jsx)(n.code,{children:"graphql"})," and ",(0,s.jsx)(n.code,{children:"openapi"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"schema"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - Path to the generated client schema file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"path"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - Path to the generated client folder."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"url"})})," (",(0,s.jsx)(n.code,{children:"string"}),") - The URL of the service that the client will connect to."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"environment-variable-placeholders",children:"Environment variable placeholders"}),"\n",(0,s.jsxs)(n.p,{children:["The value for any configuration setting can be replaced with an environment variable\nby adding a placeholder in the configuration file, for example ",(0,s.jsx)(n.code,{children:"{PLT_SERVER_LOGGER_LEVEL}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["All placeholders in a configuration must be available as an environment variable\nand must meet the ",(0,s.jsx)(n.a,{href:"#allowed-placeholder-names",children:"allowed placeholder name"})," rules."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="platformatic.service.json"',children:'{\n  "server": {\n    "port": "{PORT}"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Platformatic will replace the placeholders in this example with the environment\nvariables of the same name."}),"\n",(0,s.jsx)(n.h3,{id:"setting-environment-variables",children:"Setting environment variables"}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:".env"})," file exists it will automatically be loaded by Platformatic using\n",(0,s.jsx)(n.a,{href:"https://github.com/motdotla/dotenv",children:(0,s.jsx)(n.code,{children:"dotenv"})}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title=".env"',children:"PLT_SERVER_LOGGER_LEVEL=info\nPORT=8080\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:".env"})," file must be located in the same folder as the Platformatic configuration\nfile or in the current working directory."]}),"\n",(0,s.jsx)(n.p,{children:"Environment variables can also be set directly on the command line, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"PLT_SERVER_LOGGER_LEVEL=debug npx platformatic service\n"})}),"\n",(0,s.jsx)(n.h3,{id:"allowed-placeholder-names",children:"Allowed placeholder names"}),"\n",(0,s.jsxs)(n.p,{children:["Only placeholder names prefixed with ",(0,s.jsx)(n.code,{children:"PLT_"}),", or that are in this allow list, will be\ndynamically replaced in the configuration file:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PORT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DATABASE_URL"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This restriction is to avoid accidentally exposing system environment variables.\nAn error will be raised by Platformatic if it finds a configuration placeholder\nthat isn't allowed."}),"\n",(0,s.jsxs)(n.p,{children:["The default allow list can be extended by passing a ",(0,s.jsx)(n.code,{children:"--allow-env"})," CLI option with a\ncomma separated list of strings, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic service start --allow-env=HOST,SERVER_LOGGER_LEVEL\n# OR\nnpx platformatic start --allow-env=HOST,SERVER_LOGGER_LEVEL\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"--allow-env"})," is passed as an option to the CLI, it will be merged with the\ndefault allow list."]}),"\n",(0,s.jsx)(n.h3,{id:"placeholder-wildcard",children:"Placeholder wildcard"}),"\n",(0,s.jsx)(n.p,{children:"You're also able to define a placeholder wildcard, with your own prefix, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic service start --allow-env=MY_NS_*\n# OR\nnpx platformatic start --allow-env=MY_NS_*\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will allow you to use placeholders like ",(0,s.jsx)(n.code,{children:"{MY_NS_MY_VAR}"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"plt_root",children:"PLT_ROOT"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"{PLT_ROOT}"})," placeholder is automatically set to the directory containing the configuration file, so it can be used to configure relative paths."]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var s=i(67294);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);