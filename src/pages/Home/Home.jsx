import React from 'react'
import Banner from './Banner'
import Category from './Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Features from './Features/Features'
import Testimonial from './Testimonial/Testimonial'

function Home() {
  return (
    <div>
      <Banner />
      
      <div className='max-w-screen-xl  mx-auto'>
      <Category />
      <PopularMenu />

      </div>
      <Features></Features>
      <div className='max-w-screen-xl  mx-auto'>
        <Testimonial />
      </div>

    </div>
  )
}

export default Home