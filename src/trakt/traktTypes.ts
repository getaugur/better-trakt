/**
 * Std id object with all ids that can be provided
 */
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
export interface TraktApiContent {
  title: string;
  year: number;
  ids: TraktApiIds;
}
