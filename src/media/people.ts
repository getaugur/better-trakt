import { AxiosInstance } from "axios";
import { MoviePeople, ShowPeople } from "../trakt";
import { fetch } from "../utils/fetch";

export async function getShowPeople(client: AxiosInstance, showId: string) {
  const url = `https://api.trakt.tv/shows/${showId}?extended=full`;
  const response = await fetch<ShowPeople>(client, url);

  return response.data;
}

export async function getMoviePeople(client: AxiosInstance, movieId: string) {
  const url = `https://api.trakt.tv/movies/${movieId}?extended=full`;
  const response = await fetch<MoviePeople>(client, url);

  return response.data;
}
