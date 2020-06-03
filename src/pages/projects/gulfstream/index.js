import React from "react";
import { graphql } from "gatsby";

import SEO from "../../../components/SEO";
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
      <SEO title="Gulfstream" />
      <LayoutColumn>
        <ArticleTitle title="Gulfstream" meta="2016 · iOS App" />
        <p>
          Gulfstream offers people security systems for homes and offices. At
          first, they had a single-button application to switch your home alarm
          on and off with some payment and user management functions. I was
          hired to add some smart home features, such as controllable outlets,
          temperature sensors and make the app look fresh and friendly.
        </p>
        <p>
          I started with a competitor analysis and requirement gathering. We
          accepted industry standard of a dashboard so that user can choose
          which devices he wants to see on the main screen. I wanted to create a
          feeling that everything is under control. I offered simple and clean
          visual style with a lot of micro-animations. I made prototypes with
          Hype, to show how it looks and feels.
        </p>
      </LayoutColumn>
      <Frame label="Main screen and outlet settings">
        <Device
          image={filterImage(images, "gulfstream-dashboard")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "gulfstream-outlet")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <Frame label="Temperature sensor settings and list of all sensors">
        <Device
          image={filterImage(images, "gulfstream-sensor")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "gulfstream-sensors")}
          model="abstract-phone"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <LayoutColumn>
        <Next type="project" id="leader" title="Leader Engineering" />
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
        relativeDirectory: { eq: "pages/projects/gulfstream" }
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
