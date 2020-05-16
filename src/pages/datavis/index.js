import React from "react";
// import { Link } from "gatsby";
// import { css } from "@emotion/core";

import Layout from "../../components/Layout";
import Intro from "../../components/Intro";

export default () => {
  return (
    <Layout>
      <Intro>
        <p>
          Data visualization is one of my favorites.
          Sometimes&nbsp;I&nbsp;design some bar charts and bring them to life
          with D3.js
        </p>
        <p>In progress...</p>
      </Intro>
      {/* <div
        css={css`
          height: 500px;
          background: rgba(var(--white-rgb), 0.05);
        `}
      >
        <Link to={`/datavis/clouds/`}>Облака</Link>
      </div> */}
    </Layout>
  );
};
