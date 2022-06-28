import React from 'react'
import './contact.css'

const ContactForm = ({form, onSubmit,text}) => {
  return (
    <form ref = {form} onSubmit = {onSubmit} id = 'message'>
      <div className='first__line'>
        <input className='input_name' type="text" name = 'name' value={text} placeholder='Your name' required />
        <input className='input_mail' value={text} type="email" name = 'mail' placeholder='Your email' required />
      </div>
      <textarea name = 'message' value={text} rows ='5' placeholder='Type your message here' required/>
      <button type ='submit' className='btn btn-secondary'>Send</button>
    </form>
  )
}

export default ContactForm