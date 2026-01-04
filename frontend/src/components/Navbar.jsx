import React from 'react'
import { navbarStyles } from '../assets/dummyStyles'
import Logo from 
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        <nav className={navbarStyles.nav}>
          <div className={navbarStyles.logoSection}>
          <Link to='/' className={navbarStyles.logoLink}>
          <img src="{logo}" alt="logo" className={navbarStyles.logoImage} />
          </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar