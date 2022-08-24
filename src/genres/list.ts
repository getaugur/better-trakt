import { ApiConfig } from '../client';
import { Genre } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listGenres({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
  const url = `${apiUrl}/genres/${type}`;
  const response = await fetch<Genre[]>(client, url);

  return response.data;
}
