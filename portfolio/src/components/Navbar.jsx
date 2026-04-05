
import React, { useState } from 'react'
// 1. Change Link to NavLink
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav id='navbar'>
        <NavLink  to={"/"}>
          <span className='logo'>emnl</span>
        </NavLink>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>
              {/* 2. Use NavLink and add "end" for the home route */}
              <NavLink to={"/"} end onClick={() => setIsOpen(false)}>
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to={"/projects"} onClick={() => setIsOpen(false)}>
                PROJECTS
              </NavLink>
            </li>

            <li>
              <NavLink to={"/about"} onClick={() => setIsOpen(false)}>
                ABOUT ME
              </NavLink>
            </li>

            <li>
              <NavLink to={"/contact"} onClick={() => setIsOpen(false)}>
                CONTACT ME
              </NavLink>
            </li>
        </div>
    </nav>
  ) 
}

export default Navbar