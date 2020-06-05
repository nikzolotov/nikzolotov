import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import LayoutColumn from "../components/LayoutColumn";

export default () => {
  return (
    <Layout>
      <SEO title="404" />
      <LayoutColumn>
        <h1>404</h1>
      </LayoutColumn>
    </Layout>
  );
};
