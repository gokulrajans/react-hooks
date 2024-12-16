import React, { useEffect, useLayoutEffect, useState } from "react";

export default function RuseLayOutEffext() {
  const [name, setName] = useState("Gokul");
  useEffect(() => {
    console.log("useEffect is Called and rendered...");
  },[name]);

  useLayoutEffect(() => {
    console.log("useLaypotEffect is Called and rendered...");
  },[name]);

  return (
    <>
      <h1>Hellow....{name}</h1>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
}
