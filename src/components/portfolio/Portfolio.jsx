import React from 'react'
import './portfolio.css'
import PortfolioItem from './PortfolioItem'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'



const Portfolio = () => {
  const gitlink = <a href={'https://github.com/tmtrungg?tab=repositories'} target = '_blank' style={{color: 'var(--color-primary-variant)'}}>my github</a>
  const data = [
    {
        title: 'CoVID-19 Oxygen Deprivation Quick Detection system',
        image: <img src={IMG1} alt=''/>,
        desc: 'Build a low-cost complex system that can quickly detect if a person is having a 3rd stage of CoVID-19 disease or not by immediate measuring and using input of Oxygen level in humans blood with their body temperature. \n \nThe system automatically and immediately contact the hospital if any emergency detected.',
        href: 'https://github.com/tmtrungg/CoVID-19-Oxygen-Deprivation-Quick-Detection-system',
        href2: 'https://www.youtube.com/watch?v=3DPnJuu54Co',
        href3: 'https://www.hackster.io/trantrung951/covid-19-oxygen-deprivation-quick-detection-project-b1b4b0'
    },
    {
      title: '2D GAME: Bucket the Rain',
      image: <img src={IMG2} alt=''/>,
      desc: 'A 2D game that uses arrow buttons to play. Player must control the bucket to take as much as blue drop as possible to gain points and break records, and dodge the purple drops to avoid loosing point.\nThe game ended if player loses all the point they have. Game difficulty will be increased for each point milestone (of 10, 20, etc.).',
      href: 'https://github.com/tmtrungg/2Dgame-Bucket-the-Rain',
      href2: 'https://www.youtube.com/watch?v=hSc6S0tVOA8',
      href3: null
    },
    {
      title: 'Game of Nim playing bot with optimized strategy',
      image: <img src={IMG4} alt=''/>,
      desc: 'Create a python virtual board of game of Nim and a python bot that can play the game versus human player. The bots decision is built based on the optimal strategy (of Nim-sum, check out my presentation video below for more detail)',
      href: 'https://github.com/tmtrungg/Bot-playing-Game-of-Nim',
      href2: 'https://youtu.be/mognXJLQG8M',
      href3: null
    },
    {
      title: 'Concurrency Nursing Home Administration System',
      image: <img src={IMG3} alt=''/>,
      desc: 'Applied in the large nursing home with large number of nurse and patients, the system that can dynamically control the availability and location of nurses (workers) and patient then optimizing the process of automatically arrange the available and nearest nurse to a particular patient with specific request (collected using buttons and sensors)',
      href: 'https://github.com/tmtrungg/Concurrency-Nursing-Home-Administration-System',
      href2: 'https://youtu.be/Tlq4uzVe-Dk',
      href3: null
    }
  ];
  return (
    <div id='portfolio' className='portfolio'>
      <h4>My previous</h4>
      <h2>Projects</h2>

      <div className="containter portfolio__container">
          {data.map (({title, image,desc, href,href2, href3}) => (
              <PortfolioItem title= {title} image = {image} href = {href} href2 = {href2} href3 = {href3} desc ={desc}/>
          ))}
      </div>
    <h5 className='see_more'>See more at {gitlink}</h5>
    </div>
  )
}

export default Portfolio