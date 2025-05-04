// app/libs/microcms.tsx
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
   // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});
