import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
    <Link className='navbarLink' to='/'>Add Child</Link>
    <Link  className='navbarLink' to='/children'>Children</Link>
    <Link  className='navbarLink' to=''>All Activitys</Link>
</ul>
  )
}

export default Navbar