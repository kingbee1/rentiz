import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to={"/"}>Rentiz</Link>
        <ul className="nav__items">
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About Us</li></Link>
          <Link><li>Buying</li></Link>
          <Link><li>Renting</li></Link>
          <Link><li>Selling</li></Link>
          <Link><li>Contact Us</li></Link>
        </ul>
        <div className="nav__signin-signup">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"} class="btn">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
