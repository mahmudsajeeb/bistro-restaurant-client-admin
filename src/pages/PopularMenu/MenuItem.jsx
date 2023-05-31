import React from 'react'

function MenuItem({menuItems}) {
  const {name,recipe,image,price} =menuItems
 
  return (
    <div className='flex'>
      <div>
        <img style={{borderRadius:"0   200px   200px  200px"}} className='w-32' src={image} alt="" />
      </div>
      <div className='ml-2'>
        <h3>{name}---------------</h3>
        <p className='w-10/12'>{recipe}</p>
      </div>
        <p className='text-yellow-500'> {price}</p>
    </div>
  )
}

export default MenuItem