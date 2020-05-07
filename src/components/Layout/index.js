import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Menu from "../Menu";
import "./style.css";

export default (props) => {
  return (
    <div
      css={css`
        position: relative;
        margin: var(--spacing-base) var(--spacing-large);
      `}
    >
      <Header index={props.index} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

function Header(props) {
  const menuItems = [
    { key: "projects", link: "/projects/", name: "Projects" },
    { key: "datavis", link: "/datavis/", name: "Visualizations" },
    // { key: "blog", link: "/blog/", name: "Blog" },
    { key: "about", link: "/about/", name: "About" },
  ];

  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "components/Layout/avatar.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <nav
      css={css`
        position: absolute;
        width: 100%;
        height: 0;
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
        `}
      >
        <Avatar image={image.file.childImageSharp.fixed} />
      </div>
      <div
        css={css`
          width: calc((100% * 1 / 6) - (var(--gap) * 5 / 6));
        `}
      >
        <Menu items={menuItems} invert={props.index} />
      </div>
      <div
        css={css`
          width: calc((100% * 1 / 6) - (var(--gap) * 5 / 6));
        `}
      >
        {/* Langs go here */}
      </div>
    </nav>
  );
}

function Avatar(props) {
  const StyledImg = styled((props) => <Img {...props} />)`
    border-radius: 40px;
  `;
  return (
    <Link to={`/`}>
      <StyledImg fixed={props.image} />
    </Link>
  );
}

function Footer() {
  const menuItems = [
    {
      key: "email",
      link: "mailto:nikzolotov@gmail.com",
      name: "nikzolotov@gmail.com",
    },
    {
      key: "linked",
      link: "https://www.linkedin.com/in/nikita-zolotov/",
      name: "LinkedIn",
    },
    {
      key: "fb",
      link: "https://www.facebook.com/nikzolotov",
      name: "Facebook",
    },
    {
      key: "insta",
      link: "https://www.instagram.com/nikzolotovs/",
      name: "Instagram",
    },
  ];

  return (
    <footer
      css={css`
        margin-left: calc((100% * 1 / 6) - (var(--gap) * 5 / 6) + var(--gap));
        padding-top: var(--spacing-xx-large);
      `}
    >
      <Menu items={menuItems} inline external />
    </footer>
  );
}
