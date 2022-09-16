import { ApiConfig, ApiNamespace } from '../client';
import { CertificationList } from '../trakt';
import { fetch } from '../utils';

/**
 * Certifications api namespace
 */
export class Certifications implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/certifications`,
      client: config.client,
    };
  }

  /**
   * Gets list of movie certifications
   * @returns
   */
  listMovies() {
    return this.listCertifications(this.config, 'movies');
  }

  /**
   * Gets list of show certifications
   * @returns
   */
  listShows() {
    return this.listCertifications(this.config, 'shows');
  }

  private async listCertifications({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<CertificationList>(client, url);

    return response;
  }
}
