/**
 * Рамка для скриншотов с подписью
 */

import React from "react";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <div
      css={css`
        margin: var(--spacing-large) 0;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-evenly;
          padding: var(--spacing-xx-large) var(--spacing-x-large);
          background: rgba(var(--white-rgb), 0.05);
        `}
      >
        {props.children}
      </div>
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
