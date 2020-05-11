import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Avatar from "../../components/Avatar";
import finances from "../../data/finances-2017.json";

export default (props) => {
  return (
    <div
      css={css`
        position: relative;
        margin: var(--spacing-base) var(--spacing-large);
      `}
    >
      <Header {...props} />
      <p>
        2017 was the first year we started tracking our finances. This was also
        the first year we started saving money. And we did it aggressively. Dual
        income, no kids and frugal lifestyle, so we nailed it! This was year of
        getting rid of old habits and acquiring new ones. All of this thanks to
        episode 221 of Timm Ferriss podcast with Mr. Money Moustage. Total game
        changer for us.
      </p>
      <Totals />
      <h2>Income</h2>
      <CategoriesTable data={finances.income.categories} />
      <h2>Expences</h2>
      <CategoriesTable data={finances.expenses.categories} />
    </div>
  );
};

function Header(props) {
  return (
    <>
      <h1>Personal finances</h1>

      <Avatar image={props.data.file.childImageSharp.fixed} />
    </>
  );
}

function Totals(props) {
  return (
    <ul>
      <Total title="Income" value={finances.income.total} />
      <Total title="Spending" value={finances.expenses.total} />
      <Total
        title="Savings"
        value={finances.income.total - finances.expenses.total}
      />
      <Total
        title="Savings rate"
        value={
          (1 - finances.expenses.total / finances.income.total) * 100 + "%"
        }
      />
    </ul>
  );
}
function Total(props) {
  return (
    <li>
      <span>{props.title}</span>
      <span>{props.value}</span>
      <span>+100%</span>
    </li>
  );
}

function CategoriesTable(props) {
  return (
    <table>
      {props.data.map((props) => (
        <CategoriesTableItem {...props} />
      ))}
    </table>
  );
}
function CategoriesTableItem(props) {
  return (
    <>
      <tr>
        {props.main ? (
          <>
            <th>{props.title}</th>
            <th>{props.sum}</th>
            <th>{props.comment}</th>
          </>
        ) : (
          <>
            <td>{props.title}</td>
            <td>{props.sum}</td>
            <td>{props.comment}</td>
          </>
        )}
      </tr>
    </>
  );
}

export const query = graphql`
  query {
    file(relativePath: { eq: "components/Layout/avatar.jpg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
