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
          I’ve designed and built product experiences for Yandex, Škoda,
          Volkswagen, Audi, Megafon. I did web & app design.
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
      <div>NDA Projects</div>
    </Layout>
  );
};
