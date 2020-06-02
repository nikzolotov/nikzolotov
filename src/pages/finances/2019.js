import React from "react";
import { css } from "@emotion/core";

import SEO from "../../components/SEO";
import Layout from "../../components/Finances/Layout";
import Totals from "../../components/Finances/Totals";
import SankeyChart from "../../components/Finances/SankeyChart";
import CategoriesTable from "../../components/Finances/CategoriesTable";

import finances from "./data/finances-2019.json";
import financesSankey from "./data/finances-2019-sankey.json";
import financesPrev from "./data/finances-2018.json";

export default (props) => {
  return (
    <Layout showLevka>
      <SEO title="2019 Finances" />
      <p
        css={css`
          max-width: 660px;
          margin: 0;
        `}
      >
        We took a gap year. To think of what is really matters to us. We spent
        the first three months is the mountains and that made a great impact on
        our health. We&nbsp;finally made our first child after two years of
        struggling. The rest of the year we spent working on investment
        properties and visiting doctors. I was working part-time and we finished
        the year on plus side!
      </p>
      <Totals data={finances} prev={financesPrev} static />
      <SankeyChart data={financesSankey} height={555} />
      <div
        css={css`
          width: 80%;
        `}
      >
        <h2
          css={css`
            margin-top: 0;
          `}
        >
          Income
        </h2>
        <CategoriesTable
          data={finances.income.categories}
          prev={financesPrev.income.categories}
        />
        <h2>Expenses</h2>
        <CategoriesTable
          data={finances.expenses.categories}
          prev={financesPrev.expenses.categories}
          diffInvert
        />
      </div>
    </Layout>
  );
};
