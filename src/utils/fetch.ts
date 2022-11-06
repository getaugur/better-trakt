import { AxiosError, AxiosInstance, AxiosRequestHeaders, AxiosResponseHeaders } from 'axios';
import { CommentSortByMedia, RecommendedPeriod, ReleasesCountry, UpdatedStartDate } from '../trakt';
import { buildUrl } from './buildUrl';
import { TraktHttpError } from './error';

export interface Filters {
  /**
   * Search titles and descriptions.
   * @example batman
   */
  query?: string;

  /**
   * 4 digit year or range of years.
   * @example 2016
   */
  years?: string;

  /**
   * Genre slugs.
   * @example action
   * @see {@link Genre.slug | Genre slug}
   */
  genres?: string[];

  /**
   * 2 character language code.
   * @example en
   */
  languages?: string[];

  /**
   * 2 character country code.
   * @example us
   */
  countries?: string[];

  /**
   * Range in minutes.
   * @example 30-90
   */
  runtimes?: string;

  /**
   * Studio slugs.
   * @example marvel-studios
   */
  studios?: string[];
}

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
  /**
   * Token to access trakt api
   */
  accessToken?: string;
  /**
   * Pagination settings
   */
  pagination?: Pagination;
  /**
   * filter options
   */
  filters?: Filters;
  /**
   * Period to pull from
   */
  period?: RecommendedPeriod;
  /**
   * Start date
   */
  startDate?: UpdatedStartDate;
  /**
   * Specify country to look for
   */
  country?: ReleasesCountry;
  /**
   * Specify a language
   */
  language?: string;
  /**
   * Sorting options
   *
   * (This is just the most inclusive type, not always this permissive.)
   */
  sort?: CommentSortByMedia;
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
    const response = await client.get<T>(buildUrl(url, options), {
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
