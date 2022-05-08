import React from "react";
import { css } from "@emotion/core";

import CurrencyValue from "./CurrencyValue";
import TargetChart from "./TargetChart";

export default (props) => {
  return (
    <>
      <Header targetTotal={props.target.total} />
      <SubHeader targetDate={props.target.date} />
      <TargetChart data={props.data} target={props.target} />
    </>
  );
};

function Header(props) {
  return (
    <h2
      css={css`
        display: flex;
        justify-content: space-between;
        margin: 0;
      `}
    >
      <span>Target</span>
      <span
        css={css`
          font-size: 18px;
        `}
      >
        <CurrencyValue sign={"₽"} value={props.targetTotal} />
      </span>
    </h2>
  );
}

function SubHeader(props) {
  const timeLeft = dateDiff(new Date(Date.now()), new Date(props.targetDate));
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: var(--spacing-small);
        font-size: 15px;
        line-height: 20px;
        color: var(--text-color-2);
      `}
    >
      <span>
        To <abbr title="Financial Independence Retire Early">FIRE</abbr>&nbsp;
      </span>
      <span>{formatDateDiff(timeLeft)}</span>
    </div>
  );
}

function dateDiff(d1, d2) {
  return {
    years: d2.getFullYear() - d1.getFullYear(),
    months: d2.getMonth() - d1.getMonth(),
  };
}

function formatDateDiff(diff) {
  let s = "";

  if (diff.years > 0) s += diff.years > 1 ? diff.years + " years" : "1 year";

  if (diff.months > 0)
    s += diff.months > 1 ? " " + diff.months + " months" : " 1 month";

  return s;
}
