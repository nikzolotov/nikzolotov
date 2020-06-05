import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";

import imageHtc from "./htc.png";
import imageIpad from "./ipad.png";
import imageTV from "./tv.png";
import imageKiosk from "./kiosk.png";

export default (props) => {
  const margin = props.margin ? props.margin : "var(--spacing-base)";
  const width = props.width ? props.width : "100%";

  let maxWidth = "900px";
  if (props.model === "htc" || props.model === "abstract-phone")
    maxWidth = "276px";
  if (props.maxWidth) maxWidth = props.maxWidth;

  let device = "";

  if (props.model === "safari") {
    device = (
      <div
        css={css`
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          @media (max-width: 640px) {
            border-radius: 2px;
          }
        `}
      >
        <Img fluid={props.image} />
      </div>
    );
  } else if (props.model === "abstract-phone") {
    device = (
      <div
        css={css`
          padding: 28% 6.5%;
          background: #1a1a1a;
          border-radius: 17.4%/8.25%;
          box-shadow: inset 0 -3px 9px rgba(0, 0, 0, 0.2),
            0 18px 36px rgba(0, 0, 0, 0.15);
        `}
      >
        <Img fluid={props.image} />
      </div>
    );
  } else {
    device = (
      <>
        <div
          css={css`
            position: absolute;
            overflow: hidden;

            .htc & {
              top: 9.87%;
              left: 3.38%;
              width: 92.7%;
              height: 79%;
            }

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
              case "tv":
                return imageTV;
              case "kiosk":
                return imageKiosk;
              default:
                return imageHtc;
            }
          })()}
          alt=""
        />
      </>
    );
  }

  return (
    <div
      className={props.model}
      css={css`
        position: relative;
        max-width: ${maxWidth};
        margin: ${margin};
        ${width && "width: " + width + ";"}
        @media (max-width: 640px) {
          margin-left: 0;
          margin-right: 0;
        }
      `}
    >
      {device}
    </div>
  );
};
