import React, { useContext } from "react";
import { providerContext } from "./index";

export default function RuseContext() {
  const { mobileNumber, userName } = useContext(providerContext);

  return (
    <>
      <h1>All Datas are printed....</h1>
      <h2>User name: {userName}</h2>
      <h2>Mobile Number: {mobileNumber}</h2>
    </>
  );
}
