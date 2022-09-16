import { ApiConfig, ApiNamespace } from '../client';
import { Genre } from '../trakt';
import { fetch } from '../utils';

/**
 * Genres api namespace
 */
export class Genres implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/genres`,
      client: config.client,
    };
  }

  /**
   * Gets list of all movie genres
   * @returns
   */
  listMovies() {
    return this.listGenres(this.config, 'movies');
  }

  /**
   * Gets list of all show genres
   * @returns
   */
  listShows() {
    return this.listGenres(this.config, 'shows');
  }

  private async listGenres({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<Genre[]>(client, url);

    return response;
  }
}
