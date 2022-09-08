import { AxiosError, AxiosInstance, AxiosRequestHeaders } from 'axios';
import { TraktHttpError } from './error';

/**
 * Custom fetch func for calling trakt api
 * @param client axios instance
 * @param url trakt api uri
 * @param accessToken access token for oauth related actions
 * @returns Specified type or undefined
 * @throws {@link TraktHttpError} Trakt specific http error
 * @internal
 */
export async function fetch<T>(client: AxiosInstance, url: string, accessToken?: string): Promise<T | undefined> {
  const headers: AxiosRequestHeaders = {};

  if (accessToken !== undefined) headers['Authorization'] = `Bearer ${accessToken}`;

  try {
    const response = await client.get<T>(url, {
      headers,
      // parseJson: (text: string) => Bourne.parse(text),
    });

    return response.data;
  } catch (e) {
    if (e instanceof AxiosError && e.response !== undefined) {
      throw new TraktHttpError(e.response.status, e.response.data, e.response.headers);
    } else {
      console.error(e);
    }

    return;
  }
}
