import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Services from './components/services/Services.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App