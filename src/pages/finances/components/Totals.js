import React from "react";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <ul
      css={css`
        position: absolute;
        top: var(--spacing-base);
        left: 0;
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      `}
    >
      <Total title="Income" value={0} />
      <Total title="Spending" value={0} />
      <Total title="Savings" value={1} />
      <Total title="Savings rate" value={2} percentage />
    </ul>
  );
};
function Total(props) {
  return (
    <li
      css={css`
        margin: 0 var(--spacing-base) 0 0;
      `}
    >
      <span
        css={css`
          display: block;
        `}
      >
        {props.title}
      </span>
      <span
        css={css`
          display: block;
          font-family: ApercuBold, Helvetica, Arial, sans-serif;
        `}
      >
        {props.percentage ? (
          <>{props.value.toFixed(2)}&thinsp;%</>
        ) : (
          props.value.toLocaleString()
        )}
      </span>
      <span
        css={css`
          display: block;
          font-size: 15px;
          line-height: 20px;
          color: #82be70;
        `}
      >
        +100%
      </span>
    </li>
  );
}
