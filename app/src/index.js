import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import ApolloClient
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri:
    "https://api-ap-northeast-1.graphcms.com/v2/ck93m38s70j2y01z60sal13lz/master",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
