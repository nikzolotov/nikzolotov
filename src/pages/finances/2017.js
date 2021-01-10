import React from "react";

import AnnualReport from "../../components/Finances/AnnualReport";

import finances from "./data/finances-2017.json";
import financesSankey from "./data/finances-2017-sankey.json";
import currencies from "./data/currencies.json";

export default () => {
  // Fake data for 2016. But we assume that there were no savings
  const financesPrev = {
    year: 2016,
    expenses: {
      total: 3000000,
    },
    income: {
      total: 3000000,
    },
  };

  return (
    <AnnualReport
      year={2017}
      data={finances}
      dataPrev={financesPrev}
      dataSankey={financesSankey}
      currencies={currencies}
      noPrevdata
    >
      2017 was the first year we started tracking our finances. This was also
      the first year we started saving money. And we did it aggressively. Dual
      income, no kids, and a frugal lifestyle, so we nailed it! This was the
      year of getting rid of old habits and acquiring new ones. All of this
      thanks to episode 221 of Timm Ferriss podcast with Mr. Money Moustage.
      Total game-changer for us.
    </AnnualReport>
  );
};
