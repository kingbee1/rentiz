import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import house from "../assets/home.png";
import vintage from "../assets/feature1.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LuBedDouble } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";
import { TbRulerMeasure } from "react-icons/tb";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Navbar />

      <header className="container header__container">
        <div className="header__content">
          <h1>Perfect Way To Buy And Sell A House</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            laborum sequi voluptate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quam laborum sequi voluptate.
          </p>
        </div>
        <div className="header__image">
          <img src={house} alt="houes" />
        </div>
      </header>

      <section className="container feature__container">
        <h1>Featured In</h1>
        <div className="feature__image">
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
          <img src={vintage} alt="" />
        </div>
      </section>

      <section className="container residence__container">
        <h1>Popular Residence 1B232F</h1>
        <Carousel responsive={responsive} className="residence__image">
          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>

          <div className="residence__card">
            <img src={house} alt="" />
            <h2>Aliva Priva Javoksf</h2>
            <p>Plot 3, arrington street, Abuja</p>
            <div className="residence__card-base">
              <div>
                <LuBedDouble className="icon" />
                <p>4 Beds</p>
              </div>
              <div>
                <LiaBathSolid className="icon" />
                <p>3 Bathroom</p>
              </div>
              <div>
                <TbRulerMeasure className="icon" />
                <p>619 Sqft.</p>
              </div>
            </div>
          </div>
        </Carousel>

        <div className="residence__btn">
        <button className="btn">View All Properties</button>

        </div>


      </section>
      <Footer />
    </div>
  );
};

export default Home;
