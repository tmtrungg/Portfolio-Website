import React from 'react'
import SkillCard from './SkillCard'

const SkillColumn = ({title, item}) => {
  const ar = item;
  console.log(ar);
  return (
    <div className="skill__column">
        <div className='col__title'>
          {title}
        </div>
        {ar.map(({ skill, color, bg,color2,icon}) => (
        <SkillCard
          skill={skill}
          color = {color}
          color2 = {color2}
          bg = {bg}
          icon = {icon}
        />
      ))}  
    </div>
  )
}

export default SkillColumn