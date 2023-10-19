import { useState } from 'react'
import AddUser from './Components/AddUser'
import UsersList from './Components/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])
  const receivedData = (inputedData) => {
    setUsersList((prevList) => {
      return [...prevList, inputedData]
    })
  }

  return (
    <div>
      <AddUser onDataAdded={receivedData} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
