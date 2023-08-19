import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () =>  setClick(!click); 
    



  return (
    <nav>
      <div className="container nav__container">
        <Link to={"/"} className="nav__container-logo logo">Rentiz</Link>
       
        <ul className={click ? 'nav__items' : 'menu'}>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to="/about-us"><li>About Us</li></NavLink>
          <NavLink to='/buying'><li>Buying</li></NavLink>
          <NavLink to='/renting'><li>Renting</li></NavLink>
          <NavLink to='/selling'><li>Selling</li></NavLink>
          <NavLink to='/contact-us'><li>Contact Us</li></NavLink>
        </ul>


        <div className="nav__signin-signup">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"} class="btn">
            Signup
          </Link>
        </div>

        <div className="menu__btn" onClick={handleClick}>
          {click ? <IoMdClose /> : <GiHamburgerMenu />  }
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
