import { ApiConfig, ApiNamespace } from '../client';
import { Comment, CommentSortByBase, List, ListItem, ListItemType, ListLike, PopularTrendingList } from '../trakt';
import { ApiResponse, fetch, Pagination } from '../utils';
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
  async trending({ pagination }: { pagination: Pagination }): Promise<ApiResponse<PopularTrendingList[]>> {
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
  async popular({ pagination }: { pagination: Pagination }): Promise<ApiResponse<PopularTrendingList[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    const url = `${this.config.apiUrl}/popular`;
    const response = await fetch<PopularTrendingList[]>(this.config.client, url, { pagination });

    return response;
  }

  /**
   * Returns a single list.
   * @param id list id
   * @returns list
   */
  async getList({ id }: { id: string }): Promise<ApiResponse<List>> {
    checkRequiredArg(id, 'id', 'string');

    const url = `${this.config.apiUrl}/${id}`;
    const response = await fetch<List>(this.config.client, url);

    return response;
  }

  /**
   * Returns all users who liked a list.
   * @param id list id
   * @param pagination
   * @returns
   */
  async getLikes({ id, pagination }: { id: string; pagination: Pagination }): Promise<ApiResponse<ListLike[]>> {
    checkRequiredArg(id, 'id', 'string');
    checkRequiredArg(pagination, 'pagination', 'object');

    const url = `${this.config.apiUrl}/${id}/likes`;
    const response = await fetch<ListLike[]>(this.config.client, url, { pagination });

    return response;
  }

  /**
   * Get all items on a personal list.
   * @param id list id
   * @param type
   * @param pagination
   * @returns
   */
  async getItems({
    id,
    pagination,
    type,
  }: {
    id: string;
    pagination?: Pagination;
    type?: ListItemType;
  }): Promise<ApiResponse<ListItem[]>> {
    checkRequiredArg(id, 'id', 'string');

    let url = `${this.config.apiUrl}/${id}/items/`;

    if (type !== undefined) url += `${type}`;

    const response = await fetch<ListItem[]>(this.config.client, url, { pagination });

    return response;
  }

  /**
   * Returns all top level comments for a list.
   * @param id list id
   * @param sort
   * @param pagination
   * @returns
   */
  async getComments({
    id,
    pagination,
    sort,
  }: {
    id: string;
    pagination: Pagination;
    sort?: CommentSortByBase;
  }): Promise<ApiResponse<Comment[]>> {
    checkRequiredArg(id, 'id', 'string');

    const url = `${this.config.apiUrl}/${id}/comments`;

    const response = await fetch<Comment[]>(this.config.client, url, { pagination, sort });

    return response;
  }
}
