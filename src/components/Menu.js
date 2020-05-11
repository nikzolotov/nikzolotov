import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default (props) => {
  const invert = props.invert,
    inline = props.inline,
    external = props.external;

  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
      `}
    >
      {props.items.map((props) => (
        <MenuItem
          invert={invert}
          inline={inline}
          external={external}
          {...props}
        />
      ))}
    </ul>
  );
};

function MenuItem(props) {
  const linkColor = props.invert
    ? "var(--text-color-1);"
    : "var(--text-color-2);";

  const hoverColor = props.invert
    ? "var(--text-color-2);"
    : "var(--text-color-1);";

  const StyledLink = styled((props) => <Link {...props} />)`
    color: ${linkColor};
    &.active,
    &:hover {
      color: ${hoverColor};
    }
  `;

  const inlineStyle = props.inline
    ? "display: inline-block; margin-right: var(--spacing-base);"
    : "";

  return (
    <li
      css={css`
        list-style: none;
        margin-bottom: var(--spacing-tiny);
        ${inlineStyle}
      `}
    >
      {!props.external ? (
        <StyledLink
          to={props.link}
          activeClassName="active"
          partiallyActive={true}
        >
          {props.name}
        </StyledLink>
      ) : (
        <a
          css={css`
            color: ${linkColor};
            &.active,
            &:hover {
              color: ${hoverColor};
            }
          `}
          href={props.link}
        >
          {props.name}
        </a>
      )}
    </li>
  );
}
