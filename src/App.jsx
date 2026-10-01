import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Education, Experience, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas } from './components' 

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <About />
          <Education />
          <Experience />
          <Extracurricular />
          <Tech />
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
