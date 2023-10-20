import { useState } from 'react'
import UsersList from './Components/UsersList'
import AddUsers from './AddUsers'

function App() {

  const [list, setList] = useState([])
  const onReceivedData = (inputedData) => {
    setList((prevList) => {
      return [...prevList, inputedData]
    })
  }

  return (
    <div>
      <AddUsers onDataReceived={onReceivedData} />
      <UsersList users={list} />
    </div>
  )
}

export default App
