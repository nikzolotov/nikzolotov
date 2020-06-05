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
      <h2>Savings rate, %</h2>
      <div
        css={css`
          width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
        `}
      >
        <SavingsChart income={income} expenses={expenses} />
      </div>
    </Layout>
  );
};
