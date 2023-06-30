import React from 'react'
import './Home.css'
import Swiper from '../../components/swiper/Swiper'
import Products from '../../components/products/Products'

function Home() {
  return (
    <div className='home'>
        <Swiper />
        <Products />
    </div>
  )
}

export default Home