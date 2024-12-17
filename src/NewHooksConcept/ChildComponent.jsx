import React from 'react';

function ChildComponent() {
    console.log("child getting rendered...");
    
    return (
      <>
        <h1>Child Function</h1>
      </>
    );
  }
  export default React.memo(ChildComponent);