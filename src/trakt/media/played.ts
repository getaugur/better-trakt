import { TraktApiContent } from '../traktTypes';

export interface Played_WatchedBase {
  watcher_count: number;
  play_count: number;
  collected_count: number;
}

export interface Played_WatchedMovie extends Played_WatchedBase {
  movie: TraktApiContent;
}

export interface Played_WatchedShow extends Played_WatchedBase {
  collector_count: number;
  show: TraktApiContent;
}
