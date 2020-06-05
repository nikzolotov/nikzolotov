import React from "react";
import { graphql } from "gatsby";

import SEO from "../../components/SEO";
import Layout from "../../components/Layout";
import Intro from "../../components/Intro";
import ProjectList from "../../components/ProjectList";
import ProjectTable from "../../components/ProjectTable";

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
      <SEO title="Projects" />
      <Intro>
        <p>
          I’ve designed and built product experiences for&nbsp;Yandex, Škoda,
          Volkswagen, Audi, Megafon. I&nbsp;did both web and app design.
        </p>
      </Intro>
      <ProjectList items={projects.filter((p) => p.actual)} />
      <h2>All projects</h2>
      <ProjectTable items={projects} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: {}
        relativePath: { regex: "/pages/projects/.*.(png|jpg)$/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 400, jpegQuality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
