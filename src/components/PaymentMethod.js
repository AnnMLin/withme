import React from 'react'
import { Link } from 'react-router-dom'

const PaymentMethod = () => {
  return (
    <div id='payment-method'>
      <div id='options-container'>
        <a className='btn' href='https://www.paypal.me/amlpoledancer' target='_blank'>Pay with Paypal</a>
        <Link to='/pay-w-venmo' className='btn'>Pay with Venmo</Link>
        <Link to='/pay-w-card' className='btn'>Pay with card</Link>
      </div>
    </div>
  )
}

export default PaymentMethod