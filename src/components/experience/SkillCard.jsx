import React from 'react'

const SkillCard = ({skill,color,bg,color2,icon}) => {
  return (
    <div className="skillcard" style={{background:bg,color:color}}>
        {icon}
        <div className='skill' style={{color:color2}}>{skill}</div>
    </div>
  )
}

export default SkillCard