import { TraktApiContent } from '../traktTypes';

export type RecommendedPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all';

export interface RecommendedBase {
  user_count: number;
}

export interface RecommendedMovie extends RecommendedBase {
  movie: TraktApiContent;
}

export interface RecommendedShow extends RecommendedBase {
  show: TraktApiContent;
}
