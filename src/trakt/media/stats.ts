export interface MovieStats {
  watchers: number;
  plays: number;
  collectors: number;
  comments: number;
  lists: number;
  votes: number;
  recommended: number;
}

export interface ShowStats extends MovieStats {
  collected_episodes: number;
}
