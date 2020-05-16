/**
 * Рамка для скриншотов с подписью
 */

import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";

export default (props) => {
  const padding = props.padding
    ? props.padding
    : "var(--spacing-xx-large) var(--spacing-x-large)";

  const bgColor = props.bgColor
    ? props.bgColor
    : "rgba(var(--white-rgb), 0.05)";

  return (
    <div
      css={css`
        margin: var(--spacing-large) 0;
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          justify-content: space-evenly;
          padding: ${padding};
          background: ${bgColor};
        `}
      >
        {props.children}
      </div>
      {props.afterImage && <Img fluid={props.afterImage} />}
      <p
        css={css`
          margin: var(--spacing-small) 0 0 0;
          margin-right: calc((100% * 2 / 6) - (var(--gap) * 4 / 6));
          color: var(--text-color-2);
        `}
        dangerouslySetInnerHTML={{ __html: props.label }}
      />
    </div>
  );
};
