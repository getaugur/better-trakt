const trakt = require('../dist/index');
const Trakt = trakt.Trakt;

const clientId = '';

const client = new Trakt({
  clientId: clientId,
  // can also provide the client secret if needed
  // clientSecret: ""

  // see all settings at https://getaugur.github.io/better-trakt/interfaces/TraktSettings.html
});

// hack so we can use async
(async () => {
  // docs for summary https://getaugur.github.io/better-trakt/classes/Shows.html#summary
  const show353 = await client.shows.summary('353');

  /**
   * shows#summary returns an object like this.
   *
   * @remarks
   * Currently you only get the "extended" version but in the future there will be a way to get the "normal" version
   *
   * @see https://getaugur.github.io/better-trakt/interfaces/ApiResponse.html
   */
  const show353_res = {
    // this is the data trakt sends back
    data: {
      title: 'Game of Thrones',
      year: 2011,
      ids: {
        trakt: 353,
        slug: 'game-of-thrones',
        tvdb: 121361,
        imdb: 'tt0944947',
        tmdb: 1399,
      },
      overview:
        "Game of Thrones is an American fantasy drama television series created for HBO by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is titled A Game of Thrones.\n\nThe series, set on the fictional continents of Westeros and Essos at the end of a decade-long summer, interweaves several plot lines. The first follows the members of several noble houses in a civil war for the Iron Throne of the Seven Kingdoms; the second covers the rising threat of the impending winter and the mythical creatures of the North; the third chronicles the attempts of the exiled last scion of the realm's deposed dynasty to reclaim the throne. Through its morally ambiguous characters, the series explores the issues of social hierarchy, religion, loyalty, corruption, sexuality, civil war, crime, and punishment.",
      first_aired: '2011-04-18T01:00:00.000Z',
      airs: {
        day: 'Sunday',
        time: '21:00',
        timezone: 'America/New_York',
      },
      runtime: 60,
      certification: 'TV-MA',
      network: 'HBO',
      country: 'us',
      updated_at: '2014-08-22T08:32:06.000Z',
      trailer: null,
      homepage: 'http://www.hbo.com/game-of-thrones/index.html',
      status: 'returning series',
      rating: 9,
      votes: 111,
      comment_count: 92,
      language: 'en',
      available_translations: [
        'en',
        'tr',
        'sk',
        'de',
        'ru',
        'fr',
        'hu',
        'zh',
        'el',
        'pt',
        'es',
        'bg',
        'ro',
        'it',
        'ko',
        'he',
        'nl',
        'pl',
      ],
      genres: ['drama', 'fantasy'],
      aired_episodes: 50,
    },

    // api response headers, some endpoints provide useful info through headers
    headers: {
      'Content-Type': 'application/json',

      // ... plus some other stuff which you can see in the offical docs
    },
  };
})();
