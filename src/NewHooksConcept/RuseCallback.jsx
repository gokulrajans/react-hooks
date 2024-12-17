import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function RuseCallback() {
  const [Count, setCount] = useState(0);
  console.log("parent component get rendered...");

  const passingFunction = useCallback(()=>{
    console.log("child comp testing.");
  },[]);

  return (
    <>
      <ChildComponent passingFunction={passingFunction} />
      <h1>Counter : {Count}</h1>
      <button onClick={() => setCount(Count + 1)}>Count ++</button>
    </>
  );
}
