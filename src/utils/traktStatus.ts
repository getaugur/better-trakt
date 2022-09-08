/**
 * Outputs text that describes the http status code according to the trakt docs
 * @param status trakt api http response status code
 * @returns Meaning of the status code for trakt
 */
export function describeTraktStatusCode(status: number) {
  switch (status) {
    case 200:
      return 'Success';
    case 201:
      return 'Success - new resource created (POST)';
    case 204:
      return 'Success - no content to return (DELETE)';
    case 400:
      return "Bad Request - request couldn't be parsed";
    case 401:
      return 'Unauthorized - OAuth must be provided';
    case 403:
      return 'Forbidden - invalid API key or unapproved app';
    case 404:
      return 'Not Found - method exists, but no record found';
    case 405:
      return "Method Not Found - method doesn't exist";
    case 409:
      return 'Conflict - resource already created';
    case 412:
      return 'Precondition Failed - use application/json content type';
    case 420:
      return 'Account Limit Exceeded - list count, item count, etc';
    case 422:
      return 'Unprocessable Entity - validation errors';
    case 423:
      return 'Locked User Account - have the user contact support';
    case 426:
      return 'VIP Only - user must upgrade to VIP';
    case 429:
      return 'Rate Limit Exceeded';
    case 500:
      return 'Server Error - please open a support ticket';
    case 502:
    case 503:
    case 504:
      return 'Service Unavailable - server overloaded (try again in 30s)';
    case 520:
    case 521:
    case 522:
      return 'Service Unavailable - Cloudflare error';
    default:
      return `Unknown meaning: status code ${status}`;
  }
}
