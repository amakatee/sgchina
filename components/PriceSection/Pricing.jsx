import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Card from './../PriceSection/Card'
import SectionHeader from '../SectionHeader'
import {pricingData} from './../../data/pricingData'
import CarouselButtom from './../PriceSection/CarouselButton'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

const Pricing = () => {
  return (
    <section id='pricing' className='max-w-[100vw] pricing-section min-h-[90vh] grid content-center'>
      <SectionHeader text='Pricing Plan' secondaryText='We ship Worldwide Get in touch with us to get better plan for your destination!'/>
        <div className='w-[90vw] mx-auto  cards-row'>
        <Carousel 
            responsive={responsive}
            infinite={true}
            // ssr={true}
            // transitionDuration={2000}
            customButtonGroup={<CarouselButtom />}
            renderButtonGroupOutside={true}
            arrows={false}
           
            className='card-row'
            
          
          
         
             >
           
            {pricingData.map(data => (
            
            <Card key={data.id} data={data}/>
           
          ))}
           </Carousel>

          
            

        </div>
    </section>
  )
}

export default Pricing