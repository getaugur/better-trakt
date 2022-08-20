# Better Trakt

[![GitHub license](https://img.shields.io/github/license/getaugur/better-trakt)](https://github.com/getaugur/better-trakt/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/better-trakt?logo=npm)](https://www.npmjs.com/package/better-trakt)

> A Trakt.tv SDK for the modern age

## ⚠️ Alpha Notice

Until `beter-trakt` reaches `1.0`, there may be breaking changes in new minor versions.

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

## Trakt Api Shenanigans

This sdk does its best to prove accurate typings for the api, but Trakt's Api has a lot on **undocumented behavior**. For this reason, it may just decide to **not** give you a random key, please be aware of this.

## Docs

Docs for the latest release can be found at [https://getaugur.github.io/better-trakt/](https://getaugur.github.io/better-trakt/). For other versions simply run `yarn build:docs` in the repo.
