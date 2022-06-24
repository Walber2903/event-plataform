import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rk9do0162z01z59htj5q7d/master',
  cache: new InMemoryCache()
}) 