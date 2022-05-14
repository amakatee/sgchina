import React from 'react'

const FeaturesItem = ({item}) => {
  return (
      <div className='flex flex-col feture-item-custom'>
        <h1 className='feature-item-title' >{item.title}</h1>
        <p className='feature-item-desc'>{item.description}</p>
      </div>
  
  
  )
}

export default FeaturesItem