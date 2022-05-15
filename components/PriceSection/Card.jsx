import React from 'react'

const Card = ({data}) => {
  const {
    method,
    pricePerKg, 
    textPerKg, 
    weightSegment,
    pricePerHalf,
    textPerHalf,
    pricePerKg2,
    weightSegment2,
    pricePerKg3,
    weightSegment3,
    shipIn,
    description
  } = data
  return (
    <div className='flex flex-col items-center card'>
        <div className='card-destination'>{method}</div>
        <div className='card-price'>
            <h1> <span>{pricePerKg}$</span> / {textPerKg}</h1>
            {pricePerHalf &&
            <h1> <span>{pricePerHalf}$</span> /{textPerHalf}</h1>
            }

            <h1>{weightSegment}</h1>
            {pricePerKg2 && 
            <>
             <h1> <span>{pricePerKg2}$</span> / {textPerKg}</h1>
             <h1>{weightSegment2}</h1>
             </>
            }
            {pricePerKg3 &&
             <>
             <h1> <span>{pricePerKg3}$</span> / {textPerKg}</h1>
             <h1>{weightSegment3}</h1>
             </>
             }

        </div>
        <div className='card-description'>
        <h1 className='shipIn'> {shipIn}</h1>
            {description}
        </div>

        
        {/* <button className='header__button'>Get In Touch</button> */}
       
    </div>
  )
}

export default Card