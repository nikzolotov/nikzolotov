import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";

export default ({ data }) => {
  const projects = [
    {
      key: "gas-stations",
      title: "Gas Stations in Navigator",
      year: 2018,
      type: "App",
      image: data.file.childImageSharp.fixed,
    },
    {
      key: "gas-stations",
      title: "Sports on Yandex",
      year: 2018,
      type: "Web",
      image: data.file.childImageSharp.fixed,
    },
    {
      key: "gas-stations",
      title: "Gulfstream B2B",
      year: 2018,
      type: "Web",
      image: data.file.childImageSharp.fixed,
    },
    {
      key: "gas-stations",
      title: "Sports on Yandex",
      year: 2018,
      type: "Web",
      image: data.file.childImageSharp.fixed,
    },
    {
      key: "gas-stations",
      title: "Gulfstream B2B",
      year: 2018,
      type: "Web",
      image: data.file.childImageSharp.fixed,
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

export const query = graphql`
  query {
    file(relativePath: { eq: "images/projects/gas-stations/test.png" }) {
      childImageSharp {
        fixed(width: 256, height: 460) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
