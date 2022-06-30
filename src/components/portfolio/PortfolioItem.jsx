import React from 'react'
import { useState } from 'react'
import {BsCodeSquare} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFillPlayBtnFill} from 'react-icons/bs'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import {HiOutlineNewspaper} from 'react-icons/hi'


const PortfolioItem = ({title,image,href, href2, href3,desc}) => {
  const [descsize, setDesc] = useState("0px")
  const description = () => {
    descsize === "0px" ? setDesc("10px") : setDesc("0px")
  }
  return (
    <article className='portfolio__item' style={{height: descsize === '0px' ? '25rem' : '32rem'}}>
        <div className="portfolio__item-icon">
            <div className='icon_file'><BsCodeSquare/></div>
            <div className='portfolio__item-icon-mat'>
                <a className='icon_file2' href = {href} target="_blank"><FaGithub/></a>
                {
                    href3 === null ? <></> : <a className='icon_file3' href = {href3} target="_blank"><HiOutlineNewspaper/></a>
                }
                {
                    href2 === null ? <></> : <a className='icon_file2' href = {href2} target="_blank"><BsFillPlayBtnFill/></a>
                }
            </div>
        </div>

        <h3 className="portfolio__item-title">{title}</h3>
        <div className="portfolio__item-image">
            {image}
        </div>
        <p className='item_desc' style={{fontSize: descsize}}>{desc}</p>
        <div className='portfolio__item-showdetail' onClick={description}>
            
            <a className='detail_more'style = {{cursor: 'pointer'}}>Details</a>
            <a className='detail_down'>{descsize === "0px" ? <AiFillCaretDown/> : <AiFillCaretUp/>}</a>
        </div>
    </article>
  )
}

export default PortfolioItem