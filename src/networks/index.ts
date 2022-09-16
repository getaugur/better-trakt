import { ApiConfig, ApiNamespace } from '../client';
import { Network } from '../trakt';
import { fetch } from '../utils';

/**
 * Networks api namespace
 */
export class Networks implements ApiNamespace {
  config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = {
      apiUrl: `${config.apiUrl}/networks`,
      client: config.client,
    };
  }

  /**
   * Gets list of all tv networks
   * @returns
   */
  async list() {
    const url = `${this.config.apiUrl}`;
    const response = await fetch<Network[]>(this.config.client, url);

    return response;
  }
}
