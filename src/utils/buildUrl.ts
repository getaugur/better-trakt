import { FetchOptions } from './fetch';

export function buildUrl(baseUrl: string, options: FetchOptions) {
  const queryOptions: string[] = [];

  if (options.pagination !== undefined) {
    queryOptions.push(`page=${options.pagination.page}`);
    queryOptions.push(`limit=${options.pagination.limit}`);
  }

  if (queryOptions.length > 0) {
    let newUrl = baseUrl + '?';

    queryOptions.forEach((value, i) => {
      if (i === 0) {
        newUrl += value;
      } else {
        newUrl += `&${value}`;
      }
    });

    return newUrl;
  }
}
