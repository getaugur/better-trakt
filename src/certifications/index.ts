import { ApiConfig, ApiNamespace } from '../client';
import { CertificationList } from '../trakt';
import { ApiResponse, fetch } from '../utils';

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
   * Get a list of all movie certifications, including names, slugs, and descriptions.
   * @returns
   */
  listMovies(): Promise<ApiResponse<CertificationList>> {
    return this.listCertifications(this.config, 'movies');
  }

  /**
   * Get a list of all show certifications, including names, slugs, and descriptions.
   * @returns
   */
  listShows(): Promise<ApiResponse<CertificationList>> {
    return this.listCertifications(this.config, 'shows');
  }

  private async listCertifications({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
    const url = `${apiUrl}/${type}`;
    const response = await fetch<CertificationList>(client, url);

    return response;
  }
}
