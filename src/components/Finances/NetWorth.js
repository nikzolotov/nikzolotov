import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";
import NetWorthChart from "./NetWorthChart";

export default (props) => {
  const total = +props.data[props.data.length - 1].total;
  const prevTotal = +props.data[props.data.length - 2].total;

  return (
    <>
      <Header data={props.data} total={total} />
      <Change data={props.data} total={total} prevTotal={prevTotal} />
      <NetWorthChart data={props.data} />
      <Legend data={props.data} series={props.series} />
    </>
  );
};

function Header(props) {
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
        <span
          css={css`
            margin-right: 0.2em;
            font-family: Helvetica, Arial, sans-serif;
            font-weight: bold;
          `}
        >
          ₽
        </span>
        {props.total.toLocaleString()}
      </span>
    </h2>
  );
}

function Change(props) {
  const date = new Date(props.data[props.data.length - 1].date);
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-base);
        font-size: 15px;
        line-height: 20px;
      `}
    >
      <span
        css={css`
          color: var(--text-color-2);
        `}
      >
        January 2017 –{" "}
        {date.toLocaleString("default", {
          month: "long",
        }) +
          " " +
          date.getFullYear()}
      </span>
      <Diff value={(1 - props.prevTotal / props.total) * 100} />
    </div>
  );
}

function Legend(props) {
  const data = props.data[props.data.length - 1];
  return (
    <ul
      css={css`
        margin: var(--spacing-base) 0 0 0;
        padding: 0;
        list-style: none;
      `}
    >
      {props.series.map((item, i) => (
        <li
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
            {data[item.id].toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
}
