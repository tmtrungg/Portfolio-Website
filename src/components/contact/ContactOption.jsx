import React from 'react'
import './contact.css'

const ContactOption = ({title,desc,adr,href,icon, onClick,showMes}) => {
  return (
    <div className="contact_option-big">
    <article className='contact__option'>
        {icon}
        <h3>{title}</h3>
        <h5 style={{marginBottom: '0.5rem'}}>{adr}</h5>
        <div className='contact__desc'>
            {title === 'Direct Message' ? (
                <a
                    href='#contact'
                    rel="noreferrer" 
                    target = '_self'
                    onClick = {onClick}
                >
                    {desc}
                </a>
            ) : (
                <a
                    href={href} 
                    rel="noreferrer" 
                    target = '_blank'
                >
                    {desc}
                </a>
            )}
        
        </div>
    </article>
    </div>
  )
}

export default ContactOption