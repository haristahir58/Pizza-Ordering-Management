import React from 'react';

function GrandchildComponent(props) {
  return (
    <div>
      <h3>Grandchild Component</h3>
      <p>Data from Child: {props.data}</p>
    </div>
  );
}

export default GrandchildComponent;
