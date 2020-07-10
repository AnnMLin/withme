import React from 'react'
import { AllClasses, SingleClass, PaymentMethod, Stripe, Menu, SignIn } from '../components'
import { Switch, Route } from 'react-router-dom'

const ContentBox = () => {
  return(
    <div id='canvas'>
      <div id='content-box'>
      <Route path='/menu' component={Menu} />
      <Switch>        
        <Route path='/stripe' component={Stripe} />
        <Route path='/payment-method' component={PaymentMethod} />
        <Route path='/class/:classId' component={SingleClass} />
        <Route path='/login' component={SignIn} />
        <Route path='/' component={AllClasses} />
      </Switch>
      </div>
      <div className='space'></div>
    </div>
    
  )
}

export default ContentBox