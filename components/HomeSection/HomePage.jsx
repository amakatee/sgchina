import React from 'react'

const style = {
  home: `grid content-center   w-[screen] h-[90vh]`,
  homeContainer: `flex flex-col text-center w-[50vw] mx-auto justfy-between items-center gap-5`,

}

const Home = () => {
  return (
   <div id='home' className={style.home} >
    <div className={style.homeContainer}>
      <h1 className='home-title'>Ship your package Worldwide From China</h1>
      <p className='home-subtitle'>We ship up to 99% of Goods</p>
      <img className='home-img' src={'/banner-thumb.png'}></img>
    </div>
    </div>  
  )
}

export default Home