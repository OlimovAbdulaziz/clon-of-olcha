import React from 'react'
import './WishList.css'
import FirstEmpty from '../../components/empty/FirstEmpty'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../context/cart'
import { removeFromHeart } from '../../context/heart'
function Wishlist() {
  const dispatch = useDispatch()
  const heart = useSelector(i => i.heart.value)
  return (
    <div className="container">
      <div className="wishlist">
        <div className='wishlist__wrapper'>
          {
            heart.length ?
              heart?.map((item) =>
                <div className="wishlist__card" key={item.id}>
                  <img src={item.url} alt="" />
                  <h2>{item.title}</h2>
                  <h3>{item.price} so'm</h3>
                  <div className="card__buttons">
                    <button onClick={()=> dispatch(addToCart(item))}>Savatchaga qo'shish</button>
                    <button onClick={()=> dispatch(removeFromHeart(item))}>Olib tashlash</button>
                  </div>
                </div>
              )
              :
              <FirstEmpty />
          }
        </div>
      </div>
    </div>

  )
}

export default Wishlist