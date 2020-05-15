import React from 'react'
import { Link } from 'react-router-dom'

const PaymentMethod = () => {
  return (
    <div id='payment-method'>
      <div id='options-container'>
        <Link to='/pay-w-paypal' className='btn'>Pay with Paypal</Link>
        <Link to='/pay-w-venmo' className='btn'>Pay with Venmo</Link>
        <Link to='/pay-w-card' className='btn'>Pay with card</Link>
      </div>
    </div>
  )
}

export default PaymentMethod