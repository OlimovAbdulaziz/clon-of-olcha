import React from 'react'
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineHome } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function NavbarMain() {
  const cart = useSelector(i => i.cart.value)
  return (
    <div className='container navbar__main'>
      <div className="nav__logo">
        <Link to={"/"}>
          <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="" />
        </Link>
      </div>

      <button className='nav__btn'>
        <AiOutlineMenu />
        <span>Katalog</span>
      </button>
      <div className="nav__search">
        <input type="text" placeholder="Katalog bo'yicha qidirish" />
        <button><AiOutlineSearch /></button>
      </div>
      <ul className="nav__collection">
        <li className="nav__item">
          <Link to={"/"}>
            <AiOutlineHome />
            <span>Bosh sahifa</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/admin"}>
            <AiOutlineUser />
            <span>Kirish</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/wishlist"}>
            <AiOutlineHeart />
            <span>Saralangan</span>
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/chart"}>
            <AiOutlineShoppingCart />
            <span>Savatcha</span>
            <p className='cart__lentgth'>{cart.length}</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarMain