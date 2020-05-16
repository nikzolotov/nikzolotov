import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default (props) => {
  const StyledLink = styled((props) => <Link {...props} />)`
    display: block;
    margin: var(--spacing-xx-large) 0 0 0;
    color: var(--text-color-1);
    &:hover,
    &:hover p {
      transition: color 0.25s;
      color: var(--text-color-1);
    }
  `;
  let link = "/";
  if (props.type === "project") link += "projects/" + props.id + "/";

  return (
    <StyledLink to={link}>
      <p
        css={css`
          margin: 0;
          font-size: 25px;
          line-height: 35px;
          color: var(--text-color-2);
        `}
      >
        Next {props.type}
      </p>
      <h2
        css={css`
          margin: 0;
        `}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
    </StyledLink>
  );
};
