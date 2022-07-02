import React from 'react'
import './contact.css'
import ContactOption from './ContactOption'
import { useState } from 'react'
import ContactForm from './ContactForm'
import {FiMail} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [showMes,setShowMess] = useState('0');
  const [text,setText] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7dqmt7d', 'template_d6ut18e', form.current, '5-kQDR3jGyNg_kslD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setText('');
  };

  const data = [
    {
      title: 'Email',
      adr: 'trantrung951@gmail.com',
      desc: 'Send an email',
      href: "mailto:trantrung951@gmail.com",
      icon: <FiMail className='contact__option-icon'/>
    },
    {
      title: 'LinkedIn',
      adr: 'Trung Tran',
      desc: 'Connect with me',
      href: "https://www.linkedin.com/in/tmtrung/",
      icon: <BsLinkedin className='contact__option-icon'/>
    },
    {
      title: 'Direct Message',
      adr: 'Leave a direct message from here',
      desc: 'Open message box',
      href: "#message",
      icon: <AiOutlineMessage className='contact__option-icon'/>
    }
  ]
  console.log(showMes)
  const openMessage = (e) => {
    showMes === '0' ? setShowMess('1') : setShowMess('0')
  }
  return (
    <div id='contact' className='contact'>
      <div style={{paddingTop: showMes=== "1" ? '0' : '15rem'}}></div>
      <h4>wanna leave a message ?</h4>
      <h2>Contact for work</h2>
      <div className="contact__container">
        <div className="contact__options">
          {data.map (({title, adr, desc,href,icon}) => (
              <ContactOption title= {title} desc= {desc} adr = {adr} href= {href} icon= {icon} onClick = {openMessage} showMes = {showMes}/>
          ))}
        </div>
        {showMes === '1' ? <ContactForm form = {form} onSubmit = {sendEmail} text = {text}/> : <div style={{paddingBottom:'15rem'}}/>}
      </div>
    </div>
  )
}

export default Contact