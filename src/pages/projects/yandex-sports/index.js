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
        <ArticleTitle title="Sports on Yandex" meta="2018 · Web" />
        <p>
          Yandex is an internet search in Russia. But unlike Google, its main
          page offers users some services such as news, weather, traffic, and so
          on. So it is a place where you can start your day with a cup of
          coffee. In 2018 Russia hosted the World Cup. It was a time to make
          something nice on Yandex celebrating this event. Usually, it was a
          simple text string under the news.
        </p>
        <p>
          At that time Yandex experimented with entertainment content to step
          outside a single screen page. So it was a space and all the resources
          to make something interesting within Yandex main page. We rolled out
          the first version for the Confederation Cup. Then we made something
          similar for the Winter Olympics. And, finally, for the World Cup. By
          that time we had established contracts with data suppliers. The result
          was a rich section on Yandex with live translations, highlights,
          stats, and so on.
        </p>
      </LayoutColumn>
      <Frame label="FIFA World Cup 2018">
        <Device
          image={filterImage(images, "yandex-sports-wc18")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Match overview">
        <Device
          image={filterImage(images, "yandex-sports-overview")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Team lineups">
        <Device
          image={filterImage(images, "yandex-sports-lineups")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Winter Olympics 2018">
        <Device
          image={filterImage(images, "yandex-sports-olympics")}
          model="safari"
          margin="0"
        />
      </Frame>
      <LayoutColumn>
        <Next
          type="project"
          id="gulfstream-b2b"
          title="Gulfstream <abbr>B2B</abbr>"
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
        relativeDirectory: { eq: "pages/projects/yandex-sports" }
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
