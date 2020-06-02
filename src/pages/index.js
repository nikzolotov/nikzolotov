import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";

import projectsData from "./projects/projects.json";

export default ({ data }) => {
  // Assign fancy images to projects
  const projects = projectsData.items.map((project) => {
    project = { ...project };
    if (project.image)
      project.image = data.projectsImgs.edges.filter(
        (item) => item.node.name === project.image
      )[0].node.childImageSharp.fluid;
    return project;
  });

  return (
    <Layout index>
      <Intro>
        <p>
          Hi, I’m Nikita Zolotov, a product designer and developer based in
          Moscow. Here’re some projects that I’ve done in recent time.
        </p>
      </Intro>
      <MainProject
        title="Personal finances visualization"
        year="2020"
        type="Web · D3.js"
        image={data.mainImg.childImageSharp.fluid}
      />
      <ProjectList items={projects.filter((p) => p.top)} />
    </Layout>
  );
};

function MainProject(props) {
  return (
    <Link
      to="/finances/2017/"
      css={css`
        display: block;
        margin-bottom: var(--spacing-x-large);
        color: var(--text-color-1);
        &:hover,
        &:hover .meta {
          color: var(--text-color-1);
        }
      `}
    >
      <Img fluid={props.image} />
      <h1
        css={css`
          margin: var(--spacing-small) 0 var(--spacing-tiny) 0;
        `}
      >
        {props.title}
      </h1>
      <p
        className="meta"
        css={css`
          margin: 0;
          color: var(--text-color-2);
          transition: color 0.25s;
        `}
      >
        {props.year} · {props.type}
      </p>
    </Link>
  );
}

export const query = graphql`
  query {
    projectsImgs: allFile(
      filter: { relativePath: { regex: "/pages/projects/.*.(png|jpg)$/" } }
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
    mainImg: file(relativePath: { eq: "pages/datavis/finances-sankey.png" }) {
      childImageSharp {
        fluid(maxHeight: 720, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
