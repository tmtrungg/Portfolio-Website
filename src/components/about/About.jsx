import React from "react";
import './about.css'
import ME from '../../assets/me-about2.png'

const About = () => {
  return (
    <section id='about' className="about">
      <h4>Start with</h4>
      <h2>My summary</h2>

      <div className="about__container">
        <div className="about__me">
            <img className="about__img" src={ME} alt="About Image"/>
        </div>
        <div>
          <div className="about__content" style = {{textAlign: 'left'}}>
            <p>
            Graduated from Computer Science at Deakin University. 
            I have both a strong individual stance and great integration into the professional working environment.  
            Dynamic, hardworking and able to maintain positive relationships with other workers.  
            An advantage of international student has given me fluency in both Vietnamese and English.  
            I'm looking for an opportunity to work as a smart contract/web3 developer or any opportunity in the blockchain development aspect.
            </p>

            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About