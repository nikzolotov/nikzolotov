/**
 * Обёртка для центральной колонки.
 * TODO: сайдбар
 */

import React from "react";
import { css } from "@emotion/core";

export default ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          width: calc((100% * 3 / 6) - (var(--gap) * 3 / 6));
          margin-left: calc((100% * 1 / 6) - (var(--gap) * 5 / 6) + var(--gap));
          margin-right: var(--gap);
        `}
      >
        {children}
      </div>
    </div>
  );
};
