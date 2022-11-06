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
  getAnticipatedMedia,
  getBoxOfficeMedia,
  getUpdatesMedia,
  getUpdatedIDsMedia,
  getAliasesMedia,
  getMediaTranslations,
  getMediaComments,
} from '../media';
import {
  MovieSummary_Full,
  MoviePeople,
  TrendingMovie,
  TraktApiContent,
  RecommendedPeriod,
  RecommendedMovie,
  Played_Watched_CollectedMovie,
  AnticipatedMovie,
  BoxOfficeMovie,
  UpdatesMovie,
  UpdatedStartDate,
  UpdatedIDs,
  Release,
  ReleasesCountry,
  Alias,
  MovieTranslation,
  CommentSortByMedia,
  Comment,
} from '../trakt';
import { ApiResponse, checkRequiredArg, Pagination, Filters, fetch } from '../utils';

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

  /**
   * Returns the most anticipated movies based on the number of lists a movie appears on.
   * @param param0
   * @returns
   */
  anticipated({
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  }): Promise<ApiResponse<AnticipatedMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getAnticipatedMedia<AnticipatedMovie[]>(this.config, 'movies', { pagination, filters });
  }

  /**
   * Returns the top 10 grossing movies in the U.S. box office last weekend. Updated every Monday morning.
   * @returns
   */
  boxOffice(): Promise<ApiResponse<BoxOfficeMovie[]>> {
    return getBoxOfficeMedia<BoxOfficeMovie[]>(this.config, 'movies');
  }

  /**
   * Returns all shows updated since the specified UTC date and time.
   * We recommended storing the X-Start-Date header you can be efficient using this method moving forward.
   * By default, 10 results are returned. You can send a limit to get up to 100 results per page.
   *
   * **Important!**
   * The start_date is only accurate to the hour, for caching purposes.
   * Please drop the minutes and seconds from your timestamp to help optimize our cached data.
   * For example, use 2021-07-17T12:00:00Z and not 2021-07-17T12:23:34Z.
   *
   * Note: The start_date can only be a maximum of 30 days in the past.
   * @param param0
   * @returns
   */
  updates({
    pagination,
    startDate,
  }: {
    pagination: Pagination;
    startDate?: UpdatedStartDate;
  }): Promise<ApiResponse<UpdatesMovie[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getUpdatesMedia<UpdatesMovie[]>(this.config, 'movies', { pagination, startDate });
  }

  /**
   * Returns all show Trakt IDs updated since the specified UTC date and time.
   * We recommended storing the X-Start-Date header you can be efficient using this method moving forward.
   * By default, 10 results are returned. You can send a limit to get up to 100 results per page.
   *
   * **Important!**
   * The start_date is only accurate to the hour, for caching purposes.
   * Please drop the minutes and seconds from your timestamp to help optimize our cached data.
   * For example, use 2021-07-17T12:00:00Z and not 2021-07-17T12:23:34Z.
   *
   * Note: The start_date can only be a maximum of 30 days in the past.
   * @param param0
   * @returns
   */
  updatedIDs({
    pagination,
    startDate,
  }: {
    pagination: Pagination;
    startDate?: UpdatedStartDate;
  }): Promise<ApiResponse<UpdatedIDs>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getUpdatedIDsMedia(this.config, 'movies', { pagination, startDate });
  }

  /**
   * Returns all title aliases for a movie. Includes country where name is different.
   * @param param0
   * @returns
   */
  aliases({ movieID }: { movieID: string }): Promise<ApiResponse<Alias[]>> {
    checkRequiredArg(movieID, 'movieID', 'string');

    return getAliasesMedia(this.config, 'movies', { mediaID: movieID });
  }

  /**
   * Returns all releases for a movie including country,
   * certification, release date, release type, and note.
   * The release type can be set to unknown, premiere,
   * limited, theatrical, digital, physical, or tv.
   * The note might have optional info such as the film festival
   * name for a premiere release or Blu-ray specs for a physical release.
   * We pull this info from TMDB.
   * @param param0
   * @returns All the releases for a movie
   */
  async releases({
    movieID,
    country,
  }: {
    movieID: string;
    country?: ReleasesCountry;
  }): Promise<ApiResponse<Release[]>> {
    const url = `${this.config.apiUrl}/movies/${movieID}/releases`;
    const response = await fetch<Release[]>(this.config.client, url, { country });

    return response;
  }

  /**
   * Returns all translations for a movie, including language and translated values for title, tagline and overview.
   * @param param0
   * @returns
   */
  async translations({
    movieID,
    language,
  }: {
    movieID: string;
    language?: string;
  }): Promise<ApiResponse<MovieTranslation[]>> {
    checkRequiredArg(movieID, 'movieID', 'string');

    return getMediaTranslations<MovieTranslation[]>(this.config, 'movies', movieID, language);
  }

  /**
   * Returns all top level comments for a movie. By default, the newest comments are returned first.
   * Other sorting options include oldest, most likes, most replies, highest rated, lowest rated, and most plays.
   * @param param0
   * @returns
   */
  async comments({
    movieID,
    pagination,
    sort,
  }: {
    movieID: string;
    pagination: Pagination;
    sort?: CommentSortByMedia;
  }): Promise<ApiResponse<Comment[]>> {
    checkRequiredArg(movieID, 'movieID', 'string');

    return getMediaComments(this.config, 'movies', movieID, { pagination, sort });
  }
}
