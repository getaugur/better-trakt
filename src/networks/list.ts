import { ApiConfig } from '../client';
import { Network } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listNetworks({ client, apiUrl }: ApiConfig) {
  const url = `${apiUrl}/networks`;
  const response = await fetch<Network[]>(client, url);

  return response.data;
}
