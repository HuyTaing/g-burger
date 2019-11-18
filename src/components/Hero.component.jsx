import React from 'react'
import { Link } from 'gatsby'


const Hero = () => {
  return (
    <header className="container-fluid 
      d-flex 
      flex-column 
      justify-content-center  
      align-items-center">
      <div className="hero-text">
        <h1>G-BURGER</h1>
        <p>22 rue de la république - Pau</p>
          <Link to ="/cartes">
            <button className="hero-button">Menu</button>
          </Link>
      </div>
    </header>
  )
}

export default Hero