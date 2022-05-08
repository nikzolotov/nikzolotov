import React from "react";
import { css } from "@emotion/core";

export default ({ sign, value }) => {
  return (
    <>
      {sign && (
        <span
          key={Math.random()} // this is for rerender css when page first loaded
          css={css`
            margin-right: 0.2em;
            ${sign === "₽" &&
            css`
              font-family: "Helvetica Neue", Arial, sans-serif;
            `}
          `}
        >
          {sign}
        </span>
      )}
      {value.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      })}
    </>
  );
};
