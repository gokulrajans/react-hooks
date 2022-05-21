import React from "react";
import {useRef, useEffect,useState} from "react";


function UseRefHook() {

    const [text, updateText] = useState("");

    const refValue =useRef("");
    useEffect(()=>{
        console.log(refValue);
    })
    
return(<>
<input ref={refValue} placeholder="type.." onChange={(e)=>{ updateText(e.target.value)}}/>
<p>{text}</p>
</>)
}

export default UseRefHook;