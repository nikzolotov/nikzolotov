import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";
import TargetChart from "./TargetChart";

export default (props) => {
  const total = +props.data[props.data.length - 1].total;

  return (
    <>
      <Header
        data={props.data}
        total={total}
        targetTotal={props.target.total}
      />
      <SubHeader data={props.data} target={props.target.total} />
      <TargetChart data={props.data} target={props.target} />
      {/* <Legend data={props.data} series={props.series} /> */}
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
      <span>Target</span>
      <span
        css={css`
          font-size: 18px;
        `}
      >
        <span
          css={css`
            margin-right: 0.2em;
            font-family: "Helvetica Neue", Arial, sans-serif;
            font-weight: bold;
          `}
        >
          &#8381;
        </span>
        {props.targetTotal.toLocaleString()}
      </span>
    </h2>
  );
}

function SubHeader(props) {
  const date = new Date(props.data[props.data.length - 1].date);
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-small);
        font-size: 15px;
        line-height: 20px;
        color: var(--text-color-2);
      `}
    >
      <span>
        To <abbr title="Financial Independence Retire Early">FIRE</abbr>&nbsp;
      </span>
      <span>5 years 1 month</span>
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
            {data[item.id].toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
}
