import react from "react";
import { useCallback, useState } from "react";
import UseCallbackHook from "./UseCallbackHook";

function UseCallbackHookParent() {
  const [count, updateCount] = useState(0);

  const [stn, updatestn] = useState(0);

  const addstn = useCallback(() => {
    updatestn(stn + 1);
  },[stn]);

  return (
    <>
      <h1>This is parent</h1>
      <p>{count}</p>
      <button onClick={() => updateCount(count + 1)}>Add 1 count</button>

      <h1>{stn}</h1>
      <UseCallbackHook addstn={addstn}></UseCallbackHook>
    </>
  );
}

export default UseCallbackHookParent;
