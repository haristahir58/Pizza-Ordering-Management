import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const dataToSend = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={dataToSend} />
    </div>
  );
}

export default ParentComponent;
