import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <div className="header__intro"> Hello I'm</div>
          <h1>Trung Minh Tran</h1>
          <div className="header__intro">Software/Web3 developer</div>
          <CTA/>
          <HeaderSocial/>
        </div>

        <div className="me_img"> 
          <div className="me">
          <img src={ME} alt="me"/>
        </div></div>
       

        {/* <a href="#contact" className='scroll__down'>Scroll down</a> */}

        
      </div>

    </header>
  )
}

export default Header