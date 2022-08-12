import { AxiosInstance } from "axios";
import { MovieSummary_Full, ShowSummary_Full } from "../trakt";
import { fetch } from "../utils/fetch";

export async function getShowSummary_Full(
  client: AxiosInstance,
  showId: string
) {
  const url = `https://api.trakt.tv/shows/${showId}?extended=full`;
  const response = await fetch<ShowSummary_Full>(client, url);

  return response.data;
}

export async function getMovieSummary_Full(
  client: AxiosInstance,
  movieId: string
) {
  const url = `https://api.trakt.tv/movies/${movieId}?extended=full`;
  const response = await fetch<MovieSummary_Full>(client, url);

  return response.data;
}
