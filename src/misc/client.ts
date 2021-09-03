import Prismic from '@prismicio/client';

// TODO: Add your Prismic API endpoint here
const apiEndpoint = 'https://your-api.cdn.prismic.io/api/v2';
export const Client = Prismic.client(apiEndpoint);
