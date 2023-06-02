import React from 'react'
import HighrOrderCompo from './HighrOrderCompo'

const ClickCounterCompo = ({Add, incrementFun}) => {
  return (
    <>
      <button onClick={incrementFun}>IncrementByClick : <h1>{ Add}</h1></button>
    </>
  )
}

export default HighrOrderCompo(ClickCounterCompo)