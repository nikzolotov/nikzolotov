import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

import Menu from "../Menu";
import Avatar from "../Avatar";
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
        {props.index ? (
          <Avatar image={image.file.childImageSharp.fixed} />
        ) : (
          <Link to={`/`}>
            <Avatar image={image.file.childImageSharp.fixed} />
          </Link>
        )}
      </div>
      <div
        css={css`
          width: calc((100% * 1 / 6) - (var(--gap) * 5 / 6));
        `}
      >
        <Menu items={menuItems} invert={props.index} partiallyActive />
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
