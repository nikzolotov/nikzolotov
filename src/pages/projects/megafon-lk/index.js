import React from "react";
import { graphql } from "gatsby";

import SEO from "../../../components/SEO";
import Layout from "../../../components/Layout";
import LayoutColumn from "../../../components/LayoutColumn";
import ArticleTitle from "../../../components/ArticleTitle";
import Frame from "../../../components/Frame";
import Device from "../../../components/Device";

export default ({ data }) => {
  const images = data.allFile.edges;
  return (
    <Layout>
      <SEO title="Megafon account managment" />
      <LayoutColumn>
        <ArticleTitle title="Megafon account managment" meta="2013 · Web App" />
        <p>
          To replace outdated USSD-based interface Megafon hired Usethics
          to&nbsp;make a complete redesign of it's account managment tool.
          I&nbsp;worked on&nbsp;designing billing, service activation, top-up
          balance and many others of&nbsp;it's features. This was UX-prototype,
          but I&nbsp;offered some visual solutions which was accepted by
          Megafon. Now this tool is working and evolving by&nbsp;Megafon's
          designers.
        </p>
      </LayoutColumn>
      <Frame label="Main screen">
        <Device
          image={filterImage(images, "megafon-lk-main")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Service page">
        <Device
          image={filterImage(images, "megafon-lk-service")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Balance top-up">
        <Device
          image={filterImage(images, "megafon-lk-topup")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="Mobile version">
        <Device
          image={filterImage(images, "megafon-lk-mobile")}
          model="htc"
          margin="0"
        />
      </Frame>
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
        relativeDirectory: { eq: "pages/projects/megafon-lk" }
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
