import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

import SEO from "../SEO";
import Menu from "../Menu";
import Avatar from "../Avatar";
import "./style.css";

export default (props) => {
  return (
    <div
      css={css`
        position: relative;
        margin: var(--spacing-base) var(--spacing-large);
        @media (max-width: 640px) {
          margin: var(--spacing-base);
        }
        @media (max-width: 350px) {
          margin: 20px;
        }
      `}
    >
      <SEO />
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
        @media (max-width: 1000px) {
          position: static;
          height: auto;
          margin-bottom: var(--spacing-base);
        }
      `}
    >
      <div
        css={css`
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
          @media (max-width: 1000px) {
            width: auto;
          }
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
          width: calc((100% * 2 / 6) - (var(--gap) * 4 / 6));
          @media (max-width: 1000px) {
            width: auto;
          }
        `}
      >
        <Menu items={menuItems} invert={props.index} partiallyActive />
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
        @media (max-width: 1000px) {
          margin: 0;
          padding-top: var(--spacing-large);
        }
      `}
    >
      <Menu items={menuItems} inline external />
    </footer>
  );
}
