import { ApiConfig, ApiNamespace } from '../client';
import { checkRequiredArg } from '../utils/requiredArg';
import { getMoviePeople, getShowPeople } from './people';
import { getMovieSummary_Full, getShowSummary_Full } from './summary';

/**
 * Shows api namespace
 */
export class Shows implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  /**
   * Get details about a show
   * @param showId show id
   * @returns
   */
  summary(showId: string) {
    checkRequiredArg(showId, 'showId', 'string');

    return getShowSummary_Full(this.config, showId);
  }

  /**
   * Get people from a show
   * @param showId show id
   * @returns
   */
  people(showId: string) {
    checkRequiredArg(showId, 'showId', 'string');

    return getShowPeople(this.config, showId);
  }
}

/**
 * Movies api namespace
 */
export class Movies implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  /**
   * Get details about a movie
   * @param movieId movie id
   * @returns
   */
  summary(movieId: string) {
    checkRequiredArg(movieId, 'movieId', 'string');

    return getMovieSummary_Full(this.config, movieId);
  }

  /**
   * Get people from a movie
   * @param movieId movie id
   * @returns
   */
  people(movieId: string) {
    checkRequiredArg(movieId, 'movieId', 'string');

    return getMoviePeople(this.config, movieId);
  }
}
