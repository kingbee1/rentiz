import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import login from '../assets/login.png'
import '../styles/login.css'

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='container login__container'>
       
        <div className='login__container-img'>
          <img src={login}/>
        </div>

        <div className='login__container-form'>
          <h1>Login</h1>
          <form className='form__container'>
            <input type="email" name="" id="" placeholder='Email address' />
            <input type="password" name="" placeholder='Password' required/> 
            <a className='form__btn' href="/register">Login</a>
          </form>
          <div className="header__search">
          <form className="header__search-form">
            <input type="text" placeholder="search" />
            <button type="submit">search</button>
          </form>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
