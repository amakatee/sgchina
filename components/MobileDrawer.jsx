import React from 'react'
import NavOption from './NavOption'
import {AiOutlineClose} from 'react-icons/ai'
const MobileDrawer = ({selected, setSelected, setNavShow}) => {
  return (
      <>
    <div className='absolute top-0 left-0 h-screen bg-[#fcfcfc] w-[85vw] flex-custom-toggle '>
          <NavOption
         
            text='Home'
            isActive={Boolean(selected==='Home')}
            setSelected={setSelected}
            path='home'
      
          
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
        <NavOption
            text='Contact Us'
            isActive={Boolean(selected==='Contact Us')}
            setSelected={setSelected}
            path='contact'
             />
       
     </div>
     <AiOutlineClose size={23} className="absolute top-[5vw] left-[75vw] cursor-pointer" onClick={() => setNavShow(false)}/>
     </>

  )
}

export default MobileDrawer