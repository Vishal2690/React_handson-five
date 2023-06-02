import React from 'react'
import HighrOrderCompo from './HighrOrderCompo'

const HoverCounterCompo = ({Add, incrementFun}) => {
  return (
    <div className='over'>
      <button onMouseOver={incrementFun}>IncrementByHover : <h1>{ Add}</h1></button>
    </div>
  )
}

export default HighrOrderCompo(HoverCounterCompo)