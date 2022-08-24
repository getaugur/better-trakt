import { ApiConfig, ApiNamespace } from '../client';
import { listLangauges } from './list';

/**
 * Langauges api namespace
 */
export class Langauges implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  /**
   * Gets list of all movie langauges
   * @returns
   */
  listMovies() {
    return listLangauges(this.config, 'movies');
  }

  /**
   * Gets list of all show langauges
   * @returns
   */
  listShows() {
    return listLangauges(this.config, 'shows');
  }
}
