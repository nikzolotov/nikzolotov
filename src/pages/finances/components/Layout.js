import React from "react";
import { useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { css } from "@emotion/core";

import Avatar from "../../../components/Avatar";
import Menu from "../../../components/Menu";

export default (props) => {
  return (
    <div
      css={css`
        position: relative;
        min-width: 1000px;
        margin: var(--spacing-base) var(--spacing-large);
      `}
    >
      <Header {...props} />
      {props.children}
    </div>
  );
};

function Header(props) {
  const menuItems = [
    { key: "finances-overview", link: "/finances/", name: "Overview" },
    { key: "finances-2019", link: "/finances/2019/", name: "2019" },
    { key: "finances-2018", link: "/finances/2018/", name: "2018" },
    { key: "finances-2017", link: "/finances/2017/", name: "2017" },
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
      nastya: file(relativePath: { eq: "pages/finances/nastya.jpg" }) {
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
        <Menu items={menuItems} inline centered />
      </div>
      <div
        css={css`
          width: 30%;
          text-align: right;
        `}
      >
        <Link
          to="/"
          css={css`
            display: inline-flex;
            flex-direction: row-reverse;
          `}
        >
          <Avatar
            image={images.nastya.childImageSharp.fixed}
            margin="0 0 0 -10px"
          />
          <Avatar image={images.nikita.childImageSharp.fixed} />
        </Link>
      </div>
    </div>
  );
}
