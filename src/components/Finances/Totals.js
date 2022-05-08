import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";
import CurrencyValue from "./CurrencyValue";

export default ({
  data,
  prev,
  currencyRate = 1,
  currencySign,
  positionStatic,
  nodata,
}) => {
  const income = data.income.total / currencyRate,
    spending = data.expenses.total / currencyRate,
    savings = income - spending,
    savingsRate = (1 - spending / income) * 100;

  const prevIncome = prev.income.total / currencyRate,
    prevSpending = prev.expenses.total / currencyRate,
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
        ${positionStatic &&
        css`
          position: static;
          margin: var(--spacing-base) 0 var(--spacing-large) 0;
        `}
      `}
    >
      <Total
        title="Income"
        value={income}
        currencySign={currencySign}
        diff={(income / prevIncome - 1) * 100}
        nodata={nodata}
        prevYear={prev.year}
      />
      <Total
        title="Spending"
        value={spending}
        diff={(spending / prevSpending - 1) * 100}
        diffInvert
        nodata={nodata}
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

function Total({
  title,
  value,
  currencySign,
  diff,
  diffInvert,
  nodata,
  prevYear,
  percentage,
}) {
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
        {title}
      </span>
      <span
        css={css`
          display: block;
          font-weight: bold;
        `}
      >
        {percentage ? (
          <>{value.toFixed(2)}&thinsp;%</>
        ) : (
          <CurrencyValue sign={currencySign} value={value}/>
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
          value={diff}
          invert={diffInvert}
          nodata={nodata}
          prevYear={prevYear}
        />
      </span>
    </li>
  );
}
