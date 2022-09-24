import { ApiConfig } from '../client';
import { TraktApiContent } from '../trakt';
import { RecommendedPeriod } from '../trakt/media/recommended';
import { Pagination, Filters, fetch } from '../utils';

/**
 *
 * @param ApiConfig
 * @param type
 * @returns
 * @internal
 */
export async function getTrendingMedia<T>(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  },
) {
  const url = `${apiUrl}/${type}/trending`;
  const response = await fetch<T>(client, url, { pagination, filters });

  return response;
}

/**
 *
 * @param ApiConfig
 * @param type
 * @returns
 * @internal
 */
export async function getPopularMedia(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  },
) {
  const url = `${apiUrl}/${type}/popular`;
  const response = await fetch<TraktApiContent[]>(client, url, { pagination, filters });

  return response;
}

/**
 * Gets recommended media for shows and movies
 * @param ApiConfig
 * @param type
 * @param options
 * @returns
 */
export async function getRecommendedMedia<T>(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  },
) {
  const url = `${apiUrl}/${type}/recommended`;
  const response = await fetch<T>(client, url, { pagination, filters, period });

  return response;
}

/**
 * Gets most played media for shows and movies
 * @param ApiConfig
 * @param type
 * @param options
 * @returns
 */
export async function getPlayedMedia<T>(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  },
) {
  const url = `${apiUrl}/${type}/played`;
  const response = await fetch<T>(client, url, { pagination, filters, period });

  return response;
}

/**
 * Gets most anticipated media for shows and movies
 * @param ApiConfig
 * @param type
 * @param options
 * @returns
 */
export async function getAnticipatedMedia<T>(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  },
) {
  const url = `${apiUrl}/${type}/anticipated`;
  const response = await fetch<T>(client, url, { pagination, filters });

  return response;
}

/**
 * Gets most watched (unique users) media for shows and movies
 * @param ApiConfig
 * @param type
 * @param options
 * @returns
 */
export async function getWatchedMedia<T>(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  },
) {
  const url = `${apiUrl}/${type}/watched`;
  const response = await fetch<T>(client, url, { pagination, filters, period });

  return response;
}

/**
 * Gets the media with the biggest box office revenue
 * @param ApiConfig
 * @param type
 * @returns
 */
export async function getBoxOfficeMedia<T>({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
  const url = `${apiUrl}/${type}/watched`;
  const response = await fetch<T>(client, url);

  return response;
}

/**
 * Gets most collected (unique users) media for shows and movies
 * @param ApiConfig
 * @param type
 * @param options
 * @returns
 */
export async function getCollectedMedia<T>(
  { client, apiUrl }: ApiConfig,
  type: 'movies' | 'shows',
  {
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  },
) {
  const url = `${apiUrl}/${type}/collected`;
  const response = await fetch<T>(client, url, { pagination, filters, period });

  return response;
}

/**
 *
 * @param ApiConfig
 * @param movieId
 * @returns
 * @internal
 */
export async function getMediaPeople<T>({ client, apiUrl }: ApiConfig, movieId: string) {
  const url = `${apiUrl}/${movieId}?extended=full`;
  const response = await fetch<T>(client, url);

  return response;
}

/**
 *
 * @param ApiConfig
 * @param showId
 * @returns
 * @internal
 */
export async function getMediaSummary_Full<T>({ client, apiUrl }: ApiConfig, showId: string) {
  const url = `${apiUrl}/${showId}?extended=full`;
  const response = await fetch<T>(client, url);

  return response;
}