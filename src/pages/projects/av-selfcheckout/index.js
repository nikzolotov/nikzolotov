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
      <SEO title="Azbuka Vkusa Self-checkout" />
      <LayoutColumn>
        <ArticleTitle title="Azbuka Vkusa Self-checkout" meta="2013 · Kiosk" />
        <p>Description</p>
      </LayoutColumn>
      <Frame label="1">
        <Device
          image={filterImage(images, "av-selfcheckout-welcome")}
          model="kiosk"
          margin="0"
        />
      </Frame>
      <Frame label="2">
        <Device
          image={filterImage(images, "av-selfcheckout-next")}
          model="kiosk"
          margin="0"
        />
      </Frame>
      <Frame label="3">
        <Device
          image={filterImage(images, "av-selfcheckout-put")}
          model="kiosk"
          margin="0"
        />
      </Frame>
      <Frame label="4">
        <Device
          image={filterImage(images, "av-selfcheckout-bye")}
          model="kiosk"
          margin="0"
        />
      </Frame>
      <LayoutColumn>
        <Next
          type="project"
          id="megafon-lk"
          title="Megafon Account Managment"
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
        relativeDirectory: { eq: "pages/projects/av-selfcheckout" }
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
