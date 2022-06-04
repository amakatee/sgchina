import React from 'react'
import SectionHeader from '../SectionHeader'

const Instract = () => {

  return (
      <div className='w-[100vw] min-h-[100vh] pt-[5rem] pb-[5rem]' id='features'>
      <SectionHeader   text='How does it Work?'   />
    <div  className='how-cont'>
        <div className='how-card'>
            <div className='how-text'>
                <p>Send your package to our warehouse address. Then Paste a domestick track number
                    as shown below.
                </p>

            </div>
            <div className='how-video'>
            <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
            <source
            src='/1.mp4'
            type='video/mp4'
            >
            </source>
          </video>

            </div>
        </div>
        <div className='how-card'>
            <div className='how-text'>
                <p>
                  Select packages, add a destination, and click Submit. Parcels of the same destination will be packed together. Let us know if you require a separate package.
                </p>

            </div>
            <div className='how-video'>
            <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
            <source
            src='/2.mp4'
            type='video/mp4'
            >
            </source>
          </video>

            </div>
        </div>
        <div className='how-card'>
            <div className='how-text'>
                <p>After the goods are packed, you will receive an invoice for payment, click "Continue payment".
                </p>

            </div>
            <div className='how-video'>
            <video loop={true} muted={true} autoPlay={true} playsInline controls={false} className="video-main">
            <source
            src='/3.mp4'
            type='video/mp4'
            >
            </source>
          </video>

            </div>
        </div>
        <div className='how-card'>
            <div className='how-text'>
                <p>After payment is completed, you will receive an international tracking number and will be able to track your package.
                </p>

            </div>
            <div className='how-video'>
            <img src='/4.png'></img>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Instract