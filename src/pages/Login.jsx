import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import login from '../assets/house2.png'
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
            <label for="email">Email address</label>
            <input type="email" name="" id="" />
            <label for="password">Password</label> 
            <input type="password" name="" required/> 
            <a className='form__btn' href="/register">Login</a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
