import { AxiosInstance } from 'axios';
import { CertificationList } from '../trakt';
import { fetch } from '../utils/fetch';

export async function listCertifications(client: AxiosInstance) {
  const url = 'https://api.trakt.tv/certifications/movies';
  const response = await fetch<CertificationList>(client, url);

  return response.data;
}
