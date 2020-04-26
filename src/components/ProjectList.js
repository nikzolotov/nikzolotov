import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &::after {
          content: "";
          flex-basis: calc((100% * 2 / 6) - (var(--gap) * 4 / 6));
        }
      `}
    >
      {props.items.map((props) => (
        <ProjectListItem {...props} />
      ))}
    </div>
  );
};

function ProjectListItem(props) {
  const Frame = styled.div`
    height: 540px;
    text-align: center;
    background: rgba(var(--white-rgb), 0.05);
    transition: background 0.5s;
  `;

  const StyledLink = styled((props) => <Link {...props} />)`
    color: rgba(var(--white-rgb), var(--text-opacity-1));
    &:hover {
      color: inherit;
      ${Frame} {
        background: rgba(var(--white-rgb), 0.1);
      }
    }
  `;

  const StyledImg = styled((props) => <Img {...props} />)`
    margin-top: 54px;
  `;

  return (
    <div
      key={props.id}
      css={css`
        width: calc(
          (100% * ${props.cols * 2} / 6) -
            (var(--gap) * ${6 - props.cols * 2} / 6)
        );
      `}
    >
      <StyledLink to={`/projects/${props.id}/`}>
        <Frame>
          <StyledImg fixed={props.image} />
        </Frame>
        <h3
          css={css`
            margin: var(--spacing-small) 0 0 0;
            font-family: ApercuRegular, Helvetica, Arial, sans-serif;
          `}
        >
          {props.title}
        </h3>
        <p
          css={css`
            color: rgba(var(--white-rgb), var(--text-opacity-2));
          `}
        >
          {props.year} · {props.type}
        </p>
      </StyledLink>
    </div>
  );
}
