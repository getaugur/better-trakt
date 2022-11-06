import { ApiConfig, ApiNamespace } from '../client';
import { Genre } from '../trakt';
import { ApiResponse, fetch } from '../utils';

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
   * Get a list of all movie genres, including names and slugs.
   * @returns
   */
  listMovies(): Promise<ApiResponse<Genre[]>> {
    return this.listGenres(this.config, 'movies');
  }

  /**
   * Get a list of all show genres, including names and slugs.
   * @returns
   */
  listShows(): Promise<ApiResponse<Genre[]>> {
    return this.listGenres(this.config, 'shows');
  }

  private async listGenres({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<Genre[]>(client, url);

    return response;
  }
}
