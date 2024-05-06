import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId}=useParams()
  return (
    <div className='mt-64 md:mt-16'>
      <div>user: {userId}</div>
    </div>
  )
}
