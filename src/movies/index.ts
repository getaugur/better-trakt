import { ApiConfig, ApiNamespace } from '../client';
import {
  getMediaSummary_Full,
  getMediaPeople,
  getTrendingMedia,
  getPopularMedia,
  getRecommendedMedia,
  getPlayedMedia,
  getWatchedMedia,
  getCollectedMedia,
} from '../media';
import {
  MovieSummary_Full,
  MoviePeople,
  TrendingMovie,
  TraktApiContent,
  RecommendedPeriod,
  RecommendedMovie,
  Played_Watched_CollectedMovie,
} from '../trakt';
import { ApiResponse, checkRequiredArg, Pagination, Filters } from '../utils';

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
  }): Promise<ApiResponse<Played_Watched_CollectedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getPlayedMedia<Played_Watched_CollectedMovie[]>(this.config, 'movies', { pagination, filters, period });
  }

  /**
   * Returns the most collected (unique users) shows in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
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
  }): Promise<ApiResponse<Played_Watched_CollectedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getWatchedMedia<Played_Watched_CollectedMovie[]>(this.config, 'movies', { pagination, filters, period });
  }

  /**
   * Returns the most collected (unique users) movies in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
   * @param param0
   * @returns
   */
  collected({
    pagination,
    filters,
    period,
  }: {
    pagination: Pagination;
    filters?: Filters;
    period?: RecommendedPeriod;
  }): Promise<ApiResponse<Played_Watched_CollectedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getCollectedMedia<Played_Watched_CollectedMovie[]>(this.config, 'movies', { pagination, filters, period });
  }
}
