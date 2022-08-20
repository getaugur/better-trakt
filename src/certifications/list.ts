import { ApiConfig } from '../client';
import { CertificationList } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listCertifications({ client, apiUrl }: ApiConfig) {
  const url = `${apiUrl}/certifications/movies`;
  const response = await fetch<CertificationList>(client, url);

  return response.data;
}
