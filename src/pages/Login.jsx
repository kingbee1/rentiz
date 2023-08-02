import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import login from '../assets/login.png'
import '../styles/login.css'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //submit handler function.
  const handleLogin = (e) => {
    e.preventDefault()
    let login = {email, password}
    console.log({email, password})
    

    fetch('http://localhost:5000/login/', {
      method: 'POST',
      crossDomain: true,
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email, 
        password, 
      })
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userRegister");
    })
  }

  return (
    <div>
      <Navbar />
      <div className='container login__container'>
       
        <div className='login__container-img'>
          <img src={login}/>
        </div>

        <div className='login__container-form'>
          <h1>Login</h1>
          <form onSubmit={handleLogin} className='form__container'>
            <input 
            value={email} 
            type="email" 
            name="" 
            onChange={(e) => setEmail (e.target.value)}
            placeholder='Email address' 
            />
            <input 
            type="password" 
            value={password}
            placeholder='Password' required
            onChange={(e) => setPassword(e.target.value)}
            /> 
            <button type="submit" className='form__btn'>Login</button>
          </form>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
