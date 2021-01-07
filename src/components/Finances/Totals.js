import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";

export default (props) => {
  const currency = props.currency || 1;

  const income = props.data.income.total / currency,
    spending = props.data.expenses.total / currency,
    savings = income - spending,
    savingsRate = (1 - spending / income) * 100;

  const prevIncome = props.prev.income.total / currency,
    prevSpending = props.prev.expenses.total / currency,
    prevSavings = prevIncome - prevSpending,
    prevSavingsRate = (1 - prevSpending / prevIncome) * 100;

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
        ${props.static &&
        css`
          position: static;
          margin: var(--spacing-base) 0 var(--spacing-large) 0;
        `}
      `}
    >
      <Total
        title="Income"
        value={income}
        currency="&#8381;"
        diff={(income / prevIncome - 1) * 100}
        nodata={props.nodata}
        prevYear={props.prev.year}
      />
      <Total
        title="Spending"
        value={spending}
        diff={(spending / prevSpending - 1) * 100}
        diffInvert
        nodata={props.nodata}
      />
      <Total
        title="Savings"
        value={savings}
        diff={(savings / prevSavings - 1) * 100}
      />
      <Total
        title="Savings rate"
        value={savingsRate}
        diff={savingsRate - prevSavingsRate}
        percentage
      />
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
          font-weight: bold;
        `}
      >
        {props.percentage ? (
          <>{props.value.toFixed(2)}&thinsp;%</>
        ) : (
          <>
            {props.currency && (
              <span
                css={css`
                  margin-right: 0.2em;
                  font-family: "Helvetica Neue", Arial, sans-serif;
                  font-weight: bold;
                `}
              >
                {props.currency}
              </span>
            )}
            {props.value.toLocaleString()}
          </>
        )}
      </span>
      <span
        css={css`
          display: block;
          font-size: 15px;
          line-height: 20px;
        `}
      >
        <Diff
          value={props.diff}
          invert={props.diffInvert}
          nodata={props.nodata}
          prevYear={props.prevYear}
        />
      </span>
    </li>
  );
}
