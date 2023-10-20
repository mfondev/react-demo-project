// import React from 'react'

// const ErrorModal = (props) => {
//   return (
//     <div>
//       <div onClick={props.onClosed} />
//       <header>
//         <h2>{props.title}</h2>
//       </header>
//       <div>
//         <p>{props.message}</p>
//       </div>
//       <footer>
//         <button onClick={props.onClosed}>Close</button>
//       </footer>
//     </div>
//   )
// }

// export default ErrorModal

import React from 'react';
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
  return (
    <div className={classes.modal}>
      <p>{props.title}</p>
      <p>{props.message}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}

export default ErrorModal;

