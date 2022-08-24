import { ApiConfig, ApiNamespace } from '../client';
import { listNetworks } from './list';

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
  list() {
    return listNetworks(this.config);
  }
}
