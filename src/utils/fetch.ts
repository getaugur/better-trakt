import { AxiosError, AxiosInstance, AxiosRequestHeaders, AxiosResponseHeaders } from 'axios';
import { TraktHttpError } from './error';

/**
 * Pagination Options
 */
export interface Pagination {
  /**
   * Current page
   */
  page: number;

  /**
   * Items per page
   */
  limit: number;
}

/**
 * Pagination Response Obj
 */
export interface PaginationResponse extends Pagination {
  /**
   * Total number of pages
   */
  pageCount: number;

  /**
   * Total number of items
   */
  itemCount: number;
}

export interface ApiResponse<T> {
  /**
   * Reponse data
   */
  data?: T;

  /**
   * Pagination info
   */
  pagination?: PaginationResponse;

  /**
   * API response headers
   *
   * @remarks
   * Can be useful for things like cache control, ratelimiting, or general debuging
   */
  headers: AxiosResponseHeaders;

  /**
   * Error object in the event of an error
   */
  error?: TraktHttpError;
}

export interface FetchOptions {
  accessToken?: string;
  pagination?: Pagination;
}

/**
 * Custom fetch func for calling trakt api
 * @param client axios instance
 * @param url trakt api uri
 * @param accessToken access token for oauth related actions
 * @returns Specified type or undefined
 * @internal
 */
export async function fetch<T>(client: AxiosInstance, url: string, options?: FetchOptions): Promise<ApiResponse<T>> {
  const headers: AxiosRequestHeaders = {};

  if (options !== undefined && options.accessToken !== undefined)
    headers['Authorization'] = `Bearer ${options.accessToken}`;

  try {
    const response = await client.get<T>(url, {
      headers,
      // parseJson: (text: string) => Bourne.parse(text),
    });

    const res: ApiResponse<T> = {
      data: response.data,
      headers: response.headers,
    };

    if (response.headers['X-Pagination-Page'] !== undefined) {
      res.pagination = {
        page: parseInt(response.headers['X-Pagination-Page']),
        limit: parseInt(response.headers['X-Pagination-Limit']),
        pageCount: parseInt(response.headers['X-Pagination-Page-Count']),
        itemCount: parseInt(response.headers['X-Pagination-Item-Count']),
      };
    }

    return res;
  } catch (e) {
    if (e instanceof AxiosError && e.response !== undefined) {
      // throw new TraktHttpError(e.response.status, e.response.data, e.response.headers);
      return {
        error: new TraktHttpError(e.response.status, e.response.data, e.response.headers),
        headers: e.response.headers,
      };
    }

    // console.error(e);
    throw e;
  }
}
