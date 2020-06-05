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
        <p>
          Azbuka Vkusa, one of the top Moscow retailers, decided to test the
          self-checkout process in their supermarkets. So they were planning to
          replace cashiers in the future. I have designed a user interface for
          self-checkout kiosks. Illustrations were outsourced according to my
          sketches. Self-checkout kiosks are now successfully working in
          Azbuka's supermarkets.
        </p>
        <p>
          UPD 2019: Azbuka rolled down self-checkout due to high maintenance
          fees.
        </p>
      </LayoutColumn>
      <Frame label="Welcome screen">
        <Device
          image={filterImage(images, "av-selfcheckout-welcome")}
          model="kiosk"
        />
      </Frame>
      <Frame label="The customer scans goods, weights fresh produce, pays for purchases, spends his bonuses, and scans the receipt, all by himself. The main goal was to create a feeling of constant control.">
        <Device
          image={filterImage(images, "av-selfcheckout-next")}
          model="kiosk"
        />
      </Frame>
      <Frame label="The device controls purchases using a scale. Therefore, it was important to clearly show that the purchase should be placed on the platform on the right.">
        <Device
          image={filterImage(images, "av-selfcheckout-put")}
          model="kiosk"
        />
      </Frame>
      <Frame label="Thanks for the purchase!">
        <Device
          image={filterImage(images, "av-selfcheckout-bye")}
          model="kiosk"
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
