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
        <ArticleTitle meta="2013 · Web App">
          Megafon account managment
        </ArticleTitle>
        <p>
          To replace outdated USSD-based interface Megafon hired Usethics to
          make a complete redesign of its account management tool. I&nbsp;worked
          on designing billing, service activation, top-up balance, and many
          others of its features. This was UX-prototype, but I&nbsp;offered some
          visual solutions which were accepted by Megafon. Now, this tool is
          working and evolving by Megafon's designers.
        </p>
      </LayoutColumn>
      <Frame label="Main screen">
        <Device image={filterImage(images, "megafon-lk-main")} model="safari" />
      </Frame>
      <Frame label="Service page">
        <Device
          image={filterImage(images, "megafon-lk-service")}
          model="safari"
        />
      </Frame>
      <Frame label="Balance top-up">
        <Device
          image={filterImage(images, "megafon-lk-topup")}
          model="safari"
        />
      </Frame>
      <Frame label="Mobile version">
        <Device image={filterImage(images, "megafon-lk-mobile")} model="htc" />
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
