import React from "react";
import { css } from "@emotion/core";

export default (props) => {
  const income = props.data.income.total,
    spending = props.data.expenses.total,
    savings = income - spending,
    savingsRate = (1 - spending / income) * 100;

  const prevIncome = props.prev.income.total,
    prevSpending = props.prev.expenses.total,
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
        diff={(1 - prevIncome / income) * 100}
        nodata={props.nodata}
        prevYear={props.prev.year}
      />
      <Total
        title="Spending"
        value={spending}
        diff={(1 - prevSpending / spending) * 100}
        diffInvert
        nodata={props.nodata}
      />
      <Total
        title="Savings"
        value={savings}
        diff={(1 - prevSavings / savings) * 100}
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
  var color, label;

  if (props.nodata) {
    color = "var(--text-color-2)";
  } else if (props.diff > 0 || (props.diffInvert && props.diff < 0)) {
    color = "var(--green-bright)";
  } else {
    color = "var(--red-bright)";
  }

  if (props.nodata) {
    label = "No data";
    label += props.prevYear ? " for " + props.prevYear : "";
  } else {
    label = props.diff > 0 ? "+" : "";
    label +=
      Math.abs(props.diff) > 100
        ? props.diff.toFixed(0)
        : props.diff.toFixed(2);
    label += "&thinsp;%";
  }

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
          color: ${color};
        `}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </li>
  );
}
