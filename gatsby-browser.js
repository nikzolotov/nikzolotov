import React from "react";
import { CurrencyProvider } from "./src/providers/CurrencyProvider";

export const wrapRootElement = ({ element }) => {
  return <CurrencyProvider>{element}</CurrencyProvider>;
};
