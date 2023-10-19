import React from 'react'

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.onClosed} />
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={props.onClosed}>Close</button>
      </footer>
    </div>
  )
}

export default ErrorModal
