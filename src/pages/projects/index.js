import React from "react";

import Layout from "../../components/Layout";
import Intro from "../../components/Intro";
import ProjectList from "../../components/ProjectList";

export default ({ data }) => {
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
      image: data.file.childImageSharp.fixed,
      cols: 1,
    },
    {
      id: "yandex-touch",
      title: "Mobile version of Yandex",
      year: 2015,
      type: "Web",
      image: data.file.childImageSharp.fixed,
      cols: 1,
    },
    {
      id: "yandex-tablet",
      title: "Yandex for tablets",
      year: 2015,
      type: "Web",
      image: data.file.childImageSharp.fixed,
      cols: 1,
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

export const query = graphql`
  query {
    file(
      relativePath: { eq: "pages/projects/gas-stations/gas-stations-main.png" }
    ) {
      childImageSharp {
        fixed(width: 256, height: 460) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
