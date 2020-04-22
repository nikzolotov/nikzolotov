import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import "./Layout.css";

export default ({ children }) => {
  return (
    <div
      css={css`
        position: relative;
        margin: 30px 50px;
      `}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <nav
      css={css`
        position: absolute;
        width: 100%;
        height: 0;
        display: flex;
      `}
    >
      <div
        css={css`
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
          margin-right: var(--gap);
        `}
      >
        <Link to={`/`}>Морда</Link>
      </div>
      <div
        css={css`
          width: calc((100% * 1 / 6) - (var(--gap) * 5 / 6));
          margin-right: var(--gap);
        `}
      >
        <MainMenu />
      </div>
      <div
        css={css`
          width: calc((100% * 1 / 6) - (var(--gap) * 5 / 6));
        `}
      >
        Langs
      </div>
    </nav>
  );
}

function MainMenu() {
  return (
    <ul>
      <MainMenuItem link={`/projects/`} name="Projects" />
      <MainMenuItem link={`/datavis/`} name="Visualisations" />
      <MainMenuItem link={`/blog/`} name="Blog" />
      <MainMenuItem link={`/about/`} name="About" />
    </ul>
  );
}

function MainMenuItem(props) {
  return (
    <li>
      <Link to={props.link}>{props.name}</Link>
    </li>
  );
}

function Footer() {
  return (
    <footer
      css={css`
        margin-left: calc((100% * 1 / 6) - (var(--gap) * 5 / 6) + var(--gap));
      `}
    >
      nikzolotov@gmail.com LinkedIn Facebook Instagram
    </footer>
  );
}
