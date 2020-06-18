import React from "react";
import { css } from "@emotion/core";

import Diff from "./Diff";

export default (props) => {
  return (
    <table
      css={css`
        width: 100%;
        margin-bottom: var(--spacing-large);
        border-top: 1px solid rgba(var(--white-rgb), 0.1);
      `}
    >
      <tbody>
        {props.data.map((item, i) => (
          <CategoriesTableItem {...props} {...item} key={i} i={i} />
        ))}
      </tbody>
    </table>
  );
};
function CategoriesTableItem(props) {
  var prevSum, diff;

  if (props.prev) {
    prevSum = props.prev.filter((item) => item.title === props.title)[0].sum;
    diff = (1 - prevSum / props.sum) * 100;
  }

  const thStyle = css`
    padding: var(--spacing-large) 0 10px 0;
    font-family: ApercuBold, Helvetica, Arial, sans-serif;
    line-height: 24px;
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
    ${props.i === 0 && "padding-top: 10px"}
  `;
  const tdStyle = css`
    padding: 10px 0;
    line-height: 24px;
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
  `;
  return (
    <tr>
      {props.main ? (
        <>
          <th
            css={css`
              ${thStyle}
              text-align: left;
            `}
          >
            {props.title}
          </th>
          <th
            css={css`
              ${thStyle}
              text-align: right;
            `}
          >
            {props.sum.toLocaleString()}
          </th>
          {props.prev && (
            <th
              css={css`
                ${thStyle}
                text-align: right;
                font: 15px ApercuRegular, Helvetica, sans-serif;
                //display: none;
              `}
            >
              <Diff value={diff} invert={props.diffInvert} />
            </th>
          )}
          <th
            css={css`
              ${thStyle}
            `}
          >
            {props.comment}
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
            {props.title}
          </td>
          <td
            css={css`
              ${tdStyle}
              width: 90px;
              text-align: right;
            `}
          >
            {props.sum.toLocaleString()}
          </td>
          {props.prev && (
            <td
              css={css`
                ${tdStyle}
                width: 90px;
                text-align: right;
                font-size: 15px;
                //display: none;
              `}
            >
              <Diff value={diff} invert={props.diffInvert} />
            </td>
          )}
          <td
            css={css`
              ${tdStyle};
              padding-left: var(--spacing-large);
              color: var(--text-color-2);
            `}
            dangerouslySetInnerHTML={{ __html: props.comment }}
          />
        </>
      )}
    </tr>
  );
}
