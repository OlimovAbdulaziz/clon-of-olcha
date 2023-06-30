import React from 'react'
import "./Admin.css"
import CreateProduct from './create-products/CreateProducts'
import ManageProduct from './manage-product/ManageProducts'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { toast } from 'react-toastify'

function Admin() {
    const navigate = useNavigate()


    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
        toast.warn("Hisobdan chiqildi")
    }
    return (
        <div className='admin'>
            <div className="admin__sidebar">
                <Link to={"/"}>
                    <button><AiOutlineArrowLeft /></button>
                </Link>
                <h2>Admin Dashboard</h2>

                <ul className="admin__collection">
                    <li className="admin__item">
                        <NavLink className="admin__link" to={`create-product`}>Create Product</NavLink>
                    </li>
                    <li className="admin__item">
                        <NavLink className="admin__link" to={`manage-product`}>Manage Product</NavLink>
                    </li>
                </ul>
                <button className='logout' onClick={() => handleLogout()}>Hisobdan chiqish</button>
            </div>
            <div className="admin__content">
                <Routes>
                    <Route path='/create-product' element={<CreateProduct />} />
                    <Route path='/manage-product' element={<ManageProduct />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin