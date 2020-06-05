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
      <SEO title="Sports on Yandex" />
      <LayoutColumn>
        <ArticleTitle title="Sports on Yandex" meta="2018 · Web" />
        <p>
          Yandex is an internet search in Russia. But unlike Google, its main
          page offers users other services such as news, weather, traffic, and
          so on. So it is a place where you can start your day with a cup of
          coffee. In 2018 Russia hosted the World Cup. It was a perfect time to
          make something nice to celebrate this event.
        </p>
        <p>
          Our goals were to make good PR and bring people to the new Yandex
          service with broadcasts. Yandex covered big sports events previously
          but did it more formally with a text string near the news. This time I
          made a huge (by Yandex standards) and colorful section and made an
          accent on video broadcasts. To amuse people before the match, we added
          stats such as squads, wins-losses, score tables. And after-match
          stats: goals, best players, ball possession, and so on.
        </p>
      </LayoutColumn>
      <Frame label="FIFA World Cup 2018">
        <Device
          image={filterImage(images, "yandex-sports-wc18-full")}
          model="safari"
        />
      </Frame>
      <Frame label="Match overview">
        <Device
          image={filterImage(images, "yandex-sports-overview")}
          model="safari"
        />
      </Frame>
      <Frame label="Team lineups">
        <Device
          image={filterImage(images, "yandex-sports-lineups")}
          model="safari"
        />
      </Frame>
      <LayoutColumn>
        <p>
          We tested this format on Winter Olympics a few months before the World
          Cup. There's much more going on in the Olympics than in the World Cup.
          I grouped events by day at the top of the section. Next, goes top
          events with broadcasts and medals stats. The rest opens up if the
          person shows her interest. The last row is a filter by the sports
          type.
        </p>
      </LayoutColumn>
      <Frame label="Winter Olympics 2018">
        <Device
          image={filterImage(images, "yandex-sports-olympics")}
          model="safari"
        />
      </Frame>
      <Frame label="Next day on Winter Olympics">
        <Device
          image={filterImage(images, "yandex-sports-olympics-nextday")}
          model="safari"
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
