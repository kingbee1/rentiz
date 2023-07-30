import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import register from "../assets/register.png";
import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");

  return (
    <div>
      <Navbar />
      <div className="container login__container">
        <div className="login__container-img">
          <img src={register} />
        </div>

        <div className="login__container-form">
          <h1>Register</h1>
          <form className="form__container">
            <input 
            type="email" 
            name="" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address" />
            <input type="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Password" required />

            <input
              type="password"
              value={createPassword}
              onChange={(e)=> setCreatePassword(e.target.value)}
              placeholder="Confirm password"
              required
            />

            <input 
            type="text" 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number" />

            {/* <p>Are you working with an associate or office?</p> */}

            <div className="form__radio">
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setSex(e.target.value)}
                className="app-check"
              ></input>
              
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setSex(e.target.value)}
                className="app-check"
              ></input>
            </div>

            <button className="form__btn" href="/register">
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
