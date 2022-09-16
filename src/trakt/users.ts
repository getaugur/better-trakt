import { TraktApiIds, TraktApiContent } from './traktTypes';

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
  movie: TraktApiContent;
}

/**
 * A show returned from the users watched api
 */
export interface WatchedShow extends WatchedBase {
  show: TraktApiContent;
  seasons?: WatchedShowSeason[];
}

/**
 * A season for a watched show
 */
export interface WatchedShowSeason {
  number: number;
  episodes: WatchedShowEpisode[];
}

/**
 * An episode for a watched show
 */
export interface WatchedShowEpisode {
  number: number;
  plays: number;
  last_watched_at: string;
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
