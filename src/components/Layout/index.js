import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import 'normalize.css'
import '../../assets/css/main.css'

const Layout = ({ children }) => {
  return (
    <div style={{maxWidth: `1440px`, margin: `0 auto`}}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
