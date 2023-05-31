import React, { useState } from 'react'
import odercoverImg from '../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hook/useMenu';
// import FoodCard from '../../component/FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';

function Order() {
  const categories = ['salad','soup','pizza','dessert','drinks']
  const {category} = useParams()
  const initialInndex = categories.indexOf(category)
  const [tabIndex,setTabIndex] = useState(initialInndex)
  const [menu] = useMenu() 
  
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const drinks = menu.filter(item => item.category === "drinks")
   return (
    <div >
      <Cover  img={odercoverImg} title="Oder Food"/>
    
      <div className='max-w-screen-lg mt-12 mx-auto'>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Pizza</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
        
      </TabList>
      <TabPanel>
         <OrderTab items={salad} />
      </TabPanel>
      <TabPanel>
      <OrderTab items={soup} />
      </TabPanel>
      <TabPanel>
      <OrderTab items={pizza} />
      </TabPanel>
      <TabPanel>
      <OrderTab items={dessert} />
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinks} />
      </TabPanel>
    </Tabs>
      </div>
    </div>
  )
}

export default Order