import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";
import CurrencyValue from "./CurrencyValue";

export default ({ data, prev, currencyRate, currencySign, diffInvert }) => {
  return (
    <table
      css={css`
        width: 100%;
        margin-bottom: var(--spacing-large);
        border-top: 1px solid rgba(var(--white-rgb), 0.1);
      `}
    >
      <tbody>
        {data.map((item, i) => (
          <CategoriesTableItem
            i={i}
            key={i}
            prev={prev}
            currencyRate={currencyRate}
            currencySign={currencySign}
            diffInvert={diffInvert}
            title={item.title}
            sum={item.sum}
            main={item.main}
            comment={item.comment}
          />
        ))}
      </tbody>
    </table>
  );
};
function CategoriesTableItem({
  i,
  prev,
  currencyRate = 1,
  currencySign,
  diffInvert,
  title,
  sum,
  main,
  comment,
}) {
  let prevSum, diff;

  if (prev) {
    const prevItem = prev.filter((item) => item.title === title)[0];
    prevSum = prevItem && prevItem.sum ? prevItem.sum : 0;
    diff = (sum / prevSum - 1) * 100;
  }

  const thStyle = css`
    padding: var(--spacing-large) 0 10px 0;
    font-weight: bold;
    line-height: 24px;
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
    ${i === 0 && "padding-top: 10px"}
  `;
  const tdStyle = css`
    padding: 10px 0;
    line-height: 24px;
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
  `;

  return (
    <tr>
      {main ? (
        <>
          <th
            css={css`
              ${thStyle}
              text-align: left;
            `}
          >
            {title}
          </th>
          <th
            css={css`
              ${thStyle}
              text-align: right;
            `}
          >
            <CurrencyValue sign={currencySign} value={sum / currencyRate} />
          </th>
          {prev && (
            <th
              css={css`
                ${thStyle}
                text-align: right;
                font-size: 15px;
                font-weight: normal;
              `}
            >
              <Diff value={diff} invert={diffInvert} integer />
            </th>
          )}
          <th
            css={css`
              ${thStyle}
            `}
          >
            {comment}
          </th>
        </>
      ) : (
        <>
          <td
            css={css`
              ${tdStyle}
              width: 200px;
            `}
          >
            {title}
          </td>
          <td
            css={css`
              ${tdStyle}
              width: 90px;
              text-align: right;
            `}
          >
            {(sum / currencyRate).toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })}
          </td>
          {prev && (
            <td
              css={css`
                ${tdStyle}
                width: 90px;
                text-align: right;
                font-size: 15px;
              `}
            >
              <Diff value={diff} invert={diffInvert} integer />
            </td>
          )}
          <td
            css={css`
              ${tdStyle};
              padding-left: var(--spacing-large);
              color: var(--text-color-2);
            `}
            dangerouslySetInnerHTML={{ __html: comment }}
          />
        </>
      )}
    </tr>
  );
}
