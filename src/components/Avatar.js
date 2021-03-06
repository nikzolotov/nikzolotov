/**
 * Rounded avatar image
 */

import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";

export default ({ image, margin = "0" }) => {
  const StyledImg = styled((props) => <Img {...props} />)`
    border-radius: 50%;
    margin: ${margin};
  `;
  return <StyledImg fixed={image} />;
};
