import React, { useState } from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import Links from '../constant/Links'
import Icons from '../constant/Social-icons'


const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toogleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar-perso">
      <div className="nav-center container">
        <div className="nav-header">
          <Link to="/">
            <img src={ Logo } alt="logo restaurant" className="logo-restaurant" />
          </Link>
          <button 
          type="button" 
          className="logo-btn" 
          onClick={ toogleNav }>
            <FaAlignRight  className="logo-icon"/>
          </button>
        </div>

        <ul className={isOpen ? "nav-links show-nav" : "nav-links" }>
          {Links.map((link,index)=> {
            return (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
        
        <div className="nav-social-links">
          {Icons.map((icon,index) => {
            return <a key={index} href={icon.url}>{icon.icons}</a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar