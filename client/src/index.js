import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import resolvers from "./cache/resolvers";
import "./css/style.css";
import "./css/layout.css";

const cache = new InMemoryCache({
  // The cache object ids are generated using the objectID(a string) instead
  // of the number id so that objects are refered to consistently across the
  // client and server
  dataIdFromObject: (object) => `${object.__typename}:${object._id}`,
});

const CLIENT_ORIGIN = "http://130.245.12.107:3001/graphql"; //Do I need to change this?
const SERVER_LOCAL_DOMAIN = "http://localhost:4000/graphql"; //Do I need to change this?

const client = new ApolloClient({
  uri: SERVER_LOCAL_DOMAIN,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  // Credentials: include is necessary to pass along the auth cookies with each server request
  credentials: "include",
  cache: cache,
  resolvers,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
