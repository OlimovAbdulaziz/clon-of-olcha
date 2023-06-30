import React from 'react'
import "./Chart.css"
import SecondEmpty from '../../components/empty/SecondEmpty'
import { useSelector } from 'react-redux'
import CartWrapper from '../../components/cart-wrapper/Wrapper'

function Chart() {
  const cart = useSelector(s => s.cart.value)


  return (
    <div className="container">
      <div className="chart">
        {
          cart.length ?
            <CartWrapper data={cart} /> :
            <SecondEmpty />
        }
      </div>

    </div>

  )
}

export default Chart