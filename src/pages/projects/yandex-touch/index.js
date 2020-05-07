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
        <ArticleTitle
          title="The Mobile Version of&nbsp;Yandex"
          meta="2015 · Web"
        />
        <p>
          The Mobile version was redesigned after desktop Yandex. Here
          I've&nbsp;designed widgets, onboarding, settings, additional services,
          and&nbsp;so&nbsp;on.
        </p>
      </LayoutColumn>
      <Frame label="Sports widget and onboarding">
        <Device
          image={filterImage(images, "yandex-touch-hockey")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "yandex-touch-onboarding")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <Frame label="Music and radio widgets">
        <Device
          image={filterImage(images, "yandex-touch-music")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "yandex-touch-radio")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <Frame label="Other stuff">
        <Device
          image={filterImage(images, "serp-biathlon")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "yandex-touch-metro")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
        <Device
          image={filterImage(images, "yandex-touch-ticket")}
          model="htc"
          margin="0 var(--spacing-base)"
        />
      </Frame>
      <LayoutColumn>
        <Next type="project" id="yandex-tablet" title="Yandex for tablets" />
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
