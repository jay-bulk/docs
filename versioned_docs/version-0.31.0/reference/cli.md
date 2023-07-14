---
# ATTENTION: This file is automatically generated through script/gen-cli-doc.mjs, do not change it manually!

toc_max_heading_level: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

# Platformatic CLI

## Installation and usage

Install the Platformatic CLI as a dependency for your project:

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```bash
npm install platformatic
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
yarn add platformatic
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```bash
pnpm add platformatic
```

</TabItem>
</Tabs>

Once it's installed you can run it with:

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```bash
npx platformatic
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```bash
yarn platformatic
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```bash
pnpm platformatic
```

</TabItem>
</Tabs>

:::info

The `platformatic` package can be installed globally, but installing it as a
project dependency ensures that everyone working on the project is using the
same version of the Platformatic CLI.

:::

## Commands

The Platformatic CLI provides the following commands:

<TOCInline toc={toc} minHeadingLevel={3} maxHeadingLevel={4} />

### help


```
Welcome to Platformatic. Available commands are:

* help - display this message
* help <command> - show more information about a command.
* db - start Platformatic DB; type `platformatic db help` to know more.
* service - start Platformatic Service; type `platformatic service help` to know more.
* upgrade - upgrade the Platformatic configuration to the latest version.
* gh - create a new gh action for Platformatic deployments
* deploy - deploy a Platformatic application to the cloud
* runtime - start Platformatic Runtime; type `platformatic runtime help` to know more.
* start - start a Platformatic application
* frontend - create frontend code to consume the REST APIs
```


### client

```bash
platformatic client <command>
```


#### help

Create a Fastify plugin that exposes a client for a remote OpenAPI or GraphQL API.

To create a client for a remote OpenAPI API, you can use the following command:

```bash
$ platformatic client http://example.com/to/schema/file -n myclient
```

To create a client for a remote Graphql API, you can use the following command:

```bash
$ platformatic client http://example.com/graphql -n myclient
```

Instead of a URL, you can also use a local file:

```bash
$ platformatic client path/to/schema -n myclient
```

This will create a Fastify plugin that exposes a client for the remote API in a folder `myclient`
and a file named myclient.js inside it.

If platformatic config file is specified, it will be edited and a `clients` section will be added.
Then, in any part of your Platformatic application you can use the client.

You can use the client in your application in Javascript, calling a GraphQL endpoint:

```js
module.exports = async function (app, opts) {
  app.post('/', async (request, reply) => {
    const res = await app.myclient.graphql({
      query: 'query { hello }'
    })
    return res
  })
}
```

or in Typescript, calling an OpenAPI endpoint:


```ts
import { FastifyInstance } from 'fastify'
/// <reference path="./myclient" />

export default async function (app: FastifyInstance) {
  app.get('/', async () => {
    return app.myclient.get({})
  })
}
```

Options:

  * `-c, --config <path>`: Path to the configuration file.
  * `-n, --name <name>`: Name of the client.
  * `-f, --folder <name>`: Name of the plugin folder, defaults to --name value.
  * `-t, --typescript`: Generate the client plugin in TypeScript.
  * `-r, --full-response`: Client will return full response object rather than just the body.


### composer

```bash
platformatic composer <command>
```


#### help

Available commands:

* `help` - show this help message.
* `help <command>` - shows more information about a command.
* `start` - start the server.
* `openapi schemas fetch` - fetch OpenAPI schemas from services.


#### openapi schemas fetch

Fetch OpenAPI schemas from remote services to use in your Platformatic project.

``` bash
  $ platformatic composer openapi schemas fetch
```

It will fetch all the schemas from the remote services and store them by path
set in the `platformatic.composer.json` file. If the path is not set, it will
skip fetching the schema.


#### start

Start the Platformatic Composer server with the following command:

``` bash
 $ platformatic composer start
 ```

You will need a configuration file. Here is an example to get you started,
save the following as `platformatic.composer.json`:

``` json
  {
    "server": {
      "hostname": "127.0.0.1",
      "port": 0,
      "logger": {
        "level": "info"
      }
    },
    "composer": {
      "services": [
        {
          "id": "service1",
          "origin": "http://127.0.0.1:3051",
          "openapi": {
            "url": "/documentation/json"
          }
        },
        {
          "id": "service2",
          "origin": "http://127.0.0.1:3052",
          "openapi": {
            "file": "./schemas/service2.openapi.json"
          }
        }
      ],
      "refreshTimeout": 1000
    }
  }
```

By sending the SIGUSR2 signal, the server can be reloaded.

Options:

  -c, --config FILE      Specify a configuration file to use

If not specified, the configuration specified will be loaded from `platformatic.composer.json`,
`platformatic.composer.yml`, or `platformatic.composer.tml` in the current directory. You can find more details about
the configuration format at:
https://oss.platformatic.dev/docs/reference/composer/configuration.


### db

```bash
platformatic db <command>
```


#### compile

Compile typescript plugins.
``` bash
  $ platformatic db compile
