import { TraktApiIds } from './traktTypes';

export interface Episode {
  season: number;
  number: number;
  title: string;
  ids: TraktApiIds;
}
