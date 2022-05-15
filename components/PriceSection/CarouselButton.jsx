import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
const CarouselButton = ({ next,previous }) => {
    
    return (
        <div className='w-[100%]'>
            <div >
                <div className='button_group'>
                    <button onClick={previous} aria-label="Previous">
                    <IoIosArrowRoundBack size={40} />
                    </button>
               
                 <button onClick={next} aria-label="Next">
                <IoIosArrowRoundForward size={40} />
                </button>
                </div>

            </div>
        </div>
  )
}

export default CarouselButton