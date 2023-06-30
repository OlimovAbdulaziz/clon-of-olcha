import React, { useState } from 'react'
import "./CartWrapper.css"
import { addToCart, decrementCart, removeFromCart } from '../../context/cart';
import { useDispatch } from 'react-redux';
import { addToHeart } from '../../context/heart'
function CartWrapper({ data }) {
    const dispatch = useDispatch()
    
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const handleClick = (e) => {
        e.preventDefault()

        const chat__id = 1286705813
        const token = "6359009407:AAH-O-jHEhemsWY35EF0E4zYrosKltguSLQ"

        let my__text = ` Ism: ${name} %0A Telefon raqam: ${phone} %0A %0A`

        data?.forEach(item => {
            my__text += `Nomi: ${item.title} %0A`
            my__text += `Soni: ${item.quantity} %0A`
            my__text += `Narxi: ${item.price} so'm %0A%0A`
        })

        my__text += `Jami: ${data?.reduce((a, b) => a + (b.price * b.quantity), 0)}so'm `

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat__id}&text=${my__text}`

        const api = new XMLHttpRequest()
        api.open("GET", url, true)
        api.send()
        setName('')
        setPhone('')
    }
    return (
        <>
            <div className='cart__wrapper'>
                <div className="cart__wrapper-content">
                    <h2 style={{ padding: "10px" }}>Savatchada {data.length} ta mahsulot bor</h2>
                    {
                        data?.map((item) =>
                            <div className='cart__wrapper-item' key={item.id}>
                                <img src={item.url} alt="" width={80} />
                                <h3>{item.title}</h3>
                                <div className="cart__wrapper__buttons">
                                    <button style={{color: "#555"}} className='minus' disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button style={{color: "#da002b"}} className='plus' onClick={() => dispatch(addToCart(item))}>+</button>
                                </div>
                                <h2>{item.quantity * item.price} so'm</h2>
                                <br />
                                <br />
                                <br />
                                <button style={{color: "blue"}} onClick={() => dispatch(addToHeart(item))}>Saralanganlarga qo'shish</button>
                                <button style={{color: "blue"}} onClick={() => dispatch(removeFromCart(item))}>Olib tashlash</button>
                                <hr />
                                <br />
                            </div>
                        )
                    }
                </div>
                <div className="cart__wrapper-form">
                    <h3>Jami: {data?.reduce((a, b) => a + (b.price * b.quantity), 0)}so'm</h3>
                    <hr />
                    <form action="" onSubmit={handleClick}>
                        <input  type="text" placeholder='Promokod kiriting' />
                        <div className="price">
                            <b>Summa:</b>
                            <h4>{data?.reduce((a, b) => a + (b.price * b.quantity), 0)}so'm</h4>
                        </div>
                        <div>
                            <b>Promokod:</b>
                            <h4>0 so'm</h4>
                        </div>
                        <div>
                            <b>Bonus:</b>
                            <h4>0 so'm</h4>
                        </div>
                        <hr />
                        <div>
                            <b>Buyurtma turi:</b>
                            <h4>Sotib olish</h4>
                        </div>
                        <hr />
                        <button className='order' type='submit'>Buyurtma berish</button>
                    </form>
                </div>
                <div className="details">
                    <h2>Ma'lumotlaringiz</h2>
                    <form action="">
                        <div className="name">
                            <h4>Ismingiz</h4> 
                            <input value={name} onChange={e=> setName(e.target.value)} required type="text" />
                        </div>
                        <div className="number">
                            <h4>Telefon raqam</h4> 
                            <input value={phone} onChange={e=> setPhone(e.target.value)}  required type="number" placeholder='+998 ()' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CartWrapper