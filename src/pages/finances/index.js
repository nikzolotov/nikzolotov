import React from "react";
import { css } from "@emotion/core";

import SEO from "../../components/SEO";
import Layout from "../../components/Finances/Layout";
import SavingsChart from "../../components/Finances/SavingsChart";

import income from "./data/income.json";
import expenses from "./data/expenses.json";

export default (props) => {
  return (
    <Layout showLevka>
      <SEO title="Personal Finances Overview" />
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
          <h2
            css={css`
              margin-top: 0;
            `}
          >
            Savings rate, %
          </h2>
          <SavingsChart income={income} expenses={expenses} />
        </div>
        <div
          css={css`
            width: calc((100% * 1.75 / 6) - (var(--gap) * 4 / 6));
          `}
        >
          <h2
            css={css`
              margin-top: 0;
            `}
          >
            Net worth
          </h2>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              height: 300px;
              background: rgba(var(--white-rgb), 0.05);
              color: var(--text-color-2);
            `}
          >
            Coming soon
          </div>
        </div>
      </div>
      <h2>Income</h2>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
          height: 480px;
          background: rgba(var(--white-rgb), 0.05);
          color: var(--text-color-2);
        `}
      >
        Coming soon
      </div>
      <h2>Expenses</h2>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
          height: 480px;
          background: rgba(var(--white-rgb), 0.05);
          color: var(--text-color-2);
        `}
      >
        Coming soon
      </div>
    </Layout>
  );
};
