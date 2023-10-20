import React, { useState } from 'react'
import ErrorModal from './ErrorModal'
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
   const [error,setError] = useState()


  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (input1.trim().length === 0 || input2.trim().length === 0 || input1.length < 3) {
     setError({
      title: "Invalid input",
      message: "Please enter a valid username > 3."
     })
      return
    }
    if (+input2 < 1 || +input2 > 47 ) {
       setError({
         title: 'Invalid age',
         message: 'Please enter a valid age > 1 and < 47 .',
       })
      return
    }
    const inputedData = {
      id: Math.random().toString(),
      username: input1,
      age: input2,
    }

    setInput1('')
    setInput2('')
    props.onDataAdded(inputedData)
  }

  // console.log(inputedData)

  const onInputHandler = (identifier, value) => {
    if (identifier === 'username') {
      setInput1(value)
    } else {
      setInput2(value)
    }
  }

  const errorHandler = () => {
   setError(null)
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClosed={errorHandler}
        />
      )}
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes['input-group']}>
          <label htmlFor='username' className={classes.label}>
            Username :
          </label>
          <input
            type='text'
            id='username'
            value={input1}
            onChange={(e) => onInputHandler('username', e.target.value)}
          />
          <label htmlFor='' className={classes.label}>
            Age(Years) :
          </label>
          <input
            type='number'
            id='number'
            value={input2}
            onChange={(e) => onInputHandler('age', e.target.value)}
          />
        </div>
        <button type='submit' className={classes.button}>
          Add user
        </button>
      </form>
    </div>
  )
}

export default AddUser
