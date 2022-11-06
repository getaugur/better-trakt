import { TraktApiContent } from '../traktTypes';

export interface TrendingMediaBase {
  watchers: number;
}

export interface TrendingMovie extends TrendingMediaBase {
  movie: TraktApiContent;
}

export interface TrendingShow extends TrendingMediaBase {
  show: TraktApiContent;
}
