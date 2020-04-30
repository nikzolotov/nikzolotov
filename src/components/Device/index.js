import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import imageHtc from "./htc.png";
import imageIpad from "./ipad.png";

export default (props) => {
  const margin = props.framed
    ? "0 var(--spacing-base)"
    : "0 0 var(--spacing-base) 0";
  return (
    <div
      className={props.model}
      css={css`
        position: relative;
        &.htc,
        &.abstract-mobile {
          max-width: 280px;
        }
        margin: ${margin};
      `}
    >
      <div
        css={css`
          position: absolute;
          overflow: hidden;
          top: 9.87%;
          left: 3.38%;
          width: 92.7%;
          height: 79%;

          .ipad & {
            top: 6.36%;
            left: 8.8%;
            width: 82.4%;
            height: 87.55%;
          }
          .tv & {
            top: 1.44%;
            left: 0.8%;
            width: 98.2%;
            height: 88.78%;
          }
          .kiosk & {
            top: 5.98%;
            left: 4.44%;
            width: 91%;
            height: 88.17%;
          }
        `}
      >
        <Img fluid={props.image} />
      </div>
      <img
        css={css`
          position: relative;
          display: block;
          width: 100%;
        `}
        src={(() => {
          switch (props.model) {
            case "ipad":
              return imageIpad;
            case "green":
              return "#00FF00";
            case "blue":
              return "#0000FF";
            default:
              return imageHtc;
          }
        })()}
        alt=""
      />
    </div>
  );
};
