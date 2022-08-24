import { ApiConfig, ApiNamespace } from '../client';
import { listGenres } from './list';

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
    return listGenres(this.config, 'movies');
  }

  /**
   * Gets list of all show genres
   * @returns
   */
  listShows() {
    return listGenres(this.config, 'shows');
  }
}
