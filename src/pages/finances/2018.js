import React from "react";

import AnnualReport from "../../components/Finances/AnnualReport";

import finances from "./data/finances-2018.json";
import financesSankey from "./data/finances-2018-sankey.json";
import financesPrev from "./data/finances-2017.json";
import currencies from "./data/currencies.json";

export default () => {
  return (
    <AnnualReport
      year={2018}
      data={finances}
      dataPrev={financesPrev}
      dataSankey={financesSankey}
      sankeyHeight={571}
      currencies={currencies}
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
