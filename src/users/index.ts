import { AxiosInstance } from "axios";
import { ApiNamespace } from "../client";
import { getWatchedMovies, getWatchedShows } from "./watched";

/**
 * Users api namespace
 */
export class Users implements ApiNamespace {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets a users movie watch history
   * @param client axios
   * @param userId trakt user id
   * @param accessToken oauth access token for private accounts
   * @returns
   */
  watchedMovies(userId: string, accessToken?: string) {
    return getWatchedMovies(this.client, userId, accessToken);
  }

  /**
   * Gets a users show watch history
   * @param client axios
   * @param userId trakt user id
   * @param accessToken oauth access token for private accounts
   * @returns
   */
  watchedShows(userId: string, accessToken?: string) {
    return getWatchedShows(this.client, userId, accessToken);
  }
}
