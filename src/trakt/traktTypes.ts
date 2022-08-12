export interface TraktApiIds {
  trakt: number;
  slug: string;
  imdb?: string;
  tmdb?: number;
  tvdb?: number;
  tvrage?: number;
}

/**
 * A generic media object used by trakt
 */
export interface TraptApiContent {
  title: string;
  year: number;
  ids: TraktApiIds;
}

export interface TraktApiShowEpisode {
  number: number;
  plays: number;
  last_watched_at: string;
}
export interface TraktApiShowSeason {
  number: number;
  episodes: TraktApiShowEpisode[];
}
