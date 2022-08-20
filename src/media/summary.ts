import { ApiConfig } from '../client';
import { MovieSummary_Full, ShowSummary_Full } from '../trakt';
import { fetch } from '../utils/fetch';

export async function getShowSummary_Full({ client, apiUrl }: ApiConfig, showId: string) {
  const url = `${apiUrl}/shows/${showId}?extended=full`;
  const response = await fetch<ShowSummary_Full>(client, url);

  return response.data;
}

export async function getMovieSummary_Full({ client, apiUrl }: ApiConfig, movieId: string) {
  const url = `${apiUrl}/movies/${movieId}?extended=full`;
  const response = await fetch<MovieSummary_Full>(client, url);

  return response.data;
}
