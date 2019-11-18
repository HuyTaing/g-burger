import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../assets/scss/main.scss'

import Navbar from "../components/Navbar.component"
import Footer from "../components/Footer.component"

const Layout = ({ children }) => {
  return(
    <>
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </>
  )
}
  
export default Layout