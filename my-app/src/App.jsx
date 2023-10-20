import { useState } from 'react'
// import AddUser from './Components/AddUser'
import UsersList from './Components/UsersList'
import AddUsers from './AddUsers'

function App() {
  // const [usersList, setUsersList] = useState([])
  // const receivedData = (inputedData) => {
  //   setUsersList((prevList) => {
  //     return [...prevList, inputedData]
  //   })
  // }
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
