import { ApiConfig } from '../client';
import { Language } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listLanguages({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
  const url = `${apiUrl}/${type}`;
  const response = await fetch<Language[]>(client, url);

  return response;
}
