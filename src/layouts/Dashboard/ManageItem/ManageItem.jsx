import React from 'react'
import SectionTitle from '../../../component/SectionTitle'
import useMenu from '../../../hook/useMenu'
import { FaTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../hook/useAxiosSecure'

function ManageItem() {

  const [menu]  = useMenu()
  const [axiosSecure] = useAxiosSecure()
  const handleDelete =(item)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete menu Item ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/menu/${item._id}`)
        .then(res =>{
           console.log("delete res" , res.data)
         
        })


      }
    })
  }
  return (
    <div >
      <div>
      <SectionTitle subHeading="Hurry Up"  heading="Manage All Item"></SectionTitle>  
      </div>

        <div>
        <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <td>
           <th>#</th>
        </td>
        <th>Item Image</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Action</th>
      </tr>
    </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {
                menu.map((item,index) => <tr key={item._id}>
                <th>
                   {index+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      
                    </div>
                  </div>
                </td>
                <td>
                  {item.category}
                  
                </td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(item)} className="btn  btn-secondary btn-xs"><FaTrashAlt/> </button>
                </td>
              </tr>)
              }
             
            </tbody>
          </table>
        </div>
        </div>
    </div>
  )
}

export default ManageItem
