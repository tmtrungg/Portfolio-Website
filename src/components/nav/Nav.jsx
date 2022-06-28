import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {SiOpslevel} from 'react-icons/si'
import {RiComputerLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

import { useState } from 'react'

const Nav = () => {
  const [aNav, setANav] = useState('#');
  const data = [
    {
      pos: '#',
      icon: <AiOutlineHome/>
    },
    {
      pos: '#about',
      icon: <FiUser/>
    },
    {
      pos: '#experience',
      icon: <RiComputerLine/>
    },
    {
      pos: '#portfolio',
      icon: <SiOpslevel/>
    },
    {
      pos: '#contact',
      icon: <BiMessageDetail/>
    },
  ];
  return (
    <div className='nava'>
      <div className='nav'>
        {/* {data.map(({pos,icon}) => {
          <a href={pos} onClick={() => setANav({pos})} className={aNav === {pos} ? 'active' : ''}>{icon}</a>
        })} */}
        <a href="#" onClick={() => setANav('#')} className={aNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setANav('#about')} className={aNav === '#about' ? 'active' : ''}><FiUser/></a>
        <a href="#experience" onClick={() => setANav('#experience')} className={aNav === '#experience' ? 'active' : ''}><RiComputerLine/></a>
        <a href="#portfolio" onClick={() => setANav('#portfolio')} className={aNav === '#portfolio' ? 'active' : ''}><SiOpslevel/></a>
        <a href="#contact" onClick={() => setANav('#contact')} className={aNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
      </div>
    </div>
  )
}

export default Nav