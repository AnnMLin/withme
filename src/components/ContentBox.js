import React from 'react'
import { AllClasses, SingleClass, PaymentMethod } from '../components'
import { Switch, Route } from 'react-router-dom'

const ContentBox = () => {
  return(
    <div id='canvas'>
      <div id='content-box'>
      <Switch>
        <Route exact path='/' component={AllClasses} />
        <Route exact path='/payment-method' component={PaymentMethod} />
        <Route path='/:classId' component={SingleClass} />
      </Switch>
      </div>
      <div className='space'></div>
    </div>
    
  )
}

export default ContentBox