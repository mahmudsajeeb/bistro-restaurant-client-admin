import React, { useContext, useEffect, useRef, useState } from 'react'
import lognbg from '../../assets/others/authentication1.png'
import bgimg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';

function Login() {
  // const captchaRef = useRef(null)
  const [disabled,setDisabled] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
  const {signIn} =useContext(AuthContext)
  const handlelogin = e =>{
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 

    signIn(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      navigate(from,{replace:true})
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
    
  }

  useEffect(()=>{
    loadCaptchaEnginge(6); 

  },[])

  const handleValidateCaptcha =(e)=>{
    const userCaptcha = e.target.value 
    console.log(userCaptcha)
    if (validateCaptcha(userCaptcha)) {
       
       setDisabled(false)
       
  }

   
  }


  return (
    <div style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className="h-screen flex justify-center items-center">
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content   lg:flex">
    <div className="text-center  md:w-1/2 lg:text-left">
      <h1 className="text-4xl text-center font-bold mb-3">Login now!</h1>
      <img className='w-[800px]' src={lognbg} alt="lognbg" />
    </div>
    <div className="card  w-1/2 max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> <LoadCanvasTemplate /></span>
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha " className="input input-bordered" />
          {/* <button  className='btn btn-outline btn-xs mt-2'>Validate</button> */}
          
        </div>
        <div className="form-control mt-6">
          <input disabled={false}  type='submit' className="btn btn-primary" value=
          'login' /> 
           
        </div>
      </form>
      {/* <p className=' text-center font-semibold text-[#D1A054]'>New here? <Link to={'/signin'}> Create a New Account</Link></p> */}
      <p className=' text-center font-semibold text-[#D1A054]'>New here? <Link to={'/signin'}> Create a New Account</Link></p>
      <SocialLogin />
  
    </div>
  </div>
</div>
    
    </div>
  )
}

export default Login