import React from 'react'

const TestimonialItem = ({data}) => {
    const {name, text, imageURL} = data
  return (
    <div className='test-card'>
       
        <div className='test-text ml-[10%]'>
            {text}
        </div>
        <div className='flex content-center gap-2 ml-[10%]' >
            <div className='test-img'>
              <img className='w-[100%] h-[100%] rounded-[50%] object-cover'  src={imageURL}></img>
            </div>
            <div>
            <h3 className='test-name'>{name}</h3>
            <p className='text-[9px] '> 23 DEcember</p>
            </div>
        </div>
        
    </div>
  )
}

export default TestimonialItem