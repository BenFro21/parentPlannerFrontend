import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Layout.css'

const Layout = ({children, user, setUser}) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} /> 
      {children}
 
</div>
  )
}

export default Layout