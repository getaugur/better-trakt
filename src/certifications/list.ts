import { ApiConfig } from '../client';
import { CertificationList } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listCertifications({ client, apiUrl }: ApiConfig, type: 'movies' | 'shows') {
  const url = `${apiUrl}/certifications/${type}`;
  const response = await fetch<CertificationList>(client, url);

  return response.data;
}
