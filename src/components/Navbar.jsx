import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to={"/"}>Rentiz</Link>
        <ul className="nav__items">
          <li>Home</li>
          <li>About Us</li>
          <li>Buying</li>
          <li>Renting</li>
          <li>Selling</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav__signin-signup">
          <a href="#">Login</a>
          <a href="#" class="btn">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
