import React from 'react'

const Headbox = () => {
  return (
    <div id='head-box'>
      <div id='logo-container'>
        <div id='logo'>w/ Me</div>
      </div>
      <div id='menu-container'>
        <img id='menu-icon' src={process.env.PUBLIC_URL +  '/icons/menu-icon-w.png'}/>
      </div>
    </div>
  )
}

export default Headbox