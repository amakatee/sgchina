import React from 'react'
import SectionHeader from '../SectionHeader'
import TestimonialItem from './../Testimonial/TestimonialItem'
import {testimonialData} from  './../../data/testimonialData'
import Carousel from 'react-multi-carousel'
import CarouselButton from '../PriceSection/CarouselButton'

// import CarouselButtom from './../PriceSection/CarouselButton'

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
const Testimonial = () => {
  return (
    <section id='testimonial' className='w-[100vw] min-h-[30vh] pt-[10vh]' > 
    <SectionHeader text='Testimonial' />
    <div className='flex content-center justify-around gap-10 w-[80vw] mx-auto test-section'>
       
        {/* <Carousel 
        responsive={responsive} 
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        customButtonGroup={<CarouselButton />}
        infinite={true}
        >
        {testimonialData.map(data => (
            <TestimonialItem data={data} key={data.id}/>

        ))}
        </Carousel>
   */}
       
      
        

    </div>
    </section>
  )
}

export default Testimonial