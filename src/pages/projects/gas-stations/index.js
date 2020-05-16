import React from "react";
import { graphql } from "gatsby";

import Layout from "../../../components/Layout";
import LayoutColumn from "../../../components/LayoutColumn";
import ArticleTitle from "../../../components/ArticleTitle";
import Frame from "../../../components/Frame";
import Device from "../../../components/Device";
import Next from "../../../components/Next";

export default ({ data }) => {
  const images = data.allFile.edges;
  return (
    <Layout>
      <LayoutColumn>
        <ArticleTitle
          title="Gas Stations in&nbsp;Navigator"
          meta="2018 · App"
        />
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
      <Frame label="Navigator shows you an offer when you’re close to the gas station">
        <Device
          image={filterImage(images, "gas-stations-invitation")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "gas-stations-main")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <Frame label="After choosing the amount of gas user sees clear instructions of what to do next">
        <Device
          image={filterImage(images, "gas-stations-instruction")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "gas-stations-filling")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <Frame label="Daylight theme">
        <Device
          image={filterImage(images, "gas-stations-main-white")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "gas-stations-instruction-white")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
      </Frame>
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
        <Next type="project" id="yandex-sports" title="Yandex Sports" />
      </LayoutColumn>
    </Layout>
  );
};

const filterImage = function (i, name) {
  return i.filter((item) => item.node.name === name)[0].node.childImageSharp
    .fluid;
};

export const query = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "pages/projects/gas-stations" }
        extension: { regex: "/png|jpg/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
