import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'
import UseCart from '../hook/UseCart'

function FoodCard({item}) {
  const {name,price,image,recipe,_id} = item
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const [,refetch] = UseCart()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  // console.log(image)
  const handleCard = item =>{
// console.log(item)
    if(user && user.email){
      const orderItem = {menuItemId: _id ,name,image,price, email:user.email}
      fetch('http://localhost:1000/carts',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(orderItem)
        
      })
      .then(res =>res.json())
      .then(data => {
        if(data.insertedId){
          refetch()
          Swal.fire({
            title: 'Success!',
            text: 'Food Is added',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        }
    
      })
    }
    else{           
      Swal.fire({
        title: 'Please Login to order the food',
        
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state:{from:location}})
        }
      })
    }
      }

      
  return (
    <div className="card w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className=" h-[200px]" />
  </figure>
  <p className='bg-slate-900 text-white absolute px-4 right-0 m-14'>${price}</p>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=>handleCard(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-b-amber-500 text-amber-500 ">Add to Cart</button>
    </div>
  </div>
</div>
 
  )
}

export default FoodCard