import React, {createContext} from "react";
// import RuseState from "./RuseState";
// import RuseEffect from "./RuseEffect";
// import RuseRef from './RuseRef';
// import RuseMemo from './RuseMemo';
// import RuseCallback from "./RuseCallback";
// import RuseContext from "./RuseContext";
// import RuseReducer from "./RuseReducer";
import RuseLayOutEffext from "./RuseLayOutEffect";

export const providerContext = createContext();

export default function AllHooksConcept() {

  const userName = "Gokulraj Varatharajan"
  const mobileNumber="+91 9095588998"
  return (
    <>
    <providerContext.Provider value={{mobileNumber, userName}}>
      {/* <RuseState /> */}
      {/* <RuseEffect /> */}
      {/* <RuseRef /> */}
      {/* <RuseMemo /> */}
      {/* <RuseCallback /> */}
      {/* <RuseContext /> */}
      {/* <RuseReducer /> */}
      <RuseLayOutEffext />
      </providerContext.Provider>
    </>
  );
}
