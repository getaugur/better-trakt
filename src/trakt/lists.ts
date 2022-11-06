import { TraktApiIds, TraktApiContent } from './traktTypes';
import { UserProfile } from './users';

/**
 * "List" item from the popular & trending endpoints
 */
export interface PopularTrendingList {
  like_count: number;
  comment_count: number;
  list: List;
}

/**
 * A list
 */
export interface List {
  name: string;
  description: string;
  privacy: string;
  type: string;
  display_numbers: boolean;
  allow_comments: boolean;
  sort_by: string;
  sort_how: string;
  created_at: string;
  updated_at: string;
  item_count: number;
  comment_count: number;
  likes: number;
  ids: TraktApiIds;
  user: UserProfile;
}

/**
 * User who liked a list
 */
export interface ListLike {
  liked_at: string;
  user: UserProfile;
}

export type ListItemType = 'movie' | 'show' | 'season' | 'episode' | 'person';

/**
 * Item in a list
 */
export interface ListItem {
  rank: number;
  id: number;
  listed_at: string;
  type: ListItemType;
  movie?: TraktApiContent;
  show?: TraktApiContent;
  season?: ListSeason;
  episode?: ListEpisode;
  person?: ListPerson;
}

export interface ListEpisode {
  season: number;
  number: number;
  title: string;
  ids: TraktApiIds;
}

export interface ListSeason {
  number: number;
  ids: TraktApiIds;
}

export interface ListPerson {
  name: string;
  ids: TraktApiIds;
}
