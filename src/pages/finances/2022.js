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
      In 2022 shit hit the fan. Putin's war in Ukraine turned down all our
      plans. This year we spent almost all our time and resources trying to find
      a new place to live. The place where we would be less worried about the
      future. We ended up in Finland, and we hope it will be a long-lasting
      relationship.
    </AnnualReport>
  );
};
