import React from "react";
import { css } from "@emotion/core";

import Layout from "../../../components/Layout";
import LayoutColumn from "../../../components/LayoutColumn";
import ArticleTitle from "../../../components/ArticleTitle";
import Frame from "../../../components/Frame";
import Device from "../../../components/Device";

export default ({ data }) => {
  const images = data.allFile.edges;
  return (
    <Layout>
      <LayoutColumn>
        <ArticleTitle title="Mobile version of&nbsp;Yandex" meta="2015 · Web" />
        <p>
          Mobile version was redesigned after desktop Yandex. Here
          I&nbsp;designed widgets, onboarding, settings, additional services
          and&nbsp;so&nbsp;on.
        </p>
      </LayoutColumn>
      <Frame label="Sports widget and onboarding">
        <Device
          image={filterImage(images, "yandex-touch-hockey")}
          model="htc"
          framed
        />
        <Device
          image={filterImage(images, "yandex-touch-onboarding")}
          model="htc"
          framed
        />
      </Frame>
      <Frame label="Music and radio widgets">
        <Device
          image={filterImage(images, "yandex-touch-music")}
          model="htc"
          framed
        />
        <Device
          image={filterImage(images, "yandex-touch-radio")}
          model="htc"
          framed
        />
      </Frame>
      <Frame label="Other stuff">
        <Device
          image={filterImage(images, "serp-biathlon")}
          model="htc"
          framed
        />
        <Device
          image={filterImage(images, "yandex-touch-metro")}
          model="htc"
          framed
        />
        <Device
          image={filterImage(images, "yandex-touch-ticket")}
          model="htc"
          framed
        />
      </Frame>
    </Layout>
  );
};

const filterImage = function (i, name) {
  return i.filter((item) => item.node.name == name)[0].node.childImageSharp
    .fluid;
};

export const query = graphql`
  query {
    allFile(
      filter: {
        relativeDirectory: { eq: "pages/projects/yandex-touch" }
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
