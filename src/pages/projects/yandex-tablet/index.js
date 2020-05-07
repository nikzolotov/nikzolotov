import React from "react";

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
        <ArticleTitle title="Yandex for tablets" meta="2015 · Web" />
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
          margin="0"
        />
      </Frame>
      <Frame label="Yandex for tablets">
        <Device
          image={filterImage(images, "yandex-tablet-full")}
          model="safari"
          maxWidth="750px"
          margin="0"
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
