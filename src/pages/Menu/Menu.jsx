import React from 'react'
import Cover from '../../shared/Cover'

import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import useMenu from '../../hook/useMenu'
import SectionTitle from '../../component/SectionTitle'
import MenuCategory from './MenuCategory/MenuCategory'
// import MenuItem from '../PopularMenu/MenuItem'
function Menu() {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const offered = menu.filter(item => item.category === "offered")
 
  return (
    <div>
    {/* main cover  */}
    <Cover img={menuImg} title="Our Menu" />
    <SectionTitle subHeading={"Don't Miss"} heading={"TODAY's OFFERED"}></SectionTitle>
    <div className='max-w-screen-xl mx-auto mb-9'>
    {/* menu offered */}
    <MenuCategory items={offered}></MenuCategory>

    {/* dessert menu item  */}

    <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
    <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
    <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
    </div>
    
    </div>
  )
}

export default Menu