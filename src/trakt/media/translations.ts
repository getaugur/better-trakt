export interface ShowTranslation {
  /**
   * Localized title
   */
  title: string;

  /**
   * Localized overview
   */
  overview: string;

  /**
   * Language that content was localized too
   */
  language: string;

  /**
   * Country for localization
   */
  country: string;
}

export interface MovieTranslation extends ShowTranslation {
  /**
   * Localized tagline
   */
  tagline: string;
}
