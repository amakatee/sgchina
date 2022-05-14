import React from 'react'

const SectionHeader = ({text}) => {
  return (
    <div className='w-screen mb-10 text-center'>
        <h1 className='section-header-title'>{text}</h1>
    </div>
  )
}

export default SectionHeader