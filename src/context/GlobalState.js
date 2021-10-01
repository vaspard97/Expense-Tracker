import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initail state
const initalState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Cat", amount: 60 },
    { id: 3, text: "Chicken", amount: 20 },
    { id: 4, text: "Drinks", amount: -10 },
  ],
};

//Create context
export const GlobalContext = createContext(initalState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  //create Action
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
