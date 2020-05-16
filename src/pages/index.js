import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";

export default ({ data }) => {
  const images = data.projectsImgs.edges;
  const projects = [
    {
      id: "gas-stations",
      title: "Gas Stations in Navigator",
      year: 2018,
      type: "App",
      field: "Driver Services",
      inList: true,
      image: filterImage(images, "gas-stations-main"),
      device: "abstract-phone",
      deviceMaxWidth: "184px",
      cols: 1,
    },
    {
      id: "yandex-sports",
      title: "Sports on Yandex",
      year: 2018,
      type: "Web",
      field: "Entertaiment",
      inList: true,
      image: filterImage(images, "yandex-sports-wc18"),
      device: "safari",
      deviceMaxWidth: "590px",
      cols: 2,
    },
  ];
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
      <ProjectList items={projects} />
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

const filterImage = function (i, name) {
  return i.filter((item) => item.node.name === name)[0].node.childImageSharp
    .fluid;
};

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
