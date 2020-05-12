import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Avatar from "../../components/Avatar";
import SankeyChart from "./SankeyChart";
import finances from "../../data/finances-2017.json";
import financesSankey from "../../data/finances-2017-sankey.json";

export default (props) => {
  return (
    <div
      css={css`
        position: relative;
        min-width: 1000px;
        margin: var(--spacing-base) var(--spacing-large);
      `}
    >
      <Header {...props} />
      <p
        css={css`
          max-width: 660px;
          margin: 0;
        `}
      >
        2017 was the first year we started tracking our finances. This was also
        the first year we started saving money. And we did it aggressively. Dual
        income, no kids and frugal lifestyle, so we nailed it! This was year of
        getting rid of old habits and acquiring new ones. All of this thanks to
        episode 221 of Timm Ferriss podcast with Mr. Money Moustage. Total game
        changer for us.
      </p>
      <div
        css={css`
          position: relative;
          padding-right: 12%;
        `}
      >
        <Totals />
        <SankeyChart data={financesSankey} />
      </div>
      <div
        css={css`
          width: 80%;
        `}
      >
        <h2>Income</h2>
        <CategoriesTable data={finances.income.categories} />
        <h2>Expences</h2>
        <CategoriesTable data={finances.expenses.categories} />
      </div>
    </div>
  );
};

function Header(props) {
  var menuItemStyle = css`
    margin: 0 var(--spacing-base) 0 0;
    &:last-child {
      margin: 0;
    }
  `;
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 40px;
      `}
    >
      <div
        css={css`
          width: 30%;
        `}
      >
        <h1
          css={css`
            margin: 0;
          `}
        >
          Personal&nbsp;finances
        </h1>
      </div>
      <div
        css={css`
          width: 40%;
        `}
      >
        <ul
          css={css`
            display: flex;
            justify-content: center;
            margin: 0;
            padding: 0;
            list-style: none;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
          `}
        >
          <li css={menuItemStyle}>Overview</li>
          <li css={menuItemStyle}>2019</li>
          <li css={menuItemStyle}>2018</li>
          <li
            css={css`
              color: #fff;
              ${menuItemStyle}
            `}
          >
            2017
          </li>
        </ul>
      </div>
      <div
        css={css`
          width: 30%;
          text-align: right;
        `}
      >
        <div
          css={css`
            display: inline-flex;
            flex-direction: row-reverse;
          `}
        >
          <Avatar
            image={props.data.nastya.childImageSharp.fixed}
            margin="0 0 0 -10px"
          />
          <Avatar image={props.data.nikita.childImageSharp.fixed} />
        </div>
      </div>
    </div>
  );
}

function Totals(props) {
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
      `}
    >
      <Total title="Income" value={finances.income.total} />
      <Total title="Spending" value={finances.expenses.total} />
      <Total
        title="Savings"
        value={finances.income.total - finances.expenses.total}
      />
      <Total
        title="Savings rate"
        value={(1 - finances.expenses.total / finances.income.total) * 100}
        percentage
      />
    </ul>
  );
}
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
          color: #82be70;
        `}
      >
        +100%
      </span>
    </li>
  );
}

function CategoriesTable(props) {
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
}
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

export const query = graphql`
  query {
    nikita: file(relativePath: { eq: "components/Layout/avatar.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    nastya: file(relativePath: { eq: "pages/finances/nastya.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
