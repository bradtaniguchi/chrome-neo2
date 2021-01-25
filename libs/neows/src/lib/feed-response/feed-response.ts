import { LookupResponse } from '../lookup-response/lookup-response';

export interface FeedResponse {
  links: {
    /**
     * The next day chunk
     */
    next: string;
    /**
     * The previous day chunk
     */
    prev: string;
    /**
     * The current day chunk
     */
    self: string;
  };
  /**
   * The number of elements in this query
   */
  element_count: number;
  /**
   * A record, where the key is the day in format:
   * YYYY-MM-DD with the array of lookups
   */
  near_earth_objects: Record<string, Array<LookupResponse>>;
}
