import React, { useContext } from "react";
import { StateContext } from "../../providers/StateProvider";
import { css } from "@emotion/core";

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useContext(StateContext);
  return (
    <div
      css={css`
        margin: 0 var(--spacing-base) 0 0;
      `}
    >
      <select
        onChange={(event) => setCurrency(event.target.value)}
        value={currency}
        css={css`
          height: 30px;
          padding: 0 var(--spacing-tiny);
          font: 18px/28px Apercu, Helvetica, Arial, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          background: none;
          border: none;
          color: var(--text-color-2);
          appearance: none;

          &:focus {
            outline: none;
          }
        `}
      >
        <option>rub</option>
        <option>usd</option>
        <option>eur</option>
      </select>
    </div>
  );
};

export default CurrencySwitcher;
