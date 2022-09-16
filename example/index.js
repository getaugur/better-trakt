// load env vars
// require('dotenv').config();

// console.log(process.env);

const trakt = require('../dist/index');
const Trakt = trakt.Trakt;

const clientId = process.env.TRAKT_ID || '';

const client = new Trakt({
  clientId: clientId,
});

// hack so we can use async
(async () => {
  // console.log(await client.shows.summary('1'));
  console.log(
    trakt.buildUrl('https://google.com/', {
      pagination: {
        limit: 5,
        page: 1,
      },
    }),
  );
  // await client.shows.summary('1');

  // console.log(await client.certifications.listMovies());
  // console.log(await client.certifications.listShows());
})();
