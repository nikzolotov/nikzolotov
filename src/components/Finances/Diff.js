import React from "react";
import { css } from "@emotion/core";

export default (props) => {
  var color, label;
  var value = props.value;

  if (isNaN(value)) value = 0;
  else if (!isFinite(value)) value = 100;

  if (Math.abs(value) > 10000) value = Math.trunc(value / 1000) + "k";
  else if (Math.abs(value) >= 100 || value === 0)
    value = Math.trunc(value).toLocaleString();
  else value = value.toFixed(2);

  if (props.nodata) {
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
    label = value > 0 ? "+" : "";
    label += value;
    label += "&thinsp;%";
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
