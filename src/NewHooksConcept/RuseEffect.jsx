//      Syntax for useEffect
//  useEffect(callbackFunction, dependencies);
//  callbackFunction is required... ()=>{}....
//  dependencies are optional...

import React, { useState, useEffect } from "react";

export default function RuseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
        setTimeout(()=>{
            setCount((pre)=>pre+1)
        },1000)
        // return clearInterval();
    },[count])

  return <>
  <h1>Count :{count}</h1>
  <button>Increase Count</button></>;
}
