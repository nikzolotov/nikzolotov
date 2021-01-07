import React from "react";
import { css } from "@emotion/core";

export default ({ value, integer, invert, nodata, prevYear }) => {
  let color, label;

  if (isNaN(value)) {
    value = 0;
  }

  // Round value
  if (Math.abs(value) >= 100) {
    value = Math.round(value);
  } else {
    if (integer) {
      value = value.toFixed(0);
    } else {
      value = value.toFixed(2);
    }
  }

  // Set color
  if (nodata || !isFinite(value)) {
    color = "var(--text-color-2)";
  } else {
    if (value > 0) {
      color = !invert ? "var(--green-bright)" : "var(--red-bright)";
    } else {
      color = !invert ? "var(--red-bright)" : "var(--green-bright)";
    }
  }

  // Set label html
  if (nodata) {
    label = "No data";
    label += prevYear ? " for " + prevYear : "";
  } else {
    if (isFinite(value)) {
      label = value > 0 ? "+" : "";
      label += value.toLocaleString();
      label += "&thinsp;%";
    } else {
      label = "—";
    }
  }

  return (
    <span
      css={css`
        color: ${color};
      `}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};
