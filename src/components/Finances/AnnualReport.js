import React from "react";
import { useCurrency } from "../../providers/CurrencyProvider";
import { css } from "@emotion/core";

import SEO from "../SEO";
import Layout from "./Layout";
import Totals from "./Totals";
import SankeyChart from "./SankeyChart";
import CategoriesTable from "./CategoriesTable";

export default ({
  year,
  data,
  dataPrev,
  dataSankey,
  noPrevdata,
  sankeyHeight,
  currencies,
  totalsPositionStatic,
  children,
}) => {
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
    const currenciesItem = currencies.rates.filter((d) => d.year === year);

    currencyRate = currenciesItem[0][state.currency];
    currencySign = currencies.signs[state.currency];
  }

  return (
    <Layout>
      <SEO title={year + " Finances"} />
      <p
        css={css`
          max-width: 660px;
          margin: 0;
        `}
      >
        {children}
      </p>
      <div
        css={css`
          position: relative;
          margin-bottom: var(--spacing-x-large);
        `}
      >
        <Totals
          data={data}
          currencyRate={currencyRate}
          currencySign={currencySign}
          prev={dataPrev}
          nodata={noPrevdata}
          positionStatic={totalsPositionStatic}
        />
        <SankeyChart
          data={dataSankey}
          currencyRate={currencyRate}
          height={sankeyHeight}
        />
      </div>
      <div
        css={css`
          width: 80%;
        `}
      >
        <h2>Income</h2>
        <CategoriesTable
          data={data.income.categories}
          prev={dataPrev.income.categories}
          currencyRate={currencyRate}
        />
        <h2>Expenses</h2>
        <CategoriesTable
          data={data.expenses.categories}
          prev={dataPrev.expenses.categories}
          currencyRate={currencyRate}
          diffInvert
        />
      </div>
    </Layout>
  );
};
