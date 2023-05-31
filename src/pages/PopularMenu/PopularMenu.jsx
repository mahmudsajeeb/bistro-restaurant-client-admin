import React, { useEffect, useState } from 'react'
import SectionTitle from '../../component/SectionTitle'
import MenuItem from './MenuItem'
import useMenu from '../../hook/useMenu'

function PopularMenu() {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category ==='popular')
  // const [menu,setMenu] = useState([])
  // useEffect(()=>{
  //   fetch('menu.json')
  //   .then(res=>res.json())
  //   .then(data =>{
  //     const popularItem = data.filter(item =>item.category ==='popular')
  //     setMenu(popularItem)
  //   })
  // },[])
  return (
    <div className='mb-12'>
      <SectionTitle heading={"From Our Menu"} subHeading={"--Popular Menu--"}>

      </SectionTitle>
      <div className='grid grid-cols-2 gap-4'>
        {
          popular.map(menuItems => <MenuItem key={menuItems._id} menuItems={menuItems}></MenuItem>)
        }
      </div>
    </div>
  )
}

export default PopularMenu