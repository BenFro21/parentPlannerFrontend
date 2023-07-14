import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({user, setUser}) => {
  const logout = () => {
    setUser("0")
  }

  return (
    <ul>
    <Link className='navbarLink' to='/'>IDK</Link>
    <Link  className='navbarLink' to='/children'>Children</Link>
    {/* <button onClick={() => logout}>logout</button> */}
</ul>
  )
}

export default Navbar