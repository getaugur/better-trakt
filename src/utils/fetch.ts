import { AxiosInstance, AxiosRequestHeaders } from "axios";

export async function fetch<T>(
  client: AxiosInstance,
  url: string,
  accessToken?: string
) {
  const headers: AxiosRequestHeaders = {};

  if (accessToken !== undefined)
    headers["Authorization"] = `Bearer ${accessToken}`;

  const response = await client.get<T>(url, {
    headers,
    // parseJson: (text: string) => Bourne.parse(text),
  });

  return response;
}
