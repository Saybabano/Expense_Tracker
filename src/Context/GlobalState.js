import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'; 

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Cash', amount: -400 },
    { id: 2, text: 'Salary', amount: 1000 },
    { id: 3, text: 'Cash', amount: -400 },
    { id: 4, text: 'Cash', amount: -400 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id,
    })
  }
  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction,
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
