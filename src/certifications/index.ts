import { AxiosInstance } from 'axios';
import { ApiNamespace } from '../client';
import { listCertifications } from './list';

/**
 * Certifications api namespace
 */
export class Certifications implements ApiNamespace {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  /**
   * Gets list of movie certifications
   * @returns
   */
  listMovies() {
    return listCertifications(this.client);
  }

  /**
   * Gets list of show certifications
   * @returns
   */
  listShows() {
    return listCertifications(this.client);
  }
}
