import { ApiConfig, ApiNamespace } from '../client';
import { listCertifications } from './list';

/**
 * Certifications api namespace
 */
export class Certifications implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  /**
   * Gets list of movie certifications
   * @returns
   */
  listMovies() {
    return listCertifications(this.config, 'movies');
  }

  /**
   * Gets list of show certifications
   * @returns
   */
  listShows() {
    return listCertifications(this.config, 'shows');
  }
}
