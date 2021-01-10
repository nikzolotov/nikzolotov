import React from "react";

import AnnualReport from "../../components/Finances/AnnualReport";

import finances from "./data/finances-2020.json";
import financesSankey from "./data/finances-2020-sankey.json";
import financesPrev from "./data/finances-2019.json";
import currencies from "./data/currencies.json";

export default () => {
  return (
    <AnnualReport
      year={2020}
      data={finances}
      dataPrev={financesPrev}
      dataSankey={financesSankey}
      sankeyHeight={556}
      currencies={currencies}
    >
      Although 2020 was difficult for the world, we did pretty fine. Spending
      time with family on lockdown was fun and productive. The income from our
      investment property grew, as did our son. I started fun side projects,
      such as this site, which led us to another big move. I went back to a
      full-time job as a product designer. Paycheck, welcome back!
    </AnnualReport>
  );
};
