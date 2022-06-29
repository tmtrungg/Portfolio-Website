import React from 'react'
import { useState } from 'react'
import {BsCodeSquare} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'


const PortfolioItem = ({title,image,href, href2}) => {
  const [desc, setDesc] = useState("0px")
  const description = () => {
    desc === "0px" ? setDesc("10px") : setDesc("0px")
  }
  return (
    <article className='portfolio__item' style={{height: desc === '0px' ? '25rem' : '28rem'}}>
        <div className="portfolio__item-icon">
            <div className='icon_file'><BsCodeSquare/></div>
            <div className='portfolio__item-icon-mat'>
                <a className='icon_file2' href = {href} target="_blank"><FaGithub/></a>
                {
                    href2 === null ? <></> : <a className='icon_file2' href = {href2} target="_blank"><BsFillPlayBtnFill/></a>
                }
            </div>
        </div>

        <h3>{title}</h3>
        <div className="portfolio__item-image">
            {image}
        </div>
        <p className='item_desc' style={{fontSize: desc}}>this is a long description this is a long description this is a long description this is a long description this is a long description </p>
        <div className='portfolio__item-showdetail' onClick={description}>
            
            <a className='detail_more'style = {{cursor: 'pointer'}}>Details</a>
            <a className='detail_down'>{desc === "0px" ? <AiFillCaretDown/> : <AiFillCaretUp/>}</a>
        </div>
    </article>
  )
}

export default PortfolioItem