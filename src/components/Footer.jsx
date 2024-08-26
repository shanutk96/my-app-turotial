import React from 'react'

function Footer(props) {
  return (
    <div>
        <h1>This is Footer</h1>
        <h2>Message from Manager is {props.data}</h2>
        <hr />
    </div>
  )
}

export default Footer