import React from "react";
import { css } from "@emotion/core";

import CategoriesChart from "./CategoriesChart";

export default (props) => {
  return (
    <>
      <h2>{props.title}, ₽</h2>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-large);
        `}
      >
        <div
          css={css`
            width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
          `}
        >
          <CategoriesChart data={props.data} series={props.series} />
        </div>
        <div
          css={css`
            width: calc((100% * 1.75 / 6) - (var(--gap) * 4 / 6));
          `}
        >
          <Legend series={props.series} />
        </div>
      </div>
    </>
  );
};

function Legend(props) {
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
        </li>
      ))}
    </ul>
  );
}
