import React from "react";

import SEO from "../../components/SEO";
import Layout from "../../components/Layout";
import Intro from "../../components/Intro";
import VizList from "../../components/VizList";

import projectsData from "./projects.json";

export default ({ data }) => {
  // Assign fancy images to projects
  const projects = projectsData.items.map((p) => {
    p = { ...p };
    if (p.image)
      p.image = data.allFile.edges.filter(
        (d) => d.node.name === p.image
      )[0].node.childImageSharp.fluid;
    return p;
  });

  return (
    <Layout>
      <SEO title="Visualizations" />
      <Intro>
        <p>
          I started to learn d3.js and React. Here I store my projects on data
          visualization.
        </p>
      </Intro>
      <VizList items={projects} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: { relativePath: { regex: "/pages/datavis/.*.(png|jpg)$/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 400, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
