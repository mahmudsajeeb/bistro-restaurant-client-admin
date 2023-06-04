import React from 'react'
import SectionTitle from '../../component/SectionTitle'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const Image_Token = import.meta.env.VITE_IMG_UPLOAD
function AddItem() {
  const [axiosSecure] = useAxiosSecure()

  const { register, handleSubmit, formState: { errors } } = useForm();
  const Img_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Token}`
  const onSubmit = data =>{ 
    const formData = new FormData();
    formData.append('image', data.image[0]);   
    
    fetch(Img_hosting_url,{
      method:"POST",
      body:formData
    })
    .then(res =>res.json())
    .then(imgRes =>{
      if(imgRes.success){
        const imgUrl = imgRes.data.display_url

        const {name,price,category,recipe} = data
        const newItem = {name,price:parseFloat(price),category,recipe,image:imgUrl}
        console.log(newItem)

        axiosSecure.post("/menu",newItem)
        .then(data =>{
          if(data.insertedId){
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item Added Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
          console.log('After posting new menu item',data.data)
        })
      }
       
    })
    
    console.log(data)};
  console.log(Image_Token);
  return (
    <div className='w-full px-20'>
    <SectionTitle subHeading="What's New?" heading="Add An Item"></SectionTitle>

    <div>
      <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Food Recipe*</span> 
              </label>
              <input {...register("name", {required: true, maxLength: 80})} type="text" placeholder="food recipe " className="input input-bordered w-full " />
            
            </div>

            <div className='flex my-4 mt-4'>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
                
              </label>
              <select defaultValue="Pick One" {...register("category", { required: true })} className="select  select-bordered">
                <option disabled >Pick One</option>
                <option>Pizza One</option>
                <option>Soup</option>
                <option>Salad</option>
                <option>Dessert</option>
                <option>Drinks</option>
                
              </select>
           
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span> 
              </label>
              <input {...register("price", {required: true, maxLength: 80})} type="number"  className="input ml-2 input-bordered w-full " />
            
            </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              
              </label>
              <textarea {...register("recipe", {required: true, maxLength: 80})}   className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
              
            </div>

            <div className="form-control w-full my-4 mt-4 ">
                <label className="label">
                  <span className="label-text">Item Image*</span> 
                </label>
                <input {...register("image", {required: true, maxLength: 80})}  type="file" className="file-input file-input-bordered w-full " />
                
              </div>

              <input className='btn btn-sm mt-4' type="submit" value="Add Item" />
      </form>
    </div>
    </div>
  )
}

export default AddItem