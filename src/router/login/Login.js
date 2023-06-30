import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineFacebook, AiOutlineApple, AiOutlineGoogle } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'
import { toast } from 'react-toastify';
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    if (username === "Abdulaziz" && password === "1234brr") {
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Hisobga kirildi!");
      navigate("/admin/create-product");
    } else {
      toast.error("Password or Username is wrong");
    }
    setUserName("");
    setPassword("");
  };


  return (
    <div className="login">
      <div className="login-container">
        <form action="" onSubmit={handleLogin}>
          <div className="form__buttons">
            <button>
              <AiOutlineFacebook style={{color: "#008df0"}} />
              Facebook orqali kirish
            </button>
            <button>
              <AiFillApple />
              Apple orqali kirish
            </button>
            <button>
              <AiOutlineGoogle style={{color: "red"}} />
              Google orqali kirsh
            </button>
          </div>
          <hr />
          <h5 style={{marginTop: "10px", color: "#555"}}>Login</h5> 
          <input type="text" placeholder='Login' value={username} onChange={e => setUserName(e.target.value)} /> <br />
          <h5 style={{color: "#555"}}>Parol</h5> 
          <input type="password" placeholder='Parol' value={password} onChange={e => setPassword(e.target.value)} /> <br /> <br />
          <button type='submit' className='login__btn'>Kirish</button> <br /> <br />
          <small>Avto tizatsiyadan o'tish orqali siz <span>shaxsiy
            ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz
          </span></small>  <br />
          <Link to={"/"}>
            <button className='home__btn'>Bosh sahifaga qaytish</button>
          </Link>
        </form>

      </div>
    </div>
  )
}

export default Login