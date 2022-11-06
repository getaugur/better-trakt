import { TraktApiContent } from '../traktTypes';

export interface AnticipatedBase {
  list_count: number;
}

export interface AnticipatedMovie extends AnticipatedBase {
  movie: TraktApiContent;
}

export interface AnticipatedShow extends AnticipatedBase {
  show: TraktApiContent;
}
