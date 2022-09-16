import { ApiConfig, ApiNamespace } from '../client';
import { WatchedMovie, WatchedShow } from '../trakt';
import { fetch, checkRequiredArg } from '../utils';

/**
 * Users api namespace
 */
export class Users implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/users`,
      client: config.client,
    };
  }

  /**
   * Gets a users movie watch history
   * @param client axios
   * @param userId trakt user id
   * @param accessToken oauth access token for private accounts
   * @returns
   */
  watchedMovies({ userId, accessToken }: { userId: string; accessToken?: string }) {
    checkRequiredArg(userId, 'userId', 'string');

    return getWatchedMedia<WatchedMovie[]>(this.config, userId, 'movies', accessToken);
  }

  /**
   * Gets a users show watch history
   * @param client axios
   * @param userId trakt user id
   * @param accessToken oauth access token for private accounts
   * @returns
   */
  watchedShows({ userId, accessToken }: { userId: string; accessToken?: string }) {
    checkRequiredArg(userId, 'userId', 'string');

    return getWatchedMedia<WatchedShow[]>(this.config, userId, 'shows', accessToken);
  }
}

export async function getWatchedMedia<T>(
  { client, apiUrl }: ApiConfig,
  userId: string,
  type: 'movies' | 'shows',
  accessToken?: string,
) {
  const url = `${apiUrl}/${userId}/watched/${type}`;
  const response = await fetch<T>(client, url, { accessToken });

  return response;
}
