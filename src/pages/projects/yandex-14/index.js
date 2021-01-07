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
      <SEO title="Yandex v14" />
      <LayoutColumn>
        <ArticleTitle meta="2015 · Web">Yandex v14</ArticleTitle>
        <p>
          Yandex constantly working to make its products better. In 2015
          I&nbsp;took part in the 14th redesign of the main page. It became
          clearer, simpler, and more compact.
        </p>
      </LayoutColumn>
      <Frame label="The 14th version of Yandex">
        <Device image={filterImage(images, "yandex-14-morda")} model="safari" />
      </Frame>
      <Frame label="Sport snippet">
        <Device
          image={filterImage(images, "yandex-14-football")}
          model="safari"
        />
      </Frame>
      <Frame label="Widget settings">
        <Device
          image={filterImage(images, "yandex-14-widget-settings")}
          model="safari"
        />
      </Frame>
      <Frame label="Decoration theme setup">
        <Device
          image={filterImage(images, "yandex-14-themes")}
          model="safari"
        />
      </Frame>
      <Frame
        label="Occasionally I use Google SketchUp for illustration sketching or apartment planning. In this case, I moved some cubes for Minecraft skin for Yandex."
        afterImage={filterImage(images, "minecraft-bg")}
        bgColor="linear-gradient(to top, #79a7e9, #547dc0)"
        padding="var(--spacing-x-large) var(--spacing-x-large) var(--spacing-base) var(--spacing-x-large)"
      >
        <Device
          image={filterImage(images, "yandex-14-minecraft")}
          model="safari"
        />
      </Frame>
      <Frame label="User settings">
        <Device
          image={filterImage(images, "yandex-14-settings")}
          model="safari"
        />
      </Frame>
      <Frame label="Breaking news site template">
        <Device
          image={filterImage(images, "yandex-14-disaster")}
          model="safari"
        />
      </Frame>
      <LayoutColumn>
        <Next
          type="project"
          id="yandex-touch"
          title="The Mobile Version of Yandex"
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
        relativeDirectory: { eq: "pages/projects/yandex-14" }
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
