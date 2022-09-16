import { ApiConfig, ApiNamespace } from '../client';
import { Language } from '../trakt';
import { fetch } from '../utils';

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
    return this.listLanguages(this.config, 'movies');
  }

  /**
   * Gets list of all show languages
   * @returns
   */
  listShows() {
    return this.listLanguages(this.config, 'shows');
  }

  private async listLanguages({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<Language[]>(client, url);

    return response;
  }
}
