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
          color: rgba(var(--white-rgb), var(--text-opacity-2));
        `}
      >
        {props.label}
      </p>
    </div>
  );
};
