import React from "react";
import { graphql } from "gatsby";

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
      <SEO title="Gas Stations in Navigator" />
      <LayoutColumn>
        <ArticleTitle
          title="Gas Stations in&nbsp;Navigator"
          meta="2018 · App"
        />
        <p>
          Yandex Navigator helps drivers drive. The app makes the fastest route,
          shows alternatives, and helps driver turn by turn. In 2018 the team
          decided to add new service for drivers—filling up the gas tank in the
          app with no need to get outside of a car.
        </p>
        <p>
          Main challenge was to make really simple day-to-day interface and meet
          all business expectations: show different kind of special offers, sell
          additional services like drivers goods or cofee. So, I couldn't do it
          with the super simple version, where you can say everything you need
          to the staff and relax. Everything should be in: choosing type and
          ammount of the fuel, pump number, additional service, instructions and
          so on. I had two weeks for everything. First week for actual design
          process. Second for testing and final refinements.
        </p>
        <p>
          I've split interaction into several steps. First, when the driver is
          close to the gas station, Navigator shows a pop-up offer to use the
          service and immediately choose the pump number. The gas station itself
          is marked with a special acid circle which is a part of the brand.
          Then the driver sees the main screen with a predefined or saved amount
          of gas, its type, and payment information. We couldn't make the store
          in time, so we show a banner with opening soon message. To make
          interface compact I put total sum and pump number right into the
          button.
        </p>
      </LayoutColumn>
      <Frame label="Navigator shows you an offer when you’re close to the gas station">
        <Device
          image={filterImage(images, "gas-stations-invitation")}
          model="abstract-phone"
        />
        <Device
          image={filterImage(images, "gas-stations-main")}
          model="abstract-phone"
        />
      </Frame>
      <LayoutColumn>
        <p>
          I made those huge fancy buttons with a gas type to show special
          offers. I also made different types of banners depending on context
          and saved payment information. And mockups for selling coffee and
          stuff from the main screen.
        </p>
      </LayoutColumn>
      <Frame label="After choosing the amount of gas user sees clear instructions of what to do next">
        <Device
          image={filterImage(images, "gas-stations-main-offer")}
          model="abstract-phone"
        />
        <Device
          image={filterImage(images, "gas-stations-main-store")}
          model="abstract-phone"
        />
      </Frame>
      <LayoutColumn>
        <p>
          The other difficulty was to test this unusual product in a short time.
          UX-laboratory was no use for me. I needed feedback from the actual
          usage of the product on gas stations. Here developers came to help.
          They prototyped really quickly. As soon as new mockups arrived in
          Zeppelin, the dev team immediately updated the prototype. This made it
          possible for us to roll out the first version within Yandex employees
          and get first feedback. The feedback really helped to update
          instructions and make them more clear.
        </p>
      </LayoutColumn>
      <Frame label="After choosing the amount of gas user sees clear instructions of what to do next">
        <Device
          image={filterImage(images, "gas-stations-instruction")}
          model="abstract-phone"
        />
        <Device
          image={filterImage(images, "gas-stations-filling")}
          model="abstract-phone"
        />
      </Frame>
      <LayoutColumn>
        <p>
          To speed up choosing the amount of gas I offered picker controls with
          predefined steps, that cover most of the scenarios. The table of
          contents in the right part is for not spinning picker for too long.
          Tests showed that drivers hadn't any troubles with them.
        </p>
      </LayoutColumn>
      <Frame label="Daylight theme">
        <Device
          image={filterImage(images, "gas-stations-picker-sum")}
          model="abstract-phone"
        />
        <Device
          image={filterImage(images, "gas-stations-picker-liters")}
          model="abstract-phone"
        />
      </Frame>
      <LayoutColumn>
        <p>
          Navigator has both daylight and night-time themes. All parts of the
          interface were redrawn for daylight usage.
        </p>
      </LayoutColumn>
      <Frame label="Daylight theme">
        <Device
          image={filterImage(images, "gas-stations-main-white")}
          model="abstract-phone"
        />
        <Device
          image={filterImage(images, "gas-stations-instruction-white")}
          model="abstract-phone"
        />
      </Frame>
      <LayoutColumn>
        <p>
          The project was finished in time and both team and business were
          satisfied. It was one of the most interesting, fast-paced and
          challenging projects. Although it looks pretty simple.
        </p>
        <Next type="project" id="yandex-sports" title="Yandex Sports" />
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
        relativeDirectory: { eq: "pages/projects/gas-stations" }
        extension: { regex: "/png|jpg/" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 256) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
