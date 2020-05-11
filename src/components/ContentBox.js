import React from 'react'
import { AllClasses } from '../components'
import { Route } from 'react-router-dom'

const ContentBox = () => {
  return(
    <div id='canvas'>
      <div id='content-box'>
        <Route path='/'>
          <AllClasses />
        </Route>
        <Route path='/:id'>
        </Route>
      </div>
    </div>
    
  )
}

export default ContentBox