import React from "react";
import { css } from "@emotion/core";

import SEO from "../../components/SEO";
import Layout from "../../components/Finances/Layout";
import SavingsChart from "../../components/Finances/SavingsChart";
import Categories from "../../components/Finances/Categories";
import NetWorth from "../../components/Finances/NetWorth";

import income from "./data/income.json";
import expenses from "./data/expenses.json";
import assets from "./data/assets.json";
import incomeCategories from "./data/income-categories.json";
import expensesCategories from "./data/expenses-categories.json";
import assetsCategories from "./data/assets-categories.json";

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
          <SavingsChart income={income.income} expenses={expenses.expenses} />
        </div>
        <div
          css={css`
            width: calc((100% * 1.75 / 6) - (var(--gap) * 4 / 6));
          `}
        >
          <NetWorth data={assets.assets} series={assetsCategories.categories} />
        </div>
      </div>
      <Categories
        title="Income"
        data={income.income}
        series={incomeCategories.categories}
      />
      <Categories
        title="Expenses"
        data={expenses.expenses}
        series={expensesCategories.categories.filter((d) => d.parent === null)}
      />
    </Layout>
  );
};
