import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../../components/Layout";
import Intro from "../../components/Intro";

export default () => {
  return (
    <Layout>
      <Intro>
        <p>
          Data visualisation is one of my favorite things. Sometime I design
          them and then code with D3.js.
        </p>
      </Intro>
      <div
        css={css`
          height: 500px;
          background: rgba(var(--white-rgb), 0.05);
        `}
      >
        <Link to={`/datavis/clouds/`}>Облака</Link>
      </div>
    </Layout>
  );
};
