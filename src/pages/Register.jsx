import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import login from '../assets/home.png'

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className='container login__container'>
       
        <div className='login__container-img'>
          <img src={login}/>
        </div>

        <div className='login__container-form'>
          <h1>Register</h1>
          <form className='form__container'>
            <label for="email">Email address</label>
            <input type="email" name="" id="" />
            <label for="password">Password</label> 
            <input type="password" name="" required/> 
            <div>
            <a className='form__btn' href="/register">Create Account</a>
            <a className='form__btn' href="/register">Login</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
