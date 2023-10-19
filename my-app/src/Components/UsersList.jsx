import React from 'react'
// import AddUser from './AddUser';

const UsersList = (props) => {
  return (
    <div>
      <p>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </p>
    </div>
  )
}

export default UsersList
