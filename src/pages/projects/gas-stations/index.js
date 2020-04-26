import React from "react";
import { css } from "@emotion/core";

import Layout from "../../../components/Layout";
import LayoutColumn from "../../../components/LayoutColumn";
import Device from "../../../components/Device";

export default ({ data }) => {
  return (
    <Layout>
      <LayoutColumn>
        <h1>Gas Stations in Navigator</h1>
        <p>
          Yandex Navigator helps drivers drive. The app makes the fastest route,
          shows you alternatives, and helps you turn by turn. In 2018 the team
          decided to add new service for drivers—filling up the gas tank in the
          app with no need to get outside of a car. My colleague designer was
          selected to make a design. After two months the team wasn't still
          satisfied with the result. But they already started the development.
          It was one month until the deadline. So we switched the roles and I
          started to work on this project.
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
          <Device image={data.file.childImageSharp.fluid} />
          <Device image={data.file.childImageSharp.fluid} />
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
      relativePath: { eq: "pages/projects/gas-stations/yandex-touch-4.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
