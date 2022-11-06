import { TraktApiContent } from '../traktTypes';

export interface BoxOfficeBase {
  revenue: number;
}

export interface BoxOfficeMovie extends BoxOfficeBase {
  movie: TraktApiContent;
}

export interface BoxOfficeShow extends BoxOfficeBase {
  show: TraktApiContent;
}
