import React  from 'react'
 
import { Navigate } from 'react-router-dom'
import useAdmin from '../hook/useAdmin'
import useAuth from '../hook/useAuth'

function AdminPrivateRoute({children}) {
  const {user,loading} =useAuth()
  const [isAdmin,isAdminLoading] = useAdmin()
  if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>

  }
  if(user && isAdmin){
    return children
  }
  return  <Navigate to='/' state={{from:location}} replace></Navigate>
}

export default AdminPrivateRoute