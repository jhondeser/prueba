import React from 'react'
import Welcome from "./components/welcome/Welcome";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Softskils'

const App = () => {
  return (
    <>
      <Welcome/>
      <Header />
      <Nav />
      <About/>
      <Experience />
      {/* <Skills/> */}
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App