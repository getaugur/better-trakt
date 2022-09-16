import { ApiConfig, ApiNamespace } from '../client';
import { MoviePeople, MovieSummary_Full, ShowPeople, ShowSummary_Full } from '../trakt';
import { fetch } from '../utils';
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
   * Get details about a show
   * @param showId show id
   * @returns
   */
  summary({ showId }: { showId: string }) {
    checkRequiredArg(showId, 'showId', 'string');

    return getMediaSummary_Full<ShowSummary_Full>(this.config, showId);
  }

  /**
   * Get people from a show
   * @param showId show id
   * @returns
   */
  people({ showId }: { showId: string }) {
    checkRequiredArg(showId, 'showId', 'string');

    return getMediaPeople<ShowPeople>(this.config, showId);
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
   * Get details about a movie
   * @param movieId movie id
   * @returns
   */
  summary({ movieId }: { movieId: string }) {
    checkRequiredArg(movieId, 'movieId', 'string');

    return getMediaSummary_Full<MovieSummary_Full>(this.config, movieId);
  }

  /**
   * Get people from a movie
   * @param movieId movie id
   * @returns
   */
  people({ movieId }: { movieId: string }) {
    checkRequiredArg(movieId, 'movieId', 'string');

    return getMediaPeople<MoviePeople>(this.config, movieId);
  }
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
