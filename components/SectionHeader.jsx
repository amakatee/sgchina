import React from 'react'

const SectionHeader = ({text, secondaryText}) => {
  return (
    <div className='w-screen mb-10 text-center'>
        <h1 className='section-header-title'>{text}</h1>
        <h2 className='section-header-subtitle'>{secondaryText}</h2>
    </div>
  )
}

export default SectionHeader