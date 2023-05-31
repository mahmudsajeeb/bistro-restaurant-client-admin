import React from 'react' 
import {FaShoppingCart,FaWallet,FaCalendar,FaHome, FaUtensils, FaBook, FaUsers} from 'react-icons/fa'
import {BiFoodMenu,BiShoppingBag} from 'react-icons/bi'
import { NavLink, Outlet } from 'react-router-dom'
import UseCart from '../hook/UseCart'
import useAdmin from '../hook/useAdmin'
function Dashboard() {
  const [cart] = UseCart()

  // todo admin: load data from the server to have dynamic isAdmin based on Data
  // const isAdmin = true
  const [isAdmin] = useAdmin()
  return (
    <div>
    
    <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80   text-base-content">
      {
        isAdmin ? <>

        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
      <li><NavLink to='/dashboard/addItem'><FaUtensils /> Add Item</NavLink></li>
      <li><NavLink to='/dashboard/manageItem'><FaWallet></FaWallet>Manage Item</NavLink></li>
      <li><NavLink to='/dashboard/bookings'><FaBook></FaBook>Manage Booking</NavLink></li>
      <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users</NavLink></li>
      
       
        </> :<>


        <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
      <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
      <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart<div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>


  

        </>

      }
      <div className='divider'></div>
      <li><NavLink to='/'><FaHome /> Home</NavLink></li>
       <li> <NavLink to='menu'><BiFoodMenu /> Menu</NavLink></li>
       <li> <NavLink to='/order/salad'> <BiShoppingBag /> Food</NavLink></li>
      
     
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default Dashboard