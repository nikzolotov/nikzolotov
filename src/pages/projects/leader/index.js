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
      <SEO title="Leader Engineering" />
      <LayoutColumn>
        <ArticleTitle title="Leader Engineering" meta="2016 · Web" />
      </LayoutColumn>
      <Frame label="Main screen and outlet settings">
        <Device
          image={filterImage(images, "leader-main")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Main screen and outlet settings">
        <Device
          image={filterImage(images, "leader-product")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Main screen and outlet settings">
        <Device
          image={filterImage(images, "leader-project")}
          model="safari"
          margin="0"
        />
      </Frame>
      <LayoutColumn>
        <Next type="project" id="yandex-14" title="Yandex v14" />
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
        relativeDirectory: { eq: "pages/projects/leader" }
        extension: { regex: "/png|jpg/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 900, jpegQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
