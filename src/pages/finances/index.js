import React from "react";
import { css } from "@emotion/core";

import SEO from "../../components/SEO";
import Layout from "../../components/Finances/Layout";
import SavingsChart from "../../components/Finances/SavingsChart";
import CategoriesChart from "../../components/Finances/CategoriesChart";
import NetWorthChart from "../../components/Finances/NetWorthChart";

import income from "./data/income.json";
import expenses from "./data/expenses.json";
import incomeCategories from "./data/income-categories.json";
import expensesCategories from "./data/expenses-categories.json";
import netWorth from "./data/net-worth.json";

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
          <NetWorthChart data={netWorth} />
        </div>
      </div>
      <h2>Income, ₽</h2>
      <div
        css={css`
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
        `}
      >
        <CategoriesChart data={income} series={incomeCategories} />
      </div>
      <h2>Expenses, ₽</h2>
      <div
        css={css`
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
        `}
      >
        <CategoriesChart data={expenses} series={expensesCategories} />
      </div>
    </Layout>
  );
};
