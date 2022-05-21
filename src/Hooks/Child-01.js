import react,{useContext} from "react";
import {Context} from "./UseContextHook"

function Child_01() {
    const val = useContext(Context);
  console.log(val);
return(<>
<h1>This is Child Component -01</h1>
<h1>{val.name} age is {val.age}</h1>
</>)

}

export default  Child_01;