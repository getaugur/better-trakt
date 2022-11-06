/**
 * This is movie specific
 */

/**
 * A 2 char country code
 * @example
 * `us`
 */
export type ReleasesCountry = string;

/**
 * How a release was released
 */
export type ReleasesType = 'unknown' | 'premiere' | 'limited' | 'theatrical' | 'digital' | 'physical' | 'tv';

export interface Release {
  /**
   * Where this release was released
   */
  country: ReleasesCountry;

  /**
   * Certification for the country
   * @example
   * `PG`
   * @example
   * `12`
   * @example
   * `U`
   * @example
   * ``
   * @example
   * `Б14`
   */
  certification: string;

  /**
   * Only the date, no time information
   */
  release_date: string;

  /**
   * How this release was 'released'
   */
  release_type: ReleasesType;

  /**
   * Might have optional info such as the film festival name
   * for a premiere release or Blu-ray specs for a physical release.
   */
  note: null | string;
}
