import React, {useState} from 'react'
import Logo from './../components/Logo'
import {GiHamburgerMenu} from 'react-icons/gi'
import MobileDrawer from './../components/MobileDrawer'

import NavOption from './../components/NavOption'
const style = {
    header: `w-screen absolute top-0 left-0 sticky bg-[white] z-50` ,
    navbar:`flex justify-between align-center h-[10vh] w-[90vw] mx-auto bg-[#0000011] items-center`,
    navigation:` sm:hidden md:flex  cursor-pointer md:justify-between md:items-center md:gap-10  `,
   
    
  
    
}

const Navbar = ({initialSelected = 'Home'}) => {
    const [selected , setSelected] = useState(initialSelected)
    const [navShow, setNavShow] = useState(false)

    const handleToggle = () => {
      setNavShow(true)

    }

  return (
   <div className={style.header}> 
    <div className={style.navbar}>
        <Logo text='SFC'/>
        <div className='cursor-pointer sm:hidden md:flex md:justify-between md:items-center md:gap-10 mobile-hidden'>
         
            <NavOption
            text='Home'
            isActive={Boolean(selected==='Home')}
            setSelected={setSelected}
            path='home'
      
          
             />
               <NavOption
            text='About Us'
            isActive={Boolean(selected==='About Us')}
            setSelected={setSelected}
            path='about'
             />
            <NavOption
            text='Features'
            isActive={Boolean(selected==='Features')}
            setSelected={setSelected}
            path='features'
             />
            <NavOption
            text='Pricing'
            isActive={Boolean(selected==='Pricing')}
            setSelected={setSelected}
            path='pricing'
             />
           
             {/* <NavOption
            text='Testimonial'
            isActive={Boolean(selected==='Testimonial')}
            setSelected={setSelected}
            path='testimonial'
             /> */}
             <NavOption
            text='Contact Us'
            isActive={Boolean(selected==='Contact Us')}
            setSelected={setSelected}
            path='contact'
             />
             
        
        </div>
        <div className='flex items-center justify-center gap-4'>
       
      <a href='https://shipfc.netlify.app' target='_blank'> <button className='header__button'>Get An Account </button></a> 
        {/* <GiHamburgerMenu 
        className='cursor-pointer mobile-toggle' 
        size={25}
        onClick={() => handleToggle()}
         /> */}
         <div className='flex flex-col gap-1 cursor-pointer mobile-toggle' onClick={() => handleToggle()}>
           <div className='w-[25px] h-[2px] bg-[#000000]'></div>
           <div className='w-[25px] h-[2px] bg-[#000000]'></div>
         </div>
        </div>
        {navShow &&
         <MobileDrawer  selectd={selected} setSelected={setSelected} setNavShow={setNavShow} /> }
       
        
    </div>
    
    </div>  
  )
}

export default Navbar