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
      <SEO title="Gulfstream B2B" />
      <LayoutColumn>
        <ArticleTitle
          title="Gulfstream <abbr>B2B</abbr>"
          meta="2017 · Web App"
        />
      </LayoutColumn>
      <Frame label="Main screen and outlet settings">
        <Device
          image={filterImage(images, "gulfstream-b2b-main")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="2">
        <Device
          image={filterImage(images, "gulfstream-b2b-objects")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Temperature sensor settings and list of all sensors">
        <Device
          image={filterImage(images, "gulfstream-b2b-object")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="2">
        <Device
          image={filterImage(images, "gulfstream-b2b-reports")}
          model="safari"
          margin="0"
        />
      </Frame>
      <LayoutColumn>
        <Next type="project" id="gulfstream" title="Gulfstream" />
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
        relativeDirectory: { eq: "pages/projects/gulfstream-b2b" }
        extension: { regex: "/png|jpg/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
