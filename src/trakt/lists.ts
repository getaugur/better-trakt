import { Episode } from './episodes';
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
 * Type of list
 */
export type ListType = 'personal' | 'official' | 'watchlists' | 'recommendations';

/**
 * All the types of a list you can search for
 */
export type ListQueryByType = ListType | 'all';

/**
 * A list
 */
export interface List {
  name: string;
  description: string;
  privacy: string;
  type: ListType;
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
  episode?: Episode;
  person?: ListPerson;
}

export interface ListSeason {
  number: number;
  ids: TraktApiIds;
}

export interface ListPerson {
  name: string;
  ids: TraktApiIds;
}
