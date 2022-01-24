import * as React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
const secretKey = process?.env?.REACT_APP_SECRETKEY || "";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://study-diary.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": secretKey
    },
  }),
  cache: new InMemoryCache()
});

const App = () => {
  return <h1>
    ㅎㅇ
  </h1>
}

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)