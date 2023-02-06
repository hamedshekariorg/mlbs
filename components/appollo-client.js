import { ApolloClient, InMemoryCache } from '@apollo/client';
import { baseURL } from 'services/request';

const client = new ApolloClient({
  uri: 'https://api.mlbs.stg.blytd.com/attractions/',
  cache: new InMemoryCache(),
});

export default client;
