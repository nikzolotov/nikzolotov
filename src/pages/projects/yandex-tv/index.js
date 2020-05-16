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
          title="Yandex for Smart <abbr>TV</abbr>"
          meta="2015 · Web"
        />
        <p>
          The audience of the Yandex main page on TV is more than a million
          people a day. I've designed a special version for those people with
          bigger informers and adapted font size. I've made an accent on the
          informers that people use the most according to metrics.
        </p>
      </LayoutColumn>
      <Frame label="Yandex on Smart <abbr>TV</abbr>">
        <Device
          image={filterImage(images, "yandex-tv-main")}
          model="tv"
          margin="0"
        />
      </Frame>
      <Frame label="The main page is scrolling to the right">
        <Device
          image={filterImage(images, "yandex-tv-right")}
          model="tv"
          margin="0"
        />
      </Frame>
      <Frame label="The news details open without reloading">
        <Device
          image={filterImage(images, "yandex-tv-news")}
          model="tv"
          margin="0"
        />
      </Frame>
      <Frame label="<abbr>TV</abbr> schedule">
        <Device
          image={filterImage(images, "yandex-tv-timetable")}
          model="tv"
          margin="0"
        />
      </Frame>
      <Frame label="A classic version adapted to <abbr>TV</abbr> screens">
        <Device
          image={filterImage(images, "yandex-tv-classic")}
          model="tv"
          margin="0"
        />
      </Frame>
      <LayoutColumn>
        <Next type="project" id="marytrufel" title="Bridal Store Mary Trufel" />
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
        relativeDirectory: { eq: "pages/projects/yandex-tv" }
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
