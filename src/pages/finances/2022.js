import React from "react";

import AnnualReport from "../../components/Finances/AnnualReport";

import finances from "./data/finances-2022.json";
import financesSankey from "./data/finances-2022-sankey.json";
import financesPrev from "./data/finances-2021.json";
import currencies from "./data/currencies.json";

export default () => {
  return (
    <AnnualReport
      year={2022}
      data={finances}
      dataPrev={financesPrev}
      dataSankey={financesSankey}
      sankeyHeight={827}
      currencies={currencies}
      graphMarginTop={-106}
      showLevka
    >
      2021 felt pretty normal. I went back to my job, and missis stayed at home
      with the kid. We did some house flipping and finally found a nice house
      where we want our child to grow. We planned to spend on the house way less
      than it cost, and it will move our FI date forward a few years. But we
      think it will bring us happiness and peace. So that's the plan.
    </AnnualReport>
  );
};
