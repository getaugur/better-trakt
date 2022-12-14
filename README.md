# Better Trakt

[![GitHub license](https://img.shields.io/github/license/getaugur/better-trakt)](https://github.com/getaugur/better-trakt/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/better-trakt?logo=npm)](https://www.npmjs.com/package/better-trakt)

> A Trakt.tv client with native Typescript support and quality of life features

## Features

- 🖵 Browser & Node.js support
- 🔒 No auth lock-in
- 👥 Able to handle > 1 user [^1]
- 🌲 Tree Shakable
- 🌐 Trakt specific http errors
- 🏗️ Built with TypeScript

[^1]: This really shouldn't need be a "feature," but all the other SDKs can only handle 1 user at a time so it is.

## Install

```bash
# npm
npm install better-trakt

# Yarn
yarn add better-trakt

# pnpm
pnpm add better-trakt
```

## Usage

```js
import { Trakt } from 'better-trakt';

const client = new Trakt({
  clientId: 'client id',
  clientSecret: 'client secret',
});

// get every movie a user has watched
const watchedMovies = await client.users.watchedMovies({ userId: '1234', accessToken: 'abcd123' });

// get the summary for the show with the trakt id of "1"
const show1 = await client.shows.summary('1');
```

_More examples in the [examples folder](https://github.com/getaugur/better-trakt/tree/main/example)._

## Compatibility

✅: Full Support | 🚧: Partial Support | ❌: No Support

### Runtimes

| Runtime | Supported |
| ------- | :-------: |
| Node.js |    ✅     |
| Browser |  ✅[^2]   |

[^2]: See [Axios's supported browsers](https://github.com/axios/axios/#browser-support), _might_ also require a transpiler like [babel](https://babeljs.io/), [esbuild](https://esbuild.github.io/), etc.

### Trakt Api

(All namespaces are planned, this is just what's currently supported.)

| Namespace                | Supported |
| ------------------------ | :-------: |
| Authentication - OAuth   |    ❌     |
| Authentication - Devices |    ❌     |
| Calendars                |    ❌     |
| Checkin                  |    ❌     |
| Certifications           |    ✅     |
| Comments                 |    ❌     |
| Countries                |    ✅     |
| Genres                   |    ✅     |
| Languages                |    ✅     |
| Lists                    |    ✅     |
| Movies                   |    ✅     |
| Networks                 |    ✅     |
| People                   |    ❌     |
| Recommendations          |    ❌     |
| Scrobble                 |    ❌     |
| Search                   |    ❌     |
| Shows                    |    ✅     |
| Seasons                  |    ❌     |
| Episodes                 |    ❌     |
| Sync                     |    ❌     |
| Users                    |    🚧     |

## Docs

Docs for the latest release can be found at [https://getaugur.github.io/better-trakt/](https://getaugur.github.io/better-trakt/). For a more complete understanding of the api in general please visit [https://trakt.docs.apiary.io/](https://trakt.docs.apiary.io/).

## Getting Images

As described in the offical docs, you need to use 3rd party APIs. Listed below are some libraries we recommend using, all of which have typescript support:

- [moviedb-promise](https://github.com/grantholle/moviedb-promise)
- [omdb](https://github.com/thblt-thlgn/omdb) (has some issues)

## ⚠️ Alpha Notice

Until `beter-trakt` reaches `1.0`, there may be breaking changes in new minor versions.
