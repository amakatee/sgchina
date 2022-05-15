import React from 'react'
import SectionHeader from './../SectionHeader'
import {featuresData } from './../../data/featuresData'
import FeaturesItem from './FeaturesItem'

const Features = () => {
  return (
    <div id='features'
    className='grid content-center w-screen h-screen' >
        <SectionHeader text="How does it Work?" />
         <div className=' features-custom'>
             
           <div className='w-[90vw]  mx-auto flex items-center gap-10 justify-around mobile-fetures' >
                {featuresData.map((item) => (
                    <FeaturesItem key={item.id} item={item} />
                ))}
            </div>    
                
            
         </div>
     </div>
  )
}

export default Features