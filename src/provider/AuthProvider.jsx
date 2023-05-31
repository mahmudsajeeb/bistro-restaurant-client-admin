import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword ,GoogleAuthProvider,updateProfile, signOut, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext()
const auth = getAuth(app);

function AuthProvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const googleprovider = new GoogleAuthProvider();
  const signIn = (email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password);
  }
  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
   
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

 
  const signInwithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleprovider)
  }


  useEffect(()=>{
     
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser)
     if(currentUser){
      axios.post('http://localhost:1000/jwt',{email:currentUser.email})
      .then(data => {
        localStorage.setItem('access-token',data.data.token)
        // console.log(data.data.token)
        setLoading(false)
      })
     }else{
      localStorage.removeItem('access-token')
     }
      
    })
    return (()=>{
      
      return unsubscribe()
    })
  },[])
  const authInfo ={
    user,
    loading,
    createUser,
    signIn, 
    logOut,
    updateUserProfile,
    signInwithGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
    {
      children
    }
    </AuthContext.Provider>
  )
}

export default AuthProvider