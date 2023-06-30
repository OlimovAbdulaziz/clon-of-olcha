import React from 'react'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import "./Footer.css"
import img1 from '../../assets/footer/apelsin.png'
import img2 from '../../assets/footer/click.png'
import img3 from '../../assets/footer/humo.png'
import img4 from '../../assets/footer/payme.png'
import img5 from '../../assets/footer/paynet.png'
import img6 from '../../assets/footer/uzcard.png'
import { useLocation } from 'react-router-dom'
function Footer() {

  const location = useLocation().pathname

  if(location.includes("/admin")){
    return <></>
  }

  if(location.includes("/login")){
    return <></>
  }
  return (
    <div className='footer'>
      <div className="footer__wrapper">
        <div className="footer__collection">
          <img width={100} style={{ paddingBottom: "10px", cursor: "pointer" }} src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="" />
          <li>Qo'llab quvvatlash markazi</li>
          <li><GrLocation style={{ color: "#da002b" }} /> Toshkent</li>
          <li><AiOutlineMail /> info@olchauz</li>
        </div>
        <ul className='footer__collection'>
          <h4 style={{ paddingBottom: "10px", fontSize: "22px", color: "#da002b" }}>Malumot</h4>
          <li>Biz haqimizda</li>
          <li>Ish o'rinlari</li>
          <li>Mahsulotlarni qaytarish</li>
          <li>Muddatli to'lov</li>
          <li>Yordam</li>
        </ul>
        <ul className='footer__collection'>
          <li>Eco-friendly</li>
          <li>Bonus va aksiyalar</li>
          <li>To'lov</li>
          <font> olcha da soting</font>
          <li>Servis markazlari</li>
        </ul>
        <div className="footer__imgs">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer