import React from 'react'
import Icons from '../constant/Social-icons'

const Footer = () => {
  return (
    <footer className="container-fluid py-4">
      <div className="container text-center">
        <div className="nav-social-links text-center">
          {Icons.map((icon,index) => {
            return <a key={index} href={icon.url}>{icon.icons}</a>
          })}
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} copyright - G-BURGER</p>
      </div>
    </footer>
  )
}

export default Footer