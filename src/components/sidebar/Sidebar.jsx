import React from "react";
import './Sidebar.css'
import { AiFillExclamationCircle, AiOutlineHome, AiFillCar, AiFillPicture, AiFillApple } from 'react-icons/ai'
import { SlEarphones } from 'react-icons/sl'
import { GiVendingMachine } from 'react-icons/gi'
import { GiClothes } from 'react-icons/gi'
import { GiRunningShoe } from 'react-icons/gi'
import { BsFillBagHeartFill } from 'react-icons/bs'
import { BsFillHeartPulseFill } from 'react-icons/bs'
import { MdBuild } from 'react-icons/md'
import { FaHorse, FaChevronRight } from 'react-icons/fa'
// import { FaVolleyball } from 'react-icons/fa'
import { GiLiquidSoap } from 'react-icons/gi'
import { BsHandbag } from 'react-icons/bs'

const icons = [
  { name: 'Halol nasiya', icon: <AiFillExclamationCircle /> },
  { name: 'Elektronika', icon: <SlEarphones /> },
  { name: 'Maishiy texnika', icon: <GiVendingMachine /> },
  { name: 'Kyim', icon: <GiClothes /> },
  { name: 'Poyabzallar', icon: <GiRunningShoe /> },
  { name: 'Akssessuarlar', icon: <BsFillBagHeartFill /> },
  { name: 'Salomatlik', icon: <BsFillHeartPulseFill /> },
  { name: 'Uy rozgor buyumlari', icon: <AiOutlineHome /> },
  { name: 'Qurilish va tamirlash', icon: <MdBuild /> },
  { name: 'Avtotovarlar', icon: <AiFillCar /> },
  { name: 'Bolalar tovarlari', icon: <FaHorse /> },
  { name: 'Hobbi va ijod', icon: <AiFillPicture /> },
  // { name: 'Gamepad', icon: <FaVolleyball /> },
  { name: 'Oziq-ovqat mahsulotlari', icon: <AiFillApple /> },
  { name: 'Maishiy texnikalar kimyoviy', icon: <GiLiquidSoap /> },
  { name: 'Kanselariya tovarlari', icon: <BsHandbag /> },
];

function Sidebar({ show, setShot }) {
  return (
    <>
      {show ? (
        <div onClick={() => setShot(false)} className="sidebar__shadow"></div>
      ) : (
        <></>
      )}
      <div className={`sidebar ${show ? "show" : ""}`}>
        <div className="sidebar__content">
          {icons?.map((icon, index) => (
            <div className="sidebar__item" key={index}>
              <div className="sidebar__icon">{icon.icon}</div>
              <span>{icon.name}</span>
              <div className="sidebar__arrow">
                <FaChevronRight className="right__icon"  />
              </div>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
