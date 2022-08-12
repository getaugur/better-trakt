import { AxiosInstance } from "axios";
import { WatchedMovie, WatchedShow } from "../trakt";
import { getWatchedMovies, getWatchedShows } from "./watched";

export interface Users {
  watched: {
    movies: (
      userId: string,
      accessToken?: string | undefined
    ) => Promise<WatchedMovie[]>;
    shows: (
      /**
       * Trakt app's client secret
       */ userId: string,
      accessToken?: string | undefined
    ) => Promise<WatchedShow[]>; // api methods
  };
}

export function buildUsers(client: AxiosInstance): Users {
  return {
    watched: {
      /**
       * Gets a users movie watch history
       * @param client axios
       * @param userId trakt user id
       * @param accessToken oauth access token for private accounts
       * @returns
       */
      movies: (userId: string, accessToken?: string) =>
        getWatchedMovies(client, userId, accessToken),

      /**
       * Gets a users show watch history
       * @param client axios
       * @param userId trakt user id
       * @param accessToken oauth access token for private accounts
       * @returns
       */
      shows: (userId: string, accessToken?: string) =>
        getWatchedShows(client, userId, accessToken),
    },
  };
}
