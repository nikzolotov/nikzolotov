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
        <h1>Mobile version of Yandex</h1>
        <p>
          Mobile version was redesigned after desktop Yandex. Here I designed
          widgets, onboarding, settings, additional services and so on.
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
          <Device image={data.file.childImageSharp.fluid} model="htc" />
        </div>
        <p
          css={css`
            margin: var(--spacing-small) 0 0 0;
            color: rgba(var(--white-rgb), var(--text-opacity-2));
          `}
        >
          Navigator shows you an offer when you’re close to the gas station
        </p>
      </div>
      <LayoutColumn>
        <p>
          The main challenge was to meet this deadline and get the result in one
          week. The second week was for refinement. I had all the data and
          research from my colleague. After a few iterations, we get the first
          prototype that met both team and business expectations. With the help
          of our UX-team, we made some quick tests. The results were pretty
          good. We made some fixes and started to roll out the experiment on
          Yandex employees. But after gathering feedback from a broader
          audience, it became clear that we need to change some instructions for
          drivers. They were still unclear and drivers were forced to leave the
          car to ask questions from personnel.
        </p>
        <p>
          The project was finished in time and both team and business were
          satisfied. It was one of the most interesting, fast-paced and
          challenging projects. Although it looks pretty simple.
        </p>
      </LayoutColumn>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(
      relativePath: {
        eq: "pages/projects/yandex-touch/yandex-touch-onboarding.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
