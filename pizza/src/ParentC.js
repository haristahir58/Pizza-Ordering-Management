import React,{createContext, useState} from 'react'
import ChildC from './ChildC';
import OtherChildC from './OtherChildC';

export const Global = createContext();

const ParentC = () => {
    const [color,setColor] = useState('green')
  return (
    <Global.Provider value = {{pColor:color, setColor}}>
    <div>
      <h1>Parent Component</h1>
      <ChildC />
      <OtherChildC />
     
    </div>
    </Global.Provider>
  )
}

export default ParentC
