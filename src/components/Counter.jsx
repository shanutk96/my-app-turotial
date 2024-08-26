import React from 'react'
import { useState } from 'react'
import '../App.css';

function Counter() {
    const [count, setCount] = useState(0) //to change counter value
    const [showCount, setShowCount] = useState(false) // to hide/show the counter
  return (

    <div>
        <button className="stylish-button" onClick={()=>setShowCount(!showCount)}>{showCount? 'Hide Counter':'Show Counter'}</button>

    {
    showCount? //conditional operation
    <>
        <h3 className='.stylish-heading'>Counter = {count} </h3>

        <button className="stylish-button" onClick={()=>setCount(count+1)}>Increment</button><br></br> 
        <button className="stylish-button" onClick={()=>setCount(count-1)}>Decrement</button>
    </>: null
    }    

    </div>

  )
}

export default Counter