
import React from 'react'
import classes from "./UsersList.module.css"
const UsersList = (props) => {
  return (
    <div className={classes.list}>
      <p>
        {props.users.map((user) => (
          <li className={classes.items}>
            {user.username} {user.age} {user.hobby} {user.gender}
          </li>
        ))}
      </p>
    </div>
  )
}

export default UsersList
