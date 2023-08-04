import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import register from "../assets/register.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [sex, setSex] = useState("");

  const navigate = useNavigate();

  //let's validate registration credentials.
  const validate = () => {
    let isproceed = true;
    let errormessage = "put your ";
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "email address";
      console.log({ errormessage });
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += "password";
    }

    if (confirmPassword === null || confirmPassword === "") {
      isproceed = false;
      errormessage += "password";
    }

    if (number === null || number === "") {
      isproceed = false;
      errormessage += "phone number";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      //if all ain't empty, regEx is used to confirm email matches this particular pattern.
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        //if it doesn't match the pattern, toast warning message.
        isproceed = false;
        toast.warning("please enter a valid email address");
      }
    }
    return isproceed;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let registration = { email, password, confirmPassword, number, sex };
    console.log(email, password, confirmPassword, number, sex)
    if (validate()){
    fetch('http://localhost:5000/register', {
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
        confirmPassword, 
        number, 
        sex,
      })
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userRegister");
      if(data.status=="oka"){
        toast.success("Registration complete")
        //navigate("/selling")
      } else {
        toast.error("user already exist!")
      }
    })
    .catch((err) =>{
      toast.error("An error occurred. Try later??")
    })
}
  };

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
              placeholder="Email address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />

            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone Number"
            />

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
          <p>Already registered? <a href="/login" >sign in</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
