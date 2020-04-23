import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../components/Layout";
import Intro from "../components/Intro";

export default () => {
  return (
    <Layout index>
      <Intro>
        <p>
          Hi, I’m Nikita Zolotov, a product designer and developer based in
          Moscow. Here’re some projects that I’ve done in recent time.
        </p>
      </Intro>
      <div
        css={css`
          height: 500px;
          background: rgba(var(--white-rgb), 0.05);
        `}
      >
        <Link to={`/projects/gas-stations/`}>Заправки</Link>
      </div>
    </Layout>
  );
};
