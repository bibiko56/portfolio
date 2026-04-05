import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes,Route } from 'react-router'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Projects from './routes/Projects.jsx'
import Contact from './routes/Contact.jsx'
import Footer from './components/Footer.jsx'


import Circles from './components/Circles.jsx'

const App = () => {
  return (
    <div>
       <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Circles />
    <Footer />
    </div>
   
  )
}

export default App