import React from "react";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";

export default ({ data }) => {
  const images = data.allFile.edges;
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
      <ProjectList items={projects} />
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
