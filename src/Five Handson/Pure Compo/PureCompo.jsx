import React, { useState } from 'react'

function PureCompo() {
  const [Add, setAdd] = useState(0);

  return (
    <div className='main'>
    
      <div style={{ marginTop:'100px'}}>
      <h1 >Decrease : {Add}</h1>
        <button onClick={() => setAdd(Add - 1)}>ClickMe..!</button>
        </div>
    </div>
  )
}

export default PureCompo