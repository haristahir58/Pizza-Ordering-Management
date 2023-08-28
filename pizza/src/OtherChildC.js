import React,{useContext} from 'react'
import {Global} from './ParentC'

const OtherChildC = () => {
    const {pColor}  = useContext(Global)
    return (
      <div>
       <h1 style={{ color: pColor }}>Super Child Component Text</h1>
      </div>
  )
}

export default OtherChildC
