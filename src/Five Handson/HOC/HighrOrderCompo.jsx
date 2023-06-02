import React, { useState } from 'react'

const HighrOrderCompo = (RealComponent) => {
  const NewComponent = () => {
    const [Add, setAdd] = useState(0);
    const incrementFun = () => {
      setAdd(Add + 1);
    }
    return <RealComponent Add={Add} incrementFun={incrementFun} />
    
  }
  return NewComponent;

  
}

export default HighrOrderCompo