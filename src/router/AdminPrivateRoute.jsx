import React  from 'react'
 
import { Navigate } from 'react-router-dom'

function AdminPrivateRoute({children}) {
  const {user,loading} =useAuth()
  
  if(loading){
    return <progress className="progress w-56"></progress>

  }
  if(user){
    return children
  }
  return  <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default AdminPrivateRoute