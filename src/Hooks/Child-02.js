import react, {useContext} from "react";
import {Context} from "./UseContextHook";


function Child_02() {
    const params = useContext(Context);
return(<>
<h1>This is Child Component -02</h1>
<h1>{params.name} age is {params.age}</h1>
</>)

}

export default Child_02;