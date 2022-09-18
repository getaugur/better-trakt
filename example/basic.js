const { TraktHttpError } = require('../dist/index');
const trakt = require('../dist/index');
const Trakt = trakt.Trakt;

// for a more detailed example see detail.js example

const clientId = '';

// create new trakt sdk
const client = new Trakt({
  clientId: clientId,
});

// hack so we can use async
(async () => {
  // get show with trakt id of 353
  const gameOfThrones = await client.shows.summary(353);

  // check there was no error, and the data was returned
  if (gameOfThrones.error === undefined && gameOfThrones.data !== undefined) {
    // now you can use the data
  } else {
    // handle the error however you want

    // recommended option:
    throw gameOfThrones.error;
  }
})();
