import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocial from './HeaderSocial'
import {IoIosArrowRoundDown} from 'react-icons/io'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <div className="header__intro"> Hello I'm</div>
          <h1 className='my_name'>Trung Minh Tran.</h1>
          <div className="header__intro">Software/Web3 developer</div>
          <CTA/>
          <HeaderSocial/>
        </div>

        <div className="me_img"> 
          <div className="me">
          <img src={ME} alt="me"/>
        </div></div>

        
      </div>
      <a className='scroll_down' href ='#about'>
         <div>Scroll down</div>
          <div href="#about" target="_blank" className='scroll_down-icon'>↓</div>
      </a>
    </header>
  )
}

export default Header