import React, { useContext } from 'react'
import bgimg from '../../assets/others/authentication.png'
import lognbg from '../../assets/others/authentication1.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser,updateProfile} = useContext(AuthContext)
  const navigate =useNavigate()
  const onSubmit = data =>{
  
    createUser(data.email,data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
    
      updateProfile(data.name,data.photoURL)
      .then(()=>{
        const saveUser = {name: data.name,email:data.email}
        fetch('http://localhost:1000/users',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/")
              // ...
            }
        })
          console.log('User Profile PhotoURL')
          reset()
      }).catch((err)=>{
          console.log(err)
      })
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      // ..
    });
    console.log(data)
  };


 
  // const handleRegister =(e)=>{
  //   e.preventDefault()
  //   const form = e.target 
  //   const name = form.name.value 
  //   const email = form.email.value 
  //   const password = form.password.value 
  //   createUser(email,password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // }
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
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" {...register("name",{ required: true })} name='name' placeholder="Enter your Name" className="input input-bordered" />
          {errors.name && <span className='text-red-600'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" {...register("photoURL",{ required: true })}   placeholder="Enter your Photo Url" className="input input-bordered" />
          {errors.photoURL && <span className='text-red-600'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" />
          {errors.email && <span className='text-red-600'>This field is required</span>}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true,minLength: 6 ,maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
          {errors.password && <span className='text-red-600'>This field is required</span>}
        </div>
         
        <div className="form-control mt-6">
          <input    type='submit' className="btn btn-primary" value=
          'register' />  
        </div>
      </form>
       
      <p className='text-center font-semibold text-[#D1A054]'>Already registered? <Link to={'/login'}>Go to log in</Link></p>
    </div>
  </div>
</div>
    
    </div>
  )
}

export default Register