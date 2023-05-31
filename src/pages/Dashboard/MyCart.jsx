import React from 'react'
import UseCart from '../../hook/UseCart'
// import MycartRow from './MycartRow'
import Swal from 'sweetalert2'

function MyCart() {
  const [cart,refetch] = UseCart()
  const total = cart.reduce((sum,item) => item.price + sum , 0)

  const handleDelete =row =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:1000/carts/${row._id}`,{
          method:"DELETE"
        })
        .then(res =>res.json())
        .then(data => {
          refetch()
          if(data.deletedCount>0){
            Swal.fire(
          'Deleted!',
          'Your Food Item has been deleted.',
          'success'
        )
          }
        })
        
      }
    })
  }

 
  return (
    <div className='  w-full  '>
    <div className='font-semibold h-10 items-center flex justify-between  uppercase '>
      <h1>Total Order: {cart.name}</h1>
      <p>Total Price: ${total}</p>
      <button className='btn btn-warning btn-sm'>Pay</button>
    </div>
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((row,index) => {
          
          return(
            <tr>
        <td>
           {index + 1}
        </td>
        <td>
       
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={row.image} />
              </div>
            </div>
           
         
        </td>
        <td>
        <div>
              <div className="font-bold">{row.name}</div>
               
            </div>
        </td>
        <td>${row.price}</td>
        <td>
          <button onClick={()=>handleDelete(row)} className="btn btn-ghost bg-red-600 text-white btn-xs">x</button>
        </td>
      </tr>
          )
          })
      }
       
 
    </tbody>
    {/* foot */}
    
  </table>
</div>
</div>
  )
}
//  
export default MyCart