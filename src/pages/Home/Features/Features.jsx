import React from 'react'
import SectionTitle from '../../../component/SectionTitle'
import featured from '../../../assets/home/featured.jpg'
import './features.css'
function Features() {
  return (
    <div className='featuredImg pt-5 my-20 bg-fixed text-white'>
    <SectionTitle   subHeading={"Check It Out"} heading={"Feature Item"}></SectionTitle>
      
      <div className='md:flex justify-center md:py-8 md:px-96 pb-20 pt-20  items-center   mx-auto'>
        <div>
  
          <img  src={featured} alt="featured" />
        </div>
        <div className='ml-9'>
          <h3 className='text-2xl'>March 20, 2023</h3>
          <h2 className='text-3xl '>WHERE CAN I GET SOME?</h2>
          <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

          <button className="btn btn-outline border-0 border-b-4 text-white border-white">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Features