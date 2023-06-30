import React from 'react'
import './Home.css'
import Slider from '../../components/slider/Slider'
import Products from '../../components/products/Products'
import Swipe from '../../components/carousel/Carousel'

function Home() {
  return (
    <div className='home'>
        <Slider />
        {/* <Swipe /> */}
        <Products />
    </div>
  )
}

export default Home