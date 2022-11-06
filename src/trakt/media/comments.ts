import { UserProfile } from '../users';

/**
 * 'Base' comment sort types, used by Lists api
 */
export type CommentSortByBase = 'newest' | 'oldest' | 'likes' | 'replies';

/**
 * Comment sort types found only in show and movie apis
 */
export type CommentSortByMediaItems = 'highest' | 'lowest' | 'plays';

/**
 * Combined comment sort types for use by show and movie apis
 */
export type CommentSortByMedia = CommentSortByBase | CommentSortByMediaItems;

/**
 * A comment on Trakt
 */
export interface Comment {
  /**
   * Comment Id
   */
  id: number;
  /**
   * Id of parent
   */
  parent_id: number;
  /**
   * ISO string for time created at
   */
  created_at: string;
  /**
   * ISO string for time last updated at
   */
  updated_at: string;
  /**
   * Actual comment
   */
  comment: string;
  /**
   * If a spoiler
   */
  spoiler: boolean;
  /**
   * If a review
   */
  review: boolean;
  /**
   * Number of replies
   */
  replies: number;
  /**
   * Number of likes on comment
   */
  likes: number;
  /**
   * Poster's stats
   */
  user_stats: {
    /**
     * User's rating of media
     */
    rating: number;
    /**
     * Number of plays the user has for the media
     */
    play_count: number;
    /**
     * Number of times user has completed the media
     */
    completed_count: 1;
  };
  /**
   * Poster's profile
   */
  user: UserProfile;
}
