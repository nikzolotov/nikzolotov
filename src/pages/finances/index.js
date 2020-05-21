import React from "react";
import { css } from "@emotion/core";

import Layout from "../../components/Finances/Layout";
import SavingsChart from "../../components/Finances/SavingsChart";

import finances from "./data/finances.json";

export default (props) => {
  return (
    <Layout showLevka>
      <h2>Savings rate</h2>
      <SavingsChart data={finances} />
    </Layout>
  );
};
