import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";
import CurrencyValue from "./CurrencyValue";
import NetWorthChart from "./NetWorthChart";

export default ({
  data,
  series,
  currencies,
  currency,
  currencyRate,
  currencySign,
}) => {
  const total = +data[data.length - 1].total;
  const prevTotal = +data[data.length - 2].total;

  return (
    <>
      <Header
        total={total}
        currencyRate={currencyRate}
        currencySign={currencySign}
      />
      <SubHeader
        data={data}
        total={total}
        prevTotal={prevTotal}
        currencyRate={currencyRate}
      />
      <NetWorthChart
        data={data}
        currencies={currencies}
        currency={currency}
        series={series}
      />
      <Legend data={data} series={series} currencyRate={currencyRate} />
    </>
  );
};

function Header({ total, currencyRate, currencySign }) {
  return (
    <h2
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 0;
      `}
    >
      <span>Net worth</span>
      <span
        css={css`
          font-size: 18px;
        `}
      >
        <CurrencyValue sign={currencySign} value={total / currencyRate} />
      </span>
    </h2>
  );
}

function SubHeader({ data, total, prevTotal, currencyRate }) {
  const date = new Date(data[data.length - 1].date);
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-small);
        font-size: 15px;
        line-height: 20px;
      `}
    >
      <span
        css={css`
          color: var(--text-color-2);
        `}
      >
        {date.toLocaleString("en-US", {
          month: "long",
        })}
        &nbsp;change
      </span>
      <Diff value={(total / prevTotal - 1) * 100} />
    </div>
  );
}

function Legend({ data, series, currencyRate }) {
  const lastData = data[data.length - 1];
  return (
    <ul
      css={css`
        margin: var(--spacing-small) 0 0 0;
        padding: 0;
        list-style: none;
      `}
    >
      {series.map((item, i) => (
        <li
          key={i}
          css={css`
            display: flex;
            justify-content: space-between;
            margin-bottom: var(--spacing-tiny);
          `}
        >
          <span>
            <i
              css={css`
                display: inline-block;
                width: 12px;
                height: 12px;
                margin-right: 12px;
                border-radius: 6px;
                background: ${item.color};
              `}
            ></i>
            {item.title}
          </span>
          <span
            css={css`
              color: var(--text-color-2);
            `}
          >
            {(lastData[item.id] / currencyRate).toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })}
          </span>
        </li>
      ))}
    </ul>
  );
}
