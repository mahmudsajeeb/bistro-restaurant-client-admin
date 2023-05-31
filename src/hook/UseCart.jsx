import { useQuery } from '@tanstack/react-query' 
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

const UseCart =()=>{
const {user,loading} = useAuth() 
const [axiosSecure] =useAxiosSecure()

const { refetch,  data:cart=[], error } = useQuery({
  queryKey: ['cart',user?.email],
  enabled:!loading,
  queryFn: async () => {
    const response = await axiosSecure(`/carts?email=${user?.email}`)
    console.log('res from axios' , response)
    return response.data;
  },


  // queryFn: async () => {
  //   const response = await fetch(`http://localhost:1000/carts?email=${user?.email}`,
  //   {
  //     headers:{
  //       authorization:`bearer ${token}`
  //     }
  //   }
  //   )
  //   // if (!response.ok) {
  //   //   throw new Error('Network response was not ok')
  //   // }
  //   return response.json()
  // },
})
return[cart,refetch ]
}
export default UseCart