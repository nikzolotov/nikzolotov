import React, { useContext, useEffect } from "react";
import { StateContext } from "../../providers/StateProvider";
import queryString from "query-string";
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
  location,
  children,
}) => {
  // Default currency is Rouble
  let currencyRate = 1;
  let currencySign = currencies.signs.rub;

  // Get currency from state
  const { currency, setCurrency } = useContext(StateContext);

  // Check if there's currency in URL. If so, put it in state
  if (location !== undefined) {
    const query = queryString.parse(location.search);

    if (query.currency !== undefined && query.currency !== "") {
      useEffect(() => {
        setCurrency(query.currency);
      });
    }
  }

  // Define currency rate and sign
  if (currency !== undefined && currency !== "rub") {
    const currenciesItem = currencies.rates.filter((d) => d.year === year);

    currencyRate = currenciesItem[0][currency];
    currencySign = currencies.signs[currency];
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
