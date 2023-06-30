import React from 'react'
import './Navbar.css'
import NavbarTop from './NavbarTop'
import NavbarMain from './NavbarMain'
import { useLocation } from 'react-router-dom'


function Navbar() {
    const location = useLocation().pathname

    if(location.includes("/admin")){
        return <></>
    }

    if(location.includes("/login")){
        return <></>
    }
    

    return (
        <div className='navbar'>
            <NavbarTop />
            <NavbarMain />
        </div>
    )
}

export default Navbar