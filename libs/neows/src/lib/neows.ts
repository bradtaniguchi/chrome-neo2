import { FeedResponse } from './feed-response/feed-response';
import { LookupResponse } from './lookup-response/lookup-response';

/**
 * Web service class used to interface with the NEOWS API
 */
export class NEOWebService {
  /**
   * Base feed URL used to make the requests
   */
  public static BASE_URL = 'https://api.nasa.gov/neo/rest/v1';
  constructor(
    /**
     * The api key for the NEO Web Service
     */
    private apiKey: string
  ) {}
  /**
   * Retrieve a list of Asteroids based on their closest approach date to Earth.
   * TODO: add return type
   */
  public async getFeed({
    startDate,
    endDate,
  }: {
    /**
     * Starting date for the asteroid search, in YYYY-MM-DD format
     * defaults to none.
     */
    startDate: string;
    /**
     * The ending date for the search, in YYYY-MM-DD format
     */
    endDate: string;
  }): Promise<FeedResponse> {
    const url = new URL(`${NEOWebService.BASE_URL}/feed`);
    url.searchParams.append('api_key', this.apiKey);
    if (startDate) url.searchParams.append('start_date', startDate);
    if (endDate) url.searchParams.append('end_date', endDate);
    return (await fetch(url.toString())).json();
  }

  /**
   * Lookup a specific Asteroid based on its NASA JPL small body ID.
   * See: https://ssd.jpl.nasa.gov/sbdb_query.cgi
   * @param asteroidId the small body ID of the asteroid
   */
  public async lookup(asteroidId: string): Promise<LookupResponse> {
    const url = new URL(`${NEOWebService.BASE_URL}/neo`);
    url.searchParams.append('api_key', this.apiKey);
    url.searchParams.append('astroidId', asteroidId);
    return (await fetch(url.toString())).json();
  }

  // **note** there is a browse API, but not used.
}
