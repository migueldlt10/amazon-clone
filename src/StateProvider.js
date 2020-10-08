// setup data layer to track user/basket

import React, { createContext, useContext, useReducer } from "react";

// this is declaring the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
