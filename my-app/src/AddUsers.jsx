import React, { useState } from 'react'
import ErrorModal from './Components/ErrorModal'
import classes from "./Components/AddUser.module.css"


const AddUsers = (props) => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')
  const [error,setError] = useState("")

  const onInputHandler = (identifier, value) => {
    if (identifier === 'username') {
      setInput1(value)
    } else if (identifier === 'age') {
      setInput2(value)
    } else if (identifier === 'hobby') {
      setInput3(value)
    } else {
      setInput4(value)
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (
      input1.trim().length === 0 ||
      input2.trim().length === 0 ||
      input3.trim().length === 0 ||
      input4.trim().length === 0
    ) {
      setError({
        title: 'Invalid Input',
        message: 'Please input the right details',
      })
      return 
    }
      if (+input2 < 1 || +input2 > 47) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age > 1 and < 47 .',
        })
        return
      }
    const inputedData = {
      username: input1,
      age: input2,
      hobby: input3,
      gender: input4,
    }
    props.onDataReceived(inputedData)
    setInput1('')
    setInput2('')
    setInput3('')
    setInput4('')
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
          onClose={errorHandler}
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
            onChange={(e) => {
              onInputHandler('username', e.target.value)
            }}
            minLength={3}
          />
          <label htmlFor='age' className={classes.label}>
            Age :
          </label>
          <input
            type='number'
            id='age'
            value={input2}
            onChange={(e) => {
              onInputHandler('age', e.target.value)
            }}
          />
          <label htmlFor='hobby' className={classes.label}>
            Hobby :
          </label>
          <input
            type='text'
            id='hobby'
            value={input3}
            onChange={(e) => {
              onInputHandler('hobby', e.target.value)
            }}
          />
          <label htmlFor='gender' className={classes.label}>
            Gender :
          </label>
          <input
            type='text'
            id='gender'
            value={input4}
            onChange={(e) => {
              onInputHandler('gender', e.target.value)
            }}
          />
        </div>
        <button className={classes.button} type='Submit'>
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUsers
