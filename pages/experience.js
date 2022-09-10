import React from "react";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import withApollo from "../lib/apollo";

const Index = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Experience />
    </React.Fragment>
  );
};

export default withApollo({ ssr: true })(Index);
