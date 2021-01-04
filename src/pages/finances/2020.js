import React from "react";
import { css } from "@emotion/core";

import SEO from "../../components/SEO";
import Layout from "../../components/Finances/Layout";
import Totals from "../../components/Finances/Totals";
import SankeyChart from "../../components/Finances/SankeyChart";
import CategoriesTable from "../../components/Finances/CategoriesTable";

import finances from "./data/finances-2020.json";
import financesSankey from "./data/finances-2020-sankey.json";
import financesPrev from "./data/finances-2019.json";

export default (props) => {
  return (
    <Layout showLevka>
      <SEO title="2020 Finances" />
      <p
        css={css`
          max-width: 660px;
          margin: 0;
        `}
      >
        Although 2020 was difficult for the world, we did pretty fine. Spending
        time with family on lockdown was fun and productive. The income from our
        investment property grew, as did our son. I started fun side projects,
        such as this site, which led us to another big move. I went back to a
        full-time job as a product designer. Paycheck, welcome back!
      </p>
      <div
        css={css`
          position: relative;
          margin-bottom: var(--spacing-x-large);
        `}
      >
        <Totals data={finances} prev={financesPrev} />
        <SankeyChart data={financesSankey} height={556} />
      </div>
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
