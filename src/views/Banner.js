import React from 'react'
import logo from '../assests/images/LOGO-2021-web.png';
import logobg from '../assests/images/header-bg.jpg';

const Banner = () => {
  let style = {
    backgroundImage: `url(${logobg})`
  }
  return (
    <div className="header-img-wrapper"
      style={style} >
        <img src={logo} className="img-responsive header-img" alt="Latest Rage Banner"/>
        </div>
    )
}

export default Banner
