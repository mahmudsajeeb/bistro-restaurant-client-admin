import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOut/CheckOutForm';
import SectionTitle from '../../../component/SectionTitle';
import UseCart from '../../../hook/UseCart';
 
const stripePromise =loadStripe(import.meta.env.VITE_STRIPE_KEY)
function Payment() {
 const [cart] = UseCart()
 const total = cart.reduce((sum,item) => sum + item.price ,0)
  const price = parseFloat(total.toFixed(2))
  return (
    <div>
    <SectionTitle subHeading="Pay Food Recipe Price" heading="Order Items"></SectionTitle>
    
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price} >

        </CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment