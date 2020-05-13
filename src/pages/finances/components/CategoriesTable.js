import React from "react";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <table
      css={css`
        width: 100%;
        margin-bottom: var(--spacing-large);
      `}
    >
      <tbody>
        {props.data.map((props, i) => (
          <CategoriesTableItem {...props} />
        ))}
      </tbody>
    </table>
  );
};
function CategoriesTableItem(props) {
  const thStyle = css`
    padding: var(--spacing-large) 0 10px 0;
    font-family: ApercuBold, Helvetica, Arial, sans-serif;
    line-height: 24px;
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
  `;
  const tdStyle = css`
    padding: 10px 0;
    line-height: 24px;
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
  `;
  return (
    <>
      <tr>
        {props.main ? (
          <>
            <th
              css={css`
                text-align: left;
                ${thStyle}
              `}
            >
              {props.title}
            </th>
            <th
              css={css`
                text-align: right;
                ${thStyle}
              `}
            >
              {props.sum.toLocaleString()}
            </th>
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
                width: 280px;
                ${tdStyle}
              `}
            >
              {props.title}
            </td>
            <td
              css={css`
                width: 60px;
                text-align: right;
                ${tdStyle}
              `}
            >
              {props.sum.toLocaleString()}
            </td>
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
    </>
  );
}
