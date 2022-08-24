import { ApiConfig } from '../client';
import { Country } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listCountries({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
  const url = `${apiUrl}/${type}`;
  const response = await fetch<Country[]>(client, url);

  return response.data;
}
