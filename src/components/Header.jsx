import React from 'react'

function Header(props) {
  return (
    <div>
        <h1>Header</h1>
        <h2>Mesage from Manager is {props.message}</h2>
        <hr></hr>
    </div>
  )
}

export default Header