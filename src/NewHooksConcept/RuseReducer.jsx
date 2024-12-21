import React, { useReducer } from "react";

export default function RuseReducer() {
  const initialState = { count: 0 };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "increse": {
        return { count: state.count + 1 };
      }
      case "decrese": {
        return { count: state.count - 1 };
      }
      case "updateVal": {
        return { count: action.payload };
      }
      default: {
        return { count: state }
      }
    }
  };

  const [mainval, dispatcher] = useReducer(reducerFun, initialState);

  return (
    <>
      <h1>Count Test Programs...</h1>
      <h3>Count : {mainval.count}</h3>
      <button
        onClick={() => {
          dispatcher({ type: "increse" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatcher({ type: "decrese" });
        }}
      >
        Decrement
      </button>
      <input
      value={mainval.count}
        onChange={(eve) => {
          dispatcher({ type: "updateVal", payload: Number(eve.target.value) });
        }}
        type="number"
      />
    </>
  );
}
