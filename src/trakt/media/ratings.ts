export interface MediaRating {
  /**
   * Overall rating
   */
  rating: number;
  /**
   * Number of votes
   */
  votes: number;
  /**
   * Distibution of votes
   */
  distribution: {
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    '10': number;
  };
}
