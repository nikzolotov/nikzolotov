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
        list-style: none;
        ${props.inline && "display: flex; flex-wrap: wrap;"}
        ${props.centered && "justify-content: center;"}
      `}
    >
      {props.items.map((item, i) => (
        <MenuItem {...props} {...item} />
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
    ${props.marked &&
    css`
      &.active:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -8px;
        width: 24px;
        height: 2px;
        margin-left: -12px;
        background: var(--green-bright);
      }
    `}
  `;

  return (
    <li
      css={css`
        position: relative;
        margin-bottom: var(--spacing-tiny);
        ${props.inline &&
        css`
          margin: 0 var(--spacing-base) 0 0;
          &:last-child {
            margin-right: 0;
          }
        `}
      `}
    >
      {!props.external ? (
        <StyledLink
          to={props.link}
          activeClassName="active"
          partiallyActive={props.partiallyActive}
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
