import { TraktApiContent } from '../traktTypes';

export interface PlayedBase {
  watcher_count: number;
  play_count: number;
  collected_count: number;
}

export interface PlayedMovie extends PlayedBase {
  movie: TraktApiContent;
}

export interface PlayedShow extends PlayedBase {
  collector_count: number;
  show: TraktApiContent;
}
