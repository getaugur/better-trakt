import { ApiNamespace, ApiConfig } from '../client';
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
  getListsWithMedia,
  getMediaRating,
  getRelatedMedia,
  getMediaStats,
  getWatchingMedia,
} from '../media';
import {
  ShowSummary_Full,
  ShowPeople,
  TrendingShow,
  TraktApiContent,
  RecommendedPeriod,
  RecommendedShow,
  Played_Watched_CollectedShow,
  AnticipatedShow,
  BoxOfficeShow,
  UpdatedStartDate,
  UpdatesShow,
  UpdatedIDs,
  Alias,
  ShowCertification,
  ShowTranslation,
  CommentSortByMedia,
  Comment,
  ListQueryByType,
  MediaRating,
  List,
  ShowStats,
  UserProfile,
} from '../trakt';
import { ApiResponse, checkRequiredArg, Pagination, Filters, fetch } from '../utils';

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
  }): Promise<ApiResponse<Played_Watched_CollectedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getPlayedMedia<Played_Watched_CollectedShow[]>(this.config, 'shows', { pagination, filters, period });
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
  }): Promise<ApiResponse<Played_Watched_CollectedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getWatchedMedia<Played_Watched_CollectedShow[]>(this.config, 'shows', { pagination, filters, period });
  }

  /**
   * Returns the most watched (unique users) shows in the specified time period, defaulting to weekly. All stats are relative to the specific time period.
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
  }): Promise<ApiResponse<Played_Watched_CollectedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getCollectedMedia<Played_Watched_CollectedShow[]>(this.config, 'shows', { pagination, filters, period });
  }

  /**
   * Returns the most anticipated shows based on the number of lists a show appears on.
   * @param param0
   * @returns
   */
  anticipated({
    pagination,
    filters,
  }: {
    pagination: Pagination;
    filters?: Filters;
  }): Promise<ApiResponse<AnticipatedShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getAnticipatedMedia<AnticipatedShow[]>(this.config, 'shows', { pagination, filters });
  }

  /**
   * Returns the top 10 grossing shows in the U.S. box office last weekend. Updated every Monday morning.
   * @returns
   */
  boxOffice(): Promise<ApiResponse<BoxOfficeShow[]>> {
    return getBoxOfficeMedia<BoxOfficeShow[]>(this.config, 'shows');
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
  }): Promise<ApiResponse<UpdatesShow[]>> {
    checkRequiredArg(pagination, 'pagination', 'object');

    return getUpdatesMedia<UpdatesShow[]>(this.config, 'shows', { pagination, startDate });
  }

  /**
   * Returns all movie Trakt IDs updated since the specified UTC date and time.
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

    return getUpdatedIDsMedia(this.config, 'shows', { pagination, startDate });
  }

  /**
   * Returns all title aliases for a show. Includes country where name is different.
   * @param param0
   * @returns
   */
  aliases({ showID }: { showID: string }): Promise<ApiResponse<Alias[]>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getAliasesMedia(this.config, 'shows', { mediaID: showID });
  }

  /**
   * Gets all content certifications for a show, including the country.
   * @param param0
   * @returns all content certifications for a show
   */
  async certifications({ showID }: { showID: string }) {
    const url = `${this.config.apiUrl}/shows/${showID}/certifications`;
    const response = await fetch<ShowCertification[]>(this.config.client, url);

    return response;
  }

  /**
   * Returns all translations for a show, including language and translated values for title and overview.
   * @param param0
   * @returns
   */
  async translations({
    showID,
    language,
  }: {
    showID: string;
    language?: string;
  }): Promise<ApiResponse<ShowTranslation[]>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getMediaTranslations<ShowTranslation[]>(this.config, 'shows', showID, language);
  }

  /**
   * Returns all top level comments for a movie. By default, the newest comments are returned first.
   * Other sorting options include oldest, most likes, most replies, highest rated, lowest rated, and most plays.
   * @param param0
   * @returns
   */
  async comments({
    showID,
    pagination,
    sort,
  }: {
    showID: string;
    pagination: Pagination;
    sort?: CommentSortByMedia;
  }): Promise<ApiResponse<Comment[]>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getMediaComments(this.config, 'shows', showID, { pagination, sort });
  }

  /**
   * Returns all lists that contain this show. By default, personal lists are returned sorted by the most popular.
   * @param param0
   * @returns
   */
  async lists({
    showID,
    pagination,
    sort,
    type,
  }: {
    showID: string;
    pagination: Pagination;
    sort?: CommentSortByMedia;
    type?: ListQueryByType;
  }): Promise<ApiResponse<List[]>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getListsWithMedia(this.config, 'shows', showID, { pagination, sort, type });
  }

  /**
   * Returns rating (between 0 and 10) and distribution for a show.
   * @param param0
   * @returns
   */
  async ratings({ showID }: { showID: string }): Promise<ApiResponse<MediaRating>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getMediaRating(this.config, 'shows', showID);
  }

  /**
   * Returns related and similar shows.
   * @param param0
   * @returns
   */
  async related({
    showID,
    pagination,
  }: {
    showID: string;
    pagination: Pagination;
  }): Promise<ApiResponse<TraktApiContent[]>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getRelatedMedia(this.config, 'shows', showID, { pagination });
  }

  /**
   * Returns lots of show stats.
   * @param param0
   * @returns
   */
  async stats({ showID }: { showID: string }): Promise<ApiResponse<ShowStats>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getMediaStats<ShowStats>(this.config, 'shows', showID);
  }

  /**
   * Returns all users watching this show right now.
   * @param param0
   * @returns
   */
  async watching({ showID }: { showID: string }): Promise<ApiResponse<UserProfile[]>> {
    checkRequiredArg(showID, 'showID', 'string');

    return getWatchingMedia(this.config, 'shows', showID);
  }
}
