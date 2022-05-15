import React from 'react'
import Navbar from './../components/Navbar'
import Form from './../components/Form'
const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <main>
        {children}
    </main>
    <footer>
        <Form />
    </footer>
    
    </>
  )
}

export default Layout