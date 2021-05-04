import React from "react";
import { css } from "@emotion/core";

import SavingsChart from "./SavingsChart";

export default (props) => {
  return (
    <>
      <h2
        css={css`
          margin-top: 0;
        `}
      >
        Savings rate
        <span
          css={css`
            margin-left: 10px;
            font-size: 18px;
            font-weight: normal;
            color: var(--text-color-2);
          `}
        >
          %
        </span>
      </h2>
      <SavingsChart income={props.income} expenses={props.expenses} />
    </>
  );
};
