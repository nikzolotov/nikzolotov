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
      In 2018 we did pretty much the same as what we did in 2017. Working,
      side-hustling, and saving as much as we can. Although we didn't compromise
      on our happiness. This year we traveled to Europe and Caucasus mountains.
      We made some expensive purchases. We bought our first investment property.
      And we did some drastic changes at the end of the year!
    </AnnualReport>
  );
};
