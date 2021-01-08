import React, { useState } from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const [currency, setCurrency] = useState("rub");

  return (
    <StateContext.Provider
      value={{
        currency,
        setCurrency,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
