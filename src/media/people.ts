import { ApiConfig } from '../client';
import { MoviePeople, ShowPeople } from '../trakt';
import { fetch } from '../utils/fetch';

export async function getShowPeople({ client, apiUrl }: ApiConfig, showId: string) {
  const url = `${apiUrl}/${showId}?extended=full`;
  const response = await fetch<ShowPeople>(client, url);

  return response.data;
}

export async function getMoviePeople({ client, apiUrl }: ApiConfig, movieId: string) {
  const url = `${apiUrl}/${movieId}?extended=full`;
  const response = await fetch<MoviePeople>(client, url);

  return response.data;
}
