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
      <SEO title="The Mobile Version of Yandex" />
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
      <Frame label="Main screen with notifications">
        <Device image={filterImage(images, "yandex-touch-main")} model="htc" />
        <Device
          image={filterImage(images, "yandex-touch-main-metro")}
          model="htc"
        />
      </Frame>
      <Frame label="Onboarding">
        <Device
          image={filterImage(images, "yandex-touch-onboarding-1")}
          model="htc"
        />
        <Device
          image={filterImage(images, "yandex-touch-onboarding-2")}
          model="htc"
        />
        <Device
          image={filterImage(images, "yandex-touch-onboarding-3")}
          model="htc"
        />
      </Frame>
      <Frame label="Sports and elections widgets">
        <Device
          image={filterImage(images, "yandex-touch-hockey")}
          model="htc"
        />
        <Device
          image={filterImage(images, "yandex-touch-election")}
          model="htc"
        />
      </Frame>
      <Frame label="Music and radio widgets">
        <Device image={filterImage(images, "yandex-touch-music")} model="htc" />
        <Device image={filterImage(images, "yandex-touch-radio")} model="htc" />
      </Frame>
      <Frame label="Yandex reminds you of an upcoming flight">
        <Device
          image={filterImage(images, "yandex-touch-flight")}
          model="htc"
        />
        <Device
          image={filterImage(images, "yandex-touch-ticket")}
          model="htc"
        />
      </Frame>
      <Frame label="We rolled out the redesign gradually and tested every new stage">
        <Device
          image={filterImage(images, "yandex-touch-stage-0")}
          model="htc"
        />
        <Device
          image={filterImage(images, "yandex-touch-stage-1")}
          model="htc"
        />
        <Device
          image={filterImage(images, "yandex-touch-stage-2")}
          model="htc"
        />
      </Frame>
      <Frame label="Biathlon search snippet and web version of the metro app">
        <Device image={filterImage(images, "serp-biathlon")} model="htc" />
        <Device image={filterImage(images, "yandex-touch-metro")} model="htc" />
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
