import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import links from "../../constants/links"


const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h1 className='site-title'>Varsana Swami</h1>
            <h3 className='site-description'>
              Service to the Dhama and Stewardship of the Earth
            </h3>
          </Link>
          <button className='nav-btn' onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          {links.map((link) => {
            const {id, url, text} = link
            if (id === 3 || id === 4) {
              return (
                <Link
                  key={id}
                  to={url}
                  className='nav-link'
                  activeClassName='active-link'
                  onClick={() => setShow(false)}
                >
                  {text}
                  <FaChevronDown className="nav-icon" />
                </Link>
              ) 
            } else {
              return (
                <Link
                  key={id}
                  to={url}
                  className='nav-link'
                  activeClassName='active-link'
                  onClick={() => setShow(false)}
                >
                  {text}
                </Link>
              ) 
            }
          })}
          <div className='nav-link'>
            <a href='/' className='donate-link' onClick={() => setShow(false)}>
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
