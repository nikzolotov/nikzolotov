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
      <SEO title="Yandex for tablets" />
      <LayoutColumn>
        <ArticleTitle meta="2015 · Web">Yandex for tablets</ArticleTitle>
        <p>
          Here in Yandex, we designed the main page for tablets with media
          informers. Our main goal was to increase the time that people spend on
          the main page. So we made bigger versions of standard informers and
          added new ones. Using people's interests we show certain movies,
          videos, announcements.
        </p>
      </LayoutColumn>
      <Frame label="First screen still conveys picture of the day">
        <Device
          image={filterImage(images, "yandex-tablet-morda")}
          model="ipad"
        />
      </Frame>
      <Frame label="Yandex for tablets">
        <Device
          image={filterImage(images, "yandex-tablet-full")}
          model="safari"
          maxWidth="750px"
        />
      </Frame>
      <LayoutColumn>
        <Next
          type="project"
          id="yandex-tv"
          title="Yandex for Smart <abbr>TV</abbr>"
        />
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
        relativeDirectory: { eq: "pages/projects/yandex-tablet" }
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
