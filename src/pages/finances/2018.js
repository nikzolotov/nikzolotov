import React from "react";
import { css } from "@emotion/core";

import Layout from "./components/Layout";
import Totals from "./components/Totals";
import SankeyChart from "./components/SankeyChart";
import CategoriesTable from "./components/CategoriesTable";

import finances from "./data/finances-2018.json";
import financesSankey from "./data/finances-2018-sankey.json";
import financesPrev from "./data/finances-2017.json";

export default (props) => {
  return (
    <Layout>
      <p
        css={css`
          max-width: 660px;
          margin: 0;
        `}
      >
        In 2018 we did pretty much the same as what we did in 2017. Working,
        side-hustling, and saving as much as we can. Although we didn't
        compromise on our happiness. This year we traveled to Europe and
        Caucasus mountains. We made some expensive purchases. We bought our
        first investment property. And we did some drastic changes at the end of
        the year!
      </p>
      <div
        css={css`
          position: relative;
          margin-bottom: var(--spacing-x-large);
        `}
      >
        <Totals data={finances} prev={financesPrev} />
        <SankeyChart data={financesSankey} height={571} />
      </div>
      <div
        css={css`
          width: 80%;
        `}
      >
        <h2>Income</h2>
        <CategoriesTable
          data={finances.income.categories}
          prev={financesPrev.income.categories}
        />
        <h2>Expences</h2>
        <CategoriesTable
          data={finances.expenses.categories}
          prev={financesPrev.expenses.categories}
          diffInvert
        />
      </div>
    </Layout>
  );
};
