import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components";
import withApollo from "../lib/apollo";

const Index = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default withApollo({ ssr: true })(Index)