import React from 'react'
import { useContext } from 'react'
import {FaGoogle} from 'react-icons/fa'
import { AuthContext } from '../../provider/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'
function SocialLogin() {
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || "/"

const {signInwithGoogle} = useContext(AuthContext)
  const handleGoogle = () =>{
    signInwithGoogle()
    .then(result =>{
      const user = result.user
      console.log(user)
      const saveUser = {name:user.displayName, email:user.email}
                    fetch('http://localhost:1000/users',{
                        method:"POST",
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(saveUser)
                    })
                    .then(res => res.json())
                    .then(() =>{ 
                             
                              navigate(from,{replace:true})
                         
                    })
     
      
    })
    .catch((err) =>{
      console.log(err.message)
    })
  }
  return (
    <div>
    <div className="divider"></div>
    <div className='w-full text-center mb-4'>
    <button onClick={handleGoogle} className="btn btn-circle btn-outline">
       <FaGoogle /> 
    </button>
    <span className='font-semibold ml-2 text-2xl'>Sign With Google</span>
    </div>
    </div>
  )
}

export default SocialLogin