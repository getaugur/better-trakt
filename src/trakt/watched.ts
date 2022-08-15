import { TraktApiShowSeason, TraptApiContent } from './traktTypes';

/**
 * Shared data between watched movies and shows
 */
export interface WatchedBase {
  plays: number;
  last_watched_at: string;
  last_updated_at: string;
}

/**
 * A movie returned from the users watched api
 */
export interface WatchedMovie extends WatchedBase {
  movie: TraptApiContent;
}

/**
 * A show returned from the users watched api
 */
export interface WatchedShow extends WatchedBase {
  show: TraptApiContent;
  seasons?: TraktApiShowSeason[];
}
