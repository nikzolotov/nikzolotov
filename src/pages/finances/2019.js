import React from "react";

import AnnualReport from "../../components/Finances/AnnualReport";

import finances from "./data/finances-2019.json";
import financesSankey from "./data/finances-2019-sankey.json";
import financesPrev from "./data/finances-2018.json";
import currencies from "./data/currencies.json";

export default () => {
  return (
    <AnnualReport
      year={2019}
      data={finances}
      dataPrev={financesPrev}
      dataSankey={financesSankey}
      sankeyHeight={555}
      currencies={currencies}
      graphMarginTop={0}
      showLevka
    >
      We took a gap year. To think of what is really matters to us. We spent the
      first three months is the mountains and that made a great impact on our
      health. We&nbsp;finally made our first child after two years of
      struggling. The rest of the year we spent working on investment properties
      and visiting doctors. I was working part-time and we finished the year on
      plus side!
    </AnnualReport>
  );
};
