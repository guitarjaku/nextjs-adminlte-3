import { createContext, useReducer } from "react";

export const CounterContext = createContext({});

const initialState = {
  counter: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "SUB_COUNTER":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case "RESET_COUNTER":
      return {
        ...state,
        counter: initialState.counter,
      };
  }
};

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(
    counterReducer,
    initialState
  );

  const { counter } = counterState;

  const addCounter = (payload) => {
    counterDispatch({ type: "ADD_COUNTER", payload });
  };
  const subCounter = (payload) => {
    counterDispatch({ type: "SUB_COUNTER", payload });
  };
  const resetCounter = () => {
    counterDispatch({ type: "RESET_COUNTER", initialState });
  };

  return (
    <CounterContext.Provider
      value={{ counter, addCounter, subCounter, resetCounter }}
    >
      {children}
    </CounterContext.Provider>
  );
};
