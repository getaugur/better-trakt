import { ApiConfig, ApiNamespace } from '../client';
import { Language } from '../trakt';
import { ApiResponse, fetch } from '../utils';

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
   * Get a list of all movie langauges, including names and codes.
   * @returns
   */
  listMovies(): Promise<ApiResponse<Language[]>> {
    return this.listLanguages(this.config, 'movies');
  }

  /**
   * Get a list of all show langauges, including names and codes.
   * @returns
   */
  listShows(): Promise<ApiResponse<Language[]>> {
    return this.listLanguages(this.config, 'shows');
  }

  private async listLanguages({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<Language[]>(client, url);

    return response;
  }
}
