import { TraktApiIds, TraktApiShowSeason, TraptApiContent } from './traktTypes';

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

/**
 * A user's profile
 */
export interface UserProfile {
  username: string;
  private: boolean;
  name: string;
  vip: boolean;
  vip_ep: boolean;
  ids: TraktApiIds;
}
