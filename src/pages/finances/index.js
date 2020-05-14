import React from "react";
import { css } from "@emotion/core";

import Layout from "./components/Layout";

export default (props) => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          height: 600px;
          align-items: center;
          justify-content: center;
          color: var(--text-color-2);
        `}
      >
        Coming soon
      </div>
    </Layout>
  );
};
