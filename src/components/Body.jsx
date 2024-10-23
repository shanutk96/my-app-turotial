import React from 'react'

//to demonstrate props
function Body(props) {
  return (
    <div>
        <h1>Example for props</h1>
        <h2>Message is {props.data}</h2>
    </div>
  )
}

export default Body