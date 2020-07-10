import React from 'react'
import { Link } from 'react-router-dom'

const Headbox = () => {
  return (
    <div id='head-box'>
      <div id='menu-container'>
        <Link to='/menu'>
          <img id='menu-icon' src={process.env.PUBLIC_URL +  '/icons/menu-icon.png'} alt=''/>
        </Link>
      </div>
      <div id='logo-container'>
        {/* <div id='logo'>w/ Me</div> */}
      </div>
      <div id='place-holder-container'></div>
    </div>
  )
}

export default Headbox