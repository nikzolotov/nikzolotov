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
        <MenuItem key={key} link={link} name={name} invert={props.invert} />
      ))}
    </ul>
  );
};

function MenuItem(props) {
  const linkColor = props.invert
    ? "rgba(var(--white-rgb), var(--text-opacity-1))"
    : "rgba(var(--white-rgb), var(--text-opacity-2))";

  const StyledLink = styled((props) => <Link {...props} />)`
    color: ${linkColor};
    &.active,
    &:hover {
      color: rgba(var(--white-rgb), var(--text-opacity-1));
    }
  `;
  return (
    <li
      css={css`
        list-style: none;
      `}
    >
      <StyledLink
        to={props.link}
        activeClassName="active"
        partiallyActive={true}
      >
        {props.name}
      </StyledLink>
    </li>
  );
}
