import React, { useState } from 'react'

const HighrOrderCompo = (WrapedComponent) => {
  function HocFunction() {
    const [Counter, setCounter] = useState(0)
    const myFunction = () => {
      setCounter(Counter + 1);
    }

    return (
      <div>
        <WrapedComponent Counter={Counter} updateCounter={myFunction} />
      </div>
    )
  }
    return HocFunction
  }

  export default HighrOrderCompo