import * as nodeFetch from 'node-fetch';
import { NEOWebService } from '@chrome-neo2/neows';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).fetch = nodeFetch;

const service = new NEOWebService('DEMO_KEY'); // TODO: remove demo key
service
  .getFeed({
    startDate: '',
    endDate: '',
  })
  .then(console.log);
