import axios, { AxiosInstance } from 'axios';
import { Certifications } from './certifications';
import { Countries } from './countries';
import { Genres } from './genres';
import { Languages } from './languages';
import { Movies } from './movies';
import { Networks } from './networks';
import { Shows } from './shows';
// api methods
import { Users } from './users';
import { Lists } from './lists';

const version = '';

/**
 * Settings provided to Trakt Class
 */
export interface TraktSettings {
  /**
   * Trakt app's client id
   */
  clientId: string;

  /**
   * Trakt app's client secret
   */
  clientSecret?: string;

  /**
   * Redirect url for oauth
   * @default "urn:ietf:wg:oauth:2.0:oob"
   */
  redirectUri?: string;

  /**
   * Trakt api url
   * @default "https://api.trakt.tv"
   */
  apiUrl?: string;

  /**
   * User Agent sent in request headers
   * @default "better-trakt / <pkg version> (+https://github.com/getaugur/better-trakt/)"
   */
  userAgent?: string;
}

/**
 * Internal settings object used by sdk
 * @internal
 */
export interface TraktClassSettings extends TraktSettings {
  redirectUri: string;
  apiUrl: string;
  userAgent: string;
}

/**
 * Interface passed to internal api funcs
 * @internal
 */
export interface ApiConfig {
  client: AxiosInstance;
  apiUrl: string;
}

/**
 * Class interface for api namespaces
 * @internal
 */
export interface ApiNamespace {
  config: ApiConfig;
}

/**
 * Trakt.tv SDK
 * @example
 * SDK with basic config
 * ```ts
 * import { Trakt } from "better-trakt";
 *
 * const client = new Trakt({
 *  clientId: "client id",
 *  clientSecret: "client secret",
 * });
 * ```
 */
export class Trakt {
  /**
   * settings for sdk
   * @internal
   */
  readonly settings: TraktClassSettings;

  /**
   * axios client
   */
  private client: AxiosInstance;

  /**
   * User's api
   */
  readonly users: Users;

  /**
   * Shows api
   */
  readonly shows: Shows;

  /**
   * Movies api
   */
  readonly movies: Movies;

  /**
   * Certifications api
   */
  readonly certifications: Certifications;

  /**
   * Countries api
   */
  readonly countries: Countries;

  /**
   * Genres api
   */
  readonly genres: Genres;

  /**
   * Languages api
   */
  readonly languages: Languages;

  /**
   * Networks api
   */
  readonly networks: Networks;

  /**
   * Lists api
   */
  readonly lists: Lists;

  constructor(settings: TraktSettings) {
    // apply settings
    this.settings = {
      clientId: settings.clientId,
      clientSecret: settings.clientSecret,
      redirectUri: settings.redirectUri || 'urn:ietf:wg:oauth:2.0:oob',
      apiUrl: settings.apiUrl || 'https://api.trakt.tv',
      userAgent: settings.userAgent || `better-trakt / ${version}  (+https://github.com/getaugur/better-trakt/)`,
    };

    // make base client
    this.client = axios.create({
      headers: {
        'Content-type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': this.settings.clientId,
        'User-Agent': this.settings.userAgent,
      },
    });

    const apiConfig: ApiConfig = {
      client: this.client,
      apiUrl: this.settings.apiUrl,
    };

    this.users = new Users(apiConfig);
    this.movies = new Movies(apiConfig);
    this.shows = new Shows(apiConfig);
    this.certifications = new Certifications(apiConfig);
    this.countries = new Countries(apiConfig);
    this.genres = new Genres(apiConfig);
    this.languages = new Languages(apiConfig);
    this.networks = new Networks(apiConfig);
    this.lists = new Lists(apiConfig);
  }
}
