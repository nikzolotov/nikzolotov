import React from "react";

import Layout from "../../components/Layout";
import Intro from "../../components/Intro";
import ProjectList from "../../components/ProjectList";

export default ({ data }) => {
  const images = data.allFile.edges;
  const projects = [
    // {
    //   id: "gas-stations",
    //   title: "Gas Stations in Navigator",
    //   year: 2018,
    //   type: "App",
    //   image: data.file.childImageSharp.fixed,
    //   cols: 1,
    // },
    // {
    //   id: "yandex-sports",
    //   title: "Sports on Yandex",
    //   year: 2018,
    //   type: "Web",
    //   image: data.file.childImageSharp.fixed,
    //   cols: 2,
    // },
    // {
    //   id: "gulfstream-b2b",
    //   title: "Gulfstream B2B",
    //   year: 2018,
    //   type: "Web",
    //   image: data.file.childImageSharp.fixed,
    //   cols: 1,
    // },
    // {
    //   id: "gas-stations",
    //   title: "Sports on Yandex",
    //   year: 2018,
    //   type: "Web",
    //   image: data.file.childImageSharp.fixed,
    //   cols: 1,
    // },
    // {
    //   id: "gas-stations",
    //   title: "Gulfstream B2B",
    //   year: 2018,
    //   type: "Web",
    //   image: data.file.childImageSharp.fixed,
    //   cols: 1,
    // },
    {
      id: "yandex-14",
      title: "14th version of Yandex",
      year: 2015,
      type: "Web",
      image: filterImage(images, "yandex-14-morda"),
      device: "safari",
      deviceMaxWidth: "590px",
      cols: 2,
    },
    {
      id: "yandex-touch",
      title: "Mobile version of Yandex",
      year: 2015,
      type: "Web",
      image: filterImage(images, "yandex-touch-hockey"),
      device: "htc",
      deviceMaxWidth: "184px",
      cols: 1,
    },
    {
      id: "yandex-tablet",
      title: "Yandex for tablets",
      year: 2015,
      type: "Web",
      image: filterImage(images, "yandex-tablet-morda"),
      device: "ipad",
      deviceMaxWidth: "590px",
      cols: 2,
    },
  ];
  return (
    <Layout>
      <Intro>
        <p>
          I’ve designed and built product experiences for Yandex, Škoda,
          Volkswagen, Audi, Megafon. I did web & app design.
        </p>
      </Intro>
      <ProjectList items={projects} />
      <div>NDA Projects</div>
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
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
