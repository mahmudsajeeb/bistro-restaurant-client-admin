import { CardElement,PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import { useEffect } from 'react';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { useState } from 'react';
import useAuth from '../../../../hook/useAuth';
 

function CheckOutForm({price,cart}) {
  const stripe= useStripe()
  const elements = useElements();
  const {user} = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState("");
  const [processing,setProcessing] = useState(false);
  const [transactionId,setTransactionId] = useState('')
  useEffect(()=>{
    console.log("price",price)
    axiosSecure.post("/create-payment-intent",{price})
    .then(res =>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  },[price,axiosSecure])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
     // Use your card Element with other Stripe.js APIs
     const {error} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log( "Working");
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
              },
          },
      },
  );

  if (confirmError) {
      console.log(confirmError);
  }

   console.log("paymentintent",paymentIntent)
  setProcessing(false)
   if(paymentIntent.status ==='succeeded'){
    setTransactionId(paymentIntent.id)
    // const transactionId = paymentIntent.id

    // save payment information to the server
          const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItems: cart.map(item => item.menuItemId),
            status: 'service pending',
            itemNames: cart.map(item => item.name)
        }
        axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // display confirm
                    }
                })
   }
  }
  return (
    <>
    <form className='w-2/4 m-8' onSubmit={handleSubmit}>
          

      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-outline btn-primary mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  )
}

export default CheckOutForm