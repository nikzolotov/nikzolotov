import React from "react";
import { css } from "@emotion/core";

import Layout from "./components/Layout";
import Totals from "./components/Totals";
import SankeyChart from "./components/SankeyChart";
import CategoriesTable from "./components/CategoriesTable";
import finances from "./data/finances-2019.json";
import financesSankey from "./data/finances-2019-sankey.json";
import financesPrev from "./data/finances-2018.json";

export default (props) => {
  return (
    <Layout>
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
      <Totals data={finances} prev={financesPrev} static />
      <SankeyChart data={financesSankey} height={555} />
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
    </Layout>
  );
};
