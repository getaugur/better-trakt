import { ApiConfig, ApiNamespace } from '../client';
import {
  MoviePeople,
  MovieSummary_Full,
  Played_WatchedMovie,
  Played_WatchedShow,
  RecommendedMovie,
  RecommendedPeriod,
  RecommendedShow,
  ShowPeople,
  ShowSummary_Full,
  TraktApiContent,
  TrendingMovie,
  TrendingShow,
} from '../trakt';
import { ApiResponse, fetch, Filters, Pagination } from '../utils';
import { checkRequiredArg } from '../utils/requiredArg';

/**
 * Shows api namespace
 */
export class Shows implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/shows`,
      client: config.client,
    };
  }

  /**
   * Returns a single shows's details.
   * @param showId show id
   * @returns
   */
  summary({ showId }: { showId: string }): Promise<ApiResponse<ShowSummary_Full>> {
    checkRequiredArg(showId, 'showId', 'string');

    return getMediaSummary_Full<ShowSummary_Full>(this.config, showId);
  }

  /**
   * Returns all cast and crew for a show.
   * @param showId show id
   * @returns
   */
  people({ showId }: { showId: string }): Promise<ApiResponse<ShowPeople>> {
    checkRequiredArg(showId, 'showId', 'string');

    return getMediaPeople<ShowPeople>(this.config, showId);
  }

  /**
   * Returns all shows being watched right now.
   * @param pagination
   * @returns
   */
  trending({
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  }): Promise<ApiResponse<TrendingShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getTrendingMedia<TrendingShow[]>(this.config, 'shows', { pagination, filters });
  }

  /**
   * Returns the most popular shows.
   * @param pagination
   * @returns
   */
  popular({
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  }): Promise<ApiResponse<TraktApiContent[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getPopularMedia(this.config, 'shows', { pagination, filters });
  }

  /**
   * Returns the most recommended shows in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  recommended({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<RecommendedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getRecommendedMedia<RecommendedShow[]>(this.config, 'shows', { pagination, filters, period });
  }

  /**
   * Returns the most played (a single user can watch multiple episodes multiple times) shows in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  played({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<Played_WatchedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getPlayedMedia<Played_WatchedShow[]>(this.config, 'shows', { pagination, filters, period });
  }

  /**
   * Returns the most watched (unique users) shows in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  watched({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<Played_WatchedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getWatchedMedia<Played_WatchedShow[]>(this.config, 'shows', { pagination, filters, period });
  }
}

/**
 * Movies api namespace
 */
export class Movies implements ApiNamespace {
  config: ApiConfig;
  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/movies`,
      client: config.client,
    };
  }

  /**
   * Returns a single movie's details.
   * @param movieId movie id
   * @returns
   */
  summary({ movieId }: { movieId: string }): Promise<ApiResponse<MovieSummary_Full>> {
    checkRequiredArg(movieId, 'movieId', 'string');

    return getMediaSummary_Full<MovieSummary_Full>(this.config, movieId);
  }

  /**
   * Returns all cast and crew for a movie.
   * @param movieId movie id
   * @returns
   */
  people({ movieId }: { movieId: string }): Promise<ApiResponse<MoviePeople>> {
    checkRequiredArg(movieId, 'movieId', 'string');

    return getMediaPeople<MoviePeople>(this.config, movieId);
  }

  /**
   * Returns all movies being watched right now.
   * @param pagination
   * @returns
   */
  trending({
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  }): Promise<ApiResponse<TrendingMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getTrendingMedia<TrendingMovie[]>(this.config, 'movies', { pagination, filters });
  }

  /**
   * Returns the most popular movies.
   * @param pagination
   * @returns
   */
  popular({
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  }): Promise<ApiResponse<TraktApiContent[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getPopularMedia(this.config, 'movies', { pagination, filters });
  }

  /**
   * Returns the most recommended movies in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  recommended({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<RecommendedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getRecommendedMedia<RecommendedMovie[]>(this.config, 'movies', { pagination, filters, period });
  }

  /**
   * Returns the most played (a single user can watch multiple times) movies in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  played({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<Played_WatchedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getPlayedMedia<Played_WatchedMovie[]>(this.config, 'movies', { pagination, filters, period });
  }

  /**
   * Returns the most watched (unique users) movies in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  watched({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<Played_WatchedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getWatchedMedia<Played_WatchedMovie[]>(this.config, 'movies', { pagination, filters, period });
  }
}

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
