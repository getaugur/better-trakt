import { describeTraktStatusCode } from './traktStatus';

/**
 * A trakt.tv api http error
 */
export class TraktHttpError extends Error {
  public readonly status: number;
  public readonly data: unknown;
  public readonly headers: unknown;

  constructor(status: number, resData: unknown, resHeaders: unknown) {
    // need to convert the status code into a message then pass to Error class
    super(describeTraktStatusCode(status));

    this.status = status;
    this.data = resData;
    this.headers = resHeaders;
  }
}
