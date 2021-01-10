import React, { useContext } from "react";
import queryString from "query-string";

const CurrencyContext = React.createContext();

const currencyReducer = (state, action) => {
  switch (action.type) {
    case "put": {
      localStorage.setItem("currency", action.value);
      return { currency: action.value };
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

const CurrencyProvider = ({ children }) => {
  let localCurrency = () => {
    if (typeof window !== "undefined") {
      let currency = window.localStorage.getItem("currency") || "rub";

      // Check if there's currency in URL
      if (window.location !== undefined) {
        const query = queryString.parse(window.location.search);

        if (query.currency !== undefined && query.currency !== "") {
          currency = query.currency;
          localStorage.setItem("currency", currency);
        }
      }
      return { currency };
    }
    // if window is undefined (during the build or when a refresh occurs)
    else {
      return { currency: "rub" };
    }
  };

  const [state, dispatch] = React.useReducer(
    currencyReducer,
    { currency: "rub" },
    localCurrency
  );

  return (
    <CurrencyContext.Provider value={{ state, dispatch }}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => useContext(CurrencyContext);

export { CurrencyProvider, useCurrency };