```

As a result of executing this command, the Platformatic DB will compile typescript
plugins in the `outDir` directory. 

If not specified, the configuration specified will be loaded from
`platformatic.db.json`, `platformatic.db.yml`, or `platformatic.db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


#### help

Available commands:

* `help` - show this help message.
* `help <command>` - shows more information about a command.
* `start` - start the server.
* `compile` - compile typescript plugins.
* `seed` - run a seed file.
* `types` - generate typescript types for entities.
* `schema` - generate and print api schema.
* `migrations create` - generate do and undo migration files.
* `migrations apply` - apply migration files.


#### migrations apply

Apply all configured migrations to the database:

``` bash
  $ platformatic db migrations apply
```

The migrations will be applied in the order they are specified in the
folder defined in the configuration file. If you want to apply a specific migration,
you can use the `--to` option:

``` bash
  $ platformatic db migrations apply --to 001
```

Here is an example migration:

``` sql
  CREATE TABLE graphs (
    id SERIAL PRIMARY KEY,
    name TEXT
  );
```

You can always rollback to a specific migration with:

``` bash
  $ platformatic db migrations apply --to VERSION
```

Use 000 to reset to the initial state.

Options:

  * `-c, --config <path>`: Path to the configuration file.
  * `-t, --to <version>`: Migrate to a specific version.

If not specified, the configuration specified will be loaded from
`platformatic.db.json`, `platformatic.db.yml`, or `platformatic.db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


#### migrations create

Create next migration files

``` bash
  $ platformatic db migrations create
```

It will generate do and undo sql files in the migrations folder. The name of the
files will be the next migration number.

``` bash
  $ platformatic db migrations create --name "create_users_table"
```

Options:

  * `-c, --config <path>`: Path to the configuration file.

If not specified, the configuration specified will be loaded from
`platformatic.db.json`, `platformatic.db.yml`, or `platformatic.db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


#### migrations

Available commands:

* `migrations create` - generate do and undo migration files.
* `migrations apply` - apply migration files.


#### schema

Update the config schema file:

* `schema config` - update the JSON schema config available on `platformatic.db.schema.json`

Your configuration on `platformatic.db.json` has a schema defined to improve the developer experience and avoid mistakes when updating the configuration of Platformatic DB.
When you run `platformatic db init`, a new JSON `$schema` property is added in `platformatic.db.schema.json`. This can allow your IDE to add suggestions (f.e. mandatory/missing fields, types, default values) by opening the config in `platformatic.db.json`.
Running `platformatic db schema config` you can update your schema so that it matches well the latest changes available on your config.

Generate a schema from the database and prints it to standard output:

* `schema graphql` - generate the GraphQL schema
* `schema openapi` - generate the OpenAPI schema

Options:

  -c, --config FILE  Specify a configuration file to use

If not specified, the configuration specified will be loaded from
`platformatic.db.json`, `platformatic.db.yml`, or `platformatic.db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


#### seed

Load a seed into the database. This is a convenience method that loads
a JavaScript file and configure @platformatic/sql-mapper to connect to
the database specified in the configuration file.

Here is an example of a seed file:

``` javascript
  'use strict'

  module.exports = async function ({ entities, db, sql }) {
    await entities.graph.save({ input: { name: 'Hello' } })
    await db.query(sql`
      INSERT INTO graphs (name) VALUES ('Hello 2');
    `)
  }
```

You can run this using the `seed` command:

``` bash
  $ platformatic db seed seed.js
```

Options:

  * `--config` - Path to the configuration file.

If not specified, the configuration specified will be loaded from
`platformatic.db.json`, `platformatic.db.yml`, or `platformatic.db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


#### start

Start the Platformatic DB server with the following command:

``` bash
 $ platformatic db start
 ```

You will need a  configuration file. Here is an example to get you started,
save the following as `platformatic.db.json`:

``` json
  {
    "server": {
      "hostname": "127.0.0.1",
      "port": 0,
      "logger": {
        "level": "info"
      }
    },
    "db": {
      "connectionString": "sqlite://./db"
    },
    "migrations": {
      "dir": "./migrations"
    }
  }
```


Remember to create a migration, run the `db help migrate` command to know more.

All outstanding migrations will be applied to the database unless the
`migrations.autoApply` configuration option is set to false.

By sending the SIGUSR2 signal, the server can be reloaded.

Options:

  -c, --config FILE      Specify a configuration file to use

If not specified, the configuration specified will be loaded from `platformatic.db.json`,
`platformatic.db.yml`, or `platformatic.db.tml` in the current directory. You can find more details about
the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


#### types

Generate typescript types for your entities from the database.

``` bash
  $ platformatic db types
```

