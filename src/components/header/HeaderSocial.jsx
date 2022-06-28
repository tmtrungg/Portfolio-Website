import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'


const HeaderSocial = () => {
  const data = [
    {
      href: "https://github.com/tmtrungg",
      icon: <FaGithub/>
    },
    {
      href: "https://www.linkedin.com/in/minh-trung-tran/",
      icon: <BsLinkedin/>
    },
    {
      href: "mailto:trantrung951@gmail.com",
      icon: <FiMail/>
    },
  ];
  return (
    <div className="header__socials">
        {data.map(({ href, icon }, key) => (
          <a href = {href} target="_blank">{icon}</a>
        ))}
    </div>
  )
}

export default HeaderSocial