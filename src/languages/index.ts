import { ApiConfig, ApiNamespace } from '../client';
import { listLanguages } from './list';

/**
 * Languages api namespace
 */
export class Languages implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/languages`,
      client: config.client,
    };
  }

  /**
   * Gets list of all movie languages
   * @returns
   */
  listMovies() {
    return listLanguages(this.config, 'movies');
  }

  /**
   * Gets list of all show languages
   * @returns
   */
  listShows() {
    return listLanguages(this.config, 'shows');
  }
}
