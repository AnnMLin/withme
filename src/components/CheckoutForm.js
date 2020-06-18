import React from 'react'
import { CardElement, useStripe, userElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  return(
    <form>
      <CardElement />
      <button type='submit'>
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm