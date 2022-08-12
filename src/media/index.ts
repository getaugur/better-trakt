import { AxiosInstance } from "axios";
import { MovieSummary_Full, ShowSummary_Full } from "../trakt";
import { getMovieSummary_Full, getShowSummary_Full } from "./summary";

export interface Shows {
  summary: (showId: string) => Promise<ShowSummary_Full>;
}

export interface Movies {
  summary: (movieId: string) => Promise<MovieSummary_Full>;
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
  };
}
