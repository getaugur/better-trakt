import { ApiConfig } from '../client';
import { WatchedMovie, WatchedShow } from '../trakt';
import { fetch } from '../utils/fetch';

export async function getWatchedShows({ client, apiUrl }: ApiConfig, userId: string, accessToken?: string) {
  const url = `${apiUrl}/${userId}/watched/shows`;
  const response = await fetch<WatchedShow[]>(client, url, { accessToken });

  return response;
}

export async function getWatchedMovies({ client, apiUrl }: ApiConfig, userId: string, accessToken?: string) {
  const url = `${apiUrl}/${userId}/watched/movies`;
  const response = await fetch<WatchedMovie[]>(client, url, { accessToken });

  return response;
}
