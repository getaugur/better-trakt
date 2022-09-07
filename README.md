# Better Trakt

[![GitHub license](https://img.shields.io/github/license/getaugur/better-trakt)](https://github.com/getaugur/better-trakt/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/better-trakt?logo=npm)](https://www.npmjs.com/package/better-trakt)

> A Trakt.tv SDK for the modern age

Designed to minimize lock-in, and improve type safety, Better Trakt is a SDK built to scale. With robust Browser & Node.js support, high test coverage, and a plethra of QOL features like Trakt specific http errors, Better Trakt is a best in class SDK.

## Install

```bash
# Npm
npm install better-trakt

# Yarn
yarn add better-trakt
```

## Usage

```js
import { Trakt } from 'better-trakt';

const client = new Trakt({
  clientId: 'client id',
  clientSecret: 'client secret',
});

const watchedMovies = client.users.watchedMovies('user id', 'access token');
```

## Compatibility

✅: Full Support | 🚧: Partial Support | ❌: No Support

### Runtimes

| Runtime | Supported |
| ------- | :-------: |
| Node.js |    ✅     |
| Browser |  ✅[^1]   |

[^1]: See [Axios's supported browsers](https://github.com/axios/axios/#browser-support), _might_ also require a transpiler like [babel](https://babeljs.io/), [esbuild](https://esbuild.github.io/), etc.

### Trakt Api

| Runtime                  | Supported |
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
| Lists                    |    ❌     |
| Movies                   |    🚧     |
| Networks                 |    ✅     |
| People                   |    ❌     |
| Recommendations          |    ❌     |
| Scrobble                 |    ❌     |
| Search                   |    ❌     |
| Shows                    |    🚧     |
| Seasons                  |    ❌     |
| Episodes                 |    ❌     |
| Sync                     |    ❌     |
| Users                    |    🚧     |

## Docs

Docs for the latest release can be found at [https://getaugur.github.io/better-trakt/](https://getaugur.github.io/better-trakt/). For other versions simply run `yarn build:docs` in the repo.

## ⚠️ Alpha Notice

Until `beter-trakt` reaches `1.0`, there may be breaking changes in new minor versions.
