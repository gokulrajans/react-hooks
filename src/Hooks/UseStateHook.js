import React, { useState, useEffect } from "react";
//import ChildComponent from "./ChildComponent"

function UseStateHook(props) {
  const [count, setCount] = useState({
    name: "Gokul",
    sister: {
      name: "poongodi",
      age: 23,
      husband: {
        name: "undefinsed",
        age: 28,
      },
    },
    age: 25,
    height: 165,
    weight: 85,
  });

  useEffect(() => {}, []);

  function updateValue() {
    setCount({
      ...count,
      age: count.age + 20,
      sister: { age: count.sister.age + 20, 
        husband:{
            age: count.sister.husband.age +20
        }
    },
    });
  }
  function updateName() {
    setCount({...count,
    sister:{
        husband: {
            name: "Need to check new",
            age:28
        },
        name:"poongodi",
        age:23
    }});
  }

  return (
    <>
      <h1>Gokul vaues</h1>
      <h4>{count.name}</h4>
      <h4>{count.age}</h4>
      <h1>Poongodi vaues</h1>
      <h4>{count.sister.name}</h4>
      <h4>{count.sister.age}</h4>
      <h1>Poongodi Husbands vaues</h1>
      <h4>{count.sister.husband.name}</h4>
      <h4>{count.sister.husband.age}</h4>
      <button onClick={updateValue}>Afetr 20 Years</button>
      <button onClick={updateName}>updateName</button>
    </>
  );
}

export default UseStateHook;
