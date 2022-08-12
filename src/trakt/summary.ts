import { TraptApiContent } from "./traktTypes";

export interface Summary_Full extends TraptApiContent {
  overview: string;
  runtime: number;
  country: string;
  trailer?: string;
  homepage?: string;
  status: string;
  rating: number;
  votes: number;
  comment_count: number;
  language: string;
  available_translations: string[];
  genres: string[];
  certification: string;
}

export interface ShowSummary_Full extends Summary_Full {
  first_aired: string;
  airs: {
    day: string;
    time: string;
    timezone: string;
  };
  aired_episodes: number;
  network: string;
}

export interface MovieSummary_Full extends Summary_Full {
  tagline: string;
  released: string;
}
