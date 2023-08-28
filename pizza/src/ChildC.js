import React,{useContext} from 'react'
import {Global} from './ParentC'
import SuperChildC from './SuperChildC'

const ChildC = () => {
    const {pColor} = useContext(Global)
    const {setColor} = useContext(Global)
  return (
    <div>
      <h1 style={{ color: pColor }}>Child Component Text</h1>
      <SuperChildC />
      <button onClick={()=>setColor('blue')}>Click Me</button>
    </div>

  )
}

export default ChildC
