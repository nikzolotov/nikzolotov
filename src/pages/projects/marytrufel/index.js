import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

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
      <SEO title="Bridal Store Mary Trufel" />
      <LayoutColumn>
        <ArticleTitle title="Bridal Store Mary Trufel" meta="2014 · Web" />
        <p>
          Working with Artem Gorbunov design agency, we created the second
          version of a bridal store called Mary Trufel. We wanted to show the
          variety of dresses and persuade girls to come and try them on. To do
          that we decided that the catalog shouldn't be the boring matrix.
          Mixing big and small photos, controlling eye attention, we engage
          bridal to take a close look and choose the dress of her life.
        </p>
        <p>
          I worked with an art director of the agency, doing the bunch of a
          designer's work: trying different layouts, designing algorithms to
          show different amounts of dresses, drawing simple graphics, and
          sketching illustrations for outsourcers. A month after launch visits
          increased by 32%, views increased by 512%, average time on the site
          increased from 1:25 to 4:25.
        </p>
      </LayoutColumn>
      <Frame label="Photos attracts attention to each dress">
        <Device
          image={filterImage(images, "marytrufel-catalog")}
          model="safari"
          margin="0"
        />
      </Frame>
      <Frame label="On the dress page, bridal sees full-size photographs immediately.<br/>Price tag contains color, availability, materials and so on.">
        <Device
          image={filterImage(images, "marytrufel-product")}
          model="safari"
          margin="0"
        />
        <Img
          css={css`
            width: 780px;
            margin-top: var(--spacing-x-large);
          `}
          fluid={filterImage(images, "marytrufel-badges")}
        />
      </Frame>
      <Frame label="Evening dresses for moms, bridesmaids, and guests">
        <Device
          image={filterImage(images, "marytrufel-evening")}
          model="safari"
          margin="0"
        />
      </Frame>
      <LayoutColumn>
        <Next
          type="project"
          id="av-selfcheckout"
          title="Azbuka Vkusa Self-checkout"
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
        relativeDirectory: { eq: "pages/projects/marytrufel" }
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
