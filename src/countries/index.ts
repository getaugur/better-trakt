import { ApiConfig, ApiNamespace } from '../client';
import { Country } from '../trakt';
import { ApiResponse, fetch } from '../utils';

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
   * Get a list of all movie countries, including names and codes.
   * @returns
   */
  listMovies(): Promise<ApiResponse<Country[]>> {
    return this.listCountries(this.config, 'movies');
  }

  /**
   * Get a list of all show countries, including names and codes.
   * @returns
   */
  listShows(): Promise<ApiResponse<Country[]>> {
    return this.listCountries(this.config, 'shows');
  }

  private async listCountries({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<Country[]>(client, url);

    return response;
  }
}
