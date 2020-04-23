import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import Menu from "../components/Menu";
import "./Layout.css";

export default (props) => {
  return (
    <div
      css={css`
        position: relative;
        margin: 30px 50px;
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
    { key: "datavis", link: "/datavis/", name: "Visualisations" },
    { key: "blog", link: "/blog/", name: "Blog" },
    { key: "about", link: "/about/", name: "About" },
  ];

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
