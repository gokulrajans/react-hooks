import React, { useState, useMemo } from 'react';

export default function RuseMemo(){

    const [numInupt, setNumInput] = useState(0);
    const [intCount, setIntCount] = useState(0);

    function cubeFunction(num){
        console.log("Cube calculation Done...!")
        return Math.pow(num,3)
    }

    const result = useMemo(()=>{
        return cubeFunction(numInupt);
    },[numInupt]);

    return(<>
        <h1>Increase the Value of Input to get Cube of that number</h1>
        <input type="number" value={numInupt} onChange={(e)=>{setNumInput(e.target.value)}} />
        <h1>Cube of the Input Number: {result}</h1>
        
        <button onClick={()=> {setIntCount(intCount+1)}}>Count ++</button>
        <h1>Counter Section : {intCount}</h1>
    </>)
}

// Without using useMemo handled...
export function WithOutuseMemo(){

    const [numInupt, setNumInput] = useState(0);
    const [intCount, setIntCount] = useState(0);

    function cubeFunction(num){
        console.log("Cube calculation Done...!")
        return Math.pow(num,3)
    }

    const result = cubeFunction(numInupt);

    return(<>
        <h1>Increase the Value of Input to get Cube of that number</h1>
        <input type="number" value={numInupt} onChange={(e)=>{setNumInput(e.target.value)}} />
        <h1>Cube of the Input Number: {result}</h1>
        
        <button onClick={()=> {setIntCount(intCount+1)}}>Count ++</button>
        <h1>Counter Section : {intCount}</h1>
    </>)
}