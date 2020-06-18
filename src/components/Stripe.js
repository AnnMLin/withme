import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CheckoutForm } from '../components'

const stripePromise = loadStripe('pk_test_5dzCvEWxJ0g9HbebmW7QCQB900WvPO6sgr')

const Stripe = () => {
  return(
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Stripe