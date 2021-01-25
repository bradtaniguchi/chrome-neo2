import { ApodInterface } from './apod-response';

type WithThumbs = {
  /**
   * Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
   */
  thumbs?: boolean;
};
type GetWithDate = {
  /**
   * The date of the APOD image to retrieve
   * defaults to today
   * format: YYYY-MM-DD
   */
  date: string;
} & WithThumbs;
type GetWithStartAndEndDates = {
  /**
   * The start of a date range, when requesting date for a range of dates.
   * Cannot be used with date.
   * format: YYYY-MM-DD
   */
  start_date: string;
  /**
   * The end of the date range, when used with start_date.
   * defaults to today
   * format: YYYY-MM-DD
   */
  end_date: string;
} & WithThumbs;

type GetWithCount = {
  /**
   * If this is specified then count randomly chosen images will be returned.
   * Cannot be used with date or start_date and end_date.
   */
  count: number;
} & WithThumbs;
/**
 * Astronomy-picture-of-the-day service, used to interface with the API
 */
export class APODService {
  /**
   * Base URL to make requests
   */
  public static readonly BASE_URL = 'https://api.nasa.gov/planetary/apod';
  /**
   * The api key for the APOD web service
   */
  constructor(private apiKey: string) {}

  /**
   * Gets the picture of the day from the API
   * TODO: update exception thrown
   */
  public async get(params: GetWithDate): Promise<ApodInterface>;
  public async get(params: GetWithStartAndEndDates): Promise<ApodInterface>;
  public async get(params: GetWithCount): Promise<ApodInterface>;
  public async get(
    params: GetWithDate | GetWithStartAndEndDates | GetWithCount
  ): Promise<ApodInterface> {
    const url = new URL(APODService.BASE_URL);
    // always apply the api key
    url.searchParams.append('api_key', this.apiKey);
    // always conditional apply thumbs
    if (params.thumbs) url.searchParams.append('thumbs', 'true');

    if ((params as GetWithDate).date) {
      url.searchParams.append('date', (params as GetWithDate).date);
      return (await fetch(url.toString())).json();
    }

    if ((params as GetWithStartAndEndDates).start_date) {
      params = params as GetWithStartAndEndDates;
      url.searchParams.append('start_date', params.start_date);
      if (params.end_date) url.searchParams.append('end_date', params.end_date);
      return (await fetch(url.toString())).json();
    }

    if (
      (params as GetWithCount).count &&
      // make sure count is an integer
      !Number.isInteger(Number((params as GetWithCount).count)) &&
      // and is positive
      (params as GetWithCount).count > 0
    ) {
      params = params as GetWithCount;
      url.searchParams.append('count', '' + params.count);
      return (await fetch(url.toString())).json();
    }
    // TODO: throw error
    return;
  }
}
