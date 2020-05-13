import React from 'react'
import { AllClasses, SingleClass } from '../components'
import { Switch, Route } from 'react-router-dom'

const ContentBox = () => {
  return(
    <div id='canvas'>
      <div id='content-box'>
      <Switch>
        <Route exact path='/'>
          <AllClasses />
        </Route>
        <Route path='/:classId'>
          <SingleClass />
        </Route>
      </Switch>
      </div>
    </div>
    
  )
}

export default ContentBox