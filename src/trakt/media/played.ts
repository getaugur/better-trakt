import { TraktApiContent } from '../traktTypes';

export interface Played_Watched_CollectedBase {
  watcher_count: number;
  play_count: number;
  collected_count: number;
}

export interface Played_Watched_CollectedMovie extends Played_Watched_CollectedBase {
  movie: TraktApiContent;
}

export interface Played_Watched_CollectedShow extends Played_Watched_CollectedBase {
  collector_count: number;
  show: TraktApiContent;
}
