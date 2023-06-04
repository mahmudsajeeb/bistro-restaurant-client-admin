import React from 'react'
import useAuth from '../../../hook/useAuth'

function AddminHome() {
  const {user} = useAuth()
  return (
    <div>
    <h1>Welcome To {user.displayName}</h1>
    </div>
  )
}

export default AddminHome