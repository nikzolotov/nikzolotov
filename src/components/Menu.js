import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <ul
      css={css`
        margin: 0;
        padding: 0;
      `}
    >
      {props.items.map(({ key, link, name }) => (
        <MenuItem
          key={key}
          link={link}
          name={name}
          invert={props.invert}
          inline={props.inline}
          external={props.external}
        />
      ))}
    </ul>
  );
};

function MenuItem(props) {
  const linkColor = props.invert
    ? "rgba(var(--white-rgb), var(--text-opacity-1))"
    : "rgba(var(--white-rgb), var(--text-opacity-2))";

  const hoverColor = props.invert
    ? "rgba(var(--white-rgb), var(--text-opacity-2))"
    : "rgba(var(--white-rgb), var(--text-opacity-1))";

  const StyledLink = styled((props) => <Link {...props} />)`
    color: ${linkColor};
    &.active,
    &:hover {
      color: ${hoverColor};
    }
  `;

  const inlineStyle = props.inline
    ? "display: inline-block; margin-right: var(--spacing-base)"
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
