import React, { useState } from 'react'

const AddUser = (props) => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (input1.trim().length === 0 || input2.trim().length === 0) {
      return
    }  
    if (+input2 < 1) {
     return
    }
      const inputedData = {
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
  return (
    <div>
      <form className='form' onSubmit={onSubmitHandler}>
        <div className='input-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={input1}
            onChange={(e) => onInputHandler('username', e.target.value)}
          />
          <label htmlFor=''>Age(Years)</label>
          <input
            type='number'
            id='number'
            value={input2}
            onChange={(e) => onInputHandler('age', e.target.value)}
          />
        </div>
        <button type='submit' className='button'>
          AddUser
        </button>
      </form>
    </div>
  )
}

export default AddUser
