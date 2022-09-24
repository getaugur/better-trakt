import { FetchOptions } from './fetch';

/**
 * Builds an api uri with specified http queries
 * @remarks
 * While this can be easily achieved with axios,
 * the goal is to provide as agnostic of an api
 * as possible. This enables the easy replacement of
 * axios with say, the fetch api.
 *
 * @param baseUrl api uri
 * @param options query options, access token is ignored
 * @returns "built" uri
 * @internal
 */
export function buildUrl(baseUrl: string, options?: FetchOptions) {
  // if not options
  if (options === undefined) return baseUrl;

  const queryOptions: string[] = [];
  let newUrl = baseUrl;

  // all pagination options
  if (options.pagination !== undefined) {
    queryOptions.push(`page=${options.pagination.page}`);
    queryOptions.push(`limit=${options.pagination.limit}`);
  }

  // all the different filters that can be added
  if (options.filters !== undefined) {
    if (options.filters.query !== undefined) queryOptions.push(`query=${options.filters.query}`);

    if (options.filters.years !== undefined) queryOptions.push(`years=${options.filters.years}`);

    if (options.filters.genres !== undefined)
      options.filters.genres.forEach((value) => {
        queryOptions.push(`genres=${value}`);
      });

    if (options.filters.languages !== undefined)
      options.filters.languages.forEach((value) => {
        queryOptions.push(`languages=${value}`);
      });

    if (options.filters.countries !== undefined)
      options.filters.countries.forEach((value) => {
        queryOptions.push(`countries=${value}`);
      });

    if (options.filters.runtimes !== undefined) queryOptions.push(`runtimes=${options.filters.runtimes}`);

    if (options.filters.studios !== undefined)
      options.filters.studios.forEach((value) => {
        queryOptions.push(`studios=${value}`);
      });
  }

  if (options.period !== undefined) {
    // some methods allow a period to be specified
    newUrl += `/${options.period}`;
  } else if (options.startDate !== undefined) {
    // others allow for a start date
    newUrl += `/${options.startDate}`;
  }

  // if there are any query params to add
  if (queryOptions.length > 0) {
    newUrl += '?';

    queryOptions.forEach((value, i) => {
      if (i === 0) {
        newUrl += value;
      } else {
        newUrl += `&${value}`;
      }
    });
  }

  return newUrl;
}
