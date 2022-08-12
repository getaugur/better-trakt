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

export interface TraktApiPerson {
  name: string;
  ids: TraktApiIds;
}

export interface TraktApiCastMember {
  characters: string[];
  person: TraktApiPerson;
}

export interface TraktApiShowCastMember extends TraktApiCastMember {
  episode_count: number;
}

export interface TraktApiCrewMember {
  jobs: string[];
  person: TraktApiPerson;
}

export interface TraktApiShowCrewMember extends TraktApiCastMember {
  episode_count: number;
}

export interface TraktApiShowCrew {
  art?: TraktApiShowCrewMember[];
  production?: TraktApiShowCrewMember[];
  sound?: TraktApiShowCrewMember[];
  "visual effects"?: TraktApiShowCrewMember[];
  "costume & make-up"?: TraktApiShowCrewMember[];
  writing?: TraktApiShowCrewMember[];
  directing?: TraktApiShowCrewMember[];
  camera?: TraktApiShowCrewMember[];
  lighting?: TraktApiShowCrewMember[];
  editing?: TraktApiShowCrewMember[];
  "created by"?: TraktApiShowCrewMember[];
}

export interface TraktApiShowPeople {
  cast?: TraktApiShowCastMember[];
  crew?: TraktApiShowCrew;
}

export interface TraktApiMovieCrew {
  production?: TraktApiCrewMember[];
  art?: TraktApiCrewMember[];
  crew?: TraktApiCrewMember[];
  "costume & make-up"?: TraktApiCrewMember[];
  directing?: TraktApiCrewMember[];
  writing?: TraktApiCrewMember[];
  sound?: TraktApiCrewMember[];
  camera?: TraktApiCrewMember[];
  "visual effects"?: TraktApiCrewMember[];
  lighting?: TraktApiCrewMember[];
  editing?: TraktApiCrewMember[];
}

export interface TraktApiMoviePeople {
  cast?: TraktApiCastMember[];
  crew?: TraktApiMovieCrew;
}
