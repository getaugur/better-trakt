import { ApiConfig, ApiNamespace } from '../client';
import { List, PopularTrendingList } from '../trakt/lists';
import { fetch, Pagination } from '../utils';
import { checkRequiredArg } from '../utils/requiredArg';

/**
 * Lists api namespace
 */
export class Lists implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/lists`,
      client: config.client,
    };
  }

  /**
   * Returns all lists with the most likes and comments over the last 7 days.
   * @param pagination
   * @returns lists
   */
  async trending(pagination: Pagination) {
    checkRequiredArg(pagination, 'pagination', 'object');

    const url = `${this.config.apiUrl}/trending`;
    const response = await fetch<PopularTrendingList[]>(this.config.client, url, { pagination });

    return response;
  }

  /**
   * Returns the most popular lists.
   * @param pagination
   * @returns lists
   */
  async popular(pagination: Pagination) {
    checkRequiredArg(pagination, 'pagination', 'object');

    const url = `${this.config.apiUrl}/popular`;
    const response = await fetch<PopularTrendingList[]>(this.config.client, url, { pagination });

    return response;
  }

  /**
   * Returns a single list.
   * @returns list
   */
  async getList(id: string) {
    checkRequiredArg(id, 'id', 'string');

    const url = `${this.config.apiUrl}/${id}`;
    const response = await fetch<List>(this.config.client, url);

    return response;
  }
}
