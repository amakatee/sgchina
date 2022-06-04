import React from 'react'
import Navbar from './../components/Navbar'
import Form from './../components/Form'
import Head from 'next/head'
const Layout = ({children}) => {
  return (
    <>
    <Head>
    <meta name="title" content="Ship From China -Import from China - SFC"/>
      <meta name="description" content="Importing from China offers many opportunities. Tips for importing goods from China."></meta>
      <meta property='og:title' content="Import from China. Fast shipping in a few Steps" />
     
    </Head>
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