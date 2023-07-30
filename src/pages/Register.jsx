import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import register from "../assets/register.png";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
  }

  //let's validate registration credentials.
  const validate = () => {
    let isproceed = true;
    let errormessage = "insert your "
    if (confirmPassword === null || confirmPassword != password) {
      isproceed = false;
      errormessage += "password"
      console.log('confirmPassword')
    }
    if (!isproceed) {
      toast.warning(errormessage)
    } 
    return isproceed;
  }

  return (
    <div>
      <Navbar />
      <div className="container login__container">
        <div className="login__container-img">
          <img src={register} />
        </div>

        <div className="login__container-form">
          <h1>Register</h1>
          <form className="form__container" onSubmit={submitHandler}>
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
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
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
