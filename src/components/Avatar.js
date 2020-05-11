/**
 * Rounded avatar image
 */

import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";

export default (props) => {
  const StyledImg = styled((props) => <Img {...props} />)`
    border-radius: 100px;
  `;
  return <StyledImg fixed={props.image} />;
};
