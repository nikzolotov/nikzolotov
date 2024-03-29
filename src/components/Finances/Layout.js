import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

import Avatar from "../Avatar";
import Menu from "../Menu";
import CurrencySwitcher from "./CurrencySwitcher";
import "../Layout/style.css";

export default ({ children, showLevka, noCurrency }) => {
  return (
    <div
      css={css`
        position: relative;
        min-width: 1100px;
        margin: var(--spacing-base) var(--spacing-large);
      `}
    >
      <Header showLevka={showLevka} noCurrency={noCurrency} />
      {children}
      <Footer />
    </div>
  );
};

function Header({ showLevka, noCurrency }) {
  const menuItems = [
    {
      key: "finances-overview",
      link: "/finances/",
      name: "Overview",
    },
    {
      key: "finances-2017",
      link: "/finances/2017/",
      name: "2017",
    },
    {
      key: "finances-2018",
      link: "/finances/2018/",
      name: "2018",
    },
    {
      key: "finances-2019",
      link: "/finances/2019/",
      name: "2019",
    },
    {
      key: "finances-2020",
      link: "/finances/2020/",
      name: "2020",
    },
    {
      key: "finances-2021",
      link: "/finances/2021/",
      name: "2021",
    },
    {
      key: "finances-2022",
      link: "/finances/2022/",
      name: "2022",
    },
  ];

  const images = useStaticQuery(graphql`
    query {
      nikita: file(relativePath: { eq: "components/Layout/avatar.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nastya: file(relativePath: { eq: "components/Finances/nastya.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      levka: file(relativePath: { eq: "components/Finances/levka.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-base);
      `}
    >
      <div
        css={css`
          width: 30%;
        `}
      >
        <h1
          css={css`
            margin: 0;
          `}
        >
          Personal&nbsp;finances
        </h1>
      </div>
      <div
        css={css`
          width: 40%;
        `}
      >
        <Menu items={menuItems} inline centered marked />
      </div>
      <div
        css={css`
          width: 30%;
          text-align: right;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          `}
        >
          {showLevka && (
            <Avatar
              image={images.levka.childImageSharp.fixed}
              margin="0 0 0 -10px"
            />
          )}
          <Avatar
            image={images.nastya.childImageSharp.fixed}
            margin="0 0 0 -10px"
          />
          <Link
            to="/"
            css={css`
              display: flex;
            `}
          >
            <Avatar image={images.nikita.childImageSharp.fixed} />
          </Link>
          {!noCurrency && <CurrencySwitcher />}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      css={css`
        width: 80%;
        padding-top: var(--spacing-x-large);
        font-size: 15px;
        line-height: 20px;
        color: var(--text-color-2);
      `}
    >
      Technologies used: <a href="https://d3js.org">D3.js</a>,{" "}
      <a href="https://www.gatsbyjs.org">GatsbyJS</a>. View source code on{" "}
      <a href="https://github.com/nikzolotov/nikzolotov">Github</a>.
      <br />
      All data was meticulously gathered with a great help of Google Sheets.
      <br />
      JSON for the project was generated with{" "}
      <a href="https://gsuite.google.com/marketplace/app/export_sheet_data/903838927001">
        Export Sheet Data
      </a>{" "}
      Plugin.
    </div>
  );
}
