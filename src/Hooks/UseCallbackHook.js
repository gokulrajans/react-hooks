import React from "react";

const  UseCallbackHook = React.memo(({addstn})=> {
    console.log("child triggered...")
return(<>
<h1>This is Child</h1>
<button onClick={addstn}>Click Me</button>
</>

)
});

export default UseCallbackHook;