As a result of executing this command, the Platformatic DB will generate a `types`
folder with a typescript file for each database entity. It will also generate a
`global.d.ts` file that injects the types into the Application instance.

In order to add type support to your plugins, you need to install some additional
dependencies. To do this, copy and run an `npm install` command with dependencies
that "platformatic db types" will ask you.

Here is an example of a platformatic plugin.js with jsdoc support.
You can use it to add autocomplete to your code.

``` javascript
/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.get('/movie', async () => {
    const movies = await app.platformatic.entities.movie.find({
      where: { title: { eq: 'The Hitchhiker\'s Guide to the Galaxy' } }
    })
    return movies[0].id
  })
}
```

If not specified, the configuration specified will be loaded from
`platformatic.db.json`, `platformatic.db.yml`, or `platformatic.db.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/db/configuration.


### service

```bash
platformatic service <command>
```


#### compile

Compile typescript plugins.

``` bash
  $ platformatic service compile
```

As a result of executing this command, Platformatic Service will compile typescript
plugins in the `outDir` directory. 

If not specified, the configuration specified will be loaded from
`platformatic.service.json`, `platformatic.service.yml`, or `platformatic.service.tml` in the current directory.
You can find more details about the configuration format at:
https://oss.platformatic.dev/docs/reference/service/configuration.


#### help

Available commands:

* `help` - show this help message.
* `help <command>` - shows more information about a command.
* `start` - start the server.
* `schema config` - generate the schema configuration file.


#### schema

Update the config schema file:

* `schema config` - update the JSON schema config available on `platformatic.service.schema.json`

Your configuration on `platformatic.service.json` has a schema defined to improve the developer experience and avoid mistakes when updating the configuration of Platformatic Service.
When you initialize a new Platformatic service (f.e. running `npm create platformatic@latest`), a new JSON `$schema` property is added in the `platformatic.service.json` config. This can allow your IDE to add suggestions (f.e. mandatory/missing fields, types, default values) by opening the config in `platformatic.service.json`.
Running `platformatic service schema config` you can update your schema so that it matches well the latest changes available on your config.




#### start

Start the Platformatic Service with the following command:

``` bash
 $ platformatic service start
 ```

You will need a  configuration file. Here is an example to get you started,
save the following as `platformatic.service.json`:

``` json
{
  "server": {
    "hostname": "127.0.0.1",
    "port": 0,
    "logger": {
      "level": "info"
    }
  },
  "plugin": {
    "path": "./plugin.js"
  }
}
```


### frontend

```bash
platformatic frontend <url> <language>
```



Create frontend code to consume the REST APIs of a Platformatic application.

From the directory you want the frontend code to be generated (typically `<YOUR_FRONTEND_APP_DIRECTORY>/src/`) run
```bash
npx platformatic frontend http://127.0.0.1:3042 ts
```

(where `http://127.0.0.1:3042` must be replaced with your Platformatic application endpoint and the language can be `ts` or `js`) and then the Platformatic CLI generates

  * `api.d.ts`: A TypeScript module that includes all the OpenAPI-related types
  * `api.ts` or `api.js`: A module that includes a function for every single REST endpoint

Refer to the [dedicated guide](https://oss.platformatic.dev/docs/guides/generate-frontend-code-to-consume-platformatic-rest-api) where the full process of generating and consuming the frontend code is described.

In case of problems, please check that

  * The Platformatic app URL is valid
  * The Platformatic app whose URL belongs must be up and running
  * OpenAPI must be enabled (`db.openapi` in your `platformatic.db.json` is not set to `false`). You can find more details about the db configuration format [here](https://oss.platformatic.dev/docs/reference/db/configuration/#db).
  * CORS must be managed in your Platformatic app (`server.cors.origin.regexp` in your `platformatic.db.json` is set to `/*/`, for instance)
  You can find more details about the cors configuration [here](https://oss.platformatic.dev/docs/reference/service/configuration/#server).


### runtime

```bash
platformatic runtime <command>
```


#### compile

Compile all typescript plugins for all services.

``` bash
  $ platformatic runtime compile
```

This command will compile the TypeScript
plugins for each services registered in the runtime.


#### help

Available commands:

* `help` - show this help message.
* `help <command>` - shows more information about a command.
* `start` - start the application.


#### start

Start the Platformatic Runtime with the following command:

``` bash
 $ platformatic runtime start
```


### start

Start a Platformatic application with the following command:

```bash
$ platformatic start
```

Options:

  * `-c, --config <path>`: Path to the configuration file.
  * `--inspect[=[host:]port]`: Start the Node.js debugger. `host` defaults to `'127.0.0.1'`. `port` defaults to 9229. Use caution when binding to a public host:port combination.
  * `--inspect-brk[=[host:]port]`: Start the Node.js debugger and block until a client has attached. `host` defaults to `'127.0.0.1'`. `port` defaults to 9229. Use caution when binding to a public host:port combination.
