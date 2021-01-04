import React from "react";
import { css } from "@emotion/core";

export default (props) => {
  var color, label;
  var value = props.value;

  if (isNaN(value)) {
    value = 0;
  }

  if (Math.abs(value) >= 100 || value === 0) {
    value = Math.round(value);
  } else {
    if (props.integer) {
      value = value.toFixed(0);
    } else {
      value = value.toFixed(2);
    }
  }

  if (props.nodata || !isFinite(value)) {
    color = "var(--text-color-2)";
  } else if (value > 0) {
    color = !props.invert ? "var(--green-bright)" : "var(--red-bright)";
  } else {
    color = !props.invert ? "var(--red-bright)" : "var(--green-bright)";
  }

  if (props.nodata) {
    label = "No data";
    label += props.prevYear ? " for " + props.prevYear : "";
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
