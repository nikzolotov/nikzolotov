import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Intro from "../../components/Intro";
import ProjectList from "../../components/ProjectList";
import ProjectTable from "../../components/ProjectTable";

export default ({ data }) => {
  const images = data.allFile.edges;
  const projects = [
    {
      id: "gas-stations",
      title:
        "<abbr title='Neft Magistral'>NM</abbr> Gas Stations Self-Checkout",
      year: 2020,
      type: "Kiosk",
      field: "Driver Services",
      image: filterImage(images, "gas-stations-main"),
      device: "htc",
      deviceMaxWidth: "184px",
      cols: 1,
    },
    {
      id: "toyota-dmm",
      title: "Toyota <abbr title='Dealer Marketing Management'>DMM</abbr>",
      year: 2020,
      type: "Web App",
      field: "Marketing, Car dealers, <abbr>B2B</abbr>",
      nda: true,
    },
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
    {
      id: "skoda-dmm",
      title: "Škoda <abbr title='Dealer Marketing Management'>DMM</abbr>",
      year: 2018,
      type: "Web App",
      field: "Marketing, Car dealers, <abbr>B2B</abbr>",
      nda: true,
    },
    {
      id: "audi-dmm",
      title: "Audi <abbr title='Dealer Marketing Management'>DMM</abbr>",
      year: 2018,
      type: "Web App",
      field: "Marketing, Car dealers, <abbr>B2B</abbr>",
      nda: true,
    },
    {
      id: "gulfstream-b2b",
      title: "Gulfstream <abbr>B2B</abbr>",
      year: 2018,
      type: "Web App",
      field: "Home security, <abbr>B2B</abbr>",
      inList: true,
      image: filterImage(images, "yandex-sports-wc18"),
      device: "safari",
      deviceWidth: "590px",
      cols: 1,
    },
    {
      id: "gulfstream",
      title: "Gulfstream",
      year: 2018,
      type: "iOS App",
      field: "Home security",
      inList: true,
      image: filterImage(images, "yandex-touch-hockey"),
      device: "abstract-phone",
      deviceMaxWidth: "184px",
      cols: 1,
    },
    {
      id: "leader",
      title: "Leader Engineering",
      year: 2017,
      type: "Web",
      field: "Engineering",
      inList: true,
      image: filterImage(images, "yandex-sports-wc18"),
      device: "safari",
      deviceWidth: "590px",
      cols: 1,
    },
    {
      id: "vw-dmm",
      title: "Volkswagen <abbr title='Dealer Marketing Management'>DMM</abbr>",
      year: 2017,
      type: "Web App",
      field: "Marketing, Car dealers, <abbr>B2B</abbr>",
      nda: true,
    },
    {
      id: "yandex-14",
      title: "Yandex v14",
      year: 2015,
      type: "Web",
      field: "Internet Search & Entertaiment",
      inList: true,
      image: filterImage(images, "yandex-14-morda"),
      device: "safari",
      deviceMaxWidth: "590px",
      cols: 2,
    },
    {
      id: "yandex-touch",
      title: "The Mobile Version of Yandex",
      year: 2015,
      type: "Web",
      field: "Internet Search & Entertaiment",
      inList: true,
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
      field: "Internet Search & Entertaiment",
      inList: true,
      image: filterImage(images, "yandex-tablet-morda"),
      device: "ipad",
      deviceWidth: "620px",
      cols: 1,
    },
    {
      id: "yandex-tv",
      title: "Yandex for Smart <abbr>TV</abbr>",
      year: 2015,
      type: "Web",
      field: "Internet Search & Entertaiment",
      inList: true,
      image: filterImage(images, "yandex-tv-main"),
      device: "tv",
      deviceMaxWidth: "590px",
      cols: 2,
    },
    {
      id: "marytrufel",
      title: "Bridal Store Mary Trufel",
      year: 2014,
      type: "Web",
      field: "E-commerce",
    },
    {
      id: "av-selfcheckout",
      title: "Azbuka Vkusa Self-checkout",
      year: 2013,
      type: "Kiosk",
      field: "Retail",
    },
    {
      id: "megafon-lk",
      title: "Megafon Account Managment",
      year: 2013,
      type: "Web App",
      field: "Mobile Networking",
    },
  ];
  return (
    <Layout>
      <Intro>
        <p>
          I’ve designed and built product experiences for&nbsp;Yandex, Škoda,
          Volkswagen, Audi, Megafon. I&nbsp;did both web and app design.
        </p>
      </Intro>
      <ProjectList items={projects.filter((item) => item.inList === true)} />
      <h2>All projects</h2>
      <ProjectTable items={projects} />
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
