import React from 'react'
import { AllClasses, SingleClass } from '../components'
import { Route } from 'react-router-dom'

const ContentBox = () => {
  return(
    <div id='canvas'>
      <div id='content-box'>
        <Route path='/'>
          <AllClasses />
        </Route>
        <Route path='/:classId'>
          <SingleClass />
        </Route>
      </div>
    </div>
    
  )
}

export default ContentBox