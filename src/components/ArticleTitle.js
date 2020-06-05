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
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {meta && (
        <div
          css={css`
            margin-bottom: var(--spacing-base);
            color: var(--text-color-2);
          `}
        >
          {meta}
        </div>
      )}
    </>
  );
};
