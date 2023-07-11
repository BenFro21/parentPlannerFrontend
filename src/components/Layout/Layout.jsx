import React from 'react'
import Navbar from '../Navbar/Navbar'

import './Layout.css'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar /> 
      {children}
 
</div>
  )
}

export default Layout