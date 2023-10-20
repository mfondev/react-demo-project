
import React from 'react';
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
  return (
    <div className={classes.modal__container}>
      <div className={classes.backdrop} onClick={props.onClose} />
      <div className={classes.modal}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.message}>{props.message}</p>
        <button className={classes.close} onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ErrorModal;

