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
      <SEO title="Gulfstream B2B" />
      <LayoutColumn>
        <ArticleTitle meta="2017 · Web App">
          Gulfstream <abbr>B2B</abbr>
        </ArticleTitle>
        <p>
          I took part in the redesign of the Gulfstream B2B platform for
          business owners who have objects under security protection. The users
          of the system are either business owners themselves, or, more
          frequently, security managers. They monitor statutes of the objects,
          manage actual users of the security system (employees, staff), manage
          customer agreements, and so on.
        </p>
      </LayoutColumn>
      <Frame label="Main screen with objects statuses and last actions">
        <Device
          image={filterImage(images, "gulfstream-b2b-main")}
          model="safari"
        />
      </Frame>
      <Frame label="List of all objects">
        <Device
          image={filterImage(images, "gulfstream-b2b-objects")}
          model="safari"
        />
      </Frame>
      <Frame label="Object settings and actions">
        <Device
          image={filterImage(images, "gulfstream-b2b-object")}
          model="safari"
        />
      </Frame>
      <Frame label="Reports settings">
        <Device
          image={filterImage(images, "gulfstream-b2b-reports")}
          model="safari"
        />
      </Frame>
      <LayoutColumn>
        <Next type="project" id="gulfstream" title="Gulfstream" />
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
        relativeDirectory: { eq: "pages/projects/gulfstream-b2b" }
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
