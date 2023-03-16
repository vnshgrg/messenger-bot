import * as dotEnv from 'dotenv';
dotEnv.config();

// App Secret can be retrieved from the App Dashboard
export const APP_ID:string = (process.env.MESSENGER_APP_ID) ?
  process.env.MESSENGER_APP_ID :
  "";

// App Secret can be retrieved from the App Dashboard
export const APP_SECRET:string = (process.env.MESSENGER_APP_SECRET) ?
  process.env.MESSENGER_APP_SECRET :
  "";

// Arbitrary value used to validate a webhook
export const VALIDATION_TOKEN:string = (process.env.MESSENGER_VALIDATION_TOKEN) ?
  (process.env.MESSENGER_VALIDATION_TOKEN) :
  "";

// Generate a page access token for your page from the App Dashboard
export const PAGE_ACCESS_TOKEN:string = (process.env.MESSENGER_PAGE_ACCESS_TOKEN) ?
  (process.env.MESSENGER_PAGE_ACCESS_TOKEN) :
  "";

// Generate a page access token for your page from the App Dashboard
export const PAGE_ID:string = (process.env.MESSENGER_PAGE_ID) ?
  (process.env.MESSENGER_PAGE_ID) :
  "";

// URL where the app is running (include protocol). Used to point to scripts and
// assets located at this address.
export const SERVER_URL:string = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  "";