import React from 'react'
import "./Empty.css"
import { Link } from 'react-router-dom'

function SecondEmpty() {
    return (
        <div className="empty-container">
            <img src="https://olcha.uz/_nuxt/cart.de8a9297.png" alt="" /> <br />
            <h2>Savatchangiz bo'sh</h2> <br />
            <h4 style={{ fontWeight: "normal", fontSize: "16px" }}>Lekin siz uni har doim to'ldirishingiz mumkin</h4> <br />
            <Link to={"/"}><button>Asosiy sahifaga</button></Link>
        </div>
    )
}

export default SecondEmpty