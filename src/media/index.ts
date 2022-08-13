import { AxiosInstance } from "axios";
import { ApiNamespace } from "../client";
import { MoviePeople, MovieSummary_Full } from "../trakt";
import { getMoviePeople, getShowPeople } from "./people";
import { getMovieSummary_Full, getShowSummary_Full } from "./summary";

/**
 * Shows api namespace
 */
export class Shows implements ApiNamespace {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get details about a show
   * @param showId show id
   * @returns
   */
  summary(showId: string) {
    return getShowSummary_Full(this.client, showId);
  }

  /**
   * Get people from a show
   * @param showId show id
   * @returns
   */
  people(showId: string) {
    return getShowPeople(this.client, showId);
  }
}

/**
 * Movies api namespace
 */
export class Movies implements ApiNamespace {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Get details about a movie
   * @param movieId movie id
   * @returns
   */
  summary(movieId: string) {
    return getMovieSummary_Full(this.client, movieId);
  }

  /**
   * Get people from a movie
   * @param movieId movie id
   * @returns
   */
  people(movieId: string) {
    return getMoviePeople(this.client, movieId);
  }
}
