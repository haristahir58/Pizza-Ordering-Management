import React from 'react';
import GrandchildComponent from './GrandchildComponent';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Data from Parent: {props.data}</p>
      <GrandchildComponent data={props.data} />
    </div>
  );
}

export default ChildComponent;
