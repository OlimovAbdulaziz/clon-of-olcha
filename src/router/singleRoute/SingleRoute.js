import React from 'react'
import { AiFillHeart, AiFillStar, AiOutlineFacebook, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'
import { BsChevronRight, BsTelegram } from 'react-icons/bs'
import "./SingleRoute.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToHeart, removeFromHeart } from '../../context/heart'

function SingleRoute() {
    const { state } = useLocation()
    console.log(state);
    const dispatch = useDispatch()
    const heart = useSelector(i => i.heart.value)
    return (
        <div className='container'>
            <div className="singleRoute">
                <div className="product__image">
                    <img src={state.url} alt="" />
                </div>
                <div className="product__details">
                    <h2 className='product__title'>{state.title}</h2>
                    <div className="product__rating">
                        <AiFillStar />
                        <span>5.0 (585 baho)</span>
                    </div>
                    <div className='product__price'>
                        <h3>{state.price} so'm</h3>
                    </div>
                    <div className="state">
                        <h4 className='send'>Holati:</h4>
                        <h4 style={{ color: "#34d374", fontSize: "20px", marginTop: "-8px" }}>Sotuvda bor</h4>
                    </div>
                    <div className="share">
                        <h4>Ulashish:</h4>
                        <button><AiOutlineFacebook className='facebook' />
                        </button>
                        <button>
                            <BsTelegram className='telegram' />
                        </button>
                        <button>
                            <AiOutlineTwitter className='twitter' />
                        </button>
                        <button>
                            <AiOutlineWhatsApp className='whatsapp' />
                        </button>
                    </div>
                    <div className="product__btns">
                        <button className="btnOne">
                            <AiOutlineShoppingCart />
                            Savatga qo'shish
                            </button>
                        <button className="btnTwo">Xarid qilish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute