/**
 * Заголовок статьи с подписью
 */

import React from "react";
import { css } from "@emotion/core";

export default ({ title, meta }) => {
  return (
    <>
      <h1
        css={css`
          margin-bottom: var(--spacing-tiny);
        `}
      >
        {title}
      </h1>
      {meta && (
        <div
          css={css`
            margin-bottom: var(--spacing-base);
            color: rgba(var(--white-rgb), var(--text-opacity-2));
          `}
        >
          {meta}
        </div>
      )}
    </>
  );
};
