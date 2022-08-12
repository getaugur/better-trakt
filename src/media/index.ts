import { AxiosInstance } from "axios";
import {
  MoviePeople,
  MovieSummary_Full,
  ShowPeople,
  ShowSummary_Full,
} from "../trakt";
import { getMoviePeople, getShowPeople } from "./people";
import { getMovieSummary_Full, getShowSummary_Full } from "./summary";

export interface Shows {
  summary: (showId: string) => Promise<ShowSummary_Full>;
  people: (showId: string) => Promise<ShowPeople>;
}

export interface Movies {
  summary: (movieId: string) => Promise<MovieSummary_Full>;
  people: (movieId: string) => Promise<MoviePeople>;
}

/**
 *
 * @private
 * @param client
 * @returns
 */
export function buildShows(client: AxiosInstance): Shows {
  return {
    /**
     * Get details about a show
     * @param showId
     * @returns
     */
    summary: (showId) => getShowSummary_Full(client, showId),
    /**
     * Get people from a show
     * @param showId
     * @returns
     */
    people: (showId) => getShowPeople(client, showId),
  };
}

/**
 *
 * @private
 * @param client
 * @returns
 */
export function buildMovies(client: AxiosInstance): Movies {
  return {
    /**
     * Get details about a movie
     * @param movieId
     * @returns
     */
    summary: (movieId) => getMovieSummary_Full(client, movieId),
    /**
     * Get people from a movie
     * @param movieId
     * @returns
     */
    people: (movieId) => getMoviePeople(client, movieId),
  };
}
