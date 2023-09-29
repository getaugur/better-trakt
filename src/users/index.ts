import { ApiConfig, ApiNamespace } from '../client';
import { MediaNamespace, WatchedMovie, WatchedShow } from '../trakt';
import { fetch, checkRequiredArg, ApiResponse } from '../utils';

/**
 * Users api namespace
 * ```ts
 * const client = new Trakt({ ... });
 *
 * // can now use the namespace: client.users
 * ```
 */
export class Users implements ApiNamespace {
  /**
   * Config for the Users namespace
   */
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/users`,
      client: config.client,
    };
  }

  /**
   * Returns all movies a user has watched sorted by most plays.
   * @param param0
   * @returns all movies a user has watched sorted by most plays.
   */
  watchedMovies({
    userId,
    accessToken,
  }: {
    /**
     * User's id
     */
    userId: string;
    /**
     * trakt access token
     */
    accessToken?: string;
  }): Promise<ApiResponse<WatchedMovie[]>> {
    checkRequiredArg(userId, 'userId', 'string');

    return getUserWatchedMedia<WatchedMovie[]>(this.config, userId, 'movies', accessToken);
  }

  /**
   * Returns all shows a user has watched sorted by most plays.
   * @param param0
   * @returns all shows a user has watched sorted by most plays.
   */
  watchedShows({
    userId,
    accessToken,
  }: {
    /**
     * User's id
     */
    userId: string;
    /**
     * trakt access token
     */
    accessToken?: string;
  }): Promise<ApiResponse<WatchedShow[]>> {
    checkRequiredArg(userId, 'userId', 'string');

    return getUserWatchedMedia<WatchedShow[]>(this.config, userId, 'shows', accessToken);
  }
}

/**
 *
 * @param apiConfig
 * @param userId
 * @param type api namespace
 * @param accessToken
 * @returns
 * @private
 */
export async function getUserWatchedMedia<T>(
  { client, apiUrl }: ApiConfig,
  userId: string,
  type: MediaNamespace,
  accessToken?: string,
) {
  const url = `${apiUrl}/${userId}/watched/${type}`;
  const response = await fetch<T>(client, url, { accessToken });

  return response;
}
