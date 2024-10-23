import React from 'react'
import { useState } from 'react'
import '../App.css';


//to demonstrate useState hook
function Counter() {
  const [count, setCount] = useState(0) //to change counter value
  const [showCount, setShowCount] = useState(false) // to hide/show the counter
  return (



    <div>
      <button className="stylish-button" onClick={() => setShowCount(!showCount)}>{showCount ? 'Hide Counter' : 'Show Counter'}</button>

      {
        showCount ? //conditional rendering
          <>
            <h3 className='.stylish-heading'>Counter displayed</h3>
            <h3 className='.stylish-heading'>Counter = {count} </h3>

            <button className="stylish-button" onClick={() => setCount(count + 1)}>Increment</button><br></br>
            <button className="stylish-button" onClick={() => setCount(count - 1)}>Decrement</button>
          </> : <h3>Counter is hidden</h3>
      }

    </div>

  )
}

export default Counter