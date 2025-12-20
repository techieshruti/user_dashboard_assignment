import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <span>{user.email}</span>
      <span>{user.phone}</span>
      <span>{user.company.name}</span>
    </div>
  )
}

export default UserCard