import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";

import Layout from "../../../components/Layout";
import LayoutColumn from "../../../components/LayoutColumn";
import Device from "../../../components/Device";

export default ({ data }) => {
  return (
    <Layout>
      <LayoutColumn>
        <h1>Yandex for tablets</h1>
        <p>
          Here in Yandex we designed main page for tablets with media informers.
          First screen still conveys picture of the day:
        </p>
      </LayoutColumn>
      <div
        css={css`
          margin: var(--spacing-large) 0;
        `}
      >
        <div
          css={css`
            text-align: center;
            background: rgba(var(--white-rgb), 0.05);
          `}
        >
          <Device image={data.file.childImageSharp.fluid} model="htc" />
          <Device image={data.file.childImageSharp.fluid} model="ipad" />
        </div>
        <p
          css={css`
            margin: var(--spacing-small) 0 0 0;
            color: var(--text-color-2);
          `}
        >
          Navigator shows you an offer when you’re close to the gas station
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(
      relativePath: {
        eq: "pages/projects/yandex-tablet/yandex-tablet-morda.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
