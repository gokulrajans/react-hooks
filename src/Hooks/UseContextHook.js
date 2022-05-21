import React from "react";
import Parent_02 from "./Parent-02";
import Parent_01 from "./Parent-01";

export const Context = React.createContext();

function UseContextHook() {
    var param ={name:"Gokul", age: 25,vehicle:"lorry"}

    return(<>
    <Context.Provider value={param}>
    <Parent_01></Parent_01>
    <Parent_02></Parent_02>
    </Context.Provider>
    </>)
}

export default UseContextHook;