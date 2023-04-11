import React from 'react'
import HighrOrderCompo from './HighrOrderCompo'

function ChildCompo(props) {
   
  return (
      <div className='main'>
      <div style={{ marginTop:'100px'}}>
          <h1>Increase : {props.Counter} </h1>
              <button id='btn-Sm' onClick={props.updateCounter}>ClickMe..!</button>
              </div>
      </div>
  )
}

export default HighrOrderCompo(ChildCompo)