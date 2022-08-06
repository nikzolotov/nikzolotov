import React from "react";
import { useCurrency } from "../../providers/CurrencyProvider";
import { css } from "@emotion/core";

import SEO from "../../components/SEO";
import Layout from "../../components/Finances/Layout";
import Savings from "../../components/Finances/Savings";
import Categories from "../../components/Finances/Categories";
import NetWorth from "../../components/Finances/NetWorth";
import Target from "../../components/Finances/Target";

import income from "./data/income.json";
import expenses from "./data/expenses.json";
import assets from "./data/assets.json";
import incomeCategories from "./data/income-categories.json";
import expensesCategories from "./data/expenses-categories.json";
import assetsCategories from "./data/assets-categories.json";
import currencies from "./data/currencies.json";
import currencies2 from "./data/currencies2.json";

export default ({ location }) => {
  // Refactor this code here and in AnnualReport.js

  // Default currency is Rouble
  let currencyRate = 1;
  let currencySign = currencies.signs.rub;

  // Get currency from state
  const { state } = useCurrency();

  // Define currency rate and sign
  if (
    state !== undefined &&
    state.currency !== undefined &&
    state.currency !== "rub"
  ) {
    const currenciesItem =
      currencies2.currencies[currencies2.currencies.length - 1];

    currencyRate = currenciesItem[state.currency];
    currencySign = currencies.signs[state.currency];
  }
  return (
    <Layout location={location} showLevka>
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
          <Savings income={income.income} expenses={expenses.expenses} />
        </div>
        <div
          css={css`
            width: calc((100% * 1.5 / 6) - (var(--gap) * 4 / 6));
          `}
        >
          <div
            css={css`
              margin-bottom: var(--spacing-x-large);
            `}
          >
            <NetWorth
              data={assets.assets}
              series={assetsCategories.categories}
              currencies={currencies2.currencies}
              currency={state.currency}
              currencyRate={currencyRate}
              currencySign={currencySign}
            />
          </div>
          <div>
            <Target
              data={assets.assets}
              target={{
                date: "2027-12-01",
                total: 30000000,
              }}
            />
          </div>
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
