import { AxiosInstance } from 'axios';
import { WatchedMovie, WatchedShow } from '../trakt';
import { fetch } from '../utils/fetch';

export async function getWatchedShows(client: AxiosInstance, userId: string, accessToken?: string) {
  const url = `https://api.trakt.tv/users/${userId}/watched/shows`;
  const response = await fetch<WatchedShow[]>(client, url, accessToken);

  return response.data;
}

export async function getWatchedMovies(client: AxiosInstance, userId: string, accessToken?: string) {
  const url = `https://api.trakt.tv/users/${userId}/watched/movies`;
  const response = await fetch<WatchedMovie[]>(client, url, accessToken);

  return response.data;
}
