/**
 * Вступительный абзац на корневых страницах.
 * Без него контент начинается от самого верха.
 */

import React from "react";
import { css } from "@emotion/core";

export default ({ children }) => {
  return (
    <div
      css={css`
        min-height: 180px;
        overflow: auto;

        width: calc((100% * 2 / 6) - (var(--gap) * 4 / 6));
        margin-left: calc((100% * 1 / 6) - (var(--gap) * 5 / 6) + var(--gap));
      `}
    >
      {children}
    </div>
  );
};
