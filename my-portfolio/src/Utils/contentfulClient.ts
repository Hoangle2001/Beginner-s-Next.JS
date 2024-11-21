import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '1z8flksislja',
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'QKi-DH_c_YS6WkpkGpnDh730CKaiRaBnvO27vTz0FfM',
  host: 'preview.contentful.com',
});

export default contentfulClient;
