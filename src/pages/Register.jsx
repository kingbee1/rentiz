import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import register from "../assets/register.png";

const Register = () => {
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
            <input type="email" name="" id="" placeholder="Email address" />
            <input type="password" name="" placeholder="Password" required />

            <input
              type="password"
              name=""
              placeholder="Confirm password"
              required
            />

            <input type="text" placeholder="Phone Number" />

            {/* <p>Are you working with an associate or office?</p> */}

            <div className="form__radio">
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="app-check"
              ></input>
              
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="app-check"
              ></input>
            </div>

            <a className="form__btn" href="/register">
              Create Account
            </a>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
