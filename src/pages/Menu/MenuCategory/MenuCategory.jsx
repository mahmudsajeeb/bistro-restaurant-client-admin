 
import Cover from '../../../shared/Cover'
import MenuItem from '../../PopularMenu/MenuItem'
import { Link } from 'react-router-dom'

const MenuCategory = ({items,title,img}) =>{
  // console.log(salad)
  return(
    <div className='pt-8'>
    {
      title && <Cover img={img} title={title}/>
    }
    <div className='grid grid-cols-2 gap-4 mt-16'>
    
    {
      items.map(menuItems => <MenuItem key={menuItems._id} menuItems={menuItems}></MenuItem>)
       

      
    }
    
  </div>
  <div className='text-center mt-4'>
  <Link to={`/order/${title}`}>
    <button className="btn btn-outline   border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
    </Link>
  </div>
  </div>
  )
}

export default MenuCategory