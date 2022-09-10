import { withApollo } from "next-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Config from "../config";

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: Config.strapiUrl + "/graphql",
    credentials: "same-origin"
  }),
  cache: new InMemoryCache()
});

export default withApollo(apolloClient);