import { useState } from "react"
import React from 'react'

function Body(props) {
  const [name, setName] = useState()
  return (
    <div>
        <h1>Welome to the world of React</h1>
        <h2>Message from Manager is {props.data}</h2>
        <h1>State {name}</h1>
        <button onClick={()=>setName("changed")}>State changer button</button>
        <hr></hr>
    </div>
  )
}

export default Body