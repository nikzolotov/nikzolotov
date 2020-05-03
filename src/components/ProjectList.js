import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Device from "./Device";

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
  const frameFlex = !props.deviceWidth
    ? "display: flex; justify-content: center; align-items: center;"
    : "";

  const Frame = styled.div`
    ${frameFlex}
    height: 440px;
    padding: var(--spacing-large);
    background: rgba(var(--white-rgb), 0.05);
    transition: background 0.5s;
    overflow: hidden;
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

  return (
    <div
      key={props.id}
      css={css`
        width: calc(
          (100% * ${props.cols * 2} / 6) -
            (var(--gap) * ${6 - props.cols * 2} / 6)
        );
        margin-bottom: var(--spacing-x-large);
      `}
    >
      <StyledLink to={`/projects/${props.id}/`}>
        <Frame>
          <Device
            image={props.image}
            model={props.device}
            maxWidth={props.deviceMaxWidth}
            width={props.deviceWidth}
            margin="0"
          />
        </Frame>
        <h3
          css={css`
            margin: var(--spacing-small) 0 0 0;
            font-family: ApercuRegular, Helvetica, Arial, sans-serif;
          `}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          css={css`
            margin: 0;
            color: rgba(var(--white-rgb), var(--text-opacity-2));
          `}
        >
          {props.year} · {props.type}
        </p>
      </StyledLink>
    </div>
  );
}
