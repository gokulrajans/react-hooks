import React, { useEffect, useState,useReducer } from "react";

const reducer= (state,action) =>{

switch(action.type){
    case "add":
        return state + 1;
    case "subract":
        return state - 1;
    case "reset":
        return 0;
}
}


function useEffectHook() {
  const [values, updatedValues] = useState([]);
    
    const [counter, updateCounter] = useReducer(reducer,0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => res.json())
      .then((res) => updatedValues(res))
  });

  return (
    <>
      <h1>Data fetch section</h1>
      <div>
          {values.map((data) => (
              <li key={data.id}>{data.title}</li>
          ))}
      </div>
      <h1>Counter Section</h1>
      <p>{counter}</p>
      <button onClick={()=>updateCounter({type:"add"})}>Increment Value</button>
      <button onClick={()=>updateCounter({type:"subract"})}>Decrement Value</button>
      <button onClick={() => updateCounter({type:"reset"})}>Reset Value</button>
    </>
  );
}

export default useEffectHook;
