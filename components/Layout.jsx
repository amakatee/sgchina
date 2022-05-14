import React from 'react'
import Navbar from './../components/Navbar'
const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <main>
        {children}
    </main>
    <footer>
        footer
    </footer>
    
    </>
  )
}

export default Layout