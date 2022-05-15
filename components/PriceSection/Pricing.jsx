import React from 'react'
import Carousel from 'react-multi-carousel'
import Card from './../PriceSection/Card'
import SectionHeader from '../SectionHeader'
import {pricingData} from './../../data/pricingData'

const Pricing = () => {
  return (
    <section id='pricing' className='max-w-[100vw] pricing-section min-h-[90vh] grid content-center'>
      <SectionHeader text='Pricing Plan' secondaryText='We ship Worldwide Get in touch with us to get better plan for your desctination!'/>
        <div className='w-[90vw] mx-auto  cards-row'>
          {pricingData.map(data => (
            <Card key={data.id} data={data}/>
          ))}

          
            

        </div>
    </section>
  )
}

export default Pricing