import React from 'react'
import ClickCounterCompo from './Five Handson/HOC/ClickCounterCompo'
import HoverCounterCompo from './Five Handson/HOC/HoverCounterCompo'
import PureCompo from './Five Handson/Pure Compo/PureCompo'

const App = () => {
  return (
    <>
    <h2 style={{textAlign:"center"}}>Higher Order Component</h2>
      <div className='HOC'>
        <ClickCounterCompo />
        <HoverCounterCompo />
      </div>
      <hr/>
      <div className='PURE'>
        <h2>Pure Component</h2>
        <PureCompo />
      </div>
    </>
  )
}

export default App