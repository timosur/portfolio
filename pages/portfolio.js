import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import withApollo from "../lib/apollo";

const Index = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Portfolio />
    </React.Fragment>
  );
}

export default withApollo({ ssr: true })(Index);