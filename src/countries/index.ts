import { ApiConfig, ApiNamespace } from '../client';
import { listCountries } from './list';

/**
 * Countries api namespace
 */
export class Countries implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  /**
   * Gets list of all movie countries
   * @returns
   */
  listMovies() {
    return listCountries(this.config, 'movies');
  }

  /**
   * Gets list of all show countries
   * @returns
   */
  listShows() {
    return listCountries(this.config, 'shows');
  }
}
