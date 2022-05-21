import React from "react";
import {useReducer} from "react";

const reducer = (state,action) =>{
    switch(action.type) {
        case "add":
            return state +1;
        case "subract":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state
    }

}

function UseReducerHook() {

    const [counter, UpdateCounter] =useReducer(reducer,0)

    return(<>
    <h1>This is UseReducer functional parts...</h1>
    <p>{counter}</p>
    <button onClick = {()=> UpdateCounter({type:"add"})}>Increment Value</button>
    <button onClick = {() => UpdateCounter({type:"subract"})}>Increment Value</button>
    <button onClick={() => UpdateCounter({type:"reset"})}>Reset Value</button>
    </>)
}

export default UseReducerHook;