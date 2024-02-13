import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams()
  return (
    <div>
      <div>user:{userId}</div>
      
    </div>
  )
}

export default User
