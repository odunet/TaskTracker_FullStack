import React, { useReducer, createContext, useEffect } from 'react';
import reducer from '../reducers/rootReducer';

const initialState = [];

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
