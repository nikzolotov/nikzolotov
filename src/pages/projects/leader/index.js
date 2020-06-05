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
        <p>
          Leader is a Moscow based engineering company. They offer their clients
          services in civil, electrical, mechanical, piping, and structural
          engineering. The goals of the redesign were to attract new customers
          and show new specialties.
        </p>
        <p>
          Competition in the field is tough. Although, competitor sites are
          rather similar. Portfolio, testimonials, licenses, and description of
          the service. To attract new customers and improve SEO metrics, we
          decided to add new sections with articles and normative documents in
          the field. The client already had a nice collection of unique articles
          and had a desire to write more. And we updated key product pages with
          new data.
        </p>
      </LayoutColumn>
      <Frame label="Main page">
        <Device image={filterImage(images, "leader-main")} model="safari" />
      </Frame>
      <Frame label="Product page">
        <Device image={filterImage(images, "leader-product")} model="safari" />
      </Frame>
      <LayoutColumn>
        <p>
          Leader has a nice portfolio with famous buildings in the center of
          Moscow and well-known areas of gentrification. I couldn't ignore this
          and made attractive project pages and cross-links on other pages.
        </p>
      </LayoutColumn>
      <Frame label="Project page">
        <Device image={filterImage(images, "leader-project")} model="safari" />
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
