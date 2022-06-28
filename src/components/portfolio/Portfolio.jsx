import React from 'react'
import './portfolio.css'
import PortfolioItem from './PortfolioItem'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const Portfolio = () => {
  const data = [
    {
        title: 'This is the title',
        image: <img src={IMG1} alt=''/>,
        href: 'https://github.com',
        href2: null
    },
    {
      title: 'This is the title',
      image: <img src={IMG2} alt=''/>,
      href: 'https://github.com',
      href2: 'https://youtube.com'
    },
    {
      title: 'This is the title',
      image: <img src={IMG3} alt=''/>,
      href: 'https://github.com',
      href2: 'https://youtube.com'
    },
    {
      title: 'This is the title',
      image: <img src={IMG4} alt=''/>,
      href: 'https://github.com',
      href2: null
    }
  ];
  return (
    <div id='portfolio' className='portfolio'>
      <h4>My previous</h4>
      <h2>Projects</h2>

      <div className="containter portfolio__container">
          {data.map (({title, image, href,href2}) => (
              <PortfolioItem title= {title} image = {image} href = {href} href2 = {href2}/>
          ))}
      </div>

    </div>
  )
}

export default Portfolio