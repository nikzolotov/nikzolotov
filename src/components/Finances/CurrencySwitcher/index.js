import React from "react";
import { css } from "@emotion/core";

import { useCurrency } from "../../../providers/CurrencyProvider";
import down from "./down.svg";

const CurrencySwitcher = () => {
  const { state, dispatch } = useCurrency();

  // This is dirty hack to force rerender of select when page first loaded
  // Gatsby add selected property to option, which React struggle with or something
  React.useEffect((_) => {
    setTimeout(() => dispatch({ type: "put", value: state.currency }), 1);
  }, []);

  return (
    <div
      css={css`
        margin: 0 var(--spacing-base) 0 0;
      `}
    >
      <select
        onChange={(event) =>
          dispatch({ type: "put", value: event.target.value })
        }
        value={state.currency}
        css={css`
          height: 30px;
          margin: 0;
          padding: 0 25px 0 var(--spacing-tiny);
          font: 18px/28px Apercu, Helvetica, Arial, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          background: url(${down}) no-repeat;
          background-position: right 5px top 50%;
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
