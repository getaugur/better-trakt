import { TraktApiContent } from '../traktTypes';

export type UpdatedIDs = number[];

export type UpdatedStartDate = string;

export interface UpdatesBase {
  updated_at: string;
}

export interface UpdatesMovie extends UpdatesBase {
  movie: TraktApiContent;
}

export interface UpdatesShow extends UpdatesBase {
  show: TraktApiContent;
}
