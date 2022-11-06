import { ApiConfig, ApiNamespace } from '../client';
import { Network } from '../trakt';
import { ApiResponse, fetch } from '../utils';

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
   * Get a list of all TV networks, including the name.
   * @returns
   */
  async list(): Promise<ApiResponse<Network[]>> {
    const url = `${this.config.apiUrl}`;
    const response = await fetch<Network[]>(this.config.client, url);

    return response;
  }
}
