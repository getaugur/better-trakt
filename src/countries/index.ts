import { ApiConfig, ApiNamespace } from '../client';
import { Country } from '../trakt';
import { fetch } from '../utils';

/**
 * Countries api namespace
 */
export class Countries implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/countries`,
      client: config.client,
    };
  }

  /**
   * Gets list of all movie countries
   * @returns
   */
  listMovies() {
    return this.listCountries(this.config, 'movies');
  }

  /**
   * Gets list of all show countries
   * @returns
   */
  listShows() {
    return this.listCountries(this.config, 'shows');
  }

  private async listCountries({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<Country[]>(client, url);

    return response;
  }
}
