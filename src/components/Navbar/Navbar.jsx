import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({user, setUser}) => {


  return (
    <ul>

    <Link  className='navbarLink' to='/children'>Children</Link>
    <Link className='navbarLink' to='/child/add'>Add Child</Link>
   
</ul>
  )
}

export default Navbar

