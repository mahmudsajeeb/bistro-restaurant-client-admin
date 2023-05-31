import React from 'react'
import Home from '../pages/Home/Home'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default function Main() {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signin')
  return (
    <div>
      {noHeaderFooter || <Header />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    
    </div>
  )
}
