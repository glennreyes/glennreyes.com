import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { isBrowser } from '../utils';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (isBrowser) {
  // @ts-ignore
  global.fetch = fetch;
}

const create = (initialState?: NormalizedCacheObject) =>
  new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    connectToDevTools: isBrowser,
    link: new HttpLink({ uri: process.env.GRAPHQL_URL }),
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
  });

const initApollo = (initialState?: NormalizedCacheObject) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
};

export default initApollo;
